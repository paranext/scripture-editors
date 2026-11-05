import {
  clearDecoratorPaints,
  DECORATOR_PAINT_ATTRIBUTE,
  DecoratorPaint,
  getDecoratorPaint,
  paintedPieceKeys,
  paintedPieceOf,
  renderDecoratorPaint,
  setDecoratorPaint,
  subscribeDecoratorPaint,
} from "./decoratorPaint.js";
import { createEditor } from "lexical";
import { vi } from "vitest";

const KEY_A = JSON.stringify(["check", "a"]);
const KEY_B = JSON.stringify(["check", "b"]);

/** `12` of `\v 12 ` painted by `a`, its `2` by `b` too. */
const PAINT: DecoratorPaint = [
  { start: 3, end: 4, classNames: ["mark-check", "annotationId-a"], annotationKeys: [KEY_A] },
  {
    start: 4,
    end: 5,
    classNames: ["mark-check", "annotationId-a", "annotationId-b"],
    annotationKeys: [KEY_A, KEY_B],
  },
];

describe("the decorator paint store", () => {
  it("keeps each decorator's paint per editor and tells its subscribers when it changes", () => {
    const editor = createEditor();
    const other = createEditor();
    const listener = vi.fn();
    const otherKeyListener = vi.fn();
    subscribeDecoratorPaint(editor, "1", listener);
    subscribeDecoratorPaint(editor, "2", otherKeyListener);

    setDecoratorPaint(editor, "1", PAINT);
    expect(getDecoratorPaint(editor, "1")).toBe(PAINT);
    expect(getDecoratorPaint(other, "1")).toEqual([]);
    expect(getDecoratorPaint(editor, "2")).toEqual([]);
    expect(listener).toHaveBeenCalledTimes(1);
    expect(otherKeyListener).not.toHaveBeenCalled();

    // The same paint, as a fresh copy, is no change.
    setDecoratorPaint(
      editor,
      "1",
      PAINT.map((segment) => ({ ...segment })),
    );
    expect(listener).toHaveBeenCalledTimes(1);

    setDecoratorPaint(editor, "1", PAINT.slice(0, 1));
    expect(getDecoratorPaint(editor, "1")).toEqual(PAINT.slice(0, 1));
    expect(listener).toHaveBeenCalledTimes(2);

    setDecoratorPaint(editor, "1", []);
    expect(getDecoratorPaint(editor, "1")).toEqual([]);
    expect(listener).toHaveBeenCalledTimes(3);
  });

  it("tells a subscriber nothing once it unsubscribes", () => {
    const editor = createEditor();
    const listener = vi.fn();
    const unsubscribe = subscribeDecoratorPaint(editor, "1", listener);
    unsubscribe();
    setDecoratorPaint(editor, "1", PAINT);
    expect(listener).not.toHaveBeenCalled();
    expect(getDecoratorPaint(editor, "1")).toBe(PAINT);
  });

  it("forgets every paint of an editor on clear, telling the subscribers of the painted ones", () => {
    const editor = createEditor();
    const other = createEditor();
    const painted = vi.fn();
    const unpainted = vi.fn();
    subscribeDecoratorPaint(editor, "1", painted);
    subscribeDecoratorPaint(editor, "2", unpainted);
    setDecoratorPaint(editor, "1", PAINT);
    setDecoratorPaint(other, "1", PAINT);
    painted.mockClear();

    clearDecoratorPaints(editor);
    expect(getDecoratorPaint(editor, "1")).toEqual([]);
    expect(painted).toHaveBeenCalledTimes(1);
    expect(unpainted).not.toHaveBeenCalled();
    expect(getDecoratorPaint(other, "1")).toBe(PAINT);
    // Clearing an editor that never painted is harmless.
    clearDecoratorPaints(createEditor());
  });
});

describe("renderDecoratorPaint", () => {
  it("wraps each painted run of the text in a sub-span carrying its classes and keys", () => {
    const element = document.createElement("span");
    renderDecoratorPaint(element, "\\v 12 ", PAINT);
    expect(element.textContent).toBe("\\v 12 ");
    const spans = [...element.querySelectorAll(`[${DECORATOR_PAINT_ATTRIBUTE}]`)];
    expect(spans.map((span) => span.textContent)).toEqual(["1", "2"]);
    expect(spans.map((span) => [...span.classList])).toEqual([
      ["mark-check", "annotationId-a"],
      ["mark-check", "annotationId-a", "annotationId-b"],
    ]);
    expect(spans.map(paintedPieceKeys)).toEqual([[KEY_A], [KEY_A, KEY_B]]);
    expect([...element.childNodes].map((child) => child.textContent)).toEqual([
      "\\v ",
      "1",
      "2",
      " ",
    ]);
    // A text inside a sub-span is in that sub-span; the plain text around them is in none.
    expect(paintedPieceOf(spans[0].firstChild)).toBe(spans[0]);
    expect(paintedPieceOf(element.firstChild)).toBeUndefined();
    expect(paintedPieceKeys(element)).toEqual([]);
  });

  it("writes nothing when the element already shows that paint", () => {
    const element = document.createElement("span");
    renderDecoratorPaint(element, "\\v 12 ", PAINT);
    const children = [...element.childNodes];
    renderDecoratorPaint(element, "\\v 12 ", PAINT);
    expect(children.every((child, index) => child === element.childNodes[index])).toBe(true);
  });

  it("clamps a run to the text and writes plain text for no paint", () => {
    const element = document.createElement("span");
    renderDecoratorPaint(element, "12", [
      { start: 1, end: 9, classNames: ["c"], annotationKeys: [KEY_A] },
    ]);
    expect([...element.childNodes].map((child) => child.textContent)).toEqual(["1", "2"]);

    renderDecoratorPaint(element, "12", []);
    expect(element.childNodes).toHaveLength(1);
    expect(element.textContent).toBe("12");
    expect(element.querySelector(`[${DECORATOR_PAINT_ATTRIBUTE}]`)).toBeNull();
    expect(element.hasAttribute("data-painted")).toBe(false);
  });

  it("rewrites the element when its text changed under the same paint", () => {
    const element = document.createElement("span");
    renderDecoratorPaint(element, "\\v 12 ", PAINT);
    element.textContent = "changed";
    renderDecoratorPaint(element, "\\v 12 ", PAINT);
    expect(element.textContent).toBe("\\v 12 ");
    expect(element.querySelectorAll(`[${DECORATOR_PAINT_ATTRIBUTE}]`)).toHaveLength(2);
  });
});
