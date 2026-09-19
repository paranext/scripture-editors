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
  const clipped = intersect(box, viewport);
  // An ancestor that clips but has no layout of its own — a zero-height `body` under an
  // absolutely positioned app root, a collapsed flex parent — would otherwise leave an empty or
  // inverted box, which caps the menu to nothing and pins it to a corner. An unbounded menu is a
  // far better failure than an invisible one.
  const isEmpty = clipped.right <= clipped.left || clipped.bottom <= clipped.top;
  return isEmpty ? viewport : clipped;
}

/** The menu's width, in its own (pre-zoom) units. Also the ruler the rendered scale is read from. */
const MENU_WIDTH = 200;

/**
 * The style properties a container-hosted open writes to bound the menu. Naming them once is what
 * stops a cap added later from being written without also being cleared on the next open.
 */
const BOUNDING_STYLES = ["maxWidth", "maxHeight", "overflowY"] as const;

export function ContextMenuPlugin({
  options: extraOptions,
  getContainer,
}: {
  options?: ContextMenuOptionConfig[];
  /**
   * EXPERIMENTAL: Returns the element to render the menu into, instead of `document.body`. Return
   * the element whose content the menu belongs to when that element is scaled (CSS `zoom`), so the
   * menu is scaled with it and stays inside it. Called only while the menu is open; return
   * `undefined` to portal to `document.body` unscaled. Keep the function stable across renders — a
   * new one on every render re-registers the editor's `contextmenu` listener. The element must be
   * in the same document as the editor.
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
    // Dropping the container releases the host's element; holding it would keep a detached node
    // alive for as long as the plugin lives.
    setMenuState((prev) => ({ ...prev, isOpen: false, container: undefined }));
    setSelectedIndex(undefined);
  }, []);

  const menuRef = useRef<HTMLDivElement>(null);

  // Register context menu event on editor root
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (editor.getRootElement() === target || isImmutableChapterElement(target)) {
        return;
      }
      event.preventDefault();
      let container: HTMLElement | undefined;
      try {
        container = getContainer?.();
      } catch (error) {
        // The native menu is already suppressed by now, so a host getter that throws would
        // otherwise leave the user with no context menu at all. Unscaled is a usable fallback,
        // but a silent one looks like the option never being passed, so say so.
        console.warn("contextMenuContainer threw; rendering the menu unscaled", error);
        container = undefined;
      }
      setMenuState({ isOpen: true, x: event.clientX, y: event.clientY, container });
      setSelectedIndex(undefined);
    };

    return editor.registerRootListener((rootElement, prevRootElement) => {
      prevRootElement?.removeEventListener("contextmenu", handleContextMenu);
      if (!rootElement) return;
      rootElement.addEventListener("contextmenu", handleContextMenu);
    });
  }, [editor, getContainer]);

  // Close menu when the page moves beneath it
  useEffect(() => {
    if (!menuState.isOpen) return;
    // The listener is on the capture phase, so it also sees scrolls raised by descendants of the
    // window — including the menu's own scrollable list. Those are the user reaching an item that
    // the height cap put out of sight, not the page moving, so they leave the menu open.
    const handleScroll = (event: Event) => {
      if (event.target instanceof Node && menuRef.current?.contains(event.target)) return;
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

  // Clamp the menu into view before first paint to prevent off-screen rendering.
  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const { container } = menuState;
    const box = getVisibleBox(container);

    // Opening the menu again into the same container reuses this element rather than remounting
    // it — a second right-click, or the keyboard menu key. Clear last open's caps first, because
    // the scale below is measured from the menu's rendered width and a surviving `max-width`
    // would narrow the very thing being measured. (A change of portal target remounts instead, so
    // that path starts clean on its own.)
    BOUNDING_STYLES.forEach((property) => {
      menu.style[property] = "";
    });

    if (!container) {
      const { width, height } = menu.getBoundingClientRect();
      menu.style.left = `${Math.max(box.left, Math.min(menuState.x, box.right - width))}px`;
      menu.style.top = `${Math.max(box.top, Math.min(menuState.y, box.bottom - height))}px`;
      menu.style.visibility = "visible";
      return;
    }

    // Inside a container, the menu's own lengths are in the container's units while the pointer's
    // coordinates are rendered viewport pixels. The ratio is not just the container's CSS `zoom`:
    // a `transform: scale()` anywhere above the menu multiplies it too, and `currentCSSZoom`
    // reports only the former. So measure the ratio from the one length we wrote ourselves,
    // before any cap below narrows it.
    const unscaled = menu.getBoundingClientRect();
    const scale = unscaled.width / MENU_WIDTH;
    if (!Number.isFinite(scale) || scale <= 0) {
      // No layout to place against — a pane hidden with `display: none` has none.
      menu.style.visibility = "visible";
      return;
    }

    // Cap both axes to the visible box, in the menu's own units. Height alone is not enough: the
    // menu's width is fixed, so the zoom multiplies it, and past roughly 1.5x in a narrow pane the
    // horizontal clamp below has nothing left to give and collapses to the box's leading edge,
    // painting the remainder past it.
    menu.style.maxWidth = `${Math.min(MENU_WIDTH, (box.right - box.left) / scale)}px`;
    menu.style.maxHeight = `${(box.bottom - box.top) / scale}px`;
    menu.style.overflowY = "auto";

    // Re-measure, because those caps change the size the clamp has to fit.
    const capped = menu.getBoundingClientRect();
    const clampedLeft = Math.max(box.left, Math.min(menuState.x, box.right - capped.width));
    const clampedTop = Math.max(box.top, Math.min(menuState.y, box.bottom - capped.height));

    // A `position: fixed` element resolves against the viewport only while no ancestor establishes
    // a containing block for it, and a `transform`, `filter`, `perspective` or `contain` anywhere
    // above it silently makes that ancestor the origin instead — a popover wrapper, for one.
    // Rather than hunting for such an ancestor, recover the origin from where the menu actually
    // landed against what we wrote, then solve for the offsets. Exact in one pass for any
    // axis-aligned scaling and translation, which is what all of those produce.
    const originLeft = capped.left - scale * Number.parseFloat(menu.style.left);
    const originTop = capped.top - scale * Number.parseFloat(menu.style.top);
    menu.style.left = `${(clampedLeft - originLeft) / scale}px`;
    menu.style.top = `${(clampedTop - originTop) / scale}px`;
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
        width: MENU_WIDTH,
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
