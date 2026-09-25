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
import { ContentJsonPath, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
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

/** The first DOM Text node under `root` whose content starts with `text`. */
function findFirstTextDomNode(root: HTMLElement, text: string): Text | undefined {
  const walker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    if (node.nodeValue?.startsWith(text)) return node as Text;
  }
  return undefined;
}

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

  // `clearStaleDomSelection` runs whenever the editor doesn't hold focus (see the two tests
  // above), clearing a DOM selection left over from a skipped commit. A DOM selection that
  // already agrees with what Lexical committed is not such a leftover - it is a real selection
  // the user made (by dragging, say) that happens to still be current when a remote update lands
  // - and wiping it would flash a highlight away for no reason, with no commit coming to restore
  // it (a remote `applyUpdate` writes no DOM selection while unfocused, by design).
  it("keeps a DOM selection that already matches what Lexical committed", async () => {
    const { editorRef, lexical } = await renderEditor(twoNotesUsj);
    const rootElement = requireDefined(lexical.getRootElement(), "root element");
    expect(rootElement.contains(rootElement.ownerDocument.activeElement)).toBe(false);

    // para.content: [verse, "first ", note(alpha), "second ", note(beta), "end"] - "first " is
    // content[2].content[1] (content[2] is the para itself).
    const firstTextPath: ContentJsonPath = "$.content[2].content[1]";
    const selectedText = "first ";
    await act(async () => {
      editorRef.setSelection({
        start: { jsonPath: firstTextPath, offset: 0 },
        end: { jsonPath: firstTextPath, offset: selectedText.length },
      });
    });
    // Setting the committed selection through the public API must not itself focus the root -
    // this scenario is "selected text, then clicked elsewhere", never a focus-driven selection.
    expect(rootElement.contains(rootElement.ownerDocument.activeElement)).toBe(false);

    // Re-express the SAME position as a real, non-collapsed Range set via DOM APIs - not relying
    // on whatever Lexical's own reconcile happened to write - so this is genuinely the scenario
    // `clearStaleDomSelection` must leave alone.
    const textNode = requireDefined(
      findFirstTextDomNode(rootElement, selectedText),
      `"${selectedText}" text node`,
    );
    const domSelection = requireDefined(document.getSelection(), "document selection");
    const range = document.createRange();
    range.setStart(textNode, 0);
    range.setEnd(textNode, selectedText.length);
    domSelection.removeAllRanges();
    domSelection.addRange(range);
    expect(domSelection.isCollapsed).toBe(false);

    await act(async () => editorRef.applyUpdate([{ retain: 1 }], "remote"));

    expect(rootElement.contains(rootElement.ownerDocument.activeElement)).toBe(false);
    expect(domSelection.isCollapsed).toBe(false);
    expect(domSelection.anchorNode).toBe(textNode);
    expect(domSelection.toString()).toBe(selectedText);
  });
});
