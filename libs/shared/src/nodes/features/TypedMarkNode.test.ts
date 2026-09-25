import { displayRunDescriptor } from "../../displayRun/displayRunRegistry.js";
import { $createAttributeRunNode, $isAttributeRunNode } from "../usj/AttributeRunNode.js";
import {
  $chapterAltnumberRunPieces,
  $chapterGlyphTextNode,
  $noteCategoryRunPieces,
  $noteEditableCallerNode,
} from "../usj/attributeDisplay.utils.js";
import { $createChapterNode, ChapterNode } from "../usj/ChapterNode.js";
import { $createCharNode, CharNode } from "../usj/CharNode.js";
import { $syncDisplayRun } from "../usj/displayRunSync.utils.js";
import { $createMilestoneNode, MilestoneNode } from "../usj/MilestoneNode.js";
import { NBSP } from "../usj/node-constants.js";
import { $createNoteNode, NoteNode } from "../usj/NoteNode.js";
import { getEditableCallerText, getVisibleOpenMarkerText } from "../usj/node.utils.js";
import { $createParaNode, ParaNode } from "../usj/ParaNode.js";
import { usjBaseNodes } from "../usj/index.js";
import { createBasicTestEnvironment } from "../usj/test.utils.js";
import { $createVerseNode, VerseNode } from "../usj/VerseNode.js";
import { textTypeState } from "../collab/delta.state.js";
import { $createMarkerNode } from "./MarkerNode.js";
import {
  $createTypedMarkNode,
  $isTypedMarkNode,
  TypedMarkNode,
  TypedMarkOnMouseEnter,
  TypedMarkOnMouseLeave,
} from "./TypedMarkNode.js";
import { $wrapSelectionInTypedMarkNode } from "./typedMarkWrap.utils.js";
import {
  $createRangeSelection,
  $createTextNode,
  $getRoot,
  $getState,
  $isTextNode,
  $setState,
  EditorConfig,
  LexicalNode,
  TextNode,
} from "lexical";
import { vi } from "vitest";

const testType1 = "testType1";
const testType2 = "testType2";
const testID1 = "testID1";
const testID2 = "testID2";

describe("TypedMarkNode", () => {
  describe("hasID()", () => {
    it("should work the specified type", () => {
      const { editor } = createBasicTestEnvironment([TypedMarkNode]);
      editor.update(() => {
        const node = $createTypedMarkNode({
          [testType1]: [testID1, testID2],
          [testType2]: [testID2],
        });
        expect(node).toBeDefined();

        expect(node.hasID(testType1, testID1)).toBe(true);
        expect(node.hasID(testType1, testID2)).toBe(true);
        expect(node.hasID(testType2, testID2)).toBe(true);
        expect(node.hasID(testType1, "unknownID")).toBe(false);
        expect(node.hasID(testType1, undefined as unknown as string)).toBe(false);
        expect(node.hasID(testType1, null as unknown as string)).toBe(false);
        expect(node.hasID("noType", testID1)).toBe(false);
        expect(node.hasID(undefined as unknown as string, testID1)).toBe(false);
        expect(node.hasID(null as unknown as string, testID1)).toBe(false);
      });
    });
  });

  describe("addID()", () => {
    it("should add IDs to the specified type", () => {
      const { editor } = createBasicTestEnvironment([TypedMarkNode]);
      editor.update(() => {
        const node = $createTypedMarkNode({});
        expect(node).toBeDefined();

        node.addID(testType1, testID1);

        expect(node.getTypedIDs()).toEqual({ [testType1]: [testID1] });

        node.addID(testType2, testID2);

        expect(node.getTypedIDs()).toEqual({
          [testType1]: [testID1],
          [testType2]: [testID2],
        });

        node.addID(testType1, testID2);

        expect(node.getTypedIDs()).toEqual({
          [testType1]: [testID1, testID2],
          [testType2]: [testID2],
        });
      });
    });
  });

  describe("deleteID()", () => {
    it("should delete IDs from the specified type", () => {
      const { editor } = createBasicTestEnvironment([TypedMarkNode]);
      editor.update(() => {
        const node = $createTypedMarkNode({
          [testType1]: [testID1, testID2],
          [testType2]: [testID2],
        });
        expect(node).toBeDefined();

        node.deleteID(testType1, testID1);

        expect(node.getTypedIDs()).toEqual({ [testType1]: [testID2], [testType2]: [testID2] });

        node.deleteID(testType2, testID2);

        expect(node.getTypedIDs()).toEqual({
          [testType1]: [testID2],
          [testType2]: [],
        });

        node.deleteID(testType1, testID2);

        expect(node.getTypedIDs()).toEqual({
          [testType1]: [],
          [testType2]: [],
        });
      });
    });

    it("should unwrap the node when the final ID is removed", () => {
      let paraNode: ParaNode;
      let markNode: TypedMarkNode | null = null;
      let textNode: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        paraNode = $createParaNode();
        markNode = $createTypedMarkNode({
          [testType1]: [testID1],
        });
        textNode = $createTextNode("example");
        $getRoot().append(paraNode.append(markNode.append(textNode)));
      });

      editor.update(() => {
        if (!markNode) throw new Error("Expected mark node to exist");
        markNode.deleteID(testType1, testID1);

        expect(markNode.getParent()).toBeNull();
        expect(paraNode.getChildrenSize()).toBe(1);
        expect(paraNode.getFirstChild()?.getKey()).toBe(textNode.getKey());
      });
    });

    it("should merge adjacent marks after removing an overlapping ID", () => {
      const grammarType = testType1;
      const grammarId = testID1;
      const spellingType = testType2;
      const spellingId = testID2;
      const onClickLeft = vi.fn();
      const onClickRight = vi.fn();
      const onRemoveSpelling = vi.fn();
      const onRemoveRight = vi.fn();
      let paraNode: ParaNode;
      let leftMark: TypedMarkNode | null = null;
      let rightMark: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        paraNode = $createParaNode();
        leftMark = $createTypedMarkNode({
          [grammarType]: [grammarId],
          [spellingType]: [spellingId],
        });
        rightMark = $createTypedMarkNode({
          [grammarType]: [grammarId],
        });
        leftMark.addID(grammarType, grammarId, onClickLeft);
        leftMark.addID(spellingType, spellingId, undefined, onRemoveSpelling);
        rightMark.addID(grammarType, grammarId, onClickRight, onRemoveRight);
        $getRoot().append(
          paraNode.append(
            leftMark.append($createTextNode("man")),
            rightMark.append($createTextNode(" who")),
          ),
        );
      });

      editor.update(() => {
        if (!leftMark || !rightMark) throw new Error("Expected mark nodes to exist");

        leftMark.deleteID(spellingType, spellingId);

        expect(rightMark.getParent()).toBeNull();
        expect(paraNode.getChildrenSize()).toBe(1);

        const merged = paraNode.getFirstChild();
        if (!$isTypedMarkNode(merged)) throw new Error("Expected a TypedMarkNode");
        expect(merged.getKey()).toBe(leftMark.getKey());
        expect(merged.getTextContent()).toBe("man who");
        const typedIDs = merged.getTypedIDs();
        expect(typedIDs[grammarType]).toEqual([grammarId]);
        expect(typedIDs[spellingType]).toEqual([]);
        expect(paraNode.getTextContent()).toBe("man who");

        const callbacks = merged.getTypedOnClicks();
        expect(callbacks[grammarType]?.[grammarId]).toBe(onClickLeft);
        expect(onRemoveSpelling).toHaveBeenCalledTimes(1);
        expect(onRemoveSpelling).toHaveBeenCalledWith(spellingType, spellingId, "removed", "man");
        expect(onRemoveRight).not.toHaveBeenCalled();
      });
    });
  });

  describe("setTypedIDs()", () => {
    it("should unwrap the node when updated with no IDs", () => {
      let paraNode: ParaNode;
      let markNode: TypedMarkNode | null = null;
      let textNode: TextNode;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        paraNode = $createParaNode();
        markNode = $createTypedMarkNode({
          [testType1]: [testID1],
        });
        textNode = $createTextNode("example");
        $getRoot().append(paraNode.append(markNode.append(textNode)));
      });

      editor.update(() => {
        if (!markNode) throw new Error("Expected mark node to exist");
        markNode.setTypedIDs({});

        expect(markNode.getParent()).toBeNull();
        expect(paraNode.getChildrenSize()).toBe(1);
        expect(paraNode.getFirstChild()?.getKey()).toBe(textNode.getKey());
      });
    });
  });

  describe("hasNoIDsForEveryType()", () => {
    it("should work if has no types", () => {
      const { editor } = createBasicTestEnvironment([TypedMarkNode]);
      editor.update(() => {
        const node = $createTypedMarkNode({});
        expect(node).toBeDefined();

        expect(node.hasNoIDsForEveryType()).toBe(true);
      });
    });

    it("should work if has types but no IDs", () => {
      const { editor } = createBasicTestEnvironment([TypedMarkNode]);
      editor.update(() => {
        const node = $createTypedMarkNode({
          [testType1]: [],
          [testType2]: undefined as unknown as string[],
        });
        expect(node).toBeDefined();

        expect(node.hasNoIDsForEveryType()).toBe(true);
      });
    });

    it("should work if has types and IDs", () => {
      const { editor } = createBasicTestEnvironment([TypedMarkNode]);
      editor.update(() => {
        const node = $createTypedMarkNode({
          [testType1]: [],
          [testType2]: [testID2],
        });
        expect(node).toBeDefined();

        expect(node.hasNoIDsForEveryType()).toBe(false);
      });
    });
  });

  describe("onClick callbacks", () => {
    it("should invoke callbacks for each type/id pair on click", () => {
      const onClickA = vi.fn();
      const onClickB = vi.fn();
      const onClickC = vi.fn();
      let markNode: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        markNode = $createTypedMarkNode({});
        $getRoot().append($createParaNode().append(markNode.append($createTextNode("example"))));
      });
      const getMarkNode = (): TypedMarkNode => {
        if (!markNode) throw new Error("Expected mark node to exist");
        return markNode;
      };

      editor.update(() => {
        const node = getMarkNode();
        node.addID(testType1, testID1, onClickA);
        node.addID(testType1, testID2, onClickB);
        node.addID(testType2, testID2, onClickC);
      });

      editor.getEditorState().read(() => {
        const node = getMarkNode();
        const typedOnClicks = node.getTypedOnClicks();
        expect(Object.keys(typedOnClicks)).toEqual(expect.arrayContaining([testType1, testType2]));
        expect(typedOnClicks[testType1]?.[testID1]).toBe(onClickA);
        expect(typedOnClicks[testType1]?.[testID2]).toBe(onClickB);
        expect(typedOnClicks[testType2]?.[testID2]).toBe(onClickC);

        const element = editor.getElementByKey(node.getKey());
        expect(element).toBeInstanceOf(HTMLElement);
        if (!(element instanceof HTMLElement)) {
          throw new Error("Expected DOM element for mark node");
        }
        element.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));

        expect(onClickA).toHaveBeenCalledTimes(1);
        expect(onClickA).toHaveBeenCalledWith(expect.anything(), testType1, testID1, "example");
        expect(onClickB).toHaveBeenCalledTimes(1);
        expect(onClickB).toHaveBeenCalledWith(expect.anything(), testType1, testID2, "example");
        expect(onClickC).toHaveBeenCalledTimes(1);
        expect(onClickC).toHaveBeenCalledWith(expect.anything(), testType2, testID2, "example");
      });
    });

    it("should drop callbacks for IDs that are removed", () => {
      const onClickA = vi.fn();
      const onClickB = vi.fn();
      let markNode: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        markNode = $createTypedMarkNode({});
        $getRoot().append($createParaNode().append(markNode.append($createTextNode("example"))));
      });
      const getMarkNode = (): TypedMarkNode => {
        if (!markNode) throw new Error("Expected mark node to exist");
        return markNode;
      };

      editor.update(() => {
        const node = getMarkNode();
        node.addID(testType1, testID1, onClickA);
        node.addID(testType1, testID2, onClickB);
        node.deleteID(testType1, testID1);
      });

      let element: HTMLElement | null = null;
      editor.getEditorState().read(() => {
        const node = getMarkNode();
        const typedOnClicks = node.getTypedOnClicks();
        expect(typedOnClicks[testType1]?.[testID1]).toBeUndefined();
        expect(typedOnClicks[testType1]?.[testID2]).toBe(onClickB);

        element = editor.getElementByKey(node.getKey());
        expect(element).toBeInstanceOf(HTMLElement);
        if (!(element instanceof HTMLElement)) {
          throw new Error("Expected DOM element for mark node");
        }
        element.dispatchEvent(new window.MouseEvent("click", { bubbles: true }));

        expect(onClickA).not.toHaveBeenCalled();
        expect(onClickB).toHaveBeenCalledTimes(1);
      });
    });

    it("should ignore callbacks that do not match current IDs", () => {
      let markNode: TypedMarkNode | null = null;
      const onClick = vi.fn();
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        markNode = $createTypedMarkNode({
          [testType1]: [testID1],
        });
        $getRoot().append($createParaNode().append(markNode.append($createTextNode("example"))));
      });
      const getMarkNode = (): TypedMarkNode => {
        if (!markNode) throw new Error("Expected mark node to exist");
        return markNode;
      };

      editor.update(() => {
        const node = getMarkNode();
        // Inject a callback for an ID that is not present so pruning can drop it immediately.
        node.setTypedOnClicks({
          [testType1]: { [testID2]: onClick },
        });
      });

      editor.getEditorState().read(() => {
        const node = getMarkNode();
        expect(node.getTypedOnClicks()[testType1]).toBeUndefined();
      });
    });
  });

  describe("onRemove callbacks", () => {
    it("should invoke callbacks when IDs are explicitly removed", () => {
      const onRemove = vi.fn();
      let markNode: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        markNode = $createTypedMarkNode({});
        markNode.addID(testType1, testID1, undefined, onRemove);
        $getRoot().append($createParaNode().append(markNode.append($createTextNode("example"))));
      });
      const getMarkNode = (): TypedMarkNode => {
        if (!markNode) throw new Error("Expected mark node to exist");
        return markNode;
      };

      editor.update(() => {
        const node = getMarkNode();
        node.deleteID(testType1, testID1);
      });

      expect(onRemove).toHaveBeenCalledTimes(1);
      expect(onRemove).toHaveBeenCalledWith(testType1, testID1, "removed", "example");
    });

    it("should invoke callbacks when IDs change via setTypedIDs", () => {
      const onRemove = vi.fn();
      let markNode: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        markNode = $createTypedMarkNode({
          [testType1]: [testID1],
        });
        markNode.addID(testType1, testID1, undefined, onRemove);
        $getRoot().append($createParaNode().append(markNode.append($createTextNode("example"))));
      });

      editor.update(() => {
        if (!markNode) throw new Error("Expected mark node to exist");
        markNode.setTypedIDs({ [testType1]: [] });
      });

      expect(onRemove).toHaveBeenCalledTimes(1);
      expect(onRemove).toHaveBeenCalledWith(testType1, testID1, "removed", "example");
    });

    it("should invoke callbacks when the mark is destroyed", () => {
      const onRemove = vi.fn();
      let markNode: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        markNode = $createTypedMarkNode({
          [testType1]: [testID1],
        });
        markNode.addID(testType1, testID1, undefined, onRemove);
        $getRoot().append($createParaNode().append(markNode.append($createTextNode("example"))));
      });

      editor.update(() => {
        if (!markNode) throw new Error("Expected mark node to exist");
        markNode.remove();
      });

      expect(onRemove).toHaveBeenCalledTimes(1);
      expect(onRemove).toHaveBeenCalledWith(testType1, testID1, "destroyed", "example");
    });

    it("should not invoke callbacks for IDs preserved during merges", () => {
      const grammarType = testType1;
      const grammarId = testID1;
      const spellingType = testType2;
      const spellingId = testID2;
      const onRemoveRight = vi.fn();
      let leftMark: TypedMarkNode | null = null;
      let rightMark: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        const paraNode = $createParaNode();
        leftMark = $createTypedMarkNode({
          [grammarType]: [grammarId],
          [spellingType]: [spellingId],
        });
        rightMark = $createTypedMarkNode({
          [grammarType]: [grammarId],
        });
        leftMark.addID(spellingType, spellingId, undefined, vi.fn());
        rightMark.addID(grammarType, grammarId, undefined, onRemoveRight);
        $getRoot().append(
          paraNode.append(
            leftMark.append($createTextNode("left")),
            rightMark.append($createTextNode("right")),
          ),
        );
      });

      editor.update(() => {
        if (!leftMark || !rightMark) throw new Error("Expected mark nodes to exist");
        leftMark.deleteID(spellingType, spellingId);
      });

      expect(onRemoveRight).not.toHaveBeenCalled();
    });
  });

  describe("TypedMarkNode hover events", () => {
    it("fires onMouseEnter when the cursor enters the <mark>", () => {
      const onMouseEnter = vi.fn<TypedMarkOnMouseEnter>();
      let markNode: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        markNode = $createTypedMarkNode({});
        markNode.addID(testType1, testID1, undefined, undefined, onMouseEnter);
        $getRoot().append($createParaNode().append(markNode.append($createTextNode("example"))));
      });

      editor.getEditorState().read(() => {
        if (!markNode) throw new Error("Expected mark node to exist");
        const element = editor.getElementByKey(markNode.getKey());
        if (!(element instanceof HTMLElement)) {
          throw new Error("Expected DOM element for mark node");
        }
        element.dispatchEvent(new window.MouseEvent("mouseenter"));

        expect(onMouseEnter).toHaveBeenCalledTimes(1);
        expect(onMouseEnter).toHaveBeenCalledWith(expect.anything(), testType1, testID1, "example");
      });
    });

    it("fires onMouseLeave when the cursor leaves the <mark>", () => {
      const onMouseLeave = vi.fn<TypedMarkOnMouseLeave>();
      let markNode: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        markNode = $createTypedMarkNode({});
        markNode.addID(testType1, testID1, undefined, undefined, undefined, onMouseLeave);
        $getRoot().append($createParaNode().append(markNode.append($createTextNode("example"))));
      });

      editor.getEditorState().read(() => {
        if (!markNode) throw new Error("Expected mark node to exist");
        const element = editor.getElementByKey(markNode.getKey());
        if (!(element instanceof HTMLElement)) {
          throw new Error("Expected DOM element for mark node");
        }
        element.dispatchEvent(new window.MouseEvent("mouseleave"));

        expect(onMouseLeave).toHaveBeenCalledTimes(1);
        expect(onMouseLeave).toHaveBeenCalledWith(expect.anything(), testType1, testID1, "example");
      });
    });

    it("fires both callbacks for every (type, id) on a multi-id mark", () => {
      const onMouseEnterA = vi.fn<TypedMarkOnMouseEnter>();
      const onMouseEnterB = vi.fn<TypedMarkOnMouseEnter>();
      let markNode: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        markNode = $createTypedMarkNode({});
        markNode.addID(testType1, testID1, undefined, undefined, onMouseEnterA);
        markNode.addID(testType2, testID2, undefined, undefined, onMouseEnterB);
        $getRoot().append($createParaNode().append(markNode.append($createTextNode("example"))));
      });

      editor.getEditorState().read(() => {
        if (!markNode) throw new Error("Expected mark node to exist");
        const element = editor.getElementByKey(markNode.getKey());
        if (!(element instanceof HTMLElement)) {
          throw new Error("Expected DOM element for mark node");
        }
        element.dispatchEvent(new window.MouseEvent("mouseenter"));

        expect(onMouseEnterA).toHaveBeenCalledTimes(1);
        expect(onMouseEnterA).toHaveBeenCalledWith(
          expect.anything(),
          testType1,
          testID1,
          "example",
        );
        expect(onMouseEnterB).toHaveBeenCalledTimes(1);
        expect(onMouseEnterB).toHaveBeenCalledWith(
          expect.anything(),
          testType2,
          testID2,
          "example",
        );
      });
    });

    it("drops hover callbacks when deleteID is called", () => {
      const onMouseEnter = vi.fn<TypedMarkOnMouseEnter>();
      let markNode: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        markNode = $createTypedMarkNode({});
        markNode.addID(testType1, testID1, undefined, undefined, onMouseEnter);
        $getRoot().append($createParaNode().append(markNode.append($createTextNode("example"))));
      });

      editor.update(() => {
        if (!markNode) throw new Error("Expected mark node to exist");
        markNode.deleteID(testType1, testID1);
      });

      // After deleteID the mark unwraps; if any element still exists, dispatching shouldn't fire
      // the callback because it has been removed from the registry.
      editor.getEditorState().read(() => {
        if (!markNode) throw new Error("Expected mark node to exist");
        const element = editor.getElementByKey(markNode.getKey());
        if (element instanceof HTMLElement) {
          element.dispatchEvent(new window.MouseEvent("mouseenter"));
        }
        expect(onMouseEnter).not.toHaveBeenCalled();
      });
    });

    it("survives merge of adjacent typed marks with identical typedIDs", () => {
      const grammarType = testType1;
      const grammarId = testID1;
      const spellingType = testType2;
      const spellingId = testID2;
      const onMouseEnterLeft = vi.fn<TypedMarkOnMouseEnter>();
      const onMouseEnterRight = vi.fn<TypedMarkOnMouseEnter>();
      let leftMark: TypedMarkNode | null = null;
      let rightMark: TypedMarkNode | null = null;
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode], () => {
        const paraNode = $createParaNode();
        leftMark = $createTypedMarkNode({
          [grammarType]: [grammarId],
          [spellingType]: [spellingId],
        });
        rightMark = $createTypedMarkNode({
          [grammarType]: [grammarId],
        });
        leftMark.addID(grammarType, grammarId, undefined, undefined, onMouseEnterLeft);
        leftMark.addID(spellingType, spellingId);
        rightMark.addID(grammarType, grammarId, undefined, undefined, onMouseEnterRight);
        $getRoot().append(
          paraNode.append(
            leftMark.append($createTextNode("man")),
            rightMark.append($createTextNode(" who")),
          ),
        );
      });

      editor.update(() => {
        if (!leftMark || !rightMark) throw new Error("Expected mark nodes to exist");
        // Removing the spelling ID makes the typedIDs equal between leftMark and rightMark and
        // merges them. The merged node should retain the leftMark's onMouseEnter for grammar.
        leftMark.deleteID(spellingType, spellingId);
      });

      editor.getEditorState().read(() => {
        if (!leftMark) throw new Error("Expected left mark node");
        const node = leftMark;
        const element = editor.getElementByKey(node.getKey());
        if (!(element instanceof HTMLElement)) {
          throw new Error("Expected DOM element for merged mark node");
        }
        element.dispatchEvent(new window.MouseEvent("mouseenter"));

        // The left callback (the primary, since left absorbs right) should fire exactly once for
        // (grammarType, grammarId). Primary-wins is the intentional contract - see
        // mergeTypedOnMouseEnterMaps. If two adjacent marks both register a callback under the
        // same (type, id), the surviving (primary) mark's callback is preserved and the
        // overwritten side is silently dropped.
        expect(onMouseEnterLeft).toHaveBeenCalledTimes(1);
        expect(onMouseEnterLeft).toHaveBeenCalledWith(
          expect.anything(),
          grammarType,
          grammarId,
          "man who",
        );
        expect(onMouseEnterRight).not.toHaveBeenCalled();
      });
    });
  });

  describe("updateDOM()", () => {
    const mockEditorConfig: EditorConfig = {
      namespace: "TestEditor",
      theme: {
        typedMark: "typed-mark",
        typedMarkOverlap: "typed-mark-overlap",
      },
    };

    it("removes annotationId class names when IDs are removed", () => {
      const { editor } = createBasicTestEnvironment([TypedMarkNode]);
      editor.update(() => {
        const previous = $createTypedMarkNode({
          [testType1]: [testID1],
        });
        const next = $createTypedMarkNode({
          [testType1]: [],
        });
        const element = previous.createDOM(mockEditorConfig, editor);
        expect(element.classList.contains(`annotationId-${testID1}`)).toBe(true);

        next.updateDOM(previous, element, mockEditorConfig);

        expect(element.classList.contains(`annotationId-${testID1}`)).toBe(false);
      });
    });

    it("adds annotationId class names for new IDs", () => {
      const { editor } = createBasicTestEnvironment([TypedMarkNode]);
      editor.update(() => {
        const previous = $createTypedMarkNode({
          [testType1]: [],
        });
        const next = $createTypedMarkNode({
          [testType1]: [testID1],
        });
        const element = previous.createDOM(mockEditorConfig, editor);
        expect(element.classList.contains(`annotationId-${testID1}`)).toBe(false);

        next.updateDOM(previous, element, mockEditorConfig);

        expect(element.classList.contains(`annotationId-${testID1}`)).toBe(true);
      });
    });
  });

  describe("$wrapSelectionInTypedMarkNode()", () => {
    it("never splits or moves an attribute display run", () => {
      const { editor } = createBasicTestEnvironment([ParaNode, TypedMarkNode]);
      editor.update(
        () => {
          const word = $createTextNode("grace");
          const run = $setState($createTextNode("|grace"), textTypeState, "attribute");
          const tail = $createTextNode(" of God");
          $getRoot().append($createParaNode().append(word, run, tail));
          const selection = $createRangeSelection();
          selection.anchor.set(word.getKey(), 2, "text");
          selection.focus.set(tail.getKey(), 3, "text");
          $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChildOrThrow<ParaNode>();
        const children = para.getChildren();
        const marks = children.filter($isTypedMarkNode).map((mark) => mark.getTextContent());
        expect(marks).toEqual(["ace", " of"]);
        const run = children.find((child) => child.getTextContent() === "|grace");
        expect(run?.getParent()?.is(para)).toBe(true);
        expect(para.getTextContent()).toBe("grace|grace of God");
      });
    });

    /** The attribute-tagged value text inside `wrapper`, the display run's `|…` bytes. */
    function $attributeTextIn(wrapper: LexicalNode | null): TextNode {
      if (!$isAttributeRunNode(wrapper)) throw new Error("expected an attribute run wrapper");
      const value = wrapper
        .getChildren()
        .find((child) => $isTextNode(child) && $getState(child, textTypeState) === "attribute");
      if (!$isTextNode(value)) throw new Error("expected the run's attribute text");
      return value;
    }

    it("keeps a milestone and its attribute run out of a mark that spans them", () => {
      const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
      let milestone!: MilestoneNode;
      editor.update(
        () => {
          const before = $createTextNode("said to ");
          milestone = $createMilestoneNode("qt-s", undefined, undefined, { who: "Pilate" });
          const after = $createTextNode(" What is truth?");
          $getRoot().append($createParaNode().append(before, milestone, after));
          $syncDisplayRun(displayRunDescriptor("milestone"), milestone);
          const selection = $createRangeSelection();
          selection.anchor.set(before.getKey(), 5, "text");
          selection.focus.set(after.getKey(), 5, "text");
          $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChildOrThrow<ParaNode>();
        expect(milestone.getParent()?.is(para)).toBe(true);
        const wrapper = milestone.getNextSibling();
        expect($isAttributeRunNode(wrapper)).toBe(true);
        expect(wrapper?.getParent()?.is(para)).toBe(true);
        const pieces = displayRunDescriptor("milestone").scanPieces(milestone);
        expect(pieces.opener && pieces.value && pieces.closer).toBeTruthy();
        expect(pieces.value?.getTextContent()).toContain("|Pilate");
        const marks = para.getChildren().filter($isTypedMarkNode);
        expect(marks.map((mark) => mark.getTextContent())).toEqual(["to ", " What"]);
        expect(marks.every((mark) => mark.hasID(testType1, testID1))).toBe(true);
        expect(milestone.getMarker()).toBe("qt-s");
        expect(milestone.getUnknownAttributes()).toEqual({ who: "Pilate" });
      });
    });

    it("keeps a verse and its `\\va` run out of a mark that spans them, without splitting the verse", () => {
      const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
      let verse!: VerseNode;
      const verseText = getVisibleOpenMarkerText("v", "2");
      editor.update(
        () => {
          const before = $createTextNode("in the beginning ");
          verse = $createVerseNode("2", verseText, undefined, "3");
          const after = $createTextNode("and the earth");
          $getRoot().append($createParaNode().append(before, verse, after));
          $syncDisplayRun(displayRunDescriptor("va"), verse);
          const selection = $createRangeSelection();
          selection.anchor.set(before.getKey(), 7, "text");
          selection.focus.set(after.getKey(), 3, "text");
          $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChildOrThrow<ParaNode>();
        expect(verse.getParent()?.is(para)).toBe(true);
        expect(verse.getTextContent()).toBe(verseText);
        const wrapper = verse.getNextSibling();
        expect($isAttributeRunNode(wrapper)).toBe(true);
        expect(wrapper?.getParent()?.is(para)).toBe(true);
        const marks = para.getChildren().filter($isTypedMarkNode);
        expect(marks.map((mark) => mark.getTextContent())).toEqual(["beginning ", "and"]);
      });
    });

    /** An attribute run wrapper of `kind` holding `value` between its opening and closing glyph. */
    function $attributeRun(kind: "cat" | "ca", value: string) {
      const text = $setState($createTextNode(`${NBSP}${value}`), textTypeState, "attribute");
      return $createAttributeRunNode(kind).append(
        $createMarkerNode(kind),
        text,
        $createMarkerNode(kind, "closing"),
      );
    }

    it("keeps a note's editable caller and its `\\cat` run out of a mark starting at the caller", () => {
      const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
      let note!: NoteNode;
      editor.update(
        () => {
          note = $createNoteNode("f", "+", false, "People");
          const caller = $createTextNode(getEditableCallerText("+"));
          const body = $createTextNode("note body");
          note.append(
            $createMarkerNode("f"),
            caller,
            $attributeRun("cat", "People"),
            body,
            $createMarkerNode("f", "closing"),
          );
          $getRoot().append($createParaNode().append(note));
          expect($noteCategoryRunPieces(note).wrapper).toBeDefined();
          const selection = $createRangeSelection();
          selection.anchor.set(caller.getKey(), 1, "text");
          selection.focus.set(body.getKey(), 4, "text");
          $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const caller = $noteEditableCallerNode(note);
        expect(caller?.getParent()?.is(note)).toBe(true);
        const pieces = $noteCategoryRunPieces(note);
        expect(pieces.wrapper?.getParent()?.is(note)).toBe(true);
        expect(pieces.value?.getTextContent()).toBe(`${NBSP}People`);
        const marks = note.getChildren().filter($isTypedMarkNode);
        expect(marks.map((mark) => mark.getTextContent())).toEqual(["note"]);
      });
    });

    it("keeps a chapter's `\\c` glyph and its `\\ca` run out of a mark starting in the glyph", () => {
      const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
      let chapter!: ChapterNode;
      let para!: ParaNode;
      const glyphText = getVisibleOpenMarkerText("c", "1") ?? "";
      editor.update(
        () => {
          chapter = $createChapterNode("1", undefined, "2");
          const glyph = $createTextNode(glyphText);
          chapter.append(glyph, $attributeRun("ca", "2"));
          const body = $createTextNode("In the beginning");
          para = $createParaNode().append(body);
          $getRoot().append(chapter, para);
          expect($chapterAltnumberRunPieces(chapter).wrapper).toBeDefined();
          const selection = $createRangeSelection();
          selection.anchor.set(glyph.getKey(), 1, "text");
          selection.focus.set(body.getKey(), 6, "text");
          $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const glyph = $chapterGlyphTextNode(chapter);
        expect(glyph?.getTextContent()).toBe(glyphText);
        const pieces = $chapterAltnumberRunPieces(chapter);
        expect(pieces.wrapper?.getParent()?.is(chapter)).toBe(true);
        expect(pieces.value?.getTextContent()).toBe(`${NBSP}2`);
        expect(chapter.getChildren().some($isTypedMarkNode)).toBe(false);
        const marks = para.getChildren().filter($isTypedMarkNode);
        expect(marks.map((mark) => mark.getTextContent())).toEqual(["In the"]);
      });
    });

    describe("from a char span's opening glyph", () => {
      /** Each child of `\nd <content>\nd*` as `[type, text]`, marks shown with their children's
       * text, after wrapping `the \nd <content>\nd* made` from the front of `\nd` into ` made`. */
      function wrapFromOpener(content: () => LexicalNode[]): (string | string[])[] {
        const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
        let nd!: CharNode;
        editor.update(
          () => {
            const opener = $createMarkerNode("nd");
            nd = $createCharNode("nd").append(
              opener,
              ...content(),
              $createMarkerNode("nd", "closing"),
            );
            const after = $createTextNode(" made");
            $getRoot().append($createParaNode().append($createTextNode("the "), nd, after));
            const selection = $createRangeSelection();
            selection.anchor.set(opener.getKey(), 0, "text");
            selection.focus.set(after.getKey(), 3, "text");
            $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
          },
          { discrete: true },
        );
        return editor.getEditorState().read(() =>
          nd
            .getLatest()
            .getChildren()
            .map((child) =>
              $isTypedMarkNode(child)
                ? child.getChildren().map((inner) => inner.getTextContent())
                : child.getTextContent(),
            ),
        );
      }

      /** `\+wj God\+wj*`, a nested span. */
      function $nestedWj(): CharNode {
        return $createCharNode("wj").append(
          $createMarkerNode("wj", "opening", true),
          $createTextNode(`${NBSP}God`),
          $createMarkerNode("wj", "closing", true),
        );
      }

      it("keeps the spacer in front of a nested span out of the mark", () => {
        expect(wrapFromOpener(() => [$createTextNode(NBSP), $nestedWj()])).toEqual([
          "\\nd",
          NBSP,
          [`\\+wj${NBSP}God\\+wj*`],
          "\\nd*",
        ]);
      });

      it("keeps the separator prefix of the span's first text out of the mark", () => {
        expect(wrapFromOpener(() => [$createTextNode(`${NBSP}LORD`)])).toEqual([
          "\\nd",
          NBSP,
          ["LORD"],
          "\\nd*",
        ]);
      });

      it("still annotates an NBSP the user typed after the separator", () => {
        expect(wrapFromOpener(() => [$createTextNode(`${NBSP}${NBSP}LORD`)])).toEqual([
          "\\nd",
          NBSP,
          [`${NBSP}LORD`],
          "\\nd*",
        ]);
      });

      it("still annotates NBSP-only text that is not in the separator's place", () => {
        expect(
          wrapFromOpener(() => [$createTextNode(NBSP), $nestedWj(), $createTextNode(NBSP)]),
        ).toEqual(["\\nd", NBSP, [`\\+wj${NBSP}God\\+wj*`, NBSP], "\\nd*"]);
      });
    });

    it("starts the mark after the run when the range starts inside the attribute value", () => {
      const { editor } = createBasicTestEnvironment([...usjBaseNodes, TypedMarkNode]);
      let milestone!: MilestoneNode;
      editor.update(
        () => {
          milestone = $createMilestoneNode("qt-s", undefined, undefined, { who: "Pilate" });
          const after = $createTextNode(" What is truth?");
          $getRoot().append($createParaNode().append(milestone, after));
          $syncDisplayRun(displayRunDescriptor("milestone"), milestone);
          const value = $attributeTextIn(milestone.getNextSibling());
          const selection = $createRangeSelection();
          selection.anchor.set(value.getKey(), value.getTextContent().indexOf("late"), "text");
          selection.focus.set(after.getKey(), 5, "text");
          $wrapSelectionInTypedMarkNode(selection, testType1, testID1);
        },
        { discrete: true },
      );

      editor.getEditorState().read(() => {
        const para = $getRoot().getFirstChildOrThrow<ParaNode>();
        const wrapper = milestone.getNextSibling();
        expect($isAttributeRunNode(wrapper)).toBe(true);
        expect(wrapper?.getParent()?.is(para)).toBe(true);
        expect($attributeTextIn(wrapper).getTextContent()).toContain("|Pilate");
        const marks = para.getChildren().filter($isTypedMarkNode);
        expect(marks.map((mark) => mark.getTextContent())).toEqual([" What"]);
      });
    });
  });
});
