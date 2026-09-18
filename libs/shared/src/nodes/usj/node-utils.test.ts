import { $createImmutableTypedTextNode } from "../features/ImmutableTypedTextNode.js";
import { $createMarkerNode } from "../features/MarkerNode.js";
import { $createTypedMarkNode, TypedMarkNode } from "../features/TypedMarkNode.js";
import { $createCursorPlaceholderNode } from "../../plugins/CursorHandler/index.js";
import { textTypeState } from "../collab/delta.state.js";
import { $createAttributeRunNode } from "./AttributeRunNode.js";
import { $createChapterNode, ChapterNode } from "./ChapterNode.js";
import { $createCharNode, $isCharNode, CharNode } from "./CharNode.js";
import { $createImmutableChapterNode } from "./ImmutableChapterNode.js";
import { usjBaseNodes } from "./index.js";
import { $createNoteNode } from "./NoteNode.js";
import {
  $getElementOffsetFromLogicalIndex,
  $getLogicalContentItems,
  $getLogicalIndexOfChild,
  $getLogicalParent,
  $getLogicalPointFromElementPoint,
  $getLogicalTextLocation,
  $getTextNodeAtLogicalOffset,
  $isSomeChapterNode,
  $setCharNodeMarker,
  $shouldIgnoreNodeForContentIndexes,
  closingMarkerText,
  getEditableCallerText,
  getNextVerse,
  getUnknownAttributes,
  isSelectionStartNodeExpectedError,
  isValidNumberedMarker,
  isVerseInRange,
  LogicalContentItem,
  LogicalTextItem,
  openingMarkerText,
  parseNumberFromMarkerText,
  parseVerseRange,
  removeNodeAndAfter,
  removeNodesBeforeNode,
} from "./node.utils.js";
import { IMMUTABLE_NOTE_CALLER_NODE_TYPE, NBSP } from "./node-constants.js";
import { $createParaNode } from "./ParaNode.js";
import { createBasicTestEnvironment } from "./test.utils.js";
import { $createVerseNode, VerseNode } from "./VerseNode.js";
import { MarkerObject } from "@eten-tech-foundation/scripture-utilities";
import {
  $getNodeByKey,
  $getRoot,
  $setState,
  DecoratorNode,
  NodeKey,
  $createTextNode,
  $isElementNode,
  TextNode,
} from "lexical";

/**
 * Stands in for shared-react's `ImmutableNoteCallerNode`, the decorator a collapsed note renders
 * its caller with: `libs/shared` may not import that class, and the logical model recognizes the
 * node by its registered type name, so anything registered under that name is the same node as
 * far as the model is concerned.
 */
class NoteCallerStubNode extends DecoratorNode<null> {
  static override getType(): string {
    return IMMUTABLE_NOTE_CALLER_NODE_TYPE;
  }

  static override clone(node: NoteCallerStubNode): NoteCallerStubNode {
    return new NoteCallerStubNode(node.__key);
  }

  static override importJSON(): NoteCallerStubNode {
    return new NoteCallerStubNode();
  }

  override createDOM(): HTMLElement {
    return document.createElement("span");
  }

  override updateDOM(): false {
    return false;
  }

  override decorate(): null {
    return null;
  }

  override isInline(): true {
    return true;
  }
}

const nodes = [TypedMarkNode, NoteCallerStubNode, ...usjBaseNodes];

describe("Editor Node Utilities", () => {
  describe("isValidNumberedMarker()", () => {
    it("should not throw", async () => {
      expect(() => isValidNumberedMarker(undefined as unknown as string, [""])).not.toThrow();
    });

    it("should identify a valid numbered marker", async () => {
      expect(isValidNumberedMarker("pi1", ["pi"])).toBe(true);
    });

    it("should not identify an invalid numbered marker", async () => {
      expect(isValidNumberedMarker("pi1", ["pa"])).toBe(false);
    });

    it("should not identify a non-numbered marker", async () => {
      expect(isValidNumberedMarker("pi", ["pi"])).toBe(false);
    });
  });

  describe("removeNodeAndAfter()", () => {
    let c1NodeKey: NodeKey;
    let c2NodeKey: NodeKey;
    let p1NodeKey: NodeKey;

    it("should not remove nodes after when no node to prune", () => {
      const { editor } = createBasicTestEnvironment();
      editor.update(
        () => {
          const root = $getRoot();
          const c1 = $createImmutableChapterNode("1");
          const p1 = $createParaNode();
          const c2 = $createImmutableChapterNode("2");
          const p2 = $createParaNode();
          root.append(c1, p1, c2, p2);
        },
        { discrete: true },
      );
      editor.getEditorState().read(() => {
        const children = $getRoot().getChildren();

        removeNodeAndAfter(children, undefined);

        expect(children).toBeDefined();
        expect(children.length).toBe(4);
      });
    });

    it("should remove nodes after", () => {
      const { editor } = createBasicTestEnvironment();
      editor.update(
        () => {
          const root = $getRoot();
          const c1 = $createImmutableChapterNode("1");
          const p1 = $createParaNode();
          const c2 = $createImmutableChapterNode("2");
          const p2 = $createParaNode();
          root.append(c1, p1, c2, p2);
          c1NodeKey = c1.getKey();
          c2NodeKey = c2.getKey();
          p1NodeKey = p1.getKey();
        },
        { discrete: true },
      );
      editor.getEditorState().read(() => {
        const children = $getRoot().getChildren();
        const c2 = $getNodeByKey(c2NodeKey) ?? undefined;
        if (!$isSomeChapterNode(c2)) throw new Error("chapter should be defined");

        removeNodeAndAfter(children, c2);

        expect(children).toBeDefined();
        expect(children.length).toBe(2);
        expect(children[0].getKey()).toBe(c1NodeKey);
        expect(children[1].getKey()).toBe(p1NodeKey);
      });
    });
  });

  describe("removeNodesBeforeNode()", () => {
    let c1NodeKey: NodeKey;
    let p1NodeKey: NodeKey;

    it("should not remove nodes before when no node to prune", () => {
      const { editor } = createBasicTestEnvironment();
      editor.update(
        () => {
          const root = $getRoot();
          const c1 = $createImmutableChapterNode("1");
          const p1 = $createParaNode();
          root.append(c1, p1);
          c1NodeKey = c1.getKey();
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const updatedChildren = removeNodesBeforeNode($getRoot().getChildren(), undefined);

        expect(updatedChildren).toBeDefined();
        expect(updatedChildren.length).toBe(2);
        expect(updatedChildren[0].getKey()).toBe(c1NodeKey);
      });
    });

    it("should remove the chapter", () => {
      const { editor } = createBasicTestEnvironment();
      editor.update(
        () => {
          const root = $getRoot();
          const c1 = $createImmutableChapterNode("1");
          const p1 = $createParaNode();
          root.append(c1, p1);
          c1NodeKey = c1.getKey();
          p1NodeKey = p1.getKey();
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const c1 = $getNodeByKey(c1NodeKey) ?? undefined;

        const updatedChildren = removeNodesBeforeNode($getRoot().getChildren(), c1);

        expect(updatedChildren).toBeDefined();
        expect(updatedChildren.length).toBe(1);
        expect(updatedChildren[0].getKey()).toBe(p1NodeKey);
      });
    });

    it("should remove both chapters", () => {
      const { editor } = createBasicTestEnvironment();
      editor.update(
        () => {
          const root = $getRoot();
          const c0 = $createImmutableChapterNode("0");
          const c1 = $createImmutableChapterNode("1");
          const p1 = $createParaNode();
          root.append(c0, c1, p1);
          c1NodeKey = c1.getKey();
          p1NodeKey = p1.getKey();
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const c1 = $getNodeByKey(c1NodeKey) ?? undefined;

        const updatedChildren = removeNodesBeforeNode($getRoot().getChildren(), c1);

        expect(updatedChildren).toBeDefined();
        expect(updatedChildren.length).toBe(1);
        expect(updatedChildren[0].getKey()).toBe(p1NodeKey);
      });
    });
  });

  describe("parseNumberFromMarkerText()", () => {
    it("should return the default if not found", () => {
      const marker = "";
      const text = "";
      const defaultNumber = "0";

      const number = parseNumberFromMarkerText(marker, text, defaultNumber);

      expect(number).toEqual("0");
    });

    it("should return the number if found", () => {
      const marker = "c";
      const text = "\\c 1 ";
      const defaultNumber = "0";

      const number = parseNumberFromMarkerText(marker, text, defaultNumber);

      expect(number).toEqual("1");
    });

    it("preserves verse bridges", () => {
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}1-2 `, "9")).toBe("1-2");
    });

    it("preserves verse segments", () => {
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}5a `, "9")).toBe("5a");
    });

    it("preserves segmented bridges", () => {
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}1a-2b `, "9")).toBe("1a-2b");
    });

    it("preserves comma-separated verse lists", () => {
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}1,3 `, "9")).toBe("1,3");
    });

    it("still parses plain integers with a regular space separator", () => {
      expect(parseNumberFromMarkerText("v", "\\v 12 ", "9")).toBe("12");
    });

    it("falls back to the default when no number is present", () => {
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}`, "9")).toBe("9");
    });

    it("preserves multi-letter segments instead of truncating", () => {
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}5abc `, "9")).toBe("5abc");
    });

    it("keeps the trailing separator of a half-typed bridge", () => {
      // `\v 5-` is a byte the user typed and the node already stores. Dropping it here would
      // save a file the screen never showed.
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}5- `, "9")).toBe("5-");
    });

    it("keeps the trailing separator of a half-typed verse list", () => {
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}5, `, "9")).toBe("5,");
    });

    it("keeps the trailing separator of a half-typed segmented bridge", () => {
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}1a- `, "9")).toBe("1a-");
    });

    it("keeps the trailing separator on a chapter number too", () => {
      expect(parseNumberFromMarkerText("c", "\\c 3- ", "9")).toBe("3-");
    });

    it.each([
      ["a doubled separator", "5--"],
      ["a separator followed by letters", "5-Da"],
      ["mixed separators", "5-,6"],
      ["a stray asterisk", "5*"],
      ["a bare separator", "-"],
    ])("keeps what the user typed: %s", (_label, typed) => {
      // The number is the whole word, valid or not. These are malformed, and every one of them is
      // on screen and stored on the node — so a grammar that recognized only well-formed numbers
      // would save a document the editor is not showing. Preserving them is what lets the user
      // see and correct their own typo instead of watching a byte disappear at save time.
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}${typed} `, "9")).toBe(typed);
    });

    it("still ends the number at the first character that is not part of it", () => {
      // The word scan ends at the tokenizer's own name-scan terminators, which is what keeps it
      // from swallowing content: whitespace demotes what follows to body text, and so does a
      // backslash. The separator run between them never joins the two.
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}7 5 `, "9")).toBe("7");
      expect(parseNumberFromMarkerText("v", `\\v${NBSP}2\\ Da`, "9")).toBe("2");
    });
  });

  describe("openingMarkerText() / closingMarkerText()", () => {
    it("should render bare markers when not nested", () => {
      expect(openingMarkerText("w")).toBe("\\w");
      expect(closingMarkerText("w")).toBe("\\w*");
    });

    it("should carry the '+' prefix when nested", () => {
      // A nested char span's marker carries the `+` (`\+w …\+w*`): in USFM the `+` is what makes
      // a char marker nest inside the enclosing span instead of closing it, so the glyph text
      // must show it for a re-tokenization of the visible text to reproduce the same nesting.
      expect(openingMarkerText("w", true)).toBe("\\+w");
      expect(closingMarkerText("w", true)).toBe("\\+w*");
    });
  });

  describe("getUnknownAttributes()", () => {
    it("should return all unknown properties", () => {
      const unknownAttributes = getUnknownAttributes({
        type: "",
        marker: "",
        unknown: "unknown",
      } as MarkerObject);

      expect(unknownAttributes).toBeDefined();
      expect(unknownAttributes).toEqual({ unknown: "unknown" });
    });

    it("should return undefined when all properties are known", () => {
      const unknownAttributes = getUnknownAttributes({ type: "", marker: "" });

      expect(unknownAttributes).toBeUndefined();
    });

    it("should return properties for other types", () => {
      const unknownAttributes = getUnknownAttributes({ style: "style", unknown: "unknown" }, [
        "style",
      ]);

      expect(unknownAttributes).toEqual({ unknown: "unknown" });
    });

    it("should return unknown properties if the types don't match", () => {
      const unknownAttributes = getUnknownAttributes({
        marker: "marker",
        style: "style",
        unknown: "unknown",
      });

      expect(unknownAttributes).toEqual({ style: "style", unknown: "unknown" });
    });
  });

  describe("getNextVerse()", () => {
    it("should increment the verse", () => {
      const nextVerse = getNextVerse(1, undefined);

      expect(nextVerse).toBe("2");
    });

    it("should increment the verse when empty", () => {
      const nextVerse = getNextVerse(1, "");

      expect(nextVerse).toBe("2");
    });

    it("should increment the verse when zero", () => {
      const nextVerse = getNextVerse(0, "0");

      expect(nextVerse).toBe("1");
    });

    it("should increment the end verse range", () => {
      const nextVerse = getNextVerse(1, "1-2");

      expect(nextVerse).toBe("3");
    });

    it("should increment the end verse range with more than two verses", () => {
      const nextVerse = getNextVerse(1, "1-3");

      expect(nextVerse).toBe("4");
    });

    it("should increment an open verse range", () => {
      const nextVerse = getNextVerse(1, "1-");

      expect(nextVerse).toBe("2");
    });

    it("should increment a verse range with segments", () => {
      const nextVerse = getNextVerse(1, "1a-2b");

      expect(nextVerse).toBe("3");
    });

    it("should increment a verse range with spaces", () => {
      const nextVerse = getNextVerse(1, " 1 - 2 ");

      expect(nextVerse).toBe("3");
    });

    it("should increment a verse segment", () => {
      const nextVerse = getNextVerse(1, "1a");

      expect(nextVerse).toBe("1b");
    });

    it("should increment a verse segment from 'z'", () => {
      const nextVerse = getNextVerse(1, "1z");

      expect(nextVerse).toBe("2");
    });

    it("should increment a verse segment from 'Z'", () => {
      const nextVerse = getNextVerse(1, "1Z");

      expect(nextVerse).toBe("2");
    });
  });

  describe("isVerseInRange()", () => {
    it("should be in range", () => {
      expect(isVerseInRange(1, "1")).toBe(true);
      expect(isVerseInRange(1, "1a")).toBe(true);

      expect(isVerseInRange(1, "1-2")).toBe(true);
      expect(isVerseInRange(2, "1-2")).toBe(true);

      expect(isVerseInRange(1, "1a-2b")).toBe(true);
      expect(isVerseInRange(2, "1a-2b")).toBe(true);

      expect(isVerseInRange(2, "2-4")).toBe(true);
      expect(isVerseInRange(3, "2-4")).toBe(true);
      expect(isVerseInRange(4, "2-4")).toBe(true);

      expect(isVerseInRange(1, "1-")).toBe(true);
      expect(isVerseInRange(3, "1-")).toBe(true);

      expect(isVerseInRange(3, "-3")).toBe(true);
      expect(isVerseInRange(1, "-3")).toBe(true);
      expect(isVerseInRange(0, "-0")).toBe(true);
    });

    it("should not be in range", () => {
      expect(isVerseInRange(0, "1")).toBe(false);
      expect(isVerseInRange(2, "1")).toBe(false);

      expect(isVerseInRange(0, "1-2")).toBe(false);
      expect(isVerseInRange(3, "1-2")).toBe(false);

      expect(isVerseInRange(0, "1a-2b")).toBe(false);
      expect(isVerseInRange(3, "1a-2b")).toBe(false);

      expect(isVerseInRange(1, "2-4")).toBe(false);
      expect(isVerseInRange(5, "2-4")).toBe(false);

      expect(isVerseInRange(0, "3-")).toBe(false);
      expect(isVerseInRange(1, "3-")).toBe(false);
      expect(isVerseInRange(2, "3-")).toBe(false);

      expect(isVerseInRange(4, "-3")).toBe(false);
      expect(isVerseInRange(5, "-3")).toBe(false);
      expect(isVerseInRange(1, "-0")).toBe(false);
    });

    it("should throw", () => {
      expect(() => isVerseInRange(0, "1-2-3")).toThrow();
      expect(() => isVerseInRange(0, "2-1")).toThrow();
    });
  });

  describe("parseVerseRange()", () => {
    it("parses a single verse number", () => {
      expect(parseVerseRange("5")).toEqual({ start: 5, end: 5 });
    });

    it("parses a combined range", () => {
      expect(parseVerseRange("14-15")).toEqual({ start: 14, end: 15 });
    });

    it("strips partial-verse letters at the range end", () => {
      expect(parseVerseRange("1-3a")).toEqual({ start: 1, end: 3 });
    });

    it("strips a partial-verse letter on a single verse", () => {
      expect(parseVerseRange("3a")).toEqual({ start: 3, end: 3 });
    });

    it("uses start as end for a single-segment marker", () => {
      expect(parseVerseRange("12")).toEqual({ start: 12, end: 12 });
    });

    // Verse numbers come from imported USFM, so a malformed one must be reportable rather than
    // throwing the way `isVerseInRange` does.
    it("returns NaN bounds for a non-numeric marker", () => {
      expect(parseVerseRange("abc")).toEqual({ start: NaN, end: NaN });
    });

    it("returns a NaN bound when only one end is non-numeric", () => {
      expect(parseVerseRange("abc-5")).toEqual({ start: NaN, end: 5 });
      expect(parseVerseRange("5-abc")).toEqual({ start: 5, end: NaN });
    });

    // Imported USFM can carry a reversed bridge. It parses as written rather than being reordered,
    // so a caller can recognize it - `VerseBlockNode` withholds the range attributes for one.
    it("parses a reversed range as written", () => {
      expect(parseVerseRange("3-1")).toEqual({ start: 3, end: 1 });
    });
  });

  describe("isSelectionStartNodeExpectedError()", () => {
    it("identifies Lexical DecoratorNode errors", () => {
      expect(
        isSelectionStartNodeExpectedError(
          new Error("$caretFromPoint: Node does not inherit from ElementNode"),
        ),
      ).toBe(true);
      expect(
        isSelectionStartNodeExpectedError(
          new Error("$caretFromPoint: Node does not inherit from TextNode"),
        ),
      ).toBe(true);
      expect(isSelectionStartNodeExpectedError(new Error("some other error"))).toBe(false);
    });
  });

  describe("$setCharNodeMarker()", () => {
    let charNode!: CharNode;

    it("retargets synthesized MarkerNode children in markerMode 'editable'", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        // Mirrors the USJ editor adaptor's createChar under markerMode "editable": a MarkerNode
        // opening, each text child prefixed with NBSP, then a closing MarkerNode.
        charNode = $createCharNode("nd");
        $getRoot().append(
          $createParaNode("p").append(
            charNode.append(
              $createMarkerNode("nd"),
              $createTextNode(NBSP + "Lord"),
              $createMarkerNode("nd", "closing"),
            ),
          ),
        );
      });

      editor.update(
        () => {
          $setCharNodeMarker(charNode, "bd");
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        expect(charNode.getMarker()).toBe("bd");
        const text = charNode.getTextContent();
        // The new marker is rendered, and no stale \nd or \nd* survives.
        expect(text).toContain(openingMarkerText("bd"));
        expect(text).toContain(closingMarkerText("bd"));
        expect(text).not.toContain(openingMarkerText("nd"));
        expect(text).not.toContain(closingMarkerText("nd"));
        // The NBSP is presentation the adaptor added; this neither trims nor duplicates it.
        expect(text).toContain(NBSP + "Lord");
      });
    });

    it("retargets synthesized ImmutableTypedTextNode children in markerMode 'visible'", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        // Mirrors the USJ editor adaptor's createChar under markerMode "visible": immutable
        // typed-text markers on both sides and no NBSP prefix on the content.
        charNode = $createCharNode("nd");
        $getRoot().append(
          $createParaNode("p").append(
            charNode.append(
              $createImmutableTypedTextNode("marker", openingMarkerText("nd")),
              $createTextNode("Lord"),
              $createImmutableTypedTextNode("marker", closingMarkerText("nd")),
            ),
          ),
        );
      });

      editor.update(
        () => {
          $setCharNodeMarker(charNode, "bd");
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        expect(charNode.getMarker()).toBe("bd");
        const text = charNode.getTextContent();
        expect(text).toContain(openingMarkerText("bd"));
        expect(text).toContain(closingMarkerText("bd"));
        expect(text).not.toContain(openingMarkerText("nd"));
        expect(text).not.toContain(closingMarkerText("nd"));
      });
    });

    it("retargets a NESTED span's glyphs, keeping the + on both", () => {
      // A nested span's glyphs read `\+nd` / `\+nd*`. Matching them against the non-nested
      // spelling found nothing, so both survived stale: the node's marker became `bd` while the
      // glyphs on screen — and the bytes saved to file — still said `nd`.
      const { editor } = createBasicTestEnvironment(nodes, () => {
        charNode = $createCharNode("nd");
        $getRoot().append(
          $createParaNode("p").append(
            charNode.append(
              $createImmutableTypedTextNode("marker", openingMarkerText("nd", true)),
              $createTextNode("Lord"),
              $createImmutableTypedTextNode("marker", closingMarkerText("nd", true)),
            ),
          ),
        );
      });

      editor.update(
        () => {
          $setCharNodeMarker(charNode, "bd");
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const text = charNode.getTextContent();
        expect(text).toContain(openingMarkerText("bd", true));
        expect(text).toContain(closingMarkerText("bd", true));
        expect(text).not.toContain(openingMarkerText("nd", true));
        expect(text).not.toContain(closingMarkerText("nd", true));
      });
    });

    it("matches marker children against the old marker, not the new one", () => {
      // Pins the ordering inside $setCharNodeMarker: the children are retargeted *before*
      // charNode.setMarker runs, so the match reads the old marker off the node. Reverse the two
      // calls and the read returns "bd", the \nd children match nothing, and they survive stale.
      // The decoy child below already carries the new marker's opening form, so it must be left
      // alone either way - it is the \nd children that tell the two orderings apart.
      const { editor } = createBasicTestEnvironment(nodes, () => {
        charNode = $createCharNode("nd");
        $getRoot().append(
          $createParaNode("p").append(
            charNode.append(
              $createImmutableTypedTextNode("marker", openingMarkerText("nd")),
              $createTextNode("Lord"),
              $createImmutableTypedTextNode("marker", openingMarkerText("bd")),
              $createTextNode("God"),
              $createImmutableTypedTextNode("marker", closingMarkerText("nd")),
            ),
          ),
        );
      });

      editor.update(
        () => {
          $setCharNodeMarker(charNode, "bd");
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const text = charNode.getTextContent();
        // Both old-marker children were matched and retargeted - nothing stale survives.
        expect(text).not.toContain(openingMarkerText("nd"));
        expect(text).not.toContain(closingMarkerText("nd"));
        expect(text).toContain(closingMarkerText("bd"));
        expect(text).toContain("Lord");
        expect(text).toContain("God");
      });
    });

    it("leaves a marker child alone when its text is not the expected opening or closing form", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        charNode = $createCharNode("nd");
        $getRoot().append(
          $createParaNode("p").append(
            charNode.append(
              // Not openingMarkerText("nd") or closingMarkerText("nd") — an unrecognized shape.
              $createImmutableTypedTextNode("marker", "\\nd|x-custom"),
              $createTextNode("Lord"),
            ),
          ),
        );
      });

      editor.update(
        () => {
          $setCharNodeMarker(charNode, "bd");
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        expect(charNode.getMarker()).toBe("bd");
        // An unrecognized marker text is left verbatim, not rewritten by guesswork.
        expect(charNode.getTextContent()).toContain("\\nd|x-custom");
      });
    });

    it("leaves a plain TextNode alone even when its text is the closing marker form", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        charNode = $createCharNode("nd");
        $getRoot().append(
          $createParaNode("p").append(
            // A plain TextNode is never a synthesized marker child, so the node-type gate comes
            // first — matching text alone must not make it a rewrite candidate.
            charNode.append($createTextNode("Lord"), $createTextNode(closingMarkerText("nd"))),
          ),
        );
      });

      editor.update(
        () => {
          $setCharNodeMarker(charNode, "bd");
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        expect(charNode.getMarker()).toBe("bd");
        expect(charNode.getTextContent()).toBe(`Lord${closingMarkerText("nd")}`);
      });
    });

    it("drops the closing marker instead of rewriting it when the new marker is a footnote marker", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        charNode = $createCharNode("nd");
        $getRoot().append(
          $createParaNode("p").append(
            charNode.append(
              $createMarkerNode("nd"),
              $createTextNode(NBSP + "Lord"),
              $createMarkerNode("nd", "closing"),
            ),
          ),
        );
      });

      editor.update(
        () => {
          $setCharNodeMarker(charNode, "ft");
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        expect(charNode.getMarker()).toBe("ft");
        // addClosingMarker never emits a closing marker for footnote/cross-reference markers, so
        // the retargeted closing child is removed rather than rewritten to a `\ft*` the adaptor
        // would never produce. Only the opening marker and the text remain.
        expect(charNode.getChildrenSize()).toBe(2);
        expect(charNode.getTextContent()).toContain(openingMarkerText("ft"));
        expect(charNode.getTextContent()).not.toContain(closingMarkerText("ft"));
      });
    });
  });

  describe("$getLogicalContentItems", () => {
    it("returns one text item for a plain text paragraph", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append($createParaNode().append($createTextNode("Hello world")));
      });

      editor.getEditorState().read(() => {
        const items = $getFirstParaItems();

        expect(items).toHaveLength(1);
        $expectTextItem(items[0], [{ text: "Hello world", start: 0 }]);
      });
    });

    it("coalesces text split by a TypedMarkNode into one item", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append(
          $createParaNode().append(
            $createTextNode("the "),
            $createTypedMarkNode({ spelling: ["s1"] }).append($createTextNode("man")),
            $createTextNode(" who"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const items = $getFirstParaItems();

        expect(items).toHaveLength(1);
        $expectTextItem(items[0], [
          { text: "the ", start: 0 },
          { text: "man", start: 4 },
          { text: " who", start: 7 },
        ]);
      });
    });

    it("coalesces text across adjacent overlapping-annotation marks (flat structure)", () => {
      // Overlapping annotations never nest: AnnotationPlugin's nested-element resolver flattens
      // them into adjacent sibling marks with merged typed IDs. This mirrors that real structure
      // for "man who" (grammar) overlapping "man" (spelling).
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append(
          $createParaNode().append(
            $createTextNode("the "),
            $createTypedMarkNode({ spelling: ["s1"], grammar: ["g1"] }).append(
              $createTextNode("man"),
            ),
            $createTypedMarkNode({ grammar: ["g1"] }).append($createTextNode(" who")),
            $createTextNode(" stands"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const items = $getFirstParaItems();

        expect(items).toHaveLength(1);
        $expectTextItem(items[0], [
          { text: "the ", start: 0 },
          { text: "man", start: 4 },
          { text: " who", start: 7 },
          { text: " stands", start: 11 },
        ]);
      });
    });

    it("breaks a text run at a non-text element (CharNode)", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append(
          $createParaNode().append(
            $createTextNode("aaa "),
            $createCharNode("nd").append($createTextNode("LORD")),
            $createTextNode(" bbb"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const items = $getFirstParaItems();

        expect(items).toHaveLength(3);
        $expectTextItem(items[0], [{ text: "aaa ", start: 0 }]);
        expect(items[1].type).toBe("element");
        $expectTextItem(items[2], [{ text: " bbb", start: 0 }]);
      });
    });

    it("emits editable VerseNodes as standalone items, breaking text runs", () => {
      // VerseNode extends TextNode (editable-marker rendering, e.g. "\v 1 "), but the
      // editor→USJ exporter always emits it as its own verse marker item — never coalesced
      // into the surrounding string content.
      let v1: VerseNode;
      let v2: VerseNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        v1 = $createVerseNode("1", "\\v 1 ");
        v2 = $createVerseNode("2", "\\v 2 ");
        $getRoot().append(
          $createParaNode("p").append(
            v1,
            $createTextNode("In the beginning "),
            v2,
            $createTextNode("and the earth"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const items = $getFirstParaItems();

        expect(items).toHaveLength(4);
        expect(items[0]).toEqual({ type: "element", node: v1 });
        $expectTextItem(items[1], [{ text: "In the beginning ", start: 0 }]);
        expect(items[2]).toEqual({ type: "element", node: v2 });
        $expectTextItem(items[3], [{ text: "and the earth", start: 0 }]);
      });
    });

    it("skips presentation-only MarkerNodes without breaking the run", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append(
          $createParaNode("p").append($createMarkerNode("p"), $createTextNode("verse text")),
        );
      });

      editor.getEditorState().read(() => {
        const items = $getFirstParaItems();

        expect(items).toHaveLength(1);
        $expectTextItem(items[0], [{ text: "verse text", start: 0 }]);
      });
    });

    it("skips a folded ImmutableTypedTextNode attribute display run without breaking the run", () => {
      // An opaque block's folded attribute byte display (e.g. an UnknownNode's `\cat ...\cat*`
      // run) is an ImmutableTypedTextNode with textType "attribute" — a DecoratorNode, not a
      // TextNode, so it needs its own presentation-only check distinct from the plain-TextNode
      // "attribute" runs used elsewhere (regression: previously only the "marker" flavor of
      // ImmutableTypedTextNode was skipped, so this run wrongly surfaced as its own content item
      // and shifted every logical index after it).
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append(
          $createParaNode("p").append(
            $createImmutableTypedTextNode("marker", "\\esb"),
            $createImmutableTypedTextNode("attribute", " \\cat Test Category\\cat*"),
            $createTextNode("verse text"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const items = $getFirstParaItems();

        expect(items).toHaveLength(1);
        $expectTextItem(items[0], [{ text: "verse text", start: 0 }]);
      });
    });

    it("skips standalone NBSP spacer text nodes between content items", () => {
      // Visible/hidden modes insert NBSP spacer text nodes between element items (e.g. between
      // char nodes in a note). The editor→USJ conversion drops them, so they are not USJ
      // content. A spacer only survives as its own node next to elements — Lexical merges
      // adjacent plain text nodes, so an NBSP beside other text is not a separate node.
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append(
          $createParaNode().append(
            $createCharNode("nd").append($createTextNode("aaa")),
            $createTextNode(NBSP),
            $createCharNode("nd").append($createTextNode("bbb")),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const items = $getFirstParaItems();

        expect(items).toHaveLength(2);
        expect(items[0].type).toBe("element");
        expect(items[1].type).toBe("element");
      });
    });

    it("skips a bare cursor host so it does not shift annotation content indexes", () => {
      // A transient caret host (EmptyVerseCaretGuardPlugin) carries no content, so it must not
      // appear as a content item — otherwise annotations after it would be mis-anchored (PT-4308).
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append(
          $createParaNode().append(
            $createCharNode("nd").append($createTextNode("aaa")),
            $createCursorPlaceholderNode(),
            $createCharNode("nd").append($createTextNode("bbb")),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const items = $getFirstParaItems();

        expect(items).toHaveLength(2);
        expect(items[0].type).toBe("element");
        expect(items[1].type).toBe("element");
      });
    });

    it("emits a non-text element wrapped inside a TypedMarkNode as its own item", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append(
          $createParaNode().append(
            $createTextNode("x"),
            $createTypedMarkNode({ t: ["1"] }).append(
              $createTextNode("y"),
              $createCharNode("nd").append($createTextNode("LORD")),
              $createTextNode("z"),
            ),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const items = $getFirstParaItems();

        // run "xy" | char | run "z"
        expect(items).toHaveLength(3);
        $expectTextItem(items[0], [
          { text: "x", start: 0 },
          { text: "y", start: 1 },
        ]);
        expect(items[1].type).toBe("element");
        $expectTextItem(items[2], [{ text: "z", start: 0 }]);
      });
    });

    it("returns an empty array for an empty paragraph", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append($createParaNode());
      });

      editor.getEditorState().read(() => {
        expect($getFirstParaItems()).toEqual([]);
      });
    });
  });

  describe("$getLogicalParent / $getLogicalIndexOfChild / $getLogicalTextLocation", () => {
    it("resolves through TypedMarkNode wrappers to the real parent and run index", () => {
      let markedText: TextNode;
      let trailingText: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        markedText = $createTextNode("man");
        trailingText = $createTextNode(" who");
        $getRoot().append(
          $createParaNode().append(
            $createTextNode("the "),
            $createTypedMarkNode({ spelling: ["s1"] }).append(markedText),
            trailingText,
          ),
        );
      });

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isElementNode(para)) throw new Error("Expected an ElementNode");

        // Logical parent of text inside the mark is the para, not the mark.
        expect($getLogicalParent(markedText)?.getKey()).toBe(para.getKey());
        // All three text pieces belong to logical item 0.
        expect($getLogicalIndexOfChild(para, markedText)).toBe(0);
        expect($getLogicalIndexOfChild(para, trailingText)).toBe(0);

        // Cumulative offsets: "the " (4) + "man" (3) + " who".
        expect($getLogicalTextLocation(markedText, 1, false)).toEqual({
          parent: para,
          index: 0,
          offset: 5,
        });
        expect($getLogicalTextLocation(trailingText, 2, false)).toEqual({
          parent: para,
          index: 0,
          offset: 9,
        });
      });
    });

    it("gives elements after an annotated run their logical index", () => {
      let charNode: ReturnType<typeof $createCharNode>;
      let tailText: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        charNode = $createCharNode("nd");
        tailText = $createTextNode("dd");
        $getRoot().append(
          $createParaNode().append(
            $createTextNode("aaa "),
            $createTypedMarkNode({ t: ["1"] }).append($createTextNode("bb")),
            $createTextNode(" cc "),
            charNode.append($createTextNode("LORD")),
            tailText,
          ),
        );
      });

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isElementNode(para)) throw new Error("Expected an ElementNode");

        // USJ content: [0]="aaa bb cc ", [1]=char, [2]="dd" — the mark is invisible.
        expect($getLogicalIndexOfChild(para, charNode)).toBe(1);
        expect($getLogicalIndexOfChild(para, tailText)).toBe(2);
        expect($getLogicalTextLocation(tailText, 1, false)).toEqual({
          parent: para,
          index: 2,
          offset: 1,
        });
      });
    });

    it("returns -1 / undefined for presentation-only nodes", () => {
      let markerNode: ReturnType<typeof $createMarkerNode>;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        markerNode = $createMarkerNode("p");
        $getRoot().append($createParaNode("p").append(markerNode, $createTextNode("hi")));
      });

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isElementNode(para)) throw new Error("Expected an ElementNode");
        expect($getLogicalIndexOfChild(para, markerNode)).toBe(-1);
        expect($getLogicalTextLocation(markerNode, 0, false)).toBeUndefined();
      });
    });
  });

  describe("$getTextNodeAtLogicalOffset", () => {
    it("finds the segment and local offset for cumulative offsets", () => {
      const { editor, t1, t2, t3 } = buildAnnotatedPara();
      editor.getEditorState().read(() => {
        const item = $getFirstParaTextItem();

        expect($getTextNodeAtLogicalOffset(item, 2)).toEqual([t1, 2]); // in "the "
        expect($getTextNodeAtLogicalOffset(item, 5)).toEqual([t2, 1]); // in "man"
        expect($getTextNodeAtLogicalOffset(item, 9)).toEqual([t3, 2]); // in " who"
      });
    });

    it("prefers the next segment's start at internal boundaries", () => {
      const { editor, t2 } = buildAnnotatedPara();
      editor.getEditorState().read(() => {
        const item = $getFirstParaTextItem();

        // Offset 4 is the boundary "the "|"man": the mark's text at local offset 0.
        expect($getTextNodeAtLogicalOffset(item, 4)).toEqual([t2, 0]);
      });
    });

    it("returns the end of the last segment for offset === length, undefined beyond", () => {
      const { editor, t3 } = buildAnnotatedPara();
      editor.getEditorState().read(() => {
        const item = $getFirstParaTextItem();

        expect($getTextNodeAtLogicalOffset(item, 11)).toEqual([t3, 4]); // "the man who".length
        expect($getTextNodeAtLogicalOffset(item, 12)).toBeUndefined();
      });
    });
  });

  describe("char span separator prefix", () => {
    it("excludes the separator NBSP from the span's text coordinates", () => {
      const { editor, charText } = buildCharSpan();

      editor.getEditorState().read(() => {
        const items = $getCharItems();

        expect(items).toHaveLength(1);
        $expectTextItem(items[0], [{ text: `${NBSP}LORD`, start: 0, lead: 1 }]);

        // A local offset past the separator is its distance into the content.
        expect($getLogicalTextLocation(charText, 3, false)).toEqual({
          parent: charText.getParent(),
          index: 0,
          offset: 2,
        });
        // Both sides of the separator itself are the start of the content.
        expect($getLogicalTextLocation(charText, 0, false)?.offset).toBe(0);
        expect($getLogicalTextLocation(charText, 1, false)?.offset).toBe(0);

        const item = items[0];
        if (item.type !== "text") throw new Error("Expected a text item");
        expect($getTextNodeAtLogicalOffset(item, 0)).toEqual([charText, 1]);
        expect($getTextNodeAtLogicalOffset(item, 2)).toEqual([charText, 3]);
        expect($getTextNodeAtLogicalOffset(item, 4)).toEqual([charText, 5]);
        expect($getTextNodeAtLogicalOffset(item, 5)).toBeUndefined();
      });
    });

    it("keeps the separator out of an annotated span's coordinates", () => {
      // The AnnotationPlugin wraps content in a TypedMarkNode, which is transparent in USJ — so
      // the separator is still the glyph's, even one wrapper down.
      let charText: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        charText = $createTextNode(`${NBSP}LORD`);
        $getRoot().append(
          $createParaNode("p").append(
            $createCharNode("nd").append(
              $createMarkerNode("nd"),
              $createTypedMarkNode({ spelling: ["s1"] }).append(charText),
              $createMarkerNode("nd", "closing"),
            ),
          ),
        );
      });

      editor.getEditorState().read(() => {
        $expectTextItem($getCharItems()[0], [{ text: `${NBSP}LORD`, start: 0, lead: 1 }]);
      });
    });

    it("finds the glyph when the annotation started on it", () => {
      // An annotation anchored at a marker location starts ON the opening glyph, so the mark can
      // wrap the glyph together with the text, or the glyph alone.
      let sharedText: TextNode;
      let followingText: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        sharedText = $createTextNode(`${NBSP}LORD`);
        followingText = $createTextNode(`${NBSP}God`);
        $getRoot().append(
          $createParaNode("p").append(
            $createCharNode("nd").append(
              $createTypedMarkNode({ spelling: ["s1"] }).append(
                $createMarkerNode("nd"),
                sharedText,
              ),
              $createMarkerNode("nd", "closing"),
            ),
            $createCharNode("wj").append(
              $createTypedMarkNode({ spelling: ["s2"] }).append($createMarkerNode("wj")),
              followingText,
              $createMarkerNode("wj", "closing"),
            ),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isElementNode(para)) throw new Error("Expected an ElementNode");
        const [nd, wj] = para.getChildren().filter($isCharNode);

        $expectTextItem($getLogicalContentItems(nd, false)[0], [
          { text: `${NBSP}LORD`, start: 0, lead: 1 },
        ]);
        expect($getLogicalTextLocation(sharedText, 3, false)?.offset).toBe(2);
        $expectTextItem($getLogicalContentItems(wj, false)[0], [
          { text: `${NBSP}God`, start: 0, lead: 1 },
        ]);
        expect($getLogicalTextLocation(followingText, 3, false)?.offset).toBe(2);
      });
    });

    it("counts a leading NBSP that no opening glyph owns", () => {
      // Outside a char span an NBSP is the author's own `~`, and inside one only the NBSP
      // directly after the opening glyph is the separator — the text after a nested span's
      // closer carries content, not display.
      let paraText: TextNode;
      let tailText: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        paraText = $createTextNode(`${NBSP}data`);
        tailText = $createTextNode(`${NBSP}tail`);
        $getRoot().append(
          $createParaNode("p").append(
            $createMarkerNode("p"),
            paraText,
            $createCharNode("nd").append(
              $createMarkerNode("nd"),
              $createTextNode(`${NBSP}LORD`),
              $createCharNode("wj").append(
                $createMarkerNode("wj"),
                $createTextNode(`${NBSP}said`),
                $createMarkerNode("wj", "closing"),
              ),
              tailText,
              $createMarkerNode("nd", "closing"),
            ),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isElementNode(para)) throw new Error("Expected an ElementNode");
        $expectTextItem($getLogicalContentItems(para, false)[0], [
          { text: `${NBSP}data`, start: 0 },
        ]);

        const charItems = $getCharItems();
        $expectTextItem(charItems[0], [{ text: `${NBSP}LORD`, start: 0, lead: 1 }]);
        $expectTextItem(charItems[2], [{ text: `${NBSP}tail`, start: 0 }]);
        expect($getLogicalTextLocation(tailText, 1, false)?.offset).toBe(1);

        // The nested span owns its own opening glyph, so its first text carries a separator too.
        const nested = charItems[1];
        if (nested.type !== "element" || !$isCharNode(nested.node))
          throw new Error("Expected the nested char span");
        $expectTextItem($getLogicalContentItems(nested.node, false)[0], [
          { text: `${NBSP}said`, start: 0, lead: 1 },
        ]);
      });
    });
  });

  describe("space runs where serialization collapses them", () => {
    it("counts a run as the one space serialization keeps", () => {
      let text: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        text = $createTextNode(`a${NBSP}${NBSP}${NBSP}b`);
        $getRoot().append($createParaNode("p").append(text));
      });

      editor.getEditorState().read(() => {
        const para = text.getParentOrThrow();
        const [item] = $getLogicalContentItems(para, true);
        if (item?.type !== "text") throw new Error("Expected a text item");

        expect(item.length).toBe("a b".length);
        // A point inside the run reports the character after the space the run keeps.
        expect(
          [0, 1, 2, 3, 4, 5].map((offset) => $getLogicalTextLocation(text, offset, true)?.offset),
        ).toEqual([0, 1, 2, 2, 2, 3]);
        // A settled offset lands on the live character it names, so past the whole run.
        expect([0, 1, 2, 3].map((offset) => $getTextNodeAtLogicalOffset(item, offset))).toEqual([
          [text, 0],
          [text, 1],
          [text, 4],
          [text, 5],
        ]);
      });
    });

    it("keeps every character where serialization does not collapse runs", () => {
      let text: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        text = $createTextNode(`a${NBSP}${NBSP}${NBSP}b`);
        $getRoot().append($createParaNode("p").append(text));
      });

      editor.getEditorState().read(() => {
        const [item] = $getLogicalContentItems(text.getParentOrThrow(), false);
        if (item?.type !== "text") throw new Error("Expected a text item");

        expect(item.length).toBe(5);
        expect($getLogicalTextLocation(text, 4, false)?.offset).toBe(4);
        expect($getTextNodeAtLogicalOffset(item, 3)).toEqual([text, 3]);
      });
    });

    it("collapses a run after a char span's separator without counting the separator in it", () => {
      let singleSpace: TextNode;
      let run: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        singleSpace = $createTextNode(`${NBSP} LORD`);
        run = $createTextNode(`${NBSP}${NBSP}${NBSP}God`);
        $getRoot().append(
          $createParaNode("p").append(
            $createCharNode("nd").append(
              $createMarkerNode("nd"),
              singleSpace,
              $createMarkerNode("nd", "closing"),
            ),
            $createCharNode("wj").append(
              $createMarkerNode("wj"),
              run,
              $createMarkerNode("wj", "closing"),
            ),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const [nd, wj] = singleSpace.getParentOrThrow().getParentOrThrow().getChildren();
        if (!$isCharNode(nd) || !$isCharNode(wj)) throw new Error("Expected two char spans");

        // The separator and the content's own leading space are not a run: the separator goes
        // before serialization collapses anything.
        const [ndItem] = $getLogicalContentItems(nd, true);
        if (ndItem?.type !== "text") throw new Error("Expected a text item");
        expect(ndItem.length).toBe(" LORD".length);
        expect($getLogicalTextLocation(singleSpace, 2, true)?.offset).toBe(1);

        // Content that starts with a run keeps the run's first space after the separator.
        const [wjItem] = $getLogicalContentItems(wj, true);
        if (wjItem?.type !== "text") throw new Error("Expected a text item");
        expect(wjItem.length).toBe(" God".length);
        expect(
          [0, 1, 2, 3, 4].map((offset) => $getLogicalTextLocation(run, offset, true)?.offset),
        ).toEqual([0, 0, 1, 1, 2]);
        expect([0, 1, 4].map((offset) => $getTextNodeAtLogicalOffset(wjItem, offset))).toEqual([
          [run, 1],
          [run, 3],
          [run, 6],
        ]);
      });
    });

    it("measures each text node on its own, as serialization does", () => {
      // A run split across an annotation's edge is two single spaces to the exporter, which
      // collapses each node's text before joining it with its neighbors.
      let marked: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        marked = $createTextNode(`${NBSP}b`);
        $getRoot().append(
          $createParaNode("p").append(
            $createTextNode(`a${NBSP}`),
            $createTypedMarkNode({ t: ["1"] }).append(marked),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const [item] = $getLogicalContentItems($getRoot().getFirstChildOrThrow(), true);
        if (item?.type !== "text") throw new Error("Expected a text item");

        expect(item.length).toBe(4);
        expect($getLogicalTextLocation(marked, 1, true)?.offset).toBe(3);
      });
    });

    it("starts a following segment after the collapsed run", () => {
      let marked: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        marked = $createTextNode("b");
        $getRoot().append(
          $createParaNode("p").append(
            $createTextNode(`a${NBSP}${NBSP}${NBSP}`),
            $createTypedMarkNode({ t: ["1"] }).append(marked),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const para = marked.getParentOrThrow().getParentOrThrow();
        const [item] = $getLogicalContentItems(para, true);
        if (item?.type !== "text") throw new Error("Expected a text item");

        expect(item.segments.map((segment) => segment.start)).toEqual([0, 2]);
        expect($getLogicalTextLocation(marked, 0, true)?.offset).toBe(2);
        expect($getLogicalPointFromElementPoint(para, 1, true)).toEqual({
          type: "text",
          index: 0,
          offset: 2,
        });
      });
    });
  });

  describe("nodes the editor→USJ conversion emits nothing for", () => {
    it("skips a verse's \\va / \\vp display run wrappers", () => {
      let bodyText: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        bodyText = $createTextNode("In the beginning");
        const va = $createAttributeRunNode("va").append(
          $createMarkerNode("va"),
          $createTextNode(`${NBSP}2`),
          $createMarkerNode("va", "closing"),
        );
        const vp = $createAttributeRunNode("vp").append(
          $createMarkerNode("vp"),
          $createTextNode(`${NBSP}1a`),
          $createMarkerNode("vp", "closing"),
        );
        $getRoot().append($createParaNode("p").append($createVerseNode("1"), va, vp, bodyText));
      });

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isElementNode(para)) throw new Error("Expected an ElementNode");
        const items = $getLogicalContentItems(para, false);

        expect(items.map((item) => (item.type === "text" ? "text" : item.node.getType()))).toEqual([
          "verse",
          "text",
        ]);
        expect($getLogicalIndexOfChild(para, bodyText)).toBe(1);
      });
    });

    it("skips a collapsed note's caller decorator", () => {
      let content: CharNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        content = $createCharNode("ft").append($createTextNode("A note"));
        $getRoot().append(
          $createParaNode("p").append(
            $createNoteNode("f", "+", true).append(new NoteCallerStubNode(), content),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const note = content.getParent();
        if (!$isElementNode(note)) throw new Error("Expected the note");
        const items = $getLogicalContentItems(note, false);

        expect(items.map((item) => (item.type === "text" ? "text" : item.node.getType()))).toEqual([
          "char",
        ]);
        expect($getLogicalIndexOfChild(note, content)).toBe(0);
      });
    });

    it("skips an expanded note's editable caller text, but not content that reads like it", () => {
      let content: CharNode;
      let echoText: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        content = $createCharNode("ft").append($createTextNode("A note"));
        echoText = $createTextNode(getEditableCallerText("+"));
        $getRoot().append(
          $createParaNode("p").append(
            $createNoteNode("f", "+", false).append(
              $createMarkerNode("f"),
              $createTextNode(getEditableCallerText("+")),
              content,
              echoText,
              $createMarkerNode("f", "closing"),
            ),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const note = content.getParent();
        if (!$isElementNode(note)) throw new Error("Expected the note");
        const items = $getLogicalContentItems(note, false);

        // The caller occupies the slot right after the opening glyph; the same bytes later in the
        // note are content the exporter would emit, so the rule is positional, not textual.
        expect(items.map((item) => (item.type === "text" ? "text" : item.node.getType()))).toEqual([
          "char",
          "text",
        ]);
        expect($getLogicalIndexOfChild(note, content)).toBe(0);
        expect($getLogicalIndexOfChild(note, echoText)).toBe(1);
      });
    });

    it("gives an editable chapter no logical content at all", () => {
      let chapter: ChapterNode;
      let paraText: TextNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        const glyph = $createTextNode("\\c 1 ");
        const ca = $createAttributeRunNode("ca");
        const caValue = $createTextNode(`${NBSP}2`);
        $setState(caValue, textTypeState, "attribute");
        ca.append($createMarkerNode("ca"), caValue, $createMarkerNode("ca", "closing"));
        chapter = $createChapterNode("1");
        chapter.append(glyph, ca);
        paraText = $createTextNode("In the beginning");
        $getRoot().append(chapter, $createParaNode("p").append(paraText));
      });

      editor.getEditorState().read(() => {
        // The chapter marker itself is content; the `\c N` glyph it displays is not.
        expect($getLogicalContentItems(chapter, false)).toEqual([]);
        expect(
          chapter.getChildren().map((child) => $shouldIgnoreNodeForContentIndexes(child)),
        ).toEqual([true, true]);
        expect($getLogicalIndexOfChild(chapter, chapter.getFirstChildOrThrow())).toBe(-1);
        expect($getLogicalIndexOfChild($getRoot(), chapter)).toBe(0);
        expect($getLogicalIndexOfChild($getRoot(), paraText.getParentOrThrow())).toBe(1);
      });
    });
  });

  describe("$getLogicalPointFromElementPoint / $getElementOffsetFromLogicalIndex", () => {
    it("maps element boundaries around an annotated run", () => {
      const { editor } = createBasicTestEnvironment(nodes, () => {
        $getRoot().append(
          $createParaNode().append(
            $createTextNode("aaa "),
            $createTypedMarkNode({ t: ["1"] }).append($createTextNode("bb")),
            $createTextNode(" cc "),
            $createCharNode("nd").append($createTextNode("LORD")),
            $createTextNode("dd"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isElementNode(para)) throw new Error("Expected an ElementNode");
        // Lexical children:      0="aaa "  1=Mark  2=" cc "  3=Char  4="dd"
        // Logical content items: 0="aaa bb cc "   1=Char     2="dd"

        // Boundary before child 0 = before item 0.
        expect($getLogicalPointFromElementPoint(para, 0, false)).toEqual({
          type: "index",
          index: 0,
        });
        // Boundary before the mark falls INSIDE logical item 0 at cumulative offset 4.
        expect($getLogicalPointFromElementPoint(para, 1, false)).toEqual({
          type: "text",
          index: 0,
          offset: 4,
        });
        // Boundary before " cc " is also inside item 0, at offset 6.
        expect($getLogicalPointFromElementPoint(para, 2, false)).toEqual({
          type: "text",
          index: 0,
          offset: 6,
        });
        // Boundary before the char is the clean boundary between items 0 and 1.
        expect($getLogicalPointFromElementPoint(para, 3, false)).toEqual({
          type: "index",
          index: 1,
        });
        // End boundary.
        expect($getLogicalPointFromElementPoint(para, 5, false)).toEqual({
          type: "index",
          index: 3,
        });

        // Inverse: earliest element child offset for each logical boundary.
        expect($getElementOffsetFromLogicalIndex(para, 0)).toBe(0);
        expect($getElementOffsetFromLogicalIndex(para, 1)).toBe(3); // after " cc "
        expect($getElementOffsetFromLogicalIndex(para, 2)).toBe(4); // after Char
        expect($getElementOffsetFromLogicalIndex(para, 3)).toBe(5); // after "dd"
      });
    });

    it("resolves a boundary at a mark wrapping a non-text element child", () => {
      // The mark wraps a CharNode rather than plain text (e.g. from wrapping a partial CharNode
      // selection in an annotation). This pins the $isDescendantOf element-item branch: the
      // "child" passed in is the mark itself, and the matching item's node (the CharNode) is a
      // descendant of it, not equal to it.
      let markNode: TypedMarkNode;
      const { editor } = createBasicTestEnvironment(nodes, () => {
        markNode = $createTypedMarkNode({ t: ["1"] }).append(
          $createCharNode("nd").append($createTextNode("LORD")),
        );
        $getRoot().append(
          $createParaNode().append($createTextNode("ab"), markNode, $createTextNode("cd")),
        );
      });

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChild();
        if (!$isElementNode(para)) throw new Error("Expected an ElementNode");
        // Lexical children:      0="ab"  1=Mark  2="cd"
        // Logical content items: 0="ab"  1=Char  2="cd"

        // Boundary before the mark (child index 1) falls on the char's logical index, not the
        // mark's own (dropped) index.
        expect($getLogicalPointFromElementPoint(para, 1, false)).toEqual({
          type: "index",
          index: 1,
        });
      });
    });
  });
});

// ---------------------------------------------------------------------------
// Helpers (function declarations hoist, so they may live after the tests)
// ---------------------------------------------------------------------------

/**
 * Gets the logical content items of the first (para) child of root. Must be called inside an
 * active editor state read scope, e.g. `editor.getEditorState().read(...)`.
 */
function $getFirstParaItems(): LogicalContentItem[] {
  const para = $getRoot().getFirstChild();
  if (!$isElementNode(para)) throw new Error("Expected an ElementNode");
  return $getLogicalContentItems(para, false);
}

/**
 * Gets the first logical content item of the first (para) child of root, asserting it is a
 * text item. Must be called inside an active editor state read scope.
 */
function $getFirstParaTextItem(): LogicalTextItem {
  const [item] = $getFirstParaItems();
  if (item?.type !== "text") throw new Error("Expected a text item");
  return item;
}

/**
 * Asserts a text item's segment texts and cumulative starts. Must be called inside an active
 * editor state read scope, e.g. `editor.getEditorState().read(...)`.
 */
function $expectTextItem(
  item: LogicalContentItem,
  expectedSegments: { text: string; start: number; lead?: number }[],
) {
  if (item.type !== "text") throw new Error("Expected a text item");
  expect(
    item.segments.map((segment) => ({
      text: segment.node.getTextContent(),
      start: segment.start,
      lead: segment.lead,
    })),
  ).toEqual(expectedSegments.map(({ text, start, lead }) => ({ text, start, lead: lead ?? 0 })));
  expect(item.length).toBe(
    expectedSegments.reduce((sum, segment) => sum + segment.text.length - (segment.lead ?? 0), 0),
  );
}

/**
 * Build an editable-mode `\nd` span — opening glyph, NBSP-prefixed content, closing glyph —
 * inside a paragraph, returning its content text node.
 */
function buildCharSpan() {
  let charText: TextNode;
  const { editor } = createBasicTestEnvironment(nodes, () => {
    charText = $createTextNode(`${NBSP}LORD`);
    $getRoot().append(
      $createParaNode("p").append(
        $createCharNode("nd").append(
          $createMarkerNode("nd"),
          charText,
          $createMarkerNode("nd", "closing"),
        ),
      ),
    );
  });
  // Non-null assertion is safe: the initial state callback ran synchronously.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { editor, charText: charText! };
}

/**
 * Gets the logical content items of the first char span under the first (para) child of root.
 * Must be called inside an active editor state read scope.
 */
function $getCharItems(): LogicalContentItem[] {
  const para = $getRoot().getFirstChild();
  if (!$isElementNode(para)) throw new Error("Expected an ElementNode");
  const char = para.getChildren().find($isCharNode);
  if (!char) throw new Error("Expected a char span");
  return $getLogicalContentItems(char, false);
}

/** Build "the " |man| " who" where "man" is annotated, returning the three text nodes. */
function buildAnnotatedPara() {
  let t1: TextNode;
  let t2: TextNode;
  let t3: TextNode;
  const { editor } = createBasicTestEnvironment(nodes, () => {
    t1 = $createTextNode("the ");
    t2 = $createTextNode("man");
    t3 = $createTextNode(" who");
    $getRoot().append(
      $createParaNode().append(t1, $createTypedMarkNode({ s: ["1"] }).append(t2), t3),
    );
  });
  // Non-null assertion is safe: the initial state callback ran synchronously.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { editor, t1: t1!, t2: t2!, t3: t3! };
}
