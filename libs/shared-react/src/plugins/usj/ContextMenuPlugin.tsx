/**
 * Adapted from https://github.com/facebook/lexical/blob/main/packages/lexical-playground/src/plugins/ContextMenuPlugin/index.tsx
 */

import { pasteSelection, pasteSelectionAsPlainText } from "./clipboard.utils";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { COPY_COMMAND, CUT_COMMAND } from "lexical";
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
      id={"typeahead-item-" + index}
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
      <ul>
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

/** A rectangle in viewport pixels. */
interface Box {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

function intersect(a: Box, b: Box): Box {
  return {
    left: Math.max(a.left, b.left),
    top: Math.max(a.top, b.top),
    right: Math.min(a.right, b.right),
    bottom: Math.min(a.bottom, b.bottom),
  };
}

/** Overflow values that clip. `visible` is the only one that does not; `overlay` behaves as `scroll`. */
const CLIPPING_OVERFLOW = new Set(["hidden", "clip", "scroll", "auto", "overlay"]);

/**
 * Whether an element clips what overflows it. The axes can differ, so both are considered, and the
 * shorthand is read alongside them: a browser resolves the longhands, while jsdom populates only
 * whichever form was assigned. Splitting the shorthand keeps a two-value `overflow` such as
 * `visible auto` from being read as a single unrecognized value.
 */
function clipsOverflow(element: HTMLElement): boolean {
  const style = globalThis.getComputedStyle(element);
  const values = [style.overflowX, style.overflowY, ...(style.overflow || "").split(/\s+/)];
  return values.some((value) => CLIPPING_OVERFLOW.has(value));
}

/**
 * The part of `container` that is actually on screen, in viewport pixels: its own rect narrowed by
 * every ancestor that clips it and finally by the viewport. The container is often the scrollable
 * content rather than the visible pane, so its own rect can be far taller than what the user sees;
 * a menu bounded only by it would spill out of the pane. With no container, the box is the
 * viewport, which is the unscaled behavior.
 */
function getVisibleBox(container: HTMLElement | undefined): Box {
  const viewport: Box = {
    left: 0,
    top: 0,
    right: globalThis.innerWidth,
    bottom: globalThis.innerHeight,
  };
  if (!container) return viewport;

  let box: Box = container.getBoundingClientRect();
  for (let ancestor = container.parentElement; ancestor; ancestor = ancestor.parentElement) {
    if (clipsOverflow(ancestor)) {
      box = intersect(box, ancestor.getBoundingClientRect());
    }
  }
  return intersect(box, viewport);
}

export function ContextMenuPlugin({
  options: extraOptions,
  getContainer,
}: {
  options?: ContextMenuOptionConfig[];
  /**
   * Returns the element to render the menu into, instead of `document.body`. Return the element
   * whose content the menu belongs to when that element is scaled (CSS `zoom`), so the menu is
   * scaled with it and stays inside it. Called only while the menu is open; return `undefined`
   * to portal to `document.body` unscaled.
   */
  getContainer?: () => HTMLElement | undefined;
} = {}): ReactElement | null {
  const [editor] = useLexicalComposerContext();
  const [isReadonly, setIsReadonly] = useState(() => !editor.isEditable());
  const [menuState, setMenuState] = useState<{
    isOpen: boolean;
    x: number;
    y: number;
    container: HTMLElement | undefined;
  }>({
    isOpen: false,
    x: 0,
    y: 0,
    container: undefined,
  });
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  const options = useMemo(() => {
    const builtIn = [
      new ContextMenuOption(`Cut`, {
        onSelect: () => {
          editor.dispatchCommand(CUT_COMMAND, null);
        },
        isDisabled: isReadonly,
      }),
      new ContextMenuOption(`Copy`, {
        onSelect: () => {
          editor.dispatchCommand(COPY_COMMAND, null);
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

  const closeMenu = useCallback(() => {
    setMenuState((prev) => ({ ...prev, isOpen: false }));
    setSelectedIndex(undefined);
  }, []);

  // Register context menu event on editor root
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (editor.getRootElement() === target || isImmutableChapterElement(target)) {
        return;
      }
      event.preventDefault();
      setMenuState({
        isOpen: true,
        x: event.clientX,
        y: event.clientY,
        container: getContainer?.(),
      });
      setSelectedIndex(undefined);
    };

    return editor.registerRootListener((rootElement, prevRootElement) => {
      prevRootElement?.removeEventListener("contextmenu", handleContextMenu);
      if (!rootElement) return;
      rootElement.addEventListener("contextmenu", handleContextMenu);
    });
  }, [editor, getContainer]);

  // Close menu on scroll
  useEffect(() => {
    if (!menuState.isOpen) return;
    const handleScroll = () => {
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
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        event.stopPropagation();
        setSelectedIndex((prev) => (prev === undefined ? 0 : (prev + 1) % options.length));
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        event.stopPropagation();
        setSelectedIndex((prev) =>
          prev === undefined ? options.length - 1 : (prev - 1 + options.length) % options.length,
        );
      } else if (event.key === "Enter" && selectedIndex !== undefined) {
        event.preventDefault();
        event.stopPropagation();
        const option = options[selectedIndex];
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

  useEffect(
    () =>
      editor.registerEditableListener((editable) => {
        setIsReadonly(!editable);
      }),
    [editor],
  );

  const menuRef = useRef<HTMLDivElement>(null);

  // Clamp the menu into view before first paint to prevent off-screen rendering. Inside a
  // container scaled with CSS `zoom`, the element's own lengths are pre-zoom while the pointer
  // event's coordinates are rendered viewport pixels, so the placement divides by the factor.
  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const { container } = menuState;
    const factor = container?.currentCSSZoom ?? 1;
    const { width, height } = menu.getBoundingClientRect();
    const box = getVisibleBox(container);
    const clampedLeft = Math.max(box.left, Math.min(menuState.x, box.right - width));
    const clampedTop = Math.max(box.top, Math.min(menuState.y, box.bottom - height));
    menu.style.left = `${clampedLeft / factor}px`;
    menu.style.top = `${clampedTop / factor}px`;
    menu.style.visibility = "visible";
  }, [menuState]);

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
    menuState.container ?? document.body,
  );
}
