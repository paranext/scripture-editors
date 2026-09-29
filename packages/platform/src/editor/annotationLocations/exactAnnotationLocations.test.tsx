/**
 * Annotations set through `EditorRef.setAnnotation` at exact settled locations, and what becomes of
 * them when the bytes they cover are edited, copied or pasted.
 *
 * Standard view.
 */
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
} from "lexical";
import { $isCharNode, CharNode } from "shared";
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
