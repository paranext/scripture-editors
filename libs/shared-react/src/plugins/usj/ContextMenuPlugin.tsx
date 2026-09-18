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

function ContextMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option,
}: {
  index: number;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
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
      onMouseEnter={onMouseEnter}
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
  onOptionMouseEnter,
}: {
  selectedItemIndex: number | undefined;
  onOptionClick: (option: ContextMenuOption, index: number) => void;
  onOptionMouseEnter: (index: number) => void;
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
            onMouseEnter={() => onOptionMouseEnter(i)}
            key={option.key}
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
      const target = event.target as Node | null;
      if (target && menuRef.current?.contains(target)) return;
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
      if (event.key === "Escape") {
        closeMenu();
        return;
      }
      // The menu drives the keyboard only while the editor holds focus behind it. Nothing closes
      // the menu when focus moves on (Tab), and this listener hears the whole document, so once
      // another control has focus its keys are its own — claiming Enter there would stop a focused
      // button from ever activating.
      const focused = document.activeElement;
      if (focused && focused !== document.body && !editor.getRootElement()?.contains(focused))
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
    if (selectedIndex === undefined) rootElement.removeAttribute("aria-activedescendant");
    else rootElement.setAttribute("aria-activedescendant", contextMenuItemId(selectedIndex));
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
        onOptionMouseEnter={(index: number) => {
          setSelectedIndex(index);
        }}
      />
    </div>,
    document.body,
  );
}
