import Editor from "./Editor";
import { EditorRef } from "./editor.model";
import { mountStandardViewEditor } from "./settledGetUsj.test-helpers";
import { $textContaining, twoParaUsj } from "./positions/positions.test-helpers";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { act, render } from "@testing-library/react";
import { $getNodeByKey, $getSelection, $isRangeSelection, LexicalEditor } from "lexical";
import { createRef } from "react";
import { $isNoteNode, getPendedDisplayOwners } from "shared";
import {
  $getOTPositionOfNode,
  DeltaOp,
  DeltaSource,
  FORMATTED_VIEW_MODE,
  getViewOptions,
} from "shared-react";

// Undo restores a caret while the root holds DOM focus; Lexical's scroll-into-view then reads an
// Element rect jsdom does not implement.
if (typeof Element.prototype.getBoundingClientRect !== "function")
  Element.prototype.getBoundingClientRect = function (): DOMRect {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      toJSON() {
        return this;
      },
    };
  };

interface Emission {
  usj: Usj;
  ops: unknown[] | undefined;
  getUsjNow: Usj | undefined;
}

const graceUsj = () =>
  twoParaUsj(["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God made"]);

async function mountRecording() {
  const emissions: Emission[] = [];
  const holder: { get?: () => Usj | undefined } = {};
  const mounted = await mountStandardViewEditor(graceUsj(), {
    onUsjChange: (usj, ops) => emissions.push({ usj, ops, getUsjNow: holder.get?.() }),
  });
  holder.get = () => mounted.ref.current?.getUsj() ?? undefined;
  return { ...mounted, emissions };
}

/** Commit `update` discretely inside a SYNCHRONOUS `act`: the commit and its listeners run before
 * this returns, while queued microtasks still do not, and React state the commit sets (the
 * toolbar's undo state) is flushed inside `act`. */
function commitNow(lexical: LexicalEditor, update: () => void): void {
  act(() => {
    lexical.update(update, { discrete: true });
  });
}

/** Type `appended` at the end of the text node holding `needle`, in ONE discrete commit. */
function appendNow(lexical: LexicalEditor, needle: string, appended: string): void {
  commitNow(lexical, () => {
    const node = $textContaining(needle);
    node.setTextContent(node.getTextContent() + appended);
    const end = node.getTextContentSize();
    node.select(end, end);
  });
}

/** Depart by EDITING another paragraph: the edit opens its own history entry, so one undo lands
 * on the pending literal rather than on the pre-typing document (a bare caret move would merge
 * the settle into the typing's entry). `twoParaUsj`'s second paragraph holds "depart here". */
async function editDeparture(lexical: LexicalEditor): Promise<void> {
  await act(async () => {
    lexical.update(() => {
      const target = $textContaining("depart here");
      const end = target.getTextContentSize();
      target.select(end, end);
      const selection = $getSelection();
      if ($isRangeSelection(selection)) selection.insertText("!");
    });
    await Promise.resolve();
    await Promise.resolve();
  });
}

async function flush(): Promise<void> {
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** A `\w` span as USJ carries it: `lemma` is one of its attributes, which `MarkerObject` leaves
 * untyped. */
type WordChar = MarkerObject & { lemma?: string };

function wCharOf(usj: Usj | undefined): WordChar | undefined {
  const para = usj?.content.find(
    (item) =>
      typeof item === "object" && item.type === "para" && JSON.stringify(item).includes("grace"),
  ) as MarkerObject | undefined;
  return para?.content?.find((item) => typeof item === "object" && item.marker === "w") as
    | WordChar
    | undefined;
}

const LEMMA = '|lemma="grace"';

it("emits getUsj()'s document while an attribute is pending", async () => {
  const { lexical, emissions } = await mountRecording();
  const before = emissions.length;
  appendNow(lexical, "grace", LEMMA);
  expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBeGreaterThan(0);
  const emitted = emissions[before];
  expect(emitted).toBeDefined();
  expect(wCharOf(emitted.usj)?.lemma).toBe("grace");
  expect(emitted.usj).toEqual(emitted.getUsjNow);
});

it("emits exactly once per content commit, synchronously", async () => {
  const { lexical, emissions } = await mountRecording();
  const before = emissions.length;
  appendNow(lexical, "grace", LEMMA);
  expect(emissions.length).toBe(before + 1);
  await flush();
  expect(emissions.length).toBe(before + 1);
});

it("emits once per commit after a reload re-registers the change listeners", async () => {
  const { lexical, ref, emissions } = await mountRecording();
  await act(async () => {
    ref.current?.setUsj(
      twoParaUsj(["In the ", { type: "char", marker: "w", content: ["grace"] }, " of God made."]),
    );
    await Promise.resolve();
  });
  await flush();
  const before = emissions.length;
  appendNow(lexical, "grace", LEMMA);
  await flush();
  const emitted = emissions.slice(before);
  expect(emitted.length).toBe(1);
  expect(emitted[0].ops?.length ?? 0).toBeGreaterThan(0);
  expect(wCharOf(emitted[0].usj)?.lemma).toBe("grace");
});

it("emits the settled document, synchronously, on an undo that restores a pending literal", async () => {
  const { lexical, ref, emissions } = await mountRecording();
  appendNow(lexical, "grace", LEMMA);
  await flush();
  await editDeparture(lexical);
  await flush();
  expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBe(0);
  const before = emissions.length;
  // Discrete, so the undo commits (and its listeners run) before this returns.
  commitNow(lexical, () => ref.current?.undo());
  expect(getPendedDisplayOwners(lexical)?.size ?? 0).toBeGreaterThan(0);
  const emitted = emissions.slice(before);
  expect(emitted.length).toBe(1);
  expect(emitted[0].ops?.length ?? 0).toBeGreaterThan(0);
  // The in-callback getUsj() alone is not a sufficient oracle: before the pend set is re-derived
  // it agrees with a payload that shows the literal as plain text.
  expect(wCharOf(emitted[0].usj)?.lemma).toBe("grace");
  expect(emitted[0].usj).toEqual(ref.current?.getUsj());
  await flush();
  expect(emissions.length).toBe(before + 1);
});

it("emits nothing for a selection-only commit", async () => {
  const { lexical, emissions } = await mountRecording();
  const before = emissions.length;
  commitNow(lexical, () => $textContaining("of God").select(2, 2));
  await flush();
  expect(emissions.length).toBe(before);
});

it("keeps ops in live delta coordinates", async () => {
  const { lexical, emissions } = await mountRecording();
  const before = emissions.length;
  appendNow(lexical, "grace", LEMMA);
  expect(emissions[before].ops?.length ?? 0).toBeGreaterThan(0);
});

it("emits nothing for a commit that changes no bytes, after the first load or a reload", async () => {
  const { lexical, ref, emissions } = await mountRecording();
  await flush();
  const touchWithoutChange = (needle: string) =>
    commitNow(lexical, () => $textContaining(needle).markDirty());
  touchWithoutChange("of God");
  await flush();
  expect(emissions).toHaveLength(0);
  await act(async () => {
    ref.current?.setUsj(twoParaUsj(["In the beginning"]));
    await Promise.resolve();
  });
  await flush();
  touchWithoutChange("beginning");
  await flush();
  expect(emissions).toHaveLength(0);
});

// Standard view's export collapses a run of spaces, so a double space makes the load round trip
// lossy; the single space is the control.
it.each([
  ["a lossless load", "In the beginning of God"],
  ["a lossy load (a double space)", "In the  beginning of God"],
])("emits nothing for a paragraph commit that changes no bytes after %s", async (_, text) => {
  const emissions: Usj[] = [];
  const { lexical } = await mountStandardViewEditor(twoParaUsj([text]), {
    onUsjChange: (usj) => emissions.push(usj),
  });
  await flush();
  commitNow(lexical, () => $textContaining("of God").getParentOrThrow().markDirty());
  await flush();
  expect(emissions).toHaveLength(0);
});

/** Every paragraph marker of `usj`, in document order. */
function paraMarkersOf(usj: Usj | undefined): string[] {
  return (usj?.content ?? []).flatMap((item) =>
    typeof item === "object" && item.type === "para" && item.marker ? [item.marker] : [],
  );
}

// In the formatted view a one-text paragraph's retag dirties exactly one leaf, the moved text node,
// whose text is unchanged — so the commit's delta is a lone retain (or nothing at all, for the
// document's first node) although the paragraph's marker changed.
it.each([
  [
    "after other content",
    twoParaUsj(["In the beginning"]).content.toSpliced(3, 0, {
      type: "para",
      marker: "s1",
      content: ["Heading Title"],
    }),
  ],
  [
    "at the start of the document",
    [
      { type: "para", marker: "s1", content: ["Heading Title"] },
      { type: "para", marker: "p", content: ["depart here"] },
    ],
  ],
])(
  "announces a paragraph retag whose only dirty leaf kept its text (%s)",
  async (_label, content) => {
    const emissions: Usj[] = [];
    const ref = createRef<EditorRef>();
    const lexicalRef = createRef<LexicalEditor>();
    await act(async () => {
      render(
        <Editor
          ref={ref}
          defaultUsj={{ type: "USJ", version: "3.1", content }}
          options={{ view: getViewOptions(FORMATTED_VIEW_MODE) }}
          onUsjChange={(usj) => emissions.push(usj)}
        >
          <EditorRefPlugin editorRef={lexicalRef} />
        </Editor>,
      );
    });
    await flush();
    const lexical = lexicalRef.current;
    if (!lexical) throw new Error("lexical editor was not captured");
    commitNow(lexical, () => $textContaining("Heading Title").select(0, 0));
    const before = emissions.length;
    await act(async () => {
      ref.current?.formatPara("s2");
      await Promise.resolve();
      await Promise.resolve();
    });
    await flush();
    expect(emissions.length).toBe(before + 1);
    expect(paraMarkersOf(emissions[before])).toContain("s2");
    expect(paraMarkersOf(ref.current?.getUsj())).toEqual(paraMarkersOf(emissions[before]));
    expect(paraMarkersOf(ref.current?.getUsj())).not.toContain("s1");
  },
);

it("announces a local applyUpdate exactly once, with the caller's ops and the inserted node", async () => {
  const emissions: {
    ops: DeltaOp[] | undefined;
    source: DeltaSource | undefined;
    insertedNodeKey: string | undefined;
  }[] = [];
  const { lexical, ref } = await mountStandardViewEditor(graceUsj(), {
    onUsjChange: (_usj, ops, source, insertedNodeKey) =>
      emissions.push({ ops, source, insertedNodeKey }),
  });
  await flush();
  // Just after "In the " — addressed in "apply" coordinates, the ones `applyUpdate` reads.
  const retain =
    (lexical
      .getEditorState()
      .read(() => $getOTPositionOfNode($textContaining("In the "), "apply")) ?? 0) +
    "In the ".length;
  const ops: DeltaOp[] = [
    { retain },
    { insert: { note: { style: "f", caller: "+", contents: { ops: [{ insert: "a note" }] } } } },
  ];
  act(() => ref.current?.applyUpdate(ops, "local"));
  await flush();
  expect(emissions).toHaveLength(1);
  expect(emissions[0].ops).toBe(ops);
  expect(emissions[0].source).toBe("local");
  const insertedNodeKey = emissions[0].insertedNodeKey;
  expect(insertedNodeKey).toBeDefined();
  expect(
    lexical.getEditorState().read(() => $isNoteNode($getNodeByKey(insertedNodeKey ?? ""))),
  ).toBe(true);
});
