// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
  createBasicTestEnvironment,
  updateSelection,
} from "../../../../../../libs/shared/src/nodes/usj/test.utils";
import {
  $createImmutableVerseNode,
  ImmutableVerseNode,
} from "../../../nodes/usj/ImmutableVerseNode";
import { SelectionRange, AnnotationRange } from "./selection.model";
import { $getRangeFromUsjSelection, $getUsjSelectionFromEditor } from "./selection.utils";
import {
  $createLineBreakNode,
  $createTextNode,
  $getRoot,
  $setState,
  ElementNode,
  LexicalEditor,
  LineBreakNode,
  TextNode,
} from "lexical";
import {
  $createChapterNode,
  $createCharNode,
  $createImmutableChapterNode,
  $createImpliedParaNode,
  $createImmutableTypedTextNode,
  $createMarkerNode,
  $createMilestoneNode,
  $createParaNode,
  $createTypedMarkNode,
  $createVerseBlockNode,
  $createVerseNode,
  ChapterNode,
  CharNode,
  closingMarkerText,
  CURSOR_PLACEHOLDER_CHAR,
  ImmutableChapterNode,
  ImmutableTypedTextNode,
  ImpliedParaNode,
  MarkerNode,
  MilestoneNode,
  NBSP,
  openingMarkerText,
  ParaNode,
  textTypeState,
  TypedMarkNode,
  VerseBlockNode,
  VerseNode,
} from "shared";

describe("$getRangeFromUsjSelection", () => {
  describe("UsjTextContentLocation", () => {
    it("should convert a collapsed USJ selection to an editor selection", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        t1 = $createTextNode("Hello world");
        $getRoot().append($createParaNode().append(t1));
      });

      editor.getEditorState().read(() => {
        // caret at the end of "Hello"
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0].content[0]", offset: 5 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(t1.getKey());
        expect(editorSelection.anchor.offset).toBe(5);
        expect(editorSelection.focus.key).toBe(t1.getKey());
        expect(editorSelection.focus.offset).toBe(5);
      });
    });

    it("should convert a USJ selection with start and end to an editor selection", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        t1 = $createTextNode("Hello world");
        $getRoot().append($createParaNode().append(t1));
      });

      editor.getEditorState().read(() => {
        // select "Hello" from "Hello world"
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0].content[0]", offset: 0 },
          end: { jsonPath: "$.content[0].content[0]", offset: 5 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(t1.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.focus.key).toBe(t1.getKey());
        expect(editorSelection.focus.offset).toBe(5);
      });
    });

    it("should convert a USJ selection at end of para to an editor usjSelection", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        t1 = $createTextNode("Hello world");
        $getRoot().append($createParaNode().append(t1));
      });

      editor.getEditorState().read(() => {
        // select "world" from "Hello world"
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0].content[0]", offset: 6 },
          end: { jsonPath: "$.content[0].content[0]", offset: 11 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(t1.getKey());
        expect(editorSelection.anchor.offset).toBe(6);
        expect(editorSelection.focus.key).toBe(t1.getKey());
        expect(editorSelection.focus.offset).toBe(11);
      });
    });

    it("should convert an AnnotationRange spanning multiple nodes", () => {
      let t1: TextNode;
      let t2: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        t1 = $createTextNode("First paragraph");
        t2 = $createTextNode("Second paragraph");
        $getRoot().append($createParaNode().append(t1), $createParaNode().append(t2));
      });

      editor.getEditorState().read(() => {
        const annotation: AnnotationRange = {
          start: { jsonPath: "$.content[0].content[0]", offset: 5 },
          end: { jsonPath: "$.content[1].content[0]", offset: 6 },
        };
        const editorSelection = $getRangeFromUsjSelection(annotation);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(t1.getKey());
        expect(editorSelection.anchor.offset).toBe(5);
        expect(editorSelection.focus.key).toBe(t2.getKey());
        expect(editorSelection.focus.offset).toBe(6);
      });
    });

    it("should return undefined when location points to non-existent node", () => {
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        $getRoot().append($createParaNode().append($createTextNode("Hello")));
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[99].content[0]", offset: 0 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        expect(editorSelection).toBeUndefined();
      });
    });

    it("should handle text inside TypedMarkNode", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        t1 = $createTextNode("Marked text");
        $getRoot().append(
          $createParaNode().append($createTypedMarkNode({ testType: ["testId"] }).append(t1)),
        );
      });

      editor.getEditorState().read(() => {
        // Coalesced-USJ coordinates: the TypedMarkNode is invisible in exported USJ, so the
        // marked text is the para's first (and only) content string — not a nested content item.
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0].content[0]", offset: 7 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(t1.getKey());
        expect(editorSelection.anchor.offset).toBe(7);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });
  });

  describe("UsjMarkerLocation", () => {
    it("should return undefined when element has no children", () => {
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        $getRoot().append($createParaNode());
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = { start: { jsonPath: "$.content[0]" } };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        expect(editorSelection).toBeUndefined();
      });
    });

    it("should position at para opening MarkerNode (editable markers)", () => {
      let markerNode: MarkerNode;
      const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode], () => {
        markerNode = $createMarkerNode("p", "opening");
        $getRoot().append($createParaNode().append(markerNode, $createTextNode("Hello")));
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = { start: { jsonPath: "$.content[0]" } };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(markerNode.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position at para opening ImmutableTypedTextNode marker (visible markers)", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableTypedTextNode], () => {
        para = $createParaNode();
        $getRoot().append(
          para.append(
            $createImmutableTypedTextNode("marker", openingMarkerText("p")),
            $createTextNode("Hello"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = { start: { jsonPath: "$.content[0]" } };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        // Visible markers normalize to the parent element at the marker's index.
        expect(editorSelection.anchor.key).toBe(para.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should fall back to start of para (hidden markers)", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        t1 = $createTextNode("Hello");
        $getRoot().append($createParaNode().append(t1));
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = { start: { jsonPath: "$.content[0]" } };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(t1.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position at character opening MarkerNode (editable markers)", () => {
      let markerNode: MarkerNode;
      const { editor } = createBasicTestEnvironment([ParaNode, CharNode, MarkerNode], () => {
        markerNode = $createMarkerNode("wj", "opening");
        $getRoot().append(
          $createParaNode().append(
            $createMarkerNode("p", "opening"),
            $createTextNode("Jesus said "),
            $createCharNode("wj").append(
              markerNode,
              $createTextNode('"Follow me."'),
              $createMarkerNode("wj", "closing"),
            ),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = { start: { jsonPath: "$.content[0].content[1]" } };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(markerNode.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position at character opening ImmutableTypedTextNode marker (visible markers)", () => {
      let char: CharNode;
      const { editor } = createBasicTestEnvironment(
        [ParaNode, CharNode, ImmutableTypedTextNode, MarkerNode],
        () => {
          char = $createCharNode("wj");
          $getRoot().append(
            $createParaNode().append(
              $createMarkerNode("p", "opening"),
              $createTextNode("Jesus said "),
              char.append(
                $createImmutableTypedTextNode("marker", openingMarkerText("wj")),
                $createTextNode('"Follow me."'),
                $createImmutableTypedTextNode("marker", closingMarkerText("wj")),
              ),
            ),
          );
        },
      );

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = { start: { jsonPath: "$.content[0].content[1]" } };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        // Visible markers normalize to the parent element at the marker's index.
        expect(editorSelection.anchor.key).toBe(char.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should fall back to start of character text (hidden markers)", () => {
      let t2: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, CharNode], () => {
        t2 = $createTextNode('"Follow me."');
        $getRoot().append(
          $createParaNode().append(
            $createTextNode("Jesus said "),
            $createCharNode("wj").append(t2),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = { start: { jsonPath: "$.content[0].content[1]" } };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(t2.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });
  });

  describe("UsjClosingMarkerLocation", () => {
    it("should position within character closing MarkerNode (editable markers)", () => {
      let closingMarker: MarkerNode;
      const { editor } = createBasicTestEnvironment([ParaNode, CharNode, MarkerNode], () => {
        closingMarker = $createMarkerNode("wj", "closing");
        $getRoot().append(
          $createParaNode().append(
            $createMarkerNode("p", "opening"),
            $createTextNode("Jesus said "),
            $createCharNode("wj").append(
              $createMarkerNode("wj", "opening"),
              $createTextNode('"Follow me."'),
              closingMarker,
            ),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0].content[1]", closingMarkerOffset: 2 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(closingMarker.getKey());
        expect(editorSelection.anchor.offset).toBe(2);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position within character closing ImmutableTypedTextNode marker (visible markers)", () => {
      let char: CharNode;
      const { editor } = createBasicTestEnvironment(
        [ParaNode, CharNode, ImmutableTypedTextNode, MarkerNode],
        () => {
          char = $createCharNode("wj");
          $getRoot().append(
            $createParaNode().append(
              $createMarkerNode("p", "opening"),
              $createTextNode("Jesus said "),
              char.append(
                $createImmutableTypedTextNode("marker", openingMarkerText("wj")),
                $createTextNode('"Follow me."'),
                $createImmutableTypedTextNode("marker", closingMarkerText("wj")),
              ),
            ),
          );
        },
      );

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0].content[1]", closingMarkerOffset: 2 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        // Visible markers normalize to the parent element at the marker's index.
        expect(editorSelection.anchor.key).toBe(char.getKey());
        expect(editorSelection.anchor.offset).toBe(2);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should fall back to end of character text (hidden markers)", () => {
      let t2: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, CharNode], () => {
        t2 = $createTextNode('"Follow me."');
        $getRoot().append(
          $createParaNode().append(
            $createTextNode("Jesus said "),
            $createCharNode("wj").append(t2),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0].content[1]", closingMarkerOffset: 2 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(t2.getKey());
        expect(editorSelection.anchor.offset).toBe(12);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });
  });

  describe("UsjPropertyValueLocation", () => {
    it("should position within para opening MarkerNode (editable markers)", () => {
      let markerNode: MarkerNode;
      const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode], () => {
        markerNode = $createMarkerNode("toc1", "opening");
        $getRoot().append($createParaNode().append(markerNode, $createTextNode("Hello")));
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0].marker", propertyOffset: 2 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(markerNode.getKey());
        expect(editorSelection.anchor.offset).toBe(3);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position within para opening ImmutableTypedTextNode marker (visible markers)", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableTypedTextNode], () => {
        para = $createParaNode();
        $getRoot().append(
          para.append(
            // ImmutableTypedTextNode text is "\toc1" (backslash + marker name)
            $createImmutableTypedTextNode("marker", openingMarkerText("toc1")),
            $createTextNode("Hello"),
          ),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0].marker", propertyOffset: 2 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        // Visible markers normalize to the parent element at the marker's index.
        expect(editorSelection.anchor.key).toBe(para.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should fall back to start of para (hidden markers)", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        t1 = $createTextNode("Hello");
        $getRoot().append($createParaNode().append(t1));
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0].marker", propertyOffset: 1 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(t1.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });
  });

  describe("UsjAttributeKeyLocation", () => {
    it("should position at end of chapter (since ca not yet rendered with editable markers)", () => {
      let chText: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ChapterNode], () => {
        chText = $createTextNode(String.raw`\c${NBSP}1 `);
        $getRoot().append(
          $createChapterNode("1", "2SA 1", "1 ca", "1 cp").append(chText),
          $createParaNode().append($createTextNode("hello")),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: {
            jsonPath: "$.content[0]",
            keyName: "altnumber",
            keyOffset: 0,
          },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(chText.getKey());
        expect(editorSelection.anchor.offset).toBe(5);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position at end of chapter (since ca not yet rendered with visible markers)", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableChapterNode], () => {
        para = $createParaNode();
        $getRoot().append(
          $createImmutableChapterNode("1", true, "2SA 1", "1 ca", "1 cp"),
          para.append($createTextNode("hello")),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: {
            jsonPath: "$.content[0]",
            keyName: "altnumber",
            keyOffset: 0,
          },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(para.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position at end of chapter (since ca never visible with hidden markers)", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableChapterNode], () => {
        para = $createParaNode();
        $getRoot().append(
          $createImmutableChapterNode("1", false, "2SA 1", "1 ca", "1 cp"),
          para.append($createTextNode("hello")),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: {
            jsonPath: "$.content[0]",
            keyName: "altnumber",
            keyOffset: 0,
          },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(para.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });
  });

  describe("UsjAttributeMarkerLocation", () => {
    it("should position at end of chapter (since ca not yet rendered with editable markers)", () => {
      let chText: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ChapterNode], () => {
        chText = $createTextNode(String.raw`\c${NBSP}1 `);
        $getRoot().append(
          $createChapterNode("1", "2SA 1", "1 ca", "1 cp").append(chText),
          $createParaNode().append($createTextNode("hello")),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: {
            jsonPath: "$.content[0]",
            keyName: "altnumber",
          },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(chText.getKey());
        expect(editorSelection.anchor.offset).toBe(5);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position at end of chapter (since ca not yet rendered with visible markers)", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableChapterNode], () => {
        para = $createParaNode();
        $getRoot().append(
          $createImmutableChapterNode("1", true, "2SA 1", "1 ca", "1 cp"),
          para.append($createTextNode("hello")),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: {
            jsonPath: "$.content[0]",
            keyName: "altnumber",
          },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(para.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position at end of chapter (since ca never visible with hidden markers)", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableChapterNode], () => {
        para = $createParaNode();
        $getRoot().append(
          $createImmutableChapterNode("1", false, "2SA 1", "1 ca", "1 cp"),
          para.append($createTextNode("hello")),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: {
            jsonPath: "$.content[0]",
            keyName: "altnumber",
          },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(para.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });
  });

  describe("UsjClosingAttributeMarkerLocation", () => {
    it("should position at end of chapter (since ca not yet rendered with editable markers)", () => {
      let chText: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ChapterNode], () => {
        chText = $createTextNode(String.raw`\c${NBSP}1 `);
        $getRoot().append(
          $createChapterNode("1", "2SA 1", "1 ca", "1 cp").append(chText),
          $createParaNode().append($createTextNode("hello")),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: {
            jsonPath: "$.content[0]",
            keyName: "altnumber",
            keyClosingMarkerOffset: 2,
          },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(chText.getKey());
        expect(editorSelection.anchor.offset).toBe(5);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position at end of chapter (since ca not yet rendered with visible markers)", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableChapterNode], () => {
        para = $createParaNode();
        $getRoot().append(
          $createImmutableChapterNode("1", true, "2SA 1", "1 ca", "1 cp"),
          para.append($createTextNode("hello")),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: {
            jsonPath: "$.content[0]",
            keyName: "altnumber",
            keyClosingMarkerOffset: 2,
          },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(para.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });

    it("should position at end of chapter (since ca never visible with hidden markers)", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableChapterNode], () => {
        para = $createParaNode();
        $getRoot().append(
          $createImmutableChapterNode("1", false, "2SA 1", "1 ca", "1 cp"),
          para.append($createTextNode("hello")),
        );
      });

      editor.getEditorState().read(() => {
        const usjSelection: SelectionRange = {
          start: {
            jsonPath: "$.content[0]",
            keyName: "altnumber",
            keyClosingMarkerOffset: 2,
          },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        expect(editorSelection.anchor.key).toBe(para.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.isCollapsed()).toBe(true);
      });
    });
  });

  describe("Edge cases for annotation ranges", () => {
    it("should handle selection spanning from marker to text (visible markers)", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableTypedTextNode], () => {
        t1 = $createTextNode("nor sit in the seat");
        $getRoot().append(
          $createParaNode().append(
            $createImmutableTypedTextNode("marker", openingMarkerText("q2")),
            t1,
          ),
        );
      });

      editor.getEditorState().read(() => {
        // Selection from marker location to start of text content
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0]" },
          end: { jsonPath: "$.content[0].content[0]", offset: 0 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        // Start with para jsonPath should position at beginning of paragraph
        const para = t1.getParent();
        expect(editorSelection.anchor.key).toBe(para?.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.focus.key).toBe(t1.getKey());
        expect(editorSelection.focus.offset).toBe(0);
      });
    });

    it("should handle selection from inside the marker to text (visible markers)", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableTypedTextNode], () => {
        t1 = $createTextNode("nor sit in the seat");
        $getRoot().append(
          $createParaNode().append(
            $createImmutableTypedTextNode("marker", openingMarkerText("q2")),
            t1,
          ),
        );
      });

      editor.getEditorState().read(() => {
        // Location with jsonPath pointing to para but with offset (from editor selection)
        // This is what you get when selecting "\q2 " in the editor
        const usjSelection: SelectionRange = {
          start: { jsonPath: "$.content[0]", offset: 0 },
          end: { jsonPath: "$.content[0].content[0]", offset: 0 },
        };
        const editorSelection = $getRangeFromUsjSelection(usjSelection);

        if (!editorSelection) throw new Error("Expected editorSelection to be defined");
        // Start with element jsonPath + offset should position at beginning of paragraph
        const para = t1.getParent();
        expect(editorSelection.anchor.key).toBe(para?.getKey());
        expect(editorSelection.anchor.offset).toBe(0);
        expect(editorSelection.focus.key).toBe(t1.getKey());
        expect(editorSelection.focus.offset).toBe(0);
      });
    });
  });
});

describe("$getRangeFromUsjSelection with annotations (PT-3835)", () => {
  it("resolves coalesced offsets across the annotation into the right text nodes", () => {
    const { editor, t1, t3 } = buildAnnotatedEnvironment(); // "the " |man| " who stands"

    editor.getEditorState().read(() => {
      const usjSelection: SelectionRange = {
        start: { jsonPath: "$.content[0].content[0]", offset: 2 }, // in "the "
        end: { jsonPath: "$.content[0].content[0]", offset: 9 }, // in " who stands"
      };
      const editorSelection = $getRangeFromUsjSelection(usjSelection);

      if (!editorSelection) throw new Error("Expected editorSelection to be defined");
      expect(editorSelection.anchor.key).toBe(t1.getKey());
      expect(editorSelection.anchor.offset).toBe(2);
      expect(editorSelection.focus.key).toBe(t3.getKey());
      expect(editorSelection.focus.offset).toBe(2); // 9 - 4 - 3
    });
  });

  it("resolves an offset inside the annotation", () => {
    const { editor, t2 } = buildAnnotatedEnvironment();

    editor.getEditorState().read(() => {
      const editorSelection = $getRangeFromUsjSelection({
        start: { jsonPath: "$.content[0].content[0]", offset: 5 },
      });

      if (!editorSelection) throw new Error("Expected editorSelection to be defined");
      expect(editorSelection.anchor.key).toBe(t2.getKey());
      expect(editorSelection.anchor.offset).toBe(1);
    });
  });

  it("resolves elements positioned after an annotated run", () => {
    // USJ content: [0]="aaa bb cc ", [1]=char("LORD"), [2]="dd"
    let charText: TextNode;
    let tailText: TextNode;
    const { editor } = createBasicTestEnvironment([TypedMarkNode, ParaNode, CharNode], () => {
      charText = $createTextNode("LORD");
      tailText = $createTextNode("dd");
      $getRoot().append(
        $createParaNode().append(
          $createTextNode("aaa "),
          $createTypedMarkNode({ t: ["1"] }).append($createTextNode("bb")),
          $createTextNode(" cc "),
          $createCharNode("nd").append(charText),
          tailText,
        ),
      );
    });

    editor.getEditorState().read(() => {
      // The char's inner text: index 1 must NOT be shifted by the annotation.
      const charSelection = $getRangeFromUsjSelection({
        start: { jsonPath: "$.content[0].content[1].content[0]", offset: 2 },
      });
      if (!charSelection) throw new Error("Expected charSelection to be defined");
      // Non-null assertion is safe: charText is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(charSelection.anchor.key).toBe(charText!.getKey());
      expect(charSelection.anchor.offset).toBe(2);

      // Trailing text at logical index 2.
      const tailSelection = $getRangeFromUsjSelection({
        start: { jsonPath: "$.content[0].content[2]", offset: 1 },
      });
      if (!tailSelection) throw new Error("Expected tailSelection to be defined");
      // Non-null assertion is safe: tailText is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(tailSelection.anchor.key).toBe(tailText!.getKey());
      expect(tailSelection.anchor.offset).toBe(1);
    });
  });

  it("resolves offsets across adjacent overlapping-annotation marks", () => {
    // Overlapping annotations resolve to FLAT adjacent sibling marks with merged typed IDs
    // (AnnotationPlugin's nested-element resolver squashes any transient nesting).
    let overlapText: TextNode;
    const { editor } = createBasicTestEnvironment([TypedMarkNode, ParaNode], () => {
      overlapText = $createTextNode("cd");
      $getRoot().append(
        $createParaNode().append(
          $createTextNode("ab"),
          $createTypedMarkNode({ outer: ["o1"] }).append($createTextNode("")),
          $createTypedMarkNode({ outer: ["o1"], inner: ["i1"] }).append(overlapText),
          $createTypedMarkNode({ outer: ["o1"] }).append($createTextNode("ef")),
        ),
      );
    });

    editor.getEditorState().read(() => {
      const editorSelection = $getRangeFromUsjSelection({
        start: { jsonPath: "$.content[0].content[0]", offset: 3 }, // "abcdef" → in "cd"
      });
      if (!editorSelection) throw new Error("Expected editorSelection to be defined");
      // Non-null assertion is safe: overlapText is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(editorSelection.anchor.key).toBe(overlapText!.getKey());
      expect(editorSelection.anchor.offset).toBe(1);
    });
  });
});

describe("$getUsjSelectionFromEditor", () => {
  describe("UsjTextContentLocation", () => {
    it("should return undefined when there is no selection", () => {
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        $getRoot().append($createParaNode().append($createTextNode("Hello world")));
      });

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        expect(usjSelection).toBeUndefined();
      });
    });

    it("should return USJ selection with start only for collapsed editor selection", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        t1 = $createTextNode("Hello world");
        $getRoot().append($createParaNode().append(t1));
      });
      // Non-null assertion is safe: t1 is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, t1!, 5);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[0]",
          offset: 5,
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });

    it("should return USJ selection with start only for collapsed editor selection after editable marker", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode], () => {
        t1 = $createTextNode("Hello world");
        const markerTrailingSpace = $createTextNode(NBSP);
        $setState(markerTrailingSpace, textTypeState, "marker-trailing-space");
        $getRoot().append(
          $createParaNode("h").append($createMarkerNode("h", "opening"), markerTrailingSpace, t1),
        );
      });
      // Non-null assertion is safe: t1 is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, t1!, 0);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[0]",
          offset: 0,
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });

    it("should return USJ selection with start and end for forward editor selection", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        t1 = $createTextNode("Hello world");
        $getRoot().append($createParaNode().append(t1));
      });
      // Non-null assertions are safe: t1 is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, t1!, 0, t1!, 5);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[0]",
          offset: 0,
        });
        expect(usjSelection.end).toEqual({
          jsonPath: "$.content[0].content[0]",
          offset: 5,
        });
      });
    });

    it("should ignore non-content nodes when counting content indexes for editable para marker", () => {
      let verseText: TextNode;
      const { editor } = createBasicTestEnvironment(
        [ParaNode, VerseNode, MarkerNode, LineBreakNode],
        () => {
          const markerTrailingSpace = $createTextNode(NBSP);
          $setState(markerTrailingSpace, textTypeState, "marker-trailing-space");
          verseText = $createTextNode("In the beginning");
          $getRoot().append(
            $createParaNode("p").append(
              $createMarkerNode("p", "opening"),
              markerTrailingSpace,
              $createLineBreakNode(),
              $createVerseNode("1", `\v${NBSP}1 `),
              verseText,
            ),
          );
        },
      );
      // Non-null assertion is safe: verseText is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, verseText!, 0);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[1]",
          offset: 0,
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });

    it("should ignore non-content nodes when counting content indexes for text in editable ms", () => {
      let milestoneText: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode, MilestoneNode], () => {
        const markerTrailingSpace = $createTextNode(NBSP);
        $setState(markerTrailingSpace, textTypeState, "marker-trailing-space");
        const msMarkerAttributes = $createTextNode(`${NBSP}|sid="ts.PSA.tree"`);
        $setState(msMarkerAttributes, textTypeState, "attribute");
        milestoneText = $createTextNode("tree");
        $getRoot().append(
          $createParaNode("p").append(
            $createMarkerNode("p", "opening"),
            markerTrailingSpace,
            $createTextNode("He will be like a"),
            $createMilestoneNode("ts-s", "ts.PSA.tree"),
            $createMarkerNode("ts-s", "opening"),
            msMarkerAttributes,
            $createMarkerNode("ts-s", "selfClosing"),
            milestoneText,
          ),
        );
      });
      // Non-null assertion is safe: milestoneText is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, milestoneText!, 0);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[2]",
          offset: 0,
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });

    it("should normalize backward editor selection to start before end", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        t1 = $createTextNode("Hello world");
        $getRoot().append($createParaNode().append(t1));
      });
      // Non-null assertions are safe: t1 is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, t1!, 8, t1!, 3);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[0]",
          offset: 3,
        });
        expect(usjSelection.end).toEqual({
          jsonPath: "$.content[0].content[0]",
          offset: 8,
        });
      });
    });

    it("should return correct jsonPath for editor selection spanning multiple paragraphs", () => {
      let t1: TextNode;
      let t2: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode], () => {
        t1 = $createTextNode("First paragraph");
        t2 = $createTextNode("Second paragraph");
        $getRoot().append($createParaNode().append(t1), $createParaNode().append(t2));
      });
      // Non-null assertions are safe: t1 and t2 are assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, t1!, 5, t2!, 6);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[0]",
          offset: 5,
        });
        expect(usjSelection.end).toEqual({
          jsonPath: "$.content[1].content[0]",
          offset: 6,
        });
      });
    });

    it("should return correct jsonPath for editor selection inside TypedMarkNode", () => {
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        t1 = $createTextNode("Marked text");
        $getRoot().append(
          $createParaNode().append($createTypedMarkNode({ testType: ["testId"] }).append(t1)),
        );
      });
      // Non-null assertions are safe: t1 is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, t1!, 3, t1!, 9);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        // Coalesced-USJ coordinates: the TypedMarkNode is invisible in exported USJ, so the
        // marked text is the para's first (and only) content string.
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[0]",
          offset: 3,
        });
        expect(usjSelection.end).toEqual({
          jsonPath: "$.content[0].content[0]",
          offset: 9,
        });
      });
    });

    it("should anchor an element point on a mark's non-text child at the mark's logical position", () => {
      // The mark wraps a CharNode (e.g. from wrapping a partial CharNode selection in an
      // annotation) rather than plain text, so the offset-0 element point on the mark must not
      // be resolved as if the mark itself were the logical parent (which would drop the mark's
      // own content index and produce offset 0 instead of 1).
      let markNode: TypedMarkNode;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode, CharNode], () => {
        markNode = $createTypedMarkNode({ testType: ["testId"] }).append(
          $createCharNode("nd").append($createTextNode("LORD")),
        );
        $getRoot().append(
          $createParaNode().append($createTextNode("ab"), markNode, $createTextNode("cd")),
        );
      });
      // Non-null assertion is safe: markNode is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, markNode!, 0);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        // USJ content: [0]="ab", [1]=char, [2]="cd" — the boundary before the mark's content is
        // logical index 1 (after "ab", before the char).
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0]",
          offset: 1,
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });

    it("should anchor an element point after a mark's non-text child at the boundary past it", () => {
      let markNode: TypedMarkNode;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode, CharNode], () => {
        markNode = $createTypedMarkNode({ testType: ["testId"] }).append(
          $createCharNode("nd").append($createTextNode("LORD")),
        );
        $getRoot().append(
          $createParaNode().append($createTextNode("ab"), markNode, $createTextNode("cd")),
        );
      });
      // Non-null assertion is safe: markNode is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, markNode!, 1);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        // The boundary after the mark's content is logical index 2 (before "cd").
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0]",
          offset: 2,
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });

    it("should return USJ selection of ImmutableVerseNode as an atomic unit", () => {
      let paraNode: ParaNode;
      let textNode: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableVerseNode], () => {
        paraNode = $createParaNode();
        textNode = $createTextNode("In the beginning");
        $getRoot().append(paraNode.append($createImmutableVerseNode("16"), textNode));
      });
      // Select the first child (verse node) using element-based editor selection on parent
      // offset 0 = before first child, across the verse node to the start of the following text.
      // Non-null assertions are safe: paraNode and textNode are assigned during setup.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, paraNode!, 0, textNode!, 0);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0]",
          offset: 0,
        });
        expect(usjSelection.end).toEqual({
          jsonPath: "$.content[0].content[1]",
          offset: 0,
        });
      });
    });

    it("should return USJ selection of ImmutableVerseNode as an atomic unit with visible markers", () => {
      let paraNode: ParaNode;
      let textNode: TextNode;
      const { editor } = createBasicTestEnvironment(
        [ParaNode, ImmutableTypedTextNode, ImmutableVerseNode],
        () => {
          paraNode = $createParaNode();
          textNode = $createTextNode("In the beginning");
          $getRoot().append(
            paraNode.append(
              $createImmutableTypedTextNode("marker", openingMarkerText("p")),
              $createImmutableVerseNode("16"),
              textNode,
            ),
          );
        },
      );
      // Select the first child (verse node) using element-based editor selection on parent
      // offset 0 = before first child, across the verse node to the start of the following text.
      // Non-null assertions are safe: paraNode and textNode are assigned during setup.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, paraNode!, 1, textNode!, 0);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0]",
          offset: 0,
        });
        expect(usjSelection.end).toEqual({
          jsonPath: "$.content[0].content[1]",
          offset: 0,
        });
      });
    });

    it("should tell the closing visible marker apart from the opening one (a span framed by its own glyphs)", () => {
      // Both ends are element points on the same CharNode, differing only in which glyph they sit
      // before. Keyed on the parent alone they collapsed to one location, and everything that maps
      // the range back — the Markers view's USFM copy among them — saw an empty selection.
      let char: CharNode;
      const { editor } = createBasicTestEnvironment(
        [ParaNode, CharNode, ImmutableTypedTextNode],
        () => {
          char = $createCharNode("nd");
          $getRoot().append(
            $createParaNode().append(
              char.append(
                $createImmutableTypedTextNode("marker", openingMarkerText("nd")),
                $createTextNode("David"),
                $createImmutableTypedTextNode("marker", closingMarkerText("nd")),
              ),
            ),
          );
        },
      );
      // Non-null assertion is safe: char is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, char!, 0, char!, 2);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({ jsonPath: "$.content[0].content[0]" });
        expect(usjSelection.end).toEqual({
          jsonPath: "$.content[0].content[0]",
          closingMarkerOffset: 0,
        });
      });
    });

    it("should emit element jsonPath + offset when cursor is at start of para with visible marker", () => {
      let para: ParaNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableTypedTextNode], () => {
        para = $createParaNode();
        $getRoot().append(
          para.append(
            $createImmutableTypedTextNode("marker", openingMarkerText("q2")),
            $createTextNode("nor sit in the seat"),
          ),
        );
      });
      // Non-null assertion is safe: para is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, para!, 0);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({ jsonPath: "$.content[0]" });
        expect(usjSelection.end).toBeUndefined();
      });
    });

    it("should emit selection spanning from para start to text when para has visible marker", () => {
      let para: ParaNode;
      let t1: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, ImmutableTypedTextNode], () => {
        para = $createParaNode();
        t1 = $createTextNode("nor sit in the seat");
        $getRoot().append(
          para.append($createImmutableTypedTextNode("marker", openingMarkerText("q2")), t1),
        );
      });
      // Non-null assertions are safe: para and t1 are assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, para!, 0, t1!, 0);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({ jsonPath: "$.content[0]" });
        expect(usjSelection.end).toEqual({ jsonPath: "$.content[0].content[0]", offset: 0 });
      });
    });
  });

  describe("UsjMarkerLocation", () => {
    it("should emit UsjMarkerLocation when cursor is at offset 0 in editable opening marker", () => {
      let markerNode: MarkerNode;
      const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode], () => {
        markerNode = $createMarkerNode("p", "opening");
        $getRoot().append($createParaNode().append(markerNode, $createTextNode("Hello")));
      });
      // Non-null assertion is safe: markerNode is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, markerNode!, 0);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0]",
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });

    it("should ignore non-content nodes when counting content indexes for editable marker in ms", () => {
      let msOpeningMarker: MarkerNode;
      const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode, MilestoneNode], () => {
        const markerTrailingSpace = $createTextNode(NBSP);
        $setState(markerTrailingSpace, textTypeState, "marker-trailing-space");
        const msMarkerAttributes = $createTextNode(`${NBSP}|sid="ts.PSA.tree"`);
        $setState(msMarkerAttributes, textTypeState, "attribute");
        msOpeningMarker = $createMarkerNode("ts-s", "opening");
        $getRoot().append(
          $createParaNode("p").append(
            $createMarkerNode("p", "opening"),
            markerTrailingSpace,
            $createTextNode("He will be like a"),
            $createMilestoneNode("ts-s", "ts.PSA.tree"),
            msOpeningMarker,
            msMarkerAttributes,
            $createMarkerNode("ts-s", "selfClosing"),
            $createTextNode("tree"),
          ),
        );
      });
      // Non-null assertion is safe: msOpeningMarker is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, msOpeningMarker!, 0);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[1]",
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });
  });

  describe("UsjPropertyValueLocation", () => {
    it("should emit UsjPropertyValueLocation when cursor is after backslash in editable opening marker", () => {
      let markerNode: MarkerNode;
      const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode], () => {
        markerNode = $createMarkerNode("p", "opening");
        $getRoot().append($createParaNode().append(markerNode, $createTextNode("Hello")));
      });
      // Non-null assertion is safe: markerNode is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, markerNode!, 1);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].marker",
          propertyOffset: 0,
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });

    it("should ignore non-content nodes when counting content indexes for property in editable ms", () => {
      let msOpeningMarker: MarkerNode;
      const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode, MilestoneNode], () => {
        const markerTrailingSpace = $createTextNode(NBSP);
        $setState(markerTrailingSpace, textTypeState, "marker-trailing-space");
        const msMarkerAttributes = $createTextNode(`${NBSP}|sid="ts.PSA.tree"`);
        $setState(msMarkerAttributes, textTypeState, "attribute");
        msOpeningMarker = $createMarkerNode("ts-s", "opening");
        $getRoot().append(
          $createParaNode("p").append(
            $createMarkerNode("p", "opening"),
            markerTrailingSpace,
            $createTextNode("He will be like a"),
            $createMilestoneNode("ts-s", "ts.PSA.tree"),
            msOpeningMarker,
            msMarkerAttributes,
            $createMarkerNode("ts-s", "selfClosing"),
            $createTextNode("tree"),
          ),
        );
      });
      // Non-null assertion is safe: msOpeningMarker is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, msOpeningMarker!, 1);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[1].marker",
          propertyOffset: 0,
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });
  });

  describe("UsjClosingMarkerLocation", () => {
    it("should emit UsjClosingMarkerLocation when cursor is in editable closing marker", () => {
      let closingMarker: MarkerNode;
      const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode], () => {
        closingMarker = $createMarkerNode("nd", "closing");
        $getRoot().append(
          $createParaNode().append(
            $createMarkerNode("nd", "opening"),
            $createTextNode("name"),
            closingMarker,
          ),
        );
      });
      // Non-null assertion is safe: closingMarker is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, closingMarker!, 1);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0]",
          closingMarkerOffset: 1,
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });

    it("should ignore non-content nodes when counting content indexes for editable closing marker in ms", () => {
      let msClosingMarker: MarkerNode;
      const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode, MilestoneNode], () => {
        const markerTrailingSpace = $createTextNode(NBSP);
        $setState(markerTrailingSpace, textTypeState, "marker-trailing-space");
        const msMarkerAttributes = $createTextNode(`${NBSP}|sid="ts.PSA.tree"`);
        $setState(msMarkerAttributes, textTypeState, "attribute");
        msClosingMarker = $createMarkerNode("ts-s", "selfClosing");
        $getRoot().append(
          $createParaNode("p").append(
            $createMarkerNode("p", "opening"),
            markerTrailingSpace,
            $createTextNode("He will be like a"),
            $createMilestoneNode("ts-s", "ts.PSA.tree"),
            $createMarkerNode("ts-s", "opening"),
            msMarkerAttributes,
            msClosingMarker,
            $createTextNode("tree"),
          ),
        );
      });
      // Non-null assertion is safe: msClosingMarker is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, msClosingMarker!, 1);

      editor.getEditorState().read(() => {
        const usjSelection = $getUsjSelectionFromEditor();

        if (!usjSelection) throw new Error("Expected usjSelection to be defined");
        expect(usjSelection.start).toEqual({
          jsonPath: "$.content[0].content[1]",
          closingMarkerOffset: 1,
        });
        expect(usjSelection.end).toBeUndefined();
      });
    });
  });
});

describe("$getUsjSelectionFromEditor with annotations (PT-3835)", () => {
  // Para text: "the man who stands" — "man" is annotated (see buildAnnotatedEnvironment,
  // placed after the tests). USJ has ONE string: content[0].content[0], so all offsets are
  // absolute within that string.
  it("reports coalesced USJ coordinates for text after the annotation", () => {
    const { editor, t3 } = buildAnnotatedEnvironment();
    updateSelection(editor, t3, 1, t3, 4); // "who" within " who stands"

    editor.getEditorState().read(() => {
      expect($getUsjSelectionFromEditor()).toEqual({
        start: { jsonPath: "$.content[0].content[0]", offset: 8 },
        end: { jsonPath: "$.content[0].content[0]", offset: 11 },
      });
    });
  });

  it("reports coalesced USJ coordinates for text inside the annotation", () => {
    const { editor, t2 } = buildAnnotatedEnvironment();
    updateSelection(editor, t2, 0, t2, 3); // "man"

    editor.getEditorState().read(() => {
      expect($getUsjSelectionFromEditor()).toEqual({
        start: { jsonPath: "$.content[0].content[0]", offset: 4 },
        end: { jsonPath: "$.content[0].content[0]", offset: 7 },
      });
    });
  });

  it("reports the same location as an unannotated document", () => {
    // Unannotated equivalent: one text node "the man who stands".
    let plain: TextNode;
    const { editor: plainEditor } = createBasicTestEnvironment([TypedMarkNode, ParaNode], () => {
      plain = $createTextNode("the man who stands");
      $getRoot().append($createParaNode().append(plain));
    });
    // Non-null assertions are safe: plain is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    updateSelection(plainEditor, plain!, 8, plain!, 11);
    let expected: SelectionRange | undefined;
    plainEditor.getEditorState().read(() => {
      expected = $getUsjSelectionFromEditor();
    });

    const { editor, t3 } = buildAnnotatedEnvironment();
    updateSelection(editor, t3, 1, t3, 4); // same "who" range
    editor.getEditorState().read(() => {
      expect($getUsjSelectionFromEditor()).toEqual(expected);
    });
  });
});

/** Build "the " |man| " who stands" where "man" is annotated. */
function buildAnnotatedEnvironment() {
  let t1: TextNode;
  let t2: TextNode;
  let t3: TextNode;
  const { editor } = createBasicTestEnvironment([TypedMarkNode, ParaNode], () => {
    t1 = $createTextNode("the ");
    t2 = $createTextNode("man");
    t3 = $createTextNode(" who stands");
    $getRoot().append(
      $createParaNode().append(t1, $createTypedMarkNode({ spelling: ["s1"] }).append(t2), t3),
    );
  });
  // Non-null assertions are safe: the initial state callback ran synchronously.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { editor, t1: t1!, t2: t2!, t3: t3! };
}

describe("round-trip conversion", () => {
  it("should round-trip UsjTextContentLocation selection", () => {
    let t1: TextNode;
    const { editor } = createBasicTestEnvironment([ParaNode], () => {
      t1 = $createTextNode("Hello world");
      $getRoot().append($createParaNode().append(t1));
    });
    // Non-null assertions are safe: t1 is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    updateSelection(editor, t1!, 2, t1!, 8);

    editor.getEditorState().read(() => {
      // Get the USJ selection from the editor
      const usjSelection = $getUsjSelectionFromEditor();
      if (!usjSelection) throw new Error("Expected usjSelection to be defined");

      // Convert back to an editor selection
      const editorSelection = $getRangeFromUsjSelection(usjSelection);
      if (!editorSelection) throw new Error("Expected editorSelection to be defined");

      // Verify it matches the original
      expect(editorSelection.anchor.key).toBe(t1.getKey());
      expect(editorSelection.anchor.offset).toBe(2);
      expect(editorSelection.focus.key).toBe(t1.getKey());
      expect(editorSelection.focus.offset).toBe(8);
    });
  });

  it("should round-trip UsjMarkerLocation selection with editable markers", () => {
    let markerNode: MarkerNode;
    const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode], () => {
      markerNode = $createMarkerNode("p", "opening");
      $getRoot().append($createParaNode().append(markerNode, $createTextNode("Hello")));
    });
    // Non-null assertion is safe: markerNode is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    updateSelection(editor, markerNode!, 0);

    editor.getEditorState().read(() => {
      const usjSelection = $getUsjSelectionFromEditor();
      if (!usjSelection) throw new Error("Expected usjSelection to be defined");

      const editorSelection = $getRangeFromUsjSelection(usjSelection);
      if (!editorSelection) throw new Error("Expected editorSelection to be defined");

      expect(editorSelection.anchor.key).toBe(markerNode.getKey());
      expect(editorSelection.anchor.offset).toBe(0);
    });
  });

  it("should round-trip UsjClosingMarkerLocation selection with editable markers", () => {
    let closingMarker: MarkerNode;
    const { editor } = createBasicTestEnvironment([ParaNode, MarkerNode], () => {
      closingMarker = $createMarkerNode("nd", "closing");
      $getRoot().append(
        $createParaNode().append(
          $createMarkerNode("nd", "opening"),
          $createTextNode("name"),
          closingMarker,
        ),
      );
    });
    // Non-null assertion is safe: closingMarker is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    updateSelection(editor, closingMarker!, 2);

    editor.getEditorState().read(() => {
      const usjSelection = $getUsjSelectionFromEditor();
      if (!usjSelection) throw new Error("Expected usjSelection to be defined");

      const editorSelection = $getRangeFromUsjSelection(usjSelection);
      if (!editorSelection) throw new Error("Expected editorSelection to be defined");

      expect(editorSelection.anchor.key).toBe(closingMarker.getKey());
      expect(editorSelection.anchor.offset).toBe(2);
    });
  });
});

// USJ locations are indexes into the source USJ's content. The block verse layout splits any
// paragraph that spans verses into one fragment per verse, so those indexes no longer describe the
// source document and a location taken from this tree would be confidently wrong.
describe("block verse layout", () => {
  const blockVerseNodes = [VerseBlockNode, ParaNode, ImmutableVerseNode, TextNode];

  /** A one-verse chapter, laid out inline or in a verse block, with the caret in its text. */
  function createChapter(isBlockLayout: boolean) {
    let text: TextNode | undefined;
    const { editor } = createBasicTestEnvironment(blockVerseNodes, () => {
      text = $createTextNode("the first verse ");
      const para = $createParaNode("p");
      const verseBlock = $createVerseBlockNode("1");
      $getRoot().append(
        isBlockLayout
          ? verseBlock.append(para.append($createImmutableVerseNode("1"), text))
          : para.append($createImmutableVerseNode("1"), text),
      );
    });
    if (!text) throw new Error("expected the verse text to be created");
    updateSelection(editor, text, 1);
    return editor;
  }

  it("reports no location for a caret inside a verse block", () => {
    const editor = createChapter(true);

    expect(editor.getEditorState().read($getUsjSelectionFromEditor)).toBeUndefined();
  });

  // The control: the same caret in the same content resolves normally when it is not in a block,
  // so the test above is about the layout and not about the caret being missing.
  it("reports a location for the same caret in the inline layout", () => {
    const editor = createChapter(false);

    expect(editor.getEditorState().read($getUsjSelectionFromEditor)).toBeDefined();
  });

  it("refuses to resolve a USJ location back to a range in a verse block document", () => {
    const editor = createChapter(true);

    const range = editor
      .getEditorState()
      .read(() => $getRangeFromUsjSelection({ start: { jsonPath: "$.content[0]", offset: 0 } }));

    expect(range).toBeUndefined();
  });
});

describe("USJ locations with an implied paragraph", () => {
  // Verses before a chapter's first paragraph marker load into an ImpliedParaNode, which the
  // editor→USJ conversion unwraps: the editor root is
  //   [chapter, impliedPara(verse 1, "one "), para(verse 5, "are you kidding me")]
  // while the USJ content is
  //   [0]=chapter, [1]=verse 1, [2]="one ", [3]=para(verse 5, "are you kidding me")
  function buildImpliedParaEnvironment() {
    let impliedPara: ImpliedParaNode;
    let impliedText: TextNode;
    let paraText: TextNode;
    const { editor } = createBasicTestEnvironment(
      [ParaNode, ImpliedParaNode, ImmutableChapterNode, ImmutableVerseNode],
      () => {
        impliedPara = $createImpliedParaNode();
        impliedText = $createTextNode("one ");
        paraText = $createTextNode("are you kidding me");
        $getRoot().append(
          $createImmutableChapterNode("1"),
          impliedPara.append($createImmutableVerseNode("1"), impliedText),
          $createParaNode().append($createImmutableVerseNode("5"), paraText),
        );
      },
    );
    // Non-null assertions are safe: all three are assigned during the setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return { editor, impliedPara: impliedPara!, impliedText: impliedText!, paraText: paraText! };
  }

  describe("$getUsjSelectionFromEditor", () => {
    it("indexes text in a paragraph after the implied paragraph as the USJ does", () => {
      const { editor, paraText } = buildImpliedParaEnvironment();
      updateSelection(editor, paraText, 8, paraText, 15); // "kidding"

      editor.getEditorState().read(() => {
        expect($getUsjSelectionFromEditor()).toEqual({
          start: { jsonPath: "$.content[3].content[1]", offset: 8 },
          end: { jsonPath: "$.content[3].content[1]", offset: 15 },
        });
      });
    });

    it("indexes text inside the implied paragraph as root content", () => {
      const { editor, impliedText } = buildImpliedParaEnvironment();
      updateSelection(editor, impliedText, 0, impliedText, 3); // "one"

      editor.getEditorState().read(() => {
        expect($getUsjSelectionFromEditor()).toEqual({
          start: { jsonPath: "$.content[2]", offset: 0 },
          end: { jsonPath: "$.content[2]", offset: 3 },
        });
      });
    });

    it("maps an element point inside the implied paragraph to a root boundary", () => {
      const { editor, impliedPara } = buildImpliedParaEnvironment();
      // Between verse 1 and "one ": root boundary 2 (after the verse, before the text).
      updateSelection(editor, impliedPara, 1);

      editor.getEditorState().read(() => {
        expect($getUsjSelectionFromEditor()).toEqual({ start: { jsonPath: "$", offset: 2 } });
      });
    });

    it("anchors an element point on a mark inside the implied paragraph at the mark's root position", () => {
      let markNode: TypedMarkNode;
      const { editor } = createBasicTestEnvironment(
        [ParaNode, ImpliedParaNode, ImmutableChapterNode, TypedMarkNode, CharNode],
        () => {
          markNode = $createTypedMarkNode({ testType: ["testId"] }).append(
            $createCharNode("nd").append($createTextNode("LORD")),
          );
          $getRoot().append(
            $createImmutableChapterNode("1"),
            $createImpliedParaNode().append($createTextNode("ab"), markNode, $createTextNode("cd")),
          );
        },
      );
      // Non-null assertion is safe: markNode is assigned during the test setup callback.
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateSelection(editor, markNode!, 0);

      editor.getEditorState().read(() => {
        // USJ content: [0]=chapter, [1]="ab", [2]=char, [3]="cd" — before the char is boundary 2.
        expect($getUsjSelectionFromEditor()).toEqual({ start: { jsonPath: "$", offset: 2 } });
      });
    });

    it("maps the element point at the implied paragraph's end to the root boundary after it", () => {
      const { editor, impliedPara } = buildImpliedParaEnvironment();
      updateSelection(editor, impliedPara, 2);

      editor.getEditorState().read(() => {
        expect($getUsjSelectionFromEditor()).toEqual({ start: { jsonPath: "$", offset: 3 } });
      });
    });
  });

  describe("$getRangeFromUsjSelection", () => {
    it("resolves text in a paragraph after the implied paragraph", () => {
      const { editor, paraText } = buildImpliedParaEnvironment();

      editor.getEditorState().read(() => {
        const range = $getRangeFromUsjSelection({
          start: { jsonPath: "$.content[3].content[1]", offset: 8 },
        });

        if (!range) throw new Error("Expected range to be defined");
        expect(range.anchor.key).toBe(paraText.getKey());
        expect(range.anchor.offset).toBe(8);
      });
    });

    it("resolves root text content into the implied paragraph", () => {
      const { editor, impliedText } = buildImpliedParaEnvironment();

      editor.getEditorState().read(() => {
        const range = $getRangeFromUsjSelection({ start: { jsonPath: "$.content[2]", offset: 1 } });

        if (!range) throw new Error("Expected range to be defined");
        expect(range.anchor.key).toBe(impliedText.getKey());
        expect(range.anchor.offset).toBe(1);
      });
    });

    it("resolves a root boundary inside the implied paragraph to an element point within it", () => {
      const { editor, impliedPara } = buildImpliedParaEnvironment();

      editor.getEditorState().read(() => {
        const range = $getRangeFromUsjSelection({ start: { jsonPath: "$", offset: 2 } });

        if (!range) throw new Error("Expected range to be defined");
        expect(range.anchor.key).toBe(impliedPara.getKey());
        expect(range.anchor.offset).toBe(1);
      });
    });

    it("round-trips every selection point in the chapter", () => {
      const { editor, impliedPara, impliedText, paraText } = buildImpliedParaEnvironment();
      const points: [TextNode | ImpliedParaNode, number][] = [
        [impliedPara, 0],
        [impliedPara, 1],
        [impliedText, 0],
        [impliedText, 2],
        [impliedText, 4],
        [paraText, 0],
        [paraText, 8],
        [paraText, 18],
      ];

      for (const [node, offset] of points) {
        updateSelection(editor, node, offset);
        editor.getEditorState().read(() => {
          const usjSelection = $getUsjSelectionFromEditor();
          if (!usjSelection) throw new Error("Expected usjSelection to be defined");
          const range = $getRangeFromUsjSelection(usjSelection);
          if (!range) throw new Error(`Expected a range for ${JSON.stringify(usjSelection)}`);
          expect({ key: range.anchor.key, offset: range.anchor.offset }).toEqual({
            key: node.getKey(),
            offset,
          });
        });
      }
    });
  });
});

describe("USJ locations at transparent-wrapper boundaries", () => {
  const nodes = [
    ParaNode,
    ImpliedParaNode,
    ImmutableChapterNode,
    ImmutableVerseNode,
    ImmutableTypedTextNode,
    MarkerNode,
    TypedMarkNode,
    CharNode,
    LineBreakNode,
  ];

  /** Asserts the caret at `node`/`offset` survives `getSelection` → `setSelection` unchanged. */
  function expectCaretRoundTrip(
    editor: LexicalEditor,
    node: TextNode | ElementNode,
    offset: number,
  ) {
    updateSelection(editor, node, offset);
    editor.getEditorState().read(() => {
      const usjSelection = $getUsjSelectionFromEditor();
      if (!usjSelection) throw new Error("Expected usjSelection to be defined");
      const range = $getRangeFromUsjSelection(usjSelection);
      if (!range) throw new Error(`Expected a range for ${JSON.stringify(usjSelection)}`);
      expect({ key: range.anchor.key, offset: range.anchor.offset }).toEqual({
        key: node.getKey(),
        offset,
      });
    });
  }

  function getStart(editor: LexicalEditor) {
    return editor.getEditorState().read(() => $getUsjSelectionFromEditor()?.start);
  }

  it("locates a caret host in an implied paragraph beside it, not at the document start", () => {
    let caretHost: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      caretHost = $createTextNode(CURSOR_PLACEHOLDER_CHAR);
      $getRoot().append(
        $createImmutableChapterNode("2"),
        // The empty-verse caret guard's host after an empty last verse.
        $createImpliedParaNode().append(
          $createImmutableVerseNode("1"),
          $createTextNode("one "),
          $createImmutableVerseNode("2"),
          caretHost,
        ),
        $createParaNode().append($createTextNode("three")),
      );
    });
    // Non-null assertion is safe: caretHost is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    updateSelection(editor, caretHost!, 1);

    // USJ content: [0]=chapter, [1]=verse 1, [2]="one ", [3]=verse 2, [4]=para.
    expect(getStart(editor)).toEqual({ jsonPath: "$", offset: 4 });
  });

  it("locates a marker glyph in an implied paragraph at a resolvable content position", () => {
    let glyph: MarkerNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      glyph = $createMarkerNode("ts", "selfClosing");
      $getRoot().append(
        $createImmutableChapterNode("2"),
        $createImpliedParaNode().append($createTextNode("aaa "), glyph, $createTextNode("bbb")),
      );
    });
    // Non-null assertion is safe: glyph is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    updateSelection(editor, glyph!, 1);

    // USJ content: [0]=chapter, [1]="aaa bbb". After the glyph is offset 4 in the text.
    const start = getStart(editor);
    expect(start).toEqual({ jsonPath: "$.content[1]", offset: 4 });
    editor.getEditorState().read(() => {
      if (!start) throw new Error("Expected a start location");
      expect($getRangeFromUsjSelection({ start })).toBeDefined();
    });
  });

  it("locates an element point before a visible glyph in an implied paragraph as content", () => {
    let impliedPara: ImpliedParaNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      impliedPara = $createImpliedParaNode();
      $getRoot().append(
        $createImmutableChapterNode("2"),
        impliedPara.append(
          $createTextNode("aaa "),
          $createImmutableTypedTextNode("marker", "\\ts\\*"),
          $createTextNode("bbb"),
        ),
      );
    });
    // Non-null assertion is safe: impliedPara is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    updateSelection(editor, impliedPara!, 1);

    expect(getStart(editor)).toEqual({ jsonPath: "$.content[1]", offset: 4 });
  });

  it("round-trips a caret in an empty implied paragraph left by Enter", () => {
    let emptyImpliedPara: ImpliedParaNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      emptyImpliedPara = $createImpliedParaNode();
      $getRoot().append(
        $createImmutableChapterNode("1"),
        $createImpliedParaNode().append($createImmutableVerseNode("1"), $createTextNode("one ")),
        emptyImpliedPara,
        $createParaNode().append($createImmutableVerseNode("3"), $createTextNode("three")),
      );
    });
    // Non-null assertion is safe: emptyImpliedPara is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    updateSelection(editor, emptyImpliedPara!, 0);

    // Not the end of the document: the boundary before the para, USJ index 3.
    expect(getStart(editor)).toEqual({ jsonPath: "$", offset: 3 });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expectCaretRoundTrip(editor, emptyImpliedPara!, 0);
  });

  it("round-trips a caret in an empty document's implied paragraph", () => {
    let impliedPara: ImpliedParaNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      impliedPara = $createImpliedParaNode();
      $getRoot().append(impliedPara);
    });

    // Non-null assertion is safe: impliedPara is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expectCaretRoundTrip(editor, impliedPara!, 0);
  });

  it("round-trips carets around line breaks in an implied paragraph", () => {
    let impliedPara: ImpliedParaNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      impliedPara = $createImpliedParaNode();
      $getRoot().append(
        $createImmutableChapterNode("1"),
        impliedPara.append(
          $createLineBreakNode(),
          $createImmutableVerseNode("1"),
          $createTextNode("one "),
          $createLineBreakNode(),
          $createImmutableVerseNode("2"),
          $createTextNode("two"),
        ),
      );
    });

    // Non-null assertions are safe: impliedPara is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expectCaretRoundTrip(editor, impliedPara!, 0);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expectCaretRoundTrip(editor, impliedPara!, 3);
  });

  it("keeps a caret at the end of one implied paragraph off the next one's line", () => {
    let one: TextNode;
    let two: TextNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      one = $createTextNode("one ");
      two = $createTextNode("two");
      $getRoot().append(
        $createImmutableChapterNode("1"),
        $createImpliedParaNode().append($createImmutableVerseNode("1"), one),
        $createImpliedParaNode().append(two),
      );
    });

    // Non-null assertions are safe: one and two are assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expectCaretRoundTrip(editor, one!, 4);

    // A range over "two" starts on its own line, not at the end of the line before.
    editor.getEditorState().read(() => {
      const range = $getRangeFromUsjSelection({
        start: { jsonPath: "$.content[2]", offset: 4 },
        end: { jsonPath: "$.content[2]", offset: 7 },
      });
      if (!range) throw new Error("Expected range to be defined");
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect([range.anchor.key, range.anchor.offset]).toEqual([two!.getKey(), 0]);
    });
  });

  it("resolves a boundary inside a multi-child mark in an implied paragraph exactly", () => {
    let mark: TypedMarkNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      mark = $createTypedMarkNode({ comment: ["c1"] });
      $getRoot().append(
        $createImmutableChapterNode("1"),
        $createImpliedParaNode().append(
          $createImmutableVerseNode("1"),
          $createTextNode("In the "),
          mark.append(
            $createTextNode("beginning "),
            $createImmutableVerseNode("2"),
            $createTextNode("God"),
          ),
          $createTextNode(" created"),
        ),
      );
    });

    editor.getEditorState().read(() => {
      // USJ content: [0]=chapter, [1]=verse 1, [2]="In the beginning ", [3]=verse 2, ...
      const range = $getRangeFromUsjSelection({ start: { jsonPath: "$", offset: 3 } });
      if (!range) throw new Error("Expected range to be defined");
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect([range.anchor.key, range.anchor.offset]).toEqual([mark!.getKey(), 1]);
    });
  });

  it("round-trips an element point between a mark's children", () => {
    let mark: TypedMarkNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      mark = $createTypedMarkNode({ comment: ["c1"] });
      $getRoot().append(
        $createParaNode().append(
          $createTextNode("xy"),
          mark.append(
            $createTextNode("ab"),
            $createCharNode("nd").append($createTextNode("LORD")),
            $createTextNode("cd"),
          ),
          $createTextNode("ef"),
        ),
      );
    });
    // Non-null assertion is safe: mark is assigned during the test setup callback.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    updateSelection(editor, mark!, 1);

    // USJ content of the para: [0]="xyab", [1]=char, [2]="cdef".
    expect(getStart(editor)).toEqual({ jsonPath: "$.content[0]", offset: 1 });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expectCaretRoundTrip(editor, mark!, 1);
  });

  it("resolves a non-numeric offset on a para with no content instead of throwing", () => {
    let para: ParaNode;
    const { editor } = createBasicTestEnvironment(nodes, () => {
      para = $createParaNode();
      $getRoot().append(para);
    });

    editor.getEditorState().read(() => {
      const range = $getRangeFromUsjSelection({
        start: { jsonPath: "$.content[0]", offset: Number.NaN },
      });
      if (!range) throw new Error("Expected range to be defined");
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect([range.anchor.key, range.anchor.offset]).toEqual([para!.getKey(), 0]);
    });
  });
});
