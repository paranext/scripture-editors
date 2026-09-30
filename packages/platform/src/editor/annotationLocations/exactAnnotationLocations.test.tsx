/**
 * Annotations set through `EditorRef.setAnnotation` at exact settled locations, and what becomes of
 * them when the bytes they cover are edited, copied or pasted.
 *
 * Standard view.
 */
import {
  $heldBytes,
  HELD_TYPE,
  MountedInView,
  mountInView,
  oracleView,
  ORACLE_TYPE,
  richUsj,
} from "./annotationLocations.test-helpers";
import { copyEvent, pasteEvent } from "../markerEdit/markerEdit.test-helpers";
import { displayAnnotated } from "../markerEdit/displayAnnotations.test-helpers";
import {
  $textContaining,
  propertyPath,
  settledPara,
  twoParaUsj,
  typeOver,
} from "../positions/positions.test-helpers";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { MarkerContent, MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isTextNode,
  $setSelection,
  COPY_COMMAND,
  LexicalNode,
  PASTE_COMMAND,
  RangeSelection,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import {
  $isCharNode,
  $isTypedMarkNode,
  $wrapSelectionInTypedMarkNode,
  CharNode,
  COMMENT_MARK_TYPE,
  NBSP,
} from "shared";
import { $getRangeFromUsjSelection, AnnotationRange, StructureProtectionMode } from "shared-react";
import { vi } from "vitest";

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

/** Settle the scope the way an abandoned edit does: blur, then commit the pending literal. */
function settle(mounted: MountedInView): void {
  const rootElement = mounted.lexical.getRootElement();
  if (!rootElement) throw new Error("editor root not found");
  act(() => rootElement.blur());
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
}

/** The text of every mark holding `type`/`id`, in document order. Call inside a read. */
function $markTexts(type: string, id: string): string[] {
  const texts: string[] = [];
  const walk = (node: LexicalNode): void => {
    if ($isTypedMarkNode(node) && node.hasID(type, id)) texts.push(node.getTextContent());
    if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  return texts;
}

/** The `content` of the first char span with `marker` in `usj`'s first paragraph (content[2]) —
 * found by marker, since the comment's milestones shift the indexes around it. */
function spanContentIn(usj: Usj | undefined, marker: string): MarkerContent[] {
  const para = usj?.content[2];
  if (!para || typeof para === "string") throw new Error("expected a paragraph at content[2]");
  const span = para.content?.find(
    (item) => typeof item !== "string" && item.type === "char" && item.marker === marker,
  );
  if (!span || typeof span === "string") throw new Error(`no \\${marker} span in the paragraph`);
  return span.content ?? [];
}

/** Whether `item` is a comment milestone of `kind` (`zmsc-s` or `zmsc-e`) for comment `id`. */
function isCommentMilestone(item: MarkerContent | undefined, kind: "s" | "e", id: string): boolean {
  if (!item || typeof item === "string" || item.marker !== `zmsc-${kind}`) return false;
  const ids: { sid?: unknown; eid?: unknown } = item;
  return (kind === "s" ? ids.sid : ids.eid) === id;
}

/** Wraps comment `id` over the live range `$select` builds, in one update. */
async function commentOver(
  mounted: MountedInView,
  id: string,
  $select: () => RangeSelection | undefined,
): Promise<void> {
  await act(async () => {
    mounted.lexical.update(() => {
      const selection = $select();
      if (!selection) throw new Error("the range did not resolve");
      $wrapSelectionInTypedMarkNode(selection, COMMENT_MARK_TYPE, id);
    });
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** Reloads `mounted` from its own `getUsj()`, which it returns. */
async function reloadFromOwnUsj(mounted: MountedInView): Promise<Usj | undefined> {
  const usj = mounted.ref.current?.getUsj();
  if (!usj) throw new Error("no USJ to reload");
  await act(async () => {
    mounted.ref.current?.setUsj(usj);
    await Promise.resolve();
  });
  return usj;
}

describe("a range into part of an inline element", () => {
  const standard = oracleView("standard");
  /** `the ` + `\nd` + `LO` of {@link richUsj}'s `In the \nd LORD\nd*`: from inside `In the ` to
   * inside the span's text. */
  const intoSpanRange: AnnotationRange = {
    start: { jsonPath: "$.content[2].content[1]", offset: 2 },
    end: { jsonPath: "$.content[2].content[2].content[0]", offset: 2 },
  };

  it("holds only the bytes it names, never the rest of the span", async () => {
    const mounted = await mountInView(richUsj, standard);
    await act(async () => {
      mounted.ref.current?.setAnnotation(intoSpanRange, ORACLE_TYPE, "part");
      await Promise.resolve();
    });

    const held = mounted.lexical.getEditorState().read(() => $heldBytes(HELD_TYPE, "part"));
    expect(held).toBe(" the \\ndLO");
  });

  it("keeps a comment on the same bytes through a save and reload", async () => {
    const mounted = await mountInView(richUsj, standard);
    await commentOver(mounted, "c9", () => $getRangeFromUsjSelection(intoSpanRange, standard));
    const before = mounted.lexical.getEditorState().read(() => $markTexts(COMMENT_MARK_TYPE, "c9"));
    expect(before).toEqual([" the ", "LO"]);

    const saved = await reloadFromOwnUsj(mounted);

    const spanContent = spanContentIn(saved, "nd");
    const loAt = spanContent.indexOf("LO");
    expect(loAt).toBeGreaterThan(0);
    expect(isCommentMilestone(spanContent[loAt - 1], "s", "c9")).toBe(true);
    expect(isCommentMilestone(spanContent[loAt + 1], "e", "c9")).toBe(true);
    expect(
      mounted.lexical.getEditorState().read(() => $markTexts(COMMENT_MARK_TYPE, "c9")),
    ).toEqual(before);
  });

  /** `\p x \add a \+nd b\+nd* c\add* y`. */
  const nestedUsj: Usj = twoParaUsj([
    "x ",
    {
      type: "char",
      marker: "add",
      content: ["a ", { type: "char", marker: "nd", content: ["b"] }, " c"],
    },
    " y",
  ]);

  it.each<{ from: string; needle: string; offset: number; outside: string[] }>([
    { from: "`a`, after the outer span's separator", needle: "a ", offset: 1, outside: [] },
    { from: "the text before the outer span", needle: "x ", offset: 1, outside: [" "] },
  ])(
    "keeps the outer span in place for a comment from $from to the end of a nested span it covers whole",
    async ({ needle, offset, outside }) => {
      const mounted = await mountInView(nestedUsj, standard);
      await commentOver(mounted, "c8", () => {
        const selection = $createRangeSelection();
        selection.anchor.set($textContaining(needle).getKey(), offset, "text");
        selection.focus.set($textContaining(" c").getKey(), 0, "text");
        return selection;
      });
      const before = mounted.lexical
        .getEditorState()
        .read(() => $markTexts(COMMENT_MARK_TYPE, "c8"));
      expect(before).toEqual([...outside, `a \\+nd${NBSP}b\\+nd*`]);

      const saved = await reloadFromOwnUsj(mounted);

      const addContent = spanContentIn(saved, "add");
      const ndAt = addContent.findIndex((item) => typeof item !== "string" && item.marker === "nd");
      expect(isCommentMilestone(addContent[0], "s", "c8")).toBe(true);
      expect(addContent[1]).toBe("a ");
      expect(ndAt).toBe(2);
      expect(isCommentMilestone(addContent[ndAt + 1], "e", "c8")).toBe(true);
      expect(addContent[ndAt + 2]).toBe(" c");
      expect(
        mounted.lexical.getEditorState().read(() => $markTexts(COMMENT_MARK_TYPE, "c8")),
      ).toEqual(before);
    },
  );

  it("keeps marks inside a span through a settle elsewhere in the paragraph", async () => {
    const mounted = await mountInView(richUsj, standard);
    const onRemove = vi.fn();
    await act(async () => {
      mounted.ref.current?.setAnnotation(intoSpanRange, ORACLE_TYPE, "part", { onRemove });
      await Promise.resolve();
    });
    const $marks = () => $markTexts(HELD_TYPE, "part");
    const before = mounted.lexical.getEditorState().read($marks);
    expect(before).toEqual([" the ", "LO"]);

    await typeOver(mounted.lexical, " God", " God \\bd x\\bd*");
    settle(mounted);

    // The typed literal settled into a span, so the paragraph really was re-tokenized.
    expect(spanContentIn(mounted.ref.current?.getUsj(), "bd")).toEqual(["x"]);
    expect(mounted.lexical.getEditorState().read($marks)).toEqual(before);
    expect(onRemove).toHaveBeenCalledTimes(0);
  });
});

describe("a note's own content text", () => {
  const standard = oracleView("standard");
  /** `\p see \x - \xo 1.2\xo* \xt Crossref text.\xt*\x* after.`: the space between the two spans
   * is the note's own content, directly inside it. */
  const crossRefUsj: Usj = twoParaUsj([
    "see ",
    {
      type: "note",
      marker: "x",
      caller: "-",
      content: [
        { type: "char", marker: "xo", content: ["1.2"] },
        " ",
        { type: "char", marker: "xt", content: ["Crossref text."] },
      ],
    },
    " after.",
  ]);
  /** The note's own space between its two spans. */
  const noteSpacePath = "$.content[2].content[1].content[1]";

  it.each<{ over: string; range: AnnotationRange }>([
    {
      over: "just the note's own space",
      range: {
        start: { jsonPath: noteSpacePath, offset: 0 },
        end: { jsonPath: noteSpacePath, offset: 1 },
      },
    },
    {
      over: "the text before the note through part of its last span",
      range: {
        start: { jsonPath: "$.content[2].content[0]", offset: 1 },
        end: { jsonPath: "$.content[2].content[1].content[2].content[0]", offset: 3 },
      },
    },
  ])("keeps every space when an annotation over $over is set and removed", async ({ range }) => {
    const mounted = await mountInView(crossRefUsj, standard);
    const before = mounted.ref.current?.getUsj();

    await act(async () => {
      mounted.ref.current?.setAnnotation(range, ORACLE_TYPE, "note");
      await Promise.resolve();
    });
    await act(async () => {
      mounted.ref.current?.removeAnnotation(ORACLE_TYPE, "note");
      await Promise.resolve();
    });

    expect(mounted.ref.current?.getUsj()).toEqual(before);
  });

  it("keeps the space when a character is typed into it and deleted again", async () => {
    const mounted = await mountInView(crossRefUsj, standard);
    const before = mounted.ref.current?.getUsj();
    const $noteSpace = () => {
      const node = $getRangeFromUsjSelection(
        {
          start: { jsonPath: noteSpacePath, offset: 0 },
          end: { jsonPath: noteSpacePath, offset: 1 },
        },
        standard,
      )?.anchor.getNode();
      if (!$isTextNode(node) || node.getTextContent() !== " ")
        throw new Error("the note's own space did not resolve");
      return node;
    };

    await act(async () => {
      mounted.lexical.update(() => {
        $noteSpace().select(1, 1);
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        selection.insertText("a");
      });
      await Promise.resolve();
    });
    const typedNote = settledPara(mounted.ref.current?.getUsj(), 2).content?.[1];
    if (!typedNote || typeof typedNote === "string") throw new Error("expected the note");
    expect(typedNote.content?.[1]).toBe(" a");
    await act(async () => {
      mounted.lexical.update(() => {
        // What Backspace does to the typed character (jsdom has no native selection to extend).
        const selection = $getSelection();
        if (!$isRangeSelection(selection) || !selection.isCollapsed())
          throw new Error("no collapsed range selection");
        const { key, offset } = selection.anchor;
        selection.anchor.set(key, offset - 1, "text");
        selection.removeText();
      });
      await Promise.resolve();
    });

    expect(mounted.ref.current?.getUsj()).toEqual(before);
  });
});
