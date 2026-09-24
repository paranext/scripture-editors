/**
 * `EditorRef.applyUpdate` and DOM focus: Lexical reconciles the DOM selection after every commit,
 * and writing a selection inside a `contenteditable` gives that element DOM focus. An editor the
 * user is not typing in must therefore commit a programmatic update WITHOUT writing the DOM
 * selection, or it steals the caret from whatever does hold focus — a host's footnote editor
 * applying its edits back into the Scripture text, for instance.
 */
import {
  note,
  noteKeys,
  renderEditor,
  requireDefined,
  tagsOfUpdatesDuring,
} from "./noteEditorRef.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { SKIP_DOM_SELECTION_TAG } from "lexical";

const twoNotesUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["Test Book"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "1" },
        "first ",
        note("alpha"),
        "second ",
        note("beta"),
        "end",
      ],
    },
  ],
};

describe("EditorRef.applyUpdate and DOM focus", () => {
  it("skips the DOM selection when the editor does not hold focus", async () => {
    const { editorRef, lexical } = await renderEditor(twoNotesUsj);
    const [first] = noteKeys(lexical);
    const rootElement = requireDefined(lexical.getRootElement(), "root element");
    expect(rootElement.contains(rootElement.ownerDocument.activeElement)).toBe(false);

    const tags = await tagsOfUpdatesDuring(lexical, () => editorRef.replaceEmbedUpdate(first, []));

    expect(tags.has(SKIP_DOM_SELECTION_TAG)).toBe(true);
  });

  it("reconciles the DOM selection when the editor holds focus", async () => {
    const { editorRef, lexical } = await renderEditor(twoNotesUsj);
    const [first] = noteKeys(lexical);
    const rootElement = requireDefined(lexical.getRootElement(), "root element");
    // jsdom only treats an element as focusable when it is explicitly in the tab order, so give
    // the root a tabindex to reproduce what a real contenteditable does on its own.
    rootElement.setAttribute("tabindex", "-1");
    rootElement.focus();
    expect(rootElement.contains(rootElement.ownerDocument.activeElement)).toBe(true);

    const tags = await tagsOfUpdatesDuring(lexical, () => editorRef.replaceEmbedUpdate(first, []));

    expect(tags.has(SKIP_DOM_SELECTION_TAG)).toBe(false);
  });
});
