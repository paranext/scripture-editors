import { jsx as A, jsxs as Oe, Fragment as zn } from "react/jsx-runtime";
import { forwardRef as Mn, useState as me, useRef as Z, useCallback as xe, useEffect as j, useMemo as Xe, memo as jb, createContext as Lp, useContext as Dp, Children as Vb, isValidElement as Wb, cloneElement as Hb, useImperativeHandle as ra, useLayoutEffect as Fs } from "react";
import { assertSafeKey as nt, isValidBookCode as Gb, MARKER_OBJECT_PROPS as Jb, USJ_VERSION as gr, USJ_TYPE as mr, isUsjTextContentLocation as Yb, indexesFromUsjJsonPath as Up, isUsjAttributeKeyLocation as Xb, isUsjAttributeMarkerLocation as Qb, isUsjClosingAttributeMarkerLocation as Zb, isUsjMarkerLocation as ek, isUsjClosingMarkerLocation as tk, isUsjPropertyValueLocation as rk, getUsjDocumentLocationTypeName as nk, usjJsonPathFromIndexes as wn, EMPTY_USJ as Fp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as et, $parseSerializedNode as Kn, DecoratorNode as zs, ElementNode as kr, isHTMLElement as ni, createState as na, $getState as ae, $setState as Nt, $isRangeSelection as P, $isElementNode as L, $isTextNode as M, $getSelection as N, $isNodeSelection as ia, ParagraphNode as El, TextNode as Qe, $createTextNode as Ae, $getCommonAncestor as ik, $isLineBreakNode as ii, NODE_STATE_KEY as Ks, $getEditor as gn, $hasUpdateTag as sk, $getNodeByKey as ne, $getRoot as Fe, $createRangeSelection as mn, $createPoint as fr, $setSelection as Nr, SELECTION_CHANGE_COMMAND as zt, $getCharacterOffsets as Al, KEY_DOWN_COMMAND as xr, COMMAND_PRIORITY_HIGH as we, HISTORY_MERGE_TAG as Pl, CLICK_COMMAND as sa, COMMAND_PRIORITY_EDITOR as Bn, DELETE_CHARACTER_COMMAND as Ar, DELETE_WORD_COMMAND as $i, DELETE_LINE_COMMAND as jn, COMMAND_PRIORITY_NORMAL as wr, CONTROLLED_TEXT_INSERTION_COMMAND as Vn, COMMAND_PRIORITY_CRITICAL as fe, PASTE_COMMAND as Ft, CUT_COMMAND as ir, REMOVE_TEXT_COMMAND as Nl, isDOMNode as zp, $getNearestNodeFromDOMNode as Wi, $isRootNode as wl, DROP_COMMAND as Ol, $isDecoratorNode as si, COPY_COMMAND as Wn, COMMAND_PRIORITY_LOW as Rt, getDOMSelection as ok, isSelectionWithinEditor as Kp, $createRangeSelectionFromDom as Bp, isDOMTextNode as ak, BLUR_COMMAND as Rl, $addUpdateTag as Pt, DRAGSTART_COMMAND as jp, $createNodeSelection as Vp, INSERT_PARAGRAPH_COMMAND as Hn, INSERT_LINE_BREAK_COMMAND as vc, SKIP_DOM_SELECTION_TAG as Vr, CLEAR_HISTORY_COMMAND as ck, $getPreviousSelection as lk, $isRootOrShadowRoot as uk, CAN_UNDO_COMMAND as dk, CAN_REDO_COMMAND as fk, getDOMSelectionFromTarget as pk, $onUpdate as Wp, KEY_ENTER_COMMAND as Hp, LineBreakNode as Gp, $copyNode as hk, FOCUS_COMMAND as gk, createEditor as mk, SELECT_ALL_COMMAND as yk, isExactShortcutMatch as bk, getDOMTextNode as kk, KEY_ESCAPE_COMMAND as Jp, createCommand as Yp, HISTORIC_TAG as $l, UNDO_COMMAND as Xp, REDO_COMMAND as Qp, CLEAR_EDITOR_COMMAND as xk } from "lexical";
import { addClassNamesToElement as bi, removeClassNamesFromElement as Ba, $findMatchingParent as Re, $dfsIterator as oa, $dfs as oi, mergeRegister as $e, registerNestedElementResolver as Zp, $unwrapNode as Mc, IS_APPLE as yn } from "@lexical/utils";
import { useLexicalNodeSelection as Tk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Xt } from "fast-equals";
import ds from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as Ck } from "unicode-segmenter/grapheme";
import { copyToClipboard as Sk, $getLexicalContent as _k } from "@lexical/clipboard";
import { TreeView as vk } from "@lexical/react/LexicalTreeView";
import * as Mk from "react-dom";
import { createPortal as Un } from "react-dom";
import { LexicalComposer as eh } from "@lexical/react/LexicalComposer";
import { ContentEditable as th } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as rh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as nh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as ih } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Ek } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Ak, createDOMRange as Pk, createRectsFromDOMRange as Nk } from "@lexical/selection";
import { autoUpdate as wk, computePosition as Ok, shift as Rk, flip as $k } from "@floating-ui/dom";
import { $generateNodesFromDOM as qk } from "@lexical/html";
import { AutoFocusPlugin as Ik } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Lk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as sh, LexicalCollaboration as Dk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Uk } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Fk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as zk, $isRootTextContentEmpty as Kk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Bk } from "@lexical/yjs";
import { Array as Td, Map as Cd, YArrayEvent as jk } from "yjs";
const ja = (e) => et(Kn(e)), Vk = {
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
function oh(e) {
  return Vk[e];
}
const U = " ", vo = "​", sr = U, ql = `${U}|`, rr = "p", xs = "+", ah = "-", Mo = "chapter", Ec = "verse", Sd = "invalid", Wk = "text-spacing", Hk = "formatted-font", Gk = "marker-", Il = "external-usj-mutation", ch = "selection-change", wt = "cursor-change", Ac = "annotation-change", Ts = "delta-change", lh = "marker-settle", Jk = [
  Il,
  ch,
  wt,
  Ac,
  Ts
], Gn = "zmsc-s", wi = "zmsc-e", Yk = [Gn, wi], Xk = [
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
  Gn,
  wi
], uh = 1, Ll = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Qk = Ll.filter((e) => e !== "sid" && e !== "eid");
class yr extends zs {
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
    return new yr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return fh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Xk.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: uh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function dh(e) {
  return Yk.includes(e);
}
function fh(e, t, r, n, i) {
  return et(new yr(e, t, r, n, void 0, i));
}
function rt(e) {
  return e instanceof yr;
}
const Dl = "f", Zk = [
  // Footnote
  Dl,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function uo(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const ex = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], ph = 1;
class qe extends kr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Dl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (uo(t) === "crossref" ? ah : xs), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new qe(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => rx(t) ? {
        conversion: tx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ul().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Zk.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", uo(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", uo(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", uo(this.getMarker()))), { element: r };
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
      version: ph
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
function tx(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Ul(t, r, n) };
}
function Ul(e, t, r, n, i) {
  return et(new qe(e, t, r, n, i));
}
function rx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return qe.isValidMarker(t) && e.classList.contains(qe.getType());
}
function B(e) {
  return e instanceof qe;
}
var C;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(C || (C = {}));
var x;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(x || (x = {}));
const Pc = {
  id: {
    category: C.FileIdentification,
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
    category: C.FileIdentification,
    type: x.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: C.FileIdentification,
    type: x.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: C.Headers,
    type: x.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: C.Remarks,
    type: x.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: C.Remarks,
    type: x.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: C.Remarks,
    type: x.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: C.Introduction,
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
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
    type: x.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
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
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: C.Introduction,
    type: x.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: C.Introduction,
    type: x.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: C.DivisionMarks,
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
    category: C.DivisionMarks,
    type: x.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: C.DivisionMarks,
    type: x.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: C.DivisionMarks,
    type: x.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: C.DivisionMarks,
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
    category: C.DivisionMarks,
    type: x.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: C.DivisionMarks,
    type: x.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: C.DivisionMarks,
    type: x.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
    type: x.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Paragraphs,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
    type: x.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: C.Poetry,
    type: x.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: C.Poetry,
    type: x.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
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
    category: C.Poetry,
    type: x.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
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
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: C.TitlesHeadings,
    type: x.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
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
    category: C.Lists,
    type: x.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: C.Lists,
    type: x.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: C.Footnotes,
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
    category: C.Footnotes,
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
    category: C.Footnotes,
    type: x.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: C.Footnotes,
    type: x.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: C.Footnotes,
    type: x.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: C.Footnotes,
    type: x.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: C.Footnotes,
    type: x.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: C.Footnotes,
    type: x.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: C.Footnotes,
    type: x.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: C.Footnotes,
    type: x.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: C.Footnotes,
    type: x.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: C.Footnotes,
    type: x.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: C.Footnotes,
    type: x.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: C.CrossReferences,
    type: x.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: C.CrossReferences,
    type: x.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: C.CrossReferences,
    type: x.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: C.CrossReferences,
    type: x.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: C.CrossReferences,
    type: x.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: C.CrossReferences,
    type: x.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: C.CrossReferences,
    type: x.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: C.CrossReferences,
    type: x.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: C.CrossReferences,
    type: x.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: C.CrossReferences,
    type: x.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: C.CrossReferences,
    type: x.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: C.SpecialText,
    type: x.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: C.SpecialText,
    type: x.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: C.SpecialText,
    type: x.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: C.SpecialText,
    type: x.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: C.SpecialText,
    type: x.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: C.SpecialText,
    type: x.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: C.SpecialText,
    type: x.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: C.SpecialText,
    type: x.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: C.SpecialText,
    type: x.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: C.SpecialText,
    type: x.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: C.SpecialText,
    type: x.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: C.SpecialText,
    type: x.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: C.SpecialText,
    type: x.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: C.SpecialText,
    type: x.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: C.SpecialText,
    type: x.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: C.CharacterStyling,
    type: x.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: C.Breaks,
    type: x.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, On = {
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
}, _d = {
  p: { children: On },
  q: { children: On },
  q1: { children: On },
  q2: { children: On },
  q3: { children: On },
  q4: { children: On },
  b: { children: On },
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
    category: C.SpecialFeatures,
    type: x.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: C.SpecialFeatures,
    type: x.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: C.SpecialFeatures,
    type: x.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: C.SpecialFeatures,
    type: x.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function Or(e) {
  const t = Object.hasOwn(Pc, e) ? Pc[e] : void 0, r = Object.hasOwn(_d, e) ? _d[e] : void 0;
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
const hh = "v", gh = "c", Rn = "fig", vd = "tr", Nc = "esb", mh = "esbe", Md = "periph", Ed = "alt", Ad = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, nx = {
  "": "start",
  c: "center",
  r: "end"
};
function Pd(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Nd(e) {
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
const ix = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function sx(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === vo && s + 1 < e.length && Nd(e[s + 1]) || (Nd(o) ? (r || (i = t.length, t += o), r = !0) : ix.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function ox(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function ax(e, t) {
  let r = t;
  for (; r < e.length; ) {
    const n = e[r];
    if (n === "\\" || n === "|")
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
const cx = /^(?:qt[1-5]?|ts)-[se]$/;
function Fl(e) {
  return cx.test(e) || dh(e);
}
function Va(e, t) {
  let r = t;
  for (; r < e.length && /[\s\u00A0\u200B]/.test(e[r]); )
    r++;
  const n = r;
  for (; r < e.length && !/[\s\u00A0\u200B\\]/.test(e[r]); )
    r++;
  const i = e.slice(n, r);
  for (; r < e.length && /[\s\u00A0\u200B]/.test(e[r]); )
    r++;
  return { word: i, next: r };
}
function lx(e, t, r) {
  const n = [];
  let i = 0, s;
  const o = (c) => {
    if (!c)
      return;
    const l = n[n.length - 1];
    l?.kind === "text" ? l.text += c : n.push({ kind: "text", text: c });
  }, a = (c) => {
    c.split("//").forEach((u, d) => {
      d > 0 && n.push({ kind: "optbreak" }), o(u);
    });
  };
  for (; i < e.length; ) {
    if (e[i] !== "\\") {
      const g = e.indexOf("\\", i), y = g === -1 ? e.length : g;
      a(sx(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = ax(e, i + 1);
    if (i = u, l === "") {
      o(e.slice(c, i));
      continue;
    }
    if (l === "*") {
      n.push({ kind: "end", marker: "" });
      continue;
    }
    if (l.endsWith("*")) {
      l.slice(0, -1) === s && (s = void 0), n.push({ kind: "end", marker: l.slice(0, -1) });
      continue;
    }
    const d = () => {
      for (; i < e.length && /[\s\u00A0\u200B]/.test(e[i]); )
        i++;
    };
    if (l === hh) {
      const { word: g, next: y } = Va(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === gh) {
      const { word: g, next: y } = Va(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === x.Note || h === void 0 && qe.isValidMarker(l)) {
      const { word: g, next: y } = Va(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === x.Milestone || h === void 0 && Fl(l)) {
      const g = yx(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    h === x.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : h === x.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Eo(p) ? (d(), Eo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Nc || l === mh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const wd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Eo(e) {
  return Object.hasOwn(wd, e) ? wd[e] : void 0;
}
function ux(e) {
  return Eo(e) !== void 0;
}
const dx = /([-\w]+)\s*=\s*"(.*?)"/g, fx = /[\s\u200B]*[\n\r][\s\u200B]*/g, yh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function aa(e) {
  return yh[e];
}
const px = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function hx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Cs(e, t, r = yh[t]) {
  const n = e.replace(fx, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(dx)];
  if (s.length > 0) {
    if (!hx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      px.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function ca(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function gx(e) {
  const t = Dr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function mx(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Cs(e.slice(n + 1, i), r, ca(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function yx(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Cs(s.slice(o + 1), r, ca(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = mx(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Mr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", U);
}
function ln(e) {
  return e.content || (e.content = []), e.content;
}
function Dr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? ln(u) : d ? ln(d) : r;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? ln(o[o.length - 1].object) : ln(s);
    if (o.length > 0)
      return ln(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: rr, content: [] }, f().push(i);
    }
    return ln(i);
  }, g = (ie) => {
    const w = h();
    typeof ie == "string" && typeof w[w.length - 1] == "string" ? w[w.length - 1] = w[w.length - 1] + ie : w.push(ie);
  }, y = (ie) => {
    for (let w = ie; w < o.length; w += 1) {
      const te = o[w].object;
      te.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, b = (ie) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, ie || (s.closed = "false"), s = void 0);
  }, T = () => {
    c = void 0, l = void 0;
  }, E = (ie, w, te) => {
    k();
    const [, oe, Te, ot] = te, gt = {
      type: "table:cell",
      marker: ot ? w.slice(0, w.indexOf("-")) : w,
      align: nx[oe],
      content: []
    };
    ot && (gt.colspan = String(Number(ot) + 1 - Number(Te))), ln(ie).push(gt), i = gt;
  }, S = (ie) => {
    u && (ie || (u.closed = "false"), u = void 0);
  }, O = () => {
    d = void 0;
  };
  let q, K = "", _;
  const W = () => {
    K && g(Mr(K)), K = "";
  }, J = (ie = !1) => {
    q?.type === "sidebar" ? K = "" : ie && K.endsWith(`
`) && (K = K.slice(0, -1)), q = void 0, W();
  }, pe = () => {
    if (!_)
      return;
    const ie = { type: "char", marker: _.marker, content: [] };
    _.value && (ie.content = [Mr(_.value)]), h().push(ie), o.push({ object: ie }), _ = void 0;
  }, D = (ie, w) => {
    p = !1, T(), k(), b(!1), i = { type: "para", marker: ie, content: [] }, w && (i.content = [Mr(w)]), f().push(i);
  }, G = () => {
    _ && (D(_.marker, _.value), _ = void 0);
  };
  let Y;
  const he = (ie) => {
    if (!Y)
      return;
    let { value: w } = Y;
    Y = void 0, ie && w.endsWith(`
`) && (w = w.slice(0, -1));
    const te = w.indexOf("|"), oe = te >= 0 ? Cs(w.slice(te + 1), Md) : void 0, Te = te >= 0 ? w.slice(0, te) : w, ot = te >= 0 && (!oe || !!Te && !!oe[Ed]), gt = ot ? void 0 : oe, re = ot ? w : Te, Ge = {
      type: "periph",
      ...re ? { [Ed]: Mr(re) } : {},
      ...gt
    };
    Ge.content = [], f().push(Ge), d = Ge, i = void 0;
  };
  let ke;
  const ze = () => {
    if (ke) {
      if (ke.shape === "para")
        D(Rn, ke.value);
      else {
        const ie = { type: "char", marker: Rn, content: [] };
        ke.value && (ie.content = [Mr(ke.value)]), h().push(ie), o.push({ object: ie });
      }
      ke = void 0;
    }
  }, Lt = lx(e, t?.getMarker ?? Or, n);
  for (let ie = 0; ie < Lt.length; ie++) {
    const w = Lt[ie];
    if (_) {
      if (w.kind === "text") {
        _.value += w.text;
        continue;
      }
      if (_.shape === "char" && w.kind === "end" && w.marker.replace(/^\+/, "") === _.marker) {
        if (_.value.trim() === "") {
          h().push({ type: "char", marker: _.marker, content: [] }), _ = void 0, J();
          continue;
        }
        Object.assign(_.target, {
          [_.attrName]: Mr(_.value.trim())
        });
        const te = _.marker;
        if (_ = void 0, te === "ca") {
          const oe = Lt[ie + 1];
          oe?.kind === "text" && /^[\s\u200B]*$/.test(oe.text) && ie++;
        }
        continue;
      }
      if (_.shape === "para" && (w.kind === "para" || w.kind === "chapter")) {
        const te = _.value.replace(/[\s\u200B]+$/, "");
        te === "" ? (D(_.marker), _ = void 0) : (Object.assign(_.target, { [_.attrName]: Mr(te) }), _ = void 0);
      } else {
        q = void 0, (w.kind === "para" || w.kind === "chapter") && _.value.endsWith(`
`) && (_.value = _.value.slice(0, -1)), _.shape === "para" ? G() : pe(), ie--;
        continue;
      }
    }
    if (Y) {
      if (w.kind === "text" || w.kind === "optbreak") {
        Y.value += w.kind === "text" ? w.text : "//";
        continue;
      }
      he(w.kind === "para" || w.kind === "chapter"), ie--;
      continue;
    }
    if (ke) {
      if (w.kind === "text" || w.kind === "optbreak") {
        ke.value += w.kind === "text" ? w.text : "//";
        continue;
      }
      if (w.kind === "end" && w.marker.replace(/^\+/, "") === Rn) {
        const te = ke.value.indexOf("|"), oe = te >= 0 ? Cs(ke.value.slice(te + 1), Rn) : void 0;
        if (oe) {
          const Te = {};
          for (const [re, Ge] of Object.entries(oe))
            Te[re === "src" ? "file" : re] = Ge;
          const ot = {
            type: "figure",
            marker: Rn,
            ...Te
          }, gt = ke.value.slice(0, te);
          gt && (ot.content = [Mr(gt)]), g(ot), ke = void 0;
          continue;
        }
      }
      ze(), ie--;
      continue;
    }
    if (q)
      if (w.kind === "text") {
        if (w.text.includes(`
`) && /^[\s\u200B]*$/.test(w.text)) {
          K += w.text;
          continue;
        }
        J();
      } else if (w.kind === "charOpen" || w.kind === "para") {
        const te = w.kind === "para" || !w.isNested ? Eo(w.marker) : void 0;
        if (te && te.targetTypes.includes(q.type)) {
          K = "", _ = {
            target: q,
            attrName: te.attrName,
            marker: w.marker,
            shape: te.shape,
            value: ""
          };
          continue;
        }
        J(w.kind === "para");
      } else
        J(w.kind === "chapter");
    if (!s && !n && (w.kind === "charOpen" && !w.isNested && w.marker === Rn || w.kind === "para" && w.marker === Rn)) {
      k(), ke = { shape: w.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (w.kind) {
      case "text": {
        let te = w.text;
        if (!s && te.endsWith(`
`)) {
          const oe = Lt[ie + 1];
          (oe === void 0 || oe.kind === "para" || oe.kind === "chapter") && (te = te.slice(0, -1));
        }
        te && g(Mr(te));
        break;
      }
      case "para": {
        const te = !s && !n;
        if (te && w.marker === vd) {
          k(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: vd, content: [] }, ln(c).push(l), i = l, p = !1;
          break;
        }
        if (te && l) {
          const oe = Ad.exec(w.marker);
          if (oe && Pd(oe)) {
            E(l, w.marker, oe);
            break;
          }
        }
        if (T(), !n && w.marker === Nc) {
          k(), b(!1), S(!1);
          const oe = {
            type: "sidebar",
            marker: Nc,
            content: []
          };
          f().push(oe), u = oe, i = void 0, q = u, p = !1;
          break;
        }
        if (w.marker === mh && u) {
          k(), b(!1), S(!0), i = void 0;
          break;
        }
        if (!n && w.marker === Md) {
          k(), b(!1), S(!1), O(), Y = { value: "" }, i = void 0, p = !1;
          break;
        }
        D(w.marker);
        break;
      }
      case "verse": {
        b(!1);
        const te = { type: "verse", marker: hh, number: w.number };
        g(te), q = te;
        break;
      }
      case "chapter": {
        k(), b(!1), T(), S(!1), O(), i = void 0;
        const te = {
          type: "chapter",
          marker: gh,
          number: w.number
        };
        r.push(te), q = te, p = !0;
        break;
      }
      case "note": {
        b(!1);
        const te = h();
        s = { type: "note", marker: w.marker, caller: w.caller, content: [] }, a = o.length, te.push(s), q = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !w.isNested) {
          const Te = Ad.exec(w.marker);
          if (Te && Pd(Te)) {
            E(l, w.marker, Te);
            break;
          }
        }
        if (!w.isNested) {
          const Te = s ? a : 0;
          y(Te), o.length = Te;
        }
        const te = h(), oe = { type: "char", marker: w.marker, content: [] };
        te.push(oe), o.push({ object: oe });
        break;
      }
      case "end": {
        const te = w.marker.replace(/^\+/, ""), oe = s ? a : 0, Te = o.findLastIndex((ot, gt) => gt >= oe && ot.object.marker === te);
        Te >= 0 ? (bx(o[Te].object), y(Te + 1), o.length = Te) : s && s.marker === te ? b(!0) : (y(oe), o.length = oe, g({ type: "unmatched", marker: `${w.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: w.marker, ...w.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (Y && he(!0), ke && ze(), _)
    if (_.shape === "para") {
      const ie = _.value.replace(/[\s\u200B]+$/, "");
      ie === "" ? D(_.marker) : Object.assign(_.target, { [_.attrName]: Mr(ie) }), _ = void 0;
    } else
      _.value.endsWith(`
`) && (_.value = _.value.slice(0, -1)), pe();
  k(), b(!1), S(!1);
  const ar = (ie) => {
    for (const w of ie)
      typeof w != "string" && w.content && (ar(w.content), w.content.length === 0 && delete w.content);
  };
  return ar(r), r;
}
function bx(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Cs(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Jn = na("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), bn = na("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), de = na("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Ur = "marker-trailing-space", bh = 1, kx = "marker", zl = na("isGutterMarker", {
  parse: (e) => e === !0
});
class Zr extends zs {
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
    return new Zr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Sx(t) ? {
        conversion: xx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Jr().updateFromJSON(t);
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
  createDOM() {
    const t = document.createElement("span");
    return t.setAttribute("data-text-type", this.__textType), t.classList.add(this.__textType), t.textContent = this.__text, t;
  }
  updateDOM(t, r) {
    return t.__text !== this.__text && (r.textContent = this.__text), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ni(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: bh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function xx(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Jr(t, r) };
}
function Jr(e, t) {
  return et(new Zr(e, t));
}
function Tx(e) {
  return Nt(Jr(kx, e), zl, !0);
}
function Cx(e) {
  return Kt(e) && ae(e, zl);
}
function Sx(e) {
  return e?.tagName === "span";
}
function Kt(e) {
  return e instanceof Zr;
}
function kh(e) {
  return e?.type === Zr.getType();
}
const hn = "internal-comment", _x = [hn], xh = Object.freeze({}), wc = Object.freeze({}), Oc = Object.freeze({}), Rc = Object.freeze({}), $c = Object.freeze({}), vx = 1, ki = /* @__PURE__ */ new Map(), ns = /* @__PURE__ */ new Map(), xi = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map();
class lt extends kr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = xh, r, n, i, s, o) {
    super(o), this.__typedIDs = fo(t), this.__typedOnClicks = Wa(r), this.__typedOnRemoves = Ha(n), this.__typedOnMouseEnters = Ga(i), this.__typedOnMouseLeaves = Ja(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = fo(t.__typedIDs), n = Wa(t.__typedOnClicks), i = Ha(t.__typedOnRemoves), s = Ga(t.__typedOnMouseEnters), o = Ja(t.__typedOnMouseLeaves);
    return new lt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return _x.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ss().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: vx
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      bi(n, $n(t.theme.typedMark, a)), c.length > 1 && bi(n, $n(t.theme.typedMarkOverlap, a));
      for (const l of c)
        bi(n, $n("annotationId", l));
    }
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = $n(n.theme.typedMark, s), d = $n(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && bi(r, u) : l === 0 && Ba(r, u), c === 1 ? l === 2 && bi(r, d) : l === 1 && Ba(r, d));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ba(r, $n("annotationId", h));
      for (const h of a)
        f.has(h) || bi(r, $n("annotationId", h));
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
    return Ee(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = fo(r.__typedIDs);
    r.__typedIDs = fo(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ao(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Wa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Ee(t) ? ki.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ha(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Ee(t) ? ns.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Ga(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Ee(t) ? xi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Ja(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Ee(t) ? Ti.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Ee(a))
      return;
    nt(t), nt(r);
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
    if (!Ee(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ao(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Ss(this.__typedIDs, this.getTypedOnClicks());
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
    if (!P(r) || n === "html")
      return !1;
    const i = r.anchor, s = r.focus, o = i.getNode(), a = s.getNode(), l = r.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const r = this.getWritable(), n = this.getTypedIDs();
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), ki.delete(r.getKey()), ns.delete(r.getKey()), xi.delete(r.getKey()), Ti.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = ki.get(this.getKey());
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
    const n = xi.get(this.getKey());
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
    const n = Ti.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === wc) {
      const t = ki.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      ki.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    ki.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    nt(t), nt(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = un(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = un(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === wc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Oc) {
      const t = ns.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      ns.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    ns.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    nt(t), nt(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = un(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = un(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Oc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Rc) {
      const t = xi.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      xi.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    xi.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    nt(t), nt(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = un(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = un(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Rc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === $c) {
      const t = Ti.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Ti.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Ti.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    nt(t), nt(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = un(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = un(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === $c) {
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
    s && (s(t, r, n, this.getTextContent()), this.removeOnRemoveFor(t, r));
  }
  dispatchRemovedIDs(t, r, n) {
    const i = Mx(t, r);
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
    for (; Ee(t) && Rd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Ee(r) && Rd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Ex(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ax(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Px(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Nx(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function fo(e = xh) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (nt(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      nt(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Wa(e) {
  if (!e || e === wc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    nt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      nt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ha(e) {
  if (!e || e === Oc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    nt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      nt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ga(e) {
  if (!e || e === Rc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    nt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      nt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ja(e) {
  if (!e || e === $c)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    nt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      nt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function un(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Od(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Mx(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Rd(e, t) {
  const r = Od(e), n = Od(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Ex(e, t) {
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
function Ax(e, t) {
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
function Px(e, t) {
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
function Nx(e, t) {
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
function $n(e, t) {
  return `${e}-${t}`;
}
function $d(e) {
  return `external-${e}`;
}
function Ss(e, t, r, n, i) {
  return et(new lt(e, t, r, n, i));
}
function Ee(e) {
  return e instanceof lt;
}
function Th(e) {
  return e?.type === lt.getType();
}
function Ao(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Ch(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let h, g;
  for (let y = 0; y < u; y++) {
    const k = a[y];
    if (L(g) && g.isParentOf(k))
      continue;
    const b = y === 0, T = y === u - 1;
    let E = null;
    if (M(k)) {
      const S = k.getTextContentSize(), O = b ? f : 0, q = T ? p : S;
      if (O === 0 && q === 0)
        continue;
      const K = k.splitText(O, q);
      E = K.length > 1 && (K.length === 3 || b && !T || q === S) ? K[1] : K[0];
    } else {
      if (Ee(k))
        continue;
      L(k) && k.isInline() && (E = k);
    }
    if (E !== null) {
      if (E && E.is(h))
        continue;
      const S = E.getParent();
      (S == null || !S.is(h)) && (g = void 0), h = S, g === void 0 && (g = Ss(), g.addID(t, r, n, i, s, o), E.insertBefore(g)), g.append(E);
    } else
      h = void 0, g = void 0;
  }
  t === hn && L(g) && (d ? g.selectStart() : g.selectEnd());
}
function wx(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Ee(n))
      return n.getTypedIDs()[t];
    if (M(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Ee(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Ox = ["type", "marker", "content"], qc = "unknown", Sh = 1, Rx = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ai extends kr {
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
    return new ai(r, n, i, s);
  }
  static importDOM() {
    return {
      [qc]: (t) => qx(t) ? {
        conversion: $x,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kl().updateFromJSON(t);
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
    return Rx.has(this.getTag());
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
    const t = document.createElement(qc);
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
      version: Sh
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
    const r = t ?? N();
    if (!r)
      return !1;
    if (ia(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function $x(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Kl(t, r) };
}
function Kl(e, t, r) {
  return et(new ai(e, t, r));
}
function qx(e) {
  return e?.tagName.toLowerCase() === qc;
}
function Se(e) {
  return e instanceof ai;
}
const _h = 1, Ix = "attribute-run";
function Ya(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class en extends kr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new en(r, n);
  }
  static importJSON(t) {
    return vh(t.runKind).updateFromJSON(t);
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
    t.classList.add(Ix);
    const r = Ya(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Ya(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Ya(this.__runKind);
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
      version: _h
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
function vh(e) {
  return et(new en(e));
}
function Be(e) {
  return e instanceof en;
}
const _s = "id", Mh = 1, Lx = [
  "type",
  "marker",
  "code",
  "content"
];
class Bt extends kr {
  __marker = _s;
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
    return new Bt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Eh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Gb(t);
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
      version: Mh
    };
  }
}
function Eh(e, t) {
  return et(new Bt(e, t));
}
function ve(e) {
  return e instanceof Bt;
}
function Bl(e) {
  return e?.type === Bt.getType();
}
const Po = "c", Ah = 1, Dx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ht extends kr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Po, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Ht(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Ph().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Mo, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Ah
    };
  }
}
function Ph(e, t, r, n, i) {
  return et(new Ht(e, t, r, n, i));
}
function De(e) {
  return e instanceof Ht;
}
function Ux(e) {
  return e?.type === Ht.getType();
}
const Nh = [
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
], wh = [
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
], Fx = [
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
  ...Nh,
  ...wh
], Oh = 1, zx = ["type", "marker", "content"];
class _e extends kr {
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
    return new _e(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Fx.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Nh.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && wh.includes(t);
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
    return _e.isValidFootnoteMarker(t) || _e.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Bx(t) ? {
        conversion: Kx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Yr().updateFromJSON(t);
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
    return qd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), qd(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Oh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Yr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function qd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Kx(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Yr(t) };
}
function Yr(e, t) {
  return et(new _e(e, t));
}
function Bx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return _e.isValidMarker(t) && e.classList.contains(_e.getType());
}
function z(e) {
  return e instanceof _e;
}
function jx(e) {
  return e?.type === _e.getType();
}
const Rh = 1, Vx = "c", $h = "span";
class Fr extends zs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Vx, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Fr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => qh(t) ? {
        conversion: Wx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return jl().updateFromJSON(t);
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
    const t = document.createElement($h);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Mo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Mo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? nr(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Rh
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
function Wx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: jl(t) };
}
function jl(e, t, r, n, i, s) {
  return et(new Fr(e, t, r, n, i, s));
}
function qh(e) {
  return e ? e.classList.contains(Mo) && e.tagName.toLowerCase() === $h : !1;
}
function Bs(e) {
  return e instanceof Fr;
}
function Hx(e) {
  return e?.type === Fr.getType();
}
const Ih = 1;
class kn extends El {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new kn(t.__key);
  }
  static importJSON(t) {
    return pr().updateFromJSON(t);
  }
  getMarker() {
    return rr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Ih
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = pr();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function pr() {
  return et(new kn());
}
function $r(e) {
  return e instanceof kn;
}
function la(e) {
  return e?.type === kn.getType();
}
const Gx = [
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
  rr,
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
], Lh = 1, Jx = ["type", "marker", "content"];
class dt extends El {
  __marker;
  __unknownAttributes;
  constructor(t = rr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new dt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Gx.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Yx,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return qi().updateFromJSON(t);
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
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Lh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = qi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Yx(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = qi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function qi(e, t) {
  return et(new dt(e, t));
}
function ue(e) {
  return e instanceof dt;
}
function Vl(e) {
  return e?.type === dt.getType();
}
const No = "v", Dh = 1, Xx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class xt extends Qe {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = No, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new xt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Uh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ec, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Dh
    };
  }
}
function Uh(e, t, r, n, i, s) {
  return et(new xt(e, t, r, n, i, s));
}
function Ke(e) {
  return e instanceof xt;
}
function Fh(e) {
  return e?.type === xt.getType();
}
const Qx = "​", Ii = Qx;
var Id;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Id || (Id = {}));
var Ld;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ld || (Ld = {}));
function Zx() {
  return Ae(Ii);
}
function eT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Ii, ""));
}
function js(e) {
  return e.length > 0 && e.includes(Ii) && e.replaceAll(Ii, "") === "";
}
function Vs(e) {
  return M(e) && js(e.getTextContent());
}
function zh(e) {
  return Ux(e) || Hx(e);
}
function Ze(e) {
  return De(e) || Bs(e);
}
function Kh(e, t) {
  return e.find((r) => Ze(r) && r.getNumber() === t.toString());
}
function tT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ze(r));
}
function Ic(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function rT(e) {
  if (!e)
    return;
  if (Ze(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Ze(t); )
    t = t.getPreviousSibling();
  if (t && Ze(t))
    return t;
}
function jt(e) {
  return Re(e, B) ?? void 0;
}
function nT(e) {
  return ve(e) || De(e) || z(e) || Bs(e) || $r(e) || rt(e) || ue(e) || B(e) || Ke(e) || Se(e);
}
function Wl(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Bh(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Pe(e) {
  return ut(e) || ve(e);
}
function ut(e) {
  return ue(e) || $r(e);
}
function iT(e) {
  return Vl(e) || la(e);
}
function wo(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Yn(e, t) {
  const r = ae(t, Jn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function sT(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? ik(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function oT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Li(e) {
  return e?.type === Qe.getType();
}
function aT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function cT(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function je(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function st(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function jh(e, t, r) {
  const n = je(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function nr(e, t) {
  let r = je(e);
  return t && (r += `${U}${t}`), r += " ", r;
}
function lT(e) {
  const t = e[Ks];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Vh(e) {
  return Hh(e) || Li(e) && lT(e) === "attribute" ? "" : Li(e) && e.text !== U ? e.text : jx(e) ? e.children.map((t) => Vh(t)).join("") : "";
}
function uT(e) {
  return e.map((r) => Vh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Vt(e) {
  return " " + e + U;
}
function Hl(e) {
  const t = [];
  for (const r of e) {
    if (!z(r))
      continue;
    const n = Wh(r);
    n !== sr && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Wh(e) {
  return R(e) || Tr(e) || M(e) && ae(e, de) === "attribute" ? "" : M(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => Wh(t)).join("") : "";
}
function Tr(e) {
  return Kt(e) && e.getTextType() === "marker";
}
function Ct(e) {
  return R(e) || Tr(e);
}
function Gl(e) {
  if (!e || !Ct(e))
    return !1;
  const t = e.getParent();
  return ve(t) && e.is(t.getFirstChild());
}
function Hh(e) {
  return Yl(e) || kh(e) && e.textType === "marker";
}
function Dd(e, t) {
  dT(e, t), e.setMarker(t);
}
function dT(e, t) {
  const r = e.getMarker(), n = je(r), i = je(r, !0), s = st(r), o = st(r, !0), a = _e.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Ct(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (R(c))
        c.setMarker(t);
      else if (Tr(c)) {
        const f = l.startsWith(je("", !0));
        c.setTextContent(u ? je(t, f) : st(t, f));
      }
    }
  });
}
function He(e, t = Jb) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ue(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Gh(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Jh(e) {
  if (!P(e))
    return Ud(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !M(t)))
    return t ?? void 0;
  try {
    return Ud(e) ?? t ?? void 0;
  } catch (n) {
    if (Gh(n))
      return t ?? void 0;
    throw n;
  }
}
function fT(e, t) {
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
function Jl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function pT(e) {
  return !!e && e.includes("-");
}
function Yh(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Ud(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Ws(e) {
  if (!e)
    return !1;
  if (ii(e) || R(e) || Tr(e) || Be(e) || Kt(e) && e.getTextType() === "attribute")
    return !0;
  if (M(e)) {
    const t = ae(e, de);
    if (t === Ur || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === U || js(r))
      return !0;
  }
  return !1;
}
function Hs() {
  const e = Ae(U);
  return Nt(e, de, Ur), e.setMode("token"), e;
}
function hT(e) {
  const t = e.getTextContent();
  t.startsWith(U) || e.setTextContent(U + t);
}
function zr(e) {
  return M(e) && ae(e, de) === Ur;
}
function Xh(e) {
  const t = e.getFirstChild();
  if (!Ct(t) || t === null || zr(t.getNextSibling()))
    return !1;
  const r = N();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Hi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Ws(s)) {
      if (Ee(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (M(s) && s.getType() === Qe.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function ua(e) {
  let t = e.getParent();
  for (; t && Ee(t); )
    t = t.getParent();
  return t;
}
function gT(e, t) {
  return Hi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function mT(e, t) {
  const r = ua(e);
  if (!r)
    return;
  const n = Hi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function yT(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments) {
    const i = n.node.getTextContentSize();
    if (t >= n.start && t < n.start + i)
      return [n.node, t - n.start];
  }
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, t - r.start];
}
function Qh(e, t) {
  const r = Hi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Ws(n))
    return Qh(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || wo(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || wo(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function bT(e, t) {
  if (t <= 0)
    return 0;
  const r = Hi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? kT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function kT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const xT = 1;
class Kr extends Qe {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Ln(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Kr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return yt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || Ln(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Ln(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Ln(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Ln(r.__marker, r.__markerSyntax, t), r;
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
      version: xT
    };
  }
}
function yt(e, t, r) {
  return et(new Kr(e, t, void 0, r));
}
function R(e) {
  return e instanceof Kr;
}
function Yl(e) {
  return e?.type === Kr.getType();
}
function tn(e) {
  return e.getTextContent() === Ln(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function TT(e) {
  e.setTextContent(Ln(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ln(e, t, r = !1) {
  return t === "closing" ? st(e, r) : t === "selfClosing" ? st("") : je(e, r);
}
const CT = /* @__PURE__ */ new Set(["closed"]);
function Pr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !CT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Zh(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function eg(e) {
  const t = Object.keys(e).filter((n) => !Qk.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function tg(e, t, r, n) {
  return Zh(
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
function gs(e) {
  return e.getChildren().find((t) => R(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function ST(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : gs(e) === void 0 && rg(e) === void 0;
}
function rg(e) {
  return e.getChildren().find((t) => M(t) && ae(t, de) === "attribute");
}
function vs(e, t) {
  return Gs(e.getNextSibling(), t);
}
const _T = /^[ \u00A0]+$/;
function Xl(e) {
  if (tn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = je(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && _T.test(r.slice(t.length));
}
function Gs(e, t) {
  let r, n, i, s;
  return Be(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), R(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Xl(e) && (r = e, e = e.getNextSibling()), M(e) && ae(e, de) === "attribute" && (n = e, e = e.getNextSibling()), R(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && tn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Xr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!R(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (M(n) && n.getTextContent() === Vt(e.getCaller()))
    return n;
}
function Ql(e) {
  const t = Xr(e);
  return t ? Gs(t.getNextSibling(), "cat") : {};
}
function da(e) {
  const t = e.getFirstChild();
  if (!(!M(t) || R(t)) && ae(t, de) !== "attribute")
    return t;
}
function ng(e) {
  const t = da(e);
  return t ? Gs(t.getNextSibling(), "ca") : {};
}
function ig(e) {
  const t = da(e);
  if (!t)
    return;
  const r = Gs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function sg(e) {
  const t = ig(e);
  return t ? Gs(t.getNextSibling(), "cp") : {};
}
function og(e) {
  const t = e.getParent();
  if (!z(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ke(n))
        return n;
      if (!(R(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || M(n) && ae(n, de) === "attribute" || z(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Be(n)))
        return;
    }
}
function fa(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Be(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), R(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Xl(s) && (t = s, s = s.getNextSibling()), M(s) && ae(s, de) === "attribute" && (r = s, s = s.getNextSibling()), R(s) && s.getMarkerSyntax() === "selfClosing" && tn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Zl(e) {
  return z(ua(e));
}
function eu(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Zl(t) : t.getChildren().some((i) => z(i) && i.getMarker() === r) ? !0 : void 0;
}
function vT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!R(t))
      return;
    const r = eu(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Gi(e) {
  return M(e) && e.getType() === Qe.getType() && ae(e, de) !== "attribute";
}
function pa(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !R(t) || !z(r) || !ag(t, r) || !Gi(e) ? 0 : e.getTextContent().startsWith(U) ? U.length : 0;
}
function ag(e, t) {
  return e.getMarkerSyntax() === "opening" && eu(e, t) !== void 0;
}
function tu(e, t) {
  if (!ag(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return R(r) ? eu(r, t) === !0 ? "spacer" : void 0 : Gi(r) ? r.getTextContent().startsWith(U) ? void 0 : "prefix" : "spacer";
}
function MT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (R(t) && tu(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function cg(e, t) {
  const r = N();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function lg(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!R(t))
      return;
    const r = tu(t, e);
    if (r !== void 0 && !cg(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        M(n) && n.setTextContent(U + n.getTextContent());
      } else
        t.insertAfter(Ae(U));
  });
}
function ug(e) {
  return e.isAttached() ? e.getChildren().some((t) => R(t) && tu(t, e) !== void 0 && cg(t, e)) : !1;
}
const ET = "file", AT = "src", PT = "colspan", NT = "category", wT = "alt", OT = "closed", RT = "false";
function $T(e) {
  return e[OT] !== RT;
}
function qT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === ET ? AT : t,
    r
  ]));
}
function dg(e, t) {
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
function fg(e, t, r) {
  const n = r ?? {}, i = $T(n);
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
        opening: `\\${dg(t, n[PT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Pr(qT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [NT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Pr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [wT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Pr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Pr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const $t = { wantsRun: !1, valueText: void 0 }, rn = {};
function Xa(e, t) {
  if (t === "va")
    return e;
  const r = vs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function ru(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (L(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function ha(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function IT(e) {
  return Be(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : R(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : M(e) && ae(e, de) === "attribute";
}
function LT(e) {
  if (R(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!M(e) || ae(e, de) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!R(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Qa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ke(t))
      return t;
    if (!IT(t))
      return;
  }
}
function Fd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ke(t),
    ownerOf: (t) => {
      if (Be(t))
        return t.getRunKind() === e ? Qa(t) : void 0;
      const r = t.getParent();
      return Be(r) ? r.getRunKind() === e ? Qa(r) : void 0 : LT(t) === e ? Qa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ke(t))
        return $t;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? $t : { wantsRun: !0, valueText: U + r };
    },
    scanPieces: (t) => Ke(t) ? vs(Xa(t, e), e) : rn,
    graceSite: (t, r) => Ke(t) ? !r.opener && !r.closer ? ru(Xa(t, e)) : ha(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ke(t) ? Xa(t, e) : void 0
    }
  };
}
const DT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => z(e),
  ownerOf: () => {
  },
  expectedPieces: () => $t,
  scanPieces: () => rn,
  graceSite: (e) => z(e) && ug(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, UT = {
  kind: "char",
  ownerPredicate: (e) => z(e),
  ownerOf: (e) => {
    if (!M(e) || ae(e, de) !== "attribute")
      return;
    const t = e.getParent();
    return z(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!z(e) || gs(e) === void 0)
      return $t;
    const t = Pr(e.getUnknownAttributes() ?? {}, aa(e.getMarker()));
    return t === "" ? $t : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => z(e) ? { value: rg(e) } : rn,
  graceSite: (e, t) => {
    if (!z(e) || t.value)
      return !1;
    const r = gs(e);
    if (!r)
      return !1;
    const n = N();
    if (!P(n) || !n.isCollapsed())
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
    insertRunBefore: (e) => z(e) ? gs(e) : void 0
  }
};
function pg(e) {
  if (R(e))
    return e.getMarker() === "cat";
  if (!M(e) || ae(e, de) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return R(t) && t.getMarker() === "cat";
}
function FT(e) {
  const t = e.getParent();
  if (!B(t))
    return;
  const r = Xr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!pg(n))
        return;
    }
}
const zT = {
  kind: "cat",
  ownerPredicate: (e) => B(e),
  ownerOf: (e) => {
    if (Be(e))
      return e.getRunKind() === "cat" && B(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Be(t) ? t.getRunKind() === "cat" && B(t.getParent()) ? t.getParent() ?? void 0 : void 0 : pg(e) ? FT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!B(e) || e.getIsCollapsed() !== !1)
      return $t;
    const t = e.getCategory();
    return t === void 0 ? $t : { wantsRun: !0, valueText: U + t };
  },
  scanPieces: (e) => B(e) ? Ql(e) : rn,
  graceSite: (e, t) => {
    if (!B(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Xr(e);
      return r !== void 0 && ru(r);
    }
    return ha(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => B(e) ? Xr(e) : void 0
  }
};
function KT(e) {
  return Be(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : R(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : M(e) && ae(e, de) === "attribute";
}
function BT(e) {
  if (R(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!M(e) || ae(e, de) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!R(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function jT(e) {
  const t = e.getParent();
  if (!De(t))
    return;
  const r = da(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!KT(n))
        return;
    }
}
function zd(e) {
  const t = (r) => De(r) ? e === "ca" ? da(r) : ig(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => De(r),
    ownerOf: (r) => {
      if (Be(r))
        return r.getRunKind() === e && De(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Be(n) ? n.getRunKind() === e && De(n.getParent()) ? n.getParent() ?? void 0 : void 0 : BT(r) === e ? jT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!De(r))
        return $t;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? $t : { wantsRun: !0, valueText: U + n };
    },
    scanPieces: (r) => De(r) ? e === "ca" ? ng(r) : sg(r) : rn,
    graceSite: (r, n) => {
      if (!De(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && ru(i);
      }
      return ha(n);
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
function hg(e) {
  if (R(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return M(e) && ae(e, de) === "attribute";
}
function VT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (rt(t)) {
      const r = R(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!hg(t))
      return;
  }
}
const WT = {
  kind: "milestone",
  ownerPredicate: (e) => rt(e),
  ownerOf: (e) => {
    const t = Be(e) ? e.getRunKind() === "milestone" ? e : void 0 : Be(e.getParent()) ? e.getParent() : hg(e) ? e : void 0;
    if (!t || Be(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Be(t) ? rt(r) ? r : void 0 : VT(t);
  },
  expectedPieces: (e) => {
    if (!rt(e))
      return $t;
    const t = tg(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Pr(t, ca(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : U + r };
  },
  scanPieces: (e) => {
    if (!rt(e))
      return rn;
    const { opening: t, attribute: r, closing: n, wrapper: i } = fa(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!rt(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = N();
      if (!P(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return ha(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => rt(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, HT = fg("optbreak", void 0, void 0).opening, GT = {
  kind: "optbreak",
  ownerPredicate: (e) => Se(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Se(t) || t.getTag() !== "optbreak"))
      return M(e) || Kt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: HT }),
  scanPieces: (e) => Se(e) ? { value: e.getFirstChild() ?? void 0 } : rn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, JT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Se(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => $t,
  scanPieces: () => rn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, YT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => z(e),
  ownerOf: () => {
  },
  expectedPieces: () => $t,
  scanPieces: () => rn,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ms = [
  DT,
  UT,
  Fd("va"),
  Fd("vp"),
  zT,
  zd("ca"),
  zd("cp"),
  WT,
  GT,
  JT,
  YT
], XT = new Map(Ms.map((e) => [e.kind, e]));
function Xn(e) {
  const t = XT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Qn(e) {
  for (const t of Ms) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function gg(e) {
  return Qn(e) !== void 0;
}
const Oo = "unmatched", mg = 2;
function ms(e) {
  return `\\${e}`;
}
class nn extends Qe {
  __marker;
  constructor(t = "", r) {
    super(ms(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new nn(r, n);
  }
  static importDOM() {
    return {
      [Oo]: (t) => ZT(t) ? {
        conversion: QT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return nu().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? ms(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ms(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Sd), r.title = Kd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Kd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Oo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Sd), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: mg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function yg(e) {
  return e.getTextContent() === ms(e.getMarker());
}
function Kd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function QT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: nu(t) };
}
function nu(e) {
  return et(new nn(e));
}
function ZT(e) {
  return e?.tagName.toLowerCase() === Oo;
}
function sn(e) {
  return e instanceof nn;
}
const bg = "table", Lc = "immutable-table", kg = 1, eC = ["type", "marker", "content"];
class ci extends kr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Lc;
  }
  static clone(t) {
    return new ci(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return tC().updateFromJSON(t);
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
      type: Lc,
      ...t !== void 0 && { unknownAttributes: t },
      version: kg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function tC(e) {
  return et(new ci(e));
}
function xg(e) {
  return e instanceof ci;
}
function rC(e) {
  return e?.type === Lc;
}
const Tg = "table:row", Bd = "immutable-table-row", Cg = 1, Dc = "tr", nC = ["type", "marker", "content"];
class Ji extends kr {
  __marker;
  __unknownAttributes;
  constructor(t = Dc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Bd;
  }
  static clone(t) {
    return new Ji(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return iC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Dc).setUnknownAttributes(t.unknownAttributes);
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
      type: Bd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Cg
    };
  }
}
function iC(e, t) {
  return et(new Ji(e, t));
}
const Sg = "table:cell", jd = "immutable-table-cell", _g = 1, Uc = "tc1", sC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function oC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Yi extends kr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Uc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return jd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Yi(r, n, i, s, o);
  }
  static importJSON(t) {
    return aC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Uc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = oC(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: jd,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: _g
    };
  }
}
function aC(e, t, r, n) {
  return et(new Yi(e, t, r, n));
}
function Js(e, t) {
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function or(e, t) {
  const r = Js(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Es(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function cC(e) {
  return e.getChildren().some((t) => R(t) && t.getMarkerSyntax() === "closing");
}
function lC(e) {
  return Es(e) ? void 0 : { closed: "false" };
}
function uC(e, t, r, n) {
  const i = t.getMarker(), s = Zl(t), o = cC(t);
  if (n) {
    e.append(yt(i, "opening", s));
    const [a] = r;
    Gi(a) && !a.getTextContent().startsWith(U) && a.setTextContent(U + a.getTextContent());
  }
  e.append(...r), o && e.append(yt(i, "closing", s));
}
function Zn(e) {
  return Re(e, z) ?? void 0;
}
function dC(e) {
  let t = e.getParent();
  for (; z(t); )
    t = t.getParent();
  return t;
}
function Fc(e) {
  const t = vg(e);
  return e.getChildren().every((r) => R(r) || t && ae(r, de) === "attribute" || M(r) && r.getTextContent().replaceAll(U, "") === "");
}
function vg(e) {
  return Es(e);
}
function fC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Pr(r, aa(e.getMarker())) : "";
  n !== "" && t.insertAfter(Ae(n)), e.remove();
}
function pC(e, t) {
  if (Es(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(yt(e.getMarker(), "closing", Zl(e)));
}
function hC(e, t) {
  return z(e) && !Es(e) && !Es(t);
}
function gC(e, t, r) {
  Fc(e) && e.getChildren().forEach((i) => {
    R(i) || i.remove();
  });
  const [n] = t;
  r && Gi(n) && !n.getTextContent().startsWith(U) && n.setTextContent(U + n.getTextContent()), e.append(...t);
}
function mC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = vg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = R(l) && l.getMarkerSyntax() === "closing", f = s && ae(l, de) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = hC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      gC(e, o, n);
    else {
      const l = Yr(t.getMarker(), lC(t));
      uC(l, t, o, n), e.insertAfter(l), Fc(l) ? l.remove() : c = l;
    }
  i && !a && pC(t, n), Fc(t) && fC(t, c);
}
function Di(e, t) {
  let r = e.getParent();
  for (; z(r); )
    mC(e, r, t), r = e.getParent();
}
function ga(e) {
  if (M(e) && !R(e)) {
    const t = pa(e);
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !R(r));
    if (t) {
      ga(t);
      return;
    }
    e.selectEnd();
  }
}
const Oi = /* @__PURE__ */ new WeakMap();
function yC(e, t) {
  return Oi.set(e, t), () => {
    Oi.get(e) === t && Oi.delete(e);
  };
}
function Vd(e) {
  return Oi.get(e);
}
function bC(e) {
  return Oi.get(gn())?.has(e.getKey()) ?? !1;
}
function kC(e) {
  Oi.get(gn())?.add(e.getKey());
}
function xC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function zc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Wd(e) {
  return /^\s/.test(e);
}
function iu(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Wd(t) || !Wd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function ma(e, t, r) {
  return r.wantsRun ? iu(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : xC(t);
}
function TC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return iu(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Mg(e, t) {
  return !zc(e.scanPieces(t));
}
function Ys(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!ma(e, n, r))
    return !1;
  const i = N();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || wo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function CC(e, t, r, n) {
  return !r.wantsRun || zc(n) || sk(Ts) ? !1 : gn().getEditorState().read(() => {
    const i = ne(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : zc(e.scanPieces(i));
  });
}
function SC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Hd(e) {
  const t = Ae(e);
  return Nt(t, de, "attribute"), t;
}
function _C(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = vh(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function vC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    M(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Hd(n.valueText));
    return;
  }
  const l = _C(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = yt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : M(d) ? iu(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Hd(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(yt(a === "selfClosing" ? "" : o(t), a));
}
function As(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (ma(e, i, n) && !bC(t)) {
    if (CC(e, t, n, i)) {
      kC(t);
      return;
    }
    if (!Ys(e, t)) {
      if (!n.wantsRun) {
        SC(i);
        return;
      }
      vC(e, t, i, n);
    }
  }
}
function MC(e, t, r) {
  As(e, t), t.isAttached() && Ys(e, t) && r.add(t.getKey());
}
function Xs(e) {
  if (!M(e))
    return !1;
  if (R(e) || Ke(e) || sn(e))
    return !0;
  const t = ae(e, de);
  return t === "attribute" || t === Ur;
}
function su(e, t) {
  return R(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && tn(e) && z(e.getParent())) : !1;
}
function EC() {
  const e = N();
  return P(e) ? su(e.focus.getNode(), e.focus.offset) : !1;
}
function Eg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return M(t) && Xs(t) ? t : void 0;
}
function AC(e) {
  const t = Eg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function PC(e) {
  const t = Eg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Gd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Jd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function NC(e, t) {
  let r = PC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!M(n))
      return;
    if (!Xs(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Yd(e, t) {
  const r = NC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function ou(e) {
  if (e.isCollapsed()) {
    const a = AC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Gd(r), Gd(n)], s = Yd(r, "next"), o = Yd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Jd(r, i[0]), Jd(n, i[1]), !1) : !0;
}
const Ro = "verse-block", Ag = 1, wC = "verse-block";
class Xi extends kr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Ro;
  }
  static clone(t) {
    return new Xi(t.__number, t.__key);
  }
  static importJSON(t) {
    return OC().updateFromJSON(t);
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
    return Yh(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(wC), Xd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Xd(r, this.__number), !1;
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
      type: Ro,
      number: this.getNumber(),
      version: Ag
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Xd(e, t) {
  const { start: r, end: n } = Yh(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Qd(e, "data-verse-start", i ? r : NaN), Qd(e, "data-verse-end", i ? n : NaN);
}
function Qd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function OC(e) {
  return et(new Xi(e));
}
function Ps(e) {
  return e instanceof Xi;
}
function RC(e) {
  return e?.type === Ro;
}
const $C = [
  Bt,
  Fr,
  Ht,
  xt,
  _e,
  qe,
  yr,
  Kr,
  ai,
  Zr,
  nn,
  dt,
  kn,
  ci,
  Ji,
  Yi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  en,
  {
    replace: El,
    with: () => pr(),
    withKlass: kn
  }
], $o = {
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
}, qC = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function IC(e) {
  if (!e)
    return Or;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: Or(r)?.category ?? C.Uncategorized,
      type: qC[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: Or(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Zd(e, t, r) {
  const n = {
    type: mr,
    version: gr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return la(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Pg = "v", Ng = 1, LC = "verse-selected";
class It extends zs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Pg, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new It(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => FC(t) ? {
        conversion: UC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return au().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ec, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ec, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? nr(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      vo + this.getNumber() + vo
    );
    return A(DC, { nodeKey: this.getKey(), text: t });
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
      version: Ng
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Gh(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function DC({ nodeKey: e, text: t }) {
  const [r] = Tk(e);
  return A("span", { className: r ? LC : void 0, children: t });
}
function UC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: au(t) };
}
function au(e, t, r, n, i, s) {
  return et(new It(e, t, r, n, i, s));
}
function FC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Pg;
}
function li(e) {
  return e instanceof It;
}
function zC(e) {
  return e?.type === It.getType();
}
function be(e) {
  return Ke(e) || li(e);
}
function wg(e) {
  return Fh(e) || zC(e);
}
function KC(e) {
  return BC(e).find((t) => ue(t));
}
function BC(e) {
  return e.some(Ps) ? e.flatMap((t) => Ps(t) ? t.getChildren() : t) : e;
}
function ya(e) {
  return L(e) ? Ps(e) ? e.getChildren().flatMap(ya) : e.getChildren() : [];
}
function jC(e, t) {
  return ya(e).find((i) => be(i) && Jl(t, i.getNumber()));
}
function VC(e, t) {
  return t === 0 ? KC(e) : e.map((r) => jC(r, t)).filter((r) => r)[0];
}
function qo(e) {
  return ya(e).find((r) => be(r));
}
function Og(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (be(i))
      return i;
  }
}
function WC(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (be(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ze(r); ) {
    const n = qo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Io(e) {
  return ya(e).findLast((t) => be(t));
}
function HC(e) {
  if (!Ke(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function GC(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function JC(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return GC(t, e, r);
  if (M(e)) {
    const n = HC(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Za(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function YC(e) {
  const t = Ic(e);
  if (!(!t || Ze(t)))
    return be(t) ? t : Io(t) ?? uu(t);
}
function XC(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return Za(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (JC(e, t)) {
    const i = YC(e);
    return i ? Za(i) : { verseNum: n };
  }
  return Za(e);
}
function QC(e) {
  return nT(e) || li(e);
}
function cu(e) {
  if (M(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(U) && e.setTextContent(`${t} `);
  }
}
function Rg(e) {
  if (M(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Kc(e, t) {
  return e.getEditorState().read(() => !ne(t));
}
function ZC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = lu(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && L(i) && L(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && L(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (be(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = ef(i);
      for (; s && !Ze(s); ) {
        const o = qo(s);
        if (o) {
          n = o;
          break;
        }
        s = ef(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = qo(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Ze(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function eS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = lu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = Og(i, r.getIndexWithinParent())), !n && i) {
      let o = tf(i);
      for (; o && !Ze(o); ) {
        const a = Io(o);
        if (a) {
          n = a;
          break;
        }
        o = tf(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ze(s); ) {
      const o = Io(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function ef(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function tf(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function lu(e, t) {
  if (L(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && be(n))
      return n;
    const i = Og(e, t.anchor.offset);
    if (i)
      return i;
    const s = qo(e);
    if (s)
      return s;
  }
  return uu(e);
}
function uu(e) {
  if (!e || Ze(e))
    return;
  if (be(e))
    return e;
  let t = Ic(e);
  for (; t; ) {
    if (Ze(t))
      return;
    if (be(t))
      return t;
    const r = Io(t);
    if (r)
      return r;
    t = Ic(t);
  }
}
const tS = ["style"], rS = ["style", "code"], Lo = ["style", "cid"], nS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], iS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], sS = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], oS = ["style", "caller", "category", "contents"], aS = ["tag", "marker", "contents"], cS = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Ns = `
`;
function lS(e, t) {
  const r = ne(e);
  if (!Wt(r))
    return;
  const n = du(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function du(e, t = "delta-doc") {
  if (!e)
    return;
  const r = oa();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Ui(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Ui(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Qr(l) || Wt(l))
        return n;
      Pe(l) && (a = l);
    }
    if (Pe(l) && (i.includes(l) || i.push(l)), $g(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += fu(l, t);
  }
  if (a)
    return n;
}
function rf(e, t, r = "delta-doc") {
  if (e.length < 2 || !fS(e[0]) || !dS(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => uS(n, r)?.getKey());
}
function uS(e, t = "delta-doc") {
  const r = oa();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Ui(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Ui(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Pe(a) && (i.includes(a) || i.push(a)), $g(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = fu(a, t);
    if (Qr(a) && l > 0 && e >= n && e < n + l || Wt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Ui(e, t) {
  return e ? t ? !wo(t.node, e.getKey()) : !0 : !1;
}
function Qr(e) {
  return M(e) && !Wt(e);
}
function Wt(e) {
  return Ze(e) || be(e) || rt(e) || B(e) || Se(e) || sn(e);
}
function fn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function dS(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && cS.includes(t);
}
function fS(e) {
  return e.retain != null && typeof e.retain == "number";
}
function $g(e, t) {
  return B(e) || Se(e) ? !0 : t === "apply" && L(e) && Wt(e);
}
function qg(e) {
  const t = e.getParent();
  return Ct(e) && ue(t) && t.getFirstChild() === e;
}
function Bc(e) {
  const t = e.getParent();
  return t !== null && Re(t, Be) !== null;
}
function pS(e) {
  const t = e.getParent();
  return z(t) && e.getTextContent() === sr && t.getChildrenSize() === 1;
}
function hS(e) {
  const t = e.getParent();
  if (!B(t))
    return !1;
  const r = e.getPreviousSibling();
  return R(r) && r === t.getFirstChild() && e.getTextContent() === Vt(t.getCaller());
}
function gS(e) {
  return !gg(e) && fu(e, "delta-doc") === e.getTextContentSize();
}
function fu(e, t) {
  if (Wt(e))
    return 1;
  if (M(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (Vs(e) || qg(e) || ae(e, de) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ae(e, de) === "attribute" || Bc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(ql) || pS(e) || hS(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function jc(e, t) {
  const r = { insert: e.__text }, n = ae(e, bn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Ig(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function nf(e) {
  const t = new ds();
  return e.isEmpty() || e.read(() => {
    const r = Fe();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && $r(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = mS();
    for (const s of i)
      t.push(s);
  }), t;
}
function ba(e, t) {
  const r = [], n = oi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...sf(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...sf(c, n.length, n, i, s, o, a));
  return r;
}
function mS() {
  return ba();
}
function sf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return yS(e, a, n), bS(e, a, i, s, o), kS(e, t, r, i, o, s, a), Ze(e) && a.push(SS(e)), be(e) && a.push(vS(e)), rt(e) && a.push(MS(e)), sn(e) && a.push(ES(e)), TS(e, a, s), xS(e, a, s), wS(c, s), a;
}
function yS(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ve(n) ? t.push(CS(n)) : ue(n) ? t.push(_S(n)) : $r(n) && t.push({ insert: Ns });
  }
  Pe(e) && (r.includes(e) || r.push(e));
}
function bS(e, t, r, n, i) {
  if (!M(e) || Ke(e) || sn(e))
    return;
  const s = e.getParent();
  if (B(s) && s.getFirstChild() === e)
    return;
  const o = jt(e) !== void 0;
  if (R(e) && (o || qg(e) || Bc(e) || gg(e)) || ae(e, de) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (js(a))
    return;
  const c = e.getPreviousSibling();
  if (B(s) && R(c) && c === s.getFirstChild() && a === Vt(s.getCaller()))
    return;
  const l = z(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(pa(e)));
  const u = a.startsWith(ql) || ae(e, de) === "attribute" || Bc(e), d = !!l && a === sr && l.getChildrenSize() === 1, f = ka(e, n), p = f ? r.filter((y) => f.children.includes(y)) : r, h = jc(e, p);
  if (h.insert = a, f) {
    if (!a || a === U || u)
      return;
    f.contentsOps?.push(h);
  } else
    d || u || t.push(h);
  const g = a !== "" && !d && !(u && l);
  if (r.length > 0 && g)
    for (const y of r)
      i.add(y);
}
function kS(e, t, r, n, i, s, o) {
  z(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Ui(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = PS(c), u = ka(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function xS(e, t, r) {
  if (!B(e))
    return;
  const n = AS(e), i = ka(e, r), s = {
    node: e,
    children: oi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function TS(e, t, r) {
  if (!Se(e))
    return;
  const n = NS(e), i = ka(e, r), s = {
    node: e,
    children: oi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function En(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function CS(e) {
  const t = { style: _s, code: e.__code };
  return En(t, e), { insert: Ns, attributes: { book: t } };
}
function SS(e) {
  const t = { style: Po, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), En(t, e), { insert: { chapter: t } };
}
function _S(e) {
  const t = { style: e.__marker };
  return En(t, e), { insert: Ns, attributes: { para: t } };
}
function vS(e) {
  const t = { style: No, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), En(t, e), { insert: { verse: t } };
}
function MS(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), En(t, e), { insert: { milestone: t } };
}
function ES(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function AS(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), En(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ae(e, bn);
  return n && (r.attributes = { segment: n }), r;
}
function PS(e) {
  const t = { insert: "" }, r = Ig([e]);
  return r && (t.attributes = { char: r }), t;
}
function NS(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), En(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function ka(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function wS(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Ui(t[r].node, e) && t.splice(r, 1);
}
function Ig(e) {
  if (e.length === 0)
    return;
  const t = e.map(OS);
  return t.length === 1 ? t[0] : t;
}
function OS(e) {
  const t = { style: e.__marker }, r = ae(e, Jn);
  return r && (t.cid = r), En(t, e), t;
}
function pu(e) {
  let t = 0;
  for (const { node: r } of oa())
    if (B(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function RS(e) {
  let t = 0;
  for (const { node: r } of oa())
    if (B(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const Lg = 1;
class hr extends zs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = xs, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new hr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => qS(t) ? {
        conversion: $S,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return hu().updateFromJSON(t);
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
    return r && ni(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => IS(t, n), (l) => LS(t, n, s, l), () => DS(t, n), () => US(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return A("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === xs && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === ah && i ? (
      // PT9: the hidden caller displays as `*` when collapsed
      "*"
    ) : this.__caller });
  }
  exportJSON() {
    return {
      type: this.getType(),
      caller: this.getCaller(),
      previewText: this.getPreviewText(),
      onClick: this.getOnClick(),
      version: Lg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function $S(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: hu(t, r) };
}
function hu(e, t, r) {
  return et(new hr(e, t, r));
}
function qS(e) {
  return e ? e.classList.contains(hr.getType()) : !1;
}
function bt(e) {
  return e instanceof hr;
}
function IS(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!B(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function LS(e, t, r, n) {
  e.update(() => {
    const i = ne(t);
    if (!B(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ne(r);
    if (!bt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function DS(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!B(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return ba(r);
  });
}
function US(e, t) {
  return e.getEditorState().read(() => pu(t));
}
const FS = [
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
], zS = ["†"];
function xa(e) {
  if (Dg())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = of(t), [s, o] = of(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = af(n, i), [s, o] = af(s, o);
  const a = mn();
  return a.anchor = fr(n.getKey(), i, cf(n)), a.focus = fr(s.getKey(), o, cf(s)), a;
}
function gu() {
  if (Dg())
    return;
  const e = N();
  if (!e || !P(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Do(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Do(i, s);
  return { start: n, end: o };
}
function of(e) {
  if (Yb(e)) {
    const t = Up(e.jsonPath);
    let r = Fe();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = Hi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : yT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, bT(r, e.offset)] : [void 0, void 0];
  }
  if (Xb(e) || Qb(e)) {
    const t = is(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (Zb(e)) {
    const t = is(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (ek(e)) {
    const t = is(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ec(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && M(n) ? [n, 0] : [void 0, void 0];
  }
  if (tk(e)) {
    const t = is(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ec(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && M(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (rk(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = is(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ec(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && M(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${nk(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function af(e, t) {
  if (!Tr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !L(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function cf(e) {
  return L(e) ? "element" : "text";
}
function ec(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (R(n) && n.getMarkerSyntax() === t || t === "closing" && R(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Tr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function is(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Up(r);
  let i = Fe();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = Hi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Do(e, t) {
  if (R(e)) {
    const r = e.getMarkerSyntax(), n = KS(e), i = n ? wn(qn(n)) : wn(qn(e));
    if (r === "closing" || r === "selfClosing")
      return {
        jsonPath: i,
        closingMarkerOffset: t
      };
    if (t === 0)
      return {
        jsonPath: i
      };
    const s = `${i}.marker`, o = Math.max(0, t - 1);
    return {
      jsonPath: s,
      propertyOffset: o
    };
  }
  if (Ee(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (M(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Do(n, s);
    }
    const i = ua(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Do(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (Tr(r)) {
      const i = r.getTextContent().endsWith("*"), s = wn(qn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Qh(e, t);
    return n.type === "text" ? {
      jsonPath: wn([...qn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: wn(qn(e)),
      offset: n.index
    };
  }
  if (M(e)) {
    const r = mT(e, t);
    if (r)
      return {
        jsonPath: wn([
          ...qn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: wn(qn(e)), offset: t };
}
function KS(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = BS(e);
  return r && !Pe(r) && !M(r) && !Ee(r) ? r : t;
}
function BS(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Ws(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function qn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = ua(r);
    if (!n)
      break;
    const i = gT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Dg() {
  for (let e = Fe().getFirstChild(); e; e = e.getNextSibling())
    if (Ps(e))
      return !0;
  return !1;
}
function jS(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Ug(e, t, r, n, i, s, o) {
  if (!qe.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? xa(r) : N();
  if (!P(a))
    return;
  const c = HS(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? jS(e, s), u = Fg(e, l, c, i, s, void 0, void 0);
  return WS(u, a, i), u;
}
function mu(e) {
  return e !== "expanded";
}
function VS(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!M(r) || !z(r.getParent()))
    return;
  if (R(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return R(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function WS(e, t, r) {
  const n = mu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || oT(t), ou(t);
  const i = VS(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(z)?.selectEnd();
}
function Ci(e, t, r) {
  const n = Yr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(yt(e)) : r?.markerMode === "visible" && n.append(Jr("marker", je(e)));
  const s = t === "" ? sr : i ? U + t : t;
  return n.append(Ae(s)), n;
}
function HS(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Ci("fr", f, n)), !e.isCollapsed()) {
        const p = uf(e);
        p.length > 0 && o.push(Ci("fq", p, n));
      }
      o.push(Ci("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Ci("xo", f, n)), !e.isCollapsed()) {
        const p = uf(e);
        p.length > 0 && o.push(Ci("xq", p, n));
      }
      o.push(Ci("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Fg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : mu(n?.noteMode), l = Ul(e, t, c);
  s && Nt(l, bn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = yt(e), u && d.setMode("token"), a || (f = yt(e, "closing"))) : n?.markerMode === "visible" && (d = Jr("marker", je(e) + " "), a || (f = Jr("marker", st(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    p = Ae(Vt(l.__caller)), u && p.setMode("token"), l.append(p, ...r);
  else {
    const h = () => Hs(), g = r.flatMap(t_(h));
    if (t === "")
      l.append(...g);
    else {
      const y = Hl(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = hu(l.__caller, y, k), l.append(p, h(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Er(e) {
  if (typeof e == "string") {
    const t = ne(e);
    return B(t) ? t : void 0;
  }
  return RS(e);
}
function Vc(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (li(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else {
    const n = e.getChildren(), i = n.slice().reverse().find(z);
    if (i)
      GS(i);
    else {
      const s = yu(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function yu(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return R(r) && r.getMarkerSyntax() === "closing" || Tr(r) && r.getTextContent() === st(e.getMarker()) ? t : -1;
}
function GS(e) {
  const t = yu(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  M(r) && !Ws(r) ? r.selectEnd() : e.select(t, t);
}
function zg(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (M(r) && !Xs(r)) {
    r.select(0, 0);
    return;
  }
  const n = e.getParent();
  if (!n)
    return;
  const i = e.getIndexWithinParent() + 1;
  n.canBeEmpty() ? n.select(i, i) : bu(n, i, { announce: !t });
}
function bu(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!B(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = mn();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Nr(i), r && gn().dispatchCommand(zt, void 0);
}
function lf(e, t, r) {
  const n = Xr(e), i = JS(e, n);
  if (r && Bg(i, t, r, Kg(e, n)))
    return !0;
  let s = Math.max(t, 0), o;
  for (const { node: c, isGlyph: l, dataStart: u } of i) {
    if (l)
      continue;
    const d = c.getTextContentSize() - u;
    if (s < d) {
      const f = u + s;
      return c.select(f, f), !0;
    }
    s -= d, o = c;
  }
  if (!o)
    return !1;
  const a = o.getTextContentSize();
  return o.select(a, a), !0;
}
function JS(e, t) {
  const r = [];
  for (const { node: n } of oi(e))
    !M(n) || Re(n, Be) || (ku(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: pa(n) }) : YS(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function YS(e, t) {
  return sn(e) ? !0 : R(e) && !t.is(e.getParent());
}
function Kg(e, t) {
  return (r) => {
    let n = r;
    for (; !n.getPreviousSibling(); ) {
      const o = n.getParent();
      if (!o || o.is(e))
        return;
      n = o;
    }
    const i = n.getPreviousSibling(), s = L(i) ? i.getLastDescendant() : i;
    if (M(s) && (t?.is(s) || ku(s, t)))
      return s;
  };
}
function Bg(e, t, r, n) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === r.index)
      return XS(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function XS(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function QS(e, t, r) {
  const { opener: n, value: i, closer: s } = Ql(e);
  if (!i)
    return !1;
  const o = ZS(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = Xr(e);
    if (Bg(c, t, r, Kg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function ZS(e) {
  return e.getTextContent().startsWith(U) ? U.length : 0;
}
function ku(e, t) {
  return !M(e) || Ws(e) || Xs(e) ? !1 : !t || !e.is(t);
}
function e_(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(z))
    return;
  const t = Xr(e);
  for (const { node: n } of oi(e))
    if (ku(n, t))
      return;
  const r = yu(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function t_(e) {
  return (t) => Kt(t) ? [t] : [t, e()];
}
function r_(e) {
  const t = e.getParent();
  return t !== null && Re(t, B) !== null;
}
function uf(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Al(e);
  let a = "";
  for (const c of t)
    if (!(B(c) || bt(c) || r_(c)) && !R(c) && !sn(c) && ae(c, de) !== "attribute") {
      if (be(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (M(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const xu = [
  hr,
  It,
  ...$C
], n_ = [
  Xi,
  ...xu
], i_ = Mn((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return A("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function s_() {
  const [e, t] = me(void 0), [r, n] = me(), i = Z(null), s = xe((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = wk(l, c, () => {
      Ok(l, c, {
        placement: "bottom-start",
        middleware: [Rk(), $k()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = xe(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function o_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = s_();
  return j(() => {
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
const a_ = jb(i_);
function jg({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = o_({ isOpen: e, floatingBoxRef: r }), s = Xe(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Un(
    A(a_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Vg = Lp(void 0);
function Tu() {
  const e = Dp(Vg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function c_(e, t) {
  const [r, n] = me(0), [i, s] = me(-1), o = Xe(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = xe(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = xe(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = xe(() => {
    const d = o.length;
    if (r >= 0 && r < d) {
      const f = o[r];
      t?.(f), s(r);
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
function l_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = c_(t, r);
  return A(Vg.Provider, { value: i, children: A("div", { ...n, children: e }) });
}
const Wg = Mn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Tu(), u = xe((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = xe((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return A("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function u_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = Tu(), o = Xe(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Xe(() => {
    const c = o(s);
    return t ? Vb.map(c, (l, u) => Wb(l) && l.type === Wg && l.props.index === void 0 ? Hb(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return j(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), A("div", { ref: n, role: "menu", ...r, children: a });
}
const d_ = (e, t, r) => ko(e, r).toLowerCase().includes(t.toLowerCase()), df = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", ko = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function f_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? df(r[0]) : "") : (u = n || (r.length > 0 ? df(r[0]) : ""), d = (h, g) => d_(h, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return d(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const y = (T) => (p.has(T) || p.set(T, ko(T, f).toLowerCase()), p.get(T) ?? ""), k = a ? ko(h, f) : y(h), b = a ? ko(g, f) : y(g);
    for (const T of c)
      switch (T) {
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
          const E = k.indexOf(l), S = b.indexOf(l);
          if (E !== -1 && S === -1)
            return -1;
          if (S !== -1 && E === -1)
            return 1;
          if (E !== -1 && S !== -1)
            return E - S;
          break;
        }
      }
    return k.localeCompare(b);
  });
}
const tc = {
  Root: l_,
  Options: u_,
  Option: Wg
};
function p_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Xe(() => f_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function h_() {
  const { moveUp: e, moveDown: t, select: r } = Tu();
  return Xe(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const g_ = () => {
  const e = h_(), [t] = le();
  j(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(xr, r, we);
  }, [t, e]);
};
function m_() {
  return g_(), null;
}
const y_ = ["Shift", "Control", "Alt", "Meta"];
function Hg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), u = s !== void 0, [d, f] = me(""), p = u ? s ?? "" : d, h = p_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(xr, (y) => {
    if (u || c?.includes(y.key) || y_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const b = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((T) => T.slice(0, -1));
      }
    }[y.key];
    return b ? (y.stopPropagation(), y.preventDefault(), b(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((T) => T + y.key), !0) : !1;
  }, we), [l, u, p, o, n, c]), Oe(tc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => g(y), children: [!u && A("input", { value: p, type: "text", disabled: !0 }), A(m_, {}), A(tc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((b, T) => Oe(tc.Option, { index: T, children: [A("span", { className: "label", children: b.label ?? b.name }), A("span", { className: "description", children: b.description })] }, b.name)) })] });
}
function b_({ trigger: e, items: t }) {
  const [r] = le(), [n, i] = me(!1), s = xe((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = N();
      if (P(l))
        return l;
    });
    a.read(() => {
      const l = N();
      !P(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && A(jg, { isOpen: n, children: ({ placement: o }) => A(Hg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function k_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Xe(() => {
    if (!t || !e)
      return;
    const i = Or(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = Or(o), { action: c } = r(o, a);
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
function ys(e, t) {
  return `${e}:${t}`;
}
function x_(e, t) {
  j(() => {
    if (!e.hasNodes([lt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return $e(Zp(e, lt, (n) => Ss(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], h = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, h, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(lt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ne(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Ee(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!lt.isReservedType(c))
              for (const u of l) {
                let d = t.get(ys(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(ys(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(ys(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const T_ = Mn(function({ logger: t }, r) {
  const [n] = le(), i = Xe(() => /* @__PURE__ */ new Map(), []);
  x_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(ys(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = ne(u);
        Ee(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Ao(d));
      }
  };
  return ra(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (lt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = xa(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Ch(p, a, c, l, u, d, f);
      }, { tag: Ac });
    },
    removeAnnotation(o, a) {
      if (lt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(ys(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ac });
    }
  })), null;
}), C_ = [];
function S_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = C_, onChange: n }) {
  const [i] = le();
  return Fs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Pl) && !u.has(lh) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = __(i, s);
        d.length !== 0 && n(o, i, u, d, l);
      });
  }, [i, e, t, r, n]), null;
}
function __(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new ds();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ne(i), o = s !== null && jt(s) !== void 0;
    if (t.size === 1 && M(s) && !o && gS(s)) {
      const a = du(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = ne(i);
          return new ds([M(d) ? jc(d) : { insert: "" }]);
        }), l = new ds([jc(s)]), u = new ds(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = nf(r), c = nf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const Cu = "formatted", Gg = "unformatted", Jg = "paragraph-structure", Su = "standard", Yg = "block-verse", v_ = {
  [Cu]: "Formatted",
  [Gg]: "Unformatted",
  [Jg]: "Paragraph Structure",
  [Su]: "Standard",
  [Yg]: "Block Verse"
};
function ui(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let _u, vu;
function M_(e) {
  const t = Mu(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  _u = e, vu = t;
}
M_(Cu);
const Ew = () => _u, Ta = () => vu;
function Mu(e) {
  let t;
  switch (e ?? _u) {
    case Cu:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Gg:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Jg:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Su:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Yg:
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
function Aw(e) {
  if (!e)
    return;
  const t = ff(e);
  return Object.keys(v_).find((r) => Xt(ff(Mu(r)), t));
}
const E_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function ff(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...E_, ...t };
}
function Qs(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function A_(e) {
  if (e)
    return ws(e) ? It : e.markerMode === "editable" ? xt : It;
}
function ws(e) {
  return e?.verseLayout === "block";
}
function P_(e) {
  const t = [], r = e ?? vu;
  return r && (t.push(`${Gk}${r.markerMode}`), r.hasSpacing && t.push(Wk), r.isFormattedFont && t.push(Hk)), t;
}
function N_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += w_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), R_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += $_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), I_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function w_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), O_(t, e.retain, e.attributes, r, n)), e.retain);
}
function O_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Fe();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Qr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, h = Math.min(s, p);
        if (h > 0) {
          let g = u;
          const y = f > 0, k = h < d - f;
          if (y && k) {
            const [, b] = u.splitText(f);
            [g] = b.splitText(h);
          } else y ? [, g] = u.splitText(f) : k && ([g] = u.splitText(h));
          if (xn(r)) {
            const b = g.getParent();
            if (z(b)) {
              const T = r.char;
              let E;
              Array.isArray(T) ? a >= 0 && a <= T.length - 1 && (E = T[a]) : a === 0 && (E = T);
              const S = E ? Yn(E, b) : !1;
              if (S && Array.isArray(T) && T.length > 1) {
                const O = Ae("");
                g.replace(O);
                const q = typeof r.segment == "string" ? r.segment : void 0, K = Qi(T.slice(1), n, g, q);
                let _ = O;
                for (const W of K)
                  _.insertAfter(W), _ = W;
                O.remove(), Qt(r, g);
              } else if (S)
                Qt(r, g);
              else {
                g.remove();
                const O = pf(g, r, n, i);
                if (O && O.length > 0) {
                  let q = b;
                  for (const K of O)
                    q.insertAfter(K), q = K;
                }
              }
            } else {
              const T = Ae("");
              g.replace(T);
              const E = pf(g, r, n, i);
              if (E && E.length > 0) {
                let S = T;
                for (const O of E)
                  S.insertAfter(O), S = O;
                T.remove();
              } else
                T.replace(g);
            }
          } else
            Qt(r, g);
          s -= h;
        }
      }
      o += d;
    } else if (Wt(u))
      e <= o && o < e + t && s > 0 && (hf(u, r), s -= 1), o += 1;
    else if (z(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (xn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Wc(u, p.style), typeof p.cid == "string" && Nt(u, Jn, () => p.cid);
            const h = He(p, Lo);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || V_(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Mc(u), !0;
        }
      }
      d && Mc(u), a -= 1;
    } else if (Pe(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!$r(u))
          hf(u, r);
        else if (Eu(r)) {
          const p = Zg(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (L(u)) {
      const d = u.getChildren();
      for (const f of d) {
        if (s <= 0)
          break;
        if (l(f) && s <= 0)
          return !0;
      }
    }
    return s <= 0;
  }
  l(c), s > 0 && i?.warn(`$applyAttributes: Not all characters in the retain operation (length ${t}) could be processed. Remaining: ${s}. targetIndex: ${e}, final currentIndex: ${o}`);
}
function pf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Qi(t.char, r, e, i), o = s.find(z);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Qt(t, e);
    return;
  }
  const a = {};
  nm.forEach((u) => {
    e.hasFormat(u) && (a[u] = "true");
  });
  const c = {};
  Object.entries(t).forEach(([u, d]) => {
    u === "segment" || u === "char" || (typeof d == "string" ? c[u] = d : d === !0 ? c[u] = "true" : d === !1 && (c[u] = "false"));
  });
  const l = {
    ...o.getUnknownAttributes() ?? {},
    ...a,
    ...c
  };
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Qt(t, e), s;
}
function Xg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  R(r) ? (r.setMarker(t), r.setTextContent(je(t))) : Kt(r) && r.getTextType() === "marker" && r.setTextContent(je(t) + U);
}
function Wc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    R(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = z(e.getParent()), i = e.getFirstChild();
  Kt(i) && i.getTextType() === "marker" && i.getTextContent() === je(r, n) && i.setTextContent(je(t, n));
  const s = e.getLastChild();
  Kt(s) && s.getTextType() === "marker" && s.getTextContent() === st(r, n) && s.setTextContent(st(t, n));
}
function hf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && z(e) && xn(t)) {
      const i = Hc(n);
      if (Wc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Nt(e, Jn, () => o);
      }
      const s = He(i, Lo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ze(e) || be(e) || rt(e) || B(e) || Se(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ve(e) || ue(e) || z(e)) && (r === "style" && ue(e) ? Xg(e, n) : r === "style" && z(e) ? Wc(e, n) : r === "code" && ve(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Nt(e, bn, () => n));
  }
}
function R_(e, t, r) {
  if (t <= 0)
    return;
  const n = Fe();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Qr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Wt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Pe(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Pe(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(pr(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && ut(p)) {
            let h = i + 1;
            const g = p.getChildren();
            for (const k of g) {
              if (s <= 0)
                break;
              const b = i;
              if (i = h, o(k)) {
                i = b;
                break;
              }
              Qr(k) ? h += k.getTextContentSize() : Wt(k) && (h += 1), i = b;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(pr(), !0);
        } else ue(a) ? a.replace(pr(), !0) : a.remove();
      }
      i += 1;
    } else if (L(a)) {
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
function $_(e, t, r, n, i) {
  if (t === Ns)
    return gf(e, r, n, i);
  if (t.endsWith(Ns) && !Eu(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (xn(r))
        throw new Error("Text + LF should not have char attributes");
      o += Uo(e, s, r, i);
    }
    return o += gf(e + o, r, n, i), o;
  } else return xn(r) ? q_(e, t, r, n, i) : Uo(e, t, r, i);
}
function q_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Ae(t === "" ? sr : t);
  Qt(r, s);
  let o;
  {
    let y = function(k) {
      if (Qr(k)) {
        const b = k.getTextContentSize();
        if (e >= g && e < g + b) {
          const T = k.getParent();
          return z(T) && (o = T), !0;
        }
        g += b;
      } else if (Wt(k))
        g += 1;
      else if (z(k)) {
        const b = k.getChildren();
        for (const T of b)
          if (y(T))
            return !0;
      } else if (L(k)) {
        const b = k.getChildren();
        for (const T of b)
          if (y(T))
            return !0;
        Pe(k) && (g += 1);
      }
      return !1;
    };
    const h = Fe();
    let g = 0;
    y(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Yn(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Yn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Qi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(z);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Uo(e, t, void 0, i);
  const f = {};
  for (const [h, g] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof g == "string" && (f[h] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const h of u)
    if (!Qg(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Uo(e, t, void 0, i));
}
function Uo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Fe();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Qr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = Ae(t);
        if (Qt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          z(f) && !xn(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Wt(c))
      s += 1;
    else if (z(c)) {
      if (!o && e === s) {
        const d = Ae(t);
        Qt(r, d);
        const f = c.getFirstChild();
        return f ? f.insertBefore(d) : c.append(d), n?.debug(`Inserted text "${t}" at beginning of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const u = c.getChildren();
      for (const d of u) {
        if (a(d))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const d = Ae(t);
        return Qt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Pe(c)) {
      if (!o && e === s) {
        const d = Ae(t);
        Qt(r, d);
        const f = c.getFirstChild();
        return f ? f.insertBefore(d) : c.append(d), n?.debug(`Inserted text "${t}" at beginning of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const u = c.getChildren();
      for (const d of u) {
        if (a(d))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const d = Ae(t);
        return Qt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (L(c)) {
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
    const c = Ae(t);
    Qt(r, c);
    const l = pr().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Qg(e, t, r) {
  const n = Fe();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(pr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (ut(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(pr().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Qr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Wt(l))
        i += 1;
      else if (z(l)) {
        if (o(l))
          return !0;
      } else if (Pe(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if ($r(u) && Pe(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(pr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      ut(a) ? $r(a) && ue(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ut(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (z(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ut(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function I_(e, t, r, n, i) {
  let s;
  return fn("chapter", t) ? s = D_(t.insert.chapter, r) : fn("verse", t) ? s = U_(t.insert.verse, r) : fn("ms", t) ? s = F_(t.insert.ms) : fn("note", t) ? s = em(t, r, n) : fn("unknown", t) ? s = tm(t, r, n, i) : fn("unmatched", t) && (s = K_(t.insert.unmatched, r)), s ? Qg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function gf(e, t, r, n) {
  let i;
  Eu(t) ? i = Zg(t.para, r) : j_(t) && (i = L_(t.book)), i ??= pr();
  const s = i, o = ue(s), a = $r(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Qr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ue(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? d.splitText(h) : [void 0];
          let y, k = g?.getPreviousSibling();
          for (; k; ) {
            const b = k;
            k = k.getPreviousSibling(), y ? y.insertBefore(b) : s.append(b), y = b;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Wt(d))
      c += 1;
    else if (Pe(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if ($r(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ue(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ue(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (L(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
    }
    return l;
  }
  return u(Fe()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function L_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== _s || !r || !Bt.isValidBookCode(r))
    return;
  const n = He(e, rS);
  return Eh(r, n);
}
function Zg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = He(e, tS), i = qi(r, n);
  if (!ui(t))
    return i;
  if (t.markerMode === "editable")
    i.append(yt(r), Hs());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = je(r) + U;
    i.append(t.hasGutterParaMarkers ? Tx(s) : Jr("marker", s));
  }
  return i;
}
function D_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = He(e, nS);
  let a;
  if (t.markerMode === "editable")
    a = Ph(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = jl(r, c, n, i, s, o);
  }
  return a;
}
function U_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = He(e, iS);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = nr(r, n);
    c = Uh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = au(n, l, i, s, o, a);
  }
  return c;
}
function F_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = He(e, sS);
  return fh(t, r, n, s, i);
}
function em(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = He(n.note, oS), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let d;
  u && typeof u == "string" && (d = u);
  const f = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (xn(h.attributes)) {
        const g = Qi(h.attributes.char, t, Ae(h.insert), void 0, rm(h.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...g);
      } else
        f.push(Ae(h.insert));
  return Fg(i, s, f, t, r, d, l).setCategory(o).setUnknownAttributes(c);
}
function tm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = He(i, aS), l = Kl(s, o, c), u = a?.ops ?? [];
  u.length > 0 && z_(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Nt(l, bn, () => d), l;
}
function z_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (xn(s.attributes)) {
        const o = Ae(s.insert), a = Qi(s.attributes.char, t, o, void 0, rm(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Ae(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (fn("unknown", s)) {
        const o = tm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (fn("note", s)) {
        const o = em(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function K_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = nu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function rm(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Hc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Qi(e, t, r, n, i, s = !1, o = !1) {
  M(r) && r.getTextContentSize() === 0 && r.setTextContent(sr);
  const a = () => {
    o && M(r) && r.getTextContent() !== sr && r.setTextContent(U + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Hc), l = c[0], u = i?.[i.length - 1];
    if (z(u) && Yn(l, u)) {
      if (c.length > 1) {
        const f = Qi(c.slice(1), t, r, void 0, void 0, !0, o);
        rc(u, f);
      } else
        r && rc(u, [r]);
      return [];
    }
    a();
    const d = c.reduceRight((f, p, h) => {
      const g = Yr(p.style, He(p, Lo));
      return typeof p.cid == "string" && Nt(g, Jn, () => p.cid), n && h === c.length - 1 && Nt(g, bn, () => n), f && (z(f) && (ic(f.getMarker(), f, t, !0), nc(f, f, t, !0)), g.append(f)), g;
    }, r);
    return ic(l.style, d, t, s), nc(d, d, t, s), [d];
  } else {
    const c = Hc(e), l = i?.[i.length - 1];
    if (z(l) && Yn(c, l))
      return r && rc(l, [r]), [];
    a();
    const u = Yr(c.style, He(c, Lo));
    return typeof c.cid == "string" && Nt(u, Jn, () => c.cid), n && Nt(u, bn, () => n), r && u.append(r), ic(c.style, u, t, s), nc(u, u, t, s), [u];
  }
}
function rc(e, t) {
  const r = e.getLastChild();
  R(r) && r.getMarkerSyntax() === "closing" || Kt(r) && r.getTextType() === "marker" && r.getTextContent() === st(e.getMarker(), z(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function nc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && B_(e.getMarker(), t, r, !1, n);
}
function ic(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = yt(e, "opening", n) : r?.markerMode === "visible" && (i = Jr("marker", je(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function B_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = yt("", "selfClosing") : s = yt(e, "closing", i) : r?.markerMode === "visible" && (s = Jr("marker", n ? st("") : st(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function j_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Eu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function xn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function V_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Qt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Nt(t, bn, () => n);
        continue;
      }
      if (W_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const nm = [
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
function W_(e) {
  return nm.includes(e);
}
function Fi(e) {
  return Kt(e) && ve(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function im(e) {
  const t = Js(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function Au(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(wl(r) && t.offset === 0 || ve(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Fi);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!ve(s))
    return !1;
  const o = im(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function xo(e) {
  const t = N();
  if (!P(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : M(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? Bh(t) : Wl(t);
    return Fi(n);
  }
  return Au(t) && t.isCollapsed();
}
function H_(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = Re(t.anchor.getNode(), ve);
  if (!r || !Fi(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return xo(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Fi)) {
    const n = im(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function po() {
  const e = N();
  return P(e) && Au(e), !1;
}
function G_() {
  const e = N();
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !ve(r) || !Fi(r.getFirstChild()) ? !1 : (or(r, 1), !0);
}
function J_(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => Tr(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function Y_() {
  const [e] = le();
  return j(() => e.registerCommand(sa, (t) => (X_(t), !1), Bn), [e]), j(() => $e(
    e.registerCommand(Ar, xo, we),
    e.registerCommand($i, xo, we),
    e.registerCommand(jn, xo, we),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(jn, H_, wr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(Vn, po, fe),
    e.registerCommand(Ft, po, fe),
    e.registerCommand(ir, po, fe),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Nl, po, fe)
  ), [e]), j(() => $e(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(zt, () => (G_(), !1), we),
    e.registerNodeTransform(Bt, J_)
  ), [e]), null;
}
function X_(e) {
  if (Q_(e.target))
    return;
  const t = N();
  P(t) && Z_(t);
}
function di(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Ct(t))
      r++, t = t.getNextSibling(), M(t) && t.getTextContent() === U && (r++, t = t.getNextSibling());
    else if (be(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (or(e, r), !0);
}
function Q_(e) {
  if (!zp(e))
    return !1;
  const t = Wi(e);
  if (!Cx(t))
    return !1;
  const r = t.getParent();
  return r ? ut(r) ? di(r) : (or(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function Z_(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ne(t.key);
  if (!Pe(r))
    return !1;
  const n = r.getFirstChild();
  return !Tr(n) && !li(n) ? !1 : di(r);
}
function ev() {
  const [e] = le();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !sm(r) || !Zs() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return $e(
      e.registerCommand(xr, t, we),
      e.registerCommand(Vn, t, we),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(Ft, t, fe),
      e.registerCommand(ir, t, fe),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Ol, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Wi(r.target);
        return !n || !Tn(n) ? !1 : (r.preventDefault(), !0);
      }, we),
      e.registerCommand(Ar, t, we),
      e.registerCommand($i, t, we),
      e.registerCommand(jn, t, we)
    );
  }, [e]), null;
}
function sm(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Tn(e) {
  return Re(e, Pu) ?? void 0;
}
function Pu(e) {
  return Se(e) || xg(e);
}
function Zs() {
  const e = N();
  return P(e) ? Tn(e.anchor.getNode()) !== void 0 || Tn(e.focus.getNode()) !== void 0 : !1;
}
function tv(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function rv(e, t) {
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
    for (const d of a) {
      const f = document.createRange();
      if (f.selectNode(d), o.compareBoundaryPoints(Range.START_TO_START, f) > 0)
        c = d;
      else {
        l = d;
        break;
      }
    }
    if (!c)
      return !1;
    const u = document.createRange();
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), tv(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function nv(e, t, r, n) {
  if (!yv(t) || rv(e, r))
    return !1;
  const i = r === "up" ? eS(t) : ZC(t);
  return i && n.preventDefault(), i;
}
function iv({ viewOptions: e }) {
  const [t] = le();
  return sv(t, e), null;
}
function sv(e, t) {
  j(() => {
    if (!e.hasNodes([Fr, It, qe]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = mf(o), d = fv(i, yf(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return nv(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = mf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return yf(a, n.key) ? l = !c && xf(i, "next") || !c && av(i) || gv(i) || !c && s && kf(i, "next") : ov(a, n.key) && (l = !c && xf(i, "previous") || !c && cv(i) || mv(i, t) || !c && s && kf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(xr, r, we);
  }, [e, t]);
}
function mf(e) {
  return e.dir || "ltr";
}
function yf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function ov(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Gc(e) {
  if (!z(e) || e.getMarker() !== "fp")
    return;
  const t = jt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function av(e) {
  const t = Gc(Wl(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (or(t, 0), !0);
}
function cv(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Gc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : bf(n);
  }
  if (t.offset === 0) {
    const n = Gc(r);
    return n ? bf(n) : !1;
  }
  return !1;
}
function bf(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (M(t))
    return t.select(), !0;
  if (L(t)) {
    const i = t.getLastDescendant();
    return M(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Fo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function lv(e) {
  if (Fo)
    for (const { segment: r } of Fo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function uv(e) {
  if (Fo) {
    let n = 0;
    for (const { index: i } of Fo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function om(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function am(e) {
  return !!e && R(e) && Tn(e) !== void 0;
}
function zi(e) {
  return M(e) && !e.isToken() && !am(e) && e.getTextContentSize() > 0;
}
function cm(e) {
  return ii(e) ? !0 : B(e) ? e.getIsCollapsed() === !0 : M(e) ? (e.isToken() || am(e)) && e.getTextContentSize() > 0 : si(e) ? !rt(e) : !1;
}
function Ki(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Ca(e, t, r) {
  for (let n = e; n; ) {
    if (cm(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Ki(n, t, r);
      continue;
    }
    if (zi(n))
      return n;
    n = Ki(n, t, r);
  }
}
function Nu(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Ki(e, n, i) : r === "text" && cm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Ki(e, n, i);
}
function sc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Nu(e.node, e.offset, e.kind, "previous", t), n = Ca(r, "previous", t);
  if (!n)
    return e;
  if (zi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function dv(e, t) {
  const r = e.getNode(), n = om(r);
  if (!n)
    return;
  if (e.type === "text" && zi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return sc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Nu(r, e.offset, e.type, t, n), s = Ca(i, t, n);
  if (!s)
    return;
  if (zi(s)) {
    const c = s.getTextContent(), l = t === "next" ? lv(c) : uv(c);
    return sc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return sc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function lm(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = dv(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && L(i.node) ? bu(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function kf(e, t) {
  return lm(e, t, "collapse");
}
function fv(e, t) {
  return lm(e, t, "extend");
}
function pv(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && zi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Nu(n, e.offset, e.type, t, r);
  return Ca(i, t, r) === void 0;
}
function hv(e, t) {
  const r = Fe();
  for (let n = e; n; ) {
    const i = Ki(n, t, r), s = i && Ca(i, t, r);
    if (!s)
      return;
    if (n = Tn(s), !n)
      return s;
  }
}
function xf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Tn(n))
    return !1;
  const i = om(n);
  if (!i || !pv(r, t, i))
    return !1;
  const s = Ki(i, t, Fe()), o = s && Tn(s);
  if (!o)
    return !1;
  const a = hv(o, t);
  if (!a)
    return !0;
  if (zi(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Tf(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  bu(t, r);
}
function gv(e) {
  const t = e.anchor.getNode(), r = Wl(e);
  if (B(r) && !R(r.getFirstChild())) {
    if (Pe(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(ut(i) && di(i)) && i.selectStart(), !0;
      }
    } else return Kt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Pe(t) && B(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Tf(r), !0;
  }
  const n = r?.getParent();
  if (Kt(r) && B(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Tf(n) : n.selectEnd(), !0;
  }
  return !1;
}
function mv(e, t) {
  const r = Bh(e);
  if (Bs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && Fi(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (ve(o) && !r)
    return !0;
  if (B(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!li(c) && !ve(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const u = r.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (Pe(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = Re(c, (u) => B(u));
    if (B(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const d = l.getIndexWithinParent();
      return u.select(d, d), !0;
    }
  }
  const a = jt(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (bt(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function yv(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return be(t) && si(t);
}
function bv() {
  const [e] = le();
  return kv(e), null;
}
function kv(e) {
  j(() => {
    if (!e.hasNodes([_e]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return $e(
      e.registerNodeTransform(_e, Cv),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(_e, vT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(_e, lg),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(_e, (t) => As(Xn("char"), t)),
      e.registerNodeTransform(Qe, Sv)
    );
  }, [e]);
}
function oc(e) {
  return e.getChildren().some(R);
}
function xv(e, t) {
  const r = t.getFirstChild();
  if (!R(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Gi(n)) {
    const i = n.getTextContent();
    i.startsWith(U) && (i === U ? n.remove() : n.setTextContent(i.slice(U.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function Tv(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  R(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function Cv(e) {
  if (!z(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (oc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ae(e, Jn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (z(i) && Yn({ style: t, cid: r }, i) && Xt(n, i.getUnknownAttributes()))
    if (oc(i)) {
      if (xv(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  z(s) && Yn({ style: t, cid: r }, s) && Xt(n, s.getUnknownAttributes()) && (oc(s) ? Tv(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function Sv(e) {
  const t = e.getParent();
  if (!z(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(sr)) {
    const n = N();
    if (P(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function um(e) {
  return e.replaceAll("	", " ");
}
function dm() {
  const e = N();
  return !!e && !e.isCollapsed();
}
function fm(e) {
  const t = () => !dm();
  return $e(e.registerCommand(Wn, t, Rt), e.registerCommand(ir, t, Rt));
}
const wu = (e) => {
  e.dispatchCommand(Wn, null);
}, Ou = (e) => {
  e.dispatchCommand(ir, null);
}, Ru = (e) => {
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
      n.setData(o, um(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Ft, s);
  });
}, $u = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", um(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Ft, i);
  });
};
function _v() {
  const [e] = le();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(yn ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), wu(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Ou(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? $u(e) : Ru(e)));
    };
    return $e(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      fm(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function vv({ logger: e }) {
  const [t] = le();
  return j(() => $e(
    // When the backslash or forward slash key is typed.
    t.registerCommand(xr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), wr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Ft, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, wr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Ol, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, wr)
  ), [t, e]), null;
}
const zo = "editor-context-menu";
function Jc(e) {
  return `${zo}-item-${e}`;
}
const Mv = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function Ev({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), A("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Jc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: A("span", { className: "text", children: i.title }) });
}
function Av({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return A("div", { className: "typeahead-popover", children: A("ul", { id: zo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => A(Ev, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let Pv = 0;
class ss {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${Pv++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function Nv({ options: e } = {}) {
  const [t] = le(), [r, n] = me(() => !t.isEditable()), [i, s] = me({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = me(void 0), c = Xe(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new ss("Cut", {
        onSelect: () => {
          Ou(t);
        },
        isDisabled: r
      }),
      new ss("Copy", {
        onSelect: () => {
          wu(t);
        }
      }),
      new ss("Paste", {
        onSelect: () => {
          Ru(t);
        },
        isDisabled: r
      }),
      new ss("Paste as Plain Text", {
        onSelect: () => {
          $u(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((h) => new ss(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = Z(null), u = Z(null), d = xe(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return j(() => fm(t), [t]), j(() => {
    const f = (p) => {
      const h = p.target;
      t.getRootElement() === h || qh(h) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, h) => {
      h?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), j(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const h = p.target;
      h instanceof Node && l.current?.contains(h) || d();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, d]), j(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      d();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, d]), j(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      if (p.isComposing || p.keyCode === 229)
        return;
      if (p.key === "Escape") {
        p.preventDefault(), d();
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
          }), d());
        } else {
          if (Mv.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, d, c, o, t]), j(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", zo), () => {
        f.removeAttribute("aria-controls"), f.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), j(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (!f)
      return;
    if (o === void 0) {
      f.removeAttribute("aria-activedescendant");
      return;
    }
    f.setAttribute("aria-activedescendant", Jc(o));
    const p = document.getElementById(zo), h = document.getElementById(Jc(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), y = h.getBoundingClientRect(), k = y.top - g.top + p.scrollTop, b = y.bottom - g.top + p.scrollTop;
    k < p.scrollTop ? p.scrollTop = k : b > p.scrollTop + p.clientHeight && (p.scrollTop = b - p.clientHeight);
  }, [t, i.isOpen, o]), j(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), Fs(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: h } = f.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), y = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    f.style.left = `${g}px`, f.style.top = `${y}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Mk.createPortal(A("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: A(Av, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), d());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function wv(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function Ov(e) {
  if (!ak(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function Rv(e) {
  return bt(e);
}
function ac(e, t, r) {
  const n = Wi(t.node);
  if (!si(n) || Rv(n))
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
function $v(e, t) {
  if (N())
    return !1;
  const r = e.getRootElement(), n = ok(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Kp(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = ac(e, c, Ov(c)), d = u;
  else {
    const y = wv(n.getRangeAt(0), c);
    u = ac(e, c, y ? "before" : "after"), d = ac(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, h = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = Bp(h, e);
  return g ? (Nr(g), g.dirty = !t, t) : !1;
}
function qv() {
  const [e] = le(), t = Z(!1), r = Z(!1);
  return j(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = N();
        P(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), j(() => e.registerCommand(zt, () => ($v(e, t.current) && (r.current = !0), !1), fe), [e]), null;
}
function Iv() {
  const [e] = le();
  return j(() => e.registerCommand(xr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(yn ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, fe), [e]), null;
}
function Lv({ isEditable: e }) {
  const [t] = le();
  return Fs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function pm(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Gr(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function cc(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = N();
    if (!P(i))
      return !1;
    const s = Bp(r, e);
    return !!s && i.is(s);
  }, { editor: e }) || r.removeAllRanges();
}
function Ei(e, t) {
  let r;
  try {
    r = gn();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function Cf(e) {
  return !!e && Vs(ne(e));
}
function qu(e) {
  const [t] = le(), r = Z(void 0), n = xe((i) => {
    const s = N(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Cf(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Js(u, d), p = Vs(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const h = Zx();
        i.insertAfter(h), r.current = h.getKey(), l = h.getKey();
      }
      or(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = ne(a);
      M(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = N(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Pt(wt), Gr(t, wt), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (js(c) || !c.includes(Ii))
        return;
      const l = N(), u = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (eT(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Ii).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = $e(t.registerCommand(zt, () => (i(), !1), Bn), t.registerCommand(Rl, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Cf(a);
      }), c && t.update(() => {
        const l = ne(a);
        M(l) && l.remove();
      }, { tag: wt }), r.current = void 0, !1;
    }, Bn), t.registerNodeTransform(Qe, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function Dv() {
  const e = N();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = B(r) ? r : r.getParent();
  if (!B(n))
    return;
  const i = e_(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && Vs(s); )
    s = s.getPreviousSibling();
  if (!s || M(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (r.is(n))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (r.is(s))
    return M(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = r.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function Uv() {
  return qu(Dv), null;
}
function Fv() {
  const e = N();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!be(i) || Js(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || be(s))
    return i;
}
function zv() {
  return qu(Fv), null;
}
function Iu(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Cn(e) {
  return e ? Pe(e) ? e : Re(e, (r) => Pe(r)) ?? void 0 : void 0;
}
function hm(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Cn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Sa(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !ia(e) ? !1 : e.getNodes().some((t) => be(t));
}
function gm(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Cn(r);
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
function mm(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Cn(r);
  if (!n)
    return !1;
  if (L(r)) {
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
function Sf(e, t) {
  return !!Yc(e, t);
}
function Yc(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && L(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return be(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return be(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return be(i) ? i : void 0;
}
function Ko(e, t) {
  if (!P(e))
    return !1;
  const r = Cn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Fn(e) {
  return Sa(e) || hm(e);
}
function Lu(e, t) {
  if (Sa(e) || hm(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return gm(e) && Ko(e, "backward") || Sf(e, "backward");
    case "deleteForward":
      return mm(e) && Ko(e, "forward") || Sf(e, "forward");
    case "insertText":
      return !1;
  }
}
function Kv(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Yc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (gm(e) && Ko(e, "backward")) {
        const n = Cn(e.anchor.getNode());
        if (ut(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Yc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (mm(e) && Ko(e, "forward")) {
        const i = Cn(e.anchor.getNode())?.getNextSibling();
        if (ut(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function _f(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return ia(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!P(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!P(e) || e.isCollapsed())
    return !1;
  const r = Cn(e.anchor.getNode()), n = Cn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Du(e) {
  if (M(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function Bv(e) {
  const t = e.getPreviousSibling();
  if (!Pe(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = Ct(n), s = e.getChildren().filter((o) => !zr(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? Du(r) : di(t) || t.selectStart();
}
function ym(e) {
  return be(e) || Ze(e) ? [] : ut(e) ? e.getChildren().flatMap(ym) : [e];
}
function jv(e) {
  const t = [];
  for (const r of e) {
    const n = ym(r);
    n.length !== 0 && (ut(r) && t.length > 0 && t.push(Ae(" ")), t.push(...n));
  }
  return t;
}
function Vv(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (wl(n)) {
    const a = n.getChildAtIndex(t === "backward" ? r.offset - 1 : r.offset);
    return Se(a) ? Mf(a, t, !0) : void 0;
  }
  const i = bm(n);
  if (!i || r.type === "text" && !(t === "backward" ? r.offset === 0 : r.offset === n.getTextContentSize()))
    return;
  let s = km(e, t, i);
  const o = [];
  for (; s; ) {
    if (Se(s))
      o.push(s);
    else if (!Jv(s))
      break;
    s = Os(s, t, i);
  }
  if (o.length > 0)
    return { nodes: t === "backward" ? o.reverse() : o, placement: "inline" };
  if (t === "backward")
    for (; s && Ct(s); )
      s = Os(s, t, i);
  if (!(s || !Pe(i)))
    return Mf(i, t, !1);
}
function To(e) {
  if (!P(e) || e.isCollapsed())
    return [];
  const t = [];
  for (const r of e.getNodes()) {
    const n = Yv(r);
    n && !t.some((i) => i.is(n)) && t.push(n);
  }
  return t;
}
function Wv(e, t) {
  if (!P(e) || !e.isCollapsed())
    return [];
  const r = bm(e.anchor.getNode());
  if (!r)
    return [];
  const n = [];
  let i = km(e, t, r);
  for (; i; )
    Se(i) && n.push(i), i = Os(i, t, r);
  return t === "backward" ? n.reverse() : n;
}
function vf(e, t) {
  const r = e.nodes[0], n = e.nodes[e.nodes.length - 1];
  if (e.placement === "inline")
    return t === "backward" ? Xv(r) : Qv(n), !0;
  if (t === "backward") {
    const s = r.getPreviousSibling();
    return Pe(s) ? (Du(s), !0) : !1;
  }
  const i = n.getNextSibling();
  return Pe(i) ? (di(i) || i.selectStart(), !0) : !1;
}
function Hv(e, t) {
  if (e.placement === "inline")
    return !0;
  const r = t === "backward" ? e.nodes[0].getPreviousSibling() : e.nodes[e.nodes.length - 1].getNextSibling();
  return Pe(r);
}
function Gv(e) {
  return e.map((t) => {
    const r = t.getMarker();
    return r ? { tag: t.getTag(), marker: r } : { tag: t.getTag() };
  });
}
function bm(e) {
  return Pe(e) || B(e) ? e : Re(e, (t) => Pe(t) || B(t)) ?? void 0;
}
function km(e, t, r) {
  const { anchor: n } = e, i = n.getNode();
  if (n.type === "text" || !L(i))
    return Os(i, t, r);
  const s = i.getChildAtIndex(t === "backward" ? n.offset - 1 : n.offset);
  return s ? Tm(s, t, r) : i.is(r) ? void 0 : Os(i, t, r);
}
function xm(e, t, r) {
  let n = e;
  for (; ; ) {
    const i = t === "backward" ? n.getPreviousSibling() : n.getNextSibling();
    if (i)
      return i;
    const s = n.getParent();
    if (!s || s.is(r))
      return;
    n = s;
  }
}
function Tm(e, t, r) {
  let n = e;
  for (; n; ) {
    if (Se(n) || B(n) || !L(n))
      return n;
    n = (t === "backward" ? n.getLastChild() : n.getFirstChild()) ?? xm(n, t, r);
  }
}
function Os(e, t, r) {
  const n = xm(e, t, r);
  return n ? Tm(n, t, r) : void 0;
}
function Mf(e, t, r) {
  const n = [];
  let i = r ? e : t === "backward" ? e.getPreviousSibling() : e.getNextSibling();
  for (; Se(i); )
    n.push(i), i = t === "backward" ? i.getPreviousSibling() : i.getNextSibling();
  if (n.length !== 0)
    return { nodes: t === "backward" ? n.reverse() : n, placement: "block" };
}
function Jv(e) {
  return M(e) && e.getTextContentSize() === 0;
}
function Yv(e) {
  let t = Se(e) ? e : void 0;
  for (const r of e.getParents())
    Se(r) && (t = r);
  return t;
}
function Xv(e) {
  const t = e.getPreviousSibling();
  if (M(t) && !t.isToken()) {
    const n = t.getTextContentSize();
    t.select(n, n);
    return;
  }
  const r = e.getIndexWithinParent();
  e.getParentOrThrow().select(r, r);
}
function Qv(e) {
  const t = e.getNextSibling();
  if (M(t) && !t.isToken()) {
    t.select(0, 0);
    return;
  }
  const r = e.getIndexWithinParent() + 1;
  e.getParentOrThrow().select(r, r);
}
function Ef(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zv(e) {
  if (Array.isArray(e)) return e;
}
function eM(e, t) {
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
function tM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rM(e, t) {
  return Zv(e) || eM(e, t) || nM(e, t) || tM();
}
function nM(e, t) {
  if (e) {
    if (typeof e == "string") return Ef(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ef(e, t) : void 0;
  }
}
const Cm = Object.entries, Af = Object.setPrototypeOf, iM = Object.isFrozen, sM = Object.getPrototypeOf, oM = Object.getOwnPropertyDescriptor;
let ft = Object.freeze, ht = Object.seal, Ai = Object.create, Sm = typeof Reflect < "u" && Reflect, Xc = Sm.apply, Qc = Sm.construct;
ft || (ft = function(t) {
  return t;
});
ht || (ht = function(t) {
  return t;
});
Xc || (Xc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Qc || (Qc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Si = it(Array.prototype.forEach), aM = it(Array.prototype.lastIndexOf), Pf = it(Array.prototype.pop), _i = it(Array.prototype.push), cM = it(Array.prototype.splice), pn = Array.isArray, fs = it(String.prototype.toLowerCase), lc = it(String.prototype.toString), Nf = it(String.prototype.match), os = it(String.prototype.replace), wf = it(String.prototype.indexOf), lM = it(String.prototype.trim), uM = it(Number.prototype.toString), dM = it(Boolean.prototype.toString), Of = typeof BigInt > "u" ? null : it(BigInt.prototype.toString), Rf = typeof Symbol > "u" ? null : it(Symbol.prototype.toString), ct = it(Object.prototype.hasOwnProperty), as = it(Object.prototype.toString), at = it(RegExp.prototype.test), In = fM(TypeError);
function it(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Xc(e, t, n);
  };
}
function fM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Qc(e, r);
  };
}
function ye(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fs;
  if (Af && Af(e, null), !pn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (iM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function pM(e) {
  for (let t = 0; t < e.length; t++)
    ct(e, t) || (e[t] = null);
  return e;
}
function mt(e) {
  const t = Ai(null);
  for (const n of Cm(e)) {
    var r = rM(n, 2);
    const i = r[0], s = r[1];
    ct(e, i) && (pn(s) ? t[i] = pM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = mt(s) : t[i] = s);
  }
  return t;
}
function hM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return uM(e);
    case "boolean":
      return dM(e);
    case "bigint":
      return Of ? Of(e) : "0";
    case "symbol":
      return Rf ? Rf(e) : "Symbol()";
    case "undefined":
      return as(e);
    case "function":
    case "object": {
      if (e === null)
        return as(e);
      const t = e, r = lr(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : as(n);
      }
      return as(e);
    }
    default:
      return as(e);
  }
}
function lr(e, t) {
  for (; e !== null; ) {
    const n = oM(e, t);
    if (n) {
      if (n.get)
        return it(n.get);
      if (typeof n.value == "function")
        return it(n.value);
    }
    e = sM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function gM(e) {
  try {
    return at(e, ""), !0;
  } catch {
    return !1;
  }
}
const $f = ft(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), uc = ft(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), dc = ft(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), mM = ft(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), fc = ft(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), yM = ft(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qf = ft(["#text"]), If = ft(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), pc = ft(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lf = ft(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ho = ft(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), bM = ht(/{{[\w\W]*|^[\w\W]*}}/g), kM = ht(/<%[\w\W]*|^[\w\W]*%>/g), xM = ht(/\${[\w\W]*/g), TM = ht(/^data-[\-\w.\u00B7-\uFFFF]+$/), CM = ht(/^aria-[\-\w]+$/), Df = ht(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), SM = ht(/^(?:\w+script|data):/i), _M = ht(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), vM = ht(/^html$/i), MM = ht(/^[a-z][.\w]*(-[.\w]+)+$/i), Uf = ht(/<[/\w!]/g), Ff = ht(/<[/\w]/g), EM = ht(/<\/no(script|embed|frames)/i), AM = ht(/\/>/i), Ut = {
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
}, PM = function() {
  return typeof window > "u" ? null : window;
}, NM = function(t, r) {
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
}, zf = function() {
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
}, dn = function(t, r, n, i) {
  return ct(t, r) && pn(t[r]) ? ye(i.base ? mt(i.base) : {}, t[r], i.transform) : n;
};
function _m() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : PM();
  const t = (V) => _m(V);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Ut.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = lr(f, "cloneNode"), h = lr(f, "remove"), g = lr(f, "nextSibling"), y = lr(f, "childNodes"), k = lr(f, "parentNode"), b = lr(f, "shadowRoot"), T = lr(f, "attributes"), E = o && o.prototype ? lr(o.prototype, "nodeType") : null, S = o && o.prototype ? lr(o.prototype, "nodeName") : null, O = o && o.prototype ? lr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const V = r.createElement("template");
    V.content && V.content.ownerDocument && (r = V.content.ownerDocument);
  }
  let q, K = "", _, W = !1, J = 0;
  const pe = function() {
    if (J > 0)
      throw In('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, D = function(m) {
    pe(), J++;
    try {
      return q.createHTML(m);
    } finally {
      J--;
    }
  }, G = function(m) {
    pe(), J++;
    try {
      return q.createScriptURL(m);
    } finally {
      J--;
    }
  }, Y = function() {
    return W || (_ = NM(d, i), W = !0), _;
  }, he = r, ke = he.implementation, ze = he.createNodeIterator, Lt = he.createDocumentFragment, ar = he.getElementsByTagName, ie = n.importNode;
  let w = zf();
  t.isSupported = typeof Cm == "function" && typeof k == "function" && ke && ke.createHTMLDocument !== void 0;
  const te = bM, oe = kM, Te = xM, ot = TM, gt = CM, re = SM, Ge = _M, $a = MM;
  let fi = Df, Me = null;
  const Je = ye({}, [...$f, ...uc, ...dc, ...fc, ...qf]);
  let ge = null;
  const _t = ye({}, [...If, ...pc, ...Lf, ...ho]);
  let Ie = Object.seal(Ai(null, {
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
  })), cr = null, eo = null;
  const Gt = Object.seal(Ai(null, {
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
  let Zi = !0, Br = !0, An = !1, to = !0, vt = !1, Jt = !0, Sr = !1, pi = !1, hi = null, Pn = null, $ = !1, I = !1, H = !1, X = !1, Ce = !0, tt = !1;
  const Le = "user-content-";
  let Ye = !0, Mt = !1, jr = {}, Dt = null;
  const Yt = ye({}, [
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
  let ro = null;
  const no = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let an = null;
  const cd = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), io = "http://www.w3.org/1998/Math/MathML", so = "http://www.w3.org/2000/svg", _r = "http://www.w3.org/1999/xhtml";
  let gi = _r, qa = !1, Ia = null;
  const Ab = ye({}, [io, so, _r], lc), ld = ft(["mi", "mo", "mn", "ms", "mtext"]);
  let La = ye({}, ld);
  const ud = ft(["annotation-xml"]);
  let Da = ye({}, ud);
  const Pb = ye({}, ["title", "style", "font", "a", "script"]);
  let es = null;
  const Nb = ["application/xhtml+xml", "text/html"], wb = "text/html";
  let Ve = null, mi = null;
  const Ob = r.createElement("form"), dd = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Ua = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (mi && mi === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = mt(m), es = // eslint-disable-next-line unicorn/prefer-includes
    Nb.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? wb : m.PARSER_MEDIA_TYPE, Ve = es === "application/xhtml+xml" ? lc : fs, Me = dn(m, "ALLOWED_TAGS", Je, {
      transform: Ve
    }), ge = dn(m, "ALLOWED_ATTR", _t, {
      transform: Ve
    }), Ia = dn(m, "ALLOWED_NAMESPACES", Ab, {
      transform: lc
    }), an = dn(m, "ADD_URI_SAFE_ATTR", cd, {
      transform: Ve,
      base: cd
    }), ro = dn(m, "ADD_DATA_URI_TAGS", no, {
      transform: Ve,
      base: no
    }), Dt = dn(m, "FORBID_CONTENTS", Yt, {
      transform: Ve
    }), cr = dn(m, "FORBID_TAGS", mt({}), {
      transform: Ve
    }), eo = dn(m, "FORBID_ATTR", mt({}), {
      transform: Ve
    }), jr = ct(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? mt(m.USE_PROFILES) : m.USE_PROFILES : !1, Zi = m.ALLOW_ARIA_ATTR !== !1, Br = m.ALLOW_DATA_ATTR !== !1, An = m.ALLOW_UNKNOWN_PROTOCOLS || !1, to = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, vt = m.SAFE_FOR_TEMPLATES || !1, Jt = m.SAFE_FOR_XML !== !1, Sr = m.WHOLE_DOCUMENT || !1, I = m.RETURN_DOM || !1, H = m.RETURN_DOM_FRAGMENT || !1, X = m.RETURN_TRUSTED_TYPE || !1, $ = m.FORCE_BODY || !1, Ce = m.SANITIZE_DOM !== !1, tt = m.SANITIZE_NAMED_PROPS || !1, Ye = m.KEEP_CONTENT !== !1, Mt = m.IN_PLACE || !1, fi = gM(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Df, gi = typeof m.NAMESPACE == "string" ? m.NAMESPACE : _r, La = ct(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? mt(m.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ld), Da = ct(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? mt(m.HTML_INTEGRATION_POINTS) : ye({}, ud);
    const v = ct(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? mt(m.CUSTOM_ELEMENT_HANDLING) : Ai(null);
    if (Ie = Ai(null), ct(v, "tagNameCheck") && dd(v.tagNameCheck) && (Ie.tagNameCheck = v.tagNameCheck), ct(v, "attributeNameCheck") && dd(v.attributeNameCheck) && (Ie.attributeNameCheck = v.attributeNameCheck), ct(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (Ie.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), ht(Ie), vt && (Br = !1), H && (I = !0), jr && (Me = ye({}, qf), ge = Ai(null), jr.html === !0 && (ye(Me, $f), ye(ge, If)), jr.svg === !0 && (ye(Me, uc), ye(ge, pc), ye(ge, ho)), jr.svgFilters === !0 && (ye(Me, dc), ye(ge, pc), ye(ge, ho)), jr.mathMl === !0 && (ye(Me, fc), ye(ge, Lf), ye(ge, ho))), Gt.tagCheck = null, Gt.attributeCheck = null, ct(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Gt.tagCheck = m.ADD_TAGS : pn(m.ADD_TAGS) && (Me === Je && (Me = mt(Me)), ye(Me, m.ADD_TAGS, Ve))), ct(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Gt.attributeCheck = m.ADD_ATTR : pn(m.ADD_ATTR) && (ge === _t && (ge = mt(ge)), ye(ge, m.ADD_ATTR, Ve))), ct(m, "ADD_URI_SAFE_ATTR") && pn(m.ADD_URI_SAFE_ATTR) && ye(an, m.ADD_URI_SAFE_ATTR, Ve), ct(m, "FORBID_CONTENTS") && pn(m.FORBID_CONTENTS) && (Dt === Yt && (Dt = mt(Dt)), ye(Dt, m.FORBID_CONTENTS, Ve)), ct(m, "ADD_FORBID_CONTENTS") && pn(m.ADD_FORBID_CONTENTS) && (Dt === Yt && (Dt = mt(Dt)), ye(Dt, m.ADD_FORBID_CONTENTS, Ve)), Ye && (Me["#text"] = !0), Sr && ye(Me, ["html", "head", "body"]), Me.table && (ye(Me, ["tbody"]), delete cr.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const F = q;
      q = m.TRUSTED_TYPES_POLICY;
      try {
        K = D("");
      } catch (Q) {
        throw q = F, Q;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (q = void 0, K = "") : (q === void 0 && (q = Y()), q && typeof K == "string" && (K = D("")));
    ft && ft(m), mi = m;
  }, fd = ye({}, [...uc, ...dc, ...mM]), pd = ye({}, [...fc, ...yM]), Rb = function(m, v, F) {
    return v.namespaceURI === _r ? m === "svg" : v.namespaceURI === io ? m === "svg" && (F === "annotation-xml" || La[F]) : !!fd[m];
  }, $b = function(m, v, F) {
    return v.namespaceURI === _r ? m === "math" : v.namespaceURI === so ? m === "math" && Da[F] : !!pd[m];
  }, qb = function(m, v, F) {
    return v.namespaceURI === so && !Da[F] || v.namespaceURI === io && !La[F] ? !1 : !pd[m] && (Pb[m] || !fd[m]);
  }, Ib = function(m) {
    let v = k(m);
    (!v || !v.tagName) && (v = {
      namespaceURI: gi,
      tagName: "template"
    });
    const F = fs(m.tagName), Q = fs(v.tagName);
    return Ia[m.namespaceURI] ? m.namespaceURI === so ? Rb(F, v, Q) : m.namespaceURI === io ? $b(F, v, Q) : m.namespaceURI === _r ? qb(F, v, Q) : !!(es === "application/xhtml+xml" && Ia[m.namespaceURI]) : !1;
  }, cn = function(m) {
    _i(t.removed, {
      element: m
    });
    try {
      k(m).removeChild(m);
    } catch {
      if (h(m), !k(m))
        throw In("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, oo = function(m) {
    ts(m);
    const v = y(m);
    if (v) {
      const Q = [];
      Si(v, (ee) => {
        _i(Q, ee);
      }), Si(Q, (ee) => {
        try {
          h(ee);
        } catch {
        }
      });
    }
    const F = T(m);
    if (F)
      for (let Q = F.length - 1; Q >= 0; --Q) {
        const ee = F[Q], ce = ee && ee.name;
        if (typeof ce == "string")
          try {
            m.removeAttribute(ce);
          } catch {
          }
      }
  }, Nn = function(m, v) {
    try {
      _i(t.removed, {
        attribute: v.getAttributeNode(m),
        from: v
      });
    } catch {
      _i(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(m), m === "is")
      if (I || H)
        try {
          cn(v);
        } catch {
        }
      else
        try {
          v.setAttribute(m, "");
        } catch {
        }
  }, Lb = function(m) {
    const v = T(m);
    if (v)
      for (let F = v.length - 1; F >= 0; --F) {
        const Q = v[F], ee = Q && Q.name;
        if (!(typeof ee != "string" || ge[Ve(ee)]))
          try {
            m.removeAttribute(ee);
          } catch {
          }
      }
  }, ts = function(m) {
    const v = [m];
    for (; v.length > 0; ) {
      const F = v.pop();
      (E ? E(F) : F.nodeType) === Ut.element && Lb(F);
      const ee = y(F);
      if (ee)
        for (let ce = ee.length - 1; ce >= 0; --ce)
          v.push(ee[ce]);
    }
  }, Db = function(m) {
    if (!Jt)
      return;
    const v = [m];
    for (; v.length > 0; ) {
      const F = v.pop(), Q = E ? E(F) : F.nodeType;
      if (Q === Ut.processingInstruction || Q === Ut.comment && at(Ff, F.data)) {
        try {
          h(F);
        } catch {
        }
        continue;
      }
      if (Q === Ut.element) {
        const ce = F, Ne = Ve(S ? S(F) : F.nodeName);
        try {
          ce.hasAttribute && ce.hasAttribute("patchsrc") && ce.removeAttribute("patchsrc"), ce.hasAttribute && ce.hasAttribute("for") && Ne !== "label" && Ne !== "output" && ce.removeAttribute("for");
        } catch {
        }
      }
      const ee = y(F);
      if (ee)
        for (let ce = ee.length - 1; ce >= 0; --ce)
          v.push(ee[ce]);
    }
  }, hd = function(m) {
    let v = null, F = null;
    if ($)
      m = "<remove></remove>" + m;
    else {
      const ce = Nf(m, /^[\r\n\t ]+/);
      F = ce && ce[0];
    }
    es === "application/xhtml+xml" && gi === _r && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const Q = q ? D(m) : m;
    if (gi === _r)
      try {
        v = new u().parseFromString(Q, es);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = ke.createDocument(gi, "template", null);
      try {
        v.documentElement.innerHTML = qa ? K : Q;
      } catch {
      }
    }
    const ee = v.body || v.documentElement;
    return m && F && ee.insertBefore(r.createTextNode(F), ee.childNodes[0] || null), gi === _r ? ar.call(v, Sr ? "html" : "body")[0] : Sr ? v.documentElement : ee;
  }, gd = function(m) {
    const v = O ? O(m) : m.ownerDocument;
    return ze.call(
      v || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ao = function(m) {
    return m = os(m, te, " "), m = os(m, oe, " "), m = os(m, Te, " "), m;
  }, Fa = function(m) {
    var v;
    m.normalize();
    const F = O ? O(m) : m.ownerDocument, Q = ze.call(
      F || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ee = Q.nextNode();
    for (; ee; )
      ee.data = ao(ee.data), ee = Q.nextNode();
    const ce = (v = m.querySelectorAll) === null || v === void 0 ? void 0 : v.call(m, "template");
    ce && Si(ce, (Ne) => {
      yi(Ne.content) && Fa(Ne.content);
    });
  }, co = function(m) {
    const v = S ? S(m) : null;
    return typeof v != "string" || Ve(v) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    m.attributes !== T(m) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    m.nodeType !== E(m) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    m.childNodes !== y(m);
  }, yi = function(m) {
    if (!E || typeof m != "object" || m === null)
      return !1;
    try {
      return E(m) === Ut.documentFragment;
    } catch {
      return !1;
    }
  }, rs = function(m) {
    if (!E || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof E(m) == "number";
    } catch {
      return !1;
    }
  };
  function vr(V, m, v) {
    V.length !== 0 && Si(V, (F) => {
      F.call(t, m, v, mi);
    });
  }
  const Ub = function(m, v) {
    return !!(Jt && m.hasChildNodes() && !rs(m.firstElementChild) && at(Uf, m.textContent) && at(Uf, m.innerHTML) || Jt && m.namespaceURI === _r && v === "style" && rs(m.firstElementChild) || m.nodeType === Ut.processingInstruction || Jt && m.nodeType === Ut.comment && at(Ff, m.data));
  }, Fb = function(m, v, F) {
    if (!cr[v] && kd(v) && (Ie.tagNameCheck instanceof RegExp && at(Ie.tagNameCheck, v) || Ie.tagNameCheck instanceof Function && Ie.tagNameCheck(v)))
      return !1;
    if (Ye && !Dt[v]) {
      const Q = k(m), ee = y(m);
      if (ee && Q) {
        const ce = ee.length;
        for (let Ne = ce - 1; Ne >= 0; --Ne) {
          const We = m === F ? p(ee[Ne], !0) : ee[Ne];
          Q.insertBefore(We, g(m));
        }
      }
    }
    return cn(m), !0;
  }, md = function(m, v, F, Q) {
    return m.length === 0 ? v : v === F || v === Q ? mt(v) : v;
  }, yd = function(m, v) {
    if (vr(w.beforeSanitizeElements, m, null), m !== v && k(m) === null)
      return Mt && ts(m), !0;
    if (co(m))
      return cn(m), !0;
    const F = Ve(S ? S(m) : m.nodeName);
    if (Me = md(w.uponSanitizeElement, Me, Je, hi), vr(w.uponSanitizeElement, m, {
      tagName: F,
      allowedTags: Me
    }), m !== v && k(m) === null)
      return Mt && ts(m), !0;
    if (Ub(m, F))
      return cn(m), !0;
    if (cr[F] || !(Gt.tagCheck instanceof Function && Gt.tagCheck(F)) && !Me[F]) {
      const ee = Fb(m, F, v);
      return ee === !1 && vr(w.afterSanitizeElements, m, null), ee;
    }
    if ((E ? E(m) : m.nodeType) === Ut.element && !Ib(m) || (F === "noscript" || F === "noembed" || F === "noframes") && at(EM, m.innerHTML))
      return cn(m), !0;
    if (vt && m.nodeType === Ut.text) {
      const ee = ao(m.textContent);
      m.textContent !== ee && (_i(t.removed, {
        element: m.cloneNode()
      }), m.textContent = ee);
    }
    return vr(w.afterSanitizeElements, m, null), !1;
  }, bd = function(m, v, F) {
    if (eo[v] || Jt && v === "patchsrc" || Jt && v === "for" && m !== "label" && m !== "output" || Ce && (v === "id" || v === "name") && (F in r || F in Ob))
      return !1;
    const Q = ge[v] || Gt.attributeCheck instanceof Function && Gt.attributeCheck(v, m);
    if (!(Br && at(ot, v))) {
      if (!(Zi && at(gt, v))) {
        if (Q) {
          if (!an[v]) {
            if (!at(fi, os(F, Ge, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && m !== "script" && wf(F, "data:") === 0 && ro[m])) {
                if (!(An && !at(re, os(F, Ge, "")))) {
                  if (F)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(kd(m) && (Ie.tagNameCheck instanceof RegExp && at(Ie.tagNameCheck, m) || Ie.tagNameCheck instanceof Function && Ie.tagNameCheck(m)) && (Ie.attributeNameCheck instanceof RegExp && at(Ie.attributeNameCheck, v) || Ie.attributeNameCheck instanceof Function && Ie.attributeNameCheck(v, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && Ie.allowCustomizedBuiltInElements && (Ie.tagNameCheck instanceof RegExp && at(Ie.tagNameCheck, F) || Ie.tagNameCheck instanceof Function && Ie.tagNameCheck(F)))
        ) return !1;
      }
    }
    return !0;
  }, zb = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), kd = function(m) {
    return !zb[fs(m)] && at($a, m);
  }, Kb = function(m, v, F, Q) {
    if (q && typeof d == "object" && typeof d.getAttributeType == "function" && !F)
      switch (d.getAttributeType(m, v)) {
        case "TrustedHTML":
          return D(Q);
        case "TrustedScriptURL":
          return G(Q);
      }
    return Q;
  }, Bb = function(m, v, F, Q) {
    try {
      F ? m.setAttributeNS(F, v, Q) : m.setAttribute(v, Q), co(m) ? cn(m) : Pf(t.removed);
    } catch {
      Nn(v, m);
    }
  }, xd = function(m) {
    vr(w.beforeSanitizeAttributes, m, null);
    const v = m.attributes;
    if (!v || co(m))
      return;
    ge = md(w.uponSanitizeAttribute, ge, _t, Pn);
    const F = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ge,
      forceKeepAttr: void 0
    };
    let Q = v.length;
    const ee = Ve(m.nodeName);
    for (; Q--; ) {
      const ce = v[Q], Ne = ce.name, We = ce.namespaceURI, Et = ce.value, At = Ve(Ne), Ka = Et;
      let kt = Ne === "value" ? Ka : lM(Ka);
      if (F.attrName = At, F.attrValue = kt, F.keepAttr = !0, F.forceKeepAttr = void 0, vr(w.uponSanitizeAttribute, m, F), kt = F.attrValue, tt && (At === "id" || At === "name") && wf(kt, Le) !== 0 && (Nn(Ne, m), kt = Le + kt), Jt && at(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, kt)) {
        Nn(Ne, m);
        continue;
      }
      if (At === "attributename" && Nf(kt, "href")) {
        Nn(Ne, m);
        continue;
      }
      if (!F.forceKeepAttr) {
        if (!F.keepAttr) {
          Nn(Ne, m);
          continue;
        }
        if (!to && at(AM, kt)) {
          Nn(Ne, m);
          continue;
        }
        if (vt && (kt = ao(kt)), !bd(ee, At, kt)) {
          Nn(Ne, m);
          continue;
        }
        kt = Kb(ee, At, We, kt), kt !== Ka && Bb(m, Ne, We, kt);
      }
    }
    vr(w.afterSanitizeAttributes, m, null);
  }, lo = function(m) {
    let v = null;
    const F = gd(m);
    for (vr(w.beforeSanitizeShadowDOM, m, null); v = F.nextNode(); )
      if (vr(w.uponSanitizeShadowNode, v, null), yd(v, m), xd(v), yi(v.content) && lo(v.content), (E ? E(v) : v.nodeType) === Ut.element) {
        const ee = b(v);
        yi(ee) && (za(ee), lo(ee));
      }
    vr(w.afterSanitizeShadowDOM, m, null);
  }, za = function(m) {
    const v = [{
      node: m,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const F = v.pop();
      if (F.shadow) {
        lo(F.shadow);
        continue;
      }
      const Q = F.node, ce = (E ? E(Q) : Q.nodeType) === Ut.element, Ne = y(Q);
      if (Ne)
        for (let We = Ne.length - 1; We >= 0; --We)
          v.push({
            node: Ne[We],
            shadow: null
          });
      if (ce) {
        const We = S ? S(Q) : null;
        if (typeof We == "string" && Ve(We) === "template") {
          const Et = Q.content;
          yi(Et) && v.push({
            node: Et,
            shadow: null
          });
        }
      }
      if (ce) {
        const We = b(Q);
        yi(We) && v.push({
          node: null,
          shadow: We
        }, {
          node: We,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(V) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, F = null, Q = null, ee = null;
    if (qa = !V, qa && (V = "<!-->"), typeof V != "string" && !rs(V) && (V = hM(V), typeof V != "string"))
      throw In("dirty is not a string, aborting");
    if (!t.isSupported)
      return V;
    pi ? (Me = hi, ge = Pn) : Ua(m), (w.uponSanitizeElement.length > 0 || w.uponSanitizeAttribute.length > 0) && (Me = mt(Me)), w.uponSanitizeAttribute.length > 0 && (ge = mt(ge)), t.removed = [];
    const ce = Mt && typeof V != "string" && rs(V);
    if (ce) {
      Db(V);
      const Et = S ? S(V) : V.nodeName;
      if (typeof Et == "string") {
        const At = Ve(Et);
        if (!Me[At] || cr[At])
          throw oo(V), In("root node is forbidden and cannot be sanitized in-place");
      }
      if (co(V))
        throw oo(V), In("root node is clobbered and cannot be sanitized in-place");
      try {
        za(V);
      } catch (At) {
        throw oo(V), At;
      }
    } else if (rs(V))
      v = hd("<!---->"), F = v.ownerDocument.importNode(V, !0), F.nodeType === Ut.element && F.nodeName === "BODY" || F.nodeName === "HTML" ? v = F : v.appendChild(F), za(F);
    else {
      if (!I && !vt && !Sr && // eslint-disable-next-line unicorn/prefer-includes
      V.indexOf("<") === -1)
        return q && X ? D(V) : V;
      if (v = hd(V), !v)
        return I ? null : X ? K : "";
    }
    v && $ && cn(v.firstChild);
    const Ne = ce ? V : v;
    try {
      const Et = gd(Ne);
      for (; Q = Et.nextNode(); )
        yd(Q, Ne), xd(Q), yi(Q.content) && lo(Q.content);
    } catch (Et) {
      throw ce && (oo(V), Si(t.removed, (At) => {
        At.element && ts(At.element);
      })), Et;
    }
    if (ce)
      return Si(t.removed, (Et) => {
        Et.element && ts(Et.element);
      }), vt && Fa(V), V;
    if (I) {
      if (vt && Fa(v), H)
        for (ee = Lt.call(v.ownerDocument); v.firstChild; )
          ee.appendChild(v.firstChild);
      else
        ee = v;
      return (ge.shadowroot || ge.shadowrootmode) && (ee = ie.call(n, ee, !0)), ee;
    }
    let We = Sr ? v.outerHTML : v.innerHTML;
    return Sr && Me["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && at(vM, v.ownerDocument.doctype.name) && (We = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + We), vt && (We = ao(We)), q && X ? D(We) : We;
  }, t.setConfig = function() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ua(V), pi = !0, hi = Me, Pn = ge;
  }, t.clearConfig = function() {
    mi = null, pi = !1, hi = null, Pn = null, q = _, K = "";
  }, t.isValidAttribute = function(V, m, v) {
    mi || Ua({});
    const F = Ve(V), Q = Ve(m);
    return bd(F, Q, v);
  }, t.addHook = function(V, m) {
    typeof m == "function" && ct(w, V) && _i(w[V], m);
  }, t.removeHook = function(V, m) {
    if (ct(w, V)) {
      if (m !== void 0) {
        const v = aM(w[V], m);
        return v === -1 ? void 0 : cM(w[V], v, 1)[0];
      }
      return Pf(w[V]);
    }
  }, t.removeHooks = function(V) {
    ct(w, V) && (w[V] = []);
  }, t.removeAllHooks = function() {
    w = zf();
  }, t;
}
var wM = _m();
function OM(e) {
  const t = e.getRootElement();
  return !!t?.classList.contains("verse-delete-armed") && t.getAttribute("data-verse-delete-kind") === "selection";
}
function RM({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = Z(void 0), [n, i] = me(void 0), s = xe((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = Iu(p);
      if (!h)
        return !1;
      const g = N();
      return e === "protected" ? g && Lu(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = N(), y = r.current;
      if (y && g && _f(g, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const b = ne(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (b) {
            const T = b.getParent(), E = b.getPreviousSibling(), S = b.getNextSibling();
            b.remove(), E ? Du(E) : S && M(S) ? S.select(0, 0) : T?.selectStart();
          }
        } else y.kind === "selection" ? P(g) && (Au(g), g.removeText()) : ut(b) && Bv(b);
        return !0;
      }
      if (!g)
        return !1;
      const k = Kv(g, p);
      if (k) {
        if (k.kind === "verse") {
          const b = Vp();
          b.add(k.node.getKey()), Nr(b);
        } else {
          const b = mn();
          b.anchor.set(k.node.getKey(), 0, "element"), b.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), Nr(b);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), h.preventDefault(), !0;
      }
      if (P(g) && !g.isCollapsed() && Sa(g)) {
        const b = g.getNodes().filter(be).map((S) => S.getKey()), { anchor: T, focus: E } = g;
        return s({
          kind: "selection",
          intent: p,
          key: b[0],
          anchor: { key: T.key, offset: T.offset, type: T.type },
          focus: { key: E.key, offset: E.offset, type: E.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return !h || !Fn(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = wM.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), k = jv(qk(t, y)), b = N();
      return P(b) && b.insertNodes(k), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Fn(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Fn(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        _f(N(), p) || s(void 0);
      });
    };
    return $e(
      t.registerCommand(xr, o, we),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(ir, c, fe),
      t.registerCommand(Ft, u, we),
      t.registerCommand(jp, c, we),
      t.registerCommand(Ol, d, we),
      t.registerCommand(Vn, c, we),
      t.registerUpdateListener(f)
    );
  }, [t, e, s]), j(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const $M = /* @__PURE__ */ new Set(["⁠", " "]);
function qM({ isEnabled: e, structureProtectionMode: t = "off", copyLimit: r, onHiddenContentDelete: n }) {
  const [i] = le(), s = Z(n), o = Z(t), a = Z(r);
  j(() => {
    s.current = n, o.current = t, a.current = r;
  }, [n, t, r]);
  const c = !!n;
  return j(() => {
    if (!e || !c)
      return;
    let l = !1, u = !1, d = !1;
    const f = (D) => {
      l = !0;
      try {
        D();
      } finally {
        l = !1;
      }
    }, p = async (D) => {
      const G = s.current;
      if (!G)
        return "keep";
      try {
        return await G(D) === "delete" ? "delete" : "keep";
      } catch {
        return "keep";
      }
    }, h = (D, G, Y, he) => {
      const ke = zM(D, G), ze = {
        items: Gv(G),
        action: Y,
        canSkip: !!he.$keep
      };
      return u = !0, p(ze).then((Lt) => {
        u = !1, d || g(ke, Lt, he);
      }), !0;
    }, g = (D, G, Y) => {
      i.getEditorState().read(() => BM(D)) && i.focus(() => queueMicrotask(() => y(D, G, Y)));
    }, y = (D, G, Y) => {
      if (d)
        return;
      let he = !1;
      i.update(() => {
        if (!(!i.isEditable() || !KM(D))) {
          if (jM(D), G === "keep") {
            Y.$keep?.();
            return;
          }
          Y.$delete?.(), he = !0;
        }
      }, { discrete: !0 });
      const { replay: ke } = Y;
      he && ke && f(ke);
    }, k = (D) => {
      for (const G of D) {
        const Y = ne(G);
        Se(Y) && Y.isAttached() && Y.remove();
      }
    }, b = (D, G, Y) => {
      const he = G === "backward", ke = he ? "deleteBackward" : "deleteForward", ze = Vv(D, G);
      if (ze?.placement === "block") {
        const oe = ze.nodes.map((Te) => Te.getKey());
        return h(D, ze.nodes, ke, {
          // With no paragraph on the far side (a chapter marker, the document's edge) there is
          // nowhere to skip to, so "keep" cancels rather than leaving the caret to ask again.
          $keep: Hv(ze, G) ? () => vf(Kf(ze, oe), G) : void 0,
          $delete: () => k(oe)
        });
      }
      const Lt = Y === "character" ? [] : UM(i, D, G, Y), ar = FM([...ze?.nodes ?? [], ...Lt]);
      if (ar.length === 0)
        return !1;
      const ie = ar.map((oe) => oe.getKey()), w = !!ze && ar.length === ze.nodes.length, te = ze?.nodes.map((oe) => oe.getKey()) ?? [];
      return h(D, ar, ke, {
        $keep: ze && w ? () => vf(Kf(ze, te), G) : void 0,
        $delete: () => k(ie),
        replay: Y === "character" ? void 0 : () => i.dispatchCommand(LM(Y), he)
      });
    }, T = (D, G) => {
      const Y = To(D);
      return Y.length === 0 ? !1 : h(D, Y, "replaceSelection", { replay: G });
    }, E = () => {
      if (l)
        return;
      const D = N();
      if (!(!P(D) || Zs()))
        return D;
    }, S = (D) => {
      if (l)
        return !1;
      const G = Iu(D), Y = G === "deleteBackward" || G === "deleteForward";
      if (u)
        return !Y && !sm(D) ? !1 : (D.preventDefault(), !0);
      if (!Y || !yn && D.key === "Delete" && D.shiftKey)
        return !1;
      const he = E();
      if (!he || o.current === "protected" && Lu(he, G))
        return !1;
      const ke = G === "deleteBackward";
      if (!he.isCollapsed() && o.current === "guarded" && Sa(he) && !OM(i))
        return !1;
      const ze = he.isCollapsed() ? b(he, ke ? "backward" : "forward", IM(D)) : (
        // Claimed here rather than left to DELETE_CHARACTER_COMMAND: in guarded mode
        // StructureKeyboardPlugin removes an armed selection itself, straight off the keystroke.
        T(he, () => i.dispatchCommand(Ar, ke))
      );
      return ze && D.preventDefault(), ze;
    }, O = (D, G) => (Y) => {
      if (u && !l)
        return !0;
      const he = E();
      return he ? he.isCollapsed() ? b(he, Y ? "backward" : "forward", G) : _(he) ? !1 : T(he, () => i.dispatchCommand(D, Y)) : !1;
    }, q = (D) => (G) => {
      if (u && !l)
        return !0;
      const Y = E();
      return !Y || Y.isCollapsed() || _(Y) ? !1 : T(Y, () => i.dispatchCommand(D, G));
    }, K = (D) => {
      if (u && !l)
        return !0;
      const G = E();
      if (!G || G.isCollapsed() || _(G))
        return !1;
      const Y = typeof D == "string" ? D : D.data ?? D.dataTransfer?.getData("text/plain") ?? "", he = i.isComposing() && $M.has(Y);
      return T(G, () => he || Y === "" ? i.dispatchCommand(Ar, !0) : i.dispatchCommand(Vn, Y));
    }, _ = (D) => o.current === "protected" && Fn(D), W = (D) => {
      if (l)
        return !1;
      const G = E();
      return !G || To(G).length === 0 ? !1 : vi(D);
    }, J = (D) => {
      if (u && !l)
        return vi(D);
      const G = E();
      if (!G || G.isCollapsed() || _(G))
        return !1;
      const Y = DM(D), he = T(G, () => i.dispatchCommand(Ft, Y));
      return he && vi(D), he;
    }, pe = (D) => {
      if (u && !l)
        return vi(D);
      const G = E();
      return !G || G.isCollapsed() || _(G) || To(G).length === 0 ? !1 : a.current !== void 0 ? vi(D) : (i.dispatchCommand(Wn, D), vi(D), T(G, () => i.dispatchCommand(Ar, !0)));
    };
    return $e(() => {
      d = !0;
    }, i.registerCommand(xr, S, fe), i.registerCommand(Ar, O(Ar, "character"), fe), i.registerCommand($i, O($i, "word"), fe), i.registerCommand(jn, O(jn, "line"), fe), i.registerCommand(Vn, K, fe), i.registerCommand(Hn, q(Hn), fe), i.registerCommand(vc, q(vc), fe), i.registerCommand(jp, W, fe), i.registerCommand(Nl, W, fe), i.registerCommand(Ft, J, fe), i.registerCommand(ir, pe, fe));
  }, [i, e, c]), null;
}
function IM(e) {
  return yn ? e.metaKey ? "line" : e.altKey ? "word" : "character" : e.ctrlKey ? "word" : "character";
}
function LM(e) {
  return e === "word" ? $i : e === "line" ? jn : Ar;
}
function vi(e) {
  return e?.preventDefault(), !0;
}
function DM(e) {
  if (typeof ClipboardEvent > "u" || typeof DataTransfer > "u" || !(e instanceof ClipboardEvent) || !e.clipboardData)
    return e;
  const t = new DataTransfer();
  for (const r of e.clipboardData.types)
    r !== "Files" && t.setData(r, e.clipboardData.getData(r));
  for (const r of Array.from(e.clipboardData.files))
    t.items.add(r);
  return new ClipboardEvent("paste", { clipboardData: t, cancelable: !0 });
}
function UM(e, t, r, n) {
  const i = e.getRootElement()?.ownerDocument.defaultView?.getSelection();
  if (!i || typeof i.modify != "function")
    return n === "line" ? Wv(t, r) : [];
  const s = t.clone();
  return s.dirty = !0, s.modify("extend", r === "backward", n === "line" ? "lineboundary" : "word"), t.dirty = !0, To(s);
}
function FM(e) {
  return e.filter((r, n) => e.findIndex((i) => i.is(r)) === n).sort((r, n) => r.isBefore(n) ? -1 : 1);
}
function zM(e, t) {
  const r = ({ key: n, offset: i, type: s }) => ({ key: n, offset: i, type: s });
  return {
    anchor: r(e.anchor),
    focus: r(e.focus),
    hiddenKeys: t.map((n) => n.getKey()),
    text: Fe().getTextContent()
  };
}
function KM(e) {
  const t = ({ key: r, offset: n, type: i }) => {
    const s = ne(r);
    return !s || !s.isAttached() ? !1 : i === "element" ? L(s) && n <= s.getChildrenSize() : M(s) && n <= s.getTextContentSize();
  };
  return t(e.anchor) && t(e.focus) && e.hiddenKeys.every((r) => ne(r)?.isAttached()) && Fe().getTextContent() === e.text;
}
function BM(e) {
  const t = N();
  if (!P(t))
    return !0;
  const r = (n, i) => n.key === i.key && n.offset === i.offset && n.type === i.type;
  return r(t.anchor, e.anchor) && r(t.focus, e.focus);
}
function jM(e) {
  const t = mn();
  t.anchor.set(e.anchor.key, e.anchor.offset, e.anchor.type), t.focus.set(e.focus.key, e.focus.offset, e.focus.type), Nr(t);
}
function Kf(e, t) {
  return { nodes: t.map((n) => ne(n)).filter(Se), placement: e.placement };
}
function VM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = le();
  return j(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), j(() => {
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
        const u = pm(o);
        o.update(() => {
          u || Pt(Vr), o.setEditorState(l), o.dispatchCommand(ck, void 0);
        }, { tag: Il });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const hc = "caller_highlight", WM = Mn(function(t, r) {
  const [n] = le(), i = Z(void 0), s = Z(void 0), o = xe(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const u = Er(a);
      return u ? (u.getChildren().find(bt) ?? Xr(u))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(hc), l?.classList.add(hc), s.current = l;
  }, [n]);
  return ra(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Ei(n, () => Er(a)?.getKey()), o();
    }
  }), [n, o]), j(() => $e(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(qe, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const d = l.has(Il) ? void 0 : c.read(() => pu(u)), f = d === void 0 ? void 0 : n.getEditorState().read(() => Er(d)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), j(() => () => s.current?.classList.remove(hc), []), null;
});
function HM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return GM(t, n), JM(i, e, r, n), null;
}
function GM(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = FS), r.current !== o && (r.current = o, Bf("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = zS), n.current !== o && (n.current = o, Bf("cross-ref-callers", o, t));
  }, [t, s]);
}
function JM(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([_e, qe, hr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => rE(s));
    return $e(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(qe, (s) => YM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(_e, XM),
      e.registerNodeTransform(Qe, QM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(hr, ZM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(hr, (s, { prevEditorState: o }) => eE(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(zt, () => tE(e, t, r, n), Rt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function YM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => bt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    M(i) && !R(i) && i.getTextContent() !== Vt(e.getCaller()) && e.insertBefore(i);
  }
}
function XM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => bt(s));
  if (!z(e) || !B(t) || !n)
    return;
  const i = Hl(r);
  n.getPreviewText() !== i && n.setPreviewText(i), Mm(e);
}
function vm(e) {
  const t = N();
  if (!P(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function Mm(e) {
  const t = e.getNextSibling();
  if (M(t) && !R(t)) {
    if (t.getTextContent() === U || vm(t))
      return;
    if (zr(t)) {
      t.setTextContent(U);
      return;
    }
  }
  e.insertAfter(Hs());
}
function QM(e) {
  const t = jt(e), r = t?.getChildren(), n = r?.find((a) => bt(a));
  if (!M(e) || !B(t) || !n || !r)
    return;
  const i = e.getParent(), s = zr(e) || vm(e);
  if (!R(e) && B(i) && s && e.getTextContent() !== U && (e.setTextContent(U), e.selectEnd()), z(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(sr) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = Hl(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function ZM(e) {
  bt(e) && Mm(e);
}
function eE(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ne(r), a = o?.getParent();
      return bt(o) && B(a) && a.getCaller() === xs;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function tE(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = N();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Re(o, (c) => B(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ne(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), cs(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (B(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, cs(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (B(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, cs(e, c, n);
    } else if (!a) {
      const c = Re(o, (l) => B(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      Pe(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, cs(e, l, n);
      }
    }
  }
  if (ut(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (li(c) && B(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, cs(e, l, n);
    }
  }
  return !1;
}
function cs(e, t, r) {
  const n = ne(t);
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
function rE(e) {
  const t = N();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (B(i) && M(s)) {
    e.preventDefault();
    const o = mn();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Nr(o);
  }
}
function Bf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (nE(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function nE(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Rr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!R(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Xr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => M(n) && n.getMode() === "token") ? t : [];
}
function iE(e) {
  const t = e.getParent();
  if (B(t))
    return Rr(t).some((r) => r.is(e)) ? t : void 0;
}
function ei(e) {
  const t = Rr(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function sE(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function oE(e) {
  const t = lk();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ei(e);
  const i = sE(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ei(e);
}
function Ni(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = iE(t);
  if (r)
    return Em(r, t, e.offset) ? void 0 : r;
}
function Em(e, t, r) {
  const n = Rr(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function aE(e) {
  const t = Rr(e), r = t[t.length - 1];
  M(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : or(e, ei(e));
}
function cE(e = !1) {
  const t = N();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return wm(t);
  const r = Am(t.anchor);
  if (r) {
    const i = jo(r);
    return t.anchor.is(i) ? !1 : (Pm(t, i), !0);
  }
  const n = Ni(t.anchor);
  if (!n)
    return !1;
  if (!e && oE(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    or(i, n.getIndexWithinParent());
  } else
    aE(n);
  return !0;
}
function Bo(e) {
  const t = Rr(e), r = t[t.length - 1];
  return M(r) ? fr(r.getKey(), r.getTextContentSize(), "text") : fr(e.getKey(), ei(e), "element");
}
function Bi(e) {
  const t = e.getLastChild();
  return R(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function gc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === Bi(e) && R(r) && t.offset > 0;
}
function Zc(e) {
  const t = Bi(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function jo(e) {
  const t = Bi(e);
  if (t > ei(e)) {
    const r = e.getChildAtIndex(t - 1), n = L(r) ? r.getLastDescendant() : r;
    if (M(n))
      return fr(n.getKey(), n.getTextContentSize(), "text");
  }
  return Bo(e);
}
function Am(e) {
  const t = e.getNode(), r = t.getParent();
  if (B(r) && Rr(r).length > 0 && Zc(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (B(t) && Rr(t).length > 0 && Zc(t))
    return e.offset > Bi(t) || e.offset === Bi(t) && e.offset > ei(t) ? t : void 0;
  if (!L(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return B(n) && Rr(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function Pm(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function Nm(e) {
  const t = jt(e);
  return t && Rr(t).length > 0 ? t : void 0;
}
function lE(e) {
  const t = [], r = (n) => {
    const i = Nm(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function wm(e) {
  const t = lE(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => fr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const u = fr(l.getKey(), ei(l), "element"), d = fr(l.getKey(), Bi(l), "element"), f = i.type === "text" && Em(l, i.getNode(), i.offset), p = i.isBefore(u) && !f;
    (Ni(i) || gc(l, i) || p) && (!s.isBefore(u) || Ni(s)) && (i = gc(l, i) ? jo(l) : Bo(l), o = !0), (Ni(s) || gc(l, s) || d.isBefore(s)) && (i.isBefore(d) || i.is(d)) && (s = Ni(s) ? Bo(l) : jo(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function jf(e, t) {
  const r = mn();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function Vf(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r)
    return;
  const n = r.ownerDocument.createRange(), i = t.type === "text" ? r.firstChild : r;
  if (!i)
    return;
  const s = i.nodeType === 3 ? i.textContent?.length ?? 0 : i.childNodes.length;
  if (n.setStart(i, Math.min(t.offset, s)), n.collapse(!0), typeof n.getClientRects != "function")
    return;
  const [o] = Array.from(n.getClientRects());
  return o?.top;
}
function Wf(e, t, r) {
  const n = Vf(e, t), i = Vf(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function uE(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return L(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function dE(e, t, r, n) {
  const i = t.anchor, s = Am(i);
  if (s)
    return Pm(t, jo(s)), !0;
  const o = Nm(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const d = uE(t.focus);
    return B(d) && Rr(d).length > 0;
  }
  if (Ni(i))
    return !0;
  const a = Bo(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const d = jf(a, i);
    return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && Wf(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = Zc(o);
  if (!c)
    return !1;
  const l = fr(c.getKey(), 0, "text"), u = jf(i, l);
  return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && Wf(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function fE() {
  const [e] = le(), t = Z(!1);
  return j(() => {
    const r = () => {
      t.current = !0;
    }, n = () => {
      t.current = !1;
    };
    return e.registerRootListener((i, s) => {
      const o = s?.ownerDocument;
      o?.removeEventListener("pointerdown", r, !0), o?.removeEventListener("pointerup", n, !0), o?.removeEventListener("pointercancel", n, !0), t.current = !1;
      const a = i?.ownerDocument;
      a?.addEventListener("pointerdown", r, !0), a?.addEventListener("pointerup", n, !0), a?.addEventListener("pointercancel", n, !0);
    });
  }, [e]), j(() => {
    const r = (o) => () => {
      const a = N();
      return !P(a) || a.isCollapsed() || !wm(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = N();
      return P(c) ? c.isCollapsed() ? dE(e, c, a, o) : i() : !1;
    };
    return $e(e.registerCommand(Vn, n, fe), e.registerCommand(Ft, n, fe), e.registerCommand(Hn, n, fe), e.registerCommand(vc, n, fe), e.registerCommand(Ar, s("character"), fe), e.registerCommand($i, s("word"), fe), e.registerCommand(jn, s("line"), fe), e.registerCommand(Nl, i, fe), e.registerCommand(ir, i, fe));
  }, [e]), j(() => e.registerCommand(zt, () => (cE(t.current) && (Pt(wt), Gr(e, wt)), !1), Bn), [e]), null;
}
function pE({ onChange: e }) {
  const [t] = le();
  return j(() => t.registerCommand(zt, () => {
    const r = gu();
    return e?.(r), !1;
  }, Rt), [t, e]), null;
}
function hE() {
  const [e] = le();
  return gE(e), null;
}
function gE(e) {
  j(() => {
    if (!e.hasNodes([dt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(dt, (t) => mE(t, e));
  }, [e]);
}
function mE(e, t) {
  Kc(t, e.getKey()) && Rg(e.getFirstChild()), !(!ue(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ne(e.getKey());
    return ue(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Om({ onStateChange: e }) {
  const [t] = le(), [r, n] = me(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = xe(() => {
    const l = N();
    let u;
    if (P(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : Re(d, (k) => {
        const b = k.getParent();
        return b !== null && uk(b);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), Ps(p) && (p = Re(d, ue) ?? p);
      const h = p.getKey(), g = r.getElementByKey(h), y = sT(d, f);
      if (y && QC(y) && (u = y.getMarker()), g !== null && (ue(p) || ve(p) || Bs(p))) {
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
  return j(() => t.registerCommand(zt, (l, u) => (c(), n(u), !1), fe), [t, c]), j(() => $e(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(dk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), fe), r.registerCommand(fk, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), fe)), [c, r, e]), null;
}
const Pw = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function yE({ textDirection: e }) {
  const [t] = le();
  return bE(t, e), null;
}
function bE(e, t) {
  j(() => (Hf(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Hf(e, t);
  })), [e, t]);
}
function Hf(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function kE() {
  const [e] = le();
  return xE(e), null;
}
function xE(e) {
  j(() => {
    if (!e.hasNodes([_e, It, qe, Qe, xt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return $e(
      e.registerNodeTransform(Qe, TE),
      e.registerNodeTransform(Qe, (t) => CE(t, e)),
      e.registerNodeTransform(xt, Gf),
      e.registerNodeTransform(It, Gf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(xt, (t) => {
        As(Xn("va"), t), As(Xn("vp"), t);
      })
    );
  }, [e]);
}
function TE(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || B(r) || z(n) || z(r) || Ee(n) || Ee(r) || Se(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  M(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  Se(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ae(e, de) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Be(n))
    return;
  if (be(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  be(r) && cu(e);
}
function CE(e, t) {
  const r = e.getParent();
  !Se(r) || !e.isAttached() || Kc(t, e.getKey()) && !Kc(t, r.getKey()) && r.insertAfter(e);
}
function Gf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ee(t); )
    t = t.getLastChild();
  (z(t) || M(t) && Ee(t.getParent())) && e.insertBefore(Ae(" "));
}
function _a(e) {
  if (!B(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !Vs(i)))
      return;
    const n = t.getParent();
    if (!n)
      return;
    if (!L(n) || !n.isInline())
      return e;
    t = n;
  }
}
function SE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function _E() {
  const e = N();
  if (!(!P(e) || !e.isCollapsed()))
    return _a(SE(e.anchor));
}
function vE(e) {
  const t = N();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Rm(e.target)), r ? _a(Re(r, B)) : void 0;
}
function Rm(e) {
  const t = pk(e)?.anchorNode;
  if (zp(t))
    return Wi(t) ?? void 0;
}
function ME(e) {
  if (N())
    return;
  const t = Rm(e);
  return t ? _a(Re(t, B)) : void 0;
}
function Jf(e) {
  const t = Re(e.getNode(), B);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function EE() {
  const e = N();
  if (!P(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = Jf(t), i = Jf(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const AE = 500;
function PE(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function NE() {
  const e = N();
  if (!P(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (L(n))
    return _a(n.getChildAtIndex(t.offset));
}
function wE() {
  const [e] = le(), t = qu(_E), r = Z(void 0);
  return j(() => {
    const n = (i) => {
      Pt(wt), Gr(e, wt), t(i);
    };
    return $e(e.registerCommand(
      xr,
      (i) => (r.current = PE(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      fe
    ), e.registerCommand(zt, () => {
      if (r.current !== void 0 && performance.now() - r.current < AE) {
        const o = NE();
        if (o)
          return n(o), !1;
      }
      if (EE())
        return Pt(wt), Gr(e, wt), !1;
      const s = ME(e.getRootElement());
      return s && n(s), !1;
    }, Bn), e.registerCommand(sa, (i) => {
      const s = vE(i);
      return s && n(s), !1;
    }, Bn));
  }, [e, t]), null;
}
function OE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = k_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return A(b_, { trigger: e, items: i });
}
function RE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Xe(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? A(IE, { trigger: e, harness: i }) : A(OE, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const $E = [" ", "*"];
function qE(e, t) {
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
function IE({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = me(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = xe((f, p, h) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = N();
      P(y) && y.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => $e(r.registerCommand(xr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), Wp(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = N();
          P(y) && y.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const h = s.current.query;
      if (n.hasTextSelection) {
        const g = n.items.find((y) => y.marker === h);
        return g && t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(h, n.items, !0), !0;
    }
    if (f.key !== e)
      return !1;
    const p = t.getContext();
    return p ? (f.preventDefault(), s.current = { query: "", options: [] }, o.current += 1, i({
      trigger: "backslash",
      hasTextSelection: p.hasTextSelection,
      items: t.getItems(p),
      session: o.current
    }), !0) : !1;
  }, we), r.registerCommand(Hp, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, wr)), [r, e, t, n, a]);
  const c = xe(() => i(void 0), []), l = xe((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = xe((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), d = Xe(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    qE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && A(jg, { isOpen: !0, children: ({ placement: f }) => A(
    Hg,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? $E : void 0 },
    n.session
  ) });
}
function LE(e) {
  return e.replaceAll(U, "~").replace(/ {2,}/g, (r) => U.repeat(r.length));
}
function DE(e) {
  return e.replaceAll(U, " ").replaceAll("~", U);
}
function UE(e) {
  return e.replace(/ {2,}/g, " ");
}
let Vo;
function FE(e) {
  e && (Vo = e);
}
function el(e) {
  return Qs(e);
}
function zE(e, t) {
  return e.isEmpty() ? Fp : $m(e.toJSON(), t);
}
function $m(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && la(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Fp;
  if (r.some(RC)) {
    Vo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = qm(r), i = ur(n, t);
  return i ? { type: mr, version: gr, content: i } : void 0;
}
function KE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Ue({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function BE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ue({
    type: Ht.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function jE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = jh(r, a, c), Ue({
    type: Ht.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function VE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = jh(t, o, a), Ue({
    type: xt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function WE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !el(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(U) && (t[0] = a.slice(1));
  }
  return Ue({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function HE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ue({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function GE(e, t) {
  const { unknownAttributes: r } = e;
  return Ue({ type: bg, ...r, content: t });
}
function JE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ue({ type: Tg, marker: r, ...n, content: t });
}
function YE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ue({
    type: Sg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function XE(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function QE(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Ue({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Pi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ue({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Zh({ sid: n, eid: i, ...s }, o)
  });
}
function ZE(e) {
  return e.text;
}
function eA(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ue({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function tA(e) {
  const { marker: t } = e;
  return {
    type: Oo,
    marker: t === "" ? void 0 : t
  };
}
function Yf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function rA(e, t, r, n, i) {
  const s = yr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Pi({
      type: s,
      marker: wi,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Pi({
      type: s,
      marker: Gn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Pi({
      type: s,
      marker: Gn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Pi({
      type: s,
      marker: wi
    });
    i.push(l);
  }
  (!n || !Th(n)) && t.forEach((l) => {
    const u = Pi({
      type: s,
      marker: wi,
      eid: l
    });
    i.push(u);
  });
}
function ur(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, h = a, g = a, y = a;
    switch (a.type) {
      case Bt.getType():
        i.push(
          KE(
            l,
            ur(l.children, t)
          )
        );
        break;
      case Fr.getType():
        i.push(BE(a));
        break;
      case Ht.getType():
        i.push(
          jE(
            u,
            ur(u.children, t)
          )
        );
        break;
      case It.getType():
      case xt.getType():
        i.push(VE(a));
        break;
      case _e.getType():
        i.push(
          WE(
            d,
            ur(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case dt.getType():
        i.push(
          HE(
            f,
            ur(f.children, t)
          )
        );
        break;
      case ci.getType():
        i.push(
          GE(
            a,
            ur(a.children, t)
          )
        );
        break;
      case Ji.getType():
        i.push(
          JE(
            a,
            ur(a.children, t)
          )
        );
        break;
      case Yi.getType():
        i.push(
          YE(
            a,
            ur(a.children, t)
          )
        );
        break;
      case qe.getType(): {
        const k = ur(
          p.children,
          t,
          p.caller
        );
        i.push(
          QE(
            p,
            el(t) && p.category === void 0 ? XE(k) : k
          )
        );
        break;
      }
      case en.getType():
      case Zr.getType():
      case hr.getType():
      case Gp.getType():
      case Kr.getType():
        break;
      case lt.getType():
        if (s = ur(
          g.children,
          t,
          r,
          n
        ), s) {
          const k = g.typedIDs[hn];
          if (k)
            rA(s, k, o, e[c + 1], i), o = k;
          else {
            const b = s.shift();
            b && (typeof b == "string" ? Yf(i, b) : i.push(b)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case yr.getType():
        i.push(Pi(a));
        break;
      case Qe.getType():
        if (h.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !js(h.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
        // text node stands in for THREE presentation shapes — the tagged separators the
        // forward adaptor builds, the empty-char placeholder, and an orphaned structural
        // prefix a split or deletion strands in its own (untagged) node. The known cost is
        // that a CONTENT string which is exactly one NBSP is dropped too; fixing that needs
        // a per-context story for the untagged shapes, not a tag test alone. The forward
        // side keeps its own output clear of the ambiguity: `createPara` leaves a
        // spaces-only paragraph-leading string plain instead of rewriting a lone " " into
        // exactly this shape, so in standard view only an authored lone-NBSP data string
        // (displayed as `~`, never as a bare NBSP node) is at stake — leaving the drop to
        // genuinely structural nodes.
        h.text !== U && !h.text.startsWith(ql) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        h[Ks]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || h.text !== Vt(r))) {
          let k = ZE(h);
          el(t) && (n && k.startsWith(U) && (k = k.slice(1)), k = UE(DE(k))), Yf(i, k);
        }
        break;
      case ai.getType():
        i.push(
          eA(
            y,
            ur(y.children, t)
          )
        );
        break;
      case nn.getType():
        i.push(tA(a));
        break;
      case Xi.getType():
        Vo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Vo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function qm(e) {
  const t = e.findIndex((r) => la(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = qm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Co = {
  initialize: FE,
  deserializeEditorState: zE
}, nA = /^sd\d*$/, iA = /* @__PURE__ */ new Set([
  ...Object.entries(Pc).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === x.Paragraph && !nA.test(e)
  ).map(([e]) => e),
  "qa"
]);
function sA(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Bl(i) || zh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!iT(i)) {
      t && Wo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Vl(i) && iA.has(i.marker) && !Wo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Im(i.children, t).forEach((s) => {
      const o = oA(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = aA(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Im(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Lm(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Th(i)) {
      const s = Im(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Xf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Xf(i, c.nodes)] });
      });
      return;
    }
    t && Wo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Xf(e, t) {
  return { ...e, children: t };
}
function Lm(e) {
  return wg(e) && e.number !== "";
}
function Wo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Lm(r) || Wo(r)) : !1;
}
function oA(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function aA(e) {
  return {
    type: Ro,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Ag
  };
}
const Qf = Fm([]), cA = {
  type: Gp.getType(),
  version: 1
};
let Uu = [], se, ti, Dm, qt;
function lA(e, t) {
  Uu = [], fA(e), pA(t);
}
function uA(e = 0) {
}
function dA(e, t) {
  se = t ?? Ta();
  let r;
  return e ? (e.type !== mr && qt?.warn(`This USJ type '${e.type}' didn't match the expected type '${mr}'.`), e.version !== gr && qt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${gr}'.`
  ), e.content.length > 0 ? (r = il(Wr(e.content)), ws(se) && (r = sA(r, qt))) : r = [Qf]) : r = [Qf], Dm?.(Uu), {
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
function fA(e) {
  e && (ti = e), e?.addMissingComments && (Dm = e.addMissingComments);
}
function pA(e) {
  e && (qt = e);
}
function Um() {
  return Qs(se);
}
function hA(e, t) {
  let { marker: r } = e;
  r !== _s && qt?.warn(`Unexpected book marker '${r}'!`), r = r ?? _s;
  const { code: n } = e;
  (!n || !Bt.isValidBookCode(n)) && qt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  se?.markerMode === "editable" || se?.markerMode === "visible" ? i.push(
    Ot("marker", je(r) + " " + n + U)
  ) : se?.hasGutterParaMarkers && i.push(Ot("marker", je(r) + U, !0)), i.push(...t);
  const s = He(e, Lx);
  return Ue({
    type: Bt.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Mh
  });
}
function gA(e) {
  let { marker: t } = e;
  t !== Po && qt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Po;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = He(e, Dx);
  let a;
  se?.markerMode === "visible" && (a = !0);
  const c = [
    St(nr(t, r) ?? "")
  ];
  return se?.markerMode === "editable" && OA(i, s, c), se?.markerMode === "editable" ? Ue({
    type: Ht.getType(),
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
    version: Ah
  }) : Ue({
    type: Fr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Rh
  });
}
function mA(e) {
  let { marker: t } = e;
  t !== No && qt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? No;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (A_(se) ?? It).getType(), c = se?.markerMode === "editable" ? Dh : Ng;
  let l, u;
  se?.markerMode === "editable" ? l = nr(t, r) : se?.markerMode === "visible" && (u = !0);
  const d = He(e, Xx);
  return Ue({
    type: a,
    text: l,
    ...l === void 0 ? void 0 : { detail: 0, format: 0, mode: "normal", style: "" },
    marker: t,
    number: r ?? "",
    sid: n,
    altnumber: i,
    pubnumber: s,
    showMarker: u,
    unknownAttributes: d,
    version: c
  });
}
function yA(e, t = [], r = !1) {
  let { marker: n } = e;
  _e.isValidMarker(n, ti?.extraValidMarkers) || qt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (se?.markerMode === "editable") {
    const [a] = t;
    Li(a) ? a.text = U + a.text : a && t.unshift(St(U));
  }
  t.length === 0 && t.push(St(sr)), tl(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = He(e, zx);
  return s || AA(n, o, i), s || rl(e.marker ?? "", i, !1, r), Ue({
    type: _e.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Oh
  });
}
function Fm(e) {
  return {
    type: kn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Ih
  };
}
function bA(e, t = []) {
  let { marker: r } = e;
  dt.isValidMarker(r, ti?.extraValidMarkers) || qt?.warn(`Unexpected para marker '${r}'!`), r = r ?? rr;
  const n = [];
  if (ui(se) && (se?.markerMode === "editable" ? n.push(
    Tt(r),
    St(U, Ur, "token")
  ) : (se?.markerMode === "visible" || se?.hasGutterParaMarkers) && n.push(
    Ot(
      "marker",
      je(r) + U,
      se?.hasGutterParaMarkers
    )
  )), n.push(...t), Um()) {
    const s = n.find(
      (o) => !Yl(o) && !(Li(o) && o.text === U)
    );
    Li(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => U.repeat(o.length)));
  }
  const i = He(e, Jx);
  return Ue({
    type: dt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Lh
  });
}
function Fu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function kA(e, t = []) {
  const r = He(e, eC);
  return Ue({
    ...Fu(),
    type: ci.getType(),
    unknownAttributes: r,
    children: t,
    version: kg
  });
}
function xA(e, t = []) {
  const r = He(e, nC), n = e.marker ?? Dc, i = [];
  return se?.markerMode === "editable" ? i.push(
    Tt(n),
    St(U, Ur, "token")
  ) : (se?.markerMode === "visible" || se?.hasGutterParaMarkers) && i.push(
    Ot(
      "marker",
      je(n) + U,
      se?.hasGutterParaMarkers
    )
  ), i.push(...t), Ue({
    ...Fu(),
    type: Ji.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Cg
  });
}
function TA(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Uc, a = dg(o, i) ?? o;
  se?.markerMode === "editable" ? s.push(
    Tt(a),
    St(U, Ur, "token")
  ) : (se?.markerMode === "visible" || se?.hasGutterParaMarkers) && s.push(
    Ot(
      "marker",
      je(a) + U,
      se?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = He(
    e,
    sC
  );
  return Ue({
    ...Fu(),
    type: Yi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: _g
  });
}
function CA(e, t) {
  const r = uT(t);
  let n = () => {
  };
  return ti?.noteCallerOnClick && (n = ti.noteCallerOnClick), Ue({
    type: hr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Lg
  });
}
function SA(e, t) {
  let { marker: r } = e;
  qe.isValidMarker(r, ti?.extraValidMarkers) || qt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Dl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : mu(se?.noteMode), a = He(e, ex), c = se?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  se?.markerMode === "editable" ? (l = Tt(r, "opening", !1, c), s || (u = Tt(r, "closing"))) : se?.markerMode === "visible" && (l = Ot("marker", je(r) + " "), s || (u = Ot("marker", st(r))));
  const d = [];
  let f;
  if (l && d.push(l), se?.markerMode === "editable" && !o)
    f = St(Vt(i), void 0, c), d.push(f), wA(n, d), d.push(...t);
  else {
    const p = St(U, Ur, "token");
    f = CA(i, t), d.push(f, p, ...t.flatMap(_A(p)));
  }
  return u && d.push(u), Ue({
    type: qe.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: ph
  });
}
function _A(e) {
  return (t) => kh(t) ? [t] : [t, e];
}
function vA(e) {
  let { marker: t } = e;
  (!t || !yr.isValidMarker(t, ti?.extraValidMarkers)) && qt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = He(e, Ll), s = eg(e);
  return Ue({
    type: yr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: uh
  });
}
function Zf(e, t = []) {
  return {
    type: lt.getType(),
    typedIDs: { [hn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function MA(e, t) {
  const { marker: r } = e, n = e.type, i = He(e, Ox), s = [];
  if (se?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = fg(
      n,
      r,
      i
    );
    o && s.push(Ot("marker", o)), a && s.push(Ot("attribute", a)), s.push(...t), c && s.push(Ot("attribute", c)), l && s.push(Ot("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Li(o) && (o.mode = "token");
  }), Ue({
    type: ai.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Sh
  });
}
function EA(e) {
  return {
    type: nn.getType(),
    marker: e,
    text: ms(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: se?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: mg
  };
}
function Tt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Kr.getType(),
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
function St(e, t = void 0, r = "normal") {
  const n = {
    type: Qe.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Ks] = { textType: t }), n;
}
function Ot(e, t, r = !1) {
  const n = {
    type: Zr.getType(),
    text: t,
    textType: e,
    version: bh
  };
  return r && (n[Ks] = { [zl.key]: !0 }), n;
}
function Rs(e, t) {
  return {
    type: en.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: _h
  };
}
function tl(e, t, r = !1) {
  se?.markerMode === "editable" ? t.push(Tt(e, "opening", r)) : se?.markerMode === "visible" && t.push(Ot("marker", je(e, r)));
}
function rl(e, t, r = !1, n = !1) {
  se?.markerMode === "editable" ? r ? t.push(Tt("", "selfClosing")) : t.push(Tt(e, "closing", n)) : se?.markerMode === "visible" && t.push(
    Ot(
      "marker",
      r ? st("") : st(e, n)
    )
  );
}
function AA(e, t, r) {
  if (se?.markerMode !== "editable" || !t) return;
  const n = Pr(t, aa(e));
  n && r.push(St(n, "attribute"));
}
function ep(e, t) {
  if (e.type !== "ms" || se?.markerMode !== "editable" && se?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = He(e, Ll), o = tg(
    n,
    i,
    s,
    eg(e)
  ), a = Pr(o, ca(r ?? ""));
  if (!a) return;
  const c = U + a;
  se?.markerMode === "editable" ? t.push(St(c, "attribute")) : t.push(Ot("attribute", c));
}
function PA(e, t) {
  const r = e.marker ?? "";
  if (se?.markerMode === "editable") {
    const n = [];
    tl(r, n), ep(e, n), rl(r, n, !0), t.push(Rs("milestone", n));
  } else
    tl(r, t), ep(e, t), rl(r, t, !0);
}
function tp(e, t, r) {
  t !== void 0 && r.push(
    Rs(e, [
      Tt(e, "opening"),
      St(U + t, "attribute"),
      Tt(e, "closing")
    ])
  );
}
function NA(e, t) {
  se?.markerMode === "editable" && (tp("va", e.altnumber, t), tp("vp", e.pubnumber, t));
}
function wA(e, t) {
  e !== void 0 && t.push(
    Rs("cat", [
      Tt("cat", "opening"),
      St(U + e, "attribute"),
      Tt("cat", "closing")
    ])
  );
}
function OA(e, t, r) {
  e !== void 0 && r.push(
    Rs("ca", [
      Tt("ca", "opening"),
      St(U + e, "attribute"),
      Tt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Rs("cp", [
      Tt("cp", "opening"),
      St(U + t, "attribute")
    ])
  );
}
function rp(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function RA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function np(e, t) {
  t.marker === Gn && t.sid !== void 0 && e.push(t.sid), t.marker === wi && t.eid !== void 0 && RA(e, t.eid);
}
function nl(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Zf(o, [...n])] : o, c = e[i];
  np(n, c);
  const l = nl(
    e.slice(i + 1, s),
    rp(t, i + 1),
    c.marker === Gn,
    n
  ), u = Zf(l, [...n]), d = e[s];
  np(n, d);
  const f = nl(
    e.slice(s + 1),
    rp(t, s + 1),
    d.marker === Gn,
    n
  );
  return [...a, u, ...f];
}
function Wr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(St(Um() ? LE(i) : i));
    else if (!i.type)
      qt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Bt.getType():
          n.push(hA(i, Wr(i.content)));
          break;
        case Ht.getType():
          n.push(gA(i));
          break;
        case xt.getType():
          se?.hasSpacing || n.push(cA), n.push(mA(i)), NA(i, n);
          break;
        case _e.getType():
          n.push(
            yA(i, Wr(i.content, !0), t)
          );
          break;
        case dt.getType():
          n.push(bA(i, Wr(i.content)));
          break;
        case qe.getType():
          n.push(SA(i, Wr(i.content)));
          break;
        case yr.getType():
          dh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Uu?.push(i.sid)), n.push(vA(i)), PA(i, n);
          break;
        case nn.getType():
          n.push(EA(i.marker ?? ""));
          break;
        case bg:
          n.push(kA(i, Wr(i.content)));
          break;
        case Tg:
          n.push(xA(i, Wr(i.content)));
          break;
        case Sg:
          n.push(TA(i, Wr(i.content)));
          break;
        default:
          qt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(MA(i, Wr(i.content)));
      }
  }), nl(n, r);
}
function il(e) {
  const t = e.findIndex(
    (n) => Bl(n) || zh(n) || Vl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    rC(n)
  );
  if (t >= 0) {
    const n = il(e.slice(0, t)), i = e[t], s = il(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || wg(n)))
    return [Fm(e)];
  return e;
}
const br = {
  initialize: lA,
  reset: uA,
  serializeEditorState: dA
};
function zm(e) {
  if (e && !R(e)) {
    if (M(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = zm(t);
        if (r) return r;
      }
  }
}
function $A() {
  const e = N();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((M(t) && !R(t) ? Zn(t) : void 0) && M(t)) {
      const i = Ae(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Di(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = zm(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(U) ? U : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return M(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Km(e)) {
    if (!Zn(t)) continue;
    Di(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(U) && r.setTextContent(n.slice(U.length));
  }
  return !0;
}
function Km(e) {
  const [t, r] = Al(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!M(a) || R(a) || ae(a, de) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Bm(e) {
  let t = e;
  for (; z(t) || Ee(t); ) t = t.getParent();
  return t;
}
function jm(e) {
  const t = Bm(e.getParent());
  return ut(t) ? t : void 0;
}
function qA() {
  const e = N();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return Zn(t) ? !!jm(t) : !1;
}
function Vm(e) {
  const t = Ae(""), r = e.getNode(), n = e.offset;
  if (M(r))
    if (n <= 0) r.insertBefore(t);
    else if (n >= r.getTextContentSize()) r.insertAfter(t);
    else {
      const [, o] = r.splitText(n);
      o.insertBefore(t);
    }
  else {
    const o = e.getNode(), a = L(o) ? o : o.getParent(), c = L(o) ? o.getChildAtIndex(n) : o;
    if (c) c.insertBefore(t);
    else if (a) a.append(t);
    else return { parent: void 0, moving: [] };
  }
  for (let o = t.getParent(); ; o = t.getParent())
    if (z(o)) Di(t, { renderGlyphs: !0 });
    else if (!Ee(o) || !IA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function IA(e, t) {
  const r = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (r.length === 0)
    return t.insertAfter(e), !0;
  const n = N();
  if (!P(n)) return !1;
  const i = t.insertNewAfter(n, !1);
  return i ? (i.append(...r), t.insertAfter(e), !0) : !1;
}
function Wm(e) {
  const t = e.anchor.getNode();
  if (R(t) && !su(t, e.anchor.offset)) {
    const r = t.getParent();
    if (z(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = N();
      return P(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function Hm() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Wm(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!M(r) || R(r) || !Zn(r)) return !1;
  const n = jm(r);
  if (!n) return !1;
  const { moving: i } = Vm(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Ee(o); ) o = o.getFirstChild() ?? void 0;
  return z(o) ? ga(o) : s.select(0, 0), !0;
}
const Gm = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Kh(Fe().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = Jh(e), r = uu(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = fT(0, o);
        const a = WC(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || pT(c) && Jl(parseInt(n, 10), c);
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
function sl(e, t) {
  return qe.isValidMarker(e, t) || !!Gm[e] || dt.isValidMarker(e, t) || _e.isValidMarker(e, t);
}
function LA(e, t) {
  return _e.isNoteContentMarker(e) ? !1 : _e.isValidMarker(e, t);
}
function Jm(e, t, r, n, i, s) {
  const o = Ug(
    e,
    void 0,
    void 0,
    t,
    n ?? Ta(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function ol(e, t, r, n, i, s, o) {
  if (qe.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Jm(
          e,
          d.reference,
          t,
          r,
          n,
          i
        );
      }, s);
    }, label: void 0, getInsertedNoteKey: () => l };
  }
  const a = BA(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = N();
      P(u) && (ou(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Zd(d, br, r), h = ja(p);
      if (P(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), k = Zn(g), b = u.anchor.key === u.focus.key;
        if (z(h) && k && b && !mc(h, o))
          FA(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (z(h) && !b && !mc(h, o) && zA(u))
          KA(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          jA(
            u,
            () => ja(p)
          );
        else if (L(h) && !h.isInline()) {
          const T = u.insertParagraph();
          if (T) {
            const E = T.getChildren();
            h.append(...E), T.replace(h), ut(h) && di(h) || h.selectStart();
          }
        } else if (z(h) && M(g) && !R(g) && z(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        mc(h, o)) {
          const T = g.getParent();
          if (z(T)) {
            const E = u.anchor.offset;
            if (E === 0) g.insertBefore(h);
            else if (E >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [O] = g.splitText(E);
              O.insertAfter(h);
            }
            h.getChildren().forEach((O) => {
              R(O) && O.setNested(!0);
            });
            const S = h.getChildren().find((O) => M(O) && !R(O));
            S && M(S) ? S.select(
              S.getTextContentSize(),
              S.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (M(g) && !R(g) && u.isCollapsed() && (B(y) || z(y) && B(y.getParent()))) {
          const T = z(y) ? y : void 0, E = T ? DA(g, u.anchor.offset) : [];
          let O = (T ?? g).insertAfter(h);
          if (Tr(h)) {
            const q = {
              ...r || Ta(),
              markerMode: "hidden"
            }, K = Zd(
              d,
              br,
              q
            ), _ = ja(K);
            O = O.insertAfter(_);
          }
          if (E.length > 0 && T) {
            const q = Ho(T).append(...E);
            O.insertAfter(q), T.isEmpty() && T.remove();
          } else M(O.getNextSibling()) || O.insertAfter(Ae(U));
          L(O) && O.selectEnd();
        } else if (u.insertNodes([h]), eP(h), f) {
          const T = Vp();
          T.add(h.getKey()), Nr(T);
        } else if (z(h)) {
          const T = h.getChildren().find((E) => M(E) && !R(E));
          T && M(T) ? T.select(
            T.getTextContentSize(),
            T.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const T = h.getNextSibling();
          T ? T.selectStart() : h.selectStart();
        }
      } else
        u?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function DA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function mc(e, t) {
  return ((t ?? $o).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function UA(e, t) {
  t && e.getChildren().forEach((i) => {
    R(i) && i.setNested(!0);
  }), e.getChildren().some((i) => R(i) && i.getMarkerSyntax() === "closing") || e.append(yt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function FA(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && z(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !M(r)) {
    const o = e.anchor.offset;
    if (M(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else M(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = ji(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Di(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), M(i) && !i.getTextContent().startsWith(U) && i.setTextContent(U + i.getTextContent());
    const o = t.getChildren().find((a) => M(a) && !R(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => M(o) && !R(o));
  M(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function zA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (R(n) || z(n)) continue;
    if (!M(n) || n.getType() !== Qe.getType() || ae(n, de) === "attribute") return !1;
    const i = dC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Zn(n) && (r = !0);
  }
  return r;
}
function KA(e, t, r) {
  const n = Km(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Zn(a)) return;
    Di(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(U) && c.setTextContent(l.slice(U.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(U) || i.setTextContent(U + i.getTextContent());
  const s = t.getChildren().find((a) => M(a) && !R(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function BA(e, t) {
  let r = Gm[e];
  return r || (dt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: dt.getType(), marker: e, content: [] }] })
  } : _e.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: _e.getType(), marker: e };
      return (_e.isValidFootnoteMarker(e) || _e.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function jA(e, t) {
  const r = e.getNodes(), [n, i] = ji(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = Ym(
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
    s || (s = t(), c.insertBefore(s), l = !0, z(s) && s.getChildren().some((d) => R(d) && d.getMarkerSyntax() === "opening") && UA(s, z(s.getParent()))), WA(c, s, l);
  }), (M(s) || L(s)) && s.selectEnd();
}
function ji(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function zu(e) {
  return Ee(e) || B(e) || B(e.getParent());
}
function Ym(e, t, r, n, i) {
  if (!zu(e)) {
    if (M(e))
      return VA(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function VA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function WA(e, t, r) {
  if (M(t)) {
    const n = al(e, t);
    t.setTextContent(n), e.remove();
  } else if (L(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => R(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !R(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    al(e, t), r && z(t) && t.getChildren().some((s) => R(s)) && M(e) && !R(e) && !e.getTextContent().startsWith(U) && e.setTextContent(U + e.getTextContent());
  }
}
function al(e, t) {
  let r = e.getTextContent();
  if (M(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    cu(n), M(n) || t.insertBefore(Ae(" "));
  }
  return r;
}
function Xm(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = ri(u, t);
    if (!f) return !1;
    const p = M(u) ? u.getTextContentSize() : 0;
    if (ip(f, r), M(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), y = Math.max(0, Math.min(d - g, h)), k = N();
      P(k) && k.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ji(e);
  if (!Bu(n, t, s, o)) return !1;
  const a = Ku(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = ri(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = ty(d, a);
    f && (ip(f, r), l = !0);
  }), ry(a, i), l;
}
function ip(e, t) {
  e.getChildren().forEach((n) => {
    Ct(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === sr) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    M(n) && i.startsWith(U) && n.setTextContent(i.slice(U.length));
  }), Mc(e);
}
function Ku(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Ym(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    M(o) && n.push(o);
  }), n;
}
function ri(e, t) {
  let r = e, n;
  for (; r && !ut(r); ) {
    if (B(r)) return;
    !n && z(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Qm(e) {
  const t = Re(
    e,
    (r) => B(r) || ut(r)
  );
  return B(t);
}
function Zm(e) {
  return e.filter(
    (t) => !zu(t) && (M(t) || L(t) && t.isInline())
  );
}
function HA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!M(i) || zu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function GA(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !ey(n, r)
  );
}
function Bu(e, t, r, n, i) {
  const s = Zm(e), o = HA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ri(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !GA(l, s, o);
  });
}
function ey(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Ct(r));
}
function ty(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (L(u) && t.some((d) => u.isParentOf(d))) {
      if (!ey(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Ct(n[s - 1]) && (s -= 1), o < n.length - 1 && Ct(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Ho(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Ho(e).append(...c)), e;
}
function Ho(e) {
  return hk(e);
}
function ry(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function JA(e, t, r) {
  if (e.isCollapsed()) {
    const l = ri(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Dd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ji(e);
  if (!Bu(n, r, i, s, t)) return !1;
  const o = Ku(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = ri(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = ty(u, o);
    d && (Dd(d, t), c = !0);
  }), c;
}
function YA(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ji(e);
  if (!!!i?.some(
    (y) => Bu(s, y, o, a)
  ) && !XA(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = N();
    P(k) && Xm(k, y, n) && (l = !0);
  });
  const u = N();
  if (!P(u)) return l;
  const d = u.isBackward(), [f, p] = ji(u), h = Ku(
    u.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (y) => !Qm(y) && !ri(y, t)
  );
  return g.length > 0 && (QA(g).forEach((y) => ZA(y, t)), l = !0), ry(h, d), l;
}
function XA(e, t) {
  return Zm(e).some(
    (r) => !Qm(r) && !ri(r, t)
  );
}
function QA(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function ZA(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => z(a) && a.getMarker() === t
  ), s = i ? Ho(i) : Yr(t);
  e[0].insertBefore(s), s.append(...e), i === r || al(e[0], s);
}
function eP(e) {
  be(e) && (cu(e.getPreviousSibling()), Rg(e.getNextSibling()));
}
const ny = {
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
}, sp = "psc-active-text", go = "psc-empty-text";
function tP({ viewOptions: e }) {
  const [t] = le(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(sp), r.current = o, o && t.getElementByKey(o)?.classList.add(sp);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        sa,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${go}`);
          if (!c) return !1;
          const l = Wi(c);
          if (!be(l)) return !1;
          const u = l.getParent();
          if (!L(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Rt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = yc(), f = rP(), p = [], h = [];
          return Fe().getChildren().forEach((g) => {
            if (!L(g)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = iP(g);
            p.push(...y), h.push(...k);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(go) : t.getElementByKey(d)?.classList.add(go);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(go));
      }),
      t.registerCommand(
        Rl,
        () => (i(void 0), !1),
        Rt
      ),
      t.registerCommand(
        gk,
        () => {
          const o = t.getEditorState().read(yc);
          return o !== r.current && i(o), !1;
        },
        Rt
      )
    ];
    return i(t.getEditorState().read(yc)), $e(...s);
  }, [t, n]), null;
}
function yc() {
  return nP(N() ?? void 0)?.getKey();
}
function rP() {
  const e = N();
  if (!P(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!L(n)) return;
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
    be(s[a]) && (o = s[a].getKey());
  return o;
}
function nP(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function iP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!be(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (be(c)) break;
      if (!(Kt(c) || R(c)) && c.getTextContent().replaceAll(vo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function cl(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function iy(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !Kp(e, n, i);
}
function sy(e, t) {
  return e.length <= t ? e : e.slice(0, ju(e, t));
}
function ju(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of Ck(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const sP = 16;
function oP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (b) => t ? Vu(b, t).length : b.getTextContent().length;
  r ??= n;
  const i = N();
  if (!P(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Go(s), l = Go(o), u = i.getNodes(), d = new Map(u.map((b) => [b.getKey(), lP(b)])), f = u.length > 0 ? d.get(u[0].getKey()) : void 0, p = f && aP(s, f) ? f : void 0, h = (b) => {
    const T = b > 0 ? cP(u, d, p, c, l, b, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), T ? i.focus.set(T.node.getKey(), T.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!T;
  };
  let g = Math.min(e, n(i));
  if (h(g) && r(i) <= e) return !0;
  let y = 0, k = 0;
  g -= 1;
  for (let b = 0; b < sP && y <= g; b++) {
    const T = Math.floor((y + g) / 2);
    h(T) && r(i) <= e ? (k = T, y = T + 1) : g = T - 1;
  }
  return h(k), !0;
}
function ll(e) {
  return e.isToken() || Xs(e) || De(e.getParent());
}
function aP(e, t) {
  const r = L(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && fr(r.getKey(), 0, "text").isBefore(e);
}
function cP(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, d;
  const f = /* @__PURE__ */ new Map(), p = (g) => {
    const y = t.get(g.getKey());
    return y && r?.is(y) ? void 0 : y;
  }, h = (g) => {
    let y = d ? d.endBefore : g;
    for (; ; ) {
      const k = uP(y, e, n);
      if (!k || !y || k.node.is(y.node)) return k;
      const b = p(k.node);
      if (!b || b.is(p(y.node))) return k;
      y = f.get(b.getKey());
    }
  };
  for (let g = 0; g <= a; g++) {
    const y = e[g], k = p(y);
    if (d && !d.node.is(k) && (u && d.node.isParentOf(u.node) && (u = d.endBefore), d = void 0), k && !d && (d = { node: k, endBefore: u }, f.set(k.getKey(), u)), !o?.(y)) {
      if (L(y) && !y.isInline()) {
        if (!l) {
          if (c + 1 > s) return h(u);
          c += 1;
        }
        l = !y.isEmpty();
        continue;
      }
      if (l = !1, M(y)) {
        const b = g === 0 ? n : 0, T = g === a ? i : y.getTextContentSize(), E = T - b, S = ll(y);
        if (S && c + E > s) return h(u);
        if (!S && c + E >= s) {
          const O = ju(y.getTextContent(), b + (s - c));
          return h({ node: y, offset: Math.max(b, O) });
        }
        c += E, u = { node: y, offset: T };
      } else if (si(y) || ii(y)) {
        const b = y.getTextContentSize();
        if (c + b > s) return h(u);
        c += b;
      }
    }
  }
  return h(u);
}
function lP(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (B(r) || Pu(r)) && (t = r);
  return t;
}
function uP(e, t, r) {
  if (!e) return e;
  const n = Re(e.node, (y) => L(y) && !y.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((y) => y.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let y = o; y <= a; y++)
    l.push(c.length), c += i[y].getTextContent();
  const u = l[s - o], d = u + e.offset, f = ju(c, d);
  if (f === d) return e;
  const p = (y) => t[0]?.is(y) ?? !1;
  if (ll(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= u) {
    const y = f - u;
    return y >= (p(e.node) ? r : 0) ? { ...e, offset: y } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((y) => y.is(h))) return;
  if (ll(h))
    return { node: h, offset: p(h) ? r : 0 };
  const g = f - l[0];
  return g >= (p(h) ? r : 0) ? { node: h, offset: g } : void 0;
}
function Vu(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, u) => {
    if (!t(l)) {
      if (L(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, M(l)) {
        const d = l.getTextContent();
        o ? a += d : a += d.slice(
          u === 0 ? Go(i) : 0,
          u === n ? Go(s) : d.length
        );
      } else (si(l) || ii(l)) && (u !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function ul(e) {
  const t = e.getParent();
  return !!t && Re(t, (r) => B(r) && !!r.getIsCollapsed()) !== null;
}
function oy(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    bt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), L(i)) for (const { node: s } of oi(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function dP(e) {
  return e.getNodes().some(
    (t) => si(t) || B(t) || be(t) || Ze(t) || Pu(t)
  );
}
function Go(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Cr = String.raw`\w-`, ay = "a-z0-9", fP = `[a-z][${ay}]*`, pP = new RegExp(
  String.raw`^\\(\+?[${Cr}]+)[ \u00A0]$`
), cy = new RegExp(String.raw`^\\(\+?[${Cr}]+)$`), hP = new RegExp(String.raw`^\\\+?[${Cr}]*\*$`), gP = new RegExp(
  String.raw`^\\(\+?[${Cr}]+)(?:[ \u00A0]|$)`
), mP = new RegExp(
  String.raw`^\\(\+?)([${Cr}]+)`
), yP = new RegExp(
  String.raw`\\\+?[${Cr}]+(?:\\?\*|[ \u00A0])`
), bP = new RegExp(
  String.raw`\\\+?[${Cr}]*$`
), kP = new RegExp(
  String.raw`^\\(${fP})( |$)`
), xP = new RegExp(
  String.raw`\\[${ay}+*]*$`,
  "i"
);
function ly(e) {
  const t = e.getParent();
  if (!B(t) || t.getIsCollapsed() !== !1 || !oh(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!R(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const Jo = "usfm:", uy = "usfmopen", dy = "usfmclosed";
function TP(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const CP = new RegExp(
  [Jo, uy, dy].map(TP).join("|")
), SP = "\uFEFF", _P = /^usfm_(.+)$/;
function vP(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function MP(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function EP(e) {
  return e.startsWith(Jo) ? MP(e.slice(Jo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function fy(e) {
  for (const t of e.classList) {
    const r = _P.exec(t);
    if (r) return r[1];
  }
}
function AP(e) {
  const t = fy(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function PP(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(Jo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(uy) && !n.contains(dy)) && fy(r) !== void 0)
      return !0;
  }
  return !1;
}
function py(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(EP(e.nodeValue ?? ""));
    return;
  }
  if (!vP(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => py(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? AP(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function NP(e) {
  if (!CP.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !PP(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => py(n, !1, r)), r.join("").replaceAll(SP, "").replaceAll(U, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function wP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ae(e, de);
  if (r === "attribute" || r === Ur || ly(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (De(o) || Se(o)) return;
  const n = t.startsWith(U) && z(e.getParent()), i = n ? t.slice(1) : t, s = (n ? U : "") + i.replace(/ (?=[ \u00A0])/g, U).replace(new RegExp("(?<=\\u00A0) ", "g"), U);
  s !== t && e.setTextContent(s);
}
function OP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function RP(e, t) {
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
function dl(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? NP(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(OP(s)) : ""),
    isInternal: RP(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const op = String.raw`\\(?:\+?[${Cr}]+\*?|\*)`, $P = new RegExp(
  String.raw`(?<=${op})\u00A0|\u00A0(?=${op})`,
  "g"
);
function Wu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace($P, " ").replaceAll(U, "~");
}
const hy = new RegExp(
  String.raw`\\c(?![${Cr}])[ \u00A0]*[^\s\\]*`,
  "g"
), gy = new RegExp(String.raw`\\id(?![${Cr}])[^\n\\]*`, "g"), qP = new RegExp(
  String.raw`^(?:${hy.source}|${gy.source})`
);
function Hu(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(hy, "").replace(gy, "");
    return qP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function fl(e) {
  if (M(e) && ae(e, de) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Be(t)) return !0;
  return !1;
}
function IP(e) {
  return fl(e.anchor.getNode()) || fl(e.focus.getNode());
}
function LP(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && fl(t.getNode());
}
function DP(e, t) {
  const n = LP(e) ? t : Wu(Hu(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function UP(e, t = !1, r = () => {
}) {
  const n = dl(e, gn()._config.namespace);
  if (!n) return !1;
  const i = N(), s = P(i) && IP(i);
  if (!s && n.isInternal || t && P(i) && Fn(i))
    return !1;
  const { text: o } = n;
  if (!o || !P(i)) return !1;
  if (e?.preventDefault(), s)
    return DP(i, o), !0;
  const a = Wu(Hu(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = gn();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Hn, void 0), u === "") return;
    const f = N();
    P(f) && f.insertText(u);
  }), !0;
}
function FP(e) {
  if (e.getTextContent() !== U) return !1;
  const t = e.getParent();
  return B(t) ? !bt(e.getPreviousSibling()) : !1;
}
function zP(e, t) {
  if (t || e.getTextContent() !== U) return "";
  const r = e.getParent();
  if (!B(r) || !bt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function KP(e) {
  const t = e.getParent();
  return (B(t) ? t.getCaller() : void 0) || xs;
}
function BP(e) {
  const t = e.getParent();
  return !t || Tn(t) === void 0;
}
function Gu(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Al(e);
  let l = "", u = !0;
  for (const d of t) {
    if (L(d) && !d.isInline()) {
      !u && BP(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, bt(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + KP(d));
    else if (M(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += FP(d) ? "" : f.replaceAll(U, " ") + zP(d, d === n);
    } else (si(d) || ii(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(U, " "));
  }
  return l;
}
function my(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function jP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => ve(r) || De(r)
    )
  );
}
function VP(e) {
  const t = N();
  if (!P(t) || t.isCollapsed()) return;
  const r = Gu(t), n = {
    "text/plain": r,
    "text/html": my(r)
  };
  if (Zs() || jP(t)) return n;
  const i = _k(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function ap(e, t, r, n) {
  const i = N();
  if (!P(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !dm();
  const s = VP(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], yy(e, t, i, s, r, n)) : !1;
}
function yy(e, t, r, n, i, s) {
  const o = cl(s);
  if (o !== void 0 && iy(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), pl(e, t, { "text/plain": sy(a, o) })) : pl(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function pl(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || Sk(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function hl(e, t) {
  const r = gu();
  if (!r?.end) return;
  const n = WP(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = xa(r);
        return i ? Gu(i) : void 0;
      },
      { editor: n.editor }
    );
}
const bc = /* @__PURE__ */ new WeakMap();
function WP(e, t) {
  const r = e.getEditorState();
  if (bc.has(r)) {
    const i = bc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = HP(r, t);
  return bc.set(r, n), n;
}
function HP(e, t) {
  const r = Mu(Su);
  if (!r) return;
  const n = Co.deserializeEditorState(e, t);
  if (!n) return;
  const i = mk({
    namespace: "markers-view-copy",
    nodes: [lt, ...xu],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    br.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function GP({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = le();
  return j(() => {
    const n = (i, s) => {
      const o = N();
      if (!P(o) || o.isCollapsed()) return !1;
      const a = hl(r, e);
      return a === void 0 ? !1 : yy(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": my(a) },
        s,
        t
      );
    };
    return $e(
      r.registerCommand(Wn, (i) => n(i, !1), we),
      r.registerCommand(ir, (i) => n(i, !0), we)
    );
  }, [r, e, t]), null;
}
const cp = /* @__PURE__ */ new WeakMap();
function JP({
  limit: e,
  viewOptions: t
}) {
  const [r] = le(), n = Z(cl(e)), i = Z(t), s = Z(!1), o = Z(void 0);
  return j(() => {
    n.current = cl(e), i.current = t, o.current?.();
  }, [e, t]), j(() => {
    let a, c;
    const l = (k) => {
      const b = n.current;
      if (b === void 0) return;
      const T = cp.get(k);
      if (k.defaultPrevented && T === void 0) return;
      const E = r.getRootElement();
      if (!E) return;
      const S = E.ownerDocument.getSelection();
      if (!S || !QP(S, E)) return;
      k.preventDefault();
      const O = sy(
        T ?? S.toString().replaceAll(U, " "),
        b
      );
      cp.set(k, O);
      const q = k.clipboardData;
      if (q) {
        if (!O) {
          T !== void 0 && q.clearData();
          return;
        }
        q.setData("text/plain", O);
      }
    }, u = (k) => {
      n.current !== void 0 && bk(k, "a", { ctrlKey: !yn, metaKey: yn }) && (e1(c?.activeElement, r.getRootElement()) || k.preventDefault());
    }, d = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, f = () => {
      const k = n.current === void 0 ? void 0 : a;
      k !== c && (d(), c = k, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = f;
    const p = (k) => (k?.preventDefault(), !0), h = (k) => {
      const b = n.current;
      if (b === void 0 || (s.current = !1, iy(r, k))) return !1;
      if (b <= 0) return p(k);
      const T = N();
      if (ia(T))
        return T.getTextContent().length + oy(T.getNodes()) <= b ? !1 : p(k);
      if (!P(T) || T.isCollapsed()) return !1;
      const E = YP(r, i.current);
      return E.$size(T) <= b ? !1 : (oP(b, E.options), T.isCollapsed() ? p(k) : (r.isEditable() || Wp(() => XP(r)), s.current = !0, !1));
    }, g = (k, b) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const T = N();
      if (!P(T) || T.isCollapsed()) return !1;
      const E = b && r.isEditable() && !dP(T);
      return pl(
        k && typeof k == "object" && "clipboardData" in k ? k : null,
        r,
        { "text/plain": Vu(T, ul) },
        E ? () => T.removeText() : void 0
      );
    }, y = $e(
      r.registerCommand(Wn, h, fe),
      r.registerCommand(ir, h, fe),
      r.registerCommand(
        Wn,
        (k) => g(k, !1),
        wr
      ),
      r.registerCommand(
        ir,
        (k) => g(k, !0),
        wr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        yk,
        (k) => n.current === void 0 ? !1 : (k?.preventDefault(), !0),
        fe
      ),
      r.registerRootListener((k) => {
        a = k?.ownerDocument ?? void 0, f();
      })
    );
    return () => {
      y(), o.current = void 0, d();
    };
  }, [r]), null;
}
function YP(e, t) {
  if (Qs(t)) {
    const n = (i) => Gu(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && hl(e, r) !== void 0) {
    const n = (i) => hl(e, r)?.length ?? Vu(i, ul).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + oy(n.getNodes()),
    options: { $isHidden: ul }
  };
}
function XP(e) {
  e.getEditorState().read(() => {
    const t = N(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!P(t) || !r) return;
    const n = lp(e, t.anchor), i = lp(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function lp(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = kk(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = L(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function QP(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const ZP = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function e1(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? ZP.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const t1 = /^\+/;
function Ju(e, t) {
  const r = t.replace(t1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function by(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function ky(e, t) {
  return by(e, t) !== void 0;
}
function gl(e, t) {
  const r = by(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Yo(e, t, r) {
  const n = L(e) ? e.getChildren().filter(R) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function r1(e, t, r, n, i) {
  const s = Ju(n, t);
  if (!s) {
    Yo(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Yo(e, "invalid", i);
}
function Ri(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (z(s)) {
      const o = s.getMarker();
      i || r1(s, o, t, r, n), Ri(s, t, r, n, i || o === "xq");
    } else if (be(s)) {
      if (i) continue;
      const o = Ju(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else B(s) ? Ri(s, s.getMarker(), r, n, i) : Se(s) || L(s) && Ri(s, t, r, n, i);
}
function n1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Ju(e, a);
    if (!c) {
      Yo(o, "unknown", r), gl(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    gl(n, l) || Yo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Fe().getChildren())
    Se(o) || (ve(o) ? (i(o, o.getMarker()), s(o) && Ri(o, void 0, e, r, !1)) : Ze(o) ? i(o, o.getMarker()) : ue(o) ? (i(o, o.getMarker()), s(o) && Ri(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && Ri(o, "p", e, r, !1));
  return r;
}
function i1(e) {
  return !!e?.includes("(basic)");
}
function s1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function xy(e, t) {
  return !e.startsWith("zpa") && e !== "c" && sl(e, t);
}
function Yu(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Ty(e, t) {
  const r = [];
  for (const n of t) {
    const i = Yu(e, n);
    i && gl(r, i);
  }
  return r;
}
function So(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: s1(e.description),
    isBasic: i1(e.description)
  };
}
function o1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function ml(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : o1(e.marker, t.marker);
}
function yl(e, t, r) {
  if (t.noteMarker) return [];
  const n = Ty(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && xy(i.marker, r)
  ).filter((i) => {
    const s = Yu(e, i.marker);
    return s !== void 0 && ky(n, s);
  }).map((i) => So(i, "paragraph")).sort(ml);
}
function a1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => xy(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => So(c, "character")).sort(ml);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => So(c, "character")),
    ...a.map((c) => So(c, "note"))
  ].sort(ml);
}
function c1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function l1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function u1(e, t, r) {
  return [
    ...c1(e, t.openCharMarkers),
    ...a1(e, t, r)
  ].sort(l1);
}
function d1(e, t, r) {
  if (t.source === "paragraph") return yl(e, t, r);
  const n = u1(e, t, r);
  return n.length > 0 ? n : yl(e, t, r);
}
function f1(e, t, r) {
  const n = yl(e, t, r), i = Ty(e, t.previousParaMarkers), s = Yu(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && ky(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const pt = "￼";
function Cy(e) {
  return e.length > 1 && e.startsWith(U) && e.charAt(1) !== pt ? e.slice(1) : e;
}
function up(e) {
  return Yl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Sy(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = br.serializeEditorState(
    {
      type: mr,
      version: gr,
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
  for (; up(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Vt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && up(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function _y(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function vy(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([u]) => u !== "closed")
  ), o = br.serializeEditorState(
    {
      type: mr,
      version: gr,
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
              ...n !== void 0 && { category: n },
              content: t
            },
            ...r
          ]
        }
      ]
    },
    i
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === qe.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function My(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = br.serializeEditorState(
    { type: mr, version: gr, content: [s, ...r] },
    n
  ).root.children;
  if (!Bl(o)) return { failure: "shape" };
  const c = Hh(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function mo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function ls(e, t) {
  bP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += pt;
}
function tr(e) {
  return e.replaceAll(U, " ");
}
function p1(e, t, r = !1) {
  if (Qs(t)) return tr(e);
  if (e === U) return " ";
  const n = r && e.startsWith(U), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(U, "~");
}
function bs(e) {
  const t = e.getTextContent();
  return zr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Xu(e, t) {
  const r = e[t];
  if (!rt(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = fa(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!R(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Ey(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Qu(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = vs(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Zu(e) {
  return !!e.getUnknownAttributes();
}
function va(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && Fl(e);
}
function ed(e, t) {
  return rt(e) ? !va(e.getMarker(), t) : B(e) || Se(e) ? !0 : Ke(e) ? Zu(e) : z(e) ? Ay(e, t) : !1;
}
function Ay(e, t) {
  if (ST(e)) return !0;
  const r = e.getMarker();
  return ux(r) || t(r) !== void 0 || h1(e) && !g1(e) ? !1 : !m1(e);
}
function h1(e) {
  const t = e.getParent();
  return t !== null && jt(t) !== void 0;
}
function g1(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function m1(e) {
  const t = e.getChildren().filter((i) => R(i) && i.getMarker() === e.getMarker()).filter(R);
  if (t.some((i) => !tn(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const Zt = "", er = "";
function dp(e) {
  return e.flatMap((t) => Be(t) ? t.getChildren() : [t]);
}
function ps(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (rt(s)) {
      const o = Xu(e, i);
      va(s.getMarker(), r) && Ey(o) ? (t.push(
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
      ), ps(dp(o), t, r), t.push(er)) : t.push(pt), i += o.length;
    } else if (Ke(s)) {
      const o = Qu(e, i);
      Zu(s) ? t.push(pt) : (t.push(
        Zt,
        "verse",
        tr(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ps(dp(o), t, r), t.push(er)), i += o.length;
    } else R(s) ? t.push(Zt, "marker", tr(s.getTextContent()), er) : sn(s) ? t.push(Zt, "unmatched", tr(s.getTextContent()), er) : ed(s, r) ? t.push(pt) : ii(s) ? t.push(" ") : M(s) ? t.push(
      tr(
        n ? Cy(bs(s)) : bs(s)
      )
    ) : z(s) ? (t.push(Zt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ps(s.getChildren(), t, r, !0), t.push(er)) : L(s) ? (t.push(Zt, s.getType()), ps(s.getChildren(), t, r), t.push(er)) : t.push(pt);
  }
}
function qr(e, t) {
  const r = [];
  return ps(e, r, t), r.join("");
}
function Ir(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Vi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function td(e) {
  return e.type ?? "";
}
function Py(e, t, r) {
  return t === "closing" ? st(e, r) : t === "selfClosing" ? st("") : je(e, r);
}
function kc(e, t) {
  const r = e[t];
  if (!(!r || td(r) !== "attribute-run"))
    return Ir(r) ?? [];
}
function Lr(e, t) {
  const r = [];
  return hs(e, r, t), r.join("");
}
function hs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = td(s);
    if (o === "ms") {
      const l = s, u = kc(e, i + 1);
      u && va(l.marker ?? "", r) ? (t.push(
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
      ), hs(u, t, r), t.push(er), i += 1) : t.push(pt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(pt);
        continue;
      }
      t.push(
        Zt,
        "verse",
        tr(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = kc(e, i + 1 + u);
      for (; d; )
        hs(d, t, r), u++, d = kc(e, i + 1 + u);
      t.push(er), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Zt,
        "marker",
        tr(
          Py(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(Zt, "char", JSON.stringify(l.unknownAttributes ?? null)), hs(Ir(s) ?? [], t, r, !0), t.push(er);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(pt);
      continue;
    }
    if (o === "unmatched") {
      t.push(Zt, "unmatched", tr(Vi(s) ?? "")), t.push(er);
      continue;
    }
    const a = Vi(s);
    if (a !== void 0) {
      t.push(tr(n ? Cy(a) : a));
      continue;
    }
    const c = Ir(s);
    c ? (t.push(Zt, o), hs(c, t, r), t.push(er)) : t.push(pt);
  }
}
function Sn(e) {
  let t = 0;
  for (const r of e) {
    const n = Ir(r);
    if (n) {
      t += Sn(n);
      continue;
    }
    const i = Vi(r);
    if (i !== void 0)
      for (const s of i) s === pt && t++;
  }
  return t;
}
function $s(e, t, r, n, i) {
  _n(e.getChildren(), t, r, n, i);
}
function _n(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (R(a))
      mo(t, a, tr(a.getTextContent()));
    else if (rt(a)) {
      s();
      const c = Xu(e, o);
      va(a.getMarker(), r) && Ey(c) ? _n(c, t, r, n) : ls(t, [a, ...c]), o += c.length;
    } else if (B(a) || Se(a))
      s(), ls(t, [a]);
    else if (Ke(a)) {
      s();
      const c = Qu(e, o);
      Zu(a) ? ls(t, [a, ...c]) : (mo(t, a, tr(bs(a))), _n(c, t, r, n)), o += c.length;
    } else if (z(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && Ay(a, r) ? ls(t, [a]) : $s(a, t, r, n, { pending: !0 });
    else if (ii(a))
      s(), mo(t, a, " ");
    else if (M(a)) {
      const c = zr(a) || ae(a, de) === "attribute", l = s() && !c;
      mo(
        t,
        a,
        c ? tr(bs(a)) : p1(bs(a), n, l)
      );
    } else L(a) ? $s(a, t, r, n, i) : (s(), ls(t, [a]));
  }
}
function Ny(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Se(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return $s(e, i, t, r), i;
}
function Ma(e, t, r, n) {
  for (const i of t) {
    const s = Ny(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Ea(e, t) {
  let r = 0;
  const n = (i) => {
    if (M(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(pt);
        if (a < 0) break;
        let c = s, l;
        a > 0 && ([, c] = s.splitText(a)), c.getTextContent().length > 1 && ([c, l] = c.splitText(1));
        const u = t[r++];
        if (u && u.length > 0) {
          let d = c;
          for (const f of u)
            d.insertAfter(f), d = f;
        }
        c.remove(), s = l;
      }
    } else L(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function qs(e, t = []) {
  for (const r of e)
    Ke(r) ? t.push(r) : L(r) && qs(r.getChildren(), t);
  return t;
}
function Aa(e) {
  let t = 0;
  const r = (n) => {
    if (M(n))
      for (const i of n.getTextContent()) i === pt && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function on(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === pt && t++;
    else r.content && (t += on(r.content));
  return t;
}
function y1(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), L(s) && $s(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const Is = /\s/;
function wy(e) {
  return e.filter(Pa).length;
}
function Pa(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return M(t) && !R(t) && ae(t, de) === "attribute";
}
function b1(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return R(t) || Pa(e);
}
function fp(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Pa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      Is.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function k1(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !L(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = ne(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function Na(e, t, r, n) {
  const { key: i, offset: s } = k1(
    e,
    t,
    r,
    n
  ), o = fp(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !b1(a) ? fp(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: wy(t.spans) };
}
function xc(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return R(t) && t.getMarkerSyntax() !== "opening";
}
function x1(e) {
  const t = ne(e.key);
  if (!R(t)) return !1;
  const r = t.getParent();
  return z(r) ? (r.selectNext(0, 0), !0) : !1;
}
function T1(e) {
  const t = ne(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Ke(t) ? Qu(r, n) : rt(t) ? Xu(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Oy(e, t, r) {
  const { text: n, spans: i } = e, s = wy(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !xc(d);
    if (!(o && Pa(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let h = 0; h < f; h++) {
        const g = n[d.start + h];
        if (c === 0 && (l === 0 || !Is.test(g))) {
          if (p) {
            a = { key: d.key, offset: h };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? Is.test(g) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (p) {
          a = { key: d.key, offset: f };
          break;
        }
        u = !0;
      }
    }
  }
  if (!a) {
    const d = i[i.length - 1];
    if (d && xc(d) && x1(d) || d?.isSentinel && T1(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !xc(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = ne(a.key);
    if (d && M(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function Ry(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    Oy(
      y1(e, n, i, s),
      t,
      e
    );
  }
}
function $y(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    C1(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  _n(e, o, n, i), Oy({ text: o.text, spans: o.spans }, t, e);
}
function C1(e, t) {
  const r = e.find(L);
  if (r && ed(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function qy(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Ma(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (P(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Na(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = Dr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (on(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = br.serializeEditorState(
    { type: mr, version: gr, content: l },
    r
  );
  if (Lr(u.root.children, n) === qr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => Kn(g));
  if (Aa(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = qs(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), Ea(d, s.sentinels), e.forEach((g) => g.remove());
  const h = qs(d);
  for (let g = 0; g < f.length && g < h.length; g++)
    h[g].getNumber() === f[g].number && h[g].setSid(f[g].sid);
  return Ry(
    d,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((g) => g.getKey()))
  ), !0;
}
function Iy(e) {
  if (e.getIsCollapsed() !== !1 || !qe.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!R(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(bt(n) || M(n) && n.getTextContent() === Vt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!R(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function Ly(e, t, r) {
  const n = Iy(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return _n(n, i, t, r), { out: i, contentNodes: n };
}
function Dy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(pt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function S1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Ly(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = N();
  if (P(u)) {
    for (let O = u.anchor.getNode(); O; O = O.getParent())
      if (e.is(O)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Na(
      [e],
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const d = Dr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (on(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], h = Dy(p), g = _y(e, p);
  if (g)
    return _1(
      e,
      g,
      h,
      o.sentinels,
      t,
      l
    );
  const y = Sy(e, p, h, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Sn(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== h;
  if (k && e.setCategory(h), Lr(y.children, n) === qr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const b = y.children.map((O) => Kn(O));
  if (Aa(b) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const T = a[0];
  if (T)
    b.forEach((O) => T.insertBefore(O));
  else {
    const O = e.getChildren().find((q) => R(q) && q.getMarkerSyntax() === "closing");
    b.forEach((q) => O ? O.insertBefore(q) : e.append(q));
  }
  Ea(b, o.sentinels);
  const E = new Set(o.sentinels.flat().map((O) => O.getKey()));
  a.forEach((O) => {
    E.has(O.getKey()) || O.remove();
  });
  const S = Iy(e) ?? b;
  return $y(
    S,
    c,
    l,
    n,
    r,
    E
  ), !0;
}
function _1(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = vy(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || Sn(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => Kn(h)), [d] = u;
  if (!B(d) || Aa(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const h of u)
    f.insertAfter(h), f = h;
  Ea(u, i);
  const p = e.getChildren();
  return e.append(...d.getChildren()), p.forEach((h) => h.remove()), e.setCaller(d.getCaller()).setCategory(d.getCategory()).setUnknownAttributes(d.getUnknownAttributes()).setIsCollapsed(d.getIsCollapsed()), d.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Vc(e, a) : zg(e, { isContentChange: !0 })), !0;
}
function Uy(e) {
  const t = e.getChildren();
  return Gl(t[0]) ? t.slice(1) : t;
}
function rd(e, t, r) {
  const n = Uy(e), i = { text: "", spans: [], sentinels: [] };
  return _n(n, i, t, r), { out: i, contentNodes: n };
}
const v1 = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${rr}(?=[\\s\\u200B\\\\|]|$)`
);
function Fy(e, t) {
  const r = Dr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === rr && !v1.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function zy(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = rd(e, i, n);
  if (!Ma(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, u = !1;
  const d = N();
  if (P(d)) {
    for (let q = d.anchor.getNode(); q; q = q.getParent())
      if (c.some((K) => K.is(q))) {
        u = !0;
        break;
      }
    d.isCollapsed() && (l = Na(
      c,
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const f = Fy(o.text, i);
  if (on(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = My(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const h = [...p.children, ...p.followingBlocks];
  if (Sn(h) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && Lr(p.followingBlocks, i) === qr(r, i) && Lr(p.children, i) === qr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map((q) => Kn(q)), y = p.followingBlocks.map((q) => Kn(q)), k = [...g, ...y];
  if (Aa(k) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const b = qs([...a, ...r]).map((q) => ({
    number: q.getNumber(),
    sid: q.getSid()
  })), T = a[0];
  T ? g.forEach((q) => T.insertBefore(q)) : g.forEach((q) => e.append(q)), y.reduce((q, K) => q.insertAfter(K), e), Ea(k, o.sentinels);
  const E = new Set(o.sentinels.flat().map((q) => q.getKey()));
  a.forEach((q) => {
    E.has(q.getKey()) || q.remove();
  }), r.forEach((q) => q.remove());
  const S = [...Uy(e), ...y], O = qs(S);
  for (let q = 0; q < b.length && q < O.length; q++)
    O[q].getNumber() === b[q].number && O[q].setSid(b[q].sid);
  return $y(
    S,
    l,
    u,
    i,
    n,
    E
  ), !0;
}
const Ky = /* @__PURE__ */ new Set(["ca", "cp"]), nd = "cp";
function By(e) {
  if (!$r(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if ($s(e, t, Or, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Dr(r, { getMarker: Or }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === nd)
  );
}
function wa(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (z(r) && Ky.has(r.getMarker()) || By(r)) {
      t.push(r);
      continue;
    }
    ue(r) && r.getMarker() === nd && t.push(r);
    break;
  }
  return t;
}
function M1(e) {
  const t = (n) => z(n) && Ky.has(n.getMarker()) || By(n);
  if (t(e) || ue(e) && e.getMarker() === nd)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (De(n)) return n;
      if (!t(n)) return;
    }
}
function jy(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = wa(e);
  if (n.some((s) => ue(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (_n(e.getChildren(), i, t, r), _n(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function E1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...wa(e)], o = jy(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = N();
  if (P(l)) {
    for (let h = l.anchor.getNode(); h; h = h.getParent())
      if (s.some((g) => g.is(h))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Na(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const u = Dr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (on(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = br.serializeEditorState(
    { type: mr, version: gr, content: u },
    r
  );
  if (Lr(f.root.children, n) === qr(s, n)) {
    let h = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), h = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), h = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => Kn(h));
  return De(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), Ry(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Ls(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Se(n)) return;
    !t && (B(n) || ue(n) || De(n) || ve(n)) && (t = n), wl(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? M1(r) : void 0) ?? t;
}
function dr(e, t) {
  const r = Ls(e);
  return r ? B(r) ? S1(r, t) : De(r) ? E1(r, t) : ve(r) ? zy(r, t) : qy([r], t) : !1;
}
const A1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function pp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !A1.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function _o(e, t) {
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
          t.push(`\\${n}`), pp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), _o(r.content, t), pp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), _o(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), _o(r.content, t);
      }
    }
}
function hp(e, t, r) {
  const n = Ls(e);
  if (!Pe(n)) return !1;
  const i = N();
  if (!P(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = ve(n) ? rd(n, t, r).out : Ny(n, t, r);
  if (!o) return !1;
  const a = Dr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    Is.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  _o(a, l);
  for (const u of l.join("").replaceAll(U, "~")) {
    if (Is.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function id(e, t) {
  return Vy(e, t, x.Paragraph);
}
function P1(e, t) {
  return Vy(e, t, x.Character);
}
function Vy(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !(qe.isValidMarker(n) || Fl(n));
}
function N1(e) {
  return [yt(e), Hs()];
}
function sd(e) {
  or(e, 2);
}
function w1(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Oa(e) {
  const t = w1(e);
  e.splice(0, 0, N1(e.getMarker())), t && sd(e);
}
function Xo(e, t) {
  e.setMarker(t), Oa(e), sd(e);
}
function O1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!zr(n)) {
    if (M(n) && !R(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(U), Nt(n, de, Ur), n.setMode("token");
      return;
    }
    if (Xh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Hs());
  }
}
function gp(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : L(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function ks(e) {
  for (let t = e; t; t = t.getParent())
    if (ue(t)) return t;
}
function R1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = ks(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = ks(r.getNode())?.is(s) ?? !1, a = ks(n.getNode())?.is(s) ?? !1;
    return !(o && !gp(r, s, "start") || a && !gp(n, s, "end"));
  });
}
function bl(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of R1(r)) t.add(n.getKey());
}
function $1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!P(r) || !r.isCollapsed()) return;
  const n = ks(r.focus.getNode());
  n && t.add(n.getKey());
}
function q1(e) {
  const t = N();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => R(r)) && (bl(e), t.removeText());
}
const I1 = new RegExp(
  String.raw`^\\\+?([${Cr}]+)(?:[ \u00A0]|$)`
);
function L1(e, t) {
  const r = I1.exec(e.getTextContent());
  return !!r && id(r[1], t);
}
function D1(e, t) {
  if (!ui(t.viewOptions)) return;
  if (Ct(e.getFirstChild())) {
    O1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (L1(e, t.getMarker)) return;
    Oa(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ue(o) && !o.is(e))) {
      Xo(e, rr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (Pe(r)) {
    const n = e.getChildren().filter((a) => !zr(a)), i = N();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ks(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && or(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Xo(e, rr);
}
function U1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Pr(t, aa(e.getMarker()));
  return r === "" ? void 0 : r;
}
function Wy(e) {
  const t = e.getChildren().filter((s) => !R(s) && ae(s, de) !== "attribute"), r = t[0];
  r && M(r) && r.getTextContent().startsWith(U) && r.setTextContent(r.getTextContent().slice(1));
  const n = U1(e);
  n && t.push(Ae(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function F1(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && L(t) ? r = t.getChildAtIndex(e.offset) : R(t) && e.offset === 0 ? r = t : M(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), z(r) && (r = r.getFirstChild()), !R(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!z(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function z1() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = F1(e.anchor), r = t?.getParent();
  if (!t || !z(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), Gi(n) && n.getTextContent().startsWith(U) && n.setTextContent(` ${n.getTextContent().slice(U.length)}`), Wy(r), M(n) && n.isAttached() && n.select(0, 0), !0;
}
function K1(e, t) {
  const r = e.getChildren(), n = r.some((s) => R(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => M(c) && !R(c) && c.getTextContent() === Vt(s)
    ), a = oi(e).some(({ node: c }) => R(c));
    if (!o && !a) return;
    r.forEach((c) => {
      R(c) || (M(c) && c.getTextContent() === Vt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => R(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function B1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(R(r) && r.getMarkerSyntax() === "opening")) {
    Wy(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => R(o) && o.getMarkerSyntax() === "closing");
  i && !s && dr(e, t);
}
function Hy(e, t, r) {
  if (!R(e.getFirstChild()) && r?.markerMode === "editable" && ui(r)) {
    Xo(e, t);
    return;
  }
  Xg(e, t);
}
function Gy() {
  const e = N();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Jy(e);
    return t !== "removed" ? t : (kl(), "handled");
  }
  return kl() ? "handled" : "declined";
}
function j1(e, t) {
  if (!t) return e;
  const r = kP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function mp(e, t) {
  const r = N();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Yy())
      return "declined";
  } else {
    const s = Jy(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => j1(s, t)
  );
  yp(n ?? "");
  for (const s of i)
    kl(), yp(s);
  return "handled";
}
function V1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Wi(n);
  if (!i) return !1;
  const s = jt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !M(i) || R(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Jy(e) {
  const t = jt(e.anchor.getNode()), r = jt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), W1() ? "removed" : "needs-plain-split");
}
function yp(e) {
  if (e === "") return;
  const t = N();
  P(t) && t.insertText(e);
}
function W1() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = jt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => R(r) && r.getMarkerSyntax() === "opening");
}
function Yy() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = jt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function kl() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Yy();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Yr("fp", { closed: "false" });
  i.append(yt("fp"));
  const s = M(t) && !R(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Di(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (hT(u), i.append(u));
  }
  return i.getChildren().every(R) && i.append(Ae(sr)), Xy(i), !0;
}
function Xy(e) {
  const t = e.getChildren().find((r) => !R(r));
  if (M(t)) {
    const r = pa(t);
    t.select(r, r);
    return;
  }
  if (L(t)) {
    Xy(t);
    return;
  }
  e.selectEnd();
}
function H1(e) {
  const t = [];
  let r = e;
  for (; r; )
    z(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function G1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Fe().getChildren()) {
    if (t && n.is(t)) {
      ve(n) && r.push(n.getMarker());
      break;
    }
    (ve(n) || Ze(n) || ue(n)) && r.push(n.getMarker());
  }
  return r;
}
function J1(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function Y1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ct(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && zr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(J1(i)) && r === 0 : !1;
}
function X1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ct(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && zr(i) && t.is(i) && r === 0;
}
function Q1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function Z1() {
  const e = N();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Re(t, ue), s = i ? void 0 : Re(t, ve), o = !n && !s && (!i || X1(i, t, r)) ? "paragraph" : "character", a = jt(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: G1(t),
    openCharMarkers: H1(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: su(t, r),
    anchorRect: Q1()
  };
}
function e0() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!M(t) || R(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = xP.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function t0(e, t, r) {
  Hy(e, t, r), sd(e);
}
function r0(e, t, r) {
  const n = N();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = Re(i, ue);
  if (t === "backslash" && s && Y1(s, i, n.focus.offset)) {
    t0(s, e, r);
    return;
  }
  xl(e, r);
}
function Qy(e, t) {
  const r = e.getNode(), n = Bm(L(r) ? r : r.getParent());
  return t.is(n);
}
function n0(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !Qy(e, t);
}
function Qo(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function i0(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!R(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!z(r)) return e;
  const n = r.getParent();
  return n ? fr(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function s0(e, t, r) {
  const n = N();
  if (!P(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!Qy(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && n0(s, e)) return !1;
  const o = Gl(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (Qo(n.anchor, e, o), Qo(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = N();
  if (!P(a) || !a.isCollapsed()) return !1;
  const c = Wm(a);
  if (!c) return !1;
  const { parent: l, moving: u } = Vm(
    i0(c.anchor)
  );
  if (!e.is(l)) return !1;
  const d = u.filter((h) => !h.is(o)), f = qi(t);
  e.insertAfter(f), f.append(...d);
  const [p] = d;
  return z(p) ? ga(p) : f.select(0, 0), ui(r) && Oa(f), !0;
}
function o0(e, t) {
  const r = N();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Zy(e) {
  const t = N();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function a0(e) {
  const t = Re(e.anchor.getNode(), ve);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !Gl(r) || (Qo(e.anchor, t, r), Qo(e.focus, t, r));
}
function c0(e, t, r, n) {
  const i = N();
  if (P(i) ? a0(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && e0(), e.kind === "closeTag") {
    Zy(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Gy() !== "declined") return;
  if (e.kind === "paragraph" && dt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    r0(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (qe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Jm(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  ol(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: gn(), reference: r });
}
function xl(e, t) {
  const r = N();
  if (!P(r)) return !1;
  ou(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!Re(n, ue)) {
    const o = Re(n, ve);
    if (o) return s0(o, e, t);
  }
  const i = ui(t);
  if (Hm()) {
    const o = N();
    if (!P(o)) return !1;
    const a = Re(o.anchor.getNode(), ue);
    return a ? (a.setMarker(e), i && Oa(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return ue(s) ? (i ? Xo(s, e) : s.setMarker(e), !0) : !1;
}
function l0() {
  const [e] = le();
  return j(() => e.registerCommand(Jp, () => !0, Rt), [e]), null;
}
function u0(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = gP.exec(e)?.[1];
  return r === void 0 ? !1 : !id(r, t);
}
function eb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !u0(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ue(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!ue(i) && !ve(i)))
    return [i, r];
}
function tb(e, t) {
  const r = eb(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return ve(n) ? zy(n, t, [i]) : qy([n, i], t);
}
function d0(e, t) {
  const r = N();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function rb(e) {
  const t = mP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function f0(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = rb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function p0(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (B(e.getParent()) && M(r)) {
    const n = r.getNextSibling();
    if (z(n)) {
      ga(n);
      return;
    }
  }
  M(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function bp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = rb(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  p0(e);
}
function kp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function nb(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return dr(e, r);
  const n = f0(e), i = e.getParent();
  if (ue(i)) {
    if (!id(t, r.getMarker))
      return tb(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : dr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), kp(s, t) && bp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (z(i) || B(i)) {
    const s = t.replace(/^\+/, "");
    if (!(z(i) ? P1(t, r.getMarker) : qe.isValidMarker(s)))
      return dr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return dr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(R).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (d0(c, st(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), kp(a, s) && bp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return dr(e, r);
}
function h0(e) {
  const t = N();
  if (!P(t)) return !1;
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
function g0(e, t) {
  const r = e.getTextContent();
  if (tn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Be(e.getParent()) && Xl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !h0(e)) {
    TT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = pP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), nb(e, n[1], t);
      return;
    }
    if (hP.test(r)) {
      t.pendingKeys.delete(e.getKey()), dr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = st(e.getMarker(), e.getNested());
    if ((z(n) || B(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = N(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Ae(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function m0(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (yg(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function ib(e) {
  if (!oh(e)?.length)
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
const us = ib("v"), y0 = ib("c"), xp = /^[ \u00A0]*$/;
function Tl(e, t, r) {
  const n = e.getNextSibling();
  if (M(n) && n.getType() === Qe.getType() && n.getMode() === "normal" && ae(n, de) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = Ae(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function b0(e, t) {
  const r = e.getTextContent(), n = nr("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (us.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = us.valueAndRest.exec(c);
    if (l && xp.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (us.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = us.valueAndRest.exec(r);
  if (!s) {
    const c = us.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = N(), p = P(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(nr("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      Tl(e, d, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), dr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), xp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(nr("v", o)), a && Tl(e, a, a.length);
}
const k0 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function x0(e, t) {
  if (!ly(e)) return !1;
  const r = e.getParent();
  if (!B(r)) return !1;
  const n = e.getTextContent();
  if (n === Vt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = k0.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = N(), c = P(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Vt(s)), o) {
    const l = n.length - o.length, u = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const d = Tl(e, o, u);
    d.isUnmergeable() || d.toggleUnmergeable();
  }
  return !0;
}
function T0(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!M(t)) return;
  const r = nr("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = y0.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function sb(e) {
  if (rt(e)) {
    const { wrapper: t } = fa(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (B(e)) {
    const { wrapper: t } = Ql(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (De(e)) {
    const t = [], r = ng(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = sg(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Ke(e)) {
    const t = [], r = vs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = vs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function C0(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return sb(e).some((n) => r.is(n));
}
function S0(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ue(e) && Xh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ms)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ys(l, e) && (i || C0(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of sb(e))
    l.remove(), n = !0;
  let s = !1;
  if (z(e)) {
    const l = MT(e);
    l !== void 0 && ox(l) && (lg(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Ms)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (TC(l, e)) {
        As(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Mg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      ma(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Tp(e) {
  return M(e) && e.getType() === Qe.getType() && e.getMode() === "normal" && ae(e, de) !== "attribute";
}
function _0(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ne(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Tp(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Tp(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function yo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = _0(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ne(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (R(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (tn(c)) continue;
      const h = cy.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = nb(c, h[1], e) || n : r === "idle" && hp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : tb(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = dr(c, e) || n;
      continue;
    }
    const l = Qn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = S0(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && hp(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = dr(u, e) || n;
    }
  }
  return n;
}
function ob(e) {
  if (sn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (z(t)) return gs(t) !== void 0;
  return !1;
}
function v0(e) {
  const t = Qn(e);
  if (!t) return !1;
  const r = Xn(t.kind);
  return !ma(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Cp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Se(t) || xg(t)) return !0;
  return !1;
}
function M0(e, t) {
  const r = e.getTextContent(), n = ae(e, de), i = e.getParent();
  if (n !== "attribute" && De(i)) {
    r.replace(/^[ \u00A0]+/, "") === nr("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (x0(e, t)) return;
  if (n === "attribute") {
    v0(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && ob(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Cp(e))
      t.pendingKeys.add(e.getKey());
    else if (og(e)) t.pendingKeys.add(e.getKey());
    else if (De(Ls(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      z(a) && ug(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Cp(e)) return;
  const s = N(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (yP.test(o)) {
    if (gx(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), dr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function E0(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Mg(e, t);
}
function A0(e) {
  const t = (r) => {
    if (R(r)) {
      tn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (sn(r)) {
      yg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Ms)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ys(n, r) || E0(n, r)) && e.pendingKeys.add(r.getKey());
    if (Ke(r)) {
      r.getTextContent() !== nr("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (M(r)) {
      if (r.getType() !== Qe.getType() || ae(r, de) === "attribute") return;
      const n = r.getParent();
      if (De(n)) {
        r.getTextContent() !== nr("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && ob(r) || i.includes("//") || og(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (z(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Se(r)) {
      if (Be(r) && r.getChildrenSize() === 0) {
        const n = Qn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Fe().getChildren().forEach(t);
}
const ab = Yp(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Tc(e) {
  const t = e();
  return Pt(Pl), Pt(lh), t;
}
const Sp = 8, P0 = 1e3;
function Mi(e, t) {
  const r = Ke(e) ? ["va", "vp"] : rt(e) ? ["milestone"] : B(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    MC(Xn(n), e, t.pendingKeys);
}
function N0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has($l) || i.updateTags.has(Ts)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ne(o);
        if (!c) continue;
        const l = Qn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ne(o.getKey());
        c?.isAttached() && Xn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return $e(
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
    e.registerMutationListener(Qe, r),
    e.registerMutationListener(Kr, r),
    e.registerMutationListener(Zr, r),
    e.registerMutationListener(en, r)
  );
}
function Cl(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = N();
  return r ? t ? Lu(r, t) : P(r) && Fn(r) : !1;
}
function w0(e, t, r) {
  return $e(
    e.registerCommand(
      Ft,
      (n) => {
        if (Zs() || Cl(t)) return !1;
        const i = dl(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Wu(Hu(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = mp(o, t.getMarker);
          if (a === "declined" && V1(e) && (a = mp(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      fe
    ),
    e.registerCommand(
      Ft,
      (n) => {
        const i = dl(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !qA()) return !1;
        const o = N();
        return t.structureProtectionMode === "protected" && P(o) && Fn(o) ? !1 : (n?.preventDefault(), P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Hn, void 0), a === "") return;
          const l = N();
          P(l) && l.insertText(a);
        }), !0);
      },
      we
    ),
    e.registerCommand(
      Ft,
      () => (t.splitExpected.current = !0, !1),
      Rt
    )
  );
}
function O0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = le(), a = e?.markerMode === "editable", c = !!e && Qs(e), l = Z(void 0), u = Z(n), d = Z(s);
  return j(() => {
    u.current = n, d.current = s;
    const f = l.current;
    f && (e && (f.viewOptions = e), f.getMarker = t ?? Or, f.logger = r, f.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), j(() => {
    if (!a || !e) return;
    const f = {
      viewOptions: e,
      getMarker: t ?? Or,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = f;
    const p = yC(o, f.pendingKeys);
    let h, g = !1, y, k = !1, b = !1, T = 0;
    const E = () => T < Sp ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Sp} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), S = (_, W = "departure") => {
      o.update(() => {
        T = Tc(
          () => yo(f, _, W)
        ) ? T + 1 : 0;
      });
    };
    let O;
    const q = () => {
      if (O !== void 0 && clearTimeout(O), O = void 0, b || f.pendingKeys.size === 0) return;
      const _ = u.current ?? P0;
      _ < 0 || (O = setTimeout(() => {
        O = void 0, !(b || f.pendingKeys.size === 0) && (g || E() || S(void 0, "idle"));
      }, _));
    }, K = $e(
      o.registerNodeTransform(Kr, (_) => {
        if (o.isComposing()) return;
        g0(_, f);
        const W = Qn(_);
        W && (Ke(W.owner) || B(W.owner) || De(W.owner) || rt(W.owner) && fa(W.owner).wrapper === void 0) && Mi(W.owner, f);
      }),
      o.registerNodeTransform(xt, (_) => {
        o.isComposing() || (b0(_, f), Mi(_, f));
      }),
      o.registerNodeTransform(Ht, (_) => {
        o.isComposing() || (T0(_), _.isAttached() && Mi(_, f));
      }),
      o.registerNodeTransform(dt, (_) => {
        o.isComposing() || D1(_, f);
      }),
      o.registerNodeTransform(_e, (_) => {
        if (!o.isComposing()) {
          B1(_, f);
          for (const W of ["separator", "char"])
            _.isAttached() && Ys(Xn(W), _) && f.pendingKeys.add(_.getKey());
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
      o.registerNodeTransform(yr, (_) => {
        o.isComposing() || Mi(_, f);
      }),
      o.registerNodeTransform(en, (_) => {
        if (o.isComposing()) return;
        const W = Qn(_);
        W && (rt(W.owner) || Ke(W.owner) || B(W.owner) || De(W.owner)) && Mi(W.owner, f);
      }),
      o.registerNodeTransform(qe, (_) => {
        o.isComposing() || (K1(_, f), Mi(_, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(nn, (_) => {
        o.isComposing() || m0(_, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(Qe, (_) => {
        o.isComposing() || M0(_, f);
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
        Qe,
        (_) => {
          o.getEditorState().read(() => {
            for (const [W, J] of _) {
              if (J === "destroyed") continue;
              const pe = ne(W);
              !pe || ae(pe, de) !== "attribute" || Be(pe.getParent()) || o.getElementByKey(W)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      N0(o, f),
      ...c ? [
        o.registerNodeTransform(Qe, (_) => {
          o.isComposing() || wP(_);
        }),
        o.registerCommand(
          Wn,
          (_) => ap(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
            o,
            !1,
            d.current
          ),
          we
        ),
        o.registerCommand(
          ir,
          (_) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            ap(
              _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
              o,
              !0,
              d.current
            )
          ),
          we
        ),
        o.registerCommand(
          Ft,
          (_) => UP(
            // Same jsdom-safe duck-check as COPY above.
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
            f.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              f.splitExpected.current = !0;
            }
          ),
          we
        )
      ] : [],
      o.registerCommand(
        ir,
        () => (!Cl(f) && !Zs() && bl(f), !1),
        fe
      ),
      o.registerCommand(
        Vn,
        () => (o.isComposing() || q1(f), !1),
        wr
      ),
      o.registerCommand(
        Ar,
        (_) => _ || o.isComposing() ? !1 : z1(),
        wr
      ),
      o.registerCommand(
        sa,
        () => (g = !1, T = 0, q(), !1),
        Rt
      ),
      o.registerCommand(
        xr,
        (_) => (g = !1, T = 0, q(), (_.key === "Backspace" || _.key === "Delete") && !Cl(f, Iu(_)) && (bl(f), $1(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !_.ctrlKey || _.altKey || _.shiftKey || _.metaKey || _.key !== " " && _.code !== "Space" || !$A() ? !1 : (_.preventDefault(), !0)),
        we
      ),
      o.registerCommand(
        Hp,
        (_) => {
          const W = Gy();
          W === "needs-plain-split" && o.dispatchCommand(Hn, void 0);
          const J = W !== "declined" || EC();
          return J && _?.preventDefault(), yo(f), J;
        },
        we
      ),
      o.registerCommand(
        Hn,
        () => (f.splitExpected.current = !0, Hm()),
        we
      ),
      w0(o, f, c),
      o.registerCommand(
        ab,
        () => {
          if (g) return !0;
          const _ = o.getRootElement(), W = _?.ownerDocument, J = !!_ && !!W && W.hasFocus() && _.contains(W.activeElement);
          let pe;
          if (J) {
            const D = N();
            pe = P(D) ? D.focus.key : h;
          }
          return Tc(() => yo(f, pe)), !0;
        },
        Rt
      ),
      o.registerCommand(
        Rl,
        () => {
          if (g) return !1;
          const _ = N(), W = P(_) ? _.focus.key : h;
          return Tc(() => yo(f, W)), !1;
        },
        Rt
      ),
      o.registerUpdateListener(({ editorState: _, tags: W }) => {
        f.splitExpected.current = !1, f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear(), f.rebuildAttempted.clear();
        const J = _.read(() => {
          const D = N();
          return P(D) ? D.focus.key : void 0;
        }), pe = y;
        if (J !== void 0 && (y = J), W.has($l)) {
          f.pendingKeys.clear(), _.read(() => A0(f)), g = !0, J !== void 0 && (h = J);
          return;
        }
        if (W.has(wt)) {
          J !== void 0 && J !== pe && (g = !0);
          return;
        }
        g || (J !== void 0 && (h = J), q(), !(k || J === void 0) && [...f.pendingKeys].some((D) => D !== J) && (k = !0, queueMicrotask(() => {
          k = !1, !b && (E() || S(h));
        })));
      })
    );
    return () => {
      b = !0, O !== void 0 && clearTimeout(O), O = void 0, p(), K(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const R0 = ["status_unknown", "status_invalid"], cb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, $0 = Object.values(cb);
function q0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = cb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function _p(e) {
  e.classList.remove(...R0), e.removeAttribute("aria-description"), $0.includes(e.title) && e.removeAttribute("title");
}
function I0(e, t, r, n) {
  const i = (a) => a.read(() => Fe().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = ne(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function L0(e) {
  const t = ne(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : R(t) && t.getParent()?.getKey() === r.getKey();
}
function D0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? $o;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = n1(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || L0(f)) continue;
            const h = ne(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && _p(p);
        }
        for (const [f, p] of d) {
          const h = n.getElementByKey(f);
          h && q0(h, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          I0(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && _p(u);
      }
    };
  }, [n, i, t, r]), null;
}
function lb(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Ir(o);
    a && L(s) && lb(s.getChildren(), a, r);
  }
}
function Ds(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = Ir(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Vi(a);
      if (l === void 0 || !l.includes(pt)) continue;
      const u = l.split(pt), d = [];
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (f > 0 && d.push(...t[n++] ?? []), p.length > 0) {
          const h = {
            ...a,
            text: p
          };
          d.push(h);
        }
      }
      s.splice(o, 1, ...d), o += d.length - 1;
    }
  };
  return i(e), n;
}
function Zo(e, t, r) {
  const n = [];
  for (const i of e.sentinels) {
    const s = [];
    for (const o of i) {
      if (r.has(o.getKey())) continue;
      const a = t.get(o.getKey());
      if (!a) return;
      s.push(a.node);
    }
    n.push(s);
  }
  return n;
}
function ub(e, t) {
  const r = [];
  for (const n of e)
    ed(n, t) || ((ue(n) || z(n)) && r.push(n.getMarker()), L(n) && r.push(...ub(n.getChildren(), t)));
  return r;
}
function db(e) {
  const t = [];
  for (const r of e) {
    const n = td(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Ir(r);
    i && t.push(...db(i));
  }
  return t;
}
function Us(e, t, r) {
  const n = ub(e, r), i = db(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function U0(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = N();
  let n, i;
  if (P(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = ne(t.key), i = t.offset;
  else
    return;
  if (!(!M(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Ra(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function F0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Ma(c, e, o, s)) return;
  const l = i ? Ra(c, i) : c.text, u = Dr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (on(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = br.serializeEditorState(
    { type: mr, version: gr, content: u },
    s
  ).root.children;
  if (Sn(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Zo(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Lr(d, o) === qr(e, o) && Us(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Ds(d, f);
  const h = fb(e), g = od(d);
  for (let y = 0; y < h.length && y < g.length; y++)
    h[y].sid !== void 0 && g[y].number === h[y].number && (g[y].sid = h[y].sid);
  return d;
}
function fb(e) {
  const t = [], r = (n) => {
    Ke(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function od(e) {
  const t = [];
  for (const r of e) {
    Fh(r) && t.push(r);
    const n = Ir(r);
    n && t.push(...od(n));
  }
  return t;
}
function z0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Ly(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Ra(l, i) : l.text, f = Dr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (on(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], g = Dy(h), y = e.getCategory() !== g, k = _y(e, h);
  if (k) {
    const S = vy(
      e,
      k.before,
      k.after,
      g,
      s
    );
    if (!S || Sn(S) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const O = Zo(l, t, n);
    return O ? (Ds(S, O), {
      rebuilt: void 0,
      contentNodes: u,
      category: g,
      categoryChanged: !1,
      closedAs: S
    }) : void 0;
  }
  const b = Sy(e, h, g, s);
  if (b.failure !== void 0) {
    b.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : b.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const T = b.children;
  if (Sn(T) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const E = Zo(l, t, n);
  if (!E) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Lr(T, o) === qr(u, o) && Us(u, T, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Ds(T, E), { rebuilt: T, contentNodes: u, category: g, categoryChanged: y };
}
function vp(e) {
  return e.$?.textType;
}
function K0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && vp(e) === vp(t);
}
function B0(e) {
  const t = [];
  for (const r of e) {
    const n = ne(r);
    n?.isAttached() && Se(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function j0(e) {
  if (!R(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!B(t)) return;
  const r = e.getTextContent();
  if (tn(e)) return;
  const n = cy.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Mp(e, t) {
  const r = e;
  r.marker = t, r.text = Py(t, r.markerSyntax, r.nested);
}
function V0(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!qe.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Mp(a.node, s);
  const c = n.getChildren().filter(R).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Mp(l.node, s);
}
function W0(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: u } = rd(e, a, o);
  if (u.length === 0 && s.length === 0 || !Ma(l, s, a, o)) return;
  const d = i ? Ra(l, i) : l.text, f = Fy(d, a);
  if (on(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = My(
    e,
    f.lineContent,
    f.followingBlocks,
    o
  );
  if (p.failure !== void 0) {
    p.failure === "shape" && c?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: h, followingBlocks: g } = p;
  if (Sn([...h, ...g]) !== l.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const y = Zo(l, t, n);
  if (!y) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (g.length === s.length && Lr(g, a) === qr(s, a) && Us(s, g, a) && Lr(h, a) === qr(u, a) && Us(u, h, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const k = Ds(h, y);
  Ds(g, y, k);
  const b = fb([...u, ...s]), T = od([...h, ...g]);
  for (let E = 0; E < b.length && E < T.length; E++)
    b[E].sid !== void 0 && T[E].number === b[E].number && (T[E].sid = b[E].sid);
  return { rebuilt: h, contentNodes: u, followingBlocks: g };
}
function H0(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = jy(e, i, n);
  if (!o) return;
  const a = r ? Ra(o, r) : o.text, c = Dr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (on(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = br.serializeEditorState(
    { type: mr, version: gr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...wa(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Lr(u, i) === qr(d, i) && Us(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function G0(e, t, r, n, i) {
  const s = U0(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (b) => {
    B(b) ? c.set(b.getKey(), b) : De(b) ? l.set(b.getKey(), b) : ve(b) ? u.set(b.getKey(), b) : o.set(b.getKey(), [b]);
  };
  for (const b of t) {
    const T = ne(b);
    if (!T?.isAttached()) continue;
    const E = Ls(T);
    if (E) {
      if (p(E), R(T)) {
        const S = eb(T, r.getMarker);
        S && a.push(S);
      }
      if (B(E)) {
        const S = j0(T);
        S && f.set(E.getKey(), S);
      }
    }
  }
  const h = /* @__PURE__ */ new Set();
  for (const [b, T] of a)
    h.has(b.getKey()) || h.has(T.getKey()) || ([b, T].forEach((E) => {
      h.add(E.getKey()), o.delete(E.getKey());
    }), ve(b) ? (u.set(b.getKey(), b), d.set(b.getKey(), [T])) : o.set(b.getKey(), [b, T]));
  if (s) {
    const b = Ls(s.node);
    b && !h.has(b.getKey()) && p(b);
  }
  const g = B0(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && u.size === 0 && g.length === 0)
    return;
  const y = new Set(g.map((b) => b.getKey())), k = /* @__PURE__ */ new Map();
  lb(Fe().getChildren(), e.root.children, k);
  for (const b of f.values()) V0(b, k);
  for (const b of c.values()) {
    const T = k.get(b.getKey()), E = T ? Ir(T.node) : void 0;
    if (!T || !E) continue;
    const S = z0(b, k, r, y, s);
    if (!S) continue;
    if (S.closedAs) {
      const K = T.siblings.indexOf(T.node);
      if (K < 0) continue;
      const [_, ...W] = S.closedAs, J = T.node;
      for (const pe of Object.keys(J)) Reflect.deleteProperty(J, pe);
      Object.assign(J, _), T.siblings.splice(K + 1, 0, ...W);
      continue;
    }
    if (S.categoryChanged) {
      const K = T.node;
      S.category === void 0 ? delete K.category : K.category = S.category;
    }
    if (!S.rebuilt) continue;
    const O = k.get(S.contentNodes[0].getKey());
    if (!O) continue;
    const q = E.indexOf(O.node);
    q < 0 || E.splice(q, S.contentNodes.length, ...S.rebuilt);
  }
  for (const b of o.values()) {
    const T = k.get(b[0].getKey());
    if (!T) continue;
    const E = F0(b, k, r, y, s);
    if (!E) continue;
    const S = T.siblings.indexOf(T.node);
    S < 0 || T.siblings.splice(S, b.length, ...E);
  }
  for (const b of u.values()) {
    const T = k.get(b.getKey()), E = T ? Ir(T.node) : void 0;
    if (!T || !E) continue;
    const S = d.get(b.getKey()) ?? [], O = W0(b, k, r, y, s, S);
    if (!O) continue;
    const q = O.contentNodes.at(0), K = q ? k.get(q.getKey()) : void 0;
    if (q && !K) continue;
    const _ = K ? E.indexOf(K.node) : E.length, W = T.siblings.indexOf(T.node);
    _ < 0 || W < 0 || (E.splice(_, O.contentNodes.length, ...O.rebuilt), T.siblings.splice(W + 1, S.length, ...O.followingBlocks));
  }
  for (const b of l.values()) {
    const T = k.get(b.getKey());
    if (!T) continue;
    const E = 1 + wa(b).length, S = H0(b, r, s);
    if (!S) continue;
    const O = T.siblings.indexOf(T.node);
    O < 0 || T.siblings.splice(O, E, ...S);
  }
  for (const b of g) {
    const T = k.get(b.getKey());
    if (!T) continue;
    const E = T.siblings.indexOf(T.node);
    if (E < 0) continue;
    T.siblings.splice(E, 1);
    const S = T.siblings[E - 1], O = T.siblings[E], q = S && Vi(S), K = O && Vi(O);
    S && O && q !== void 0 && K !== void 0 && K0(S, O) && (S.text = q + K, T.siblings.splice(E, 1));
  }
  return $m(e, r.viewOptions);
}
function J0({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = ui(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        dt,
        (i) => Y0(i, t)
      );
  }, [r, n, t]), null;
}
function Y0(e, t) {
  e.getMarker() !== rr && (e.isEmpty() || Ct(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${rr}" (key ${e.getKey()})`
  ), e.setMarker(rr)));
}
function X0({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = le(), n = Z({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, ea(s, e) || Q0(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Bt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Sl(r);
        Ep(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: bo(s) === bo(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        Fe().getChildren().filter(Ze).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Sl(r) || Ep(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: bo(a) === bo(c)
      }));
    };
    return $e(
      ...[Ht, Fr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      zt,
      () => {
        const i = n.current;
        return i.phase === "idle" && rN(i, pb()), !1;
      },
      Rt
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(zt, void 0));
    };
    return $e(
      r.registerMutationListener(It, i),
      r.registerMutationListener(xt, i)
    );
  }, [r]), j(() => {
    const i = () => oN(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function Q0(e, t, r) {
  if (Z0(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Sl(t);
  (!n || n === r.book) && t.update(() => hb(t, r.chapterNum, r.verseNum), {
    tag: wt
  });
}
function Z0(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ea(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function pb() {
  const e = N(), t = Jh(e);
  if (!t) return;
  const r = ad(), n = rT(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = lu(t, e), { verseNum: o, verse: a } = XC(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Sl(e) {
  return e.getEditorState().read(() => ad()?.getCode() || void 0);
}
function ad() {
  return Fe().getChildren().find(ve);
}
function Ep(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Cc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Cc(e, t), e.phase = "navigating") : i && Cc(e, t), r && r !== e.scrRef.book && yb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Cc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => hb(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: wt }
    );
  });
}
function hb(e, t, r) {
  const n = N()?.clone();
  eN(t, r);
  const i = N();
  i && !(n && i.is(n)) && Gr(e, wt);
}
function eN(e, t) {
  const r = pb();
  if (r?.chapterNum === e && (r.verse ? mb(t, r.verse) : r.verseNum === t))
    return;
  const n = Fe().getChildren(), i = Kh(n, e);
  if (!i) return;
  const s = cT(n, i), o = tT(s, !0);
  aT(s, o);
  let a;
  try {
    a = VC(s, t);
  } catch {
    return;
  }
  a && (ue(a) ? !M(a.getFirstChild()) && di(a) || or(a, 0) : tN(a));
}
function tN(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || be(n)) {
    M(e) ? e.selectEnd() : or(t, r);
    return;
  }
  const i = Js(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (M(e)) {
    e.selectEnd();
    return;
  }
  const s = L(n) && !B(n) ? gb(n) : void 0;
  s ? s.select(0, 0) : or(t, r);
}
function gb(e) {
  const t = e.getFirstChild();
  if (M(t)) return t;
  if (L(t) && !B(t)) return gb(t);
}
function bo(e) {
  return e.read(() => {
    const t = Fe().getChildren().find(Ze);
    return `${ad()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function rN(e, t) {
  e.phase !== "navigating" && t && (nN(t, e.scrRef) || yb(e, iN(t, e.scrRef)));
}
function nN(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? mb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function mb(e, t) {
  try {
    return Jl(e, t);
  } catch {
    return !1;
  }
}
function iN(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const sN = 8;
function yb(e, t) {
  return ea(t, e.scrRef) || e.pendingEchoes.some((r) => ea(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > sN && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ea(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function oN(e) {
  e.phase = "idle";
}
function aN(e) {
  return ve(e) ? `${e.__code}` : De(e) ? `${e.__marker} "${e.__number}"` : z(e) ? `${e.__marker}` : Bs(e) ? `${e.__marker} "${e.__number}"` : bt(e) ? `${e.__caller}` : li(e) ? `${e.__marker} "${e.__number}"` : B(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ue(e) ? `${e.__marker}` : M(e) ? `"${e.__text}"${cN(e)}` : Ee(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ke(e) ? `${e.__marker} "${e.__number}"` : "";
}
function cN(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ks]) : "";
}
function lN() {
  const [e] = le();
  return /* @__PURE__ */ A(
    vk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: aN,
      editor: e
    }
  );
}
const bb = Lp(null), Ap = 4;
function uN({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = Dp(bb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ A("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function dN({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = me(), [s, o] = me(), a = xe(
    (u) => {
      i((d) => d ? [...d, u] : [u]);
    },
    [i]
  ), c = (u) => {
    if (!n) return;
    const d = u.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(d) && u.preventDefault(), d === "Escape" || d === "Tab" ? r() : d === "ArrowUp" ? o((f) => {
      if (!f) return n[0];
      const p = n.indexOf(f) - 1;
      return n[p === -1 ? n.length - 1 : p];
    }) : d === "ArrowDown" && o((f) => f ? n[n.indexOf(f) + 1] : n[0]);
  }, l = Xe(() => ({ registerItem: a }), [a]);
  return j(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ A(bb.Provider, { value: l, children: /* @__PURE__ */ A("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function fN({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Z(null), c = Z(null), [l, u] = me(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: g } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Ap}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (h) => {
        const g = h.target;
        o && a.current && a.current.contains(g) || f.contains(g) || u(!1);
      };
      return document.addEventListener("click", p), () => {
        document.removeEventListener("click", p);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), j(() => {
    const f = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Ap;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Oe(zn, { children: [
    /* @__PURE__ */ Oe(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ A("span", { className: i }),
          t && /* @__PURE__ */ A("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ A("i", { className: "chevron-down" })
        ]
      }
    ),
    l && Un(
      /* @__PURE__ */ A(dN, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const _l = {
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
}, vl = {
  ..._l,
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
function pN({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ A(
    fN,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + hN(t),
      buttonLabel: gN(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(_l).map((n) => /* @__PURE__ */ Oe(
        uN,
        {
          className: "item block-marker " + mN(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ A("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ A("span", { className: "text usfm_" + n, children: _l[n] })
          ]
        },
        n
      ))
    }
  );
}
function hN(e) {
  return e && e in vl ? e : "ban";
}
function gN(e) {
  return e && e in vl ? vl[e] : "No Style";
}
function mN(e) {
  return e ? "active dropdown-item-active" : "";
}
function Pp() {
  return /* @__PURE__ */ A("div", { className: "divider" });
}
const yN = Mn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = me(s), [c, l] = me(), [u, d] = me(!1), [f, p] = me(!1), h = xe(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: k,
      contextMarker: b
    }) => {
      d(g), p(y), l(k), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: k,
        contextMarker: b
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    zt,
    (g, y) => (a(y), !1),
    fe
  ), [s]), /* @__PURE__ */ Oe(zn, { children: [
    /* @__PURE__ */ A(Om, { onStateChange: h }),
    /* @__PURE__ */ Oe("div", { className: "toolbar", children: [
      /* @__PURE__ */ A(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Xp, void 0);
          },
          title: yn ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ A("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ A(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(Qp, void 0);
          },
          title: yn ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ A("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ A(Pp, {}),
      o === s && /* @__PURE__ */ Oe(zn, { children: [
        /* @__PURE__ */ A(
          pN,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ A(Pp, {})
      ] }),
      /* @__PURE__ */ A("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), bN = Ta(), kN = {}, xN = {};
function TN() {
  return /* @__PURE__ */ A("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Sc(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function Np(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = L(n) ? n.getLastDescendant() ?? n : n;
  return ba(r, i);
}
function wp(e, t, r) {
  Ak(e, () => qi(t));
  const n = N();
  if (!P(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    ue(o) && i.add(o);
  }), i.forEach((s) => Hy(s, t, r));
}
const kb = Mn(function({
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
  const d = Z(null), f = Z(null), p = Z(null), h = Z(null), g = Z(t), y = Z(void 0), k = Z(void 0), b = Z(void 0), T = Z(void 0), E = Z(!1), [S, O] = me(t), [q, K] = me(0), [_, W] = me(), {
    isReadonly: J = !1,
    structureProtectionMode: pe = "off",
    onHiddenContentDelete: D,
    hasExternalUI: G = !1,
    hasSpellCheck: Y = !1,
    textDirection: he = "ltr",
    markerMenuTrigger: ke = "\\",
    view: ze,
    nodes: Lt,
    debug: ar = !1,
    contextMenu: ie,
    styleInfo: w,
    markerSettleDelayMs: te,
    copyLimit: oe
  } = a ?? xN, Te = ze ?? bN, ot = ws(Te) && (Te.markerMode !== "hidden" || !Te.hasSpacing || Te.hasGutterParaMarkers || Te.hasActiveTextFocusBox) ? {
    ...Te,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : Te, gt = Z(ot);
  Xt(gt.current, ot) || (gt.current = ot);
  const re = gt.current, Ge = Xe(() => Lt ?? kN, [Lt]), $a = Xe(() => ie, [ie]), fi = Xe(
    () => IC(w ?? $o),
    [w]
  ), Me = Z(c);
  Xt(Me.current, c) || (Me.current = c);
  const Je = Me.current, ge = ws(re), _t = J || ge, Ie = ot !== Te;
  j(() => {
    ge && !J && Je?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Ie && Je?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), re?.markerMode === "visible" && !J && Je?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ge, J, Ie, Je, re?.markerMode]);
  const cr = Z(null), eo = Xe(() => {
    if (re.markerMode !== "editable") return;
    const $ = w ?? $o;
    return {
      getContext: () => cr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (I) => d1(
        $,
        I,
        Ge.extraValidMarkers
      ),
      getEnterItems: (I) => f1(
        $,
        I,
        Ge.extraValidMarkers
      ),
      apply: (I, H) => {
        const X = cr.current;
        X && (H.trigger === "enter" ? X.splitParagraphWithMarker(I.marker) : X.applyMarkerMenuSelection(I, H));
      },
      commitTypedCloser: (I) => {
        cr.current?.commitTypedCloser(I);
      }
    };
  }, [re, w, Ge.extraValidMarkers]), Gt = ($) => {
    E.current || (E.current = !0, Me.current?.warn(
      `Editor: cannot ${$} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Zi = ($) => {
    if (ge)
      throw new Error(
        `Cannot ${$} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Br = ($) => {
    if (Zi($), _t) throw new Error(`Cannot ${$} in readonly mode`);
  }, An = () => !!d.current && pm(d.current), to = Xe(
    () => ({
      namespace: "platformEditor",
      theme: { ...ny, showCharMarkerTitles: re.showCharMarkerTitles },
      editable: !_t,
      editorState: void 0,
      // Handling of errors during update
      onError($) {
        throw $;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [lt, ...ge ? n_ : xu]
    }),
    [_t, ge, re.showCharMarkerTitles]
  );
  Co.initialize(Je);
  function vt($) {
    if ($ !== void 0 && !LA($, Ge.extraValidMarkers))
      throw new Error(`Unsupported character marker '${$}'`);
  }
  const Jt = xe(() => {
    const $ = d.current;
    if (!$) return g.current;
    const I = Vd($), H = k.current;
    if ((!I || I.size === 0) && !H) return g.current;
    const X = $.getEditorState(), Ce = X.toJSON();
    return X.read(
      () => G0(
        Ce,
        I ?? /* @__PURE__ */ new Set(),
        { viewOptions: re, getMarker: fi, logger: Je },
        H,
        b.current
      )
    ) ?? g.current;
  }, [re, fi, Je]);
  function Sr($, I, H) {
    if (ge && I === "remote") {
      Me.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    Zi("apply an update");
    const X = An(), Ce = !X && d.current ? Gr(d.current, Vr) : void 0;
    d.current?.update(
      () => {
        I === "remote" && Pt(Ts), X || Pt(Vr), H && Pt(H), N_($, re, Ge, Je);
      },
      {
        discrete: !0,
        // Reads the committed state and reports the change from `onUpdate` rather than right
        // after this call, because `editor.update()` does not always run synchronously: a caller
        // reached from inside another commit's own update listener (a host's `onUsjChange`
        // calling back into `takeOpsAfterNote`, say) finds the editor already mid-commit, so
        // Lexical queues this discrete update and applies it only once that outer commit's
        // listeners finish. `onUpdate` fires exactly when THIS update's own commit lands, whether
        // that is synchronously (the ordinary case, before `editor.update()` even returns) or
        // after such a deferral, so the report is correct either way - and the unfocused tag
        // release is disarmed only once the commit it guards has actually happened, never before.
        onUpdate: () => {
          Ce?.(), !X && d.current && cc(d.current);
          const tt = d.current?.getEditorState();
          if (!tt) return;
          const Le = Co.deserializeEditorState(tt, re);
          if (Le) {
            const Ye = !Xt(g.current, Le);
            if (Ye && (g.current = Le), Ye || !Xt(S, Le)) {
              const Mt = rf($, tt, "apply");
              T.current = Le, s?.(Le, $, I, Mt);
            }
          }
        }
      }
    );
  }
  const pi = {
    focus() {
      d.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return An();
    },
    undo() {
      d.current?.dispatchCommand(Xp, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Qp, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      Br("cut"), d.current && Ou(d.current);
    },
    copy() {
      d.current && wu(d.current);
    },
    paste() {
      Br("paste"), d.current && Ru(d.current);
    },
    pastePlainText() {
      Br("paste as plain text"), d.current && $u(d.current);
    },
    getUsj() {
      return Jt();
    },
    commitPendingMarkerEdits() {
      const $ = d.current;
      if (!$) return;
      const I = !An(), H = I ? Gr($, Vr) : void 0;
      $.update(
        () => {
          I && Pt(Vr), $.dispatchCommand(ab, void 0);
        },
        { discrete: !0 }
      ), H?.(), I && cc($);
    },
    setTransientInput($) {
      if (!$) {
        k.current = void 0;
        return;
      }
      const I = d.current?.getEditorState().read(() => {
        const H = N();
        return P(H) && H.isCollapsed() ? H.focus.key : void 0;
      });
      k.current = { input: $, nodeKey: I ?? b.current?.key };
    },
    setUsj($) {
      if (!Xt(g.current, $)) {
        g.current = $, k.current = void 0;
        const I = Xt(S, $);
        O($), I && K((H) => H + 1);
      }
    },
    applyUpdate($, I = "remote") {
      Sr($, I);
    },
    replaceEmbedUpdate($, I) {
      const H = d.current?.read(() => lS($, I));
      H ? this.applyUpdate(H) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${$}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ge) {
        Gt("get the selection");
        return;
      }
      return d.current?.read(gu);
    },
    setSelection($) {
      if (ge) {
        Gt("set the selection");
        return;
      }
      d.current?.update(() => {
        const I = xa($);
        I !== void 0 && (Nr(I), Pt(ch));
      });
    },
    setAnnotation($, I, H, X, Ce) {
      if (ge) {
        Gt("set an annotation");
        return;
      }
      let tt, Le, Ye, Mt;
      typeof X == "function" || X === void 0 ? (tt = X, Le = Ce) : (tt = X.onClick, Le = X.onRemove, Ye = X.onMouseEnter, Mt = X.onMouseLeave), f.current?.setAnnotation(
        $,
        $d(I),
        H,
        tt,
        Le,
        Ye,
        Mt
      );
    },
    removeAnnotation($, I) {
      f.current?.removeAnnotation($d($), I);
    },
    formatPara($) {
      Br("format a paragraph"), d.current?.update(
        () => {
          const I = N();
          if (!P(I)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${$}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const H = I.isBackward() ? I.focus : I.anchor, X = Re(H.getNode(), ve);
          if (X) {
            const Ce = I.isBackward() ? I.anchor : I.focus, Le = !I.isCollapsed() && !X.is(Ce.getNode()) && !X.isParentOf(Ce.getNode()) ? { key: Ce.key, offset: Ce.offset, type: Ce.type } : void 0, Ye = mn();
            if (Ye.anchor.set(H.key, H.offset, H.type), Ye.focus.set(H.key, H.offset, H.type), Nr(Ye), !xl($, re)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${$}"`
              );
              return;
            }
            if (!Le) return;
            const Mt = ne(Le.key);
            if (!Mt?.isAttached()) return;
            const jr = Mt.getTopLevelElement();
            if (!jr) return;
            const Dt = X.getNextSibling();
            if (!ue(Dt)) return;
            let Yt = Dt.getNextSibling();
            for (; Yt; ) {
              const ro = Yt.is(jr), no = Yt.getNextSibling();
              if (ue(Yt)) {
                const an = mn();
                an.anchor.set(Yt.getKey(), 0, "element"), an.focus.set(Yt.getKey(), Yt.getChildrenSize(), "element"), Nr(an), wp(an, $, re);
              }
              if (ro) break;
              Yt = no;
            }
            return;
          }
          wp(I, $, re);
        },
        { discrete: !0 }
      );
    },
    getElementByKey($) {
      return d.current?.read(
        () => d.current?.getElementByKey($) ?? void 0
      );
    },
    removeCharacterMarker($) {
      if (_t) throw new Error("Cannot remove character marker in readonly mode");
      vt($);
      let I = !1;
      return d.current?.update(
        () => {
          const H = N();
          P(H) && (I = Xm(H, $, re));
        },
        { discrete: !0 }
      ), I;
    },
    replaceCharacterMarker($, I) {
      if (_t) throw new Error("Cannot replace character marker in readonly mode");
      vt($), vt(I);
      let H = !1;
      return d.current?.update(
        () => {
          const X = N();
          P(X) && (H = JA(X, $, I));
        },
        { discrete: !0 }
      ), H;
    },
    extendCharacterMarker($, I) {
      if (_t) throw new Error("Cannot extend character marker in readonly mode");
      vt($), I?.forEach(
        (X) => vt(X)
      );
      let H = !1;
      return d.current?.update(
        () => {
          const X = N();
          P(X) && (H = YA(
            X,
            $,
            I,
            re
          ));
        },
        { discrete: !0 }
      ), H;
    },
    insertMarker($) {
      if (_t) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!sl($, Ge.extraValidMarkers))
        throw new Error(`Unsupported marker '${$}'`);
      const I = ol(
        $,
        y,
        re,
        Ge,
        Je,
        void 0,
        w
      );
      return I.action({ editor: d.current, reference: r }), I.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!J)
        return d.current?.getEditorState().read(() => Z1());
    },
    applyMarkerMenuSelection($, I) {
      if (J) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if ($.kind !== "closeTag" && !sl($.marker, Ge.extraValidMarkers))
        throw new Error(`Unsupported marker '${$.marker}'`);
      let H;
      return d.current.update(() => {
        H = c0($, I, r, {
          expandedNoteKeyRef: y,
          viewOptions: re,
          nodeOptions: Ge,
          logger: c,
          styleInfo: w
        });
      }), H;
    },
    splitParagraphWithMarker($) {
      if (J) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        xl($, re);
      });
    },
    commitTypedMarker($, I) {
      if (J) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let H = !1;
      return d.current.update(() => {
        H = o0($, I), H || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), H;
    },
    commitTypedCloser($) {
      if (J) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let I = !1;
      return d.current.update(() => {
        I = Zy($), I || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), I;
    },
    insertNote($, I, H) {
      Br("insert a note"), d.current?.update(
        () => {
          const X = Ug(
            $,
            I,
            H,
            r,
            re,
            Ge,
            Je
          );
          Sc(X, y);
        },
        { discrete: !0 }
      );
    },
    selectNote($) {
      d.current?.update(() => {
        const I = Er($);
        I && (Vc(I, re), Sc(I, y));
      });
    },
    selectAfterNote($) {
      const I = d.current;
      if (!I) return;
      const H = !An(), X = H ? Gr(I, Vr) : void 0;
      if (I.update(
        () => {
          H && Pt(Vr);
          const Ce = Er($);
          Ce && zg(Ce);
        },
        { discrete: !0 }
      ), X?.(), H) {
        cc(I);
        const Ce = Gr(
          I,
          Vr
        );
        I.update(
          () => {
            Pt(Vr), I.dispatchCommand(zt, void 0);
          },
          { discrete: !0 }
        ), Ce();
      }
    },
    selectNoteTextOffset($, I, H) {
      d.current?.update(() => {
        const X = Er($);
        if (!X) return;
        const Ce = H?.glyph;
        (H?.field === "category" ? QS(X, I, Ce) || lf(X, 0) : lf(X, I, Ce)) || Vc(X, re), Sc(X, y);
      });
    },
    getNoteOps($) {
      const I = d.current;
      return I ? Ei(I, () => {
        const H = Er($);
        if (H)
          return ba(H);
      }) : void 0;
    },
    getOpsAfterNote($) {
      const I = d.current;
      return I ? Ei(I, () => {
        const H = Er($);
        return H ? Np(H) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote($) {
      const I = d.current, H = I ? Ei(I, () => {
        const Le = Er($);
        if (!Le) return;
        const Ye = du(Le, "apply");
        return { ops: Np(Le), notePosition: Ye };
      }) : void 0;
      if (!H) return;
      const { ops: X, notePosition: Ce } = H;
      if (X.length === 0 || Ce === void 0) return X;
      const tt = X.reduce(
        (Le, Ye) => Le + (typeof Ye.insert == "string" ? Ye.insert.length : 1),
        0
      );
      return Sr([{ retain: Ce + 1 }, { delete: tt }], "remote", Pl), X;
    },
    getNoteIndex($) {
      const I = d.current;
      return I ? Ei(I, () => pu($)) : void 0;
    },
    getNoteKey($) {
      const I = d.current;
      return I ? Ei(I, () => Er($)?.getKey()) : void 0;
    },
    highlightNote($) {
      p.current?.setHighlightedNote($);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  cr.current = pi, ra(u, () => pi), j(() => {
    const $ = d.current;
    if ($)
      return $.registerUpdateListener(({ editorState: I }) => {
        I.read(() => {
          const H = N();
          if (!P(H) || !H.isCollapsed()) return;
          const X = H.focus.getNode();
          M(X) && (b.current = { key: X.getKey(), offset: H.focus.offset });
        });
      });
  }, []);
  const hi = xe(
    ($, I, H, X, Ce) => {
      if (ge) return;
      const tt = Co.deserializeEditorState($, re);
      if (tt) {
        const Le = !Xt(g.current, tt);
        if (Le && (g.current = tt), Le || !Xt(S, tt)) {
          const Ye = rf(X, $), Mt = Ye && !Ce.read(() => ne(Ye)) ? Ye : void 0;
          T.current = tt, s?.(tt, X, "local", Mt);
        }
      }
    },
    [S, s, re, ge]
  );
  j(() => {
    const $ = d.current;
    if (!(!$ || !s))
      return $.registerUpdateListener(({ tags: I, dirtyElements: H, dirtyLeaves: X }) => {
        !I.has($l) && (H.size === 0 && X.size === 0 || I.has(Ts) || !Vd($)?.size) || queueMicrotask(() => {
          const Ce = Jt();
          !Ce || Xt(T.current, Ce) || (T.current = Ce, s(Ce, void 0, "local", void 0));
        });
      });
  }, [s, Jt]);
  const Pn = xe(
    ($) => {
      W($.contextMarker), o?.($);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Oe(eh, { initialConfig: to, children: [
      /* @__PURE__ */ A(Lv, { isEditable: !_t }),
      /* @__PURE__ */ Oe("div", { className: "editor-container", children: [
        G ? /* @__PURE__ */ A(Om, { onStateChange: Pn }) : /* @__PURE__ */ A(
          "div",
          {
            className: "editor-toolbar-container" + (_t ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ A(
              yN,
              {
                ref: h,
                editorRef: cr,
                isReadonly: _t,
                onStateChange: Pn
              }
            )
          }
        ),
        /* @__PURE__ */ Oe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ A(rh, { editorRef: d }),
          /* @__PURE__ */ A(
            Ek,
            {
              contentEditable: /* @__PURE__ */ A(
                th,
                {
                  className: `editor-input usfm ${P_(re).join(" ")}${re.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${re.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Y
                }
              ),
              placeholder: /* @__PURE__ */ A(TN, {}),
              ErrorBoundary: nh
            }
          ),
          G && /* @__PURE__ */ A(Iv, {}),
          /* @__PURE__ */ A(ih, {}),
          r && n && /* @__PURE__ */ A(X0, { scrRef: r, onScrRefChange: n }),
          r && !G && /* @__PURE__ */ A(
            RE,
            {
              trigger: ke,
              scrRef: r,
              contextMarker: _,
              getMarkerAction: ($) => ol(
                $,
                y,
                re,
                Ge,
                Je,
                void 0,
                w
              ),
              editableHarness: eo
            }
          ),
          /* @__PURE__ */ A(
            VM,
            {
              scripture: S,
              scriptureRef: g,
              nodeOptions: Ge,
              editorAdaptor: br,
              viewOptions: re,
              logger: Je
            },
            q
          ),
          /* @__PURE__ */ A(pE, { onChange: i }),
          /* @__PURE__ */ A(
            S_,
            {
              onChange: hi,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Jk
            }
          ),
          /* @__PURE__ */ A(tP, { viewOptions: re }),
          /* @__PURE__ */ A(T_, { ref: f, logger: Je }),
          /* @__PURE__ */ A(iv, { viewOptions: re }),
          /* @__PURE__ */ A(bv, {}),
          /* @__PURE__ */ A(_v, {}),
          re?.markerMode !== "editable" && /* @__PURE__ */ A(vv, { logger: Je }),
          /* @__PURE__ */ A(Nv, { options: $a }),
          /* @__PURE__ */ A(JP, { limit: oe, viewOptions: re }),
          /* @__PURE__ */ A(qv, {}),
          /* @__PURE__ */ A(Uv, {}),
          /* @__PURE__ */ A(zv, {}),
          /* @__PURE__ */ A(l0, {}),
          /* @__PURE__ */ A(
            qM,
            {
              isEnabled: re?.markerMode !== "editable",
              structureProtectionMode: pe,
              copyLimit: oe,
              onHiddenContentDelete: D
            }
          ),
          /* @__PURE__ */ A(
            O0,
            {
              viewOptions: re,
              getMarker: fi,
              logger: Je,
              markerSettleDelayMs: te,
              structureProtectionMode: pe,
              copyLimit: oe
            }
          ),
          re?.markerMode === "visible" && /* @__PURE__ */ A(GP, { viewOptions: re, copyLimit: oe }),
          /* @__PURE__ */ A(
            D0,
            {
              styleInfo: w,
              viewOptions: re,
              logger: Je
            }
          ),
          /* @__PURE__ */ A(WM, { ref: p }),
          /* @__PURE__ */ A(
            HM,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Ge,
              viewOptions: re,
              logger: Je
            }
          ),
          /* @__PURE__ */ A(fE, {}),
          /* @__PURE__ */ A(ev, {}),
          /* @__PURE__ */ A(Y_, {}),
          /* @__PURE__ */ A(J0, { viewOptions: re, logger: Je }),
          /* @__PURE__ */ A(hE, {}),
          /* @__PURE__ */ A(RM, { structureProtectionMode: pe }),
          /* @__PURE__ */ A(yE, { textDirection: he }),
          /* @__PURE__ */ A(kE, {}),
          /* @__PURE__ */ A(wE, {}),
          l
        ] }),
        ar && /* @__PURE__ */ A(lN, {})
      ] })
    ] }, re.verseLayout ?? "inline")
  );
}), Nw = Mn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ A(kb, { ref: r, ...i });
});
function xb() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ta(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? xb() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Tb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? xb() : r,
    quote: e,
    type: "thread"
  };
}
function Op(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function CN(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function _c(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class SN {
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
    this._comments = t, _c(this);
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
          const c = Op(a);
          i.splice(o, 1, c);
          const l = n !== void 0 ? n : c.comments.length;
          if (this.isCollaborative() && s !== null) {
            const u = s.get(o).get("comments");
            this._withRemoteTransaction(() => {
              const d = this._createCollabSharedMap(t);
              u.insert(l, [d]);
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
    this._comments = i, _c(this);
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
          const c = Op(a);
          n.splice(o, 1, c);
          const l = c.comments;
          if (s = l.indexOf(t), this.isCollaborative() && i !== null) {
            const u = i.get(o).get("comments"), d = s;
            this._withRemoteTransaction(() => {
              u.delete(d);
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
    return this._comments = n, _c(this), t.type === "comment" ? {
      index: s,
      markedComment: CN(t)
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
    return t !== null ? t.doc.get("comments", Td) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Cd(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Td();
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
      Bk,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Rt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof jk) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const h = p.insert, g = p.retain, y = p.delete, k = u.parent, b = u === r ? void 0 : k instanceof Cd && this._comments.find((T) => T.id === k.get("id"));
              if (Array.isArray(h)) {
                const T = f;
                h.slice().reverse().forEach((E) => {
                  const S = E.get("id"), q = E.get("type") === "thread" ? Tb(
                    E.get("quote"),
                    E.get("comments").toArray().map(
                      (K) => ta(
                        K.get("content"),
                        K.get("author"),
                        K.get("id"),
                        K.get("timeStamp"),
                        K.get("deleted")
                      )
                    ),
                    S
                  ) : ta(
                    E.get("content"),
                    E.get("author"),
                    S,
                    E.get("timeStamp"),
                    E.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(q, b, T);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let T = 0; T < y; T++) {
                  const E = b === void 0 || b === !1 ? this._comments[f] : b.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(E, b);
                  }), f++;
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
function _N(e) {
  const [t, r] = me(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function vN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Z(null);
  return j(() => {
    i.current !== null && i.current.focus();
  }, []), j(() => {
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
  }, [n, e]), /* @__PURE__ */ A("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Oe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ A("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ A(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ A("div", { className: "Modal__content", children: t })
  ] }) });
}
function MN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Un(
    /* @__PURE__ */ A(vN, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Cb() {
  const [e, t] = me(null), r = xe(() => {
    t(null);
  }, []), n = Xe(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ A(MN, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = xe(
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
const EN = {
  ...ny,
  paragraph: "CommentEditorTheme__paragraph"
};
function AN(...e) {
  return e.filter(Boolean).join(" ");
}
function vn({
  "data-test-id": e,
  children: t,
  className: r,
  onClick: n,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ A(
    "button",
    {
      disabled: i,
      className: AN(
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
function PN({
  className: e
}) {
  return /* @__PURE__ */ A(th, { className: e || "ContentEditable__root" });
}
function NN({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ A("div", { className: t || "Placeholder__root", children: e });
}
const Rp = Yp("INSERT_INLINE_COMMAND");
function wN({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = xe(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Fs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ A("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ A("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ A("i", { className: "icon add-comment" }) }) });
}
function ON({ onEscape: e }) {
  const [t] = le();
  return j(() => t.registerCommand(
    Jp,
    (r) => e(r),
    wr
  ), [t, e]), null;
}
function Sb({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ A(eh, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: EN
  }, children: /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ A(
      Fk,
      {
        contentEditable: /* @__PURE__ */ A(PN, { className: e }),
        placeholder: /* @__PURE__ */ A(NN, { children: s }),
        ErrorBoundary: nh
      }
    ),
    /* @__PURE__ */ A(Uk, { onChange: n }),
    /* @__PURE__ */ A(ih, {}),
    t !== !1 && /* @__PURE__ */ A(Ik, {}),
    /* @__PURE__ */ A(ON, { onEscape: r }),
    /* @__PURE__ */ A(Lk, {}),
    i !== void 0 && /* @__PURE__ */ A(rh, { editorRef: i })
  ] }) });
}
function _b(e, t) {
  return xe(
    (r, n) => {
      r.read(() => {
        e(zk()), t(!Kk(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function RN({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = me(""), [s, o] = me(!1), a = Z(null), c = Xe(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), u = Mb(), d = xe(() => {
    e.getEditorState().read(() => {
      const g = N();
      if (P(g)) {
        l.current = g.clone();
        const y = g.anchor, k = g.focus, b = Pk(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), T = a.current;
        if (b !== null && T !== null) {
          const { left: E, bottom: S, width: O } = b.getBoundingClientRect(), q = Nk(e, b);
          let K = q.length === 1 ? E + O / 2 - 125 : E - 125;
          K < 10 && (K = 10), T.style.left = `${K}px`, T.style.top = `${S + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const _ = q.length, { container: W } = c, J = c.elements, pe = J.length;
          for (let D = 0; D < _; D++) {
            const G = q[D];
            let Y = J[D];
            Y === void 0 && (Y = document.createElement("span"), J[D] = Y, W.appendChild(Y));
            const ke = `position:absolute;top:${G.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${G.left}px;height:${G.height}px;width:${G.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Y.style.cssText = ke;
          }
          for (let D = pe - 1; D >= _; D--) {
            const G = J[D];
            W.removeChild(G), J.pop();
          }
        }
      }
    });
  }, [e, c]);
  Fs(() => {
    d();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), j(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        Tb(g, [ta(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = _b(i, o);
  return /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ A(
      Sb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ A(vn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ A(
        vn,
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
function $N({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = me(""), [s, o] = me(!1), a = Z(null), c = Mb(), l = _b(i, o);
  return /* @__PURE__ */ Oe(zn, { children: [
    /* @__PURE__ */ A(
      Sb,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ A(
      vn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(ta(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(xk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ A("i", { className: "send" })
      }
    )
  ] });
}
function vb({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Oe(zn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Oe("div", { className: "Modal__content", children: [
      /* @__PURE__ */ A(
        vn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ A(
        vn,
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
function $p({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = me(0);
  j(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const d = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(d);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Cb();
  return /* @__PURE__ */ Oe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ A("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Oe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ A("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Oe(zn, { children: [
      /* @__PURE__ */ A(
        vn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ A(
              vb,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ A("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function qN({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = me(0), [l, u] = Cb(), d = Xe(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return j(() => {
    const f = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(f);
    };
  }, [a]), /* @__PURE__ */ A("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Oe(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(g)[0], b = ne(k);
                Ee(b) && b.selectStart();
              },
              {
                onUpdate() {
                  y !== null && y.focus();
                }
              }
            );
          }
        },
        className: `CommentPlugin_CommentsPanel_List_Thread ${s.has(p) ? "interactive" : ""} ${e.indexOf(p) === -1 ? "" : "active"}`,
        children: [
          /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Oe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ A("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ A(
              vn,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ A(
                    vb,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: g
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ A("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ A("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((g) => /* @__PURE__ */ A(
            $p,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ A("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ A(
            $N,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ A(
      $p,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function IN({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ Oe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ A("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ A("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ A(
      qN,
      {
        activeIDs: e,
        comments: r,
        deleteCommentOrThread: t,
        listRef: s,
        submitAddComment: n,
        markNodeMap: i
      }
    )
  ] });
}
function Mb() {
  const e = sh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function LN({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = sh(), [a] = le(), c = Xe(() => {
    const K = new SN(a, s);
    return r && K.registerOnChange(r), t?.(K), K;
  }, [a, s, r, t]), l = _N(c), u = Xe(() => /* @__PURE__ */ new Map(), []), [d, f] = me(), [p, h] = me([]), [g, y] = me(!1), [k, b] = me(!1), { yjsDocMap: T } = o;
  j(() => {
    if (e) {
      const K = e("comments", T);
      return c.registerCollaboration(K);
    }
    return () => {
    };
  }, [c, e, T]);
  const E = xe(() => {
    a.update(() => {
      const K = N();
      K !== null && (K.dirty = !0);
    }), y(!1);
  }, [a]), S = xe(
    (K, _) => {
      if (K.type === "comment") {
        const W = c.deleteCommentOrThread(K, _);
        if (!W)
          return;
        const { markedComment: J, index: pe } = W;
        c.addComment(J, _, pe);
      } else {
        c.deleteCommentOrThread(K);
        const W = _ !== void 0 ? _.id : K.id, J = u.get(W);
        J !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const pe of J) {
              const D = ne(pe);
              Ee(D) && (D.deleteID(hn, W), D.hasNoIDsForEveryType() && Ao(D));
            }
          });
        });
      }
    },
    [c, a, u]
  ), O = xe(
    (K, _, W, J) => {
      c.addComment(K, W), _ && (a.update(() => {
        P(J) && Ch(J, hn, K.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const K = [];
    let _;
    for (const W of p) {
      const J = u.get(W);
      if (J !== void 0)
        for (const pe of J) {
          const D = a.getElementByKey(pe);
          D !== null && (D.classList.add("selected"), K.push(D), _ = window.setTimeout(() => {
            b(!0);
          }, 0));
        }
    }
    return () => {
      _ !== void 0 && window.clearTimeout(_);
      for (const W of K)
        W.classList.remove("selected");
    };
  }, [p, a, u]), j(() => {
    if (!a.hasNodes([lt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const K = /* @__PURE__ */ new Map();
    return $e(
      Zp(
        a,
        lt,
        (_) => Ss(_.getTypedIDs()),
        (_, W) => {
          for (const [J, pe] of Object.entries(_.getTypedIDs()))
            pe.forEach((D) => {
              W.addID(J, D);
            });
        }
      ),
      a.registerMutationListener(
        lt,
        (_) => {
          a.getEditorState().read(() => {
            for (const [W, J] of _) {
              const pe = ne(W);
              let D = [];
              J === "destroyed" ? D = K.get(W) ?? [] : Ee(pe) && (D = pe.getTypedIDs()[hn] ?? []);
              for (const G of D) {
                let Y = u.get(G);
                K.set(W, D), J === "destroyed" ? Y !== void 0 && (Y.delete(W), Y.size === 0 && u.delete(G)) : (Y === void 0 && (Y = /* @__PURE__ */ new Set(), u.set(G, Y)), Y.has(W) || Y.add(W));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: _, tags: W }) => {
        _.read(() => {
          const J = N();
          let pe = !1, D = !1;
          if (P(J)) {
            const G = J.anchor.getNode();
            if (M(G)) {
              const Y = wx(G, hn, J.anchor.offset) ?? [];
              Y !== null && (h(Y), pe = !0), J.isCollapsed() || (f(G.getKey()), D = !0);
            }
          }
          pe || h((G) => G.length === 0 ? G : []), D || f(null), !W.has("collaboration") && P(J) && y(!1);
        });
      }),
      a.registerCommand(
        Rp,
        () => {
          const _ = window.getSelection();
          return _ !== null && _.removeAllRanges(), y(!0), !0;
        },
        Bn
      )
    );
  }, [a, u]);
  const q = () => {
    a.dispatchCommand(Rp, void 0);
  };
  return /* @__PURE__ */ Oe(zn, { children: [
    g && Un(
      /* @__PURE__ */ A(
        RN,
        {
          editor: a,
          cancelAddComment: E,
          submitAddComment: O
        }
      ),
      document.body
    ),
    d != null && !g && Un(
      /* @__PURE__ */ A(
        wN,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: q
        }
      ),
      document.body
    ),
    n !== null && Un(
      /* @__PURE__ */ A(
        vn,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => b(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ A("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && Un(
      /* @__PURE__ */ A(
        IN,
        {
          comments: l,
          submitAddComment: O,
          deleteCommentOrThread: S,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function DN() {
  const e = Z(void 0), t = xe((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function UN(e, t) {
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
function FN(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      UN(r, t);
    };
  }, [t, e]);
}
const ww = Mn(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = me(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, y = (h ?? !1) || ws(g), [k, b] = DN();
  FN(f, k), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const S = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(S), p || console.warn(S);
    }
  }, [p]), ra(r, () => ({
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
    setTransientInput(S) {
      n.current?.setTransientInput(S);
    },
    setUsj(S) {
      n.current?.setUsj(S);
    },
    applyUpdate(S, O) {
      n.current?.applyUpdate(S, O);
    },
    replaceEmbedUpdate(S, O) {
      return n.current?.replaceEmbedUpdate(S, O);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(S) {
      n.current?.setSelection(S);
    },
    setAnnotation(S, O, q, K, _) {
      typeof K == "function" || K === void 0 ? n.current?.setAnnotation(S, O, q, K, _) : n.current?.setAnnotation(S, O, q, K);
    },
    removeAnnotation(S, O) {
      n.current?.removeAnnotation(S, O);
    },
    formatPara(S) {
      n.current?.formatPara(S);
    },
    getElementByKey(S) {
      return n.current?.getElementByKey(S);
    },
    removeCharacterMarker(S) {
      return n.current?.removeCharacterMarker(S) ?? !1;
    },
    replaceCharacterMarker(S, O) {
      return n.current?.replaceCharacterMarker(S, O) ?? !1;
    },
    extendCharacterMarker(S, O) {
      return n.current?.extendCharacterMarker(S, O) ?? !1;
    },
    insertMarker(S) {
      return n.current?.insertMarker(S);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(S, O) {
      return n.current?.applyMarkerMenuSelection(S, O);
    },
    splitParagraphWithMarker(S) {
      n.current?.splitParagraphWithMarker(S);
    },
    commitTypedMarker(S, O) {
      return n.current?.commitTypedMarker(S, O) ?? !1;
    },
    commitTypedCloser(S) {
      return n.current?.commitTypedCloser(S) ?? !1;
    },
    insertNote(S, O, q) {
      n.current?.insertNote(S, O, q);
    },
    selectNote(S) {
      n.current?.selectNote(S);
    },
    selectAfterNote(S) {
      n.current?.selectAfterNote(S);
    },
    selectNoteTextOffset(S, O, q) {
      n.current?.selectNoteTextOffset(S, O, q);
    },
    getNoteOps(S) {
      return n.current?.getNoteOps(S);
    },
    getOpsAfterNote(S) {
      return n.current?.getOpsAfterNote(S);
    },
    takeOpsAfterNote(S) {
      return n.current?.takeOpsAfterNote(S);
    },
    getNoteIndex(S) {
      return n.current?.getNoteIndex(S);
    },
    getNoteKey(S) {
      return n.current?.getNoteKey(S);
    },
    highlightNote(S) {
      n.current?.highlightNote(S);
    },
    setComments(S) {
      k.current?.setComments(S), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const T = xe(
    (S, O, q, K) => {
      if (!u) return;
      const _ = k.current?.getComments();
      u(S, _, O, q, K);
    },
    [k, u]
  ), E = xe(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const S = k.current?.getComments();
    l(S);
  }, [k, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ A(Dk, { children: /* @__PURE__ */ Oe(kb, { ref: n, onUsjChange: T, ...f, children: [
    /* @__PURE__ */ A(
      LN,
      {
        setCommentStore: b,
        onChange: E,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ A("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Dn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function zN(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function KN(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const BN = /^[#\w().,%/\s-]+$/;
function Hr(e) {
  return e != null;
}
const jN = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, VN = {
  left: "right",
  right: "left"
}, WN = "var(--usj-font-fallback, serif)";
function Eb(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${zN(i)}"`).join(", ")}, ${WN}`;
}
const Ml = ".editor-input.usfm", HN = /^[\w.#[\]="':()>+~*,\s-]+$/;
function GN(e) {
  return HN.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Ml}".`
  ), Ml);
}
function JN(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Eb(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (BN.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Hr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Hr(t.firstLineIndent) && s.push(`text-indent: ${Dn(t.firstLineIndent * 20 * r)}vw`), Hr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Dn(t.leftMargin * 20 * r)}vw`), Hr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Dn(t.rightMargin * 20 * r)}vw`
  ), Hr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Dn(t.spaceBefore * r)}pt`), Hr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Dn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = jN[n ? VN[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const qp = { c: 150, ca: 133, cp: 150 };
function Ip(e, t) {
  return e && Hr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function YN(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Hr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Ip(e.markers.c, qp.c);
  return ["ca", "cp"].map((i) => {
    const s = Ip(
      e.markers[i],
      qp[i]
    ), o = Dn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function Ow(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Ml } = t, s = GN(i), o = [], a = [];
  e.defaultFont && a.push(Eb(e.defaultFont)), Hr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Dn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = JN(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${KN(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...YN(e, s)), o.join(`
`);
}
export {
  Yg as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  Nw as Editorial,
  xs as GENERATOR_NOTE_CALLER,
  ah as HIDDEN_NOTE_CALLER,
  ww as Marginal,
  x as MarkerType,
  Jg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Su as STANDARD_VIEW_MODE,
  $o as defaultStyleInfo,
  Pw as directionToNames,
  f_ as filterAndRankItems,
  Ow as generateUsjCss,
  Ew as getDefaultViewMode,
  Ta as getDefaultViewOptions,
  f1 as getEnterMenuItems,
  d1 as getMarkerMenuItems,
  Aw as getViewMode,
  Mu as getViewOptions,
  ws as isBlockVerseLayout,
  fn as isInsertEmbedOpOfType,
  v_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
