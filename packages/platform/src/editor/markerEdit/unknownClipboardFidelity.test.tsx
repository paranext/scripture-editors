/**
 * Copy→paste fidelity for every opaque construct the editor carries as an `UnknownNode` — figure,
 * sidebar, periph, ref — across the three clipboard payload shapes a real Ctrl+C/Ctrl+V produces,
 * plus the table kinds, which are their own dedicated `ImmutableTable*` nodes rather than
 * `UnknownNode`.
 *
 * The shape under test is the one `optbreakClipboardFidelity.test.tsx` established: a payload
 * carrying `application/x-lexical-editor` takes Lexical's own same-namespace fast path, which
 * rebuilds nodes from the JSON generator's output rather than re-tokenizing the plain text. That
 * generator computes exclusion from `UnknownNode.excludeFromCopy`, and an excluded node is not
 * dropped — its children are HOISTED into the parent in its place. For a construct whose children
 * are the content-free display decorators `unknownDisplayParts` builds (`\fig `, `|src="…"`,
 * `\fig*`), that hoisting produced a convincing lie: the pasted document RENDERED the construct's
 * full literal USFM bytes as loose siblings while its exported USJ silently dropped the node and
 * every one of its attributes. A save at that point persisted the loss with no error and a screen
 * that still showed the bytes.
 *
 * These pins mount the full `Editor` rather than `MarkerEditPlugin` alone: the plugins around the
 * engine take part in what a paste actually produces (see `figurePasteFidelity.test.tsx`), so a
 * narrower harness can report a paste clean that a user's does not.
 *
 * Where a kind cannot round-trip, the LOSS is asserted rather than the fidelity, so the sweep never
 * hides one — each such pin says in its own name what is lost and why.
 */

import { copyEvent, pasteEvent } from "./markerEdit.test-helpers";
import { mountStandardViewEditor } from "../settledGetUsj.test-helpers";
import { corpusFixtures } from "../adaptors/corpus/corpus-data";
import { MarkerObject, Usj, usxStringToUsj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createPoint,
  $createRangeSelection,
  $getRoot,
  $setSelection,
  COPY_COMMAND,
  PASTE_COMMAND,
  RootNode,
} from "lexical";
import {
  $isChapterNode,
  $isImmutableChapterNode,
  $isParaNode,
  $isUnknownNode,
  ParaNode,
  UnknownNode,
} from "shared";

// jsdom implements neither `ClipboardEvent` nor `DragEvent`; Lexical's own rich-paste fallback —
// the path a lexical-flavor payload takes once the Standard-view handler declines — duck-types
// against both (`objectKlassEquals`). Same stub as the sibling clipboard suites.
const globalStubs: { DragEvent?: unknown; ClipboardEvent?: unknown } = globalThis;
if (typeof globalStubs.DragEvent === "undefined")
  globalStubs.DragEvent = class DragEvent extends Event {};
if (typeof globalStubs.ClipboardEvent === "undefined")
  globalStubs.ClipboardEvent = class ClipboardEvent extends Event {};

const PLAIN = "text/plain";
const HTML = "text/html";
const LEXICAL = "application/x-lexical-editor";

interface Payload {
  [mimeType: string]: string;
}

function corpusUsj(name: string): Usj {
  const fixture = corpusFixtures.find((entry) => entry.name === name);
  if (!fixture) throw new Error(`no corpus fixture named ${name}`);
  return usxStringToUsj(fixture.usx);
}

/** The index of the first top-level node after the document's header — everything past the LAST
 * chapter marker, or past the book node for header-only front matter (`periph`) that has no
 * chapter at all. This is what Standard view actually copies out of: a user selects inside an open
 * chapter, never the header itself. */
function $contentStartIndex(root: RootNode): number {
  const children = root.getChildren();
  let headerEnd = 0;
  children.forEach((child, index) => {
    if ($isChapterNode(child) || $isImmutableChapterNode(child)) headerEnd = index + 1;
  });
  // No chapter: the book node alone is the header.
  return headerEnd === 0 ? 1 : headerEnd;
}

/** The fixture's header, byte-identical, plus one EMPTY `\p` paragraph as the paste host — the
 * same shape `clipboardCorpusRoundTrip.test.tsx` seeds its target editor with, so the paste only
 * has to reproduce the content (it can neither carry nor rebuild `\c`/`\id`; paste normalization
 * strips them). */
function headerSkeletonUsj(usj: Usj): Usj {
  let headerEnd = 0;
  usj.content.forEach((item, index) => {
    if (typeof item !== "string" && (item.type === "chapter" || item.type === "book"))
      headerEnd = index + 1;
  });
  const emptyHost: MarkerObject = { type: "para", marker: "p", content: [] } as MarkerObject;
  return { ...usj, content: [...usj.content.slice(0, headerEnd), emptyHost] };
}

async function settle(): Promise<void> {
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
}

/** Copies the fixture's content (header excluded) out of a real Standard-view editor and hands
 * back all three carriers the copy wrote, so each paste shape below replays the editor's OWN bytes
 * rather than a hand-written approximation of them. */
async function copyContentPayload(usj: Usj): Promise<Payload> {
  const { lexical } = await mountStandardViewEditor(usj);
  await act(async () =>
    lexical.update(() => {
      const root = $getRoot();
      root.select($contentStartIndex(root), root.getChildrenSize());
    }),
  );
  const { event, getData } = copyEvent();
  await act(async () => lexical.dispatchCommand(COPY_COMMAND, event));
  return { [PLAIN]: getData(PLAIN), [HTML]: getData(HTML), [LEXICAL]: getData(LEXICAL) };
}

/** Pastes `payload` into a fresh header-only editor and returns the USJ a host would save. */
async function pasteIntoFreshHost(usj: Usj, payload: Payload): Promise<Usj | undefined> {
  const { ref, lexical } = await mountStandardViewEditor(headerSkeletonUsj(usj));
  await act(async () =>
    lexical.update(() => {
      $getRoot().getLastChild()?.selectEnd();
      lexical.dispatchCommand(PASTE_COMMAND, pasteEvent(payload).event);
    }),
  );
  await settle();
  // A pasted literal that pends (a marker completed under the caret) settles only once the caret
  // DEPARTS the paragraph it landed in; the lexical-flavor path inserts an already-structural tree
  // and has nothing pending, so this step is a harmless no-op there.
  await act(async () =>
    lexical.update(() => {
      $getRoot().getLastChild()?.selectEnd();
    }),
  );
  await settle();
  return ref.current?.getUsj();
}

/** The three real-world clipboard shapes: a plain-text source, the async Ctrl+V read (which drops
 * the private flavor), and the synchronous/native copy that keeps it. */
async function pastedUsjFor(usj: Usj, shape: "plain" | "plain+html" | "full"): Promise<Usj> {
  const payload = await copyContentPayload(usj);
  const shaped: Payload =
    shape === "plain"
      ? { [PLAIN]: payload[PLAIN] }
      : shape === "plain+html"
        ? { [PLAIN]: payload[PLAIN], [HTML]: payload[HTML] }
        : payload;
  if (shape === "full" && !payload[LEXICAL])
    throw new Error("copy wrote no application/x-lexical-editor payload");
  const pasted = await pasteIntoFreshHost(usj, shaped);
  if (!pasted) throw new Error("editor produced no USJ");
  // A TEXT-carrier paste lands its bytes INSIDE the empty host paragraph the skeleton seeded, and
  // each pasted line carries its own paragraph marker — so the host survives as an empty paragraph
  // ahead of the pasted content, exactly as it does in Paratext 9. The host is the harness's, not
  // the document's, so it is asserted and stripped here rather than expected to be consumed.
  // Lexical's own node-tree fast path (the `full` shape) replaces the selection with real nodes
  // instead of re-tokenizing text, and consumes the host on the way — hence the shape split.
  return shape === "full" ? pasted : withoutPasteHost(pasted, usj);
}

/** Drop the empty `\p` insertion host {@link headerSkeletonUsj} seeded, failing loudly if what sits
 * at its index is anything else — so a genuine stray paragraph can never pass as the host. */
function withoutPasteHost(pasted: Usj, source: Usj): Usj {
  let headerEnd = 0;
  source.content.forEach((item, index) => {
    if (typeof item !== "string" && (item.type === "chapter" || item.type === "book"))
      headerEnd = index + 1;
  });
  const host = pasted.content[headerEnd];
  if (
    typeof host === "string" ||
    host?.type !== "para" ||
    host.marker !== "p" ||
    (host.content?.length ?? 0) > 0
  )
    throw new Error(
      `expected the empty \\p paste host at content[${headerEnd}], found ${JSON.stringify(host)}`,
    );
  return {
    ...pasted,
    content: [...pasted.content.slice(0, headerEnd), ...pasted.content.slice(headerEnd + 1)],
  };
}

/** Every object of `type` anywhere in `usj`, at any depth. */
function objectsOfType(usj: Usj, type: string): MarkerObject[] {
  const found: MarkerObject[] = [];
  const walk = (items: MarkerObject["content"]) =>
    items?.forEach((item) => {
      if (typeof item === "string") return;
      if (item.type === type) found.push(item);
      walk(item.content);
    });
  walk(usj.content);
  return found;
}

/** The document's first paragraph PAST the header — the one a user would be selecting in. */
function $firstContentPara(): ParaNode {
  const root = $getRoot();
  const para = root.getChildren().slice($contentStartIndex(root)).find($isParaNode);
  if (!para) throw new Error("no content paragraph past the header");
  return para;
}

/** The first `UnknownNode` of `tag` in that paragraph. */
function $constructOfTag(tag: string): UnknownNode {
  const construct = $firstContentPara()
    .getChildren()
    .filter($isUnknownNode)
    .find((node) => node.getTag() === tag);
  if (!construct) throw new Error(`no ${tag} UnknownNode in the first content paragraph`);
  return construct;
}

/** Copies a selection running from the paragraph's content start to an ELEMENT-type point ON the
 * `tag` construct at `offset`, and hands back what both carriers wrote. `offset` 0 TOUCHES the
 * wrapper without covering any of its children; `offset` 1 covers the first one. */
async function copyToConstructBoundary(usj: Usj, tag: string, offset: number): Promise<Payload> {
  const { lexical } = await mountStandardViewEditor(usj);
  await act(async () =>
    lexical.update(() => {
      const para = $firstContentPara();
      const construct = $constructOfTag(tag);
      const selection = $createRangeSelection();
      selection.anchor = $createPoint(para.getKey(), 2, "element"); // past the para's own glyph
      selection.focus = $createPoint(construct.getKey(), offset, "element");
      $setSelection(selection);
    }),
  );
  const { event, getData } = copyEvent();
  await act(async () => lexical.dispatchCommand(COPY_COMMAND, event));
  return { [PLAIN]: getData(PLAIN), [HTML]: getData(HTML), [LEXICAL]: getData(LEXICAL) };
}

const SHAPES = ["plain", "plain+html", "full"] as const;

describe("figure (UnknownNode) copy→paste across all three payload shapes", () => {
  const usj = corpusUsj("figure (USFM 3 attributes)");
  SHAPES.forEach((shape) => {
    it(`${shape} payload round-trips the figure, its caption, and every attribute`, async () => {
      expect(await pastedUsjFor(usj, shape)).toEqual(usj);
    });
  });
});

describe("sidebar (UnknownNode) copy→paste across all three payload shapes", () => {
  const usj = corpusUsj("sidebar (esb)");
  SHAPES.forEach((shape) => {
    it(`${shape} payload round-trips the sidebar whole — its category attribute and nested paragraph included`, async () => {
      expect(await pastedUsjFor(usj, shape)).toEqual(usj);
    });
  });
});

describe("periph (UnknownNode) copy→paste across all three payload shapes", () => {
  const usj = corpusUsj("periph");
  SHAPES.forEach((shape) => {
    // Compared construct-to-construct rather than document-to-document: `periph` is book-level
    // front matter with no chapter, so this sweep's "header plus one empty `\\p` host" target
    // leaves the pasted block nested inside that host paragraph. Where the block LANDS is generic
    // Lexical insertion, not construct fidelity; what these pins are about is that nothing inside
    // the construct was lost on the way.
    it(`${shape} payload round-trips the periph construct whole — its id/alt attributes and nested paragraph included`, async () => {
      const pasted = await pastedUsjFor(usj, shape);
      expect(objectsOfType(pasted, "periph")).toEqual(objectsOfType(usj, "periph"));
    });
  });

  it("loses the division's content if the copy is laid out line-per-marker instead of on one line", async () => {
    // Why the one-line copy rule (`$startsBlockLine`, `whitespaceDisplay.plugin.utils.ts`) has to
    // cover a peripheral division too, measured rather than argued. A `\periph` line and the
    // blocks it contains are separate USFM lines the way a writer emits them, and a paste replays
    // every line break as a paragraph split — after which Tier 2 re-tokenizes each paragraph on
    // its own and no single pass ever sees the division together with its content. The tokenizer
    // reads both spellings identically (`usfmFragmentToUsj.test.ts`); it is the paste's line
    // splitting, not the byte form, that decides whether the content can be reassembled.
    const payload = await copyContentPayload(usj);
    const lineBroken = payload[PLAIN].replace("\\mt1", "\n\\mt1");
    const pasted = await pasteIntoFreshHost(usj, { [PLAIN]: lineBroken });
    if (!pasted) throw new Error("editor produced no USJ");
    expect(objectsOfType(pasted, "periph")).toEqual([
      { type: "periph", alt: "Title Page", id: "title" },
    ]);
    expect(objectsOfType(pasted, "para").map((item) => item.marker)).toContain("mt1");
  });
});

describe("ref (UnknownNode) copy→paste across all three payload shapes", () => {
  const usj = corpusUsj("cross-reference ref target");
  it("full payload (lexical flavor) round-trips the ref wrapper and its loc attribute", async () => {
    expect(await pastedUsjFor(usj, "full")).toEqual(usj);
  });

  (["plain", "plain+html"] as const).forEach((shape) => {
    // Inherent to the construct, not to the clipboard: USJ invented the `<ref>` container and USFM
    // never carried it, so a plain-text carrier has no bytes anywhere that mark the wrapper's
    // extent. A raw USFM export of the same document has the identical gap.
    it(`${shape} payload loses the ref wrapper — USFM has no bytes for it, so only its child text survives`, async () => {
      const pasted = await pastedUsjFor(usj, shape);
      expect(objectsOfType(pasted, "ref")).toEqual([]);
      expect(JSON.stringify(pasted)).toContain("Genesis 1:1");
    });
  });
});

describe("a construct's own boundary (a selection that reaches into one)", () => {
  // A boundary ON a construct — an element point at one of its child offsets, or the text point
  // Lexical normalizes that into — is a selection reaching INTO the construct, and a copy whose
  // selection reaches into one writes the two TEXT flavors only ({@link
  // $getStandardViewClipboardData}, whitespaceDisplay.plugin.utils.ts). The construct cannot be
  // carried whole from there, and `$sliceSelectedTextNodeContent` refuses to slice the token-mode
  // text it is built from, so an internal flavor would carry MORE than was selected — a whole
  // second construct, attributes and all (`partialConstructClipboard.test.tsx`). The text carriers
  // are exactly the selected bytes, so the two carriers agree at every boundary below by there
  // being only one kind of carrier.
  //
  // `UnknownNode.isSelected` is what makes the SAME boundary agree wherever the internal flavor IS
  // still written — a selection whose ends are both outside — and it is written once for every
  // kind, so it is pinned on more than the optbreak that surfaced it
  // (`optbreakClipboardFidelity.test.tsx`): these constructs have real attributes and real content,
  // which an optbreak does not.
  //
  // Every assertion below reads the construct's own CONTENT BYTES, never just its tag. A tag-only
  // assertion cannot see the shape that matters here — a copy that dropped the wrapper while
  // HOISTING its characters out has no tag in it and its content bytes are all still there.
  const FIGURE = { tag: "figure", fixture: "figure (USFM 3 attributes)" };
  const REF = { tag: "ref", fixture: "cross-reference ref target" };
  const FIGURE_BYTES = "At once they left their nets.";
  const REF_BYTES = "Genesis 1:1";

  it("a selection ending exactly at a DISPLAY-BYTE-LED construct's start excludes it from every carrier", async () => {
    // A figure's first child is the `\fig ` display decorator, so the element-type focus point
    // reaches none of the figure's children and `text/plain` carries nothing of it.
    const payload = await copyToConstructBoundary(corpusUsj(FIGURE.fixture), FIGURE.tag, 0);
    expect(payload[PLAIN]).not.toContain(FIGURE_BYTES);
    expect(payload[PLAIN]).not.toContain("\\fig");
    expect(payload[LEXICAL]).toBe("");
  });

  it("a selection ending exactly at a TEXT-LED construct's start excludes it from every carrier too", async () => {
    // A `ref` has no display bytes of its own (USJ invented the container), so its first child is a
    // real TextNode and Lexical normalizes the same focus point into a TEXT point at that child's
    // offset 0. The child is then in `getNodes()` contributing zero characters, so `text/plain`
    // correctly emits none of it — and the boundary lands inside the construct, so there is no
    // internal flavor to disagree with that.
    //
    // Writing one would not be a harmless superset. A token-mode child is never sliced, so the
    // zero-width child keeps its full text: the copy would carry `Genesis 1:1` for a selection that
    // covers none of it.
    const payload = await copyToConstructBoundary(corpusUsj(REF.fixture), REF.tag, 0);
    expect(payload[PLAIN]).not.toContain(REF_BYTES);
    expect(payload[LEXICAL]).toBe("");
  });

  it("extending that selection over a DISPLAY-BYTE-LED construct's first child puts its opening bytes in text/plain, still with no internal flavor", async () => {
    // The `\fig ` glyph is now inside the selection and the caption is not, so the text carrier
    // spells an unclosed `\fig` — which is exactly what was selected, and what Tier 2 re-tokenizes
    // on a paste back.
    const payload = await copyToConstructBoundary(corpusUsj(FIGURE.fixture), FIGURE.tag, 1);
    expect(payload[PLAIN]).toContain("\\fig");
    expect(payload[PLAIN]).not.toContain(FIGURE_BYTES);
    expect(payload[LEXICAL]).toBe("");
  });

  it("LOSS: a ref selected up to its own end keeps its text but loses the wrapper and its loc attribute, because the boundary is inside it", async () => {
    // A `ref` holds exactly one child, so this boundary covers its content WHOLE — and the copy
    // still carries text only, because the rule keys on where the selection's ENDS are, not on how
    // much of the construct they happen to enclose. USFM has no bytes for the `ref` container (see
    // the `ref` describe above), so the wrapper and `loc` do not survive a text carrier.
    //
    // A selection whose ends are both OUTSIDE the ref keeps the internal flavor and round-trips it
    // whole, and that is the shape a drag produces: the construct renders `contentEditable=false`,
    // so the browser resolves a drag ending "at the ref" to a point beside it rather than inside.
    const payload = await copyToConstructBoundary(corpusUsj(REF.fixture), REF.tag, 1);
    expect(payload[PLAIN]).toContain(REF_BYTES);
    expect(payload[PLAIN]).not.toContain("GEN 1:1");
    expect(payload[LEXICAL]).toBe("");
  });
});

describe("table (ImmutableTable* nodes, not UnknownNode) copy→paste across all three payload shapes", () => {
  const usj = corpusUsj("table with header and cells");
  SHAPES.forEach((shape) => {
    it(`${shape} payload round-trips the table whole — rows, cells, their markers and derived alignment`, async () => {
      expect(await pastedUsjFor(usj, shape)).toEqual(usj);
    });
  });
});
