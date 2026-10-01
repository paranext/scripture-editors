/**
 * Painting part of a display-byte node's text, which no element can do without restructuring the
 * DOM Lexical owns: CSS Custom Highlights (`CSS.highlights`), one per distinct set of annotation
 * class names, styled by the editor itself from the host's own class rules.
 *
 * Hosts style annotations by class (`.editor-typed-mark-external-<type>`, `.annotationId-<id>`,
 * compound and state rules included). A hidden probe element carrying a class set, beside one
 * carrying none, shows which properties those rules set; the ones a highlight can paint are copied
 * into a `::highlight()` rule. A bottom border becomes an underline, the closest a highlight can
 * draw. Every other property (other borders, radius, padding, margin, opacity, fonts, cursor) and
 * `:hover` rules apply only where an element is painted whole. The probes are measured again
 * whenever a stylesheet in `<head>` or the page's theme attributes change.
 */

import { NodeKey } from "lexical";

/** What this module needs of the CSS Custom Highlight API. */
interface HighlightApi {
  registry: HighlightRegistry;
  create: () => Highlight;
}

/** The page's highlight API, or `undefined` where the browser has none (painting then falls back
 * to whole elements). */
export function getHighlightApi(): HighlightApi | undefined {
  if (typeof CSS === "undefined" || typeof Highlight === "undefined") return undefined;
  if (!("highlights" in CSS)) return undefined;
  const registry = CSS.highlights;
  return { registry, create: () => new Highlight() };
}

/** Each live highlight name's class names, for reading what a registered highlight paints. */
const classNamesByHighlight = new Map<string, readonly string[]>();

/** The annotation class names the editor highlight called `name` paints with, if it is one. */
export function annotationHighlightClassNames(name: string): readonly string[] | undefined {
  return classNamesByHighlight.get(name);
}

/** The properties a `::highlight()` rule can paint, read from a probe in this order. */
const HIGHLIGHT_PROPERTIES = [
  "background-color",
  "color",
  "text-decoration-line",
  "text-decoration-style",
  "text-decoration-color",
  "text-decoration-thickness",
  "text-shadow",
];

const DECORATION_STYLES = new Set(["solid", "double", "dotted", "dashed", "wavy"]);

/**
 * The `::highlight()` declarations for what `probe`'s classes set beyond `baseline`: only the
 * properties that differ, so an inherited color is never copied over a glyph's own.
 */
export function highlightDeclarations(probe: Element, baseline: Element): string[] {
  const view = probe.ownerDocument.defaultView;
  if (!view) return [];
  const styled = view.getComputedStyle(probe);
  const plain = view.getComputedStyle(baseline);
  const changed = (property: string): string | undefined => {
    const value = styled.getPropertyValue(property);
    return value && value !== plain.getPropertyValue(property) ? value : undefined;
  };
  const declarations: string[] = [];
  for (const property of HIGHLIGHT_PROPERTIES) {
    const value = changed(property);
    if (value) declarations.push(`${property}: ${value}`);
  }
  const hasDecoration = () => declarations.some((line) => line.startsWith("text-decoration"));
  // Some engines report a decoration only through its shorthand.
  const shorthand = changed("text-decoration");
  if (!hasDecoration() && shorthand) declarations.push(`text-decoration: ${shorthand}`);
  const borderStyle = changed("border-bottom-style");
  if (!hasDecoration() && borderStyle && borderStyle !== "none") {
    declarations.push(
      "text-decoration-line: underline",
      `text-decoration-style: ${DECORATION_STYLES.has(borderStyle) ? borderStyle : "solid"}`,
    );
    const color = styled.getPropertyValue("border-bottom-color");
    if (color) declarations.push(`text-decoration-color: ${color}`);
    const width = styled.getPropertyValue("border-bottom-width");
    if (width) declarations.push(`text-decoration-thickness: ${width}`);
  }
  return declarations;
}

let nextPainterId = 0;

/** One registered highlight: the ranges painting one class set. */
interface ClassSetHighlight {
  name: string;
  classNames: readonly string[];
  highlight: Highlight;
  uses: number;
}

/** One painted piece of a leaf's text. */
export interface LeafHighlight {
  classNames: readonly string[];
  /** The annotations (index keys) painting it. */
  annotations: readonly string[];
  range: Range;
}

/** Partial-text painting for one editor: highlight registration, ranges per leaf, and the
 * translated stylesheet. */
export class AnnotationHighlighter {
  private readonly prefix = `editor-annotation-${nextPainterId++}`;
  private readonly byClassSet = new Map<string, ClassSetHighlight>();
  private readonly byLeaf = new Map<NodeKey, LeafHighlight[]>();
  private nextName = 0;
  private style: HTMLStyleElement | undefined;
  private probes: HTMLElement | undefined;
  private observer: MutationObserver | undefined;
  private renderQueued = false;

  constructor(
    private readonly api: HighlightApi,
    /** Where the probes go: beside the editable content, so rules scoped to the editor's
     * container still match them. */
    private readonly probeParent: () => Element | null,
  ) {}

  /** The pieces painted on leaf `key`. */
  leafHighlights(key: NodeKey): readonly LeafHighlight[] {
    return this.byLeaf.get(key) ?? [];
  }

  /** Replace leaf `key`'s painted pieces. */
  setLeaf(key: NodeKey, pieces: LeafHighlight[]): void {
    this.clearLeaf(key);
    if (pieces.length === 0) return;
    for (const piece of pieces) this.use(piece.classNames).highlight.add(piece.range);
    this.byLeaf.set(key, pieces);
  }

  clearLeaf(key: NodeKey): void {
    for (const piece of this.byLeaf.get(key) ?? []) {
      const entry = this.byClassSet.get(classSetKey(piece.classNames));
      if (!entry) continue;
      entry.highlight.delete(piece.range);
      if (--entry.uses > 0) continue;
      this.api.registry.delete(entry.name);
      classNamesByHighlight.delete(entry.name);
      this.byClassSet.delete(classSetKey(piece.classNames));
      this.queueRender();
    }
    this.byLeaf.delete(key);
  }

  dispose(): void {
    for (const key of [...this.byLeaf.keys()]) this.clearLeaf(key);
    this.observer?.disconnect();
    this.style?.remove();
    this.probes?.remove();
  }

  private use(classNames: readonly string[]): ClassSetHighlight {
    const key = classSetKey(classNames);
    let entry = this.byClassSet.get(key);
    if (!entry) {
      const name = `${this.prefix}-${this.nextName++}`;
      const highlight = this.api.create();
      // Later class sets paint above earlier ones, as rules later in a stylesheet would win.
      highlight.priority = this.nextName;
      entry = { name, classNames, highlight, uses: 0 };
      this.byClassSet.set(key, entry);
      this.api.registry.set(name, highlight);
      classNamesByHighlight.set(name, classNames);
      this.queueRender();
    }
    entry.uses++;
    return entry;
  }

  private queueRender(): void {
    if (this.renderQueued) return;
    this.renderQueued = true;
    queueMicrotask(() => {
      this.renderQueued = false;
      this.render();
    });
  }

  /** Measure every class set's probe and write the stylesheet, when it changed. */
  render(): void {
    const parent = this.probeParent();
    if (!parent) return;
    const document = parent.ownerDocument;
    this.observe(document);
    if (!this.probes?.isConnected || this.probes.parentElement !== parent) {
      this.probes?.remove();
      this.probes = document.createElement("div");
      this.probes.setAttribute("aria-hidden", "true");
      this.probes.setAttribute("data-editor-annotation-probes", "");
      this.probes.style.cssText =
        "position:absolute;width:0;height:0;overflow:hidden;visibility:hidden;pointer-events:none";
      parent.append(this.probes);
    }
    const probes = this.probes;
    probes.replaceChildren();
    const baseline = document.createElement("span");
    probes.append(baseline);
    const rules: string[] = [];
    for (const { name, classNames } of this.byClassSet.values()) {
      const probe = document.createElement("span");
      probe.className = classNames.join(" ");
      probes.append(probe);
      const declarations = highlightDeclarations(probe, baseline);
      if (declarations.length > 0)
        rules.push(`::highlight(${name}) { ${declarations.join("; ")}; }`);
    }
    probes.replaceChildren();
    const text = rules.join("\n");
    if (!this.style?.isConnected) {
      this.style = document.createElement("style");
      this.style.setAttribute("data-editor-annotation-highlights", this.prefix);
      document.head.append(this.style);
    }
    if (this.style.textContent !== text) this.style.textContent = text;
  }

  /** Measure again when a stylesheet or the page's theme changes; never for this painter's own
   * stylesheet, which `render` writes. */
  private observe(document: Document): void {
    if (this.observer) return;
    const view = document.defaultView;
    if (!view) return;
    this.observer = new view.MutationObserver((records) => {
      const own = this.style;
      if (records.every((record) => own && (record.target === own || own.contains(record.target))))
        return;
      this.queueRender();
    });
    this.observer.observe(document.head, { childList: true, characterData: true, subtree: true });
    const themed = { attributes: true, attributeFilter: ["class", "style", "data-theme"] };
    this.observer.observe(document.documentElement, themed);
    if (document.body) this.observer.observe(document.body, themed);
  }
}

function classSetKey(classNames: readonly string[]): string {
  return JSON.stringify([...classNames].sort());
}

/**
 * A DOM range over characters `[start, end)` of `element`'s rendered text, or `undefined` when the
 * element does not (yet) render that many characters — a decorator's portal renders after the
 * commit.
 */
export function rangeOverText(element: HTMLElement, start: number, end: number): Range | undefined {
  const document = element.ownerDocument;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let offset = 0;
  let started = false;
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const length = node.textContent?.length ?? 0;
    if (!started && start < offset + length) {
      range.setStart(node, start - offset);
      started = true;
    }
    if (started && end <= offset + length) {
      range.setEnd(node, end - offset);
      return range;
    }
    offset += length;
  }
  return undefined;
}

/** Whether the point `(x, y)` falls inside any line box of `range`. */
export function rangeContainsPoint(range: Range, x: number, y: number): boolean {
  if (!("getClientRects" in range)) return false;
  return Array.from(range.getClientRects()).some(
    (rect) => x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom,
  );
}
