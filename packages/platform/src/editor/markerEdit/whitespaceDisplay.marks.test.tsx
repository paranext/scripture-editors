/**
 * Standard view's space-run display and collapse read a run of spaces that an annotation mark
 * cuts exactly as the uncut run: a mark is presentation, so typing a space beside a marked space
 * shows, saves and collapses the same bytes as typing it beside the same space with no mark.
 */
import { deserializeEditorState } from "../adaptors/editor-usj.adaptor";
import { mountInView, oracleView } from "../annotationLocations/annotationLocations.test-helpers";
import { drainNativeSelectionChange } from "../editor-test.utils";
import { contentPath } from "../positions/positions.test-helpers";
import { copyEvent, testEnvironment, viewOptions } from "./markerEdit.test-helpers";
import { Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createTextNode,
  $getRoot,
  $isElementNode,
  $isTextNode,
  $setState,
  CONTROLLED_TEXT_INSERTION_COMMAND,
  COPY_COMMAND,
  DELETE_CHARACTER_COMMAND,
  LexicalNode,
  TextNode,
} from "lexical";
import {
  $createMarkerNode,
  $createParaNode,
  $createTypedMarkNode,
  NBSP,
  textTypeState,
} from "shared";

/** Whether `x of God` is one text, or cut by a mark holding its ` o`. */
type Marking = "none" | "crossing";

/** `\p x of God` held as `marking` says; `first` receives the text that starts with `x`. */
function $build(marking: Marking, first: (text: TextNode) => void): void {
  const separator = $createTextNode(NBSP);
  $setState(separator, textTypeState, "marker-trailing-space");
  const texts: LexicalNode[] =
    marking === "none"
      ? [$createTextNode("x of God")]
      : [
          $createTextNode("x"),
          $createTypedMarkNode({ annotation: ["1"] }).append($createTextNode(" o")),
          $createTextNode("f God"),
        ];
  first(texts[0] as TextNode);
  $getRoot().append($createParaNode("p").append($createMarkerNode("p"), separator, ...texts));
}

/** What `marking`'s paragraph shows and saves after the bytes `typed` are typed right after its
 * `x`. */
async function typedBeside(
  marking: Marking,
  typed: string,
): Promise<{ screen: string; content: unknown }> {
  let first: TextNode | undefined;
  const { editor } = await testEnvironment(() =>
    $build(marking, (text) => {
      first = text;
    }),
  );
  await act(async () =>
    editor.update(() => {
      if (!first) return;
      const text = first.getTextContent();
      first.setTextContent(`x${typed}${text.slice(1)}`);
    }),
  );
  const screen = editor.getEditorState().read(() => $getRoot().getTextContent());
  const usj = deserializeEditorState(editor.getEditorState(), viewOptions);
  return { screen, content: usj?.content };
}

describe("a space run an annotation mark cuts", () => {
  it("displays a typed space beside a marked space as the uncut run displays it", async () => {
    const plain = await typedBeside("none", " ");
    const marked = await typedBeside("crossing", " ");
    expect(plain.screen).toContain(`x${NBSP}${NBSP}of God`);
    expect(marked.screen).toBe(plain.screen);
  });

  it("saves a run cut by a mark collapsed, as the uncut run saves", async () => {
    const plain = await typedBeside("none", " ");
    const marked = await typedBeside("crossing", " ");
    expect(JSON.stringify(plain.content)).toContain('"x of God"');
    expect(marked.content).toEqual(plain.content);
  });

  it("leaves a single space beside a mark alone", async () => {
    const plain = await typedBeside("none", "y");
    const marked = await typedBeside("crossing", "y");
    expect(plain.screen).toContain("xy of God");
    expect(marked.screen).toBe(plain.screen);
    expect(marked.content).toEqual(plain.content);
  });
});

/** `\p \v 1 In \f + a b\f* end`: a footnote whose content is plain text, with no span. */
const noteUsj: Usj = {
  type: "USJ",
  version: "3.1",
  content: [
    { type: "book", marker: "id", code: "GEN", content: ["GEN"] },
    { type: "chapter", marker: "c", number: "1" },
    {
      type: "para",
      marker: "p",
      content: [
        { type: "verse", marker: "v", number: "1" },
        "In ",
        { type: "note", marker: "f", caller: "+", content: ["a b"] },
        " end",
      ],
    },
  ],
};

/** The first text in the document that contains `text`. Read-only. */
function $textContaining(text: string): TextNode {
  const found: TextNode[] = [];
  const walk = (node: LexicalNode): void => {
    if ($isTextNode(node) && node.getTextContent().includes(text)) found.push(node);
    if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  if (!found[0]) throw new Error(`no text containing ${JSON.stringify(text)}`);
  return found[0];
}

/**
 * In `view`, with or without an annotation over the note's `a `, a space typed before the note's
 * `b` and then the `b` deleted, leaving `a` and a two-space run at the note content's end — which
 * the mark's edge cuts into the mark's `a` plus one space and a text that is one space alone. What
 * a copy of the whole paragraph puts in `text/plain`, and what the paragraph saves as.
 */
async function noteRunCopied(
  view: string,
  isAnnotated: boolean,
): Promise<{ copied: string; saved: unknown }> {
  const mounted = await mountInView(noteUsj, oracleView(view));
  const at = (offset: number) => ({ jsonPath: contentPath([2, 2, 0]), offset });
  if (isAnnotated)
    await act(async () => {
      mounted.ref.current?.setAnnotation({ start: at(0), end: at(2) }, "test", "a");
      await Promise.resolve();
    });
  const selectB = async (length: number): Promise<void> => {
    await act(async () => {
      mounted.lexical.update(() => {
        const node = $textContaining("b");
        const offset = node.getTextContent().indexOf("b");
        node.select(offset, offset + length);
      });
      await drainNativeSelectionChange();
    });
  };
  await selectB(0);
  await act(async () => {
    mounted.lexical.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, " ");
    await drainNativeSelectionChange();
  });
  await selectB(1);
  await act(async () => {
    mounted.lexical.dispatchCommand(DELETE_CHARACTER_COMMAND, true);
    await drainNativeSelectionChange();
  });
  await act(async () => {
    mounted.lexical.update(() => {
      const para = $getRoot().getChildren()[2];
      if ($isElementNode(para)) para.select(0, para.getChildrenSize());
    });
    await drainNativeSelectionChange();
  });
  const { event, getData } = copyEvent({ native: true });
  await act(async () => {
    mounted.lexical.dispatchCommand(COPY_COMMAND, event);
    await drainNativeSelectionChange();
  });
  const saved = mounted.ref.current?.getUsj()?.content?.[2];
  mounted.unmount();
  return { copied: getData("text/plain"), saved };
}

describe("a space run in a note's content that an annotation mark cuts", () => {
  it.each(["standard", "standard+expandedNotes"])(
    "copies in %s view as the uncut run copies",
    async (view) => {
      const plain = await noteRunCopied(view, false);
      const marked = await noteRunCopied(view, true);
      expect(plain.copied).toContain("\\f + a  \\f*");
      expect(marked.copied).toBe(plain.copied);
      expect(marked.saved).toEqual(plain.saved);
    },
  );
});
