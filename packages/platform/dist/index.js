import { jsx as E, jsxs as Re, Fragment as zn } from "react/jsx-runtime";
import { forwardRef as Mn, useState as ye, useRef as Z, useCallback as xe, useEffect as B, useMemo as Ze, memo as Vb, createContext as Dp, useContext as Up, Children as Wb, isValidElement as Hb, cloneElement as Gb, useImperativeHandle as ra, useLayoutEffect as Fs } from "react";
import { assertSafeKey as ot, isValidBookCode as Jb, MARKER_OBJECT_PROPS as Yb, USJ_VERSION as gr, USJ_TYPE as mr, isUsjTextContentLocation as Xb, indexesFromUsjJsonPath as Fp, isUsjAttributeKeyLocation as Qb, isUsjAttributeMarkerLocation as Zb, isUsjClosingAttributeMarkerLocation as ek, isUsjMarkerLocation as tk, isUsjClosingMarkerLocation as rk, isUsjPropertyValueLocation as nk, getUsjDocumentLocationTypeName as ik, usjJsonPathFromIndexes as wn, EMPTY_USJ as zp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as rt, $parseSerializedNode as Kn, DecoratorNode as zs, ElementNode as kr, isHTMLElement as ni, createState as na, $getState as ae, $setState as Ot, $isRangeSelection as P, $isElementNode as L, $isTextNode as M, $getSelection as O, $isNodeSelection as ia, ParagraphNode as El, TextNode as et, $createTextNode as Pe, $getCommonAncestor as sk, $isLineBreakNode as ii, NODE_STATE_KEY as Ks, $getEditor as gn, $hasUpdateTag as ok, $getNodeByKey as se, $getRoot as Ke, $createRangeSelection as mn, $createPoint as fr, $setSelection as Nr, SELECTION_CHANGE_COMMAND as Kt, $getCharacterOffsets as Al, KEY_DOWN_COMMAND as xr, COMMAND_PRIORITY_HIGH as Oe, HISTORY_MERGE_TAG as Pl, CLICK_COMMAND as sa, COMMAND_PRIORITY_EDITOR as Bn, DELETE_CHARACTER_COMMAND as Ar, DELETE_WORD_COMMAND as $i, DELETE_LINE_COMMAND as jn, COMMAND_PRIORITY_NORMAL as wr, CONTROLLED_TEXT_INSERTION_COMMAND as Vn, COMMAND_PRIORITY_CRITICAL as pe, PASTE_COMMAND as zt, CUT_COMMAND as sr, REMOVE_TEXT_COMMAND as Nl, isDOMNode as Kp, $getNearestNodeFromDOMNode as Wi, $isRootNode as wl, DROP_COMMAND as Ol, $isDecoratorNode as si, COPY_COMMAND as Wn, COMMAND_PRIORITY_LOW as qt, getDOMSelection as ak, isSelectionWithinEditor as Bp, $createRangeSelectionFromDom as jp, isDOMTextNode as ck, BLUR_COMMAND as Rl, $addUpdateTag as wt, DRAGSTART_COMMAND as Vp, $createNodeSelection as Wp, INSERT_PARAGRAPH_COMMAND as Hn, INSERT_LINE_BREAK_COMMAND as vc, SKIP_DOM_SELECTION_TAG as Vr, CLEAR_HISTORY_COMMAND as lk, $getPreviousSelection as uk, $isRootOrShadowRoot as dk, CAN_UNDO_COMMAND as fk, CAN_REDO_COMMAND as pk, getDOMSelectionFromTarget as hk, $onUpdate as Hp, KEY_ENTER_COMMAND as Gp, LineBreakNode as Jp, $copyNode as gk, FOCUS_COMMAND as mk, createEditor as yk, SELECT_ALL_COMMAND as bk, isExactShortcutMatch as kk, getDOMTextNode as xk, KEY_ESCAPE_COMMAND as Yp, createCommand as Xp, HISTORIC_TAG as $l, UNDO_COMMAND as Qp, REDO_COMMAND as Zp, CLEAR_EDITOR_COMMAND as Tk } from "lexical";
import { addClassNamesToElement as bi, removeClassNamesFromElement as Ba, $findMatchingParent as $e, $dfsIterator as oa, $dfs as oi, mergeRegister as Ie, registerNestedElementResolver as eh, $unwrapNode as Mc, IS_APPLE as yn } from "@lexical/utils";
import { useLexicalNodeSelection as Ck } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Qt } from "fast-equals";
import ds from "quill-delta";
import { useLexicalComposerContext as ue } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as _k } from "unicode-segmenter/grapheme";
import { copyToClipboard as Sk, $getLexicalContent as vk } from "@lexical/clipboard";
import { TreeView as Mk } from "@lexical/react/LexicalTreeView";
import * as Ek from "react-dom";
import { createPortal as Un } from "react-dom";
import { LexicalComposer as th } from "@lexical/react/LexicalComposer";
import { ContentEditable as rh } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as nh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as ih } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as sh } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Ak } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Pk, createDOMRange as Nk, createRectsFromDOMRange as wk } from "@lexical/selection";
import { autoUpdate as Ok, computePosition as Rk, shift as $k, flip as qk } from "@floating-ui/dom";
import { $generateNodesFromDOM as Ik } from "@lexical/html";
import { AutoFocusPlugin as Lk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Dk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as oh, LexicalCollaboration as Uk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Fk } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as zk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Kk, $isRootTextContentEmpty as Bk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as jk } from "@lexical/yjs";
import { Array as Td, Map as Cd, YArrayEvent as Vk } from "yjs";
const ja = (e) => rt(Kn(e)), Wk = {
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
function ah(e) {
  return Wk[e];
}
const D = " ", vo = "​", or = D, ql = `${D}|`, nr = "p", xs = "+", ch = "-", Mo = "chapter", Ec = "verse", _d = "invalid", Hk = "text-spacing", Gk = "formatted-font", Jk = "marker-", Il = "external-usj-mutation", lh = "selection-change", Rt = "cursor-change", Ac = "annotation-change", Ts = "delta-change", uh = "marker-settle", Yk = [
  Il,
  lh,
  Rt,
  Ac,
  Ts
], Gn = "zmsc-s", wi = "zmsc-e", Xk = [Gn, wi], Qk = [
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
], dh = 1, Ll = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Zk = Ll.filter((e) => e !== "sid" && e !== "eid");
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
    return ph().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Qk.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: dh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function fh(e) {
  return Xk.includes(e);
}
function ph(e, t, r, n, i) {
  return rt(new yr(e, t, r, n, void 0, i));
}
function it(e) {
  return e instanceof yr;
}
const Dl = "f", ex = [
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
const tx = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], hh = 1;
class Le extends kr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Dl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (uo(t) === "crossref" ? ch : xs), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Le(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => nx(t) ? {
        conversion: rx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ul().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (ex.includes(t) || (r?.includes(t) ?? !1));
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
      version: hh
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
function rx(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Ul(t, r, n) };
}
function Ul(e, t, r, n, i) {
  return rt(new Le(e, t, r, n, i));
}
function nx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Le.isValidMarker(t) && e.classList.contains(Le.getType());
}
function K(e) {
  return e instanceof Le;
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
}, Sd = {
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
  const t = Object.hasOwn(Pc, e) ? Pc[e] : void 0, r = Object.hasOwn(Sd, e) ? Sd[e] : void 0;
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
const gh = "v", mh = "c", Rn = "fig", vd = "tr", Nc = "esb", yh = "esbe", Md = "periph", Ed = "alt", Ad = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, ix = {
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
const sx = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function ox(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === vo && s + 1 < e.length && Nd(e[s + 1]) || (Nd(o) ? (r || (i = t.length, t += o), r = !0) : sx.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function ax(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function cx(e, t) {
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
const lx = /^(?:qt[1-5]?|ts)-[se]$/;
function Fl(e) {
  return lx.test(e) || fh(e);
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
function ux(e, t, r) {
  const n = [];
  let i = 0, s;
  const o = (c) => {
    if (!c)
      return;
    const l = n[n.length - 1];
    l?.kind === "text" ? l.text += c : n.push({ kind: "text", text: c });
  }, a = (c) => {
    c.split("//").forEach((d, u) => {
      u > 0 && n.push({ kind: "optbreak" }), o(d);
    });
  };
  for (; i < e.length; ) {
    if (e[i] !== "\\") {
      const g = e.indexOf("\\", i), y = g === -1 ? e.length : g;
      a(ox(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: d } = cx(e, i + 1);
    if (i = d, l === "") {
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
    const u = () => {
      for (; i < e.length && /[\s\u00A0\u200B]/.test(e[i]); )
        i++;
    };
    if (l === gh) {
      const { word: g, next: y } = Va(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === mh) {
      const { word: g, next: y } = Va(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === x.Note || h === void 0 && Le.isValidMarker(l)) {
      const { word: g, next: y } = Va(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === x.Milestone || h === void 0 && Fl(l)) {
      const g = bx(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    h === x.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : h === x.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Eo(p) ? (u(), Eo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === Nc || l === yh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
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
function dx(e) {
  return Eo(e) !== void 0;
}
const fx = /([-\w]+)\s*=\s*"(.*?)"/g, px = /[\s\u200B]*[\n\r][\s\u200B]*/g, bh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function aa(e) {
  return bh[e];
}
const hx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function gx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Cs(e, t, r = bh[t]) {
  const n = e.replace(px, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(fx)];
  if (s.length > 0) {
    if (!gx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      hx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function ca(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function mx(e) {
  const t = Dr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function yx(e, t, r) {
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
function bx(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Cs(s.slice(o + 1), r, ca(r)), !a && s.slice(o + 1).trim() !== "")) {
    const d = s.slice(0, o);
    return {
      token: { kind: "milestone", marker: r },
      next: n + o,
      ejectedText: d.trim() !== "" ? d.replace(/^[ \u00A0]/, "") : void 0
    };
  }
  const c = o >= 0 ? s.slice(0, o) : s;
  if (c.trim() !== "")
    return {
      token: { kind: "milestone", marker: r, attributes: a },
      next: i,
      ejectedText: c.replace(/^[ \u00A0]/, "")
    };
  const l = yx(e, i + 2, r);
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
`, " ").replaceAll("~", D);
}
function ln(e) {
  return e.content || (e.content = []), e.content;
}
function Dr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d, u;
  const f = () => d ? ln(d) : u ? ln(u) : r;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? ln(o[o.length - 1].object) : ln(s);
    if (o.length > 0)
      return ln(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: nr, content: [] }, f().push(i);
    }
    return ln(i);
  }, g = (Y) => {
    const N = h();
    typeof Y == "string" && typeof N[N.length - 1] == "string" ? N[N.length - 1] = N[N.length - 1] + Y : N.push(Y);
  }, y = (Y) => {
    for (let N = Y; N < o.length; N += 1) {
      const ee = o[N].object;
      ee.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, b = (Y) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, Y || (s.closed = "false"), s = void 0);
  }, T = () => {
    c = void 0, l = void 0;
  }, A = (Y, N, ee) => {
    k();
    const [, he, Te, st] = ee, We = {
      type: "table:cell",
      marker: st ? N.slice(0, N.indexOf("-")) : N,
      align: ix[he],
      content: []
    };
    st && (We.colspan = String(Number(st) + 1 - Number(Te))), ln(Y).push(We), i = We;
  }, _ = (Y) => {
    d && (Y || (d.closed = "false"), d = void 0);
  }, w = () => {
    u = void 0;
  };
  let $, z = "", S;
  const W = () => {
    z && g(Mr(z)), z = "";
  }, G = (Y = !1) => {
    $?.type === "sidebar" ? z = "" : Y && z.endsWith(`
`) && (z = z.slice(0, -1)), $ = void 0, W();
  }, ce = () => {
    if (!S)
      return;
    const Y = { type: "char", marker: S.marker, content: [] };
    S.value && (Y.content = [Mr(S.value)]), h().push(Y), o.push({ object: Y }), S = void 0;
  }, te = (Y, N) => {
    p = !1, T(), k(), b(!1), i = { type: "para", marker: Y, content: [] }, N && (i.content = [Mr(N)]), f().push(i);
  }, qe = () => {
    S && (te(S.marker, S.value), S = void 0);
  };
  let Se;
  const J = (Y) => {
    if (!Se)
      return;
    let { value: N } = Se;
    Se = void 0, Y && N.endsWith(`
`) && (N = N.slice(0, -1));
    const ee = N.indexOf("|"), he = ee >= 0 ? Cs(N.slice(ee + 1), Md) : void 0, Te = ee >= 0 ? N.slice(0, ee) : N, st = ee >= 0 && (!he || !!Te && !!he[Ed]), We = st ? void 0 : he, ie = st ? N : Te, Xe = {
      type: "periph",
      ...ie ? { [Ed]: Mr(ie) } : {},
      ...We
    };
    Xe.content = [], f().push(Xe), u = Xe, i = void 0;
  };
  let V;
  const ne = () => {
    if (V) {
      if (V.shape === "para")
        te(Rn, V.value);
      else {
        const Y = { type: "char", marker: Rn, content: [] };
        V.value && (Y.content = [Mr(V.value)]), h().push(Y), o.push({ object: Y });
      }
      V = void 0;
    }
  }, ge = ux(e, t?.getMarker ?? Or, n);
  for (let Y = 0; Y < ge.length; Y++) {
    const N = ge[Y];
    if (S) {
      if (N.kind === "text") {
        S.value += N.text;
        continue;
      }
      if (S.shape === "char" && N.kind === "end" && N.marker.replace(/^\+/, "") === S.marker) {
        if (S.value.trim() === "") {
          h().push({ type: "char", marker: S.marker, content: [] }), S = void 0, G();
          continue;
        }
        Object.assign(S.target, {
          [S.attrName]: Mr(S.value.trim())
        });
        const ee = S.marker;
        if (S = void 0, ee === "ca") {
          const he = ge[Y + 1];
          he?.kind === "text" && /^[\s\u200B]*$/.test(he.text) && Y++;
        }
        continue;
      }
      if (S.shape === "para" && (N.kind === "para" || N.kind === "chapter")) {
        const ee = S.value.replace(/[\s\u200B]+$/, "");
        ee === "" ? (te(S.marker), S = void 0) : (Object.assign(S.target, { [S.attrName]: Mr(ee) }), S = void 0);
      } else {
        $ = void 0, (N.kind === "para" || N.kind === "chapter") && S.value.endsWith(`
`) && (S.value = S.value.slice(0, -1)), S.shape === "para" ? qe() : ce(), Y--;
        continue;
      }
    }
    if (Se) {
      if (N.kind === "text" || N.kind === "optbreak") {
        Se.value += N.kind === "text" ? N.text : "//";
        continue;
      }
      J(N.kind === "para" || N.kind === "chapter"), Y--;
      continue;
    }
    if (V) {
      if (N.kind === "text" || N.kind === "optbreak") {
        V.value += N.kind === "text" ? N.text : "//";
        continue;
      }
      if (N.kind === "end" && N.marker.replace(/^\+/, "") === Rn) {
        const ee = V.value.indexOf("|"), he = ee >= 0 ? Cs(V.value.slice(ee + 1), Rn) : void 0;
        if (he) {
          const Te = {};
          for (const [ie, Xe] of Object.entries(he))
            Te[ie === "src" ? "file" : ie] = Xe;
          const st = {
            type: "figure",
            marker: Rn,
            ...Te
          }, We = V.value.slice(0, ee);
          We && (st.content = [Mr(We)]), g(st), V = void 0;
          continue;
        }
      }
      ne(), Y--;
      continue;
    }
    if ($)
      if (N.kind === "text") {
        if (N.text.includes(`
`) && /^[\s\u200B]*$/.test(N.text)) {
          z += N.text;
          continue;
        }
        G();
      } else if (N.kind === "charOpen" || N.kind === "para") {
        const ee = N.kind === "para" || !N.isNested ? Eo(N.marker) : void 0;
        if (ee && ee.targetTypes.includes($.type)) {
          z = "", S = {
            target: $,
            attrName: ee.attrName,
            marker: N.marker,
            shape: ee.shape,
            value: ""
          };
          continue;
        }
        G(N.kind === "para");
      } else
        G(N.kind === "chapter");
    if (!s && !n && (N.kind === "charOpen" && !N.isNested && N.marker === Rn || N.kind === "para" && N.marker === Rn)) {
      k(), V = { shape: N.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (N.kind) {
      case "text": {
        let ee = N.text;
        if (!s && ee.endsWith(`
`)) {
          const he = ge[Y + 1];
          (he === void 0 || he.kind === "para" || he.kind === "chapter") && (ee = ee.slice(0, -1));
        }
        ee && g(Mr(ee));
        break;
      }
      case "para": {
        const ee = !s && !n;
        if (ee && N.marker === vd) {
          k(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: vd, content: [] }, ln(c).push(l), i = l, p = !1;
          break;
        }
        if (ee && l) {
          const he = Ad.exec(N.marker);
          if (he && Pd(he)) {
            A(l, N.marker, he);
            break;
          }
        }
        if (T(), !n && N.marker === Nc) {
          k(), b(!1), _(!1);
          const he = {
            type: "sidebar",
            marker: Nc,
            content: []
          };
          f().push(he), d = he, i = void 0, $ = d, p = !1;
          break;
        }
        if (N.marker === yh && d) {
          k(), b(!1), _(!0), i = void 0;
          break;
        }
        if (!n && N.marker === Md) {
          k(), b(!1), _(!1), w(), Se = { value: "" }, i = void 0, p = !1;
          break;
        }
        te(N.marker);
        break;
      }
      case "verse": {
        b(!1);
        const ee = { type: "verse", marker: gh, number: N.number };
        g(ee), $ = ee;
        break;
      }
      case "chapter": {
        k(), b(!1), T(), _(!1), w(), i = void 0;
        const ee = {
          type: "chapter",
          marker: mh,
          number: N.number
        };
        r.push(ee), $ = ee, p = !0;
        break;
      }
      case "note": {
        b(!1);
        const ee = h();
        s = { type: "note", marker: N.marker, caller: N.caller, content: [] }, a = o.length, ee.push(s), $ = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !N.isNested) {
          const Te = Ad.exec(N.marker);
          if (Te && Pd(Te)) {
            A(l, N.marker, Te);
            break;
          }
        }
        if (!N.isNested) {
          const Te = s ? a : 0;
          y(Te), o.length = Te;
        }
        const ee = h(), he = { type: "char", marker: N.marker, content: [] };
        ee.push(he), o.push({ object: he });
        break;
      }
      case "end": {
        const ee = N.marker.replace(/^\+/, ""), he = s ? a : 0, Te = o.findLastIndex((st, We) => We >= he && st.object.marker === ee);
        Te >= 0 ? (kx(o[Te].object), y(Te + 1), o.length = Te) : s && s.marker === ee ? b(!0) : (y(he), o.length = he, g({ type: "unmatched", marker: `${N.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: N.marker, ...N.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (Se && J(!0), V && ne(), S)
    if (S.shape === "para") {
      const Y = S.value.replace(/[\s\u200B]+$/, "");
      Y === "" ? te(S.marker) : Object.assign(S.target, { [S.attrName]: Mr(Y) }), S = void 0;
    } else
      S.value.endsWith(`
`) && (S.value = S.value.slice(0, -1)), ce();
  k(), b(!1), _(!1);
  const ht = (Y) => {
    for (const N of Y)
      typeof N != "string" && N.content && (ht(N.content), N.content.length === 0 && delete N.content);
  };
  return ht(r), r;
}
function kx(e) {
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
}), fe = na("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Ur = "marker-trailing-space", kh = 1, xx = "marker", zl = na("isGutterMarker", {
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
        conversion: Tx,
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
      version: kh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Tx(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Jr(t, r) };
}
function Jr(e, t) {
  return rt(new Zr(e, t));
}
function Cx(e) {
  return Ot(Jr(xx, e), zl, !0);
}
function _x(e) {
  return Bt(e) && ae(e, zl);
}
function Sx(e) {
  return e?.tagName === "span";
}
function Bt(e) {
  return e instanceof Zr;
}
function xh(e) {
  return e?.type === Zr.getType();
}
const hn = "internal-comment", vx = [hn], Th = Object.freeze({}), wc = Object.freeze({}), Oc = Object.freeze({}), Rc = Object.freeze({}), $c = Object.freeze({}), Mx = 1, ki = /* @__PURE__ */ new Map(), ns = /* @__PURE__ */ new Map(), xi = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map();
class dt extends kr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Th, r, n, i, s, o) {
    super(o), this.__typedIDs = fo(t), this.__typedOnClicks = Wa(r), this.__typedOnRemoves = Ha(n), this.__typedOnMouseEnters = Ga(i), this.__typedOnMouseLeaves = Ja(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = fo(t.__typedIDs), n = Wa(t.__typedOnClicks), i = Ha(t.__typedOnRemoves), s = Ga(t.__typedOnMouseEnters), o = Ja(t.__typedOnMouseLeaves);
    return new dt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return vx.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return _s().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Mx
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = $n(n.theme.typedMark, s), u = $n(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && bi(r, d) : l === 0 && Ba(r, d), c === 1 ? l === 2 && bi(r, u) : l === 1 && Ba(r, u));
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
    return Ae(t) ? t.__typedIDs : {};
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
    return Ae(t) ? ki.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ha(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Ae(t) ? ns.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Ga(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Ae(t) ? xi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Ja(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Ae(t) ? Ti.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Ae(a))
      return;
    ot(t), ot(r);
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
    if (!Ae(n))
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
    const n = _s(this.__typedIDs, this.getTypedOnClicks());
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
    ot(t), ot(r);
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
    ot(t), ot(r);
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
    ot(t), ot(r);
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
    ot(t), ot(r);
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
    const i = Ex(t, r);
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
    for (; Ae(t) && Rd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Ae(r) && Rd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Ax(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Px(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Nx(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = wx(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function fo(e = Th) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (ot(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      ot(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Wa(e) {
  if (!e || e === wc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    ot(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      ot(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ha(e) {
  if (!e || e === Oc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    ot(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      ot(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ga(e) {
  if (!e || e === Rc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    ot(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      ot(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ja(e) {
  if (!e || e === $c)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    ot(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      ot(s), i[s] = o;
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
function Ex(e, t) {
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
    for (let d = 0; d < c.length; d++)
      if (c[d] !== l[d])
        return !1;
  }
  return !0;
}
function Ax(e, t) {
  const r = {}, n = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of n) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const d = s[l] ?? o[l];
      d && (c[l] = d);
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
      const d = s[l] ?? o[l];
      d && (c[l] = d);
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
      const d = s[l] ?? o[l];
      d && (c[l] = d);
    }
    Object.keys(c).length > 0 && (r[i] = c);
  }
  return r;
}
function wx(e, t) {
  const r = {}, n = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (const i of n) {
    const s = e[i] ?? {}, o = t[i] ?? {}, a = /* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(o)]), c = {};
    for (const l of a) {
      const d = s[l] ?? o[l];
      d && (c[l] = d);
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
function _s(e, t, r, n, i) {
  return rt(new dt(e, t, r, n, i));
}
function Ae(e) {
  return e instanceof dt;
}
function Ch(e) {
  return e?.type === dt.getType();
}
function Ao(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function _h(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let h, g;
  for (let y = 0; y < d; y++) {
    const k = a[y];
    if (L(g) && g.isParentOf(k))
      continue;
    const b = y === 0, T = y === d - 1;
    let A = null;
    if (M(k)) {
      const _ = k.getTextContentSize(), w = b ? f : 0, $ = T ? p : _;
      if (w === 0 && $ === 0)
        continue;
      const z = k.splitText(w, $);
      A = z.length > 1 && (z.length === 3 || b && !T || $ === _) ? z[1] : z[0];
    } else {
      if (Ae(k))
        continue;
      L(k) && k.isInline() && (A = k);
    }
    if (A !== null) {
      if (A && A.is(h))
        continue;
      const _ = A.getParent();
      (_ == null || !_.is(h)) && (g = void 0), h = _, g === void 0 && (g = _s(), g.addID(t, r, n, i, s, o), A.insertBefore(g)), g.append(A);
    } else
      h = void 0, g = void 0;
  }
  t === hn && L(g) && (u ? g.selectStart() : g.selectEnd());
}
function Ox(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Ae(n))
      return n.getTypedIDs()[t];
    if (M(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Ae(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Rx = ["type", "marker", "content"], qc = "unknown", Sh = 1, $x = /* @__PURE__ */ new Set(["optbreak", "ref"]);
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
      [qc]: (t) => Ix(t) ? {
        conversion: qx,
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
    return $x.has(this.getTag());
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
    const r = t ?? O();
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
function qx(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Kl(t, r) };
}
function Kl(e, t, r) {
  return rt(new ai(e, t, r));
}
function Ix(e) {
  return e?.tagName.toLowerCase() === qc;
}
function _e(e) {
  return e instanceof ai;
}
const vh = 1, Lx = "attribute-run";
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
    return Mh(t.runKind).updateFromJSON(t);
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
    t.classList.add(Lx);
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
      version: vh
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
function Mh(e) {
  return rt(new en(e));
}
function je(e) {
  return e instanceof en;
}
const Ss = "id", Eh = 1, Dx = [
  "type",
  "marker",
  "code",
  "content"
];
class jt extends kr {
  __marker = Ss;
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
    return new jt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Ah(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Jb(t);
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
      version: Eh
    };
  }
}
function Ah(e, t) {
  return rt(new jt(e, t));
}
function Me(e) {
  return e instanceof jt;
}
function Bl(e) {
  return e?.type === jt.getType();
}
const Po = "c", Ph = 1, Ux = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Gt extends kr {
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
    return new Gt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Nh().updateFromJSON(t);
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
      version: Ph
    };
  }
}
function Nh(e, t, r, n, i) {
  return rt(new Gt(e, t, r, n, i));
}
function Fe(e) {
  return e instanceof Gt;
}
function Fx(e) {
  return e?.type === Gt.getType();
}
const wh = [
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
], Oh = [
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
], zx = [
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
  ...wh,
  ...Oh
], Rh = 1, Kx = ["type", "marker", "content"];
class ve extends kr {
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
    return new ve(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (zx.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && wh.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Oh.includes(t);
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
    return ve.isValidFootnoteMarker(t) || ve.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => jx(t) ? {
        conversion: Bx,
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
      version: Rh
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
function Bx(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Yr(t) };
}
function Yr(e, t) {
  return rt(new ve(e, t));
}
function jx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ve.isValidMarker(t) && e.classList.contains(ve.getType());
}
function F(e) {
  return e instanceof ve;
}
function Vx(e) {
  return e?.type === ve.getType();
}
const $h = 1, Wx = "c", qh = "span";
class Fr extends zs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Wx, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Ih(t) ? {
        conversion: Hx,
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
    const t = document.createElement(qh);
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
    return this.getShowMarker() ? ir(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: $h
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
function Hx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: jl(t) };
}
function jl(e, t, r, n, i, s) {
  return rt(new Fr(e, t, r, n, i, s));
}
function Ih(e) {
  return e ? e.classList.contains(Mo) && e.tagName.toLowerCase() === qh : !1;
}
function Bs(e) {
  return e instanceof Fr;
}
function Gx(e) {
  return e?.type === Fr.getType();
}
const Lh = 1;
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
    return nr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Lh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = pr();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function pr() {
  return rt(new kn());
}
function $r(e) {
  return e instanceof kn;
}
function la(e) {
  return e?.type === kn.getType();
}
const Jx = [
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
  nr,
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
], Dh = 1, Yx = ["type", "marker", "content"];
class pt extends El {
  __marker;
  __unknownAttributes;
  constructor(t = nr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new pt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Jx.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Xx,
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
      version: Dh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = qi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Xx(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = qi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function qi(e, t) {
  return rt(new pt(e, t));
}
function de(e) {
  return e instanceof pt;
}
function Vl(e) {
  return e?.type === pt.getType();
}
const No = "v", Uh = 1, Qx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ct extends et {
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
    return new Ct(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Fh().updateFromJSON(t);
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
      version: Uh
    };
  }
}
function Fh(e, t, r, n, i, s) {
  return rt(new Ct(e, t, r, n, i, s));
}
function Be(e) {
  return e instanceof Ct;
}
function zh(e) {
  return e?.type === Ct.getType();
}
const Zx = "​", Ii = Zx;
var Id;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Id || (Id = {}));
var Ld;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ld || (Ld = {}));
function eT() {
  return Pe(Ii);
}
function tT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Ii, ""));
}
function js(e) {
  return e.length > 0 && e.includes(Ii) && e.replaceAll(Ii, "") === "";
}
function Vs(e) {
  return M(e) && js(e.getTextContent());
}
function Kh(e) {
  return Fx(e) || Gx(e);
}
function tt(e) {
  return Fe(e) || Bs(e);
}
function Bh(e, t) {
  return e.find((r) => tt(r) && r.getNumber() === t.toString());
}
function rT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && tt(r));
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
function nT(e) {
  if (!e)
    return;
  if (tt(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !tt(t); )
    t = t.getPreviousSibling();
  if (t && tt(t))
    return t;
}
function Vt(e) {
  return $e(e, K) ?? void 0;
}
function iT(e) {
  return Me(e) || Fe(e) || F(e) || Bs(e) || $r(e) || it(e) || de(e) || K(e) || Be(e) || _e(e);
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
function jh(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Ne(e) {
  return ft(e) || Me(e);
}
function ft(e) {
  return de(e) || $r(e);
}
function sT(e) {
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
function oT(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? sk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function aT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Li(e) {
  return e?.type === et.getType();
}
function cT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function lT(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Ve(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ct(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Vh(e, t, r) {
  const n = Ve(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function ir(e, t) {
  let r = Ve(e);
  return t && (r += `${D}${t}`), r += " ", r;
}
function uT(e) {
  const t = e[Ks];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Wh(e) {
  return Gh(e) || Li(e) && uT(e) === "attribute" ? "" : Li(e) && e.text !== D ? e.text : Vx(e) ? e.children.map((t) => Wh(t)).join("") : "";
}
function dT(e) {
  return e.map((r) => Wh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Wt(e) {
  return " " + e + D;
}
function Hl(e) {
  const t = [];
  for (const r of e) {
    if (!F(r))
      continue;
    const n = Hh(r);
    n !== or && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Hh(e) {
  return R(e) || Tr(e) || M(e) && ae(e, fe) === "attribute" ? "" : M(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => Hh(t)).join("") : "";
}
function Tr(e) {
  return Bt(e) && e.getTextType() === "marker";
}
function St(e) {
  return R(e) || Tr(e);
}
function Gl(e) {
  if (!e || !St(e))
    return !1;
  const t = e.getParent();
  return Me(t) && e.is(t.getFirstChild());
}
function Gh(e) {
  return Yl(e) || xh(e) && e.textType === "marker";
}
function Dd(e, t) {
  fT(e, t), e.setMarker(t);
}
function fT(e, t) {
  const r = e.getMarker(), n = Ve(r), i = Ve(r, !0), s = ct(r), o = ct(r, !0), a = ve.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!St(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (R(c))
        c.setMarker(t);
      else if (Tr(c)) {
        const f = l.startsWith(Ve("", !0));
        c.setTextContent(d ? Ve(t, f) : ct(t, f));
      }
    }
  });
}
function Ye(e, t = Yb) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function ze(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Jh(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Yh(e) {
  if (!P(e))
    return Ud(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !M(t)))
    return t ?? void 0;
  try {
    return Ud(e) ?? t ?? void 0;
  } catch (n) {
    if (Jh(n))
      return t ?? void 0;
    throw n;
  }
}
function pT(e, t) {
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
function hT(e) {
  return !!e && e.includes("-");
}
function Xh(e) {
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
  if (ii(e) || R(e) || Tr(e) || je(e) || Bt(e) && e.getTextType() === "attribute")
    return !0;
  if (M(e)) {
    const t = ae(e, fe);
    if (t === Ur || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === D || js(r))
      return !0;
  }
  return !1;
}
function Hs() {
  const e = Pe(D);
  return Ot(e, fe, Ur), e.setMode("token"), e;
}
function gT(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function zr(e) {
  return M(e) && ae(e, fe) === Ur;
}
function Qh(e) {
  const t = e.getFirstChild();
  if (!St(t) || t === null || zr(t.getNextSibling()))
    return !1;
  const r = O();
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
      if (Ae(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (M(s) && s.getType() === et.getType()) {
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
  for (; t && Ae(t); )
    t = t.getParent();
  return t;
}
function mT(e, t) {
  return Hi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function yT(e, t) {
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
function bT(e, t) {
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
function Zh(e, t) {
  const r = Hi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Ws(n))
    return Zh(e, t + 1);
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
function kT(e, t) {
  if (t <= 0)
    return 0;
  const r = Hi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? xT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function xT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const TT = 1;
class Kr extends et {
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
    return kt().updateFromJSON(t);
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
      version: TT
    };
  }
}
function kt(e, t, r) {
  return rt(new Kr(e, t, void 0, r));
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
function CT(e) {
  e.setTextContent(Ln(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ln(e, t, r = !1) {
  return t === "closing" ? ct(e, r) : t === "selfClosing" ? ct("") : Ve(e, r);
}
const _T = /* @__PURE__ */ new Set(["closed"]);
function Pr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !_T.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function eg(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function tg(e) {
  const t = Object.keys(e).filter((n) => !Zk.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function rg(e, t, r, n) {
  return eg(
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
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : gs(e) === void 0 && ng(e) === void 0;
}
function ng(e) {
  return e.getChildren().find((t) => M(t) && ae(t, fe) === "attribute");
}
function vs(e, t) {
  return Gs(e.getNextSibling(), t);
}
const vT = /^[ \u00A0]+$/;
function Xl(e) {
  if (tn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ve(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && vT.test(r.slice(t.length));
}
function Gs(e, t) {
  let r, n, i, s;
  return je(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), R(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Xl(e) && (r = e, e = e.getNextSibling()), M(e) && ae(e, fe) === "attribute" && (n = e, e = e.getNextSibling()), R(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && tn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
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
  if (M(n) && n.getTextContent() === Wt(e.getCaller()))
    return n;
}
function Ql(e) {
  const t = Xr(e);
  return t ? Gs(t.getNextSibling(), "cat") : {};
}
function da(e) {
  const t = e.getFirstChild();
  if (!(!M(t) || R(t)) && ae(t, fe) !== "attribute")
    return t;
}
function ig(e) {
  const t = da(e);
  return t ? Gs(t.getNextSibling(), "ca") : {};
}
function sg(e) {
  const t = da(e);
  if (!t)
    return;
  const r = Gs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function og(e) {
  const t = sg(e);
  return t ? Gs(t.getNextSibling(), "cp") : {};
}
function ag(e) {
  const t = e.getParent();
  if (!F(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Be(n))
        return n;
      if (!(R(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || M(n) && ae(n, fe) === "attribute" || F(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || je(n)))
        return;
    }
}
function fa(e) {
  let t, r, n, i, s = e.getNextSibling();
  return je(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), R(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Xl(s) && (t = s, s = s.getNextSibling()), M(s) && ae(s, fe) === "attribute" && (r = s, s = s.getNextSibling()), R(s) && s.getMarkerSyntax() === "selfClosing" && tn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Zl(e) {
  return F(ua(e));
}
function eu(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Zl(t) : t.getChildren().some((i) => F(i) && i.getMarker() === r) ? !0 : void 0;
}
function MT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!R(t))
      return;
    const r = eu(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Gi(e) {
  return M(e) && e.getType() === et.getType() && ae(e, fe) !== "attribute";
}
function pa(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !R(t) || !F(r) || !cg(t, r) || !Gi(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function cg(e, t) {
  return e.getMarkerSyntax() === "opening" && eu(e, t) !== void 0;
}
function tu(e, t) {
  if (!cg(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return R(r) ? eu(r, t) === !0 ? "spacer" : void 0 : Gi(r) ? r.getTextContent().startsWith(D) ? void 0 : "prefix" : "spacer";
}
function ET(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (R(t) && tu(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function lg(e, t) {
  const r = O();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function ug(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!R(t))
      return;
    const r = tu(t, e);
    if (r !== void 0 && !lg(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        M(n) && n.setTextContent(D + n.getTextContent());
      } else
        t.insertAfter(Pe(D));
  });
}
function dg(e) {
  return e.isAttached() ? e.getChildren().some((t) => R(t) && tu(t, e) !== void 0 && lg(t, e)) : !1;
}
const AT = "file", PT = "src", NT = "colspan", wT = "category", OT = "alt", RT = "closed", $T = "false";
function qT(e) {
  return e[RT] !== $T;
}
function IT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === AT ? PT : t,
    r
  ]));
}
function fg(e, t) {
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
function pg(e, t, r) {
  const n = r ?? {}, i = qT(n);
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
        opening: `\\${fg(t, n[NT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Pr(IT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [wT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Pr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [OT]: s, ...o } = n;
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
const It = { wantsRun: !1, valueText: void 0 }, rn = {};
function Xa(e, t) {
  if (t === "va")
    return e;
  const r = vs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function ru(e) {
  const t = O();
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
  const n = O();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function LT(e) {
  return je(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : R(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : M(e) && ae(e, fe) === "attribute";
}
function DT(e) {
  if (R(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!M(e) || ae(e, fe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!R(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Qa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Be(t))
      return t;
    if (!LT(t))
      return;
  }
}
function Fd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Be(t),
    ownerOf: (t) => {
      if (je(t))
        return t.getRunKind() === e ? Qa(t) : void 0;
      const r = t.getParent();
      return je(r) ? r.getRunKind() === e ? Qa(r) : void 0 : DT(t) === e ? Qa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Be(t))
        return It;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? It : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (t) => Be(t) ? vs(Xa(t, e), e) : rn,
    graceSite: (t, r) => Be(t) ? !r.opener && !r.closer ? ru(Xa(t, e)) : ha(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Be(t) ? Xa(t, e) : void 0
    }
  };
}
const UT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => It,
  scanPieces: () => rn,
  graceSite: (e) => F(e) && dg(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, FT = {
  kind: "char",
  ownerPredicate: (e) => F(e),
  ownerOf: (e) => {
    if (!M(e) || ae(e, fe) !== "attribute")
      return;
    const t = e.getParent();
    return F(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!F(e) || gs(e) === void 0)
      return It;
    const t = Pr(e.getUnknownAttributes() ?? {}, aa(e.getMarker()));
    return t === "" ? It : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => F(e) ? { value: ng(e) } : rn,
  graceSite: (e, t) => {
    if (!F(e) || t.value)
      return !1;
    const r = gs(e);
    if (!r)
      return !1;
    const n = O();
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
    insertRunBefore: (e) => F(e) ? gs(e) : void 0
  }
};
function hg(e) {
  if (R(e))
    return e.getMarker() === "cat";
  if (!M(e) || ae(e, fe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return R(t) && t.getMarker() === "cat";
}
function zT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = Xr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!hg(n))
        return;
    }
}
const KT = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (je(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return je(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : hg(e) ? zT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return It;
    const t = e.getCategory();
    return t === void 0 ? It : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => K(e) ? Ql(e) : rn,
  graceSite: (e, t) => {
    if (!K(e))
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
    insertRunAfter: (e) => K(e) ? Xr(e) : void 0
  }
};
function BT(e) {
  return je(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : R(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : M(e) && ae(e, fe) === "attribute";
}
function jT(e) {
  if (R(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!M(e) || ae(e, fe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!R(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function VT(e) {
  const t = e.getParent();
  if (!Fe(t))
    return;
  const r = da(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!BT(n))
        return;
    }
}
function zd(e) {
  const t = (r) => Fe(r) ? e === "ca" ? da(r) : sg(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Fe(r),
    ownerOf: (r) => {
      if (je(r))
        return r.getRunKind() === e && Fe(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return je(n) ? n.getRunKind() === e && Fe(n.getParent()) ? n.getParent() ?? void 0 : void 0 : jT(r) === e ? VT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Fe(r))
        return It;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? It : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (r) => Fe(r) ? e === "ca" ? ig(r) : og(r) : rn,
    graceSite: (r, n) => {
      if (!Fe(r))
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
function gg(e) {
  if (R(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return M(e) && ae(e, fe) === "attribute";
}
function WT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (it(t)) {
      const r = R(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!gg(t))
      return;
  }
}
const HT = {
  kind: "milestone",
  ownerPredicate: (e) => it(e),
  ownerOf: (e) => {
    const t = je(e) ? e.getRunKind() === "milestone" ? e : void 0 : je(e.getParent()) ? e.getParent() : gg(e) ? e : void 0;
    if (!t || je(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return je(t) ? it(r) ? r : void 0 : WT(t);
  },
  expectedPieces: (e) => {
    if (!it(e))
      return It;
    const t = rg(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Pr(t, ca(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : D + r };
  },
  scanPieces: (e) => {
    if (!it(e))
      return rn;
    const { opening: t, attribute: r, closing: n, wrapper: i } = fa(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!it(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = O();
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
    glyphMarker: (e) => it(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, GT = pg("optbreak", void 0, void 0).opening, JT = {
  kind: "optbreak",
  ownerPredicate: (e) => _e(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!_e(t) || t.getTag() !== "optbreak"))
      return M(e) || Bt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: GT }),
  scanPieces: (e) => _e(e) ? { value: e.getFirstChild() ?? void 0 } : rn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, YT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => _e(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => It,
  scanPieces: () => rn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, XT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => It,
  scanPieces: () => rn,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ms = [
  UT,
  FT,
  Fd("va"),
  Fd("vp"),
  KT,
  zd("ca"),
  zd("cp"),
  HT,
  JT,
  YT,
  XT
], QT = new Map(Ms.map((e) => [e.kind, e]));
function Xn(e) {
  const t = QT.get(e);
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
function mg(e) {
  return Qn(e) !== void 0;
}
const Oo = "unmatched", yg = 2;
function ms(e) {
  return `\\${e}`;
}
class nn extends et {
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
      [Oo]: (t) => eC(t) ? {
        conversion: ZT,
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(_d), r.title = Kd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Kd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Oo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(_d), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: yg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function bg(e) {
  return e.getTextContent() === ms(e.getMarker());
}
function Kd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function ZT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: nu(t) };
}
function nu(e) {
  return rt(new nn(e));
}
function eC(e) {
  return e?.tagName.toLowerCase() === Oo;
}
function sn(e) {
  return e instanceof nn;
}
const kg = "table", Lc = "immutable-table", xg = 1, tC = ["type", "marker", "content"];
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
    return rC().updateFromJSON(t);
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
      version: xg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function rC(e) {
  return rt(new ci(e));
}
function Tg(e) {
  return e instanceof ci;
}
function nC(e) {
  return e?.type === Lc;
}
const Cg = "table:row", Bd = "immutable-table-row", _g = 1, Dc = "tr", iC = ["type", "marker", "content"];
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
    return sC().updateFromJSON(t);
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
      version: _g
    };
  }
}
function sC(e, t) {
  return rt(new Ji(e, t));
}
const Sg = "table:cell", jd = "immutable-table-cell", vg = 1, Uc = "tc1", oC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function aC(e) {
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
    return cC().updateFromJSON(t);
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
    const n = aC(this.__align);
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
      version: vg
    };
  }
}
function cC(e, t, r, n) {
  return rt(new Yi(e, t, r, n));
}
function Js(e, t) {
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function ar(e, t) {
  const r = Js(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Es(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function lC(e) {
  return e.getChildren().some((t) => R(t) && t.getMarkerSyntax() === "closing");
}
function uC(e) {
  return Es(e) ? void 0 : { closed: "false" };
}
function dC(e, t, r, n) {
  const i = t.getMarker(), s = Zl(t), o = lC(t);
  if (n) {
    e.append(kt(i, "opening", s));
    const [a] = r;
    Gi(a) && !a.getTextContent().startsWith(D) && a.setTextContent(D + a.getTextContent());
  }
  e.append(...r), o && e.append(kt(i, "closing", s));
}
function Zn(e) {
  return $e(e, F) ?? void 0;
}
function fC(e) {
  let t = e.getParent();
  for (; F(t); )
    t = t.getParent();
  return t;
}
function Fc(e) {
  const t = Mg(e);
  return e.getChildren().every((r) => R(r) || t && ae(r, fe) === "attribute" || M(r) && r.getTextContent().replaceAll(D, "") === "");
}
function Mg(e) {
  return Es(e);
}
function pC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Pr(r, aa(e.getMarker())) : "";
  n !== "" && t.insertAfter(Pe(n)), e.remove();
}
function hC(e, t) {
  if (Es(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(kt(e.getMarker(), "closing", Zl(e)));
}
function gC(e, t) {
  return F(e) && !Es(e) && !Es(t);
}
function mC(e, t, r) {
  Fc(e) && e.getChildren().forEach((i) => {
    R(i) || i.remove();
  });
  const [n] = t;
  r && Gi(n) && !n.getTextContent().startsWith(D) && n.setTextContent(D + n.getTextContent()), e.append(...t);
}
function yC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Mg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = R(l) && l.getMarkerSyntax() === "closing", f = s && ae(l, fe) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = gC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      mC(e, o, n);
    else {
      const l = Yr(t.getMarker(), uC(t));
      dC(l, t, o, n), e.insertAfter(l), Fc(l) ? l.remove() : c = l;
    }
  i && !a && hC(t, n), Fc(t) && pC(t, c);
}
function Di(e, t) {
  let r = e.getParent();
  for (; F(r); )
    yC(e, r, t), r = e.getParent();
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
function bC(e, t) {
  return Oi.set(e, t), () => {
    Oi.get(e) === t && Oi.delete(e);
  };
}
function Vd(e) {
  return Oi.get(e);
}
function kC(e) {
  return Oi.get(gn())?.has(e.getKey()) ?? !1;
}
function xC(e) {
  Oi.get(gn())?.add(e.getKey());
}
function TC(e) {
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
  return r.wantsRun ? iu(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : TC(t);
}
function CC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return iu(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Eg(e, t) {
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
  const i = O();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || wo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function _C(e, t, r, n) {
  return !r.wantsRun || zc(n) || ok(Ts) ? !1 : gn().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : zc(e.scanPieces(i));
  });
}
function SC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Hd(e) {
  const t = Pe(e);
  return Ot(t, fe, "attribute"), t;
}
function vC(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Mh(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function MC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    M(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Hd(n.valueText));
    return;
  }
  const l = vC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = kt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : M(u) ? iu(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Hd(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(kt(a === "selfClosing" ? "" : o(t), a));
}
function As(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (ma(e, i, n) && !kC(t)) {
    if (_C(e, t, n, i)) {
      xC(t);
      return;
    }
    if (!Ys(e, t)) {
      if (!n.wantsRun) {
        SC(i);
        return;
      }
      MC(e, t, i, n);
    }
  }
}
function EC(e, t, r) {
  As(e, t), t.isAttached() && Ys(e, t) && r.add(t.getKey());
}
function Xs(e) {
  if (!M(e))
    return !1;
  if (R(e) || Be(e) || sn(e))
    return !0;
  const t = ae(e, fe);
  return t === "attribute" || t === Ur;
}
function su(e, t) {
  return R(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && tn(e) && F(e.getParent())) : !1;
}
function AC() {
  const e = O();
  return P(e) ? su(e.focus.getNode(), e.focus.offset) : !1;
}
function Ag(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return M(t) && Xs(t) ? t : void 0;
}
function PC(e) {
  const t = Ag(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function NC(e) {
  const t = Ag(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Gd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Jd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function wC(e, t) {
  let r = NC(e);
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
  const r = wC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function ou(e) {
  if (e.isCollapsed()) {
    const a = PC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Gd(r), Gd(n)], s = Yd(r, "next"), o = Yd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Jd(r, i[0]), Jd(n, i[1]), !1) : !0;
}
const Ro = "verse-block", Pg = 1, OC = "verse-block";
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
    return RC().updateFromJSON(t);
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
    return Xh(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(OC), Xd(t, this.__number), t;
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
      version: Pg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Xd(e, t) {
  const { start: r, end: n } = Xh(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Qd(e, "data-verse-start", i ? r : NaN), Qd(e, "data-verse-end", i ? n : NaN);
}
function Qd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function RC(e) {
  return rt(new Xi(e));
}
function Ps(e) {
  return e instanceof Xi;
}
function $C(e) {
  return e?.type === Ro;
}
const qC = [
  jt,
  Fr,
  Gt,
  Ct,
  ve,
  Le,
  yr,
  Kr,
  ai,
  Zr,
  nn,
  pt,
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
}, IC = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function LC(e) {
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
      type: IC[n.styleType] ?? x.Unknown,
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
const Ng = "v", wg = 1, DC = "verse-selected";
class Dt extends zs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Ng, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Dt(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => zC(t) ? {
        conversion: FC,
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
    const t = this.getShowMarker() ? ir(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      vo + this.getNumber() + vo
    );
    return E(UC, { nodeKey: this.getKey(), text: t });
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
      version: wg
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Jh(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function UC({ nodeKey: e, text: t }) {
  const [r] = Ck(e);
  return E("span", { className: r ? DC : void 0, children: t });
}
function FC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: au(t) };
}
function au(e, t, r, n, i, s) {
  return rt(new Dt(e, t, r, n, i, s));
}
function zC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Ng;
}
function li(e) {
  return e instanceof Dt;
}
function KC(e) {
  return e?.type === Dt.getType();
}
function ke(e) {
  return Be(e) || li(e);
}
function Og(e) {
  return zh(e) || KC(e);
}
function BC(e) {
  return jC(e).find((t) => de(t));
}
function jC(e) {
  return e.some(Ps) ? e.flatMap((t) => Ps(t) ? t.getChildren() : t) : e;
}
function ya(e) {
  return L(e) ? Ps(e) ? e.getChildren().flatMap(ya) : e.getChildren() : [];
}
function VC(e, t) {
  return ya(e).find((i) => ke(i) && Jl(t, i.getNumber()));
}
function WC(e, t) {
  return t === 0 ? BC(e) : e.map((r) => VC(r, t)).filter((r) => r)[0];
}
function qo(e) {
  return ya(e).find((r) => ke(r));
}
function Rg(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ke(i))
      return i;
  }
}
function HC(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ke(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !tt(r); ) {
    const n = qo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Io(e) {
  return ya(e).findLast((t) => ke(t));
}
function GC(e) {
  if (!Be(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function JC(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function YC(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return JC(t, e, r);
  if (M(e)) {
    const n = GC(e);
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
function XC(e) {
  const t = Ic(e);
  if (!(!t || tt(t)))
    return ke(t) ? t : Io(t) ?? uu(t);
}
function QC(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return Za(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (YC(e, t)) {
    const i = XC(e);
    return i ? Za(i) : { verseNum: n };
  }
  return Za(e);
}
function ZC(e) {
  return iT(e) || li(e);
}
function cu(e) {
  if (M(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(D) && e.setTextContent(`${t} `);
  }
}
function $g(e) {
  if (M(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Kc(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function e_(e) {
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
        if (ke(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = ef(i);
      for (; s && !tt(s); ) {
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
      if (s = s.getNextSibling(), s && tt(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function t_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = lu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = Rg(i, r.getIndexWithinParent())), !n && i) {
      let o = tf(i);
      for (; o && !tt(o); ) {
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
    for (; s && !tt(s); ) {
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
    if (n && ke(n))
      return n;
    const i = Rg(e, t.anchor.offset);
    if (i)
      return i;
    const s = qo(e);
    if (s)
      return s;
  }
  return uu(e);
}
function uu(e) {
  if (!e || tt(e))
    return;
  if (ke(e))
    return e;
  let t = Ic(e);
  for (; t; ) {
    if (tt(t))
      return;
    if (ke(t))
      return t;
    const r = Io(t);
    if (r)
      return r;
    t = Ic(t);
  }
}
const r_ = ["style"], n_ = ["style", "code"], Lo = ["style", "cid"], i_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], s_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], o_ = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], a_ = ["style", "caller", "category", "contents"], c_ = ["tag", "marker", "contents"], l_ = [
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
function u_(e, t) {
  const r = se(e);
  if (!Ht(r))
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
    for (let u = i.length - 1; u >= 0; u--)
      if (Ui(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Ui(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Qr(l) || Ht(l))
        return n;
      Ne(l) && (a = l);
    }
    if (Ne(l) && (i.includes(l) || i.push(l)), qg(l, t)) {
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
  if (e.length < 2 || !p_(e[0]) || !f_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => d_(n, r)?.getKey());
}
function d_(e, t = "delta-doc") {
  const r = oa();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Ui(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Ui(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Ne(a) && (i.includes(a) || i.push(a)), qg(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = fu(a, t);
    if (Qr(a) && l > 0 && e >= n && e < n + l || Ht(a) && n === e)
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
  return M(e) && !Ht(e);
}
function Ht(e) {
  return tt(e) || ke(e) || it(e) || K(e) || _e(e) || sn(e);
}
function fn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function f_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && l_.includes(t);
}
function p_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function qg(e, t) {
  return K(e) || _e(e) ? !0 : t === "apply" && L(e) && Ht(e);
}
function Ig(e) {
  const t = e.getParent();
  return St(e) && de(t) && t.getFirstChild() === e;
}
function Bc(e) {
  const t = e.getParent();
  return t !== null && $e(t, je) !== null;
}
function h_(e) {
  const t = e.getParent();
  return F(t) && e.getTextContent() === or && t.getChildrenSize() === 1;
}
function g_(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return R(r) && r === t.getFirstChild() && e.getTextContent() === Wt(t.getCaller());
}
function m_(e) {
  return !mg(e) && fu(e, "delta-doc") === e.getTextContentSize();
}
function fu(e, t) {
  if (Ht(e))
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
    (Vs(e) || Ig(e) || ae(e, fe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ae(e, fe) === "attribute" || Bc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(ql) || h_(e) || g_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function jc(e, t) {
  const r = { insert: e.__text }, n = ae(e, bn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Lg(t);
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
    const r = Ke();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && $r(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = y_();
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
function y_() {
  return ba();
}
function sf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return b_(e, a, n), k_(e, a, i, s, o), x_(e, t, r, i, o, s, a), tt(e) && a.push(S_(e)), ke(e) && a.push(M_(e)), it(e) && a.push(E_(e)), sn(e) && a.push(A_(e)), C_(e, a, s), T_(e, a, s), O_(c, s), a;
}
function b_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Me(n) ? t.push(__(n)) : de(n) ? t.push(v_(n)) : $r(n) && t.push({ insert: Ns });
  }
  Ne(e) && (r.includes(e) || r.push(e));
}
function k_(e, t, r, n, i) {
  if (!M(e) || Be(e) || sn(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = Vt(e) !== void 0;
  if (R(e) && (o || Ig(e) || Bc(e) || mg(e)) || ae(e, fe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (js(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && R(c) && c === s.getFirstChild() && a === Wt(s.getCaller()))
    return;
  const l = F(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(pa(e)));
  const d = a.startsWith(ql) || ae(e, fe) === "attribute" || Bc(e), u = !!l && a === or && l.getChildrenSize() === 1, f = ka(e, n), p = f ? r.filter((y) => f.children.includes(y)) : r, h = jc(e, p);
  if (h.insert = a, f) {
    if (!a || a === D || d)
      return;
    f.contentsOps?.push(h);
  } else
    u || d || t.push(h);
  const g = a !== "" && !u && !(d && l);
  if (r.length > 0 && g)
    for (const y of r)
      i.add(y);
}
function x_(e, t, r, n, i, s, o) {
  F(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Ui(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = N_(c), d = ka(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function T_(e, t, r) {
  if (!K(e))
    return;
  const n = P_(e), i = ka(e, r), s = {
    node: e,
    children: oi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function C_(e, t, r) {
  if (!_e(e))
    return;
  const n = w_(e), i = ka(e, r), s = {
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
function __(e) {
  const t = { style: Ss, code: e.__code };
  return En(t, e), { insert: Ns, attributes: { book: t } };
}
function S_(e) {
  const t = { style: Po, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), En(t, e), { insert: { chapter: t } };
}
function v_(e) {
  const t = { style: e.__marker };
  return En(t, e), { insert: Ns, attributes: { para: t } };
}
function M_(e) {
  const t = { style: No, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), En(t, e), { insert: { verse: t } };
}
function E_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), En(t, e), { insert: { milestone: t } };
}
function A_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function P_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), En(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ae(e, bn);
  return n && (r.attributes = { segment: n }), r;
}
function N_(e) {
  const t = { insert: "" }, r = Lg([e]);
  return r && (t.attributes = { char: r }), t;
}
function w_(e) {
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
function O_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Ui(t[r].node, e) && t.splice(r, 1);
}
function Lg(e) {
  if (e.length === 0)
    return;
  const t = e.map(R_);
  return t.length === 1 ? t[0] : t;
}
function R_(e) {
  const t = { style: e.__marker }, r = ae(e, Jn);
  return r && (t.cid = r), En(t, e), t;
}
function pu(e) {
  let t = 0;
  for (const { node: r } of oa())
    if (K(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function $_(e) {
  let t = 0;
  for (const { node: r } of oa())
    if (K(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const Dg = 1;
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
      span: (t) => I_(t) ? {
        conversion: q_,
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => L_(t, n), (l) => D_(t, n, s, l), () => U_(t, n), () => F_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return E("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === xs && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === ch && i ? (
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
      version: Dg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function q_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: hu(t, r) };
}
function hu(e, t, r) {
  return rt(new hr(e, t, r));
}
function I_(e) {
  return e ? e.classList.contains(hr.getType()) : !1;
}
function xt(e) {
  return e instanceof hr;
}
function L_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function D_(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!K(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!xt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function U_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return ba(r);
  });
}
function F_(e, t) {
  return e.getEditorState().read(() => pu(t));
}
const z_ = [
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
], K_ = ["†"];
function xa(e) {
  if (Ug())
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
  if (Ug())
    return;
  const e = O();
  if (!e || !P(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Do(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Do(i, s);
  return { start: n, end: o };
}
function of(e) {
  if (Xb(e)) {
    const t = Fp(e.jsonPath);
    let r = Ke();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = Hi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : bT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, kT(r, e.offset)] : [void 0, void 0];
  }
  if (Qb(e) || Zb(e)) {
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
  if (tk(e)) {
    const t = is(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ec(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && M(n) ? [n, 0] : [void 0, void 0];
  }
  if (rk(e)) {
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
  if (nk(e)) {
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
  throw new Error(`Unsupported UsjDocumentLocation type: ${ik(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
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
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Fp(r);
  let i = Ke();
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
    const r = e.getMarkerSyntax(), n = B_(e), i = n ? wn(qn(n)) : wn(qn(e));
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
  if (Ae(e)) {
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
    const n = Zh(e, t);
    return n.type === "text" ? {
      jsonPath: wn([...qn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: wn(qn(e)),
      offset: n.index
    };
  }
  if (M(e)) {
    const r = yT(e, t);
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
function B_(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = j_(e);
  return r && !Ne(r) && !M(r) && !Ae(r) ? r : t;
}
function j_(e) {
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
    const i = mT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Ug() {
  for (let e = Ke().getFirstChild(); e; e = e.getNextSibling())
    if (Ps(e))
      return !0;
  return !1;
}
function V_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Fg(e, t, r, n, i, s, o) {
  if (!Le.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? xa(r) : O();
  if (!P(a))
    return;
  const c = G_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? V_(e, s), d = zg(e, l, c, i, s, void 0, void 0);
  return H_(d, a, i), d;
}
function mu(e) {
  return e !== "expanded";
}
function W_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!M(r) || !F(r.getParent()))
    return;
  if (R(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return R(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function H_(e, t, r) {
  const n = mu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || aT(t), ou(t);
  const i = W_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(F)?.selectEnd();
}
function Ci(e, t, r) {
  const n = Yr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(kt(e)) : r?.markerMode === "visible" && n.append(Jr("marker", Ve(e)));
  const s = t === "" ? or : i ? D + t : t;
  return n.append(Pe(s)), n;
}
function G_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
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
function zg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : mu(n?.noteMode), l = Ul(e, t, c);
  s && Ot(l, bn, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = kt(e), d && u.setMode("token"), a || (f = kt(e, "closing"))) : n?.markerMode === "visible" && (u = Jr("marker", Ve(e) + " "), a || (f = Jr("marker", ct(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    p = Pe(Wt(l.__caller)), d && p.setMode("token"), l.append(p, ...r);
  else {
    const h = () => Hs(), g = r.flatMap(rS(h));
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
    const t = se(e);
    return K(t) ? t : void 0;
  }
  return $_(e);
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
    const n = e.getChildren(), i = n.slice().reverse().find(F);
    if (i)
      J_(i);
    else {
      const s = yu(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function yu(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return R(r) && r.getMarkerSyntax() === "closing" || Tr(r) && r.getTextContent() === ct(e.getMarker()) ? t : -1;
}
function J_(e) {
  const t = yu(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  M(r) && !Ws(r) ? r.selectEnd() : e.select(t, t);
}
function Kg(e, { isContentChange: t = !1 } = {}) {
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
  if (!K(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = mn();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Nr(i), r && gn().dispatchCommand(Kt, void 0);
}
function lf(e, t, r) {
  const n = Xr(e), i = Y_(e, n);
  if (r && jg(i, t, r, Bg(e, n)))
    return !0;
  let s = Math.max(t, 0), o;
  for (const { node: c, isGlyph: l, dataStart: d } of i) {
    if (l)
      continue;
    const u = c.getTextContentSize() - d;
    if (s < u) {
      const f = d + s;
      return c.select(f, f), !0;
    }
    s -= u, o = c;
  }
  if (!o)
    return !1;
  const a = o.getTextContentSize();
  return o.select(a, a), !0;
}
function Y_(e, t) {
  const r = [];
  for (const { node: n } of oi(e))
    !M(n) || $e(n, je) || (ku(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: pa(n) }) : X_(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function X_(e, t) {
  return sn(e) ? !0 : R(e) && !t.is(e.getParent());
}
function Bg(e, t) {
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
function jg(e, t, r, n) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === r.index)
      return Q_(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function Q_(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function Z_(e, t, r) {
  const { opener: n, value: i, closer: s } = Ql(e);
  if (!i)
    return !1;
  const o = eS(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = Xr(e);
    if (jg(c, t, r, Bg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function eS(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function ku(e, t) {
  return !M(e) || Ws(e) || Xs(e) ? !1 : !t || !e.is(t);
}
function tS(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(F))
    return;
  const t = Xr(e);
  for (const { node: n } of oi(e))
    if (ku(n, t))
      return;
  const r = yu(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function rS(e) {
  return (t) => Bt(t) ? [t] : [t, e()];
}
function nS(e) {
  const t = e.getParent();
  return t !== null && $e(t, K) !== null;
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
    if (!(K(c) || xt(c) || nS(c)) && !R(c) && !sn(c) && ae(c, fe) !== "attribute") {
      if (ke(c)) {
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
  Dt,
  ...qC
], iS = [
  Xi,
  ...xu
], sS = Mn((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return E("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function oS() {
  const [e, t] = ye(void 0), [r, n] = ye(), i = Z(null), s = xe((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Ok(l, c, () => {
      Rk(l, c, {
        placement: "bottom-start",
        middleware: [$k(), qk()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = xe(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return B(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function aS({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = oS();
  return B(() => {
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
const cS = Vb(sS);
function Vg({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = aS({ isOpen: e, floatingBoxRef: r }), s = Ze(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Un(
    E(cS, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Wg = Dp(void 0);
function Tu() {
  const e = Up(Wg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function lS(e, t) {
  const [r, n] = ye(0), [i, s] = ye(-1), o = Ze(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = xe(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = xe(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = xe(() => {
    const u = o.length;
    if (r >= 0 && r < u) {
      const f = o[r];
      t?.(f), s(r);
    }
  }, [r, o, t]);
  return {
    state: a,
    moveUp: c,
    moveDown: l,
    select: d,
    setActiveIndex: n,
    setSelectedIndex: s
  };
}
function uS({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = lS(t, r);
  return E(Wg.Provider, { value: i, children: E("div", { ...n, children: e }) });
}
const Hg = Mn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Tu(), d = xe((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = xe((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return E("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function dS({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = Tu(), o = Ze(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ze(() => {
    const c = o(s);
    return t ? Wb.map(c, (l, d) => Hb(l) && l.type === Hg && l.props.index === void 0 ? Gb(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return B(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), E("div", { ref: n, role: "menu", ...r, children: a });
}
const fS = (e, t, r) => ko(e, r).toLowerCase().includes(t.toLowerCase()), df = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", ko = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function pS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? df(r[0]) : "") : (d = n || (r.length > 0 ? df(r[0]) : ""), u = (h, g) => fS(h, g, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return u(h, t);
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
          const A = k.indexOf(l), _ = b.indexOf(l);
          if (A !== -1 && _ === -1)
            return -1;
          if (_ !== -1 && A === -1)
            return 1;
          if (A !== -1 && _ !== -1)
            return A - _;
          break;
        }
      }
    return k.localeCompare(b);
  });
}
const tc = {
  Root: uS,
  Options: dS,
  Option: Hg
};
function hS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ze(() => pS({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function gS() {
  const { moveUp: e, moveDown: t, select: r } = Tu();
  return Ze(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const mS = () => {
  const e = gS(), [t] = ue();
  B(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(xr, r, Oe);
  }, [t, e]);
};
function yS() {
  return mS(), null;
}
const bS = ["Shift", "Control", "Alt", "Meta"];
function Gg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ue(), d = s !== void 0, [u, f] = ye(""), p = d ? s ?? "" : u, h = hS({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return B(() => {
    a?.(p, h);
  }, [a, p, h]), B(() => l.registerCommand(xr, (y) => {
    if (d || c?.includes(y.key) || bS.includes(y.key))
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
  }, Oe), [l, d, p, o, n, c]), Re(tc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => g(y), children: [!d && E("input", { value: p, type: "text", disabled: !0 }), E(yS, {}), E(tc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((b, T) => Re(tc.Option, { index: T, children: [E("span", { className: "label", children: b.label ?? b.name }), E("span", { className: "description", children: b.description })] }, b.name)) })] });
}
function kS({ trigger: e, items: t }) {
  const [r] = ue(), [n, i] = ye(!1), s = xe((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return B(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), B(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = O();
      if (P(l))
        return l;
    });
    a.read(() => {
      const l = O();
      !P(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && E(Vg, { isOpen: n, children: ({ placement: o }) => E(Gg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function xS({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Ze(() => {
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
function TS(e, t) {
  B(() => {
    if (!e.hasNodes([dt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ie(eh(e, dt, (n) => _s(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], h = a[l]?.[u], g = c[l]?.[u];
          i.addID(l, u, f, p, h, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(dt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = se(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Ae(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!dt.isReservedType(c))
              for (const d of l) {
                let u = t.get(ys(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(ys(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(ys(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const CS = Mn(function({ logger: t }, r) {
  const [n] = ue(), i = Ze(() => /* @__PURE__ */ new Map(), []);
  TS(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(ys(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = se(d);
        Ae(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && Ao(u));
      }
  };
  return ra(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (dt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = xa(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), _h(p, a, c, l, d, u, f);
      }, { tag: Ac });
    },
    removeAnnotation(o, a) {
      if (dt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(ys(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ac });
    }
  })), null;
}), _S = [];
function SS({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = _S, onChange: n }) {
  const [i] = ue();
  return Fs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(Pl) && !d.has(uh) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = vS(i, s);
        u.length !== 0 && n(o, i, d, u, l);
      });
  }, [i, e, t, r, n]), null;
}
function vS(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new ds();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && Vt(s) !== void 0;
    if (t.size === 1 && M(s) && !o && m_(s)) {
      const a = du(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = se(i);
          return new ds([M(u) ? jc(u) : { insert: "" }]);
        }), l = new ds([jc(s)]), d = new ds(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = nf(r), c = nf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const Cu = "formatted", Jg = "unformatted", Yg = "paragraph-structure", _u = "standard", Xg = "block-verse", MS = {
  [Cu]: "Formatted",
  [Jg]: "Unformatted",
  [Yg]: "Paragraph Structure",
  [_u]: "Standard",
  [Xg]: "Block Verse"
};
function ui(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Su, vu;
function ES(e) {
  const t = Mu(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Su = e, vu = t;
}
ES(Cu);
const Aw = () => Su, Ta = () => vu;
function Mu(e) {
  let t;
  switch (e ?? Su) {
    case Cu:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Jg:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Yg:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case _u:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Xg:
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
function Pw(e) {
  if (!e)
    return;
  const t = ff(e);
  return Object.keys(MS).find((r) => Qt(ff(Mu(r)), t));
}
const AS = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function ff(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...AS, ...t };
}
function Qs(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function PS(e) {
  if (e)
    return ws(e) ? Dt : e.markerMode === "editable" ? Ct : Dt;
}
function ws(e) {
  return e?.verseLayout === "block";
}
function NS(e) {
  const t = [], r = e ?? vu;
  return r && (t.push(`${Jk}${r.markerMode}`), r.hasSpacing && t.push(Hk), r.isFormattedFont && t.push(Gk)), t;
}
function wS(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += OS(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), $S(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += qS(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), LS(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function OS(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), RS(t, e.retain, e.attributes, r, n)), e.retain);
}
function RS(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ke();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Qr(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, h = Math.min(s, p);
        if (h > 0) {
          let g = d;
          const y = f > 0, k = h < u - f;
          if (y && k) {
            const [, b] = d.splitText(f);
            [g] = b.splitText(h);
          } else y ? [, g] = d.splitText(f) : k && ([g] = d.splitText(h));
          if (xn(r)) {
            const b = g.getParent();
            if (F(b)) {
              const T = r.char;
              let A;
              Array.isArray(T) ? a >= 0 && a <= T.length - 1 && (A = T[a]) : a === 0 && (A = T);
              const _ = A ? Yn(A, b) : !1;
              if (_ && Array.isArray(T) && T.length > 1) {
                const w = Pe("");
                g.replace(w);
                const $ = typeof r.segment == "string" ? r.segment : void 0, z = Qi(T.slice(1), n, g, $);
                let S = w;
                for (const W of z)
                  S.insertAfter(W), S = W;
                w.remove(), Zt(r, g);
              } else if (_)
                Zt(r, g);
              else {
                g.remove();
                const w = pf(g, r, n, i);
                if (w && w.length > 0) {
                  let $ = b;
                  for (const z of w)
                    $.insertAfter(z), $ = z;
                }
              }
            } else {
              const T = Pe("");
              g.replace(T);
              const A = pf(g, r, n, i);
              if (A && A.length > 0) {
                let _ = T;
                for (const w of A)
                  _.insertAfter(w), _ = w;
                T.remove();
              } else
                T.replace(g);
            }
          } else
            Zt(r, g);
          s -= h;
        }
      }
      o += u;
    } else if (Ht(d))
      e <= o && o < e + t && s > 0 && (hf(d, r), s -= 1), o += 1;
    else if (F(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (xn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Wc(d, p.style), typeof p.cid == "string" && Ot(d, Jn, () => p.cid);
            const h = Ye(p, Lo);
            h && Object.keys(h).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...h
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || WS(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && Mc(d), !0;
        }
      }
      u && Mc(d), a -= 1;
    } else if (Ne(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!$r(d))
          hf(d, r);
        else if (Eu(r)) {
          const p = em(r.para, n);
          p && d.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (L(d)) {
      const u = d.getChildren();
      for (const f of u) {
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
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Qi(t.char, r, e, i), o = s.find(F);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Zt(t, e);
    return;
  }
  const a = {};
  im.forEach((d) => {
    e.hasFormat(d) && (a[d] = "true");
  });
  const c = {};
  Object.entries(t).forEach(([d, u]) => {
    d === "segment" || d === "char" || (typeof u == "string" ? c[d] = u : u === !0 ? c[d] = "true" : u === !1 && (c[d] = "false"));
  });
  const l = {
    ...o.getUnknownAttributes() ?? {},
    ...a,
    ...c
  };
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Zt(t, e), s;
}
function Qg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  R(r) ? (r.setMarker(t), r.setTextContent(Ve(t))) : Bt(r) && r.getTextType() === "marker" && r.setTextContent(Ve(t) + D);
}
function Wc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    R(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = F(e.getParent()), i = e.getFirstChild();
  Bt(i) && i.getTextType() === "marker" && i.getTextContent() === Ve(r, n) && i.setTextContent(Ve(t, n));
  const s = e.getLastChild();
  Bt(s) && s.getTextType() === "marker" && s.getTextContent() === ct(r, n) && s.setTextContent(ct(t, n));
}
function hf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && F(e) && xn(t)) {
      const i = Hc(n);
      if (Wc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Ot(e, Jn, () => o);
      }
      const s = Ye(i, Lo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (tt(e) || ke(e) || it(e) || K(e) || _e(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Me(e) || de(e) || F(e)) && (r === "style" && de(e) ? Qg(e, n) : r === "style" && F(e) ? Wc(e, n) : r === "code" && Me(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Ot(e, bn, () => n));
  }
}
function $S(e, t, r) {
  if (t <= 0)
    return;
  const n = Ke();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Qr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Ht(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Ne(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Ne(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(pr(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && ft(p)) {
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
              Qr(k) ? h += k.getTextContentSize() : Ht(k) && (h += 1), i = b;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(pr(), !0);
        } else de(a) ? a.replace(pr(), !0) : a.remove();
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
function qS(e, t, r, n, i) {
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
  } else return xn(r) ? IS(e, t, r, n, i) : Uo(e, t, r, i);
}
function IS(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Pe(t === "" ? or : t);
  Zt(r, s);
  let o;
  {
    let y = function(k) {
      if (Qr(k)) {
        const b = k.getTextContentSize();
        if (e >= g && e < g + b) {
          const T = k.getParent();
          return F(T) && (o = T), !0;
        }
        g += b;
      } else if (Ht(k))
        g += 1;
      else if (F(k)) {
        const b = k.getChildren();
        for (const T of b)
          if (y(T))
            return !0;
      } else if (L(k)) {
        const b = k.getChildren();
        for (const T of b)
          if (y(T))
            return !0;
        Ne(k) && (g += 1);
      }
      return !1;
    };
    const h = Ke();
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
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Qi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(F);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Uo(e, t, void 0, i);
  const f = {};
  for (const [h, g] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof g == "string" && (f[h] = g);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const h of d)
    if (!Zg(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Uo(e, t, void 0, i));
}
function Uo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ke();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Qr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = Pe(t);
        if (Zt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          F(f) && !xn(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Ht(c))
      s += 1;
    else if (F(c)) {
      if (!o && e === s) {
        const u = Pe(t);
        Zt(r, u);
        const f = c.getFirstChild();
        return f ? f.insertBefore(u) : c.append(u), n?.debug(`Inserted text "${t}" at beginning of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const d = c.getChildren();
      for (const u of d) {
        if (a(u))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const u = Pe(t);
        return Zt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Ne(c)) {
      if (!o && e === s) {
        const u = Pe(t);
        Zt(r, u);
        const f = c.getFirstChild();
        return f ? f.insertBefore(u) : c.append(u), n?.debug(`Inserted text "${t}" at beginning of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const d = c.getChildren();
      for (const u of d) {
        if (a(u))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const u = Pe(t);
        return Zt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (L(c)) {
      const l = c.getChildren();
      for (const d of l) {
        if (a(d))
          return !0;
        if (o)
          break;
      }
    }
    return o;
  }
  if (a(i), !o && e === s) {
    n?.debug(`Insertion point matches end of document (targetIndex: ${e}, final currentIndex: ${s}). Appending text to new ParaNode.`);
    const c = Pe(t);
    Zt(r, c);
    const l = pr().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Zg(e, t, r) {
  const n = Ke();
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
          if (ft(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(pr().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Qr(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (Ht(l))
        i += 1;
      else if (F(l)) {
        if (o(l))
          return !0;
      } else if (Ne(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if ($r(d) && Ne(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
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
      ft(a) ? $r(a) && de(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ft(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (F(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ft(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function LS(e, t, r, n, i) {
  let s;
  return fn("chapter", t) ? s = US(t.insert.chapter, r) : fn("verse", t) ? s = FS(t.insert.verse, r) : fn("ms", t) ? s = zS(t.insert.ms) : fn("note", t) ? s = tm(t, r, n) : fn("unknown", t) ? s = rm(t, r, n, i) : fn("unmatched", t) && (s = BS(t.insert.unmatched, r)), s ? Zg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function gf(e, t, r, n) {
  let i;
  Eu(t) ? i = em(t.para, r) : VS(t) && (i = DS(t.book)), i ??= pr();
  const s = i, o = de(s), a = $r(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Qr(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (de(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? u.splitText(h) : [void 0];
          let y, k = g?.getPreviousSibling();
          for (; k; ) {
            const b = k;
            k = k.getPreviousSibling(), y ? y.insertBefore(b) : s.append(b), y = b;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Ht(u))
      c += 1;
    else if (Ne(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if ($r(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (de(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && de(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (L(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
    }
    return l;
  }
  return d(Ke()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function DS(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Ss || !r || !jt.isValidBookCode(r))
    return;
  const n = Ye(e, n_);
  return Ah(r, n);
}
function em(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ye(e, r_), i = qi(r, n);
  if (!ui(t))
    return i;
  if (t.markerMode === "editable")
    i.append(kt(r), Hs());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ve(r) + D;
    i.append(t.hasGutterParaMarkers ? Cx(s) : Jr("marker", s));
  }
  return i;
}
function US(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ye(e, i_);
  let a;
  if (t.markerMode === "editable")
    a = Nh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = jl(r, c, n, i, s, o);
  }
  return a;
}
function FS(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ye(e, s_);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = ir(r, n);
    c = Fh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = au(n, l, i, s, o, a);
  }
  return c;
}
function zS(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ye(e, o_);
  return ph(t, r, n, s, i);
}
function tm(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = Ye(n.note, a_), l = typeof c?.closed == "string" ? c.closed : void 0, d = e.attributes?.segment;
  let u;
  d && typeof d == "string" && (u = d);
  const f = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (xn(h.attributes)) {
        const g = Qi(h.attributes.char, t, Pe(h.insert), void 0, nm(h.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...g);
      } else
        f.push(Pe(h.insert));
  return zg(i, s, f, t, r, u, l).setCategory(o).setUnknownAttributes(c);
}
function rm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ye(i, c_), l = Kl(s, o, c), d = a?.ops ?? [];
  d.length > 0 && KS(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && Ot(l, bn, () => u), l;
}
function KS(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (xn(s.attributes)) {
        const o = Pe(s.insert), a = Qi(s.attributes.char, t, o, void 0, nm(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Pe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (fn("unknown", s)) {
        const o = rm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (fn("note", s)) {
        const o = tm(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function BS(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = nu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function nm(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Hc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Qi(e, t, r, n, i, s = !1, o = !1) {
  M(r) && r.getTextContentSize() === 0 && r.setTextContent(or);
  const a = () => {
    o && M(r) && r.getTextContent() !== or && r.setTextContent(D + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Hc), l = c[0], d = i?.[i.length - 1];
    if (F(d) && Yn(l, d)) {
      if (c.length > 1) {
        const f = Qi(c.slice(1), t, r, void 0, void 0, !0, o);
        rc(d, f);
      } else
        r && rc(d, [r]);
      return [];
    }
    a();
    const u = c.reduceRight((f, p, h) => {
      const g = Yr(p.style, Ye(p, Lo));
      return typeof p.cid == "string" && Ot(g, Jn, () => p.cid), n && h === c.length - 1 && Ot(g, bn, () => n), f && (F(f) && (ic(f.getMarker(), f, t, !0), nc(f, f, t, !0)), g.append(f)), g;
    }, r);
    return ic(l.style, u, t, s), nc(u, u, t, s), [u];
  } else {
    const c = Hc(e), l = i?.[i.length - 1];
    if (F(l) && Yn(c, l))
      return r && rc(l, [r]), [];
    a();
    const d = Yr(c.style, Ye(c, Lo));
    return typeof c.cid == "string" && Ot(d, Jn, () => c.cid), n && Ot(d, bn, () => n), r && d.append(r), ic(c.style, d, t, s), nc(d, d, t, s), [d];
  }
}
function rc(e, t) {
  const r = e.getLastChild();
  R(r) && r.getMarkerSyntax() === "closing" || Bt(r) && r.getTextType() === "marker" && r.getTextContent() === ct(e.getMarker(), F(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function nc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && jS(e.getMarker(), t, r, !1, n);
}
function ic(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = kt(e, "opening", n) : r?.markerMode === "visible" && (i = Jr("marker", Ve(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function jS(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = kt("", "selfClosing") : s = kt(e, "closing", i) : r?.markerMode === "visible" && (s = Jr("marker", n ? ct("") : ct(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function VS(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Eu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function xn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function WS(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Zt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Ot(t, bn, () => n);
        continue;
      }
      if (HS(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const im = [
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
function HS(e) {
  return im.includes(e);
}
function Fi(e) {
  return Bt(e) && Me(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function sm(e) {
  const t = Js(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function Au(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(wl(r) && t.offset === 0 || Me(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Fi);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Me(s))
    return !1;
  const o = sm(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function xo(e) {
  const t = O();
  if (!P(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : M(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? jh(t) : Wl(t);
    return Fi(n);
  }
  return Au(t) && t.isCollapsed();
}
function GS(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = $e(t.anchor.getNode(), Me);
  if (!r || !Fi(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return xo(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Fi)) {
    const n = sm(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function po() {
  const e = O();
  return P(e) && Au(e), !1;
}
function JS() {
  const e = O();
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !Me(r) || !Fi(r.getFirstChild()) ? !1 : (ar(r, 1), !0);
}
function YS(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => Tr(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function XS() {
  const [e] = ue();
  return B(() => e.registerCommand(sa, (t) => (QS(t), !1), Bn), [e]), B(() => Ie(
    e.registerCommand(Ar, xo, Oe),
    e.registerCommand($i, xo, Oe),
    e.registerCommand(jn, xo, Oe),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(jn, GS, wr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(Vn, po, pe),
    e.registerCommand(zt, po, pe),
    e.registerCommand(sr, po, pe),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Nl, po, pe)
  ), [e]), B(() => Ie(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(Kt, () => (JS(), !1), Oe),
    e.registerNodeTransform(jt, YS)
  ), [e]), null;
}
function QS(e) {
  if (ZS(e.target))
    return;
  const t = O();
  P(t) && ev(t);
}
function di(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (St(t))
      r++, t = t.getNextSibling(), M(t) && t.getTextContent() === D && (r++, t = t.getNextSibling());
    else if (ke(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (ar(e, r), !0);
}
function ZS(e) {
  if (!Kp(e))
    return !1;
  const t = Wi(e);
  if (!_x(t))
    return !1;
  const r = t.getParent();
  return r ? ft(r) ? di(r) : (ar(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function ev(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!Ne(r))
    return !1;
  const n = r.getFirstChild();
  return !Tr(n) && !li(n) ? !1 : di(r);
}
function tv() {
  const [e] = ue();
  return B(() => {
    const t = (r) => r instanceof KeyboardEvent && !om(r) || !Zs() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ie(
      e.registerCommand(xr, t, Oe),
      e.registerCommand(Vn, t, Oe),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(zt, t, pe),
      e.registerCommand(sr, t, pe),
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
      }, Oe),
      e.registerCommand(Ar, t, Oe),
      e.registerCommand($i, t, Oe),
      e.registerCommand(jn, t, Oe)
    );
  }, [e]), null;
}
function om(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Tn(e) {
  return $e(e, Pu) ?? void 0;
}
function Pu(e) {
  return _e(e) || Tg(e);
}
function Zs() {
  const e = O();
  return P(e) ? Tn(e.anchor.getNode()) !== void 0 || Tn(e.focus.getNode()) !== void 0 : !1;
}
function rv(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function nv(e, t) {
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
    for (const u of a) {
      const f = document.createRange();
      if (f.selectNode(u), o.compareBoundaryPoints(Range.START_TO_START, f) > 0)
        c = u;
      else {
        l = u;
        break;
      }
    }
    if (!c)
      return !1;
    const d = document.createRange();
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), rv(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function iv(e, t, r, n) {
  if (!bv(t) || nv(e, r))
    return !1;
  const i = r === "up" ? t_(t) : e_(t);
  return i && n.preventDefault(), i;
}
function sv({ viewOptions: e }) {
  const [t] = ue();
  return ov(t, e), null;
}
function ov(e, t) {
  B(() => {
    if (!e.hasNodes([Fr, Dt, Le]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = O();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = mf(o), u = pv(i, yf(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return iv(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = mf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return yf(a, n.key) ? l = !c && xf(i, "next") || !c && cv(i) || mv(i) || !c && s && kf(i, "next") : av(a, n.key) && (l = !c && xf(i, "previous") || !c && lv(i) || yv(i, t) || !c && s && kf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(xr, r, Oe);
  }, [e, t]);
}
function mf(e) {
  return e.dir || "ltr";
}
function yf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function av(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Gc(e) {
  if (!F(e) || e.getMarker() !== "fp")
    return;
  const t = Vt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function cv(e) {
  const t = Gc(Wl(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (ar(t, 0), !0);
}
function lv(e) {
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
function uv(e) {
  if (Fo)
    for (const { segment: r } of Fo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function dv(e) {
  if (Fo) {
    let n = 0;
    for (const { index: i } of Fo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function am(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function cm(e) {
  return !!e && R(e) && Tn(e) !== void 0;
}
function zi(e) {
  return M(e) && !e.isToken() && !cm(e) && e.getTextContentSize() > 0;
}
function lm(e) {
  return ii(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : M(e) ? (e.isToken() || cm(e)) && e.getTextContentSize() > 0 : si(e) ? !it(e) : !1;
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
    if (lm(n))
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
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Ki(e, n, i) : r === "text" && lm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Ki(e, n, i);
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
function fv(e, t) {
  const r = e.getNode(), n = am(r);
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
    const c = s.getTextContent(), l = t === "next" ? uv(c) : dv(c);
    return sc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return sc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function um(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = fv(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && L(i.node) ? bu(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function kf(e, t) {
  return um(e, t, "collapse");
}
function pv(e, t) {
  return um(e, t, "extend");
}
function hv(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && zi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Nu(n, e.offset, e.type, t, r);
  return Ca(i, t, r) === void 0;
}
function gv(e, t) {
  const r = Ke();
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
  const i = am(n);
  if (!i || !hv(r, t, i))
    return !1;
  const s = Ki(i, t, Ke()), o = s && Tn(s);
  if (!o)
    return !1;
  const a = gv(o, t);
  if (!a)
    return !0;
  if (zi(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
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
function mv(e) {
  const t = e.anchor.getNode(), r = Wl(e);
  if (K(r) && !R(r.getFirstChild())) {
    if (Ne(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(ft(i) && di(i)) && i.selectStart(), !0;
      }
    } else return Bt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ne(t) && K(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Tf(r), !0;
  }
  const n = r?.getParent();
  if (Bt(r) && K(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Tf(n) : n.selectEnd(), !0;
  }
  return !1;
}
function yv(e, t) {
  const r = jh(e);
  if (Bs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && Fi(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Me(o) && !r)
    return !0;
  if (K(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!li(c) && !Me(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const d = r.getIndexWithinParent();
    return l.select(d, d), !0;
  }
  if (Ne(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = $e(c, (d) => K(d));
    if (K(l) && l.getIsCollapsed()) {
      const d = l.getParent();
      if (!d)
        return !1;
      const u = l.getIndexWithinParent();
      return d.select(u, u), !0;
    }
  }
  const a = Vt(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (xt(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function bv(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ke(t) && si(t);
}
function kv() {
  const [e] = ue();
  return xv(e), null;
}
function xv(e) {
  B(() => {
    if (!e.hasNodes([ve]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ie(
      e.registerNodeTransform(ve, _v),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ve, MT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ve, ug),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ve, (t) => As(Xn("char"), t)),
      e.registerNodeTransform(et, Sv)
    );
  }, [e]);
}
function oc(e) {
  return e.getChildren().some(R);
}
function Tv(e, t) {
  const r = t.getFirstChild();
  if (!R(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Gi(n)) {
    const i = n.getTextContent();
    i.startsWith(D) && (i === D ? n.remove() : n.setTextContent(i.slice(D.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function Cv(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  R(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function _v(e) {
  if (!F(e))
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
  if (F(i) && Yn({ style: t, cid: r }, i) && Qt(n, i.getUnknownAttributes()))
    if (oc(i)) {
      if (Tv(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  F(s) && Yn({ style: t, cid: r }, s) && Qt(n, s.getUnknownAttributes()) && (oc(s) ? Cv(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function Sv(e) {
  const t = e.getParent();
  if (!F(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(or)) {
    const n = O();
    if (P(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function dm(e) {
  return e.replaceAll("	", " ");
}
function fm() {
  const e = O();
  return !!e && !e.isCollapsed();
}
function pm(e) {
  const t = () => !fm();
  return Ie(e.registerCommand(Wn, t, qt), e.registerCommand(sr, t, qt));
}
const wu = (e) => {
  e.dispatchCommand(Wn, null);
}, Ou = (e) => {
  e.dispatchCommand(sr, null);
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
      n.setData(o, dm(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(zt, s);
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
    r.setData("text/plain", dm(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(zt, i);
  });
};
function vv() {
  const [e] = ue();
  return B(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(yn ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), wu(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Ou(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? $u(e) : Ru(e)));
    };
    return Ie(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      pm(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function Mv({ logger: e }) {
  const [t] = ue();
  return B(() => Ie(
    // When the backslash or forward slash key is typed.
    t.registerCommand(xr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), wr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(zt, (r) => {
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
const Ev = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function Av({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), E("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Jc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: E("span", { className: "text", children: i.title }) });
}
function Pv({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return E("div", { className: "typeahead-popover", children: E("ul", { id: zo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => E(Av, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let Nv = 0;
class ss {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${Nv++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function wv({ options: e } = {}) {
  const [t] = ue(), [r, n] = ye(() => !t.isEditable()), [i, s] = ye({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = ye(void 0), c = Ze(() => {
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
  }, [t, r, e]), l = Z(null), d = Z(null), u = xe(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return B(() => pm(t), [t]), B(() => {
    const f = (p) => {
      const h = p.target;
      t.getRootElement() === h || Ih(h) || (p.preventDefault(), d.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, h) => {
      h?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), B(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const h = p.target;
      h instanceof Node && l.current?.contains(h) || u();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, u]), B(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      u();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, u]), B(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      if (p.isComposing || p.keyCode === 229)
        return;
      if (p.key === "Escape") {
        p.preventDefault(), u();
        return;
      }
      const h = document.activeElement;
      if (!(h && h !== document.body && h !== d.current && !t.getRootElement()?.contains(h) && !l.current?.contains(h)))
        if (p.key === "ArrowDown")
          p.preventDefault(), p.stopPropagation(), a((g) => g === void 0 ? 0 : (g + 1) % c.length);
        else if (p.key === "ArrowUp")
          p.preventDefault(), p.stopPropagation(), a((g) => g === void 0 ? c.length - 1 : (g - 1 + c.length) % c.length);
        else if (p.key === "Enter") {
          p.preventDefault(), p.stopPropagation();
          const g = o === void 0 ? void 0 : c[o];
          g && !g.isDisabled && (t.update(() => {
            g.onSelect();
          }), u());
        } else {
          if (Ev.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, u, c, o, t]), B(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", zo), () => {
        f.removeAttribute("aria-controls"), f.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), B(() => {
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
  }, [t, i.isOpen, o]), B(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), Fs(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: h } = f.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), y = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    f.style.left = `${g}px`, f.style.top = `${y}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Ek.createPortal(E("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: E(Pv, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), u());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function Ov(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function Rv(e) {
  if (!ck(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function $v(e) {
  return xt(e);
}
function ac(e, t, r) {
  const n = Wi(t.node);
  if (!si(n) || $v(n))
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
function qv(e, t) {
  if (O())
    return !1;
  const r = e.getRootElement(), n = ak(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Bp(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let d, u;
  if (n.isCollapsed)
    d = ac(e, c, Rv(c)), u = d;
  else {
    const y = Ov(n.getRangeAt(0), c);
    d = ac(e, c, y ? "before" : "after"), u = ac(e, l, y ? "after" : "before");
  }
  if (!d && !u)
    return !1;
  const f = d ?? c, p = u ?? l, h = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = jp(h, e);
  return g ? (Nr(g), g.dirty = !t, t) : !1;
}
function Iv() {
  const [e] = ue(), t = Z(!1), r = Z(!1);
  return B(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = O();
        P(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), B(() => e.registerCommand(Kt, () => (qv(e, t.current) && (r.current = !0), !1), pe), [e]), null;
}
function Lv() {
  const [e] = ue();
  return B(() => e.registerCommand(xr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(yn ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, pe), [e]), null;
}
function Dv({ isEditable: e }) {
  const [t] = ue();
  return Fs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function hm(e) {
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
    const i = O();
    if (!P(i))
      return !1;
    const s = jp(r, e);
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
  return !!e && Vs(se(e));
}
function qu(e) {
  const [t] = ue(), r = Z(void 0), n = xe((i) => {
    const s = O(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Cf(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = Js(d, u), p = Vs(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const h = eT();
        i.insertAfter(h), r.current = h.getKey(), l = h.getKey();
      }
      ar(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = se(a);
      M(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return B(() => {
    const i = () => {
      const a = e(), c = O(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (wt(Rt), Gr(t, Rt), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (js(c) || !c.includes(Ii))
        return;
      const l = O(), d = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (tT(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(Ii).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = Ie(t.registerCommand(Kt, () => (i(), !1), Bn), t.registerCommand(Rl, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Cf(a);
      }), c && t.update(() => {
        const l = se(a);
        M(l) && l.remove();
      }, { tag: Rt }), r.current = void 0, !1;
    }, Bn), t.registerNodeTransform(et, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function Uv() {
  const e = O();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = K(r) ? r : r.getParent();
  if (!K(n))
    return;
  const i = tS(n);
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
function Fv() {
  return qu(Uv), null;
}
function zv() {
  const e = O();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ke(i) || Js(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ke(s))
    return i;
}
function Kv() {
  return qu(zv), null;
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
  return e ? Ne(e) ? e : $e(e, (r) => Ne(r)) ?? void 0 : void 0;
}
function gm(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Cn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function _a(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !ia(e) ? !1 : e.getNodes().some((t) => ke(t));
}
function mm(e) {
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
function ym(e) {
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
function _f(e, t) {
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
    return ke(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return ke(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return ke(i) ? i : void 0;
}
function Ko(e, t) {
  if (!P(e))
    return !1;
  const r = Cn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Fn(e) {
  return _a(e) || gm(e);
}
function Lu(e, t) {
  if (_a(e) || gm(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return mm(e) && Ko(e, "backward") || _f(e, "backward");
    case "deleteForward":
      return ym(e) && Ko(e, "forward") || _f(e, "forward");
    case "insertText":
      return !1;
  }
}
function Bv(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Yc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (mm(e) && Ko(e, "backward")) {
        const n = Cn(e.anchor.getNode());
        if (ft(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Yc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (ym(e) && Ko(e, "forward")) {
        const i = Cn(e.anchor.getNode())?.getNextSibling();
        if (ft(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Sf(e, t) {
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
function jv(e) {
  const t = e.getPreviousSibling();
  if (!Ne(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = St(n), s = e.getChildren().filter((o) => !zr(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? Du(r) : di(t) || t.selectStart();
}
function bm(e) {
  return ke(e) || tt(e) ? [] : ft(e) ? e.getChildren().flatMap(bm) : [e];
}
function Vv(e) {
  const t = [];
  for (const r of e) {
    const n = bm(r);
    n.length !== 0 && (ft(r) && t.length > 0 && t.push(Pe(" ")), t.push(...n));
  }
  return t;
}
function Wv(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (wl(n)) {
    const a = n.getChildAtIndex(t === "backward" ? r.offset - 1 : r.offset);
    return _e(a) ? Mf(a, t, !0) : void 0;
  }
  const i = km(n);
  if (!i || r.type === "text" && !(t === "backward" ? r.offset === 0 : r.offset === n.getTextContentSize()))
    return;
  let s = xm(e, t, i);
  const o = [];
  for (; s; ) {
    if (_e(s))
      o.push(s);
    else if (!Yv(s))
      break;
    s = Os(s, t, i);
  }
  if (o.length > 0)
    return { nodes: t === "backward" ? o.reverse() : o, placement: "inline" };
  if (t === "backward")
    for (; s && St(s); )
      s = Os(s, t, i);
  if (!(s || !Ne(i)))
    return Mf(i, t, !1);
}
function To(e) {
  if (!P(e) || e.isCollapsed())
    return [];
  const t = [];
  for (const r of e.getNodes()) {
    const n = Xv(r);
    n && !t.some((i) => i.is(n)) && t.push(n);
  }
  return t;
}
function Hv(e, t) {
  if (!P(e) || !e.isCollapsed())
    return [];
  const r = km(e.anchor.getNode());
  if (!r)
    return [];
  const n = [];
  let i = xm(e, t, r);
  for (; i; )
    _e(i) && n.push(i), i = Os(i, t, r);
  return t === "backward" ? n.reverse() : n;
}
function vf(e, t) {
  const r = e.nodes[0], n = e.nodes[e.nodes.length - 1];
  if (e.placement === "inline")
    return t === "backward" ? Qv(r) : Zv(n), !0;
  if (t === "backward") {
    const s = r.getPreviousSibling();
    return Ne(s) ? (Du(s), !0) : !1;
  }
  const i = n.getNextSibling();
  return Ne(i) ? (di(i) || i.selectStart(), !0) : !1;
}
function Gv(e, t) {
  if (e.placement === "inline")
    return !0;
  const r = t === "backward" ? e.nodes[0].getPreviousSibling() : e.nodes[e.nodes.length - 1].getNextSibling();
  return Ne(r);
}
function Jv(e) {
  return e.map((t) => {
    const r = t.getMarker();
    return r ? { tag: t.getTag(), marker: r } : { tag: t.getTag() };
  });
}
function km(e) {
  return Ne(e) || K(e) ? e : $e(e, (t) => Ne(t) || K(t)) ?? void 0;
}
function xm(e, t, r) {
  const { anchor: n } = e, i = n.getNode();
  if (n.type === "text" || !L(i))
    return Os(i, t, r);
  const s = i.getChildAtIndex(t === "backward" ? n.offset - 1 : n.offset);
  return s ? Cm(s, t, r) : i.is(r) ? void 0 : Os(i, t, r);
}
function Tm(e, t, r) {
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
function Cm(e, t, r) {
  let n = e;
  for (; n; ) {
    if (_e(n) || K(n) || !L(n))
      return n;
    n = (t === "backward" ? n.getLastChild() : n.getFirstChild()) ?? Tm(n, t, r);
  }
}
function Os(e, t, r) {
  const n = Tm(e, t, r);
  return n ? Cm(n, t, r) : void 0;
}
function Mf(e, t, r) {
  const n = [];
  let i = r ? e : t === "backward" ? e.getPreviousSibling() : e.getNextSibling();
  for (; _e(i); )
    n.push(i), i = t === "backward" ? i.getPreviousSibling() : i.getNextSibling();
  if (n.length !== 0)
    return { nodes: t === "backward" ? n.reverse() : n, placement: "block" };
}
function Yv(e) {
  return M(e) && e.getTextContentSize() === 0;
}
function Xv(e) {
  let t = _e(e) ? e : void 0;
  for (const r of e.getParents())
    _e(r) && (t = r);
  return t;
}
function Qv(e) {
  const t = e.getPreviousSibling();
  if (M(t) && !t.isToken()) {
    const n = t.getTextContentSize();
    t.select(n, n);
    return;
  }
  const r = e.getIndexWithinParent();
  e.getParentOrThrow().select(r, r);
}
function Zv(e) {
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
function eM(e) {
  if (Array.isArray(e)) return e;
}
function tM(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, s, o, a = [], c = !0, l = !1;
    try {
      if (s = (r = r.call(e)).next, t !== 0) for (; !(c = (n = s.call(r)).done) && (a.push(n.value), a.length !== t); c = !0) ;
    } catch (d) {
      l = !0, i = d;
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
function rM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nM(e, t) {
  return eM(e) || tM(e, t) || iM(e, t) || rM();
}
function iM(e, t) {
  if (e) {
    if (typeof e == "string") return Ef(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ef(e, t) : void 0;
  }
}
const _m = Object.entries, Af = Object.setPrototypeOf, sM = Object.isFrozen, oM = Object.getPrototypeOf, aM = Object.getOwnPropertyDescriptor;
let gt = Object.freeze, yt = Object.seal, Ai = Object.create, Sm = typeof Reflect < "u" && Reflect, Xc = Sm.apply, Qc = Sm.construct;
gt || (gt = function(t) {
  return t;
});
yt || (yt = function(t) {
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
const _i = at(Array.prototype.forEach), cM = at(Array.prototype.lastIndexOf), Pf = at(Array.prototype.pop), Si = at(Array.prototype.push), lM = at(Array.prototype.splice), pn = Array.isArray, fs = at(String.prototype.toLowerCase), lc = at(String.prototype.toString), Nf = at(String.prototype.match), os = at(String.prototype.replace), wf = at(String.prototype.indexOf), uM = at(String.prototype.trim), dM = at(Number.prototype.toString), fM = at(Boolean.prototype.toString), Of = typeof BigInt > "u" ? null : at(BigInt.prototype.toString), Rf = typeof Symbol > "u" ? null : at(Symbol.prototype.toString), ut = at(Object.prototype.hasOwnProperty), as = at(Object.prototype.toString), lt = at(RegExp.prototype.test), In = pM(TypeError);
function at(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Xc(e, t, n);
  };
}
function pM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Qc(e, r);
  };
}
function be(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fs;
  if (Af && Af(e, null), !pn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (sM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function hM(e) {
  for (let t = 0; t < e.length; t++)
    ut(e, t) || (e[t] = null);
  return e;
}
function bt(e) {
  const t = Ai(null);
  for (const n of _m(e)) {
    var r = nM(n, 2);
    const i = r[0], s = r[1];
    ut(e, i) && (pn(s) ? t[i] = hM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = bt(s) : t[i] = s);
  }
  return t;
}
function gM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return dM(e);
    case "boolean":
      return fM(e);
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
    const n = aM(e, t);
    if (n) {
      if (n.get)
        return at(n.get);
      if (typeof n.value == "function")
        return at(n.value);
    }
    e = oM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function mM(e) {
  try {
    return lt(e, ""), !0;
  } catch {
    return !1;
  }
}
const $f = gt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), uc = gt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), dc = gt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yM = gt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), fc = gt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), bM = gt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qf = gt(["#text"]), If = gt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), pc = gt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lf = gt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ho = gt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), kM = yt(/{{[\w\W]*|^[\w\W]*}}/g), xM = yt(/<%[\w\W]*|^[\w\W]*%>/g), TM = yt(/\${[\w\W]*/g), CM = yt(/^data-[\-\w.\u00B7-\uFFFF]+$/), _M = yt(/^aria-[\-\w]+$/), Df = yt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), SM = yt(/^(?:\w+script|data):/i), vM = yt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), MM = yt(/^html$/i), EM = yt(/^[a-z][.\w]*(-[.\w]+)+$/i), Uf = yt(/<[/\w!]/g), Ff = yt(/<[/\w]/g), AM = yt(/<\/no(script|embed|frames)/i), PM = yt(/\/>/i), Ft = {
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
}, NM = function() {
  return typeof window > "u" ? null : window;
}, wM = function(t, r) {
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
  return ut(t, r) && pn(t[r]) ? be(i.base ? bt(i.base) : {}, t[r], i.transform) : n;
};
function vm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : NM();
  const t = (j) => vm(j);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Ft.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = lr(f, "cloneNode"), h = lr(f, "remove"), g = lr(f, "nextSibling"), y = lr(f, "childNodes"), k = lr(f, "parentNode"), b = lr(f, "shadowRoot"), T = lr(f, "attributes"), A = o && o.prototype ? lr(o.prototype, "nodeType") : null, _ = o && o.prototype ? lr(o.prototype, "nodeName") : null, w = o && o.prototype ? lr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const j = r.createElement("template");
    j.content && j.content.ownerDocument && (r = j.content.ownerDocument);
  }
  let $, z = "", S, W = !1, G = 0;
  const ce = function() {
    if (G > 0)
      throw In('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, te = function(m) {
    ce(), G++;
    try {
      return $.createHTML(m);
    } finally {
      G--;
    }
  }, qe = function(m) {
    ce(), G++;
    try {
      return $.createScriptURL(m);
    } finally {
      G--;
    }
  }, Se = function() {
    return W || (S = wM(u, i), W = !0), S;
  }, J = r, V = J.implementation, ne = J.createNodeIterator, ge = J.createDocumentFragment, ht = J.getElementsByTagName, Y = n.importNode;
  let N = zf();
  t.isSupported = typeof _m == "function" && typeof k == "function" && V && V.createHTMLDocument !== void 0;
  const ee = kM, he = xM, Te = TM, st = CM, We = _M, ie = SM, Xe = vM, $a = EM;
  let fi = Df, Ee = null;
  const He = be({}, [...$f, ...uc, ...dc, ...fc, ...qf]);
  let me = null;
  const Mt = be({}, [...If, ...pc, ...Lf, ...ho]);
  let De = Object.seal(Ai(null, {
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
  const Jt = Object.seal(Ai(null, {
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
  let Zi = !0, Br = !0, An = !1, to = !0, Et = !1, Yt = !0, _r = !1, pi = !1, hi = null, Pn = null, q = !1, I = !1, H = !1, X = !1, Ce = !0, nt = !1;
  const Ue = "user-content-";
  let Qe = !0, At = !1, jr = {}, Ut = null;
  const Xt = be({}, [
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
  const no = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let an = null;
  const cd = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), io = "http://www.w3.org/1998/Math/MathML", so = "http://www.w3.org/2000/svg", Sr = "http://www.w3.org/1999/xhtml";
  let gi = Sr, qa = !1, Ia = null;
  const Pb = be({}, [io, so, Sr], lc), ld = gt(["mi", "mo", "mn", "ms", "mtext"]);
  let La = be({}, ld);
  const ud = gt(["annotation-xml"]);
  let Da = be({}, ud);
  const Nb = be({}, ["title", "style", "font", "a", "script"]);
  let es = null;
  const wb = ["application/xhtml+xml", "text/html"], Ob = "text/html";
  let Ge = null, mi = null;
  const Rb = r.createElement("form"), dd = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Ua = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (mi && mi === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = bt(m), es = // eslint-disable-next-line unicorn/prefer-includes
    wb.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? Ob : m.PARSER_MEDIA_TYPE, Ge = es === "application/xhtml+xml" ? lc : fs, Ee = dn(m, "ALLOWED_TAGS", He, {
      transform: Ge
    }), me = dn(m, "ALLOWED_ATTR", Mt, {
      transform: Ge
    }), Ia = dn(m, "ALLOWED_NAMESPACES", Pb, {
      transform: lc
    }), an = dn(m, "ADD_URI_SAFE_ATTR", cd, {
      transform: Ge,
      base: cd
    }), ro = dn(m, "ADD_DATA_URI_TAGS", no, {
      transform: Ge,
      base: no
    }), Ut = dn(m, "FORBID_CONTENTS", Xt, {
      transform: Ge
    }), cr = dn(m, "FORBID_TAGS", bt({}), {
      transform: Ge
    }), eo = dn(m, "FORBID_ATTR", bt({}), {
      transform: Ge
    }), jr = ut(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? bt(m.USE_PROFILES) : m.USE_PROFILES : !1, Zi = m.ALLOW_ARIA_ATTR !== !1, Br = m.ALLOW_DATA_ATTR !== !1, An = m.ALLOW_UNKNOWN_PROTOCOLS || !1, to = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Et = m.SAFE_FOR_TEMPLATES || !1, Yt = m.SAFE_FOR_XML !== !1, _r = m.WHOLE_DOCUMENT || !1, I = m.RETURN_DOM || !1, H = m.RETURN_DOM_FRAGMENT || !1, X = m.RETURN_TRUSTED_TYPE || !1, q = m.FORCE_BODY || !1, Ce = m.SANITIZE_DOM !== !1, nt = m.SANITIZE_NAMED_PROPS || !1, Qe = m.KEEP_CONTENT !== !1, At = m.IN_PLACE || !1, fi = mM(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Df, gi = typeof m.NAMESPACE == "string" ? m.NAMESPACE : Sr, La = ut(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? bt(m.MATHML_TEXT_INTEGRATION_POINTS) : be({}, ld), Da = ut(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? bt(m.HTML_INTEGRATION_POINTS) : be({}, ud);
    const v = ut(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? bt(m.CUSTOM_ELEMENT_HANDLING) : Ai(null);
    if (De = Ai(null), ut(v, "tagNameCheck") && dd(v.tagNameCheck) && (De.tagNameCheck = v.tagNameCheck), ut(v, "attributeNameCheck") && dd(v.attributeNameCheck) && (De.attributeNameCheck = v.attributeNameCheck), ut(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (De.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), yt(De), Et && (Br = !1), H && (I = !0), jr && (Ee = be({}, qf), me = Ai(null), jr.html === !0 && (be(Ee, $f), be(me, If)), jr.svg === !0 && (be(Ee, uc), be(me, pc), be(me, ho)), jr.svgFilters === !0 && (be(Ee, dc), be(me, pc), be(me, ho)), jr.mathMl === !0 && (be(Ee, fc), be(me, Lf), be(me, ho))), Jt.tagCheck = null, Jt.attributeCheck = null, ut(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Jt.tagCheck = m.ADD_TAGS : pn(m.ADD_TAGS) && (Ee === He && (Ee = bt(Ee)), be(Ee, m.ADD_TAGS, Ge))), ut(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Jt.attributeCheck = m.ADD_ATTR : pn(m.ADD_ATTR) && (me === Mt && (me = bt(me)), be(me, m.ADD_ATTR, Ge))), ut(m, "ADD_URI_SAFE_ATTR") && pn(m.ADD_URI_SAFE_ATTR) && be(an, m.ADD_URI_SAFE_ATTR, Ge), ut(m, "FORBID_CONTENTS") && pn(m.FORBID_CONTENTS) && (Ut === Xt && (Ut = bt(Ut)), be(Ut, m.FORBID_CONTENTS, Ge)), ut(m, "ADD_FORBID_CONTENTS") && pn(m.ADD_FORBID_CONTENTS) && (Ut === Xt && (Ut = bt(Ut)), be(Ut, m.ADD_FORBID_CONTENTS, Ge)), Qe && (Ee["#text"] = !0), _r && be(Ee, ["html", "head", "body"]), Ee.table && (be(Ee, ["tbody"]), delete cr.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = $;
      $ = m.TRUSTED_TYPES_POLICY;
      try {
        z = te("");
      } catch (Q) {
        throw $ = U, Q;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? ($ = void 0, z = "") : ($ === void 0 && ($ = Se()), $ && typeof z == "string" && (z = te("")));
    gt && gt(m), mi = m;
  }, fd = be({}, [...uc, ...dc, ...yM]), pd = be({}, [...fc, ...bM]), $b = function(m, v, U) {
    return v.namespaceURI === Sr ? m === "svg" : v.namespaceURI === io ? m === "svg" && (U === "annotation-xml" || La[U]) : !!fd[m];
  }, qb = function(m, v, U) {
    return v.namespaceURI === Sr ? m === "math" : v.namespaceURI === so ? m === "math" && Da[U] : !!pd[m];
  }, Ib = function(m, v, U) {
    return v.namespaceURI === so && !Da[U] || v.namespaceURI === io && !La[U] ? !1 : !pd[m] && (Nb[m] || !fd[m]);
  }, Lb = function(m) {
    let v = k(m);
    (!v || !v.tagName) && (v = {
      namespaceURI: gi,
      tagName: "template"
    });
    const U = fs(m.tagName), Q = fs(v.tagName);
    return Ia[m.namespaceURI] ? m.namespaceURI === so ? $b(U, v, Q) : m.namespaceURI === io ? qb(U, v, Q) : m.namespaceURI === Sr ? Ib(U, v, Q) : !!(es === "application/xhtml+xml" && Ia[m.namespaceURI]) : !1;
  }, cn = function(m) {
    Si(t.removed, {
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
      _i(v, (re) => {
        Si(Q, re);
      }), _i(Q, (re) => {
        try {
          h(re);
        } catch {
        }
      });
    }
    const U = T(m);
    if (U)
      for (let Q = U.length - 1; Q >= 0; --Q) {
        const re = U[Q], le = re && re.name;
        if (typeof le == "string")
          try {
            m.removeAttribute(le);
          } catch {
          }
      }
  }, Nn = function(m, v) {
    try {
      Si(t.removed, {
        attribute: v.getAttributeNode(m),
        from: v
      });
    } catch {
      Si(t.removed, {
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
  }, Db = function(m) {
    const v = T(m);
    if (v)
      for (let U = v.length - 1; U >= 0; --U) {
        const Q = v[U], re = Q && Q.name;
        if (!(typeof re != "string" || me[Ge(re)]))
          try {
            m.removeAttribute(re);
          } catch {
          }
      }
  }, ts = function(m) {
    const v = [m];
    for (; v.length > 0; ) {
      const U = v.pop();
      (A ? A(U) : U.nodeType) === Ft.element && Db(U);
      const re = y(U);
      if (re)
        for (let le = re.length - 1; le >= 0; --le)
          v.push(re[le]);
    }
  }, Ub = function(m) {
    if (!Yt)
      return;
    const v = [m];
    for (; v.length > 0; ) {
      const U = v.pop(), Q = A ? A(U) : U.nodeType;
      if (Q === Ft.processingInstruction || Q === Ft.comment && lt(Ff, U.data)) {
        try {
          h(U);
        } catch {
        }
        continue;
      }
      if (Q === Ft.element) {
        const le = U, we = Ge(_ ? _(U) : U.nodeName);
        try {
          le.hasAttribute && le.hasAttribute("patchsrc") && le.removeAttribute("patchsrc"), le.hasAttribute && le.hasAttribute("for") && we !== "label" && we !== "output" && le.removeAttribute("for");
        } catch {
        }
      }
      const re = y(U);
      if (re)
        for (let le = re.length - 1; le >= 0; --le)
          v.push(re[le]);
    }
  }, hd = function(m) {
    let v = null, U = null;
    if (q)
      m = "<remove></remove>" + m;
    else {
      const le = Nf(m, /^[\r\n\t ]+/);
      U = le && le[0];
    }
    es === "application/xhtml+xml" && gi === Sr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const Q = $ ? te(m) : m;
    if (gi === Sr)
      try {
        v = new d().parseFromString(Q, es);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = V.createDocument(gi, "template", null);
      try {
        v.documentElement.innerHTML = qa ? z : Q;
      } catch {
      }
    }
    const re = v.body || v.documentElement;
    return m && U && re.insertBefore(r.createTextNode(U), re.childNodes[0] || null), gi === Sr ? ht.call(v, _r ? "html" : "body")[0] : _r ? v.documentElement : re;
  }, gd = function(m) {
    const v = w ? w(m) : m.ownerDocument;
    return ne.call(
      v || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ao = function(m) {
    return m = os(m, ee, " "), m = os(m, he, " "), m = os(m, Te, " "), m;
  }, Fa = function(m) {
    var v;
    m.normalize();
    const U = w ? w(m) : m.ownerDocument, Q = ne.call(
      U || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let re = Q.nextNode();
    for (; re; )
      re.data = ao(re.data), re = Q.nextNode();
    const le = (v = m.querySelectorAll) === null || v === void 0 ? void 0 : v.call(m, "template");
    le && _i(le, (we) => {
      yi(we.content) && Fa(we.content);
    });
  }, co = function(m) {
    const v = _ ? _(m) : null;
    return typeof v != "string" || Ge(v) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    m.nodeType !== A(m) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    if (!A || typeof m != "object" || m === null)
      return !1;
    try {
      return A(m) === Ft.documentFragment;
    } catch {
      return !1;
    }
  }, rs = function(m) {
    if (!A || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof A(m) == "number";
    } catch {
      return !1;
    }
  };
  function vr(j, m, v) {
    j.length !== 0 && _i(j, (U) => {
      U.call(t, m, v, mi);
    });
  }
  const Fb = function(m, v) {
    return !!(Yt && m.hasChildNodes() && !rs(m.firstElementChild) && lt(Uf, m.textContent) && lt(Uf, m.innerHTML) || Yt && m.namespaceURI === Sr && v === "style" && rs(m.firstElementChild) || m.nodeType === Ft.processingInstruction || Yt && m.nodeType === Ft.comment && lt(Ff, m.data));
  }, zb = function(m, v, U) {
    if (!cr[v] && kd(v) && (De.tagNameCheck instanceof RegExp && lt(De.tagNameCheck, v) || De.tagNameCheck instanceof Function && De.tagNameCheck(v)))
      return !1;
    if (Qe && !Ut[v]) {
      const Q = k(m), re = y(m);
      if (re && Q) {
        const le = re.length;
        for (let we = le - 1; we >= 0; --we) {
          const Je = m === U ? p(re[we], !0) : re[we];
          Q.insertBefore(Je, g(m));
        }
      }
    }
    return cn(m), !0;
  }, md = function(m, v, U, Q) {
    return m.length === 0 ? v : v === U || v === Q ? bt(v) : v;
  }, yd = function(m, v) {
    if (vr(N.beforeSanitizeElements, m, null), m !== v && k(m) === null)
      return At && ts(m), !0;
    if (co(m))
      return cn(m), !0;
    const U = Ge(_ ? _(m) : m.nodeName);
    if (Ee = md(N.uponSanitizeElement, Ee, He, hi), vr(N.uponSanitizeElement, m, {
      tagName: U,
      allowedTags: Ee
    }), m !== v && k(m) === null)
      return At && ts(m), !0;
    if (Fb(m, U))
      return cn(m), !0;
    if (cr[U] || !(Jt.tagCheck instanceof Function && Jt.tagCheck(U)) && !Ee[U]) {
      const re = zb(m, U, v);
      return re === !1 && vr(N.afterSanitizeElements, m, null), re;
    }
    if ((A ? A(m) : m.nodeType) === Ft.element && !Lb(m) || (U === "noscript" || U === "noembed" || U === "noframes") && lt(AM, m.innerHTML))
      return cn(m), !0;
    if (Et && m.nodeType === Ft.text) {
      const re = ao(m.textContent);
      m.textContent !== re && (Si(t.removed, {
        element: m.cloneNode()
      }), m.textContent = re);
    }
    return vr(N.afterSanitizeElements, m, null), !1;
  }, bd = function(m, v, U) {
    if (eo[v] || Yt && v === "patchsrc" || Yt && v === "for" && m !== "label" && m !== "output" || Ce && (v === "id" || v === "name") && (U in r || U in Rb))
      return !1;
    const Q = me[v] || Jt.attributeCheck instanceof Function && Jt.attributeCheck(v, m);
    if (!(Br && lt(st, v))) {
      if (!(Zi && lt(We, v))) {
        if (Q) {
          if (!an[v]) {
            if (!lt(fi, os(U, Xe, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && m !== "script" && wf(U, "data:") === 0 && ro[m])) {
                if (!(An && !lt(ie, os(U, Xe, "")))) {
                  if (U)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(kd(m) && (De.tagNameCheck instanceof RegExp && lt(De.tagNameCheck, m) || De.tagNameCheck instanceof Function && De.tagNameCheck(m)) && (De.attributeNameCheck instanceof RegExp && lt(De.attributeNameCheck, v) || De.attributeNameCheck instanceof Function && De.attributeNameCheck(v, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && De.allowCustomizedBuiltInElements && (De.tagNameCheck instanceof RegExp && lt(De.tagNameCheck, U) || De.tagNameCheck instanceof Function && De.tagNameCheck(U)))
        ) return !1;
      }
    }
    return !0;
  }, Kb = be({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), kd = function(m) {
    return !Kb[fs(m)] && lt($a, m);
  }, Bb = function(m, v, U, Q) {
    if ($ && typeof u == "object" && typeof u.getAttributeType == "function" && !U)
      switch (u.getAttributeType(m, v)) {
        case "TrustedHTML":
          return te(Q);
        case "TrustedScriptURL":
          return qe(Q);
      }
    return Q;
  }, jb = function(m, v, U, Q) {
    try {
      U ? m.setAttributeNS(U, v, Q) : m.setAttribute(v, Q), co(m) ? cn(m) : Pf(t.removed);
    } catch {
      Nn(v, m);
    }
  }, xd = function(m) {
    vr(N.beforeSanitizeAttributes, m, null);
    const v = m.attributes;
    if (!v || co(m))
      return;
    me = md(N.uponSanitizeAttribute, me, Mt, Pn);
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: me,
      forceKeepAttr: void 0
    };
    let Q = v.length;
    const re = Ge(m.nodeName);
    for (; Q--; ) {
      const le = v[Q], we = le.name, Je = le.namespaceURI, Pt = le.value, Nt = Ge(we), Ka = Pt;
      let Tt = we === "value" ? Ka : uM(Ka);
      if (U.attrName = Nt, U.attrValue = Tt, U.keepAttr = !0, U.forceKeepAttr = void 0, vr(N.uponSanitizeAttribute, m, U), Tt = U.attrValue, nt && (Nt === "id" || Nt === "name") && wf(Tt, Ue) !== 0 && (Nn(we, m), Tt = Ue + Tt), Yt && lt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Tt)) {
        Nn(we, m);
        continue;
      }
      if (Nt === "attributename" && Nf(Tt, "href")) {
        Nn(we, m);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          Nn(we, m);
          continue;
        }
        if (!to && lt(PM, Tt)) {
          Nn(we, m);
          continue;
        }
        if (Et && (Tt = ao(Tt)), !bd(re, Nt, Tt)) {
          Nn(we, m);
          continue;
        }
        Tt = Bb(re, Nt, Je, Tt), Tt !== Ka && jb(m, we, Je, Tt);
      }
    }
    vr(N.afterSanitizeAttributes, m, null);
  }, lo = function(m) {
    let v = null;
    const U = gd(m);
    for (vr(N.beforeSanitizeShadowDOM, m, null); v = U.nextNode(); )
      if (vr(N.uponSanitizeShadowNode, v, null), yd(v, m), xd(v), yi(v.content) && lo(v.content), (A ? A(v) : v.nodeType) === Ft.element) {
        const re = b(v);
        yi(re) && (za(re), lo(re));
      }
    vr(N.afterSanitizeShadowDOM, m, null);
  }, za = function(m) {
    const v = [{
      node: m,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const U = v.pop();
      if (U.shadow) {
        lo(U.shadow);
        continue;
      }
      const Q = U.node, le = (A ? A(Q) : Q.nodeType) === Ft.element, we = y(Q);
      if (we)
        for (let Je = we.length - 1; Je >= 0; --Je)
          v.push({
            node: we[Je],
            shadow: null
          });
      if (le) {
        const Je = _ ? _(Q) : null;
        if (typeof Je == "string" && Ge(Je) === "template") {
          const Pt = Q.content;
          yi(Pt) && v.push({
            node: Pt,
            shadow: null
          });
        }
      }
      if (le) {
        const Je = b(Q);
        yi(Je) && v.push({
          node: null,
          shadow: Je
        }, {
          node: Je,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(j) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, U = null, Q = null, re = null;
    if (qa = !j, qa && (j = "<!-->"), typeof j != "string" && !rs(j) && (j = gM(j), typeof j != "string"))
      throw In("dirty is not a string, aborting");
    if (!t.isSupported)
      return j;
    pi ? (Ee = hi, me = Pn) : Ua(m), (N.uponSanitizeElement.length > 0 || N.uponSanitizeAttribute.length > 0) && (Ee = bt(Ee)), N.uponSanitizeAttribute.length > 0 && (me = bt(me)), t.removed = [];
    const le = At && typeof j != "string" && rs(j);
    if (le) {
      Ub(j);
      const Pt = _ ? _(j) : j.nodeName;
      if (typeof Pt == "string") {
        const Nt = Ge(Pt);
        if (!Ee[Nt] || cr[Nt])
          throw oo(j), In("root node is forbidden and cannot be sanitized in-place");
      }
      if (co(j))
        throw oo(j), In("root node is clobbered and cannot be sanitized in-place");
      try {
        za(j);
      } catch (Nt) {
        throw oo(j), Nt;
      }
    } else if (rs(j))
      v = hd("<!---->"), U = v.ownerDocument.importNode(j, !0), U.nodeType === Ft.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? v = U : v.appendChild(U), za(U);
    else {
      if (!I && !Et && !_r && // eslint-disable-next-line unicorn/prefer-includes
      j.indexOf("<") === -1)
        return $ && X ? te(j) : j;
      if (v = hd(j), !v)
        return I ? null : X ? z : "";
    }
    v && q && cn(v.firstChild);
    const we = le ? j : v;
    try {
      const Pt = gd(we);
      for (; Q = Pt.nextNode(); )
        yd(Q, we), xd(Q), yi(Q.content) && lo(Q.content);
    } catch (Pt) {
      throw le && (oo(j), _i(t.removed, (Nt) => {
        Nt.element && ts(Nt.element);
      })), Pt;
    }
    if (le)
      return _i(t.removed, (Pt) => {
        Pt.element && ts(Pt.element);
      }), Et && Fa(j), j;
    if (I) {
      if (Et && Fa(v), H)
        for (re = ge.call(v.ownerDocument); v.firstChild; )
          re.appendChild(v.firstChild);
      else
        re = v;
      return (me.shadowroot || me.shadowrootmode) && (re = Y.call(n, re, !0)), re;
    }
    let Je = _r ? v.outerHTML : v.innerHTML;
    return _r && Ee["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && lt(MM, v.ownerDocument.doctype.name) && (Je = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + Je), Et && (Je = ao(Je)), $ && X ? te(Je) : Je;
  }, t.setConfig = function() {
    let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ua(j), pi = !0, hi = Ee, Pn = me;
  }, t.clearConfig = function() {
    mi = null, pi = !1, hi = null, Pn = null, $ = S, z = "";
  }, t.isValidAttribute = function(j, m, v) {
    mi || Ua({});
    const U = Ge(j), Q = Ge(m);
    return bd(U, Q, v);
  }, t.addHook = function(j, m) {
    typeof m == "function" && ut(N, j) && Si(N[j], m);
  }, t.removeHook = function(j, m) {
    if (ut(N, j)) {
      if (m !== void 0) {
        const v = cM(N[j], m);
        return v === -1 ? void 0 : lM(N[j], v, 1)[0];
      }
      return Pf(N[j]);
    }
  }, t.removeHooks = function(j) {
    ut(N, j) && (N[j] = []);
  }, t.removeAllHooks = function() {
    N = zf();
  }, t;
}
var OM = vm();
function RM(e) {
  const t = e.getRootElement();
  if (!t?.classList.contains("verse-delete-armed") || t.getAttribute("data-verse-delete-kind") !== "selection")
    return;
  const r = t.getAttribute("data-verse-delete-intent");
  return r === "deleteBackward" || r === "deleteForward" ? r : void 0;
}
function $M({ structureProtectionMode: e = "off" }) {
  const [t] = ue(), r = Z(void 0), [n, i] = ye(void 0), s = xe((o) => {
    r.current = o, i(o);
  }, []);
  return B(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = Iu(p);
      if (!h)
        return !1;
      const g = O();
      return e === "protected" ? g && Lu(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = O(), y = r.current;
      if (y && g && Sf(g, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const b = se(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (b) {
            const T = b.getParent(), A = b.getPreviousSibling(), _ = b.getNextSibling();
            b.remove(), A ? Du(A) : _ && M(_) ? _.select(0, 0) : T?.selectStart();
          }
        } else y.kind === "selection" ? P(g) && (Au(g), g.removeText()) : ft(b) && jv(b);
        return !0;
      }
      if (!g)
        return !1;
      const k = Bv(g, p);
      if (k) {
        if (k.kind === "verse") {
          const b = Wp();
          b.add(k.node.getKey()), Nr(b);
        } else {
          const b = mn();
          b.anchor.set(k.node.getKey(), 0, "element"), b.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), Nr(b);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), h.preventDefault(), !0;
      }
      if (P(g) && !g.isCollapsed() && _a(g)) {
        const b = g.getNodes().filter(ke).map((_) => _.getKey()), { anchor: T, focus: A } = g;
        return s({
          kind: "selection",
          intent: p,
          key: b[0],
          anchor: { key: T.key, offset: T.offset, type: T.type },
          focus: { key: A.key, offset: A.offset, type: A.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = O();
      return !h || !Fn(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = OM.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), k = Vv(Ik(t, y)), b = O();
      return P(b) && b.insertNodes(k), h.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = O();
      return h && Fn(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = O();
      return h && Fn(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Sf(O(), p) || s(void 0);
      });
    };
    return Ie(
      t.registerCommand(xr, o, Oe),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(sr, c, pe),
      t.registerCommand(zt, d, Oe),
      t.registerCommand(Vp, c, Oe),
      t.registerCommand(Ol, u, Oe),
      t.registerCommand(Vn, c, Oe),
      t.registerUpdateListener(f)
    );
  }, [t, e, s]), B(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const qM = /* @__PURE__ */ new Set(["​", " "]), Kf = 6e4;
function IM({ isEnabled: e, structureProtectionMode: t = "off", copyLimit: r, onHiddenContentDelete: n, logger: i }) {
  const [s] = ue(), o = Z(n), a = Z(t), c = Z(r), l = Z(i);
  B(() => {
    o.current = n, a.current = t, c.current = r, l.current = i;
  }, [n, t, r, i]);
  const d = !!n;
  return B(() => {
    if (!e || !d)
      return;
    let u = !1, f = !1, p = !1;
    const h = (J) => {
      u = !0;
      try {
        J();
      } finally {
        u = !1;
      }
    }, g = async (J) => {
      const V = o.current;
      if (!V)
        return "keep";
      try {
        const ne = await V(J);
        return ne !== "delete" && ne !== "keep" && l.current?.warn(`[HiddenContentDeleteGuard] onHiddenContentDelete answered ${JSON.stringify(ne)}, which is neither "delete" nor "keep"; keeping the hidden content.`), ne === "delete" ? "delete" : "keep";
      } catch (ne) {
        return l.current?.error("[HiddenContentDeleteGuard] onHiddenContentDelete failed; keeping the hidden content.", ne), "keep";
      }
    }, y = (J, V) => l.current?.info(`[HiddenContentDeleteGuard] Dropped the "${J}" answer: ${V}. Nothing was changed.`), k = (J, V, ne, ge) => {
      const ht = KM(J, V), Y = {
        items: Jv(V),
        action: ne,
        canSkip: !!ge.$keep
      };
      f = !0;
      const N = setTimeout(() => !p && l.current?.warn(`[HiddenContentDeleteGuard] onHiddenContentDelete has not answered after ${Kf / 1e3}s; editing stays held until it does.`), Kf);
      return g(Y).then((ee) => {
        clearTimeout(N), f = !1, p ? y(ee, "the editor's guard was torn down while asking") : b(ht, ee, ge);
      }), !0;
    }, b = (J, V, ne) => {
      if (!s.getEditorState().read(() => jM(J))) {
        y(V, "the selection moved while asking");
        return;
      }
      s.focus(() => queueMicrotask(() => T(J, V, ne)));
    }, T = (J, V, ne) => {
      if (p) {
        y(V, "the editor's guard was torn down while asking");
        return;
      }
      let ge = !1;
      s.update(() => {
        if (!s.isEditable()) {
          y(V, "the editor became read-only while asking");
          return;
        }
        if (!BM(J)) {
          y(V, "the document changed while asking");
          return;
        }
        if (VM(J), V === "keep") {
          ne.$keep?.();
          return;
        }
        ne.$delete?.(), ge = !0;
      }, { discrete: !0 });
      const { replay: ht } = ne;
      ge && ht && h(ht);
    }, A = (J) => {
      for (const V of J) {
        const ne = se(V);
        _e(ne) && ne.isAttached() && ne.remove();
      }
    }, _ = (J, V, ne) => {
      const ge = V === "backward", ht = ge ? "deleteBackward" : "deleteForward", Y = Wv(J, V);
      if (Y?.placement === "block") {
        const We = Y.nodes.map((ie) => ie.getKey());
        return k(J, Y.nodes, ht, {
          // With no paragraph on the far side (a chapter marker, the document's edge) there is
          // nowhere to skip to, so "keep" cancels rather than leaving the caret to ask again.
          $keep: Gv(Y, V) ? () => vf(Bf(Y, We), V) : void 0,
          $delete: () => A(We)
        });
      }
      const N = ne === "character" ? [] : FM(s, J, V, ne), ee = zM([...Y?.nodes ?? [], ...N]);
      if (ee.length === 0)
        return !1;
      const he = ee.map((We) => We.getKey()), Te = !!Y && ee.length === Y.nodes.length, st = Y?.nodes.map((We) => We.getKey()) ?? [];
      return k(J, ee, ht, {
        $keep: Y && Te ? () => vf(Bf(Y, st), V) : void 0,
        $delete: () => A(he),
        replay: ne === "character" ? void 0 : () => s.dispatchCommand(DM(ne), ge)
      });
    }, w = (J, V) => {
      const ne = To(J);
      return ne.length === 0 ? !1 : k(J, ne, "replaceSelection", { replay: V });
    }, $ = () => {
      if (u)
        return;
      const J = O();
      if (!(!P(J) || Zs()))
        return J;
    }, z = (J) => {
      if (u)
        return !1;
      const V = Iu(J), ne = V === "deleteBackward" || V === "deleteForward";
      if (f)
        return !ne && !om(J) ? !1 : (J.preventDefault(), !0);
      if (!ne || !yn && J.key === "Delete" && J.shiftKey)
        return !1;
      const ge = $();
      if (!ge || a.current === "protected" && Lu(ge, V))
        return !1;
      const ht = V === "deleteBackward";
      if (!ge.isCollapsed() && a.current === "guarded" && _a(ge) && RM(s) !== V)
        return !1;
      const Y = ge.isCollapsed() ? _(ge, ht ? "backward" : "forward", LM(J)) : (
        // Claimed here rather than left to DELETE_CHARACTER_COMMAND: in guarded mode
        // StructureKeyboardPlugin removes an armed selection itself, straight off the keystroke.
        w(ge, () => s.dispatchCommand(Ar, ht))
      );
      return Y && J.preventDefault(), Y;
    }, S = (J, V) => (ne) => {
      if (f && !u)
        return !0;
      const ge = $();
      return ge ? ge.isCollapsed() ? _(ge, ne ? "backward" : "forward", V) : ce(ge) ? !1 : w(ge, () => s.dispatchCommand(J, ne)) : !1;
    }, W = (J) => (V) => {
      if (f && !u)
        return !0;
      const ne = $();
      return !ne || ne.isCollapsed() || ce(ne) ? !1 : w(ne, () => s.dispatchCommand(J, V));
    }, G = (J) => {
      if (f && !u)
        return !0;
      const V = $();
      if (!V || V.isCollapsed() || ce(V))
        return !1;
      const ne = typeof J == "string" ? J : J.data ?? J.dataTransfer?.getData("text/plain") ?? "", ge = s.isComposing() && qM.has(ne);
      return w(V, () => ge || ne === "" ? s.dispatchCommand(Ar, !0) : s.dispatchCommand(Vn, ne));
    }, ce = (J) => a.current === "protected" && Fn(J), te = (J) => {
      if (u)
        return !1;
      const V = $();
      return !V || To(V).length === 0 ? !1 : vi(J);
    }, qe = (J) => {
      if (f && !u)
        return vi(J);
      const V = $();
      if (!V || V.isCollapsed() || ce(V))
        return !1;
      const ne = UM(J), ge = w(V, () => s.dispatchCommand(zt, ne));
      return ge && vi(J), ge;
    }, Se = (J) => {
      if (f && !u)
        return vi(J);
      const V = $();
      return !V || V.isCollapsed() || ce(V) || To(V).length === 0 ? !1 : c.current !== void 0 ? vi(J) : (s.dispatchCommand(Wn, J), vi(J), w(V, () => s.dispatchCommand(Ar, !0)));
    };
    return Ie(() => {
      p = !0;
    }, s.registerCommand(xr, z, pe), s.registerCommand(Ar, S(Ar, "character"), pe), s.registerCommand($i, S($i, "word"), pe), s.registerCommand(jn, S(jn, "line"), pe), s.registerCommand(Vn, G, pe), s.registerCommand(Hn, W(Hn), pe), s.registerCommand(vc, W(vc), pe), s.registerCommand(Vp, te, pe), s.registerCommand(Nl, te, pe), s.registerCommand(zt, qe, pe), s.registerCommand(sr, Se, pe));
  }, [s, e, d]), null;
}
function LM(e) {
  return yn ? e.metaKey ? "line" : e.altKey ? "word" : "character" : e.ctrlKey ? "word" : "character";
}
function DM(e) {
  return e === "word" ? $i : e === "line" ? jn : Ar;
}
function vi(e) {
  return e?.preventDefault(), !0;
}
function UM(e) {
  if (typeof ClipboardEvent > "u" || typeof DataTransfer > "u" || !(e instanceof ClipboardEvent) || !e.clipboardData)
    return e;
  const t = new DataTransfer();
  for (const r of e.clipboardData.types)
    r !== "Files" && t.setData(r, e.clipboardData.getData(r));
  for (const r of Array.from(e.clipboardData.files))
    t.items.add(r);
  return new ClipboardEvent("paste", { clipboardData: t, cancelable: !0 });
}
function FM(e, t, r, n) {
  const i = e.getRootElement()?.ownerDocument.defaultView?.getSelection();
  if (!i || typeof i.modify != "function")
    return n === "line" ? Hv(t, r) : [];
  const s = t.clone();
  return s.dirty = !0, s.modify("extend", r === "backward", n === "line" ? "lineboundary" : "word"), t.dirty = !0, To(s);
}
function zM(e) {
  return e.filter((r, n) => e.findIndex((i) => i.is(r)) === n).sort((r, n) => r.isBefore(n) ? -1 : 1);
}
function KM(e, t) {
  const r = ({ key: n, offset: i, type: s }) => ({ key: n, offset: i, type: s });
  return {
    anchor: r(e.anchor),
    focus: r(e.focus),
    hiddenKeys: t.map((n) => n.getKey()),
    text: Ke().getTextContent()
  };
}
function BM(e) {
  const t = ({ key: r, offset: n, type: i }) => {
    const s = se(r);
    return !s || !s.isAttached() ? !1 : i === "element" ? L(s) && n <= s.getChildrenSize() : M(s) && n <= s.getTextContentSize();
  };
  return t(e.anchor) && t(e.focus) && e.hiddenKeys.every((r) => se(r)?.isAttached()) && Ke().getTextContent() === e.text;
}
function jM(e) {
  const t = O();
  if (!t)
    return !0;
  if (!P(t))
    return !1;
  const r = (n, i) => n.key === i.key && n.offset === i.offset && n.type === i.type;
  return r(t.anchor, e.anchor) && r(t.focus, e.focus);
}
function VM(e) {
  const t = mn();
  t.anchor.set(e.anchor.key, e.anchor.offset, e.anchor.type), t.focus.set(e.focus.key, e.focus.offset, e.focus.type), Nr(t);
}
function Bf(e, t) {
  return { nodes: t.map((n) => se(n)).filter(_e), placement: e.placement };
}
function WM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ue();
  return B(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), B(() => {
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
        const d = hm(o);
        o.update(() => {
          d || wt(Vr), o.setEditorState(l), o.dispatchCommand(lk, void 0);
        }, { tag: Il });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const hc = "caller_highlight", HM = Mn(function(t, r) {
  const [n] = ue(), i = Z(void 0), s = Z(void 0), o = xe(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const d = Er(a);
      return d ? (d.getChildren().find(xt) ?? Xr(d))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(hc), l?.classList.add(hc), s.current = l;
  }, [n]);
  return ra(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Ei(n, () => Er(a)?.getKey()), o();
    }
  }), [n, o]), B(() => Ie(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Le, (a, { prevEditorState: c, updateTags: l }) => {
      const d = i.current;
      if (d === void 0 || a.get(d) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const u = l.has(Il) ? void 0 : c.read(() => pu(d)), f = u === void 0 ? void 0 : n.getEditorState().read(() => Er(u)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), B(() => () => s.current?.classList.remove(hc), []), null;
});
function GM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ue();
  return JM(t, n), YM(i, e, r, n), null;
}
function JM(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  B(() => {
    let o = i;
    (!o || o.length <= 0) && (o = z_), r.current !== o && (r.current = o, jf("note-callers", o, t));
  }, [t, i]), B(() => {
    let o = s;
    (!o || o.length <= 0) && (o = K_), n.current !== o && (n.current = o, jf("cross-ref-callers", o, t));
  }, [t, s]);
}
function YM(e, t, r, n) {
  B(() => {
    if (!e.hasNodes([ve, Le, hr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => nE(s));
    return Ie(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Le, (s) => XM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ve, QM),
      e.registerNodeTransform(et, ZM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(hr, eE),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(hr, (s, { prevEditorState: o }) => tE(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Kt, () => rE(e, t, r, n), qt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function XM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => xt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    M(i) && !R(i) && i.getTextContent() !== Wt(e.getCaller()) && e.insertBefore(i);
  }
}
function QM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => xt(s));
  if (!F(e) || !K(t) || !n)
    return;
  const i = Hl(r);
  n.getPreviewText() !== i && n.setPreviewText(i), Em(e);
}
function Mm(e) {
  const t = O();
  if (!P(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function Em(e) {
  const t = e.getNextSibling();
  if (M(t) && !R(t)) {
    if (t.getTextContent() === D || Mm(t))
      return;
    if (zr(t)) {
      t.setTextContent(D);
      return;
    }
  }
  e.insertAfter(Hs());
}
function ZM(e) {
  const t = Vt(e), r = t?.getChildren(), n = r?.find((a) => xt(a));
  if (!M(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent(), s = zr(e) || Mm(e);
  if (!R(e) && K(i) && s && e.getTextContent() !== D && (e.setTextContent(D), e.selectEnd()), F(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(or) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = Hl(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function eE(e) {
  xt(e) && Em(e);
}
function tE(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return xt(o) && K(a) && a.getCaller() === xs;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function rE(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = O();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = $e(o, (c) => K(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = se(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), cs(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, cs(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, cs(e, c, n);
    } else if (!a) {
      const c = $e(o, (l) => K(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      Ne(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, cs(e, l, n);
      }
    }
  }
  if (ft(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (li(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, cs(e, l, n);
    }
  }
  return !1;
}
function cs(e, t, r) {
  const n = se(t);
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
function nE(e) {
  const t = O();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && M(s)) {
    e.preventDefault();
    const o = mn();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Nr(o);
  }
}
function jf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (iE(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function iE(e, t) {
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
function sE(e) {
  const t = e.getParent();
  if (K(t))
    return Rr(t).some((r) => r.is(e)) ? t : void 0;
}
function ei(e) {
  const t = Rr(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function oE(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function aE(e) {
  const t = uk();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ei(e);
  const i = oE(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ei(e);
}
function Ni(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = sE(t);
  if (r)
    return Am(r, t, e.offset) ? void 0 : r;
}
function Am(e, t, r) {
  const n = Rr(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function cE(e) {
  const t = Rr(e), r = t[t.length - 1];
  M(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : ar(e, ei(e));
}
function lE(e = !1) {
  const t = O();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return Om(t);
  const r = Pm(t.anchor);
  if (r) {
    const i = jo(r);
    return t.anchor.is(i) ? !1 : (Nm(t, i), !0);
  }
  const n = Ni(t.anchor);
  if (!n)
    return !1;
  if (!e && aE(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    ar(i, n.getIndexWithinParent());
  } else
    cE(n);
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
function Pm(e) {
  const t = e.getNode(), r = t.getParent();
  if (K(r) && Rr(r).length > 0 && Zc(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (K(t) && Rr(t).length > 0 && Zc(t))
    return e.offset > Bi(t) || e.offset === Bi(t) && e.offset > ei(t) ? t : void 0;
  if (!L(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return K(n) && Rr(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function Nm(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function wm(e) {
  const t = Vt(e);
  return t && Rr(t).length > 0 ? t : void 0;
}
function uE(e) {
  const t = [], r = (n) => {
    const i = wm(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function Om(e) {
  const t = uE(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => fr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const d = fr(l.getKey(), ei(l), "element"), u = fr(l.getKey(), Bi(l), "element"), f = i.type === "text" && Am(l, i.getNode(), i.offset), p = i.isBefore(d) && !f;
    (Ni(i) || gc(l, i) || p) && (!s.isBefore(d) || Ni(s)) && (i = gc(l, i) ? jo(l) : Bo(l), o = !0), (Ni(s) || gc(l, s) || u.isBefore(s)) && (i.isBefore(u) || i.is(u)) && (s = Ni(s) ? Bo(l) : jo(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function Vf(e, t) {
  const r = mn();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function Wf(e, t) {
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
function Hf(e, t, r) {
  const n = Wf(e, t), i = Wf(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function dE(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return L(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function fE(e, t, r, n) {
  const i = t.anchor, s = Pm(i);
  if (s)
    return Nm(t, jo(s)), !0;
  const o = wm(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const u = dE(t.focus);
    return K(u) && Rr(u).length > 0;
  }
  if (Ni(i))
    return !0;
  const a = Bo(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const u = Vf(a, i);
    return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && Hf(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = Zc(o);
  if (!c)
    return !1;
  const l = fr(c.getKey(), 0, "text"), d = Vf(i, l);
  return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && Hf(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function pE() {
  const [e] = ue(), t = Z(!1);
  return B(() => {
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
  }, [e]), B(() => {
    const r = (o) => () => {
      const a = O();
      return !P(a) || a.isCollapsed() || !Om(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = O();
      return P(c) ? c.isCollapsed() ? fE(e, c, a, o) : i() : !1;
    };
    return Ie(e.registerCommand(Vn, n, pe), e.registerCommand(zt, n, pe), e.registerCommand(Hn, n, pe), e.registerCommand(vc, n, pe), e.registerCommand(Ar, s("character"), pe), e.registerCommand($i, s("word"), pe), e.registerCommand(jn, s("line"), pe), e.registerCommand(Nl, i, pe), e.registerCommand(sr, i, pe));
  }, [e]), B(() => e.registerCommand(Kt, () => (lE(t.current) && (wt(Rt), Gr(e, Rt)), !1), Bn), [e]), null;
}
function hE({ onChange: e }) {
  const [t] = ue();
  return B(() => t.registerCommand(Kt, () => {
    const r = gu();
    return e?.(r), !1;
  }, qt), [t, e]), null;
}
function gE() {
  const [e] = ue();
  return mE(e), null;
}
function mE(e) {
  B(() => {
    if (!e.hasNodes([pt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(pt, (t) => yE(t, e));
  }, [e]);
}
function yE(e, t) {
  Kc(t, e.getKey()) && $g(e.getFirstChild()), !(!de(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return de(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Rm({ onStateChange: e }) {
  const [t] = ue(), [r, n] = ye(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = xe(() => {
    const l = O();
    let d;
    if (P(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : $e(u, (k) => {
        const b = k.getParent();
        return b !== null && dk(b);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Ps(p) && (p = $e(u, de) ?? p);
      const h = p.getKey(), g = r.getElementByKey(h), y = oT(u, f);
      if (y && ZC(y) && (d = y.getMarker()), g !== null && (de(p) || Me(p) || Bs(p))) {
        o.current = p.getMarker(), a.current = d, e?.({
          canUndo: i.current,
          canRedo: s.current,
          blockMarker: o.current,
          contextMarker: d
        });
        return;
      }
    }
    a.current = d;
  }, [r, e]);
  return B(() => t.registerCommand(Kt, (l, d) => (c(), n(d), !1), pe), [t, c]), B(() => Ie(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(fk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), pe), r.registerCommand(pk, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), pe)), [c, r, e]), null;
}
const Nw = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function bE({ textDirection: e }) {
  const [t] = ue();
  return kE(t, e), null;
}
function kE(e, t) {
  B(() => (Gf(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Gf(e, t);
  })), [e, t]);
}
function Gf(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function xE() {
  const [e] = ue();
  return TE(e), null;
}
function TE(e) {
  B(() => {
    if (!e.hasNodes([ve, Dt, Le, et, Ct]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ie(
      e.registerNodeTransform(et, CE),
      e.registerNodeTransform(et, (t) => _E(t, e)),
      e.registerNodeTransform(Ct, Jf),
      e.registerNodeTransform(Dt, Jf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(Ct, (t) => {
        As(Xn("va"), t), As(Xn("vp"), t);
      })
    );
  }, [e]);
}
function CE(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || K(r) || F(n) || F(r) || Ae(n) || Ae(r) || _e(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  _e(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ae(e, fe) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  je(n))
    return;
  if (ke(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ke(r) && cu(e);
}
function _E(e, t) {
  const r = e.getParent();
  !_e(r) || !e.isAttached() || Kc(t, e.getKey()) && !Kc(t, r.getKey()) && r.insertAfter(e);
}
function Jf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ae(t); )
    t = t.getLastChild();
  (F(t) || M(t) && Ae(t.getParent())) && e.insertBefore(Pe(" "));
}
function Sa(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
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
function vE() {
  const e = O();
  if (!(!P(e) || !e.isCollapsed()))
    return Sa(SE(e.anchor));
}
function ME(e) {
  const t = O();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = $m(e.target)), r ? Sa($e(r, K)) : void 0;
}
function $m(e) {
  const t = hk(e)?.anchorNode;
  if (Kp(t))
    return Wi(t) ?? void 0;
}
function EE(e) {
  if (O())
    return;
  const t = $m(e);
  return t ? Sa($e(t, K)) : void 0;
}
function Yf(e) {
  const t = $e(e.getNode(), K);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function AE() {
  const e = O();
  if (!P(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = Yf(t), i = Yf(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const PE = 500;
function NE(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function wE() {
  const e = O();
  if (!P(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (L(n))
    return Sa(n.getChildAtIndex(t.offset));
}
function OE() {
  const [e] = ue(), t = qu(vE), r = Z(void 0);
  return B(() => {
    const n = (i) => {
      wt(Rt), Gr(e, Rt), t(i);
    };
    return Ie(e.registerCommand(
      xr,
      (i) => (r.current = NE(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      pe
    ), e.registerCommand(Kt, () => {
      if (r.current !== void 0 && performance.now() - r.current < PE) {
        const o = wE();
        if (o)
          return n(o), !1;
      }
      if (AE())
        return wt(Rt), Gr(e, Rt), !1;
      const s = EE(e.getRootElement());
      return s && n(s), !1;
    }, Bn), e.registerCommand(sa, (i) => {
      const s = ME(i);
      return s && n(s), !1;
    }, Bn));
  }, [e, t]), null;
}
function RE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = xS({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return E(kS, { trigger: e, items: i });
}
function $E({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = Ze(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? E(LE, { trigger: e, harness: i }) : E(RE, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const qE = [" ", "*"];
function IE(e, t) {
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
function LE({ trigger: e, harness: t }) {
  const [r] = ue(), [n, i] = ye(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = xe((f, p, h) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = O();
      P(y) && y.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  B(() => Ie(r.registerCommand(xr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), Hp(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = O();
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
  }, Oe), r.registerCommand(Gp, (f) => {
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
  }, []), d = xe((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), u = Ze(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    IE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && E(Vg, { isOpen: !0, children: ({ placement: f }) => E(
    Gg,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? qE : void 0 },
    n.session
  ) });
}
function DE(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (r) => D.repeat(r.length));
}
function UE(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
function FE(e) {
  return e.replace(/ {2,}/g, " ");
}
let Vo;
function zE(e) {
  e && (Vo = e);
}
function el(e) {
  return Qs(e);
}
function KE(e, t) {
  return e.isEmpty() ? zp : qm(e.toJSON(), t);
}
function qm(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && la(r[0]) && (!r[0].children || r[0].children.length === 0))
    return zp;
  if (r.some($C)) {
    Vo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Im(r), i = ur(n, t);
  return i ? { type: mr, version: gr, content: i } : void 0;
}
function BE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), ze({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function jE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return ze({
    type: Gt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function VE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Vh(r, a, c), ze({
    type: Gt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function WE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Vh(t, o, a), ze({
    type: Ct.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function HE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !el(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(D) && (t[0] = a.slice(1));
  }
  return ze({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function GE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return ze({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function JE(e, t) {
  const { unknownAttributes: r } = e;
  return ze({ type: kg, ...r, content: t });
}
function YE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return ze({ type: Cg, marker: r, ...n, content: t });
}
function XE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return ze({
    type: Sg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function QE(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function ZE(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return ze({
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
  return ze({
    type: t,
    marker: r === "" ? void 0 : r,
    ...eg({ sid: n, eid: i, ...s }, o)
  });
}
function eA(e) {
  return e.text;
}
function tA(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return ze({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function rA(e) {
  const { marker: t } = e;
  return {
    type: Oo,
    marker: t === "" ? void 0 : t
  };
}
function Xf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function nA(e, t, r, n, i) {
  const s = yr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = Pi({
      type: s,
      marker: wi,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = Pi({
      type: s,
      marker: Gn,
      sid: l
    });
    i.push(d);
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
  (!n || !Ch(n)) && t.forEach((l) => {
    const d = Pi({
      type: s,
      marker: wi,
      eid: l
    });
    i.push(d);
  });
}
function ur(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, p = a, h = a, g = a, y = a;
    switch (a.type) {
      case jt.getType():
        i.push(
          BE(
            l,
            ur(l.children, t)
          )
        );
        break;
      case Fr.getType():
        i.push(jE(a));
        break;
      case Gt.getType():
        i.push(
          VE(
            d,
            ur(d.children, t)
          )
        );
        break;
      case Dt.getType():
      case Ct.getType():
        i.push(WE(a));
        break;
      case ve.getType():
        i.push(
          HE(
            u,
            ur(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case pt.getType():
        i.push(
          GE(
            f,
            ur(f.children, t)
          )
        );
        break;
      case ci.getType():
        i.push(
          JE(
            a,
            ur(a.children, t)
          )
        );
        break;
      case Ji.getType():
        i.push(
          YE(
            a,
            ur(a.children, t)
          )
        );
        break;
      case Yi.getType():
        i.push(
          XE(
            a,
            ur(a.children, t)
          )
        );
        break;
      case Le.getType(): {
        const k = ur(
          p.children,
          t,
          p.caller
        );
        i.push(
          ZE(
            p,
            el(t) && p.category === void 0 ? QE(k) : k
          )
        );
        break;
      }
      case en.getType():
      case Zr.getType():
      case hr.getType():
      case Jp.getType():
      case Kr.getType():
        break;
      case dt.getType():
        if (s = ur(
          g.children,
          t,
          r,
          n
        ), s) {
          const k = g.typedIDs[hn];
          if (k)
            nA(s, k, o, e[c + 1], i), o = k;
          else {
            const b = s.shift();
            b && (typeof b == "string" ? Xf(i, b) : i.push(b)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case yr.getType():
        i.push(Pi(a));
        break;
      case et.getType():
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
        h.text !== D && !h.text.startsWith(ql) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        h[Ks]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || h.text !== Wt(r))) {
          let k = eA(h);
          el(t) && (n && k.startsWith(D) && (k = k.slice(1)), k = FE(UE(k))), Xf(i, k);
        }
        break;
      case ai.getType():
        i.push(
          tA(
            y,
            ur(y.children, t)
          )
        );
        break;
      case nn.getType():
        i.push(rA(a));
        break;
      case Xi.getType():
        Vo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Vo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Im(e) {
  const t = e.findIndex((r) => la(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Im(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Co = {
  initialize: zE,
  deserializeEditorState: KE
}, iA = /^sd\d*$/, sA = /* @__PURE__ */ new Set([
  ...Object.entries(Pc).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === x.Paragraph && !iA.test(e)
  ).map(([e]) => e),
  "qa"
]);
function oA(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Bl(i) || Kh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!sT(i)) {
      t && Wo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Vl(i) && sA.has(i.marker) && !Wo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Lm(i.children, t).forEach((s) => {
      const o = aA(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = cA(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Lm(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Dm(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Ch(i)) {
      const s = Lm(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Qf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Qf(i, c.nodes)] });
      });
      return;
    }
    t && Wo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Qf(e, t) {
  return { ...e, children: t };
}
function Dm(e) {
  return Og(e) && e.number !== "";
}
function Wo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Dm(r) || Wo(r)) : !1;
}
function aA(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function cA(e) {
  return {
    type: Ro,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Pg
  };
}
const Zf = zm([]), lA = {
  type: Jp.getType(),
  version: 1
};
let Uu = [], oe, ti, Um, Lt;
function uA(e, t) {
  Uu = [], pA(e), hA(t);
}
function dA(e = 0) {
}
function fA(e, t) {
  oe = t ?? Ta();
  let r;
  return e ? (e.type !== mr && Lt?.warn(`This USJ type '${e.type}' didn't match the expected type '${mr}'.`), e.version !== gr && Lt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${gr}'.`
  ), e.content.length > 0 ? (r = il(Wr(e.content)), ws(oe) && (r = oA(r, Lt))) : r = [Zf]) : r = [Zf], Um?.(Uu), {
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
function pA(e) {
  e && (ti = e), e?.addMissingComments && (Um = e.addMissingComments);
}
function hA(e) {
  e && (Lt = e);
}
function Fm() {
  return Qs(oe);
}
function gA(e, t) {
  let { marker: r } = e;
  r !== Ss && Lt?.warn(`Unexpected book marker '${r}'!`), r = r ?? Ss;
  const { code: n } = e;
  (!n || !jt.isValidBookCode(n)) && Lt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  oe?.markerMode === "editable" || oe?.markerMode === "visible" ? i.push(
    $t("marker", Ve(r) + " " + n + D)
  ) : oe?.hasGutterParaMarkers && i.push($t("marker", Ve(r) + D, !0)), i.push(...t);
  const s = Ye(e, Dx);
  return ze({
    type: jt.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Eh
  });
}
function mA(e) {
  let { marker: t } = e;
  t !== Po && Lt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Po;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ye(e, Ux);
  let a;
  oe?.markerMode === "visible" && (a = !0);
  const c = [
    vt(ir(t, r) ?? "")
  ];
  return oe?.markerMode === "editable" && RA(i, s, c), oe?.markerMode === "editable" ? ze({
    type: Gt.getType(),
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
    version: Ph
  }) : ze({
    type: Fr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: $h
  });
}
function yA(e) {
  let { marker: t } = e;
  t !== No && Lt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? No;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (PS(oe) ?? Dt).getType(), c = oe?.markerMode === "editable" ? Uh : wg;
  let l, d;
  oe?.markerMode === "editable" ? l = ir(t, r) : oe?.markerMode === "visible" && (d = !0);
  const u = Ye(e, Qx);
  return ze({
    type: a,
    text: l,
    ...l === void 0 ? void 0 : { detail: 0, format: 0, mode: "normal", style: "" },
    marker: t,
    number: r ?? "",
    sid: n,
    altnumber: i,
    pubnumber: s,
    showMarker: d,
    unknownAttributes: u,
    version: c
  });
}
function bA(e, t = [], r = !1) {
  let { marker: n } = e;
  ve.isValidMarker(n, ti?.extraValidMarkers) || Lt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (oe?.markerMode === "editable") {
    const [a] = t;
    Li(a) ? a.text = D + a.text : a && t.unshift(vt(D));
  }
  t.length === 0 && t.push(vt(or)), tl(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ye(e, Kx);
  return s || PA(n, o, i), s || rl(e.marker ?? "", i, !1, r), ze({
    type: ve.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Rh
  });
}
function zm(e) {
  return {
    type: kn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Lh
  };
}
function kA(e, t = []) {
  let { marker: r } = e;
  pt.isValidMarker(r, ti?.extraValidMarkers) || Lt?.warn(`Unexpected para marker '${r}'!`), r = r ?? nr;
  const n = [];
  if (ui(oe) && (oe?.markerMode === "editable" ? n.push(
    _t(r),
    vt(D, Ur, "token")
  ) : (oe?.markerMode === "visible" || oe?.hasGutterParaMarkers) && n.push(
    $t(
      "marker",
      Ve(r) + D,
      oe?.hasGutterParaMarkers
    )
  )), n.push(...t), Fm()) {
    const s = n.find(
      (o) => !Yl(o) && !(Li(o) && o.text === D)
    );
    Li(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = Ye(e, Yx);
  return ze({
    type: pt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Dh
  });
}
function Fu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function xA(e, t = []) {
  const r = Ye(e, tC);
  return ze({
    ...Fu(),
    type: ci.getType(),
    unknownAttributes: r,
    children: t,
    version: xg
  });
}
function TA(e, t = []) {
  const r = Ye(e, iC), n = e.marker ?? Dc, i = [];
  return oe?.markerMode === "editable" ? i.push(
    _t(n),
    vt(D, Ur, "token")
  ) : (oe?.markerMode === "visible" || oe?.hasGutterParaMarkers) && i.push(
    $t(
      "marker",
      Ve(n) + D,
      oe?.hasGutterParaMarkers
    )
  ), i.push(...t), ze({
    ...Fu(),
    type: Ji.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: _g
  });
}
function CA(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Uc, a = fg(o, i) ?? o;
  oe?.markerMode === "editable" ? s.push(
    _t(a),
    vt(D, Ur, "token")
  ) : (oe?.markerMode === "visible" || oe?.hasGutterParaMarkers) && s.push(
    $t(
      "marker",
      Ve(a) + D,
      oe?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Ye(
    e,
    oC
  );
  return ze({
    ...Fu(),
    type: Yi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: vg
  });
}
function _A(e, t) {
  const r = dT(t);
  let n = () => {
  };
  return ti?.noteCallerOnClick && (n = ti.noteCallerOnClick), ze({
    type: hr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Dg
  });
}
function SA(e, t) {
  let { marker: r } = e;
  Le.isValidMarker(r, ti?.extraValidMarkers) || Lt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Dl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : mu(oe?.noteMode), a = Ye(e, tx), c = oe?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  oe?.markerMode === "editable" ? (l = _t(r, "opening", !1, c), s || (d = _t(r, "closing"))) : oe?.markerMode === "visible" && (l = $t("marker", Ve(r) + " "), s || (d = $t("marker", ct(r))));
  const u = [];
  let f;
  if (l && u.push(l), oe?.markerMode === "editable" && !o)
    f = vt(Wt(i), void 0, c), u.push(f), OA(n, u), u.push(...t);
  else {
    const p = vt(D, Ur, "token");
    f = _A(i, t), u.push(f, p, ...t.flatMap(vA(p)));
  }
  return d && u.push(d), ze({
    type: Le.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: hh
  });
}
function vA(e) {
  return (t) => xh(t) ? [t] : [t, e];
}
function MA(e) {
  let { marker: t } = e;
  (!t || !yr.isValidMarker(t, ti?.extraValidMarkers)) && Lt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ye(e, Ll), s = tg(e);
  return ze({
    type: yr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: dh
  });
}
function ep(e, t = []) {
  return {
    type: dt.getType(),
    typedIDs: { [hn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function EA(e, t) {
  const { marker: r } = e, n = e.type, i = Ye(e, Rx), s = [];
  if (oe?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = pg(
      n,
      r,
      i
    );
    o && s.push($t("marker", o)), a && s.push($t("attribute", a)), s.push(...t), c && s.push($t("attribute", c)), l && s.push($t("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Li(o) && (o.mode = "token");
  }), ze({
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
function AA(e) {
  return {
    type: nn.getType(),
    marker: e,
    text: ms(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: oe?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: yg
  };
}
function _t(e, t = "opening", r = !1, n = "normal") {
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
function vt(e, t = void 0, r = "normal") {
  const n = {
    type: et.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Ks] = { textType: t }), n;
}
function $t(e, t, r = !1) {
  const n = {
    type: Zr.getType(),
    text: t,
    textType: e,
    version: kh
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
    version: vh
  };
}
function tl(e, t, r = !1) {
  oe?.markerMode === "editable" ? t.push(_t(e, "opening", r)) : oe?.markerMode === "visible" && t.push($t("marker", Ve(e, r)));
}
function rl(e, t, r = !1, n = !1) {
  oe?.markerMode === "editable" ? r ? t.push(_t("", "selfClosing")) : t.push(_t(e, "closing", n)) : oe?.markerMode === "visible" && t.push(
    $t(
      "marker",
      r ? ct("") : ct(e, n)
    )
  );
}
function PA(e, t, r) {
  if (oe?.markerMode !== "editable" || !t) return;
  const n = Pr(t, aa(e));
  n && r.push(vt(n, "attribute"));
}
function tp(e, t) {
  if (e.type !== "ms" || oe?.markerMode !== "editable" && oe?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ye(e, Ll), o = rg(
    n,
    i,
    s,
    tg(e)
  ), a = Pr(o, ca(r ?? ""));
  if (!a) return;
  const c = D + a;
  oe?.markerMode === "editable" ? t.push(vt(c, "attribute")) : t.push($t("attribute", c));
}
function NA(e, t) {
  const r = e.marker ?? "";
  if (oe?.markerMode === "editable") {
    const n = [];
    tl(r, n), tp(e, n), rl(r, n, !0), t.push(Rs("milestone", n));
  } else
    tl(r, t), tp(e, t), rl(r, t, !0);
}
function rp(e, t, r) {
  t !== void 0 && r.push(
    Rs(e, [
      _t(e, "opening"),
      vt(D + t, "attribute"),
      _t(e, "closing")
    ])
  );
}
function wA(e, t) {
  oe?.markerMode === "editable" && (rp("va", e.altnumber, t), rp("vp", e.pubnumber, t));
}
function OA(e, t) {
  e !== void 0 && t.push(
    Rs("cat", [
      _t("cat", "opening"),
      vt(D + e, "attribute"),
      _t("cat", "closing")
    ])
  );
}
function RA(e, t, r) {
  e !== void 0 && r.push(
    Rs("ca", [
      _t("ca", "opening"),
      vt(D + e, "attribute"),
      _t("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Rs("cp", [
      _t("cp", "opening"),
      vt(D + t, "attribute")
    ])
  );
}
function np(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function $A(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function ip(e, t) {
  t.marker === Gn && t.sid !== void 0 && e.push(t.sid), t.marker === wi && t.eid !== void 0 && $A(e, t.eid);
}
function nl(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [ep(o, [...n])] : o, c = e[i];
  ip(n, c);
  const l = nl(
    e.slice(i + 1, s),
    np(t, i + 1),
    c.marker === Gn,
    n
  ), d = ep(l, [...n]), u = e[s];
  ip(n, u);
  const f = nl(
    e.slice(s + 1),
    np(t, s + 1),
    u.marker === Gn,
    n
  );
  return [...a, d, ...f];
}
function Wr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(vt(Fm() ? DE(i) : i));
    else if (!i.type)
      Lt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case jt.getType():
          n.push(gA(i, Wr(i.content)));
          break;
        case Gt.getType():
          n.push(mA(i));
          break;
        case Ct.getType():
          oe?.hasSpacing || n.push(lA), n.push(yA(i)), wA(i, n);
          break;
        case ve.getType():
          n.push(
            bA(i, Wr(i.content, !0), t)
          );
          break;
        case pt.getType():
          n.push(kA(i, Wr(i.content)));
          break;
        case Le.getType():
          n.push(SA(i, Wr(i.content)));
          break;
        case yr.getType():
          fh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Uu?.push(i.sid)), n.push(MA(i)), NA(i, n);
          break;
        case nn.getType():
          n.push(AA(i.marker ?? ""));
          break;
        case kg:
          n.push(xA(i, Wr(i.content)));
          break;
        case Cg:
          n.push(TA(i, Wr(i.content)));
          break;
        case Sg:
          n.push(CA(i, Wr(i.content)));
          break;
        default:
          Lt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(EA(i, Wr(i.content)));
      }
  }), nl(n, r);
}
function il(e) {
  const t = e.findIndex(
    (n) => Bl(n) || Kh(n) || Vl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    nC(n)
  );
  if (t >= 0) {
    const n = il(e.slice(0, t)), i = e[t], s = il(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Og(n)))
    return [zm(e)];
  return e;
}
const br = {
  initialize: uA,
  reset: dA,
  serializeEditorState: fA
};
function Km(e) {
  if (e && !R(e)) {
    if (M(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = Km(t);
        if (r) return r;
      }
  }
}
function qA() {
  const e = O();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((M(t) && !R(t) ? Zn(t) : void 0) && M(t)) {
      const i = Pe(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Di(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Km(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(D) ? D : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return M(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Bm(e)) {
    if (!Zn(t)) continue;
    Di(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(D) && r.setTextContent(n.slice(D.length));
  }
  return !0;
}
function Bm(e) {
  const [t, r] = Al(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!M(a) || R(a) || ae(a, fe) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function jm(e) {
  let t = e;
  for (; F(t) || Ae(t); ) t = t.getParent();
  return t;
}
function Vm(e) {
  const t = jm(e.getParent());
  return ft(t) ? t : void 0;
}
function IA() {
  const e = O();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return Zn(t) ? !!Vm(t) : !1;
}
function Wm(e) {
  const t = Pe(""), r = e.getNode(), n = e.offset;
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
    if (F(o)) Di(t, { renderGlyphs: !0 });
    else if (!Ae(o) || !LA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function LA(e, t) {
  const r = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (r.length === 0)
    return t.insertAfter(e), !0;
  const n = O();
  if (!P(n)) return !1;
  const i = t.insertNewAfter(n, !1);
  return i ? (i.append(...r), t.insertAfter(e), !0) : !1;
}
function Hm(e) {
  const t = e.anchor.getNode();
  if (R(t) && !su(t, e.anchor.offset)) {
    const r = t.getParent();
    if (F(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = O();
      return P(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function Gm() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Hm(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!M(r) || R(r) || !Zn(r)) return !1;
  const n = Vm(r);
  if (!n) return !1;
  const { moving: i } = Wm(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Ae(o); ) o = o.getFirstChild() ?? void 0;
  return F(o) ? ga(o) : s.select(0, 0), !0;
}
const Jm = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Bh(Ke().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = O(), t = Yh(e), r = uu(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = pT(0, o);
        const a = HC(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || hT(c) && Jl(parseInt(n, 10), c);
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
  return Le.isValidMarker(e, t) || !!Jm[e] || pt.isValidMarker(e, t) || ve.isValidMarker(e, t);
}
function DA(e, t) {
  return ve.isNoteContentMarker(e) ? !1 : ve.isValidMarker(e, t);
}
function Ym(e, t, r, n, i, s) {
  const o = Fg(
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
  if (Le.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = Ym(
          e,
          u.reference,
          t,
          r,
          n,
          i
        );
      }, s);
    }, label: void 0, getInsertedNoteKey: () => l };
  }
  const a = jA(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = O();
      P(d) && (ou(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = Zd(u, br, r), h = ja(p);
      if (P(d)) {
        const g = d.anchor.getNode(), y = g.getParent(), k = Zn(g), b = d.anchor.key === d.focus.key;
        if (F(h) && k && b && !mc(h, o))
          zA(
            d,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (F(h) && !b && !mc(h, o) && KA(d))
          BA(d, h, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          VA(
            d,
            () => ja(p)
          );
        else if (L(h) && !h.isInline()) {
          const T = d.insertParagraph();
          if (T) {
            const A = T.getChildren();
            h.append(...A), T.replace(h), ft(h) && di(h) || h.selectStart();
          }
        } else if (F(h) && M(g) && !R(g) && F(g.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        mc(h, o)) {
          const T = g.getParent();
          if (F(T)) {
            const A = d.anchor.offset;
            if (A === 0) g.insertBefore(h);
            else if (A >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [w] = g.splitText(A);
              w.insertAfter(h);
            }
            h.getChildren().forEach((w) => {
              R(w) && w.setNested(!0);
            });
            const _ = h.getChildren().find((w) => M(w) && !R(w));
            _ && M(_) ? _.select(
              _.getTextContentSize(),
              _.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (M(g) && !R(g) && d.isCollapsed() && (K(y) || F(y) && K(y.getParent()))) {
          const T = F(y) ? y : void 0, A = T ? UA(g, d.anchor.offset) : [];
          let w = (T ?? g).insertAfter(h);
          if (Tr(h)) {
            const $ = {
              ...r || Ta(),
              markerMode: "hidden"
            }, z = Zd(
              u,
              br,
              $
            ), S = ja(z);
            w = w.insertAfter(S);
          }
          if (A.length > 0 && T) {
            const $ = Ho(T).append(...A);
            w.insertAfter($), T.isEmpty() && T.remove();
          } else M(w.getNextSibling()) || w.insertAfter(Pe(D));
          L(w) && w.selectEnd();
        } else if (d.insertNodes([h]), tP(h), f) {
          const T = Wp();
          T.add(h.getKey()), Nr(T);
        } else if (F(h)) {
          const T = h.getChildren().find((A) => M(A) && !R(A));
          T && M(T) ? T.select(
            T.getTextContentSize(),
            T.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const T = h.getNextSibling();
          T ? T.selectStart() : h.selectStart();
        }
      } else
        d?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function UA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function mc(e, t) {
  return ((t ?? $o).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function FA(e, t) {
  t && e.getChildren().forEach((i) => {
    R(i) && i.setNested(!0);
  }), e.getChildren().some((i) => R(i) && i.getMarkerSyntax() === "closing") || e.append(kt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function zA(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && F(r)) {
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
    i.insertBefore(t), M(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => M(a) && !R(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => M(o) && !R(o));
  M(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function KA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (R(n) || F(n)) continue;
    if (!M(n) || n.getType() !== et.getType() || ae(n, fe) === "attribute") return !1;
    const i = fC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Zn(n) && (r = !0);
  }
  return r;
}
function BA(e, t, r) {
  const n = Bm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Zn(a)) return;
    Di(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(D) && c.setTextContent(l.slice(D.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(D) || i.setTextContent(D + i.getTextContent());
  const s = t.getChildren().find((a) => M(a) && !R(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function jA(e, t) {
  let r = Jm[e];
  return r || (pt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: pt.getType(), marker: e, content: [] }] })
  } : ve.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ve.getType(), marker: e };
      return (ve.isValidFootnoteMarker(e) || ve.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function VA(e, t) {
  const r = e.getNodes(), [n, i] = ji(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = Xm(
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
    s || (s = t(), c.insertBefore(s), l = !0, F(s) && s.getChildren().some((u) => R(u) && u.getMarkerSyntax() === "opening") && FA(s, F(s.getParent()))), HA(c, s, l);
  }), (M(s) || L(s)) && s.selectEnd();
}
function ji(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function zu(e) {
  return Ae(e) || K(e) || K(e.getParent());
}
function Xm(e, t, r, n, i) {
  if (!zu(e)) {
    if (M(e))
      return WA(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function WA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function HA(e, t, r) {
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
    al(e, t), r && F(t) && t.getChildren().some((s) => R(s)) && M(e) && !R(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function al(e, t) {
  let r = e.getTextContent();
  if (M(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    cu(n), M(n) || t.insertBefore(Pe(" "));
  }
  return r;
}
function Qm(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = ri(d, t);
    if (!f) return !1;
    const p = M(d) ? d.getTextContentSize() : 0;
    if (sp(f, r), M(d) && d.isAttached()) {
      const h = d.getTextContentSize(), g = Math.max(p - h, 0), y = Math.max(0, Math.min(u - g, h)), k = O();
      P(k) && k.setTextNodeRange(d, y, d, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ji(e);
  if (!Bu(n, t, s, o)) return !1;
  const a = Ku(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = ri(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = ry(u, a);
    f && (sp(f, r), l = !0);
  }), ny(a, i), l;
}
function sp(e, t) {
  e.getChildren().forEach((n) => {
    St(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === or) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    M(n) && i.startsWith(D) && n.setTextContent(i.slice(D.length));
  }), Mc(e);
}
function Ku(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Xm(
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
  for (; r && !ft(r); ) {
    if (K(r)) return;
    !n && F(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Zm(e) {
  const t = $e(
    e,
    (r) => K(r) || ft(r)
  );
  return K(t);
}
function ey(e) {
  return e.filter(
    (t) => !zu(t) && (M(t) || L(t) && t.isInline())
  );
}
function GA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!M(i) || zu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function JA(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !ty(n, r)
  );
}
function Bu(e, t, r, n, i) {
  const s = ey(e), o = GA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ri(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !JA(l, s, o);
  });
}
function ty(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || St(r));
}
function ry(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (L(d) && t.some((u) => d.isParentOf(u))) {
      if (!ty(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && St(n[s - 1]) && (s -= 1), o < n.length - 1 && St(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Ho(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Ho(e).append(...c)), e;
}
function Ho(e) {
  return gk(e);
}
function ny(e, t) {
  const r = O(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function YA(e, t, r) {
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
    const d = ri(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = ry(d, o);
    u && (Dd(u, t), c = !0);
  }), c;
}
function XA(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ji(e);
  if (!!!i?.some(
    (y) => Bu(s, y, o, a)
  ) && !QA(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = O();
    P(k) && Qm(k, y, n) && (l = !0);
  });
  const d = O();
  if (!P(d)) return l;
  const u = d.isBackward(), [f, p] = ji(d), h = Ku(
    d.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (y) => !Zm(y) && !ri(y, t)
  );
  return g.length > 0 && (ZA(g).forEach((y) => eP(y, t)), l = !0), ny(h, u), l;
}
function QA(e, t) {
  return ey(e).some(
    (r) => !Zm(r) && !ri(r, t)
  );
}
function ZA(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function eP(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => F(a) && a.getMarker() === t
  ), s = i ? Ho(i) : Yr(t);
  e[0].insertBefore(s), s.append(...e), i === r || al(e[0], s);
}
function tP(e) {
  ke(e) && (cu(e.getPreviousSibling()), $g(e.getNextSibling()));
}
const iy = {
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
}, op = "psc-active-text", go = "psc-empty-text";
function rP({ viewOptions: e }) {
  const [t] = ue(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return B(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(op), r.current = o, o && t.getElementByKey(o)?.classList.add(op);
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
          if (!ke(l)) return !1;
          const d = l.getParent();
          if (!L(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        qt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = yc(), f = nP(), p = [], h = [];
          return Ke().getChildren().forEach((g) => {
            if (!L(g)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = sP(g);
            p.push(...y), h.push(...k);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(go) : t.getElementByKey(u)?.classList.add(go);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(go));
      }),
      t.registerCommand(
        Rl,
        () => (i(void 0), !1),
        qt
      ),
      t.registerCommand(
        mk,
        () => {
          const o = t.getEditorState().read(yc);
          return o !== r.current && i(o), !1;
        },
        qt
      )
    ];
    return i(t.getEditorState().read(yc)), Ie(...s);
  }, [t, n]), null;
}
function yc() {
  return iP(O() ?? void 0)?.getKey();
}
function nP() {
  const e = O();
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
    ke(s[a]) && (o = s[a].getKey());
  return o;
}
function iP(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function sP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ke(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ke(c)) break;
      if (!(Bt(c) || R(c)) && c.getTextContent().replaceAll(vo, "").trim() !== "") {
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
function sy(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !Bp(e, n, i);
}
function oy(e, t) {
  return e.length <= t ? e : e.slice(0, ju(e, t));
}
function ju(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of _k(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const oP = 16;
function aP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (b) => t ? Vu(b, t).length : b.getTextContent().length;
  r ??= n;
  const i = O();
  if (!P(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Go(s), l = Go(o), d = i.getNodes(), u = new Map(d.map((b) => [b.getKey(), uP(b)])), f = d.length > 0 ? u.get(d[0].getKey()) : void 0, p = f && cP(s, f) ? f : void 0, h = (b) => {
    const T = b > 0 ? lP(d, u, p, c, l, b, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), T ? i.focus.set(T.node.getKey(), T.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!T;
  };
  let g = Math.min(e, n(i));
  if (h(g) && r(i) <= e) return !0;
  let y = 0, k = 0;
  g -= 1;
  for (let b = 0; b < oP && y <= g; b++) {
    const T = Math.floor((y + g) / 2);
    h(T) && r(i) <= e ? (k = T, y = T + 1) : g = T - 1;
  }
  return h(k), !0;
}
function ll(e) {
  return e.isToken() || Xs(e) || Fe(e.getParent());
}
function cP(e, t) {
  const r = L(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && fr(r.getKey(), 0, "text").isBefore(e);
}
function lP(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, d, u;
  const f = /* @__PURE__ */ new Map(), p = (g) => {
    const y = t.get(g.getKey());
    return y && r?.is(y) ? void 0 : y;
  }, h = (g) => {
    let y = u ? u.endBefore : g;
    for (; ; ) {
      const k = dP(y, e, n);
      if (!k || !y || k.node.is(y.node)) return k;
      const b = p(k.node);
      if (!b || b.is(p(y.node))) return k;
      y = f.get(b.getKey());
    }
  };
  for (let g = 0; g <= a; g++) {
    const y = e[g], k = p(y);
    if (u && !u.node.is(k) && (d && u.node.isParentOf(d.node) && (d = u.endBefore), u = void 0), k && !u && (u = { node: k, endBefore: d }, f.set(k.getKey(), d)), !o?.(y)) {
      if (L(y) && !y.isInline()) {
        if (!l) {
          if (c + 1 > s) return h(d);
          c += 1;
        }
        l = !y.isEmpty();
        continue;
      }
      if (l = !1, M(y)) {
        const b = g === 0 ? n : 0, T = g === a ? i : y.getTextContentSize(), A = T - b, _ = ll(y);
        if (_ && c + A > s) return h(d);
        if (!_ && c + A >= s) {
          const w = ju(y.getTextContent(), b + (s - c));
          return h({ node: y, offset: Math.max(b, w) });
        }
        c += A, d = { node: y, offset: T };
      } else if (si(y) || ii(y)) {
        const b = y.getTextContentSize();
        if (c + b > s) return h(d);
        c += b;
      }
    }
  }
  return h(d);
}
function uP(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (K(r) || Pu(r)) && (t = r);
  return t;
}
function dP(e, t, r) {
  if (!e) return e;
  const n = $e(e.node, (y) => L(y) && !y.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((y) => y.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let y = o; y <= a; y++)
    l.push(c.length), c += i[y].getTextContent();
  const d = l[s - o], u = d + e.offset, f = ju(c, u);
  if (f === u) return e;
  const p = (y) => t[0]?.is(y) ?? !1;
  if (ll(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= d) {
    const y = f - d;
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
  return r.forEach((l, d) => {
    if (!t(l)) {
      if (L(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, M(l)) {
        const u = l.getTextContent();
        o ? a += u : a += u.slice(
          d === 0 ? Go(i) : 0,
          d === n ? Go(s) : u.length
        );
      } else (si(l) || ii(l)) && (d !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function ul(e) {
  const t = e.getParent();
  return !!t && $e(t, (r) => K(r) && !!r.getIsCollapsed()) !== null;
}
function ay(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    xt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), L(i)) for (const { node: s } of oi(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function fP(e) {
  return e.getNodes().some(
    (t) => si(t) || K(t) || ke(t) || tt(t) || Pu(t)
  );
}
function Go(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Cr = String.raw`\w-`, cy = "a-z0-9", pP = `[a-z][${cy}]*`, hP = new RegExp(
  String.raw`^\\(\+?[${Cr}]+)[ \u00A0]$`
), ly = new RegExp(String.raw`^\\(\+?[${Cr}]+)$`), gP = new RegExp(String.raw`^\\\+?[${Cr}]*\*$`), mP = new RegExp(
  String.raw`^\\(\+?[${Cr}]+)(?:[ \u00A0]|$)`
), yP = new RegExp(
  String.raw`^\\(\+?)([${Cr}]+)`
), bP = new RegExp(
  String.raw`\\\+?[${Cr}]+(?:\\?\*|[ \u00A0])`
), kP = new RegExp(
  String.raw`\\\+?[${Cr}]*$`
), xP = new RegExp(
  String.raw`^\\(${pP})( |$)`
), TP = new RegExp(
  String.raw`\\[${cy}+*]*$`,
  "i"
);
function uy(e) {
  const t = e.getParent();
  if (!K(t) || t.getIsCollapsed() !== !1 || !ah(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!R(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const Jo = "usfm:", dy = "usfmopen", fy = "usfmclosed";
function CP(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const _P = new RegExp(
  [Jo, dy, fy].map(CP).join("|")
), SP = "\uFEFF", vP = /^usfm_(.+)$/;
function MP(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function EP(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function AP(e) {
  return e.startsWith(Jo) ? EP(e.slice(Jo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function py(e) {
  for (const t of e.classList) {
    const r = vP.exec(t);
    if (r) return r[1];
  }
}
function PP(e) {
  const t = py(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function NP(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(Jo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(dy) && !n.contains(fy)) && py(r) !== void 0)
      return !0;
  }
  return !1;
}
function hy(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(AP(e.nodeValue ?? ""));
    return;
  }
  if (!MP(e)) return;
  const { classList: n } = e, i = (d) => e.childNodes.forEach((u) => hy(u, d, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? PP(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function wP(e) {
  if (!_P.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !NP(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => hy(n, !1, r)), r.join("").replaceAll(SP, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function OP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ae(e, fe);
  if (r === "attribute" || r === Ur || uy(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Fe(o) || _e(o)) return;
  const n = t.startsWith(D) && F(e.getParent()), i = n ? t.slice(1) : t, s = (n ? D : "") + i.replace(/ (?=[ \u00A0])/g, D).replace(new RegExp("(?<=\\u00A0) ", "g"), D);
  s !== t && e.setTextContent(s);
}
function RP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function $P(e, t) {
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
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? wP(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(RP(s)) : ""),
    isInternal: $P(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const ap = String.raw`\\(?:\+?[${Cr}]+\*?|\*)`, qP = new RegExp(
  String.raw`(?<=${ap})\u00A0|\u00A0(?=${ap})`,
  "g"
);
function Wu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(qP, " ").replaceAll(D, "~");
}
const gy = new RegExp(
  String.raw`\\c(?![${Cr}])[ \u00A0]*[^\s\\]*`,
  "g"
), my = new RegExp(String.raw`\\id(?![${Cr}])[^\n\\]*`, "g"), IP = new RegExp(
  String.raw`^(?:${gy.source}|${my.source})`
);
function Hu(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(gy, "").replace(my, "");
    return IP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function fl(e) {
  if (M(e) && ae(e, fe) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (je(t)) return !0;
  return !1;
}
function LP(e) {
  return fl(e.anchor.getNode()) || fl(e.focus.getNode());
}
function DP(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && fl(t.getNode());
}
function UP(e, t) {
  const n = DP(e) ? t : Wu(Hu(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function FP(e, t = !1, r = () => {
}) {
  const n = dl(e, gn()._config.namespace);
  if (!n) return !1;
  const i = O(), s = P(i) && LP(i);
  if (!s && n.isInternal || t && P(i) && Fn(i))
    return !1;
  const { text: o } = n;
  if (!o || !P(i)) return !1;
  if (e?.preventDefault(), s)
    return UP(i, o), !0;
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
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(Hn, void 0), d === "") return;
    const f = O();
    P(f) && f.insertText(d);
  }), !0;
}
function zP(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return K(t) ? !xt(e.getPreviousSibling()) : !1;
}
function KP(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const r = e.getParent();
  if (!K(r) || !xt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function BP(e) {
  const t = e.getParent();
  return (K(t) ? t.getCaller() : void 0) || xs;
}
function jP(e) {
  const t = e.getParent();
  return !t || Tn(t) === void 0;
}
function Gu(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Al(e);
  let l = "", d = !0;
  for (const u of t) {
    if (L(u) && !u.isInline()) {
      !d && jP(u) && (l += `
`), d = !u.isEmpty();
      continue;
    }
    if (d = !1, xt(u))
      (u !== n || !e.isCollapsed()) && (l += (u === r ? "" : " ") + BP(u));
    else if (M(u)) {
      let f = u.getTextContent();
      u === r ? u === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : u === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += zP(u) ? "" : f.replaceAll(D, " ") + KP(u, u === n);
    } else (si(u) || ii(u)) && (u !== n || !e.isCollapsed()) && (l += u.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function yy(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function VP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => Me(r) || Fe(r)
    )
  );
}
function WP(e) {
  const t = O();
  if (!P(t) || t.isCollapsed()) return;
  const r = Gu(t), n = {
    "text/plain": r,
    "text/html": yy(r)
  };
  if (Zs() || VP(t)) return n;
  const i = vk(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function cp(e, t, r, n) {
  const i = O();
  if (!P(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !fm();
  const s = WP(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], by(e, t, i, s, r, n)) : !1;
}
function by(e, t, r, n, i, s) {
  const o = cl(s);
  if (o !== void 0 && sy(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), pl(e, t, { "text/plain": oy(a, o) })) : pl(
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
  const n = HP(e, t);
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
function HP(e, t) {
  const r = e.getEditorState();
  if (bc.has(r)) {
    const i = bc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = GP(r, t);
  return bc.set(r, n), n;
}
function GP(e, t) {
  const r = Mu(_u);
  if (!r) return;
  const n = Co.deserializeEditorState(e, t);
  if (!n) return;
  const i = yk({
    namespace: "markers-view-copy",
    nodes: [dt, ...xu],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    br.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function JP({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = ue();
  return B(() => {
    const n = (i, s) => {
      const o = O();
      if (!P(o) || o.isCollapsed()) return !1;
      const a = hl(r, e);
      return a === void 0 ? !1 : by(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": yy(a) },
        s,
        t
      );
    };
    return Ie(
      r.registerCommand(Wn, (i) => n(i, !1), Oe),
      r.registerCommand(sr, (i) => n(i, !0), Oe)
    );
  }, [r, e, t]), null;
}
const lp = /* @__PURE__ */ new WeakMap();
function YP({
  limit: e,
  viewOptions: t
}) {
  const [r] = ue(), n = Z(cl(e)), i = Z(t), s = Z(!1), o = Z(void 0);
  return B(() => {
    n.current = cl(e), i.current = t, o.current?.();
  }, [e, t]), B(() => {
    let a, c;
    const l = (k) => {
      const b = n.current;
      if (b === void 0) return;
      const T = lp.get(k);
      if (k.defaultPrevented && T === void 0) return;
      const A = r.getRootElement();
      if (!A) return;
      const _ = A.ownerDocument.getSelection();
      if (!_ || !ZP(_, A)) return;
      k.preventDefault();
      const w = oy(
        T ?? _.toString().replaceAll(D, " "),
        b
      );
      lp.set(k, w);
      const $ = k.clipboardData;
      if ($) {
        if (!w) {
          T !== void 0 && $.clearData();
          return;
        }
        $.setData("text/plain", w);
      }
    }, d = (k) => {
      n.current !== void 0 && kk(k, "a", { ctrlKey: !yn, metaKey: yn }) && (t1(c?.activeElement, r.getRootElement()) || k.preventDefault());
    }, u = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", d, !0), c = void 0;
    }, f = () => {
      const k = n.current === void 0 ? void 0 : a;
      k !== c && (u(), c = k, c?.addEventListener("copy", l), c?.addEventListener("keydown", d, !0));
    };
    o.current = f;
    const p = (k) => (k?.preventDefault(), !0), h = (k) => {
      const b = n.current;
      if (b === void 0 || (s.current = !1, sy(r, k))) return !1;
      if (b <= 0) return p(k);
      const T = O();
      if (ia(T))
        return T.getTextContent().length + ay(T.getNodes()) <= b ? !1 : p(k);
      if (!P(T) || T.isCollapsed()) return !1;
      const A = XP(r, i.current);
      return A.$size(T) <= b ? !1 : (aP(b, A.options), T.isCollapsed() ? p(k) : (r.isEditable() || Hp(() => QP(r)), s.current = !0, !1));
    }, g = (k, b) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const T = O();
      if (!P(T) || T.isCollapsed()) return !1;
      const A = b && r.isEditable() && !fP(T);
      return pl(
        k && typeof k == "object" && "clipboardData" in k ? k : null,
        r,
        { "text/plain": Vu(T, ul) },
        A ? () => T.removeText() : void 0
      );
    }, y = Ie(
      r.registerCommand(Wn, h, pe),
      r.registerCommand(sr, h, pe),
      r.registerCommand(
        Wn,
        (k) => g(k, !1),
        wr
      ),
      r.registerCommand(
        sr,
        (k) => g(k, !0),
        wr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        bk,
        (k) => n.current === void 0 ? !1 : (k?.preventDefault(), !0),
        pe
      ),
      r.registerRootListener((k) => {
        a = k?.ownerDocument ?? void 0, f();
      })
    );
    return () => {
      y(), o.current = void 0, u();
    };
  }, [r]), null;
}
function XP(e, t) {
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
    $size: (n) => n.getTextContent().length + ay(n.getNodes()),
    options: { $isHidden: ul }
  };
}
function QP(e) {
  e.getEditorState().read(() => {
    const t = O(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!P(t) || !r) return;
    const n = up(e, t.anchor), i = up(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function up(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = xk(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = L(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function ZP(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const e1 = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function t1(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? e1.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const r1 = /^\+/;
function Ju(e, t) {
  const r = t.replace(r1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function ky(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function xy(e, t) {
  return ky(e, t) !== void 0;
}
function gl(e, t) {
  const r = ky(e, t);
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
function n1(e, t, r, n, i) {
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
    if (F(s)) {
      const o = s.getMarker();
      i || n1(s, o, t, r, n), Ri(s, t, r, n, i || o === "xq");
    } else if (ke(s)) {
      if (i) continue;
      const o = Ju(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? Ri(s, s.getMarker(), r, n, i) : _e(s) || L(s) && Ri(s, t, r, n, i);
}
function i1(e, t) {
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
  for (const o of Ke().getChildren())
    _e(o) || (Me(o) ? (i(o, o.getMarker()), s(o) && Ri(o, void 0, e, r, !1)) : tt(o) ? i(o, o.getMarker()) : de(o) ? (i(o, o.getMarker()), s(o) && Ri(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && Ri(o, "p", e, r, !1));
  return r;
}
function s1(e) {
  return !!e?.includes("(basic)");
}
function o1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Ty(e, t) {
  return !e.startsWith("zpa") && e !== "c" && sl(e, t);
}
function Yu(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Cy(e, t) {
  const r = [];
  for (const n of t) {
    const i = Yu(e, n);
    i && gl(r, i);
  }
  return r;
}
function _o(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: o1(e.description),
    isBasic: s1(e.description)
  };
}
function a1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function ml(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : a1(e.marker, t.marker);
}
function yl(e, t, r) {
  if (t.noteMarker) return [];
  const n = Cy(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Ty(i.marker, r)
  ).filter((i) => {
    const s = Yu(e, i.marker);
    return s !== void 0 && xy(n, s);
  }).map((i) => _o(i, "paragraph")).sort(ml);
}
function c1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Ty(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => _o(c, "character")).sort(ml);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => _o(c, "character")),
    ...a.map((c) => _o(c, "note"))
  ].sort(ml);
}
function l1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function u1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function d1(e, t, r) {
  return [
    ...l1(e, t.openCharMarkers),
    ...c1(e, t, r)
  ].sort(u1);
}
function f1(e, t, r) {
  if (t.source === "paragraph") return yl(e, t, r);
  const n = d1(e, t, r);
  return n.length > 0 ? n : yl(e, t, r);
}
function p1(e, t, r) {
  const n = yl(e, t, r), i = Cy(e, t.previousParaMarkers), s = Yu(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && xy(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const mt = "￼";
function _y(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== mt ? e.slice(1) : e;
}
function dp(e) {
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
  for (; dp(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Wt(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && dp(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function vy(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function My(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([d]) => d !== "closed")
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((d) => d.type === Le.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function Ey(e, t, r, n) {
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
  const c = Gh(o.children[0]) ? o.children.slice(1) : o.children;
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
  kP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += mt;
}
function rr(e) {
  return e.replaceAll(D, " ");
}
function h1(e, t, r = !1) {
  if (Qs(t)) return rr(e);
  if (e === D) return " ";
  const n = r && e.startsWith(D), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(D, "~");
}
function bs(e) {
  const t = e.getTextContent();
  return zr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Xu(e, t) {
  const r = e[t];
  if (!it(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = fa(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!R(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Ay(e) {
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
  return it(e) ? !va(e.getMarker(), t) : K(e) || _e(e) ? !0 : Be(e) ? Zu(e) : F(e) ? Py(e, t) : !1;
}
function Py(e, t) {
  if (ST(e)) return !0;
  const r = e.getMarker();
  return dx(r) || t(r) !== void 0 || g1(e) && !m1(e) ? !1 : !y1(e);
}
function g1(e) {
  const t = e.getParent();
  return t !== null && Vt(t) !== void 0;
}
function m1(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function y1(e) {
  const t = e.getChildren().filter((i) => R(i) && i.getMarker() === e.getMarker()).filter(R);
  if (t.some((i) => !tn(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const er = "", tr = "";
function fp(e) {
  return e.flatMap((t) => je(t) ? t.getChildren() : [t]);
}
function ps(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (it(s)) {
      const o = Xu(e, i);
      va(s.getMarker(), r) && Ay(o) ? (t.push(
        er,
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
      ), ps(fp(o), t, r), t.push(tr)) : t.push(mt), i += o.length;
    } else if (Be(s)) {
      const o = Qu(e, i);
      Zu(s) ? t.push(mt) : (t.push(
        er,
        "verse",
        rr(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ps(fp(o), t, r), t.push(tr)), i += o.length;
    } else R(s) ? t.push(er, "marker", rr(s.getTextContent()), tr) : sn(s) ? t.push(er, "unmatched", rr(s.getTextContent()), tr) : ed(s, r) ? t.push(mt) : ii(s) ? t.push(" ") : M(s) ? t.push(
      rr(
        n ? _y(bs(s)) : bs(s)
      )
    ) : F(s) ? (t.push(er, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ps(s.getChildren(), t, r, !0), t.push(tr)) : L(s) ? (t.push(er, s.getType()), ps(s.getChildren(), t, r), t.push(tr)) : t.push(mt);
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
function Ny(e, t, r) {
  return t === "closing" ? ct(e, r) : t === "selfClosing" ? ct("") : Ve(e, r);
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
      const l = s, d = kc(e, i + 1);
      d && va(l.marker ?? "", r) ? (t.push(
        er,
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
      ), hs(d, t, r), t.push(tr), i += 1) : t.push(mt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(mt);
        continue;
      }
      t.push(
        er,
        "verse",
        rr(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = kc(e, i + 1 + d);
      for (; u; )
        hs(u, t, r), d++, u = kc(e, i + 1 + d);
      t.push(tr), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        er,
        "marker",
        rr(
          Ny(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        tr
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(er, "char", JSON.stringify(l.unknownAttributes ?? null)), hs(Ir(s) ?? [], t, r, !0), t.push(tr);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(mt);
      continue;
    }
    if (o === "unmatched") {
      t.push(er, "unmatched", rr(Vi(s) ?? "")), t.push(tr);
      continue;
    }
    const a = Vi(s);
    if (a !== void 0) {
      t.push(rr(n ? _y(a) : a));
      continue;
    }
    const c = Ir(s);
    c ? (t.push(er, o), hs(c, t, r), t.push(tr)) : t.push(mt);
  }
}
function _n(e) {
  let t = 0;
  for (const r of e) {
    const n = Ir(r);
    if (n) {
      t += _n(n);
      continue;
    }
    const i = Vi(r);
    if (i !== void 0)
      for (const s of i) s === mt && t++;
  }
  return t;
}
function $s(e, t, r, n, i) {
  Sn(e.getChildren(), t, r, n, i);
}
function Sn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (R(a))
      mo(t, a, rr(a.getTextContent()));
    else if (it(a)) {
      s();
      const c = Xu(e, o);
      va(a.getMarker(), r) && Ay(c) ? Sn(c, t, r, n) : ls(t, [a, ...c]), o += c.length;
    } else if (K(a) || _e(a))
      s(), ls(t, [a]);
    else if (Be(a)) {
      s();
      const c = Qu(e, o);
      Zu(a) ? ls(t, [a, ...c]) : (mo(t, a, rr(bs(a))), Sn(c, t, r, n)), o += c.length;
    } else if (F(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && Py(a, r) ? ls(t, [a]) : $s(a, t, r, n, { pending: !0 });
    else if (ii(a))
      s(), mo(t, a, " ");
    else if (M(a)) {
      const c = zr(a) || ae(a, fe) === "attribute", l = s() && !c;
      mo(
        t,
        a,
        c ? rr(bs(a)) : h1(bs(a), n, l)
      );
    } else L(a) ? $s(a, t, r, n, i) : (s(), ls(t, [a]));
  }
}
function wy(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (_e(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return $s(e, i, t, r), i;
}
function Ma(e, t, r, n) {
  for (const i of t) {
    const s = wy(i, r, n);
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
        const a = s.getTextContent().indexOf(mt);
        if (a < 0) break;
        let c = s, l;
        a > 0 && ([, c] = s.splitText(a)), c.getTextContent().length > 1 && ([c, l] = c.splitText(1));
        const d = t[r++];
        if (d && d.length > 0) {
          let u = c;
          for (const f of d)
            u.insertAfter(f), u = f;
        }
        c.remove(), s = l;
      }
    } else L(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function qs(e, t = []) {
  for (const r of e)
    Be(r) ? t.push(r) : L(r) && qs(r.getChildren(), t);
  return t;
}
function Aa(e) {
  let t = 0;
  const r = (n) => {
    if (M(n))
      for (const i of n.getTextContent()) i === mt && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function on(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === mt && t++;
    else r.content && (t += on(r.content));
  return t;
}
function b1(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), L(s) && $s(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const Is = /\s/;
function Oy(e) {
  return e.filter(Pa).length;
}
function Pa(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return M(t) && !R(t) && ae(t, fe) === "attribute";
}
function k1(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return R(t) || Pa(e);
}
function pp(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Pa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      Is.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function x1(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !L(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = se(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function Na(e, t, r, n) {
  const { key: i, offset: s } = x1(
    e,
    t,
    r,
    n
  ), o = pp(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !k1(a) ? pp(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: Oy(t.spans) };
}
function xc(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return R(t) && t.getMarkerSyntax() !== "opening";
}
function T1(e) {
  const t = se(e.key);
  if (!R(t)) return !1;
  const r = t.getParent();
  return F(r) ? (r.selectNext(0, 0), !0) : !1;
}
function C1(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Be(t) ? Qu(r, n) : it(t) ? Xu(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Ry(e, t, r) {
  const { text: n, spans: i } = e, s = Oy(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && !xc(u);
    if (!(o && Pa(u))) {
      if (d) {
        if (!p) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let h = 0; h < f; h++) {
        const g = n[u.start + h];
        if (c === 0 && (l === 0 || !Is.test(g))) {
          if (p) {
            a = { key: u.key, offset: h };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? Is.test(g) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (p) {
          a = { key: u.key, offset: f };
          break;
        }
        d = !0;
      }
    }
  }
  if (!a) {
    const u = i[i.length - 1];
    if (u && xc(u) && T1(u) || u?.isSentinel && C1(u)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !xc(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const u = se(a.key);
    if (u && M(u)) {
      u.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function $y(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    Ry(
      b1(e, n, i, s),
      t,
      e
    );
  }
}
function qy(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    _1(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  Sn(e, o, n, i), Ry({ text: o.text, spans: o.spans }, t, e);
}
function _1(e, t) {
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
function Iy(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Ma(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = O();
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
  const d = br.serializeEditorState(
    { type: mr, version: gr, content: l },
    r
  );
  if (Lr(d.root.children, n) === qr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((g) => Kn(g));
  if (Aa(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = qs(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  u.forEach((g) => p.insertBefore(g)), Ea(u, s.sentinels), e.forEach((g) => g.remove());
  const h = qs(u);
  for (let g = 0; g < f.length && g < h.length; g++)
    h[g].getNumber() === f[g].number && h[g].setSid(f[g].sid);
  return $y(
    u,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((g) => g.getKey()))
  ), !0;
}
function Ly(e) {
  if (e.getIsCollapsed() !== !1 || !Le.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!R(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(xt(n) || M(n) && n.getTextContent() === Wt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!R(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function Dy(e, t, r) {
  const n = Ly(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Sn(n, i, t, r), { out: i, contentNodes: n };
}
function Uy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(mt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function S1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Dy(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = O();
  if (P(d)) {
    for (let w = d.anchor.getNode(); w; w = w.getParent())
      if (e.is(w)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Na(
      [e],
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const u = Dr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (on(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = u;
  if (u.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], h = Uy(p), g = vy(e, p);
  if (g)
    return v1(
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
  if (_n(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== h;
  if (k && e.setCategory(h), Lr(y.children, n) === qr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const b = y.children.map((w) => Kn(w));
  if (Aa(b) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const T = a[0];
  if (T)
    b.forEach((w) => T.insertBefore(w));
  else {
    const w = e.getChildren().find(($) => R($) && $.getMarkerSyntax() === "closing");
    b.forEach(($) => w ? w.insertBefore($) : e.append($));
  }
  Ea(b, o.sentinels);
  const A = new Set(o.sentinels.flat().map((w) => w.getKey()));
  a.forEach((w) => {
    A.has(w.getKey()) || w.remove();
  });
  const _ = Ly(e) ?? b;
  return qy(
    _,
    c,
    l,
    n,
    r,
    A
  ), !0;
}
function v1(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = My(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || _n(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const d = l.map((h) => Kn(h)), [u] = d;
  if (!K(u) || Aa(d) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const h of d)
    f.insertAfter(h), f = h;
  Ea(d, i);
  const p = e.getChildren();
  return e.append(...u.getChildren()), p.forEach((h) => h.remove()), e.setCaller(u.getCaller()).setCategory(u.getCategory()).setUnknownAttributes(u.getUnknownAttributes()).setIsCollapsed(u.getIsCollapsed()), u.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Vc(e, a) : Kg(e, { isContentChange: !0 })), !0;
}
function Fy(e) {
  const t = e.getChildren();
  return Gl(t[0]) ? t.slice(1) : t;
}
function rd(e, t, r) {
  const n = Fy(e), i = { text: "", spans: [], sentinels: [] };
  return Sn(n, i, t, r), { out: i, contentNodes: n };
}
const M1 = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${nr}(?=[\\s\\u200B\\\\|]|$)`
);
function zy(e, t) {
  const r = Dr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === nr && !M1.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function Ky(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = rd(e, i, n);
  if (!Ma(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, d = !1;
  const u = O();
  if (P(u)) {
    for (let $ = u.anchor.getNode(); $; $ = $.getParent())
      if (c.some((z) => z.is($))) {
        d = !0;
        break;
      }
    u.isCollapsed() && (l = Na(
      c,
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const f = zy(o.text, i);
  if (on(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = Ey(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const h = [...p.children, ...p.followingBlocks];
  if (_n(h) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && Lr(p.followingBlocks, i) === qr(r, i) && Lr(p.children, i) === qr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map(($) => Kn($)), y = p.followingBlocks.map(($) => Kn($)), k = [...g, ...y];
  if (Aa(k) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const b = qs([...a, ...r]).map(($) => ({
    number: $.getNumber(),
    sid: $.getSid()
  })), T = a[0];
  T ? g.forEach(($) => T.insertBefore($)) : g.forEach(($) => e.append($)), y.reduce(($, z) => $.insertAfter(z), e), Ea(k, o.sentinels);
  const A = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    A.has($.getKey()) || $.remove();
  }), r.forEach(($) => $.remove());
  const _ = [...Fy(e), ...y], w = qs(_);
  for (let $ = 0; $ < b.length && $ < w.length; $++)
    w[$].getNumber() === b[$].number && w[$].setSid(b[$].sid);
  return qy(
    _,
    l,
    d,
    i,
    n,
    A
  ), !0;
}
const By = /* @__PURE__ */ new Set(["ca", "cp"]), nd = "cp";
function jy(e) {
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
    if (F(r) && By.has(r.getMarker()) || jy(r)) {
      t.push(r);
      continue;
    }
    de(r) && r.getMarker() === nd && t.push(r);
    break;
  }
  return t;
}
function E1(e) {
  const t = (n) => F(n) && By.has(n.getMarker()) || jy(n);
  if (t(e) || de(e) && e.getMarker() === nd)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Fe(n)) return n;
      if (!t(n)) return;
    }
}
function Vy(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = wa(e);
  if (n.some((s) => de(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Sn(e.getChildren(), i, t, r), Sn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function A1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...wa(e)], o = Vy(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = O();
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
  const d = Dr(o.text, { getMarker: n }), [u] = d;
  if (d.length === 0 || typeof u != "object" || u.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (on(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (u.sid = e.getSid());
  const f = br.serializeEditorState(
    { type: mr, version: gr, content: d },
    r
  );
  if (Lr(f.root.children, n) === qr(s, n)) {
    let h = !1;
    return e.getNumber() !== (u.number ?? "") && (e.setNumber(u.number ?? ""), h = !0), e.getAltnumber() !== u.altnumber && (e.setAltnumber(u.altnumber), h = !0), e.getPubnumber() !== u.pubnumber && (e.setPubnumber(u.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => Kn(h));
  return Fe(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), $y(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Ls(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (_e(n)) return;
    !t && (K(n) || de(n) || Fe(n) || Me(n)) && (t = n), wl(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? E1(r) : void 0) ?? t;
}
function dr(e, t) {
  const r = Ls(e);
  return r ? K(r) ? S1(r, t) : Fe(r) ? A1(r, t) : Me(r) ? Ky(r, t) : Iy([r], t) : !1;
}
const P1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function hp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !P1.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function So(e, t) {
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
          t.push(`\\${n}`), hp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), So(r.content, t), hp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), So(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), So(r.content, t);
      }
    }
}
function gp(e, t, r) {
  const n = Ls(e);
  if (!Ne(n)) return !1;
  const i = O();
  if (!P(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Me(n) ? rd(n, t, r).out : wy(n, t, r);
  if (!o) return !1;
  const a = Dr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    Is.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  So(a, l);
  for (const d of l.join("").replaceAll(D, "~")) {
    if (Is.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function id(e, t) {
  return Wy(e, t, x.Paragraph);
}
function N1(e, t) {
  return Wy(e, t, x.Character);
}
function Wy(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !(Le.isValidMarker(n) || Fl(n));
}
function w1(e) {
  return [kt(e), Hs()];
}
function sd(e) {
  ar(e, 2);
}
function O1(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Oa(e) {
  const t = O1(e);
  e.splice(0, 0, w1(e.getMarker())), t && sd(e);
}
function Xo(e, t) {
  e.setMarker(t), Oa(e), sd(e);
}
function R1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!zr(n)) {
    if (M(n) && !R(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(D), Ot(n, fe, Ur), n.setMode("token");
      return;
    }
    if (Qh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Hs());
  }
}
function mp(e, t, r) {
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
    if (de(t)) return t;
}
function $1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = ks(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = ks(r.getNode())?.is(s) ?? !1, a = ks(n.getNode())?.is(s) ?? !1;
    return !(o && !mp(r, s, "start") || a && !mp(n, s, "end"));
  });
}
function bl(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = O();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of $1(r)) t.add(n.getKey());
}
function q1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = O();
  if (!P(r) || !r.isCollapsed()) return;
  const n = ks(r.focus.getNode());
  n && t.add(n.getKey());
}
function I1(e) {
  const t = O();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => R(r)) && (bl(e), t.removeText());
}
const L1 = new RegExp(
  String.raw`^\\\+?([${Cr}]+)(?:[ \u00A0]|$)`
);
function D1(e, t) {
  const r = L1.exec(e.getTextContent());
  return !!r && id(r[1], t);
}
function U1(e, t) {
  if (!ui(t.viewOptions)) return;
  if (St(e.getFirstChild())) {
    R1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (D1(e, t.getMarker)) return;
    Oa(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => de(o) && !o.is(e))) {
      Xo(e, nr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (Ne(r)) {
    const n = e.getChildren().filter((a) => !zr(a)), i = O();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ks(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && ar(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Xo(e, nr);
}
function F1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Pr(t, aa(e.getMarker()));
  return r === "" ? void 0 : r;
}
function Hy(e) {
  const t = e.getChildren().filter((s) => !R(s) && ae(s, fe) !== "attribute"), r = t[0];
  r && M(r) && r.getTextContent().startsWith(D) && r.setTextContent(r.getTextContent().slice(1));
  const n = F1(e);
  n && t.push(Pe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function z1(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && L(t) ? r = t.getChildAtIndex(e.offset) : R(t) && e.offset === 0 ? r = t : M(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), F(r) && (r = r.getFirstChild()), !R(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!F(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function K1() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = z1(e.anchor), r = t?.getParent();
  if (!t || !F(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), Gi(n) && n.getTextContent().startsWith(D) && n.setTextContent(` ${n.getTextContent().slice(D.length)}`), Hy(r), M(n) && n.isAttached() && n.select(0, 0), !0;
}
function B1(e, t) {
  const r = e.getChildren(), n = r.some((s) => R(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => M(c) && !R(c) && c.getTextContent() === Wt(s)
    ), a = oi(e).some(({ node: c }) => R(c));
    if (!o && !a) return;
    r.forEach((c) => {
      R(c) || (M(c) && c.getTextContent() === Wt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => R(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function j1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(R(r) && r.getMarkerSyntax() === "opening")) {
    Hy(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => R(o) && o.getMarkerSyntax() === "closing");
  i && !s && dr(e, t);
}
function Gy(e, t, r) {
  if (!R(e.getFirstChild()) && r?.markerMode === "editable" && ui(r)) {
    Xo(e, t);
    return;
  }
  Qg(e, t);
}
function Jy() {
  const e = O();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Yy(e);
    return t !== "removed" ? t : (kl(), "handled");
  }
  return kl() ? "handled" : "declined";
}
function V1(e, t) {
  if (!t) return e;
  const r = xP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function yp(e, t) {
  const r = O();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Xy())
      return "declined";
  } else {
    const s = Yy(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => V1(s, t)
  );
  bp(n ?? "");
  for (const s of i)
    kl(), bp(s);
  return "handled";
}
function W1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Wi(n);
  if (!i) return !1;
  const s = Vt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !M(i) || R(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Yy(e) {
  const t = Vt(e.anchor.getNode()), r = Vt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), H1() ? "removed" : "needs-plain-split");
}
function bp(e) {
  if (e === "") return;
  const t = O();
  P(t) && t.insertText(e);
}
function H1() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Vt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => R(r) && r.getMarkerSyntax() === "opening");
}
function Xy() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Vt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function kl() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Xy();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Yr("fp", { closed: "false" });
  i.append(kt("fp"));
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
    const [d] = l;
    d && (gT(d), i.append(d));
  }
  return i.getChildren().every(R) && i.append(Pe(or)), Qy(i), !0;
}
function Qy(e) {
  const t = e.getChildren().find((r) => !R(r));
  if (M(t)) {
    const r = pa(t);
    t.select(r, r);
    return;
  }
  if (L(t)) {
    Qy(t);
    return;
  }
  e.selectEnd();
}
function G1(e) {
  const t = [];
  let r = e;
  for (; r; )
    F(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function J1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ke().getChildren()) {
    if (t && n.is(t)) {
      Me(n) && r.push(n.getMarker());
      break;
    }
    (Me(n) || tt(n) || de(n)) && r.push(n.getMarker());
  }
  return r;
}
function Y1(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function X1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (St(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && zr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(Y1(i)) && r === 0 : !1;
}
function Q1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !St(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && zr(i) && t.is(i) && r === 0;
}
function Z1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function e0() {
  const e = O();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = $e(t, de), s = i ? void 0 : $e(t, Me), o = !n && !s && (!i || Q1(i, t, r)) ? "paragraph" : "character", a = Vt(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: J1(t),
    openCharMarkers: G1(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: su(t, r),
    anchorRect: Z1()
  };
}
function t0() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!M(t) || R(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = TP.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function r0(e, t, r) {
  Gy(e, t, r), sd(e);
}
function n0(e, t, r) {
  const n = O();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = $e(i, de);
  if (t === "backslash" && s && X1(s, i, n.focus.offset)) {
    r0(s, e, r);
    return;
  }
  xl(e, r);
}
function Zy(e, t) {
  const r = e.getNode(), n = jm(L(r) ? r : r.getParent());
  return t.is(n);
}
function i0(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !Zy(e, t);
}
function Qo(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function s0(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!R(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!F(r)) return e;
  const n = r.getParent();
  return n ? fr(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function o0(e, t, r) {
  const n = O();
  if (!P(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!Zy(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && i0(s, e)) return !1;
  const o = Gl(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (Qo(n.anchor, e, o), Qo(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = O();
  if (!P(a) || !a.isCollapsed()) return !1;
  const c = Hm(a);
  if (!c) return !1;
  const { parent: l, moving: d } = Wm(
    s0(c.anchor)
  );
  if (!e.is(l)) return !1;
  const u = d.filter((h) => !h.is(o)), f = qi(t);
  e.insertAfter(f), f.append(...u);
  const [p] = u;
  return F(p) ? ga(p) : f.select(0, 0), ui(r) && Oa(f), !0;
}
function a0(e, t) {
  const r = O();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function eb(e) {
  const t = O();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function c0(e) {
  const t = $e(e.anchor.getNode(), Me);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !Gl(r) || (Qo(e.anchor, t, r), Qo(e.focus, t, r));
}
function l0(e, t, r, n) {
  const i = O();
  if (P(i) ? c0(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && t0(), e.kind === "closeTag") {
    eb(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Jy() !== "declined") return;
  if (e.kind === "paragraph" && pt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    n0(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Le.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Ym(
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
  const r = O();
  if (!P(r)) return !1;
  ou(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!$e(n, de)) {
    const o = $e(n, Me);
    if (o) return o0(o, e, t);
  }
  const i = ui(t);
  if (Gm()) {
    const o = O();
    if (!P(o)) return !1;
    const a = $e(o.anchor.getNode(), de);
    return a ? (a.setMarker(e), i && Oa(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return de(s) ? (i ? Xo(s, e) : s.setMarker(e), !0) : !1;
}
function u0() {
  const [e] = ue();
  return B(() => e.registerCommand(Yp, () => !0, qt), [e]), null;
}
function d0(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = mP.exec(e)?.[1];
  return r === void 0 ? !1 : !id(r, t);
}
function tb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !d0(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!de(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!de(i) && !Me(i)))
    return [i, r];
}
function rb(e, t) {
  const r = tb(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return Me(n) ? Ky(n, t, [i]) : Iy([n, i], t);
}
function f0(e, t) {
  const r = O();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function nb(e) {
  const t = yP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function p0(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = nb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function h0(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && M(r)) {
    const n = r.getNextSibling();
    if (F(n)) {
      ga(n);
      return;
    }
  }
  M(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function kp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = nb(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  h0(e);
}
function xp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function ib(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return dr(e, r);
  const n = p0(e), i = e.getParent();
  if (de(i)) {
    if (!id(t, r.getMarker))
      return rb(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : dr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), xp(s, t) && kp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (F(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(F(i) ? N1(t, r.getMarker) : Le.isValidMarker(s)))
      return dr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return dr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(R).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (f0(c, ct(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), xp(a, s) && kp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return dr(e, r);
}
function g0(e) {
  const t = O();
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
function m0(e, t) {
  const r = e.getTextContent();
  if (tn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (je(e.getParent()) && Xl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !g0(e)) {
    CT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = hP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), ib(e, n[1], t);
      return;
    }
    if (gP.test(r)) {
      t.pendingKeys.delete(e.getKey()), dr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ct(e.getMarker(), e.getNested());
    if ((F(n) || K(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = O(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Pe(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function y0(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (bg(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function sb(e) {
  if (!ah(e)?.length)
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
const us = sb("v"), b0 = sb("c"), Tp = /^[ \u00A0]*$/;
function Tl(e, t, r) {
  const n = e.getNextSibling();
  if (M(n) && n.getType() === et.getType() && n.getMode() === "normal" && ae(n, fe) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = Pe(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function k0(e, t) {
  const r = e.getTextContent(), n = ir("v", e.getNumber());
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
    if (l && Tp.test(l[2] ?? "")) {
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
      const [, l, d, u] = c, f = O(), p = P(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(ir("v", d));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Tl(e, u, h);
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
  if (t.pendingKeys.delete(e.getKey()), Tp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(ir("v", o)), a && Tl(e, a, a.length);
}
const x0 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function T0(e, t) {
  if (!uy(e)) return !1;
  const r = e.getParent();
  if (!K(r)) return !1;
  const n = e.getTextContent();
  if (n === Wt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = x0.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = O(), c = P(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Wt(s)), o) {
    const l = n.length - o.length, d = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const u = Tl(e, o, d);
    u.isUnmergeable() || u.toggleUnmergeable();
  }
  return !0;
}
function C0(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!M(t)) return;
  const r = ir("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = b0.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function ob(e) {
  if (it(e)) {
    const { wrapper: t } = fa(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = Ql(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Fe(e)) {
    const t = [], r = ig(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = og(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Be(e)) {
    const t = [], r = vs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = vs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function _0(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return ob(e).some((n) => r.is(n));
}
function S0(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && de(e) && Qh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ms)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ys(l, e) && (i || _0(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ob(e))
    l.remove(), n = !0;
  let s = !1;
  if (F(e)) {
    const l = ET(e);
    l !== void 0 && ax(l) && (ug(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Ms)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (CC(l, e)) {
        As(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Eg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      ma(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Cp(e) {
  return M(e) && e.getType() === et.getType() && e.getMode() === "normal" && ae(e, fe) !== "attribute";
}
function v0(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Cp(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Cp(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function yo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = v0(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (R(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (tn(c)) continue;
      const h = ly.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = ib(c, h[1], e) || n : r === "idle" && gp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : rb(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = dr(c, e) || n;
      continue;
    }
    const l = Qn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = S0(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && gp(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = dr(d, e) || n;
    }
  }
  return n;
}
function ab(e) {
  if (sn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (F(t)) return gs(t) !== void 0;
  return !1;
}
function M0(e) {
  const t = Qn(e);
  if (!t) return !1;
  const r = Xn(t.kind);
  return !ma(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function _p(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (_e(t) || Tg(t)) return !0;
  return !1;
}
function E0(e, t) {
  const r = e.getTextContent(), n = ae(e, fe), i = e.getParent();
  if (n !== "attribute" && Fe(i)) {
    r.replace(/^[ \u00A0]+/, "") === ir("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (T0(e, t)) return;
  if (n === "attribute") {
    M0(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && ab(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !_p(e))
      t.pendingKeys.add(e.getKey());
    else if (ag(e)) t.pendingKeys.add(e.getKey());
    else if (Fe(Ls(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      F(a) && dg(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (_p(e)) return;
  const s = O(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (bP.test(o)) {
    if (mx(r)) {
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
function A0(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Eg(e, t);
}
function P0(e) {
  const t = (r) => {
    if (R(r)) {
      tn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (sn(r)) {
      bg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Ms)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ys(n, r) || A0(n, r)) && e.pendingKeys.add(r.getKey());
    if (Be(r)) {
      r.getTextContent() !== ir("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (M(r)) {
      if (r.getType() !== et.getType() || ae(r, fe) === "attribute") return;
      const n = r.getParent();
      if (Fe(n)) {
        r.getTextContent() !== ir("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && ab(r) || i.includes("//") || ag(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (F(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!_e(r)) {
      if (je(r) && r.getChildrenSize() === 0) {
        const n = Qn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Ke().getChildren().forEach(t);
}
const cb = Xp(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Tc(e) {
  const t = e();
  return wt(Pl), wt(uh), t;
}
const Sp = 8, N0 = 1e3;
function Mi(e, t) {
  const r = Be(e) ? ["va", "vp"] : it(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    EC(Xn(n), e, t.pendingKeys);
}
function w0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has($l) || i.updateTags.has(Ts)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = se(o);
        if (!c) continue;
        const l = Qn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = se(o.getKey());
        c?.isAttached() && Xn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ie(
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
    e.registerMutationListener(et, r),
    e.registerMutationListener(Kr, r),
    e.registerMutationListener(Zr, r),
    e.registerMutationListener(en, r)
  );
}
function Cl(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = O();
  return r ? t ? Lu(r, t) : P(r) && Fn(r) : !1;
}
function O0(e, t, r) {
  return Ie(
    e.registerCommand(
      zt,
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
          let a = yp(o, t.getMarker);
          if (a === "declined" && W1(e) && (a = yp(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      pe
    ),
    e.registerCommand(
      zt,
      (n) => {
        const i = dl(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !IA()) return !1;
        const o = O();
        return t.structureProtectionMode === "protected" && P(o) && Fn(o) ? !1 : (n?.preventDefault(), P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Hn, void 0), a === "") return;
          const l = O();
          P(l) && l.insertText(a);
        }), !0);
      },
      Oe
    ),
    e.registerCommand(
      zt,
      () => (t.splitExpected.current = !0, !1),
      qt
    )
  );
}
function R0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = ue(), a = e?.markerMode === "editable", c = !!e && Qs(e), l = Z(void 0), d = Z(n), u = Z(s);
  return B(() => {
    d.current = n, u.current = s;
    const f = l.current;
    f && (e && (f.viewOptions = e), f.getMarker = t ?? Or, f.logger = r, f.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), B(() => {
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
    const p = bC(o, f.pendingKeys);
    let h, g = !1, y, k = !1, b = !1, T = 0;
    const A = () => T < Sp ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Sp} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), _ = (S, W = "departure") => {
      o.update(() => {
        T = Tc(
          () => yo(f, S, W)
        ) ? T + 1 : 0;
      });
    };
    let w;
    const $ = () => {
      if (w !== void 0 && clearTimeout(w), w = void 0, b || f.pendingKeys.size === 0) return;
      const S = d.current ?? N0;
      S < 0 || (w = setTimeout(() => {
        w = void 0, !(b || f.pendingKeys.size === 0) && (g || A() || _(void 0, "idle"));
      }, S));
    }, z = Ie(
      o.registerNodeTransform(Kr, (S) => {
        if (o.isComposing()) return;
        m0(S, f);
        const W = Qn(S);
        W && (Be(W.owner) || K(W.owner) || Fe(W.owner) || it(W.owner) && fa(W.owner).wrapper === void 0) && Mi(W.owner, f);
      }),
      o.registerNodeTransform(Ct, (S) => {
        o.isComposing() || (k0(S, f), Mi(S, f));
      }),
      o.registerNodeTransform(Gt, (S) => {
        o.isComposing() || (C0(S), S.isAttached() && Mi(S, f));
      }),
      o.registerNodeTransform(pt, (S) => {
        o.isComposing() || U1(S, f);
      }),
      o.registerNodeTransform(ve, (S) => {
        if (!o.isComposing()) {
          j1(S, f);
          for (const W of ["separator", "char"])
            S.isAttached() && Ys(Xn(W), S) && f.pendingKeys.add(S.getKey());
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
      o.registerNodeTransform(yr, (S) => {
        o.isComposing() || Mi(S, f);
      }),
      o.registerNodeTransform(en, (S) => {
        if (o.isComposing()) return;
        const W = Qn(S);
        W && (it(W.owner) || Be(W.owner) || K(W.owner) || Fe(W.owner)) && Mi(W.owner, f);
      }),
      o.registerNodeTransform(Le, (S) => {
        o.isComposing() || (B1(S, f), Mi(S, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(nn, (S) => {
        o.isComposing() || y0(S, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(et, (S) => {
        o.isComposing() || E0(S, f);
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
        et,
        (S) => {
          o.getEditorState().read(() => {
            for (const [W, G] of S) {
              if (G === "destroyed") continue;
              const ce = se(W);
              !ce || ae(ce, fe) !== "attribute" || je(ce.getParent()) || o.getElementByKey(W)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      w0(o, f),
      ...c ? [
        o.registerNodeTransform(et, (S) => {
          o.isComposing() || OP(S);
        }),
        o.registerCommand(
          Wn,
          (S) => cp(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            S && typeof S == "object" && "clipboardData" in S ? S : null,
            o,
            !1,
            u.current
          ),
          Oe
        ),
        o.registerCommand(
          sr,
          (S) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            cp(
              S && typeof S == "object" && "clipboardData" in S ? S : null,
              o,
              !0,
              u.current
            )
          ),
          Oe
        ),
        o.registerCommand(
          zt,
          (S) => FP(
            // Same jsdom-safe duck-check as COPY above.
            S && typeof S == "object" && "clipboardData" in S ? S : null,
            f.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              f.splitExpected.current = !0;
            }
          ),
          Oe
        )
      ] : [],
      o.registerCommand(
        sr,
        () => (!Cl(f) && !Zs() && bl(f), !1),
        pe
      ),
      o.registerCommand(
        Vn,
        () => (o.isComposing() || I1(f), !1),
        wr
      ),
      o.registerCommand(
        Ar,
        (S) => S || o.isComposing() ? !1 : K1(),
        wr
      ),
      o.registerCommand(
        sa,
        () => (g = !1, T = 0, $(), !1),
        qt
      ),
      o.registerCommand(
        xr,
        (S) => (g = !1, T = 0, $(), (S.key === "Backspace" || S.key === "Delete") && !Cl(f, Iu(S)) && (bl(f), q1(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !S.ctrlKey || S.altKey || S.shiftKey || S.metaKey || S.key !== " " && S.code !== "Space" || !qA() ? !1 : (S.preventDefault(), !0)),
        Oe
      ),
      o.registerCommand(
        Gp,
        (S) => {
          const W = Jy();
          W === "needs-plain-split" && o.dispatchCommand(Hn, void 0);
          const G = W !== "declined" || AC();
          return G && S?.preventDefault(), yo(f), G;
        },
        Oe
      ),
      o.registerCommand(
        Hn,
        () => (f.splitExpected.current = !0, Gm()),
        Oe
      ),
      O0(o, f, c),
      o.registerCommand(
        cb,
        () => {
          if (g) return !0;
          const S = o.getRootElement(), W = S?.ownerDocument, G = !!S && !!W && W.hasFocus() && S.contains(W.activeElement);
          let ce;
          if (G) {
            const te = O();
            ce = P(te) ? te.focus.key : h;
          }
          return Tc(() => yo(f, ce)), !0;
        },
        qt
      ),
      o.registerCommand(
        Rl,
        () => {
          if (g) return !1;
          const S = O(), W = P(S) ? S.focus.key : h;
          return Tc(() => yo(f, W)), !1;
        },
        qt
      ),
      o.registerUpdateListener(({ editorState: S, tags: W }) => {
        f.splitExpected.current = !1, f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear(), f.rebuildAttempted.clear();
        const G = S.read(() => {
          const te = O();
          return P(te) ? te.focus.key : void 0;
        }), ce = y;
        if (G !== void 0 && (y = G), W.has($l)) {
          f.pendingKeys.clear(), S.read(() => P0(f)), g = !0, G !== void 0 && (h = G);
          return;
        }
        if (W.has(Rt)) {
          G !== void 0 && G !== ce && (g = !0);
          return;
        }
        g || (G !== void 0 && (h = G), $(), !(k || G === void 0) && [...f.pendingKeys].some((te) => te !== G) && (k = !0, queueMicrotask(() => {
          k = !1, !b && (A() || _(h));
        })));
      })
    );
    return () => {
      b = !0, w !== void 0 && clearTimeout(w), w = void 0, p(), z(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const $0 = ["status_unknown", "status_invalid"], lb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, q0 = Object.values(lb);
function I0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = lb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function vp(e) {
  e.classList.remove(...$0), e.removeAttribute("aria-description"), q0.includes(e.title) && e.removeAttribute("title");
}
function L0(e, t, r, n) {
  const i = (a) => a.read(() => Ke().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const d = se(l)?.getTopLevelElement();
        d && a.add(d.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function D0(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : R(t) && t.getParent()?.getKey() === r.getKey();
}
function U0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ue(), i = e?.markerMode === "editable";
  return B(() => {
    if (!i) return;
    const s = t ?? $o;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = i1(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || D0(f)) continue;
            const h = se(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && vp(p);
        }
        for (const [f, p] of u) {
          const h = n.getElementByKey(f);
          h && I0(h, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          L0(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && vp(d);
      }
    };
  }, [n, i, t, r]), null;
}
function ub(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Ir(o);
    a && L(s) && ub(s.getChildren(), a, r);
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
      if (l === void 0 || !l.includes(mt)) continue;
      const d = l.split(mt), u = [];
      for (let f = 0; f < d.length; f++) {
        const p = d[f];
        if (f > 0 && u.push(...t[n++] ?? []), p.length > 0) {
          const h = {
            ...a,
            text: p
          };
          u.push(h);
        }
      }
      s.splice(o, 1, ...u), o += u.length - 1;
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
function db(e, t) {
  const r = [];
  for (const n of e)
    ed(n, t) || ((de(n) || F(n)) && r.push(n.getMarker()), L(n) && r.push(...db(n.getChildren(), t)));
  return r;
}
function fb(e) {
  const t = [];
  for (const r of e) {
    const n = td(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Ir(r);
    i && t.push(...fb(i));
  }
  return t;
}
function Us(e, t, r) {
  const n = db(e, r), i = fb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function F0(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = O();
  let n, i;
  if (P(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = se(t.key), i = t.offset;
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
function z0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Ma(c, e, o, s)) return;
  const l = i ? Ra(c, i) : c.text, d = Dr(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (on(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = br.serializeEditorState(
    { type: mr, version: gr, content: d },
    s
  ).root.children;
  if (_n(u) !== c.sentinels.length) {
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
  if (Lr(u, o) === qr(e, o) && Us(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Ds(u, f);
  const h = pb(e), g = od(u);
  for (let y = 0; y < h.length && y < g.length; y++)
    h[y].sid !== void 0 && g[y].number === h[y].number && (g[y].sid = h[y].sid);
  return u;
}
function pb(e) {
  const t = [], r = (n) => {
    Be(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function od(e) {
  const t = [];
  for (const r of e) {
    zh(r) && t.push(r);
    const n = Ir(r);
    n && t.push(...od(n));
  }
  return t;
}
function K0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Dy(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? Ra(l, i) : l.text, f = Dr(u, {
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
  const h = p.content ?? [], g = Uy(h), y = e.getCategory() !== g, k = vy(e, h);
  if (k) {
    const _ = My(
      e,
      k.before,
      k.after,
      g,
      s
    );
    if (!_ || _n(_) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const w = Zo(l, t, n);
    return w ? (Ds(_, w), {
      rebuilt: void 0,
      contentNodes: d,
      category: g,
      categoryChanged: !1,
      closedAs: _
    }) : void 0;
  }
  const b = Sy(e, h, g, s);
  if (b.failure !== void 0) {
    b.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : b.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const T = b.children;
  if (_n(T) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const A = Zo(l, t, n);
  if (!A) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Lr(T, o) === qr(d, o) && Us(d, T, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: d, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Ds(T, A), { rebuilt: T, contentNodes: d, category: g, categoryChanged: y };
}
function Mp(e) {
  return e.$?.textType;
}
function B0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Mp(e) === Mp(t);
}
function j0(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && _e(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function V0(e) {
  if (!R(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (tn(e)) return;
  const n = ly.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Ep(e, t) {
  const r = e;
  r.marker = t, r.text = Ny(t, r.markerSyntax, r.nested);
}
function W0(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Le.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Ep(a.node, s);
  const c = n.getChildren().filter(R).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Ep(l.node, s);
}
function H0(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: d } = rd(e, a, o);
  if (d.length === 0 && s.length === 0 || !Ma(l, s, a, o)) return;
  const u = i ? Ra(l, i) : l.text, f = zy(u, a);
  if (on(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = Ey(
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
  if (_n([...h, ...g]) !== l.sentinels.length) {
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
  if (g.length === s.length && Lr(g, a) === qr(s, a) && Us(s, g, a) && Lr(h, a) === qr(d, a) && Us(d, h, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const k = Ds(h, y);
  Ds(g, y, k);
  const b = pb([...d, ...s]), T = od([...h, ...g]);
  for (let A = 0; A < b.length && A < T.length; A++)
    b[A].sid !== void 0 && T[A].number === b[A].number && (T[A].sid = b[A].sid);
  return { rebuilt: h, contentNodes: d, followingBlocks: g };
}
function G0(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Vy(e, i, n);
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
  const d = br.serializeEditorState(
    { type: mr, version: gr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...wa(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Lr(d, i) === qr(u, i) && Us(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function J0(e, t, r, n, i) {
  const s = F0(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (b) => {
    K(b) ? c.set(b.getKey(), b) : Fe(b) ? l.set(b.getKey(), b) : Me(b) ? d.set(b.getKey(), b) : o.set(b.getKey(), [b]);
  };
  for (const b of t) {
    const T = se(b);
    if (!T?.isAttached()) continue;
    const A = Ls(T);
    if (A) {
      if (p(A), R(T)) {
        const _ = tb(T, r.getMarker);
        _ && a.push(_);
      }
      if (K(A)) {
        const _ = V0(T);
        _ && f.set(A.getKey(), _);
      }
    }
  }
  const h = /* @__PURE__ */ new Set();
  for (const [b, T] of a)
    h.has(b.getKey()) || h.has(T.getKey()) || ([b, T].forEach((A) => {
      h.add(A.getKey()), o.delete(A.getKey());
    }), Me(b) ? (d.set(b.getKey(), b), u.set(b.getKey(), [T])) : o.set(b.getKey(), [b, T]));
  if (s) {
    const b = Ls(s.node);
    b && !h.has(b.getKey()) && p(b);
  }
  const g = j0(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && d.size === 0 && g.length === 0)
    return;
  const y = new Set(g.map((b) => b.getKey())), k = /* @__PURE__ */ new Map();
  ub(Ke().getChildren(), e.root.children, k);
  for (const b of f.values()) W0(b, k);
  for (const b of c.values()) {
    const T = k.get(b.getKey()), A = T ? Ir(T.node) : void 0;
    if (!T || !A) continue;
    const _ = K0(b, k, r, y, s);
    if (!_) continue;
    if (_.closedAs) {
      const z = T.siblings.indexOf(T.node);
      if (z < 0) continue;
      const [S, ...W] = _.closedAs, G = T.node;
      for (const ce of Object.keys(G)) Reflect.deleteProperty(G, ce);
      Object.assign(G, S), T.siblings.splice(z + 1, 0, ...W);
      continue;
    }
    if (_.categoryChanged) {
      const z = T.node;
      _.category === void 0 ? delete z.category : z.category = _.category;
    }
    if (!_.rebuilt) continue;
    const w = k.get(_.contentNodes[0].getKey());
    if (!w) continue;
    const $ = A.indexOf(w.node);
    $ < 0 || A.splice($, _.contentNodes.length, ..._.rebuilt);
  }
  for (const b of o.values()) {
    const T = k.get(b[0].getKey());
    if (!T) continue;
    const A = z0(b, k, r, y, s);
    if (!A) continue;
    const _ = T.siblings.indexOf(T.node);
    _ < 0 || T.siblings.splice(_, b.length, ...A);
  }
  for (const b of d.values()) {
    const T = k.get(b.getKey()), A = T ? Ir(T.node) : void 0;
    if (!T || !A) continue;
    const _ = u.get(b.getKey()) ?? [], w = H0(b, k, r, y, s, _);
    if (!w) continue;
    const $ = w.contentNodes.at(0), z = $ ? k.get($.getKey()) : void 0;
    if ($ && !z) continue;
    const S = z ? A.indexOf(z.node) : A.length, W = T.siblings.indexOf(T.node);
    S < 0 || W < 0 || (A.splice(S, w.contentNodes.length, ...w.rebuilt), T.siblings.splice(W + 1, _.length, ...w.followingBlocks));
  }
  for (const b of l.values()) {
    const T = k.get(b.getKey());
    if (!T) continue;
    const A = 1 + wa(b).length, _ = G0(b, r, s);
    if (!_) continue;
    const w = T.siblings.indexOf(T.node);
    w < 0 || T.siblings.splice(w, A, ..._);
  }
  for (const b of g) {
    const T = k.get(b.getKey());
    if (!T) continue;
    const A = T.siblings.indexOf(T.node);
    if (A < 0) continue;
    T.siblings.splice(A, 1);
    const _ = T.siblings[A - 1], w = T.siblings[A], $ = _ && Vi(_), z = w && Vi(w);
    _ && w && $ !== void 0 && z !== void 0 && B0(_, w) && (_.text = $ + z, T.siblings.splice(A, 1));
  }
  return qm(e, r.viewOptions);
}
function Y0({
  viewOptions: e,
  logger: t
}) {
  const [r] = ue(), n = ui(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return B(() => {
    if (n)
      return r.registerNodeTransform(
        pt,
        (i) => X0(i, t)
      );
  }, [r, n, t]), null;
}
function X0(e, t) {
  e.getMarker() !== nr && (e.isEmpty() || St(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${nr}" (key ${e.getKey()})`
  ), e.setMarker(nr)));
}
function Q0({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ue(), n = Z({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return B(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, ea(s, e) || Z0(i, r, e);
  }, [r, e, t]), B(
    () => r.registerMutationListener(
      jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = _l(r);
        Ap(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: bo(s) === bo(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), B(() => {
    const i = (a) => a.read(
      () => new Set(
        Ke().getChildren().filter(tt).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (_l(r) || Ap(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: bo(a) === bo(c)
      }));
    };
    return Ie(
      ...[Gt, Fr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), B(
    () => r.registerCommand(
      Kt,
      () => {
        const i = n.current;
        return i.phase === "idle" && nN(i, hb()), !1;
      },
      qt
    ),
    [r]
  ), B(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Kt, void 0));
    };
    return Ie(
      r.registerMutationListener(Dt, i),
      r.registerMutationListener(Ct, i)
    );
  }, [r]), B(() => {
    const i = () => aN(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function Z0(e, t, r) {
  if (eN(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = _l(t);
  (!n || n === r.book) && t.update(() => gb(t, r.chapterNum, r.verseNum), {
    tag: Rt
  });
}
function eN(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ea(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function hb() {
  const e = O(), t = Yh(e);
  if (!t) return;
  const r = ad(), n = nT(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = lu(t, e), { verseNum: o, verse: a } = QC(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function _l(e) {
  return e.getEditorState().read(() => ad()?.getCode() || void 0);
}
function ad() {
  return Ke().getChildren().find(Me);
}
function Ap(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Cc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Cc(e, t), e.phase = "navigating") : i && Cc(e, t), r && r !== e.scrRef.book && bb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Cc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => gb(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Rt }
    );
  });
}
function gb(e, t, r) {
  const n = O()?.clone();
  tN(t, r);
  const i = O();
  i && !(n && i.is(n)) && Gr(e, Rt);
}
function tN(e, t) {
  const r = hb();
  if (r?.chapterNum === e && (r.verse ? yb(t, r.verse) : r.verseNum === t))
    return;
  const n = Ke().getChildren(), i = Bh(n, e);
  if (!i) return;
  const s = lT(n, i), o = rT(s, !0);
  cT(s, o);
  let a;
  try {
    a = WC(s, t);
  } catch {
    return;
  }
  a && (de(a) ? !M(a.getFirstChild()) && di(a) || ar(a, 0) : rN(a));
}
function rN(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ke(n)) {
    M(e) ? e.selectEnd() : ar(t, r);
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
  const s = L(n) && !K(n) ? mb(n) : void 0;
  s ? s.select(0, 0) : ar(t, r);
}
function mb(e) {
  const t = e.getFirstChild();
  if (M(t)) return t;
  if (L(t) && !K(t)) return mb(t);
}
function bo(e) {
  return e.read(() => {
    const t = Ke().getChildren().find(tt);
    return `${ad()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function nN(e, t) {
  e.phase !== "navigating" && t && (iN(t, e.scrRef) || bb(e, sN(t, e.scrRef)));
}
function iN(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? yb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function yb(e, t) {
  try {
    return Jl(e, t);
  } catch {
    return !1;
  }
}
function sN(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const oN = 8;
function bb(e, t) {
  return ea(t, e.scrRef) || e.pendingEchoes.some((r) => ea(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > oN && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ea(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function aN(e) {
  e.phase = "idle";
}
function cN(e) {
  return Me(e) ? `${e.__code}` : Fe(e) ? `${e.__marker} "${e.__number}"` : F(e) ? `${e.__marker}` : Bs(e) ? `${e.__marker} "${e.__number}"` : xt(e) ? `${e.__caller}` : li(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : de(e) ? `${e.__marker}` : M(e) ? `"${e.__text}"${lN(e)}` : Ae(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Be(e) ? `${e.__marker} "${e.__number}"` : "";
}
function lN(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ks]) : "";
}
function uN() {
  const [e] = ue();
  return /* @__PURE__ */ E(
    Mk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: cN,
      editor: e
    }
  );
}
const kb = Dp(null), Pp = 4;
function dN({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = Up(kb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return B(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ E("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function fN({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = ye(), [s, o] = ye(), a = xe(
    (d) => {
      i((u) => u ? [...u, d] : [d]);
    },
    [i]
  ), c = (d) => {
    if (!n) return;
    const u = d.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(u) && d.preventDefault(), u === "Escape" || u === "Tab" ? r() : u === "ArrowUp" ? o((f) => {
      if (!f) return n[0];
      const p = n.indexOf(f) - 1;
      return n[p === -1 ? n.length - 1 : p];
    }) : u === "ArrowDown" && o((f) => f ? n[n.indexOf(f) + 1] : n[0]);
  }, l = Ze(() => ({ registerItem: a }), [a]);
  return B(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ E(kb.Provider, { value: l, children: /* @__PURE__ */ E("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function pN({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Z(null), c = Z(null), [l, d] = ye(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return B(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: g } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Pp}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), B(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (h) => {
        const g = h.target;
        o && a.current && a.current.contains(g) || f.contains(g) || d(!1);
      };
      return document.addEventListener("click", p), () => {
        document.removeEventListener("click", p);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), B(() => {
    const f = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Pp;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Re(zn, { children: [
    /* @__PURE__ */ Re(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => d(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ E("span", { className: i }),
          t && /* @__PURE__ */ E("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ E("i", { className: "chevron-down" })
        ]
      }
    ),
    l && Un(
      /* @__PURE__ */ E(fN, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const Sl = {
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
  ...Sl,
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
function hN({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ E(
    pN,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + gN(t),
      buttonLabel: mN(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Sl).map((n) => /* @__PURE__ */ Re(
        dN,
        {
          className: "item block-marker " + yN(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ E("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ E("span", { className: "text usfm_" + n, children: Sl[n] })
          ]
        },
        n
      ))
    }
  );
}
function gN(e) {
  return e && e in vl ? e : "ban";
}
function mN(e) {
  return e && e in vl ? vl[e] : "No Style";
}
function yN(e) {
  return e ? "active dropdown-item-active" : "";
}
function Np() {
  return /* @__PURE__ */ E("div", { className: "divider" });
}
const bN = Mn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ue(), [o, a] = ye(s), [c, l] = ye(), [d, u] = ye(!1), [f, p] = ye(!1), h = xe(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: k,
      contextMarker: b
    }) => {
      u(g), p(y), l(k), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: k,
        contextMarker: b
      });
    },
    [n]
  );
  return B(() => s.registerCommand(
    Kt,
    (g, y) => (a(y), !1),
    pe
  ), [s]), /* @__PURE__ */ Re(zn, { children: [
    /* @__PURE__ */ E(Rm, { onStateChange: h }),
    /* @__PURE__ */ Re("div", { className: "toolbar", children: [
      /* @__PURE__ */ E(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(Qp, void 0);
          },
          title: yn ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ E("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ E(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(Zp, void 0);
          },
          title: yn ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ E("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ E(Np, {}),
      o === s && /* @__PURE__ */ Re(zn, { children: [
        /* @__PURE__ */ E(
          hN,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ E(Np, {})
      ] }),
      /* @__PURE__ */ E("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), kN = Ta(), xN = {}, TN = {};
function CN() {
  return /* @__PURE__ */ E("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function _c(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function wp(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = L(n) ? n.getLastDescendant() ?? n : n;
  return ba(r, i);
}
function Op(e, t, r) {
  Pk(e, () => qi(t));
  const n = O();
  if (!P(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    de(o) && i.add(o);
  }), i.forEach((s) => Gy(s, t, r));
}
const xb = Mn(function({
  defaultUsj: t,
  scrRef: r,
  onScrRefChange: n,
  onSelectionChange: i,
  onUsjChange: s,
  onStateChange: o,
  options: a,
  logger: c,
  children: l
}, d) {
  const u = Z(null), f = Z(null), p = Z(null), h = Z(null), g = Z(t), y = Z(void 0), k = Z(void 0), b = Z(void 0), T = Z(void 0), A = Z(!1), [_, w] = ye(t), [$, z] = ye(0), [S, W] = ye(), {
    isReadonly: G = !1,
    structureProtectionMode: ce = "off",
    onHiddenContentDelete: te,
    hasExternalUI: qe = !1,
    hasSpellCheck: Se = !1,
    textDirection: J = "ltr",
    markerMenuTrigger: V = "\\",
    view: ne,
    nodes: ge,
    debug: ht = !1,
    contextMenu: Y,
    styleInfo: N,
    markerSettleDelayMs: ee,
    copyLimit: he
  } = a ?? TN, Te = ne ?? kN, st = ws(Te) && (Te.markerMode !== "hidden" || !Te.hasSpacing || Te.hasGutterParaMarkers || Te.hasActiveTextFocusBox) ? {
    ...Te,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : Te, We = Z(st);
  Qt(We.current, st) || (We.current = st);
  const ie = We.current, Xe = Ze(() => ge ?? xN, [ge]), $a = Ze(() => Y, [Y]), fi = Ze(
    () => LC(N ?? $o),
    [N]
  ), Ee = Z(c);
  Qt(Ee.current, c) || (Ee.current = c);
  const He = Ee.current, me = ws(ie), Mt = G || me, De = st !== Te;
  B(() => {
    me && !G && He?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), De && He?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ie?.markerMode === "visible" && !G && He?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [me, G, De, He, ie?.markerMode]);
  const cr = Z(null), eo = Ze(() => {
    if (ie.markerMode !== "editable") return;
    const q = N ?? $o;
    return {
      getContext: () => cr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (I) => f1(
        q,
        I,
        Xe.extraValidMarkers
      ),
      getEnterItems: (I) => p1(
        q,
        I,
        Xe.extraValidMarkers
      ),
      apply: (I, H) => {
        const X = cr.current;
        X && (H.trigger === "enter" ? X.splitParagraphWithMarker(I.marker) : X.applyMarkerMenuSelection(I, H));
      },
      commitTypedCloser: (I) => {
        cr.current?.commitTypedCloser(I);
      }
    };
  }, [ie, N, Xe.extraValidMarkers]), Jt = (q) => {
    A.current || (A.current = !0, Ee.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Zi = (q) => {
    if (me)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Br = (q) => {
    if (Zi(q), Mt) throw new Error(`Cannot ${q} in readonly mode`);
  }, An = () => !!u.current && hm(u.current), to = Ze(
    () => ({
      namespace: "platformEditor",
      theme: { ...iy, showCharMarkerTitles: ie.showCharMarkerTitles },
      editable: !Mt,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [dt, ...me ? iS : xu]
    }),
    [Mt, me, ie.showCharMarkerTitles]
  );
  Co.initialize(He);
  function Et(q) {
    if (q !== void 0 && !DA(q, Xe.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const Yt = xe(() => {
    const q = u.current;
    if (!q) return g.current;
    const I = Vd(q), H = k.current;
    if ((!I || I.size === 0) && !H) return g.current;
    const X = q.getEditorState(), Ce = X.toJSON();
    return X.read(
      () => J0(
        Ce,
        I ?? /* @__PURE__ */ new Set(),
        { viewOptions: ie, getMarker: fi, logger: He },
        H,
        b.current
      )
    ) ?? g.current;
  }, [ie, fi, He]);
  function _r(q, I, H) {
    if (me && I === "remote") {
      Ee.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    Zi("apply an update");
    const X = An(), Ce = !X && u.current ? Gr(u.current, Vr) : void 0;
    u.current?.update(
      () => {
        I === "remote" && wt(Ts), X || wt(Vr), H && wt(H), wS(q, ie, Xe, He);
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
          Ce?.(), !X && u.current && cc(u.current);
          const nt = u.current?.getEditorState();
          if (!nt) return;
          const Ue = Co.deserializeEditorState(nt, ie);
          if (Ue) {
            const Qe = !Qt(g.current, Ue);
            if (Qe && (g.current = Ue), Qe || !Qt(_, Ue)) {
              const At = rf(q, nt, "apply");
              T.current = Ue, s?.(Ue, q, I, At);
            }
          }
        }
      }
    );
  }
  const pi = {
    focus() {
      u.current?.focus();
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
      u.current?.dispatchCommand(Qp, void 0);
    },
    redo() {
      u.current?.dispatchCommand(Zp, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      Br("cut"), u.current && Ou(u.current);
    },
    copy() {
      u.current && wu(u.current);
    },
    paste() {
      Br("paste"), u.current && Ru(u.current);
    },
    pastePlainText() {
      Br("paste as plain text"), u.current && $u(u.current);
    },
    getUsj() {
      return Yt();
    },
    commitPendingMarkerEdits() {
      const q = u.current;
      if (!q) return;
      const I = !An(), H = I ? Gr(q, Vr) : void 0;
      q.update(
        () => {
          I && wt(Vr), q.dispatchCommand(cb, void 0);
        },
        { discrete: !0 }
      ), H?.(), I && cc(q);
    },
    setTransientInput(q) {
      if (!q) {
        k.current = void 0;
        return;
      }
      const I = u.current?.getEditorState().read(() => {
        const H = O();
        return P(H) && H.isCollapsed() ? H.focus.key : void 0;
      });
      k.current = { input: q, nodeKey: I ?? b.current?.key };
    },
    setUsj(q) {
      if (!Qt(g.current, q)) {
        g.current = q, k.current = void 0;
        const I = Qt(_, q);
        w(q), I && z((H) => H + 1);
      }
    },
    applyUpdate(q, I = "remote") {
      _r(q, I);
    },
    replaceEmbedUpdate(q, I) {
      const H = u.current?.read(() => u_(q, I));
      H ? this.applyUpdate(H) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (me) {
        Jt("get the selection");
        return;
      }
      return u.current?.read(gu);
    },
    setSelection(q) {
      if (me) {
        Jt("set the selection");
        return;
      }
      u.current?.update(() => {
        const I = xa(q);
        I !== void 0 && (Nr(I), wt(lh));
      });
    },
    setAnnotation(q, I, H, X, Ce) {
      if (me) {
        Jt("set an annotation");
        return;
      }
      let nt, Ue, Qe, At;
      typeof X == "function" || X === void 0 ? (nt = X, Ue = Ce) : (nt = X.onClick, Ue = X.onRemove, Qe = X.onMouseEnter, At = X.onMouseLeave), f.current?.setAnnotation(
        q,
        $d(I),
        H,
        nt,
        Ue,
        Qe,
        At
      );
    },
    removeAnnotation(q, I) {
      f.current?.removeAnnotation($d(q), I);
    },
    formatPara(q) {
      Br("format a paragraph"), u.current?.update(
        () => {
          const I = O();
          if (!P(I)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${q}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const H = I.isBackward() ? I.focus : I.anchor, X = $e(H.getNode(), Me);
          if (X) {
            const Ce = I.isBackward() ? I.anchor : I.focus, Ue = !I.isCollapsed() && !X.is(Ce.getNode()) && !X.isParentOf(Ce.getNode()) ? { key: Ce.key, offset: Ce.offset, type: Ce.type } : void 0, Qe = mn();
            if (Qe.anchor.set(H.key, H.offset, H.type), Qe.focus.set(H.key, H.offset, H.type), Nr(Qe), !xl(q, ie)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${q}"`
              );
              return;
            }
            if (!Ue) return;
            const At = se(Ue.key);
            if (!At?.isAttached()) return;
            const jr = At.getTopLevelElement();
            if (!jr) return;
            const Ut = X.getNextSibling();
            if (!de(Ut)) return;
            let Xt = Ut.getNextSibling();
            for (; Xt; ) {
              const ro = Xt.is(jr), no = Xt.getNextSibling();
              if (de(Xt)) {
                const an = mn();
                an.anchor.set(Xt.getKey(), 0, "element"), an.focus.set(Xt.getKey(), Xt.getChildrenSize(), "element"), Nr(an), Op(an, q, ie);
              }
              if (ro) break;
              Xt = no;
            }
            return;
          }
          Op(I, q, ie);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(q) {
      return u.current?.read(
        () => u.current?.getElementByKey(q) ?? void 0
      );
    },
    removeCharacterMarker(q) {
      if (Mt) throw new Error("Cannot remove character marker in readonly mode");
      Et(q);
      let I = !1;
      return u.current?.update(
        () => {
          const H = O();
          P(H) && (I = Qm(H, q, ie));
        },
        { discrete: !0 }
      ), I;
    },
    replaceCharacterMarker(q, I) {
      if (Mt) throw new Error("Cannot replace character marker in readonly mode");
      Et(q), Et(I);
      let H = !1;
      return u.current?.update(
        () => {
          const X = O();
          P(X) && (H = YA(X, q, I));
        },
        { discrete: !0 }
      ), H;
    },
    extendCharacterMarker(q, I) {
      if (Mt) throw new Error("Cannot extend character marker in readonly mode");
      Et(q), I?.forEach(
        (X) => Et(X)
      );
      let H = !1;
      return u.current?.update(
        () => {
          const X = O();
          P(X) && (H = XA(
            X,
            q,
            I,
            ie
          ));
        },
        { discrete: !0 }
      ), H;
    },
    insertMarker(q) {
      if (Mt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!sl(q, Xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const I = ol(
        q,
        y,
        ie,
        Xe,
        He,
        void 0,
        N
      );
      return I.action({ editor: u.current, reference: r }), I.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!G)
        return u.current?.getEditorState().read(() => e0());
    },
    applyMarkerMenuSelection(q, I) {
      if (G) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (q.kind !== "closeTag" && !sl(q.marker, Xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let H;
      return u.current.update(() => {
        H = l0(q, I, r, {
          expandedNoteKeyRef: y,
          viewOptions: ie,
          nodeOptions: Xe,
          logger: c,
          styleInfo: N
        });
      }), H;
    },
    splitParagraphWithMarker(q) {
      if (G) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        xl(q, ie);
      });
    },
    commitTypedMarker(q, I) {
      if (G) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let H = !1;
      return u.current.update(() => {
        H = a0(q, I), H || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), H;
    },
    commitTypedCloser(q) {
      if (G) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let I = !1;
      return u.current.update(() => {
        I = eb(q), I || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), I;
    },
    insertNote(q, I, H) {
      Br("insert a note"), u.current?.update(
        () => {
          const X = Fg(
            q,
            I,
            H,
            r,
            ie,
            Xe,
            He
          );
          _c(X, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      u.current?.update(() => {
        const I = Er(q);
        I && (Vc(I, ie), _c(I, y));
      });
    },
    selectAfterNote(q) {
      const I = u.current;
      if (!I) return;
      const H = !An(), X = H ? Gr(I, Vr) : void 0;
      if (I.update(
        () => {
          H && wt(Vr);
          const Ce = Er(q);
          Ce && Kg(Ce);
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
            wt(Vr), I.dispatchCommand(Kt, void 0);
          },
          { discrete: !0 }
        ), Ce();
      }
    },
    selectNoteTextOffset(q, I, H) {
      u.current?.update(() => {
        const X = Er(q);
        if (!X) return;
        const Ce = H?.glyph;
        (H?.field === "category" ? Z_(X, I, Ce) || lf(X, 0) : lf(X, I, Ce)) || Vc(X, ie), _c(X, y);
      });
    },
    getNoteOps(q) {
      const I = u.current;
      return I ? Ei(I, () => {
        const H = Er(q);
        if (H)
          return ba(H);
      }) : void 0;
    },
    getOpsAfterNote(q) {
      const I = u.current;
      return I ? Ei(I, () => {
        const H = Er(q);
        return H ? wp(H) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(q) {
      const I = u.current, H = I ? Ei(I, () => {
        const Ue = Er(q);
        if (!Ue) return;
        const Qe = du(Ue, "apply");
        return { ops: wp(Ue), notePosition: Qe };
      }) : void 0;
      if (!H) return;
      const { ops: X, notePosition: Ce } = H;
      if (X.length === 0 || Ce === void 0) return X;
      const nt = X.reduce(
        (Ue, Qe) => Ue + (typeof Qe.insert == "string" ? Qe.insert.length : 1),
        0
      );
      return _r([{ retain: Ce + 1 }, { delete: nt }], "remote", Pl), X;
    },
    getNoteIndex(q) {
      const I = u.current;
      return I ? Ei(I, () => pu(q)) : void 0;
    },
    getNoteKey(q) {
      const I = u.current;
      return I ? Ei(I, () => Er(q)?.getKey()) : void 0;
    },
    highlightNote(q) {
      p.current?.setHighlightedNote(q);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  cr.current = pi, ra(d, () => pi), B(() => {
    const q = u.current;
    if (q)
      return q.registerUpdateListener(({ editorState: I }) => {
        I.read(() => {
          const H = O();
          if (!P(H) || !H.isCollapsed()) return;
          const X = H.focus.getNode();
          M(X) && (b.current = { key: X.getKey(), offset: H.focus.offset });
        });
      });
  }, []);
  const hi = xe(
    (q, I, H, X, Ce) => {
      if (me) return;
      const nt = Co.deserializeEditorState(q, ie);
      if (nt) {
        const Ue = !Qt(g.current, nt);
        if (Ue && (g.current = nt), Ue || !Qt(_, nt)) {
          const Qe = rf(X, q), At = Qe && !Ce.read(() => se(Qe)) ? Qe : void 0;
          T.current = nt, s?.(nt, X, "local", At);
        }
      }
    },
    [_, s, ie, me]
  );
  B(() => {
    const q = u.current;
    if (!(!q || !s))
      return q.registerUpdateListener(({ tags: I, dirtyElements: H, dirtyLeaves: X }) => {
        !I.has($l) && (H.size === 0 && X.size === 0 || I.has(Ts) || !Vd(q)?.size) || queueMicrotask(() => {
          const Ce = Yt();
          !Ce || Qt(T.current, Ce) || (T.current = Ce, s(Ce, void 0, "local", void 0));
        });
      });
  }, [s, Yt]);
  const Pn = xe(
    (q) => {
      W(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Re(th, { initialConfig: to, children: [
      /* @__PURE__ */ E(Dv, { isEditable: !Mt }),
      /* @__PURE__ */ Re("div", { className: "editor-container", children: [
        qe ? /* @__PURE__ */ E(Rm, { onStateChange: Pn }) : /* @__PURE__ */ E(
          "div",
          {
            className: "editor-toolbar-container" + (Mt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ E(
              bN,
              {
                ref: h,
                editorRef: cr,
                isReadonly: Mt,
                onStateChange: Pn
              }
            )
          }
        ),
        /* @__PURE__ */ Re("div", { className: "editor-inner", children: [
          /* @__PURE__ */ E(nh, { editorRef: u }),
          /* @__PURE__ */ E(
            Ak,
            {
              contentEditable: /* @__PURE__ */ E(
                rh,
                {
                  className: `editor-input usfm ${NS(ie).join(" ")}${ie.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ie.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Se
                }
              ),
              placeholder: /* @__PURE__ */ E(CN, {}),
              ErrorBoundary: ih
            }
          ),
          qe && /* @__PURE__ */ E(Lv, {}),
          /* @__PURE__ */ E(sh, {}),
          r && n && /* @__PURE__ */ E(Q0, { scrRef: r, onScrRefChange: n }),
          r && !qe && /* @__PURE__ */ E(
            $E,
            {
              trigger: V,
              scrRef: r,
              contextMarker: S,
              getMarkerAction: (q) => ol(
                q,
                y,
                ie,
                Xe,
                He,
                void 0,
                N
              ),
              editableHarness: eo
            }
          ),
          /* @__PURE__ */ E(
            WM,
            {
              scripture: _,
              scriptureRef: g,
              nodeOptions: Xe,
              editorAdaptor: br,
              viewOptions: ie,
              logger: He
            },
            $
          ),
          /* @__PURE__ */ E(hE, { onChange: i }),
          /* @__PURE__ */ E(
            SS,
            {
              onChange: hi,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Yk
            }
          ),
          /* @__PURE__ */ E(rP, { viewOptions: ie }),
          /* @__PURE__ */ E(CS, { ref: f, logger: He }),
          /* @__PURE__ */ E(sv, { viewOptions: ie }),
          /* @__PURE__ */ E(kv, {}),
          /* @__PURE__ */ E(vv, {}),
          ie?.markerMode !== "editable" && /* @__PURE__ */ E(Mv, { logger: He }),
          /* @__PURE__ */ E(wv, { options: $a }),
          /* @__PURE__ */ E(YP, { limit: he, viewOptions: ie }),
          /* @__PURE__ */ E(Iv, {}),
          /* @__PURE__ */ E(Fv, {}),
          /* @__PURE__ */ E(Kv, {}),
          /* @__PURE__ */ E(u0, {}),
          /* @__PURE__ */ E(
            IM,
            {
              isEnabled: ie?.markerMode !== "editable",
              structureProtectionMode: ce,
              copyLimit: he,
              onHiddenContentDelete: te,
              logger: He
            }
          ),
          /* @__PURE__ */ E(
            R0,
            {
              viewOptions: ie,
              getMarker: fi,
              logger: He,
              markerSettleDelayMs: ee,
              structureProtectionMode: ce,
              copyLimit: he
            }
          ),
          ie?.markerMode === "visible" && /* @__PURE__ */ E(JP, { viewOptions: ie, copyLimit: he }),
          /* @__PURE__ */ E(
            U0,
            {
              styleInfo: N,
              viewOptions: ie,
              logger: He
            }
          ),
          /* @__PURE__ */ E(HM, { ref: p }),
          /* @__PURE__ */ E(
            GM,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Xe,
              viewOptions: ie,
              logger: He
            }
          ),
          /* @__PURE__ */ E(pE, {}),
          /* @__PURE__ */ E(tv, {}),
          /* @__PURE__ */ E(XS, {}),
          /* @__PURE__ */ E(Y0, { viewOptions: ie, logger: He }),
          /* @__PURE__ */ E(gE, {}),
          /* @__PURE__ */ E($M, { structureProtectionMode: ce }),
          /* @__PURE__ */ E(bE, { textDirection: J }),
          /* @__PURE__ */ E(xE, {}),
          /* @__PURE__ */ E(OE, {}),
          l
        ] }),
        ht && /* @__PURE__ */ E(uN, {})
      ] })
    ] }, ie.verseLayout ?? "inline")
  );
}), ww = Mn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ E(xb, { ref: r, ...i });
});
function Tb() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ta(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Tb() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Cb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Tb() : r,
    quote: e,
    type: "thread"
  };
}
function Rp(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function _N(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Sc(e) {
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
    this._comments = t, Sc(this);
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
          const c = Rp(a);
          i.splice(o, 1, c);
          const l = n !== void 0 ? n : c.comments.length;
          if (this.isCollaborative() && s !== null) {
            const d = s.get(o).get("comments");
            this._withRemoteTransaction(() => {
              const u = this._createCollabSharedMap(t);
              d.insert(l, [u]);
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
    this._comments = i, Sc(this);
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
          const c = Rp(a);
          n.splice(o, 1, c);
          const l = c.comments;
          if (s = l.indexOf(t), this.isCollaborative() && i !== null) {
            const d = i.get(o).get("comments"), u = s;
            this._withRemoteTransaction(() => {
              d.delete(u);
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
    return this._comments = n, Sc(this), t.type === "comment" ? {
      index: s,
      markedComment: _N(t)
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
      jk,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      qt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Vk) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const h = p.insert, g = p.retain, y = p.delete, k = d.parent, b = d === r ? void 0 : k instanceof Cd && this._comments.find((T) => T.id === k.get("id"));
              if (Array.isArray(h)) {
                const T = f;
                h.slice().reverse().forEach((A) => {
                  const _ = A.get("id"), $ = A.get("type") === "thread" ? Cb(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (z) => ta(
                        z.get("content"),
                        z.get("author"),
                        z.get("id"),
                        z.get("timeStamp"),
                        z.get("deleted")
                      )
                    ),
                    _
                  ) : ta(
                    A.get("content"),
                    A.get("author"),
                    _,
                    A.get("timeStamp"),
                    A.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment($, b, T);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let T = 0; T < y; T++) {
                  const A = b === void 0 || b === !1 ? this._comments[f] : b.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(A, b);
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
function vN(e) {
  const [t, r] = ye(e.getComments());
  return B(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function MN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Z(null);
  return B(() => {
    i.current !== null && i.current.focus();
  }, []), B(() => {
    let s = null;
    const o = (l) => {
      l.key === "Escape" && e();
    }, a = (l) => {
      const d = l.target;
      i.current !== null && !i.current.contains(d) && n && e();
    }, c = i.current;
    return c !== null && (s = c.parentElement, s !== null && s.addEventListener("click", a)), window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o), s !== null && s?.removeEventListener("click", a);
    };
  }, [n, e]), /* @__PURE__ */ E("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Re("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ E("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ E(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ E("div", { className: "Modal__content", children: t })
  ] }) });
}
function EN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Un(
    /* @__PURE__ */ E(MN, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function _b() {
  const [e, t] = ye(null), r = xe(() => {
    t(null);
  }, []), n = Ze(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ E(EN, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const AN = {
  ...iy,
  paragraph: "CommentEditorTheme__paragraph"
};
function PN(...e) {
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
  return /* @__PURE__ */ E(
    "button",
    {
      disabled: i,
      className: PN(
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
function NN({
  className: e
}) {
  return /* @__PURE__ */ E(rh, { className: e || "ContentEditable__root" });
}
function wN({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ E("div", { className: t || "Placeholder__root", children: e });
}
const $p = Xp("INSERT_INLINE_COMMAND");
function ON({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = xe(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return B(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Fs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ E("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ E("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ E("i", { className: "icon add-comment" }) }) });
}
function RN({ onEscape: e }) {
  const [t] = ue();
  return B(() => t.registerCommand(
    Yp,
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
  return /* @__PURE__ */ E(th, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: AN
  }, children: /* @__PURE__ */ Re("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ E(
      zk,
      {
        contentEditable: /* @__PURE__ */ E(NN, { className: e }),
        placeholder: /* @__PURE__ */ E(wN, { children: s }),
        ErrorBoundary: ih
      }
    ),
    /* @__PURE__ */ E(Fk, { onChange: n }),
    /* @__PURE__ */ E(sh, {}),
    t !== !1 && /* @__PURE__ */ E(Lk, {}),
    /* @__PURE__ */ E(RN, { onEscape: r }),
    /* @__PURE__ */ E(Dk, {}),
    i !== void 0 && /* @__PURE__ */ E(nh, { editorRef: i })
  ] }) });
}
function vb(e, t) {
  return xe(
    (r, n) => {
      r.read(() => {
        e(Kk()), t(!Bk(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function $N({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = ye(""), [s, o] = ye(!1), a = Z(null), c = Ze(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), d = Eb(), u = xe(() => {
    e.getEditorState().read(() => {
      const g = O();
      if (P(g)) {
        l.current = g.clone();
        const y = g.anchor, k = g.focus, b = Nk(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), T = a.current;
        if (b !== null && T !== null) {
          const { left: A, bottom: _, width: w } = b.getBoundingClientRect(), $ = wk(e, b);
          let z = $.length === 1 ? A + w / 2 - 125 : A - 125;
          z < 10 && (z = 10), T.style.left = `${z}px`, T.style.top = `${_ + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const S = $.length, { container: W } = c, G = c.elements, ce = G.length;
          for (let te = 0; te < S; te++) {
            const qe = $[te];
            let Se = G[te];
            Se === void 0 && (Se = document.createElement("span"), G[te] = Se, W.appendChild(Se));
            const V = `position:absolute;top:${qe.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${qe.left}px;height:${qe.height}px;width:${qe.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Se.style.cssText = V;
          }
          for (let te = ce - 1; te >= S; te--) {
            const qe = G[te];
            W.removeChild(qe), G.pop();
          }
        }
      }
    });
  }, [e, c]);
  Fs(() => {
    u();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, u]), B(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        Cb(g, [ta(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = vb(i, o);
  return /* @__PURE__ */ Re("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ E(
      Sb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Re("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ E(vn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ E(
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
function qN({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = ye(""), [s, o] = ye(!1), a = Z(null), c = Eb(), l = vb(i, o);
  return /* @__PURE__ */ Re(zn, { children: [
    /* @__PURE__ */ E(
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
    /* @__PURE__ */ E(
      vn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(ta(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(Tk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ E("i", { className: "send" })
      }
    )
  ] });
}
function Mb({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Re(zn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Re("div", { className: "Modal__content", children: [
      /* @__PURE__ */ E(
        vn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ E(
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
function qp({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = ye(0);
  B(() => {
    const d = () => {
      s(performance.timeOrigin + performance.now());
    };
    d();
    const u = window.setInterval(d, 6e4);
    return () => {
      window.clearInterval(u);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = _b();
  return /* @__PURE__ */ Re("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Re("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ E("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Re("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ E("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Re(zn, { children: [
      /* @__PURE__ */ E(
        vn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ E(
              Mb,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ E("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function IN({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ue(), [a, c] = ye(0), [l, d] = _b(), u = Ze(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return B(() => {
    const f = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(f);
    };
  }, [a]), /* @__PURE__ */ E("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Re(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(g)[0], b = se(k);
                Ae(b) && b.selectStart();
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
          /* @__PURE__ */ Re("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Re("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ E("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ E(
              vn,
              {
                onClick: () => {
                  d("Delete Thread", (g) => /* @__PURE__ */ E(
                    Mb,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: g
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ E("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ E("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((g) => /* @__PURE__ */ E(
            qp,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            g.id
          )) }),
          /* @__PURE__ */ E("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ E(
            qN,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ E(
      qp,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function LN({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ Re("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ E("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ E("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ E(
      IN,
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
function Eb() {
  const e = oh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function DN({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = oh(), [a] = ue(), c = Ze(() => {
    const z = new SN(a, s);
    return r && z.registerOnChange(r), t?.(z), z;
  }, [a, s, r, t]), l = vN(c), d = Ze(() => /* @__PURE__ */ new Map(), []), [u, f] = ye(), [p, h] = ye([]), [g, y] = ye(!1), [k, b] = ye(!1), { yjsDocMap: T } = o;
  B(() => {
    if (e) {
      const z = e("comments", T);
      return c.registerCollaboration(z);
    }
    return () => {
    };
  }, [c, e, T]);
  const A = xe(() => {
    a.update(() => {
      const z = O();
      z !== null && (z.dirty = !0);
    }), y(!1);
  }, [a]), _ = xe(
    (z, S) => {
      if (z.type === "comment") {
        const W = c.deleteCommentOrThread(z, S);
        if (!W)
          return;
        const { markedComment: G, index: ce } = W;
        c.addComment(G, S, ce);
      } else {
        c.deleteCommentOrThread(z);
        const W = S !== void 0 ? S.id : z.id, G = d.get(W);
        G !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ce of G) {
              const te = se(ce);
              Ae(te) && (te.deleteID(hn, W), te.hasNoIDsForEveryType() && Ao(te));
            }
          });
        });
      }
    },
    [c, a, d]
  ), w = xe(
    (z, S, W, G) => {
      c.addComment(z, W), S && (a.update(() => {
        P(G) && _h(G, hn, z.id);
      }), y(!1));
    },
    [c, a]
  );
  B(() => {
    const z = [];
    let S;
    for (const W of p) {
      const G = d.get(W);
      if (G !== void 0)
        for (const ce of G) {
          const te = a.getElementByKey(ce);
          te !== null && (te.classList.add("selected"), z.push(te), S = window.setTimeout(() => {
            b(!0);
          }, 0));
        }
    }
    return () => {
      S !== void 0 && window.clearTimeout(S);
      for (const W of z)
        W.classList.remove("selected");
    };
  }, [p, a, d]), B(() => {
    if (!a.hasNodes([dt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const z = /* @__PURE__ */ new Map();
    return Ie(
      eh(
        a,
        dt,
        (S) => _s(S.getTypedIDs()),
        (S, W) => {
          for (const [G, ce] of Object.entries(S.getTypedIDs()))
            ce.forEach((te) => {
              W.addID(G, te);
            });
        }
      ),
      a.registerMutationListener(
        dt,
        (S) => {
          a.getEditorState().read(() => {
            for (const [W, G] of S) {
              const ce = se(W);
              let te = [];
              G === "destroyed" ? te = z.get(W) ?? [] : Ae(ce) && (te = ce.getTypedIDs()[hn] ?? []);
              for (const qe of te) {
                let Se = d.get(qe);
                z.set(W, te), G === "destroyed" ? Se !== void 0 && (Se.delete(W), Se.size === 0 && d.delete(qe)) : (Se === void 0 && (Se = /* @__PURE__ */ new Set(), d.set(qe, Se)), Se.has(W) || Se.add(W));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: S, tags: W }) => {
        S.read(() => {
          const G = O();
          let ce = !1, te = !1;
          if (P(G)) {
            const qe = G.anchor.getNode();
            if (M(qe)) {
              const Se = Ox(qe, hn, G.anchor.offset) ?? [];
              Se !== null && (h(Se), ce = !0), G.isCollapsed() || (f(qe.getKey()), te = !0);
            }
          }
          ce || h((qe) => qe.length === 0 ? qe : []), te || f(null), !W.has("collaboration") && P(G) && y(!1);
        });
      }),
      a.registerCommand(
        $p,
        () => {
          const S = window.getSelection();
          return S !== null && S.removeAllRanges(), y(!0), !0;
        },
        Bn
      )
    );
  }, [a, d]);
  const $ = () => {
    a.dispatchCommand($p, void 0);
  };
  return /* @__PURE__ */ Re(zn, { children: [
    g && Un(
      /* @__PURE__ */ E(
        $N,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: w
        }
      ),
      document.body
    ),
    u != null && !g && Un(
      /* @__PURE__ */ E(
        ON,
        {
          anchorKey: u,
          editor: a,
          showComments: k,
          onAddComment: $
        }
      ),
      document.body
    ),
    n !== null && Un(
      /* @__PURE__ */ E(
        vn,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => b(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ E("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && Un(
      /* @__PURE__ */ E(
        LN,
        {
          comments: l,
          submitAddComment: w,
          deleteCommentOrThread: _,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function UN() {
  const e = Z(void 0), t = xe((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function FN(e, t) {
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
function zN(e, t) {
  B(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      FN(r, t);
    };
  }, [t, e]);
}
const Ow = Mn(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = ye(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, y = (h ?? !1) || ws(g), [k, b] = UN();
  zN(f, k), B(() => {
    if (process.env.NODE_ENV !== "production") {
      const _ = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(_), p || console.warn(_);
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
    setTransientInput(_) {
      n.current?.setTransientInput(_);
    },
    setUsj(_) {
      n.current?.setUsj(_);
    },
    applyUpdate(_, w) {
      n.current?.applyUpdate(_, w);
    },
    replaceEmbedUpdate(_, w) {
      return n.current?.replaceEmbedUpdate(_, w);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(_) {
      n.current?.setSelection(_);
    },
    setAnnotation(_, w, $, z, S) {
      typeof z == "function" || z === void 0 ? n.current?.setAnnotation(_, w, $, z, S) : n.current?.setAnnotation(_, w, $, z);
    },
    removeAnnotation(_, w) {
      n.current?.removeAnnotation(_, w);
    },
    formatPara(_) {
      n.current?.formatPara(_);
    },
    getElementByKey(_) {
      return n.current?.getElementByKey(_);
    },
    removeCharacterMarker(_) {
      return n.current?.removeCharacterMarker(_) ?? !1;
    },
    replaceCharacterMarker(_, w) {
      return n.current?.replaceCharacterMarker(_, w) ?? !1;
    },
    extendCharacterMarker(_, w) {
      return n.current?.extendCharacterMarker(_, w) ?? !1;
    },
    insertMarker(_) {
      return n.current?.insertMarker(_);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(_, w) {
      return n.current?.applyMarkerMenuSelection(_, w);
    },
    splitParagraphWithMarker(_) {
      n.current?.splitParagraphWithMarker(_);
    },
    commitTypedMarker(_, w) {
      return n.current?.commitTypedMarker(_, w) ?? !1;
    },
    commitTypedCloser(_) {
      return n.current?.commitTypedCloser(_) ?? !1;
    },
    insertNote(_, w, $) {
      n.current?.insertNote(_, w, $);
    },
    selectNote(_) {
      n.current?.selectNote(_);
    },
    selectAfterNote(_) {
      n.current?.selectAfterNote(_);
    },
    selectNoteTextOffset(_, w, $) {
      n.current?.selectNoteTextOffset(_, w, $);
    },
    getNoteOps(_) {
      return n.current?.getNoteOps(_);
    },
    getOpsAfterNote(_) {
      return n.current?.getOpsAfterNote(_);
    },
    takeOpsAfterNote(_) {
      return n.current?.takeOpsAfterNote(_);
    },
    getNoteIndex(_) {
      return n.current?.getNoteIndex(_);
    },
    getNoteKey(_) {
      return n.current?.getNoteKey(_);
    },
    highlightNote(_) {
      n.current?.highlightNote(_);
    },
    setComments(_) {
      k.current?.setComments(_), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const T = xe(
    (_, w, $, z) => {
      if (!d) return;
      const S = k.current?.getComments();
      d(_, S, w, $, z);
    },
    [k, d]
  ), A = xe(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const _ = k.current?.getComments();
    l(_);
  }, [k, i, l]);
  return B(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ E(Uk, { children: /* @__PURE__ */ Re(xb, { ref: n, onUsjChange: T, ...f, children: [
    /* @__PURE__ */ E(
      DN,
      {
        setCommentStore: b,
        onChange: A,
        showCommentsContainerRef: y ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ E("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Dn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function KN(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function BN(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const jN = /^[#\w().,%/\s-]+$/;
function Hr(e) {
  return e != null;
}
const VN = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, WN = {
  left: "right",
  right: "left"
}, HN = "var(--usj-font-fallback, serif)";
function Ab(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${KN(i)}"`).join(", ")}, ${HN}`;
}
const Ml = ".editor-input.usfm", GN = /^[\w.#[\]="':()>+~*,\s-]+$/;
function JN(e) {
  return GN.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Ml}".`
  ), Ml);
}
function YN(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Ab(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (jN.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Hr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Hr(t.firstLineIndent) && s.push(`text-indent: ${Dn(t.firstLineIndent * 20 * r)}vw`), Hr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Dn(t.leftMargin * 20 * r)}vw`), Hr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Dn(t.rightMargin * 20 * r)}vw`
  ), Hr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Dn(t.spaceBefore * r)}pt`), Hr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Dn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = VN[n ? WN[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Ip = { c: 150, ca: 133, cp: 150 };
function Lp(e, t) {
  return e && Hr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function XN(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Hr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Lp(e.markers.c, Ip.c);
  return ["ca", "cp"].map((i) => {
    const s = Lp(
      e.markers[i],
      Ip[i]
    ), o = Dn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function Rw(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Ml } = t, s = JN(i), o = [], a = [];
  e.defaultFont && a.push(Ab(e.defaultFont)), Hr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Dn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = YN(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${BN(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...XN(e, s)), o.join(`
`);
}
export {
  Xg as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  ww as Editorial,
  xs as GENERATOR_NOTE_CALLER,
  ch as HIDDEN_NOTE_CALLER,
  Ow as Marginal,
  x as MarkerType,
  Yg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  _u as STANDARD_VIEW_MODE,
  $o as defaultStyleInfo,
  Nw as directionToNames,
  pS as filterAndRankItems,
  Rw as generateUsjCss,
  Aw as getDefaultViewMode,
  Ta as getDefaultViewOptions,
  p1 as getEnterMenuItems,
  f1 as getMarkerMenuItems,
  Pw as getViewMode,
  Mu as getViewOptions,
  ws as isBlockVerseLayout,
  fn as isInsertEmbedOpOfType,
  MS as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
