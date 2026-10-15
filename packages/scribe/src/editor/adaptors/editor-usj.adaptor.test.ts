/**
 * Scribe's USJ round trip (load through `usj-editor.adaptor`, save through `editor-usj.adaptor`)
 * keeps every byte the user wrote where a comment's mark sits: a comment is presentation over the
 * text, so the text saves as the same text with no comment saves.
 */
import { initialize as initializeSave, deserializeEditorState } from "./editor-usj.adaptor";
import { initialize, reset, serializeEditorState } from "./usj-editor.adaptor";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { NBSP, TypedMarkNode } from "shared";
import {
  FORMATTED_VIEW_MODE,
  getViewOptions,
  UNFORMATTED_VIEW_MODE,
  usjReactNodes,
  ViewOptions,
} from "shared-react";
import { describe, expect, it } from "vitest";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";

/** `\p` holding `content`. */
function paraUsj(content: MarkerContent[]): Usj {
  return { type: "USJ", version: "3.1", content: [{ type: "para", marker: "p", content }] };
}

/** The paragraph content `usj` saves as after a load in `view`. */
function roundTrip(usj: Usj, view: ViewOptions | undefined): MarkerContent[] | undefined {
  initialize(undefined, undefined);
  initializeSave(undefined);
  reset();
  const state = serializeEditorState(usj, view);
  const { editor } = createBasicTestEnvironment([TypedMarkNode, ...usjReactNodes]);
  editor.setEditorState(editor.parseEditorState(JSON.stringify({ root: state.root })));
  const saved = deserializeEditorState(editor.getEditorState());
  const para = saved?.content[0];
  return typeof para === "object" ? para.content : undefined;
}

const commentStart = { type: "ms", marker: "zmsc-s", sid: "c1" };
const commentEnd = { type: "ms", marker: "zmsc-e", eid: "c1" };

describe.each([
  ["unformatted", getViewOptions(UNFORMATTED_VIEW_MODE)],
  ["formatted", getViewOptions(FORMATTED_VIEW_MODE)],
])("in the %s view, a no-break space a comment's mark sits beside", (_name, view) => {
  it("saves when the comment holds just it", () => {
    const content = ["a", commentStart, NBSP, commentEnd, "b"];
    expect(JSON.stringify(roundTrip(paraUsj(content), view))).toBe(JSON.stringify(content));
  });

  it("saves when one comment ends right before it and another starts right after", () => {
    const content = [
      commentStart,
      "a",
      commentEnd,
      NBSP,
      { type: "ms", marker: "zmsc-s", sid: "c2" },
      "b",
      { type: "ms", marker: "zmsc-e", eid: "c2" },
    ];
    expect(JSON.stringify(roundTrip(paraUsj(content), view))).toBe(JSON.stringify(content));
  });

  it("is not the paragraph marker's separator, which saves as nothing beside a comment", () => {
    const content = [commentStart, "a", commentEnd, " b"];
    expect(JSON.stringify(roundTrip(paraUsj(content), view))).toBe(JSON.stringify(content));
  });
});
