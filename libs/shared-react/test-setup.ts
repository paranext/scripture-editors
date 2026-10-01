// Polyfill browser globals missing from jsdom that @lexical/rich-text references at runtime.
// objectKlassEquals(event, DragEvent) and objectKlassEquals(event, ClipboardEvent) check
// objectClass.name, so these constructors must exist as named classes.

if (typeof globalThis.DragEvent === "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).DragEvent = class DragEvent extends Event {};
}

if (typeof globalThis.ClipboardEvent === "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).ClipboardEvent = class ClipboardEvent extends Event {};
}

// jsdom has neither the CSS Custom Highlight API nor the `CSS` namespace. The annotation painter
// registers partly painted display bytes there, and tests read them back, so a registry that keeps
// what is set is enough.
if (typeof globalThis.Highlight === "undefined") {
  class Highlight extends Set<AbstractRange> {
    priority = 0;
    type: HighlightType = "highlight";
    constructor(...ranges: AbstractRange[]) {
      super(ranges);
    }
  }
  Object.defineProperty(globalThis, "Highlight", { value: Highlight, configurable: true });
}

if (typeof globalThis.CSS === "undefined") {
  Object.defineProperty(globalThis, "CSS", {
    value: { highlights: new Map<string, Highlight>() },
    configurable: true,
  });
}
