import {
  AnnotationHighlighter,
  annotationHighlightClassNames,
  getHighlightApi,
  highlightDeclarations,
  rangeOverText,
} from "./annotationHighlights";

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
      { classNames: ["editor-typed-mark-external-x"], annotations: ["a"], range },
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
    highlighter.setLeaf("k", [{ classNames: ["annotationId-a:b"], annotations: ["a"], range }]);
    await Promise.resolve();
    expect(highlightCss()).toContain("background-color: rgb(4, 5, 6)");
  });

  it("writes no rule for a class set no stylesheet names", async () => {
    stylesheet(".other { background-color: rgb(4, 5, 6); }");
    const { highlighter, text } = setup();
    const range = rangeOverText(text, 0, 1);
    if (!range) throw new Error("the text renders 12 characters");
    highlighter.setLeaf("k", [{ classNames: ["unstyled"], annotations: ["a"], range }]);
    await Promise.resolve();
    expect(highlightCss()).toBe("");
  });

  it("restyles a highlight when a host rewrites its stylesheet", async () => {
    const style = stylesheet(".x { background-color: rgb(1, 2, 3); }");
    const { highlighter, text } = setup();
    const range = rangeOverText(text, 0, 1);
    if (!range) throw new Error("the text renders 12 characters");
    highlighter.setLeaf("k", [{ classNames: ["x"], annotations: ["a"], range }]);
    await Promise.resolve();
    expect(highlightCss()).toContain("rgb(1, 2, 3)");

    style.textContent = ".x { background-color: rgb(7, 8, 9); }";
    // The page's MutationObserver delivery, then the queued render.
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(highlightCss()).toContain("rgb(7, 8, 9)");
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
