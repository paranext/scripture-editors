/**
 * A `\ref` the user wrote in the text. The data provider loads it through the unknown-marker path,
 * not as a `ref` node: an unclosed one is a paragraph with marker `ref`, a closed one that
 * paragraph with an `unmatched` `ref*` closer, the reference and its `|loc` part plain text. A
 * copy and paste back, a cut and paste back, and a paste over the same selection all leave it as
 * it was, in every view a user edits Scripture in, on both paste routes.
 */
import { editorView, MountedEditor, mountInView } from "./editorViews.test-helpers";
import { MarkerContent, Usj } from "@eten-tech-foundation/scripture-utilities";
import { act } from "@testing-library/react";
import {
  $createRangeSelection,
  $getRoot,
  $isElementNode,
  $setSelection,
  COPY_COMMAND,
  CUT_COMMAND,
  PASTE_COMMAND,
} from "lexical";
import { describe, expect, it } from "vitest";

const BOOK = { type: "book", marker: "id", code: "2SA", content: ["Test"] };
const CHAPTER = { type: "chapter", marker: "c", number: "4" };
const BEFORE = { type: "para", marker: "p", content: ["Before the refs."] };
/** As the data provider loads `\p Authored references: a closed \ref 1 Sam 1.1|1SA 1:1\ref* and
 * an unclosed \ref 1 Sam 2.1|1SA 2:1 that runs to the end of the paragraph.` */
const REFS: MarkerContent[] = [
  { type: "para", marker: "p", content: ["Authored references: a closed "] },
  {
    type: "para",
    marker: "ref",
    content: ["1 Sam 1.1|1SA 1:1", { type: "unmatched", marker: "ref*" }, " and an unclosed "],
  },
  {
    type: "para",
    marker: "ref",
    content: ["1 Sam 2.1|1SA 2:1 that runs to the end of the paragraph."],
  },
];
const AFTER = { type: "para", marker: "p", content: ["After the refs."] };

const usj: Usj = {
  type: "USJ",
  version: "3.0",
  content: [BOOK, CHAPTER, BEFORE, ...REFS, AFTER],
};

function clipboardEvent(store: Map<string, string>): ClipboardEvent {
  const event = new ClipboardEvent("copy", { bubbles: true, cancelable: true });
  Object.defineProperty(event, "clipboardData", {
    value: {
      get types() {
        return [...store.keys()];
      },
      files: [],
      getData: (type: string) => store.get(type) ?? "",
      setData: (type: string, data: string) => store.set(type, data),
      clearData: () => store.clear(),
    },
  });
  return event;
}

async function settle(): Promise<void> {
  await act(async () => {
    for (let i = 0; i < 3; i += 1) await new Promise((resolve) => setTimeout(resolve, 0));
  });
}

/** Selects from the start of the first `\ref` line's paragraph to the end of the last one. */
async function selectRefs({ lexical }: MountedEditor): Promise<void> {
  await act(async () =>
    lexical.update(
      () => {
        const root = $getRoot();
        const first = root.getChildAtIndex(3);
        const last = root.getChildAtIndex(5);
        if (!$isElementNode(first) || !$isElementNode(last))
          throw new Error("fixture lines not found");
        const selection = $createRangeSelection();
        selection.anchor.set(first.getKey(), 0, "element");
        selection.focus.set(last.getKey(), last.getChildrenSize(), "element");
        $setSelection(selection);
      },
      { discrete: true },
    ),
  );
  await settle();
}

async function copyOrCut(
  { lexical }: MountedEditor,
  command: typeof COPY_COMMAND | typeof CUT_COMMAND,
): Promise<Map<string, string>> {
  const store = new Map<string, string>();
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(command, clipboardEvent(store));
    }),
  );
  await settle();
  return store;
}

/** What Ctrl+V's clipboard read delivers: html and plain text alone. */
function ctrlVFlavors(store: Map<string, string>): Map<string, string> {
  return new Map([
    ["text/html", store.get("text/html") ?? ""],
    ["text/plain", store.get("text/plain") ?? ""],
  ]);
}

async function paste({ lexical }: MountedEditor, delivered: Map<string, string>): Promise<void> {
  await act(async () =>
    lexical.update(() => {
      lexical.dispatchCommand(PASTE_COMMAND, clipboardEvent(delivered));
    }),
  );
  await settle();
}

/**
 * The document once every edit has settled: the caret moved to the last paragraph and pending
 * marker edits committed, as Standard view does when the user moves on.
 */
async function settledContent(mounted: MountedEditor): Promise<MarkerContent[]> {
  await act(async () => mounted.lexical.update(() => $getRoot().selectEnd(), { discrete: true }));
  act(() => mounted.ref.current?.commitPendingMarkerEdits());
  await settle();
  return mounted.ref.current?.getUsj()?.content ?? [];
}

const ROUTES: { name: string; flavors: (store: Map<string, string>) => Map<string, string> }[] = [
  { name: "Ctrl+V", flavors: ctrlVFlavors },
  { name: "a native paste", flavors: (store) => store },
];

describe.each(["standard", "paragraph-structure", "formatted"])(
  "an authored \\ref in the %s view",
  (viewName) => {
    describe.each(ROUTES)("pasted by $name", ({ flavors }) => {
      let mounted: MountedEditor;
      beforeEach(async () => {
        mounted = await mountInView(usj, editorView(viewName));
      });
      afterEach(() => mounted.unmount());

      it("copied and pasted over the same selection, is unchanged", async () => {
        await selectRefs(mounted);
        const store = await copyOrCut(mounted, COPY_COMMAND);
        await selectRefs(mounted);

        await paste(mounted, flavors(store));

        expect(await settledContent(mounted)).toEqual(usj.content);
      });

      it("cut and pasted back, is restored", async () => {
        await selectRefs(mounted);
        const store = await copyOrCut(mounted, CUT_COMMAND);

        await paste(mounted, flavors(store));

        expect(await settledContent(mounted)).toEqual(usj.content);
      });
    });
  },
);
