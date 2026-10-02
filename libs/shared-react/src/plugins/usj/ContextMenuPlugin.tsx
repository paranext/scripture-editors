/**
 * Adapted from https://github.com/facebook/lexical/blob/main/packages/lexical-playground/src/plugins/ContextMenuPlugin/index.tsx
 */

import {
  copySelection,
  cutSelection,
  pasteSelection,
  pasteSelectionAsPlainText,
  registerEmptyCopyGuard,
} from "./clipboard.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as ReactDOM from "react-dom";
import { isImmutableChapterElement } from "shared";

/**
 * A context menu option to add to the editor context menu.
 *
 * @public
 */
export interface ContextMenuOptionConfig {
  /** Display title of the menu item. */
  title: string;
  /** Callback invoked when the menu item is selected. */
  onSelect: () => void;
  /** Whether the menu item is disabled. */
  isDisabled?: boolean;
}

/**
 * The option list's element id, referenced by the focused editor's `aria-controls`. Its own
 * namespace rather than Lexical's shared `typeahead-*` ids: those are reused by every menu built on
 * Lexical's typeahead (the marker menu among them), and an `aria-activedescendant` IDREF that
 * resolves to the wrong menu's item announces the wrong thing.
 */
const CONTEXT_MENU_LIST_ID = "editor-context-menu";

/** The element id of the option at `index`, referenced by `aria-activedescendant`. */
function contextMenuItemId(index: number) {
  return `${CONTEXT_MENU_LIST_ID}-item-${index}`;
}

/** A keydown for one of these alone (no other key) is not a keystroke the modal menu claims. */
const MODIFIER_ONLY_KEYS = new Set(["Shift", "Control", "Alt", "Meta"]);

function ContextMenuItem({
  index,
  isSelected,
  onClick,
  onMouseMove,
  option,
}: {
  index: number;
  isSelected: boolean;
  onClick: () => void;
  onMouseMove: () => void;
  option: ContextMenuOption;
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  if (option.isDisabled) {
    className += " disabled";
  }
  return (
    <li
      tabIndex={-1}
      className={className}
      role="option"
      aria-selected={isSelected}
      aria-disabled={option.isDisabled}
      id={contextMenuItemId(index)}
      onMouseMove={onMouseMove}
      onClick={option.isDisabled ? undefined : onClick}
    >
      <span className="text">{option.title}</span>
    </li>
  );
}

function ContextMenu({
  options,
  selectedItemIndex,
  onOptionClick,
  onOptionMouseMove,
}: {
  selectedItemIndex: number | undefined;
  onOptionClick: (option: ContextMenuOption, index: number) => void;
  onOptionMouseMove: (index: number) => void;
  options: ContextMenuOption[];
}) {
  return (
    <div className="typeahead-popover">
      {/* The items are `role="option"`, which only means something inside a listbox; on a bare
          `ul` a screen reader has no list to announce a position within. */}
      <ul id={CONTEXT_MENU_LIST_ID} role="listbox" aria-label="Editor context menu">
        {options.map((option: ContextMenuOption, i: number) => (
          <ContextMenuItem
            index={i}
            isSelected={selectedItemIndex === i}
            onClick={() => onOptionClick(option, i)}
            onMouseMove={() => onOptionMouseMove(i)}
            key={`${i}-${option.title}`}
            option={option}
          />
        ))}
      </ul>
    </div>
  );
}

let optionKeyCounter = 0;

export class ContextMenuOption {
  key: string;
  title: string;
  onSelect: () => void;
  isDisabled: boolean;

  constructor(
    title: string,
    options: {
      onSelect: () => void;
      isDisabled?: boolean;
    },
  ) {
    this.key = `context-menu-option-${optionKeyCounter++}`;
    this.title = title;
    this.onSelect = options.onSelect.bind(this);
    this.isDisabled = options.isDisabled || false;
  }
}

export function ContextMenuPlugin({
  options: extraOptions,
}: {
  options?: ContextMenuOptionConfig[];
} = {}): ReactElement | null {
  const [editor] = useLexicalComposerContext();
  const [isReadonly, setIsReadonly] = useState(() => !editor.isEditable());
  const [menuState, setMenuState] = useState<{ isOpen: boolean; x: number; y: number }>({
    isOpen: false,
    x: 0,
    y: 0,
  });
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  const options = useMemo(() => {
    const builtIn = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new ContextMenuOption(`Cut`, {
        onSelect: () => {
          cutSelection(editor);
        },
        isDisabled: isReadonly,
      }),
      new ContextMenuOption(`Copy`, {
        onSelect: () => {
          copySelection(editor);
        },
      }),
      new ContextMenuOption(`Paste`, {
        onSelect: () => {
          pasteSelection(editor);
        },
        isDisabled: isReadonly,
      }),
      new ContextMenuOption(`Paste as Plain Text`, {
        onSelect: () => {
          pasteSelectionAsPlainText(editor);
        },
        isDisabled: isReadonly,
      }),
    ];
    const extra = (extraOptions ?? []).map(
      (opt) =>
        new ContextMenuOption(opt.title, { onSelect: opt.onSelect, isDisabled: opt.isDisabled }),
    );
    return [...builtIn, ...extra];
  }, [editor, isReadonly, extraOptions]);

  const menuRef = useRef<HTMLDivElement>(null);
  // What had focus when the menu opened, so the keydown guard below can tell "focus never moved"
  // apart from "focus moved to a control outside the editor" — see that guard for why the
  // distinction matters.
  const focusAtOpenRef = useRef<Element | null>(null);

  const closeMenu = useCallback(() => {
    setMenuState((prev) => ({ ...prev, isOpen: false }));
    setSelectedIndex(undefined);
  }, []);

  // This plugin is exported on its own, so a host can mount it without `ClipboardPlugin` — and its
  // Cut/Copy options would then hit the unguarded synthesized-copy path, overwriting whatever the
  // clipboard already held with `@lexical/clipboard`'s hidden placeholder character. Registering
  // the guard here keeps the plugin self-sufficient; a second registration alongside
  // `ClipboardPlugin`'s is harmless, since both listeners sit at the same priority and the first
  // one to claim an empty selection stops propagation before the other runs.
  useEffect(() => registerEmptyCopyGuard(editor), [editor]);

  // Register context menu event on editor root
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (editor.getRootElement() === target || isImmutableChapterElement(target)) {
        return;
      }
      event.preventDefault();
      focusAtOpenRef.current = document.activeElement;
      setMenuState({ isOpen: true, x: event.clientX, y: event.clientY });
      setSelectedIndex(undefined);
    };

    return editor.registerRootListener((rootElement, prevRootElement) => {
      prevRootElement?.removeEventListener("contextmenu", handleContextMenu);
      if (!rootElement) return;
      rootElement.addEventListener("contextmenu", handleContextMenu);
    });
  }, [editor]);

  // Close menu on scroll
  useEffect(() => {
    if (!menuState.isOpen) return;
    const handleScroll = (event: Event) => {
      // A scroll INSIDE the menu is the user reaching items below the fold, and the menu has to
      // survive it: this listener is on `window` in capture phase, which fires for a descendant's
      // non-bubbling scroll event too, so closing on every scroll would leave a menu taller than
      // its own `max-height` impossible to scroll at all. Only a scroll of something else leaves
      // the menu stale — it is positioned in fixed viewport coordinates, so the content it was
      // opened over has moved out from under it.
      // `event.target` is `window` itself for a scroll dispatched directly on `window` (rather
      // than on the document or an element), and `Node.prototype.contains` throws on a non-Node
      // argument.
      const target = event.target;
      if (target instanceof Node && menuRef.current?.contains(target)) return;
      closeMenu();
    };
    globalThis.addEventListener("scroll", handleScroll, true);
    return () => globalThis.removeEventListener("scroll", handleScroll, true);
  }, [menuState.isOpen, closeMenu]);

  // Close menu on click outside
  useEffect(() => {
    if (!menuState.isOpen) return;
    const handlePointerDown = () => {
      closeMenu();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [menuState.isOpen, closeMenu]);

  // Keyboard navigation and close on Escape
  useEffect(() => {
    if (!menuState.isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      // An IME owns a composing keystroke (including Enter, which often confirms a candidate);
      // `keyCode === 229` is the same signal for browsers that don't yet set `isComposing` on
      // every event in a composition. Let it through untouched either way.
      if (event.isComposing || event.keyCode === 229) return;
      if (event.key === "Escape") {
        closeMenu();
        return;
      }
      // The menu drives the keyboard only while focus is still where it was when the menu opened,
      // or has moved to the menu's own DOM (a mousedown on a disabled, `tabIndex=-1` item focuses
      // it without invoking anything, and that is still the menu holding the keyboard, not focus
      // moving away). Nothing closes the menu when focus moves on — a host calling `.focus()` on
      // another control while the menu is open, since Tab itself is swallowed like any other key
      // now that the menu is modal — and this listener hears the whole document, so once focus has
      // MOVED to a control outside the editor root and outside the menu, that control's keys are
      // its own — claiming Enter there would stop a focused button from ever activating.
      // Focus-at-open still counts as "the editor's own" even when it sits outside the root: a
      // READ-ONLY editor's root (`contentEditable=false`, no tabIndex) can never take focus, so a
      // right-click there leaves focus wherever the mousedown happened to land — `body`, or a
      // mouse-focusable ancestor such as a scroll container — and that pre-existing focus target
      // has not "moved on" from anywhere; it was never inside the root to begin with.
      const focused = document.activeElement;
      if (
        focused &&
        focused !== document.body &&
        focused !== focusAtOpenRef.current &&
        !editor.getRootElement()?.contains(focused) &&
        !menuRef.current?.contains(focused)
      )
        return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        event.stopPropagation();
        setSelectedIndex((prev) => (prev === undefined ? 0 : (prev + 1) % options.length));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        event.stopPropagation();
        setSelectedIndex((prev) =>
          prev === undefined ? options.length - 1 : (prev - 1 + options.length) % options.length,
        );
      } else if (event.key === "Enter") {
        // The menu owns Enter for as long as it is open, whatever is highlighted, and swallows
        // every press it does not act on rather than handing it back. The editor keeps DOM focus
        // behind the menu, so an unclaimed Enter would reach Lexical and split the paragraph there
        // — or reach a host that gates its own Enter behavior on this menu and start a second
        // keyboard mode underneath a menu that is still armed.
        event.preventDefault();
        event.stopPropagation();
        const option = selectedIndex === undefined ? undefined : options[selectedIndex];
        // A disabled option is a no-op that leaves the menu open, the way a native menu behaves.
        if (option && !option.isDisabled) {
          editor.update(() => {
            option.onSelect();
          });
          closeMenu();
        }
      } else if (MODIFIER_ONLY_KEYS.has(event.key)) {
        // A bare modifier held down (e.g. Shift on its way to a Shift+ArrowDown chord elsewhere)
        // is not itself a keystroke to claim.
        return;
      } else {
        // The menu is modal for every other key while it is open: like a native context menu, it
        // holds the keyboard so nothing — a typed character, Backspace, Delete, Tab — reaches the
        // editor behind it. Escape closes it first, if that is what the user wants instead.
        event.preventDefault();
        event.stopPropagation();
      }
    };
    // Use capture phase so this fires before Lexical's own keydown handler,
    // which would otherwise consume arrow keys and move the editor cursor.
    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, [menuState.isOpen, closeMenu, options, selectedIndex, editor]);

  // Focus stays in the contenteditable the whole time the menu is open — that is what keeps the
  // selection the chosen item acts on — so the menu cannot be announced from its own DOM. Point the
  // focused element at the option list instead, the way Lexical's own typeahead menu does.
  useEffect(() => {
    if (!menuState.isOpen) return undefined;
    const rootElement = editor.getRootElement();
    if (!rootElement) return undefined;
    rootElement.setAttribute("aria-controls", CONTEXT_MENU_LIST_ID);
    return () => {
      rootElement.removeAttribute("aria-controls");
      rootElement.removeAttribute("aria-activedescendant");
    };
  }, [editor, menuState.isOpen]);

  // Which option is highlighted, announced from that same focused element. A freshly opened menu
  // has no highlight, and then there is nothing to point at.
  useEffect(() => {
    if (!menuState.isOpen) return;
    const rootElement = editor.getRootElement();
    if (!rootElement) return;
    if (selectedIndex === undefined) {
      rootElement.removeAttribute("aria-activedescendant");
      return;
    }
    rootElement.setAttribute("aria-activedescendant", contextMenuItemId(selectedIndex));
    // Arrow-key navigation can move the highlight past what a panel-clamped, scrollable list
    // shows, so keyboard and mouse use have to agree on what "highlighted" means: bring the item
    // into view within its own `ul`, not the page — `Element.scrollIntoView` would try to scroll
    // an ancestor of the fixed-position popover too, and this environment's DOM (like jsdom, which
    // has no `scrollIntoView` at all) doesn't need to support it for this to work.
    const list = document.getElementById(CONTEXT_MENU_LIST_ID);
    const item = document.getElementById(contextMenuItemId(selectedIndex));
    if (!list || !item) return;
    // `list` is `position: static`, so its items' `offsetTop` is measured from the outer
    // fixed-position portal div (their nearest POSITIONED ancestor), not from `list` itself. Any
    // spacing inside that portal above the list — e.g. `padding-top` on `.typeahead-popover` —
    // shifts every item's `offsetTop` by that amount while its on-screen position does not move,
    // so `offsetTop` alone overshoots. Rect math is relative to `list`'s own on-screen position
    // instead, so it holds regardless of what any ancestor's layout does.
    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const itemTop = itemRect.top - listRect.top + list.scrollTop;
    const itemBottom = itemRect.bottom - listRect.top + list.scrollTop;
    if (itemTop < list.scrollTop) {
      list.scrollTop = itemTop;
    } else if (itemBottom > list.scrollTop + list.clientHeight) {
      list.scrollTop = itemBottom - list.clientHeight;
    }
  }, [editor, menuState.isOpen, selectedIndex]);

  useEffect(
    () =>
      editor.registerEditableListener((editable) => {
        setIsReadonly(!editable);
      }),
    [editor],
  );

  // Clamp menu position to viewport bounds before first paint to prevent off-screen rendering.
  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const { width, height } = menu.getBoundingClientRect();
    const clampedLeft = Math.max(0, Math.min(menuState.x, globalThis.innerWidth - width));
    const clampedTop = Math.max(0, Math.min(menuState.y, globalThis.innerHeight - height));
    menu.style.left = `${clampedLeft}px`;
    menu.style.top = `${clampedTop}px`;
    menu.style.visibility = "visible";
  }, [menuState.isOpen, menuState.x, menuState.y]);

  if (!menuState.isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={menuRef}
      className="typeahead-popover auto-embed-menu"
      style={{
        left: menuState.x,
        position: "fixed",
        top: menuState.y,
        userSelect: "none",
        visibility: "hidden",
        width: 200,
        zIndex: 9999,
      }}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <ContextMenu
        options={options}
        selectedItemIndex={selectedIndex}
        onOptionClick={(option: ContextMenuOption) => {
          if (!option.isDisabled) {
            editor.update(() => {
              option.onSelect();
            });
            closeMenu();
          }
        }}
        onOptionMouseMove={(index: number) => {
          // `mousemove`, not `mouseenter`/`mouseover`: a menu clamped into the viewport can open
          // with the (stationary) pointer already over an item, and a browser's post-layout hover
          // recompute fires `mouseover`/`mouseenter` for that with no real pointer motion — the
          // user never chose that item. Only an actual move highlights one.
          setSelectedIndex((prev) => (prev === index ? prev : index));
        }}
      />
    </div>,
    document.body,
  );
}
