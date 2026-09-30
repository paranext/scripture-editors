/**
 * Annotations set through `EditorRef.setAnnotation` at exact settled locations, and what becomes of
 * them when the bytes they cover are edited, copied or pasted.
 *
 * Standard view.
 */
import {
  $heldBytes,
  HELD_TYPE,
  mountInView,
  oracleView,
  ORACLE_TYPE,
  richUsj,
} from "./annotationLocations.test-helpers";
import { copyEvent, pasteEvent } from "../markerEdit/markerEdit.test-helpers";
import { displayAnnotated } from "../markerEdit/displayAnnotations.test-helpers";
import { $textContaining, propertyPath, twoParaUsj } from "../positions/positions.test-helpers";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $setSelection,
  COPY_COMMAND,
  LexicalNode,
  PASTE_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { $isCharNode, $wrapSelectionInTypedMarkNode, CharNode, COMMENT_MARK_TYPE } from "shared";
import { AnnotationRange, StructureProtectionMode } from "shared-react";

type Mounted = Awaited<ReturnType<typeof mountStandardViewEditor>>;

/** A `\w` span as USJ carries it: `lemma` is one of its attributes, which `MarkerObject` leaves
 * untyped. */
type WordChar = MarkerObject & { lemma?: string };

const lemmaWord: WordChar = { type: "char", marker: "w", lemma: "grace", content: ["grace"] };
/** `\p In the \w grace|lemma="grace"\w* of God`. */
const lemmaUsj: Usj = twoParaUsj(["In the ", lemmaWord, " of God"]);
/** `grace`, the `\w` span's `lemma` value. */
const lemmaRange: AnnotationRange = {
  start: { jsonPath: propertyPath([2, 1], "lemma"), propertyOffset: 0 },
  end: { jsonPath: propertyPath([2, 1], "lemma"), propertyOffset: "grace".length },
};

async function annotate(mounted: Mounted, range: AnnotationRange, id: string): Promise<void> {
  await act(async () => {
    mounted.ref.current?.setAnnotation(range, "test", id);
    await Promise.resolve();
  });
}

/** The only `CharNode` in the document. Call inside a read or update. */
function $onlyCharNode(): CharNode {
  const found: CharNode[] = [];
  const walk = (node: LexicalNode): void => {
    if ($isCharNode(node)) found.push(node);
    else if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  if (found.length !== 1) throw new Error(`expected one char span, found ${found.length}`);
  return found[0];
}

/** Every `\w` span in `content`, at any depth. */
function wordSpans(content: MarkerContent[] | undefined): MarkerObject[] {
  const out: MarkerObject[] = [];
  content?.forEach((item) => {
    if (typeof item === "string") return;
    if (item.type === "char" && item.marker === "w") out.push(item);
    out.push(...wordSpans(item.content));
  });
  return out;
}

/** Copies the whole `\w` span (opener glyph, content, attribute run and closer) and returns what
 * the clipboard received, per flavor. */
async function copyWholeSpan(mounted: Mounted): Promise<{ [type: string]: string }> {
  const { event, getData } = copyEvent();
  await act(async () =>
    mounted.lexical.update(
      () => {
        const char = $onlyCharNode();
        const parent = char.getParentOrThrow();
        const index = char.getIndexWithinParent();
        const selection = $createRangeSelection();
        selection.anchor.set(parent.getKey(), index, "element");
        selection.focus.set(parent.getKey(), index + 1, "element");
        $setSelection(selection);
        mounted.lexical.dispatchCommand(COPY_COMMAND, event);
      },
      { discrete: true },
    ),
  );
  const data: { [type: string]: string } = {};
  for (const type of ["text/plain", "text/html", "application/x-lexical-editor"]) {
    const value = getData(type);
    if (value) data[type] = value;
  }
  return data;
}

/** Pastes `payload` at the end of the paragraph's ` of God`, then lets Tier 2's post-paste
 * microtasks run. */
async function pasteAtEndOfParagraph(
  mounted: Mounted,
  payload: { [type: string]: string },
): Promise<void> {
  await act(async () =>
    mounted.lexical.update(() => {
      const text = $textContaining(" of God");
      const end = text.getTextContentSize();
      text.select(end, end);
      mounted.lexical.dispatchCommand(PASTE_COMMAND, pasteEvent(payload).event);
    }),
  );
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

describe("a pasted copy of annotated display bytes", () => {
  it.each<{ mode: StructureProtectionMode; path: string }>([
    { mode: "off", path: "Lexical's rich-paste node insertion" },
    { mode: "protected", path: "the structure-protection html sanitizer" },
  ])("holds no annotation: an internal paste through $path ($mode)", async ({ mode }) => {
    const mounted = await mountStandardViewEditor(lemmaUsj, { structureProtectionMode: mode });
    await annotate(mounted, lemmaRange, "1");
    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["grace"] });

    const copied = await copyWholeSpan(mounted);
    // The internal flavor serializes node state, so the copy itself carries the annotation; what
    // this pins is that the paste leaves it behind.
    expect(copied["application/x-lexical-editor"]).toContain('"displayAnnotations"');

    await pasteAtEndOfParagraph(mounted, copied);

    expect(displayAnnotated(mounted.lexical)).toEqual({ "1": ["grace"] });
    expect(wordSpans(mounted.ref.current?.getUsj()?.content)).toHaveLength(2);
  });
});

/** The figure and the text right after it in {@link richUsj}'s `content[4]` (`\fig
 * caption|…\fig* break`) — where the corruption moves caption text into the paragraph's own
 * prose. */
function figureAndFollowing(usj: Usj | undefined): {
  captionText: string;
  following: MarkerContent | undefined;
} {
  const para = usj?.content?.[4];
  if (!para || typeof para === "string") throw new Error("expected a paragraph at content[4]");
  const content = para.content ?? [];
  const figureIndex = content.findIndex(
    (item) => typeof item !== "string" && item.type === "figure",
  );
  const figure = figureIndex >= 0 ? content[figureIndex] : undefined;
  if (!figure || typeof figure === "string") throw new Error("expected a figure in content[4]");
  const captionText = (figure.content ?? [])
    .filter((item): item is string => typeof item === "string")
    .join("");
  return { captionText, following: content[figureIndex + 1] };
}

describe("an annotation inside a figure caption", () => {
  /** In front of the `\fig` marker through the caption's first letter — a range that starts or
   * ends inside a figure caption. */
  const intoCaptionRange: AnnotationRange = {
    start: { jsonPath: "$.content[4].content[2]" },
    end: { jsonPath: "$.content[4].content[2].content[0]", offset: 1 },
  };

  it.each<[string, string]>([
    ["standard", "[immutable-typed-text]c"],
    ["formatted", "c"],
  ])("leaves the caption in the figure (%s)", async (name, expectedHeld) => {
    const mounted = await mountInView(richUsj, oracleView(name));
    const before = mounted.ref.current?.getUsj();

    await act(async () => {
      mounted.ref.current?.setAnnotation(intoCaptionRange, ORACLE_TYPE, "cap");
      await Promise.resolve();
    });

    expect(mounted.ref.current?.getUsj()).toEqual(before);
    const held = mounted.lexical.getEditorState().read(() => $heldBytes(HELD_TYPE, "cap"));
    expect(held).toBe(expectedHeld);
  });

  it.each(["standard", "formatted"])("survives undo and redo (review focus) (%s)", async (name) => {
    const mounted = await mountInView(richUsj, oracleView(name));
    const before = mounted.ref.current?.getUsj();

    await act(async () => {
      mounted.ref.current?.setAnnotation(intoCaptionRange, ORACLE_TYPE, "cap");
      await Promise.resolve();
    });

    await act(async () => {
      mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined);
    });
    expect(mounted.ref.current?.getUsj()).toEqual(before);

    await act(async () => {
      mounted.lexical.dispatchCommand(REDO_COMMAND, undefined);
    });
    expect(mounted.ref.current?.getUsj()).toEqual(before);
  });

  it.each(["standard", "formatted"])(
    "keeps the caption when a comment is made inside it (%s)",
    async (name) => {
      const mounted = await mountInView(richUsj, oracleView(name));

      await act(async () => {
        mounted.lexical.update(() => {
          const text = $textContaining("caption");
          const selection = $createRangeSelection();
          selection.anchor.set(text.getKey(), 2, "text");
          selection.focus.set(text.getKey(), 4, "text");
          $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, "c1");
        });
        await Promise.resolve();
      });

      const { captionText, following } = figureAndFollowing(mounted.ref.current?.getUsj());
      expect(captionText).toBe("caption");
      if (typeof following !== "string")
        throw new Error(`expected text after the figure, got ${JSON.stringify(following)}`);
      expect(following.startsWith(" break")).toBe(true);
    },
  );
});
