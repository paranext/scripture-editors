import { DecoratorPaintedText } from "./DecoratorPaintedText";
import { act, render } from "@testing-library/react";
import { createEditor } from "lexical";
import {
  clearDecoratorPaints,
  DECORATOR_PAINT_ATTRIBUTE,
  DecoratorPaint,
  renderDecoratorPaint,
  setDecoratorPaint,
} from "shared";

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

/** `element`'s children: a plain text as its text, a sub-span as its text, classes and keys. */
function shown(element: Element): (string | [string, string, string | null])[] {
  return [...element.childNodes].map((child) =>
    child instanceof Element
      ? [child.textContent ?? "", child.className, child.getAttribute(DECORATOR_PAINT_ATTRIBUTE)]
      : (child.textContent ?? ""),
  );
}

/** What `renderDecoratorPaint` writes into an element for `text` and `paint` ({@link shown}). */
function domPainted(text: string, paint: DecoratorPaint): ReturnType<typeof shown> {
  const element = document.createElement("span");
  renderDecoratorPaint(element, text, paint);
  return shown(element);
}

describe("DecoratorPaintedText", () => {
  it("renders its decorator's paint as the DOM-painted decorators do, and follows it", () => {
    const editor = createEditor();
    const { container } = render(
      <DecoratorPaintedText editor={editor} nodeKey="7" text={"\\v 12 "} />,
    );
    expect(shown(container)).toEqual(["\\v 12 "]);

    act(() => setDecoratorPaint(editor, "7", PAINT));
    expect(shown(container)).toEqual(domPainted("\\v 12 ", PAINT));
    const spans = [...container.querySelectorAll(`[${DECORATOR_PAINT_ATTRIBUTE}]`)];
    expect(spans.map((span) => span.textContent)).toEqual(["1", "2"]);

    // Another decorator's paint is not its own.
    act(() => setDecoratorPaint(editor, "8", PAINT.slice(0, 1)));
    expect(shown(container)).toEqual(domPainted("\\v 12 ", PAINT));

    act(() => setDecoratorPaint(editor, "7", PAINT.slice(1)));
    expect(shown(container)).toEqual(domPainted("\\v 12 ", PAINT.slice(1)));

    act(() => clearDecoratorPaints(editor));
    expect(shown(container)).toEqual(["\\v 12 "]);
  });

  it("clamps a run to its text", () => {
    const editor = createEditor();
    const paint: DecoratorPaint = [
      { start: 1, end: 9, classNames: ["c"], annotationKeys: [KEY_A] },
    ];
    setDecoratorPaint(editor, "7", paint);
    const { container } = render(<DecoratorPaintedText editor={editor} nodeKey="7" text="12" />);
    expect(shown(container)).toEqual(domPainted("12", paint));
    expect(container.textContent).toBe("12");
  });
});
