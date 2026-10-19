import { jsx as P, jsxs as Qe, Fragment as Ii } from "react/jsx-runtime";
import { useEffect as G, forwardRef as pi, useState as Ne, useRef as ne, useCallback as Me, useMemo as ut, memo as hS, createContext as xy, useContext as Ty, Children as gS, isValidElement as mS, cloneElement as yS, useLayoutEffect as Ys, useImperativeHandle as Kc } from "react";
import { assertSafeKey as Tt, isValidBookCode as bS, MARKER_OBJECT_PROPS as kS, USJ_VERSION as nr, USJ_TYPE as rr, indexesFromUsjJsonPath as In, isUsjTextContentLocation as Lr, usjJsonPathFromIndexes as $t, isUsjPropertyValueLocation as Lo, isUsjClosingMarkerLocation as Li, isUsjClosingAttributeMarkerLocation as qo, isUsjAttributeKeyLocation as Do, isUsjAttributeMarkerLocation as Uc, isUsjMarkerLocation as Yf, getUsjDocumentLocationTypeName as xS, EMPTY_USJ as vy } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as yt, $parseSerializedNode as qr, createCommand as Xf, DecoratorNode as ca, ElementNode as ur, isHTMLElement as Xi, TextNode as st, $isRangeSelection as E, $getEditor as It, $getNodeByKey as Q, $isTextNode as v, createState as Xs, $getState as de, $getSelection as w, $isNodeSelection as Bc, ParagraphNode as Qf, $isRootNode as mn, HISTORIC_TAG as Fc, $createTextNode as Le, $setState as Gt, $isElementNode as A, $getCommonAncestor as TS, $isLineBreakNode as Qi, NODE_STATE_KEY as Dr, $isDecoratorNode as xn, $addUpdateTag as Wt, $getRoot as Ce, $createRangeSelection as Kr, $createPoint as Zt, CLICK_COMMAND as zc, COMMAND_PRIORITY_EDITOR as qi, DELETE_CHARACTER_COMMAND as jc, COMMAND_PRIORITY_HIGH as Ge, DELETE_WORD_COMMAND as Zf, DELETE_LINE_COMMAND as tc, COMMAND_PRIORITY_NORMAL as Tr, CONTROLLED_TEXT_INSERTION_COMMAND as la, COMMAND_PRIORITY_CRITICAL as He, PASTE_COMMAND as er, CUT_COMMAND as ir, REMOVE_TEXT_COMMAND as Cy, SELECTION_CHANGE_COMMAND as yn, isDOMNode as Sy, $getNearestNodeFromDOMNode as Zi, $setSelection as Fn, $getCharacterOffsets as ed, KEY_DOWN_COMMAND as Mr, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as vS, HISTORY_MERGE_TAG as td, DROP_COMMAND as nd, COPY_COMMAND as qs, COMMAND_PRIORITY_LOW as Qt, getDOMSelection as CS, isSelectionWithinEditor as _y, $createRangeSelectionFromDom as My, isDOMTextNode as SS, BLUR_COMMAND as rd, SKIP_DOM_SELECTION_TAG as Or, CLEAR_HISTORY_COMMAND as _S, INSERT_PARAGRAPH_COMMAND as Ko, INSERT_LINE_BREAK_COMMAND as MS, SELECT_ALL_COMMAND as Ey, $selectAll as ES, $isRootOrShadowRoot as id, CAN_UNDO_COMMAND as AS, CAN_REDO_COMMAND as PS, DRAGSTART_COMMAND as NS, $createNodeSelection as Ay, $hasUpdateTag as wS, getDOMSelectionFromTarget as OS, $onUpdate as Py, KEY_ENTER_COMMAND as Ny, LineBreakNode as wy, $copyNode as $S, FOCUS_COMMAND as RS, createEditor as sd, isExactShortcutMatch as IS, getDOMTextNode as LS, KEY_ESCAPE_COMMAND as Oy, UNDO_COMMAND as $y, REDO_COMMAND as Ry, CLEAR_EDITOR_COMMAND as qS } from "lexical";
import { addClassNamesToElement as Co, removeClassNamesFromElement as Ba, $findMatchingParent as Ze, $dfsIterator as Vc, $dfs as es, mergeRegister as tt, registerNestedElementResolver as od, $unwrapNode as Au, IS_APPLE as Ds } from "@lexical/utils";
import { useLexicalNodeSelection as DS } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Xn } from "fast-equals";
import As from "quill-delta";
import { useLexicalComposerContext as ve } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as KS } from "unicode-segmenter/grapheme";
import { copyToClipboard as US, $getLexicalContent as BS } from "@lexical/clipboard";
import { TreeView as FS } from "@lexical/react/LexicalTreeView";
import * as zS from "react-dom";
import { createPortal as Ni } from "react-dom";
import { LexicalComposer as Iy } from "@lexical/react/LexicalComposer";
import { ContentEditable as Ly } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as qy } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Dy } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Ky } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as jS } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as VS, createDOMRange as WS, createRectsFromDOMRange as HS } from "@lexical/selection";
import { autoUpdate as GS, computePosition as JS, shift as YS, flip as XS } from "@floating-ui/dom";
import { $generateNodesFromDOM as QS } from "@lexical/html";
import { AutoFocusPlugin as ZS } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as e_ } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Uy, LexicalCollaboration as t_ } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as n_ } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as r_ } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as i_, $isRootTextContentEmpty as s_ } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as o_ } from "@lexical/yjs";
import { Array as wh, Map as Oh, YArrayEvent as a_ } from "yjs";
const Ul = (e) => yt(qr(e)), c_ = {
  c: ["number"],
  ef: ["caller"],
  efe: ["caller"],
  ex: ["caller"],
  f: ["caller"],
  fe: ["caller"],
  id: ["code"],
  v: ["number"],
  x: ["caller"]
};
function ad(e) {
  return c_[e];
}
const q = " ", Uo = "​", Ot = q, cd = `${q}|`, zn = "p", Bo = "+", By = "-", hi = "immutable-note-caller", Fy = "immutable-verse", nc = "chapter", Pu = "verse", $h = "invalid", l_ = "text-spacing", u_ = "formatted-font", f_ = "marker-", ua = "external-usj-mutation", d_ = "selection-change", Oi = "cursor-change", ld = Xf("APP_PLACED_CARET_COMMAND"), Nu = "annotation-change", Fa = "typed-mark-wrap", ud = "delta-change", zy = "marker-settle", p_ = [
  ua,
  d_,
  Oi,
  Nu,
  ud
], jy = 2, Di = "zmsc-s", Os = "zmsc-e", h_ = [Di, Os], g_ = [
  "ts-s",
  "ts-e",
  "t-s",
  "t-e",
  "ts",
  "qt1-s",
  "qt1-e",
  "qt2-s",
  "qt2-e",
  "qt3-s",
  "qt3-e",
  "qt4-s",
  "qt4-e",
  "qt5-s",
  "qt5-e",
  "qt-s",
  "qt-e",
  // custom markers used for annotations
  Di,
  Os
], Vy = 1, fd = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], m_ = fd.filter((e) => e !== "sid" && e !== "eid");
class sr extends ca {
  __marker;
  __sid;
  __eid;
  __unknownAttributes;
  __attributeOrder;
  // `attributeOrder` rides AFTER `key`, never ahead of it: a node's key is the last argument
  // every Lexical node constructor took before this field existed, and slotting the new field
  // ahead of it would silently reinterpret an existing 5-argument call's NodeKey as the order
  // list (TypeScript consumers get a compile error; JavaScript consumers get corruption). Same
  // rule as MarkerNode's constructor.
  constructor(t = "", n, r, i, s, o) {
    super(s), this.__marker = t, this.__sid = n, this.__eid = r, this.__unknownAttributes = i, this.__attributeOrder = o;
  }
  static getType() {
    return "ms";
  }
  static clone(t) {
    const { __marker: n, __sid: r, __eid: i, __unknownAttributes: s, __attributeOrder: o, __key: a } = t;
    return new sr(n, r, i, s, a, o);
  }
  static importJSON(t) {
    return Hy().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (g_.includes(t) || t.startsWith("z") || (n?.includes(t) ?? !1));
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setSid(t.sid).setEid(t.eid).setUnknownAttributes(t.unknownAttributes).setAttributeOrder(t.attributeOrder);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const n = this.getWritable();
    return n.__sid = t, n;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setEid(t) {
    if (this.__eid === t)
      return this;
    const n = this.getWritable();
    return n.__eid = t, n;
  }
  getEid() {
    return this.getLatest().__eid;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  setAttributeOrder(t) {
    const n = this.getWritable();
    return n.__attributeOrder = t, n;
  }
  /**
   * The authored attribute order this milestone was loaded with, or `undefined` when its order is
   * the canonical one. Feed it to `milestoneAttributes` (attributeDisplay.utils.ts) — every site
   * that turns a milestone back into bytes or back into USJ goes through there, so the order
   * cannot be honored in one place and dropped in another.
   */
  getAttributeOrder() {
    return this.getLatest().__attributeOrder;
  }
  createDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`), t;
  }
  updateDOM() {
    return !1;
  }
  /**
   * A milestone paints nothing of its own: in editable marker mode its `\qt-s …\*` glyphs are real
   * sibling nodes, and in the other modes an `ImmutableTypedTextNode` carries them.
   *
   * Keep this payload EMPTY. A decorator payload with STABLE IDENTITY is unsound for any node that
   * can be re-parented, and a milestone can be — it rides a Tier-2 paragraph rebuild as a preserved
   * sentinel and is moved into the freshly created paragraph, whose children Lexical builds new
   * elements for. Lexical skips notifying its decorator listener whenever the payload is unchanged
   * (`reconcileDecorator` bails on `currentDecorators[key] === decorator`, and equal strings always
   * compare equal), so `@lexical/react`'s portal would stay bound to the OLD, detached element and
   * the live one would render nothing from then on. `""` is what makes that harmless here: there is
   * nothing to lose. Giving this node visible payload would reintroduce exactly that defect — render
   * such bytes from `createDOM` instead, the way `ImmutableTypedTextNode` does.
   */
  decorate() {
    return "";
  }
  exportJSON() {
    return {
      type: this.getType(),
      marker: this.getMarker(),
      sid: this.getSid(),
      eid: this.getEid(),
      unknownAttributes: this.getUnknownAttributes(),
      attributeOrder: this.getAttributeOrder(),
      version: Vy
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Wy(e) {
  return h_.includes(e);
}
function Hy(e, t, n, r, i) {
  return yt(new sr(e, t, n, r, void 0, i));
}
function Ue(e) {
  return e instanceof sr;
}
const dd = "f", y_ = [
  // Footnote
  dd,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function wa(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const b_ = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Gy = 1;
class Je extends ur {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = dd, n, r = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = n ?? (wa(t) === "crossref" ? By : Bo), this.__isCollapsed = r, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: n, __caller: r, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Je(n, r, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => x_(t) ? {
        conversion: k_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return pd().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (y_.includes(t) || (n?.includes(t) ?? !1));
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setCaller(t.caller).setIsCollapsed(t.isCollapsed).setCategory(t.category).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setCaller(t) {
    if (this.__caller === t)
      return this;
    const n = this.getWritable();
    return n.__caller = t, n;
  }
  getCaller() {
    return this.getLatest().__caller;
  }
  setIsCollapsed(t) {
    if (this.__isCollapsed === t)
      return this;
    const n = this.getWritable();
    return n.__isCollapsed = t, n;
  }
  toggleIsCollapsed() {
    const t = this.getWritable();
    return t.__isCollapsed = !t.__isCollapsed, t;
  }
  getIsCollapsed() {
    return this.getLatest().__isCollapsed;
  }
  setCategory(t) {
    if (this.__category === t)
      return this;
    const n = this.getWritable();
    return n.__category = t, n;
  }
  getCategory() {
    return this.getLatest().__category;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", wa(this.__marker)), t;
  }
  updateDOM(t, n) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.classList.remove(`usfm_${t.__marker}`), n.classList.add(`usfm_${this.__marker}`), n.setAttribute("data-note-kind", wa(this.__marker))), t.__caller !== this.__caller && n.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-note-kind", wa(this.getMarker()))), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      caller: this.getCaller(),
      isCollapsed: this.getIsCollapsed(),
      category: this.getCategory(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Gy
    };
  }
  // Mutation
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function k_(e) {
  const t = e.getAttribute("data-marker") ?? "f", n = e.getAttribute("data-caller") ?? "", r = e.classList.contains("collapsed");
  return { node: pd(t, n, r) };
}
function pd(e, t, n, r, i) {
  return yt(new Je(e, t, n, r, i));
}
function x_(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Je.isValidMarker(t) && e.classList.contains(Je.getType());
}
function L(e) {
  return e instanceof Je;
}
function T_(e) {
  return e?.type === Je.getType();
}
var C;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(C || (C = {}));
var T;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(T || (T = {}));
const wu = {
  id: {
    category: C.FileIdentification,
    type: T.Paragraph,
    description: "File identification information (BOOKID, FILENAME, EDITOR, MODIFICATION DATE)",
    hasEndMarker: !1,
    children: {
      FileIdentification: ["usfm", "ide"],
      Headers: ["h", "h1", "h2", "h3", "toc1", "toc2", "toc3"],
      Remarks: ["rem", "sts", "restore"],
      Introduction: [
        "imt",
        "imt1",
        "imt2",
        "imt3",
        "imt4",
        "imte",
        "imte1",
        "imte2",
        "is",
        "is1",
        "is2",
        "iot",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ior",
        "ip",
        "im",
        "ipi",
        "imi",
        "ili",
        "ili1",
        "ili2",
        "ipq",
        "imq",
        "ipr",
        "ib",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "iex",
        "ie"
      ],
      DivisionMarks: ["c", "cl"],
      TitlesHeadings: ["mt", "mt1", "mt2", "mt3", "mt4"]
    }
  },
  usfm: {
    category: C.FileIdentification,
    type: T.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: C.FileIdentification,
    type: T.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: C.Headers,
    type: T.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: C.Remarks,
    type: T.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: C.Remarks,
    type: T.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: C.Remarks,
    type: T.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction section heading, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"],
      CharacterStyling: ["no"]
    }
  },
  is1: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction outline text, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["ior", "iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  io1: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction outline text, level 1 (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["ior", "iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  io2: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction outline text, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["ior", "iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  io3: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction outline text, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["ior", "iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  io4: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction outline text, level 4",
    hasEndMarker: !1,
    children: {
      Introduction: ["ior", "iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ior: {
    category: C.Introduction,
    type: T.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction prose paragraph (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  im: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction prose paragraph, with no first line indent (may occur after poetry)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ipi: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction prose paragraph, indented, with first line indent",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  imi: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction prose paragraph text, indented, with no first line indent",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ili: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "A list entry, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ili1: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "A list entry, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ili2: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "A list entry, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ipq: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction prose paragraph, quote from the body text",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  imq: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction prose paragraph, quote from the body text, with no first line indent",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ipr: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction prose paragraph, right aligned",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ib: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction poetry text, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  iq1: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction poetry text, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  iq2: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction poetry text, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  iq3: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction poetry text, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  iex: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: C.Introduction,
    type: T.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: C.Introduction,
    type: T.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: C.DivisionMarks,
    type: T.Paragraph,
    description: "Chapter number (necessary for normal Paratext operation)",
    hasEndMarker: !1,
    children: {
      DivisionMarks: ["ca", "cp", "cl", "cd"],
      Paragraphs: ["p", "m", "po", "pr", "cls", "pi", "pi1", "pi2", "pi3", "pc", "mi", "nb"],
      Poetry: ["q", "q1", "q2", "q3", "q4", "qc", "qr", "qa", "qd", "b"],
      TitlesHeadings: [
        "mte",
        "ms",
        "ms1",
        "ms2",
        "ms3",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "r",
        "sp",
        "d",
        "sd",
        "sd1",
        "sd2",
        "sd3",
        "sd4"
      ],
      Lists: ["lh", "li", "li1", "li2", "li3", "li4", "lf", "lim", "lim1", "lim2", "lim3", "lim4"],
      Footnotes: ["f", "fe"],
      SpecialText: ["lit"],
      Breaks: ["pb"]
    }
  },
  ca: {
    category: C.DivisionMarks,
    type: T.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: C.DivisionMarks,
    type: T.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: C.DivisionMarks,
    type: T.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: C.DivisionMarks,
    type: T.Paragraph,
    description: "Chapter Description (Publishing option D, e.g. in Russian Bibles)",
    hasEndMarker: !1,
    children: {
      DivisionMarks: ["vp"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  v: {
    category: C.DivisionMarks,
    type: T.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: C.DivisionMarks,
    type: T.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: C.DivisionMarks,
    type: T.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Paragraph text, with first line indent (basic)",
    hasEndMarker: !1,
    children: {
      Paragraphs: ["pmo", "pm", "pmc", "pmr"],
      Poetry: ["qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  m: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Paragraph text, with no first line indent (may occur after poetry) (basic)",
    hasEndMarker: !1,
    children: {
      Paragraphs: ["pmo", "pm", "pmc", "pmr"],
      Poetry: ["qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  po: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Letter opening",
    hasEndMarker: !1,
    children: {
      Paragraphs: ["pmo", "pm", "pmc", "pmr"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  pr: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Text refrain (paragraph text, right aligned)",
    hasEndMarker: !1,
    children: {
      Paragraphs: ["pmo", "pm", "pmc", "pmr"],
      Poetry: ["qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  cls: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Embedded text opening",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  pm: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Embedded text paragraph",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  pmc: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Embedded text closing",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  pmr: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Embedded text refrain (e.g. Then all the people shall say, 'Amen!')",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  pi: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Paragraph text, level 1 indent (if single level), with first line indent; often used for discourse (basic)",
    hasEndMarker: !1,
    children: {
      Poetry: ["qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  pi1: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Paragraph text, level 1 indent (if multiple levels), with first line indent; often used for discourse",
    hasEndMarker: !1,
    children: {
      Poetry: ["qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  pi2: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Paragraph text, level 2 indent, with first line indent; often used for discourse",
    hasEndMarker: !1,
    children: {
      Poetry: ["qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  pi3: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Paragraph text, level 3 indent, with first line indent; often used for discourse",
    hasEndMarker: !1,
    children: {
      Poetry: ["qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  pc: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Paragraph text, centered (for Inscription)",
    hasEndMarker: !1,
    children: {
      Poetry: ["qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  mi: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Paragraph text, indented, with no first line indent; often used for discourse",
    hasEndMarker: !1,
    children: {
      Poetry: ["qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  nb: {
    category: C.Paragraphs,
    type: T.Paragraph,
    description: "Paragraph text, with no break from previous paragraph text (at chapter boundary) (basic)",
    hasEndMarker: !1,
    children: {
      Poetry: ["qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  q: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, level 1 indent (if single level)",
    hasEndMarker: !1,
    children: {
      Poetry: ["qs", "qac", "qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  q1: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, level 1 indent (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Poetry: ["qs", "qac", "qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  q2: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, level 2 indent (basic)",
    hasEndMarker: !1,
    children: {
      Poetry: ["qs", "qac", "qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  q3: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, level 3 indent",
    hasEndMarker: !1,
    children: {
      Poetry: ["qs", "qac", "qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  q4: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, level 4 indent",
    hasEndMarker: !1,
    children: {
      Poetry: ["qs", "qac", "qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  qc: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, centered",
    hasEndMarker: !1,
    children: {
      Poetry: ["qs", "qac", "qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  qr: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, Right Aligned",
    hasEndMarker: !1,
    children: {
      Poetry: ["qs", "qac", "qm", "qm1", "qm2", "qm3"],
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  qs: {
    category: C.Poetry,
    type: T.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: C.Poetry,
    type: T.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, embedded, level 1 indent (if single level)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  qm1: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, embedded, level 1 indent (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  qm2: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, embedded, level 2 indent",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  qm3: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text, embedded, level 3 indent",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  qd: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "A Hebrew musical performance annotation, similar in content to Hebrew descriptive title.",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte1"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  b: {
    category: C.Poetry,
    type: T.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division heading, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ms1: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ms2: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division heading, level 2",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  ms3: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A section heading, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["sr", "r"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  s1: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["sr", "r"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  s2: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A section heading, level 2 (e.g. Proverbs 22-24)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["sr", "r"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  s3: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A section heading, level 3 (e.g. Genesis 'The First Day')",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["sr", "r"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["no", "it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  s4: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A section heading, level 4",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["sr", "r"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  sr: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A heading, to identify the speaker (e.g. Job)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  d: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "A Hebrew text heading, to provide description (e.g. Psalms)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  sd: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: C.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: C.Lists,
    type: T.Paragraph,
    description: "List header (introductory remark)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  li: {
    category: C.Lists,
    type: T.Paragraph,
    description: "A list entry, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Lists: ["litl", "lik", "liv", "liv1", "liv2", "liv3", "liv4", "liv5"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  li1: {
    category: C.Lists,
    type: T.Paragraph,
    description: "A list entry, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Lists: ["litl", "lik", "liv", "liv1", "liv2", "liv3", "liv4", "liv5"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  li2: {
    category: C.Lists,
    type: T.Paragraph,
    description: "A list entry, level 2",
    hasEndMarker: !1,
    children: {
      Lists: ["litl", "lik", "liv", "liv1", "liv2", "liv3", "liv4", "liv5"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  li3: {
    category: C.Lists,
    type: T.Paragraph,
    description: "A list entry, level 3",
    hasEndMarker: !1,
    children: {
      Lists: ["litl", "lik", "liv", "liv1", "liv2", "liv3", "liv4", "liv5"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  li4: {
    category: C.Lists,
    type: T.Paragraph,
    description: "A list entry, level 4",
    hasEndMarker: !1,
    children: {
      Lists: ["litl", "lik", "liv", "liv1", "liv2", "liv3", "liv4", "liv5"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  lf: {
    category: C.Lists,
    type: T.Paragraph,
    description: "List footer (concluding remark)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  lim: {
    category: C.Lists,
    type: T.Paragraph,
    description: "An embedded list entry, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Lists: ["litl", "lik", "liv", "liv1", "liv2", "liv3", "liv4", "liv5"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  lim1: {
    category: C.Lists,
    type: T.Paragraph,
    description: "An embedded list entry, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Lists: ["litl", "lik", "liv", "liv1", "liv2", "liv3", "liv4", "liv5"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  lim2: {
    category: C.Lists,
    type: T.Paragraph,
    description: "An embedded list entry, level 2",
    hasEndMarker: !1,
    children: {
      Lists: ["litl", "lik", "liv", "liv1", "liv2", "liv3", "liv4", "liv5"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  lim3: {
    category: C.Lists,
    type: T.Paragraph,
    description: "An embedded list item, level 3",
    hasEndMarker: !1,
    children: {
      Lists: ["litl", "lik", "liv", "liv1", "liv2", "liv3", "liv4", "liv5"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  lim4: {
    category: C.Lists,
    type: T.Paragraph,
    description: "An embedded list entry, level 4",
    hasEndMarker: !1,
    children: {
      Lists: ["litl", "lik", "liv", "liv1", "liv2", "liv3", "liv4", "liv5"],
      Footnotes: ["f", "fe", "fm"],
      CrossReferences: ["x", "xt", "rq"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  litl: {
    category: C.Lists,
    type: T.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: C.Lists,
    type: T.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: C.Footnotes,
    type: T.Note,
    description: "A Footnote text item (basic)",
    hasEndMarker: !0,
    children: {
      Footnotes: ["fr", "ft", "fk", "fq", "fqa", "fl", "fw", "fp", "fv", "fdc"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  fe: {
    category: C.Footnotes,
    type: T.Note,
    description: "An Endnote text item",
    hasEndMarker: !0,
    children: {
      Footnotes: ["fr", "ft", "fk", "fq", "fqa", "fl", "fw", "fp", "fv", "fdc"],
      CrossReferences: ["xt"],
      SpecialText: [
        "qt",
        "nd",
        "tl",
        "dc",
        "bk",
        "sig",
        "pn",
        "png",
        "addpn",
        "wj",
        "k",
        "sls",
        "ord",
        "add"
      ],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  fr: {
    category: C.Footnotes,
    type: T.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: C.Footnotes,
    type: T.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: C.Footnotes,
    type: T.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: C.Footnotes,
    type: T.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: C.Footnotes,
    type: T.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: C.Footnotes,
    type: T.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: C.Footnotes,
    type: T.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: C.Footnotes,
    type: T.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: C.Footnotes,
    type: T.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: C.Footnotes,
    type: T.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: C.Footnotes,
    type: T.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: C.CrossReferences,
    type: T.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: C.CrossReferences,
    type: T.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: C.CrossReferences,
    type: T.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: C.CrossReferences,
    type: T.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: C.CrossReferences,
    type: T.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: C.CrossReferences,
    type: T.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: C.CrossReferences,
    type: T.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: C.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: C.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: C.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: C.CrossReferences,
    type: T.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: C.SpecialText,
    type: T.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: C.SpecialText,
    type: T.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: C.SpecialText,
    type: T.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: C.SpecialText,
    type: T.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: C.SpecialText,
    type: T.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: C.SpecialText,
    type: T.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: C.SpecialText,
    type: T.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: C.SpecialText,
    type: T.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: C.SpecialText,
    type: T.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: C.SpecialText,
    type: T.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: C.SpecialText,
    type: T.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: C.SpecialText,
    type: T.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: C.SpecialText,
    type: T.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: C.SpecialText,
    type: T.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: C.SpecialText,
    type: T.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: C.CharacterStyling,
    type: T.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: C.Breaks,
    type: T.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, Ti = {
  DivisionMarks: { add: ["v", "c"], remove: [] },
  Paragraphs: { add: ["p"], remove: [] },
  Poetry: { add: ["q", "q1", "q2", "q3", "q4", "b"], remove: [] },
  TitlesHeadings: {
    add: [
      "mte",
      "ms",
      "ms1",
      "ms2",
      "ms3",
      "s",
      "s1",
      "s2",
      "s3",
      "s4",
      "r",
      "sp",
      "d",
      "sd",
      "sd1",
      "sd2",
      "sd3",
      "sd4"
    ],
    remove: []
  }
}, Rh = {
  p: { children: Ti },
  q: { children: Ti },
  q1: { children: Ti },
  q2: { children: Ti },
  q3: { children: Ti },
  q4: { children: Ti },
  b: { children: Ti },
  qm: {
    children: {
      Paragraphs: { add: ["p"], remove: [] }
    }
  },
  c: {
    type: T.Paragraph,
    children: null
  },
  v: {
    children: null
  },
  // The following are attribute-bearing character markers present in usfm.sty and in
  // CharNode's VALID_CHAR_MARKERS, but absent from the generated usfmMarkers data.
  // They are defined here as complete entries rather than hand-edited into the
  // generated file, which would be silently lost on regeneration.
  w: {
    category: C.SpecialFeatures,
    type: T.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: C.SpecialFeatures,
    type: T.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: C.SpecialFeatures,
    type: T.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: C.SpecialFeatures,
    type: T.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function vr(e) {
  const t = Object.hasOwn(wu, e) ? wu[e] : void 0, n = Object.hasOwn(Rh, e) ? Rh[e] : void 0;
  if (!t)
    return n?.category !== void 0 && n.type !== void 0 && n.description !== void 0 && n.hasEndMarker !== void 0 ? { ...n } : void 0;
  if (!n)
    return t;
  let r = t.children ? { ...t.children } : void 0;
  if (n.children === null && (r = void 0), n.children) {
    r = r || {};
    for (const [i, s] of Object.entries(n.children)) {
      const o = i;
      if (s === null)
        Reflect.deleteProperty(r, o);
      else {
        let a = r[o] || [];
        s.remove && (a = a.filter((c) => !s.remove.includes(c))), s.add && (a = [.../* @__PURE__ */ new Set([...a, ...s.add])]), a.length > 0 ? r[o] = a : Reflect.deleteProperty(r, o);
      }
    }
    Object.keys(r).length === 0 && (r = void 0);
  }
  return {
    ...t,
    ...n,
    children: r
  };
}
const fa = "￼", Jy = "v", Yy = "c", vi = "fig", Ih = "tr", Ou = "esb", Xy = "esbe", Lh = "periph", qh = "alt", Dh = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, v_ = {
  "": "start",
  c: "center",
  r: "end"
};
function Kh(e) {
  const [, , t, n] = e;
  return n ? /^[1-5]$/.test(t) && /^[2-5]$/.test(n) && Number(n) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Uh(e) {
  const t = e.charCodeAt(0);
  return t >= 9 && t <= 13 ? !0 : t === 32 || // SPACE
  t === 133 || // NEXT LINE
  t === 160 || // NO-BREAK SPACE
  t === 5760 || // OGHAM SPACE MARK
  t >= 8192 && t <= 8202 || // EN QUAD through HAIR SPACE
  t === 8232 || // LINE SEPARATOR
  t === 8233 || // PARAGRAPH SEPARATOR
  t === 8239 || // NARROW NO-BREAK SPACE
  t === 8287 || // MEDIUM MATHEMATICAL SPACE
  t === 8203;
}
const C_ = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function S_(e) {
  let t = "", n = !1, r = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (n || (i = t.length, t += " "), n = !0) : !n && o === Uo && s + 1 < e.length && Uh(e[s + 1]) || (Uh(o) ? (n || (i = t.length, t += o), n = !0) : C_.test(o) && o === r || (t += o, n = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), r = o;
  }
  return t;
}
function __(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function M_(e, t) {
  let n = t;
  for (; n < e.length; ) {
    const r = e[n];
    if (r === "\\" || r === "|" || r === fa)
      break;
    if (r === "*") {
      n++;
      break;
    }
    if (/[\s\u200B]/.test(r))
      break;
    n++;
  }
  return { name: e.slice(t, n), next: n };
}
function E_(e, t, n) {
  if (!n || !/^[\s\u00A0\u200B]*$/.test(e.slice(0, t)))
    return !1;
  const r = e[t + 1];
  return r === void 0 || r === "\\" || /[\s\u00A0\u200B]/.test(r);
}
const A_ = /^(?:qt[1-5]?|ts)-[se]$/;
function hd(e) {
  return A_.test(e) || Wy(e);
}
function Bl(e, t) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  const r = n;
  for (; n < e.length && e[n] !== fa && !/[\s\u00A0\u200B\\]/.test(e[n]); )
    n++;
  const i = e.slice(r, n);
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  return { word: i, next: n };
}
function P_(e, t) {
  const n = [];
  let r = 0;
  for (let i = 0; i < e.length; i++) {
    if (e[i] !== fa)
      continue;
    const s = t[r];
    r++, (s === "note" || s === "verse") && n.push(i);
  }
  return n;
}
function N_(e, t, n, r, i) {
  const s = [];
  let o = 0;
  const a = P_(e, r);
  let c = 0, l;
  const u = (d) => {
    if (!d)
      return;
    const p = s[s.length - 1];
    p?.kind === "text" ? p.text += d : s.push({ kind: "text", text: d });
  }, f = (d) => {
    d.split("//").forEach((h, g) => {
      g > 0 && s.push({ kind: "optbreak" }), u(h);
    });
  };
  for (; o < e.length; ) {
    if (e[o] !== "\\") {
      for (; c < a.length && a[c] < o; )
        c++;
      if (a[c] === o) {
        l = void 0, s.push({ kind: "noteEndingPlaceholder" }), o++;
        continue;
      }
      const x = e.indexOf("\\", o);
      let S = x === -1 ? e.length : x;
      c < a.length && (S = Math.min(S, a[c])), f(S_(e.slice(o, S))), o = S;
      continue;
    }
    const d = o, { name: p, next: h } = M_(e, o + 1);
    o = h;
    const g = () => {
      for (; o < e.length && /[\s\u00A0\u200B]/.test(e[o]); )
        o++;
    };
    if (p === "") {
      if (E_(e, d, i)) {
        g(), s.push({ kind: "para", marker: "" });
        continue;
      }
      u(e.slice(d, o));
      continue;
    }
    if (p === "*") {
      s.push({ kind: "end", marker: "" });
      continue;
    }
    if (p.endsWith("*")) {
      p.slice(0, -1) === l && (l = void 0), s.push({ kind: "end", marker: p.slice(0, -1) });
      continue;
    }
    if (p === Jy) {
      const { word: x, next: S } = Bl(e, o);
      o = S, s.push({ kind: "verse", number: x });
      continue;
    }
    if (p === Yy) {
      const { word: x, next: S } = Bl(e, o);
      o = S, l = void 0, s.push({ kind: "chapter", number: x });
      continue;
    }
    const m = p.startsWith("+"), y = m ? p.slice(1) : p, k = t(y)?.type;
    if (k === T.Note || k === void 0 && Je.isValidMarker(p)) {
      const { word: x, next: S } = Bl(e, o);
      o = S, l = p, s.push({ kind: "note", marker: p, caller: x });
      continue;
    }
    if (k === T.Milestone || k === void 0 && hd(p)) {
      const x = K_(e, d, p, o);
      if (x)
        s.push(x.token), x.ejectedText && u(x.ejectedText), o = x.next;
      else {
        const S = e.indexOf("\\", o), _ = S === -1 ? e.length : S;
        u(e.slice(d, _)), o = _;
      }
      continue;
    }
    k === T.Paragraph ? (g(), s.push({ kind: "para", marker: p })) : k === T.Character ? (g(), s.push({ kind: "charOpen", marker: y, isNested: m })) : rc(y) ? (g(), rc(y)?.shape === "para" ? s.push({ kind: "para", marker: p }) : s.push({ kind: "charOpen", marker: y, isNested: m })) : (g(), !(n || l !== void 0) || p === Ou || p === Xy ? s.push({ kind: "para", marker: p }) : s.push({ kind: "charOpen", marker: y, isNested: m }));
  }
  return s;
}
const Bh = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
}, w_ = {
  chapter: ["ca", "cp"],
  verse: ["va", "vp"],
  note: ["cat"],
  sidebar: ["cat"]
};
function rc(e) {
  return Object.hasOwn(Bh, e) ? Bh[e] : void 0;
}
function O_(e) {
  return rc(e) !== void 0;
}
const $_ = /([-\w]+)\s*=\s*"(.*?)"/g, R_ = /[\s\u200B]*[\n\r][\s\u200B]*/g, Qy = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Qs(e) {
  return Qy[e];
}
const I_ = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function L_(e, t) {
  let n = 0;
  for (const r of t) {
    const i = r.index;
    if (i === void 0 || e.slice(n, i).trim() !== "")
      return !1;
    n = i + r[0].length;
  }
  return e.slice(n).trim() === "";
}
function Fo(e, t, n = Qy[t]) {
  const r = e.replace(R_, " "), i = /* @__PURE__ */ Object.create(null), s = [...r.matchAll($_)];
  if (s.length > 0) {
    if (!L_(r, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      I_.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (r.trim() && n)
    return { [n]: r };
}
function da(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function q_(e) {
  const t = Wc(e)[0], n = typeof t == "object" && "content" in t ? t.content : void 0;
  return n ? n.some((r, i) => typeof r != "object" || r.type !== "ms" || typeof n[i + 1] != "string" ? !1 : n.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function D_(e, t, n) {
  let r = t;
  for (; r < e.length && /[\s\u00A0\u200B]/.test(e[r]); )
    r++;
  if (e[r] !== "|")
    return;
  const i = e.indexOf("\\", r);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Fo(e.slice(r + 1, i), n, da(n));
  if (s)
    return { attributes: s, next: i + 2 };
}
function K_(e, t, n, r) {
  const i = e.indexOf("\\", r);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(r, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Fo(s.slice(o + 1), n, da(n)), !a && s.slice(o + 1).trim() !== "")) {
    const u = s.slice(0, o);
    return {
      token: { kind: "milestone", marker: n },
      next: r + o,
      ejectedText: u.trim() !== "" ? u.replace(/^[ \u00A0]/, "") : void 0
    };
  }
  const c = o >= 0 ? s.slice(0, o) : s;
  if (c.trim() !== "")
    return {
      token: { kind: "milestone", marker: n, attributes: a },
      next: i,
      ejectedText: c.replace(/^[ \u00A0]/, "")
    };
  const l = D_(e, i + 2, n);
  return l ? {
    token: {
      kind: "milestone",
      marker: n,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: n, attributes: a }, next: i + 2 };
}
function br(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function Xr(e) {
  return e.content || (e.content = []), e.content;
}
function Wc(e, t) {
  const n = [], r = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, f;
  const d = () => u ? Xr(u) : f ? Xr(f) : n;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? Xr(o[o.length - 1].object) : Xr(s);
    if (o.length > 0)
      return Xr(o[o.length - 1].object);
    if (!i) {
      if (p && !r)
        return d();
      i = { type: "para", marker: zn, content: [] }, d().push(i);
    }
    return Xr(i);
  }, g = (he) => {
    const z = h();
    typeof he == "string" && typeof z[z.length - 1] == "string" ? z[z.length - 1] = z[z.length - 1] + he : z.push(he);
  }, m = (he) => {
    for (let z = he; z < o.length; z += 1) {
      const ce = o[z].object;
      ce.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, k = (he) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, he || (s.closed = "false"), s = void 0);
  }, x = () => {
    c = void 0, l = void 0;
  }, S = (he, z, ce) => {
    y();
    const [, Se, We, lt] = ce, kt = {
      type: "table:cell",
      marker: lt ? z.slice(0, z.indexOf("-")) : z,
      align: v_[Se],
      content: []
    };
    lt && (kt.colspan = String(Number(lt) + 1 - Number(We))), Xr(he).push(kt), i = kt;
  }, _ = (he) => {
    u && (he || (u.closed = "false"), u = void 0);
  }, F = () => {
    f = void 0;
  };
  let U, W = -1;
  const ae = (he) => {
    U = he, W = -1;
  };
  let $ = "", D;
  const ge = () => {
    $ && g(br($)), $ = "";
  }, re = (he = !1) => {
    U?.type === "sidebar" ? $ = "" : he && $.endsWith(`
`) && ($ = $.slice(0, -1)), U = void 0, ge();
  }, qe = () => {
    if (!D)
      return;
    const he = { type: "char", marker: D.marker, content: [] };
    D.value && (he.content = [br(D.value)]), h().push(he), o.push({ object: he }), D = void 0;
  }, ye = (he, z) => {
    p = !1, x(), y(), k(!1), i = { type: "para", marker: he, content: [] }, z && (i.content = [br(z)]), d().push(i);
  }, nt = () => {
    D && (ye(D.marker, D.value), D = void 0);
  };
  let rt;
  const sn = (he) => {
    if (!rt)
      return;
    let { value: z } = rt;
    rt = void 0, he && z.endsWith(`
`) && (z = z.slice(0, -1));
    const ce = z.indexOf("|"), Se = ce >= 0 ? Fo(z.slice(ce + 1), Lh) : void 0, We = ce >= 0 ? z.slice(0, ce) : z, lt = ce >= 0 && (!Se || !!We && !!Se[qh]), kt = lt ? void 0 : Se, Cn = lt ? z : We, te = {
      type: "periph",
      ...Cn ? { [qh]: br(Cn) } : {},
      ...kt
    };
    te.content = [], d().push(te), f = te, i = void 0;
  };
  let Ye;
  const gr = () => {
    if (Ye) {
      if (Ye.shape === "para")
        ye(vi, Ye.value);
      else {
        const he = { type: "char", marker: vi, content: [] };
        Ye.value && (he.content = [br(Ye.value)]), h().push(he), o.push({ object: he });
      }
      Ye = void 0;
    }
  }, vn = N_(e, t?.getMarker ?? vr, r, t?.placeholders ?? [], !r && t?.opensNamelessParagraph === !0);
  for (let he = 0; he < vn.length; he++) {
    const z = vn[he];
    if (D) {
      if (z.kind === "text") {
        D.value += z.text;
        continue;
      }
      if (D.shape === "char" && z.kind === "end" && z.marker.replace(/^\+/, "") === D.marker) {
        if (D.value.trim() === "") {
          h().push({ type: "char", marker: D.marker, content: [] }), D = void 0, re();
          continue;
        }
        Object.assign(D.target, {
          [D.attrName]: br(D.value.trim())
        });
        const ce = D.marker;
        if (D = void 0, ce === "ca") {
          const Se = vn[he + 1];
          Se?.kind === "text" && /^[\s\u200B]*$/.test(Se.text) && he++;
        }
        continue;
      }
      if (D.shape === "para" && (z.kind === "para" || z.kind === "chapter")) {
        const ce = D.value.replace(/[\s\u200B]+$/, "");
        ce === "" ? (ye(D.marker), D = void 0) : (Object.assign(D.target, { [D.attrName]: br(ce) }), D = void 0);
      } else {
        U = void 0, (z.kind === "para" || z.kind === "chapter") && D.value.endsWith(`
`) && (D.value = D.value.slice(0, -1)), D.shape === "para" ? nt() : qe(), he--;
        continue;
      }
    }
    if (rt) {
      if (z.kind === "text" || z.kind === "optbreak") {
        rt.value += z.kind === "text" ? z.text : "//";
        continue;
      }
      sn(z.kind === "para" || z.kind === "chapter"), he--;
      continue;
    }
    if (Ye) {
      if (z.kind === "text" || z.kind === "optbreak") {
        Ye.value += z.kind === "text" ? z.text : "//";
        continue;
      }
      if (z.kind === "end" && z.marker.replace(/^\+/, "") === vi) {
        const ce = Ye.value.indexOf("|"), Se = ce >= 0 ? Fo(Ye.value.slice(ce + 1), vi) : void 0;
        if (Se) {
          const We = {};
          for (const [Cn, te] of Object.entries(Se))
            We[Cn === "src" ? "file" : Cn] = te;
          const lt = {
            type: "figure",
            marker: vi,
            ...We
          }, kt = Ye.value.slice(0, ce);
          kt && (lt.content = [br(kt)]), g(lt), Ye = void 0;
          continue;
        }
      }
      gr(), he--;
      continue;
    }
    if (U)
      if (z.kind === "text") {
        if (z.text.includes(`
`) && /^[\s\u200B]*$/.test(z.text)) {
          $ += z.text;
          continue;
        }
        re();
      } else if (z.kind === "charOpen" || z.kind === "para") {
        const ce = z.kind === "para" || !z.isNested ? rc(z.marker) : void 0, Se = w_[U.type]?.indexOf(z.marker) ?? -1;
        if (ce && ce.targetTypes.includes(U.type) && Se > W) {
          W = Se, $ = "", D = {
            target: U,
            attrName: ce.attrName,
            marker: z.marker,
            shape: ce.shape,
            value: ""
          };
          continue;
        }
        re(z.kind === "para");
      } else
        re(z.kind === "chapter");
    if (!s && !r && (z.kind === "charOpen" && !z.isNested && z.marker === vi || z.kind === "para" && z.marker === vi)) {
      y(), Ye = { shape: z.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (z.kind) {
      case "text": {
        let ce = z.text;
        if (!s && ce.endsWith(`
`)) {
          const Se = vn[he + 1];
          (Se === void 0 || Se.kind === "para" || Se.kind === "chapter") && (ce = ce.slice(0, -1));
        }
        ce && g(br(ce));
        break;
      }
      case "para": {
        const ce = !s && !r;
        if (ce && z.marker === Ih) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: Ih, content: [] }, Xr(c).push(l), i = l, p = !1;
          break;
        }
        if (ce && l) {
          const Se = Dh.exec(z.marker);
          if (Se && Kh(Se)) {
            S(l, z.marker, Se);
            break;
          }
        }
        if (x(), !r && z.marker === Ou) {
          y(), k(!1), _(!1);
          const Se = {
            type: "sidebar",
            marker: Ou,
            content: []
          };
          d().push(Se), u = Se, i = void 0, ae(u), p = !1;
          break;
        }
        if (z.marker === Xy && u) {
          y(), k(!1), _(!0), i = void 0;
          break;
        }
        if (!r && z.marker === Lh) {
          y(), k(!1), _(!1), F(), rt = { value: "" }, i = void 0, p = !1;
          break;
        }
        ye(z.marker);
        break;
      }
      case "verse": {
        k(!1);
        const ce = { type: "verse", marker: Jy, number: z.number };
        g(ce), ae(ce);
        break;
      }
      case "chapter": {
        y(), k(!1), x(), _(!1), F(), i = void 0;
        const ce = {
          type: "chapter",
          marker: Yy,
          number: z.number
        };
        n.push(ce), ae(ce), p = !0;
        break;
      }
      case "note": {
        k(!1);
        const ce = h();
        s = { type: "note", marker: z.marker, caller: z.caller, content: [] }, a = o.length, ce.push(s), ae(s);
        break;
      }
      case "charOpen": {
        if (!s && !r && l && !z.isNested) {
          const We = Dh.exec(z.marker);
          if (We && Kh(We)) {
            S(l, z.marker, We);
            break;
          }
        }
        if (!z.isNested) {
          const We = s ? a : 0;
          m(We), o.length = We;
        }
        const ce = h(), Se = { type: "char", marker: z.marker, content: [] };
        ce.push(Se), o.push({ object: Se });
        break;
      }
      case "end": {
        const ce = z.marker.replace(/^\+/, ""), Se = s ? a : 0, We = o.findLastIndex((lt, kt) => kt >= Se && lt.object.marker === ce);
        We >= 0 ? (U_(o[We].object), m(We + 1), o.length = We) : s && s.marker === ce ? k(!0) : (m(Se), o.length = Se, g({ type: "unmatched", marker: `${z.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: z.marker, ...z.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
      case "noteEndingPlaceholder":
        k(!1), g(fa);
        break;
    }
  }
  if (rt && sn(!0), Ye && gr(), D)
    if (D.shape === "para") {
      const he = D.value.replace(/[\s\u200B]+$/, "");
      he === "" ? ye(D.marker) : Object.assign(D.target, { [D.attrName]: br(he) }), D = void 0;
    } else
      D.value.endsWith(`
`) && (D.value = D.value.slice(0, -1)), qe();
  y(), k(!1), _(!1);
  const Oe = (he) => {
    for (const z of he)
      typeof z != "string" && z.content && (Oe(z.content), z.content.length === 0 && delete z.content);
  };
  return Oe(n), n;
}
function U_(e) {
  const t = e.content;
  if (!t || t.length === 0)
    return;
  let n = t.length;
  for (; n > 0; ) {
    const c = t[n - 1];
    if (typeof c != "string" && c.type !== "optbreak")
      break;
    n--;
  }
  const r = t.findIndex((c, l) => l >= n && typeof c == "string" && c.includes("|"));
  if (r < 0)
    return;
  const i = t.slice(r).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Fo(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = r, a && t.push(a), Object.assign(e, o);
}
function Ve(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ot(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function jn(e, t) {
  let n = Ve(e);
  return t && (n += `${q}${t}`), n += " ", n;
}
function Mt(e) {
  return " " + e + q;
}
function Fh(e, t) {
  return e === t || (e === " " || e === q) && (t === " " || t === q);
}
function Hc(e, t) {
  const n = Mt(t);
  let r = 0;
  for (; r < e.length && r < n.length && Fh(e[r], n[r]); )
    r += 1;
  let i = 0;
  for (; i < e.length - r && i < n.length - r && Fh(e[e.length - 1 - i], n[n.length - 1 - i]); )
    i += 1;
  return { start: r, end: e.length - i, missing: r + i < n.length };
}
function gd(e, t) {
  const { start: n, end: r } = Hc(e, t);
  return e.slice(n, r).replaceAll(q, " ");
}
const B_ = 1;
class Wn extends st {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", n = "opening", r, i = !1) {
    super(Ei(t, n, i), r), this.__marker = t, this.__markerSyntax = n, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Wn(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return Lt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: n, markerSyntax: r = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || Ei(n, r, i)
    }).getWritable();
    return o.__marker = n, o.__markerSyntax = r, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n.__text = Ei(t, n.__markerSyntax, n.__nested), n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const n = this.getWritable();
    return n.__markerSyntax = t, n.__text = Ei(n.__marker, t, n.__nested), n;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const n = this.getWritable();
    return n.__nested = t, n.__text = Ei(n.__marker, n.__markerSyntax, t), n;
  }
  getNested() {
    return this.getLatest().__nested;
  }
  createDOM(t) {
    const n = super.createDOM(t);
    return n.setAttribute("data-marker", this.__marker), n.classList.add(this.__markerSyntax), n;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return t.__marker !== this.__marker && n.setAttribute("data-marker", this.__marker), t.__markerSyntax !== this.__markerSyntax && (n.classList.remove(t.__markerSyntax), n.classList.add(this.__markerSyntax)), i;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      text: this.getTextContent(),
      marker: this.getMarker(),
      markerSyntax: this.getMarkerSyntax(),
      // Only serialize the flag for genuinely nested glyphs; absence means non-nested, so
      // existing states (and the overwhelmingly common non-nested markers) stay unchanged.
      ...this.getNested() ? { nested: !0 } : {},
      version: B_
    };
  }
}
function Lt(e, t, n) {
  return yt(new Wn(e, t, void 0, n));
}
function N(e) {
  return e instanceof Wn;
}
function Zs(e) {
  return e?.type === Wn.getType();
}
function fr(e) {
  return e.getTextContent() === Ei(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function F_(e) {
  e.setTextContent(Ei(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ei(e, t, n = !1) {
  return t === "closing" ? ot(e, n) : t === "selfClosing" ? ot("") : Ve(e, n);
}
const wt = "internal-comment", z_ = [wt], Zy = Object.freeze({}), $u = Object.freeze({}), Ru = Object.freeze({}), Iu = Object.freeze({}), Lu = Object.freeze({}), j_ = 1, Si = /* @__PURE__ */ new Map(), vs = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap();
function V_(e) {
  return zo.set(e, []), jo.set(e, /* @__PURE__ */ new Map()), () => {
    zo.delete(e), jo.delete(e);
  };
}
function W_(e) {
  const t = zo.get(e);
  return t ? (zo.set(e, []), t) : [];
}
const ic = /* @__PURE__ */ new WeakMap();
function za(e, t) {
  return JSON.stringify([e, t]);
}
function zh(e, t, n, r) {
  let i = ic.get(e);
  r ? (i || ic.set(e, i = /* @__PURE__ */ new Set()), i.add(za(t, n))) : (i?.delete(za(t, n)), jo.get(e)?.delete(za(t, n)));
}
function H_(e) {
  ic.delete(e), jo.get(e)?.clear();
}
function Oa(e, t, n, r) {
  const i = e.get(t), s = i?.[n];
  if (!i || !s || !(r in s))
    return;
  const o = kr(s, r), a = Object.keys(o).length > 0 ? { ...i, [n]: o } : kr(i, n);
  Object.keys(a).length > 0 ? e.set(t, a) : e.delete(t);
}
function G_(e, t, n) {
  Oa(Si, e, t, n), Oa(vs, e, t, n), Oa(_i, e, t, n), Oa(Mi, e, t, n);
}
class gt extends ur {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Zy, n, r, i, s, o) {
    super(o), this.__typedIDs = $a(t), this.__typedOnClicks = Fl(n), this.__typedOnRemoves = zl(r), this.__typedOnMouseEnters = jl(i), this.__typedOnMouseLeaves = Vl(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const n = $a(t.__typedIDs), r = Fl(t.__typedOnClicks), i = zl(t.__typedOnRemoves), s = jl(t.__typedOnMouseEnters), o = Vl(t.__typedOnMouseLeaves);
    return new gt(n, r, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return z_.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ki().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: j_
    };
  }
  createDOM(t, n) {
    const r = document.createElement("mark");
    Co(r, ...eb(t.theme, this.__typedIDs));
    const i = this.getOrCreateDOMClickListener(n);
    r.addEventListener("click", i);
    const s = this.getOrCreateDOMMouseEnterListener(n);
    r.addEventListener("mouseenter", s);
    const o = this.getOrCreateDOMMouseLeaveListener(n);
    return r.addEventListener("mouseleave", o), r;
  }
  updateDOM(t, n, r) {
    const i = /* @__PURE__ */ new Set([
      ...Object.keys(t.__typedIDs ?? {}),
      ...Object.keys(this.__typedIDs ?? {})
    ]);
    for (const s of i) {
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = wi(r.theme.typedMark, s), f = wi(r.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Co(n, u) : l === 0 && Ba(n, u), c === 1 ? l === 2 && Co(n, f) : l === 1 && Ba(n, f));
      const d = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ba(n, wi("annotationId", h));
      for (const h of a)
        d.has(h) || Co(n, wi("annotationId", h));
    }
    return !1;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTypedIDs(t.typedIDs);
  }
  hasID(t, n) {
    const i = this.getTypedIDs()[t];
    if (!i)
      return !1;
    for (const s of i)
      if (n === s)
        return !0;
    return !1;
  }
  getTypedIDs() {
    const t = this.getLatest();
    return se(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const n = this.getWritable(), r = $a(n.__typedIDs);
    n.__typedIDs = $a(t), n.dispatchRemovedIDs(r, n.__typedIDs, "removed"), n.pruneTypedOnClicks(), n.pruneTypedOnRemoves(), n.pruneTypedOnMouseEnters(), n.pruneTypedOnMouseLeaves(), n.syncTypedOnClicksToRegistry(), n.syncTypedOnRemovesToRegistry(), n.syncTypedOnMouseEntersToRegistry(), n.syncTypedOnMouseLeavesToRegistry();
    const i = n.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && qu(i), i;
  }
  setTypedOnClicks(t) {
    const n = this.getWritable();
    return n.__typedOnClicks = Fl(t), n.pruneTypedOnClicks(), n.syncTypedOnClicksToRegistry(), n;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return se(t) ? Si.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const n = this.getWritable();
    return n.__typedOnRemoves = zl(t), n.pruneTypedOnRemoves(), n.syncTypedOnRemovesToRegistry(), n;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return se(t) ? vs.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const n = this.getWritable();
    return n.__typedOnMouseEnters = jl(t), n.pruneTypedOnMouseEnters(), n.syncTypedOnMouseEntersToRegistry(), n;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return se(t) ? _i.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const n = this.getWritable();
    return n.__typedOnMouseLeaves = Vl(t), n.pruneTypedOnMouseLeaves(), n.syncTypedOnMouseLeavesToRegistry(), n;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return se(t) ? Mi.get(t.getKey()) ?? {} : {};
  }
  addID(t, n, r, i, s, o) {
    const a = this.getWritable();
    if (!se(a))
      return;
    Tt(t), Tt(n);
    let c = a.__typedIDs[t];
    c || (c = [], a.__typedIDs[t] = c);
    for (const l of c)
      if (n === l) {
        r && a.setOnClickFor(t, n, r), i && a.setOnRemoveFor(t, n, i), s && a.setOnMouseEnterFor(t, n, s), o && a.setOnMouseLeaveFor(t, n, o);
        return;
      }
    c.push(n), r && a.setOnClickFor(t, n, r), i && a.setOnRemoveFor(t, n, i), s && a.setOnMouseEnterFor(t, n, s), o && a.setOnMouseLeaveFor(t, n, o);
  }
  deleteID(t, n) {
    const r = this.getWritable();
    if (!se(r))
      return;
    const i = r.__typedIDs[t];
    if (!i || i.length === 0)
      return;
    for (let o = 0; o < i.length; o++)
      if (n === i[o]) {
        i.splice(o, 1), r.invokeOnRemove(t, n, "removed");
        break;
      }
    r.removeOnClickFor(t, n), r.removeOnRemoveFor(t, n), r.removeOnMouseEnterFor(t, n), r.removeOnMouseLeaveFor(t, n), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves();
    const s = r.mergeWithAdjacentTypedMarks();
    s.hasNoIDsForEveryType() && s.getParent() !== null && qu(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, n = !0) {
    const r = Ki(this.__typedIDs, this.getTypedOnClicks());
    return this.insertAfter(r, n), r;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
  extractWithChild(t, n, r) {
    if (!E(n) || r === "html")
      return !1;
    const i = n.anchor, s = n.focus, o = i.getNode(), a = s.getNode(), l = n.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const n = this.getWritable(), r = this.getTypedIDs();
    n.__suppressOnRemoveCallbacks ? n.__suppressOnRemoveCallbacks = void 0 : n.dispatchOnRemoveForTypedIDs(r, "destroyed"), Si.delete(n.getKey()), vs.delete(n.getKey()), _i.delete(n.getKey()), Mi.delete(n.getKey()), n.__typedOnClicks = void 0, n.__typedOnRemoves = void 0, n.__typedOnMouseEnters = void 0, n.__typedOnMouseLeaves = void 0, super.remove.call(n, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (n) => {
      this.handleDOMClick(n, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, n) {
    const r = Si.get(this.getKey());
    if (!r)
      return;
    const i = [];
    for (const [o, a] of Object.entries(r))
      for (const [c, l] of Object.entries(a))
        l && i.push([l, o, c]);
    if (i.length === 0)
      return;
    const s = n.read(() => this.getTextContent());
    for (const [o, a, c] of i)
      o(t, a, c, s);
  }
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (n) => {
      this.handleDOMMouseEnter(n, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, n) {
    const r = _i.get(this.getKey());
    if (!r)
      return;
    const i = [];
    for (const [o, a] of Object.entries(r))
      for (const [c, l] of Object.entries(a))
        l && i.push([l, o, c]);
    if (i.length === 0)
      return;
    const s = n.read(() => this.getTextContent());
    for (const [o, a, c] of i)
      o(t, a, c, s);
  }
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (n) => {
      this.handleDOMMouseLeave(n, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, n) {
    const r = Mi.get(this.getKey());
    if (!r)
      return;
    const i = [];
    for (const [o, a] of Object.entries(r))
      for (const [c, l] of Object.entries(a))
        l && i.push([l, o, c]);
    if (i.length === 0)
      return;
    const s = n.read(() => this.getTextContent());
    for (const [o, a, c] of i)
      o(t, a, c, s);
  }
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === $u) {
      const t = Si.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Si.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Si.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, n, r) {
    Tt(t), Tt(n);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, n) {
    if (!this.__typedOnClicks)
      return;
    const r = this.__typedOnClicks[t];
    if (!r)
      return;
    const i = kr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = kr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === $u) {
      this.__typedOnClicks = void 0, this.syncTypedOnClicksToRegistry();
      return;
    }
    const t = {};
    for (const [n, r] of Object.entries(this.__typedOnClicks)) {
      const i = this.__typedIDs[n];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(r))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[n] = o);
    }
    this.__typedOnClicks = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnClicksToRegistry();
  }
  ensureOnRemoveMapMutable() {
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Ru) {
      const t = vs.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      vs.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    vs.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, n, r) {
    Tt(t), Tt(n);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, n) {
    if (!this.__typedOnRemoves)
      return;
    const r = this.__typedOnRemoves[t];
    if (!r)
      return;
    const i = kr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = kr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Ru) {
      this.__typedOnRemoves = void 0, this.syncTypedOnRemovesToRegistry();
      return;
    }
    const t = {};
    for (const [n, r] of Object.entries(this.__typedOnRemoves)) {
      const i = this.__typedIDs[n];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(r))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[n] = o);
    }
    this.__typedOnRemoves = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnRemovesToRegistry();
  }
  ensureOnMouseEnterMapMutable() {
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Iu) {
      const t = _i.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      _i.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    _i.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, n, r) {
    Tt(t), Tt(n);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, n) {
    if (!this.__typedOnMouseEnters)
      return;
    const r = this.__typedOnMouseEnters[t];
    if (!r)
      return;
    const i = kr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = kr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Iu) {
      this.__typedOnMouseEnters = void 0, this.syncTypedOnMouseEntersToRegistry();
      return;
    }
    const t = {};
    for (const [n, r] of Object.entries(this.__typedOnMouseEnters)) {
      const i = this.__typedIDs[n];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(r))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[n] = o);
    }
    this.__typedOnMouseEnters = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnMouseEntersToRegistry();
  }
  ensureOnMouseLeaveMapMutable() {
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Lu) {
      const t = Mi.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Mi.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Mi.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, n, r) {
    Tt(t), Tt(n);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, n) {
    if (!this.__typedOnMouseLeaves)
      return;
    const r = this.__typedOnMouseLeaves[t];
    if (!r)
      return;
    const i = kr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = kr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Lu) {
      this.__typedOnMouseLeaves = void 0, this.syncTypedOnMouseLeavesToRegistry();
      return;
    }
    const t = {};
    for (const [n, r] of Object.entries(this.__typedOnMouseLeaves)) {
      const i = this.__typedIDs[n];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(r))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[n] = o);
    }
    this.__typedOnMouseLeaves = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnMouseLeavesToRegistry();
  }
  invokeOnRemove(t, n, r) {
    const s = this.getTypedOnRemoves()[t]?.[n];
    if (!s)
      return;
    const o = It(), a = za(t, n), c = jo.get(o);
    if (ic.get(o)?.has(a) || c?.get(a)?.has(this.getKey())) {
      this.removeOnRemoveFor(t, n);
      return;
    }
    if (zo.get(o)?.push([t, n]), c) {
      let l = c.get(a);
      l || c.set(a, l = /* @__PURE__ */ new Set()), l.add(this.getKey());
    }
    try {
      s(t, n, r, this.getTextContent());
    } catch (l) {
      queueMicrotask(() => o._onError(l instanceof Error ? l : new Error(String(l))));
    }
    this.removeOnRemoveFor(t, n);
  }
  dispatchRemovedIDs(t, n, r) {
    const i = J_(t, n);
    if (i.length !== 0)
      for (const [s, o] of i)
        this.invokeOnRemove(s, o, r);
  }
  dispatchOnRemoveForTypedIDs(t, n) {
    for (const [r, i] of Object.entries(t))
      if (i)
        for (const s of i)
          this.invokeOnRemove(r, s, n);
  }
  mergeWithAdjacentTypedMarks() {
    if (this.hasNoIDsForEveryType())
      return this;
    let t = this.getPreviousSibling();
    for (; se(t) && Vh(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let n = this.getNextSibling();
    for (; se(n) && Vh(this.getTypedIDs(), n.getTypedIDs()); )
      this.mergeWithNextTypedMark(n), n = this.getNextSibling();
    return this;
  }
  mergeWithPreviousTypedMark(t) {
    this.mergeOnClicksFrom(t.getTypedOnClicks()), this.mergeOnRemovesFrom(t.getTypedOnRemoves()), this.mergeOnMouseEntersFrom(t.getTypedOnMouseEnters()), this.mergeOnMouseLeavesFrom(t.getTypedOnMouseLeaves());
    const n = t.getChildren();
    n.length > 0 && this.splice(0, 0, n), t.getWritable().__suppressOnRemoveCallbacks = !0, t.remove();
  }
  mergeWithNextTypedMark(t) {
    this.mergeOnClicksFrom(t.getTypedOnClicks()), this.mergeOnRemovesFrom(t.getTypedOnRemoves()), this.mergeOnMouseEntersFrom(t.getTypedOnMouseEnters()), this.mergeOnMouseLeavesFrom(t.getTypedOnMouseLeaves());
    const n = t.getChildren();
    n.length > 0 && this.append(...n), t.getWritable().__suppressOnRemoveCallbacks = !0, t.remove();
  }
  mergeOnClicksFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = Y_(this.getTypedOnClicks(), t);
    Object.keys(n).length !== 0 && this.setTypedOnClicks(n);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = X_(this.getTypedOnRemoves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnRemoves(n);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = Q_(this.getTypedOnMouseEnters(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseEnters(n);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = Z_(this.getTypedOnMouseLeaves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseLeaves(n);
  }
}
function $a(e = Zy) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (Tt(n), !Array.isArray(r)) {
      t[n] = [];
      continue;
    }
    const i = [];
    for (const s of r)
      Tt(s), i.push(s);
    t[n] = i;
  }
  return t;
}
function Fl(e) {
  if (!e || e === $u)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Tt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function zl(e) {
  if (!e || e === Ru)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Tt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function jl(e) {
  if (!e || e === Iu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Tt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Vl(e) {
  if (!e || e === Lu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Tt(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function kr(e, t) {
  const n = {};
  for (const [r, i] of Object.entries(e))
    r !== t && (n[r] = i);
  return n;
}
function jh(e) {
  const t = {};
  for (const [n, r] of Object.entries(e))
    !r || r.length === 0 || (t[n] = [...r].sort());
  return t;
}
function J_(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(e)) {
    const s = new Set(t[r] ?? []);
    for (const o of i ?? [])
      s.has(o) || n.push([r, o]);
  }
  return n;
}
function Vh(e, t) {
  const n = jh(e), r = jh(t), i = Object.keys(n).sort(), s = Object.keys(r).sort();
  if (i.length !== s.length)
    return !1;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    if (a !== s[o])
      return !1;
    const c = n[a], l = r[a];
    if (!c || !l || c.length !== l.length)
      return !1;
    for (let u = 0; u < c.length; u++)
      if (c[u] !== l[u])
        return !1;
  }
  return !0;
}
function Y_(e, t) {
  const n = {}, r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of r) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (n[i] = c);
  }
  return n;
}
function X_(e, t) {
  const n = {}, r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of r) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (n[i] = c);
  }
  return n;
}
function Q_(e, t) {
  const n = {}, r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of r) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (n[i] = c);
  }
  return n;
}
function Z_(e, t) {
  const n = {}, r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of r) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (n[i] = c);
  }
  return n;
}
function wi(e, t) {
  return `${e}-${t}`;
}
function eb(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(t)) {
    n.push(wi(e.typedMark, r)), i.length > 1 && n.push(wi(e.typedMarkOverlap, r));
    for (const s of i)
      n.push(wi("annotationId", s));
  }
  return n;
}
function Wl(e) {
  return `external-${e}`;
}
function Ki(e, t, n, r, i) {
  return yt(new gt(e, t, n, r, i));
}
function se(e) {
  return e instanceof gt;
}
function Ui(e) {
  return e?.type === gt.getType();
}
function tb(e, t, n) {
  let r = 0;
  for (const i of n) {
    const s = Q(i);
    !se(s) || !s.hasID(e, t) || (r++, s.deleteID(e, t), s.hasNoIDsForEveryType() && qu(s));
  }
  return r;
}
function qu(e) {
  const t = e.getChildren();
  let n = null;
  for (const r of t)
    n === null ? e.insertBefore(r) : n.insertAfter(r), n = r;
  e.remove();
}
function e0(e, t, n) {
  let r = e;
  for (; r !== null; ) {
    if (se(r))
      return r.getTypedIDs()[t];
    if (v(r) && n === r.getTextContentSize()) {
      const i = r.getNextSibling();
      if (se(i))
        return i.getTypedIDs()[t];
    }
    r = r.getParent();
  }
}
const Bi = Xs("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oi = Xs("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), be = Xs("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Er = "marker-trailing-space", nb = 1, t0 = "attribute-run";
function Hl(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Ar extends ur {
  __runKind;
  constructor(t, n) {
    super(n), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: n, __key: r } = t;
    return new Ar(n, r);
  }
  static importJSON(t) {
    return rb(t.runKind).updateFromJSON(t);
  }
  // No HTML shape ever round-trips: `exportDOM` below contributes no wrapper element of its own
  // (a DocumentFragment leaves no markup behind), so there is nothing for a paste to hand back
  // for conversion.
  // Declared explicitly (rather than left unimplemented) so Lexical's dev-mode registration check
  // — which otherwise warns that a custom `exportDOM` needs a matching `importDOM` — recognizes the
  // omission as deliberate.
  static importDOM() {
    return null;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setRunKind(t.runKind);
  }
  setRunKind(t) {
    if (this.__runKind === t)
      return this;
    const n = this.getWritable();
    return n.__runKind = t, n;
  }
  getRunKind() {
    return this.getLatest().__runKind;
  }
  createDOM() {
    const t = document.createElement("span");
    t.classList.add(t0);
    const n = Hl(this.__runKind);
    return n !== void 0 && t.classList.add(n), t;
  }
  updateDOM(t, n) {
    if (t.__runKind !== this.__runKind) {
      const r = Hl(t.__runKind);
      r !== void 0 && n.classList.remove(r);
      const i = Hl(this.__runKind);
      i !== void 0 && n.classList.add(i);
    }
    return !1;
  }
  exportDOM() {
    return { element: document.createDocumentFragment() };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      runKind: this.getRunKind(),
      version: nb
    };
  }
  // Mutation
  canBeEmpty() {
    return !0;
  }
  isInline() {
    return !0;
  }
}
function rb(e) {
  return yt(new Ar(e));
}
function Be(e) {
  return e instanceof Ar;
}
const ib = [
  "fr",
  "fq",
  "fqa",
  "fk",
  "ft",
  "fl",
  "fw",
  "fp",
  "fv",
  "fm",
  "fdc"
  // Deprecated marker.
], sb = [
  "xo",
  "xop",
  "xk",
  "xq",
  "xt",
  "xta",
  "xot",
  "xnt",
  "xdc"
  // Deprecated marker.
], n0 = [
  // Chapter & Verse
  "ca",
  "cp",
  "va",
  "vp",
  // Text Features
  "add",
  "bk",
  "dc",
  "em",
  "jmp",
  "k",
  "nd",
  "ord",
  "pn",
  "png",
  "qt",
  "rb",
  "rq",
  // "ref", // This has its own tag and is not a Char
  "sig",
  "sls",
  "tl",
  "w",
  "wa",
  "wg",
  "wh",
  "wj",
  "addpn",
  // Deprecated marker.
  "pro",
  // Deprecated marker.
  // Text Formatting
  "bd",
  "it",
  "bdit",
  "no",
  "sc",
  "sup",
  // Introductions
  "ior",
  "iqt",
  // Poetry
  "qac",
  "qs",
  // Lists
  "litl",
  "lik",
  "liv",
  "liv1",
  "liv2",
  "liv3",
  "liv4",
  "liv5",
  ...ib,
  ...sb
], ob = 1, r0 = ["type", "marker", "content"];
class ze extends ur {
  __marker;
  __unknownAttributes;
  constructor(t = "", n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return "char";
  }
  static clone(t) {
    const { __marker: n, __unknownAttributes: r, __key: i } = t;
    return new ze(n, r, i);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (n0.includes(t) || (n?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && ib.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && sb.includes(t);
  }
  /**
   * Whether a character marker belongs to the note-content families - footnote or cross-reference.
   *
   * These markers only ever occur inside a `NoteNode`, and unlike every other character marker they
   * are written without a closing marker. Callers branch on this for one reason or the other, so the
   * predicate names the family rather than either consequence; each call site documents which
   * consequence it cares about.
   *
   * @param marker - The character marker to check.
   * @returns `true` if the marker is a footnote or cross-reference marker, `false` otherwise.
   */
  static isNoteContentMarker(t) {
    return ze.isValidFootnoteMarker(t) || ze.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => s0(t) ? {
        conversion: i0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ur().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM(t) {
    const n = document.createElement("span");
    return Wh(n, this.__marker, t), n.classList.add(this.__type), n;
  }
  updateDOM(t, n, r) {
    return t.__marker !== this.__marker && (n.classList.remove(`usfm_${t.__marker}`), Wh(n, this.__marker, r)), !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: ob
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = this.getUnknownAttributes()?.closed === "false", i = Ur(this.getMarker(), r ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, n), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Wh(e, t, n) {
  e.setAttribute("data-marker", t), n.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function i0(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Ur(t) };
}
function Ur(e, t) {
  return yt(new ze(e, t));
}
function s0(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ze.isValidMarker(t) && e.classList.contains(ze.getType());
}
function K(e) {
  return e instanceof ze;
}
function ab(e) {
  return e?.type === ze.getType();
}
const sc = "v", cb = 1, o0 = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ft extends st {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n, r, i, s, o, a) {
    super(n ?? t, a), this.__marker = sc, this.__number = t, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: n, __text: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Ft(n, r, i, s, o, a, c);
  }
  static importJSON(t) {
    return lb().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const n = this.getWritable();
    return n.__number = t, n;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const n = this.getWritable();
    return n.__sid = t, n;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const n = this.getWritable();
    return n.__altnumber = t, n;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const n = this.getWritable();
    return n.__pubnumber = t, n;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM(t) {
    const n = super.createDOM(t);
    return n.setAttribute("data-marker", this.__marker), n.classList.add(Pu, `usfm_${this.__marker}`), n.setAttribute("data-number", this.__number), n;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return !i && t.__number !== this.__number && n.setAttribute("data-number", this.__number), i;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      number: this.getNumber(),
      sid: this.getSid(),
      altnumber: this.getAltnumber(),
      pubnumber: this.getPubnumber(),
      unknownAttributes: this.getUnknownAttributes(),
      version: cb
    };
  }
}
function lb(e, t, n, r, i, s) {
  return yt(new Ft(e, t, n, r, i, s));
}
function Pe(e) {
  return e instanceof Ft;
}
function md(e) {
  return e?.type === Ft.getType();
}
const a0 = /* @__PURE__ */ new Set(["closed"]);
function Qn(e, t) {
  const n = Object.entries(e).filter(([r, i]) => i !== void 0 && !a0.has(r));
  return n.length === 0 ? "" : n.length === 1 && n[0][0] === t && n[0][1] !== "" ? `|${n[0][1]}` : `|${n.map(([r, i]) => `${r}="${i}"`).join(" ")}`;
}
function ub(e, t) {
  if (!t || t.length === 0)
    return e;
  const n = {};
  return t.forEach((r) => {
    Object.hasOwn(e, r) && (n[r] = e[r]);
  }), Object.entries(e).forEach(([r, i]) => {
    Object.hasOwn(n, r) || (n[r] = i);
  }), n;
}
function fb(e) {
  const t = Object.keys(e).filter((r) => !m_.includes(r)), n = [
    ...t.filter((r) => r === "sid"),
    ...t.filter((r) => r === "eid"),
    ...t.filter((r) => r !== "sid" && r !== "eid")
  ];
  return t.every((r, i) => r === n[i]) ? void 0 : t;
}
function db(e, t, n, r) {
  return ub(
    // Presence, not truthiness: an authored `sid=""` is a byte the document holds, and folding it
    // out here deletes it from the displayed run — which a settle then re-derives node state from,
    // so the empty value would be gone from the file. Matches `orderedAttributes`' own `in` test
    // directly above, which exists for exactly this reason.
    {
      ...e !== void 0 && { sid: e },
      ...t !== void 0 && { eid: t },
      ...n
    },
    r
  );
}
function Ao(e) {
  return e.getChildren().find((t) => N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function c0(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((r) => r !== "closed") ? !1 : Ao(e) === void 0 && pb(e) === void 0;
}
function pb(e) {
  return e.getChildren().find((t) => v(t) && de(t, be) === "attribute");
}
function Vo(e, t) {
  return pa(e.getNextSibling(), t);
}
const l0 = /^[ \u00A0]+$/;
function yd(e) {
  if (fr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ve(e.getMarker(), e.getNested()), n = e.getTextContent();
  return n.startsWith(t) && l0.test(n.slice(t.length));
}
function pa(e, t) {
  let n, r, i, s;
  return Be(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), N(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  yd(e) && (n = e, e = e.getNextSibling()), v(e) && de(e, be) === "attribute" && (r = e, e = e.getNextSibling()), N(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && fr(e) && (i = e), { opener: n, value: r, closer: i, wrapper: s };
}
function u0(e) {
  let t = e;
  for (; se(t); )
    t = t.getChildren()[0];
  return t;
}
function Et(e) {
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const i = t[n];
    if (!N(i) || i.getMarkerSyntax() !== "opening")
      break;
    n++;
  }
  const r = u0(t[n]);
  if (!(!v(r) || r.getType() !== st.getType()))
    return r.getTextContent() === Mt(e.getCaller()) || r.isUnmergeable() ? r : void 0;
}
function ha(e) {
  const t = Et(e);
  return t ? pa(t.getNextSibling(), "cat") : {};
}
function gi(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || N(t)) && de(t, be) !== "attribute")
    return t;
}
function hb(e) {
  const t = gi(e);
  return t ? pa(t.getNextSibling(), "ca") : {};
}
function gb(e) {
  const t = gi(e);
  if (!t)
    return;
  const n = pa(t.getNextSibling(), "ca");
  return n.wrapper ?? n.closer ?? t;
}
function mb(e) {
  const t = gb(e);
  return t ? pa(t.getNextSibling(), "cp") : {};
}
function yb(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const n = t.getMarker();
  if (!(n !== "va" && n !== "vp"))
    for (let r = t.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (Pe(r))
        return r;
      if (!(N(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || v(r) && de(r, be) === "attribute" || K(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || Be(r)))
        return;
    }
}
function Gc(e) {
  let t, n, r, i, s = e.getNextSibling();
  return Be(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), N(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  yd(s) && (t = s, s = s.getNextSibling()), v(s) && de(s, be) === "attribute" && (n = s, s = s.getNextSibling()), N(s) && s.getMarkerSyntax() === "selfClosing" && fr(s) && (r = s), { opening: t, attribute: n, closing: r, wrapper: i };
}
const oc = "c", bb = 1, f0 = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ln extends ur {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n, r, i, s, o) {
    super(o), this.__marker = oc, this.__number = t, this.__sid = n, this.__altnumber = r, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: n, __sid: r, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Ln(n, r, i, s, o, a);
  }
  static importJSON(t) {
    return kb().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const n = this.getWritable();
    return n.__number = t, n;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const n = this.getWritable();
    return n.__sid = t, n;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const n = this.getWritable();
    return n.__altnumber = t, n;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const n = this.getWritable();
    return n.__pubnumber = t, n;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(nc, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM(t, n) {
    return t.__number !== this.__number && n.setAttribute("data-number", this.__number), !1;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      number: this.getNumber(),
      sid: this.getSid(),
      altnumber: this.getAltnumber(),
      pubnumber: this.getPubnumber(),
      unknownAttributes: this.getUnknownAttributes(),
      version: bb
    };
  }
}
function kb(e, t, n, r, i) {
  return yt(new Ln(e, t, n, r, i));
}
function Ee(e) {
  return e instanceof Ln;
}
function d0(e) {
  return e?.type === Ln.getType();
}
const p0 = ["type", "marker", "content"], Du = "unknown", xb = 1, h0 = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ts extends ur {
  __tag;
  __marker;
  __unknownAttributes;
  constructor(t = "", n, r, i) {
    super(i), this.__tag = t, this.__marker = n, this.__unknownAttributes = r;
  }
  static getType() {
    return "unknown";
  }
  static clone(t) {
    const { __tag: n, __marker: r, __unknownAttributes: i, __key: s } = t;
    return new ts(n, r, i, s);
  }
  static importDOM() {
    return {
      [Du]: (t) => m0(t) ? {
        conversion: g0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return bd().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTag(t.tag).setMarker(t.marker).setUnknownAttributes(t.unknownAttributes);
  }
  setTag(t) {
    if (this.__tag === t)
      return this;
    const n = this.getWritable();
    return n.__tag = t, n;
  }
  getTag() {
    return this.getLatest().__tag;
  }
  /**
   * Whether this unknown renders inline (optbreak, ref) rather than as a block box (figure,
   * sidebar, periph, ...). Inline unknowns sit within paragraph prose and carry SIGNIFICANT
   * surrounding whitespace — the spaces Paratext 9 preserves byte-for-byte around `//` — so
   * callers must not add or strip spaces next to them.
   */
  isInlineTag() {
    return h0.has(this.getTag());
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement(Du);
    return t.setAttribute("data-tag", this.getTag()), t.setAttribute("data-marker", this.getMarker() ?? ""), t.classList.add(this.isInlineTag() ? "unknown-inline" : "unknown-block"), t.contentEditable = "false", t;
  }
  updateDOM(t, n) {
    if (t.__tag !== this.__tag) {
      n.setAttribute("data-tag", this.__tag);
      const r = this.isInlineTag();
      n.classList.toggle("unknown-inline", r), n.classList.toggle("unknown-block", !r);
    }
    return (t.__marker ?? "") !== (this.__marker ?? "") && n.setAttribute("data-marker", this.__marker ?? ""), !1;
  }
  exportDOM() {
    return { element: null };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      tag: this.getTag(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: xb
    };
  }
  // Mutation
  canBeEmpty() {
    return !0;
  }
  isInline() {
    return !0;
  }
  extractWithChild() {
    return !1;
  }
  // A CHILD-BEARING `UnknownNode` of any kind stays IN the copy. This affects ONLY the
  // `application/x-lexical-editor` (lexical-JSON) flavor, for two independent reasons: an
  // editable-marker view's own `text/html` is not a DOM export at all (Standard view renders the
  // copy walker's USFM bytes — `usfmToClipboardHtml`, platform's whitespaceDisplay.plugin.utils.ts),
  // and where Lexical's exporter DOES run, `$appendNodesToHTML` (`@lexical/html`) computes this same
  // `excludeFromCopy('html')` value but returns early on `exportDOM()`'s unconditional
  // `{element: null}` BEFORE ever consulting it. `'clone'` is never passed by any Lexical-shipped
  // code path in the installed version, so an unconditional `destination !== "clone"` would
  // exclude every `UnknownNode` from the lexical-JSON flavor outright.
  //
  // Excluding a node does not drop it silently: `$appendNodesToJSON` HOISTS the excluded node's own
  // children into its parent's list in its place. Every kind's marker and attribute bytes are
  // content-free `ImmutableTypedTextNode` display decorators (`unknownDisplayParts` builds them
  // identically for all of them), so hoisting strands decorators that still `decorate()` their own
  // literal text as loose siblings with no owning wrapper: the pasted document RENDERS the
  // construct's full USFM bytes while its USJ has lost the node and every attribute on it — a
  // convincing display over missing data, which a save then persists with no error.
  //
  // The `getChildrenSize() > 0` guard excludes a node with no children of its OWN — of any kind,
  // and for whatever reason it has none — because that is exactly when `text/plain` also emits
  // nothing for it, and the two carriers must agree. Three shapes reach it, and only the first is
  // a husk: an optbreak whose `//` display child was deleted (`markerEditTier1.utils.ts`'s
  // husk-removal check recognizes it by that same zero-child shape); a content-less construct in
  // an editable-marker view, where the marker/attribute display bytes `createUnknown`
  // (`usj-editor.adaptor.ts`) prepends are themselves children, so only a kind with no display
  // bytes at all can be childless; and, in a HIDDEN-marker view, ANY content-less construct — a
  // caption-less `figure`, an empty `ref`, every optbreak — because `createUnknown` builds no
  // display children there at all. The last is prose-copy semantics rather than a husk: a
  // hidden-marker view copies what it shows, and it shows no bytes for a construct with no
  // content.
  //
  // The guard does NOT, on its own, cover a DIFFERENT carrier-agreement gap: a selection whose
  // ending boundary resolves to an ELEMENT-type point ON this node at offset 0 (touching the
  // wrapper without covering any of its content) still marks a CHILD-BEARING node "selected" under
  // Lexical's default `isSelected` (key-membership in `selection.getNodes()`, unaffected by this
  // node's own child count), so `$appendNodesToJSON` would serialize a CHILDLESS placeholder for a
  // node that has children, disagreeing with `text/plain` (`$selectionToUsfmText`, which walks that
  // same `getNodes()` list and correctly emits nothing for this boundary). The `isSelected`
  // override below closes that second gap at its actual source, since `excludeFromCopy` has no
  // visibility into which of a node's children a given selection will include — for every
  // construct whose display bytes lead, which is all of them but `ref`; see that override for the
  // one shape it deliberately does not close, and why.
  excludeFromCopy(t) {
    return this.getChildrenSize() > 0 ? !1 : t !== "clone";
  }
  // An `UnknownNode` is only meaningfully "selected" (and so only copy-included, per the
  // `excludeFromCopy` guard above) when at least one of its own children is — mirrors
  // `$selectionToUsfmText`'s copy walker so both clipboard carriers agree at the same selection
  // boundary, the same way Lexical's own base `isSelected` (`LexicalNode.prototype.isSelected`)
  // already special-cases an inline DECORATOR node sitting as a parent's last child at an
  // exactly-there boundary point, for the identical reason. Without this, a selection ending
  // exactly at this node's own start (an ElementNode touch-boundary that covers none of its
  // content) still counts the WRAPPER as selected via the default `ElementNode.isSelected`
  // (key-membership in `selection.getNodes()`), while no child is — producing a childless entry in
  // the `application/x-lexical-editor` copy with nothing corresponding to it in `text/plain`.
  //
  // Child MEMBERSHIP is the test, deliberately, and not the narrower "does the selection cover a
  // child's CONTENT". The two differ for exactly one shape, because that boundary reaches the
  // children two ways depending on what the first child IS. A construct whose display bytes lead
  // (a `figure`'s `\fig ` glyph, an optbreak's `//`) starts with a DECORATOR: the element-type
  // point stays one, no child is in `getNodes()`, and both carriers agree. A construct with no
  // display bytes (a `ref`, whose container USFM never carried) starts with a real `TextNode`, and
  // Lexical normalizes that same point into a TEXT point at the child's offset 0 — the child is in
  // `getNodes()` contributing zero characters, so `text/plain` emits nothing for it while this
  // predicate still answers true and the construct rides along in the lexical flavor.
  //
  // Answering false there is WORSE, not better, and measurably so. Excluding the wrapper does not
  // drop it quietly: `$appendNodesToJSON` HOISTS its children in its place, and `createUnknown`
  // stamps `mode:"token"` on every text child, which `$sliceSelectedTextNodeContent` refuses to
  // slice — so the zero-width child keeps its full text, the emptied-text reset never fires, and
  // the copy ends up carrying the construct's CHARACTERS with the wrapper and its attributes
  // silently gone. That is the convincing-lie hazard this whole pair exists to prevent. Membership
  // keeps the construct whole, so the lexical flavor is a SUPERSET of `text/plain` at that one
  // boundary rather than a structural loss. That residual stands deliberately: closing it needs a
  // lever Lexical does not offer — `exportNodeToJSON` requires every ElementNode's `exportJSON()`
  // to return a `children` array, so a node cannot say "drop me AND my children".
  isSelected(t) {
    const n = t ?? w();
    if (!n)
      return !1;
    if (Bc(n) && super.isSelected(n))
      return !0;
    if (n.isCollapsed())
      return !1;
    const r = n.getNodes();
    return this.getChildren().some((i) => r.some((s) => s.is(i)));
  }
}
function g0(e) {
  const t = e.getAttribute("data-tag") ?? "", n = e.getAttribute("data-marker") ?? "";
  return { node: bd(t, n) };
}
function bd(e, t, n) {
  return yt(new ts(e, t, n));
}
function m0(e) {
  return e?.tagName.toLowerCase() === Du;
}
function et(e) {
  return e instanceof ts;
}
const Tb = "table", Ku = "immutable-table", vb = 1, y0 = ["type", "marker", "content"];
class ns extends ur {
  __unknownAttributes;
  constructor(t, n) {
    super(n), this.__unknownAttributes = t;
  }
  static getType() {
    return Ku;
  }
  static clone(t) {
    return new ns(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return b0().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setUnknownAttributes(t.unknownAttributes);
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("table");
    return t.classList.add("table"), t.setAttribute("contenteditable", "false"), t;
  }
  updateDOM() {
    return !1;
  }
  exportJSON() {
    const t = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Ku,
      ...t !== void 0 && { unknownAttributes: t },
      version: vb
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function b0(e) {
  return yt(new ns(e));
}
function Cb(e) {
  return e instanceof ns;
}
function k0(e) {
  return e?.type === Ku;
}
function Uu(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (et(t) || Cb(t))
      return !0;
  return !1;
}
const Sb = 1;
class ai extends Qf {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new ai(t.__key);
  }
  static importJSON(t) {
    return Vn().updateFromJSON(t);
  }
  getMarker() {
    return zn;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Sb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = Vn();
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function Vn() {
  return yt(new ai());
}
function St(e) {
  return e instanceof ai;
}
function Jc(e) {
  return e?.type === ai.getType();
}
function _b(e) {
  return St(e) && mn(e.getParent());
}
function kd(e) {
  return se(e) || _b(e);
}
function qn(e) {
  let t = e.getParent();
  for (; t && kd(t); )
    t = t.getParent();
  return t;
}
function Yc(e) {
  return K(qn(e));
}
function xd(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const n = e.getMarker();
  return n === t.getMarker() ? Yc(t) : t.getChildren().some((i) => K(i) && i.getMarker() === n) ? !0 : void 0;
}
function x0(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!N(t))
      return;
    const n = xd(t, e);
    n !== void 0 && t.setNested(n);
  });
}
const $i = /* @__PURE__ */ new WeakMap();
function T0(e, t, n) {
  const r = { owners: t, rederive: n };
  return $i.set(e, r), () => {
    $i.get(e) === r && $i.delete(e);
  };
}
function Mb(e, t, n) {
  const r = $i.get(e);
  !r?.rederive || !n.has(Fc) || r.derivedFor === t || (r.rederive(t), r.derivedFor = t);
}
function Bu(e) {
  return $i.get(e)?.owners;
}
function Eb(e) {
  return $i.get(It())?.owners.has(e.getKey()) ?? !1;
}
function Ab(e) {
  $i.get(It())?.owners.add(e.getKey());
}
function Wr(e) {
  return v(e) && e.getType() === st.getType() && de(e, be) !== "attribute";
}
function eo(e) {
  if (!Wr(e) || !e.getTextContent().startsWith(q))
    return 0;
  let t = e, n = t.getPreviousSibling(), r = t.getParent();
  for (; r && se(r); )
    t = r, r = t.getParent(), n ??= t.getPreviousSibling();
  if (!K(r))
    return 0;
  for (; se(n); )
    n = n.getLastChild();
  return !N(n) || n.getMarkerSyntax() !== "opening" ? 0 : Cd(n, r) ? 1 : 0;
}
function Td(e) {
  let t = e.getNextSibling();
  for (; se(t); )
    t = t.getFirstChild();
  return t;
}
function vd(e) {
  const t = e.getPreviousSibling(), n = e.getParent();
  return !N(t) || !K(n) || !Cd(t, n) || !Wr(e) ? 0 : e.getTextContent().startsWith(q) ? q.length : 0;
}
function Cd(e, t) {
  return e.getMarkerSyntax() === "opening" && xd(e, t) !== void 0;
}
function to(e, t) {
  if (!Cd(e, t))
    return;
  const n = e.getNextSibling(), r = Td(e);
  if (!(n === null || r === null))
    return N(r) ? xd(r, t) === !0 ? "spacer" : void 0 : Wr(r) ? r.getTextContent().startsWith(q) ? void 0 : r.is(n) ? "prefix" : "spacer" : "spacer";
}
function Sd(e) {
  return !Wr(Td(e)) || Uu(e) ? !1 : !__(e.getNextSibling()?.getTextContent() ?? "");
}
function Pb(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (N(t) && to(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function _d(e, t) {
  const n = w();
  if (!E(n) || !n.isCollapsed())
    return !1;
  const r = n.anchor.getNode();
  if (r.is(e) || r.is(t))
    return !0;
  if (n.anchor.offset !== 0)
    return !1;
  for (let i = e.getNextSibling(); i; ) {
    if (r.is(i))
      return !0;
    if (!se(i))
      return !1;
    i = i.getFirstChild();
  }
  return !1;
}
function Nb(e) {
  if (!e.isAttached() || Eb(e))
    return;
  const t = Bu(It()) !== void 0;
  e.getChildren().forEach((n) => {
    if (!N(n))
      return;
    const r = to(n, e);
    if (r === void 0 || _d(n, e))
      return;
    if (t && Sd(n)) {
      Ab(e);
      return;
    }
    if (r === "spacer") {
      n.insertAfter(Le(q));
      return;
    }
    const i = n.getNextSibling();
    v(i) && (v0(i) || S0(i));
  });
}
function v0(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const { anchor: n } = t;
  if (n.type !== "text" || n.key !== e.getKey() || n.offset === 0)
    return !1;
  const r = e.getTextContent();
  if (r[n.offset] !== q)
    return !1;
  const i = r.slice(0, n.offset);
  return e.setTextContent(q + i + r.slice(n.offset + 1)), e.select(n.offset + 1, n.offset + 1), !0;
}
function C0(e) {
  if (e.getMarkerSyntax() !== "opening" || !K(e.getParent()))
    return !1;
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = e.getTextContent(), { anchor: r } = t;
  if (r.key !== e.getKey() || r.offset !== n.length)
    return !1;
  const i = Ve(e.getMarker(), e.getNested()), s = n.slice(i.length);
  if (!n.startsWith(i) || !/^[|\s]+$/.test(s))
    return !1;
  const o = Td(e);
  if (!Wr(o))
    return !1;
  const a = o.getTextContent();
  return a.startsWith(q) ? (e.setTextContent(i), o.setTextContent(q + s + a.slice(q.length)), o.select(q.length + s.length, q.length + s.length), !0) : !1;
}
function wb(e, t) {
  se(e.getNextSibling()) && to(e, t) === "spacer" && e.insertAfter(Le(q));
}
function S0(e) {
  e.setTextContent(q + e.getTextContent());
  const t = w();
  if (E(t))
    for (const n of [t.anchor, t.focus])
      n.type === "text" && n.key === e.getKey() && n.set(n.key, n.offset + 1, "text");
}
function _0(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && to(t, e) !== void 0 && _d(t, e)) : !1;
}
function Md(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && to(t, e) !== void 0 && (_d(t, e) || Sd(t))) : !1;
}
function Ed(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && to(t, e) !== void 0 && Sd(t)) : !1;
}
function M0(e) {
  if (_0(e))
    return !0;
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = t.anchor.getNode();
  return (n.is(e) || e.isParentOf(n)) && Md(e);
}
const Ob = 1, E0 = "marker", Ad = Xs("isGutterMarker", {
  parse: (e) => e === !0
});
class Hn extends ca {
  __textType;
  __text;
  constructor(t = "", n = "", r) {
    super(r), this.__textType = t, this.__text = n;
  }
  static getType() {
    return "immutable-typed-text";
  }
  static clone(t) {
    const { __textType: n, __text: r, __key: i } = t;
    return new Hn(n, r, i);
  }
  static importDOM() {
    return {
      span: (t) => w0(t) ? {
        conversion: A0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Br().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTextType(t.textType).setTextContent(t.text);
  }
  setTextType(t) {
    if (this.__textType === t)
      return this;
    const n = this.getWritable();
    return n.__textType = t, n;
  }
  getTextType() {
    return this.getLatest().__textType;
  }
  setTextContent(t) {
    if (this.__text === t)
      return this;
    const n = this.getWritable();
    return n.__text = t, n;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  /** The text this glyph shows on screen, which {@link createDOM} writes into its element. */
  getRenderedText() {
    return this.getTextContent();
  }
  createDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-text-type", this.__textType), t.classList.add(this.__textType), t.textContent = this.__text, t;
  }
  updateDOM(t, n) {
    return t.__text !== this.__text && (n.textContent = this.__text), !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && n.setAttribute("data-text-type", this.getTextType()), { element: n };
  }
  /**
   * No decorator payload: the glyph bytes are rendered by {@link createDOM} instead.
   *
   * This node used to return its text here, so `@lexical/react`'s `useDecorators` painted the
   * bytes into this element through a React portal. That is unsound for a value with STABLE
   * IDENTITY. Lexical only notifies its decorator listener when the decorator value actually
   * changes — `reconcileDecorator` bails on `currentDecorators[key] === decorator` — and two equal
   * strings always compare equal. So whenever Lexical DESTROYS and RE-CREATES this node's element
   * while the node itself survives (`$createNode` runs for every child of a freshly created parent,
   * which is exactly what re-parenting a node does), the map never changed, no listener fired,
   * `useDecorators` never rebuilt its portal list, and the portal stayed pointed at the OLD,
   * detached element. The new element was left permanently EMPTY — the glyph vanished from the
   * screen while the node, the USJ, and the file on disk all still carried it, and only remounting
   * the editor brought it back.
   *
   * The marker-edit engine re-parents preserved nodes on every Tier-2 paragraph rebuild
   * (`$replaceSentinels`, tier2Rebuild.utils.ts, moves each preserved node into the rebuilt
   * paragraph), so an `\optbreak`'s `//` token — a child of the preserved `UnknownNode` — blanked
   * out the first time anything else in its paragraph settled. Rendering from `createDOM` removes
   * the portal indirection entirely: the bytes travel with the element that carries them, so any
   * number of re-parents keeps them, and there is one less React portal per glyph.
   */
  decorate() {
    return null;
  }
  exportJSON() {
    return {
      // Spread first so this node's own properties win: super contributes the NodeState (e.g.
      // `gutterMarkerState`), which `updateFromJSON` reads back, so a glyph that round-trips
      // through JSON stays the same KIND of glyph.
      ...super.exportJSON(),
      type: this.getType(),
      textType: this.getTextType(),
      text: this.getTextContent(),
      version: Ob
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function A0(e) {
  const t = e.getAttribute("data-text-type") ?? "", n = e.textContent ?? "";
  return { node: Br(t, n) };
}
function Br(e, t) {
  return yt(new Hn(e, t));
}
function P0(e) {
  return Gt(Br(E0, e), Ad, !0);
}
function N0(e) {
  return qt(e) && de(e, Ad);
}
function w0(e) {
  return e?.tagName === "span";
}
function qt(e) {
  return e instanceof Hn;
}
function $b(e) {
  return e?.type === Hn.getType();
}
const Rb = "file", Ib = "src", O0 = "colspan", $0 = "category", R0 = "alt", I0 = "closed", L0 = "false";
function q0(e) {
  return e[I0] !== L0;
}
function D0(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => [
    t === Rb ? Ib : t,
    n
  ]));
}
function K0(e, t) {
  return e === "figure" && t === Ib ? Rb : t;
}
function Lb(e, t) {
  if (e === void 0)
    return;
  const n = Number(t);
  if (!Number.isInteger(n) || n < 2)
    return e;
  let r = e.length;
  for (; r > 0; ) {
    const i = e.charCodeAt(r - 1);
    if (i < 48 || i > 57)
      break;
    r -= 1;
  }
  return r === e.length ? e : `${e}-${Number(e.slice(r)) + n - 1}`;
}
function Xc(e, t, n) {
  const r = n ?? {}, i = q0(r);
  switch (e) {
    case "optbreak":
      return { opening: "//", attributes: "", closingAttributes: "", closing: "" };
    case "ref":
    case "table":
      return { opening: "", attributes: "", closingAttributes: "", closing: "" };
    case "table:row":
      return { opening: `\\${t} `, attributes: "", closingAttributes: "", closing: "" };
    case "table:cell":
      return {
        opening: `\\${Lb(t, r[O0])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Qn(D0(r), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [$0]: s, ...o } = r;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Qn(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [R0]: s, ...o } = r;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Qn(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Qn(r, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const dn = { wantsRun: !1, valueText: void 0 }, Hr = {};
function Gl(e, t) {
  if (t === "va")
    return e;
  const n = Vo(e, "va");
  return n.wrapper ?? n.closer ?? e;
}
function Pd(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = t.anchor.getNode();
  if (n.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (A(e)) {
    const i = e.getLastDescendant();
    if (i !== null && n.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const r = e.getNextSibling();
  return r !== null && n.is(r) && t.anchor.offset === 0;
}
function Qc(e) {
  const { opener: t, closer: n } = e;
  if (!t)
    return !1;
  const r = w();
  if (!E(r) || !r.isCollapsed())
    return !1;
  const i = r.anchor.getNode(), s = i.is(t) && r.anchor.offset === t.getTextContentSize();
  return n ? s || i.is(n) : s;
}
function U0(e) {
  return Be(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : N(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && de(e, be) === "attribute";
}
function B0(e) {
  if (N(e)) {
    const r = e.getMarker();
    return r === "va" || r === "vp" ? r : void 0;
  }
  if (!v(e) || de(e, be) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const n = t.getMarker();
  return n === "va" || n === "vp" ? n : void 0;
}
function Jl(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Pe(t))
      return t;
    if (!U0(t))
      return;
  }
}
function Hh(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Pe(t),
    ownerOf: (t) => {
      if (Be(t))
        return t.getRunKind() === e ? Jl(t) : void 0;
      const n = t.getParent();
      return Be(n) ? n.getRunKind() === e ? Jl(n) : void 0 : B0(t) === e ? Jl(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Pe(t))
        return dn;
      const n = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return n === void 0 ? dn : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (t) => Pe(t) ? Vo(Gl(t, e), e) : Hr,
    graceSite: (t, n) => Pe(t) ? !n.opener && !n.closer ? Pd(Gl(t, e)) : Qc(n) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Pe(t) ? Gl(t, e) : void 0
    }
  };
}
const F0 = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => K(e),
  ownerOf: () => {
  },
  expectedPieces: () => dn,
  scanPieces: () => Hr,
  graceSite: (e) => K(e) && M0(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, z0 = {
  kind: "char",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (!v(e) || de(e, be) !== "attribute")
      return;
    const t = e.getParent();
    return K(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || Ao(e) === void 0)
      return dn;
    const t = Qn(e.getUnknownAttributes() ?? {}, Qs(e.getMarker()));
    return t === "" ? dn : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => K(e) ? { value: pb(e) } : Hr,
  graceSite: (e, t) => {
    if (!K(e) || t.value)
      return !1;
    const n = Ao(e);
    if (!n)
      return !1;
    const r = w();
    if (!E(r) || !r.isCollapsed())
      return !1;
    const i = r.anchor.getNode();
    if (i.is(n))
      return !0;
    const s = n.getPreviousSibling();
    return s !== null && i.is(s) && r.anchor.offset === s.getTextContentSize();
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "owner-children",
    glyphs: "none",
    insertRunBefore: (e) => K(e) ? Ao(e) : void 0
  }
};
function qb(e) {
  if (N(e))
    return e.getMarker() === "cat";
  if (!v(e) || de(e, be) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return N(t) && t.getMarker() === "cat";
}
function j0(e) {
  const t = e.getParent();
  if (!L(t))
    return;
  const n = Et(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!qb(r))
        return;
    }
}
const V0 = {
  kind: "cat",
  ownerPredicate: (e) => L(e),
  ownerOf: (e) => {
    if (Be(e))
      return e.getRunKind() === "cat" && L(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Be(t) ? t.getRunKind() === "cat" && L(t.getParent()) ? t.getParent() ?? void 0 : void 0 : qb(e) ? j0(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!L(e) || e.getIsCollapsed() !== !1)
      return dn;
    const t = e.getCategory();
    return t === void 0 ? dn : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => L(e) ? ha(e) : Hr,
  graceSite: (e, t) => {
    if (!L(e))
      return !1;
    if (!t.opener && !t.closer) {
      const n = Et(e);
      return n !== void 0 && Pd(n);
    }
    return Qc(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => L(e) ? Et(e) : void 0
  }
};
function W0(e) {
  return Be(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : N(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && de(e, be) === "attribute";
}
function H0(e) {
  if (N(e)) {
    const r = e.getMarker();
    return r === "ca" || r === "cp" ? r : void 0;
  }
  if (!v(e) || de(e, be) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const n = t.getMarker();
  return n === "ca" || n === "cp" ? n : void 0;
}
function G0(e) {
  const t = e.getParent();
  if (!Ee(t))
    return;
  const n = gi(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!W0(r))
        return;
    }
}
function Gh(e) {
  const t = (n) => Ee(n) ? e === "ca" ? gi(n) : gb(n) : void 0;
  return {
    kind: e,
    ownerPredicate: (n) => Ee(n),
    ownerOf: (n) => {
      if (Be(n))
        return n.getRunKind() === e && Ee(n.getParent()) ? n.getParent() ?? void 0 : void 0;
      const r = n.getParent();
      return Be(r) ? r.getRunKind() === e && Ee(r.getParent()) ? r.getParent() ?? void 0 : void 0 : H0(n) === e ? G0(n) : void 0;
    },
    expectedPieces: (n) => {
      if (!Ee(n))
        return dn;
      const r = e === "ca" ? n.getAltnumber() : n.getPubnumber();
      return r === void 0 ? dn : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (n) => Ee(n) ? e === "ca" ? hb(n) : mb(n) : Hr,
    graceSite: (n, r) => {
      if (!Ee(n))
        return !1;
      if (!r.opener && !r.closer) {
        const i = t(n);
        return i !== void 0 && Pd(i);
      }
      return Qc(r);
    },
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: e === "ca" ? "closing" : "none",
      insertRunAfter: t
    }
  };
}
function Db(e) {
  if (N(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && de(e, be) === "attribute";
}
function J0(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ue(t)) {
      const n = N(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !n || n.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Db(t))
      return;
  }
}
const Y0 = {
  kind: "milestone",
  ownerPredicate: (e) => Ue(e),
  ownerOf: (e) => {
    const t = Be(e) ? e.getRunKind() === "milestone" ? e : void 0 : Be(e.getParent()) ? e.getParent() : Db(e) ? e : void 0;
    if (!t || Be(t) && t.getRunKind() !== "milestone")
      return;
    const n = t.getPreviousSibling();
    return Be(t) ? Ue(n) ? n : void 0 : J0(t);
  },
  expectedPieces: (e) => {
    if (!Ue(e))
      return dn;
    const t = db(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), n = Qn(t, da(e.getMarker()));
    return { wantsRun: !0, valueText: n === "" ? void 0 : q + n };
  },
  scanPieces: (e) => {
    if (!Ue(e))
      return Hr;
    const { opening: t, attribute: n, closing: r, wrapper: i } = Gc(e);
    return { opener: t, value: n, closer: r, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ue(e))
      return !1;
    if (!t.opener && !t.closer) {
      const n = w();
      if (!E(n) || !n.isCollapsed())
        return !1;
      const r = n.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && r.is(i) && n.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && r.is(s) && n.anchor.offset === 0;
    }
    return Qc(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Ue(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, X0 = Xc("optbreak", void 0, void 0).opening, Q0 = {
  kind: "optbreak",
  ownerPredicate: (e) => et(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!et(t) || t.getTag() !== "optbreak"))
      return v(e) || qt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: X0 }),
  scanPieces: (e) => et(e) ? { value: e.getFirstChild() ?? void 0 } : Hr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, Z0 = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => et(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => dn,
  scanPieces: () => Hr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, eM = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => K(e),
  ownerOf: () => {
  },
  expectedPieces: () => dn,
  scanPieces: () => Hr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Wo = [
  F0,
  z0,
  Hh("va"),
  Hh("vp"),
  V0,
  Gh("ca"),
  Gh("cp"),
  Y0,
  Q0,
  Z0,
  eM
], tM = new Map(Wo.map((e) => [e.kind, e]));
function Fr(e) {
  const t = tM.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Cr(e) {
  for (const t of Wo) {
    const n = t.ownerOf(e);
    if (n)
      return { owner: n, kind: t.kind };
  }
}
function Kb(e) {
  return Cr(e) !== void 0;
}
function nM(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const { type: t, id: n, start: r, end: i, undisplayed: s } = e;
  return typeof t == "string" && typeof n == "string" && Number.isInteger(r) && Number.isInteger(i) && (s === void 0 || typeof s == "boolean");
}
const Zc = Xs("displayAnnotations", {
  parse: (e) => {
    if (typeof e != "object" || e === null)
      return;
    const { basis: t, annotations: n } = e;
    if (!(typeof t != "string" || !Array.isArray(n)) && n.every(nM))
      return { basis: t, annotations: n };
  }
});
function rM(e, t) {
  const n = new Array(e.length).fill(void 0);
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; )
    n[r] = r, r++;
  let i = 0;
  for (; i < e.length - r && i < t.length - r && e[e.length - 1 - i] === t[t.length - 1 - i]; )
    n[e.length - 1 - i] = t.length - 1 - i, i++;
  const s = e.slice(r, e.length - i), o = t.slice(r, t.length - i), a = Array.from({ length: s.length + 1 }, () => new Array(o.length + 1).fill(0));
  for (let u = s.length - 1; u >= 0; u--)
    for (let f = o.length - 1; f >= 0; f--)
      a[u][f] = s[u] === o[f] ? a[u + 1][f + 1] + 1 : Math.max(a[u + 1][f], a[u][f + 1]);
  let c = 0, l = 0;
  for (; c < s.length && l < o.length; )
    s[c] === o[l] ? (n[r + c] = r + l, c++, l++) : a[c + 1][l] >= a[c][l + 1] ? c++ : l++;
  return n;
}
function iM(e, t, n) {
  let r, i;
  for (let s = t; s < n; s++) {
    const o = e[s];
    o !== void 0 && (r ??= o, i = o);
  }
  return r === void 0 || i === void 0 ? void 0 : [r, i + 1];
}
const Ub = 1, sM = "c", Bb = "span";
class Dn extends ca {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = sM, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Dn(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Fb(t) ? {
        conversion: oM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Nd().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setShowMarker(t.showMarker).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const n = this.getWritable();
    return n.__number = t, n;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setShowMarker(t = !1) {
    if (this.__showMarker === t)
      return this;
    const n = this.getWritable();
    return n.__showMarker = t, n;
  }
  getShowMarker() {
    return this.getLatest().__showMarker;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const n = this.getWritable();
    return n.__sid = t, n;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const n = this.getWritable();
    return n.__altnumber = t, n;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const n = this.getWritable();
    return n.__pubnumber = t, n;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement(Bb);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(nc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(nc, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
  }
  /**
   * VISIBLE bytes with STABLE IDENTITY, which is only safe because of where this node lives.
   *
   * `@lexical/react` paints a decorator payload into the node's element through a portal, and
   * Lexical only rebuilds that portal when the payload CHANGES (`reconcileDecorator` bails on
   * `currentDecorators[key] === decorator`, and equal strings always compare equal). So any node
   * whose element is destroyed and re-created while the node itself survives — which is precisely
   * what re-parenting does, since Lexical builds fresh elements for every child of a newly created
   * parent — keeps a portal bound to the OLD, detached element and renders permanently EMPTY.
   *
   * A chapter escapes that only by POSITION: it is a root-level block, and the marker engine's
   * Tier-2 rebuild re-parents preserved nodes only within paragraph-kind blocks, so nothing ever
   * moves a chapter. That invariant is not enforced anywhere. Moving chapter nodes into any
   * rebuilt/re-created container would blank this glyph on screen while the node, the USJ, and the
   * file all stayed correct — a silent rendering loss with no error. If that day comes, render
   * these bytes from `createDOM` instead, the way `ImmutableTypedTextNode` does.
   */
  decorate() {
    return this.getRenderedText();
  }
  /** The text this chapter shows on screen: its whole `\c N` glyph, or only its number. */
  getRenderedText() {
    return this.getShowMarker() ? jn(this.getMarker(), this.getNumber()) : this.getNumber();
  }
  exportJSON() {
    return {
      type: this.getType(),
      marker: this.getMarker(),
      number: this.getNumber(),
      showMarker: this.getShowMarker(),
      sid: this.getSid(),
      altnumber: this.getAltnumber(),
      pubnumber: this.getPubnumber(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Ub
    };
  }
  // Mutation
  isInline() {
    return !1;
  }
  isKeyboardSelectable() {
    return !1;
  }
}
function oM(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Nd(t) };
}
function Nd(e, t, n, r, i, s) {
  return yt(new Dn(e, t, n, r, i, s));
}
function Fb(e) {
  return e ? e.classList.contains(nc) && e.tagName.toLowerCase() === Bb : !1;
}
function Gr(e) {
  return e instanceof Dn;
}
function aM(e) {
  return e?.type === Dn.getType();
}
const Ho = "id", zb = 1, cM = [
  "type",
  "marker",
  "code",
  "content"
];
class Pn extends ur {
  __marker = Ho;
  __code;
  __unknownAttributes;
  constructor(t = "", n, r) {
    super(r), this.__code = t, this.__unknownAttributes = n;
  }
  static getType() {
    return "book";
  }
  static clone(t) {
    const { __code: n, __unknownAttributes: r, __key: i } = t;
    return new Pn(n, r, i);
  }
  static importJSON(t) {
    const { code: n } = t;
    return jb(n).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return bS(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setCode(t.code).setUnknownAttributes(t.unknownAttributes);
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setCode(t) {
    if (this.__code === t)
      return this;
    const n = this.getWritable();
    return n.__code = t, n;
  }
  /**
   * Get the book code (ID).
   * @returns the book code (ID).
   */
  getCode() {
    return this.getLatest().__code;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`), t.setAttribute("data-code", this.__code), t;
  }
  updateDOM() {
    return !1;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      code: this.getCode(),
      unknownAttributes: this.getUnknownAttributes(),
      version: zb
    };
  }
}
function jb(e, t) {
  return yt(new Pn(e, t));
}
function we(e) {
  return e instanceof Pn;
}
function wd(e) {
  return e?.type === Pn.getType();
}
const lM = [
  // Identification
  "ide",
  "sts",
  "rem",
  "h",
  "toc1",
  "toc2",
  "toc3",
  "toca1",
  "toca2",
  "toca3",
  // Introductions
  "imt",
  "imt1",
  "imt2",
  "imt3",
  "imt4",
  "is",
  "is1",
  "is2",
  "ip",
  "ipi",
  "im",
  "imi",
  "ipq",
  "imq",
  "ipr",
  "iq",
  "iq1",
  "iq2",
  "iq3",
  "ili",
  "ili1",
  "ili2",
  "ib",
  "iot",
  "io",
  "io1",
  "io2",
  "io3",
  "io4",
  "iex",
  "imte",
  "imte1",
  "imte2",
  "ie",
  // Titles and Headings
  "mt",
  "mt1",
  "mt2",
  "mt3",
  "mt4",
  "mte",
  "mte1",
  "mte2",
  "cl",
  "cd",
  "ms",
  "ms1",
  "ms2",
  "ms3",
  "mr",
  "s",
  "s1",
  "s2",
  "s3",
  "s4",
  "sr",
  "r",
  "d",
  "sp",
  "sd",
  "sd1",
  "sd2",
  "sd3",
  "sd4",
  // Body Paragraphs
  zn,
  "m",
  "po",
  "cls",
  "pr",
  "pc",
  "pm",
  "pmo",
  "pmc",
  "pmr",
  "pi",
  "pi1",
  "pi2",
  "pi3",
  "mi",
  "lit",
  "nb",
  "ph",
  // Deprecated marker.
  "ph1",
  // Deprecated marker.
  "ph2",
  // Deprecated marker.
  "ph3",
  // Deprecated marker.
  // Poetry
  "q",
  "q1",
  "q2",
  "q3",
  "q4",
  "qr",
  "qc",
  "qa",
  "qm",
  "qm1",
  "qm2",
  "qm3",
  "qd",
  "b",
  // Lists
  "lh",
  "li",
  "li1",
  "li2",
  "li3",
  "li4",
  "lf",
  "lim",
  "lim1",
  "lim2",
  "lim3",
  "lim4",
  // Breaks - see https://docs.usfm.bible/usfm/3.1/char/breaks/pb.html
  "pb"
], Vb = 1, uM = ["type", "marker", "content"];
class Dt extends Qf {
  __marker;
  __unknownAttributes;
  constructor(t = zn, n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: n, __unknownAttributes: r, __key: i } = t;
    return new Dt(n, r, i);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (lM.includes(t) || (n?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: fM,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Ks().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`), t;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return !i && t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.classList.remove(`usfm_${t.__marker}`), n.classList.add(`usfm_${this.__marker}`)), i;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Vb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = Ks(this.getMarker());
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function fM(e) {
  const t = e.getAttribute("data-marker") ?? void 0, n = Ks(t);
  if (e.style) {
    n.setFormat(e.style.textAlign);
    const r = parseInt(e.style.textIndent, 10) / 20;
    r > 0 && n.setIndent(r);
  }
  return { node: n };
}
function Ks(e, t) {
  return yt(new Dt(e, t));
}
function me(e) {
  return e instanceof Dt;
}
function Od(e) {
  return e?.type === Dt.getType();
}
const Wb = /[ \u00A0]{2,}/g;
function dM(e) {
  return [...e.matchAll(Wb)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function Jh(e) {
  return e.replace(Wb, (t) => t[0]);
}
const pM = "​", Us = pM;
var Yh;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Yh || (Yh = {}));
var Xh;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Xh || (Xh = {}));
function hM() {
  return Le(Us);
}
function gM(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Us, ""));
}
function rs(e) {
  return e.length > 0 && e.includes(Us) && e.replaceAll(Us, "") === "";
}
function ga(e) {
  return v(e) && rs(e.getTextContent());
}
function Hb(e) {
  return d0(e) || aM(e);
}
function at(e) {
  return Ee(e) || Gr(e);
}
function Gb(e, t) {
  return e.find((n) => at(n) && n.getNumber() === t.toString());
}
function mM(e, t = !1) {
  return e.find((n, r) => (!t || r > 0) && at(n));
}
function Fu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const n = t.getPreviousSibling();
    if (n)
      return n;
    t = t.getParent();
  }
}
function yM(e) {
  if (!e)
    return;
  if (at(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !at(t); )
    t = t.getPreviousSibling();
  if (t && at(t))
    return t;
}
function Nn(e) {
  return Ze(e, L) ?? void 0;
}
function bM(e) {
  return we(e) || Ee(e) || K(e) || Gr(e) || St(e) || Ue(e) || me(e) || L(e) || Pe(e) || et(e);
}
function $d(e) {
  if (e.anchor.type === "element") {
    const n = e.anchor.getNode(), r = e.anchor.offset;
    if (r < n.getChildrenSize())
      return n.getChildAtIndex(r);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Jb(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const n = e.anchor.getNode();
  return n.getPreviousSibling() ?? n.getParent()?.getPreviousSibling() ?? null;
}
function mt(e) {
  return vt(e) || we(e);
}
function vt(e) {
  return me(e) || St(e);
}
function kM(e) {
  return Od(e) || Jc(e);
}
function Bs(e, t) {
  let n = e.getParent();
  for (; n; ) {
    if (n.getKey() === t)
      return !0;
    n = n.getParent();
  }
  return !1;
}
function Fi(e, t) {
  const n = de(t, Bi), r = !!(e.cid && n), i = !e.cid && !n;
  return e.style === t.getMarker() && (i || r && e.cid === n);
}
function xM(e, t) {
  const n = A(e) ? e : e.getParent(), r = A(t) ? t : t.getParent(), i = n && r ? TS(n, r) : void 0;
  return i ? i.commonAncestor : void 0;
}
function TM(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [n, r] = t, i = e.isBackward() ? n : r;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function zr(e) {
  return e?.type === st.getType();
}
function vM(e, t) {
  if (!t)
    return;
  const n = e.findIndex((r) => r === t);
  n && (e.length = n);
}
function CM(e, t) {
  if (!t)
    return e;
  const n = t.getIndexWithinParent();
  return e.splice(n + 1, e.length - n - 1);
}
function Yb(e, t, n) {
  const r = Ve(e);
  if (t?.startsWith(r)) {
    const i = t.slice(r.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (n = s[1]);
  }
  return n;
}
function SM(e) {
  const t = e[Dr];
  if (t && typeof t == "object" && "textType" in t) {
    const n = t.textType;
    if (typeof n == "string")
      return n;
  }
}
function Xb(e) {
  return Zb(e) || zr(e) && SM(e) === "attribute" ? "" : zr(e) && e.text !== q ? e.text : ab(e) ? e.children.map((t) => Xb(t)).join("") : "";
}
function _M(e) {
  return e.map((n) => Xb(n)).filter((n) => n.length > 0).join(" ").trim();
}
function Rd(e) {
  const t = [];
  for (const n of e) {
    if (!K(n))
      continue;
    const r = Qb(n);
    r !== Ot && r.length > 0 && t.push(r);
  }
  return t.join(" ").trim();
}
function Qb(e) {
  return N(e) || bn(e) || v(e) && de(e, be) === "attribute" ? "" : v(e) ? e.getTextContent() : A(e) ? e.getChildren().map((t) => Qb(t)).join("") : "";
}
function bn(e) {
  return qt(e) && e.getTextType() === "marker";
}
function kn(e) {
  return N(e) || bn(e);
}
function Id(e) {
  if (!e || !kn(e))
    return !1;
  const t = e.getParent();
  return we(t) && e.is(t.getFirstChild());
}
function Zb(e) {
  return Zs(e) || $b(e) && e.textType === "marker";
}
function Qh(e, t) {
  MM(e, t), e.setMarker(t);
}
function MM(e, t) {
  const n = e.getMarker(), r = Ve(n), i = Ve(n, !0), s = ot(n), o = ot(n, !0), a = ze.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!kn(c))
      return;
    const l = c.getTextContent(), u = l === r || l === i, f = !u && (l === s || l === o);
    if (!(!u && !f)) {
      if (f && a) {
        c.remove();
        return;
      }
      if (N(c))
        c.setMarker(t);
      else if (bn(c)) {
        const d = l.startsWith(Ve("", !0));
        c.setTextContent(u ? Ve(t, d) : ot(t, d));
      }
    }
  });
}
function pt(e, t = kS) {
  const n = { ...e };
  return t.forEach((r) => {
    Reflect.deleteProperty(n, r);
  }), Object.keys(n).length === 0 ? void 0 : n;
}
function ct(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function ek(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function tk(e) {
  if (!E(e))
    return Zh(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !A(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return Zh(e) ?? t ?? void 0;
  } catch (r) {
    if (ek(r))
      return t ?? void 0;
    throw r;
  }
}
function EM(e, t) {
  if (!t)
    return (e + 1).toString();
  const n = t.split("-");
  if (n.length === 2)
    return parseInt(n[1]) ? `${parseInt(n[1]) + 1}` : `${parseInt(n[0]) + 1}`;
  const r = RegExp(/^(\d+)([a-yA-Y]{1,3})$/).exec(t);
  if (!r)
    return (parseInt(t) + 1).toString();
  const i = String.fromCharCode(r[2].charCodeAt(0) + 1);
  return `${r[1]}${i}`;
}
function Ld(e, t) {
  if (!t)
    return !1;
  const n = t.split("-").map((r) => parseInt(r));
  if (n.length < 1 || n.length > 2 || n[0] > n[1])
    throw new Error("isVerseInRange: invalid range");
  return n.length === 1 ? e === n[0] : n.length === 2 && isNaN(n[1]) ? e >= n[0] : (n.length === 2 && isNaN(n[0]) || e >= n[0]) && e <= n[1];
}
function AM(e) {
  return !!e && e.includes("-");
}
function nk(e) {
  const t = e.split("-"), n = parseInt(t[0], 10), r = t.length > 1 ? parseInt(t[t.length - 1], 10) : n;
  return { start: n, end: r };
}
function Zh(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function qd(e) {
  if (!v(e))
    return;
  const t = qn(e);
  if (!L(t) || !Et(t)?.is(e))
    return;
  const { start: n, end: r } = Hc(e.getTextContent(), t.getCaller());
  return n < r ? { start: n, end: r } : void 0;
}
function wn(e) {
  if (!e)
    return !1;
  if (Qi(e) || N(e) || bn(e) || Be(e) || e.getType() === hi || qt(e) && e.getTextType() === "attribute")
    return !0;
  const t = qn(e);
  if (Ee(t))
    return !0;
  if (v(e) && L(t) && Et(t)?.is(e))
    return !qd(e);
  if (v(e)) {
    const n = de(e, be);
    if (n === Er || n === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || rs(r))
      return !0;
    if (r === q)
      return !rk(e);
  }
  return !1;
}
function rk(e) {
  if (e.getTextContent() !== q || de(e, be) !== void 0 || !(se(e.getParent()) || se(e.getPreviousSibling()) || se(e.getNextSibling())) || eo(e) > 0)
    return !1;
  const n = qn(e);
  return !K(n) || ik(n, e);
}
function ik(e, t) {
  return e.getChildren().some((n) => n.is(t) ? !1 : se(n) ? ik(n, t) : v(n) ? !N(n) && de(n, be) === void 0 && n.getTextContent() !== "" && n.getTextContent() !== q && !rs(n.getTextContent()) : A(n) && !Be(n));
}
function zi() {
  const e = Le(q);
  return Gt(e, be, Er), e.setMode("token"), e;
}
function PM(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function Tn(e) {
  return v(e) && de(e, be) === Er;
}
function sk(e) {
  const t = e.getFirstChild();
  if (!kn(t) || t === null || Tn(t.getNextSibling()))
    return !1;
  const n = w();
  if (!E(n) || !n.isCollapsed())
    return !1;
  const r = n.anchor.getNode();
  if (r.is(t) || r.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && r.is(i) && n.anchor.offset === 0;
}
function ok(e) {
  if (Ee(e))
    return [];
  const t = [];
  let n;
  const r = () => {
    n && (t.push({ type: "text", nodes: n }), n = void 0);
  }, i = (s) => {
    if (!wn(s)) {
      if (kd(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === st.getType()) {
        n ??= [], n.push(s);
        return;
      }
      r(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), r(), t;
}
function NM(e, t) {
  const n = [];
  let r = 0;
  for (const i of e) {
    const s = qd(i), o = s ? s.start : eo(i), a = s ? s.end : i.getTextContentSize(), c = t ? dM(i.getTextContent().slice(o, a)).map(([u, f]) => [u + o, f + o]) : [];
    a < i.getTextContentSize() && c.push([a, i.getTextContentSize()]);
    const l = i.getTextContentSize() - o - c.reduce((u, [f, d]) => u + d - f, 0);
    n.push({ node: i, start: r, lead: o, collapsed: c, length: l }), r += l;
  }
  return { type: "text", segments: n, length: r };
}
function ak(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function wM(e, t) {
  let n = t;
  for (const [r, i] of ak(e)) {
    if (t <= r)
      break;
    n -= Math.min(t, i) - r;
  }
  return e.start + n;
}
function eg(e, t) {
  let n = t;
  for (const [r, i] of ak(e)) {
    if (r > n)
      break;
    n += i - r;
  }
  return n;
}
function zt(e, t) {
  return ok(e).map((n) => n.type === "element" ? n : NM(n.nodes, t));
}
function OM(e, t) {
  return ok(e).findIndex((n) => n.type === "element" ? n.node.is(t) : n.nodes.some((r) => r.is(t)));
}
function $s(e, t, n) {
  const r = qn(e);
  if (!r)
    return;
  const i = zt(r, n);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: r, index: s, offset: wM(a, t) };
  }
}
function $M(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const r of e.segments)
    if (t >= r.start && t < r.start + r.length)
      return [r.node, eg(r, t - r.start)];
  const n = e.segments[e.segments.length - 1];
  if (n)
    return [n.node, eg(n, t - n.start)];
}
function Ps(e, t, n) {
  const r = e.getChildAtIndex(t);
  if (_b(e)) {
    const s = e.getParentOrThrow();
    return r ? wn(r) ? Ps(e, t + 1, n) : zu(s, r, n) : Ps(s, e.getIndexWithinParent() + 1, n);
  }
  const i = zt(e, n);
  return r ? wn(r) || kd(r) && !ck(i, r) ? Ps(e, t + 1, n) : zu(e, r, n) : { type: "index", index: i.length };
}
function RM(e, t) {
  const n = qn(e);
  if (n && ck(zt(n, t), e))
    return { parent: n, point: zu(n, e, t) };
}
function ck(e, t) {
  return e.some((n) => n.type === "element" ? n.node.is(t) || Bs(n.node, t.getKey()) : n.segments.some((r) => r.node.is(t) || Bs(r.node, t.getKey())));
}
function zu(e, t, n) {
  const r = zt(e, n);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(t) || Bs(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || Bs(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
const ac = "unmatched", lk = 2;
function Po(e) {
  return `\\${e}`;
}
class dr extends st {
  __marker;
  constructor(t = "", n) {
    super(Po(t), n), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: n, __key: r } = t;
    return new dr(n, r);
  }
  static importDOM() {
    return {
      [ac]: (t) => LM(t) ? {
        conversion: IM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Dd().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const n = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Po(n)
    }).getWritable();
    return i.__marker = n, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n.__text = Po(t), n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const n = super.createDOM(t);
    return n.setAttribute("data-marker", this.__marker), n.classList.add($h), n.title = tg(this.__marker), n;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.title = tg(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(ac);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add($h), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: lk
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function uk(e) {
  return e.getTextContent() === Po(e.getMarker());
}
function tg(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function IM(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Dd(t) };
}
function Dd(e) {
  return yt(new dr(e));
}
function LM(e) {
  return e?.tagName.toLowerCase() === ac;
}
function rn(e) {
  return e instanceof dr;
}
function qM(e) {
  return e?.type === dr.getType();
}
const DM = /* @__PURE__ */ new Set([
  hi,
  Fy,
  Hn.getType(),
  // A chapter in the views without editable markers: the same whole-node treatment as a verse.
  Dn.getType()
]);
function Kd(e) {
  return v(e) && de(e, be) === "attribute";
}
function fk(e) {
  if (!v(e))
    return !1;
  let t = e.getParent();
  for (; se(t); )
    t = t.getParent();
  return L(t) ? Et(t)?.is(e) ?? !1 : Ee(t) ? gi(t)?.is(e) ?? !1 : !1;
}
function dk(e) {
  return xn(e) ? DM.has(e.getType()) : !v(e) || Tn(e) ? !1 : N(e) || Pe(e) || Kd(e) || fk(e) || // An unmatched closer (`ImmutableUnmatchedNode`) is a `TextNode` subclass, not a decorator, so
  // the decorator-type set above cannot reach it.
  rn(e);
}
function Ud(e) {
  if (!v(e))
    return [0, 0];
  if (rn(e))
    return [0, e.getTextContentSize()];
  const t = e.getTextContent(), n = t.length - t.trimStart().length;
  return n === t.length ? [n, n] : [n, t.trimEnd().length];
}
function pk(e, t, n) {
  return e.type === t && e.id === n;
}
function hk(e, t) {
  if (e.basis === t)
    return e.annotations;
  const n = rM(e.basis, t);
  return e.annotations.flatMap((r) => {
    if (r.start === r.end)
      return [r];
    const i = iM(n, r.start, r.end);
    return i ? [{ ...r, start: i[0], end: i[1] }] : [];
  });
}
function cc(e) {
  return xn(e) ? lc(e) : e.getTextContent();
}
function KM(e) {
  return xn(e) ? is(e) : e.getTextContent();
}
function Bd(e) {
  const t = de(e, Zc);
  return t ? hk(t, cc(e)) : [];
}
function UM(e, t) {
  if (t.start === t.end)
    return t;
  let n, r;
  for (let i = t.start; i < t.end; i++) {
    const s = zd.renderedOffset(e, i);
    if (s === "drawn")
      return { type: t.type, id: t.id, start: 0, end: 0 };
    s !== void 0 && (n = Math.min(n ?? s, s), r = Math.max(r ?? s + 1, s + 1));
  }
  return n === void 0 || r === void 0 ? { ...t, undisplayed: !0 } : { type: t.type, id: t.id, start: n, end: r };
}
function Ir(e) {
  const t = Bd(e);
  return xn(e) ? t.map((n) => UM(e, n)) : t;
}
function Fd(e, t) {
  const n = [...t].sort((r, i) => r.start - i.start || r.end - i.end);
  Gt(e, Zc, n.length > 0 ? { basis: cc(e), annotations: n } : void 0);
}
function ng(e) {
  const t = el(e).trim();
  if (t)
    return t;
  const n = is(e), [r, i] = tl(n);
  return n.slice(r, i);
}
const gk = {
  holdableText: ng,
  renderedOffset: (e, t) => {
    const n = ng(e);
    if (t >= n.length)
      return;
    const r = is(e), [i] = tl(r);
    return r.slice(i, i + n.length) === n ? i + t : "drawn";
  }
};
let zd = gk;
function BM(e) {
  zd = e ?? gk;
}
function lc(e) {
  return zd.holdableText(e);
}
function FM(e, t, n, r, i) {
  let s = { type: t, id: n, start: r, end: i };
  const o = [];
  for (const a of Bd(e))
    pk(a, t, n) && a.start <= s.end && s.start <= a.end ? s = {
      ...s,
      start: Math.min(s.start, a.start),
      end: Math.max(s.end, a.end)
    } : o.push(a);
  Fd(e, [...o, s]);
}
function mk(e, t, n) {
  const r = Bd(e), i = r.filter((s) => !pk(s, t, n));
  return i.length === r.length ? !1 : (Fd(e, i), !0);
}
function el(e) {
  if (e.getType() !== hi)
    return e.getTextContent();
  const t = e.getParent();
  return L(t) ? t.getCaller() : "";
}
function zM(e) {
  return "getRenderedText" in e && typeof e.getRenderedText == "function";
}
function is(e) {
  if (!xn(e) || !zM(e))
    return "";
  const t = e.getRenderedText();
  return typeof t == "string" ? t : "";
}
function rg(e) {
  return e === Uo || /\s/u.test(e);
}
function tl(e) {
  let t = 0;
  for (; t < e.length && rg(e[t]); )
    t++;
  if (t === e.length)
    return [0, 0];
  let n = e.length;
  for (; n > t && rg(e[n - 1]); )
    n--;
  return [t, n];
}
function ju(e, t) {
  if (t.undisplayed)
    return lc(e).slice(t.start, t.end);
  if (t.start !== t.end)
    return KM(e).slice(t.start, t.end);
  const n = lc(e);
  if (n)
    return n;
  const r = is(e), [i, s] = tl(r);
  return r.slice(i, s);
}
function jM(e, t, n) {
  return Ir(e).filter((r) => r.type === t && (r.undisplayed || r.start === r.end || r.start <= n && n <= r.end)).map((r) => r.id);
}
function VM(e) {
  const t = de(e, Zc);
  !t || t.basis === cc(e) || Fd(e, hk(t, cc(e)));
}
const uc = /* @__PURE__ */ new WeakMap();
function jd(e, t) {
  return JSON.stringify([e, t]);
}
function WM(e, t, n) {
  const r = It();
  let i = uc.get(r);
  i || (i = /* @__PURE__ */ new Map(), uc.set(r, i));
  const s = jd(e, t), o = i.get(s), a = Object.fromEntries(Object.entries(n).filter(([, c]) => c !== void 0));
  i.set(s, { ...o, ...a });
}
function fc(e, t, n) {
  return uc.get(e)?.get(jd(t, n));
}
function yk(e, t, n) {
  uc.get(e)?.delete(jd(t, n));
}
function HM(e, t = []) {
  const r = [
    st,
    Wn,
    Ft,
    Hn,
    Dn,
    ...t
  ].filter((i) => e.hasNodes([i])).map((i) => e.registerNodeTransform(i, VM));
  return () => r.forEach((i) => i());
}
function GM(e) {
  return Pe(e) || Ue(e) || Be(e) || Be(e.getParent()) || fk(e) || rn(e);
}
function Vd(e) {
  return v(e) ? e.getTextContentSize() : 1;
}
function Wd(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function bk(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getLastChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function ig(e) {
  const t = e.getNode();
  if (!A(t))
    return { leaf: t, offset: v(t) ? e.offset : Math.min(e.offset, 1) };
  const n = t.getChildAtIndex(e.offset);
  if (n)
    return { leaf: Wd(n), offset: 0 };
  const r = t.getLastChild();
  if (!r)
    return { leaf: t, offset: 0 };
  const i = bk(r);
  return { leaf: i, offset: Vd(i) };
}
function ja(e, t) {
  return e.leaf.is(t.leaf) ? e.offset - t.offset : e.leaf.isBefore(t.leaf) ? -1 : 1;
}
function kk(e, t, n) {
  const r = Vd(e);
  let i = r;
  t.leaf.is(e) ? i = t.offset : t.leaf.isBefore(e) && (i = 0);
  let s = 0;
  return n.leaf.is(e) ? s = n.offset : e.isBefore(n.leaf) && (s = r), [i, Math.max(i, s)];
}
function JM(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return Wd(n);
  }
}
function YM(e, t, n) {
  const r = Wd(e), i = bk(e);
  if (ja(t, { leaf: r, offset: 0 }) > 0 || ja(n, { leaf: i, offset: Vd(i) }) < 0)
    return !1;
  if (Tn(i)) {
    const s = JM(e);
    if (!s || ja(n, { leaf: s, offset: 0 }) <= 0)
      return !1;
  }
  return !0;
}
function XM(e, t, n, r) {
  if (!dk(e))
    return;
  const [i, s] = kk(e, t, n);
  if (s <= i)
    return;
  if (!v(e)) {
    const l = r?.get(e.getKey());
    return l ? [l.start, l.end] : [0, lc(e).length];
  }
  const [o, a] = Ud(e), c = [Math.max(i, o), Math.min(s, a)];
  return c[1] > c[0] ? c : void 0;
}
function Hd(e, t, n, r, i, s, o, a = {}) {
  if (e.isCollapsed())
    return;
  const c = e.getNodes(), l = e.isBackward(), [u, f] = l ? [e.focus, e.anchor] : [e.anchor, e.focus], d = ig(u), p = ig(f);
  if (ja(d, p) >= 0)
    return;
  let h = !1;
  const g = (k) => {
    const x = XM(k, d, p, a.decoratorHolds);
    x && (Wt(Fa), FM(k, t, n, x[0], x[1]), h = !0);
  };
  let m, y;
  for (const k of c) {
    if (A(y) && y.isParentOf(k))
      continue;
    if (N(k) || Tn(k) || Kd(k) || GM(k)) {
      g(k), m = k.getParent(), y = void 0;
      continue;
    }
    let x = null;
    if (v(k)) {
      const [S, _] = kk(k, d, p), F = Math.max(S, eo(k));
      if (F >= _)
        continue;
      Wt(Fa), x = k.splitText(F, _)[F > 0 ? 1 : 0];
    } else {
      if (se(k))
        continue;
      if (A(k) && k.isInline()) {
        if (!YM(k, d, p))
          continue;
        x = k;
      }
    }
    if (x !== null) {
      if (x && x.is(m))
        continue;
      Wt(Fa);
      const S = x.getParent();
      (S == null || !S.is(m)) && (y = void 0), m = S, y === void 0 && (y = Ki(), y.addID(t, n, r, i, s, o), x.insertBefore(y)), y.append(x);
    } else
      g(k), m = void 0, y = void 0;
  }
  h && WM(t, n, { onClick: r, onRemove: i, onMouseEnter: s, onMouseLeave: o }), t === wt && A(y) && (l ? y.selectStart() : y.selectEnd());
}
const xk = "table:row", sg = "immutable-table-row", Tk = 1, Vu = "tr", QM = ["type", "marker", "content"];
class ss extends ur {
  __marker;
  __unknownAttributes;
  constructor(t = Vu, n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return sg;
  }
  static clone(t) {
    return new ss(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return ZM().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Vu).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("tr");
    return t.setAttribute("data-marker", this.__marker), t.classList.add("table-row", `usfm_${this.__marker}`), t.style.textIndent = "0", t;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker;
  }
  exportJSON() {
    const t = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: sg,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Tk
    };
  }
}
function ZM(e, t) {
  return yt(new ss(e, t));
}
function vk(e) {
  return e instanceof ss;
}
const Ck = "table:cell", og = "immutable-table-cell", Sk = 1, Wu = "tc1", eE = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function tE(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class os extends ur {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Wu, n, r, i, s) {
    super(s), this.__marker = t, this.__align = n, this.__colspan = r, this.__unknownAttributes = i;
  }
  static getType() {
    return og;
  }
  static clone(t) {
    const { __marker: n, __align: r, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new os(n, r, i, s, o);
  }
  static importJSON(t) {
    return nE().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Wu).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setAlign(t) {
    if (this.__align === t)
      return this;
    const n = this.getWritable();
    return n.__align = t, n;
  }
  getAlign() {
    return this.getLatest().__align;
  }
  setColspan(t) {
    if (this.__colspan === t)
      return this;
    const n = this.getWritable();
    return n.__colspan = t, n;
  }
  getColspan() {
    return this.getLatest().__colspan;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = this.__marker.startsWith("th"), n = document.createElement(t ? "th" : "td");
    n.setAttribute("data-marker", this.__marker), n.classList.add("table-cell", `usfm_${this.__marker}`);
    const r = tE(this.__align);
    return r && (n.style.textAlign = r), this.__colspan && n.setAttribute("colspan", this.__colspan), n;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), n = this.getColspan(), r = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: og,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...n !== void 0 && { colspan: n },
      ...r !== void 0 && { unknownAttributes: r },
      version: Sk
    };
  }
}
function nE(e, t, n, r) {
  return yt(new os(e, t, n, r));
}
function rE(e) {
  return e instanceof os;
}
const Hu = /* @__PURE__ */ new WeakMap();
function Yl(e, t) {
  t ? Hu.set(e, t) : Hu.delete(e);
}
function Gd(e) {
  return Hu.get(e);
}
function ma(e, t) {
  const n = e.getChildAtIndex(t);
  return v(n) ? n : void 0;
}
function or(e, t) {
  const n = ma(e, t);
  n ? n.select(0, 0) : e.select(t, t);
}
function Go(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function iE(e) {
  return e.getChildren().some((t) => N(t) && t.getMarkerSyntax() === "closing");
}
function sE(e) {
  return Go(e) ? void 0 : { closed: "false" };
}
function oE(e, t, n, r) {
  const i = t.getMarker(), s = Yc(t), o = iE(t), a = r ? Lt(i, "opening", s) : void 0;
  if (a) {
    e.append(a);
    const [c] = n;
    Wr(c) && !c.getTextContent().startsWith(q) && c.setTextContent(q + c.getTextContent());
  }
  e.append(...n), a && wb(a, e), o && e.append(Lt(i, "closing", s));
}
function ji(e) {
  return Ze(e, K) ?? void 0;
}
function aE(e) {
  let t = e.getParent();
  for (; K(t); )
    t = t.getParent();
  return t;
}
function Gu(e) {
  const t = _k(e);
  return e.getChildren().every((n) => N(n) || t && de(n, be) === "attribute" || v(n) && n.getTextContent().replaceAll(q, "") === "");
}
function _k(e) {
  return Go(e);
}
function cE(e, t) {
  const n = e.getUnknownAttributes(), r = n ? Qn(n, Qs(e.getMarker())) : "";
  r !== "" && t.insertAfter(Le(r)), e.remove();
}
function lE(e, t) {
  if (Go(e))
    return;
  const n = e.getUnknownAttributes();
  if (n) {
    const r = { ...n };
    delete r.closed, e.setUnknownAttributes(Object.keys(r).length > 0 ? r : void 0);
  }
  t && e.append(Lt(e.getMarker(), "closing", Yc(e)));
}
function uE(e, t) {
  return K(e) && !Go(e) && !Go(t);
}
function fE(e, t, n) {
  Gu(e) && e.getChildren().forEach((s) => {
    N(s) || s.remove();
  });
  const [r] = t;
  n && Wr(r) && !r.getTextContent().startsWith(q) && r.setTextContent(q + r.getTextContent()), e.append(...t);
  const i = e.getFirstChild();
  n && N(i) && i.getMarkerSyntax() === "opening" && wb(i, e);
}
function dE(e, t, n) {
  const { renderGlyphs: r, closeImplicitSpans: i = !1 } = n, s = _k(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), f = N(l) && l.getMarkerSyntax() === "closing", d = s && de(l, be) === "attribute";
    !f && !d && o.push(l), l = u;
  }
  const a = uE(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      fE(e, o, r);
    else {
      const l = Ur(t.getMarker(), sE(t));
      oE(l, t, o, r), e.insertAfter(l), Gu(l) ? l.remove() : c = l;
    }
  i && !a && lE(t, r), Gu(t) && cE(t, c);
}
function Fs(e, t) {
  let n = e.getParent();
  for (; K(n); )
    dE(e, n, t), n = e.getParent();
}
function nl(e) {
  if (v(e) && !N(e)) {
    const t = eo(e);
    e.select(t, t);
    return;
  }
  if (A(e)) {
    const t = e.getChildren().filter((r) => !N(r)), n = t.find((r, i) => i === t.length - 1 || !v(r) || r.getTextContent() !== q);
    if (n) {
      nl(n);
      return;
    }
    e.selectEnd();
  }
}
function pE(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ju(e) {
  return !!(e.opener || e.value || e.closer);
}
function ag(e) {
  return /^\s/.test(e);
}
function Jd(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !ag(t) || !ag(e))
    return !0;
  const n = t.trim();
  return n === "" || e.trim() !== n;
}
function rl(e, t, n) {
  return n.wantsRun ? Jd(t.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : pE(t);
}
function hE(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const n = e.expectedPieces(t);
  if (!n.wantsRun)
    return !1;
  const r = e.scanPieces(t);
  return Jd(r.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!r.opener || e.byteFormat.closerSyntax !== "none" && !r.closer) ? !1 : r.wrapper === void 0;
}
function Mk(e, t) {
  return !Ju(e.scanPieces(t));
}
function ya(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const n = e.expectedPieces(t), r = e.scanPieces(t);
  if (!rl(e, r, n))
    return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = r;
  return o && (s.is(o) || Bs(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, r);
}
function gE(e, t, n, r) {
  return !n.wantsRun || Ju(r) || Gd(It()) === "remote" ? !1 : It().getEditorState().read(() => {
    const i = Q(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ju(e.scanPieces(i));
  });
}
function mE(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function cg(e) {
  const t = Le(e);
  return Gt(t, be, "attribute"), t;
}
function yE(e, t, n) {
  if (n.wrapper)
    return n.wrapper;
  const { runKind: r, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!r || !s)
    return;
  const o = rb(r);
  return s.insertAfter(o), n.opener && o.append(n.opener), n.value && o.append(n.value), n.closer && o.append(n.closer), o;
}
function bE(e, t, n, r) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const d = c?.(t);
    if (!d || r.valueText === void 0)
      return;
    v(n.value) ? n.value.setTextContent(r.valueText) : d.insertBefore(cg(r.valueText));
    return;
  }
  const l = yE(e, t, n);
  if (!l || s === "none" || !o || !a)
    return;
  const u = n.opener ?? (() => {
    const d = Lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(d) : l.append(d), d;
  })();
  let f = n.value;
  r.valueText === void 0 ? (f?.remove(), f = void 0) : v(f) ? Jd(f.getTextContent(), r.valueText) && f.setTextContent(r.valueText) : (f = cg(r.valueText), u.insertAfter(f)), a !== "none" && !n.closer && (f ?? u).insertAfter(Lt(a === "selfClosing" ? "" : o(t), a));
}
function Jo(e, t) {
  const { writer: n } = e.byteFormat;
  if (n === "kind-owned" || n === "read-only" || !t.isAttached())
    return;
  const r = e.expectedPieces(t), i = e.scanPieces(t);
  if (rl(e, i, r) && !Eb(t)) {
    if (gE(e, t, r, i)) {
      Ab(t);
      return;
    }
    if (!ya(e, t)) {
      if (!r.wantsRun) {
        mE(i);
        return;
      }
      bE(e, t, i, r);
    }
  }
}
function kE(e, t, n) {
  Jo(e, t), t.isAttached() && ya(e, t) && n.add(t.getKey());
}
function ba(e) {
  if (!v(e))
    return !1;
  if (N(e) || Pe(e) || rn(e))
    return !0;
  const t = de(e, be);
  return t === "attribute" || t === Er;
}
function Yd(e, t) {
  return N(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && fr(e) && K(e.getParent())) : !1;
}
function xE() {
  const e = w();
  return E(e) ? Yd(e.focus.getNode(), e.focus.offset) : !1;
}
function Ek(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && ba(t) ? t : void 0;
}
function TE(e) {
  const t = Ek(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function vE(e) {
  const t = Ek(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function lg(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function ug(e, t) {
  e.set(t.key, t.offset, t.type);
}
function CE(e, t) {
  let n = vE(e);
  for (; n; ) {
    const r = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (!v(r))
      return;
    if (!ba(r))
      return { node: r, offset: t === "next" ? 0 : r.getTextContentSize() };
    n = r;
  }
}
function fg(e, t) {
  const n = CE(e, t);
  return n ? (e.set(n.node.getKey(), n.offset, "text"), !0) : !1;
}
function Xd(e) {
  if (e.isCollapsed()) {
    const a = TE(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = [lg(n), lg(r)], s = fg(n, "next"), o = fg(r, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (ug(n, i[0]), ug(r, i[1]), !1) : !0;
}
const Ak = Xs("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), dc = "verse-block", Pk = 1, SE = "verse-block";
class no extends ur {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", n) {
    super(n), this.__number = t;
  }
  static getType() {
    return dc;
  }
  static clone(t) {
    return new no(t.__number, t.__key);
  }
  static importJSON(t) {
    return _E().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setNumber(t.number);
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const n = this.getWritable();
    return n.__number = t, n;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  /** The first and last verse numbers this block covers. A bridge covers more than one. */
  getRange() {
    return nk(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(SE), dg(t, this.__number), t;
  }
  updateDOM(t, n) {
    return t.__number !== this.__number && dg(n, this.__number), !1;
  }
  // No `exportDOM`/`importDOM`: Lexical's default export already emits `createDOM`'s element, so
  // the HTML flavor of a copied passage carries these wrappers, which an ordinary paste unwraps
  // because there is no import counterpart. Block verse is read-only, so pasting one back in is
  // not a supported flow.
  /**
   * Keeps the wrapper out of the `application/x-lexical-editor` clipboard payload; its paragraphs
   * travel in its place.
   *
   * Every platform editor shares one Lexical namespace, so a payload copied from a block verse
   * editor is accepted when pasted into an ordinary one - which registers no `VerseBlockNode`, so
   * `$parseSerializedNode` would throw on the unknown type and `onError` would rethrow and tear the
   * editor down. `TypedMarkNode` and `UnknownNode` exclude themselves the same way; Lexical's
   * clipboard only ever asks with `"html"`.
   */
  excludeFromCopy(t) {
    return t !== "clone";
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: dc,
      number: this.getNumber(),
      version: Pk
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function dg(e, t) {
  const { start: n, end: r } = nk(t), i = !isNaN(n) && !isNaN(r) && n <= r;
  e.setAttribute("data-verse-number", t), pg(e, "data-verse-start", i ? n : NaN), pg(e, "data-verse-end", i ? r : NaN);
}
function pg(e, t, n) {
  isNaN(n) ? e.removeAttribute(t) : e.setAttribute(t, n.toString());
}
function _E(e) {
  return yt(new no(e));
}
function Vi(e) {
  return e instanceof no;
}
function ME(e) {
  return e?.type === dc;
}
const EE = [
  Pn,
  Dn,
  Ln,
  Ft,
  ze,
  Je,
  sr,
  Wn,
  ts,
  Hn,
  dr,
  Dt,
  ai,
  ns,
  ss,
  os,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Ar,
  {
    replace: Qf,
    with: () => Vn(),
    withKlass: ai
  }
], pc = {
  markers: {
    id: {
      marker: "id",
      styleType: "paragraph",
      textType: "Other",
      textProperties: ["paragraph", "nonpublishable", "nonvernacular", "book"],
      description: "File identification information (BOOKID, FILENAME, EDITOR, MODIFICATION DATE)",
      fontSize: 12
    },
    usfm: {
      marker: "usfm",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "nonpublishable", "nonvernacular"],
      description: "File markup version information",
      fontSize: 12
    },
    ide: {
      marker: "ide",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "nonpublishable", "nonvernacular"],
      description: "File encoding information",
      fontSize: 12
    },
    h: {
      marker: "h",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Running header text for a book (basic)",
      fontSize: 12
    },
    h1: {
      marker: "h1",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Running header text",
      fontSize: 12
    },
    h2: {
      marker: "h2",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Running header text, left side of page",
      fontSize: 12
    },
    h3: {
      marker: "h3",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Running header text, right side of page",
      fontSize: 12
    },
    toc1: {
      marker: "toc1",
      styleType: "paragraph",
      occursUnder: ["h", "h1", "h2", "h3", "id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Long table of contents text",
      fontSize: 12,
      bold: !0,
      italic: !0,
      color: "#004000"
    },
    toc2: {
      marker: "toc2",
      styleType: "paragraph",
      occursUnder: ["h", "h1", "h2", "h3", "id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Short table of contents text",
      fontSize: 12,
      italic: !0,
      color: "#004000"
    },
    toc3: {
      marker: "toc3",
      styleType: "paragraph",
      occursUnder: ["h", "h1", "h2", "h3", "id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Book Abbreviation",
      fontSize: 12,
      bold: !0,
      italic: !0,
      color: "#800000"
    },
    toca1: {
      marker: "toca1",
      styleType: "paragraph",
      occursUnder: ["h", "h1", "h2", "h3"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Alternative language long table of contents text",
      fontSize: 10,
      italic: !0,
      color: "#808080"
    },
    toca2: {
      marker: "toca2",
      styleType: "paragraph",
      occursUnder: ["h", "h1", "h2", "h3"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Alternative language short table of contents text",
      fontSize: 10,
      italic: !0,
      color: "#808080"
    },
    toca3: {
      marker: "toca3",
      styleType: "paragraph",
      occursUnder: ["h", "h1", "h2", "h3"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Alternative language book Abbreviation",
      fontSize: 10,
      italic: !0,
      color: "#808080"
    },
    rem: {
      marker: "rem",
      styleType: "paragraph",
      occursUnder: ["id", "ide", "c"],
      textType: "Other",
      textProperties: ["paragraph", "nonpublishable", "nonvernacular"],
      description: "Comments and remarks",
      fontSize: 12,
      color: "#0000FF"
    },
    sts: {
      marker: "sts",
      styleType: "paragraph",
      occursUnder: ["id", "ide", "c"],
      textType: "Other",
      textProperties: ["paragraph", "nonpublishable", "nonvernacular"],
      description: "Status of this file",
      fontSize: 12,
      color: "#0000FF"
    },
    restore: {
      marker: "restore",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 99,
      textType: "Other",
      textProperties: ["paragraph", "nonpublishable", "nonvernacular"],
      description: "Project restore information",
      fontSize: 12,
      color: "#0000FF"
    },
    imt: {
      marker: "imt",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 5,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Introduction major title, level 1 (if single level) (basic)",
      fontSize: 14,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    imt1: {
      marker: "imt1",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 5,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Introduction major title, level 1 (if multiple levels)",
      fontSize: 14,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    imt2: {
      marker: "imt2",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 5,
      textType: "other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "Introduction major title, level 2",
      fontSize: 13,
      italic: !0,
      justification: "center",
      spaceBefore: 6,
      spaceAfter: 3
    },
    imt3: {
      marker: "imt3",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 5,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_3"],
      description: "Introduction major title, level 3",
      fontSize: 12,
      bold: !0,
      justification: "center",
      spaceBefore: 2,
      spaceAfter: 2
    },
    imt4: {
      marker: "imt4",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 5,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_4"],
      description: "Introduction major title, level 4 (usually within parenthesis)",
      fontSize: 12,
      italic: !0,
      justification: "center",
      spaceBefore: 2,
      spaceAfter: 2
    },
    imte: {
      marker: "imte",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 7,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Introduction major title at introduction end, level 1 (if single level)",
      fontSize: 20,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    imte1: {
      marker: "imte1",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 7,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Introduction major title at introduction end, level 1 (if multiple levels)",
      fontSize: 20,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    imte2: {
      marker: "imte2",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 7,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "Introduction major title at introduction end, level 2",
      fontSize: 16,
      italic: !0,
      justification: "center",
      spaceAfter: 2
    },
    is: {
      marker: "is",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Introduction section heading, level 1 (if single level) (basic)",
      fontSize: 14,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    is1: {
      marker: "is1",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Introduction section heading, level 1 (if multiple levels)",
      fontSize: 14,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    is2: {
      marker: "is2",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "Introduction section heading, level 2",
      fontSize: 12,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    iot: {
      marker: "iot",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Introduction outline title (basic)",
      fontSize: 12,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    io: {
      marker: "io",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Introduction outline text, level 1 (if single level)",
      fontSize: 12,
      leftMargin: 0.5
    },
    io1: {
      marker: "io1",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Introduction outline text, level 1 (if multiple levels) (basic)",
      fontSize: 12,
      leftMargin: 0.5
    },
    io2: {
      marker: "io2",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "Introduction outline text, level 2",
      fontSize: 12,
      leftMargin: 0.75
    },
    io3: {
      marker: "io3",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_3"],
      description: "Introduction outline text, level 3",
      fontSize: 12,
      leftMargin: 1
    },
    io4: {
      marker: "io4",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_4"],
      description: "Introduction outline text, level 4",
      fontSize: 12,
      leftMargin: 1.25
    },
    ior: {
      marker: "ior",
      styleType: "character",
      endMarker: "ior*",
      occursUnder: ["id", "io", "io1", "io2", "io3", "io4", "NEST"],
      textType: "Other",
      textProperties: ["publishable", "vernacular"],
      description: "Introduction references range for outline entry; for marking references separately",
      fontSize: 12
    },
    ip: {
      marker: "ip",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Introduction prose paragraph (basic)",
      fontSize: 12,
      firstLineIndent: 0.125
    },
    im: {
      marker: "im",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Introduction prose paragraph, with no first line indent (may occur after poetry)",
      fontSize: 12
    },
    ipi: {
      marker: "ipi",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Introduction prose paragraph, indented, with first line indent",
      fontSize: 12,
      firstLineIndent: 0.125,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    imi: {
      marker: "imi",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Introduction prose paragraph text, indented, with no first line indent",
      fontSize: 12,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    ili: {
      marker: "ili",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A list entry, level 1 (if single level)",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 0.5
    },
    ili1: {
      marker: "ili1",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A list entry, level 1 (if multiple levels)",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 0.5
    },
    ili2: {
      marker: "ili2",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "A list entry, level 2",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 0.75
    },
    ipq: {
      marker: "ipq",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Introduction prose paragraph, quote from the body text",
      fontSize: 12,
      italic: !0,
      firstLineIndent: 0.125,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    imq: {
      marker: "imq",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Introduction prose paragraph, quote from the body text, with no first line indent",
      fontSize: 12,
      italic: !0,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    ipr: {
      marker: "ipr",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Introduction prose paragraph, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right",
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    ib: {
      marker: "ib",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Introduction blank line",
      fontSize: 10
    },
    iq: {
      marker: "iq",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_1"],
      description: "Introduction poetry text, level 1 (if single level)",
      fontSize: 12,
      italic: !0,
      firstLineIndent: -0.75,
      leftMargin: 1
    },
    iq1: {
      marker: "iq1",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_1"],
      description: "Introduction poetry text, level 1 (if multiple levels)",
      fontSize: 12,
      italic: !0,
      firstLineIndent: -0.75,
      leftMargin: 1
    },
    iq2: {
      marker: "iq2",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_2"],
      description: "Introduction poetry text, level 2",
      fontSize: 12,
      italic: !0,
      firstLineIndent: -0.5,
      leftMargin: 1
    },
    iq3: {
      marker: "iq3",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_3"],
      description: "Introduction poetry text, level 3",
      fontSize: 12,
      italic: !0,
      firstLineIndent: -0.25,
      leftMargin: 1
    },
    iex: {
      marker: "iex",
      styleType: "paragraph",
      occursUnder: ["id", "c"],
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
      fontSize: 12,
      firstLineIndent: 0.125,
      spaceBefore: 4,
      spaceAfter: 4
    },
    iqt: {
      marker: "iqt",
      styleType: "character",
      endMarker: "iqt*",
      occursUnder: [
        "imt",
        "imt1",
        "imt2",
        "imt3",
        "imt4",
        "ib",
        "ie",
        "ili",
        "ili1",
        "ili2",
        "im",
        "imi",
        "imq",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "iot",
        "ip",
        "ipi",
        "ipq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "is",
        "is1",
        "is2",
        "imte",
        "imte1",
        "imte2",
        "iex"
      ],
      textType: "Other",
      textProperties: ["publishable", "vernacular"],
      description: "For quoted scripture text appearing in the introduction",
      fontSize: 12,
      italic: !0
    },
    ie: {
      marker: "ie",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 6,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Introduction ending marker",
      fontSize: 10
    },
    c: {
      marker: "c",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 8,
      textType: "ChapterNumber",
      textProperties: ["chapter"],
      description: "Chapter number (necessary for normal Paratext operation)",
      fontSize: 18,
      bold: !0,
      spaceBefore: 8,
      spaceAfter: 4
    },
    ca: {
      marker: "ca",
      styleType: "character",
      endMarker: "ca*",
      occursUnder: ["c"],
      textType: "Other",
      description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
      fontSize: 16,
      italic: !0,
      color: "#228B22"
    },
    cp: {
      marker: "cp",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Other",
      textProperties: ["paragraph"],
      description: "Published chapter number (chapter string that should appear in the published text)",
      fontSize: 18,
      bold: !0,
      color: "#0000FF",
      spaceBefore: 8,
      spaceAfter: 4
    },
    cl: {
      marker: "cl",
      styleType: "paragraph",
      occursUnder: ["id", "c", "ms", "ms1", "ms2", "ms3", "mr"],
      textType: "Other",
      textProperties: ["paragraph"],
      description: 'Chapter label used for translations that add a word such as "Chapter" before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.',
      fontSize: 18,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    cd: {
      marker: "cd",
      styleType: "paragraph",
      occursUnder: ["c"],
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Chapter Description (Publishing option D, e.g. in Russian Bibles)",
      fontSize: 11,
      spaceBefore: 8,
      spaceAfter: 4
    },
    v: {
      marker: "v",
      styleType: "character",
      occursUnder: [
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "s3",
        "d",
        "sp"
      ],
      textType: "VerseNumber",
      textProperties: ["verse"],
      description: "A verse number (Necessary for normal paratext operation) (basic)",
      fontSize: 12,
      superscript: !0
    },
    va: {
      marker: "va",
      styleType: "character",
      endMarker: "va*",
      occursUnder: [
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "s3",
        "d",
        "sp"
      ],
      textType: "Other",
      description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
      fontSize: 12,
      superscript: !0,
      color: "#228B22"
    },
    vp: {
      marker: "vp",
      styleType: "character",
      endMarker: "vp*",
      occursUnder: [
        "cd",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "s3",
        "d",
        "sp"
      ],
      textType: "Other",
      description: "Published verse marker (verse string that should appear in the published text)",
      fontSize: 12,
      superscript: !0,
      color: "#0000FF"
    },
    p: {
      marker: "p",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, with first line indent (basic)",
      fontSize: 12,
      firstLineIndent: 0.125
    },
    m: {
      marker: "m",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, with no first line indent (may occur after poetry) (basic)",
      fontSize: 12
    },
    po: {
      marker: "po",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Letter opening",
      fontSize: 12,
      firstLineIndent: 0.125,
      spaceBefore: 4,
      spaceAfter: 4
    },
    pr: {
      marker: "pr",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Text refrain (paragraph text, right aligned)",
      fontSize: 12,
      justification: "right"
    },
    cls: {
      marker: "cls",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Letter Closing",
      fontSize: 12,
      justification: "right"
    },
    pmo: {
      marker: "pmo",
      styleType: "paragraph",
      occursUnder: [
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "b",
        "s1",
        "s2",
        "s3",
        "s4"
      ],
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Embedded text opening",
      fontSize: 12,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    pm: {
      marker: "pm",
      styleType: "paragraph",
      occursUnder: [
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "po",
        "psi",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "b",
        "s1",
        "s2",
        "s3",
        "s4"
      ],
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Embedded text paragraph",
      fontSize: 12,
      firstLineIndent: 0.125,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    pmc: {
      marker: "pmc",
      styleType: "paragraph",
      occursUnder: [
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "b",
        "s1",
        "s2",
        "s3",
        "s4"
      ],
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Embedded text closing",
      fontSize: 12,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    pmr: {
      marker: "pmr",
      styleType: "paragraph",
      occursUnder: [
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "b",
        "s1",
        "s2",
        "s3",
        "s4"
      ],
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: 'Embedded text refrain (e.g. Then all the people shall say, "Amen!")',
      fontSize: 12,
      justification: "right",
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    pi: {
      marker: "pi",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Paragraph text, level 1 indent (if single level), with first line indent; often used for discourse (basic)",
      fontSize: 12,
      firstLineIndent: 0.125,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    pi1: {
      marker: "pi1",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Paragraph text, level 1 indent (if multiple levels), with first line indent; often used for discourse",
      fontSize: 12,
      firstLineIndent: 0.125,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    pi2: {
      marker: "pi2",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "Paragraph text, level 2 indent, with first line indent; often used for discourse",
      fontSize: 12,
      firstLineIndent: 0.125,
      leftMargin: 0.5,
      rightMargin: 0.25
    },
    pi3: {
      marker: "pi3",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_3"],
      description: "Paragraph text, level 3 indent, with first line indent; often used for discourse",
      fontSize: 12,
      firstLineIndent: 0.125,
      leftMargin: 0.75,
      rightMargin: 0.25
    },
    pc: {
      marker: "pc",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, centered (for Inscription)",
      fontSize: 12,
      justification: "center"
    },
    mi: {
      marker: "mi",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, indented, with no first line indent; often used for discourse",
      fontSize: 12,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    nb: {
      marker: "nb",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, with no break from previous paragraph text (at chapter boundary) (basic)",
      fontSize: 12
    },
    q: {
      marker: "q",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_1"],
      description: "Poetry text, level 1 indent (if single level)",
      fontSize: 12,
      firstLineIndent: -0.5,
      leftMargin: 0.75
    },
    q1: {
      marker: "q1",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_1"],
      description: "Poetry text, level 1 indent (if multiple levels) (basic)",
      fontSize: 12,
      firstLineIndent: -0.5,
      leftMargin: 0.75
    },
    q2: {
      marker: "q2",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_2"],
      description: "Poetry text, level 2 indent (basic)",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 0.75
    },
    q3: {
      marker: "q3",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_3"],
      description: "Poetry text, level 3 indent",
      fontSize: 12,
      firstLineIndent: -0.25,
      leftMargin: 0.75
    },
    q4: {
      marker: "q4",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_4"],
      description: "Poetry text, level 4 indent",
      fontSize: 12,
      firstLineIndent: -0.125,
      leftMargin: 0.75
    },
    qc: {
      marker: "qc",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Poetry text, centered",
      fontSize: 12,
      justification: "center"
    },
    qr: {
      marker: "qr",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Poetry text, Right Aligned",
      fontSize: 12,
      justification: "right"
    },
    qs: {
      marker: "qs",
      styleType: "character",
      endMarker: "qs*",
      occursUnder: ["q", "q1", "q2", "q3", "q4", "qc", "qr", "qd", "NEST"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["publishable", "vernacular", "poetic"],
      description: "Poetry text, Selah",
      fontSize: 12,
      italic: !0
    },
    qa: {
      marker: "qa",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Poetry text, Acrostic marker/heading",
      fontSize: 12,
      italic: !0
    },
    qac: {
      marker: "qac",
      styleType: "character",
      endMarker: "qac*",
      occursUnder: ["q", "q1", "q2", "q3", "q4", "qc", "qr", "", "NEST"],
      rank: 4,
      textType: "Other",
      textProperties: ["publishable", "vernacular", "poetic"],
      description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
      fontSize: 12,
      italic: !0
    },
    qm: {
      marker: "qm",
      styleType: "paragraph",
      occursUnder: [
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "b"
      ],
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Poetry text, embedded, level 1 indent (if single level)",
      fontSize: 12,
      firstLineIndent: -0.75,
      leftMargin: 1
    },
    qm1: {
      marker: "qm1",
      styleType: "paragraph",
      occursUnder: [
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "b"
      ],
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_1"],
      description: "Poetry text, embedded, level 1 indent (if multiple levels)",
      fontSize: 12,
      firstLineIndent: -0.75,
      leftMargin: 1
    },
    qm2: {
      marker: "qm2",
      styleType: "paragraph",
      occursUnder: [
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "b"
      ],
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_2"],
      description: "Poetry text, embedded, level 2 indent",
      fontSize: 12,
      firstLineIndent: -0.5,
      leftMargin: 1
    },
    qm3: {
      marker: "qm3",
      styleType: "paragraph",
      occursUnder: [
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "b"
      ],
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic", "level_3"],
      description: "Poetry text, embedded, level 3 indent",
      fontSize: 12,
      firstLineIndent: -0.25,
      leftMargin: 1
    },
    qd: {
      marker: "qd",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "A Hebrew musical performance annotation, similar in content to Hebrew descriptive title.",
      fontSize: 12,
      italic: !0,
      leftMargin: 0.25
    },
    b: {
      marker: "b",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Poetry text stanza break (e.g. stanza break) (basic)",
      fontSize: 10
    },
    mt: {
      marker: "mt",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 3,
      textType: "Title",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "The main title of the book (if single level)",
      fontSize: 20,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    mt1: {
      marker: "mt1",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 3,
      textType: "Title",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "The main title of the book (if multiple levels) (basic)",
      fontSize: 20,
      bold: !0,
      justification: "center",
      spaceBefore: 2,
      spaceAfter: 4
    },
    mt2: {
      marker: "mt2",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 3,
      textType: "Title",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "A secondary title usually occurring before the main title (basic)",
      fontSize: 16,
      italic: !0,
      justification: "center",
      spaceAfter: 2
    },
    mt3: {
      marker: "mt3",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 3,
      textType: "Title",
      textProperties: ["paragraph", "publishable", "vernacular", "level_3"],
      description: "A secondary title occurring after the main title",
      fontSize: 16,
      bold: !0,
      justification: "center",
      spaceBefore: 2,
      spaceAfter: 2
    },
    mt4: {
      marker: "mt4",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 3,
      textType: "Title",
      textProperties: ["paragraph", "publishable", "vernacular", "level_4"],
      description: "A small secondary title sometimes occurring within parentheses",
      fontSize: 12,
      justification: "center",
      spaceBefore: 2,
      spaceAfter: 2
    },
    mte: {
      marker: "mte",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 2,
      textType: "Title",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
      fontSize: 20,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    mte1: {
      marker: "mte1",
      styleType: "paragraph",
      occursUnder: [
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "s3",
        "d"
      ],
      rank: 2,
      textType: "Title",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
      fontSize: 20,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    mte2: {
      marker: "mte2",
      styleType: "paragraph",
      occursUnder: ["mte1"],
      rank: 2,
      textType: "Title",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "A secondary title occurring before or after the 'ending' main title",
      fontSize: 16,
      italic: !0,
      justification: "center",
      spaceAfter: 2
    },
    ms: {
      marker: "ms",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A major section division heading, level 1 (if single level) (basic)",
      fontSize: 14,
      bold: !0,
      justification: "center",
      spaceBefore: 16,
      spaceAfter: 4
    },
    ms1: {
      marker: "ms1",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A major section division heading, level 1 (if multiple levels)",
      fontSize: 14,
      bold: !0,
      justification: "center",
      spaceBefore: 16,
      spaceAfter: 4
    },
    ms2: {
      marker: "ms2",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A major section division heading, level 2",
      fontSize: 14,
      bold: !0,
      justification: "center",
      spaceBefore: 16,
      spaceAfter: 4
    },
    ms3: {
      marker: "ms3",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A major section division heading, level 3",
      fontSize: 14,
      italic: !0,
      justification: "center",
      spaceBefore: 16,
      spaceAfter: 4
    },
    mr: {
      marker: "mr",
      styleType: "paragraph",
      occursUnder: ["ms", "ms1", "ms2", "ms3"],
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A major section division references range heading (basic)",
      fontSize: 12,
      italic: !0,
      justification: "center",
      spaceAfter: 4
    },
    s: {
      marker: "s",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A section heading, level 1 (if single level) (basic)",
      fontSize: 12,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    s1: {
      marker: "s1",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A section heading, level 1 (if multiple levels)",
      fontSize: 12,
      bold: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    s2: {
      marker: "s2",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "A section heading, level 2 (e.g. Proverbs 22-24)",
      fontSize: 12,
      italic: !0,
      justification: "center",
      spaceBefore: 8,
      spaceAfter: 4
    },
    s3: {
      marker: "s3",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_3"],
      description: 'A section heading, level 3 (e.g. Genesis "The First Day")',
      fontSize: 12,
      italic: !0,
      justification: "left",
      spaceBefore: 6,
      spaceAfter: 3
    },
    s4: {
      marker: "s4",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_4"],
      description: "A section heading, level 4",
      fontSize: 12,
      italic: !0,
      justification: "left",
      spaceBefore: 6,
      spaceAfter: 3
    },
    sr: {
      marker: "sr",
      styleType: "paragraph",
      occursUnder: ["s", "s1", "s2", "s3", "s4"],
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A section division references range heading",
      fontSize: 12,
      bold: !0,
      justification: "center",
      spaceAfter: 4
    },
    r: {
      marker: "r",
      styleType: "paragraph",
      occursUnder: ["c", "s", "s1", "s2", "s3", "s4"],
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Parallel reference(s) (basic)",
      fontSize: 12,
      italic: !0,
      justification: "center",
      spaceAfter: 4
    },
    sp: {
      marker: "sp",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A heading, to identify the speaker (e.g. Job)",
      fontSize: 12,
      italic: !0,
      justification: "left",
      spaceBefore: 8,
      spaceAfter: 4
    },
    d: {
      marker: "d",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A Hebrew text heading, to provide description (e.g. Psalms)",
      fontSize: 12,
      italic: !0,
      justification: "center",
      spaceBefore: 4,
      spaceAfter: 4
    },
    sd: {
      marker: "sd",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Vertical space used to divide the text into sections, level 1 (if single level)",
      spaceBefore: 24,
      spaceAfter: 24
    },
    sd1: {
      marker: "sd1",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
      spaceBefore: 24,
      spaceAfter: 24
    },
    sd2: {
      marker: "sd2",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "Vertical space used to divide the text into sections, level 2",
      spaceBefore: 18,
      spaceAfter: 18
    },
    sd3: {
      marker: "sd3",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_3"],
      description: "Vertical space used to divide the text into sections, level 3",
      spaceBefore: 12,
      spaceAfter: 12
    },
    sd4: {
      marker: "sd4",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Section",
      textProperties: ["paragraph", "publishable", "vernacular", "level_4"],
      description: "Vertical space used to divide the text into sections, level 4",
      spaceBefore: 8,
      spaceAfter: 8
    },
    tr: {
      marker: "tr",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "A new table row",
      fontSize: 12,
      firstLineIndent: -0.25,
      leftMargin: 0.5
    },
    th1: {
      marker: "th1",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 1",
      fontSize: 12,
      italic: !0
    },
    th2: {
      marker: "th2",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 2",
      fontSize: 12,
      italic: !0
    },
    th3: {
      marker: "th3",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 3",
      fontSize: 12,
      italic: !0
    },
    th4: {
      marker: "th4",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 4",
      fontSize: 12,
      italic: !0
    },
    th5: {
      marker: "th5",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 5",
      fontSize: 12,
      italic: !0
    },
    th6: {
      marker: "th6",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 6",
      fontSize: 12,
      italic: !0
    },
    th7: {
      marker: "th7",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 7",
      fontSize: 12,
      italic: !0
    },
    th8: {
      marker: "th8",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 8",
      fontSize: 12,
      italic: !0
    },
    th9: {
      marker: "th9",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 9",
      fontSize: 12,
      italic: !0
    },
    th10: {
      marker: "th10",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 10",
      fontSize: 12,
      italic: !0
    },
    th11: {
      marker: "th11",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 11",
      fontSize: 12,
      italic: !0
    },
    th12: {
      marker: "th12",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 12",
      fontSize: 12,
      italic: !0
    },
    tc1: {
      marker: "tc1",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 1",
      fontSize: 12
    },
    tc2: {
      marker: "tc2",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 2",
      fontSize: 12
    },
    tc3: {
      marker: "tc3",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 3",
      fontSize: 12
    },
    tc4: {
      marker: "tc4",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 4",
      fontSize: 12
    },
    tc5: {
      marker: "tc5",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 5",
      fontSize: 12
    },
    tc6: {
      marker: "tc6",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 6",
      fontSize: 12
    },
    tc7: {
      marker: "tc7",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 7",
      fontSize: 12
    },
    tc8: {
      marker: "tc8",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 8",
      fontSize: 12
    },
    tc9: {
      marker: "tc9",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 9",
      fontSize: 12
    },
    tc10: {
      marker: "tc10",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 10",
      fontSize: 12
    },
    tc11: {
      marker: "tc11",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 11",
      fontSize: 12
    },
    tc12: {
      marker: "tc12",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 12",
      fontSize: 12
    },
    thc1: {
      marker: "thc1",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 1, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc2: {
      marker: "thc2",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 2, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc3: {
      marker: "thc3",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 3, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc4: {
      marker: "thc4",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 4, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc5: {
      marker: "thc5",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 5, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc6: {
      marker: "thc6",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 6, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc7: {
      marker: "thc7",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 7, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc8: {
      marker: "thc8",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 8, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc9: {
      marker: "thc9",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 9, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc10: {
      marker: "thc10",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 10, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc11: {
      marker: "thc11",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 11, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    thc12: {
      marker: "thc12",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 12, center aligned",
      fontSize: 12,
      italic: !0,
      justification: "center"
    },
    tcc1: {
      marker: "tcc1",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 1, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc2: {
      marker: "tcc2",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 2, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc3: {
      marker: "tcc3",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 3, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc4: {
      marker: "tcc4",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 4, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc5: {
      marker: "tcc5",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 5, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc6: {
      marker: "tcc6",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 6, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc7: {
      marker: "tcc7",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 7, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc8: {
      marker: "tcc8",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 8, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc9: {
      marker: "tcc9",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 9, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc10: {
      marker: "tcc10",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 10, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc11: {
      marker: "tcc11",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 11, center aligned",
      fontSize: 12,
      justification: "center"
    },
    tcc12: {
      marker: "tcc12",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 12, center aligned",
      fontSize: 12,
      justification: "center"
    },
    thr1: {
      marker: "thr1",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 1, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr2: {
      marker: "thr2",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 2, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr3: {
      marker: "thr3",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 3, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr4: {
      marker: "thr4",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 4, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr5: {
      marker: "thr5",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 5, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr6: {
      marker: "thr6",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 6, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr7: {
      marker: "thr7",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 7, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr8: {
      marker: "thr8",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 8, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr9: {
      marker: "thr9",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 9, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr10: {
      marker: "thr10",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 10, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr11: {
      marker: "thr11",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 11, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    thr12: {
      marker: "thr12",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table heading, column 12, right aligned",
      fontSize: 12,
      italic: !0,
      justification: "right"
    },
    tcr1: {
      marker: "tcr1",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 1, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr2: {
      marker: "tcr2",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 2, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr3: {
      marker: "tcr3",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 3, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr4: {
      marker: "tcr4",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 4, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr5: {
      marker: "tcr5",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 5, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr6: {
      marker: "tcr6",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 6, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr7: {
      marker: "tcr7",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 7, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr8: {
      marker: "tcr8",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 8, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr9: {
      marker: "tcr9",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 9, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr10: {
      marker: "tcr10",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 10, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr11: {
      marker: "tcr11",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 11, right aligned",
      fontSize: 12,
      justification: "right"
    },
    tcr12: {
      marker: "tcr12",
      styleType: "character",
      occursUnder: ["tr"],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A table cell item, column 12, right aligned",
      fontSize: 12,
      justification: "right"
    },
    lh: {
      marker: "lh",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "List header (introductory remark)",
      fontSize: 12,
      firstLineIndent: 0.125
    },
    li: {
      marker: "li",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A list entry, level 1 (if single level)",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 0.5
    },
    li1: {
      marker: "li1",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "A list entry, level 1 (if multiple levels)",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 0.5
    },
    li2: {
      marker: "li2",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "A list entry, level 2",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 0.75
    },
    li3: {
      marker: "li3",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_3"],
      description: "A list entry, level 3",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 1
    },
    li4: {
      marker: "li4",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_4"],
      description: "A list entry, level 4",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 1.25
    },
    lf: {
      marker: "lf",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "List footer (concluding remark)",
      fontSize: 12
    },
    lim: {
      marker: "lim",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "An embedded list entry, level 1 (if single level)",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 0.75,
      rightMargin: 0.25
    },
    lim1: {
      marker: "lim1",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_1"],
      description: "An embedded list entry, level 1 (if multiple levels)",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 0.75,
      rightMargin: 0.25
    },
    lim2: {
      marker: "lim2",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_2"],
      description: "An embedded list entry, level 2",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 1
    },
    lim3: {
      marker: "lim3",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_3"],
      description: "An embedded list item, level 3",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 1.25
    },
    lim4: {
      marker: "lim4",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "level_4"],
      description: "An embedded list entry, level 4",
      fontSize: 12,
      firstLineIndent: -0.375,
      leftMargin: 1.5
    },
    litl: {
      marker: "litl",
      styleType: "character",
      endMarker: "litl*",
      occursUnder: [
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "List entry total text",
      fontSize: 12,
      italic: !0
    },
    lik: {
      marker: "lik",
      styleType: "character",
      endMarker: "lik*",
      occursUnder: [
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "Structured list entry key text",
      fontSize: 12,
      italic: !0
    },
    liv: {
      marker: "liv",
      styleType: "character",
      endMarker: "liv*",
      occursUnder: [
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "Structured list entry value 1 content (if single value)",
      fontSize: 12
    },
    liv1: {
      marker: "liv1",
      styleType: "character",
      endMarker: "liv1*",
      occursUnder: [
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "Structured list entry value 1 content (if multiple values)",
      fontSize: 12
    },
    liv2: {
      marker: "liv2",
      styleType: "character",
      endMarker: "liv2*",
      occursUnder: [
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "Structured list entry value 2 content",
      fontSize: 12
    },
    liv3: {
      marker: "liv3",
      styleType: "character",
      endMarker: "liv3*",
      occursUnder: [
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "Structured list entry value 3 content",
      fontSize: 12
    },
    liv4: {
      marker: "liv4",
      styleType: "character",
      endMarker: "liv4*",
      occursUnder: [
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "Structured list entry value 4 content",
      fontSize: 12
    },
    liv5: {
      marker: "liv5",
      styleType: "character",
      endMarker: "liv5*",
      occursUnder: [
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "Structured list entry value 5 content",
      fontSize: 12
    },
    f: {
      marker: "f",
      styleType: "note",
      endMarker: "f*",
      occursUnder: [
        "c",
        "cp",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "qs",
        "sp",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "mt",
        "mt1",
        "mt2",
        "mt3",
        "ms",
        "ms1",
        "ms2",
        "ms3",
        "s",
        "s1",
        "s2",
        "s3",
        "d",
        "ip"
      ],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "A Footnote text item (basic)",
      fontSize: 12
    },
    fe: {
      marker: "fe",
      styleType: "note",
      endMarker: "fe*",
      occursUnder: [
        "c",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "sp",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "ms",
        "ms1",
        "ms2",
        "ms3",
        "s",
        "s1",
        "s2",
        "s3",
        "d",
        "ip"
      ],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "An Endnote text item",
      fontSize: 12
    },
    fr: {
      marker: "fr",
      styleType: "character",
      endMarker: "fr*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "The origin reference for the footnote (basic)",
      fontSize: 12,
      bold: !0
    },
    ft: {
      marker: "ft",
      styleType: "character",
      endMarker: "ft*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "Footnote text, Protocanon (basic)",
      fontSize: 12
    },
    fk: {
      marker: "fk",
      styleType: "character",
      endMarker: "fk*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "A footnote keyword (basic)",
      fontSize: 12,
      bold: !0,
      italic: !0
    },
    fq: {
      marker: "fq",
      styleType: "character",
      endMarker: "fq*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "A footnote scripture quote or alternate rendering (basic)",
      fontSize: 12,
      italic: !0
    },
    fqa: {
      marker: "fqa",
      styleType: "character",
      endMarker: "fqa*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "A footnote alternate rendering for a portion of scripture text",
      fontSize: 12,
      italic: !0
    },
    fl: {
      marker: "fl",
      styleType: "character",
      endMarker: "fl*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: 'A footnote label text item, for marking or "labelling" the type or alternate translation being provided in the note.',
      fontSize: 12,
      bold: !0,
      italic: !0
    },
    fw: {
      marker: "fw",
      styleType: "character",
      endMarker: "fw*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
      fontSize: 12
    },
    fp: {
      marker: "fp",
      styleType: "character",
      endMarker: "fp*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "A Footnote additional paragraph marker",
      fontSize: 12
    },
    fv: {
      marker: "fv",
      styleType: "character",
      endMarker: "fv*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "A verse number within the footnote text",
      fontSize: 12,
      superscript: !0
    },
    fdc: {
      marker: "fdc",
      styleType: "character",
      endMarker: "fdc*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "Footnote text, applies to Deuterocanon only",
      fontSize: 12
    },
    fm: {
      marker: "fm",
      styleType: "character",
      endMarker: "fm*",
      occursUnder: [
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "sp",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "d",
        "ip"
      ],
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "An additional footnote marker location for a previous footnote",
      fontSize: 12,
      superscript: !0
    },
    x: {
      marker: "x",
      styleType: "note",
      endMarker: "x*",
      occursUnder: [
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "qs",
        "sp",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "mt",
        "mt1",
        "mt2",
        "mt3",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "d"
      ],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note", "crossreference"],
      description: "A list of cross references (basic)",
      fontSize: 12
    },
    xo: {
      marker: "xo",
      styleType: "character",
      endMarker: "xo*",
      occursUnder: ["x"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "The cross reference origin reference (basic)",
      fontSize: 12,
      bold: !0
    },
    xop: {
      marker: "xop",
      styleType: "character",
      endMarker: "xop*",
      occursUnder: ["x"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "Published cross reference origin reference (origin reference that should appear in the published text)",
      fontSize: 12
    },
    xt: {
      marker: "xt",
      styleType: "character",
      endMarker: "xt*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "ef",
        "ex",
        "NEST"
      ],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "The cross reference target reference(s), protocanon only (basic)",
      fontSize: 12
    },
    xta: {
      marker: "xta",
      styleType: "character",
      endMarker: "xta*",
      occursUnder: ["x"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "Cross reference target references added text",
      fontSize: 12
    },
    xk: {
      marker: "xk",
      styleType: "character",
      endMarker: "xk*",
      occursUnder: ["x"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "A cross reference keyword",
      fontSize: 12,
      italic: !0
    },
    xq: {
      marker: "xq",
      styleType: "character",
      endMarker: "xq*",
      occursUnder: ["x"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "A cross-reference quotation from the scripture text",
      fontSize: 12,
      italic: !0
    },
    xot: {
      marker: "xot",
      styleType: "character",
      endMarker: "xot*",
      occursUnder: ["x"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "Cross-reference target reference(s), Old Testament only",
      fontSize: 12
    },
    xnt: {
      marker: "xnt",
      styleType: "character",
      endMarker: "xnt*",
      occursUnder: ["x"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "Cross-reference target reference(s), New Testament only",
      fontSize: 12
    },
    xdc: {
      marker: "xdc",
      styleType: "character",
      endMarker: "xdc*",
      occursUnder: ["x"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "Cross-reference target reference(s), Deuterocanon only",
      fontSize: 12
    },
    rq: {
      marker: "rq",
      styleType: "character",
      endMarker: "rq*",
      occursUnder: [
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "NEST"
      ],
      textType: "Other",
      textProperties: ["publishable", "vernacular"],
      description: "A cross-reference indicating the source text for the preceding quotation.",
      fontSize: 10,
      italic: !0
    },
    qt: {
      marker: "qt",
      styleType: "character",
      endMarker: "qt*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For Old Testament quoted text appearing in the New Testament (basic)",
      fontSize: 12,
      italic: !0
    },
    nd: {
      marker: "nd",
      styleType: "character",
      endMarker: "nd*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For name of deity (basic)",
      fontSize: 12,
      underline: !0
    },
    tl: {
      marker: "tl",
      styleType: "character",
      endMarker: "tl*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "cls",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "nonvernacular"],
      description: "For transliterated words",
      fontSize: 12,
      italic: !0
    },
    dc: {
      marker: "dc",
      styleType: "character",
      endMarker: "dc*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
      italic: !0
    },
    bk: {
      marker: "bk",
      styleType: "character",
      endMarker: "bk*",
      occursUnder: [
        "imt",
        "imt1",
        "imt2",
        "imt3",
        "imt4",
        "imte",
        "imte1",
        "imte2",
        "is",
        "is1",
        "is2",
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For the quoted name of a book",
      fontSize: 12,
      italic: !0
    },
    sig: {
      marker: "sig",
      styleType: "character",
      endMarker: "sig*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "cls",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For the signature of the author of an Epistle",
      fontSize: 12,
      italic: !0
    },
    pn: {
      marker: "pn",
      styleType: "character",
      endMarker: "pn*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "cls",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For a proper name",
      fontSize: 12,
      bold: !0,
      underline: !0
    },
    png: {
      marker: "png",
      styleType: "character",
      endMarker: "png*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "cls",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For a geographic proper name",
      fontSize: 12,
      underline: !0
    },
    addpn: {
      marker: "addpn",
      styleType: "character",
      endMarker: "addpn*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "cls",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For chinese words to be dot underline & underline",
      fontSize: 12,
      bold: !0,
      italic: !0,
      underline: !0
    },
    wj: {
      marker: "wj",
      styleType: "character",
      endMarker: "wj*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For marking the words of Jesus",
      fontSize: 12,
      color: "#FF0000"
    },
    k: {
      marker: "k",
      styleType: "character",
      endMarker: "k*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For a keyword",
      fontSize: 12,
      bold: !0,
      italic: !0
    },
    sls: {
      marker: "sls",
      styleType: "character",
      endMarker: "sls*",
      occursUnder: [
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "sp",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "To represent where the original text is in a secondary language or from an alternate text source",
      fontSize: 12,
      italic: !0
    },
    ord: {
      marker: "ord",
      styleType: "character",
      endMarker: "ord*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For the text portion of an ordinal number",
      fontSize: 12,
      superscript: !0
    },
    add: {
      marker: "add",
      styleType: "character",
      endMarker: "add*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "cls",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "For a translational addition to the text",
      bold: !0,
      italic: !0
    },
    lit: {
      marker: "lit",
      styleType: "paragraph",
      occursUnder: ["c"],
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "For a comment or note inserted for liturgical use",
      fontSize: 12,
      bold: !0,
      justification: "right"
    },
    no: {
      marker: "no",
      styleType: "character",
      endMarker: "no*",
      occursUnder: [
        "is",
        "ip",
        "ipi",
        "im",
        "imi",
        "ili",
        "ili1",
        "ili2",
        "imq",
        "ipq",
        "iex",
        "iq",
        "iot",
        "io1",
        "io2",
        "io3",
        "io4",
        "s",
        "s1",
        "s2",
        "s3",
        "NEST"
      ],
      textProperties: ["publishable", "vernacular"],
      description: "A character style, use normal text",
      fontSize: 12
    },
    it: {
      marker: "it",
      styleType: "character",
      endMarker: "it*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textProperties: ["publishable", "vernacular"],
      description: "A character style, use italic text",
      fontSize: 12,
      italic: !0
    },
    bd: {
      marker: "bd",
      styleType: "character",
      endMarker: "bd*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textProperties: ["publishable", "vernacular"],
      description: "A character style, use bold text",
      fontSize: 12,
      bold: !0
    },
    bdit: {
      marker: "bdit",
      styleType: "character",
      endMarker: "bdit*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textProperties: ["publishable", "vernacular"],
      description: "A character style, use bold + italic text",
      fontSize: 12,
      bold: !0,
      italic: !0
    },
    em: {
      marker: "em",
      styleType: "character",
      endMarker: "em*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textProperties: ["publishable", "vernacular"],
      description: "A character style, use emphasized text style",
      fontSize: 12,
      italic: !0
    },
    sc: {
      marker: "sc",
      styleType: "character",
      endMarker: "sc*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textProperties: ["publishable", "vernacular"],
      description: "A character style, for small capitalization text",
      fontSize: 12,
      smallCaps: !0
    },
    sup: {
      marker: "sup",
      styleType: "character",
      endMarker: "sup*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textProperties: ["publishable", "vernacular"],
      description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
      fontSize: 12,
      superscript: !0
    },
    pb: {
      marker: "pb",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "Other",
      textProperties: ["publishable"],
      description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
      fontSize: 12
    },
    fig: {
      marker: "fig",
      styleType: "character",
      endMarker: "fig*",
      occursUnder: [
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "sp",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "d",
        "ip"
      ],
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Illustration [Columns to span, height, filename, caption text]",
      fontSize: 12
    },
    jmp: {
      marker: "jmp",
      styleType: "character",
      endMarker: "jmp*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textType: "Other",
      description: "For associating linking attributes to a span of text",
      underline: !0,
      color: "#0000FF"
    },
    pro: {
      marker: "pro",
      styleType: "character",
      endMarker: "pro*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "sp",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "d",
        "ip",
        "f",
        "fe",
        "NEST"
      ],
      textType: "Other",
      textProperties: ["Nonpublishable"],
      description: "For indicating pronunciation in CJK texts",
      fontSize: 10
    },
    rb: {
      marker: "rb",
      styleType: "character",
      endMarker: "rb*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "sp",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "d",
        "ip",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "Most often used to provide a reading / pronunciation guide in ideographic scripts"
    },
    w: {
      marker: "w",
      styleType: "character",
      endMarker: "w*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A wordlist text item",
      fontSize: 12
    },
    wh: {
      marker: "wh",
      styleType: "character",
      endMarker: "wh*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A Hebrew wordlist text item",
      fontSize: 12
    },
    wg: {
      marker: "wg",
      styleType: "character",
      endMarker: "wg*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A Greek Wordlist text item",
      fontSize: 12
    },
    wa: {
      marker: "wa",
      styleType: "character",
      endMarker: "wa*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "An Aramaic Wordlist text item",
      fontSize: 12
    },
    ndx: {
      marker: "ndx",
      styleType: "character",
      endMarker: "ndx*",
      occursUnder: [
        "ip",
        "im",
        "ipi",
        "imi",
        "ipq",
        "imq",
        "ipr",
        "iq",
        "iq1",
        "iq2",
        "iq3",
        "ili",
        "ili1",
        "ili2",
        "io",
        "io1",
        "io2",
        "io3",
        "io4",
        "ms",
        "ms1",
        "ms2",
        "s",
        "s1",
        "s2",
        "s3",
        "s4",
        "cd",
        "sp",
        "d",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "pmo",
        "pm",
        "pmc",
        "pmr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "qm",
        "qm1",
        "qm2",
        "qm3",
        "tr",
        "th1",
        "th2",
        "th3",
        "th4",
        "thr1",
        "thr2",
        "thr3",
        "thr4",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "tcr1",
        "tcr2",
        "tcr3",
        "tcr4",
        "f",
        "fe",
        "x",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A subject index text item",
      fontSize: 12
    },
    periph: {
      marker: "periph",
      styleType: "paragraph",
      textType: "Section",
      textProperties: ["paragraph", "nonpublishable", "vernacular"],
      description: "Peripheral content division marker which should be followed by an additional division argument/title.",
      fontSize: 14,
      bold: !0,
      color: "#FF8000",
      spaceBefore: 16,
      spaceAfter: 4
    },
    p1: {
      marker: "p1",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Front or back matter text paragraph, level 1 (if multiple levels)",
      fontSize: 12,
      firstLineIndent: 0.125
    },
    p2: {
      marker: "p2",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Front or back matter text paragraph, level 2 (if multiple levels)",
      fontSize: 12,
      firstLineIndent: 0.125,
      leftMargin: 0.125
    },
    k1: {
      marker: "k1",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Concordance main entry text or keyword, level 1",
      fontSize: 12
    },
    k2: {
      marker: "k2",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Concordance main entry text or keyword, level 2",
      fontSize: 12
    },
    xtSee: {
      marker: "xtSee",
      styleType: "character",
      endMarker: "xtSee*",
      occursUnder: ["p"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular"],
      description: "Concordance and Names Index markup for an alternate entry target reference.",
      fontSize: 12,
      italic: !0,
      color: "#0000FF"
    },
    xtSeeAlso: {
      marker: "xtSeeAlso",
      styleType: "character",
      endMarker: "xtSeeAlso*",
      occursUnder: ["p"],
      textType: "Other",
      textProperties: ["publishable", "vernacular"],
      description: "Concordance and Names Index markup for an additional entry target reference.",
      fontSize: 12,
      italic: !0,
      color: "#0000FF"
    },
    "qt-s": {
      marker: "qt-s",
      styleType: "milestone",
      endMarker: "qt-e",
      occursUnder: ["id"],
      description: "Quotation start/end milestone, level 1 (if single level)"
    },
    "qt1-s": {
      marker: "qt1-s",
      styleType: "milestone",
      endMarker: "qt1-e",
      occursUnder: ["id"],
      description: "Quotation start/end milestone, level 1 (if multiple levels)"
    },
    "qt2-s": {
      marker: "qt2-s",
      styleType: "milestone",
      endMarker: "qt2-e",
      occursUnder: ["id"],
      description: "Quotation start/end milestone, level 2"
    },
    "qt3-s": {
      marker: "qt3-s",
      styleType: "milestone",
      endMarker: "qt3-e",
      occursUnder: ["id"],
      description: "Quotation start/end milestone, level 3"
    },
    "qt4-s": {
      marker: "qt4-s",
      styleType: "milestone",
      endMarker: "qt4-e",
      occursUnder: ["id"],
      description: "Quotation start/end milestone, level 4"
    },
    "qt5-s": {
      marker: "qt5-s",
      styleType: "milestone",
      endMarker: "qt5-e",
      occursUnder: ["id"],
      description: "Quotation start/end milestone, level 5"
    },
    "ts-s": {
      marker: "ts-s",
      styleType: "milestone",
      endMarker: "ts-e",
      occursUnder: ["id"],
      description: "Translator's section start/end milestone"
    },
    ph: {
      marker: "ph",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, with level 1 hanging indent (if single level)",
      fontSize: 12,
      firstLineIndent: -0.25,
      leftMargin: 0.5
    },
    ph1: {
      marker: "ph1",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, with level 1 hanging indent (if multiple levels)",
      fontSize: 12,
      firstLineIndent: -0.25,
      leftMargin: 0.5
    },
    ph2: {
      marker: "ph2",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, with level 2 hanging indent",
      fontSize: 12,
      firstLineIndent: -0.25,
      leftMargin: 0.75
    },
    ph3: {
      marker: "ph3",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, with level 3 hanging indent",
      fontSize: 12,
      firstLineIndent: -0.25,
      leftMargin: 1
    },
    phi: {
      marker: "phi",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, indented with hanging indent",
      leftMargin: 1
    },
    tr1: {
      marker: "tr1",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "A table Row",
      fontSize: 12,
      firstLineIndent: -0.25,
      leftMargin: 0.5
    },
    tr2: {
      marker: "tr2",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "A table Row",
      fontSize: 12,
      firstLineIndent: -0.25,
      leftMargin: 0.75
    },
    ps: {
      marker: "ps",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, no break with next paragraph text at chapter boundary",
      fontSize: 12,
      firstLineIndent: 0.125
    },
    psi: {
      marker: "psi",
      styleType: "paragraph",
      occursUnder: ["c"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Paragraph text, indented, with no break with next paragraph text (at chapter boundary)",
      fontSize: 12,
      firstLineIndent: 0.125,
      leftMargin: 0.25,
      rightMargin: 0.25
    },
    fs: {
      marker: "fs",
      styleType: "character",
      endMarker: "fs*",
      occursUnder: ["f", "fe"],
      textType: "NoteText",
      textProperties: ["publishable", "vernacular", "note"],
      description: "A summary text for the concept/idea/quotation from the scripture translation for which the note is being provided.",
      fontSize: 12,
      italic: !0
    },
    wr: {
      marker: "wr",
      styleType: "character",
      endMarker: "wr*",
      occursUnder: [
        "ms",
        "s",
        "lh",
        "li",
        "li1",
        "li2",
        "li3",
        "li4",
        "lf",
        "lim",
        "lim1",
        "lim2",
        "lim3",
        "lim4",
        "m",
        "mi",
        "nb",
        "p",
        "pc",
        "ph",
        "phi",
        "pi",
        "pi1",
        "pi2",
        "pi3",
        "pr",
        "po",
        "q",
        "q1",
        "q2",
        "q3",
        "q4",
        "qc",
        "qr",
        "qd",
        "tc1",
        "tc2",
        "tc3",
        "tc4",
        "f",
        "fe",
        "NEST"
      ],
      textType: "VerseText",
      textProperties: ["publishable", "vernacular"],
      description: "A Wordlist text item",
      fontSize: 12,
      italic: !0
    },
    pub: {
      marker: "pub",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Front matter publication data",
      fontSize: 10
    },
    toc: {
      marker: "toc",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Front matter table of contents",
      fontSize: 10
    },
    pref: {
      marker: "pref",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Front matter preface",
      fontSize: 10
    },
    intro: {
      marker: "intro",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Front matter introduction",
      fontSize: 10
    },
    conc: {
      marker: "conc",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Back matter concordance",
      fontSize: 10
    },
    glo: {
      marker: "glo",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Back matter glossary",
      fontSize: 10
    },
    idx: {
      marker: "idx",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Back matter index",
      fontSize: 10
    },
    maps: {
      marker: "maps",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Back matter map index",
      fontSize: 10
    },
    cov: {
      marker: "cov",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Other peripheral materials - cover",
      fontSize: 10
    },
    spine: {
      marker: "spine",
      styleType: "paragraph",
      occursUnder: ["id"],
      rank: 4,
      textType: "VerseText",
      textProperties: ["paragraph", "publishable", "vernacular", "poetic"],
      description: "Other peripheral materials - spine",
      fontSize: 10
    },
    pubinfo: {
      marker: "pubinfo",
      styleType: "paragraph",
      occursUnder: ["id", "ide"],
      textType: "Other",
      textProperties: ["paragraph", "nonpublishable", "nonvernacular"],
      description: "Publication information - Lang,Credit,Version,Copies,Publisher,Id,Logo",
      fontSize: 12,
      color: "#0000FF"
    },
    "zpa-xb": {
      marker: "zpa-xb",
      styleType: "character",
      endMarker: "zpa-xb*",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Book Ref",
      fontSize: 12
    },
    "zpa-xc": {
      marker: "zpa-xc",
      styleType: "character",
      endMarker: "zpa-xc*",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Chapter Ref",
      fontSize: 12,
      bold: !0
    },
    "zpa-xv": {
      marker: "zpa-xv",
      styleType: "character",
      endMarker: "zpa-xv*",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Verse Ref",
      fontSize: 12
    },
    "zpa-d": {
      marker: "zpa-d",
      styleType: "character",
      endMarker: "zpa-d*",
      occursUnder: ["id"],
      rank: 1,
      textType: "Other",
      textProperties: ["paragraph", "publishable", "vernacular"],
      description: "Description",
      fontSize: 12
    }
  }
}, AE = {
  paragraph: T.Paragraph,
  character: T.Character,
  note: T.Note,
  milestone: T.Milestone
};
function PE(e) {
  if (!e)
    return vr;
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    if (t.has(n))
      return t.get(n);
    const r = Object.hasOwn(e.markers, n) ? e.markers[n] : void 0, i = r ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: vr(n)?.category ?? C.Uncategorized,
      type: AE[r.styleType] ?? T.Unknown,
      description: r.description ?? "",
      hasEndMarker: !!r.endMarker,
      children: vr(n)?.children
    } : void 0;
    return t.set(n, i), i;
  };
}
function hg(e, t, n) {
  const r = {
    type: rr,
    version: nr,
    content: e
  }, i = t.serializeEditorState(r, n);
  return Jc(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Nk = "v", wk = 1, NE = "verse-selected";
class Jt extends ca {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = Nk, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return Fy;
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Jt(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => $E(t) ? {
        conversion: OE,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Qd().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setShowMarker(t.showMarker).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const n = this.getWritable();
    return n.__number = t, n;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setShowMarker(t = !1) {
    if (this.__showMarker === t)
      return this;
    const n = this.getWritable();
    return n.__showMarker = t, n;
  }
  getShowMarker() {
    return this.getLatest().__showMarker;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const n = this.getWritable();
    return n.__sid = t, n;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const n = this.getWritable();
    return n.__altnumber = t, n;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const n = this.getWritable();
    return n.__pubnumber = t, n;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const n = this.getWritable();
    return n.__unknownAttributes = t, n;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Pu, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(Pu, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
  }
  decorate() {
    return P(wE, { nodeKey: this.getKey(), text: this.getRenderedText() });
  }
  /** The text this verse shows on screen: its whole `\v N` glyph, or only its number. */
  getRenderedText() {
    return this.getShowMarker() ? jn(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Uo + this.getNumber() + Uo
    );
  }
  exportJSON() {
    return {
      type: this.getType(),
      marker: this.getMarker(),
      number: this.getNumber(),
      showMarker: this.getShowMarker(),
      sid: this.getSid(),
      altnumber: this.getAltnumber(),
      pubnumber: this.getPubnumber(),
      unknownAttributes: this.getUnknownAttributes(),
      version: wk
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (n) {
      if (ek(n))
        return !1;
      throw n;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function wE({ nodeKey: e, text: t }) {
  const [n] = DS(e);
  return P("span", { className: n ? NE : void 0, children: t });
}
function OE(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Qd(t) };
}
function Qd(e, t, n, r, i, s) {
  return yt(new Jt(e, t, n, r, i, s));
}
function $E(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Nk;
}
function pr(e) {
  return e instanceof Jt;
}
function RE(e) {
  return e?.type === Jt.getType();
}
function Ae(e) {
  return Pe(e) || pr(e);
}
function Ok(e) {
  return md(e) || RE(e);
}
function IE(e) {
  return LE(e).find((t) => me(t));
}
function LE(e) {
  return e.some(Vi) ? e.flatMap((t) => Vi(t) ? t.getChildren() : t) : e;
}
function il(e) {
  return A(e) ? Vi(e) ? e.getChildren().flatMap(il) : e.getChildren() : [];
}
function qE(e, t) {
  return il(e).find((i) => Ae(i) && Ld(t, i.getNumber()));
}
function DE(e, t) {
  return t === 0 ? IE(e) : e.map((n) => qE(n, t)).filter((n) => n)[0];
}
function hc(e) {
  return il(e).find((n) => Ae(n));
}
function $k(e, t) {
  if (!A(e) || t <= 0)
    return;
  const n = e.getChildren();
  for (let r = t - 1; r >= 0; r--) {
    const i = n[r];
    if (Ae(i))
      return i;
  }
}
function KE(e) {
  const t = e.getParent();
  if (t && A(t)) {
    const r = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < r.length; i++) {
      const s = r[i];
      if (Ae(s))
        return s;
    }
  }
  let n = t?.getNextSibling();
  for (; n && !at(n); ) {
    const r = hc(n);
    if (r)
      return r;
    n = n.getNextSibling();
  }
}
function gc(e) {
  return il(e).findLast((t) => Ae(t));
}
function UE(e) {
  if (!Pe(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const n = e.getTextContent().indexOf(t);
  return n < 0 ? 0 : n + t.length;
}
function BE(e, t, n) {
  if (!n)
    return !1;
  const r = t.getParent();
  if (n === r && A(n)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return n.getNextSibling() === t;
}
function FE(e, t) {
  const n = t.anchor.getNode();
  if (n !== e)
    return BE(t, e, n);
  if (v(e)) {
    const r = UE(e);
    return t.anchor.offset < r;
  }
  return !0;
}
function Xl(e) {
  const t = e.getNumber(), n = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: n,
    verse: t != null && n.toString() !== t ? t : void 0
  };
}
function zE(e) {
  const t = Fu(e);
  if (!(!t || at(t)))
    return Ae(t) ? t : gc(t) ?? tp(t);
}
function jE(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!E(t))
    return Xl(e);
  const n = Number.parseInt(e.getNumber() ?? "0", 10), r = n <= 1 ? 0 : n - 1;
  if (FE(e, t)) {
    const i = zE(e);
    return i ? Xl(i) : { verseNum: r };
  }
  return Xl(e);
}
function VE(e) {
  return bM(e) || pr(e);
}
function Zd(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function Rk(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Yu(e, t) {
  return e.getEditorState().read(() => !Q(t));
}
function WE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = ep(t, e);
  let r;
  if (n) {
    const i = n.getParent();
    if (i && A(i) && A(t) && t === i && e.anchor.offset < n.getIndexWithinParent() && (r = n), !r && i && A(i)) {
      const s = i.getChildren(), o = n.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (Ae(c)) {
          r = c;
          break;
        }
      }
    }
    if (!r && i) {
      let s = gg(i);
      for (; s && !at(s); ) {
        const o = hc(s);
        if (o) {
          r = o;
          break;
        }
        s = gg(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = hc(s);
      if (o) {
        r = o;
        break;
      }
      if (s = s.getNextSibling(), s && at(s))
        break;
    }
  }
  return r ? (r.selectNext(0, 0), !0) : !1;
}
function HE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = ep(t, e);
  let r;
  if (n) {
    const i = n.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (r = n), !r && i && A(i) && (r = $k(i, n.getIndexWithinParent())), !r && i) {
      let o = mg(i);
      for (; o && !at(o); ) {
        const a = gc(o);
        if (a) {
          r = a;
          break;
        }
        o = mg(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !at(s); ) {
      const o = gc(s);
      if (o) {
        r = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return r ? (r.selectNext(0, 0), !0) : !1;
}
function gg(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getNextSibling() : null;
}
function mg(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getPreviousSibling() : null;
}
function ep(e, t) {
  if (A(e) && E(t) && t.anchor.key === e.getKey()) {
    const r = e.getChildAtIndex(t.anchor.offset);
    if (r && Ae(r))
      return r;
    const i = $k(e, t.anchor.offset);
    if (i)
      return i;
    const s = hc(e);
    if (s)
      return s;
  }
  return tp(e);
}
function tp(e) {
  if (!e || at(e))
    return;
  if (Ae(e))
    return e;
  let t = Fu(e);
  for (; t; ) {
    if (at(t))
      return;
    if (Ae(t))
      return t;
    const n = gc(t);
    if (n)
      return n;
    t = Fu(t);
  }
}
const GE = ["style"], JE = ["style", "code"], mc = ["style", "cid"], YE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], XE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], QE = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], ZE = ["style", "caller", "category", "contents"], eA = ["tag", "marker", "contents"], tA = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Yo = `
`;
function nA(e, t) {
  const n = Q(e);
  if (!On(n))
    return;
  const r = np(n, "apply");
  if (r === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: r }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function np(e, t = "delta-doc") {
  if (!e)
    return;
  const n = Vc();
  let r = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of n) {
    const l = c.node;
    for (let f = i.length - 1; f >= 0; f--)
      if (zs(i[f], c)) {
        const d = i[f];
        if (i.splice(f, 1), r += 1, a && d.getKey() === a.getKey())
          return r - 1;
      }
    for (let f = s.length - 1; f >= 0; f--)
      zs(s[f].node, c) && s.splice(f, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (jr(l) || On(l))
        return r;
      mt(l) && (a = l);
    }
    if (mt(l) && (i.includes(l) || i.push(l)), Ik(l, t)) {
      if (l.getKey() === o)
        return r;
      s.push({ node: l, position: r }), r += 1;
      continue;
    }
    r += ip(l, t);
  }
  if (a)
    return r;
}
function yg(e, t, n = "delta-doc") {
  if (e.length < 2 || !sA(e[0]) || !iA(e[1]))
    return;
  const r = e[0].retain;
  return t.read(() => rA(r, n)?.getKey());
}
function rA(e, t = "delta-doc") {
  const n = Vc();
  let r = 0;
  const i = [], s = [];
  for (const o of n) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (zs(i[u], o)) {
        const f = i[u];
        if (i.splice(u, 1), r === e)
          return f;
        r += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      zs(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (mt(a) && (i.includes(a) || i.push(a)), Ik(a, t)) {
      if (r === e)
        return a;
      s.push({ node: a, position: r }), r += 1;
      continue;
    }
    const l = ip(a, t);
    if (jr(a) && l > 0 && e >= r && e < r + l || On(a) && r === e)
      return a;
    r += l;
  }
  for (const o of i) {
    if (r === e)
      return o;
    r += 1;
  }
}
function zs(e, t) {
  return e ? t ? !Bs(t.node, e.getKey()) : !0 : !1;
}
function jr(e) {
  return v(e) && !On(e);
}
function On(e) {
  return at(e) || Ae(e) || Ue(e) || L(e) || et(e) || rn(e);
}
function Zr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function iA(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && tA.includes(t);
}
function sA(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Ik(e, t) {
  return L(e) || et(e) ? !0 : t === "apply" && A(e) && On(e);
}
function Lk(e) {
  const t = e.getParent();
  return kn(e) && me(t) && t.getFirstChild() === e;
}
function Xu(e) {
  const t = e.getParent();
  return t !== null && Ze(t, Be) !== null;
}
function oA(e) {
  const t = e.getParent();
  return K(t) && e.getTextContent() === Ot && t.getChildrenSize() === 1;
}
function rp(e) {
  const t = qn(e);
  if (!(!L(t) || !Et(t)?.is(e)))
    return gd(e.getTextContent(), t.getCaller());
}
function aA(e) {
  return !Kb(e) && // A caller's typed bytes are respelled as the content they settle into, never sent raw.
  rp(e) === void 0 && ip(e, "delta-doc") === e.getTextContentSize();
}
function ip(e, t) {
  if (On(e))
    return 1;
  if (v(e)) {
    const n = e.getTextContent();
    if (t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (ga(e) || Lk(e) || de(e, be) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    de(e, be) === "attribute" || Xu(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, and the empty-char placeholder. The
    // editable-mode note caller counts only its content bytes, below.
    n.startsWith(cd) || oA(e)))
      return 0;
    const r = t === "delta-doc" ? rp(e) : void 0;
    return r !== void 0 ? r.length : e.getTextContentSize();
  }
  return 0;
}
function Qu(e, t) {
  const n = { insert: e.__text }, r = de(e, oi);
  if (r && (n.attributes = { segment: r }), t && t.length > 0) {
    const i = qk(t);
    i && (n.attributes = {
      ...n.attributes,
      char: i
    });
  }
  return n;
}
function bg(e) {
  const t = new As();
  return e.isEmpty() || e.read(() => {
    const n = Ce();
    if (!n || n.isEmpty())
      return;
    const r = n.getChildren();
    if (r.length === 1 && St(r[0]) && (!r[0].getChildren() || r[0].getChildrenSize() === 0))
      return;
    const i = cA();
    for (const s of i)
      t.push(s);
  }), t;
}
function sl(e, t) {
  const n = [], r = es(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < r.length; c++) {
    const l = r[c].node;
    n.push(...kg(l, c, r, i, s, o, a));
  }
  for (const c of i)
    n.push(...kg(c, r.length, r, i, s, o, a));
  return n;
}
function cA() {
  return sl();
}
function kg(e, t, n, r, i, s, o) {
  if (!e)
    return [];
  const a = [], c = n[t + 1];
  return lA(e, a, r), uA(e, a, i, s, o), fA(e, t, n, i, o, s, a), at(e) && a.push(gA(e)), Ae(e) && a.push(yA(e)), Ue(e) && a.push(bA(e)), rn(e) && a.push(kA(e)), pA(e, a, s), dA(e, a, s), CA(c, s), a;
}
function lA(e, t, n) {
  if (!e.isInline()) {
    const r = n.pop();
    we(r) ? t.push(hA(r)) : me(r) ? t.push(mA(r)) : St(r) && t.push({ insert: Yo });
  }
  mt(e) && (n.includes(e) || n.push(e));
}
function uA(e, t, n, r, i) {
  if (!v(e) || Pe(e) || rn(e))
    return;
  const s = e.getParent();
  if (L(s) && s.getFirstChild() === e)
    return;
  const o = Nn(e) !== void 0;
  if (N(e) && (o || Lk(e) || Xu(e) || Kb(e)) || de(e, be) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (rs(a))
    return;
  const c = rp(e);
  if (c !== void 0) {
    if (!c)
      return;
    a = c;
  }
  const l = e.getPreviousSibling(), u = K(s) ? s : void 0;
  o && u && l === u.getFirstChild() && (a = a.slice(vd(e)));
  const f = a.startsWith(cd) || de(e, be) === "attribute" || Xu(e), d = !!u && a === Ot && u.getChildrenSize() === 1, p = ol(e, r), h = p ? n.filter((y) => p.children.includes(y)) : n, g = Qu(e, h);
  if (g.insert = a, p) {
    if (!a || a === q || f)
      return;
    p.contentsOps?.push(g);
  } else
    d || f || t.push(g);
  const m = a !== "" && !d && !(f && u);
  if (n.length > 0 && m)
    for (const y of n)
      i.add(y);
}
function fA(e, t, n, r, i, s, o) {
  K(e) && !r.includes(e) && r.push(e);
  const a = n[t + 1];
  for (const c of r.toReversed())
    if (zs(c, a)) {
      if (r.pop(), !i.has(c)) {
        const l = TA(c), u = ol(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function dA(e, t, n) {
  if (!L(e))
    return;
  const r = xA(e), i = ol(e, n), s = {
    node: e,
    children: es(e).map((o) => o.node),
    contentsOps: r.insert.note?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function pA(e, t, n) {
  if (!et(e))
    return;
  const r = vA(e), i = ol(e, n), s = {
    node: e,
    children: es(e).map((o) => o.node),
    contentsOps: r.insert.unknown?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function mi(e, t) {
  const n = t.getUnknownAttributes();
  n && Object.assign(e, n);
}
function hA(e) {
  const t = { style: Ho, code: e.__code };
  return mi(t, e), { insert: Yo, attributes: { book: t } };
}
function gA(e) {
  const t = { style: oc, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), mi(t, e), { insert: { chapter: t } };
}
function mA(e) {
  const t = { style: e.__marker };
  return mi(t, e), { insert: Yo, attributes: { para: t } };
}
function yA(e) {
  const t = { style: sc, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), mi(t, e), { insert: { verse: t } };
}
function bA(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), mi(t, e), { insert: { milestone: t } };
}
function kA(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function xA(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), mi(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const n = { insert: { note: t } }, r = de(e, oi);
  return r && (n.attributes = { segment: r }), n;
}
function TA(e) {
  const t = { insert: "" }, n = qk([e]);
  return n && (t.attributes = { char: n }), t;
}
function vA(e) {
  const t = { tag: e.getTag() }, n = e.getMarker();
  return n && (t.marker = n), mi(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function ol(e, t) {
  for (let n = t.length - 1; n >= 0; n--) {
    const r = t[n];
    if (r.children.includes(e))
      return r;
  }
}
function CA(e, t) {
  for (let n = t.length - 1; n >= 0; n--)
    zs(t[n].node, e) && t.splice(n, 1);
}
function qk(e) {
  if (e.length === 0)
    return;
  const t = e.map(SA);
  return t.length === 1 ? t[0] : t;
}
function SA(e) {
  const t = { style: e.__marker }, n = de(e, Bi);
  return n && (t.cid = n), mi(t, e), t;
}
function sp(e) {
  let t = 0;
  for (const { node: n } of Vc())
    if (L(n)) {
      if (n.getKey() === e)
        return t;
      t += 1;
    }
}
function _A(e) {
  let t = 0;
  for (const { node: n } of Vc())
    if (L(n)) {
      if (t === e)
        return n;
      t += 1;
    }
}
const Dk = 1;
class En extends ca {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Bo, n = "", r, i) {
    super(i), this.__caller = t, this.__previewText = n, this.__onClick = r ?? (() => {
    });
  }
  static getType() {
    return hi;
  }
  static clone(t) {
    const { __caller: n, __previewText: r, __onClick: i, __key: s } = t;
    return new En(n, r, i, s);
  }
  static importDOM() {
    return {
      span: (t) => EA(t) ? {
        conversion: MA,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return op().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setCaller(t.caller).setPreviewText(t.previewText).setOnClick(t.onClick);
  }
  setCaller(t) {
    if (this.__caller === t)
      return this;
    const n = this.getWritable();
    return n.__caller = t, n;
  }
  getCaller() {
    return this.getLatest().__caller;
  }
  setPreviewText(t) {
    if (this.__previewText === t)
      return this;
    const n = this.getWritable();
    return n.__previewText = t, n;
  }
  getPreviewText() {
    return this.getLatest().__previewText;
  }
  setOnClick(t) {
    if (this.__onClick === t)
      return this;
    const n = this.getWritable();
    return n.__onClick = t, n;
  }
  getOnClick() {
    return this.getLatest().__onClick;
  }
  createDOM() {
    const t = document.createElement("span");
    return t.classList.add(this.__type), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-preview-text", this.__previewText), t;
  }
  updateDOM(t) {
    return t.__caller !== this.__caller;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Xi(n) && (n.classList.add(this.getType()), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-preview-text", this.getPreviewText())), { element: n };
  }
  decorate(t) {
    const n = this.getParent();
    if (!n)
      return null;
    const r = n.getKey(), i = n.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, r, i, () => AA(t, r), (l) => PA(t, r, s, l), () => NA(t, r), () => wA(t, r)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return P("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.getRenderedText() });
  }
  /** The text this caller shows on screen; empty when CSS generates the caller instead. */
  getRenderedText() {
    const t = this.getLatest(), n = t.getParent(), r = L(n) && n.getIsCollapsed();
    return t.__caller === Bo && r ? "" : t.__caller === By && r ? "*" : t.__caller;
  }
  exportJSON() {
    return {
      type: this.getType(),
      caller: this.getCaller(),
      previewText: this.getPreviewText(),
      onClick: this.getOnClick(),
      version: Dk
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function MA(e) {
  const t = e.getAttribute("data-caller") ?? "", n = e.getAttribute("data-preview-text") ?? "";
  return { node: op(t, n) };
}
function op(e, t, n) {
  return yt(new En(e, t, n));
}
function EA(e) {
  return e ? e.classList.contains(En.getType()) : !1;
}
function At(e) {
  return e instanceof En;
}
function AA(e, t) {
  return e.getEditorState().read(() => {
    const n = Q(t);
    if (!L(n))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return n.getCaller();
  });
}
function PA(e, t, n, r) {
  e.update(() => {
    const i = Q(t);
    if (!L(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(r);
    const s = Q(n);
    if (!At(s))
      throw new Error(`setNoteCaller: Caller node not found: ${n}`);
    s.setCaller(r);
  });
}
function NA(e, t) {
  return e.getEditorState().read(() => {
    const n = Q(t);
    if (!L(n))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return sl(n);
  });
}
function wA(e, t) {
  return e.getEditorState().read(() => sp(t));
}
const OA = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
], $A = ["†"], ap = "formatted", Kk = "unformatted", Uk = "paragraph-structure", cp = "standard", Bk = "block-verse", RA = {
  [ap]: "Formatted",
  [Kk]: "Unformatted",
  [Uk]: "Paragraph Structure",
  [cp]: "Standard",
  [Bk]: "Block Verse"
};
function as(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let lp, up;
function IA(e) {
  const t = fp(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  lp = e, up = t;
}
IA(ap);
const qD = () => lp, al = () => up;
function fp(e) {
  let t;
  switch (e ?? lp) {
    case ap:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Kk:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Uk:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case cp:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Bk:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        verseLayout: "block"
      };
      break;
  }
  return t;
}
function DD(e) {
  if (!e)
    return;
  const t = xg(e);
  return Object.keys(RA).find((n) => Xn(xg(fp(n)), t));
}
const LA = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function xg(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, n]) => n !== void 0));
  return { ...LA, ...t };
}
function Kt(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: n, isFormattedFont: r, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && n && r && !i && !s;
}
function qA(e) {
  if (e)
    return Xo(e) ? Jt : e.markerMode === "editable" ? Ft : Jt;
}
function Xo(e) {
  return e?.verseLayout === "block";
}
function DA(e) {
  const t = [], n = e ?? up;
  return n && (t.push(`${f_}${n.markerMode}`), n.hasSpacing && t.push(l_), n.isFormattedFont && t.push(u_)), t;
}
const KA = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function yc(e) {
  return KA.exec(e)?.[1] ?? e;
}
function No(e, t) {
  const n = e.jsonPath.slice(yc(e.jsonPath).length);
  return { ...e, jsonPath: `${$t(t)}${n}` };
}
function Fk(e) {
  const t = [];
  let n = 0;
  for (const c of Ce().getChildren())
    if (!wn(c))
      if (Vi(c)) {
        const l = n;
        c.getChildren().filter((u) => !wn(u)).forEach((u, f) => t.push({ node: u, blockPrefix: [l, f], blockBase: 0 })), n += 1;
      } else St(c) ? (t.push({ node: c, blockPrefix: [], blockBase: n }), n += zt(c, e).length) : (t.push({ node: c, blockPrefix: [n], blockBase: 0 }), n += 1);
  const r = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = A(c.node) ? zt(c.node, e).length : 0, u = de(c.node, Ak), f = St(c.node), d = u === void 0 || u !== a;
    d && (r.length > 0 && (r[r.length - 1].isSourceEnd = !0), s = i, o = 0, f || (i += 1)), r.push({
      ...c,
      count: l,
      usjPrefix: f ? [] : [s],
      usjBase: f ? s + o : o,
      isSourceStart: d,
      isSourceEnd: !1
    }), f && (i += l), o += l, a = u;
  }
  return r.length > 0 && (r[r.length - 1].isSourceEnd = !0), r;
}
function zk(e, t) {
  return e.length >= t.length && t.every((n, r) => e[r] === n);
}
function jk(e, t, n, r = !0) {
  const i = e.jsonPath.slice(yc(e.jsonPath).length);
  let s = In(yc(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!zk(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return r && i === "" && A(o.node) && (!o.isSourceStart || St(o.node)) ? jk(n(o.node), t, n, !1) : No(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return No(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function UA(e, t, n) {
  for (const r of t) {
    if (r.usjPrefix.length === 0) {
      if (e < r.usjBase || e >= r.usjBase + r.count)
        continue;
      const o = e - r.usjBase + r.blockBase;
      return r.blockPrefix.length === 0 ? { jsonPath: "$", offset: o } : { jsonPath: $t(r.blockPrefix), offset: o };
    }
    if (!r.isSourceStart || r.usjPrefix[0] !== e)
      continue;
    const [i, s] = r.blockPrefix;
    return s === void 0 ? { jsonPath: "$", offset: i } : { jsonPath: $t([i]), offset: s };
  }
  return { jsonPath: "$", offset: zt(Ce(), n).length };
}
function Tg(e, t, n) {
  const r = In(yc(e.jsonPath));
  if (r.length === 0)
    return Lr(e) ? UA(e.offset, t, n) : e;
  for (const i of t) {
    if (!zk(r, i.usjPrefix))
      continue;
    const s = r.slice(i.usjPrefix.length);
    if (s.length === 0) {
      if (i.usjPrefix.length === 0)
        continue;
      if (Lr(e)) {
        const o = e.offset - i.usjBase;
        if (o < 0 || !i.isSourceEnd && o >= i.count)
          continue;
        return {
          ...No(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return No(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return No(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function Qo(e, t, n) {
  let { start: r } = e, i = e.end ?? r;
  if (ox()) {
    const g = Kt(t), m = Fk(g), y = Tg(r, m, g), k = i === r ? y : Tg(i, m, g);
    if (!y || !k)
      return;
    r = y, i = k;
  }
  const s = !!n?.forAnnotation, o = Sg(r, t, s), a = i === r ? o : Sg(i, t, s), [c, l] = o.point, [u, f] = a.point;
  if (!c || !u || l === void 0 || f === void 0)
    return;
  let d = _g(c, l), p = _g(u, f);
  if (Li(i) && i.closingMarkerOffset === 0 && !Xn(i, r) && (p = iP(p[0], p[1], Kt(t))), n?.forAnnotation && i !== r) {
    const g = { edge: d, inside: o.insideDecorator }, m = { edge: p, inside: a.insideDecorator };
    [d, p] = BA(g, m), n.decoratorHolds && FA(g, m, n.decoratorHolds);
  }
  const h = Kr();
  return h.anchor = Zt(d[0].getKey(), d[1], rf(d[0])), h.focus = Zt(p[0].getKey(), p[1], rf(p[0])), h;
}
function BA(e, t) {
  const { inside: n } = e, { inside: r } = t;
  if (!n && !r)
    return [e.edge, t.edge];
  const { sameDecorator: i, reversed: s } = Vk(e, t), [o, a] = s ? [t, e] : [e, t], c = o.inside ? Zu(o.inside, o.inside.before >= o.inside.total, o.edge) : o.edge;
  if (i && n?.before === r?.before)
    return [c, c];
  const l = a.inside ? Zu(a.inside, a.inside.before > 0, a.edge) : a.edge;
  return s ? [l, c] : [c, l];
}
function FA(e, t, n) {
  const { inside: r } = e, { inside: i } = t;
  if (!r && !i)
    return;
  const { sameDecorator: s, reversed: o } = Vk(e, t), [a, c] = o ? [i, r] : [r, i], l = (u, f, d) => {
    d > f && n.set(u.decorator.getKey(), { start: f, end: d });
  };
  a && l(a, a.before, s && c ? c.before : a.total), c && !s && l(c, 0, c.before);
}
function Vk(e, t) {
  const { inside: n } = e, { inside: r } = t;
  return n && r && n.decorator.is(r.decorator) ? { sameDecorator: !0, reversed: r.before < n.before } : { sameDecorator: !1, reversed: zA(t, e) };
}
function Zu(e, t, n) {
  const [r, i] = ei(e.decorator, t);
  return r && i !== void 0 ? [r, i] : n;
}
function zA(e, t) {
  const n = ({ edge: s, inside: o }) => {
    const [a, c] = o ? Zu(o, !1, s) : s;
    return Zt(a.getKey(), c, rf(a));
  }, r = n(e), i = n(t);
  return r.isBefore(i) ? !0 : i.isBefore(r) ? !1 : !e.inside && !!t.inside;
}
function cl(e) {
  const t = w();
  if (!t || !E(t))
    return;
  const n = ox() ? Fk(Kt(e)) : void 0, r = (u, f) => {
    const d = Rt(u, f, e);
    return n ? jk(d, n, (p) => Rt(p, 0, e)) : d;
  }, i = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), s = t.isBackward() ? t.focus.offset : t.anchor.offset, o = r(i, s);
  if (!o)
    return;
  if (t.isCollapsed())
    return { start: o };
  const a = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), c = t.isBackward() ? t.anchor.offset : t.focus.offset, l = r(a, c);
  if (l)
    return { start: o, end: l };
}
const ni = {
  va: { markerName: "va", keyName: "altnumber" },
  vp: { markerName: "vp", keyName: "pubnumber" },
  ca: { markerName: "ca", keyName: "altnumber" },
  cp: { markerName: "cp", keyName: "pubnumber" },
  cat: { markerName: "cat", keyName: "category" },
  char: void 0,
  milestone: void 0,
  optbreak: void 0,
  separator: void 0,
  nestedGlyph: void 0,
  opaqueUnknown: void 0
}, jA = new Map(Object.values(ni).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), vg = {
  va: !0,
  vp: !0,
  ca: !0,
  cp: !0,
  cat: !0,
  milestone: !0,
  char: !0,
  optbreak: !0,
  // A separator and a nested glyph are bytes of the char span they decorate and are addressed
  // through that span's own glyph spans; an opaque unknown renders its bytes as ordinary text.
  separator: !1,
  nestedGlyph: !1,
  opaqueUnknown: !1
}, VA = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(vg).filter((e) => vg[e])
), WA = /([^\s="|]+)="([^"]*)"/g, HA = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Wk(e, t) {
  return `${e}['${t}']`;
}
function Ri(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function wo(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function dp(e) {
  const t = Cr(e);
  if (!t)
    return;
  const n = Fr(t.kind).scanPieces(t.owner);
  if (n.opener?.is(e))
    return { ...t, role: "opener" };
  if (n.value?.is(e))
    return { ...t, role: "value" };
  if (n.closer?.is(e))
    return { ...t, role: "closer" };
}
function ll(e, t, n, r = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(WA)) {
    const o = s[1], a = r(o);
    i.push({
      start: t + s.index,
      base: 0,
      bytes: { kind: "attributeKey", keyName: a }
    }), i.push({
      // Past the key, its `=`, and its opening quote.
      start: t + s.index + o.length + 2,
      base: 0,
      bytes: { kind: "property", property: a }
    });
  }
  return i.length > 0 ? i : n === void 0 ? [] : [
    { start: t, base: 0, bytes: { kind: "property", property: n } }
  ];
}
function GA(e, t) {
  const n = HA.exec(e);
  if (!n)
    return [];
  const r = n[1], i = n[0].length - r.length - 2, s = jA.get(r) ?? r, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: n[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${r}*`);
  return a > n[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function pp(e) {
  if (bn(e)) {
    const t = sx(e), n = e.getTextContent();
    if (Ue(t) && (n === "\\*" || n.startsWith(Ve(t.getMarker()))))
      return t;
  }
  return qn(e) ?? e;
}
function JA(e) {
  const t = e.getTextContentSize(), n = dp(e);
  if (n && n.role !== "value") {
    const i = ni[n.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: n.owner,
        length: t,
        spans: n.role === "closer" ? wo(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (n.kind === "milestone")
      return {
        owner: n.owner,
        length: t,
        spans: n.role === "closer" ? wo() : Ri(1)
      };
  }
  const r = e.getMarkerSyntax();
  return {
    owner: pp(e),
    length: t,
    spans: r === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Ri(e.getNested() ? 2 : 1)
    ) : wo()
  };
}
function YA(e) {
  const t = e.getTextContent(), n = t.length, r = dp(e);
  if (r?.kind === "optbreak")
    return {
      owner: r.owner,
      length: n,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = pp(e);
  if (we(i)) {
    const s = Ve(i.getMarker()).length;
    if (t.startsWith(Ve(i.getMarker())))
      return {
        owner: i,
        length: n,
        spans: [
          ...Ri(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (et(i)) {
    const s = Xc(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: n, spans: wo() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: n, spans: Ri(1) };
  }
  return {
    owner: i,
    length: n,
    spans: t.endsWith("*") ? wo() : Ri(t.startsWith("\\+") ? 2 : 1)
  };
}
function XA(e) {
  const t = dp(e);
  if (t?.role !== "value")
    return;
  const { owner: n, kind: r } = t, i = e.getTextContent(), s = i.length, o = ni[r];
  if (o) {
    const { markerName: a, keyName: c } = o;
    return {
      owner: n,
      length: s,
      spans: [
        // The separator before the value is the space after the attribute marker, which counts
        // into that marker name's offset space.
        { start: 0, base: a.length, bytes: { kind: "attributeKey", keyName: c } },
        { start: 1, base: 0, bytes: { kind: "property", property: c } }
      ]
    };
  }
  if (r === "char")
    return {
      owner: n,
      length: s,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...ll(i, 1, K(n) ? Qs(n.getMarker()) : void 0)
      ]
    };
  if (r === "milestone" && Ue(n))
    return { owner: n, length: s, spans: Hk(n.getMarker(), i) };
}
function Hk(e, t) {
  return [
    { start: 0, base: e.length, bytes: { kind: "property", property: "marker" } },
    ...ll(t, 2, da(e))
  ];
}
function QA(e) {
  const t = e.getTextContent(), n = t.length, r = e.getParent();
  if (!et(r)) {
    const s = sx(e);
    return Ue(s) ? { owner: s, length: n, spans: Hk(s.getMarker(), t) } : void 0;
  }
  const i = GA(t, (r.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: r, length: n, spans: i };
  if (t.startsWith("|"))
    return {
      owner: r,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...ll(t, 1, void 0, (s) => K0(r.getTag(), s))
      ]
    };
}
function Cg(e, t) {
  const n = Ve(e);
  if (t.startsWith(n))
    return [
      ...Ri(1),
      { start: n.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function tn(e) {
  if (N(e))
    return JA(e);
  if (bn(e))
    return YA(e);
  if (qt(e) && e.getTextType() === "attribute")
    return QA(e);
  if (e.getType() === hi) {
    const r = e.getParent();
    return L(r) ? {
      owner: r,
      length: r.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Pe(e)) {
    const r = Cg(e.getMarker(), e.getTextContent());
    return r ? { owner: e, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (!v(e))
    return;
  if (rn(e))
    return { owner: e, length: e.getTextContentSize(), spans: Ri(1) };
  if (de(e, be) === "attribute")
    return XA(e);
  const t = e.getParent();
  if (Ee(t) && gi(t)?.is(e)) {
    const r = Cg(t.getMarker(), e.getTextContent());
    return r ? { owner: t, length: e.getTextContentSize(), spans: r } : void 0;
  }
  const n = qn(e);
  if (L(n) && Et(n)?.is(e))
    return {
      owner: n,
      length: e.getTextContentSize(),
      spans: [
        // The caller's leading space is the space after the note's own marker, which counts into
        // that marker name's offset space.
        {
          start: 0,
          base: n.getMarker().length,
          bytes: { kind: "property", property: "marker" }
        },
        { start: 1, base: 0, bytes: { kind: "property", property: "caller" } }
      ]
    };
}
function yi(e) {
  return bn(e) || qt(e) && e.getTextType() === "attribute" || e.getType() === hi;
}
function ul(e) {
  const t = [];
  if ((Pe(e) || rn(e)) && t.push(e), A(e)) {
    const n = Ee(e) ? gi(e) : void 0, r = L(e) ? Et(e) : void 0;
    for (const i of e.getChildren())
      r && (r.is(i) || i.isParentOf(r)) ? t.push(r) : (N(i) || bn(i) || qt(i) && i.getTextType() === "attribute" || i.getType() === hi || n?.is(i)) && t.push(i);
  }
  if (Ue(e))
    for (let n = e.getNextSibling(); n && yi(n); n = n.getNextSibling())
      (!bn(n) || pp(n).is(e)) && t.push(n);
  for (const n of VA) {
    const r = Fr(n);
    if (!r.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = r.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function Wi(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function ef(e, t, n) {
  const r = tn(e);
  if (!r || r.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, r.length));
  let s = r.spans[0];
  for (const c of r.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = $t(pn(r.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Wk(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return ZA(e, n);
  }
}
function tf(e, t) {
  return v(e) && !tn(e) && !$s(e, 0, t);
}
function ZA(e, t) {
  let n = e;
  for (let o = n.getParent(); !n.getPreviousSibling() && se(o); )
    n = o, o = n.getParent();
  let r = n.getPreviousSibling();
  for (; r && tf(r, t); )
    r = r.getPreviousSibling();
  if (!r)
    return;
  const i = A(r) ? r.getLastDescendant() : r;
  if (i && (v(i) || yi(i)))
    return tf(i, t) ? void 0 : Zn(i, i.getTextContentSize(), t);
  const s = r.getParent();
  if (s)
    return Zn(s, r.getIndexWithinParent() + 1, t);
}
function ys(e, t, n) {
  for (const r of ul(e)) {
    const i = tn(r);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!Wi(o.bytes, t))
          continue;
        const a = hp(i, s);
        if (!(n < o.base || n > a))
          return [r, o.start + (n - o.base)];
      }
  }
}
function hp(e, t) {
  const n = e.spans[t], r = e.spans[t + 1];
  return r ? n.base + (r.start - n.start) - 1 : n.base + (e.length - n.start);
}
function $n(e, t) {
  const n = Kt(t);
  if (Lr(e)) {
    const r = In(e.jsonPath);
    let i = Ce();
    for (let s = 0; s < r.length; s++) {
      if (!i || !A(i))
        return [void 0, void 0];
      const o = zt(i, n)[r[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== r.length - 1 ? [void 0, void 0] : $M(o, e.offset) ?? Mg(e, n) ?? [void 0, void 0];
      i = o.node;
    }
    return i && A(i) ? $n(gp(i, r, e.offset, n), t) : [void 0, void 0];
  }
  if (Lo(e) || Li(e) || qo(e)) {
    const r = Mg(e, n);
    if (r)
      return r;
  }
  if (Do(e) || Uc(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const { keyName: i } = e, s = Do(e) ? ys(r, { kind: "attributeKey", keyName: i }, e.keyOffset) : ys(r, { kind: "attributeMarker", keyName: i }, 0);
    if (s)
      return s;
    const o = Zl(r, i);
    if (o)
      return o;
    const a = fP(r, i);
    return a || (Ue(r) ? ei(r, !1) : Ql(r));
  }
  if (qo(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = ys(r, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || (Zl(r, e.keyName) ?? Ql(r));
  }
  if (Yf(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = ys(r, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = A(r) ? r.getFirstChild() : null;
    return s && v(s) ? [s, 0] : ei(r, !1);
  }
  if (Li(e)) {
    const r = Ai(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = ys(r, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = mp(r);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return ei(r, !0);
    if (!A(r))
      return ei(r, !1);
    const o = r.getLastChild();
    return o && v(o) ? [o, o.getTextContent().length] : [r, r.getChildrenSize()];
  }
  if (Lo(e)) {
    const r = Gk(e.jsonPath), i = Ai(e.jsonPath, n);
    if (!i || r === void 0)
      return [void 0, void 0];
    const s = { kind: "property", property: r };
    if (r === "number" && Pe(i) && e.propertyOffset === i.getNumber().length && Zk(i) && oP(i) && !ex(i))
      return [i, i.getTextContentSize()];
    const o = ys(i, s, e.propertyOffset);
    if (o)
      return o;
    const a = dP(i, s, e.propertyOffset);
    if (a)
      return a;
    const c = Zl(i, r);
    if (c)
      return c;
    if (A(i)) {
      if (!eP.has(r))
        return Ql(i);
      const u = i.getFirstChild();
      return u && v(u) ? [u, 0] : [i, 0];
    }
    const l = pP(i, r);
    return ei(i, l !== void 0 && e.propertyOffset >= l.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${xS(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Gk(e) {
  const t = /\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/.exec(e);
  return t?.[1] ?? t?.[2] ?? t?.[3];
}
const eP = /* @__PURE__ */ new Set([
  "marker",
  "code",
  "caller",
  "category"
]);
function nf(e, t) {
  const n = e.length - e.trimStart().length, r = Math.max(n, e.trimEnd().length);
  return { before: Math.min(Math.max(t, n), r) - n, total: r - n };
}
function Sg(e, t, n) {
  const r = $n(e, t), [i, s] = r;
  if (n && !Lr(e)) {
    const c = Ai(e.jsonPath, Kt(t)), l = c && tP(c, e);
    if (l)
      return l.before > 0 ? { point: r, insideDecorator: l } : { point: r };
  }
  if (i && s !== void 0 && s > 0 && yi(i)) {
    const c = el(i);
    return {
      point: r,
      insideDecorator: { decorator: i, ...nf(c, s) }
    };
  }
  if (Lr(e))
    return { point: r };
  const o = Ai(e.jsonPath, Kt(t));
  if (!pr(o) && !Gr(o))
    return { point: r };
  const a = nP(o, e);
  return a && a.before > 0 ? { point: r, insideDecorator: a } : { point: r };
}
function Jk(e) {
  const t = e.getFirstChild();
  if (!t || !bn(t))
    return;
  const n = tn(t);
  if (n?.spans[0]?.bytes.kind !== "marker" || !n.owner.is(e) || !e.getChildren().every((c) => yi(c) || v(c) && wn(c)))
    return;
  const i = Qs(e.getMarker()), s = Qn(e.getUnknownAttributes() ?? {}, i);
  if (!s)
    return;
  const o = ll(s, 1, i);
  if (!ul(e).some((c) => tn(c)?.spans.some((l) => o.some((u) => Wi(l.bytes, u.bytes)))))
    return {
      decorator: t,
      pieces: [
        { text: t.getTextContent(), spans: n.spans },
        {
          text: s,
          spans: [{ start: 0, base: 0, bytes: { kind: "precedingText" } }, ...o]
        }
      ]
    };
}
function tP(e, t) {
  const n = K(e) ? Jk(e) : void 0, r = n && Yk(t);
  if (!n || !r)
    return;
  let i = 0, s;
  for (const { text: o, spans: a } of n.pieces) {
    const c = { spans: a, length: o.length };
    if (s === void 0) {
      const l = a.findIndex((u, f) => Wi(u.bytes, r.bytes) && r.offset >= u.base && r.offset <= hp(c, f));
      if (l >= 0) {
        const u = a[l].start + (r.offset - a[l].base);
        s = i + nf(o, u).before;
      }
    }
    i += nf(o, 0).total;
  }
  return s === void 0 ? void 0 : { decorator: n.decorator, before: s, total: i };
}
function nP(e, t) {
  const n = Yk(t);
  if (!n)
    return;
  const r = Xk(e), i = r.findIndex((a) => Wi(a.bytes, n.bytes));
  if (i < 0)
    return;
  const s = r.reduce((a, c) => a + c.length, 0), o = r.slice(0, i).reduce((a, c) => a + c.length, 0) + Math.min(Math.max(n.offset, 0), r[i].length);
  return { decorator: e, before: o, total: s };
}
function Yk(e) {
  if (Do(e))
    return {
      bytes: { kind: "attributeKey", keyName: e.keyName },
      offset: e.keyOffset
    };
  if (Uc(e))
    return { bytes: { kind: "attributeMarker", keyName: e.keyName }, offset: 0 };
  if (qo(e))
    return {
      bytes: { kind: "closingAttributeMarker", keyName: e.keyName },
      offset: e.keyClosingMarkerOffset
    };
  if (Yf(e))
    return { bytes: { kind: "marker" }, offset: 0 };
  if (Lo(e)) {
    const t = Gk(e.jsonPath);
    return t === void 0 ? void 0 : { bytes: { kind: "property", property: t }, offset: e.propertyOffset };
  }
}
function Xk(e) {
  const t = (s, o) => ({ bytes: s, text: o, length: o.length }), n = [
    t({ kind: "marker" }, "\\"),
    // The space after the marker name is inside the glyph Standard view spells, so it counts.
    t({ kind: "property", property: "marker" }, `${e.getMarker()} `),
    t({ kind: "property", property: "number" }, e.getNumber())
  ], r = Gr(e), i = r ? [ni.ca, ni.cp] : [ni.va, ni.vp];
  for (const s of i) {
    if (!s)
      continue;
    const { markerName: o, keyName: a } = s, c = a === "altnumber" ? e.getAltnumber() : e.getPubnumber();
    c !== void 0 && (n.push(t({ kind: "attributeMarker", keyName: a }, "\\"), t({ kind: "attributeKey", keyName: a }, o), t({ kind: "property", property: a }, c)), r && a === "pubnumber" || n.push(t({ kind: "closingAttributeMarker", keyName: a }, ot(o))));
  }
  return n;
}
function rP(e) {
  if (pr(e) || Gr(e))
    return Xk(e).map(({ text: r }) => r).join("");
  const t = e.getParent(), n = K(t) ? Jk(t) : void 0;
  return n?.decorator.is(e) ? n.pieces.map(({ text: r }) => r.trim()).join("") : el(e).trim();
}
function _g(e, t) {
  if (!yi(e))
    return [e, t];
  const n = e.getParent();
  if (!n || !A(n))
    return [e, t];
  const r = e.getIndexWithinParent();
  if (r < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && Qk.test(e.getTextContent());
  return [n, s ? r + 1 : r];
}
const Qk = /[ \u00A0]$/;
function iP(e, t, n) {
  let r;
  if (A(e))
    r = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    r = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; v(r) && !tn(r) && !$s(r, 0, n); )
    r = r.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = r?.getParent();
  if (r && s && yi(r))
    return [s, r.getIndexWithinParent() + 1];
  const o = A(r) ? r.getLastDescendant() : r;
  return v(o) ? [o, o.getTextContentSize()] : [e, t];
}
function rf(e) {
  return A(e) ? "element" : "text";
}
function Ai(e, t) {
  const n = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = n ? n[1] : e, i = In(r);
  let s = Ce();
  for (const o of i) {
    if (!s || !A(s))
      return;
    const a = zt(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function Rt(e, t, n) {
  return Zn(e, t, Kt(n));
}
function Zn(e, t, n) {
  const r = v(e) ? qd(e) : void 0;
  if (v(e) && r && t > r.start) {
    const s = $s(e, t, n);
    if (s)
      return {
        jsonPath: $t([...pn(s.parent), s.index]),
        offset: s.offset
      };
  }
  if (v(e) && t > 0 && t === e.getTextContentSize() && Zk(e)) {
    const s = sP(e, n);
    if (s)
      return s;
  }
  const i = ef(e, t, n);
  if (i)
    return i;
  if (se(e)) {
    const s = e.getChildrenSize(), o = e.getChildAtIndex(Math.min(t, s - 1));
    if (v(o)) {
      const c = t >= s ? o.getTextContentSize() : 0;
      return Zn(o, c, n);
    }
    if (o && t > 0 && t < s) {
      const c = nx(e, t, n);
      if (c)
        return c;
    }
    const a = e.getParent();
    if (a) {
      const c = e.getIndexWithinParent(), l = t > 0 ? c + 1 : c;
      return Zn(a, l, n);
    }
  }
  if (A(e)) {
    const s = e.getChildAtIndex(t), o = s && tx(s);
    if (o) {
      const l = ef(o, 0, n);
      if (l)
        return l;
    }
    if (s && yi(s))
      return {
        jsonPath: $t(pn(e))
      };
    const a = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!s && a && ix(a, e))
      return Va(e, !0, n);
    if (at(e) || wn(e))
      return Va(e, t > 0, n);
    const c = St(e) && mn(e.getParent()) ? e.getParentOrThrow() : e;
    return rx(c, Ps(e, t, n), n);
  }
  if (v(e)) {
    if (t < eo(e)) {
      const c = e.getPreviousSibling();
      if (N(c))
        return Zn(c, c.getTextContentSize(), n);
    }
    const s = $s(e, t, n);
    if (s)
      return {
        jsonPath: $t([
          ...pn(s.parent),
          s.index
        ]),
        offset: s.offset
      };
    const o = t > 0;
    let a = o ? e.getNextSibling() : e.getPreviousSibling();
    for (; se(a); )
      a = o ? a.getFirstChild() : a.getLastChild();
    if (v(a) && (tn(a) || $s(a, 0, n)))
      return Zn(a, o ? 0 : a.getTextContentSize(), n);
  }
  return Va(e, t > 0, n);
}
function Zk(e) {
  if (!Qk.test(e.getTextContent()))
    return !1;
  if (Pe(e))
    return !0;
  const t = qn(e);
  return L(t) && !!Et(t)?.is(e);
}
function sP(e, t) {
  let n = e;
  for (let s = n.getParent(); !n.getNextSibling() && se(s); s = n.getParent())
    n = s;
  const r = n.getNextSibling();
  if (!r) {
    const s = n.getParent();
    return !s || ex(n) ? void 0 : Zn(s, s.getChildrenSize(), t);
  }
  const i = A(r) ? r.getFirstDescendant() ?? r : r;
  if (!(tf(i, t) || tn(i)?.spans[0]?.bytes.kind === "precedingText"))
    return Zn(i, 0, t);
}
function oP(e) {
  let t = e;
  for (let n = t.getParent(); !t.getNextSibling() && se(n); n = t.getParent())
    t = n;
  return !t.getNextSibling();
}
function ex(e) {
  for (let t = e; t; t = t.getParent())
    if (t.getNextSibling())
      return !1;
  return !0;
}
function tx(e) {
  if (tn(e))
    return e;
  if (!Be(e))
    return;
  const t = e.getFirstDescendant();
  return t && tn(t) ? t : void 0;
}
function nx(e, t, n) {
  for (let r = t; r < e.getChildrenSize(); r++) {
    const i = e.getChildAtIndex(r);
    if (!i)
      return;
    const s = tx(i);
    if (s)
      return ef(s, 0, n);
    if (v(i) && $s(i, 0, n))
      return Zn(i, 0, n);
    if (v(i) || wn(i))
      continue;
    const o = RM(i, n);
    if (o)
      return rx(o.parent, o.point, n);
  }
}
function rx(e, t, n) {
  const r = pn(e);
  return t.type === "text" ? {
    jsonPath: $t([...r, t.index]),
    offset: t.offset
  } : gp(e, r, t.index, n);
}
function ix(e, t) {
  const n = tn(e);
  return !!n && n.owner.is(t) && n.spans[0]?.bytes.kind === "closingMarker";
}
function Va(e, t, n) {
  const r = e.getParent();
  if (!r)
    return { jsonPath: $t(pn(e)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (se(r)) {
    if (i > 0 && i < r.getChildrenSize()) {
      const s = nx(r, i, n);
      if (s)
        return s;
    }
    return Va(r, i > 0, n);
  }
  return Zn(r, i, n);
}
function gp(e, t, n, r) {
  const i = zt(e, r), s = i[n];
  if (!s)
    return aP(e, t, i, r);
  const o = $t([...t, n]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function aP(e, t, n, r) {
  if (mn(e))
    return bc(e, t, 1, r);
  if (mp(e) !== void 0) {
    const o = n.length - 1, a = n[o];
    return a?.type === "text" ? {
      jsonPath: $t([...t, o]),
      offset: a.length
    } : {
      jsonPath: $t(t),
      closingMarkerOffset: 0
    };
  }
  const i = qn(e), s = t[t.length - 1];
  return cP(e) || !i || s === void 0 ? bc(e, t, 0, r) : gp(i, t.slice(0, -1), s + 1, r);
}
function bc(e, t, n, r) {
  const i = $t(t), s = mp(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + n
    };
  if (A(e)) {
    const l = zt(e, r), u = l.length - 1, f = l[u], d = [...t, u];
    if (f?.type === "text")
      return { jsonPath: $t(d), offset: f.length + n };
    if (f)
      return bc(f.node, d, n, r);
  }
  const o = (l, u) => ({
    jsonPath: Wk(i, l),
    propertyOffset: u.length + n
  }), a = (l, u) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: ot(u).length + n
  });
  if (Ae(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (at(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (we(e))
    return o("code", e.getCode());
  if (L(e))
    return o("caller", e.getCaller());
  const c = et(e) ? e.getMarker() : lP(e);
  return c === void 0 ? { jsonPath: i } : o("marker", c);
}
function mp(e) {
  if (K(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : ot(e.getMarker(), Yc(e)).length;
  if (L(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : ot(e.getMarker()).length;
  if (Ue(e))
    return ot("").length;
  if (et(e)) {
    const { closing: t } = Xc(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function cP(e) {
  const t = qn(e);
  return me(e) || St(e) || we(e) || vk(e) || et(e) && e.getTag() === "table:row" || mn(t) || Vi(t);
}
function lP(e) {
  if (me(e) || K(e) || Ue(e) || vk(e) || rE(e))
    return e.getMarker();
}
function Ql(e) {
  if (A(e)) {
    const n = e.getLastChild();
    let r = n;
    for (; r && uP(r, e); )
      r = r.getPreviousSibling();
    if (r !== n)
      return v(r) && !tn(r) ? [
        r,
        wn(r) ? 0 : r.getTextContentSize()
      ] : [e, r ? r.getIndexWithinParent() + 1 : 0];
    if (n && v(n))
      return [
        n,
        !tn(n) && wn(n) ? 0 : n.getTextContentSize()
      ];
  }
  const t = e.getNextSibling();
  return t && A(t) ? [t, 0] : ei(e, !0);
}
function uP(e, t) {
  return Kd(e) || Be(e) || qt(e) && e.getTextType() === "attribute" || ix(e, t);
}
function fP(e, t) {
  for (const n of ul(e)) {
    const r = tn(n);
    if (!r?.owner.is(e))
      continue;
    const { spans: i } = r;
    if (i.some((o) => Wi(o.bytes, { kind: "attributeKey", keyName: t })))
      return;
    const s = i.find((o) => Wi(o.bytes, { kind: "property", property: t }));
    if (s && n.getTextContent()[s.start - 1] === "|")
      return [n, s.start];
  }
}
function dP(e, t, n) {
  for (const r of ul(e)) {
    if (!yi(r))
      continue;
    const i = tn(r);
    if (!i?.owner.is(e))
      continue;
    const s = i.spans.findIndex((o) => Wi(o.bytes, t));
    if (!(s < 0))
      return n > hp(i, s) ? [r, i.spans[s + 1]?.start ?? i.length] : void 0;
  }
}
function Zl(e, t) {
  if (!L(e) || t !== ni.cat?.keyName)
    return;
  const n = e.getChildren().find((s) => s.getType() === hi);
  if (!n)
    return;
  const [r, i] = ei(n, !0);
  return r && i !== void 0 ? [r, i] : void 0;
}
function ei(e, t) {
  const n = e.getParent();
  return n ? [n, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function pP(e, t) {
  if (Ae(e) || at(e)) {
    if (t === "number")
      return e.getNumber();
    if (t === "altnumber")
      return e.getAltnumber();
    if (t === "pubnumber")
      return e.getPubnumber();
    if (t === "marker")
      return e.getMarker();
  }
  if (Ue(e) && t === "marker")
    return e.getMarker();
}
function Mg(e, t) {
  const n = Ce(), r = bc(n, [], 1, t);
  if (Eg(r) !== Eg(e))
    return;
  const i = n.getLastChild();
  if (!A(i))
    return [n, n.getChildrenSize()];
  const s = i.getLastDescendant();
  if (v(s))
    return [s, s.getTextContentSize()];
  if (A(s))
    return [s, s.getChildrenSize()];
  const o = s?.getParent() ?? i;
  return [o, o.getChildrenSize()];
}
function Eg(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [n]) => t.localeCompare(n)));
}
function sx(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!wn(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function pn(e) {
  const t = [];
  let n = e;
  for (; n; ) {
    const r = qn(n);
    if (!r)
      break;
    const i = OM(r, n);
    i >= 0 && t.unshift(i), n = r;
  }
  return t;
}
function ox() {
  for (let e = Ce().getFirstChild(); e; e = e.getNextSibling())
    if (Vi(e))
      return !0;
  return !1;
}
function js(e) {
  return qt(e) && we(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function ax(e) {
  const t = ma(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function yp(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, n = t.getNode();
  if (!(mn(n) && t.offset === 0 || we(n.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(js);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!we(s))
    return !1;
  const o = ax(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function Wa(e) {
  const t = w();
  if (!E(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: n } = t;
    if (n.type === "text") {
      const i = n.getNode();
      if (!(e ? n.offset === 0 : v(i) && n.offset === i.getTextContentSize()))
        return !1;
    }
    const r = e ? Jb(t) : $d(t);
    return js(r);
  }
  return yp(t) && t.isCollapsed();
}
function hP(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = Ze(t.anchor.getNode(), we);
  if (!n || !js(n.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return Wa(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(js)) {
    const r = ax(n);
    t.focus.set(r.key, r.offset, r.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function Ra() {
  const e = w();
  return E(e) && yp(e), !1;
}
function gP() {
  const e = w();
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = t.getNode();
  return !we(n) || !js(n.getFirstChild()) ? !1 : (or(n, 1), !0);
}
function mP(e) {
  const t = e.getChildren(), n = `\\${e.getMarker()}`, r = t.findIndex((s) => bn(s) && s.getTextContent().startsWith(n));
  if (r <= 0)
    return;
  let i = t[r];
  for (const s of t.slice(0, r))
    i.insertAfter(s), i = s;
}
function yP() {
  const [e] = ve();
  return G(() => e.registerCommand(zc, (t) => (bP(t), !1), qi), [e]), G(() => tt(
    e.registerCommand(jc, Wa, Ge),
    e.registerCommand(Zf, Wa, Ge),
    e.registerCommand(tc, Wa, Ge),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(tc, hP, Tr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(la, Ra, He),
    e.registerCommand(er, Ra, He),
    e.registerCommand(ir, Ra, He),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Cy, Ra, He)
  ), [e]), G(() => tt(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(yn, () => (gP(), !1), Ge),
    e.registerNodeTransform(Pn, mP)
  ), [e]), null;
}
function bP(e) {
  if (kP(e.target))
    return;
  const t = w();
  E(t) && xP(t);
}
function cs(e) {
  let t = e.getFirstChild(), n = 0;
  for (; t !== null; )
    if (kn(t))
      n++, t = t.getNextSibling(), v(t) && t.getTextContent() === q && (n++, t = t.getNextSibling());
    else if (Ae(t))
      n++, t = t.getNextSibling();
    else
      break;
  return n === 0 ? !1 : (or(e, n), !0);
}
function kP(e) {
  if (!Sy(e))
    return !1;
  const t = Zi(e);
  if (!N0(t))
    return !1;
  const n = t.getParent();
  return n ? vt(n) ? cs(n) : (or(n, t.getIndexWithinParent() + 1), !0) : !1;
}
function xP(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = Q(t.key);
  if (!mt(n))
    return !1;
  const r = n.getFirstChild();
  return !bn(r) && !pr(r) ? !1 : cs(n);
}
function TP(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function cx(e, t, n, r, i, s, o) {
  if (!Je.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = n ? Qo(n, i) : w();
  if (!E(a))
    return;
  if (lx(a)) {
    o?.warn("$insertNote: a note cannot be inserted in a chapter line");
    return;
  }
  const c = _P(a, e, r, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? TP(e, s), u = ux(e, l, c, i, s, void 0, void 0);
  return SP(u, a, i), u;
}
function bp(e) {
  return e !== "expanded";
}
function vP(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const n = t.getNode();
  if (!v(n) || !K(n.getParent()))
    return;
  if (N(n))
    return t.offset === 0 && n.getMarkerSyntax() === "closing" ? n : void 0;
  if (t.offset !== n.getTextContentSize())
    return;
  const r = n.getNextSibling();
  return N(r) && r.getMarkerSyntax() === "closing" ? r : void 0;
}
function lx(e) {
  return [e.anchor, e.focus].some((t) => {
    const n = t.getNode();
    return Ee(n) || Ee(n.getParent());
  });
}
function CP(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e, n = t.getNode();
  if (t.type === "text") {
    if (t.offset !== 0 || !N(n))
      return;
    const i = n.getParent();
    return vt(i) && i.getFirstChild()?.is(n) ? i : void 0;
  }
  if (!mn(n))
    return;
  const r = n.getChildAtIndex(t.offset);
  return vt(r) ? r : void 0;
}
function SP(e, t, n) {
  if (lx(t))
    return;
  const r = bp(n?.noteMode);
  e.setIsCollapsed(r), t.isCollapsed() || TM(t), Xd(t);
  const i = CP(t);
  if (i && cs(i)) {
    const o = w();
    E(o) && (t = o);
  }
  Fn(t);
  const s = vP(t);
  s ? (s.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), r || e.getChildren().reverse().find(K)?.selectEnd();
}
function bs(e, t, n) {
  const r = Ur(e);
  r.setUnknownAttributes({ closed: "false" });
  const i = n?.markerMode === "editable";
  i ? r.append(Lt(e)) : n?.markerMode === "visible" && r.append(Br("marker", Ve(e)));
  const s = t === "" ? Ot : i ? q + t : t;
  return r.append(Le(s)), r;
}
function _P(e, t, n, r, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = n ?? {}, u = i.chapterVerseSeparator ?? ":", f = i.verseRangeSeparator ?? "-", d = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => f)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (d !== void 0 && o.push(bs("fr", d, r)), !e.isCollapsed()) {
        const p = Pg(e);
        p.length > 0 && o.push(bs("fq", p, r));
      }
      o.push(bs("ft", "", r));
      break;
    case "x":
    case "ex":
      if (d !== void 0 && o.push(bs("xo", d, r)), !e.isCollapsed()) {
        const p = Pg(e);
        p.length > 0 && o.push(bs("xq", p, r));
      }
      o.push(bs("xt", "", r));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function ux(e, t, n, r, i, s, o) {
  const a = o === "false", c = a ? !1 : bp(r?.noteMode), l = pd(e, t, c);
  s && Gt(l, oi, () => s);
  const u = r?.isNoteShellEditable === !1;
  let f, d;
  r?.markerMode === "editable" ? (f = Lt(e), u && f.setMode("token"), a || (d = Lt(e, "closing"), u && d.setMode("token"))) : r?.markerMode === "visible" && (f = Br("marker", Ve(e) + " "), a || (d = Br("marker", ot(e))));
  let p;
  if (f && l.append(f), r?.markerMode === "editable" && !c)
    p = Le(Mt(l.__caller)).toggleUnmergeable(), u && p.setMode("token"), l.append(p, ...n);
  else {
    const h = () => zi(), g = n.flatMap($P(h));
    if (t === "")
      l.append(...g);
    else {
      const m = Rd(n);
      let y = () => {
      };
      i?.noteCallerOnClick && (y = i.noteCallerOnClick), p = op(l.__caller, m, y), l.append(p, h(), ...g);
    }
  }
  return d && l.append(d), l;
}
function xr(e) {
  if (typeof e == "string") {
    const t = Q(e);
    return L(t) ? t : void 0;
  }
  return _A(e);
}
function Ha(e, t) {
  const n = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(n), n) {
    const r = e.getPreviousSibling();
    if (pr(r) || !r) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      r.selectEnd();
  } else {
    const r = e.getChildren(), i = r.slice().reverse().find(K);
    if (i)
      MP(i);
    else {
      const s = kp(e), o = s === -1 ? r.length : s;
      e.select(o, o);
    }
  }
}
function kp(e) {
  const t = e.getChildrenSize() - 1, n = e.getLastChild();
  return N(n) && n.getMarkerSyntax() === "closing" || bn(n) && n.getTextContent() === ot(e.getMarker()) ? t : -1;
}
function MP(e) {
  const t = kp(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const n = e.getChildAtIndex(t - 1);
  v(n) && !wn(n) ? n.selectEnd() : e.select(t, t);
}
function fx(e, { isContentChange: t = !1 } = {}) {
  const n = e.getNextSibling();
  if (v(n) && !ba(n)) {
    n.select(0, 0);
    return;
  }
  const r = e.getParent();
  if (!r)
    return;
  const i = e.getIndexWithinParent() + 1;
  r.canBeEmpty() ? r.select(i, i) : xp(r, i, { announce: !t });
}
function xp(e, t, { announce: n = !0 } = {}) {
  const r = e.getChildAtIndex(t - 1);
  if (!L(r) || r.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Kr();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Fn(i), n && It().dispatchCommand(yn, void 0);
}
function Ag(e, t, n) {
  const r = Et(e), i = EP(e, r);
  if (n && px(i, t, n, dx(e, r)))
    return !0;
  let s = Math.max(t, 0), o;
  for (const { node: c, isGlyph: l, dataStart: u } of i) {
    if (l)
      continue;
    const f = c.getTextContentSize() - u;
    if (s < f) {
      const d = u + s;
      return c.select(d, d), !0;
    }
    s -= f, o = c;
  }
  if (!o)
    return !1;
  const a = o.getTextContentSize();
  return o.select(a, a), !0;
}
function EP(e, t) {
  const n = [];
  for (const { node: r } of es(e))
    !v(r) || Ze(r, Be) || (Tp(r, t) ? n.push({ node: r, isGlyph: !1, dataStart: vd(r) }) : AP(r, e) && n.push({ node: r, isGlyph: !0, dataStart: 0 }));
  return n;
}
function AP(e, t) {
  return rn(e) ? !0 : N(e) && !t.is(e.getParent());
}
function dx(e, t) {
  return (n) => {
    let r = n;
    for (; !r.getPreviousSibling(); ) {
      const o = r.getParent();
      if (!o || o.is(e))
        return;
      r = o;
    }
    const i = r.getPreviousSibling(), s = A(i) ? i.getLastDescendant() : i;
    if (v(s) && (t?.is(s) || Tp(s, t)))
      return s;
  };
}
function px(e, t, n, r) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === n.index)
      return PP(o, n.offset, r), !0;
    s += 1;
  }
  return !1;
}
function PP(e, t, n) {
  const r = e.getTextContentSize(), i = e.isToken() ? r : Math.min(Math.max(t, 0), r), s = i === 0 ? n(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function NP(e, t, n) {
  const { opener: r, value: i, closer: s } = ha(e);
  if (!i)
    return !1;
  const o = wP(i);
  if (n) {
    const c = [];
    r && c.push({ node: r, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = Et(e);
    if (px(c, t, n, dx(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function wP(e) {
  return e.getTextContent().startsWith(q) ? q.length : 0;
}
function Tp(e, t) {
  return !v(e) || wn(e) || ba(e) ? !1 : !t || !e.is(t);
}
function OP(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(K))
    return;
  const t = Et(e);
  for (const { node: r } of es(e))
    if (Tp(r, t))
      return;
  const n = kp(e);
  return n === -1 ? e.getChildrenSize() : n;
}
function $P(e) {
  return (t) => qt(t) ? [t] : [t, e()];
}
function RP(e) {
  const t = e.getParent();
  return t !== null && Ze(t, L) !== null;
}
function Pg(e) {
  if (!E(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const n = t[0], r = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = ed(e);
  let a = "";
  for (const c of t)
    if (!(L(c) || At(c) || RP(c)) && !N(c) && !rn(c) && de(c, be) !== "attribute") {
      if (Ae(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (v(c)) {
        let l = c.getTextContent();
        c === n && c === r ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === n ? l = i ? l.slice(s) : l.slice(o) : c === r && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const fl = [
  En,
  Jt,
  ...EE
], IP = [
  no,
  ...fl
], LP = pi((e, t) => {
  const { coords: n, children: r, style: i, ...s } = e, o = n !== void 0;
  return P("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: n?.y,
    left: n?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: r });
});
function qP() {
  const [e, t] = Ne(void 0), [n, r] = Ne(), i = ne(null), s = Me((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = GS(l, c, () => {
      JS(l, c, {
        placement: "bottom-start",
        middleware: [YS(), XS()]
      }).then((u) => {
        r(u.placement), t((f) => f?.x === u.x && f?.y === u.y ? f : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = Me(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return G(() => o, [o]), { coords: e, placement: n, updatePosition: s, cleanup: o };
}
function DP({ isOpen: e, floatingBoxRef: t }) {
  const { coords: n, updatePosition: r, cleanup: i, placement: s } = qP();
  return G(() => {
    if (!e || !t.current) {
      i();
      return;
    }
    const o = window.getSelection()?.getRangeAt(0);
    if (!o) {
      i();
      return;
    }
    return r(o, t.current), i;
  }, [i, e, t, r]), { coords: n, placement: s };
}
const KP = hS(LP);
function hx({ isOpen: e = !1, children: t }) {
  const n = ne(null), { coords: r, placement: i } = DP({ isOpen: e, floatingBoxRef: n }), s = ut(() => r ? typeof t == "function" ? t : () => t : () => null, [t, r]);
  return Ni(
    P(KP, { ref: n, coords: r, style: r ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const gx = xy(void 0);
function vp() {
  const e = Ty(gx);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function UP(e, t) {
  const [n, r] = Ne(0), [i, s] = Ne(-1), o = ut(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: n,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = Me(() => {
    r((f) => {
      const d = o.length;
      return d ? (f - 1 + d) % d : 0;
    });
  }, [o.length]), l = Me(() => {
    r((f) => {
      const d = o.length;
      return d ? (f + 1) % d : 0;
    });
  }, [o.length]), u = Me(() => {
    const f = o.length;
    if (n >= 0 && n < f) {
      const d = o[n];
      t?.(d), s(n);
    }
  }, [n, o, t]);
  return {
    state: a,
    moveUp: c,
    moveDown: l,
    select: u,
    setActiveIndex: r,
    setSelectedIndex: s
  };
}
function BP({ children: e, menuItems: t, onSelectOption: n, ...r }) {
  const i = UP(t, n);
  return P(gx.Provider, { value: i, children: P("div", { ...r, children: e }) });
}
const mx = pi(({ index: e, children: t, onMouseEnter: n, onClick: r, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = vp(), u = Me((d) => {
    l(), c(-1), r?.(d);
  }, [r, l, c]), f = Me((d) => {
    a(e), n?.(d);
  }, [e, a, n]);
  return P("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: f, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function FP({ children: e, autoIndex: t = !0, ...n }) {
  const r = ne(null), { state: { activeIndex: i, menuItems: s } } = vp(), o = ut(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = ut(() => {
    const c = o(s);
    return t ? gS.map(c, (l, u) => mS(l) && l.type === mx && l.props.index === void 0 ? yS(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return G(() => {
    if (r.current) {
      const c = r.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), f = l.getBoundingClientRect();
        f.bottom > u.bottom ? c.scrollTop += f.bottom - u.bottom : f.top < u.top && (c.scrollTop -= u.top - f.top);
      }
    }
  }, [i]), P("div", { ref: r, role: "menu", ...n, children: a });
}
const zP = (e, t, n) => Ga(e, n).toLowerCase().includes(t.toLowerCase()), Ng = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ga = (e, t) => {
  const n = e[t];
  return typeof n == "string" ? n : String(n);
};
function jP(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, f;
  i ? (f = i, u = n.length > 0 ? Ng(n[0]) : "") : (u = r || (n.length > 0 ? Ng(n[0]) : ""), f = (h, g) => zP(h, g, u));
  const d = s || u, p = /* @__PURE__ */ new Map();
  return n.filter((h) => {
    try {
      return f(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const m = (x) => (p.has(x) || p.set(x, Ga(x, d).toLowerCase()), p.get(x) ?? ""), y = a ? Ga(h, d) : m(h), k = a ? Ga(g, d) : m(g);
    for (const x of c)
      switch (x) {
        case "exact":
          if (y === l && k !== l)
            return -1;
          if (k === l && y !== l)
            return 1;
          break;
        case "startsWith":
          if (y.startsWith(l) && !k.startsWith(l))
            return -1;
          if (k.startsWith(l) && !y.startsWith(l))
            return 1;
          break;
        case "contains": {
          const S = y.indexOf(l), _ = k.indexOf(l);
          if (S !== -1 && _ === -1)
            return -1;
          if (_ !== -1 && S === -1)
            return 1;
          if (S !== -1 && _ !== -1)
            return S - _;
          break;
        }
      }
    return y.localeCompare(k);
  });
}
const eu = {
  Root: BP,
  Options: FP,
  Option: mx
};
function VP(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e;
  return ut(() => jP({
    query: t,
    items: n,
    filterBy: r,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, n, r, i, s, o]);
}
function WP() {
  const { moveUp: e, moveDown: t, select: n } = vp();
  return ut(() => ({
    moveUp: e,
    moveDown: t,
    select: n
  }), [e, t, n]);
}
const HP = () => {
  const e = WP(), [t] = ve();
  G(() => {
    const n = (r) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[r.key];
      return s ? (s(), r.preventDefault(), r.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(Mr, n, Ge);
  }, [t, e]);
};
function GP() {
  return HP(), null;
}
const JP = ["Shift", "Control", "Alt", "Meta"];
function yx(e) {
  const { options: t, onSelectOption: n, onClose: r, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ve(), u = s !== void 0, [f, d] = Ne(""), p = u ? s ?? "" : f, h = VP({ query: p, items: t, filterBy: "name" }), g = (m) => {
    r?.(), n ? n(m) : m.action(l);
  };
  return G(() => {
    a?.(p, h);
  }, [a, p, h]), G(() => l.registerCommand(Mr, (m) => {
    if (u || c?.includes(m.key) || JP.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return r?.(), !1;
    const k = {
      Escape: () => r?.(),
      Backspace: () => {
        p.length === 0 ? r?.() : d((x) => x.slice(0, -1));
      }
    }[m.key];
    return k ? (m.stopPropagation(), m.preventDefault(), k(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && d((x) => x + m.key), !0) : !1;
  }, Ge), [l, u, p, o, r, c]), Qe(eu.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => g(m), children: [!u && P("input", { value: p, type: "text", disabled: !0 }), P(GP, {}), P(eu.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((k, x) => Qe(eu.Option, { index: x, children: [P("span", { className: "label", children: k.label ?? k.name }), P("span", { className: "description", children: k.description })] }, k.name)) })] });
}
function YP({ trigger: e, items: t }) {
  const [n] = ve(), [r, i] = Ne(!1), s = Me((o) => {
    o.key === "Escape" && r ? (i(!1), n.focus()) : o.key === e && !r && (o.preventDefault(), i(!0));
  }, [n, e, r]);
  return G(() => n.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [n, s]), G(() => n.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = w();
      if (E(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !E(l) || c?.is(l) || i(!1);
    });
  }), [n]), t && P(hx, { isOpen: r, children: ({ placement: o }) => P(yx, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function XP({ scriptureReference: e, contextMarker: t, getMarkerAction: n }) {
  return { markersMenuItems: ut(() => {
    if (!t || !e)
      return;
    const i = vr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = vr(o), { action: c } = n(o, a);
        return {
          name: o,
          label: o,
          description: a?.description ?? "",
          action: (l) => {
            c({ editor: l, reference: e });
          }
        };
      }));
  }, [t, n, e]) };
}
function QP(e, t) {
  const n = is(e);
  if (pr(e) || Gr(e)) {
    const o = 1 + e.getMarker().length + 1, a = e.getNumber();
    if (e.getShowMarker())
      return t < o + a.length ? t : void 0;
    if (t < o || t >= o + a.length)
      return;
    const c = n.indexOf(a);
    return c < 0 ? "drawn" : c + t - o;
  }
  const r = el(e), i = r.length - r.trimStart().length, s = r.trim().length;
  if (!(t >= s))
    return r === n ? i + t : "drawn";
}
function ZP() {
  return typeof CSS > "u" || typeof Highlight > "u" || !("highlights" in CSS) ? void 0 : { registry: CSS.highlights, create: () => new Highlight() };
}
const wg = /* @__PURE__ */ new Map(), e1 = ["background-color", "color", "text-shadow"], t1 = [
  "text-decoration-line",
  "text-decoration-style",
  "text-decoration-color",
  "text-decoration-thickness"
], n1 = /* @__PURE__ */ new Set(["solid", "double", "dotted", "dashed", "wavy"]);
function r1(e, t) {
  const n = e.ownerDocument.defaultView;
  if (!n)
    return [];
  const r = n.getComputedStyle(e), i = n.getComputedStyle(t), s = (u) => {
    const f = r.getPropertyValue(u);
    return f && f !== i.getPropertyValue(u) ? f : void 0;
  }, o = [];
  for (const u of e1) {
    const f = s(u);
    f && o.push(`${u}: ${f}`);
  }
  const a = r.getPropertyValue("text-decoration-line");
  let c = !1;
  if (a) {
    if (a !== "none" && s("text-decoration-line")) {
      c = !0;
      for (const u of t1) {
        const f = s(u);
        f && o.push(`${u}: ${f}`);
      }
    }
  } else {
    const u = s("text-decoration");
    u && !/^none\b/.test(u) && (c = !0, o.push(`text-decoration: ${u}`));
  }
  const l = s("border-bottom-style");
  if (!c && l && l !== "none") {
    o.push("text-decoration-line: underline", `text-decoration-style: ${n1.has(l) ? l : "solid"}`);
    const u = r.getPropertyValue("border-bottom-color");
    u && o.push(`text-decoration-color: ${u}`);
    const f = r.getPropertyValue("border-bottom-width");
    f && o.push(`text-decoration-thickness: ${f}`);
  }
  return o;
}
const i1 = Math.random().toString(36).slice(2, 10);
let s1 = 0;
class o1 {
  api;
  probeParent;
  prefix = `editor-annotation-${i1}-${s1++}`;
  byClassSet = /* @__PURE__ */ new Map();
  byLeaf = /* @__PURE__ */ new Map();
  nextName = 0;
  style;
  probes;
  observer;
  renderQueued = !1;
  disposed = !1;
  /** Each class set's declarations as last measured; cleared when a stylesheet changes. */
  measured = /* @__PURE__ */ new Map();
  /** What the page's style rules name; cleared when a stylesheet changes. */
  rules;
  /** How many rules each of the page's stylesheets held when `rules` was read. */
  ruleCounts;
  constructor(t, n) {
    this.api = t, this.probeParent = n;
  }
  /** The pieces painted on leaf `key`. */
  leafHighlights(t) {
    return this.byLeaf.get(t) ?? [];
  }
  /** The leaves with painted pieces. */
  leafKeys() {
    return [...this.byLeaf.keys()];
  }
  /**
   * Replace leaf `key`'s painted pieces. The new pieces are added before the old ones are let go,
   * so a class set the leaf keeps using keeps its highlight, name and priority, and the stylesheet
   * is not rewritten.
   */
  setLeaf(t, n) {
    const r = this.byLeaf.get(t) ?? [];
    for (const i of n)
      this.use(i.classNames).highlight.add(i.range);
    n.length > 0 ? this.byLeaf.set(t, n) : this.byLeaf.delete(t), this.release(r, n);
  }
  clearLeaf(t) {
    const n = this.byLeaf.get(t) ?? [];
    this.byLeaf.delete(t), this.release(n, []);
  }
  /** Let go of `pieces`, keeping a range in its class set's highlight while one of `kept` still
   * paints it with that class set; a class set no piece uses any more is unregistered. */
  release(t, n) {
    for (const r of t) {
      const i = tu(r.classNames), s = this.byClassSet.get(i);
      !s || (n.some((a) => a.range === r.range && tu(a.classNames) === i) || s.highlight.delete(r.range), --s.uses > 0) || (this.api.registry.delete(s.name), wg.delete(s.name), this.byClassSet.delete(i), this.queueRender());
    }
  }
  dispose() {
    for (const t of [...this.byLeaf.keys()])
      this.clearLeaf(t);
    this.disposed = !0, this.observer?.disconnect(), this.style?.remove(), this.probes?.remove();
  }
  use(t) {
    const n = tu(t);
    let r = this.byClassSet.get(n);
    if (!r) {
      const i = `${this.prefix}-${this.nextName++}`, s = this.api.create();
      s.priority = this.nextName, r = { name: i, classNames: t, highlight: s, uses: 0 }, this.byClassSet.set(n, r), this.api.registry.set(i, s), wg.set(i, t), this.queueRender();
    }
    return r.uses++, r;
  }
  queueRender() {
    this.renderQueued || (this.renderQueued = !0, queueMicrotask(() => {
      this.renderQueued = !1, this.render();
    }));
  }
  /** Measure each class set not yet measured and write the stylesheet, when it changed. */
  render() {
    const t = this.probeParent();
    if (!t || this.disposed)
      return;
    const n = t.ownerDocument;
    this.observe(n), (!this.probes?.isConnected || this.probes.parentElement !== t) && (this.probes?.remove(), this.probes = n.createElement("div"), this.probes.setAttribute("aria-hidden", "true"), this.probes.setAttribute("data-editor-annotation-probes", ""), this.probes.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;visibility:hidden;pointer-events:none", t.append(this.probes));
    const r = this.probes;
    r.replaceChildren();
    const i = n.createElement("span");
    r.append(i);
    const s = [];
    for (const [c, { classNames: l }] of this.byClassSet) {
      if (this.measured.has(c))
        continue;
      if (!this.isNamedByRule(n, l)) {
        this.measured.set(c, []);
        continue;
      }
      const u = n.createElement("span");
      u.className = l.join(" "), s.push([c, u]);
    }
    r.append(...s.map(([, c]) => c));
    for (const [c, l] of s)
      this.measured.set(c, r1(l, i));
    const o = [];
    for (const [c, { name: l }] of this.byClassSet) {
      const u = this.measured.get(c) ?? [];
      u.length > 0 && o.push(`::highlight(${l}) { ${u.join("; ")}; }`);
    }
    for (const c of this.measured.keys())
      this.byClassSet.has(c) || this.measured.delete(c);
    r.replaceChildren();
    const a = o.join(`
`);
    this.style?.isConnected || (this.style = n.createElement("style"), this.style.setAttribute(bx, this.prefix), n.head.append(this.style)), this.style.textContent !== a && (this.style.textContent = a);
  }
  /**
   * Whether any style rule's selector names one of `classNames`. Errs toward yes: a substring match
   * counts, and every class set counts while any rule cannot be read.
   */
  isNamedByRule(t, n) {
    this.rules || (this.rules = f1(kx(t)), this.ruleCounts = Og(t));
    const { selectors: r, unreadable: i } = this.rules;
    return i || n.some((s) => r.includes(s) || r.includes(s.replace(/[^\w-]/g, "\\$&")));
  }
  /**
   * Measure again if a stylesheet's rule count changed since the rules were last read: `insertRule`,
   * `deleteRule` and adopting a stylesheet change no DOM, so no observer sees them. Only each
   * stylesheet's top-level count is compared, which keeps this cheap enough to call on every
   * commit; a rule inserted inside a group rule is seen at the next stylesheet change.
   */
  noticeStylesheetChanges() {
    if (this.disposed || this.ruleCounts === void 0)
      return;
    const t = this.probeParent()?.ownerDocument;
    !t || Og(t) === this.ruleCounts || this.forgetStyles();
  }
  forgetStyles() {
    this.measured.clear(), this.rules = void 0, this.ruleCounts = void 0, this.queueRender();
  }
  /** Measure again when a stylesheet or the page's theme changes; never for an editor highlight
   * stylesheet (this painter's or another editor's), which only styles highlights. */
  observe(t) {
    if (this.observer)
      return;
    const n = t.defaultView;
    if (!n)
      return;
    this.observer = new n.MutationObserver((i) => {
      const s = (o) => {
        if (sf(o.target))
          return !0;
        const a = [...o.addedNodes, ...o.removedNodes];
        return a.length > 0 && a.every(sf);
      };
      i.every(s) || this.forgetStyles();
    }), this.observer.observe(t.head, { childList: !0, characterData: !0, subtree: !0 });
    const r = { attributes: !0, attributeFilter: ["class", "style", "data-theme"] };
    this.observer.observe(t.documentElement, r), t.body && this.observer.observe(t.body, r);
  }
}
const bx = "data-editor-annotation-highlights";
function sf(e) {
  for (let t = e; t; t = t.parentNode)
    if (a1(t) && t.hasAttribute(bx))
      return !0;
  return !1;
}
function a1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function kx(e) {
  const t = "adoptedStyleSheets" in e ? e.adoptedStyleSheets : [];
  return [...e.styleSheets, ...t].filter((n) => !n.ownerNode || !sf(n.ownerNode));
}
function Og(e) {
  return kx(e).map((t) => {
    try {
      return t.cssRules.length;
    } catch {
      return -1;
    }
  }).join(",");
}
function c1(e) {
  return "cssRules" in e;
}
function l1(e) {
  return "styleSheet" in e;
}
function u1(e) {
  return "selectorText" in e && typeof e.selectorText == "string";
}
function f1(e) {
  const t = [];
  let n = !1;
  const r = (i) => {
    let s;
    try {
      s = i.cssRules;
    } catch {
      n = !0;
      return;
    }
    for (const o of s)
      u1(o) && t.push(o.selectorText), l1(o) && (o.styleSheet ? r(o.styleSheet) : n = !0), c1(o) && r(o);
  };
  for (const i of e)
    r(i);
  return { selectors: t.join(`
`), unreadable: n };
}
function tu(e) {
  return JSON.stringify([...e].sort());
}
function $g(e, t, n) {
  const r = e.ownerDocument, i = r.createTreeWalker(e, NodeFilter.SHOW_TEXT), s = r.createRange();
  let o = 0, a = !1;
  for (let c = i.nextNode(); c; c = i.nextNode()) {
    const l = c.textContent?.length ?? 0;
    if (!a && t < o + l && (s.setStart(c, t - o), a = !0), a && n <= o + l)
      return s.setEnd(c, n - o), s;
    o += l;
  }
}
function d1(e, t, n) {
  return "getClientRects" in e ? Array.from(e.getClientRects()).some((r) => t >= r.left && t <= r.right && n >= r.top && n <= r.bottom) : !1;
}
function xx(e) {
  return v(e) ? e.getTextContent() : is(e);
}
function Oo(e) {
  return xx(e).length;
}
function p1(e, t) {
  if (v(e)) {
    if (Tn(e))
      return !0;
    if (dk(e)) {
      const [i, s] = Ud(e);
      return t < i || t >= s;
    }
    return t < eo(e);
  }
  const [n, r] = tl(is(e));
  return t < n || t >= r;
}
function nu(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t.getKey();
}
function h1(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function Rg(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return h1(n);
  }
}
function Tx(e) {
  return A(e) ? e.getChildren().flatMap(Tx) : [e];
}
const g1 = 64;
function m1(e, t) {
  const n = /* @__PURE__ */ new Map(), r = (o, a, c) => {
    for (let l = a; l < c; l++)
      if (!p1(o, l))
        return !1;
    return c > a && n.set(o.getKey(), [a, c]), !0;
  };
  if (e.leaf.is(t.leaf))
    return r(e.leaf, e.end, t.start) ? n : void 0;
  const i = nu(e.leaf);
  if (i !== nu(t.leaf) || !r(e.leaf, e.end, Oo(e.leaf)))
    return;
  let s = Rg(e.leaf);
  for (let o = 0; s && !s.is(t.leaf); o++, s = Rg(s))
    if (o >= g1 || nu(s) !== i || xn(s) && Oo(s) === 0 || !r(s, 0, Oo(s)))
      return;
  if (s)
    return r(t.leaf, 0, t.start) ? n : void 0;
}
function y1(e) {
  const t = [...e].sort(([r], [i]) => r - i), n = [];
  for (const [r, i] of t) {
    const s = n[n.length - 1];
    s && r <= s[1] ? s[1] = Math.max(s[1], i) : n.push([r, i]);
  }
  return n;
}
function b1(e, t, n, r) {
  const i = [];
  for (const a of n) {
    const c = Q(a);
    if (c?.isAttached())
      for (const l of Ir(c)) {
        if (l.type !== e || l.id !== t || l.undisplayed)
          continue;
        const u = l.start === l.end;
        i.push({
          leaf: c,
          start: u ? 0 : l.start,
          end: u ? Oo(c) : l.end,
          inMark: !1
        });
      }
  }
  for (const a of r) {
    const c = Q(a);
    if (!(!se(c) || !c.isAttached()))
      for (const l of Tx(c))
        i.push({ leaf: l, start: 0, end: Oo(l), inMark: !0 });
  }
  i.sort((a, c) => a.leaf.is(c.leaf) ? a.start - c.start : a.leaf.isBefore(c.leaf) ? -1 : 1);
  const s = /* @__PURE__ */ new Map(), o = (a, c, l) => {
    const u = s.get(a) ?? [];
    u.push([c, l]), s.set(a, u);
  };
  i.forEach((a, c) => {
    a.inMark || o(a.leaf.getKey(), a.start, a.end);
    const l = i[c + 1];
    if (l)
      for (const [u, [f, d]] of m1(a, l) ?? [])
        o(u, f, d);
  });
  for (const [a, c] of s)
    s.set(a, y1(c));
  return s;
}
function k1(e, t) {
  const n = [...t.values()];
  if (e === 0 || n.every((o) => o.length === 1 && o[0][0] <= 0 && o[0][1] >= e))
    return { whole: !0 };
  const r = /* @__PURE__ */ new Set();
  for (const o of n)
    for (const [a, c] of o)
      r.add(Math.max(0, Math.min(a, e))), r.add(Math.max(0, Math.min(c, e)));
  const i = [...r].sort((o, a) => o - a), s = [];
  for (let o = 0; o + 1 < i.length; o++) {
    const [a, c] = [i[o], i[o + 1]], l = [...t].filter(([, u]) => u.some(([f, d]) => f <= a && c <= d)).map(([u]) => u);
    l.length > 0 && s.push({ start: a, end: c, annotations: l });
  }
  return { whole: !1, segments: s };
}
const x1 = "display-annotation", T1 = [
  st,
  Wn,
  Ft,
  Hn,
  En,
  Jt,
  Dn,
  dr
], vx = /* @__PURE__ */ new Set();
function Kn(e, t) {
  return JSON.stringify([e, t]);
}
function v1(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string";
}
function ho(e) {
  const t = JSON.parse(e);
  if (!v1(t))
    throw new Error(`not an annotation index key: ${e}`);
  return t;
}
function Cx(e) {
  Gt(e, Zc, void 0), A(e) && e.getChildren().forEach(Cx);
}
const ru = /* @__PURE__ */ new WeakMap();
function C1(e) {
  BM({
    holdableText: rP,
    renderedOffset: QP
  });
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  const u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakSet(), d = new AbortController(), p = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set();
  let S, _ = !1;
  const F = ZP(), U = F ? new o1(F, () => e.getRootElement()?.parentElement ?? null) : void 0;
  let W = /* @__PURE__ */ new Set();
  const ae = e._config.theme;
  function $(I) {
    return (t.get(I)?.size ?? 0) + (r.get(I)?.size ?? 0);
  }
  function D(I, V, J) {
    let Y = I.get(V);
    Y || I.set(V, Y = /* @__PURE__ */ new Set()), Y.add(J);
  }
  function ge(I, V, J) {
    const Y = I.get(V);
    Y?.delete(J) && (Y.size === 0 && I.delete(V), $(V) === 0 && W.add(V));
  }
  function re(I) {
    for (const [V, J] of Object.entries(I.getTypedIDs()))
      for (const Y of J)
        qe(Kn(V, Y), V, Y);
  }
  function qe(I, V, J) {
    const Y = /* @__PURE__ */ new Set([
      ...r.get(I) ?? [],
      ...t.get(I) ?? []
    ]), le = Array.from(Y, (Z) => Q(Z)).filter((Z) => Z !== null && Z.isAttached() && // A holder inside another holder is already in that one's text.
    !Z.getParents().some((oe) => Y.has(oe.getKey())));
    if (le.length === 0)
      return;
    le.sort((Z, oe) => Z.isBefore(oe) ? -1 : 1);
    const ee = le.map((Z) => se(Z) ? Z.getTextContent() : Ir(Z).filter((oe) => oe.type === V && oe.id === J).map((oe) => ju(Z, oe)).join("")).join("");
    o.set(I, ee);
  }
  function ye(I, V, J) {
    return g.get(I)?.has(V) ? y.has(I) ? !0 : (U?.leafHighlights(I) ?? []).some((Y) => Y.annotations.includes(V) && d1(Y.range, J.clientX, J.clientY)) : !1;
  }
  function nt(I, V) {
    const J = /* @__PURE__ */ new Map();
    for (const Y of Ir(I)) {
      const le = Kn(Y.type, Y.id);
      J.has(le) || !ye(I.getKey(), le, V) || J.set(le, { annotation: Y, text: ju(I, Y) });
    }
    return J;
  }
  function rt(I, V, J) {
    e.getEditorState().read(() => {
      const Y = Zi(I);
      if (!Y)
        return;
      const le = J === "leave" ? /* @__PURE__ */ new Map() : nt(Y, V), ee = (oe, { annotation: ue, text: De }) => fc(e, ue.type, ue.id)?.[oe]?.(V, ue.type, ue.id, De);
      if (J === "onClick") {
        le.forEach((oe) => ee("onClick", oe));
        return;
      }
      const Z = p.get(I) ?? /* @__PURE__ */ new Map();
      for (const [oe, ue] of Z)
        le.has(oe) || ee("onMouseLeave", ue);
      for (const [oe, ue] of le)
        Z.has(oe) || ee("onMouseEnter", ue);
      p.set(I, le);
    }, { editor: e });
  }
  function sn(I) {
    const V = {}, J = /* @__PURE__ */ new Set();
    for (const Y of I) {
      const [le, ee] = ho(Y), Z = V[le] ??= [];
      Z.includes(ee) || Z.push(ee), k.get(Y)?.forEach((oe) => J.add(oe));
    }
    return Object.keys(V).length === 0 ? [] : [
      ...eb(ae, V),
      x1,
      ...J
    ].flatMap((Y) => Y.match(/\S+/g) ?? []);
  }
  function Ye(I, V) {
    const J = u.get(I) ?? [];
    Ba(I, ...J.filter((Y) => !V.includes(Y))), Co(I, ...V), u.set(I, V);
  }
  function gr(I) {
    if (f.has(I))
      return;
    f.add(I);
    const { signal: V } = d;
    I.addEventListener("click", (J) => rt(I, J, "onClick"), { signal: V }), I.addEventListener("mouseenter", (J) => rt(I, J, "move"), { signal: V }), I.addEventListener("mousemove", (J) => rt(I, J, "move"), { signal: V }), I.addEventListener("mouseleave", (J) => rt(I, J, "leave"), {
      signal: V
    });
  }
  function vn(I) {
    const V = Q(I), J = e.getElementByKey(I), Y = g.get(I), le = m.get(I);
    if (le && le !== J && Ye(le, []), x.delete(I), !V || !J || !Y || Y.size === 0) {
      J && Ye(J, []), U?.clearLeaf(I), m.delete(I), y.delete(I);
      return;
    }
    m.set(I, J);
    const ee = new Map([...Y].map((Re) => [
      Re,
      h.get(Re)?.get(I) ?? []
    ])), Z = Ir(V).length > 0, oe = xx(V);
    let ue = k1(oe.length, ee);
    if (!ue.whole && !U && (ue = Z ? { whole: !0 } : { whole: !1, segments: [] }), Z && gr(J), ue.whole) {
      U?.clearLeaf(I), y.add(I), Ye(J, sn(Y));
      return;
    }
    if (y.delete(I), Ye(J, []), !U)
      return;
    const De = [];
    for (const { start: Re, end: on, annotations: Sn } of ue.segments) {
      const Nr = $g(J, Re, on);
      Nr ? De.push({
        classNames: sn(Sn),
        annotations: Sn,
        range: Nr,
        text: oe.slice(Re, on)
      }) : x.add(I);
    }
    U.setLeaf(I, De);
  }
  function Oe(I) {
    if (x.has(I))
      return !0;
    const V = e.getElementByKey(I);
    return (U?.leafHighlights(I) ?? []).some(({ range: J, text: Y }) => !V || !V.contains(J.startContainer) || !V.contains(J.endContainer) || J.toString() !== Y);
  }
  function he() {
    return [...x, ...U?.leafKeys() ?? []].filter(Oe);
  }
  function z() {
    _ || e.getEditorState().read(() => new Set(he()).forEach(vn), { editor: e });
  }
  function ce(I) {
    S?.disconnect(), S = void 0;
    const V = I?.ownerDocument.defaultView;
    !I || !V || !U || (S = new V.MutationObserver(z), S.observe(I, { childList: !0, characterData: !0, subtree: !0 }));
  }
  function Se(I) {
    const V = /* @__PURE__ */ new Set();
    for (const Y of I)
      g.has(Y) && V.add(Y);
    const J = /* @__PURE__ */ new Set([...t.keys(), ...h.keys()]);
    for (const [Y, le] of r)
      le.size >= 2 && J.add(Y);
    for (const Y of J) {
      const [le, ee] = ho(Y), Z = b1(le, ee, t.get(Y) ?? [], r.get(Y) ?? []), oe = h.get(Y) ?? /* @__PURE__ */ new Map();
      for (const ue of /* @__PURE__ */ new Set([...oe.keys(), ...Z.keys()]))
        JSON.stringify(oe.get(ue)) !== JSON.stringify(Z.get(ue)) && V.add(ue);
      for (const ue of oe.keys()) {
        if (Z.has(ue))
          continue;
        const De = g.get(ue);
        De?.delete(Y), De?.size === 0 && g.delete(ue);
      }
      for (const ue of Z.keys()) {
        let De = g.get(ue);
        De || g.set(ue, De = /* @__PURE__ */ new Set()), De.add(Y);
      }
      Z.size > 0 ? h.set(Y, Z) : h.delete(Y);
    }
    for (const [Y, le] of m)
      e.getElementByKey(Y) !== le && V.add(Y);
    for (const Y of he())
      V.add(Y);
    for (const Y of V)
      vn(Y);
  }
  function We(I) {
    _ || e.getEditorState().read(() => Se(I), { editor: e });
  }
  function lt(I, V) {
    const J = Kn(I, V), Y = [], le = (ee) => {
      const Z = ee.ownerDocument.createRange();
      Z.selectNodeContents(ee), Y.push(Z);
    };
    for (const ee of r.get(J) ?? []) {
      const Z = e.getElementByKey(ee);
      Z && le(Z);
    }
    for (const [ee, Z] of h.get(J) ?? []) {
      const oe = e.getElementByKey(ee);
      if (oe) {
        if (y.has(ee) || !U) {
          le(oe);
          continue;
        }
        for (const [ue, De] of Z) {
          const Re = $g(oe, ue, De);
          Re && Y.push(Re);
        }
      }
    }
    return Y.sort((ee, Z) => ee.compareBoundaryPoints(Range.START_TO_START, Z));
  }
  function kt(I, V, J, Y) {
    const le = Kn(I, V), ee = k.get(le) ?? /* @__PURE__ */ new Set();
    ee.has(J) !== Y && (Y ? ee.add(J) : ee.delete(J), ee.size > 0 ? k.set(le, ee) : k.delete(le), We(h.get(le)?.keys() ?? []));
  }
  function Cn(I) {
    e.getEditorState().read(() => {
      const V = /* @__PURE__ */ new Set();
      for (const [J, Y] of I) {
        const le = Y === "destroyed" ? null : Q(J), ee = le ? Ir(le) : [], Z = n.get(J) ?? [];
        for (const { type: oe, id: ue } of Z) {
          const De = Kn(oe, ue);
          V.add(De), ee.some((Re) => Re.type === oe && Re.id === ue) || ge(t, De, J);
        }
        for (const oe of ee) {
          const ue = Kn(oe.type, oe.id);
          V.add(ue), D(t, ue, J);
        }
        ee.length > 0 ? n.set(J, ee) : n.delete(J);
        for (let oe = le?.getParent(); oe; oe = oe.getParent())
          se(oe) && re(oe);
      }
      for (const J of V) {
        const [Y, le] = ho(J);
        qe(J, Y, le);
      }
    }, { editor: e });
  }
  function te(I) {
    e.getEditorState().read(() => {
      for (const [V, J] of I) {
        const Y = J === "destroyed" ? null : Q(V), le = se(Y) ? Y : void 0, ee = le ? Object.entries(le.getTypedIDs()) : [], Z = ee.flatMap(([ue, De]) => De.map((Re) => Kn(ue, Re)));
        for (const ue of i.get(V) ?? [])
          Z.includes(ue) || (ge(r, ue, V), le || l.set(ue, [...l.get(ue) ?? [], V]));
        for (const ue of Z)
          D(r, ue, V);
        if (Z.length > 0 ? i.set(V, Z) : i.delete(V), !le)
          continue;
        re(le);
        const oe = le.getTypedOnRemoves();
        for (const [ue, De] of ee)
          for (const Re of De) {
            const on = oe[ue]?.[Re];
            on && s.set(Kn(ue, Re), on);
          }
      }
    });
  }
  function Te(I, V, J) {
    yk(e, V, J), s.delete(I), o.delete(I);
  }
  function Pr() {
    for (const [I, V] of W_(e))
      $e(I, V);
  }
  function $e(I, V) {
    const J = Kn(I, V);
    a.add(J), c.add(J);
  }
  function mr() {
    a.clear(), H_(e);
    for (const I of /* @__PURE__ */ new Set([...s.keys(), ...o.keys()])) {
      if ($(I) > 0)
        continue;
      const [V, J] = ho(I);
      Te(I, V, J);
    }
  }
  function pe({ tags: I }) {
    Pr();
    const V = W, J = c, Y = l;
    if (W = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), I.has(ua)) {
      mr();
      return;
    }
    if (I.has(Fc))
      return;
    const le = [];
    for (const ee of V) {
      if ($(ee) > 0)
        continue;
      const [Z, oe] = ho(ee), ue = fc(e, Z, oe)?.onRemove ?? s.get(ee), De = o.get(ee) ?? "";
      if (Te(ee, Z, oe), !(!ue || a.has(ee) || J.has(ee))) {
        a.add(ee), zh(e, Z, oe, !0);
        for (const Re of Y.get(ee) ?? [])
          G_(Re, Z, oe);
        try {
          ue(Z, oe, "destroyed", De);
        } catch (Re) {
          le.push(Re);
        }
      }
    }
    for (const ee of le)
      queueMicrotask(() => e._onError(ee instanceof Error ? ee : new Error(String(ee))));
  }
  function Ut(I, V) {
    Pr();
    const J = Kn(I, V);
    a.delete(J), zh(e, I, V, !1);
  }
  const Yt = tt(
    ...T1.filter((I) => e.hasNodes([I])).map((I) => e.registerMutationListener(I, Cn, { skipInitialization: !1 })),
    e.hasNodes([gt]) ? e.registerMutationListener(gt, te, {
      skipInitialization: !1
    }) : () => {
    },
    V_(e),
    e.registerUpdateListener(pe),
    HM(e, [Jt, En]),
    e.registerUpdateListener(({ dirtyLeaves: I, dirtyElements: V }) => {
      U?.noticeStylesheetChanges(), !(I.size === 0 && V.size === 0) && (We([...I, ...V.keys()]), S?.takeRecords());
    }),
    // Also paints what the mutation listeners above found already in the document.
    e.registerRootListener((I) => {
      ce(I), I && We([...g.keys()]);
    }),
    () => {
      _ = !0, d.abort(), U?.dispose(), S?.disconnect();
    },
    e.registerCommand(
      vS,
      ({ nodes: I }) => (I.forEach(Cx), !1),
      // Critical, and never handling the command, so a handler that does handle it cannot skip the
      // strip.
      He
    )
  );
  return {
    index: {
      keysFor: (I, V) => t.get(Kn(I, V)) ?? vx,
      noteSet: Ut,
      noteReported: $e,
      hasReported: (I, V) => (Pr(), a.has(Kn(I, V))),
      setStateClass: kt,
      rangesFor: lt
    },
    references: 0,
    unregister: Yt
  };
}
function S1(e) {
  let t = ru.get(e);
  t || (t = C1(e), ru.set(e, t)), t.references++;
  const n = t;
  let r = !1;
  return {
    index: n.index,
    release: () => {
      r || (r = !0, n.references--, !(n.references > 0) && (n.unregister(), ru.delete(e)));
    }
  };
}
function Sx(e) {
  const t = ne(void 0);
  return Ys(() => {
    const n = S1(e);
    return t.current = n.index, () => {
      t.current = void 0, n.release();
    };
  }, [e]), ut(() => ({
    keysFor: (n, r) => t.current?.keysFor(n, r) ?? vx,
    noteSet: (n, r) => t.current?.noteSet(n, r),
    noteReported: (n, r) => t.current?.noteReported(n, r),
    setStateClass: (n, r, i, s) => t.current?.setStateClass(n, r, i, s),
    rangesFor: (n, r) => t.current?.rangesFor(n, r) ?? [],
    hasReported: (n, r) => t.current?.hasReported(n, r) ?? !1
  }), []);
}
function $o(e, t) {
  return `${e}:${t}`;
}
function _1(e, t) {
  G(() => {
    if (!e.hasNodes([gt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const n = /* @__PURE__ */ new Map();
    return tt(od(e, gt, (r) => Ki(r.getTypedIDs(), r.getTypedOnClicks(), r.getTypedOnRemoves(), r.getTypedOnMouseEnters(), r.getTypedOnMouseLeaves()), (r, i) => {
      const s = r.getTypedOnClicks(), o = r.getTypedOnRemoves(), a = r.getTypedOnMouseEnters(), c = r.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(r.getTypedIDs()))
        u.forEach((f) => {
          const d = s[l]?.[f], p = o[l]?.[f], h = a[l]?.[f], g = c[l]?.[f];
          i.addID(l, f, d, p, h, g);
        });
      r.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(gt, (r) => {
      e.getEditorState().read(() => {
        for (const [i, s] of r) {
          const o = Q(i);
          let a = {};
          s === "destroyed" ? a = n.get(i) ?? {} : se(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!gt.isReservedType(c))
              for (const u of l) {
                let f = t.get($o(c, u));
                a[c] = l, n.set(i, a), s === "destroyed" ? f !== void 0 && (f.delete(i), f.size === 0 && t.delete($o(c, u))) : (f === void 0 && (f = /* @__PURE__ */ new Set(), t.set($o(c, u), f)), f.has(i) || f.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const M1 = pi(function({ logger: t, viewOptions: n }, r) {
  const [i] = ve(), s = ut(() => /* @__PURE__ */ new Map(), []);
  _1(i, s);
  const o = Sx(i), a = (c, l, u) => {
    const f = Array.from(u ?? s.get($o(c, l)) ?? []), d = tb(c, l, f), p = [];
    for (const g of Array.from(o.keysFor(c, l))) {
      const m = Q(g);
      if (!m)
        continue;
      const y = Ir(m).filter((k) => k.type === c && k.id === l);
      mk(m, c, l) && p.push(...y.map((k) => ju(m, k)));
    }
    const h = fc(i, c, l);
    if (yk(i, c, l), p.length > 0 && h && d === 0 && !o.hasReported(c, l)) {
      o.noteReported(c, l);
      try {
        h.onRemove?.(c, l, "removed", p.join(""));
      } catch (g) {
        queueMicrotask(() => i._onError(g instanceof Error ? g : new Error(String(g))));
      }
    }
  };
  return Kc(r, () => ({
    setAnnotation(c, l, u, f, d, p, h) {
      if (gt.isReservedType(l))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${l}'. Use the appropriate plugin instead.`);
      i.update(() => {
        if (Qo(c, n, {
          forAnnotation: !0,
          decoratorHolds: /* @__PURE__ */ new Map()
        }) === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        a(l, u), o.noteSet(l, u);
        const m = /* @__PURE__ */ new Map(), y = Qo(c, n, {
          forAnnotation: !0,
          decoratorHolds: m
        });
        if (y === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        Hd(y, l, u, f, d, p, h, { decoratorHolds: m });
      }, { tag: Nu });
    },
    removeAnnotation(c, l) {
      if (gt.isReservedType(c))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      const u = s.get($o(c, l));
      (u === void 0 || u.size === 0) && o.keysFor(c, l).size === 0 || i.update(() => {
        a(c, l, u);
      }, { tag: Nu });
    },
    getAnnotationRanges(c, l) {
      return o.rangesFor(c, l);
    }
  })), null;
});
function E1({ dirtyElements: e, dirtyLeaves: t, prevEditorState: n, tags: r }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  r.has(td) && !r.has(zy) || i.ignoreTags.some((s) => r.has(s)) || n.isEmpty();
}
function A1(e, { dirtyLeaves: t, prevEditorState: n }) {
  let r = new As();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = Q(i), o = s !== null && Nn(s) !== void 0;
    if (t.size === 1 && v(s) && !o && aA(s)) {
      const a = np(s);
      if (a !== void 0) {
        const c = n.read(() => {
          const f = Q(i);
          return new As([v(f) ? Qu(f) : { insert: "" }]);
        }), l = new As([Qu(s)]), u = new As(a > 0 ? [{ retain: a }] : []);
        r = r.concat(u).concat(c.diff(l));
      }
    } else {
      const a = bg(n), c = bg(e.getEditorState());
      r = a.diff(c);
    }
  }), r.ops;
}
function P1(e, t, n, r) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += N1(s, i, t, r);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        r?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      r?.debug(`Delete: ${s.delete}`), O1(i, s.delete, r);
    } else "insert" in s ? typeof s.insert == "string" ? (r?.debug(`Insert: '${s.insert}'`), i += $1(i, s.insert, s.attributes, t, r)) : typeof s.insert == "object" && s.insert !== null ? (r?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), I1(i, s, t, n, r) ? i += 1 : r?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : r?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : r?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function N1(e, t, n, r) {
  return typeof e.retain != "number" || e.retain < 0 ? (r?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (r?.debug(`Retain: ${e.retain}`), e.attributes && (r?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), w1(t, e.retain, e.attributes, n, r)), e.retain);
}
function w1(e, t, n, r, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(n)}`);
  let s = t, o = 0, a = -1;
  const c = Ce();
  function l(u) {
    if (s <= 0)
      return !0;
    if (jr(u)) {
      const f = u.getTextContentSize();
      if (e < o + f && o < e + t) {
        const d = Math.max(0, e - o), p = f - d, h = Math.min(s, p);
        if (h > 0) {
          let g = u;
          const m = d > 0, y = h < f - d;
          if (m && y) {
            const [, k] = u.splitText(d);
            [g] = k.splitText(h);
          } else m ? [, g] = u.splitText(d) : y && ([g] = u.splitText(h));
          if (ci(n)) {
            const k = g.getParent();
            if (K(k)) {
              const x = n.char;
              let S;
              Array.isArray(x) ? a >= 0 && a <= x.length - 1 && (S = x[a]) : a === 0 && (S = x);
              const _ = S ? Fi(S, k) : !1;
              if (_ && Array.isArray(x) && x.length > 1) {
                const F = Le("");
                g.replace(F);
                const U = typeof n.segment == "string" ? n.segment : void 0, W = ro(x.slice(1), r, g, U);
                let ae = F;
                for (const $ of W)
                  ae.insertAfter($), ae = $;
                F.remove(), Un(n, g);
              } else if (_)
                Un(n, g);
              else {
                g.remove();
                const F = Ig(g, n, r, i);
                if (F && F.length > 0) {
                  let U = k;
                  for (const W of F)
                    U.insertAfter(W), U = W;
                }
              }
            } else {
              const x = Le("");
              g.replace(x);
              const S = Ig(g, n, r, i);
              if (S && S.length > 0) {
                let _ = x;
                for (const F of S)
                  _.insertAfter(F), _ = F;
                x.remove();
              } else
                x.replace(g);
            }
          } else
            Un(n, g);
          s -= h;
        }
      }
      o += f;
    } else if (On(u))
      e <= o && o < e + t && s > 0 && (Lg(u, n), s -= 1), o += 1;
    else if (K(u)) {
      a += 1;
      let f = !1;
      if (e <= o && o < e + t && s > 0)
        if (ci(n)) {
          const d = n.char;
          let p;
          if (Array.isArray(d) ? a >= 0 && a <= d.length - 1 && (p = d[a]) : a === 0 && (p = d), p) {
            of(u, p.style), typeof p.cid == "string" && Gt(u, Bi, () => p.cid);
            const h = pt(p, mc);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (n.char === !1 || n.char === null || j1(n.char)) && (f = !0);
      if (s > 0) {
        const d = u.getChildren();
        for (const p of d) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return f && Au(u), !0;
        }
      }
      f && Au(u), a -= 1;
    } else if (mt(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const d = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!St(u))
          Lg(u, n);
        else if (Cp(n)) {
          const p = Ex(n.para, r);
          p && u.replace(p, !0);
        }
        s -= d;
      }
      o += d;
    } else if (A(u)) {
      const f = u.getChildren();
      for (const d of f) {
        if (s <= 0)
          break;
        if (l(d) && s <= 0)
          return !0;
      }
    }
    return s <= 0;
  }
  l(c), s > 0 && i?.warn(`$applyAttributes: Not all characters in the retain operation (length ${t}) could be processed. Remaining: ${s}. targetIndex: ${e}, final currentIndex: ${o}`);
}
function Ig(e, t, n, r) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = ro(t.char, n, e, i), o = s.find(K);
  if (!o) {
    r?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Un(t, e);
    return;
  }
  const a = {};
  wx.forEach((u) => {
    e.hasFormat(u) && (a[u] = "true");
  });
  const c = {};
  Object.entries(t).forEach(([u, f]) => {
    u === "segment" || u === "char" || (typeof f == "string" ? c[u] = f : f === !0 ? c[u] = "true" : f === !1 && (c[u] = "false"));
  });
  const l = {
    ...o.getUnknownAttributes() ?? {},
    ...a,
    ...c
  };
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Un(t, e), s;
}
function _x(e, t) {
  e.setMarker(t);
  const n = e.getFirstChild();
  N(n) ? (n.setMarker(t), n.setTextContent(Ve(t))) : qt(n) && n.getTextType() === "marker" && n.setTextContent(Ve(t) + q);
}
function of(e, t) {
  const n = e.getMarker();
  if (e.setMarker(t), t === n)
    return;
  e.getChildren().forEach((o) => {
    N(o) && o.getMarker() === n && o.setMarker(t);
  });
  const r = K(e.getParent()), i = e.getFirstChild();
  qt(i) && i.getTextType() === "marker" && i.getTextContent() === Ve(n, r) && i.setTextContent(Ve(t, r));
  const s = e.getLastChild();
  qt(s) && s.getTextType() === "marker" && s.getTextContent() === ot(n, r) && s.setTextContent(ot(t, r));
}
function Lg(e, t) {
  for (const n of Object.keys(t)) {
    const r = t[n];
    if (n === "char" && K(e) && ci(t)) {
      const i = af(r);
      if (of(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Gt(e, Bi, () => o);
      }
      const s = pt(i, mc);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof r == "string" && (at(e) || Ae(e) || Ue(e) || L(e) || et(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    }) : (we(e) || me(e) || K(e)) && (n === "style" && me(e) ? _x(e, r) : n === "style" && K(e) ? of(e, r) : n === "code" && we(e) ? e.setCode(r) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    })), n === "segment" && Gt(e, oi, () => r));
  }
}
function O1(e, t, n) {
  if (t <= 0)
    return;
  const r = Ce();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (jr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, f = Math.min(s, u);
        f > 0 && (a.spliceText(l, f, ""), a.getTextContentSize() === 0 && a.remove(), n?.debug(`Deleted ${f} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= f, c -= f);
      }
      i += c;
    } else if (On(a))
      e <= i && i < e + s ? (a.remove(), n?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (mt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && mt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), n?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Vn(), !0), n?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && vt(p)) {
            let h = i + 1;
            const g = p.getChildren();
            for (const y of g) {
              if (s <= 0)
                break;
              const k = i;
              if (i = h, o(y)) {
                i = k;
                break;
              }
              jr(y) ? h += y.getTextContentSize() : On(y) && (h += 1), i = k;
            }
            const m = p.getChildren();
            for (const y of m)
              y.remove(), a.append(y);
            p.remove(), n?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Vn(), !0);
        } else me(a) ? a.replace(Vn(), !0) : a.remove();
      }
      i += 1;
    } else if (A(a)) {
      const c = a.getChildren();
      for (const l of c) {
        if (s <= 0)
          break;
        if (o(l) && s <= 0)
          return !0;
      }
    }
    return s <= 0;
  }
  o(r), s > 0 && n?.warn(`Delete operation could not remove all requested characters. Remaining to delete: ${s}. Original targetIndex: ${e}, OT length: ${t}. Final currentIndex: ${i}`);
}
function $1(e, t, n, r, i) {
  if (t === Yo)
    return qg(e, n, r, i);
  if (t.endsWith(Yo) && !Cp(n)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (ci(n))
        throw new Error("Text + LF should not have char attributes");
      o += kc(e, s, n, i);
    }
    return o += qg(e + o, n, r, i), o;
  } else return ci(n) ? R1(e, t, n, r, i) : kc(e, t, n, i);
}
function R1(e, t, n, r, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(n.char)} at index ${e}`);
  const s = Le(t === "" ? Ot : t);
  Un(n, s);
  let o;
  {
    let m = function(y) {
      if (jr(y)) {
        const k = y.getTextContentSize();
        if (e >= g && e < g + k) {
          const x = y.getParent();
          return K(x) && (o = x), !0;
        }
        g += k;
      } else if (On(y))
        g += 1;
      else if (K(y)) {
        const k = y.getChildren();
        for (const x of k)
          if (m(x))
            return !0;
      } else if (A(y)) {
        const k = y.getChildren();
        for (const x of k)
          if (m(x))
            return !0;
        mt(y) && (g += 1);
      }
      return !1;
    };
    const h = Ce();
    let g = 0;
    m(h);
  }
  let a = n.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Fi(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Fi(a, o) || (o = void 0));
  const c = typeof n.segment == "string" ? n.segment : void 0, u = ro(a, r, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const f = u.find(K);
  if (!f)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(n.char)}. Falling back to rich text insertion.`), kc(e, t, void 0, i);
  const d = {};
  for (const [h, g] of Object.entries(n))
    h !== "char" && h !== "segment" && typeof g == "string" && (d[h] = g);
  Object.keys(d).length > 0 && f.setUnknownAttributes(d);
  let p = !0;
  for (const h of u)
    if (!Mx(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), kc(e, t, void 0, i));
}
function kc(e, t, n, r) {
  if (t.length <= 0)
    return r?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ce();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (jr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, f = Le(t);
        if (Un(n, f), u === 0)
          c.insertBefore(f);
        else if (u === l) {
          const d = c.getParent();
          K(d) && !ci(n) ? d.insertAfter(f) : c.insertAfter(f);
        } else {
          const [, d] = c.splitText(u);
          d.insertBefore(f);
        }
        return r?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (On(c))
      s += 1;
    else if (K(c)) {
      if (!o && e === s) {
        const f = Le(t);
        Un(n, f);
        const d = c.getFirstChild();
        return d ? d.insertBefore(f) : c.append(f), r?.debug(`Inserted text "${t}" at beginning of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const u = c.getChildren();
      for (const f of u) {
        if (a(f))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const f = Le(t);
        return Un(n, f), c.append(f), r?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (mt(c)) {
      if (!o && e === s) {
        const f = Le(t);
        Un(n, f);
        const d = c.getFirstChild();
        return d ? d.insertBefore(f) : c.append(f), r?.debug(`Inserted text "${t}" at beginning of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const u = c.getChildren();
      for (const f of u) {
        if (a(f))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const f = Le(t);
        return Un(n, f), c.append(f), r?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (A(c)) {
      const l = c.getChildren();
      for (const u of l) {
        if (a(u))
          return !0;
        if (o)
          break;
      }
    }
    return o;
  }
  if (a(i), !o && e === s) {
    r?.debug(`Insertion point matches end of document (targetIndex: ${e}, final currentIndex: ${s}). Appending text to new ParaNode.`);
    const c = Le(t);
    Un(n, c);
    const l = Vn().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (r?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Mx(e, t, n) {
  const r = Ce();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === r && e === 0 && !r.getFirstChild())
      return t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), r.append(Vn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), r.append(t)), s = !0, !0;
    if (!A(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === r && t.isInline())
          if (vt(l)) {
            n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Vn().append(t));
        else
          l.insertBefore(t), n?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (jr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const f = e - i, [d] = l.splitText(f);
          return d.insertAfter(t), n?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${f}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (On(l))
        i += 1;
      else if (K(l)) {
        if (o(l))
          return !0;
      } else if (mt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const f = i;
        if (St(u) && mt(t) && // Target is at the ImpliedPara's implicit newline
        e === f && !s)
          return n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = f + 1, s = !0, !0;
        i += 1;
      } else if (A(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return A(a) && !s && (e === i || a === r && e > i) ? a === r ? (t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), r.append(Vn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), r.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      vt(a) ? St(a) && me(t) && e === i ? (n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !vt(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (K(a) ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !vt(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(r), s || n?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function I1(e, t, n, r, i) {
  let s;
  return Zr("chapter", t) ? s = q1(t.insert.chapter, n) : Zr("verse", t) ? s = D1(t.insert.verse, n) : Zr("ms", t) ? s = K1(t.insert.ms) : Zr("note", t) ? s = Ax(t, n, r) : Zr("unknown", t) ? s = Px(t, n, r, i) : Zr("unmatched", t) && (s = B1(t.insert.unmatched, n)), s ? Mx(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function qg(e, t, n, r) {
  let i;
  Cp(t) ? i = Ex(t.para, n) : z1(t) && (i = L1(t.book)), i ??= Vn();
  const s = i, o = me(s), a = St(s);
  let c = 0, l = !1;
  function u(f) {
    if (l)
      return !0;
    if (jr(f)) {
      const d = f.getTextContentSize();
      if (e >= c && e <= c + d) {
        const p = f.getParent();
        if (me(p) && (o || a)) {
          r?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? f.splitText(h) : [void 0];
          let m, y = g?.getPreviousSibling();
          for (; y; ) {
            const k = y;
            y = y.getPreviousSibling(), m ? m.insertBefore(k) : s.append(k), m = k;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += d;
    } else if (On(f))
      c += 1;
    else if (mt(f)) {
      const d = f.getChildren();
      for (const p of d) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (St(f) && s)
          return r?.debug(`Replacing ImpliedParaNode (key: ${f.getKey()}) with ParaNode at targetIndex ${e}`), f.replace(s, !0), l = !0, !0;
        if (me(f) && s) {
          const p = f;
          return r?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && me(f) && s)
        return r?.debug(`Creating new block node after existing ParaNode (marker: ${f.getMarker()}) at targetIndex ${e}`), f.insertAfter(s), l = !0, !0;
    } else if (A(f)) {
      const d = f.getChildren();
      for (const p of d) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
    }
    return l;
  }
  return u(Ce()), l || r?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function L1(e) {
  const { style: t, code: n } = e;
  if (!t || t !== Ho || !n || !Pn.isValidBookCode(n))
    return;
  const r = pt(e, JE);
  return jb(n, r);
}
function Ex(e, t) {
  const { style: n } = e;
  if (!n)
    return;
  const r = pt(e, GE), i = Ks(n, r);
  if (!as(t))
    return i;
  if (t.markerMode === "editable")
    i.append(Lt(n), zi());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ve(n) + q;
    i.append(t.hasGutterParaMarkers ? P0(s) : Br("marker", s));
  }
  return i;
}
function q1(e, t) {
  if (!e)
    return;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e;
  if (!n)
    return;
  const o = pt(e, YE);
  let a;
  if (t.markerMode === "editable")
    a = kb(n, r, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Nd(n, c, r, i, s, o);
  }
  return a;
}
function D1(e, t) {
  if (!e)
    return;
  const { style: n, number: r, sid: i, altnumber: s, pubnumber: o } = e;
  if (!r)
    return;
  const a = pt(e, XE);
  let c;
  if (t.markerMode === "editable") {
    if (!n)
      return;
    const l = jn(n, r);
    c = lb(r, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Qd(r, l, i, s, o, a);
  }
  return c;
}
function K1(e) {
  if (!e)
    return;
  const { style: t, sid: n, eid: r, attributeOrder: i } = e;
  if (!t)
    return;
  const s = pt(e, QE);
  return Hy(t, n, r, s, i);
}
function Ax(e, t, n) {
  const r = e.insert;
  if (!r.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = r.note;
  if (!i || s == null)
    return;
  const c = pt(r.note, ZE), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const d = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (ci(h.attributes)) {
        const g = ro(h.attributes.char, t, Le(h.insert), void 0, Nx(h.attributes.char, d), !1, t.markerMode === "editable");
        d.push(...g);
      } else
        d.push(Le(h.insert));
  return ux(i, s, d, t, n, f, l).setCategory(o).setUnknownAttributes(c);
}
function Px(e, t, n, r) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = pt(i, eA), l = bd(s, o, c), u = a?.ops ?? [];
  u.length > 0 && U1(u, t, n, r).forEach((p) => l.append(p));
  const f = e.attributes?.segment;
  return typeof f == "string" && Gt(l, oi, () => f), l;
}
function U1(e, t, n, r) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (ci(s.attributes)) {
        const o = Le(s.insert), a = ro(s.attributes.char, t, o, void 0, Nx(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Le(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Zr("unknown", s)) {
        const o = Px(s, t, n, r);
        o && i.push(o);
        continue;
      }
      if (Zr("note", s)) {
        const o = Ax(s, t, n);
        o && i.push(o);
        continue;
      }
      r?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function B1(e, t) {
  if (!e)
    return;
  const { marker: n } = e;
  if (!n)
    return;
  const r = Dd(n);
  return t.markerMode === "editable" && r.setMode("normal"), r;
}
function Nx(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function af(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function ro(e, t, n, r, i, s = !1, o = !1) {
  v(n) && n.getTextContentSize() === 0 && n.setTextContent(Ot);
  const a = () => {
    o && v(n) && n.getTextContent() !== Ot && n.setTextContent(q + n.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(af), l = c[0], u = i?.[i.length - 1];
    if (K(u) && Fi(l, u)) {
      if (c.length > 1) {
        const d = ro(c.slice(1), t, n, void 0, void 0, !0, o);
        iu(u, d);
      } else
        n && iu(u, [n]);
      return [];
    }
    a();
    const f = c.reduceRight((d, p, h) => {
      const g = Ur(p.style, pt(p, mc));
      return typeof p.cid == "string" && Gt(g, Bi, () => p.cid), r && h === c.length - 1 && Gt(g, oi, () => r), d && (K(d) && (ou(d.getMarker(), d, t, !0), su(d, d, t, !0)), g.append(d)), g;
    }, n);
    return ou(l.style, f, t, s), su(f, f, t, s), [f];
  } else {
    const c = af(e), l = i?.[i.length - 1];
    if (K(l) && Fi(c, l))
      return n && iu(l, [n]), [];
    a();
    const u = Ur(c.style, pt(c, mc));
    return typeof c.cid == "string" && Gt(u, Bi, () => c.cid), r && Gt(u, oi, () => r), n && u.append(n), ou(c.style, u, t, s), su(u, u, t, s), [u];
  }
}
function iu(e, t) {
  const n = e.getLastChild();
  N(n) && n.getMarkerSyntax() === "closing" || qt(n) && n.getTextType() === "marker" && n.getTextContent() === ot(e.getMarker(), K(e.getParent())) ? t.forEach((i) => n.insertBefore(i)) : e.append(...t);
}
function su(e, t, n, r = !1) {
  e.getUnknownAttributes()?.closed !== "false" && F1(e.getMarker(), t, n, !1, r);
}
function ou(e, t, n, r = !1) {
  let i;
  if (n?.markerMode === "editable" ? i = Lt(e, "opening", r) : n?.markerMode === "visible" && (i = Br("marker", Ve(e, r))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function F1(e, t, n, r = !1, i = !1) {
  let s;
  n?.markerMode === "editable" ? r ? s = Lt("", "selfClosing") : s = Lt(e, "closing", i) : n?.markerMode === "visible" && (s = Br("marker", r ? ot("") : ot(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function z1(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Cp(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function ci(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function j1(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Un(e, t) {
  if (e)
    for (const n of Object.keys(e)) {
      if (n === "segment" && typeof e[n] == "string") {
        const r = e[n];
        Gt(t, oi, () => r);
        continue;
      }
      if (V1(n)) {
        const r = !!e[n], i = n, s = t.hasFormat(i);
        (r && !s || !r && s) && t.toggleFormat(i);
      }
    }
}
const wx = [
  "bold",
  "underline",
  "strikethrough",
  "italic",
  "highlight",
  "code",
  "subscript",
  "superscript",
  "lowercase",
  "uppercase",
  "capitalize"
];
function V1(e) {
  return wx.includes(e);
}
function W1() {
  const [e] = ve();
  return G(() => {
    const t = (n) => n instanceof KeyboardEvent && !H1(n) || !dl() ? !1 : (n instanceof Event && n.preventDefault(), !0);
    return tt(
      e.registerCommand(Mr, t, Ge),
      e.registerCommand(la, t, Ge),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(er, t, He),
      e.registerCommand(ir, t, He),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(nd, (n) => {
        if (!(n instanceof Event) || !(n.target instanceof Node))
          return !1;
        const r = Zi(n.target);
        return !r || !li(r) ? !1 : (n.preventDefault(), !0);
      }, Ge),
      e.registerCommand(jc, t, Ge),
      e.registerCommand(Zf, t, Ge),
      e.registerCommand(tc, t, Ge)
    );
  }, [e]), null;
}
function H1(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function li(e) {
  return Ze(e, Sp) ?? void 0;
}
function Sp(e) {
  return et(e) || Cb(e);
}
function dl() {
  const e = w();
  return E(e) ? li(e.anchor.getNode()) !== void 0 || li(e.focus.getNode()) !== void 0 : !1;
}
function G1(e, t, n) {
  if (e.height === 0)
    return !1;
  const r = e.height / 4;
  return t.some((i) => n === "down" ? i.top >= e.bottom - r : i.bottom <= e.top + r);
}
function J1(e, t) {
  if (typeof window > "u")
    return !1;
  const n = window.getSelection();
  if (!n || n.rangeCount === 0)
    return !1;
  const r = e.getRootElement();
  if (!r)
    return !1;
  try {
    const i = n.getRangeAt(0);
    if (!r.contains(i.startContainer))
      return !1;
    const s = i.getBoundingClientRect(), o = i.cloneRange();
    o.collapse(!0);
    const a = Array.from(r.querySelectorAll('[data-marker="v"]'));
    let c, l;
    for (const f of a) {
      const d = document.createRange();
      if (d.selectNode(f), o.compareBoundaryPoints(Range.START_TO_START, d) > 0)
        c = f;
      else {
        l = f;
        break;
      }
    }
    if (!c)
      return !1;
    const u = document.createRange();
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(r, r.childNodes.length), G1(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function Y1(e, t, n, r) {
  if (!uN(t) || J1(e, n))
    return !1;
  const i = n === "up" ? HE(t) : WE(t);
  return i && r.preventDefault(), i;
}
function X1({ viewOptions: e }) {
  const [t] = ve();
  return Q1(t, e), null;
}
function Q1(e, t) {
  G(() => {
    if (!e.hasNodes([Dn, Jt, Je]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const n = (r) => {
      const i = w();
      if (!E(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (r.key === "ArrowLeft" || r.key === "ArrowRight") && r.shiftKey && !r.altKey && !r.ctrlKey && !r.metaKey) {
        const u = Dg(o), f = sN(i, Kg(u, r.key) ? "next" : "previous");
        return f && r.preventDefault(), f;
      }
      if (!i.isCollapsed())
        return !1;
      if (r.key === "ArrowUp" || r.key === "ArrowDown") {
        if (r.shiftKey || r.altKey || r.ctrlKey || r.metaKey)
          return !1;
        const u = r.key === "ArrowUp" ? "up" : "down";
        return Y1(e, i, u, r);
      }
      if (r.key !== "ArrowLeft" && r.key !== "ArrowRight" || !o)
        return !1;
      const a = Dg(o), c = r.shiftKey || r.altKey || r.ctrlKey || r.metaKey;
      let l = !1;
      return Kg(a, r.key) ? l = !c && Fg(i, "next") || !c && eN(i) || cN(i) || !c && s && Bg(i, "next") : Z1(a, r.key) && (l = !c && Fg(i, "previous") || !c && tN(i) || lN(i, t) || !c && s && Bg(i, "previous")), l && r.preventDefault(), l;
    };
    return e.registerCommand(Mr, n, Ge);
  }, [e, t]);
}
function Dg(e) {
  return e.dir || "ltr";
}
function Kg(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function Z1(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function cf(e) {
  if (!K(e) || e.getMarker() !== "fp")
    return;
  const t = Nn(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function eN(e) {
  const t = cf($d(e));
  if (!t)
    return !1;
  const n = e.anchor;
  return n.type === "text" && n.offset !== n.getNode().getTextContentSize() ? !1 : (or(t, 0), !0);
}
function tN(e) {
  const t = e.anchor, n = t.getNode();
  if (t.type === "text") {
    const r = cf(n.getParent());
    return !r || !n.is(r.getFirstChild()) ? !1 : t.offset === 1 ? (n.select(0, 0), !0) : t.offset !== 0 ? !1 : Ug(r);
  }
  if (t.offset === 0) {
    const r = cf(n);
    return r ? Ug(r) : !1;
  }
  return !1;
}
function Ug(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (v(t))
    return t.select(), !0;
  if (A(t)) {
    const i = t.getLastDescendant();
    return v(i) ? i.select() : t.selectEnd(), !0;
  }
  const n = e.getParent();
  if (!n)
    return !1;
  const r = e.getIndexWithinParent();
  return n.select(r, r), !0;
}
const xc = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function nN(e) {
  if (xc)
    for (const { segment: n } of xc.segment(e))
      return n.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function rN(e) {
  if (xc) {
    let r = 0;
    for (const { index: i } of xc.segment(e))
      r = i;
    return r;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), n = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (n ? 2 : 1));
}
function Ox(e) {
  for (let t = e; t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t;
}
function $x(e) {
  return !!e && N(e) && li(e) !== void 0;
}
function Vs(e) {
  return v(e) && !e.isToken() && !$x(e) && e.getTextContentSize() > 0;
}
function Rx(e) {
  return Qi(e) ? !0 : L(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || $x(e)) && e.getTextContentSize() > 0 : xn(e) ? !Ue(e) : !1;
}
function Ws(e, t, n) {
  for (let r = e; r && !r.is(n); ) {
    const i = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (i)
      return i;
    r = r.getParent();
  }
}
function pl(e, t, n) {
  for (let r = e; r; ) {
    if (Rx(r))
      return r;
    if (A(r)) {
      r = (t === "next" ? r.getFirstChild() : r.getLastChild()) ?? Ws(r, t, n);
      continue;
    }
    if (Vs(r))
      return r;
    r = Ws(r, t, n);
  }
}
function _p(e, t, n, r, i) {
  return n === "element" && A(e) ? e.getChildAtIndex(r === "next" ? t : t - 1) ?? Ws(e, r, i) : n === "text" && Rx(e) && (r === "next" ? t < e.getTextContentSize() : t > 0) ? e : Ws(e, r, i);
}
function au(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const n = _p(e.node, e.offset, e.kind, "previous", t), r = pl(n, "previous", t);
  if (!r)
    return e;
  if (Vs(r))
    return { kind: "text", node: r, offset: r.getTextContentSize() };
  const i = r.getParent();
  return i ? { kind: "element", node: i, offset: r.getIndexWithinParent() + 1 } : e;
}
function iN(e, t) {
  const n = e.getNode(), r = Ox(n);
  if (!r)
    return;
  if (e.type === "text" && Vs(n)) {
    if (t === "next" && e.offset < n.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return au({ kind: "text", node: n, offset: 0 }, r);
  }
  const i = _p(n, e.offset, e.type, t, r), s = pl(i, t, r);
  if (!s)
    return;
  if (Vs(s)) {
    const c = s.getTextContent(), l = t === "next" ? nN(c) : rN(c);
    return au({ kind: "text", node: s, offset: l }, r);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return au({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, r);
}
function Ix(e, t, n) {
  const r = n === "collapse" ? e.anchor : e.focus, i = iN(r, t);
  return !i || i.node.is(r.getNode()) && i.offset === r.offset && i.kind === r.type ? !1 : n === "collapse" ? (i.kind === "element" && A(i.node) ? xp(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Bg(e, t) {
  return Ix(e, t, "collapse");
}
function sN(e, t) {
  return Ix(e, t, "extend");
}
function oN(e, t, n) {
  const r = e.getNode();
  if (e.type === "text" && Vs(r) && (t === "next" ? e.offset < r.getTextContentSize() : e.offset > 0))
    return !1;
  const i = _p(r, e.offset, e.type, t, n);
  return pl(i, t, n) === void 0;
}
function aN(e, t) {
  const n = Ce();
  for (let r = e; r; ) {
    const i = Ws(r, t, n), s = i && pl(i, t, n);
    if (!s)
      return;
    if (r = li(s), !r)
      return s;
  }
}
function Fg(e, t) {
  const n = e.anchor, r = n.getNode();
  if (li(r))
    return !1;
  const i = Ox(r);
  if (!i || !oN(n, t, i))
    return !1;
  const s = Ws(i, t, Ce()), o = s && li(s);
  if (!o)
    return !1;
  const a = aN(o, t);
  if (!a)
    return !0;
  if (Vs(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function zg(e) {
  const t = e.getParent();
  if (!t)
    return;
  const n = e.getIndexWithinParent() + 1;
  xp(t, n);
}
function cN(e) {
  const t = e.anchor.getNode(), n = $d(e);
  if (L(n) && !N(n.getFirstChild())) {
    if (mt(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (n.getIsCollapsed()) {
      if (n.is(n.getParent()?.getLastChild())) {
        const i = n.getParent()?.getNextSibling();
        return i && !(vt(i) && cs(i)) && i.selectStart(), !0;
      }
    } else return qt(n.getFirstChild()) ? n.select(2, 2) : n.select(1, 1), !0;
  }
  if (mt(t) && L(n) && n.getIsCollapsed()) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : zg(n), !0;
  }
  const r = n?.getParent();
  if (qt(n) && L(r) && n.is(r?.getLastChild())) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : r.getIsCollapsed() ? zg(r) : r.selectEnd(), !0;
  }
  return !1;
}
function lN(e, t) {
  const n = Jb(e);
  if (Gr(n) && !n.getPreviousSibling())
    return !0;
  const { anchor: r } = e;
  if ((r.type === "element" || r.offset === 0) && js(n))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (we(o) && !n)
    return !0;
  if (L(n) && n.getIsCollapsed()) {
    const c = n.getPreviousSibling();
    if (!pr(c) && !we(n.getParent()))
      return !1;
    const l = n.getParent();
    if (!l)
      return !1;
    const u = n.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (mt(n) && t?.noteMode === "collapsed") {
    const c = n.getLastChild();
    if (!c)
      return !1;
    const l = Ze(c, (u) => L(u));
    if (L(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const f = l.getIndexWithinParent();
      return u.select(f, f), !0;
    }
  }
  const a = Nn(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (At(n)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function uN(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Ae(t) && xn(t);
}
function fN() {
  const [e] = ve();
  return dN(e), null;
}
function dN(e) {
  G(() => {
    if (!e.hasNodes([ze]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return tt(
      e.registerNodeTransform(ze, gN),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ze, x0),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ze, Nb),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ze, (t) => Jo(Fr("char"), t)),
      e.registerNodeTransform(st, mN)
    );
  }, [e]);
}
function Ja(e) {
  return e.getChildren().some(N);
}
function pN(e, t) {
  const n = t.getFirstChild();
  if (!N(n) || n.getMarkerSyntax() !== "opening")
    return !1;
  const r = n.getNextSibling();
  if (Wr(r)) {
    const i = r.getTextContent();
    i.startsWith(q) && (i === q ? r.remove() : r.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function hN(e, t) {
  const n = t.getLastChild(), r = e.getChildren();
  N(n) && n.getMarkerSyntax() === "closing" ? r.forEach((i) => n.insertBefore(i)) : t.append(...r), e.remove();
}
function gN(e) {
  if (!K(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Ja(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const n = de(e, Bi), r = e.getUnknownAttributes(), i = e.getNextSibling();
  if (K(i) && Fi({ style: t, cid: n }, i) && Xn(r, i.getUnknownAttributes()))
    if (Ja(i)) {
      if (pN(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  K(s) && Fi({ style: t, cid: n }, s) && Xn(r, s.getUnknownAttributes()) && (Ja(s) ? hN(e, s) : (s.append(...e.getChildren()), e.remove()));
}
const Lx = /* @__PURE__ */ new WeakSet();
function mN(e) {
  const t = e.getParent();
  if (!K(t) || Ja(t) || Lx.has(e))
    return;
  const n = e.getTextContent();
  if (n.length < 2 || !n.includes(Ot))
    return;
  const r = bN(t.getKey());
  if (r === void 0) {
    t.getChildrenSize() === 1 && n.startsWith(Ot) && jg(e, 0);
    return;
  }
  if (r !== e.getKey())
    return;
  const i = yN(e, n);
  i !== void 0 && jg(e, i);
}
function yN(e, t) {
  const n = w();
  if (E(n) && n.isCollapsed() && n.anchor.key === e.getKey()) {
    const { offset: r } = n.anchor;
    if (r === t.length && t.startsWith(Ot))
      return 0;
    if (t[r] === Ot)
      return r;
  }
  if (t.startsWith(Ot))
    return 0;
  if (t.endsWith(Ot))
    return t.length - 1;
}
function jg(e, t) {
  const n = w(), r = E(n) ? [n.anchor, n.focus].filter((a) => a.type === "text" && a.key === e.getKey()) : [], i = r.map((a) => a.offset), s = e.getTextContent(), o = e.setTextContent(s.slice(0, t) + s.slice(t + 1));
  Lx.add(o), r.forEach((a, c) => {
    const l = i[c];
    a.set(o.getKey(), l > t ? l - 1 : l, "text");
  });
}
function bN(e) {
  return It().getEditorState().read(() => {
    const t = Q(e);
    if (!K(t))
      return;
    const n = t.getChildren().filter((i) => !xn(i)), [r] = n;
    return n.length === 1 && v(r) && r.getTextContent() === Ot ? r.getKey() : null;
  });
}
function qx(e) {
  return e.replaceAll("	", " ");
}
function Dx() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function Kx(e) {
  const t = () => !Dx();
  return tt(e.registerCommand(qs, t, Qt), e.registerCommand(ir, t, Qt));
}
const Mp = (e) => {
  e.dispatchCommand(qs, null);
}, Ep = (e) => {
  e.dispatchCommand(ir, null);
}, Ap = (e) => {
  navigator.clipboard.read().then(async (t) => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), i = t[0];
    for (const o of i.types) {
      const a = await (await i.getType(o)).text();
      r.setData(o, qx(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(er, s);
  });
}, Pp = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const n = new DataTransfer(), r = await navigator.clipboard.readText();
    n.setData("text/plain", qx(r));
    const i = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(er, i);
  });
};
function kN() {
  const [e] = ve();
  return G(() => {
    const t = (n) => {
      const { key: r, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = n;
      !(Ds ? s : o) || a || (!i && r.toLowerCase() === "c" ? (n.preventDefault(), Mp(e)) : !i && r.toLowerCase() === "x" ? (n.preventDefault(), Ep(e)) : r.toLowerCase() === "v" && (n.preventDefault(), i ? Pp(e) : Ap(e)));
    };
    return tt(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Kx(e),
      e.registerRootListener((n, r) => {
        r !== null && r.removeEventListener("keydown", t), n !== null && n.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function xN({ logger: e }) {
  const [t] = ve();
  return G(() => tt(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Mr, (n) => n.key !== "\\" && n.key !== "/" ? !1 : (n.preventDefault(), !0), Tr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(er, (n) => {
      const r = n.clipboardData?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, Tr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(nd, (n) => {
      const r = n.dataTransfer?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, Tr)
  ), [t, e]), null;
}
const Tc = "editor-context-menu";
function lf(e) {
  return `${Tc}-item-${e}`;
}
const TN = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function vN({ index: e, isSelected: t, onClick: n, onMouseMove: r, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), P("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: lf(e), onMouseMove: r, onClick: i.isDisabled ? void 0 : n, children: P("span", { className: "text", children: i.title }) });
}
function CN({ options: e, selectedItemIndex: t, onOptionClick: n, onOptionMouseMove: r }) {
  return P("div", { className: "typeahead-popover", children: P("ul", { id: Tc, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => P(vN, { index: s, isSelected: t === s, onClick: () => n(i, s), onMouseMove: () => r(s), option: i }, `${s}-${i.title}`)) }) });
}
let SN = 0;
class go {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, n) {
    this.key = `context-menu-option-${SN++}`, this.title = t, this.onSelect = n.onSelect.bind(this), this.isDisabled = n.isDisabled || !1;
  }
}
function _N({ options: e } = {}) {
  const [t] = ve(), [n, r] = Ne(() => !t.isEditable()), [i, s] = Ne({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = Ne(void 0), c = ut(() => {
    const d = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new go("Cut", {
        onSelect: () => {
          Ep(t);
        },
        isDisabled: n
      }),
      new go("Copy", {
        onSelect: () => {
          Mp(t);
        }
      }),
      new go("Paste", {
        onSelect: () => {
          Ap(t);
        },
        isDisabled: n
      }),
      new go("Paste as Plain Text", {
        onSelect: () => {
          Pp(t);
        },
        isDisabled: n
      })
    ], p = (e ?? []).map((h) => new go(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...d, ...p];
  }, [t, n, e]), l = ne(null), u = ne(null), f = Me(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  return G(() => Kx(t), [t]), G(() => {
    const d = (p) => {
      const h = p.target;
      t.getRootElement() === h || Fb(h) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, h) => {
      h?.removeEventListener("contextmenu", d), p && p.addEventListener("contextmenu", d);
    });
  }, [t]), G(() => {
    if (!i.isOpen)
      return;
    const d = (p) => {
      const h = p.target;
      h instanceof Node && l.current?.contains(h) || f();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, f]), G(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      f();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, f]), G(() => {
    if (!i.isOpen)
      return;
    const d = (p) => {
      if (p.isComposing || p.keyCode === 229)
        return;
      if (p.key === "Escape") {
        p.preventDefault(), f();
        return;
      }
      const h = document.activeElement;
      if (!(h && h !== document.body && h !== u.current && !t.getRootElement()?.contains(h) && !l.current?.contains(h)))
        if (p.key === "ArrowDown")
          p.preventDefault(), p.stopPropagation(), a((g) => g === void 0 ? 0 : (g + 1) % c.length);
        else if (p.key === "ArrowUp")
          p.preventDefault(), p.stopPropagation(), a((g) => g === void 0 ? c.length - 1 : (g - 1 + c.length) % c.length);
        else if (p.key === "Enter") {
          p.preventDefault(), p.stopPropagation();
          const g = o === void 0 ? void 0 : c[o];
          g && !g.isDisabled && (t.update(() => {
            g.onSelect();
          }), f());
        } else {
          if (TN.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", d, !0), () => document.removeEventListener("keydown", d, !0);
  }, [i.isOpen, f, c, o, t]), G(() => {
    if (!i.isOpen)
      return;
    const d = t.getRootElement();
    if (d)
      return d.setAttribute("aria-controls", Tc), () => {
        d.removeAttribute("aria-controls"), d.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), G(() => {
    if (!i.isOpen)
      return;
    const d = t.getRootElement();
    if (!d)
      return;
    if (o === void 0) {
      d.removeAttribute("aria-activedescendant");
      return;
    }
    d.setAttribute("aria-activedescendant", lf(o));
    const p = document.getElementById(Tc), h = document.getElementById(lf(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), m = h.getBoundingClientRect(), y = m.top - g.top + p.scrollTop, k = m.bottom - g.top + p.scrollTop;
    y < p.scrollTop ? p.scrollTop = y : k > p.scrollTop + p.clientHeight && (p.scrollTop = k - p.clientHeight);
  }, [t, i.isOpen, o]), G(() => t.registerEditableListener((d) => {
    r(!d);
  }), [t]), Ys(() => {
    const d = l.current;
    if (!d)
      return;
    const { width: p, height: h } = d.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    d.style.left = `${g}px`, d.style.top = `${m}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? zS.createPortal(P("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: P(CN, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), f());
  }, onOptionMouseMove: (d) => {
    a((p) => p === d ? p : d);
  } }) }), document.body) : null;
}
function MN(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function EN(e) {
  if (!SS(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function AN(e) {
  return At(e);
}
function cu(e, t, n) {
  const r = Zi(t.node);
  if (!xn(r) || AN(r))
    return;
  const i = e.getElementByKey(r.getKey());
  if (!i || i === t.node || !i.contains(t.node))
    return;
  const s = i.parentNode;
  if (!s)
    return;
  const o = Array.prototype.indexOf.call(s.childNodes, i);
  if (!(o < 0))
    return { node: s, offset: n === "before" ? o : o + 1 };
}
function PN(e, t) {
  if (w())
    return !1;
  const n = e.getRootElement(), r = CS(n?.ownerDocument.defaultView ?? null);
  if (!r || r.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = r;
  if (!i || !o || !_y(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, f;
  if (r.isCollapsed)
    u = cu(e, c, EN(c)), f = u;
  else {
    const m = MN(r.getRangeAt(0), c);
    u = cu(e, c, m ? "before" : "after"), f = cu(e, l, m ? "after" : "before");
  }
  if (!u && !f)
    return !1;
  const d = u ?? c, p = f ?? l, h = {
    anchorNode: d.node,
    anchorOffset: d.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = My(h, e);
  return g ? (Fn(g), g.dirty = !t, t) : !1;
}
function NN() {
  const [e] = ve(), t = ne(!1), n = ne(!1);
  return G(() => {
    const r = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, n.current && (n.current = !1, e.update(() => {
        const s = w();
        E(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", r, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, n.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", r, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), G(() => e.registerCommand(yn, () => (PN(e, t.current) && (n.current = !0), !1), He), [e]), null;
}
function wN() {
  const [e] = ve();
  return G(() => e.registerCommand(Mr, (t) => {
    const { key: n, shiftKey: r, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ds ? i : s) || o)
      return !1;
    const a = n.toLowerCase();
    return !(a === "z" && !r) && !(a === "y" || a === "z" && r) ? !1 : (t.preventDefault(), !0);
  }, He), [e]), null;
}
function ON({ isEditable: e }) {
  const [t] = ve();
  return Ys(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Vg(e) {
  return !!e && ga(Q(e));
}
function Np(e) {
  const [t] = ve(), n = ne(void 0), r = Me((i) => {
    let s = !1;
    const o = w(), a = E(o) && o.isCollapsed() ? o.anchor.key : void 0, c = n.current, l = Vg(c);
    c && !l && (n.current = void 0);
    let u;
    if (i) {
      const f = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, p = ma(f, d), h = ga(p) ? p : void 0;
      if (h)
        n.current = h.getKey(), u = h.getKey();
      else {
        const g = hM();
        i.insertAfter(g), n.current = g.getKey(), u = g.getKey(), s = !0;
      }
      or(f, d);
    }
    if (c && l && c !== a && c !== u) {
      const f = Q(c);
      v(f) && (f.remove(), s = !0), n.current === c && (n.current = void 0);
    }
    return s;
  }, []);
  return G(() => {
    const i = () => {
      const a = e(), c = w(), l = E(c) && c.isCollapsed() ? c.anchor.key : void 0, u = n.current;
      (a || u && u !== l) && r(a) && Wt(Oi);
    }, s = (a) => {
      if (a.getKey() !== n.current)
        return;
      const c = a.getTextContent();
      if (rs(c) || !c.includes(Us))
        return;
      const l = w(), u = E(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (gM(a), n.current = void 0, u !== void 0) {
        const f = c.slice(0, u).split(Us).length - 1, d = Math.max(0, u - f);
        a.select(d, d);
      }
    }, o = tt(t.registerCommand(yn, () => (i(), !1), qi), t.registerCommand(rd, () => {
      const a = n.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Vg(a);
      }), c && t.update(() => {
        const l = Q(a);
        v(l) && (l.remove(), Wt(Oi));
      }), n.current = void 0, !1;
    }, qi), t.registerNodeTransform(st, s));
    return () => {
      o(), n.current = void 0;
    };
  }, [t, e, r]), r;
}
function $N() {
  const e = w();
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, n = t.getNode(), r = L(n) ? n : n.getParent();
  if (!L(r))
    return;
  const i = OP(r);
  if (i === void 0)
    return;
  let s = r.getChildAtIndex(i - 1);
  for (; s && ga(s); )
    s = s.getPreviousSibling();
  if (!s || v(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (n.is(r))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (n.is(s))
    return v(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = n.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function RN() {
  return Np($N), null;
}
function Ux(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function So(e, ...t) {
  const n = e.registerUpdateListener(({ tags: r }) => {
    n();
    for (const i of t)
      r.delete(i);
  });
  return n;
}
function lu(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !n?.anchorNode || !t.contains(n.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = w();
    if (!E(i))
      return !1;
    const s = My(n, e);
    return !!s && i.is(s);
  }, { editor: e }) || n.removeAllRanges();
}
function Cs(e, t) {
  let n;
  try {
    n = It();
  } catch {
  }
  return n === e ? t() : e.read(t);
}
function IN() {
  const e = w();
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const n = t.getNode();
  if (!A(n))
    return;
  const r = n.getChildren(), i = r[t.offset - 1];
  if (!Ae(i) || ma(n, t.offset))
    return;
  const s = r[t.offset];
  if (s === void 0 || Ae(s))
    return i;
}
function LN() {
  return Np(IN), null;
}
function qN({ scripture: e, scriptureRef: t, nodeOptions: n, editorAdaptor: r, viewOptions: i, logger: s }) {
  const [o] = ve();
  return G(() => {
    r.initialize?.(n, s);
  }, [r, s, n]), G(() => {
    const a = t?.current ?? e;
    r.reset?.();
    const c = r.serializeEditorState(a, i);
    if (c == null) {
      s?.warn("LoadStatePlugin: serializedEditorState was null or undefined. Skipping editor update.");
      return;
    }
    try {
      const l = o.parseEditorState(c);
      queueMicrotask(() => {
        const u = Ux(o);
        o.update(() => {
          u || Wt(Or), o.setEditorState(l), o.dispatchCommand(_S, void 0);
        }, { tag: ua });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, r, s, e, t, i]), null;
}
const uu = "caller_highlight", DN = pi(function(t, n) {
  const [r] = ve(), i = ne(void 0), s = ne(void 0), o = Me(() => {
    const a = i.current, c = a === void 0 ? void 0 : r.getEditorState().read(() => {
      const u = xr(a);
      return u ? (u.getChildren().find(At) ?? Et(u))?.getKey() : void 0;
    }), l = c ? r.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(uu), l?.classList.add(uu), s.current = l;
  }, [r]);
  return Kc(n, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Cs(r, () => xr(a)?.getKey()), o();
    }
  }), [r, o]), G(() => tt(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    r.registerMutationListener(Je, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const f = l.has(ua) ? void 0 : c.read(() => sp(u)), d = f === void 0 ? void 0 : r.getEditorState().read(() => xr(f)?.getKey());
      i.current = d !== void 0 && a.get(d) === "created" ? d : void 0;
    }, { skipInitialization: !0 }),
    r.registerUpdateListener(() => o())
  ), [r, o]), G(() => () => s.current?.classList.remove(uu), []), null;
});
function KN({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: n, logger: r }) {
  const [i] = ve();
  return UN(t, r), BN(i, e, n, r), null;
}
function UN(e, t) {
  const n = ne(void 0), r = ne(void 0), i = e.noteCallers, s = e.crossRefCallers;
  G(() => {
    let o = i;
    (!o || o.length <= 0) && (o = OA), n.current !== o && (n.current = o, Wg("note-callers", o, t));
  }, [t, i]), G(() => {
    let o = s;
    (!o || o.length <= 0) && (o = $A), r.current !== o && (r.current = o, Wg("cross-ref-callers", o, t));
  }, [t, s]);
}
function BN(e, t, n, r) {
  G(() => {
    if (!e.hasNodes([ze, Je, En]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => JN(s));
    return tt(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Je, (s) => FN(s, n)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ze, jN),
      e.registerNodeTransform(st, VN),
      // Ensure a separator after the caller.
      e.registerNodeTransform(En, WN),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(En, (s, { prevEditorState: o }) => HN(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(yn, () => GN(e, t, n, r), Qt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, r, n]);
}
function FN(e, t) {
  const n = e.getChildren();
  if (!n.some((i) => At(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), n.length > 0) {
    const i = n[0];
    v(i) && !N(i) && i.getTextContent() !== Mt(e.getCaller()) && e.insertBefore(i);
  }
}
function Bx(e) {
  const t = e.getNextSibling();
  Tn(t) || (v(t) && !N(t) && t.getTextContent() === q ? t.replace(zi()) : e.insertAfter(zi()));
}
function zN(e) {
  const t = e.getTextContent(), n = t.indexOf(q), r = n < 0 ? t : t.slice(0, n) + t.slice(n + 1);
  if (e.setTextContent(q), !r) {
    e.selectEnd();
    return;
  }
  const i = Le(r);
  e.insertAfter(i), i.selectEnd();
}
function jN(e) {
  const t = e.getParentOrThrow(), n = t.getChildren(), r = n.find((s) => At(s));
  if (!K(e) || !L(t) || !r)
    return;
  const i = Rd(n);
  r.getPreviewText() !== i && r.setPreviewText(i), Bx(e);
}
function VN(e) {
  const t = Nn(e), n = t?.getChildren(), r = n?.find((o) => At(o));
  if (!v(e) || !L(t) || !r || !n)
    return;
  const i = e.getParent();
  if (L(i) && Tn(e) && e.getTextContent() !== q && zN(e), K(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Ot) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Rd(n);
  r.getPreviewText() !== s && r.setPreviewText(s);
}
function WN(e) {
  At(e) && Bx(e);
}
function HN(e, t) {
  for (const [n, r] of e) {
    if (r !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = Q(n), a = o?.getParent();
      return At(o) && L(a) && a.getCaller() === Bo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function GN(e, t, n, r) {
  if (n?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Ze(o, (c) => L(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = Q(t.current);
      c && !c.getIsCollapsed() && (r?.debug("Cursor moved away from NoteNode, collapsing it"), mo(e, t.current, r)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (L(a)) {
      r?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, mo(e, c, r);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (L(a)) {
      r?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, mo(e, c, r);
    } else if (!a) {
      const c = Ze(o, (l) => L(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      mt(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        r?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, mo(e, l, r);
      }
    }
  }
  if (vt(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (pr(c) && L(a)) {
      r?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, mo(e, l, r);
    }
  }
  return !1;
}
function mo(e, t, n) {
  const r = Q(t);
  try {
    r?.toggleIsCollapsed();
  } catch (i) {
    if (i instanceof Error && i.message.includes("read only"))
      n?.warn("Fallback triggered after stabilization - edge case"), setTimeout(() => {
        e.update(() => {
          r?.toggleIsCollapsed();
        });
      }, 0);
    else
      throw i;
  }
}
function JN(e) {
  const t = w();
  if (!E(t))
    return;
  const n = t.anchor, r = t.focus, i = n.getNode(), s = r.getNode();
  if (L(i) && v(s)) {
    e.preventDefault();
    const o = Kr();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), r.offset, "text"), Fn(o);
  }
}
function Wg(e, t, n) {
  for (const r of document.styleSheets)
    try {
      const i = r.cssRules || r.rules;
      for (const s of i)
        if (YN(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  n?.warn(`Editor: counter style "${e}" not found.`);
}
function YN(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function tr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const r of e.getChildren()) {
    if (!N(r) || r.getMarkerSyntax() !== "opening")
      break;
    t.push(r);
  }
  const n = Et(e);
  return n && t.push(n), t.length > 0 && t.every((r) => v(r) && r.getMode() === "token") ? t : [];
}
function XN(e) {
  const t = e.getParent();
  if (L(t))
    return tr(t).some((n) => n.is(e)) ? t : void 0;
}
function ka(e) {
  const t = tr(e), n = t[t.length - 1];
  return n ? n.getIndexWithinParent() + 1 : 0;
}
function _o(e) {
  if (e.getIsCollapsed() !== !1)
    return;
  const t = e.getLastChild();
  return N(t) && t.getMarkerSyntax() === "closing" && t.getMode() === "token" ? t : void 0;
}
function Fx(e) {
  const t = e.getNode();
  if (e.type === "text") {
    const r = t.getParent();
    if (L(r) && _o(r)?.is(t))
      return e.offset > 0 ? r : void 0;
    if (e.offset !== 0)
      return;
    const i = t.getPreviousSibling();
    return L(i) && _o(i) ? i : void 0;
  }
  if (L(t)) {
    const r = _o(t);
    return r && e.offset > r.getIndexWithinParent() ? t : void 0;
  }
  if (!A(t) || e.offset === 0)
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return L(n) && _o(n) ? n : void 0;
}
function zx(e) {
  const t = e.getNode(), n = (i) => L(i) && tr(i).length > 0;
  if (e.type === "text") {
    if (e.offset !== t.getTextContentSize())
      return;
    const i = t.getNextSibling();
    return n(i) ? i : void 0;
  }
  if (n(t))
    return e.offset < ka(t) ? t : void 0;
  if (!A(t))
    return;
  const r = t.getChildAtIndex(e.offset);
  return n(r) ? r : void 0;
}
function jx(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), n = XN(t);
  if (n)
    return QN(n, t, e.offset) ? void 0 : n;
}
function QN(e, t, n) {
  const r = tr(e), i = r[r.length - 1];
  return i !== void 0 && i.is(t) && n === i.getTextContentSize();
}
function ZN(e) {
  const t = tr(e), n = t[t.length - 1];
  v(n) ? n.select(n.getTextContentSize(), n.getTextContentSize()) : or(e, ka(e));
}
function ew() {
  const e = w();
  if (!E(e))
    return !1;
  if (!e.isCollapsed())
    return Wx(e);
  const t = $p(e.anchor) ?? Fx(e.anchor);
  if (t) {
    const r = tw(t);
    return e.anchor.is(r) ? !1 : (Vx(e, r), !0);
  }
  const n = zx(e.anchor) ?? jx(e.anchor);
  return n ? (ZN(n), !0) : !1;
}
function wp(e) {
  const t = tr(e), n = t[t.length - 1];
  return v(n) ? Zt(n.getKey(), n.getTextContentSize(), "text") : Zt(e.getKey(), ka(e), "element");
}
function vc(e) {
  const t = e.getLastChild();
  return N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function uf(e) {
  const t = vc(e);
  if (t === e.getChildrenSize())
    return;
  const n = e.getChildAtIndex(t);
  return v(n) ? n : void 0;
}
function Op(e) {
  const t = vc(e);
  if (t > ka(e)) {
    const n = e.getChildAtIndex(t - 1), r = A(n) ? n.getLastDescendant() : n;
    if (v(r))
      return Zt(r.getKey(), r.getTextContentSize(), "text");
  }
  return wp(e);
}
function tw(e) {
  const t = _o(e);
  return t ? Zt(t.getKey(), 0, "text") : Op(e);
}
function $p(e) {
  const t = e.getNode(), n = t.getParent();
  if (L(n) && tr(n).length > 0 && uf(n)?.is(t))
    return n;
  if (e.type !== "element")
    return;
  if (L(t) && tr(t).length > 0 && uf(t))
    return e.offset > vc(t) || e.offset === vc(t) && e.offset > ka(t) ? t : void 0;
  if (!A(t))
    return;
  const r = t.getChildAtIndex(e.offset - 1);
  return L(r) && tr(r).length > 0 && !r.getNextSibling() ? r : void 0;
}
function Vx(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function ff(e) {
  const t = Nn(e);
  return t && tr(t).length > 0 ? t : void 0;
}
function nw(e) {
  for (const t of [e.anchor, e.focus]) {
    const n = ff(t.getNode()) ?? zx(t) ?? Fx(t) ?? $p(t);
    if (n)
      return n;
  }
  for (const t of e.getNodes()) {
    const n = ff(t);
    if (n)
      return n;
  }
}
function Wx(e) {
  const t = nw(e);
  if (!t)
    return !1;
  const n = wp(t), r = Op(t);
  let i = !1;
  for (const s of [e.anchor, e.focus]) {
    const o = s.isBefore(n) ? n : r.isBefore(s) ? r : void 0;
    !o || s.is(o) || (s.set(o.key, o.offset, o.type), i = !0);
  }
  return i;
}
function Hg(e, t) {
  const n = Kr();
  return n.anchor.set(e.key, e.offset, e.type), n.focus.set(t.key, t.offset, t.type), n.getTextContent();
}
function Gg(e, t) {
  const n = e.getElementByKey(t.key);
  if (!n)
    return;
  const r = n.ownerDocument.createRange(), i = t.type === "text" ? n.firstChild : n;
  if (!i)
    return;
  const s = i.nodeType === 3 ? i.textContent?.length ?? 0 : i.childNodes.length;
  if (r.setStart(i, Math.min(t.offset, s)), r.collapse(!0), typeof r.getClientRects != "function")
    return;
  const [o] = Array.from(r.getClientRects());
  return o?.top;
}
function Jg(e, t, n) {
  const r = Gg(e, t), i = Gg(e, n);
  return r !== void 0 && i !== void 0 && Math.abs(r - i) >= 1;
}
function rw(e) {
  if (e.type === "element") {
    const n = e.getNode();
    return A(n) ? n.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function iw(e, t, n, r) {
  const i = t.anchor, s = $p(i);
  if (s)
    return Vx(t, Op(s)), !0;
  const o = ff(i.getNode());
  if (!o) {
    if (n)
      return !1;
    const f = rw(t.focus);
    return L(f) && tr(f).length > 0;
  }
  if (jx(i))
    return !0;
  const a = wp(o);
  if (n) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const f = Hg(a, i);
    return f === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(f) || r === "line" && Jg(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = uf(o);
  if (!c)
    return !1;
  const l = Zt(c.getKey(), 0, "text"), u = Hg(i, l);
  return u === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(u) || r === "line" && Jg(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function sw() {
  const [e] = ve();
  return G(() => {
    const t = (s) => () => {
      const o = w();
      return !E(o) || o.isCollapsed() || !Wx(o) ? !1 : s && o.isCollapsed();
    }, n = t(!1), r = t(!0), i = (s) => (o) => {
      const a = w();
      return E(a) ? a.isCollapsed() ? iw(e, a, o, s) : r() : !1;
    };
    return tt(e.registerCommand(la, n, He), e.registerCommand(er, n, He), e.registerCommand(Ko, n, He), e.registerCommand(MS, n, He), e.registerCommand(jc, i("character"), He), e.registerCommand(Zf, i("word"), He), e.registerCommand(tc, i("line"), He), e.registerCommand(Cy, r, He), e.registerCommand(ir, r, He));
  }, [e]), G(() => {
    const t = () => {
      ew() && e.dispatchCommand(ld, void 0);
    };
    return tt(
      e.registerCommand(yn, () => (t(), !1), qi),
      // Select-all is the rich-text plugin's `$selectAll`, confined in the same update rather than
      // after the selection change it announces, which an edit may come before.
      e.registerCommand(Ey, () => (ES(), t(), !0), Ge)
    );
  }, [e]), null;
}
function ow({ onChange: e, viewOptions: t }) {
  const [n] = ve();
  return G(() => n.registerCommand(yn, () => {
    const r = cl(t);
    return e?.(r), !1;
  }, Qt), [n, e, t]), null;
}
function aw() {
  const [e] = ve();
  return cw(e), null;
}
function cw(e) {
  G(() => {
    if (!e.hasNodes([Dt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Dt, (t) => lw(t, e));
  }, [e]);
}
function lw(e, t) {
  Yu(t, e.getKey()) && Rk(e.getFirstChild()), !(!me(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = Q(e.getKey());
    return me(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Hx({ onStateChange: e }) {
  const [t] = ve(), [n, r] = Ne(t), i = ne(!1), s = ne(!1), o = ne(void 0), a = ne(void 0), c = Me(() => {
    const l = w();
    let u;
    if (E(l)) {
      const f = l.anchor.getNode(), d = l.focus.getNode();
      let p = f.getKey() === "root" ? f : Ze(f, (y) => {
        const k = y.getParent();
        return k !== null && id(k);
      });
      p === null && (p = f.getTopLevelElementOrThrow()), Vi(p) && (p = Ze(f, me) ?? p);
      const h = p.getKey(), g = n.getElementByKey(h), m = xM(f, d);
      if (m && VE(m) && (u = m.getMarker()), g !== null && (me(p) || we(p) || Gr(p))) {
        o.current = p.getMarker(), a.current = u, e?.({
          canUndo: i.current,
          canRedo: s.current,
          blockMarker: o.current,
          contextMarker: u
        });
        return;
      }
    }
    a.current = u;
  }, [n, e]);
  return G(() => t.registerCommand(yn, (l, u) => (c(), r(u), !1), He), [t, c]), G(() => tt(n.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), n.registerCommand(AS, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), He), n.registerCommand(PS, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), He)), [c, n, e]), null;
}
function Gx(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function ui(e) {
  return e ? mt(e) ? e : Ze(e, (n) => mt(n)) ?? void 0 : void 0;
}
function Jx(e) {
  if (!E(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const n of e.getNodes()) {
    const r = ui(n);
    r && t.add(r.getKey());
  }
  return t.size > 1;
}
function Rp(e) {
  return E(e) && e.isCollapsed() && e.anchor.type === "element" || !E(e) && !Bc(e) ? !1 : e.getNodes().some((t) => Ae(t));
}
function Yx(e) {
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, n = t.getNode(), r = ui(n);
  if (!r || t.offset !== 0)
    return !1;
  let i = n;
  for (; i && i.getKey() !== r.getKey(); ) {
    if (i.getPreviousSibling())
      return !1;
    i = i.getParent();
  }
  return !0;
}
function Xx(e) {
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, n = t.getNode(), r = ui(n);
  if (!r)
    return !1;
  if (A(n)) {
    if (t.offset !== n.getChildrenSize())
      return !1;
  } else if (t.offset !== n.getTextContentSize())
    return !1;
  let i = n;
  for (; i && i.getKey() !== r.getKey(); ) {
    if (i.getNextSibling())
      return !1;
    i = i.getParent();
  }
  return !0;
}
function Yg(e, t) {
  return !!df(e, t);
}
function df(e, t) {
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: n } = e, r = n.getNode();
  if (n.type === "element" && A(r)) {
    const s = r.getChildren(), o = t === "backward" ? n.offset - 1 : n.offset;
    if (o < 0)
      return;
    const a = s[o];
    return Ae(a) ? a : void 0;
  }
  if (t === "backward") {
    if (n.offset !== 0)
      return;
    const s = r.getPreviousSibling();
    return Ae(s) ? s : void 0;
  }
  if (n.offset !== r.getTextContentSize())
    return;
  const i = r.getNextSibling();
  return Ae(i) ? i : void 0;
}
function Cc(e, t) {
  if (!E(e))
    return !1;
  const n = ui(e.anchor.getNode());
  return n ? !!(t === "backward" ? n.getPreviousSibling() : n.getNextSibling()) : !1;
}
function Rs(e) {
  return Rp(e) || Jx(e);
}
function Qx(e, t) {
  if (Rp(e) || Jx(e))
    return !0;
  if (!E(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Yx(e) && Cc(e, "backward") || Yg(e, "backward");
    case "deleteForward":
      return Xx(e) && Cc(e, "forward") || Yg(e, "forward");
    case "insertText":
      return !1;
  }
}
function uw(e, t) {
  if (!(!E(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const n = df(e, "backward");
      if (n)
        return { kind: "verse", node: n };
      if (Yx(e) && Cc(e, "backward")) {
        const r = ui(e.anchor.getNode());
        if (vt(r))
          return { kind: "para", node: r };
      }
      return;
    }
    if (t === "deleteForward") {
      const n = df(e, "forward");
      if (n)
        return { kind: "verse", node: n };
      if (Xx(e) && Cc(e, "forward")) {
        const i = ui(e.anchor.getNode())?.getNextSibling();
        if (vt(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Xg(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Bc(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!E(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!E(e) || e.isCollapsed())
    return !1;
  const n = ui(e.anchor.getNode()), r = ui(e.focus.getNode());
  return !!n && n.getKey() === t.key && !!r && r.getKey() === t.key;
}
function Zx(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else A(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function fw(e) {
  const t = e.getPreviousSibling();
  if (!mt(t))
    return;
  const n = t.getLastChild(), r = e.getFirstChild(), i = kn(r), s = e.getChildren().filter((o) => !Tn(o) && !(i && o.is(r)));
  t.append(...s), e.remove(), n ? Zx(n) : cs(t) || t.selectStart();
}
function eT(e) {
  return Ae(e) || at(e) ? [] : vt(e) ? e.getChildren().flatMap(eT) : [e];
}
function dw(e) {
  const t = [];
  for (const n of e) {
    const r = eT(n);
    r.length !== 0 && (vt(n) && t.length > 0 && t.push(Le(" ")), t.push(...r));
  }
  return t;
}
function Qg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function pw(e) {
  if (Array.isArray(e)) return e;
}
function hw(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, s, o, a = [], c = !0, l = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(c = (r = s.call(n)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (u) {
      l = !0, i = u;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw i;
      }
    }
    return a;
  }
}
function gw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mw(e, t) {
  return pw(e) || hw(e, t) || yw(e, t) || gw();
}
function yw(e, t) {
  if (e) {
    if (typeof e == "string") return Qg(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qg(e, t) : void 0;
  }
}
const tT = Object.entries, Zg = Object.setPrototypeOf, bw = Object.isFrozen, kw = Object.getPrototypeOf, xw = Object.getOwnPropertyDescriptor;
let Bt = Object.freeze, jt = Object.seal, Ss = Object.create, nT = typeof Reflect < "u" && Reflect, pf = nT.apply, hf = nT.construct;
Bt || (Bt = function(t) {
  return t;
});
jt || (jt = function(t) {
  return t;
});
pf || (pf = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
hf || (hf = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const ks = _t(Array.prototype.forEach), Tw = _t(Array.prototype.lastIndexOf), em = _t(Array.prototype.pop), xs = _t(Array.prototype.push), vw = _t(Array.prototype.splice), ti = Array.isArray, Mo = _t(String.prototype.toLowerCase), fu = _t(String.prototype.toString), tm = _t(String.prototype.match), yo = _t(String.prototype.replace), nm = _t(String.prototype.indexOf), Cw = _t(String.prototype.trim), Sw = _t(Number.prototype.toString), _w = _t(Boolean.prototype.toString), rm = typeof BigInt > "u" ? null : _t(BigInt.prototype.toString), im = typeof Symbol > "u" ? null : _t(Symbol.prototype.toString), Nt = _t(Object.prototype.hasOwnProperty), bo = _t(Object.prototype.toString), Pt = _t(RegExp.prototype.test), Ci = Mw(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return pf(e, t, r);
  };
}
function Mw(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return hf(e, n);
  };
}
function Ie(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mo;
  if (Zg && Zg(e, null), !ti(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (bw(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Ew(e) {
  for (let t = 0; t < e.length; t++)
    Nt(e, t) || (e[t] = null);
  return e;
}
function Vt(e) {
  const t = Ss(null);
  for (const r of tT(e)) {
    var n = mw(r, 2);
    const i = n[0], s = n[1];
    Nt(e, i) && (ti(s) ? t[i] = Ew(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = Vt(s) : t[i] = s);
  }
  return t;
}
function Aw(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Sw(e);
    case "boolean":
      return _w(e);
    case "bigint":
      return rm ? rm(e) : "0";
    case "symbol":
      return im ? im(e) : "Symbol()";
    case "undefined":
      return bo(e);
    case "function":
    case "object": {
      if (e === null)
        return bo(e);
      const t = e, n = Jn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : bo(r);
      }
      return bo(e);
    }
    default:
      return bo(e);
  }
}
function Jn(e, t) {
  for (; e !== null; ) {
    const r = xw(e, t);
    if (r) {
      if (r.get)
        return _t(r.get);
      if (typeof r.value == "function")
        return _t(r.value);
    }
    e = kw(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Pw(e) {
  try {
    return Pt(e, ""), !0;
  } catch {
    return !1;
  }
}
const sm = Bt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), du = Bt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pu = Bt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nw = Bt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), hu = Bt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ww = Bt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), om = Bt(["#text"]), am = Bt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), gu = Bt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), cm = Bt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ia = Bt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ow = jt(/{{[\w\W]*|^[\w\W]*}}/g), $w = jt(/<%[\w\W]*|^[\w\W]*%>/g), Rw = jt(/\${[\w\W]*/g), Iw = jt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Lw = jt(/^aria-[\-\w]+$/), lm = jt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), qw = jt(/^(?:\w+script|data):/i), Dw = jt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Kw = jt(/^html$/i), Uw = jt(/^[a-z][.\w]*(-[.\w]+)+$/i), um = jt(/<[/\w!]/g), fm = jt(/<[/\w]/g), Bw = jt(/<\/no(script|embed|frames)/i), Fw = jt(/\/>/i), Mn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, zw = function() {
  return typeof window > "u" ? null : window;
}, jw = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  n && n.hasAttribute(i) && (r = n.getAttribute(i));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, dm = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, Qr = function(t, n, r, i) {
  return Nt(t, n) && ti(t[n]) ? Ie(i.base ? Vt(i.base) : {}, t[n], i.transform) : r;
};
function rT() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zw();
  const t = (H) => rT(H);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Mn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, f = e.trustedTypes, d = a.prototype, p = Jn(d, "cloneNode"), h = Jn(d, "remove"), g = Jn(d, "nextSibling"), m = Jn(d, "childNodes"), y = Jn(d, "parentNode"), k = Jn(d, "shadowRoot"), x = Jn(d, "attributes"), S = o && o.prototype ? Jn(o.prototype, "nodeType") : null, _ = o && o.prototype ? Jn(o.prototype, "nodeName") : null, F = o && o.prototype ? Jn(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const H = n.createElement("template");
    H.content && H.content.ownerDocument && (n = H.content.ownerDocument);
  }
  let U, W = "", ae, $ = !1, D = 0;
  const ge = function() {
    if (D > 0)
      throw Ci('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, re = function(b) {
    ge(), D++;
    try {
      return U.createHTML(b);
    } finally {
      D--;
    }
  }, qe = function(b) {
    ge(), D++;
    try {
      return U.createScriptURL(b);
    } finally {
      D--;
    }
  }, ye = function() {
    return $ || (ae = jw(f, i), $ = !0), ae;
  }, nt = n, rt = nt.implementation, sn = nt.createNodeIterator, Ye = nt.createDocumentFragment, gr = nt.getElementsByTagName, vn = r.importNode;
  let Oe = dm();
  t.isSupported = typeof tT == "function" && typeof y == "function" && rt && rt.createHTMLDocument !== void 0;
  const he = Ow, z = $w, ce = Rw, Se = Iw, We = Lw, lt = qw, kt = Dw, Cn = Uw;
  let te = lm, Te = null;
  const Pr = Ie({}, [...sm, ...du, ...pu, ...hu, ...om]);
  let $e = null;
  const mr = Ie({}, [...am, ...gu, ...cm, ...Ia]);
  let pe = Object.seal(Ss(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ut = null, Yt = null;
  const I = Object.seal(Ss(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let V = !0, J = !0, Y = !1, le = !0, ee = !1, Z = !0, oe = !1, ue = !1, De = null, Re = null, on = !1, Sn = !1, Nr = !1, bi = !1, lo = !0, ps = !1;
  const Ma = "user-content-";
  let hs = !0, O = !1, R = {}, B = null;
  const X = Ie({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let _e = null;
  const Fe = Ie({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ke = null;
  const je = Ie({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xt = "http://www.w3.org/1998/Math/MathML", ht = "http://www.w3.org/2000/svg", it = "http://www.w3.org/1999/xhtml";
  let bt = it, ki = !1, _n = null;
  const wr = Ie({}, [xt, ht, it], fu), kh = Bt(["mi", "mo", "mn", "ms", "mtext"]);
  let Rl = Ie({}, kh);
  const xh = Bt(["annotation-xml"]);
  let Il = Ie({}, xh);
  const ZC = Ie({}, ["title", "style", "font", "a", "script"]);
  let uo = null;
  const eS = ["application/xhtml+xml", "text/html"], tS = "text/html";
  let ft = null, gs = null;
  const nS = n.createElement("form"), Th = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Ll = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (gs && gs === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = Vt(b), uo = // eslint-disable-next-line unicorn/prefer-includes
    eS.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? tS : b.PARSER_MEDIA_TYPE, ft = uo === "application/xhtml+xml" ? fu : Mo, Te = Qr(b, "ALLOWED_TAGS", Pr, {
      transform: ft
    }), $e = Qr(b, "ALLOWED_ATTR", mr, {
      transform: ft
    }), _n = Qr(b, "ALLOWED_NAMESPACES", wr, {
      transform: fu
    }), Ke = Qr(b, "ADD_URI_SAFE_ATTR", je, {
      transform: ft,
      base: je
    }), _e = Qr(b, "ADD_DATA_URI_TAGS", Fe, {
      transform: ft,
      base: Fe
    }), B = Qr(b, "FORBID_CONTENTS", X, {
      transform: ft
    }), Ut = Qr(b, "FORBID_TAGS", Vt({}), {
      transform: ft
    }), Yt = Qr(b, "FORBID_ATTR", Vt({}), {
      transform: ft
    }), R = Nt(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? Vt(b.USE_PROFILES) : b.USE_PROFILES : !1, V = b.ALLOW_ARIA_ATTR !== !1, J = b.ALLOW_DATA_ATTR !== !1, Y = b.ALLOW_UNKNOWN_PROTOCOLS || !1, le = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = b.SAFE_FOR_TEMPLATES || !1, Z = b.SAFE_FOR_XML !== !1, oe = b.WHOLE_DOCUMENT || !1, Sn = b.RETURN_DOM || !1, Nr = b.RETURN_DOM_FRAGMENT || !1, bi = b.RETURN_TRUSTED_TYPE || !1, on = b.FORCE_BODY || !1, lo = b.SANITIZE_DOM !== !1, ps = b.SANITIZE_NAMED_PROPS || !1, hs = b.KEEP_CONTENT !== !1, O = b.IN_PLACE || !1, te = Pw(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : lm, bt = typeof b.NAMESPACE == "string" ? b.NAMESPACE : it, Rl = Nt(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Vt(b.MATHML_TEXT_INTEGRATION_POINTS) : Ie({}, kh), Il = Nt(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? Vt(b.HTML_INTEGRATION_POINTS) : Ie({}, xh);
    const M = Nt(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? Vt(b.CUSTOM_ELEMENT_HANDLING) : Ss(null);
    if (pe = Ss(null), Nt(M, "tagNameCheck") && Th(M.tagNameCheck) && (pe.tagNameCheck = M.tagNameCheck), Nt(M, "attributeNameCheck") && Th(M.attributeNameCheck) && (pe.attributeNameCheck = M.attributeNameCheck), Nt(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (pe.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), jt(pe), ee && (J = !1), Nr && (Sn = !0), R && (Te = Ie({}, om), $e = Ss(null), R.html === !0 && (Ie(Te, sm), Ie($e, am)), R.svg === !0 && (Ie(Te, du), Ie($e, gu), Ie($e, Ia)), R.svgFilters === !0 && (Ie(Te, pu), Ie($e, gu), Ie($e, Ia)), R.mathMl === !0 && (Ie(Te, hu), Ie($e, cm), Ie($e, Ia))), I.tagCheck = null, I.attributeCheck = null, Nt(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? I.tagCheck = b.ADD_TAGS : ti(b.ADD_TAGS) && (Te === Pr && (Te = Vt(Te)), Ie(Te, b.ADD_TAGS, ft))), Nt(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? I.attributeCheck = b.ADD_ATTR : ti(b.ADD_ATTR) && ($e === mr && ($e = Vt($e)), Ie($e, b.ADD_ATTR, ft))), Nt(b, "ADD_URI_SAFE_ATTR") && ti(b.ADD_URI_SAFE_ATTR) && Ie(Ke, b.ADD_URI_SAFE_ATTR, ft), Nt(b, "FORBID_CONTENTS") && ti(b.FORBID_CONTENTS) && (B === X && (B = Vt(B)), Ie(B, b.FORBID_CONTENTS, ft)), Nt(b, "ADD_FORBID_CONTENTS") && ti(b.ADD_FORBID_CONTENTS) && (B === X && (B = Vt(B)), Ie(B, b.ADD_FORBID_CONTENTS, ft)), hs && (Te["#text"] = !0), oe && Ie(Te, ["html", "head", "body"]), Te.table && (Ie(Te, ["tbody"]), delete Ut.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ci('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ci('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const j = U;
      U = b.TRUSTED_TYPES_POLICY;
      try {
        W = re("");
      } catch (ie) {
        throw U = j, ie;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? (U = void 0, W = "") : (U === void 0 && (U = ye()), U && typeof W == "string" && (W = re("")));
    Bt && Bt(b), gs = b;
  }, vh = Ie({}, [...du, ...pu, ...Nw]), Ch = Ie({}, [...hu, ...ww]), rS = function(b, M, j) {
    return M.namespaceURI === it ? b === "svg" : M.namespaceURI === xt ? b === "svg" && (j === "annotation-xml" || Rl[j]) : !!vh[b];
  }, iS = function(b, M, j) {
    return M.namespaceURI === it ? b === "math" : M.namespaceURI === ht ? b === "math" && Il[j] : !!Ch[b];
  }, sS = function(b, M, j) {
    return M.namespaceURI === ht && !Il[j] || M.namespaceURI === xt && !Rl[j] ? !1 : !Ch[b] && (ZC[b] || !vh[b]);
  }, oS = function(b) {
    let M = y(b);
    (!M || !M.tagName) && (M = {
      namespaceURI: bt,
      tagName: "template"
    });
    const j = Mo(b.tagName), ie = Mo(M.tagName);
    return _n[b.namespaceURI] ? b.namespaceURI === ht ? rS(j, M, ie) : b.namespaceURI === xt ? iS(j, M, ie) : b.namespaceURI === it ? sS(j, M, ie) : !!(uo === "application/xhtml+xml" && _n[b.namespaceURI]) : !1;
  }, Yr = function(b) {
    xs(t.removed, {
      element: b
    });
    try {
      y(b).removeChild(b);
    } catch {
      if (h(b), !y(b))
        throw Ci("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ea = function(b) {
    fo(b);
    const M = m(b);
    if (M) {
      const ie = [];
      ks(M, (fe) => {
        xs(ie, fe);
      }), ks(ie, (fe) => {
        try {
          h(fe);
        } catch {
        }
      });
    }
    const j = x(b);
    if (j)
      for (let ie = j.length - 1; ie >= 0; --ie) {
        const fe = j[ie], xe = fe && fe.name;
        if (typeof xe == "string")
          try {
            b.removeAttribute(xe);
          } catch {
          }
      }
  }, xi = function(b, M) {
    try {
      xs(t.removed, {
        attribute: M.getAttributeNode(b),
        from: M
      });
    } catch {
      xs(t.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(b), b === "is")
      if (Sn || Nr)
        try {
          Yr(M);
        } catch {
        }
      else
        try {
          M.setAttribute(b, "");
        } catch {
        }
  }, aS = function(b) {
    const M = x(b);
    if (M)
      for (let j = M.length - 1; j >= 0; --j) {
        const ie = M[j], fe = ie && ie.name;
        if (!(typeof fe != "string" || $e[ft(fe)]))
          try {
            b.removeAttribute(fe);
          } catch {
          }
      }
  }, fo = function(b) {
    const M = [b];
    for (; M.length > 0; ) {
      const j = M.pop();
      (S ? S(j) : j.nodeType) === Mn.element && aS(j);
      const fe = m(j);
      if (fe)
        for (let xe = fe.length - 1; xe >= 0; --xe)
          M.push(fe[xe]);
    }
  }, cS = function(b) {
    if (!Z)
      return;
    const M = [b];
    for (; M.length > 0; ) {
      const j = M.pop(), ie = S ? S(j) : j.nodeType;
      if (ie === Mn.processingInstruction || ie === Mn.comment && Pt(fm, j.data)) {
        try {
          h(j);
        } catch {
        }
        continue;
      }
      if (ie === Mn.element) {
        const xe = j, Xe = ft(_ ? _(j) : j.nodeName);
        try {
          xe.hasAttribute && xe.hasAttribute("patchsrc") && xe.removeAttribute("patchsrc"), xe.hasAttribute && xe.hasAttribute("for") && Xe !== "label" && Xe !== "output" && xe.removeAttribute("for");
        } catch {
        }
      }
      const fe = m(j);
      if (fe)
        for (let xe = fe.length - 1; xe >= 0; --xe)
          M.push(fe[xe]);
    }
  }, Sh = function(b) {
    let M = null, j = null;
    if (on)
      b = "<remove></remove>" + b;
    else {
      const xe = tm(b, /^[\r\n\t ]+/);
      j = xe && xe[0];
    }
    uo === "application/xhtml+xml" && bt === it && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const ie = U ? re(b) : b;
    if (bt === it)
      try {
        M = new u().parseFromString(ie, uo);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = rt.createDocument(bt, "template", null);
      try {
        M.documentElement.innerHTML = ki ? W : ie;
      } catch {
      }
    }
    const fe = M.body || M.documentElement;
    return b && j && fe.insertBefore(n.createTextNode(j), fe.childNodes[0] || null), bt === it ? gr.call(M, oe ? "html" : "body")[0] : oe ? M.documentElement : fe;
  }, _h = function(b) {
    const M = F ? F(b) : b.ownerDocument;
    return sn.call(
      M || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Aa = function(b) {
    return b = yo(b, he, " "), b = yo(b, z, " "), b = yo(b, ce, " "), b;
  }, ql = function(b) {
    var M;
    b.normalize();
    const j = F ? F(b) : b.ownerDocument, ie = sn.call(
      j || b,
      b,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let fe = ie.nextNode();
    for (; fe; )
      fe.data = Aa(fe.data), fe = ie.nextNode();
    const xe = (M = b.querySelectorAll) === null || M === void 0 ? void 0 : M.call(b, "template");
    xe && ks(xe, (Xe) => {
      ms(Xe.content) && ql(Xe.content);
    });
  }, Pa = function(b) {
    const M = _ ? _(b) : null;
    return typeof M != "string" || ft(M) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    b.attributes !== x(b) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    b.nodeType !== S(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    b.childNodes !== m(b);
  }, ms = function(b) {
    if (!S || typeof b != "object" || b === null)
      return !1;
    try {
      return S(b) === Mn.documentFragment;
    } catch {
      return !1;
    }
  }, po = function(b) {
    if (!S || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof S(b) == "number";
    } catch {
      return !1;
    }
  };
  function yr(H, b, M) {
    H.length !== 0 && ks(H, (j) => {
      j.call(t, b, M, gs);
    });
  }
  const lS = function(b, M) {
    return !!(Z && b.hasChildNodes() && !po(b.firstElementChild) && Pt(um, b.textContent) && Pt(um, b.innerHTML) || Z && b.namespaceURI === it && M === "style" && po(b.firstElementChild) || b.nodeType === Mn.processingInstruction || Z && b.nodeType === Mn.comment && Pt(fm, b.data));
  }, uS = function(b, M, j) {
    if (!Ut[M] && Ph(M) && (pe.tagNameCheck instanceof RegExp && Pt(pe.tagNameCheck, M) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(M)))
      return !1;
    if (hs && !B[M]) {
      const ie = y(b), fe = m(b);
      if (fe && ie) {
        const xe = fe.length;
        for (let Xe = xe - 1; Xe >= 0; --Xe) {
          const dt = b === j ? p(fe[Xe], !0) : fe[Xe];
          ie.insertBefore(dt, g(b));
        }
      }
    }
    return Yr(b), !0;
  }, Mh = function(b, M, j, ie) {
    return b.length === 0 ? M : M === j || M === ie ? Vt(M) : M;
  }, Eh = function(b, M) {
    if (yr(Oe.beforeSanitizeElements, b, null), b !== M && y(b) === null)
      return O && fo(b), !0;
    if (Pa(b))
      return Yr(b), !0;
    const j = ft(_ ? _(b) : b.nodeName);
    if (Te = Mh(Oe.uponSanitizeElement, Te, Pr, De), yr(Oe.uponSanitizeElement, b, {
      tagName: j,
      allowedTags: Te
    }), b !== M && y(b) === null)
      return O && fo(b), !0;
    if (lS(b, j))
      return Yr(b), !0;
    if (Ut[j] || !(I.tagCheck instanceof Function && I.tagCheck(j)) && !Te[j]) {
      const fe = uS(b, j, M);
      return fe === !1 && yr(Oe.afterSanitizeElements, b, null), fe;
    }
    if ((S ? S(b) : b.nodeType) === Mn.element && !oS(b) || (j === "noscript" || j === "noembed" || j === "noframes") && Pt(Bw, b.innerHTML))
      return Yr(b), !0;
    if (ee && b.nodeType === Mn.text) {
      const fe = Aa(b.textContent);
      b.textContent !== fe && (xs(t.removed, {
        element: b.cloneNode()
      }), b.textContent = fe);
    }
    return yr(Oe.afterSanitizeElements, b, null), !1;
  }, Ah = function(b, M, j) {
    if (Yt[M] || Z && M === "patchsrc" || Z && M === "for" && b !== "label" && b !== "output" || lo && (M === "id" || M === "name") && (j in n || j in nS))
      return !1;
    const ie = $e[M] || I.attributeCheck instanceof Function && I.attributeCheck(M, b);
    if (!(J && Pt(Se, M))) {
      if (!(V && Pt(We, M))) {
        if (ie) {
          if (!Ke[M]) {
            if (!Pt(te, yo(j, kt, ""))) {
              if (!((M === "src" || M === "xlink:href" || M === "href") && b !== "script" && nm(j, "data:") === 0 && _e[b])) {
                if (!(Y && !Pt(lt, yo(j, kt, "")))) {
                  if (j)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Ph(b) && (pe.tagNameCheck instanceof RegExp && Pt(pe.tagNameCheck, b) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(b)) && (pe.attributeNameCheck instanceof RegExp && Pt(pe.attributeNameCheck, M) || pe.attributeNameCheck instanceof Function && pe.attributeNameCheck(M, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          M === "is" && pe.allowCustomizedBuiltInElements && (pe.tagNameCheck instanceof RegExp && Pt(pe.tagNameCheck, j) || pe.tagNameCheck instanceof Function && pe.tagNameCheck(j)))
        ) return !1;
      }
    }
    return !0;
  }, fS = Ie({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ph = function(b) {
    return !fS[Mo(b)] && Pt(Cn, b);
  }, dS = function(b, M, j, ie) {
    if (U && typeof f == "object" && typeof f.getAttributeType == "function" && !j)
      switch (f.getAttributeType(b, M)) {
        case "TrustedHTML":
          return re(ie);
        case "TrustedScriptURL":
          return qe(ie);
      }
    return ie;
  }, pS = function(b, M, j, ie) {
    try {
      j ? b.setAttributeNS(j, M, ie) : b.setAttribute(M, ie), Pa(b) ? Yr(b) : em(t.removed);
    } catch {
      xi(M, b);
    }
  }, Nh = function(b) {
    yr(Oe.beforeSanitizeAttributes, b, null);
    const M = b.attributes;
    if (!M || Pa(b))
      return;
    $e = Mh(Oe.uponSanitizeAttribute, $e, mr, Re);
    const j = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: $e,
      forceKeepAttr: void 0
    };
    let ie = M.length;
    const fe = ft(b.nodeName);
    for (; ie--; ) {
      const xe = M[ie], Xe = xe.name, dt = xe.namespaceURI, an = xe.value, cn = ft(Xe), Kl = an;
      let Xt = Xe === "value" ? Kl : Cw(Kl);
      if (j.attrName = cn, j.attrValue = Xt, j.keepAttr = !0, j.forceKeepAttr = void 0, yr(Oe.uponSanitizeAttribute, b, j), Xt = j.attrValue, ps && (cn === "id" || cn === "name") && nm(Xt, Ma) !== 0 && (xi(Xe, b), Xt = Ma + Xt), Z && Pt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Xt)) {
        xi(Xe, b);
        continue;
      }
      if (cn === "attributename" && tm(Xt, "href")) {
        xi(Xe, b);
        continue;
      }
      if (!j.forceKeepAttr) {
        if (!j.keepAttr) {
          xi(Xe, b);
          continue;
        }
        if (!le && Pt(Fw, Xt)) {
          xi(Xe, b);
          continue;
        }
        if (ee && (Xt = Aa(Xt)), !Ah(fe, cn, Xt)) {
          xi(Xe, b);
          continue;
        }
        Xt = dS(fe, cn, dt, Xt), Xt !== Kl && pS(b, Xe, dt, Xt);
      }
    }
    yr(Oe.afterSanitizeAttributes, b, null);
  }, Na = function(b) {
    let M = null;
    const j = _h(b);
    for (yr(Oe.beforeSanitizeShadowDOM, b, null); M = j.nextNode(); )
      if (yr(Oe.uponSanitizeShadowNode, M, null), Eh(M, b), Nh(M), ms(M.content) && Na(M.content), (S ? S(M) : M.nodeType) === Mn.element) {
        const fe = k(M);
        ms(fe) && (Dl(fe), Na(fe));
      }
    yr(Oe.afterSanitizeShadowDOM, b, null);
  }, Dl = function(b) {
    const M = [{
      node: b,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const j = M.pop();
      if (j.shadow) {
        Na(j.shadow);
        continue;
      }
      const ie = j.node, xe = (S ? S(ie) : ie.nodeType) === Mn.element, Xe = m(ie);
      if (Xe)
        for (let dt = Xe.length - 1; dt >= 0; --dt)
          M.push({
            node: Xe[dt],
            shadow: null
          });
      if (xe) {
        const dt = _ ? _(ie) : null;
        if (typeof dt == "string" && ft(dt) === "template") {
          const an = ie.content;
          ms(an) && M.push({
            node: an,
            shadow: null
          });
        }
      }
      if (xe) {
        const dt = k(ie);
        ms(dt) && M.push({
          node: null,
          shadow: dt
        }, {
          node: dt,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(H) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, j = null, ie = null, fe = null;
    if (ki = !H, ki && (H = "<!-->"), typeof H != "string" && !po(H) && (H = Aw(H), typeof H != "string"))
      throw Ci("dirty is not a string, aborting");
    if (!t.isSupported)
      return H;
    ue ? (Te = De, $e = Re) : Ll(b), (Oe.uponSanitizeElement.length > 0 || Oe.uponSanitizeAttribute.length > 0) && (Te = Vt(Te)), Oe.uponSanitizeAttribute.length > 0 && ($e = Vt($e)), t.removed = [];
    const xe = O && typeof H != "string" && po(H);
    if (xe) {
      cS(H);
      const an = _ ? _(H) : H.nodeName;
      if (typeof an == "string") {
        const cn = ft(an);
        if (!Te[cn] || Ut[cn])
          throw Ea(H), Ci("root node is forbidden and cannot be sanitized in-place");
      }
      if (Pa(H))
        throw Ea(H), Ci("root node is clobbered and cannot be sanitized in-place");
      try {
        Dl(H);
      } catch (cn) {
        throw Ea(H), cn;
      }
    } else if (po(H))
      M = Sh("<!---->"), j = M.ownerDocument.importNode(H, !0), j.nodeType === Mn.element && j.nodeName === "BODY" || j.nodeName === "HTML" ? M = j : M.appendChild(j), Dl(j);
    else {
      if (!Sn && !ee && !oe && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return U && bi ? re(H) : H;
      if (M = Sh(H), !M)
        return Sn ? null : bi ? W : "";
    }
    M && on && Yr(M.firstChild);
    const Xe = xe ? H : M;
    try {
      const an = _h(Xe);
      for (; ie = an.nextNode(); )
        Eh(ie, Xe), Nh(ie), ms(ie.content) && Na(ie.content);
    } catch (an) {
      throw xe && (Ea(H), ks(t.removed, (cn) => {
        cn.element && fo(cn.element);
      })), an;
    }
    if (xe)
      return ks(t.removed, (an) => {
        an.element && fo(an.element);
      }), ee && ql(H), H;
    if (Sn) {
      if (ee && ql(M), Nr)
        for (fe = Ye.call(M.ownerDocument); M.firstChild; )
          fe.appendChild(M.firstChild);
      else
        fe = M;
      return ($e.shadowroot || $e.shadowrootmode) && (fe = vn.call(r, fe, !0)), fe;
    }
    let dt = oe ? M.outerHTML : M.innerHTML;
    return oe && Te["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Pt(Kw, M.ownerDocument.doctype.name) && (dt = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + dt), ee && (dt = Aa(dt)), U && bi ? re(dt) : dt;
  }, t.setConfig = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ll(H), ue = !0, De = Te, Re = $e;
  }, t.clearConfig = function() {
    gs = null, ue = !1, De = null, Re = null, U = ae, W = "";
  }, t.isValidAttribute = function(H, b, M) {
    gs || Ll({});
    const j = ft(H), ie = ft(b);
    return Ah(j, ie, M);
  }, t.addHook = function(H, b) {
    typeof b == "function" && Nt(Oe, H) && xs(Oe[H], b);
  }, t.removeHook = function(H, b) {
    if (Nt(Oe, H)) {
      if (b !== void 0) {
        const M = Tw(Oe[H], b);
        return M === -1 ? void 0 : vw(Oe[H], M, 1)[0];
      }
      return em(Oe[H]);
    }
  }, t.removeHooks = function(H) {
    Nt(Oe, H) && (Oe[H] = []);
  }, t.removeAllHooks = function() {
    Oe = dm();
  }, t;
}
var Vw = rT();
function Ww({ structureProtectionMode: e = "off" }) {
  const [t] = ve(), n = ne(void 0), [r, i] = Ne(void 0), s = Me((o) => {
    n.current = o, i(o);
  }, []);
  return G(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = Gx(p);
      if (!h)
        return !1;
      const g = w();
      return e === "protected" ? g && Qx(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = w(), m = n.current;
      if (m && g && Xg(g, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const k = Q(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (k) {
            const x = k.getParent(), S = k.getPreviousSibling(), _ = k.getNextSibling();
            k.remove(), S ? Zx(S) : _ && v(_) ? _.select(0, 0) : x?.selectStart();
          }
        } else m.kind === "selection" ? E(g) && (yp(g), g.removeText()) : vt(k) && fw(k);
        return !0;
      }
      if (!g)
        return !1;
      const y = uw(g, p);
      if (y) {
        if (y.kind === "verse") {
          const k = Ay();
          k.add(y.node.getKey()), Fn(k);
        } else {
          const k = Kr();
          k.anchor.set(y.node.getKey(), 0, "element"), k.focus.set(y.node.getKey(), y.node.getChildrenSize(), "element"), Fn(k);
        }
        return s({ key: y.node.getKey(), kind: y.kind, intent: p }), h.preventDefault(), !0;
      }
      if (E(g) && !g.isCollapsed() && Rp(g)) {
        const k = g.getNodes().filter(Ae).map((_) => _.getKey()), { anchor: x, focus: S } = g;
        return s({
          kind: "selection",
          intent: p,
          key: k[0],
          anchor: { key: x.key, offset: x.offset, type: x.type },
          focus: { key: S.key, offset: S.offset, type: S.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return !h || !Rs(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = Vw.sanitize(p), m = new DOMParser().parseFromString(g, "text/html"), y = dw(QS(t, m)), k = w();
      return E(k) && k.insertNodes(y), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && Rs(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, f = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && Rs(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, d = () => {
      const p = n.current;
      p && t.getEditorState().read(() => {
        Xg(w(), p) || s(void 0);
      });
    };
    return tt(
      t.registerCommand(Mr, o, Ge),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(ir, c, He),
      t.registerCommand(er, u, Ge),
      t.registerCommand(NS, c, Ge),
      t.registerCommand(nd, f, Ge),
      t.registerCommand(la, c, Ge),
      t.registerUpdateListener(d)
    );
  }, [t, e, s]), G(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!r && r.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!r), a ? (o.setAttribute("data-verse-delete-intent", r.intent), o.setAttribute("data-verse-delete-kind", r.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, r]), null;
}
const KD = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function Hw({ textDirection: e }) {
  const [t] = ve();
  return Gw(t, e), null;
}
function Gw(e, t) {
  G(() => (pm(e, t), e.registerUpdateListener(({ dirtyElements: n }) => {
    n.size > 0 && pm(e, t);
  })), [e, t]);
}
function pm(e, t) {
  if (t === "auto")
    return;
  const n = e.getRootElement();
  n && (n.dir = t);
  const r = e._config.theme.placeholder, i = document.getElementsByClassName(r)[0];
  i && (i.dir = t);
}
function Jw() {
  const [e] = ve();
  return Yw(e), null;
}
function Yw(e) {
  G(() => {
    if (!e.hasNodes([ze, Jt, Je, st, Ft]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return tt(
      e.registerNodeTransform(st, Xw),
      e.registerNodeTransform(st, (t) => Qw(t, e)),
      e.registerNodeTransform(Ft, hm),
      e.registerNodeTransform(Jt, hm),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(Ft, (t) => {
        Jo(Fr("va"), t), Jo(Fr("vp"), t);
      })
    );
  }, [e]);
}
function Xw(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), n = e.getNextSibling(), r = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || L(n) || K(r) || K(n) || se(r) || se(n) || et(r) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  v(n) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  et(n) && n.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  de(e, be) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Be(r))
    return;
  if (Ae(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  Ae(n) && Zd(e);
}
function Qw(e, t) {
  const n = e.getParent();
  !et(n) || !e.isAttached() || wS(Fa) || Yu(t, e.getKey()) && !Yu(t, n.getKey()) && n.insertAfter(e);
}
function hm(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; se(t); )
    t = t.getLastChild();
  (K(t) || pr(e) && v(t) && se(t.getParent()) && !Zw(t)) && e.insertBefore(Le(" "));
}
function Zw(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith(q);
}
function hl(e) {
  if (!L(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !ga(i)))
      return;
    const r = t.getParent();
    if (!r)
      return;
    if (!A(r) || !r.isInline())
      return e;
    t = r;
  }
}
function eO(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (A(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function tO() {
  const e = w();
  if (!(!E(e) || !e.isCollapsed()))
    return hl(eO(e.anchor));
}
function nO(e) {
  const t = w();
  let n;
  return E(t) ? t.isCollapsed() && (n = t.anchor.getNode()) : t || (n = iT(e.target)), n ? hl(Ze(n, L)) : void 0;
}
function iT(e) {
  const t = OS(e)?.anchorNode;
  if (Sy(t))
    return Zi(t) ?? void 0;
}
function rO(e) {
  if (w())
    return;
  const t = iT(e);
  return t ? hl(Ze(t, L)) : void 0;
}
function gm(e) {
  const t = Ze(e.getNode(), L);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function iO() {
  const e = w();
  if (!E(e) || e.isCollapsed())
    return !1;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], r = gm(t), i = gm(n);
  if (r && i && r.is(i))
    return !1;
  let s = !1;
  const o = r?.getParent();
  r && o && (t.set(o.getKey(), r.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (n.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const sO = 500;
function oO(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function aO() {
  const e = w();
  if (!E(e) || e.isCollapsed())
    return;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || n.type !== "element" || t.key !== n.key || n.offset !== t.offset + 1)
    return;
  const r = t.getNode();
  if (A(r))
    return hl(r.getChildAtIndex(t.offset));
}
function cO() {
  const [e] = ve(), t = Np(tO), n = ne(void 0);
  return G(() => {
    const r = (i) => {
      t(i) && Wt(Oi);
    };
    return tt(e.registerCommand(
      Mr,
      (i) => (n.current = oO(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      He
    ), e.registerCommand(yn, () => {
      if (n.current !== void 0 && performance.now() - n.current < sO) {
        const o = aO();
        if (o)
          return r(o), !1;
      }
      if (iO())
        return Wt(Oi), So(e, Oi), !1;
      const s = rO(e.getRootElement());
      return s && r(s), !1;
    }, qi), e.registerCommand(zc, (i) => {
      const s = nO(i);
      return s && r(s), !1;
    }, qi));
  }, [e, t]), null;
}
function lO({ trigger: e, scriptureReference: t, contextMarker: n, getMarkerAction: r }) {
  const { markersMenuItems: i } = XP({
    scriptureReference: t,
    contextMarker: n,
    getMarkerAction: r
  });
  return P(YP, { trigger: e, items: i });
}
function uO({ trigger: e, scrRef: t, contextMarker: n, getMarkerAction: r, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = ut(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? P(pO, { trigger: e, harness: i }) : P(lO, { trigger: e, scriptureReference: u, contextMarker: n, getMarkerAction: r });
}
const fO = [" ", "*"];
function dO(e, t) {
  return {
    name: e.marker,
    label: e.marker,
    description: e.description ?? "",
    // Selection is routed through `NodeSelectionMenu`'s `onSelectOption` (below), never through
    // an `OptionItem`'s own `.action` fallback - this is present only to satisfy the type.
    action: () => {
    },
    markerMenuItem: e,
    applyOpts: t
  };
}
function pO({ trigger: e, harness: t }) {
  const [n] = ve(), [r, i] = Ne(void 0), s = ne({ query: "", options: [] }), o = ne(0), a = Me((d, p, h) => {
    const g = p.find((m) => m.kind === "note" && m.marker === d);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    n.update(() => {
      const m = w();
      E(m) && m.insertText(`${e}${d}${h ? " " : ""}`);
    });
  }, [n, t, e]);
  G(() => tt(n.registerCommand(Mr, (d) => {
    if (r) {
      if ((d.key === "Enter" || d.key === "Tab") && s.current.options.length === 0)
        return d.preventDefault(), d.stopPropagation(), !0;
      if (d.key === "*" && r.trigger === "backslash")
        return d.preventDefault(), d.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (d.key === e && r.trigger === "backslash" && !r.hasTextSelection) {
        d.preventDefault(), d.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, r.items, !1), Py(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), n.update(() => {
          const m = w();
          E(m) && m.insertText(e);
        }), !0);
      }
      if (d.key !== " " || r.trigger !== "backslash")
        return !1;
      d.preventDefault(), d.stopPropagation(), i(void 0);
      const h = s.current.query;
      if (r.hasTextSelection) {
        const g = r.items.find((m) => m.marker === h);
        return g && t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(h, r.items, !0), !0;
    }
    if (d.key !== e)
      return !1;
    const p = t.getContext();
    return p ? (d.preventDefault(), s.current = { query: "", options: [] }, o.current += 1, i({
      trigger: "backslash",
      hasTextSelection: p.hasTextSelection,
      items: t.getItems(p),
      session: o.current
    }), !0) : !1;
  }, Ge), n.registerCommand(Ny, (d) => {
    if (r || d === null || d.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (d.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Tr)), [n, e, t, r, a]);
  const c = Me(() => i(void 0), []), l = Me((d, p) => {
    s.current = { query: d, options: p };
  }, []), u = Me((d) => {
    const { markerMenuItem: p, applyOpts: h } = d;
    t.apply(p, h);
  }, [t]), f = ut(() => r?.items.map((d) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    dO(d, { trigger: r.trigger, literalPrefixLanded: !1 })
  )), [r]);
  return r && P(hx, { isOpen: !0, children: ({ placement: d }) => P(
    yx,
    { options: f ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: d === "top-start", menuOpenKey: e, passthroughKeys: r.trigger === "backslash" ? fO : void 0 },
    r.session
  ) });
}
function hO(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (n) => q.repeat(n.length));
}
function mm(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
let Sc;
function gO(e) {
  e && (Sc = e);
}
function mu(e) {
  return Kt(e);
}
function mO(e, t) {
  return e.isEmpty() ? vy : sT(e.toJSON(), t);
}
function sT(e, t) {
  if (!e.root || !e.root.children) return;
  const n = e.root.children;
  if (n.length === 1 && Jc(n[0]) && (!n[0].children || n[0].children.length === 0))
    return vy;
  if (n.some(ME)) {
    Sc?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const r = cT(n), i = Yn(r, t);
  return i ? { type: rr, version: nr, content: i } : void 0;
}
function yO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), ct({
    type: n,
    marker: r,
    code: s,
    ...i,
    content: t
  });
}
function bO(e) {
  const { marker: t, number: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return ct({
    type: Ln.getType(),
    marker: t,
    number: n,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function kO(e, t) {
  const { marker: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Yb(n, a, c), ct({
    type: Ln.getType(),
    marker: n,
    number: c,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function xO(e) {
  const { marker: t, sid: n, altnumber: r, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Yb(t, o, a), ct({
    type: Ft.getType(),
    marker: t,
    number: a,
    sid: n,
    altnumber: r,
    pubnumber: i,
    ...s
  });
}
function TO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return ct({
    type: n,
    marker: r === "" ? void 0 : r,
    ...i,
    content: t
  });
}
function vO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return ct({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function CO(e, t) {
  const { unknownAttributes: n } = e;
  return ct({ type: Tb, ...n, content: t });
}
function SO(e, t) {
  const { marker: n, unknownAttributes: r } = e;
  return ct({ type: xk, marker: n, ...r, content: t });
}
function _O(e, t) {
  const { marker: n, align: r, colspan: i, unknownAttributes: s } = e;
  return ct({
    type: Ck,
    marker: n,
    align: r,
    colspan: i,
    ...s,
    content: t
  });
}
function MO(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const n = t.replace(/^ +/, "");
  return n ? [n, ...e.slice(1)] : e.slice(1);
}
function EO(e, t) {
  const { type: n, marker: r, caller: i, category: s, unknownAttributes: o } = e;
  return ct({
    type: n,
    marker: r,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function _s(e) {
  const { type: t, marker: n, sid: r, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return ct({
    type: t,
    marker: n === "" ? void 0 : n,
    ...ub({ sid: r, eid: i, ...s }, o)
  });
}
function AO(e) {
  return e.text;
}
function PO(e, t) {
  const { tag: n, marker: r, unknownAttributes: i } = e;
  return ct({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function NO(e) {
  const { marker: t } = e;
  return {
    type: ac,
    marker: t === "" ? void 0 : t
  };
}
function yu(e, t) {
  const n = e[e.length - 1];
  n && typeof n == "string" ? e[e.length - 1] = n + t : e.push(t);
}
function oT(e) {
  return Ui(e) && e.typedIDs[wt] !== void 0;
}
function wO(e, t, n, r, i) {
  const s = sr.getType(), o = t.filter((l) => !n.includes(l));
  if (n.filter((l) => !t.includes(l)).forEach((l) => {
    const u = _s({
      type: s,
      marker: Os,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = _s({
      type: s,
      marker: Di,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = _s({
      type: s,
      marker: Di
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = _s({
      type: s,
      marker: Os
    });
    i.push(l);
  }
  !oT(r) && t.forEach((l) => {
    const u = _s({
      type: s,
      marker: Os,
      eid: l
    });
    i.push(u);
  });
}
function gf(e, t, n, r) {
  if (!r) return !1;
  let i = t > 0 ? e[t - 1] : n;
  for (; i && Ui(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return !Zs(i) || i.markerSyntax !== "opening" ? !1 : i.marker === r.marker ? !0 : r.children.some(
    (s) => ab(s) && s.marker === i.marker
  );
}
function OO(e, t, n, r, i) {
  const s = e[t];
  return !zr(s) || s.text !== q || !(i || Ui(e[t - 1]) || Ui(e[t + 1])) || s[Dr]?.textType !== void 0 || gf(e, t, n, r) ? !1 : !r || aT(r.children, s);
}
function aT(e, t) {
  return e.some((n) => n === t ? !1 : Ui(n) ? aT(n.children, t) : Zs(n) ? !1 : zr(n) ? n[Dr]?.textType === void 0 && n.text !== "" && n.text !== q && !rs(n.text) : "children" in n && n.type !== Ar.getType());
}
function $O(e) {
  let t = e;
  for (; Ui(t); ) t = t.children[0];
  return t;
}
function RO(e, t) {
  let n = 0;
  for (; n < e.length; ) {
    const s = e[n];
    if (!Zs(s) || s.markerSyntax !== "opening") break;
    n++;
  }
  const r = $O(e[n]);
  return zr(r) ? r.text === Mt(t) ? { node: r, caller: t } : Math.floor(r.detail / jy) % 2 === 1 ? { node: r, caller: t } : void 0 : void 0;
}
function Yn(e, t, n, r, i, s = !1) {
  const o = [];
  let a, c = [];
  return e.forEach((l, u) => {
    const f = l, d = l, p = l, h = l, g = l, m = l, y = l, k = l;
    switch (l.type) {
      case Pn.getType():
        o.push(
          yO(
            f,
            Yn(f.children, t)
          )
        );
        break;
      case Dn.getType():
        o.push(bO(l));
        break;
      case Ln.getType():
        o.push(
          kO(
            d,
            Yn(d.children, t)
          )
        );
        break;
      case Jt.getType():
      case Ft.getType():
        o.push(xO(l));
        break;
      case ze.getType():
        o.push(
          TO(
            p,
            Yn(p.children, t, void 0, p)
          )
        );
        break;
      case Dt.getType():
        o.push(
          vO(
            h,
            Yn(h.children, t)
          )
        );
        break;
      case ns.getType():
        o.push(
          CO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case ss.getType():
        o.push(
          SO(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case os.getType():
        o.push(
          _O(
            l,
            Yn(l.children, t)
          )
        );
        break;
      case Je.getType(): {
        const x = Yn(
          g.children,
          t,
          RO(g.children, g.caller)
        );
        o.push(
          EO(
            g,
            mu(t) && g.category === void 0 ? MO(x) : x
          )
        );
        break;
      }
      case Ar.getType():
      case Hn.getType():
      case En.getType():
      case wy.getType():
      case Wn.getType():
        break;
      case gt.getType():
        if (a = Yn(
          y.children,
          t,
          n,
          r,
          u > 0 ? e[u - 1] : i,
          !0
        ), a) {
          const x = y.typedIDs[wt];
          if (x) {
            const S = e[u + 1];
            wO(a, x, c, S, o), c = oT(S) ? x : [];
          } else {
            const S = a.shift();
            S && (typeof S == "string" ? yu(o, S) : o.push(S)), a.length > 0 && o.push(...a);
          }
        }
        break;
      case sr.getType():
        o.push(_s(l));
        break;
      case st.getType():
        if (n && l === n.node) {
          let x = gd(n.node.text, n.caller);
          mu(t) && (x = mm(Jh(x))), x && yu(o, x);
          break;
        }
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !rs(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
        // text node stands in for THREE presentation shapes — the tagged separators the
        // forward adaptor builds, the empty-char placeholder, and an orphaned structural
        // prefix a split or deletion strands in its own (untagged) node. The one content shape
        // told apart is a no-break space an annotation mark split off content text, inside the
        // mark or beside it (`isNbspContentAtMark`). Any other CONTENT string which is exactly
        // one NBSP is dropped too; fixing that needs a per-context story for the untagged
        // shapes, not a tag test alone. The forward side keeps its own output clear of the
        // ambiguity: `createPara` leaves a spaces-only paragraph-leading string plain instead
        // of rewriting a lone " " into exactly this shape, so in standard view only an
        // authored lone-NBSP data string (displayed as `~`, never as a bare NBSP node) is at
        // stake — leaving the drop to genuinely structural nodes.
        (m.text !== q || OO(e, u, i, r, s)) && // The untagged NBSP-`|` form of milestone attribute text. Text right after a char span's
        // opening glyph is never that: its NBSP is the span's separator, and a `|…` after it is
        // content the attribute grammar left literal (`\w |lemma="g"grace\w*` — Paratext 9
        // parses attributes only when the whole `|…` tail before the closer matches), so it is
        // kept like any other content text.
        !(m.text.startsWith(cd) && !gf(e, u, i, r)) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[Dr]?.textType !== "attribute") {
          let x = AO(m);
          t?.markerMode === "editable" && gf(e, u, i, r) && x.startsWith(q) && (x = x.slice(1)), mu(t) && (x = mm(Jh(x))), yu(o, x);
        }
        break;
      case ts.getType():
        o.push(
          PO(
            k,
            Yn(k.children, t)
          )
        );
        break;
      case dr.getType():
        o.push(NO(l));
        break;
      case no.getType():
        Sc?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Sc?.error(`Unexpected node type '${l.type}'!`);
    }
  }), o && o.length > 0 ? o : void 0;
}
function cT(e) {
  const t = e.findIndex((n) => Jc(n));
  if (t >= 0) {
    const n = e.slice(0, t), r = e[t].children, i = cT(e.slice(t + 1));
    e = [...n, ...r, ...i];
  }
  return e;
}
const Ms = {
  initialize: gO,
  deserializeEditorState: mO
}, IO = /^sd\d*$/, LO = /* @__PURE__ */ new Set([
  ...Object.entries(wu).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === T.Paragraph && !IO.test(e)
  ).map(([e]) => e),
  "qa"
]);
function qO(e, t) {
  const n = [];
  let r;
  for (const [i, s] of e.entries()) {
    if (wd(s) || Hb(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (!kM(s)) {
      t && _c(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), r ? r.children.push(s) : n.push(s);
      continue;
    }
    if (Od(s) && LO.has(s.marker) && !_c(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (s.children.length === 0) {
      r ? r.children.push(s) : n.push(s);
      continue;
    }
    lT(s.children, t).forEach((o) => {
      const a = DO(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        r ? r.children.push(a) : n.push(a);
        return;
      }
      r = KO(o.verse), n.push(r), a && r.children.push(a);
    });
  }
  return n;
}
function lT(e, t) {
  const n = [{ nodes: [] }], r = (i) => n[n.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (uT(i)) {
      n.push({ verse: i, nodes: [i] });
      return;
    }
    if (Ui(i)) {
      const s = lT(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && r(ym(i, o.nodes)), a.forEach((c) => {
        n.push({ verse: c.verse, nodes: [ym(i, c.nodes)] });
      });
      return;
    }
    t && _c(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), r(i);
  }), n;
}
function ym(e, t) {
  return { ...e, children: t };
}
function uT(e) {
  return Ok(e) && e.number !== "";
}
function _c(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((n) => uT(n) || _c(n)) : !1;
}
function DO(e, t, n) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [Dr]: { ...e[Dr], [Ak.key]: n }
    };
}
function KO(e) {
  return {
    type: dc,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Pk
  };
}
const bm = pT([]), UO = {
  type: wy.getType(),
  version: 1
};
let Ip = [], ke, Hi, fT, hn;
function BO(e, t) {
  Ip = [], jO(e), VO(t);
}
function FO(e = 0) {
}
function zO(e, t) {
  ke = t ?? al();
  let n;
  return e ? (e.type !== rr && hn?.warn(`This USJ type '${e.type}' didn't match the expected type '${rr}'.`), e.version !== nr && hn?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${nr}'.`
  ), e.content.length > 0 ? (n = kf($r(e.content)), Xo(ke) && (n = qO(n, hn))) : n = [bm]) : n = [bm], fT?.(Ip), {
    root: {
      children: n,
      direction: null,
      format: "",
      indent: 0,
      type: "root",
      version: 1
    }
  };
}
function jO(e) {
  e && (Hi = e), e?.addMissingComments && (fT = e.addMissingComments);
}
function VO(e) {
  e && (hn = e);
}
function dT() {
  return Kt(ke);
}
function WO(e, t) {
  let { marker: n } = e;
  n !== Ho && hn?.warn(`Unexpected book marker '${n}'!`), n = n ?? Ho;
  const { code: r } = e;
  (!r || !Pn.isValidBookCode(r)) && hn?.warn(`Unexpected book code '${r}'!`);
  const i = [];
  ke?.markerMode === "editable" || ke?.markerMode === "visible" ? i.push(
    fn("marker", Ve(n) + " " + r + q)
  ) : ke?.hasGutterParaMarkers && i.push(fn("marker", Ve(n) + q, !0)), i.push(...t);
  const s = pt(e, cM);
  return ct({
    type: Pn.getType(),
    marker: n,
    code: r ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: zb
  });
}
function HO(e) {
  let { marker: t } = e;
  t !== oc && hn?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? oc;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, o = pt(e, f0);
  let a;
  ke?.markerMode === "visible" && (a = !0);
  const c = [
    nn(jn(t, n) ?? "")
  ];
  return ke?.markerMode === "editable" && u$(i, s, c), ke?.markerMode === "editable" ? ct({
    type: Ln.getType(),
    marker: t,
    number: n ?? "",
    sid: r,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    children: c,
    direction: null,
    format: "",
    indent: 0,
    version: bb
  }) : ct({
    type: Dn.getType(),
    marker: t,
    number: n ?? "",
    showMarker: a,
    sid: r,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Ub
  });
}
function GO(e) {
  let { marker: t } = e;
  t !== sc && hn?.warn(`Unexpected verse marker '${t}'!`), t = t ?? sc;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, a = (qA(ke) ?? Jt).getType(), c = ke?.markerMode === "editable" ? cb : wk;
  let l, u;
  ke?.markerMode === "editable" ? l = jn(t, n) : ke?.markerMode === "visible" && (u = !0);
  const f = pt(e, o0);
  return ct({
    type: a,
    text: l,
    ...l === void 0 ? void 0 : { detail: 0, format: 0, mode: "normal", style: "" },
    marker: t,
    number: n ?? "",
    sid: r,
    altnumber: i,
    pubnumber: s,
    showMarker: u,
    unknownAttributes: f,
    version: c
  });
}
function JO(e, t = [], n = !1) {
  let { marker: r } = e;
  ze.isValidMarker(r, Hi?.extraValidMarkers) || hn?.warn(`Unexpected char marker '${r}'!`), r = r ?? "";
  const i = [];
  if (ke?.markerMode === "editable") {
    const [a] = t;
    zr(a) ? a.text = q + a.text : a && t.unshift(nn(q));
  }
  t.length === 0 && t.push(nn(Ot)), mf(e.marker ?? "", i, n), i.push(...t);
  const s = e.closed === "false", o = pt(e, r0);
  return s || o$(r, o, i), s || yf(e.marker ?? "", i, !1, n), ct({
    type: ze.getType(),
    marker: r,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: ob
  });
}
function pT(e) {
  return {
    type: ai.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Sb
  };
}
function YO(e, t = []) {
  let { marker: n } = e;
  Dt.isValidMarker(n, Hi?.extraValidMarkers) || hn?.warn(`Unexpected para marker '${n}'!`), n = n ?? zn;
  const r = [];
  if (as(ke) && (ke?.markerMode === "editable" ? r.push(
    en(n),
    nn(q, Er, "token")
  ) : (ke?.markerMode === "visible" || ke?.hasGutterParaMarkers) && r.push(
    fn(
      "marker",
      Ve(n) + q,
      ke?.hasGutterParaMarkers
    )
  )), r.push(...t), dT()) {
    const s = r.find(
      (o) => !Zs(o) && !(zr(o) && o.text === q)
    );
    zr(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = pt(e, uM);
  return ct({
    type: Dt.getType(),
    marker: n,
    unknownAttributes: i,
    children: r,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Vb
  });
}
function Lp() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function XO(e, t = []) {
  const n = pt(e, y0);
  return ct({
    ...Lp(),
    type: ns.getType(),
    unknownAttributes: n,
    children: t,
    version: vb
  });
}
function QO(e, t = []) {
  const n = pt(e, QM), r = e.marker ?? Vu, i = [];
  return ke?.markerMode === "editable" ? i.push(
    en(r),
    nn(q, Er, "token")
  ) : (ke?.markerMode === "visible" || ke?.hasGutterParaMarkers) && i.push(
    fn(
      "marker",
      Ve(r) + q,
      ke?.hasGutterParaMarkers
    )
  ), i.push(...t), ct({
    ...Lp(),
    type: ss.getType(),
    marker: r,
    unknownAttributes: n,
    children: i,
    version: Tk
  });
}
function ZO(e, t = []) {
  const { marker: n, align: r, colspan: i } = e, s = [], o = n ?? Wu, a = Lb(o, i) ?? o;
  ke?.markerMode === "editable" ? s.push(
    en(a),
    nn(q, Er, "token")
  ) : (ke?.markerMode === "visible" || ke?.hasGutterParaMarkers) && s.push(
    fn(
      "marker",
      Ve(a) + q,
      ke?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = pt(
    e,
    eE
  );
  return ct({
    ...Lp(),
    type: os.getType(),
    marker: o,
    align: r,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Sk
  });
}
function e$(e, t) {
  const n = _M(t);
  let r = () => {
  };
  return Hi?.noteCallerOnClick && (r = Hi.noteCallerOnClick), ct({
    type: En.getType(),
    caller: e,
    previewText: n,
    onClick: r,
    version: Dk
  });
}
function t$(e, t) {
  let { marker: n } = e;
  Je.isValidMarker(n, Hi?.extraValidMarkers) || hn?.warn(`Unexpected note marker '${n}'!`), n = n ?? dd;
  const { category: r } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : bp(ke?.noteMode), a = pt(e, b_), c = ke?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ke?.markerMode === "editable" ? (l = en(n, "opening", !1, c), s || (u = en(n, "closing", !1, c))) : ke?.markerMode === "visible" && (l = fn("marker", Ve(n) + " "), s || (u = fn("marker", ot(n))));
  const f = [];
  let d;
  if (l && f.push(l), ke?.markerMode === "editable" && !o)
    d = nn(Mt(i), void 0, c), d.detail = jy, f.push(d), l$(r, f), f.push(...t);
  else {
    const p = nn(q, Er, "token");
    d = e$(i, t), f.push(d, p, ...t.flatMap(n$(p)));
  }
  return u && f.push(u), ct({
    type: Je.getType(),
    marker: n,
    caller: i,
    isCollapsed: o,
    category: r,
    unknownAttributes: a,
    children: f,
    direction: null,
    format: "",
    indent: 0,
    version: Gy
  });
}
function n$(e) {
  return (t) => $b(t) ? [t] : [t, e];
}
function r$(e) {
  let { marker: t } = e;
  (!t || !sr.isValidMarker(t, Hi?.extraValidMarkers)) && hn?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: n, eid: r } = e, i = pt(e, fd), s = fb(e);
  return ct({
    type: sr.getType(),
    marker: t,
    sid: n,
    eid: r,
    unknownAttributes: i,
    attributeOrder: s,
    version: Vy
  });
}
function km(e, t = []) {
  return {
    type: gt.getType(),
    typedIDs: { [wt]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function i$(e, t) {
  const { marker: n } = e, r = e.type, i = pt(e, p0), s = [];
  if (ke?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Xc(
      r,
      n,
      i
    );
    o && s.push(fn("marker", o)), a && s.push(fn("attribute", a)), s.push(...t), c && s.push(fn("attribute", c)), l && s.push(fn("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    zr(o) && (o.mode = "token");
  }), ct({
    type: ts.getType(),
    tag: r,
    marker: n,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: xb
  });
}
function s$(e) {
  return {
    type: dr.getType(),
    marker: e,
    text: Po(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ke?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: lk
  };
}
function en(e, t = "opening", n = !1, r = "normal") {
  return {
    type: Wn.getType(),
    marker: e,
    markerSyntax: t,
    // Emit the flag only for nested glyphs; absence means non-nested (see MarkerNode.exportJSON).
    ...n ? { nested: !0 } : {},
    text: "",
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
}
function nn(e, t = void 0, n = "normal") {
  const r = {
    type: st.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: n,
    style: "",
    version: 1
  };
  return t !== void 0 && (r[Dr] = { textType: t }), r;
}
function fn(e, t, n = !1) {
  const r = {
    type: Hn.getType(),
    text: t,
    textType: e,
    version: Ob
  };
  return n && (r[Dr] = { [Ad.key]: !0 }), r;
}
function Zo(e, t) {
  return {
    type: Ar.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: nb
  };
}
function mf(e, t, n = !1) {
  ke?.markerMode === "editable" ? t.push(en(e, "opening", n)) : ke?.markerMode === "visible" && t.push(fn("marker", Ve(e, n)));
}
function yf(e, t, n = !1, r = !1) {
  ke?.markerMode === "editable" ? n ? t.push(en("", "selfClosing")) : t.push(en(e, "closing", r)) : ke?.markerMode === "visible" && t.push(
    fn(
      "marker",
      n ? ot("") : ot(e, r)
    )
  );
}
function o$(e, t, n) {
  if (ke?.markerMode !== "editable" || !t) return;
  const r = Qn(t, Qs(e));
  r && n.push(nn(r, "attribute"));
}
function xm(e, t) {
  if (e.type !== "ms" || ke?.markerMode !== "editable" && ke?.markerMode !== "visible") return;
  const { marker: n, sid: r, eid: i } = e, s = pt(e, fd), o = db(
    r,
    i,
    s,
    fb(e)
  ), a = Qn(o, da(n ?? ""));
  if (!a) return;
  const c = q + a;
  ke?.markerMode === "editable" ? t.push(nn(c, "attribute")) : t.push(fn("attribute", c));
}
function a$(e, t) {
  const n = e.marker ?? "";
  if (ke?.markerMode === "editable") {
    const r = [];
    mf(n, r), xm(e, r), yf(n, r, !0), t.push(Zo("milestone", r));
  } else
    mf(n, t), xm(e, t), yf(n, t, !0);
}
function Tm(e, t, n) {
  t !== void 0 && n.push(
    Zo(e, [
      en(e, "opening"),
      nn(q + t, "attribute"),
      en(e, "closing")
    ])
  );
}
function c$(e, t) {
  ke?.markerMode === "editable" && (Tm("va", e.altnumber, t), Tm("vp", e.pubnumber, t));
}
function l$(e, t) {
  e !== void 0 && t.push(
    Zo("cat", [
      en("cat", "opening"),
      nn(q + e, "attribute"),
      en("cat", "closing")
    ])
  );
}
function u$(e, t, n) {
  e !== void 0 && n.push(
    Zo("ca", [
      en("ca", "opening"),
      nn(q + e, "attribute"),
      en("ca", "closing")
    ])
  ), t !== void 0 && n.push(
    Zo("cp", [
      en("cp", "opening"),
      nn(q + t, "attribute")
    ])
  );
}
function vm(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((n) => n - t);
}
function f$(e, t) {
  const n = e.indexOf(t, 0);
  n > -1 && e.splice(n, 1);
}
function Cm(e, t) {
  t.marker === Di && t.sid !== void 0 && e.push(t.sid), t.marker === Os && t.eid !== void 0 && f$(e, t.eid);
}
function bf(e, t, n = !1, r = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = n ? [km(o, [...r])] : o, c = e[i];
  Cm(r, c);
  const l = bf(
    e.slice(i + 1, s),
    vm(t, i + 1),
    c.marker === Di,
    r
  ), u = km(l, [...r]), f = e[s];
  Cm(r, f);
  const d = bf(
    e.slice(s + 1),
    vm(t, s + 1),
    f.marker === Di,
    r
  );
  return [...a, u, ...d];
}
function $r(e, t = !1) {
  const n = [], r = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && r.push(nn(dT() ? hO(i) : i));
    else if (!i.type)
      hn?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Pn.getType():
          r.push(WO(i, $r(i.content)));
          break;
        case Ln.getType():
          r.push(HO(i));
          break;
        case Ft.getType():
          ke?.hasSpacing || r.push(UO), r.push(GO(i)), c$(i, r);
          break;
        case ze.getType():
          r.push(
            JO(i, $r(i.content, !0), t)
          );
          break;
        case Dt.getType():
          r.push(YO(i, $r(i.content)));
          break;
        case Je.getType():
          r.push(t$(i, $r(i.content)));
          break;
        case sr.getType():
          Wy(i.marker ?? "") && (n.push(r.length), i.sid !== void 0 && Ip?.push(i.sid)), r.push(r$(i)), a$(i, r);
          break;
        case dr.getType():
          r.push(s$(i.marker ?? ""));
          break;
        case Tb:
          r.push(XO(i, $r(i.content)));
          break;
        case xk:
          r.push(QO(i, $r(i.content)));
          break;
        case Ck:
          r.push(ZO(i, $r(i.content)));
          break;
        default:
          hn?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), r.push(i$(i, $r(i.content)));
      }
  }), bf(r, n);
}
function kf(e) {
  const t = e.findIndex(
    (r) => wd(r) || Hb(r) || Od(r) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    k0(r)
  );
  if (t >= 0) {
    const r = kf(e.slice(0, t)), i = e[t], s = kf(e.slice(t + 1));
    return [...r, i, ...s];
  } else if (e.some((r) => "text" in r && "mode" in r || Ok(r)))
    return [pT(e)];
  return e;
}
const ar = {
  initialize: BO,
  reset: FO,
  serializeEditorState: zO
};
function hT(e) {
  if (e && !N(e)) {
    if (v(e)) return e;
    if (A(e))
      for (const t of e.getChildren()) {
        const n = hT(t);
        if (n) return n;
      }
  }
}
function d$() {
  const e = w();
  if (!E(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), n = e.anchor.offset;
    if ((v(t) && !N(t) ? ji(t) : void 0) && v(t)) {
      const i = Le(" ");
      if (n <= 0) t.insertBefore(i);
      else if (n >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(n);
        o.insertAfter(i);
      }
      Fs(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = hT(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[n] === " " ? (t.select(n + 1, n + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of gT(e)) {
    if (!ji(t)) continue;
    Fs(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const n = t.getLatest(), r = n.getTextContent();
    r.startsWith(q) && n.setTextContent(r.slice(q.length));
  }
  return !0;
}
function gT(e) {
  const [t, n] = ed(e), [r, i] = e.isBackward() ? [n, t] : [t, n], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || N(a) || de(a, be) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? r : 0, f = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= f) return;
    const d = a.splitText(u, f), p = d.length === 3 ? d[1] : f === l ? d[d.length - 1] : d[0];
    p && o.push(p);
  }), o;
}
function mT(e) {
  let t = e;
  for (; K(t) || se(t); ) t = t.getParent();
  return t;
}
function yT(e) {
  const t = mT(e.getParent());
  return vt(t) ? t : void 0;
}
function p$() {
  const e = w();
  if (!E(e)) return !1;
  const t = e.focus.getNode();
  return ji(t) ? !!yT(t) : !1;
}
function bT(e) {
  const t = Le(""), n = e.getNode(), r = e.offset;
  if (v(n))
    if (r <= 0) n.insertBefore(t);
    else if (r >= n.getTextContentSize()) n.insertAfter(t);
    else {
      const [, o] = n.splitText(r);
      o.insertBefore(t);
    }
  else {
    const o = e.getNode(), a = A(o) ? o : o.getParent(), c = A(o) ? o.getChildAtIndex(r) : o;
    if (c) c.insertBefore(t);
    else if (a) a.append(t);
    else return { parent: void 0, moving: [] };
  }
  for (let o = t.getParent(); ; o = t.getParent())
    if (K(o)) Fs(t, { renderGlyphs: !0 });
    else if (!se(o) || !h$(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function h$(e, t) {
  const n = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (n.length === 0)
    return t.insertAfter(e), !0;
  const r = w();
  if (!E(r)) return !1;
  const i = t.insertNewAfter(r, !1);
  return i ? (i.append(...n), t.insertAfter(e), !0) : !1;
}
function kT(e) {
  const t = e.anchor.getNode();
  if (N(t) && !Yd(t, e.anchor.offset)) {
    const n = t.getParent();
    if (K(n) && t.is(n.getLastChild())) {
      n.selectNext(0, 0);
      const r = w();
      return E(r) && r.isCollapsed() ? r : void 0;
    }
  }
  return e;
}
function xT() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = kT(e);
  if (!t) return !1;
  const n = t.anchor.getNode();
  if (!v(n) || N(n) || !ji(n)) return !1;
  const r = yT(n);
  if (!r) return !1;
  const { moving: i } = bT(t.anchor), s = r.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; se(o); ) o = o.getFirstChild() ?? void 0;
  return K(o) ? nl(o) : s.select(0, 0), !0;
}
const TT = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Gb(Ce().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = tk(e), n = tp(t);
      let r, i = !1;
      if (!n)
        r = "1";
      else {
        const o = n.getNumber();
        r = EM(0, o);
        const a = KE(n);
        if (a) {
          const c = a.getNumber();
          i = r === c || AM(c) && Ld(parseInt(r, 10), c);
        }
      }
      return { content: [{
        type: "verse",
        marker: "v",
        number: r
      }], highlightInserted: i };
    }
  }
};
function xf(e, t) {
  return Je.isValidMarker(e, t) || !!TT[e] || Dt.isValidMarker(e, t) || ze.isValidMarker(e, t);
}
function g$(e, t) {
  return ze.isNoteContentMarker(e) ? !1 : ze.isValidMarker(e, t);
}
function vT(e, t, n, r, i, s) {
  const o = cx(
    e,
    void 0,
    void 0,
    t,
    r ?? al(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (n.current = o.getKey()), o?.getKey();
}
function Tf(e, t, n, r, i, s, o) {
  if (Je.isValidMarker(e, r?.extraValidMarkers)) {
    let l;
    return { action: (f) => {
      f.editor.update(() => {
        l = vT(
          e,
          f.reference,
          t,
          n,
          r,
          i
        );
      }, s);
    }, label: void 0, getInsertedNoteKey: () => l };
  }
  const a = T$(e, r?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      E(u) && (Xd(u), l.noteText = u.getTextContent());
      const { content: f, highlightInserted: d } = a.action(l), p = hg(f, ar, n), h = Ul(p);
      if (E(u)) {
        const g = u.anchor.getNode(), m = g.getParent(), y = ji(g), k = u.anchor.key === u.focus.key;
        if (K(h) && y && k && !bu(h, o))
          b$(
            u,
            h,
            g,
            n?.markerMode === "editable"
          );
        else if (K(h) && !k && !bu(h, o) && k$(u))
          x$(u, h, n?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          v$(
            u,
            () => Ul(p)
          );
        else if (A(h) && !h.isInline()) {
          const x = u.insertParagraph();
          if (x) {
            const S = x.getChildren();
            h.append(...S), x.replace(h), vt(h) && cs(h) || h.selectStart();
          }
        } else if (K(h) && v(g) && !N(g) && K(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        bu(h, o)) {
          const x = g.getParent();
          if (K(x)) {
            const S = u.anchor.offset;
            if (S === 0) g.insertBefore(h);
            else if (S >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [F] = g.splitText(S);
              F.insertAfter(h);
            }
            h.getChildren().forEach((F) => {
              N(F) && F.setNested(!0);
            });
            const _ = h.getChildren().find((F) => v(F) && !N(F));
            _ && v(_) ? _.select(
              _.getTextContentSize(),
              _.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (v(g) && !N(g) && u.isCollapsed() && (L(m) || K(m) && L(m.getParent()))) {
          const x = K(m) ? m : void 0, S = x ? m$(g, u.anchor.offset) : [];
          let F = (x ?? g).insertAfter(h);
          if (bn(h)) {
            const U = {
              ...n || al(),
              markerMode: "hidden"
            }, W = hg(
              f,
              ar,
              U
            ), ae = Ul(W);
            F = F.insertAfter(ae);
          }
          if (S.length > 0 && x) {
            const U = Mc(x).append(...S);
            F.insertAfter(U), x.isEmpty() && x.remove();
          } else v(F.getNextSibling()) || F.insertAfter(zi());
          A(F) && F.selectEnd();
        } else if (u.insertNodes([h]), O$(h), d) {
          const x = Ay();
          x.add(h.getKey()), Fn(x);
        } else if (K(h)) {
          const x = h.getChildren().find((S) => v(S) && !N(S));
          x && v(x) ? x.select(
            x.getTextContentSize(),
            x.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const x = h.getNextSibling();
          x ? x.selectStart() : h.selectStart();
        }
      } else
        u?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function m$(e, t) {
  const n = e.getTextContentSize();
  let r;
  return t <= 0 ? r = e : t >= n ? r = e.getNextSibling() : r = e.splitText(t)[1] ?? e.getNextSibling(), r ? [r, ...r.getNextSiblings()] : [];
}
function bu(e, t) {
  return ((t ?? pc).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function y$(e, t) {
  t && e.getChildren().forEach((i) => {
    N(i) && i.setNested(!0);
  }), e.getChildren().some((i) => N(i) && i.getMarkerSyntax() === "closing") || e.append(Lt(e.getMarker(), "closing", t));
  const r = e.getUnknownAttributes();
  if (r?.closed === "false") {
    const i = { ...r };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function b$(e, t, n, r) {
  let i = t;
  if (e.anchor.type === "element" && K(n)) {
    const o = n.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : n.append(t);
  } else if (e.isCollapsed() || !v(n)) {
    const o = e.anchor.offset;
    if (v(n) && o > 0 && o < n.getTextContentSize()) {
      const [a] = n.splitText(o);
      a.insertAfter(t);
    } else v(n) && o >= n.getTextContentSize() ? n.insertAfter(t) : n.insertBefore(t);
  } else {
    const [o, a] = Hs(e);
    let c = n;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Fs(i, { renderGlyphs: r }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !N(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !N(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function k$(e) {
  let t, n = !1;
  for (const r of e.getNodes()) {
    if (N(r) || K(r)) continue;
    if (!v(r) || r.getType() !== st.getType() || de(r, be) === "attribute") return !1;
    const i = aE(r);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    ji(r) && (n = !0);
  }
  return n;
}
function x$(e, t, n) {
  const r = gT(e);
  if (r.length === 0) return;
  r.forEach((a) => {
    if (!ji(a)) return;
    Fs(a, { renderGlyphs: n });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = r[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !N(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  r.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function T$(e, t) {
  let n = TT[e];
  return n || (Dt.isValidMarker(e, t) ? n = {
    action: () => ({ content: [{ type: Dt.getType(), marker: e, content: [] }] })
  } : ze.isValidMarker(e, t) && (n = {
    action: () => {
      const r = { type: ze.getType(), marker: e };
      return (ze.isValidFootnoteMarker(e) || ze.isValidCrossReferenceMarker(e)) && (r.closed = "false"), { content: [r] };
    }
  })), n;
}
function v$(e, t) {
  const n = e.getNodes(), [r, i] = Hs(e);
  let s;
  n.forEach((o, a) => {
    if (A(s) && s.isParentOf(o))
      return;
    const c = CT(
      o,
      a === 0,
      a === n.length - 1,
      r,
      i
    );
    if (!c) {
      s = void 0;
      return;
    }
    let l = !1;
    s || (s = t(), c.insertBefore(s), l = !0, K(s) && s.getChildren().some((f) => N(f) && f.getMarkerSyntax() === "opening") && y$(s, K(s.getParent()))), S$(c, s, l);
  }), (v(s) || A(s)) && s.selectEnd();
}
function Hs(e) {
  const t = e.anchor.offset, n = e.focus.offset;
  return e.isBackward() ? [n, t] : [t, n];
}
function qp(e) {
  return se(e) || L(e) || L(e.getParent());
}
function CT(e, t, n, r, i) {
  if (!qp(e)) {
    if (v(e))
      return C$(e, t, n, r, i);
    if (A(e) && e.isInline())
      return e;
  }
}
function C$(e, t, n, r, i) {
  const s = e.getTextContentSize(), o = t ? r : 0, a = n ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function S$(e, t, n) {
  if (v(t)) {
    const r = vf(e, t);
    t.setTextContent(r), e.remove();
  } else if (A(t)) {
    const r = t.getChildren(), i = r.find(
      (s) => N(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), n && r.filter((s) => !N(s)).forEach((s) => s.remove());
    else if (n) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    vf(e, t), n && K(t) && t.getChildren().some((s) => N(s)) && v(e) && !N(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function vf(e, t) {
  let n = e.getTextContent();
  if (v(e) && t.isInline() && n.startsWith(" ") && n.trimStart() !== "") {
    n = n.trimStart(), e.setTextContent(n);
    const r = t.getPreviousSibling();
    Zd(r), v(r) || t.insertBefore(Le(" "));
  }
  return n;
}
function ST(e, t, n) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), f = e.anchor.offset, d = Gi(u, t);
    if (!d) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (Sm(d, n), v(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), m = Math.max(0, Math.min(f - g, h)), y = w();
      E(y) && y.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const r = e.getNodes(), i = e.isBackward(), [s, o] = Hs(e);
  if (!Kp(r, t, s, o)) return !1;
  const a = Dp(r, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const f = Gi(u, t);
    if (!f || c.has(f.getKey())) return;
    c.add(f.getKey());
    const d = AT(f, a);
    d && (Sm(d, n), l = !0);
  }), PT(a, i), l;
}
function Sm(e, t) {
  e.getChildren().forEach((r) => {
    kn(r) && r.remove();
  });
  const n = e.getChildren();
  if (n.length === 0 || e.getTextContent() === Ot) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && n.forEach((r) => {
    const i = r.getTextContent();
    v(r) && i.startsWith(q) && r.setTextContent(i.slice(q.length));
  }), Au(e);
}
function Dp(e, t, n) {
  const r = [];
  return e.forEach((i, s) => {
    const o = CT(
      i,
      s === 0,
      s === e.length - 1,
      t,
      n
    );
    v(o) && r.push(o);
  }), r;
}
function Gi(e, t) {
  let n = e, r;
  for (; n && !vt(n); ) {
    if (L(n)) return;
    !r && K(n) && (t === void 0 || n.getMarker() === t) && (r = n), n = n.getParent();
  }
  return r;
}
function _T(e) {
  const t = Ze(
    e,
    (n) => L(n) || vt(n)
  );
  return L(t);
}
function MT(e) {
  return e.filter(
    (t) => !qp(t) && (v(t) || A(t) && t.isInline())
  );
}
function _$(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || qp(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? n : o;
    a === 0 && c === o && r.add(i.getKey());
  }), r;
}
function M$(e, t, n) {
  return e.getChildren().some(
    (r) => A(r) && t.some((i) => r.isParentOf(i)) && !ET(r, n)
  );
}
function Kp(e, t, n, r, i) {
  const s = MT(e), o = _$(e, n, r), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Gi(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !M$(l, s, o);
  });
}
function ET(e, t) {
  return e.getAllTextNodes().every((n) => t.has(n.getKey()) || kn(n));
}
function AT(e, t) {
  const n = new Set(t.map((l) => l.getKey())), r = e.getChildren(), i = [];
  for (const [l, u] of r.entries())
    if (n.has(u.getKey()))
      i.push(l);
    else if (A(u) && t.some((f) => u.isParentOf(f))) {
      if (!ET(u, n)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && kn(r[s - 1]) && (s -= 1), o < r.length - 1 && kn(r[o + 1]) && (o += 1), s === 0 && o === r.length - 1) return e;
  const a = r.slice(o + 1);
  a.length > 0 && e.insertAfter(Mc(e).append(...a));
  const c = r.slice(0, s);
  return c.length > 0 && e.insertBefore(Mc(e).append(...c)), e;
}
function Mc(e) {
  return $S(e);
}
function PT(e, t) {
  const n = w(), r = e[0], i = e[e.length - 1];
  if (!E(n) || !r.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? n.setTextNodeRange(i, s, r, 0) : n.setTextNodeRange(r, 0, i, s);
}
function E$(e, t, n) {
  if (e.isCollapsed()) {
    const l = Gi(e.anchor.getNode(), n);
    return !l || l.getMarker() === t ? !1 : (Qh(l, t), !0);
  }
  const r = e.getNodes(), [i, s] = Hs(e);
  if (!Kp(r, n, i, s, t)) return !1;
  const o = Dp(r, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Gi(l, n);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const f = AT(u, o);
    f && (Qh(f, t), c = !0);
  }), c;
}
function A$(e, t, n, r) {
  if (e.isCollapsed()) return !1;
  const i = n?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = Hs(e);
  if (!!!i?.some(
    (m) => Kp(s, m, o, a)
  ) && !P$(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const y = w();
    E(y) && ST(y, m, r) && (l = !0);
  });
  const u = w();
  if (!E(u)) return l;
  const f = u.isBackward(), [d, p] = Hs(u), h = Dp(
    u.getNodes(),
    d,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (m) => !_T(m) && !Gi(m, t)
  );
  return g.length > 0 && (N$(g).forEach((m) => w$(m, t)), l = !0), PT(h, f), l;
}
function P$(e, t) {
  return MT(e).some(
    (n) => !_T(n) && !Gi(n, t)
  );
}
function N$(e) {
  const t = [];
  let n;
  return e.forEach((r) => {
    const i = n?.[n.length - 1];
    n && i?.getNextSibling()?.is(r) ? n.push(r) : (n = [r], t.push(n));
  }), t;
}
function w$(e, t) {
  const n = e[0].getPreviousSibling(), r = e[e.length - 1].getNextSibling(), i = [n, r].find(
    (a) => K(a) && a.getMarker() === t
  ), s = i ? Mc(i) : Ur(t);
  e[0].insertBefore(s), s.append(...e), i === n || vf(e[0], s);
}
function O$(e) {
  Ae(e) && (Zd(e.getPreviousSibling()), Rk(e.getNextSibling()));
}
const NT = {
  chapter: "chapter",
  verse: "verse",
  char: "char",
  para: "para",
  typedMark: "editor-typed-mark",
  typedMarkOverlap: "editor-typed-markOverlap",
  placeholder: "editor-placeholder",
  text: {
    bold: "editor-text-bold",
    italic: "editor-text-italic",
    underline: "editor-text-underline",
    strikethrough: "editor-text-strikethrough",
    underlineStrikethrough: "editor-text-underlineStrikethrough"
  }
}, _m = "psc-active-text", La = "psc-empty-text";
function $$({ viewOptions: e }) {
  const [t] = ve(), n = ne(void 0), r = e?.hasActiveTextFocusBox ?? !1;
  return G(() => {
    if (!r) return;
    function i(o) {
      n.current && t.getElementByKey(n.current)?.classList.remove(_m), n.current = o, o && t.getElementByKey(o)?.classList.add(_m);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        zc,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${La}`);
          if (!c) return !1;
          const l = Zi(c);
          if (!Ae(l)) return !1;
          const u = l.getParent();
          if (!A(u)) return !1;
          const f = l.getIndexWithinParent() + 1;
          return u.select(f, f), !1;
        },
        Qt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const f = ku(), d = R$(), p = [], h = [];
          return Ce().getChildren().forEach((g) => {
            if (!A(g)) return;
            const { emptyKeys: m, nonEmptyKeys: y } = L$(g);
            p.push(...m), h.push(...y);
          }), { newActiveKey: f, activeVerseKey: d, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== n.current && i(a), l.forEach((f) => {
          f === c ? t.getElementByKey(f)?.classList.remove(La) : t.getElementByKey(f)?.classList.add(La);
        }), u.forEach((f) => t.getElementByKey(f)?.classList.remove(La));
      }),
      t.registerCommand(
        rd,
        () => (i(void 0), !1),
        Qt
      ),
      t.registerCommand(
        RS,
        () => {
          const o = t.getEditorState().read(ku);
          return o !== n.current && i(o), !1;
        },
        Qt
      )
    ];
    return i(t.getEditorState().read(ku)), tt(...s);
  }, [t, r]), null;
}
function ku() {
  return I$(w() ?? void 0)?.getKey();
}
function R$() {
  const e = w();
  if (!E(e)) return;
  const t = e.anchor, n = t.getNode(), r = n.getTopLevelElement();
  if (!A(r)) return;
  let i;
  if (n.is(r))
    i = t.offset;
  else {
    let a = n;
    for (; a && !a.getParent()?.is(r); )
      a = a.getParent() ?? void 0;
    if (!a) return;
    i = a.getIndexWithinParent() + 1;
  }
  const s = r.getChildren();
  let o;
  for (let a = 0; a < i && a < s.length; a++)
    Ae(s[a]) && (o = s[a].getKey());
  return o;
}
function I$(e) {
  if (E(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function L$(e) {
  const t = e.getChildren(), n = [], r = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Ae(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Ae(c)) break;
      if (!(qt(c) || N(c)) && c.getTextContent().replaceAll(Uo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? r : n).push(s.getKey());
  }
  return { emptyKeys: n, nonEmptyKeys: r };
}
function Cf(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function wT(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const n = e.getRootElement()?.ownerDocument.getSelection(), r = n?.anchorNode, i = n?.focusNode;
  return !!r && !!i && !_y(e, r, i);
}
function OT(e, t) {
  return e.length <= t ? e : e.slice(0, Up(e, t));
}
function Up(e, t) {
  if (t >= e.length) return e.length;
  let n = 0;
  for (const { index: r, segment: i } of KS(e)) {
    if (r + i.length > t) break;
    n = r + i.length;
  }
  return n;
}
const q$ = 16;
function D$(e, { $isHidden: t, $measure: n } = {}) {
  const r = (k) => t ? Bp(k, t).length : k.getTextContent().length;
  n ??= r;
  const i = w();
  if (!E(i) || i.isCollapsed() || n(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Ec(s), l = Ec(o), u = i.getNodes(), f = new Map(u.map((k) => [k.getKey(), B$(k)])), d = u.length > 0 ? f.get(u[0].getKey()) : void 0, p = d && K$(s, d) ? d : void 0, h = (k) => {
    const x = k > 0 ? U$(u, f, p, c, l, k, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), x ? i.focus.set(x.node.getKey(), x.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!x;
  };
  let g = Math.min(e, r(i));
  if (h(g) && n(i) <= e) return !0;
  let m = 0, y = 0;
  g -= 1;
  for (let k = 0; k < q$ && m <= g; k++) {
    const x = Math.floor((m + g) / 2);
    h(x) && n(i) <= e ? (y = x, m = x + 1) : g = x - 1;
  }
  return h(y), !0;
}
function Sf(e) {
  return e.isToken() || ba(e) || Ee(e.getParent());
}
function K$(e, t) {
  const n = A(t) ? t.getAllTextNodes()[0] : void 0;
  return !!n && Zt(n.getKey(), 0, "text").isBefore(e);
}
function U$(e, t, n, r, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, f;
  const d = /* @__PURE__ */ new Map(), p = (g) => {
    const m = t.get(g.getKey());
    return m && n?.is(m) ? void 0 : m;
  }, h = (g) => {
    let m = f ? f.endBefore : g;
    for (; ; ) {
      const y = F$(m, e, r);
      if (!y || !m || y.node.is(m.node)) return y;
      const k = p(y.node);
      if (!k || k.is(p(m.node))) return y;
      m = d.get(k.getKey());
    }
  };
  for (let g = 0; g <= a; g++) {
    const m = e[g], y = p(m);
    if (f && !f.node.is(y) && (u && f.node.isParentOf(u.node) && (u = f.endBefore), f = void 0), y && !f && (f = { node: y, endBefore: u }, d.set(y.getKey(), u)), !o?.(m)) {
      if (A(m) && !m.isInline()) {
        if (!l) {
          if (c + 1 > s) return h(u);
          c += 1;
        }
        l = !m.isEmpty();
        continue;
      }
      if (l = !1, v(m)) {
        const k = g === 0 ? r : 0, x = g === a ? i : m.getTextContentSize(), S = x - k, _ = Sf(m);
        if (_ && c + S > s) return h(u);
        if (!_ && c + S >= s) {
          const F = Up(m.getTextContent(), k + (s - c));
          return h({ node: m, offset: Math.max(k, F) });
        }
        c += S, u = { node: m, offset: x };
      } else if (xn(m) || Qi(m)) {
        const k = m.getTextContentSize();
        if (c + k > s) return h(u);
        c += k;
      }
    }
  }
  return h(u);
}
function B$(e) {
  let t;
  for (let n = e; n; n = n.getParent())
    (L(n) || Sp(n)) && (t = n);
  return t;
}
function F$(e, t, n) {
  if (!e) return e;
  const r = Ze(e.node, (m) => A(m) && !m.isInline()), i = A(r) ? r.getAllTextNodes() : [e.node], s = i.findIndex((m) => m.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let m = o; m <= a; m++)
    l.push(c.length), c += i[m].getTextContent();
  const u = l[s - o], f = u + e.offset, d = Up(c, f);
  if (d === f) return e;
  const p = (m) => t[0]?.is(m) ?? !1;
  if (Sf(e.node)) return { ...e, offset: p(e.node) ? n : 0 };
  if (d >= u) {
    const m = d - u;
    return m >= (p(e.node) ? n : 0) ? { ...e, offset: m } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((m) => m.is(h))) return;
  if (Sf(h))
    return { node: h, offset: p(h) ? n : 0 };
  const g = d - l[0];
  return g >= (p(h) ? n : 0) ? { node: h, offset: g } : void 0;
}
function Bp(e, t) {
  const n = e.getNodes(), r = n.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = r === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return n.forEach((l, u) => {
    if (!t(l)) {
      if (A(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, v(l)) {
        const f = l.getTextContent();
        o ? a += f : a += f.slice(
          u === 0 ? Ec(i) : 0,
          u === r ? Ec(s) : f.length
        );
      } else (xn(l) || Qi(l)) && (u !== r || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function _f(e) {
  const t = e.getParent();
  return !!t && Ze(t, (n) => L(n) && !!n.getIsCollapsed()) !== null;
}
function $T(e) {
  const t = /* @__PURE__ */ new Map(), n = (i) => {
    At(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (n(i), A(i)) for (const { node: s } of es(i)) n(s);
  let r = 0;
  for (const i of t.values()) r += i;
  return r;
}
function z$(e) {
  return e.getNodes().some(
    (t) => xn(t) || L(t) || Ae(t) || at(t) || Sp(t)
  );
}
function Ec(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return A(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Gn = String.raw`\w-`, RT = "a-z0-9", j$ = `[a-z][${RT}]*`, IT = new RegExp(
  String.raw`^\\(\+?[${Gn}]+)[ \u00A0]$`
), io = new RegExp(String.raw`^\\(\+?[${Gn}]+)$`), V$ = new RegExp(String.raw`^\\\+?[${Gn}]*\*$`), W$ = new RegExp(
  String.raw`^\\(\+?[${Gn}]+)(?:[ \u00A0]|$)`
), H$ = new RegExp(
  String.raw`^\\(\+?)([${Gn}]+)`
), LT = new RegExp(
  String.raw`^(?:[${Gn}]+[*\\]?|[*\\])$`
), G$ = new RegExp(
  String.raw`\\\+?[${Gn}]+(?:\\?\*|[ \u00A0])`
), qT = new RegExp(
  String.raw`\\\+?[${Gn}]*$`
), J$ = new RegExp(
  String.raw`^\\(${j$})( |$)`
), Y$ = new RegExp(
  String.raw`\\[${RT}+*]*$`,
  "i"
);
function DT(e) {
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1 || !ad(t.getMarker())?.includes("caller")) return !1;
  const n = t.getChildren();
  let r = 0;
  for (; r < n.length; ) {
    const i = n[r];
    if (!N(i) || i.getMarkerSyntax() !== "opening") break;
    r++;
  }
  return e.is(n[r]);
}
const Ac = "usfm:", KT = "usfmopen", UT = "usfmclosed";
function X$(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const Q$ = new RegExp(
  [Ac, KT, UT].map(X$).join("|")
), Z$ = "\uFEFF", eR = /^usfm_(.+)$/;
function tR(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function nR(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, n) => String.fromCharCode(Number.parseInt(n, 16))
  );
}
function rR(e) {
  return e.startsWith(Ac) ? nR(e.slice(Ac.length)).replace(/\r\n?|\n/g, " ") : "";
}
function BT(e) {
  for (const t of e.classList) {
    const n = eR.exec(t);
    if (n) return n[1];
  }
}
function iR(e) {
  const t = BT(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function sR(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let n = t.nextNode(); n; n = t.nextNode())
    if ((n.nodeValue ?? "").startsWith(Ac)) return !0;
  for (const n of e.querySelectorAll("*")) {
    const { classList: r } = n;
    if (!(!r.contains(KT) && !r.contains(UT)) && BT(n) !== void 0)
      return !0;
  }
  return !1;
}
function FT(e, t, n) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || n.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    n.push(rR(e.nodeValue ?? ""));
    return;
  }
  if (!tR(e)) return;
  const { classList: r } = e, i = (u) => e.childNodes.forEach((f) => FT(f, u, n));
  if (t) {
    i(!r.contains("include"));
    return;
  }
  if (r.contains("exclude")) {
    i(!0);
    return;
  }
  const s = e.tagName.toLowerCase();
  if (s === "br") {
    n.push(`
`);
    return;
  }
  if (s === "span" && e.getAttribute("class") === "attribute") {
    n.push(e.textContent ?? "");
    return;
  }
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? iR(e) : void 0, c = a !== void 0 && r.contains("usfmopen"), l = a !== void 0 && r.contains("usfmclosed");
  o && n.push(`
`), (c || l) && n.push(`\\${a} `), i(!1), l && n.push(`\\${a}*`), o && n.push(`
`);
}
function oR(e) {
  if (!Q$.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((r) => r.remove()), !sR(t)) return;
  const n = [];
  return t.childNodes.forEach((r) => FT(r, !1, n)), n.join("").replaceAll(Z$, "").replaceAll(q, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function aR(e) {
  const t = e.getTextContent(), n = t === q;
  if (!n && !t.includes(" ")) return;
  const r = de(e, be);
  if (r === "attribute" || r === Er || DT(e)) return;
  for (let a = e.getParent(); a; a = a.getParent())
    if (Ee(a) || et(a)) return;
  if (n) {
    cR(e) && e.setTextContent(" ");
    return;
  }
  const i = t.startsWith(q) && K(e.getParent()), s = i ? t.slice(1) : t, o = (i ? q : "") + s.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  o !== t && e.setTextContent(o);
}
function cR(e) {
  if (e.getMode() !== "normal" || de(e, be) !== void 0) return !1;
  const t = e.getParent();
  if (se(t) || Be(t) || L(t) && t.getChildren().some(At)) return !1;
  const n = e.getPreviousSibling();
  if ((K(t) || L(t)) && !n) return !1;
  const r = e.getNextSibling();
  return !N(n) && !se(n) && !se(r);
}
function lR(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((n) => n.remove()), t.querySelectorAll("br").forEach((n) => n.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((n) => n.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function uR(e, t) {
  if (!e) return !1;
  try {
    const n = JSON.parse(e);
    if (typeof n != "object" || n === null) return !1;
    const { namespace: r, nodes: i } = n;
    return r === t && Array.isArray(i);
  } catch {
    return !1;
  }
}
function Mf(e, t) {
  const n = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!n) return;
  const r = (a) => a.replace(/\r\n?/g, `
`), i = r(n.getData("text/plain")), s = n.getData("text/html"), o = s ? oR(s) : void 0;
  return {
    text: o ? r(o) : i || (s ? r(lR(s)) : ""),
    isInternal: uR(
      n.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Mm = String.raw`\\(?:\+?[${Gn}]+\*?|\*)`, fR = new RegExp(
  String.raw`(?<=${Mm})\u00A0|\u00A0(?=${Mm})`,
  "g"
);
function Fp(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(fR, " ").replaceAll(q, "~");
}
const zT = new RegExp(
  String.raw`\\c(?![${Gn}])[ \u00A0]*[^\s\\]*`,
  "g"
), jT = new RegExp(String.raw`\\id(?![${Gn}])[^\n\\]*`, "g"), dR = new RegExp(
  String.raw`^(?:${zT.source}|${jT.source})`
);
function zp(e) {
  return e.split(`
`).map((t) => {
    const n = t.replace(zT, "").replace(jT, "");
    return dR.test(t) && n.trim() === "" && t.trim() !== "" ? void 0 : n;
  }).filter((t) => t !== void 0).join(`
`);
}
function Ef(e) {
  if (v(e) && de(e, be) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Be(t)) return !0;
  return !1;
}
function pR(e) {
  return Ef(e.anchor.getNode()) || Ef(e.focus.getNode());
}
function hR(e) {
  const { anchor: t, focus: n } = e;
  return t.key === n.key && Ef(t.getNode());
}
function gR(e, t) {
  const r = hR(e) ? t : Fp(zp(t));
  r && e.insertText(r.replace(/\n/g, " "));
}
function mR(e, t = !1, n = () => {
}) {
  const r = Mf(e, It()._config.namespace);
  if (!r) return !1;
  const i = w(), s = E(i) && pR(i);
  if (!s && r.isInternal || t && E(i) && Rs(i))
    return !1;
  const { text: o } = r;
  if (!o || !E(i)) return !1;
  if (e?.preventDefault(), s)
    return gR(i, o), !0;
  const a = Fp(zp(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  n(), i.isCollapsed() || i.removeText();
  const l = It();
  return c.forEach((u, f) => {
    if (f > 0 && l.dispatchCommand(Ko, void 0), u === "") return;
    const d = w();
    E(d) && d.insertText(u);
  }), !0;
}
function yR(e) {
  if (e.getTextContent() !== q) return !1;
  const t = e.getParent();
  return L(t) ? !At(e.getPreviousSibling()) : !1;
}
function bR(e, t) {
  if (t || e.getTextContent() !== q) return "";
  const n = e.getParent();
  if (!L(n) || !At(e.getPreviousSibling())) return "";
  const r = n.getCategory();
  return r ? `\\cat ${r}\\cat*` : "";
}
function kR(e) {
  const t = e.getParent();
  return (L(t) ? t.getCaller() : void 0) || Bo;
}
function xR(e) {
  const t = e.getParent();
  return !t || li(t) === void 0;
}
function jp(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const n = t[0], r = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = ed(e);
  let l = "", u = !0;
  for (const f of t) {
    if (A(f) && !f.isInline()) {
      !u && xR(f) && (l += `
`), u = !f.isEmpty();
      continue;
    }
    if (u = !1, At(f))
      (f !== r || !e.isCollapsed()) && (l += (f === n ? "" : " ") + kR(f));
    else if (v(f)) {
      let d = f.getTextContent();
      f === n ? f === r ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (d = a < c ? d.slice(a, c) : d.slice(c, a)) : d = o ? d.slice(a) : d.slice(c) : f === r && (d = o ? d.slice(0, c) : d.slice(0, a)), l += yR(f) ? "" : d.replaceAll(q, " ") + bR(f, f === r);
    } else (xn(f) || Qi(f)) && (f !== r || !e.isCollapsed()) && (l += f.getTextContent().replaceAll(q, " "));
  }
  return l;
}
function VT(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function TR(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (n) => we(n) || Ee(n)
    )
  );
}
function vR(e) {
  const t = w();
  if (!E(t) || t.isCollapsed()) return;
  const n = jp(t), r = {
    "text/plain": n,
    "text/html": VT(n)
  };
  if (dl() || TR(t)) return r;
  const i = BS(e);
  return i && (r["application/x-lexical-editor"] = i), r;
}
function Em(e, t, n, r) {
  const i = w();
  if (!E(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Dx();
  const s = vR(t);
  return s ? (r !== void 0 && delete s["application/x-lexical-editor"], WT(e, t, i, s, n, r)) : !1;
}
function WT(e, t, n, r, i, s) {
  const o = Cf(s);
  if (o !== void 0 && wT(t, e)) return !1;
  const a = r["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), Af(e, t, { "text/plain": OT(a, o) })) : Af(
    e,
    t,
    r,
    i && t.isEditable() ? () => n.removeText() : void 0
  );
}
function Af(e, t, n, r) {
  const i = !n["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || US(t, null, n), r?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(n)) e.clipboardData.setData(s, o);
  return r?.(), !0;
}
function Pf(e, t) {
  const n = cl(t);
  if (!n?.end) return;
  const r = CR(e, t);
  if (r)
    return r.state.read(
      () => {
        const i = Qo(n, r.standardViewOptions);
        return i ? jp(i) : void 0;
      },
      { editor: r.editor }
    );
}
const xu = /* @__PURE__ */ new WeakMap();
function CR(e, t) {
  const n = e.getEditorState();
  if (xu.has(n)) {
    const i = xu.get(n);
    if (!i || i.viewOptions === t) return i;
  }
  const r = SR(n, t);
  return xu.set(n, r), r;
}
function SR(e, t) {
  const n = fp(cp);
  if (!n) return;
  const r = Ms.deserializeEditorState(e, t);
  if (!r) return;
  const i = sd({
    namespace: "markers-view-copy",
    nodes: [gt, ...fl],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    ar.serializeEditorState(r, n)
  );
  return { viewOptions: t, standardViewOptions: n, editor: i, state: s };
}
function _R({
  viewOptions: e,
  copyLimit: t
}) {
  const [n] = ve();
  return G(() => {
    const r = (i, s) => {
      const o = w();
      if (!E(o) || o.isCollapsed()) return !1;
      const a = Pf(n, e);
      return a === void 0 ? !1 : WT(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        n,
        o,
        { "text/plain": a, "text/html": VT(a) },
        s,
        t
      );
    };
    return tt(
      n.registerCommand(qs, (i) => r(i, !1), Ge),
      n.registerCommand(ir, (i) => r(i, !0), Ge)
    );
  }, [n, e, t]), null;
}
const Am = /* @__PURE__ */ new WeakMap();
function MR({
  limit: e,
  viewOptions: t
}) {
  const [n] = ve(), r = ne(Cf(e)), i = ne(t), s = ne(!1), o = ne(void 0);
  return G(() => {
    r.current = Cf(e), i.current = t, o.current?.();
  }, [e, t]), G(() => {
    let a, c;
    const l = (y) => {
      const k = r.current;
      if (k === void 0) return;
      const x = Am.get(y);
      if (y.defaultPrevented && x === void 0) return;
      const S = n.getRootElement();
      if (!S) return;
      const _ = S.ownerDocument.getSelection();
      if (!_ || !PR(_, S)) return;
      y.preventDefault();
      const F = OT(
        x ?? _.toString().replaceAll(q, " "),
        k
      );
      Am.set(y, F);
      const U = y.clipboardData;
      if (U) {
        if (!F) {
          x !== void 0 && U.clearData();
          return;
        }
        U.setData("text/plain", F);
      }
    }, u = (y) => {
      r.current !== void 0 && IS(y, "a", { ctrlKey: !Ds, metaKey: Ds }) && (wR(c?.activeElement, n.getRootElement()) || y.preventDefault());
    }, f = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, d = () => {
      const y = r.current === void 0 ? void 0 : a;
      y !== c && (f(), c = y, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = d;
    const p = (y) => (y?.preventDefault(), !0), h = (y) => {
      const k = r.current;
      if (k === void 0 || (s.current = !1, wT(n, y))) return !1;
      if (k <= 0) return p(y);
      const x = w();
      if (Bc(x))
        return x.getTextContent().length + $T(x.getNodes()) <= k ? !1 : p(y);
      if (!E(x) || x.isCollapsed()) return !1;
      const S = ER(n, i.current);
      return S.$size(x) <= k ? !1 : (D$(k, S.options), x.isCollapsed() ? p(y) : (n.isEditable() || Py(() => AR(n)), s.current = !0, !1));
    }, g = (y, k) => {
      if (r.current === void 0 || !s.current) return !1;
      s.current = !1;
      const x = w();
      if (!E(x) || x.isCollapsed()) return !1;
      const S = k && n.isEditable() && !z$(x);
      return Af(
        y && typeof y == "object" && "clipboardData" in y ? y : null,
        n,
        { "text/plain": Bp(x, _f) },
        S ? () => x.removeText() : void 0
      );
    }, m = tt(
      n.registerCommand(qs, h, He),
      n.registerCommand(ir, h, He),
      n.registerCommand(
        qs,
        (y) => g(y, !1),
        Tr
      ),
      n.registerCommand(
        ir,
        (y) => g(y, !0),
        Tr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      n.registerCommand(
        Ey,
        (y) => r.current === void 0 ? !1 : (y?.preventDefault(), !0),
        He
      ),
      n.registerRootListener((y) => {
        a = y?.ownerDocument ?? void 0, d();
      })
    );
    return () => {
      m(), o.current = void 0, f();
    };
  }, [n]), null;
}
function ER(e, t) {
  if (Kt(t)) {
    const r = (i) => jp(i).length;
    return { $size: r, options: { $measure: r } };
  }
  const n = t?.markerMode === "visible" ? t : void 0;
  if (n && Pf(e, n) !== void 0) {
    const r = (i) => Pf(e, n)?.length ?? Bp(i, _f).length;
    return { $size: r, options: { $measure: r } };
  }
  return {
    $size: (r) => r.getTextContent().length + $T(r.getNodes()),
    options: { $isHidden: _f }
  };
}
function AR(e) {
  e.getEditorState().read(() => {
    const t = w(), n = e.getRootElement()?.ownerDocument.getSelection();
    if (!E(t) || !n) return;
    const r = Pm(e, t.anchor), i = Pm(e, t.focus);
    r && i && n.setBaseAndExtent(...r, ...i);
  });
}
function Pm(e, t) {
  const n = e.getElementByKey(t.key);
  if (!n) return;
  if (t.type === "text") {
    const a = LS(n);
    return a ? [a, t.offset] : void 0;
  }
  const r = t.getNode(), i = A(r) ? r.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [n, n.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function PR(e, t) {
  const n = t.ownerDocument.createRange();
  n.selectNodeContents(t);
  for (let r = 0; r < e.rangeCount; r++) {
    const i = e.getRangeAt(r), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, n) < 0 && s.setStart(n.startContainer, n.startOffset), i.compareBoundaryPoints(i.END_TO_END, n) > 0 && s.setEnd(n.endContainer, n.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const NR = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function wR(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? NR.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const OR = /^\+/;
function Vp(e, t) {
  const n = t.replace(OR, "");
  return Object.hasOwn(e.markers, n) ? e.markers[n] : void 0;
}
function HT(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let n = e.length - 1; n >= 0; n--)
    if (t.occursUnder.includes(e[n].marker) && (n === e.length - 1 || t.rank === 0 || e[n + 1].rank <= t.rank))
      return { keep: n + 1, joins: !0 };
}
function GT(e, t) {
  return HT(e, t) !== void 0;
}
function Nf(e, t) {
  const n = HT(e, t);
  return n ? (n.joins && (e.length = n.keep, e.push(t)), !0) : !1;
}
function Pc(e, t, n) {
  const r = A(e) ? e.getChildren().filter(N) : [];
  if (r.length === 0) {
    n.set(e.getKey(), t);
    return;
  }
  for (const i of r) n.set(i.getKey(), t);
}
function $R(e, t, n, r, i) {
  const s = Vp(r, t);
  if (!s) {
    Pc(e, "unknown", i);
    return;
  }
  if (n === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(n) && Pc(e, "invalid", i);
}
function Is(e, t, n, r, i) {
  for (const s of e.getChildren())
    if (K(s)) {
      const o = s.getMarker();
      i || $R(s, o, t, n, r), Is(s, t, n, r, i || o === "xq");
    } else if (Ae(s)) {
      if (i) continue;
      const o = Vp(n, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && r.set(s.getKey(), "invalid") : r.set(s.getKey(), "unknown");
    } else L(s) ? Is(s, s.getMarker(), n, r, i) : et(s) || A(s) && Is(s, t, n, r, i);
}
function RR(e, t) {
  const n = /* @__PURE__ */ new Map(), r = [], i = (o, a) => {
    const c = Vp(e, a);
    if (!c) {
      Pc(o, "unknown", n), Nf(r, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Nf(r, l) || Pc(o, "invalid", n);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ce().getChildren())
    et(o) || (we(o) ? (i(o, o.getMarker()), s(o) && Is(o, void 0, e, n, !1)) : at(o) ? i(o, o.getMarker()) : me(o) ? (i(o, o.getMarker()), s(o) && Is(o, o.getMarker(), e, n, !1)) : A(o) && s(o) && Is(o, "p", e, n, !1));
  return n;
}
function IR(e) {
  return !!e?.includes("(basic)");
}
function LR(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function JT(e, t) {
  return !e.startsWith("zpa") && e !== "c" && xf(e, t);
}
function Wp(e, t) {
  const n = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (n)
    return { marker: t, rank: n.rank ?? 0, occursUnder: n.occursUnder ?? [] };
}
function YT(e, t) {
  const n = [];
  for (const r of t) {
    const i = Wp(e, r);
    i && Nf(n, i);
  }
  return n;
}
function Ya(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: LR(e.description),
    isBasic: IR(e.description)
  };
}
function qR(e, t) {
  const n = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, r = n(e), i = n(t);
  return r.prefix !== i.prefix ? r.prefix < i.prefix ? -1 : 1 : r.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : r.digits - i.digits;
}
function wf(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : qR(e.marker, t.marker);
}
function Of(e, t, n) {
  if (t.noteMarker) return [];
  const r = YT(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && JT(i.marker, n)
  ).filter((i) => {
    const s = Wp(e, i.marker);
    return s !== void 0 && GT(r, s);
  }).map((i) => Ya(i, "paragraph")).sort(wf);
}
function DR(e, t, n) {
  const { noteMarker: r, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => JT(c.marker, n)
  );
  if (r)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(r)
    ).map((c) => Ya(c, "character")).sort(wf);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Ya(c, "character")),
    ...a.map((c) => Ya(c, "note"))
  ].sort(wf);
}
function KR(e, t) {
  return t.map((n, r) => {
    const i = e.markers[n]?.endMarker ?? `${n}*`;
    return { marker: `${r === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function UR(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function BR(e, t, n) {
  return [
    ...KR(e, t.openCharMarkers),
    ...DR(e, t, n)
  ].sort(UR);
}
function FR(e, t, n) {
  if (t.source === "paragraph") return Of(e, t, n);
  const r = BR(e, t, n);
  return r.length > 0 ? r : Of(e, t, n);
}
function zR(e, t, n) {
  const r = Of(e, t, n), i = YT(e, t.previousParaMarkers), s = Wp(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && GT(i, s) ? "ip" : "p", c = r.findIndex((u) => u.marker === a);
  if (c <= 0) return r;
  const [l] = r.splice(c, 1);
  return [l, ...r];
}
const Nc = "￼", Nm = "|", ri = "\\", Tu = "+", jR = /([-\w]+)="(.*?)"/g, VR = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), WR = /* @__PURE__ */ new Map([["file", "src"]]);
class Hp {
  segments = [];
  /** Differing segments are never merged: the boundary between two of them (two adjacent literals)
   * is a position both sides share. */
  push(t, n, r, i, s, o = !1) {
    if (t === n && r === i) return;
    const a = this.segments[this.segments.length - 1];
    s && a?.same && a.liveEnd === t && a.settledEnd === r ? this.segments[this.segments.length - 1] = { ...a, liveEnd: n, settledEnd: i } : this.segments.push({
      liveStart: t,
      liveEnd: n,
      settledStart: r,
      settledEnd: i,
      same: s,
      ...o ? { nesting: o } : {}
    });
  }
  /** Two stretches that differ somewhere: the bytes both begin with, and then the bytes both end
   * with, line up one for one; what is left maps only its ends. */
  pushStretch(t, n, r, i) {
    const s = Math.min(t.length, r.length);
    let o = 0;
    for (; o < s && t[o] === r[o]; ) o += 1;
    let a = 0;
    for (; a < s - o && t[t.length - 1 - a] === r[r.length - 1 - a]; )
      a += 1;
    const c = n + t.length, l = i + r.length;
    this.push(n, n + o, i, i + o, !0), this.push(n + o, c - a, i + o, l - a, !1), this.push(c - a, c, l - a, l, !0);
  }
}
function wm(e, t) {
  const n = [e.indexOf(ri, t + 1), e.indexOf(Nc, t + 1)].filter(
    (r) => r >= 0
  );
  return n.length > 0 ? Math.min(...n) : e.length;
}
function Om(e) {
  const t = e.slice(1), n = [...t.matchAll(jR)];
  return n.length > 0 ? n.map((r) => r[0]).join("") !== t || n.some((r) => r[2] === "") ? void 0 : n.map((r) => {
    const i = 1 + (r.index ?? 0), s = i + r[1].length + 2;
    return {
      name: r[1],
      start: i,
      end: i + r[0].length,
      valueStart: s,
      valueEnd: s + r[2].length,
      value: r[2]
    };
  }) : t ? [
    {
      name: void 0,
      start: 1,
      end: e.length,
      valueStart: 1,
      valueEnd: e.length,
      value: t
    }
  ] : void 0;
}
function HR(e, t) {
  const n = e.map(
    (o, a) => o.name === void 0 || !VR.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), r = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && WR.get(o.name) === a.name), i = /* @__PURE__ */ new Set(), s = [];
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, u) => n[u] && !i.has(u) && r(l, o)
    );
    c < 0 || (i.add(c), s.push([c, a]));
  }), s;
}
function $m(e, t, n) {
  let r = 0, i = -1;
  for (const s of e) {
    if (!s.same) continue;
    const { end: o, otherEnd: a } = xa(s, n);
    o <= t && o > i && (i = o, r = a);
  }
  return r;
}
function GR(e, t, n, r, i) {
  if (e === t) {
    n.push(r, r + e.length, i, i + t.length, !0);
    return;
  }
  const s = Om(e), o = Om(t);
  if (!s || !o) {
    n.push(r, r + 1, i, i + 1, !0), n.pushStretch(e.slice(1), r + 1, t.slice(1), i + 1);
    return;
  }
  const a = new Hp();
  a.push(0, 1, 0, 1, !0);
  const c = HR(s, o);
  for (const [d, p] of c) {
    const h = s[d], g = o[p];
    a.pushStretch(
      e.slice(h.start, h.valueStart),
      h.start,
      t.slice(g.start, g.valueStart),
      g.start
    ), a.push(h.valueStart, h.valueEnd, g.valueStart, g.valueEnd, !0), a.pushStretch(
      e.slice(h.valueEnd, h.end),
      h.valueEnd,
      t.slice(g.valueEnd, g.end),
      g.valueEnd
    );
  }
  const l = [...a.segments], u = new Set(c.map(([d]) => d));
  s.forEach((d, p) => {
    if (u.has(p)) return;
    const h = $m(l, d.start, "live");
    a.push(d.start, d.end, h, h, !1);
  });
  const f = new Set(c.map(([, d]) => d));
  o.forEach((d, p) => {
    if (f.has(p)) return;
    const h = $m(l, d.start, "settled");
    a.push(h, h, d.start, d.end, !1);
  }), a.segments.sort(
    (d, p) => d.settledStart - p.settledStart || d.settledEnd - p.settledEnd || d.liveStart - p.liveStart
  ).forEach(
    (d) => n.push(
      r + d.liveStart,
      r + d.liveEnd,
      i + d.settledStart,
      i + d.settledEnd,
      d.same
    )
  );
}
function XT(e, t, n, r, i) {
  let s = t, o = 0;
  for (; s < e.length && o < n.length; ) {
    const c = n[o] === Nc && e[s] !== Nc ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const u = new Hp(), f = XT(e, s, c, u, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: f,
        inner: { segments: QR(u.segments, s) }
      }), r.push(s, f, o, o + 1, !1), s = f, o += 1;
      continue;
    }
    if (e[s] === Nm && n[o] === Nm) {
      const u = wm(e, s), f = wm(n, o);
      GR(e.slice(s, u), n.slice(o, f), r, s, o), s = u, o = f;
      continue;
    }
    const l = n[o] === ri ? JR(e, s, n, o) || XR(e, s, n, o, i.spellings) || (!i.prefix && s === 0 && o === 0 ? YR(e, n) : 0) : 0;
    if (l > 0) {
      r.push(s, s, o, o + l, !1), o += l;
      continue;
    }
    if (e[s] === n[o]) {
      r.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (e[s - 1] === ri && n[o - 1] === ri && e[s] === Tu != (n[o] === Tu)) {
      e[s] === Tu ? (r.push(s, s + 1, o, o, !1, !0), s += 1) : (r.push(s, s, o, o + 1, !1, !0), o += 1);
      continue;
    }
    if (i.prefix) {
      const u = n.lastIndexOf(ri), f = u >= o ? n.slice(u) : void 0, d = f === void 0 ? -1 : e.indexOf(f, s);
      return f === void 0 || d < 0 ? (r.push(s, s, o, n.length, !1), s) : (r.pushStretch(e.slice(s, d), s, n.slice(o, u), o), r.push(d, d + f.length, u, n.length, !0), d + f.length);
    }
    return r.pushStretch(e.slice(s), s, n.slice(o), o), e.length;
  }
  const a = i.prefix ? s : e.length;
  return r.push(s, a, o, n.length, !1), a;
}
const Ns = /\\\+?[\w-]+/y;
function JR(e, t, n, r) {
  Ns.lastIndex = r;
  const i = Ns.exec(n)?.[0];
  return !i || n[r + i.length] !== ri ? 0 : n.startsWith(i, r + i.length) && e.startsWith(i, t) && !e.startsWith(i, t + i.length) ? i.length : 0;
}
const qa = "\\p";
function YR(e, t) {
  return !t.startsWith(qa) || t[qa.length] !== ri ? 0 : e[0] === ri && !e.startsWith(qa) ? qa.length : 0;
}
function XR(e, t, n, r, i) {
  Ns.lastIndex = r;
  const s = Ns.exec(n)?.[0];
  if (!s || n[r + s.length] !== Nc) return 0;
  const o = i?.get(r + s.length);
  if (o === void 0 || e.startsWith(s, t)) return 0;
  Ns.lastIndex = 0;
  const a = Ns.exec(o)?.[0];
  return a !== void 0 && e.startsWith(a, t) ? s.length : 0;
}
function QR(e, t) {
  return e.map((n) => ({
    ...n,
    liveStart: n.liveStart - t,
    liveEnd: n.liveEnd - t
  }));
}
function ZR(e, t, n) {
  const r = new Hp(), i = /* @__PURE__ */ new Map();
  return XT(e, 0, t, r, { prefix: !1, spellings: n, literals: i }), { alignment: { segments: r.segments }, literals: i };
}
function xa(e, t) {
  return t === "live" ? {
    start: e.liveStart,
    end: e.liveEnd,
    otherStart: e.settledStart,
    otherEnd: e.settledEnd
  } : {
    start: e.settledStart,
    end: e.settledEnd,
    otherStart: e.liveStart,
    otherEnd: e.liveEnd
  };
}
function QT(e, t, n) {
  return e.segments.find((r) => {
    const { start: i, end: s } = xa(r, n);
    return i <= t && t < s;
  });
}
function ZT(e, t) {
  let n = 0, r = 0;
  for (const i of e.segments) {
    const { end: s, otherEnd: o } = xa(i, t);
    n = Math.max(n, s), r = Math.max(r, o);
  }
  return [n, r];
}
function Gp(e, t, n) {
  const r = QT(e, t, n);
  if (r) {
    const { start: o, otherStart: a } = xa(r, n);
    return r.same ? a + (t - o) : void 0;
  }
  const [i, s] = ZT(e, n);
  return t === i ? s : void 0;
}
function so(e, t, n) {
  const r = QT(e, t, n);
  if (r) {
    const { start: i, otherStart: s } = xa(r, n);
    return r.same ? s + (t - i) : s;
  }
  return ZT(e, n)[1];
}
function eI(e, t) {
  const n = so(e, t, "settled"), r = e.segments.find(
    (i) => i.nesting && i.settledStart === t && i.settledEnd === t && i.liveEnd === n
  );
  return r ? r.liveStart : n;
}
const Rn = /\s/;
function tI(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function $f(e) {
  const t = [];
  for (const r of e.spans)
    for (let i = r.start; i < r.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: Rn.test(s) });
    }
  const n = e.spans.filter((r) => r.isSentinel).map((r) => r.start);
  return { bytes: t, placeholders: n };
}
function Xa({ bytes: e }, t) {
  return e.filter((n) => n.position < t && !n.isWs).length;
}
function nI({ bytes: e }, t) {
  let n = 0;
  for (const r of e) r.position < t && (n = r.isWs ? n + 1 : 0);
  return n;
}
function Rf({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const Rm = "cat", rI = "category";
function iI(e) {
  return v(e) && e.getTextContent().trim() === "";
}
function sI(e) {
  const t = { text: "", spans: [], sentinels: [] }, n = [], r = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    r(a, tI(Rm, c)), n.push({
      ownerKey: a.getKey(),
      markerName: Rm,
      keyName: rI,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = ha(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const f = Et(a);
    let d = !1;
    for (const p of a.getChildren())
      u !== void 0 && d && !iI(p) && (i(a, u), u = void 0), o(p), (At(p) || f && (f.is(p) || p.isParentOf(f))) && (d = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (At(a)) {
      const c = a.getParent();
      r(a, L(c) ? c.getCaller() : "");
    } else v(a) || qt(a) ? r(a, a.getTextContent()) : L(a) ? s(a) : A(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: n };
}
function Jp(e) {
  const t = $f(e);
  return {
    runs: e.sentinels.map((n, r) => {
      const { spelling: i, foldedAttributes: s } = sI(n);
      return {
        memberCount: n.length,
        before: Xa(t, t.placeholders[r] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: Rf($f(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: Rf(t).map(({ byte: n }) => n).join("")
  };
}
function wc(e, t) {
  return {
    facts: $f(e),
    carried: e.sentinels.map((n, r) => {
      const i = new Set(t[r]?.map((s) => s.getKey()));
      return n.map((s) => i.has(s.getKey()));
    })
  };
}
function Oc(e, t) {
  const n = e.carried.map(
    (d) => d.map(() => {
    })
  ), r = Rf(e.facts), { alignment: i, literals: s } = ZR(
    r.map(({ byte: d }) => d).join(""),
    t.bytes,
    new Map(t.runs.map((d) => [d.before, d.spelled]))
  ), o = (d, p) => {
    let h = 0;
    e.carried[d].forEach((g, m) => {
      g && (n[d][m] = { sentinelIndex: p, memberIndex: h }, h += 1);
    });
  }, a = (d) => d.filter(Boolean).length, c = e.carried.reduce((d, p) => d + a(p), 0), l = t.runs.reduce((d, p) => d + p.memberCount, 0);
  if (c === l) {
    const d = t.runs.flatMap(
      (h, g) => Array.from({ length: h.memberCount }, (m, y) => ({ sentinelIndex: g, memberIndex: y }))
    );
    let p = 0;
    return e.carried.forEach(
      (h, g) => h.forEach((m, y) => {
        m && (n[g][y] = d[p++]);
      })
    ), { sentinelMap: n, settledOnlyRuns: [], alignment: i };
  }
  const u = new Map(t.runs.map((d, p) => [d.before, p]));
  e.carried.forEach((d, p) => {
    const h = e.facts.placeholders[p];
    if (h === void 0 || a(d) === 0) return;
    const g = Gp(i, Xa(e.facts, h), "live"), m = g === void 0 ? void 0 : u.get(g);
    m === void 0 || t.runs[m].memberCount !== a(d) || o(p, m);
  });
  const f = [];
  for (const [d, p] of s) {
    const h = u.get(d);
    if (h === void 0) continue;
    const g = t.runs[h], m = r[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, y = p.liveEnd > p.liveStart ? r[p.liveEnd - 1].position + 1 : m, k = Xa(e.facts, m);
    f.push({
      sentinelIndex: h,
      liveBefore: k,
      liveLength: Xa(e.facts, y) - k,
      liveWsBefore: nI(e.facts, m),
      settledBefore: g.before,
      spelling: g.spelling,
      inner: p.inner,
      foldedAttributes: g.foldedAttributes
    });
  }
  return { sentinelMap: n, settledOnlyRuns: f, alignment: i };
}
function Ta(e, t, n) {
  return {
    nonWsBefore: so(
      e,
      t.nonWsBefore,
      n === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function ev(e, t, n) {
  return Gp(e.inner, t, n === "toSpelling" ? "live" : "settled");
}
function tv(e, t) {
  return e.find(
    (n) => t.nonWsBefore === n.liveBefore && t.wsRun >= n.liveWsBefore
  );
}
function Yp(e, t) {
  for (const n of e) {
    const r = t.nonWsBefore - n.liveBefore;
    if (r <= 0 || r >= n.liveLength) continue;
    const i = ev(n, r, "toSpelling");
    return {
      run: n,
      count: r,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function gl(e, t) {
  const n = /* @__PURE__ */ new Map();
  e.sentinels.forEach(
    (r, i) => r.forEach(
      (s, o) => n.set(s.getKey(), { sentinelIndex: i, memberIndex: o, member: s })
    )
  );
  for (let r = t; r; r = r.getParent()) {
    const i = n.get(r.getKey());
    if (i) return i;
  }
}
function ml(e, t) {
  const n = [];
  for (let r = t; r; r = r.getParent()) {
    if (r.is(e)) return n;
    n.unshift(r.getIndexWithinParent());
  }
}
const Ct = fa;
function nv(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== Ct ? e.slice(1) : e;
}
function Im(e) {
  return Zs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function rv(e, t, n, r) {
  const i = { ...r, noteMode: "expanded" }, s = ar.serializeEditorState(
    {
      type: rr,
      version: nr,
      content: [
        {
          ...e.getUnknownAttributes(),
          type: "note",
          marker: e.getMarker(),
          caller: e.getCaller(),
          ...n !== void 0 && { category: n },
          content: t
        }
      ]
    },
    i
  ).root.children, o = s.length === 1 ? s[0] : void 0, a = Array.isArray(o?.children) ? o.children : void 0;
  if (!a) return { failure: "shape" };
  let c = 0;
  for (; Im(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Mt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Im(a[u - 1]) === "closing"; )
    u--;
  const f = a.slice(c, u);
  return f.length === 0 ? { failure: "empty" } : { children: f };
}
function iv(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const n = `${e.getMarker()}*`, r = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === n
  );
  if (!(r < 0))
    return { before: t.slice(0, r), after: t.slice(r + 1) };
}
function sv(e, t, n, r, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([u]) => u !== "closed")
  ), o = ar.serializeEditorState(
    {
      type: rr,
      version: nr,
      content: [
        {
          type: "para",
          marker: "p",
          content: [
            {
              ...s,
              type: "note",
              marker: e.getMarker(),
              caller: e.getCaller(),
              ...r !== void 0 && { category: r },
              content: t
            },
            ...n
          ]
        }
      ]
    },
    i
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === Je.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function ov(e, t, n, r) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = ar.serializeEditorState(
    { type: rr, version: nr, content: [s, ...n] },
    r
  ).root.children;
  if (!wd(o)) return { failure: "shape" };
  const c = Zb(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function ko(e, t, n) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + n.length,
    isSentinel: !1
  }), e.text += n;
}
function xo(e, t) {
  const n = qT.exec(e.text)?.[0];
  n !== void 0 && (e.text += n === "\\" ? q : " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += Ct;
}
function Ht(e) {
  return e.replaceAll(q, " ");
}
const oI = `\\${q}${Ct}`;
function av(e) {
  return e.forEach((t, n) => {
    typeof t == "string" ? e[n] = t.replaceAll(oI, `\\${Ct}`) : t.content && av(t.content);
  }), e;
}
const cv = "\u2028";
function Xp(e) {
  return e.replaceAll(cv, "");
}
function Qp(e) {
  return e ? cv : " ";
}
function aI(e) {
  return L(e[0]) ? "note" : Pe(e[0]) ? "verse" : "other";
}
function ls(e, t) {
  return av(
    Wc(Xp(e.text), {
      ...t,
      placeholders: e.sentinels.map(aI)
    })
  );
}
function cI(e, t, n = !1, r = !1) {
  if (Kt(t)) return Ht(e);
  if (e === q && !r) return " ";
  const i = n && e.startsWith(q), s = i ? e.slice(1) : e, o = n && !i ? lI.exec(s) : null;
  return o ? `${o[0]} ${s.slice(o[0].length + 1).replaceAll(q, "~")}` : (i ? " " : "") + s.replaceAll(q, "~");
}
const lI = /^[^\s\u200B\\|*]+(?=\u00A0)/;
function Ls(e) {
  const t = e.getTextContent();
  return Tn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function yl(e, t) {
  const n = e[t];
  if (!Ue(n)) return [];
  const { attribute: r, closing: i, wrapper: s } = Gc(n);
  if (s) return [s];
  const o = n.getNextSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== n.getMarker())
    return [];
  const a = [o];
  return r && a.push(r), i && a.push(i), a;
}
function lv(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function bl(e, t) {
  const n = [];
  let r = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Vo(r, i);
    if (c)
      n.push(c), r = c;
    else if (s && o && a)
      n.push(s, o, a), r = a;
    else if (s || o || a)
      break;
  }
  return n;
}
function Zp(e) {
  return !!e.getUnknownAttributes();
}
function kl(e, t) {
  const n = t(e)?.type;
  return n === T.Milestone || n === void 0 && hd(e);
}
function eh(e) {
  return e.getIsCollapsed() !== !1 || e.getChildren().some((n) => N(n) && n.getMode() === "token") || Object.keys(e.getUnknownAttributes() ?? {}).some((n) => n !== "closed") ? !1 : e.getChildren().some((n) => {
    if (!N(n) || fr(n)) return !1;
    if (n.getMarkerSyntax() !== "opening") return !0;
    const r = n.getTextContent(), i = (io.exec(r) ?? IT.exec(r))?.[1];
    return i === void 0 || i.startsWith("+") || !Je.isValidMarker(i) || n.getMarker() !== e.getMarker();
  });
}
function xl(e, t) {
  return Ue(e) ? !kl(e.getMarker(), t) : L(e) ? !eh(e) : et(e) ? !0 : Pe(e) ? Zp(e) : K(e) ? uv(e, t) : !1;
}
function uv(e, t) {
  return fv(e, e.getMarker(), t);
}
function fv(e, t, n) {
  return c0(e) ? !0 : O_(t) || n(t) !== void 0 || uI(e) && !fI(e) ? !1 : t !== e.getMarker() || !dI(e);
}
function uI(e) {
  const t = e.getParent();
  return t !== null && Nn(t) !== void 0;
}
function fI(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((n) => n !== "closed");
}
function dI(e) {
  const t = e.getChildren().filter((i) => N(i) && i.getMarker() === e.getMarker()).filter(N);
  if (t.some((i) => !fr(i))) return !0;
  const n = t.some((i) => i.getMarkerSyntax() === "opening"), r = t.some((i) => i.getMarkerSyntax() === "closing");
  return !n && r;
}
function dv(e) {
  let t = e, n = t.getParent();
  for (; !t.getNextSibling() && se(n); )
    t = n, n = t.getParent();
  let r = t.getNextSibling();
  for (; se(r); ) r = r.getFirstChild();
  return Pe(r);
}
const ln = "", un = "";
function Lm(e) {
  return e.flatMap((t) => Be(t) ? t.getChildren() : [t]);
}
function pI(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  let r = !1;
  const i = (s) => {
    if (se(s)) {
      r = !0, s.getChildren().forEach(i), r = !0;
      return;
    }
    r && t.length > 0 && n.add(s), r = !1, t.push(s);
  };
  return e.forEach(i), { nodes: t, splitByMark: n };
}
function hI(e, t) {
  return v(e) && !Pe(e) && !N(e) && !rn(e) && !xl(e, t) && de(e, be) !== "attribute";
}
function Es(e, t, n, r = !1, i) {
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Ue(o)) {
      const a = yl(e, s);
      kl(o.getMarker(), n) && lv(a) ? (t.push(
        ln,
        "ms",
        // `marker` is part of the state for the same reason the attributes below are, and it is
        // the one the SAVE leg reads: `createMilestoneMarker` (editor-usj.adaptor.ts) emits the
        // milestone's own `marker` field, never the glyph bytes. Renaming the opening glyph
        // (`\qt-s` → `\qt1-s`) leaves those bytes identical on both sides of this comparison —
        // the OLD side shows the user's edit, and re-tokenizing that same text regenerates the
        // identical glyph — so only the milestone's STALE `marker` reveals the rebuild is not a
        // no-op. Without this fold the fixed-point refusal fires, the rename never reaches node
        // state, and the file keeps the old name while the screen shows the new one.
        //
        // `attributeOrder` is part of the state: the serialized key order follows it, so a
        // USER EDIT that only REORDERS the run's attributes (values unchanged, displayed
        // bytes identical to their own re-tokenization) is a real document change — without
        // this fold both sides compare equal, the fixed-point refusal fires, and the stale
        // order silently survives the settle. An unedited non-canonical load stays a fixed
        // point: the fresh side re-derives the same authored order from the same bytes.
        JSON.stringify({
          marker: o.getMarker(),
          sid: o.getSid() ?? null,
          eid: o.getEid() ?? null,
          unknownAttributes: o.getUnknownAttributes() ?? null,
          attributeOrder: o.getAttributeOrder() ?? null
        })
      ), Es(Lm(a), t, n), t.push(un)) : t.push(Ct), s += a.length;
    } else if (Pe(o)) {
      const a = bl(e, s);
      Zp(o) ? t.push(Ct) : (t.push(
        ln,
        "verse",
        Ht(o.getTextContent()),
        JSON.stringify({
          number: o.getNumber(),
          altnumber: o.getAltnumber() ?? null,
          pubnumber: o.getPubnumber() ?? null
        })
      ), Es(Lm(a), t, n), t.push(un)), s += a.length;
    } else if (N(o))
      t.push(ln, "marker", Ht(o.getTextContent()), un);
    else if (rn(o))
      t.push(
        ln,
        "unmatched",
        Ht(o.getTextContent()),
        o.getMarker(),
        un
      );
    else if (xl(o, n))
      t.push(Ct);
    else if (Qi(o))
      t.push(Qp(dv(o)));
    else if (v(o) && de(o, be) === "attribute")
      t.push(
        ln,
        "attribute",
        Ht(Ls(o)),
        un
      );
    else if (v(o)) {
      let a = Ls(o);
      if (r) {
        let c = e[s + 1];
        for (; i?.has(c) && hI(c, n); )
          a += Ls(c), s += 1, c = e[s + 1];
        a = nv(a);
      }
      t.push(Ht(a));
    } else if (K(o)) {
      t.push(ln, "char", JSON.stringify(o.getUnknownAttributes() ?? null));
      const { nodes: a, splitByMark: c } = pI(o.getChildren());
      Es(a, t, n, !0, c), t.push(un);
    } else se(o) ? Es(o.getChildren(), t, n, r) : A(o) ? (t.push(ln, o.getType()), Es(o.getChildren(), t, n), t.push(un)) : t.push(Ct);
  }
}
function Sr(e, t) {
  const n = [];
  return Es(e, n, t), n.join("");
}
function cr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Gs(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function gI(e) {
  return e.$?.textType;
}
function th(e) {
  return e.type ?? "";
}
function Tl(e, t, n) {
  return t === "closing" ? ot(e, n) : t === "selfClosing" ? ot("") : Ve(e, n);
}
function vu(e, t) {
  const n = e[t];
  if (!(!n || th(n) !== "attribute-run"))
    return cr(n) ?? [];
}
function _r(e, t) {
  const n = [];
  return Eo(e, n, t), n.join("");
}
function Eo(e, t, n, r = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = th(s);
    if (o === "ms") {
      const l = s, u = vu(e, i + 1);
      u && kl(l.marker ?? "", n) ? (t.push(
        ln,
        "ms",
        // `marker` mirrored from `$appendSignature`'s fold: a glyph RENAME leaves the displayed
        // bytes identical on both sides, so only the milestone's own stale `marker` reveals the
        // rebuild is not a no-op — and `marker` is exactly what the save leg serializes.
        // `attributeOrder` mirrored from `$appendSignature`'s fold: an attribute REORDER
        // (values unchanged) is a real document change — serialized key order follows it.
        JSON.stringify({
          marker: l.marker ?? "",
          sid: l.sid ?? null,
          eid: l.eid ?? null,
          unknownAttributes: l.unknownAttributes ?? null,
          attributeOrder: l.attributeOrder ?? null
        })
      ), Eo(u, t, n), t.push(un), i += 1) : t.push(Ct);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(Ct);
        continue;
      }
      t.push(
        ln,
        "verse",
        Ht(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, f = vu(e, i + 1 + u);
      for (; f; )
        Eo(f, t, n), u++, f = vu(e, i + 1 + u);
      t.push(un), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        ln,
        "marker",
        Ht(
          Tl(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        un
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(Qp(md(e[i + 1])));
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(ln, "char", JSON.stringify(l.unknownAttributes ?? null)), Eo(cr(s) ?? [], t, n, !0), t.push(un);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(Ct);
      continue;
    }
    if (o === "unmatched") {
      const l = qM(s) ? s.marker : "";
      t.push(ln, "unmatched", Ht(Gs(s) ?? ""), l), t.push(un);
      continue;
    }
    const a = Gs(s);
    if (a !== void 0 && gI(s) === "attribute") {
      t.push(ln, "attribute", Ht(a), un);
      continue;
    }
    if (a !== void 0) {
      t.push(Ht(r ? nv(a) : a));
      continue;
    }
    const c = cr(s);
    c ? (t.push(ln, o), Eo(c, t, n), t.push(un)) : t.push(Ct);
  }
}
function fi(e) {
  let t = 0;
  for (const n of e) {
    const r = cr(n);
    if (r) {
      t += fi(r);
      continue;
    }
    const i = Gs(n);
    if (i !== void 0)
      for (const s of i) s === Ct && t++;
  }
  return t;
}
function Js(e, t, n, r, i) {
  An(e.getChildren(), t, n, r, i);
}
function An(e, t, n, r, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (N(a))
      ko(t, a, Ht(a.getTextContent()));
    else if (Ue(a)) {
      s();
      const c = yl(e, o);
      kl(a.getMarker(), n) && lv(c) ? An(c, t, n, r) : xo(t, [a, ...c]), o += c.length;
    } else if (L(a) && eh(a)) {
      s();
      const c = Et(a);
      for (const l of a.getChildren())
        c?.is(l) ? ko(t, l, Ht(l.getTextContent())) : An([l], t, n, r);
    } else if (L(a) || et(a))
      s(), xo(t, [a]);
    else if (Pe(a)) {
      s();
      const c = bl(e, o);
      Zp(a) ? xo(t, [a, ...c]) : (ko(t, a, Ht(Ls(a))), An(c, t, n, r)), o += c.length;
    } else if (K(a))
      s(), uv(a, n) ? xo(t, [a]) : Js(a, t, n, r, { pending: !0 });
    else if (Qi(a))
      s(), ko(t, a, Qp(dv(a)));
    else if (v(a)) {
      const c = a.getParent(), l = Tn(a) || de(a, be) === "attribute" || Ee(c) && !!gi(c)?.is(a), u = s() && !l;
      ko(
        t,
        a,
        l ? Ht(Ls(a)) : cI(
          Ls(a),
          r,
          u,
          rk(a)
        )
      );
    } else A(a) ? Js(a, t, n, r, i) : (s(), xo(t, [a]));
  }
}
function nh(e) {
  const [t] = e;
  return me(t) && t.getMarker() === "";
}
function rh(e, t, n) {
  if (e.getUnknownAttributes()) return;
  const r = t(e.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown && r !== T.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (et(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Js(e, i, t, n), i;
}
function mI(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  return Js(e, r, t, n), r;
}
function ih(e, t, n) {
  if (e.length === 0 || !e.every(me)) return;
  const r = { text: "", spans: [], sentinels: [] };
  return sh(r, e, t, n) ? r : void 0;
}
function qm(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (me(i)) {
      const s = rh(i, t, n);
      if (!s) return;
      const o = r.text.length;
      s.spans.forEach(
        (a) => r.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), r.sentinels.push(...s.sentinels), r.text += s.text;
    } else Ee(i) ? An(i.getChildren(), r, t, n) : An([i], r, t, n);
  return r;
}
function sh(e, t, n, r) {
  for (const i of t) {
    const s = rh(i, n, r);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function vl(e, t) {
  let n = 0;
  const r = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(Ct);
        if (a < 0) break;
        let c = s, l;
        a > 0 && ([, c] = s.splitText(a)), c.getTextContent().length > 1 && ([c, l] = c.splitText(1));
        const u = t[n++];
        if (u && u.length > 0) {
          let f = c;
          for (const d of u)
            f.insertAfter(d), f = d;
        }
        c.remove(), s = l;
      }
    } else A(i) && [...i.getChildren()].forEach(r);
  };
  e.forEach(r);
}
function ea(e, t = []) {
  for (const n of e)
    Pe(n) ? t.push(n) : A(n) && ea(n.getChildren(), t);
  return t;
}
function Cl(e) {
  let t = 0;
  const n = (r) => {
    if (v(r))
      for (const i of r.getTextContent()) i === Ct && t++;
    else A(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function Jr(e) {
  let t = 0;
  for (const n of e)
    if (typeof n == "string")
      for (const r of n) r === Ct && t++;
    else n.content && (t += Jr(n.content));
  return t;
}
function Sl(e, t, n, r = { text: "", spans: [], sentinels: [] }) {
  for (const i of e)
    r.text.length > 0 && (r.text += " "), A(i) && Js(i, r, t, n);
  return r;
}
function pv(e, t, n, r) {
  const { out: i } = El(e, n, r);
  return Sl(t, n, r, i);
}
function ii(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : n, o) : o;
    for (let l = 0; l < c; l++)
      Rn.test(e.text[s.start + l]) ? i++ : (r++, i = 0);
    if (a) return { nonWsBefore: r, wsRun: i };
  }
}
function If(e, t) {
  t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => If(n, t));
}
function oh(e, t, n) {
  return e.spans.find(
    (r) => !r.isSentinel && r.key === t && n <= r.end - r.start
  );
}
function Ro(e, t, n) {
  const r = (f, d) => {
    const p = ii(e, f, d), h = oh(e, f, d);
    return p && h ? { anchor: p, position: h.start + d } : void 0;
  }, i = (f) => {
    const d = f.end - f.start, p = ii(e, f.key, d);
    return p ? { anchor: p, position: f.start + d } : void 0;
  };
  if (!A(t)) return r(t.getKey(), n);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, n).forEach((f) => If(f, s));
  const o = [...e.spans].reverse().find((f) => s.has(f.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  If(t, a);
  const c = e.spans.find((f) => a.has(f.key));
  if (c && !c.isSentinel) return r(c.key, 0);
  const l = [...e.spans].reverse().find((f) => !a.has(f.key) && Q(f.key)?.isBefore(t));
  if (l) return i(l);
  const u = e.spans[0];
  return u && !u.isSentinel ? r(u.key, 0) : void 0;
}
function ws(e) {
  if (e.isSentinel) return !1;
  const t = Q(e.key);
  return N(t) && t.getMarkerSyntax() !== "opening";
}
function Lf(e) {
  const t = Q(e.key);
  if (!N(t)) return;
  const n = t.getParent();
  if (!K(n)) return;
  const r = n.getParent();
  if (r)
    return {
      key: r.getKey(),
      offset: n.getIndexWithinParent() + 1,
      type: "element"
    };
}
function Cu(e) {
  const t = Q(e.key), n = t?.getParent(), r = n?.getChildren();
  if (!t || !n || !r) return;
  const i = r.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Pe(t) ? bl(r, i) : Ue(t) ? yl(r, i) : [], o = s[s.length - 1] ?? t;
  return { key: n.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function gn(e, t, {
  addressDisplayBytes: n = !1,
  endAfterSkippedConstruct: r = !1
} = {}) {
  const { text: i, spans: s } = e;
  let o, a, c = t.nonWsBefore, l = t.wsRun, u = !1;
  e: for (const [h, g] of s.entries()) {
    const m = g.end - g.start, y = !g.isSentinel && (n || !ws(g));
    if (u) {
      if (!y) continue;
      o = { key: g.key, offset: 0 };
      break;
    }
    for (let k = 0; k < m; k++) {
      const x = i[g.start + k];
      if (c === 0 && (l === 0 || !Rn.test(x))) {
        if (y) {
          o = { key: g.key, offset: k };
          break e;
        }
        u = !0;
        continue e;
      }
      c > 0 ? Rn.test(x) || c-- : l--;
    }
    if (c === 0 && l === 0) {
      const k = s[h + 1]?.isSentinel === !0;
      if (y && (!n || k)) {
        o = { key: g.key, offset: m };
        break;
      }
      const x = s[h + 1];
      if (r && !y && x && (x.isSentinel || ws(x))) {
        const S = g.isSentinel ? Cu(g) : Lf(g);
        if (S) return S;
      }
      if (g.isSentinel && k) {
        const S = Cu(g);
        if (S) return S;
      }
      y && (a = { key: g.key, offset: m }), u = !0;
    }
  }
  if (o) return { ...o, type: "text" };
  if (a) return { ...a, type: "text" };
  const f = s[s.length - 1];
  if (n && c === 0 && f && !f.isSentinel && f.end === i.length)
    return { key: f.key, offset: f.end - f.start, type: "text" };
  const d = s[s.length - 1];
  if (d && ws(d)) {
    const h = Lf(d);
    if (h) return h;
  }
  if (d?.isSentinel) {
    const h = Cu(d);
    if (h) return h;
  }
  const p = [...s].reverse().find((h) => !h.isSentinel && !ws(h));
  if (p) return { key: p.key, offset: p.end - p.start, type: "text" };
}
function hv(e, t = []) {
  for (const n of e)
    se(n) && t.push(n), A(n) && hv(n.getChildren(), t);
  return t;
}
function gv(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => gv(n, t)), t;
}
function yI(e, t, n) {
  const r = ii(e, t.key, n);
  if (r)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: r,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: r };
}
function va(e, t, n = t.sentinels, r) {
  const i = [];
  for (const o of hv(e)) {
    const a = gv(o), c = t.spans.filter((k) => a.has(k.key)), l = c[0], u = c[c.length - 1];
    if (!l || !u) continue;
    const f = yI(t, l, 0), d = ii(t, u.key, u.end - u.start);
    if (!f || !d) continue;
    const p = o.getTypedOnClicks(), h = o.getTypedOnRemoves(), g = o.getTypedOnMouseEnters(), m = o.getTypedOnMouseLeaves(), y = Object.entries(o.getTypedIDs()).flatMap(
      ([k, x]) => x.map((S) => ({
        type: k,
        id: S,
        onClick: p[k]?.[S],
        onRemove: h[k]?.[S],
        onMouseEnter: g[k]?.[S],
        onMouseLeave: m[k]?.[S]
      }))
    );
    y.length > 0 && i.push({ annotations: y, start: f, end: d });
  }
  const s = (o) => {
    const a = o.getKey();
    for (const c of Ir(o)) {
      if (c.start === c.end || !oh(t, a, c.start)) continue;
      const l = ii(t, a, c.start), u = ii(t, a, c.end);
      if (!l || !u) continue;
      const f = r && fc(r, c.type, c.id);
      i.push({
        annotations: [
          {
            type: c.type,
            id: c.id,
            onClick: f?.onClick,
            onRemove: f?.onRemove,
            onMouseEnter: f?.onMouseEnter,
            onMouseLeave: f?.onMouseLeave
          }
        ],
        start: { kind: "byte", anchor: l },
        end: u
      });
    }
    A(o) && o.getChildren().forEach(s);
  };
  return e.forEach(s), { ranges: i, live: i.length > 0 ? wc(t, n) : void 0 };
}
function bI(e, t, n) {
  const r = mv(e);
  if (!r) return;
  const i = r[r.length - 1].getNextSibling();
  if (!se(i) || !i.hasID(t, n)) return;
  const s = i.getFirstChild();
  s && r.forEach((o) => s.insertBefore(o));
}
function kI(e, t) {
  const n = mv(e);
  if (!n) return;
  const r = Ki();
  r.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), n[0].insertBefore(r), r.append(...n);
}
function mv(e) {
  const t = Q(e), n = t?.getParent()?.getChildren();
  if (!t || !n) return;
  const r = n.findIndex((s) => s.is(t));
  if (r < 0) return;
  const i = Pe(t) ? bl(n, r) : Ue(t) ? yl(n, r) : [];
  return [t, ...i];
}
function yv(e, t, n, r) {
  const i = n.settledOnlyRuns, s = { addressDisplayBytes: r, endAfterSkippedConstruct: !r }, o = Yp(i, e);
  if (o) {
    if (!o.within) return;
    const u = gn(o.run.spelling, o.within, s);
    return u ? { point: u, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex } : void 0;
  }
  const a = r && tv(i, e);
  if (a) {
    const u = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), f = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, d = gn(t, f, s);
    return d && u ? { point: d, at: f.nonWsBefore, preservedKey: u } : void 0;
  }
  const c = Ta(n.alignment, e, "toSettled"), l = gn(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function xI(e, t, n) {
  if (e.kind === "byte") return yv(e.anchor, t, n, !0);
  const r = n.sentinelMap[e.run]?.find((a) => a !== void 0), i = r && t.sentinels[r.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = Ta(n.alignment, e.anchor, "toSettled"), o = gn(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function Dm(e) {
  if (e.type !== "text") return e;
  const t = Q(e.key);
  if (v(t)) return e;
  const n = t?.getParent();
  if (!t || !n) return;
  const r = t.getIndexWithinParent() + (e.offset > 0 ? 1 : 0);
  return { key: n.getKey(), offset: r, type: "element" };
}
function TI(e, t) {
  const n = (s) => {
    if (s.type !== "text") return s;
    const o = Q(s.key), a = o?.getParent();
    return !v(o) || !a ? s : s.offset === 0 ? { key: a.getKey(), offset: o.getIndexWithinParent(), type: "element" } : s.offset === o.getTextContentSize() ? { key: a.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" } : s;
  }, r = n(e), i = n(t);
  return r.key === i.key && r.offset === i.offset && r.type === i.type;
}
function Ca({ ranges: e, live: t }, n) {
  if (e.length === 0 || !t) return;
  const r = w()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = n();
      if (!o) continue;
      const a = Oc(t, Jp(o)), c = xI(i.start, o, a), l = yv(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const u = i.start.anchor;
      if (c.at === l.at && u.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { preservedKey: f } = c, d = Dm(c.point), p = Dm(l.point);
      if (!d || !p) continue;
      if (TI(d, p)) {
        f && kI(f, s);
        continue;
      }
      const h = Kr();
      h.anchor.set(d.key, d.offset, d.type), h.focus.set(p.key, p.offset, p.type), Hd(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && bI(f, s.type, s.id);
    }
  Fn(r);
}
function ah(e, t, n) {
  if (n <= t) return e;
  const r = n - t, i = (s) => s <= t ? s : s >= n ? s - r : t;
  return {
    text: e.text.slice(0, t) + e.text.slice(n),
    spans: e.spans.map((s) => ({
      ...s,
      start: i(s.start),
      end: i(s.end)
    })),
    sentinels: e.sentinels
  };
}
function bv(e, t) {
  return e.sentinels.filter((r, i) => r.length > 0 && (t[i]?.length ?? 0) === 0).map((r) => r[0].getKey()).reverse().reduce((r, i) => {
    const s = r.spans.find((o) => o.isSentinel && o.key === i);
    return s ? ah(r, s.start, s.end) : r;
  }, e);
}
function us(e) {
  const t = e.exportJSON();
  return A(e) && Array.isArray(t.children) && e.getChildren().forEach((n) => t.children?.push(us(n))), t;
}
function _l(e, t, n, r, i, s, o) {
  const a = va(
    e,
    bv(t, n),
    n
  );
  if (a.ranges.length === 0) return r;
  const c = {
    ...a,
    ranges: a.ranges.map((f) => ({
      ...f,
      annotations: f.annotations.map(({ type: d, id: p }) => ({ type: d, id: p }))
    }))
  }, l = sd({
    nodes: [gt, ...fl],
    onError: (f) => {
      throw f;
    }
  });
  od(
    l,
    gt,
    (f) => Ki(f.getTypedIDs()),
    (f, d) => Object.entries(f.getTypedIDs()).forEach(
      ([p, h]) => h.forEach((g) => d.addID(p, g))
    )
  );
  let u;
  return l.update(
    () => {
      const f = Ce(), d = i === "noteContent" ? Vn() : f;
      d !== f && f.append(d), u = d.getKey(), r.forEach((h) => d.append(qr(h))), Ca(c, () => {
        const h = d.getChildren();
        if (i === "paras") return Sl(h, s, o);
        if (i === "chapter")
          return Ee(h[0]) ? ta(h[0], s, o) : void 0;
        if (i === "bookLine") {
          const [m, ...y] = h;
          return we(m) ? pv(m, y, s, o) : void 0;
        }
        const g = { text: "", spans: [], sentinels: [] };
        return An(h, g, s, o), g;
      });
    },
    { discrete: !0 }
  ), l.getEditorState().read(() => {
    const f = u === void 0 ? void 0 : Q(u);
    return A(f) ? f.getChildren().map(us) : r;
  });
}
function qf(e) {
  const t = Q(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return v(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!A(t)) return !1;
  const n = Kr();
  return n.anchor.set(e.key, e.offset, "element"), n.focus.set(e.key, e.offset, "element"), Fn(n), !0;
}
function vI(e, t, n) {
  const r = gn(e, t);
  if (r?.type === "text") {
    if (qf(r)) return;
  } else if (r) {
    const i = Q(r.key), s = A(i) ? i.getChildAtIndex(r.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  n.find(A)?.selectStart();
}
function Ml(e, t) {
  const n = t.getNode(), r = gl(e, n), i = r && ml(r.member, n);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? Ro(e, n, t.offset)?.anchor : ii(e, t.key, t.offset),
    inRun: r && i ? {
      sentinelIndex: r.sentinelIndex,
      memberIndex: r.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: wc(e, e.sentinels)
  };
}
function kv(e, t, n) {
  const r = t && Oc(t.live, Jp(e));
  if (t?.inRun && r) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: u } = t.inRun, f = r.sentinelMap[o]?.[a];
    let d = f && e.sentinels[f.sentinelIndex]?.[f.memberIndex];
    for (const p of c)
      d = A(d) ? d.getChildAtIndex(p) ?? void 0 : void 0;
    if (d && qf({ key: d.getKey(), offset: l, type: u })) return;
  }
  if (!t?.anchor || !r) {
    n.find(A)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = Yp(r.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: so(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = gn(s.run.spelling, o);
    if (a && qf(a)) return;
  }
  vI(
    e,
    Ta(r.alignment, i, "toSettled"),
    n
  );
}
function xv(e, t, n, r, i) {
  n && kv(Sl(e, r, i), t, e);
}
function Tv(e, t, n, r, i) {
  if (!n) return;
  if (!t?.anchor && !t?.inRun) {
    CI(e, r);
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  An(e, s, r, i), kv(s, t, e);
}
function CI(e, t) {
  const n = e.find(A);
  if (n && xl(n, t)) {
    const r = n.getParent();
    if (r) {
      const i = n.getIndexWithinParent();
      r.select(i, i);
      return;
    }
  }
  n?.selectStart();
}
function vv(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: n, getMarker: r, logger: i } = t, s = ih(e, r, n);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = w();
  if (E(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((y) => y.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Ml(s, c.anchor));
  }
  const l = va(e, s, void 0, It()), u = ls(s, {
    getMarker: r,
    opensNamelessParagraph: nh(e)
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Jr(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const f = ar.serializeEditorState(
    { type: rr, version: nr, content: u },
    n
  );
  if (_r(f.root.children, r) === Sr(e, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = f.root.children.map((m) => qr(m));
  if (Cl(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = ea(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  d.forEach((m) => h.insertBefore(m)), vl(d, s.sentinels), e.forEach((m) => m.remove());
  const g = ea(d);
  for (let m = 0; m < p.length && m < g.length; m++)
    g[m].getNumber() === p[m].number && g[m].setSid(p[m].sid);
  return Ca(l, () => Sl(d, r, n)), xv(d, o, a, r, n), !0;
}
function SI(e) {
  if (e.getIsCollapsed() !== !1 || !Je.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const o = t[n];
    if (!N(o) || o.getMarkerSyntax() !== "opening") break;
    n++;
  }
  const r = t[n];
  if (!r || !(At(r) || v(r) && r.getTextContent() === Mt(e.getCaller()))) return;
  n++;
  let s = t.length;
  for (; s > n; ) {
    const o = t[s - 1];
    if (!N(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(n, s);
}
function Ji(e, t, n) {
  const r = SI(e);
  if (!r) return;
  const i = { text: "", spans: [], sentinels: [] };
  return An(r, i, t, n), { out: i, contentNodes: r };
}
function ch(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  return An(e, r, t, n), r;
}
function Cv(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const r = t.content[0];
  if (typeof r != "string" || r.includes(Ct)) return;
  const i = r.trim();
  if (i !== "")
    return e.shift(), i;
}
function _I(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = Ji(e, r, n);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (E(u)) {
    for (let U = u.anchor.getNode(); U; U = U.getParent())
      if (e.is(U)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Ml(o, u.anchor));
  }
  const f = va(a, o, void 0, It()), d = ls(o, {
    getMarker: r,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Jr(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = d;
  if (d.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], g = Cv(h), m = iv(e, h);
  if (m)
    return MI(
      e,
      m,
      g,
      o.sentinels,
      t,
      l
    );
  const y = rv(e, h, g, n);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (fi(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== g;
  if (k && e.setCategory(g), _r(y.children, r) === Sr(a, r))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const x = y.children.map((U) => qr(U));
  if (Cl(x) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const S = a[0];
  if (S)
    x.forEach((U) => S.insertBefore(U));
  else {
    const U = e.getChildren().find((W) => N(W) && W.getMarkerSyntax() === "closing");
    x.forEach((W) => U ? U.insertBefore(W) : e.append(W));
  }
  vl(x, o.sentinels);
  const _ = new Set(o.sentinels.flat().map((U) => U.getKey()));
  a.forEach((U) => {
    _.has(U.getKey()) || (se(U) && (U.getWritable().__suppressOnRemoveCallbacks = !0), U.remove());
  });
  const F = () => Ji(e, r, n);
  return Ca(f, () => F()?.out), Tv(
    F()?.contentNodes ?? x,
    c,
    l,
    r,
    n
  ), !0;
}
function MI(e, { before: t, after: n }, r, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = sv(
    e,
    t,
    n,
    r,
    a
  );
  if (!l || fi(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => qr(h)), [f] = u;
  if (!L(f) || Cl(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let d = e;
  for (const h of u)
    d.insertAfter(h), d = h;
  vl(u, i);
  const p = e.getChildren();
  return e.append(...f.getChildren()), p.forEach((h) => h.remove()), e.setCaller(f.getCaller()).setCategory(f.getCategory()).setUnknownAttributes(f.getUnknownAttributes()).setIsCollapsed(f.getIsCollapsed()), f.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Ha(e, a) : fx(e, { isContentChange: !0 })), !0;
}
function Sv(e) {
  const t = e.getChildren();
  return Id(t[0]) ? t.slice(1) : t;
}
function El(e, t, n) {
  const r = Sv(e), i = { text: "", spans: [], sentinels: [] };
  return An(r, i, t, n), { out: i, contentNodes: r };
}
const EI = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${zn}(?=[\\s\\u200B\\\\|]|$)`
);
function _v(e, t) {
  const n = ls(e, { getMarker: t }), [r, ...i] = n;
  return typeof r == "object" && r.type === "para" && r.marker === zn && !EI.test(e.text) ? { content: n, lineContent: r.content ?? [], followingBlocks: i } : { content: n, lineContent: [], followingBlocks: n };
}
function Mv(e, t, n = []) {
  const { viewOptions: r, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = El(e, i, r);
  if (!sh(o, n, i, r))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...n];
  let l, u = !1;
  const f = w();
  if (E(f)) {
    for (let W = f.anchor.getNode(); W; W = W.getParent())
      if (c.some((ae) => ae.is(W))) {
        u = !0;
        break;
      }
    f.isCollapsed() && (l = Ml(o, f.anchor));
  }
  const d = va(
    [...a, ...n],
    o,
    void 0,
    It()
  ), p = _v(o, i);
  if (Jr(p.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const h = ov(
    e,
    p.lineContent,
    p.followingBlocks,
    r
  );
  if (h.failure !== void 0)
    return h.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const g = [...h.children, ...h.followingBlocks];
  if (fi(g) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (h.followingBlocks.length === n.length && _r(h.followingBlocks, i) === Sr(n, i) && _r(h.children, i) === Sr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const m = h.children.map((W) => qr(W)), y = h.followingBlocks.map((W) => qr(W)), k = [...m, ...y];
  if (Cl(k) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const x = ea([...a, ...n]).map((W) => ({
    number: W.getNumber(),
    sid: W.getSid()
  })), S = a[0];
  S ? m.forEach((W) => S.insertBefore(W)) : m.forEach((W) => e.append(W)), y.reduce((W, ae) => W.insertAfter(ae), e), vl(k, o.sentinels);
  const _ = new Set(o.sentinels.flat().map((W) => W.getKey()));
  a.forEach((W) => {
    _.has(W.getKey()) || (se(W) && (W.getWritable().__suppressOnRemoveCallbacks = !0), W.remove());
  }), n.forEach((W) => W.remove()), Ca(
    d,
    () => pv(e, y, i, r)
  );
  const F = [...Sv(e), ...y], U = ea(F);
  for (let W = 0; W < x.length && W < U.length; W++)
    U[W].getNumber() === x[W].number && U[W].setSid(x[W].sid);
  return Tv(
    F,
    l,
    u,
    i,
    r
  ), !0;
}
const Ev = /* @__PURE__ */ new Set(["ca", "cp"]), lh = "cp";
function Av(e) {
  if (!St(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Js(e, t, vr, void 0), t.sentinels.length > 0) return !1;
  const n = t.text;
  if (n.trim() === "") return !1;
  const r = Wc(Xp(n), {
    getMarker: vr
  }), [i] = r, s = r.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(n) ? i.content ?? [] : r;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === lh)
  );
}
function fs(e) {
  const t = [];
  for (let n = e.getNextSibling(); n; n = n.getNextSibling()) {
    if (K(n) && Ev.has(n.getMarker()) || Av(n)) {
      t.push(n);
      continue;
    }
    me(n) && n.getMarker() === lh && t.push(n);
    break;
  }
  return t;
}
function AI(e) {
  const t = (r) => K(r) && Ev.has(r.getMarker()) || Av(r);
  if (t(e) || me(e) && e.getMarker() === lh)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (Ee(r)) return r;
      if (!t(r)) return;
    }
}
function ta(e, t, n) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const r = fs(e);
  if (r.some((s) => me(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (An(e.getChildren(), i, t, n), An(r, i, t, n), !(i.sentinels.length > 0))
    return i;
}
function PI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = [e, ...fs(e)], o = ta(e, r, n);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (E(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((y) => y.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Ml(o, l.anchor));
  }
  const u = va(s, o, void 0, It()), f = Wc(Xp(o.text), {
    getMarker: r
  }), [d] = f;
  if (f.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Jr(f) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const p = ar.serializeEditorState(
    { type: rr, version: nr, content: f },
    n
  );
  if (_r(p.root.children, r) === Sr(s, r)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = p.root.children.map((m) => qr(m));
  if (!Ee(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const g = h[0];
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Ca(
    u,
    () => ta(g, r, n)
  ), xv(h, a, c, r, n), !0;
}
function na(e) {
  let t, n;
  for (let r = e; r; r = r.getParent()) {
    if (et(r)) return;
    !t && (L(r) && !eh(r) || me(r) || Ee(r) || we(r)) && (t = r), mn(r.getParent()) && (n = r);
  }
  return t && !t.is(n) ? t : (n ? AI(n) : void 0) ?? t;
}
function Bn(e, t) {
  const n = na(e);
  return n ? L(n) ? _I(n, t) : Ee(n) ? PI(n, t) : we(n) ? Mv(n, t) : vv([n], t) : !1;
}
const NI = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Km(e, t) {
  const n = Object.entries(e).filter(
    (r) => typeof r[1] == "string" && !NI.has(r[0])
  );
  if (n.length !== 0) {
    t.push("|");
    for (const [r, i] of n) t.push(`${r}="${i}"`);
  }
}
function Qa(e, t) {
  if (e)
    for (const n of e) {
      if (typeof n == "string") {
        t.push(n);
        continue;
      }
      const r = n.marker ?? "", i = n.closed;
      switch (n.type) {
        case "verse":
          t.push(`\\${r} ${n.number ?? ""}`), n.altnumber !== void 0 && t.push(`\\va ${n.altnumber}\\va*`), n.pubnumber !== void 0 && t.push(`\\vp ${n.pubnumber}\\vp*`);
          break;
        case "chapter":
          t.push(`\\${r} ${n.number ?? ""}`), n.altnumber !== void 0 && t.push(`\\ca ${n.altnumber}\\ca*`), n.pubnumber !== void 0 && t.push(`\\cp ${n.pubnumber}`);
          break;
        case "ms":
          t.push(`\\${r}`), Km(n, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${r}`);
          break;
        case "char":
          t.push(`\\${r} `), Qa(n.content, t), Km(n, t), i !== "false" && t.push(`\\${r}*`);
          break;
        case "note": {
          const s = n.caller, o = n.category;
          t.push(`\\${r} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Qa(n.content, t), i !== "false" && t.push(`\\${r}*`);
          break;
        }
        default:
          t.push(`\\${r} `), Qa(n.content, t);
      }
    }
}
function Um(e, t, n) {
  const r = na(e);
  if (!mt(r)) return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (r.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = we(r) ? El(r, t, n).out : rh(r, t, n);
  if (!o) return !1;
  const a = ls(o, {
    getMarker: t,
    opensNamelessParagraph: nh([r])
  });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    Rn.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Qa(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (Rn.test(u)) continue;
    const f = c.get(u);
    f !== void 0 && f > 0 && c.set(u, f - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function uh(e, t) {
  return Nv(e, t, T.Paragraph);
}
function Pv(e, t) {
  return Nv(e, t, T.Character);
}
function Nv(e, t, n) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const i = t(r)?.type;
  return i !== void 0 && i !== T.Unknown ? i === n : !(Je.isValidMarker(r) || hd(r));
}
function wI(e) {
  return [Lt(e), zi()];
}
function fh(e) {
  or(e, 2);
}
function OI(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.type === "element") return n.key === e.getKey() && n.offset === 0;
  const r = e.getFirstChild();
  return r !== null && n.key === r.getKey() && n.offset === 0;
}
function Al(e) {
  const t = OI(e);
  e.splice(0, 0, wI(e.getMarker())), t && fh(e);
}
function $c(e, t) {
  e.setMarker(t), Al(e), fh(e);
}
function $I(e, t) {
  const n = e.getFirstChild();
  if (!n) return;
  const r = n.getNextSibling();
  if (!Tn(r)) {
    if (v(r) && !N(r) && /^[ \u00A0]$/.test(r.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      r.setTextContent(q), Gt(r, be, Er), r.setMode("token");
      return;
    }
    if (sk(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    n.insertAfter(zi());
  }
}
function Bm(e, t, n) {
  const r = e.getNode();
  if (r.is(t))
    return n === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? r.getTextContentSize() : A(r) ? r.getChildrenSize() : 0;
  if (n === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = r; !s.is(t); ) {
    if (n === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function Io(e) {
  for (let t = e; t; t = t.getParent())
    if (me(t)) return t;
}
function RI(e) {
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Io(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Io(n.getNode())?.is(s) ?? !1, a = Io(r.getNode())?.is(s) ?? !1;
    return !(o && !Bm(n, s, "start") || a && !Bm(r, s, "end"));
  });
}
function Df(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const n = w();
  if (!(!E(n) || n.isCollapsed()))
    for (const r of RI(n)) t.add(r.getKey());
}
function II(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const n = w();
  if (!E(n) || !n.isCollapsed()) return;
  const r = Io(n.focus.getNode());
  r && t.add(r.getKey());
}
function LI(e) {
  const t = w();
  !E(t) || t.isCollapsed() || t.getNodes().some((n) => N(n)) && (Df(e), t.removeText());
}
const qI = new RegExp(
  String.raw`^\\\+?([${Gn}]+)(?:[ \u00A0]|$)`
);
function DI(e, t) {
  const n = qI.exec(e.getTextContent());
  return !!n && uh(n[1], t);
}
function KI(e, t) {
  if (!as(t.viewOptions)) return;
  if (kn(e.getFirstChild())) {
    $I(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (DI(e, t.getMarker)) return;
    Al(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const r = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!r && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => me(o) && !o.is(e))) {
      $c(e, zn), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const n = e.getPreviousSibling();
  if (mt(n)) {
    const r = e.getChildren().filter((a) => !Tn(a)), i = w();
    let s = !1;
    if (E(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Io(a)?.is(e) && (s = !r.some(
        (c) => a.is(c) || A(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = n.getChildrenSize();
    n.append(...r), e.remove(), s && or(n, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  $c(e, zn);
}
function UI(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const n = Qn(t, Qs(e.getMarker()));
  return n === "" ? void 0 : n;
}
function wv(e) {
  const t = e.getChildren().filter((s) => !N(s) && de(s, be) !== "attribute"), n = t[0];
  n && v(n) && n.getTextContent().startsWith(q) && n.setTextContent(n.getTextContent().slice(1));
  const r = UI(e);
  r && t.push(Le(r));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function BI(e) {
  const t = e.getNode();
  let n;
  if (e.type === "element" && A(t) ? n = t.getChildAtIndex(e.offset) : N(t) && e.offset === 0 ? n = t : v(t) && e.offset === t.getTextContentSize() && (n = t.getNextSibling()), K(n) && (n = n.getFirstChild()), !N(n) || n.getMarkerSyntax() !== "opening") return;
  const r = n.getParent();
  if (!(!K(r) || !n.is(r.getFirstChild())))
    return n.getTextContentSize() === 1 ? n : void 0;
}
function FI() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = BI(e.anchor), n = t?.getParent();
  if (!t || !K(n)) return !1;
  const r = t.getNextSibling();
  return t.remove(), Wr(r) && r.getTextContent().startsWith(q) && r.setTextContent(` ${r.getTextContent().slice(q.length)}`), wv(n), v(r) && r.isAttached() && r.select(0, 0), !0;
}
function zI(e, t) {
  const n = e.getChildren(), r = n.some((s) => N(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (r) return;
    const s = n[0], o = n[n.length - 1];
    if (v(s) && s.isUnmergeable() && s.getMode() === "token" || N(o) && o.getMarkerSyntax() === "closing" && o.getMode() === "token") {
      const u = Lt(e.getMarker());
      u.setMode("token");
      const f = e.getFirstChild();
      f ? f.insertBefore(u) : e.append(u);
      return;
    }
    const a = e.getCaller(), c = n.some(
      (u) => v(u) && !N(u) && u.getTextContent() === Mt(a)
    ), l = es(e).some(({ node: u }) => N(u));
    if (!c && !l) return;
    n.forEach((u) => {
      N(u) || (v(u) && u.getTextContent() === Mt(a) && u.setTextContent(a ? ` ${a} ` : " "), e.insertBefore(u));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = n.some((s) => N(s) && s.getMarkerSyntax() === "closing");
  r !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function jI(e, t) {
  if (e.isEmpty()) return;
  const n = e.getFirstChild();
  if (!(N(n) && n.getMarkerSyntax() === "opening")) {
    wv(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing");
  i && !s && Bn(e, t);
}
function Ov(e, t, n) {
  if (!N(e.getFirstChild()) && n?.markerMode === "editable" && as(n)) {
    $c(e, t);
    return;
  }
  _x(e, t);
}
function $v() {
  const e = w();
  if (!E(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Rv(e);
    return t !== "removed" ? t : (Kf(), "handled");
  }
  return Kf() ? "handled" : "declined";
}
function VI(e, t) {
  if (!t) return e;
  const n = J$.exec(e);
  if (!n) return e;
  const r = n[1];
  return r === "c" || r === "v" || t(r)?.type !== T.Paragraph ? e : e.slice(n[0].length);
}
function Fm(e, t) {
  const n = w();
  if (!E(n)) return "declined";
  if (n.isCollapsed()) {
    if (!Iv())
      return "declined";
  } else {
    const s = Rv(n);
    if (s !== "removed") return s;
  }
  const [r, ...i] = e.map(
    (s) => VI(s, t)
  );
  zm(r ?? "");
  for (const s of i)
    Kf(), zm(s);
  return "handled";
}
function WI(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.getSelection(), r = n?.anchorNode;
  if (!t || !n || !r || !t.contains(r)) return !1;
  const i = Zi(r);
  if (!i) return !1;
  const s = Nn(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || N(i)) return !1;
  const o = Math.min(n.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Rv(e) {
  const t = Nn(e.anchor.getNode()), n = Nn(e.focus.getNode()), r = t?.getIsCollapsed() === !1, i = n?.getIsCollapsed() === !1;
  return !r && !i ? "declined" : (e.removeText(), HI() ? "removed" : "needs-plain-split");
}
function zm(e) {
  if (e === "") return;
  const t = w();
  E(t) && t.insertText(e);
}
function HI() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = Nn(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((n) => N(n) && n.getMarkerSyntax() === "opening");
}
function Iv() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), n = Nn(t);
  if (!(!n || n.getIsCollapsed() !== !1 || n.is(t)))
    return n;
}
function Kf() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), n = Iv();
  if (!n) return !1;
  let r = t;
  for (; !n.is(r.getParent()); ) {
    const l = r.getParent();
    if (!l) return !1;
    r = l;
  }
  const i = Ur("fp", { closed: "false" });
  i.append(Lt("fp"));
  const s = v(t) && !N(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(r);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Fs(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    r.insertAfter(i);
    const [u] = l;
    u && (PM(u), i.append(u));
  }
  return i.getChildren().every(N) && i.append(Le(Ot)), Lv(i), !0;
}
function Lv(e) {
  const t = e.getChildren().find((n) => !N(n));
  if (v(t)) {
    const n = vd(t);
    t.select(n, n);
    return;
  }
  if (A(t)) {
    Lv(t);
    return;
  }
  e.selectEnd();
}
function GI(e) {
  const t = [];
  let n = e;
  for (; n; )
    K(n) && t.push(n.getMarker()), n = n.getParent();
  return t;
}
function JI(e) {
  const t = e.getTopLevelElement(), n = [];
  for (const r of Ce().getChildren()) {
    if (t && r.is(t)) {
      we(r) && n.push(r.getMarker());
      break;
    }
    (we(r) || at(r) || me(r)) && n.push(r.getMarker());
  }
  return n;
}
function YI(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n) break;
    t = n;
  }
  return t;
}
function XI(e, t, n) {
  const r = e.getFirstChild();
  if (!r) return !1;
  let i = r;
  if (kn(r)) {
    if (t.is(r)) return !0;
    if (i = r.getNextSibling(), i && Tn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(YI(i)) && n === 0 : !1;
}
function QI(e, t, n) {
  const r = e.getFirstChild();
  if (!r || !kn(r)) return !1;
  if (t.is(r)) return !0;
  const i = r.getNextSibling();
  return i !== null && Tn(i) && t.is(i) && n === 0;
}
function ZI() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: n, y: r, width: i, height: s } = t.getBoundingClientRect();
  return { x: n, y: r, width: i, height: s };
}
function e2() {
  const e = w();
  if (!E(e)) return;
  const t = e.focus.getNode(), n = e.focus.offset, r = !e.isCollapsed(), i = Ze(t, me), s = i ? void 0 : Ze(t, we), o = !r && !s && (!i || QI(i, t, n)) ? "paragraph" : "character", a = Nn(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: JI(t),
    openCharMarkers: GI(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: r,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Yd(t, n),
    anchorRect: ZI()
  };
}
function t2() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || N(t)) return;
  const n = e.anchor.offset, r = t.getTextContent().slice(0, n), i = Y$.exec(r);
  i && t.spliceText(n - i[0].length, i[0].length, "", !0);
}
function n2(e, t, n) {
  Ov(e, t, n), fh(e);
}
function r2(e, t, n) {
  const r = w();
  if (!E(r)) return;
  const i = r.focus.getNode(), s = Ze(i, me);
  if (t === "backslash" && s && XI(s, i, r.focus.offset)) {
    n2(s, e, n);
    return;
  }
  Uf(e, n);
}
function qv(e, t) {
  const n = e.getNode(), r = mT(A(n) ? n : n.getParent());
  return t.is(r);
}
function i2(e, t) {
  const n = e.getNode();
  return !t.is(n) && !t.isParentOf(n) ? !1 : !qv(e, t);
}
function Rc(e, t, n) {
  const r = n.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= r && e.set(t.getKey(), r + 1, "element");
}
function s2(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!N(t) || t.getMarkerSyntax() !== "opening") return e;
  const n = t.getParent();
  if (!K(n)) return e;
  const r = n.getParent();
  return r ? Zt(r.getKey(), n.getIndexWithinParent(), "element") : e;
}
function o2(e, t, n) {
  const r = w();
  if (!E(r)) return !1;
  const i = r.isBackward() ? r.focus : r.anchor;
  if (!qv(i, e)) return !1;
  const s = r.isBackward() ? r.anchor : r.focus;
  if (!r.isCollapsed() && i2(s, e)) return !1;
  const o = Id(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (Rc(r.anchor, e, o), Rc(r.focus, e, o)), r.isCollapsed() || r.removeText();
  const a = w();
  if (!E(a) || !a.isCollapsed()) return !1;
  const c = kT(a);
  if (!c) return !1;
  const { parent: l, moving: u } = bT(
    s2(c.anchor)
  );
  if (!e.is(l)) return !1;
  const f = u.filter((h) => !h.is(o)), d = Ks(t);
  e.insertAfter(d), d.append(...f);
  const [p] = f;
  return K(p) ? nl(p) : d.select(0, 0), as(n) && Al(d), !0;
}
function a2(e, t) {
  const n = w();
  return !E(n) || !n.isCollapsed() ? !1 : (n.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Dv(e) {
  const t = w();
  return E(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function c2(e) {
  const t = Ze(e.anchor.getNode(), we);
  if (!t) return;
  const n = t.getFirstChild();
  !n || !Id(n) || (Rc(e.anchor, t, n), Rc(e.focus, t, n));
}
function l2(e, t, n, r) {
  const i = w();
  if (E(i) ? c2(i) : r.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && t2(), e.kind === "closeTag") {
    Dv(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && $v() !== "declined") return;
  if (e.kind === "paragraph" && Dt.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers)) {
    r2(e.marker, t.trigger, r.viewOptions);
    return;
  }
  if (Je.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers))
    return vT(
      e.marker,
      n,
      r.expandedNoteKeyRef,
      r.viewOptions,
      r.nodeOptions,
      r.logger
    );
  Tf(
    e.marker,
    r.expandedNoteKeyRef,
    r.viewOptions,
    r.nodeOptions,
    r.logger,
    void 0,
    r.styleInfo
  ).action({ editor: It(), reference: n });
}
function Uf(e, t) {
  const n = w();
  if (!E(n)) return !1;
  Xd(n);
  const r = (n.isBackward() ? n.focus : n.anchor).getNode();
  if (!Ze(r, me)) {
    const o = Ze(r, we);
    if (o) return o2(o, e, t);
  }
  const i = as(t);
  if (xT()) {
    const o = w();
    if (!E(o)) return !1;
    const a = Ze(o.anchor.getNode(), me);
    return a ? (a.setMarker(e), i && Al(a), !0) : !1;
  }
  const s = n.insertParagraph();
  return me(s) ? (i ? $c(s, e) : s.setMarker(e), !0) : !1;
}
function u2() {
  const [e] = ve();
  return G(() => e.registerCommand(Oy, () => !0, Qt), [e]), null;
}
function f2(e, t) {
  if (!e.startsWith("\\")) return !0;
  const n = W$.exec(e)?.[1];
  return n === void 0 ? !1 : !uh(n, t);
}
function Kv(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !f2(e.getTextContent(), t)) return;
  const n = e.getParent();
  if (!me(n)) return;
  const r = t(n.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown || n.getFirstChild()?.is(e) !== !0) return;
  const i = n.getPreviousSibling();
  if (!(!me(i) && !we(i)))
    return [i, n];
}
function Uv(e, t) {
  const n = Kv(e, t.getMarker);
  if (!n) return !1;
  const [r, i] = n;
  return we(r) ? Mv(r, t, [i]) : vv([r, i], t);
}
function d2(e, t) {
  const n = w();
  E(n) && [n.anchor, n.focus].forEach((r) => {
    r.key === e.getKey() && r.offset > t && r.set(e.getKey(), t, "text");
  });
}
function Bv(e) {
  const t = H$.exec(e);
  if (!t) return;
  const n = 1 + t[1].length;
  return { start: n, end: n + t[2].length };
}
function p2(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = Bv(e.getTextContent());
  if (!n) return;
  const { offset: r } = t.anchor;
  if (!(r < n.start || r > n.end))
    return r - n.start;
}
function h2(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = e.getNextSibling();
  if (L(e.getParent()) && v(n)) {
    const r = n.getNextSibling();
    if (K(r)) {
      nl(r);
      return;
    }
  }
  v(n) ? n.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function jm(e, t) {
  if (t !== void 0) {
    const n = e.getLatest(), r = Bv(n.getTextContent());
    if (r) {
      const i = Math.min(r.start + t, r.end);
      n.select(i, i);
      return;
    }
  }
  h2(e);
}
function Bf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Fv(e, t, n) {
  if (t.startsWith("+") !== e.getNested())
    return Bn(e, n);
  const r = p2(e), i = e.getParent();
  if (me(i)) {
    if (!uh(t, n.getMarker))
      return Uv(e, n) ? (n.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Bn(e, n);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Bf(s, t) && jm(e, r), n.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (K(i) || L(i)) {
    const s = t.replace(/^\+/, "");
    if (!(K(i) ? Pv(t, n.getMarker) : Je.isValidMarker(s)) || K(i) && Ed(i))
      return Bn(e, n);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Bn(e, n);
    i.setMarker(s);
    const c = i.getChildren().filter(N).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (d2(c, ot(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Bf(a, s) && jm(e, r), n.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Bn(e, n);
}
function zv(e, t) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
  const n = e.getParent();
  if (!K(n) || !n.getFirstChild()?.is(e)) return;
  const r = io.exec(e.getTextContent());
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+") !== e.getNested() || !Pv(i, t)) return;
  const s = e.getMarker();
  if (n.getMarker() !== s) return;
  const o = i.replace(/^\+/, "");
  if (Bf(s, o) && !Ed(n))
    return { char: n, glyph: e, closer: g2(n, s), newMarker: o };
}
function g2(e, t) {
  return e.getChildren().filter(N).filter((n) => n.getMarkerSyntax() === "closing" && n.getMarker() === t).at(-1);
}
function m2(e) {
  const t = w();
  if (!E(t)) return !1;
  const n = t.isCollapsed() ? [t.anchor] : [t.anchor, t.focus];
  for (const r of n) {
    const i = r.getNode();
    if (i.is(e)) return !0;
    const s = e.getPreviousSibling();
    if (s !== null && i.is(s) && r.offset === s.getTextContentSize())
      return !0;
    const o = e.getNextSibling();
    if (o !== null && i.is(o) && r.offset === 0) return !0;
    const a = e.getParent();
    if (a !== null && i.is(a)) {
      const c = e.getIndexWithinParent();
      if (r.offset === c || r.offset === c + 1) return !0;
    }
  }
  return !!(!t.isCollapsed() && t.getNodes().some((r) => r.is(e)));
}
function y2(e) {
  const t = e.getTextContent(), n = e.getMarkerSyntax() === "closing", r = (n ? /[ \u00A0]+$/ : /^[ \u00A0]+/).exec(t)?.[0];
  if (!r || r.length === t.length) return !1;
  const i = e.getParent();
  let s = e;
  if (n) {
    if (!L(i) || !i.getLastChild()?.is(e)) return !1;
    s = i;
  } else if (Be(i)) {
    const f = Cr(e)?.owner;
    if (!Ue(f) || !i.getFirstChild()?.is(e)) return !1;
    s = f;
  } else if (i?.getFirstChild()?.is(e)) {
    if (me(i)) return !1;
    s = i;
  }
  const o = n ? s.getNextSibling() : s.getPreviousSibling();
  if (!v(o)) return !1;
  const a = n ? t.slice(0, t.length - r.length) : t.slice(r.length);
  if (e.setTextContent(a), !fr(e))
    return e.setTextContent(t), !1;
  const c = w(), l = E(c) && c.isCollapsed() && c.anchor.key === e.getKey() ? c.anchor.offset : void 0;
  if (n) {
    if (o.setTextContent(r + o.getTextContent()), l !== void 0 && l > a.length) {
      const f = l - a.length;
      o.select(f, f);
    }
    return !0;
  }
  const u = o.getTextContentSize();
  return o.setTextContent(o.getTextContent() + r), l !== void 0 && (l <= r.length ? o.select(u + l, u + l) : e.select(l - r.length, l - r.length)), !0;
}
function b2(e, t) {
  const n = e.getTextContent();
  if (fr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Be(e.getParent()) && yd(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !m2(e)) {
    F_(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (y2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    if (C0(e) || A2(e)) {
      t.pendingKeys.delete(e.getKey());
      return;
    }
    const r = IT.exec(n);
    if (r) {
      t.pendingKeys.delete(e.getKey()), Fv(e, r[1], t);
      return;
    }
    if (V$.test(n)) {
      t.pendingKeys.delete(e.getKey()), Bn(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const r = e.getParent(), i = ot(e.getMarker(), e.getNested());
    if ((K(r) || L(r)) && !id(r.getParent()) && e.getMarker() === r.getMarker() && r.getLastChild()?.is(e) && n.startsWith(i) && n.length > i.length) {
      const s = w(), o = E(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Le(n.slice(i.length));
      e.setTextContent(i), r.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  if (k2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function k2(e) {
  if (e.getMarkerSyntax() !== "selfClosing" || !Ue(Cr(e)?.owner)) return !1;
  const t = ot(""), n = e.getTextContent();
  if (!n.startsWith(t) || n.length === t.length) return !1;
  const r = e.getParent(), i = Be(r) ? r : e;
  if (Be(r) && !r.getLastChild()?.is(e)) return !1;
  const s = i.getParent();
  if (!s || id(s)) return !1;
  const o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() && o.anchor.offset > t.length ? o.anchor.offset - t.length : void 0, c = Le(n.slice(t.length));
  return e.setTextContent(t), i.insertAfter(c), a !== void 0 && c.select(a, a), !0;
}
function x2(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (uk(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function jv(e) {
  if (!ad(e)?.length)
    throw new Error(`marker "${e}" declares no leading attributes in the markers map`);
  return {
    // `\m`, separator, value word, then either nothing-yet (unterminated), or a
    // separator plus optional trailing text the user typed inside the node.
    valueAndRest: new RegExp(`^\\\\${e}[  ]+([^  \\\\]+)(?:[  ]([\\s\\S]*))?$`),
    // Value word followed DIRECTLY by a `\`-initiated rest, no separator between: `\` is one of
    // the tokenizer's name-scan terminators, so it ends the value's word where an ordinary
    // character would extend it (`\v 1a`). Typed between the value and the glyph's display space
    // (`\v 1\ `), the rest \u2014 backslash plus whatever followed it in the glyph, including that
    // space, which stops being value-adjacent display and becomes content \u2014 extracts to a plain
    // sibling exactly like valueAndRest's separated rest. Without this arm the shape fell
    // through to a whole-paragraph Tier-2 rebuild that produced the SAME tree but lost the caret
    // (observed at the paragraph start, three words from the typed character).
    markerRest: new RegExp(`^(\\\\${e}[  ]+([^  \\\\]+))(\\\\[\\s\\S]*)$`),
    // The marker with its value not yet typed (mid-edit).
    midEdit: new RegExp(`^\\\\${e}[  ]*$`),
    // Value word followed by NOTHING but a terminating separator run (the chapter arm's shape).
    // End-anchored on purpose: bytes past the separator (`\c 1 \ca 5\ca*`) mean the glyph holds
    // more than a retagged number, and the immediate canonical rewrite would DELETE them \u2014 no
    // pend, no settle, no undo entry. Those shapes stay literal instead and settle through the
    // chapter-scoped rebuild on caret departure, whose tokenizer re-homes them (attrCapture
    // folds `\ca`/`\cp` onto the chapter).
    valueTerminated: new RegExp(`^\\\\${e}[  ]+([^  \\\\]+)[  ]+$`)
  };
}
const To = jv("v"), T2 = jv("c"), Vm = /^[ \u00A0]*$/;
function Wm(e, t, n) {
  const r = e.getNextSibling();
  if (v(r) && r.getType() === st.getType() && r.getMode() === "normal" && de(r, be) !== "attribute")
    return r.setTextContent(t + r.getTextContent()), n !== void 0 && r.select(n, n), r;
  const i = Le(t);
  return e.insertAfter(i), n !== void 0 && i.select(n, n), i;
}
function v2(e, t) {
  const n = e.getTextContent(), r = jn("v", e.getNumber());
  if (n === r) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(n);
  if (i) {
    const c = n.slice(i[0].length);
    if (To.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = To.valueAndRest.exec(c);
    if (l && Vm.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (To.midEdit.test(n)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = To.valueAndRest.exec(n);
  if (!s) {
    const c = To.markerRest.exec(n);
    if (c) {
      const [, l, u, f] = c, d = w(), p = E(d) && d.isCollapsed() && d.anchor.key === e.getKey() ? d.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(jn("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, f.length) : void 0;
      Wm(e, f, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Bn(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(n)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Vm.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(jn("v", o)), a && Wm(e, a, a.length);
}
const C2 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function S2(e, t) {
  if (!DT(e)) return !1;
  const n = e.getParent();
  if (!L(n)) return !1;
  const r = n.getCaller(), i = e.getTextContent();
  if (i === Mt(r))
    return t.pendingKeys.delete(e.getKey()), !0;
  if (!e.isUnmergeable()) return !1;
  t.pendingKeys.delete(e.getKey());
  const s = C2.exec(i);
  return s ? (M2(e, n, s[1], s[2]), !0) : E2(e, r) ? !0 : Hc(i, r).missing && /^[ \u00A0]/.test(i) && !i.includes("\\") && Vv(e) ? (t.pendingKeys.add(e.getKey()), !0) : (Wv(e, n), !0);
}
function _2(e) {
  if (!Nl(e)) return !1;
  const t = e.getTextContent(), n = /^[ \u00A0]+/.exec(t)?.[0];
  if (!n) return !1;
  const r = e.getPreviousSibling(), i = v(r) && r.getMode() === "token" && !!Pl(r);
  if (!v(r) || !(Pe(r) || i)) return !1;
  const s = w();
  if (!E(s) || !s.isCollapsed() || s.anchor.key !== e.getKey() || s.anchor.offset > n.length)
    return !1;
  const o = s.anchor.offset, a = t.slice(n.length), c = r.getTextContentSize();
  return r.getMode() === "token" ? r.select(c, c) : (r.setTextContent(r.getTextContent() + n), r.select(c + o, c + o)), a ? e.setTextContent(a) : e.remove(), !0;
}
function M2(e, t, n, r) {
  const i = e.getTextContent(), s = i.length - r.length, o = /^[ \u00A0]*/.exec(i)?.[0].length ?? 0, a = w(), c = E(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  t.getCaller() !== n && t.setCaller(n), e.setTextContent(Mt(n));
  const l = r ? Gv(t, e, r.replaceAll(q, " ")) : void 0;
  if (c === void 0) return;
  if (c >= s) {
    const f = c - s;
    l ? l.select(f, f) : e.select(e.getTextContentSize(), e.getTextContentSize());
    return;
  }
  const u = 1 + Math.min(Math.max(c - o, 0), n.length);
  e.select(u, u);
}
function E2(e, t) {
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = e.getTextContent(), s = i.slice(0, r.offset);
  if (i.slice(r.offset) !== Mt(t) || !LT.test(s) || s.includes("\\")) return !1;
  const o = e.getPreviousSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || !io.test(o.getTextContent())) return !1;
  const a = o.getTextContent() + s;
  return e.setTextContent(Mt(t)), o.setTextContent(a), o.select(a.length, a.length), !0;
}
function A2(e) {
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1) return !1;
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const r = e.getTextContent(), { anchor: i } = n;
  if (i.key !== e.getKey() || i.offset !== r.length) return !1;
  const s = Ve(e.getMarker()), o = r.slice(s.length);
  if (!r.startsWith(s) || !/^[|\\\s]+$/.test(o)) return !1;
  const a = e.getNextSibling();
  return !v(a) || N(a) || !a.isUnmergeable() ? !1 : (e.setTextContent(s), a.setTextContent(o + a.getTextContent()), a.select(o.length, o.length), !0);
}
function Vv(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.key === e.getKey()) return !0;
  const r = e.getNextSibling();
  return n.offset === 0 && r !== null && n.key === r.getKey();
}
function Wv(e, t) {
  const n = t.getCaller(), r = e.getTextContent(), { start: i } = Hc(r, n), s = gd(r, n), o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? o.anchor.offset : void 0;
  e.setTextContent(Mt(n));
  const c = s ? Gv(t, e, s) : void 0;
  if (a !== void 0)
    if (c && a >= i) {
      const l = Math.min(a - i, s.length);
      c.select(l, l);
    } else Jv(t, e);
}
function Pl(e) {
  if (!v(e) || N(e) || !e.isUnmergeable()) return;
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1) return;
  let n = t.getFirstChild();
  for (; N(n) && n.getMarkerSyntax() === "opening"; ) n = n.getNextSibling();
  return e.is(n) ? t : void 0;
}
function P2(e, t, n) {
  const r = Pl(e);
  if (!(!r || !v(e)))
    return e.getTextContent() === Mt(r.getCaller()) ? !1 : n === "idle" && Vv(e) ? (t.pendingKeys.add(e.getKey()), !1) : (Wv(e, r), !0);
}
function Hv(e, t) {
  const { wrapper: n, closer: r } = ha(e);
  return (n ?? r ?? t).getNextSibling();
}
function Nl(e) {
  return v(e) && e.getType() === st.getType() && e.getMode() === "normal" && !e.isUnmergeable() && de(e, be) !== "attribute";
}
function Gv(e, t, n) {
  const r = Hv(e, t);
  if (Nl(r))
    return r.setTextContent(n + r.getTextContent()), r;
  const i = Le(n);
  return r ? r.insertBefore(i) : e.append(i), i;
}
function Jv(e, t) {
  const n = Hv(e, t);
  Nl(n) ? n.select(0, 0) : n ? e.select(n.getIndexWithinParent(), n.getIndexWithinParent()) : e.select(e.getChildrenSize(), e.getChildrenSize());
}
function N2(e, t) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const n = e.getCaller();
  if (!ad(e.getMarker())?.includes("caller")) return;
  const r = e.getChildren();
  let i = 0;
  for (; i < r.length; ) {
    const c = r[i];
    if (!N(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (i === 0) return;
  const s = r[i];
  if (v(s) && !N(s) && (s.isUnmergeable() || s.getTextContent() === Mt(n)))
    return;
  const o = Le(Mt(n)).toggleUnmergeable();
  t.viewOptions?.isNoteShellEditable === !1 && o.setMode("token"), r[i - 1].insertAfter(o);
  const a = w();
  E(a) && a.isCollapsed() && (a.anchor.key === r[i - 1].getKey() || a.anchor.key === e.getKey() && a.anchor.offset === i) && Jv(e, o);
}
function w2(e) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const t = e.getChildren(), n = t.find(
    (o) => N(o) && o.getMarkerSyntax() === "opening"
  );
  if (!N(n) || n.getMode() !== "token" || e.getUnknownAttributes()?.closed === "false") return;
  let r = t.find(
    (o) => N(o) && o.getMarkerSyntax() === "closing"
  );
  r || (r = Lt(e.getMarker(), "closing"), r.setMode("token"), e.append(r));
  for (let o = r.getNextSibling(); o; o = r.getNextSibling())
    r.insertBefore(o);
  const i = r.getPreviousSibling(), s = i?.getPreviousSibling();
  Nl(i) && K(s) && !s.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing") && s.append(i);
}
function O2(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const n = jn("c", e.getNumber()), r = t.getTextContent();
  if (r === n) return;
  const i = /^[ \u00A0]+/.exec(r), s = i ? r.slice(i[0].length) : r, o = T2.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Yv(e) {
  if (Ue(e)) {
    const { wrapper: t } = Gc(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (L(e)) {
    const { wrapper: t } = ha(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ee(e)) {
    const t = [], n = hb(e);
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = mb(e);
    return r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper), t;
  }
  if (Pe(e)) {
    const t = [], n = Vo(e, "va");
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = n.wrapper ?? n.closer ?? e, i = Vo(r, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function $2(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const n = t.anchor.getNode();
  return Yv(e).some((r) => n.is(r));
}
function R2(e, t, n = "departure") {
  let r = !1;
  const i = n === "departure";
  if (i && me(e) && sk(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Wo)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && ya(l, e) && (i || $2(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Yv(e))
    l.remove(), r = !0;
  let s = !1;
  K(e) && Pb(e) !== void 0 && !Ed(e) && (Nb(e), s = !0, r = !0);
  let o = !1, a = !1, c = !1;
  for (const l of Wo)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (hE(l, e)) {
        Jo(l, e), a = !0, r = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Mk(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      rl(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: r } : { handled: o, mutated: r };
}
function Hm(e) {
  return v(e) && e.getType() === st.getType() && e.getMode() === "normal" && de(e, be) !== "attribute";
}
function I2(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const n = Q(e);
  if (!n?.isAttached()) return t;
  for (let r = n.getPreviousSibling(); r && Hm(r); r = r.getPreviousSibling())
    t.add(r.getKey());
  for (let r = n.getNextSibling(); r && Hm(r); r = r.getNextSibling())
    t.add(r.getKey());
  return t;
}
function Da(e, t, n = "departure") {
  let r = !1;
  if (e.pendingKeys.size === 0) return r;
  const i = I2(t), s = [...e.pendingKeys].filter((l) => !i.has(l)), o = new Set(
    s.filter((l) => {
      const u = Q(l);
      return !!u?.isAttached() && !!zv(u, e.getMarker);
    })
  ), a = [
    ...s.filter((l) => o.has(l)),
    ...s.filter((l) => !o.has(l))
  ], c = /* @__PURE__ */ new Set();
  for (const l of a) {
    const u = Q(l);
    if (!u?.isAttached()) {
      e.pendingKeys.delete(l);
      continue;
    }
    if (Pl(u)) {
      e.pendingKeys.delete(l), r = P2(u, e, n) || r;
      continue;
    }
    if (N(u)) {
      e.pendingKeys.delete(l);
      const g = u.getTextContent();
      if (fr(u)) continue;
      const m = io.exec(g);
      u.getMarkerSyntax() === "opening" && m ? r = Fv(u, m[1], e) || r : n === "idle" && Um(u, e.getMarker, e.viewOptions) ? e.pendingKeys.add(l) : Uv(u, e) ? (r = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : r = Bn(u, e) || r;
      continue;
    }
    const f = Cr(u)?.owner, d = f?.isAttached() ? f : u, p = d.getKey();
    if (c.has(p)) {
      l !== p && e.pendingKeys.delete(l);
      continue;
    }
    if (i.has(p)) {
      e.pendingKeys.delete(l), e.pendingKeys.add(p);
      continue;
    }
    e.pendingKeys.delete(l), l !== p && e.pendingKeys.delete(p), c.add(p);
    const h = R2(d, e, n);
    if (r = h.mutated || r, !h.handled) {
      if (n === "idle" && Um(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(p);
        continue;
      }
      r = Bn(d, e) || r;
    }
  }
  return r;
}
function Xv(e) {
  if (rn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (K(t)) return Ao(t) !== void 0;
  return !1;
}
function L2(e) {
  const t = Cr(e);
  if (!t) return !1;
  const n = Fr(t.kind);
  return !rl(
    n,
    n.scanPieces(t.owner),
    n.expectedPieces(t.owner)
  );
}
function Gm(e) {
  let t = e.getParent();
  for (; se(t); ) t = t.getParent();
  return K(t) ? t : void 0;
}
function q2(e, t) {
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = t.getFirstChild();
  if (!N(i) || i.getMarkerSyntax() !== "opening") return !1;
  let s = i.getNextSibling();
  for (; se(s); ) s = s.getFirstChild();
  if (!e.is(s) || !io.test(i.getTextContent())) return !1;
  const o = e.getTextContent(), a = o.slice(0, r.offset);
  if (!LT.test(a) || o[r.offset] !== q) return !1;
  const c = i.getTextContent() + a;
  return e.setTextContent(o.slice(a.length)), i.setTextContent(c), i.select(c.length, c.length), !0;
}
function D2(e, t) {
  const n = e.getTextContent(), r = de(e, be), i = e.getParent();
  if (r !== "attribute" && Ee(i)) {
    n.replace(/^[ \u00A0]+/, "") === jn("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (S2(e, t) || _2(e)) return;
  if (r === "attribute") {
    L2(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Gm(e);
  if (s && q2(e, s)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!n.includes("\\")) {
    n.includes("|") && Xv(e) || n.includes("//") && !Uu(e) || yb(e) || Ee(na(e)) ? t.pendingKeys.add(e.getKey()) : t.pendingKeys.delete(e.getKey());
    const c = Gm(e);
    c && Md(c) ? t.pendingKeys.add(c.getKey()) : c && Pb(c) !== void 0 && c.markDirty();
    return;
  }
  if (Uu(e)) return;
  const o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? n.slice(0, o.anchor.offset) : n;
  if (G$.test(a)) {
    if (q_(n)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(n)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(n), Bn(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function K2(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Mk(e, t);
}
function U2(e) {
  const t = (n) => {
    if (N(n)) {
      fr(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    if (rn(n)) {
      uk(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    for (const r of Wo)
      r.settleScope !== "none" && r.ownerPredicate(n) && (ya(r, n) || K2(r, n)) && e.pendingKeys.add(n.getKey());
    if (Pe(n)) {
      n.getTextContent() !== jn("v", n.getNumber()) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (v(n)) {
      if (n.getType() !== st.getType() || de(n, be) === "attribute") return;
      const r = n.getParent();
      if (Ee(r)) {
        n.getTextContent() !== jn("c", r.getNumber()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const i = Pl(n);
      if (i) {
        n.getTextContent() !== Mt(i.getCaller()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const s = n.getTextContent();
      (s.includes("\\") || s.includes("|") && Xv(n) || s.includes("//") || yb(n) !== void 0) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (K(n)) {
      Md(n) && e.pendingKeys.add(n.getKey()), n.getChildren().forEach(t);
      return;
    }
    if (!et(n)) {
      if (Be(n) && n.getChildrenSize() === 0) {
        const r = Cr(n)?.owner;
        r && e.pendingKeys.add(r.getKey());
        return;
      }
      A(n) && n.getChildren().forEach(t);
    }
  };
  Ce().getChildren().forEach(t);
}
const Qv = Xf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Su(e) {
  const t = e();
  return Wt(td), Wt(zy), t;
}
const Jm = 8, B2 = 1e3;
function Ts(e, t) {
  const n = Pe(e) ? ["va", "vp"] : Ue(e) ? ["milestone"] : L(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const r of n)
    kE(Fr(r), e, t.pendingKeys);
}
function F2(e, t) {
  const n = (r, i) => {
    if (i.updateTags.has(Fc) || Gd(e) === "remote")
      return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of r) {
        if (a !== "destroyed") continue;
        const c = Q(o);
        if (!c) continue;
        const l = Cr(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = Q(o.getKey());
        c?.isAttached() && Fr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return tt(
    // Registered for the four node classes a display-run piece (or a whole run
    // wrapper) can be — a plain TextNode (a char span's `|…` run, a verse's `\va`/`\vp` value, a
    // milestone's attribute text), a MarkerNode (a run's opening/closing glyphs, which
    // subclasses TextNode), an ImmutableTypedTextNode (a visible/hidden-mode milestone run's
    // DecoratorNode form), or an AttributeRunNode (the wrapper itself, destroyed as a whole —
    // $ownerOfRunPiece, displayRunOwner.utils.ts, recognizes this shape directly).
    // Lexical dispatches mutation listeners by exact node type — MarkerNode being a TextNode
    // subclass does not make the TextNode registration see it, mirroring the transform dispatch
    // the TextNode catch-all transform's own comment documents — so each class needs its own
    // registration.
    e.registerMutationListener(st, n),
    e.registerMutationListener(Wn, n),
    e.registerMutationListener(Hn, n),
    e.registerMutationListener(Ar, n)
  );
}
function Ff(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const n = w();
  return n ? t ? Qx(n, t) : E(n) && Rs(n) : !1;
}
function z2(e, t, n) {
  return tt(
    e.registerCommand(
      er,
      (r) => {
        if (dl() || Ff(t)) return !1;
        const i = Mf(r, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = n ? Fp(zp(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Fm(o, t.getMarker);
          if (a === "declined" && WI(e) && (a = Fm(o, t.getMarker)), a === "handled")
            return r?.preventDefault(), !0;
        }
        return !1;
      },
      He
    ),
    e.registerCommand(
      er,
      (r) => {
        const i = Mf(r, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !p$()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && E(o) && Rs(o) ? !1 : (r?.preventDefault(), E(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ko, void 0), a === "") return;
          const l = w();
          E(l) && l.insertText(a);
        }), !0);
      },
      Ge
    ),
    e.registerCommand(
      er,
      () => (t.splitExpected.current = !0, !1),
      Qt
    )
  );
}
function j2({
  viewOptions: e,
  getMarker: t,
  logger: n,
  markerSettleDelayMs: r,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = ve(), a = e?.markerMode === "editable", c = !!e && Kt(e), l = ne(void 0), u = ne(r), f = ne(s);
  return G(() => {
    u.current = r, f.current = s;
    const d = l.current;
    d && (e && (d.viewOptions = e), d.getMarker = t ?? vr, d.logger = n, d.structureProtectionMode = i);
  }, [e, t, n, r, i, s]), G(() => {
    if (!a || !e) return;
    const d = {
      viewOptions: e,
      getMarker: t ?? vr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: n,
      structureProtectionMode: i
    };
    l.current = d;
    const p = T0(
      o,
      d.pendingKeys,
      ($) => {
        d.pendingKeys.clear(), $.read(() => U2(d));
      }
    );
    let h, g = !1, m = !1, y, k = !1, x = !1, S = 0;
    const _ = () => S < Jm ? !1 : (d.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Jm} consecutive mutating passes; leaving ${d.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...d.pendingKeys].join(", ")}`
    ), !0), F = ($, D = "departure") => {
      o.update(() => {
        S = Su(
          () => Da(d, $, D)
        ) ? S + 1 : 0;
      });
    };
    let U;
    const W = () => {
      if (U !== void 0 && clearTimeout(U), U = void 0, x || d.pendingKeys.size === 0) return;
      const $ = u.current ?? B2;
      $ < 0 || (U = setTimeout(() => {
        U = void 0, !(x || d.pendingKeys.size === 0) && (g || _() || F(void 0, "idle"));
      }, $));
    }, ae = tt(
      o.registerNodeTransform(Wn, ($) => {
        if (o.isComposing()) return;
        b2($, d);
        const D = Cr($);
        D && (Pe(D.owner) || L(D.owner) || Ee(D.owner) || Ue(D.owner) && Gc(D.owner).wrapper === void 0) && Ts(D.owner, d);
      }),
      o.registerNodeTransform(Ft, ($) => {
        o.isComposing() || (v2($, d), Ts($, d));
      }),
      o.registerNodeTransform(Ln, ($) => {
        o.isComposing() || (O2($), $.isAttached() && Ts($, d));
      }),
      o.registerNodeTransform(Dt, ($) => {
        o.isComposing() || KI($, d);
      }),
      o.registerNodeTransform(ze, ($) => {
        if (!o.isComposing()) {
          jI($, d);
          for (const D of ["separator", "char"])
            $.isAttached() && ya(Fr(D), $) && d.pendingKeys.add($.getKey());
        }
      }),
      // Self-healing milestone display run (the shared $syncDisplayRun driver,
      // displayRunSync.utils.ts, parameterized by the milestone descriptor): a `MilestoneNode`
      // exists in every markerMode, so — unlike CharNode/VerseNode, whose editable-only node types
      // make an ungated shared-react plugin registration safe — this sync is registered HERE, gated by
      // this whole plugin's markerMode-"editable" check, so visible/hidden mode's
      // ImmutableTypedTextNode-based milestone runs (built by the adaptor, never edited) are never
      // touched. Same grace/pend pairing as the char/verse cases: while the caret holds the run's
      // site — inside the attribute text (reachable when a remote collab update changes
      // sid/eid/unknownAttributes while the local caret is mid-editing that same run), or at a
      // just-deleted run's insertion point (the run is the milestone's entire byte
      // representation, so deleting all of it must delete the milestone, not resurrect the run)
      // — the sync leaves it alone and the milestone is pended for the caret-departure settle
      // ($resolvePendingMarkers).
      o.registerNodeTransform(sr, ($) => {
        o.isComposing() || Ts($, d);
      }),
      o.registerNodeTransform(Ar, ($) => {
        if (o.isComposing()) return;
        const D = Cr($);
        D && (Ue(D.owner) || Pe(D.owner) || L(D.owner) || Ee(D.owner)) && Ts(D.owner, d);
      }),
      o.registerNodeTransform(Je, ($) => {
        o.isComposing() || (zI($, d), N2($, d), w2($), Ts($, d));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(dr, ($) => {
        o.isComposing() || x2($, d);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(st, ($) => {
        o.isComposing() || D2($, d);
      }),
      // Plain TextNodes can't emit a DOM class from node state the way
      // ImmutableTypedTextNode does in createDOM(), so a char span's own `|…` attribute run
      // (textType "attribute") renders without the `.attribute` dim-until-hover styling that PT9
      // applies. DOM-only decoration from OUTSIDE the update cycle reconciles it post-render — no
      // editor.update here, since mutating state from inside a mutation listener risks a cascading
      // update loop. skipInitialization: false so nodes already in the initial editor state (not
      // just later edits) get the class too.
      //
      // A value riding INSIDE an AttributeRunNode wrapper (a verse's \va/\vp value, or a
      // milestone's attribute text) is styled entirely by the WRAPPER's own DOM class
      // (AttributeRunNode.createDOM: "attribute-run" always — dim, matching plain `.attribute` —
      // plus "usfm_va"/"usfm_vp" for those two runKinds, PT9's green/blue superscript). `color`
      // and `font-size` are both inherited properties, so they cascade from the wrapper down to
      // its children for free; adding a class DIRECTLY to the value here would fight that
      // inheritance rather than add to it — a rule that targets an element directly always wins
      // over an inherited value, no matter how much lower its own specificity is than the
      // ancestor's rule, so a wrapped value that ALSO carried its own `.attribute`/`usfm_va` class
      // silently reverted a verse's green/blue value back to plain dim gray, and doubled the
      // wrapper's own font-size/vertical-align on top of an identical direct copy of the same
      // rule (this is the shape the mutation listener used to build BEFORE wrapping landed, kept
      // unintentionally after — the wrapper's own class was always meant to be the run's ONLY
      // styling source). Skip any value whose parent is a wrapper entirely; only a genuinely
      // UNWRAPPED value still needs its own class here — a char span's own run, which never gets
      // a wrapper at all (a leaf CharNode's attribute run lives inside it as ordinary children,
      // per AttributeRunNode.ts). A verse/milestone value the heal-forward sync has not yet
      // wrapped (mid-edit grace defers the wrap the same way it defers a content fix —
      // attributeDisplay.utils.ts) gets only the generic dim `.attribute` class below, not the
      // marker-specific `usfm_va`/`usfm_vp` superscript coloring, until the wrap lands — a brief,
      // imperceptible gap in a transient shape nothing at rest builds anymore.
      o.registerMutationListener(
        st,
        ($) => {
          o.getEditorState().read(() => {
            for (const [D, ge] of $) {
              if (ge === "destroyed") continue;
              const re = Q(D);
              !re || de(re, be) !== "attribute" || Be(re.getParent()) || o.getElementByKey(D)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      F2(o, d),
      ...c ? [
        o.registerNodeTransform(st, ($) => {
          o.isComposing() || aR($);
        }),
        o.registerCommand(
          qs,
          ($) => Em(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
            o,
            !1,
            f.current
          ),
          Ge
        ),
        o.registerCommand(
          ir,
          ($) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            Em(
              $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
              o,
              !0,
              f.current
            )
          ),
          Ge
        ),
        o.registerCommand(
          er,
          ($) => mR(
            // Same jsdom-safe duck-check as COPY above.
            $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
            d.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              d.splitExpected.current = !0;
            }
          ),
          Ge
        )
      ] : [],
      o.registerCommand(
        ir,
        () => (!Ff(d) && !dl() && Df(d), !1),
        He
      ),
      o.registerCommand(
        la,
        () => (o.isComposing() || LI(d), !1),
        Tr
      ),
      o.registerCommand(
        jc,
        ($) => $ || o.isComposing() ? !1 : FI(),
        Tr
      ),
      o.registerCommand(
        zc,
        () => (g = !1, S = 0, W(), !1),
        Qt
      ),
      o.registerCommand(
        Mr,
        ($) => (g = !1, S = 0, W(), ($.key === "Backspace" || $.key === "Delete") && !Ff(d, Gx($)) && (Df(d), II(d), queueMicrotask(() => {
          d.wholeParaDeleteExpected?.clear(), d.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !$.ctrlKey || $.altKey || $.shiftKey || $.metaKey || $.key !== " " && $.code !== "Space" || !d$() ? !1 : ($.preventDefault(), !0)),
        Ge
      ),
      o.registerCommand(
        Ny,
        ($) => {
          const D = $v();
          D === "needs-plain-split" && o.dispatchCommand(Ko, void 0);
          const ge = D !== "declined" || xE();
          return ge && $?.preventDefault(), Da(d), ge;
        },
        Ge
      ),
      o.registerCommand(
        Ko,
        () => (d.splitExpected.current = !0, xT()),
        Ge
      ),
      z2(o, d, c),
      o.registerCommand(
        Qv,
        () => {
          if (g) return !0;
          const $ = o.getRootElement(), D = $?.ownerDocument, ge = !!$ && !!D && D.hasFocus() && $.contains(D.activeElement);
          let re;
          if (ge) {
            const qe = w();
            re = E(qe) ? qe.focus.key : h;
          }
          return Su(() => Da(d, re)), !0;
        },
        Qt
      ),
      o.registerCommand(
        ld,
        () => (m = !0, !1),
        Qt
      ),
      o.registerCommand(
        rd,
        () => {
          if (g) return !1;
          const $ = w(), D = E($) ? $.focus.key : h;
          return Su(() => Da(d, D)), !1;
        },
        Qt
      ),
      o.registerUpdateListener(({ editorState: $, tags: D }) => {
        const ge = m || D.has(Oi);
        m = !1, d.splitExpected.current = !1, d.wholeParaDeleteExpected?.clear(), d.collapsedDeleteCaretParas?.clear(), d.rebuildAttempted.clear();
        const re = $.read(() => {
          const ye = w();
          return E(ye) ? ye.focus.key : void 0;
        }), qe = y;
        if (re !== void 0 && (y = re), D.has(Fc)) {
          Mb(o, $, D), g = !0, re !== void 0 && (h = re);
          return;
        }
        if (ge) {
          re !== void 0 && re !== qe && (g = !0);
          return;
        }
        g || (re !== void 0 && (h = re), W(), !(k || re === void 0) && [...d.pendingKeys].some((ye) => ye !== re) && (k = !0, queueMicrotask(() => {
          k = !1, !x && (_() || F(h));
        })));
      })
    );
    return () => {
      x = !0, U !== void 0 && clearTimeout(U), U = void 0, p(), ae(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const V2 = ["status_unknown", "status_invalid"], Zv = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, W2 = Object.values(Zv);
function H2(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const n = Zv[t];
  e.getAttribute("aria-description") !== n && (e.setAttribute("aria-description", n), e.title = n);
}
function Ym(e) {
  e.classList.remove(...V2), e.removeAttribute("aria-description"), W2.includes(e.title) && e.removeAttribute("title");
}
function G2(e, t, n, r) {
  const i = (a) => a.read(() => Ce().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = Q(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of n.keys()) c(l);
      for (const l of r) c(l);
      return a;
    });
}
function J2(e) {
  const t = Q(e), n = t?.getTopLevelElement();
  return !t || !n ? !1 : t.getKey() === n.getKey() ? !0 : N(t) && t.getParent()?.getKey() === n.getKey();
}
function Y2({
  viewOptions: e,
  styleInfo: t,
  logger: n
}) {
  const [r] = ve(), i = e?.markerMode === "editable";
  return G(() => {
    if (!i) return;
    const s = t ?? pc;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      r.isComposing() || r.getEditorState().read(() => {
        const u = RR(s, l);
        let f = u;
        if (l) {
          f = new Map(u);
          for (const [d, p] of o) {
            if (f.has(d) || J2(d)) continue;
            const h = Q(d)?.getTopLevelElement();
            !h || l.has(h.getKey()) || f.set(d, p);
          }
        }
        for (const [d] of o) {
          if (f.has(d)) continue;
          const p = r.getElementByKey(d);
          p && Ym(p);
        }
        for (const [d, p] of f) {
          const h = r.getElementByKey(d);
          h && H2(h, p);
        }
        o = f, n?.debug(`[MarkerValidation] pass: ${f.size} flagged`);
      });
    };
    a();
    const c = r.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: f, dirtyLeaves: d }) => {
        f.size === 0 && d.size === 0 || a(
          G2(l, u, f, d)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = r.getElementByKey(l);
        u && Ym(u);
      }
    };
  }, [r, i, t, n]), null;
}
function ds(e, t, n) {
  const r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++) {
    const s = e[i], o = t[i];
    n.set(s.getKey(), { node: o, siblings: t });
    const a = cr(o);
    a && A(s) && ds(s.getChildren(), a, n);
  }
}
const eC = /* @__PURE__ */ new WeakMap();
function ra(e, t, n = 0) {
  let r = n;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = cr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Gs(a);
      if (l === void 0 || !l.includes(Ct)) continue;
      const u = l.split(Ct), f = [];
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (d > 0)
          for (const h of t[r++] ?? [])
            f.push(h, ...eC.get(h) ?? []);
        if (p.length > 0) {
          const h = {
            ...a,
            text: p
          };
          f.push(h);
        }
      }
      s.splice(o, 1, ...f), o += f.length - 1;
    }
  };
  return i(e), r;
}
function Vr(e, t, n) {
  const r = [], i = [];
  for (const s of e.sentinels) {
    const o = [], a = [];
    for (const c of s) {
      if (n.has(c.getKey())) continue;
      const l = t.get(c.getKey());
      if (!l) return;
      o.push(c), a.push(l.node);
    }
    r.push(o), i.push(a);
  }
  return { live: r, serialized: i };
}
function tC(e, t) {
  const n = [];
  for (const r of e)
    xl(r, t) || ((me(r) || K(r)) && n.push(r.getMarker()), A(r) && n.push(...tC(r.getChildren(), t)));
  return n;
}
function nC(e) {
  const t = [];
  for (const n of e) {
    const r = th(n);
    (r === "para" || r === "char") && t.push(n.marker ?? "");
    const i = cr(n);
    i && t.push(...nC(i));
  }
  return t;
}
function ia(e, t, n) {
  const r = tC(e, n), i = nC(t);
  return r.length === i.length && r.every((s, o) => s === i[o]);
}
function rC(e, t) {
  if (!e || e.input.run.length === 0) return;
  const n = w();
  let r, i;
  if (E(n)) {
    if (!n.isCollapsed()) return;
    r = n.focus.getNode(), i = n.focus.offset;
  } else if (t)
    r = Q(t.key), i = t.offset;
  else
    return;
  if (!(!v(r) || !r.isAttached()) && !(e.nodeKey !== void 0 && r.getKey() !== e.nodeKey) && r.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: r, caretOffset: i, run: e.input.run };
}
function wl(e, t) {
  const n = t && iC(e, t);
  return n ? ah(e, n.start, n.end) : e;
}
function iC(e, t) {
  const n = t.node.getKey(), r = e.spans.find(
    (o) => !o.isSentinel && o.key === n
  );
  if (!r || r.end - r.start !== t.node.getTextContentSize()) return;
  const i = r.start + t.caretOffset, s = i - t.run.length;
  if (!(s < r.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function sC(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = ih(e, a, o);
  if (!l) return;
  const u = Ol(l, s, n), f = wl(u, i), d = ls(f, {
    getMarker: a,
    opensNamelessParagraph: nh(e)
  });
  if (d.length === 0) return;
  if (Jr(d) !== u.sentinels.length) {
    c?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = ar.serializeEditorState(
    { type: rr, version: nr, content: d },
    o
  ).root.children;
  if (fi(p) !== u.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const h = Vr(u, t, r);
  if (!h) {
    c?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (_r(p, a) === Sr(e, a) && ia(e, p, a)) {
    c?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  ra(p, h.serialized);
  const m = oC(e), y = dh(p);
  for (let k = 0; k < m.length && k < y.length; k++)
    m[k].sid !== void 0 && y[k].number === m[k].number && (y[k].sid = m[k].sid);
  return _l(
    e,
    f,
    h.live,
    p,
    "paras",
    a,
    o
  );
}
function oC(e) {
  const t = [], n = (r) => {
    Pe(r) ? t.push({ number: r.getNumber(), sid: r.getSid() }) : A(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function dh(e) {
  const t = [];
  for (const n of e) {
    md(n) && t.push(n);
    const r = cr(n);
    r && t.push(...dh(r));
  }
  return t;
}
function X2(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = Ji(e, a, o);
  if (!l) return;
  const { contentNodes: u } = l;
  if (u.length === 0) return;
  const f = Ol(l.out, s, n), d = wl(f, i), p = ls(d, {
    getMarker: a,
    isNoteContext: !0
  });
  if (p.length === 0) return;
  if (Jr(p) !== f.sentinels.length) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [h] = p;
  if (p.length !== 1 || typeof h != "object" || h.type !== "para") {
    c?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = h.content ?? [], m = Cv(g), y = e.getCategory() !== m, k = iv(e, g);
  if (k) {
    const F = sv(
      e,
      k.before,
      k.after,
      m,
      o
    );
    if (!F || fi(F) !== f.sentinels.length) {
      c?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const U = Vr(f, t, r);
    return U ? (ra(F, U.serialized), {
      rebuilt: void 0,
      contentNodes: u,
      category: m,
      categoryChanged: !1,
      closedAs: F
    }) : void 0;
  }
  const x = rv(e, g, m, o);
  if (x.failure !== void 0) {
    x.failure === "shape" ? c?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && c?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const S = x.children;
  if (fi(S) !== f.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const _ = Vr(f, t, r);
  if (!_) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (_r(S, a) === Sr(u, a) && ia(u, S, a)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: y };
    c?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return ra(S, _.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: _l(
      u,
      d,
      _.live,
      S,
      "noteContent",
      a,
      o
    ),
    contentNodes: u,
    category: m,
    categoryChanged: y
  };
}
function Xm(e) {
  return e.$?.textType;
}
function Q2(e, t) {
  const n = e, r = t;
  return n.type === "text" && r.type === "text" && n.format === r.format && n.style === r.style && n.mode === r.mode && n.detail === r.detail && Xm(e) === Xm(t);
}
function Z2(e) {
  const t = [];
  for (const n of e) {
    const r = Q(n);
    r?.isAttached() && et(r) && r.getTag() === "optbreak" && r.getChildrenSize() === 0 && t.push(r);
  }
  return t;
}
function eL(e) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!L(t)) return;
  const n = e.getTextContent();
  if (fr(e)) return;
  const r = io.exec(n);
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Ic(e, t) {
  const n = e;
  n.marker = t, n.text = Tl(t, n.markerSyntax, n.nested);
}
function aC(e, t) {
  const { glyph: n, note: r, oldMarker: i, newMarker: s } = e;
  if (!Je.isValidMarker(s)) return;
  const o = t.get(r.getKey());
  o && (o.node.marker = s);
  const a = t.get(n.getKey());
  a && Ic(a.node, s);
  const c = r.getChildren().filter(N).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Ic(l.node, s);
}
function cC(e, t, n, r) {
  const i = r.length - (n - t);
  return {
    text: e.text.slice(0, t) + r + e.text.slice(n),
    spans: e.spans.map((s) => s.end <= t ? s : s.start >= n ? { ...s, start: s.start + i, end: s.end + i } : {
      ...s,
      start: Math.min(s.start, t),
      end: s.end >= n ? s.end + i : t + r.length
    }),
    sentinels: e.sentinels
  };
}
function tL(e, t, n) {
  const r = e.spans.find((i) => i.key === t && !i.isSentinel);
  return r ? cC(e, r.start, r.end, n) : e;
}
function lC(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => lC(n, t)), t;
}
function nL(e, t) {
  const n = lC(t), r = e.spans.filter((d) => n.has(d.key));
  if (r.length === 0) return e;
  const i = Math.min(...r.map((d) => d.start)), s = Math.max(...r.map((d) => d.end)), o = e.spans.filter((d) => d.isSentinel && d.start < i).length, a = r.filter((d) => d.isSentinel).length, c = qT.test(e.text.slice(0, i)) ? " " : "", l = cC(e, i, s, c + Ct), u = i + c.length, f = [...e.sentinels];
  return f.splice(o, a, [t]), {
    text: l.text,
    spans: [
      ...l.spans.filter((d) => !n.has(d.key)),
      { key: t.getKey(), start: u, end: u + 1, isSentinel: !0 }
    ].sort((d, p) => d.start - p.start),
    sentinels: f
  };
}
function Ol(e, t, n) {
  let r = e;
  for (const { char: i, glyph: s, closer: o, newMarker: a } of t?.values() ?? [])
    if (r.spans.some((c) => c.key === s.getKey())) {
      if (fv(i, a, n.getMarker)) {
        r = nL(r, i);
        continue;
      }
      o && (r = tL(
        r,
        o.getKey(),
        Ht(Tl(a, "closing", o.getNested()))
      ));
    }
  return r;
}
function uC(e, t) {
  const { char: n, glyph: r, closer: i, newMarker: s } = e, o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Ic(a.node, s);
  const c = i && t.get(i.getKey());
  c && Ic(c.node, s);
}
function rL(e, t, n, r, i, s, o) {
  const { viewOptions: a, getMarker: c, logger: l } = n, u = El(e, c, a), { contentNodes: f } = u;
  if (f.length === 0 && s.length === 0 || !sh(u.out, s, c, a)) return;
  const d = Ol(u.out, o, n), p = wl(d, i), h = _v(p, c);
  if (Jr(h.content) !== d.sentinels.length) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const g = ov(
    e,
    h.lineContent,
    h.followingBlocks,
    a
  );
  if (g.failure !== void 0) {
    g.failure === "shape" && l?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: m, followingBlocks: y } = g;
  if (fi([...m, ...y]) !== d.sentinels.length) {
    l?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const k = Vr(d, t, r);
  if (!k) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (y.length === s.length && _r(y, c) === Sr(s, c) && ia(s, y, c) && _r(m, c) === Sr(f, c) && ia(f, m, c)) {
    l?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const x = ra(m, k.serialized);
  ra(y, k.serialized, x);
  const S = oC([...f, ...s]), _ = dh([...m, ...y]);
  for (let $ = 0; $ < S.length && $ < _.length; $++)
    S[$].sid !== void 0 && _[$].number === S[$].number && (_[$].sid = S[$].sid);
  const F = { ...e.exportJSON(), children: m }, [U, ...W] = _l(
    [...f, ...s],
    p,
    k.live,
    [F, ...y],
    "bookLine",
    c,
    a
  ), ae = U && cr(U);
  if (ae)
    return { rebuilt: ae, contentNodes: f, followingBlocks: W };
}
function fC(e, t, n, r) {
  const { viewOptions: i, getMarker: s, logger: o } = t, a = ta(e, s, i);
  if (!a) return;
  const c = Ol(a, r, t), l = wl(c, n), u = ls(l, {
    getMarker: s
  }), [f] = u;
  if (u.length === 0 || typeof f != "object" || f.type !== "chapter")
    return;
  if (Jr(u) !== 0) {
    o?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const d = ar.serializeEditorState(
    { type: rr, version: nr, content: u },
    i
  ).root.children;
  if (d.length === 0) return;
  const p = [e, ...fs(e)];
  if (!(e.getNumber() !== (f.number ?? "") || e.getAltnumber() !== f.altnumber || e.getPubnumber() !== f.pubnumber) && _r(d, s) === Sr(p, s) && ia(p, d, s)) {
    o?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return _l(
    p,
    l,
    [],
    d,
    "chapter",
    s,
    i
  );
}
function dC(e, t, n) {
  const r = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = (h) => {
    L(h) ? s.set(h.getKey(), h) : Ee(h) ? o.set(h.getKey(), h) : we(h) ? a.set(h.getKey(), h) : r.set(h.getKey(), [h]);
  };
  for (const h of e) {
    const g = Q(h);
    if (!g?.isAttached()) continue;
    const m = zv(g, t.getMarker);
    if (m) {
      u.set(m.char.getKey(), m);
      continue;
    }
    const y = na(g);
    if (y) {
      if (f(y), N(g)) {
        const k = Kv(g, t.getMarker);
        k && i.push(k);
      }
      if (L(y)) {
        const k = eL(g);
        k && l.set(y.getKey(), k);
      }
    }
  }
  const d = /* @__PURE__ */ new Set();
  for (const [h, g] of i)
    d.has(h.getKey()) || d.has(g.getKey()) || ([h, g].forEach((m) => {
      d.add(m.getKey()), r.delete(m.getKey());
    }), we(h) ? (a.set(h.getKey(), h), c.set(h.getKey(), [g])) : r.set(h.getKey(), [h, g]));
  if (n) {
    const h = na(n.node);
    h && !d.has(h.getKey()) && f(h);
  }
  const p = Z2(e);
  return {
    paraScopes: r,
    noteScopes: s,
    chapterScopes: o,
    bookScopes: a,
    bookTrailingParas: c,
    noteGlyphRenames: l,
    charOpenerRenames: u,
    husks: p,
    huskKeys: new Set(p.map((h) => h.getKey()))
  };
}
function pC(e, t) {
  e.splice(t, 1);
  const n = e[t - 1], r = e[t], i = n && Gs(n), s = r && Gs(r);
  n && r && i !== void 0 && s !== void 0 && Q2(n, r) && (n.text = i + s, e.splice(t, 1));
}
function Yi(e, t, n, r, i, s) {
  const o = t.get(e.getKey()), a = o ? cr(o.node) : void 0;
  if (!o || !a) return !1;
  const c = X2(e, t, n, r, i, s);
  if (!c) return !1;
  if (c.closedAs) {
    const f = o.siblings.indexOf(o.node);
    if (f < 0) return !1;
    const [d, ...p] = c.closedAs, h = o.node;
    for (const g of Object.keys(h)) Reflect.deleteProperty(h, g);
    return Object.assign(h, d), o.siblings.splice(f + 1, 0, ...p), p.length > 0 && eC.set(o.node, p), !0;
  }
  if (c.categoryChanged) {
    const f = o.node;
    c.category === void 0 ? delete f.category : f.category = c.category;
  }
  if (!c.rebuilt) return c.categoryChanged;
  const l = t.get(c.contentNodes[0].getKey());
  if (!l) return c.categoryChanged;
  const u = a.indexOf(l.node);
  return u < 0 ? c.categoryChanged : (a.splice(u, c.contentNodes.length, ...c.rebuilt), !0);
}
function hC(e, t, n, r, i, s, o) {
  const a = n.get(e.getKey()), c = a ? cr(a.node) : void 0;
  if (!a || !c) return !1;
  const l = rL(
    e,
    n,
    r,
    i,
    s,
    t,
    o
  );
  if (!l) return !1;
  const u = l.contentNodes.at(0), f = u ? n.get(u.getKey()) : void 0;
  if (u && !f) return !1;
  const d = f ? c.indexOf(f.node) : c.length, p = a.siblings.indexOf(a.node);
  return d < 0 || p < 0 ? !1 : (c.splice(d, l.contentNodes.length, ...l.rebuilt), a.siblings.splice(p + 1, t.length, ...l.followingBlocks), !0);
}
function iL(e, t, n, r, i) {
  const s = rC(r, i);
  if (t.size === 0 && !s) return;
  const {
    paraScopes: o,
    noteScopes: a,
    chapterScopes: c,
    bookScopes: l,
    bookTrailingParas: u,
    noteGlyphRenames: f,
    charOpenerRenames: d,
    husks: p,
    huskKeys: h
  } = dC(t, n, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.size === 0 && l.size === 0 && p.length === 0)
    return;
  const g = /* @__PURE__ */ new Map();
  ds(Ce().getChildren(), e.root.children, g);
  for (const m of f.values()) aC(m, g);
  for (const m of d.values()) uC(m, g);
  for (const m of a.values())
    Yi(m, g, n, h, s, d);
  for (const m of o.values()) {
    const y = g.get(m[0].getKey());
    if (!y) continue;
    const k = sC(
      m,
      g,
      n,
      h,
      s,
      d
    );
    if (!k) continue;
    const x = y.siblings.indexOf(y.node);
    x < 0 || y.siblings.splice(x, m.length, ...k);
  }
  for (const m of l.values())
    hC(
      m,
      u.get(m.getKey()) ?? [],
      g,
      n,
      h,
      s,
      d
    );
  for (const m of c.values()) {
    const y = g.get(m.getKey());
    if (!y) continue;
    const k = 1 + fs(m).length, x = fC(m, n, s, d);
    if (!x) continue;
    const S = y.siblings.indexOf(y.node);
    S < 0 || y.siblings.splice(S, k, ...x);
  }
  for (const m of p) {
    const y = g.get(m.getKey());
    if (!y) continue;
    const k = y.siblings.indexOf(y.node);
    k < 0 || pC(y.siblings, k);
  }
  return sT(e, n.viewOptions);
}
function sL({
  viewOptions: e,
  logger: t
}) {
  const [n] = ve(), r = as(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return G(() => {
    if (r)
      return n.registerNodeTransform(
        Dt,
        (i) => oL(i, t)
      );
  }, [n, r, t]), null;
}
function oL(e, t) {
  e.getMarker() !== zn && (e.isEmpty() || kn(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${zn}" (key ${e.getKey()})`
  ), e.setMarker(zn)));
}
function vo(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const aL = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function hr(e) {
  return aL.exec(e)?.[1] ?? e;
}
function lr(e, t) {
  const n = e.jsonPath.slice(hr(e.jsonPath).length);
  return { ...e, jsonPath: `${$t(t)}${n}` };
}
function oo(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
function gC(e) {
  if (Yf(e) || Li(e)) return !0;
  const t = mC(e);
  return t === "marker" || t === "caller";
}
const cL = /^\['([^']+)'\]$/;
function mC(e) {
  if (Lo(e))
    return cL.exec(
      e.jsonPath.slice(hr(e.jsonPath).length)
    )?.[1];
}
function zf(e, t) {
  return gC(e) && oo(In(hr(e.jsonPath)), pn(t));
}
function yC(e, t, n) {
  if (!e.isAttached()) return;
  const [r, i] = $n(
    lr(t, pn(e)),
    n
  );
  if (!(!r || i === void 0))
    return { key: r.getKey(), offset: i, type: A(r) ? "element" : "text" };
}
function ph(e, t) {
  const n = gn(e, t, { addressDisplayBytes: !0 }), r = n && Q(n.key);
  return n && n.offset > 0 && N(r) && r.getMarkerSyntax() !== "opening" ? n : void 0;
}
function bC(e, t) {
  const n = gn(e, t, { addressDisplayBytes: !0 });
  if (!n || n.offset !== 0) return;
  const r = e.spans.findIndex((o) => o.key === n.key), i = e.spans[r], s = r > 0 ? e.spans[r - 1] : void 0;
  if (!(!i || !ws(i) || !s || s.end !== i.start || !ws(s)))
    return Lf(s);
}
function lL(e, t) {
  const n = ph(e, t);
  if (n) return n;
  const r = bC(e, t);
  if (r) return r;
  const i = gn(e, t);
  return i && uL(e, i);
}
function uL(e, t) {
  if (t.type !== "text") return t;
  const n = e.spans.findIndex((a) => a.key === t.key), r = e.spans[n], i = e.spans[n + 1];
  if (!r || !i || r.end === r.start || t.offset !== r.end - r.start)
    return t;
  const s = e.text[i.start] === "\\", o = Rn.test(e.text[r.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function kC(e) {
  const t = e.markerName.length + 2, n = t + e.valueLength;
  return { valueStart: t, closerStart: n, closerLength: e.markerName.length + 2 };
}
function fL(e, t, n) {
  const { keyName: r } = e, { valueStart: i, closerStart: s } = kC(e);
  return n === 0 ? { jsonPath: t, keyName: r } : n < i ? { jsonPath: t, keyName: r, keyOffset: n - 1 } : n < s ? {
    jsonPath: `${t}['${r}']`,
    propertyOffset: n - i
  } : { jsonPath: t, keyName: r, keyClosingMarkerOffset: n - s };
}
function dL(e, t) {
  const { valueStart: n, closerStart: r, closerLength: i } = kC(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if (Do(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (qo(t))
    return s(t.keyClosingMarkerOffset, i, r);
  if (Uc(t)) return 0;
  if (Lo(t))
    return s(t.propertyOffset, e.valueLength, n);
}
function pL(e) {
  return Do(e) || qo(e) || Uc(e) ? e.keyName : mC(e);
}
function hL(e, t, n) {
  const r = lL(e.spelling, t), i = r && Q(r.key);
  if (!r || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === r.key);
  return s ? fL(
    s,
    $t(pn(i)),
    r.offset
  ) : Rt(i, r.offset, n);
}
function gL(e, t) {
  let n = Ce();
  for (let r = 0; r < t.length; r += 1) {
    if (!A(n)) return;
    const i = zt(n, Kt(e.viewOptions))[t[r]];
    if (i?.type !== "element") return;
    n = i.node;
    const s = e.byFirstLiveKey.get(n.getKey());
    if (s?.kind === "note" && !s.closedNote)
      return { plan: s, scratchIndexes: [0, ...t.slice(r + 1)] };
  }
}
function mL(e, t) {
  for (const n of e.byFirstLiveKey.values()) {
    const r = n.closedNote;
    if (!r || !n.liveNodes[0].isAttached()) continue;
    const i = aa(e, n), s = (i?.length ?? 0) - 1, o = r.scratchNotePath.length - 1;
    if (!i || s < 0 || o < 0 || t.length <= s || !oo(t.slice(0, s), i.slice(0, s))) continue;
    const a = t[s] - i[s];
    if (!(a < 0 || a >= r.settledItemsFromNote))
      return {
        plan: n,
        scratchIndexes: [
          ...r.scratchNotePath.slice(0, o),
          r.scratchNotePath[o] + a,
          ...t.slice(s + 1)
        ]
      };
  }
}
function Lc(e, t) {
  const n = In(hr(t.jsonPath));
  if (n.length === 0) {
    if (!Lr(t)) return { kind: "live", location: t };
    const a = e.settledToLiveTopIndex(t.offset);
    if (!a) {
      const c = zt(
        Ce(),
        Kt(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: c } };
    }
    return a.plan && a.indexWithinScope > 0 ? Lc(e, { jsonPath: $t([t.offset]) }) : { kind: "live", location: { ...t, offset: a.liveIndex } };
  }
  const r = mL(e, n);
  if (r) return { kind: "scope", ...r, location: t };
  const i = e.settledToLiveTopIndex(n[0]);
  if (!i) return;
  if (i.plan)
    return {
      kind: "scope",
      plan: i.plan,
      scratchIndexes: [i.indexWithinScope, ...n.slice(1)],
      location: t
    };
  const s = [i.liveIndex, ...n.slice(1)], o = gL(e, s);
  return o ? { kind: "scope", plan: o.plan, scratchIndexes: o.scratchIndexes, location: t } : { kind: "live", location: lr(t, s) };
}
function xC(e, t) {
  const n = pL(t);
  if (n === void 0) return;
  const r = In(hr(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = Q(s.ownerKey);
      if (s.keyName !== n || !o || !oo(pn(o), r))
        continue;
      const a = dL(s, t), c = i.spelling.spans.find((u) => u.key === s.ownerKey), l = a !== void 0 && c ? ii(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: Za(i.spelling, c.start + a)
        }
      };
    }
}
function yL(e, t, n, r) {
  const i = xC(t, n);
  if (i) return i.resolution;
  const [s, o] = $n(n, r.viewOptions);
  if (!s || o === void 0) return;
  const a = gl(e, s), c = a && t.find((d) => d.sentinelIndex === a.sentinelIndex);
  if (c) {
    const d = Ro(c.spelling, s, o);
    return d && {
      kind: "literal",
      run: c,
      anchor: d.anchor,
      atWordByte: Za(c.spelling, d.position)
    };
  }
  if (!a) {
    const d = Ro(e, s, o);
    return d ? {
      kind: "anchor",
      anchor: d.anchor,
      atWordByte: Za(e, d.position)
    } : void 0;
  }
  const l = ml(a.member, s);
  if (!l) return;
  const u = L(a.member) ? Ji(a.member, r.getMarker, r.viewOptions)?.out : void 0, f = u && Ro(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: A(s) ? "element" : "text",
    noteAnchor: f && {
      anchor: f.anchor,
      atWordByte: Za(u, f.position)
    },
    isNoteOwnBytes: L(a.member) && zf(n, a.member)
  };
}
function bL(e, t, n) {
  const r = xC(e, t);
  if (r) return r.resolution !== void 0;
  const [i, s] = $n(t, n);
  return i !== void 0 && s !== void 0;
}
function Za(e, t) {
  const n = e.text[t];
  return n !== void 0 && !Rn.test(n);
}
function TC(e, t) {
  if (t.type !== "text") return t;
  const n = oh(e, t.key, t.offset);
  if (!n) return t;
  const r = n.end - n.start;
  let i = t.offset;
  for (; i < r && Rn.test(e.text[n.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function sa(e, t) {
  const n = e.liveCut;
  return !t || !n || t.type !== "text" || t.key !== n.key ? t : t.offset >= n.nodeOffset ? { ...t, offset: t.offset + n.length } : t;
}
function kL(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    const r = e[n];
    for (let i = 0; i < r.length; i += 1) {
      const s = r[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: n, memberIndex: i };
    }
  }
}
function hh(e) {
  const { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } = e;
  return t && n && r && i ? { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } : void 0;
}
function vC(e) {
  const t = e.liveNodes[0];
  if (!t.isAttached()) return;
  if (e.kind !== "note" && A(t))
    return { key: t.getKey(), offset: 0, type: "element" };
  const n = t.getParent();
  return n ? { key: n.getKey(), offset: t.getIndexWithinParent(), type: "element" } : void 0;
}
function si(e, t) {
  return t?.warn(
    `[positions] A settled location in a pending ${e.kind} scope could not be lined up with its live bytes; it resolves to the front of the scope.`
  ), vC(e);
}
function _u(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), vC(e);
}
function Qm(e) {
  const t = [];
  let n = 0;
  for (const r of e.spans) {
    r.isSentinel && t.push(r.end > r.start ? n : void 0);
    for (let i = r.start; i < r.end; i += 1)
      Rn.test(e.text[i]) || (n += 1);
  }
  return t;
}
function xL(e, t, n, r) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = Qm(s)[n];
  if (a === void 0) return si(e, r);
  const c = Qm(i).findIndex(
    (d) => d !== void 0 && Gp(o, d, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], u = l?.isAttached() ? l.getParent() : void 0;
  if (l && u)
    return { key: u.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const f = gn(i, {
    nonWsBefore: so(o, a, "settled"),
    wsRun: 0
  });
  return f ? sa(e, f) : si(e, r);
}
function CC(e, t, n, r, i, s) {
  const o = hh(e);
  if (!o) return si(e, s);
  const a = !Lr(r), c = wC(
    o.alignment,
    t.nonWsBefore,
    o.scratchFragment.text,
    t,
    o.liveFragment.text,
    Ta(o.alignment, t, "toLive")
  ), l = (f) => {
    const d = ph(o.liveFragment, f);
    if (d) return sa(e, d);
    const p = gn(
      o.liveFragment,
      yh(o.liveFragment, f, a),
      { addressDisplayBytes: a }
    );
    return sa(
      e,
      p && n ? TC(o.liveFragment, p) : p
    );
  }, u = eI(o.alignment, t.nonWsBefore);
  if (u < c.nonWsBefore) {
    const f = l({ ...c, nonWsBefore: u }), d = f && Q(f.key);
    if (f && d && MC(d, f.offset, i)) return f;
  }
  return l(c) ?? si(e, s);
}
function TL(e, t, n, r, i, s) {
  const o = kL(n.sentinelMap, r);
  if (!o) return xL(t, n, r.sentinelIndex, s);
  const a = n.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return _u(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && r.isNoteOwnBytes)
    return yC(a, i, e.viewOptions);
  if (c?.kind === "note")
    return r.noteAnchor ? CC(
      c,
      r.noteAnchor.anchor,
      r.noteAnchor.atWordByte,
      i,
      e.viewOptions,
      s
    ) : si(c, s);
  let l = a;
  for (const u of r.path) {
    if (!A(l)) return _u(t, s);
    const f = l.getChildAtIndex(u);
    if (!f) return _u(t, s);
    l = f;
  }
  return { key: l.getKey(), offset: r.offset, type: r.type };
}
function vL(e, t, n) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = $n(t, n);
    return mn(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (mn(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function CL(e, t, n) {
  const r = _L(e, t, n);
  if (!r) return r;
  const i = lr(n.location, n.scratchIndexes);
  return n.plan.scratch.getEditorState().read(() => {
    const [o, a] = $n(i, t.viewOptions);
    return v(o) && a !== void 0 && a > 0 && a === o.getTextContentSize();
  }) ? SL(t, r, n.location) : r;
}
function SL(e, t, n) {
  const r = Q(t.key);
  if (t.type !== "text" || !v(r)) return t;
  const i = JSON.stringify(n);
  let s = t, o = { node: r, offset: t.offset };
  for (const a of _C(r, t.offset)) {
    if (a.node.is(o.node) && a.offset === o.offset) continue;
    if (a.node.is(o.node)) {
      const l = a.node.getTextContent()[a.offset];
      if (l === void 0 || !Rn.test(l)) break;
    } else if (o.offset !== 0) break;
    o = a;
    const c = Vf(e, a.node, a.offset);
    JSON.stringify(c) === i && (s = { key: a.node.getKey(), offset: a.offset, type: "text" });
  }
  return s;
}
function _L(e, t, n) {
  const { plan: r } = n, { logger: i, viewOptions: s } = e.tier2, o = r.closedNote?.scratchNotePath;
  if (r.kind === "note" && (o ? oo(n.scratchIndexes, o) && !Li(n.location) : n.scratchIndexes.length === 1) && gC(n.location))
    return yC(r.liveNodes[0], n.location, t.viewOptions);
  const a = lr(n.location, n.scratchIndexes);
  if (!r.scratch.getEditorState().read(() => bL(r.settledOnlyRuns, a, s))) return;
  const l = vL(r, a, s);
  if (l) return l;
  const u = hh(r);
  if (!u) return si(r, i);
  const f = r.scratch.getEditorState().read(
    () => yL(
      u.scratchFragment,
      r.settledOnlyRuns,
      a,
      e.tier2
    )
  );
  if (!f) return si(r, i);
  if (f.kind === "preserved")
    return TL(t, r, u, f, n.location, i);
  if (f.kind === "literal") {
    const { run: d, anchor: p } = f, h = ev(d, p.nonWsBefore, "toLiteral") ?? so(d.inner, p.nonWsBefore, "settled"), g = !Lr(n.location), m = yh(
      u.liveFragment,
      {
        nonWsBefore: d.liveBefore + h,
        wsRun: p.nonWsBefore === 0 ? d.liveWsBefore + p.wsRun : p.wsRun
      },
      g
    ), y = gn(u.liveFragment, m, {
      addressDisplayBytes: !0
    }), k = y && Q(y.key);
    if (y && N(k) && k.getMarkerSyntax() !== "opening")
      return sa(r, y);
    const x = gn(u.liveFragment, m, {
      addressDisplayBytes: g
    });
    return x ? sa(
      r,
      f.atWordByte ? TC(u.liveFragment, x) : x
    ) : si(r, i);
  }
  return CC(
    r,
    f.anchor,
    f.atWordByte,
    n.location,
    s,
    i
  );
}
function Zm(e, t, n) {
  const r = Lc(t, n);
  if (!r) return;
  if (r.kind === "live") {
    const o = ML(t, r.location);
    if (o) return o;
    const [a, c] = $n(r.location, t.viewOptions);
    return a && c !== void 0 ? r.location : void 0;
  }
  const i = CL(e, t, r), s = i && Q(i.key);
  return s ? AL(s, i.offset, t.viewOptions, r.plan.liveNodes) : void 0;
}
function ey(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; ) n += 1;
  return n;
}
function SC(e, t, n) {
  const r = ey(e, t), i = Math.min(
    ey([...e].reverse().join(""), [...t].reverse().join("")),
    e.length - r,
    t.length - r
  );
  return n <= r ? n : n >= e.length - i ? n - e.length + t.length : r;
}
function ML(e, t) {
  if (!Li(t)) return;
  const n = In(hr(t.jsonPath));
  for (const [r, i] of e.renamedClosers) {
    const s = Q(r)?.getParent();
    if (!(!s || !oo(pn(s), n)))
      return {
        ...t,
        closingMarkerOffset: SC(
          i.settled,
          i.live,
          Math.min(t.closingMarkerOffset, i.settled.length)
        )
      };
  }
}
function ty(e) {
  for (let t = e; t; t = t.getParent()) {
    let n = t.getPreviousSibling();
    if (n) {
      for (let r = A(n) ? n.getLastChild() : null; r; )
        n = r, r = A(n) ? n.getLastChild() : null;
      return n;
    }
  }
  return null;
}
function EL(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.some((r) => r.is(n))) return !0;
  return !1;
}
function* _C(e, t, n) {
  let r = e;
  if (v(e)) for (let i = t; i >= 0; i -= 1) yield { node: e, offset: i };
  else if (A(e)) {
    const i = e.getChildAtIndex(Math.min(t, e.getChildrenSize()));
    if (i) r = i;
    else {
      const s = e.getLastDescendant();
      if (v(s))
        for (let o = s.getTextContentSize(); o >= 0; o -= 1) yield { node: s, offset: o };
      r = s ?? e;
    }
  }
  for (let i = ty(r); i; i = ty(i))
    if (v(i)) {
      if (n && !EL(i, n)) return;
      for (let s = i.getTextContentSize(); s >= 0; s -= 1) yield { node: i, offset: s };
    }
}
function AL(e, t, n, r) {
  const i = Rt(e, t, n), s = oa([e, t]);
  if (!s || oa($n(i, n))?.is(s)) return i;
  const o = (l, u) => MC(l, u, n), a = gh(e, t), c = a && o(a.node, a.offset);
  if (c) return c;
  for (const l of _C(e, t, r)) {
    if (l.node.is(e) && l.offset === t) continue;
    const u = o(l.node, l.offset);
    if (u) return u;
  }
  return i;
}
function MC(e, t, n) {
  const r = Rt(e, t, n), i = oa($n(r, n));
  if (!i) return;
  if (i.is(Zt(e.getKey(), t, "text"))) return r;
  const s = gh(e, t);
  return s && i.is(Zt(s.node.getKey(), s.offset, "text")) ? r : void 0;
}
function gh(e, t) {
  if (!v(e)) return;
  const n = t === e.getTextContentSize();
  if (!n && t !== 0) return;
  let r = e, i = n ? r.getNextSibling() : r.getPreviousSibling();
  for (; !i; ) {
    const s = r.getParent();
    if (!s || mn(s) || mn(s.getParent())) return;
    r = s, i = n ? r.getNextSibling() : r.getPreviousSibling();
  }
  for (; A(i); ) {
    const s = n ? i.getFirstChild() : i.getLastChild();
    if (!s) return;
    i = s;
  }
  if (v(i))
    return { node: i, offset: n ? 0 : i.getTextContentSize() };
}
function oa([e, t]) {
  if (!e || t === void 0) return;
  if (v(e)) return Zt(e.getKey(), t, "text");
  if (A(e)) return Zt(e.getKey(), t, "element");
  const n = e.getParent();
  if (!n) return;
  const r = e.getIndexWithinParent() + (t > 0 ? 1 : 0);
  return Zt(n.getKey(), r, "element");
}
function EC(e, t, n) {
  const r = $n(e, n), i = $n(t, n), [s, o] = r, [a, c] = i;
  if (s && a && s.is(a))
    return o !== void 0 && c !== void 0 && o > c;
  const l = oa(r), u = oa(i);
  return !!l && !!u && u.isBefore(l);
}
function AC(e, t, n) {
  const r = Lc(e, t), i = Lc(e, n);
  if (!(r?.kind !== "scope" || i?.kind !== "scope" || r.plan !== i.plan))
    return r.plan.scratch.getEditorState().read(
      () => EC(
        lr(r.location, r.scratchIndexes),
        lr(i.location, i.scratchIndexes),
        e.viewOptions
      )
    );
}
function PL(e, t, n) {
  if (t.byFirstLiveKey.size === 0 && t.renamedClosers.size === 0) return n;
  const r = Zm(e, t, n.start);
  if (!r) return;
  if (!n.end) return { ...n, start: r };
  const i = Zm(e, t, n.end);
  if (!i) return;
  const s = AC(t, n.start, n.end);
  return s !== void 0 && EC(r, i, t.viewOptions) !== s ? { ...n, start: i, end: r } : { ...n, start: r, end: i };
}
function jf(e, t) {
  const n = In(hr(t.jsonPath));
  return n.length === 0 ? t : lr(t, [
    e.liveToSettledTopIndex(n[0]),
    ...n.slice(1)
  ]);
}
function PC(e, t) {
  const n = e.closedNoteScopeOver(t.liveNodes[0]);
  if (n && n !== t) return n;
  const r = t.liveNodes[0].getParent(), i = r ? e.planContaining(r) : void 0;
  return i === t ? void 0 : i;
}
function aa(e, t) {
  const n = t.liveNodes[0], r = PC(e, t);
  if (r) {
    const s = $l(e, r, n, 0);
    return typeof s == "object" ? In(hr(s.jsonPath)) : void 0;
  }
  const i = NL(n, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function NL(e, t) {
  return !St(e) || !mn(e.getParent()) ? pn(e) : [Ps(e, 0, Kt(t)).index];
}
function mh(e, t, n) {
  if (!t) return;
  const r = e.closedNote?.scratchNotePath;
  if (r) {
    const a = r.length - 1, c = t.at(-1);
    return c === void 0 || a < 0 || n.length <= a || !oo(n.slice(0, a), r.slice(0, a)) || n[a] < r[a] ? void 0 : [
      ...t.slice(0, -1),
      c + n[a] - r[a],
      ...n.slice(a + 1)
    ];
  }
  const [i, ...s] = n;
  if (i === void 0) return;
  if (e.kind === "note") return i === 0 ? [...t, ...s] : void 0;
  const o = t[0];
  return o === void 0 ? void 0 : [o + i, ...s];
}
function wL(e, t, n) {
  const r = e.liveCut;
  return !r || t.getKey() !== r.key || n <= r.nodeOffset ? n : Math.max(r.nodeOffset, n - r.length);
}
function OL(e, t, n, r, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of n) {
      if (!A(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return Rt(s, r, i);
  }
}
function $L(e, t) {
  const n = tv(e, t);
  if (n)
    return {
      run: n,
      within: { nonWsBefore: 0, wsRun: t.wsRun - n.liveWsBefore }
    };
  const r = Yp(e, t);
  if (r)
    return {
      run: r.run,
      within: r.within ?? {
        nonWsBefore: so(r.run.inner, r.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function RL(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const n = Q(e.key);
  return !(N(n) && n.getMarkerSyntax() !== "opening");
}
function yh(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = Rn.test(e.text[o]);
      if (r < t.nonWsBefore)
        a || (r += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || RL(s, n) ? t : { ...t, wsRun: i };
    }
  return t;
}
function NC(e, t, n, r, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, u = gl(o, n);
  if (u) {
    const m = o.sentinels[u.sentinelIndex];
    if (!c[u.sentinelIndex]?.some((S) => S !== void 0)) {
      const S = m[0].getParent();
      if (S)
        return NC(
          e,
          t,
          S,
          m[0].getIndexWithinParent(),
          i,
          s
        );
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const y = ml(u.member, n);
    if (!y) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const k = c[u.sentinelIndex]?.[u.memberIndex];
    if (!k) return;
    const x = e.scratch.getEditorState().read(
      () => OL(a, k, y, r, i)
    );
    if (x) return x;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const f = Ro(o, n, wL(e, n, r));
  if (!f) return;
  const d = $L(e.settledOnlyRuns, f.anchor);
  if (d)
    return e.scratch.getEditorState().read(() => hL(d.run, d.within, i));
  const p = Ta(l, f.anchor, "toSettled"), h = wC(
    l,
    p.nonWsBefore,
    o.text,
    f.anchor,
    a.text,
    p
  ), g = !Lr(
    Rt(n, r, i)
  );
  return e.scratch.getEditorState().read(() => {
    const m = ph(a, h), y = m && Q(m.key);
    if (y) return Rt(y, m.offset, i);
    const k = bC(a, h), x = k && Q(k.key);
    if (x)
      return Rt(x, k.offset, i);
    const S = yh(a, h, g), _ = gn(a, S, { addressDisplayBytes: g });
    return _ && IL(_, i);
  });
}
function ny(e, t) {
  let n = 0, r = 0;
  for (const i of e) {
    if (Rn.test(i)) {
      r += 1;
      continue;
    }
    if (n === t) return r;
    n += 1, r = 0;
  }
  return r;
}
function wC(e, t, n, r, i, s) {
  if (!e.segments.some(
    (c) => !c.same && c.liveStart === c.liveEnd && c.settledEnd > c.settledStart && c.settledEnd === t
  )) return s;
  const a = ny(n, r.nonWsBefore) - r.wsRun;
  return {
    ...s,
    wsRun: Math.max(0, ny(i, s.nonWsBefore) - a)
  };
}
function IL(e, t) {
  const n = Q(e.key);
  if (!n) return;
  const r = A(n) && e.offset >= n.getChildrenSize() && (mn(n) || n.getLastDescendant()?.is(Ce().getLastDescendant())) && n.getLastDescendant();
  return r ? Rt(
    r,
    A(r) ? r.getChildrenSize() : r.getTextContentSize(),
    t
  ) : Rt(n, e.offset, t);
}
function $l(e, t, n, r) {
  if (t.kind === "note") {
    const a = t.liveNodes[0], c = L(a) && Et(a)?.is(n) && r === n.getTextContentSize() ? gh(n, r) : void 0;
    if (c && !zf(
      Rt(c.node, c.offset, e.viewOptions),
      a
    )) {
      const u = $l(e, t, c.node, c.offset);
      if (typeof u == "object") return u;
    }
    const l = Rt(n, r, e.viewOptions);
    if (zf(l, a)) {
      const u = aa(e, t);
      return u && lr(l, u);
    }
  }
  const i = hh(t);
  if (!i) return;
  const s = NC(
    t,
    i,
    n,
    r,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = mh(
    t,
    aa(e, t),
    In(hr(s.jsonPath))
  );
  return o && lr(s, o);
}
function LL(e) {
  const t = [], n = (r) => {
    if (A(r))
      r.getChildren().forEach((i, s) => {
        t.push({ node: r, offset: s }), n(i);
      }), t.push({ node: r, offset: r.getChildrenSize() });
    else if (v(r))
      for (let i = 0; i <= r.getTextContentSize(); i += 1)
        t.push({ node: r, offset: i });
  };
  return e.liveNodes.forEach(n), t;
}
function qL(e, t) {
  const n = t.scratch.getEditorState().read(() => Rt(Ce(), 0, e.viewOptions)), r = mh(
    t,
    aa(e, t),
    In(hr(n.jsonPath))
  );
  if (r) return lr(n, r);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = PC(e, t);
  return o ? $C(e, o, s, i.getIndexWithinParent()) : jf(
    e,
    Rt(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function OC(e, t, n) {
  const r = LL(t), i = n ? r.findIndex((s) => s.node.is(n.node) && s.offset === n.offset) : -1;
  for (let s = (i < 0 ? r.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = r[s], c = $l(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return qL(e, t);
}
function $C(e, t, n, r) {
  return $l(e, t, n, r) ?? OC(e, t, { node: n, offset: r });
}
function Vf(e, t, n) {
  const r = e.planContaining(t);
  if (r) return $C(e, r, t, n);
  const i = e.renamedClosers.get(t.getKey());
  if (i) {
    const a = Rt(t, n, e.viewOptions);
    return jf(
      e,
      Li(a) ? {
        ...a,
        closingMarkerOffset: SC(
          i.live,
          i.settled,
          a.closingMarkerOffset
        )
      } : a
    );
  }
  const s = mn(t) && n >= t.getChildrenSize() && t.getLastChild(), o = s ? e.planContaining(s) : void 0;
  return o ? DL(e, o) ?? OC(e, o, void 0) : jf(e, Rt(t, n, e.viewOptions));
}
function DL(e, t) {
  const n = t.scratch.getEditorState().read(() => {
    const i = Ce();
    return Rt(i, i.getChildrenSize(), e.viewOptions);
  }), r = mh(
    t,
    aa(e, t),
    In(hr(n.jsonPath))
  );
  return r && lr(n, r);
}
function KL(e) {
  const t = cl(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0 && e.renamedClosers.size === 0)
    return t;
  const n = w();
  if (!E(n)) return;
  const r = n.isBackward(), i = r ? n.focus : n.anchor, s = Vf(e, i.getNode(), i.offset);
  if (!s) return;
  if (n.isCollapsed()) return { start: s };
  const o = r ? n.anchor : n.focus, a = Vf(e, o.getNode(), o.offset);
  if (a)
    return AC(e, s, a) === !0 ? { start: a, end: s } : { start: s, end: a };
}
function UL(e) {
  return e.getKey();
}
function RC(e, t, n) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && St(i) ? mI(i, n.getMarker, n.viewOptions) : t.every(me) ? ih(t, n.getMarker, n.viewOptions) : qm(t, n.getMarker, n.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(Ee);
    if (!i) return;
    const s = new Set([i, ...fs(i)].map(UL));
    return t.every((o) => s.has(o.getKey())) ? ta(i, n.getMarker, n.viewOptions) : qm(t, n.getMarker, n.viewOptions);
  }
  const r = t.find(L);
  return r && Ji(r, n.getMarker, n.viewOptions)?.out;
}
function BL(e, t) {
  const n = sd({
    nodes: [...e],
    onError: (r) => {
      throw r;
    }
  });
  try {
    n.update(
      () => {
        const r = Ce();
        t.forEach((i) => r.append(qr(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return n;
}
const ry = "\0";
function IC(e, t = []) {
  for (const n of e)
    t.push(n.getKey()), A(n) && IC(n.getChildren(), t);
  return t;
}
function FL(e, t, n, r, i) {
  const s = `${r.viewOptions.markerMode}/${r.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(ry), a = IC(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, n, o, a, c].join(ry);
}
function Sa(e, t = []) {
  for (const n of e)
    L(n) && t.push(n), A(n) && Sa(n.getChildren(), t);
  return t;
}
function ao(e, t, n, r, i, s, o, a = () => ({
  fragment: RC(e, Ce().getChildren(), o.tier2)
})) {
  const c = BL(o.nodes, i);
  if (c)
    return LC(e, t, n, r, c, s, o, a);
}
function LC(e, t, n, r, i, s, o, a) {
  const c = i.getEditorState().read(() => {
    const m = a();
    if (!m) return;
    const { fragment: y } = m;
    return {
      settledCount: zt(
        Ce(),
        Kt(o.tier2.viewOptions)
      ).length,
      scratchFragment: y,
      settledSide: y && Jp(y),
      closedNote: m.closedNote
    };
  });
  if (!c) return;
  const { settledCount: l, scratchFragment: u, settledSide: f, closedNote: d } = c, p = {
    kind: e,
    liveNodes: t,
    liveCut: r,
    scratch: i,
    scratchFragment: u,
    settledCount: l,
    ...d && { closedNote: d }
  };
  if ((n?.sentinels.length ?? 0) === 0 && (f?.runs.length ?? 0) === 0) {
    const m = n && f && Oc(wc(n, []), f).alignment;
    return { ...p, liveFragment: n, sentinelMap: [], settledOnlyRuns: [], alignment: m };
  }
  const h = n && s && bv(n, s.live), g = h && f && Oc(wc(h, s.live), f);
  return g ? { ...p, liveFragment: h, ...g } : {
    ...p,
    liveFragment: n,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function co(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const n = iC(e, t);
  return n ? {
    liveFragment: ah(e, n.start, n.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function _a(e, t) {
  for (const n of e.noteGlyphRenames.values())
    aC(n, t);
  for (const n of e.charOpenerRenames.values())
    uC(n, t);
}
function zL(e, t) {
  const n = e.getKey();
  return t.bookScopes.has(n) || [...t.paraScopes.values(), ...t.bookTrailingParas.values()].some(
    (r) => r.some((i) => i.getKey() === n)
  );
}
function jL(e) {
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const r = t[n];
    if (!N(r) || r.getMarkerSyntax() !== "opening") break;
    n += 1;
  }
  return n < t.length ? t.slice(n + 1) : void 0;
}
function VL(e, t, n, r) {
  const { getMarker: i, viewOptions: s } = n.tier2;
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const o = e.getTopLevelElement(), a = o && ml(o, e), c = Ji(e, i, s)?.contentNodes;
  if (!o || !a || !c || zL(o, t)) return;
  const l = e.getNextSiblings(), u = ch([...c, ...l], i, s), f = us(o), d = /* @__PURE__ */ new Map();
  if (ds([o], [f], d), _a(t, d), Sa([o]).filter((y) => !y.is(e) && t.noteScopes.has(y.getKey())).forEach(
    (y) => Yi(
      y,
      d,
      n.tier2,
      t.huskKeys,
      r,
      t.charOpenerRenames
    )
  ), !Yi(
    e,
    d,
    n.tier2,
    t.huskKeys,
    r,
    t.charOpenerRenames
  ))
    return;
  const p = d.get(e.getKey())?.node;
  if (!T_(p) || p.unknownAttributes?.closed === "false")
    return;
  const { liveFragment: h, liveCut: g } = co(u, r), m = Vr(u, d, t.huskKeys);
  return ao(
    "note",
    [e, ...l],
    h,
    g,
    [f],
    m,
    n,
    () => {
      let y = Ce().getFirstChild();
      for (const k of a)
        y = A(y) ? y.getChildAtIndex(k) : null;
      return L(y) ? qC(y, n.tier2) : void 0;
    }
  );
}
function qC(e, { getMarker: t, viewOptions: n }) {
  const r = jL(e), i = e.getParent();
  if (!r || !i) return;
  const s = pn(e), o = s.at(-1);
  if (o === void 0) return;
  const a = s.length === 1 ? Ce() : i, c = zt(a, Kt(n));
  return {
    fragment: ch(
      [...r, ...e.getNextSiblings()],
      t,
      n
    ),
    closedNote: { scratchNotePath: s, settledItemsFromNote: c.length - o }
  };
}
function WL(e, t, n, r, i) {
  const { getMarker: s, viewOptions: o } = r.tier2, { liveFragment: a, sentinelMap: c, scratchFragment: l } = e, u = a && gl(a, t), f = u && u.member.is(t) ? c?.[u.sentinelIndex]?.[u.memberIndex] : void 0, d = Ji(t, s, o)?.contentNodes;
  if (!f || !l || !d) return;
  const p = t.getNextSiblings(), h = ch([...d, ...p], s, o), { liveFragment: g, liveCut: m } = co(h, i), y = {
    live: h.sentinels.map((k) => k.filter((x) => !n.huskKeys.has(x.getKey())))
  };
  return LC(
    "note",
    [t, ...p],
    g,
    m,
    e.scratch,
    y,
    r,
    () => {
      const k = l.sentinels[f.sentinelIndex]?.[f.memberIndex];
      if (!(!L(k) || k.getUnknownAttributes()?.closed === "false"))
        return qC(k, r.tier2);
    }
  );
}
function HL(e, t, n, r, i) {
  const s = VL(e, n, r, i);
  if (s) return s;
  const { liveFragment: o, liveCut: a } = co(t, i), c = us(e), l = /* @__PURE__ */ new Map();
  if (ds([e], [c], l), _a(n, l), !Yi(
    e,
    l,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  ))
    return;
  const u = t && Vr(t, l, n.huskKeys);
  return ao("note", [e], o, a, [c], u, r);
}
function GL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = co(t, i), a = e.map(us), c = /* @__PURE__ */ new Map();
  ds(e, a, c), _a(n, c), Sa(e).filter((f) => n.noteScopes.has(f.getKey())).forEach(
    (f) => Yi(
      f,
      c,
      r.tier2,
      n.huskKeys,
      i,
      n.charOpenerRenames
    )
  );
  const l = sC(
    e,
    c,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  );
  if (!l) return;
  const u = t && Vr(t, c, n.huskKeys);
  return ao("para", e, s, o, l, u, r);
}
function JL(e, t, n, r, i, s) {
  const { liveFragment: o, liveCut: a } = co(n, s), c = [e, ...t], l = c.map(us), u = /* @__PURE__ */ new Map();
  if (ds(c, l, u), _a(r, u), Sa(c).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => Yi(
      d,
      u,
      i.tier2,
      r.huskKeys,
      s,
      r.charOpenerRenames
    )
  ), !hC(
    e,
    t,
    u,
    i.tier2,
    r.huskKeys,
    s,
    r.charOpenerRenames
  ))
    return;
  const f = n && Vr(n, u, r.huskKeys);
  return ao("para", c, o, a, l, f, i);
}
function YL(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = co(t, i), a = fC(e, r.tier2, i, n.charOpenerRenames);
  if (!a) return;
  const c = [e, ...fs(e)];
  return ao("chapter", c, s, o, a, void 0, r);
}
function XL(e, t, n, r, i, s) {
  const o = us(e), a = /* @__PURE__ */ new Map();
  ds([e], [o], a), _a(r, a), Sa([e]).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => Yi(
      u,
      a,
      i.tier2,
      r.huskKeys,
      s,
      r.charOpenerRenames
    )
  );
  const c = /* @__PURE__ */ new Set();
  for (const u of n) {
    const f = a.get(u.getKey());
    if (!f) continue;
    const d = f.siblings.indexOf(f.node);
    d < 0 || (pC(f.siblings, d), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Vr(t, a, c);
  return ao("para", [e], t, void 0, [o], l, i);
}
function QL(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.has(n.getKey())) return !0;
  return !1;
}
function iy(e, t, n = /* @__PURE__ */ new Map()) {
  return {
    renamedClosers: n,
    closedNoteScopeOver: () => {
    },
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (r) => r,
    settledToLiveTopIndex: (r) => ({ liveIndex: r, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e,
    logger: t
  };
}
function ZL(e) {
  return e.liveNodes.every((n) => n.isAttached()) ? (e.liveFragment?.spans ?? []).every((n) => Q(n.key) !== null) : !1;
}
function ec(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function eq(e, t, n = /* @__PURE__ */ new Map()) {
  const r = zt(Ce(), t), i = [], s = [];
  let o = 0;
  for (let a = 0; a < r.length; ) {
    const c = ec(r[a]), l = c && e.get(c.getKey());
    if (!l) {
      i[a] = o, s.push({ liveIndex: a, indexWithinScope: 0 }), o += 1, a += 1;
      const d = r[a] && ec(r[a]), p = c && !d?.is(c) ? n.get(c.getKey()) : 0;
      for (let h = 0; h < (p ?? 0); h += 1)
        s.push({ liveIndex: a, indexWithinScope: 0 }), o += 1;
      continue;
    }
    const u = new Set(l.liveNodes.map((d) => d.getKey()));
    let f = 0;
    for (; a + f < r.length; ) {
      const d = ec(r[a + f]);
      if (!d || !u.has(d.getKey())) break;
      f += 1;
    }
    for (let d = 0; d < f; d += 1)
      i[a + d] = o;
    for (let d = 0; d < l.settledCount; d += 1)
      s.push({ liveIndex: a, plan: l, indexWithinScope: d });
    o += l.settledCount, a += f;
  }
  return { liveToSettled: i, settledToLive: s };
}
function tq(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e.values()) {
    const i = r.liveNodes[0], s = r.closedNote?.settledItemsFromNote, o = i.getTopLevelElement();
    if (s === void 0 || !St(o) || !i.isAttached()) continue;
    const [a, ...c] = pn(i);
    if (a === void 0 || c.length > 0) continue;
    const l = zt(Ce(), t).slice(a).filter((u) => ec(u)?.is(o)).length;
    s > l && n.set(o.getKey(), s - l);
  }
  return n;
}
function sy(e) {
  const t = rC(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), iy(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const n = dC(e.pendedKeys, e.tier2, t), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (g, m) => {
    if (!g) return;
    const y = g.liveNodes[0].getKey();
    r.set(y, g), g.liveNodes.forEach((k, x) => {
      (x === 0 || !i.has(k.getKey())) && i.set(k.getKey(), g);
    }), m && g.liveNodes.forEach((k) => s.set(k.getKey(), g));
  }, c = (g, m, y, k) => {
    o.add(g);
    const x = RC(m, y, e.tier2), S = FL(
      m,
      y,
      x?.text ?? "",
      e.tier2,
      t
    ), _ = e.cache.entries.get(g);
    if (_?.signature === S && ZL(_.plan)) return _.plan;
    const F = k(x);
    return F ? e.cache.entries.set(g, { signature: S, plan: F }) : e.cache.entries.delete(g), F;
  };
  for (const g of n.noteScopes.values())
    a(
      c(
        g.getKey(),
        "note",
        g.getUnknownAttributes()?.closed === "false" ? [g, ...g.getNextSiblings()] : [g],
        (m) => HL(g, m, n, e, t)
      ),
      !1
    );
  for (const g of n.paraScopes.values())
    a(
      c(
        g[0].getKey(),
        "para",
        g,
        (m) => GL(g, m, n, e, t)
      ),
      !0
    );
  for (const g of n.bookScopes.values()) {
    const m = n.bookTrailingParas.get(g.getKey()) ?? [];
    a(
      c(
        g.getKey(),
        "para",
        [g, ...m],
        (y) => JL(g, m, y, n, e, t)
      ),
      !0
    );
  }
  for (const g of n.chapterScopes.values())
    a(
      c(
        g.getKey(),
        "chapter",
        [g, ...fs(g)],
        (m) => YL(g, m, n, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const g of n.husks) {
    const m = g.getTopLevelElement();
    if (!(me(m) || St(m)) || QL(g, i)) continue;
    const y = l.get(m.getKey()) ?? { para: m, husks: [] };
    y.husks.push(g), l.set(m.getKey(), y);
  }
  for (const [g, { para: m, husks: y }] of l)
    a(
      c(
        g,
        "para",
        [m],
        (k) => XL(m, k, y, n, e, t)
      ),
      !0
    );
  for (const g of n.noteScopes.values()) {
    if (g.getUnknownAttributes()?.closed !== "false") continue;
    const m = g.getTopLevelElement(), y = m ? s.get(m.getKey()) : void 0, k = y && WL(y, g, n, e, t);
    if (!k) continue;
    const x = r.get(g.getKey());
    r.set(g.getKey(), k), k.liveNodes.forEach((S, _) => {
      const F = i.get(S.getKey());
      (_ === 0 || !F || F === x) && i.set(S.getKey(), k);
    });
  }
  const u = /* @__PURE__ */ new Map();
  for (const g of r.values())
    g.closedNote && g.liveNodes.slice(1).forEach((m) => u.set(m.getKey(), g));
  for (const g of [...e.cache.entries.keys()])
    o.has(g) || e.cache.entries.delete(g);
  const f = /* @__PURE__ */ new Map();
  for (const { closer: g, newMarker: m } of n.charOpenerRenames.values())
    g && f.set(g.getKey(), {
      live: g.getTextContent(),
      settled: Tl(m, "closing", g.getNested())
    });
  if (r.size === 0)
    return iy(e.tier2.viewOptions, e.tier2.logger, f);
  const d = Kt(e.tier2.viewOptions), { liveToSettled: p, settledToLive: h } = eq(
    s,
    d,
    tq(r, d)
  );
  return {
    byFirstLiveKey: r,
    renamedClosers: f,
    closedNoteScopeOver: (g) => u.get(g.getKey()),
    liveToSettledTopIndex: (g) => p[g] ?? g,
    settledToLiveTopIndex: (g) => h[g],
    planContaining: (g) => {
      for (let m = g; m; m = m.getParent()) {
        const y = i.get(m.getKey());
        if (y) return y;
      }
    },
    viewOptions: e.tier2.viewOptions,
    logger: e.tier2.logger
  };
}
function nq({
  scrRef: e,
  onScrRefChange: t
}) {
  const [n] = ve(), r = ne({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return G(() => {
    const i = r.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, qc(s, e) || rq(i, n, e);
  }, [n, e, t]), G(
    () => n.registerMutationListener(
      Pn,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Wf(n);
        oy(r.current, n, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ka(s) === Ka(n.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [n]
  ), G(() => {
    const i = (a) => a.read(
      () => new Set(
        Ce().getChildren().filter(at).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = n.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), f = i(c), d = [...f].some((p) => !u.has(p));
      d && (Wf(n) || oy(r.current, n, void 0, {
        hasCreated: d,
        hasDestroyed: [...u].some((p) => !f.has(p)),
        isSameDocumentReload: Ka(a) === Ka(c)
      }));
    };
    return tt(
      ...[Ln, Dn].map(
        (a) => n.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [n]), G(
    () => n.registerCommand(
      yn,
      () => {
        const i = r.current;
        return i.phase === "idle" && aq(i, DC()), !1;
      },
      Qt
    ),
    [n]
  ), G(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => n.dispatchCommand(yn, void 0));
    };
    return tt(
      n.registerMutationListener(Jt, i),
      n.registerMutationListener(Ft, i)
    );
  }, [n]), G(() => {
    const i = () => fq(r.current);
    return n.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [n]), null;
}
function rq(e, t, n) {
  if (iq(e, n)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const r = Wf(t);
  (!r || r === n.book) && t.update(() => KC(t, n.chapterNum, n.verseNum));
}
function iq(e, t) {
  const n = e.pendingEchoes.findIndex((r) => qc(r, t));
  return n < 0 ? !1 : (e.pendingEchoes.splice(0, n + 1), e.phase = "idle", !0);
}
function DC() {
  const e = w(), t = tk(e);
  if (!t) return;
  const n = bh(), r = yM(t);
  if (!r && !n) return;
  const i = r ? parseInt(r.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = ep(t, e), { verseNum: o, verse: a } = jE(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: n?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Wf(e) {
  return e.getEditorState().read(() => bh()?.getCode() || void 0);
}
function bh() {
  return Ce().getChildren().find(we);
}
function oy(e, t, n, r) {
  const i = r.hasCreated && !e.sawDocument;
  if (r.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    r.hasCreated && (!n || n === e.scrRef.book) && Mu(e, t);
    return;
  }
  r.hasCreated && r.hasDestroyed ? (r.isSameDocumentReload || Mu(e, t), e.phase = "navigating") : i && Mu(e, t), n && n !== e.scrRef.book && FC(e, { ...e.scrRef, book: n }) && (e.phase = "navigating");
}
function Mu(e, t) {
  queueMicrotask(() => {
    t.update(
      () => KC(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function KC(e, t, n) {
  const r = w()?.clone();
  sq(t, n);
  const i = w();
  i && !(r && i.is(r)) && e.dispatchCommand(ld, void 0);
}
function sq(e, t) {
  const n = DC();
  if (n?.chapterNum === e && (n.verse ? BC(t, n.verse) : n.verseNum === t))
    return;
  const r = Ce().getChildren(), i = Gb(r, e);
  if (!i) return;
  const s = CM(r, i), o = mM(s, !0);
  vM(s, o);
  let a;
  try {
    a = DE(s, t);
  } catch {
    return;
  }
  a && (me(a) ? !v(a.getFirstChild()) && cs(a) || or(a, 0) : oq(a));
}
function oq(e) {
  const t = e.getParent();
  if (!t) return;
  const n = e.getIndexWithinParent() + 1, r = t.getChildAtIndex(n);
  if (!r || Ae(r)) {
    v(e) ? e.selectEnd() : or(t, n);
    return;
  }
  const i = ma(t, n);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    e.selectEnd();
    return;
  }
  const s = A(r) && !L(r) ? UC(r) : void 0;
  s ? s.select(0, 0) : or(t, n);
}
function UC(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (A(t) && !L(t)) return UC(t);
}
function Ka(e) {
  return e.read(() => {
    const t = Ce().getChildren().find(at);
    return `${bh()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function aq(e, t) {
  e.phase !== "navigating" && t && (cq(t, e.scrRef) || FC(e, lq(t, e.scrRef)));
}
function cq(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? BC(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function BC(e, t) {
  try {
    return Ld(e, t);
  } catch {
    return !1;
  }
}
function lq(e, t) {
  const n = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (n.verse = e.verse), t.versificationStr != null && (n.versificationStr = t.versificationStr), n;
}
const uq = 8;
function FC(e, t) {
  return qc(t, e.scrRef) || e.pendingEchoes.some((n) => qc(n, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > uq && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function qc(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function fq(e) {
  e.phase = "idle";
}
function dq(e) {
  return we(e) ? `${e.__code}` : Ee(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker}` : Gr(e) ? `${e.__marker} "${e.__number}"` : At(e) ? `${e.__caller}` : pr(e) ? `${e.__marker} "${e.__number}"` : L(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : me(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${pq(e)}` : se(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Pe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function pq(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Dr]) : "";
}
function hq() {
  const [e] = ve();
  return /* @__PURE__ */ P(
    FS,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: dq,
      editor: e
    }
  );
}
const zC = xy(null), ay = 4;
function gq({
  children: e,
  className: t,
  onClick: n,
  title: r
}) {
  const i = ne(null), s = Ty(zC);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return G(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ P("button", { className: t, onClick: n, ref: i, title: r, type: "button", children: e });
}
function mq({
  children: e,
  dropDownRef: t,
  onClose: n
}) {
  const [r, i] = Ne(), [s, o] = Ne(), a = Me(
    (u) => {
      i((f) => f ? [...f, u] : [u]);
    },
    [i]
  ), c = (u) => {
    if (!r) return;
    const f = u.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(f) && u.preventDefault(), f === "Escape" || f === "Tab" ? n() : f === "ArrowUp" ? o((d) => {
      if (!d) return r[0];
      const p = r.indexOf(d) - 1;
      return r[p === -1 ? r.length - 1 : p];
    }) : f === "ArrowDown" && o((d) => d ? r[r.indexOf(d) + 1] : r[0]);
  }, l = ut(() => ({ registerItem: a }), [a]);
  return G(() => {
    const u = s ?? r?.[0];
    u?.current && u.current.focus();
  }, [r, s]), /* @__PURE__ */ P(zC.Provider, { value: l, children: /* @__PURE__ */ P("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function yq({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: n,
  buttonClassName: r,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = ne(null), c = ne(null), [l, u] = Ne(!1), f = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return G(() => {
    const d = c.current, p = a.current;
    if (l && d !== null && p !== null) {
      const { top: h, left: g } = d.getBoundingClientRect();
      p.style.top = `${h + d.offsetHeight + ay}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), G(() => {
    const d = c.current;
    if (d !== null && l) {
      const p = (h) => {
        const g = h.target;
        o && a.current && a.current.contains(g) || d.contains(g) || u(!1);
      };
      return document.addEventListener("click", p), () => {
        document.removeEventListener("click", p);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), G(() => {
    const d = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: g } = p.getBoundingClientRect(), m = g + p.offsetHeight + ay;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", d), () => {
      document.removeEventListener("scroll", d);
    };
  }, [c, a, l]), /* @__PURE__ */ Qe(Ii, { children: [
    /* @__PURE__ */ Qe(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": n || t,
        className: r,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ P("span", { className: i }),
          t && /* @__PURE__ */ P("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ P("i", { className: "chevron-down" })
        ]
      }
    ),
    l && Ni(
      /* @__PURE__ */ P(mq, { dropDownRef: a, onClose: f, children: s }),
      document.body
    )
  ] });
}
const Hf = {
  m: "m - Paragraph - Margin - No First Line Indent",
  ms: "ms - Heading - Major Section Level 1",
  nb: "nb - Paragraph - No Break with Previous Paragraph",
  p: "p - Paragraph - Normal - First Line Indent",
  pi: "pi - Paragraph - Indented - Level 1 - First Line Indent",
  q1: "q1 - Poetry - Indent Level 1",
  q2: "q2 - Poetry - Indent Level 2",
  r: "r - Heading - Parallel References",
  s: "s - Heading - Section Level 1"
  // do not allow `b - Poetry - Stanza Break (Blank Line)` here to avoid a USFM validity issue.
}, Gf = {
  ...Hf,
  // File / header
  cl: "cl - Chapter - Publishing Label",
  h: "h - File - Header",
  h1: "h1 - File - Header",
  h2: "h2 - File - Left Header",
  h3: "h3 - File - Right Header",
  ide: "ide - File - Encoding",
  rem: "rem - File - Remark",
  toc1: "toc1 - File - Long Table of Contents Text",
  toc2: "toc2 - File - Short Table of Contents Text",
  toc3: "toc3 - File - Book Abbreviation",
  toca1: "toca1 - File - Alternative Language Long Table of Contents Text",
  toca2: "toca2 - File - Alternative Language Short Table of Contents Text",
  toca3: "toca3 - File - Alternative Language Book Abbreviation",
  // Titles
  mt: "mt - Title - Major Title Level 1",
  mt1: "mt1 - Title - Major Title Level 1",
  mt2: "mt2 - Title - Major Title Level 2",
  mt3: "mt3 - Title - Major Title Level 3",
  mt4: "mt4 - Title - Major Title Level 4",
  mte: "mte - Title - [Uncommon] Major Title Ending Level 1",
  mte1: "mte1 - Title - [Uncommon] Major Title Ending Level 1",
  mte2: "mte2 - Title - [Uncommon] Major Title Ending Level 2",
  // Headings
  ms1: "ms1 - Heading - Major Section Level 1",
  ms2: "ms2 - Heading - Major Section Level 2",
  ms3: "ms3 - Heading - Major Section Level 3",
  mr: "mr - Heading - Major Section Range References",
  s1: "s1 - Heading - Section Level 1",
  s2: "s2 - Heading - Section Level 2",
  s3: "s3 - Heading - Section Level 3",
  s4: "s4 - Heading - Section Level 4",
  sr: "sr - Heading - Section Range References",
  d: "d - Label - Descriptive Title - Hebrew Subtitle",
  sp: "sp - Label - Speaker",
  sd: "sd - Label - Semantic Division Location - Level 1",
  sd1: "sd1 - Label - Semantic Division Location - Level 1",
  sd2: "sd2 - Label - Semantic Division Location - Level 2",
  sd3: "sd3 - Label - Semantic Division Location - Level 3",
  sd4: "sd4 - Label - Semantic Division Location - Level 4",
  // Introduction
  ib: "ib - Introduction - Blank Line",
  ie: "ie - Introduction - End Marker",
  iex: "iex - Introduction - Explanatory or Bridge Text",
  ili: "ili - Introduction - List Entry - Level 1",
  ili1: "ili1 - Introduction - List Entry - Level 1",
  ili2: "ili2 - Introduction - List Entry - Level 2",
  im: "im - Introduction - Paragraph - no first line indent",
  imi: "imi - Introduction - Indented Para - no first line indent",
  imq: "imq - Introduction - Paragraph - quote from text - no first line indent",
  imt: "imt - Introduction - Major Title Level 1",
  imt1: "imt1 - Introduction - Major Title Level 1",
  imt2: "imt2 - Introduction - Major Title Level 2",
  imt3: "imt3 - Introduction - Major Title Level 3",
  imt4: "imt4 - Introduction - Major Title Level 4",
  imte: "imte - Introduction - [Uncommon] Major Title at Introduction End Level 1",
  imte1: "imte1 - Introduction - [Uncommon] Major Title at Introduction End Level 1",
  imte2: "imte2 - Introduction - [Uncommon] Major Title at Introduction End Level 2",
  io: "io - Introduction - Outline Level 1",
  io1: "io1 - Introduction - Outline Level 1",
  io2: "io2 - Introduction - Outline Level 2",
  io3: "io3 - Introduction - Outline Level 3",
  io4: "io4 - Introduction - Outline Level 4",
  iot: "iot - Introduction - Outline Title",
  ip: "ip - Introduction - Paragraph",
  ipi: "ipi - Introduction - Indented Para - first line indent",
  ipq: "ipq - Introduction - Paragraph - quote from text",
  ipr: "ipr - Introduction - Paragraph - right aligned",
  iq: "iq - Introduction - Poetry Level 1",
  iq1: "iq1 - Introduction - Poetry Level 1",
  iq2: "iq2 - Introduction - Poetry Level 2",
  iq3: "iq3 - Introduction - Poetry Level 3",
  is: "is - Introduction - Section Heading Level 1",
  is1: "is1 - Introduction - Section Heading Level 1",
  is2: "is2 - Introduction - Section Heading Level 2",
  // Paragraphs
  mi: "mi - Paragraph - Indented - No First Line Indent",
  pc: "pc - Paragraph - Centered (for Inscription)",
  pi1: "pi1 - Paragraph - Indented - Level 1 - First Line Indent",
  pi2: "pi2 - Paragraph - Indented - Level 2 - First Line Indent",
  pi3: "pi3 - Paragraph - Indented - Level 3 - First Line Indent",
  pm: "pm - Paragraph - Embedded Text",
  pmc: "pmc - Paragraph - Embedded Text Closing",
  pmo: "pmo - Paragraph - Embedded Text Opening",
  pmr: "pmr - Paragraph - Embedded Text Refrain",
  po: "po - Paragraph - Letter Opening",
  pr: "pr - Paragraph - Text Refrain (right aligned)",
  cls: "cls - Paragraph - Letter Closing",
  // Poetry
  b: "b - Poetry - Stanza Break (Blank Line)",
  q: "q - Poetry - Indent Level 1 - Single Level Only",
  q3: "q3 - Poetry - Indent Level 3",
  q4: "q4 - Poetry - Indent Level 4",
  qa: "qa - Poetry - Acrostic Heading/Marker",
  qc: "qc - Poetry - Centered",
  qd: "qd - Poetry - Hebrew Note",
  qm: "qm - Poetry - Embedded Text - Indent Level 1 - Single Level Only",
  qm1: "qm1 - Poetry - Embedded Text - Indent Level 1",
  qm2: "qm2 - Poetry - Embedded Text - Indent Level 2",
  qm3: "qm3 - Poetry - Embedded Text - Indent Level 3",
  qr: "qr - Poetry - Right Aligned",
  // Tables
  tr: "tr - Table - Row"
};
function bq({
  editorRef: e,
  blockMarker: t,
  disabled: n = !1
}) {
  return /* @__PURE__ */ P(
    yq,
    {
      disabled: n,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + kq(t),
      buttonLabel: xq(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Hf).map((r) => /* @__PURE__ */ Qe(
        gq,
        {
          className: "item block-marker " + Tq(t === r),
          onClick: () => e.current?.formatPara(r),
          children: [
            /* @__PURE__ */ P("i", { className: "icon block-marker " + r }),
            /* @__PURE__ */ P("span", { className: "text usfm_" + r, children: Hf[r] })
          ]
        },
        r
      ))
    }
  );
}
function kq(e) {
  return e && e in Gf ? e : "ban";
}
function xq(e) {
  return e && e in Gf ? Gf[e] : "No Style";
}
function Tq(e) {
  return e ? "active dropdown-item-active" : "";
}
function cy() {
  return /* @__PURE__ */ P("div", { className: "divider" });
}
const vq = pi(function({ editorRef: t, isReadonly: n = !1, onStateChange: r }, i) {
  const [s] = ve(), [o, a] = Ne(s), [c, l] = Ne(), [u, f] = Ne(!1), [d, p] = Ne(!1), h = Me(
    ({
      canUndo: g,
      canRedo: m,
      blockMarker: y,
      contextMarker: k
    }) => {
      f(g), p(m), l(y), r?.({
        canUndo: g,
        canRedo: m,
        blockMarker: y,
        contextMarker: k
      });
    },
    [r]
  );
  return G(() => s.registerCommand(
    yn,
    (g, m) => (a(m), !1),
    He
  ), [s]), /* @__PURE__ */ Qe(Ii, { children: [
    /* @__PURE__ */ P(Hx, { onStateChange: h }),
    /* @__PURE__ */ Qe("div", { className: "toolbar", children: [
      /* @__PURE__ */ P(
        "button",
        {
          disabled: !u || n,
          onClick: () => {
            o.dispatchCommand($y, void 0);
          },
          title: Ds ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ P("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ P(
        "button",
        {
          disabled: !d || n,
          onClick: () => {
            o.dispatchCommand(Ry, void 0);
          },
          title: Ds ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ P("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ P(cy, {}),
      o === s && /* @__PURE__ */ Qe(Ii, { children: [
        /* @__PURE__ */ P(
          bq,
          {
            editorRef: t,
            blockMarker: c,
            disabled: n
          }
        ),
        /* @__PURE__ */ P(cy, {})
      ] }),
      /* @__PURE__ */ P("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), Cq = al(), Sq = {}, _q = {}, ly = p_.filter((e) => e !== ud);
function Mq() {
  return /* @__PURE__ */ P("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function uy(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function fy() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return v(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function Eq(e) {
  const t = [], n = (r, i) => r?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push($t(a)), n(s.content, a);
  });
  return n(e?.content, []), t;
}
function Aq(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function Pq({
  listener: e
}) {
  const [t] = ve();
  return Ys(
    () => t.registerUpdateListener((n) => e(n, t)),
    [t, e]
  ), null;
}
function Ua(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function dy(e) {
  const t = e.getNextSiblings(), n = t.at(0), r = t.at(-1);
  if (!n || !r) return [];
  const i = A(r) ? r.getLastDescendant() ?? r : r;
  return sl(n, i);
}
function py(e, t, n) {
  VS(e, () => Ks(t));
  const r = w();
  if (!E(r)) return;
  const i = /* @__PURE__ */ new Set();
  r.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    me(o) && i.add(o);
  }), i.forEach((s) => Ov(s, t, n));
}
const jC = pi(function({
  defaultUsj: t,
  scrRef: n,
  onScrRefChange: r,
  onSelectionChange: i,
  onUsjChange: s,
  onStateChange: o,
  options: a,
  logger: c,
  children: l
}, u) {
  const f = ne(null), d = ne(null), p = ne(null), h = ne(null), g = ne(t), m = ne(!1), y = ne(void 0), k = ne(void 0), x = ne(void 0), S = ne({ entries: /* @__PURE__ */ new Map() }), _ = ne(void 0), F = ne(0), U = ne(!0), W = ne(void 0), [ae, $] = Ne(t), [D, ge] = Ne(0), [re, qe] = Ne(), {
    isReadonly: ye = !1,
    structureProtectionMode: nt = "off",
    hasExternalUI: rt = !1,
    hasSpellCheck: sn = !1,
    textDirection: Ye = "ltr",
    markerMenuTrigger: gr = "\\",
    view: vn,
    nodes: Oe,
    debug: he = !1,
    contextMenu: z,
    styleInfo: ce,
    markerSettleDelayMs: Se,
    copyLimit: We
  } = a ?? _q, lt = vn ?? Cq, kt = Xo(lt) && (lt.markerMode !== "hidden" || !lt.hasSpacing || lt.hasGutterParaMarkers || lt.hasActiveTextFocusBox) ? {
    ...lt,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : lt, Cn = ne(kt);
  Xn(Cn.current, kt) || (Cn.current = kt);
  const te = Cn.current, Te = ut(() => Oe ?? Sq, [Oe]), Pr = ut(() => z, [z]), $e = ut(
    () => PE(ce ?? pc),
    [ce]
  ), mr = ne(c);
  Xn(mr.current, c) || (mr.current = c);
  const pe = mr.current, Ut = Xo(te), Yt = ye || Ut, I = kt !== lt;
  G(() => {
    Ut && !ye && pe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), I && pe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), te?.markerMode === "visible" && !ye && pe?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [Ut, ye, I, pe, te?.markerMode]);
  const V = ne(null), J = ut(() => {
    if (te.markerMode !== "editable") return;
    const O = ce ?? pc;
    return {
      getContext: () => V.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (R) => FR(
        O,
        R,
        Te.extraValidMarkers
      ),
      getEnterItems: (R) => zR(
        O,
        R,
        Te.extraValidMarkers
      ),
      apply: (R, B) => {
        const X = V.current;
        X && (B.trigger === "enter" ? X.splitParagraphWithMarker(R.marker) : X.applyMarkerMenuSelection(R, B));
      },
      commitTypedCloser: (R) => {
        V.current?.commitTypedCloser(R);
      }
    };
  }, [te, ce, Te.extraValidMarkers]), Y = (O) => {
    if (Ut)
      throw new Error(
        `Cannot ${O} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, le = (O) => {
    if (Y(O), Yt) throw new Error(`Cannot ${O} in readonly mode`);
  }, ee = ut(
    () => [gt, ...Ut ? IP : fl],
    [Ut]
  ), Z = () => !!f.current && Ux(f.current), oe = ut(
    () => ({
      namespace: "platformEditor",
      theme: { ...NT, showCharMarkerTitles: te.showCharMarkerTitles },
      editable: !Yt,
      editorState: void 0,
      // Handling of errors during update
      onError(O) {
        throw O;
      },
      nodes: ee
    }),
    [Yt, ee, te.showCharMarkerTitles]
  );
  Ms.initialize(pe);
  function ue(O) {
    if (O !== void 0 && !g$(O, Te.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const De = Me(() => {
    const O = f.current;
    if (!O) return g.current;
    const R = () => {
      if (!m.current) return;
      const it = Ms.deserializeEditorState(O.getEditorState(), te);
      it && (g.current = it, m.current = !1);
    }, B = Bu(O), X = k.current;
    if ((!B || B.size === 0) && !X)
      return R(), g.current;
    const _e = O.getEditorState(), Fe = x.current, Ke = {
      editorState: _e,
      pendedKeys: B ? [...B].sort().join(",") : "",
      transientInput: X,
      caretKey: Fe?.key,
      caretOffset: Fe?.offset,
      viewOptions: te,
      getMarker: $e
    }, je = _.current;
    if (je && Aq(je.key, Ke)) return je.usj;
    const xt = _e.toJSON(), ht = _e.read(
      () => iL(
        xt,
        B ?? /* @__PURE__ */ new Set(),
        { viewOptions: te, getMarker: $e, logger: pe },
        X,
        Fe
      )
    );
    return ht ? (_.current = { key: Ke, usj: ht }, ht) : (R(), g.current);
  }, [te, $e, pe]), Re = Me(() => {
    const O = f.current;
    if (!O) return;
    const R = {
      pendedKeys: Bu(O) ?? /* @__PURE__ */ new Set(),
      transientInput: k.current,
      lastKnownCaret: x.current,
      tier2: { viewOptions: te, getMarker: $e, logger: pe },
      nodes: ee,
      cache: S.current
    };
    return vo(R) && R.cache.entries.clear(), R;
  }, [te, $e, pe, ee]), on = Me(
    (O) => {
      const R = f.current, B = Re();
      if (!(!R || !B))
        return vo(B) ? O : R.getEditorState().read(() => {
          const X = sy(B);
          return PL(B, X, O);
        });
    },
    [Re]
  );
  G(() => (U.current = !0, () => {
    U.current = !1;
  }), []);
  const Sn = Me(
    (O, R) => O.read(() => {
      const B = Re(), X = B && KL(sy(B));
      return !X && E(w()) && pe?.warn(
        `${R} refused: the selection could not be expressed against the document the host is reading`
      ), X;
    }),
    [Re, pe]
  ), Nr = Me(
    (O) => {
      if (!i) return;
      const R = f.current, B = Re();
      F.current += 1;
      const X = F.current;
      if (!R || !B || vo(B)) {
        i(O);
        return;
      }
      queueMicrotask(() => {
        if (!U.current || X !== F.current || f.current !== R) return;
        const _e = Sn(R, "onSelectionChange");
        X === F.current && i(_e);
      });
    },
    [i, Re, Sn]
  );
  function bi(O, R, B) {
    if (Ut && R === "remote") {
      mr.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    Y("apply an update");
    const X = f.current;
    if (!X) return;
    const _e = Z(), Fe = _e ? void 0 : So(X, Or);
    let Ke = !1;
    X.update(
      () => {
        Yl(X, R), R === "remote" && Wt(ud), _e || Wt(Or), B && Wt(B);
        try {
          P1(O, te, Te, pe);
        } catch (je) {
          throw Ke = !0, Yl(X, void 0), Fe?.(), je;
        }
      },
      {
        discrete: !0,
        // Reads the committed state and reports the change from `onUpdate` rather than right
        // after this call, because `editor.update()` does not always run synchronously: a caller
        // reached from inside another commit's own update listener (a host's `onUsjChange`
        // calling back into `takeOpsAfterNote`, say) finds the editor already mid-commit, so
        // Lexical queues this discrete update and applies it only once that outer commit's
        // listeners finish. `onUpdate` fires exactly when THIS update's own commit lands, after
        // its update listeners, whether that is synchronously (the ordinary case, before
        // `editor.update()` even returns) or after such a deferral, so the report is correct
        // either way - and the signal and the unfocused tag release end only once the commit they
        // guard has actually happened, never before.
        onUpdate: () => {
          if (Ke) return;
          Yl(X, void 0), Fe?.(), _e || lu(X);
          const je = X.getEditorState(), xt = Ms.deserializeEditorState(je, te);
          if (!xt) return;
          const ht = !Xn(g.current, xt);
          ht && (g.current = xt);
          const it = De();
          if (it && (ht || !Xn(ae, xt))) {
            const bt = yg(O, je, "apply");
            W.current = it, s?.(it, O, R, bt);
          }
        }
      }
    );
  }
  const lo = {
    focus() {
      f.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return Z();
    },
    undo() {
      f.current?.dispatchCommand($y, void 0);
    },
    redo() {
      f.current?.dispatchCommand(Ry, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      le("cut"), f.current && Ep(f.current);
    },
    copy() {
      f.current && Mp(f.current);
    },
    paste() {
      le("paste"), f.current && Ap(f.current);
    },
    pastePlainText() {
      le("paste as plain text"), f.current && Pp(f.current);
    },
    getUsj() {
      return De();
    },
    commitPendingMarkerEdits() {
      const O = f.current;
      if (!O) return;
      const R = !Z(), B = R ? So(O, Or) : void 0;
      O.update(
        () => {
          R && Wt(Or), O.dispatchCommand(Qv, void 0);
        },
        { discrete: !0 }
      ), B?.(), R && lu(O);
    },
    setTransientInput(O) {
      if (!O) {
        k.current = void 0;
        return;
      }
      const R = f.current?.getEditorState().read(() => {
        const B = w();
        return E(B) && B.isCollapsed() ? B.focus.key : void 0;
      });
      k.current = { input: O, nodeKey: R ?? x.current?.key };
    },
    setUsj(O) {
      if (!Xn(g.current, O)) {
        g.current = O, m.current = !1, _.current = void 0, k.current = void 0;
        const R = Xn(ae, O);
        $(O), R && ge((B) => B + 1);
      }
    },
    applyUpdate(O, R = "remote") {
      bi(O, R);
    },
    replaceEmbedUpdate(O, R) {
      const B = f.current?.read(() => nA(O, R));
      B ? this.applyUpdate(B) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${O}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      const O = f.current;
      if (!O) return;
      O.read(() => {
      });
      const R = Re();
      return !R || vo(R) ? O.read(() => cl(te)) : Sn(O, "getSelection");
    },
    setSelection(O) {
      const R = on(O);
      if (!R) {
        pe?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      f.current?.update(() => {
        const B = Qo(R, te);
        B !== void 0 && (Fn(B), (!It().isEditable() || uy(B.anchor) && uy(B.focus)) && f.current?.dispatchCommand(yn, void 0));
      });
    },
    setAnnotation(O, R, B, X, _e) {
      let Fe, Ke, je, xt;
      typeof X == "function" || X === void 0 ? (Fe = X, Ke = _e) : (Fe = X.onClick, Ke = X.onRemove, je = X.onMouseEnter, xt = X.onMouseLeave);
      const ht = on(O);
      if (!ht) {
        pe?.warn(
          `setAnnotation refused for ${R} "${B}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.setAnnotation(
        ht,
        Wl(R),
        B,
        Fe,
        Ke,
        je,
        xt
      );
    },
    removeAnnotation(O, R) {
      d.current?.removeAnnotation(Wl(O), R);
    },
    getAnnotationRanges(O, R) {
      return d.current?.getAnnotationRanges(Wl(O), R) ?? [];
    },
    formatPara(O) {
      le("format a paragraph"), f.current?.update(
        () => {
          const R = w();
          if (!E(R)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const B = R.isBackward() ? R.focus : R.anchor, X = Ze(B.getNode(), we);
          if (X) {
            const _e = R.isBackward() ? R.anchor : R.focus, Ke = !R.isCollapsed() && !X.is(_e.getNode()) && !X.isParentOf(_e.getNode()) ? { key: _e.key, offset: _e.offset, type: _e.type } : void 0, je = Kr();
            if (je.anchor.set(B.key, B.offset, B.type), je.focus.set(B.key, B.offset, B.type), Fn(je), !Uf(O, te)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${O}"`
              );
              return;
            }
            if (!Ke) return;
            const xt = Q(Ke.key);
            if (!xt?.isAttached()) return;
            const ht = xt.getTopLevelElement();
            if (!ht) return;
            const it = X.getNextSibling();
            if (!me(it)) return;
            let bt = it.getNextSibling();
            for (; bt; ) {
              const ki = bt.is(ht), _n = bt.getNextSibling();
              if (me(bt)) {
                const wr = Kr();
                wr.anchor.set(bt.getKey(), 0, "element"), wr.focus.set(bt.getKey(), bt.getChildrenSize(), "element"), Fn(wr), py(wr, O, te);
              }
              if (ki) break;
              bt = _n;
            }
            return;
          }
          py(R, O, te);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(O) {
      return f.current?.read(
        () => f.current?.getElementByKey(O) ?? void 0
      );
    },
    removeCharacterMarker(O) {
      if (Yt) throw new Error("Cannot remove character marker in readonly mode");
      ue(O);
      let R = !1;
      return f.current?.update(
        () => {
          const B = w();
          E(B) && (R = ST(B, O, te));
        },
        { discrete: !0 }
      ), R;
    },
    replaceCharacterMarker(O, R) {
      if (Yt) throw new Error("Cannot replace character marker in readonly mode");
      ue(O), ue(R);
      let B = !1;
      return f.current?.update(
        () => {
          const X = w();
          E(X) && (B = E$(X, O, R));
        },
        { discrete: !0 }
      ), B;
    },
    extendCharacterMarker(O, R) {
      if (Yt) throw new Error("Cannot extend character marker in readonly mode");
      ue(O), R?.forEach(
        (X) => ue(X)
      );
      let B = !1;
      return f.current?.update(
        () => {
          const X = w();
          E(X) && (B = A$(
            X,
            O,
            R,
            te
          ));
        },
        { discrete: !0 }
      ), B;
    },
    insertMarker(O) {
      if (Yt) throw new Error("Cannot insert marker in readonly mode");
      if (!n) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!xf(O, Te.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const R = Tf(
        O,
        y,
        te,
        Te,
        pe,
        void 0,
        ce
      );
      return R.action({ editor: f.current, reference: n }), R.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!ye)
        return f.current?.getEditorState().read(() => e2());
    },
    applyMarkerMenuSelection(O, R) {
      if (ye) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!n)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (O.kind !== "closeTag" && !xf(O.marker, Te.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let B;
      return f.current.update(() => {
        B = l2(O, R, n, {
          expandedNoteKeyRef: y,
          viewOptions: te,
          nodeOptions: Te,
          logger: c,
          styleInfo: ce
        });
      }), B;
    },
    splitParagraphWithMarker(O) {
      if (ye) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        Uf(O, te);
      });
    },
    commitTypedMarker(O, R) {
      if (ye) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let B = !1;
      return f.current.update(() => {
        B = a2(O, R), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(O) {
      if (ye) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let R = !1;
      return f.current.update(() => {
        R = Dv(O), R || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), R;
    },
    insertNote(O, R, B) {
      le("insert a note");
      const X = B && on(B);
      if (B && !X) {
        pe?.warn(
          `insertNote refused for \\${O}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.update(
        () => {
          const _e = cx(
            O,
            R,
            X,
            n,
            te,
            Te,
            pe
          );
          Ua(_e, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(O) {
      const R = f.current;
      if (!R) return;
      const B = Re();
      if (typeof O == "string" || !B || vo(B)) {
        R.update(() => {
          const Fe = xr(O);
          Fe && (Ha(Fe, te), Ua(Fe, y));
        });
        return;
      }
      const X = Eq(De())[O], _e = X ? on({ start: { jsonPath: X } }) : void 0;
      _e && R.update(() => {
        const [Fe, Ke] = $n(_e.start, te);
        if (!Fe || Ke === void 0) return;
        const je = L(Fe) ? Fe : Ze(Fe, L);
        L(je) ? (Ha(je, te), Ua(je, y)) : v(Fe) && Fe.select(Ke, Ke);
      });
    },
    selectAfterNote(O) {
      const R = f.current;
      if (!R) return;
      const B = !Z(), X = B ? So(R, Or) : void 0;
      if (R.update(
        () => {
          B && Wt(Or);
          const _e = xr(O);
          _e && fx(_e);
        },
        { discrete: !0 }
      ), X?.(), B) {
        lu(R);
        const _e = So(
          R,
          Or
        );
        R.update(
          () => {
            Wt(Or), R.dispatchCommand(yn, void 0);
          },
          { discrete: !0 }
        ), _e();
      }
    },
    selectNoteTextOffset(O, R, B) {
      f.current?.update(() => {
        const X = xr(O);
        if (!X) return;
        const _e = B?.glyph;
        (B?.field === "category" ? NP(X, R, _e) || Ag(X, 0) : Ag(X, R, _e)) || Ha(X, te), Ua(X, y);
      });
    },
    getNoteOps(O) {
      const R = f.current;
      return R ? Cs(R, () => {
        const B = xr(O);
        if (B)
          return sl(B);
      }) : void 0;
    },
    getOpsAfterNote(O) {
      const R = f.current;
      return R ? Cs(R, () => {
        const B = xr(O);
        return B ? dy(B) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(O) {
      const R = f.current, B = R ? Cs(R, () => {
        const Ke = xr(O);
        if (!Ke) return;
        const je = np(Ke, "apply");
        return { ops: dy(Ke), notePosition: je };
      }) : void 0;
      if (!B) return;
      const { ops: X, notePosition: _e } = B;
      if (X.length === 0 || _e === void 0) return X;
      const Fe = X.reduce(
        (Ke, je) => Ke + (typeof je.insert == "string" ? je.insert.length : 1),
        0
      );
      return bi([{ retain: _e + 1 }, { delete: Fe }], "remote", td), X;
    },
    getNoteIndex(O) {
      const R = f.current;
      return R ? Cs(R, () => sp(O)) : void 0;
    },
    getNoteKey(O) {
      const R = f.current;
      return R ? Cs(R, () => xr(O)?.getKey()) : void 0;
    },
    highlightNote(O) {
      p.current?.setHighlightedNote(O);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  V.current = lo, Kc(u, () => lo), G(() => {
    const O = f.current;
    if (O)
      return O.registerUpdateListener(({ editorState: R }) => {
        const B = R.read(fy);
        B && (x.current = B);
      });
  }, []);
  const ps = ne({ onUsjChange: s, viewOptions: te, isBlockVerse: Ut, readSettledUsj: De });
  ps.current = { onUsjChange: s, viewOptions: te, isBlockVerse: Ut, readSettledUsj: De };
  const Ma = Me((O, R) => {
    const { editorState: B, dirtyElements: X, dirtyLeaves: _e, tags: Fe } = O;
    if (X.size === 0 && _e.size === 0) return;
    if (Fe.has(ua)) {
      const _n = ps.current, wr = !_n.isBlockVerse && Ms.deserializeEditorState(B, _n.viewOptions);
      wr && (g.current = wr), W.current = g.current;
      return;
    }
    if (Gd(R)) return;
    if (ly.some((_n) => Fe.has(_n))) {
      m.current = !0;
      return;
    }
    const Ke = ps.current;
    if (Ke.isBlockVerse) return;
    Mb(R, B, Fe);
    const je = B.read(fy);
    je && (x.current = je);
    const xt = E1(O, {
      ignoreTags: ly
    }), ht = xt ? [] : new As(B.read(() => A1(R, O))).chop().ops;
    if (!xt) {
      const _n = Ms.deserializeEditorState(B, Ke.viewOptions);
      _n && (g.current = _n);
    }
    if (!Ke.onUsjChange) return;
    const it = Ke.readSettledUsj();
    if (!it || ht.length === 0 && Xn(W.current, it)) return;
    if (W.current = it, ht.length === 0) {
      Ke.onUsjChange(it, void 0, "local", void 0);
      return;
    }
    const bt = yg(ht, B), ki = bt && !O.prevEditorState.read(() => Q(bt)) ? bt : void 0;
    Ke.onUsjChange(it, ht, "local", ki);
  }, []), hs = Me(
    (O) => {
      qe(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Qe(Iy, { initialConfig: oe, children: [
      /* @__PURE__ */ P(ON, { isEditable: !Yt }),
      /* @__PURE__ */ Qe("div", { className: "editor-container", children: [
        rt ? /* @__PURE__ */ P(Hx, { onStateChange: hs }) : /* @__PURE__ */ P(
          "div",
          {
            className: "editor-toolbar-container" + (Yt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ P(
              vq,
              {
                ref: h,
                editorRef: V,
                isReadonly: Yt,
                onStateChange: hs
              }
            )
          }
        ),
        /* @__PURE__ */ Qe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ P(qy, { editorRef: f }),
          /* @__PURE__ */ P(
            jS,
            {
              contentEditable: /* @__PURE__ */ P(
                Ly,
                {
                  className: `editor-input usfm ${DA(te).join(" ")}${te.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${te.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: sn
                }
              ),
              placeholder: /* @__PURE__ */ P(Mq, {}),
              ErrorBoundary: Dy
            }
          ),
          rt && /* @__PURE__ */ P(wN, {}),
          /* @__PURE__ */ P(Ky, {}),
          n && r && /* @__PURE__ */ P(nq, { scrRef: n, onScrRefChange: r }),
          n && !rt && /* @__PURE__ */ P(
            uO,
            {
              trigger: gr,
              scrRef: n,
              contextMarker: re,
              getMarkerAction: (O) => Tf(
                O,
                y,
                te,
                Te,
                pe,
                void 0,
                ce
              ),
              editableHarness: J
            }
          ),
          /* @__PURE__ */ P(
            qN,
            {
              scripture: ae,
              scriptureRef: g,
              nodeOptions: Te,
              editorAdaptor: ar,
              viewOptions: te,
              logger: pe
            },
            D
          ),
          /* @__PURE__ */ P(ow, { onChange: Nr, viewOptions: te }),
          /* @__PURE__ */ P(Pq, { listener: Ma }),
          /* @__PURE__ */ P($$, { viewOptions: te }),
          /* @__PURE__ */ P(M1, { ref: d, logger: pe, viewOptions: te }),
          /* @__PURE__ */ P(X1, { viewOptions: te }),
          /* @__PURE__ */ P(fN, {}),
          /* @__PURE__ */ P(kN, {}),
          te?.markerMode !== "editable" && /* @__PURE__ */ P(xN, { logger: pe }),
          /* @__PURE__ */ P(_N, { options: Pr }),
          /* @__PURE__ */ P(MR, { limit: We, viewOptions: te }),
          /* @__PURE__ */ P(NN, {}),
          /* @__PURE__ */ P(RN, {}),
          /* @__PURE__ */ P(LN, {}),
          /* @__PURE__ */ P(u2, {}),
          /* @__PURE__ */ P(
            j2,
            {
              viewOptions: te,
              getMarker: $e,
              logger: pe,
              markerSettleDelayMs: Se,
              structureProtectionMode: nt,
              copyLimit: We
            }
          ),
          te?.markerMode === "visible" && /* @__PURE__ */ P(_R, { viewOptions: te, copyLimit: We }),
          /* @__PURE__ */ P(
            Y2,
            {
              styleInfo: ce,
              viewOptions: te,
              logger: pe
            }
          ),
          /* @__PURE__ */ P(DN, { ref: p }),
          /* @__PURE__ */ P(
            KN,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Te,
              viewOptions: te,
              logger: pe
            }
          ),
          /* @__PURE__ */ P(sw, {}),
          /* @__PURE__ */ P(W1, {}),
          /* @__PURE__ */ P(yP, {}),
          /* @__PURE__ */ P(sL, { viewOptions: te, logger: pe }),
          /* @__PURE__ */ P(aw, {}),
          /* @__PURE__ */ P(Ww, { structureProtectionMode: nt }),
          /* @__PURE__ */ P(Hw, { textDirection: Ye }),
          /* @__PURE__ */ P(Jw, {}),
          /* @__PURE__ */ P(cO, {}),
          l
        ] }),
        he && /* @__PURE__ */ P(hq, {})
      ] })
    ] }, te.verseLayout ?? "inline")
  );
}), UD = pi(function(t, n) {
  const { children: r, ...i } = t;
  return /* @__PURE__ */ P(jC, { ref: n, ...i });
});
function hy(e, t) {
  const n = v(e) ? e0(e, wt, t) ?? [] : [], r = jM(e, wt, t);
  return [.../* @__PURE__ */ new Set([...n, ...r])];
}
function Nq(e, t, n) {
  tb(wt, e, t);
  for (const r of n) {
    const i = Q(r);
    i && mk(i, wt, e);
  }
}
function wq(e, t) {
  const n = Array.from(t, (s) => Q(s)).filter(
    (s) => s !== null
  );
  n.sort((s, o) => s.isBefore(o) ? -1 : 1);
  const r = n[0];
  if (!r) return;
  if (v(r)) {
    const s = Ir(r).find(
      (a) => a.type === wt && a.id === e
    ), o = Math.max(Ud(r)[0], s?.start ?? 0);
    r.select(o, o);
    return;
  }
  const i = r.getParent();
  i && i.select(r.getIndexWithinParent(), r.getIndexWithinParent());
}
function VC() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Dc(e, t, n, r, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: n === void 0 ? VC() : n,
    timeStamp: r === void 0 ? performance.timeOrigin + performance.now() : r,
    type: "comment"
  };
}
function WC(e, t, n) {
  return {
    comments: t,
    id: n === void 0 ? VC() : n,
    quote: e,
    type: "thread"
  };
}
function gy(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function Oq(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Eu(e) {
  const t = e._changeListeners;
  for (const n of t)
    n();
}
class $q {
  _editor;
  _comments;
  _changeListeners;
  _collabProvider;
  logger;
  /**
   * Creates a new CommentStore instance.
   *
   * @param editor - The LexicalEditor instance.
   * @param logger - Optional logger instance.
   */
  constructor(t, n) {
    this._comments = [], this._editor = t, this.logger = n, this._collabProvider = null, this._changeListeners = /* @__PURE__ */ new Set();
  }
  /**
   * Checks if collaborative editing is enabled.
   *
   * @returns True if collaborative editing is enabled, false otherwise.
   */
  isCollaborative() {
    return this._collabProvider !== null;
  }
  /**
   * Gets the current list of comments and threads.
   *
   * @returns The Comments array.
   */
  getComments() {
    return this._comments;
  }
  /**
   * Sets the list of comments and threads.
   *
   * @param comments - The new Comments array.
   */
  setComments(t) {
    this._comments = t, Eu(this);
  }
  /**
   * Adds a comment or thread to the store.
   *
   * @param commentOrThread - The comment or thread to add.
   * @param thread - Optional parent thread to add the comment to.
   * @param offset - Optional offset for insertion.
   */
  addComment(t, n, r) {
    const i = Array.from(this._comments), s = this._getCollabComments();
    if (n !== void 0 && t.type === "comment")
      for (let o = 0; o < i.length; o++) {
        const a = i[o];
        if (a.type === "thread" && a.id === n.id) {
          const c = gy(a);
          i.splice(o, 1, c);
          const l = r !== void 0 ? r : c.comments.length;
          if (this.isCollaborative() && s !== null) {
            const u = s.get(o).get("comments");
            this._withRemoteTransaction(() => {
              const f = this._createCollabSharedMap(t);
              u.insert(l, [f]);
            });
          }
          c.comments.splice(l, 0, t);
          break;
        }
      }
    else {
      const o = r !== void 0 ? r : i.length;
      this.isCollaborative() && s !== null && this._withRemoteTransaction(() => {
        const a = this._createCollabSharedMap(t);
        s.insert(o, [a]);
      }), i.splice(o, 0, t);
    }
    this._comments = i, Eu(this);
  }
  /**
   * Deletes a comment or thread from the store.
   *
   * @param commentOrThread - The comment or thread to delete.
   * @param thread - Optional parent thread if deleting a comment within a thread.
   * @returns An object containing the marked comment and its index, or null.
   */
  deleteCommentOrThread(t, n) {
    const r = Array.from(this._comments), i = this._getCollabComments();
    let s = null;
    if (n !== void 0)
      for (let o = 0; o < r.length; o++) {
        const a = r[o];
        if (a.type === "thread" && a.id === n.id) {
          const c = gy(a);
          r.splice(o, 1, c);
          const l = c.comments;
          if (s = l.indexOf(t), this.isCollaborative() && i !== null) {
            const u = i.get(o).get("comments"), f = s;
            this._withRemoteTransaction(() => {
              u.delete(f);
            });
          }
          l.splice(s, 1);
          break;
        }
      }
    else
      s = r.indexOf(t), this.isCollaborative() && i !== null && this._withRemoteTransaction(() => {
        i.delete(s);
      }), r.splice(s, 1);
    return this._comments = r, Eu(this), t.type === "comment" ? {
      index: s,
      markedComment: Oq(t)
    } : null;
  }
  /**
   * Registers a callback to be called when the comments change.
   *
   * @param onChange - The callback function.
   * @returns A function to unregister the callback.
   */
  registerOnChange(t) {
    const n = this._changeListeners;
    return n.add(t), () => {
      n.delete(t);
    };
  }
  _withRemoteTransaction(t) {
    const n = this._collabProvider;
    n !== null && n.doc.transact(t, this);
  }
  _withLocalTransaction(t) {
    const n = this._collabProvider;
    try {
      this._collabProvider = null, t();
    } finally {
      this._collabProvider = n;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _getCollabComments() {
    const t = this._collabProvider;
    return t !== null ? t.doc.get("comments", wh) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const n = new Oh(), r = t.type, i = t.id;
    if (n.set("type", r), n.set("id", i), r === "comment")
      n.set("author", t.author), n.set("content", t.content), n.set("deleted", t.deleted), n.set("timeStamp", t.timeStamp);
    else {
      n.set("quote", t.quote);
      const s = new wh();
      t.comments.forEach((o, a) => {
        const c = this._createCollabSharedMap(o);
        s.insert(a, [c]);
      }), n.set("comments", s);
    }
    return n;
  }
  /**
   * Registers collaborative editing support using a Yjs provider.
   *
   * @param provider - The Yjs Provider instance.
   * @returns A function to unregister collaboration and cleanup.
   */
  registerCollaboration(t) {
    this._collabProvider = t;
    const n = this._getCollabComments(), r = () => {
      t.connect();
    }, i = () => {
      try {
        t.disconnect();
      } catch {
      }
    }, s = this._editor.registerCommand(
      o_,
      (a) => (r !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), r()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Qt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof a_) {
            const u = l.target, f = l.delta;
            let d = 0;
            for (const p of f) {
              const h = p.insert, g = p.retain, m = p.delete, y = u.parent, k = u === n ? void 0 : y instanceof Oh && this._comments.find((x) => x.id === y.get("id"));
              if (Array.isArray(h)) {
                const x = d;
                h.slice().reverse().forEach((S) => {
                  const _ = S.get("id"), U = S.get("type") === "thread" ? WC(
                    S.get("quote"),
                    S.get("comments").toArray().map(
                      (W) => Dc(
                        W.get("content"),
                        W.get("author"),
                        W.get("id"),
                        W.get("timeStamp"),
                        W.get("deleted")
                      )
                    ),
                    _
                  ) : Dc(
                    S.get("content"),
                    S.get("author"),
                    _,
                    S.get("timeStamp"),
                    S.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(U, k, x);
                  });
                });
              } else if (typeof g == "number")
                d += g;
              else if (typeof m == "number")
                for (let x = 0; x < m; x++) {
                  const S = k === void 0 || k === !1 ? this._comments[d] : k.comments[d];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(S, k);
                  }), d++;
                }
            }
          }
      }
    };
    return n === null ? () => null : (n.observeDeep(o), r(), () => {
      n.unobserveDeep(o), s(), this._collabProvider = null;
    });
  }
}
function Rq(e) {
  const [t, n] = Ne(e.getComments());
  return G(() => e.registerOnChange(() => {
    n(e.getComments());
  }), [e]), t;
}
function Iq({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r
}) {
  const i = ne(null);
  return G(() => {
    i.current !== null && i.current.focus();
  }, []), G(() => {
    let s = null;
    const o = (l) => {
      l.key === "Escape" && e();
    }, a = (l) => {
      const u = l.target;
      i.current !== null && !i.current.contains(u) && r && e();
    }, c = i.current;
    return c !== null && (s = c.parentElement, s !== null && s.addEventListener("click", a)), window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o), s !== null && s?.removeEventListener("click", a);
    };
  }, [r, e]), /* @__PURE__ */ P("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Qe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ P("h2", { className: "Modal__title", children: n }),
    /* @__PURE__ */ P(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ P("div", { className: "Modal__content", children: t })
  ] }) });
}
function Lq({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r = !1
}) {
  return Ni(
    /* @__PURE__ */ P(Iq, { onClose: e, title: n, closeOnClickOutside: r, children: t }),
    document.body
  );
}
function HC() {
  const [e, t] = Ne(null), n = Me(() => {
    t(null);
  }, []), r = ut(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ P(Lq, { onClose: n, title: s, closeOnClickOutside: a, children: o });
  }, [e, n]), i = Me(
    (s, o, a = !1) => {
      t({
        closeOnClickOutside: a,
        content: o(n),
        title: s
      });
    },
    [n]
  );
  return [r, i];
}
const qq = {
  ...NT,
  paragraph: "CommentEditorTheme__paragraph"
};
function Dq(...e) {
  return e.filter(Boolean).join(" ");
}
function di({
  "data-test-id": e,
  children: t,
  className: n,
  onClick: r,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ P(
    "button",
    {
      disabled: i,
      className: Dq(
        "Button__root",
        i && "Button__disabled",
        s && "Button__small",
        n
      ),
      onClick: r,
      title: o,
      "aria-label": o,
      ...e && { "data-test-id": e },
      children: t
    }
  );
}
function Kq({
  className: e
}) {
  return /* @__PURE__ */ P(Ly, { className: e || "ContentEditable__root" });
}
function Uq({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ P("div", { className: t || "Placeholder__root", children: e });
}
const my = Xf("INSERT_INLINE_COMMAND");
function Bq({
  anchorKey: e,
  editor: t,
  showComments: n,
  onAddComment: r
}) {
  const i = ne(null), s = Me(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return G(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Ys(() => {
    s();
  }, [e, t, n, s]), /* @__PURE__ */ P("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ P("button", { className: "CommentPlugin_AddCommentBox_button", onClick: r, children: /* @__PURE__ */ P("i", { className: "icon add-comment" }) }) });
}
function Fq({ onEscape: e }) {
  const [t] = ve();
  return G(() => t.registerCommand(
    Oy,
    (n) => e(n),
    Tr
  ), [t, e]), null;
}
function GC({
  className: e,
  autoFocus: t,
  onEscape: n,
  onChange: r,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ P(Iy, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: qq
  }, children: /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ P(
      r_,
      {
        contentEditable: /* @__PURE__ */ P(Kq, { className: e }),
        placeholder: /* @__PURE__ */ P(Uq, { children: s }),
        ErrorBoundary: Dy
      }
    ),
    /* @__PURE__ */ P(n_, { onChange: r }),
    /* @__PURE__ */ P(Ky, {}),
    t !== !1 && /* @__PURE__ */ P(ZS, {}),
    /* @__PURE__ */ P(Fq, { onEscape: n }),
    /* @__PURE__ */ P(e_, {}),
    i !== void 0 && /* @__PURE__ */ P(qy, { editorRef: i })
  ] }) });
}
function JC(e, t) {
  return Me(
    (n, r) => {
      n.read(() => {
        e(i_()), t(!s_(r.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function zq({
  editor: e,
  cancelAddComment: t,
  submitAddComment: n
}) {
  const [r, i] = Ne(""), [s, o] = Ne(!1), a = ne(null), c = ut(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = ne(null), u = XC(), f = Me(() => {
    e.getEditorState().read(() => {
      const g = w();
      if (E(g)) {
        l.current = g.clone();
        const m = g.anchor, y = g.focus, k = WS(
          e,
          m.getNode(),
          m.offset,
          y.getNode(),
          y.offset
        ), x = a.current;
        if (k !== null && x !== null) {
          const { left: S, bottom: _, width: F } = k.getBoundingClientRect(), U = HS(e, k);
          let W = U.length === 1 ? S + F / 2 - 125 : S - 125;
          W < 10 && (W = 10), x.style.left = `${W}px`, x.style.top = `${_ + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const ae = U.length, { container: $ } = c, D = c.elements, ge = D.length;
          for (let re = 0; re < ae; re++) {
            const qe = U[re];
            let ye = D[re];
            ye === void 0 && (ye = document.createElement("span"), D[re] = ye, $.appendChild(ye));
            const rt = `position:absolute;top:${qe.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${qe.left}px;height:${qe.height}px;width:${qe.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            ye.style.cssText = rt;
          }
          for (let re = ge - 1; re >= ae; re--) {
            const qe = D[re];
            $.removeChild(qe), D.pop();
          }
        }
      }
    });
  }, [e, c]);
  Ys(() => {
    f();
    const g = c.container, m = document.body;
    return m !== null ? (m.appendChild(g), () => {
      m.removeChild(g);
    }) : () => {
    };
  }, [c.container, f]), G(() => (window.addEventListener("resize", f), () => {
    window.removeEventListener("resize", f);
  }), [f]);
  const d = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), n(
        WC(g, [Dc(r, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = JC(i, o);
  return /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ P(
      GC,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: d,
        onChange: h
      }
    ),
    /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ P(di, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ P(
        di,
        {
          onClick: p,
          disabled: !s,
          className: "CommentPlugin_CommentInputBox_Button primary",
          children: "Comment"
        }
      )
    ] })
  ] });
}
function jq({
  submitAddComment: e,
  thread: t,
  placeholder: n
}) {
  const [r, i] = Ne(""), [s, o] = Ne(!1), a = ne(null), c = XC(), l = JC(i, o);
  return /* @__PURE__ */ Qe(Ii, { children: [
    /* @__PURE__ */ P(
      GC,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: n
      }
    ),
    /* @__PURE__ */ P(
      di,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Dc(r, c), !1, t);
            const f = a.current;
            f !== null && f.dispatchCommand(qS, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ P("i", { className: "send" })
      }
    )
  ] });
}
function YC({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: n,
  thread: r = void 0
}) {
  return /* @__PURE__ */ Qe(Ii, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Qe("div", { className: "Modal__content", children: [
      /* @__PURE__ */ P(
        di,
        {
          onClick: () => {
            t(e, r), n();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ P(
        di,
        {
          onClick: () => {
            n();
          },
          children: "Cancel"
        }
      )
    ] })
  ] });
}
function yy({
  comment: e,
  deleteComment: t,
  thread: n,
  rtf: r
}) {
  const [i, s] = Ne(0);
  G(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const f = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(f);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = HC();
  return /* @__PURE__ */ Qe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ P("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Qe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : r.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ P("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Qe(Ii, { children: [
      /* @__PURE__ */ P(
        di,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ P(
              YC,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: n,
                onClose: u
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ P("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function Vq({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: n,
  displayIndex: r,
  listRef: i,
  submitAddComment: s,
  markNodeMap: o
}) {
  const [a] = ve(), [c, l] = Ne(0), [u, f] = HC(), d = ut(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return G(() => {
    const p = setTimeout(() => {
      l(c + 1);
    }, 1e4);
    return () => {
      clearTimeout(p);
    };
  }, [c]), /* @__PURE__ */ P("ul", { className: "CommentPlugin_CommentsPanel_List", ref: i, children: t.map((p) => {
    const h = p.id;
    if (p.type === "thread") {
      const g = e !== null && e.indexOf(h) !== -1;
      return /* @__PURE__ */ Qe(
        "li",
        {
          onClick: () => {
            if (g) return;
            const y = o.get(h), k = document.activeElement;
            if (y !== void 0) {
              a.update(
                () => {
                  const S = Array.from(y)[0], _ = Q(S);
                  se(_) && _.selectStart();
                },
                {
                  onUpdate() {
                    k !== null && k.focus();
                  }
                }
              );
              return;
            }
            const x = r.keysFor(wt, h);
            x.size !== 0 && a.update(
              () => {
                wq(h, x);
              },
              {
                onUpdate() {
                  k !== null && k.focus();
                }
              }
            );
          },
          className: `CommentPlugin_CommentsPanel_List_Thread ${o.has(h) || r.keysFor(wt, h).size > 0 ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
          children: [
            /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
              /* @__PURE__ */ Qe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
                "> ",
                /* @__PURE__ */ P("span", { children: p.quote })
              ] }),
              /* @__PURE__ */ P(
                di,
                {
                  onClick: () => {
                    f("Delete Thread", (y) => /* @__PURE__ */ P(
                      YC,
                      {
                        commentOrThread: p,
                        deleteCommentOrThread: n,
                        onClose: y
                      }
                    ));
                  },
                  className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                  children: /* @__PURE__ */ P("i", { className: "delete" })
                }
              ),
              u
            ] }),
            /* @__PURE__ */ P("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: p.comments.map((y) => /* @__PURE__ */ P(
              yy,
              {
                comment: y,
                deleteComment: n,
                thread: p,
                rtf: d
              },
              y.id
            )) }),
            /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ P(
              jq,
              {
                submitAddComment: s,
                thread: p,
                placeholder: "Reply to comment..."
              }
            ) })
          ]
        },
        h
      );
    }
    return /* @__PURE__ */ P(
      yy,
      {
        comment: p,
        deleteComment: n,
        rtf: d
      },
      h
    );
  }) });
}
function Wq({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: n,
  submitAddComment: r,
  markNodeMap: i,
  displayIndex: s
}) {
  const o = ne(null), a = n.length === 0;
  return /* @__PURE__ */ Qe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ P("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    a ? /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ P(
      Vq,
      {
        activeIDs: e,
        comments: n,
        deleteCommentOrThread: t,
        displayIndex: s,
        listRef: o,
        submitAddComment: r,
        markNodeMap: i
      }
    )
  ] });
}
function XC() {
  const e = Uy(), { yjsDocMap: t, name: n } = e;
  return t.has("comments") ? n : "Scripture User";
}
function Hq({
  providerFactory: e,
  setCommentStore: t,
  onChange: n,
  showCommentsContainerRef: r,
  commentContainerRef: i,
  logger: s
}) {
  const o = Uy(), [a] = ve(), c = ut(() => {
    const ae = new $q(a, s);
    return n && ae.registerOnChange(n), t?.(ae), ae;
  }, [a, s, n, t]), l = Rq(c), u = ut(() => /* @__PURE__ */ new Map(), []), f = Sx(a), [d, p] = Ne(), [h, g] = Ne([]), [m, y] = Ne(!1), [k, x] = Ne(!1), { yjsDocMap: S } = o;
  G(() => {
    if (e) {
      const ae = e("comments", S);
      return c.registerCollaboration(ae);
    }
    return () => {
    };
  }, [c, e, S]);
  const _ = Me(() => {
    a.update(() => {
      const ae = w();
      ae !== null && (ae.dirty = !0);
    }), y(!1);
  }, [a]), F = Me(
    (ae, $) => {
      if (ae.type === "comment") {
        const D = c.deleteCommentOrThread(ae, $);
        if (!D)
          return;
        const { markedComment: ge, index: re } = D;
        c.addComment(ge, $, re);
      } else {
        c.deleteCommentOrThread(ae);
        const D = $ !== void 0 ? $.id : ae.id, ge = u.get(D), re = f.keysFor(wt, D);
        (ge !== void 0 && ge.size > 0 || re.size > 0) && setTimeout(() => {
          a.update(() => {
            Nq(D, ge ?? [], re);
          });
        });
      }
    },
    [c, f, a, u]
  ), U = Me(
    (ae, $, D, ge) => {
      c.addComment(ae, D), $ && (a.update(() => {
        E(ge) && Hd(ge, wt, ae.id);
      }), y(!1));
    },
    [c, a]
  );
  G(() => {
    const ae = [];
    let $;
    const D = () => {
      $ = window.setTimeout(() => {
        x(!0);
      }, 0);
    };
    for (const ge of h) {
      const re = u.get(ge) ?? [];
      for (const qe of re) {
        const ye = a.getElementByKey(qe);
        ye !== null && (ye.classList.add("selected"), ae.push(ye), D());
      }
      f.keysFor(wt, ge).size > 0 && (f.setStateClass(wt, ge, "selected", !0), D());
    }
    return () => {
      $ !== void 0 && window.clearTimeout($);
      for (const ge of ae)
        ge.classList.remove("selected");
      for (const ge of h)
        f.setStateClass(wt, ge, "selected", !1);
    };
  }, [h, f, a, u]), G(() => {
    if (!a.hasNodes([gt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const ae = /* @__PURE__ */ new Map();
    return tt(
      od(
        a,
        gt,
        ($) => Ki($.getTypedIDs()),
        ($, D) => {
          for (const [ge, re] of Object.entries($.getTypedIDs()))
            re.forEach((qe) => {
              D.addID(ge, qe);
            });
        }
      ),
      a.registerMutationListener(
        gt,
        ($) => {
          a.getEditorState().read(() => {
            for (const [D, ge] of $) {
              const re = Q(D);
              let qe = [];
              ge === "destroyed" ? qe = ae.get(D) ?? [] : se(re) && (qe = re.getTypedIDs()[wt] ?? []);
              for (const ye of qe) {
                let nt = u.get(ye);
                ae.set(D, qe), ge === "destroyed" ? nt !== void 0 && (nt.delete(D), nt.size === 0 && u.delete(ye)) : (nt === void 0 && (nt = /* @__PURE__ */ new Set(), u.set(ye, nt)), nt.has(D) || nt.add(D));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: $, tags: D }) => {
        $.read(() => {
          const ge = w();
          let re = !1, qe = !1;
          if (E(ge)) {
            const { anchor: ye } = ge, nt = ye.getNode();
            if (v(nt)) {
              const rt = hy(nt, ye.offset);
              g(rt), re = !0, ge.isCollapsed() || (p(nt.getKey()), qe = !0);
            } else if (ye.type === "element" && A(nt)) {
              const rt = nt.getChildren(), sn = /* @__PURE__ */ new Set();
              for (const [Ye, gr] of [
                [rt[ye.offset - 1], !0],
                [rt[ye.offset], !1]
              ]) {
                if (!Ye) continue;
                const vn = gr && v(Ye) ? Ye.getTextContentSize() : 0;
                hy(Ye, vn).forEach((Oe) => sn.add(Oe));
              }
              sn.size > 0 && (g([...sn]), re = !0);
            }
          }
          re || g((ye) => ye.length === 0 ? ye : []), qe || p(null), !D.has("collaboration") && E(ge) && y(!1);
        });
      }),
      a.registerCommand(
        my,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), y(!0), !0;
        },
        qi
      )
    );
  }, [a, u]);
  const W = () => {
    a.dispatchCommand(my, void 0);
  };
  return /* @__PURE__ */ Qe(Ii, { children: [
    m && Ni(
      /* @__PURE__ */ P(
        zq,
        {
          editor: a,
          cancelAddComment: _,
          submitAddComment: U
        }
      ),
      document.body
    ),
    d != null && !m && Ni(
      /* @__PURE__ */ P(
        Bq,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: W
        }
      ),
      document.body
    ),
    r !== null && Ni(
      /* @__PURE__ */ P(
        di,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => x(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ P("i", { className: "comments" })
        }
      ),
      r?.current ?? document.body
    ),
    k && Ni(
      /* @__PURE__ */ P(
        Wq,
        {
          comments: l,
          submitAddComment: U,
          deleteCommentOrThread: F,
          activeIDs: h,
          markNodeMap: u,
          displayIndex: f
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function Gq() {
  const e = ne(void 0), t = Me((n) => {
    e.current = n;
  }, []);
  return [e, t];
}
function Jq(e, t) {
  const n = t.current?.getComments() ?? [], r = n?.map((s) => s.id), i = e.map((s) => {
    const o = r.findIndex((a) => a === s);
    return o !== void 0 && o >= 0 ? n[o] : {
      comments: [
        {
          author: "unknown",
          content: "Comment not found",
          deleted: !1,
          id: "",
          timeStamp: 0,
          type: "comment"
        }
      ],
      id: s,
      quote: "",
      type: "thread"
    };
  });
  n.forEach((s) => {
    e.includes(s.id) || i.push(s);
  }), i && t.current?.setComments(i);
}
function Yq(e, t) {
  G(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (n) => {
      Jq(n, t);
    };
  }, [t, e]);
}
const BD = pi(function(t, n) {
  const r = ne(null), i = ne(!0), s = ne(null), [o, a] = Ne(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: f, ...d } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, m = (h ?? !1) || Xo(g), [y, k] = Gq();
  Yq(d, y), G(() => {
    if (process.env.NODE_ENV !== "production") {
      const _ = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(_), p || console.warn(_);
    }
  }, [p]), Kc(n, () => ({
    focus() {
      r.current?.focus();
    },
    isFocused() {
      return r.current?.isFocused() ?? !1;
    },
    undo() {
      r.current?.undo();
    },
    redo() {
      r.current?.redo();
    },
    cut() {
      r.current?.cut();
    },
    copy() {
      r.current?.copy();
    },
    paste() {
      r.current?.paste();
    },
    pastePlainText() {
      r.current?.pastePlainText();
    },
    getUsj() {
      return r.current?.getUsj();
    },
    commitPendingMarkerEdits() {
      r.current?.commitPendingMarkerEdits();
    },
    setTransientInput(_) {
      r.current?.setTransientInput(_);
    },
    setUsj(_) {
      r.current?.setUsj(_);
    },
    applyUpdate(_, F) {
      r.current?.applyUpdate(_, F);
    },
    replaceEmbedUpdate(_, F) {
      return r.current?.replaceEmbedUpdate(_, F);
    },
    getSelection() {
      return r.current?.getSelection();
    },
    setSelection(_) {
      r.current?.setSelection(_);
    },
    setAnnotation(_, F, U, W, ae) {
      typeof W == "function" || W === void 0 ? r.current?.setAnnotation(_, F, U, W, ae) : r.current?.setAnnotation(_, F, U, W);
    },
    removeAnnotation(_, F) {
      r.current?.removeAnnotation(_, F);
    },
    getAnnotationRanges(_, F) {
      return r.current?.getAnnotationRanges(_, F) ?? [];
    },
    formatPara(_) {
      r.current?.formatPara(_);
    },
    getElementByKey(_) {
      return r.current?.getElementByKey(_);
    },
    removeCharacterMarker(_) {
      return r.current?.removeCharacterMarker(_) ?? !1;
    },
    replaceCharacterMarker(_, F) {
      return r.current?.replaceCharacterMarker(_, F) ?? !1;
    },
    extendCharacterMarker(_, F) {
      return r.current?.extendCharacterMarker(_, F) ?? !1;
    },
    insertMarker(_) {
      return r.current?.insertMarker(_);
    },
    getMarkerMenuContext() {
      return r.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(_, F) {
      return r.current?.applyMarkerMenuSelection(_, F);
    },
    splitParagraphWithMarker(_) {
      r.current?.splitParagraphWithMarker(_);
    },
    commitTypedMarker(_, F) {
      return r.current?.commitTypedMarker(_, F) ?? !1;
    },
    commitTypedCloser(_) {
      return r.current?.commitTypedCloser(_) ?? !1;
    },
    insertNote(_, F, U) {
      r.current?.insertNote(_, F, U);
    },
    selectNote(_) {
      r.current?.selectNote(_);
    },
    selectAfterNote(_) {
      r.current?.selectAfterNote(_);
    },
    selectNoteTextOffset(_, F, U) {
      r.current?.selectNoteTextOffset(_, F, U);
    },
    getNoteOps(_) {
      return r.current?.getNoteOps(_);
    },
    getOpsAfterNote(_) {
      return r.current?.getOpsAfterNote(_);
    },
    takeOpsAfterNote(_) {
      return r.current?.takeOpsAfterNote(_);
    },
    getNoteIndex(_) {
      return r.current?.getNoteIndex(_);
    },
    getNoteKey(_) {
      return r.current?.getNoteKey(_);
    },
    highlightNote(_) {
      r.current?.highlightNote(_);
    },
    setComments(_) {
      y.current?.setComments(_), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const x = Me(
    (_, F, U, W) => {
      if (!u) return;
      const ae = y.current?.getComments();
      u(_, ae, F, U, W);
    },
    [y, u]
  ), S = Me(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const _ = y.current?.getComments();
    l(_);
  }, [y, i, l]);
  return G(() => (a(r.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ P(t_, { children: /* @__PURE__ */ Qe(jC, { ref: r, onUsjChange: x, ...d, children: [
    /* @__PURE__ */ P(
      Hq,
      {
        setCommentStore: k,
        onChange: S,
        showCommentsContainerRef: m ? null : f ?? o,
        commentContainerRef: s,
        logger: d.logger
      }
    ),
    /* @__PURE__ */ P("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Pi(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function Xq(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function Qq(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const Zq = /^[#\w().,%/\s-]+$/;
function Rr(e) {
  return e != null;
}
const eD = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, tD = {
  left: "right",
  right: "left"
}, nD = "var(--usj-font-fallback, serif)";
function QC(e, t) {
  const n = [e];
  return t && t !== e && n.push(t), `font-family: ${n.map((i) => `"${Xq(i)}"`).join(", ")}, ${nD}`;
}
const Jf = ".editor-input.usfm", rD = /^[\w.#[\]="':()>+~*,\s-]+$/;
function iD(e) {
  return rD.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Jf}".`
  ), Jf);
}
function sD(e, t, n, r, i) {
  const s = [];
  if (t.fontName && s.push(QC(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (Zq.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Rr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Rr(t.firstLineIndent) && s.push(`text-indent: ${Pi(t.firstLineIndent * 20 * n)}vw`), Rr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${r ? "right" : "left"}: ${Pi(t.leftMargin * 20 * n)}vw`), Rr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${r ? "left" : "right"}: ${Pi(t.rightMargin * 20 * n)}vw`
  ), Rr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Pi(t.spaceBefore * n)}pt`), Rr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Pi(t.spaceAfter * n)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = eD[r ? tD[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const by = { c: 150, ca: 133, cp: 150 };
function ky(e, t) {
  return e && Rr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function oD(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Rr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const r = ky(e.markers.c, by.c);
  return ["ca", "cp"].map((i) => {
    const s = ky(
      e.markers[i],
      by[i]
    ), o = Pi(s * 100 / r);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function FD(e, t = {}) {
  const { zoom: n = 1, rtl: r = !1, containerSelector: i = Jf } = t, s = iD(i), o = [], a = [];
  e.defaultFont && a.push(QC(e.defaultFont)), Rr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Pi(e.defaultFontSize * n)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = sD(c, l, n, r, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${Qq(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...oD(e, s)), o.join(`
`);
}
export {
  Bk as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  UD as Editorial,
  Bo as GENERATOR_NOTE_CALLER,
  By as HIDDEN_NOTE_CALLER,
  BD as Marginal,
  T as MarkerType,
  Uk as PARAGRAPH_STRUCTURE_VIEW_MODE,
  cp as STANDARD_VIEW_MODE,
  pc as defaultStyleInfo,
  KD as directionToNames,
  jP as filterAndRankItems,
  FD as generateUsjCss,
  qD as getDefaultViewMode,
  al as getDefaultViewOptions,
  zR as getEnterMenuItems,
  FR as getMarkerMenuItems,
  DD as getViewMode,
  fp as getViewOptions,
  Xo as isBlockVerseLayout,
  Zr as isInsertEmbedOpOfType,
  RA as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
