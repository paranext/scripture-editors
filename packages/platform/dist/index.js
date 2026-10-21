import { jsx as P, jsxs as tt, Fragment as Li } from "react/jsx-runtime";
import { useEffect as G, forwardRef as pi, useState as Re, useRef as re, useCallback as Pe, useMemo as ft, memo as xS, createContext as _y, useContext as My, Children as TS, isValidElement as vS, cloneElement as CS, useLayoutEffect as Qs, useImperativeHandle as Fc } from "react";
import { assertSafeKey as Ct, isValidBookCode as SS, MARKER_OBJECT_PROPS as _S, USJ_VERSION as ir, USJ_TYPE as sr, indexesFromUsjJsonPath as qn, isUsjTextContentLocation as qr, usjJsonPathFromIndexes as Lt, isUsjPropertyValueLocation as qo, isUsjClosingMarkerLocation as qi, isUsjClosingAttributeMarkerLocation as Do, isUsjAttributeKeyLocation as Ko, isUsjAttributeMarkerLocation as zc, isUsjMarkerLocation as td, getUsjDocumentLocationTypeName as MS, EMPTY_USJ as Ey } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as kt, $parseSerializedNode as Dr, createCommand as jc, DecoratorNode as la, ElementNode as dr, isHTMLElement as Qi, TextNode as ot, $isRangeSelection as E, $getEditor as Pt, $getNodeByKey as Q, $isTextNode as v, createState as Zs, $getState as pe, $getSelection as w, $isNodeSelection as Vc, ParagraphNode as nd, $isRootNode as yn, HISTORIC_TAG as Wc, $createTextNode as Ue, $setState as Xt, $isElementNode as A, $getCommonAncestor as ES, $isLineBreakNode as Zi, NODE_STATE_KEY as Kr, $isDecoratorNode as Tn, $addUpdateTag as jt, $getRoot as _e, $createRangeSelection as Ur, $createPoint as tn, CLICK_COMMAND as Hc, COMMAND_PRIORITY_EDITOR as Di, DELETE_CHARACTER_COMMAND as Gc, COMMAND_PRIORITY_HIGH as Qe, DELETE_WORD_COMMAND as rd, DELETE_LINE_COMMAND as rc, COMMAND_PRIORITY_NORMAL as vr, CONTROLLED_TEXT_INSERTION_COMMAND as ua, COMMAND_PRIORITY_CRITICAL as Xe, PASTE_COMMAND as nr, CUT_COMMAND as or, REMOVE_TEXT_COMMAND as Ay, SELECTION_CHANGE_COMMAND as bn, isDOMNode as Py, $getNearestNodeFromDOMNode as es, $setSelection as jn, $getCharacterOffsets as id, KEY_DOWN_COMMAND as Er, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as AS, HISTORY_MERGE_TAG as sd, DROP_COMMAND as od, COPY_COMMAND as Ks, COMMAND_PRIORITY_LOW as Vt, getDOMSelection as PS, isSelectionWithinEditor as Ny, $createRangeSelectionFromDom as wy, isDOMTextNode as NS, BLUR_COMMAND as ad, SKIP_DOM_SELECTION_TAG as Qn, CLEAR_HISTORY_COMMAND as wS, INSERT_PARAGRAPH_COMMAND as Uo, INSERT_LINE_BREAK_COMMAND as OS, SELECT_ALL_COMMAND as Oy, $selectAll as $S, $isRootOrShadowRoot as cd, CAN_UNDO_COMMAND as RS, CAN_REDO_COMMAND as IS, DRAGSTART_COMMAND as LS, $createNodeSelection as $y, $hasUpdateTag as qS, getDOMSelectionFromTarget as DS, $onUpdate as Ry, KEY_ENTER_COMMAND as Iy, LineBreakNode as Ly, $copyNode as KS, FOCUS_COMMAND as qy, createEditor as ld, isExactShortcutMatch as US, getDOMTextNode as BS, KEY_ESCAPE_COMMAND as Dy, UNDO_COMMAND as Ky, REDO_COMMAND as Uy, CLEAR_EDITOR_COMMAND as FS } from "lexical";
import { addClassNamesToElement as _o, removeClassNamesFromElement as Fa, $findMatchingParent as nt, $dfsIterator as Jc, $dfs as ts, mergeRegister as it, registerNestedElementResolver as ud, $unwrapNode as wu, IS_APPLE as Us } from "@lexical/utils";
import { useLexicalNodeSelection as zS } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Zn } from "fast-equals";
import Ps from "quill-delta";
import { useLexicalComposerContext as Se } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as jS } from "unicode-segmenter/grapheme";
import { copyToClipboard as VS, $getLexicalContent as WS } from "@lexical/clipboard";
import { TreeView as HS } from "@lexical/react/LexicalTreeView";
import * as GS from "react-dom";
import { createPortal as wi } from "react-dom";
import { LexicalComposer as By } from "@lexical/react/LexicalComposer";
import { ContentEditable as Fy } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as zy } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as jy } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Vy } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as JS } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as YS, createDOMRange as XS, createRectsFromDOMRange as QS } from "@lexical/selection";
import { autoUpdate as ZS, computePosition as e_, shift as t_, flip as n_ } from "@floating-ui/dom";
import { $generateNodesFromDOM as r_ } from "@lexical/html";
import { AutoFocusPlugin as i_ } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as s_ } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Wy, LexicalCollaboration as o_ } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as a_ } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as c_ } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as l_, $isRootTextContentEmpty as u_ } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as f_ } from "@lexical/yjs";
import { Array as Lh, Map as qh, YArrayEvent as d_ } from "yjs";
const jl = (e) => kt(Dr(e)), p_ = {
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
function fd(e) {
  return p_[e];
}
const q = " ", Bo = "​", At = q, dd = `${q}|`, Vn = "p", Fo = "+", Hy = "-", hi = "immutable-note-caller", Gy = "immutable-verse", ic = "chapter", Ou = "verse", Dh = "invalid", h_ = "text-spacing", g_ = "formatted-font", m_ = "marker-", fa = "external-usj-mutation", y_ = "selection-change", $i = "cursor-change", pd = jc("APP_PLACED_CARET_COMMAND"), $u = "annotation-change", za = "typed-mark-wrap", hd = "delta-change", Jy = "marker-settle", b_ = [
  fa,
  y_,
  $i,
  $u,
  hd
], Yy = 2, Ki = "zmsc-s", Rs = "zmsc-e", k_ = [Ki, Rs], x_ = [
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
  Ki,
  Rs
], Xy = 1, gd = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], T_ = gd.filter((e) => e !== "sid" && e !== "eid");
class ar extends la {
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
    return new ar(n, r, i, s, a, o);
  }
  static importJSON(t) {
    return Zy().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (x_.includes(t) || t.startsWith("z") || (n?.includes(t) ?? !1));
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
      version: Xy
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Qy(e) {
  return k_.includes(e);
}
function Zy(e, t, n, r, i) {
  return kt(new ar(e, t, n, r, void 0, i));
}
function ze(e) {
  return e instanceof ar;
}
const md = "f", v_ = [
  // Footnote
  md,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Oa(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const C_ = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], eb = 1;
class Ze extends dr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = md, n, r = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = n ?? (Oa(t) === "crossref" ? Hy : Fo), this.__isCollapsed = r, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: n, __caller: r, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Ze(n, r, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => __(t) ? {
        conversion: S_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return yd().updateFromJSON(t);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (v_.includes(t) || (n?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Oa(this.__marker)), t;
  }
  updateDOM(t, n) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.classList.remove(`usfm_${t.__marker}`), n.classList.add(`usfm_${this.__marker}`), n.setAttribute("data-note-kind", Oa(this.__marker))), t.__caller !== this.__caller && n.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Qi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-note-kind", Oa(this.getMarker()))), { element: n };
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
      version: eb
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
function S_(e) {
  const t = e.getAttribute("data-marker") ?? "f", n = e.getAttribute("data-caller") ?? "", r = e.classList.contains("collapsed");
  return { node: yd(t, n, r) };
}
function yd(e, t, n, r, i) {
  return kt(new Ze(e, t, n, r, i));
}
function __(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ze.isValidMarker(t) && e.classList.contains(Ze.getType());
}
function L(e) {
  return e instanceof Ze;
}
function M_(e) {
  return e?.type === Ze.getType();
}
var C;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(C || (C = {}));
var T;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(T || (T = {}));
const Ru = {
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
}, Kh = {
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
function Cr(e) {
  const t = Object.hasOwn(Ru, e) ? Ru[e] : void 0, n = Object.hasOwn(Kh, e) ? Kh[e] : void 0;
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
const da = "￼", tb = "v", nb = "c", vi = "fig", Uh = "tr", Iu = "esb", rb = "esbe", Bh = "periph", Fh = "alt", zh = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, E_ = {
  "": "start",
  c: "center",
  r: "end"
};
function jh(e) {
  const [, , t, n] = e;
  return n ? /^[1-5]$/.test(t) && /^[2-5]$/.test(n) && Number(n) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Vh(e) {
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
const A_ = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function P_(e) {
  let t = "", n = !1, r = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (n || (i = t.length, t += " "), n = !0) : !n && o === Bo && s + 1 < e.length && Vh(e[s + 1]) || (Vh(o) ? (n || (i = t.length, t += o), n = !0) : A_.test(o) && o === r || (t += o, n = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), r = o;
  }
  return t;
}
function N_(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function w_(e, t) {
  let n = t;
  for (; n < e.length; ) {
    const r = e[n];
    if (r === "\\" || r === "|" || r === da)
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
function O_(e, t, n) {
  if (!n || !/^[\s\u00A0\u200B]*$/.test(e.slice(0, t)))
    return !1;
  const r = e[t + 1];
  return r === void 0 || r === "\\" || /[\s\u00A0\u200B]/.test(r);
}
const $_ = /^(?:qt[1-5]?|ts)-[se]$/;
function bd(e) {
  return $_.test(e) || Qy(e);
}
function Vl(e, t) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  const r = n;
  for (; n < e.length && e[n] !== da && !/[\s\u00A0\u200B\\]/.test(e[n]); )
    n++;
  const i = e.slice(r, n);
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  return { word: i, next: n };
}
function R_(e, t) {
  const n = [];
  let r = 0;
  for (let i = 0; i < e.length; i++) {
    if (e[i] !== da)
      continue;
    const s = t[r];
    r++, (s === "note" || s === "verse") && n.push(i);
  }
  return n;
}
function I_(e, t, n, r, i) {
  const s = [];
  let o = 0;
  const a = R_(e, r);
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
      c < a.length && (S = Math.min(S, a[c])), f(P_(e.slice(o, S))), o = S;
      continue;
    }
    const d = o, { name: p, next: h } = w_(e, o + 1);
    o = h;
    const g = () => {
      for (; o < e.length && /[\s\u00A0\u200B]/.test(e[o]); )
        o++;
    };
    if (p === "") {
      if (O_(e, d, i)) {
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
    if (p === tb) {
      const { word: x, next: S } = Vl(e, o);
      o = S, s.push({ kind: "verse", number: x });
      continue;
    }
    if (p === nb) {
      const { word: x, next: S } = Vl(e, o);
      o = S, l = void 0, s.push({ kind: "chapter", number: x });
      continue;
    }
    const m = p.startsWith("+"), y = m ? p.slice(1) : p, b = t(y)?.type;
    if (b === T.Note || b === void 0 && Ze.isValidMarker(p)) {
      const { word: x, next: S } = Vl(e, o);
      o = S, l = p, s.push({ kind: "note", marker: p, caller: x });
      continue;
    }
    if (b === T.Milestone || b === void 0 && bd(p)) {
      const x = j_(e, d, p, o);
      if (x)
        s.push(x.token), x.ejectedText && u(x.ejectedText), o = x.next;
      else {
        const S = e.indexOf("\\", o), _ = S === -1 ? e.length : S;
        u(e.slice(d, _)), o = _;
      }
      continue;
    }
    b === T.Paragraph ? (g(), s.push({ kind: "para", marker: p })) : b === T.Character ? (g(), s.push({ kind: "charOpen", marker: y, isNested: m })) : sc(y) ? (g(), sc(y)?.shape === "para" ? s.push({ kind: "para", marker: p }) : s.push({ kind: "charOpen", marker: y, isNested: m })) : (g(), !(n || l !== void 0) || p === Iu || p === rb ? s.push({ kind: "para", marker: p }) : s.push({ kind: "charOpen", marker: y, isNested: m }));
  }
  return s;
}
const Wh = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
}, L_ = {
  chapter: ["ca", "cp"],
  verse: ["va", "vp"],
  note: ["cat"],
  sidebar: ["cat"]
};
function sc(e) {
  return Object.hasOwn(Wh, e) ? Wh[e] : void 0;
}
function q_(e) {
  return sc(e) !== void 0;
}
const D_ = /([-\w]+)\s*=\s*"(.*?)"/g, K_ = /[\s\u200B]*[\n\r][\s\u200B]*/g, ib = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function eo(e) {
  return ib[e];
}
const U_ = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function B_(e, t) {
  let n = 0;
  for (const r of t) {
    const i = r.index;
    if (i === void 0 || e.slice(n, i).trim() !== "")
      return !1;
    n = i + r[0].length;
  }
  return e.slice(n).trim() === "";
}
function zo(e, t, n = ib[t]) {
  const r = e.replace(K_, " "), i = /* @__PURE__ */ Object.create(null), s = [...r.matchAll(D_)];
  if (s.length > 0) {
    if (!B_(r, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      U_.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (r.trim() && n)
    return { [n]: r };
}
function pa(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function F_(e) {
  const t = Yc(e)[0], n = typeof t == "object" && "content" in t ? t.content : void 0;
  return n ? n.some((r, i) => typeof r != "object" || r.type !== "ms" || typeof n[i + 1] != "string" ? !1 : n.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function z_(e, t, n) {
  let r = t;
  for (; r < e.length && /[\s\u00A0\u200B]/.test(e[r]); )
    r++;
  if (e[r] !== "|")
    return;
  const i = e.indexOf("\\", r);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = zo(e.slice(r + 1, i), n, pa(n));
  if (s)
    return { attributes: s, next: i + 2 };
}
function j_(e, t, n, r) {
  const i = e.indexOf("\\", r);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(r, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = zo(s.slice(o + 1), n, pa(n)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = z_(e, i + 2, n);
  return l ? {
    token: {
      kind: "milestone",
      marker: n,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: n, attributes: a }, next: i + 2 };
}
function kr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function Qr(e) {
  return e.content || (e.content = []), e.content;
}
function Yc(e, t) {
  const n = [], r = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, f;
  const d = () => u ? Qr(u) : f ? Qr(f) : n;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? Qr(o[o.length - 1].object) : Qr(s);
    if (o.length > 0)
      return Qr(o[o.length - 1].object);
    if (!i) {
      if (p && !r)
        return d();
      i = { type: "para", marker: Vn, content: [] }, d().push(i);
    }
    return Qr(i);
  }, g = (me) => {
    const F = h();
    typeof me == "string" && typeof F[F.length - 1] == "string" ? F[F.length - 1] = F[F.length - 1] + me : F.push(me);
  }, m = (me) => {
    for (let F = me; F < o.length; F += 1) {
      const le = o[F].object;
      le.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, b = (me) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, me || (s.closed = "false"), s = void 0);
  }, x = () => {
    c = void 0, l = void 0;
  }, S = (me, F, le) => {
    y();
    const [, Me, Ye, ut] = le, Tt = {
      type: "table:cell",
      marker: ut ? F.slice(0, F.indexOf("-")) : F,
      align: E_[Me],
      content: []
    };
    ut && (Tt.colspan = String(Number(ut) + 1 - Number(Ye))), Qr(me).push(Tt), i = Tt;
  }, _ = (me) => {
    u && (me || (u.closed = "false"), u = void 0);
  }, U = () => {
    f = void 0;
  };
  let B, V = -1;
  const ne = (me) => {
    B = me, V = -1;
  };
  let se = "", W;
  const he = () => {
    se && g(kr(se)), se = "";
  }, be = (me = !1) => {
    B?.type === "sidebar" ? se = "" : me && se.endsWith(`
`) && (se = se.slice(0, -1)), B = void 0, he();
  }, He = () => {
    if (!W)
      return;
    const me = { type: "char", marker: W.marker, content: [] };
    W.value && (me.content = [kr(W.value)]), h().push(me), o.push({ object: me }), W = void 0;
  }, $ = (me, F) => {
    p = !1, x(), y(), b(!1), i = { type: "para", marker: me, content: [] }, F && (i.content = [kr(F)]), d().push(i);
  }, Z = () => {
    W && ($(W.marker, W.value), W = void 0);
  };
  let Te;
  const Ne = (me) => {
    if (!Te)
      return;
    let { value: F } = Te;
    Te = void 0, me && F.endsWith(`
`) && (F = F.slice(0, -1));
    const le = F.indexOf("|"), Me = le >= 0 ? zo(F.slice(le + 1), Bh) : void 0, Ye = le >= 0 ? F.slice(0, le) : F, ut = le >= 0 && (!Me || !!Ye && !!Me[Fh]), Tt = ut ? void 0 : Me, _n = ut ? F : Ye, ie = {
      type: "periph",
      ..._n ? { [Fh]: kr(_n) } : {},
      ...Tt
    };
    ie.content = [], d().push(ie), f = ie, i = void 0;
  };
  let $e;
  const Gt = () => {
    if ($e) {
      if ($e.shape === "para")
        $(vi, $e.value);
      else {
        const me = { type: "char", marker: vi, content: [] };
        $e.value && (me.content = [kr($e.value)]), h().push(me), o.push({ object: me });
      }
      $e = void 0;
    }
  }, Sn = I_(e, t?.getMarker ?? Cr, r, t?.placeholders ?? [], !r && t?.opensNamelessParagraph === !0);
  for (let me = 0; me < Sn.length; me++) {
    const F = Sn[me];
    if (W) {
      if (F.kind === "text") {
        W.value += F.text;
        continue;
      }
      if (W.shape === "char" && F.kind === "end" && F.marker.replace(/^\+/, "") === W.marker) {
        if (W.value.trim() === "") {
          h().push({ type: "char", marker: W.marker, content: [] }), W = void 0, be();
          continue;
        }
        Object.assign(W.target, {
          [W.attrName]: kr(W.value.trim())
        });
        const le = W.marker;
        if (W = void 0, le === "ca") {
          const Me = Sn[me + 1];
          Me?.kind === "text" && /^[\s\u200B]*$/.test(Me.text) && me++;
        }
        continue;
      }
      if (W.shape === "para" && (F.kind === "para" || F.kind === "chapter")) {
        const le = W.value.replace(/[\s\u200B]+$/, "");
        le === "" ? ($(W.marker), W = void 0) : (Object.assign(W.target, { [W.attrName]: kr(le) }), W = void 0);
      } else {
        B = void 0, (F.kind === "para" || F.kind === "chapter") && W.value.endsWith(`
`) && (W.value = W.value.slice(0, -1)), W.shape === "para" ? Z() : He(), me--;
        continue;
      }
    }
    if (Te) {
      if (F.kind === "text" || F.kind === "optbreak") {
        Te.value += F.kind === "text" ? F.text : "//";
        continue;
      }
      Ne(F.kind === "para" || F.kind === "chapter"), me--;
      continue;
    }
    if ($e) {
      if (F.kind === "text" || F.kind === "optbreak") {
        $e.value += F.kind === "text" ? F.text : "//";
        continue;
      }
      if (F.kind === "end" && F.marker.replace(/^\+/, "") === vi) {
        const le = $e.value.indexOf("|"), Me = le >= 0 ? zo($e.value.slice(le + 1), vi) : void 0;
        if (Me) {
          const Ye = {};
          for (const [_n, ie] of Object.entries(Me))
            Ye[_n === "src" ? "file" : _n] = ie;
          const ut = {
            type: "figure",
            marker: vi,
            ...Ye
          }, Tt = $e.value.slice(0, le);
          Tt && (ut.content = [kr(Tt)]), g(ut), $e = void 0;
          continue;
        }
      }
      Gt(), me--;
      continue;
    }
    if (B)
      if (F.kind === "text") {
        if (F.text.includes(`
`) && /^[\s\u200B]*$/.test(F.text)) {
          se += F.text;
          continue;
        }
        be();
      } else if (F.kind === "charOpen" || F.kind === "para") {
        const le = F.kind === "para" || !F.isNested ? sc(F.marker) : void 0, Me = L_[B.type]?.indexOf(F.marker) ?? -1;
        if (le && le.targetTypes.includes(B.type) && Me > V) {
          V = Me, se = "", W = {
            target: B,
            attrName: le.attrName,
            marker: F.marker,
            shape: le.shape,
            value: ""
          };
          continue;
        }
        be(F.kind === "para");
      } else
        be(F.kind === "chapter");
    if (!s && !r && (F.kind === "charOpen" && !F.isNested && F.marker === vi || F.kind === "para" && F.marker === vi)) {
      y(), $e = { shape: F.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (F.kind) {
      case "text": {
        let le = F.text;
        if (!s && le.endsWith(`
`)) {
          const Me = Sn[me + 1];
          (Me === void 0 || Me.kind === "para" || Me.kind === "chapter") && (le = le.slice(0, -1));
        }
        le && g(kr(le));
        break;
      }
      case "para": {
        const le = !s && !r;
        if (le && F.marker === Uh) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: Uh, content: [] }, Qr(c).push(l), i = l, p = !1;
          break;
        }
        if (le && l) {
          const Me = zh.exec(F.marker);
          if (Me && jh(Me)) {
            S(l, F.marker, Me);
            break;
          }
        }
        if (x(), !r && F.marker === Iu) {
          y(), b(!1), _(!1);
          const Me = {
            type: "sidebar",
            marker: Iu,
            content: []
          };
          d().push(Me), u = Me, i = void 0, ne(u), p = !1;
          break;
        }
        if (F.marker === rb && u) {
          y(), b(!1), _(!0), i = void 0;
          break;
        }
        if (!r && F.marker === Bh) {
          y(), b(!1), _(!1), U(), Te = { value: "" }, i = void 0, p = !1;
          break;
        }
        $(F.marker);
        break;
      }
      case "verse": {
        b(!1);
        const le = { type: "verse", marker: tb, number: F.number };
        g(le), ne(le);
        break;
      }
      case "chapter": {
        y(), b(!1), x(), _(!1), U(), i = void 0;
        const le = {
          type: "chapter",
          marker: nb,
          number: F.number
        };
        n.push(le), ne(le), p = !0;
        break;
      }
      case "note": {
        b(!1);
        const le = h();
        s = { type: "note", marker: F.marker, caller: F.caller, content: [] }, a = o.length, le.push(s), ne(s);
        break;
      }
      case "charOpen": {
        if (!s && !r && l && !F.isNested) {
          const Ye = zh.exec(F.marker);
          if (Ye && jh(Ye)) {
            S(l, F.marker, Ye);
            break;
          }
        }
        if (!F.isNested) {
          const Ye = s ? a : 0;
          m(Ye), o.length = Ye;
        }
        const le = h(), Me = { type: "char", marker: F.marker, content: [] };
        le.push(Me), o.push({ object: Me });
        break;
      }
      case "end": {
        const le = F.marker.replace(/^\+/, ""), Me = s ? a : 0, Ye = o.findLastIndex((ut, Tt) => Tt >= Me && ut.object.marker === le);
        Ye >= 0 ? (V_(o[Ye].object), m(Ye + 1), o.length = Ye) : s && s.marker === le ? b(!0) : (m(Me), o.length = Me, g({ type: "unmatched", marker: `${F.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: F.marker, ...F.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
      case "noteEndingPlaceholder":
        b(!1), g(da);
        break;
    }
  }
  if (Te && Ne(!0), $e && Gt(), W)
    if (W.shape === "para") {
      const me = W.value.replace(/[\s\u200B]+$/, "");
      me === "" ? $(W.marker) : Object.assign(W.target, { [W.attrName]: kr(me) }), W = void 0;
    } else
      W.value.endsWith(`
`) && (W.value = W.value.slice(0, -1)), He();
  y(), b(!1), _(!1);
  const Le = (me) => {
    for (const F of me)
      typeof F != "string" && F.content && (Le(F.content), F.content.length === 0 && delete F.content);
  };
  return Le(n), n;
}
function V_(e) {
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
  const i = t.slice(r).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = zo(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = r, a && t.push(a), Object.assign(e, o);
}
function Je(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ct(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Wn(e, t) {
  const n = `${Je(e)}${q}`;
  return t ? `${n}${t} ` : n;
}
function Nt(e) {
  return " " + e + q;
}
function Hh(e, t) {
  return e === t || (e === " " || e === q) && (t === " " || t === q);
}
function Xc(e, t) {
  const n = Nt(t);
  let r = 0;
  for (; r < e.length && r < n.length && Hh(e[r], n[r]); )
    r += 1;
  let i = 0;
  for (; i < e.length - r && i < n.length - r && Hh(e[e.length - 1 - i], n[n.length - 1 - i]); )
    i += 1;
  return { start: r, end: e.length - i, missing: r + i < n.length };
}
function kd(e, t) {
  const { start: n, end: r } = Xc(e, t);
  return e.slice(n, r).replaceAll(q, " ");
}
const W_ = 1;
class Gn extends ot {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", n = "opening", r, i = !1) {
    super(Ai(t, n, i), r), this.__marker = t, this.__markerSyntax = n, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Gn(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return Kt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: n, markerSyntax: r = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || Ai(n, r, i)
    }).getWritable();
    return o.__marker = n, o.__markerSyntax = r, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n.__text = Ai(t, n.__markerSyntax, n.__nested), n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const n = this.getWritable();
    return n.__markerSyntax = t, n.__text = Ai(n.__marker, t, n.__nested), n;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const n = this.getWritable();
    return n.__nested = t, n.__text = Ai(n.__marker, n.__markerSyntax, t), n;
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
      version: W_
    };
  }
}
function Kt(e, t, n) {
  return kt(new Gn(e, t, void 0, n));
}
function N(e) {
  return e instanceof Gn;
}
function to(e) {
  return e?.type === Gn.getType();
}
function pr(e) {
  return e.getTextContent() === Ai(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function H_(e) {
  e.setTextContent(Ai(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ai(e, t, n = !1) {
  return t === "closing" ? ct(e, n) : t === "selfClosing" ? ct("") : Je(e, n);
}
const It = "internal-comment", G_ = [It], sb = Object.freeze({}), Lu = Object.freeze({}), qu = Object.freeze({}), Du = Object.freeze({}), Ku = Object.freeze({}), J_ = 1, Si = /* @__PURE__ */ new Map(), vs = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), jo = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap();
function Y_(e) {
  return jo.set(e, []), Vo.set(e, /* @__PURE__ */ new Map()), () => {
    jo.delete(e), Vo.delete(e);
  };
}
function X_(e) {
  const t = jo.get(e);
  return t ? (jo.set(e, []), t) : [];
}
const oc = /* @__PURE__ */ new WeakMap();
function ja(e, t) {
  return JSON.stringify([e, t]);
}
function Gh(e, t, n, r) {
  let i = oc.get(e);
  r ? (i || oc.set(e, i = /* @__PURE__ */ new Set()), i.add(ja(t, n))) : (i?.delete(ja(t, n)), Vo.get(e)?.delete(ja(t, n)));
}
function Q_(e) {
  oc.delete(e), Vo.get(e)?.clear();
}
function $a(e, t, n, r) {
  const i = e.get(t), s = i?.[n];
  if (!i || !s || !(r in s))
    return;
  const o = xr(s, r), a = Object.keys(o).length > 0 ? { ...i, [n]: o } : xr(i, n);
  Object.keys(a).length > 0 ? e.set(t, a) : e.delete(t);
}
function Z_(e, t, n) {
  $a(Si, e, t, n), $a(vs, e, t, n), $a(_i, e, t, n), $a(Mi, e, t, n);
}
class yt extends dr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = sb, n, r, i, s, o) {
    super(o), this.__typedIDs = Ra(t), this.__typedOnClicks = Wl(n), this.__typedOnRemoves = Hl(r), this.__typedOnMouseEnters = Gl(i), this.__typedOnMouseLeaves = Jl(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const n = Ra(t.__typedIDs), r = Wl(t.__typedOnClicks), i = Hl(t.__typedOnRemoves), s = Gl(t.__typedOnMouseEnters), o = Jl(t.__typedOnMouseLeaves);
    return new yt(n, r, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return G_.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ui().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: J_
    };
  }
  createDOM(t, n) {
    const r = document.createElement("mark");
    _o(r, ...ob(t.theme, this.__typedIDs));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = Oi(r.theme.typedMark, s), f = Oi(r.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && _o(n, u) : l === 0 && Fa(n, u), c === 1 ? l === 2 && _o(n, f) : l === 1 && Fa(n, f));
      const d = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Fa(n, Oi("annotationId", h));
      for (const h of a)
        d.has(h) || _o(n, Oi("annotationId", h));
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
    return ae(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const n = this.getWritable(), r = Ra(n.__typedIDs);
    n.__typedIDs = Ra(t), n.dispatchRemovedIDs(r, n.__typedIDs, "removed"), n.pruneTypedOnClicks(), n.pruneTypedOnRemoves(), n.pruneTypedOnMouseEnters(), n.pruneTypedOnMouseLeaves(), n.syncTypedOnClicksToRegistry(), n.syncTypedOnRemovesToRegistry(), n.syncTypedOnMouseEntersToRegistry(), n.syncTypedOnMouseLeavesToRegistry();
    const i = n.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Uu(i), i;
  }
  setTypedOnClicks(t) {
    const n = this.getWritable();
    return n.__typedOnClicks = Wl(t), n.pruneTypedOnClicks(), n.syncTypedOnClicksToRegistry(), n;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ae(t) ? Si.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const n = this.getWritable();
    return n.__typedOnRemoves = Hl(t), n.pruneTypedOnRemoves(), n.syncTypedOnRemovesToRegistry(), n;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ae(t) ? vs.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const n = this.getWritable();
    return n.__typedOnMouseEnters = Gl(t), n.pruneTypedOnMouseEnters(), n.syncTypedOnMouseEntersToRegistry(), n;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ae(t) ? _i.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const n = this.getWritable();
    return n.__typedOnMouseLeaves = Jl(t), n.pruneTypedOnMouseLeaves(), n.syncTypedOnMouseLeavesToRegistry(), n;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ae(t) ? Mi.get(t.getKey()) ?? {} : {};
  }
  addID(t, n, r, i, s, o) {
    const a = this.getWritable();
    if (!ae(a))
      return;
    Ct(t), Ct(n);
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
    if (!ae(r))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Uu(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, n = !0) {
    const r = Ui(this.__typedIDs, this.getTypedOnClicks());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Lu) {
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
    Ct(t), Ct(n);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, n) {
    if (!this.__typedOnClicks)
      return;
    const r = this.__typedOnClicks[t];
    if (!r)
      return;
    const i = xr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = xr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Lu) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === qu) {
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
    Ct(t), Ct(n);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, n) {
    if (!this.__typedOnRemoves)
      return;
    const r = this.__typedOnRemoves[t];
    if (!r)
      return;
    const i = xr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = xr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === qu) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Du) {
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
    Ct(t), Ct(n);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, n) {
    if (!this.__typedOnMouseEnters)
      return;
    const r = this.__typedOnMouseEnters[t];
    if (!r)
      return;
    const i = xr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = xr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Du) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ku) {
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
    Ct(t), Ct(n);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[n] = r, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, n) {
    if (!this.__typedOnMouseLeaves)
      return;
    const r = this.__typedOnMouseLeaves[t];
    if (!r)
      return;
    const i = xr(r, n);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = xr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Ku) {
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
    const o = Pt(), a = ja(t, n), c = Vo.get(o);
    if (oc.get(o)?.has(a) || c?.get(a)?.has(this.getKey())) {
      this.removeOnRemoveFor(t, n);
      return;
    }
    if (jo.get(o)?.push([t, n]), c) {
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
    const i = e0(t, n);
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
    for (; ae(t) && Yh(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let n = this.getNextSibling();
    for (; ae(n) && Yh(this.getTypedIDs(), n.getTypedIDs()); )
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
    const n = t0(this.getTypedOnClicks(), t);
    Object.keys(n).length !== 0 && this.setTypedOnClicks(n);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = n0(this.getTypedOnRemoves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnRemoves(n);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = r0(this.getTypedOnMouseEnters(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseEnters(n);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const n = i0(this.getTypedOnMouseLeaves(), t);
    Object.keys(n).length !== 0 && this.setTypedOnMouseLeaves(n);
  }
}
function Ra(e = sb) {
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    if (Ct(n), !Array.isArray(r)) {
      t[n] = [];
      continue;
    }
    const i = [];
    for (const s of r)
      Ct(s), i.push(s);
    t[n] = i;
  }
  return t;
}
function Wl(e) {
  if (!e || e === Lu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Ct(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Ct(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Hl(e) {
  if (!e || e === qu)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Ct(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Ct(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Gl(e) {
  if (!e || e === Du)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Ct(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Ct(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Jl(e) {
  if (!e || e === Ku)
    return;
  const t = {};
  for (const [n, r] of Object.entries(e)) {
    Ct(n);
    const i = {};
    for (const [s, o] of Object.entries(r))
      Ct(s), i[s] = o;
    Object.keys(i).length > 0 && (t[n] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function xr(e, t) {
  const n = {};
  for (const [r, i] of Object.entries(e))
    r !== t && (n[r] = i);
  return n;
}
function Jh(e) {
  const t = {};
  for (const [n, r] of Object.entries(e))
    !r || r.length === 0 || (t[n] = [...r].sort());
  return t;
}
function e0(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(e)) {
    const s = new Set(t[r] ?? []);
    for (const o of i ?? [])
      s.has(o) || n.push([r, o]);
  }
  return n;
}
function Yh(e, t) {
  const n = Jh(e), r = Jh(t), i = Object.keys(n).sort(), s = Object.keys(r).sort();
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
function t0(e, t) {
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
function n0(e, t) {
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
function r0(e, t) {
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
function i0(e, t) {
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
function Oi(e, t) {
  return `${e}-${t}`;
}
function ob(e, t) {
  const n = [];
  for (const [r, i] of Object.entries(t)) {
    n.push(Oi(e.typedMark, r)), i.length > 1 && n.push(Oi(e.typedMarkOverlap, r));
    for (const s of i)
      n.push(Oi("annotationId", s));
  }
  return n;
}
function Yl(e) {
  return `external-${e}`;
}
function Ui(e, t, n, r, i) {
  return kt(new yt(e, t, n, r, i));
}
function ae(e) {
  return e instanceof yt;
}
function Bi(e) {
  return e?.type === yt.getType();
}
function ab(e, t, n) {
  let r = 0;
  for (const i of n) {
    const s = Q(i);
    !ae(s) || !s.hasID(e, t) || (r++, s.deleteID(e, t), s.hasNoIDsForEveryType() && Uu(s));
  }
  return r;
}
function Uu(e) {
  const t = e.getChildren();
  let n = null;
  for (const r of t)
    n === null ? e.insertBefore(r) : n.insertAfter(r), n = r;
  e.remove();
}
function s0(e, t, n) {
  let r = e;
  for (; r !== null; ) {
    if (ae(r))
      return r.getTypedIDs()[t];
    if (v(r) && n === r.getTextContentSize()) {
      const i = r.getNextSibling();
      if (ae(i))
        return i.getTypedIDs()[t];
    }
    r = r.getParent();
  }
}
const Fi = Zs("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oi = Zs("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ke = Zs("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Ar = "marker-trailing-space", cb = 1, o0 = "attribute-run";
function Xl(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Pr extends dr {
  __runKind;
  constructor(t, n) {
    super(n), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: n, __key: r } = t;
    return new Pr(n, r);
  }
  static importJSON(t) {
    return lb(t.runKind).updateFromJSON(t);
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
    t.classList.add(o0);
    const n = Xl(this.__runKind);
    return n !== void 0 && t.classList.add(n), t;
  }
  updateDOM(t, n) {
    if (t.__runKind !== this.__runKind) {
      const r = Xl(t.__runKind);
      r !== void 0 && n.classList.remove(r);
      const i = Xl(this.__runKind);
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
      version: cb
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
function lb(e) {
  return kt(new Pr(e));
}
function je(e) {
  return e instanceof Pr;
}
const ub = [
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
], fb = [
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
], a0 = [
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
  ...ub,
  ...fb
], db = 1, c0 = ["type", "marker", "content"];
class We extends dr {
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
    return new We(n, r, i);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (a0.includes(t) || (n?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && ub.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && fb.includes(t);
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
    return We.isValidFootnoteMarker(t) || We.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => u0(t) ? {
        conversion: l0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Br().updateFromJSON(t);
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
    return Xh(n, this.__marker, t), n.classList.add(this.__type), n;
  }
  updateDOM(t, n, r) {
    return t.__marker !== this.__marker && (n.classList.remove(`usfm_${t.__marker}`), Xh(n, this.__marker, r)), !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Qi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: db
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = this.getUnknownAttributes()?.closed === "false", i = Br(this.getMarker(), r ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, n), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Xh(e, t, n) {
  e.setAttribute("data-marker", t), n.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function l0(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Br(t) };
}
function Br(e, t) {
  return kt(new We(e, t));
}
function u0(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return We.isValidMarker(t) && e.classList.contains(We.getType());
}
function D(e) {
  return e instanceof We;
}
function pb(e) {
  return e?.type === We.getType();
}
const ac = "v", hb = 1, f0 = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class qt extends ot {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n, r, i, s, o, a) {
    super(n ?? t, a), this.__marker = ac, this.__number = t, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: n, __text: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new qt(n, r, i, s, o, a, c);
  }
  static importJSON(t) {
    return gb().updateFromJSON(t);
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
    return n.setAttribute("data-marker", this.__marker), n.classList.add(Ou, `usfm_${this.__marker}`), n.setAttribute("data-number", this.__number), n;
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
      version: hb
    };
  }
}
function gb(e, t, n, r, i, s) {
  return kt(new qt(e, t, n, r, i, s));
}
function Ae(e) {
  return e instanceof qt;
}
function xd(e) {
  return e?.type === qt.getType();
}
const d0 = /* @__PURE__ */ new Set(["closed"]);
function er(e, t) {
  const n = Object.entries(e).filter(([r, i]) => i !== void 0 && !d0.has(r));
  return n.length === 0 ? "" : n.length === 1 && n[0][0] === t && n[0][1] !== "" ? `|${n[0][1]}` : `|${n.map(([r, i]) => `${r}="${i}"`).join(" ")}`;
}
function mb(e, t) {
  if (!t || t.length === 0)
    return e;
  const n = {};
  return t.forEach((r) => {
    Object.hasOwn(e, r) && (n[r] = e[r]);
  }), Object.entries(e).forEach(([r, i]) => {
    Object.hasOwn(n, r) || (n[r] = i);
  }), n;
}
function yb(e) {
  const t = Object.keys(e).filter((r) => !T_.includes(r)), n = [
    ...t.filter((r) => r === "sid"),
    ...t.filter((r) => r === "eid"),
    ...t.filter((r) => r !== "sid" && r !== "eid")
  ];
  return t.every((r, i) => r === n[i]) ? void 0 : t;
}
function bb(e, t, n, r) {
  return mb(
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
function Po(e) {
  return e.getChildren().find((t) => N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function p0(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((r) => r !== "closed") ? !1 : Po(e) === void 0 && kb(e) === void 0;
}
function kb(e) {
  return e.getChildren().find((t) => v(t) && pe(t, ke) === "attribute");
}
function Wo(e, t) {
  return ha(e.getNextSibling(), t);
}
const h0 = /^[ \u00A0]+$/;
function Td(e) {
  if (pr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Je(e.getMarker(), e.getNested()), n = e.getTextContent();
  return n.startsWith(t) && h0.test(n.slice(t.length));
}
function ha(e, t) {
  let n, r, i, s;
  return je(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), N(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Td(e) && (n = e, e = e.getNextSibling()), v(e) && pe(e, ke) === "attribute" && (r = e, e = e.getNextSibling()), N(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && pr(e) && (i = e), { opener: n, value: r, closer: i, wrapper: s };
}
function g0(e) {
  let t = e;
  for (; ae(t); )
    t = t.getChildren()[0];
  return t;
}
function wt(e) {
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const i = t[n];
    if (!N(i) || i.getMarkerSyntax() !== "opening")
      break;
    n++;
  }
  const r = g0(t[n]);
  if (!(!v(r) || r.getType() !== ot.getType()))
    return r.getTextContent() === Nt(e.getCaller()) || r.isUnmergeable() ? r : void 0;
}
function ga(e) {
  const t = wt(e);
  return t ? ha(t.getNextSibling(), "cat") : {};
}
function gi(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || N(t)) && pe(t, ke) !== "attribute")
    return t;
}
function xb(e) {
  const t = gi(e);
  return t ? ha(t.getNextSibling(), "ca") : {};
}
function Tb(e) {
  const t = gi(e);
  if (!t)
    return;
  const n = ha(t.getNextSibling(), "ca");
  return n.wrapper ?? n.closer ?? t;
}
function vb(e) {
  const t = Tb(e);
  return t ? ha(t.getNextSibling(), "cp") : {};
}
function Cb(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const n = t.getMarker();
  if (!(n !== "va" && n !== "vp"))
    for (let r = t.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (Ae(r))
        return r;
      if (!(N(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || v(r) && pe(r, ke) === "attribute" || D(r) && (r.getMarker() === "va" || r.getMarker() === "vp") || je(r)))
        return;
    }
}
function Qc(e) {
  let t, n, r, i, s = e.getNextSibling();
  return je(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), N(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Td(s) && (t = s, s = s.getNextSibling()), v(s) && pe(s, ke) === "attribute" && (n = s, s = s.getNextSibling()), N(s) && s.getMarkerSyntax() === "selfClosing" && pr(s) && (r = s), { opening: t, attribute: n, closing: r, wrapper: i };
}
const cc = "c", Sb = 1, m0 = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class vn extends dr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n, r, i, s, o) {
    super(o), this.__marker = cc, this.__number = t, this.__sid = n, this.__altnumber = r, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: n, __sid: r, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new vn(n, r, i, s, o, a);
  }
  static importJSON(t) {
    return _b().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(ic, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Sb
    };
  }
}
function _b(e, t, n, r, i) {
  return kt(new vn(e, t, n, r, i));
}
function we(e) {
  return e instanceof vn;
}
function y0(e) {
  return e?.type === vn.getType();
}
const b0 = ["type", "marker", "content"], Bu = "unknown", Mb = 1, k0 = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ns extends dr {
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
    return new ns(n, r, i, s);
  }
  static importDOM() {
    return {
      [Bu]: (t) => T0(t) ? {
        conversion: x0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return vd().updateFromJSON(t);
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
    return k0.has(this.getTag());
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
    const t = document.createElement(Bu);
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
      version: Mb
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
    if (Vc(n) && super.isSelected(n))
      return !0;
    if (n.isCollapsed())
      return !1;
    const r = n.getNodes();
    return this.getChildren().some((i) => r.some((s) => s.is(i)));
  }
}
function x0(e) {
  const t = e.getAttribute("data-tag") ?? "", n = e.getAttribute("data-marker") ?? "";
  return { node: vd(t, n) };
}
function vd(e, t, n) {
  return kt(new ns(e, t, n));
}
function T0(e) {
  return e?.tagName.toLowerCase() === Bu;
}
function rt(e) {
  return e instanceof ns;
}
const Eb = "table", Fu = "immutable-table", Ab = 1, v0 = ["type", "marker", "content"];
class rs extends dr {
  __unknownAttributes;
  constructor(t, n) {
    super(n), this.__unknownAttributes = t;
  }
  static getType() {
    return Fu;
  }
  static clone(t) {
    return new rs(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return C0().updateFromJSON(t);
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
      type: Fu,
      ...t !== void 0 && { unknownAttributes: t },
      version: Ab
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function C0(e) {
  return kt(new rs(e));
}
function Pb(e) {
  return e instanceof rs;
}
function S0(e) {
  return e?.type === Fu;
}
function zu(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (rt(t) || Pb(t))
      return !0;
  return !1;
}
const Nb = 1;
class ai extends nd {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new ai(t.__key);
  }
  static importJSON(t) {
    return Hn().updateFromJSON(t);
  }
  getMarker() {
    return Vn;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Nb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = Hn();
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function Hn() {
  return kt(new ai());
}
function Mt(e) {
  return e instanceof ai;
}
function Zc(e) {
  return e?.type === ai.getType();
}
function Cd(e) {
  return Mt(e) && yn(e.getParent());
}
function wb(e) {
  return ae(e) || Cd(e);
}
function Dn(e) {
  let t = e.getParent();
  for (; t && wb(t); )
    t = t.getParent();
  return t;
}
function el(e) {
  return D(Dn(e));
}
function Sd(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const n = e.getMarker();
  return n === t.getMarker() ? el(t) : t.getChildren().some((i) => D(i) && i.getMarker() === n) ? !0 : void 0;
}
function _0(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!N(t))
      return;
    const n = Sd(t, e);
    n !== void 0 && t.setNested(n);
  });
}
const Ri = /* @__PURE__ */ new WeakMap();
function M0(e, t, n) {
  const r = { owners: t, rederive: n };
  return Ri.set(e, r), () => {
    Ri.get(e) === r && Ri.delete(e);
  };
}
function Ob(e, t, n) {
  const r = Ri.get(e);
  !r?.rederive || !n.has(Wc) || r.derivedFor === t || (r.rederive(t), r.derivedFor = t);
}
function ju(e) {
  return Ri.get(e)?.owners;
}
function $b(e) {
  return Ri.get(Pt())?.owners.has(e.getKey()) ?? !1;
}
function Rb(e) {
  Ri.get(Pt())?.owners.add(e.getKey());
}
function Hr(e) {
  return v(e) && e.getType() === ot.getType() && pe(e, ke) !== "attribute";
}
function no(e) {
  if (!Hr(e) || !e.getTextContent().startsWith(q))
    return 0;
  let t = e, n = t.getPreviousSibling(), r = t.getParent();
  for (; r && ae(r); )
    t = r, r = t.getParent(), n ??= t.getPreviousSibling();
  if (!D(r))
    return 0;
  for (; ae(n); )
    n = n.getLastChild();
  return !N(n) || n.getMarkerSyntax() !== "opening" ? 0 : Ed(n, r) ? 1 : 0;
}
function _d(e) {
  let t = e.getNextSibling();
  for (; ae(t); )
    t = t.getFirstChild();
  return t;
}
function Md(e) {
  const t = e.getPreviousSibling(), n = e.getParent();
  return !N(t) || !D(n) || !Ed(t, n) || !Hr(e) ? 0 : e.getTextContent().startsWith(q) ? q.length : 0;
}
function Ed(e, t) {
  return e.getMarkerSyntax() === "opening" && Sd(e, t) !== void 0;
}
function ro(e, t) {
  if (!Ed(e, t))
    return;
  const n = e.getNextSibling(), r = _d(e);
  if (!(n === null || r === null))
    return N(r) ? Sd(r, t) === !0 ? "spacer" : void 0 : Hr(r) ? r.getTextContent().startsWith(q) ? void 0 : r.is(n) ? "prefix" : "spacer" : "spacer";
}
function Ad(e) {
  return !Hr(_d(e)) || zu(e) ? !1 : !N_(e.getNextSibling()?.getTextContent() ?? "");
}
function Ib(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (N(t) && ro(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Pd(e, t) {
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
    if (!ae(i))
      return !1;
    i = i.getFirstChild();
  }
  return !1;
}
function Lb(e) {
  if (!e.isAttached() || $b(e))
    return;
  const t = ju(Pt()) !== void 0;
  e.getChildren().forEach((n) => {
    if (!N(n))
      return;
    const r = ro(n, e);
    if (r === void 0 || Pd(n, e))
      return;
    if (t && Ad(n)) {
      Rb(e);
      return;
    }
    if (r === "spacer") {
      n.insertAfter(Ue(q));
      return;
    }
    const i = n.getNextSibling();
    v(i) && (E0(i) || P0(i));
  });
}
function E0(e) {
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
function A0(e) {
  if (e.getMarkerSyntax() !== "opening" || !D(e.getParent()))
    return !1;
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = e.getTextContent(), { anchor: r } = t;
  if (r.key !== e.getKey() || r.offset !== n.length)
    return !1;
  const i = Je(e.getMarker(), e.getNested()), s = n.slice(i.length);
  if (!n.startsWith(i) || !/^[|\s]+$/.test(s))
    return !1;
  const o = _d(e);
  if (!Hr(o))
    return !1;
  const a = o.getTextContent();
  return a.startsWith(q) ? (e.setTextContent(i), o.setTextContent(q + s + a.slice(q.length)), o.select(q.length + s.length, q.length + s.length), !0) : !1;
}
function qb(e, t) {
  ae(e.getNextSibling()) && ro(e, t) === "spacer" && e.insertAfter(Ue(q));
}
function P0(e) {
  e.setTextContent(q + e.getTextContent());
  const t = w();
  if (E(t))
    for (const n of [t.anchor, t.focus])
      n.type === "text" && n.key === e.getKey() && n.set(n.key, n.offset + 1, "text");
}
function N0(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && ro(t, e) !== void 0 && Pd(t, e)) : !1;
}
function Nd(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && ro(t, e) !== void 0 && (Pd(t, e) || Ad(t))) : !1;
}
function wd(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && ro(t, e) !== void 0 && Ad(t)) : !1;
}
function w0(e) {
  if (N0(e))
    return !0;
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = t.anchor.getNode();
  return (n.is(e) || e.isParentOf(n)) && Nd(e);
}
const Db = 1, O0 = "marker", Od = Zs("isGutterMarker", {
  parse: (e) => e === !0
});
class Jn extends la {
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
    return new Jn(n, r, i);
  }
  static importDOM() {
    return {
      span: (t) => L0(t) ? {
        conversion: $0,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Fr().updateFromJSON(t);
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
    return n && Qi(n) && n.setAttribute("data-text-type", this.getTextType()), { element: n };
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
      version: Db
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function $0(e) {
  const t = e.getAttribute("data-text-type") ?? "", n = e.textContent ?? "";
  return { node: Fr(t, n) };
}
function Fr(e, t) {
  return kt(new Jn(e, t));
}
function R0(e) {
  return Xt(Fr(O0, e), Od, !0);
}
function I0(e) {
  return Ut(e) && pe(e, Od);
}
function L0(e) {
  return e?.tagName === "span";
}
function Ut(e) {
  return e instanceof Jn;
}
function Kb(e) {
  return e?.type === Jn.getType();
}
const Ub = "file", Bb = "src", q0 = "colspan", D0 = "category", K0 = "alt", U0 = "closed", B0 = "false";
function F0(e) {
  return e[U0] !== B0;
}
function z0(e) {
  return Object.fromEntries(Object.entries(e).map(([t, n]) => [
    t === Ub ? Bb : t,
    n
  ]));
}
function j0(e, t) {
  return e === "figure" && t === Bb ? Ub : t;
}
function Fb(e, t) {
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
function tl(e, t, n) {
  const r = n ?? {}, i = F0(r);
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
        opening: `\\${Fb(t, r[q0])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: er(z0(r), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [D0]: s, ...o } = r;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + er(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [K0]: s, ...o } = r;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: er(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: er(r, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const pn = { wantsRun: !1, valueText: void 0 }, Gr = {};
function Ql(e, t) {
  if (t === "va")
    return e;
  const n = Wo(e, "va");
  return n.wrapper ?? n.closer ?? e;
}
function $d(e) {
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
function nl(e) {
  const { opener: t, closer: n } = e;
  if (!t)
    return !1;
  const r = w();
  if (!E(r) || !r.isCollapsed())
    return !1;
  const i = r.anchor.getNode(), s = i.is(t) && r.anchor.offset === t.getTextContentSize();
  return n ? s || i.is(n) : s;
}
function V0(e) {
  return je(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : N(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && pe(e, ke) === "attribute";
}
function W0(e) {
  if (N(e)) {
    const r = e.getMarker();
    return r === "va" || r === "vp" ? r : void 0;
  }
  if (!v(e) || pe(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const n = t.getMarker();
  return n === "va" || n === "vp" ? n : void 0;
}
function Zl(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ae(t))
      return t;
    if (!V0(t))
      return;
  }
}
function Qh(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ae(t),
    ownerOf: (t) => {
      if (je(t))
        return t.getRunKind() === e ? Zl(t) : void 0;
      const n = t.getParent();
      return je(n) ? n.getRunKind() === e ? Zl(n) : void 0 : W0(t) === e ? Zl(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ae(t))
        return pn;
      const n = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return n === void 0 ? pn : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (t) => Ae(t) ? Wo(Ql(t, e), e) : Gr,
    graceSite: (t, n) => Ae(t) ? !n.opener && !n.closer ? $d(Ql(t, e)) : nl(n) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ae(t) ? Ql(t, e) : void 0
    }
  };
}
const H0 = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => pn,
  scanPieces: () => Gr,
  graceSite: (e) => D(e) && w0(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, G0 = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!v(e) || pe(e, ke) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || Po(e) === void 0)
      return pn;
    const t = er(e.getUnknownAttributes() ?? {}, eo(e.getMarker()));
    return t === "" ? pn : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: kb(e) } : Gr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const n = Po(e);
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
    insertRunBefore: (e) => D(e) ? Po(e) : void 0
  }
};
function zb(e) {
  if (N(e))
    return e.getMarker() === "cat";
  if (!v(e) || pe(e, ke) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return N(t) && t.getMarker() === "cat";
}
function J0(e) {
  const t = e.getParent();
  if (!L(t))
    return;
  const n = wt(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!zb(r))
        return;
    }
}
const Y0 = {
  kind: "cat",
  ownerPredicate: (e) => L(e),
  ownerOf: (e) => {
    if (je(e))
      return e.getRunKind() === "cat" && L(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return je(t) ? t.getRunKind() === "cat" && L(t.getParent()) ? t.getParent() ?? void 0 : void 0 : zb(e) ? J0(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!L(e) || e.getIsCollapsed() !== !1)
      return pn;
    const t = e.getCategory();
    return t === void 0 ? pn : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => L(e) ? ga(e) : Gr,
  graceSite: (e, t) => {
    if (!L(e))
      return !1;
    if (!t.opener && !t.closer) {
      const n = wt(e);
      return n !== void 0 && $d(n);
    }
    return nl(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => L(e) ? wt(e) : void 0
  }
};
function X0(e) {
  return je(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : N(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && pe(e, ke) === "attribute";
}
function Q0(e) {
  if (N(e)) {
    const r = e.getMarker();
    return r === "ca" || r === "cp" ? r : void 0;
  }
  if (!v(e) || pe(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const n = t.getMarker();
  return n === "ca" || n === "cp" ? n : void 0;
}
function Z0(e) {
  const t = e.getParent();
  if (!we(t))
    return;
  const n = gi(t);
  if (n)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (r.is(n))
        return t;
      if (!X0(r))
        return;
    }
}
function Zh(e) {
  const t = (n) => we(n) ? e === "ca" ? gi(n) : Tb(n) : void 0;
  return {
    kind: e,
    ownerPredicate: (n) => we(n),
    ownerOf: (n) => {
      if (je(n))
        return n.getRunKind() === e && we(n.getParent()) ? n.getParent() ?? void 0 : void 0;
      const r = n.getParent();
      return je(r) ? r.getRunKind() === e && we(r.getParent()) ? r.getParent() ?? void 0 : void 0 : Q0(n) === e ? Z0(n) : void 0;
    },
    expectedPieces: (n) => {
      if (!we(n))
        return pn;
      const r = e === "ca" ? n.getAltnumber() : n.getPubnumber();
      return r === void 0 ? pn : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (n) => we(n) ? e === "ca" ? xb(n) : vb(n) : Gr,
    graceSite: (n, r) => {
      if (!we(n))
        return !1;
      if (!r.opener && !r.closer) {
        const i = t(n);
        return i !== void 0 && $d(i);
      }
      return nl(r);
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
function jb(e) {
  if (N(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && pe(e, ke) === "attribute";
}
function eM(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (ze(t)) {
      const n = N(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !n || n.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!jb(t))
      return;
  }
}
const tM = {
  kind: "milestone",
  ownerPredicate: (e) => ze(e),
  ownerOf: (e) => {
    const t = je(e) ? e.getRunKind() === "milestone" ? e : void 0 : je(e.getParent()) ? e.getParent() : jb(e) ? e : void 0;
    if (!t || je(t) && t.getRunKind() !== "milestone")
      return;
    const n = t.getPreviousSibling();
    return je(t) ? ze(n) ? n : void 0 : eM(t);
  },
  expectedPieces: (e) => {
    if (!ze(e))
      return pn;
    const t = bb(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), n = er(t, pa(e.getMarker()));
    return { wantsRun: !0, valueText: n === "" ? void 0 : q + n };
  },
  scanPieces: (e) => {
    if (!ze(e))
      return Gr;
    const { opening: t, attribute: n, closing: r, wrapper: i } = Qc(e);
    return { opener: t, value: n, closer: r, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!ze(e))
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
    return nl(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => ze(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, nM = tl("optbreak", void 0, void 0).opening, rM = {
  kind: "optbreak",
  ownerPredicate: (e) => rt(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!rt(t) || t.getTag() !== "optbreak"))
      return v(e) || Ut(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: nM }),
  scanPieces: (e) => rt(e) ? { value: e.getFirstChild() ?? void 0 } : Gr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, iM = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => rt(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => pn,
  scanPieces: () => Gr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, sM = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => pn,
  scanPieces: () => Gr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ho = [
  H0,
  G0,
  Qh("va"),
  Qh("vp"),
  Y0,
  Zh("ca"),
  Zh("cp"),
  tM,
  rM,
  iM,
  sM
], oM = new Map(Ho.map((e) => [e.kind, e]));
function zr(e) {
  const t = oM.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Sr(e) {
  for (const t of Ho) {
    const n = t.ownerOf(e);
    if (n)
      return { owner: n, kind: t.kind };
  }
}
function Vb(e) {
  return Sr(e) !== void 0;
}
function aM(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const { type: t, id: n, start: r, end: i, undisplayed: s } = e;
  return typeof t == "string" && typeof n == "string" && Number.isInteger(r) && Number.isInteger(i) && (s === void 0 || typeof s == "boolean");
}
const rl = Zs("displayAnnotations", {
  parse: (e) => {
    if (typeof e != "object" || e === null)
      return;
    const { basis: t, annotations: n } = e;
    if (!(typeof t != "string" || !Array.isArray(n)) && n.every(aM))
      return { basis: t, annotations: n };
  }
});
function cM(e, t) {
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
function lM(e, t, n) {
  let r, i;
  for (let s = t; s < n; s++) {
    const o = e[s];
    o !== void 0 && (r ??= o, i = o);
  }
  return r === void 0 || i === void 0 ? void 0 : [r, i + 1];
}
const Wb = 1, uM = "c", Hb = "span";
class Kn extends la {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = uM, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Kn(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Gb(t) ? {
        conversion: fM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Rd().updateFromJSON(t);
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
    const t = document.createElement(Hb);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(ic, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Qi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(ic, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
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
    return this.getShowMarker() ? Wn(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Wb
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
function fM(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Rd(t) };
}
function Rd(e, t, n, r, i, s) {
  return kt(new Kn(e, t, n, r, i, s));
}
function Gb(e) {
  return e ? e.classList.contains(ic) && e.tagName.toLowerCase() === Hb : !1;
}
function Jr(e) {
  return e instanceof Kn;
}
function dM(e) {
  return e?.type === Kn.getType();
}
const Go = "id", Jb = 1, pM = [
  "type",
  "marker",
  "code",
  "content"
];
class wn extends dr {
  __marker = Go;
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
    return new wn(n, r, i);
  }
  static importJSON(t) {
    const { code: n } = t;
    return Yb(n).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return SS(t);
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
      version: Jb
    };
  }
}
function Yb(e, t) {
  return kt(new wn(e, t));
}
function Ie(e) {
  return e instanceof wn;
}
function Id(e) {
  return e?.type === wn.getType();
}
const hM = [
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
  Vn,
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
], Xb = 1, gM = ["type", "marker", "content"];
class Bt extends nd {
  __marker;
  __unknownAttributes;
  constructor(t = Vn, n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: n, __unknownAttributes: r, __key: i } = t;
    return new Bt(n, r, i);
  }
  static isValidMarker(t, n) {
    return t !== void 0 && (hM.includes(t) || (n?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: mM,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Bs().updateFromJSON(t);
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
    return n && Qi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: n };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Xb
    };
  }
  // Mutation
  insertNewAfter(t, n) {
    const r = Bs(this.getMarker());
    return r.setTextFormat(t.format), r.setTextStyle(t.style), r.setDirection(this.getDirection()), r.setFormat(this.getFormatType()), r.setStyle(this.getTextStyle()), this.insertAfter(r, n), r;
  }
}
function mM(e) {
  const t = e.getAttribute("data-marker") ?? void 0, n = Bs(t);
  if (e.style) {
    n.setFormat(e.style.textAlign);
    const r = parseInt(e.style.textIndent, 10) / 20;
    r > 0 && n.setIndent(r);
  }
  return { node: n };
}
function Bs(e, t) {
  return kt(new Bt(e, t));
}
function ye(e) {
  return e instanceof Bt;
}
function Ld(e) {
  return e?.type === Bt.getType();
}
const Qb = /[ \u00A0]{2,}/g, yM = /^[ \u00A0]*/;
function bM(e) {
  return [...e.matchAll(Qb)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function eg(e) {
  return e.replace(Qb, (t) => t[0]);
}
function Zb(e) {
  return yM.exec(e)?.[0].length ?? 0;
}
const kM = "​", Fs = kM;
var tg;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(tg || (tg = {}));
var ng;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(ng || (ng = {}));
function xM() {
  return Ue(Fs);
}
function TM(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Fs, ""));
}
function is(e) {
  return e.length > 0 && e.includes(Fs) && e.replaceAll(Fs, "") === "";
}
function ma(e) {
  return v(e) && is(e.getTextContent());
}
function ek(e) {
  return y0(e) || dM(e);
}
function at(e) {
  return we(e) || Jr(e);
}
function tk(e, t) {
  return e.find((n) => at(n) && n.getNumber() === t.toString());
}
function vM(e, t = !1) {
  return e.find((n, r) => (!t || r > 0) && at(n));
}
function Vu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const n = t.getPreviousSibling();
    if (n)
      return n;
    t = t.getParent();
  }
}
function CM(e) {
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
function On(e) {
  return nt(e, L) ?? void 0;
}
function SM(e) {
  return Ie(e) || we(e) || D(e) || Jr(e) || Mt(e) || ze(e) || ye(e) || L(e) || Ae(e) || rt(e);
}
function qd(e) {
  if (e.anchor.type === "element") {
    const n = e.anchor.getNode(), r = e.anchor.offset;
    if (r < n.getChildrenSize())
      return n.getChildAtIndex(r);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function nk(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const n = e.anchor.getNode();
  return n.getPreviousSibling() ?? n.getParent()?.getPreviousSibling() ?? null;
}
function bt(e) {
  return St(e) || Ie(e);
}
function St(e) {
  return ye(e) || Mt(e);
}
function _M(e) {
  return Ld(e) || Zc(e);
}
function zs(e, t) {
  let n = e.getParent();
  for (; n; ) {
    if (n.getKey() === t)
      return !0;
    n = n.getParent();
  }
  return !1;
}
function zi(e, t) {
  const n = pe(t, Fi), r = !!(e.cid && n), i = !e.cid && !n;
  return e.style === t.getMarker() && (i || r && e.cid === n);
}
function MM(e, t) {
  const n = A(e) ? e : e.getParent(), r = A(t) ? t : t.getParent(), i = n && r ? ES(n, r) : void 0;
  return i ? i.commonAncestor : void 0;
}
function EM(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [n, r] = t, i = e.isBackward() ? n : r;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function jr(e) {
  return e?.type === ot.getType();
}
function AM(e, t) {
  if (!t)
    return;
  const n = e.findIndex((r) => r === t);
  n && (e.length = n);
}
function PM(e, t) {
  if (!t)
    return e;
  const n = t.getIndexWithinParent();
  return e.splice(n + 1, e.length - n - 1);
}
function rk(e, t, n) {
  const r = Je(e);
  if (t?.startsWith(r)) {
    const i = t.slice(r.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (n = s[1]);
  }
  return n;
}
function NM(e) {
  const t = e[Kr];
  if (t && typeof t == "object" && "textType" in t) {
    const n = t.textType;
    if (typeof n == "string")
      return n;
  }
}
function ik(e) {
  return ok(e) || jr(e) && NM(e) === "attribute" ? "" : jr(e) && e.text !== q ? e.text : pb(e) ? e.children.map((t) => ik(t)).join("") : "";
}
function wM(e) {
  return e.map((n) => ik(n)).filter((n) => n.length > 0).join(" ").trim();
}
function Dd(e) {
  const t = [];
  for (const n of e) {
    if (!D(n))
      continue;
    const r = sk(n);
    r !== At && r.length > 0 && t.push(r);
  }
  return t.join(" ").trim();
}
function sk(e) {
  return N(e) || kn(e) || v(e) && pe(e, ke) === "attribute" ? "" : v(e) ? e.getTextContent() : A(e) ? e.getChildren().map((t) => sk(t)).join("") : "";
}
function kn(e) {
  return Ut(e) && e.getTextType() === "marker";
}
function xn(e) {
  return N(e) || kn(e);
}
function Kd(e) {
  if (!e || !xn(e))
    return !1;
  const t = e.getParent();
  return Ie(t) && e.is(t.getFirstChild());
}
function ok(e) {
  return to(e) || Kb(e) && e.textType === "marker";
}
function rg(e, t) {
  OM(e, t), e.setMarker(t);
}
function OM(e, t) {
  const n = e.getMarker(), r = Je(n), i = Je(n, !0), s = ct(n), o = ct(n, !0), a = We.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!xn(c))
      return;
    const l = c.getTextContent(), u = l === r || l === i, f = !u && (l === s || l === o);
    if (!(!u && !f)) {
      if (f && a) {
        c.remove();
        return;
      }
      if (N(c))
        c.setMarker(t);
      else if (kn(c)) {
        const d = l.startsWith(Je("", !0));
        c.setTextContent(u ? Je(t, d) : ct(t, d));
      }
    }
  });
}
function gt(e, t = _S) {
  const n = { ...e };
  return t.forEach((r) => {
    Reflect.deleteProperty(n, r);
  }), Object.keys(n).length === 0 ? void 0 : n;
}
function lt(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function ak(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function ck(e) {
  if (!E(e))
    return ig(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !A(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return ig(e) ?? t ?? void 0;
  } catch (r) {
    if (ak(r))
      return t ?? void 0;
    throw r;
  }
}
function $M(e, t) {
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
function Ud(e, t) {
  if (!t)
    return !1;
  const n = t.split("-").map((r) => parseInt(r));
  if (n.length < 1 || n.length > 2 || n[0] > n[1])
    throw new Error("isVerseInRange: invalid range");
  return n.length === 1 ? e === n[0] : n.length === 2 && isNaN(n[1]) ? e >= n[0] : (n.length === 2 && isNaN(n[0]) || e >= n[0]) && e <= n[1];
}
function RM(e) {
  return !!e && e.includes("-");
}
function lk(e) {
  const t = e.split("-"), n = parseInt(t[0], 10), r = t.length > 1 ? parseInt(t[t.length - 1], 10) : n;
  return { start: n, end: r };
}
function ig(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Bd(e) {
  if (!v(e))
    return;
  const t = Dn(e);
  if (!L(t) || !wt(t)?.is(e))
    return;
  const { start: n, end: r } = Xc(e.getTextContent(), t.getCaller());
  return n < r ? { start: n, end: r } : void 0;
}
function $n(e) {
  if (!e)
    return !1;
  if (Zi(e) || N(e) || kn(e) || je(e) || e.getType() === hi || Ut(e) && e.getTextType() === "attribute")
    return !0;
  const t = Dn(e);
  if (we(t))
    return !0;
  if (v(e) && L(t) && wt(t)?.is(e))
    return !Bd(e);
  if (v(e)) {
    const n = pe(e, ke);
    if (n === Ar || n === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || is(r))
      return !0;
    if (r === q)
      return !uk(e);
  }
  return !1;
}
function uk(e) {
  if (e.getTextContent() !== q || pe(e, ke) !== void 0 || !(ae(e.getParent()) || ae(e.getPreviousSibling()) || ae(e.getNextSibling())) || no(e) > 0)
    return !1;
  const n = Dn(e);
  return !D(n) || fk(n, e);
}
function fk(e, t) {
  return e.getChildren().some((n) => n.is(t) ? !1 : ae(n) ? fk(n, t) : v(n) ? !N(n) && pe(n, ke) === void 0 && n.getTextContent() !== "" && n.getTextContent() !== q && !is(n.getTextContent()) : A(n) && !je(n));
}
function ji() {
  const e = Ue(q);
  return Xt(e, ke, Ar), e.setMode("token"), e;
}
function IM(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function Cn(e) {
  return v(e) && pe(e, ke) === Ar;
}
function dk(e) {
  const t = e.getFirstChild();
  if (!xn(t) || t === null || Cn(t.getNextSibling()))
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
function pk(e) {
  const t = Bd(e);
  return {
    lead: t ? t.start : no(e),
    keptEnd: t ? t.end : e.getTextContentSize()
  };
}
function LM(e) {
  return e.every((t) => {
    const { lead: n, keptEnd: r } = pk(t), i = t.getTextContent().slice(n, r);
    return Zb(i) === i.length;
  });
}
function qM(e) {
  return Ae(e) && e.getAltnumber() === void 0 && e.getPubnumber() === void 0;
}
function DM(e) {
  const t = e.getPreviousSibling();
  return !at(t) || t.getAltnumber() === void 0 && t.getPubnumber() === void 0;
}
function hk(e, t) {
  if (we(e))
    return [];
  const n = [], r = [];
  let i;
  const s = () => {
    i && (n.push({ type: "text", nodes: i }), i = void 0);
  }, o = (a) => {
    if (!$n(a)) {
      if (Cd(a)) {
        s(), DM(a) && r.push(n.length), a.getChildren().forEach(o), s();
        return;
      }
      if (wb(a)) {
        a.getChildren().forEach(o);
        return;
      }
      if (v(a) && a.getType() === ot.getType()) {
        i ??= [], i.push(a);
        return;
      }
      s(), n.push({ type: "element", node: a });
    }
  };
  return e.getChildren().forEach(o), s(), t ? (ye(e) && r.push(0), n.filter((a, c) => {
    if (a.type !== "text")
      return !0;
    const l = n[c - 1];
    return r.includes(c) || l?.type === "element" && qM(l.node) ? (a.dropsLeadingSpaces = !0, !LM(a.nodes)) : !0;
  })) : n;
}
function KM(e, t) {
  const n = [];
  let r = 0, i = !!e.dropsLeadingSpaces;
  for (const s of e.nodes) {
    const { lead: o, keptEnd: a } = pk(s), c = s.getTextContent().slice(o, a), l = i ? Zb(c) : 0;
    l < c.length && (i = !1);
    const u = o + l, f = t ? bM(c.slice(l)).map(([p, h]) => [p + u, h + u]) : [];
    l > 0 && f.unshift([o, u]), a < s.getTextContentSize() && f.push([a, s.getTextContentSize()]);
    const d = s.getTextContentSize() - o - f.reduce((p, [h, g]) => p + g - h, 0);
    n.push({ node: s, start: r, lead: o, collapsed: f, length: d }), r += d;
  }
  return { type: "text", segments: n, length: r };
}
function gk(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function UM(e, t) {
  let n = t;
  for (const [r, i] of gk(e)) {
    if (t <= r)
      break;
    n -= Math.min(t, i) - r;
  }
  return e.start + n;
}
function sg(e, t) {
  let n = t;
  for (const [r, i] of gk(e)) {
    if (r > n)
      break;
    n += i - r;
  }
  return n;
}
function Ft(e, t) {
  return hk(e, t).map((n) => n.type === "element" ? { type: "element", node: n.node } : KM(n, t));
}
function BM(e, t, n) {
  return hk(e, n).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((i) => i.is(t)));
}
function Is(e, t, n) {
  const r = Dn(e);
  if (!r)
    return;
  const i = Ft(r, n);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: r, index: s, offset: UM(a, t) };
  }
}
function FM(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const r of e.segments)
    if (t >= r.start && t < r.start + r.length)
      return [r.node, sg(r, t - r.start)];
  const n = e.segments[e.segments.length - 1];
  if (n)
    return [n.node, sg(n, t - n.start)];
}
function Ns(e, t, n) {
  const r = e.getChildAtIndex(t);
  if (Cd(e)) {
    const s = e.getParentOrThrow();
    return r ? $n(r) || !Wu(Ft(s, n), r) ? Ns(e, t + 1, n) : Hu(s, r, n) : Ns(s, e.getIndexWithinParent() + 1, n);
  }
  const i = Ft(e, n);
  return r ? $n(r) || !Wu(i, r) ? Ns(e, t + 1, n) : Hu(e, r, n) : { type: "index", index: i.length };
}
function zM(e, t) {
  const n = Dn(e);
  if (n && Wu(Ft(n, t), e))
    return { parent: n, point: Hu(n, e, t) };
}
function Wu(e, t) {
  return e.some((n) => n.type === "element" ? n.node.is(t) || zs(n.node, t.getKey()) : n.segments.some((r) => r.node.is(t) || zs(r.node, t.getKey())));
}
function Hu(e, t, n) {
  const r = Ft(e, n);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(t) || zs(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || zs(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
const lc = "unmatched", mk = 2;
function No(e) {
  return `\\${e}`;
}
class hr extends ot {
  __marker;
  constructor(t = "", n) {
    super(No(t), n), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: n, __key: r } = t;
    return new hr(n, r);
  }
  static importDOM() {
    return {
      [lc]: (t) => VM(t) ? {
        conversion: jM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Fd().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const n = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? No(n)
    }).getWritable();
    return i.__marker = n, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const n = this.getWritable();
    return n.__marker = t, n.__text = No(t), n;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const n = super.createDOM(t);
    return n.setAttribute("data-marker", this.__marker), n.classList.add(Dh), n.title = og(this.__marker), n;
  }
  updateDOM(t, n, r) {
    const i = super.updateDOM(t, n, r);
    return t.__marker !== this.__marker && (n.setAttribute("data-marker", this.__marker), n.title = og(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(lc);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Dh), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: mk
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function yk(e) {
  return e.getTextContent() === No(e.getMarker());
}
function og(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function jM(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Fd(t) };
}
function Fd(e) {
  return kt(new hr(e));
}
function VM(e) {
  return e?.tagName.toLowerCase() === lc;
}
function on(e) {
  return e instanceof hr;
}
function WM(e) {
  return e?.type === hr.getType();
}
const HM = /* @__PURE__ */ new Set([
  hi,
  Gy,
  Jn.getType(),
  // A chapter in the views without editable markers: the same whole-node treatment as a verse.
  Kn.getType()
]);
function zd(e) {
  return v(e) && pe(e, ke) === "attribute";
}
function bk(e) {
  if (!v(e))
    return !1;
  let t = e.getParent();
  for (; ae(t); )
    t = t.getParent();
  return L(t) ? wt(t)?.is(e) ?? !1 : we(t) ? gi(t)?.is(e) ?? !1 : !1;
}
function kk(e) {
  return Tn(e) ? HM.has(e.getType()) : !v(e) || Cn(e) ? !1 : N(e) || Ae(e) || zd(e) || bk(e) || // An unmatched closer (`ImmutableUnmatchedNode`) is a `TextNode` subclass, not a decorator, so
  // the decorator-type set above cannot reach it.
  on(e);
}
function jd(e) {
  if (!v(e))
    return [0, 0];
  if (on(e))
    return [0, e.getTextContentSize()];
  const t = e.getTextContent(), n = t.length - t.trimStart().length;
  return n === t.length ? [n, n] : [n, t.trimEnd().length];
}
function xk(e, t, n) {
  return e.type === t && e.id === n;
}
function Tk(e, t) {
  if (e.basis === t)
    return e.annotations;
  const n = cM(e.basis, t);
  return e.annotations.flatMap((r) => {
    if (r.start === r.end)
      return [r];
    const i = lM(n, r.start, r.end);
    return i ? [{ ...r, start: i[0], end: i[1] }] : [];
  });
}
function uc(e) {
  return Tn(e) ? fc(e) : e.getTextContent();
}
function GM(e) {
  return Tn(e) ? ss(e) : e.getTextContent();
}
function Vd(e) {
  const t = pe(e, rl);
  return t ? Tk(t, uc(e)) : [];
}
function JM(e, t) {
  if (t.start === t.end)
    return t;
  let n, r;
  for (let i = t.start; i < t.end; i++) {
    const s = Hd.renderedOffset(e, i);
    if (s === "drawn")
      return { type: t.type, id: t.id, start: 0, end: 0 };
    s !== void 0 && (n = Math.min(n ?? s, s), r = Math.max(r ?? s + 1, s + 1));
  }
  return n === void 0 || r === void 0 ? { ...t, undisplayed: !0 } : { type: t.type, id: t.id, start: n, end: r };
}
function Lr(e) {
  const t = Vd(e);
  return Tn(e) ? t.map((n) => JM(e, n)) : t;
}
function Wd(e, t) {
  const n = [...t].sort((r, i) => r.start - i.start || r.end - i.end);
  Xt(e, rl, n.length > 0 ? { basis: uc(e), annotations: n } : void 0);
}
function ag(e) {
  const t = il(e).trim();
  if (t)
    return t;
  const n = ss(e), [r, i] = sl(n);
  return n.slice(r, i);
}
const vk = {
  holdableText: ag,
  renderedOffset: (e, t) => {
    const n = ag(e);
    if (t >= n.length)
      return;
    const r = ss(e), [i] = sl(r);
    return r.slice(i, i + n.length) === n ? i + t : "drawn";
  }
};
let Hd = vk;
function YM(e) {
  Hd = e ?? vk;
}
function fc(e) {
  return Hd.holdableText(e);
}
function XM(e, t, n, r, i) {
  let s = { type: t, id: n, start: r, end: i };
  const o = [];
  for (const a of Vd(e))
    xk(a, t, n) && a.start <= s.end && s.start <= a.end ? s = {
      ...s,
      start: Math.min(s.start, a.start),
      end: Math.max(s.end, a.end)
    } : o.push(a);
  Wd(e, [...o, s]);
}
function Ck(e, t, n) {
  const r = Vd(e), i = r.filter((s) => !xk(s, t, n));
  return i.length === r.length ? !1 : (Wd(e, i), !0);
}
function il(e) {
  if (e.getType() !== hi)
    return e.getTextContent();
  const t = e.getParent();
  return L(t) ? t.getCaller() : "";
}
function QM(e) {
  return "getRenderedText" in e && typeof e.getRenderedText == "function";
}
function ss(e) {
  if (!Tn(e) || !QM(e))
    return "";
  const t = e.getRenderedText();
  return typeof t == "string" ? t : "";
}
function cg(e) {
  return e === Bo || /\s/u.test(e);
}
function sl(e) {
  let t = 0;
  for (; t < e.length && cg(e[t]); )
    t++;
  if (t === e.length)
    return [0, 0];
  let n = e.length;
  for (; n > t && cg(e[n - 1]); )
    n--;
  return [t, n];
}
function Gu(e, t) {
  if (t.undisplayed)
    return fc(e).slice(t.start, t.end);
  if (t.start !== t.end)
    return GM(e).slice(t.start, t.end);
  const n = fc(e);
  if (n)
    return n;
  const r = ss(e), [i, s] = sl(r);
  return r.slice(i, s);
}
function ZM(e, t, n) {
  return Lr(e).filter((r) => r.type === t && (r.undisplayed || r.start === r.end || r.start <= n && n <= r.end)).map((r) => r.id);
}
function eE(e) {
  const t = pe(e, rl);
  !t || t.basis === uc(e) || Wd(e, Tk(t, uc(e)));
}
const dc = /* @__PURE__ */ new WeakMap();
function Gd(e, t) {
  return JSON.stringify([e, t]);
}
function tE(e, t, n) {
  const r = Pt();
  let i = dc.get(r);
  i || (i = /* @__PURE__ */ new Map(), dc.set(r, i));
  const s = Gd(e, t), o = i.get(s), a = Object.fromEntries(Object.entries(n).filter(([, c]) => c !== void 0));
  i.set(s, { ...o, ...a });
}
function pc(e, t, n) {
  return dc.get(e)?.get(Gd(t, n));
}
function Sk(e, t, n) {
  dc.get(e)?.delete(Gd(t, n));
}
function nE(e, t = []) {
  const r = [
    ot,
    Gn,
    qt,
    Jn,
    Kn,
    ...t
  ].filter((i) => e.hasNodes([i])).map((i) => e.registerNodeTransform(i, eE));
  return () => r.forEach((i) => i());
}
function rE(e) {
  return Ae(e) || ze(e) || je(e) || je(e.getParent()) || bk(e) || on(e);
}
function Jd(e) {
  return v(e) ? e.getTextContentSize() : 1;
}
function Yd(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function _k(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getLastChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function lg(e) {
  const t = e.getNode();
  if (!A(t))
    return { leaf: t, offset: v(t) ? e.offset : Math.min(e.offset, 1) };
  const n = t.getChildAtIndex(e.offset);
  if (n)
    return { leaf: Yd(n), offset: 0 };
  const r = t.getLastChild();
  if (!r)
    return { leaf: t, offset: 0 };
  const i = _k(r);
  return { leaf: i, offset: Jd(i) };
}
function Va(e, t) {
  return e.leaf.is(t.leaf) ? e.offset - t.offset : e.leaf.isBefore(t.leaf) ? -1 : 1;
}
function Mk(e, t, n) {
  const r = Jd(e);
  let i = r;
  t.leaf.is(e) ? i = t.offset : t.leaf.isBefore(e) && (i = 0);
  let s = 0;
  return n.leaf.is(e) ? s = n.offset : e.isBefore(n.leaf) && (s = r), [i, Math.max(i, s)];
}
function iE(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return Yd(n);
  }
}
function sE(e, t, n) {
  const r = Yd(e), i = _k(e);
  if (Va(t, { leaf: r, offset: 0 }) > 0 || Va(n, { leaf: i, offset: Jd(i) }) < 0)
    return !1;
  if (Cn(i)) {
    const s = iE(e);
    if (!s || Va(n, { leaf: s, offset: 0 }) <= 0)
      return !1;
  }
  return !0;
}
function oE(e, t, n, r) {
  if (!kk(e))
    return;
  const [i, s] = Mk(e, t, n);
  if (s <= i)
    return;
  if (!v(e)) {
    const l = r?.get(e.getKey());
    return l ? [l.start, l.end] : [0, fc(e).length];
  }
  const [o, a] = jd(e), c = [Math.max(i, o), Math.min(s, a)];
  return c[1] > c[0] ? c : void 0;
}
function Xd(e, t, n, r, i, s, o, a = {}) {
  if (e.isCollapsed())
    return;
  const c = e.getNodes(), l = e.isBackward(), [u, f] = l ? [e.focus, e.anchor] : [e.anchor, e.focus], d = lg(u), p = lg(f);
  if (Va(d, p) >= 0)
    return;
  let h = !1;
  const g = (b) => {
    const x = oE(b, d, p, a.decoratorHolds);
    x && (jt(za), XM(b, t, n, x[0], x[1]), h = !0);
  };
  let m, y;
  for (const b of c) {
    if (A(y) && y.isParentOf(b))
      continue;
    if (N(b) || Cn(b) || zd(b) || rE(b)) {
      g(b), m = b.getParent(), y = void 0;
      continue;
    }
    let x = null;
    if (v(b)) {
      const [S, _] = Mk(b, d, p), U = Math.max(S, no(b));
      if (U >= _)
        continue;
      jt(za), x = b.splitText(U, _)[U > 0 ? 1 : 0];
    } else {
      if (ae(b))
        continue;
      if (A(b) && b.isInline()) {
        if (!sE(b, d, p))
          continue;
        x = b;
      }
    }
    if (x !== null) {
      if (x && x.is(m))
        continue;
      jt(za);
      const S = x.getParent();
      (S == null || !S.is(m)) && (y = void 0), m = S, y === void 0 && (y = Ui(), y.addID(t, n, r, i, s, o), x.insertBefore(y)), y.append(x);
    } else
      g(b), m = void 0, y = void 0;
  }
  h && tE(t, n, { onClick: r, onRemove: i, onMouseEnter: s, onMouseLeave: o }), t === It && A(y) && (l ? y.selectStart() : y.selectEnd());
}
const Ek = "table:row", ug = "immutable-table-row", Ak = 1, Ju = "tr", aE = ["type", "marker", "content"];
class os extends dr {
  __marker;
  __unknownAttributes;
  constructor(t = Ju, n, r) {
    super(r), this.__marker = t, this.__unknownAttributes = n;
  }
  static getType() {
    return ug;
  }
  static clone(t) {
    return new os(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return cE().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ju).setUnknownAttributes(t.unknownAttributes);
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
      type: ug,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Ak
    };
  }
}
function cE(e, t) {
  return kt(new os(e, t));
}
function Pk(e) {
  return e instanceof os;
}
const Nk = "table:cell", fg = "immutable-table-cell", wk = 1, Yu = "tc1", lE = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function uE(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class as extends dr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Yu, n, r, i, s) {
    super(s), this.__marker = t, this.__align = n, this.__colspan = r, this.__unknownAttributes = i;
  }
  static getType() {
    return fg;
  }
  static clone(t) {
    const { __marker: n, __align: r, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new as(n, r, i, s, o);
  }
  static importJSON(t) {
    return fE().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Yu).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const r = uE(this.__align);
    return r && (n.style.textAlign = r), this.__colspan && n.setAttribute("colspan", this.__colspan), n;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), n = this.getColspan(), r = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: fg,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...n !== void 0 && { colspan: n },
      ...r !== void 0 && { unknownAttributes: r },
      version: wk
    };
  }
}
function fE(e, t, n, r) {
  return kt(new as(e, t, n, r));
}
function dE(e) {
  return e instanceof as;
}
const Xu = /* @__PURE__ */ new WeakMap();
function eu(e, t) {
  t ? Xu.set(e, t) : Xu.delete(e);
}
function Qd(e) {
  return Xu.get(e);
}
function ya(e, t) {
  const n = e.getChildAtIndex(t);
  return v(n) ? n : void 0;
}
function cr(e, t) {
  const n = ya(e, t);
  n ? n.select(0, 0) : e.select(t, t);
}
function Jo(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function pE(e) {
  return e.getChildren().some((t) => N(t) && t.getMarkerSyntax() === "closing");
}
function hE(e) {
  return Jo(e) ? void 0 : { closed: "false" };
}
function gE(e, t, n, r) {
  const i = t.getMarker(), s = el(t), o = pE(t), a = r ? Kt(i, "opening", s) : void 0;
  if (a) {
    e.append(a);
    const [c] = n;
    Hr(c) && !c.getTextContent().startsWith(q) && c.setTextContent(q + c.getTextContent());
  }
  e.append(...n), a && qb(a, e), o && e.append(Kt(i, "closing", s));
}
function Vi(e) {
  return nt(e, D) ?? void 0;
}
function mE(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Qu(e) {
  const t = Ok(e);
  return e.getChildren().every((n) => N(n) || t && pe(n, ke) === "attribute" || v(n) && n.getTextContent().replaceAll(q, "") === "");
}
function Ok(e) {
  return Jo(e);
}
function yE(e, t) {
  const n = e.getUnknownAttributes(), r = n ? er(n, eo(e.getMarker())) : "";
  r !== "" && t.insertAfter(Ue(r)), e.remove();
}
function bE(e, t) {
  if (Jo(e))
    return;
  const n = e.getUnknownAttributes();
  if (n) {
    const r = { ...n };
    delete r.closed, e.setUnknownAttributes(Object.keys(r).length > 0 ? r : void 0);
  }
  t && e.append(Kt(e.getMarker(), "closing", el(e)));
}
function kE(e, t) {
  return D(e) && !Jo(e) && !Jo(t);
}
function xE(e, t, n) {
  Qu(e) && e.getChildren().forEach((s) => {
    N(s) || s.remove();
  });
  const [r] = t;
  n && Hr(r) && !r.getTextContent().startsWith(q) && r.setTextContent(q + r.getTextContent()), e.append(...t);
  const i = e.getFirstChild();
  n && N(i) && i.getMarkerSyntax() === "opening" && qb(i, e);
}
function TE(e, t, n) {
  const { renderGlyphs: r, closeImplicitSpans: i = !1 } = n, s = Ok(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), f = N(l) && l.getMarkerSyntax() === "closing", d = s && pe(l, ke) === "attribute";
    !f && !d && o.push(l), l = u;
  }
  const a = kE(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      xE(e, o, r);
    else {
      const l = Br(t.getMarker(), hE(t));
      gE(l, t, o, r), e.insertAfter(l), Qu(l) ? l.remove() : c = l;
    }
  i && !a && bE(t, r), Qu(t) && yE(t, c);
}
function js(e, t) {
  let n = e.getParent();
  for (; D(n); )
    TE(e, n, t), n = e.getParent();
}
function ol(e) {
  if (v(e) && !N(e)) {
    const t = no(e);
    e.select(t, t);
    return;
  }
  if (A(e)) {
    const t = e.getChildren().filter((r) => !N(r)), n = t.find((r, i) => i === t.length - 1 || !v(r) || r.getTextContent() !== q);
    if (n) {
      ol(n);
      return;
    }
    e.selectEnd();
  }
}
function vE(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Zu(e) {
  return !!(e.opener || e.value || e.closer);
}
function dg(e) {
  return /^\s/.test(e);
}
function Zd(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !dg(t) || !dg(e))
    return !0;
  const n = t.trim();
  return n === "" || e.trim() !== n;
}
function al(e, t, n) {
  return n.wantsRun ? Zd(t.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : vE(t);
}
function CE(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const n = e.expectedPieces(t);
  if (!n.wantsRun)
    return !1;
  const r = e.scanPieces(t);
  return Zd(r.value?.getTextContent(), n.valueText) || e.byteFormat.glyphs !== "none" && (!r.opener || e.byteFormat.closerSyntax !== "none" && !r.closer) ? !1 : r.wrapper === void 0;
}
function $k(e, t) {
  return !Zu(e.scanPieces(t));
}
function ba(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const n = e.expectedPieces(t), r = e.scanPieces(t);
  if (!al(e, r, n))
    return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = r;
  return o && (s.is(o) || zs(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, r);
}
function SE(e, t, n, r) {
  return !n.wantsRun || Zu(r) || Qd(Pt()) === "remote" ? !1 : Pt().getEditorState().read(() => {
    const i = Q(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Zu(e.scanPieces(i));
  });
}
function _E(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function pg(e) {
  const t = Ue(e);
  return Xt(t, ke, "attribute"), t;
}
function ME(e, t, n) {
  if (n.wrapper)
    return n.wrapper;
  const { runKind: r, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!r || !s)
    return;
  const o = lb(r);
  return s.insertAfter(o), n.opener && o.append(n.opener), n.value && o.append(n.value), n.closer && o.append(n.closer), o;
}
function EE(e, t, n, r) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const d = c?.(t);
    if (!d || r.valueText === void 0)
      return;
    v(n.value) ? n.value.setTextContent(r.valueText) : d.insertBefore(pg(r.valueText));
    return;
  }
  const l = ME(e, t, n);
  if (!l || s === "none" || !o || !a)
    return;
  const u = n.opener ?? (() => {
    const d = Kt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(d) : l.append(d), d;
  })();
  let f = n.value;
  r.valueText === void 0 ? (f?.remove(), f = void 0) : v(f) ? Zd(f.getTextContent(), r.valueText) && f.setTextContent(r.valueText) : (f = pg(r.valueText), u.insertAfter(f)), a !== "none" && !n.closer && (f ?? u).insertAfter(Kt(a === "selfClosing" ? "" : o(t), a));
}
function Yo(e, t) {
  const { writer: n } = e.byteFormat;
  if (n === "kind-owned" || n === "read-only" || !t.isAttached())
    return;
  const r = e.expectedPieces(t), i = e.scanPieces(t);
  if (al(e, i, r) && !$b(t)) {
    if (SE(e, t, r, i)) {
      Rb(t);
      return;
    }
    if (!ba(e, t)) {
      if (!r.wantsRun) {
        _E(i);
        return;
      }
      EE(e, t, i, r);
    }
  }
}
function AE(e, t, n) {
  Yo(e, t), t.isAttached() && ba(e, t) && n.add(t.getKey());
}
function ka(e) {
  if (!v(e))
    return !1;
  if (N(e) || Ae(e) || on(e))
    return !0;
  const t = pe(e, ke);
  return t === "attribute" || t === Ar;
}
function ep(e, t) {
  return N(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && pr(e) && D(e.getParent())) : !1;
}
function PE() {
  const e = w();
  return E(e) ? ep(e.focus.getNode(), e.focus.offset) : !1;
}
function Rk(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && ka(t) ? t : void 0;
}
function NE(e) {
  const t = Rk(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function wE(e) {
  const t = Rk(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function hg(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function gg(e, t) {
  e.set(t.key, t.offset, t.type);
}
function OE(e, t) {
  let n = wE(e);
  for (; n; ) {
    const r = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (!v(r))
      return;
    if (!ka(r))
      return { node: r, offset: t === "next" ? 0 : r.getTextContentSize() };
    n = r;
  }
}
function mg(e, t) {
  const n = OE(e, t);
  return n ? (e.set(n.node.getKey(), n.offset, "text"), !0) : !1;
}
function tp(e) {
  if (e.isCollapsed()) {
    const a = NE(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = [hg(n), hg(r)], s = mg(n, "next"), o = mg(r, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (gg(n, i[0]), gg(r, i[1]), !1) : !0;
}
const Ik = Zs("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), hc = "verse-block", Lk = 1, $E = "verse-block";
class io extends dr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", n) {
    super(n), this.__number = t;
  }
  static getType() {
    return hc;
  }
  static clone(t) {
    return new io(t.__number, t.__key);
  }
  static importJSON(t) {
    return RE().updateFromJSON(t);
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
    return lk(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add($E), yg(t, this.__number), t;
  }
  updateDOM(t, n) {
    return t.__number !== this.__number && yg(n, this.__number), !1;
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
      type: hc,
      number: this.getNumber(),
      version: Lk
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function yg(e, t) {
  const { start: n, end: r } = lk(t), i = !isNaN(n) && !isNaN(r) && n <= r;
  e.setAttribute("data-verse-number", t), bg(e, "data-verse-start", i ? n : NaN), bg(e, "data-verse-end", i ? r : NaN);
}
function bg(e, t, n) {
  isNaN(n) ? e.removeAttribute(t) : e.setAttribute(t, n.toString());
}
function RE(e) {
  return kt(new io(e));
}
function Wi(e) {
  return e instanceof io;
}
function IE(e) {
  return e?.type === hc;
}
const LE = [
  wn,
  Kn,
  vn,
  qt,
  We,
  Ze,
  ar,
  Gn,
  ns,
  Jn,
  hr,
  Bt,
  ai,
  rs,
  os,
  as,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Pr,
  {
    replace: nd,
    with: () => Hn(),
    withKlass: ai
  }
], gc = {
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
}, qE = {
  paragraph: T.Paragraph,
  character: T.Character,
  note: T.Note,
  milestone: T.Milestone
};
function DE(e) {
  if (!e)
    return Cr;
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    if (t.has(n))
      return t.get(n);
    const r = Object.hasOwn(e.markers, n) ? e.markers[n] : void 0, i = r ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: Cr(n)?.category ?? C.Uncategorized,
      type: qE[r.styleType] ?? T.Unknown,
      description: r.description ?? "",
      hasEndMarker: !!r.endMarker,
      children: Cr(n)?.children
    } : void 0;
    return t.set(n, i), i;
  };
}
function kg(e, t, n) {
  const r = {
    type: sr,
    version: ir,
    content: e
  }, i = t.serializeEditorState(r, n);
  return Zc(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const qk = "v", Dk = 1, KE = "verse-selected";
class Qt extends la {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", n = !1, r, i, s, o, a) {
    super(a), this.__marker = qk, this.__number = t, this.__showMarker = n, this.__sid = r, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return Gy;
  }
  static clone(t) {
    const { __number: n, __showMarker: r, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Qt(n, r, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => FE(t) ? {
        conversion: BE,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return np().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ou, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: n } = super.exportDOM(t);
    return n && Qi(n) && (n.setAttribute("data-marker", this.getMarker()), n.classList.add(Ou, `usfm_${this.getMarker()}`), n.setAttribute("data-number", this.getNumber())), { element: n };
  }
  decorate() {
    return P(UE, { nodeKey: this.getKey(), text: this.getRenderedText() });
  }
  /** The text this verse shows on screen: its whole `\v N` glyph, or only its number. */
  getRenderedText() {
    return this.getShowMarker() ? Wn(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Bo + this.getNumber() + Bo
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
      version: Dk
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (n) {
      if (ak(n))
        return !1;
      throw n;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function UE({ nodeKey: e, text: t }) {
  const [n] = zS(e);
  return P("span", { className: n ? KE : void 0, children: t });
}
function BE(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: np(t) };
}
function np(e, t, n, r, i, s) {
  return kt(new Qt(e, t, n, r, i, s));
}
function FE(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === qk;
}
function gr(e) {
  return e instanceof Qt;
}
function zE(e) {
  return e?.type === Qt.getType();
}
function Oe(e) {
  return Ae(e) || gr(e);
}
function Kk(e) {
  return xd(e) || zE(e);
}
function jE(e) {
  return VE(e).find((t) => ye(t));
}
function VE(e) {
  return e.some(Wi) ? e.flatMap((t) => Wi(t) ? t.getChildren() : t) : e;
}
function cl(e) {
  return A(e) ? Wi(e) ? e.getChildren().flatMap(cl) : e.getChildren() : [];
}
function WE(e, t) {
  return cl(e).find((i) => Oe(i) && Ud(t, i.getNumber()));
}
function HE(e, t) {
  return t === 0 ? jE(e) : e.map((n) => WE(n, t)).filter((n) => n)[0];
}
function mc(e) {
  return cl(e).find((n) => Oe(n));
}
function Uk(e, t) {
  if (!A(e) || t <= 0)
    return;
  const n = e.getChildren();
  for (let r = t - 1; r >= 0; r--) {
    const i = n[r];
    if (Oe(i))
      return i;
  }
}
function GE(e) {
  const t = e.getParent();
  if (t && A(t)) {
    const r = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < r.length; i++) {
      const s = r[i];
      if (Oe(s))
        return s;
    }
  }
  let n = t?.getNextSibling();
  for (; n && !at(n); ) {
    const r = mc(n);
    if (r)
      return r;
    n = n.getNextSibling();
  }
}
function yc(e) {
  return cl(e).findLast((t) => Oe(t));
}
function JE(e) {
  if (!Ae(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const n = e.getTextContent().indexOf(t);
  return n < 0 ? 0 : n + t.length;
}
function YE(e, t, n) {
  if (!n)
    return !1;
  const r = t.getParent();
  if (n === r && A(n)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return n.getNextSibling() === t;
}
function XE(e, t) {
  const n = t.anchor.getNode();
  if (n !== e)
    return YE(t, e, n);
  if (v(e)) {
    const r = JE(e);
    return t.anchor.offset < r;
  }
  return !0;
}
function tu(e) {
  const t = e.getNumber(), n = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: n,
    verse: t != null && n.toString() !== t ? t : void 0
  };
}
function QE(e) {
  const t = Vu(e);
  if (!(!t || at(t)))
    return Oe(t) ? t : yc(t) ?? sp(t);
}
function ZE(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!E(t))
    return tu(e);
  const n = Number.parseInt(e.getNumber() ?? "0", 10), r = n <= 1 ? 0 : n - 1;
  if (XE(e, t)) {
    const i = QE(e);
    return i ? tu(i) : { verseNum: r };
  }
  return tu(e);
}
function eA(e) {
  return SM(e) || gr(e);
}
function rp(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function Bk(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function ef(e, t) {
  return e.getEditorState().read(() => !Q(t));
}
function tA(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = ip(t, e);
  let r;
  if (n) {
    const i = n.getParent();
    if (i && A(i) && A(t) && t === i && e.anchor.offset < n.getIndexWithinParent() && (r = n), !r && i && A(i)) {
      const s = i.getChildren(), o = n.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (Oe(c)) {
          r = c;
          break;
        }
      }
    }
    if (!r && i) {
      let s = xg(i);
      for (; s && !at(s); ) {
        const o = mc(s);
        if (o) {
          r = o;
          break;
        }
        s = xg(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = mc(s);
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
function nA(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), n = ip(t, e);
  let r;
  if (n) {
    const i = n.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (r = n), !r && i && A(i) && (r = Uk(i, n.getIndexWithinParent())), !r && i) {
      let o = Tg(i);
      for (; o && !at(o); ) {
        const a = yc(o);
        if (a) {
          r = a;
          break;
        }
        o = Tg(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !at(s); ) {
      const o = yc(s);
      if (o) {
        r = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return r ? (r.selectNext(0, 0), !0) : !1;
}
function xg(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getNextSibling() : null;
}
function Tg(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const n = e.getTopLevelElement();
  return n && n !== e ? n.getPreviousSibling() : null;
}
function ip(e, t) {
  if (A(e) && E(t) && t.anchor.key === e.getKey()) {
    const r = e.getChildAtIndex(t.anchor.offset);
    if (r && Oe(r))
      return r;
    const i = Uk(e, t.anchor.offset);
    if (i)
      return i;
    const s = mc(e);
    if (s)
      return s;
  }
  return sp(e);
}
function sp(e) {
  if (!e || at(e))
    return;
  if (Oe(e))
    return e;
  let t = Vu(e);
  for (; t; ) {
    if (at(t))
      return;
    if (Oe(t))
      return t;
    const n = yc(t);
    if (n)
      return n;
    t = Vu(t);
  }
}
const rA = ["style"], iA = ["style", "code"], bc = ["style", "cid"], sA = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], oA = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], aA = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], cA = ["style", "caller", "category", "contents"], lA = ["tag", "marker", "contents"], uA = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Xo = `
`;
function fA(e, t) {
  const n = Q(e);
  if (!Rn(n))
    return;
  const r = op(n, "apply");
  if (r === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: r }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function op(e, t = "delta-doc") {
  if (!e)
    return;
  const n = Jc();
  let r = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of n) {
    const l = c.node;
    for (let f = i.length - 1; f >= 0; f--)
      if (Vs(i[f], c)) {
        const d = i[f];
        if (i.splice(f, 1), r += 1, a && d.getKey() === a.getKey())
          return r - 1;
      }
    for (let f = s.length - 1; f >= 0; f--)
      Vs(s[f].node, c) && s.splice(f, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Vr(l) || Rn(l))
        return r;
      bt(l) && (a = l);
    }
    if (bt(l) && (i.includes(l) || i.push(l)), Fk(l, t)) {
      if (l.getKey() === o)
        return r;
      s.push({ node: l, position: r }), r += 1;
      continue;
    }
    r += cp(l, t);
  }
  if (a)
    return r;
}
function vg(e, t, n = "delta-doc") {
  if (e.length < 2 || !hA(e[0]) || !pA(e[1]))
    return;
  const r = e[0].retain;
  return t.read(() => dA(r, n)?.getKey());
}
function dA(e, t = "delta-doc") {
  const n = Jc();
  let r = 0;
  const i = [], s = [];
  for (const o of n) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Vs(i[u], o)) {
        const f = i[u];
        if (i.splice(u, 1), r === e)
          return f;
        r += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Vs(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (bt(a) && (i.includes(a) || i.push(a)), Fk(a, t)) {
      if (r === e)
        return a;
      s.push({ node: a, position: r }), r += 1;
      continue;
    }
    const l = cp(a, t);
    if (Vr(a) && l > 0 && e >= r && e < r + l || Rn(a) && r === e)
      return a;
    r += l;
  }
  for (const o of i) {
    if (r === e)
      return o;
    r += 1;
  }
}
function Vs(e, t) {
  return e ? t ? !zs(t.node, e.getKey()) : !0 : !1;
}
function Vr(e) {
  return v(e) && !Rn(e);
}
function Rn(e) {
  return at(e) || Oe(e) || ze(e) || L(e) || rt(e) || on(e);
}
function ei(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function pA(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && uA.includes(t);
}
function hA(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Fk(e, t) {
  return L(e) || rt(e) ? !0 : t === "apply" && A(e) && Rn(e);
}
function zk(e) {
  const t = e.getParent();
  return xn(e) && ye(t) && t.getFirstChild() === e;
}
function tf(e) {
  const t = e.getParent();
  return t !== null && nt(t, je) !== null;
}
function gA(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === At && t.getChildrenSize() === 1;
}
function ap(e) {
  const t = Dn(e);
  if (!(!L(t) || !wt(t)?.is(e)))
    return kd(e.getTextContent(), t.getCaller());
}
function mA(e) {
  return !Vb(e) && // A caller's typed bytes are respelled as the content they settle into, never sent raw.
  ap(e) === void 0 && cp(e, "delta-doc") === e.getTextContentSize();
}
function cp(e, t) {
  if (Rn(e))
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
    (ma(e) || zk(e) || pe(e, ke) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    pe(e, ke) === "attribute" || tf(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, and the empty-char placeholder. The
    // editable-mode note caller counts only its content bytes, below.
    n.startsWith(dd) || gA(e)))
      return 0;
    const r = t === "delta-doc" ? ap(e) : void 0;
    return r !== void 0 ? r.length : e.getTextContentSize();
  }
  return 0;
}
function nf(e, t) {
  const n = { insert: e.__text }, r = pe(e, oi);
  if (r && (n.attributes = { segment: r }), t && t.length > 0) {
    const i = jk(t);
    i && (n.attributes = {
      ...n.attributes,
      char: i
    });
  }
  return n;
}
function Cg(e) {
  const t = new Ps();
  return e.isEmpty() || e.read(() => {
    const n = _e();
    if (!n || n.isEmpty())
      return;
    const r = n.getChildren();
    if (r.length === 1 && Mt(r[0]) && (!r[0].getChildren() || r[0].getChildrenSize() === 0))
      return;
    const i = yA();
    for (const s of i)
      t.push(s);
  }), t;
}
function ll(e, t) {
  const n = [], r = ts(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < r.length; c++) {
    const l = r[c].node;
    n.push(...Sg(l, c, r, i, s, o, a));
  }
  for (const c of i)
    n.push(...Sg(c, r.length, r, i, s, o, a));
  return n;
}
function yA() {
  return ll();
}
function Sg(e, t, n, r, i, s, o) {
  if (!e)
    return [];
  const a = [], c = n[t + 1];
  return bA(e, a, r), kA(e, a, i, s, o), xA(e, t, n, i, o, s, a), at(e) && a.push(SA(e)), Oe(e) && a.push(MA(e)), ze(e) && a.push(EA(e)), on(e) && a.push(AA(e)), vA(e, a, s), TA(e, a, s), OA(c, s), a;
}
function bA(e, t, n) {
  if (!e.isInline()) {
    const r = n.pop();
    Ie(r) ? t.push(CA(r)) : ye(r) ? t.push(_A(r)) : Mt(r) && t.push({ insert: Xo });
  }
  bt(e) && (n.includes(e) || n.push(e));
}
function kA(e, t, n, r, i) {
  if (!v(e) || Ae(e) || on(e))
    return;
  const s = e.getParent();
  if (L(s) && s.getFirstChild() === e)
    return;
  const o = On(e) !== void 0;
  if (N(e) && (o || zk(e) || tf(e) || Vb(e)) || pe(e, ke) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (is(a))
    return;
  const c = ap(e);
  if (c !== void 0) {
    if (!c)
      return;
    a = c;
  }
  const l = e.getPreviousSibling(), u = D(s) ? s : void 0;
  o && u && l === u.getFirstChild() && (a = a.slice(Md(e)));
  const f = a.startsWith(dd) || pe(e, ke) === "attribute" || tf(e), d = !!u && a === At && u.getChildrenSize() === 1, p = ul(e, r), h = p ? n.filter((y) => p.children.includes(y)) : n, g = nf(e, h);
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
function xA(e, t, n, r, i, s, o) {
  D(e) && !r.includes(e) && r.push(e);
  const a = n[t + 1];
  for (const c of r.toReversed())
    if (Vs(c, a)) {
      if (r.pop(), !i.has(c)) {
        const l = NA(c), u = ul(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function TA(e, t, n) {
  if (!L(e))
    return;
  const r = PA(e), i = ul(e, n), s = {
    node: e,
    children: ts(e).map((o) => o.node),
    contentsOps: r.insert.note?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function vA(e, t, n) {
  if (!rt(e))
    return;
  const r = wA(e), i = ul(e, n), s = {
    node: e,
    children: ts(e).map((o) => o.node),
    contentsOps: r.insert.unknown?.contents?.ops
  };
  n.push(s), i?.contentsOps ? i.contentsOps.push(r) : t.push(r);
}
function mi(e, t) {
  const n = t.getUnknownAttributes();
  n && Object.assign(e, n);
}
function CA(e) {
  const t = { style: Go, code: e.__code };
  return mi(t, e), { insert: Xo, attributes: { book: t } };
}
function SA(e) {
  const t = { style: cc, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), mi(t, e), { insert: { chapter: t } };
}
function _A(e) {
  const t = { style: e.__marker };
  return mi(t, e), { insert: Xo, attributes: { para: t } };
}
function MA(e) {
  const t = { style: ac, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), mi(t, e), { insert: { verse: t } };
}
function EA(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), mi(t, e), { insert: { milestone: t } };
}
function AA(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function PA(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), mi(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const n = { insert: { note: t } }, r = pe(e, oi);
  return r && (n.attributes = { segment: r }), n;
}
function NA(e) {
  const t = { insert: "" }, n = jk([e]);
  return n && (t.attributes = { char: n }), t;
}
function wA(e) {
  const t = { tag: e.getTag() }, n = e.getMarker();
  return n && (t.marker = n), mi(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function ul(e, t) {
  for (let n = t.length - 1; n >= 0; n--) {
    const r = t[n];
    if (r.children.includes(e))
      return r;
  }
}
function OA(e, t) {
  for (let n = t.length - 1; n >= 0; n--)
    Vs(t[n].node, e) && t.splice(n, 1);
}
function jk(e) {
  if (e.length === 0)
    return;
  const t = e.map($A);
  return t.length === 1 ? t[0] : t;
}
function $A(e) {
  const t = { style: e.__marker }, n = pe(e, Fi);
  return n && (t.cid = n), mi(t, e), t;
}
function lp(e) {
  let t = 0;
  for (const { node: n } of Jc())
    if (L(n)) {
      if (n.getKey() === e)
        return t;
      t += 1;
    }
}
function RA(e) {
  let t = 0;
  for (const { node: n } of Jc())
    if (L(n)) {
      if (t === e)
        return n;
      t += 1;
    }
}
const Vk = 1;
class Pn extends la {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Fo, n = "", r, i) {
    super(i), this.__caller = t, this.__previewText = n, this.__onClick = r ?? (() => {
    });
  }
  static getType() {
    return hi;
  }
  static clone(t) {
    const { __caller: n, __previewText: r, __onClick: i, __key: s } = t;
    return new Pn(n, r, i, s);
  }
  static importDOM() {
    return {
      span: (t) => LA(t) ? {
        conversion: IA,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return up().updateFromJSON(t);
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
    return n && Qi(n) && (n.classList.add(this.getType()), n.setAttribute("data-caller", this.getCaller()), n.setAttribute("data-preview-text", this.getPreviewText())), { element: n };
  }
  decorate(t) {
    const n = this.getParent();
    if (!n)
      return null;
    const r = n.getKey(), i = n.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, r, i, () => qA(t, r), (l) => DA(t, r, s, l), () => KA(t, r), () => UA(t, r)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return P("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.getRenderedText() });
  }
  /** The text this caller shows on screen; empty when CSS generates the caller instead. */
  getRenderedText() {
    const t = this.getLatest(), n = t.getParent(), r = L(n) && n.getIsCollapsed();
    return t.__caller === Fo && r ? "" : t.__caller === Hy && r ? "*" : t.__caller;
  }
  exportJSON() {
    return {
      type: this.getType(),
      caller: this.getCaller(),
      previewText: this.getPreviewText(),
      onClick: this.getOnClick(),
      version: Vk
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function IA(e) {
  const t = e.getAttribute("data-caller") ?? "", n = e.getAttribute("data-preview-text") ?? "";
  return { node: up(t, n) };
}
function up(e, t, n) {
  return kt(new Pn(e, t, n));
}
function LA(e) {
  return e ? e.classList.contains(Pn.getType()) : !1;
}
function Ot(e) {
  return e instanceof Pn;
}
function qA(e, t) {
  return e.getEditorState().read(() => {
    const n = Q(t);
    if (!L(n))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return n.getCaller();
  });
}
function DA(e, t, n, r) {
  e.update(() => {
    const i = Q(t);
    if (!L(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(r);
    const s = Q(n);
    if (!Ot(s))
      throw new Error(`setNoteCaller: Caller node not found: ${n}`);
    s.setCaller(r);
  });
}
function KA(e, t) {
  return e.getEditorState().read(() => {
    const n = Q(t);
    if (!L(n))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return ll(n);
  });
}
function UA(e, t) {
  return e.getEditorState().read(() => lp(t));
}
const BA = [
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
], FA = ["†"], fp = "formatted", Wk = "unformatted", Hk = "paragraph-structure", dp = "standard", Gk = "block-verse", zA = {
  [fp]: "Formatted",
  [Wk]: "Unformatted",
  [Hk]: "Paragraph Structure",
  [dp]: "Standard",
  [Gk]: "Block Verse"
};
function cs(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let pp, hp;
function jA(e) {
  const t = gp(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  pp = e, hp = t;
}
jA(fp);
const GD = () => pp, fl = () => hp;
function gp(e) {
  let t;
  switch (e ?? pp) {
    case fp:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Wk:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Hk:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case dp:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Gk:
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
function JD(e) {
  if (!e)
    return;
  const t = _g(e);
  return Object.keys(zA).find((n) => Zn(_g(gp(n)), t));
}
const VA = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function _g(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, n]) => n !== void 0));
  return { ...VA, ...t };
}
function dt(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: n, isFormattedFont: r, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && n && r && !i && !s;
}
function WA(e) {
  if (e)
    return Qo(e) ? Qt : e.markerMode === "editable" ? qt : Qt;
}
function Qo(e) {
  return e?.verseLayout === "block";
}
function HA(e) {
  const t = [], n = e ?? hp;
  return n && (t.push(`${m_}${n.markerMode}`), n.hasSpacing && t.push(h_), n.isFormattedFont && t.push(g_)), t;
}
const GA = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function kc(e) {
  return GA.exec(e)?.[1] ?? e;
}
function wo(e, t) {
  const n = e.jsonPath.slice(kc(e.jsonPath).length);
  return { ...e, jsonPath: `${Lt(t)}${n}` };
}
function Jk(e) {
  const t = [];
  let n = 0;
  for (const c of _e().getChildren())
    if (!$n(c))
      if (Wi(c)) {
        const l = n;
        c.getChildren().filter((u) => !$n(u)).forEach((u, f) => t.push({ node: u, blockPrefix: [l, f], blockBase: 0 })), n += 1;
      } else Mt(c) ? (t.push({ node: c, blockPrefix: [], blockBase: n }), n += Ft(c, e).length) : (t.push({ node: c, blockPrefix: [n], blockBase: 0 }), n += 1);
  const r = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = A(c.node) ? Ft(c.node, e).length : 0, u = pe(c.node, Ik), f = Mt(c.node), d = u === void 0 || u !== a;
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
function Yk(e, t) {
  return e.length >= t.length && t.every((n, r) => e[r] === n);
}
function Xk(e, t, n, r = !0) {
  const i = e.jsonPath.slice(kc(e.jsonPath).length);
  let s = qn(kc(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!Yk(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return r && i === "" && A(o.node) && (!o.isSourceStart || Mt(o.node)) ? Xk(n(o.node), t, n, !1) : wo(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return wo(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function JA(e, t, n) {
  for (const r of t) {
    if (r.usjPrefix.length === 0) {
      if (e < r.usjBase || e >= r.usjBase + r.count)
        continue;
      const o = e - r.usjBase + r.blockBase;
      return r.blockPrefix.length === 0 ? { jsonPath: "$", offset: o } : { jsonPath: Lt(r.blockPrefix), offset: o };
    }
    if (!r.isSourceStart || r.usjPrefix[0] !== e)
      continue;
    const [i, s] = r.blockPrefix;
    return s === void 0 ? { jsonPath: "$", offset: i } : { jsonPath: Lt([i]), offset: s };
  }
  return { jsonPath: "$", offset: Ft(_e(), n).length };
}
function Mg(e, t, n) {
  const r = qn(kc(e.jsonPath));
  if (r.length === 0)
    return qr(e) ? JA(e.offset, t, n) : e;
  for (const i of t) {
    if (!Yk(r, i.usjPrefix))
      continue;
    const s = r.slice(i.usjPrefix.length);
    if (s.length === 0) {
      if (i.usjPrefix.length === 0)
        continue;
      if (qr(e)) {
        const o = e.offset - i.usjBase;
        if (o < 0 || !i.isSourceEnd && o >= i.count)
          continue;
        return {
          ...wo(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return wo(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return wo(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function Zo(e, t, n) {
  let { start: r } = e, i = e.end ?? r;
  if (dx()) {
    const g = dt(t), m = Jk(g), y = Mg(r, m, g), b = i === r ? y : Mg(i, m, g);
    if (!y || !b)
      return;
    r = y, i = b;
  }
  const s = !!n?.forAnnotation, o = Pg(r, t, s), a = i === r ? o : Pg(i, t, s), [c, l] = o.point, [u, f] = a.point;
  if (!c || !u || l === void 0 || f === void 0)
    return;
  let d = Ng(c, l), p = Ng(u, f);
  if (qi(i) && i.closingMarkerOffset === 0 && !Zn(i, r) && (p = pP(p[0], p[1], dt(t))), n?.forAnnotation && i !== r) {
    const g = { edge: d, inside: o.insideDecorator }, m = { edge: p, inside: a.insideDecorator };
    [d, p] = YA(g, m), n.decoratorHolds && XA(g, m, n.decoratorHolds);
  }
  const h = Ur();
  return h.anchor = tn(d[0].getKey(), d[1], cf(d[0])), h.focus = tn(p[0].getKey(), p[1], cf(p[0])), h;
}
function YA(e, t) {
  const { inside: n } = e, { inside: r } = t;
  if (!n && !r)
    return [e.edge, t.edge];
  const { sameDecorator: i, reversed: s } = Qk(e, t), [o, a] = s ? [t, e] : [e, t], c = o.inside ? rf(o.inside, o.inside.before >= o.inside.total, o.edge) : o.edge;
  if (i && n?.before === r?.before)
    return [c, c];
  const l = a.inside ? rf(a.inside, a.inside.before > 0, a.edge) : a.edge;
  return s ? [l, c] : [c, l];
}
function XA(e, t, n) {
  const { inside: r } = e, { inside: i } = t;
  if (!r && !i)
    return;
  const { sameDecorator: s, reversed: o } = Qk(e, t), [a, c] = o ? [i, r] : [r, i], l = (u, f, d) => {
    d > f && n.set(u.decorator.getKey(), { start: f, end: d });
  };
  a && l(a, a.before, s && c ? c.before : a.total), c && !s && l(c, 0, c.before);
}
function Qk(e, t) {
  const { inside: n } = e, { inside: r } = t;
  return n && r && n.decorator.is(r.decorator) ? { sameDecorator: !0, reversed: r.before < n.before } : { sameDecorator: !1, reversed: QA(t, e) };
}
function rf(e, t, n) {
  const [r, i] = Ir(e.decorator, t);
  return r && i !== void 0 ? [r, i] : n;
}
function QA(e, t) {
  const n = ({ edge: s, inside: o }) => {
    const [a, c] = o ? rf(o, !1, s) : s;
    return tn(a.getKey(), c, cf(a));
  }, r = n(e), i = n(t);
  return r.isBefore(i) ? !0 : i.isBefore(r) ? !1 : !e.inside && !!t.inside;
}
function dl(e) {
  const t = w();
  if (!t || !E(t))
    return;
  const n = dx() ? Jk(dt(e)) : void 0, r = (u, f) => {
    const d = Dt(u, f, e);
    return n ? Xk(d, n, (p) => Dt(p, 0, e)) : d;
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
}, ZA = new Map(Object.values(ni).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), Eg = {
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
}, eP = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(Eg).filter((e) => Eg[e])
), tP = /([^\s="|]+)="([^"]*)"/g, nP = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Zk(e, t) {
  return `${e}['${t}']`;
}
function Ii(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function Oo(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function mp(e) {
  const t = Sr(e);
  if (!t)
    return;
  const n = zr(t.kind).scanPieces(t.owner);
  if (n.opener?.is(e))
    return { ...t, role: "opener" };
  if (n.value?.is(e))
    return { ...t, role: "value" };
  if (n.closer?.is(e))
    return { ...t, role: "closer" };
}
function pl(e, t, n, r = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(tP)) {
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
function rP(e, t) {
  const n = nP.exec(e);
  if (!n)
    return [];
  const r = n[1], i = n[0].length - r.length - 2, s = ZA.get(r) ?? r, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: n[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${r}*`);
  return a > n[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function yp(e) {
  if (kn(e)) {
    const t = fx(e), n = e.getTextContent();
    if (ze(t) && (n === "\\*" || n.startsWith(Je(t.getMarker()))))
      return t;
  }
  return Dn(e) ?? e;
}
function iP(e) {
  const t = e.getTextContentSize(), n = mp(e);
  if (n && n.role !== "value") {
    const i = ni[n.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: n.owner,
        length: t,
        spans: n.role === "closer" ? Oo(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (n.kind === "milestone")
      return {
        owner: n.owner,
        length: t,
        spans: n.role === "closer" ? Oo() : Ii(1)
      };
  }
  const r = e.getMarkerSyntax();
  return {
    owner: yp(e),
    length: t,
    spans: r === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Ii(e.getNested() ? 2 : 1)
    ) : Oo()
  };
}
function sP(e) {
  const t = e.getTextContent(), n = t.length, r = mp(e);
  if (r?.kind === "optbreak")
    return {
      owner: r.owner,
      length: n,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = yp(e);
  if (Ie(i)) {
    const s = Je(i.getMarker()).length;
    if (t.startsWith(Je(i.getMarker())))
      return {
        owner: i,
        length: n,
        spans: [
          ...Ii(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (rt(i)) {
    const s = tl(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: n, spans: Oo() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: n, spans: Ii(1) };
  }
  return {
    owner: i,
    length: n,
    spans: t.endsWith("*") ? Oo() : Ii(t.startsWith("\\+") ? 2 : 1)
  };
}
function oP(e) {
  const t = mp(e);
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
        ...pl(i, 1, D(n) ? eo(n.getMarker()) : void 0)
      ]
    };
  if (r === "milestone" && ze(n))
    return { owner: n, length: s, spans: ex(n.getMarker(), i) };
}
function ex(e, t) {
  return [
    { start: 0, base: e.length, bytes: { kind: "property", property: "marker" } },
    ...pl(t, 2, pa(e))
  ];
}
function aP(e) {
  const t = e.getTextContent(), n = t.length, r = e.getParent();
  if (!rt(r)) {
    const s = fx(e);
    return ze(s) ? { owner: s, length: n, spans: ex(s.getMarker(), t) } : void 0;
  }
  const i = rP(t, (r.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: r, length: n, spans: i };
  if (t.startsWith("|"))
    return {
      owner: r,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...pl(t, 1, void 0, (s) => j0(r.getTag(), s))
      ]
    };
}
function Ag(e, t) {
  const n = Je(e);
  if (t.startsWith(n))
    return [
      ...Ii(1),
      { start: n.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function rn(e) {
  if (N(e))
    return iP(e);
  if (kn(e))
    return sP(e);
  if (Ut(e) && e.getTextType() === "attribute")
    return aP(e);
  if (e.getType() === hi) {
    const r = e.getParent();
    return L(r) ? {
      owner: r,
      length: r.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Ae(e)) {
    const r = Ag(e.getMarker(), e.getTextContent());
    return r ? { owner: e, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (!v(e))
    return;
  if (on(e))
    return { owner: e, length: e.getTextContentSize(), spans: Ii(1) };
  if (pe(e, ke) === "attribute")
    return oP(e);
  const t = e.getParent();
  if (we(t) && gi(t)?.is(e)) {
    const r = Ag(t.getMarker(), e.getTextContent());
    return r ? { owner: t, length: e.getTextContentSize(), spans: r } : void 0;
  }
  const n = Dn(e);
  if (L(n) && wt(n)?.is(e))
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
  return kn(e) || Ut(e) && e.getTextType() === "attribute" || e.getType() === hi;
}
function hl(e) {
  const t = [];
  if ((Ae(e) || on(e)) && t.push(e), A(e)) {
    const n = we(e) ? gi(e) : void 0, r = L(e) ? wt(e) : void 0;
    for (const i of e.getChildren())
      r && (r.is(i) || i.isParentOf(r)) ? t.push(r) : (N(i) || kn(i) || Ut(i) && i.getTextType() === "attribute" || i.getType() === hi || n?.is(i)) && t.push(i);
  }
  if (ze(e))
    for (let n = e.getNextSibling(); n && yi(n); n = n.getNextSibling())
      (!kn(n) || yp(n).is(e)) && t.push(n);
  for (const n of eP) {
    const r = zr(n);
    if (!r.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = r.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function Hi(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function sf(e, t, n) {
  const r = rn(e);
  if (!r || r.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, r.length));
  let s = r.spans[0];
  for (const c of r.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = Lt(hn(r.owner, n));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property": {
      const { owner: c } = r, l = s.bytes.property === "number" && Ae(c) ? c.getNumber() : void 0;
      return {
        jsonPath: Zk(a, s.bytes.property),
        propertyOffset: l === void 0 ? o : Math.min(o, l.length)
      };
    }
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return cP(e, n);
  }
}
function of(e, t) {
  return v(e) && !rn(e) && !Is(e, 0, t);
}
function cP(e, t) {
  let n = e;
  for (let o = n.getParent(); !n.getPreviousSibling() && ae(o); )
    n = o, o = n.getParent();
  let r = n.getPreviousSibling();
  for (; r && of(r, t); )
    r = r.getPreviousSibling();
  if (!r)
    return;
  const i = A(r) ? r.getLastDescendant() : r;
  if (i && (v(i) || yi(i)))
    return of(i, t) ? void 0 : tr(i, i.getTextContentSize(), t);
  const s = r.getParent();
  if (s)
    return tr(s, r.getIndexWithinParent() + 1, t);
}
function Ei(e, t, n) {
  for (const r of hl(e)) {
    const i = rn(r);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!Hi(o.bytes, t))
          continue;
        const a = bp(i, s);
        if (!(n < o.base || n > a))
          return [r, o.start + (n - o.base)];
      }
  }
}
function bp(e, t) {
  const n = e.spans[t], r = e.spans[t + 1];
  return r ? n.base + (r.start - n.start) - 1 : n.base + (e.length - n.start);
}
function In(e, t) {
  const n = dt(t);
  if (qr(e)) {
    const r = qn(e.jsonPath);
    let i = _e();
    for (let s = 0; s < r.length; s++) {
      if (!i || !A(i))
        return [void 0, void 0];
      const o = Ft(i, n)[r[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== r.length - 1 ? [void 0, void 0] : FM(o, e.offset) ?? wg(e, n) ?? [void 0, void 0];
      i = o.node;
    }
    return i && A(i) ? In(xp(i, r, e.offset, n), t) : [void 0, void 0];
  }
  if (qo(e) || qi(e) || Do(e)) {
    const r = wg(e, n);
    if (r)
      return r;
  }
  if (Ko(e) || zc(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const { keyName: i } = e, s = Ko(e) ? Ei(r, { kind: "attributeKey", keyName: i }, e.keyOffset) : Ei(r, { kind: "attributeMarker", keyName: i }, 0);
    if (s)
      return s;
    const o = ru(r, i);
    if (o)
      return o;
    const a = xP(r, i);
    return a || (ze(r) ? Ir(r, !1) : nu(r));
  }
  if (Do(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = Ei(r, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || (ru(r, e.keyName) ?? nu(r));
  }
  if (td(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = Ei(r, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = A(r) ? r.getFirstChild() : null;
    return s && v(s) ? [s, 0] : Ir(r, !1);
  }
  if (qi(e)) {
    const r = Pi(e.jsonPath, n);
    if (!r)
      return [void 0, void 0];
    const i = Ei(r, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = Tp(r);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return Ir(r, !0);
    if (!A(r))
      return Ir(r, !1);
    const o = r.getLastChild();
    return o && v(o) ? [o, o.getTextContent().length] : [r, r.getChildrenSize()];
  }
  if (qo(e)) {
    const r = tx(e.jsonPath), i = Pi(e.jsonPath, n);
    if (!i || r === void 0)
      return [void 0, void 0];
    const s = { kind: "property", property: r };
    if (r === "number" && Ae(i) && e.propertyOffset === i.getNumber().length + 1 && kp(i) && mP(i)) {
      const u = gP(i);
      if (u)
        return u;
    }
    const o = Ei(i, s, e.propertyOffset);
    if (o)
      return o;
    const a = TP(i, s, e.propertyOffset);
    if (a)
      return a;
    const c = ru(i, r);
    if (c)
      return c;
    if (A(i)) {
      if (!lP.has(r))
        return nu(i);
      const u = i.getFirstChild();
      return u && v(u) ? [u, 0] : [i, 0];
    }
    const l = vP(i, r);
    return Ir(i, l !== void 0 && e.propertyOffset >= l.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${MS(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function tx(e) {
  const t = /\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/.exec(e);
  return t?.[1] ?? t?.[2] ?? t?.[3];
}
const lP = /* @__PURE__ */ new Set([
  "marker",
  "code",
  "caller",
  "category"
]);
function af(e, t) {
  const n = e.length - e.trimStart().length, r = Math.max(n, e.trimEnd().length);
  return { before: Math.min(Math.max(t, n), r) - n, total: r - n };
}
function Pg(e, t, n) {
  const r = In(e, t), [i, s] = r;
  if (n && !qr(e)) {
    const c = Pi(e.jsonPath, dt(t)), l = c && uP(c, e);
    if (l)
      return l.before > 0 ? { point: r, insideDecorator: l } : { point: r };
  }
  if (i && s !== void 0 && s > 0 && yi(i)) {
    const c = il(i);
    return {
      point: r,
      insideDecorator: { decorator: i, ...af(c, s) }
    };
  }
  if (qr(e))
    return { point: r };
  const o = Pi(e.jsonPath, dt(t));
  if (!gr(o) && !Jr(o))
    return { point: r };
  const a = fP(o, e);
  return a && a.before > 0 ? { point: r, insideDecorator: a } : { point: r };
}
function nx(e) {
  const t = e.getFirstChild();
  if (!t || !kn(t))
    return;
  const n = rn(t);
  if (n?.spans[0]?.bytes.kind !== "marker" || !n.owner.is(e) || !e.getChildren().every((c) => yi(c) || v(c) && $n(c)))
    return;
  const i = eo(e.getMarker()), s = er(e.getUnknownAttributes() ?? {}, i);
  if (!s)
    return;
  const o = pl(s, 1, i);
  if (!hl(e).some((c) => rn(c)?.spans.some((l) => o.some((u) => Hi(l.bytes, u.bytes)))))
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
function uP(e, t) {
  const n = D(e) ? nx(e) : void 0, r = n && rx(t);
  if (!n || !r)
    return;
  let i = 0, s;
  for (const { text: o, spans: a } of n.pieces) {
    const c = { spans: a, length: o.length };
    if (s === void 0) {
      const l = a.findIndex((u, f) => Hi(u.bytes, r.bytes) && r.offset >= u.base && r.offset <= bp(c, f));
      if (l >= 0) {
        const u = a[l].start + (r.offset - a[l].base);
        s = i + af(o, u).before;
      }
    }
    i += af(o, 0).total;
  }
  return s === void 0 ? void 0 : { decorator: n.decorator, before: s, total: i };
}
function fP(e, t) {
  const n = rx(t);
  if (!n)
    return;
  const r = ix(e), i = r.findIndex((a) => Hi(a.bytes, n.bytes));
  if (i < 0)
    return;
  const s = r.reduce((a, c) => a + c.length, 0), o = r.slice(0, i).reduce((a, c) => a + c.length, 0) + Math.min(Math.max(n.offset, 0), r[i].length);
  return { decorator: e, before: o, total: s };
}
function rx(e) {
  if (Ko(e))
    return {
      bytes: { kind: "attributeKey", keyName: e.keyName },
      offset: e.keyOffset
    };
  if (zc(e))
    return { bytes: { kind: "attributeMarker", keyName: e.keyName }, offset: 0 };
  if (Do(e))
    return {
      bytes: { kind: "closingAttributeMarker", keyName: e.keyName },
      offset: e.keyClosingMarkerOffset
    };
  if (td(e))
    return { bytes: { kind: "marker" }, offset: 0 };
  if (qo(e)) {
    const t = tx(e.jsonPath);
    return t === void 0 ? void 0 : { bytes: { kind: "property", property: t }, offset: e.propertyOffset };
  }
}
function ix(e) {
  const t = (s, o) => ({ bytes: s, text: o, length: o.length }), n = [
    t({ kind: "marker" }, "\\"),
    // The space after the marker name is inside the glyph Standard view spells, so it counts.
    t({ kind: "property", property: "marker" }, `${e.getMarker()} `),
    t({ kind: "property", property: "number" }, e.getNumber())
  ], r = Jr(e), i = r ? [ni.ca, ni.cp] : [ni.va, ni.vp];
  for (const s of i) {
    if (!s)
      continue;
    const { markerName: o, keyName: a } = s, c = a === "altnumber" ? e.getAltnumber() : e.getPubnumber();
    c !== void 0 && (n.push(t({ kind: "attributeMarker", keyName: a }, "\\"), t({ kind: "attributeKey", keyName: a }, o), t({ kind: "property", property: a }, c)), r && a === "pubnumber" || n.push(t({ kind: "closingAttributeMarker", keyName: a }, ct(o))));
  }
  return n;
}
function dP(e) {
  if (gr(e) || Jr(e))
    return ix(e).map(({ text: r }) => r).join("");
  const t = e.getParent(), n = D(t) ? nx(t) : void 0;
  return n?.decorator.is(e) ? n.pieces.map(({ text: r }) => r.trim()).join("") : il(e).trim();
}
function Ng(e, t) {
  if (!yi(e))
    return [e, t];
  const n = e.getParent();
  if (!n || !A(n))
    return [e, t];
  const r = e.getIndexWithinParent();
  if (r < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && sx.test(e.getTextContent());
  return [n, s ? r + 1 : r];
}
const sx = /[ \u00A0]$/;
function pP(e, t, n) {
  let r;
  if (A(e))
    r = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    r = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; v(r) && !rn(r) && !Is(r, 0, n); )
    r = r.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = r?.getParent();
  if (r && s && yi(r))
    return [s, r.getIndexWithinParent() + 1];
  const o = A(r) ? r.getLastDescendant() : r;
  return v(o) ? [o, o.getTextContentSize()] : [e, t];
}
function cf(e) {
  return A(e) ? "element" : "text";
}
function Pi(e, t) {
  const n = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = n ? n[1] : e, i = qn(r);
  let s = _e();
  for (const o of i) {
    if (!s || !A(s))
      return;
    const a = Ft(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function Dt(e, t, n) {
  return tr(e, t, dt(n));
}
function tr(e, t, n) {
  const r = v(e) ? Bd(e) : void 0;
  if (v(e) && r && t > r.start) {
    const s = Is(e, t, n);
    if (s)
      return {
        jsonPath: Lt([
          ...hn(s.parent, n),
          s.index
        ]),
        offset: s.offset
      };
  }
  if (v(e) && t > 0 && t === e.getTextContentSize() && kp(e)) {
    const s = hP(e, n);
    if (s)
      return s;
  }
  const i = sf(e, t, n);
  if (i)
    return i;
  if (ae(e)) {
    const s = e.getChildrenSize(), o = e.getChildAtIndex(Math.min(t, s - 1));
    if (v(o)) {
      const c = t >= s ? o.getTextContentSize() : 0;
      return tr(o, c, n);
    }
    if (o && t > 0 && t < s) {
      const c = ax(e, t, n);
      if (c)
        return c;
    }
    const a = e.getParent();
    if (a) {
      const c = e.getIndexWithinParent(), l = t > 0 ? c + 1 : c;
      return tr(a, l, n);
    }
  }
  if (A(e)) {
    const s = e.getChildAtIndex(t), o = s && ox(s);
    if (o) {
      const l = sf(o, 0, n);
      if (l)
        return l;
    }
    if (s && yi(s))
      return {
        jsonPath: Lt(hn(e, n))
      };
    const a = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!s && a && lx(a, e))
      return Wa(e, !0, n);
    if (at(e) || $n(e))
      return Wa(e, t > 0, n);
    const c = Mt(e) && yn(e.getParent()) ? e.getParentOrThrow() : e;
    return cx(c, Ns(e, t, n), n);
  }
  if (v(e)) {
    if (t < no(e)) {
      const c = e.getPreviousSibling();
      if (N(c))
        return tr(c, c.getTextContentSize(), n);
    }
    const s = Is(e, t, n);
    if (s)
      return {
        jsonPath: Lt([
          ...hn(s.parent, n),
          s.index
        ]),
        offset: s.offset
      };
    const o = t > 0;
    let a = o ? e.getNextSibling() : e.getPreviousSibling();
    for (; ae(a); )
      a = o ? a.getFirstChild() : a.getLastChild();
    if (v(a) && (rn(a) || Is(a, 0, n)))
      return tr(a, o ? 0 : a.getTextContentSize(), n);
  }
  return Wa(e, t > 0, n);
}
function kp(e) {
  if (!sx.test(e.getTextContent()))
    return !1;
  if (Ae(e))
    return !0;
  const t = Dn(e);
  return L(t) && !!wt(t)?.is(e);
}
function hP(e, t) {
  let n = e;
  for (let s = n.getParent(); !n.getNextSibling() && ae(s); s = n.getParent())
    n = s;
  const r = n.getNextSibling();
  if (!r) {
    const s = n.getParent();
    return s ? tr(s, s.getChildrenSize(), t) : void 0;
  }
  const i = A(r) ? r.getFirstDescendant() ?? r : r;
  if (!(of(i, t) || rn(i)?.spans[0]?.bytes.kind === "precedingText"))
    return tr(i, 0, t);
}
function gP(e) {
  let t = e.getParent();
  for (; t && !ux(t); )
    t = t.getParent();
  const n = t?.getNextSibling();
  if (!n)
    return;
  const r = Ei(n, { kind: "marker" }, 0);
  if (r)
    return r;
  const i = A(n) ? n.getFirstChild() : null;
  return i && v(i) ? [i, 0] : Ir(n, !1);
}
function mP(e) {
  let t = e;
  for (let n = t.getParent(); !t.getNextSibling() && ae(n); n = t.getParent())
    t = n;
  return !t.getNextSibling();
}
function ox(e) {
  if (rn(e))
    return e;
  if (!je(e))
    return;
  const t = e.getFirstDescendant();
  return t && rn(t) ? t : void 0;
}
function ax(e, t, n) {
  for (let r = t; r < e.getChildrenSize(); r++) {
    const i = e.getChildAtIndex(r);
    if (!i)
      return;
    const s = ox(i);
    if (s)
      return sf(s, 0, n);
    if (v(i) && Is(i, 0, n))
      return tr(i, 0, n);
    if (v(i) || $n(i))
      continue;
    const o = zM(i, n);
    if (o)
      return cx(o.parent, o.point, n);
  }
}
function cx(e, t, n) {
  const r = hn(e, n);
  return t.type === "text" ? {
    jsonPath: Lt([...r, t.index]),
    offset: t.offset
  } : xp(e, r, t.index, n);
}
function lx(e, t) {
  const n = rn(e);
  return !!n && n.owner.is(t) && n.spans[0]?.bytes.kind === "closingMarker";
}
function Wa(e, t, n) {
  const r = e.getParent();
  if (!r)
    return { jsonPath: Lt(hn(e, n)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (ae(r)) {
    if (i > 0 && i < r.getChildrenSize()) {
      const s = ax(r, i, n);
      if (s)
        return s;
    }
    return Wa(r, i > 0, n);
  }
  return tr(r, i, n);
}
function xp(e, t, n, r) {
  const i = Ft(e, r), s = i[n];
  if (!s)
    return yP(e, t, i, r);
  const o = Lt([...t, n]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function yP(e, t, n, r) {
  if (yn(e))
    return xc(e, t, 1, r);
  if (Tp(e) !== void 0) {
    const o = n.length - 1, a = n[o];
    return a?.type === "text" ? {
      jsonPath: Lt([...t, o]),
      offset: a.length
    } : {
      jsonPath: Lt(t),
      closingMarkerOffset: 0
    };
  }
  const i = Dn(e), s = t[t.length - 1];
  return ux(e) || !i || s === void 0 ? xc(e, t, 0, r) : xp(i, t.slice(0, -1), s + 1, r);
}
function xc(e, t, n, r) {
  const i = Lt(t), s = Tp(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + n
    };
  if (A(e)) {
    const l = Ft(e, r), u = l.length - 1, f = l[u], d = [...t, u];
    if (f?.type === "text")
      return { jsonPath: Lt(d), offset: f.length + n };
    if (f)
      return xc(f.node, d, n, r);
  }
  const o = (l, u) => ({
    jsonPath: Zk(i, l),
    propertyOffset: u.length + n
  }), a = (l, u) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: ct(u).length + n
  });
  if (Oe(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (at(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (Ie(e))
    return o("code", e.getCode());
  if (L(e))
    return o("caller", e.getCaller());
  const c = rt(e) ? e.getMarker() : bP(e);
  return c === void 0 ? { jsonPath: i } : o("marker", c);
}
function Tp(e) {
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : ct(e.getMarker(), el(e)).length;
  if (L(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : ct(e.getMarker()).length;
  if (ze(e))
    return ct("").length;
  if (rt(e)) {
    const { closing: t } = tl(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function ux(e) {
  const t = Dn(e);
  return ye(e) || Mt(e) || Ie(e) || Pk(e) || rt(e) && e.getTag() === "table:row" || yn(t) || Wi(t);
}
function bP(e) {
  if (ye(e) || D(e) || ze(e) || Pk(e) || dE(e))
    return e.getMarker();
}
function nu(e) {
  if (A(e)) {
    const n = e.getLastChild();
    let r = n;
    for (; r && kP(r, e); )
      r = r.getPreviousSibling();
    if (r !== n)
      return v(r) && !rn(r) ? [
        r,
        $n(r) ? 0 : r.getTextContentSize()
      ] : [e, r ? r.getIndexWithinParent() + 1 : 0];
    if (n && v(n))
      return [
        n,
        !rn(n) && $n(n) ? 0 : n.getTextContentSize()
      ];
  }
  const t = e.getNextSibling();
  return t && A(t) ? [t, 0] : Ir(e, !0);
}
function kP(e, t) {
  return zd(e) || je(e) || Ut(e) && e.getTextType() === "attribute" || lx(e, t);
}
function xP(e, t) {
  for (const n of hl(e)) {
    const r = rn(n);
    if (!r?.owner.is(e))
      continue;
    const { spans: i } = r;
    if (i.some((o) => Hi(o.bytes, { kind: "attributeKey", keyName: t })))
      return;
    const s = i.find((o) => Hi(o.bytes, { kind: "property", property: t }));
    if (s && n.getTextContent()[s.start - 1] === "|")
      return [n, s.start];
  }
}
function TP(e, t, n) {
  for (const r of hl(e)) {
    if (!yi(r))
      continue;
    const i = rn(r);
    if (!i?.owner.is(e))
      continue;
    const s = i.spans.findIndex((o) => Hi(o.bytes, t));
    if (!(s < 0))
      return n > bp(i, s) ? [r, i.spans[s + 1]?.start ?? i.length] : void 0;
  }
}
function ru(e, t) {
  if (!L(e) || t !== ni.cat?.keyName)
    return;
  const n = e.getChildren().find((s) => s.getType() === hi);
  if (!n)
    return;
  const [r, i] = Ir(n, !0);
  return r && i !== void 0 ? [r, i] : void 0;
}
function Ir(e, t) {
  const n = e.getParent();
  return n ? [n, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function vP(e, t) {
  if (Oe(e) || at(e)) {
    if (t === "number")
      return e.getNumber();
    if (t === "altnumber")
      return e.getAltnumber();
    if (t === "pubnumber")
      return e.getPubnumber();
    if (t === "marker")
      return e.getMarker();
  }
  if (ze(e) && t === "marker")
    return e.getMarker();
}
function wg(e, t) {
  const n = _e(), r = xc(n, [], 1, t);
  if (Og(r) !== Og(e))
    return;
  const i = n.getLastChild();
  if (!A(i))
    return [n, n.getChildrenSize()];
  const s = i.getLastDescendant();
  if (Ae(s) && kp(s))
    return [s, s.getTextContentSize() - 1];
  if (v(s))
    return [s, s.getTextContentSize()];
  if (A(s))
    return [s, s.getChildrenSize()];
  const o = s?.getParent() ?? i;
  return [o, o.getChildrenSize()];
}
function Og(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [n]) => t.localeCompare(n)));
}
function fx(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!$n(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function hn(e, t) {
  const n = [];
  let r = e;
  for (; r; ) {
    const i = Dn(r);
    if (!i)
      break;
    const s = BM(i, r, t);
    s >= 0 && n.unshift(s), r = i;
  }
  return n;
}
function dx() {
  for (let e = _e().getFirstChild(); e; e = e.getNextSibling())
    if (Wi(e))
      return !0;
  return !1;
}
function Ws(e) {
  return Ut(e) && Ie(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function px(e) {
  const t = ya(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function vp(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, n = t.getNode();
  if (!(yn(n) && t.offset === 0 || Ie(n.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Ws);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Ie(s))
    return !1;
  const o = px(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function Ha(e) {
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
    const r = e ? nk(t) : qd(t);
    return Ws(r);
  }
  return vp(t) && t.isCollapsed();
}
function CP(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const n = nt(t.anchor.getNode(), Ie);
  if (!n || !Ws(n.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return Ha(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Ws)) {
    const r = px(n);
    t.focus.set(r.key, r.offset, r.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function Ia() {
  const e = w();
  return E(e) && vp(e), !1;
}
function SP() {
  const e = w();
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = t.getNode();
  return !Ie(n) || !Ws(n.getFirstChild()) ? !1 : (cr(n, 1), !0);
}
function _P(e) {
  const t = e.getChildren(), n = `\\${e.getMarker()}`, r = t.findIndex((s) => kn(s) && s.getTextContent().startsWith(n));
  if (r <= 0)
    return;
  let i = t[r];
  for (const s of t.slice(0, r))
    i.insertAfter(s), i = s;
}
function MP() {
  const [e] = Se();
  return G(() => e.registerCommand(Hc, (t) => (EP(t), !1), Di), [e]), G(() => it(
    e.registerCommand(Gc, Ha, Qe),
    e.registerCommand(rd, Ha, Qe),
    e.registerCommand(rc, Ha, Qe),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(rc, CP, vr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(ua, Ia, Xe),
    e.registerCommand(nr, Ia, Xe),
    e.registerCommand(or, Ia, Xe),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Ay, Ia, Xe)
  ), [e]), G(() => it(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(bn, () => (SP(), !1), Qe),
    e.registerNodeTransform(wn, _P)
  ), [e]), null;
}
function EP(e) {
  if (AP(e.target))
    return;
  const t = w();
  E(t) && PP(t);
}
function ls(e) {
  let t = e.getFirstChild(), n = 0;
  for (; t !== null; )
    if (xn(t))
      n++, t = t.getNextSibling(), v(t) && t.getTextContent() === q && (n++, t = t.getNextSibling());
    else if (Oe(t))
      n++, t = t.getNextSibling();
    else
      break;
  return n === 0 ? !1 : (cr(e, n), !0);
}
function AP(e) {
  if (!Py(e))
    return !1;
  const t = es(e);
  if (!I0(t))
    return !1;
  const n = t.getParent();
  return n ? St(n) ? ls(n) : (cr(n, t.getIndexWithinParent() + 1), !0) : !1;
}
function PP(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const n = Q(t.key);
  if (!bt(n))
    return !1;
  const r = n.getFirstChild();
  return !kn(r) && !gr(r) ? !1 : ls(n);
}
function NP(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function hx(e, t, n, r, i, s, o) {
  if (!Ze.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = n ? Zo(n, i) : w();
  if (!E(a))
    return;
  if (gx(a)) {
    o?.warn("$insertNote: a note cannot be inserted in a chapter line");
    return;
  }
  const c = RP(a, e, r, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? NP(e, s), u = mx(e, l, c, i, s, void 0, void 0);
  return $P(u, a, i), u;
}
function Cp(e) {
  return e !== "expanded";
}
function wP(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const n = t.getNode();
  if (!v(n) || !D(n.getParent()))
    return;
  if (N(n))
    return t.offset === 0 && n.getMarkerSyntax() === "closing" ? n : void 0;
  if (t.offset !== n.getTextContentSize())
    return;
  const r = n.getNextSibling();
  return N(r) && r.getMarkerSyntax() === "closing" ? r : void 0;
}
function gx(e) {
  return [e.anchor, e.focus].some((t) => {
    const n = t.getNode();
    return we(n) || we(n.getParent());
  });
}
function OP(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e, n = t.getNode();
  if (t.type === "text") {
    if (t.offset !== 0 || !N(n))
      return;
    const i = n.getParent();
    return St(i) && i.getFirstChild()?.is(n) ? i : void 0;
  }
  if (!yn(n))
    return;
  const r = n.getChildAtIndex(t.offset);
  return St(r) ? r : void 0;
}
function $P(e, t, n) {
  if (gx(t))
    return;
  const r = Cp(n?.noteMode);
  e.setIsCollapsed(r), t.isCollapsed() || EM(t), tp(t);
  const i = OP(t);
  if (i && ls(i)) {
    const o = w();
    E(o) && (t = o);
  }
  jn(t);
  const s = wP(t);
  s ? (s.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), r || e.getChildren().reverse().find(D)?.selectEnd();
}
function bs(e, t, n) {
  const r = Br(e);
  r.setUnknownAttributes({ closed: "false" });
  const i = n?.markerMode === "editable";
  i ? r.append(Kt(e)) : n?.markerMode === "visible" && r.append(Fr("marker", Je(e)));
  const s = t === "" ? At : i ? q + t : t;
  return r.append(Ue(s)), r;
}
function RP(e, t, n, r, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = n ?? {}, u = i.chapterVerseSeparator ?? ":", f = i.verseRangeSeparator ?? "-", d = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => f)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (d !== void 0 && o.push(bs("fr", d, r)), !e.isCollapsed()) {
        const p = Rg(e);
        p.length > 0 && o.push(bs("fq", p, r));
      }
      o.push(bs("ft", "", r));
      break;
    case "x":
    case "ex":
      if (d !== void 0 && o.push(bs("xo", d, r)), !e.isCollapsed()) {
        const p = Rg(e);
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
function mx(e, t, n, r, i, s, o) {
  const a = o === "false", c = a ? !1 : Cp(r?.noteMode), l = yd(e, t, c);
  s && Xt(l, oi, () => s);
  const u = r?.isNoteShellEditable === !1;
  let f, d;
  r?.markerMode === "editable" ? (f = Kt(e), u && f.setMode("token"), a || (d = Kt(e, "closing"), u && d.setMode("token"))) : r?.markerMode === "visible" && (f = Fr("marker", Je(e) + " "), a || (d = Fr("marker", ct(e))));
  let p;
  if (f && l.append(f), r?.markerMode === "editable" && !c)
    p = Ue(Nt(l.__caller)).toggleUnmergeable(), u && p.setMode("token"), l.append(p, ...n);
  else {
    const h = () => ji(), g = n.flatMap(FP(h));
    if (t === "")
      l.append(...g);
    else {
      const m = Dd(n);
      let y = () => {
      };
      i?.noteCallerOnClick && (y = i.noteCallerOnClick), p = up(l.__caller, m, y), l.append(p, h(), ...g);
    }
  }
  return d && l.append(d), l;
}
function Tr(e) {
  if (typeof e == "string") {
    const t = Q(e);
    return L(t) ? t : void 0;
  }
  return RA(e);
}
function Ga(e, t) {
  const n = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(n), n) {
    const r = e.getPreviousSibling();
    if (gr(r) || !r) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      r.selectEnd();
  } else {
    const r = e.getChildren(), i = r.slice().reverse().find(D);
    if (i)
      IP(i);
    else {
      const s = Sp(e), o = s === -1 ? r.length : s;
      e.select(o, o);
    }
  }
}
function Sp(e) {
  const t = e.getChildrenSize() - 1, n = e.getLastChild();
  return N(n) && n.getMarkerSyntax() === "closing" || kn(n) && n.getTextContent() === ct(e.getMarker()) ? t : -1;
}
function IP(e) {
  const t = Sp(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const n = e.getChildAtIndex(t - 1);
  v(n) && !$n(n) ? n.selectEnd() : e.select(t, t);
}
function yx(e, { isContentChange: t = !1 } = {}) {
  const n = e.getNextSibling();
  if (v(n) && !ka(n)) {
    n.select(0, 0);
    return;
  }
  const r = e.getParent();
  if (!r)
    return;
  const i = e.getIndexWithinParent() + 1;
  r.canBeEmpty() ? r.select(i, i) : _p(r, i, { announce: !t });
}
function _p(e, t, { announce: n = !0 } = {}) {
  const r = e.getChildAtIndex(t - 1);
  if (!L(r) || r.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Ur();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), jn(i), n && Pt().dispatchCommand(bn, void 0);
}
function $g(e, t, n) {
  const r = wt(e), i = LP(e, r);
  if (n && kx(i, t, n, bx(e, r)))
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
function LP(e, t) {
  const n = [];
  for (const { node: r } of ts(e))
    !v(r) || nt(r, je) || (Mp(r, t) ? n.push({ node: r, isGlyph: !1, dataStart: Md(r) }) : qP(r, e) && n.push({ node: r, isGlyph: !0, dataStart: 0 }));
  return n;
}
function qP(e, t) {
  return on(e) ? !0 : N(e) && !t.is(e.getParent());
}
function bx(e, t) {
  return (n) => {
    let r = n;
    for (; !r.getPreviousSibling(); ) {
      const o = r.getParent();
      if (!o || o.is(e))
        return;
      r = o;
    }
    const i = r.getPreviousSibling(), s = A(i) ? i.getLastDescendant() : i;
    if (v(s) && (t?.is(s) || Mp(s, t)))
      return s;
  };
}
function kx(e, t, n, r) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === n.index)
      return DP(o, n.offset, r), !0;
    s += 1;
  }
  return !1;
}
function DP(e, t, n) {
  const r = e.getTextContentSize(), i = e.isToken() ? r : Math.min(Math.max(t, 0), r), s = i === 0 ? n(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function KP(e, t, n) {
  const { opener: r, value: i, closer: s } = ga(e);
  if (!i)
    return !1;
  const o = UP(i);
  if (n) {
    const c = [];
    r && c.push({ node: r, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = wt(e);
    if (kx(c, t, n, bx(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function UP(e) {
  return e.getTextContent().startsWith(q) ? q.length : 0;
}
function Mp(e, t) {
  return !v(e) || $n(e) || ka(e) ? !1 : !t || !e.is(t);
}
function BP(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(D))
    return;
  const t = wt(e);
  for (const { node: r } of ts(e))
    if (Mp(r, t))
      return;
  const n = Sp(e);
  return n === -1 ? e.getChildrenSize() : n;
}
function FP(e) {
  return (t) => Ut(t) ? [t] : [t, e()];
}
function zP(e) {
  const t = e.getParent();
  return t !== null && nt(t, L) !== null;
}
function Rg(e) {
  if (!E(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const n = t[0], r = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = id(e);
  let a = "";
  for (const c of t)
    if (!(L(c) || Ot(c) || zP(c)) && !N(c) && !on(c) && pe(c, ke) !== "attribute") {
      if (Oe(c)) {
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
const gl = [
  Pn,
  Qt,
  ...LE
], jP = [
  io,
  ...gl
], VP = pi((e, t) => {
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
function WP() {
  const [e, t] = Re(void 0), [n, r] = Re(), i = re(null), s = Pe((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = ZS(l, c, () => {
      e_(l, c, {
        placement: "bottom-start",
        middleware: [t_(), n_()]
      }).then((u) => {
        r(u.placement), t((f) => f?.x === u.x && f?.y === u.y ? f : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = Pe(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return G(() => o, [o]), { coords: e, placement: n, updatePosition: s, cleanup: o };
}
function HP({ isOpen: e, floatingBoxRef: t }) {
  const { coords: n, updatePosition: r, cleanup: i, placement: s } = WP();
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
const GP = xS(VP);
function xx({ isOpen: e = !1, children: t }) {
  const n = re(null), { coords: r, placement: i } = HP({ isOpen: e, floatingBoxRef: n }), s = ft(() => r ? typeof t == "function" ? t : () => t : () => null, [t, r]);
  return wi(
    P(GP, { ref: n, coords: r, style: r ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Tx = _y(void 0);
function Ep() {
  const e = My(Tx);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function JP(e, t) {
  const [n, r] = Re(0), [i, s] = Re(-1), o = ft(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: n,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = Pe(() => {
    r((f) => {
      const d = o.length;
      return d ? (f - 1 + d) % d : 0;
    });
  }, [o.length]), l = Pe(() => {
    r((f) => {
      const d = o.length;
      return d ? (f + 1) % d : 0;
    });
  }, [o.length]), u = Pe(() => {
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
function YP({ children: e, menuItems: t, onSelectOption: n, ...r }) {
  const i = JP(t, n);
  return P(Tx.Provider, { value: i, children: P("div", { ...r, children: e }) });
}
const vx = pi(({ index: e, children: t, onMouseEnter: n, onClick: r, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Ep(), u = Pe((d) => {
    l(), c(-1), r?.(d);
  }, [r, l, c]), f = Pe((d) => {
    a(e), n?.(d);
  }, [e, a, n]);
  return P("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: f, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function XP({ children: e, autoIndex: t = !0, ...n }) {
  const r = re(null), { state: { activeIndex: i, menuItems: s } } = Ep(), o = ft(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = ft(() => {
    const c = o(s);
    return t ? TS.map(c, (l, u) => vS(l) && l.type === vx && l.props.index === void 0 ? CS(l, { index: u }) : l) : c;
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
const QP = (e, t, n) => Ja(e, n).toLowerCase().includes(t.toLowerCase()), Ig = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ja = (e, t) => {
  const n = e[t];
  return typeof n == "string" ? n : String(n);
};
function ZP(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, f;
  i ? (f = i, u = n.length > 0 ? Ig(n[0]) : "") : (u = r || (n.length > 0 ? Ig(n[0]) : ""), f = (h, g) => QP(h, g, u));
  const d = s || u, p = /* @__PURE__ */ new Map();
  return n.filter((h) => {
    try {
      return f(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const m = (x) => (p.has(x) || p.set(x, Ja(x, d).toLowerCase()), p.get(x) ?? ""), y = a ? Ja(h, d) : m(h), b = a ? Ja(g, d) : m(g);
    for (const x of c)
      switch (x) {
        case "exact":
          if (y === l && b !== l)
            return -1;
          if (b === l && y !== l)
            return 1;
          break;
        case "startsWith":
          if (y.startsWith(l) && !b.startsWith(l))
            return -1;
          if (b.startsWith(l) && !y.startsWith(l))
            return 1;
          break;
        case "contains": {
          const S = y.indexOf(l), _ = b.indexOf(l);
          if (S !== -1 && _ === -1)
            return -1;
          if (_ !== -1 && S === -1)
            return 1;
          if (S !== -1 && _ !== -1)
            return S - _;
          break;
        }
      }
    return y.localeCompare(b);
  });
}
const iu = {
  Root: YP,
  Options: XP,
  Option: vx
};
function e1(e) {
  const { query: t, items: n, filterBy: r, filter: i, sortBy: s, sortingOptions: o } = e;
  return ft(() => ZP({
    query: t,
    items: n,
    filterBy: r,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, n, r, i, s, o]);
}
function t1() {
  const { moveUp: e, moveDown: t, select: n } = Ep();
  return ft(() => ({
    moveUp: e,
    moveDown: t,
    select: n
  }), [e, t, n]);
}
const n1 = () => {
  const e = t1(), [t] = Se();
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
    return t.registerCommand(Er, n, Qe);
  }, [t, e]);
};
function r1() {
  return n1(), null;
}
const i1 = ["Shift", "Control", "Alt", "Meta"];
function Cx(e) {
  const { options: t, onSelectOption: n, onClose: r, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = Se(), u = s !== void 0, [f, d] = Re(""), p = u ? s ?? "" : f, h = e1({ query: p, items: t, filterBy: "name" }), g = (m) => {
    r?.(), n ? n(m) : m.action(l);
  };
  return G(() => {
    a?.(p, h);
  }, [a, p, h]), G(() => l.registerCommand(Er, (m) => {
    if (u || c?.includes(m.key) || i1.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return r?.(), !1;
    const b = {
      Escape: () => r?.(),
      Backspace: () => {
        p.length === 0 ? r?.() : d((x) => x.slice(0, -1));
      }
    }[m.key];
    return b ? (m.stopPropagation(), m.preventDefault(), b(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && d((x) => x + m.key), !0) : !1;
  }, Qe), [l, u, p, o, r, c]), tt(iu.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => g(m), children: [!u && P("input", { value: p, type: "text", disabled: !0 }), P(r1, {}), P(iu.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((b, x) => tt(iu.Option, { index: x, children: [P("span", { className: "label", children: b.label ?? b.name }), P("span", { className: "description", children: b.description })] }, b.name)) })] });
}
function s1({ trigger: e, items: t }) {
  const [n] = Se(), [r, i] = Re(!1), s = Pe((o) => {
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
  }), [n]), t && P(xx, { isOpen: r, children: ({ placement: o }) => P(Cx, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function o1({ scriptureReference: e, contextMarker: t, getMarkerAction: n }) {
  return { markersMenuItems: ft(() => {
    if (!t || !e)
      return;
    const i = Cr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = Cr(o), { action: c } = n(o, a);
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
function a1(e, t) {
  const n = ss(e);
  if (gr(e) || Jr(e)) {
    const o = 1 + e.getMarker().length + 1, a = e.getNumber();
    if (e.getShowMarker())
      return t < o + a.length ? t : void 0;
    if (t < o || t >= o + a.length)
      return;
    const c = n.indexOf(a);
    return c < 0 ? "drawn" : c + t - o;
  }
  const r = il(e), i = r.length - r.trimStart().length, s = r.trim().length;
  if (!(t >= s))
    return r === n ? i + t : "drawn";
}
function c1() {
  return typeof CSS > "u" || typeof Highlight > "u" || !("highlights" in CSS) ? void 0 : { registry: CSS.highlights, create: () => new Highlight() };
}
const Lg = /* @__PURE__ */ new Map(), l1 = ["background-color", "color", "text-shadow"], u1 = [
  "text-decoration-line",
  "text-decoration-style",
  "text-decoration-color",
  "text-decoration-thickness"
], f1 = /* @__PURE__ */ new Set(["solid", "double", "dotted", "dashed", "wavy"]);
function d1(e, t) {
  const n = e.ownerDocument.defaultView;
  if (!n)
    return [];
  const r = n.getComputedStyle(e), i = n.getComputedStyle(t), s = (u) => {
    const f = r.getPropertyValue(u);
    return f && f !== i.getPropertyValue(u) ? f : void 0;
  }, o = [];
  for (const u of l1) {
    const f = s(u);
    f && o.push(`${u}: ${f}`);
  }
  const a = r.getPropertyValue("text-decoration-line");
  let c = !1;
  if (a) {
    if (a !== "none" && s("text-decoration-line")) {
      c = !0;
      for (const u of u1) {
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
    o.push("text-decoration-line: underline", `text-decoration-style: ${f1.has(l) ? l : "solid"}`);
    const u = r.getPropertyValue("border-bottom-color");
    u && o.push(`text-decoration-color: ${u}`);
    const f = r.getPropertyValue("border-bottom-width");
    f && o.push(`text-decoration-thickness: ${f}`);
  }
  return o;
}
const p1 = Math.random().toString(36).slice(2, 10);
let h1 = 0;
class g1 {
  api;
  probeParent;
  prefix = `editor-annotation-${p1}-${h1++}`;
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
      const i = su(r.classNames), s = this.byClassSet.get(i);
      !s || (n.some((a) => a.range === r.range && su(a.classNames) === i) || s.highlight.delete(r.range), --s.uses > 0) || (this.api.registry.delete(s.name), Lg.delete(s.name), this.byClassSet.delete(i), this.queueRender());
    }
  }
  dispose() {
    for (const t of [...this.byLeaf.keys()])
      this.clearLeaf(t);
    this.disposed = !0, this.observer?.disconnect(), this.style?.remove(), this.probes?.remove();
  }
  use(t) {
    const n = su(t);
    let r = this.byClassSet.get(n);
    if (!r) {
      const i = `${this.prefix}-${this.nextName++}`, s = this.api.create();
      s.priority = this.nextName, r = { name: i, classNames: t, highlight: s, uses: 0 }, this.byClassSet.set(n, r), this.api.registry.set(i, s), Lg.set(i, t), this.queueRender();
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
      this.measured.set(c, d1(l, i));
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
    this.style?.isConnected || (this.style = n.createElement("style"), this.style.setAttribute(Sx, this.prefix), n.head.append(this.style)), this.style.textContent !== a && (this.style.textContent = a);
  }
  /**
   * Whether any style rule's selector names one of `classNames`. Errs toward yes: a substring match
   * counts, and every class set counts while any rule cannot be read.
   */
  isNamedByRule(t, n) {
    this.rules || (this.rules = x1(_x(t)), this.ruleCounts = qg(t));
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
    !t || qg(t) === this.ruleCounts || this.forgetStyles();
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
        if (lf(o.target))
          return !0;
        const a = [...o.addedNodes, ...o.removedNodes];
        return a.length > 0 && a.every(lf);
      };
      i.every(s) || this.forgetStyles();
    }), this.observer.observe(t.head, { childList: !0, characterData: !0, subtree: !0 });
    const r = { attributes: !0, attributeFilter: ["class", "style", "data-theme"] };
    this.observer.observe(t.documentElement, r), t.body && this.observer.observe(t.body, r);
  }
}
const Sx = "data-editor-annotation-highlights";
function lf(e) {
  for (let t = e; t; t = t.parentNode)
    if (m1(t) && t.hasAttribute(Sx))
      return !0;
  return !1;
}
function m1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function _x(e) {
  const t = "adoptedStyleSheets" in e ? e.adoptedStyleSheets : [];
  return [...e.styleSheets, ...t].filter((n) => !n.ownerNode || !lf(n.ownerNode));
}
function qg(e) {
  return _x(e).map((t) => {
    try {
      return t.cssRules.length;
    } catch {
      return -1;
    }
  }).join(",");
}
function y1(e) {
  return "cssRules" in e;
}
function b1(e) {
  return "styleSheet" in e;
}
function k1(e) {
  return "selectorText" in e && typeof e.selectorText == "string";
}
function x1(e) {
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
      k1(o) && t.push(o.selectorText), b1(o) && (o.styleSheet ? r(o.styleSheet) : n = !0), y1(o) && r(o);
  };
  for (const i of e)
    r(i);
  return { selectors: t.join(`
`), unreadable: n };
}
function su(e) {
  return JSON.stringify([...e].sort());
}
function Dg(e, t, n) {
  const r = e.ownerDocument, i = r.createTreeWalker(e, NodeFilter.SHOW_TEXT), s = r.createRange();
  let o = 0, a = !1;
  for (let c = i.nextNode(); c; c = i.nextNode()) {
    const l = c.textContent?.length ?? 0;
    if (!a && t < o + l && (s.setStart(c, t - o), a = !0), a && n <= o + l)
      return s.setEnd(c, n - o), s;
    o += l;
  }
}
function T1(e, t, n) {
  return "getClientRects" in e ? Array.from(e.getClientRects()).some((r) => t >= r.left && t <= r.right && n >= r.top && n <= r.bottom) : !1;
}
function Mx(e) {
  return v(e) ? e.getTextContent() : ss(e);
}
function $o(e) {
  return Mx(e).length;
}
function v1(e, t) {
  if (v(e)) {
    if (Cn(e))
      return !0;
    if (kk(e)) {
      const [i, s] = jd(e);
      return t < i || t >= s;
    }
    return t < no(e);
  }
  const [n, r] = sl(ss(e));
  return t < n || t >= r;
}
function ou(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t.getKey();
}
function C1(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n)
      return t;
    t = n;
  }
  return t;
}
function Kg(e) {
  for (let t = e; t; t = t.getParent()) {
    const n = t.getNextSibling();
    if (n)
      return C1(n);
  }
}
function Ex(e) {
  return A(e) ? e.getChildren().flatMap(Ex) : [e];
}
const S1 = 64;
function _1(e, t) {
  const n = /* @__PURE__ */ new Map(), r = (o, a, c) => {
    for (let l = a; l < c; l++)
      if (!v1(o, l))
        return !1;
    return c > a && n.set(o.getKey(), [a, c]), !0;
  };
  if (e.leaf.is(t.leaf))
    return r(e.leaf, e.end, t.start) ? n : void 0;
  const i = ou(e.leaf);
  if (i !== ou(t.leaf) || !r(e.leaf, e.end, $o(e.leaf)))
    return;
  let s = Kg(e.leaf);
  for (let o = 0; s && !s.is(t.leaf); o++, s = Kg(s))
    if (o >= S1 || ou(s) !== i || Tn(s) && $o(s) === 0 || !r(s, 0, $o(s)))
      return;
  if (s)
    return r(t.leaf, 0, t.start) ? n : void 0;
}
function M1(e) {
  const t = [...e].sort(([r], [i]) => r - i), n = [];
  for (const [r, i] of t) {
    const s = n[n.length - 1];
    s && r <= s[1] ? s[1] = Math.max(s[1], i) : n.push([r, i]);
  }
  return n;
}
function E1(e, t, n, r) {
  const i = [];
  for (const a of n) {
    const c = Q(a);
    if (c?.isAttached())
      for (const l of Lr(c)) {
        if (l.type !== e || l.id !== t || l.undisplayed)
          continue;
        const u = l.start === l.end;
        i.push({
          leaf: c,
          start: u ? 0 : l.start,
          end: u ? $o(c) : l.end,
          inMark: !1
        });
      }
  }
  for (const a of r) {
    const c = Q(a);
    if (!(!ae(c) || !c.isAttached()))
      for (const l of Ex(c))
        i.push({ leaf: l, start: 0, end: $o(l), inMark: !0 });
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
      for (const [u, [f, d]] of _1(a, l) ?? [])
        o(u, f, d);
  });
  for (const [a, c] of s)
    s.set(a, M1(c));
  return s;
}
function A1(e, t) {
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
const P1 = "display-annotation", N1 = [
  ot,
  Gn,
  qt,
  Jn,
  Pn,
  Qt,
  Kn,
  hr
], Ax = /* @__PURE__ */ new Set();
function Un(e, t) {
  return JSON.stringify([e, t]);
}
function w1(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string";
}
function mo(e) {
  const t = JSON.parse(e);
  if (!w1(t))
    throw new Error(`not an annotation index key: ${e}`);
  return t;
}
function Px(e) {
  Xt(e, rl, void 0), A(e) && e.getChildren().forEach(Px);
}
const au = /* @__PURE__ */ new WeakMap();
function O1(e) {
  YM({
    holdableText: dP,
    renderedOffset: a1
  });
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  const u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakSet(), d = new AbortController(), p = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Set();
  let S, _ = !1;
  const U = c1(), B = U ? new g1(U, () => e.getRootElement()?.parentElement ?? null) : void 0;
  let V = /* @__PURE__ */ new Set();
  const ne = e._config.theme;
  function se(I) {
    return (t.get(I)?.size ?? 0) + (r.get(I)?.size ?? 0);
  }
  function W(I, j, J) {
    let Y = I.get(j);
    Y || I.set(j, Y = /* @__PURE__ */ new Set()), Y.add(J);
  }
  function he(I, j, J) {
    const Y = I.get(j);
    Y?.delete(J) && (Y.size === 0 && I.delete(j), se(j) === 0 && V.add(j));
  }
  function be(I) {
    for (const [j, J] of Object.entries(I.getTypedIDs()))
      for (const Y of J)
        He(Un(j, Y), j, Y);
  }
  function He(I, j, J) {
    const Y = /* @__PURE__ */ new Set([
      ...r.get(I) ?? [],
      ...t.get(I) ?? []
    ]), ue = Array.from(Y, (ee) => Q(ee)).filter((ee) => ee !== null && ee.isAttached() && // A holder inside another holder is already in that one's text.
    !ee.getParents().some((ce) => Y.has(ce.getKey())));
    if (ue.length === 0)
      return;
    ue.sort((ee, ce) => ee.isBefore(ce) ? -1 : 1);
    const te = ue.map((ee) => ae(ee) ? ee.getTextContent() : Lr(ee).filter((ce) => ce.type === j && ce.id === J).map((ce) => Gu(ee, ce)).join("")).join("");
    o.set(I, te);
  }
  function $(I, j, J) {
    return g.get(I)?.has(j) ? y.has(I) ? !0 : (B?.leafHighlights(I) ?? []).some((Y) => Y.annotations.includes(j) && T1(Y.range, J.clientX, J.clientY)) : !1;
  }
  function Z(I, j) {
    const J = /* @__PURE__ */ new Map();
    for (const Y of Lr(I)) {
      const ue = Un(Y.type, Y.id);
      J.has(ue) || !$(I.getKey(), ue, j) || J.set(ue, { annotation: Y, text: Gu(I, Y) });
    }
    return J;
  }
  function Te(I, j, J) {
    e.getEditorState().read(() => {
      const Y = es(I);
      if (!Y)
        return;
      const ue = J === "leave" ? /* @__PURE__ */ new Map() : Z(Y, j), te = (ce, { annotation: fe, text: Be }) => pc(e, fe.type, fe.id)?.[ce]?.(j, fe.type, fe.id, Be);
      if (J === "onClick") {
        ue.forEach((ce) => te("onClick", ce));
        return;
      }
      const ee = p.get(I) ?? /* @__PURE__ */ new Map();
      for (const [ce, fe] of ee)
        ue.has(ce) || te("onMouseLeave", fe);
      for (const [ce, fe] of ue)
        ee.has(ce) || te("onMouseEnter", fe);
      p.set(I, ue);
    }, { editor: e });
  }
  function Ne(I) {
    const j = {}, J = /* @__PURE__ */ new Set();
    for (const Y of I) {
      const [ue, te] = mo(Y), ee = j[ue] ??= [];
      ee.includes(te) || ee.push(te), b.get(Y)?.forEach((ce) => J.add(ce));
    }
    return Object.keys(j).length === 0 ? [] : [
      ...ob(ne, j),
      P1,
      ...J
    ].flatMap((Y) => Y.match(/\S+/g) ?? []);
  }
  function $e(I, j) {
    const J = u.get(I) ?? [];
    Fa(I, ...J.filter((Y) => !j.includes(Y))), _o(I, ...j), u.set(I, j);
  }
  function Gt(I) {
    if (f.has(I))
      return;
    f.add(I);
    const { signal: j } = d;
    I.addEventListener("click", (J) => Te(I, J, "onClick"), { signal: j }), I.addEventListener("mouseenter", (J) => Te(I, J, "move"), { signal: j }), I.addEventListener("mousemove", (J) => Te(I, J, "move"), { signal: j }), I.addEventListener("mouseleave", (J) => Te(I, J, "leave"), {
      signal: j
    });
  }
  function Sn(I) {
    const j = Q(I), J = e.getElementByKey(I), Y = g.get(I), ue = m.get(I);
    if (ue && ue !== J && $e(ue, []), x.delete(I), !j || !J || !Y || Y.size === 0) {
      J && $e(J, []), B?.clearLeaf(I), m.delete(I), y.delete(I);
      return;
    }
    m.set(I, J);
    const te = new Map([...Y].map((De) => [
      De,
      h.get(De)?.get(I) ?? []
    ])), ee = Lr(j).length > 0, ce = Mx(j);
    let fe = A1(ce.length, te);
    if (!fe.whole && !B && (fe = ee ? { whole: !0 } : { whole: !1, segments: [] }), ee && Gt(J), fe.whole) {
      B?.clearLeaf(I), y.add(I), $e(J, Ne(Y));
      return;
    }
    if (y.delete(I), $e(J, []), !B)
      return;
    const Be = [];
    for (const { start: De, end: an, annotations: Mn } of fe.segments) {
      const wr = Dg(J, De, an);
      wr ? Be.push({
        classNames: Ne(Mn),
        annotations: Mn,
        range: wr,
        text: ce.slice(De, an)
      }) : x.add(I);
    }
    B.setLeaf(I, Be);
  }
  function Le(I) {
    if (x.has(I))
      return !0;
    const j = e.getElementByKey(I);
    return (B?.leafHighlights(I) ?? []).some(({ range: J, text: Y }) => !j || !j.contains(J.startContainer) || !j.contains(J.endContainer) || J.toString() !== Y);
  }
  function me() {
    return [...x, ...B?.leafKeys() ?? []].filter(Le);
  }
  function F() {
    _ || e.getEditorState().read(() => new Set(me()).forEach(Sn), { editor: e });
  }
  function le(I) {
    S?.disconnect(), S = void 0;
    const j = I?.ownerDocument.defaultView;
    !I || !j || !B || (S = new j.MutationObserver(F), S.observe(I, { childList: !0, characterData: !0, subtree: !0 }));
  }
  function Me(I) {
    const j = /* @__PURE__ */ new Set();
    for (const Y of I)
      g.has(Y) && j.add(Y);
    const J = /* @__PURE__ */ new Set([...t.keys(), ...h.keys()]);
    for (const [Y, ue] of r)
      ue.size >= 2 && J.add(Y);
    for (const Y of J) {
      const [ue, te] = mo(Y), ee = E1(ue, te, t.get(Y) ?? [], r.get(Y) ?? []), ce = h.get(Y) ?? /* @__PURE__ */ new Map();
      for (const fe of /* @__PURE__ */ new Set([...ce.keys(), ...ee.keys()]))
        JSON.stringify(ce.get(fe)) !== JSON.stringify(ee.get(fe)) && j.add(fe);
      for (const fe of ce.keys()) {
        if (ee.has(fe))
          continue;
        const Be = g.get(fe);
        Be?.delete(Y), Be?.size === 0 && g.delete(fe);
      }
      for (const fe of ee.keys()) {
        let Be = g.get(fe);
        Be || g.set(fe, Be = /* @__PURE__ */ new Set()), Be.add(Y);
      }
      ee.size > 0 ? h.set(Y, ee) : h.delete(Y);
    }
    for (const [Y, ue] of m)
      e.getElementByKey(Y) !== ue && j.add(Y);
    for (const Y of me())
      j.add(Y);
    for (const Y of j)
      Sn(Y);
  }
  function Ye(I) {
    _ || e.getEditorState().read(() => Me(I), { editor: e });
  }
  function ut(I, j) {
    const J = Un(I, j), Y = [], ue = (te) => {
      const ee = te.ownerDocument.createRange();
      ee.selectNodeContents(te), Y.push(ee);
    };
    for (const te of r.get(J) ?? []) {
      const ee = e.getElementByKey(te);
      ee && ue(ee);
    }
    for (const [te, ee] of h.get(J) ?? []) {
      const ce = e.getElementByKey(te);
      if (ce) {
        if (y.has(te) || !B) {
          ue(ce);
          continue;
        }
        for (const [fe, Be] of ee) {
          const De = Dg(ce, fe, Be);
          De && Y.push(De);
        }
      }
    }
    return Y.sort((te, ee) => te.compareBoundaryPoints(Range.START_TO_START, ee));
  }
  function Tt(I, j, J, Y) {
    const ue = Un(I, j), te = b.get(ue) ?? /* @__PURE__ */ new Set();
    te.has(J) !== Y && (Y ? te.add(J) : te.delete(J), te.size > 0 ? b.set(ue, te) : b.delete(ue), Ye(h.get(ue)?.keys() ?? []));
  }
  function _n(I) {
    e.getEditorState().read(() => {
      const j = /* @__PURE__ */ new Set();
      for (const [J, Y] of I) {
        const ue = Y === "destroyed" ? null : Q(J), te = ue ? Lr(ue) : [], ee = n.get(J) ?? [];
        for (const { type: ce, id: fe } of ee) {
          const Be = Un(ce, fe);
          j.add(Be), te.some((De) => De.type === ce && De.id === fe) || he(t, Be, J);
        }
        for (const ce of te) {
          const fe = Un(ce.type, ce.id);
          j.add(fe), W(t, fe, J);
        }
        te.length > 0 ? n.set(J, te) : n.delete(J);
        for (let ce = ue?.getParent(); ce; ce = ce.getParent())
          ae(ce) && be(ce);
      }
      for (const J of j) {
        const [Y, ue] = mo(J);
        He(J, Y, ue);
      }
    }, { editor: e });
  }
  function ie(I) {
    e.getEditorState().read(() => {
      for (const [j, J] of I) {
        const Y = J === "destroyed" ? null : Q(j), ue = ae(Y) ? Y : void 0, te = ue ? Object.entries(ue.getTypedIDs()) : [], ee = te.flatMap(([fe, Be]) => Be.map((De) => Un(fe, De)));
        for (const fe of i.get(j) ?? [])
          ee.includes(fe) || (he(r, fe, j), ue || l.set(fe, [...l.get(fe) ?? [], j]));
        for (const fe of ee)
          W(r, fe, j);
        if (ee.length > 0 ? i.set(j, ee) : i.delete(j), !ue)
          continue;
        be(ue);
        const ce = ue.getTypedOnRemoves();
        for (const [fe, Be] of te)
          for (const De of Be) {
            const an = ce[fe]?.[De];
            an && s.set(Un(fe, De), an);
          }
      }
    });
  }
  function Ce(I, j, J) {
    Sk(e, j, J), s.delete(I), o.delete(I);
  }
  function Nr() {
    for (const [I, j] of X_(e))
      qe(I, j);
  }
  function qe(I, j) {
    const J = Un(I, j);
    a.add(J), c.add(J);
  }
  function yr() {
    a.clear(), Q_(e);
    for (const I of /* @__PURE__ */ new Set([...s.keys(), ...o.keys()])) {
      if (se(I) > 0)
        continue;
      const [j, J] = mo(I);
      Ce(I, j, J);
    }
  }
  function ge({ tags: I }) {
    Nr();
    const j = V, J = c, Y = l;
    if (V = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), I.has(fa)) {
      yr();
      return;
    }
    if (I.has(Wc))
      return;
    const ue = [];
    for (const te of j) {
      if (se(te) > 0)
        continue;
      const [ee, ce] = mo(te), fe = pc(e, ee, ce)?.onRemove ?? s.get(te), Be = o.get(te) ?? "";
      if (Ce(te, ee, ce), !(!fe || a.has(te) || J.has(te))) {
        a.add(te), Gh(e, ee, ce, !0);
        for (const De of Y.get(te) ?? [])
          Z_(De, ee, ce);
        try {
          fe(ee, ce, "destroyed", Be);
        } catch (De) {
          ue.push(De);
        }
      }
    }
    for (const te of ue)
      queueMicrotask(() => e._onError(te instanceof Error ? te : new Error(String(te))));
  }
  function zt(I, j) {
    Nr();
    const J = Un(I, j);
    a.delete(J), Gh(e, I, j, !1);
  }
  const Zt = it(
    ...N1.filter((I) => e.hasNodes([I])).map((I) => e.registerMutationListener(I, _n, { skipInitialization: !1 })),
    e.hasNodes([yt]) ? e.registerMutationListener(yt, ie, {
      skipInitialization: !1
    }) : () => {
    },
    Y_(e),
    e.registerUpdateListener(ge),
    nE(e, [Qt, Pn]),
    e.registerUpdateListener(({ dirtyLeaves: I, dirtyElements: j }) => {
      B?.noticeStylesheetChanges(), !(I.size === 0 && j.size === 0) && (Ye([...I, ...j.keys()]), S?.takeRecords());
    }),
    // Also paints what the mutation listeners above found already in the document.
    e.registerRootListener((I) => {
      le(I), I && Ye([...g.keys()]);
    }),
    () => {
      _ = !0, d.abort(), B?.dispose(), S?.disconnect();
    },
    e.registerCommand(
      AS,
      ({ nodes: I }) => (I.forEach(Px), !1),
      // Critical, and never handling the command, so a handler that does handle it cannot skip the
      // strip.
      Xe
    )
  );
  return {
    index: {
      keysFor: (I, j) => t.get(Un(I, j)) ?? Ax,
      noteSet: zt,
      noteReported: qe,
      hasReported: (I, j) => (Nr(), a.has(Un(I, j))),
      setStateClass: Tt,
      rangesFor: ut
    },
    references: 0,
    unregister: Zt
  };
}
function $1(e) {
  let t = au.get(e);
  t || (t = O1(e), au.set(e, t)), t.references++;
  const n = t;
  let r = !1;
  return {
    index: n.index,
    release: () => {
      r || (r = !0, n.references--, !(n.references > 0) && (n.unregister(), au.delete(e)));
    }
  };
}
function Nx(e) {
  const t = re(void 0);
  return Qs(() => {
    const n = $1(e);
    return t.current = n.index, () => {
      t.current = void 0, n.release();
    };
  }, [e]), ft(() => ({
    keysFor: (n, r) => t.current?.keysFor(n, r) ?? Ax,
    noteSet: (n, r) => t.current?.noteSet(n, r),
    noteReported: (n, r) => t.current?.noteReported(n, r),
    setStateClass: (n, r, i, s) => t.current?.setStateClass(n, r, i, s),
    rangesFor: (n, r) => t.current?.rangesFor(n, r) ?? [],
    hasReported: (n, r) => t.current?.hasReported(n, r) ?? !1
  }), []);
}
function Ro(e, t) {
  return `${e}:${t}`;
}
function R1(e, t) {
  G(() => {
    if (!e.hasNodes([yt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const n = /* @__PURE__ */ new Map();
    return it(ud(e, yt, (r) => Ui(r.getTypedIDs(), r.getTypedOnClicks(), r.getTypedOnRemoves(), r.getTypedOnMouseEnters(), r.getTypedOnMouseLeaves()), (r, i) => {
      const s = r.getTypedOnClicks(), o = r.getTypedOnRemoves(), a = r.getTypedOnMouseEnters(), c = r.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(r.getTypedIDs()))
        u.forEach((f) => {
          const d = s[l]?.[f], p = o[l]?.[f], h = a[l]?.[f], g = c[l]?.[f];
          i.addID(l, f, d, p, h, g);
        });
      r.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(yt, (r) => {
      e.getEditorState().read(() => {
        for (const [i, s] of r) {
          const o = Q(i);
          let a = {};
          s === "destroyed" ? a = n.get(i) ?? {} : ae(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!yt.isReservedType(c))
              for (const u of l) {
                let f = t.get(Ro(c, u));
                a[c] = l, n.set(i, a), s === "destroyed" ? f !== void 0 && (f.delete(i), f.size === 0 && t.delete(Ro(c, u))) : (f === void 0 && (f = /* @__PURE__ */ new Set(), t.set(Ro(c, u), f)), f.has(i) || f.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const I1 = pi(function({ logger: t, viewOptions: n }, r) {
  const [i] = Se(), s = ft(() => /* @__PURE__ */ new Map(), []);
  R1(i, s);
  const o = Nx(i), a = (c, l, u) => {
    const f = Array.from(u ?? s.get(Ro(c, l)) ?? []), d = ab(c, l, f), p = [];
    for (const g of Array.from(o.keysFor(c, l))) {
      const m = Q(g);
      if (!m)
        continue;
      const y = Lr(m).filter((b) => b.type === c && b.id === l);
      Ck(m, c, l) && p.push(...y.map((b) => Gu(m, b)));
    }
    const h = pc(i, c, l);
    if (Sk(i, c, l), p.length > 0 && h && d === 0 && !o.hasReported(c, l)) {
      o.noteReported(c, l);
      try {
        h.onRemove?.(c, l, "removed", p.join(""));
      } catch (g) {
        queueMicrotask(() => i._onError(g instanceof Error ? g : new Error(String(g))));
      }
    }
  };
  return Fc(r, () => ({
    setAnnotation(c, l, u, f, d, p, h) {
      if (yt.isReservedType(l))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${l}'. Use the appropriate plugin instead.`);
      i.update(() => {
        if (Zo(c, n, {
          forAnnotation: !0,
          decoratorHolds: /* @__PURE__ */ new Map()
        }) === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        a(l, u), o.noteSet(l, u);
        const m = /* @__PURE__ */ new Map(), y = Zo(c, n, {
          forAnnotation: !0,
          decoratorHolds: m
        });
        if (y === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        Xd(y, l, u, f, d, p, h, { decoratorHolds: m });
      }, { tag: $u });
    },
    removeAnnotation(c, l) {
      if (yt.isReservedType(c))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      const u = s.get(Ro(c, l));
      (u === void 0 || u.size === 0) && o.keysFor(c, l).size === 0 || i.update(() => {
        a(c, l, u);
      }, { tag: $u });
    },
    getAnnotationRanges(c, l) {
      return o.rangesFor(c, l);
    }
  })), null;
});
function L1({ dirtyElements: e, dirtyLeaves: t, prevEditorState: n, tags: r }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  r.has(sd) && !r.has(Jy) || i.ignoreTags.some((s) => r.has(s)) || n.isEmpty();
}
function q1(e, { dirtyLeaves: t, prevEditorState: n }) {
  let r = new Ps();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = Q(i), o = s !== null && On(s) !== void 0;
    if (t.size === 1 && v(s) && !o && mA(s)) {
      const a = op(s);
      if (a !== void 0) {
        const c = n.read(() => {
          const f = Q(i);
          return new Ps([v(f) ? nf(f) : { insert: "" }]);
        }), l = new Ps([nf(s)]), u = new Ps(a > 0 ? [{ retain: a }] : []);
        r = r.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Cg(n), c = Cg(e.getEditorState());
      r = a.diff(c);
    }
  }), r.ops;
}
function D1(e, t, n, r) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += K1(s, i, t, r);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        r?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      r?.debug(`Delete: ${s.delete}`), B1(i, s.delete, r);
    } else "insert" in s ? typeof s.insert == "string" ? (r?.debug(`Insert: '${s.insert}'`), i += F1(i, s.insert, s.attributes, t, r)) : typeof s.insert == "object" && s.insert !== null ? (r?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), j1(i, s, t, n, r) ? i += 1 : r?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : r?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : r?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function K1(e, t, n, r) {
  return typeof e.retain != "number" || e.retain < 0 ? (r?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (r?.debug(`Retain: ${e.retain}`), e.attributes && (r?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), U1(t, e.retain, e.attributes, n, r)), e.retain);
}
function U1(e, t, n, r, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(n)}`);
  let s = t, o = 0, a = -1;
  const c = _e();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Vr(u)) {
      const f = u.getTextContentSize();
      if (e < o + f && o < e + t) {
        const d = Math.max(0, e - o), p = f - d, h = Math.min(s, p);
        if (h > 0) {
          let g = u;
          const m = d > 0, y = h < f - d;
          if (m && y) {
            const [, b] = u.splitText(d);
            [g] = b.splitText(h);
          } else m ? [, g] = u.splitText(d) : y && ([g] = u.splitText(h));
          if (ci(n)) {
            const b = g.getParent();
            if (D(b)) {
              const x = n.char;
              let S;
              Array.isArray(x) ? a >= 0 && a <= x.length - 1 && (S = x[a]) : a === 0 && (S = x);
              const _ = S ? zi(S, b) : !1;
              if (_ && Array.isArray(x) && x.length > 1) {
                const U = Ue("");
                g.replace(U);
                const B = typeof n.segment == "string" ? n.segment : void 0, V = so(x.slice(1), r, g, B);
                let ne = U;
                for (const se of V)
                  ne.insertAfter(se), ne = se;
                U.remove(), Fn(n, g);
              } else if (_)
                Fn(n, g);
              else {
                g.remove();
                const U = Ug(g, n, r, i);
                if (U && U.length > 0) {
                  let B = b;
                  for (const V of U)
                    B.insertAfter(V), B = V;
                }
              }
            } else {
              const x = Ue("");
              g.replace(x);
              const S = Ug(g, n, r, i);
              if (S && S.length > 0) {
                let _ = x;
                for (const U of S)
                  _.insertAfter(U), _ = U;
                x.remove();
              } else
                x.replace(g);
            }
          } else
            Fn(n, g);
          s -= h;
        }
      }
      o += f;
    } else if (Rn(u))
      e <= o && o < e + t && s > 0 && (Bg(u, n), s -= 1), o += 1;
    else if (D(u)) {
      a += 1;
      let f = !1;
      if (e <= o && o < e + t && s > 0)
        if (ci(n)) {
          const d = n.char;
          let p;
          if (Array.isArray(d) ? a >= 0 && a <= d.length - 1 && (p = d[a]) : a === 0 && (p = d), p) {
            uf(u, p.style), typeof p.cid == "string" && Xt(u, Fi, () => p.cid);
            const h = gt(p, bc);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (n.char === !1 || n.char === null || Z1(n.char)) && (f = !0);
      if (s > 0) {
        const d = u.getChildren();
        for (const p of d) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return f && wu(u), !0;
        }
      }
      f && wu(u), a -= 1;
    } else if (bt(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const d = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Mt(u))
          Bg(u, n);
        else if (Ap(n)) {
          const p = $x(n.para, r);
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
function Ug(e, t, n, r) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = so(t.char, n, e, i), o = s.find(D);
  if (!o) {
    r?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Fn(t, e);
    return;
  }
  const a = {};
  qx.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Fn(t, e), s;
}
function wx(e, t) {
  e.setMarker(t);
  const n = e.getFirstChild();
  N(n) ? (n.setMarker(t), n.setTextContent(Je(t))) : Ut(n) && n.getTextType() === "marker" && n.setTextContent(Je(t) + q);
}
function uf(e, t) {
  const n = e.getMarker();
  if (e.setMarker(t), t === n)
    return;
  e.getChildren().forEach((o) => {
    N(o) && o.getMarker() === n && o.setMarker(t);
  });
  const r = D(e.getParent()), i = e.getFirstChild();
  Ut(i) && i.getTextType() === "marker" && i.getTextContent() === Je(n, r) && i.setTextContent(Je(t, r));
  const s = e.getLastChild();
  Ut(s) && s.getTextType() === "marker" && s.getTextContent() === ct(n, r) && s.setTextContent(ct(t, r));
}
function Bg(e, t) {
  for (const n of Object.keys(t)) {
    const r = t[n];
    if (n === "char" && D(e) && ci(t)) {
      const i = ff(r);
      if (uf(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Xt(e, Fi, () => o);
      }
      const s = gt(i, bc);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof r == "string" && (at(e) || Oe(e) || ze(e) || L(e) || rt(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    }) : (Ie(e) || ye(e) || D(e)) && (n === "style" && ye(e) ? wx(e, r) : n === "style" && D(e) ? uf(e, r) : n === "code" && Ie(e) ? e.setCode(r) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [n]: r
    })), n === "segment" && Xt(e, oi, () => r));
  }
}
function B1(e, t, n) {
  if (t <= 0)
    return;
  const r = _e();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Vr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, f = Math.min(s, u);
        f > 0 && (a.spliceText(l, f, ""), a.getTextContentSize() === 0 && a.remove(), n?.debug(`Deleted ${f} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= f, c -= f);
      }
      i += c;
    } else if (Rn(a))
      e <= i && i < e + s ? (a.remove(), n?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (bt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && bt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), n?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Hn(), !0), n?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && St(p)) {
            let h = i + 1;
            const g = p.getChildren();
            for (const y of g) {
              if (s <= 0)
                break;
              const b = i;
              if (i = h, o(y)) {
                i = b;
                break;
              }
              Vr(y) ? h += y.getTextContentSize() : Rn(y) && (h += 1), i = b;
            }
            const m = p.getChildren();
            for (const y of m)
              y.remove(), a.append(y);
            p.remove(), n?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Hn(), !0);
        } else ye(a) ? a.replace(Hn(), !0) : a.remove();
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
function F1(e, t, n, r, i) {
  if (t === Xo)
    return Fg(e, n, r, i);
  if (t.endsWith(Xo) && !Ap(n)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (ci(n))
        throw new Error("Text + LF should not have char attributes");
      o += Tc(e, s, n, i);
    }
    return o += Fg(e + o, n, r, i), o;
  } else return ci(n) ? z1(e, t, n, r, i) : Tc(e, t, n, i);
}
function z1(e, t, n, r, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(n.char)} at index ${e}`);
  const s = Ue(t === "" ? At : t);
  Fn(n, s);
  let o;
  {
    let m = function(y) {
      if (Vr(y)) {
        const b = y.getTextContentSize();
        if (e >= g && e < g + b) {
          const x = y.getParent();
          return D(x) && (o = x), !0;
        }
        g += b;
      } else if (Rn(y))
        g += 1;
      else if (D(y)) {
        const b = y.getChildren();
        for (const x of b)
          if (m(x))
            return !0;
      } else if (A(y)) {
        const b = y.getChildren();
        for (const x of b)
          if (m(x))
            return !0;
        bt(y) && (g += 1);
      }
      return !1;
    };
    const h = _e();
    let g = 0;
    m(h);
  }
  let a = n.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && zi(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (zi(a, o) || (o = void 0));
  const c = typeof n.segment == "string" ? n.segment : void 0, u = so(a, r, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const f = u.find(D);
  if (!f)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(n.char)}. Falling back to rich text insertion.`), Tc(e, t, void 0, i);
  const d = {};
  for (const [h, g] of Object.entries(n))
    h !== "char" && h !== "segment" && typeof g == "string" && (d[h] = g);
  Object.keys(d).length > 0 && f.setUnknownAttributes(d);
  let p = !0;
  for (const h of u)
    if (!Ox(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Tc(e, t, void 0, i));
}
function Tc(e, t, n, r) {
  if (t.length <= 0)
    return r?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = _e();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Vr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, f = Ue(t);
        if (Fn(n, f), u === 0)
          c.insertBefore(f);
        else if (u === l) {
          const d = c.getParent();
          D(d) && !ci(n) ? d.insertAfter(f) : c.insertAfter(f);
        } else {
          const [, d] = c.splitText(u);
          d.insertBefore(f);
        }
        return r?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Rn(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const f = Ue(t);
        Fn(n, f);
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
        const f = Ue(t);
        return Fn(n, f), c.append(f), r?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (bt(c)) {
      if (!o && e === s) {
        const f = Ue(t);
        Fn(n, f);
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
        const f = Ue(t);
        return Fn(n, f), c.append(f), r?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = Ue(t);
    Fn(n, c);
    const l = Hn().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (r?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Ox(e, t, n) {
  const r = _e();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === r && e === 0 && !r.getFirstChild())
      return t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), r.append(Hn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), r.append(t)), s = !0, !0;
    if (!A(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === r && t.isInline())
          if (St(l)) {
            n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            n?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Hn().append(t));
        else
          l.insertBefore(t), n?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Vr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const f = e - i, [d] = l.splitText(f);
          return d.insertAfter(t), n?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${f}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Rn(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (bt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const f = i;
        if (Mt(u) && bt(t) && // Target is at the ImpliedPara's implicit newline
        e === f && !s)
          return n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = f + 1, s = !0, !0;
        i += 1;
      } else if (A(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return A(a) && !s && (e === i || a === r && e > i) ? a === r ? (t.isInline() ? (n?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), r.append(Hn().append(t))) : (n?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), r.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      St(a) ? Mt(a) && ye(t) && e === i ? (n?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !St(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (n?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !St(t) ? (n?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (n?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(r), s || n?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function j1(e, t, n, r, i) {
  let s;
  return ei("chapter", t) ? s = W1(t.insert.chapter, n) : ei("verse", t) ? s = H1(t.insert.verse, n) : ei("ms", t) ? s = G1(t.insert.ms) : ei("note", t) ? s = Rx(t, n, r) : ei("unknown", t) ? s = Ix(t, n, r, i) : ei("unmatched", t) && (s = Y1(t.insert.unmatched, n)), s ? Ox(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Fg(e, t, n, r) {
  let i;
  Ap(t) ? i = $x(t.para, n) : Q1(t) && (i = V1(t.book)), i ??= Hn();
  const s = i, o = ye(s), a = Mt(s);
  let c = 0, l = !1;
  function u(f) {
    if (l)
      return !0;
    if (Vr(f)) {
      const d = f.getTextContentSize();
      if (e >= c && e <= c + d) {
        const p = f.getParent();
        if (ye(p) && (o || a)) {
          r?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? f.splitText(h) : [void 0];
          let m, y = g?.getPreviousSibling();
          for (; y; ) {
            const b = y;
            y = y.getPreviousSibling(), m ? m.insertBefore(b) : s.append(b), m = b;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += d;
    } else if (Rn(f))
      c += 1;
    else if (bt(f)) {
      const d = f.getChildren();
      for (const p of d) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Mt(f) && s)
          return r?.debug(`Replacing ImpliedParaNode (key: ${f.getKey()}) with ParaNode at targetIndex ${e}`), f.replace(s, !0), l = !0, !0;
        if (ye(f) && s) {
          const p = f;
          return r?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ye(f) && s)
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
  return u(_e()), l || r?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function V1(e) {
  const { style: t, code: n } = e;
  if (!t || t !== Go || !n || !wn.isValidBookCode(n))
    return;
  const r = gt(e, iA);
  return Yb(n, r);
}
function $x(e, t) {
  const { style: n } = e;
  if (!n)
    return;
  const r = gt(e, rA), i = Bs(n, r);
  if (!cs(t))
    return i;
  if (t.markerMode === "editable")
    i.append(Kt(n), ji());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Je(n) + q;
    i.append(t.hasGutterParaMarkers ? R0(s) : Fr("marker", s));
  }
  return i;
}
function W1(e, t) {
  if (!e)
    return;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e;
  if (!n)
    return;
  const o = gt(e, sA);
  let a;
  if (t.markerMode === "editable")
    a = _b(n, r, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Rd(n, c, r, i, s, o);
  }
  return a;
}
function H1(e, t) {
  if (!e)
    return;
  const { style: n, number: r, sid: i, altnumber: s, pubnumber: o } = e;
  if (!r)
    return;
  const a = gt(e, oA);
  let c;
  if (t.markerMode === "editable") {
    if (!n)
      return;
    const l = Wn(n, r);
    c = gb(r, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = np(r, l, i, s, o, a);
  }
  return c;
}
function G1(e) {
  if (!e)
    return;
  const { style: t, sid: n, eid: r, attributeOrder: i } = e;
  if (!t)
    return;
  const s = gt(e, aA);
  return Zy(t, n, r, s, i);
}
function Rx(e, t, n) {
  const r = e.insert;
  if (!r.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = r.note;
  if (!i || s == null)
    return;
  const c = gt(r.note, cA), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const d = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (ci(h.attributes)) {
        const g = so(h.attributes.char, t, Ue(h.insert), void 0, Lx(h.attributes.char, d), !1, t.markerMode === "editable");
        d.push(...g);
      } else
        d.push(Ue(h.insert));
  return mx(i, s, d, t, n, f, l).setCategory(o).setUnknownAttributes(c);
}
function Ix(e, t, n, r) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = gt(i, lA), l = vd(s, o, c), u = a?.ops ?? [];
  u.length > 0 && J1(u, t, n, r).forEach((p) => l.append(p));
  const f = e.attributes?.segment;
  return typeof f == "string" && Xt(l, oi, () => f), l;
}
function J1(e, t, n, r) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (ci(s.attributes)) {
        const o = Ue(s.insert), a = so(s.attributes.char, t, o, void 0, Lx(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Ue(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (ei("unknown", s)) {
        const o = Ix(s, t, n, r);
        o && i.push(o);
        continue;
      }
      if (ei("note", s)) {
        const o = Rx(s, t, n);
        o && i.push(o);
        continue;
      }
      r?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function Y1(e, t) {
  if (!e)
    return;
  const { marker: n } = e;
  if (!n)
    return;
  const r = Fd(n);
  return t.markerMode === "editable" && r.setMode("normal"), r;
}
function Lx(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function ff(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function so(e, t, n, r, i, s = !1, o = !1) {
  v(n) && n.getTextContentSize() === 0 && n.setTextContent(At);
  const a = () => {
    o && v(n) && n.getTextContent() !== At && n.setTextContent(q + n.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(ff), l = c[0], u = i?.[i.length - 1];
    if (D(u) && zi(l, u)) {
      if (c.length > 1) {
        const d = so(c.slice(1), t, n, void 0, void 0, !0, o);
        cu(u, d);
      } else
        n && cu(u, [n]);
      return [];
    }
    a();
    const f = c.reduceRight((d, p, h) => {
      const g = Br(p.style, gt(p, bc));
      return typeof p.cid == "string" && Xt(g, Fi, () => p.cid), r && h === c.length - 1 && Xt(g, oi, () => r), d && (D(d) && (uu(d.getMarker(), d, t, !0), lu(d, d, t, !0)), g.append(d)), g;
    }, n);
    return uu(l.style, f, t, s), lu(f, f, t, s), [f];
  } else {
    const c = ff(e), l = i?.[i.length - 1];
    if (D(l) && zi(c, l))
      return n && cu(l, [n]), [];
    a();
    const u = Br(c.style, gt(c, bc));
    return typeof c.cid == "string" && Xt(u, Fi, () => c.cid), r && Xt(u, oi, () => r), n && u.append(n), uu(c.style, u, t, s), lu(u, u, t, s), [u];
  }
}
function cu(e, t) {
  const n = e.getLastChild();
  N(n) && n.getMarkerSyntax() === "closing" || Ut(n) && n.getTextType() === "marker" && n.getTextContent() === ct(e.getMarker(), D(e.getParent())) ? t.forEach((i) => n.insertBefore(i)) : e.append(...t);
}
function lu(e, t, n, r = !1) {
  e.getUnknownAttributes()?.closed !== "false" && X1(e.getMarker(), t, n, !1, r);
}
function uu(e, t, n, r = !1) {
  let i;
  if (n?.markerMode === "editable" ? i = Kt(e, "opening", r) : n?.markerMode === "visible" && (i = Fr("marker", Je(e, r))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function X1(e, t, n, r = !1, i = !1) {
  let s;
  n?.markerMode === "editable" ? r ? s = Kt("", "selfClosing") : s = Kt(e, "closing", i) : n?.markerMode === "visible" && (s = Fr("marker", r ? ct("") : ct(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function Q1(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Ap(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function ci(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function Z1(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Fn(e, t) {
  if (e)
    for (const n of Object.keys(e)) {
      if (n === "segment" && typeof e[n] == "string") {
        const r = e[n];
        Xt(t, oi, () => r);
        continue;
      }
      if (eN(n)) {
        const r = !!e[n], i = n, s = t.hasFormat(i);
        (r && !s || !r && s) && t.toggleFormat(i);
      }
    }
}
const qx = [
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
function eN(e) {
  return qx.includes(e);
}
function tN() {
  const [e] = Se();
  return G(() => {
    const t = (n) => n instanceof KeyboardEvent && !nN(n) || !ml() ? !1 : (n instanceof Event && n.preventDefault(), !0);
    return it(
      e.registerCommand(Er, t, Qe),
      e.registerCommand(ua, t, Qe),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(nr, t, Xe),
      e.registerCommand(or, t, Xe),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(od, (n) => {
        if (!(n instanceof Event) || !(n.target instanceof Node))
          return !1;
        const r = es(n.target);
        return !r || !li(r) ? !1 : (n.preventDefault(), !0);
      }, Qe),
      e.registerCommand(Gc, t, Qe),
      e.registerCommand(rd, t, Qe),
      e.registerCommand(rc, t, Qe)
    );
  }, [e]), null;
}
function nN(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function li(e) {
  return nt(e, Pp) ?? void 0;
}
function Pp(e) {
  return rt(e) || Pb(e);
}
function ml() {
  const e = w();
  return E(e) ? li(e.anchor.getNode()) !== void 0 || li(e.focus.getNode()) !== void 0 : !1;
}
function rN(e, t, n) {
  if (e.height === 0)
    return !1;
  const r = e.height / 4;
  return t.some((i) => n === "down" ? i.top >= e.bottom - r : i.bottom <= e.top + r);
}
function iN(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(r, r.childNodes.length), rN(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function sN(e, t, n, r) {
  if (!kN(t) || iN(e, n))
    return !1;
  const i = n === "up" ? nA(t) : tA(t);
  return i && r.preventDefault(), i;
}
function oN({ viewOptions: e }) {
  const [t] = Se();
  return aN(t, e), null;
}
function aN(e, t) {
  G(() => {
    if (!e.hasNodes([Kn, Qt, Ze]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const n = (r) => {
      const i = w();
      if (!E(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (r.key === "ArrowLeft" || r.key === "ArrowRight") && r.shiftKey && !r.altKey && !r.ctrlKey && !r.metaKey) {
        const u = zg(o), f = hN(i, jg(u, r.key) ? "next" : "previous");
        return f && r.preventDefault(), f;
      }
      if (!i.isCollapsed())
        return !1;
      if (r.key === "ArrowUp" || r.key === "ArrowDown") {
        if (r.shiftKey || r.altKey || r.ctrlKey || r.metaKey)
          return !1;
        const u = r.key === "ArrowUp" ? "up" : "down";
        return sN(e, i, u, r);
      }
      if (r.key !== "ArrowLeft" && r.key !== "ArrowRight" || !o)
        return !1;
      const a = zg(o), c = r.shiftKey || r.altKey || r.ctrlKey || r.metaKey;
      let l = !1;
      return jg(a, r.key) ? l = !c && Hg(i, "next") || !c && lN(i) || yN(i) || !c && s && Wg(i, "next") : cN(a, r.key) && (l = !c && Hg(i, "previous") || !c && uN(i) || bN(i, t) || !c && s && Wg(i, "previous")), l && r.preventDefault(), l;
    };
    return e.registerCommand(Er, n, Qe);
  }, [e, t]);
}
function zg(e) {
  return e.dir || "ltr";
}
function jg(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function cN(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function df(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = On(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function lN(e) {
  const t = df(qd(e));
  if (!t)
    return !1;
  const n = e.anchor;
  return n.type === "text" && n.offset !== n.getNode().getTextContentSize() ? !1 : (cr(t, 0), !0);
}
function uN(e) {
  const t = e.anchor, n = t.getNode();
  if (t.type === "text") {
    const r = df(n.getParent());
    return !r || !n.is(r.getFirstChild()) ? !1 : t.offset === 1 ? (n.select(0, 0), !0) : t.offset !== 0 ? !1 : Vg(r);
  }
  if (t.offset === 0) {
    const r = df(n);
    return r ? Vg(r) : !1;
  }
  return !1;
}
function Vg(e) {
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
const vc = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function fN(e) {
  if (vc)
    for (const { segment: n } of vc.segment(e))
      return n.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function dN(e) {
  if (vc) {
    let r = 0;
    for (const { index: i } of vc.segment(e))
      r = i;
    return r;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), n = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (n ? 2 : 1));
}
function Dx(e) {
  for (let t = e; t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t;
}
function Kx(e) {
  return !!e && N(e) && li(e) !== void 0;
}
function Hs(e) {
  return v(e) && !e.isToken() && !Kx(e) && e.getTextContentSize() > 0;
}
function Ux(e) {
  return Zi(e) ? !0 : L(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || Kx(e)) && e.getTextContentSize() > 0 : Tn(e) ? !ze(e) : !1;
}
function Gs(e, t, n) {
  for (let r = e; r && !r.is(n); ) {
    const i = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (i)
      return i;
    r = r.getParent();
  }
}
function yl(e, t, n) {
  for (let r = e; r; ) {
    if (Ux(r))
      return r;
    if (A(r)) {
      r = (t === "next" ? r.getFirstChild() : r.getLastChild()) ?? Gs(r, t, n);
      continue;
    }
    if (Hs(r))
      return r;
    r = Gs(r, t, n);
  }
}
function Np(e, t, n, r, i) {
  return n === "element" && A(e) ? e.getChildAtIndex(r === "next" ? t : t - 1) ?? Gs(e, r, i) : n === "text" && Ux(e) && (r === "next" ? t < e.getTextContentSize() : t > 0) ? e : Gs(e, r, i);
}
function fu(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const n = Np(e.node, e.offset, e.kind, "previous", t), r = yl(n, "previous", t);
  if (!r)
    return e;
  if (Hs(r))
    return { kind: "text", node: r, offset: r.getTextContentSize() };
  const i = r.getParent();
  return i ? { kind: "element", node: i, offset: r.getIndexWithinParent() + 1 } : e;
}
function pN(e, t) {
  const n = e.getNode(), r = Dx(n);
  if (!r)
    return;
  if (e.type === "text" && Hs(n)) {
    if (t === "next" && e.offset < n.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return fu({ kind: "text", node: n, offset: 0 }, r);
  }
  const i = Np(n, e.offset, e.type, t, r), s = yl(i, t, r);
  if (!s)
    return;
  if (Hs(s)) {
    const c = s.getTextContent(), l = t === "next" ? fN(c) : dN(c);
    return fu({ kind: "text", node: s, offset: l }, r);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return fu({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, r);
}
function Bx(e, t, n) {
  const r = n === "collapse" ? e.anchor : e.focus, i = pN(r, t);
  return !i || i.node.is(r.getNode()) && i.offset === r.offset && i.kind === r.type ? !1 : n === "collapse" ? (i.kind === "element" && A(i.node) ? _p(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Wg(e, t) {
  return Bx(e, t, "collapse");
}
function hN(e, t) {
  return Bx(e, t, "extend");
}
function gN(e, t, n) {
  const r = e.getNode();
  if (e.type === "text" && Hs(r) && (t === "next" ? e.offset < r.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Np(r, e.offset, e.type, t, n);
  return yl(i, t, n) === void 0;
}
function mN(e, t) {
  const n = _e();
  for (let r = e; r; ) {
    const i = Gs(r, t, n), s = i && yl(i, t, n);
    if (!s)
      return;
    if (r = li(s), !r)
      return s;
  }
}
function Hg(e, t) {
  const n = e.anchor, r = n.getNode();
  if (li(r))
    return !1;
  const i = Dx(r);
  if (!i || !gN(n, t, i))
    return !1;
  const s = Gs(i, t, _e()), o = s && li(s);
  if (!o)
    return !1;
  const a = mN(o, t);
  if (!a)
    return !0;
  if (Hs(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Gg(e) {
  const t = e.getParent();
  if (!t)
    return;
  const n = e.getIndexWithinParent() + 1;
  _p(t, n);
}
function yN(e) {
  const t = e.anchor.getNode(), n = qd(e);
  if (L(n) && !N(n.getFirstChild())) {
    if (bt(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (n.getIsCollapsed()) {
      if (n.is(n.getParent()?.getLastChild())) {
        const i = n.getParent()?.getNextSibling();
        return i && !(St(i) && ls(i)) && i.selectStart(), !0;
      }
    } else return Ut(n.getFirstChild()) ? n.select(2, 2) : n.select(1, 1), !0;
  }
  if (bt(t) && L(n) && n.getIsCollapsed()) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : Gg(n), !0;
  }
  const r = n?.getParent();
  if (Ut(n) && L(r) && n.is(r?.getLastChild())) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : r.getIsCollapsed() ? Gg(r) : r.selectEnd(), !0;
  }
  return !1;
}
function bN(e, t) {
  const n = nk(e);
  if (Jr(n) && !n.getPreviousSibling())
    return !0;
  const { anchor: r } = e;
  if ((r.type === "element" || r.offset === 0) && Ws(n))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Ie(o) && !n)
    return !0;
  if (L(n) && n.getIsCollapsed()) {
    const c = n.getPreviousSibling();
    if (!gr(c) && !Ie(n.getParent()))
      return !1;
    const l = n.getParent();
    if (!l)
      return !1;
    const u = n.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (bt(n) && t?.noteMode === "collapsed") {
    const c = n.getLastChild();
    if (!c)
      return !1;
    const l = nt(c, (u) => L(u));
    if (L(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const f = l.getIndexWithinParent();
      return u.select(f, f), !0;
    }
  }
  const a = On(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (Ot(n)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function kN(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Oe(t) && Tn(t);
}
function xN() {
  const [e] = Se();
  return TN(e), null;
}
function TN(e) {
  G(() => {
    if (!e.hasNodes([We]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return it(
      e.registerNodeTransform(We, SN),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(We, _0),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(We, Lb),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(We, (t) => Yo(zr("char"), t)),
      e.registerNodeTransform(ot, _N)
    );
  }, [e]);
}
function Ya(e) {
  return e.getChildren().some(N);
}
function vN(e, t) {
  const n = t.getFirstChild();
  if (!N(n) || n.getMarkerSyntax() !== "opening")
    return !1;
  const r = n.getNextSibling();
  if (Hr(r)) {
    const i = r.getTextContent();
    i.startsWith(q) && (i === q ? r.remove() : r.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function CN(e, t) {
  const n = t.getLastChild(), r = e.getChildren();
  N(n) && n.getMarkerSyntax() === "closing" ? r.forEach((i) => n.insertBefore(i)) : t.append(...r), e.remove();
}
function SN(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Ya(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const n = pe(e, Fi), r = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && zi({ style: t, cid: n }, i) && Zn(r, i.getUnknownAttributes()))
    if (Ya(i)) {
      if (vN(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && zi({ style: t, cid: n }, s) && Zn(r, s.getUnknownAttributes()) && (Ya(s) ? CN(e, s) : (s.append(...e.getChildren()), e.remove()));
}
const Fx = /* @__PURE__ */ new WeakSet();
function _N(e) {
  const t = e.getParent();
  if (!D(t) || Ya(t) || Fx.has(e))
    return;
  const n = e.getTextContent();
  if (n.length < 2 || !n.includes(At))
    return;
  const r = AN(t.getKey());
  if (r === void 0) {
    t.getChildrenSize() === 1 && n.startsWith(At) && !EN(e.getKey()) && Jg(e, 0);
    return;
  }
  if (r !== e.getKey())
    return;
  const i = MN(e, n);
  i !== void 0 && Jg(e, i);
}
function MN(e, t) {
  const n = w();
  if (E(n) && n.isCollapsed() && n.anchor.key === e.getKey()) {
    const { offset: r } = n.anchor;
    if (r === t.length && t.startsWith(At))
      return 0;
    if (t[r] === At)
      return r;
  }
  if (t.startsWith(At))
    return 0;
  if (t.endsWith(At))
    return t.length - 1;
}
function Jg(e, t) {
  const n = w(), r = E(n) ? [n.anchor, n.focus].filter((a) => a.type === "text" && a.key === e.getKey()) : [], i = r.map((a) => a.offset), s = e.getTextContent(), o = e.setTextContent(s.slice(0, t) + s.slice(t + 1));
  Fx.add(o), r.forEach((a, c) => {
    const l = i[c];
    a.set(o.getKey(), l > t ? l - 1 : l, "text");
  });
}
function EN(e) {
  return Pt().getEditorState().read(() => {
    const t = Q(e);
    if (!v(t))
      return !1;
    const n = t.getTextContent();
    return n !== "" && n !== At;
  });
}
function AN(e) {
  return Pt().getEditorState().read(() => {
    const t = Q(e);
    if (!D(t))
      return;
    const n = t.getChildren().filter((i) => !Tn(i)), [r] = n;
    return n.length === 1 && v(r) && r.getTextContent() === At ? r.getKey() : null;
  });
}
function zx(e) {
  return e.replaceAll("	", " ");
}
function jx() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function Vx(e) {
  const t = () => !jx();
  return it(e.registerCommand(Ks, t, Vt), e.registerCommand(or, t, Vt));
}
const wp = (e) => {
  e.dispatchCommand(Ks, null);
}, Op = (e) => {
  e.dispatchCommand(or, null);
}, $p = (e) => {
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
      r.setData(o, zx(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(nr, s);
  });
}, Rp = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const n = new DataTransfer(), r = await navigator.clipboard.readText();
    n.setData("text/plain", zx(r));
    const i = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(nr, i);
  });
};
function PN() {
  const [e] = Se();
  return G(() => {
    const t = (n) => {
      const { key: r, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = n;
      !(Us ? s : o) || a || (!i && r.toLowerCase() === "c" ? (n.preventDefault(), wp(e)) : !i && r.toLowerCase() === "x" ? (n.preventDefault(), Op(e)) : r.toLowerCase() === "v" && (n.preventDefault(), i ? Rp(e) : $p(e)));
    };
    return it(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Vx(e),
      e.registerRootListener((n, r) => {
        r !== null && r.removeEventListener("keydown", t), n !== null && n.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function NN({ logger: e }) {
  const [t] = Se();
  return G(() => it(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Er, (n) => n.key !== "\\" && n.key !== "/" ? !1 : (n.preventDefault(), !0), vr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(nr, (n) => {
      const r = n.clipboardData?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, vr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(od, (n) => {
      const r = n.dataTransfer?.getData("text/plain");
      return !r || !r.includes("\\") && !r.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), n.preventDefault(), !0);
    }, vr)
  ), [t, e]), null;
}
const Cc = "editor-context-menu";
function pf(e) {
  return `${Cc}-item-${e}`;
}
const wN = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function ON({ index: e, isSelected: t, onClick: n, onMouseMove: r, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), P("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: pf(e), onMouseMove: r, onClick: i.isDisabled ? void 0 : n, children: P("span", { className: "text", children: i.title }) });
}
function $N({ options: e, selectedItemIndex: t, onOptionClick: n, onOptionMouseMove: r }) {
  return P("div", { className: "typeahead-popover", children: P("ul", { id: Cc, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => P(ON, { index: s, isSelected: t === s, onClick: () => n(i, s), onMouseMove: () => r(s), option: i }, `${s}-${i.title}`)) }) });
}
let RN = 0;
class yo {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, n) {
    this.key = `context-menu-option-${RN++}`, this.title = t, this.onSelect = n.onSelect.bind(this), this.isDisabled = n.isDisabled || !1;
  }
}
function IN({ options: e } = {}) {
  const [t] = Se(), [n, r] = Re(() => !t.isEditable()), [i, s] = Re({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = Re(void 0), c = ft(() => {
    const d = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new yo("Cut", {
        onSelect: () => {
          Op(t);
        },
        isDisabled: n
      }),
      new yo("Copy", {
        onSelect: () => {
          wp(t);
        }
      }),
      new yo("Paste", {
        onSelect: () => {
          $p(t);
        },
        isDisabled: n
      }),
      new yo("Paste as Plain Text", {
        onSelect: () => {
          Rp(t);
        },
        isDisabled: n
      })
    ], p = (e ?? []).map((h) => new yo(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...d, ...p];
  }, [t, n, e]), l = re(null), u = re(null), f = Pe(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  return G(() => Vx(t), [t]), G(() => {
    const d = (p) => {
      const h = p.target;
      t.getRootElement() === h || Gb(h) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
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
          if (wN.has(p.key))
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
      return d.setAttribute("aria-controls", Cc), () => {
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
    d.setAttribute("aria-activedescendant", pf(o));
    const p = document.getElementById(Cc), h = document.getElementById(pf(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), m = h.getBoundingClientRect(), y = m.top - g.top + p.scrollTop, b = m.bottom - g.top + p.scrollTop;
    y < p.scrollTop ? p.scrollTop = y : b > p.scrollTop + p.clientHeight && (p.scrollTop = b - p.clientHeight);
  }, [t, i.isOpen, o]), G(() => t.registerEditableListener((d) => {
    r(!d);
  }), [t]), Qs(() => {
    const d = l.current;
    if (!d)
      return;
    const { width: p, height: h } = d.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    d.style.left = `${g}px`, d.style.top = `${m}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? GS.createPortal(P("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: P($N, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), f());
  }, onOptionMouseMove: (d) => {
    a((p) => p === d ? p : d);
  } }) }), document.body) : null;
}
function LN(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function qN(e) {
  if (!NS(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function DN(e) {
  return Ot(e);
}
function du(e, t, n) {
  const r = es(t.node);
  if (!Tn(r) || DN(r))
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
function KN(e, t) {
  if (w())
    return !1;
  const n = e.getRootElement(), r = PS(n?.ownerDocument.defaultView ?? null);
  if (!r || r.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = r;
  if (!i || !o || !Ny(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, f;
  if (r.isCollapsed)
    u = du(e, c, qN(c)), f = u;
  else {
    const m = LN(r.getRangeAt(0), c);
    u = du(e, c, m ? "before" : "after"), f = du(e, l, m ? "after" : "before");
  }
  if (!u && !f)
    return !1;
  const d = u ?? c, p = f ?? l, h = {
    anchorNode: d.node,
    anchorOffset: d.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = wy(h, e);
  return g ? (jn(g), g.dirty = !t, t) : !1;
}
function UN() {
  const [e] = Se(), t = re(!1), n = re(!1);
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
  }, [e]), G(() => e.registerCommand(bn, () => (KN(e, t.current) && (n.current = !0), !1), Xe), [e]), null;
}
function BN() {
  const [e] = Se();
  return G(() => e.registerCommand(Er, (t) => {
    const { key: n, shiftKey: r, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Us ? i : s) || o)
      return !1;
    const a = n.toLowerCase();
    return !(a === "z" && !r) && !(a === "y" || a === "z" && r) ? !1 : (t.preventDefault(), !0);
  }, Xe), [e]), null;
}
function FN({ isEditable: e }) {
  const [t] = Se();
  return Qs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Yg(e) {
  return !!e && ma(Q(e));
}
function Ip(e) {
  const [t] = Se(), n = re(void 0), r = Pe((i) => {
    let s = !1;
    const o = w(), a = E(o) && o.isCollapsed() ? o.anchor.key : void 0, c = n.current, l = Yg(c);
    c && !l && (n.current = void 0);
    let u;
    if (i) {
      const f = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, p = ya(f, d), h = ma(p) ? p : void 0;
      if (h)
        n.current = h.getKey(), u = h.getKey();
      else {
        const g = xM();
        i.insertAfter(g), n.current = g.getKey(), u = g.getKey(), s = !0;
      }
      cr(f, d);
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
      (a || u && u !== l) && r(a) && jt($i);
    }, s = (a) => {
      if (a.getKey() !== n.current)
        return;
      const c = a.getTextContent();
      if (is(c) || !c.includes(Fs))
        return;
      const l = w(), u = E(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (TM(a), n.current = void 0, u !== void 0) {
        const f = c.slice(0, u).split(Fs).length - 1, d = Math.max(0, u - f);
        a.select(d, d);
      }
    }, o = it(t.registerCommand(bn, () => (i(), !1), Di), t.registerCommand(ad, () => {
      const a = n.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Yg(a);
      }), c && t.update(() => {
        const l = Q(a);
        v(l) && (l.remove(), jt($i));
      }), n.current = void 0, !1;
    }, Di), t.registerNodeTransform(ot, s));
    return () => {
      o(), n.current = void 0;
    };
  }, [t, e, r]), r;
}
function zN() {
  const e = w();
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, n = t.getNode(), r = L(n) ? n : n.getParent();
  if (!L(r))
    return;
  const i = BP(r);
  if (i === void 0)
    return;
  let s = r.getChildAtIndex(i - 1);
  for (; s && ma(s); )
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
function jN() {
  return Ip(zN), null;
}
function Lp(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function ws(e, ...t) {
  const n = e.registerUpdateListener(({ tags: r }) => {
    n();
    for (const i of t)
      r.delete(i);
  });
  return n;
}
function pu(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !n?.anchorNode || !t.contains(n.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = w();
    if (!E(i))
      return !1;
    const s = wy(n, e);
    return !!s && i.is(s);
  }, { editor: e }) || n.removeAllRanges();
}
function Cs(e, t) {
  let n;
  try {
    n = Pt();
  } catch {
  }
  return n === e ? t() : e.read(t);
}
function VN() {
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
  if (!Oe(i) || ya(n, t.offset))
    return;
  const s = r[t.offset];
  if (s === void 0 || Oe(s))
    return i;
}
function WN() {
  return Ip(VN), null;
}
function HN({ scripture: e, scriptureRef: t, nodeOptions: n, editorAdaptor: r, viewOptions: i, logger: s }) {
  const [o] = Se();
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
        const u = Lp(o);
        o.update(() => {
          u || jt(Qn), o.setEditorState(l), o.dispatchCommand(wS, void 0);
        }, { tag: fa });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, r, s, e, t, i]), null;
}
const hu = "caller_highlight", GN = pi(function(t, n) {
  const [r] = Se(), i = re(void 0), s = re(void 0), o = Pe(() => {
    const a = i.current, c = a === void 0 ? void 0 : r.getEditorState().read(() => {
      const u = Tr(a);
      return u ? (u.getChildren().find(Ot) ?? wt(u))?.getKey() : void 0;
    }), l = c ? r.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(hu), l?.classList.add(hu), s.current = l;
  }, [r]);
  return Fc(n, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Cs(r, () => Tr(a)?.getKey()), o();
    }
  }), [r, o]), G(() => it(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    r.registerMutationListener(Ze, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const f = l.has(fa) ? void 0 : c.read(() => lp(u)), d = f === void 0 ? void 0 : r.getEditorState().read(() => Tr(f)?.getKey());
      i.current = d !== void 0 && a.get(d) === "created" ? d : void 0;
    }, { skipInitialization: !0 }),
    r.registerUpdateListener(() => o())
  ), [r, o]), G(() => () => s.current?.classList.remove(hu), []), null;
});
function JN({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: n, logger: r }) {
  const [i] = Se();
  return YN(t, r), XN(i, e, n, r), null;
}
function YN(e, t) {
  const n = re(void 0), r = re(void 0), i = e.noteCallers, s = e.crossRefCallers;
  G(() => {
    let o = i;
    (!o || o.length <= 0) && (o = BA), n.current !== o && (n.current = o, Xg("note-callers", o, t));
  }, [t, i]), G(() => {
    let o = s;
    (!o || o.length <= 0) && (o = FA), r.current !== o && (r.current = o, Xg("cross-ref-callers", o, t));
  }, [t, s]);
}
function XN(e, t, n, r) {
  G(() => {
    if (!e.hasNodes([We, Ze, Pn]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => sw(s));
    return it(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ze, (s) => QN(s, n)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(We, ew),
      e.registerNodeTransform(ot, tw),
      // Ensure a separator after the caller.
      e.registerNodeTransform(Pn, nw),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Pn, (s, { prevEditorState: o }) => rw(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(bn, () => iw(e, t, n, r), Vt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, r, n]);
}
function QN(e, t) {
  const n = e.getChildren();
  if (!n.some((i) => Ot(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), n.length > 0) {
    const i = n[0];
    v(i) && !N(i) && i.getTextContent() !== Nt(e.getCaller()) && e.insertBefore(i);
  }
}
function Wx(e) {
  const t = e.getNextSibling();
  Cn(t) || (v(t) && !N(t) && t.getTextContent() === q ? t.replace(ji()) : e.insertAfter(ji()));
}
function ZN(e) {
  const t = e.getTextContent(), n = t.indexOf(q), r = n < 0 ? t : t.slice(0, n) + t.slice(n + 1);
  if (e.setTextContent(q), !r) {
    e.selectEnd();
    return;
  }
  const i = Ue(r);
  e.insertAfter(i), i.selectEnd();
}
function ew(e) {
  const t = e.getParentOrThrow(), n = t.getChildren(), r = n.find((s) => Ot(s));
  if (!D(e) || !L(t) || !r)
    return;
  const i = Dd(n);
  r.getPreviewText() !== i && r.setPreviewText(i), Wx(e);
}
function tw(e) {
  const t = On(e), n = t?.getChildren(), r = n?.find((o) => Ot(o));
  if (!v(e) || !L(t) || !r || !n)
    return;
  const i = e.getParent();
  if (L(i) && Cn(e) && e.getTextContent() !== q && ZN(e), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(At) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Dd(n);
  r.getPreviewText() !== s && r.setPreviewText(s);
}
function nw(e) {
  Ot(e) && Wx(e);
}
function rw(e, t) {
  for (const [n, r] of e) {
    if (r !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = Q(n), a = o?.getParent();
      return Ot(o) && L(a) && a.getCaller() === Fo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function iw(e, t, n, r) {
  if (n?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = nt(o, (c) => L(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = Q(t.current);
      c && !c.getIsCollapsed() && (r?.debug("Cursor moved away from NoteNode, collapsing it"), bo(e, t.current, r)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (L(a)) {
      r?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, bo(e, c, r);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (L(a)) {
      r?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, bo(e, c, r);
    } else if (!a) {
      const c = nt(o, (l) => L(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      bt(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        r?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, bo(e, l, r);
      }
    }
  }
  if (St(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (gr(c) && L(a)) {
      r?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, bo(e, l, r);
    }
  }
  return !1;
}
function bo(e, t, n) {
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
function sw(e) {
  const t = w();
  if (!E(t))
    return;
  const n = t.anchor, r = t.focus, i = n.getNode(), s = r.getNode();
  if (L(i) && v(s)) {
    e.preventDefault();
    const o = Ur();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), r.offset, "text"), jn(o);
  }
}
function Xg(e, t, n) {
  for (const r of document.styleSheets)
    try {
      const i = r.cssRules || r.rules;
      for (const s of i)
        if (ow(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  n?.warn(`Editor: counter style "${e}" not found.`);
}
function ow(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function rr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const r of e.getChildren()) {
    if (!N(r) || r.getMarkerSyntax() !== "opening")
      break;
    t.push(r);
  }
  const n = wt(e);
  return n && t.push(n), t.length > 0 && t.every((r) => v(r) && r.getMode() === "token") ? t : [];
}
function aw(e) {
  const t = e.getParent();
  if (L(t))
    return rr(t).some((n) => n.is(e)) ? t : void 0;
}
function xa(e) {
  const t = rr(e), n = t[t.length - 1];
  return n ? n.getIndexWithinParent() + 1 : 0;
}
function Mo(e) {
  if (e.getIsCollapsed() !== !1)
    return;
  const t = e.getLastChild();
  return N(t) && t.getMarkerSyntax() === "closing" && t.getMode() === "token" ? t : void 0;
}
function Hx(e) {
  const t = e.getNode();
  if (e.type === "text") {
    const r = t.getParent();
    if (L(r) && Mo(r)?.is(t))
      return e.offset > 0 ? r : void 0;
    if (e.offset !== 0)
      return;
    const i = t.getPreviousSibling();
    return L(i) && Mo(i) ? i : void 0;
  }
  if (L(t)) {
    const r = Mo(t);
    return r && e.offset > r.getIndexWithinParent() ? t : void 0;
  }
  if (!A(t) || e.offset === 0)
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return L(n) && Mo(n) ? n : void 0;
}
function Gx(e) {
  const t = e.getNode(), n = (i) => L(i) && rr(i).length > 0;
  if (e.type === "text") {
    if (e.offset !== t.getTextContentSize())
      return;
    const i = t.getNextSibling();
    return n(i) ? i : void 0;
  }
  if (n(t))
    return e.offset < xa(t) ? t : void 0;
  if (!A(t))
    return;
  const r = t.getChildAtIndex(e.offset);
  return n(r) ? r : void 0;
}
function Jx(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), n = aw(t);
  if (n)
    return cw(n, t, e.offset) ? void 0 : n;
}
function cw(e, t, n) {
  const r = rr(e), i = r[r.length - 1];
  return i !== void 0 && i.is(t) && n === i.getTextContentSize();
}
function lw(e) {
  const t = rr(e), n = t[t.length - 1];
  v(n) ? n.select(n.getTextContentSize(), n.getTextContentSize()) : cr(e, xa(e));
}
function uw() {
  const e = w();
  if (!E(e))
    return !1;
  if (!e.isCollapsed())
    return Xx(e);
  const t = _c(e.anchor) ?? Hx(e.anchor);
  if (t) {
    const r = fw(t);
    return e.anchor.is(r) ? !1 : (Yx(e, r), !0);
  }
  const n = Gx(e.anchor) ?? Jx(e.anchor);
  return n ? (lw(n), !0) : !1;
}
function qp(e) {
  const t = rr(e), n = t[t.length - 1];
  return v(n) ? tn(n.getKey(), n.getTextContentSize(), "text") : tn(e.getKey(), xa(e), "element");
}
function Sc(e) {
  const t = e.getLastChild();
  return N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function hf(e) {
  const t = Sc(e);
  if (t === e.getChildrenSize())
    return;
  const n = e.getChildAtIndex(t);
  return v(n) ? n : void 0;
}
function Dp(e) {
  const t = Sc(e);
  if (t > xa(e)) {
    const n = e.getChildAtIndex(t - 1), r = A(n) ? n.getLastDescendant() : n;
    if (v(r))
      return tn(r.getKey(), r.getTextContentSize(), "text");
  }
  return qp(e);
}
function fw(e) {
  const t = Mo(e);
  return t ? tn(t.getKey(), 0, "text") : Dp(e);
}
function _c(e) {
  const t = e.getNode(), n = t.getParent();
  if (L(n) && rr(n).length > 0 && hf(n)?.is(t))
    return n;
  if (e.type !== "element")
    return;
  if (L(t) && rr(t).length > 0 && hf(t))
    return e.offset > Sc(t) || e.offset === Sc(t) && e.offset > xa(t) ? t : void 0;
  if (!A(t))
    return;
  const r = t.getChildAtIndex(e.offset - 1);
  return L(r) && rr(r).length > 0 && !r.getNextSibling() ? r : void 0;
}
function Yx(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function gf(e) {
  const t = On(e);
  return t && rr(t).length > 0 ? t : void 0;
}
function dw(e) {
  for (const t of [e.anchor, e.focus]) {
    const n = gf(t.getNode()) ?? Gx(t) ?? Hx(t) ?? _c(t);
    if (n)
      return n;
  }
  for (const t of e.getNodes()) {
    const n = gf(t);
    if (n)
      return n;
  }
}
function Xx(e) {
  const t = dw(e);
  if (!t)
    return !1;
  const n = qp(t), r = Dp(t);
  let i = !1;
  for (const s of [e.anchor, e.focus]) {
    const o = s.isBefore(n) ? n : r.isBefore(s) ? r : void 0;
    !o || s.is(o) || (s.set(o.key, o.offset, o.type), i = !0);
  }
  return i;
}
function Qg(e, t) {
  const n = Ur();
  return n.anchor.set(e.key, e.offset, e.type), n.focus.set(t.key, t.offset, t.type), n.getTextContent();
}
function Zg(e, t) {
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
function em(e, t, n) {
  const r = Zg(e, t), i = Zg(e, n);
  return r !== void 0 && i !== void 0 && Math.abs(r - i) >= 1;
}
function pw(e) {
  if (e.type === "element") {
    const n = e.getNode();
    return A(n) ? n.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function Qx(e, t, n, r) {
  const i = t.anchor, s = _c(i);
  if (s) {
    const f = i.type === "text" && i.offset === 0, d = Dp(s);
    return Yx(t, d), n && f && !_c(d) ? Qx(e, t, n, r) : !0;
  }
  const o = gf(i.getNode());
  if (!o) {
    if (n)
      return !1;
    const f = pw(t.focus);
    return L(f) && rr(f).length > 0;
  }
  if (Jx(i))
    return !0;
  const a = qp(o);
  if (n) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const f = Qg(a, i);
    return f === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(f) || r === "line" && em(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = hf(o);
  if (!c)
    return !1;
  const l = tn(c.getKey(), 0, "text"), u = Qg(i, l);
  return u === "" ? !0 : r === "character" || r === "word" && /[\p{L}\p{N}]/u.test(u) || r === "line" && em(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function hw() {
  const [e] = Se();
  return G(() => {
    const t = (s) => () => {
      const o = w();
      return !E(o) || o.isCollapsed() || !Xx(o) ? !1 : s && o.isCollapsed();
    }, n = t(!1), r = t(!0), i = (s) => (o) => {
      const a = w();
      return E(a) ? a.isCollapsed() ? Qx(e, a, o, s) : r() : !1;
    };
    return it(e.registerCommand(ua, n, Xe), e.registerCommand(nr, n, Xe), e.registerCommand(Uo, n, Xe), e.registerCommand(OS, n, Xe), e.registerCommand(Gc, i("character"), Xe), e.registerCommand(rd, i("word"), Xe), e.registerCommand(rc, i("line"), Xe), e.registerCommand(Ay, r, Xe), e.registerCommand(or, r, Xe));
  }, [e]), G(() => {
    const t = () => {
      uw() && e.dispatchCommand(pd, void 0);
    };
    return it(
      e.registerCommand(bn, () => (t(), !1), Di),
      // Select-all is the rich-text plugin's `$selectAll`, confined in the same update rather than
      // after the selection change it announces, which an edit may come before.
      e.registerCommand(Oy, () => ($S(), t(), !0), Qe)
    );
  }, [e]), null;
}
function gw({ onChange: e, viewOptions: t }) {
  const [n] = Se();
  return G(() => n.registerCommand(bn, () => {
    const r = dl(t);
    return e?.(r), !1;
  }, Vt), [n, e, t]), null;
}
function mw() {
  const [e] = Se();
  return yw(e), null;
}
function yw(e) {
  G(() => {
    if (!e.hasNodes([Bt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Bt, (t) => bw(t, e));
  }, [e]);
}
function bw(e, t) {
  ef(t, e.getKey()) && Bk(e.getFirstChild()), !(!ye(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = Q(e.getKey());
    return ye(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Zx({ onStateChange: e }) {
  const [t] = Se(), [n, r] = Re(t), i = re(!1), s = re(!1), o = re(void 0), a = re(void 0), c = Pe(() => {
    const l = w();
    let u;
    if (E(l)) {
      const f = l.anchor.getNode(), d = l.focus.getNode();
      let p = f.getKey() === "root" ? f : nt(f, (y) => {
        const b = y.getParent();
        return b !== null && cd(b);
      });
      p === null && (p = f.getTopLevelElementOrThrow()), Wi(p) && (p = nt(f, ye) ?? p);
      const h = p.getKey(), g = n.getElementByKey(h), m = MM(f, d);
      if (m && eA(m) && (u = m.getMarker()), g !== null && (ye(p) || Ie(p) || Jr(p))) {
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
  return G(() => t.registerCommand(bn, (l, u) => (c(), r(u), !1), Xe), [t, c]), G(() => it(n.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), n.registerCommand(RS, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Xe), n.registerCommand(IS, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Xe)), [c, n, e]), null;
}
function eT(e) {
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
  return e ? bt(e) ? e : nt(e, (n) => bt(n)) ?? void 0 : void 0;
}
function tT(e) {
  if (!E(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const n of e.getNodes()) {
    const r = ui(n);
    r && t.add(r.getKey());
  }
  return t.size > 1;
}
function Kp(e) {
  return E(e) && e.isCollapsed() && e.anchor.type === "element" || !E(e) && !Vc(e) ? !1 : e.getNodes().some((t) => Oe(t));
}
function nT(e) {
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
function rT(e) {
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
function tm(e, t) {
  return !!mf(e, t);
}
function mf(e, t) {
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: n } = e, r = n.getNode();
  if (n.type === "element" && A(r)) {
    const s = r.getChildren(), o = t === "backward" ? n.offset - 1 : n.offset;
    if (o < 0)
      return;
    const a = s[o];
    return Oe(a) ? a : void 0;
  }
  if (t === "backward") {
    if (n.offset !== 0)
      return;
    const s = r.getPreviousSibling();
    return Oe(s) ? s : void 0;
  }
  if (n.offset !== r.getTextContentSize())
    return;
  const i = r.getNextSibling();
  return Oe(i) ? i : void 0;
}
function Mc(e, t) {
  if (!E(e))
    return !1;
  const n = ui(e.anchor.getNode());
  return n ? !!(t === "backward" ? n.getPreviousSibling() : n.getNextSibling()) : !1;
}
function Ls(e) {
  return Kp(e) || tT(e);
}
function iT(e, t) {
  if (Kp(e) || tT(e))
    return !0;
  if (!E(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return nT(e) && Mc(e, "backward") || tm(e, "backward");
    case "deleteForward":
      return rT(e) && Mc(e, "forward") || tm(e, "forward");
    case "insertText":
      return !1;
  }
}
function kw(e, t) {
  if (!(!E(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const n = mf(e, "backward");
      if (n)
        return { kind: "verse", node: n };
      if (nT(e) && Mc(e, "backward")) {
        const r = ui(e.anchor.getNode());
        if (St(r))
          return { kind: "para", node: r };
      }
      return;
    }
    if (t === "deleteForward") {
      const n = mf(e, "forward");
      if (n)
        return { kind: "verse", node: n };
      if (rT(e) && Mc(e, "forward")) {
        const i = ui(e.anchor.getNode())?.getNextSibling();
        if (St(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function nm(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Vc(e) && e.has(t.key);
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
function sT(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else A(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function xw(e) {
  const t = e.getPreviousSibling();
  if (!bt(t))
    return;
  const n = t.getLastChild(), r = e.getFirstChild(), i = xn(r), s = e.getChildren().filter((o) => !Cn(o) && !(i && o.is(r)));
  t.append(...s), e.remove(), n ? sT(n) : ls(t) || t.selectStart();
}
function oT(e) {
  return Oe(e) || at(e) ? [] : St(e) ? e.getChildren().flatMap(oT) : [e];
}
function Tw(e) {
  const t = [];
  for (const n of e) {
    const r = oT(n);
    r.length !== 0 && (St(n) && t.length > 0 && t.push(Ue(" ")), t.push(...r));
  }
  return t;
}
function rm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function vw(e) {
  if (Array.isArray(e)) return e;
}
function Cw(e, t) {
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
function Sw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _w(e, t) {
  return vw(e) || Cw(e, t) || Mw(e, t) || Sw();
}
function Mw(e, t) {
  if (e) {
    if (typeof e == "string") return rm(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rm(e, t) : void 0;
  }
}
const aT = Object.entries, im = Object.setPrototypeOf, Ew = Object.isFrozen, Aw = Object.getPrototypeOf, Pw = Object.getOwnPropertyDescriptor;
let Wt = Object.freeze, Ht = Object.seal, Ss = Object.create, cT = typeof Reflect < "u" && Reflect, yf = cT.apply, bf = cT.construct;
Wt || (Wt = function(t) {
  return t;
});
Ht || (Ht = function(t) {
  return t;
});
yf || (yf = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
bf || (bf = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const ks = Et(Array.prototype.forEach), Nw = Et(Array.prototype.lastIndexOf), sm = Et(Array.prototype.pop), xs = Et(Array.prototype.push), ww = Et(Array.prototype.splice), ti = Array.isArray, Eo = Et(String.prototype.toLowerCase), gu = Et(String.prototype.toString), om = Et(String.prototype.match), ko = Et(String.prototype.replace), am = Et(String.prototype.indexOf), Ow = Et(String.prototype.trim), $w = Et(Number.prototype.toString), Rw = Et(Boolean.prototype.toString), cm = typeof BigInt > "u" ? null : Et(BigInt.prototype.toString), lm = typeof Symbol > "u" ? null : Et(Symbol.prototype.toString), Rt = Et(Object.prototype.hasOwnProperty), xo = Et(Object.prototype.toString), $t = Et(RegExp.prototype.test), Ci = Iw(TypeError);
function Et(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return yf(e, t, r);
  };
}
function Iw(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return bf(e, n);
  };
}
function Ke(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Eo;
  if (im && im(e, null), !ti(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (Ew(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Lw(e) {
  for (let t = 0; t < e.length; t++)
    Rt(e, t) || (e[t] = null);
  return e;
}
function Jt(e) {
  const t = Ss(null);
  for (const r of aT(e)) {
    var n = _w(r, 2);
    const i = n[0], s = n[1];
    Rt(e, i) && (ti(s) ? t[i] = Lw(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = Jt(s) : t[i] = s);
  }
  return t;
}
function qw(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return $w(e);
    case "boolean":
      return Rw(e);
    case "bigint":
      return cm ? cm(e) : "0";
    case "symbol":
      return lm ? lm(e) : "Symbol()";
    case "undefined":
      return xo(e);
    case "function":
    case "object": {
      if (e === null)
        return xo(e);
      const t = e, n = Xn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : xo(r);
      }
      return xo(e);
    }
    default:
      return xo(e);
  }
}
function Xn(e, t) {
  for (; e !== null; ) {
    const r = Pw(e, t);
    if (r) {
      if (r.get)
        return Et(r.get);
      if (typeof r.value == "function")
        return Et(r.value);
    }
    e = Aw(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Dw(e) {
  try {
    return $t(e, ""), !0;
  } catch {
    return !1;
  }
}
const um = Wt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), mu = Wt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), yu = Wt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Kw = Wt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), bu = Wt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Uw = Wt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), fm = Wt(["#text"]), dm = Wt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ku = Wt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), pm = Wt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), La = Wt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Bw = Ht(/{{[\w\W]*|^[\w\W]*}}/g), Fw = Ht(/<%[\w\W]*|^[\w\W]*%>/g), zw = Ht(/\${[\w\W]*/g), jw = Ht(/^data-[\-\w.\u00B7-\uFFFF]+$/), Vw = Ht(/^aria-[\-\w]+$/), hm = Ht(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ww = Ht(/^(?:\w+script|data):/i), Hw = Ht(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Gw = Ht(/^html$/i), Jw = Ht(/^[a-z][.\w]*(-[.\w]+)+$/i), gm = Ht(/<[/\w!]/g), mm = Ht(/<[/\w]/g), Yw = Ht(/<\/no(script|embed|frames)/i), Xw = Ht(/\/>/i), An = {
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
}, Qw = function() {
  return typeof window > "u" ? null : window;
}, Zw = function(t, n) {
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
}, ym = function() {
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
}, Zr = function(t, n, r, i) {
  return Rt(t, n) && ti(t[n]) ? Ke(i.base ? Jt(i.base) : {}, t[n], i.transform) : r;
};
function lT() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qw();
  const t = (H) => lT(H);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== An.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, f = e.trustedTypes, d = a.prototype, p = Xn(d, "cloneNode"), h = Xn(d, "remove"), g = Xn(d, "nextSibling"), m = Xn(d, "childNodes"), y = Xn(d, "parentNode"), b = Xn(d, "shadowRoot"), x = Xn(d, "attributes"), S = o && o.prototype ? Xn(o.prototype, "nodeType") : null, _ = o && o.prototype ? Xn(o.prototype, "nodeName") : null, U = o && o.prototype ? Xn(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const H = n.createElement("template");
    H.content && H.content.ownerDocument && (n = H.content.ownerDocument);
  }
  let B, V = "", ne, se = !1, W = 0;
  const he = function() {
    if (W > 0)
      throw Ci('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, be = function(k) {
    he(), W++;
    try {
      return B.createHTML(k);
    } finally {
      W--;
    }
  }, He = function(k) {
    he(), W++;
    try {
      return B.createScriptURL(k);
    } finally {
      W--;
    }
  }, $ = function() {
    return se || (ne = Zw(f, i), se = !0), ne;
  }, Z = n, Te = Z.implementation, Ne = Z.createNodeIterator, $e = Z.createDocumentFragment, Gt = Z.getElementsByTagName, Sn = r.importNode;
  let Le = ym();
  t.isSupported = typeof aT == "function" && typeof y == "function" && Te && Te.createHTMLDocument !== void 0;
  const me = Bw, F = Fw, le = zw, Me = jw, Ye = Vw, ut = Ww, Tt = Hw, _n = Jw;
  let ie = hm, Ce = null;
  const Nr = Ke({}, [...um, ...mu, ...yu, ...bu, ...fm]);
  let qe = null;
  const yr = Ke({}, [...dm, ...ku, ...pm, ...La]);
  let ge = Object.seal(Ss(null, {
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
  })), zt = null, Zt = null;
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
  let j = !0, J = !0, Y = !1, ue = !0, te = !1, ee = !0, ce = !1, fe = !1, Be = null, De = null, an = !1, Mn = !1, wr = !1, bi = !1, fo = !0, hs = !1;
  const Ea = "user-content-";
  let gs = !0, O = !1, R = {}, K = null;
  const X = Ke({}, [
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
  let Ee = null;
  const Ve = Ke({}, ["audio", "video", "img", "source", "image", "track"]);
  let Fe = null;
  const Ge = Ke({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), vt = "http://www.w3.org/1998/Math/MathML", mt = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let xt = st, ki = !1, En = null;
  const Or = Ke({}, [vt, mt, st], gu), Sh = Wt(["mi", "mo", "mn", "ms", "mtext"]);
  let Dl = Ke({}, Sh);
  const _h = Wt(["annotation-xml"]);
  let Kl = Ke({}, _h);
  const sS = Ke({}, ["title", "style", "font", "a", "script"]);
  let po = null;
  const oS = ["application/xhtml+xml", "text/html"], aS = "text/html";
  let pt = null, ms = null;
  const cS = n.createElement("form"), Mh = function(k) {
    return k instanceof RegExp || k instanceof Function;
  }, Ul = function() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ms && ms === k)
      return;
    (!k || typeof k != "object") && (k = {}), k = Jt(k), po = // eslint-disable-next-line unicorn/prefer-includes
    oS.indexOf(k.PARSER_MEDIA_TYPE) === -1 ? aS : k.PARSER_MEDIA_TYPE, pt = po === "application/xhtml+xml" ? gu : Eo, Ce = Zr(k, "ALLOWED_TAGS", Nr, {
      transform: pt
    }), qe = Zr(k, "ALLOWED_ATTR", yr, {
      transform: pt
    }), En = Zr(k, "ALLOWED_NAMESPACES", Or, {
      transform: gu
    }), Fe = Zr(k, "ADD_URI_SAFE_ATTR", Ge, {
      transform: pt,
      base: Ge
    }), Ee = Zr(k, "ADD_DATA_URI_TAGS", Ve, {
      transform: pt,
      base: Ve
    }), K = Zr(k, "FORBID_CONTENTS", X, {
      transform: pt
    }), zt = Zr(k, "FORBID_TAGS", Jt({}), {
      transform: pt
    }), Zt = Zr(k, "FORBID_ATTR", Jt({}), {
      transform: pt
    }), R = Rt(k, "USE_PROFILES") ? k.USE_PROFILES && typeof k.USE_PROFILES == "object" ? Jt(k.USE_PROFILES) : k.USE_PROFILES : !1, j = k.ALLOW_ARIA_ATTR !== !1, J = k.ALLOW_DATA_ATTR !== !1, Y = k.ALLOW_UNKNOWN_PROTOCOLS || !1, ue = k.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = k.SAFE_FOR_TEMPLATES || !1, ee = k.SAFE_FOR_XML !== !1, ce = k.WHOLE_DOCUMENT || !1, Mn = k.RETURN_DOM || !1, wr = k.RETURN_DOM_FRAGMENT || !1, bi = k.RETURN_TRUSTED_TYPE || !1, an = k.FORCE_BODY || !1, fo = k.SANITIZE_DOM !== !1, hs = k.SANITIZE_NAMED_PROPS || !1, gs = k.KEEP_CONTENT !== !1, O = k.IN_PLACE || !1, ie = Dw(k.ALLOWED_URI_REGEXP) ? k.ALLOWED_URI_REGEXP : hm, xt = typeof k.NAMESPACE == "string" ? k.NAMESPACE : st, Dl = Rt(k, "MATHML_TEXT_INTEGRATION_POINTS") && k.MATHML_TEXT_INTEGRATION_POINTS && typeof k.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Jt(k.MATHML_TEXT_INTEGRATION_POINTS) : Ke({}, Sh), Kl = Rt(k, "HTML_INTEGRATION_POINTS") && k.HTML_INTEGRATION_POINTS && typeof k.HTML_INTEGRATION_POINTS == "object" ? Jt(k.HTML_INTEGRATION_POINTS) : Ke({}, _h);
    const M = Rt(k, "CUSTOM_ELEMENT_HANDLING") && k.CUSTOM_ELEMENT_HANDLING && typeof k.CUSTOM_ELEMENT_HANDLING == "object" ? Jt(k.CUSTOM_ELEMENT_HANDLING) : Ss(null);
    if (ge = Ss(null), Rt(M, "tagNameCheck") && Mh(M.tagNameCheck) && (ge.tagNameCheck = M.tagNameCheck), Rt(M, "attributeNameCheck") && Mh(M.attributeNameCheck) && (ge.attributeNameCheck = M.attributeNameCheck), Rt(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (ge.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), Ht(ge), te && (J = !1), wr && (Mn = !0), R && (Ce = Ke({}, fm), qe = Ss(null), R.html === !0 && (Ke(Ce, um), Ke(qe, dm)), R.svg === !0 && (Ke(Ce, mu), Ke(qe, ku), Ke(qe, La)), R.svgFilters === !0 && (Ke(Ce, yu), Ke(qe, ku), Ke(qe, La)), R.mathMl === !0 && (Ke(Ce, bu), Ke(qe, pm), Ke(qe, La))), I.tagCheck = null, I.attributeCheck = null, Rt(k, "ADD_TAGS") && (typeof k.ADD_TAGS == "function" ? I.tagCheck = k.ADD_TAGS : ti(k.ADD_TAGS) && (Ce === Nr && (Ce = Jt(Ce)), Ke(Ce, k.ADD_TAGS, pt))), Rt(k, "ADD_ATTR") && (typeof k.ADD_ATTR == "function" ? I.attributeCheck = k.ADD_ATTR : ti(k.ADD_ATTR) && (qe === yr && (qe = Jt(qe)), Ke(qe, k.ADD_ATTR, pt))), Rt(k, "ADD_URI_SAFE_ATTR") && ti(k.ADD_URI_SAFE_ATTR) && Ke(Fe, k.ADD_URI_SAFE_ATTR, pt), Rt(k, "FORBID_CONTENTS") && ti(k.FORBID_CONTENTS) && (K === X && (K = Jt(K)), Ke(K, k.FORBID_CONTENTS, pt)), Rt(k, "ADD_FORBID_CONTENTS") && ti(k.ADD_FORBID_CONTENTS) && (K === X && (K = Jt(K)), Ke(K, k.ADD_FORBID_CONTENTS, pt)), gs && (Ce["#text"] = !0), ce && Ke(Ce, ["html", "head", "body"]), Ce.table && (Ke(Ce, ["tbody"]), delete zt.tbody), k.TRUSTED_TYPES_POLICY) {
      if (typeof k.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ci('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof k.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ci('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = B;
      B = k.TRUSTED_TYPES_POLICY;
      try {
        V = be("");
      } catch (oe) {
        throw B = z, oe;
      }
    } else k.TRUSTED_TYPES_POLICY === null ? (B = void 0, V = "") : (B === void 0 && (B = $()), B && typeof V == "string" && (V = be("")));
    Wt && Wt(k), ms = k;
  }, Eh = Ke({}, [...mu, ...yu, ...Kw]), Ah = Ke({}, [...bu, ...Uw]), lS = function(k, M, z) {
    return M.namespaceURI === st ? k === "svg" : M.namespaceURI === vt ? k === "svg" && (z === "annotation-xml" || Dl[z]) : !!Eh[k];
  }, uS = function(k, M, z) {
    return M.namespaceURI === st ? k === "math" : M.namespaceURI === mt ? k === "math" && Kl[z] : !!Ah[k];
  }, fS = function(k, M, z) {
    return M.namespaceURI === mt && !Kl[z] || M.namespaceURI === vt && !Dl[z] ? !1 : !Ah[k] && (sS[k] || !Eh[k]);
  }, dS = function(k) {
    let M = y(k);
    (!M || !M.tagName) && (M = {
      namespaceURI: xt,
      tagName: "template"
    });
    const z = Eo(k.tagName), oe = Eo(M.tagName);
    return En[k.namespaceURI] ? k.namespaceURI === mt ? lS(z, M, oe) : k.namespaceURI === vt ? uS(z, M, oe) : k.namespaceURI === st ? fS(z, M, oe) : !!(po === "application/xhtml+xml" && En[k.namespaceURI]) : !1;
  }, Xr = function(k) {
    xs(t.removed, {
      element: k
    });
    try {
      y(k).removeChild(k);
    } catch {
      if (h(k), !y(k))
        throw Ci("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Aa = function(k) {
    ho(k);
    const M = m(k);
    if (M) {
      const oe = [];
      ks(M, (de) => {
        xs(oe, de);
      }), ks(oe, (de) => {
        try {
          h(de);
        } catch {
        }
      });
    }
    const z = x(k);
    if (z)
      for (let oe = z.length - 1; oe >= 0; --oe) {
        const de = z[oe], ve = de && de.name;
        if (typeof ve == "string")
          try {
            k.removeAttribute(ve);
          } catch {
          }
      }
  }, xi = function(k, M) {
    try {
      xs(t.removed, {
        attribute: M.getAttributeNode(k),
        from: M
      });
    } catch {
      xs(t.removed, {
        attribute: null,
        from: M
      });
    }
    if (M.removeAttribute(k), k === "is")
      if (Mn || wr)
        try {
          Xr(M);
        } catch {
        }
      else
        try {
          M.setAttribute(k, "");
        } catch {
        }
  }, pS = function(k) {
    const M = x(k);
    if (M)
      for (let z = M.length - 1; z >= 0; --z) {
        const oe = M[z], de = oe && oe.name;
        if (!(typeof de != "string" || qe[pt(de)]))
          try {
            k.removeAttribute(de);
          } catch {
          }
      }
  }, ho = function(k) {
    const M = [k];
    for (; M.length > 0; ) {
      const z = M.pop();
      (S ? S(z) : z.nodeType) === An.element && pS(z);
      const de = m(z);
      if (de)
        for (let ve = de.length - 1; ve >= 0; --ve)
          M.push(de[ve]);
    }
  }, hS = function(k) {
    if (!ee)
      return;
    const M = [k];
    for (; M.length > 0; ) {
      const z = M.pop(), oe = S ? S(z) : z.nodeType;
      if (oe === An.processingInstruction || oe === An.comment && $t(mm, z.data)) {
        try {
          h(z);
        } catch {
        }
        continue;
      }
      if (oe === An.element) {
        const ve = z, et = pt(_ ? _(z) : z.nodeName);
        try {
          ve.hasAttribute && ve.hasAttribute("patchsrc") && ve.removeAttribute("patchsrc"), ve.hasAttribute && ve.hasAttribute("for") && et !== "label" && et !== "output" && ve.removeAttribute("for");
        } catch {
        }
      }
      const de = m(z);
      if (de)
        for (let ve = de.length - 1; ve >= 0; --ve)
          M.push(de[ve]);
    }
  }, Ph = function(k) {
    let M = null, z = null;
    if (an)
      k = "<remove></remove>" + k;
    else {
      const ve = om(k, /^[\r\n\t ]+/);
      z = ve && ve[0];
    }
    po === "application/xhtml+xml" && xt === st && (k = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + k + "</body></html>");
    const oe = B ? be(k) : k;
    if (xt === st)
      try {
        M = new u().parseFromString(oe, po);
      } catch {
      }
    if (!M || !M.documentElement) {
      M = Te.createDocument(xt, "template", null);
      try {
        M.documentElement.innerHTML = ki ? V : oe;
      } catch {
      }
    }
    const de = M.body || M.documentElement;
    return k && z && de.insertBefore(n.createTextNode(z), de.childNodes[0] || null), xt === st ? Gt.call(M, ce ? "html" : "body")[0] : ce ? M.documentElement : de;
  }, Nh = function(k) {
    const M = U ? U(k) : k.ownerDocument;
    return Ne.call(
      M || k,
      k,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Pa = function(k) {
    return k = ko(k, me, " "), k = ko(k, F, " "), k = ko(k, le, " "), k;
  }, Bl = function(k) {
    var M;
    k.normalize();
    const z = U ? U(k) : k.ownerDocument, oe = Ne.call(
      z || k,
      k,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let de = oe.nextNode();
    for (; de; )
      de.data = Pa(de.data), de = oe.nextNode();
    const ve = (M = k.querySelectorAll) === null || M === void 0 ? void 0 : M.call(k, "template");
    ve && ks(ve, (et) => {
      ys(et.content) && Bl(et.content);
    });
  }, Na = function(k) {
    const M = _ ? _(k) : null;
    return typeof M != "string" || pt(M) !== "form" ? !1 : typeof k.nodeName != "string" || typeof k.textContent != "string" || typeof k.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    k.attributes !== x(k) || typeof k.removeAttribute != "function" || typeof k.setAttribute != "function" || typeof k.namespaceURI != "string" || typeof k.insertBefore != "function" || typeof k.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    k.nodeType !== S(k) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    k.childNodes !== m(k);
  }, ys = function(k) {
    if (!S || typeof k != "object" || k === null)
      return !1;
    try {
      return S(k) === An.documentFragment;
    } catch {
      return !1;
    }
  }, go = function(k) {
    if (!S || typeof k != "object" || k === null)
      return !1;
    try {
      return typeof S(k) == "number";
    } catch {
      return !1;
    }
  };
  function br(H, k, M) {
    H.length !== 0 && ks(H, (z) => {
      z.call(t, k, M, ms);
    });
  }
  const gS = function(k, M) {
    return !!(ee && k.hasChildNodes() && !go(k.firstElementChild) && $t(gm, k.textContent) && $t(gm, k.innerHTML) || ee && k.namespaceURI === st && M === "style" && go(k.firstElementChild) || k.nodeType === An.processingInstruction || ee && k.nodeType === An.comment && $t(mm, k.data));
  }, mS = function(k, M, z) {
    if (!zt[M] && Rh(M) && (ge.tagNameCheck instanceof RegExp && $t(ge.tagNameCheck, M) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(M)))
      return !1;
    if (gs && !K[M]) {
      const oe = y(k), de = m(k);
      if (de && oe) {
        const ve = de.length;
        for (let et = ve - 1; et >= 0; --et) {
          const ht = k === z ? p(de[et], !0) : de[et];
          oe.insertBefore(ht, g(k));
        }
      }
    }
    return Xr(k), !0;
  }, wh = function(k, M, z, oe) {
    return k.length === 0 ? M : M === z || M === oe ? Jt(M) : M;
  }, Oh = function(k, M) {
    if (br(Le.beforeSanitizeElements, k, null), k !== M && y(k) === null)
      return O && ho(k), !0;
    if (Na(k))
      return Xr(k), !0;
    const z = pt(_ ? _(k) : k.nodeName);
    if (Ce = wh(Le.uponSanitizeElement, Ce, Nr, Be), br(Le.uponSanitizeElement, k, {
      tagName: z,
      allowedTags: Ce
    }), k !== M && y(k) === null)
      return O && ho(k), !0;
    if (gS(k, z))
      return Xr(k), !0;
    if (zt[z] || !(I.tagCheck instanceof Function && I.tagCheck(z)) && !Ce[z]) {
      const de = mS(k, z, M);
      return de === !1 && br(Le.afterSanitizeElements, k, null), de;
    }
    if ((S ? S(k) : k.nodeType) === An.element && !dS(k) || (z === "noscript" || z === "noembed" || z === "noframes") && $t(Yw, k.innerHTML))
      return Xr(k), !0;
    if (te && k.nodeType === An.text) {
      const de = Pa(k.textContent);
      k.textContent !== de && (xs(t.removed, {
        element: k.cloneNode()
      }), k.textContent = de);
    }
    return br(Le.afterSanitizeElements, k, null), !1;
  }, $h = function(k, M, z) {
    if (Zt[M] || ee && M === "patchsrc" || ee && M === "for" && k !== "label" && k !== "output" || fo && (M === "id" || M === "name") && (z in n || z in cS))
      return !1;
    const oe = qe[M] || I.attributeCheck instanceof Function && I.attributeCheck(M, k);
    if (!(J && $t(Me, M))) {
      if (!(j && $t(Ye, M))) {
        if (oe) {
          if (!Fe[M]) {
            if (!$t(ie, ko(z, Tt, ""))) {
              if (!((M === "src" || M === "xlink:href" || M === "href") && k !== "script" && am(z, "data:") === 0 && Ee[k])) {
                if (!(Y && !$t(ut, ko(z, Tt, "")))) {
                  if (z)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Rh(k) && (ge.tagNameCheck instanceof RegExp && $t(ge.tagNameCheck, k) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(k)) && (ge.attributeNameCheck instanceof RegExp && $t(ge.attributeNameCheck, M) || ge.attributeNameCheck instanceof Function && ge.attributeNameCheck(M, k)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          M === "is" && ge.allowCustomizedBuiltInElements && (ge.tagNameCheck instanceof RegExp && $t(ge.tagNameCheck, z) || ge.tagNameCheck instanceof Function && ge.tagNameCheck(z)))
        ) return !1;
      }
    }
    return !0;
  }, yS = Ke({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Rh = function(k) {
    return !yS[Eo(k)] && $t(_n, k);
  }, bS = function(k, M, z, oe) {
    if (B && typeof f == "object" && typeof f.getAttributeType == "function" && !z)
      switch (f.getAttributeType(k, M)) {
        case "TrustedHTML":
          return be(oe);
        case "TrustedScriptURL":
          return He(oe);
      }
    return oe;
  }, kS = function(k, M, z, oe) {
    try {
      z ? k.setAttributeNS(z, M, oe) : k.setAttribute(M, oe), Na(k) ? Xr(k) : sm(t.removed);
    } catch {
      xi(M, k);
    }
  }, Ih = function(k) {
    br(Le.beforeSanitizeAttributes, k, null);
    const M = k.attributes;
    if (!M || Na(k))
      return;
    qe = wh(Le.uponSanitizeAttribute, qe, yr, De);
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: qe,
      forceKeepAttr: void 0
    };
    let oe = M.length;
    const de = pt(k.nodeName);
    for (; oe--; ) {
      const ve = M[oe], et = ve.name, ht = ve.namespaceURI, cn = ve.value, ln = pt(et), zl = cn;
      let en = et === "value" ? zl : Ow(zl);
      if (z.attrName = ln, z.attrValue = en, z.keepAttr = !0, z.forceKeepAttr = void 0, br(Le.uponSanitizeAttribute, k, z), en = z.attrValue, hs && (ln === "id" || ln === "name") && am(en, Ea) !== 0 && (xi(et, k), en = Ea + en), ee && $t(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, en)) {
        xi(et, k);
        continue;
      }
      if (ln === "attributename" && om(en, "href")) {
        xi(et, k);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          xi(et, k);
          continue;
        }
        if (!ue && $t(Xw, en)) {
          xi(et, k);
          continue;
        }
        if (te && (en = Pa(en)), !$h(de, ln, en)) {
          xi(et, k);
          continue;
        }
        en = bS(de, ln, ht, en), en !== zl && kS(k, et, ht, en);
      }
    }
    br(Le.afterSanitizeAttributes, k, null);
  }, wa = function(k) {
    let M = null;
    const z = Nh(k);
    for (br(Le.beforeSanitizeShadowDOM, k, null); M = z.nextNode(); )
      if (br(Le.uponSanitizeShadowNode, M, null), Oh(M, k), Ih(M), ys(M.content) && wa(M.content), (S ? S(M) : M.nodeType) === An.element) {
        const de = b(M);
        ys(de) && (Fl(de), wa(de));
      }
    br(Le.afterSanitizeShadowDOM, k, null);
  }, Fl = function(k) {
    const M = [{
      node: k,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const z = M.pop();
      if (z.shadow) {
        wa(z.shadow);
        continue;
      }
      const oe = z.node, ve = (S ? S(oe) : oe.nodeType) === An.element, et = m(oe);
      if (et)
        for (let ht = et.length - 1; ht >= 0; --ht)
          M.push({
            node: et[ht],
            shadow: null
          });
      if (ve) {
        const ht = _ ? _(oe) : null;
        if (typeof ht == "string" && pt(ht) === "template") {
          const cn = oe.content;
          ys(cn) && M.push({
            node: cn,
            shadow: null
          });
        }
      }
      if (ve) {
        const ht = b(oe);
        ys(ht) && M.push({
          node: null,
          shadow: ht
        }, {
          node: ht,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(H) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, z = null, oe = null, de = null;
    if (ki = !H, ki && (H = "<!-->"), typeof H != "string" && !go(H) && (H = qw(H), typeof H != "string"))
      throw Ci("dirty is not a string, aborting");
    if (!t.isSupported)
      return H;
    fe ? (Ce = Be, qe = De) : Ul(k), (Le.uponSanitizeElement.length > 0 || Le.uponSanitizeAttribute.length > 0) && (Ce = Jt(Ce)), Le.uponSanitizeAttribute.length > 0 && (qe = Jt(qe)), t.removed = [];
    const ve = O && typeof H != "string" && go(H);
    if (ve) {
      hS(H);
      const cn = _ ? _(H) : H.nodeName;
      if (typeof cn == "string") {
        const ln = pt(cn);
        if (!Ce[ln] || zt[ln])
          throw Aa(H), Ci("root node is forbidden and cannot be sanitized in-place");
      }
      if (Na(H))
        throw Aa(H), Ci("root node is clobbered and cannot be sanitized in-place");
      try {
        Fl(H);
      } catch (ln) {
        throw Aa(H), ln;
      }
    } else if (go(H))
      M = Ph("<!---->"), z = M.ownerDocument.importNode(H, !0), z.nodeType === An.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? M = z : M.appendChild(z), Fl(z);
    else {
      if (!Mn && !te && !ce && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return B && bi ? be(H) : H;
      if (M = Ph(H), !M)
        return Mn ? null : bi ? V : "";
    }
    M && an && Xr(M.firstChild);
    const et = ve ? H : M;
    try {
      const cn = Nh(et);
      for (; oe = cn.nextNode(); )
        Oh(oe, et), Ih(oe), ys(oe.content) && wa(oe.content);
    } catch (cn) {
      throw ve && (Aa(H), ks(t.removed, (ln) => {
        ln.element && ho(ln.element);
      })), cn;
    }
    if (ve)
      return ks(t.removed, (cn) => {
        cn.element && ho(cn.element);
      }), te && Bl(H), H;
    if (Mn) {
      if (te && Bl(M), wr)
        for (de = $e.call(M.ownerDocument); M.firstChild; )
          de.appendChild(M.firstChild);
      else
        de = M;
      return (qe.shadowroot || qe.shadowrootmode) && (de = Sn.call(r, de, !0)), de;
    }
    let ht = ce ? M.outerHTML : M.innerHTML;
    return ce && Ce["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && $t(Gw, M.ownerDocument.doctype.name) && (ht = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + ht), te && (ht = Pa(ht)), B && bi ? be(ht) : ht;
  }, t.setConfig = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ul(H), fe = !0, Be = Ce, De = qe;
  }, t.clearConfig = function() {
    ms = null, fe = !1, Be = null, De = null, B = ne, V = "";
  }, t.isValidAttribute = function(H, k, M) {
    ms || Ul({});
    const z = pt(H), oe = pt(k);
    return $h(z, oe, M);
  }, t.addHook = function(H, k) {
    typeof k == "function" && Rt(Le, H) && xs(Le[H], k);
  }, t.removeHook = function(H, k) {
    if (Rt(Le, H)) {
      if (k !== void 0) {
        const M = Nw(Le[H], k);
        return M === -1 ? void 0 : ww(Le[H], M, 1)[0];
      }
      return sm(Le[H]);
    }
  }, t.removeHooks = function(H) {
    Rt(Le, H) && (Le[H] = []);
  }, t.removeAllHooks = function() {
    Le = ym();
  }, t;
}
var eO = lT();
function tO({ structureProtectionMode: e = "off" }) {
  const [t] = Se(), n = re(void 0), [r, i] = Re(void 0), s = Pe((o) => {
    n.current = o, i(o);
  }, []);
  return G(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = eT(p);
      if (!h)
        return !1;
      const g = w();
      return e === "protected" ? g && iT(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = w(), m = n.current;
      if (m && g && nm(g, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const b = Q(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (b) {
            const x = b.getParent(), S = b.getPreviousSibling(), _ = b.getNextSibling();
            b.remove(), S ? sT(S) : _ && v(_) ? _.select(0, 0) : x?.selectStart();
          }
        } else m.kind === "selection" ? E(g) && (vp(g), g.removeText()) : St(b) && xw(b);
        return !0;
      }
      if (!g)
        return !1;
      const y = kw(g, p);
      if (y) {
        if (y.kind === "verse") {
          const b = $y();
          b.add(y.node.getKey()), jn(b);
        } else {
          const b = Ur();
          b.anchor.set(y.node.getKey(), 0, "element"), b.focus.set(y.node.getKey(), y.node.getChildrenSize(), "element"), jn(b);
        }
        return s({ key: y.node.getKey(), kind: y.kind, intent: p }), h.preventDefault(), !0;
      }
      if (E(g) && !g.isCollapsed() && Kp(g)) {
        const b = g.getNodes().filter(Oe).map((_) => _.getKey()), { anchor: x, focus: S } = g;
        return s({
          kind: "selection",
          intent: p,
          key: b[0],
          anchor: { key: x.key, offset: x.offset, type: x.type },
          focus: { key: S.key, offset: S.offset, type: S.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return !h || !Ls(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = eO.sanitize(p), m = new DOMParser().parseFromString(g, "text/html"), y = Tw(r_(t, m)), b = w();
      return E(b) && b.insertNodes(y), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && Ls(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, f = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && Ls(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, d = () => {
      const p = n.current;
      p && t.getEditorState().read(() => {
        nm(w(), p) || s(void 0);
      });
    };
    return it(
      t.registerCommand(Er, o, Qe),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(or, c, Xe),
      t.registerCommand(nr, u, Qe),
      t.registerCommand(LS, c, Qe),
      t.registerCommand(od, f, Qe),
      t.registerCommand(ua, c, Qe),
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
const YD = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function nO({ textDirection: e }) {
  const [t] = Se();
  return rO(t, e), null;
}
function rO(e, t) {
  G(() => (bm(e, t), e.registerUpdateListener(({ dirtyElements: n }) => {
    n.size > 0 && bm(e, t);
  })), [e, t]);
}
function bm(e, t) {
  if (t === "auto")
    return;
  const n = e.getRootElement();
  n && (n.dir = t);
  const r = e._config.theme.placeholder, i = document.getElementsByClassName(r)[0];
  i && (i.dir = t);
}
function iO() {
  const [e] = Se();
  return sO(e), null;
}
function sO(e) {
  G(() => {
    if (!e.hasNodes([We, Qt, Ze, ot, qt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return it(
      e.registerNodeTransform(ot, oO),
      e.registerNodeTransform(ot, (t) => aO(t, e)),
      e.registerNodeTransform(qt, km),
      e.registerNodeTransform(Qt, km),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(qt, (t) => {
        Yo(zr("va"), t), Yo(zr("vp"), t);
      })
    );
  }, [e]);
}
function oO(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), n = e.getNextSibling(), r = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || L(n) || D(r) || D(n) || ae(r) || ae(n) || rt(r) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  rt(n) && n.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  pe(e, ke) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  je(r))
    return;
  if (Oe(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  Oe(n) && rp(e);
}
function aO(e, t) {
  const n = e.getParent();
  !rt(n) || !e.isAttached() || qS(za) || ef(t, e.getKey()) && !ef(t, n.getKey()) && n.insertAfter(e);
}
function km(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ae(t); )
    t = t.getLastChild();
  (D(t) || gr(e) && v(t) && ae(t.getParent()) && !cO(t)) && e.insertBefore(Ue(" "));
}
function cO(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith(q);
}
function bl(e) {
  if (!L(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !ma(i)))
      return;
    const r = t.getParent();
    if (!r)
      return;
    if (!A(r) || !r.isInline())
      return e;
    t = r;
  }
}
function lO(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (A(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function uO() {
  const e = w();
  if (!(!E(e) || !e.isCollapsed()))
    return bl(lO(e.anchor));
}
function fO(e) {
  const t = w();
  let n;
  return E(t) ? t.isCollapsed() && (n = t.anchor.getNode()) : t || (n = uT(e.target)), n ? bl(nt(n, L)) : void 0;
}
function uT(e) {
  const t = DS(e)?.anchorNode;
  if (Py(t))
    return es(t) ?? void 0;
}
function dO(e) {
  if (w())
    return;
  const t = uT(e);
  return t ? bl(nt(t, L)) : void 0;
}
function xm(e) {
  const t = nt(e.getNode(), L);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function pO() {
  const e = w();
  if (!E(e) || e.isCollapsed())
    return !1;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], r = xm(t), i = xm(n);
  if (r && i && r.is(i))
    return !1;
  let s = !1;
  const o = r?.getParent();
  r && o && (t.set(o.getKey(), r.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (n.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const hO = 500;
function gO(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function mO() {
  const e = w();
  if (!E(e) || e.isCollapsed())
    return;
  const [t, n] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || n.type !== "element" || t.key !== n.key || n.offset !== t.offset + 1)
    return;
  const r = t.getNode();
  if (A(r))
    return bl(r.getChildAtIndex(t.offset));
}
function yO() {
  const [e] = Se(), t = Ip(uO), n = re(void 0);
  return G(() => {
    const r = (i) => {
      t(i) && jt($i);
    };
    return it(e.registerCommand(
      Er,
      (i) => (n.current = gO(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      Xe
    ), e.registerCommand(bn, () => {
      if (n.current !== void 0 && performance.now() - n.current < hO) {
        const o = mO();
        if (o)
          return r(o), !1;
      }
      if (pO())
        return jt($i), ws(e, $i), !1;
      const s = dO(e.getRootElement());
      return s && r(s), !1;
    }, Di), e.registerCommand(Hc, (i) => {
      const s = fO(i);
      return s && r(s), !1;
    }, Di));
  }, [e, t]), null;
}
function bO({ trigger: e, scriptureReference: t, contextMarker: n, getMarkerAction: r }) {
  const { markersMenuItems: i } = o1({
    scriptureReference: t,
    contextMarker: n,
    getMarkerAction: r
  });
  return P(s1, { trigger: e, items: i });
}
function kO({ trigger: e, scrRef: t, contextMarker: n, getMarkerAction: r, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = ft(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? P(vO, { trigger: e, harness: i }) : P(bO, { trigger: e, scriptureReference: u, contextMarker: n, getMarkerAction: r });
}
const xO = [" ", "*"];
function TO(e, t) {
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
function vO({ trigger: e, harness: t }) {
  const [n] = Se(), [r, i] = Re(void 0), s = re({ query: "", options: [] }), o = re(0), a = Pe((d, p, h) => {
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
  G(() => it(n.registerCommand(Er, (d) => {
    if (r) {
      if ((d.key === "Enter" || d.key === "Tab") && s.current.options.length === 0)
        return d.preventDefault(), d.stopPropagation(), !0;
      if (d.key === "*" && r.trigger === "backslash")
        return d.preventDefault(), d.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (d.key === e && r.trigger === "backslash" && !r.hasTextSelection) {
        d.preventDefault(), d.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, r.items, !1), Ry(() => {
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
  }, Qe), n.registerCommand(Iy, (d) => {
    if (r || d === null || d.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (d.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, vr)), [n, e, t, r, a]);
  const c = Pe(() => i(void 0), []), l = Pe((d, p) => {
    s.current = { query: d, options: p };
  }, []), u = Pe((d) => {
    const { markerMenuItem: p, applyOpts: h } = d;
    t.apply(p, h);
  }, [t]), f = ft(() => r?.items.map((d) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    TO(d, { trigger: r.trigger, literalPrefixLanded: !1 })
  )), [r]);
  return r && P(xx, { isOpen: !0, children: ({ placement: d }) => P(
    Cx,
    { options: f ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: d === "top-start", menuOpenKey: e, passthroughKeys: r.trigger === "backslash" ? xO : void 0 },
    r.session
  ) });
}
function CO(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (n) => q.repeat(n.length));
}
function Tm(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
let Ec;
function SO(e) {
  e && (Ec = e);
}
function _s(e) {
  return dt(e);
}
function _O(e, t) {
  return e.isEmpty() ? Ey : fT(e.toJSON(), t);
}
function fT(e, t) {
  if (!e.root || !e.root.children) return;
  const n = e.root.children;
  if (n.length === 1 && Zc(n[0]) && (!n[0].children || n[0].children.length === 0))
    return Ey;
  if (n.some(IE)) {
    Ec?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const r = VO(n, t);
  return r ? { type: sr, version: ir, content: r } : void 0;
}
function MO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), lt({
    type: n,
    marker: r,
    code: s,
    ...i,
    content: t
  });
}
function EO(e) {
  const { marker: t, number: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return lt({
    type: vn.getType(),
    marker: t,
    number: n,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function AO(e, t) {
  const { marker: n, sid: r, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = rk(n, a, c), lt({
    type: vn.getType(),
    marker: n,
    number: c,
    sid: r,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function PO(e) {
  const { marker: t, sid: n, altnumber: r, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = rk(t, o, a), lt({
    type: qt.getType(),
    marker: t,
    number: a,
    sid: n,
    altnumber: r,
    pubnumber: i,
    ...s
  });
}
function NO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return lt({
    type: n,
    marker: r === "" ? void 0 : r,
    ...i,
    content: t
  });
}
function wO(e, t) {
  const { type: n, marker: r, unknownAttributes: i } = e;
  return lt({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function OO(e, t) {
  const { unknownAttributes: n } = e;
  return lt({ type: Eb, ...n, content: t });
}
function $O(e, t) {
  const { marker: n, unknownAttributes: r } = e;
  return lt({ type: Ek, marker: n, ...r, content: t });
}
function RO(e, t) {
  const { marker: n, align: r, colspan: i, unknownAttributes: s } = e;
  return lt({
    type: Nk,
    marker: n,
    align: r,
    colspan: i,
    ...s,
    content: t
  });
}
function kf(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const n = t.replace(/^ +/, "");
  return n ? [n, ...e.slice(1)] : e.slice(1);
}
function IO(e) {
  return e.flatMap((t, n) => {
    const r = e[n - 1];
    if (typeof t != "string" || !LO(r)) return [t];
    const i = t.replace(/^ +/, "");
    return i ? [i] : [];
  });
}
function LO(e) {
  return typeof e == "object" && e.type === qt.getType() && e.altnumber === void 0 && e.pubnumber === void 0;
}
function qO(e, t) {
  const { type: n, marker: r, caller: i, category: s, unknownAttributes: o } = e;
  return lt({
    type: n,
    marker: r,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Ms(e) {
  const { type: t, marker: n, sid: r, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return lt({
    type: t,
    marker: n === "" ? void 0 : n,
    ...mb({ sid: r, eid: i, ...s }, o)
  });
}
function DO(e) {
  return e.text;
}
function KO(e, t) {
  const { tag: n, marker: r, unknownAttributes: i } = e;
  return lt({
    type: n,
    marker: r,
    ...i,
    content: t
  });
}
function UO(e) {
  const { marker: t } = e;
  return {
    type: lc,
    marker: t === "" ? void 0 : t
  };
}
function Xa(e, t) {
  const n = e[e.length - 1];
  n && typeof n == "string" ? e[e.length - 1] = n + t : e.push(t);
}
function dT(e) {
  return Bi(e) && e.typedIDs[It] !== void 0;
}
function BO(e, t, n, r, i) {
  const s = ar.getType(), o = t.filter((l) => !n.includes(l));
  if (n.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Ms({
      type: s,
      marker: Rs,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Ms({
      type: s,
      marker: Ki,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Ms({
      type: s,
      marker: Ki
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Ms({
      type: s,
      marker: Rs
    });
    i.push(l);
  }
  !dT(r) && t.forEach((l) => {
    const u = Ms({
      type: s,
      marker: Rs,
      eid: l
    });
    i.push(u);
  });
}
function xf(e, t, n, r) {
  if (!r) return !1;
  let i = t > 0 ? e[t - 1] : n;
  for (; i && Bi(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return !to(i) || i.markerSyntax !== "opening" ? !1 : i.marker === r.marker ? !0 : r.children.some(
    (s) => pb(s) && s.marker === i.marker
  );
}
function FO(e, t, n, r, i) {
  const s = e[t];
  return !jr(s) || s.text !== q || !(i || Bi(e[t - 1]) || Bi(e[t + 1])) || s[Kr]?.textType !== void 0 || xf(e, t, n, r) ? !1 : !r || pT(r.children, s);
}
function pT(e, t) {
  return e.some((n) => n === t ? !1 : Bi(n) ? pT(n.children, t) : to(n) ? !1 : jr(n) ? n[Kr]?.textType === void 0 && n.text !== "" && n.text !== q && !is(n.text) : "children" in n && n.type !== Pr.getType());
}
function zO(e) {
  let t = e;
  for (; Bi(t); ) t = t.children[0];
  return t;
}
function jO(e, t) {
  let n = 0;
  for (; n < e.length; ) {
    const s = e[n];
    if (!to(s) || s.markerSyntax !== "opening") break;
    n++;
  }
  const r = zO(e[n]);
  return jr(r) ? r.text === Nt(t) ? { node: r, caller: t } : Math.floor(r.detail / Yy) % 2 === 1 ? { node: r, caller: t } : void 0 : void 0;
}
function Bn(e, t, n, r, i, s = !1) {
  const o = [];
  let a, c = [];
  e.forEach((u, f) => {
    const d = u, p = u, h = u, g = u, m = u, y = u, b = u, x = u;
    switch (u.type) {
      case wn.getType():
        o.push(
          MO(
            d,
            Bn(d.children, t)
          )
        );
        break;
      case Kn.getType():
        o.push(EO(u));
        break;
      case vn.getType():
        o.push(
          AO(
            p,
            Bn(p.children, t)
          )
        );
        break;
      case Qt.getType():
      case qt.getType():
        o.push(PO(u));
        break;
      case We.getType():
        o.push(
          NO(
            h,
            Bn(h.children, t, void 0, h)
          )
        );
        break;
      case Bt.getType(): {
        let S = Bn(g.children, t);
        _s(t) && (S = kf(S)), o.push(
          wO(g, S?.length ? S : void 0)
        );
        break;
      }
      case rs.getType():
        o.push(
          OO(
            u,
            Bn(u.children, t)
          )
        );
        break;
      case os.getType():
        o.push(
          $O(
            u,
            Bn(u.children, t)
          )
        );
        break;
      case as.getType():
        o.push(
          RO(
            u,
            Bn(u.children, t)
          )
        );
        break;
      case Ze.getType(): {
        const S = Bn(
          m.children,
          t,
          jO(m.children, m.caller)
        );
        o.push(
          qO(
            m,
            _s(t) && m.category === void 0 ? kf(S) : S
          )
        );
        break;
      }
      case Pr.getType():
      case Jn.getType():
      case Pn.getType():
      case Ly.getType():
      case Gn.getType():
        break;
      case yt.getType():
        if (a = Bn(
          b.children,
          t,
          n,
          r,
          f > 0 ? e[f - 1] : i,
          !0
        ), a) {
          const S = b.typedIDs[It];
          if (S) {
            const _ = e[f + 1];
            BO(a, S, c, _, o), c = dT(_) ? S : [];
          } else {
            const _ = a.shift();
            _ && (typeof _ == "string" ? Xa(o, _) : o.push(_)), a.length > 0 && o.push(...a);
          }
        }
        break;
      case ar.getType():
        o.push(Ms(u));
        break;
      case ot.getType():
        if (n && u === n.node) {
          let S = kd(n.node.text, n.caller);
          _s(t) && (S = Tm(eg(S))), S && Xa(o, S);
          break;
        }
        if (y.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !is(y.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        (y.text !== q || FO(e, f, i, r, s)) && // The untagged NBSP-`|` form of milestone attribute text. Text right after a char span's
        // opening glyph is never that: its NBSP is the span's separator, and a `|…` after it is
        // content the attribute grammar left literal (`\w |lemma="g"grace\w*` — Paratext 9
        // parses attributes only when the whole `|…` tail before the closer matches), so it is
        // kept like any other content text.
        !(y.text.startsWith(dd) && !xf(e, f, i, r)) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        y[Kr]?.textType !== "attribute") {
          let S = DO(y);
          t?.markerMode === "editable" && xf(e, f, i, r) && S.startsWith(q) && (S = S.slice(1)), _s(t) && (S = Tm(eg(S))), Xa(o, S);
        }
        break;
      case ns.getType():
        o.push(
          KO(
            x,
            Bn(x.children, t)
          )
        );
        break;
      case hr.getType():
        o.push(UO(u));
        break;
      case io.getType():
        Ec?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Ec?.error(`Unexpected node type '${u.type}'!`);
    }
  });
  const l = _s(t) ? IO(o) : o;
  return l.length > 0 ? l : void 0;
}
function VO(e, t) {
  const n = [];
  let r = [];
  const i = () => {
    n.push(...Bn(r, t) ?? []), r = [];
  };
  for (const s of e) {
    if (!Zc(s)) {
      r.push(s);
      continue;
    }
    i();
    let o = Bn(s.children, t);
    const a = n.at(-1), c = typeof a == "object" && a.type === vn.getType() && (a.altnumber !== void 0 || a.pubnumber !== void 0);
    _s(t) && !c && (o = kf(o)), o?.forEach(
      (l) => typeof l == "string" ? Xa(n, l) : n.push(l)
    );
  }
  return i(), n.length > 0 ? n : void 0;
}
const Es = {
  initialize: SO,
  deserializeEditorState: _O
}, WO = /^sd\d*$/, HO = /* @__PURE__ */ new Set([
  ...Object.entries(Ru).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === T.Paragraph && !WO.test(e)
  ).map(([e]) => e),
  "qa"
]);
function GO(e, t) {
  const n = [];
  let r;
  for (const [i, s] of e.entries()) {
    if (Id(s) || ek(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (!_M(s)) {
      t && Ac(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), r ? r.children.push(s) : n.push(s);
      continue;
    }
    if (Ld(s) && HO.has(s.marker) && !Ac(s)) {
      r = void 0, n.push(s);
      continue;
    }
    if (s.children.length === 0) {
      r ? r.children.push(s) : n.push(s);
      continue;
    }
    hT(s.children, t).forEach((o) => {
      const a = JO(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        r ? r.children.push(a) : n.push(a);
        return;
      }
      r = YO(o.verse), n.push(r), a && r.children.push(a);
    });
  }
  return n;
}
function hT(e, t) {
  const n = [{ nodes: [] }], r = (i) => n[n.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (gT(i)) {
      n.push({ verse: i, nodes: [i] });
      return;
    }
    if (Bi(i)) {
      const s = hT(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && r(vm(i, o.nodes)), a.forEach((c) => {
        n.push({ verse: c.verse, nodes: [vm(i, c.nodes)] });
      });
      return;
    }
    t && Ac(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), r(i);
  }), n;
}
function vm(e, t) {
  return { ...e, children: t };
}
function gT(e) {
  return Kk(e) && e.number !== "";
}
function Ac(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((n) => gT(n) || Ac(n)) : !1;
}
function JO(e, t, n) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [Kr]: { ...e[Kr], [Ik.key]: n }
    };
}
function YO(e) {
  return {
    type: hc,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Lk
  };
}
const Cm = bT([]), XO = {
  type: Ly.getType(),
  version: 1
};
let Up = [], xe, Gi, mT, gn;
function QO(e, t) {
  Up = [], t$(e), n$(t);
}
function ZO(e = 0) {
}
function e$(e, t) {
  xe = t ?? fl();
  let n;
  return e ? (e.type !== sr && gn?.warn(`This USJ type '${e.type}' didn't match the expected type '${sr}'.`), e.version !== ir && gn?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${ir}'.`
  ), e.content.length > 0 ? (n = Sf($r(e.content)), Qo(xe) && (n = GO(n, gn))) : n = [Cm]) : n = [Cm], mT?.(Up), {
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
function t$(e) {
  e && (Gi = e), e?.addMissingComments && (mT = e.addMissingComments);
}
function n$(e) {
  e && (gn = e);
}
function yT() {
  return dt(xe);
}
function r$(e, t) {
  let { marker: n } = e;
  n !== Go && gn?.warn(`Unexpected book marker '${n}'!`), n = n ?? Go;
  const { code: r } = e;
  (!r || !wn.isValidBookCode(r)) && gn?.warn(`Unexpected book code '${r}'!`);
  const i = [];
  xe?.markerMode === "editable" || xe?.markerMode === "visible" ? i.push(
    dn("marker", Je(n) + " " + r + q)
  ) : xe?.hasGutterParaMarkers && i.push(dn("marker", Je(n) + q, !0)), i.push(...t);
  const s = gt(e, pM);
  return lt({
    type: wn.getType(),
    marker: n,
    code: r ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Jb
  });
}
function i$(e) {
  let { marker: t } = e;
  t !== cc && gn?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? cc;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, o = gt(e, m0);
  let a;
  xe?.markerMode === "visible" && (a = !0);
  const c = [
    sn(Wn(t, n) ?? "")
  ];
  return xe?.markerMode === "editable" && T$(i, s, c), xe?.markerMode === "editable" ? lt({
    type: vn.getType(),
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
    version: Sb
  }) : lt({
    type: Kn.getType(),
    marker: t,
    number: n ?? "",
    showMarker: a,
    sid: r,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Wb
  });
}
function s$(e) {
  let { marker: t } = e;
  t !== ac && gn?.warn(`Unexpected verse marker '${t}'!`), t = t ?? ac;
  const { number: n, sid: r, altnumber: i, pubnumber: s } = e, a = (WA(xe) ?? Qt).getType(), c = xe?.markerMode === "editable" ? hb : Dk;
  let l, u;
  xe?.markerMode === "editable" ? l = Wn(t, n) : xe?.markerMode === "visible" && (u = !0);
  const f = gt(e, f0);
  return lt({
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
function o$(e, t = [], n = !1) {
  let { marker: r } = e;
  We.isValidMarker(r, Gi?.extraValidMarkers) || gn?.warn(`Unexpected char marker '${r}'!`), r = r ?? "";
  const i = [];
  if (xe?.markerMode === "editable") {
    const [a] = t;
    jr(a) ? a.text = q + a.text : a && t.unshift(sn(q));
  }
  t.length === 0 && t.push(sn(At)), Tf(e.marker ?? "", i, n), i.push(...t);
  const s = e.closed === "false", o = gt(e, c0);
  return s || y$(r, o, i), s || vf(e.marker ?? "", i, !1, n), lt({
    type: We.getType(),
    marker: r,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: db
  });
}
function bT(e) {
  return {
    type: ai.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Nb
  };
}
function a$(e, t = []) {
  let { marker: n } = e;
  Bt.isValidMarker(n, Gi?.extraValidMarkers) || gn?.warn(`Unexpected para marker '${n}'!`), n = n ?? Vn;
  const r = [];
  if (cs(xe) && (xe?.markerMode === "editable" ? r.push(
    nn(n),
    sn(q, Ar, "token")
  ) : (xe?.markerMode === "visible" || xe?.hasGutterParaMarkers) && r.push(
    dn(
      "marker",
      Je(n) + q,
      xe?.hasGutterParaMarkers
    )
  )), r.push(...t), yT()) {
    const s = r.find(
      (o) => !to(o) && !(jr(o) && o.text === q)
    );
    jr(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = gt(e, gM);
  return lt({
    type: Bt.getType(),
    marker: n,
    unknownAttributes: i,
    children: r,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Xb
  });
}
function Bp() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function c$(e, t = []) {
  const n = gt(e, v0);
  return lt({
    ...Bp(),
    type: rs.getType(),
    unknownAttributes: n,
    children: t,
    version: Ab
  });
}
function l$(e, t = []) {
  const n = gt(e, aE), r = e.marker ?? Ju, i = [];
  return xe?.markerMode === "editable" ? i.push(
    nn(r),
    sn(q, Ar, "token")
  ) : (xe?.markerMode === "visible" || xe?.hasGutterParaMarkers) && i.push(
    dn(
      "marker",
      Je(r) + q,
      xe?.hasGutterParaMarkers
    )
  ), i.push(...t), lt({
    ...Bp(),
    type: os.getType(),
    marker: r,
    unknownAttributes: n,
    children: i,
    version: Ak
  });
}
function u$(e, t = []) {
  const { marker: n, align: r, colspan: i } = e, s = [], o = n ?? Yu, a = Fb(o, i) ?? o;
  xe?.markerMode === "editable" ? s.push(
    nn(a),
    sn(q, Ar, "token")
  ) : (xe?.markerMode === "visible" || xe?.hasGutterParaMarkers) && s.push(
    dn(
      "marker",
      Je(a) + q,
      xe?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = gt(
    e,
    lE
  );
  return lt({
    ...Bp(),
    type: as.getType(),
    marker: o,
    align: r,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: wk
  });
}
function f$(e, t) {
  const n = wM(t);
  let r = () => {
  };
  return Gi?.noteCallerOnClick && (r = Gi.noteCallerOnClick), lt({
    type: Pn.getType(),
    caller: e,
    previewText: n,
    onClick: r,
    version: Vk
  });
}
function d$(e, t) {
  let { marker: n } = e;
  Ze.isValidMarker(n, Gi?.extraValidMarkers) || gn?.warn(`Unexpected note marker '${n}'!`), n = n ?? md;
  const { category: r } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Cp(xe?.noteMode), a = gt(e, C_), c = xe?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  xe?.markerMode === "editable" ? (l = nn(n, "opening", !1, c), s || (u = nn(n, "closing", !1, c))) : xe?.markerMode === "visible" && (l = dn("marker", Je(n) + " "), s || (u = dn("marker", ct(n))));
  const f = [];
  let d;
  if (l && f.push(l), xe?.markerMode === "editable" && !o)
    d = sn(Nt(i), void 0, c), d.detail = Yy, f.push(d), x$(r, f), f.push(...t);
  else {
    const p = sn(q, Ar, "token");
    d = f$(i, t), f.push(d, p, ...t.flatMap(p$(p)));
  }
  return u && f.push(u), lt({
    type: Ze.getType(),
    marker: n,
    caller: i,
    isCollapsed: o,
    category: r,
    unknownAttributes: a,
    children: f,
    direction: null,
    format: "",
    indent: 0,
    version: eb
  });
}
function p$(e) {
  return (t) => Kb(t) ? [t] : [t, e];
}
function h$(e) {
  let { marker: t } = e;
  (!t || !ar.isValidMarker(t, Gi?.extraValidMarkers)) && gn?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: n, eid: r } = e, i = gt(e, gd), s = yb(e);
  return lt({
    type: ar.getType(),
    marker: t,
    sid: n,
    eid: r,
    unknownAttributes: i,
    attributeOrder: s,
    version: Xy
  });
}
function Sm(e, t = []) {
  return {
    type: yt.getType(),
    typedIDs: { [It]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function g$(e, t) {
  const { marker: n } = e, r = e.type, i = gt(e, b0), s = [];
  if (xe?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = tl(
      r,
      n,
      i
    );
    o && s.push(dn("marker", o)), a && s.push(dn("attribute", a)), s.push(...t), c && s.push(dn("attribute", c)), l && s.push(dn("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    jr(o) && (o.mode = "token");
  }), lt({
    type: ns.getType(),
    tag: r,
    marker: n,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Mb
  });
}
function m$(e) {
  return {
    type: hr.getType(),
    marker: e,
    text: No(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: xe?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: mk
  };
}
function nn(e, t = "opening", n = !1, r = "normal") {
  return {
    type: Gn.getType(),
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
function sn(e, t = void 0, n = "normal") {
  const r = {
    type: ot.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: n,
    style: "",
    version: 1
  };
  return t !== void 0 && (r[Kr] = { textType: t }), r;
}
function dn(e, t, n = !1) {
  const r = {
    type: Jn.getType(),
    text: t,
    textType: e,
    version: Db
  };
  return n && (r[Kr] = { [Od.key]: !0 }), r;
}
function ea(e, t) {
  return {
    type: Pr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: cb
  };
}
function Tf(e, t, n = !1) {
  xe?.markerMode === "editable" ? t.push(nn(e, "opening", n)) : xe?.markerMode === "visible" && t.push(dn("marker", Je(e, n)));
}
function vf(e, t, n = !1, r = !1) {
  xe?.markerMode === "editable" ? n ? t.push(nn("", "selfClosing")) : t.push(nn(e, "closing", r)) : xe?.markerMode === "visible" && t.push(
    dn(
      "marker",
      n ? ct("") : ct(e, r)
    )
  );
}
function y$(e, t, n) {
  if (xe?.markerMode !== "editable" || !t) return;
  const r = er(t, eo(e));
  r && n.push(sn(r, "attribute"));
}
function _m(e, t) {
  if (e.type !== "ms" || xe?.markerMode !== "editable" && xe?.markerMode !== "visible") return;
  const { marker: n, sid: r, eid: i } = e, s = gt(e, gd), o = bb(
    r,
    i,
    s,
    yb(e)
  ), a = er(o, pa(n ?? ""));
  if (!a) return;
  const c = q + a;
  xe?.markerMode === "editable" ? t.push(sn(c, "attribute")) : t.push(dn("attribute", c));
}
function b$(e, t) {
  const n = e.marker ?? "";
  if (xe?.markerMode === "editable") {
    const r = [];
    Tf(n, r), _m(e, r), vf(n, r, !0), t.push(ea("milestone", r));
  } else
    Tf(n, t), _m(e, t), vf(n, t, !0);
}
function Mm(e, t, n) {
  t !== void 0 && n.push(
    ea(e, [
      nn(e, "opening"),
      sn(q + t, "attribute"),
      nn(e, "closing")
    ])
  );
}
function k$(e, t) {
  xe?.markerMode === "editable" && (Mm("va", e.altnumber, t), Mm("vp", e.pubnumber, t));
}
function x$(e, t) {
  e !== void 0 && t.push(
    ea("cat", [
      nn("cat", "opening"),
      sn(q + e, "attribute"),
      nn("cat", "closing")
    ])
  );
}
function T$(e, t, n) {
  e !== void 0 && n.push(
    ea("ca", [
      nn("ca", "opening"),
      sn(q + e, "attribute"),
      nn("ca", "closing")
    ])
  ), t !== void 0 && n.push(
    ea("cp", [
      nn("cp", "opening"),
      sn(q + t, "attribute")
    ])
  );
}
function Em(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((n) => n - t);
}
function v$(e, t) {
  const n = e.indexOf(t, 0);
  n > -1 && e.splice(n, 1);
}
function Am(e, t) {
  t.marker === Ki && t.sid !== void 0 && e.push(t.sid), t.marker === Rs && t.eid !== void 0 && v$(e, t.eid);
}
function Cf(e, t, n = !1, r = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = n ? [Sm(o, [...r])] : o, c = e[i];
  Am(r, c);
  const l = Cf(
    e.slice(i + 1, s),
    Em(t, i + 1),
    c.marker === Ki,
    r
  ), u = Sm(l, [...r]), f = e[s];
  Am(r, f);
  const d = Cf(
    e.slice(s + 1),
    Em(t, s + 1),
    f.marker === Ki,
    r
  );
  return [...a, u, ...d];
}
function $r(e, t = !1) {
  const n = [], r = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && r.push(sn(yT() ? CO(i) : i));
    else if (!i.type)
      gn?.error("Marker type is missing!");
    else
      switch (i.type) {
        case wn.getType():
          r.push(r$(i, $r(i.content)));
          break;
        case vn.getType():
          r.push(i$(i));
          break;
        case qt.getType():
          xe?.hasSpacing || r.push(XO), r.push(s$(i)), k$(i, r);
          break;
        case We.getType():
          r.push(
            o$(i, $r(i.content, !0), t)
          );
          break;
        case Bt.getType():
          r.push(a$(i, $r(i.content)));
          break;
        case Ze.getType():
          r.push(d$(i, $r(i.content)));
          break;
        case ar.getType():
          Qy(i.marker ?? "") && (n.push(r.length), i.sid !== void 0 && Up?.push(i.sid)), r.push(h$(i)), b$(i, r);
          break;
        case hr.getType():
          r.push(m$(i.marker ?? ""));
          break;
        case Eb:
          r.push(c$(i, $r(i.content)));
          break;
        case Ek:
          r.push(l$(i, $r(i.content)));
          break;
        case Nk:
          r.push(u$(i, $r(i.content)));
          break;
        default:
          gn?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), r.push(g$(i, $r(i.content)));
      }
  }), Cf(r, n);
}
function Sf(e) {
  const t = e.findIndex(
    (r) => Id(r) || ek(r) || Ld(r) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    S0(r)
  );
  if (t >= 0) {
    const r = Sf(e.slice(0, t)), i = e[t], s = Sf(e.slice(t + 1));
    return [...r, i, ...s];
  } else if (e.some((r) => "text" in r && "mode" in r || Kk(r)))
    return [bT(e)];
  return e;
}
const lr = {
  initialize: QO,
  reset: ZO,
  serializeEditorState: e$
};
function kT(e) {
  if (e && !N(e)) {
    if (v(e)) return e;
    if (A(e))
      for (const t of e.getChildren()) {
        const n = kT(t);
        if (n) return n;
      }
  }
}
function C$() {
  const e = w();
  if (!E(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), n = e.anchor.offset;
    if ((v(t) && !N(t) ? Vi(t) : void 0) && v(t)) {
      const i = Ue(" ");
      if (n <= 0) t.insertBefore(i);
      else if (n >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(n);
        o.insertAfter(i);
      }
      js(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = kT(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[n] === " " ? (t.select(n + 1, n + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of xT(e)) {
    if (!Vi(t)) continue;
    js(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const n = t.getLatest(), r = n.getTextContent();
    r.startsWith(q) && n.setTextContent(r.slice(q.length));
  }
  return !0;
}
function xT(e) {
  const [t, n] = id(e), [r, i] = e.isBackward() ? [n, t] : [t, n], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || N(a) || pe(a, ke) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? r : 0, f = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= f) return;
    const d = a.splitText(u, f), p = d.length === 3 ? d[1] : f === l ? d[d.length - 1] : d[0];
    p && o.push(p);
  }), o;
}
function TT(e) {
  let t = e;
  for (; D(t) || ae(t); ) t = t.getParent();
  return t;
}
function vT(e) {
  const t = TT(e.getParent());
  return St(t) ? t : void 0;
}
function S$() {
  const e = w();
  if (!E(e)) return !1;
  const t = e.focus.getNode();
  return Vi(t) ? !!vT(t) : !1;
}
function CT(e) {
  const t = Ue(""), n = e.getNode(), r = e.offset;
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
    if (D(o)) js(t, { renderGlyphs: !0 });
    else if (!ae(o) || !_$(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function _$(e, t) {
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
function ST(e) {
  const t = e.anchor.getNode();
  if (N(t) && !ep(t, e.anchor.offset)) {
    const n = t.getParent();
    if (D(n) && t.is(n.getLastChild())) {
      n.selectNext(0, 0);
      const r = w();
      return E(r) && r.isCollapsed() ? r : void 0;
    }
  }
  return e;
}
function _T() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = ST(e);
  if (!t) return !1;
  const n = t.anchor.getNode();
  if (!v(n) || N(n) || !Vi(n)) return !1;
  const r = vT(n);
  if (!r) return !1;
  const { moving: i } = CT(t.anchor), s = r.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; ae(o); ) o = o.getFirstChild() ?? void 0;
  return D(o) ? ol(o) : s.select(0, 0), !0;
}
const MT = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${tk(_e().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = ck(e), n = sp(t);
      let r, i = !1;
      if (!n)
        r = "1";
      else {
        const o = n.getNumber();
        r = $M(0, o);
        const a = GE(n);
        if (a) {
          const c = a.getNumber();
          i = r === c || RM(c) && Ud(parseInt(r, 10), c);
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
function _f(e, t) {
  return Ze.isValidMarker(e, t) || !!MT[e] || Bt.isValidMarker(e, t) || We.isValidMarker(e, t);
}
function M$(e, t) {
  return We.isNoteContentMarker(e) ? !1 : We.isValidMarker(e, t);
}
function ET(e, t, n, r, i, s) {
  const o = hx(
    e,
    void 0,
    void 0,
    t,
    r ?? fl(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (n.current = o.getKey()), o?.getKey();
}
function Mf(e, t, n, r, i, s, o) {
  if (Ze.isValidMarker(e, r?.extraValidMarkers)) {
    let l;
    return { action: (f) => {
      f.editor.update(() => {
        l = ET(
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
  const a = O$(e, r?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      E(u) && (tp(u), l.noteText = u.getTextContent());
      const { content: f, highlightInserted: d } = a.action(l), p = kg(f, lr, n), h = jl(p);
      if (E(u)) {
        const g = u.anchor.getNode(), m = g.getParent(), y = Vi(g), b = u.anchor.key === u.focus.key;
        if (D(h) && y && b && !xu(h, o))
          P$(
            u,
            h,
            g,
            n?.markerMode === "editable"
          );
        else if (D(h) && !b && !xu(h, o) && N$(u))
          w$(u, h, n?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          $$(
            u,
            () => jl(p)
          );
        else if (A(h) && !h.isInline()) {
          const x = u.insertParagraph();
          if (x) {
            const S = x.getChildren();
            h.append(...S), x.replace(h), St(h) && ls(h) || h.selectStart();
          }
        } else if (D(h) && v(g) && !N(g) && D(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        xu(h, o)) {
          const x = g.getParent();
          if (D(x)) {
            const S = u.anchor.offset;
            if (S === 0) g.insertBefore(h);
            else if (S >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [U] = g.splitText(S);
              U.insertAfter(h);
            }
            h.getChildren().forEach((U) => {
              N(U) && U.setNested(!0);
            });
            const _ = h.getChildren().find((U) => v(U) && !N(U));
            _ && v(_) ? _.select(
              _.getTextContentSize(),
              _.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (v(g) && !N(g) && u.isCollapsed() && (L(m) || D(m) && L(m.getParent()))) {
          const x = D(m) ? m : void 0, S = x ? E$(g, u.anchor.offset) : [];
          let U = (x ?? g).insertAfter(h);
          if (kn(h)) {
            const B = {
              ...n || fl(),
              markerMode: "hidden"
            }, V = kg(
              f,
              lr,
              B
            ), ne = jl(V);
            U = U.insertAfter(ne);
          }
          if (S.length > 0 && x) {
            const B = Pc(x).append(...S);
            U.insertAfter(B), x.isEmpty() && x.remove();
          } else v(U.getNextSibling()) || U.insertAfter(ji());
          A(U) && U.selectEnd();
        } else if (u.insertNodes([h]), z$(h), d) {
          const x = $y();
          x.add(h.getKey()), jn(x);
        } else if (D(h)) {
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
function E$(e, t) {
  const n = e.getTextContentSize();
  let r;
  return t <= 0 ? r = e : t >= n ? r = e.getNextSibling() : r = e.splitText(t)[1] ?? e.getNextSibling(), r ? [r, ...r.getNextSiblings()] : [];
}
function xu(e, t) {
  return ((t ?? gc).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function A$(e, t) {
  t && e.getChildren().forEach((i) => {
    N(i) && i.setNested(!0);
  }), e.getChildren().some((i) => N(i) && i.getMarkerSyntax() === "closing") || e.append(Kt(e.getMarker(), "closing", t));
  const r = e.getUnknownAttributes();
  if (r?.closed === "false") {
    const i = { ...r };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function P$(e, t, n, r) {
  let i = t;
  if (e.anchor.type === "element" && D(n)) {
    const o = n.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : n.append(t);
  } else if (e.isCollapsed() || !v(n)) {
    const o = e.anchor.offset;
    if (v(n) && o > 0 && o < n.getTextContentSize()) {
      const [a] = n.splitText(o);
      a.insertAfter(t);
    } else v(n) && o >= n.getTextContentSize() ? n.insertAfter(t) : n.insertBefore(t);
  } else {
    const [o, a] = Js(e);
    let c = n;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (js(i, { renderGlyphs: r }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !N(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !N(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function N$(e) {
  let t, n = !1;
  for (const r of e.getNodes()) {
    if (N(r) || D(r)) continue;
    if (!v(r) || r.getType() !== ot.getType() || pe(r, ke) === "attribute") return !1;
    const i = mE(r);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Vi(r) && (n = !0);
  }
  return n;
}
function w$(e, t, n) {
  const r = xT(e);
  if (r.length === 0) return;
  r.forEach((a) => {
    if (!Vi(a)) return;
    js(a, { renderGlyphs: n });
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
function O$(e, t) {
  let n = MT[e];
  return n || (Bt.isValidMarker(e, t) ? n = {
    action: () => ({ content: [{ type: Bt.getType(), marker: e, content: [] }] })
  } : We.isValidMarker(e, t) && (n = {
    action: () => {
      const r = { type: We.getType(), marker: e };
      return (We.isValidFootnoteMarker(e) || We.isValidCrossReferenceMarker(e)) && (r.closed = "false"), { content: [r] };
    }
  })), n;
}
function $$(e, t) {
  const n = e.getNodes(), [r, i] = Js(e);
  let s;
  n.forEach((o, a) => {
    if (A(s) && s.isParentOf(o))
      return;
    const c = AT(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((f) => N(f) && f.getMarkerSyntax() === "opening") && A$(s, D(s.getParent()))), I$(c, s, l);
  }), (v(s) || A(s)) && s.selectEnd();
}
function Js(e) {
  const t = e.anchor.offset, n = e.focus.offset;
  return e.isBackward() ? [n, t] : [t, n];
}
function Fp(e) {
  return ae(e) || L(e) || L(e.getParent());
}
function AT(e, t, n, r, i) {
  if (!Fp(e)) {
    if (v(e))
      return R$(e, t, n, r, i);
    if (A(e) && e.isInline())
      return e;
  }
}
function R$(e, t, n, r, i) {
  const s = e.getTextContentSize(), o = t ? r : 0, a = n ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function I$(e, t, n) {
  if (v(t)) {
    const r = Ef(e, t);
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
    Ef(e, t), n && D(t) && t.getChildren().some((s) => N(s)) && v(e) && !N(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function Ef(e, t) {
  let n = e.getTextContent();
  if (v(e) && t.isInline() && n.startsWith(" ") && n.trimStart() !== "") {
    n = n.trimStart(), e.setTextContent(n);
    const r = t.getPreviousSibling();
    rp(r), v(r) || t.insertBefore(Ue(" "));
  }
  return n;
}
function PT(e, t, n) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), f = e.anchor.offset, d = Ji(u, t);
    if (!d) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (Pm(d, n), v(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), m = Math.max(0, Math.min(f - g, h)), y = w();
      E(y) && y.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const r = e.getNodes(), i = e.isBackward(), [s, o] = Js(e);
  if (!jp(r, t, s, o)) return !1;
  const a = zp(r, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const f = Ji(u, t);
    if (!f || c.has(f.getKey())) return;
    c.add(f.getKey());
    const d = $T(f, a);
    d && (Pm(d, n), l = !0);
  }), RT(a, i), l;
}
function Pm(e, t) {
  e.getChildren().forEach((r) => {
    xn(r) && r.remove();
  });
  const n = e.getChildren();
  if (n.length === 0 || e.getTextContent() === At) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && n.forEach((r) => {
    const i = r.getTextContent();
    v(r) && i.startsWith(q) && r.setTextContent(i.slice(q.length));
  }), wu(e);
}
function zp(e, t, n) {
  const r = [];
  return e.forEach((i, s) => {
    const o = AT(
      i,
      s === 0,
      s === e.length - 1,
      t,
      n
    );
    v(o) && r.push(o);
  }), r;
}
function Ji(e, t) {
  let n = e, r;
  for (; n && !St(n); ) {
    if (L(n)) return;
    !r && D(n) && (t === void 0 || n.getMarker() === t) && (r = n), n = n.getParent();
  }
  return r;
}
function NT(e) {
  const t = nt(
    e,
    (n) => L(n) || St(n)
  );
  return L(t);
}
function wT(e) {
  return e.filter(
    (t) => !Fp(t) && (v(t) || A(t) && t.isInline())
  );
}
function L$(e, t, n) {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || Fp(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? n : o;
    a === 0 && c === o && r.add(i.getKey());
  }), r;
}
function q$(e, t, n) {
  return e.getChildren().some(
    (r) => A(r) && t.some((i) => r.isParentOf(i)) && !OT(r, n)
  );
}
function jp(e, t, n, r, i) {
  const s = wT(e), o = L$(e, n, r), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Ji(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !q$(l, s, o);
  });
}
function OT(e, t) {
  return e.getAllTextNodes().every((n) => t.has(n.getKey()) || xn(n));
}
function $T(e, t) {
  const n = new Set(t.map((l) => l.getKey())), r = e.getChildren(), i = [];
  for (const [l, u] of r.entries())
    if (n.has(u.getKey()))
      i.push(l);
    else if (A(u) && t.some((f) => u.isParentOf(f))) {
      if (!OT(u, n)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && xn(r[s - 1]) && (s -= 1), o < r.length - 1 && xn(r[o + 1]) && (o += 1), s === 0 && o === r.length - 1) return e;
  const a = r.slice(o + 1);
  a.length > 0 && e.insertAfter(Pc(e).append(...a));
  const c = r.slice(0, s);
  return c.length > 0 && e.insertBefore(Pc(e).append(...c)), e;
}
function Pc(e) {
  return KS(e);
}
function RT(e, t) {
  const n = w(), r = e[0], i = e[e.length - 1];
  if (!E(n) || !r.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? n.setTextNodeRange(i, s, r, 0) : n.setTextNodeRange(r, 0, i, s);
}
function D$(e, t, n) {
  if (e.isCollapsed()) {
    const l = Ji(e.anchor.getNode(), n);
    return !l || l.getMarker() === t ? !1 : (rg(l, t), !0);
  }
  const r = e.getNodes(), [i, s] = Js(e);
  if (!jp(r, n, i, s, t)) return !1;
  const o = zp(r, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Ji(l, n);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const f = $T(u, o);
    f && (rg(f, t), c = !0);
  }), c;
}
function K$(e, t, n, r) {
  if (e.isCollapsed()) return !1;
  const i = n?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = Js(e);
  if (!!!i?.some(
    (m) => jp(s, m, o, a)
  ) && !U$(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const y = w();
    E(y) && PT(y, m, r) && (l = !0);
  });
  const u = w();
  if (!E(u)) return l;
  const f = u.isBackward(), [d, p] = Js(u), h = zp(
    u.getNodes(),
    d,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (m) => !NT(m) && !Ji(m, t)
  );
  return g.length > 0 && (B$(g).forEach((m) => F$(m, t)), l = !0), RT(h, f), l;
}
function U$(e, t) {
  return wT(e).some(
    (n) => !NT(n) && !Ji(n, t)
  );
}
function B$(e) {
  const t = [];
  let n;
  return e.forEach((r) => {
    const i = n?.[n.length - 1];
    n && i?.getNextSibling()?.is(r) ? n.push(r) : (n = [r], t.push(n));
  }), t;
}
function F$(e, t) {
  const n = e[0].getPreviousSibling(), r = e[e.length - 1].getNextSibling(), i = [n, r].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? Pc(i) : Br(t);
  e[0].insertBefore(s), s.append(...e), i === n || Ef(e[0], s);
}
function z$(e) {
  Oe(e) && (rp(e.getPreviousSibling()), Bk(e.getNextSibling()));
}
const IT = {
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
}, Nm = "psc-active-text", qa = "psc-empty-text";
function j$({ viewOptions: e }) {
  const [t] = Se(), n = re(void 0), r = e?.hasActiveTextFocusBox ?? !1;
  return G(() => {
    if (!r) return;
    function i(o) {
      n.current && t.getElementByKey(n.current)?.classList.remove(Nm), n.current = o, o && t.getElementByKey(o)?.classList.add(Nm);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Hc,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${qa}`);
          if (!c) return !1;
          const l = es(c);
          if (!Oe(l)) return !1;
          const u = l.getParent();
          if (!A(u)) return !1;
          const f = l.getIndexWithinParent() + 1;
          return u.select(f, f), !1;
        },
        Vt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const f = Tu(), d = V$(), p = [], h = [];
          return _e().getChildren().forEach((g) => {
            if (!A(g)) return;
            const { emptyKeys: m, nonEmptyKeys: y } = H$(g);
            p.push(...m), h.push(...y);
          }), { newActiveKey: f, activeVerseKey: d, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== n.current && i(a), l.forEach((f) => {
          f === c ? t.getElementByKey(f)?.classList.remove(qa) : t.getElementByKey(f)?.classList.add(qa);
        }), u.forEach((f) => t.getElementByKey(f)?.classList.remove(qa));
      }),
      t.registerCommand(
        ad,
        () => (i(void 0), !1),
        Vt
      ),
      t.registerCommand(
        qy,
        () => {
          const o = t.getEditorState().read(Tu);
          return o !== n.current && i(o), !1;
        },
        Vt
      )
    ];
    return i(t.getEditorState().read(Tu)), it(...s);
  }, [t, r]), null;
}
function Tu() {
  return W$(w() ?? void 0)?.getKey();
}
function V$() {
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
    Oe(s[a]) && (o = s[a].getKey());
  return o;
}
function W$(e) {
  if (E(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function H$(e) {
  const t = e.getChildren(), n = [], r = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Oe(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Oe(c)) break;
      if (!(Ut(c) || N(c)) && c.getTextContent().replaceAll(Bo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? r : n).push(s.getKey());
  }
  return { emptyKeys: n, nonEmptyKeys: r };
}
function Af(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function LT(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const n = e.getRootElement()?.ownerDocument.getSelection(), r = n?.anchorNode, i = n?.focusNode;
  return !!r && !!i && !Ny(e, r, i);
}
function qT(e, t) {
  return e.length <= t ? e : e.slice(0, Vp(e, t));
}
function Vp(e, t) {
  if (t >= e.length) return e.length;
  let n = 0;
  for (const { index: r, segment: i } of jS(e)) {
    if (r + i.length > t) break;
    n = r + i.length;
  }
  return n;
}
const G$ = 16;
function J$(e, { $isHidden: t, $measure: n } = {}) {
  const r = (b) => t ? Wp(b, t).length : b.getTextContent().length;
  n ??= r;
  const i = w();
  if (!E(i) || i.isCollapsed() || n(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Nc(s), l = Nc(o), u = i.getNodes(), f = new Map(u.map((b) => [b.getKey(), Q$(b)])), d = u.length > 0 ? f.get(u[0].getKey()) : void 0, p = d && Y$(s, d) ? d : void 0, h = (b) => {
    const x = b > 0 ? X$(u, f, p, c, l, b, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), x ? i.focus.set(x.node.getKey(), x.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!x;
  };
  let g = Math.min(e, r(i));
  if (h(g) && n(i) <= e) return !0;
  let m = 0, y = 0;
  g -= 1;
  for (let b = 0; b < G$ && m <= g; b++) {
    const x = Math.floor((m + g) / 2);
    h(x) && n(i) <= e ? (y = x, m = x + 1) : g = x - 1;
  }
  return h(y), !0;
}
function Pf(e) {
  return e.isToken() || ka(e) || we(e.getParent());
}
function Y$(e, t) {
  const n = A(t) ? t.getAllTextNodes()[0] : void 0;
  return !!n && tn(n.getKey(), 0, "text").isBefore(e);
}
function X$(e, t, n, r, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, f;
  const d = /* @__PURE__ */ new Map(), p = (g) => {
    const m = t.get(g.getKey());
    return m && n?.is(m) ? void 0 : m;
  }, h = (g) => {
    let m = f ? f.endBefore : g;
    for (; ; ) {
      const y = Z$(m, e, r);
      if (!y || !m || y.node.is(m.node)) return y;
      const b = p(y.node);
      if (!b || b.is(p(m.node))) return y;
      m = d.get(b.getKey());
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
        const b = g === 0 ? r : 0, x = g === a ? i : m.getTextContentSize(), S = x - b, _ = Pf(m);
        if (_ && c + S > s) return h(u);
        if (!_ && c + S >= s) {
          const U = Vp(m.getTextContent(), b + (s - c));
          return h({ node: m, offset: Math.max(b, U) });
        }
        c += S, u = { node: m, offset: x };
      } else if (Tn(m) || Zi(m)) {
        const b = m.getTextContentSize();
        if (c + b > s) return h(u);
        c += b;
      }
    }
  }
  return h(u);
}
function Q$(e) {
  let t;
  for (let n = e; n; n = n.getParent())
    (L(n) || Pp(n)) && (t = n);
  return t;
}
function Z$(e, t, n) {
  if (!e) return e;
  const r = nt(e.node, (m) => A(m) && !m.isInline()), i = A(r) ? r.getAllTextNodes() : [e.node], s = i.findIndex((m) => m.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let m = o; m <= a; m++)
    l.push(c.length), c += i[m].getTextContent();
  const u = l[s - o], f = u + e.offset, d = Vp(c, f);
  if (d === f) return e;
  const p = (m) => t[0]?.is(m) ?? !1;
  if (Pf(e.node)) return { ...e, offset: p(e.node) ? n : 0 };
  if (d >= u) {
    const m = d - u;
    return m >= (p(e.node) ? n : 0) ? { ...e, offset: m } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((m) => m.is(h))) return;
  if (Pf(h))
    return { node: h, offset: p(h) ? n : 0 };
  const g = d - l[0];
  return g >= (p(h) ? n : 0) ? { node: h, offset: g } : void 0;
}
function Wp(e, t) {
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
          u === 0 ? Nc(i) : 0,
          u === r ? Nc(s) : f.length
        );
      } else (Tn(l) || Zi(l)) && (u !== r || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function Nf(e) {
  const t = e.getParent();
  return !!t && nt(t, (n) => L(n) && !!n.getIsCollapsed()) !== null;
}
function DT(e) {
  const t = /* @__PURE__ */ new Map(), n = (i) => {
    Ot(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (n(i), A(i)) for (const { node: s } of ts(i)) n(s);
  let r = 0;
  for (const i of t.values()) r += i;
  return r;
}
function eR(e) {
  return e.getNodes().some(
    (t) => Tn(t) || L(t) || Oe(t) || at(t) || Pp(t)
  );
}
function Nc(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return A(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Yn = String.raw`\w-`, KT = "a-z0-9", tR = `[a-z][${KT}]*`, UT = new RegExp(
  String.raw`^\\(\+?[${Yn}]+)[ \u00A0]$`
), oo = new RegExp(String.raw`^\\(\+?[${Yn}]+)$`), nR = new RegExp(String.raw`^\\\+?[${Yn}]*\*$`), rR = new RegExp(
  String.raw`^\\(\+?[${Yn}]+)(?:[ \u00A0]|$)`
), iR = new RegExp(
  String.raw`^\\(\+?)([${Yn}]+)`
), BT = new RegExp(
  String.raw`^(?:[${Yn}]+[*\\]?|[*\\])$`
), sR = new RegExp(
  String.raw`\\\+?[${Yn}]+(?:\\?\*|[ \u00A0])`
), FT = new RegExp(
  String.raw`\\\+?[${Yn}]*$`
), oR = new RegExp(
  String.raw`^\\(${tR})( |$)`
), aR = new RegExp(
  String.raw`\\[${KT}+*]*$`,
  "i"
);
function zT(e) {
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1 || !fd(t.getMarker())?.includes("caller")) return !1;
  const n = t.getChildren();
  let r = 0;
  for (; r < n.length; ) {
    const i = n[r];
    if (!N(i) || i.getMarkerSyntax() !== "opening") break;
    r++;
  }
  return e.is(n[r]);
}
const wc = "usfm:", jT = "usfmopen", VT = "usfmclosed";
function cR(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const lR = new RegExp(
  [wc, jT, VT].map(cR).join("|")
), uR = "\uFEFF", fR = /^usfm_(.+)$/;
function dR(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function pR(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, n) => String.fromCharCode(Number.parseInt(n, 16))
  );
}
function hR(e) {
  return e.startsWith(wc) ? pR(e.slice(wc.length)).replace(/\r\n?|\n/g, " ") : "";
}
function WT(e) {
  for (const t of e.classList) {
    const n = fR.exec(t);
    if (n) return n[1];
  }
}
function gR(e) {
  const t = WT(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function mR(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let n = t.nextNode(); n; n = t.nextNode())
    if ((n.nodeValue ?? "").startsWith(wc)) return !0;
  for (const n of e.querySelectorAll("*")) {
    const { classList: r } = n;
    if (!(!r.contains(jT) && !r.contains(VT)) && WT(n) !== void 0)
      return !0;
  }
  return !1;
}
function HT(e, t, n) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || n.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    n.push(hR(e.nodeValue ?? ""));
    return;
  }
  if (!dR(e)) return;
  const { classList: r } = e, i = (u) => e.childNodes.forEach((f) => HT(f, u, n));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? gR(e) : void 0, c = a !== void 0 && r.contains("usfmopen"), l = a !== void 0 && r.contains("usfmclosed");
  o && n.push(`
`), (c || l) && n.push(`\\${a} `), i(!1), l && n.push(`\\${a}*`), o && n.push(`
`);
}
function yR(e) {
  if (!lR.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((r) => r.remove()), !mR(t)) return;
  const n = [];
  return t.childNodes.forEach((r) => HT(r, !1, n)), n.join("").replaceAll(uR, "").replaceAll(q, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function bR(e) {
  const t = e.getTextContent(), n = t === q;
  if (!n && !t.includes(" ")) return;
  const r = pe(e, ke);
  if (r === "attribute" || r === Ar || zT(e)) return;
  for (let a = e.getParent(); a; a = a.getParent())
    if (we(a) || rt(a)) return;
  if (n) {
    kR(e) && e.setTextContent(" ");
    return;
  }
  const i = t.startsWith(q) && D(e.getParent()), s = i ? t.slice(1) : t, o = (i ? q : "") + s.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  o !== t && e.setTextContent(o);
}
function kR(e) {
  if (e.getMode() !== "normal" || pe(e, ke) !== void 0) return !1;
  const t = e.getParent();
  if (ae(t) || je(t) || L(t) && t.getChildren().some(Ot)) return !1;
  const n = e.getPreviousSibling();
  if ((D(t) || L(t)) && !n) return !1;
  const r = e.getNextSibling();
  return !N(n) && !ae(n) && !ae(r);
}
function xR(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((n) => n.remove()), t.querySelectorAll("br").forEach((n) => n.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((n) => n.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function TR(e, t) {
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
function wf(e, t) {
  const n = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!n) return;
  const r = (a) => a.replace(/\r\n?/g, `
`), i = r(n.getData("text/plain")), s = n.getData("text/html"), o = s ? yR(s) : void 0;
  return {
    text: o ? r(o) : i || (s ? r(xR(s)) : ""),
    isInternal: TR(
      n.getData("application/x-lexical-editor"),
      t
    )
  };
}
const wm = String.raw`\\(?:\+?[${Yn}]+\*?|\*)`, vR = new RegExp(
  String.raw`(?<=${wm})\u00A0|\u00A0(?=${wm})`,
  "g"
);
function Hp(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(vR, " ").replaceAll(q, "~");
}
const GT = new RegExp(
  String.raw`\\c(?![${Yn}])[ \u00A0]*[^\s\\]*`,
  "g"
), JT = new RegExp(String.raw`\\id(?![${Yn}])[^\n\\]*`, "g"), CR = new RegExp(
  String.raw`^(?:${GT.source}|${JT.source})`
);
function Gp(e) {
  return e.split(`
`).map((t) => {
    const n = t.replace(GT, "").replace(JT, "");
    return CR.test(t) && n.trim() === "" && t.trim() !== "" ? void 0 : n;
  }).filter((t) => t !== void 0).join(`
`);
}
function Of(e) {
  if (v(e) && pe(e, ke) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (je(t)) return !0;
  return !1;
}
function SR(e) {
  return Of(e.anchor.getNode()) || Of(e.focus.getNode());
}
function _R(e) {
  const { anchor: t, focus: n } = e;
  return t.key === n.key && Of(t.getNode());
}
function MR(e, t) {
  const r = _R(e) ? t : Hp(Gp(t));
  r && e.insertText(r.replace(/\n/g, " "));
}
function ER(e, t = !1, n = () => {
}) {
  const r = wf(e, Pt()._config.namespace);
  if (!r) return !1;
  const i = w(), s = E(i) && SR(i);
  if (!s && r.isInternal || t && E(i) && Ls(i))
    return !1;
  const { text: o } = r;
  if (!o || !E(i)) return !1;
  if (e?.preventDefault(), s)
    return MR(i, o), !0;
  const a = Hp(Gp(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  n(), i.isCollapsed() || i.removeText();
  const l = Pt();
  return c.forEach((u, f) => {
    if (f > 0 && l.dispatchCommand(Uo, void 0), u === "") return;
    const d = w();
    E(d) && d.insertText(u);
  }), !0;
}
function AR(e) {
  if (e.getTextContent() !== q) return !1;
  const t = e.getParent();
  return L(t) ? !Ot(e.getPreviousSibling()) : !1;
}
function PR(e, t) {
  if (t || e.getTextContent() !== q) return "";
  const n = e.getParent();
  if (!L(n) || !Ot(e.getPreviousSibling())) return "";
  const r = n.getCategory();
  return r ? `\\cat ${r}\\cat*` : "";
}
function NR(e) {
  const t = e.getParent();
  return (L(t) ? t.getCaller() : void 0) || Fo;
}
function wR(e) {
  const t = e.getParent();
  return !t || li(t) === void 0;
}
function Jp(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const n = t[0], r = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = id(e);
  let l = "", u = !0;
  for (const f of t) {
    if (A(f) && !f.isInline()) {
      !u && wR(f) && (l += `
`), u = !f.isEmpty();
      continue;
    }
    if (u = !1, Ot(f))
      (f !== r || !e.isCollapsed()) && (l += (f === n ? "" : " ") + NR(f));
    else if (v(f)) {
      let d = f.getTextContent();
      f === n ? f === r ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (d = a < c ? d.slice(a, c) : d.slice(c, a)) : d = o ? d.slice(a) : d.slice(c) : f === r && (d = o ? d.slice(0, c) : d.slice(0, a)), l += AR(f) ? "" : d.replaceAll(q, " ") + PR(f, f === r);
    } else (Tn(f) || Zi(f)) && (f !== r || !e.isCollapsed()) && (l += f.getTextContent().replaceAll(q, " "));
  }
  return l;
}
function YT(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function OR(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (n) => Ie(n) || we(n)
    )
  );
}
function $R(e) {
  const t = w();
  if (!E(t) || t.isCollapsed()) return;
  const n = Jp(t), r = {
    "text/plain": n,
    "text/html": YT(n)
  };
  if (ml() || OR(t)) return r;
  const i = WS(e);
  return i && (r["application/x-lexical-editor"] = i), r;
}
function Om(e, t, n, r) {
  const i = w();
  if (!E(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !jx();
  const s = $R(t);
  return s ? (r !== void 0 && delete s["application/x-lexical-editor"], XT(e, t, i, s, n, r)) : !1;
}
function XT(e, t, n, r, i, s) {
  const o = Af(s);
  if (o !== void 0 && LT(t, e)) return !1;
  const a = r["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), $f(e, t, { "text/plain": qT(a, o) })) : $f(
    e,
    t,
    r,
    i && t.isEditable() ? () => n.removeText() : void 0
  );
}
function $f(e, t, n, r) {
  const i = !n["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || VS(t, null, n), r?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(n)) e.clipboardData.setData(s, o);
  return r?.(), !0;
}
function Rf(e, t) {
  const n = dl(t);
  if (!n?.end) return;
  const r = RR(e, t);
  if (r)
    return r.state.read(
      () => {
        const i = Zo(n, r.standardViewOptions);
        return i ? Jp(i) : void 0;
      },
      { editor: r.editor }
    );
}
const vu = /* @__PURE__ */ new WeakMap();
function RR(e, t) {
  const n = e.getEditorState();
  if (vu.has(n)) {
    const i = vu.get(n);
    if (!i || i.viewOptions === t) return i;
  }
  const r = IR(n, t);
  return vu.set(n, r), r;
}
function IR(e, t) {
  const n = gp(dp);
  if (!n) return;
  const r = Es.deserializeEditorState(e, t);
  if (!r) return;
  const i = ld({
    namespace: "markers-view-copy",
    nodes: [yt, ...gl],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    lr.serializeEditorState(r, n)
  );
  return { viewOptions: t, standardViewOptions: n, editor: i, state: s };
}
function LR({
  viewOptions: e,
  copyLimit: t
}) {
  const [n] = Se();
  return G(() => {
    const r = (i, s) => {
      const o = w();
      if (!E(o) || o.isCollapsed()) return !1;
      const a = Rf(n, e);
      return a === void 0 ? !1 : XT(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        n,
        o,
        { "text/plain": a, "text/html": YT(a) },
        s,
        t
      );
    };
    return it(
      n.registerCommand(Ks, (i) => r(i, !1), Qe),
      n.registerCommand(or, (i) => r(i, !0), Qe)
    );
  }, [n, e, t]), null;
}
const $m = /* @__PURE__ */ new WeakMap();
function qR({
  limit: e,
  viewOptions: t
}) {
  const [n] = Se(), r = re(Af(e)), i = re(t), s = re(!1), o = re(void 0);
  return G(() => {
    r.current = Af(e), i.current = t, o.current?.();
  }, [e, t]), G(() => {
    let a, c;
    const l = (y) => {
      const b = r.current;
      if (b === void 0) return;
      const x = $m.get(y);
      if (y.defaultPrevented && x === void 0) return;
      const S = n.getRootElement();
      if (!S) return;
      const _ = S.ownerDocument.getSelection();
      if (!_ || !UR(_, S)) return;
      y.preventDefault();
      const U = qT(
        x ?? _.toString().replaceAll(q, " "),
        b
      );
      $m.set(y, U);
      const B = y.clipboardData;
      if (B) {
        if (!U) {
          x !== void 0 && B.clearData();
          return;
        }
        B.setData("text/plain", U);
      }
    }, u = (y) => {
      r.current !== void 0 && US(y, "a", { ctrlKey: !Us, metaKey: Us }) && (FR(c?.activeElement, n.getRootElement()) || y.preventDefault());
    }, f = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, d = () => {
      const y = r.current === void 0 ? void 0 : a;
      y !== c && (f(), c = y, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = d;
    const p = (y) => (y?.preventDefault(), !0), h = (y) => {
      const b = r.current;
      if (b === void 0 || (s.current = !1, LT(n, y))) return !1;
      if (b <= 0) return p(y);
      const x = w();
      if (Vc(x))
        return x.getTextContent().length + DT(x.getNodes()) <= b ? !1 : p(y);
      if (!E(x) || x.isCollapsed()) return !1;
      const S = DR(n, i.current);
      return S.$size(x) <= b ? !1 : (J$(b, S.options), x.isCollapsed() ? p(y) : (n.isEditable() || Ry(() => KR(n)), s.current = !0, !1));
    }, g = (y, b) => {
      if (r.current === void 0 || !s.current) return !1;
      s.current = !1;
      const x = w();
      if (!E(x) || x.isCollapsed()) return !1;
      const S = b && n.isEditable() && !eR(x);
      return $f(
        y && typeof y == "object" && "clipboardData" in y ? y : null,
        n,
        { "text/plain": Wp(x, Nf) },
        S ? () => x.removeText() : void 0
      );
    }, m = it(
      n.registerCommand(Ks, h, Xe),
      n.registerCommand(or, h, Xe),
      n.registerCommand(
        Ks,
        (y) => g(y, !1),
        vr
      ),
      n.registerCommand(
        or,
        (y) => g(y, !0),
        vr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      n.registerCommand(
        Oy,
        (y) => r.current === void 0 ? !1 : (y?.preventDefault(), !0),
        Xe
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
function DR(e, t) {
  if (dt(t)) {
    const r = (i) => Jp(i).length;
    return { $size: r, options: { $measure: r } };
  }
  const n = t?.markerMode === "visible" ? t : void 0;
  if (n && Rf(e, n) !== void 0) {
    const r = (i) => Rf(e, n)?.length ?? Wp(i, Nf).length;
    return { $size: r, options: { $measure: r } };
  }
  return {
    $size: (r) => r.getTextContent().length + DT(r.getNodes()),
    options: { $isHidden: Nf }
  };
}
function KR(e) {
  e.getEditorState().read(() => {
    const t = w(), n = e.getRootElement()?.ownerDocument.getSelection();
    if (!E(t) || !n) return;
    const r = Rm(e, t.anchor), i = Rm(e, t.focus);
    r && i && n.setBaseAndExtent(...r, ...i);
  });
}
function Rm(e, t) {
  const n = e.getElementByKey(t.key);
  if (!n) return;
  if (t.type === "text") {
    const a = BS(n);
    return a ? [a, t.offset] : void 0;
  }
  const r = t.getNode(), i = A(r) ? r.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [n, n.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function UR(e, t) {
  const n = t.ownerDocument.createRange();
  n.selectNodeContents(t);
  for (let r = 0; r < e.rangeCount; r++) {
    const i = e.getRangeAt(r), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, n) < 0 && s.setStart(n.startContainer, n.startOffset), i.compareBoundaryPoints(i.END_TO_END, n) > 0 && s.setEnd(n.endContainer, n.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const BR = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function FR(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? BR.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const zR = /^\+/;
function Yp(e, t) {
  const n = t.replace(zR, "");
  return Object.hasOwn(e.markers, n) ? e.markers[n] : void 0;
}
function QT(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let n = e.length - 1; n >= 0; n--)
    if (t.occursUnder.includes(e[n].marker) && (n === e.length - 1 || t.rank === 0 || e[n + 1].rank <= t.rank))
      return { keep: n + 1, joins: !0 };
}
function ZT(e, t) {
  return QT(e, t) !== void 0;
}
function If(e, t) {
  const n = QT(e, t);
  return n ? (n.joins && (e.length = n.keep, e.push(t)), !0) : !1;
}
function Oc(e, t, n) {
  const r = A(e) ? e.getChildren().filter(N) : [];
  if (r.length === 0) {
    n.set(e.getKey(), t);
    return;
  }
  for (const i of r) n.set(i.getKey(), t);
}
function jR(e, t, n, r, i) {
  const s = Yp(r, t);
  if (!s) {
    Oc(e, "unknown", i);
    return;
  }
  if (n === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(n) && Oc(e, "invalid", i);
}
function qs(e, t, n, r, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || jR(s, o, t, n, r), qs(s, t, n, r, i || o === "xq");
    } else if (Oe(s)) {
      if (i) continue;
      const o = Yp(n, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && r.set(s.getKey(), "invalid") : r.set(s.getKey(), "unknown");
    } else L(s) ? qs(s, s.getMarker(), n, r, i) : rt(s) || A(s) && qs(s, t, n, r, i);
}
function VR(e, t) {
  const n = /* @__PURE__ */ new Map(), r = [], i = (o, a) => {
    const c = Yp(e, a);
    if (!c) {
      Oc(o, "unknown", n), If(r, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    If(r, l) || Oc(o, "invalid", n);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of _e().getChildren())
    rt(o) || (Ie(o) ? (i(o, o.getMarker()), s(o) && qs(o, void 0, e, n, !1)) : at(o) ? i(o, o.getMarker()) : ye(o) ? (i(o, o.getMarker()), s(o) && qs(o, o.getMarker(), e, n, !1)) : A(o) && s(o) && qs(o, "p", e, n, !1));
  return n;
}
function WR(e) {
  return !!e?.includes("(basic)");
}
function HR(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function ev(e, t) {
  return !e.startsWith("zpa") && e !== "c" && _f(e, t);
}
function Xp(e, t) {
  const n = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (n)
    return { marker: t, rank: n.rank ?? 0, occursUnder: n.occursUnder ?? [] };
}
function tv(e, t) {
  const n = [];
  for (const r of t) {
    const i = Xp(e, r);
    i && If(n, i);
  }
  return n;
}
function Qa(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: HR(e.description),
    isBasic: WR(e.description)
  };
}
function GR(e, t) {
  const n = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, r = n(e), i = n(t);
  return r.prefix !== i.prefix ? r.prefix < i.prefix ? -1 : 1 : r.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : r.digits - i.digits;
}
function Lf(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : GR(e.marker, t.marker);
}
function qf(e, t, n) {
  if (t.noteMarker) return [];
  const r = tv(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && ev(i.marker, n)
  ).filter((i) => {
    const s = Xp(e, i.marker);
    return s !== void 0 && ZT(r, s);
  }).map((i) => Qa(i, "paragraph")).sort(Lf);
}
function JR(e, t, n) {
  const { noteMarker: r, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => ev(c.marker, n)
  );
  if (r)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(r)
    ).map((c) => Qa(c, "character")).sort(Lf);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Qa(c, "character")),
    ...a.map((c) => Qa(c, "note"))
  ].sort(Lf);
}
function YR(e, t) {
  return t.map((n, r) => {
    const i = e.markers[n]?.endMarker ?? `${n}*`;
    return { marker: `${r === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function XR(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function QR(e, t, n) {
  return [
    ...YR(e, t.openCharMarkers),
    ...JR(e, t, n)
  ].sort(XR);
}
function ZR(e, t, n) {
  if (t.source === "paragraph") return qf(e, t, n);
  const r = QR(e, t, n);
  return r.length > 0 ? r : qf(e, t, n);
}
function eI(e, t, n) {
  const r = qf(e, t, n), i = tv(e, t.previousParaMarkers), s = Xp(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && ZT(i, s) ? "ip" : "p", c = r.findIndex((u) => u.marker === a);
  if (c <= 0) return r;
  const [l] = r.splice(c, 1);
  return [l, ...r];
}
const $c = "￼", Im = "|", ri = "\\", Cu = "+", tI = /([-\w]+)="(.*?)"/g, nI = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), rI = /* @__PURE__ */ new Map([["file", "src"]]);
class Qp {
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
function Lm(e, t) {
  const n = [e.indexOf(ri, t + 1), e.indexOf($c, t + 1)].filter(
    (r) => r >= 0
  );
  return n.length > 0 ? Math.min(...n) : e.length;
}
function qm(e) {
  const t = e.slice(1), n = [...t.matchAll(tI)];
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
function iI(e, t) {
  const n = e.map(
    (o, a) => o.name === void 0 || !nI.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), r = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && rI.get(o.name) === a.name), i = /* @__PURE__ */ new Set(), s = [];
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, u) => n[u] && !i.has(u) && r(l, o)
    );
    c < 0 || (i.add(c), s.push([c, a]));
  }), s;
}
function Dm(e, t, n) {
  let r = 0, i = -1;
  for (const s of e) {
    if (!s.same) continue;
    const { end: o, otherEnd: a } = Ta(s, n);
    o <= t && o > i && (i = o, r = a);
  }
  return r;
}
function sI(e, t, n, r, i) {
  if (e === t) {
    n.push(r, r + e.length, i, i + t.length, !0);
    return;
  }
  const s = qm(e), o = qm(t);
  if (!s || !o) {
    n.push(r, r + 1, i, i + 1, !0), n.pushStretch(e.slice(1), r + 1, t.slice(1), i + 1);
    return;
  }
  const a = new Qp();
  a.push(0, 1, 0, 1, !0);
  const c = iI(s, o);
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
    const h = Dm(l, d.start, "live");
    a.push(d.start, d.end, h, h, !1);
  });
  const f = new Set(c.map(([, d]) => d));
  o.forEach((d, p) => {
    if (f.has(p)) return;
    const h = Dm(l, d.start, "settled");
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
function nv(e, t, n, r, i) {
  let s = t, o = 0;
  for (; s < e.length && o < n.length; ) {
    const c = n[o] === $c && e[s] !== $c ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const u = new Qp(), f = nv(e, s, c, u, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: f,
        inner: { segments: lI(u.segments, s) }
      }), r.push(s, f, o, o + 1, !1), s = f, o += 1;
      continue;
    }
    if (e[s] === Im && n[o] === Im) {
      const u = Lm(e, s), f = Lm(n, o);
      sI(e.slice(s, u), n.slice(o, f), r, s, o), s = u, o = f;
      continue;
    }
    const l = n[o] === ri ? oI(e, s, n, o) || cI(e, s, n, o, i.spellings) || (!i.prefix && s === 0 && o === 0 ? aI(e, n) : 0) : 0;
    if (l > 0) {
      r.push(s, s, o, o + l, !1), o += l;
      continue;
    }
    if (e[s] === n[o]) {
      r.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (e[s - 1] === ri && n[o - 1] === ri && e[s] === Cu != (n[o] === Cu)) {
      e[s] === Cu ? (r.push(s, s + 1, o, o, !1, !0), s += 1) : (r.push(s, s, o, o + 1, !1, !0), o += 1);
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
const Os = /\\\+?[\w-]+/y;
function oI(e, t, n, r) {
  Os.lastIndex = r;
  const i = Os.exec(n)?.[0];
  return !i || n[r + i.length] !== ri ? 0 : n.startsWith(i, r + i.length) && e.startsWith(i, t) && !e.startsWith(i, t + i.length) ? i.length : 0;
}
const Da = "\\p";
function aI(e, t) {
  return !t.startsWith(Da) || t[Da.length] !== ri ? 0 : e[0] === ri && !e.startsWith(Da) ? Da.length : 0;
}
function cI(e, t, n, r, i) {
  Os.lastIndex = r;
  const s = Os.exec(n)?.[0];
  if (!s || n[r + s.length] !== $c) return 0;
  const o = i?.get(r + s.length);
  if (o === void 0 || e.startsWith(s, t)) return 0;
  Os.lastIndex = 0;
  const a = Os.exec(o)?.[0];
  return a !== void 0 && e.startsWith(a, t) ? s.length : 0;
}
function lI(e, t) {
  return e.map((n) => ({
    ...n,
    liveStart: n.liveStart - t,
    liveEnd: n.liveEnd - t
  }));
}
function uI(e, t, n) {
  const r = new Qp(), i = /* @__PURE__ */ new Map();
  return nv(e, 0, t, r, { prefix: !1, spellings: n, literals: i }), { alignment: { segments: r.segments }, literals: i };
}
function Ta(e, t) {
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
function rv(e, t, n) {
  return e.segments.find((r) => {
    const { start: i, end: s } = Ta(r, n);
    return i <= t && t < s;
  });
}
function iv(e, t) {
  let n = 0, r = 0;
  for (const i of e.segments) {
    const { end: s, otherEnd: o } = Ta(i, t);
    n = Math.max(n, s), r = Math.max(r, o);
  }
  return [n, r];
}
function Zp(e, t, n) {
  const r = rv(e, t, n);
  if (r) {
    const { start: o, otherStart: a } = Ta(r, n);
    return r.same ? a + (t - o) : void 0;
  }
  const [i, s] = iv(e, n);
  return t === i ? s : void 0;
}
function ao(e, t, n) {
  const r = rv(e, t, n);
  if (r) {
    const { start: i, otherStart: s } = Ta(r, n);
    return r.same ? s + (t - i) : s;
  }
  return iv(e, n)[1];
}
function fI(e, t) {
  const n = ao(e, t, "settled"), r = e.segments.find(
    (i) => i.nesting && i.settledStart === t && i.settledEnd === t && i.liveEnd === n
  );
  return r ? r.liveStart : n;
}
const Ln = /\s/;
function dI(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function Df(e) {
  const t = [];
  for (const r of e.spans)
    for (let i = r.start; i < r.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: Ln.test(s) });
    }
  const n = e.spans.filter((r) => r.isSentinel).map((r) => r.start);
  return { bytes: t, placeholders: n };
}
function Za({ bytes: e }, t) {
  return e.filter((n) => n.position < t && !n.isWs).length;
}
function pI({ bytes: e }, t) {
  let n = 0;
  for (const r of e) r.position < t && (n = r.isWs ? n + 1 : 0);
  return n;
}
function Kf({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const Km = "cat", hI = "category";
function gI(e) {
  return v(e) && e.getTextContent().trim() === "";
}
function mI(e) {
  const t = { text: "", spans: [], sentinels: [] }, n = [], r = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    r(a, dI(Km, c)), n.push({
      ownerKey: a.getKey(),
      markerName: Km,
      keyName: hI,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = ga(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const f = wt(a);
    let d = !1;
    for (const p of a.getChildren())
      u !== void 0 && d && !gI(p) && (i(a, u), u = void 0), o(p), (Ot(p) || f && (f.is(p) || p.isParentOf(f))) && (d = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (Ot(a)) {
      const c = a.getParent();
      r(a, L(c) ? c.getCaller() : "");
    } else v(a) || Ut(a) ? r(a, a.getTextContent()) : L(a) ? s(a) : A(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: n };
}
function eh(e) {
  const t = Df(e);
  return {
    runs: e.sentinels.map((n, r) => {
      const { spelling: i, foldedAttributes: s } = mI(n);
      return {
        memberCount: n.length,
        before: Za(t, t.placeholders[r] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: Kf(Df(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: Kf(t).map(({ byte: n }) => n).join("")
  };
}
function Rc(e, t) {
  return {
    facts: Df(e),
    carried: e.sentinels.map((n, r) => {
      const i = new Set(t[r]?.map((s) => s.getKey()));
      return n.map((s) => i.has(s.getKey()));
    })
  };
}
function Ic(e, t) {
  const n = e.carried.map(
    (d) => d.map(() => {
    })
  ), r = Kf(e.facts), { alignment: i, literals: s } = uI(
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
    const g = Zp(i, Za(e.facts, h), "live"), m = g === void 0 ? void 0 : u.get(g);
    m === void 0 || t.runs[m].memberCount !== a(d) || o(p, m);
  });
  const f = [];
  for (const [d, p] of s) {
    const h = u.get(d);
    if (h === void 0) continue;
    const g = t.runs[h], m = r[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, y = p.liveEnd > p.liveStart ? r[p.liveEnd - 1].position + 1 : m, b = Za(e.facts, m);
    f.push({
      sentinelIndex: h,
      liveBefore: b,
      liveLength: Za(e.facts, y) - b,
      liveWsBefore: pI(e.facts, m),
      settledBefore: g.before,
      spelling: g.spelling,
      inner: p.inner,
      foldedAttributes: g.foldedAttributes
    });
  }
  return { sentinelMap: n, settledOnlyRuns: f, alignment: i };
}
function va(e, t, n) {
  return {
    nonWsBefore: ao(
      e,
      t.nonWsBefore,
      n === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function sv(e, t, n) {
  return Zp(e.inner, t, n === "toSpelling" ? "live" : "settled");
}
function ov(e, t) {
  return e.find(
    (n) => t.nonWsBefore === n.liveBefore && t.wsRun >= n.liveWsBefore
  );
}
function th(e, t) {
  for (const n of e) {
    const r = t.nonWsBefore - n.liveBefore;
    if (r <= 0 || r >= n.liveLength) continue;
    const i = sv(n, r, "toSpelling");
    return {
      run: n,
      count: r,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function kl(e, t) {
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
function xl(e, t) {
  const n = [];
  for (let r = t; r; r = r.getParent()) {
    if (r.is(e)) return n;
    n.unshift(r.getIndexWithinParent());
  }
}
const _t = da;
function av(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== _t ? e.slice(1) : e;
}
function Um(e) {
  return to(e) ? e.markerSyntax ?? "opening" : void 0;
}
function cv(e, t, n, r) {
  const i = { ...r, noteMode: "expanded" }, s = lr.serializeEditorState(
    {
      type: sr,
      version: ir,
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
  for (; Um(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Nt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Um(a[u - 1]) === "closing"; )
    u--;
  const f = a.slice(c, u);
  return f.length === 0 ? { failure: "empty" } : { children: f };
}
function lv(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const n = `${e.getMarker()}*`, r = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === n
  );
  if (!(r < 0))
    return { before: t.slice(0, r), after: t.slice(r + 1) };
}
function uv(e, t, n, r, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([u]) => u !== "closed")
  ), o = lr.serializeEditorState(
    {
      type: sr,
      version: ir,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === Ze.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function fv(e, t, n, r) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = lr.serializeEditorState(
    { type: sr, version: ir, content: [s, ...n] },
    r
  ).root.children;
  if (!Id(o)) return { failure: "shape" };
  const c = ok(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function To(e, t, n) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + n.length,
    isSentinel: !1
  }), e.text += n;
}
function vo(e, t) {
  const n = FT.exec(e.text)?.[0];
  n !== void 0 && (e.text += n === "\\" ? q : " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += _t;
}
function Yt(e) {
  return e.replaceAll(q, " ");
}
const yI = `\\${q}${_t}`;
function dv(e) {
  return e.forEach((t, n) => {
    typeof t == "string" ? e[n] = t.replaceAll(yI, `\\${_t}`) : t.content && dv(t.content);
  }), e;
}
const pv = "\u2028";
function nh(e) {
  return e.replaceAll(pv, "");
}
function rh(e) {
  return e ? pv : " ";
}
function bI(e) {
  return L(e[0]) ? "note" : Ae(e[0]) ? "verse" : "other";
}
function us(e, t) {
  return dv(
    Yc(nh(e.text), {
      ...t,
      placeholders: e.sentinels.map(bI)
    })
  );
}
function kI(e, t, n = !1, r = !1) {
  if (dt(t)) return Yt(e);
  if (e === q && !r) return " ";
  const i = n && e.startsWith(q), s = i ? e.slice(1) : e, o = n && !i ? xI.exec(s) : null;
  return o ? `${o[0]} ${s.slice(o[0].length + 1).replaceAll(q, "~")}` : (i ? " " : "") + s.replaceAll(q, "~");
}
const xI = /^[^\s\u200B\\|*]+(?=\u00A0)/;
function Ds(e) {
  const t = e.getTextContent();
  return Cn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Tl(e, t) {
  const n = e[t];
  if (!ze(n)) return [];
  const { attribute: r, closing: i, wrapper: s } = Qc(n);
  if (s) return [s];
  const o = n.getNextSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== n.getMarker())
    return [];
  const a = [o];
  return r && a.push(r), i && a.push(i), a;
}
function hv(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function vl(e, t) {
  const n = [];
  let r = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Wo(r, i);
    if (c)
      n.push(c), r = c;
    else if (s && o && a)
      n.push(s, o, a), r = a;
    else if (s || o || a)
      break;
  }
  return n;
}
function ih(e) {
  return !!e.getUnknownAttributes();
}
function Cl(e, t) {
  const n = t(e)?.type;
  return n === T.Milestone || n === void 0 && bd(e);
}
function sh(e) {
  return e.getIsCollapsed() !== !1 || e.getChildren().some((n) => N(n) && n.getMode() === "token") || Object.keys(e.getUnknownAttributes() ?? {}).some((n) => n !== "closed") ? !1 : e.getChildren().some((n) => {
    if (!N(n) || pr(n)) return !1;
    if (n.getMarkerSyntax() !== "opening") return !0;
    const r = n.getTextContent(), i = (oo.exec(r) ?? UT.exec(r))?.[1];
    return i === void 0 || i.startsWith("+") || !Ze.isValidMarker(i) || n.getMarker() !== e.getMarker();
  });
}
function Sl(e, t) {
  return ze(e) ? !Cl(e.getMarker(), t) : L(e) ? !sh(e) : rt(e) ? !0 : Ae(e) ? ih(e) : D(e) ? gv(e, t) : !1;
}
function gv(e, t) {
  return mv(e, e.getMarker(), t);
}
function mv(e, t, n) {
  return p0(e) ? !0 : q_(t) || n(t) !== void 0 || TI(e) && !vI(e) ? !1 : t !== e.getMarker() || !CI(e);
}
function TI(e) {
  const t = e.getParent();
  return t !== null && On(t) !== void 0;
}
function vI(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((n) => n !== "closed");
}
function CI(e) {
  const t = e.getChildren().filter((i) => N(i) && i.getMarker() === e.getMarker()).filter(N);
  if (t.some((i) => !pr(i))) return !0;
  const n = t.some((i) => i.getMarkerSyntax() === "opening"), r = t.some((i) => i.getMarkerSyntax() === "closing");
  return !n && r;
}
function yv(e) {
  let t = e, n = t.getParent();
  for (; !t.getNextSibling() && ae(n); )
    t = n, n = t.getParent();
  let r = t.getNextSibling();
  for (; ae(r); ) r = r.getFirstChild();
  return Ae(r);
}
const un = "", fn = "";
function Bm(e) {
  return e.flatMap((t) => je(t) ? t.getChildren() : [t]);
}
function SI(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  let r = !1;
  const i = (s) => {
    if (ae(s)) {
      r = !0, s.getChildren().forEach(i), r = !0;
      return;
    }
    r && t.length > 0 && n.add(s), r = !1, t.push(s);
  };
  return e.forEach(i), { nodes: t, splitByMark: n };
}
function _I(e, t) {
  return v(e) && !Ae(e) && !N(e) && !on(e) && !Sl(e, t) && pe(e, ke) !== "attribute";
}
function As(e, t, n, r = !1, i) {
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (ze(o)) {
      const a = Tl(e, s);
      Cl(o.getMarker(), n) && hv(a) ? (t.push(
        un,
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
      ), As(Bm(a), t, n), t.push(fn)) : t.push(_t), s += a.length;
    } else if (Ae(o)) {
      const a = vl(e, s);
      ih(o) ? t.push(_t) : (t.push(
        un,
        "verse",
        Yt(o.getTextContent()),
        JSON.stringify({
          number: o.getNumber(),
          altnumber: o.getAltnumber() ?? null,
          pubnumber: o.getPubnumber() ?? null
        })
      ), As(Bm(a), t, n), t.push(fn)), s += a.length;
    } else if (N(o))
      t.push(un, "marker", Yt(o.getTextContent()), fn);
    else if (on(o))
      t.push(
        un,
        "unmatched",
        Yt(o.getTextContent()),
        o.getMarker(),
        fn
      );
    else if (Sl(o, n))
      t.push(_t);
    else if (Zi(o))
      t.push(rh(yv(o)));
    else if (v(o) && pe(o, ke) === "attribute")
      t.push(
        un,
        "attribute",
        Yt(Ds(o)),
        fn
      );
    else if (v(o)) {
      let a = Ds(o);
      if (r) {
        let c = e[s + 1];
        for (; i?.has(c) && _I(c, n); )
          a += Ds(c), s += 1, c = e[s + 1];
        a = av(a);
      }
      t.push(Yt(a));
    } else if (D(o)) {
      t.push(un, "char", JSON.stringify(o.getUnknownAttributes() ?? null));
      const { nodes: a, splitByMark: c } = SI(o.getChildren());
      As(a, t, n, !0, c), t.push(fn);
    } else ae(o) ? As(o.getChildren(), t, n, r) : A(o) ? (t.push(un, o.getType()), As(o.getChildren(), t, n), t.push(fn)) : t.push(_t);
  }
}
function _r(e, t) {
  const n = [];
  return As(e, n, t), n.join("");
}
function ur(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Ys(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function MI(e) {
  return e.$?.textType;
}
function oh(e) {
  return e.type ?? "";
}
function _l(e, t, n) {
  return t === "closing" ? ct(e, n) : t === "selfClosing" ? ct("") : Je(e, n);
}
function Su(e, t) {
  const n = e[t];
  if (!(!n || oh(n) !== "attribute-run"))
    return ur(n) ?? [];
}
function Mr(e, t) {
  const n = [];
  return Ao(e, n, t), n.join("");
}
function Ao(e, t, n, r = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = oh(s);
    if (o === "ms") {
      const l = s, u = Su(e, i + 1);
      u && Cl(l.marker ?? "", n) ? (t.push(
        un,
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
      ), Ao(u, t, n), t.push(fn), i += 1) : t.push(_t);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(_t);
        continue;
      }
      t.push(
        un,
        "verse",
        Yt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, f = Su(e, i + 1 + u);
      for (; f; )
        Ao(f, t, n), u++, f = Su(e, i + 1 + u);
      t.push(fn), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        un,
        "marker",
        Yt(
          _l(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        fn
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(rh(xd(e[i + 1])));
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(un, "char", JSON.stringify(l.unknownAttributes ?? null)), Ao(ur(s) ?? [], t, n, !0), t.push(fn);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(_t);
      continue;
    }
    if (o === "unmatched") {
      const l = WM(s) ? s.marker : "";
      t.push(un, "unmatched", Yt(Ys(s) ?? ""), l), t.push(fn);
      continue;
    }
    const a = Ys(s);
    if (a !== void 0 && MI(s) === "attribute") {
      t.push(un, "attribute", Yt(a), fn);
      continue;
    }
    if (a !== void 0) {
      t.push(Yt(r ? av(a) : a));
      continue;
    }
    const c = ur(s);
    c ? (t.push(un, o), Ao(c, t, n), t.push(fn)) : t.push(_t);
  }
}
function fi(e) {
  let t = 0;
  for (const n of e) {
    const r = ur(n);
    if (r) {
      t += fi(r);
      continue;
    }
    const i = Ys(n);
    if (i !== void 0)
      for (const s of i) s === _t && t++;
  }
  return t;
}
function Xs(e, t, n, r, i) {
  Nn(e.getChildren(), t, n, r, i);
}
function Nn(e, t, n, r, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (N(a))
      To(t, a, Yt(a.getTextContent()));
    else if (ze(a)) {
      s();
      const c = Tl(e, o);
      Cl(a.getMarker(), n) && hv(c) ? Nn(c, t, n, r) : vo(t, [a, ...c]), o += c.length;
    } else if (L(a) && sh(a)) {
      s();
      const c = wt(a);
      for (const l of a.getChildren())
        c?.is(l) ? To(t, l, Yt(l.getTextContent())) : Nn([l], t, n, r);
    } else if (L(a) || rt(a))
      s(), vo(t, [a]);
    else if (Ae(a)) {
      s();
      const c = vl(e, o);
      ih(a) ? vo(t, [a, ...c]) : (To(t, a, Yt(Ds(a))), Nn(c, t, n, r)), o += c.length;
    } else if (D(a))
      s(), gv(a, n) ? vo(t, [a]) : Xs(a, t, n, r, { pending: !0 });
    else if (Zi(a))
      s(), To(t, a, rh(yv(a)));
    else if (v(a)) {
      const c = a.getParent(), l = Cn(a) || pe(a, ke) === "attribute" || we(c) && !!gi(c)?.is(a), u = s() && !l;
      To(
        t,
        a,
        l ? Yt(Ds(a)) : kI(
          Ds(a),
          r,
          u,
          uk(a)
        )
      );
    } else A(a) ? Xs(a, t, n, r, i) : (s(), vo(t, [a]));
  }
}
function ah(e) {
  const [t] = e;
  return ye(t) && t.getMarker() === "";
}
function ch(e, t, n) {
  if (e.getUnknownAttributes()) return;
  const r = t(e.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown && r !== T.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (rt(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Xs(e, i, t, n), i;
}
function EI(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  return Xs(e, r, t, n), r;
}
function lh(e, t, n) {
  if (e.length === 0 || !e.every(ye)) return;
  const r = { text: "", spans: [], sentinels: [] };
  return uh(r, e, t, n) ? r : void 0;
}
function Fm(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (ye(i)) {
      const s = ch(i, t, n);
      if (!s) return;
      const o = r.text.length;
      s.spans.forEach(
        (a) => r.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), r.sentinels.push(...s.sentinels), r.text += s.text;
    } else we(i) ? Nn(i.getChildren(), r, t, n) : Nn([i], r, t, n);
  return r;
}
function uh(e, t, n, r) {
  for (const i of t) {
    const s = ch(i, n, r);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Ml(e, t) {
  let n = 0;
  const r = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(_t);
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
function ta(e, t = []) {
  for (const n of e)
    Ae(n) ? t.push(n) : A(n) && ta(n.getChildren(), t);
  return t;
}
function El(e) {
  let t = 0;
  const n = (r) => {
    if (v(r))
      for (const i of r.getTextContent()) i === _t && t++;
    else A(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function Yr(e) {
  let t = 0;
  for (const n of e)
    if (typeof n == "string")
      for (const r of n) r === _t && t++;
    else n.content && (t += Yr(n.content));
  return t;
}
function Al(e, t, n, r = { text: "", spans: [], sentinels: [] }) {
  for (const i of e)
    r.text.length > 0 && (r.text += " "), A(i) && Xs(i, r, t, n);
  return r;
}
function bv(e, t, n, r) {
  const { out: i } = wl(e, n, r);
  return Al(t, n, r, i);
}
function ii(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : n, o) : o;
    for (let l = 0; l < c; l++)
      Ln.test(e.text[s.start + l]) ? i++ : (r++, i = 0);
    if (a) return { nonWsBefore: r, wsRun: i };
  }
}
function Uf(e, t) {
  t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => Uf(n, t));
}
function fh(e, t, n) {
  return e.spans.find(
    (r) => !r.isSentinel && r.key === t && n <= r.end - r.start
  );
}
function Io(e, t, n) {
  const r = (f, d) => {
    const p = ii(e, f, d), h = fh(e, f, d);
    return p && h ? { anchor: p, position: h.start + d } : void 0;
  }, i = (f) => {
    const d = f.end - f.start, p = ii(e, f.key, d);
    return p ? { anchor: p, position: f.start + d } : void 0;
  };
  if (!A(t)) return r(t.getKey(), n);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, n).forEach((f) => Uf(f, s));
  const o = [...e.spans].reverse().find((f) => s.has(f.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  Uf(t, a);
  const c = e.spans.find((f) => a.has(f.key));
  if (c && !c.isSentinel) return r(c.key, 0);
  const l = [...e.spans].reverse().find((f) => !a.has(f.key) && Q(f.key)?.isBefore(t));
  if (l) return i(l);
  const u = e.spans[0];
  return u && !u.isSentinel ? r(u.key, 0) : void 0;
}
function $s(e) {
  if (e.isSentinel) return !1;
  const t = Q(e.key);
  return N(t) && t.getMarkerSyntax() !== "opening";
}
function Bf(e) {
  const t = Q(e.key);
  if (!N(t)) return;
  const n = t.getParent();
  if (!D(n)) return;
  const r = n.getParent();
  if (r)
    return {
      key: r.getKey(),
      offset: n.getIndexWithinParent() + 1,
      type: "element"
    };
}
function _u(e) {
  const t = Q(e.key), n = t?.getParent(), r = n?.getChildren();
  if (!t || !n || !r) return;
  const i = r.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Ae(t) ? vl(r, i) : ze(t) ? Tl(r, i) : [], o = s[s.length - 1] ?? t;
  return { key: n.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function mn(e, t, {
  addressDisplayBytes: n = !1,
  endAfterSkippedConstruct: r = !1
} = {}) {
  const { text: i, spans: s } = e;
  let o, a, c = t.nonWsBefore, l = t.wsRun, u = !1;
  e: for (const [h, g] of s.entries()) {
    const m = g.end - g.start, y = !g.isSentinel && (n || !$s(g));
    if (u) {
      if (!y) continue;
      o = { key: g.key, offset: 0 };
      break;
    }
    for (let b = 0; b < m; b++) {
      const x = i[g.start + b];
      if (c === 0 && (l === 0 || !Ln.test(x))) {
        if (y) {
          o = { key: g.key, offset: b };
          break e;
        }
        u = !0;
        continue e;
      }
      c > 0 ? Ln.test(x) || c-- : l--;
    }
    if (c === 0 && l === 0) {
      const b = s[h + 1]?.isSentinel === !0;
      if (y && (!n || b)) {
        o = { key: g.key, offset: m };
        break;
      }
      const x = s[h + 1];
      if (r && !y && x && (x.isSentinel || $s(x))) {
        const S = g.isSentinel ? _u(g) : Bf(g);
        if (S) return S;
      }
      if (g.isSentinel && b) {
        const S = _u(g);
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
  if (d && $s(d)) {
    const h = Bf(d);
    if (h) return h;
  }
  if (d?.isSentinel) {
    const h = _u(d);
    if (h) return h;
  }
  const p = [...s].reverse().find((h) => !h.isSentinel && !$s(h));
  if (p) return { key: p.key, offset: p.end - p.start, type: "text" };
}
function kv(e, t = []) {
  for (const n of e)
    ae(n) && t.push(n), A(n) && kv(n.getChildren(), t);
  return t;
}
function xv(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => xv(n, t)), t;
}
function AI(e, t, n) {
  const r = ii(e, t.key, n);
  if (r)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: r,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: r };
}
function Ca(e, t, n = t.sentinels, r) {
  const i = [];
  for (const o of kv(e)) {
    const a = xv(o), c = t.spans.filter((b) => a.has(b.key)), l = c[0], u = c[c.length - 1];
    if (!l || !u) continue;
    const f = AI(t, l, 0), d = ii(t, u.key, u.end - u.start);
    if (!f || !d) continue;
    const p = o.getTypedOnClicks(), h = o.getTypedOnRemoves(), g = o.getTypedOnMouseEnters(), m = o.getTypedOnMouseLeaves(), y = Object.entries(o.getTypedIDs()).flatMap(
      ([b, x]) => x.map((S) => ({
        type: b,
        id: S,
        onClick: p[b]?.[S],
        onRemove: h[b]?.[S],
        onMouseEnter: g[b]?.[S],
        onMouseLeave: m[b]?.[S]
      }))
    );
    y.length > 0 && i.push({ annotations: y, start: f, end: d });
  }
  const s = (o) => {
    const a = o.getKey();
    for (const c of Lr(o)) {
      if (c.start === c.end || !fh(t, a, c.start)) continue;
      const l = ii(t, a, c.start), u = ii(t, a, c.end);
      if (!l || !u) continue;
      const f = r && pc(r, c.type, c.id);
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
  return e.forEach(s), { ranges: i, live: i.length > 0 ? Rc(t, n) : void 0 };
}
function PI(e, t, n) {
  const r = Tv(e);
  if (!r) return;
  const i = r[r.length - 1].getNextSibling();
  if (!ae(i) || !i.hasID(t, n)) return;
  const s = i.getFirstChild();
  s && r.forEach((o) => s.insertBefore(o));
}
function NI(e, t) {
  const n = Tv(e);
  if (!n) return;
  const r = Ui();
  r.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), n[0].insertBefore(r), r.append(...n);
}
function Tv(e) {
  const t = Q(e), n = t?.getParent()?.getChildren();
  if (!t || !n) return;
  const r = n.findIndex((s) => s.is(t));
  if (r < 0) return;
  const i = Ae(t) ? vl(n, r) : ze(t) ? Tl(n, r) : [];
  return [t, ...i];
}
function vv(e, t, n, r) {
  const i = n.settledOnlyRuns, s = { addressDisplayBytes: r, endAfterSkippedConstruct: !r }, o = th(i, e);
  if (o) {
    if (!o.within) return;
    const u = mn(o.run.spelling, o.within, s);
    return u ? { point: u, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex } : void 0;
  }
  const a = r && ov(i, e);
  if (a) {
    const u = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), f = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, d = mn(t, f, s);
    return d && u ? { point: d, at: f.nonWsBefore, preservedKey: u } : void 0;
  }
  const c = va(n.alignment, e, "toSettled"), l = mn(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function wI(e, t, n) {
  if (e.kind === "byte") return vv(e.anchor, t, n, !0);
  const r = n.sentinelMap[e.run]?.find((a) => a !== void 0), i = r && t.sentinels[r.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = va(n.alignment, e.anchor, "toSettled"), o = mn(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function zm(e) {
  if (e.type !== "text") return e;
  const t = Q(e.key);
  if (v(t)) return e;
  const n = t?.getParent();
  if (!t || !n) return;
  const r = t.getIndexWithinParent() + (e.offset > 0 ? 1 : 0);
  return { key: n.getKey(), offset: r, type: "element" };
}
function OI(e, t) {
  const n = (s) => {
    if (s.type !== "text") return s;
    const o = Q(s.key), a = o?.getParent();
    return !v(o) || !a ? s : s.offset === 0 ? { key: a.getKey(), offset: o.getIndexWithinParent(), type: "element" } : s.offset === o.getTextContentSize() ? { key: a.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" } : s;
  }, r = n(e), i = n(t);
  return r.key === i.key && r.offset === i.offset && r.type === i.type;
}
function Sa({ ranges: e, live: t }, n) {
  if (e.length === 0 || !t) return;
  const r = w()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = n();
      if (!o) continue;
      const a = Ic(t, eh(o)), c = wI(i.start, o, a), l = vv(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const u = i.start.anchor;
      if (c.at === l.at && u.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { preservedKey: f } = c, d = zm(c.point), p = zm(l.point);
      if (!d || !p) continue;
      if (OI(d, p)) {
        f && NI(f, s);
        continue;
      }
      const h = Ur();
      h.anchor.set(d.key, d.offset, d.type), h.focus.set(p.key, p.offset, p.type), Xd(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && PI(f, s.type, s.id);
    }
  jn(r);
}
function dh(e, t, n) {
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
function Cv(e, t) {
  return e.sentinels.filter((r, i) => r.length > 0 && (t[i]?.length ?? 0) === 0).map((r) => r[0].getKey()).reverse().reduce((r, i) => {
    const s = r.spans.find((o) => o.isSentinel && o.key === i);
    return s ? dh(r, s.start, s.end) : r;
  }, e);
}
function fs(e) {
  const t = e.exportJSON();
  return A(e) && Array.isArray(t.children) && e.getChildren().forEach((n) => t.children?.push(fs(n))), t;
}
function Pl(e, t, n, r, i, s, o) {
  const a = Ca(
    e,
    Cv(t, n),
    n
  );
  if (a.ranges.length === 0) return r;
  const c = {
    ...a,
    ranges: a.ranges.map((f) => ({
      ...f,
      annotations: f.annotations.map(({ type: d, id: p }) => ({ type: d, id: p }))
    }))
  }, l = ld({
    nodes: [yt, ...gl],
    onError: (f) => {
      throw f;
    }
  });
  ud(
    l,
    yt,
    (f) => Ui(f.getTypedIDs()),
    (f, d) => Object.entries(f.getTypedIDs()).forEach(
      ([p, h]) => h.forEach((g) => d.addID(p, g))
    )
  );
  let u;
  return l.update(
    () => {
      const f = _e(), d = i === "noteContent" ? Hn() : f;
      d !== f && f.append(d), u = d.getKey(), r.forEach((h) => d.append(Dr(h))), Sa(c, () => {
        const h = d.getChildren();
        if (i === "paras") return Al(h, s, o);
        if (i === "chapter")
          return we(h[0]) ? na(h[0], s, o) : void 0;
        if (i === "bookLine") {
          const [m, ...y] = h;
          return Ie(m) ? bv(m, y, s, o) : void 0;
        }
        const g = { text: "", spans: [], sentinels: [] };
        return Nn(h, g, s, o), g;
      });
    },
    { discrete: !0 }
  ), l.getEditorState().read(() => {
    const f = u === void 0 ? void 0 : Q(u);
    return A(f) ? f.getChildren().map(fs) : r;
  });
}
function Ff(e) {
  const t = Q(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return v(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!A(t)) return !1;
  const n = Ur();
  return n.anchor.set(e.key, e.offset, "element"), n.focus.set(e.key, e.offset, "element"), jn(n), !0;
}
function $I(e, t, n) {
  const r = mn(e, t);
  if (r?.type === "text") {
    if (Ff(r)) return;
  } else if (r) {
    const i = Q(r.key), s = A(i) ? i.getChildAtIndex(r.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  n.find(A)?.selectStart();
}
function Nl(e, t) {
  const n = t.getNode(), r = kl(e, n), i = r && xl(r.member, n);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? Io(e, n, t.offset)?.anchor : ii(e, t.key, t.offset),
    inRun: r && i ? {
      sentinelIndex: r.sentinelIndex,
      memberIndex: r.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: Rc(e, e.sentinels)
  };
}
function Sv(e, t, n) {
  const r = t && Ic(t.live, eh(e));
  if (t?.inRun && r) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: u } = t.inRun, f = r.sentinelMap[o]?.[a];
    let d = f && e.sentinels[f.sentinelIndex]?.[f.memberIndex];
    for (const p of c)
      d = A(d) ? d.getChildAtIndex(p) ?? void 0 : void 0;
    if (d && Ff({ key: d.getKey(), offset: l, type: u })) return;
  }
  if (!t?.anchor || !r) {
    n.find(A)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = th(r.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: ao(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = mn(s.run.spelling, o);
    if (a && Ff(a)) return;
  }
  $I(
    e,
    va(r.alignment, i, "toSettled"),
    n
  );
}
function _v(e, t, n, r, i) {
  n && Sv(Al(e, r, i), t, e);
}
function Mv(e, t, n, r, i) {
  if (!n) return;
  if (!t?.anchor && !t?.inRun) {
    RI(e, r);
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Nn(e, s, r, i), Sv(s, t, e);
}
function RI(e, t) {
  const n = e.find(A);
  if (n && Sl(n, t)) {
    const r = n.getParent();
    if (r) {
      const i = n.getIndexWithinParent();
      r.select(i, i);
      return;
    }
  }
  n?.selectStart();
}
function Ev(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: n, getMarker: r, logger: i } = t, s = lh(e, r, n);
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
    c.isCollapsed() && (o = Nl(s, c.anchor));
  }
  const l = Ca(e, s, void 0, Pt()), u = us(s, {
    getMarker: r,
    opensNamelessParagraph: ah(e)
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Yr(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const f = lr.serializeEditorState(
    { type: sr, version: ir, content: u },
    n
  );
  if (Mr(f.root.children, r) === _r(e, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = f.root.children.map((m) => Dr(m));
  if (El(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = ta(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  d.forEach((m) => h.insertBefore(m)), Ml(d, s.sentinels), e.forEach((m) => m.remove());
  const g = ta(d);
  for (let m = 0; m < p.length && m < g.length; m++)
    g[m].getNumber() === p[m].number && g[m].setSid(p[m].sid);
  return Sa(l, () => Al(d, r, n)), _v(d, o, a, r, n), !0;
}
function II(e) {
  if (e.getIsCollapsed() !== !1 || !Ze.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const o = t[n];
    if (!N(o) || o.getMarkerSyntax() !== "opening") break;
    n++;
  }
  const r = t[n];
  if (!r || !(Ot(r) || v(r) && r.getTextContent() === Nt(e.getCaller()))) return;
  n++;
  let s = t.length;
  for (; s > n; ) {
    const o = t[s - 1];
    if (!N(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(n, s);
}
function Yi(e, t, n) {
  const r = II(e);
  if (!r) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Nn(r, i, t, n), { out: i, contentNodes: r };
}
function ph(e, t, n) {
  const r = { text: "", spans: [], sentinels: [] };
  return Nn(e, r, t, n), r;
}
function Av(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const r = t.content[0];
  if (typeof r != "string" || r.includes(_t)) return;
  const i = r.trim();
  if (i !== "")
    return e.shift(), i;
}
function LI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = Yi(e, r, n);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (E(u)) {
    for (let B = u.anchor.getNode(); B; B = B.getParent())
      if (e.is(B)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Nl(o, u.anchor));
  }
  const f = Ca(a, o, void 0, Pt()), d = us(o, {
    getMarker: r,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Yr(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = d;
  if (d.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], g = Av(h), m = lv(e, h);
  if (m)
    return qI(
      e,
      m,
      g,
      o.sentinels,
      t,
      l
    );
  const y = cv(e, h, g, n);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (fi(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== g;
  if (b && e.setCategory(g), Mr(y.children, r) === _r(a, r))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const x = y.children.map((B) => Dr(B));
  if (El(x) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const S = a[0];
  if (S)
    x.forEach((B) => S.insertBefore(B));
  else {
    const B = e.getChildren().find((V) => N(V) && V.getMarkerSyntax() === "closing");
    x.forEach((V) => B ? B.insertBefore(V) : e.append(V));
  }
  Ml(x, o.sentinels);
  const _ = new Set(o.sentinels.flat().map((B) => B.getKey()));
  a.forEach((B) => {
    _.has(B.getKey()) || (ae(B) && (B.getWritable().__suppressOnRemoveCallbacks = !0), B.remove());
  });
  const U = () => Yi(e, r, n);
  return Sa(f, () => U()?.out), Mv(
    U()?.contentNodes ?? x,
    c,
    l,
    r,
    n
  ), !0;
}
function qI(e, { before: t, after: n }, r, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = uv(
    e,
    t,
    n,
    r,
    a
  );
  if (!l || fi(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => Dr(h)), [f] = u;
  if (!L(f) || El(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let d = e;
  for (const h of u)
    d.insertAfter(h), d = h;
  Ml(u, i);
  const p = e.getChildren();
  return e.append(...f.getChildren()), p.forEach((h) => h.remove()), e.setCaller(f.getCaller()).setCategory(f.getCategory()).setUnknownAttributes(f.getUnknownAttributes()).setIsCollapsed(f.getIsCollapsed()), f.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Ga(e, a) : yx(e, { isContentChange: !0 })), !0;
}
function Pv(e) {
  const t = e.getChildren();
  return Kd(t[0]) ? t.slice(1) : t;
}
function wl(e, t, n) {
  const r = Pv(e), i = { text: "", spans: [], sentinels: [] };
  return Nn(r, i, t, n), { out: i, contentNodes: r };
}
const DI = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${Vn}(?=[\\s\\u200B\\\\|]|$)`
);
function Nv(e, t) {
  const n = us(e, { getMarker: t }), [r, ...i] = n;
  return typeof r == "object" && r.type === "para" && r.marker === Vn && !DI.test(e.text) ? { content: n, lineContent: r.content ?? [], followingBlocks: i } : { content: n, lineContent: [], followingBlocks: n };
}
function wv(e, t, n = []) {
  const { viewOptions: r, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = wl(e, i, r);
  if (!uh(o, n, i, r))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...n];
  let l, u = !1;
  const f = w();
  if (E(f)) {
    for (let V = f.anchor.getNode(); V; V = V.getParent())
      if (c.some((ne) => ne.is(V))) {
        u = !0;
        break;
      }
    f.isCollapsed() && (l = Nl(o, f.anchor));
  }
  const d = Ca(
    [...a, ...n],
    o,
    void 0,
    Pt()
  ), p = Nv(o, i);
  if (Yr(p.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const h = fv(
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
  if (h.followingBlocks.length === n.length && Mr(h.followingBlocks, i) === _r(n, i) && Mr(h.children, i) === _r(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const m = h.children.map((V) => Dr(V)), y = h.followingBlocks.map((V) => Dr(V)), b = [...m, ...y];
  if (El(b) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const x = ta([...a, ...n]).map((V) => ({
    number: V.getNumber(),
    sid: V.getSid()
  })), S = a[0];
  S ? m.forEach((V) => S.insertBefore(V)) : m.forEach((V) => e.append(V)), y.reduce((V, ne) => V.insertAfter(ne), e), Ml(b, o.sentinels);
  const _ = new Set(o.sentinels.flat().map((V) => V.getKey()));
  a.forEach((V) => {
    _.has(V.getKey()) || (ae(V) && (V.getWritable().__suppressOnRemoveCallbacks = !0), V.remove());
  }), n.forEach((V) => V.remove()), Sa(
    d,
    () => bv(e, y, i, r)
  );
  const U = [...Pv(e), ...y], B = ta(U);
  for (let V = 0; V < x.length && V < B.length; V++)
    B[V].getNumber() === x[V].number && B[V].setSid(x[V].sid);
  return Mv(
    U,
    l,
    u,
    i,
    r
  ), !0;
}
const Ov = /* @__PURE__ */ new Set(["ca", "cp"]), hh = "cp";
function $v(e) {
  if (!Mt(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Xs(e, t, Cr, void 0), t.sentinels.length > 0) return !1;
  const n = t.text;
  if (n.trim() === "") return !1;
  const r = Yc(nh(n), {
    getMarker: Cr
  }), [i] = r, s = r.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(n) ? i.content ?? [] : r;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === hh)
  );
}
function ds(e) {
  const t = [];
  for (let n = e.getNextSibling(); n; n = n.getNextSibling()) {
    if (D(n) && Ov.has(n.getMarker()) || $v(n)) {
      t.push(n);
      continue;
    }
    ye(n) && n.getMarker() === hh && t.push(n);
    break;
  }
  return t;
}
function KI(e) {
  const t = (r) => D(r) && Ov.has(r.getMarker()) || $v(r);
  if (t(e) || ye(e) && e.getMarker() === hh)
    for (let r = e.getPreviousSibling(); r; r = r.getPreviousSibling()) {
      if (we(r)) return r;
      if (!t(r)) return;
    }
}
function na(e, t, n) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const r = ds(e);
  if (r.some((s) => ye(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Nn(e.getChildren(), i, t, n), Nn(r, i, t, n), !(i.sentinels.length > 0))
    return i;
}
function UI(e, t) {
  const { viewOptions: n, getMarker: r, logger: i } = t, s = [e, ...ds(e)], o = na(e, r, n);
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
    l.isCollapsed() && (a = Nl(o, l.anchor));
  }
  const u = Ca(s, o, void 0, Pt()), f = Yc(nh(o.text), {
    getMarker: r
  }), [d] = f;
  if (f.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Yr(f) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const p = lr.serializeEditorState(
    { type: sr, version: ir, content: f },
    n
  );
  if (Mr(p.root.children, r) === _r(s, r)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = p.root.children.map((m) => Dr(m));
  if (!we(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const g = h[0];
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Sa(
    u,
    () => na(g, r, n)
  ), _v(h, a, c, r, n), !0;
}
function ra(e) {
  let t, n;
  for (let r = e; r; r = r.getParent()) {
    if (rt(r)) return;
    !t && (L(r) && !sh(r) || ye(r) || we(r) || Ie(r)) && (t = r), yn(r.getParent()) && (n = r);
  }
  return t && !t.is(n) ? t : (n ? KI(n) : void 0) ?? t;
}
function zn(e, t) {
  const n = ra(e);
  return n ? L(n) ? LI(n, t) : we(n) ? UI(n, t) : Ie(n) ? wv(n, t) : Ev([n], t) : !1;
}
const BI = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function jm(e, t) {
  const n = Object.entries(e).filter(
    (r) => typeof r[1] == "string" && !BI.has(r[0])
  );
  if (n.length !== 0) {
    t.push("|");
    for (const [r, i] of n) t.push(`${r}="${i}"`);
  }
}
function ec(e, t) {
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
          t.push(`\\${r}`), jm(n, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${r}`);
          break;
        case "char":
          t.push(`\\${r} `), ec(n.content, t), jm(n, t), i !== "false" && t.push(`\\${r}*`);
          break;
        case "note": {
          const s = n.caller, o = n.category;
          t.push(`\\${r} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), ec(n.content, t), i !== "false" && t.push(`\\${r}*`);
          break;
        }
        default:
          t.push(`\\${r} `), ec(n.content, t);
      }
    }
}
function Vm(e, t, n) {
  const r = ra(e);
  if (!bt(r)) return !1;
  const i = w();
  if (!E(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (r.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ie(r) ? wl(r, t, n).out : ch(r, t, n);
  if (!o) return !1;
  const a = us(o, {
    getMarker: t,
    opensNamelessParagraph: ah([r])
  });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    Ln.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  ec(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (Ln.test(u)) continue;
    const f = c.get(u);
    f !== void 0 && f > 0 && c.set(u, f - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function gh(e, t) {
  return Iv(e, t, T.Paragraph);
}
function Rv(e, t) {
  return Iv(e, t, T.Character);
}
function Iv(e, t, n) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const i = t(r)?.type;
  return i !== void 0 && i !== T.Unknown ? i === n : !(Ze.isValidMarker(r) || bd(r));
}
function FI(e) {
  return [Kt(e), ji()];
}
function mh(e) {
  cr(e, 2);
}
function zI(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.type === "element") return n.key === e.getKey() && n.offset === 0;
  const r = e.getFirstChild();
  return r !== null && n.key === r.getKey() && n.offset === 0;
}
function Ol(e) {
  const t = zI(e);
  e.splice(0, 0, FI(e.getMarker())), t && mh(e);
}
function Lc(e, t) {
  e.setMarker(t), Ol(e), mh(e);
}
function jI(e, t) {
  const n = e.getFirstChild();
  if (!n) return;
  const r = n.getNextSibling();
  if (!Cn(r)) {
    if (v(r) && !N(r) && /^[ \u00A0]$/.test(r.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      r.setTextContent(q), Xt(r, ke, Ar), r.setMode("token");
      return;
    }
    if (dk(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    n.insertAfter(ji());
  }
}
function Wm(e, t, n) {
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
function Lo(e) {
  for (let t = e; t; t = t.getParent())
    if (ye(t)) return t;
}
function VI(e) {
  const t = e.isBackward(), n = t ? e.focus : e.anchor, r = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Lo(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Lo(n.getNode())?.is(s) ?? !1, a = Lo(r.getNode())?.is(s) ?? !1;
    return !(o && !Wm(n, s, "start") || a && !Wm(r, s, "end"));
  });
}
function zf(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const n = w();
  if (!(!E(n) || n.isCollapsed()))
    for (const r of VI(n)) t.add(r.getKey());
}
function WI(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const n = w();
  if (!E(n) || !n.isCollapsed()) return;
  const r = Lo(n.focus.getNode());
  r && t.add(r.getKey());
}
function HI(e) {
  const t = w();
  !E(t) || t.isCollapsed() || t.getNodes().some((n) => N(n)) && (zf(e), t.removeText());
}
const GI = new RegExp(
  String.raw`^\\\+?([${Yn}]+)(?:[ \u00A0]|$)`
);
function JI(e, t) {
  const n = GI.exec(e.getTextContent());
  return !!n && gh(n[1], t);
}
function YI(e, t) {
  if (!cs(t.viewOptions)) return;
  if (xn(e.getFirstChild())) {
    jI(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (JI(e, t.getMarker)) return;
    Ol(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const r = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!r && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ye(o) && !o.is(e))) {
      Lc(e, Vn), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const n = e.getPreviousSibling();
  if (bt(n)) {
    const r = e.getChildren().filter((a) => !Cn(a)), i = w();
    let s = !1;
    if (E(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Lo(a)?.is(e) && (s = !r.some(
        (c) => a.is(c) || A(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = n.getChildrenSize();
    n.append(...r), e.remove(), s && cr(n, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Lc(e, Vn);
}
function XI(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const n = er(t, eo(e.getMarker()));
  return n === "" ? void 0 : n;
}
function Lv(e) {
  const t = e.getChildren().filter((s) => !N(s) && pe(s, ke) !== "attribute"), n = t[0];
  n && v(n) && n.getTextContent().startsWith(q) && n.setTextContent(n.getTextContent().slice(1));
  const r = XI(e);
  r && t.push(Ue(r));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function QI(e) {
  const t = e.getNode();
  let n;
  if (e.type === "element" && A(t) ? n = t.getChildAtIndex(e.offset) : N(t) && e.offset === 0 ? n = t : v(t) && e.offset === t.getTextContentSize() && (n = t.getNextSibling()), D(n) && (n = n.getFirstChild()), !N(n) || n.getMarkerSyntax() !== "opening") return;
  const r = n.getParent();
  if (!(!D(r) || !n.is(r.getFirstChild())))
    return n.getTextContentSize() === 1 ? n : void 0;
}
function ZI() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = QI(e.anchor), n = t?.getParent();
  if (!t || !D(n)) return !1;
  const r = t.getNextSibling();
  return t.remove(), Hr(r) && r.getTextContent().startsWith(q) && r.setTextContent(` ${r.getTextContent().slice(q.length)}`), Lv(n), v(r) && r.isAttached() && r.select(0, 0), !0;
}
function e2(e, t) {
  const n = e.getChildren(), r = n.some((s) => N(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (r) return;
    const s = n[0], o = n[n.length - 1];
    if (v(s) && s.isUnmergeable() && s.getMode() === "token" || N(o) && o.getMarkerSyntax() === "closing" && o.getMode() === "token") {
      const u = Kt(e.getMarker());
      u.setMode("token");
      const f = e.getFirstChild();
      f ? f.insertBefore(u) : e.append(u);
      return;
    }
    const a = e.getCaller(), c = n.some(
      (u) => v(u) && !N(u) && u.getTextContent() === Nt(a)
    ), l = ts(e).some(({ node: u }) => N(u));
    if (!c && !l) return;
    n.forEach((u) => {
      N(u) || (v(u) && u.getTextContent() === Nt(a) && u.setTextContent(a ? ` ${a} ` : " "), e.insertBefore(u));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = n.some((s) => N(s) && s.getMarkerSyntax() === "closing");
  r !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function t2(e, t) {
  if (e.isEmpty()) return;
  const n = e.getFirstChild();
  if (!(N(n) && n.getMarkerSyntax() === "opening")) {
    Lv(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing");
  i && !s && zn(e, t);
}
function qv(e, t, n) {
  if (!N(e.getFirstChild()) && n?.markerMode === "editable" && cs(n)) {
    Lc(e, t);
    return;
  }
  wx(e, t);
}
function Dv() {
  const e = w();
  if (!E(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Kv(e);
    return t !== "removed" ? t : (jf(), "handled");
  }
  return jf() ? "handled" : "declined";
}
function n2(e, t) {
  if (!t) return e;
  const n = oR.exec(e);
  if (!n) return e;
  const r = n[1];
  return r === "c" || r === "v" || t(r)?.type !== T.Paragraph ? e : e.slice(n[0].length);
}
function Hm(e, t) {
  const n = w();
  if (!E(n)) return "declined";
  if (n.isCollapsed()) {
    if (!Uv())
      return "declined";
  } else {
    const s = Kv(n);
    if (s !== "removed") return s;
  }
  const [r, ...i] = e.map(
    (s) => n2(s, t)
  );
  Gm(r ?? "");
  for (const s of i)
    jf(), Gm(s);
  return "handled";
}
function r2(e) {
  const t = e.getRootElement(), n = t?.ownerDocument.getSelection(), r = n?.anchorNode;
  if (!t || !n || !r || !t.contains(r)) return !1;
  const i = es(r);
  if (!i) return !1;
  const s = On(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || N(i)) return !1;
  const o = Math.min(n.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Kv(e) {
  const t = On(e.anchor.getNode()), n = On(e.focus.getNode()), r = t?.getIsCollapsed() === !1, i = n?.getIsCollapsed() === !1;
  return !r && !i ? "declined" : (e.removeText(), i2() ? "removed" : "needs-plain-split");
}
function Gm(e) {
  if (e === "") return;
  const t = w();
  E(t) && t.insertText(e);
}
function i2() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = On(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((n) => N(n) && n.getMarkerSyntax() === "opening");
}
function Uv() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), n = On(t);
  if (!(!n || n.getIsCollapsed() !== !1 || n.is(t)))
    return n;
}
function jf() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), n = Uv();
  if (!n) return !1;
  let r = t;
  for (; !n.is(r.getParent()); ) {
    const l = r.getParent();
    if (!l) return !1;
    r = l;
  }
  const i = Br("fp", { closed: "false" });
  i.append(Kt("fp"));
  const s = v(t) && !N(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(r);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    js(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    r.insertAfter(i);
    const [u] = l;
    u && (IM(u), i.append(u));
  }
  return i.getChildren().every(N) && i.append(Ue(At)), Bv(i), !0;
}
function Bv(e) {
  const t = e.getChildren().find((n) => !N(n));
  if (v(t)) {
    const n = Md(t);
    t.select(n, n);
    return;
  }
  if (A(t)) {
    Bv(t);
    return;
  }
  e.selectEnd();
}
function s2(e) {
  const t = [];
  let n = e;
  for (; n; )
    D(n) && t.push(n.getMarker()), n = n.getParent();
  return t;
}
function o2(e) {
  const t = e.getTopLevelElement(), n = [];
  for (const r of _e().getChildren()) {
    if (t && r.is(t)) {
      Ie(r) && n.push(r.getMarker());
      break;
    }
    (Ie(r) || at(r) || ye(r)) && n.push(r.getMarker());
  }
  return n;
}
function a2(e) {
  let t = e;
  for (; A(t); ) {
    const n = t.getFirstChild();
    if (!n) break;
    t = n;
  }
  return t;
}
function c2(e, t, n) {
  const r = e.getFirstChild();
  if (!r) return !1;
  let i = r;
  if (xn(r)) {
    if (t.is(r)) return !0;
    if (i = r.getNextSibling(), i && Cn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(a2(i)) && n === 0 : !1;
}
function l2(e, t, n) {
  const r = e.getFirstChild();
  if (!r || !xn(r)) return !1;
  if (t.is(r)) return !0;
  const i = r.getNextSibling();
  return i !== null && Cn(i) && t.is(i) && n === 0;
}
function u2() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: n, y: r, width: i, height: s } = t.getBoundingClientRect();
  return { x: n, y: r, width: i, height: s };
}
function f2() {
  const e = w();
  if (!E(e)) return;
  const t = e.focus.getNode(), n = e.focus.offset, r = !e.isCollapsed(), i = nt(t, ye), s = i ? void 0 : nt(t, Ie), o = !r && !s && (!i || l2(i, t, n)) ? "paragraph" : "character", a = On(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: o2(t),
    openCharMarkers: s2(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: r,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: ep(t, n),
    anchorRect: u2()
  };
}
function d2() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || N(t)) return;
  const n = e.anchor.offset, r = t.getTextContent().slice(0, n), i = aR.exec(r);
  i && t.spliceText(n - i[0].length, i[0].length, "", !0);
}
function p2(e, t, n) {
  qv(e, t, n), mh(e);
}
function h2(e, t, n) {
  const r = w();
  if (!E(r)) return;
  const i = r.focus.getNode(), s = nt(i, ye);
  if (t === "backslash" && s && c2(s, i, r.focus.offset)) {
    p2(s, e, n);
    return;
  }
  Vf(e, n);
}
function Fv(e, t) {
  const n = e.getNode(), r = TT(A(n) ? n : n.getParent());
  return t.is(r);
}
function g2(e, t) {
  const n = e.getNode();
  return !t.is(n) && !t.isParentOf(n) ? !1 : !Fv(e, t);
}
function qc(e, t, n) {
  const r = n.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= r && e.set(t.getKey(), r + 1, "element");
}
function m2(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!N(t) || t.getMarkerSyntax() !== "opening") return e;
  const n = t.getParent();
  if (!D(n)) return e;
  const r = n.getParent();
  return r ? tn(r.getKey(), n.getIndexWithinParent(), "element") : e;
}
function y2(e, t, n) {
  const r = w();
  if (!E(r)) return !1;
  const i = r.isBackward() ? r.focus : r.anchor;
  if (!Fv(i, e)) return !1;
  const s = r.isBackward() ? r.anchor : r.focus;
  if (!r.isCollapsed() && g2(s, e)) return !1;
  const o = Kd(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (qc(r.anchor, e, o), qc(r.focus, e, o)), r.isCollapsed() || r.removeText();
  const a = w();
  if (!E(a) || !a.isCollapsed()) return !1;
  const c = ST(a);
  if (!c) return !1;
  const { parent: l, moving: u } = CT(
    m2(c.anchor)
  );
  if (!e.is(l)) return !1;
  const f = u.filter((h) => !h.is(o)), d = Bs(t);
  e.insertAfter(d), d.append(...f);
  const [p] = f;
  return D(p) ? ol(p) : d.select(0, 0), cs(n) && Ol(d), !0;
}
function b2(e, t) {
  const n = w();
  return !E(n) || !n.isCollapsed() ? !1 : (n.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function zv(e) {
  const t = w();
  return E(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function k2(e) {
  const t = nt(e.anchor.getNode(), Ie);
  if (!t) return;
  const n = t.getFirstChild();
  !n || !Kd(n) || (qc(e.anchor, t, n), qc(e.focus, t, n));
}
function x2(e, t, n, r) {
  const i = w();
  if (E(i) ? k2(i) : r.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && d2(), e.kind === "closeTag") {
    zv(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Dv() !== "declined") return;
  if (e.kind === "paragraph" && Bt.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers)) {
    h2(e.marker, t.trigger, r.viewOptions);
    return;
  }
  if (Ze.isValidMarker(e.marker, r.nodeOptions?.extraValidMarkers))
    return ET(
      e.marker,
      n,
      r.expandedNoteKeyRef,
      r.viewOptions,
      r.nodeOptions,
      r.logger
    );
  Mf(
    e.marker,
    r.expandedNoteKeyRef,
    r.viewOptions,
    r.nodeOptions,
    r.logger,
    void 0,
    r.styleInfo
  ).action({ editor: Pt(), reference: n });
}
function Vf(e, t) {
  const n = w();
  if (!E(n)) return !1;
  tp(n);
  const r = (n.isBackward() ? n.focus : n.anchor).getNode();
  if (!nt(r, ye)) {
    const o = nt(r, Ie);
    if (o) return y2(o, e, t);
  }
  const i = cs(t);
  if (_T()) {
    const o = w();
    if (!E(o)) return !1;
    const a = nt(o.anchor.getNode(), ye);
    return a ? (a.setMarker(e), i && Ol(a), !0) : !1;
  }
  const s = n.insertParagraph();
  return ye(s) ? (i ? Lc(s, e) : s.setMarker(e), !0) : !1;
}
function T2() {
  const [e] = Se();
  return G(() => e.registerCommand(Dy, () => !0, Vt), [e]), null;
}
function v2(e, t) {
  if (!e.startsWith("\\")) return !0;
  const n = rR.exec(e)?.[1];
  return n === void 0 ? !1 : !gh(n, t);
}
function jv(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !v2(e.getTextContent(), t)) return;
  const n = e.getParent();
  if (!ye(n)) return;
  const r = t(n.getMarker())?.type;
  if (r !== void 0 && r !== T.Unknown || n.getFirstChild()?.is(e) !== !0) return;
  const i = n.getPreviousSibling();
  if (!(!ye(i) && !Ie(i)))
    return [i, n];
}
function Vv(e, t) {
  const n = jv(e, t.getMarker);
  if (!n) return !1;
  const [r, i] = n;
  return Ie(r) ? wv(r, t, [i]) : Ev([r, i], t);
}
function C2(e, t) {
  const n = w();
  E(n) && [n.anchor, n.focus].forEach((r) => {
    r.key === e.getKey() && r.offset > t && r.set(e.getKey(), t, "text");
  });
}
function Wv(e) {
  const t = iR.exec(e);
  if (!t) return;
  const n = 1 + t[1].length;
  return { start: n, end: n + t[2].length };
}
function S2(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = Wv(e.getTextContent());
  if (!n) return;
  const { offset: r } = t.anchor;
  if (!(r < n.start || r > n.end))
    return r - n.start;
}
function _2(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const n = e.getNextSibling();
  if (L(e.getParent()) && v(n)) {
    const r = n.getNextSibling();
    if (D(r)) {
      ol(r);
      return;
    }
  }
  v(n) ? n.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Jm(e, t) {
  if (t !== void 0) {
    const n = e.getLatest(), r = Wv(n.getTextContent());
    if (r) {
      const i = Math.min(r.start + t, r.end);
      n.select(i, i);
      return;
    }
  }
  _2(e);
}
function Wf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Hv(e, t, n) {
  if (t.startsWith("+") !== e.getNested())
    return zn(e, n);
  const r = S2(e), i = e.getParent();
  if (ye(i)) {
    if (!gh(t, n.getMarker))
      return Vv(e, n) ? (n.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : zn(e, n);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Wf(s, t) && Jm(e, r), n.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || L(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? Rv(t, n.getMarker) : Ze.isValidMarker(s)) || D(i) && wd(i))
      return zn(e, n);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return zn(e, n);
    i.setMarker(s);
    const c = i.getChildren().filter(N).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (C2(c, ct(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Wf(a, s) && Jm(e, r), n.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return zn(e, n);
}
function Gv(e, t) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
  const n = e.getParent();
  if (!D(n) || !n.getFirstChild()?.is(e)) return;
  const r = oo.exec(e.getTextContent());
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+") !== e.getNested() || !Rv(i, t)) return;
  const s = e.getMarker();
  if (n.getMarker() !== s) return;
  const o = i.replace(/^\+/, "");
  if (Wf(s, o) && !wd(n))
    return { char: n, glyph: e, closer: M2(n, s), newMarker: o };
}
function M2(e, t) {
  return e.getChildren().filter(N).filter((n) => n.getMarkerSyntax() === "closing" && n.getMarker() === t).at(-1);
}
function E2(e) {
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
function A2(e) {
  const t = e.getTextContent(), n = e.getMarkerSyntax() === "closing", r = (n ? /[ \u00A0]+$/ : /^[ \u00A0]+/).exec(t)?.[0];
  if (!r || r.length === t.length) return !1;
  const i = e.getParent();
  let s = e;
  if (n) {
    if (!L(i) || !i.getLastChild()?.is(e)) return !1;
    s = i;
  } else if (je(i)) {
    const f = Sr(e)?.owner;
    if (!ze(f) || !i.getFirstChild()?.is(e)) return !1;
    s = f;
  } else if (i?.getFirstChild()?.is(e)) {
    if (ye(i)) return !1;
    s = i;
  }
  const o = n ? s.getNextSibling() : s.getPreviousSibling();
  if (!v(o)) return !1;
  const a = n ? t.slice(0, t.length - r.length) : t.slice(r.length);
  if (e.setTextContent(a), !pr(e))
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
function P2(e, t) {
  const n = e.getTextContent();
  if (pr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (je(e.getParent()) && Td(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !E2(e)) {
    H_(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (A2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    if (A0(e) || K2(e)) {
      t.pendingKeys.delete(e.getKey());
      return;
    }
    const r = UT.exec(n);
    if (r) {
      t.pendingKeys.delete(e.getKey()), Hv(e, r[1], t);
      return;
    }
    if (nR.test(n)) {
      t.pendingKeys.delete(e.getKey()), zn(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const r = e.getParent(), i = ct(e.getMarker(), e.getNested());
    if ((D(r) || L(r)) && !cd(r.getParent()) && e.getMarker() === r.getMarker() && r.getLastChild()?.is(e) && n.startsWith(i) && n.length > i.length) {
      const s = w(), o = E(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Ue(n.slice(i.length));
      e.setTextContent(i), r.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  if (N2(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function N2(e) {
  if (e.getMarkerSyntax() !== "selfClosing" || !ze(Sr(e)?.owner)) return !1;
  const t = ct(""), n = e.getTextContent();
  if (!n.startsWith(t) || n.length === t.length) return !1;
  const r = e.getParent(), i = je(r) ? r : e;
  if (je(r) && !r.getLastChild()?.is(e)) return !1;
  const s = i.getParent();
  if (!s || cd(s)) return !1;
  const o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() && o.anchor.offset > t.length ? o.anchor.offset - t.length : void 0, c = Ue(n.slice(t.length));
  return e.setTextContent(t), i.insertAfter(c), a !== void 0 && c.select(a, a), !0;
}
function w2(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (yk(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Jv(e) {
  if (!fd(e)?.length)
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
const Co = Jv("v"), O2 = Jv("c"), Mu = /^[ \u00A0]*$/;
function Ym(e, t, n) {
  const r = e.getNextSibling();
  if (v(r) && r.getType() === ot.getType() && r.getMode() === "normal" && pe(r, ke) !== "attribute")
    return r.setTextContent(t + r.getTextContent()), n !== void 0 && r.select(n, n), r;
  const i = Ue(t);
  return e.insertAfter(i), n !== void 0 && i.select(n, n), i;
}
function $2(e, t) {
  const n = e.getTextContent(), r = Wn("v", e.getNumber());
  if (n === r) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(n);
  if (i) {
    const h = n.slice(i[0].length);
    if (Co.midEdit.test(h)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const g = Co.valueAndRest.exec(h);
    if (g && Mu.test(g[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), g[1] !== e.getNumber() && e.setNumber(g[1]);
      return;
    }
  }
  if (Co.midEdit.test(n)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Co.valueAndRest.exec(n);
  if (!s) {
    const h = Co.markerRest.exec(n);
    if (h) {
      const [, g, m, y] = h, b = w(), x = E(b) && b.isCollapsed() && b.anchor.key === e.getKey() ? b.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(m), e.setTextContent(Wn("v", m));
      const S = x !== void 0 && x >= g.length ? Math.min(x - g.length, y.length) : void 0;
      Ym(e, y, S);
      return;
    }
    t.pendingKeys.delete(e.getKey()), zn(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(n)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Mu.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  const c = w(), l = E(c) && c.isCollapsed() && c.anchor.key === e.getKey() ? c.anchor.offset : void 0, u = a ?? "", f = n.length - u.length, d = l !== void 0 && l >= f ? l - f : void 0, p = d !== void 0 && Mu.test(u.slice(d)) ? u.slice(0, d) : u;
  e.setNumber(o), e.setTextContent(Wn("v", o)), p && Ym(e, p, d ?? p.length);
}
const R2 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function I2(e, t) {
  if (!zT(e)) return !1;
  const n = e.getParent();
  if (!L(n)) return !1;
  const r = n.getCaller(), i = e.getTextContent();
  if (i === Nt(r))
    return t.pendingKeys.delete(e.getKey()), !0;
  if (!e.isUnmergeable()) return !1;
  t.pendingKeys.delete(e.getKey());
  const s = R2.exec(i);
  return s ? (q2(e, n, s[1], s[2]), !0) : D2(e, r) ? !0 : Xc(i, r).missing && /^[ \u00A0]/.test(i) && !i.includes("\\") && Yv(e) ? (t.pendingKeys.add(e.getKey()), !0) : (Xv(e, n), !0);
}
function L2(e) {
  if (!Rl(e)) return !1;
  const t = e.getTextContent(), n = /^[ \u00A0]+/.exec(t)?.[0];
  if (!n) return !1;
  const r = e.getPreviousSibling(), i = v(r) && r.getMode() === "token" && !!$l(r);
  if (!v(r) || !(Ae(r) || i)) return !1;
  const s = w();
  if (!E(s) || !s.isCollapsed() || s.anchor.key !== e.getKey() || s.anchor.offset > n.length)
    return !1;
  const o = s.anchor.offset, a = t.slice(n.length), c = r.getTextContentSize();
  return r.getMode() === "token" ? r.select(c, c) : (r.setTextContent(r.getTextContent() + n), r.select(c + o, c + o)), a ? e.setTextContent(a) : e.remove(), !0;
}
function q2(e, t, n, r) {
  const i = e.getTextContent(), s = i.length - r.length, o = /^[ \u00A0]*/.exec(i)?.[0].length ?? 0, a = w(), c = E(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  t.getCaller() !== n && t.setCaller(n), e.setTextContent(Nt(n));
  const l = r ? Zv(t, e, r.replaceAll(q, " ")) : void 0;
  if (c === void 0) return;
  if (c >= s) {
    const f = c - s;
    l ? l.select(f, f) : e.select(e.getTextContentSize(), e.getTextContentSize());
    return;
  }
  const u = 1 + Math.min(Math.max(c - o, 0), n.length);
  e.select(u, u);
}
function D2(e, t) {
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = e.getTextContent(), s = i.slice(0, r.offset);
  if (i.slice(r.offset) !== Nt(t) || !BT.test(s) || s.includes("\\")) return !1;
  const o = e.getPreviousSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || !oo.test(o.getTextContent())) return !1;
  const a = o.getTextContent() + s;
  return e.setTextContent(Nt(t)), o.setTextContent(a), o.select(a.length, a.length), !0;
}
function K2(e) {
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1) return !1;
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const r = e.getTextContent(), { anchor: i } = n;
  if (i.key !== e.getKey() || i.offset !== r.length) return !1;
  const s = Je(e.getMarker()), o = r.slice(s.length);
  if (!r.startsWith(s) || !/^[|\\\s]+$/.test(o)) return !1;
  const a = e.getNextSibling();
  return !v(a) || N(a) || !a.isUnmergeable() ? !1 : (e.setTextContent(s), a.setTextContent(o + a.getTextContent()), a.select(o.length, o.length), !0);
}
function Yv(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: n } = t;
  if (n.key === e.getKey()) return !0;
  const r = e.getNextSibling();
  return n.offset === 0 && r !== null && n.key === r.getKey();
}
function Xv(e, t) {
  const n = t.getCaller(), r = e.getTextContent(), { start: i } = Xc(r, n), s = kd(r, n), o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? o.anchor.offset : void 0;
  e.setTextContent(Nt(n));
  const c = s ? Zv(t, e, s) : void 0;
  if (a !== void 0)
    if (c && a >= i) {
      const l = Math.min(a - i, s.length);
      c.select(l, l);
    } else eC(t, e);
}
function $l(e) {
  if (!v(e) || N(e) || !e.isUnmergeable()) return;
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1) return;
  let n = t.getFirstChild();
  for (; N(n) && n.getMarkerSyntax() === "opening"; ) n = n.getNextSibling();
  return e.is(n) ? t : void 0;
}
function U2(e, t, n) {
  const r = $l(e);
  if (!(!r || !v(e)))
    return e.getTextContent() === Nt(r.getCaller()) ? !1 : n === "idle" && Yv(e) ? (t.pendingKeys.add(e.getKey()), !1) : (Xv(e, r), !0);
}
function Qv(e, t) {
  const { wrapper: n, closer: r } = ga(e);
  return (n ?? r ?? t).getNextSibling();
}
function Rl(e) {
  return v(e) && e.getType() === ot.getType() && e.getMode() === "normal" && !e.isUnmergeable() && pe(e, ke) !== "attribute";
}
function Zv(e, t, n) {
  const r = Qv(e, t);
  if (Rl(r))
    return r.setTextContent(n + r.getTextContent()), r;
  const i = Ue(n);
  return r ? r.insertBefore(i) : e.append(i), i;
}
function eC(e, t) {
  const n = Qv(e, t);
  Rl(n) ? n.select(0, 0) : n ? e.select(n.getIndexWithinParent(), n.getIndexWithinParent()) : e.select(e.getChildrenSize(), e.getChildrenSize());
}
function B2(e, t) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const n = e.getCaller();
  if (!fd(e.getMarker())?.includes("caller")) return;
  const r = e.getChildren();
  let i = 0;
  for (; i < r.length; ) {
    const c = r[i];
    if (!N(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (i === 0) return;
  const s = r[i];
  if (v(s) && !N(s) && (s.isUnmergeable() || s.getTextContent() === Nt(n)))
    return;
  const o = Ue(Nt(n)).toggleUnmergeable();
  t.viewOptions?.isNoteShellEditable === !1 && o.setMode("token"), r[i - 1].insertAfter(o);
  const a = w();
  E(a) && a.isCollapsed() && (a.anchor.key === r[i - 1].getKey() || a.anchor.key === e.getKey() && a.anchor.offset === i) && eC(e, o);
}
function F2(e) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const t = e.getChildren(), n = t.find(
    (o) => N(o) && o.getMarkerSyntax() === "opening"
  );
  if (!N(n) || n.getMode() !== "token" || e.getUnknownAttributes()?.closed === "false") return;
  let r = t.find(
    (o) => N(o) && o.getMarkerSyntax() === "closing"
  );
  r || (r = Kt(e.getMarker(), "closing"), r.setMode("token"), e.append(r));
  for (let o = r.getNextSibling(); o; o = r.getNextSibling())
    r.insertBefore(o);
  const i = r.getPreviousSibling(), s = i?.getPreviousSibling();
  Rl(i) && D(s) && !s.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing") && s.append(i);
}
function z2(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const n = Wn("c", e.getNumber()), r = t.getTextContent();
  if (r === n) return;
  const i = /^[ \u00A0]+/.exec(r), s = i ? r.slice(i[0].length) : r, o = O2.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function tC(e) {
  if (ze(e)) {
    const { wrapper: t } = Qc(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (L(e)) {
    const { wrapper: t } = ga(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (we(e)) {
    const t = [], n = xb(e);
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = vb(e);
    return r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper), t;
  }
  if (Ae(e)) {
    const t = [], n = Wo(e, "va");
    n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper);
    const r = n.wrapper ?? n.closer ?? e, i = Wo(r, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function j2(e) {
  const t = w();
  if (!E(t) || !t.isCollapsed()) return !1;
  const n = t.anchor.getNode();
  return tC(e).some((r) => n.is(r));
}
function V2(e, t, n = "departure") {
  let r = !1;
  const i = n === "departure";
  if (i && ye(e) && dk(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ho)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && ba(l, e) && (i || j2(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of tC(e))
    l.remove(), r = !0;
  let s = !1;
  D(e) && Ib(e) !== void 0 && !wd(e) && (Lb(e), s = !0, r = !0);
  let o = !1, a = !1, c = !1;
  for (const l of Ho)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (CE(l, e)) {
        Yo(l, e), a = !0, r = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && $k(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      al(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: r } : { handled: o, mutated: r };
}
function Xm(e) {
  return v(e) && e.getType() === ot.getType() && e.getMode() === "normal" && pe(e, ke) !== "attribute";
}
function W2(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const n = Q(e);
  if (!n?.isAttached()) return t;
  for (let r = n.getPreviousSibling(); r && Xm(r); r = r.getPreviousSibling())
    t.add(r.getKey());
  for (let r = n.getNextSibling(); r && Xm(r); r = r.getNextSibling())
    t.add(r.getKey());
  return t;
}
function Ka(e, t, n = "departure") {
  let r = !1;
  if (e.pendingKeys.size === 0) return r;
  const i = W2(t), s = [...e.pendingKeys].filter((l) => !i.has(l)), o = new Set(
    s.filter((l) => {
      const u = Q(l);
      return !!u?.isAttached() && !!Gv(u, e.getMarker);
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
    if ($l(u)) {
      e.pendingKeys.delete(l), r = U2(u, e, n) || r;
      continue;
    }
    if (N(u)) {
      e.pendingKeys.delete(l);
      const g = u.getTextContent();
      if (pr(u)) continue;
      const m = oo.exec(g);
      u.getMarkerSyntax() === "opening" && m ? r = Hv(u, m[1], e) || r : n === "idle" && Vm(u, e.getMarker, e.viewOptions) ? e.pendingKeys.add(l) : Vv(u, e) ? (r = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : r = zn(u, e) || r;
      continue;
    }
    const f = Sr(u)?.owner, d = f?.isAttached() ? f : u, p = d.getKey();
    if (c.has(p)) {
      l !== p && e.pendingKeys.delete(l);
      continue;
    }
    if (i.has(p)) {
      e.pendingKeys.delete(l), e.pendingKeys.add(p);
      continue;
    }
    e.pendingKeys.delete(l), l !== p && e.pendingKeys.delete(p), c.add(p);
    const h = V2(d, e, n);
    if (r = h.mutated || r, !h.handled) {
      if (n === "idle" && Vm(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(p);
        continue;
      }
      r = zn(d, e) || r;
    }
  }
  return r;
}
function nC(e) {
  if (on(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return Po(t) !== void 0;
  return !1;
}
function H2(e) {
  const t = Sr(e);
  if (!t) return !1;
  const n = zr(t.kind);
  return !al(
    n,
    n.scanPieces(t.owner),
    n.expectedPieces(t.owner)
  );
}
function Qm(e) {
  let t = e.getParent();
  for (; ae(t); ) t = t.getParent();
  return D(t) ? t : void 0;
}
function G2(e, t) {
  const n = w();
  if (!E(n) || !n.isCollapsed()) return !1;
  const { anchor: r } = n;
  if (r.key !== e.getKey() || r.type !== "text") return !1;
  const i = t.getFirstChild();
  if (!N(i) || i.getMarkerSyntax() !== "opening") return !1;
  let s = i.getNextSibling();
  for (; ae(s); ) s = s.getFirstChild();
  if (!e.is(s) || !oo.test(i.getTextContent())) return !1;
  const o = e.getTextContent(), a = o.slice(0, r.offset);
  if (!BT.test(a) || o[r.offset] !== q) return !1;
  const c = i.getTextContent() + a;
  return e.setTextContent(o.slice(a.length)), i.setTextContent(c), i.select(c.length, c.length), !0;
}
function J2(e, t) {
  const n = e.getTextContent(), r = pe(e, ke), i = e.getParent();
  if (r !== "attribute" && we(i)) {
    n.replace(/^[ \u00A0]+/, "") === Wn("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (I2(e, t) || L2(e)) return;
  if (r === "attribute") {
    H2(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Qm(e);
  if (s && G2(e, s)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!n.includes("\\")) {
    n.includes("|") && nC(e) || n.includes("//") && !zu(e) || Cb(e) || we(ra(e)) ? t.pendingKeys.add(e.getKey()) : t.pendingKeys.delete(e.getKey());
    const c = Qm(e);
    c && Nd(c) ? t.pendingKeys.add(c.getKey()) : c && Ib(c) !== void 0 && c.markDirty();
    return;
  }
  if (zu(e)) return;
  const o = w(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? n.slice(0, o.anchor.offset) : n;
  if (sR.test(a)) {
    if (F_(n)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(n)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(n), zn(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function Y2(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : $k(e, t);
}
function X2(e) {
  const t = (n) => {
    if (N(n)) {
      pr(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    if (on(n)) {
      yk(n) || e.pendingKeys.add(n.getKey());
      return;
    }
    for (const r of Ho)
      r.settleScope !== "none" && r.ownerPredicate(n) && (ba(r, n) || Y2(r, n)) && e.pendingKeys.add(n.getKey());
    if (Ae(n)) {
      n.getTextContent() !== Wn("v", n.getNumber()) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (v(n)) {
      if (n.getType() !== ot.getType() || pe(n, ke) === "attribute") return;
      const r = n.getParent();
      if (we(r)) {
        n.getTextContent() !== Wn("c", r.getNumber()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const i = $l(n);
      if (i) {
        n.getTextContent() !== Nt(i.getCaller()) && e.pendingKeys.add(n.getKey());
        return;
      }
      const s = n.getTextContent();
      (s.includes("\\") || s.includes("|") && nC(n) || s.includes("//") || Cb(n) !== void 0) && e.pendingKeys.add(n.getKey());
      return;
    }
    if (D(n)) {
      Nd(n) && e.pendingKeys.add(n.getKey()), n.getChildren().forEach(t);
      return;
    }
    if (!rt(n)) {
      if (je(n) && n.getChildrenSize() === 0) {
        const r = Sr(n)?.owner;
        r && e.pendingKeys.add(r.getKey());
        return;
      }
      A(n) && n.getChildren().forEach(t);
    }
  };
  _e().getChildren().forEach(t);
}
const rC = jc(
  "COMMIT_PENDING_MARKERS_COMMAND"
), iC = jc(
  "SET_MARKER_SETTLE_SUSPENDED_COMMAND"
);
function Eu(e) {
  const t = e();
  return jt(sd), jt(Jy), t;
}
const Zm = 8, ey = 1e3, Q2 = 1e3;
function Ts(e, t) {
  const n = Ae(e) ? ["va", "vp"] : ze(e) ? ["milestone"] : L(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const r of n)
    AE(zr(r), e, t.pendingKeys);
}
function Z2(e, t) {
  const n = (r, i) => {
    if (i.updateTags.has(Wc) || Qd(e) === "remote")
      return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of r) {
        if (a !== "destroyed") continue;
        const c = Q(o);
        if (!c) continue;
        const l = Sr(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = Q(o.getKey());
        c?.isAttached() && zr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return it(
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
    e.registerMutationListener(ot, n),
    e.registerMutationListener(Gn, n),
    e.registerMutationListener(Jn, n),
    e.registerMutationListener(Pr, n)
  );
}
function Hf(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const n = w();
  return n ? t ? iT(n, t) : E(n) && Ls(n) : !1;
}
function eL(e, t, n) {
  return it(
    e.registerCommand(
      nr,
      (r) => {
        if (ml() || Hf(t)) return !1;
        const i = wf(r, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = n ? Hp(Gp(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Hm(o, t.getMarker);
          if (a === "declined" && r2(e) && (a = Hm(o, t.getMarker)), a === "handled")
            return r?.preventDefault(), !0;
        }
        return !1;
      },
      Xe
    ),
    e.registerCommand(
      nr,
      (r) => {
        const i = wf(r, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !S$()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && E(o) && Ls(o) ? !1 : (r?.preventDefault(), E(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Uo, void 0), a === "") return;
          const l = w();
          E(l) && l.insertText(a);
        }), !0);
      },
      Qe
    ),
    e.registerCommand(
      nr,
      () => (t.splitExpected.current = !0, !1),
      Vt
    )
  );
}
function tL({
  viewOptions: e,
  getMarker: t,
  logger: n,
  markerSettleDelayMs: r,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = Se(), a = e?.markerMode === "editable", c = !!e && dt(e), l = re(void 0), u = re(r), f = re(!1), d = re(s);
  return G(() => {
    u.current = r, d.current = s;
    const p = l.current;
    p && (e && (p.viewOptions = e), p.getMarker = t ?? Cr, p.logger = n, p.structureProtectionMode = i);
  }, [e, t, n, r, i, s]), G(() => {
    if (!a || !e) return;
    const p = {
      viewOptions: e,
      getMarker: t ?? Cr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: n,
      structureProtectionMode: i
    };
    l.current = p;
    const h = M0(
      o,
      p.pendingKeys,
      ($) => {
        p.pendingKeys.clear(), $.read(() => X2(p));
      }
    );
    let g, m = !1, y = !1, b, x = !1, S = !1, _ = 0;
    const U = () => _ < Zm ? !1 : (p.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Zm} consecutive mutating passes; leaving ${p.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...p.pendingKeys].join(", ")}`
    ), !0), B = ($, Z = "departure", Te = !1) => {
      const Ne = Te && !Lp(o), $e = Ne ? ws(o, Qn) : void 0;
      o.update(
        () => {
          Ne && jt(Qn), _ = Eu(
            () => Ka(p, $, Z)
          ) ? _ + 1 : 0;
        },
        // DISCRETE whenever the tag is in play, the way `commitPendingMarkerEdits` does it:
        // Lexical commits inside the call only for a discrete update (`_flushSync`) and otherwise
        // schedules the commit on a microtask, so the release below would disarm before the commit
        // it exists to catch. A settle that only moves the selection — which an update running
        // outside an event can produce on its own, by re-reading the DOM selection — would then
        // leave the tag pending to ride onto the next commit, where it stops a later `focus()`
        // from focusing the editor.
        Ne ? { discrete: !0 } : void 0
      ), $e?.();
    };
    let V = !1, ne;
    const se = () => {
      ne !== void 0 && clearTimeout(ne), ne = void 0;
    }, W = ($) => {
      f.current !== $ && (f.current = $, V = !1, se(), $ ? (he !== void 0 && clearTimeout(he), he = void 0) : queueMicrotask(() => {
        S || f.current || (!m && !U() && B(g, "departure", !0), be());
      }));
    };
    let he;
    const be = () => {
      if (he !== void 0 && clearTimeout(he), he = void 0, S || p.pendingKeys.size === 0 || f.current) return;
      const $ = u.current ?? Q2;
      $ < 0 || (he = setTimeout(() => {
        he = void 0, !(S || p.pendingKeys.size === 0) && (m || U() || B(void 0, "idle"));
      }, $));
    }, He = it(
      o.registerNodeTransform(Gn, ($) => {
        if (o.isComposing()) return;
        P2($, p);
        const Z = Sr($);
        Z && (Ae(Z.owner) || L(Z.owner) || we(Z.owner) || ze(Z.owner) && Qc(Z.owner).wrapper === void 0) && Ts(Z.owner, p);
      }),
      o.registerNodeTransform(qt, ($) => {
        o.isComposing() || ($2($, p), Ts($, p));
      }),
      o.registerNodeTransform(vn, ($) => {
        o.isComposing() || (z2($), $.isAttached() && Ts($, p));
      }),
      o.registerNodeTransform(Bt, ($) => {
        o.isComposing() || YI($, p);
      }),
      o.registerNodeTransform(We, ($) => {
        if (!o.isComposing()) {
          t2($, p);
          for (const Z of ["separator", "char"])
            $.isAttached() && ba(zr(Z), $) && p.pendingKeys.add($.getKey());
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
      o.registerNodeTransform(ar, ($) => {
        o.isComposing() || Ts($, p);
      }),
      o.registerNodeTransform(Pr, ($) => {
        if (o.isComposing()) return;
        const Z = Sr($);
        Z && (ze(Z.owner) || Ae(Z.owner) || L(Z.owner) || we(Z.owner)) && Ts(Z.owner, p);
      }),
      o.registerNodeTransform(Ze, ($) => {
        o.isComposing() || (e2($, p), B2($, p), F2($), Ts($, p));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(hr, ($) => {
        o.isComposing() || w2($, p);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(ot, ($) => {
        o.isComposing() || J2($, p);
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
        ot,
        ($) => {
          o.getEditorState().read(() => {
            for (const [Z, Te] of $) {
              if (Te === "destroyed") continue;
              const Ne = Q(Z);
              !Ne || pe(Ne, ke) !== "attribute" || je(Ne.getParent()) || o.getElementByKey(Z)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      Z2(o, p),
      ...c ? [
        o.registerNodeTransform(ot, ($) => {
          o.isComposing() || bR($);
        }),
        o.registerCommand(
          Ks,
          ($) => Om(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
            o,
            !1,
            d.current
          ),
          Qe
        ),
        o.registerCommand(
          or,
          ($) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            Om(
              $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
              o,
              !0,
              d.current
            )
          ),
          Qe
        ),
        o.registerCommand(
          nr,
          ($) => ER(
            // Same jsdom-safe duck-check as COPY above.
            $ && typeof $ == "object" && "clipboardData" in $ ? $ : null,
            p.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              p.splitExpected.current = !0;
            }
          ),
          Qe
        )
      ] : [],
      o.registerCommand(
        or,
        () => (!Hf(p) && !ml() && zf(p), !1),
        Xe
      ),
      o.registerCommand(
        ua,
        () => (o.isComposing() || HI(p), !1),
        vr
      ),
      o.registerCommand(
        Gc,
        ($) => $ || o.isComposing() ? !1 : ZI(),
        vr
      ),
      o.registerCommand(
        Hc,
        () => (m = !1, _ = 0, be(), !1),
        Vt
      ),
      o.registerCommand(
        Er,
        ($) => (m = !1, _ = 0, be(), ($.key === "Backspace" || $.key === "Delete") && !Hf(p, eT($)) && (zf(p), WI(p), queueMicrotask(() => {
          p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !$.ctrlKey || $.altKey || $.shiftKey || $.metaKey || $.key !== " " && $.code !== "Space" || !C$() ? !1 : ($.preventDefault(), !0)),
        Qe
      ),
      o.registerCommand(
        Iy,
        ($) => {
          const Z = Dv();
          Z === "needs-plain-split" && o.dispatchCommand(Uo, void 0);
          const Te = Z !== "declined" || PE();
          return Te && $?.preventDefault(), Ka(p), Te;
        },
        Qe
      ),
      o.registerCommand(
        Uo,
        () => (p.splitExpected.current = !0, _T()),
        Qe
      ),
      eL(o, p, c),
      o.registerCommand(
        iC,
        ($) => (W($), !0),
        // LOW, matching the sibling host-dispatched `COMMIT_PENDING_MARKERS_COMMAND` below. This
        // command has exactly one handler, so priority decides nothing; CRITICAL is reserved in
        // this file for handlers that must beat Lexical's built-ins on NATIVE commands, and using
        // it here would imply a priority contest that does not exist.
        Vt
      ),
      o.registerCommand(
        qy,
        () => (f.current && V && (se(), ne = setTimeout(() => {
          if (ne = void 0, S || !f.current) return;
          const $ = o.getRootElement(), Z = $?.ownerDocument, Te = Z?.activeElement;
          !$ || !Z?.hasFocus() || !Te || !($ === Te || $.contains(Te)) || (p.logger?.warn(
            `[MarkerEdit] marker settling has been suspended while the editor held focus for ${ey}ms, so the suspension was lifted and held edits settled. The host did not resume on one of its close paths.`
          ), W(!1));
        }, ey)), !1),
        Vt
      ),
      o.registerCommand(
        rC,
        () => {
          if (m) return !0;
          const $ = o.getRootElement(), Z = $?.ownerDocument, Te = !!$ && !!Z && Z.hasFocus() && $.contains(Z.activeElement);
          let Ne;
          if (Te) {
            const $e = w();
            Ne = E($e) ? $e.focus.key : g;
          }
          return Eu(() => Ka(p, Ne)), !0;
        },
        Vt
      ),
      o.registerCommand(
        pd,
        () => (y = !0, !1),
        Vt
      ),
      o.registerCommand(
        ad,
        () => {
          if (f.current)
            return V = !0, se(), !1;
          if (m) return !1;
          const $ = w(), Z = E($) ? $.focus.key : g;
          return Eu(() => Ka(p, Z)), !1;
        },
        Vt
      ),
      o.registerUpdateListener(({ editorState: $, tags: Z }) => {
        const Te = y || Z.has($i);
        y = !1, p.splitExpected.current = !1, p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear(), p.rebuildAttempted.clear();
        const Ne = $.read(() => {
          const Gt = w();
          return E(Gt) ? Gt.focus.key : void 0;
        }), $e = b;
        if (Ne !== void 0 && (b = Ne), Z.has(Wc)) {
          Ob(o, $, Z), m = !0, Ne !== void 0 && (g = Ne);
          return;
        }
        if (Te) {
          Ne !== void 0 && Ne !== $e && (m = !0);
          return;
        }
        m || (Ne !== void 0 && (g = Ne), be(), !(x || Ne === void 0) && [...p.pendingKeys].some((Gt) => Gt !== Ne) && (x = !0, queueMicrotask(() => {
          x = !1, !S && (f.current || U() || B(g));
        })));
      })
    );
    return () => {
      S = !0, he !== void 0 && clearTimeout(he), he = void 0, se(), h(), He(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const nL = ["status_unknown", "status_invalid"], sC = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, rL = Object.values(sC);
function iL(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const n = sC[t];
  e.getAttribute("aria-description") !== n && (e.setAttribute("aria-description", n), e.title = n);
}
function ty(e) {
  e.classList.remove(...nL), e.removeAttribute("aria-description"), rL.includes(e.title) && e.removeAttribute("title");
}
function sL(e, t, n, r) {
  const i = (a) => a.read(() => _e().getChildrenKeys()), s = i(t), o = i(e);
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
function oL(e) {
  const t = Q(e), n = t?.getTopLevelElement();
  return !t || !n ? !1 : t.getKey() === n.getKey() ? !0 : N(t) && t.getParent()?.getKey() === n.getKey();
}
function aL({
  viewOptions: e,
  styleInfo: t,
  logger: n
}) {
  const [r] = Se(), i = e?.markerMode === "editable";
  return G(() => {
    if (!i) return;
    const s = t ?? gc;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      r.isComposing() || r.getEditorState().read(() => {
        const u = VR(s, l);
        let f = u;
        if (l) {
          f = new Map(u);
          for (const [d, p] of o) {
            if (f.has(d) || oL(d)) continue;
            const h = Q(d)?.getTopLevelElement();
            !h || l.has(h.getKey()) || f.set(d, p);
          }
        }
        for (const [d] of o) {
          if (f.has(d)) continue;
          const p = r.getElementByKey(d);
          p && ty(p);
        }
        for (const [d, p] of f) {
          const h = r.getElementByKey(d);
          h && iL(h, p);
        }
        o = f, n?.debug(`[MarkerValidation] pass: ${f.size} flagged`);
      });
    };
    a();
    const c = r.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: f, dirtyLeaves: d }) => {
        f.size === 0 && d.size === 0 || a(
          sL(l, u, f, d)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = r.getElementByKey(l);
        u && ty(u);
      }
    };
  }, [r, i, t, n]), null;
}
function ps(e, t, n) {
  const r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++) {
    const s = e[i], o = t[i];
    n.set(s.getKey(), { node: o, siblings: t });
    const a = ur(o);
    a && A(s) && ps(s.getChildren(), a, n);
  }
}
const oC = /* @__PURE__ */ new WeakMap();
function ia(e, t, n = 0) {
  let r = n;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = ur(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Ys(a);
      if (l === void 0 || !l.includes(_t)) continue;
      const u = l.split(_t), f = [];
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (d > 0)
          for (const h of t[r++] ?? [])
            f.push(h, ...oC.get(h) ?? []);
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
function Wr(e, t, n) {
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
function aC(e, t) {
  const n = [];
  for (const r of e)
    Sl(r, t) || ((ye(r) || D(r)) && n.push(r.getMarker()), A(r) && n.push(...aC(r.getChildren(), t)));
  return n;
}
function cC(e) {
  const t = [];
  for (const n of e) {
    const r = oh(n);
    (r === "para" || r === "char") && t.push(n.marker ?? "");
    const i = ur(n);
    i && t.push(...cC(i));
  }
  return t;
}
function sa(e, t, n) {
  const r = aC(e, n), i = cC(t);
  return r.length === i.length && r.every((s, o) => s === i[o]);
}
function lC(e, t) {
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
function Il(e, t) {
  const n = t && uC(e, t);
  return n ? dh(e, n.start, n.end) : e;
}
function uC(e, t) {
  const n = t.node.getKey(), r = e.spans.find(
    (o) => !o.isSentinel && o.key === n
  );
  if (!r || r.end - r.start !== t.node.getTextContentSize()) return;
  const i = r.start + t.caretOffset, s = i - t.run.length;
  if (!(s < r.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function fC(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = lh(e, a, o);
  if (!l) return;
  const u = Ll(l, s, n), f = Il(u, i), d = us(f, {
    getMarker: a,
    opensNamelessParagraph: ah(e)
  });
  if (d.length === 0) return;
  if (Yr(d) !== u.sentinels.length) {
    c?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = lr.serializeEditorState(
    { type: sr, version: ir, content: d },
    o
  ).root.children;
  if (fi(p) !== u.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const h = Wr(u, t, r);
  if (!h) {
    c?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Mr(p, a) === _r(e, a) && sa(e, p, a)) {
    c?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  ia(p, h.serialized);
  const m = dC(e), y = yh(p);
  for (let b = 0; b < m.length && b < y.length; b++)
    m[b].sid !== void 0 && y[b].number === m[b].number && (y[b].sid = m[b].sid);
  return Pl(
    e,
    f,
    h.live,
    p,
    "paras",
    a,
    o
  );
}
function dC(e) {
  const t = [], n = (r) => {
    Ae(r) ? t.push({ number: r.getNumber(), sid: r.getSid() }) : A(r) && r.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function yh(e) {
  const t = [];
  for (const n of e) {
    xd(n) && t.push(n);
    const r = ur(n);
    r && t.push(...yh(r));
  }
  return t;
}
function cL(e, t, n, r, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = n, l = Yi(e, a, o);
  if (!l) return;
  const { contentNodes: u } = l;
  if (u.length === 0) return;
  const f = Ll(l.out, s, n), d = Il(f, i), p = us(d, {
    getMarker: a,
    isNoteContext: !0
  });
  if (p.length === 0) return;
  if (Yr(p) !== f.sentinels.length) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [h] = p;
  if (p.length !== 1 || typeof h != "object" || h.type !== "para") {
    c?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = h.content ?? [], m = Av(g), y = e.getCategory() !== m, b = lv(e, g);
  if (b) {
    const U = uv(
      e,
      b.before,
      b.after,
      m,
      o
    );
    if (!U || fi(U) !== f.sentinels.length) {
      c?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const B = Wr(f, t, r);
    return B ? (ia(U, B.serialized), {
      rebuilt: void 0,
      contentNodes: u,
      category: m,
      categoryChanged: !1,
      closedAs: U
    }) : void 0;
  }
  const x = cv(e, g, m, o);
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
  const _ = Wr(f, t, r);
  if (!_) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Mr(S, a) === _r(u, a) && sa(u, S, a)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: y };
    c?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return ia(S, _.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: Pl(
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
function ny(e) {
  return e.$?.textType;
}
function lL(e, t) {
  const n = e, r = t;
  return n.type === "text" && r.type === "text" && n.format === r.format && n.style === r.style && n.mode === r.mode && n.detail === r.detail && ny(e) === ny(t);
}
function uL(e) {
  const t = [];
  for (const n of e) {
    const r = Q(n);
    r?.isAttached() && rt(r) && r.getTag() === "optbreak" && r.getChildrenSize() === 0 && t.push(r);
  }
  return t;
}
function fL(e) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!L(t)) return;
  const n = e.getTextContent();
  if (pr(e)) return;
  const r = oo.exec(n);
  if (!r) return;
  const i = r[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Dc(e, t) {
  const n = e;
  n.marker = t, n.text = _l(t, n.markerSyntax, n.nested);
}
function pC(e, t) {
  const { glyph: n, note: r, oldMarker: i, newMarker: s } = e;
  if (!Ze.isValidMarker(s)) return;
  const o = t.get(r.getKey());
  o && (o.node.marker = s);
  const a = t.get(n.getKey());
  a && Dc(a.node, s);
  const c = r.getChildren().filter(N).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Dc(l.node, s);
}
function hC(e, t, n, r) {
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
function dL(e, t, n) {
  const r = e.spans.find((i) => i.key === t && !i.isSentinel);
  return r ? hC(e, r.start, r.end, n) : e;
}
function gC(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((n) => gC(n, t)), t;
}
function pL(e, t) {
  const n = gC(t), r = e.spans.filter((d) => n.has(d.key));
  if (r.length === 0) return e;
  const i = Math.min(...r.map((d) => d.start)), s = Math.max(...r.map((d) => d.end)), o = e.spans.filter((d) => d.isSentinel && d.start < i).length, a = r.filter((d) => d.isSentinel).length, c = FT.test(e.text.slice(0, i)) ? " " : "", l = hC(e, i, s, c + _t), u = i + c.length, f = [...e.sentinels];
  return f.splice(o, a, [t]), {
    text: l.text,
    spans: [
      ...l.spans.filter((d) => !n.has(d.key)),
      { key: t.getKey(), start: u, end: u + 1, isSentinel: !0 }
    ].sort((d, p) => d.start - p.start),
    sentinels: f
  };
}
function Ll(e, t, n) {
  let r = e;
  for (const { char: i, glyph: s, closer: o, newMarker: a } of t?.values() ?? [])
    if (r.spans.some((c) => c.key === s.getKey())) {
      if (mv(i, a, n.getMarker)) {
        r = pL(r, i);
        continue;
      }
      o && (r = dL(
        r,
        o.getKey(),
        Yt(_l(a, "closing", o.getNested()))
      ));
    }
  return r;
}
function mC(e, t) {
  const { char: n, glyph: r, closer: i, newMarker: s } = e, o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Dc(a.node, s);
  const c = i && t.get(i.getKey());
  c && Dc(c.node, s);
}
function hL(e, t, n, r, i, s, o) {
  const { viewOptions: a, getMarker: c, logger: l } = n, u = wl(e, c, a), { contentNodes: f } = u;
  if (f.length === 0 && s.length === 0 || !uh(u.out, s, c, a)) return;
  const d = Ll(u.out, o, n), p = Il(d, i), h = Nv(p, c);
  if (Yr(h.content) !== d.sentinels.length) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const g = fv(
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
  const b = Wr(d, t, r);
  if (!b) {
    l?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (y.length === s.length && Mr(y, c) === _r(s, c) && sa(s, y, c) && Mr(m, c) === _r(f, c) && sa(f, m, c)) {
    l?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const x = ia(m, b.serialized);
  ia(y, b.serialized, x);
  const S = dC([...f, ...s]), _ = yh([...m, ...y]);
  for (let se = 0; se < S.length && se < _.length; se++)
    S[se].sid !== void 0 && _[se].number === S[se].number && (_[se].sid = S[se].sid);
  const U = { ...e.exportJSON(), children: m }, [B, ...V] = Pl(
    [...f, ...s],
    p,
    b.live,
    [U, ...y],
    "bookLine",
    c,
    a
  ), ne = B && ur(B);
  if (ne)
    return { rebuilt: ne, contentNodes: f, followingBlocks: V };
}
function yC(e, t, n, r) {
  const { viewOptions: i, getMarker: s, logger: o } = t, a = na(e, s, i);
  if (!a) return;
  const c = Ll(a, r, t), l = Il(c, n), u = us(l, {
    getMarker: s
  }), [f] = u;
  if (u.length === 0 || typeof f != "object" || f.type !== "chapter")
    return;
  if (Yr(u) !== 0) {
    o?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const d = lr.serializeEditorState(
    { type: sr, version: ir, content: u },
    i
  ).root.children;
  if (d.length === 0) return;
  const p = [e, ...ds(e)];
  if (!(e.getNumber() !== (f.number ?? "") || e.getAltnumber() !== f.altnumber || e.getPubnumber() !== f.pubnumber) && Mr(d, s) === _r(p, s) && sa(p, d, s)) {
    o?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Pl(
    p,
    l,
    [],
    d,
    "chapter",
    s,
    i
  );
}
function bC(e, t, n) {
  const r = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = (h) => {
    L(h) ? s.set(h.getKey(), h) : we(h) ? o.set(h.getKey(), h) : Ie(h) ? a.set(h.getKey(), h) : r.set(h.getKey(), [h]);
  };
  for (const h of e) {
    const g = Q(h);
    if (!g?.isAttached()) continue;
    const m = Gv(g, t.getMarker);
    if (m) {
      u.set(m.char.getKey(), m);
      continue;
    }
    const y = ra(g);
    if (y) {
      if (f(y), N(g)) {
        const b = jv(g, t.getMarker);
        b && i.push(b);
      }
      if (L(y)) {
        const b = fL(g);
        b && l.set(y.getKey(), b);
      }
    }
  }
  const d = /* @__PURE__ */ new Set();
  for (const [h, g] of i)
    d.has(h.getKey()) || d.has(g.getKey()) || ([h, g].forEach((m) => {
      d.add(m.getKey()), r.delete(m.getKey());
    }), Ie(h) ? (a.set(h.getKey(), h), c.set(h.getKey(), [g])) : r.set(h.getKey(), [h, g]));
  if (n) {
    const h = ra(n.node);
    h && !d.has(h.getKey()) && f(h);
  }
  const p = uL(e);
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
function kC(e, t) {
  e.splice(t, 1);
  const n = e[t - 1], r = e[t], i = n && Ys(n), s = r && Ys(r);
  n && r && i !== void 0 && s !== void 0 && lL(n, r) && (n.text = i + s, e.splice(t, 1));
}
function Xi(e, t, n, r, i, s) {
  const o = t.get(e.getKey()), a = o ? ur(o.node) : void 0;
  if (!o || !a) return !1;
  const c = cL(e, t, n, r, i, s);
  if (!c) return !1;
  if (c.closedAs) {
    const f = o.siblings.indexOf(o.node);
    if (f < 0) return !1;
    const [d, ...p] = c.closedAs, h = o.node;
    for (const g of Object.keys(h)) Reflect.deleteProperty(h, g);
    return Object.assign(h, d), o.siblings.splice(f + 1, 0, ...p), p.length > 0 && oC.set(o.node, p), !0;
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
function xC(e, t, n, r, i, s, o) {
  const a = n.get(e.getKey()), c = a ? ur(a.node) : void 0;
  if (!a || !c) return !1;
  const l = hL(
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
function gL(e, t, n, r, i) {
  const s = lC(r, i);
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
  } = bC(t, n, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.size === 0 && l.size === 0 && p.length === 0)
    return;
  const g = /* @__PURE__ */ new Map();
  ps(_e().getChildren(), e.root.children, g);
  for (const m of f.values()) pC(m, g);
  for (const m of d.values()) mC(m, g);
  for (const m of a.values())
    Xi(m, g, n, h, s, d);
  for (const m of o.values()) {
    const y = g.get(m[0].getKey());
    if (!y) continue;
    const b = fC(
      m,
      g,
      n,
      h,
      s,
      d
    );
    if (!b) continue;
    const x = y.siblings.indexOf(y.node);
    x < 0 || y.siblings.splice(x, m.length, ...b);
  }
  for (const m of l.values())
    xC(
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
    const b = 1 + ds(m).length, x = yC(m, n, s, d);
    if (!x) continue;
    const S = y.siblings.indexOf(y.node);
    S < 0 || y.siblings.splice(S, b, ...x);
  }
  for (const m of p) {
    const y = g.get(m.getKey());
    if (!y) continue;
    const b = y.siblings.indexOf(y.node);
    b < 0 || kC(y.siblings, b);
  }
  return fT(e, n.viewOptions);
}
function mL({
  viewOptions: e,
  logger: t
}) {
  const [n] = Se(), r = cs(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return G(() => {
    if (r)
      return n.registerNodeTransform(
        Bt,
        (i) => yL(i, t)
      );
  }, [n, r, t]), null;
}
function yL(e, t) {
  e.getMarker() !== Vn && (e.isEmpty() || xn(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Vn}" (key ${e.getKey()})`
  ), e.setMarker(Vn)));
}
function So(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const bL = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function mr(e) {
  return bL.exec(e)?.[1] ?? e;
}
function fr(e, t) {
  const n = e.jsonPath.slice(mr(e.jsonPath).length);
  return { ...e, jsonPath: `${Lt(t)}${n}` };
}
function co(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
function TC(e) {
  if (td(e) || qi(e)) return !0;
  const t = vC(e);
  return t === "marker" || t === "caller";
}
const kL = /^\['([^']+)'\]$/;
function vC(e) {
  if (qo(e))
    return kL.exec(
      e.jsonPath.slice(mr(e.jsonPath).length)
    )?.[1];
}
function Gf(e, t, n) {
  return TC(e) && co(
    qn(mr(e.jsonPath)),
    hn(t, dt(n))
  );
}
function CC(e, t, n) {
  if (!e.isAttached()) return;
  const [r, i] = In(
    fr(t, hn(e, dt(n))),
    n
  );
  if (!(!r || i === void 0))
    return { key: r.getKey(), offset: i, type: A(r) ? "element" : "text" };
}
function bh(e, t) {
  const n = mn(e, t, { addressDisplayBytes: !0 }), r = n && Q(n.key);
  return n && n.offset > 0 && N(r) && r.getMarkerSyntax() !== "opening" ? n : void 0;
}
function SC(e, t) {
  const n = mn(e, t, { addressDisplayBytes: !0 });
  if (!n || n.offset !== 0) return;
  const r = e.spans.findIndex((o) => o.key === n.key), i = e.spans[r], s = r > 0 ? e.spans[r - 1] : void 0;
  if (!(!i || !$s(i) || !s || s.end !== i.start || !$s(s)))
    return Bf(s);
}
function xL(e, t) {
  const n = bh(e, t);
  if (n) return n;
  const r = SC(e, t);
  if (r) return r;
  const i = mn(e, t);
  return i && TL(e, i);
}
function TL(e, t) {
  if (t.type !== "text") return t;
  const n = e.spans.findIndex((a) => a.key === t.key), r = e.spans[n], i = e.spans[n + 1];
  if (!r || !i || r.end === r.start || t.offset !== r.end - r.start)
    return t;
  const s = e.text[i.start] === "\\", o = Ln.test(e.text[r.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function _C(e) {
  const t = e.markerName.length + 2, n = t + e.valueLength;
  return { valueStart: t, closerStart: n, closerLength: e.markerName.length + 2 };
}
function vL(e, t, n) {
  const { keyName: r } = e, { valueStart: i, closerStart: s } = _C(e);
  return n === 0 ? { jsonPath: t, keyName: r } : n < i ? { jsonPath: t, keyName: r, keyOffset: n - 1 } : n < s ? {
    jsonPath: `${t}['${r}']`,
    propertyOffset: n - i
  } : { jsonPath: t, keyName: r, keyClosingMarkerOffset: n - s };
}
function CL(e, t) {
  const { valueStart: n, closerStart: r, closerLength: i } = _C(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if (Ko(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (Do(t))
    return s(t.keyClosingMarkerOffset, i, r);
  if (zc(t)) return 0;
  if (qo(t))
    return s(t.propertyOffset, e.valueLength, n);
}
function SL(e) {
  return Ko(e) || Do(e) || zc(e) ? e.keyName : vC(e);
}
function _L(e, t, n) {
  const r = xL(e.spelling, t), i = r && Q(r.key);
  if (!r || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === r.key);
  return s ? vL(
    s,
    Lt(hn(i, dt(n))),
    r.offset
  ) : Dt(i, r.offset, n);
}
function ML(e, t) {
  let n = _e();
  for (let r = 0; r < t.length; r += 1) {
    if (!A(n)) return;
    const i = Ft(n, dt(e.viewOptions))[t[r]];
    if (i?.type !== "element") return;
    n = i.node;
    const s = e.byFirstLiveKey.get(n.getKey());
    if (s?.kind === "note" && !s.closedNote)
      return { plan: s, scratchIndexes: [0, ...t.slice(r + 1)] };
  }
}
function EL(e, t) {
  for (const n of e.byFirstLiveKey.values()) {
    const r = n.closedNote;
    if (!r || !n.liveNodes[0].isAttached()) continue;
    const i = ca(e, n), s = (i?.length ?? 0) - 1, o = r.scratchNotePath.length - 1;
    if (!i || s < 0 || o < 0 || t.length <= s || !co(t.slice(0, s), i.slice(0, s))) continue;
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
function Kc(e, t) {
  const n = qn(mr(t.jsonPath));
  if (n.length === 0) {
    if (!qr(t)) return { kind: "live", location: t };
    const a = e.settledToLiveTopIndex(t.offset);
    if (!a) {
      const c = Ft(
        _e(),
        dt(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: c } };
    }
    return a.plan && a.indexWithinScope > 0 ? Kc(e, { jsonPath: Lt([t.offset]) }) : { kind: "live", location: { ...t, offset: a.liveIndex } };
  }
  const r = EL(e, n);
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
  const s = [i.liveIndex, ...n.slice(1)], o = ML(e, s);
  return o ? { kind: "scope", plan: o.plan, scratchIndexes: o.scratchIndexes, location: t } : { kind: "live", location: fr(t, s) };
}
function MC(e, t, n) {
  const r = SL(t);
  if (r === void 0) return;
  const i = qn(mr(t.jsonPath));
  for (const s of e)
    for (const o of s.foldedAttributes) {
      const a = Q(o.ownerKey);
      if (o.keyName !== r || !a || !co(hn(a, dt(n)), i))
        continue;
      const c = CL(o, t), l = s.spelling.spans.find((f) => f.key === o.ownerKey), u = c !== void 0 && l ? ii(s.spelling, o.ownerKey, c) : void 0;
      return c === void 0 || !l || !u ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: s,
          anchor: u,
          atWordByte: tc(s.spelling, l.start + c)
        }
      };
    }
}
function AL(e, t, n, r) {
  const i = MC(t, n, r.viewOptions);
  if (i) return i.resolution;
  const [s, o] = In(n, r.viewOptions);
  if (!s || o === void 0) return;
  const a = kl(e, s), c = a && t.find((d) => d.sentinelIndex === a.sentinelIndex);
  if (c) {
    const d = Io(c.spelling, s, o);
    return d && {
      kind: "literal",
      run: c,
      anchor: d.anchor,
      atWordByte: tc(c.spelling, d.position)
    };
  }
  if (!a) {
    const d = Io(e, s, o);
    return d ? {
      kind: "anchor",
      anchor: d.anchor,
      atWordByte: tc(e, d.position)
    } : void 0;
  }
  const l = xl(a.member, s);
  if (!l) return;
  const u = L(a.member) ? Yi(a.member, r.getMarker, r.viewOptions)?.out : void 0, f = u && Io(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: A(s) ? "element" : "text",
    noteAnchor: f && {
      anchor: f.anchor,
      atWordByte: tc(u, f.position)
    },
    isNoteOwnBytes: L(a.member) && Gf(n, a.member, r.viewOptions)
  };
}
function PL(e, t, n) {
  const r = MC(e, t, n);
  if (r) return r.resolution !== void 0;
  const [i, s] = In(t, n);
  return i !== void 0 && s !== void 0;
}
function tc(e, t) {
  const n = e.text[t];
  return n !== void 0 && !Ln.test(n);
}
function EC(e, t) {
  if (t.type !== "text") return t;
  const n = fh(e, t.key, t.offset);
  if (!n) return t;
  const r = n.end - n.start;
  let i = t.offset;
  for (; i < r && Ln.test(e.text[n.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function oa(e, t) {
  const n = e.liveCut;
  return !t || !n || t.type !== "text" || t.key !== n.key ? t : t.offset >= n.nodeOffset ? { ...t, offset: t.offset + n.length } : t;
}
function NL(e, t) {
  for (let n = 0; n < e.length; n += 1) {
    const r = e[n];
    for (let i = 0; i < r.length; i += 1) {
      const s = r[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: n, memberIndex: i };
    }
  }
}
function kh(e) {
  const { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } = e;
  return t && n && r && i ? { liveFragment: t, scratchFragment: n, sentinelMap: r, alignment: i } : void 0;
}
function AC(e) {
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
  ), AC(e);
}
function Au(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), AC(e);
}
function ry(e) {
  const t = [];
  let n = 0;
  for (const r of e.spans) {
    r.isSentinel && t.push(r.end > r.start ? n : void 0);
    for (let i = r.start; i < r.end; i += 1)
      Ln.test(e.text[i]) || (n += 1);
  }
  return t;
}
function wL(e, t, n, r) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = ry(s)[n];
  if (a === void 0) return si(e, r);
  const c = ry(i).findIndex(
    (d) => d !== void 0 && Zp(o, d, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], u = l?.isAttached() ? l.getParent() : void 0;
  if (l && u)
    return { key: u.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const f = mn(i, {
    nonWsBefore: ao(o, a, "settled"),
    wsRun: 0
  });
  return f ? oa(e, f) : si(e, r);
}
function PC(e, t, n, r, i, s) {
  const o = kh(e);
  if (!o) return si(e, s);
  const a = !qr(r), c = qC(
    o.alignment,
    t.nonWsBefore,
    o.scratchFragment.text,
    t,
    o.liveFragment.text,
    va(o.alignment, t, "toLive")
  ), l = (f) => {
    const d = bh(o.liveFragment, f);
    if (d) return oa(e, d);
    const p = mn(
      o.liveFragment,
      vh(o.liveFragment, f, a),
      { addressDisplayBytes: a }
    );
    return oa(
      e,
      p && n ? EC(o.liveFragment, p) : p
    );
  }, u = fI(o.alignment, t.nonWsBefore);
  if (u < c.nonWsBefore) {
    const f = l({ ...c, nonWsBefore: u }), d = f && Q(f.key);
    if (f && d && OC(d, f.offset, i)) return f;
  }
  return l(c) ?? si(e, s);
}
function OL(e, t, n, r, i, s) {
  const o = NL(n.sentinelMap, r);
  if (!o) return wL(t, n, r.sentinelIndex, s);
  const a = n.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return Au(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && r.isNoteOwnBytes)
    return CC(a, i, e.viewOptions);
  if (c?.kind === "note")
    return r.noteAnchor ? PC(
      c,
      r.noteAnchor.anchor,
      r.noteAnchor.atWordByte,
      i,
      e.viewOptions,
      s
    ) : si(c, s);
  let l = a;
  for (const u of r.path) {
    if (!A(l)) return Au(t, s);
    const f = l.getChildAtIndex(u);
    if (!f) return Au(t, s);
    l = f;
  }
  return { key: l.getKey(), offset: r.offset, type: r.type };
}
function $L(e, t, n) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = In(t, n);
    return yn(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (yn(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function RL(e, t, n) {
  const r = LL(e, t, n);
  if (!r) return r;
  const i = fr(n.location, n.scratchIndexes);
  return n.plan.scratch.getEditorState().read(() => {
    const [o, a] = In(i, t.viewOptions);
    return v(o) && a !== void 0 && a > 0 && a === o.getTextContentSize();
  }) ? IL(t, r, n.location) : r;
}
function IL(e, t, n) {
  const r = Q(t.key);
  if (t.type !== "text" || !v(r)) return t;
  const i = JSON.stringify(n);
  let s = t, o = { node: r, offset: t.offset };
  for (const a of wC(r, t.offset)) {
    if (a.node.is(o.node) && a.offset === o.offset) continue;
    if (a.node.is(o.node)) {
      const l = a.node.getTextContent()[a.offset];
      if (l === void 0 || !Ln.test(l)) break;
    } else if (o.offset !== 0) break;
    o = a;
    const c = Yf(e, a.node, a.offset);
    JSON.stringify(c) === i && (s = { key: a.node.getKey(), offset: a.offset, type: "text" });
  }
  return s;
}
function LL(e, t, n) {
  const { plan: r } = n, { logger: i, viewOptions: s } = e.tier2, o = r.closedNote?.scratchNotePath;
  if (r.kind === "note" && (o ? co(n.scratchIndexes, o) && !qi(n.location) : n.scratchIndexes.length === 1) && TC(n.location))
    return CC(r.liveNodes[0], n.location, t.viewOptions);
  const a = fr(n.location, n.scratchIndexes);
  if (!r.scratch.getEditorState().read(() => PL(r.settledOnlyRuns, a, s))) return;
  const l = $L(r, a, s);
  if (l) return l;
  const u = kh(r);
  if (!u) return si(r, i);
  const f = r.scratch.getEditorState().read(
    () => AL(
      u.scratchFragment,
      r.settledOnlyRuns,
      a,
      e.tier2
    )
  );
  if (!f) return si(r, i);
  if (f.kind === "preserved")
    return OL(t, r, u, f, n.location, i);
  if (f.kind === "literal") {
    const { run: d, anchor: p } = f, h = sv(d, p.nonWsBefore, "toLiteral") ?? ao(d.inner, p.nonWsBefore, "settled"), g = !qr(n.location), m = vh(
      u.liveFragment,
      {
        nonWsBefore: d.liveBefore + h,
        wsRun: p.nonWsBefore === 0 ? d.liveWsBefore + p.wsRun : p.wsRun
      },
      g
    ), y = mn(u.liveFragment, m, {
      addressDisplayBytes: !0
    }), b = y && Q(y.key);
    if (y && N(b) && b.getMarkerSyntax() !== "opening")
      return oa(r, y);
    const x = mn(u.liveFragment, m, {
      addressDisplayBytes: g
    });
    return x ? oa(
      r,
      f.atWordByte ? EC(u.liveFragment, x) : x
    ) : si(r, i);
  }
  return PC(
    r,
    f.anchor,
    f.atWordByte,
    n.location,
    s,
    i
  );
}
function iy(e, t, n) {
  const r = Kc(t, n);
  if (!r) return;
  if (r.kind === "live") {
    const o = qL(t, r.location);
    if (o) return o;
    const [a, c] = In(r.location, t.viewOptions);
    return a && c !== void 0 ? r.location : void 0;
  }
  const i = RL(e, t, r), s = i && Q(i.key);
  return s ? KL(s, i.offset, t.viewOptions, r.plan.liveNodes) : void 0;
}
function sy(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; ) n += 1;
  return n;
}
function NC(e, t, n) {
  const r = sy(e, t), i = Math.min(
    sy([...e].reverse().join(""), [...t].reverse().join("")),
    e.length - r,
    t.length - r
  );
  return n <= r ? n : n >= e.length - i ? n - e.length + t.length : r;
}
function qL(e, t) {
  if (!qi(t)) return;
  const n = qn(mr(t.jsonPath));
  for (const [r, i] of e.renamedClosers) {
    const s = Q(r)?.getParent();
    if (!(!s || !co(hn(s, dt(e.viewOptions)), n)))
      return {
        ...t,
        closingMarkerOffset: NC(
          i.settled,
          i.live,
          Math.min(t.closingMarkerOffset, i.settled.length)
        )
      };
  }
}
function oy(e) {
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
function DL(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.some((r) => r.is(n))) return !0;
  return !1;
}
function* wC(e, t, n) {
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
  for (let i = oy(r); i; i = oy(i))
    if (v(i)) {
      if (n && !DL(i, n)) return;
      for (let s = i.getTextContentSize(); s >= 0; s -= 1) yield { node: i, offset: s };
    }
}
function KL(e, t, n, r) {
  const i = Dt(e, t, n), s = aa([e, t]);
  if (!s || aa(In(i, n))?.is(s)) return i;
  const o = (l, u) => OC(l, u, n), a = xh(e, t), c = a && o(a.node, a.offset);
  if (c) return c;
  for (const l of wC(e, t, r)) {
    if (l.node.is(e) && l.offset === t) continue;
    const u = o(l.node, l.offset);
    if (u) return u;
  }
  return i;
}
function OC(e, t, n) {
  const r = Dt(e, t, n), i = aa(In(r, n));
  if (!i) return;
  if (i.is(tn(e.getKey(), t, "text"))) return r;
  const s = xh(e, t);
  return s && i.is(tn(s.node.getKey(), s.offset, "text")) ? r : void 0;
}
function xh(e, t) {
  if (!v(e)) return;
  const n = t === e.getTextContentSize();
  if (!n && t !== 0) return;
  let r = e, i = n ? r.getNextSibling() : r.getPreviousSibling();
  for (; !i; ) {
    const s = r.getParent();
    if (!s || yn(s) || yn(s.getParent())) return;
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
function aa([e, t]) {
  if (!e || t === void 0) return;
  if (v(e)) return tn(e.getKey(), t, "text");
  if (A(e)) return tn(e.getKey(), t, "element");
  const n = e.getParent();
  if (!n) return;
  const r = e.getIndexWithinParent() + (t > 0 ? 1 : 0);
  return tn(n.getKey(), r, "element");
}
function $C(e, t, n) {
  const r = In(e, n), i = In(t, n), [s, o] = r, [a, c] = i;
  if (s && a && s.is(a))
    return o !== void 0 && c !== void 0 && o > c;
  const l = aa(r), u = aa(i);
  return !!l && !!u && u.isBefore(l);
}
function RC(e, t, n) {
  const r = Kc(e, t), i = Kc(e, n);
  if (!(r?.kind !== "scope" || i?.kind !== "scope" || r.plan !== i.plan))
    return r.plan.scratch.getEditorState().read(
      () => $C(
        fr(r.location, r.scratchIndexes),
        fr(i.location, i.scratchIndexes),
        e.viewOptions
      )
    );
}
function UL(e, t, n) {
  if (t.byFirstLiveKey.size === 0 && t.renamedClosers.size === 0) return n;
  const r = iy(e, t, n.start);
  if (!r) return;
  if (!n.end) return { ...n, start: r };
  const i = iy(e, t, n.end);
  if (!i) return;
  const s = RC(t, n.start, n.end);
  return s !== void 0 && $C(r, i, t.viewOptions) !== s ? { ...n, start: i, end: r } : { ...n, start: r, end: i };
}
function Jf(e, t) {
  const n = qn(mr(t.jsonPath));
  return n.length === 0 ? t : fr(t, [
    e.liveToSettledTopIndex(n[0]),
    ...n.slice(1)
  ]);
}
function IC(e, t) {
  const n = e.closedNoteScopeOver(t.liveNodes[0]);
  if (n && n !== t) return n;
  const r = t.liveNodes[0].getParent(), i = r ? e.planContaining(r) : void 0;
  return i === t ? void 0 : i;
}
function ca(e, t) {
  const n = t.liveNodes[0], r = IC(e, t);
  if (r) {
    const s = ql(e, r, n, 0);
    return typeof s == "object" ? qn(mr(s.jsonPath)) : void 0;
  }
  const i = BL(n, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function BL(e, t) {
  const n = dt(t);
  return !Mt(e) || !yn(e.getParent()) ? hn(e, n) : [Ns(e, 0, n).index];
}
function Th(e, t, n) {
  if (!t) return;
  const r = e.closedNote?.scratchNotePath;
  if (r) {
    const a = r.length - 1, c = t.at(-1);
    return c === void 0 || a < 0 || n.length <= a || !co(n.slice(0, a), r.slice(0, a)) || n[a] < r[a] ? void 0 : [
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
function FL(e, t, n) {
  const r = e.liveCut;
  return !r || t.getKey() !== r.key || n <= r.nodeOffset ? n : Math.max(r.nodeOffset, n - r.length);
}
function zL(e, t, n, r, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of n) {
      if (!A(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return Dt(s, r, i);
  }
}
function jL(e, t) {
  const n = ov(e, t);
  if (n)
    return {
      run: n,
      within: { nonWsBefore: 0, wsRun: t.wsRun - n.liveWsBefore }
    };
  const r = th(e, t);
  if (r)
    return {
      run: r.run,
      within: r.within ?? {
        nonWsBefore: ao(r.run.inner, r.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function VL(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const n = Q(e.key);
  return !(N(n) && n.getMarkerSyntax() !== "opening");
}
function vh(e, t, n) {
  let r = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = Ln.test(e.text[o]);
      if (r < t.nonWsBefore)
        a || (r += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || VL(s, n) ? t : { ...t, wsRun: i };
    }
  return t;
}
function LC(e, t, n, r, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, u = kl(o, n);
  if (u) {
    const m = o.sentinels[u.sentinelIndex];
    if (!c[u.sentinelIndex]?.some((S) => S !== void 0)) {
      const S = m[0].getParent();
      if (S)
        return LC(
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
    const y = xl(u.member, n);
    if (!y) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const b = c[u.sentinelIndex]?.[u.memberIndex];
    if (!b) return;
    const x = e.scratch.getEditorState().read(
      () => zL(a, b, y, r, i)
    );
    if (x) return x;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const f = Io(o, n, FL(e, n, r));
  if (!f) return;
  const d = jL(e.settledOnlyRuns, f.anchor);
  if (d)
    return e.scratch.getEditorState().read(() => _L(d.run, d.within, i));
  const p = va(l, f.anchor, "toSettled"), h = qC(
    l,
    p.nonWsBefore,
    o.text,
    f.anchor,
    a.text,
    p
  ), g = !qr(
    Dt(n, r, i)
  );
  return e.scratch.getEditorState().read(() => {
    const m = bh(a, h), y = m && Q(m.key);
    if (y) return Dt(y, m.offset, i);
    const b = SC(a, h), x = b && Q(b.key);
    if (x)
      return Dt(x, b.offset, i);
    const S = vh(a, h, g), _ = mn(a, S, { addressDisplayBytes: g });
    return _ && WL(_, i);
  });
}
function ay(e, t) {
  let n = 0, r = 0;
  for (const i of e) {
    if (Ln.test(i)) {
      r += 1;
      continue;
    }
    if (n === t) return r;
    n += 1, r = 0;
  }
  return r;
}
function qC(e, t, n, r, i, s) {
  if (!e.segments.some(
    (c) => !c.same && c.liveStart === c.liveEnd && c.settledEnd > c.settledStart && c.settledEnd === t
  )) return s;
  const a = ay(n, r.nonWsBefore) - r.wsRun;
  return {
    ...s,
    wsRun: Math.max(0, ay(i, s.nonWsBefore) - a)
  };
}
function WL(e, t) {
  const n = Q(e.key);
  if (!n) return;
  const r = A(n) && e.offset >= n.getChildrenSize() && (yn(n) || n.getLastDescendant()?.is(_e().getLastDescendant())) && n.getLastDescendant();
  return r ? Dt(
    r,
    A(r) ? r.getChildrenSize() : r.getTextContentSize(),
    t
  ) : Dt(n, e.offset, t);
}
function ql(e, t, n, r) {
  if (t.kind === "note") {
    const a = t.liveNodes[0], c = L(a) && wt(a)?.is(n) && r === n.getTextContentSize() ? xh(n, r) : void 0;
    if (c && !Gf(
      Dt(c.node, c.offset, e.viewOptions),
      a,
      e.viewOptions
    )) {
      const u = ql(e, t, c.node, c.offset);
      if (typeof u == "object") return u;
    }
    const l = Dt(n, r, e.viewOptions);
    if (Gf(l, a, e.viewOptions)) {
      const u = ca(e, t);
      return u && fr(l, u);
    }
  }
  const i = kh(t);
  if (!i) return;
  const s = LC(
    t,
    i,
    n,
    r,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = Th(
    t,
    ca(e, t),
    qn(mr(s.jsonPath))
  );
  return o && fr(s, o);
}
function HL(e) {
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
function GL(e, t) {
  const n = t.scratch.getEditorState().read(() => Dt(_e(), 0, e.viewOptions)), r = Th(
    t,
    ca(e, t),
    qn(mr(n.jsonPath))
  );
  if (r) return fr(n, r);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = IC(e, t);
  return o ? KC(e, o, s, i.getIndexWithinParent()) : Jf(
    e,
    Dt(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function DC(e, t, n) {
  const r = HL(t), i = n ? r.findIndex((s) => s.node.is(n.node) && s.offset === n.offset) : -1;
  for (let s = (i < 0 ? r.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = r[s], c = ql(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return GL(e, t);
}
function KC(e, t, n, r) {
  return ql(e, t, n, r) ?? DC(e, t, { node: n, offset: r });
}
function Yf(e, t, n) {
  const r = e.planContaining(t);
  if (r) return KC(e, r, t, n);
  const i = e.renamedClosers.get(t.getKey());
  if (i) {
    const a = Dt(t, n, e.viewOptions);
    return Jf(
      e,
      qi(a) ? {
        ...a,
        closingMarkerOffset: NC(
          i.live,
          i.settled,
          a.closingMarkerOffset
        )
      } : a
    );
  }
  const s = yn(t) && n >= t.getChildrenSize() && t.getLastChild(), o = s ? e.planContaining(s) : void 0;
  return o ? JL(e, o) ?? DC(e, o, void 0) : Jf(e, Dt(t, n, e.viewOptions));
}
function JL(e, t) {
  const n = t.scratch.getEditorState().read(() => {
    const i = _e();
    return Dt(i, i.getChildrenSize(), e.viewOptions);
  }), r = Th(
    t,
    ca(e, t),
    qn(mr(n.jsonPath))
  );
  return r && fr(n, r);
}
function YL(e) {
  const t = dl(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0 && e.renamedClosers.size === 0)
    return t;
  const n = w();
  if (!E(n)) return;
  const r = n.isBackward(), i = r ? n.focus : n.anchor, s = Yf(e, i.getNode(), i.offset);
  if (!s) return;
  if (n.isCollapsed()) return { start: s };
  const o = r ? n.anchor : n.focus, a = Yf(e, o.getNode(), o.offset);
  if (a)
    return RC(e, s, a) === !0 ? { start: a, end: s } : { start: s, end: a };
}
function XL(e) {
  return e.getKey();
}
function UC(e, t, n) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && Mt(i) ? EI(i, n.getMarker, n.viewOptions) : t.every(ye) ? lh(t, n.getMarker, n.viewOptions) : Fm(t, n.getMarker, n.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(we);
    if (!i) return;
    const s = new Set([i, ...ds(i)].map(XL));
    return t.every((o) => s.has(o.getKey())) ? na(i, n.getMarker, n.viewOptions) : Fm(t, n.getMarker, n.viewOptions);
  }
  const r = t.find(L);
  return r && Yi(r, n.getMarker, n.viewOptions)?.out;
}
function QL(e, t) {
  const n = ld({
    nodes: [...e],
    onError: (r) => {
      throw r;
    }
  });
  try {
    n.update(
      () => {
        const r = _e();
        t.forEach((i) => r.append(Dr(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return n;
}
const cy = "\0";
function BC(e, t = []) {
  for (const n of e)
    t.push(n.getKey()), A(n) && BC(n.getChildren(), t);
  return t;
}
function ZL(e, t, n, r, i) {
  const s = `${r.viewOptions.markerMode}/${r.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(cy), a = BC(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, n, o, a, c].join(cy);
}
function _a(e, t = []) {
  for (const n of e)
    L(n) && t.push(n), A(n) && _a(n.getChildren(), t);
  return t;
}
function lo(e, t, n, r, i, s, o, a = () => ({
  fragment: UC(e, _e().getChildren(), o.tier2)
})) {
  const c = QL(o.nodes, i);
  if (c)
    return FC(e, t, n, r, c, s, o, a);
}
function FC(e, t, n, r, i, s, o, a) {
  const c = i.getEditorState().read(() => {
    const m = a();
    if (!m) return;
    const { fragment: y } = m;
    return {
      settledCount: Ft(
        _e(),
        dt(o.tier2.viewOptions)
      ).length,
      scratchFragment: y,
      settledSide: y && eh(y),
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
    const m = n && f && Ic(Rc(n, []), f).alignment;
    return { ...p, liveFragment: n, sentinelMap: [], settledOnlyRuns: [], alignment: m };
  }
  const h = n && s && Cv(n, s.live), g = h && f && Ic(Rc(h, s.live), f);
  return g ? { ...p, liveFragment: h, ...g } : {
    ...p,
    liveFragment: n,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function uo(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const n = uC(e, t);
  return n ? {
    liveFragment: dh(e, n.start, n.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function Ma(e, t) {
  for (const n of e.noteGlyphRenames.values())
    pC(n, t);
  for (const n of e.charOpenerRenames.values())
    mC(n, t);
}
function eq(e, t) {
  const n = e.getKey();
  return t.bookScopes.has(n) || [...t.paraScopes.values(), ...t.bookTrailingParas.values()].some(
    (r) => r.some((i) => i.getKey() === n)
  );
}
function tq(e) {
  const t = e.getChildren();
  let n = 0;
  for (; n < t.length; ) {
    const r = t[n];
    if (!N(r) || r.getMarkerSyntax() !== "opening") break;
    n += 1;
  }
  return n < t.length ? t.slice(n + 1) : void 0;
}
function nq(e, t, n, r) {
  const { getMarker: i, viewOptions: s } = n.tier2;
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const o = e.getTopLevelElement(), a = o && xl(o, e), c = Yi(e, i, s)?.contentNodes;
  if (!o || !a || !c || eq(o, t)) return;
  const l = e.getNextSiblings(), u = ph([...c, ...l], i, s), f = fs(o), d = /* @__PURE__ */ new Map();
  if (ps([o], [f], d), Ma(t, d), _a([o]).filter((y) => !y.is(e) && t.noteScopes.has(y.getKey())).forEach(
    (y) => Xi(
      y,
      d,
      n.tier2,
      t.huskKeys,
      r,
      t.charOpenerRenames
    )
  ), !Xi(
    e,
    d,
    n.tier2,
    t.huskKeys,
    r,
    t.charOpenerRenames
  ))
    return;
  const p = d.get(e.getKey())?.node;
  if (!M_(p) || p.unknownAttributes?.closed === "false")
    return;
  const { liveFragment: h, liveCut: g } = uo(u, r), m = Wr(u, d, t.huskKeys);
  return lo(
    "note",
    [e, ...l],
    h,
    g,
    [f],
    m,
    n,
    () => {
      let y = _e().getFirstChild();
      for (const b of a)
        y = A(y) ? y.getChildAtIndex(b) : null;
      return L(y) ? zC(y, n.tier2) : void 0;
    }
  );
}
function zC(e, { getMarker: t, viewOptions: n }) {
  const r = tq(e), i = e.getParent();
  if (!r || !i) return;
  const s = hn(e, dt(n)), o = s.at(-1);
  if (o === void 0) return;
  const a = s.length === 1 ? _e() : i, c = Ft(a, dt(n));
  return {
    fragment: ph(
      [...r, ...e.getNextSiblings()],
      t,
      n
    ),
    closedNote: { scratchNotePath: s, settledItemsFromNote: c.length - o }
  };
}
function rq(e, t, n, r, i) {
  const { getMarker: s, viewOptions: o } = r.tier2, { liveFragment: a, sentinelMap: c, scratchFragment: l } = e, u = a && kl(a, t), f = u && u.member.is(t) ? c?.[u.sentinelIndex]?.[u.memberIndex] : void 0, d = Yi(t, s, o)?.contentNodes;
  if (!f || !l || !d) return;
  const p = t.getNextSiblings(), h = ph([...d, ...p], s, o), { liveFragment: g, liveCut: m } = uo(h, i), y = {
    live: h.sentinels.map((b) => b.filter((x) => !n.huskKeys.has(x.getKey())))
  };
  return FC(
    "note",
    [t, ...p],
    g,
    m,
    e.scratch,
    y,
    r,
    () => {
      const b = l.sentinels[f.sentinelIndex]?.[f.memberIndex];
      if (!(!L(b) || b.getUnknownAttributes()?.closed === "false"))
        return zC(b, r.tier2);
    }
  );
}
function iq(e, t, n, r, i) {
  const s = nq(e, n, r, i);
  if (s) return s;
  const { liveFragment: o, liveCut: a } = uo(t, i), c = fs(e), l = /* @__PURE__ */ new Map();
  if (ps([e], [c], l), Ma(n, l), !Xi(
    e,
    l,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  ))
    return;
  const u = t && Wr(t, l, n.huskKeys);
  return lo("note", [e], o, a, [c], u, r);
}
function sq(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = uo(t, i), a = e.map(fs), c = /* @__PURE__ */ new Map();
  ps(e, a, c), Ma(n, c), _a(e).filter((f) => n.noteScopes.has(f.getKey())).forEach(
    (f) => Xi(
      f,
      c,
      r.tier2,
      n.huskKeys,
      i,
      n.charOpenerRenames
    )
  );
  const l = fC(
    e,
    c,
    r.tier2,
    n.huskKeys,
    i,
    n.charOpenerRenames
  );
  if (!l) return;
  const u = t && Wr(t, c, n.huskKeys);
  return lo("para", e, s, o, l, u, r);
}
function oq(e, t, n, r, i, s) {
  const { liveFragment: o, liveCut: a } = uo(n, s), c = [e, ...t], l = c.map(fs), u = /* @__PURE__ */ new Map();
  if (ps(c, l, u), Ma(r, u), _a(c).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => Xi(
      d,
      u,
      i.tier2,
      r.huskKeys,
      s,
      r.charOpenerRenames
    )
  ), !xC(
    e,
    t,
    u,
    i.tier2,
    r.huskKeys,
    s,
    r.charOpenerRenames
  ))
    return;
  const f = n && Wr(n, u, r.huskKeys);
  return lo("para", c, o, a, l, f, i);
}
function aq(e, t, n, r, i) {
  const { liveFragment: s, liveCut: o } = uo(t, i), a = yC(e, r.tier2, i, n.charOpenerRenames);
  if (!a) return;
  const c = [e, ...ds(e)];
  return lo("chapter", c, s, o, a, void 0, r);
}
function cq(e, t, n, r, i, s) {
  const o = fs(e), a = /* @__PURE__ */ new Map();
  ps([e], [o], a), Ma(r, a), _a([e]).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => Xi(
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
    d < 0 || (kC(f.siblings, d), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Wr(t, a, c);
  return lo("para", [e], t, void 0, [o], l, i);
}
function lq(e, t) {
  for (let n = e; n; n = n.getParent())
    if (t.has(n.getKey())) return !0;
  return !1;
}
function ly(e, t, n = /* @__PURE__ */ new Map()) {
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
function uq(e) {
  return e.liveNodes.every((n) => n.isAttached()) ? (e.liveFragment?.spans ?? []).every((n) => Q(n.key) !== null) : !1;
}
function nc(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function fq(e, t, n = /* @__PURE__ */ new Map()) {
  const r = Ft(_e(), t), i = [], s = [];
  let o = 0;
  for (let a = 0; a < r.length; ) {
    const c = nc(r[a]), l = c && e.get(c.getKey());
    if (!l) {
      i[a] = o, s.push({ liveIndex: a, indexWithinScope: 0 }), o += 1, a += 1;
      const d = r[a] && nc(r[a]), p = c && !d?.is(c) ? n.get(c.getKey()) : 0;
      for (let h = 0; h < (p ?? 0); h += 1)
        s.push({ liveIndex: a, indexWithinScope: 0 }), o += 1;
      continue;
    }
    const u = new Set(l.liveNodes.map((d) => d.getKey()));
    let f = 0;
    for (; a + f < r.length; ) {
      const d = nc(r[a + f]);
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
function dq(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e.values()) {
    const i = r.liveNodes[0], s = r.closedNote?.settledItemsFromNote, o = i.getTopLevelElement();
    if (s === void 0 || !Mt(o) || !i.isAttached()) continue;
    const [a, ...c] = hn(i, t);
    if (a === void 0 || c.length > 0) continue;
    const l = Ft(_e(), t).slice(a).filter((u) => nc(u)?.is(o)).length;
    s > l && n.set(o.getKey(), s - l);
  }
  return n;
}
function uy(e) {
  const t = lC(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), ly(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const n = bC(e.pendedKeys, e.tier2, t), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (g, m) => {
    if (!g) return;
    const y = g.liveNodes[0].getKey();
    r.set(y, g), g.liveNodes.forEach((b, x) => {
      (x === 0 || !i.has(b.getKey())) && i.set(b.getKey(), g);
    }), m && g.liveNodes.forEach((b) => s.set(b.getKey(), g));
  }, c = (g, m, y, b) => {
    o.add(g);
    const x = UC(m, y, e.tier2), S = ZL(
      m,
      y,
      x?.text ?? "",
      e.tier2,
      t
    ), _ = e.cache.entries.get(g);
    if (_?.signature === S && uq(_.plan)) return _.plan;
    const U = b(x);
    return U ? e.cache.entries.set(g, { signature: S, plan: U }) : e.cache.entries.delete(g), U;
  };
  for (const g of n.noteScopes.values())
    a(
      c(
        g.getKey(),
        "note",
        g.getUnknownAttributes()?.closed === "false" ? [g, ...g.getNextSiblings()] : [g],
        (m) => iq(g, m, n, e, t)
      ),
      !1
    );
  for (const g of n.paraScopes.values())
    a(
      c(
        g[0].getKey(),
        "para",
        g,
        (m) => sq(g, m, n, e, t)
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
        (y) => oq(g, m, y, n, e, t)
      ),
      !0
    );
  }
  for (const g of n.chapterScopes.values())
    a(
      c(
        g.getKey(),
        "chapter",
        [g, ...ds(g)],
        (m) => aq(g, m, n, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const g of n.husks) {
    const m = g.getTopLevelElement();
    if (!(ye(m) || Mt(m)) || lq(g, i)) continue;
    const y = l.get(m.getKey()) ?? { para: m, husks: [] };
    y.husks.push(g), l.set(m.getKey(), y);
  }
  for (const [g, { para: m, husks: y }] of l)
    a(
      c(
        g,
        "para",
        [m],
        (b) => cq(m, b, y, n, e, t)
      ),
      !0
    );
  for (const g of n.noteScopes.values()) {
    if (g.getUnknownAttributes()?.closed !== "false") continue;
    const m = g.getTopLevelElement(), y = m ? s.get(m.getKey()) : void 0, b = y && rq(y, g, n, e, t);
    if (!b) continue;
    const x = r.get(g.getKey());
    r.set(g.getKey(), b), b.liveNodes.forEach((S, _) => {
      const U = i.get(S.getKey());
      (_ === 0 || !U || U === x) && i.set(S.getKey(), b);
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
      settled: _l(m, "closing", g.getNested())
    });
  if (r.size === 0)
    return ly(e.tier2.viewOptions, e.tier2.logger, f);
  const d = dt(e.tier2.viewOptions), { liveToSettled: p, settledToLive: h } = fq(
    s,
    d,
    dq(r, d)
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
function pq({
  scrRef: e,
  onScrRefChange: t
}) {
  const [n] = Se(), r = re({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return G(() => {
    const i = r.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Uc(s, e) || hq(i, n, e);
  }, [n, e, t]), G(
    () => n.registerMutationListener(
      wn,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Xf(n);
        fy(r.current, n, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ua(s) === Ua(n.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [n]
  ), G(() => {
    const i = (a) => a.read(
      () => new Set(
        _e().getChildren().filter(at).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = n.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), f = i(c), d = [...f].some((p) => !u.has(p));
      d && (Xf(n) || fy(r.current, n, void 0, {
        hasCreated: d,
        hasDestroyed: [...u].some((p) => !f.has(p)),
        isSameDocumentReload: Ua(a) === Ua(c)
      }));
    };
    return it(
      ...[vn, Kn].map(
        (a) => n.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [n]), G(
    () => n.registerCommand(
      bn,
      () => {
        const i = r.current;
        return i.phase === "idle" && bq(i, jC()), !1;
      },
      Vt
    ),
    [n]
  ), G(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => n.dispatchCommand(bn, void 0));
    };
    return it(
      n.registerMutationListener(Qt, i),
      n.registerMutationListener(qt, i)
    );
  }, [n]), G(() => {
    const i = () => vq(r.current);
    return n.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [n]), null;
}
function hq(e, t, n) {
  if (gq(e, n)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const r = Xf(t);
  (!r || r === n.book) && t.update(() => VC(t, n.chapterNum, n.verseNum));
}
function gq(e, t) {
  const n = e.pendingEchoes.findIndex((r) => Uc(r, t));
  return n < 0 ? !1 : (e.pendingEchoes.splice(0, n + 1), e.phase = "idle", !0);
}
function jC() {
  const e = w(), t = ck(e);
  if (!t) return;
  const n = Ch(), r = CM(t);
  if (!r && !n) return;
  const i = r ? parseInt(r.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = ip(t, e), { verseNum: o, verse: a } = ZE(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: n?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Xf(e) {
  return e.getEditorState().read(() => Ch()?.getCode() || void 0);
}
function Ch() {
  return _e().getChildren().find(Ie);
}
function fy(e, t, n, r) {
  const i = r.hasCreated && !e.sawDocument;
  if (r.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    r.hasCreated && (!n || n === e.scrRef.book) && Pu(e, t);
    return;
  }
  r.hasCreated && r.hasDestroyed ? (r.isSameDocumentReload || Pu(e, t), e.phase = "navigating") : i && Pu(e, t), n && n !== e.scrRef.book && GC(e, { ...e.scrRef, book: n }) && (e.phase = "navigating");
}
function Pu(e, t) {
  queueMicrotask(() => {
    t.update(
      () => VC(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function VC(e, t, n) {
  const r = w()?.clone();
  mq(t, n);
  const i = w();
  i && !(r && i.is(r)) && e.dispatchCommand(pd, void 0);
}
function mq(e, t) {
  const n = jC();
  if (n?.chapterNum === e && (n.verse ? HC(t, n.verse) : n.verseNum === t))
    return;
  const r = _e().getChildren(), i = tk(r, e);
  if (!i) return;
  const s = PM(r, i), o = vM(s, !0);
  AM(s, o);
  let a;
  try {
    a = HE(s, t);
  } catch {
    return;
  }
  a && (ye(a) ? !v(a.getFirstChild()) && ls(a) || cr(a, 0) : yq(a));
}
function yq(e) {
  const t = e.getParent();
  if (!t) return;
  const n = e.getIndexWithinParent() + 1, r = t.getChildAtIndex(n);
  if (!r || Oe(r)) {
    v(e) ? e.selectEnd() : cr(t, n);
    return;
  }
  const i = ya(t, n);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    e.selectEnd();
    return;
  }
  const s = A(r) && !L(r) ? WC(r) : void 0;
  s ? s.select(0, 0) : cr(t, n);
}
function WC(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (A(t) && !L(t)) return WC(t);
}
function Ua(e) {
  return e.read(() => {
    const t = _e().getChildren().find(at);
    return `${Ch()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function bq(e, t) {
  e.phase !== "navigating" && t && (kq(t, e.scrRef) || GC(e, xq(t, e.scrRef)));
}
function kq(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? HC(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function HC(e, t) {
  try {
    return Ud(e, t);
  } catch {
    return !1;
  }
}
function xq(e, t) {
  const n = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (n.verse = e.verse), t.versificationStr != null && (n.versificationStr = t.versificationStr), n;
}
const Tq = 8;
function GC(e, t) {
  return Uc(t, e.scrRef) || e.pendingEchoes.some((n) => Uc(n, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > Tq && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Uc(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function vq(e) {
  e.phase = "idle";
}
function Cq(e) {
  return Ie(e) ? `${e.__code}` : we(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : Jr(e) ? `${e.__marker} "${e.__number}"` : Ot(e) ? `${e.__caller}` : gr(e) ? `${e.__marker} "${e.__number}"` : L(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ye(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${Sq(e)}` : ae(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ae(e) ? `${e.__marker} "${e.__number}"` : "";
}
function Sq(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Kr]) : "";
}
function _q() {
  const [e] = Se();
  return /* @__PURE__ */ P(
    HS,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: Cq,
      editor: e
    }
  );
}
const JC = _y(null), dy = 4;
function Mq({
  children: e,
  className: t,
  onClick: n,
  title: r
}) {
  const i = re(null), s = My(JC);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return G(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ P("button", { className: t, onClick: n, ref: i, title: r, type: "button", children: e });
}
function Eq({
  children: e,
  dropDownRef: t,
  onClose: n
}) {
  const [r, i] = Re(), [s, o] = Re(), a = Pe(
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
  }, l = ft(() => ({ registerItem: a }), [a]);
  return G(() => {
    const u = s ?? r?.[0];
    u?.current && u.current.focus();
  }, [r, s]), /* @__PURE__ */ P(JC.Provider, { value: l, children: /* @__PURE__ */ P("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function Aq({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: n,
  buttonClassName: r,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = re(null), c = re(null), [l, u] = Re(!1), f = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return G(() => {
    const d = c.current, p = a.current;
    if (l && d !== null && p !== null) {
      const { top: h, left: g } = d.getBoundingClientRect();
      p.style.top = `${h + d.offsetHeight + dy}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
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
          const { top: g } = p.getBoundingClientRect(), m = g + p.offsetHeight + dy;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", d), () => {
      document.removeEventListener("scroll", d);
    };
  }, [c, a, l]), /* @__PURE__ */ tt(Li, { children: [
    /* @__PURE__ */ tt(
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
    l && wi(
      /* @__PURE__ */ P(Eq, { dropDownRef: a, onClose: f, children: s }),
      document.body
    )
  ] });
}
const Qf = {
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
}, Zf = {
  ...Qf,
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
function Pq({
  editorRef: e,
  blockMarker: t,
  disabled: n = !1
}) {
  return /* @__PURE__ */ P(
    Aq,
    {
      disabled: n,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + Nq(t),
      buttonLabel: wq(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Qf).map((r) => /* @__PURE__ */ tt(
        Mq,
        {
          className: "item block-marker " + Oq(t === r),
          onClick: () => e.current?.formatPara(r),
          children: [
            /* @__PURE__ */ P("i", { className: "icon block-marker " + r }),
            /* @__PURE__ */ P("span", { className: "text usfm_" + r, children: Qf[r] })
          ]
        },
        r
      ))
    }
  );
}
function Nq(e) {
  return e && e in Zf ? e : "ban";
}
function wq(e) {
  return e && e in Zf ? Zf[e] : "No Style";
}
function Oq(e) {
  return e ? "active dropdown-item-active" : "";
}
function py() {
  return /* @__PURE__ */ P("div", { className: "divider" });
}
const $q = pi(function({ editorRef: t, isReadonly: n = !1, onStateChange: r }, i) {
  const [s] = Se(), [o, a] = Re(s), [c, l] = Re(), [u, f] = Re(!1), [d, p] = Re(!1), h = Pe(
    ({
      canUndo: g,
      canRedo: m,
      blockMarker: y,
      contextMarker: b
    }) => {
      f(g), p(m), l(y), r?.({
        canUndo: g,
        canRedo: m,
        blockMarker: y,
        contextMarker: b
      });
    },
    [r]
  );
  return G(() => s.registerCommand(
    bn,
    (g, m) => (a(m), !1),
    Xe
  ), [s]), /* @__PURE__ */ tt(Li, { children: [
    /* @__PURE__ */ P(Zx, { onStateChange: h }),
    /* @__PURE__ */ tt("div", { className: "toolbar", children: [
      /* @__PURE__ */ P(
        "button",
        {
          disabled: !u || n,
          onClick: () => {
            o.dispatchCommand(Ky, void 0);
          },
          title: Us ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Uy, void 0);
          },
          title: Us ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ P("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ P(py, {}),
      o === s && /* @__PURE__ */ tt(Li, { children: [
        /* @__PURE__ */ P(
          Pq,
          {
            editorRef: t,
            blockMarker: c,
            disabled: n
          }
        ),
        /* @__PURE__ */ P(py, {})
      ] }),
      /* @__PURE__ */ P("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), Rq = fl(), Iq = {}, Lq = {}, hy = b_.filter((e) => e !== hd);
function qq() {
  return /* @__PURE__ */ P("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function gy(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function my() {
  const e = w();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return v(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function Dq(e) {
  const t = [], n = (r, i) => r?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(Lt(a)), n(s.content, a);
  });
  return n(e?.content, []), t;
}
function Kq(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function Uq({
  listener: e
}) {
  const [t] = Se();
  return Qs(
    () => t.registerUpdateListener((n) => e(n, t)),
    [t, e]
  ), null;
}
function Ba(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function yy(e) {
  const t = e.getNextSiblings(), n = t.at(0), r = t.at(-1);
  if (!n || !r) return [];
  const i = A(r) ? r.getLastDescendant() ?? r : r;
  return ll(n, i);
}
function by(e, t, n) {
  YS(e, () => Bs(t));
  const r = w();
  if (!E(r)) return;
  const i = /* @__PURE__ */ new Set();
  r.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    ye(o) && i.add(o);
  }), i.forEach((s) => qv(s, t, n));
}
const YC = pi(function({
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
  const f = re(null), d = re(null), p = re(null), h = re(null), g = re(t), m = re(!1), y = re(void 0), b = re(void 0), x = re(void 0), S = re({ entries: /* @__PURE__ */ new Map() }), _ = re(void 0), U = re(0), B = re(!0), V = re(void 0), [ne, se] = Re(t), [W, he] = Re(0), [be, He] = Re(), {
    isReadonly: $ = !1,
    structureProtectionMode: Z = "off",
    hasExternalUI: Te = !1,
    hasSpellCheck: Ne = !1,
    textDirection: $e = "ltr",
    markerMenuTrigger: Gt = "\\",
    view: Sn,
    nodes: Le,
    debug: me = !1,
    contextMenu: F,
    styleInfo: le,
    markerSettleDelayMs: Me,
    copyLimit: Ye
  } = a ?? Lq, ut = Sn ?? Rq, Tt = Qo(ut) && (ut.markerMode !== "hidden" || !ut.hasSpacing || ut.hasGutterParaMarkers || ut.hasActiveTextFocusBox) ? {
    ...ut,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ut, _n = re(Tt);
  Zn(_n.current, Tt) || (_n.current = Tt);
  const ie = _n.current, Ce = ft(() => Le ?? Iq, [Le]), Nr = ft(() => F, [F]), qe = ft(
    () => DE(le ?? gc),
    [le]
  ), yr = re(c);
  Zn(yr.current, c) || (yr.current = c);
  const ge = yr.current, zt = Qo(ie), Zt = $ || zt, I = Tt !== ut;
  G(() => {
    zt && !$ && ge?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), I && ge?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ie?.markerMode === "visible" && !$ && ge?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [zt, $, I, ge, ie?.markerMode]);
  const j = re(null), J = ft(() => {
    if (ie.markerMode !== "editable") return;
    const O = le ?? gc;
    return {
      getContext: () => j.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (R) => ZR(
        O,
        R,
        Ce.extraValidMarkers
      ),
      getEnterItems: (R) => eI(
        O,
        R,
        Ce.extraValidMarkers
      ),
      apply: (R, K) => {
        const X = j.current;
        X && (K.trigger === "enter" ? X.splitParagraphWithMarker(R.marker) : X.applyMarkerMenuSelection(R, K));
      },
      commitTypedCloser: (R) => {
        j.current?.commitTypedCloser(R);
      }
    };
  }, [ie, le, Ce.extraValidMarkers]), Y = (O) => {
    if (zt)
      throw new Error(
        `Cannot ${O} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, ue = (O) => {
    if (Y(O), Zt) throw new Error(`Cannot ${O} in readonly mode`);
  }, te = ft(
    () => [yt, ...zt ? jP : gl],
    [zt]
  ), ee = () => !!f.current && Lp(f.current), ce = ft(
    () => ({
      namespace: "platformEditor",
      theme: { ...IT, showCharMarkerTitles: ie.showCharMarkerTitles },
      editable: !Zt,
      editorState: void 0,
      // Handling of errors during update
      onError(O) {
        throw O;
      },
      nodes: te
    }),
    [Zt, te, ie.showCharMarkerTitles]
  );
  Es.initialize(ge);
  function fe(O) {
    if (O !== void 0 && !M$(O, Ce.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const Be = Pe(() => {
    const O = f.current;
    if (!O) return g.current;
    const R = () => {
      if (!m.current) return;
      const st = Es.deserializeEditorState(O.getEditorState(), ie);
      st && (g.current = st, m.current = !1);
    }, K = ju(O), X = b.current;
    if ((!K || K.size === 0) && !X)
      return R(), g.current;
    const Ee = O.getEditorState(), Ve = x.current, Fe = {
      editorState: Ee,
      pendedKeys: K ? [...K].sort().join(",") : "",
      transientInput: X,
      caretKey: Ve?.key,
      caretOffset: Ve?.offset,
      viewOptions: ie,
      getMarker: qe
    }, Ge = _.current;
    if (Ge && Kq(Ge.key, Fe)) return Ge.usj;
    const vt = Ee.toJSON(), mt = Ee.read(
      () => gL(
        vt,
        K ?? /* @__PURE__ */ new Set(),
        { viewOptions: ie, getMarker: qe, logger: ge },
        X,
        Ve
      )
    );
    return mt ? (_.current = { key: Fe, usj: mt }, mt) : (R(), g.current);
  }, [ie, qe, ge]), De = Pe(() => {
    const O = f.current;
    if (!O) return;
    const R = {
      pendedKeys: ju(O) ?? /* @__PURE__ */ new Set(),
      transientInput: b.current,
      lastKnownCaret: x.current,
      tier2: { viewOptions: ie, getMarker: qe, logger: ge },
      nodes: te,
      cache: S.current
    };
    return So(R) && R.cache.entries.clear(), R;
  }, [ie, qe, ge, te]), an = Pe(
    (O) => {
      const R = f.current, K = De();
      if (!(!R || !K))
        return So(K) ? O : R.getEditorState().read(() => {
          const X = uy(K);
          return UL(K, X, O);
        });
    },
    [De]
  );
  G(() => (B.current = !0, () => {
    B.current = !1;
  }), []);
  const Mn = Pe(
    (O, R) => O.read(() => {
      const K = De(), X = K && YL(uy(K));
      return !X && E(w()) && ge?.warn(
        `${R} refused: the selection could not be expressed against the document the host is reading`
      ), X;
    }),
    [De, ge]
  ), wr = Pe(
    (O) => {
      if (!i) return;
      const R = f.current, K = De();
      U.current += 1;
      const X = U.current;
      if (!R || !K || So(K)) {
        i(O);
        return;
      }
      queueMicrotask(() => {
        if (!B.current || X !== U.current || f.current !== R) return;
        const Ee = Mn(R, "onSelectionChange");
        X === U.current && i(Ee);
      });
    },
    [i, De, Mn]
  );
  function bi(O, R, K) {
    if (zt && R === "remote") {
      yr.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    Y("apply an update");
    const X = f.current;
    if (!X) return;
    const Ee = ee(), Ve = Ee ? void 0 : ws(X, Qn);
    let Fe = !1;
    X.update(
      () => {
        eu(X, R), R === "remote" && jt(hd), Ee || jt(Qn), K && jt(K);
        try {
          D1(O, ie, Ce, ge);
        } catch (Ge) {
          throw Fe = !0, eu(X, void 0), Ve?.(), Ge;
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
          if (Fe) return;
          eu(X, void 0), Ve?.(), Ee || pu(X);
          const Ge = X.getEditorState(), vt = Es.deserializeEditorState(Ge, ie);
          if (!vt) return;
          const mt = !Zn(g.current, vt);
          mt && (g.current = vt);
          const st = Be();
          if (st && (mt || !Zn(ne, vt))) {
            const xt = vg(O, Ge, "apply");
            V.current = st, s?.(st, O, R, xt);
          }
        }
      }
    );
  }
  const fo = {
    focus() {
      f.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return ee();
    },
    undo() {
      f.current?.dispatchCommand(Ky, void 0);
    },
    redo() {
      f.current?.dispatchCommand(Uy, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      ue("cut"), f.current && Op(f.current);
    },
    copy() {
      f.current && wp(f.current);
    },
    paste() {
      ue("paste"), f.current && $p(f.current);
    },
    pastePlainText() {
      ue("paste as plain text"), f.current && Rp(f.current);
    },
    getUsj() {
      return Be();
    },
    commitPendingMarkerEdits() {
      const O = f.current;
      if (!O) return;
      const R = !ee(), K = R ? ws(O, Qn) : void 0;
      O.update(
        () => {
          R && jt(Qn), O.dispatchCommand(rC, void 0);
        },
        { discrete: !0 }
      ), K?.(), R && pu(O);
    },
    setMarkerSettleSuspended(O) {
      f.current?.dispatchCommand(iC, O);
    },
    setTransientInput(O) {
      if (!O) {
        b.current = void 0;
        return;
      }
      const R = f.current?.getEditorState().read(() => {
        const K = w();
        return E(K) && K.isCollapsed() ? K.focus.key : void 0;
      });
      b.current = { input: O, nodeKey: R ?? x.current?.key };
    },
    setUsj(O) {
      if (!Zn(g.current, O)) {
        g.current = O, m.current = !1, _.current = void 0, b.current = void 0;
        const R = Zn(ne, O);
        se(O), R && he((K) => K + 1);
      }
    },
    applyUpdate(O, R = "remote") {
      bi(O, R);
    },
    replaceEmbedUpdate(O, R) {
      const K = f.current?.read(() => fA(O, R));
      K ? this.applyUpdate(K) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${O}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      const O = f.current;
      if (!O) return;
      O.read(() => {
      });
      const R = De();
      return !R || So(R) ? O.read(() => dl(ie)) : Mn(O, "getSelection");
    },
    setSelection(O) {
      const R = an(O);
      if (!R) {
        ge?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      f.current?.update(() => {
        const K = Zo(R, ie);
        K !== void 0 && (jn(K), (!Pt().isEditable() || gy(K.anchor) && gy(K.focus)) && f.current?.dispatchCommand(bn, void 0));
      });
    },
    setAnnotation(O, R, K, X, Ee) {
      let Ve, Fe, Ge, vt;
      typeof X == "function" || X === void 0 ? (Ve = X, Fe = Ee) : (Ve = X.onClick, Fe = X.onRemove, Ge = X.onMouseEnter, vt = X.onMouseLeave);
      const mt = an(O);
      if (!mt) {
        ge?.warn(
          `setAnnotation refused for ${R} "${K}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.setAnnotation(
        mt,
        Yl(R),
        K,
        Ve,
        Fe,
        Ge,
        vt
      );
    },
    removeAnnotation(O, R) {
      d.current?.removeAnnotation(Yl(O), R);
    },
    getAnnotationRanges(O, R) {
      return d.current?.getAnnotationRanges(Yl(O), R) ?? [];
    },
    formatPara(O) {
      ue("format a paragraph"), f.current?.update(
        () => {
          const R = w();
          if (!E(R)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const K = R.isBackward() ? R.focus : R.anchor, X = nt(K.getNode(), Ie);
          if (X) {
            const Ee = R.isBackward() ? R.anchor : R.focus, Fe = !R.isCollapsed() && !X.is(Ee.getNode()) && !X.isParentOf(Ee.getNode()) ? { key: Ee.key, offset: Ee.offset, type: Ee.type } : void 0, Ge = Ur();
            if (Ge.anchor.set(K.key, K.offset, K.type), Ge.focus.set(K.key, K.offset, K.type), jn(Ge), !Vf(O, ie)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${O}"`
              );
              return;
            }
            if (!Fe) return;
            const vt = Q(Fe.key);
            if (!vt?.isAttached()) return;
            const mt = vt.getTopLevelElement();
            if (!mt) return;
            const st = X.getNextSibling();
            if (!ye(st)) return;
            let xt = st.getNextSibling();
            for (; xt; ) {
              const ki = xt.is(mt), En = xt.getNextSibling();
              if (ye(xt)) {
                const Or = Ur();
                Or.anchor.set(xt.getKey(), 0, "element"), Or.focus.set(xt.getKey(), xt.getChildrenSize(), "element"), jn(Or), by(Or, O, ie);
              }
              if (ki) break;
              xt = En;
            }
            return;
          }
          by(R, O, ie);
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
      if (Zt) throw new Error("Cannot remove character marker in readonly mode");
      fe(O);
      let R = !1;
      return f.current?.update(
        () => {
          const K = w();
          E(K) && (R = PT(K, O, ie));
        },
        { discrete: !0 }
      ), R;
    },
    replaceCharacterMarker(O, R) {
      if (Zt) throw new Error("Cannot replace character marker in readonly mode");
      fe(O), fe(R);
      let K = !1;
      return f.current?.update(
        () => {
          const X = w();
          E(X) && (K = D$(X, O, R));
        },
        { discrete: !0 }
      ), K;
    },
    extendCharacterMarker(O, R) {
      if (Zt) throw new Error("Cannot extend character marker in readonly mode");
      fe(O), R?.forEach(
        (X) => fe(X)
      );
      let K = !1;
      return f.current?.update(
        () => {
          const X = w();
          E(X) && (K = K$(
            X,
            O,
            R,
            ie
          ));
        },
        { discrete: !0 }
      ), K;
    },
    insertMarker(O) {
      if (Zt) throw new Error("Cannot insert marker in readonly mode");
      if (!n) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!_f(O, Ce.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const R = Mf(
        O,
        y,
        ie,
        Ce,
        ge,
        void 0,
        le
      );
      return R.action({ editor: f.current, reference: n }), R.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!$)
        return f.current?.getEditorState().read(() => f2());
    },
    applyMarkerMenuSelection(O, R) {
      if ($) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!n)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (O.kind !== "closeTag" && !_f(O.marker, Ce.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let K;
      return f.current.update(() => {
        K = x2(O, R, n, {
          expandedNoteKeyRef: y,
          viewOptions: ie,
          nodeOptions: Ce,
          logger: c,
          styleInfo: le
        });
      }), K;
    },
    splitParagraphWithMarker(O) {
      if ($) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        Vf(O, ie);
      });
    },
    commitTypedMarker(O, R) {
      if ($) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let K = !1;
      return f.current.update(() => {
        K = b2(O, R), K || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), K;
    },
    commitTypedCloser(O) {
      if ($) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let R = !1;
      return f.current.update(() => {
        R = zv(O), R || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), R;
    },
    insertNote(O, R, K) {
      ue("insert a note");
      const X = K && an(K);
      if (K && !X) {
        ge?.warn(
          `insertNote refused for \\${O}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.update(
        () => {
          const Ee = hx(
            O,
            R,
            X,
            n,
            ie,
            Ce,
            ge
          );
          Ba(Ee, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(O) {
      const R = f.current;
      if (!R) return;
      const K = De();
      if (typeof O == "string" || !K || So(K)) {
        R.update(() => {
          const Ve = Tr(O);
          Ve && (Ga(Ve, ie), Ba(Ve, y));
        });
        return;
      }
      const X = Dq(Be())[O], Ee = X ? an({ start: { jsonPath: X } }) : void 0;
      Ee && R.update(() => {
        const [Ve, Fe] = In(Ee.start, ie);
        if (!Ve || Fe === void 0) return;
        const Ge = L(Ve) ? Ve : nt(Ve, L);
        L(Ge) ? (Ga(Ge, ie), Ba(Ge, y)) : v(Ve) && Ve.select(Fe, Fe);
      });
    },
    selectAfterNote(O) {
      const R = f.current;
      if (!R) return;
      const K = !ee(), X = K ? ws(R, Qn) : void 0;
      if (R.update(
        () => {
          K && jt(Qn);
          const Ee = Tr(O);
          Ee && yx(Ee);
        },
        { discrete: !0 }
      ), X?.(), K) {
        pu(R);
        const Ee = ws(
          R,
          Qn
        );
        R.update(
          () => {
            jt(Qn), R.dispatchCommand(bn, void 0);
          },
          { discrete: !0 }
        ), Ee();
      }
    },
    selectNoteTextOffset(O, R, K) {
      f.current?.update(() => {
        const X = Tr(O);
        if (!X) return;
        const Ee = K?.glyph;
        (K?.field === "category" ? KP(X, R, Ee) || $g(X, 0) : $g(X, R, Ee)) || Ga(X, ie), Ba(X, y);
      });
    },
    getNoteOps(O) {
      const R = f.current;
      return R ? Cs(R, () => {
        const K = Tr(O);
        if (K)
          return ll(K);
      }) : void 0;
    },
    getOpsAfterNote(O) {
      const R = f.current;
      return R ? Cs(R, () => {
        const K = Tr(O);
        return K ? yy(K) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(O) {
      const R = f.current, K = R ? Cs(R, () => {
        const Fe = Tr(O);
        if (!Fe) return;
        const Ge = op(Fe, "apply");
        return { ops: yy(Fe), notePosition: Ge };
      }) : void 0;
      if (!K) return;
      const { ops: X, notePosition: Ee } = K;
      if (X.length === 0 || Ee === void 0) return X;
      const Ve = X.reduce(
        (Fe, Ge) => Fe + (typeof Ge.insert == "string" ? Ge.insert.length : 1),
        0
      );
      return bi([{ retain: Ee + 1 }, { delete: Ve }], "remote", sd), X;
    },
    getNoteIndex(O) {
      const R = f.current;
      return R ? Cs(R, () => lp(O)) : void 0;
    },
    getNoteKey(O) {
      const R = f.current;
      return R ? Cs(R, () => Tr(O)?.getKey()) : void 0;
    },
    highlightNote(O) {
      p.current?.setHighlightedNote(O);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  j.current = fo, Fc(u, () => fo), G(() => {
    const O = f.current;
    if (O)
      return O.registerUpdateListener(({ editorState: R }) => {
        const K = R.read(my);
        K && (x.current = K);
      });
  }, []);
  const hs = re({ onUsjChange: s, viewOptions: ie, isBlockVerse: zt, readSettledUsj: Be });
  hs.current = { onUsjChange: s, viewOptions: ie, isBlockVerse: zt, readSettledUsj: Be };
  const Ea = Pe((O, R) => {
    const { editorState: K, dirtyElements: X, dirtyLeaves: Ee, tags: Ve } = O;
    if (X.size === 0 && Ee.size === 0) return;
    if (Ve.has(fa)) {
      const En = hs.current, Or = !En.isBlockVerse && Es.deserializeEditorState(K, En.viewOptions);
      Or && (g.current = Or), V.current = g.current;
      return;
    }
    if (Qd(R)) return;
    if (hy.some((En) => Ve.has(En))) {
      m.current = !0;
      return;
    }
    const Fe = hs.current;
    if (Fe.isBlockVerse) return;
    Ob(R, K, Ve);
    const Ge = K.read(my);
    Ge && (x.current = Ge);
    const vt = L1(O, {
      ignoreTags: hy
    }), mt = vt ? [] : new Ps(K.read(() => q1(R, O))).chop().ops;
    if (!vt) {
      const En = Es.deserializeEditorState(K, Fe.viewOptions);
      En && (g.current = En);
    }
    if (!Fe.onUsjChange) return;
    const st = Fe.readSettledUsj();
    if (!st || mt.length === 0 && Zn(V.current, st)) return;
    if (V.current = st, mt.length === 0) {
      Fe.onUsjChange(st, void 0, "local", void 0);
      return;
    }
    const xt = vg(mt, K), ki = xt && !O.prevEditorState.read(() => Q(xt)) ? xt : void 0;
    Fe.onUsjChange(st, mt, "local", ki);
  }, []), gs = Pe(
    (O) => {
      He(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ tt(By, { initialConfig: ce, children: [
      /* @__PURE__ */ P(FN, { isEditable: !Zt }),
      /* @__PURE__ */ tt("div", { className: "editor-container", children: [
        Te ? /* @__PURE__ */ P(Zx, { onStateChange: gs }) : /* @__PURE__ */ P(
          "div",
          {
            className: "editor-toolbar-container" + (Zt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ P(
              $q,
              {
                ref: h,
                editorRef: j,
                isReadonly: Zt,
                onStateChange: gs
              }
            )
          }
        ),
        /* @__PURE__ */ tt("div", { className: "editor-inner", children: [
          /* @__PURE__ */ P(zy, { editorRef: f }),
          /* @__PURE__ */ P(
            JS,
            {
              contentEditable: /* @__PURE__ */ P(
                Fy,
                {
                  className: `editor-input usfm ${HA(ie).join(" ")}${ie.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ie.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Ne
                }
              ),
              placeholder: /* @__PURE__ */ P(qq, {}),
              ErrorBoundary: jy
            }
          ),
          Te && /* @__PURE__ */ P(BN, {}),
          /* @__PURE__ */ P(Vy, {}),
          n && r && /* @__PURE__ */ P(pq, { scrRef: n, onScrRefChange: r }),
          n && !Te && /* @__PURE__ */ P(
            kO,
            {
              trigger: Gt,
              scrRef: n,
              contextMarker: be,
              getMarkerAction: (O) => Mf(
                O,
                y,
                ie,
                Ce,
                ge,
                void 0,
                le
              ),
              editableHarness: J
            }
          ),
          /* @__PURE__ */ P(
            HN,
            {
              scripture: ne,
              scriptureRef: g,
              nodeOptions: Ce,
              editorAdaptor: lr,
              viewOptions: ie,
              logger: ge
            },
            W
          ),
          /* @__PURE__ */ P(gw, { onChange: wr, viewOptions: ie }),
          /* @__PURE__ */ P(Uq, { listener: Ea }),
          /* @__PURE__ */ P(j$, { viewOptions: ie }),
          /* @__PURE__ */ P(I1, { ref: d, logger: ge, viewOptions: ie }),
          /* @__PURE__ */ P(oN, { viewOptions: ie }),
          /* @__PURE__ */ P(xN, {}),
          /* @__PURE__ */ P(PN, {}),
          ie?.markerMode !== "editable" && /* @__PURE__ */ P(NN, { logger: ge }),
          /* @__PURE__ */ P(IN, { options: Nr }),
          /* @__PURE__ */ P(qR, { limit: Ye, viewOptions: ie }),
          /* @__PURE__ */ P(UN, {}),
          /* @__PURE__ */ P(jN, {}),
          /* @__PURE__ */ P(WN, {}),
          /* @__PURE__ */ P(T2, {}),
          /* @__PURE__ */ P(
            tL,
            {
              viewOptions: ie,
              getMarker: qe,
              logger: ge,
              markerSettleDelayMs: Me,
              structureProtectionMode: Z,
              copyLimit: Ye
            }
          ),
          ie?.markerMode === "visible" && /* @__PURE__ */ P(LR, { viewOptions: ie, copyLimit: Ye }),
          /* @__PURE__ */ P(
            aL,
            {
              styleInfo: le,
              viewOptions: ie,
              logger: ge
            }
          ),
          /* @__PURE__ */ P(GN, { ref: p }),
          /* @__PURE__ */ P(
            JN,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Ce,
              viewOptions: ie,
              logger: ge
            }
          ),
          /* @__PURE__ */ P(hw, {}),
          /* @__PURE__ */ P(tN, {}),
          /* @__PURE__ */ P(MP, {}),
          /* @__PURE__ */ P(mL, { viewOptions: ie, logger: ge }),
          /* @__PURE__ */ P(mw, {}),
          /* @__PURE__ */ P(tO, { structureProtectionMode: Z }),
          /* @__PURE__ */ P(nO, { textDirection: $e }),
          /* @__PURE__ */ P(iO, {}),
          /* @__PURE__ */ P(yO, {}),
          l
        ] }),
        me && /* @__PURE__ */ P(_q, {})
      ] })
    ] }, ie.verseLayout ?? "inline")
  );
}), XD = pi(function(t, n) {
  const { children: r, ...i } = t;
  return /* @__PURE__ */ P(YC, { ref: n, ...i });
});
function ky(e, t) {
  const n = v(e) ? s0(e, It, t) ?? [] : [], r = ZM(e, It, t);
  return [.../* @__PURE__ */ new Set([...n, ...r])];
}
function Bq(e, t, n) {
  ab(It, e, t);
  for (const r of n) {
    const i = Q(r);
    i && Ck(i, It, e);
  }
}
function Fq(e, t) {
  const n = Array.from(t, (s) => Q(s)).filter(
    (s) => s !== null
  );
  n.sort((s, o) => s.isBefore(o) ? -1 : 1);
  const r = n[0];
  if (!r) return;
  if (v(r)) {
    const s = Lr(r).find(
      (a) => a.type === It && a.id === e
    ), o = Math.max(jd(r)[0], s?.start ?? 0);
    r.select(o, o);
    return;
  }
  const i = r.getParent();
  i && i.select(r.getIndexWithinParent(), r.getIndexWithinParent());
}
function XC() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Bc(e, t, n, r, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: n === void 0 ? XC() : n,
    timeStamp: r === void 0 ? performance.timeOrigin + performance.now() : r,
    type: "comment"
  };
}
function QC(e, t, n) {
  return {
    comments: t,
    id: n === void 0 ? XC() : n,
    quote: e,
    type: "thread"
  };
}
function xy(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function zq(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Nu(e) {
  const t = e._changeListeners;
  for (const n of t)
    n();
}
class jq {
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
    this._comments = t, Nu(this);
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
          const c = xy(a);
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
    this._comments = i, Nu(this);
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
          const c = xy(a);
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
    return this._comments = r, Nu(this), t.type === "comment" ? {
      index: s,
      markedComment: zq(t)
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
    return t !== null ? t.doc.get("comments", Lh) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const n = new qh(), r = t.type, i = t.id;
    if (n.set("type", r), n.set("id", i), r === "comment")
      n.set("author", t.author), n.set("content", t.content), n.set("deleted", t.deleted), n.set("timeStamp", t.timeStamp);
    else {
      n.set("quote", t.quote);
      const s = new Lh();
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
      f_,
      (a) => (r !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), r()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Vt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof d_) {
            const u = l.target, f = l.delta;
            let d = 0;
            for (const p of f) {
              const h = p.insert, g = p.retain, m = p.delete, y = u.parent, b = u === n ? void 0 : y instanceof qh && this._comments.find((x) => x.id === y.get("id"));
              if (Array.isArray(h)) {
                const x = d;
                h.slice().reverse().forEach((S) => {
                  const _ = S.get("id"), B = S.get("type") === "thread" ? QC(
                    S.get("quote"),
                    S.get("comments").toArray().map(
                      (V) => Bc(
                        V.get("content"),
                        V.get("author"),
                        V.get("id"),
                        V.get("timeStamp"),
                        V.get("deleted")
                      )
                    ),
                    _
                  ) : Bc(
                    S.get("content"),
                    S.get("author"),
                    _,
                    S.get("timeStamp"),
                    S.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(B, b, x);
                  });
                });
              } else if (typeof g == "number")
                d += g;
              else if (typeof m == "number")
                for (let x = 0; x < m; x++) {
                  const S = b === void 0 || b === !1 ? this._comments[d] : b.comments[d];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(S, b);
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
function Vq(e) {
  const [t, n] = Re(e.getComments());
  return G(() => e.registerOnChange(() => {
    n(e.getComments());
  }), [e]), t;
}
function Wq({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r
}) {
  const i = re(null);
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
  }, [r, e]), /* @__PURE__ */ P("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ tt("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function Hq({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r = !1
}) {
  return wi(
    /* @__PURE__ */ P(Wq, { onClose: e, title: n, closeOnClickOutside: r, children: t }),
    document.body
  );
}
function ZC() {
  const [e, t] = Re(null), n = Pe(() => {
    t(null);
  }, []), r = ft(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ P(Hq, { onClose: n, title: s, closeOnClickOutside: a, children: o });
  }, [e, n]), i = Pe(
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
const Gq = {
  ...IT,
  paragraph: "CommentEditorTheme__paragraph"
};
function Jq(...e) {
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
      className: Jq(
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
function Yq({
  className: e
}) {
  return /* @__PURE__ */ P(Fy, { className: e || "ContentEditable__root" });
}
function Xq({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ P("div", { className: t || "Placeholder__root", children: e });
}
const Ty = jc("INSERT_INLINE_COMMAND");
function Qq({
  anchorKey: e,
  editor: t,
  showComments: n,
  onAddComment: r
}) {
  const i = re(null), s = Pe(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return G(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Qs(() => {
    s();
  }, [e, t, n, s]), /* @__PURE__ */ P("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ P("button", { className: "CommentPlugin_AddCommentBox_button", onClick: r, children: /* @__PURE__ */ P("i", { className: "icon add-comment" }) }) });
}
function Zq({ onEscape: e }) {
  const [t] = Se();
  return G(() => t.registerCommand(
    Dy,
    (n) => e(n),
    vr
  ), [t, e]), null;
}
function eS({
  className: e,
  autoFocus: t,
  onEscape: n,
  onChange: r,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ P(By, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: Gq
  }, children: /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ P(
      c_,
      {
        contentEditable: /* @__PURE__ */ P(Yq, { className: e }),
        placeholder: /* @__PURE__ */ P(Xq, { children: s }),
        ErrorBoundary: jy
      }
    ),
    /* @__PURE__ */ P(a_, { onChange: r }),
    /* @__PURE__ */ P(Vy, {}),
    t !== !1 && /* @__PURE__ */ P(i_, {}),
    /* @__PURE__ */ P(Zq, { onEscape: n }),
    /* @__PURE__ */ P(s_, {}),
    i !== void 0 && /* @__PURE__ */ P(zy, { editorRef: i })
  ] }) });
}
function tS(e, t) {
  return Pe(
    (n, r) => {
      n.read(() => {
        e(l_()), t(!u_(r.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function eD({
  editor: e,
  cancelAddComment: t,
  submitAddComment: n
}) {
  const [r, i] = Re(""), [s, o] = Re(!1), a = re(null), c = ft(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = re(null), u = rS(), f = Pe(() => {
    e.getEditorState().read(() => {
      const g = w();
      if (E(g)) {
        l.current = g.clone();
        const m = g.anchor, y = g.focus, b = XS(
          e,
          m.getNode(),
          m.offset,
          y.getNode(),
          y.offset
        ), x = a.current;
        if (b !== null && x !== null) {
          const { left: S, bottom: _, width: U } = b.getBoundingClientRect(), B = QS(e, b);
          let V = B.length === 1 ? S + U / 2 - 125 : S - 125;
          V < 10 && (V = 10), x.style.left = `${V}px`, x.style.top = `${_ + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const ne = B.length, { container: se } = c, W = c.elements, he = W.length;
          for (let be = 0; be < ne; be++) {
            const He = B[be];
            let $ = W[be];
            $ === void 0 && ($ = document.createElement("span"), W[be] = $, se.appendChild($));
            const Te = `position:absolute;top:${He.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${He.left}px;height:${He.height}px;width:${He.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            $.style.cssText = Te;
          }
          for (let be = he - 1; be >= ne; be--) {
            const He = W[be];
            se.removeChild(He), W.pop();
          }
        }
      }
    });
  }, [e, c]);
  Qs(() => {
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
        QC(g, [Bc(r, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = tS(i, o);
  return /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ P(
      eS,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: d,
        onChange: h
      }
    ),
    /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
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
function tD({
  submitAddComment: e,
  thread: t,
  placeholder: n
}) {
  const [r, i] = Re(""), [s, o] = Re(!1), a = re(null), c = rS(), l = tS(i, o);
  return /* @__PURE__ */ tt(Li, { children: [
    /* @__PURE__ */ P(
      eS,
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
            e(Bc(r, c), !1, t);
            const f = a.current;
            f !== null && f.dispatchCommand(FS, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ P("i", { className: "send" })
      }
    )
  ] });
}
function nS({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: n,
  thread: r = void 0
}) {
  return /* @__PURE__ */ tt(Li, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ tt("div", { className: "Modal__content", children: [
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
function vy({
  comment: e,
  deleteComment: t,
  thread: n,
  rtf: r
}) {
  const [i, s] = Re(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = ZC();
  return /* @__PURE__ */ tt("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ P("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ tt("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : r.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ P("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ tt(Li, { children: [
      /* @__PURE__ */ P(
        di,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ P(
              nS,
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
function nD({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: n,
  displayIndex: r,
  listRef: i,
  submitAddComment: s,
  markNodeMap: o
}) {
  const [a] = Se(), [c, l] = Re(0), [u, f] = ZC(), d = ft(
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
      return /* @__PURE__ */ tt(
        "li",
        {
          onClick: () => {
            if (g) return;
            const y = o.get(h), b = document.activeElement;
            if (y !== void 0) {
              a.update(
                () => {
                  const S = Array.from(y)[0], _ = Q(S);
                  ae(_) && _.selectStart();
                },
                {
                  onUpdate() {
                    b !== null && b.focus();
                  }
                }
              );
              return;
            }
            const x = r.keysFor(It, h);
            x.size !== 0 && a.update(
              () => {
                Fq(h, x);
              },
              {
                onUpdate() {
                  b !== null && b.focus();
                }
              }
            );
          },
          className: `CommentPlugin_CommentsPanel_List_Thread ${o.has(h) || r.keysFor(It, h).size > 0 ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
          children: [
            /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
              /* @__PURE__ */ tt("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
                "> ",
                /* @__PURE__ */ P("span", { children: p.quote })
              ] }),
              /* @__PURE__ */ P(
                di,
                {
                  onClick: () => {
                    f("Delete Thread", (y) => /* @__PURE__ */ P(
                      nS,
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
              vy,
              {
                comment: y,
                deleteComment: n,
                thread: p,
                rtf: d
              },
              y.id
            )) }),
            /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ P(
              tD,
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
      vy,
      {
        comment: p,
        deleteComment: n,
        rtf: d
      },
      h
    );
  }) });
}
function rD({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: n,
  submitAddComment: r,
  markNodeMap: i,
  displayIndex: s
}) {
  const o = re(null), a = n.length === 0;
  return /* @__PURE__ */ tt("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ P("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    a ? /* @__PURE__ */ P("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ P(
      nD,
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
function rS() {
  const e = Wy(), { yjsDocMap: t, name: n } = e;
  return t.has("comments") ? n : "Scripture User";
}
function iD({
  providerFactory: e,
  setCommentStore: t,
  onChange: n,
  showCommentsContainerRef: r,
  commentContainerRef: i,
  logger: s
}) {
  const o = Wy(), [a] = Se(), c = ft(() => {
    const ne = new jq(a, s);
    return n && ne.registerOnChange(n), t?.(ne), ne;
  }, [a, s, n, t]), l = Vq(c), u = ft(() => /* @__PURE__ */ new Map(), []), f = Nx(a), [d, p] = Re(), [h, g] = Re([]), [m, y] = Re(!1), [b, x] = Re(!1), { yjsDocMap: S } = o;
  G(() => {
    if (e) {
      const ne = e("comments", S);
      return c.registerCollaboration(ne);
    }
    return () => {
    };
  }, [c, e, S]);
  const _ = Pe(() => {
    a.update(() => {
      const ne = w();
      ne !== null && (ne.dirty = !0);
    }), y(!1);
  }, [a]), U = Pe(
    (ne, se) => {
      if (ne.type === "comment") {
        const W = c.deleteCommentOrThread(ne, se);
        if (!W)
          return;
        const { markedComment: he, index: be } = W;
        c.addComment(he, se, be);
      } else {
        c.deleteCommentOrThread(ne);
        const W = se !== void 0 ? se.id : ne.id, he = u.get(W), be = f.keysFor(It, W);
        (he !== void 0 && he.size > 0 || be.size > 0) && setTimeout(() => {
          a.update(() => {
            Bq(W, he ?? [], be);
          });
        });
      }
    },
    [c, f, a, u]
  ), B = Pe(
    (ne, se, W, he) => {
      c.addComment(ne, W), se && (a.update(() => {
        E(he) && Xd(he, It, ne.id);
      }), y(!1));
    },
    [c, a]
  );
  G(() => {
    const ne = [];
    let se;
    const W = () => {
      se = window.setTimeout(() => {
        x(!0);
      }, 0);
    };
    for (const he of h) {
      const be = u.get(he) ?? [];
      for (const He of be) {
        const $ = a.getElementByKey(He);
        $ !== null && ($.classList.add("selected"), ne.push($), W());
      }
      f.keysFor(It, he).size > 0 && (f.setStateClass(It, he, "selected", !0), W());
    }
    return () => {
      se !== void 0 && window.clearTimeout(se);
      for (const he of ne)
        he.classList.remove("selected");
      for (const he of h)
        f.setStateClass(It, he, "selected", !1);
    };
  }, [h, f, a, u]), G(() => {
    if (!a.hasNodes([yt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const ne = /* @__PURE__ */ new Map();
    return it(
      ud(
        a,
        yt,
        (se) => Ui(se.getTypedIDs()),
        (se, W) => {
          for (const [he, be] of Object.entries(se.getTypedIDs()))
            be.forEach((He) => {
              W.addID(he, He);
            });
        }
      ),
      a.registerMutationListener(
        yt,
        (se) => {
          a.getEditorState().read(() => {
            for (const [W, he] of se) {
              const be = Q(W);
              let He = [];
              he === "destroyed" ? He = ne.get(W) ?? [] : ae(be) && (He = be.getTypedIDs()[It] ?? []);
              for (const $ of He) {
                let Z = u.get($);
                ne.set(W, He), he === "destroyed" ? Z !== void 0 && (Z.delete(W), Z.size === 0 && u.delete($)) : (Z === void 0 && (Z = /* @__PURE__ */ new Set(), u.set($, Z)), Z.has(W) || Z.add(W));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: se, tags: W }) => {
        se.read(() => {
          const he = w();
          let be = !1, He = !1;
          if (E(he)) {
            const { anchor: $ } = he, Z = $.getNode();
            if (v(Z)) {
              const Te = ky(Z, $.offset);
              g(Te), be = !0, he.isCollapsed() || (p(Z.getKey()), He = !0);
            } else if ($.type === "element" && A(Z)) {
              const Te = Z.getChildren(), Ne = /* @__PURE__ */ new Set();
              for (const [$e, Gt] of [
                [Te[$.offset - 1], !0],
                [Te[$.offset], !1]
              ]) {
                if (!$e) continue;
                const Sn = Gt && v($e) ? $e.getTextContentSize() : 0;
                ky($e, Sn).forEach((Le) => Ne.add(Le));
              }
              Ne.size > 0 && (g([...Ne]), be = !0);
            }
          }
          be || g(($) => $.length === 0 ? $ : []), He || p(null), !W.has("collaboration") && E(he) && y(!1);
        });
      }),
      a.registerCommand(
        Ty,
        () => {
          const se = window.getSelection();
          return se !== null && se.removeAllRanges(), y(!0), !0;
        },
        Di
      )
    );
  }, [a, u]);
  const V = () => {
    a.dispatchCommand(Ty, void 0);
  };
  return /* @__PURE__ */ tt(Li, { children: [
    m && wi(
      /* @__PURE__ */ P(
        eD,
        {
          editor: a,
          cancelAddComment: _,
          submitAddComment: B
        }
      ),
      document.body
    ),
    d != null && !m && wi(
      /* @__PURE__ */ P(
        Qq,
        {
          anchorKey: d,
          editor: a,
          showComments: b,
          onAddComment: V
        }
      ),
      document.body
    ),
    r !== null && wi(
      /* @__PURE__ */ P(
        di,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => x(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ P("i", { className: "comments" })
        }
      ),
      r?.current ?? document.body
    ),
    b && wi(
      /* @__PURE__ */ P(
        rD,
        {
          comments: l,
          submitAddComment: B,
          deleteCommentOrThread: U,
          activeIDs: h,
          markNodeMap: u,
          displayIndex: f
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function sD() {
  const e = re(void 0), t = Pe((n) => {
    e.current = n;
  }, []);
  return [e, t];
}
function oD(e, t) {
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
function aD(e, t) {
  G(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (n) => {
      oD(n, t);
    };
  }, [t, e]);
}
const QD = pi(function(t, n) {
  const r = re(null), i = re(!0), s = re(null), [o, a] = Re(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: f, ...d } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, m = (h ?? !1) || Qo(g), [y, b] = sD();
  aD(d, y), G(() => {
    if (process.env.NODE_ENV !== "production") {
      const _ = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(_), p || console.warn(_);
    }
  }, [p]), Fc(n, () => ({
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
    setMarkerSettleSuspended(_) {
      r.current?.setMarkerSettleSuspended(_);
    },
    setTransientInput(_) {
      r.current?.setTransientInput(_);
    },
    setUsj(_) {
      r.current?.setUsj(_);
    },
    applyUpdate(_, U) {
      r.current?.applyUpdate(_, U);
    },
    replaceEmbedUpdate(_, U) {
      return r.current?.replaceEmbedUpdate(_, U);
    },
    getSelection() {
      return r.current?.getSelection();
    },
    setSelection(_) {
      r.current?.setSelection(_);
    },
    setAnnotation(_, U, B, V, ne) {
      typeof V == "function" || V === void 0 ? r.current?.setAnnotation(_, U, B, V, ne) : r.current?.setAnnotation(_, U, B, V);
    },
    removeAnnotation(_, U) {
      r.current?.removeAnnotation(_, U);
    },
    getAnnotationRanges(_, U) {
      return r.current?.getAnnotationRanges(_, U) ?? [];
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
    replaceCharacterMarker(_, U) {
      return r.current?.replaceCharacterMarker(_, U) ?? !1;
    },
    extendCharacterMarker(_, U) {
      return r.current?.extendCharacterMarker(_, U) ?? !1;
    },
    insertMarker(_) {
      return r.current?.insertMarker(_);
    },
    getMarkerMenuContext() {
      return r.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(_, U) {
      return r.current?.applyMarkerMenuSelection(_, U);
    },
    splitParagraphWithMarker(_) {
      r.current?.splitParagraphWithMarker(_);
    },
    commitTypedMarker(_, U) {
      return r.current?.commitTypedMarker(_, U) ?? !1;
    },
    commitTypedCloser(_) {
      return r.current?.commitTypedCloser(_) ?? !1;
    },
    insertNote(_, U, B) {
      r.current?.insertNote(_, U, B);
    },
    selectNote(_) {
      r.current?.selectNote(_);
    },
    selectAfterNote(_) {
      r.current?.selectAfterNote(_);
    },
    selectNoteTextOffset(_, U, B) {
      r.current?.selectNoteTextOffset(_, U, B);
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
  const x = Pe(
    (_, U, B, V) => {
      if (!u) return;
      const ne = y.current?.getComments();
      u(_, ne, U, B, V);
    },
    [y, u]
  ), S = Pe(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const _ = y.current?.getComments();
    l(_);
  }, [y, i, l]);
  return G(() => (a(r.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ P(o_, { children: /* @__PURE__ */ tt(YC, { ref: r, onUsjChange: x, ...d, children: [
    /* @__PURE__ */ P(
      iD,
      {
        setCommentStore: b,
        onChange: S,
        showCommentsContainerRef: m ? null : f ?? o,
        commentContainerRef: s,
        logger: d.logger
      }
    ),
    /* @__PURE__ */ P("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Ni(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function cD(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function lD(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const uD = /^[#\w().,%/\s-]+$/;
function Rr(e) {
  return e != null;
}
const fD = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, dD = {
  left: "right",
  right: "left"
}, pD = "var(--usj-font-fallback, serif)";
function iS(e, t) {
  const n = [e];
  return t && t !== e && n.push(t), `font-family: ${n.map((i) => `"${cD(i)}"`).join(", ")}, ${pD}`;
}
const ed = ".editor-input.usfm", hD = /^[\w.#[\]="':()>+~*,\s-]+$/;
function gD(e) {
  return hD.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${ed}".`
  ), ed);
}
function mD(e, t, n, r, i) {
  const s = [];
  if (t.fontName && s.push(iS(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (uD.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Rr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Rr(t.firstLineIndent) && s.push(`text-indent: ${Ni(t.firstLineIndent * 20 * n)}vw`), Rr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${r ? "right" : "left"}: ${Ni(t.leftMargin * 20 * n)}vw`), Rr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${r ? "left" : "right"}: ${Ni(t.rightMargin * 20 * n)}vw`
  ), Rr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Ni(t.spaceBefore * n)}pt`), Rr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Ni(t.spaceAfter * n)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = fD[r ? dD[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Cy = { c: 150, ca: 133, cp: 150 };
function Sy(e, t) {
  return e && Rr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function yD(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Rr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const r = Sy(e.markers.c, Cy.c);
  return ["ca", "cp"].map((i) => {
    const s = Sy(
      e.markers[i],
      Cy[i]
    ), o = Ni(s * 100 / r);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function ZD(e, t = {}) {
  const { zoom: n = 1, rtl: r = !1, containerSelector: i = ed } = t, s = gD(i), o = [], a = [];
  e.defaultFont && a.push(iS(e.defaultFont)), Rr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Ni(e.defaultFontSize * n)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = mD(c, l, n, r, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${lD(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...yD(e, s)), o.join(`
`);
}
export {
  Gk as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  XD as Editorial,
  Fo as GENERATOR_NOTE_CALLER,
  Hy as HIDDEN_NOTE_CALLER,
  QD as Marginal,
  T as MarkerType,
  Hk as PARAGRAPH_STRUCTURE_VIEW_MODE,
  dp as STANDARD_VIEW_MODE,
  gc as defaultStyleInfo,
  YD as directionToNames,
  ZP as filterAndRankItems,
  ZD as generateUsjCss,
  GD as getDefaultViewMode,
  fl as getDefaultViewOptions,
  eI as getEnterMenuItems,
  ZR as getMarkerMenuItems,
  JD as getViewMode,
  gp as getViewOptions,
  Qo as isBlockVerseLayout,
  ei as isInsertEmbedOpOfType,
  zA as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
