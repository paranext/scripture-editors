/**
 * Annotations set through `EditorRef.setAnnotation` at exact settled locations, and what becomes of
 * them when the bytes they cover are edited, copied or pasted.
 *
 * Standard view.
 */
import {
  $byteNodes,
  $heldBytes,
  $heldIndexes,
  edgesUsj,
  HELD_TYPE,
  MountedInView,
  mountInView,
  oracleView,
  ORACLE_TYPE,
  richUsj,
} from "./annotationLocations.test-helpers";
import { copyEvent, pasteEvent } from "../markerEdit/markerEdit.test-helpers";
import {
  displayAnnotated,
  settleByBlurAndCommit,
} from "../markerEdit/displayAnnotations.test-helpers";
import {
  $textContaining,
  contentPath,
  propertyPath,
  settledPara,
  twoParaUsj,
  typeOver,
} from "../positions/positions.test-helpers";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { getUsjMarkerAction } from "../adaptors/usj-marker-action.utils";
import {
  MarkerContent,
  MarkerObject,
  Usj,
  UsjDocumentLocation,
} from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createPoint,
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
  $isImmutableChapterNode,
  $isImmutableUnmatchedNode,
  $isMarkerNode,
  $isMarkerTrailingSeparator,
  $isNoteNode,
  $isTypedMarkNode,
  $wrapSelectionInTypedMarkNode,
  CharNode,
  COMMENT_MARK_TYPE,
  NBSP,
  NoteNode,
  TypedMarkNode,
  TypedMarkOnRemove,
} from "shared";
import {
  $getRangeFromUsjSelection,
  $isImmutableVerseNode,
  AnnotationRange,
  DISPLAY_ANNOTATION_CLASS_NAME,
  StructureProtectionMode,
} from "shared-react";
import { Mock, vi } from "vitest";

type Mounted = Awaited<ReturnType<typeof mountStandardViewEditor>>;

/** A `\w` span as USJ carries it: `lemma` is one of its attributes, which `MarkerObject` leaves
 * untyped. */
type WordChar = MarkerObject & { lemma?: string };

const lemmaWord: WordChar = { type: "char", marker: "w", lemma: "grace", content: ["grace"] };
/** `twoParaUsj`'s `\id GEN` / `\c 1` header, `\p In the \w grace|lemma="grace"\w* of God` as the
 * first paragraph, and `\p depart here` as the second. `lemma` alone is the `\w` default
 * attribute, so the display is the bare `|grace` run and the key is never spelled. */
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
    // Pins the stateless HTML clipboard path, not the sanitizer stripping a carried annotation.
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

/** The only mark holding `type`/`id`. Call inside a read or update. */
function $markHolding(type: string, id: string): TypedMarkNode {
  const found: TypedMarkNode[] = [];
  const walk = (node: LexicalNode): void => {
    if ($isTypedMarkNode(node) && node.hasID(type, id)) found.push(node);
    if ($isElementNode(node)) node.getChildren().forEach(walk);
  };
  walk($getRoot());
  if (found.length !== 1) throw new Error(`expected one mark holding ${id}, found ${found.length}`);
  return found[0];
}

/** The cause of each call `onRemove` received, in order. */
function causes(onRemove: Mock<TypedMarkOnRemove>): string[] {
  return onRemove.mock.calls.map(([, , cause]) => cause);
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
    settleByBlurAndCommit(mounted);

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

  it("types after a span the marker menu inserts into a note without saving its separator", async () => {
    const formatted = oracleView("formatted");
    const mounted = await mountInView(crossRefUsj, formatted);
    const $lastNoteChild = () => {
      const note = $noteIn($getRoot());
      const last = note?.getLastChild();
      if (!$isTextNode(last)) throw new Error("expected the note to end in its separator");
      return last;
    };

    // The caret on the note's own last separator, where the marker menu inserts after it.
    await act(async () => {
      mounted.lexical.update(() => $lastNoteChild().select(1, 1), { discrete: true });
    });
    getUsjMarkerAction("xk", { current: undefined }, formatted, undefined, undefined, {
      discrete: true,
    }).action({ editor: mounted.lexical, reference: { book: "GEN", chapterNum: 1, verseNum: 1 } });
    // Type at the end of the separator that follows the new span.
    await act(async () => {
      mounted.lexical.update(() => {
        $lastNoteChild().select(1, 1);
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) throw new Error("no range selection");
        selection.insertText("a");
      });
      await Promise.resolve();
    });

    expect(JSON.stringify(mounted.ref.current?.getUsj())).not.toContain(NBSP);
    const note = settledPara(mounted.ref.current?.getUsj(), 2).content?.[1];
    if (!note || typeof note === "string") throw new Error("expected the note");
    expect(note.content?.at(-1)).toBe("a");
    mounted.lexical.getEditorState().read(() => {
      const keyword = $noteIn($getRoot())
        ?.getChildren()
        .find((child) => $isCharNode(child) && child.getMarker() === "xk");
      const separator = keyword?.getNextSibling();
      expect($isMarkerTrailingSeparator(separator)).toBe(true);
      expect(separator?.getTextContent()).toBe(NBSP);
      expect(separator?.getNextSibling()?.getTextContent()).toBe("a");
    });
  });
});

describe("display bytes the design holds whole", () => {
  it("holds a chapter decorator a range passes over, in the views without editable markers", async () => {
    const mounted = await mountInView(richUsj, oracleView("formatted"));

    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: "$.content[0].content[0]", offset: 11 },
          end: { jsonPath: "$.content[2]" },
        },
        ORACLE_TYPE,
        "ch",
      );
      await Promise.resolve();
    });

    const held = mounted.lexical.getEditorState().read(() => $heldBytes(HELD_TYPE, "ch"));
    expect(held).toContain("[immutable-chapter]");
    mounted.lexical.getEditorState().read(() => {
      const chapter = $firstOfType($getRoot(), $isImmutableChapterNode);
      if (!chapter) throw new Error("expected a chapter decorator");
      const element = mounted.lexical.getElementByKey(chapter.getKey());
      expect(element?.classList.contains(DISPLAY_ANNOTATION_CLASS_NAME)).toBe(true);
    });
  });

  it("never holds a verse's trailing separator, so its removal reports the number alone", async () => {
    const mounted = await mountInView(richUsj, oracleView("standard"));
    const onRemove = vi.fn();

    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: "$.content[3].content[0]['number']", propertyOffset: 0 },
          end: { jsonPath: "$.content[3].content[0]['number']", propertyOffset: 2 },
        },
        ORACLE_TYPE,
        "v2",
        { onRemove },
      );
      await Promise.resolve();
    });
    await act(async () => {
      mounted.ref.current?.removeAnnotation(ORACLE_TYPE, "v2");
      await Promise.resolve();
    });

    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith(HELD_TYPE, "v2", "removed", "2");
  });

  it("holds an unmatched closer whole, never splitting it into a mark", async () => {
    const unmatchedUsj: Usj = twoParaUsj(["x ", { type: "unmatched", marker: "*" }, " y"]);
    const mounted = await mountInView(unmatchedUsj, oracleView("standard"));
    const before = mounted.ref.current?.getUsj();

    // The closer is a standalone content item (not text-run-coalesced), so it is named by the
    // gaps on either side of it in its paragraph's own content array — in front of it (index 1)
    // through behind it (index 2) — the same content-array-gap addressing R2's audit repro uses.
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: "$.content[2]", offset: 1 },
          end: { jsonPath: "$.content[2]", offset: 2 },
        },
        ORACLE_TYPE,
        "u1",
      );
      await Promise.resolve();
    });

    mounted.lexical.getEditorState().read(() => {
      const unmatched = $firstOfType($getRoot(), $isImmutableUnmatchedNode);
      if (!unmatched) throw new Error("expected the unmatched closer");
      expect(unmatched.getTextContent()).toBe("\\*");
      expect($isTypedMarkNode(unmatched.getParent())).toBe(false);
    });
    const held = mounted.lexical.getEditorState().read(() => $heldBytes(HELD_TYPE, "u1"));
    expect(held).toBe("\\*");
    expect(mounted.ref.current?.getUsj()).toEqual(before);
  });
});

describe("inbound resolution for annotations", () => {
  /** Sets `range` in `view` over `usj` and returns what holds it — the held bytes, and the text of
   * each held decorator — and what the logger reported. */
  async function annotateInView(
    usj: Usj,
    viewName: string,
    range: AnnotationRange,
  ): Promise<{ held: string; decorators: string[]; logs: string[] }> {
    const mounted = await mountInView(usj, oracleView(viewName));
    await act(async () => {
      mounted.ref.current?.setAnnotation(range, ORACLE_TYPE, "in");
      await Promise.resolve();
    });
    return mounted.lexical.getEditorState().read(() => {
      const heldIndexes = $heldIndexes(HELD_TYPE, "in");
      const decorators = $byteNodes()
        .filter(([, offset], index) => offset < 0 && heldIndexes.has(index))
        .map(([node]) => node.getTextContent());
      return { held: $heldBytes(HELD_TYPE, "in"), decorators, logs: mounted.logs };
    });
  }

  it.each<{
    name: string;
    view: string;
    usj: Usj;
    range: AnnotationRange;
    held: string;
    decorators?: string[];
  }>([
    {
      name: "a milestone's closer, which the view does not display",
      view: "formatted",
      usj: richUsj,
      range: {
        start: { jsonPath: "$.content[3].content[2]['who']", propertyOffset: 5 },
        end: { jsonPath: "$.content[3].content[2]", closingMarkerOffset: 0 },
      },
      held: "",
    },
    {
      name: "a milestone's closer, over the glyphs the view displays for it",
      view: "visible",
      usj: richUsj,
      range: {
        start: { jsonPath: "$.content[3].content[1]", offset: 4 },
        end: { jsonPath: "$.content[3].content[2]", closingMarkerOffset: 0 },
      },
      held: " [immutable-typed-text][immutable-typed-text]",
      // The opening glyph and the attribute display, never the `\*` closer the range ends at.
      decorators: ["\\qt-s", `${NBSP}|sid="q1" who="Pilate"`],
    },
    {
      name: "a default attribute's unspelled key through its value's start",
      view: "standard",
      usj: lemmaUsj,
      range: {
        start: { jsonPath: "$.content[2].content[1]", keyName: "lemma", keyOffset: 0 },
        end: { jsonPath: propertyPath([2, 1], "lemma"), propertyOffset: 0 },
      },
      held: "",
    },
    {
      name: "an undisplayed attribute key through its undisplayed value",
      view: "formatted",
      usj: lemmaUsj,
      range: {
        start: { jsonPath: "$.content[2].content[1]", keyName: "lemma", keyOffset: 4 },
        end: { jsonPath: propertyPath([2, 1], "lemma"), propertyOffset: 0 },
      },
      held: "",
    },
    {
      name: "a paragraph's marker through the backslash a verse decorator displays",
      view: "hidden+expanded",
      usj: richUsj,
      range: {
        start: { jsonPath: "$.content[2]['marker']", propertyOffset: 0 },
        end: { jsonPath: "$.content[2].content[0]['marker']", propertyOffset: 0 },
      },
      held: "[immutable-verse]",
    },
    {
      name: "a verse's trailing separator through the backslash of the span after it",
      view: "visible",
      usj: edgesUsj,
      range: {
        start: { jsonPath: "$.content[1].content[0]['number']", propertyOffset: 1 },
        end: { jsonPath: "$.content[1].content[1]['marker']", propertyOffset: 0 },
      },
      // The verse's own bytes end before the range starts: only the `\wj` glyph is named.
      held: "[immutable-typed-text]",
    },
  ])("resolves $name ($view)", async ({ view, usj, range, held, decorators }) => {
    const result = await annotateInView(usj, view, range);

    expect(result.logs.filter((log) => log.includes("Failed to find"))).toEqual([]);
    expect(result.held).toBe(held);
    if (decorators) expect(result.decorators).toEqual(decorators);
  });

  it.each<{
    name: string;
    view: string;
    location: UsjDocumentLocation;
    type: string;
    after: boolean;
  }>([
    {
      name: "a milestone's undisplayed attribute key in front of the milestone",
      view: "formatted",
      location: { jsonPath: "$.content[3].content[2]", keyName: "who", keyOffset: 0 },
      type: "ms",
      after: false,
    },
    {
      name: "a caller offset past what a collapsed caller shows behind the caller",
      view: "visible+collapsed",
      location: { jsonPath: "$.content[3].content[6]['caller']", propertyOffset: 2 },
      type: "immutable-note-caller",
      after: true,
    },
  ])("puts a caret at $name ($view)", async ({ view, location, type, after }) => {
    const mounted = await mountInView(richUsj, oracleView(view));

    await act(async () => {
      mounted.ref.current?.setSelection({ start: location });
      await Promise.resolve();
    });

    mounted.lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      expect(selection.isCollapsed()).toBe(true);
      const beside = $firstOfType(
        $getRoot(),
        (node): node is LexicalNode => node.getType() === type,
      );
      if (!beside) throw new Error(`expected a ${type} node`);
      const parent = beside.getParentOrThrow();
      // The same position however it is spelled: an element point, or the text point it becomes.
      const expected = $createPoint(
        parent.getKey(),
        beside.getIndexWithinParent() + (after ? 1 : 0),
        "element",
      );
      expect(selection.anchor.isBefore(expected) || expected.isBefore(selection.anchor)).toBe(
        false,
      );
    });
  });

  it("puts a caret at a paragraph's marker at the paragraph's start", async () => {
    const mounted = await mountInView(lemmaUsj, oracleView("formatted"));

    await act(async () => {
      mounted.ref.current?.setSelection({
        start: { jsonPath: "$.content[2]['marker']", propertyOffset: 0 },
      });
      await Promise.resolve();
    });

    mounted.lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      expect(selection.isCollapsed()).toBe(true);
      expect(selection.anchor.getNode().getTextContent()).toBe("In the ");
      expect(selection.anchor.offset).toBe(0);
    });
    expect(mounted.ref.current?.getSelection()).toEqual({
      start: { jsonPath: "$.content[2].content[0]", offset: 0 },
    });
  });

  it("puts a caret inside a verse decorator's bytes in front of it", async () => {
    const mounted = await mountInView(richUsj, oracleView("hidden+expanded"));

    await act(async () => {
      mounted.ref.current?.setSelection({
        start: { jsonPath: "$.content[2].content[0]['marker']", propertyOffset: 0 },
      });
      await Promise.resolve();
    });

    mounted.lexical.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) throw new Error("no range selection");
      expect(selection.isCollapsed()).toBe(true);
      const verse = $firstOfType($getRoot(), $isImmutableVerseNode);
      if (!verse) throw new Error("expected a verse decorator");
      expect(selection.anchor.getNode().is(verse.getParent())).toBe(true);
      expect(selection.anchor.offset).toBe(verse.getIndexWithinParent());
    });
  });
});

describe("removal is reported by what holds the annotation now", () => {
  const standard = oracleView("standard");
  const bareWord: MarkerObject = { type: "char", marker: "w", content: ["grace"] };
  const typedLemma = '|lemma="grace"';

  /** `\p In the \w grace\w* of God` with `|lemma="grace"` typed after `grace`, the caret left at
   * its end so the typing is still pending. */
  async function mountTypingLemma(): Promise<Mounted> {
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the ", bareWord, " of God"]));
    await act(async () => {
      mounted.lexical.update(() => {
        const word = $textContaining("grace");
        word.setTextContent(`${word.getTextContent()}${typedLemma}`);
        word.select(word.getTextContentSize(), word.getTextContentSize());
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    return mounted;
  }

  /** The `lemma` value set as annotation `L` while the typing is pending, then the paragraph
   * settled, which leaves the annotation on the `|grace` run with no mark. */
  async function mountSetWhilePending(onRemove: TypedMarkOnRemove): Promise<Mounted> {
    const mounted = await mountTypingLemma();
    await act(async () => {
      mounted.ref.current?.setAnnotation(lemmaRange, "test", "L", { onRemove });
      await Promise.resolve();
    });
    settleByBlurAndCommit(mounted);
    expect(displayAnnotated(mounted.lexical)).toEqual({ L: ["grace"] });
    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "L"))).toEqual(
      [],
    );
    return mounted;
  }

  /** Deletes the `\w` span the way a user does: from in front of its opener glyph to behind its
   * closer glyph. */
  async function userDeletesWord(mounted: Mounted): Promise<void> {
    await act(async () => {
      mounted.lexical.update(() => {
        const glyphs = $onlyCharNode().getChildren().filter($isMarkerNode);
        const opener = glyphs[0];
        const closer = glyphs[glyphs.length - 1];
        const selection = $createRangeSelection();
        selection.anchor.set(opener.getKey(), 0, "text");
        selection.focus.set(closer.getKey(), closer.getTextContentSize(), "text");
        $setSelection(selection);
        selection.removeText();
      });
      await Promise.resolve();
      await Promise.resolve();
    });
  }

  async function removeL(mounted: Mounted): Promise<void> {
    await act(async () => {
      mounted.ref.current?.removeAnnotation("test", "L");
      await Promise.resolve();
    });
  }

  it("reports destroyed once when the user deletes the bytes of an annotation set while typing was pending", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountSetWhilePending(onRemove);

    await userDeletesWord(mounted);

    expect(displayAnnotated(mounted.lexical)).toEqual({});
    expect(onRemove.mock.calls).toEqual([["external-test", "L", "destroyed", "grace"]]);
    await removeL(mounted);
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("reports removed once for the same annotation, and an undo brings it back without a report", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountSetWhilePending(onRemove);

    await removeL(mounted);

    expect(displayAnnotated(mounted.lexical)).toEqual({});
    expect(onRemove.mock.calls).toEqual([["external-test", "L", "removed", "grace"]]);
    await act(async () => mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined));
    expect(displayAnnotated(mounted.lexical)).toEqual({ L: ["grace"] });
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("keeps an annotation a mark still holds reported through that mark alone", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountTypingLemma();
    settleByBlurAndCommit(mounted);
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        { start: { jsonPath: contentPath([2, 0]), offset: 0 }, end: lemmaRange.end },
        "test",
        "L",
        { onRemove },
      );
      await Promise.resolve();
    });
    const $marks = () => $markTexts("external-test", "L");
    expect(mounted.lexical.getEditorState().read($marks)).toEqual(["In the ", "grace"]);
    expect(displayAnnotated(mounted.lexical)).toEqual({ L: ["\\w", "|grace"] });

    await userDeletesWord(mounted);

    // The selection removes the `grace` mark, which reports itself; the `\w` and `|grace`
    // carriers add nothing while the `In the ` mark holds the annotation.
    expect(displayAnnotated(mounted.lexical)).toEqual({});
    expect(mounted.lexical.getEditorState().read($marks)).toEqual(["In the "]);
    expect(causes(onRemove)).toEqual(["destroyed"]);

    await act(async () => {
      mounted.lexical.update(() => $textContaining("In the ").getParentOrThrow().remove());
      await Promise.resolve();
    });

    expect(onRemove.mock.calls.slice(1)).toEqual([["external-test", "L", "destroyed", "In the "]]);
  });

  it("reports nothing for content marks a settle of their paragraph rebuilds", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const body = "alpha bravo charlie";
    const mounted = await mountInView(twoParaUsj([body]), standard);
    const ranges = {
      bravo: [body.indexOf("bravo"), body.indexOf("bravo") + "bravo".length],
      straddle: [body.indexOf("bravo"), body.indexOf("charlie") + "char".length],
    };
    for (const [id, [start, end]] of Object.entries(ranges))
      await act(async () => {
        mounted.ref.current?.setAnnotation(
          {
            start: { jsonPath: contentPath([2, 0]), offset: start },
            end: { jsonPath: contentPath([2, 0]), offset: end },
          },
          "test",
          id,
          { onRemove },
        );
        await Promise.resolve();
      });

    await typeOver(mounted.lexical, "lie", "lie \\nd LORD\\nd*");
    settleByBlurAndCommit(mounted);

    expect(spanContentIn(mounted.ref.current?.getUsj(), "nd")).toEqual(["LORD"]);
    const $held = (id: string) => () => $markTexts("external-test", id).join("");
    expect(mounted.lexical.getEditorState().read($held("bravo"))).toBe("bravo");
    expect(mounted.lexical.getEditorState().read($held("straddle"))).toBe("bravo char");
    expect(onRemove).not.toHaveBeenCalled();
  });

  /** `\p In the grace of God` with annotation `id` on `grace`, a plain content mark. */
  async function mountGraceMark(onRemove: TypedMarkOnRemove, id = "G"): Promise<Mounted> {
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the grace of God"]));
    await setGrace(mounted, onRemove, id, 7);
    return mounted;
  }

  async function setGrace(
    mounted: Mounted,
    onRemove: TypedMarkOnRemove,
    id: string,
    start: number,
  ): Promise<void> {
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([2, 0]), offset: start },
          end: { jsonPath: contentPath([2, 0]), offset: start + "grace".length },
        },
        "test",
        id,
        { onRemove },
      );
      await Promise.resolve();
    });
  }

  /** Selects from `from`'s text at `fromOffset` to `to`'s at `toOffset` and deletes the selection,
   * as the Delete key does. */
  async function selectAndDelete(
    mounted: Mounted,
    from: string,
    fromOffset: number,
    to: string,
    toOffset: number,
  ): Promise<void> {
    await act(async () => {
      mounted.lexical.update(() => $selectAndDelete(from, fromOffset, to, toOffset));
      await Promise.resolve();
      await Promise.resolve();
    });
  }

  /** {@link selectAndDelete}'s edit, inside an update. */
  function $selectAndDelete(from: string, fromOffset: number, to: string, toOffset: number): void {
    const selection = $createRangeSelection();
    selection.anchor.set($textContaining(from).getKey(), fromOffset, "text");
    selection.focus.set($textContaining(to).getKey(), toOffset, "text");
    $setSelection(selection);
    selection.removeText();
  }

  async function undo(mounted: Mounted): Promise<void> {
    await act(async () => mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined));
  }

  it("reports destroyed once when a selection deletes exactly a mark's text", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountGraceMark(onRemove);
    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "G"))).toEqual([
      "grace",
    ]);

    await selectAndDelete(mounted, "grace", 0, "grace", "grace".length);

    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "G"))).toEqual(
      [],
    );
    expect(onRemove.mock.calls).toEqual([["external-test", "G", "destroyed", "grace"]]);
    await act(async () => {
      mounted.ref.current?.removeAnnotation("test", "G");
      await Promise.resolve();
    });
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("reports destroyed once when a selection deletes a mark's text and one byte more", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountGraceMark(onRemove);

    await selectAndDelete(mounted, "grace", 0, " of God", 1);

    expect(causes(onRemove)).toEqual(["destroyed"]);
  });

  it("reports nothing more when that delete is undone and redone", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountGraceMark(onRemove);
    await selectAndDelete(mounted, "grace", 0, "grace", "grace".length);
    expect(onRemove).toHaveBeenCalledTimes(1);

    await act(async () => mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined));
    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "G"))).toEqual([
      "grace",
    ]);
    await act(async () => mounted.lexical.dispatchCommand(REDO_COMMAND, undefined));

    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "G"))).toEqual(
      [],
    );
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("reports nothing for a mark a setUsj load drops", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountGraceMark(onRemove);

    await act(async () => {
      mounted.ref.current?.setUsj(twoParaUsj(["In the beginning"]));
      // LoadStatePlugin applies the load in a microtask.
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "G"))).toEqual(
      [],
    );
    expect(onRemove).not.toHaveBeenCalled();
  });

  it("reports removed once when the same id is set again, then destroyed once for the new range", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountStandardViewEditor(twoParaUsj(["In the grace of God, grace"]));
    await setGrace(mounted, onRemove, "G", 7);
    const second = "In the grace of God, ".length;

    await setGrace(mounted, onRemove, "G", second);

    expect(onRemove.mock.calls).toEqual([["external-test", "G", "removed", "grace"]]);
    await act(async () => {
      mounted.lexical.update(() => {
        const text = $markHolding("external-test", "G").getFirstDescendant();
        if (!$isTextNode(text)) throw new Error("the mark holds no text");
        text.select(0, text.getTextContentSize()).removeText();
      });
      await Promise.resolve();
      await Promise.resolve();
    });
    expect(onRemove.mock.calls.slice(1)).toEqual([["external-test", "G", "destroyed", "grace"]]);
  });

  it("reports once when a selection delete and removeAnnotation of the same id share a commit", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountGraceMark(onRemove);

    await act(async () => {
      mounted.lexical.update(() => $selectAndDelete("grace", 0, "grace", "grace".length));
      mounted.ref.current?.removeAnnotation("test", "G");
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "G"))).toEqual(
      [],
    );
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it("reports a selection delete that shares a commit with setting another id", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountGraceMark(onRemove);

    await act(async () => {
      mounted.lexical.update(() => $selectAndDelete("grace", 0, "grace", "grace".length));
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([3, 0]), offset: 0 },
          end: { jsonPath: contentPath([3, 0]), offset: "depart".length },
        },
        "test",
        "Y",
      );
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "Y"))).toEqual([
      "depart",
    ]);
    expect(onRemove.mock.calls).toEqual([["external-test", "G", "destroyed", "grace"]]);
  });

  describe("after a selection delete that reported the mark is undone", () => {
    it("reports nothing more when a later delete removes the mark itself", async () => {
      const onRemove = vi.fn<TypedMarkOnRemove>();
      const mounted = await mountGraceMark(onRemove);
      await selectAndDelete(mounted, "grace", 0, "grace", "grace".length);
      await undo(mounted);
      expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "G"))).toEqual(
        ["grace"],
      );

      await selectAndDelete(mounted, "In the ", "In th".length, " of God", 2);

      expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "G"))).toEqual(
        [],
      );
      expect(onRemove.mock.calls).toEqual([["external-test", "G", "destroyed", "grace"]]);
    });

    it("reports nothing more when the host removes the annotation", async () => {
      const onRemove = vi.fn<TypedMarkOnRemove>();
      const mounted = await mountGraceMark(onRemove);
      await selectAndDelete(mounted, "grace", 0, "grace", "grace".length);
      await undo(mounted);

      await act(async () => {
        mounted.ref.current?.removeAnnotation("test", "G");
        await Promise.resolve();
      });

      expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "G"))).toEqual(
        [],
      );
      expect(onRemove.mock.calls).toEqual([["external-test", "G", "destroyed", "grace"]]);
    });
  });

  it("reports nothing more when a mark that reported its own removal comes back and is deleted by selection", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountGraceMark(onRemove);
    await selectAndDelete(mounted, "In the ", "In th".length, " of God", 2);
    expect(causes(onRemove)).toEqual(["destroyed"]);
    await undo(mounted);

    await selectAndDelete(mounted, "grace", 0, "grace", "grace".length);

    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "G"))).toEqual(
      [],
    );
    expect(causes(onRemove)).toEqual(["destroyed"]);
  });

  it("reports destroyed once when a settle discards every byte of a mark", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountTypingLemma();
    const name = 'lemma="';
    await act(async () => {
      mounted.lexical.update(() => {
        const text = $textContaining(typedLemma);
        const start = text.getTextContent().indexOf(name);
        const selection = $createRangeSelection();
        selection.anchor.set(text.getKey(), start, "text");
        selection.focus.set(text.getKey(), start + name.length, "text");
        $wrapSelectionInTypedMarkNode(selection, "external-test", "D", undefined, onRemove);
      });
      await Promise.resolve();
      await Promise.resolve();
    });

    // The wrap's own commit already settles the pending typing; the explicit settle holds the row
    // either way.
    settleByBlurAndCommit(mounted);

    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "D"))).toEqual(
      [],
    );
    expect(displayAnnotated(mounted.lexical)).toEqual({});
    expect(onRemove.mock.calls).toEqual([["external-test", "D", "destroyed", name]]);
  });

  it("reports destroyed once when one delete takes a mark an undo brought back and its carrier", async () => {
    const onRemove = vi.fn<TypedMarkOnRemove>();
    const mounted = await mountStandardViewEditor(twoParaUsj(["alpha nd ", bareWord, " of God"]));
    await act(async () => {
      mounted.ref.current?.setAnnotation(
        {
          start: { jsonPath: contentPath([2, 0]), offset: "alpha ".length },
          end: { jsonPath: contentPath([2, 1, 0]), offset: 0 },
        },
        "test",
        "X",
        { onRemove },
      );
      await Promise.resolve();
    });
    // A backslash typed in front of the marked `nd ` turns it into a marker the settle re-spells;
    // the undo brings the mark back.
    await act(async () => {
      mounted.lexical.update(() => $textContaining("alpha").select(6, 6).insertText("\\"));
      await Promise.resolve();
      await Promise.resolve();
    });
    settleByBlurAndCommit(mounted);
    await act(async () => mounted.lexical.dispatchCommand(UNDO_COMMAND, undefined));
    expect(mounted.lexical.getEditorState().read(() => $markTexts("external-test", "X"))).toEqual([
      "nd ",
    ]);
    expect(displayAnnotated(mounted.lexical).X).toHaveLength(1);

    await act(async () => {
      mounted.lexical.update(() => {
        const glyphs = $onlyCharNode().getChildren().filter($isMarkerNode);
        const closer = glyphs[glyphs.length - 1];
        const selection = $createRangeSelection();
        selection.anchor.set($textContaining("alpha").getKey(), 0, "text");
        selection.focus.set(closer.getKey(), closer.getTextContentSize(), "text");
        $setSelection(selection);
        selection.removeText();
      });
      await Promise.resolve();
      await Promise.resolve();
    });

    expect(displayAnnotated(mounted.lexical)).toEqual({});
    expect(causes(onRemove)).toEqual(["destroyed"]);
  });
});

/** The first node under `node` (itself included) that `predicate` accepts, by document order. Call
 * inside a read or update. */
function $firstOfType<T extends LexicalNode>(
  node: LexicalNode,
  predicate: (node: LexicalNode) => node is T,
): T | undefined {
  if (predicate(node)) return node;
  if (!$isElementNode(node)) return undefined;
  for (const child of node.getChildren()) {
    const found = $firstOfType(child, predicate);
    if (found) return found;
  }
  return undefined;
}

/** The first note under `node`. Call inside a read or update. */
function $noteIn(node: LexicalNode): NoteNode | undefined {
  if ($isNoteNode(node)) return node;
  if (!$isElementNode(node)) return undefined;
  for (const child of node.getChildren()) {
    const found = $noteIn(child);
    if (found) return found;
  }
  return undefined;
}
