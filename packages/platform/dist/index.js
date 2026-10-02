import { jsx as _, jsxs as He, Fragment as ki } from "react/jsx-runtime";
import { forwardRef as Oi, useState as Ae, useRef as ue, useCallback as Se, useEffect as J, useMemo as rt, memo as Sv, createContext as im, useContext as sm, Children as _v, isValidElement as Mv, cloneElement as Ev, useLayoutEffect as Ss, useImperativeHandle as Uu } from "react";
import { assertSafeKey as pt, isValidBookCode as Av, MARKER_OBJECT_PROPS as Pv, USJ_VERSION as xn, USJ_TYPE as Tn, indexesFromUsjJsonPath as dr, isUsjTextContentLocation as vn, usjJsonPathFromIndexes as vt, isUsjPropertyValueLocation as fo, isUsjClosingMarkerLocation as hs, isUsjClosingAttributeMarkerLocation as po, isUsjAttributeKeyLocation as ho, isUsjAttributeMarkerLocation as ec, isUsjMarkerLocation as Ku, getUsjDocumentLocationTypeName as wv, EMPTY_USJ as om } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as ft, $parseSerializedNode as _s, createCommand as Fu, DecoratorNode as qo, ElementNode as Hr, isHTMLElement as Ri, TextNode as Xe, $isRangeSelection as E, $getEditor as jt, $getNodeByKey as X, $isTextNode as v, createState as Ms, $getState as fe, $getSelection as P, $isNodeSelection as Bu, ParagraphNode as zu, $isRootNode as Pr, HISTORIC_TAG as tc, $createTextNode as $e, $setState as $t, $isElementNode as A, $getCommonAncestor as Nv, $isLineBreakNode as Lo, NODE_STATE_KEY as Cn, $isDecoratorNode as Gr, $addUpdateTag as cn, $getRoot as _e, $createRangeSelection as Do, $createPoint as Sr, $setSelection as Sn, $getCharacterOffsets as ju, KEY_DOWN_COMMAND as On, COMMAND_PRIORITY_HIGH as et, SELECTION_INSERT_CLIPBOARD_NODES_COMMAND as Ov, COMMAND_PRIORITY_CRITICAL as _r, $getNearestNodeFromDOMNode as $i, HISTORY_MERGE_TAG as am, CLICK_COMMAND as rc, COMMAND_PRIORITY_EDITOR as xi, isDOMNode as cm, CONTROLLED_TEXT_INSERTION_COMMAND as Vu, PASTE_COMMAND as kn, CUT_COMMAND as Ti, DROP_COMMAND as Wu, DELETE_CHARACTER_COMMAND as Rv, DELETE_WORD_COMMAND as $v, DELETE_LINE_COMMAND as Iv, COPY_COMMAND as nc, COMMAND_PRIORITY_LOW as Bt, COMMAND_PRIORITY_NORMAL as ls, SELECTION_CHANGE_COMMAND as Br, getDOMSelection as qv, isSelectionWithinEditor as Lv, $createRangeSelectionFromDom as Dv, isDOMTextNode as Uv, BLUR_COMMAND as Hu, SKIP_DOM_SELECTION_TAG as Kv, CLEAR_HISTORY_COMMAND as Fv, SELECT_ALL_COMMAND as Bv, $selectAll as zv, $isRootOrShadowRoot as Gu, CAN_UNDO_COMMAND as jv, CAN_REDO_COMMAND as Vv, DRAGSTART_COMMAND as Wv, $createNodeSelection as lm, $hasUpdateTag as Hv, getDOMSelectionFromTarget as Gv, $onUpdate as Jv, KEY_ENTER_COMMAND as um, LineBreakNode as fm, $copyNode as Yv, FOCUS_COMMAND as Xv, createEditor as Ju, KEY_ESCAPE_COMMAND as dm, INSERT_PARAGRAPH_COMMAND as ba, UNDO_COMMAND as pm, REDO_COMMAND as hm, CLEAR_EDITOR_COMMAND as Qv } from "lexical";
import { addClassNamesToElement as Xs, removeClassNamesFromElement as aa, $findMatchingParent as St, $dfsIterator as gm, $dfs as Es, mergeRegister as ct, registerNestedElementResolver as Yu, $unwrapNode as El, IS_APPLE as ka } from "@lexical/utils";
import { useLexicalNodeSelection as Zv } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as an } from "fast-equals";
import is from "quill-delta";
import { useLexicalComposerContext as Te } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as eC, copyToClipboard as tC } from "@lexical/clipboard";
import { TreeView as rC } from "@lexical/react/LexicalTreeView";
import * as nC from "react-dom";
import { createPortal as gi } from "react-dom";
import { LexicalComposer as mm } from "@lexical/react/LexicalComposer";
import { ContentEditable as ym } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as bm } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as km } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as xm } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as iC } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as sC, createDOMRange as oC, createRectsFromDOMRange as aC } from "@lexical/selection";
import { autoUpdate as cC, computePosition as lC, shift as uC, flip as fC } from "@floating-ui/dom";
import { $generateNodesFromDOM as dC } from "@lexical/html";
import { AutoFocusPlugin as pC } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as hC } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Tm, LexicalCollaboration as gC } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as mC } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as yC } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as bC, $isRootTextContentEmpty as kC } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as xC } from "@lexical/yjs";
import { Array as gp, Map as mp, YArrayEvent as TC } from "yjs";
const Hc = (e) => ft(_s(e)), vC = {
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
function Xu(e) {
  return vC[e];
}
const $ = " ", go = "​", Tt = $, Qu = `${$}|`, ln = "p", mo = "+", vm = "-", Zn = "immutable-note-caller", Cm = "immutable-verse", xa = "chapter", Al = "verse", yp = "invalid", CC = "text-spacing", SC = "formatted-font", _C = "marker-", ic = "external-usj-mutation", MC = "selection-change", yo = "cursor-change", Zu = Fu("APP_PLACED_CARET_COMMAND"), Pl = "annotation-change", ca = "typed-mark-wrap", ef = "delta-change", Sm = "marker-settle", EC = [
  ic,
  MC,
  yo,
  Pl,
  ef
], _m = 2, vi = "zmsc-s", us = "zmsc-e", AC = [vi, us], PC = [
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
  vi,
  us
], Mm = 1, tf = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], wC = tf.filter((e) => e !== "sid" && e !== "eid");
class zr extends qo {
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
  constructor(t = "", r, n, i, s, o) {
    super(s), this.__marker = t, this.__sid = r, this.__eid = n, this.__unknownAttributes = i, this.__attributeOrder = o;
  }
  static getType() {
    return "ms";
  }
  static clone(t) {
    const { __marker: r, __sid: n, __eid: i, __unknownAttributes: s, __attributeOrder: o, __key: a } = t;
    return new zr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Am().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (PC.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setSid(t.sid).setEid(t.eid).setUnknownAttributes(t.unknownAttributes).setAttributeOrder(t.attributeOrder);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const r = this.getWritable();
    return r.__sid = t, r;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setEid(t) {
    if (this.__eid === t)
      return this;
    const r = this.getWritable();
    return r.__eid = t, r;
  }
  getEid() {
    return this.getLatest().__eid;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  setAttributeOrder(t) {
    const r = this.getWritable();
    return r.__attributeOrder = t, r;
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
      version: Mm
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Em(e) {
  return AC.includes(e);
}
function Am(e, t, r, n, i) {
  return ft(new zr(e, t, r, n, void 0, i));
}
function Ie(e) {
  return e instanceof zr;
}
const rf = "f", NC = [
  // Footnote
  rf,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Qs(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const OC = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Pm = 1;
class Qe extends Hr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = rf, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Qs(t) === "crossref" ? vm : mo), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Qe(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => $C(t) ? {
        conversion: RC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return nf().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (NC.includes(t) || (r?.includes(t) ?? !1));
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setCaller(t.caller).setIsCollapsed(t.isCollapsed).setCategory(t.category).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setCaller(t) {
    if (this.__caller === t)
      return this;
    const r = this.getWritable();
    return r.__caller = t, r;
  }
  getCaller() {
    return this.getLatest().__caller;
  }
  setIsCollapsed(t) {
    if (this.__isCollapsed === t)
      return this;
    const r = this.getWritable();
    return r.__isCollapsed = t, r;
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
    const r = this.getWritable();
    return r.__category = t, r;
  }
  getCategory() {
    return this.getLatest().__category;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Qs(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Qs(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Qs(this.getMarker()))), { element: r };
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
      version: Pm
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
function RC(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: nf(t, r, n) };
}
function nf(e, t, r, n, i) {
  return ft(new Qe(e, t, r, n, i));
}
function $C(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Qe.isValidMarker(t) && e.classList.contains(Qe.getType());
}
function L(e) {
  return e instanceof Qe;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var x;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(x || (x = {}));
const wl = {
  id: {
    category: T.FileIdentification,
    type: x.Paragraph,
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
    category: T.FileIdentification,
    type: x.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: T.FileIdentification,
    type: x.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: T.Headers,
    type: x.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: T.Headers,
    type: x.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: T.Headers,
    type: x.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: T.Headers,
    type: x.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: T.Headers,
    type: x.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: T.Headers,
    type: x.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: T.Headers,
    type: x.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: T.Headers,
    type: x.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: T.Headers,
    type: x.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: T.Headers,
    type: x.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: T.Remarks,
    type: x.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: T.Remarks,
    type: x.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: T.Remarks,
    type: x.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction section heading, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"],
      CharacterStyling: ["no"]
    }
  },
  is1: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
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
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: T.Introduction,
    type: x.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: T.Introduction,
    type: x.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: T.DivisionMarks,
    type: x.Paragraph,
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
    category: T.DivisionMarks,
    type: x.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: T.DivisionMarks,
    type: x.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: T.DivisionMarks,
    type: x.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: T.DivisionMarks,
    type: x.Paragraph,
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
    category: T.DivisionMarks,
    type: x.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: T.DivisionMarks,
    type: x.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: T.DivisionMarks,
    type: x.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Paragraphs,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: T.Poetry,
    type: x.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: T.Poetry,
    type: x.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
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
    category: T.Poetry,
    type: x.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
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
    category: T.TitlesHeadings,
    type: x.Paragraph,
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
    category: T.TitlesHeadings,
    type: x.Paragraph,
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
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
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
    category: T.TitlesHeadings,
    type: x.Paragraph,
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
    category: T.TitlesHeadings,
    type: x.Paragraph,
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
    category: T.TitlesHeadings,
    type: x.Paragraph,
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
    category: T.TitlesHeadings,
    type: x.Paragraph,
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
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
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
    category: T.TitlesHeadings,
    type: x.Paragraph,
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
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: T.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Paragraph,
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
    category: T.Lists,
    type: x.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: T.Lists,
    type: x.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: T.Lists,
    type: x.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: T.Lists,
    type: x.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: T.Lists,
    type: x.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: T.Lists,
    type: x.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: T.Lists,
    type: x.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: T.Lists,
    type: x.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: T.Footnotes,
    type: x.Note,
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
    category: T.Footnotes,
    type: x.Note,
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
    category: T.Footnotes,
    type: x.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: T.Footnotes,
    type: x.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: T.Footnotes,
    type: x.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: T.Footnotes,
    type: x.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: T.Footnotes,
    type: x.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: T.Footnotes,
    type: x.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: T.Footnotes,
    type: x.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: T.Footnotes,
    type: x.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: T.Footnotes,
    type: x.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: T.Footnotes,
    type: x.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: T.Footnotes,
    type: x.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: T.CrossReferences,
    type: x.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: T.CrossReferences,
    type: x.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: T.CrossReferences,
    type: x.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: T.CrossReferences,
    type: x.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: T.CrossReferences,
    type: x.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: T.CrossReferences,
    type: x.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: T.CrossReferences,
    type: x.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: T.CrossReferences,
    type: x.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: T.CrossReferences,
    type: x.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: T.CrossReferences,
    type: x.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: T.CrossReferences,
    type: x.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: T.SpecialText,
    type: x.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: T.SpecialText,
    type: x.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: T.SpecialText,
    type: x.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: T.SpecialText,
    type: x.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: T.SpecialText,
    type: x.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: T.SpecialText,
    type: x.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: T.SpecialText,
    type: x.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: T.SpecialText,
    type: x.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: T.SpecialText,
    type: x.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: T.SpecialText,
    type: x.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: T.SpecialText,
    type: x.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: T.SpecialText,
    type: x.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: T.SpecialText,
    type: x.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: T.SpecialText,
    type: x.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: T.SpecialText,
    type: x.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: T.CharacterStyling,
    type: x.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: T.CharacterStyling,
    type: x.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: T.CharacterStyling,
    type: x.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: T.CharacterStyling,
    type: x.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: T.CharacterStyling,
    type: x.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: T.CharacterStyling,
    type: x.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: T.CharacterStyling,
    type: x.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: T.Breaks,
    type: x.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, oi = {
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
}, bp = {
  p: { children: oi },
  q: { children: oi },
  q1: { children: oi },
  q2: { children: oi },
  q3: { children: oi },
  q4: { children: oi },
  b: { children: oi },
  qm: {
    children: {
      Paragraphs: { add: ["p"], remove: [] }
    }
  },
  c: {
    type: x.Paragraph,
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
    category: T.SpecialFeatures,
    type: x.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: T.SpecialFeatures,
    type: x.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: T.SpecialFeatures,
    type: x.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: T.SpecialFeatures,
    type: x.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function un(e) {
  const t = Object.hasOwn(wl, e) ? wl[e] : void 0, r = Object.hasOwn(bp, e) ? bp[e] : void 0;
  if (!t)
    return r?.category !== void 0 && r.type !== void 0 && r.description !== void 0 && r.hasEndMarker !== void 0 ? { ...r } : void 0;
  if (!r)
    return t;
  let n = t.children ? { ...t.children } : void 0;
  if (r.children === null && (n = void 0), r.children) {
    n = n || {};
    for (const [i, s] of Object.entries(r.children)) {
      const o = i;
      if (s === null)
        Reflect.deleteProperty(n, o);
      else {
        let a = n[o] || [];
        s.remove && (a = a.filter((c) => !s.remove.includes(c))), s.add && (a = [.../* @__PURE__ */ new Set([...a, ...s.add])]), a.length > 0 ? n[o] = a : Reflect.deleteProperty(n, o);
      }
    }
    Object.keys(n).length === 0 && (n = void 0);
  }
  return {
    ...t,
    ...r,
    children: n
  };
}
const Uo = "￼", wm = "v", Nm = "c", ai = "fig", kp = "tr", Nl = "esb", Om = "esbe", xp = "periph", Tp = "alt", vp = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, IC = {
  "": "start",
  c: "center",
  r: "end"
};
function Cp(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Sp(e) {
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
const qC = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function LC(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === go && s + 1 < e.length && Sp(e[s + 1]) || (Sp(o) ? (r || (i = t.length, t += o), r = !0) : qC.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function DC(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function UC(e, t) {
  let r = t;
  for (; r < e.length; ) {
    const n = e[r];
    if (n === "\\" || n === "|" || n === Uo)
      break;
    if (n === "*") {
      r++;
      break;
    }
    if (/[\s\u200B]/.test(n))
      break;
    r++;
  }
  return { name: e.slice(t, r), next: r };
}
const KC = /^(?:qt[1-5]?|ts)-[se]$/;
function sf(e) {
  return KC.test(e) || Em(e);
}
function Gc(e, t) {
  let r = t;
  for (; r < e.length && /[\s\u00A0\u200B]/.test(e[r]); )
    r++;
  const n = r;
  for (; r < e.length && e[r] !== Uo && !/[\s\u00A0\u200B\\]/.test(e[r]); )
    r++;
  const i = e.slice(n, r);
  for (; r < e.length && /[\s\u00A0\u200B]/.test(e[r]); )
    r++;
  return { word: i, next: r };
}
function FC(e, t) {
  const r = [];
  let n = 0;
  for (let i = 0; i < e.length; i++) {
    if (e[i] !== Uo)
      continue;
    const s = t[n];
    n++, (s === "note" || s === "verse") && r.push(i);
  }
  return r;
}
function BC(e, t, r, n) {
  const i = [];
  let s = 0;
  const o = FC(e, n);
  let a = 0, c;
  const l = (f) => {
    if (!f)
      return;
    const d = i[i.length - 1];
    d?.kind === "text" ? d.text += f : i.push({ kind: "text", text: f });
  }, u = (f) => {
    f.split("//").forEach((p, h) => {
      h > 0 && i.push({ kind: "optbreak" }), l(p);
    });
  };
  for (; s < e.length; ) {
    if (e[s] !== "\\") {
      for (; a < o.length && o[a] < s; )
        a++;
      if (o[a] === s) {
        c = void 0, i.push({ kind: "noteEndingPlaceholder" }), s++;
        continue;
      }
      const b = e.indexOf("\\", s);
      let C = b === -1 ? e.length : b;
      a < o.length && (C = Math.min(C, o[a])), u(LC(e.slice(s, C))), s = C;
      continue;
    }
    const f = s, { name: d, next: p } = UC(e, s + 1);
    if (s = p, d === "") {
      l(e.slice(f, s));
      continue;
    }
    if (d === "*") {
      i.push({ kind: "end", marker: "" });
      continue;
    }
    if (d.endsWith("*")) {
      d.slice(0, -1) === c && (c = void 0), i.push({ kind: "end", marker: d.slice(0, -1) });
      continue;
    }
    const h = () => {
      for (; s < e.length && /[\s\u00A0\u200B]/.test(e[s]); )
        s++;
    };
    if (d === wm) {
      const { word: b, next: C } = Gc(e, s);
      s = C, i.push({ kind: "verse", number: b });
      continue;
    }
    if (d === Nm) {
      const { word: b, next: C } = Gc(e, s);
      s = C, c = void 0, i.push({ kind: "chapter", number: b });
      continue;
    }
    const m = d.startsWith("+"), g = m ? d.slice(1) : d, k = t(g)?.type;
    if (k === x.Note || k === void 0 && Qe.isValidMarker(d)) {
      const { word: b, next: C } = Gc(e, s);
      s = C, c = d, i.push({ kind: "note", marker: d, caller: b || "+" });
      continue;
    }
    if (k === x.Milestone || k === void 0 && sf(d)) {
      const b = XC(e, f, d, s);
      if (b)
        i.push(b.token), b.ejectedText && l(b.ejectedText), s = b.next;
      else {
        const C = e.indexOf("\\", s), R = C === -1 ? e.length : C;
        l(e.slice(f, R)), s = R;
      }
      continue;
    }
    k === x.Paragraph ? (h(), i.push({ kind: "para", marker: d })) : k === x.Character ? (h(), i.push({ kind: "charOpen", marker: g, isNested: m })) : Ta(g) ? (h(), Ta(g)?.shape === "para" ? i.push({ kind: "para", marker: d }) : i.push({ kind: "charOpen", marker: g, isNested: m })) : (h(), !(r || c !== void 0) || d === Nl || d === Om ? i.push({ kind: "para", marker: d }) : i.push({ kind: "charOpen", marker: g, isNested: m }));
  }
  return i;
}
const _p = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
}, zC = {
  chapter: ["ca", "cp"],
  verse: ["va", "vp"],
  note: ["cat"],
  sidebar: ["cat"]
};
function Ta(e) {
  return Object.hasOwn(_p, e) ? _p[e] : void 0;
}
function jC(e) {
  return Ta(e) !== void 0;
}
const VC = /([-\w]+)\s*=\s*"(.*?)"/g, WC = /[\s\u200B]*[\n\r][\s\u200B]*/g, Rm = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function As(e) {
  return Rm[e];
}
const HC = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function GC(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function bo(e, t, r = Rm[t]) {
  const n = e.replace(WC, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(VC)];
  if (s.length > 0) {
    if (!GC(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      HC.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Ko(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function JC(e) {
  const t = sc(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function YC(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = bo(e.slice(n + 1, i), r, Ko(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function XC(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = bo(s.slice(o + 1), r, Ko(r)), !a && s.slice(o + 1).trim() !== "")) {
    const u = s.slice(0, o);
    return {
      token: { kind: "milestone", marker: r },
      next: n + o,
      ejectedText: u.trim() !== "" ? u.replace(/^[ \u00A0]/, "") : void 0
    };
  }
  const c = o >= 0 ? s.slice(0, o) : s;
  if (c.trim() !== "")
    return {
      token: { kind: "milestone", marker: r, attributes: a },
      next: i,
      ejectedText: c.replace(/^[ \u00A0]/, "")
    };
  const l = YC(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function sn(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", $);
}
function qn(e) {
  return e.content || (e.content = []), e.content;
}
function sc(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, f;
  const d = () => u ? qn(u) : f ? qn(f) : r;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? qn(o[o.length - 1].object) : qn(s);
    if (o.length > 0)
      return qn(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return d();
      i = { type: "para", marker: ln, content: [] }, d().push(i);
    }
    return qn(i);
  }, m = (de) => {
    const q = h();
    typeof de == "string" && typeof q[q.length - 1] == "string" ? q[q.length - 1] = q[q.length - 1] + de : q.push(de);
  }, g = (de) => {
    for (let q = de; q < o.length; q += 1) {
      const ce = o[q].object;
      ce.closed = "false";
    }
  }, k = () => {
    g(0), o.length = 0;
  }, b = (de) => {
    s && (o.length > a && (g(a), o.length = a), a = 0, de || (s.closed = "false"), s = void 0);
  }, C = () => {
    c = void 0, l = void 0;
  }, R = (de, q, ce) => {
    k();
    const [, me, Fe, yt] = ce, te = {
      type: "table:cell",
      marker: yt ? q.slice(0, q.indexOf("-")) : q,
      align: IC[me],
      content: []
    };
    yt && (te.colspan = String(Number(yt) + 1 - Number(Fe))), qn(de).push(te), i = te;
  }, w = (de) => {
    u && (de || (u.closed = "false"), u = void 0);
  }, F = () => {
    f = void 0;
  };
  let Y, N = -1;
  const W = (de) => {
    Y = de, N = -1;
  };
  let ne = "", D;
  const ke = () => {
    ne && m(sn(ne)), ne = "";
  }, he = (de = !1) => {
    Y?.type === "sidebar" ? ne = "" : de && ne.endsWith(`
`) && (ne = ne.slice(0, -1)), Y = void 0, ke();
  }, ve = () => {
    if (!D)
      return;
    const de = { type: "char", marker: D.marker, content: [] };
    D.value && (de.content = [sn(D.value)]), h().push(de), o.push({ object: de }), D = void 0;
  }, Me = (de, q) => {
    p = !1, C(), k(), b(!1), i = { type: "para", marker: de, content: [] }, q && (i.content = [sn(q)]), d().push(i);
  }, je = () => {
    D && (Me(D.marker, D.value), D = void 0);
  };
  let Ze;
  const Gt = (de) => {
    if (!Ze)
      return;
    let { value: q } = Ze;
    Ze = void 0, de && q.endsWith(`
`) && (q = q.slice(0, -1));
    const ce = q.indexOf("|"), me = ce >= 0 ? bo(q.slice(ce + 1), xp) : void 0, Fe = ce >= 0 ? q.slice(0, ce) : q, yt = ce >= 0 && (!me || !!Fe && !!me[Tp]), te = yt ? void 0 : me, nt = yt ? q : Fe, br = {
      type: "periph",
      ...nt ? { [Tp]: sn(nt) } : {},
      ...te
    };
    br.content = [], d().push(br), f = br, i = void 0;
  };
  let Ve;
  const Xr = () => {
    if (Ve) {
      if (Ve.shape === "para")
        Me(ai, Ve.value);
      else {
        const de = { type: "char", marker: ai, content: [] };
        Ve.value && (de.content = [sn(Ve.value)]), h().push(de), o.push({ object: de });
      }
      Ve = void 0;
    }
  }, Jt = BC(e, t?.getMarker ?? un, n, t?.placeholders ?? []);
  for (let de = 0; de < Jt.length; de++) {
    const q = Jt[de];
    if (D) {
      if (q.kind === "text") {
        D.value += q.text;
        continue;
      }
      if (D.shape === "char" && q.kind === "end" && q.marker.replace(/^\+/, "") === D.marker) {
        if (D.value.trim() === "") {
          h().push({ type: "char", marker: D.marker, content: [] }), D = void 0, he();
          continue;
        }
        Object.assign(D.target, {
          [D.attrName]: sn(D.value.trim())
        });
        const ce = D.marker;
        if (D = void 0, ce === "ca") {
          const me = Jt[de + 1];
          me?.kind === "text" && /^[\s\u200B]*$/.test(me.text) && de++;
        }
        continue;
      }
      if (D.shape === "para" && (q.kind === "para" || q.kind === "chapter")) {
        const ce = D.value.replace(/[\s\u200B]+$/, "");
        ce === "" ? (Me(D.marker), D = void 0) : (Object.assign(D.target, { [D.attrName]: sn(ce) }), D = void 0);
      } else {
        Y = void 0, (q.kind === "para" || q.kind === "chapter") && D.value.endsWith(`
`) && (D.value = D.value.slice(0, -1)), D.shape === "para" ? je() : ve(), de--;
        continue;
      }
    }
    if (Ze) {
      if (q.kind === "text" || q.kind === "optbreak") {
        Ze.value += q.kind === "text" ? q.text : "//";
        continue;
      }
      Gt(q.kind === "para" || q.kind === "chapter"), de--;
      continue;
    }
    if (Ve) {
      if (q.kind === "text" || q.kind === "optbreak") {
        Ve.value += q.kind === "text" ? q.text : "//";
        continue;
      }
      if (q.kind === "end" && q.marker.replace(/^\+/, "") === ai) {
        const ce = Ve.value.indexOf("|"), me = ce >= 0 ? bo(Ve.value.slice(ce + 1), ai) : void 0;
        if (me) {
          const Fe = {};
          for (const [nt, br] of Object.entries(me))
            Fe[nt === "src" ? "file" : nt] = br;
          const yt = {
            type: "figure",
            marker: ai,
            ...Fe
          }, te = Ve.value.slice(0, ce);
          te && (yt.content = [sn(te)]), m(yt), Ve = void 0;
          continue;
        }
      }
      Xr(), de--;
      continue;
    }
    if (Y)
      if (q.kind === "text") {
        if (q.text.includes(`
`) && /^[\s\u200B]*$/.test(q.text)) {
          ne += q.text;
          continue;
        }
        he();
      } else if (q.kind === "charOpen" || q.kind === "para") {
        const ce = q.kind === "para" || !q.isNested ? Ta(q.marker) : void 0, me = zC[Y.type]?.indexOf(q.marker) ?? -1;
        if (ce && ce.targetTypes.includes(Y.type) && me > N) {
          N = me, ne = "", D = {
            target: Y,
            attrName: ce.attrName,
            marker: q.marker,
            shape: ce.shape,
            value: ""
          };
          continue;
        }
        he(q.kind === "para");
      } else
        he(q.kind === "chapter");
    if (!s && !n && (q.kind === "charOpen" && !q.isNested && q.marker === ai || q.kind === "para" && q.marker === ai)) {
      k(), Ve = { shape: q.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (q.kind) {
      case "text": {
        let ce = q.text;
        if (!s && ce.endsWith(`
`)) {
          const me = Jt[de + 1];
          (me === void 0 || me.kind === "para" || me.kind === "chapter") && (ce = ce.slice(0, -1));
        }
        ce && m(sn(ce));
        break;
      }
      case "para": {
        const ce = !s && !n;
        if (ce && q.marker === kp) {
          k(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: kp, content: [] }, qn(c).push(l), i = l, p = !1;
          break;
        }
        if (ce && l) {
          const me = vp.exec(q.marker);
          if (me && Cp(me)) {
            R(l, q.marker, me);
            break;
          }
        }
        if (C(), !n && q.marker === Nl) {
          k(), b(!1), w(!1);
          const me = {
            type: "sidebar",
            marker: Nl,
            content: []
          };
          d().push(me), u = me, i = void 0, W(u), p = !1;
          break;
        }
        if (q.marker === Om && u) {
          k(), b(!1), w(!0), i = void 0;
          break;
        }
        if (!n && q.marker === xp) {
          k(), b(!1), w(!1), F(), Ze = { value: "" }, i = void 0, p = !1;
          break;
        }
        Me(q.marker);
        break;
      }
      case "verse": {
        b(!1);
        const ce = { type: "verse", marker: wm, number: q.number };
        m(ce), W(ce);
        break;
      }
      case "chapter": {
        k(), b(!1), C(), w(!1), F(), i = void 0;
        const ce = {
          type: "chapter",
          marker: Nm,
          number: q.number
        };
        r.push(ce), W(ce), p = !0;
        break;
      }
      case "note": {
        b(!1);
        const ce = h();
        s = { type: "note", marker: q.marker, caller: q.caller, content: [] }, a = o.length, ce.push(s), W(s);
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !q.isNested) {
          const Fe = vp.exec(q.marker);
          if (Fe && Cp(Fe)) {
            R(l, q.marker, Fe);
            break;
          }
        }
        if (!q.isNested) {
          const Fe = s ? a : 0;
          g(Fe), o.length = Fe;
        }
        const ce = h(), me = { type: "char", marker: q.marker, content: [] };
        ce.push(me), o.push({ object: me });
        break;
      }
      case "end": {
        const ce = q.marker.replace(/^\+/, ""), me = s ? a : 0, Fe = o.findLastIndex((yt, te) => te >= me && yt.object.marker === ce);
        Fe >= 0 ? (QC(o[Fe].object), g(Fe + 1), o.length = Fe) : s && s.marker === ce ? b(!0) : (g(me), o.length = me, m({ type: "unmatched", marker: `${q.marker}*` }));
        break;
      }
      case "milestone":
        m({ type: "ms", marker: q.marker, ...q.attributes });
        break;
      case "optbreak":
        m({ type: "optbreak" });
        break;
      case "noteEndingPlaceholder":
        b(!1), m(Uo);
        break;
    }
  }
  if (Ze && Gt(!0), Ve && Xr(), D)
    if (D.shape === "para") {
      const de = D.value.replace(/[\s\u200B]+$/, "");
      de === "" ? Me(D.marker) : Object.assign(D.target, { [D.attrName]: sn(de) }), D = void 0;
    } else
      D.value.endsWith(`
`) && (D.value = D.value.slice(0, -1)), ve();
  k(), b(!1), w(!1);
  const Oe = (de) => {
    for (const q of de)
      typeof q != "string" && q.content && (Oe(q.content), q.content.length === 0 && delete q.content);
  };
  return Oe(r), r;
}
function QC(e) {
  const t = e.content;
  if (!t || t.length === 0)
    return;
  let r = t.length;
  for (; r > 0; ) {
    const c = t[r - 1];
    if (typeof c != "string" && c.type !== "optbreak")
      break;
    r--;
  }
  const n = t.findIndex((c, l) => l >= r && typeof c == "string" && c.includes("|"));
  if (n < 0)
    return;
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = bo(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
function ze(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ot(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Mr(e, t) {
  let r = ze(e);
  return t && (r += `${$}${t}`), r += " ", r;
}
function gt(e) {
  return " " + e + $;
}
function Mp(e, t) {
  return e === t || (e === " " || e === $) && (t === " " || t === $);
}
function ko(e, t) {
  const r = gt(t);
  let n = 0;
  for (; n < e.length && n < r.length && Mp(e[n], r[n]); )
    n += 1;
  let i = 0;
  for (; i < e.length - n && i < r.length - n && Mp(e[e.length - 1 - i], r[r.length - 1 - i]); )
    i += 1;
  return { start: n, end: e.length - i, missing: n + i < r.length };
}
function of(e, t) {
  const { start: r, end: n } = ko(e, t);
  return e.slice(r, n).replaceAll($, " ");
}
const ZC = 1;
class $r extends Xe {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(di(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new $r(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return _t().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || di(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = di(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = di(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = di(r.__marker, r.__markerSyntax, t), r;
  }
  getNested() {
    return this.getLatest().__nested;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(this.__markerSyntax), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && r.setAttribute("data-marker", this.__marker), t.__markerSyntax !== this.__markerSyntax && (r.classList.remove(t.__markerSyntax), r.classList.add(this.__markerSyntax)), i;
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
      version: ZC
    };
  }
}
function _t(e, t, r) {
  return ft(new $r(e, t, void 0, r));
}
function M(e) {
  return e instanceof $r;
}
function Ps(e) {
  return e?.type === $r.getType();
}
function pn(e) {
  return e.getTextContent() === di(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function eS(e) {
  e.setTextContent(di(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function di(e, t, r = !1) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : ze(e, r);
}
const Ot = "internal-comment", tS = [Ot], $m = Object.freeze({}), Ol = Object.freeze({}), Rl = Object.freeze({}), $l = Object.freeze({}), Il = Object.freeze({}), rS = 1, li = /* @__PURE__ */ new Map(), Zi = /* @__PURE__ */ new Map(), ui = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), xo = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap();
function nS(e) {
  return xo.set(e, []), To.set(e, /* @__PURE__ */ new Map()), () => {
    xo.delete(e), To.delete(e);
  };
}
function iS(e) {
  const t = xo.get(e);
  return t ? (xo.set(e, []), t) : [];
}
const va = /* @__PURE__ */ new WeakMap();
function la(e, t) {
  return JSON.stringify([e, t]);
}
function Ep(e, t, r, n) {
  let i = va.get(e);
  n ? (i || va.set(e, i = /* @__PURE__ */ new Set()), i.add(la(t, r))) : (i?.delete(la(t, r)), To.get(e)?.delete(la(t, r)));
}
function sS(e) {
  va.delete(e), To.get(e)?.clear();
}
function ta(e, t, r, n) {
  const i = e.get(t), s = i?.[r];
  if (!i || !s || !(n in s))
    return;
  const o = on(s, n), a = Object.keys(o).length > 0 ? { ...i, [r]: o } : on(i, r);
  Object.keys(a).length > 0 ? e.set(t, a) : e.delete(t);
}
function oS(e, t, r) {
  ta(li, e, t, r), ta(Zi, e, t, r), ta(ui, e, t, r), ta(fi, e, t, r);
}
class ut extends Hr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = $m, r, n, i, s, o) {
    super(o), this.__typedIDs = ra(t), this.__typedOnClicks = Jc(r), this.__typedOnRemoves = Yc(n), this.__typedOnMouseEnters = Xc(i), this.__typedOnMouseLeaves = Qc(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = ra(t.__typedIDs), n = Jc(t.__typedOnClicks), i = Yc(t.__typedOnRemoves), s = Xc(t.__typedOnMouseEnters), o = Qc(t.__typedOnMouseLeaves);
    return new ut(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return tS.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ci().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: rS
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    Xs(n, ...Im(t.theme, this.__typedIDs));
    const i = this.getOrCreateDOMClickListener(r);
    n.addEventListener("click", i);
    const s = this.getOrCreateDOMMouseEnterListener(r);
    n.addEventListener("mouseenter", s);
    const o = this.getOrCreateDOMMouseLeaveListener(r);
    return n.addEventListener("mouseleave", o), n;
  }
  updateDOM(t, r, n) {
    const i = /* @__PURE__ */ new Set([
      ...Object.keys(t.__typedIDs ?? {}),
      ...Object.keys(this.__typedIDs ?? {})
    ]);
    for (const s of i) {
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = mi(n.theme.typedMark, s), f = mi(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Xs(r, u) : l === 0 && aa(r, u), c === 1 ? l === 2 && Xs(r, f) : l === 1 && aa(r, f));
      const d = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || aa(r, mi("annotationId", h));
      for (const h of a)
        d.has(h) || Xs(r, mi("annotationId", h));
    }
    return !1;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTypedIDs(t.typedIDs);
  }
  hasID(t, r) {
    const i = this.getTypedIDs()[t];
    if (!i)
      return !1;
    for (const s of i)
      if (r === s)
        return !0;
    return !1;
  }
  getTypedIDs() {
    const t = this.getLatest();
    return pe(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = ra(r.__typedIDs);
    r.__typedIDs = ra(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && ql(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Jc(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return pe(t) ? li.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Yc(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return pe(t) ? Zi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Xc(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return pe(t) ? ui.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Qc(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return pe(t) ? fi.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!pe(a))
      return;
    pt(t), pt(r);
    let c = a.__typedIDs[t];
    c || (c = [], a.__typedIDs[t] = c);
    for (const l of c)
      if (r === l) {
        n && a.setOnClickFor(t, r, n), i && a.setOnRemoveFor(t, r, i), s && a.setOnMouseEnterFor(t, r, s), o && a.setOnMouseLeaveFor(t, r, o);
        return;
      }
    c.push(r), n && a.setOnClickFor(t, r, n), i && a.setOnRemoveFor(t, r, i), s && a.setOnMouseEnterFor(t, r, s), o && a.setOnMouseLeaveFor(t, r, o);
  }
  deleteID(t, r) {
    const n = this.getWritable();
    if (!pe(n))
      return;
    const i = n.__typedIDs[t];
    if (!i || i.length === 0)
      return;
    for (let o = 0; o < i.length; o++)
      if (r === i[o]) {
        i.splice(o, 1), n.invokeOnRemove(t, r, "removed");
        break;
      }
    n.removeOnClickFor(t, r), n.removeOnRemoveFor(t, r), n.removeOnMouseEnterFor(t, r), n.removeOnMouseLeaveFor(t, r), n.pruneTypedOnClicks(), n.pruneTypedOnRemoves(), n.pruneTypedOnMouseEnters(), n.pruneTypedOnMouseLeaves();
    const s = n.mergeWithAdjacentTypedMarks();
    s.hasNoIDsForEveryType() && s.getParent() !== null && ql(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Ci(this.__typedIDs, this.getTypedOnClicks());
    return this.insertAfter(n, r), n;
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
  extractWithChild(t, r, n) {
    if (!E(r) || n === "html")
      return !1;
    const i = r.anchor, s = r.focus, o = i.getNode(), a = s.getNode(), l = r.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const r = this.getWritable(), n = this.getTypedIDs();
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), li.delete(r.getKey()), Zi.delete(r.getKey()), ui.delete(r.getKey()), fi.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = li.get(this.getKey());
    if (!n)
      return;
    const i = [];
    for (const [o, a] of Object.entries(n))
      for (const [c, l] of Object.entries(a))
        l && i.push([l, o, c]);
    if (i.length === 0)
      return;
    const s = r.read(() => this.getTextContent());
    for (const [o, a, c] of i)
      o(t, a, c, s);
  }
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
    const n = ui.get(this.getKey());
    if (!n)
      return;
    const i = [];
    for (const [o, a] of Object.entries(n))
      for (const [c, l] of Object.entries(a))
        l && i.push([l, o, c]);
    if (i.length === 0)
      return;
    const s = r.read(() => this.getTextContent());
    for (const [o, a, c] of i)
      o(t, a, c, s);
  }
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (r) => {
      this.handleDOMMouseLeave(r, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, r) {
    const n = fi.get(this.getKey());
    if (!n)
      return;
    const i = [];
    for (const [o, a] of Object.entries(n))
      for (const [c, l] of Object.entries(a))
        l && i.push([l, o, c]);
    if (i.length === 0)
      return;
    const s = r.read(() => this.getTextContent());
    for (const [o, a, c] of i)
      o(t, a, c, s);
  }
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ol) {
      const t = li.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      li.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    li.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    pt(t), pt(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = on(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = on(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Ol) {
      this.__typedOnClicks = void 0, this.syncTypedOnClicksToRegistry();
      return;
    }
    const t = {};
    for (const [r, n] of Object.entries(this.__typedOnClicks)) {
      const i = this.__typedIDs[r];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(n))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[r] = o);
    }
    this.__typedOnClicks = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnClicksToRegistry();
  }
  ensureOnRemoveMapMutable() {
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Rl) {
      const t = Zi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Zi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Zi.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    pt(t), pt(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = on(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = on(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Rl) {
      this.__typedOnRemoves = void 0, this.syncTypedOnRemovesToRegistry();
      return;
    }
    const t = {};
    for (const [r, n] of Object.entries(this.__typedOnRemoves)) {
      const i = this.__typedIDs[r];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(n))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[r] = o);
    }
    this.__typedOnRemoves = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnRemovesToRegistry();
  }
  ensureOnMouseEnterMapMutable() {
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === $l) {
      const t = ui.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      ui.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    ui.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    pt(t), pt(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = on(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = on(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === $l) {
      this.__typedOnMouseEnters = void 0, this.syncTypedOnMouseEntersToRegistry();
      return;
    }
    const t = {};
    for (const [r, n] of Object.entries(this.__typedOnMouseEnters)) {
      const i = this.__typedIDs[r];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(n))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[r] = o);
    }
    this.__typedOnMouseEnters = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnMouseEntersToRegistry();
  }
  ensureOnMouseLeaveMapMutable() {
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Il) {
      const t = fi.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      fi.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    fi.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    pt(t), pt(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = on(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = on(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Il) {
      this.__typedOnMouseLeaves = void 0, this.syncTypedOnMouseLeavesToRegistry();
      return;
    }
    const t = {};
    for (const [r, n] of Object.entries(this.__typedOnMouseLeaves)) {
      const i = this.__typedIDs[r];
      if (!i || i.length === 0)
        continue;
      const s = new Set(i), o = {};
      for (const [a, c] of Object.entries(n))
        s.has(a) && (o[a] = c);
      Object.keys(o).length > 0 && (t[r] = o);
    }
    this.__typedOnMouseLeaves = Object.keys(t).length > 0 ? t : void 0, this.syncTypedOnMouseLeavesToRegistry();
  }
  invokeOnRemove(t, r, n) {
    const s = this.getTypedOnRemoves()[t]?.[r];
    if (!s)
      return;
    const o = jt(), a = la(t, r), c = To.get(o);
    if (va.get(o)?.has(a) || c?.get(a)?.has(this.getKey())) {
      this.removeOnRemoveFor(t, r);
      return;
    }
    if (xo.get(o)?.push([t, r]), c) {
      let l = c.get(a);
      l || c.set(a, l = /* @__PURE__ */ new Set()), l.add(this.getKey());
    }
    try {
      s(t, r, n, this.getTextContent());
    } catch (l) {
      queueMicrotask(() => o._onError(l instanceof Error ? l : new Error(String(l))));
    }
    this.removeOnRemoveFor(t, r);
  }
  dispatchRemovedIDs(t, r, n) {
    const i = aS(t, r);
    if (i.length !== 0)
      for (const [s, o] of i)
        this.invokeOnRemove(s, o, n);
  }
  dispatchOnRemoveForTypedIDs(t, r) {
    for (const [n, i] of Object.entries(t))
      if (i)
        for (const s of i)
          this.invokeOnRemove(n, s, r);
  }
  mergeWithAdjacentTypedMarks() {
    if (this.hasNoIDsForEveryType())
      return this;
    let t = this.getPreviousSibling();
    for (; pe(t) && Pp(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; pe(r) && Pp(this.getTypedIDs(), r.getTypedIDs()); )
      this.mergeWithNextTypedMark(r), r = this.getNextSibling();
    return this;
  }
  mergeWithPreviousTypedMark(t) {
    this.mergeOnClicksFrom(t.getTypedOnClicks()), this.mergeOnRemovesFrom(t.getTypedOnRemoves()), this.mergeOnMouseEntersFrom(t.getTypedOnMouseEnters()), this.mergeOnMouseLeavesFrom(t.getTypedOnMouseLeaves());
    const r = t.getChildren();
    r.length > 0 && this.splice(0, 0, r), t.getWritable().__suppressOnRemoveCallbacks = !0, t.remove();
  }
  mergeWithNextTypedMark(t) {
    this.mergeOnClicksFrom(t.getTypedOnClicks()), this.mergeOnRemovesFrom(t.getTypedOnRemoves()), this.mergeOnMouseEntersFrom(t.getTypedOnMouseEnters()), this.mergeOnMouseLeavesFrom(t.getTypedOnMouseLeaves());
    const r = t.getChildren();
    r.length > 0 && this.append(...r), t.getWritable().__suppressOnRemoveCallbacks = !0, t.remove();
  }
  mergeOnClicksFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = cS(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = lS(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = uS(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = fS(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function ra(e = $m) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (pt(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      pt(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Jc(e) {
  if (!e || e === Ol)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    pt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      pt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Yc(e) {
  if (!e || e === Rl)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    pt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      pt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Xc(e) {
  if (!e || e === $l)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    pt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      pt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Qc(e) {
  if (!e || e === Il)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    pt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      pt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function on(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Ap(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function aS(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Pp(e, t) {
  const r = Ap(e), n = Ap(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
  if (i.length !== s.length)
    return !1;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    if (a !== s[o])
      return !1;
    const c = r[a], l = n[a];
    if (!c || !l || c.length !== l.length)
      return !1;
    for (let u = 0; u < c.length; u++)
      if (c[u] !== l[u])
        return !1;
  }
  return !0;
}
function cS(e, t) {
  const r = {}, n = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of n) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (r[i] = c);
  }
  return r;
}
function lS(e, t) {
  const r = {}, n = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of n) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (r[i] = c);
  }
  return r;
}
function uS(e, t) {
  const r = {}, n = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of n) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (r[i] = c);
  }
  return r;
}
function fS(e, t) {
  const r = {}, n = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of n) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const u = s[l] ?? o[l];
      u && (c[l] = u);
    }
    Object.keys(c).length > 0 && (r[i] = c);
  }
  return r;
}
function mi(e, t) {
  return `${e}-${t}`;
}
function Im(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(t)) {
    r.push(mi(e.typedMark, n)), i.length > 1 && r.push(mi(e.typedMarkOverlap, n));
    for (const s of i)
      r.push(mi("annotationId", s));
  }
  return r;
}
function Zc(e) {
  return `external-${e}`;
}
function Ci(e, t, r, n, i) {
  return ft(new ut(e, t, r, n, i));
}
function pe(e) {
  return e instanceof ut;
}
function Wn(e) {
  return e?.type === ut.getType();
}
function qm(e, t, r) {
  let n = 0;
  for (const i of r) {
    const s = X(i);
    !pe(s) || !s.hasID(e, t) || (n++, s.deleteID(e, t), s.hasNoIDsForEveryType() && ql(s));
  }
  return n;
}
function ql(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function dS(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (pe(n))
      return n.getTypedIDs()[t];
    if (v(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (pe(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Si = Ms("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Hn = Ms("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), be = Ms("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), hn = "marker-trailing-space", Lm = 1, pS = "attribute-run";
function el(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class gn extends Hr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new gn(r, n);
  }
  static importJSON(t) {
    return Dm(t.runKind).updateFromJSON(t);
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
    const r = this.getWritable();
    return r.__runKind = t, r;
  }
  getRunKind() {
    return this.getLatest().__runKind;
  }
  createDOM() {
    const t = document.createElement("span");
    t.classList.add(pS);
    const r = el(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = el(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = el(this.__runKind);
      i !== void 0 && r.classList.add(i);
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
      version: Lm
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
function Dm(e) {
  return ft(new gn(e));
}
function Ke(e) {
  return e instanceof gn;
}
const Um = [
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
], Km = [
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
], hS = [
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
  ...Um,
  ...Km
], Fm = 1, gS = ["type", "marker", "content"];
class Ue extends Hr {
  __marker;
  __unknownAttributes;
  constructor(t = "", r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "char";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new Ue(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (hS.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Um.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Km.includes(t);
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
    return Ue.isValidFootnoteMarker(t) || Ue.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => yS(t) ? {
        conversion: mS,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return _n().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM(t) {
    const r = document.createElement("span");
    return wp(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), wp(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Fm
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = _n(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function wp(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function mS(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: _n(t) };
}
function _n(e, t) {
  return ft(new Ue(e, t));
}
function yS(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ue.isValidMarker(t) && e.classList.contains(Ue.getType());
}
function U(e) {
  return e instanceof Ue;
}
function Bm(e) {
  return e?.type === Ue.getType();
}
const Ca = "v", zm = 1, bS = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Pt extends Xe {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Ca, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Pt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return jm().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const r = this.getWritable();
    return r.__number = t, r;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const r = this.getWritable();
    return r.__sid = t, r;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const r = this.getWritable();
    return r.__altnumber = t, r;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const r = this.getWritable();
    return r.__pubnumber = t, r;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Al, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return !i && t.__number !== this.__number && r.setAttribute("data-number", this.__number), i;
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
      version: zm
    };
  }
}
function jm(e, t, r, n, i, s) {
  return ft(new Pt(e, t, r, n, i, s));
}
function Le(e) {
  return e instanceof Pt;
}
function Vm(e) {
  return e?.type === Pt.getType();
}
const kS = /* @__PURE__ */ new Set(["closed"]);
function Ur(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !kS.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Wm(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Hm(e) {
  const t = Object.keys(e).filter((n) => !wC.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Gm(e, t, r, n) {
  return Wm(
    // Presence, not truthiness: an authored `sid=""` is a byte the document holds, and folding it
    // out here deletes it from the displayed run — which a settle then re-derives node state from,
    // so the empty value would be gone from the file. Matches `orderedAttributes`' own `in` test
    // directly above, which exists for exactly this reason.
    {
      ...e !== void 0 && { sid: e },
      ...t !== void 0 && { eid: t },
      ...r
    },
    n
  );
}
function to(e) {
  return e.getChildren().find((t) => M(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function xS(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : to(e) === void 0 && Jm(e) === void 0;
}
function Jm(e) {
  return e.getChildren().find((t) => v(t) && fe(t, be) === "attribute");
}
function vo(e, t) {
  return Fo(e.getNextSibling(), t);
}
const TS = /^[ \u00A0]+$/;
function af(e) {
  if (pn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = ze(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && TS.test(r.slice(t.length));
}
function Fo(e, t) {
  let r, n, i, s;
  return Ke(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), M(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  af(e) && (r = e, e = e.getNextSibling()), v(e) && fe(e, be) === "attribute" && (n = e, e = e.getNextSibling()), M(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && pn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function vS(e) {
  let t = e;
  for (; pe(t); )
    t = t.getChildren()[0];
  return t;
}
function Vt(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!M(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = vS(t[r]);
  if (!(!v(n) || n.getType() !== Xe.getType()))
    return n.getTextContent() === gt(e.getCaller()) || e.getCaller() !== "" && n.isUnmergeable() ? n : void 0;
}
function oc(e) {
  const t = Vt(e);
  return t ? Fo(t.getNextSibling(), "cat") : {};
}
function ei(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || M(t)) && fe(t, be) !== "attribute")
    return t;
}
function Ym(e) {
  const t = ei(e);
  return t ? Fo(t.getNextSibling(), "ca") : {};
}
function Xm(e) {
  const t = ei(e);
  if (!t)
    return;
  const r = Fo(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Qm(e) {
  const t = Xm(e);
  return t ? Fo(t.getNextSibling(), "cp") : {};
}
function Zm(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Le(n))
        return n;
      if (!(M(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && fe(n, be) === "attribute" || U(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ke(n)))
        return;
    }
}
function ac(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ke(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), M(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  af(s) && (t = s, s = s.getNextSibling()), v(s) && fe(s, be) === "attribute" && (r = s, s = s.getNextSibling()), M(s) && s.getMarkerSyntax() === "selfClosing" && pn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const Sa = "c", ey = 1, CS = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class pr extends Hr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Sa, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new pr(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return ty().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const r = this.getWritable();
    return r.__number = t, r;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const r = this.getWritable();
    return r.__sid = t, r;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const r = this.getWritable();
    return r.__altnumber = t, r;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const r = this.getWritable();
    return r.__pubnumber = t, r;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(xa, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && r.setAttribute("data-number", this.__number), !1;
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
      version: ey
    };
  }
}
function ty(e, t, r, n, i) {
  return ft(new pr(e, t, r, n, i));
}
function Re(e) {
  return e instanceof pr;
}
function SS(e) {
  return e?.type === pr.getType();
}
const _S = ["type", "marker", "content"], Ll = "unknown", ry = 1, MS = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Ii extends Hr {
  __tag;
  __marker;
  __unknownAttributes;
  constructor(t = "", r, n, i) {
    super(i), this.__tag = t, this.__marker = r, this.__unknownAttributes = n;
  }
  static getType() {
    return "unknown";
  }
  static clone(t) {
    const { __tag: r, __marker: n, __unknownAttributes: i, __key: s } = t;
    return new Ii(r, n, i, s);
  }
  static importDOM() {
    return {
      [Ll]: (t) => AS(t) ? {
        conversion: ES,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return cf().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTag(t.tag).setMarker(t.marker).setUnknownAttributes(t.unknownAttributes);
  }
  setTag(t) {
    if (this.__tag === t)
      return this;
    const r = this.getWritable();
    return r.__tag = t, r;
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
    return MS.has(this.getTag());
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement(Ll);
    return t.setAttribute("data-tag", this.getTag()), t.setAttribute("data-marker", this.getMarker() ?? ""), t.classList.add(this.isInlineTag() ? "unknown-inline" : "unknown-block"), t.contentEditable = "false", t;
  }
  updateDOM(t, r) {
    if (t.__tag !== this.__tag) {
      r.setAttribute("data-tag", this.__tag);
      const n = this.isInlineTag();
      r.classList.toggle("unknown-inline", n), r.classList.toggle("unknown-block", !n);
    }
    return (t.__marker ?? "") !== (this.__marker ?? "") && r.setAttribute("data-marker", this.__marker ?? ""), !1;
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
      version: ry
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
    const r = t ?? P();
    if (!r)
      return !1;
    if (Bu(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function ES(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: cf(t, r) };
}
function cf(e, t, r) {
  return ft(new Ii(e, t, r));
}
function AS(e) {
  return e?.tagName.toLowerCase() === Ll;
}
function Ge(e) {
  return e instanceof Ii;
}
const Co = "id", ny = 1, PS = [
  "type",
  "marker",
  "code",
  "content"
];
class wr extends Hr {
  __marker = Co;
  __code;
  __unknownAttributes;
  constructor(t = "", r, n) {
    super(n), this.__code = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "book";
  }
  static clone(t) {
    const { __code: r, __unknownAttributes: n, __key: i } = t;
    return new wr(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return iy(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Av(t);
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
    const r = this.getWritable();
    return r.__code = t, r;
  }
  /**
   * Get the book code (ID).
   * @returns the book code (ID).
   */
  getCode() {
    return this.getLatest().__code;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
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
      version: ny
    };
  }
}
function iy(e, t) {
  return ft(new wr(e, t));
}
function Mt(e) {
  return e instanceof wr;
}
function sy(e) {
  return e?.type === wr.getType();
}
const oy = "table", Dl = "immutable-table", ay = 1, wS = ["type", "marker", "content"];
class qi extends Hr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Dl;
  }
  static clone(t) {
    return new qi(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return NS().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setUnknownAttributes(t.unknownAttributes);
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
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
      type: Dl,
      ...t !== void 0 && { unknownAttributes: t },
      version: ay
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function NS(e) {
  return ft(new qi(e));
}
function cy(e) {
  return e instanceof qi;
}
function OS(e) {
  return e?.type === Dl;
}
function Ul(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Mt(t) || Ge(t) || cy(t))
      return !0;
  return !1;
}
const ly = 1;
class Gn extends zu {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Gn(t.__key);
  }
  static importJSON(t) {
    return Er().updateFromJSON(t);
  }
  getMarker() {
    return ln;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: ly
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Er();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Er() {
  return ft(new Gn());
}
function bt(e) {
  return e instanceof Gn;
}
function cc(e) {
  return e?.type === Gn.getType();
}
function uy(e) {
  return bt(e) && Pr(e.getParent());
}
function lf(e) {
  return pe(e) || uy(e);
}
function hr(e) {
  let t = e.getParent();
  for (; t && lf(t); )
    t = t.getParent();
  return t;
}
function lc(e) {
  return U(hr(e));
}
function _a(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? lc(t) : t.getChildren().some((i) => U(i) && i.getMarker() === r) ? !0 : void 0;
}
function RS(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!M(t))
      return;
    const r = _a(t, e);
    r !== void 0 && t.setNested(r);
  });
}
const yi = /* @__PURE__ */ new WeakMap();
function $S(e, t, r) {
  const n = { owners: t, rederive: r };
  return yi.set(e, n), () => {
    yi.get(e) === n && yi.delete(e);
  };
}
function fy(e, t, r) {
  const n = yi.get(e);
  !n?.rederive || !r.has(tc) || n.derivedFor === t || (n.rederive(t), n.derivedFor = t);
}
function Kl(e) {
  return yi.get(e)?.owners;
}
function dy(e) {
  return yi.get(jt())?.owners.has(e.getKey()) ?? !1;
}
function py(e) {
  yi.get(jt())?.owners.add(e.getKey());
}
function Li(e) {
  return v(e) && e.getType() === Xe.getType() && fe(e, be) !== "attribute";
}
function Bo(e) {
  if (!Li(e) || !e.getTextContent().startsWith($))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && pe(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!U(n))
    return 0;
  for (; pe(r); )
    r = r.getLastChild();
  return !M(r) || r.getMarkerSyntax() !== "opening" || _a(r, n) === void 0 ? 0 : 1;
}
function uf(e) {
  let t = e.getNextSibling();
  for (; pe(t); )
    t = t.getFirstChild();
  return t;
}
function zo(e, t) {
  if (e.getMarkerSyntax() !== "opening" || _a(e, t) === void 0)
    return;
  const r = e.getNextSibling(), n = uf(e);
  if (!(r === null || n === null))
    return M(n) ? _a(n, t) === !0 ? "spacer" : void 0 : Li(n) ? n.getTextContent().startsWith($) ? void 0 : n.is(r) ? "prefix" : "spacer" : "spacer";
}
function ff(e) {
  return !Li(uf(e)) || Ul(e) ? !1 : !DC(e.getNextSibling()?.getTextContent() ?? "");
}
function hy(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (M(t) && zo(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function df(e, t) {
  const r = P();
  if (!E(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  if (r.anchor.offset !== 0)
    return !1;
  for (let i = e.getNextSibling(); i; ) {
    if (n.is(i))
      return !0;
    if (!pe(i))
      return !1;
    i = i.getFirstChild();
  }
  return !1;
}
function gy(e) {
  if (!e.isAttached() || dy(e))
    return;
  const t = Kl(jt()) !== void 0;
  e.getChildren().forEach((r) => {
    if (!M(r))
      return;
    const n = zo(r, e);
    if (n === void 0 || df(r, e))
      return;
    if (t && ff(r)) {
      py(e);
      return;
    }
    if (n === "spacer") {
      r.insertAfter($e($));
      return;
    }
    const i = r.getNextSibling();
    v(i) && (IS(i) || LS(i));
  });
}
function IS(e) {
  const t = P();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const { anchor: r } = t;
  if (r.type !== "text" || r.key !== e.getKey() || r.offset === 0)
    return !1;
  const n = e.getTextContent();
  if (n[r.offset] !== $)
    return !1;
  const i = n.slice(0, r.offset);
  return e.setTextContent($ + i + n.slice(r.offset + 1)), e.select(r.offset + 1, r.offset + 1), !0;
}
function qS(e) {
  if (e.getMarkerSyntax() !== "opening" || !U(e.getParent()))
    return !1;
  const t = P();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const r = e.getTextContent(), { anchor: n } = t;
  if (n.key !== e.getKey() || n.offset !== r.length)
    return !1;
  const i = ze(e.getMarker(), e.getNested()), s = r.slice(i.length);
  if (!r.startsWith(i) || !/^[|\s]+$/.test(s))
    return !1;
  const o = uf(e);
  if (!Li(o))
    return !1;
  const a = o.getTextContent();
  return a.startsWith($) ? (e.setTextContent(i), o.setTextContent($ + s + a.slice($.length)), o.select($.length + s.length, $.length + s.length), !0) : !1;
}
function LS(e) {
  e.setTextContent($ + e.getTextContent());
  const t = P();
  if (E(t))
    for (const r of [t.anchor, t.focus])
      r.type === "text" && r.key === e.getKey() && r.set(r.key, r.offset + 1, "text");
}
function DS(e) {
  return e.isAttached() ? e.getChildren().some((t) => M(t) && zo(t, e) !== void 0 && df(t, e)) : !1;
}
function pf(e) {
  return e.isAttached() ? e.getChildren().some((t) => M(t) && zo(t, e) !== void 0 && (df(t, e) || ff(t))) : !1;
}
function hf(e) {
  return e.isAttached() ? e.getChildren().some((t) => M(t) && zo(t, e) !== void 0 && ff(t)) : !1;
}
function US(e) {
  if (DS(e))
    return !0;
  const t = P();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  return (r.is(e) || e.isParentOf(r)) && pf(e);
}
const my = 1, KS = "marker", gf = Ms("isGutterMarker", {
  parse: (e) => e === !0
});
class Ir extends qo {
  __textType;
  __text;
  constructor(t = "", r = "", n) {
    super(n), this.__textType = t, this.__text = r;
  }
  static getType() {
    return "immutable-typed-text";
  }
  static clone(t) {
    const { __textType: r, __text: n, __key: i } = t;
    return new Ir(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => jS(t) ? {
        conversion: FS,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Mn().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTextType(t.textType).setTextContent(t.text);
  }
  setTextType(t) {
    if (this.__textType === t)
      return this;
    const r = this.getWritable();
    return r.__textType = t, r;
  }
  getTextType() {
    return this.getLatest().__textType;
  }
  setTextContent(t) {
    if (this.__text === t)
      return this;
    const r = this.getWritable();
    return r.__text = t, r;
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
  updateDOM(t, r) {
    return t.__text !== this.__text && (r.textContent = this.__text), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Ri(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: my
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function FS(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Mn(t, r) };
}
function Mn(e, t) {
  return ft(new Ir(e, t));
}
function BS(e) {
  return $t(Mn(KS, e), gf, !0);
}
function zS(e) {
  return It(e) && fe(e, gf);
}
function jS(e) {
  return e?.tagName === "span";
}
function It(e) {
  return e instanceof Ir;
}
function yy(e) {
  return e?.type === Ir.getType();
}
const by = "file", ky = "src", VS = "colspan", WS = "category", HS = "alt", GS = "closed", JS = "false";
function YS(e) {
  return e[GS] !== JS;
}
function XS(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === by ? ky : t,
    r
  ]));
}
function QS(e, t) {
  return e === "figure" && t === ky ? by : t;
}
function xy(e, t) {
  if (e === void 0)
    return;
  const r = Number(t);
  if (!Number.isInteger(r) || r < 2)
    return e;
  let n = e.length;
  for (; n > 0; ) {
    const i = e.charCodeAt(n - 1);
    if (i < 48 || i > 57)
      break;
    n -= 1;
  }
  return n === e.length ? e : `${e}-${Number(e.slice(n)) + r - 1}`;
}
function uc(e, t, r) {
  const n = r ?? {}, i = YS(n);
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
        opening: `\\${xy(t, n[VS])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Ur(XS(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [WS]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Ur(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [HS]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Ur(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Ur(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const rr = { wantsRun: !1, valueText: void 0 }, Rn = {};
function tl(e, t) {
  if (t === "va")
    return e;
  const r = vo(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function mf(e) {
  const t = P();
  if (!E(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (A(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function fc(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = P();
  if (!E(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function ZS(e) {
  return Ke(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : M(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && fe(e, be) === "attribute";
}
function e_(e) {
  if (M(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!v(e) || fe(e, be) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!M(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function rl(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Le(t))
      return t;
    if (!ZS(t))
      return;
  }
}
function Np(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Le(t),
    ownerOf: (t) => {
      if (Ke(t))
        return t.getRunKind() === e ? rl(t) : void 0;
      const r = t.getParent();
      return Ke(r) ? r.getRunKind() === e ? rl(r) : void 0 : e_(t) === e ? rl(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Le(t))
        return rr;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? rr : { wantsRun: !0, valueText: $ + r };
    },
    scanPieces: (t) => Le(t) ? vo(tl(t, e), e) : Rn,
    graceSite: (t, r) => Le(t) ? !r.opener && !r.closer ? mf(tl(t, e)) : fc(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Le(t) ? tl(t, e) : void 0
    }
  };
}
const t_ = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => rr,
  scanPieces: () => Rn,
  graceSite: (e) => U(e) && US(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, r_ = {
  kind: "char",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (!v(e) || fe(e, be) !== "attribute")
      return;
    const t = e.getParent();
    return U(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || to(e) === void 0)
      return rr;
    const t = Ur(e.getUnknownAttributes() ?? {}, As(e.getMarker()));
    return t === "" ? rr : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => U(e) ? { value: Jm(e) } : Rn,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const r = to(e);
    if (!r)
      return !1;
    const n = P();
    if (!E(n) || !n.isCollapsed())
      return !1;
    const i = n.anchor.getNode();
    if (i.is(r))
      return !0;
    const s = r.getPreviousSibling();
    return s !== null && i.is(s) && n.anchor.offset === s.getTextContentSize();
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "owner-children",
    glyphs: "none",
    insertRunBefore: (e) => U(e) ? to(e) : void 0
  }
};
function Ty(e) {
  if (M(e))
    return e.getMarker() === "cat";
  if (!v(e) || fe(e, be) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return M(t) && t.getMarker() === "cat";
}
function n_(e) {
  const t = e.getParent();
  if (!L(t))
    return;
  const r = Vt(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Ty(n))
        return;
    }
}
const i_ = {
  kind: "cat",
  ownerPredicate: (e) => L(e),
  ownerOf: (e) => {
    if (Ke(e))
      return e.getRunKind() === "cat" && L(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ke(t) ? t.getRunKind() === "cat" && L(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Ty(e) ? n_(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!L(e) || e.getIsCollapsed() !== !1)
      return rr;
    const t = e.getCategory();
    return t === void 0 ? rr : { wantsRun: !0, valueText: $ + t };
  },
  scanPieces: (e) => L(e) ? oc(e) : Rn,
  graceSite: (e, t) => {
    if (!L(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Vt(e);
      return r !== void 0 && mf(r);
    }
    return fc(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => L(e) ? Vt(e) : void 0
  }
};
function s_(e) {
  return Ke(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : M(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && fe(e, be) === "attribute";
}
function o_(e) {
  if (M(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!v(e) || fe(e, be) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!M(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function a_(e) {
  const t = e.getParent();
  if (!Re(t))
    return;
  const r = ei(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!s_(n))
        return;
    }
}
function Op(e) {
  const t = (r) => Re(r) ? e === "ca" ? ei(r) : Xm(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Re(r),
    ownerOf: (r) => {
      if (Ke(r))
        return r.getRunKind() === e && Re(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ke(n) ? n.getRunKind() === e && Re(n.getParent()) ? n.getParent() ?? void 0 : void 0 : o_(r) === e ? a_(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Re(r))
        return rr;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? rr : { wantsRun: !0, valueText: $ + n };
    },
    scanPieces: (r) => Re(r) ? e === "ca" ? Ym(r) : Qm(r) : Rn,
    graceSite: (r, n) => {
      if (!Re(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && mf(i);
      }
      return fc(n);
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
function vy(e) {
  if (M(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && fe(e, be) === "attribute";
}
function c_(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ie(t)) {
      const r = M(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!vy(t))
      return;
  }
}
const l_ = {
  kind: "milestone",
  ownerPredicate: (e) => Ie(e),
  ownerOf: (e) => {
    const t = Ke(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ke(e.getParent()) ? e.getParent() : vy(e) ? e : void 0;
    if (!t || Ke(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ke(t) ? Ie(r) ? r : void 0 : c_(t);
  },
  expectedPieces: (e) => {
    if (!Ie(e))
      return rr;
    const t = Gm(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Ur(t, Ko(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : $ + r };
  },
  scanPieces: (e) => {
    if (!Ie(e))
      return Rn;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ac(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ie(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = P();
      if (!E(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return fc(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Ie(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, u_ = uc("optbreak", void 0, void 0).opening, f_ = {
  kind: "optbreak",
  ownerPredicate: (e) => Ge(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ge(t) || t.getTag() !== "optbreak"))
      return v(e) || It(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: u_ }),
  scanPieces: (e) => Ge(e) ? { value: e.getFirstChild() ?? void 0 } : Rn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, d_ = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Ge(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => rr,
  scanPieces: () => Rn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, p_ = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => rr,
  scanPieces: () => Rn,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, So = [
  t_,
  r_,
  Np("va"),
  Np("vp"),
  i_,
  Op("ca"),
  Op("cp"),
  l_,
  f_,
  d_,
  p_
], h_ = new Map(So.map((e) => [e.kind, e]));
function En(e) {
  const t = h_.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function fn(e) {
  for (const t of So) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Cy(e) {
  return fn(e) !== void 0;
}
function g_(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const { type: t, id: r, start: n, end: i, undisplayed: s } = e;
  return typeof t == "string" && typeof r == "string" && Number.isInteger(n) && Number.isInteger(i) && (s === void 0 || typeof s == "boolean");
}
const dc = Ms("displayAnnotations", {
  parse: (e) => {
    if (typeof e != "object" || e === null)
      return;
    const { basis: t, annotations: r } = e;
    if (!(typeof t != "string" || !Array.isArray(r)) && r.every(g_))
      return { basis: t, annotations: r };
  }
});
function m_(e, t) {
  const r = new Array(e.length).fill(void 0);
  let n = 0;
  for (; n < e.length && n < t.length && e[n] === t[n]; )
    r[n] = n, n++;
  let i = 0;
  for (; i < e.length - n && i < t.length - n && e[e.length - 1 - i] === t[t.length - 1 - i]; )
    r[e.length - 1 - i] = t.length - 1 - i, i++;
  const s = e.slice(n, e.length - i), o = t.slice(n, t.length - i), a = Array.from({ length: s.length + 1 }, () => new Array(o.length + 1).fill(0));
  for (let u = s.length - 1; u >= 0; u--)
    for (let f = o.length - 1; f >= 0; f--)
      a[u][f] = s[u] === o[f] ? a[u + 1][f + 1] + 1 : Math.max(a[u + 1][f], a[u][f + 1]);
  let c = 0, l = 0;
  for (; c < s.length && l < o.length; )
    s[c] === o[l] ? (r[n + c] = n + l, c++, l++) : a[c + 1][l] >= a[c][l + 1] ? c++ : l++;
  return r;
}
function y_(e, t, r) {
  let n, i;
  for (let s = t; s < r; s++) {
    const o = e[s];
    o !== void 0 && (n ??= o, i = o);
  }
  return n === void 0 || i === void 0 ? void 0 : [n, i + 1];
}
const Sy = 1, b_ = "c", _y = "span";
class gr extends qo {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = b_, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new gr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => My(t) ? {
        conversion: k_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return yf().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setShowMarker(t.showMarker).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const r = this.getWritable();
    return r.__number = t, r;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setShowMarker(t = !1) {
    if (this.__showMarker === t)
      return this;
    const r = this.getWritable();
    return r.__showMarker = t, r;
  }
  getShowMarker() {
    return this.getLatest().__showMarker;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const r = this.getWritable();
    return r.__sid = t, r;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const r = this.getWritable();
    return r.__altnumber = t, r;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const r = this.getWritable();
    return r.__pubnumber = t, r;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement(_y);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(xa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(xa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Mr(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Sy
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
function k_(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: yf(t) };
}
function yf(e, t, r, n, i, s) {
  return ft(new gr(e, t, r, n, i, s));
}
function My(e) {
  return e ? e.classList.contains(xa) && e.tagName.toLowerCase() === _y : !1;
}
function $n(e) {
  return e instanceof gr;
}
function x_(e) {
  return e?.type === gr.getType();
}
const T_ = [
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
  ln,
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
], Ey = 1, v_ = ["type", "marker", "content"];
class Et extends zu {
  __marker;
  __unknownAttributes;
  constructor(t = ln, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new Et(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (T_.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: C_,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return _o().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`), t;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return !i && t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`)), i;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Ey
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = _o(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function C_(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = _o(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function _o(e, t) {
  return ft(new Et(e, t));
}
function ge(e) {
  return e instanceof Et;
}
function bf(e) {
  return e?.type === Et.getType();
}
const Ay = /[ \u00A0]{2,}/g;
function S_(e) {
  return [...e.matchAll(Ay)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function Rp(e) {
  return e.replace(Ay, (t) => t[0]);
}
const __ = "​", gs = __;
var $p;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})($p || ($p = {}));
var Ip;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ip || (Ip = {}));
function M_() {
  return $e(gs);
}
function E_(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(gs, ""));
}
function Di(e) {
  return e.length > 0 && e.includes(gs) && e.replaceAll(gs, "") === "";
}
function kf(e) {
  return v(e) && Di(e.getTextContent());
}
function Py(e) {
  return SS(e) || x_(e);
}
function at(e) {
  return Re(e) || $n(e);
}
function wy(e, t) {
  return e.find((r) => at(r) && r.getNumber() === t.toString());
}
function A_(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && at(r));
}
function qp(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Ny(e) {
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
function jr(e) {
  return St(e, L) ?? void 0;
}
function P_(e) {
  return Mt(e) || Re(e) || U(e) || $n(e) || bt(e) || Ie(e) || ge(e) || L(e) || Le(e) || Ge(e);
}
function Oy(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function w_(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Nr(e) {
  return Ye(e) || Mt(e);
}
function Ye(e) {
  return ge(e) || bt(e);
}
function N_(e) {
  return bf(e) || cc(e);
}
function ms(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function _i(e, t) {
  const r = fe(t, Si), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function O_(e, t) {
  const r = A(e) ? e : e.getParent(), n = A(t) ? t : t.getParent(), i = r && n ? Nv(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function R_(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function An(e) {
  return e?.type === Xe.getType();
}
function $_(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function I_(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Ry(e, t, r) {
  const n = ze(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function q_(e) {
  const t = e[Cn];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function $y(e) {
  return Ps(e) || yy(e) && e.textType === "marker" || An(e) && q_(e) === "attribute" ? "" : An(e) && e.text !== $ ? e.text : Bm(e) ? e.children.map((t) => $y(t)).join("") : "";
}
function L_(e) {
  return e.map((r) => $y(r)).filter((r) => r.length > 0).join(" ").trim();
}
function xf(e) {
  const t = [];
  for (const r of e) {
    if (!U(r))
      continue;
    const n = Iy(r);
    n !== Tt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Iy(e) {
  return M(e) || Or(e) || v(e) && fe(e, be) === "attribute" ? "" : v(e) ? e.getTextContent() : A(e) ? e.getChildren().map((t) => Iy(t)).join("") : "";
}
function Or(e) {
  return It(e) && e.getTextType() === "marker";
}
function Rr(e) {
  return M(e) || Or(e);
}
function Lp(e, t) {
  D_(e, t), e.setMarker(t);
}
function D_(e, t) {
  const r = e.getMarker(), n = ze(r), i = ze(r, !0), s = ot(r), o = ot(r, !0), a = Ue.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Rr(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, f = !u && (l === s || l === o);
    if (!(!u && !f)) {
      if (f && a) {
        c.remove();
        return;
      }
      if (M(c))
        c.setMarker(t);
      else if (Or(c)) {
        const d = l.startsWith(ze("", !0));
        c.setTextContent(u ? ze(t, d) : ot(t, d));
      }
    }
  });
}
function lt(e, t = Pv) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function tt(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function qy(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Tf(e) {
  if (!E(e))
    return Dp(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !A(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return Dp(e) ?? t ?? void 0;
  } catch (n) {
    if (qy(n))
      return t ?? void 0;
    throw n;
  }
}
function U_(e, t) {
  if (!t)
    return (e + 1).toString();
  const r = t.split("-");
  if (r.length === 2)
    return parseInt(r[1]) ? `${parseInt(r[1]) + 1}` : `${parseInt(r[0]) + 1}`;
  const n = RegExp(/^(\d+)([a-yA-Y]{1,3})$/).exec(t);
  if (!n)
    return (parseInt(t) + 1).toString();
  const i = String.fromCharCode(n[2].charCodeAt(0) + 1);
  return `${n[1]}${i}`;
}
function vf(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Ly(e) {
  return !!e && e.includes("-");
}
function Dy(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Dp(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Cf(e) {
  if (!v(e))
    return;
  const t = hr(e);
  if (!L(t) || !Vt(t)?.is(e))
    return;
  const { start: r, end: n } = ko(e.getTextContent(), t.getCaller());
  return r < n ? { start: r, end: n } : void 0;
}
function Vr(e) {
  if (!e)
    return !1;
  if (Lo(e) || M(e) || Or(e) || Ke(e) || e.getType() === Zn || It(e) && e.getTextType() === "attribute")
    return !0;
  const t = hr(e);
  if (Re(t))
    return !0;
  if (v(e) && L(t) && Vt(t)?.is(e))
    return !Cf(e);
  if (v(e)) {
    const r = fe(e, be);
    if (r === hn || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || Di(n))
      return !0;
    if (n === $)
      return !Uy(e);
  }
  return !1;
}
function Uy(e) {
  if (e.getTextContent() !== $ || fe(e, be) !== void 0 || !(pe(e.getParent()) || pe(e.getPreviousSibling()) || pe(e.getNextSibling())) || Bo(e) > 0)
    return !1;
  const r = hr(e);
  return !U(r) || Ky(r, e);
}
function Ky(e, t) {
  return e.getChildren().some((r) => r.is(t) ? !1 : pe(r) ? Ky(r, t) : v(r) ? !M(r) && fe(r, be) === void 0 && r.getTextContent() !== "" && r.getTextContent() !== $ && !Di(r.getTextContent()) : A(r) && !Ke(r));
}
function Mi() {
  const e = $e($);
  return $t(e, be, hn), e.setMode("token"), e;
}
function K_(e) {
  const t = e.getTextContent();
  t.startsWith($) || e.setTextContent($ + t);
}
function mr(e) {
  return v(e) && fe(e, be) === hn;
}
function Fy(e) {
  const t = e.getFirstChild();
  if (!Rr(t) || t === null || mr(t.getNextSibling()))
    return !1;
  const r = P();
  if (!E(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function By(e) {
  if (Re(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!Vr(s)) {
      if (lf(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === Xe.getType()) {
        r ??= [], r.push(s);
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function F_(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = Cf(i), o = s ? s.start : Bo(i), a = s ? s.end : i.getTextContentSize(), c = t ? S_(i.getTextContent().slice(o, a)).map(([u, f]) => [u + o, f + o]) : [];
    a < i.getTextContentSize() && c.push([a, i.getTextContentSize()]);
    const l = i.getTextContentSize() - o - c.reduce((u, [f, d]) => u + d - f, 0);
    r.push({ node: i, start: n, lead: o, collapsed: c, length: l }), n += l;
  }
  return { type: "text", segments: r, length: n };
}
function zy(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function B_(e, t) {
  let r = t;
  for (const [n, i] of zy(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function Up(e, t) {
  let r = t;
  for (const [n, i] of zy(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function Wt(e, t) {
  return By(e).map((r) => r.type === "element" ? r : F_(r.nodes, t));
}
function z_(e, t) {
  return By(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function fs(e, t, r) {
  const n = hr(e);
  if (!n)
    return;
  const i = Wt(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: B_(a, t) };
  }
}
function j_(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, Up(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, Up(r, t - r.start)];
}
function ss(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (uy(e)) {
    const s = e.getParentOrThrow();
    return n ? Vr(n) ? ss(e, t + 1, r) : Fl(s, n, r) : ss(s, e.getIndexWithinParent() + 1, r);
  }
  const i = Wt(e, r);
  return n ? Vr(n) || lf(n) && !jy(i, n) ? ss(e, t + 1, r) : Fl(e, n, r) : { type: "index", index: i.length };
}
function V_(e, t) {
  const r = hr(e);
  if (r && jy(Wt(r, t), e))
    return { parent: r, point: Fl(r, e, t) };
}
function jy(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || ms(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || ms(n.node, t.getKey())));
}
function Fl(e, t, r) {
  const n = Wt(e, r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type === "element") {
      if (s.node.is(t) || ms(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || ms(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: n.length };
}
const Ma = "unmatched", Vy = 2;
function ro(e) {
  return `\\${e}`;
}
class Jr extends Xe {
  __marker;
  constructor(t = "", r) {
    super(ro(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Jr(r, n);
  }
  static importDOM() {
    return {
      [Ma]: (t) => H_(t) ? {
        conversion: W_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Sf().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? ro(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ro(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(yp), r.title = Kp(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Kp(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Ma);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(yp), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Vy
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Wy(e) {
  return e.getTextContent() === ro(e.getMarker());
}
function Kp(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function W_(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Sf(t) };
}
function Sf(e) {
  return ft(new Jr(e));
}
function H_(e) {
  return e?.tagName.toLowerCase() === Ma;
}
function yr(e) {
  return e instanceof Jr;
}
function G_(e) {
  return e?.type === Jr.getType();
}
const J_ = /* @__PURE__ */ new Set([
  Zn,
  Cm,
  Ir.getType(),
  // A chapter in the views without editable markers: the same whole-node treatment as a verse.
  gr.getType()
]);
function _f(e) {
  return v(e) && fe(e, be) === "attribute";
}
function Hy(e) {
  if (!v(e))
    return !1;
  let t = e.getParent();
  for (; pe(t); )
    t = t.getParent();
  return L(t) ? Vt(t)?.is(e) ?? !1 : Re(t) ? ei(t)?.is(e) ?? !1 : !1;
}
function Gy(e) {
  return Gr(e) ? J_.has(e.getType()) : !v(e) || mr(e) ? !1 : M(e) || Le(e) || _f(e) || Hy(e) || // An unmatched closer (`ImmutableUnmatchedNode`) is a `TextNode` subclass, not a decorator, so
  // the decorator-type set above cannot reach it.
  yr(e);
}
function Mf(e) {
  if (!v(e))
    return [0, 0];
  if (yr(e))
    return [0, e.getTextContentSize()];
  const t = e.getTextContent(), r = t.length - t.trimStart().length;
  return r === t.length ? [r, r] : [r, t.trimEnd().length];
}
function Jy(e, t, r) {
  return e.type === t && e.id === r;
}
function Yy(e, t) {
  if (e.basis === t)
    return e.annotations;
  const r = m_(e.basis, t);
  return e.annotations.flatMap((n) => {
    if (n.start === n.end)
      return [n];
    const i = y_(r, n.start, n.end);
    return i ? [{ ...n, start: i[0], end: i[1] }] : [];
  });
}
function Ea(e) {
  return Gr(e) ? Aa(e) : e.getTextContent();
}
function Y_(e) {
  return Gr(e) ? Ui(e) : e.getTextContent();
}
function Ef(e) {
  const t = fe(e, dc);
  return t ? Yy(t, Ea(e)) : [];
}
function X_(e, t) {
  if (t.start === t.end)
    return t;
  let r, n;
  for (let i = t.start; i < t.end; i++) {
    const s = Pf.renderedOffset(e, i);
    if (s === "drawn")
      return { type: t.type, id: t.id, start: 0, end: 0 };
    s !== void 0 && (r = Math.min(r ?? s, s), n = Math.max(n ?? s + 1, s + 1));
  }
  return r === void 0 || n === void 0 ? { ...t, undisplayed: !0 } : { type: t.type, id: t.id, start: r, end: n };
}
function Bn(e) {
  const t = Ef(e);
  return Gr(e) ? t.map((r) => X_(e, r)) : t;
}
function Af(e, t) {
  const r = [...t].sort((n, i) => n.start - i.start || n.end - i.end);
  $t(e, dc, r.length > 0 ? { basis: Ea(e), annotations: r } : void 0);
}
function Fp(e) {
  const t = pc(e).trim();
  if (t)
    return t;
  const r = Ui(e), [n, i] = hc(r);
  return r.slice(n, i);
}
const Xy = {
  holdableText: Fp,
  renderedOffset: (e, t) => {
    const r = Fp(e);
    if (t >= r.length)
      return;
    const n = Ui(e), [i] = hc(n);
    return n.slice(i, i + r.length) === r ? i + t : "drawn";
  }
};
let Pf = Xy;
function Q_(e) {
  Pf = e ?? Xy;
}
function Aa(e) {
  return Pf.holdableText(e);
}
function Z_(e, t, r, n, i) {
  let s = { type: t, id: r, start: n, end: i };
  const o = [];
  for (const a of Ef(e))
    Jy(a, t, r) && a.start <= s.end && s.start <= a.end ? s = {
      ...s,
      start: Math.min(s.start, a.start),
      end: Math.max(s.end, a.end)
    } : o.push(a);
  Af(e, [...o, s]);
}
function Qy(e, t, r) {
  const n = Ef(e), i = n.filter((s) => !Jy(s, t, r));
  return i.length === n.length ? !1 : (Af(e, i), !0);
}
function pc(e) {
  if (e.getType() !== Zn)
    return e.getTextContent();
  const t = e.getParent();
  return L(t) ? t.getCaller() : "";
}
function eM(e) {
  return "getRenderedText" in e && typeof e.getRenderedText == "function";
}
function Ui(e) {
  if (!Gr(e) || !eM(e))
    return "";
  const t = e.getRenderedText();
  return typeof t == "string" ? t : "";
}
function Bp(e) {
  return e === go || /\s/u.test(e);
}
function hc(e) {
  let t = 0;
  for (; t < e.length && Bp(e[t]); )
    t++;
  if (t === e.length)
    return [0, 0];
  let r = e.length;
  for (; r > t && Bp(e[r - 1]); )
    r--;
  return [t, r];
}
function Bl(e, t) {
  if (t.undisplayed)
    return Aa(e).slice(t.start, t.end);
  if (t.start !== t.end)
    return Y_(e).slice(t.start, t.end);
  const r = Aa(e);
  if (r)
    return r;
  const n = Ui(e), [i, s] = hc(n);
  return n.slice(i, s);
}
function tM(e, t, r) {
  return Bn(e).filter((n) => n.type === t && (n.undisplayed || n.start === n.end || n.start <= r && r <= n.end)).map((n) => n.id);
}
function rM(e) {
  const t = fe(e, dc);
  !t || t.basis === Ea(e) || Af(e, Yy(t, Ea(e)));
}
const Pa = /* @__PURE__ */ new WeakMap();
function wf(e, t) {
  return JSON.stringify([e, t]);
}
function nM(e, t, r) {
  const n = jt();
  let i = Pa.get(n);
  i || (i = /* @__PURE__ */ new Map(), Pa.set(n, i));
  const s = wf(e, t), o = i.get(s), a = Object.fromEntries(Object.entries(r).filter(([, c]) => c !== void 0));
  i.set(s, { ...o, ...a });
}
function wa(e, t, r) {
  return Pa.get(e)?.get(wf(t, r));
}
function Zy(e, t, r) {
  Pa.get(e)?.delete(wf(t, r));
}
function iM(e, t = []) {
  const n = [
    Xe,
    $r,
    Pt,
    Ir,
    gr,
    ...t
  ].filter((i) => e.hasNodes([i])).map((i) => e.registerNodeTransform(i, rM));
  return () => n.forEach((i) => i());
}
function sM(e) {
  return Le(e) || Ie(e) || Ke(e) || Ke(e.getParent()) || Hy(e) || yr(e);
}
function Nf(e) {
  return v(e) ? e.getTextContentSize() : 1;
}
function Of(e) {
  let t = e;
  for (; A(t); ) {
    const r = t.getFirstChild();
    if (!r)
      return t;
    t = r;
  }
  return t;
}
function eb(e) {
  let t = e;
  for (; A(t); ) {
    const r = t.getLastChild();
    if (!r)
      return t;
    t = r;
  }
  return t;
}
function zp(e) {
  const t = e.getNode();
  if (!A(t))
    return { leaf: t, offset: v(t) ? e.offset : Math.min(e.offset, 1) };
  const r = t.getChildAtIndex(e.offset);
  if (r)
    return { leaf: Of(r), offset: 0 };
  const n = t.getLastChild();
  if (!n)
    return { leaf: t, offset: 0 };
  const i = eb(n);
  return { leaf: i, offset: Nf(i) };
}
function ua(e, t) {
  return e.leaf.is(t.leaf) ? e.offset - t.offset : e.leaf.isBefore(t.leaf) ? -1 : 1;
}
function tb(e, t, r) {
  const n = Nf(e);
  let i = n;
  t.leaf.is(e) ? i = t.offset : t.leaf.isBefore(e) && (i = 0);
  let s = 0;
  return r.leaf.is(e) ? s = r.offset : e.isBefore(r.leaf) && (s = n), [i, Math.max(i, s)];
}
function oM(e) {
  for (let t = e; t; t = t.getParent()) {
    const r = t.getNextSibling();
    if (r)
      return Of(r);
  }
}
function aM(e, t, r) {
  const n = Of(e), i = eb(e);
  if (ua(t, { leaf: n, offset: 0 }) > 0 || ua(r, { leaf: i, offset: Nf(i) }) < 0)
    return !1;
  if (mr(i)) {
    const s = oM(e);
    if (!s || ua(r, { leaf: s, offset: 0 }) <= 0)
      return !1;
  }
  return !0;
}
function cM(e, t, r, n) {
  if (!Gy(e))
    return;
  const [i, s] = tb(e, t, r);
  if (s <= i)
    return;
  if (!v(e)) {
    const l = n?.get(e.getKey());
    return l ? [l.start, l.end] : [0, Aa(e).length];
  }
  const [o, a] = Mf(e), c = [Math.max(i, o), Math.min(s, a)];
  return c[1] > c[0] ? c : void 0;
}
function Rf(e, t, r, n, i, s, o, a = {}) {
  if (e.isCollapsed())
    return;
  const c = e.getNodes(), l = e.isBackward(), [u, f] = l ? [e.focus, e.anchor] : [e.anchor, e.focus], d = zp(u), p = zp(f);
  if (ua(d, p) >= 0)
    return;
  let h = !1;
  const m = (b) => {
    const C = cM(b, d, p, a.decoratorHolds);
    C && (cn(ca), Z_(b, t, r, C[0], C[1]), h = !0);
  };
  let g, k;
  for (const b of c) {
    if (A(k) && k.isParentOf(b))
      continue;
    if (M(b) || mr(b) || _f(b) || sM(b)) {
      m(b), g = b.getParent(), k = void 0;
      continue;
    }
    let C = null;
    if (v(b)) {
      const [R, w] = tb(b, d, p), F = Math.max(R, Bo(b));
      if (F >= w)
        continue;
      cn(ca), C = b.splitText(F, w)[F > 0 ? 1 : 0];
    } else {
      if (pe(b))
        continue;
      if (A(b) && b.isInline()) {
        if (!aM(b, d, p))
          continue;
        C = b;
      }
    }
    if (C !== null) {
      if (C && C.is(g))
        continue;
      cn(ca);
      const R = C.getParent();
      (R == null || !R.is(g)) && (k = void 0), g = R, k === void 0 && (k = Ci(), k.addID(t, r, n, i, s, o), C.insertBefore(k)), k.append(C);
    } else
      m(b), g = void 0, k = void 0;
  }
  h && nM(t, r, { onClick: n, onRemove: i, onMouseEnter: s, onMouseLeave: o }), t === Ot && A(k) && (l ? k.selectStart() : k.selectEnd());
}
const rb = "table:row", jp = "immutable-table-row", nb = 1, zl = "tr", lM = ["type", "marker", "content"];
class Ki extends Hr {
  __marker;
  __unknownAttributes;
  constructor(t = zl, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return jp;
  }
  static clone(t) {
    return new Ki(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return uM().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? zl).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
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
      type: jp,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: nb
    };
  }
}
function uM(e, t) {
  return ft(new Ki(e, t));
}
function ib(e) {
  return e instanceof Ki;
}
const sb = "table:cell", Vp = "immutable-table-cell", ob = 1, jl = "tc1", fM = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function dM(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Fi extends Hr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = jl, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Vp;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Fi(r, n, i, s, o);
  }
  static importJSON(t) {
    return pM().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? jl).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setAlign(t) {
    if (this.__align === t)
      return this;
    const r = this.getWritable();
    return r.__align = t, r;
  }
  getAlign() {
    return this.getLatest().__align;
  }
  setColspan(t) {
    if (this.__colspan === t)
      return this;
    const r = this.getWritable();
    return r.__colspan = t, r;
  }
  getColspan() {
    return this.getLatest().__colspan;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = this.__marker.startsWith("th"), r = document.createElement(t ? "th" : "td");
    r.setAttribute("data-marker", this.__marker), r.classList.add("table-cell", `usfm_${this.__marker}`);
    const n = dM(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Vp,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: ob
    };
  }
}
function pM(e, t, r, n) {
  return ft(new Fi(e, t, r, n));
}
function hM(e) {
  return e instanceof Fi;
}
const Vl = /* @__PURE__ */ new WeakMap();
function Wp(e, t) {
  t ? Vl.set(e, t) : Vl.delete(e);
}
function $f(e) {
  return Vl.get(e);
}
function gc(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function dn(e, t) {
  const r = gc(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Mo(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function gM(e) {
  return e.getChildren().some((t) => M(t) && t.getMarkerSyntax() === "closing");
}
function mM(e) {
  return Mo(e) ? void 0 : { closed: "false" };
}
function yM(e, t, r, n) {
  const i = t.getMarker(), s = lc(t), o = gM(t);
  if (n) {
    e.append(_t(i, "opening", s));
    const [a] = r;
    Li(a) && !a.getTextContent().startsWith($) && a.setTextContent($ + a.getTextContent());
  }
  e.append(...r), o && e.append(_t(i, "closing", s));
}
function Ei(e) {
  return St(e, U) ?? void 0;
}
function If(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function Wl(e) {
  const t = ab(e);
  return e.getChildren().every((r) => M(r) || t && fe(r, be) === "attribute" || v(r) && r.getTextContent().replaceAll($, "") === "");
}
function ab(e) {
  return Mo(e);
}
function bM(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Ur(r, As(e.getMarker())) : "";
  n !== "" && t.insertAfter($e(n)), e.remove();
}
function kM(e, t) {
  if (Mo(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(_t(e.getMarker(), "closing", lc(e)));
}
function xM(e, t) {
  return U(e) && !Mo(e) && !Mo(t);
}
function TM(e, t, r) {
  Wl(e) && e.getChildren().forEach((i) => {
    M(i) || i.remove();
  });
  const [n] = t;
  r && Li(n) && !n.getTextContent().startsWith($) && n.setTextContent($ + n.getTextContent()), e.append(...t);
}
function vM(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = ab(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), f = M(l) && l.getMarkerSyntax() === "closing", d = s && fe(l, be) === "attribute";
    !f && !d && o.push(l), l = u;
  }
  const a = xM(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      TM(e, o, n);
    else {
      const l = _n(t.getMarker(), mM(t));
      yM(l, t, o, n), e.insertAfter(l), Wl(l) ? l.remove() : c = l;
    }
  i && !a && kM(t, n), Wl(t) && bM(t, c);
}
function ys(e, t) {
  let r = e.getParent();
  for (; U(r); )
    vM(e, r, t), r = e.getParent();
}
function qf(e) {
  if (v(e) && !M(e)) {
    const t = e.getTextContent().startsWith($) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (A(e)) {
    const t = e.getChildren().find((r) => !M(r));
    if (t) {
      qf(t);
      return;
    }
    e.selectEnd();
  }
}
function CM(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Hl(e) {
  return !!(e.opener || e.value || e.closer);
}
function Hp(e) {
  return /^\s/.test(e);
}
function Lf(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Hp(t) || !Hp(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function mc(e, t, r) {
  return r.wantsRun ? Lf(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : CM(t);
}
function SM(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Lf(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function cb(e, t) {
  return !Hl(e.scanPieces(t));
}
function jo(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!mc(e, n, r))
    return !1;
  const i = P();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || ms(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function _M(e, t, r, n) {
  return !r.wantsRun || Hl(n) || $f(jt()) === "remote" ? !1 : jt().getEditorState().read(() => {
    const i = X(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Hl(e.scanPieces(i));
  });
}
function MM(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Gp(e) {
  const t = $e(e);
  return $t(t, be, "attribute"), t;
}
function EM(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Dm(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function AM(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const d = c?.(t);
    if (!d || n.valueText === void 0)
      return;
    v(r.value) ? r.value.setTextContent(n.valueText) : d.insertBefore(Gp(n.valueText));
    return;
  }
  const l = EM(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const d = _t(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(d) : l.append(d), d;
  })();
  let f = r.value;
  n.valueText === void 0 ? (f?.remove(), f = void 0) : v(f) ? Lf(f.getTextContent(), n.valueText) && f.setTextContent(n.valueText) : (f = Gp(n.valueText), u.insertAfter(f)), a !== "none" && !r.closer && (f ?? u).insertAfter(_t(a === "selfClosing" ? "" : o(t), a));
}
function Eo(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (mc(e, i, n) && !dy(t)) {
    if (_M(e, t, n, i)) {
      py(t);
      return;
    }
    if (!jo(e, t)) {
      if (!n.wantsRun) {
        MM(i);
        return;
      }
      AM(e, t, i, n);
    }
  }
}
function PM(e, t, r) {
  Eo(e, t), t.isAttached() && jo(e, t) && r.add(t.getKey());
}
function lb(e) {
  if (!v(e))
    return !1;
  if (M(e) || Le(e) || yr(e))
    return !0;
  const t = fe(e, be);
  return t === "attribute" || t === hn;
}
function Df(e, t) {
  return M(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && pn(e) && U(e.getParent())) : !1;
}
function wM() {
  const e = P();
  return E(e) ? Df(e.focus.getNode(), e.focus.offset) : !1;
}
function ub(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && lb(t) ? t : void 0;
}
function NM(e) {
  const t = ub(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function OM(e) {
  const t = ub(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Jp(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Yp(e, t) {
  e.set(t.key, t.offset, t.type);
}
function RM(e, t) {
  let r = OM(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!v(n))
      return;
    if (!lb(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Xp(e, t) {
  const r = RM(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function fb(e) {
  if (e.isCollapsed()) {
    const a = NM(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Jp(r), Jp(n)], s = Xp(r, "next"), o = Xp(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Yp(r, i[0]), Yp(n, i[1]), !1) : !0;
}
const db = Ms("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), Na = "verse-block", pb = 1, $M = "verse-block";
class ws extends Hr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Na;
  }
  static clone(t) {
    return new ws(t.__number, t.__key);
  }
  static importJSON(t) {
    return IM().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setNumber(t.number);
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const r = this.getWritable();
    return r.__number = t, r;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  /** The first and last verse numbers this block covers. A bridge covers more than one. */
  getRange() {
    return Dy(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add($M), Qp(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Qp(r, this.__number), !1;
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
      type: Na,
      number: this.getNumber(),
      version: pb
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Qp(e, t) {
  const { start: r, end: n } = Dy(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Zp(e, "data-verse-start", i ? r : NaN), Zp(e, "data-verse-end", i ? n : NaN);
}
function Zp(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function IM(e) {
  return ft(new ws(e));
}
function Ai(e) {
  return e instanceof ws;
}
function qM(e) {
  return e?.type === Na;
}
const LM = [
  wr,
  gr,
  pr,
  Pt,
  Ue,
  Qe,
  zr,
  $r,
  Ii,
  Ir,
  Jr,
  Et,
  Gn,
  qi,
  Ki,
  Fi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  gn,
  {
    replace: zu,
    with: () => Er(),
    withKlass: Gn
  }
], Oa = {
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
}, DM = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function UM(e) {
  if (!e)
    return un;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: un(r)?.category ?? T.Uncategorized,
      type: DM[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: un(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function eh(e, t, r) {
  const n = {
    type: Tn,
    version: xn,
    content: e
  }, i = t.serializeEditorState(n, r);
  return cc(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const hb = "v", gb = 1, KM = "verse-selected";
class qt extends qo {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = hb, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return Cm;
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new qt(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => zM(t) ? {
        conversion: BM,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Uf().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker).setNumber(t.number).setShowMarker(t.showMarker).setSid(t.sid).setAltnumber(t.altnumber).setPubnumber(t.pubnumber).setUnknownAttributes(t.unknownAttributes);
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setNumber(t) {
    if (this.__number === t)
      return this;
    const r = this.getWritable();
    return r.__number = t, r;
  }
  getNumber() {
    return this.getLatest().__number;
  }
  setShowMarker(t = !1) {
    if (this.__showMarker === t)
      return this;
    const r = this.getWritable();
    return r.__showMarker = t, r;
  }
  getShowMarker() {
    return this.getLatest().__showMarker;
  }
  setSid(t) {
    if (this.__sid === t)
      return this;
    const r = this.getWritable();
    return r.__sid = t, r;
  }
  getSid() {
    return this.getLatest().__sid;
  }
  setAltnumber(t) {
    if (this.__altnumber === t)
      return this;
    const r = this.getWritable();
    return r.__altnumber = t, r;
  }
  getAltnumber() {
    return this.getLatest().__altnumber;
  }
  setPubnumber(t) {
    if (this.__pubnumber === t)
      return this;
    const r = this.getWritable();
    return r.__pubnumber = t, r;
  }
  getPubnumber() {
    return this.getLatest().__pubnumber;
  }
  setUnknownAttributes(t) {
    const r = this.getWritable();
    return r.__unknownAttributes = t, r;
  }
  getUnknownAttributes() {
    return this.getLatest().__unknownAttributes;
  }
  createDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Al, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Al, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    return _(FM, { nodeKey: this.getKey(), text: this.getRenderedText() });
  }
  /** The text this verse shows on screen: its whole `\v N` glyph, or only its number. */
  getRenderedText() {
    return this.getShowMarker() ? Mr(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      go + this.getNumber() + go
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
      version: gb
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (qy(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function FM({ nodeKey: e, text: t }) {
  const [r] = Zv(e);
  return _("span", { className: r ? KM : void 0, children: t });
}
function BM(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Uf(t) };
}
function Uf(e, t, r, n, i, s) {
  return ft(new qt(e, t, r, n, i, s));
}
function zM(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === hb;
}
function mn(e) {
  return e instanceof qt;
}
function jM(e) {
  return e?.type === qt.getType();
}
function Ne(e) {
  return Le(e) || mn(e);
}
function mb(e) {
  return Vm(e) || jM(e);
}
function VM(e) {
  return WM(e).find((t) => ge(t));
}
function WM(e) {
  return e.some(Ai) ? e.flatMap((t) => Ai(t) ? t.getChildren() : t) : e;
}
function yc(e) {
  return A(e) ? Ai(e) ? e.getChildren().flatMap(yc) : e.getChildren() : [];
}
function HM(e, t) {
  return yc(e).find((i) => Ne(i) && vf(t, i.getNumber()));
}
function GM(e, t) {
  return t === 0 ? VM(e) : e.map((r) => HM(r, t)).filter((r) => r)[0];
}
function Ra(e) {
  return yc(e).find((r) => Ne(r));
}
function yb(e, t) {
  if (!A(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (Ne(i))
      return i;
  }
}
function JM(e) {
  const t = e.getParent();
  if (t && A(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (Ne(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !at(r); ) {
    const n = Ra(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Gl(e) {
  return yc(e).findLast((t) => Ne(t));
}
function YM(e) {
  if (!Le(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function XM(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && A(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function QM(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return XM(t, e, r);
  if (v(e)) {
    const n = YM(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function th(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function ZM(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!E(t))
    return th(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return QM(e, t) ? { verseNum: n } : th(e);
}
function eE(e) {
  return P_(e) || mn(e);
}
function Kf(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith($) && e.setTextContent(`${t} `);
  }
}
function bb(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Jl(e, t) {
  return e.getEditorState().read(() => !X(t));
}
function tE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Ff(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && A(i) && A(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && A(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (Ne(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = rh(i);
      for (; s && !at(s); ) {
        const o = Ra(s);
        if (o) {
          n = o;
          break;
        }
        s = rh(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Ra(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && at(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function rE(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Ff(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && A(i) && (n = yb(i, r.getIndexWithinParent())), !n && i) {
      let o = nh(i);
      for (; o && !at(o); ) {
        const a = Gl(o);
        if (a) {
          n = a;
          break;
        }
        o = nh(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !at(s); ) {
      const o = Gl(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function rh(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function nh(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Ff(e, t) {
  if (A(e) && E(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && Ne(n))
      return n;
    const i = yb(e, t.anchor.offset);
    if (i)
      return i;
    const s = Ra(e);
    if (s)
      return s;
  }
  return Bf(e);
}
function Bf(e) {
  if (!e || at(e))
    return;
  if (Ne(e))
    return e;
  let t = qp(e);
  for (; t; ) {
    if (at(t))
      return;
    if (Ne(t))
      return t;
    const r = Gl(t);
    if (r)
      return r;
    t = qp(t);
  }
}
const nE = ["style"], iE = ["style", "code"], $a = ["style", "cid"], sE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], oE = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], aE = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], cE = ["style", "caller", "category", "contents"], lE = ["tag", "marker", "contents"], uE = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Ao = `
`;
function fE(e, t) {
  const r = X(e);
  if (!lr(r))
    return;
  const n = kb(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function kb(e, t = "delta-doc") {
  if (!e)
    return;
  const r = gm();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let f = i.length - 1; f >= 0; f--)
      if (bs(i[f], c)) {
        const d = i[f];
        if (i.splice(f, 1), n += 1, a && d.getKey() === a.getKey())
          return n - 1;
      }
    for (let f = s.length - 1; f >= 0; f--)
      bs(s[f].node, c) && s.splice(f, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Pn(l) || lr(l))
        return n;
      Nr(l) && (a = l);
    }
    if (Nr(l) && (i.includes(l) || i.push(l)), xb(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += jf(l, t);
  }
  if (a)
    return n;
}
function ih(e, t, r = "delta-doc") {
  if (e.length < 2 || !hE(e[0]) || !pE(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => dE(n, r)?.getKey());
}
function dE(e, t = "delta-doc") {
  const r = gm();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (bs(i[u], o)) {
        const f = i[u];
        if (i.splice(u, 1), n === e)
          return f;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      bs(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Nr(a) && (i.includes(a) || i.push(a)), xb(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = jf(a, t);
    if (Pn(a) && l > 0 && e >= n && e < n + l || lr(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function bs(e, t) {
  return e ? t ? !ms(t.node, e.getKey()) : !0 : !1;
}
function Pn(e) {
  return v(e) && !lr(e);
}
function lr(e) {
  return at(e) || Ne(e) || Ie(e) || L(e) || Ge(e) || yr(e);
}
function Un(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function pE(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && uE.includes(t);
}
function hE(e) {
  return e.retain != null && typeof e.retain == "number";
}
function xb(e, t) {
  return L(e) || Ge(e) ? !0 : t === "apply" && A(e) && lr(e);
}
function Tb(e) {
  const t = e.getParent();
  return Rr(e) && ge(t) && t.getFirstChild() === e;
}
function Yl(e) {
  const t = e.getParent();
  return t !== null && St(t, Ke) !== null;
}
function gE(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === Tt && t.getChildrenSize() === 1;
}
function zf(e) {
  const t = hr(e);
  if (!(!L(t) || !Vt(t)?.is(e)))
    return of(e.getTextContent(), t.getCaller());
}
function mE(e) {
  return !Cy(e) && // A caller's typed bytes are respelled as the content they settle into, never sent raw.
  zf(e) === void 0 && jf(e, "delta-doc") === e.getTextContentSize();
}
function jf(e, t) {
  if (lr(e))
    return 1;
  if (v(e)) {
    const r = e.getTextContent();
    if (t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (kf(e) || Tb(e) || fe(e, be) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    fe(e, be) === "attribute" || Yl(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, and the empty-char placeholder. The
    // editable-mode note caller counts only its content bytes, below.
    r.startsWith(Qu) || gE(e)))
      return 0;
    const n = t === "delta-doc" ? zf(e) : void 0;
    return n !== void 0 ? n.length : e.getTextContentSize();
  }
  return 0;
}
function Xl(e, t) {
  const r = { insert: e.__text }, n = fe(e, Hn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = vb(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function sh(e) {
  const t = new is();
  return e.isEmpty() || e.read(() => {
    const r = _e();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && bt(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = yE();
    for (const s of i)
      t.push(s);
  }), t;
}
function Vf(e, t) {
  const r = [], n = Es(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...oh(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...oh(c, n.length, n, i, s, o, a));
  return r;
}
function yE() {
  return Vf();
}
function oh(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return bE(e, a, n), kE(e, a, i, s, o), xE(e, t, r, i, o, s, a), at(e) && a.push(SE(e)), Ne(e) && a.push(ME(e)), Ie(e) && a.push(EE(e)), yr(e) && a.push(AE(e)), vE(e, a, s), TE(e, a, s), OE(c, s), a;
}
function bE(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Mt(n) ? t.push(CE(n)) : ge(n) ? t.push(_E(n)) : bt(n) && t.push({ insert: Ao });
  }
  Nr(e) && (r.includes(e) || r.push(e));
}
function kE(e, t, r, n, i) {
  if (!v(e) || Le(e) || yr(e))
    return;
  const s = e.getParent();
  if (L(s) && s.getFirstChild() === e)
    return;
  const o = jr(e) !== void 0;
  if (M(e) && (o || Tb(e) || Yl(e) || Cy(e)) || fe(e, be) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Di(a))
    return;
  const c = zf(e);
  if (c !== void 0) {
    if (!c)
      return;
    a = c;
  }
  const l = e.getPreviousSibling(), u = U(s) ? s : void 0, f = u?.getFirstChild();
  o && u && M(f) && l === f && a.startsWith($) && (a = a.slice(1));
  const d = a.startsWith(Qu) || fe(e, be) === "attribute" || Yl(e), p = !!u && a === Tt && u.getChildrenSize() === 1, h = bc(e, n), m = h ? r.filter((b) => h.children.includes(b)) : r, g = Xl(e, m);
  if (g.insert = a, h) {
    if (!a || a === $ || d)
      return;
    h.contentsOps?.push(g);
  } else
    p || d || t.push(g);
  const k = a !== "" && !p && !(d && u);
  if (r.length > 0 && k)
    for (const b of r)
      i.add(b);
}
function xE(e, t, r, n, i, s, o) {
  U(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (bs(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = wE(c), u = bc(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function TE(e, t, r) {
  if (!L(e))
    return;
  const n = PE(e), i = bc(e, r), s = {
    node: e,
    children: Es(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function vE(e, t, r) {
  if (!Ge(e))
    return;
  const n = NE(e), i = bc(e, r), s = {
    node: e,
    children: Es(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function ti(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function CE(e) {
  const t = { style: Co, code: e.__code };
  return ti(t, e), { insert: Ao, attributes: { book: t } };
}
function SE(e) {
  const t = { style: Sa, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), ti(t, e), { insert: { chapter: t } };
}
function _E(e) {
  const t = { style: e.__marker };
  return ti(t, e), { insert: Ao, attributes: { para: t } };
}
function ME(e) {
  const t = { style: Ca, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), ti(t, e), { insert: { verse: t } };
}
function EE(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), ti(t, e), { insert: { milestone: t } };
}
function AE(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function PE(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), ti(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = fe(e, Hn);
  return n && (r.attributes = { segment: n }), r;
}
function wE(e) {
  const t = { insert: "" }, r = vb([e]);
  return r && (t.attributes = { char: r }), t;
}
function NE(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), ti(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function bc(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function OE(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    bs(t[r].node, e) && t.splice(r, 1);
}
function vb(e) {
  if (e.length === 0)
    return;
  const t = e.map(RE);
  return t.length === 1 ? t[0] : t;
}
function RE(e) {
  const t = { style: e.__marker }, r = fe(e, Si);
  return r && (t.cid = r), ti(t, e), t;
}
const Cb = 1;
class cr extends qo {
  __caller;
  __previewText;
  __onClick;
  constructor(t = mo, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return Zn;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new cr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => IE(t) ? {
        conversion: $E,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Wf().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setCaller(t.caller).setPreviewText(t.previewText).setOnClick(t.onClick);
  }
  setCaller(t) {
    if (this.__caller === t)
      return this;
    const r = this.getWritable();
    return r.__caller = t, r;
  }
  getCaller() {
    return this.getLatest().__caller;
  }
  setPreviewText(t) {
    if (this.__previewText === t)
      return this;
    const r = this.getWritable();
    return r.__previewText = t, r;
  }
  getPreviewText() {
    return this.getLatest().__previewText;
  }
  setOnClick(t) {
    if (this.__onClick === t)
      return this;
    const r = this.getWritable();
    return r.__onClick = t, r;
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
    const { element: r } = super.exportDOM(t);
    return r && Ri(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => qE(t, n), (l) => LE(t, n, s, l), () => DE(t, n), () => UE(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.getRenderedText() });
  }
  /** The text this caller shows on screen; empty when CSS generates the caller instead. */
  getRenderedText() {
    const t = this.getLatest(), r = t.getParent(), n = L(r) && r.getIsCollapsed();
    return t.__caller === mo && n ? "" : t.__caller === vm && n ? "*" : t.__caller;
  }
  exportJSON() {
    return {
      type: this.getType(),
      caller: this.getCaller(),
      previewText: this.getPreviewText(),
      onClick: this.getOnClick(),
      version: Cb
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function $E(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Wf(t, r) };
}
function Wf(e, t, r) {
  return ft(new cr(e, t, r));
}
function IE(e) {
  return e ? e.classList.contains(cr.getType()) : !1;
}
function Lt(e) {
  return e instanceof cr;
}
function qE(e, t) {
  return e.getEditorState().read(() => {
    const r = X(t);
    if (!L(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function LE(e, t, r, n) {
  e.update(() => {
    const i = X(t);
    if (!L(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = X(r);
    if (!Lt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function DE(e, t) {
  return e.getEditorState().read(() => {
    const r = X(t);
    if (!L(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Vf(r);
  });
}
function UE(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of Es())
      if (L(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const KE = [
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
], FE = ["†"], Hf = "formatted", Sb = "unformatted", _b = "paragraph-structure", Gf = "standard", Mb = "block-verse", BE = {
  [Hf]: "Formatted",
  [Sb]: "Unformatted",
  [_b]: "Paragraph Structure",
  [Gf]: "Standard",
  [Mb]: "Block Verse"
};
function Ns(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Jf, Yf;
function zE(e) {
  const t = Xf(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Jf = e, Yf = t;
}
zE(Hf);
const FI = () => Jf, kc = () => Yf;
function Xf(e) {
  let t;
  switch (e ?? Jf) {
    case Hf:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Sb:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case _b:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Gf:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Mb:
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
function BI(e) {
  if (!e)
    return;
  const t = ah(e);
  return Object.keys(BE).find((r) => an(ah(Xf(r)), t));
}
const jE = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function ah(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...jE, ...t };
}
function Dt(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function VE(e) {
  if (e)
    return Po(e) ? qt : e.markerMode === "editable" ? Pt : qt;
}
function Po(e) {
  return e?.verseLayout === "block";
}
function WE(e) {
  const t = [], r = e ?? Yf;
  return r && (t.push(`${_C}${r.markerMode}`), r.hasSpacing && t.push(CC), r.isFormattedFont && t.push(SC)), t;
}
const HE = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Ia(e) {
  return HE.exec(e)?.[1] ?? e;
}
function no(e, t) {
  const r = e.jsonPath.slice(Ia(e.jsonPath).length);
  return { ...e, jsonPath: `${vt(t)}${r}` };
}
function Eb(e) {
  const t = [];
  let r = 0;
  for (const c of _e().getChildren())
    if (!Vr(c))
      if (Ai(c)) {
        const l = r;
        c.getChildren().filter((u) => !Vr(u)).forEach((u, f) => t.push({ node: u, blockPrefix: [l, f], blockBase: 0 })), r += 1;
      } else bt(c) ? (t.push({ node: c, blockPrefix: [], blockBase: r }), r += Wt(c, e).length) : (t.push({ node: c, blockPrefix: [r], blockBase: 0 }), r += 1);
  const n = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = A(c.node) ? Wt(c.node, e).length : 0, u = fe(c.node, db), f = bt(c.node), d = u === void 0 || u !== a;
    d && (n.length > 0 && (n[n.length - 1].isSourceEnd = !0), s = i, o = 0, f || (i += 1)), n.push({
      ...c,
      count: l,
      usjPrefix: f ? [] : [s],
      usjBase: f ? s + o : o,
      isSourceStart: d,
      isSourceEnd: !1
    }), f && (i += l), o += l, a = u;
  }
  return n.length > 0 && (n[n.length - 1].isSourceEnd = !0), n;
}
function Ab(e, t) {
  return e.length >= t.length && t.every((r, n) => e[n] === r);
}
function Pb(e, t, r, n = !0) {
  const i = e.jsonPath.slice(Ia(e.jsonPath).length);
  let s = dr(Ia(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!Ab(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return n && i === "" && A(o.node) && (!o.isSourceStart || bt(o.node)) ? Pb(r(o.node), t, r, !1) : no(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return no(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function GE(e, t, r) {
  for (const n of t) {
    if (n.usjPrefix.length === 0) {
      if (e < n.usjBase || e >= n.usjBase + n.count)
        continue;
      const o = e - n.usjBase + n.blockBase;
      return n.blockPrefix.length === 0 ? { jsonPath: "$", offset: o } : { jsonPath: vt(n.blockPrefix), offset: o };
    }
    if (!n.isSourceStart || n.usjPrefix[0] !== e)
      continue;
    const [i, s] = n.blockPrefix;
    return s === void 0 ? { jsonPath: "$", offset: i } : { jsonPath: vt([i]), offset: s };
  }
  return { jsonPath: "$", offset: Wt(_e(), r).length };
}
function ch(e, t, r) {
  const n = dr(Ia(e.jsonPath));
  if (n.length === 0)
    return vn(e) ? GE(e.offset, t, r) : e;
  for (const i of t) {
    if (!Ab(n, i.usjPrefix))
      continue;
    const s = n.slice(i.usjPrefix.length);
    if (s.length === 0) {
      if (i.usjPrefix.length === 0)
        continue;
      if (vn(e)) {
        const o = e.offset - i.usjBase;
        if (o < 0 || !i.isSourceEnd && o >= i.count)
          continue;
        return {
          ...no(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return no(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return no(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function xc(e, t, r) {
  let { start: n } = e, i = e.end ?? n;
  if (zb()) {
    const m = Dt(t), g = Eb(m), k = ch(n, g, m), b = i === n ? k : ch(i, g, m);
    if (!k || !b)
      return;
    n = k, i = b;
  }
  const s = !!r?.forAnnotation, o = fh(n, t, s), a = i === n ? o : fh(i, t, s), [c, l] = o.point, [u, f] = a.point;
  if (!c || !u || l === void 0 || f === void 0)
    return;
  let d = dh(c, l), p = dh(u, f);
  if (i !== n && hs(i) && i.closingMarkerOffset === 0 && (p = f0(p[0], p[1], Dt(t))), r?.forAnnotation && i !== n) {
    const m = { edge: d, inside: o.insideDecorator }, g = { edge: p, inside: a.insideDecorator };
    [d, p] = JE(m, g), r.decoratorHolds && YE(m, g, r.decoratorHolds);
  }
  const h = Do();
  return h.anchor = Sr(d[0].getKey(), d[1], ru(d[0])), h.focus = Sr(p[0].getKey(), p[1], ru(p[0])), h;
}
function JE(e, t) {
  const { inside: r } = e, { inside: n } = t;
  if (!r && !n)
    return [e.edge, t.edge];
  const i = !!r && !!n && r.decorator.is(n.decorator), s = r && n && i ? n.before < r.before : wb(t, e), [o, a] = s ? [t, e] : [e, t], c = o.inside ? Ql(o.inside, o.inside.before >= o.inside.total, o.edge) : o.edge;
  if (i && r.before === n.before)
    return [c, c];
  const l = a.inside ? Ql(a.inside, a.inside.before > 0, a.edge) : a.edge;
  return s ? [l, c] : [c, l];
}
function YE(e, t, r) {
  const { inside: n } = e, { inside: i } = t;
  if (!n && !i)
    return;
  const s = !!n && !!i && n.decorator.is(i.decorator), o = n && i && s ? i.before < n.before : wb(t, e), [a, c] = o ? [i, n] : [n, i], l = (u, f, d) => {
    d > f && r.set(u.decorator.getKey(), { start: f, end: d });
  };
  a && l(a, a.before, s && c ? c.before : a.total), c && !s && l(c, 0, c.before);
}
function Ql(e, t, r) {
  const [n, i] = Kn(e.decorator, t);
  return n && i !== void 0 ? [n, i] : r;
}
function wb(e, t) {
  const r = ({ edge: s, inside: o }) => {
    const [a, c] = o ? Ql(o, !1, s) : s;
    return Sr(a.getKey(), c, ru(a));
  }, n = r(e), i = r(t);
  return n.isBefore(i) ? !0 : i.isBefore(n) ? !1 : !e.inside && !!t.inside;
}
function Tc(e) {
  const t = P();
  if (!t || !E(t))
    return;
  const r = zb() ? Eb(Dt(e)) : void 0, n = (u, f) => {
    const d = Ct(u, f, e);
    return r ? Pb(d, r, (p) => Ct(p, 0, e)) : d;
  }, i = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), s = t.isBackward() ? t.focus.offset : t.anchor.offset, o = n(i, s);
  if (!o)
    return;
  if (t.isCollapsed())
    return { start: o };
  const a = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), c = t.isBackward() ? t.anchor.offset : t.focus.offset, l = n(a, c);
  if (l)
    return { start: o, end: l };
}
const zn = {
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
}, XE = new Map(Object.values(zn).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), lh = {
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
}, QE = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(lh).filter((e) => lh[e])
), ZE = /([^\s="|]+)="([^"]*)"/g, e0 = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Nb(e, t) {
  return `${e}['${t}']`;
}
function bi(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function io(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function Qf(e) {
  const t = fn(e);
  if (!t)
    return;
  const r = En(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function vc(e, t, r, n = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(ZE)) {
    const o = s[1], a = n(o);
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
  return i.length > 0 ? i : r === void 0 ? [] : [
    { start: t, base: 0, bytes: { kind: "property", property: r } }
  ];
}
function t0(e, t) {
  const r = e0.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = XE.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function Zf(e) {
  if (Or(e)) {
    const t = Bb(e), r = e.getTextContent();
    if (Ie(t) && (r === "\\*" || r.startsWith(ze(t.getMarker()))))
      return t;
  }
  return hr(e) ?? e;
}
function r0(e) {
  const t = e.getTextContentSize(), r = Qf(e);
  if (r && r.role !== "value") {
    const i = zn[r.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? io(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (r.kind === "milestone")
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? io() : bi(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: Zf(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      bi(e.getNested() ? 2 : 1)
    ) : io()
  };
}
function n0(e) {
  const t = e.getTextContent(), r = t.length, n = Qf(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = Zf(e);
  if (Mt(i)) {
    const s = ze(i.getMarker()).length;
    if (t.startsWith(ze(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...bi(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (Ge(i)) {
    const s = uc(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: io() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: bi(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? io() : bi(t.startsWith("\\+") ? 2 : 1)
  };
}
function i0(e) {
  const t = Qf(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = zn[n];
  if (o) {
    const { markerName: a, keyName: c } = o;
    return {
      owner: r,
      length: s,
      spans: [
        // The separator before the value is the space after the attribute marker, which counts
        // into that marker name's offset space.
        { start: 0, base: a.length, bytes: { kind: "attributeKey", keyName: c } },
        { start: 1, base: 0, bytes: { kind: "property", property: c } }
      ]
    };
  }
  if (n === "char")
    return {
      owner: r,
      length: s,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...vc(i, 1, U(r) ? As(r.getMarker()) : void 0)
      ]
    };
  if (n === "milestone" && Ie(r))
    return { owner: r, length: s, spans: Ob(r.getMarker(), i) };
}
function Ob(e, t) {
  return [
    { start: 0, base: e.length, bytes: { kind: "property", property: "marker" } },
    ...vc(t, 2, Ko(e))
  ];
}
function s0(e) {
  const t = e.getTextContent(), r = t.length, n = e.getParent();
  if (!Ge(n)) {
    const s = Bb(e);
    return Ie(s) ? { owner: s, length: r, spans: Ob(s.getMarker(), t) } : void 0;
  }
  const i = t0(t, (n.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: n, length: r, spans: i };
  if (t.startsWith("|"))
    return {
      owner: n,
      length: r,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...vc(t, 1, void 0, (s) => QS(n.getTag(), s))
      ]
    };
}
function uh(e, t) {
  const r = ze(e);
  if (t.startsWith(r))
    return [
      ...bi(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Ht(e) {
  if (M(e))
    return r0(e);
  if (Or(e))
    return n0(e);
  if (It(e) && e.getTextType() === "attribute")
    return s0(e);
  if (e.getType() === Zn) {
    const n = e.getParent();
    return L(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Le(e)) {
    const n = uh(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!v(e))
    return;
  if (yr(e))
    return { owner: e, length: e.getTextContentSize(), spans: bi(1) };
  if (fe(e, be) === "attribute")
    return i0(e);
  const t = e.getParent();
  if (Re(t) && ei(t)?.is(e)) {
    const n = uh(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = hr(e);
  if (L(r) && Vt(r)?.is(e))
    return {
      owner: r,
      length: e.getTextContentSize(),
      spans: [
        // The caller's leading space is the space after the note's own marker, which counts into
        // that marker name's offset space.
        {
          start: 0,
          base: r.getMarker().length,
          bytes: { kind: "property", property: "marker" }
        },
        { start: 1, base: 0, bytes: { kind: "property", property: "caller" } }
      ]
    };
}
function ri(e) {
  return Or(e) || It(e) && e.getTextType() === "attribute" || e.getType() === Zn;
}
function Cc(e) {
  const t = [];
  if ((Le(e) || yr(e)) && t.push(e), A(e)) {
    const r = Re(e) ? ei(e) : void 0, n = L(e) ? Vt(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (M(i) || Or(i) || It(i) && i.getTextType() === "attribute" || i.getType() === Zn || r?.is(i)) && t.push(i);
  }
  if (Ie(e))
    for (let r = e.getNextSibling(); r && ri(r); r = r.getNextSibling())
      (!Or(r) || Zf(r).is(e)) && t.push(r);
  for (const r of QE) {
    const n = En(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function Pi(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function Zl(e, t, r) {
  const n = Ht(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = vt(Ar(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Nb(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return o0(e, r);
  }
}
function eu(e, t) {
  return v(e) && !Ht(e) && !fs(e, 0, t);
}
function o0(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && pe(o); )
    r = o, o = r.getParent();
  let n = r.getPreviousSibling();
  for (; n && eu(n, t); )
    n = n.getPreviousSibling();
  if (!n)
    return;
  const i = A(n) ? n.getLastDescendant() : n;
  if (i && (v(i) || ri(i)))
    return eu(i, t) ? void 0 : Kr(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return Kr(s, n.getIndexWithinParent() + 1, t);
}
function Gi(e, t, r) {
  for (const n of Cc(e)) {
    const i = Ht(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!Pi(o.bytes, t))
          continue;
        const a = ed(i, s);
        if (!(r < o.base || r > a))
          return [n, o.start + (r - o.base)];
      }
  }
}
function ed(e, t) {
  const r = e.spans[t], n = e.spans[t + 1];
  return n ? r.base + (n.start - r.start) - 1 : r.base + (e.length - r.start);
}
function ur(e, t) {
  const r = Dt(t);
  if (vn(e)) {
    const n = dr(e.jsonPath);
    let i = _e();
    for (let s = 0; s < n.length; s++) {
      if (!i || !A(i))
        return [void 0, void 0];
      const o = Wt(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : j_(o, e.offset) ?? ph(e, r) ?? [void 0, void 0];
      i = o.node;
    }
    return i && A(i) ? ur(td(i, n, e.offset, r), t) : [void 0, void 0];
  }
  if (fo(e) || hs(e) || po(e)) {
    const n = ph(e, r);
    if (n)
      return n;
  }
  if (ho(e) || ec(e)) {
    const n = pi(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = ho(e) ? Gi(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : Gi(n, { kind: "attributeMarker", keyName: i }, 0);
    if (s)
      return s;
    const o = il(n, i);
    if (o)
      return o;
    const a = k0(n, i);
    return a || (Ie(n) ? Kn(n, !1) : nl(n));
  }
  if (po(e)) {
    const n = pi(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = Gi(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || (il(n, e.keyName) ?? nl(n));
  }
  if (Ku(e)) {
    const n = pi(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = Gi(n, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = A(n) ? n.getFirstChild() : null;
    return s && v(s) ? [s, 0] : Kn(n, !1);
  }
  if (hs(e)) {
    const n = pi(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = Gi(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = rd(n);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return Kn(n, !0);
    if (!A(n))
      return Kn(n, !1);
    const o = n.getLastChild();
    return o && v(o) ? [o, o.getTextContent().length] : [n, n.getChildrenSize()];
  }
  if (fo(e)) {
    const n = Rb(e.jsonPath), i = pi(e.jsonPath, r);
    if (!i || n === void 0)
      return [void 0, void 0];
    const s = { kind: "property", property: n }, o = Gi(i, s, e.propertyOffset);
    if (o)
      return o;
    const a = x0(i, s, e.propertyOffset);
    if (a)
      return a;
    const c = il(i, n);
    if (c)
      return c;
    if (A(i)) {
      if (!a0.has(n))
        return nl(i);
      const u = i.getFirstChild();
      return u && v(u) ? [u, 0] : [i, 0];
    }
    const l = T0(i, n);
    return Kn(i, l !== void 0 && e.propertyOffset >= l.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${wv(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Rb(e) {
  const t = /\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/.exec(e);
  return t?.[1] ?? t?.[2] ?? t?.[3];
}
const a0 = /* @__PURE__ */ new Set([
  "marker",
  "code",
  "caller",
  "category"
]);
function tu(e, t) {
  const r = e.length - e.trimStart().length, n = Math.max(r, e.trimEnd().length);
  return { before: Math.min(Math.max(t, r), n) - r, total: n - r };
}
function fh(e, t, r) {
  const n = ur(e, t), [i, s] = n;
  if (r && !vn(e)) {
    const c = pi(e.jsonPath, Dt(t)), l = c && c0(c, e);
    if (l)
      return l.before > 0 ? { point: n, insideDecorator: l } : { point: n };
  }
  if (i && s !== void 0 && s > 0 && ri(i)) {
    const c = pc(i);
    return {
      point: n,
      insideDecorator: { decorator: i, ...tu(c, s) }
    };
  }
  if (vn(e))
    return { point: n };
  const o = pi(e.jsonPath, Dt(t));
  if (!mn(o) && !$n(o))
    return { point: n };
  const a = l0(o, e);
  return a && a.before > 0 ? { point: n, insideDecorator: a } : { point: n };
}
function $b(e) {
  const t = e.getFirstChild();
  if (!t || !Or(t))
    return;
  const r = Ht(t);
  if (r?.spans[0]?.bytes.kind !== "marker" || !r.owner.is(e) || !e.getChildren().every((c) => ri(c) || v(c) && Vr(c)))
    return;
  const i = As(e.getMarker()), s = Ur(e.getUnknownAttributes() ?? {}, i);
  if (!s)
    return;
  const o = vc(s, 1, i);
  if (!Cc(e).some((c) => Ht(c)?.spans.some((l) => o.some((u) => Pi(l.bytes, u.bytes)))))
    return {
      decorator: t,
      pieces: [
        { text: t.getTextContent(), spans: r.spans },
        {
          text: s,
          spans: [{ start: 0, base: 0, bytes: { kind: "precedingText" } }, ...o]
        }
      ]
    };
}
function c0(e, t) {
  const r = U(e) ? $b(e) : void 0, n = r && Ib(t);
  if (!r || !n)
    return;
  let i = 0, s;
  for (const { text: o, spans: a } of r.pieces) {
    const c = { spans: a, length: o.length };
    if (s === void 0) {
      const l = a.findIndex((u, f) => Pi(u.bytes, n.bytes) && n.offset >= u.base && n.offset <= ed(c, f));
      if (l >= 0) {
        const u = a[l].start + (n.offset - a[l].base);
        s = i + tu(o, u).before;
      }
    }
    i += tu(o, 0).total;
  }
  return s === void 0 ? void 0 : { decorator: r.decorator, before: s, total: i };
}
function l0(e, t) {
  const r = Ib(t);
  if (!r)
    return;
  const n = qb(e), i = n.findIndex((a) => Pi(a.bytes, r.bytes));
  if (i < 0)
    return;
  const s = n.reduce((a, c) => a + c.length, 0), o = n.slice(0, i).reduce((a, c) => a + c.length, 0) + Math.min(Math.max(r.offset, 0), n[i].length);
  return { decorator: e, before: o, total: s };
}
function Ib(e) {
  if (ho(e))
    return {
      bytes: { kind: "attributeKey", keyName: e.keyName },
      offset: e.keyOffset
    };
  if (ec(e))
    return { bytes: { kind: "attributeMarker", keyName: e.keyName }, offset: 0 };
  if (po(e))
    return {
      bytes: { kind: "closingAttributeMarker", keyName: e.keyName },
      offset: e.keyClosingMarkerOffset
    };
  if (Ku(e))
    return { bytes: { kind: "marker" }, offset: 0 };
  if (fo(e)) {
    const t = Rb(e.jsonPath);
    return t === void 0 ? void 0 : { bytes: { kind: "property", property: t }, offset: e.propertyOffset };
  }
}
function qb(e) {
  const t = (s, o) => ({ bytes: s, text: o, length: o.length }), r = [
    t({ kind: "marker" }, "\\"),
    // The space after the marker name is inside the glyph Standard view spells, so it counts.
    t({ kind: "property", property: "marker" }, `${e.getMarker()} `),
    t({ kind: "property", property: "number" }, e.getNumber())
  ], n = $n(e), i = n ? [zn.ca, zn.cp] : [zn.va, zn.vp];
  for (const s of i) {
    if (!s)
      continue;
    const { markerName: o, keyName: a } = s, c = a === "altnumber" ? e.getAltnumber() : e.getPubnumber();
    c !== void 0 && (r.push(t({ kind: "attributeMarker", keyName: a }, "\\"), t({ kind: "attributeKey", keyName: a }, o), t({ kind: "property", property: a }, c)), n && a === "pubnumber" || r.push(t({ kind: "closingAttributeMarker", keyName: a }, ot(o))));
  }
  return r;
}
function u0(e) {
  if (mn(e) || $n(e))
    return qb(e).map(({ text: n }) => n).join("");
  const t = e.getParent(), r = U(t) ? $b(t) : void 0;
  return r?.decorator.is(e) ? r.pieces.map(({ text: n }) => n.trim()).join("") : pc(e).trim();
}
function dh(e, t) {
  if (!ri(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !A(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && Lb.test(e.getTextContent());
  return [r, s ? n + 1 : n];
}
const Lb = /[ \u00A0]$/;
function f0(e, t, r) {
  let n;
  if (A(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; v(n) && !Ht(n) && !fs(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = n?.getParent();
  if (n && s && ri(n))
    return [s, n.getIndexWithinParent() + 1];
  const o = A(n) ? n.getLastDescendant() : n;
  return v(o) ? [o, o.getTextContentSize()] : [e, t];
}
function ru(e) {
  return A(e) ? "element" : "text";
}
function pi(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = dr(n);
  let s = _e();
  for (const o of i) {
    if (!s || !A(s))
      return;
    const a = Wt(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function Ct(e, t, r) {
  return Kr(e, t, Dt(r));
}
function Kr(e, t, r) {
  const n = v(e) ? Cf(e) : void 0;
  if (v(e) && n && t > n.start) {
    const s = fs(e, t, r);
    if (s)
      return {
        jsonPath: vt([...Ar(s.parent), s.index]),
        offset: s.offset
      };
  }
  if (v(e) && t > 0 && t === e.getTextContentSize() && d0(e)) {
    const s = p0(e, r);
    if (s)
      return s;
  }
  const i = Zl(e, t, r);
  if (i)
    return i;
  if (pe(e)) {
    const s = e.getChildrenSize(), o = e.getChildAtIndex(Math.min(t, s - 1));
    if (v(o)) {
      const c = t >= s ? o.getTextContentSize() : 0;
      return Kr(o, c, r);
    }
    if (o && t > 0 && t < s) {
      const c = Ub(e, t, r);
      if (c)
        return c;
    }
    const a = e.getParent();
    if (a) {
      const c = e.getIndexWithinParent(), l = t > 0 ? c + 1 : c;
      return Kr(a, l, r);
    }
  }
  if (A(e)) {
    const s = e.getChildAtIndex(t), o = s && Db(s);
    if (o) {
      const l = Zl(o, 0, r);
      if (l)
        return l;
    }
    if (s && ri(s))
      return {
        jsonPath: vt(Ar(e))
      };
    const a = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!s && a && Fb(a, e))
      return fa(e, !0, r);
    if (at(e) || Vr(e))
      return fa(e, t > 0, r);
    const c = bt(e) && Pr(e.getParent()) ? e.getParentOrThrow() : e;
    return Kb(c, ss(e, t, r), r);
  }
  if (v(e)) {
    if (t < Bo(e)) {
      const c = e.getPreviousSibling();
      if (M(c))
        return Kr(c, c.getTextContentSize(), r);
    }
    const s = fs(e, t, r);
    if (s)
      return {
        jsonPath: vt([
          ...Ar(s.parent),
          s.index
        ]),
        offset: s.offset
      };
    const o = t > 0;
    let a = o ? e.getNextSibling() : e.getPreviousSibling();
    for (; pe(a); )
      a = o ? a.getFirstChild() : a.getLastChild();
    if (v(a) && (Ht(a) || fs(a, 0, r)))
      return Kr(a, o ? 0 : a.getTextContentSize(), r);
  }
  return fa(e, t > 0, r);
}
function d0(e) {
  if (!Lb.test(e.getTextContent()))
    return !1;
  if (Le(e))
    return !0;
  const t = hr(e);
  return L(t) && !!Vt(t)?.is(e);
}
function p0(e, t) {
  let r = e;
  for (let s = r.getParent(); !r.getNextSibling() && pe(s); s = r.getParent())
    r = s;
  const n = r.getNextSibling();
  if (!n) {
    const s = r.getParent();
    return !s || h0(r) ? void 0 : Kr(s, s.getChildrenSize(), t);
  }
  const i = A(n) ? n.getFirstDescendant() ?? n : n;
  if (!(eu(i, t) || Ht(i)?.spans[0]?.bytes.kind === "precedingText"))
    return Kr(i, 0, t);
}
function h0(e) {
  for (let t = e; t; t = t.getParent())
    if (t.getNextSibling())
      return !1;
  return !0;
}
function Db(e) {
  if (Ht(e))
    return e;
  if (!Ke(e))
    return;
  const t = e.getFirstDescendant();
  return t && Ht(t) ? t : void 0;
}
function Ub(e, t, r) {
  for (let n = t; n < e.getChildrenSize(); n++) {
    const i = e.getChildAtIndex(n);
    if (!i)
      return;
    const s = Db(i);
    if (s)
      return Zl(s, 0, r);
    if (v(i) && fs(i, 0, r))
      return Kr(i, 0, r);
    if (v(i) || Vr(i))
      continue;
    const o = V_(i, r);
    if (o)
      return Kb(o.parent, o.point, r);
  }
}
function Kb(e, t, r) {
  const n = Ar(e);
  return t.type === "text" ? {
    jsonPath: vt([...n, t.index]),
    offset: t.offset
  } : td(e, n, t.index, r);
}
function Fb(e, t) {
  const r = Ht(e);
  return !!r && r.owner.is(t) && r.spans[0]?.bytes.kind === "closingMarker";
}
function fa(e, t, r) {
  const n = e.getParent();
  if (!n)
    return { jsonPath: vt(Ar(e)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (pe(n)) {
    if (i > 0 && i < n.getChildrenSize()) {
      const s = Ub(n, i, r);
      if (s)
        return s;
    }
    return fa(n, i > 0, r);
  }
  return Kr(n, i, r);
}
function td(e, t, r, n) {
  const i = Wt(e, n), s = i[r];
  if (!s)
    return g0(e, t, i, n);
  const o = vt([...t, r]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function g0(e, t, r, n) {
  if (Pr(e))
    return qa(e, t, 1, n);
  if (rd(e) !== void 0) {
    const o = r.length - 1, a = r[o];
    return a?.type === "text" ? {
      jsonPath: vt([...t, o]),
      offset: a.length
    } : {
      jsonPath: vt(t),
      closingMarkerOffset: 0
    };
  }
  const i = hr(e), s = t[t.length - 1];
  return m0(e) || !i || s === void 0 ? qa(e, t, 0, n) : td(i, t.slice(0, -1), s + 1, n);
}
function qa(e, t, r, n) {
  const i = vt(t), s = rd(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + r
    };
  if (A(e)) {
    const l = Wt(e, n), u = l.length - 1, f = l[u], d = [...t, u];
    if (f?.type === "text")
      return { jsonPath: vt(d), offset: f.length + r };
    if (f)
      return qa(f.node, d, r, n);
  }
  const o = (l, u) => ({
    jsonPath: Nb(i, l),
    propertyOffset: u.length + r
  }), a = (l, u) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: ot(u).length + r
  });
  if (Ne(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (at(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (Mt(e))
    return o("code", e.getCode());
  if (L(e))
    return o("caller", e.getCaller());
  const c = Ge(e) ? e.getMarker() : y0(e);
  return c ? o("marker", c) : { jsonPath: i };
}
function rd(e) {
  if (U(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : ot(e.getMarker(), lc(e)).length;
  if (L(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : ot(e.getMarker()).length;
  if (Ie(e))
    return ot("").length;
  if (Ge(e)) {
    const { closing: t } = uc(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function m0(e) {
  const t = hr(e);
  return ge(e) || bt(e) || Mt(e) || ib(e) || Ge(e) && e.getTag() === "table:row" || Pr(t) || Ai(t);
}
function y0(e) {
  if (ge(e) || U(e) || Ie(e) || ib(e) || hM(e))
    return e.getMarker();
}
function nl(e) {
  if (A(e)) {
    const r = e.getLastChild();
    let n = r;
    for (; n && b0(n, e); )
      n = n.getPreviousSibling();
    if (n !== r)
      return v(n) && !Ht(n) ? [
        n,
        Vr(n) ? 0 : n.getTextContentSize()
      ] : [e, n ? n.getIndexWithinParent() + 1 : 0];
    if (r && v(r))
      return [
        r,
        !Ht(r) && Vr(r) ? 0 : r.getTextContentSize()
      ];
  }
  const t = e.getNextSibling();
  return t && A(t) ? [t, 0] : Kn(e, !0);
}
function b0(e, t) {
  return _f(e) || Ke(e) || It(e) && e.getTextType() === "attribute" || Fb(e, t);
}
function k0(e, t) {
  for (const r of Cc(e)) {
    const n = Ht(r);
    if (!n?.owner.is(e))
      continue;
    const { spans: i } = n;
    if (i.some((o) => Pi(o.bytes, { kind: "attributeKey", keyName: t })))
      return;
    const s = i.find((o) => Pi(o.bytes, { kind: "property", property: t }));
    if (s && r.getTextContent()[s.start - 1] === "|")
      return [r, s.start];
  }
}
function x0(e, t, r) {
  for (const n of Cc(e)) {
    if (!ri(n))
      continue;
    const i = Ht(n);
    if (!i?.owner.is(e))
      continue;
    const s = i.spans.findIndex((o) => Pi(o.bytes, t));
    if (!(s < 0))
      return r > ed(i, s) ? [n, i.spans[s + 1]?.start ?? i.length] : void 0;
  }
}
function il(e, t) {
  if (!L(e) || t !== zn.cat?.keyName)
    return;
  const r = e.getChildren().find((s) => s.getType() === Zn);
  if (!r)
    return;
  const [n, i] = Kn(r, !0);
  return n && i !== void 0 ? [n, i] : void 0;
}
function Kn(e, t) {
  const r = e.getParent();
  return r ? [r, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function T0(e, t) {
  if (Ne(e) || at(e)) {
    if (t === "number")
      return e.getNumber();
    if (t === "altnumber")
      return e.getAltnumber();
    if (t === "pubnumber")
      return e.getPubnumber();
    if (t === "marker")
      return e.getMarker();
  }
  if (Ie(e) && t === "marker")
    return e.getMarker();
}
function ph(e, t) {
  const r = _e(), n = qa(r, [], 1, t);
  return hh(n) === hh(e) ? [r, r.getChildrenSize()] : void 0;
}
function hh(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [r]) => t.localeCompare(r)));
}
function Bb(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Vr(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Ar(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = hr(r);
    if (!n)
      break;
    const i = z_(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function zb() {
  for (let e = _e().getFirstChild(); e; e = e.getNextSibling())
    if (Ai(e))
      return !0;
  return !1;
}
function jb(e, t, r, n, i, s, o) {
  if (!Qe.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? xc(r, i) : P();
  if (!E(a))
    return;
  const c = S0(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Qs(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Vb(e, l, c, i, s, void 0, void 0);
  return C0(u, a, i), u;
}
function nd(e) {
  return e !== "expanded";
}
function v0(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!v(r) || !U(r.getParent()))
    return;
  if (M(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return M(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function C0(e, t, r) {
  const n = nd(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || R_(t), fb(t), Sn(t);
  const i = v0(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(U)?.selectEnd();
}
function Ji(e, t, r) {
  const n = _n(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(_t(e)) : r?.markerMode === "visible" && n.append(Mn("marker", ze(e)));
  const s = t === "" ? Tt : i ? $ + t : t;
  return n.append($e(s)), n;
}
function S0(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", f = i.verseRangeSeparator ?? "-", d = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => f)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (d !== void 0 && o.push(Ji("fr", d, n)), !e.isCollapsed()) {
        const p = yh(e);
        p.length > 0 && o.push(Ji("fq", p, n));
      }
      o.push(Ji("ft", "", n));
      break;
    case "x":
    case "ex":
      if (d !== void 0 && o.push(Ji("xo", d, n)), !e.isCollapsed()) {
        const p = yh(e);
        p.length > 0 && o.push(Ji("xq", p, n));
      }
      o.push(Ji("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Vb(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : nd(n?.noteMode), l = nf(e, t, c);
  s && $t(l, Hn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let f, d;
  n?.markerMode === "editable" ? (f = _t(e), u && f.setMode("token"), a || (d = _t(e, "closing"), u && d.setMode("token"))) : n?.markerMode === "visible" && (f = Mn("marker", ze(e) + " "), a || (d = Mn("marker", ot(e))));
  let p;
  if (f && l.append(f), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = $e(gt(l.__caller)).toggleUnmergeable(), u && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => Mi(), m = r.flatMap(_0(h));
    if (t === "")
      l.append(...m);
    else {
      const g = xf(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = Wf(l.__caller, g, k), l.append(p, h(), ...m);
    }
  }
  return d && l.append(d), l;
}
function gh(e) {
  if (typeof e == "string") {
    const i = X(e);
    return L(i) ? i : void 0;
  }
  const t = Es();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => L(i.node))[e]?.node;
  if (L(n))
    return n;
}
function mh(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (mn(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find(U)?.selectEnd();
}
function _0(e) {
  return (t) => It(t) ? [t] : [t, e()];
}
function M0(e) {
  const t = e.getParent();
  return t !== null && St(t, L) !== null;
}
function yh(e) {
  if (!E(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = ju(e);
  let a = "";
  for (const c of t)
    if (!(L(c) || Lt(c) || M0(c)) && !M(c) && !yr(c) && fe(c, be) !== "attribute") {
      if (Ne(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (v(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const Sc = [
  cr,
  qt,
  ...LM
], E0 = [
  ws,
  ...Sc
], A0 = Oi((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return _("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function P0() {
  const [e, t] = Ae(void 0), [r, n] = Ae(), i = ue(null), s = Se((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = cC(l, c, () => {
      lC(l, c, {
        placement: "bottom-start",
        middleware: [uC(), fC()]
      }).then((u) => {
        n(u.placement), t((f) => f?.x === u.x && f?.y === u.y ? f : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = Se(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return J(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function w0({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = P0();
  return J(() => {
    if (!e || !t.current) {
      i();
      return;
    }
    const o = window.getSelection()?.getRangeAt(0);
    if (!o) {
      i();
      return;
    }
    return n(o, t.current), i;
  }, [i, e, t, n]), { coords: r, placement: s };
}
const N0 = Sv(A0);
function Wb({ isOpen: e = !1, children: t }) {
  const r = ue(null), { coords: n, placement: i } = w0({ isOpen: e, floatingBoxRef: r }), s = rt(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return gi(
    _(N0, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Hb = im(void 0);
function id() {
  const e = sm(Hb);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function O0(e, t) {
  const [r, n] = Ae(0), [i, s] = Ae(-1), o = rt(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = Se(() => {
    n((f) => {
      const d = o.length;
      return d ? (f - 1 + d) % d : 0;
    });
  }, [o.length]), l = Se(() => {
    n((f) => {
      const d = o.length;
      return d ? (f + 1) % d : 0;
    });
  }, [o.length]), u = Se(() => {
    const f = o.length;
    if (r >= 0 && r < f) {
      const d = o[r];
      t?.(d), s(r);
    }
  }, [r, o, t]);
  return {
    state: a,
    moveUp: c,
    moveDown: l,
    select: u,
    setActiveIndex: n,
    setSelectedIndex: s
  };
}
function R0({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = O0(t, r);
  return _(Hb.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const Gb = Oi(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = id(), u = Se((d) => {
    l(), c(-1), n?.(d);
  }, [n, l, c]), f = Se((d) => {
    a(e), r?.(d);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: f, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function $0({ children: e, autoIndex: t = !0, ...r }) {
  const n = ue(null), { state: { activeIndex: i, menuItems: s } } = id(), o = rt(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = rt(() => {
    const c = o(s);
    return t ? _v.map(c, (l, u) => Mv(l) && l.type === Gb && l.props.index === void 0 ? Ev(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return J(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), f = l.getBoundingClientRect();
        f.bottom > u.bottom ? c.scrollTop += f.bottom - u.bottom : f.top < u.top && (c.scrollTop -= u.top - f.top);
      }
    }
  }, [i]), _("div", { ref: n, role: "menu", ...r, children: a });
}
const I0 = (e, t, r) => da(e, r).toLowerCase().includes(t.toLowerCase()), bh = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", da = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function q0(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, f;
  i ? (f = i, u = r.length > 0 ? bh(r[0]) : "") : (u = n || (r.length > 0 ? bh(r[0]) : ""), f = (h, m) => I0(h, m, u));
  const d = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return f(h, t);
    } catch (m) {
      return console.warn("Error filtering item:", h, m), !1;
    }
  }).sort((h, m) => {
    const g = (C) => (p.has(C) || p.set(C, da(C, d).toLowerCase()), p.get(C) ?? ""), k = a ? da(h, d) : g(h), b = a ? da(m, d) : g(m);
    for (const C of c)
      switch (C) {
        case "exact":
          if (k === l && b !== l)
            return -1;
          if (b === l && k !== l)
            return 1;
          break;
        case "startsWith":
          if (k.startsWith(l) && !b.startsWith(l))
            return -1;
          if (b.startsWith(l) && !k.startsWith(l))
            return 1;
          break;
        case "contains": {
          const R = k.indexOf(l), w = b.indexOf(l);
          if (R !== -1 && w === -1)
            return -1;
          if (w !== -1 && R === -1)
            return 1;
          if (R !== -1 && w !== -1)
            return R - w;
          break;
        }
      }
    return k.localeCompare(b);
  });
}
const sl = {
  Root: R0,
  Options: $0,
  Option: Gb
};
function L0(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return rt(() => q0({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function D0() {
  const { moveUp: e, moveDown: t, select: r } = id();
  return rt(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const U0 = () => {
  const e = D0(), [t] = Te();
  J(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(On, r, et);
  }, [t, e]);
};
function K0() {
  return U0(), null;
}
const F0 = ["Shift", "Control", "Alt", "Meta"];
function Jb(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = Te(), u = s !== void 0, [f, d] = Ae(""), p = u ? s ?? "" : f, h = L0({ query: p, items: t, filterBy: "name" }), m = (g) => {
    n?.(), r ? r(g) : g.action(l);
  };
  return J(() => {
    a?.(p, h);
  }, [a, p, h]), J(() => l.registerCommand(On, (g) => {
    if (u || c?.includes(g.key) || F0.includes(g.key))
      return !1;
    if ((g.ctrlKey || g.metaKey || g.altKey) && !g.getModifierState("AltGraph"))
      return n?.(), !1;
    const b = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : d((C) => C.slice(0, -1));
      }
    }[g.key];
    return b ? (g.stopPropagation(), g.preventDefault(), b(), !0) : g.key.length === 1 ? (g.stopPropagation(), g.preventDefault(), g.key !== o && d((C) => C + g.key), !0) : !1;
  }, et), [l, u, p, o, n, c]), He(sl.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (g) => m(g), children: [!u && _("input", { value: p, type: "text", disabled: !0 }), _(K0, {}), _(sl.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (g) => g.map((b, C) => He(sl.Option, { index: C, children: [_("span", { className: "label", children: b.label ?? b.name }), _("span", { className: "description", children: b.description })] }, b.name)) })] });
}
function B0({ trigger: e, items: t }) {
  const [r] = Te(), [n, i] = Ae(!1), s = Se((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return J(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), J(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = P();
      if (E(l))
        return l;
    });
    a.read(() => {
      const l = P();
      !E(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && _(Wb, { isOpen: n, children: ({ placement: o }) => _(Jb, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function z0({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: rt(() => {
    if (!t || !e)
      return;
    const i = un(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = un(o), { action: c } = r(o, a);
        return {
          name: o,
          label: o,
          description: a?.description ?? "",
          action: (l) => {
            c({ editor: l, reference: e });
          }
        };
      }));
  }, [t, r, e]) };
}
function j0(e, t) {
  const r = Ui(e);
  if (mn(e) || $n(e)) {
    const o = 1 + e.getMarker().length + 1, a = e.getNumber();
    if (e.getShowMarker())
      return t < o + a.length ? t : void 0;
    if (t < o || t >= o + a.length)
      return;
    const c = r.indexOf(a);
    return c < 0 ? "drawn" : c + t - o;
  }
  const n = pc(e), i = n.length - n.trimStart().length, s = n.trim().length;
  if (!(t >= s))
    return n === r ? i + t : "drawn";
}
function V0() {
  return typeof CSS > "u" || typeof Highlight > "u" || !("highlights" in CSS) ? void 0 : { registry: CSS.highlights, create: () => new Highlight() };
}
const kh = /* @__PURE__ */ new Map(), W0 = ["background-color", "color", "text-shadow"], H0 = [
  "text-decoration-line",
  "text-decoration-style",
  "text-decoration-color",
  "text-decoration-thickness"
], G0 = /* @__PURE__ */ new Set(["solid", "double", "dotted", "dashed", "wavy"]);
function J0(e, t) {
  const r = e.ownerDocument.defaultView;
  if (!r)
    return [];
  const n = r.getComputedStyle(e), i = r.getComputedStyle(t), s = (u) => {
    const f = n.getPropertyValue(u);
    return f && f !== i.getPropertyValue(u) ? f : void 0;
  }, o = [];
  for (const u of W0) {
    const f = s(u);
    f && o.push(`${u}: ${f}`);
  }
  const a = n.getPropertyValue("text-decoration-line");
  let c = !1;
  if (a) {
    if (a !== "none" && s("text-decoration-line")) {
      c = !0;
      for (const u of H0) {
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
    o.push("text-decoration-line: underline", `text-decoration-style: ${G0.has(l) ? l : "solid"}`);
    const u = n.getPropertyValue("border-bottom-color");
    u && o.push(`text-decoration-color: ${u}`);
    const f = n.getPropertyValue("border-bottom-width");
    f && o.push(`text-decoration-thickness: ${f}`);
  }
  return o;
}
const Y0 = Math.random().toString(36).slice(2, 10);
let X0 = 0;
class Q0 {
  api;
  probeParent;
  prefix = `editor-annotation-${Y0}-${X0++}`;
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
  constructor(t, r) {
    this.api = t, this.probeParent = r;
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
  setLeaf(t, r) {
    const n = this.byLeaf.get(t) ?? [];
    for (const i of r)
      this.use(i.classNames).highlight.add(i.range);
    r.length > 0 ? this.byLeaf.set(t, r) : this.byLeaf.delete(t), this.release(n, new Set(r.map(({ range: i }) => i)));
  }
  clearLeaf(t) {
    const r = this.byLeaf.get(t) ?? [];
    this.byLeaf.delete(t), this.release(r, /* @__PURE__ */ new Set());
  }
  /** Let go of `pieces`, keeping in their highlights any range in `kept`; a class set no piece
   * uses any more is unregistered. */
  release(t, r) {
    for (const n of t) {
      const i = this.byClassSet.get(ol(n.classNames));
      i && (r.has(n.range) || i.highlight.delete(n.range), !(--i.uses > 0) && (this.api.registry.delete(i.name), kh.delete(i.name), this.byClassSet.delete(ol(n.classNames)), this.queueRender()));
    }
  }
  dispose() {
    for (const t of [...this.byLeaf.keys()])
      this.clearLeaf(t);
    this.disposed = !0, this.observer?.disconnect(), this.style?.remove(), this.probes?.remove();
  }
  use(t) {
    const r = ol(t);
    let n = this.byClassSet.get(r);
    if (!n) {
      const i = `${this.prefix}-${this.nextName++}`, s = this.api.create();
      s.priority = this.nextName, n = { name: i, classNames: t, highlight: s, uses: 0 }, this.byClassSet.set(r, n), this.api.registry.set(i, s), kh.set(i, t), this.queueRender();
    }
    return n.uses++, n;
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
    const r = t.ownerDocument;
    this.observe(r), (!this.probes?.isConnected || this.probes.parentElement !== t) && (this.probes?.remove(), this.probes = r.createElement("div"), this.probes.setAttribute("aria-hidden", "true"), this.probes.setAttribute("data-editor-annotation-probes", ""), this.probes.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;visibility:hidden;pointer-events:none", t.append(this.probes));
    const n = this.probes;
    n.replaceChildren();
    const i = r.createElement("span");
    n.append(i);
    const s = [];
    for (const [c, { classNames: l }] of this.byClassSet) {
      if (this.measured.has(c))
        continue;
      if (!this.isNamedByRule(r, l)) {
        this.measured.set(c, []);
        continue;
      }
      const u = r.createElement("span");
      u.className = l.join(" "), s.push([c, u]);
    }
    n.append(...s.map(([, c]) => c));
    for (const [c, l] of s)
      this.measured.set(c, J0(l, i));
    const o = [];
    for (const [c, { name: l }] of this.byClassSet) {
      const u = this.measured.get(c) ?? [];
      u.length > 0 && o.push(`::highlight(${l}) { ${u.join("; ")}; }`);
    }
    for (const c of this.measured.keys())
      this.byClassSet.has(c) || this.measured.delete(c);
    n.replaceChildren();
    const a = o.join(`
`);
    this.style?.isConnected || (this.style = r.createElement("style"), this.style.setAttribute(Yb, this.prefix), r.head.append(this.style)), this.style.textContent !== a && (this.style.textContent = a);
  }
  /**
   * Whether any style rule's selector names one of `classNames`. Errs toward yes: a substring match
   * counts, and every class set counts while any rule cannot be read.
   */
  isNamedByRule(t, r) {
    this.rules || (this.rules = nA(Xb(t)), this.ruleCounts = xh(t));
    const { selectors: n, unreadable: i } = this.rules;
    return i || r.some((s) => n.includes(s) || n.includes(s.replace(/[^\w-]/g, "\\$&")));
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
    !t || xh(t) === this.ruleCounts || this.forgetStyles();
  }
  forgetStyles() {
    this.measured.clear(), this.rules = void 0, this.ruleCounts = void 0, this.queueRender();
  }
  /** Measure again when a stylesheet or the page's theme changes; never for an editor highlight
   * stylesheet (this painter's or another editor's), which only styles highlights. */
  observe(t) {
    if (this.observer)
      return;
    const r = t.defaultView;
    if (!r)
      return;
    this.observer = new r.MutationObserver((i) => {
      const s = (o) => {
        if (nu(o.target))
          return !0;
        const a = [...o.addedNodes, ...o.removedNodes];
        return a.length > 0 && a.every(nu);
      };
      i.every(s) || this.forgetStyles();
    }), this.observer.observe(t.head, { childList: !0, characterData: !0, subtree: !0 });
    const n = { attributes: !0, attributeFilter: ["class", "style", "data-theme"] };
    this.observer.observe(t.documentElement, n), t.body && this.observer.observe(t.body, n);
  }
}
const Yb = "data-editor-annotation-highlights";
function nu(e) {
  for (let t = e; t; t = t.parentNode)
    if (Z0(t) && t.hasAttribute(Yb))
      return !0;
  return !1;
}
function Z0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Xb(e) {
  const t = "adoptedStyleSheets" in e ? e.adoptedStyleSheets : [];
  return [...e.styleSheets, ...t].filter((r) => !r.ownerNode || !nu(r.ownerNode));
}
function xh(e) {
  return Xb(e).map((t) => {
    try {
      return t.cssRules.length;
    } catch {
      return -1;
    }
  }).join(",");
}
function eA(e) {
  return "cssRules" in e;
}
function tA(e) {
  return "styleSheet" in e;
}
function rA(e) {
  return "selectorText" in e && typeof e.selectorText == "string";
}
function nA(e) {
  const t = [];
  let r = !1;
  const n = (i) => {
    let s;
    try {
      s = i.cssRules;
    } catch {
      r = !0;
      return;
    }
    for (const o of s)
      rA(o) && t.push(o.selectorText), tA(o) && (o.styleSheet ? n(o.styleSheet) : r = !0), eA(o) && n(o);
  };
  for (const i of e)
    n(i);
  return { selectors: t.join(`
`), unreadable: r };
}
function ol(e) {
  return JSON.stringify([...e].sort());
}
function Th(e, t, r) {
  const n = e.ownerDocument, i = n.createTreeWalker(e, NodeFilter.SHOW_TEXT), s = n.createRange();
  let o = 0, a = !1;
  for (let c = i.nextNode(); c; c = i.nextNode()) {
    const l = c.textContent?.length ?? 0;
    if (!a && t < o + l && (s.setStart(c, t - o), a = !0), a && r <= o + l)
      return s.setEnd(c, r - o), s;
    o += l;
  }
}
function iA(e, t, r) {
  return "getClientRects" in e ? Array.from(e.getClientRects()).some((n) => t >= n.left && t <= n.right && r >= n.top && r <= n.bottom) : !1;
}
function Qb(e) {
  return v(e) ? e.getTextContent() : Ui(e);
}
function so(e) {
  return Qb(e).length;
}
function sA(e, t) {
  if (v(e)) {
    if (mr(e))
      return !0;
    if (Gy(e)) {
      const [i, s] = Mf(e);
      return t < i || t >= s;
    }
    return t < Bo(e);
  }
  const [r, n] = hc(Ui(e));
  return t < r || t >= n;
}
function al(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t.getKey();
}
function oA(e) {
  let t = e;
  for (; A(t); ) {
    const r = t.getFirstChild();
    if (!r)
      return t;
    t = r;
  }
  return t;
}
function vh(e) {
  for (let t = e; t; t = t.getParent()) {
    const r = t.getNextSibling();
    if (r)
      return oA(r);
  }
}
function Zb(e) {
  return A(e) ? e.getChildren().flatMap(Zb) : [e];
}
const aA = 64;
function cA(e, t) {
  const r = /* @__PURE__ */ new Map(), n = (o, a, c) => {
    for (let l = a; l < c; l++)
      if (!sA(o, l))
        return !1;
    return c > a && r.set(o.getKey(), [a, c]), !0;
  };
  if (e.leaf.is(t.leaf))
    return n(e.leaf, e.end, t.start) ? r : void 0;
  const i = al(e.leaf);
  if (i !== al(t.leaf) || !n(e.leaf, e.end, so(e.leaf)))
    return;
  let s = vh(e.leaf);
  for (let o = 0; s && !s.is(t.leaf); o++, s = vh(s))
    if (o >= aA || al(s) !== i || Gr(s) && so(s) === 0 || !n(s, 0, so(s)))
      return;
  if (s)
    return n(t.leaf, 0, t.start) ? r : void 0;
}
function lA(e) {
  const t = [...e].sort(([n], [i]) => n - i), r = [];
  for (const [n, i] of t) {
    const s = r[r.length - 1];
    s && n <= s[1] ? s[1] = Math.max(s[1], i) : r.push([n, i]);
  }
  return r;
}
function uA(e, t, r, n) {
  const i = [];
  for (const a of r) {
    const c = X(a);
    if (c?.isAttached())
      for (const l of Bn(c)) {
        if (l.type !== e || l.id !== t || l.undisplayed)
          continue;
        const u = l.start === l.end;
        i.push({
          leaf: c,
          start: u ? 0 : l.start,
          end: u ? so(c) : l.end,
          inMark: !1
        });
      }
  }
  for (const a of n) {
    const c = X(a);
    if (!(!pe(c) || !c.isAttached()))
      for (const l of Zb(c))
        i.push({ leaf: l, start: 0, end: so(l), inMark: !0 });
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
      for (const [u, [f, d]] of cA(a, l) ?? [])
        o(u, f, d);
  });
  for (const [a, c] of s)
    s.set(a, lA(c));
  return s;
}
function fA(e, t) {
  const r = [...t.values()];
  if (e === 0 || r.every((o) => o.length === 1 && o[0][0] <= 0 && o[0][1] >= e))
    return { whole: !0 };
  const n = /* @__PURE__ */ new Set();
  for (const o of r)
    for (const [a, c] of o)
      n.add(Math.max(0, Math.min(a, e))), n.add(Math.max(0, Math.min(c, e)));
  const i = [...n].sort((o, a) => o - a), s = [];
  for (let o = 0; o + 1 < i.length; o++) {
    const [a, c] = [i[o], i[o + 1]], l = [...t].filter(([, u]) => u.some(([f, d]) => f <= a && c <= d)).map(([u]) => u);
    l.length > 0 && s.push({ start: a, end: c, annotations: l });
  }
  return { whole: !1, segments: s };
}
const dA = "display-annotation", pA = [
  Xe,
  $r,
  Pt,
  Ir,
  cr,
  qt,
  gr,
  Jr
], ek = /* @__PURE__ */ new Set();
function Tr(e, t) {
  return JSON.stringify([e, t]);
}
function hA(e) {
  return Array.isArray(e) && e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string";
}
function Bs(e) {
  const t = JSON.parse(e);
  if (!hA(t))
    throw new Error(`not an annotation index key: ${e}`);
  return t;
}
function tk(e) {
  $t(e, dc, void 0), A(e) && e.getChildren().forEach(tk);
}
const cl = /* @__PURE__ */ new WeakMap();
function gA(e) {
  Q_({
    holdableText: u0,
    renderedOffset: j0
  });
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  let c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
  const u = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakSet(), d = new AbortController(), p = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set();
  let R, w = !1;
  const F = V0(), Y = F ? new Q0(F, () => e.getRootElement()?.parentElement ?? null) : void 0;
  let N = /* @__PURE__ */ new Set();
  const W = e._config.theme;
  function ne(O) {
    return (t.get(O)?.size ?? 0) + (n.get(O)?.size ?? 0);
  }
  function D(O, B, j) {
    let H = O.get(B);
    H || O.set(B, H = /* @__PURE__ */ new Set()), H.add(j);
  }
  function ke(O, B, j) {
    const H = O.get(B);
    H?.delete(j) && (H.size === 0 && O.delete(B), ne(B) === 0 && N.add(B));
  }
  function he(O) {
    for (const [B, j] of Object.entries(O.getTypedIDs()))
      for (const H of j)
        ve(Tr(B, H), B, H);
  }
  function ve(O, B, j) {
    const H = /* @__PURE__ */ new Set([
      ...n.get(O) ?? [],
      ...t.get(O) ?? []
    ]), ae = Array.from(H, (Q) => X(Q)).filter((Q) => Q !== null && Q.isAttached() && // A holder inside another holder is already in that one's text.
    !Q.getParents().some((Z) => H.has(Z.getKey())));
    if (ae.length === 0)
      return;
    ae.sort((Q, Z) => Q.isBefore(Z) ? -1 : 1);
    const ee = ae.map((Q) => pe(Q) ? Q.getTextContent() : Bn(Q).filter((Z) => Z.type === B && Z.id === j).map((Z) => Bl(Q, Z)).join("")).join("");
    o.set(O, ee);
  }
  function Me(O, B, j) {
    return m.get(O)?.has(B) ? k.has(O) ? !0 : (Y?.leafHighlights(O) ?? []).some((H) => H.annotations.includes(B) && iA(H.range, j.clientX, j.clientY)) : !1;
  }
  function je(O, B) {
    const j = /* @__PURE__ */ new Map();
    for (const H of Bn(O)) {
      const ae = Tr(H.type, H.id);
      j.has(ae) || !Me(O.getKey(), ae, B) || j.set(ae, { annotation: H, text: Bl(O, H) });
    }
    return j;
  }
  function Ze(O, B, j) {
    e.getEditorState().read(() => {
      const H = $i(O);
      if (!H)
        return;
      const ae = j === "leave" ? /* @__PURE__ */ new Map() : je(H, B), ee = (Z, { annotation: ie, text: De }) => wa(e, ie.type, ie.id)?.[Z]?.(B, ie.type, ie.id, De);
      if (j === "onClick") {
        ae.forEach((Z) => ee("onClick", Z));
        return;
      }
      const Q = p.get(O) ?? /* @__PURE__ */ new Map();
      for (const [Z, ie] of Q)
        ae.has(Z) || ee("onMouseLeave", ie);
      for (const [Z, ie] of ae)
        Q.has(Z) || ee("onMouseEnter", ie);
      p.set(O, ae);
    }, { editor: e });
  }
  function Gt(O) {
    const B = {}, j = /* @__PURE__ */ new Set();
    for (const H of O) {
      const [ae, ee] = Bs(H), Q = B[ae] ??= [];
      Q.includes(ee) || Q.push(ee), b.get(H)?.forEach((Z) => j.add(Z));
    }
    return Object.keys(B).length === 0 ? [] : [
      ...Im(W, B),
      dA,
      ...j
    ].flatMap((H) => H.match(/\S+/g) ?? []);
  }
  function Ve(O, B) {
    const j = u.get(O) ?? [];
    aa(O, ...j.filter((H) => !B.includes(H))), Xs(O, ...B), u.set(O, B);
  }
  function Xr(O) {
    if (f.has(O))
      return;
    f.add(O);
    const { signal: B } = d;
    O.addEventListener("click", (j) => Ze(O, j, "onClick"), { signal: B }), O.addEventListener("mouseenter", (j) => Ze(O, j, "move"), { signal: B }), O.addEventListener("mousemove", (j) => Ze(O, j, "move"), { signal: B }), O.addEventListener("mouseleave", (j) => Ze(O, j, "leave"), {
      signal: B
    });
  }
  function Jt(O) {
    const B = X(O), j = e.getElementByKey(O), H = m.get(O), ae = g.get(O);
    if (ae && ae !== j && Ve(ae, []), C.delete(O), !B || !j || !H || H.size === 0) {
      j && Ve(j, []), Y?.clearLeaf(O), g.delete(O), k.delete(O);
      return;
    }
    g.set(O, j);
    const ee = new Map([...H].map((Je) => [
      Je,
      h.get(Je)?.get(O) ?? []
    ])), Q = Bn(B).length > 0, Z = Qb(B);
    let ie = fA(Z.length, ee);
    if (!ie.whole && !Y && (ie = Q ? { whole: !0 } : { whole: !1, segments: [] }), Q && Xr(j), ie.whole) {
      Y?.clearLeaf(O), k.add(O), Ve(j, Gt(H));
      return;
    }
    if (k.delete(O), Ve(j, []), !Y)
      return;
    const De = [];
    for (const { start: Je, end: kr, annotations: or } of ie.segments) {
      const yn = Th(j, Je, kr);
      yn ? De.push({
        classNames: Gt(or),
        annotations: or,
        range: yn,
        text: Z.slice(Je, kr)
      }) : C.add(O);
    }
    Y.setLeaf(O, De);
  }
  function Oe(O) {
    if (C.has(O))
      return !0;
    const B = e.getElementByKey(O);
    return (Y?.leafHighlights(O) ?? []).some(({ range: j, text: H }) => !B || !B.contains(j.startContainer) || !B.contains(j.endContainer) || j.toString() !== H);
  }
  function de() {
    return [...C, ...Y?.leafKeys() ?? []].filter(Oe);
  }
  function q() {
    w || e.getEditorState().read(() => new Set(de()).forEach(Jt), { editor: e });
  }
  function ce(O) {
    R?.disconnect(), R = void 0;
    const B = O?.ownerDocument.defaultView;
    !O || !B || !Y || (R = new B.MutationObserver(q), R.observe(O, { childList: !0, characterData: !0, subtree: !0 }));
  }
  function me(O) {
    const B = /* @__PURE__ */ new Set();
    for (const H of O)
      m.has(H) && B.add(H);
    const j = /* @__PURE__ */ new Set([...t.keys(), ...h.keys()]);
    for (const [H, ae] of n)
      ae.size >= 2 && j.add(H);
    for (const H of j) {
      const [ae, ee] = Bs(H), Q = uA(ae, ee, t.get(H) ?? [], n.get(H) ?? []), Z = h.get(H) ?? /* @__PURE__ */ new Map();
      for (const ie of /* @__PURE__ */ new Set([...Z.keys(), ...Q.keys()]))
        JSON.stringify(Z.get(ie)) !== JSON.stringify(Q.get(ie)) && B.add(ie);
      for (const ie of Z.keys()) {
        if (Q.has(ie))
          continue;
        const De = m.get(ie);
        De?.delete(H), De?.size === 0 && m.delete(ie);
      }
      for (const ie of Q.keys()) {
        let De = m.get(ie);
        De || m.set(ie, De = /* @__PURE__ */ new Set()), De.add(H);
      }
      Q.size > 0 ? h.set(H, Q) : h.delete(H);
    }
    for (const [H, ae] of g)
      e.getElementByKey(H) !== ae && B.add(H);
    for (const H of de())
      B.add(H);
    for (const H of B)
      Jt(H);
  }
  function Fe(O) {
    w || e.getEditorState().read(() => me(O), { editor: e });
  }
  function yt(O, B) {
    const j = Tr(O, B), H = [], ae = (ee) => {
      const Q = ee.ownerDocument.createRange();
      Q.selectNodeContents(ee), H.push(Q);
    };
    for (const ee of n.get(j) ?? []) {
      const Q = e.getElementByKey(ee);
      Q && ae(Q);
    }
    for (const [ee, Q] of h.get(j) ?? []) {
      const Z = e.getElementByKey(ee);
      if (Z) {
        if (k.has(ee) || !Y) {
          ae(Z);
          continue;
        }
        for (const [ie, De] of Q) {
          const Je = Th(Z, ie, De);
          Je && H.push(Je);
        }
      }
    }
    return H.sort((ee, Q) => ee.compareBoundaryPoints(Range.START_TO_START, Q));
  }
  function te(O, B, j, H) {
    const ae = Tr(O, B), ee = b.get(ae) ?? /* @__PURE__ */ new Set();
    ee.has(j) !== H && (H ? ee.add(j) : ee.delete(j), ee.size > 0 ? b.set(ae, ee) : b.delete(ae), Fe(h.get(ae)?.keys() ?? []));
  }
  function nt(O) {
    e.getEditorState().read(() => {
      const B = /* @__PURE__ */ new Set();
      for (const [j, H] of O) {
        const ae = H === "destroyed" ? null : X(j), ee = ae ? Bn(ae) : [], Q = r.get(j) ?? [];
        for (const { type: Z, id: ie } of Q) {
          const De = Tr(Z, ie);
          B.add(De), ee.some((Je) => Je.type === Z && Je.id === ie) || ke(t, De, j);
        }
        for (const Z of ee) {
          const ie = Tr(Z.type, Z.id);
          B.add(ie), D(t, ie, j);
        }
        ee.length > 0 ? r.set(j, ee) : r.delete(j);
        for (let Z = ae?.getParent(); Z; Z = Z.getParent())
          pe(Z) && he(Z);
      }
      for (const j of B) {
        const [H, ae] = Bs(j);
        ve(j, H, ae);
      }
    }, { editor: e });
  }
  function br(O) {
    e.getEditorState().read(() => {
      for (const [B, j] of O) {
        const H = j === "destroyed" ? null : X(B), ae = pe(H) ? H : void 0, ee = ae ? Object.entries(ae.getTypedIDs()) : [], Q = ee.flatMap(([ie, De]) => De.map((Je) => Tr(ie, Je)));
        for (const ie of i.get(B) ?? [])
          Q.includes(ie) || (ke(n, ie, B), ae || l.set(ie, [...l.get(ie) ?? [], B]));
        for (const ie of Q)
          D(n, ie, B);
        if (Q.length > 0 ? i.set(B, Q) : i.delete(B), !ae)
          continue;
        he(ae);
        const Z = ae.getTypedOnRemoves();
        for (const [ie, De] of ee)
          for (const Je of De) {
            const kr = Z[ie]?.[Je];
            kr && s.set(Tr(ie, Je), kr);
          }
      }
    });
  }
  function Pe(O, B, j) {
    Zy(e, B, j), s.delete(O), o.delete(O);
  }
  function sr() {
    for (const [O, B] of iS(e))
      oe(O, B);
  }
  function oe(O, B) {
    const j = Tr(O, B);
    a.add(j), c.add(j);
  }
  function Kt() {
    a.clear(), sS(e);
    for (const O of /* @__PURE__ */ new Set([...s.keys(), ...o.keys()])) {
      if (ne(O) > 0)
        continue;
      const [B, j] = Bs(O);
      Pe(O, B, j);
    }
  }
  function Ee({ tags: O }) {
    sr();
    const B = N, j = c, H = l;
    if (N = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), O.has(ic)) {
      Kt();
      return;
    }
    if (O.has(tc))
      return;
    const ae = [];
    for (const ee of B) {
      if (ne(ee) > 0)
        continue;
      const [Q, Z] = Bs(ee), ie = wa(e, Q, Z)?.onRemove ?? s.get(ee), De = o.get(ee) ?? "";
      if (Pe(ee, Q, Z), !(!ie || a.has(ee) || j.has(ee))) {
        a.add(ee), Ep(e, Q, Z, !0);
        for (const Je of H.get(ee) ?? [])
          oS(Je, Q, Z);
        try {
          ie(Q, Z, "destroyed", De);
        } catch (Je) {
          ae.push(Je);
        }
      }
    }
    for (const ee of ae)
      queueMicrotask(() => e._onError(ee instanceof Error ? ee : new Error(String(ee))));
  }
  function Qr(O, B) {
    sr();
    const j = Tr(O, B);
    a.delete(j), Ep(e, O, B, !1);
  }
  const Zr = ct(
    ...pA.filter((O) => e.hasNodes([O])).map((O) => e.registerMutationListener(O, nt, { skipInitialization: !1 })),
    e.hasNodes([ut]) ? e.registerMutationListener(ut, br, {
      skipInitialization: !1
    }) : () => {
    },
    nS(e),
    e.registerUpdateListener(Ee),
    iM(e, [qt, cr]),
    e.registerUpdateListener(({ dirtyLeaves: O, dirtyElements: B }) => {
      Y?.noticeStylesheetChanges(), !(O.size === 0 && B.size === 0) && (Fe([...O, ...B.keys()]), R?.takeRecords());
    }),
    // Also paints what the mutation listeners above found already in the document.
    e.registerRootListener((O) => {
      ce(O), O && Fe([...m.keys()]);
    }),
    () => {
      w = !0, d.abort(), Y?.dispose(), R?.disconnect();
    },
    e.registerCommand(
      Ov,
      ({ nodes: O }) => (O.forEach(tk), !1),
      // Critical, and never handling the command, so a handler that does handle it cannot skip the
      // strip.
      _r
    )
  );
  return {
    index: {
      keysFor: (O, B) => t.get(Tr(O, B)) ?? ek,
      noteSet: Qr,
      noteReported: oe,
      hasReported: (O, B) => (sr(), a.has(Tr(O, B))),
      setStateClass: te,
      rangesFor: yt
    },
    references: 0,
    unregister: Zr
  };
}
function mA(e) {
  let t = cl.get(e);
  t || (t = gA(e), cl.set(e, t)), t.references++;
  const r = t;
  let n = !1;
  return {
    index: r.index,
    release: () => {
      n || (n = !0, r.references--, !(r.references > 0) && (r.unregister(), cl.delete(e)));
    }
  };
}
function rk(e) {
  const t = ue(void 0);
  return Ss(() => {
    const r = mA(e);
    return t.current = r.index, () => {
      t.current = void 0, r.release();
    };
  }, [e]), rt(() => ({
    keysFor: (r, n) => t.current?.keysFor(r, n) ?? ek,
    noteSet: (r, n) => t.current?.noteSet(r, n),
    noteReported: (r, n) => t.current?.noteReported(r, n),
    setStateClass: (r, n, i, s) => t.current?.setStateClass(r, n, i, s),
    rangesFor: (r, n) => t.current?.rangesFor(r, n) ?? [],
    hasReported: (r, n) => t.current?.hasReported(r, n) ?? !1
  }), []);
}
function oo(e, t) {
  return `${e}:${t}`;
}
function yA(e, t) {
  J(() => {
    if (!e.hasNodes([ut]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return ct(Yu(e, ut, (n) => Ci(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((f) => {
          const d = s[l]?.[f], p = o[l]?.[f], h = a[l]?.[f], m = c[l]?.[f];
          i.addID(l, f, d, p, h, m);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(ut, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = X(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : pe(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!ut.isReservedType(c))
              for (const u of l) {
                let f = t.get(oo(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? f !== void 0 && (f.delete(i), f.size === 0 && t.delete(oo(c, u))) : (f === void 0 && (f = /* @__PURE__ */ new Set(), t.set(oo(c, u), f)), f.has(i) || f.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const bA = Oi(function({ logger: t, viewOptions: r }, n) {
  const [i] = Te(), s = rt(() => /* @__PURE__ */ new Map(), []);
  yA(i, s);
  const o = rk(i), a = (c, l, u) => {
    const f = Array.from(u ?? s.get(oo(c, l)) ?? []);
    qm(c, l, f);
    const d = [];
    for (const h of Array.from(o.keysFor(c, l))) {
      const m = X(h);
      if (!m)
        continue;
      const g = Bn(m).filter((k) => k.type === c && k.id === l);
      Qy(m, c, l) && d.push(...g.map((k) => Bl(m, k)));
    }
    const p = wa(i, c, l);
    Zy(i, c, l), d.length > 0 && p && f.length === 0 && !o.hasReported(c, l) && (o.noteReported(c, l), p.onRemove?.(c, l, "removed", d.join("")));
  };
  return Uu(n, () => ({
    setAnnotation(c, l, u, f, d, p, h) {
      if (ut.isReservedType(l))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${l}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const m = /* @__PURE__ */ new Map(), g = xc(c, r, {
          forAnnotation: !0,
          decoratorHolds: m
        });
        if (g === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        a(l, u), o.noteSet(l, u), Rf(g, l, u, f, d, p, h, { decoratorHolds: m });
      }, { tag: Pl });
    },
    removeAnnotation(c, l) {
      if (ut.isReservedType(c))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      const u = s.get(oo(c, l));
      (u === void 0 || u.size === 0) && o.keysFor(c, l).size === 0 || i.update(() => {
        a(c, l, u);
      }, { tag: Pl });
    },
    getAnnotationRanges(c, l) {
      return o.rangesFor(c, l);
    }
  })), null;
});
function kA({ dirtyElements: e, dirtyLeaves: t, prevEditorState: r, tags: n }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  n.has(am) && !n.has(Sm) || i.ignoreTags.some((s) => n.has(s)) || r.isEmpty();
}
function xA(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new is();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = X(i), o = s !== null && jr(s) !== void 0;
    if (t.size === 1 && v(s) && !o && mE(s)) {
      const a = kb(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const f = X(i);
          return new is([v(f) ? Xl(f) : { insert: "" }]);
        }), l = new is([Xl(s)]), u = new is(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = sh(r), c = sh(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function TA(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += vA(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), SA(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += _A(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), EA(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function vA(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), CA(t, e.retain, e.attributes, r, n)), e.retain);
}
function CA(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = _e();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Pn(u)) {
      const f = u.getTextContentSize();
      if (e < o + f && o < e + t) {
        const d = Math.max(0, e - o), p = f - d, h = Math.min(s, p);
        if (h > 0) {
          let m = u;
          const g = d > 0, k = h < f - d;
          if (g && k) {
            const [, b] = u.splitText(d);
            [m] = b.splitText(h);
          } else g ? [, m] = u.splitText(d) : k && ([m] = u.splitText(h));
          if (Jn(r)) {
            const b = m.getParent();
            if (U(b)) {
              const C = r.char;
              let R;
              Array.isArray(C) ? a >= 0 && a <= C.length - 1 && (R = C[a]) : a === 0 && (R = C);
              const w = R ? _i(R, b) : !1;
              if (w && Array.isArray(C) && C.length > 1) {
                const F = $e("");
                m.replace(F);
                const Y = typeof r.segment == "string" ? r.segment : void 0, N = Os(C.slice(1), n, m, Y);
                let W = F;
                for (const ne of N)
                  W.insertAfter(ne), W = ne;
                F.remove(), vr(r, m);
              } else if (w)
                vr(r, m);
              else {
                m.remove();
                const F = Ch(m, r, n, i);
                if (F && F.length > 0) {
                  let Y = b;
                  for (const N of F)
                    Y.insertAfter(N), Y = N;
                }
              }
            } else {
              const C = $e("");
              m.replace(C);
              const R = Ch(m, r, n, i);
              if (R && R.length > 0) {
                let w = C;
                for (const F of R)
                  w.insertAfter(F), w = F;
                C.remove();
              } else
                C.replace(m);
            }
          } else
            vr(r, m);
          s -= h;
        }
      }
      o += f;
    } else if (lr(u))
      e <= o && o < e + t && s > 0 && (Sh(u, r), s -= 1), o += 1;
    else if (U(u)) {
      a += 1;
      let f = !1;
      if (e <= o && o < e + t && s > 0)
        if (Jn(r)) {
          const d = r.char;
          let p;
          if (Array.isArray(d) ? a >= 0 && a <= d.length - 1 && (p = d[a]) : a === 0 && (p = d), p) {
            iu(u, p.style), typeof p.cid == "string" && $t(u, Si, () => p.cid);
            const h = lt(p, $a);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || qA(r.char)) && (f = !0);
      if (s > 0) {
        const d = u.getChildren();
        for (const p of d) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return f && El(u), !0;
        }
      }
      f && El(u), a -= 1;
    } else if (Nr(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const d = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!bt(u))
          Sh(u, r);
        else if (sd(r)) {
          const p = sk(r.para, n);
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
function Ch(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Os(t.char, r, e, i), o = s.find(U);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), vr(t, e);
    return;
  }
  const a = {};
  lk.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), vr(t, e), s;
}
function nk(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  M(r) ? (r.setMarker(t), r.setTextContent(ze(t))) : It(r) && r.getTextType() === "marker" && r.setTextContent(ze(t) + $);
}
function iu(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    M(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = U(e.getParent()), i = e.getFirstChild();
  It(i) && i.getTextType() === "marker" && i.getTextContent() === ze(r, n) && i.setTextContent(ze(t, n));
  const s = e.getLastChild();
  It(s) && s.getTextType() === "marker" && s.getTextContent() === ot(r, n) && s.setTextContent(ot(t, n));
}
function Sh(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && U(e) && Jn(t)) {
      const i = su(n);
      if (iu(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        $t(e, Si, () => o);
      }
      const s = lt(i, $a);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (at(e) || Ne(e) || Ie(e) || L(e) || Ge(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Mt(e) || ge(e) || U(e)) && (r === "style" && ge(e) ? nk(e, n) : r === "style" && U(e) ? iu(e, n) : r === "code" && Mt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && $t(e, Hn, () => n));
  }
}
function SA(e, t, r) {
  if (t <= 0)
    return;
  const n = _e();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Pn(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, f = Math.min(s, u);
        f > 0 && (a.spliceText(l, f, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${f} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= f, c -= f);
      }
      i += c;
    } else if (lr(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Nr(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Nr(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Er(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ye(p)) {
            let h = i + 1;
            const m = p.getChildren();
            for (const k of m) {
              if (s <= 0)
                break;
              const b = i;
              if (i = h, o(k)) {
                i = b;
                break;
              }
              Pn(k) ? h += k.getTextContentSize() : lr(k) && (h += 1), i = b;
            }
            const g = p.getChildren();
            for (const k of g)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Er(), !0);
        } else ge(a) ? a.replace(Er(), !0) : a.remove();
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
  o(n), s > 0 && r?.warn(`Delete operation could not remove all requested characters. Remaining to delete: ${s}. Original targetIndex: ${e}, OT length: ${t}. Final currentIndex: ${i}`);
}
function _A(e, t, r, n, i) {
  if (t === Ao)
    return _h(e, r, n, i);
  if (t.endsWith(Ao) && !sd(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Jn(r))
        throw new Error("Text + LF should not have char attributes");
      o += La(e, s, r, i);
    }
    return o += _h(e + o, r, n, i), o;
  } else return Jn(r) ? MA(e, t, r, n, i) : La(e, t, r, i);
}
function MA(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = $e(t === "" ? Tt : t);
  vr(r, s);
  let o;
  {
    let g = function(k) {
      if (Pn(k)) {
        const b = k.getTextContentSize();
        if (e >= m && e < m + b) {
          const C = k.getParent();
          return U(C) && (o = C), !0;
        }
        m += b;
      } else if (lr(k))
        m += 1;
      else if (U(k)) {
        const b = k.getChildren();
        for (const C of b)
          if (g(C))
            return !0;
      } else if (A(k)) {
        const b = k.getChildren();
        for (const C of b)
          if (g(C))
            return !0;
        Nr(k) && (m += 1);
      }
      return !1;
    };
    const h = _e();
    let m = 0;
    g(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && _i(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (_i(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Os(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const f = u.find(U);
  if (!f)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), La(e, t, void 0, i);
  const d = {};
  for (const [h, m] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof m == "string" && (d[h] = m);
  Object.keys(d).length > 0 && f.setUnknownAttributes(d);
  let p = !0;
  for (const h of u)
    if (!ik(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), La(e, t, void 0, i));
}
function La(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = _e();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Pn(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, f = $e(t);
        if (vr(r, f), u === 0)
          c.insertBefore(f);
        else if (u === l) {
          const d = c.getParent();
          U(d) && !Jn(r) ? d.insertAfter(f) : c.insertAfter(f);
        } else {
          const [, d] = c.splitText(u);
          d.insertBefore(f);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (lr(c))
      s += 1;
    else if (U(c)) {
      if (!o && e === s) {
        const f = $e(t);
        vr(r, f);
        const d = c.getFirstChild();
        return d ? d.insertBefore(f) : c.append(f), n?.debug(`Inserted text "${t}" at beginning of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const u = c.getChildren();
      for (const f of u) {
        if (a(f))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const f = $e(t);
        return vr(r, f), c.append(f), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Nr(c)) {
      if (!o && e === s) {
        const f = $e(t);
        vr(r, f);
        const d = c.getFirstChild();
        return d ? d.insertBefore(f) : c.append(f), n?.debug(`Inserted text "${t}" at beginning of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const u = c.getChildren();
      for (const f of u) {
        if (a(f))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const f = $e(t);
        return vr(r, f), c.append(f), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    n?.debug(`Insertion point matches end of document (targetIndex: ${e}, final currentIndex: ${s}). Appending text to new ParaNode.`);
    const c = $e(t);
    vr(r, c);
    const l = Er().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function ik(e, t, r) {
  const n = _e();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Er().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!A(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Ye(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Er().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Pn(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const f = e - i, [d] = l.splitText(f);
          return d.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${f}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (lr(l))
        i += 1;
      else if (U(l)) {
        if (o(l))
          return !0;
      } else if (Nr(l)) {
        const u = l;
        if (o(u))
          return !0;
        const f = i;
        if (bt(u) && Nr(t) && // Target is at the ImpliedPara's implicit newline
        e === f && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = f + 1, s = !0, !0;
        i += 1;
      } else if (A(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return A(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Er().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ye(a) ? bt(a) && ge(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ye(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ye(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function EA(e, t, r, n, i) {
  let s;
  return Un("chapter", t) ? s = PA(t.insert.chapter, r) : Un("verse", t) ? s = wA(t.insert.verse, r) : Un("ms", t) ? s = NA(t.insert.ms) : Un("note", t) ? s = ok(t, r, n, i) : Un("unknown", t) ? s = ak(t, r, n, i) : Un("unmatched", t) && (s = RA(t.insert.unmatched, r)), s ? ik(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function _h(e, t, r, n) {
  let i;
  sd(t) ? i = sk(t.para, r) : IA(t) && (i = AA(t.book)), i ??= Er();
  const s = i, o = ge(s), a = bt(s);
  let c = 0, l = !1;
  function u(f) {
    if (l)
      return !0;
    if (Pn(f)) {
      const d = f.getTextContentSize();
      if (e >= c && e <= c + d) {
        const p = f.getParent();
        if (ge(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [m] = h > 0 ? f.splitText(h) : [void 0];
          let g, k = m?.getPreviousSibling();
          for (; k; ) {
            const b = k;
            k = k.getPreviousSibling(), g ? g.insertBefore(b) : s.append(b), g = b;
          }
          return m && s.append(m), p.insertBefore(s), l = !0, !0;
        }
      }
      c += d;
    } else if (lr(f))
      c += 1;
    else if (Nr(f)) {
      const d = f.getChildren();
      for (const p of d) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (bt(f) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${f.getKey()}) with ParaNode at targetIndex ${e}`), f.replace(s, !0), l = !0, !0;
        if (ge(f) && s) {
          const p = f;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ge(f) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${f.getMarker()}) at targetIndex ${e}`), f.insertAfter(s), l = !0, !0;
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
  return u(_e()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function AA(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Co || !r || !wr.isValidBookCode(r))
    return;
  const n = lt(e, iE);
  return iy(r, n);
}
function sk(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = lt(e, nE), i = _o(r, n);
  if (!Ns(t))
    return i;
  if (t.markerMode === "editable")
    i.append(_t(r), Mi());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = ze(r) + $;
    i.append(t.hasGutterParaMarkers ? BS(s) : Mn("marker", s));
  }
  return i;
}
function PA(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = lt(e, sE);
  let a;
  if (t.markerMode === "editable")
    a = ty(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = yf(r, c, n, i, s, o);
  }
  return a;
}
function wA(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = lt(e, oE);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Mr(r, n);
    c = jm(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Uf(n, l, i, s, o, a);
  }
  return c;
}
function NA(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = lt(e, aE);
  return Am(t, r, n, s, i);
}
function ok(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = lt(i.note, cE), u = typeof l?.closed == "string" ? l.closed : void 0, f = e.attributes?.segment;
  let d;
  f && typeof f == "string" && (d = f);
  const p = [];
  for (const m of c?.ops ?? [])
    if (typeof m.insert == "string")
      if (Jn(m.attributes)) {
        const g = Os(m.attributes.char, t, $e(m.insert), void 0, ck(m.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...g);
      } else
        p.push($e(m.insert));
  return Vb(s, o, p, t, r, d, u).setCategory(a).setUnknownAttributes(l);
}
function ak(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = lt(i, lE), l = cf(s, o, c), u = a?.ops ?? [];
  u.length > 0 && OA(u, t, r, n).forEach((p) => l.append(p));
  const f = e.attributes?.segment;
  return typeof f == "string" && $t(l, Hn, () => f), l;
}
function OA(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Jn(s.attributes)) {
        const o = $e(s.insert), a = Os(s.attributes.char, t, o, void 0, ck(s.attributes.char, i));
        i.push(...a);
      } else
        i.push($e(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Un("unknown", s)) {
        const o = ak(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Un("note", s)) {
        const o = ok(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function RA(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Sf(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function ck(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function su(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Os(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(Tt);
  const a = () => {
    o && v(r) && r.getTextContent() !== Tt && r.setTextContent($ + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(su), l = c[0], u = i?.[i.length - 1];
    if (U(u) && _i(l, u))
      return c.length > 1 ? Os(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const f = c.reduceRight((d, p, h) => {
      const m = _n(p.style, lt(p, $a));
      if (typeof p.cid == "string" && $t(m, Si, () => p.cid), n && h === c.length - 1 && $t(m, Hn, () => n), d)
        if (U(d)) {
          const g = d.getMarker(), k = [];
          ul(g, k, t, !0), k.forEach((C) => m.append(C)), m.append(d);
          const b = [];
          ll(d, b, t, !0), b.forEach((C) => m.append(C));
        } else
          m.append(d);
      return m;
    }, r);
    return ul(l.style, f, t, s), ll(f, f, t, s), [f];
  } else {
    const c = su(e), l = i?.[i.length - 1];
    if (U(l) && _i(c, l))
      return r && l.append(r), [];
    a();
    const u = _n(c.style, lt(c, $a));
    return typeof c.cid == "string" && $t(u, Si, () => c.cid), n && $t(u, Hn, () => n), r && u.append(r), ul(c.style, u, t, s), ll(u, u, t, s), [u];
  }
}
function ll(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && $A(e.getMarker(), t, r, !1, n);
}
function ul(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = _t(e, "opening", n) : r?.markerMode === "visible" && (i = Mn("marker", ze(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function $A(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = _t("", "selfClosing") : s = _t(e, "closing", i) : r?.markerMode === "visible" && (s = Mn("marker", n ? ot("") : ot(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function IA(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function sd(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Jn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function qA(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function vr(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        $t(t, Hn, () => n);
        continue;
      }
      if (LA(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const lk = [
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
function LA(e) {
  return lk.includes(e);
}
function DA() {
  const [e] = Te();
  return J(() => e.registerCommand(rc, (t) => (UA(t), !1), xi), [e]), null;
}
function UA(e) {
  if (KA(e.target))
    return;
  const t = P();
  E(t) && FA(t);
}
function Rs(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Rr(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === $ && (r++, t = t.getNextSibling());
    else if (Ne(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (dn(e, r), !0);
}
function KA(e) {
  if (!cm(e))
    return !1;
  const t = $i(e);
  if (!zS(t))
    return !1;
  const r = t.getParent();
  return r ? Ye(r) ? Rs(r) : (dn(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function FA(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = X(t.key);
  if (!Ye(r))
    return !1;
  const n = r.getFirstChild();
  return !Or(n) && !mn(n) ? !1 : Rs(r);
}
function BA() {
  const [e] = Te();
  return J(() => {
    const t = (r) => r instanceof KeyboardEvent && !zA(r) || !_c() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return ct(
      e.registerCommand(On, t, et),
      e.registerCommand(Vu, t, et),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(kn, t, _r),
      e.registerCommand(Ti, t, _r),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Wu, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = $i(r.target);
        return !n || !Yn(n) ? !1 : (r.preventDefault(), !0);
      }, et),
      e.registerCommand(Rv, t, et),
      e.registerCommand($v, t, et),
      e.registerCommand(Iv, t, et)
    );
  }, [e]), null;
}
function zA(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Yn(e) {
  return St(e, (t) => Ge(t) || cy(t)) ?? void 0;
}
function _c() {
  const e = P();
  return E(e) ? Yn(e.anchor.getNode()) !== void 0 || Yn(e.focus.getNode()) !== void 0 : !1;
}
function jA(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function VA(e, t) {
  if (typeof window > "u")
    return !1;
  const r = window.getSelection();
  if (!r || r.rangeCount === 0)
    return !1;
  const n = e.getRootElement();
  if (!n)
    return !1;
  try {
    const i = r.getRangeAt(0);
    if (!n.contains(i.startContainer))
      return !1;
    const s = i.getBoundingClientRect(), o = i.cloneRange();
    o.collapse(!0);
    const a = Array.from(n.querySelectorAll('[data-marker="v"]'));
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), jA(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function WA(e, t, r, n) {
  if (!oP(t) || VA(e, r))
    return !1;
  const i = r === "up" ? rE(t) : tE(t);
  return i && n.preventDefault(), i;
}
function HA({ viewOptions: e }) {
  const [t] = Te();
  return GA(t, e), null;
}
function GA(e, t) {
  J(() => {
    if (!e.hasNodes([gr, qt, Qe]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = P();
      if (!E(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Mh(o), f = tP(i, Eh(u, n.key) ? "next" : "previous");
        return f && n.preventDefault(), f;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return WA(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Mh(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Eh(a, n.key) ? l = !c && wh(i, "next") || !c && YA(i) || iP(i) || !c && s && Ph(i, "next") : JA(a, n.key) && (l = !c && wh(i, "previous") || !c && XA(i) || sP(i, t) || !c && s && Ph(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(On, r, et);
  }, [e, t]);
}
function Mh(e) {
  return e.dir || "ltr";
}
function Eh(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function JA(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function ou(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = jr(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function YA(e) {
  const t = ou(Oy(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (dn(t, 0), !0);
}
function XA(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = ou(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Ah(n);
  }
  if (t.offset === 0) {
    const n = ou(r);
    return n ? Ah(n) : !1;
  }
  return !1;
}
function Ah(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (v(t))
    return t.select(), !0;
  if (A(t)) {
    const i = t.getLastDescendant();
    return v(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Da = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function QA(e) {
  if (Da)
    for (const { segment: r } of Da.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function ZA(e) {
  if (Da) {
    let n = 0;
    for (const { index: i } of Da.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function uk(e) {
  for (let t = e; t; t = t.getParent())
    if (A(t) && !t.isInline())
      return t;
}
function fk(e) {
  return !!e && M(e) && Yn(e) !== void 0;
}
function ks(e) {
  return v(e) && !e.isToken() && !fk(e) && e.getTextContentSize() > 0;
}
function dk(e) {
  return Lo(e) ? !0 : L(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || fk(e)) && e.getTextContentSize() > 0 : Gr(e) ? !Ie(e) : !1;
}
function xs(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Mc(e, t, r) {
  for (let n = e; n; ) {
    if (dk(n))
      return n;
    if (A(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? xs(n, t, r);
      continue;
    }
    if (ks(n))
      return n;
    n = xs(n, t, r);
  }
}
function od(e, t, r, n, i) {
  return r === "element" && A(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? xs(e, n, i) : r === "text" && dk(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : xs(e, n, i);
}
function fl(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = od(e.node, e.offset, e.kind, "previous", t), n = Mc(r, "previous", t);
  if (!n)
    return e;
  if (ks(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function eP(e, t) {
  const r = e.getNode(), n = uk(r);
  if (!n)
    return;
  if (e.type === "text" && ks(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return fl({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = od(r, e.offset, e.type, t, n), s = Mc(i, t, n);
  if (!s)
    return;
  if (ks(s)) {
    const c = s.getTextContent(), l = t === "next" ? QA(c) : ZA(c);
    return fl({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return fl({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function pk(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = eP(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Ph(e, t) {
  return pk(e, t, "collapse");
}
function tP(e, t) {
  return pk(e, t, "extend");
}
function rP(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && ks(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = od(n, e.offset, e.type, t, r);
  return Mc(i, t, r) === void 0;
}
function nP(e, t) {
  const r = _e();
  for (let n = e; n; ) {
    const i = xs(n, t, r), s = i && Mc(i, t, r);
    if (!s)
      return;
    if (n = Yn(s), !n)
      return s;
  }
}
function wh(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Yn(n))
    return !1;
  const i = uk(n);
  if (!i || !rP(r, t, i))
    return !1;
  const s = xs(i, t, _e()), o = s && Yn(s);
  if (!o)
    return !1;
  const a = nP(o, t);
  if (!a)
    return !0;
  if (ks(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Nh(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function iP(e) {
  const t = e.anchor.getNode(), r = Oy(e);
  if (L(r) && !M(r.getFirstChild())) {
    if (Ye(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Ye(i) && Rs(i)) && i.selectStart(), !0;
      }
    } else return It(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ye(t) && L(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Nh(r), !0;
  }
  const n = r?.getParent();
  if (It(r) && L(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Nh(n) : n.selectEnd(), !0;
  }
  return !1;
}
function sP(e, t) {
  const r = w_(e);
  if ($n(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (Mt(i.getParent()))
    return !0;
  if (L(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!mn(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Ye(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = St(o, (c) => L(c));
    if (L(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = jr(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (Lt(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function oP(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Ne(t) && Gr(t);
}
function aP() {
  const [e] = Te();
  return cP(e), null;
}
function cP(e) {
  J(() => {
    if (!e.hasNodes([Ue]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return ct(
      e.registerNodeTransform(Ue, fP),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(Ue, RS),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(Ue, gy),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(Ue, (t) => Eo(En("char"), t)),
      e.registerNodeTransform(Xe, dP)
    );
  }, [e]);
}
function pa(e) {
  return e.getChildren().some(M);
}
function lP(e, t) {
  const r = t.getFirstChild();
  if (!M(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Li(n)) {
    const i = n.getTextContent();
    i.startsWith($) && (i === $ ? n.remove() : n.setTextContent(i.slice($.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function uP(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  M(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function fP(e) {
  if (!U(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (pa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = fe(e, Si), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && _i({ style: t, cid: r }, i) && an(n, i.getUnknownAttributes()))
    if (pa(i)) {
      if (lP(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && _i({ style: t, cid: r }, s) && an(n, s.getUnknownAttributes()) && (pa(s) ? uP(e, s) : (s.append(...e.getChildren()), e.remove()));
}
const hk = /* @__PURE__ */ new WeakSet();
function dP(e) {
  const t = e.getParent();
  if (!U(t) || pa(t) || hk.has(e))
    return;
  const r = e.getTextContent();
  if (r.length < 2 || !r.includes(Tt))
    return;
  const n = hP(t.getKey());
  if (n === void 0) {
    t.getChildrenSize() === 1 && r.startsWith(Tt) && Oh(e, 0);
    return;
  }
  if (n !== e.getKey())
    return;
  const i = pP(e, r);
  i !== void 0 && Oh(e, i);
}
function pP(e, t) {
  const r = P();
  if (E(r) && r.isCollapsed() && r.anchor.key === e.getKey()) {
    const { offset: n } = r.anchor;
    if (n === t.length && t.startsWith(Tt))
      return 0;
    if (t[n] === Tt)
      return n;
  }
  if (t.startsWith(Tt))
    return 0;
  if (t.endsWith(Tt))
    return t.length - 1;
}
function Oh(e, t) {
  const r = P(), n = E(r) ? [r.anchor, r.focus].filter((a) => a.type === "text" && a.key === e.getKey()) : [], i = n.map((a) => a.offset), s = e.getTextContent(), o = e.setTextContent(s.slice(0, t) + s.slice(t + 1));
  hk.add(o), n.forEach((a, c) => {
    const l = i[c];
    a.set(o.getKey(), l > t ? l - 1 : l, "text");
  });
}
function hP(e) {
  return jt().getEditorState().read(() => {
    const t = X(e);
    if (!U(t))
      return;
    const r = t.getChildren().filter((i) => !Gr(i)), [n] = r;
    return r.length === 1 && v(n) && n.getTextContent() === Tt ? n.getKey() : null;
  });
}
function gk(e) {
  return e.replaceAll("	", " ");
}
function mk() {
  const e = P();
  return !!e && !e.isCollapsed();
}
function yk(e) {
  const t = () => !mk();
  return ct(e.registerCommand(nc, t, Bt), e.registerCommand(Ti, t, Bt));
}
const ad = (e) => {
  e.dispatchCommand(nc, null);
}, cd = (e) => {
  e.dispatchCommand(Ti, null);
}, ld = (e) => {
  navigator.clipboard.read().then(async (t) => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const n = new DataTransfer(), i = t[0];
    for (const o of i.types) {
      const a = await (await i.getType(o)).text();
      n.setData(o, gk(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(kn, s);
  });
}, ud = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", gk(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(kn, i);
  });
};
function gP() {
  const [e] = Te();
  return J(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(ka ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), ad(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), cd(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? ud(e) : ld(e)));
    };
    return ct(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      yk(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function mP({ logger: e }) {
  const [t] = Te();
  return J(() => ct(
    // When the backslash or forward slash key is typed.
    t.registerCommand(On, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), ls),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(kn, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ls),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Wu, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ls)
  ), [t, e]), null;
}
function yP({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function bP({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(yP, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let kP = 0;
class zs {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${kP++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function xP({ options: e } = {}) {
  const [t] = Te(), [r, n] = Ae(() => !t.isEditable()), [i, s] = Ae({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = Ae(void 0), c = rt(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new zs("Cut", {
        onSelect: () => {
          cd(t);
        },
        isDisabled: r
      }),
      new zs("Copy", {
        onSelect: () => {
          ad(t);
        }
      }),
      new zs("Paste", {
        onSelect: () => {
          ld(t);
        },
        isDisabled: r
      }),
      new zs("Paste as Plain Text", {
        onSelect: () => {
          ud(t);
        },
        isDisabled: r
      })
    ], d = (e ?? []).map((p) => new zs(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...f, ...d];
  }, [t, r, e]), l = Se(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  J(() => yk(t), [t]), J(() => {
    const f = (d) => {
      const p = d.target;
      t.getRootElement() === p || My(p) || (d.preventDefault(), s({ isOpen: !0, x: d.clientX, y: d.clientY }), a(void 0));
    };
    return t.registerRootListener((d, p) => {
      p?.removeEventListener("contextmenu", f), d && d.addEventListener("contextmenu", f);
    });
  }, [t]), J(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      l();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, l]), J(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      l();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, l]), J(() => {
    if (!i.isOpen)
      return;
    const f = (d) => {
      if (d.key === "Escape")
        l();
      else if (d.key === "ArrowDown")
        d.preventDefault(), d.stopPropagation(), a((p) => p === void 0 ? 0 : (p + 1) % c.length);
      else if (d.key === "ArrowUp")
        d.preventDefault(), d.stopPropagation(), a((p) => p === void 0 ? c.length - 1 : (p - 1 + c.length) % c.length);
      else if (d.key === "Enter" && o !== void 0) {
        d.preventDefault(), d.stopPropagation();
        const p = c[o];
        p && !p.isDisabled && (t.update(() => {
          p.onSelect();
        }), l());
      }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, l, c, o, t]), J(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]);
  const u = ue(null);
  return Ss(() => {
    const f = u.current;
    if (!f)
      return;
    const { width: d, height: p } = f.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - d)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    f.style.left = `${h}px`, f.style.top = `${m}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? nC.createPortal(_("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: _(bP, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), l());
  }, onOptionMouseEnter: (f) => {
    a(f);
  } }) }), document.body) : null;
}
function TP(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function vP(e) {
  if (!Uv(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function CP(e) {
  return Lt(e);
}
function dl(e, t, r) {
  const n = $i(t.node);
  if (!Gr(n) || CP(n))
    return;
  const i = e.getElementByKey(n.getKey());
  if (!i || i === t.node || !i.contains(t.node))
    return;
  const s = i.parentNode;
  if (!s)
    return;
  const o = Array.prototype.indexOf.call(s.childNodes, i);
  if (!(o < 0))
    return { node: s, offset: r === "before" ? o : o + 1 };
}
function SP(e, t) {
  if (P())
    return !1;
  const r = e.getRootElement(), n = qv(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Lv(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, f;
  if (n.isCollapsed)
    u = dl(e, c, vP(c)), f = u;
  else {
    const g = TP(n.getRangeAt(0), c);
    u = dl(e, c, g ? "before" : "after"), f = dl(e, l, g ? "after" : "before");
  }
  if (!u && !f)
    return !1;
  const d = u ?? c, p = f ?? l, h = {
    anchorNode: d.node,
    anchorOffset: d.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, m = Dv(h, e);
  return m ? (Sn(m), m.dirty = !t, t) : !1;
}
function _P() {
  const [e] = Te(), t = ue(!1), r = ue(!1);
  return J(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = P();
        E(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), J(() => e.registerCommand(Br, () => (SP(e, t.current) && (r.current = !0), !1), _r), [e]), null;
}
function MP() {
  const [e] = Te();
  return J(() => e.registerCommand(On, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(ka ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, _r), [e]), null;
}
function EP({ isEditable: e }) {
  const [t] = Te();
  return Ss(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Rh(e) {
  return !!e && kf(X(e));
}
function bk(e) {
  const [t] = Te(), r = ue(void 0), n = Se((i) => {
    let s = !1;
    const o = P(), a = E(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = Rh(c);
    c && !l && (r.current = void 0);
    let u;
    if (i) {
      const f = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, p = gc(f, d);
      if (p)
        r.current = p.getKey(), u = p.getKey();
      else {
        const h = M_();
        i.insertAfter(h), r.current = h.getKey(), u = h.getKey(), s = !0;
      }
      dn(f, d);
    }
    if (c && l && c !== a && c !== u) {
      const f = X(c);
      v(f) && (f.remove(), s = !0), r.current === c && (r.current = void 0);
    }
    return s;
  }, []);
  return J(() => {
    const i = () => {
      const a = e(), c = P(), l = E(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && n(a) && cn(yo);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Di(c) || !c.includes(gs))
        return;
      const l = P(), u = E(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (E_(a), r.current = void 0, u !== void 0) {
        const f = c.slice(0, u).split(gs).length - 1, d = Math.max(0, u - f);
        a.select(d, d);
      }
    }, o = ct(t.registerCommand(Br, () => (i(), !1), xi), t.registerCommand(Hu, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Rh(a);
      }), c && t.update(() => {
        const l = X(a);
        v(l) && (l.remove(), cn(yo));
      }), r.current = void 0, !1;
    }, xi), t.registerNodeTransform(Xe, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function AP() {
  const e = P();
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!A(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!Ne(i) || gc(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || Ne(s))
    return i;
}
function PP() {
  return bk(AP), null;
}
function wP({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = Te();
  return J(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), J(() => {
    const a = t?.current ?? e;
    n.reset?.();
    const c = n.serializeEditorState(a, i);
    if (c == null) {
      s?.warn("LoadStatePlugin: serializedEditorState was null or undefined. Skipping editor update.");
      return;
    }
    try {
      const l = o.parseEditorState(c);
      queueMicrotask(() => {
        const u = o.getRootElement(), f = u?.ownerDocument.activeElement, d = u != null && f != null && (u === f || u.contains(f));
        o.update(() => {
          d || cn(Kv), o.setEditorState(l), o.dispatchCommand(Fv, void 0);
        }, { tag: ic });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function NP({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = Te();
  return OP(t, n), RP(i, e, r, n), null;
}
function OP(e, t) {
  const r = ue(void 0), n = ue(void 0), i = e.noteCallers, s = e.crossRefCallers;
  J(() => {
    let o = i;
    (!o || o.length <= 0) && (o = KE), r.current !== o && (r.current = o, $h("note-callers", o, t));
  }, [t, i]), J(() => {
    let o = s;
    (!o || o.length <= 0) && (o = FE), n.current !== o && (n.current = o, $h("cross-ref-callers", o, t));
  }, [t, s]);
}
function RP(e, t, r, n) {
  J(() => {
    if (!e.hasNodes([Ue, Qe, cr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => FP(s));
    return ct(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Qe, (s) => $P(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(Ue, qP),
      e.registerNodeTransform(Xe, LP),
      // Ensure a separator after the caller.
      e.registerNodeTransform(cr, DP),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(cr, (s, { prevEditorState: o }) => UP(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Br, () => KP(e, t, r, n), Bt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function $P(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Lt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !M(i) && i.getTextContent() !== gt(e.getCaller()) && e.insertBefore(i);
  }
}
function kk(e) {
  const t = e.getNextSibling();
  mr(t) || (v(t) && !M(t) && t.getTextContent() === $ ? t.replace(Mi()) : e.insertAfter(Mi()));
}
function IP(e) {
  const t = e.getTextContent(), r = t.indexOf($), n = r < 0 ? t : t.slice(0, r) + t.slice(r + 1);
  if (e.setTextContent($), !n) {
    e.selectEnd();
    return;
  }
  const i = $e(n);
  e.insertAfter(i), i.selectEnd();
}
function qP(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => Lt(s));
  if (!U(e) || !L(t) || !n)
    return;
  const i = xf(r);
  n.getPreviewText() !== i && n.setPreviewText(i), kk(e);
}
function LP(e) {
  const t = jr(e), r = t?.getChildren(), n = r?.find((o) => Lt(o));
  if (!v(e) || !L(t) || !n || !r)
    return;
  const i = e.getParent();
  if (L(i) && mr(e) && e.getTextContent() !== $ && IP(e), U(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Tt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = xf(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function DP(e) {
  Lt(e) && kk(e);
}
function UP(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = X(r), a = o?.getParent();
      return Lt(o) && L(a) && a.getCaller() === mo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function KP(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = P();
  if (!E(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = St(o, (c) => L(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = X(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), js(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (L(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, js(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (L(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, js(e, c, n);
    } else if (!a) {
      const c = St(o, (l) => L(l));
      if (c && c.getIsCollapsed() && Ye(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, js(e, l, n);
      }
    }
  }
  if (Ye(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (mn(c) && L(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, js(e, l, n);
    }
  }
  return !1;
}
function js(e, t, r) {
  const n = X(t);
  try {
    n?.toggleIsCollapsed();
  } catch (i) {
    if (i instanceof Error && i.message.includes("read only"))
      r?.warn("Fallback triggered after stabilization - edge case"), setTimeout(() => {
        e.update(() => {
          n?.toggleIsCollapsed();
        });
      }, 0);
    else
      throw i;
  }
}
function FP(e) {
  const t = P();
  if (!E(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (L(i) && v(s)) {
    e.preventDefault();
    const o = Do();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Sn(o);
  }
}
function $h(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (BP(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function BP(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Bi(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!M(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Vt(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function os(e) {
  if (e.getIsCollapsed() !== !1)
    return;
  const t = e.getLastChild();
  return M(t) && t.getMarkerSyntax() === "closing" && t.getMode() === "token" ? t : void 0;
}
function xk(e) {
  const t = e.getNode();
  if (e.type === "text") {
    const n = t.getParent();
    if (L(n) && os(n)?.is(t))
      return e.offset > 0 ? n : void 0;
    if (e.offset !== 0)
      return;
    const i = t.getPreviousSibling();
    return L(i) && os(i) ? i : void 0;
  }
  if (L(t)) {
    const n = os(t);
    return n && e.offset > n.getIndexWithinParent() ? t : void 0;
  }
  if (!A(t) || e.offset === 0)
    return;
  const r = t.getChildAtIndex(e.offset - 1);
  return L(r) && os(r) ? r : void 0;
}
function zP(e) {
  const t = e.getParent();
  if (L(t))
    return Bi(t).some((r) => r.is(e)) ? t : void 0;
}
function fd(e) {
  const t = Bi(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function Tk(e) {
  const t = e.getNode(), r = (i) => L(i) && Bi(i).length > 0;
  if (e.type === "text") {
    if (e.offset !== t.getTextContentSize())
      return;
    const i = t.getNextSibling();
    return r(i) ? i : void 0;
  }
  if (r(t))
    return e.offset < fd(t) ? t : void 0;
  if (!A(t))
    return;
  const n = t.getChildAtIndex(e.offset);
  return r(n) ? n : void 0;
}
function jP(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = zP(t);
  if (r)
    return VP(r, t, e.offset) ? void 0 : r;
}
function VP(e, t, r) {
  const n = Bi(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function WP(e) {
  const t = Bi(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : dn(e, fd(e));
}
function HP() {
  const e = P();
  if (!E(e))
    return !1;
  if (!e.isCollapsed())
    return JP(e);
  const t = xk(e.anchor), r = t && os(t);
  if (r)
    return r.select(0, 0), !0;
  const n = Tk(e.anchor) ?? jP(e.anchor);
  return n ? (WP(n), !0) : !1;
}
function Ih(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && Bi(t).length > 0)
      return t;
}
function GP(e) {
  for (const t of [e.anchor, e.focus]) {
    const r = Ih(t.getNode()) ?? Tk(t) ?? xk(t);
    if (r)
      return r;
  }
  for (const t of e.getNodes()) {
    const r = Ih(t);
    if (r)
      return r;
  }
}
function JP(e) {
  const t = GP(e);
  if (!t)
    return !1;
  const r = Bi(t), n = r[r.length - 1], i = v(n) ? Sr(n.getKey(), n.getTextContentSize(), "text") : Sr(t.getKey(), fd(t), "element"), s = os(t), o = s ? Sr(s.getKey(), 0, "text") : Sr(t.getKey(), t.getChildrenSize(), "element");
  let a = !1;
  for (const c of [e.anchor, e.focus]) {
    const l = c.isBefore(i) ? i : o.isBefore(c) ? o : void 0;
    !l || c.key === l.key && c.offset === l.offset || (c.set(l.key, l.offset, l.type), a = !0);
  }
  return a;
}
function YP() {
  const [e] = Te();
  return J(() => {
    const t = () => {
      HP() && e.dispatchCommand(Zu, void 0);
    };
    return ct(
      e.registerCommand(Br, () => (t(), !1), xi),
      // Select-all is the rich-text plugin's `$selectAll`, confined in the same update rather than
      // after the selection change it announces, which an edit may come before.
      e.registerCommand(Bv, () => (zv(), t(), !0), et)
    );
  }, [e]), null;
}
function XP({ onChange: e, viewOptions: t }) {
  const [r] = Te();
  return J(() => r.registerCommand(Br, () => {
    const n = Tc(t);
    return e?.(n), !1;
  }, Bt), [r, e, t]), null;
}
function QP() {
  const [e] = Te();
  return ZP(e), null;
}
function ZP(e) {
  J(() => {
    if (!e.hasNodes([Et]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Et, (t) => e1(t, e));
  }, [e]);
}
function e1(e, t) {
  Jl(t, e.getKey()) && bb(e.getFirstChild()), !(!ge(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = X(e.getKey());
    return ge(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function vk({ onStateChange: e }) {
  const [t] = Te(), [r, n] = Ae(t), i = ue(!1), s = ue(!1), o = ue(void 0), a = ue(void 0), c = Se(() => {
    const l = P();
    let u;
    if (E(l)) {
      const f = l.anchor.getNode(), d = l.focus.getNode();
      let p = f.getKey() === "root" ? f : St(f, (k) => {
        const b = k.getParent();
        return b !== null && Gu(b);
      });
      p === null && (p = f.getTopLevelElementOrThrow()), Ai(p) && (p = St(f, ge) ?? p);
      const h = p.getKey(), m = r.getElementByKey(h), g = O_(f, d);
      if (g && eE(g) && (u = g.getMarker()), m !== null && (ge(p) || Mt(p) || $n(p))) {
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
  }, [r, e]);
  return J(() => t.registerCommand(Br, (l, u) => (c(), n(u), !1), _r), [t, c]), J(() => ct(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(jv, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), _r), r.registerCommand(Vv, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), _r)), [c, r, e]), null;
}
function Ck(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Xn(e) {
  return e ? Ye(e) ? e : St(e, (r) => Ye(r)) ?? void 0 : void 0;
}
function Sk(e) {
  if (!E(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Xn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function dd(e) {
  return E(e) && e.isCollapsed() && e.anchor.type === "element" || !E(e) && !Bu(e) ? !1 : e.getNodes().some((t) => Ne(t));
}
function _k(e) {
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Xn(r);
  if (!n || t.offset !== 0)
    return !1;
  let i = r;
  for (; i && i.getKey() !== n.getKey(); ) {
    if (i.getPreviousSibling())
      return !1;
    i = i.getParent();
  }
  return !0;
}
function Mk(e) {
  if (!E(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Xn(r);
  if (!n)
    return !1;
  if (A(r)) {
    if (t.offset !== r.getChildrenSize())
      return !1;
  } else if (t.offset !== r.getTextContentSize())
    return !1;
  let i = r;
  for (; i && i.getKey() !== n.getKey(); ) {
    if (i.getNextSibling())
      return !1;
    i = i.getParent();
  }
  return !0;
}
function qh(e, t) {
  return !!au(e, t);
}
function au(e, t) {
  if (!E(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && A(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return Ne(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return Ne(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return Ne(i) ? i : void 0;
}
function Ua(e, t) {
  if (!E(e))
    return !1;
  const r = Xn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ds(e) {
  return dd(e) || Sk(e);
}
function Ek(e, t) {
  if (dd(e) || Sk(e))
    return !0;
  if (!E(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return _k(e) && Ua(e, "backward") || qh(e, "backward");
    case "deleteForward":
      return Mk(e) && Ua(e, "forward") || qh(e, "forward");
    case "insertText":
      return !1;
  }
}
function t1(e, t) {
  if (!(!E(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = au(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (_k(e) && Ua(e, "backward")) {
        const n = Xn(e.anchor.getNode());
        if (Ye(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = au(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Mk(e) && Ua(e, "forward")) {
        const i = Xn(e.anchor.getNode())?.getNextSibling();
        if (Ye(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Lh(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Bu(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!E(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!E(e) || e.isCollapsed())
    return !1;
  const r = Xn(e.anchor.getNode()), n = Xn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Ak(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else A(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function r1(e) {
  const t = e.getPreviousSibling();
  if (!Ye(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Ak(r) : Rs(t) || t.selectStart();
}
function Pk(e) {
  return Ne(e) || at(e) ? [] : Ye(e) ? e.getChildren().flatMap(Pk) : [e];
}
function n1(e) {
  const t = [];
  for (const r of e) {
    const n = Pk(r);
    n.length !== 0 && (Ye(r) && t.length > 0 && t.push($e(" ")), t.push(...n));
  }
  return t;
}
function Dh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function i1(e) {
  if (Array.isArray(e)) return e;
}
function s1(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, s, o, a = [], c = !0, l = !1;
    try {
      if (s = (r = r.call(e)).next, t !== 0) for (; !(c = (n = s.call(r)).done) && (a.push(n.value), a.length !== t); c = !0) ;
    } catch (u) {
      l = !0, i = u;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw i;
      }
    }
    return a;
  }
}
function o1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a1(e, t) {
  return i1(e) || s1(e, t) || c1(e, t) || o1();
}
function c1(e, t) {
  if (e) {
    if (typeof e == "string") return Dh(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Dh(e, t) : void 0;
  }
}
const wk = Object.entries, Uh = Object.setPrototypeOf, l1 = Object.isFrozen, u1 = Object.getPrototypeOf, f1 = Object.getOwnPropertyDescriptor;
let At = Object.freeze, wt = Object.seal, es = Object.create, Nk = typeof Reflect < "u" && Reflect, cu = Nk.apply, lu = Nk.construct;
At || (At = function(t) {
  return t;
});
wt || (wt = function(t) {
  return t;
});
cu || (cu = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
lu || (lu = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Yi = mt(Array.prototype.forEach), d1 = mt(Array.prototype.lastIndexOf), Kh = mt(Array.prototype.pop), Xi = mt(Array.prototype.push), p1 = mt(Array.prototype.splice), Fn = Array.isArray, Zs = mt(String.prototype.toLowerCase), pl = mt(String.prototype.toString), Fh = mt(String.prototype.match), Vs = mt(String.prototype.replace), Bh = mt(String.prototype.indexOf), h1 = mt(String.prototype.trim), g1 = mt(Number.prototype.toString), m1 = mt(Boolean.prototype.toString), zh = typeof BigInt > "u" ? null : mt(BigInt.prototype.toString), jh = typeof Symbol > "u" ? null : mt(Symbol.prototype.toString), xt = mt(Object.prototype.hasOwnProperty), Ws = mt(Object.prototype.toString), kt = mt(RegExp.prototype.test), ci = y1(TypeError);
function mt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return cu(e, t, n);
  };
}
function y1(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return lu(e, r);
  };
}
function we(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Zs;
  if (Uh && Uh(e, null), !Fn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (l1(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function b1(e) {
  for (let t = 0; t < e.length; t++)
    xt(e, t) || (e[t] = null);
  return e;
}
function Nt(e) {
  const t = es(null);
  for (const n of wk(e)) {
    var r = a1(n, 2);
    const i = r[0], s = r[1];
    xt(e, i) && (Fn(s) ? t[i] = b1(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = Nt(s) : t[i] = s);
  }
  return t;
}
function k1(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return g1(e);
    case "boolean":
      return m1(e);
    case "bigint":
      return zh ? zh(e) : "0";
    case "symbol":
      return jh ? jh(e) : "Symbol()";
    case "undefined":
      return Ws(e);
    case "function":
    case "object": {
      if (e === null)
        return Ws(e);
      const t = e, r = Lr(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Ws(n);
      }
      return Ws(e);
    }
    default:
      return Ws(e);
  }
}
function Lr(e, t) {
  for (; e !== null; ) {
    const n = f1(e, t);
    if (n) {
      if (n.get)
        return mt(n.get);
      if (typeof n.value == "function")
        return mt(n.value);
    }
    e = u1(e);
  }
  function r() {
    return null;
  }
  return r;
}
function x1(e) {
  try {
    return kt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Vh = At(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), hl = At(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gl = At(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), T1 = At(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ml = At(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), v1 = At(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Wh = At(["#text"]), Hh = At(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), yl = At(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Gh = At(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), na = At(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), C1 = wt(/{{[\w\W]*|^[\w\W]*}}/g), S1 = wt(/<%[\w\W]*|^[\w\W]*%>/g), _1 = wt(/\${[\w\W]*/g), M1 = wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), E1 = wt(/^aria-[\-\w]+$/), Jh = wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), A1 = wt(/^(?:\w+script|data):/i), P1 = wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), w1 = wt(/^html$/i), N1 = wt(/^[a-z][.\w]*(-[.\w]+)+$/i), Yh = wt(/<[/\w!]/g), Xh = wt(/<[/\w]/g), O1 = wt(/<\/no(script|embed|frames)/i), R1 = wt(/\/>/i), ar = {
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
}, $1 = function() {
  return typeof window > "u" ? null : window;
}, I1 = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const s = "dompurify" + (n ? "#" + n : "");
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
}, Qh = function() {
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
}, Ln = function(t, r, n, i) {
  return xt(t, r) && Fn(t[r]) ? we(i.base ? Nt(i.base) : {}, t[r], i.transform) : n;
};
function Ok() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $1();
  const t = (V) => Ok(V);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== ar.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, f = e.trustedTypes, d = a.prototype, p = Lr(d, "cloneNode"), h = Lr(d, "remove"), m = Lr(d, "nextSibling"), g = Lr(d, "childNodes"), k = Lr(d, "parentNode"), b = Lr(d, "shadowRoot"), C = Lr(d, "attributes"), R = o && o.prototype ? Lr(o.prototype, "nodeType") : null, w = o && o.prototype ? Lr(o.prototype, "nodeName") : null, F = o && o.prototype ? Lr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const V = r.createElement("template");
    V.content && V.content.ownerDocument && (r = V.content.ownerDocument);
  }
  let Y, N = "", W, ne = !1, D = 0;
  const ke = function() {
    if (D > 0)
      throw ci('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, he = function(y) {
    ke(), D++;
    try {
      return Y.createHTML(y);
    } finally {
      D--;
    }
  }, ve = function(y) {
    ke(), D++;
    try {
      return Y.createScriptURL(y);
    } finally {
      D--;
    }
  }, Me = function() {
    return ne || (W = I1(f, i), ne = !0), W;
  }, je = r, Ze = je.implementation, Gt = je.createNodeIterator, Ve = je.createDocumentFragment, Xr = je.getElementsByTagName, Jt = n.importNode;
  let Oe = Qh();
  t.isSupported = typeof wk == "function" && typeof k == "function" && Ze && Ze.createHTMLDocument !== void 0;
  const de = C1, q = S1, ce = _1, me = M1, Fe = E1, yt = A1, te = P1, nt = N1;
  let br = Jh, Pe = null;
  const sr = we({}, [...Vh, ...hl, ...gl, ...ml, ...Wh]);
  let oe = null;
  const Kt = we({}, [...Hh, ...yl, ...Gh, ...na]);
  let Ee = Object.seal(es(null, {
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
  })), Qr = null, Zr = null;
  const O = Object.seal(es(null, {
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
  let B = !0, j = !0, H = !1, ae = !0, ee = !1, Q = !0, Z = !1, ie = !1, De = null, Je = null, kr = !1, or = !1, yn = !1, ni = !1, I = !0, z = !1;
  const G = "user-content-";
  let le = !0, Be = !1, Ce = {}, qe = null;
  const dt = we({}, [
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
  let en = null;
  const Yt = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let xr = null;
  const tn = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ii = "http://www.w3.org/1998/Math/MathML", Yo = "http://www.w3.org/2000/svg", rn = "http://www.w3.org/1999/xhtml";
  let Vi = rn, Uc = !1, Kc = null;
  const cv = we({}, [ii, Yo, rn], pl), np = At(["mi", "mo", "mn", "ms", "mtext"]);
  let Fc = we({}, np);
  const ip = At(["annotation-xml"]);
  let Bc = we({}, ip);
  const lv = we({}, ["title", "style", "font", "a", "script"]);
  let Us = null;
  const uv = ["application/xhtml+xml", "text/html"], fv = "text/html";
  let it = null, Wi = null;
  const dv = r.createElement("form"), sp = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, zc = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Wi && Wi === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = Nt(y), Us = // eslint-disable-next-line unicorn/prefer-includes
    uv.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? fv : y.PARSER_MEDIA_TYPE, it = Us === "application/xhtml+xml" ? pl : Zs, Pe = Ln(y, "ALLOWED_TAGS", sr, {
      transform: it
    }), oe = Ln(y, "ALLOWED_ATTR", Kt, {
      transform: it
    }), Kc = Ln(y, "ALLOWED_NAMESPACES", cv, {
      transform: pl
    }), xr = Ln(y, "ADD_URI_SAFE_ATTR", tn, {
      transform: it,
      base: tn
    }), en = Ln(y, "ADD_DATA_URI_TAGS", Yt, {
      transform: it,
      base: Yt
    }), qe = Ln(y, "FORBID_CONTENTS", dt, {
      transform: it
    }), Qr = Ln(y, "FORBID_TAGS", Nt({}), {
      transform: it
    }), Zr = Ln(y, "FORBID_ATTR", Nt({}), {
      transform: it
    }), Ce = xt(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? Nt(y.USE_PROFILES) : y.USE_PROFILES : !1, B = y.ALLOW_ARIA_ATTR !== !1, j = y.ALLOW_DATA_ATTR !== !1, H = y.ALLOW_UNKNOWN_PROTOCOLS || !1, ae = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = y.SAFE_FOR_TEMPLATES || !1, Q = y.SAFE_FOR_XML !== !1, Z = y.WHOLE_DOCUMENT || !1, or = y.RETURN_DOM || !1, yn = y.RETURN_DOM_FRAGMENT || !1, ni = y.RETURN_TRUSTED_TYPE || !1, kr = y.FORCE_BODY || !1, I = y.SANITIZE_DOM !== !1, z = y.SANITIZE_NAMED_PROPS || !1, le = y.KEEP_CONTENT !== !1, Be = y.IN_PLACE || !1, br = x1(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : Jh, Vi = typeof y.NAMESPACE == "string" ? y.NAMESPACE : rn, Fc = xt(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Nt(y.MATHML_TEXT_INTEGRATION_POINTS) : we({}, np), Bc = xt(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? Nt(y.HTML_INTEGRATION_POINTS) : we({}, ip);
    const S = xt(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? Nt(y.CUSTOM_ELEMENT_HANDLING) : es(null);
    if (Ee = es(null), xt(S, "tagNameCheck") && sp(S.tagNameCheck) && (Ee.tagNameCheck = S.tagNameCheck), xt(S, "attributeNameCheck") && sp(S.attributeNameCheck) && (Ee.attributeNameCheck = S.attributeNameCheck), xt(S, "allowCustomizedBuiltInElements") && typeof S.allowCustomizedBuiltInElements == "boolean" && (Ee.allowCustomizedBuiltInElements = S.allowCustomizedBuiltInElements), wt(Ee), ee && (j = !1), yn && (or = !0), Ce && (Pe = we({}, Wh), oe = es(null), Ce.html === !0 && (we(Pe, Vh), we(oe, Hh)), Ce.svg === !0 && (we(Pe, hl), we(oe, yl), we(oe, na)), Ce.svgFilters === !0 && (we(Pe, gl), we(oe, yl), we(oe, na)), Ce.mathMl === !0 && (we(Pe, ml), we(oe, Gh), we(oe, na))), O.tagCheck = null, O.attributeCheck = null, xt(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? O.tagCheck = y.ADD_TAGS : Fn(y.ADD_TAGS) && (Pe === sr && (Pe = Nt(Pe)), we(Pe, y.ADD_TAGS, it))), xt(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? O.attributeCheck = y.ADD_ATTR : Fn(y.ADD_ATTR) && (oe === Kt && (oe = Nt(oe)), we(oe, y.ADD_ATTR, it))), xt(y, "ADD_URI_SAFE_ATTR") && Fn(y.ADD_URI_SAFE_ATTR) && we(xr, y.ADD_URI_SAFE_ATTR, it), xt(y, "FORBID_CONTENTS") && Fn(y.FORBID_CONTENTS) && (qe === dt && (qe = Nt(qe)), we(qe, y.FORBID_CONTENTS, it)), xt(y, "ADD_FORBID_CONTENTS") && Fn(y.ADD_FORBID_CONTENTS) && (qe === dt && (qe = Nt(qe)), we(qe, y.ADD_FORBID_CONTENTS, it)), le && (Pe["#text"] = !0), Z && we(Pe, ["html", "head", "body"]), Pe.table && (we(Pe, ["tbody"]), delete Qr.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ci('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ci('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const K = Y;
      Y = y.TRUSTED_TYPES_POLICY;
      try {
        N = he("");
      } catch (re) {
        throw Y = K, re;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (Y = void 0, N = "") : (Y === void 0 && (Y = Me()), Y && typeof N == "string" && (N = he("")));
    At && At(y), Wi = y;
  }, op = we({}, [...hl, ...gl, ...T1]), ap = we({}, [...ml, ...v1]), pv = function(y, S, K) {
    return S.namespaceURI === rn ? y === "svg" : S.namespaceURI === ii ? y === "svg" && (K === "annotation-xml" || Fc[K]) : !!op[y];
  }, hv = function(y, S, K) {
    return S.namespaceURI === rn ? y === "math" : S.namespaceURI === Yo ? y === "math" && Bc[K] : !!ap[y];
  }, gv = function(y, S, K) {
    return S.namespaceURI === Yo && !Bc[K] || S.namespaceURI === ii && !Fc[K] ? !1 : !ap[y] && (lv[y] || !op[y]);
  }, mv = function(y) {
    let S = k(y);
    (!S || !S.tagName) && (S = {
      namespaceURI: Vi,
      tagName: "template"
    });
    const K = Zs(y.tagName), re = Zs(S.tagName);
    return Kc[y.namespaceURI] ? y.namespaceURI === Yo ? pv(K, S, re) : y.namespaceURI === ii ? hv(K, S, re) : y.namespaceURI === rn ? gv(K, S, re) : !!(Us === "application/xhtml+xml" && Kc[y.namespaceURI]) : !1;
  }, In = function(y) {
    Xi(t.removed, {
      element: y
    });
    try {
      k(y).removeChild(y);
    } catch {
      if (h(y), !k(y))
        throw ci("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Xo = function(y) {
    Ks(y);
    const S = g(y);
    if (S) {
      const re = [];
      Yi(S, (se) => {
        Xi(re, se);
      }), Yi(re, (se) => {
        try {
          h(se);
        } catch {
        }
      });
    }
    const K = C(y);
    if (K)
      for (let re = K.length - 1; re >= 0; --re) {
        const se = K[re], xe = se && se.name;
        if (typeof xe == "string")
          try {
            y.removeAttribute(xe);
          } catch {
          }
      }
  }, si = function(y, S) {
    try {
      Xi(t.removed, {
        attribute: S.getAttributeNode(y),
        from: S
      });
    } catch {
      Xi(t.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(y), y === "is")
      if (or || yn)
        try {
          In(S);
        } catch {
        }
      else
        try {
          S.setAttribute(y, "");
        } catch {
        }
  }, yv = function(y) {
    const S = C(y);
    if (S)
      for (let K = S.length - 1; K >= 0; --K) {
        const re = S[K], se = re && re.name;
        if (!(typeof se != "string" || oe[it(se)]))
          try {
            y.removeAttribute(se);
          } catch {
          }
      }
  }, Ks = function(y) {
    const S = [y];
    for (; S.length > 0; ) {
      const K = S.pop();
      (R ? R(K) : K.nodeType) === ar.element && yv(K);
      const se = g(K);
      if (se)
        for (let xe = se.length - 1; xe >= 0; --xe)
          S.push(se[xe]);
    }
  }, bv = function(y) {
    if (!Q)
      return;
    const S = [y];
    for (; S.length > 0; ) {
      const K = S.pop(), re = R ? R(K) : K.nodeType;
      if (re === ar.processingInstruction || re === ar.comment && kt(Xh, K.data)) {
        try {
          h(K);
        } catch {
        }
        continue;
      }
      if (re === ar.element) {
        const xe = K, We = it(w ? w(K) : K.nodeName);
        try {
          xe.hasAttribute && xe.hasAttribute("patchsrc") && xe.removeAttribute("patchsrc"), xe.hasAttribute && xe.hasAttribute("for") && We !== "label" && We !== "output" && xe.removeAttribute("for");
        } catch {
        }
      }
      const se = g(K);
      if (se)
        for (let xe = se.length - 1; xe >= 0; --xe)
          S.push(se[xe]);
    }
  }, cp = function(y) {
    let S = null, K = null;
    if (kr)
      y = "<remove></remove>" + y;
    else {
      const xe = Fh(y, /^[\r\n\t ]+/);
      K = xe && xe[0];
    }
    Us === "application/xhtml+xml" && Vi === rn && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const re = Y ? he(y) : y;
    if (Vi === rn)
      try {
        S = new u().parseFromString(re, Us);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = Ze.createDocument(Vi, "template", null);
      try {
        S.documentElement.innerHTML = Uc ? N : re;
      } catch {
      }
    }
    const se = S.body || S.documentElement;
    return y && K && se.insertBefore(r.createTextNode(K), se.childNodes[0] || null), Vi === rn ? Xr.call(S, Z ? "html" : "body")[0] : Z ? S.documentElement : se;
  }, lp = function(y) {
    const S = F ? F(y) : y.ownerDocument;
    return Gt.call(
      S || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Qo = function(y) {
    return y = Vs(y, de, " "), y = Vs(y, q, " "), y = Vs(y, ce, " "), y;
  }, jc = function(y) {
    var S;
    y.normalize();
    const K = F ? F(y) : y.ownerDocument, re = Gt.call(
      K || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let se = re.nextNode();
    for (; se; )
      se.data = Qo(se.data), se = re.nextNode();
    const xe = (S = y.querySelectorAll) === null || S === void 0 ? void 0 : S.call(y, "template");
    xe && Yi(xe, (We) => {
      Hi(We.content) && jc(We.content);
    });
  }, Zo = function(y) {
    const S = w ? w(y) : null;
    return typeof S != "string" || it(S) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== C(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== R(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    y.childNodes !== g(y);
  }, Hi = function(y) {
    if (!R || typeof y != "object" || y === null)
      return !1;
    try {
      return R(y) === ar.documentFragment;
    } catch {
      return !1;
    }
  }, Fs = function(y) {
    if (!R || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof R(y) == "number";
    } catch {
      return !1;
    }
  };
  function nn(V, y, S) {
    V.length !== 0 && Yi(V, (K) => {
      K.call(t, y, S, Wi);
    });
  }
  const kv = function(y, S) {
    return !!(Q && y.hasChildNodes() && !Fs(y.firstElementChild) && kt(Yh, y.textContent) && kt(Yh, y.innerHTML) || Q && y.namespaceURI === rn && S === "style" && Fs(y.firstElementChild) || y.nodeType === ar.processingInstruction || Q && y.nodeType === ar.comment && kt(Xh, y.data));
  }, xv = function(y, S, K) {
    if (!Qr[S] && pp(S) && (Ee.tagNameCheck instanceof RegExp && kt(Ee.tagNameCheck, S) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(S)))
      return !1;
    if (le && !qe[S]) {
      const re = k(y), se = g(y);
      if (se && re) {
        const xe = se.length;
        for (let We = xe - 1; We >= 0; --We) {
          const st = y === K ? p(se[We], !0) : se[We];
          re.insertBefore(st, m(y));
        }
      }
    }
    return In(y), !0;
  }, up = function(y, S, K, re) {
    return y.length === 0 ? S : S === K || S === re ? Nt(S) : S;
  }, fp = function(y, S) {
    if (nn(Oe.beforeSanitizeElements, y, null), y !== S && k(y) === null)
      return Be && Ks(y), !0;
    if (Zo(y))
      return In(y), !0;
    const K = it(w ? w(y) : y.nodeName);
    if (Pe = up(Oe.uponSanitizeElement, Pe, sr, De), nn(Oe.uponSanitizeElement, y, {
      tagName: K,
      allowedTags: Pe
    }), y !== S && k(y) === null)
      return Be && Ks(y), !0;
    if (kv(y, K))
      return In(y), !0;
    if (Qr[K] || !(O.tagCheck instanceof Function && O.tagCheck(K)) && !Pe[K]) {
      const se = xv(y, K, S);
      return se === !1 && nn(Oe.afterSanitizeElements, y, null), se;
    }
    if ((R ? R(y) : y.nodeType) === ar.element && !mv(y) || (K === "noscript" || K === "noembed" || K === "noframes") && kt(O1, y.innerHTML))
      return In(y), !0;
    if (ee && y.nodeType === ar.text) {
      const se = Qo(y.textContent);
      y.textContent !== se && (Xi(t.removed, {
        element: y.cloneNode()
      }), y.textContent = se);
    }
    return nn(Oe.afterSanitizeElements, y, null), !1;
  }, dp = function(y, S, K) {
    if (Zr[S] || Q && S === "patchsrc" || Q && S === "for" && y !== "label" && y !== "output" || I && (S === "id" || S === "name") && (K in r || K in dv))
      return !1;
    const re = oe[S] || O.attributeCheck instanceof Function && O.attributeCheck(S, y);
    if (!(j && kt(me, S))) {
      if (!(B && kt(Fe, S))) {
        if (re) {
          if (!xr[S]) {
            if (!kt(br, Vs(K, te, ""))) {
              if (!((S === "src" || S === "xlink:href" || S === "href") && y !== "script" && Bh(K, "data:") === 0 && en[y])) {
                if (!(H && !kt(yt, Vs(K, te, "")))) {
                  if (K)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(pp(y) && (Ee.tagNameCheck instanceof RegExp && kt(Ee.tagNameCheck, y) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(y)) && (Ee.attributeNameCheck instanceof RegExp && kt(Ee.attributeNameCheck, S) || Ee.attributeNameCheck instanceof Function && Ee.attributeNameCheck(S, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          S === "is" && Ee.allowCustomizedBuiltInElements && (Ee.tagNameCheck instanceof RegExp && kt(Ee.tagNameCheck, K) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(K)))
        ) return !1;
      }
    }
    return !0;
  }, Tv = we({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), pp = function(y) {
    return !Tv[Zs(y)] && kt(nt, y);
  }, vv = function(y, S, K, re) {
    if (Y && typeof f == "object" && typeof f.getAttributeType == "function" && !K)
      switch (f.getAttributeType(y, S)) {
        case "TrustedHTML":
          return he(re);
        case "TrustedScriptURL":
          return ve(re);
      }
    return re;
  }, Cv = function(y, S, K, re) {
    try {
      K ? y.setAttributeNS(K, S, re) : y.setAttribute(S, re), Zo(y) ? In(y) : Kh(t.removed);
    } catch {
      si(S, y);
    }
  }, hp = function(y) {
    nn(Oe.beforeSanitizeAttributes, y, null);
    const S = y.attributes;
    if (!S || Zo(y))
      return;
    oe = up(Oe.uponSanitizeAttribute, oe, Kt, Je);
    const K = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: oe,
      forceKeepAttr: void 0
    };
    let re = S.length;
    const se = it(y.nodeName);
    for (; re--; ) {
      const xe = S[re], We = xe.name, st = xe.namespaceURI, Xt = xe.value, Qt = it(We), Wc = Xt;
      let Ft = We === "value" ? Wc : h1(Wc);
      if (K.attrName = Qt, K.attrValue = Ft, K.keepAttr = !0, K.forceKeepAttr = void 0, nn(Oe.uponSanitizeAttribute, y, K), Ft = K.attrValue, z && (Qt === "id" || Qt === "name") && Bh(Ft, G) !== 0 && (si(We, y), Ft = G + Ft), Q && kt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ft)) {
        si(We, y);
        continue;
      }
      if (Qt === "attributename" && Fh(Ft, "href")) {
        si(We, y);
        continue;
      }
      if (!K.forceKeepAttr) {
        if (!K.keepAttr) {
          si(We, y);
          continue;
        }
        if (!ae && kt(R1, Ft)) {
          si(We, y);
          continue;
        }
        if (ee && (Ft = Qo(Ft)), !dp(se, Qt, Ft)) {
          si(We, y);
          continue;
        }
        Ft = vv(se, Qt, st, Ft), Ft !== Wc && Cv(y, We, st, Ft);
      }
    }
    nn(Oe.afterSanitizeAttributes, y, null);
  }, ea = function(y) {
    let S = null;
    const K = lp(y);
    for (nn(Oe.beforeSanitizeShadowDOM, y, null); S = K.nextNode(); )
      if (nn(Oe.uponSanitizeShadowNode, S, null), fp(S, y), hp(S), Hi(S.content) && ea(S.content), (R ? R(S) : S.nodeType) === ar.element) {
        const se = b(S);
        Hi(se) && (Vc(se), ea(se));
      }
    nn(Oe.afterSanitizeShadowDOM, y, null);
  }, Vc = function(y) {
    const S = [{
      node: y,
      shadow: null
    }];
    for (; S.length > 0; ) {
      const K = S.pop();
      if (K.shadow) {
        ea(K.shadow);
        continue;
      }
      const re = K.node, xe = (R ? R(re) : re.nodeType) === ar.element, We = g(re);
      if (We)
        for (let st = We.length - 1; st >= 0; --st)
          S.push({
            node: We[st],
            shadow: null
          });
      if (xe) {
        const st = w ? w(re) : null;
        if (typeof st == "string" && it(st) === "template") {
          const Xt = re.content;
          Hi(Xt) && S.push({
            node: Xt,
            shadow: null
          });
        }
      }
      if (xe) {
        const st = b(re);
        Hi(st) && S.push({
          node: null,
          shadow: st
        }, {
          node: st,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(V) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, K = null, re = null, se = null;
    if (Uc = !V, Uc && (V = "<!-->"), typeof V != "string" && !Fs(V) && (V = k1(V), typeof V != "string"))
      throw ci("dirty is not a string, aborting");
    if (!t.isSupported)
      return V;
    ie ? (Pe = De, oe = Je) : zc(y), (Oe.uponSanitizeElement.length > 0 || Oe.uponSanitizeAttribute.length > 0) && (Pe = Nt(Pe)), Oe.uponSanitizeAttribute.length > 0 && (oe = Nt(oe)), t.removed = [];
    const xe = Be && typeof V != "string" && Fs(V);
    if (xe) {
      bv(V);
      const Xt = w ? w(V) : V.nodeName;
      if (typeof Xt == "string") {
        const Qt = it(Xt);
        if (!Pe[Qt] || Qr[Qt])
          throw Xo(V), ci("root node is forbidden and cannot be sanitized in-place");
      }
      if (Zo(V))
        throw Xo(V), ci("root node is clobbered and cannot be sanitized in-place");
      try {
        Vc(V);
      } catch (Qt) {
        throw Xo(V), Qt;
      }
    } else if (Fs(V))
      S = cp("<!---->"), K = S.ownerDocument.importNode(V, !0), K.nodeType === ar.element && K.nodeName === "BODY" || K.nodeName === "HTML" ? S = K : S.appendChild(K), Vc(K);
    else {
      if (!or && !ee && !Z && // eslint-disable-next-line unicorn/prefer-includes
      V.indexOf("<") === -1)
        return Y && ni ? he(V) : V;
      if (S = cp(V), !S)
        return or ? null : ni ? N : "";
    }
    S && kr && In(S.firstChild);
    const We = xe ? V : S;
    try {
      const Xt = lp(We);
      for (; re = Xt.nextNode(); )
        fp(re, We), hp(re), Hi(re.content) && ea(re.content);
    } catch (Xt) {
      throw xe && (Xo(V), Yi(t.removed, (Qt) => {
        Qt.element && Ks(Qt.element);
      })), Xt;
    }
    if (xe)
      return Yi(t.removed, (Xt) => {
        Xt.element && Ks(Xt.element);
      }), ee && jc(V), V;
    if (or) {
      if (ee && jc(S), yn)
        for (se = Ve.call(S.ownerDocument); S.firstChild; )
          se.appendChild(S.firstChild);
      else
        se = S;
      return (oe.shadowroot || oe.shadowrootmode) && (se = Jt.call(n, se, !0)), se;
    }
    let st = Z ? S.outerHTML : S.innerHTML;
    return Z && Pe["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && kt(w1, S.ownerDocument.doctype.name) && (st = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + st), ee && (st = Qo(st)), Y && ni ? he(st) : st;
  }, t.setConfig = function() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    zc(V), ie = !0, De = Pe, Je = oe;
  }, t.clearConfig = function() {
    Wi = null, ie = !1, De = null, Je = null, Y = W, N = "";
  }, t.isValidAttribute = function(V, y, S) {
    Wi || zc({});
    const K = it(V), re = it(y);
    return dp(K, re, S);
  }, t.addHook = function(V, y) {
    typeof y == "function" && xt(Oe, V) && Xi(Oe[V], y);
  }, t.removeHook = function(V, y) {
    if (xt(Oe, V)) {
      if (y !== void 0) {
        const S = d1(Oe[V], y);
        return S === -1 ? void 0 : p1(Oe[V], S, 1)[0];
      }
      return Kh(Oe[V]);
    }
  }, t.removeHooks = function(V) {
    xt(Oe, V) && (Oe[V] = []);
  }, t.removeAllHooks = function() {
    Oe = Qh();
  }, t;
}
var q1 = Ok();
function L1({ structureProtectionMode: e = "off" }) {
  const [t] = Te(), r = ue(void 0), [n, i] = Ae(void 0), s = Se((o) => {
    r.current = o, i(o);
  }, []);
  return J(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = Ck(p);
      if (!h)
        return !1;
      const m = P();
      return e === "protected" ? m && Ek(m, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const m = P(), g = r.current;
      if (g && m && Lh(m, g)) {
        if (s(void 0), h.preventDefault(), p !== g.intent)
          return !0;
        const b = X(g.key) ?? void 0;
        if (g.kind === "verse") {
          if (b) {
            const C = b.getParent(), R = b.getPreviousSibling(), w = b.getNextSibling();
            b.remove(), R ? Ak(R) : w && v(w) ? w.select(0, 0) : C?.selectStart();
          }
        } else g.kind === "selection" ? E(m) && m.removeText() : Ye(b) && r1(b);
        return !0;
      }
      if (!m)
        return !1;
      const k = t1(m, p);
      if (k) {
        if (k.kind === "verse") {
          const b = lm();
          b.add(k.node.getKey()), Sn(b);
        } else {
          const b = Do();
          b.anchor.set(k.node.getKey(), 0, "element"), b.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), Sn(b);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), h.preventDefault(), !0;
      }
      if (E(m) && !m.isCollapsed() && dd(m)) {
        const b = m.getNodes().filter(Ne).map((w) => w.getKey()), { anchor: C, focus: R } = m;
        return s({
          kind: "selection",
          intent: p,
          key: b[0],
          anchor: { key: C.key, offset: C.offset, type: C.type },
          focus: { key: R.key, offset: R.offset, type: R.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = P();
      return !h || !ds(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const m = q1.sanitize(p), g = new DOMParser().parseFromString(m, "text/html"), k = n1(dC(t, g)), b = P();
      return E(b) && b.insertNodes(k), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = P();
      return h && ds(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, f = (p) => {
      if (e !== "protected")
        return !1;
      const h = P();
      return h && ds(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, d = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Lh(P(), p) || s(void 0);
      });
    };
    return ct(
      t.registerCommand(On, o, et),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(Ti, c, _r),
      t.registerCommand(kn, u, et),
      t.registerCommand(Wv, c, et),
      t.registerCommand(Wu, f, et),
      t.registerCommand(Vu, c, et),
      t.registerUpdateListener(d)
    );
  }, [t, e, s]), J(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const zI = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function D1({ textDirection: e }) {
  const [t] = Te();
  return U1(t, e), null;
}
function U1(e, t) {
  J(() => (Zh(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Zh(e, t);
  })), [e, t]);
}
function Zh(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function K1() {
  const [e] = Te();
  return F1(e), null;
}
function F1(e) {
  J(() => {
    if (!e.hasNodes([Ue, qt, Qe, Xe, Pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return ct(
      e.registerNodeTransform(Xe, B1),
      e.registerNodeTransform(Xe, (t) => z1(t, e)),
      e.registerNodeTransform(Pt, eg),
      e.registerNodeTransform(qt, eg),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(Pt, (t) => {
        Eo(En("va"), t), Eo(En("vp"), t);
      })
    );
  }, [e]);
}
function B1(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || L(r) || U(n) || U(r) || pe(n) || pe(r) || Ge(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  v(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  Ge(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  fe(e, be) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Ke(n))
    return;
  if (Ne(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  Ne(r) && Kf(e);
}
function z1(e, t) {
  const r = e.getParent();
  !Ge(r) || !e.isAttached() || Hv(ca) || Jl(t, e.getKey()) && !Jl(t, r.getKey()) && r.insertAfter(e);
}
function eg(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; pe(t); )
    t = t.getLastChild();
  (U(t) || v(t) && pe(t.getParent()) && !j1(t)) && e.insertBefore($e(" "));
}
function j1(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith($);
}
function pd(e) {
  if (!L(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !kf(n)) ? void 0 : e;
}
function V1(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (A(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function W1() {
  const e = P();
  if (!(!E(e) || !e.isCollapsed()))
    return pd(V1(e.anchor));
}
function H1(e) {
  const t = P();
  let r;
  return E(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Rk(e.target)), r ? pd(St(r, L)) : void 0;
}
function Rk(e) {
  const t = Gv(e)?.anchorNode;
  if (cm(t))
    return $i(t) ?? void 0;
}
function G1(e) {
  if (P())
    return;
  const t = Rk(e);
  return t ? pd(St(t, L)) : void 0;
}
function J1() {
  const [e] = Te(), t = bk(W1);
  return J(() => {
    const r = (n) => {
      t(n) && cn(yo);
    };
    return ct(e.registerCommand(Br, () => {
      const n = G1(e.getRootElement());
      return n && r(n), !1;
    }, xi), e.registerCommand(rc, (n) => {
      const i = H1(n);
      return i && r(i), !1;
    }, xi));
  }, [e, t]), null;
}
function Y1({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = z0({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(B0, { trigger: e, items: i });
}
function X1({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = rt(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(ew, { trigger: e, harness: i }) : _(Y1, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const Q1 = [" ", "*"];
function Z1(e, t) {
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
function ew({ trigger: e, harness: t }) {
  const [r] = Te(), [n, i] = Ae(void 0), s = ue({ query: "", options: [] }), o = ue(0), a = Se((d, p, h) => {
    const m = p.find((g) => g.kind === "note" && g.marker === d);
    if (m) {
      t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const g = P();
      E(g) && g.insertText(`${e}${d}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  J(() => ct(r.registerCommand(On, (d) => {
    if (n) {
      if ((d.key === "Enter" || d.key === "Tab") && s.current.options.length === 0)
        return d.preventDefault(), d.stopPropagation(), !0;
      if (d.key === "*" && n.trigger === "backslash")
        return d.preventDefault(), d.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (d.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        d.preventDefault(), d.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), Jv(() => {
          const g = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(g ? {
            trigger: "backslash",
            hasTextSelection: g.hasTextSelection,
            items: t.getItems(g),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const g = P();
          E(g) && g.insertText(e);
        }), !0);
      }
      if (d.key !== " " || n.trigger !== "backslash")
        return !1;
      d.preventDefault(), d.stopPropagation(), i(void 0);
      const h = s.current.query;
      if (n.hasTextSelection) {
        const m = n.items.find((g) => g.marker === h);
        return m && t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(h, n.items, !0), !0;
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
  }, et), r.registerCommand(um, (d) => {
    if (n || d === null || d.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (d.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, ls)), [r, e, t, n, a]);
  const c = Se(() => i(void 0), []), l = Se((d, p) => {
    s.current = { query: d, options: p };
  }, []), u = Se((d) => {
    const { markerMenuItem: p, applyOpts: h } = d;
    t.apply(p, h);
  }, [t]), f = rt(() => n?.items.map((d) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    Z1(d, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(Wb, { isOpen: !0, children: ({ placement: d }) => _(
    Jb,
    { options: f ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: d === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? Q1 : void 0 },
    n.session
  ) });
}
function $k(e) {
  return e.replaceAll($, "~").replace(/ {2,}/g, (r) => $.repeat(r.length));
}
function tg(e) {
  return e.replaceAll($, " ").replaceAll("~", $);
}
let Ka;
function tw(e) {
  e && (Ka = e);
}
function rg(e) {
  return Dt(e);
}
function rw(e, t) {
  return e.isEmpty() ? om : Ik(e.toJSON(), t);
}
function Ik(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && cc(r[0]) && (!r[0].children || r[0].children.length === 0))
    return om;
  if (r.some(qM)) {
    Ka?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Lk(r), i = Dr(n, t);
  return i ? { type: Tn, version: xn, content: i } : void 0;
}
function nw(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), tt({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function iw(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return tt({
    type: pr.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function sw(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Ry(r, a, c), tt({
    type: pr.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function ow(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Ry(t, o, a), tt({
    type: Pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function aw(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return tt({
    type: r,
    marker: n === "" ? void 0 : n,
    ...i,
    content: t
  });
}
function cw(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return tt({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function lw(e, t) {
  const { unknownAttributes: r } = e;
  return tt({ type: oy, ...r, content: t });
}
function uw(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return tt({ type: rb, marker: r, ...n, content: t });
}
function fw(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return tt({
    type: sb,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function dw(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return tt({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function ts(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return tt({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Wm({ sid: n, eid: i, ...s }, o)
  });
}
function pw(e) {
  return e.text;
}
function hw(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return tt({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function gw(e) {
  const { marker: t } = e;
  return {
    type: Ma,
    marker: t === "" ? void 0 : t
  };
}
function bl(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function mw(e, t, r, n, i) {
  const s = zr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = ts({
      type: s,
      marker: us,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = ts({
      type: s,
      marker: vi,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = ts({
      type: s,
      marker: vi
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = ts({
      type: s,
      marker: us
    });
    i.push(l);
  }
  (!n || !Wn(n)) && t.forEach((l) => {
    const u = ts({
      type: s,
      marker: us,
      eid: l
    });
    i.push(u);
  });
}
function uu(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && Wn(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return !Ps(i) || i.markerSyntax !== "opening" ? !1 : i.marker === n.marker ? !0 : n.children.some(
    (s) => Bm(s) && s.marker === i.marker
  );
}
function yw(e, t, r, n, i) {
  const s = e[t];
  return !An(s) || s.text !== $ || !(i || Wn(e[t - 1]) || Wn(e[t + 1])) || s[Cn]?.textType !== void 0 || uu(e, t, r, n) ? !1 : !n || qk(n.children, s);
}
function qk(e, t) {
  return e.some((r) => r === t ? !1 : Wn(r) ? qk(r.children, t) : Ps(r) ? !1 : An(r) ? r[Cn]?.textType === void 0 && r.text !== "" && r.text !== $ && !Di(r.text) : "children" in r && r.type !== gn.getType());
}
function bw(e) {
  let t = e;
  for (; Wn(t); ) t = t.children[0];
  return t;
}
function kw(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const s = e[r];
    if (!Ps(s) || s.markerSyntax !== "opening") break;
    r++;
  }
  const n = bw(e[r]);
  if (!An(n)) return;
  if (n.text === gt(t)) return { node: n, caller: t };
  const i = Math.floor(n.detail / _m) % 2 === 1;
  return t !== "" && i ? { node: n, caller: t } : void 0;
}
function Dr(e, t, r, n, i, s = !1) {
  const o = [];
  let a, c = [];
  return e.forEach((l, u) => {
    const f = l, d = l, p = l, h = l, m = l, g = l, k = l, b = l;
    switch (l.type) {
      case wr.getType():
        o.push(
          nw(
            f,
            Dr(f.children, t)
          )
        );
        break;
      case gr.getType():
        o.push(iw(l));
        break;
      case pr.getType():
        o.push(
          sw(
            d,
            Dr(d.children, t)
          )
        );
        break;
      case qt.getType():
      case Pt.getType():
        o.push(ow(l));
        break;
      case Ue.getType():
        o.push(
          aw(
            p,
            Dr(p.children, t, void 0, p)
          )
        );
        break;
      case Et.getType():
        o.push(
          cw(
            h,
            Dr(h.children, t)
          )
        );
        break;
      case qi.getType():
        o.push(
          lw(
            l,
            Dr(l.children, t)
          )
        );
        break;
      case Ki.getType():
        o.push(
          uw(
            l,
            Dr(l.children, t)
          )
        );
        break;
      case Fi.getType():
        o.push(
          fw(
            l,
            Dr(l.children, t)
          )
        );
        break;
      case Qe.getType():
        o.push(
          dw(
            m,
            Dr(
              m.children,
              t,
              kw(m.children, m.caller)
            )
          )
        );
        break;
      case gn.getType():
      case Ir.getType():
      case cr.getType():
      case fm.getType():
      case $r.getType():
        break;
      case ut.getType():
        if (a = Dr(
          k.children,
          t,
          r,
          n,
          u > 0 ? e[u - 1] : i,
          !0
        ), a) {
          const C = k.typedIDs[Ot];
          if (C) {
            const R = e[u + 1];
            mw(a, C, c, R, o), c = R && Wn(R) ? C : [];
          } else {
            const R = a.shift();
            R && (typeof R == "string" ? bl(o, R) : o.push(R)), a.length > 0 && o.push(...a);
          }
        }
        break;
      case zr.getType():
        o.push(ts(l));
        break;
      case Xe.getType():
        if (r && l === r.node) {
          let C = of(r.node.text, r.caller);
          rg(t) && (C = tg(Rp(C))), C && bl(o, C);
          break;
        }
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Di(g.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        (g.text !== $ || yw(e, u, i, n, s)) && // The untagged NBSP-`|` form of milestone attribute text. Text right after a char span's
        // opening glyph is never that: its NBSP is the span's separator, and a `|…` after it is
        // content the attribute grammar left literal (`\w |lemma="g"grace\w*` — Paratext 9
        // parses attributes only when the whole `|…` tail before the closer matches), so it is
        // kept like any other content text.
        !(g.text.startsWith(Qu) && !uu(e, u, i, n)) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[Cn]?.textType !== "attribute") {
          let C = pw(g);
          t?.markerMode === "editable" && uu(e, u, i, n) && C.startsWith($) && (C = C.slice(1)), rg(t) && (C = tg(Rp(C))), bl(o, C);
        }
        break;
      case Ii.getType():
        o.push(
          hw(
            b,
            Dr(b.children, t)
          )
        );
        break;
      case Jr.getType():
        o.push(gw(l));
        break;
      case ws.getType():
        Ka?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Ka?.error(`Unexpected node type '${l.type}'!`);
    }
  }), o && o.length > 0 ? o : void 0;
}
function Lk(e) {
  const t = e.findIndex((r) => cc(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Lk(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const rs = {
  initialize: tw,
  deserializeEditorState: rw
}, xw = /^sd\d*$/, Tw = /* @__PURE__ */ new Set([
  ...Object.entries(wl).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === x.Paragraph && !xw.test(e)
  ).map(([e]) => e),
  "qa"
]);
function vw(e, t) {
  const r = [];
  let n;
  for (const [i, s] of e.entries()) {
    if (sy(s) || Py(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (!N_(s)) {
      t && Fa(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(s) : r.push(s);
      continue;
    }
    if (bf(s) && Tw.has(s.marker) && !Fa(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (s.children.length === 0) {
      n ? n.children.push(s) : r.push(s);
      continue;
    }
    Dk(s.children, t).forEach((o) => {
      const a = Cw(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        n ? n.children.push(a) : r.push(a);
        return;
      }
      n = Sw(o.verse), r.push(n), a && n.children.push(a);
    });
  }
  return r;
}
function Dk(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Uk(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Wn(i)) {
      const s = Dk(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(ng(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [ng(i, c.nodes)] });
      });
      return;
    }
    t && Fa(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function ng(e, t) {
  return { ...e, children: t };
}
function Uk(e) {
  return mb(e) && e.number !== "";
}
function Fa(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Uk(r) || Fa(r)) : !1;
}
function Cw(e, t, r) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [Cn]: { ...e[Cn], [db.key]: r }
    };
}
function Sw(e) {
  return {
    type: Na,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: pb
  };
}
const ig = Fk([]), _w = {
  type: fm.getType(),
  version: 1
};
let hd = [], ye, wi, Kk, nr;
function Mw(e, t) {
  hd = [], Pw(e), ww(t);
}
function Ew(e = 0) {
}
function Aw(e, t) {
  ye = t ?? kc();
  let r;
  return e ? (e.type !== Tn && nr?.warn(`This USJ type '${e.type}' didn't match the expected type '${Tn}'.`), e.version !== xn && nr?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${xn}'.`
  ), e.content.length > 0 ? (r = hu(Dn(e.content)), Po(ye) && (r = vw(r, nr))) : r = [ig]) : r = [ig], Kk?.(hd), {
    root: {
      children: r,
      direction: null,
      format: "",
      indent: 0,
      type: "root",
      version: 1
    }
  };
}
function Pw(e) {
  e && (wi = e), e?.addMissingComments && (Kk = e.addMissingComments);
}
function ww(e) {
  e && (nr = e);
}
function gd() {
  return Dt(ye);
}
function Nw(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function Ow(e) {
  let { marker: t } = e;
  t !== Co && nr?.warn(`Unexpected book marker '${t}'!`), t = t ?? Co;
  const { code: r } = e;
  (!r || !wr.isValidBookCode(r)) && nr?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ye?.markerMode === "editable" || ye?.markerMode === "visible" ? n.push(
    tr("marker", ze(t) + " " + r + $)
  ) : ye?.hasGutterParaMarkers && n.push(tr("marker", ze(t) + $, !0));
  const i = Nw(e.content);
  i && n.push(Ut(gd() ? $k(i) : i));
  const s = lt(e, PS);
  return tt({
    type: wr.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: ny
  });
}
function Rw(e) {
  let { marker: t } = e;
  t !== Sa && nr?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Sa;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = lt(e, CS);
  let a;
  ye?.markerMode === "visible" && (a = !0);
  const c = [
    Ut(Mr(t, r) ?? "")
  ];
  return ye?.markerMode === "editable" && Yw(i, s, c), ye?.markerMode === "editable" ? tt({
    type: pr.getType(),
    marker: t,
    number: r ?? "",
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    children: c,
    direction: null,
    format: "",
    indent: 0,
    version: ey
  }) : tt({
    type: gr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Sy
  });
}
function $w(e) {
  let { marker: t } = e;
  t !== Ca && nr?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ca;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (VE(ye) ?? qt).getType(), c = ye?.markerMode === "editable" ? zm : gb;
  let l, u;
  ye?.markerMode === "editable" ? l = Mr(t, r) : ye?.markerMode === "visible" && (u = !0);
  const f = lt(e, bS);
  return tt({
    type: a,
    text: l,
    ...l === void 0 ? void 0 : { detail: 0, format: 0, mode: "normal", style: "" },
    marker: t,
    number: r ?? "",
    sid: n,
    altnumber: i,
    pubnumber: s,
    showMarker: u,
    unknownAttributes: f,
    version: c
  });
}
function Iw(e, t = [], r = !1) {
  let { marker: n } = e;
  Ue.isValidMarker(n, wi?.extraValidMarkers) || nr?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ye?.markerMode === "editable") {
    const [a] = t;
    An(a) ? a.text = $ + a.text : a && t.unshift(Ut($));
  }
  t.length === 0 && t.push(Ut(Tt)), fu(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = lt(e, gS);
  return s || Ww(n, o, i), s || du(e.marker ?? "", i, !1, r), tt({
    type: Ue.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Fm
  });
}
function Fk(e) {
  return {
    type: Gn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: ly
  };
}
function qw(e, t = []) {
  let { marker: r } = e;
  Et.isValidMarker(r, wi?.extraValidMarkers) || nr?.warn(`Unexpected para marker '${r}'!`), r = r ?? ln;
  const n = [];
  if (Ns(ye) && (ye?.markerMode === "editable" ? n.push(
    zt(r),
    Ut($, hn, "token")
  ) : (ye?.markerMode === "visible" || ye?.hasGutterParaMarkers) && n.push(
    tr(
      "marker",
      ze(r) + $,
      ye?.hasGutterParaMarkers
    )
  )), n.push(...t), gd()) {
    const s = n.find(
      (o) => !Ps(o) && !(An(o) && o.text === $)
    );
    An(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => $.repeat(o.length)));
  }
  const i = lt(e, v_);
  return tt({
    type: Et.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Ey
  });
}
function md() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function Lw(e, t = []) {
  const r = lt(e, wS);
  return tt({
    ...md(),
    type: qi.getType(),
    unknownAttributes: r,
    children: t,
    version: ay
  });
}
function Dw(e, t = []) {
  const r = lt(e, lM), n = e.marker ?? zl, i = [];
  return ye?.markerMode === "editable" ? i.push(
    zt(n),
    Ut($, hn, "token")
  ) : (ye?.markerMode === "visible" || ye?.hasGutterParaMarkers) && i.push(
    tr(
      "marker",
      ze(n) + $,
      ye?.hasGutterParaMarkers
    )
  ), i.push(...t), tt({
    ...md(),
    type: Ki.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: nb
  });
}
function Uw(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? jl, a = xy(o, i) ?? o;
  ye?.markerMode === "editable" ? s.push(
    zt(a),
    Ut($, hn, "token")
  ) : (ye?.markerMode === "visible" || ye?.hasGutterParaMarkers) && s.push(
    tr(
      "marker",
      ze(a) + $,
      ye?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = lt(
    e,
    fM
  );
  return tt({
    ...md(),
    type: Fi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: ob
  });
}
function Kw(e, t) {
  const r = L_(t);
  let n = () => {
  };
  return wi?.noteCallerOnClick && (n = wi.noteCallerOnClick), tt({
    type: cr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Cb
  });
}
function Fw(e, t) {
  let { marker: r } = e;
  Qe.isValidMarker(r, wi?.extraValidMarkers) || nr?.warn(`Unexpected note marker '${r}'!`), r = r ?? rf;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : nd(ye?.noteMode), a = lt(e, OC), c = ye?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ye?.markerMode === "editable" ? (l = zt(r, "opening", !1, c), s || (u = zt(r, "closing", !1, c))) : ye?.markerMode === "visible" && (l = tr("marker", ze(r) + " "), s || (u = tr("marker", ot(r))));
  const f = [];
  let d;
  if (l && f.push(l), ye?.markerMode === "editable" && !o)
    d = Ut(gt(i), void 0, c), d.detail = _m, f.push(d), Jw(n, f), f.push(...t);
  else {
    const p = Ut($, hn, "token");
    d = Kw(i, t), f.push(d, p, ...t.flatMap(Bw(p)));
  }
  return u && f.push(u), tt({
    type: Qe.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: f,
    direction: null,
    format: "",
    indent: 0,
    version: Pm
  });
}
function Bw(e) {
  return (t) => yy(t) ? [t] : [t, e];
}
function zw(e) {
  let { marker: t } = e;
  (!t || !zr.isValidMarker(t, wi?.extraValidMarkers)) && nr?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = lt(e, tf), s = Hm(e);
  return tt({
    type: zr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Mm
  });
}
function sg(e, t = []) {
  return {
    type: ut.getType(),
    typedIDs: { [Ot]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function jw(e, t) {
  const { marker: r } = e, n = e.type, i = lt(e, _S), s = [];
  if (ye?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = uc(
      n,
      r,
      i
    );
    o && s.push(tr("marker", o)), a && s.push(tr("attribute", a)), s.push(...t), c && s.push(tr("attribute", c)), l && s.push(tr("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    An(o) && (o.mode = "token");
  }), tt({
    type: Ii.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: ry
  });
}
function Vw(e) {
  return {
    type: Jr.getType(),
    marker: e,
    text: ro(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ye?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Vy
  };
}
function zt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: $r.getType(),
    marker: e,
    markerSyntax: t,
    // Emit the flag only for nested glyphs; absence means non-nested (see MarkerNode.exportJSON).
    ...r ? { nested: !0 } : {},
    text: "",
    detail: 0,
    format: 0,
    mode: n,
    style: "",
    version: 1
  };
}
function Ut(e, t = void 0, r = "normal") {
  const n = {
    type: Xe.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Cn] = { textType: t }), n;
}
function tr(e, t, r = !1) {
  const n = {
    type: Ir.getType(),
    text: t,
    textType: e,
    version: my
  };
  return r && (n[Cn] = { [gf.key]: !0 }), n;
}
function wo(e, t) {
  return {
    type: gn.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Lm
  };
}
function fu(e, t, r = !1) {
  ye?.markerMode === "editable" ? t.push(zt(e, "opening", r)) : ye?.markerMode === "visible" && t.push(tr("marker", ze(e, r)));
}
function du(e, t, r = !1, n = !1) {
  ye?.markerMode === "editable" ? r ? t.push(zt("", "selfClosing")) : t.push(zt(e, "closing", n)) : ye?.markerMode === "visible" && t.push(
    tr(
      "marker",
      r ? ot("") : ot(e, n)
    )
  );
}
function Ww(e, t, r) {
  if (ye?.markerMode !== "editable" || !t) return;
  const n = Ur(t, As(e));
  n && r.push(Ut(n, "attribute"));
}
function og(e, t) {
  if (e.type !== "ms" || ye?.markerMode !== "editable" && ye?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = lt(e, tf), o = Gm(
    n,
    i,
    s,
    Hm(e)
  ), a = Ur(o, Ko(r ?? ""));
  if (!a) return;
  const c = $ + a;
  ye?.markerMode === "editable" ? t.push(Ut(c, "attribute")) : t.push(tr("attribute", c));
}
function Hw(e, t) {
  const r = e.marker ?? "";
  if (ye?.markerMode === "editable") {
    const n = [];
    fu(r, n), og(e, n), du(r, n, !0), t.push(wo("milestone", n));
  } else
    fu(r, t), og(e, t), du(r, t, !0);
}
function ag(e, t, r) {
  t !== void 0 && r.push(
    wo(e, [
      zt(e, "opening"),
      Ut($ + t, "attribute"),
      zt(e, "closing")
    ])
  );
}
function Gw(e, t) {
  ye?.markerMode === "editable" && (ag("va", e.altnumber, t), ag("vp", e.pubnumber, t));
}
function Jw(e, t) {
  e !== void 0 && t.push(
    wo("cat", [
      zt("cat", "opening"),
      Ut($ + e, "attribute"),
      zt("cat", "closing")
    ])
  );
}
function Yw(e, t, r) {
  e !== void 0 && r.push(
    wo("ca", [
      zt("ca", "opening"),
      Ut($ + e, "attribute"),
      zt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    wo("cp", [
      zt("cp", "opening"),
      Ut($ + t, "attribute")
    ])
  );
}
function cg(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function Xw(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function lg(e, t) {
  t.marker === vi && t.sid !== void 0 && e.push(t.sid), t.marker === us && t.eid !== void 0 && Xw(e, t.eid);
}
function pu(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [sg(o, [...n])] : o, c = e[i];
  lg(n, c);
  const l = pu(
    e.slice(i + 1, s),
    cg(t, i + 1),
    c.marker === vi,
    n
  ), u = sg(l, [...n]), f = e[s];
  lg(n, f);
  const d = pu(
    e.slice(s + 1),
    cg(t, s + 1),
    f.marker === vi,
    n
  );
  return [...a, u, ...d];
}
function Dn(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(Ut(gd() ? $k(i) : i));
    else if (!i.type)
      nr?.error("Marker type is missing!");
    else
      switch (i.type) {
        case wr.getType():
          n.push(Ow(i));
          break;
        case pr.getType():
          n.push(Rw(i));
          break;
        case Pt.getType():
          ye?.hasSpacing || n.push(_w), n.push($w(i)), Gw(i, n);
          break;
        case Ue.getType():
          n.push(
            Iw(i, Dn(i.content, !0), t)
          );
          break;
        case Et.getType():
          n.push(qw(i, Dn(i.content)));
          break;
        case Qe.getType():
          n.push(Fw(i, Dn(i.content)));
          break;
        case zr.getType():
          Em(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && hd?.push(i.sid)), n.push(zw(i)), Hw(i, n);
          break;
        case Jr.getType():
          n.push(Vw(i.marker ?? ""));
          break;
        case oy:
          n.push(Lw(i, Dn(i.content)));
          break;
        case rb:
          n.push(Dw(i, Dn(i.content)));
          break;
        case sb:
          n.push(Uw(i, Dn(i.content)));
          break;
        default:
          nr?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(jw(i, Dn(i.content)));
      }
  }), pu(n, r);
}
function hu(e) {
  const t = e.findIndex(
    (n) => sy(n) || Py(n) || bf(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    OS(n)
  );
  if (t >= 0) {
    const n = hu(e.slice(0, t)), i = e[t], s = hu(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || mb(n)))
    return [Fk(e)];
  return e;
}
const wn = {
  initialize: Mw,
  reset: Ew,
  serializeEditorState: Aw
};
function Bk(e) {
  if (e && !M(e)) {
    if (v(e)) return e;
    if (A(e))
      for (const t of e.getChildren()) {
        const r = Bk(t);
        if (r) return r;
      }
  }
}
function Qw() {
  const e = P();
  if (!E(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((v(t) && !M(t) ? Ei(t) : void 0) && v(t)) {
      const i = $e(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ys(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Bk(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith($) ? $ : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of zk(e)) {
    if (!Ei(t)) continue;
    ys(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith($) && r.setTextContent(n.slice($.length));
  }
  return !0;
}
function zk(e) {
  const [t, r] = ju(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || M(a) || fe(a, be) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, f = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= f) return;
    const d = a.splitText(u, f), p = d.length === 3 ? d[1] : f === l ? d[d.length - 1] : d[0];
    p && o.push(p);
  }), o;
}
function Zw() {
  const e = P();
  if (!E(e)) return !1;
  const t = e.focus.getNode();
  return Ei(t) ? Ye(If(t)) : !1;
}
function jk() {
  let e = P();
  if (!E(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (M(t) && !Df(t, e.anchor.offset)) {
    const c = t.getParent();
    if (U(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = P(), !E(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!v(t) || M(t) || !Ei(t)) return !1;
  const r = If(t);
  if (!Ye(r)) return !1;
  const n = $e(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  ys(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return U(a) ? qf(a) : o.select(0, 0), !0;
}
const Vk = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${wy(_e().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = P(), t = Tf(e), r = Bf(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = U_(0, o);
        const a = JM(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Ly(c) && vf(parseInt(n, 10), c);
        }
      }
      return { content: [{
        type: "verse",
        marker: "v",
        number: n
      }], highlightInserted: i };
    }
  }
};
function gu(e, t) {
  return Qe.isValidMarker(e, t) || !!Vk[e] || Et.isValidMarker(e, t) || Ue.isValidMarker(e, t);
}
function eN(e, t) {
  return Ue.isNoteContentMarker(e) ? !1 : Ue.isValidMarker(e, t);
}
function Wk(e, t, r, n, i, s) {
  const o = jb(
    e,
    void 0,
    void 0,
    t,
    n ?? kc(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function mu(e, t, r, n, i, s, o) {
  if (Qe.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (f) => {
      f.editor.update(() => {
        l = Wk(
          e,
          f.reference,
          t,
          r,
          n,
          i
        );
      }, s);
    }, label: void 0, getInsertedNoteKey: () => l };
  }
  const a = oN(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = P();
      E(u) && (fb(u), l.noteText = u.getTextContent());
      const { content: f, highlightInserted: d } = a.action(l), p = eh(f, wn, r), h = Hc(p);
      if (E(u)) {
        const m = u.anchor.getNode(), g = m.getParent(), k = Ei(m), b = u.anchor.key === u.focus.key;
        if (U(h) && k && b && !kl(h, o))
          nN(
            u,
            h,
            m,
            r?.markerMode === "editable"
          );
        else if (U(h) && !b && !kl(h, o) && iN(u))
          sN(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          aN(
            u,
            () => Hc(p)
          );
        else if (A(h) && !h.isInline()) {
          const C = u.insertParagraph();
          if (C) {
            const R = C.getChildren();
            h.append(...R), C.replace(h), Ye(h) && Rs(h) || h.selectStart();
          }
        } else if (U(h) && v(m) && !M(m) && U(m.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        kl(h, o)) {
          const C = m.getParent();
          if (U(C)) {
            const R = u.anchor.offset;
            if (R === 0) m.insertBefore(h);
            else if (R >= m.getTextContentSize()) m.insertAfter(h);
            else {
              const [F] = m.splitText(R);
              F.insertAfter(h);
            }
            h.getChildren().forEach((F) => {
              M(F) && F.setNested(!0);
            });
            const w = h.getChildren().find((F) => v(F) && !M(F));
            w && v(w) ? w.select(
              w.getTextContentSize(),
              w.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (v(m) && !M(m) && u.isCollapsed() && (L(g) || U(g) && L(g.getParent()))) {
          const C = U(g) ? g : void 0, R = C ? tN(m, u.anchor.offset) : [];
          let F = (C ?? m).insertAfter(h);
          if (Or(h)) {
            const Y = {
              ...r || kc(),
              markerMode: "hidden"
            }, N = eh(
              f,
              wn,
              Y
            ), W = Hc(N);
            F = F.insertAfter(W);
          }
          if (R.length > 0 && C) {
            const Y = Ba(C).append(...R);
            F.insertAfter(Y), C.isEmpty() && C.remove();
          } else v(F.getNextSibling()) || F.insertAfter(Mi());
          A(F) && F.selectEnd();
        } else if (u.insertNodes([h]), yN(h), d) {
          const C = lm();
          C.add(h.getKey()), Sn(C);
        } else if (U(h)) {
          const C = h.getChildren().find((R) => v(R) && !M(R));
          C && v(C) ? C.select(
            C.getTextContentSize(),
            C.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const C = h.getNextSibling();
          C ? C.selectStart() : h.selectStart();
        }
      } else
        u?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function tN(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function kl(e, t) {
  return ((t ?? Oa).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function rN(e, t) {
  t && e.getChildren().forEach((i) => {
    M(i) && i.setNested(!0);
  }), e.getChildren().some((i) => M(i) && i.getMarkerSyntax() === "closing") || e.append(_t(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function nN(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && U(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !v(r)) {
    const o = e.anchor.offset;
    if (v(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else v(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = Ts(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ys(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith($) && i.setTextContent($ + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !M(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !M(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function iN(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (M(n) || U(n)) continue;
    if (!v(n) || n.getType() !== Xe.getType() || fe(n, be) === "attribute") return !1;
    const i = If(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Ei(n) && (r = !0);
  }
  return r;
}
function sN(e, t, r) {
  const n = zk(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Ei(a)) return;
    ys(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith($) && c.setTextContent(l.slice($.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith($) || i.setTextContent($ + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !M(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function oN(e, t) {
  let r = Vk[e];
  return r || (Et.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Et.getType(), marker: e, content: [] }] })
  } : Ue.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: Ue.getType(), marker: e };
      return (Ue.isValidFootnoteMarker(e) || Ue.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function aN(e, t) {
  const r = e.getNodes(), [n, i] = Ts(e);
  let s;
  r.forEach((o, a) => {
    if (A(s) && s.isParentOf(o))
      return;
    const c = Hk(
      o,
      a === 0,
      a === r.length - 1,
      n,
      i
    );
    if (!c) {
      s = void 0;
      return;
    }
    let l = !1;
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((f) => M(f) && f.getMarkerSyntax() === "opening") && rN(s, U(s.getParent()))), lN(c, s, l);
  }), (v(s) || A(s)) && s.selectEnd();
}
function Ts(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function yd(e) {
  return pe(e) || L(e) || L(e.getParent());
}
function Hk(e, t, r, n, i) {
  if (!yd(e)) {
    if (v(e))
      return cN(e, t, r, n, i);
    if (A(e) && e.isInline())
      return e;
  }
}
function cN(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function lN(e, t, r) {
  if (v(t)) {
    const n = yu(e, t);
    t.setTextContent(n), e.remove();
  } else if (A(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => M(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !M(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    yu(e, t), r && U(t) && t.getChildren().some((s) => M(s)) && v(e) && !M(e) && !e.getTextContent().startsWith($) && e.setTextContent($ + e.getTextContent());
  }
}
function yu(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Kf(n), v(n) || t.insertBefore($e(" "));
  }
  return r;
}
function Gk(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), f = e.anchor.offset, d = Ni(u, t);
    if (!d) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (ug(d, r), v(u) && u.isAttached()) {
      const h = u.getTextContentSize(), m = Math.max(p - h, 0), g = Math.max(0, Math.min(f - m, h)), k = P();
      E(k) && k.setTextNodeRange(u, g, u, g);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Ts(e);
  if (!kd(n, t, s, o)) return !1;
  const a = bd(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const f = Ni(u, t);
    if (!f || c.has(f.getKey())) return;
    c.add(f.getKey());
    const d = Qk(f, a);
    d && (ug(d, r), l = !0);
  }), Zk(a, i), l;
}
function ug(e, t) {
  e.getChildren().forEach((n) => {
    Rr(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Tt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    v(n) && i.startsWith($) && n.setTextContent(i.slice($.length));
  }), El(e);
}
function bd(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Hk(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    v(o) && n.push(o);
  }), n;
}
function Ni(e, t) {
  let r = e, n;
  for (; r && !Ye(r); ) {
    if (L(r)) return;
    !n && U(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Jk(e) {
  const t = St(
    e,
    (r) => L(r) || Ye(r)
  );
  return L(t);
}
function Yk(e) {
  return e.filter(
    (t) => !yd(t) && (v(t) || A(t) && t.isInline())
  );
}
function uN(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || yd(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function fN(e, t, r) {
  return e.getChildren().some(
    (n) => A(n) && t.some((i) => n.isParentOf(i)) && !Xk(n, r)
  );
}
function kd(e, t, r, n, i) {
  const s = Yk(e), o = uN(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Ni(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !fN(l, s, o);
  });
}
function Xk(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Rr(r));
}
function Qk(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (A(u) && t.some((f) => u.isParentOf(f))) {
      if (!Xk(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Rr(n[s - 1]) && (s -= 1), o < n.length - 1 && Rr(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Ba(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Ba(e).append(...c)), e;
}
function Ba(e) {
  return Yv(e);
}
function Zk(e, t) {
  const r = P(), n = e[0], i = e[e.length - 1];
  if (!E(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function dN(e, t, r) {
  if (e.isCollapsed()) {
    const l = Ni(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Lp(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Ts(e);
  if (!kd(n, r, i, s, t)) return !1;
  const o = bd(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Ni(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const f = Qk(u, o);
    f && (Lp(f, t), c = !0);
  }), c;
}
function pN(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (g) => g !== t
  ), s = e.getNodes(), [o, a] = Ts(e);
  if (!!!i?.some(
    (g) => kd(s, g, o, a)
  ) && !hN(s, t)) return !1;
  let l = !1;
  i?.forEach((g) => {
    const k = P();
    E(k) && Gk(k, g, n) && (l = !0);
  });
  const u = P();
  if (!E(u)) return l;
  const f = u.isBackward(), [d, p] = Ts(u), h = bd(
    u.getNodes(),
    d,
    p
  );
  if (h.length === 0) return l;
  const m = h.filter(
    (g) => !Jk(g) && !Ni(g, t)
  );
  return m.length > 0 && (gN(m).forEach((g) => mN(g, t)), l = !0), Zk(h, f), l;
}
function hN(e, t) {
  return Yk(e).some(
    (r) => !Jk(r) && !Ni(r, t)
  );
}
function gN(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function mN(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => U(a) && a.getMarker() === t
  ), s = i ? Ba(i) : _n(t);
  e[0].insertBefore(s), s.append(...e), i === r || yu(e[0], s);
}
function yN(e) {
  Ne(e) && (Kf(e.getPreviousSibling()), bb(e.getNextSibling()));
}
const ex = {
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
}, fg = "psc-active-text", ia = "psc-empty-text";
function bN({ viewOptions: e }) {
  const [t] = Te(), r = ue(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return J(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(fg), r.current = o, o && t.getElementByKey(o)?.classList.add(fg);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        rc,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${ia}`);
          if (!c) return !1;
          const l = $i(c);
          if (!Ne(l)) return !1;
          const u = l.getParent();
          if (!A(u)) return !1;
          const f = l.getIndexWithinParent() + 1;
          return u.select(f, f), !1;
        },
        Bt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const f = xl(), d = kN(), p = [], h = [];
          return _e().getChildren().forEach((m) => {
            if (!A(m)) return;
            const { emptyKeys: g, nonEmptyKeys: k } = TN(m);
            p.push(...g), h.push(...k);
          }), { newActiveKey: f, activeVerseKey: d, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((f) => {
          f === c ? t.getElementByKey(f)?.classList.remove(ia) : t.getElementByKey(f)?.classList.add(ia);
        }), u.forEach((f) => t.getElementByKey(f)?.classList.remove(ia));
      }),
      t.registerCommand(
        Hu,
        () => (i(void 0), !1),
        Bt
      ),
      t.registerCommand(
        Xv,
        () => {
          const o = t.getEditorState().read(xl);
          return o !== r.current && i(o), !1;
        },
        Bt
      )
    ];
    return i(t.getEditorState().read(xl)), ct(...s);
  }, [t, n]), null;
}
function xl() {
  return xN(P() ?? void 0)?.getKey();
}
function kN() {
  const e = P();
  if (!E(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!A(n)) return;
  let i;
  if (r.is(n))
    i = t.offset;
  else {
    let a = r;
    for (; a && !a.getParent()?.is(n); )
      a = a.getParent() ?? void 0;
    if (!a) return;
    i = a.getIndexWithinParent() + 1;
  }
  const s = n.getChildren();
  let o;
  for (let a = 0; a < i && a < s.length; a++)
    Ne(s[a]) && (o = s[a].getKey());
  return o;
}
function xN(e) {
  if (E(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function TN(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Ne(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Ne(c)) break;
      if (!(It(c) || M(c)) && c.getTextContent().replaceAll(go, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const vN = /^\+/;
function xd(e, t) {
  const r = t.replace(vN, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function tx(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function rx(e, t) {
  return tx(e, t) !== void 0;
}
function bu(e, t) {
  const r = tx(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function za(e, t, r) {
  const n = A(e) ? e.getChildren().filter(M) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function CN(e, t, r, n, i) {
  const s = xd(n, t);
  if (!s) {
    za(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && za(e, "invalid", i);
}
function ao(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || CN(s, o, t, r, n), ao(s, t, r, n, i || o === "xq");
    } else if (Ne(s)) {
      if (i) continue;
      const o = xd(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else L(s) ? ao(s, s.getMarker(), r, n, i) : Ge(s) || A(s) && ao(s, t, r, n, i);
}
function SN(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = xd(e, a);
    if (!c) {
      za(o, "unknown", r), bu(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    bu(n, l) || za(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of _e().getChildren())
    Ge(o) || (Mt(o) || at(o) ? i(o, o.getMarker()) : ge(o) ? (i(o, o.getMarker()), s(o) && ao(o, o.getMarker(), e, r, !1)) : A(o) && s(o) && ao(o, "p", e, r, !1));
  return r;
}
function _N(e) {
  return !!e?.includes("(basic)");
}
function MN(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function nx(e, t) {
  return !e.startsWith("zpa") && e !== "c" && gu(e, t);
}
function Td(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function ix(e, t) {
  const r = [];
  for (const n of t) {
    const i = Td(e, n);
    i && bu(r, i);
  }
  return r;
}
function ha(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: MN(e.description),
    isBasic: _N(e.description)
  };
}
function EN(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function ku(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : EN(e.marker, t.marker);
}
function xu(e, t, r) {
  if (t.noteMarker) return [];
  const n = ix(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && nx(i.marker, r)
  ).filter((i) => {
    const s = Td(e, i.marker);
    return s !== void 0 && rx(n, s);
  }).map((i) => ha(i, "paragraph")).sort(ku);
}
function AN(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => nx(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => ha(c, "character")).sort(ku);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => ha(c, "character")),
    ...a.map((c) => ha(c, "note"))
  ].sort(ku);
}
function PN(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function wN(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function NN(e, t, r) {
  return [
    ...PN(e, t.openCharMarkers),
    ...AN(e, t, r)
  ].sort(wN);
}
function ON(e, t, r) {
  if (t.source === "paragraph") return xu(e, t, r);
  const n = NN(e, t, r);
  return n.length > 0 ? n : xu(e, t, r);
}
function RN(e, t, r) {
  const n = xu(e, t, r), i = ix(e, t.previousParaMarkers), s = Td(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && rx(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const qr = String.raw`\w-`, sx = "a-z0-9", $N = `[a-z][${sx}]*`, ox = new RegExp(
  String.raw`^\\(\+?[${qr}]+)[ \u00A0]$`
), $s = new RegExp(String.raw`^\\(\+?[${qr}]+)$`), IN = new RegExp(String.raw`^\\\+?[${qr}]*\*$`), qN = new RegExp(
  String.raw`^\\(\+?[${qr}]+)(?:[ \u00A0]|$)`
), LN = new RegExp(
  String.raw`^\\(\+?)([${qr}]+)`
), ax = new RegExp(
  String.raw`^(?:[${qr}]+[*\\]?|[*\\])$`
), DN = new RegExp(
  String.raw`\\\+?[${qr}]+(?:\\?\*|[ \u00A0])`
), cx = new RegExp(
  String.raw`\\\+?[${qr}]*$`
), UN = new RegExp(
  String.raw`^\\(${$N})( |$)`
), KN = new RegExp(
  String.raw`\\[${sx}+*]*$`,
  "i"
), ja = "￼", dg = "|", as = "\\", Tl = "+", FN = /([-\w]+)="(.*?)"/g, BN = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), zN = /* @__PURE__ */ new Map([["file", "src"]]);
class vd {
  segments = [];
  /** Differing segments are never merged: the boundary between two of them (two adjacent literals)
   * is a position both sides share. */
  push(t, r, n, i, s, o = !1) {
    if (t === r && n === i) return;
    const a = this.segments[this.segments.length - 1];
    s && a?.same && a.liveEnd === t && a.settledEnd === n ? this.segments[this.segments.length - 1] = { ...a, liveEnd: r, settledEnd: i } : this.segments.push({
      liveStart: t,
      liveEnd: r,
      settledStart: n,
      settledEnd: i,
      same: s,
      ...o ? { nesting: o } : {}
    });
  }
  /** Two stretches that differ somewhere: the bytes both begin with, and then the bytes both end
   * with, line up one for one; what is left maps only its ends. */
  pushStretch(t, r, n, i) {
    const s = Math.min(t.length, n.length);
    let o = 0;
    for (; o < s && t[o] === n[o]; ) o += 1;
    let a = 0;
    for (; a < s - o && t[t.length - 1 - a] === n[n.length - 1 - a]; )
      a += 1;
    const c = r + t.length, l = i + n.length;
    this.push(r, r + o, i, i + o, !0), this.push(r + o, c - a, i + o, l - a, !1), this.push(c - a, c, l - a, l, !0);
  }
}
function pg(e, t) {
  const r = [e.indexOf(as, t + 1), e.indexOf(ja, t + 1)].filter(
    (n) => n >= 0
  );
  return r.length > 0 ? Math.min(...r) : e.length;
}
function hg(e) {
  const t = e.slice(1), r = [...t.matchAll(FN)];
  return r.length > 0 ? r.map((n) => n[0]).join("") !== t || r.some((n) => n[2] === "") ? void 0 : r.map((n) => {
    const i = 1 + (n.index ?? 0), s = i + n[1].length + 2;
    return {
      name: n[1],
      start: i,
      end: i + n[0].length,
      valueStart: s,
      valueEnd: s + n[2].length,
      value: n[2]
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
function jN(e, t) {
  const r = e.map(
    (o, a) => o.name === void 0 || !BN.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), n = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && zN.get(o.name) === a.name), i = /* @__PURE__ */ new Set(), s = [];
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, u) => r[u] && !i.has(u) && n(l, o)
    );
    c < 0 || (i.add(c), s.push([c, a]));
  }), s;
}
function gg(e, t, r) {
  let n = 0, i = -1;
  for (const s of e) {
    if (!s.same) continue;
    const { end: o, otherEnd: a } = Vo(s, r);
    o <= t && o > i && (i = o, n = a);
  }
  return n;
}
function VN(e, t, r, n, i) {
  if (e === t) {
    r.push(n, n + e.length, i, i + t.length, !0);
    return;
  }
  const s = hg(e), o = hg(t);
  if (!s || !o) {
    r.push(n, n + 1, i, i + 1, !0), r.pushStretch(e.slice(1), n + 1, t.slice(1), i + 1);
    return;
  }
  const a = new vd();
  a.push(0, 1, 0, 1, !0);
  const c = jN(s, o);
  for (const [d, p] of c) {
    const h = s[d], m = o[p];
    a.pushStretch(
      e.slice(h.start, h.valueStart),
      h.start,
      t.slice(m.start, m.valueStart),
      m.start
    ), a.push(h.valueStart, h.valueEnd, m.valueStart, m.valueEnd, !0), a.pushStretch(
      e.slice(h.valueEnd, h.end),
      h.valueEnd,
      t.slice(m.valueEnd, m.end),
      m.valueEnd
    );
  }
  const l = [...a.segments], u = new Set(c.map(([d]) => d));
  s.forEach((d, p) => {
    if (u.has(p)) return;
    const h = gg(l, d.start, "live");
    a.push(d.start, d.end, h, h, !1);
  });
  const f = new Set(c.map(([, d]) => d));
  o.forEach((d, p) => {
    if (f.has(p)) return;
    const h = gg(l, d.start, "settled");
    a.push(h, h, d.start, d.end, !1);
  }), a.segments.sort(
    (d, p) => d.settledStart - p.settledStart || d.settledEnd - p.settledEnd || d.liveStart - p.liveStart
  ).forEach(
    (d) => r.push(
      n + d.liveStart,
      n + d.liveEnd,
      i + d.settledStart,
      i + d.settledEnd,
      d.same
    )
  );
}
function lx(e, t, r, n, i) {
  let s = t, o = 0;
  for (; s < e.length && o < r.length; ) {
    const c = r[o] === ja && e[s] !== ja ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const u = new vd(), f = lx(e, s, c, u, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: f,
        inner: { segments: GN(u.segments, s) }
      }), n.push(s, f, o, o + 1, !1), s = f, o += 1;
      continue;
    }
    if (e[s] === dg && r[o] === dg) {
      const u = pg(e, s), f = pg(r, o);
      VN(e.slice(s, u), r.slice(o, f), n, s, o), s = u, o = f;
      continue;
    }
    const l = r[o] === as ? WN(e, s, r, o) || HN(e, s, r, o, i.spellings) : 0;
    if (l > 0) {
      n.push(s, s, o, o + l, !1), o += l;
      continue;
    }
    if (e[s] === r[o]) {
      n.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (e[s - 1] === as && r[o - 1] === as && e[s] === Tl != (r[o] === Tl)) {
      e[s] === Tl ? (n.push(s, s + 1, o, o, !1, !0), s += 1) : (n.push(s, s, o, o + 1, !1, !0), o += 1);
      continue;
    }
    if (i.prefix) {
      const u = r.lastIndexOf(as), f = u >= o ? r.slice(u) : void 0, d = f === void 0 ? -1 : e.indexOf(f, s);
      return f === void 0 || d < 0 ? (n.push(s, s, o, r.length, !1), s) : (n.pushStretch(e.slice(s, d), s, r.slice(o, u), o), n.push(d, d + f.length, u, r.length, !0), d + f.length);
    }
    return n.pushStretch(e.slice(s), s, r.slice(o), o), e.length;
  }
  const a = i.prefix ? s : e.length;
  return n.push(s, a, o, r.length, !1), a;
}
const cs = /\\\+?[\w-]+/y;
function WN(e, t, r, n) {
  cs.lastIndex = n;
  const i = cs.exec(r)?.[0];
  return !i || r[n + i.length] !== as ? 0 : r.startsWith(i, n + i.length) && e.startsWith(i, t) && !e.startsWith(i, t + i.length) ? i.length : 0;
}
function HN(e, t, r, n, i) {
  cs.lastIndex = n;
  const s = cs.exec(r)?.[0];
  if (!s || r[n + s.length] !== ja) return 0;
  const o = i?.get(n + s.length);
  if (o === void 0 || e.startsWith(s, t)) return 0;
  cs.lastIndex = 0;
  const a = cs.exec(o)?.[0];
  return a !== void 0 && e.startsWith(a, t) ? s.length : 0;
}
function GN(e, t) {
  return e.map((r) => ({
    ...r,
    liveStart: r.liveStart - t,
    liveEnd: r.liveEnd - t
  }));
}
function JN(e, t, r) {
  const n = new vd(), i = /* @__PURE__ */ new Map();
  return lx(e, 0, t, n, { prefix: !1, spellings: r, literals: i }), { alignment: { segments: n.segments }, literals: i };
}
function Vo(e, t) {
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
function ux(e, t, r) {
  return e.segments.find((n) => {
    const { start: i, end: s } = Vo(n, r);
    return i <= t && t < s;
  });
}
function fx(e, t) {
  let r = 0, n = 0;
  for (const i of e.segments) {
    const { end: s, otherEnd: o } = Vo(i, t);
    r = Math.max(r, s), n = Math.max(n, o);
  }
  return [r, n];
}
function Cd(e, t, r) {
  const n = ux(e, t, r);
  if (n) {
    const { start: o, otherStart: a } = Vo(n, r);
    return n.same ? a + (t - o) : void 0;
  }
  const [i, s] = fx(e, r);
  return t === i ? s : void 0;
}
function Is(e, t, r) {
  const n = ux(e, t, r);
  if (n) {
    const { start: i, otherStart: s } = Vo(n, r);
    return n.same ? s + (t - i) : s;
  }
  return fx(e, r)[1];
}
function YN(e, t) {
  const r = Is(e, t, "settled"), n = e.segments.find(
    (i) => i.nesting && i.settledStart === t && i.settledEnd === t && i.liveEnd === r
  );
  return n ? n.liveStart : r;
}
const fr = /\s/;
function XN(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function Tu(e) {
  const t = [];
  for (const n of e.spans)
    for (let i = n.start; i < n.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: fr.test(s) });
    }
  const r = e.spans.filter((n) => n.isSentinel).map((n) => n.start);
  return { bytes: t, placeholders: r };
}
function ga({ bytes: e }, t) {
  return e.filter((r) => r.position < t && !r.isWs).length;
}
function QN({ bytes: e }, t) {
  let r = 0;
  for (const n of e) n.position < t && (r = n.isWs ? r + 1 : 0);
  return r;
}
function vu({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const mg = "cat", ZN = "category";
function eO(e) {
  return v(e) && e.getTextContent().trim() === "";
}
function tO(e) {
  const t = { text: "", spans: [], sentinels: [] }, r = [], n = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    n(a, XN(mg, c)), r.push({
      ownerKey: a.getKey(),
      markerName: mg,
      keyName: ZN,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = oc(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const f = Vt(a);
    let d = !1;
    for (const p of a.getChildren())
      u !== void 0 && d && !eO(p) && (i(a, u), u = void 0), o(p), (Lt(p) || f && (f.is(p) || p.isParentOf(f))) && (d = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (Lt(a)) {
      const c = a.getParent();
      n(a, L(c) ? c.getCaller() : "");
    } else v(a) || It(a) ? n(a, a.getTextContent()) : L(a) ? s(a) : A(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: r };
}
function Sd(e) {
  const t = Tu(e);
  return {
    runs: e.sentinels.map((r, n) => {
      const { spelling: i, foldedAttributes: s } = tO(r);
      return {
        memberCount: r.length,
        before: ga(t, t.placeholders[n] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: vu(Tu(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: vu(t).map(({ byte: r }) => r).join("")
  };
}
function Va(e, t) {
  return {
    facts: Tu(e),
    carried: e.sentinels.map((r, n) => {
      const i = new Set(t[n]?.map((s) => s.getKey()));
      return r.map((s) => i.has(s.getKey()));
    })
  };
}
function Wa(e, t) {
  const r = e.carried.map(
    (d) => d.map(() => {
    })
  ), n = vu(e.facts), { alignment: i, literals: s } = JN(
    n.map(({ byte: d }) => d).join(""),
    t.bytes,
    new Map(t.runs.map((d) => [d.before, d.spelled]))
  ), o = (d, p) => {
    let h = 0;
    e.carried[d].forEach((m, g) => {
      m && (r[d][g] = { sentinelIndex: p, memberIndex: h }, h += 1);
    });
  }, a = (d) => d.filter(Boolean).length, c = e.carried.reduce((d, p) => d + a(p), 0), l = t.runs.reduce((d, p) => d + p.memberCount, 0);
  if (c === l) {
    const d = t.runs.flatMap(
      (h, m) => Array.from({ length: h.memberCount }, (g, k) => ({ sentinelIndex: m, memberIndex: k }))
    );
    let p = 0;
    return e.carried.forEach(
      (h, m) => h.forEach((g, k) => {
        g && (r[m][k] = d[p++]);
      })
    ), { sentinelMap: r, settledOnlyRuns: [], alignment: i };
  }
  const u = new Map(t.runs.map((d, p) => [d.before, p]));
  e.carried.forEach((d, p) => {
    const h = e.facts.placeholders[p];
    if (h === void 0 || a(d) === 0) return;
    const m = Cd(i, ga(e.facts, h), "live"), g = m === void 0 ? void 0 : u.get(m);
    g === void 0 || t.runs[g].memberCount !== a(d) || o(p, g);
  });
  const f = [];
  for (const [d, p] of s) {
    const h = u.get(d);
    if (h === void 0) continue;
    const m = t.runs[h], g = n[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, k = p.liveEnd > p.liveStart ? n[p.liveEnd - 1].position + 1 : g, b = ga(e.facts, g);
    f.push({
      sentinelIndex: h,
      liveBefore: b,
      liveLength: ga(e.facts, k) - b,
      liveWsBefore: QN(e.facts, g),
      settledBefore: m.before,
      spelling: m.spelling,
      inner: p.inner,
      foldedAttributes: m.foldedAttributes
    });
  }
  return { sentinelMap: r, settledOnlyRuns: f, alignment: i };
}
function Wo(e, t, r) {
  return {
    nonWsBefore: Is(
      e,
      t.nonWsBefore,
      r === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function dx(e, t, r) {
  return Cd(e.inner, t, r === "toSpelling" ? "live" : "settled");
}
function px(e, t) {
  return e.find(
    (r) => t.nonWsBefore === r.liveBefore && t.wsRun >= r.liveWsBefore
  );
}
function _d(e, t) {
  for (const r of e) {
    const n = t.nonWsBefore - r.liveBefore;
    if (n <= 0 || n >= r.liveLength) continue;
    const i = dx(r, n, "toSpelling");
    return {
      run: r,
      count: n,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function Md(e, t) {
  const r = /* @__PURE__ */ new Map();
  e.sentinels.forEach(
    (n, i) => n.forEach(
      (s, o) => r.set(s.getKey(), { sentinelIndex: i, memberIndex: o, member: s })
    )
  );
  for (let n = t; n; n = n.getParent()) {
    const i = r.get(n.getKey());
    if (i) return i;
  }
}
function Ed(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
const ht = Uo;
function hx(e) {
  return e.length > 1 && e.startsWith($) && e.charAt(1) !== ht ? e.slice(1) : e;
}
function yg(e) {
  return Ps(e) ? e.markerSyntax ?? "opening" : void 0;
}
function gx(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = wn.serializeEditorState(
    {
      type: Tn,
      version: xn,
      content: [
        {
          ...e.getUnknownAttributes(),
          type: "note",
          marker: e.getMarker(),
          caller: e.getCaller(),
          ...r !== void 0 && { category: r },
          content: t
        }
      ]
    },
    i
  ).root.children, o = s.length === 1 ? s[0] : void 0, a = Array.isArray(o?.children) ? o.children : void 0;
  if (!a) return { failure: "shape" };
  let c = 0;
  for (; yg(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== gt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && yg(a[u - 1]) === "closing"; )
    u--;
  const f = a.slice(c, u);
  return f.length === 0 ? { failure: "empty" } : { children: f };
}
function Hs(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Gs(e, t) {
  const r = cx.exec(e.text)?.[0];
  r !== void 0 && (e.text += r === "\\" ? $ : " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += ht;
}
function Rt(e) {
  return e.replaceAll($, " ");
}
const rO = `\\${$}${ht}`;
function mx(e) {
  return e.forEach((t, r) => {
    typeof t == "string" ? e[r] = t.replaceAll(rO, `\\${ht}`) : t.content && mx(t.content);
  }), e;
}
function nO(e) {
  return L(e[0]) ? "note" : Le(e[0]) ? "verse" : "other";
}
function qs(e, t) {
  return mx(
    sc(e.text, {
      ...t,
      placeholders: e.sentinels.map(nO)
    })
  );
}
function iO(e, t, r = !1, n = !1) {
  if (Dt(t)) return Rt(e);
  if (e === $ && !n) return " ";
  const i = r && e.startsWith($), s = i ? e.slice(1) : e, o = r && !i ? sO.exec(s) : null;
  return o ? `${o[0]} ${s.slice(o[0].length + 1).replaceAll($, "~")}` : (i ? " " : "") + s.replaceAll($, "~");
}
const sO = /^[^\s\u200B\\|*]+(?=\u00A0)/;
function ps(e) {
  const t = e.getTextContent();
  return mr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Ec(e, t) {
  const r = e[t];
  if (!Ie(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ac(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!M(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function yx(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Ac(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = vo(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Ad(e) {
  return !!e.getUnknownAttributes();
}
function Pc(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && sf(e);
}
function Pd(e) {
  return e.getIsCollapsed() !== !1 || e.getChildren().some((r) => M(r) && r.getMode() === "token") || Object.keys(e.getUnknownAttributes() ?? {}).some((r) => r !== "closed") ? !1 : e.getChildren().some((r) => {
    if (!M(r) || pn(r)) return !1;
    if (r.getMarkerSyntax() !== "opening") return !0;
    const n = r.getTextContent(), i = ($s.exec(n) ?? ox.exec(n))?.[1];
    return i === void 0 || i.startsWith("+") || !Qe.isValidMarker(i) || r.getMarker() !== e.getMarker();
  });
}
function bx(e, t) {
  return Ie(e) ? !Pc(e.getMarker(), t) : L(e) ? !Pd(e) : Ge(e) ? !0 : Le(e) ? Ad(e) : U(e) ? kx(e, t) : !1;
}
function kx(e, t) {
  return xx(e, e.getMarker(), t);
}
function xx(e, t, r) {
  return xS(e) ? !0 : !jC(t) && r(t) === void 0;
}
const Zt = "", er = "";
function bg(e) {
  return e.flatMap((t) => Ke(t) ? t.getChildren() : [t]);
}
function ns(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ie(s)) {
      const o = Ec(e, i);
      Pc(s.getMarker(), r) && yx(o) ? (t.push(
        Zt,
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
          marker: s.getMarker(),
          sid: s.getSid() ?? null,
          eid: s.getEid() ?? null,
          unknownAttributes: s.getUnknownAttributes() ?? null,
          attributeOrder: s.getAttributeOrder() ?? null
        })
      ), ns(bg(o), t, r), t.push(er)) : t.push(ht), i += o.length;
    } else if (Le(s)) {
      const o = Ac(e, i);
      Ad(s) ? t.push(ht) : (t.push(
        Zt,
        "verse",
        Rt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ns(bg(o), t, r), t.push(er)), i += o.length;
    } else M(s) ? t.push(Zt, "marker", Rt(s.getTextContent()), er) : yr(s) ? t.push(
      Zt,
      "unmatched",
      Rt(s.getTextContent()),
      s.getMarker(),
      er
    ) : bx(s, r) ? t.push(ht) : Lo(s) ? t.push(" ") : v(s) && fe(s, be) === "attribute" ? t.push(
      Zt,
      "attribute",
      Rt(ps(s)),
      er
    ) : v(s) ? t.push(
      Rt(
        n ? hx(ps(s)) : ps(s)
      )
    ) : U(s) ? (t.push(Zt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ns(s.getChildren(), t, r, !0), t.push(er)) : pe(s) ? ns(s.getChildren(), t, r, n) : A(s) ? (t.push(Zt, s.getType()), ns(s.getChildren(), t, r), t.push(er)) : t.push(ht);
  }
}
function Ls(e, t) {
  const r = [];
  return ns(e, r, t), r.join("");
}
function Nn(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function vs(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function oO(e) {
  return e.$?.textType;
}
function wd(e) {
  return e.type ?? "";
}
function wc(e, t, r) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : ze(e, r);
}
function vl(e, t) {
  const r = e[t];
  if (!(!r || wd(r) !== "attribute-run"))
    return Nn(r) ?? [];
}
function Ds(e, t) {
  const r = [];
  return eo(e, r, t), r.join("");
}
function eo(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = wd(s);
    if (o === "ms") {
      const l = s, u = vl(e, i + 1);
      u && Pc(l.marker ?? "", r) ? (t.push(
        Zt,
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
      ), eo(u, t, r), t.push(er), i += 1) : t.push(ht);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(ht);
        continue;
      }
      t.push(
        Zt,
        "verse",
        Rt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, f = vl(e, i + 1 + u);
      for (; f; )
        eo(f, t, r), u++, f = vl(e, i + 1 + u);
      t.push(er), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Zt,
        "marker",
        Rt(
          wc(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        er
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Zt, "char", JSON.stringify(l.unknownAttributes ?? null)), eo(Nn(s) ?? [], t, r, !0), t.push(er);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(ht);
      continue;
    }
    if (o === "unmatched") {
      const l = G_(s) ? s.marker : "";
      t.push(Zt, "unmatched", Rt(vs(s) ?? ""), l), t.push(er);
      continue;
    }
    const a = vs(s);
    if (a !== void 0 && oO(s) === "attribute") {
      t.push(Zt, "attribute", Rt(a), er);
      continue;
    }
    if (a !== void 0) {
      t.push(Rt(n ? hx(a) : a));
      continue;
    }
    const c = Nn(s);
    c ? (t.push(Zt, o), eo(c, t, r), t.push(er)) : t.push(ht);
  }
}
function Nc(e) {
  let t = 0;
  for (const r of e) {
    const n = Nn(r);
    if (n) {
      t += Nc(n);
      continue;
    }
    const i = vs(r);
    if (i !== void 0)
      for (const s of i) s === ht && t++;
  }
  return t;
}
function Cs(e, t, r, n, i) {
  Fr(e.getChildren(), t, r, n, i);
}
function Fr(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (M(a))
      Hs(t, a, Rt(a.getTextContent()));
    else if (Ie(a)) {
      s();
      const c = Ec(e, o);
      Pc(a.getMarker(), r) && yx(c) ? Fr(c, t, r, n) : Gs(t, [a, ...c]), o += c.length;
    } else if (L(a) && Pd(a)) {
      s();
      const c = Vt(a);
      for (const l of a.getChildren())
        c?.is(l) ? Hs(t, l, Rt(l.getTextContent())) : Fr([l], t, r, n);
    } else if (L(a) || Ge(a))
      s(), Gs(t, [a]);
    else if (Le(a)) {
      s();
      const c = Ac(e, o);
      Ad(a) ? Gs(t, [a, ...c]) : (Hs(t, a, Rt(ps(a))), Fr(c, t, r, n)), o += c.length;
    } else if (U(a))
      s(), kx(a, r) ? Gs(t, [a]) : Cs(a, t, r, n, { pending: !0 });
    else if (Lo(a))
      s(), Hs(t, a, " ");
    else if (v(a)) {
      const c = a.getParent(), l = mr(a) || fe(a, be) === "attribute" || Re(c) && !!ei(c)?.is(a), u = s() && !l;
      Hs(
        t,
        a,
        l ? Rt(ps(a)) : iO(
          ps(a),
          n,
          u,
          Uy(a)
        )
      );
    } else A(a) ? Cs(a, t, r, n, i) : (s(), Gs(t, [a]));
  }
}
function Nd(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ge(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Cs(e, i, t, r), i;
}
function aO(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  return Cs(e, n, t, r), n;
}
function Od(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!ge(i)) return;
    const s = Nd(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function kg(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (ge(i)) {
      const s = Nd(i, t, r);
      if (!s) return;
      const o = n.text.length;
      s.spans.forEach(
        (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), n.sentinels.push(...s.sentinels), n.text += s.text;
    } else Re(i) ? Fr(i.getChildren(), n, t, r) : Fr([i], n, t, r);
  return n;
}
function Tx(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(ht);
        if (a < 0) break;
        let c = s, l;
        a > 0 && ([, c] = s.splitText(a)), c.getTextContent().length > 1 && ([c, l] = c.splitText(1));
        const u = t[r++];
        if (u && u.length > 0) {
          let f = c;
          for (const d of u)
            f.insertAfter(d), f = d;
        }
        c.remove(), s = l;
      }
    } else A(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function Cu(e, t = []) {
  for (const r of e)
    Le(r) ? t.push(r) : A(r) && Cu(r.getChildren(), t);
  return t;
}
function vx(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === ht && t++;
    else A(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function zi(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === ht && t++;
    else r.content && (t += zi(r.content));
  return t;
}
function Rd(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), A(i) && Cs(i, n, t, r);
  return n;
}
function jn(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : r, o) : o;
    for (let l = 0; l < c; l++)
      fr.test(e.text[s.start + l]) ? i++ : (n++, i = 0);
    if (a) return { nonWsBefore: n, wsRun: i };
  }
}
function Su(e, t) {
  t.add(e.getKey()), A(e) && e.getChildren().forEach((r) => Su(r, t));
}
function $d(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function co(e, t, r) {
  const n = (f, d) => {
    const p = jn(e, f, d), h = $d(e, f, d);
    return p && h ? { anchor: p, position: h.start + d } : void 0;
  }, i = (f) => {
    const d = f.end - f.start, p = jn(e, f.key, d);
    return p ? { anchor: p, position: f.start + d } : void 0;
  };
  if (!A(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((f) => Su(f, s));
  const o = [...e.spans].reverse().find((f) => s.has(f.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  Su(t, a);
  const c = e.spans.find((f) => a.has(f.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((f) => !a.has(f.key) && X(f.key)?.isBefore(t));
  if (l) return i(l);
  const u = e.spans[0];
  return u && !u.isSentinel ? n(u.key, 0) : void 0;
}
function lo(e) {
  if (e.isSentinel) return !1;
  const t = X(e.key);
  return M(t) && t.getMarkerSyntax() !== "opening";
}
function Cx(e) {
  const t = X(e.key);
  if (!M(t)) return;
  const r = t.getParent();
  if (!U(r)) return;
  const n = r.getParent();
  if (n)
    return {
      key: n.getKey(),
      offset: r.getIndexWithinParent() + 1,
      type: "element"
    };
}
function xg(e) {
  const t = X(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Le(t) ? Ac(n, i) : Ie(t) ? Ec(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function ir(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e;
  let s, o, a = t.nonWsBefore, c = t.wsRun, l = !1;
  e: for (const [p, h] of i.entries()) {
    const m = h.end - h.start, g = !h.isSentinel && (r || !lo(h));
    if (l) {
      if (!g) continue;
      s = { key: h.key, offset: 0 };
      break;
    }
    for (let k = 0; k < m; k++) {
      const b = n[h.start + k];
      if (a === 0 && (c === 0 || !fr.test(b))) {
        if (g) {
          s = { key: h.key, offset: k };
          break e;
        }
        l = !0;
        continue e;
      }
      a > 0 ? fr.test(b) || a-- : c--;
    }
    if (a === 0 && c === 0) {
      const k = i[p + 1]?.isSentinel === !0;
      if (g && (!r || k)) {
        s = { key: h.key, offset: m };
        break;
      }
      if (h.isSentinel && k) {
        const b = xg(h);
        if (b) return b;
      }
      g && (o = { key: h.key, offset: m }), l = !0;
    }
  }
  if (s) return { ...s, type: "text" };
  if (o) return { ...o, type: "text" };
  const u = i[i.length - 1];
  if (r && a === 0 && u && !u.isSentinel && u.end === n.length)
    return { key: u.key, offset: u.end - u.start, type: "text" };
  const f = i[i.length - 1];
  if (f && lo(f)) {
    const p = Cx(f);
    if (p) return p;
  }
  if (f?.isSentinel) {
    const p = xg(f);
    if (p) return p;
  }
  const d = [...i].reverse().find((p) => !p.isSentinel && !lo(p));
  if (d) return { key: d.key, offset: d.end - d.start, type: "text" };
}
function Sx(e, t = []) {
  for (const r of e)
    pe(r) && t.push(r), A(r) && Sx(r.getChildren(), t);
  return t;
}
function _x(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((r) => _x(r, t)), t;
}
function cO(e, t, r) {
  const n = jn(e, t.key, r);
  if (n)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: n,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: n };
}
function Oc(e, t, r = t.sentinels, n) {
  const i = [];
  for (const o of Sx(e)) {
    const a = _x(o), c = t.spans.filter((b) => a.has(b.key)), l = c[0], u = c[c.length - 1];
    if (!l || !u) continue;
    const f = cO(t, l, 0), d = jn(t, u.key, u.end - u.start);
    if (!f || !d) continue;
    const p = o.getTypedOnClicks(), h = o.getTypedOnRemoves(), m = o.getTypedOnMouseEnters(), g = o.getTypedOnMouseLeaves(), k = Object.entries(o.getTypedIDs()).flatMap(
      ([b, C]) => C.map((R) => ({
        type: b,
        id: R,
        onClick: p[b]?.[R],
        onRemove: h[b]?.[R],
        onMouseEnter: m[b]?.[R],
        onMouseLeave: g[b]?.[R]
      }))
    );
    k.length > 0 && i.push({ annotations: k, start: f, end: d });
  }
  const s = (o) => {
    const a = o.getKey();
    for (const c of Bn(o)) {
      if (c.start === c.end || !$d(t, a, c.start)) continue;
      const l = jn(t, a, c.start), u = jn(t, a, c.end);
      if (!l || !u) continue;
      const f = n && wa(n, c.type, c.id);
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
  return e.forEach(s), { ranges: i, live: i.length > 0 ? Va(t, r) : void 0 };
}
function lO(e, t, r) {
  const n = Mx(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!pe(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function uO(e, t) {
  const r = Mx(e);
  if (!r) return;
  const n = Ci();
  n.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), r[0].insertBefore(n), n.append(...r);
}
function Mx(e) {
  const t = X(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = Le(t) ? Ac(r, n) : Ie(t) ? Ec(r, n) : [];
  return [t, ...i];
}
function Ex(e, t, r, n) {
  const i = r.settledOnlyRuns, s = { addressDisplayBytes: n }, o = _d(i, e);
  if (o) {
    if (!o.within) return;
    const u = ir(o.run.spelling, o.within, s);
    return u ? { point: u, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex } : void 0;
  }
  const a = n && px(i, e);
  if (a) {
    const u = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), f = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, d = ir(t, f, s);
    return d && u ? { point: d, at: f.nonWsBefore, preservedKey: u } : void 0;
  }
  const c = Wo(r.alignment, e, "toSettled"), l = ir(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function fO(e, t, r) {
  if (e.kind === "byte") return Ex(e.anchor, t, r, !0);
  const n = r.sentinelMap[e.run]?.find((a) => a !== void 0), i = n && t.sentinels[n.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = Wo(r.alignment, e.anchor, "toSettled"), o = ir(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function Tg(e) {
  if (e.type !== "text") return e;
  const t = X(e.key);
  if (v(t)) return e;
  const r = t?.getParent();
  if (!t || !r) return;
  const n = t.getIndexWithinParent() + (e.offset > 0 ? 1 : 0);
  return { key: r.getKey(), offset: n, type: "element" };
}
function Rc({ ranges: e, live: t }, r) {
  if (e.length === 0 || !t) return;
  const n = P()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = r();
      if (!o) continue;
      const a = Wa(t, Sd(o)), c = fO(i.start, o, a), l = Ex(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const u = i.start.anchor;
      if (c.at === l.at && u.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { preservedKey: f } = c, d = Tg(c.point), p = Tg(l.point);
      if (!d || !p) continue;
      if (d.key === p.key && d.offset === p.offset && d.type === p.type) {
        f && uO(f, s);
        continue;
      }
      const h = Do();
      h.anchor.set(d.key, d.offset, d.type), h.focus.set(p.key, p.offset, p.type), Rf(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && lO(f, s.type, s.id);
    }
  Sn(n);
}
function Id(e, t, r) {
  if (r <= t) return e;
  const n = r - t, i = (s) => s <= t ? s : s >= r ? s - n : t;
  return {
    text: e.text.slice(0, t) + e.text.slice(r),
    spans: e.spans.map((s) => ({
      ...s,
      start: i(s.start),
      end: i(s.end)
    })),
    sentinels: e.sentinels
  };
}
function Ax(e, t) {
  return e.sentinels.filter((n, i) => n.length > 0 && (t[i]?.length ?? 0) === 0).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? Id(n, s.start, s.end) : n;
  }, e);
}
function Ho(e) {
  const t = e.exportJSON();
  return A(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(Ho(r))), t;
}
function qd(e, t, r, n, i, s, o) {
  const a = Oc(
    e,
    Ax(t, r),
    r
  );
  if (a.ranges.length === 0) return n;
  const c = Ju({
    nodes: [ut, ...Sc],
    onError: (u) => {
      throw u;
    }
  });
  Yu(
    c,
    ut,
    (u) => Ci(u.getTypedIDs()),
    (u, f) => Object.entries(u.getTypedIDs()).forEach(
      ([d, p]) => p.forEach((h) => f.addID(d, h))
    )
  );
  let l;
  return c.update(
    () => {
      const u = _e(), f = i === "noteContent" ? Er() : u;
      f !== u && u.append(f), l = f.getKey(), n.forEach((p) => f.append(_s(p))), Rc(a, () => {
        const p = f.getChildren();
        if (i === "paras") return Rd(p, s, o);
        if (i === "chapter")
          return Re(p[0]) ? Oo(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return Fr(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const u = l === void 0 ? void 0 : X(l);
    return A(u) ? u.getChildren().map(Ho) : n;
  });
}
function _u(e) {
  const t = X(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return v(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!A(t)) return !1;
  const r = Do();
  return r.anchor.set(e.key, e.offset, "element"), r.focus.set(e.key, e.offset, "element"), Sn(r), !0;
}
function dO(e, t, r) {
  const n = ir(e, t);
  if (n?.type === "text") {
    if (_u(n)) return;
  } else if (n) {
    const i = X(n.key), s = A(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find(A)?.selectStart();
}
function Ld(e, t) {
  const r = t.getNode(), n = Md(e, r), i = n && Ed(n.member, r);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? co(e, r, t.offset)?.anchor : jn(e, t.key, t.offset),
    inRun: n && i ? {
      sentinelIndex: n.sentinelIndex,
      memberIndex: n.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: Va(e, e.sentinels)
  };
}
function Px(e, t, r) {
  const n = t && Wa(t.live, Sd(e));
  if (t?.inRun && n) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: u } = t.inRun, f = n.sentinelMap[o]?.[a];
    let d = f && e.sentinels[f.sentinelIndex]?.[f.memberIndex];
    for (const p of c)
      d = A(d) ? d.getChildAtIndex(p) ?? void 0 : void 0;
    if (d && _u({ key: d.getKey(), offset: l, type: u })) return;
  }
  if (!t?.anchor || !n) {
    r.find(A)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = _d(n.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: Is(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = ir(s.run.spelling, o);
    if (a && _u(a)) return;
  }
  dO(
    e,
    Wo(n.alignment, i, "toSettled"),
    r
  );
}
function wx(e, t, r, n, i) {
  r && Px(Rd(e, n, i), t, e);
}
function pO(e, t, r, n, i) {
  if (!r) return;
  const s = { text: "", spans: [], sentinels: [] };
  Fr(e, s, n, i), Px(s, t, e);
}
function Nx(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Od(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = P();
  if (E(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((k) => k.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Ld(s, c.anchor));
  }
  const l = Oc(e, s, void 0, jt()), u = qs(s, {
    getMarker: n
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (zi(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const f = wn.serializeEditorState(
    { type: Tn, version: xn, content: u },
    r
  );
  if (Ds(f.root.children, n) === Ls(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = f.root.children.map((g) => _s(g));
  if (vx(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = Cu(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), h = e[0];
  d.forEach((g) => h.insertBefore(g)), Tx(d, s.sentinels), e.forEach((g) => g.remove());
  const m = Cu(d);
  for (let g = 0; g < p.length && g < m.length; g++)
    m[g].getNumber() === p[g].number && m[g].setSid(p[g].sid);
  return Rc(l, () => Rd(d, n, r)), wx(d, o, a, n, r), !0;
}
function No(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Qe.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!M(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(Lt(s) || v(s) && s.getTextContent() === gt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!M(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Fr(c, l, t, r), { out: l, contentNodes: c };
}
function Ox(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(ht)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function hO(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = No(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = P();
  if (E(u)) {
    for (let F = u.anchor.getNode(); F; F = F.getParent())
      if (e.is(F)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Ld(o, u.anchor));
  }
  const f = Oc(a, o, void 0, jt()), d = qs(o, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (zi(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = d;
  if (d.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], m = Ox(h), g = gx(e, h, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Nc(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== m;
  if (k && e.setCategory(m), Ds(g.children, n) === Ls(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const b = g.children.map((F) => _s(F));
  if (vx(b) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const C = a[0];
  if (C)
    b.forEach((F) => C.insertBefore(F));
  else {
    const F = e.getChildren().find((Y) => M(Y) && Y.getMarkerSyntax() === "closing");
    b.forEach((Y) => F ? F.insertBefore(Y) : e.append(Y));
  }
  Tx(b, o.sentinels);
  const R = new Set(o.sentinels.flat().map((F) => F.getKey()));
  a.forEach((F) => {
    R.has(F.getKey()) || (pe(F) && (F.getWritable().__suppressOnRemoveCallbacks = !0), F.remove());
  });
  const w = () => No(e, n, r);
  return Rc(f, () => w()?.out), pO(
    w()?.contentNodes ?? b,
    c,
    l,
    n,
    r
  ), !0;
}
const Rx = /* @__PURE__ */ new Set(["ca", "cp"]), Dd = "cp";
function $x(e) {
  if (!bt(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Cs(e, t, un, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = sc(r, { getMarker: un }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Dd)
  );
}
function ji(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (U(r) && Rx.has(r.getMarker()) || $x(r)) {
      t.push(r);
      continue;
    }
    ge(r) && r.getMarker() === Dd && t.push(r);
    break;
  }
  return t;
}
function gO(e) {
  const t = (n) => U(n) && Rx.has(n.getMarker()) || $x(n);
  if (t(e) || ge(e) && e.getMarker() === Dd)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Re(n)) return n;
      if (!t(n)) return;
    }
}
function Oo(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = ji(e);
  if (n.some((s) => ge(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Fr(e.getChildren(), i, t, r), Fr(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function mO(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...ji(e)], o = Oo(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = P();
  if (E(l)) {
    for (let g = l.anchor.getNode(); g; g = g.getParent())
      if (s.some((k) => k.is(g))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Ld(o, l.anchor));
  }
  const u = Oc(s, o, void 0, jt()), f = sc(o.text, { getMarker: n }), [d] = f;
  if (f.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (zi(f) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const p = wn.serializeEditorState(
    { type: Tn, version: xn, content: f },
    r
  );
  if (Ds(p.root.children, n) === Ls(s, n)) {
    let g = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), g = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), g = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const h = p.root.children.map((g) => _s(g));
  if (!Re(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const m = h[0];
  return h.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), Rc(
    u,
    () => Oo(m, n, r)
  ), wx(h, a, c, n, r), !0;
}
function Ro(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ge(n)) return;
    !t && (L(n) && !Pd(n) || ge(n) || Re(n)) && (t = n), Pr(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? gO(r) : void 0) ?? t;
}
function Cr(e, t) {
  const r = Ro(e);
  return r ? L(r) ? hO(r, t) : Re(r) ? mO(r, t) : Nx([r], t) : !1;
}
const yO = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function vg(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !yO.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function ma(e, t) {
  if (e)
    for (const r of e) {
      if (typeof r == "string") {
        t.push(r);
        continue;
      }
      const n = r.marker ?? "", i = r.closed;
      switch (r.type) {
        case "verse":
          t.push(`\\${n} ${r.number ?? ""}`), r.altnumber !== void 0 && t.push(`\\va ${r.altnumber}\\va*`), r.pubnumber !== void 0 && t.push(`\\vp ${r.pubnumber}\\vp*`);
          break;
        case "chapter":
          t.push(`\\${n} ${r.number ?? ""}`), r.altnumber !== void 0 && t.push(`\\ca ${r.altnumber}\\ca*`), r.pubnumber !== void 0 && t.push(`\\cp ${r.pubnumber}`);
          break;
        case "ms":
          t.push(`\\${n}`), vg(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), ma(r.content, t), vg(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), ma(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), ma(r.content, t);
      }
    }
}
function Cg(e, t, r) {
  const n = Ro(e);
  if (!ge(n)) return !1;
  const i = P();
  if (!E(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Nd(n, t, r);
  if (!o) return !1;
  const a = qs(o, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    fr.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  ma(a, l);
  for (const u of l.join("").replaceAll($, "~")) {
    if (fr.test(u)) continue;
    const f = c.get(u);
    f !== void 0 && f > 0 && c.set(u, f - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function Ud(e, t) {
  return qx(e, t, x.Paragraph);
}
function Ix(e, t) {
  return qx(e, t, x.Character);
}
function qx(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !(Qe.isValidMarker(n) || sf(n));
}
function bO(e) {
  return [_t(e), Mi()];
}
function Kd(e) {
  dn(e, 2);
}
function kO(e) {
  const t = P();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Fd(e) {
  const t = kO(e);
  e.splice(0, 0, bO(e.getMarker())), t && Kd(e);
}
function Ha(e, t) {
  e.setMarker(t), Fd(e), Kd(e);
}
function xO(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!mr(n)) {
    if (v(n) && !M(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent($), $t(n, be, hn), n.setMode("token");
      return;
    }
    if (Fy(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Mi());
  }
}
function Sg(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : A(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function uo(e) {
  for (let t = e; t; t = t.getParent())
    if (ge(t)) return t;
}
function TO(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = uo(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = uo(r.getNode())?.is(s) ?? !1, a = uo(n.getNode())?.is(s) ?? !1;
    return !(o && !Sg(r, s, "start") || a && !Sg(n, s, "end"));
  });
}
function Mu(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = P();
  if (!(!E(r) || r.isCollapsed()))
    for (const n of TO(r)) t.add(n.getKey());
}
function vO(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = P();
  if (!E(r) || !r.isCollapsed()) return;
  const n = uo(r.focus.getNode());
  n && t.add(n.getKey());
}
function CO(e) {
  const t = P();
  !E(t) || t.isCollapsed() || t.getNodes().some((r) => M(r)) && (Mu(e), t.removeText());
}
const SO = new RegExp(
  String.raw`^\\\+?([${qr}]+)(?:[ \u00A0]|$)`
);
function _O(e, t) {
  const r = SO.exec(e.getTextContent());
  return !!r && Ud(r[1], t);
}
function MO(e, t) {
  if (!Ns(t.viewOptions)) return;
  if (Rr(e.getFirstChild())) {
    xO(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (_O(e, t.getMarker)) return;
    Fd(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ge(o) && !o.is(e))) {
      Ha(e, ln), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ge(r)) {
    const n = e.getChildren().filter((a) => !mr(a)), i = P();
    let s = !1;
    if (E(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : uo(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || A(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && dn(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Ha(e, ln);
}
function EO(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Ur(t, As(e.getMarker()));
  return r === "" ? void 0 : r;
}
function AO(e) {
  const t = e.getChildren().filter((s) => !M(s) && fe(s, be) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith($) && r.setTextContent(r.getTextContent().slice(1));
  const n = EO(e);
  n && t.push($e(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function PO(e, t) {
  const r = e.getChildren(), n = r.some((s) => M(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = r[0], o = r[r.length - 1];
    if (v(s) && s.isUnmergeable() && s.getMode() === "token" || M(o) && o.getMarkerSyntax() === "closing" && o.getMode() === "token") {
      const u = _t(e.getMarker());
      u.setMode("token");
      const f = e.getFirstChild();
      f ? f.insertBefore(u) : e.append(u);
      return;
    }
    const a = e.getCaller(), c = a !== "" && r.some(
      (u) => v(u) && !M(u) && u.getTextContent() === gt(a)
    ), l = Es(e).some(({ node: u }) => M(u));
    if (!c && !l) return;
    r.forEach((u) => {
      M(u) || (v(u) && u.getTextContent() === gt(a) && u.setTextContent(` ${a} `), e.insertBefore(u));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => M(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function wO(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(M(r) && r.getMarkerSyntax() === "opening")) {
    AO(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => M(o) && o.getMarkerSyntax() === "closing");
  i && !s && Cr(e, t);
}
function Lx(e, t, r) {
  if (!M(e.getFirstChild()) && r?.markerMode === "editable" && Ns(r)) {
    Ha(e, t);
    return;
  }
  nk(e, t);
}
function Dx() {
  const e = P();
  if (!E(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Ux(e);
    return t !== "removed" ? t : (Eu(), "handled");
  }
  return Eu() ? "handled" : "declined";
}
function NO(e, t) {
  if (!t) return e;
  const r = UN.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function _g(e, t) {
  const r = P();
  if (!E(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Kx())
      return "declined";
  } else {
    const s = Ux(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => NO(s, t)
  );
  Mg(n ?? "");
  for (const s of i)
    Eu(), Mg(s);
  return "handled";
}
function OO(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = $i(n);
  if (!i) return !1;
  const s = jr(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || M(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Ux(e) {
  const t = jr(e.anchor.getNode()), r = jr(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), RO() ? "removed" : "needs-plain-split");
}
function Mg(e) {
  if (e === "") return;
  const t = P();
  E(t) && t.insertText(e);
}
function RO() {
  const e = P();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = jr(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => M(r) && r.getMarkerSyntax() === "opening");
}
function Kx() {
  const e = P();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = jr(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Eu() {
  const e = P();
  if (!E(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Kx();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = _n("fp", { closed: "false" });
  i.append(_t("fp"));
  const s = v(t) && !M(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    ys(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (K_(u), i.append(u));
  }
  return i.getChildren().every(M) && i.append($e(Tt)), Fx(i), !0;
}
function Fx(e) {
  const t = e.getChildren().find((r) => !M(r));
  if (v(t)) {
    const r = t.getTextContent().startsWith($) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (A(t)) {
    Fx(t);
    return;
  }
  e.selectEnd();
}
function $O(e) {
  const t = [];
  let r = e;
  for (; r; )
    U(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function IO(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of _e().getChildren()) {
    if (t && n.is(t)) break;
    (Mt(n) || at(n) || ge(n)) && r.push(n.getMarker());
  }
  return r;
}
function qO(e) {
  let t = e;
  for (; A(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function LO(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Rr(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && mr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(qO(i)) && r === 0 : !1;
}
function DO(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Rr(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && mr(i) && t.is(i) && r === 0;
}
function UO() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function KO() {
  const e = P();
  if (!E(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = St(t, ge), s = !n && (!i || DO(i, t, r)) ? "paragraph" : "character", o = jr(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: IO(t),
    openCharMarkers: $O(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Df(t, r),
    anchorRect: UO()
  };
}
function FO() {
  const e = P();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || M(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = KN.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function BO(e, t, r) {
  Lx(e, t, r), Kd(e);
}
function zO(e, t, r) {
  const n = P();
  if (!E(n)) return;
  const i = n.focus.getNode(), s = St(i, ge);
  if (t === "backslash" && s && LO(s, i, n.focus.offset)) {
    BO(s, e, r);
    return;
  }
  zx(e, r);
}
function jO(e, t) {
  const r = P();
  return !E(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Bx(e) {
  const t = P();
  return E(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function VO(e, t, r, n) {
  if (E(P()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && FO(), e.kind === "closeTag") {
    Bx(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Dx() !== "declined") return;
  if (e.kind === "paragraph" && Et.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    zO(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Qe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Wk(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  mu(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: jt(), reference: r });
}
function zx(e, t) {
  const r = P();
  if (!E(r)) return;
  const n = Ns(t);
  if (jk()) {
    const s = P();
    if (!E(s)) return;
    const o = St(s.anchor.getNode(), ge);
    if (!o) return;
    o.setMarker(e), n && Fd(o);
    return;
  }
  const i = r.insertParagraph();
  ge(i) && (n ? Ha(i, e) : i.setMarker(e));
}
function WO() {
  const [e] = Te();
  return J(() => e.registerCommand(dm, () => !0, Bt), [e]), null;
}
function HO(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = qN.exec(e)?.[1];
  return r === void 0 ? !1 : !Ud(r, t);
}
function jx(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !HO(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ge(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ge(i))
    return [i, r];
}
function Vx(e, t) {
  const r = jx(e, t.getMarker);
  return r !== void 0 && Nx(r, t);
}
function GO(e, t) {
  const r = P();
  E(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Wx(e) {
  const t = LN.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function JO(e) {
  const t = P();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Wx(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function YO(e) {
  const t = P();
  if (!E(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (L(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (U(n)) {
      qf(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Eg(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Wx(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  YO(e);
}
function Au(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Hx(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Cr(e, r);
  const n = JO(e), i = e.getParent();
  if (ge(i)) {
    if (!Ud(t, r.getMarker))
      return Vx(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Cr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Au(s, t) && Eg(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || L(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? Ix(t, r.getMarker) : Qe.isValidMarker(s)) || U(i) && hf(i))
      return Cr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Cr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(M).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (GO(c, ot(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Au(a, s) && Eg(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Cr(e, r);
}
function Gx(e, t) {
  if (!M(e) || e.getMarkerSyntax() !== "opening") return;
  const r = e.getParent();
  if (!U(r) || !r.getFirstChild()?.is(e)) return;
  const n = $s.exec(e.getTextContent());
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+") !== e.getNested() || !Ix(i, t)) return;
  const s = e.getMarker();
  if (r.getMarker() !== s) return;
  const o = i.replace(/^\+/, "");
  if (Au(s, o) && !hf(r))
    return { char: r, glyph: e, closer: XO(r, s), newMarker: o };
}
function XO(e, t) {
  return e.getChildren().filter(M).filter((r) => r.getMarkerSyntax() === "closing" && r.getMarker() === t).at(-1);
}
function QO(e) {
  const t = P();
  if (!E(t)) return !1;
  const r = t.isCollapsed() ? [t.anchor] : [t.anchor, t.focus];
  for (const n of r) {
    const i = n.getNode();
    if (i.is(e)) return !0;
    const s = e.getPreviousSibling();
    if (s !== null && i.is(s) && n.offset === s.getTextContentSize())
      return !0;
    const o = e.getNextSibling();
    if (o !== null && i.is(o) && n.offset === 0) return !0;
    const a = e.getParent();
    if (a !== null && i.is(a)) {
      const c = e.getIndexWithinParent();
      if (n.offset === c || n.offset === c + 1) return !0;
    }
  }
  return !!(!t.isCollapsed() && t.getNodes().some((n) => n.is(e)));
}
function ZO(e) {
  const t = e.getTextContent(), r = e.getMarkerSyntax() === "closing", n = (r ? /[ \u00A0]+$/ : /^[ \u00A0]+/).exec(t)?.[0];
  if (!n || n.length === t.length) return !1;
  const i = e.getParent();
  let s = e;
  if (r) {
    if (!L(i) || !i.getLastChild()?.is(e)) return !1;
    s = i;
  } else if (Ke(i)) {
    const f = fn(e)?.owner;
    if (!Ie(f) || !i.getFirstChild()?.is(e)) return !1;
    s = f;
  } else if (i?.getFirstChild()?.is(e)) {
    if (ge(i)) return !1;
    s = i;
  }
  const o = r ? s.getNextSibling() : s.getPreviousSibling();
  if (!v(o)) return !1;
  const a = r ? t.slice(0, t.length - n.length) : t.slice(n.length);
  if (e.setTextContent(a), !pn(e))
    return e.setTextContent(t), !1;
  const c = P(), l = E(c) && c.isCollapsed() && c.anchor.key === e.getKey() ? c.anchor.offset : void 0;
  if (r) {
    if (o.setTextContent(n + o.getTextContent()), l !== void 0 && l > a.length) {
      const f = l - a.length;
      o.select(f, f);
    }
    return !0;
  }
  const u = o.getTextContentSize();
  return o.setTextContent(o.getTextContent() + n), l !== void 0 && (l <= n.length ? o.select(u + l, u + l) : e.select(l - n.length, l - n.length)), !0;
}
function eR(e, t) {
  const r = e.getTextContent();
  if (pn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ke(e.getParent()) && af(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !QO(e)) {
    eS(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (ZO(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    if (qS(e) || fR(e)) {
      t.pendingKeys.delete(e.getKey());
      return;
    }
    const n = ox.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Hx(e, n[1], t);
      return;
    }
    if (IN.test(r)) {
      t.pendingKeys.delete(e.getKey()), Cr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ot(e.getMarker(), e.getNested());
    if (U(n) && !Gu(n.getParent()) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = P(), o = E(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = $e(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  if (tR(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function tR(e) {
  if (e.getMarkerSyntax() !== "selfClosing" || !Ie(fn(e)?.owner)) return !1;
  const t = ot(""), r = e.getTextContent();
  if (!r.startsWith(t) || r.length === t.length) return !1;
  const n = e.getParent(), i = Ke(n) ? n : e;
  if (Ke(n) && !n.getLastChild()?.is(e)) return !1;
  const s = i.getParent();
  if (!s || Gu(s)) return !1;
  const o = P(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() && o.anchor.offset > t.length ? o.anchor.offset - t.length : void 0, c = $e(r.slice(t.length));
  return e.setTextContent(t), i.insertAfter(c), a !== void 0 && c.select(a, a), !0;
}
function rR(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Wy(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Jx(e) {
  if (!Xu(e)?.length)
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
const Js = Jx("v"), nR = Jx("c"), Ag = /^[ \u00A0]*$/;
function Pg(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === Xe.getType() && n.getMode() === "normal" && fe(n, be) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = $e(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function iR(e, t) {
  const r = e.getTextContent(), n = Mr("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Js.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Js.valueAndRest.exec(c);
    if (l && Ag.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Js.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Js.valueAndRest.exec(r);
  if (!s) {
    const c = Js.markerRest.exec(r);
    if (c) {
      const [, l, u, f] = c, d = P(), p = E(d) && d.isCollapsed() && d.anchor.key === e.getKey() ? d.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Mr("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, f.length) : void 0;
      Pg(e, f, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Cr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Ag.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Mr("v", o)), a && Pg(e, a, a.length);
}
const sR = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/, oR = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+([^\\]*[^ \u00A0\\][^\\]*)$/;
function aR(e, t) {
  const r = e.getParent();
  if (!L(r) || r.getIsCollapsed() !== !1 || !Xu(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const l = n[i];
    if (!M(l) || l.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = r.getCaller(), o = e.getTextContent();
  if (o === gt(s))
    return t.pendingKeys.delete(e.getKey()), !0;
  if (!e.isUnmergeable() || s === "") return !1;
  t.pendingKeys.delete(e.getKey());
  const a = sR.exec(o);
  if (a)
    return r.setCaller(a[1]), e.setTextContent(gt(a[1])), !0;
  const c = oR.exec(o);
  return c && ko(o, s).missing ? (lR(e, r, c[1], c[2]), !0) : uR(e, s) ? !0 : ko(o, s).missing && /^[ \u00A0]/.test(o) && !o.includes("\\") && Yx(e) ? (t.pendingKeys.add(e.getKey()), !0) : (Xx(e, r), !0);
}
function cR(e) {
  if (!Ic(e)) return !1;
  const t = e.getTextContent(), r = /^[ \u00A0]+/.exec(t)?.[0];
  if (!r) return !1;
  const n = e.getPreviousSibling(), i = v(n) && n.getMode() === "token" && !!$c(n);
  if (!v(n) || !(Le(n) || i)) return !1;
  const s = P();
  if (!E(s) || !s.isCollapsed() || s.anchor.key !== e.getKey() || s.anchor.offset > r.length)
    return !1;
  const o = s.anchor.offset, a = t.slice(r.length), c = n.getTextContentSize();
  return n.getMode() === "token" ? n.select(c, c) : (n.setTextContent(n.getTextContent() + r), n.select(c + o, c + o)), a ? e.setTextContent(a) : e.remove(), !0;
}
function lR(e, t, r, n) {
  const i = e.getTextContentSize() - n.length, s = P(), o = E(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? s.anchor.offset : void 0;
  t.setCaller(r), e.setTextContent(gt(r));
  const a = Zx(t, e, n.replaceAll($, " "));
  if (o !== void 0)
    if (o >= i) {
      const c = o - i;
      a.select(c, c);
    } else e.select(e.getTextContentSize(), e.getTextContentSize());
}
function uR(e, t) {
  const r = P();
  if (!E(r) || !r.isCollapsed()) return !1;
  const { anchor: n } = r;
  if (n.key !== e.getKey() || n.type !== "text") return !1;
  const i = e.getTextContent(), s = i.slice(0, n.offset);
  if (i.slice(n.offset) !== gt(t) || !ax.test(s) || s.includes("\\")) return !1;
  const o = e.getPreviousSibling();
  if (!M(o) || o.getMarkerSyntax() !== "opening" || !$s.test(o.getTextContent())) return !1;
  const a = o.getTextContent() + s;
  return e.setTextContent(gt(t)), o.setTextContent(a), o.select(a.length, a.length), !0;
}
function fR(e) {
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1) return !1;
  const r = P();
  if (!E(r) || !r.isCollapsed()) return !1;
  const n = e.getTextContent(), { anchor: i } = r;
  if (i.key !== e.getKey() || i.offset !== n.length) return !1;
  const s = ze(e.getMarker()), o = n.slice(s.length);
  if (!n.startsWith(s) || !/^[|\\\s]+$/.test(o)) return !1;
  const a = e.getNextSibling();
  return !v(a) || M(a) || !a.isUnmergeable() ? !1 : (e.setTextContent(s), a.setTextContent(o + a.getTextContent()), a.select(o.length, o.length), !0);
}
function Yx(e) {
  const t = P();
  if (!E(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.key === e.getKey()) return !0;
  const n = e.getNextSibling();
  return r.offset === 0 && n !== null && r.key === n.getKey();
}
function Xx(e, t) {
  const r = t.getCaller(), n = e.getTextContent(), { start: i } = ko(n, r), s = of(n, r), o = P(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? o.anchor.offset : void 0;
  e.setTextContent(gt(r));
  const c = s ? Zx(t, e, s) : void 0;
  if (a !== void 0)
    if (c && a >= i) {
      const l = Math.min(a - i, s.length);
      c.select(l, l);
    } else eT(t, e);
}
function $c(e) {
  if (!v(e) || M(e) || !e.isUnmergeable()) return;
  const t = e.getParent();
  if (!L(t) || t.getIsCollapsed() !== !1 || t.getCaller() === "")
    return;
  let r = t.getFirstChild();
  for (; M(r) && r.getMarkerSyntax() === "opening"; ) r = r.getNextSibling();
  return e.is(r) ? t : void 0;
}
function dR(e, t, r) {
  const n = $c(e);
  if (!(!n || !v(e)))
    return e.getTextContent() === gt(n.getCaller()) ? !1 : r === "idle" && Yx(e) ? (t.pendingKeys.add(e.getKey()), !1) : (Xx(e, n), !0);
}
function Qx(e, t) {
  const { wrapper: r, closer: n } = oc(e);
  return (r ?? n ?? t).getNextSibling();
}
function Ic(e) {
  return v(e) && e.getType() === Xe.getType() && e.getMode() === "normal" && !e.isUnmergeable() && fe(e, be) !== "attribute";
}
function Zx(e, t, r) {
  const n = Qx(e, t);
  if (Ic(n))
    return n.setTextContent(r + n.getTextContent()), n;
  const i = $e(r);
  return n ? n.insertBefore(i) : e.append(i), i;
}
function eT(e, t) {
  const r = Qx(e, t);
  Ic(r) ? r.select(0, 0) : r ? e.select(r.getIndexWithinParent(), r.getIndexWithinParent()) : e.select(e.getChildrenSize(), e.getChildrenSize());
}
function pR(e, t) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const r = e.getCaller();
  if (r === "" || !Xu(e.getMarker())?.includes("caller")) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!M(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (i === 0) return;
  const s = n[i];
  if (v(s) && !M(s) && (s.isUnmergeable() || s.getTextContent() === gt(r)))
    return;
  const o = $e(gt(r)).toggleUnmergeable();
  t.viewOptions?.isNoteShellEditable === !1 && o.setMode("token"), n[i - 1].insertAfter(o);
  const a = P();
  E(a) && a.isCollapsed() && (a.anchor.key === n[i - 1].getKey() || a.anchor.key === e.getKey() && a.anchor.offset === i) && eT(e, o);
}
function hR(e) {
  if (!e.isAttached() || e.getIsCollapsed() !== !1) return;
  const t = e.getChildren(), r = t.find(
    (o) => M(o) && o.getMarkerSyntax() === "opening"
  );
  if (!M(r) || r.getMode() !== "token" || e.getUnknownAttributes()?.closed === "false") return;
  let n = t.find(
    (o) => M(o) && o.getMarkerSyntax() === "closing"
  );
  n || (n = _t(e.getMarker(), "closing"), n.setMode("token"), e.append(n));
  for (let o = n.getNextSibling(); o; o = n.getNextSibling())
    n.insertBefore(o);
  const i = n.getPreviousSibling(), s = i?.getPreviousSibling();
  Ic(i) && U(s) && !s.getChildren().some((o) => M(o) && o.getMarkerSyntax() === "closing") && s.append(i);
}
function gR(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const r = Mr("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = nR.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function tT(e) {
  if (Ie(e)) {
    const { wrapper: t } = ac(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (L(e)) {
    const { wrapper: t } = oc(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Re(e)) {
    const t = [], r = Ym(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Qm(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Le(e)) {
    const t = [], r = vo(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = vo(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function mR(e) {
  const t = P();
  if (!E(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return tT(e).some((n) => r.is(n));
}
function yR(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ge(e) && Fy(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of So)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && jo(l, e) && (i || mR(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of tT(e))
    l.remove(), n = !0;
  let s = !1;
  U(e) && hy(e) !== void 0 && !hf(e) && (gy(e), s = !0, n = !0);
  let o = !1, a = !1, c = !1;
  for (const l of So)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (SM(l, e)) {
        Eo(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && cb(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      mc(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function wg(e) {
  return v(e) && e.getType() === Xe.getType() && e.getMode() === "normal" && fe(e, be) !== "attribute";
}
function bR(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = X(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && wg(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && wg(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function sa(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = bR(t), s = [...e.pendingKeys].filter((l) => !i.has(l)), o = new Set(
    s.filter((l) => {
      const u = X(l);
      return !!u?.isAttached() && !!Gx(u, e.getMarker);
    })
  ), a = [
    ...s.filter((l) => o.has(l)),
    ...s.filter((l) => !o.has(l))
  ], c = /* @__PURE__ */ new Set();
  for (const l of a) {
    const u = X(l);
    if (!u?.isAttached()) {
      e.pendingKeys.delete(l);
      continue;
    }
    if ($c(u)) {
      e.pendingKeys.delete(l), n = dR(u, e, r) || n;
      continue;
    }
    if (M(u)) {
      e.pendingKeys.delete(l);
      const m = u.getTextContent();
      if (pn(u)) continue;
      const g = $s.exec(m);
      u.getMarkerSyntax() === "opening" && g ? n = Hx(u, g[1], e) || n : r === "idle" && Cg(u, e.getMarker, e.viewOptions) ? e.pendingKeys.add(l) : Vx(u, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Cr(u, e) || n;
      continue;
    }
    const f = fn(u)?.owner, d = f?.isAttached() ? f : u, p = d.getKey();
    if (c.has(p)) {
      l !== p && e.pendingKeys.delete(l);
      continue;
    }
    if (i.has(p)) {
      e.pendingKeys.delete(l), e.pendingKeys.add(p);
      continue;
    }
    e.pendingKeys.delete(l), l !== p && e.pendingKeys.delete(p), c.add(p);
    const h = yR(d, e, r);
    if (n = h.mutated || n, !h.handled) {
      if (r === "idle" && Cg(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(p);
        continue;
      }
      n = Cr(d, e) || n;
    }
  }
  return n;
}
function rT(e) {
  if (yr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return to(t) !== void 0;
  return !1;
}
function kR(e) {
  const t = fn(e);
  if (!t) return !1;
  const r = En(t.kind);
  return !mc(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Ng(e) {
  let t = e.getParent();
  for (; pe(t); ) t = t.getParent();
  return U(t) ? t : void 0;
}
function xR(e, t) {
  const r = P();
  if (!E(r) || !r.isCollapsed()) return !1;
  const { anchor: n } = r;
  if (n.key !== e.getKey() || n.type !== "text") return !1;
  const i = t.getFirstChild();
  if (!M(i) || i.getMarkerSyntax() !== "opening") return !1;
  let s = i.getNextSibling();
  for (; pe(s); ) s = s.getFirstChild();
  if (!e.is(s) || !$s.test(i.getTextContent())) return !1;
  const o = e.getTextContent(), a = o.slice(0, n.offset);
  if (!ax.test(a) || o[n.offset] !== $) return !1;
  const c = i.getTextContent() + a;
  return e.setTextContent(o.slice(a.length)), i.setTextContent(c), i.select(c.length, c.length), !0;
}
function TR(e, t) {
  const r = e.getTextContent(), n = fe(e, be), i = e.getParent();
  if (n !== "attribute" && Re(i)) {
    r.replace(/^[ \u00A0]+/, "") === Mr("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (aR(e, t) || cR(e)) return;
  if (n === "attribute") {
    kR(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Ng(e);
  if (s && xR(e, s)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    r.includes("|") && rT(e) || r.includes("//") && !Ul(e) || Zm(e) || Re(Ro(e)) ? t.pendingKeys.add(e.getKey()) : t.pendingKeys.delete(e.getKey());
    const c = Ng(e);
    c && pf(c) ? t.pendingKeys.add(c.getKey()) : c && hy(c) !== void 0 && c.markDirty();
    return;
  }
  if (Ul(e)) return;
  const o = P(), a = E(o) && o.isCollapsed() && o.anchor.key === e.getKey() ? r.slice(0, o.anchor.offset) : r;
  if (DN.test(a)) {
    if (JC(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Cr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function vR(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : cb(e, t);
}
function CR(e) {
  const t = (r) => {
    if (M(r)) {
      pn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (yr(r)) {
      Wy(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of So)
      n.settleScope !== "none" && n.ownerPredicate(r) && (jo(n, r) || vR(n, r)) && e.pendingKeys.add(r.getKey());
    if (Le(r)) {
      r.getTextContent() !== Mr("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== Xe.getType() || fe(r, be) === "attribute") return;
      const n = r.getParent();
      if (Re(n)) {
        r.getTextContent() !== Mr("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = $c(r);
      if (i) {
        r.getTextContent() !== gt(i.getCaller()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const s = r.getTextContent();
      (s.includes("\\") || s.includes("|") && rT(r) || s.includes("//") || Zm(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (U(r)) {
      pf(r) && e.pendingKeys.add(r.getKey()), r.getChildren().forEach(t);
      return;
    }
    if (!Ge(r) && !Mt(r)) {
      if (Ke(r) && r.getChildrenSize() === 0) {
        const n = fn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      A(r) && r.getChildren().forEach(t);
    }
  };
  _e().getChildren().forEach(t);
}
const Ga = "usfm:", nT = "usfmopen", iT = "usfmclosed";
function SR(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const _R = new RegExp(
  [Ga, nT, iT].map(SR).join("|")
), MR = "\uFEFF", ER = /^usfm_(.+)$/;
function AR(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function PR(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function wR(e) {
  return e.startsWith(Ga) ? PR(e.slice(Ga.length)).replace(/\r\n?|\n/g, " ") : "";
}
function sT(e) {
  for (const t of e.classList) {
    const r = ER.exec(t);
    if (r) return r[1];
  }
}
function NR(e) {
  const t = sT(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function OR(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(Ga)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(nT) && !n.contains(iT)) && sT(r) !== void 0)
      return !0;
  }
  return !1;
}
function oT(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(wR(e.nodeValue ?? ""));
    return;
  }
  if (!AR(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((f) => oT(f, u, r));
  if (t) {
    i(!n.contains("include"));
    return;
  }
  if (n.contains("exclude")) {
    i(!0);
    return;
  }
  const s = e.tagName.toLowerCase();
  if (s === "br") {
    r.push(`
`);
    return;
  }
  if (s === "span" && e.getAttribute("class") === "attribute") {
    r.push(e.textContent ?? "");
    return;
  }
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? NR(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function RR(e) {
  if (!_R.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !OR(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => oT(n, !1, r)), r.join("").replaceAll(MR, "").replaceAll($, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function $R(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = fe(e, be);
  if (r === "attribute" || r === hn) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Mt(o) || Re(o) || Ge(o)) return;
  const n = t.startsWith($) && U(e.getParent()), i = n ? t.slice(1) : t, s = (n ? $ : "") + i.replace(/ (?=[ \u00A0])/g, $).replace(new RegExp("(?<=\\u00A0) ", "g"), $);
  s !== t && e.setTextContent(s);
}
function IR(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function qR(e, t) {
  if (!e) return !1;
  try {
    const r = JSON.parse(e);
    if (typeof r != "object" || r === null) return !1;
    const { namespace: n, nodes: i } = r;
    return n === t && Array.isArray(i);
  } catch {
    return !1;
  }
}
function Pu(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? RR(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(IR(s)) : ""),
    isInternal: qR(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Og = String.raw`\\(?:\+?[${qr}]+\*?|\*)`, LR = new RegExp(
  String.raw`(?<=${Og})\u00A0|\u00A0(?=${Og})`,
  "g"
);
function Bd(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(LR, " ").replaceAll($, "~");
}
const aT = new RegExp(
  String.raw`\\c(?![${qr}])[ \u00A0]*[^\s\\]*`,
  "g"
), cT = new RegExp(String.raw`\\id(?![${qr}])[^\n\\]*`, "g"), DR = new RegExp(
  String.raw`^(?:${aT.source}|${cT.source})`
);
function zd(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(aT, "").replace(cT, "");
    return DR.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function wu(e) {
  if (v(e) && fe(e, be) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Ke(t)) return !0;
  return !1;
}
function UR(e) {
  return wu(e.anchor.getNode()) || wu(e.focus.getNode());
}
function KR(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && wu(t.getNode());
}
function FR(e, t) {
  const n = KR(e) ? t : Bd(zd(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function BR(e, t = !1, r = () => {
}) {
  const n = Pu(e, jt()._config.namespace);
  if (!n) return !1;
  const i = P(), s = E(i) && UR(i);
  if (!s && n.isInternal || t && E(i) && ds(i))
    return !1;
  const { text: o } = n;
  if (!o || !E(i)) return !1;
  if (e?.preventDefault(), s)
    return FR(i, o), !0;
  const a = Bd(zd(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = jt();
  return c.forEach((u, f) => {
    if (f > 0 && l.dispatchCommand(ba, void 0), u === "") return;
    const d = P();
    E(d) && d.insertText(u);
  }), !0;
}
function zR(e) {
  if (e.getTextContent() !== $) return !1;
  const t = e.getParent();
  return L(t) ? !Lt(e.getPreviousSibling()) : !1;
}
function jR(e, t) {
  if (t || e.getTextContent() !== $) return "";
  const r = e.getParent();
  if (!L(r) || !Lt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function VR(e) {
  const t = e.getParent();
  return (L(t) ? t.getCaller() : void 0) || mo;
}
function WR(e) {
  const t = e.getParent();
  return !t || Yn(t) === void 0;
}
function lT(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = ju(e);
  let l = "", u = !0;
  for (const f of t) {
    if (A(f) && !f.isInline()) {
      !u && WR(f) && (l += `
`), u = !f.isEmpty();
      continue;
    }
    if (u = !1, Lt(f))
      (f !== n || !e.isCollapsed()) && (l += (f === r ? "" : " ") + VR(f));
    else if (v(f)) {
      let d = f.getTextContent();
      f === r ? f === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (d = a < c ? d.slice(a, c) : d.slice(c, a)) : d = o ? d.slice(a) : d.slice(c) : f === n && (d = o ? d.slice(0, c) : d.slice(0, a)), l += zR(f) ? "" : d.replaceAll($, " ") + jR(f, f === n);
    } else (Gr(f) || Lo(f)) && (f !== n || !e.isCollapsed()) && (l += f.getTextContent().replaceAll($, " "));
  }
  return l;
}
function uT(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function HR(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => Mt(r) || Re(r)
    )
  );
}
function GR(e) {
  const t = P();
  if (!E(t) || t.isCollapsed()) return;
  const r = lT(t), n = {
    "text/plain": r,
    "text/html": uT(r)
  };
  if (_c() || HR(t)) return n;
  const i = eC(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function Rg(e, t, r) {
  const n = P();
  if (!E(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !mk();
  const i = GR(t);
  return i ? fT(e, t, n, i, r) : !1;
}
function fT(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || tC(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const dT = Fu(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Cl(e) {
  const t = e();
  return cn(am), cn(Sm), t;
}
const $g = 8, JR = 1e3;
function Qi(e, t) {
  const r = Le(e) ? ["va", "vp"] : Ie(e) ? ["milestone"] : L(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    PM(En(n), e, t.pendingKeys);
}
function YR(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(tc) || $f(e) === "remote")
      return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = X(o);
        if (!c) continue;
        const l = fn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = X(o.getKey());
        c?.isAttached() && En(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return ct(
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
    e.registerMutationListener(Xe, r),
    e.registerMutationListener($r, r),
    e.registerMutationListener(Ir, r),
    e.registerMutationListener(gn, r)
  );
}
function Nu(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = P();
  return r ? t ? Ek(r, t) : E(r) && ds(r) : !1;
}
function XR(e, t, r) {
  return ct(
    e.registerCommand(
      kn,
      (n) => {
        if (_c() || Nu(t)) return !1;
        const i = Pu(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Bd(zd(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = _g(o, t.getMarker);
          if (a === "declined" && OO(e) && (a = _g(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      _r
    ),
    e.registerCommand(
      kn,
      (n) => {
        const i = Pu(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !Zw()) return !1;
        const o = P();
        return t.structureProtectionMode === "protected" && E(o) && ds(o) ? !1 : (n?.preventDefault(), E(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(ba, void 0), a === "") return;
          const l = P();
          E(l) && l.insertText(a);
        }), !0);
      },
      et
    ),
    e.registerCommand(
      kn,
      () => (t.splitExpected.current = !0, !1),
      Bt
    )
  );
}
function QR({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = Te(), o = e?.markerMode === "editable", a = !!e && Dt(e), c = ue(void 0), l = ue(n);
  return J(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? un, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), J(() => {
    if (!o || !e) return;
    const u = {
      viewOptions: e,
      getMarker: t ?? un,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    c.current = u;
    const f = $S(
      s,
      u.pendingKeys,
      (N) => {
        u.pendingKeys.clear(), N.read(() => CR(u));
      }
    );
    let d, p = !1, h = !1, m, g = !1, k = !1, b = 0;
    const C = () => b < $g ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${$g} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), R = (N, W = "departure") => {
      s.update(() => {
        b = Cl(
          () => sa(u, N, W)
        ) ? b + 1 : 0;
      });
    };
    let w;
    const F = () => {
      if (w !== void 0 && clearTimeout(w), w = void 0, k || u.pendingKeys.size === 0) return;
      const N = l.current ?? JR;
      N < 0 || (w = setTimeout(() => {
        w = void 0, !(k || u.pendingKeys.size === 0) && (p || C() || R(void 0, "idle"));
      }, N));
    }, Y = ct(
      s.registerNodeTransform($r, (N) => {
        if (s.isComposing()) return;
        eR(N, u);
        const W = fn(N);
        W && (Le(W.owner) || L(W.owner) || Re(W.owner) || Ie(W.owner) && ac(W.owner).wrapper === void 0) && Qi(W.owner, u);
      }),
      s.registerNodeTransform(Pt, (N) => {
        s.isComposing() || (iR(N, u), Qi(N, u));
      }),
      s.registerNodeTransform(pr, (N) => {
        s.isComposing() || (gR(N), N.isAttached() && Qi(N, u));
      }),
      s.registerNodeTransform(Et, (N) => {
        s.isComposing() || MO(N, u);
      }),
      s.registerNodeTransform(Ue, (N) => {
        if (!s.isComposing()) {
          wO(N, u);
          for (const W of ["separator", "char"])
            N.isAttached() && jo(En(W), N) && u.pendingKeys.add(N.getKey());
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
      s.registerNodeTransform(zr, (N) => {
        s.isComposing() || Qi(N, u);
      }),
      s.registerNodeTransform(gn, (N) => {
        if (s.isComposing()) return;
        const W = fn(N);
        W && (Ie(W.owner) || Le(W.owner) || L(W.owner) || Re(W.owner)) && Qi(W.owner, u);
      }),
      s.registerNodeTransform(Qe, (N) => {
        s.isComposing() || (PO(N, u), pR(N, u), hR(N), Qi(N, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Jr, (N) => {
        s.isComposing() || rR(N, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(Xe, (N) => {
        s.isComposing() || TR(N, u);
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
      s.registerMutationListener(
        Xe,
        (N) => {
          s.getEditorState().read(() => {
            for (const [W, ne] of N) {
              if (ne === "destroyed") continue;
              const D = X(W);
              !D || fe(D, be) !== "attribute" || Ke(D.getParent()) || s.getElementByKey(W)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      YR(s, u),
      ...a ? [
        s.registerNodeTransform(Xe, (N) => {
          s.isComposing() || $R(N);
        }),
        s.registerCommand(
          nc,
          (N) => Rg(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            N && typeof N == "object" && "clipboardData" in N ? N : null,
            s,
            !1
          ),
          et
        ),
        s.registerCommand(
          Ti,
          (N) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            Rg(
              N && typeof N == "object" && "clipboardData" in N ? N : null,
              s,
              !0
            )
          ),
          et
        ),
        s.registerCommand(
          kn,
          (N) => BR(
            // Same jsdom-safe duck-check as COPY above.
            N && typeof N == "object" && "clipboardData" in N ? N : null,
            u.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              u.splitExpected.current = !0;
            }
          ),
          et
        )
      ] : [],
      s.registerCommand(
        Ti,
        () => (!Nu(u) && !_c() && Mu(u), !1),
        _r
      ),
      s.registerCommand(
        Vu,
        () => (s.isComposing() || CO(u), !1),
        ls
      ),
      s.registerCommand(
        rc,
        () => (p = !1, b = 0, F(), !1),
        Bt
      ),
      s.registerCommand(
        On,
        (N) => (p = !1, b = 0, F(), (N.key === "Backspace" || N.key === "Delete") && !Nu(u, Ck(N)) && (Mu(u), vO(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !N.ctrlKey || N.altKey || N.shiftKey || N.metaKey || N.key !== " " && N.code !== "Space" || !Qw() ? !1 : (N.preventDefault(), !0)),
        et
      ),
      s.registerCommand(
        um,
        (N) => {
          const W = Dx();
          W === "needs-plain-split" && s.dispatchCommand(ba, void 0);
          const ne = W !== "declined" || wM();
          return ne && N?.preventDefault(), sa(u), ne;
        },
        et
      ),
      s.registerCommand(
        ba,
        () => (u.splitExpected.current = !0, jk()),
        et
      ),
      XR(s, u, a),
      s.registerCommand(
        dT,
        () => {
          if (p) return !0;
          const N = s.getRootElement(), W = N?.ownerDocument, ne = !!N && !!W && W.hasFocus() && N.contains(W.activeElement);
          let D;
          if (ne) {
            const ke = P();
            D = E(ke) ? ke.focus.key : d;
          }
          return Cl(() => sa(u, D)), !0;
        },
        Bt
      ),
      s.registerCommand(
        Zu,
        () => (h = !0, !1),
        Bt
      ),
      s.registerCommand(
        Hu,
        () => {
          if (p) return !1;
          const N = P(), W = E(N) ? N.focus.key : d;
          return Cl(() => sa(u, W)), !1;
        },
        Bt
      ),
      s.registerUpdateListener(({ editorState: N, tags: W }) => {
        const ne = h || W.has(yo);
        h = !1, u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const D = N.read(() => {
          const he = P();
          return E(he) ? he.focus.key : void 0;
        }), ke = m;
        if (D !== void 0 && (m = D), W.has(tc)) {
          fy(s, N, W), p = !0, D !== void 0 && (d = D);
          return;
        }
        if (ne) {
          D !== void 0 && D !== ke && (p = !0);
          return;
        }
        p || (D !== void 0 && (d = D), F(), !(g || D === void 0) && [...u.pendingKeys].some((he) => he !== D) && (g = !0, queueMicrotask(() => {
          g = !1, !k && (C() || R(d));
        })));
      })
    );
    return () => {
      k = !0, w !== void 0 && clearTimeout(w), w = void 0, f(), Y(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const ZR = ["status_unknown", "status_invalid"], pT = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, e$ = Object.values(pT);
function t$(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = pT[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Ig(e) {
  e.classList.remove(...ZR), e.removeAttribute("aria-description"), e$.includes(e.title) && e.removeAttribute("title");
}
function r$(e, t, r, n) {
  const i = (a) => a.read(() => _e().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = X(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function n$(e) {
  const t = X(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : M(t) && t.getParent()?.getKey() === r.getKey();
}
function i$({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = Te(), i = e?.markerMode === "editable";
  return J(() => {
    if (!i) return;
    const s = t ?? Oa;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = SN(s, l);
        let f = u;
        if (l) {
          f = new Map(u);
          for (const [d, p] of o) {
            if (f.has(d) || n$(d)) continue;
            const h = X(d)?.getTopLevelElement();
            !h || l.has(h.getKey()) || f.set(d, p);
          }
        }
        for (const [d] of o) {
          if (f.has(d)) continue;
          const p = n.getElementByKey(d);
          p && Ig(p);
        }
        for (const [d, p] of f) {
          const h = n.getElementByKey(d);
          h && t$(h, p);
        }
        o = f, r?.debug(`[MarkerValidation] pass: ${f.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: f, dirtyLeaves: d }) => {
        f.size === 0 && d.size === 0 || a(
          r$(l, u, f, d)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Ig(u);
      }
    };
  }, [n, i, t, r]), null;
}
function s$(e, t) {
  const r = Xf(Gf), n = Tc(t);
  if (!r || !n?.end) return;
  const i = rs.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = Ju({
    namespace: "markers-view-copy",
    nodes: [ut, ...Sc],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    wn.serializeEditorState(i, r)
  ).read(
    () => {
      const a = xc(n, r);
      return a ? lT(a) : void 0;
    },
    { editor: s }
  );
}
function o$({ viewOptions: e }) {
  const [t] = Te();
  return J(() => {
    const r = (n, i) => {
      const s = P();
      if (!E(s) || s.isCollapsed()) return !1;
      const o = s$(t, e);
      return o === void 0 ? !1 : fT(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        n && typeof n == "object" && "clipboardData" in n ? n : null,
        t,
        s,
        { "text/plain": o, "text/html": uT(o) },
        i
      );
    };
    return ct(
      t.registerCommand(nc, (n) => r(n, !1), et),
      t.registerCommand(Ti, (n) => r(n, !0), et)
    );
  }, [t, e]), null;
}
function Go(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Nn(o);
    a && A(s) && Go(s.getChildren(), a, r);
  }
}
function hT(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Nn(o);
      if (a) {
        n(a);
        continue;
      }
      const c = vs(o);
      if (c === void 0 || !c.includes(ht)) continue;
      const l = c.split(ht), u = [];
      for (let f = 0; f < l.length; f++) {
        const d = l[f];
        if (f > 0 && u.push(...t[r++] ?? []), d.length > 0) {
          const p = {
            ...o,
            text: d
          };
          u.push(p);
        }
      }
      i.splice(s, 1, ...u), s += u.length - 1;
    }
  };
  n(e);
}
function Jo(e, t, r) {
  const n = [], i = [];
  for (const s of e.sentinels) {
    const o = [], a = [];
    for (const c of s) {
      if (r.has(c.getKey())) continue;
      const l = t.get(c.getKey());
      if (!l) return;
      o.push(c), a.push(l.node);
    }
    n.push(o), i.push(a);
  }
  return { live: n, serialized: i };
}
function gT(e, t) {
  const r = [];
  for (const n of e)
    bx(n, t) || ((ge(n) || U(n)) && r.push(n.getMarker()), A(n) && r.push(...gT(n.getChildren(), t)));
  return r;
}
function mT(e) {
  const t = [];
  for (const r of e) {
    const n = wd(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Nn(r);
    i && t.push(...mT(i));
  }
  return t;
}
function jd(e, t, r) {
  const n = gT(e, r), i = mT(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function yT(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = P();
  let n, i;
  if (E(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = X(t.key), i = t.offset;
  else
    return;
  if (!(!v(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Vd(e, t) {
  const r = t && bT(e, t);
  return r ? Id(e, r.start, r.end) : e;
}
function bT(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function kT(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, l = Od(e, a, o);
  if (!l) return;
  const u = Wd(l, s, r), f = Vd(u, i), d = qs(f, {
    getMarker: a
  });
  if (d.length === 0) return;
  if (zi(d) !== u.sentinels.length) {
    c?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = wn.serializeEditorState(
    { type: Tn, version: xn, content: d },
    o
  ).root.children;
  if (Nc(p) !== u.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const h = Jo(u, t, n);
  if (!h) {
    c?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ds(p, a) === Ls(e, a) && jd(e, p, a)) {
    c?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  hT(p, h.serialized);
  const g = a$(e), k = xT(p);
  for (let b = 0; b < g.length && b < k.length; b++)
    g[b].sid !== void 0 && k[b].number === g[b].number && (k[b].sid = g[b].sid);
  return qd(
    e,
    f,
    h.live,
    p,
    "paras",
    a,
    o
  );
}
function a$(e) {
  const t = [], r = (n) => {
    Le(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : A(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function xT(e) {
  const t = [];
  for (const r of e) {
    Vm(r) && t.push(r);
    const n = Nn(r);
    n && t.push(...xT(n));
  }
  return t;
}
function c$(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, l = No(e, a, o);
  if (!l) return;
  const { contentNodes: u } = l;
  if (u.length === 0) return;
  const f = Wd(l.out, s, r), d = Vd(f, i), p = qs(d, {
    getMarker: a,
    isNoteContext: !0
  });
  if (p.length === 0) return;
  if (zi(p) !== f.sentinels.length) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [h] = p;
  if (p.length !== 1 || typeof h != "object" || h.type !== "para") {
    c?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = h.content ?? [], g = Ox(m), k = e.getCategory() !== g, b = gx(e, m, g, o);
  if (b.failure !== void 0) {
    b.failure === "shape" ? c?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : b.failure === "caller" && c?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const C = b.children;
  if (Nc(C) !== f.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const R = Jo(f, t, n);
  if (!R) {
    c?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ds(C, a) === Ls(u, a) && jd(u, C, a)) {
    if (k)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: k };
    c?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return hT(C, R.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: qd(
      u,
      d,
      R.live,
      C,
      "noteContent",
      a,
      o
    ),
    contentNodes: u,
    category: g,
    categoryChanged: k
  };
}
function qg(e) {
  return e.$?.textType;
}
function l$(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && qg(e) === qg(t);
}
function u$(e) {
  const t = [];
  for (const r of e) {
    const n = X(r);
    n?.isAttached() && Ge(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function f$(e) {
  if (!M(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!L(t)) return;
  const r = e.getTextContent();
  if (pn(e)) return;
  const n = $s.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Ja(e, t) {
  const r = e;
  r.marker = t, r.text = wc(t, r.markerSyntax, r.nested);
}
function TT(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Qe.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Ja(a.node, s);
  const c = n.getChildren().filter(M).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Ja(l.node, s);
}
function vT(e, t, r, n) {
  const i = n.length - (r - t);
  return {
    text: e.text.slice(0, t) + n + e.text.slice(r),
    spans: e.spans.map((s) => s.end <= t ? s : s.start >= r ? { ...s, start: s.start + i, end: s.end + i } : {
      ...s,
      start: Math.min(s.start, t),
      end: s.end >= r ? s.end + i : t + n.length
    }),
    sentinels: e.sentinels
  };
}
function d$(e, t, r) {
  const n = e.spans.find((i) => i.key === t && !i.isSentinel);
  return n ? vT(e, n.start, n.end, r) : e;
}
function CT(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), A(e) && e.getChildren().forEach((r) => CT(r, t)), t;
}
function p$(e, t) {
  const r = CT(t), n = e.spans.filter((d) => r.has(d.key));
  if (n.length === 0) return e;
  const i = Math.min(...n.map((d) => d.start)), s = Math.max(...n.map((d) => d.end)), o = e.spans.filter((d) => d.isSentinel && d.start < i).length, a = n.filter((d) => d.isSentinel).length, c = cx.test(e.text.slice(0, i)) ? " " : "", l = vT(e, i, s, c + ht), u = i + c.length, f = [...e.sentinels];
  return f.splice(o, a, [t]), {
    text: l.text,
    spans: [
      ...l.spans.filter((d) => !r.has(d.key)),
      { key: t.getKey(), start: u, end: u + 1, isSentinel: !0 }
    ].sort((d, p) => d.start - p.start),
    sentinels: f
  };
}
function Wd(e, t, r) {
  let n = e;
  for (const { char: i, glyph: s, closer: o, newMarker: a } of t?.values() ?? [])
    if (n.spans.some((c) => c.key === s.getKey())) {
      if (xx(i, a, r.getMarker)) {
        n = p$(n, i);
        continue;
      }
      o && (n = d$(
        n,
        o.getKey(),
        Rt(wc(a, "closing", o.getNested()))
      ));
    }
  return n;
}
function ST(e, t) {
  const { char: r, glyph: n, closer: i, newMarker: s } = e, o = t.get(r.getKey());
  o && (o.node.marker = s);
  const a = t.get(n.getKey());
  a && Ja(a.node, s);
  const c = i && t.get(i.getKey());
  c && Ja(c.node, s);
}
function _T(e, t, r, n) {
  const { viewOptions: i, getMarker: s, logger: o } = t, a = Oo(e, s, i);
  if (!a) return;
  const c = Wd(a, n, t), l = Vd(c, r), u = qs(l, {
    getMarker: s
  }), [f] = u;
  if (u.length === 0 || typeof f != "object" || f.type !== "chapter")
    return;
  if (zi(u) !== 0) {
    o?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const d = wn.serializeEditorState(
    { type: Tn, version: xn, content: u },
    i
  ).root.children;
  if (d.length === 0) return;
  const p = [e, ...ji(e)];
  if (!(e.getNumber() !== (f.number ?? "") || e.getAltnumber() !== f.altnumber || e.getPubnumber() !== f.pubnumber) && Ds(d, s) === Ls(p, s) && jd(p, d, s)) {
    o?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return qd(
    p,
    l,
    [],
    d,
    "chapter",
    s,
    i
  );
}
function MT(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = (d) => {
    L(d) ? s.set(d.getKey(), d) : Re(d) ? o.set(d.getKey(), d) : n.set(d.getKey(), [d]);
  };
  for (const d of e) {
    const p = X(d);
    if (!p?.isAttached()) continue;
    const h = Gx(p, t.getMarker);
    if (h) {
      c.set(h.char.getKey(), h);
      continue;
    }
    const m = Ro(p);
    if (m) {
      if (l(m), M(p)) {
        const g = jx(p, t.getMarker);
        g && i.push(g);
      }
      if (L(m)) {
        const g = f$(p);
        g && a.set(m.getKey(), g);
      }
    }
  }
  const u = /* @__PURE__ */ new Set();
  for (const d of i)
    d.some((p) => u.has(p.getKey())) || (d.forEach((p) => {
      u.add(p.getKey()), n.delete(p.getKey());
    }), n.set(d[0].getKey(), d));
  if (r) {
    const d = Ro(r.node);
    d && l(d);
  }
  const f = u$(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    charOpenerRenames: c,
    husks: f,
    huskKeys: new Set(f.map((d) => d.getKey()))
  };
}
function ET(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && vs(r), s = n && vs(n);
  r && n && i !== void 0 && s !== void 0 && l$(r, n) && (r.text = i + s, e.splice(t, 1));
}
function qc(e, t, r, n, i, s) {
  const o = t.get(e.getKey()), a = o ? Nn(o.node) : void 0;
  if (!o || !a) return !1;
  const c = c$(e, t, r, n, i, s);
  if (!c) return !1;
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
function h$(e, t, r, n, i) {
  const s = yT(n, i);
  if (t.size === 0 && !s) return;
  const {
    paraScopes: o,
    noteScopes: a,
    chapterScopes: c,
    noteGlyphRenames: l,
    charOpenerRenames: u,
    husks: f,
    huskKeys: d
  } = MT(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && u.size === 0 && f.length === 0)
    return;
  const p = /* @__PURE__ */ new Map();
  Go(_e().getChildren(), e.root.children, p);
  for (const h of l.values()) TT(h, p);
  for (const h of u.values()) ST(h, p);
  for (const h of a.values())
    qc(h, p, r, d, s, u);
  for (const h of o.values()) {
    const m = p.get(h[0].getKey());
    if (!m) continue;
    const g = kT(
      h,
      p,
      r,
      d,
      s,
      u
    );
    if (!g) continue;
    const k = m.siblings.indexOf(m.node);
    k < 0 || m.siblings.splice(k, h.length, ...g);
  }
  for (const h of c.values()) {
    const m = p.get(h.getKey());
    if (!m) continue;
    const g = 1 + ji(h).length, k = _T(h, r, s, u);
    if (!k) continue;
    const b = m.siblings.indexOf(m.node);
    b < 0 || m.siblings.splice(b, g, ...k);
  }
  for (const h of f) {
    const m = p.get(h.getKey());
    if (!m) continue;
    const g = m.siblings.indexOf(m.node);
    g < 0 || ET(m.siblings, g);
  }
  return Ik(e, r.viewOptions);
}
function g$({
  viewOptions: e,
  logger: t
}) {
  const [r] = Te(), n = Ns(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return J(() => {
    if (n)
      return r.registerNodeTransform(
        Et,
        (i) => m$(i, t)
      );
  }, [r, n, t]), null;
}
function m$(e, t) {
  e.getMarker() !== ln && (e.isEmpty() || Rr(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${ln}" (key ${e.getKey()})`
  ), e.setMarker(ln)));
}
function Ys(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const y$ = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Yr(e) {
  return y$.exec(e)?.[1] ?? e;
}
function Wr(e, t) {
  const r = e.jsonPath.slice(Yr(e.jsonPath).length);
  return { ...e, jsonPath: `${vt(t)}${r}` };
}
function Hd(e, t) {
  return e.length === t.length && e.every((r, n) => r === t[n]);
}
function AT(e) {
  if (Ku(e) || hs(e)) return !0;
  const t = PT(e);
  return t === "marker" || t === "caller";
}
const b$ = /^\['([^']+)'\]$/;
function PT(e) {
  if (fo(e))
    return b$.exec(
      e.jsonPath.slice(Yr(e.jsonPath).length)
    )?.[1];
}
function Ou(e, t) {
  return AT(e) && Hd(dr(Yr(e.jsonPath)), Ar(t));
}
function wT(e, t, r) {
  if (!e.isAttached()) return;
  const [n, i] = ur(
    Wr(t, Ar(e)),
    r
  );
  if (!(!n || i === void 0))
    return { key: n.getKey(), offset: i, type: A(n) ? "element" : "text" };
}
function Gd(e, t) {
  const r = ir(e, t, { addressDisplayBytes: !0 }), n = r && X(r.key);
  return r && r.offset > 0 && M(n) && n.getMarkerSyntax() !== "opening" ? r : void 0;
}
function NT(e, t) {
  const r = ir(e, t, { addressDisplayBytes: !0 });
  if (!r || r.offset !== 0) return;
  const n = e.spans.findIndex((o) => o.key === r.key), i = e.spans[n], s = n > 0 ? e.spans[n - 1] : void 0;
  if (!(!i || !lo(i) || !s || s.end !== i.start || !lo(s)))
    return Cx(s);
}
function k$(e, t) {
  const r = Gd(e, t);
  if (r) return r;
  const n = NT(e, t);
  if (n) return n;
  const i = ir(e, t);
  return i && x$(e, i);
}
function x$(e, t) {
  if (t.type !== "text") return t;
  const r = e.spans.findIndex((a) => a.key === t.key), n = e.spans[r], i = e.spans[r + 1];
  if (!n || !i || n.end === n.start || t.offset !== n.end - n.start)
    return t;
  const s = e.text[i.start] === "\\", o = fr.test(e.text[n.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function OT(e) {
  const t = e.markerName.length + 2, r = t + e.valueLength;
  return { valueStart: t, closerStart: r, closerLength: e.markerName.length + 2 };
}
function T$(e, t, r) {
  const { keyName: n } = e, { valueStart: i, closerStart: s } = OT(e);
  return r === 0 ? { jsonPath: t, keyName: n } : r < i ? { jsonPath: t, keyName: n, keyOffset: r - 1 } : r < s ? {
    jsonPath: `${t}['${n}']`,
    propertyOffset: r - i
  } : { jsonPath: t, keyName: n, keyClosingMarkerOffset: r - s };
}
function v$(e, t) {
  const { valueStart: r, closerStart: n, closerLength: i } = OT(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if (ho(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (po(t))
    return s(t.keyClosingMarkerOffset, i, n);
  if (ec(t)) return 0;
  if (fo(t))
    return s(t.propertyOffset, e.valueLength, r);
}
function C$(e) {
  return ho(e) || po(e) || ec(e) ? e.keyName : PT(e);
}
function S$(e, t, r) {
  const n = k$(e.spelling, t), i = n && X(n.key);
  if (!n || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === n.key);
  return s ? T$(
    s,
    vt(Ar(i)),
    n.offset
  ) : Ct(i, n.offset, r);
}
function _$(e, t) {
  let r = _e();
  for (let n = 0; n < t.length; n += 1) {
    if (!A(r)) return;
    const i = Wt(r, Dt(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function Ya(e, t) {
  const r = dr(Yr(t.jsonPath));
  if (r.length === 0) {
    if (!vn(t)) return { kind: "live", location: t };
    const o = e.settledToLiveTopIndex(t.offset);
    if (!o) {
      const a = Wt(
        _e(),
        Dt(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: a } };
    }
    return o.plan && o.indexWithinScope > 0 ? Ya(e, { jsonPath: vt([t.offset]) }) : { kind: "live", location: { ...t, offset: o.liveIndex } };
  }
  const n = e.settledToLiveTopIndex(r[0]);
  if (!n) return;
  if (n.plan)
    return {
      kind: "scope",
      plan: n.plan,
      scratchIndexes: [n.indexWithinScope, ...r.slice(1)],
      location: t
    };
  const i = [n.liveIndex, ...r.slice(1)], s = _$(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: Wr(t, i) };
}
function RT(e, t) {
  const r = C$(t);
  if (r === void 0) return;
  const n = dr(Yr(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = X(s.ownerKey);
      if (s.keyName !== r || !o || !Hd(Ar(o), n))
        continue;
      const a = v$(s, t), c = i.spelling.spans.find((u) => u.key === s.ownerKey), l = a !== void 0 && c ? jn(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: ya(i.spelling, c.start + a)
        }
      };
    }
}
function M$(e, t, r, n) {
  const i = RT(t, r);
  if (i) return i.resolution;
  const [s, o] = ur(r, n.viewOptions);
  if (!s || o === void 0) return;
  const a = Md(e, s), c = a && t.find((d) => d.sentinelIndex === a.sentinelIndex);
  if (c) {
    const d = co(c.spelling, s, o);
    return d && {
      kind: "literal",
      run: c,
      anchor: d.anchor,
      atWordByte: ya(c.spelling, d.position)
    };
  }
  if (!a) {
    const d = co(e, s, o);
    return d ? {
      kind: "anchor",
      anchor: d.anchor,
      atWordByte: ya(e, d.position)
    } : void 0;
  }
  const l = Ed(a.member, s);
  if (!l) return;
  const u = L(a.member) ? No(a.member, n.getMarker, n.viewOptions)?.out : void 0, f = u && co(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: A(s) ? "element" : "text",
    noteAnchor: f && {
      anchor: f.anchor,
      atWordByte: ya(u, f.position)
    },
    isNoteOwnBytes: L(a.member) && Ou(r, a.member)
  };
}
function E$(e, t, r) {
  const n = RT(e, t);
  if (n) return n.resolution !== void 0;
  const [i, s] = ur(t, r);
  return i !== void 0 && s !== void 0;
}
function ya(e, t) {
  const r = e.text[t];
  return r !== void 0 && !fr.test(r);
}
function $T(e, t) {
  if (t.type !== "text") return t;
  const r = $d(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && fr.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function $o(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function A$(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function Jd(e) {
  const { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } = e;
  return t && r && n && i ? { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } : void 0;
}
function IT(e) {
  const t = e.liveNodes[0];
  if (!t.isAttached()) return;
  if (e.kind !== "note" && A(t))
    return { key: t.getKey(), offset: 0, type: "element" };
  const r = t.getParent();
  return r ? { key: r.getKey(), offset: t.getIndexWithinParent(), type: "element" } : void 0;
}
function Vn(e, t) {
  return t?.warn(
    `[positions] A settled location in a pending ${e.kind} scope could not be lined up with its live bytes; it resolves to the front of the scope.`
  ), IT(e);
}
function Sl(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), IT(e);
}
function Lg(e) {
  const t = [];
  let r = 0;
  for (const n of e.spans) {
    n.isSentinel && t.push(n.end > n.start ? r : void 0);
    for (let i = n.start; i < n.end; i += 1)
      fr.test(e.text[i]) || (r += 1);
  }
  return t;
}
function P$(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = Lg(s)[r];
  if (a === void 0) return Vn(e, n);
  const c = Lg(i).findIndex(
    (d) => d !== void 0 && Cd(o, d, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], u = l?.isAttached() ? l.getParent() : void 0;
  if (l && u)
    return { key: u.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const f = ir(i, {
    nonWsBefore: Is(o, a, "settled"),
    wsRun: 0
  });
  return f ? $o(e, f) : Vn(e, n);
}
function qT(e, t, r, n, i, s) {
  const o = Jd(e);
  if (!o) return Vn(e, s);
  const a = !vn(n), c = Wo(o.alignment, t, "toLive"), l = (f) => {
    const d = Gd(o.liveFragment, f);
    if (d) return $o(e, d);
    const p = ir(
      o.liveFragment,
      Qd(o.liveFragment, f, a),
      { addressDisplayBytes: a }
    );
    return $o(
      e,
      p && r ? $T(o.liveFragment, p) : p
    );
  }, u = YN(o.alignment, t.nonWsBefore);
  if (u < c.nonWsBefore) {
    const f = l({ ...c, nonWsBefore: u }), d = f && X(f.key);
    if (f && d && UT(d, f.offset, i)) return f;
  }
  return l(c) ?? Vn(e, s);
}
function w$(e, t, r, n, i, s) {
  const o = A$(r.sentinelMap, n);
  if (!o) return P$(t, r, n.sentinelIndex, s);
  const a = r.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return Sl(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && n.isNoteOwnBytes)
    return wT(a, i, e.viewOptions);
  if (c?.kind === "note")
    return n.noteAnchor ? qT(
      c,
      n.noteAnchor.anchor,
      n.noteAnchor.atWordByte,
      i,
      e.viewOptions,
      s
    ) : Vn(c, s);
  let l = a;
  for (const u of n.path) {
    if (!A(l)) return Sl(t, s);
    const f = l.getChildAtIndex(u);
    if (!f) return Sl(t, s);
    l = f;
  }
  return { key: l.getKey(), offset: n.offset, type: n.type };
}
function N$(e, t, r) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = ur(t, r);
    return Pr(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (Pr(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function O$(e, t, r) {
  const n = $$(e, t, r);
  if (!n) return n;
  const i = Wr(r.location, r.scratchIndexes);
  return r.plan.scratch.getEditorState().read(() => {
    const [o, a] = ur(i, t.viewOptions);
    return v(o) && a !== void 0 && a > 0 && a === o.getTextContentSize();
  }) ? R$(t, n, r.location) : n;
}
function R$(e, t, r) {
  const n = X(t.key);
  if (t.type !== "text" || !v(n)) return t;
  const i = JSON.stringify(r);
  let s = t, o = { node: n, offset: t.offset };
  for (const a of DT(n, t.offset)) {
    if (a.node.is(o.node) && a.offset === o.offset) continue;
    if (a.node.is(o.node)) {
      const l = a.node.getTextContent()[a.offset];
      if (l === void 0 || !fr.test(l)) break;
    } else if (o.offset !== 0) break;
    o = a;
    const c = $u(e, a.node, a.offset);
    JSON.stringify(c) === i && (s = { key: a.node.getKey(), offset: a.offset, type: "text" });
  }
  return s;
}
function $$(e, t, r) {
  const { plan: n } = r, { logger: i, viewOptions: s } = e.tier2;
  if (n.kind === "note" && r.scratchIndexes.length === 1 && AT(r.location))
    return wT(n.liveNodes[0], r.location, t.viewOptions);
  const o = Wr(r.location, r.scratchIndexes);
  if (!n.scratch.getEditorState().read(() => E$(n.settledOnlyRuns, o, s))) return;
  const c = N$(n, o, s);
  if (c) return c;
  const l = Jd(n);
  if (!l) return Vn(n, i);
  const u = n.scratch.getEditorState().read(
    () => M$(
      l.scratchFragment,
      n.settledOnlyRuns,
      o,
      e.tier2
    )
  );
  if (!u) return Vn(n, i);
  if (u.kind === "preserved")
    return w$(t, n, l, u, r.location, i);
  if (u.kind === "literal") {
    const { run: f, anchor: d } = u, p = dx(f, d.nonWsBefore, "toLiteral") ?? Is(f.inner, d.nonWsBefore, "settled"), h = !vn(r.location), m = Qd(
      l.liveFragment,
      {
        nonWsBefore: f.liveBefore + p,
        wsRun: d.nonWsBefore === 0 ? f.liveWsBefore + d.wsRun : d.wsRun
      },
      h
    ), g = ir(l.liveFragment, m, {
      addressDisplayBytes: !0
    }), k = g && X(g.key);
    if (g && M(k) && k.getMarkerSyntax() !== "opening")
      return $o(n, g);
    const b = ir(l.liveFragment, m, {
      addressDisplayBytes: h
    });
    return b ? $o(
      n,
      u.atWordByte ? $T(l.liveFragment, b) : b
    ) : Vn(n, i);
  }
  return qT(
    n,
    u.anchor,
    u.atWordByte,
    r.location,
    s,
    i
  );
}
function Dg(e, t, r) {
  const n = Ya(t, r);
  if (!n) return;
  if (n.kind === "live") {
    const o = I$(t, n.location);
    if (o) return o;
    const [a, c] = ur(n.location, t.viewOptions);
    return a && c !== void 0 ? n.location : void 0;
  }
  const i = O$(e, t, n), s = i && X(i.key);
  return s ? L$(s, i.offset, t.viewOptions, n.plan.liveNodes) : void 0;
}
function Ug(e, t) {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; ) r += 1;
  return r;
}
function LT(e, t, r) {
  const n = Ug(e, t), i = Math.min(
    Ug([...e].reverse().join(""), [...t].reverse().join("")),
    e.length - n,
    t.length - n
  );
  return r <= n ? r : r >= e.length - i ? r - e.length + t.length : n;
}
function I$(e, t) {
  if (!hs(t)) return;
  const r = dr(Yr(t.jsonPath));
  for (const [n, i] of e.renamedClosers) {
    const s = X(n)?.getParent();
    if (!(!s || !Hd(Ar(s), r)))
      return {
        ...t,
        closingMarkerOffset: LT(
          i.settled,
          i.live,
          Math.min(t.closingMarkerOffset, i.settled.length)
        )
      };
  }
}
function Kg(e) {
  for (let t = e; t; t = t.getParent()) {
    let r = t.getPreviousSibling();
    if (r) {
      for (let n = A(r) ? r.getLastChild() : null; n; )
        r = n, n = A(r) ? r.getLastChild() : null;
      return r;
    }
  }
  return null;
}
function q$(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.some((n) => n.is(r))) return !0;
  return !1;
}
function* DT(e, t, r) {
  let n = e;
  if (v(e)) for (let i = t; i >= 0; i -= 1) yield { node: e, offset: i };
  else if (A(e)) {
    const i = e.getChildAtIndex(Math.min(t, e.getChildrenSize()));
    if (i) n = i;
    else {
      const s = e.getLastDescendant();
      if (v(s))
        for (let o = s.getTextContentSize(); o >= 0; o -= 1) yield { node: s, offset: o };
      n = s ?? e;
    }
  }
  for (let i = Kg(n); i; i = Kg(i))
    if (v(i)) {
      if (r && !q$(i, r)) return;
      for (let s = i.getTextContentSize(); s >= 0; s -= 1) yield { node: i, offset: s };
    }
}
function L$(e, t, r, n) {
  const i = Ct(e, t, r), s = Io([e, t]);
  if (!s || Io(ur(i, r))?.is(s)) return i;
  const o = (l, u) => UT(l, u, r), a = Yd(e, t), c = a && o(a.node, a.offset);
  if (c) return c;
  for (const l of DT(e, t, n)) {
    if (l.node.is(e) && l.offset === t) continue;
    const u = o(l.node, l.offset);
    if (u) return u;
  }
  return i;
}
function UT(e, t, r) {
  const n = Ct(e, t, r), i = Io(ur(n, r));
  if (!i) return;
  if (i.is(Sr(e.getKey(), t, "text"))) return n;
  const s = Yd(e, t);
  return s && i.is(Sr(s.node.getKey(), s.offset, "text")) ? n : void 0;
}
function Yd(e, t) {
  if (!v(e)) return;
  const r = t === e.getTextContentSize();
  if (!r && t !== 0) return;
  let n = e, i = r ? n.getNextSibling() : n.getPreviousSibling();
  for (; !i; ) {
    const s = n.getParent();
    if (!s || Pr(s) || Pr(s.getParent())) return;
    n = s, i = r ? n.getNextSibling() : n.getPreviousSibling();
  }
  for (; A(i); ) {
    const s = r ? i.getFirstChild() : i.getLastChild();
    if (!s) return;
    i = s;
  }
  if (v(i))
    return { node: i, offset: r ? 0 : i.getTextContentSize() };
}
function Io([e, t]) {
  if (!e || t === void 0) return;
  if (v(e)) return Sr(e.getKey(), t, "text");
  if (A(e)) return Sr(e.getKey(), t, "element");
  const r = e.getParent();
  if (!r) return;
  const n = e.getIndexWithinParent() + (t > 0 ? 1 : 0);
  return Sr(r.getKey(), n, "element");
}
function KT(e, t, r) {
  const n = ur(e, r), i = ur(t, r), [s, o] = n, [a, c] = i;
  if (s && a && s.is(a))
    return o !== void 0 && c !== void 0 && o > c;
  const l = Io(n), u = Io(i);
  return !!l && !!u && u.isBefore(l);
}
function FT(e, t, r) {
  const n = Ya(e, t), i = Ya(e, r);
  if (!(n?.kind !== "scope" || i?.kind !== "scope" || n.plan !== i.plan))
    return n.plan.scratch.getEditorState().read(
      () => KT(
        Wr(n.location, n.scratchIndexes),
        Wr(i.location, i.scratchIndexes),
        e.viewOptions
      )
    );
}
function D$(e, t, r) {
  if (t.byFirstLiveKey.size === 0 && t.renamedClosers.size === 0) return r;
  const n = Dg(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = Dg(e, t, r.end);
  if (!i) return;
  const s = FT(t, r.start, r.end);
  return s !== void 0 && KT(n, i, t.viewOptions) !== s ? { ...r, start: i, end: n } : { ...r, start: n, end: i };
}
function Ru(e, t) {
  const r = dr(Yr(t.jsonPath));
  return r.length === 0 ? t : Wr(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function BT(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function Xa(e, t) {
  const r = t.liveNodes[0], n = BT(e, t);
  if (n) {
    const s = Lc(e, n, r, 0);
    return typeof s == "object" ? dr(Yr(s.jsonPath)) : void 0;
  }
  const i = U$(r, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function U$(e, t) {
  return !bt(e) || !Pr(e.getParent()) ? Ar(e) : [ss(e, 0, Dt(t)).index];
}
function Xd(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function K$(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function F$(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!A(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return Ct(s, n, i);
  }
}
function B$(e, t) {
  const r = px(e, t);
  if (r)
    return {
      run: r,
      within: { nonWsBefore: 0, wsRun: t.wsRun - r.liveWsBefore }
    };
  const n = _d(e, t);
  if (n)
    return {
      run: n.run,
      within: n.within ?? {
        nonWsBefore: Is(n.run.inner, n.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function z$(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const r = X(e.key);
  return !(M(r) && r.getMarkerSyntax() !== "opening");
}
function Qd(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = fr.test(e.text[o]);
      if (n < t.nonWsBefore)
        a || (n += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || z$(s, r) ? t : { ...t, wsRun: i };
    }
  return t;
}
function zT(e, t, r, n, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, u = Md(o, r);
  if (u) {
    const m = o.sentinels[u.sentinelIndex];
    if (!c[u.sentinelIndex]?.some((C) => C !== void 0)) {
      const C = m[0].getParent();
      if (C)
        return zT(
          e,
          t,
          C,
          m[0].getIndexWithinParent(),
          i,
          s
        );
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const g = Ed(u.member, r);
    if (!g) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const k = c[u.sentinelIndex]?.[u.memberIndex];
    if (!k) return;
    const b = e.scratch.getEditorState().read(
      () => F$(a, k, g, n, i)
    );
    if (b) return b;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const f = co(o, r, K$(e, r, n));
  if (!f) return;
  const d = B$(e.settledOnlyRuns, f.anchor);
  if (d)
    return e.scratch.getEditorState().read(() => S$(d.run, d.within, i));
  const p = j$(
    l,
    o,
    a,
    f.anchor,
    Wo(l, f.anchor, "toSettled")
  ), h = !vn(
    Ct(r, n, i)
  );
  return e.scratch.getEditorState().read(() => {
    const m = Gd(a, p), g = m && X(m.key);
    if (g) return Ct(g, m.offset, i);
    const k = NT(a, p), b = k && X(k.key);
    if (b)
      return Ct(b, k.offset, i);
    const C = Qd(a, p, h), R = ir(a, C, { addressDisplayBytes: h });
    return R && V$(R, i);
  });
}
function Fg(e, t) {
  let r = 0, n = 0;
  for (const i of e) {
    if (fr.test(i)) {
      n += 1;
      continue;
    }
    if (r === t) return n;
    r += 1, n = 0;
  }
  return n;
}
function j$(e, t, r, n, i) {
  if (!e.segments.some(
    (a) => !a.same && a.liveStart === a.liveEnd && a.settledEnd > a.settledStart && a.settledEnd === i.nonWsBefore
  )) return i;
  const o = Fg(t.text, n.nonWsBefore) - n.wsRun;
  return {
    ...i,
    wsRun: Math.max(0, Fg(r.text, i.nonWsBefore) - o)
  };
}
function V$(e, t) {
  const r = X(e.key);
  if (!r) return;
  const n = A(r) && e.offset >= r.getChildrenSize() && (Pr(r) || r.getLastDescendant()?.is(_e().getLastDescendant())) && r.getLastDescendant();
  return n ? Ct(
    n,
    A(n) ? n.getChildrenSize() : n.getTextContentSize(),
    t
  ) : Ct(r, e.offset, t);
}
function Lc(e, t, r, n) {
  if (t.kind === "note") {
    const a = t.liveNodes[0], c = L(a) && Vt(a)?.is(r) && n === r.getTextContentSize() ? Yd(r, n) : void 0;
    if (c && !Ou(
      Ct(c.node, c.offset, e.viewOptions),
      a
    )) {
      const u = Lc(e, t, c.node, c.offset);
      if (typeof u == "object") return u;
    }
    const l = Ct(r, n, e.viewOptions);
    if (Ou(l, a)) {
      const u = Xa(e, t);
      return u && Wr(l, u);
    }
  }
  const i = Jd(t);
  if (!i) return;
  const s = zT(
    t,
    i,
    r,
    n,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = Xd(
    t,
    Xa(e, t),
    dr(Yr(s.jsonPath))
  );
  return o && Wr(s, o);
}
function W$(e) {
  const t = [], r = (n) => {
    if (A(n))
      n.getChildren().forEach((i, s) => {
        t.push({ node: n, offset: s }), r(i);
      }), t.push({ node: n, offset: n.getChildrenSize() });
    else if (v(n))
      for (let i = 0; i <= n.getTextContentSize(); i += 1)
        t.push({ node: n, offset: i });
  };
  return e.liveNodes.forEach(r), t;
}
function H$(e, t) {
  const r = t.scratch.getEditorState().read(() => Ct(_e(), 0, e.viewOptions)), n = Xd(
    t,
    Xa(e, t),
    dr(Yr(r.jsonPath))
  );
  if (n) return Wr(r, n);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = BT(e, t);
  return o ? VT(e, o, s, i.getIndexWithinParent()) : Ru(
    e,
    Ct(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function jT(e, t, r) {
  const n = W$(t), i = r ? n.findIndex((s) => s.node.is(r.node) && s.offset === r.offset) : -1;
  for (let s = (i < 0 ? n.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = n[s], c = Lc(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return H$(e, t);
}
function VT(e, t, r, n) {
  return Lc(e, t, r, n) ?? jT(e, t, { node: r, offset: n });
}
function $u(e, t, r) {
  const n = e.planContaining(t);
  if (n) return VT(e, n, t, r);
  const i = e.renamedClosers.get(t.getKey());
  if (i) {
    const a = Ct(t, r, e.viewOptions);
    return Ru(
      e,
      hs(a) ? {
        ...a,
        closingMarkerOffset: LT(
          i.live,
          i.settled,
          a.closingMarkerOffset
        )
      } : a
    );
  }
  const s = Pr(t) && r >= t.getChildrenSize() && t.getLastChild(), o = s ? e.planContaining(s) : void 0;
  return o ? G$(e, o) ?? jT(e, o, void 0) : Ru(e, Ct(t, r, e.viewOptions));
}
function G$(e, t) {
  const r = t.scratch.getEditorState().read(() => {
    const i = _e();
    return Ct(i, i.getChildrenSize(), e.viewOptions);
  }), n = Xd(
    t,
    Xa(e, t),
    dr(Yr(r.jsonPath))
  );
  return n && Wr(r, n);
}
function J$(e) {
  const t = Tc(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0 && e.renamedClosers.size === 0)
    return t;
  const r = P();
  if (!E(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = $u(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = $u(e, o.getNode(), o.offset);
  if (a)
    return FT(e, s, a) === !0 ? { start: a, end: s } : { start: s, end: a };
}
function Y$(e) {
  return e.getKey();
}
function WT(e, t, r) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && bt(i) ? aO(i, r.getMarker, r.viewOptions) : t.every(ge) ? Od(t, r.getMarker, r.viewOptions) : kg(t, r.getMarker, r.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(Re);
    if (!i) return;
    const s = new Set([i, ...ji(i)].map(Y$));
    return t.every((o) => s.has(o.getKey())) ? Oo(i, r.getMarker, r.viewOptions) : kg(t, r.getMarker, r.viewOptions);
  }
  const n = t.find(L);
  return n && No(n, r.getMarker, r.viewOptions)?.out;
}
function X$(e, t) {
  const r = Ju({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = _e();
        t.forEach((i) => n.append(_s(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const Bg = "\0";
function HT(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), A(r) && HT(r.getChildren(), t);
  return t;
}
function Q$(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(Bg), a = HT(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(Bg);
}
function Zd(e, t = []) {
  for (const r of e)
    L(r) && t.push(r), A(r) && Zd(r.getChildren(), t);
  return t;
}
function Dc(e, t, r, n, i, s, o) {
  const a = X$(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l, settledSide: u } = a.getEditorState().read(() => {
    const h = WT(e, _e().getChildren(), o.tier2);
    return {
      settledCount: Wt(
        _e(),
        Dt(o.tier2.viewOptions)
      ).length,
      scratchFragment: h,
      settledSide: h && Sd(h)
    };
  }), f = { kind: e, liveNodes: t, liveCut: n, scratch: a, scratchFragment: l, settledCount: c };
  if ((r?.sentinels.length ?? 0) === 0 && (u?.runs.length ?? 0) === 0) {
    const h = r && u && Wa(Va(r, []), u).alignment;
    return { ...f, liveFragment: r, sentinelMap: [], settledOnlyRuns: [], alignment: h };
  }
  const d = r && s && Ax(r, s.live), p = d && u && Wa(Va(d, s.live), u);
  return p ? { ...f, liveFragment: d, ...p } : {
    ...f,
    liveFragment: r,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function ep(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = bT(e, t);
  return r ? {
    liveFragment: Id(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function tp(e, t) {
  for (const r of e.noteGlyphRenames.values())
    TT(r, t);
  for (const r of e.charOpenerRenames.values())
    ST(r, t);
}
function Z$(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = ep(t, i), a = Ho(e), c = /* @__PURE__ */ new Map();
  if (Go([e], [a], c), tp(r, c), !qc(
    e,
    c,
    n.tier2,
    r.huskKeys,
    i,
    r.charOpenerRenames
  ))
    return;
  const l = t && Jo(t, c, r.huskKeys);
  return Dc("note", [e], s, o, [a], l, n);
}
function e2(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = ep(t, i), a = e.map(Ho), c = /* @__PURE__ */ new Map();
  Go(e, a, c), tp(r, c), Zd(e).filter((f) => r.noteScopes.has(f.getKey())).forEach(
    (f) => qc(
      f,
      c,
      n.tier2,
      r.huskKeys,
      i,
      r.charOpenerRenames
    )
  );
  const l = kT(
    e,
    c,
    n.tier2,
    r.huskKeys,
    i,
    r.charOpenerRenames
  );
  if (!l) return;
  const u = t && Jo(t, c, r.huskKeys);
  return Dc("para", e, s, o, l, u, n);
}
function t2(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = ep(t, i), a = _T(e, n.tier2, i, r.charOpenerRenames);
  if (!a) return;
  const c = [e, ...ji(e)];
  return Dc("chapter", c, s, o, a, void 0, n);
}
function r2(e, t, r, n, i, s) {
  const o = Ho(e), a = /* @__PURE__ */ new Map();
  Go([e], [o], a), tp(n, a), Zd([e]).filter((u) => n.noteScopes.has(u.getKey())).forEach(
    (u) => qc(
      u,
      a,
      i.tier2,
      n.huskKeys,
      s,
      n.charOpenerRenames
    )
  );
  const c = /* @__PURE__ */ new Set();
  for (const u of r) {
    const f = a.get(u.getKey());
    if (!f) continue;
    const d = f.siblings.indexOf(f.node);
    d < 0 || (ET(f.siblings, d), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Jo(t, a, c);
  return Dc("para", [e], t, void 0, [o], l, i);
}
function n2(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function zg(e, t, r = /* @__PURE__ */ new Map()) {
  return {
    renamedClosers: r,
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (n) => n,
    settledToLiveTopIndex: (n) => ({ liveIndex: n, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e,
    logger: t
  };
}
function i2(e) {
  return e.liveNodes.every((r) => r.isAttached()) ? (e.liveFragment?.spans ?? []).every((r) => X(r.key) !== null) : !1;
}
function jg(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function s2(e, t) {
  const r = Wt(_e(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = jg(r[o]), c = a && e.get(a.getKey());
    if (!c) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((f) => f.getKey()));
    let u = 0;
    for (; o + u < r.length; ) {
      const f = jg(r[o + u]);
      if (!f || !l.has(f.getKey())) break;
      u += 1;
    }
    for (let f = 0; f < u; f += 1)
      n[o + f] = s;
    for (let f = 0; f < c.settledCount; f += 1)
      i.push({ liveIndex: o, plan: c, indexWithinScope: f });
    s += c.settledCount, o += u;
  }
  return { liveToSettled: n, settledToLive: i };
}
function Vg(e) {
  const t = yT(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), zg(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = MT(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (p, h) => {
    if (!p) return;
    const m = p.liveNodes[0].getKey();
    n.set(m, p), p.liveNodes.forEach((g) => i.set(g.getKey(), p)), h && p.liveNodes.forEach((g) => s.set(g.getKey(), p));
  }, c = (p, h, m, g) => {
    o.add(p);
    const k = WT(h, m, e.tier2), b = Q$(
      h,
      m,
      k?.text ?? "",
      e.tier2,
      t
    ), C = e.cache.entries.get(p);
    if (C?.signature === b && i2(C.plan)) return C.plan;
    const R = g(k);
    return R ? e.cache.entries.set(p, { signature: b, plan: R }) : e.cache.entries.delete(p), R;
  };
  for (const p of r.noteScopes.values())
    a(
      c(
        p.getKey(),
        "note",
        [p],
        (h) => Z$(p, h, r, e, t)
      ),
      !1
    );
  for (const p of r.paraScopes.values())
    a(
      c(
        p[0].getKey(),
        "para",
        p,
        (h) => e2(p, h, r, e, t)
      ),
      !0
    );
  for (const p of r.chapterScopes.values())
    a(
      c(
        p.getKey(),
        "chapter",
        [p, ...ji(p)],
        (h) => t2(p, h, r, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const p of r.husks) {
    const h = p.getTopLevelElement();
    if (!(ge(h) || bt(h)) || n2(p, i)) continue;
    const m = l.get(h.getKey()) ?? { para: h, husks: [] };
    m.husks.push(p), l.set(h.getKey(), m);
  }
  for (const [p, { para: h, husks: m }] of l)
    a(
      c(
        p,
        "para",
        [h],
        (g) => r2(h, g, m, r, e, t)
      ),
      !0
    );
  for (const p of [...e.cache.entries.keys()])
    o.has(p) || e.cache.entries.delete(p);
  const u = /* @__PURE__ */ new Map();
  for (const { closer: p, newMarker: h } of r.charOpenerRenames.values())
    p && u.set(p.getKey(), {
      live: p.getTextContent(),
      settled: wc(h, "closing", p.getNested())
    });
  if (n.size === 0)
    return zg(e.tier2.viewOptions, e.tier2.logger, u);
  const { liveToSettled: f, settledToLive: d } = s2(
    s,
    Dt(e.tier2.viewOptions)
  );
  return {
    byFirstLiveKey: n,
    renamedClosers: u,
    liveToSettledTopIndex: (p) => f[p] ?? p,
    settledToLiveTopIndex: (p) => d[p],
    planContaining: (p) => {
      for (let h = p; h; h = h.getParent()) {
        const m = i.get(h.getKey());
        if (m) return m;
      }
    },
    viewOptions: e.tier2.viewOptions,
    logger: e.tier2.logger
  };
}
function o2({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = Te(), n = ue({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return J(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Qa(s, e) || a2(i, r, e);
  }, [r, e, t]), J(
    () => r.registerMutationListener(
      wr,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Iu(r);
        Wg(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: oa(s) === oa(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), J(() => {
    const i = (a) => a.read(
      () => new Set(
        _e().getChildren().filter(at).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), f = i(c), d = [...f].some((p) => !u.has(p));
      d && (Iu(r) || Wg(n.current, r, void 0, {
        hasCreated: d,
        hasDestroyed: [...u].some((p) => !f.has(p)),
        isSameDocumentReload: oa(a) === oa(c)
      }));
    };
    return ct(
      ...[pr, gr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), J(
    () => r.registerCommand(
      Br,
      () => {
        const i = n.current;
        return i.phase === "idle" && d2(i, l2()), !1;
      },
      Bt
    ),
    [r]
  ), J(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Br, void 0));
    };
    return ct(
      r.registerMutationListener(qt, i),
      r.registerMutationListener(Pt, i)
    );
  }, [r]), J(() => {
    const i = () => m2(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function a2(e, t, r) {
  if (c2(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Iu(t);
  (!n || n === r.book) && t.update(() => GT(t, r.chapterNum, r.verseNum));
}
function c2(e, t) {
  const r = e.pendingEchoes.findIndex((n) => Qa(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function l2() {
  const e = P(), t = Tf(e);
  if (!t) return;
  const r = rp(), n = Ny(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Ff(t, e), { verseNum: o, verse: a } = ZM(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Iu(e) {
  return e.getEditorState().read(() => rp()?.getCode() || void 0);
}
function rp() {
  return _e().getChildren().find(Mt);
}
function Wg(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && _l(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || _l(e, t), e.phase = "navigating") : i && _l(e, t), r && r !== e.scrRef.book && XT(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function _l(e, t) {
  queueMicrotask(() => {
    t.update(
      () => GT(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function GT(e, t, r) {
  const n = P()?.clone();
  u2(t, r);
  const i = P();
  i && !(n && i.is(n)) && e.dispatchCommand(Zu, void 0);
}
function u2(e, t) {
  const r = Tf(P()), n = Bf(r)?.getNumber(), i = Ny(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Ly(n) ? YT(t, n) : parseInt(n, 10) === t))
    return;
  const o = _e().getChildren(), a = wy(o, e);
  if (!a) return;
  const c = I_(o, a), l = A_(c, !0);
  $_(c, l);
  let u;
  try {
    u = GM(c, t);
  } catch {
    return;
  }
  u && (ge(u) ? !v(u.getFirstChild()) && Rs(u) || dn(u, 0) : f2(u));
}
function f2(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || Ne(n)) {
    dn(t, r);
    return;
  }
  const i = gc(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = A(n) && !L(n) ? JT(n) : void 0;
  s ? s.select(0, 0) : dn(t, r);
}
function JT(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (A(t) && !L(t)) return JT(t);
}
function oa(e) {
  return e.read(() => {
    const t = _e().getChildren().find(at);
    return `${rp()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function d2(e, t) {
  e.phase !== "navigating" && t && (p2(t, e.scrRef) || XT(e, h2(t, e.scrRef)));
}
function p2(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? YT(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function YT(e, t) {
  try {
    return vf(e, t);
  } catch {
    return !1;
  }
}
function h2(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const g2 = 8;
function XT(e, t) {
  return Qa(t, e.scrRef) || e.pendingEchoes.some((r) => Qa(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > g2 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Qa(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function m2(e) {
  e.phase = "idle";
}
function y2(e) {
  return Mt(e) ? `${e.__code}` : Re(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : $n(e) ? `${e.__marker} "${e.__number}"` : Lt(e) ? `${e.__caller}` : mn(e) ? `${e.__marker} "${e.__number}"` : L(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ge(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${b2(e)}` : pe(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Le(e) ? `${e.__marker} "${e.__number}"` : "";
}
function b2(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Cn]) : "";
}
function k2() {
  const [e] = Te();
  return /* @__PURE__ */ _(
    rC,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: y2,
      editor: e
    }
  );
}
const QT = im(null), Hg = 4;
function x2({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = ue(null), s = sm(QT);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return J(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function T2({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = Ae(), [s, o] = Ae(), a = Se(
    (u) => {
      i((f) => f ? [...f, u] : [u]);
    },
    [i]
  ), c = (u) => {
    if (!n) return;
    const f = u.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(f) && u.preventDefault(), f === "Escape" || f === "Tab" ? r() : f === "ArrowUp" ? o((d) => {
      if (!d) return n[0];
      const p = n.indexOf(d) - 1;
      return n[p === -1 ? n.length - 1 : p];
    }) : f === "ArrowDown" && o((d) => d ? n[n.indexOf(d) + 1] : n[0]);
  }, l = rt(() => ({ registerItem: a }), [a]);
  return J(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ _(QT.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function v2({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = ue(null), c = ue(null), [l, u] = Ae(!1), f = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return J(() => {
    const d = c.current, p = a.current;
    if (l && d !== null && p !== null) {
      const { top: h, left: m } = d.getBoundingClientRect();
      p.style.top = `${h + d.offsetHeight + Hg}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), J(() => {
    const d = c.current;
    if (d !== null && l) {
      const p = (h) => {
        const m = h.target;
        o && a.current && a.current.contains(m) || d.contains(m) || u(!1);
      };
      return document.addEventListener("click", p), () => {
        document.removeEventListener("click", p);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), J(() => {
    const d = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: m } = p.getBoundingClientRect(), g = m + p.offsetHeight + Hg;
          g !== h.getBoundingClientRect().top && (h.style.top = `${g}px`);
        }
      }
    };
    return document.addEventListener("scroll", d), () => {
      document.removeEventListener("scroll", d);
    };
  }, [c, a, l]), /* @__PURE__ */ He(ki, { children: [
    /* @__PURE__ */ He(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ _("span", { className: i }),
          t && /* @__PURE__ */ _("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ _("i", { className: "chevron-down" })
        ]
      }
    ),
    l && gi(
      /* @__PURE__ */ _(T2, { dropDownRef: a, onClose: f, children: s }),
      document.body
    )
  ] });
}
const qu = {
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
}, Lu = {
  ...qu,
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
function C2({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ _(
    v2,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + S2(t),
      buttonLabel: _2(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(qu).map((n) => /* @__PURE__ */ He(
        x2,
        {
          className: "item block-marker " + M2(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: qu[n] })
          ]
        },
        n
      ))
    }
  );
}
function S2(e) {
  return e && e in Lu ? e : "ban";
}
function _2(e) {
  return e && e in Lu ? Lu[e] : "No Style";
}
function M2(e) {
  return e ? "active dropdown-item-active" : "";
}
function Gg() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const E2 = Oi(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = Te(), [o, a] = Ae(s), [c, l] = Ae(), [u, f] = Ae(!1), [d, p] = Ae(!1), h = Se(
    ({
      canUndo: m,
      canRedo: g,
      blockMarker: k,
      contextMarker: b
    }) => {
      f(m), p(g), l(k), n?.({
        canUndo: m,
        canRedo: g,
        blockMarker: k,
        contextMarker: b
      });
    },
    [n]
  );
  return J(() => s.registerCommand(
    Br,
    (m, g) => (a(g), !1),
    _r
  ), [s]), /* @__PURE__ */ He(ki, { children: [
    /* @__PURE__ */ _(vk, { onStateChange: h }),
    /* @__PURE__ */ He("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(pm, void 0);
          },
          title: ka ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ _("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(hm, void 0);
          },
          title: ka ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(Gg, {}),
      o === s && /* @__PURE__ */ He(ki, { children: [
        /* @__PURE__ */ _(
          C2,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ _(Gg, {})
      ] }),
      /* @__PURE__ */ _("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), A2 = kc(), P2 = {}, w2 = {}, Jg = EC.filter((e) => e !== ef);
function N2() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Yg(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function Xg() {
  const e = P();
  if (!E(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return v(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function O2(e) {
  const t = [], r = (n, i) => n?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(vt(a)), r(s.content, a);
  });
  return r(e?.content, []), t;
}
function R2(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function $2({
  listener: e
}) {
  const [t] = Te();
  return Ss(
    () => t.registerUpdateListener((r) => e(r, t)),
    [t, e]
  ), null;
}
const ZT = Oi(function({
  defaultUsj: t,
  scrRef: r,
  onScrRefChange: n,
  onSelectionChange: i,
  onUsjChange: s,
  onStateChange: o,
  options: a,
  logger: c,
  children: l
}, u) {
  const f = ue(null), d = ue(null), p = ue(null), h = ue(t), m = ue(!1), g = ue(void 0), k = ue(void 0), b = ue(void 0), C = ue({ entries: /* @__PURE__ */ new Map() }), R = ue(void 0), w = ue(0), F = ue(!0), Y = ue(void 0), [N, W] = Ae(t), [ne, D] = Ae(0), [ke, he] = Ae(), {
    isReadonly: ve = !1,
    structureProtectionMode: Me = "off",
    hasExternalUI: je = !1,
    hasSpellCheck: Ze = !1,
    textDirection: Gt = "ltr",
    markerMenuTrigger: Ve = "\\",
    view: Xr,
    nodes: Jt,
    debug: Oe = !1,
    contextMenu: de,
    styleInfo: q,
    markerSettleDelayMs: ce
  } = a ?? w2, me = Xr ?? A2, Fe = Po(me) && (me.markerMode !== "hidden" || !me.hasSpacing || me.hasGutterParaMarkers || me.hasActiveTextFocusBox) ? {
    ...me,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : me, yt = ue(Fe);
  an(yt.current, Fe) || (yt.current = Fe);
  const te = yt.current, nt = rt(() => Jt ?? P2, [Jt]), br = rt(() => de, [de]), Pe = rt(
    () => UM(q ?? Oa),
    [q]
  ), sr = ue(c);
  an(sr.current, c) || (sr.current = c);
  const oe = sr.current, Kt = Po(te), Ee = ve || Kt, Qr = Fe !== me;
  J(() => {
    Kt && !ve && oe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Qr && oe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), te?.markerMode === "visible" && !ve && oe?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [Kt, ve, Qr, oe, te?.markerMode]);
  const Zr = ue(null), O = rt(() => {
    if (te.markerMode !== "editable") return;
    const I = q ?? Oa;
    return {
      getContext: () => Zr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (z) => ON(
        I,
        z,
        nt.extraValidMarkers
      ),
      getEnterItems: (z) => RN(
        I,
        z,
        nt.extraValidMarkers
      ),
      apply: (z, G) => {
        const le = Zr.current;
        le && (G.trigger === "enter" ? le.splitParagraphWithMarker(z.marker) : le.applyMarkerMenuSelection(z, G));
      },
      commitTypedCloser: (z) => {
        Zr.current?.commitTypedCloser(z);
      }
    };
  }, [te, q, nt.extraValidMarkers]), B = (I) => {
    if (Kt)
      throw new Error(
        `Cannot ${I} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, j = (I) => {
    if (B(I), Ee) throw new Error(`Cannot ${I} in readonly mode`);
  }, H = rt(
    () => [ut, ...Kt ? E0 : Sc],
    [Kt]
  ), ae = rt(
    () => ({
      namespace: "platformEditor",
      theme: { ...ex, showCharMarkerTitles: te.showCharMarkerTitles },
      editable: !Ee,
      editorState: void 0,
      // Handling of errors during update
      onError(I) {
        throw I;
      },
      nodes: H
    }),
    [Ee, H, te.showCharMarkerTitles]
  );
  rs.initialize(oe);
  function ee(I) {
    if (I !== void 0 && !eN(I, nt.extraValidMarkers))
      throw new Error(`Unsupported character marker '${I}'`);
  }
  const Q = Se(() => {
    const I = f.current;
    if (!I) return h.current;
    const z = () => {
      if (!m.current) return;
      const xr = rs.deserializeEditorState(I.getEditorState(), te);
      xr && (h.current = xr, m.current = !1);
    }, G = Kl(I), le = k.current;
    if ((!G || G.size === 0) && !le)
      return z(), h.current;
    const Be = I.getEditorState(), Ce = b.current, qe = {
      editorState: Be,
      pendedKeys: G ? [...G].sort().join(",") : "",
      transientInput: le,
      caretKey: Ce?.key,
      caretOffset: Ce?.offset,
      viewOptions: te,
      getMarker: Pe
    }, dt = R.current;
    if (dt && R2(dt.key, qe)) return dt.usj;
    const en = Be.toJSON(), Yt = Be.read(
      () => h$(
        en,
        G ?? /* @__PURE__ */ new Set(),
        { viewOptions: te, getMarker: Pe, logger: oe },
        le,
        Ce
      )
    );
    return Yt ? (R.current = { key: qe, usj: Yt }, Yt) : (z(), h.current);
  }, [te, Pe, oe]), Z = Se(() => {
    const I = f.current;
    if (!I) return;
    const z = {
      pendedKeys: Kl(I) ?? /* @__PURE__ */ new Set(),
      transientInput: k.current,
      lastKnownCaret: b.current,
      tier2: { viewOptions: te, getMarker: Pe, logger: oe },
      nodes: H,
      cache: C.current
    };
    return Ys(z) && z.cache.entries.clear(), z;
  }, [te, Pe, oe, H]), ie = Se(
    (I) => {
      const z = f.current, G = Z();
      if (!(!z || !G))
        return Ys(G) ? I : z.getEditorState().read(() => {
          const le = Vg(G);
          return D$(G, le, I);
        });
    },
    [Z]
  );
  J(() => (F.current = !0, () => {
    F.current = !1;
  }), []);
  const De = Se(
    (I, z) => I.read(() => {
      const G = Z(), le = G && J$(Vg(G));
      return !le && E(P()) && oe?.warn(
        `${z} refused: the selection could not be expressed against the document the host is reading`
      ), le;
    }),
    [Z, oe]
  ), Je = Se(
    (I) => {
      if (!i) return;
      const z = f.current, G = Z();
      w.current += 1;
      const le = w.current;
      if (!z || !G || Ys(G)) {
        i(I);
        return;
      }
      queueMicrotask(() => {
        if (!F.current || le !== w.current || f.current !== z) return;
        const Be = De(z, "onSelectionChange");
        le === w.current && i(Be);
      });
    },
    [i, Z, De]
  ), kr = {
    focus() {
      f.current?.focus();
    },
    isFocused() {
      const I = f.current?.getRootElement();
      return !!I && I.ownerDocument.activeElement === I;
    },
    undo() {
      f.current?.dispatchCommand(pm, void 0);
    },
    redo() {
      f.current?.dispatchCommand(hm, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      j("cut"), f.current && cd(f.current);
    },
    copy() {
      f.current && ad(f.current);
    },
    paste() {
      j("paste"), f.current && ld(f.current);
    },
    pastePlainText() {
      j("paste as plain text"), f.current && ud(f.current);
    },
    getUsj() {
      return Q();
    },
    commitPendingMarkerEdits() {
      f.current?.update(
        () => {
          f.current?.dispatchCommand(dT, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(I) {
      if (!I) {
        k.current = void 0;
        return;
      }
      const z = f.current?.getEditorState().read(() => {
        const G = P();
        return E(G) && G.isCollapsed() ? G.focus.key : void 0;
      });
      k.current = { input: I, nodeKey: z ?? b.current?.key };
    },
    setUsj(I) {
      if (!an(h.current, I)) {
        h.current = I, k.current = void 0;
        const z = an(N, I);
        W(I), z && D((G) => G + 1);
      }
    },
    applyUpdate(I, z = "remote") {
      if (Kt && z === "remote") {
        sr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      B("apply an update");
      const G = f.current;
      G?._updating && sr.current?.error(
        "Editor: applyUpdate was called inside an update of this editor; its change will be announced as a local edit without the given ops. Call it outside editor updates, commands, and update listeners."
      ), G && Wp(G, z);
      try {
        G?.update(
          () => {
            z === "remote" && cn(ef), TA(I, te, nt, oe);
          },
          { discrete: !0 }
        );
      } finally {
        G && Wp(G, void 0);
      }
      const le = f.current?.getEditorState();
      if (!le) return;
      const Be = rs.deserializeEditorState(le, te);
      if (Be) {
        const Ce = !an(h.current, Be);
        Ce && (h.current = Be);
        const qe = Q();
        if (qe && (Ce || !an(N, Be))) {
          const dt = ih(I, le, "apply");
          Y.current = qe, s?.(qe, I, z, dt);
        }
      }
    },
    replaceEmbedUpdate(I, z) {
      const G = f.current?.read(() => fE(I, z));
      G ? this.applyUpdate(G) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${I}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      const I = f.current;
      if (!I) return;
      I.read(() => {
      });
      const z = Z();
      return !z || Ys(z) ? I.read(() => Tc(te)) : De(I, "getSelection");
    },
    setSelection(I) {
      const z = ie(I);
      if (!z) {
        oe?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      f.current?.update(() => {
        const G = xc(z, te);
        G !== void 0 && (Sn(G), (!jt().isEditable() || Yg(G.anchor) && Yg(G.focus)) && f.current?.dispatchCommand(Br, void 0));
      });
    },
    setAnnotation(I, z, G, le, Be) {
      let Ce, qe, dt, en;
      typeof le == "function" || le === void 0 ? (Ce = le, qe = Be) : (Ce = le.onClick, qe = le.onRemove, dt = le.onMouseEnter, en = le.onMouseLeave);
      const Yt = ie(I);
      if (!Yt) {
        oe?.warn(
          `setAnnotation refused for ${z} "${G}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.setAnnotation(
        Yt,
        Zc(z),
        G,
        Ce,
        qe,
        dt,
        en
      );
    },
    removeAnnotation(I, z) {
      d.current?.removeAnnotation(Zc(I), z);
    },
    getAnnotationRanges(I, z) {
      return d.current?.getAnnotationRanges(Zc(I), z) ?? [];
    },
    formatPara(I) {
      j("format a paragraph"), f.current?.update(
        () => {
          const z = P();
          if (!E(z)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${I}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          sC(z, () => _o(I));
          const G = P();
          if (!E(G)) return;
          const le = /* @__PURE__ */ new Set();
          G.getNodes().forEach((Be) => {
            const Ce = Be.getTopLevelElement();
            ge(Ce) && le.add(Ce);
          }), le.forEach((Be) => Lx(Be, I, te));
        },
        { discrete: !0 }
      );
    },
    getElementByKey(I) {
      return f.current?.read(
        () => f.current?.getElementByKey(I) ?? void 0
      );
    },
    removeCharacterMarker(I) {
      if (Ee) throw new Error("Cannot remove character marker in readonly mode");
      ee(I);
      let z = !1;
      return f.current?.update(
        () => {
          const G = P();
          E(G) && (z = Gk(G, I, te));
        },
        { discrete: !0 }
      ), z;
    },
    replaceCharacterMarker(I, z) {
      if (Ee) throw new Error("Cannot replace character marker in readonly mode");
      ee(I), ee(z);
      let G = !1;
      return f.current?.update(
        () => {
          const le = P();
          E(le) && (G = dN(le, I, z));
        },
        { discrete: !0 }
      ), G;
    },
    extendCharacterMarker(I, z) {
      if (Ee) throw new Error("Cannot extend character marker in readonly mode");
      ee(I), z?.forEach(
        (le) => ee(le)
      );
      let G = !1;
      return f.current?.update(
        () => {
          const le = P();
          E(le) && (G = pN(
            le,
            I,
            z,
            te
          ));
        },
        { discrete: !0 }
      ), G;
    },
    insertMarker(I) {
      if (Ee) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!gu(I, nt.extraValidMarkers))
        throw new Error(`Unsupported marker '${I}'`);
      const z = mu(
        I,
        g,
        te,
        nt,
        oe,
        void 0,
        q
      );
      return z.action({ editor: f.current, reference: r }), z.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!ve)
        return f.current?.getEditorState().read(() => KO());
    },
    applyMarkerMenuSelection(I, z) {
      if (ve) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (I.kind !== "closeTag" && !gu(I.marker, nt.extraValidMarkers))
        throw new Error(`Unsupported marker '${I.marker}'`);
      let G;
      return f.current.update(() => {
        G = VO(I, z, r, {
          expandedNoteKeyRef: g,
          viewOptions: te,
          nodeOptions: nt,
          logger: c,
          styleInfo: q
        });
      }), G;
    },
    splitParagraphWithMarker(I) {
      if (ve) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        zx(I, te);
      });
    },
    commitTypedMarker(I, z) {
      if (ve) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let G = !1;
      return f.current.update(() => {
        G = jO(I, z), G || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), G;
    },
    commitTypedCloser(I) {
      if (ve) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let z = !1;
      return f.current.update(() => {
        z = Bx(I), z || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), z;
    },
    insertNote(I, z, G) {
      j("insert a note");
      const le = G && ie(G);
      if (G && !le) {
        oe?.warn(
          `insertNote refused for \\${I}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.update(
        () => {
          const Be = jb(
            I,
            z,
            le,
            r,
            te,
            nt,
            oe
          );
          Be && !Be.getIsCollapsed() && (g.current = Be.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(I) {
      const z = f.current;
      if (!z) return;
      const G = Z();
      if (typeof I == "string" || !G || Ys(G)) {
        z.update(() => {
          const Ce = gh(I);
          Ce && (mh(Ce, te), Ce.getIsCollapsed() || (g.current = Ce.getKey()));
        });
        return;
      }
      const le = O2(Q())[I], Be = le ? ie({ start: { jsonPath: le } }) : void 0;
      Be && z.update(() => {
        const [Ce, qe] = ur(Be.start, te);
        if (!Ce || qe === void 0) return;
        const dt = L(Ce) ? Ce : St(Ce, L);
        L(dt) ? (mh(dt, te), dt.getIsCollapsed() || (g.current = dt.getKey())) : v(Ce) && Ce.select(qe, qe);
      });
    },
    getNoteOps(I) {
      return f.current?.read(() => {
        const z = gh(I);
        if (z)
          return Vf(z);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Zr.current = kr, Uu(u, () => kr), J(() => {
    const I = f.current;
    if (I)
      return I.registerUpdateListener(({ editorState: z }) => {
        const G = z.read(Xg);
        G && (b.current = G);
      });
  }, []);
  const or = ue({ onUsjChange: s, viewOptions: te, isBlockVerse: Kt, readSettledUsj: Q });
  or.current = { onUsjChange: s, viewOptions: te, isBlockVerse: Kt, readSettledUsj: Q };
  const yn = Se((I, z) => {
    const { editorState: G, dirtyElements: le, dirtyLeaves: Be, tags: Ce } = I;
    if (le.size === 0 && Be.size === 0) return;
    if (Ce.has(ic)) {
      const tn = or.current, ii = !tn.isBlockVerse && rs.deserializeEditorState(G, tn.viewOptions);
      ii && (h.current = ii), Y.current = h.current;
      return;
    }
    if ($f(z)) return;
    if (Jg.some((tn) => Ce.has(tn))) {
      m.current = !0;
      return;
    }
    const qe = or.current;
    if (qe.isBlockVerse) return;
    fy(z, G, Ce);
    const dt = G.read(Xg);
    dt && (b.current = dt);
    const en = kA(I, {
      ignoreTags: Jg
    }), Yt = en ? [] : new is(G.read(() => xA(z, I))).chop().ops;
    if (!en) {
      const tn = rs.deserializeEditorState(G, qe.viewOptions);
      tn && (h.current = tn);
    }
    if (!qe.onUsjChange) return;
    const xr = qe.readSettledUsj();
    xr && (Yt.length === 0 && an(Y.current, xr) || (Y.current = xr, Yt.length === 0 ? qe.onUsjChange(xr, void 0, "local", void 0) : qe.onUsjChange(xr, Yt, "local", ih(Yt, G))));
  }, []), ni = Se(
    (I) => {
      he(I.contextMarker), o?.(I);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ He(mm, { initialConfig: ae, children: [
      /* @__PURE__ */ _(EP, { isEditable: !Ee }),
      /* @__PURE__ */ He("div", { className: "editor-container", children: [
        je ? /* @__PURE__ */ _(vk, { onStateChange: ni }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (Ee ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              E2,
              {
                ref: p,
                editorRef: Zr,
                isReadonly: Ee,
                onStateChange: ni
              }
            )
          }
        ),
        /* @__PURE__ */ He("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(bm, { editorRef: f }),
          /* @__PURE__ */ _(
            iC,
            {
              contentEditable: /* @__PURE__ */ _(
                ym,
                {
                  className: `editor-input usfm ${WE(te).join(" ")}${te.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${te.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Ze
                }
              ),
              placeholder: /* @__PURE__ */ _(N2, {}),
              ErrorBoundary: km
            }
          ),
          je && /* @__PURE__ */ _(MP, {}),
          /* @__PURE__ */ _(xm, {}),
          r && n && /* @__PURE__ */ _(o2, { scrRef: r, onScrRefChange: n }),
          r && !je && /* @__PURE__ */ _(
            X1,
            {
              trigger: Ve,
              scrRef: r,
              contextMarker: ke,
              getMarkerAction: (I) => mu(
                I,
                g,
                te,
                nt,
                oe,
                void 0,
                q
              ),
              editableHarness: O
            }
          ),
          /* @__PURE__ */ _(
            wP,
            {
              scripture: N,
              scriptureRef: h,
              nodeOptions: nt,
              editorAdaptor: wn,
              viewOptions: te,
              logger: oe
            },
            ne
          ),
          /* @__PURE__ */ _(XP, { onChange: Je, viewOptions: te }),
          /* @__PURE__ */ _($2, { listener: yn }),
          /* @__PURE__ */ _(bN, { viewOptions: te }),
          /* @__PURE__ */ _(bA, { ref: d, logger: oe, viewOptions: te }),
          /* @__PURE__ */ _(HA, { viewOptions: te }),
          /* @__PURE__ */ _(aP, {}),
          /* @__PURE__ */ _(gP, {}),
          te?.markerMode !== "editable" && /* @__PURE__ */ _(mP, { logger: oe }),
          /* @__PURE__ */ _(xP, { options: br }),
          /* @__PURE__ */ _(_P, {}),
          /* @__PURE__ */ _(PP, {}),
          /* @__PURE__ */ _(WO, {}),
          /* @__PURE__ */ _(
            QR,
            {
              viewOptions: te,
              getMarker: Pe,
              logger: oe,
              markerSettleDelayMs: ce,
              structureProtectionMode: Me
            }
          ),
          te?.markerMode === "visible" && /* @__PURE__ */ _(o$, { viewOptions: te }),
          /* @__PURE__ */ _(
            i$,
            {
              styleInfo: q,
              viewOptions: te,
              logger: oe
            }
          ),
          /* @__PURE__ */ _(
            NP,
            {
              expandedNoteKeyRef: g,
              nodeOptions: nt,
              viewOptions: te,
              logger: oe
            }
          ),
          /* @__PURE__ */ _(YP, {}),
          /* @__PURE__ */ _(BA, {}),
          /* @__PURE__ */ _(DA, {}),
          /* @__PURE__ */ _(g$, { viewOptions: te, logger: oe }),
          /* @__PURE__ */ _(QP, {}),
          /* @__PURE__ */ _(L1, { structureProtectionMode: Me }),
          /* @__PURE__ */ _(D1, { textDirection: Gt }),
          /* @__PURE__ */ _(K1, {}),
          /* @__PURE__ */ _(J1, {}),
          l
        ] }),
        Oe && /* @__PURE__ */ _(k2, {})
      ] })
    ] }, te.verseLayout ?? "inline")
  );
}), jI = Oi(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(ZT, { ref: r, ...i });
});
function Qg(e, t) {
  const r = v(e) ? dS(e, Ot, t) ?? [] : [], n = tM(e, Ot, t);
  return [.../* @__PURE__ */ new Set([...r, ...n])];
}
function I2(e, t, r) {
  qm(Ot, e, t);
  for (const n of r) {
    const i = X(n);
    i && Qy(i, Ot, e);
  }
}
function q2(e) {
  const t = Array.from(e, (i) => X(i)).filter(
    (i) => i !== null
  );
  t.sort((i, s) => i.isBefore(s) ? -1 : 1);
  const r = t[0];
  if (!r) return;
  if (v(r)) {
    const [i] = Mf(r);
    r.select(i, i);
    return;
  }
  const n = r.getParent();
  n && n.select(r.getIndexWithinParent(), r.getIndexWithinParent());
}
function ev() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Za(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? ev() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function tv(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? ev() : r,
    quote: e,
    type: "thread"
  };
}
function Zg(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function L2(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Ml(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class D2 {
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
  constructor(t, r) {
    this._comments = [], this._editor = t, this.logger = r, this._collabProvider = null, this._changeListeners = /* @__PURE__ */ new Set();
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
    this._comments = t, Ml(this);
  }
  /**
   * Adds a comment or thread to the store.
   *
   * @param commentOrThread - The comment or thread to add.
   * @param thread - Optional parent thread to add the comment to.
   * @param offset - Optional offset for insertion.
   */
  addComment(t, r, n) {
    const i = Array.from(this._comments), s = this._getCollabComments();
    if (r !== void 0 && t.type === "comment")
      for (let o = 0; o < i.length; o++) {
        const a = i[o];
        if (a.type === "thread" && a.id === r.id) {
          const c = Zg(a);
          i.splice(o, 1, c);
          const l = n !== void 0 ? n : c.comments.length;
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
      const o = n !== void 0 ? n : i.length;
      this.isCollaborative() && s !== null && this._withRemoteTransaction(() => {
        const a = this._createCollabSharedMap(t);
        s.insert(o, [a]);
      }), i.splice(o, 0, t);
    }
    this._comments = i, Ml(this);
  }
  /**
   * Deletes a comment or thread from the store.
   *
   * @param commentOrThread - The comment or thread to delete.
   * @param thread - Optional parent thread if deleting a comment within a thread.
   * @returns An object containing the marked comment and its index, or null.
   */
  deleteCommentOrThread(t, r) {
    const n = Array.from(this._comments), i = this._getCollabComments();
    let s = null;
    if (r !== void 0)
      for (let o = 0; o < n.length; o++) {
        const a = n[o];
        if (a.type === "thread" && a.id === r.id) {
          const c = Zg(a);
          n.splice(o, 1, c);
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
      s = n.indexOf(t), this.isCollaborative() && i !== null && this._withRemoteTransaction(() => {
        i.delete(s);
      }), n.splice(s, 1);
    return this._comments = n, Ml(this), t.type === "comment" ? {
      index: s,
      markedComment: L2(t)
    } : null;
  }
  /**
   * Registers a callback to be called when the comments change.
   *
   * @param onChange - The callback function.
   * @returns A function to unregister the callback.
   */
  registerOnChange(t) {
    const r = this._changeListeners;
    return r.add(t), () => {
      r.delete(t);
    };
  }
  _withRemoteTransaction(t) {
    const r = this._collabProvider;
    r !== null && r.doc.transact(t, this);
  }
  _withLocalTransaction(t) {
    const r = this._collabProvider;
    try {
      this._collabProvider = null, t();
    } finally {
      this._collabProvider = r;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _getCollabComments() {
    const t = this._collabProvider;
    return t !== null ? t.doc.get("comments", gp) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new mp(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new gp();
      t.comments.forEach((o, a) => {
        const c = this._createCollabSharedMap(o);
        s.insert(a, [c]);
      }), r.set("comments", s);
    }
    return r;
  }
  /**
   * Registers collaborative editing support using a Yjs provider.
   *
   * @param provider - The Yjs Provider instance.
   * @returns A function to unregister collaboration and cleanup.
   */
  registerCollaboration(t) {
    this._collabProvider = t;
    const r = this._getCollabComments(), n = () => {
      t.connect();
    }, i = () => {
      try {
        t.disconnect();
      } catch {
      }
    }, s = this._editor.registerCommand(
      xC,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Bt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof TC) {
            const u = l.target, f = l.delta;
            let d = 0;
            for (const p of f) {
              const h = p.insert, m = p.retain, g = p.delete, k = u.parent, b = u === r ? void 0 : k instanceof mp && this._comments.find((C) => C.id === k.get("id"));
              if (Array.isArray(h)) {
                const C = d;
                h.slice().reverse().forEach((R) => {
                  const w = R.get("id"), Y = R.get("type") === "thread" ? tv(
                    R.get("quote"),
                    R.get("comments").toArray().map(
                      (N) => Za(
                        N.get("content"),
                        N.get("author"),
                        N.get("id"),
                        N.get("timeStamp"),
                        N.get("deleted")
                      )
                    ),
                    w
                  ) : Za(
                    R.get("content"),
                    R.get("author"),
                    w,
                    R.get("timeStamp"),
                    R.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(Y, b, C);
                  });
                });
              } else if (typeof m == "number")
                d += m;
              else if (typeof g == "number")
                for (let C = 0; C < g; C++) {
                  const R = b === void 0 || b === !1 ? this._comments[d] : b.comments[d];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(R, b);
                  }), d++;
                }
            }
          }
      }
    };
    return r === null ? () => null : (r.observeDeep(o), n(), () => {
      r.unobserveDeep(o), s(), this._collabProvider = null;
    });
  }
}
function U2(e) {
  const [t, r] = Ae(e.getComments());
  return J(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function K2({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = ue(null);
  return J(() => {
    i.current !== null && i.current.focus();
  }, []), J(() => {
    let s = null;
    const o = (l) => {
      l.key === "Escape" && e();
    }, a = (l) => {
      const u = l.target;
      i.current !== null && !i.current.contains(u) && n && e();
    }, c = i.current;
    return c !== null && (s = c.parentElement, s !== null && s.addEventListener("click", a)), window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o), s !== null && s?.removeEventListener("click", a);
    };
  }, [n, e]), /* @__PURE__ */ _("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ He("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ _("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ _(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ _("div", { className: "Modal__content", children: t })
  ] }) });
}
function F2({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return gi(
    /* @__PURE__ */ _(K2, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function rv() {
  const [e, t] = Ae(null), r = Se(() => {
    t(null);
  }, []), n = rt(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _(F2, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = Se(
    (s, o, a = !1) => {
      t({
        closeOnClickOutside: a,
        content: o(r),
        title: s
      });
    },
    [r]
  );
  return [n, i];
}
const B2 = {
  ...ex,
  paragraph: "CommentEditorTheme__paragraph"
};
function z2(...e) {
  return e.filter(Boolean).join(" ");
}
function Qn({
  "data-test-id": e,
  children: t,
  className: r,
  onClick: n,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ _(
    "button",
    {
      disabled: i,
      className: z2(
        "Button__root",
        i && "Button__disabled",
        s && "Button__small",
        r
      ),
      onClick: n,
      title: o,
      "aria-label": o,
      ...e && { "data-test-id": e },
      children: t
    }
  );
}
function j2({
  className: e
}) {
  return /* @__PURE__ */ _(ym, { className: e || "ContentEditable__root" });
}
function V2({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const em = Fu("INSERT_INLINE_COMMAND");
function W2({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = ue(null), s = Se(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return J(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Ss(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ _("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ _("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ _("i", { className: "icon add-comment" }) }) });
}
function H2({ onEscape: e }) {
  const [t] = Te();
  return J(() => t.registerCommand(
    dm,
    (r) => e(r),
    ls
  ), [t, e]), null;
}
function nv({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(mm, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: B2
  }, children: /* @__PURE__ */ He("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      yC,
      {
        contentEditable: /* @__PURE__ */ _(j2, { className: e }),
        placeholder: /* @__PURE__ */ _(V2, { children: s }),
        ErrorBoundary: km
      }
    ),
    /* @__PURE__ */ _(mC, { onChange: n }),
    /* @__PURE__ */ _(xm, {}),
    t !== !1 && /* @__PURE__ */ _(pC, {}),
    /* @__PURE__ */ _(H2, { onEscape: r }),
    /* @__PURE__ */ _(hC, {}),
    i !== void 0 && /* @__PURE__ */ _(bm, { editorRef: i })
  ] }) });
}
function iv(e, t) {
  return Se(
    (r, n) => {
      r.read(() => {
        e(bC()), t(!kC(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function G2({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = Ae(""), [s, o] = Ae(!1), a = ue(null), c = rt(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = ue(null), u = ov(), f = Se(() => {
    e.getEditorState().read(() => {
      const m = P();
      if (E(m)) {
        l.current = m.clone();
        const g = m.anchor, k = m.focus, b = oC(
          e,
          g.getNode(),
          g.offset,
          k.getNode(),
          k.offset
        ), C = a.current;
        if (b !== null && C !== null) {
          const { left: R, bottom: w, width: F } = b.getBoundingClientRect(), Y = aC(e, b);
          let N = Y.length === 1 ? R + F / 2 - 125 : R - 125;
          N < 10 && (N = 10), C.style.left = `${N}px`, C.style.top = `${w + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const W = Y.length, { container: ne } = c, D = c.elements, ke = D.length;
          for (let he = 0; he < W; he++) {
            const ve = Y[he];
            let Me = D[he];
            Me === void 0 && (Me = document.createElement("span"), D[he] = Me, ne.appendChild(Me));
            const Ze = `position:absolute;top:${ve.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${ve.left}px;height:${ve.height}px;width:${ve.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Me.style.cssText = Ze;
          }
          for (let he = ke - 1; he >= W; he--) {
            const ve = D[he];
            ne.removeChild(ve), D.pop();
          }
        }
      }
    });
  }, [e, c]);
  Ss(() => {
    f();
    const m = c.container, g = document.body;
    return g !== null ? (g.appendChild(m), () => {
      g.removeChild(m);
    }) : () => {
    };
  }, [c.container, f]), J(() => (window.addEventListener("resize", f), () => {
    window.removeEventListener("resize", f);
  }), [f]);
  const d = (m) => (m.preventDefault(), t(), !0), p = () => {
    if (s) {
      let m = e.getEditorState().read(() => {
        const g = l.current;
        return g ? g.getTextContent() : "";
      });
      m.length > 100 && (m = m.slice(0, 99) + "…"), r(
        tv(m, [Za(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = iv(i, o);
  return /* @__PURE__ */ He("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      nv,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: d,
        onChange: h
      }
    ),
    /* @__PURE__ */ He("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ _(Qn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ _(
        Qn,
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
function J2({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = Ae(""), [s, o] = Ae(!1), a = ue(null), c = ov(), l = iv(i, o);
  return /* @__PURE__ */ He(ki, { children: [
    /* @__PURE__ */ _(
      nv,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ _(
      Qn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Za(n, c), !1, t);
            const f = a.current;
            f !== null && f.dispatchCommand(Qv, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function sv({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ He(ki, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ He("div", { className: "Modal__content", children: [
      /* @__PURE__ */ _(
        Qn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ _(
        Qn,
        {
          onClick: () => {
            r();
          },
          children: "Cancel"
        }
      )
    ] })
  ] });
}
function tm({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = Ae(0);
  J(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const f = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(f);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = rv();
  return /* @__PURE__ */ He("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ He("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ He("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ He(ki, { children: [
      /* @__PURE__ */ _(
        Qn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ _(
              sv,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ _("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function Y2({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  displayIndex: n,
  listRef: i,
  submitAddComment: s,
  markNodeMap: o
}) {
  const [a] = Te(), [c, l] = Ae(0), [u, f] = rv(), d = rt(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return J(() => {
    const p = setTimeout(() => {
      l(c + 1);
    }, 1e4);
    return () => {
      clearTimeout(p);
    };
  }, [c]), /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List", ref: i, children: t.map((p) => {
    const h = p.id;
    if (p.type === "thread") {
      const m = e !== null && e.indexOf(h) !== -1;
      return /* @__PURE__ */ He(
        "li",
        {
          onClick: () => {
            if (m) return;
            const k = o.get(h), b = document.activeElement;
            if (k !== void 0) {
              a.update(
                () => {
                  const R = Array.from(k)[0], w = X(R);
                  pe(w) && w.selectStart();
                },
                {
                  onUpdate() {
                    b !== null && b.focus();
                  }
                }
              );
              return;
            }
            const C = n.keysFor(Ot, h);
            C.size !== 0 && a.update(
              () => {
                q2(C);
              },
              {
                onUpdate() {
                  b !== null && b.focus();
                }
              }
            );
          },
          className: `CommentPlugin_CommentsPanel_List_Thread ${o.has(h) || n.keysFor(Ot, h).size > 0 ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
          children: [
            /* @__PURE__ */ He("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
              /* @__PURE__ */ He("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
                "> ",
                /* @__PURE__ */ _("span", { children: p.quote })
              ] }),
              /* @__PURE__ */ _(
                Qn,
                {
                  onClick: () => {
                    f("Delete Thread", (k) => /* @__PURE__ */ _(
                      sv,
                      {
                        commentOrThread: p,
                        deleteCommentOrThread: r,
                        onClose: k
                      }
                    ));
                  },
                  className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                  children: /* @__PURE__ */ _("i", { className: "delete" })
                }
              ),
              u
            ] }),
            /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: p.comments.map((k) => /* @__PURE__ */ _(
              tm,
              {
                comment: k,
                deleteComment: r,
                thread: p,
                rtf: d
              },
              k.id
            )) }),
            /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
              J2,
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
    return /* @__PURE__ */ _(
      tm,
      {
        comment: p,
        deleteComment: r,
        rtf: d
      },
      h
    );
  }) });
}
function X2({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i,
  displayIndex: s
}) {
  const o = ue(null), a = r.length === 0;
  return /* @__PURE__ */ He("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ _("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    a ? /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ _(
      Y2,
      {
        activeIDs: e,
        comments: r,
        deleteCommentOrThread: t,
        displayIndex: s,
        listRef: o,
        submitAddComment: n,
        markNodeMap: i
      }
    )
  ] });
}
function ov() {
  const e = Tm(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function Q2({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Tm(), [a] = Te(), c = rt(() => {
    const W = new D2(a, s);
    return r && W.registerOnChange(r), t?.(W), W;
  }, [a, s, r, t]), l = U2(c), u = rt(() => /* @__PURE__ */ new Map(), []), f = rk(a), [d, p] = Ae(), [h, m] = Ae([]), [g, k] = Ae(!1), [b, C] = Ae(!1), { yjsDocMap: R } = o;
  J(() => {
    if (e) {
      const W = e("comments", R);
      return c.registerCollaboration(W);
    }
    return () => {
    };
  }, [c, e, R]);
  const w = Se(() => {
    a.update(() => {
      const W = P();
      W !== null && (W.dirty = !0);
    }), k(!1);
  }, [a]), F = Se(
    (W, ne) => {
      if (W.type === "comment") {
        const D = c.deleteCommentOrThread(W, ne);
        if (!D)
          return;
        const { markedComment: ke, index: he } = D;
        c.addComment(ke, ne, he);
      } else {
        c.deleteCommentOrThread(W);
        const D = ne !== void 0 ? ne.id : W.id, ke = u.get(D), he = f.keysFor(Ot, D);
        (ke !== void 0 && ke.size > 0 || he.size > 0) && setTimeout(() => {
          a.update(() => {
            I2(D, ke ?? [], he);
          });
        });
      }
    },
    [c, f, a, u]
  ), Y = Se(
    (W, ne, D, ke) => {
      c.addComment(W, D), ne && (a.update(() => {
        E(ke) && Rf(ke, Ot, W.id);
      }), k(!1));
    },
    [c, a]
  );
  J(() => {
    const W = [];
    let ne;
    const D = () => {
      ne = window.setTimeout(() => {
        C(!0);
      }, 0);
    };
    for (const ke of h) {
      const he = u.get(ke) ?? [];
      for (const ve of he) {
        const Me = a.getElementByKey(ve);
        Me !== null && (Me.classList.add("selected"), W.push(Me), D());
      }
      f.keysFor(Ot, ke).size > 0 && (f.setStateClass(Ot, ke, "selected", !0), D());
    }
    return () => {
      ne !== void 0 && window.clearTimeout(ne);
      for (const ke of W)
        ke.classList.remove("selected");
      for (const ke of h)
        f.setStateClass(Ot, ke, "selected", !1);
    };
  }, [h, f, a, u]), J(() => {
    if (!a.hasNodes([ut]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const W = /* @__PURE__ */ new Map();
    return ct(
      Yu(
        a,
        ut,
        (ne) => Ci(ne.getTypedIDs()),
        (ne, D) => {
          for (const [ke, he] of Object.entries(ne.getTypedIDs()))
            he.forEach((ve) => {
              D.addID(ke, ve);
            });
        }
      ),
      a.registerMutationListener(
        ut,
        (ne) => {
          a.getEditorState().read(() => {
            for (const [D, ke] of ne) {
              const he = X(D);
              let ve = [];
              ke === "destroyed" ? ve = W.get(D) ?? [] : pe(he) && (ve = he.getTypedIDs()[Ot] ?? []);
              for (const Me of ve) {
                let je = u.get(Me);
                W.set(D, ve), ke === "destroyed" ? je !== void 0 && (je.delete(D), je.size === 0 && u.delete(Me)) : (je === void 0 && (je = /* @__PURE__ */ new Set(), u.set(Me, je)), je.has(D) || je.add(D));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: ne, tags: D }) => {
        ne.read(() => {
          const ke = P();
          let he = !1, ve = !1;
          if (E(ke)) {
            const { anchor: Me } = ke, je = Me.getNode();
            if (v(je)) {
              const Ze = Qg(je, Me.offset);
              m(Ze), he = !0, ke.isCollapsed() || (p(je.getKey()), ve = !0);
            } else if (Me.type === "element" && A(je)) {
              const Ze = je.getChildren(), Gt = /* @__PURE__ */ new Set();
              for (const [Ve, Xr] of [
                [Ze[Me.offset - 1], !0],
                [Ze[Me.offset], !1]
              ]) {
                if (!Ve) continue;
                const Jt = Xr && v(Ve) ? Ve.getTextContentSize() : 0;
                Qg(Ve, Jt).forEach((Oe) => Gt.add(Oe));
              }
              Gt.size > 0 && (m([...Gt]), he = !0);
            }
          }
          he || m((Me) => Me.length === 0 ? Me : []), ve || p(null), !D.has("collaboration") && E(ke) && k(!1);
        });
      }),
      a.registerCommand(
        em,
        () => {
          const ne = window.getSelection();
          return ne !== null && ne.removeAllRanges(), k(!0), !0;
        },
        xi
      )
    );
  }, [a, u]);
  const N = () => {
    a.dispatchCommand(em, void 0);
  };
  return /* @__PURE__ */ He(ki, { children: [
    g && gi(
      /* @__PURE__ */ _(
        G2,
        {
          editor: a,
          cancelAddComment: w,
          submitAddComment: Y
        }
      ),
      document.body
    ),
    d != null && !g && gi(
      /* @__PURE__ */ _(
        W2,
        {
          anchorKey: d,
          editor: a,
          showComments: b,
          onAddComment: N
        }
      ),
      document.body
    ),
    n !== null && gi(
      /* @__PURE__ */ _(
        Qn,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => C(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && gi(
      /* @__PURE__ */ _(
        X2,
        {
          comments: l,
          submitAddComment: Y,
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
function Z2() {
  const e = ue(void 0), t = Se((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function eI(e, t) {
  const r = t.current?.getComments() ?? [], n = r?.map((s) => s.id), i = e.map((s) => {
    const o = n.findIndex((a) => a === s);
    return o !== void 0 && o >= 0 ? r[o] : {
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
  r.forEach((s) => {
    e.includes(s.id) || i.push(s);
  }), i && t.current?.setComments(i);
}
function tI(e, t) {
  J(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      eI(r, t);
    };
  }, [t, e]);
}
const VI = Oi(function(t, r) {
  const n = ue(null), i = ue(!0), s = ue(null), [o, a] = Ae(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: f, ...d } = t, { logger: p, options: { isReadonly: h, view: m } = {} } = t, g = (h ?? !1) || Po(m), [k, b] = Z2();
  tI(d, k), J(() => {
    if (process.env.NODE_ENV !== "production") {
      const w = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(w), p || console.warn(w);
    }
  }, [p]), Uu(r, () => ({
    focus() {
      n.current?.focus();
    },
    isFocused() {
      return n.current?.isFocused() ?? !1;
    },
    undo() {
      n.current?.undo();
    },
    redo() {
      n.current?.redo();
    },
    cut() {
      n.current?.cut();
    },
    copy() {
      n.current?.copy();
    },
    paste() {
      n.current?.paste();
    },
    pastePlainText() {
      n.current?.pastePlainText();
    },
    getUsj() {
      return n.current?.getUsj();
    },
    commitPendingMarkerEdits() {
      n.current?.commitPendingMarkerEdits();
    },
    setTransientInput(w) {
      n.current?.setTransientInput(w);
    },
    setUsj(w) {
      n.current?.setUsj(w);
    },
    applyUpdate(w, F) {
      n.current?.applyUpdate(w, F);
    },
    replaceEmbedUpdate(w, F) {
      return n.current?.replaceEmbedUpdate(w, F);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(w) {
      n.current?.setSelection(w);
    },
    setAnnotation(w, F, Y, N, W) {
      typeof N == "function" || N === void 0 ? n.current?.setAnnotation(w, F, Y, N, W) : n.current?.setAnnotation(w, F, Y, N);
    },
    removeAnnotation(w, F) {
      n.current?.removeAnnotation(w, F);
    },
    getAnnotationRanges(w, F) {
      return n.current?.getAnnotationRanges(w, F) ?? [];
    },
    formatPara(w) {
      n.current?.formatPara(w);
    },
    getElementByKey(w) {
      return n.current?.getElementByKey(w);
    },
    removeCharacterMarker(w) {
      return n.current?.removeCharacterMarker(w) ?? !1;
    },
    replaceCharacterMarker(w, F) {
      return n.current?.replaceCharacterMarker(w, F) ?? !1;
    },
    extendCharacterMarker(w, F) {
      return n.current?.extendCharacterMarker(w, F) ?? !1;
    },
    insertMarker(w) {
      return n.current?.insertMarker(w);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(w, F) {
      return n.current?.applyMarkerMenuSelection(w, F);
    },
    splitParagraphWithMarker(w) {
      n.current?.splitParagraphWithMarker(w);
    },
    commitTypedMarker(w, F) {
      return n.current?.commitTypedMarker(w, F) ?? !1;
    },
    commitTypedCloser(w) {
      return n.current?.commitTypedCloser(w) ?? !1;
    },
    insertNote(w, F, Y) {
      n.current?.insertNote(w, F, Y);
    },
    selectNote(w) {
      n.current?.selectNote(w);
    },
    getNoteOps(w) {
      return n.current?.getNoteOps(w);
    },
    setComments(w) {
      k.current?.setComments(w), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const C = Se(
    (w, F, Y, N) => {
      if (!u) return;
      const W = k.current?.getComments();
      u(w, W, F, Y, N);
    },
    [k, u]
  ), R = Se(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const w = k.current?.getComments();
    l(w);
  }, [k, i, l]);
  return J(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(gC, { children: /* @__PURE__ */ He(ZT, { ref: n, onUsjChange: C, ...d, children: [
    /* @__PURE__ */ _(
      Q2,
      {
        setCommentStore: b,
        onChange: R,
        showCommentsContainerRef: g ? null : f ?? o,
        commentContainerRef: s,
        logger: d.logger
      }
    ),
    /* @__PURE__ */ _("div", { ref: s, className: "comment-container" })
  ] }) });
});
function hi(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function rI(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function nI(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const iI = /^[#\w().,%/\s-]+$/;
function bn(e) {
  return e != null;
}
const sI = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, oI = {
  left: "right",
  right: "left"
}, aI = "var(--usj-font-fallback, serif)";
function av(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${rI(i)}"`).join(", ")}, ${aI}`;
}
const Du = ".editor-input.usfm", cI = /^[\w.#[\]="':()>+~*,\s-]+$/;
function lI(e) {
  return cI.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Du}".`
  ), Du);
}
function uI(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(av(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (iI.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), bn(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), bn(t.firstLineIndent) && s.push(`text-indent: ${hi(t.firstLineIndent * 20 * r)}vw`), bn(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${hi(t.leftMargin * 20 * r)}vw`), bn(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${hi(t.rightMargin * 20 * r)}vw`
  ), bn(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${hi(t.spaceBefore * r)}pt`), bn(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${hi(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = sI[n ? oI[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const rm = { c: 150, ca: 133, cp: 150 };
function nm(e, t) {
  return e && bn(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function fI(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && bn(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = nm(e.markers.c, rm.c);
  return ["ca", "cp"].map((i) => {
    const s = nm(
      e.markers[i],
      rm[i]
    ), o = hi(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function WI(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Du } = t, s = lI(i), o = [], a = [];
  e.defaultFont && a.push(av(e.defaultFont)), bn(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${hi(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = uI(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${nI(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...fI(e, s)), o.join(`
`);
}
export {
  Mb as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  jI as Editorial,
  mo as GENERATOR_NOTE_CALLER,
  vm as HIDDEN_NOTE_CALLER,
  VI as Marginal,
  x as MarkerType,
  _b as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Gf as STANDARD_VIEW_MODE,
  Oa as defaultStyleInfo,
  zI as directionToNames,
  q0 as filterAndRankItems,
  WI as generateUsjCss,
  FI as getDefaultViewMode,
  kc as getDefaultViewOptions,
  RN as getEnterMenuItems,
  ON as getMarkerMenuItems,
  BI as getViewMode,
  Xf as getViewOptions,
  Po as isBlockVerseLayout,
  Un as isInsertEmbedOpOfType,
  BE as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
