import usjEditorAdaptor, {
  initialize as initializeSerialize,
  reset,
} from "./adaptors/usj-editor.adaptor";
import { MarkerEditPlugin } from "./markerEdit/MarkerEditPlugin";
import { copyEvent } from "./markerEdit/markerEdit.test-helpers";
import { usfmToClipboardHtml } from "./markerEdit/whitespaceDisplay.plugin.utils";
import { MarkersViewCopyPlugin } from "./MarkersViewCopyPlugin";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $dfs } from "@lexical/utils";
import {
  $createPoint,
  $createRangeSelection,
  $getRoot,
  $isTextNode,
  $setSelection,
  COPY_COMMAND,
  CUT_COMMAND,
  LexicalEditor,
  TextNode,
} from "lexical";
import { NBSP } from "shared";
import {
  getDefaultViewOptions,
  getViewOptions,
  STANDARD_VIEW_MODE,
  ViewOptions,
} from "shared-react";

/** The read-only Markers view's options, as Platform.Bible builds them. */
const markersViewOptions: ViewOptions = {
  ...getDefaultViewOptions(),
  markerMode: "visible",
  noteMode: "expanded",
};

/** One chapter touching every construct whose display is not its USFM: verse and chapter numbers,
 * char spans (plain and with a default attribute), a footnote, a cross-reference, a data NBSP, a
 * figure, and milestones with and without attributes. */
const USX =
  `<usx version="3.0"><book code="RUT" style="id">Ruth</book><chapter number="1" style="c" />` +
  `<para style="p"><verse number="1" style="v" />In <char style="nd">Lord</char> x` +
  `<note style="f" caller="+"><char style="fr" closed="false">1:1 </char>` +
  `<char style="ft" closed="false">A note.</char></note> text ` +
  `<note style="x" caller="-"><char style="xo">1:3: </char><char style="xt">2Cor 4:6</char></note>` +
  ` end${NBSP}ok <char style="w" lemma="grace">grace</char> ` +
  `<figure style="fig" file="a.jpg" size="col">Cap</figure> <ms style="qt-s" who="Pilate" /> q` +
  `<ms style="qt-e" /></para><para style="q1"><verse number="2" style="v" />Line two</para></usx>`;

const WHOLE_USFM =
  "\\id RUT Ruth\n\\c 1 \n\\p \\v 1 In \\nd Lord\\nd* x\\f + \\fr 1:1 \\ft A note.\\f* text " +
  "\\x - \\xo 1:3: \\xo*\\xt 2Cor 4:6\\xt*\\x* end~ok \\w grace|grace\\w* " +
  '\\fig Cap|src="a.jpg" size="col"\\fig* \\qt-s |Pilate\\* q\\qt-e\\*\n\\q1 \\v 2 Line two';

async function renderEditor(viewOptions: ViewOptions, isStandardView = false) {
  initializeSerialize(undefined, undefined);
  reset();
  const state = usjEditorAdaptor.serializeEditorState(usxStringToUsj(USX), viewOptions);
  return baseTestEnvironment(
    JSON.stringify({ root: state.root }),
    isStandardView ? (
      <MarkerEditPlugin viewOptions={viewOptions} />
    ) : (
      <MarkersViewCopyPlugin viewOptions={viewOptions} />
    ),
  );
}

function $textNodes(): TextNode[] {
  return $dfs($getRoot())
    .map(({ node }) => node)
    .filter($isTextNode);
}

/** Selects from `anchorOffset` in the first text node containing `anchorText` to `focusOffset` in
 * the first containing `focusText`. */
function $selectBetween(
  anchorText: string,
  anchorOffset: number,
  focusText: string,
  focusOffset: number,
): void {
  const anchor = $textNodes().find((node) => node.getTextContent().includes(anchorText));
  const focus = $textNodes().find((node) => node.getTextContent().includes(focusText));
  if (!anchor || !focus) throw new Error("fixture is missing a text node the selection needs");
  const selection = $createRangeSelection();
  selection.anchor = $createPoint(anchor.getKey(), anchorOffset, "text");
  selection.focus = $createPoint(focus.getKey(), focusOffset, "text");
  $setSelection(selection);
}

function $selectAll(): void {
  const root = $getRoot();
  root.select(0, root.getChildrenSize());
}

async function copy(editor: LexicalEditor, command = COPY_COMMAND) {
  const { event, getData } = copyEvent();
  await act(async () => editor.dispatchCommand(command, event));
  return getData;
}

describe("MarkersViewCopyPlugin", () => {
  it("copies the whole document as its USFM, in both readable flavors and no internal one", async () => {
    const { editor } = await renderEditor(markersViewOptions);
    await act(async () => editor.update($selectAll));
    const getData = await copy(editor);

    expect(getData("text/plain")).toBe(WHOLE_USFM);
    expect(getData("text/html")).toBe(usfmToClipboardHtml(WHOLE_USFM));
    expect(getData("application/x-lexical-editor")).toBe("");
  });

  it("writes the same bytes a Standard-view copy of the same document writes", async () => {
    const standardViewOptions = getViewOptions(STANDARD_VIEW_MODE);
    if (!standardViewOptions) throw new Error("Standard view options are required");
    const { editor: standard } = await renderEditor(standardViewOptions, true);
    await act(async () => standard.update($selectAll));
    const standardData = await copy(standard);

    expect(standardData("text/plain")).toBe(WHOLE_USFM);
  });

  it("copies a partial range across a note as exactly the USFM between its ends", async () => {
    const { editor } = await renderEditor(markersViewOptions);
    await act(async () => editor.update(() => $selectBetween("In ", 1, " text ", 3)));
    const getData = await copy(editor);

    expect(getData("text/plain")).toBe("n \\nd Lord\\nd* x\\f + \\fr 1:1 \\ft A note.\\f* te");
  });

  it("maps a range after a milestone to the right text", async () => {
    // Standard view lays a milestone out as the milestone plus a sibling display-run wrapper; the
    // wrapper is display and must not count as a USJ content item, or every later position in the
    // paragraph lands one item early.
    const { editor } = await renderEditor(markersViewOptions);
    await act(async () => editor.update(() => $selectBetween(" q", 1, "Line", 4)));
    const getData = await copy(editor);

    expect(getData("text/plain")).toBe("q\\qt-e\\*\n\\q1 \\v 2 Line");
  });

  it("copies on a cut in a read-only editor and removes nothing", async () => {
    const { editor } = await renderEditor(markersViewOptions);
    await act(async () => {
      editor.setEditable(false);
      editor.update($selectAll);
    });
    const before = editor.getEditorState().read(() => $getRoot().getTextContent());
    const getData = await copy(editor, CUT_COMMAND);

    expect(getData("text/plain")).toBe(WHOLE_USFM);
    expect(editor.getEditorState().read(() => $getRoot().getTextContent())).toBe(before);
  });
});
