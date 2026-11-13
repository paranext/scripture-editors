import { usjBaseNodes } from "../usj/index.js";
import { $createParaNode } from "../usj/ParaNode.js";
import { createBasicTestEnvironment } from "../usj/test.utils.js";
import {
  $addDisplayAnnotation,
  registerDisplayAnnotationBasis,
} from "./displayAnnotations.utils.js";
import { $logicalText, $pieces } from "./displayPieces.state.js";
import { $createImmutableUnmatchedNode, ImmutableUnmatchedNode } from "./ImmutableUnmatchedNode.js";
import { $createTextNode, $getRoot, LexicalEditor, LexicalNode } from "lexical";

function mount(): LexicalEditor {
  const { editor } = createBasicTestEnvironment(usjBaseNodes);
  registerDisplayAnnotationBasis(editor);
  return editor;
}

/** An editable unmatched `\f*` in a paragraph, cut into `\f` and `*` by a hold on its `*`. */
function mountSplitCloser(): { editor: LexicalEditor; closer: ImmutableUnmatchedNode } {
  const editor = mount();
  let closer!: ImmutableUnmatchedNode;
  editor.update(
    () => {
      closer = $createImmutableUnmatchedNode("f*").setMode("normal");
      $getRoot().append($createParaNode().append($createTextNode("a"), closer));
      $addDisplayAnnotation(closer, "check", "a", 2, 3);
    },
    { discrete: true },
  );
  editor.read(() => {
    expect($pieces(closer).map((piece) => piece.getTextContent())).toEqual(["\\f", "*"]);
  });
  return { editor, closer };
}

/**
 * What `elements` paste back as through the node's own HTML import, the way `@lexical/html` reads
 * a conversion's output: a converted text node drops the element's children, an element with no
 * node hoists them (each child text pastes as plain text), and `after` rewrites them.
 */
function importElements(editor: LexicalEditor, elements: HTMLElement[]): string[] {
  const holder = document.createElement("div");
  holder.append(...elements);
  const imported: string[] = [];
  editor.update(
    () => {
      for (const element of elements) {
        const output = ImmutableUnmatchedNode.importDOM()
          ?.unmatched?.(element)
          ?.conversion(element);
        if (!output) continue;
        const node = Array.isArray(output.node) ? output.node.at(-1) : output.node;
        let children: LexicalNode[] = [...element.childNodes].map((child) =>
          $createTextNode(child.textContent ?? ""),
        );
        if (output.after) children = output.after(children);
        for (const pasted of node ? [node] : children)
          imported.push(`${pasted.getType()} ${pasted.getTextContent()}`);
      }
    },
    { discrete: true },
  );
  return imported;
}

describe("ImmutableUnmatchedNode cut into pieces", () => {
  it("respells the whole glyph once when its marker changes", () => {
    const { editor, closer } = mountSplitCloser();
    editor.update(
      () => {
        closer.setMarker("x*");
      },
      { discrete: true },
    );
    editor.read(() => {
      expect($logicalText(closer)).toBe("\\x*");
    });
  });

  it("copies as one unmatched closer, whichever of its pieces the copy holds", () => {
    const { editor, closer } = mountSplitCloser();
    let whole: HTMLElement[] = [];
    let tailOnly: HTMLElement[] = [];
    editor.read(() => {
      const exported = $pieces(closer).map((piece) => piece.exportDOM().element);
      whole = exported.filter((element): element is HTMLElement => element instanceof HTMLElement);
      tailOnly = whole.slice(1);
      // Bytes read outside the editor are the carrier's own, piece after piece.
      expect(whole.map((element) => element.textContent).join("")).toBe("\\f*");
    });
    for (const elements of [whole, tailOnly]) {
      expect(importElements(editor, elements)).toEqual(["unmatched \\f*"]);
    }
  });
});
