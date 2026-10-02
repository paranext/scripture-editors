import {
  AnnotationHighlighter,
  annotationHighlightClassNames,
  getHighlightApi,
  highlightDeclarations,
  rangeOverText,
} from "./annotationHighlights";
import { vi } from "vitest";

let cleanups: (() => void)[] = [];

afterEach(() => {
  cleanups.forEach((cleanup) => cleanup());
  cleanups = [];
});

function stylesheet(css: string): HTMLStyleElement {
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);
  cleanups.push(() => style.remove());
  return style;
}

function container(className = ""): HTMLElement {
  const element = document.createElement("div");
  element.className = className;
  document.body.append(element);
  cleanups.push(() => element.remove());
  return element;
}

function probes(parent: HTMLElement, classNames: string): [HTMLElement, HTMLElement] {
  const probe = document.createElement("span");
  probe.className = classNames;
  const baseline = document.createElement("span");
  parent.append(probe, baseline);
  return [probe, baseline];
}

/** The rules every editor highlight stylesheet in the page holds. */
function highlightCss(): string {
  return [...document.head.querySelectorAll("style[data-editor-annotation-highlights]")]
    .map((style) => style.textContent ?? "")
    .join("\n");
}

describe("highlightDeclarations", () => {
  it("copies the paintable properties a class rule sets", () => {
    stylesheet(".a { background-color: rgb(1, 2, 3); color: rgb(4, 5, 6); }");
    const [probe, baseline] = probes(container(), "a");
    expect(highlightDeclarations(probe, baseline)).toEqual([
      "background-color: rgb(1, 2, 3)",
      "color: rgb(4, 5, 6)",
    ]);
  });

  it("never copies a property the classes do not change, such as an inherited color", () => {
    stylesheet(".parent { color: rgb(0, 0, 255); } .a { background-color: rgb(1, 2, 3); }");
    const [probe, baseline] = probes(container("parent"), "a");
    expect(highlightDeclarations(probe, baseline)).toEqual(["background-color: rgb(1, 2, 3)"]);
  });

  it("turns a bottom border into an underline of the same style, color and width", () => {
    stylesheet(".a { border-bottom: 2px dashed rgb(255, 0, 0); }");
    const [probe, baseline] = probes(container(), "a");
    expect(highlightDeclarations(probe, baseline)).toEqual([
      "text-decoration-line: underline",
      "text-decoration-style: dashed",
      "text-decoration-color: rgb(255, 0, 0)",
      "text-decoration-thickness: 2px",
    ]);
  });

  describe("with the longhands Chromium computes", () => {
    /** A computed style that reads `values`, as Chromium reports them; jsdom computes none of the
     * `text-decoration-*` longhands. */
    function computed(values: { [property: string]: string }): CSSStyleDeclaration {
      const style = document.createElement("span").style;
      style.getPropertyValue = (property: string) => values[property] ?? "";
      return style;
    }

    /** `.colored { color: blue; border-bottom: 1px dashed red }` and the plain baseline. */
    const colored = computed({
      color: "rgb(0, 0, 255)",
      "background-color": "rgba(0, 0, 0, 0)",
      "text-decoration": "none solid rgb(0, 0, 255)",
      "text-decoration-line": "none",
      "text-decoration-style": "solid",
      "text-decoration-color": "rgb(0, 0, 255)",
      "text-decoration-thickness": "auto",
      "text-shadow": "none",
      "border-bottom-style": "dashed",
      "border-bottom-color": "rgb(255, 0, 0)",
      "border-bottom-width": "1px",
    });
    const plain = computed({
      color: "rgb(0, 0, 0)",
      "background-color": "rgba(0, 0, 0, 0)",
      "text-decoration": "none solid rgb(0, 0, 0)",
      "text-decoration-line": "none",
      "text-decoration-style": "solid",
      "text-decoration-color": "rgb(0, 0, 0)",
      "text-decoration-thickness": "auto",
      "text-shadow": "none",
      "border-bottom-style": "none",
      "border-bottom-color": "rgb(0, 0, 0)",
      "border-bottom-width": "0px",
    });

    afterEach(() => vi.restoreAllMocks());

    it("still turns a bottom border into an underline when the rule also sets a color", () => {
      const [probe, baseline] = probes(container(), "colored");
      vi.spyOn(window, "getComputedStyle").mockImplementation((element) =>
        element === probe ? colored : plain,
      );
      expect(highlightDeclarations(probe, baseline)).toEqual([
        "color: rgb(0, 0, 255)",
        "text-decoration-line: underline",
        "text-decoration-style: dashed",
        "text-decoration-color: rgb(255, 0, 0)",
        "text-decoration-thickness: 1px",
      ]);
    });

    it("copies a decoration that draws a line, and adds no underline for a border beside it", () => {
      const [probe, baseline] = probes(container(), "spelling");
      const spelling = computed({
        "text-decoration-line": "underline",
        "text-decoration-style": "wavy",
        "text-decoration-color": "rgb(255, 0, 0)",
        "text-decoration-thickness": "auto",
        "border-bottom-style": "solid",
        "border-bottom-color": "rgb(0, 128, 0)",
        "border-bottom-width": "1px",
      });
      vi.spyOn(window, "getComputedStyle").mockImplementation((element) =>
        element === probe ? spelling : plain,
      );
      expect(highlightDeclarations(probe, baseline)).toEqual([
        "text-decoration-line: underline",
        "text-decoration-style: wavy",
        "text-decoration-color: rgb(255, 0, 0)",
      ]);
    });
  });

  it("applies a compound rule to the class set that matches it", () => {
    stylesheet(".a { color: rgb(1, 1, 1); } .a.b { color: rgb(9, 9, 9); }");
    const parent = container();
    const [both, baseline] = probes(parent, "a b");
    const [one] = probes(parent, "a");
    expect(highlightDeclarations(both, baseline)).toEqual(["color: rgb(9, 9, 9)"]);
    expect(highlightDeclarations(one, baseline)).toEqual(["color: rgb(1, 1, 1)"]);
  });
});

describe("AnnotationHighlighter", () => {
  function setup() {
    const api = getHighlightApi();
    if (!api) throw new Error("the test setup provides a highlight registry");
    const parent = container();
    const text = document.createElement("span");
    text.textContent = "|lemma=grace";
    parent.append(text);
    const highlighter = new AnnotationHighlighter(api, () => parent);
    cleanups.push(() => highlighter.dispose());
    return { highlighter, text };
  }

  it("registers one highlight per class set, styled from the host's rules", async () => {
    stylesheet(".editor-typed-mark-external-x { background-color: rgb(1, 2, 3); }");
    const { highlighter, text } = setup();
    const range = rangeOverText(text, 7, 12);
    if (!range) throw new Error("the text renders 12 characters");
    highlighter.setLeaf("k", [
      { classNames: ["editor-typed-mark-external-x"], annotations: ["a"], range, text: "grace" },
    ]);
    await Promise.resolve();
    const [[name, highlight]] = [...CSS.highlights];
    expect(annotationHighlightClassNames(name)).toEqual(["editor-typed-mark-external-x"]);
    expect([...highlight].map((painted) => (painted as Range).toString())).toEqual(["grace"]);
    expect(highlightCss()).toBe(`::highlight(${name}) { background-color: rgb(1, 2, 3); }`);

    highlighter.clearLeaf("k");
    expect([...CSS.highlights]).toEqual([]);
  });

  it("styles a class set a rule names only through an escaped selector", async () => {
    stylesheet(".annotationId-a\\:b { background-color: rgb(4, 5, 6); }");
    const { highlighter, text } = setup();
    const range = rangeOverText(text, 0, 1);
    if (!range) throw new Error("the text renders 12 characters");
    highlighter.setLeaf("k", [
      { classNames: ["annotationId-a:b"], annotations: ["a"], range, text: "|" },
    ]);
    await Promise.resolve();
    expect(highlightCss()).toContain("background-color: rgb(4, 5, 6)");
  });

  it("writes no rule for a class set no stylesheet names", async () => {
    stylesheet(".other { background-color: rgb(4, 5, 6); }");
    const { highlighter, text } = setup();
    const range = rangeOverText(text, 0, 1);
    if (!range) throw new Error("the text renders 12 characters");
    highlighter.setLeaf("k", [{ classNames: ["unstyled"], annotations: ["a"], range, text: "|" }]);
    await Promise.resolve();
    expect(highlightCss()).toBe("");
  });

  it("restyles a highlight when a host rewrites its stylesheet", async () => {
    const style = stylesheet(".x { background-color: rgb(1, 2, 3); }");
    const { highlighter, text } = setup();
    const range = rangeOverText(text, 0, 1);
    if (!range) throw new Error("the text renders 12 characters");
    highlighter.setLeaf("k", [{ classNames: ["x"], annotations: ["a"], range, text: "|" }]);
    await Promise.resolve();
    expect(highlightCss()).toContain("rgb(1, 2, 3)");

    style.textContent = ".x { background-color: rgb(7, 8, 9); }";
    // The page's MutationObserver delivery, then the queued render.
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(highlightCss()).toContain("rgb(7, 8, 9)");
  });
});

describe("AnnotationHighlighter, deciding whether a class set needs measuring", () => {
  afterEach(() => vi.restoreAllMocks());

  /** Paint one character with `className`, and report whether a probe with it was measured. */
  async function measures(className: string, change?: () => void): Promise<boolean> {
    const api = getHighlightApi();
    if (!api) throw new Error("the test setup provides a highlight registry");
    const parent = container();
    const text = document.createElement("span");
    text.textContent = "|";
    parent.append(text);
    const highlighter = new AnnotationHighlighter(api, () => parent);
    cleanups.push(() => highlighter.dispose());
    const measured = vi.spyOn(window, "getComputedStyle");
    const range = rangeOverText(text, 0, 1);
    if (!range) throw new Error("the text renders a character");
    highlighter.setLeaf("k", [{ classNames: [className], annotations: ["a"], range, text: "|" }]);
    await Promise.resolve();
    if (change) {
      measured.mockClear();
      change();
      highlighter.noticeStylesheetChanges();
      await Promise.resolve();
    }
    return measured.mock.calls.some(([element]) => element.classList.contains(className));
  }

  it("measures a class set a nested rule names", async () => {
    stylesheet(".outer { .nested-only { background-color: rgb(1, 2, 3); } }");
    expect(await measures("nested-only")).toBe(true);
  });

  it("measures every class set while a stylesheet cannot be read", async () => {
    const style = stylesheet(".elsewhere { color: rgb(1, 2, 3); }");
    const sheet = style.sheet;
    if (!sheet) throw new Error("the style element has a sheet");
    Object.defineProperty(sheet, "cssRules", {
      configurable: true,
      get: () => {
        throw new DOMException("cross-origin", "SecurityError");
      },
    });
    // jsdom's own cascade reads the same rules, so the measurement itself is stubbed.
    vi.spyOn(window, "getComputedStyle").mockReturnValue(document.createElement("span").style);
    expect(await measures("unnamed-anywhere")).toBe(true);
  });

  it("measures a class set an adopted stylesheet names", async () => {
    const adopted = new CSSStyleSheet();
    adopted.replaceSync(".adopted-only { color: rgb(1, 2, 3); }");
    Object.defineProperty(document, "adoptedStyleSheets", {
      configurable: true,
      value: [adopted],
    });
    cleanups.push(() => Reflect.deleteProperty(document, "adoptedStyleSheets"));
    expect(await measures("adopted-only")).toBe(true);
  });

  it("measures a class set a rule inserted later names", async () => {
    const style = stylesheet(".other { color: rgb(1, 2, 3); }");
    expect(
      await measures("inserted-later", () =>
        style.sheet?.insertRule(".inserted-later { color: rgb(4, 5, 6); }"),
      ),
    ).toBe(true);
  });

  it("still skips a class set no readable rule names", async () => {
    stylesheet(".other { color: rgb(1, 2, 3); }");
    expect(await measures("unnamed-anywhere")).toBe(false);
  });
});

describe("AnnotationHighlighter measuring", () => {
  afterEach(() => vi.restoreAllMocks());

  function highlighterIn(parent: HTMLElement) {
    const api = getHighlightApi();
    if (!api) throw new Error("the test setup provides a highlight registry");
    const text = document.createElement("span");
    text.textContent = "abc";
    parent.append(text);
    const highlighter = new AnnotationHighlighter(api, () => parent);
    cleanups.push(() => highlighter.dispose());
    const paint = (key: string, classNames: string[]) => {
      const range = rangeOverText(text, 0, 1);
      if (!range) throw new Error("the text renders a character");
      highlighter.setLeaf(key, [{ classNames, annotations: [key], range, text: "a" }]);
    };
    return { highlighter, paint };
  }

  it("puts every probe in place before reading any, so the page lays out once", async () => {
    stylesheet(
      ".m1 { color: rgb(1, 1, 1); } .m2 { color: rgb(2, 2, 2); } .m3 { color: rgb(3, 3, 3); }",
    );
    const parent = container();
    const { paint } = highlighterIn(parent);
    const original = window.getComputedStyle.bind(window);
    const probesInPlace: number[] = [];
    vi.spyOn(window, "getComputedStyle").mockImplementation((element, pseudo) => {
      probesInPlace.push(parent.querySelectorAll("[data-editor-annotation-probes] > *").length);
      return original(element, pseudo);
    });
    paint("a", ["m1"]);
    paint("b", ["m2"]);
    paint("c", ["m3"]);
    await Promise.resolve();
    // Three probes and the baseline, all there from the first read on.
    expect(probesInPlace.length).toBeGreaterThan(0);
    expect(new Set(probesInPlace)).toEqual(new Set([4]));
  });

  it("keeps its measurements when another editor writes its own highlight stylesheet", async () => {
    stylesheet(".first { color: rgb(1, 1, 1); } .second { color: rgb(2, 2, 2); }");
    const first = highlighterIn(container());
    const second = highlighterIn(container());
    first.paint("a", ["first"]);
    await new Promise((resolve) => setTimeout(resolve, 0));
    const measured = vi.spyOn(window, "getComputedStyle");
    second.paint("b", ["second"]);
    // The second editor's render, then any observer delivery and re-render it would cause.
    await new Promise((resolve) => setTimeout(resolve, 0));
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(highlightCss()).toContain("rgb(2, 2, 2)");
    expect(measured.mock.calls.some(([element]) => element.classList.contains("first"))).toBe(
      false,
    );
  });
});

describe("rangeOverText", () => {
  it("spans characters across the text nodes an element renders", () => {
    const element = container();
    element.innerHTML = "<span>ab</span>cd";
    expect(rangeOverText(element, 1, 3)?.toString()).toBe("bc");
  });

  it("is undefined when the element renders fewer characters than asked for", () => {
    const element = container();
    element.textContent = "ab";
    expect(rangeOverText(element, 1, 3)).toBeUndefined();
  });
});
