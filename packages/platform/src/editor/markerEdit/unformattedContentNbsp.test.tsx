/**
 * Unformatted-view content NBSP preservation across a settle. In unformatted view the display
 * shows a data NBSP as the NBSP byte itself (no `~` display mapping), so when a settle rebuilds a
 * paragraph, the fragment layer must spell those content NBSPs the tokenizer's way (`~`, which
 * `usjText` maps back to NBSP) instead of flattening them to plain spaces — the flattening that
 * silently corrupted data NBSPs whenever a settle rewrote the text. Structural NBSPs (glyph
 * separators, the char span's leading prefix) still flatten to " " (see `contentFragmentText`,
 * tier2Rebuild.utils.ts).
 */
import editorUsjAdaptor, {
  initialize as initializeDeserialize,
} from "../adaptors/editor-usj.adaptor";
import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "../adaptors/usj-editor.adaptor";
import { $pendGlyphEdit } from "./markerEdit.test-helpers";
import { COMMIT_PENDING_MARKERS_COMMAND, MarkerEditPlugin } from "./MarkerEditPlugin";
import { Tier2Context } from "./tier2Rebuild.utils";
import { $settledUsj } from "./virtualSettle.utils";
import { MarkerObject, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import { $createTextNode, $getRoot, $isElementNode, LexicalEditor, LexicalNode } from "lexical";
import {
  $createCharNode,
  $createMarkerNode,
  $createParaNode,
  $isCharNode,
  CharNode,
  getMarker as bundledGetMarker,
  getPendedDisplayOwners,
  NBSP,
  $isMarkerNode,
} from "shared";
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { baseTestEnvironment } from "../../../../../libs/shared-react/src/plugins/usj/react-test.utils";
import { getViewOptions, UNFORMATTED_VIEW_MODE } from "shared-react";

// jsdom implements no layout, so `Range.prototype.getBoundingClientRect` is absent — same shim as
// markerEditTier2Trigger.utils.test.tsx (a settle can place the caret and trip Lexical's
// post-commit scroll-into-view).
if (typeof Range.prototype.getBoundingClientRect !== "function")
  Range.prototype.getBoundingClientRect = () => new DOMRect();

const unformattedViewOptions = getViewOptions(UNFORMATTED_VIEW_MODE);
if (!unformattedViewOptions) throw new Error("Unformatted view options are required.");

const context: Tier2Context = { viewOptions: unformattedViewOptions, getMarker: bundledGetMarker };

/** Mounts a headless editor with `MarkerEditPlugin` active in UNFORMATTED view. */
async function unformattedTestEnvironment($initialEditorState: () => void) {
  initializeSerialize(undefined, undefined);
  reset();
  return baseTestEnvironment(
    $initialEditorState,
    <MarkerEditPlugin viewOptions={unformattedViewOptions} />,
  );
}

/** The current editor state as USJ through the unformatted reverse adaptor. */
function usjOf(editor: LexicalEditor): Usj | undefined {
  initializeDeserialize(undefined);
  return editorUsjAdaptor.deserializeEditorState(editor.getEditorState(), unformattedViewOptions);
}

/** Mounts an unformatted-view editor whose initial state is `usj` run through the real loader, so
 * the nodes carry exactly the tags (or lack of them) a loaded document gets. */
async function unformattedTestEnvironmentFromUsj(usj: Usj) {
  initializeSerialize(undefined, undefined);
  initializeDeserialize(undefined);
  reset();
  const state = serializeEditorState(usj, unformattedViewOptions);
  return baseTestEnvironment(
    JSON.stringify({ root: state.root }),
    <MarkerEditPlugin viewOptions={unformattedViewOptions} />,
  );
}

/** The first MarkerNode in the tree whose marker is `marker`. */
function $findMarkerGlyph(marker: string) {
  return $getRoot()
    .getAllTextNodes()
    .find(
      (node) => $isMarkerNode(node) && node.getMarker() === marker && node.getType() === "marker",
    );
}

/** Depth-first search for the first CharNode with `marker` anywhere under `root`. */
function $findFirstChar(root: LexicalNode, marker: string): CharNode | undefined {
  if ($isCharNode(root) && root.getMarker() === marker) return root;
  if (!$isElementNode(root)) return undefined;
  for (const child of root.getChildren()) {
    const found = $findFirstChar(child, marker);
    if (found) return found;
  }
  return undefined;
}

describe("unformatted view: content NBSP across a settle", () => {
  it("preserves a body-text data NBSP when a typed literal settles in the same paragraph", async () => {
    const { editor } = await unformattedTestEnvironment(() => {
      $getRoot().append(
        $createParaNode("p").append($createMarkerNode("p"), $createTextNode("alpha")),
      );
    });
    // One commit: the paragraph now holds a data NBSP AND a terminated literal, which triggers
    // the immediate rebuild — the settle rewrites the whole paragraph's text.
    await act(async () =>
      editor.update(() => {
        const text = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent() === "alpha");
        text?.setTextContent(`one${NBSP}two \\nd Lord\\nd* end`);
      }),
    );
    editor.getEditorState().read(() => {
      const rootText = $getRoot().getTextContent();
      expect(rootText).toContain(`one${NBSP}two`);
      expect(rootText).not.toContain("one two");
      expect($findFirstChar($getRoot(), "nd")).toBeDefined();
    });
    // The NBSP is a DATA byte: it must reach the USJ, not just the display.
    expect(JSON.stringify(usjOf(editor))).toContain(`one${NBSP}two`);
  });

  it("settles a typed `~` into a data NBSP (the tokenizer's input convention)", async () => {
    const { editor } = await unformattedTestEnvironment(() => {
      $getRoot().append(
        $createParaNode("p").append($createMarkerNode("p"), $createTextNode("alpha")),
      );
    });
    await act(async () =>
      editor.update(() => {
        const text = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent() === "alpha");
        text?.setTextContent(`one~two \\nd Lord\\nd* end`);
      }),
    );
    editor.getEditorState().read(() => {
      const rootText = $getRoot().getTextContent();
      expect(rootText).toContain(`one${NBSP}two`);
      expect(rootText).not.toContain("one~two");
    });
    expect(JSON.stringify(usjOf(editor))).toContain(`one${NBSP}two`);
  });

  it("preserves a char-span interior data NBSP while the structural lead stays structural", async () => {
    const { editor } = await unformattedTestEnvironment(() => {
      const char = $createCharNode("nd");
      $getRoot().append(
        $createParaNode("p").append(
          $createMarkerNode("p"),
          char.append(
            $createMarkerNode("nd"),
            // Structural lead (the display separator the adaptor fuses onto the first content
            // child) + content whose interior NBSP is DATA.
            $createTextNode(`${NBSP}Lo${NBSP}rd`),
            $createMarkerNode("nd", "closing"),
          ),
          $createTextNode(" tail"),
        ),
      );
    });
    // Force the paragraph to settle by typing a terminated literal after the span.
    await act(async () =>
      editor.update(() => {
        const text = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent() === " tail");
        text?.setTextContent(" tail \\wj glow\\wj* end");
      }),
    );
    const usjText = JSON.stringify(usjOf(editor));
    // Interior NBSP survives as data; the structural lead was NOT doubled into the content
    // (the reverse adaptor strips exactly one leading NBSP from the span's first string).
    expect(usjText).toContain(`Lo${NBSP}rd`);
    expect(usjText).not.toContain(`${NBSP}Lo${NBSP}rd`);
    expect(usjText).toContain('"marker":"wj"');
  });

  it("read-only settle (getUsj while pending) and the live settle agree on the NBSP byte", async () => {
    let glyph!: ReturnType<typeof $createMarkerNode>;
    const { editor } = await unformattedTestEnvironment(() => {
      glyph = $createMarkerNode("p");
      $getRoot().append($createParaNode("p").append(glyph, $createTextNode(`one${NBSP}two`)));
    });
    // A caret-less pending glyph rename (the undo/blur shape) makes the paragraph pending
    // without settling it, so the read-only settle actually has work to do.
    await act(async () =>
      editor.update(() => {
        $pendGlyphEdit(glyph, "\\q1");
      }),
    );
    const serializedState = editor.getEditorState().toJSON();
    const pendedKeys = getPendedDisplayOwners(editor) ?? new Set<string>();
    const mirror = editor
      .getEditorState()
      .read(() => $settledUsj(serializedState, pendedKeys, context));
    expect(mirror).toBeDefined();
    const mirrorPara = mirror?.content[0] as MarkerObject;
    expect(mirrorPara.marker).toBe("q1");
    expect(JSON.stringify(mirrorPara.content)).toContain(`one${NBSP}two`);

    // The live settle must produce byte-identically what the mirror predicted.
    await act(async () => {
      editor.dispatchCommand(COMMIT_PENDING_MARKERS_COMMAND, undefined);
    });
    expect(usjOf(editor)).toEqual(mirror);
  });

  it("preserves a lone NBSP between char spans when a marker edit settles the paragraph", async () => {
    const { editor } = await unformattedTestEnvironmentFromUsj({
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            { type: "char", marker: "wj", content: ["glory"] },
            NBSP,
            { type: "char", marker: "nd", content: ["Lord"] },
          ],
        },
      ],
    });
    await act(async () =>
      editor.update(() => {
        const glyph = $findMarkerGlyph("p");
        if (!glyph || !$isMarkerNode(glyph)) throw new Error("p glyph not found");
        $pendGlyphEdit(glyph, "\\q1");
      }),
    );
    await act(async () => {
      editor.dispatchCommand(COMMIT_PENDING_MARKERS_COMMAND, undefined);
    });
    const para = usjOf(editor)?.content[0] as MarkerObject;
    expect(para.marker).toBe("q1");
    expect(para.content).toEqual([
      { type: "char", marker: "wj", content: ["glory"] },
      NBSP,
      { type: "char", marker: "nd", content: ["Lord"] },
    ]);
  });

  it("an empty char span still settles to an empty span", async () => {
    const { editor } = await unformattedTestEnvironmentFromUsj({
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: ["alpha ", { type: "char", marker: "nd", content: [] }, " omega"],
        },
      ],
    });
    await act(async () =>
      editor.update(() => {
        const glyph = $findMarkerGlyph("p");
        if (!glyph || !$isMarkerNode(glyph)) throw new Error("p glyph not found");
        $pendGlyphEdit(glyph, "\\q1");
      }),
    );
    await act(async () => {
      editor.dispatchCommand(COMMIT_PENDING_MARKERS_COMMAND, undefined);
    });
    const para = usjOf(editor)?.content[0] as MarkerObject;
    expect(para.marker).toBe("q1");
    const nd = para.content?.find(
      (item): item is MarkerObject => typeof item !== "string" && item.marker === "nd",
    );
    expect(nd?.content ?? []).toEqual([]);
  });

  it("the read-only settle and the live settle agree on the lone NBSP", async () => {
    const { editor } = await unformattedTestEnvironmentFromUsj({
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            { type: "char", marker: "wj", content: ["glory"] },
            NBSP,
            { type: "char", marker: "nd", content: ["Lord"] },
          ],
        },
      ],
    });
    await act(async () =>
      editor.update(() => {
        const glyph = $findMarkerGlyph("p");
        if (!glyph || !$isMarkerNode(glyph)) throw new Error("p glyph not found");
        $pendGlyphEdit(glyph, "\\q1");
      }),
    );
    const serializedState = editor.getEditorState().toJSON();
    const pendedKeys = getPendedDisplayOwners(editor) ?? new Set<string>();
    const mirror = editor
      .getEditorState()
      .read(() => $settledUsj(serializedState, pendedKeys, context));
    expect(mirror).toBeDefined();
    expect((mirror?.content[0] as MarkerObject).content).toContain(NBSP);

    await act(async () => {
      editor.dispatchCommand(COMMIT_PENDING_MARKERS_COMMAND, undefined);
    });
    expect(usjOf(editor)).toEqual(mirror);
  });

  it("preserves a lone NBSP between char spans inside a note across a note-scoped settle", async () => {
    const { editor } = await unformattedTestEnvironmentFromUsj({
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            "text",
            {
              type: "note",
              marker: "f",
              caller: "+",
              content: [
                { type: "char", marker: "ft", content: ["alpha"] },
                NBSP,
                { type: "char", marker: "fq", content: ["beta"] },
              ],
            },
            " after",
          ],
        },
      ],
    });
    // Typing a terminated literal into the note's text settles the note's own scope.
    await act(async () =>
      editor.update(() => {
        const alpha = $getRoot()
          .getAllTextNodes()
          .find((node) => node.getTextContent().includes("alpha"));
        alpha?.setTextContent(`${alpha.getTextContent()} \\nd Lord\\nd* end`);
      }),
    );
    const note = JSON.stringify(usjOf(editor));
    expect(note).toContain('"marker":"nd"');
    expect(note).toContain(`"${NBSP}",{"type":"char","marker":"fq"`);
  });
});
