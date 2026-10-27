/**
 * Lone NBSP (an authored `~`) across the editor's two output paths: the editor-to-USJ adaptor
 * (what a save writes) and the editor-to-delta producer (what collab sends) must agree on which
 * NBSP is content, and text typed into presentation NBSP (the element-first spacer, the empty-char
 * placeholder) must reach the saved USJ as plain content.
 */
// Reaching inside only for tests.
// eslint-disable-next-line @nx/enforce-module-boundaries
import { createBasicTestEnvironment } from "../../../../../libs/shared/src/nodes/usj/test.utils";
import Editor from "../Editor";
import { EditorRef } from "../editor.model";
import { corpusFixtures } from "./corpus/corpus-data";
import { deserializeEditorState, initialize as initializeDeserialize } from "./editor-usj.adaptor";
import {
  initialize as initializeSerialize,
  reset,
  serializeEditorState,
} from "./usj-editor.adaptor";
import {
  MarkerContent,
  MarkerObject,
  Usj,
  usxStringToUsj,
} from "@eten-tech-foundation/scripture-utilities";
import { EditorRefPlugin } from "@lexical/react/LexicalEditorRefPlugin";
import { $dfs } from "@lexical/utils";
import { act, render } from "@testing-library/react";
import {
  $getRoot,
  $getSelection,
  $getState,
  $isRangeSelection,
  $isTextNode,
  EditorState,
  LexicalEditor,
  TextNode,
} from "lexical";
import { createRef } from "react";
import {
  $isCharNode,
  $isPresentationNbsp,
  EMPTY_CHAR_PLACEHOLDER_TEXT_TYPE,
  NBSP,
  textTypeState,
  TypedMarkNode,
} from "shared";
import {
  DeltaOp,
  FORMATTED_VIEW_MODE,
  getEditorDelta,
  getViewOptions,
  PARAGRAPH_STRUCTURE_VIEW_MODE,
  UNFORMATTED_VIEW_MODE,
  usjReactNodes,
  ViewOptions,
} from "shared-react";

const nodes = [TypedMarkNode, ...usjReactNodes];

function requireViewOptions(viewMode: string): ViewOptions {
  const viewOptions = getViewOptions(viewMode);
  if (!viewOptions) throw new Error(`${viewMode} view options are required for these tests`);
  return viewOptions;
}

/** Load `usj` into a fresh headless editor under `viewOptions`. */
function loadHeadless(usj: Usj, viewOptions: ViewOptions): LexicalEditor {
  initializeSerialize(undefined, undefined);
  reset();
  const state = serializeEditorState(usj, viewOptions);
  const { editor } = createBasicTestEnvironment(nodes);
  editor.setEditorState(editor.parseEditorState(JSON.stringify({ root: state.root })));
  return editor;
}

function saveUsj(editorState: EditorState, viewOptions: ViewOptions): Usj {
  initializeDeserialize(undefined);
  const usj = deserializeEditorState(editorState, viewOptions);
  if (!usj) throw new Error("expected the editor to serialize to USJ");
  return usj;
}

/**
 * A lone-NBSP content item, located by the char spans around it (outermost first) and whether it
 * sits in a note. Both projections below produce these, so they can be compared directly.
 */
function loneNbspKey(charStyles: string[], isInNote: boolean): string {
  return `${isInNote ? "note:" : ""}${charStyles.join("/")}`;
}

/** Every USJ content string that is exactly one NBSP. */
function usjLoneNbsps(usj: Usj): string[] {
  const found: string[] = [];
  const walk = (content: MarkerContent[] | undefined, charStyles: string[], isInNote: boolean) => {
    for (const item of content ?? []) {
      if (typeof item === "string") {
        if (item === NBSP) found.push(loneNbspKey(charStyles, isInNote));
        continue;
      }
      const marker = item as MarkerObject;
      const isChar = marker.type === "char";
      walk(
        marker.content,
        isChar && marker.marker ? [...charStyles, marker.marker] : charStyles,
        isInNote || marker.type === "note",
      );
    }
  };
  walk(usj.content, [], false);
  return found.sort();
}

/**
 * An editable-mode text op carries its span's marker glyphs and the structural NBSP separator
 * after an opening glyph; strip those so only the span's content is left.
 */
function opContentText(insert: string): string {
  return insert
    .replace(/\\\+?[a-z0-9-]+\*/g, "")
    .replace(new RegExp(`\\\\\\+?[a-z0-9-]+${NBSP}?`, "g"), "");
}

function opCharStyles(op: DeltaOp): string[] {
  const char = op.attributes?.char;
  if (!char) return [];
  const items = Array.isArray(char) ? char : [char];
  return items.map((item) => String((item as { style: string }).style).replace(/^\+/, ""));
}

/** Every delta text op whose content (glyphs and separators stripped) is exactly one NBSP. */
function deltaLoneNbsps(ops: DeltaOp[]): string[] {
  const found: string[] = [];
  const walk = (opList: DeltaOp[], isInNote: boolean) => {
    for (const op of opList) {
      if (typeof op.insert === "string") {
        if (opContentText(op.insert) === NBSP) found.push(loneNbspKey(opCharStyles(op), isInNote));
      } else if (op.insert && typeof op.insert === "object" && "note" in op.insert) {
        const noteOps = (op.insert.note as { contents?: { ops?: DeltaOp[] } }).contents?.ops;
        walk(noteOps ?? [], true);
      }
    }
  };
  walk(ops, false);
  return found.sort();
}

const LONE_NBSP_FIXTURES = [
  "lone NBSP between body-text char spans",
  "lone NBSP between char spans inside a note",
  "char span whose only content is NBSP",
  "NBSP leading an element-first char span",
];

describe("editor-to-USJ and editor-to-delta agree on lone NBSP content", () => {
  const cases = LONE_NBSP_FIXTURES.flatMap((name) =>
    [FORMATTED_VIEW_MODE, UNFORMATTED_VIEW_MODE, PARAGRAPH_STRUCTURE_VIEW_MODE].map(
      (viewMode) => [name, viewMode] as const,
    ),
  );

  it.each(cases)("%s [%s]", (name, viewMode) => {
    const fixture = corpusFixtures.find((entry) => entry.name === name);
    if (!fixture) throw new Error(`Fixture not found: ${name}`);
    const viewOptions = requireViewOptions(viewMode);
    const editor = loadHeadless(usxStringToUsj(fixture.usx), viewOptions);

    const fromUsj = usjLoneNbsps(saveUsj(editor.getEditorState(), viewOptions));
    const fromDelta = deltaLoneNbsps(getEditorDelta(editor.getEditorState()).ops);

    expect(fromUsj).toHaveLength(1);
    expect(fromDelta).toEqual(fromUsj);
  });
});

describe("text typed into presentation NBSP is saved as content", () => {
  it("keeps text typed at an element-first spacer (unformatted)", async () => {
    const viewOptions = requireViewOptions(UNFORMATTED_VIEW_MODE);
    const usj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            {
              type: "char",
              marker: "nd",
              content: [{ type: "char", marker: "wj", content: ["x"] }],
            },
          ],
        },
      ],
    };
    const editor = loadHeadless(usj, viewOptions);
    const spacerKey = editor.getEditorState().read(() => {
      const spacer = $getRoot()
        .getAllTextNodes()
        .find((node) => $isCharNode(node.getParent()) && $isPresentationNbsp(node));
      if (!spacer) throw new Error("expected the element-first spacer");
      return spacer.getKey();
    });

    await act(async () => {
      editor.update(
        () => {
          const spacer = $getRoot()
            .getAllTextNodes()
            .find((node) => node.getKey() === spacerKey);
          if (!spacer) throw new Error("expected the element-first spacer");
          spacer.select(1, 1);
          const selection = $getSelection();
          if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
          selection.insertText("a");
        },
        { discrete: true },
      );
    });

    const saved = saveUsj(editor.getEditorState(), viewOptions);
    const nd = (saved.content[0] as MarkerObject).content?.[0] as MarkerObject;
    expect(nd).toEqual({
      type: "char",
      marker: "nd",
      content: ["a", { type: "char", marker: "wj", content: ["x"] }],
    });
  });

  it("keeps text typed into an empty span's placeholder, untagged (formatted)", async () => {
    const view = requireViewOptions(FORMATTED_VIEW_MODE);
    const usj: Usj = {
      type: "USJ",
      version: "3.1",
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            { type: "verse", marker: "v", number: "1" },
            "Tell the ",
            { type: "char", marker: "nd" },
          ],
        },
      ],
    };
    const ref = createRef<EditorRef>();
    const lexicalRef = createRef<LexicalEditor>();
    await act(async () => {
      render(
        <Editor ref={ref} defaultUsj={usj} options={{ view }}>
          <EditorRefPlugin editorRef={lexicalRef} />
        </Editor>,
      );
    });
    const lexical = lexicalRef.current;
    if (!lexical || !ref.current) throw new Error("editor did not mount");
    const $findPlaceholder = (): TextNode | undefined =>
      $dfs($getRoot())
        .map(({ node }) => node)
        .filter($isTextNode)
        .find(
          (node) =>
            $isCharNode(node.getParent()) &&
            $getState(node, textTypeState) === EMPTY_CHAR_PLACEHOLDER_TEXT_TYPE,
        );
    const placeholderKey = lexical.getEditorState().read(() => $findPlaceholder()?.getKey());
    if (!placeholderKey) throw new Error("expected the empty-char placeholder");

    await act(async () => {
      lexical.update(
        () => {
          const placeholder = $findPlaceholder();
          if (!placeholder) throw new Error("expected the empty-char placeholder");
          placeholder.select(1, 1);
          const selection = $getSelection();
          if (!$isRangeSelection(selection)) throw new Error("expected a range selection");
          selection.insertText("x");
        },
        { discrete: true },
      );
    });

    const saved = ref.current.getUsj();
    const para = saved?.content[0] as MarkerObject;
    expect(para.content?.[2]).toEqual({ type: "char", marker: "nd", content: ["x"] });
    lexical.getEditorState().read(() => {
      const typed = $dfs($getRoot())
        .map(({ node }) => node)
        .filter($isTextNode)
        .find((node) => node.getKey() === placeholderKey);
      if (!typed) throw new Error("expected the typed-into node");
      expect(typed.getTextContent()).toBe("x");
      expect($getState(typed, textTypeState)).toBeUndefined();
    });
  });
});
