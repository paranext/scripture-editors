import { jsx as A, jsxs as Ee, Fragment as Un } from "react/jsx-runtime";
import { forwardRef as xn, useState as he, useRef as Y, useCallback as ye, useEffect as B, useMemo as We, memo as Hb, createContext as $p, useContext as Ip, Children as Gb, isValidElement as Jb, cloneElement as Yb, useImperativeHandle as oa, useLayoutEffect as js } from "react";
import { assertSafeKey as et, isValidBookCode as Xb, MARKER_OBJECT_PROPS as Qb, USJ_VERSION as ar, USJ_TYPE as cr, isUsjTextContentLocation as Zb, indexesFromUsjJsonPath as Lp, isUsjAttributeKeyLocation as ek, isUsjAttributeMarkerLocation as tk, isUsjClosingAttributeMarkerLocation as rk, isUsjMarkerLocation as nk, isUsjClosingMarkerLocation as ik, isUsjPropertyValueLocation as sk, getUsjDocumentLocationTypeName as ok, usjJsonPathFromIndexes as Nn, EMPTY_USJ as Dp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Je, $parseSerializedNode as Fn, DecoratorNode as Vs, ElementNode as fr, isHTMLElement as ei, createState as aa, $getState as se, $setState as St, $isRangeSelection as P, $isElementNode as I, $isTextNode as E, $getSelection as N, $isNodeSelection as ca, ParagraphNode as Ml, TextNode as He, $createTextNode as be, $getCommonAncestor as ak, $isLineBreakNode as ti, NODE_STATE_KEY as Ws, $getEditor as Tn, $hasUpdateTag as ck, $getNodeByKey as ne, $getRoot as De, $createRangeSelection as zn, $createPoint as sr, $setSelection as Ur, SELECTION_CHANGE_COMMAND as Dt, $getCharacterOffsets as El, KEY_DOWN_COMMAND as Pr, COMMAND_PRIORITY_HIGH as Me, HISTORY_MERGE_TAG as Al, CLICK_COMMAND as la, COMMAND_PRIORITY_EDITOR as Kn, DELETE_CHARACTER_COMMAND as ua, DELETE_WORD_COMMAND as Pl, DELETE_LINE_COMMAND as Eo, COMMAND_PRIORITY_NORMAL as Cr, CONTROLLED_TEXT_INSERTION_COMMAND as Pi, COMMAND_PRIORITY_CRITICAL as ke, PASTE_COMMAND as Gt, CUT_COMMAND as lr, REMOVE_TEXT_COMMAND as Up, isDOMNode as Fp, $getNearestNodeFromDOMNode as Vi, $isRootNode as zp, DROP_COMMAND as Nl, $isDecoratorNode as ri, COPY_COMMAND as Ni, COMMAND_PRIORITY_LOW as bt, getDOMSelection as lk, isSelectionWithinEditor as Kp, $createRangeSelectionFromDom as Bp, isDOMTextNode as uk, BLUR_COMMAND as wl, $addUpdateTag as vt, SKIP_DOM_SELECTION_TAG as $r, CLEAR_HISTORY_COMMAND as dk, INSERT_PARAGRAPH_COMMAND as vi, INSERT_LINE_BREAK_COMMAND as jp, $getPreviousSelection as fk, $isRootOrShadowRoot as pk, CAN_UNDO_COMMAND as hk, CAN_REDO_COMMAND as gk, DRAGSTART_COMMAND as mk, $createNodeSelection as Vp, getDOMSelectionFromTarget as yk, $onUpdate as Wp, KEY_ENTER_COMMAND as Hp, LineBreakNode as Gp, $copyNode as bk, FOCUS_COMMAND as kk, createEditor as xk, SELECT_ALL_COMMAND as Tk, isExactShortcutMatch as Ck, getDOMTextNode as _k, KEY_ESCAPE_COMMAND as Jp, createCommand as Yp, HISTORIC_TAG as Ol, UNDO_COMMAND as Xp, REDO_COMMAND as Qp, CLEAR_EDITOR_COMMAND as vk } from "lexical";
import { addClassNamesToElement as fi, removeClassNamesFromElement as ja, $findMatchingParent as Ae, $dfsIterator as da, $dfs as ni, mergeRegister as Oe, registerNestedElementResolver as Zp, $unwrapNode as Mc, IS_APPLE as wi } from "@lexical/utils";
import { useLexicalNodeSelection as Sk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as It } from "fast-equals";
import hs from "quill-delta";
import { copyToClipboard as Mk, $getLexicalContent as Ek } from "@lexical/clipboard";
import { graphemeSegments as Ak } from "unicode-segmenter/grapheme";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { TreeView as Pk } from "@lexical/react/LexicalTreeView";
import * as Nk from "react-dom";
import { createPortal as Dn } from "react-dom";
import { LexicalComposer as eh } from "@lexical/react/LexicalComposer";
import { ContentEditable as th } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as rh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as nh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as ih } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as wk } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Ok, createDOMRange as Rk, createRectsFromDOMRange as qk } from "@lexical/selection";
import { autoUpdate as $k, computePosition as Ik, shift as Lk, flip as Dk } from "@floating-ui/dom";
import { $generateNodesFromDOM as Uk } from "@lexical/html";
import { AutoFocusPlugin as Fk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as zk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as sh, LexicalCollaboration as Kk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Bk } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as jk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Vk, $isRootTextContentEmpty as Wk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Hk } from "@lexical/yjs";
import { Array as xd, Map as Td, YArrayEvent as Gk } from "yjs";
const Va = (e) => Je(Fn(e)), Jk = {
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
  return Jk[e];
}
const D = " ", Ao = "​", Qt = D, Rl = `${D}|`, Lt = "p", _s = "+", ah = "-", Po = "chapter", Ec = "verse", Cd = "invalid", Yk = "text-spacing", Xk = "formatted-font", Qk = "marker-", ql = "external-usj-mutation", ch = "selection-change", Mt = "cursor-change", Ac = "annotation-change", vs = "delta-change", lh = "marker-settle", Zk = [
  ql,
  ch,
  Mt,
  Ac,
  vs
], Bn = "zmsc-s", Si = "zmsc-e", ex = [Bn, Si], tx = [
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
  Bn,
  Si
], uh = 1, $l = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], rx = $l.filter((e) => e !== "sid" && e !== "eid");
class ur extends Vs {
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
    return new ur(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return fh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (tx.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
  return ex.includes(e);
}
function fh(e, t, r, n, i) {
  return Je(new ur(e, t, r, n, void 0, i));
}
function Ze(e) {
  return e instanceof ur;
}
const Il = "f", nx = [
  // Footnote
  Il,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function fo(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const ix = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], ph = 1;
class Pe extends fr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Il, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (fo(t) === "crossref" ? ah : _s), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Pe(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => ox(t) ? {
        conversion: sx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ll().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (nx.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", fo(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", fo(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ei(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", fo(this.getMarker()))), { element: r };
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
function sx(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Ll(t, r, n) };
}
function Ll(e, t, r, n, i) {
  return Je(new Pe(e, t, r, n, i));
}
function ox(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Pe.isValidMarker(t) && e.classList.contains(Pe.getType());
}
function K(e) {
  return e instanceof Pe;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var x;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(x || (x = {}));
const Pc = {
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
}, wn = {
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
  p: { children: wn },
  q: { children: wn },
  q1: { children: wn },
  q2: { children: wn },
  q3: { children: wn },
  q4: { children: wn },
  b: { children: wn },
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
function _r(e) {
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
const hh = "v", gh = "c", On = "fig", vd = "tr", Nc = "esb", mh = "esbe", Sd = "periph", Md = "alt", Ed = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, ax = {
  "": "start",
  c: "center",
  r: "end"
};
function Ad(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Pd(e) {
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
const cx = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function lx(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Ao && s + 1 < e.length && Pd(e[s + 1]) || (Pd(o) ? (r || (i = t.length, t += o), r = !0) : cx.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function ux(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function dx(e, t) {
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
const fx = /^(?:qt[1-5]?|ts)-[se]$/;
function Dl(e) {
  return fx.test(e) || dh(e);
}
function Wa(e, t) {
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
function px(e, t, r) {
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
      const h = e.indexOf("\\", i), g = h === -1 ? e.length : h;
      a(lx(e.slice(i, g))), i = g;
      continue;
    }
    const c = i, { name: l, next: d } = dx(e, i + 1);
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
    if (l === hh) {
      const { word: h, next: g } = Wa(e, i);
      i = g, n.push({ kind: "verse", number: h });
      continue;
    }
    if (l === gh) {
      const { word: h, next: g } = Wa(e, i);
      i = g, s = void 0, n.push({ kind: "chapter", number: h });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === x.Note || m === void 0 && Pe.isValidMarker(l)) {
      const { word: h, next: g } = Wa(e, i);
      i = g, s = l, n.push({ kind: "note", marker: l, caller: h || "+" });
      continue;
    }
    if (m === x.Milestone || m === void 0 && Dl(l)) {
      const h = Tx(e, c, l, i);
      if (h)
        n.push(h.token), h.ejectedText && o(h.ejectedText), i = h.next;
      else {
        const g = e.indexOf("\\", i), b = g === -1 ? e.length : g;
        o(e.slice(c, b)), i = b;
      }
      continue;
    }
    m === x.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : m === x.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : No(p) ? (u(), No(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === Nc || l === mh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Nd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function No(e) {
  return Object.hasOwn(Nd, e) ? Nd[e] : void 0;
}
function hx(e) {
  return No(e) !== void 0;
}
const gx = /([-\w]+)\s*=\s*"(.*?)"/g, mx = /[\s\u200B]*[\n\r][\s\u200B]*/g, yh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function fa(e) {
  return yh[e];
}
const yx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function bx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Ss(e, t, r = yh[t]) {
  const n = e.replace(mx, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(gx)];
  if (s.length > 0) {
    if (!bx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      yx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function pa(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function kx(e) {
  const t = jr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function xx(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Ss(e.slice(n + 1, i), r, pa(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Tx(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Ss(s.slice(o + 1), r, pa(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = xx(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function kr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", D);
}
function on(e) {
  return e.content || (e.content = []), e.content;
}
function jr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d, u;
  const f = () => d ? on(d) : u ? on(u) : r;
  let p = !1;
  const m = () => {
    if (s)
      return o.length > a ? on(o[o.length - 1].object) : on(s);
    if (o.length > 0)
      return on(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: Lt, content: [] }, f().push(i);
    }
    return on(i);
  }, h = (ee) => {
    const R = m();
    typeof ee == "string" && typeof R[R.length - 1] == "string" ? R[R.length - 1] = R[R.length - 1] + ee : R.push(ee);
  }, g = (ee) => {
    for (let R = ee; R < o.length; R += 1) {
      const te = o[R].object;
      te.closed = "false";
    }
  }, b = () => {
    g(0), o.length = 0;
  }, k = (ee) => {
    s && (o.length > a && (g(a), o.length = a), a = 0, ee || (s.closed = "false"), s = void 0);
  }, _ = () => {
    c = void 0, l = void 0;
  }, M = (ee, R, te) => {
    b();
    const [, ce, Ne, lt] = te, Z = {
      type: "table:cell",
      marker: lt ? R.slice(0, R.indexOf("-")) : R,
      align: ax[ce],
      content: []
    };
    lt && (Z.colspan = String(Number(lt) + 1 - Number(Ne))), on(ee).push(Z), i = Z;
  }, C = (ee) => {
    d && (ee || (d.closed = "false"), d = void 0);
  }, $ = () => {
    u = void 0;
  };
  let w, z = "", v;
  const V = () => {
    z && h(kr(z)), z = "";
  }, H = (ee = !1) => {
    w?.type === "sidebar" ? z = "" : ee && z.endsWith(`
`) && (z = z.slice(0, -1)), w = void 0, V();
  }, fe = () => {
    if (!v)
      return;
    const ee = { type: "char", marker: v.marker, content: [] };
    v.value && (ee.content = [kr(v.value)]), m().push(ee), o.push({ object: ee }), v = void 0;
  }, Q = (ee, R) => {
    p = !1, _(), b(), k(!1), i = { type: "para", marker: ee, content: [] }, R && (i.content = [kr(R)]), f().push(i);
  }, Ue = () => {
    v && (Q(v.marker, v.value), v = void 0);
  };
  let _e;
  const hr = (ee) => {
    if (!_e)
      return;
    let { value: R } = _e;
    _e = void 0, ee && R.endsWith(`
`) && (R = R.slice(0, -1));
    const te = R.indexOf("|"), ce = te >= 0 ? Ss(R.slice(te + 1), Sd) : void 0, Ne = te >= 0 ? R.slice(0, te) : R, lt = te >= 0 && (!ce || !!Ne && !!ce[Md]), Z = lt ? void 0 : ce, Ye = lt ? R : Ne, gr = {
      type: "periph",
      ...Ye ? { [Md]: kr(Ye) } : {},
      ...Z
    };
    gr.content = [], f().push(gr), u = gr, i = void 0;
  };
  let Ve;
  const Qr = () => {
    if (Ve) {
      if (Ve.shape === "para")
        Q(On, Ve.value);
      else {
        const ee = { type: "char", marker: On, content: [] };
        Ve.value && (ee.content = [kr(Ve.value)]), m().push(ee), o.push({ object: ee });
      }
      Ve = void 0;
    }
  }, Zr = px(e, t?.getMarker ?? _r, n);
  for (let ee = 0; ee < Zr.length; ee++) {
    const R = Zr[ee];
    if (v) {
      if (R.kind === "text") {
        v.value += R.text;
        continue;
      }
      if (v.shape === "char" && R.kind === "end" && R.marker.replace(/^\+/, "") === v.marker) {
        if (v.value.trim() === "") {
          m().push({ type: "char", marker: v.marker, content: [] }), v = void 0, H();
          continue;
        }
        Object.assign(v.target, {
          [v.attrName]: kr(v.value.trim())
        });
        const te = v.marker;
        if (v = void 0, te === "ca") {
          const ce = Zr[ee + 1];
          ce?.kind === "text" && /^[\s\u200B]*$/.test(ce.text) && ee++;
        }
        continue;
      }
      if (v.shape === "para" && (R.kind === "para" || R.kind === "chapter")) {
        const te = v.value.replace(/[\s\u200B]+$/, "");
        te === "" ? (Q(v.marker), v = void 0) : (Object.assign(v.target, { [v.attrName]: kr(te) }), v = void 0);
      } else {
        w = void 0, (R.kind === "para" || R.kind === "chapter") && v.value.endsWith(`
`) && (v.value = v.value.slice(0, -1)), v.shape === "para" ? Ue() : fe(), ee--;
        continue;
      }
    }
    if (_e) {
      if (R.kind === "text" || R.kind === "optbreak") {
        _e.value += R.kind === "text" ? R.text : "//";
        continue;
      }
      hr(R.kind === "para" || R.kind === "chapter"), ee--;
      continue;
    }
    if (Ve) {
      if (R.kind === "text" || R.kind === "optbreak") {
        Ve.value += R.kind === "text" ? R.text : "//";
        continue;
      }
      if (R.kind === "end" && R.marker.replace(/^\+/, "") === On) {
        const te = Ve.value.indexOf("|"), ce = te >= 0 ? Ss(Ve.value.slice(te + 1), On) : void 0;
        if (ce) {
          const Ne = {};
          for (const [Ye, gr] of Object.entries(ce))
            Ne[Ye === "src" ? "file" : Ye] = gr;
          const lt = {
            type: "figure",
            marker: On,
            ...Ne
          }, Z = Ve.value.slice(0, te);
          Z && (lt.content = [kr(Z)]), h(lt), Ve = void 0;
          continue;
        }
      }
      Qr(), ee--;
      continue;
    }
    if (w)
      if (R.kind === "text") {
        if (R.text.includes(`
`) && /^[\s\u200B]*$/.test(R.text)) {
          z += R.text;
          continue;
        }
        H();
      } else if (R.kind === "charOpen" || R.kind === "para") {
        const te = R.kind === "para" || !R.isNested ? No(R.marker) : void 0;
        if (te && te.targetTypes.includes(w.type)) {
          z = "", v = {
            target: w,
            attrName: te.attrName,
            marker: R.marker,
            shape: te.shape,
            value: ""
          };
          continue;
        }
        H(R.kind === "para");
      } else
        H(R.kind === "chapter");
    if (!s && !n && (R.kind === "charOpen" && !R.isNested && R.marker === On || R.kind === "para" && R.marker === On)) {
      b(), Ve = { shape: R.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (R.kind) {
      case "text": {
        let te = R.text;
        if (!s && te.endsWith(`
`)) {
          const ce = Zr[ee + 1];
          (ce === void 0 || ce.kind === "para" || ce.kind === "chapter") && (te = te.slice(0, -1));
        }
        te && h(kr(te));
        break;
      }
      case "para": {
        const te = !s && !n;
        if (te && R.marker === vd) {
          b(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: vd, content: [] }, on(c).push(l), i = l, p = !1;
          break;
        }
        if (te && l) {
          const ce = Ed.exec(R.marker);
          if (ce && Ad(ce)) {
            M(l, R.marker, ce);
            break;
          }
        }
        if (_(), !n && R.marker === Nc) {
          b(), k(!1), C(!1);
          const ce = {
            type: "sidebar",
            marker: Nc,
            content: []
          };
          f().push(ce), d = ce, i = void 0, w = d, p = !1;
          break;
        }
        if (R.marker === mh && d) {
          b(), k(!1), C(!0), i = void 0;
          break;
        }
        if (!n && R.marker === Sd) {
          b(), k(!1), C(!1), $(), _e = { value: "" }, i = void 0, p = !1;
          break;
        }
        Q(R.marker);
        break;
      }
      case "verse": {
        k(!1);
        const te = { type: "verse", marker: hh, number: R.number };
        h(te), w = te;
        break;
      }
      case "chapter": {
        b(), k(!1), _(), C(!1), $(), i = void 0;
        const te = {
          type: "chapter",
          marker: gh,
          number: R.number
        };
        r.push(te), w = te, p = !0;
        break;
      }
      case "note": {
        k(!1);
        const te = m();
        s = { type: "note", marker: R.marker, caller: R.caller, content: [] }, a = o.length, te.push(s), w = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !R.isNested) {
          const Ne = Ed.exec(R.marker);
          if (Ne && Ad(Ne)) {
            M(l, R.marker, Ne);
            break;
          }
        }
        if (!R.isNested) {
          const Ne = s ? a : 0;
          g(Ne), o.length = Ne;
        }
        const te = m(), ce = { type: "char", marker: R.marker, content: [] };
        te.push(ce), o.push({ object: ce });
        break;
      }
      case "end": {
        const te = R.marker.replace(/^\+/, ""), ce = s ? a : 0, Ne = o.findLastIndex((lt, Z) => Z >= ce && lt.object.marker === te);
        Ne >= 0 ? (Cx(o[Ne].object), g(Ne + 1), o.length = Ne) : s && s.marker === te ? k(!0) : (g(ce), o.length = ce, h({ type: "unmatched", marker: `${R.marker}*` }));
        break;
      }
      case "milestone":
        h({ type: "ms", marker: R.marker, ...R.attributes });
        break;
      case "optbreak":
        h({ type: "optbreak" });
        break;
    }
  }
  if (_e && hr(!0), Ve && Qr(), v)
    if (v.shape === "para") {
      const ee = v.value.replace(/[\s\u200B]+$/, "");
      ee === "" ? Q(v.marker) : Object.assign(v.target, { [v.attrName]: kr(ee) }), v = void 0;
    } else
      v.value.endsWith(`
`) && (v.value = v.value.slice(0, -1)), fe();
  b(), k(!1), C(!1);
  const vn = (ee) => {
    for (const R of ee)
      typeof R != "string" && R.content && (vn(R.content), R.content.length === 0 && delete R.content);
  };
  return vn(r), r;
}
function Cx(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Ss(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const jn = aa("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), fn = aa("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ue = aa("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Nr = "marker-trailing-space", bh = 1, _x = "marker", Ul = aa("isGutterMarker", {
  parse: (e) => e === !0
});
class Vr extends Vs {
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
    return new Vr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Ex(t) ? {
        conversion: vx,
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
    return r && ei(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
function vx(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Fr(t, r) };
}
function Fr(e, t) {
  return Je(new Vr(e, t));
}
function Sx(e) {
  return St(Fr(_x, e), Ul, !0);
}
function Mx(e) {
  return Ut(e) && se(e, Ul);
}
function Ex(e) {
  return e?.tagName === "span";
}
function Ut(e) {
  return e instanceof Vr;
}
function kh(e) {
  return e?.type === Vr.getType();
}
const dn = "internal-comment", Ax = [dn], xh = Object.freeze({}), wc = Object.freeze({}), Oc = Object.freeze({}), Rc = Object.freeze({}), qc = Object.freeze({}), Px = 1, pi = /* @__PURE__ */ new Map(), os = /* @__PURE__ */ new Map(), hi = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map();
class ot extends fr {
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
    super(o), this.__typedIDs = po(t), this.__typedOnClicks = Ha(r), this.__typedOnRemoves = Ga(n), this.__typedOnMouseEnters = Ja(i), this.__typedOnMouseLeaves = Ya(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = po(t.__typedIDs), n = Ha(t.__typedOnClicks), i = Ga(t.__typedOnRemoves), s = Ja(t.__typedOnMouseEnters), o = Ya(t.__typedOnMouseLeaves);
    return new ot(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Ax.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ms().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Px
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      fi(n, Rn(t.theme.typedMark, a)), c.length > 1 && fi(n, Rn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        fi(n, Rn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = Rn(n.theme.typedMark, s), u = Rn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && fi(r, d) : l === 0 && ja(r, d), c === 1 ? l === 2 && fi(r, u) : l === 1 && ja(r, u));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || ja(r, Rn("annotationId", m));
      for (const m of a)
        f.has(m) || fi(r, Rn("annotationId", m));
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
    return Ce(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = po(r.__typedIDs);
    r.__typedIDs = po(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && wo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Ha(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Ce(t) ? pi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ga(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Ce(t) ? os.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Ja(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Ce(t) ? hi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Ya(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Ce(t) ? gi.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Ce(a))
      return;
    et(t), et(r);
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
    if (!Ce(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && wo(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Ms(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), pi.delete(r.getKey()), os.delete(r.getKey()), hi.delete(r.getKey()), gi.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = pi.get(this.getKey());
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
    const n = hi.get(this.getKey());
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
    const n = gi.get(this.getKey());
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
      const t = pi.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      pi.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    pi.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    et(t), et(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = an(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = an(this.__typedOnClicks, t);
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
      const t = os.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      os.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    os.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    et(t), et(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = an(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = an(this.__typedOnRemoves, t);
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
      const t = hi.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      hi.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    hi.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    et(t), et(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = an(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = an(this.__typedOnMouseEnters, t);
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === qc) {
      const t = gi.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      gi.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    gi.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    et(t), et(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = an(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = an(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === qc) {
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
    const i = Nx(t, r);
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
    for (; Ce(t) && Od(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Ce(r) && Od(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = wx(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ox(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Rx(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = qx(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function po(e = xh) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (et(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      et(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Ha(e) {
  if (!e || e === wc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    et(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      et(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ga(e) {
  if (!e || e === Oc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    et(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      et(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ja(e) {
  if (!e || e === Rc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    et(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      et(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ya(e) {
  if (!e || e === qc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    et(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      et(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function an(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function wd(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Nx(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Od(e, t) {
  const r = wd(e), n = wd(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Ox(e, t) {
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
function Rx(e, t) {
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
function qx(e, t) {
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
function Rn(e, t) {
  return `${e}-${t}`;
}
function Rd(e) {
  return `external-${e}`;
}
function Ms(e, t, r, n, i) {
  return Je(new ot(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof ot;
}
function Th(e) {
  return e?.type === ot.getType();
}
function wo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Ch(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let m, h;
  for (let g = 0; g < d; g++) {
    const b = a[g];
    if (I(h) && h.isParentOf(b))
      continue;
    const k = g === 0, _ = g === d - 1;
    let M = null;
    if (E(b)) {
      const C = b.getTextContentSize(), $ = k ? f : 0, w = _ ? p : C;
      if ($ === 0 && w === 0)
        continue;
      const z = b.splitText($, w);
      M = z.length > 1 && (z.length === 3 || k && !_ || w === C) ? z[1] : z[0];
    } else {
      if (Ce(b))
        continue;
      I(b) && b.isInline() && (M = b);
    }
    if (M !== null) {
      if (M && M.is(m))
        continue;
      const C = M.getParent();
      (C == null || !C.is(m)) && (h = void 0), m = C, h === void 0 && (h = Ms(), h.addID(t, r, n, i, s, o), M.insertBefore(h)), h.append(M);
    } else
      m = void 0, h = void 0;
  }
  t === dn && I(h) && (u ? h.selectStart() : h.selectEnd());
}
function $x(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Ce(n))
      return n.getTypedIDs()[t];
    if (E(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Ce(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Ix = ["type", "marker", "content"], $c = "unknown", _h = 1, Lx = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ii extends fr {
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
    return new ii(r, n, i, s);
  }
  static importDOM() {
    return {
      [$c]: (t) => Ux(t) ? {
        conversion: Dx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Fl().updateFromJSON(t);
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
    return Lx.has(this.getTag());
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
    const t = document.createElement($c);
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
    if (ca(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function Dx(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Fl(t, r) };
}
function Fl(e, t, r) {
  return Je(new ii(e, t, r));
}
function Ux(e) {
  return e?.tagName.toLowerCase() === $c;
}
function Ke(e) {
  return e instanceof ii;
}
const vh = 1, Fx = "attribute-run";
function Xa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Wr extends fr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Wr(r, n);
  }
  static importJSON(t) {
    return Sh(t.runKind).updateFromJSON(t);
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
    t.classList.add(Fx);
    const r = Xa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Xa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Xa(this.__runKind);
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
function Sh(e) {
  return Je(new Wr(e));
}
function Ie(e) {
  return e instanceof Wr;
}
const Es = "id", Mh = 1, zx = [
  "type",
  "marker",
  "code",
  "content"
];
class Ft extends fr {
  __marker = Es;
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
    return new Ft(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Eh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Xb(t);
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
  return Je(new Ft(e, t));
}
function Te(e) {
  return e instanceof Ft;
}
function zl(e) {
  return e?.type === Ft.getType();
}
const Oo = "c", Ah = 1, Kx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class jt extends fr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Oo, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new jt(r, n, i, s, o, a);
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
  /**
   * A chapter holds its own marker bytes and nothing else, and serializes as its number alone, so
   * it must never take in another block's content: whatever landed in it would stay on screen and
   * be dropped on save. Reporting that it cannot be empty is what keeps Lexical from treating it as
   * a block to merge a following paragraph into when a deletion starts on the chapter line, and
   * what removes the chapter once every byte of its marker is deleted. Editors that let the caret
   * into a chapter must handle splits there themselves, since Lexical then has no block to split
   * (see the platform editor's `chapterLine.utils.ts`).
   */
  canBeEmpty() {
    return !1;
  }
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Po, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
  return Je(new jt(e, t, r, n, i));
}
function we(e) {
  return e instanceof jt;
}
function Bx(e) {
  return e?.type === jt.getType();
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
], jx = [
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
], Oh = 1, Vx = ["type", "marker", "content"];
class xe extends fr {
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
    return new xe(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (jx.includes(t) || (r?.includes(t) ?? !1));
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
    return xe.isValidFootnoteMarker(t) || xe.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Hx(t) ? {
        conversion: Wx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return zr().updateFromJSON(t);
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
    return r && ei(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = this.getUnknownAttributes()?.closed === "false", i = zr(this.getMarker(), n ? { closed: "false" } : void 0);
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
function Wx(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: zr(t) };
}
function zr(e, t) {
  return Je(new xe(e, t));
}
function Hx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return xe.isValidMarker(t) && e.classList.contains(xe.getType());
}
function F(e) {
  return e instanceof xe;
}
function Gx(e) {
  return e?.type === xe.getType();
}
const Rh = 1, Jx = "c", qh = "span";
class wr extends Vs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Jx, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new wr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => $h(t) ? {
        conversion: Yx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kl().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Po, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ei(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Po, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Xt(this.getMarker(), this.getNumber()) : this.getNumber();
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
function Yx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Kl(t) };
}
function Kl(e, t, r, n, i, s) {
  return Je(new wr(e, t, r, n, i, s));
}
function $h(e) {
  return e ? e.classList.contains(Po) && e.tagName.toLowerCase() === qh : !1;
}
function Hs(e) {
  return e instanceof wr;
}
function Xx(e) {
  return e?.type === wr.getType();
}
const Ih = 1;
class pn extends Ml {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new pn(t.__key);
  }
  static importJSON(t) {
    return Yt().updateFromJSON(t);
  }
  getMarker() {
    return Lt;
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
    const n = Yt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Yt() {
  return Je(new pn());
}
function Sr(e) {
  return e instanceof pn;
}
function ha(e) {
  return e?.type === pn.getType();
}
const Qx = [
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
  Lt,
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
], Lh = 1, Zx = ["type", "marker", "content"];
class ct extends Ml {
  __marker;
  __unknownAttributes;
  constructor(t = Lt, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new ct(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Qx.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: eT,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Vn().updateFromJSON(t);
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
    return r && ei(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = Vn(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function eT(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Vn(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Vn(e, t) {
  return Je(new ct(e, t));
}
function le(e) {
  return e instanceof ct;
}
function Bl(e) {
  return e?.type === ct.getType();
}
const Ro = "v", Dh = 1, tT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class kt extends He {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Ro, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new kt(r, n, i, s, o, a, c);
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
  return Je(new kt(e, t, r, n, i, s));
}
function $e(e) {
  return e instanceof kt;
}
function Fh(e) {
  return e?.type === kt.getType();
}
const rT = "​", Oi = rT;
var $d;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})($d || ($d = {}));
var Id;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Id || (Id = {}));
function nT() {
  return be(Oi);
}
function iT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Oi, ""));
}
function Gs(e) {
  return e.length > 0 && e.includes(Oi) && e.replaceAll(Oi, "") === "";
}
function Js(e) {
  return E(e) && Gs(e.getTextContent());
}
function zh(e) {
  return Bx(e) || Xx(e);
}
function Ge(e) {
  return we(e) || Hs(e);
}
function Kh(e, t) {
  return e.find((r) => Ge(r) && r.getNumber() === t.toString());
}
function sT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ge(r));
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
function oT(e) {
  if (!e)
    return;
  if (Ge(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Ge(t); )
    t = t.getPreviousSibling();
  if (t && Ge(t))
    return t;
}
function zt(e) {
  return Ae(e, K) ?? void 0;
}
function aT(e) {
  return Te(e) || we(e) || F(e) || Hs(e) || Sr(e) || Ze(e) || le(e) || K(e) || $e(e) || Ke(e);
}
function jl(e) {
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
function Be(e) {
  return at(e) || Te(e);
}
function at(e) {
  return le(e) || Sr(e);
}
function cT(e) {
  return Bl(e) || ha(e);
}
function qo(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Wn(e, t) {
  const r = se(t, jn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function lT(e, t) {
  const r = I(e) ? e : e.getParent(), n = I(t) ? t : t.getParent(), i = r && n ? ak(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function uT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Ri(e) {
  return e?.type === He.getType();
}
function dT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function fT(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Le(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function nt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function jh(e, t, r) {
  const n = Le(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Xt(e, t) {
  let r = Le(e);
  return t && (r += `${D}${t}`), r += " ", r;
}
function pT(e) {
  const t = e[Ws];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Vh(e) {
  return Hh(e) || Ri(e) && pT(e) === "attribute" ? "" : Ri(e) && e.text !== D ? e.text : Gx(e) ? e.children.map((t) => Vh(t)).join("") : "";
}
function hT(e) {
  return e.map((r) => Vh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Kt(e) {
  return " " + e + D;
}
function Vl(e) {
  const t = [];
  for (const r of e) {
    if (!F(r))
      continue;
    const n = Wh(r);
    n !== Qt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Wh(e) {
  return O(e) || pr(e) || E(e) && se(e, ue) === "attribute" ? "" : E(e) ? e.getTextContent() : I(e) ? e.getChildren().map((t) => Wh(t)).join("") : "";
}
function pr(e) {
  return Ut(e) && e.getTextType() === "marker";
}
function Nt(e) {
  return O(e) || pr(e);
}
function Wl(e) {
  if (!e || !Nt(e))
    return !1;
  const t = e.getParent();
  return Te(t) && e.is(t.getFirstChild());
}
function Hh(e) {
  return Gl(e) || kh(e) && e.textType === "marker";
}
function Ld(e, t) {
  gT(e, t), e.setMarker(t);
}
function gT(e, t) {
  const r = e.getMarker(), n = Le(r), i = Le(r, !0), s = nt(r), o = nt(r, !0), a = xe.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Nt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (pr(c)) {
        const f = l.startsWith(Le("", !0));
        c.setTextContent(d ? Le(t, f) : nt(t, f));
      }
    }
  });
}
function je(e, t = Qb) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function qe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Gh(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Jh(e) {
  if (!P(e))
    return Dd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !I(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return Dd(e) ?? t ?? void 0;
  } catch (n) {
    if (Gh(n))
      return t ?? void 0;
    throw n;
  }
}
function mT(e, t) {
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
function Hl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function yT(e) {
  return !!e && e.includes("-");
}
function Yh(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Dd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Ys(e) {
  if (!e)
    return !1;
  if (ti(e) || O(e) || pr(e) || Ie(e) || Ut(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = se(e, ue);
    if (t === Nr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === D || Gs(r))
      return !0;
  }
  return !1;
}
function Xs() {
  const e = be(D);
  return St(e, ue, Nr), e.setMode("token"), e;
}
function bT(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function Or(e) {
  return E(e) && se(e, ue) === Nr;
}
function Xh(e) {
  const t = e.getFirstChild();
  if (!Nt(t) || t === null || Or(t.getNextSibling()))
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
function Wi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Ys(s)) {
      if (Ce(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (E(s) && s.getType() === He.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function ga(e) {
  let t = e.getParent();
  for (; t && Ce(t); )
    t = t.getParent();
  return t;
}
function kT(e, t) {
  return Wi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function xT(e, t) {
  const r = ga(e);
  if (!r)
    return;
  const n = Wi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function TT(e, t) {
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
  const r = Wi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Ys(n))
    return Qh(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || qo(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || qo(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function CT(e, t) {
  if (t <= 0)
    return 0;
  const r = Wi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? _T(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function _T(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const vT = 1;
class Rr extends He {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(In(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Rr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return gt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || In(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = In(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = In(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = In(r.__marker, r.__markerSyntax, t), r;
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
      version: vT
    };
  }
}
function gt(e, t, r) {
  return Je(new Rr(e, t, void 0, r));
}
function O(e) {
  return e instanceof Rr;
}
function Gl(e) {
  return e?.type === Rr.getType();
}
function Hr(e) {
  return e.getTextContent() === In(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function ST(e) {
  e.setTextContent(In(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function In(e, t, r = !1) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Le(e, r);
}
const MT = /* @__PURE__ */ new Set(["closed"]);
function Tr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !MT.has(n));
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
  const t = Object.keys(e).filter((n) => !rx.includes(n)), r = [
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
function bs(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function ET(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : bs(e) === void 0 && rg(e) === void 0;
}
function rg(e) {
  return e.getChildren().find((t) => E(t) && se(t, ue) === "attribute");
}
function As(e, t) {
  return Qs(e.getNextSibling(), t);
}
const AT = /^[ \u00A0]+$/;
function Jl(e) {
  if (Hr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Le(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && AT.test(r.slice(t.length));
}
function Qs(e, t) {
  let r, n, i, s;
  return Ie(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Jl(e) && (r = e, e = e.getNextSibling()), E(e) && se(e, ue) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Hr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Kr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!O(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (E(n) && n.getTextContent() === Kt(e.getCaller()))
    return n;
}
function Yl(e) {
  const t = Kr(e);
  return t ? Qs(t.getNextSibling(), "cat") : {};
}
function Hi(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || O(t)) && se(t, ue) !== "attribute")
    return t;
}
function Xl(e) {
  const t = Hi(e);
  return t ? Qs(t.getNextSibling(), "ca") : {};
}
function ng(e) {
  const t = Hi(e);
  if (!t)
    return;
  const r = Qs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Ql(e) {
  const t = ng(e);
  return t ? Qs(t.getNextSibling(), "cp") : {};
}
function ig(e) {
  const t = e.getParent();
  if (!F(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if ($e(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && se(n, ue) === "attribute" || F(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ie(n)))
        return;
    }
}
function ma(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ie(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Jl(s) && (t = s, s = s.getNextSibling()), E(s) && se(s, ue) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && Hr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Zl(e) {
  return F(ga(e));
}
function eu(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Zl(t) : t.getChildren().some((i) => F(i) && i.getMarker() === r) ? !0 : void 0;
}
function PT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = eu(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Gi(e) {
  return E(e) && e.getType() === He.getType() && se(e, ue) !== "attribute";
}
function ya(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !O(t) || !F(r) || !sg(t, r) || !Gi(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function sg(e, t) {
  return e.getMarkerSyntax() === "opening" && eu(e, t) !== void 0;
}
function tu(e, t) {
  if (!sg(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? eu(r, t) === !0 ? "spacer" : void 0 : Gi(r) ? r.getTextContent().startsWith(D) ? void 0 : "prefix" : "spacer";
}
function NT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && tu(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function og(e, t) {
  const r = N();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function ag(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = tu(t, e);
    if (r !== void 0 && !og(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(D + n.getTextContent());
      } else
        t.insertAfter(be(D));
  });
}
function cg(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && tu(t, e) !== void 0 && og(t, e)) : !1;
}
const wT = "file", OT = "src", RT = "colspan", qT = "category", $T = "alt", IT = "closed", LT = "false";
function DT(e) {
  return e[IT] !== LT;
}
function UT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === wT ? OT : t,
    r
  ]));
}
function lg(e, t) {
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
function ug(e, t, r) {
  const n = r ?? {}, i = DT(n);
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
        opening: `\\${lg(t, n[RT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Tr(UT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [qT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Tr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [$T]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Tr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Tr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const At = { wantsRun: !1, valueText: void 0 }, Gr = {};
function Qa(e, t) {
  if (t === "va")
    return e;
  const r = As(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function ru(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (I(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function ba(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function FT(e) {
  return Ie(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && se(e, ue) === "attribute";
}
function zT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!E(e) || se(e, ue) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Za(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if ($e(t))
      return t;
    if (!FT(t))
      return;
  }
}
function Ud(e) {
  return {
    kind: e,
    ownerPredicate: (t) => $e(t),
    ownerOf: (t) => {
      if (Ie(t))
        return t.getRunKind() === e ? Za(t) : void 0;
      const r = t.getParent();
      return Ie(r) ? r.getRunKind() === e ? Za(r) : void 0 : zT(t) === e ? Za(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!$e(t))
        return At;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? At : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (t) => $e(t) ? As(Qa(t, e), e) : Gr,
    graceSite: (t, r) => $e(t) ? !r.opener && !r.closer ? ru(Qa(t, e)) : ba(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => $e(t) ? Qa(t, e) : void 0
    }
  };
}
const KT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => At,
  scanPieces: () => Gr,
  graceSite: (e) => F(e) && cg(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, BT = {
  kind: "char",
  ownerPredicate: (e) => F(e),
  ownerOf: (e) => {
    if (!E(e) || se(e, ue) !== "attribute")
      return;
    const t = e.getParent();
    return F(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!F(e) || bs(e) === void 0)
      return At;
    const t = Tr(e.getUnknownAttributes() ?? {}, fa(e.getMarker()));
    return t === "" ? At : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => F(e) ? { value: rg(e) } : Gr,
  graceSite: (e, t) => {
    if (!F(e) || t.value)
      return !1;
    const r = bs(e);
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
    insertRunBefore: (e) => F(e) ? bs(e) : void 0
  }
};
function dg(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!E(e) || se(e, ue) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function jT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = Kr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!dg(n))
        return;
    }
}
const VT = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (Ie(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ie(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : dg(e) ? jT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return At;
    const t = e.getCategory();
    return t === void 0 ? At : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => K(e) ? Yl(e) : Gr,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Kr(e);
      return r !== void 0 && ru(r);
    }
    return ba(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => K(e) ? Kr(e) : void 0
  }
};
function WT(e) {
  return Ie(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && se(e, ue) === "attribute";
}
function HT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!E(e) || se(e, ue) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function GT(e) {
  const t = e.getParent();
  if (!we(t))
    return;
  const r = Hi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!WT(n))
        return;
    }
}
function Fd(e) {
  const t = (r) => we(r) ? e === "ca" ? Hi(r) : ng(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => we(r),
    ownerOf: (r) => {
      if (Ie(r))
        return r.getRunKind() === e && we(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ie(n) ? n.getRunKind() === e && we(n.getParent()) ? n.getParent() ?? void 0 : void 0 : HT(r) === e ? GT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!we(r))
        return At;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? At : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (r) => we(r) ? e === "ca" ? Xl(r) : Ql(r) : Gr,
    graceSite: (r, n) => {
      if (!we(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && ru(i);
      }
      return ba(n);
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
function fg(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && se(e, ue) === "attribute";
}
function JT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ze(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!fg(t))
      return;
  }
}
const YT = {
  kind: "milestone",
  ownerPredicate: (e) => Ze(e),
  ownerOf: (e) => {
    const t = Ie(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ie(e.getParent()) ? e.getParent() : fg(e) ? e : void 0;
    if (!t || Ie(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ie(t) ? Ze(r) ? r : void 0 : JT(t);
  },
  expectedPieces: (e) => {
    if (!Ze(e))
      return At;
    const t = tg(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Tr(t, pa(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : D + r };
  },
  scanPieces: (e) => {
    if (!Ze(e))
      return Gr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ma(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ze(e))
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
    return ba(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Ze(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, XT = ug("optbreak", void 0, void 0).opening, QT = {
  kind: "optbreak",
  ownerPredicate: (e) => Ke(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ke(t) || t.getTag() !== "optbreak"))
      return E(e) || Ut(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: XT }),
  scanPieces: (e) => Ke(e) ? { value: e.getFirstChild() ?? void 0 } : Gr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, ZT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Ke(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => At,
  scanPieces: () => Gr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, eC = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => At,
  scanPieces: () => Gr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ps = [
  KT,
  BT,
  Ud("va"),
  Ud("vp"),
  VT,
  Fd("ca"),
  Fd("cp"),
  YT,
  QT,
  ZT,
  eC
], tC = new Map(Ps.map((e) => [e.kind, e]));
function Hn(e) {
  const t = tC.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Gn(e) {
  for (const t of Ps) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function pg(e) {
  return Gn(e) !== void 0;
}
const $o = "unmatched", hg = 2;
function ks(e) {
  return `\\${e}`;
}
class Jr extends He {
  __marker;
  constructor(t = "", r) {
    super(ks(t), r), this.__marker = t, this.__mode = 1;
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
      [$o]: (t) => nC(t) ? {
        conversion: rC,
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
      text: t.text ?? ks(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ks(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Cd), r.title = zd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = zd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement($o);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Cd), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: hg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function gg(e) {
  return e.getTextContent() === ks(e.getMarker());
}
function zd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function rC(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: nu(t) };
}
function nu(e) {
  return Je(new Jr(e));
}
function nC(e) {
  return e?.tagName.toLowerCase() === $o;
}
function Yr(e) {
  return e instanceof Jr;
}
const mg = "table", Lc = "immutable-table", yg = 1, iC = ["type", "marker", "content"];
class si extends fr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Lc;
  }
  static clone(t) {
    return new si(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return sC().updateFromJSON(t);
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
      version: yg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function sC(e) {
  return Je(new si(e));
}
function bg(e) {
  return e instanceof si;
}
function oC(e) {
  return e?.type === Lc;
}
const kg = "table:row", Kd = "immutable-table-row", xg = 1, Dc = "tr", aC = ["type", "marker", "content"];
class Ji extends fr {
  __marker;
  __unknownAttributes;
  constructor(t = Dc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Kd;
  }
  static clone(t) {
    return new Ji(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return cC().updateFromJSON(t);
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
      type: Kd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: xg
    };
  }
}
function cC(e, t) {
  return Je(new Ji(e, t));
}
const Tg = "table:cell", Bd = "immutable-table-cell", Cg = 1, Uc = "tc1", lC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function uC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Yi extends fr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Uc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Bd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Yi(r, n, i, s, o);
  }
  static importJSON(t) {
    return dC().updateFromJSON(t);
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
    const n = uC(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Bd,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Cg
    };
  }
}
function dC(e, t, r, n) {
  return Je(new Yi(e, t, r, n));
}
function Zs(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Zt(e, t) {
  const r = Zs(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Ns(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function fC(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function pC(e) {
  return Ns(e) ? void 0 : { closed: "false" };
}
function hC(e, t, r, n) {
  const i = t.getMarker(), s = Zl(t), o = fC(t);
  if (n) {
    e.append(gt(i, "opening", s));
    const [a] = r;
    Gi(a) && !a.getTextContent().startsWith(D) && a.setTextContent(D + a.getTextContent());
  }
  e.append(...r), o && e.append(gt(i, "closing", s));
}
function Jn(e) {
  return Ae(e, F) ?? void 0;
}
function gC(e) {
  let t = e.getParent();
  for (; F(t); )
    t = t.getParent();
  return t;
}
function Fc(e) {
  const t = _g(e);
  return e.getChildren().every((r) => O(r) || t && se(r, ue) === "attribute" || E(r) && r.getTextContent().replaceAll(D, "") === "");
}
function _g(e) {
  return Ns(e);
}
function mC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Tr(r, fa(e.getMarker())) : "";
  n !== "" && t.insertAfter(be(n)), e.remove();
}
function yC(e, t) {
  if (Ns(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(gt(e.getMarker(), "closing", Zl(e)));
}
function bC(e, t) {
  return F(e) && !Ns(e) && !Ns(t);
}
function kC(e, t, r) {
  Fc(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && Gi(n) && !n.getTextContent().startsWith(D) && n.setTextContent(D + n.getTextContent()), e.append(...t);
}
function xC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = _g(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = O(l) && l.getMarkerSyntax() === "closing", f = s && se(l, ue) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = bC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      kC(e, o, n);
    else {
      const l = zr(t.getMarker(), pC(t));
      hC(l, t, o, n), e.insertAfter(l), Fc(l) ? l.remove() : c = l;
    }
  i && !a && yC(t, n), Fc(t) && mC(t, c);
}
function qi(e, t) {
  let r = e.getParent();
  for (; F(r); )
    xC(e, r, t), r = e.getParent();
}
function ka(e) {
  if (E(e) && !O(e)) {
    const t = ya(e);
    e.select(t, t);
    return;
  }
  if (I(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      ka(t);
      return;
    }
    e.selectEnd();
  }
}
const Mi = /* @__PURE__ */ new WeakMap();
function TC(e, t) {
  return Mi.set(e, t), () => {
    Mi.get(e) === t && Mi.delete(e);
  };
}
function jd(e) {
  return Mi.get(e);
}
function CC(e) {
  return Mi.get(Tn())?.has(e.getKey()) ?? !1;
}
function _C(e) {
  Mi.get(Tn())?.add(e.getKey());
}
function vC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function zc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Vd(e) {
  return /^\s/.test(e);
}
function iu(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Vd(t) || !Vd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function xa(e, t, r) {
  return r.wantsRun ? iu(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : vC(t);
}
function SC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return iu(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function vg(e, t) {
  return !zc(e.scanPieces(t));
}
function eo(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!xa(e, n, r))
    return !1;
  const i = N();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || qo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function MC(e, t, r, n) {
  return !r.wantsRun || zc(n) || ck(vs) ? !1 : Tn().getEditorState().read(() => {
    const i = ne(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : zc(e.scanPieces(i));
  });
}
function EC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Wd(e) {
  const t = be(e);
  return St(t, ue, "attribute"), t;
}
function AC(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Sh(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function PC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Wd(n.valueText));
    return;
  }
  const l = AC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = gt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : E(u) ? iu(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Wd(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(gt(a === "selfClosing" ? "" : o(t), a));
}
function ws(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (xa(e, i, n) && !CC(t)) {
    if (MC(e, t, n, i)) {
      _C(t);
      return;
    }
    if (!eo(e, t)) {
      if (!n.wantsRun) {
        EC(i);
        return;
      }
      PC(e, t, i, n);
    }
  }
}
function NC(e, t, r) {
  ws(e, t), t.isAttached() && eo(e, t) && r.add(t.getKey());
}
function to(e) {
  if (!E(e))
    return !1;
  if (O(e) || $e(e) || Yr(e))
    return !0;
  const t = se(e, ue);
  return t === "attribute" || t === Nr;
}
function su(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Hr(e) && F(e.getParent())) : !1;
}
function wC() {
  const e = N();
  return P(e) ? su(e.focus.getNode(), e.focus.offset) : !1;
}
function Sg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && to(t) ? t : void 0;
}
function OC(e) {
  const t = Sg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function RC(e) {
  const t = Sg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Hd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Gd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function qC(e, t) {
  let r = RC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!to(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Jd(e, t) {
  const r = qC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function ou(e) {
  if (e.isCollapsed()) {
    const a = OC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Hd(r), Hd(n)], s = Jd(r, "next"), o = Jd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Gd(r, i[0]), Gd(n, i[1]), !1) : !0;
}
const Io = "verse-block", Mg = 1, $C = "verse-block";
class Xi extends fr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Io;
  }
  static clone(t) {
    return new Xi(t.__number, t.__key);
  }
  static importJSON(t) {
    return IC().updateFromJSON(t);
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
    return t.classList.add($C), Yd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Yd(r, this.__number), !1;
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
      type: Io,
      number: this.getNumber(),
      version: Mg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Yd(e, t) {
  const { start: r, end: n } = Yh(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Xd(e, "data-verse-start", i ? r : NaN), Xd(e, "data-verse-end", i ? n : NaN);
}
function Xd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function IC(e) {
  return Je(new Xi(e));
}
function Os(e) {
  return e instanceof Xi;
}
function LC(e) {
  return e?.type === Io;
}
const DC = [
  Ft,
  wr,
  jt,
  kt,
  xe,
  Pe,
  ur,
  Rr,
  ii,
  Vr,
  Jr,
  ct,
  pn,
  si,
  Ji,
  Yi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Wr,
  {
    replace: Ml,
    with: () => Yt(),
    withKlass: pn
  }
], $i = {
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
}, UC = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function au(e) {
  if (!e)
    return _r;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: _r(r)?.category ?? T.Uncategorized,
      type: UC[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: _r(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Qd(e, t, r) {
  const n = {
    type: cr,
    version: ar,
    content: e
  }, i = t.serializeEditorState(n, r);
  return ha(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Eg = "v", Ag = 1, FC = "verse-selected";
class wt extends Vs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Eg, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new wt(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => BC(t) ? {
        conversion: KC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return cu().updateFromJSON(t);
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
    return r && ei(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ec, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Xt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Ao + this.getNumber() + Ao
    );
    return A(zC, { nodeKey: this.getKey(), text: t });
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
      version: Ag
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
function zC({ nodeKey: e, text: t }) {
  const [r] = Sk(e);
  return A("span", { className: r ? FC : void 0, children: t });
}
function KC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: cu(t) };
}
function cu(e, t, r, n, i, s) {
  return Je(new wt(e, t, r, n, i, s));
}
function BC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Eg;
}
function oi(e) {
  return e instanceof wt;
}
function jC(e) {
  return e?.type === wt.getType();
}
function me(e) {
  return $e(e) || oi(e);
}
function Pg(e) {
  return Fh(e) || jC(e);
}
function VC(e) {
  return WC(e).find((t) => le(t));
}
function WC(e) {
  return e.some(Os) ? e.flatMap((t) => Os(t) ? t.getChildren() : t) : e;
}
function Ta(e) {
  return I(e) ? Os(e) ? e.getChildren().flatMap(Ta) : e.getChildren() : [];
}
function HC(e, t) {
  return Ta(e).find((i) => me(i) && Hl(t, i.getNumber()));
}
function GC(e, t) {
  return t === 0 ? VC(e) : e.map((r) => HC(r, t)).filter((r) => r)[0];
}
function Lo(e) {
  return Ta(e).find((r) => me(r));
}
function Ng(e, t) {
  if (!I(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (me(i))
      return i;
  }
}
function JC(e) {
  const t = e.getParent();
  if (t && I(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (me(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ge(r); ) {
    const n = Lo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Do(e) {
  return Ta(e).findLast((t) => me(t));
}
function YC(e) {
  if (!$e(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function XC(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && I(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function QC(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return XC(t, e, r);
  if (E(e)) {
    const n = YC(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function ec(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function ZC(e) {
  const t = Ic(e);
  if (!(!t || Ge(t)))
    return me(t) ? t : Do(t) ?? du(t);
}
function e_(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return ec(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (QC(e, t)) {
    const i = ZC(e);
    return i ? ec(i) : { verseNum: n };
  }
  return ec(e);
}
function t_(e) {
  return aT(e) || oi(e);
}
function lu(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(D) && e.setTextContent(`${t} `);
  }
}
function wg(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Kc(e, t) {
  return e.getEditorState().read(() => !ne(t));
}
function r_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = uu(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && I(i) && I(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && I(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (me(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = Zd(i);
      for (; s && !Ge(s); ) {
        const o = Lo(s);
        if (o) {
          n = o;
          break;
        }
        s = Zd(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Lo(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Ge(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function n_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = uu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && I(i) && (n = Ng(i, r.getIndexWithinParent())), !n && i) {
      let o = ef(i);
      for (; o && !Ge(o); ) {
        const a = Do(o);
        if (a) {
          n = a;
          break;
        }
        o = ef(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ge(s); ) {
      const o = Do(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Zd(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function ef(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function uu(e, t) {
  if (I(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && me(n))
      return n;
    const i = Ng(e, t.anchor.offset);
    if (i)
      return i;
    const s = Lo(e);
    if (s)
      return s;
  }
  return du(e);
}
function du(e) {
  if (!e || Ge(e))
    return;
  if (me(e))
    return e;
  let t = Ic(e);
  for (; t; ) {
    if (Ge(t))
      return;
    if (me(t))
      return t;
    const r = Do(t);
    if (r)
      return r;
    t = Ic(t);
  }
}
const i_ = ["style"], s_ = ["style", "code"], Uo = ["style", "cid"], o_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], a_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], c_ = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], l_ = ["style", "caller", "category", "contents"], u_ = ["tag", "marker", "contents"], d_ = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Rs = `
`;
function f_(e, t) {
  const r = ne(e);
  if (!Bt(r))
    return;
  const n = fu(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function fu(e, t = "delta-doc") {
  if (!e)
    return;
  const r = da();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Ii(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Ii(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Br(l) || Bt(l))
        return n;
      Be(l) && (a = l);
    }
    if (Be(l) && (i.includes(l) || i.push(l)), Og(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += pu(l, t);
  }
  if (a)
    return n;
}
function tf(e, t, r = "delta-doc") {
  if (e.length < 2 || !g_(e[0]) || !h_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => p_(n, r)?.getKey());
}
function p_(e, t = "delta-doc") {
  const r = da();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Ii(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Ii(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Be(a) && (i.includes(a) || i.push(a)), Og(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = pu(a, t);
    if (Br(a) && l > 0 && e >= n && e < n + l || Bt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Ii(e, t) {
  return e ? t ? !qo(t.node, e.getKey()) : !0 : !1;
}
function Br(e) {
  return E(e) && !Bt(e);
}
function Bt(e) {
  return Ge(e) || me(e) || Ze(e) || K(e) || Ke(e) || Yr(e);
}
function ln(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function h_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && d_.includes(t);
}
function g_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Og(e, t) {
  return K(e) || Ke(e) ? !0 : t === "apply" && I(e) && Bt(e);
}
function Rg(e) {
  const t = e.getParent();
  return Nt(e) && le(t) && t.getFirstChild() === e;
}
function Bc(e) {
  const t = e.getParent();
  return t !== null && Ae(t, Ie) !== null;
}
function m_(e) {
  const t = e.getParent();
  return F(t) && e.getTextContent() === Qt && t.getChildrenSize() === 1;
}
function y_(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === Kt(t.getCaller());
}
function b_(e) {
  return !pg(e) && pu(e, "delta-doc") === e.getTextContentSize();
}
function pu(e, t) {
  if (Bt(e))
    return 1;
  if (E(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (Js(e) || Rg(e) || se(e, ue) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    se(e, ue) === "attribute" || Bc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Rl) || m_(e) || y_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function jc(e, t) {
  const r = { insert: e.__text }, n = se(e, fn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = qg(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function rf(e) {
  const t = new hs();
  return e.isEmpty() || e.read(() => {
    const r = De();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Sr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = k_();
    for (const s of i)
      t.push(s);
  }), t;
}
function Ca(e, t) {
  const r = [], n = ni(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...nf(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...nf(c, n.length, n, i, s, o, a));
  return r;
}
function k_() {
  return Ca();
}
function nf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return x_(e, a, n), T_(e, a, i, s, o), C_(e, t, r, i, o, s, a), Ge(e) && a.push(M_(e)), me(e) && a.push(A_(e)), Ze(e) && a.push(P_(e)), Yr(e) && a.push(N_(e)), v_(e, a, s), __(e, a, s), q_(c, s), a;
}
function x_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Te(n) ? t.push(S_(n)) : le(n) ? t.push(E_(n)) : Sr(n) && t.push({ insert: Rs });
  }
  Be(e) && (r.includes(e) || r.push(e));
}
function T_(e, t, r, n, i) {
  if (!E(e) || $e(e) || Yr(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = zt(e) !== void 0;
  if (O(e) && (o || Rg(e) || Bc(e) || pg(e)) || se(e, ue) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Gs(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && O(c) && c === s.getFirstChild() && a === Kt(s.getCaller()))
    return;
  const l = F(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(ya(e)));
  const d = a.startsWith(Rl) || se(e, ue) === "attribute" || Bc(e), u = !!l && a === Qt && l.getChildrenSize() === 1, f = _a(e, n), p = f ? r.filter((g) => f.children.includes(g)) : r, m = jc(e, p);
  if (m.insert = a, f) {
    if (!a || a === D || d)
      return;
    f.contentsOps?.push(m);
  } else
    u || d || t.push(m);
  const h = a !== "" && !u && !(d && l);
  if (r.length > 0 && h)
    for (const g of r)
      i.add(g);
}
function C_(e, t, r, n, i, s, o) {
  F(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Ii(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = O_(c), d = _a(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function __(e, t, r) {
  if (!K(e))
    return;
  const n = w_(e), i = _a(e, r), s = {
    node: e,
    children: ni(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function v_(e, t, r) {
  if (!Ke(e))
    return;
  const n = R_(e), i = _a(e, r), s = {
    node: e,
    children: ni(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Cn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function S_(e) {
  const t = { style: Es, code: e.__code };
  return Cn(t, e), { insert: Rs, attributes: { book: t } };
}
function M_(e) {
  const t = { style: Oo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Cn(t, e), { insert: { chapter: t } };
}
function E_(e) {
  const t = { style: e.__marker };
  return Cn(t, e), { insert: Rs, attributes: { para: t } };
}
function A_(e) {
  const t = { style: Ro, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Cn(t, e), { insert: { verse: t } };
}
function P_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Cn(t, e), { insert: { milestone: t } };
}
function N_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function w_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Cn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = se(e, fn);
  return n && (r.attributes = { segment: n }), r;
}
function O_(e) {
  const t = { insert: "" }, r = qg([e]);
  return r && (t.attributes = { char: r }), t;
}
function R_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Cn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function _a(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function q_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Ii(t[r].node, e) && t.splice(r, 1);
}
function qg(e) {
  if (e.length === 0)
    return;
  const t = e.map($_);
  return t.length === 1 ? t[0] : t;
}
function $_(e) {
  const t = { style: e.__marker }, r = se(e, jn);
  return r && (t.cid = r), Cn(t, e), t;
}
function hu(e) {
  let t = 0;
  for (const { node: r } of da())
    if (K(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function I_(e) {
  let t = 0;
  for (const { node: r } of da())
    if (K(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const $g = 1;
class or extends Vs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = _s, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new or(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => D_(t) ? {
        conversion: L_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return gu().updateFromJSON(t);
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
    return r && ei(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => U_(t, n), (l) => F_(t, n, s, l), () => z_(t, n), () => K_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return A("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === _s && i ? (
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
      version: $g
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function L_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: gu(t, r) };
}
function gu(e, t, r) {
  return Je(new or(e, t, r));
}
function D_(e) {
  return e ? e.classList.contains(or.getType()) : !1;
}
function mt(e) {
  return e instanceof or;
}
function U_(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function F_(e, t, r, n) {
  e.update(() => {
    const i = ne(t);
    if (!K(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ne(r);
    if (!mt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function z_(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Ca(r);
  });
}
function K_(e, t) {
  return e.getEditorState().read(() => hu(t));
}
const B_ = [
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
], j_ = ["†"];
function va(e) {
  if (Ig())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = sf(t), [s, o] = sf(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = of(n, i), [s, o] = of(s, o);
  const a = zn();
  return a.anchor = sr(n.getKey(), i, af(n)), a.focus = sr(s.getKey(), o, af(s)), a;
}
function mu() {
  if (Ig())
    return;
  const e = N();
  if (!e || !P(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Fo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Fo(i, s);
  return { start: n, end: o };
}
function sf(e) {
  if (Zb(e)) {
    const t = Lp(e.jsonPath);
    let r = De();
    for (let n = 0; n < t.length; n++) {
      if (!r || !I(r))
        return [void 0, void 0];
      const i = Wi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : TT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && I(r) ? [r, CT(r, e.offset)] : [void 0, void 0];
  }
  if (ek(e) || tk(e)) {
    const t = as(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (I(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && I(r) ? [r, 0] : [void 0, void 0];
  }
  if (rk(e)) {
    const t = as(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (I(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && I(r) ? [r, 0] : [void 0, void 0];
  }
  if (nk(e)) {
    const t = as(e.jsonPath);
    if (!t || !I(t))
      return [void 0, void 0];
    const r = tc(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (ik(e)) {
    const t = as(e.jsonPath);
    if (!t || !I(t))
      return [void 0, void 0];
    const r = tc(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (sk(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = as(e.jsonPath);
    if (!n || !I(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = tc(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${ok(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function of(e, t) {
  if (!pr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !I(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function af(e) {
  return I(e) ? "element" : "text";
}
function tc(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (pr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function as(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Lp(r);
  let i = De();
  for (const s of n) {
    if (!i || !I(i))
      return;
    const o = Wi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Fo(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = V_(e), i = n ? Nn(qn(n)) : Nn(qn(e));
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
  if (Ce(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (E(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Fo(n, s);
    }
    const i = ga(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Fo(i, o);
    }
  }
  if (I(e)) {
    const r = e.getChildAtIndex(t);
    if (pr(r)) {
      const i = r.getTextContent().endsWith("*"), s = Nn(qn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Qh(e, t);
    return n.type === "text" ? {
      jsonPath: Nn([...qn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: Nn(qn(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = xT(e, t);
    if (r)
      return {
        jsonPath: Nn([
          ...qn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: Nn(qn(e)), offset: t };
}
function V_(e) {
  const t = e.getParent();
  if (!t || !I(t))
    return;
  const r = W_(e);
  return r && !Be(r) && !E(r) && !Ce(r) ? r : t;
}
function W_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Ys(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function qn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = ga(r);
    if (!n)
      break;
    const i = kT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Ig() {
  for (let e = De().getFirstChild(); e; e = e.getNextSibling())
    if (Os(e))
      return !0;
  return !1;
}
function H_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Lg(e, t, r, n, i, s, o) {
  if (!Pe.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? va(r) : N();
  if (!P(a))
    return;
  const c = Y_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? H_(e, s), d = Dg(e, l, c, i, s, void 0, void 0);
  return J_(d, a, i), d;
}
function yu(e) {
  return e !== "expanded";
}
function G_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!E(r) || !F(r.getParent()))
    return;
  if (O(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return O(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function J_(e, t, r) {
  const n = yu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || uT(t), ou(t);
  const i = G_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(F)?.selectEnd();
}
function mi(e, t, r) {
  const n = zr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(gt(e)) : r?.markerMode === "visible" && n.append(Fr("marker", Le(e)));
  const s = t === "" ? Qt : i ? D + t : t;
  return n.append(be(s)), n;
}
function Y_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(mi("fr", f, n)), !e.isCollapsed()) {
        const p = lf(e);
        p.length > 0 && o.push(mi("fq", p, n));
      }
      o.push(mi("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(mi("xo", f, n)), !e.isCollapsed()) {
        const p = lf(e);
        p.length > 0 && o.push(mi("xq", p, n));
      }
      o.push(mi("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Dg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : yu(n?.noteMode), l = Ll(e, t, c);
  s && St(l, fn, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = gt(e), d && u.setMode("token"), a || (f = gt(e, "closing"))) : n?.markerMode === "visible" && (u = Fr("marker", Le(e) + " "), a || (f = Fr("marker", nt(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    p = be(Kt(l.__caller)), d && p.setMode("token"), l.append(p, ...r);
  else {
    const m = () => Xs(), h = r.flatMap(iv(m));
    if (t === "")
      l.append(...h);
    else {
      const g = Vl(r);
      let b = () => {
      };
      i?.noteCallerOnClick && (b = i.noteCallerOnClick), p = gu(l.__caller, g, b), l.append(p, m(), ...h);
    }
  }
  return f && l.append(f), l;
}
function xr(e) {
  if (typeof e == "string") {
    const t = ne(e);
    return K(t) ? t : void 0;
  }
  return I_(e);
}
function Vc(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (oi(n) || !n) {
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
      X_(i);
    else {
      const s = bu(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function bu(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return O(r) && r.getMarkerSyntax() === "closing" || pr(r) && r.getTextContent() === nt(e.getMarker()) ? t : -1;
}
function X_(e) {
  const t = bu(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  E(r) && !Ys(r) ? r.selectEnd() : e.select(t, t);
}
function Ug(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (E(r) && !to(r)) {
    r.select(0, 0);
    return;
  }
  const n = e.getParent();
  if (!n)
    return;
  const i = e.getIndexWithinParent() + 1;
  n.canBeEmpty() ? n.select(i, i) : ku(n, i, { announce: !t });
}
function ku(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!K(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = zn();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Ur(i), r && Tn().dispatchCommand(Dt, void 0);
}
function cf(e, t, r) {
  const n = Kr(e), i = Q_(e, n);
  if (r && zg(i, t, r, Fg(e, n)))
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
function Q_(e, t) {
  const r = [];
  for (const { node: n } of ni(e))
    !E(n) || Ae(n, Ie) || (xu(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: ya(n) }) : Z_(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function Z_(e, t) {
  return Yr(e) ? !0 : O(e) && !t.is(e.getParent());
}
function Fg(e, t) {
  return (r) => {
    let n = r;
    for (; !n.getPreviousSibling(); ) {
      const o = n.getParent();
      if (!o || o.is(e))
        return;
      n = o;
    }
    const i = n.getPreviousSibling(), s = I(i) ? i.getLastDescendant() : i;
    if (E(s) && (t?.is(s) || xu(s, t)))
      return s;
  };
}
function zg(e, t, r, n) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === r.index)
      return ev(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function ev(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function tv(e, t, r) {
  const { opener: n, value: i, closer: s } = Yl(e);
  if (!i)
    return !1;
  const o = rv(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = Kr(e);
    if (zg(c, t, r, Fg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function rv(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function xu(e, t) {
  return !E(e) || Ys(e) || to(e) ? !1 : !t || !e.is(t);
}
function nv(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(F))
    return;
  const t = Kr(e);
  for (const { node: n } of ni(e))
    if (xu(n, t))
      return;
  const r = bu(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function iv(e) {
  return (t) => Ut(t) ? [t] : [t, e()];
}
function sv(e) {
  const t = e.getParent();
  return t !== null && Ae(t, K) !== null;
}
function lf(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = El(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || mt(c) || sv(c)) && !O(c) && !Yr(c) && se(c, ue) !== "attribute") {
      if (me(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (E(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const Tu = [
  or,
  wt,
  ...DC
], ov = [
  Xi,
  ...Tu
], av = xn((e, t) => {
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
function cv() {
  const [e, t] = he(void 0), [r, n] = he(), i = Y(null), s = ye((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = $k(l, c, () => {
      Ik(l, c, {
        placement: "bottom-start",
        middleware: [Lk(), Dk()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = ye(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return B(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function lv({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = cv();
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
const uv = Hb(av);
function Kg({ isOpen: e = !1, children: t }) {
  const r = Y(null), { coords: n, placement: i } = lv({ isOpen: e, floatingBoxRef: r }), s = We(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Dn(
    A(uv, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Bg = $p(void 0);
function Cu() {
  const e = Ip(Bg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function dv(e, t) {
  const [r, n] = he(0), [i, s] = he(-1), o = We(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ye(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = ye(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = ye(() => {
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
function fv({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = dv(t, r);
  return A(Bg.Provider, { value: i, children: A("div", { ...n, children: e }) });
}
const jg = xn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Cu(), d = ye((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = ye((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return A("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function pv({ children: e, autoIndex: t = !0, ...r }) {
  const n = Y(null), { state: { activeIndex: i, menuItems: s } } = Cu(), o = We(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = We(() => {
    const c = o(s);
    return t ? Gb.map(c, (l, d) => Jb(l) && l.type === jg && l.props.index === void 0 ? Yb(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return B(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), A("div", { ref: n, role: "menu", ...r, children: a });
}
const hv = (e, t, r) => To(e, r).toLowerCase().includes(t.toLowerCase()), uf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", To = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function gv(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? uf(r[0]) : "") : (d = n || (r.length > 0 ? uf(r[0]) : ""), u = (m, h) => hv(m, h, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return u(m, t);
    } catch (h) {
      return console.warn("Error filtering item:", m, h), !1;
    }
  }).sort((m, h) => {
    const g = (_) => (p.has(_) || p.set(_, To(_, f).toLowerCase()), p.get(_) ?? ""), b = a ? To(m, f) : g(m), k = a ? To(h, f) : g(h);
    for (const _ of c)
      switch (_) {
        case "exact":
          if (b === l && k !== l)
            return -1;
          if (k === l && b !== l)
            return 1;
          break;
        case "startsWith":
          if (b.startsWith(l) && !k.startsWith(l))
            return -1;
          if (k.startsWith(l) && !b.startsWith(l))
            return 1;
          break;
        case "contains": {
          const M = b.indexOf(l), C = k.indexOf(l);
          if (M !== -1 && C === -1)
            return -1;
          if (C !== -1 && M === -1)
            return 1;
          if (M !== -1 && C !== -1)
            return M - C;
          break;
        }
      }
    return b.localeCompare(k);
  });
}
const rc = {
  Root: fv,
  Options: pv,
  Option: jg
};
function mv(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return We(() => gv({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function yv() {
  const { moveUp: e, moveDown: t, select: r } = Cu();
  return We(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const bv = () => {
  const e = yv(), [t] = ae();
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
    return t.registerCommand(Pr, r, Me);
  }, [t, e]);
};
function kv() {
  return bv(), null;
}
const xv = ["Shift", "Control", "Alt", "Meta"];
function Vg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), d = s !== void 0, [u, f] = he(""), p = d ? s ?? "" : u, m = mv({ query: p, items: t, filterBy: "name" }), h = (g) => {
    n?.(), r ? r(g) : g.action(l);
  };
  return B(() => {
    a?.(p, m);
  }, [a, p, m]), B(() => l.registerCommand(Pr, (g) => {
    if (d || c?.includes(g.key) || xv.includes(g.key))
      return !1;
    if ((g.ctrlKey || g.metaKey || g.altKey) && !g.getModifierState("AltGraph"))
      return n?.(), !1;
    const k = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((_) => _.slice(0, -1));
      }
    }[g.key];
    return k ? (g.stopPropagation(), g.preventDefault(), k(), !0) : g.key.length === 1 ? (g.stopPropagation(), g.preventDefault(), g.key !== o && f((_) => _ + g.key), !0) : !1;
  }, Me), [l, d, p, o, n, c]), Ee(rc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (g) => h(g), children: [!d && A("input", { value: p, type: "text", disabled: !0 }), A(kv, {}), A(rc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (g) => g.map((k, _) => Ee(rc.Option, { index: _, children: [A("span", { className: "label", children: k.label ?? k.name }), A("span", { className: "description", children: k.description })] }, k.name)) })] });
}
function Tv({ trigger: e, items: t }) {
  const [r] = ae(), [n, i] = he(!1), s = ye((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return B(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), B(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = N();
      if (P(l))
        return l;
    });
    a.read(() => {
      const l = N();
      !P(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && A(Kg, { isOpen: n, children: ({ placement: o }) => A(Vg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function Cv({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: We(() => {
    if (!t || !e)
      return;
    const i = _r(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = _r(o), { action: c } = r(o, a);
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
function xs(e, t) {
  return `${e}:${t}`;
}
function _v(e, t) {
  B(() => {
    if (!e.hasNodes([ot]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Oe(Zp(e, ot, (n) => Ms(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], m = a[l]?.[u], h = c[l]?.[u];
          i.addID(l, u, f, p, m, h);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(ot, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ne(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Ce(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!ot.isReservedType(c))
              for (const d of l) {
                let u = t.get(xs(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(xs(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(xs(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const vv = xn(function({ logger: t }, r) {
  const [n] = ae(), i = We(() => /* @__PURE__ */ new Map(), []);
  _v(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(xs(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = ne(d);
        Ce(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && wo(u));
      }
  };
  return oa(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (ot.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = va(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Ch(p, a, c, l, d, u, f);
      }, { tag: Ac });
    },
    removeAnnotation(o, a) {
      if (ot.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(xs(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ac });
    }
  })), null;
}), Sv = [];
function Mv({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = Sv, onChange: n }) {
  const [i] = ae();
  return js(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(Al) && !d.has(lh) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = Ev(i, s);
        u.length !== 0 && n(o, i, d, u, l);
      });
  }, [i, e, t, r, n]), null;
}
function Ev(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new hs();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ne(i), o = s !== null && zt(s) !== void 0;
    if (t.size === 1 && E(s) && !o && b_(s)) {
      const a = fu(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = ne(i);
          return new hs([E(u) ? jc(u) : { insert: "" }]);
        }), l = new hs([jc(s)]), d = new hs(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = rf(r), c = rf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const _u = "formatted", Wg = "unformatted", Hg = "paragraph-structure", vu = "standard", Gg = "block-verse", Av = {
  [_u]: "Formatted",
  [Wg]: "Unformatted",
  [Hg]: "Paragraph Structure",
  [vu]: "Standard",
  [Gg]: "Block Verse"
};
function _n(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Su, Mu;
function Pv(e) {
  const t = Eu(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Su = e, Mu = t;
}
Pv(_u);
const bw = () => Su, Li = () => Mu;
function Eu(e) {
  let t;
  switch (e ?? Su) {
    case _u:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Wg:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Hg:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case vu:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Gg:
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
function kw(e) {
  if (!e)
    return;
  const t = df(e);
  return Object.keys(Av).find((r) => It(df(Eu(r)), t));
}
const Nv = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function df(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...Nv, ...t };
}
function ro(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function wv(e) {
  if (e)
    return qs(e) ? wt : e.markerMode === "editable" ? kt : wt;
}
function qs(e) {
  return e?.verseLayout === "block";
}
function Ov(e) {
  const t = [], r = e ?? Mu;
  return r && (t.push(`${Qk}${r.markerMode}`), r.hasSpacing && t.push(Yk), r.isFormattedFont && t.push(Xk)), t;
}
function Rv(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += qv(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), Iv(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += Lv(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), Uv(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function qv(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), $v(t, e.retain, e.attributes, r, n)), e.retain);
}
function $v(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = De();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Br(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, m = Math.min(s, p);
        if (m > 0) {
          let h = d;
          const g = f > 0, b = m < u - f;
          if (g && b) {
            const [, k] = d.splitText(f);
            [h] = k.splitText(m);
          } else g ? [, h] = d.splitText(f) : b && ([h] = d.splitText(m));
          if (hn(r)) {
            const k = h.getParent();
            if (F(k)) {
              const _ = r.char;
              let M;
              Array.isArray(_) ? a >= 0 && a <= _.length - 1 && (M = _[a]) : a === 0 && (M = _);
              const C = M ? Wn(M, k) : !1;
              if (C && Array.isArray(_) && _.length > 1) {
                const $ = be("");
                h.replace($);
                const w = typeof r.segment == "string" ? r.segment : void 0, z = Qi(_.slice(1), n, h, w);
                let v = $;
                for (const V of z)
                  v.insertAfter(V), v = V;
                $.remove(), Vt(r, h);
              } else if (C)
                Vt(r, h);
              else {
                h.remove();
                const $ = ff(h, r, n, i);
                if ($ && $.length > 0) {
                  let w = k;
                  for (const z of $)
                    w.insertAfter(z), w = z;
                }
              }
            } else {
              const _ = be("");
              h.replace(_);
              const M = ff(h, r, n, i);
              if (M && M.length > 0) {
                let C = _;
                for (const $ of M)
                  C.insertAfter($), C = $;
                _.remove();
              } else
                _.replace(h);
            }
          } else
            Vt(r, h);
          s -= m;
        }
      }
      o += u;
    } else if (Bt(d))
      e <= o && o < e + t && s > 0 && (pf(d, r), s -= 1), o += 1;
    else if (F(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (hn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Wc(d, p.style), typeof p.cid == "string" && St(d, jn, () => p.cid);
            const m = je(p, Uo);
            m && Object.keys(m).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...m
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || Gv(r.char)) && (u = !0);
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
    } else if (Be(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Sr(d))
          pf(d, r);
        else if (Au(r)) {
          const p = Xg(r.para, n);
          p && d.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (I(d)) {
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
function ff(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Qi(t.char, r, e, i), o = s.find(F);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Vt(t, e);
    return;
  }
  const a = {};
  tm.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Vt(t, e), s;
}
function Jg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(Le(t))) : Ut(r) && r.getTextType() === "marker" && r.setTextContent(Le(t) + D);
}
function Wc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = F(e.getParent()), i = e.getFirstChild();
  Ut(i) && i.getTextType() === "marker" && i.getTextContent() === Le(r, n) && i.setTextContent(Le(t, n));
  const s = e.getLastChild();
  Ut(s) && s.getTextType() === "marker" && s.getTextContent() === nt(r, n) && s.setTextContent(nt(t, n));
}
function pf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && F(e) && hn(t)) {
      const i = Hc(n);
      if (Wc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        St(e, jn, () => o);
      }
      const s = je(i, Uo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ge(e) || me(e) || Ze(e) || K(e) || Ke(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Te(e) || le(e) || F(e)) && (r === "style" && le(e) ? Jg(e, n) : r === "style" && F(e) ? Wc(e, n) : r === "code" && Te(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && St(e, fn, () => n));
  }
}
function Iv(e, t, r) {
  if (t <= 0)
    return;
  const n = De();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Br(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Bt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Be(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Be(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Yt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && at(p)) {
            let m = i + 1;
            const h = p.getChildren();
            for (const b of h) {
              if (s <= 0)
                break;
              const k = i;
              if (i = m, o(b)) {
                i = k;
                break;
              }
              Br(b) ? m += b.getTextContentSize() : Bt(b) && (m += 1), i = k;
            }
            const g = p.getChildren();
            for (const b of g)
              b.remove(), a.append(b);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Yt(), !0);
        } else le(a) ? a.replace(Yt(), !0) : a.remove();
      }
      i += 1;
    } else if (I(a)) {
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
function Lv(e, t, r, n, i) {
  if (t === Rs)
    return hf(e, r, n, i);
  if (t.endsWith(Rs) && !Au(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (hn(r))
        throw new Error("Text + LF should not have char attributes");
      o += zo(e, s, r, i);
    }
    return o += hf(e + o, r, n, i), o;
  } else return hn(r) ? Dv(e, t, r, n, i) : zo(e, t, r, i);
}
function Dv(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = be(t === "" ? Qt : t);
  Vt(r, s);
  let o;
  {
    let g = function(b) {
      if (Br(b)) {
        const k = b.getTextContentSize();
        if (e >= h && e < h + k) {
          const _ = b.getParent();
          return F(_) && (o = _), !0;
        }
        h += k;
      } else if (Bt(b))
        h += 1;
      else if (F(b)) {
        const k = b.getChildren();
        for (const _ of k)
          if (g(_))
            return !0;
      } else if (I(b)) {
        const k = b.getChildren();
        for (const _ of k)
          if (g(_))
            return !0;
        Be(b) && (h += 1);
      }
      return !1;
    };
    const m = De();
    let h = 0;
    g(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && Wn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Wn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Qi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(F);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), zo(e, t, void 0, i);
  const f = {};
  for (const [m, h] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof h == "string" && (f[m] = h);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const m of d)
    if (!Yg(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), zo(e, t, void 0, i));
}
function zo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = De();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Br(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = be(t);
        if (Vt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          F(f) && !hn(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Bt(c))
      s += 1;
    else if (F(c)) {
      if (!o && e === s) {
        const u = be(t);
        Vt(r, u);
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
        const u = be(t);
        return Vt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Be(c)) {
      if (!o && e === s) {
        const u = be(t);
        Vt(r, u);
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
        const u = be(t);
        return Vt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (I(c)) {
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
    const c = be(t);
    Vt(r, c);
    const l = Yt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Yg(e, t, r) {
  const n = De();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Yt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!I(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (at(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Yt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Br(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (Bt(l))
        i += 1;
      else if (F(l)) {
        if (o(l))
          return !0;
      } else if (Be(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (Sr(d) && Be(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (I(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return I(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Yt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      at(a) ? Sr(a) && le(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !at(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (F(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !at(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function Uv(e, t, r, n, i) {
  let s;
  return ln("chapter", t) ? s = zv(t.insert.chapter, r) : ln("verse", t) ? s = Kv(t.insert.verse, r) : ln("ms", t) ? s = Bv(t.insert.ms) : ln("note", t) ? s = Qg(t, r, n) : ln("unknown", t) ? s = Zg(t, r, n, i) : ln("unmatched", t) && (s = Vv(t.insert.unmatched, r)), s ? Yg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function hf(e, t, r, n) {
  let i;
  Au(t) ? i = Xg(t.para, r) : Hv(t) && (i = Fv(t.book)), i ??= Yt();
  const s = i, o = le(s), a = Sr(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Br(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (le(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const m = e - c, [h] = m > 0 ? u.splitText(m) : [void 0];
          let g, b = h?.getPreviousSibling();
          for (; b; ) {
            const k = b;
            b = b.getPreviousSibling(), g ? g.insertBefore(k) : s.append(k), g = k;
          }
          return h && s.append(h), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Bt(u))
      c += 1;
    else if (Be(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Sr(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (le(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && le(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (I(u)) {
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
  return d(De()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function Fv(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Es || !r || !Ft.isValidBookCode(r))
    return;
  const n = je(e, s_);
  return Eh(r, n);
}
function Xg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = je(e, i_), i = Vn(r, n);
  if (!_n(t))
    return i;
  if (t.markerMode === "editable")
    i.append(gt(r), Xs());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Le(r) + D;
    i.append(t.hasGutterParaMarkers ? Sx(s) : Fr("marker", s));
  }
  return i;
}
function zv(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = je(e, o_);
  let a;
  if (t.markerMode === "editable")
    a = Ph(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Kl(r, c, n, i, s, o);
  }
  return a;
}
function Kv(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = je(e, a_);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Xt(r, n);
    c = Uh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = cu(n, l, i, s, o, a);
  }
  return c;
}
function Bv(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = je(e, c_);
  return fh(t, r, n, s, i);
}
function Qg(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = je(n.note, l_), l = typeof c?.closed == "string" ? c.closed : void 0, d = e.attributes?.segment;
  let u;
  d && typeof d == "string" && (u = d);
  const f = [];
  for (const m of a?.ops ?? [])
    if (typeof m.insert == "string")
      if (hn(m.attributes)) {
        const h = Qi(m.attributes.char, t, be(m.insert), void 0, em(m.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...h);
      } else
        f.push(be(m.insert));
  return Dg(i, s, f, t, r, u, l).setCategory(o).setUnknownAttributes(c);
}
function Zg(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = je(i, u_), l = Fl(s, o, c), d = a?.ops ?? [];
  d.length > 0 && jv(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && St(l, fn, () => u), l;
}
function jv(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (hn(s.attributes)) {
        const o = be(s.insert), a = Qi(s.attributes.char, t, o, void 0, em(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(be(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (ln("unknown", s)) {
        const o = Zg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (ln("note", s)) {
        const o = Qg(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function Vv(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = nu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function em(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Hc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Qi(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(Qt);
  const a = () => {
    o && E(r) && r.getTextContent() !== Qt && r.setTextContent(D + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Hc), l = c[0], d = i?.[i.length - 1];
    if (F(d) && Wn(l, d)) {
      if (c.length > 1) {
        const f = Qi(c.slice(1), t, r, void 0, void 0, !0, o);
        nc(d, f);
      } else
        r && nc(d, [r]);
      return [];
    }
    a();
    const u = c.reduceRight((f, p, m) => {
      const h = zr(p.style, je(p, Uo));
      return typeof p.cid == "string" && St(h, jn, () => p.cid), n && m === c.length - 1 && St(h, fn, () => n), f && (F(f) && (sc(f.getMarker(), f, t, !0), ic(f, f, t, !0)), h.append(f)), h;
    }, r);
    return sc(l.style, u, t, s), ic(u, u, t, s), [u];
  } else {
    const c = Hc(e), l = i?.[i.length - 1];
    if (F(l) && Wn(c, l))
      return r && nc(l, [r]), [];
    a();
    const d = zr(c.style, je(c, Uo));
    return typeof c.cid == "string" && St(d, jn, () => c.cid), n && St(d, fn, () => n), r && d.append(r), sc(c.style, d, t, s), ic(d, d, t, s), [d];
  }
}
function nc(e, t) {
  const r = e.getLastChild();
  O(r) && r.getMarkerSyntax() === "closing" || Ut(r) && r.getTextType() === "marker" && r.getTextContent() === nt(e.getMarker(), F(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function ic(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && Wv(e.getMarker(), t, r, !1, n);
}
function sc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = gt(e, "opening", n) : r?.markerMode === "visible" && (i = Fr("marker", Le(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function Wv(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = gt("", "selfClosing") : s = gt(e, "closing", i) : r?.markerMode === "visible" && (s = Fr("marker", n ? nt("") : nt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function Hv(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Au(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function hn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function Gv(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Vt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        St(t, fn, () => n);
        continue;
      }
      if (Jv(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const tm = [
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
function Jv(e) {
  return tm.includes(e);
}
function Di(e) {
  return Ut(e) && Te(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function rm(e) {
  const t = Zs(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function Pu(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(zp(r) && t.offset === 0 || Te(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Di);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Te(s))
    return !1;
  const o = rm(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function Co(e) {
  const t = N();
  if (!P(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : E(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? Bh(t) : jl(t);
    return Di(n);
  }
  return Pu(t) && t.isCollapsed();
}
function Yv(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = Ae(t.anchor.getNode(), Te);
  if (!r || !Di(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return Co(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Di)) {
    const n = rm(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function ho() {
  const e = N();
  return P(e) && Pu(e), !1;
}
function Xv() {
  const e = N();
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !Te(r) || !Di(r.getFirstChild()) ? !1 : (Zt(r, 1), !0);
}
function Qv(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => pr(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function Zv() {
  const [e] = ae();
  return B(() => e.registerCommand(la, (t) => (eS(t), !1), Kn), [e]), B(() => Oe(
    e.registerCommand(ua, Co, Me),
    e.registerCommand(Pl, Co, Me),
    e.registerCommand(Eo, Co, Me),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(Eo, Yv, Cr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(Pi, ho, ke),
    e.registerCommand(Gt, ho, ke),
    e.registerCommand(lr, ho, ke),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Up, ho, ke)
  ), [e]), B(() => Oe(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(Dt, () => (Xv(), !1), Me),
    e.registerNodeTransform(Ft, Qv)
  ), [e]), null;
}
function eS(e) {
  if (tS(e.target))
    return;
  const t = N();
  P(t) && rS(t);
}
function Zi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Nt(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === D && (r++, t = t.getNextSibling());
    else if (me(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Zt(e, r), !0);
}
function tS(e) {
  if (!Fp(e))
    return !1;
  const t = Vi(e);
  if (!Mx(t))
    return !1;
  const r = t.getParent();
  return r ? at(r) ? Zi(r) : (Zt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function rS(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ne(t.key);
  if (!Be(r))
    return !1;
  const n = r.getFirstChild();
  return !pr(n) && !oi(n) ? !1 : Zi(r);
}
function nS() {
  const [e] = ae();
  return B(() => {
    const t = (r) => r instanceof KeyboardEvent && !iS(r) || !$s() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Oe(
      e.registerCommand(Pr, t, Me),
      e.registerCommand(Pi, t, Me),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(Gt, t, ke),
      e.registerCommand(lr, t, ke),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Nl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Vi(r.target);
        return !n || !gn(n) ? !1 : (r.preventDefault(), !0);
      }, Me),
      e.registerCommand(ua, t, Me),
      e.registerCommand(Pl, t, Me),
      e.registerCommand(Eo, t, Me)
    );
  }, [e]), null;
}
function iS(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function gn(e) {
  return Ae(e, Nu) ?? void 0;
}
function Nu(e) {
  return Ke(e) || bg(e);
}
function $s() {
  const e = N();
  return P(e) ? gn(e.anchor.getNode()) !== void 0 || gn(e.focus.getNode()) !== void 0 : !1;
}
function sS(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function oS(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), sS(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function aS(e, t, r, n) {
  if (!TS(t) || oS(e, r))
    return !1;
  const i = r === "up" ? n_(t) : r_(t);
  return i && n.preventDefault(), i;
}
function cS({ viewOptions: e }) {
  const [t] = ae();
  return lS(t, e), null;
}
function lS(e, t) {
  B(() => {
    if (!e.hasNodes([wr, wt, Pe]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = gf(o), u = mS(i, mf(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return aS(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = gf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return mf(a, n.key) ? l = !c && kf(i, "next") || !c && dS(i) || kS(i) || !c && s && bf(i, "next") : uS(a, n.key) && (l = !c && kf(i, "previous") || !c && fS(i) || xS(i, t) || !c && s && bf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Pr, r, Me);
  }, [e, t]);
}
function gf(e) {
  return e.dir || "ltr";
}
function mf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function uS(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Gc(e) {
  if (!F(e) || e.getMarker() !== "fp")
    return;
  const t = zt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function dS(e) {
  const t = Gc(jl(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Zt(t, 0), !0);
}
function fS(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Gc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : yf(n);
  }
  if (t.offset === 0) {
    const n = Gc(r);
    return n ? yf(n) : !1;
  }
  return !1;
}
function yf(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (E(t))
    return t.select(), !0;
  if (I(t)) {
    const i = t.getLastDescendant();
    return E(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Ko = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function pS(e) {
  if (Ko)
    for (const { segment: r } of Ko.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function hS(e) {
  if (Ko) {
    let n = 0;
    for (const { index: i } of Ko.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function nm(e) {
  for (let t = e; t; t = t.getParent())
    if (I(t) && !t.isInline())
      return t;
}
function im(e) {
  return !!e && O(e) && gn(e) !== void 0;
}
function Ui(e) {
  return E(e) && !e.isToken() && !im(e) && e.getTextContentSize() > 0;
}
function sm(e) {
  return ti(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || im(e)) && e.getTextContentSize() > 0 : ri(e) ? !Ze(e) : !1;
}
function Fi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Sa(e, t, r) {
  for (let n = e; n; ) {
    if (sm(n))
      return n;
    if (I(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Fi(n, t, r);
      continue;
    }
    if (Ui(n))
      return n;
    n = Fi(n, t, r);
  }
}
function wu(e, t, r, n, i) {
  return r === "element" && I(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Fi(e, n, i) : r === "text" && sm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Fi(e, n, i);
}
function oc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = wu(e.node, e.offset, e.kind, "previous", t), n = Sa(r, "previous", t);
  if (!n)
    return e;
  if (Ui(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function gS(e, t) {
  const r = e.getNode(), n = nm(r);
  if (!n)
    return;
  if (e.type === "text" && Ui(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return oc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = wu(r, e.offset, e.type, t, n), s = Sa(i, t, n);
  if (!s)
    return;
  if (Ui(s)) {
    const c = s.getTextContent(), l = t === "next" ? pS(c) : hS(c);
    return oc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return oc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function om(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = gS(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && I(i.node) ? ku(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function bf(e, t) {
  return om(e, t, "collapse");
}
function mS(e, t) {
  return om(e, t, "extend");
}
function yS(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && Ui(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = wu(n, e.offset, e.type, t, r);
  return Sa(i, t, r) === void 0;
}
function bS(e, t) {
  const r = De();
  for (let n = e; n; ) {
    const i = Fi(n, t, r), s = i && Sa(i, t, r);
    if (!s)
      return;
    if (n = gn(s), !n)
      return s;
  }
}
function kf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (gn(n))
    return !1;
  const i = nm(n);
  if (!i || !yS(r, t, i))
    return !1;
  const s = Fi(i, t, De()), o = s && gn(s);
  if (!o)
    return !1;
  const a = bS(o, t);
  if (!a)
    return !0;
  if (Ui(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function xf(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  ku(t, r);
}
function kS(e) {
  const t = e.anchor.getNode(), r = jl(e);
  if (K(r) && !O(r.getFirstChild())) {
    if (Be(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(at(i) && Zi(i)) && i.selectStart(), !0;
      }
    } else return Ut(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Be(t) && K(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : xf(r), !0;
  }
  const n = r?.getParent();
  if (Ut(r) && K(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? xf(n) : n.selectEnd(), !0;
  }
  return !1;
}
function xS(e, t) {
  const r = Bh(e);
  if (Hs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && Di(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Te(o) && !r)
    return !0;
  if (K(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!oi(c) && !Te(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const d = r.getIndexWithinParent();
    return l.select(d, d), !0;
  }
  if (Be(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = Ae(c, (d) => K(d));
    if (K(l) && l.getIsCollapsed()) {
      const d = l.getParent();
      if (!d)
        return !1;
      const u = l.getIndexWithinParent();
      return d.select(u, u), !0;
    }
  }
  const a = zt(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (mt(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function TS(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return me(t) && ri(t);
}
function CS() {
  const [e] = ae();
  return _S(e), null;
}
function _S(e) {
  B(() => {
    if (!e.hasNodes([xe]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Oe(
      e.registerNodeTransform(xe, MS),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(xe, PT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(xe, ag),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(xe, (t) => ws(Hn("char"), t)),
      e.registerNodeTransform(He, ES)
    );
  }, [e]);
}
function ac(e) {
  return e.getChildren().some(O);
}
function vS(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Gi(n)) {
    const i = n.getTextContent();
    i.startsWith(D) && (i === D ? n.remove() : n.setTextContent(i.slice(D.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function SS(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function MS(e) {
  if (!F(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (ac(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = se(e, jn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (F(i) && Wn({ style: t, cid: r }, i) && It(n, i.getUnknownAttributes()))
    if (ac(i)) {
      if (vS(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  F(s) && Wn({ style: t, cid: r }, s) && It(n, s.getUnknownAttributes()) && (ac(s) ? SS(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function ES(e) {
  const t = e.getParent();
  if (!F(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(Qt)) {
    const n = N();
    if (P(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function am(e) {
  return e.replaceAll("	", " ");
}
function cm() {
  const e = N();
  return !!e && !e.isCollapsed();
}
function lm(e) {
  const t = () => !cm();
  return Oe(e.registerCommand(Ni, t, bt), e.registerCommand(lr, t, bt));
}
const Ou = (e) => {
  e.dispatchCommand(Ni, null);
}, Ru = (e) => {
  e.dispatchCommand(lr, null);
}, qu = (e) => {
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
      n.setData(o, am(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Gt, s);
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
    r.setData("text/plain", am(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Gt, i);
  });
};
function AS() {
  const [e] = ae();
  return B(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(wi ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Ou(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Ru(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? $u(e) : qu(e)));
    };
    return Oe(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      lm(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function PS({ logger: e }) {
  const [t] = ae();
  return B(() => Oe(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Pr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Cr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Gt, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Cr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Nl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Cr)
  ), [t, e]), null;
}
const Bo = "editor-context-menu";
function Jc(e) {
  return `${Bo}-item-${e}`;
}
const NS = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function wS({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), A("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Jc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: A("span", { className: "text", children: i.title }) });
}
function OS({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return A("div", { className: "typeahead-popover", children: A("ul", { id: Bo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => A(wS, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let RS = 0;
class cs {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${RS++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function qS({ options: e } = {}) {
  const [t] = ae(), [r, n] = he(() => !t.isEditable()), [i, s] = he({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = he(void 0), c = We(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new cs("Cut", {
        onSelect: () => {
          Ru(t);
        },
        isDisabled: r
      }),
      new cs("Copy", {
        onSelect: () => {
          Ou(t);
        }
      }),
      new cs("Paste", {
        onSelect: () => {
          qu(t);
        },
        isDisabled: r
      }),
      new cs("Paste as Plain Text", {
        onSelect: () => {
          $u(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((m) => new cs(m.title, { onSelect: m.onSelect, isDisabled: m.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = Y(null), d = Y(null), u = ye(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return B(() => lm(t), [t]), B(() => {
    const f = (p) => {
      const m = p.target;
      t.getRootElement() === m || $h(m) || (p.preventDefault(), d.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, m) => {
      m?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), B(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const m = p.target;
      m instanceof Node && l.current?.contains(m) || u();
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
      const m = document.activeElement;
      if (!(m && m !== document.body && m !== d.current && !t.getRootElement()?.contains(m) && !l.current?.contains(m)))
        if (p.key === "ArrowDown")
          p.preventDefault(), p.stopPropagation(), a((h) => h === void 0 ? 0 : (h + 1) % c.length);
        else if (p.key === "ArrowUp")
          p.preventDefault(), p.stopPropagation(), a((h) => h === void 0 ? c.length - 1 : (h - 1 + c.length) % c.length);
        else if (p.key === "Enter") {
          p.preventDefault(), p.stopPropagation();
          const h = o === void 0 ? void 0 : c[o];
          h && !h.isDisabled && (t.update(() => {
            h.onSelect();
          }), u());
        } else {
          if (NS.has(p.key))
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
      return f.setAttribute("aria-controls", Bo), () => {
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
    const p = document.getElementById(Bo), m = document.getElementById(Jc(o));
    if (!p || !m)
      return;
    const h = p.getBoundingClientRect(), g = m.getBoundingClientRect(), b = g.top - h.top + p.scrollTop, k = g.bottom - h.top + p.scrollTop;
    b < p.scrollTop ? p.scrollTop = b : k > p.scrollTop + p.clientHeight && (p.scrollTop = k - p.clientHeight);
  }, [t, i.isOpen, o]), B(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), js(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: m } = f.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - m));
    f.style.left = `${h}px`, f.style.top = `${g}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Nk.createPortal(A("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: A(OS, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), u());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function $S(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function IS(e) {
  if (!uk(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function LS(e) {
  return mt(e);
}
function cc(e, t, r) {
  const n = Vi(t.node);
  if (!ri(n) || LS(n))
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
function DS(e, t) {
  if (N())
    return !1;
  const r = e.getRootElement(), n = lk(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Kp(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let d, u;
  if (n.isCollapsed)
    d = cc(e, c, IS(c)), u = d;
  else {
    const g = $S(n.getRangeAt(0), c);
    d = cc(e, c, g ? "before" : "after"), u = cc(e, l, g ? "after" : "before");
  }
  if (!d && !u)
    return !1;
  const f = d ?? c, p = u ?? l, m = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, h = Bp(m, e);
  return h ? (Ur(h), h.dirty = !t, t) : !1;
}
function US() {
  const [e] = ae(), t = Y(!1), r = Y(!1);
  return B(() => {
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
  }, [e]), B(() => e.registerCommand(Dt, () => (DS(e, t.current) && (r.current = !0), !1), ke), [e]), null;
}
function FS() {
  const [e] = ae();
  return B(() => e.registerCommand(Pr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(wi ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, ke), [e]), null;
}
function zS({ isEditable: e }) {
  const [t] = ae();
  return js(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function um(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Dr(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function lc(e) {
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
function xi(e, t) {
  let r;
  try {
    r = Tn();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function Tf(e) {
  return !!e && Js(ne(e));
}
function Iu(e) {
  const [t] = ae(), r = Y(void 0), n = ye((i) => {
    const s = N(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Tf(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = Zs(d, u), p = Js(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const m = nT();
        i.insertAfter(m), r.current = m.getKey(), l = m.getKey();
      }
      Zt(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = ne(a);
      E(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return B(() => {
    const i = () => {
      const a = e(), c = N(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (vt(Mt), Dr(t, Mt), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Gs(c) || !c.includes(Oi))
        return;
      const l = N(), d = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (iT(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(Oi).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = Oe(t.registerCommand(Dt, () => (i(), !1), Kn), t.registerCommand(wl, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Tf(a);
      }), c && t.update(() => {
        const l = ne(a);
        E(l) && l.remove();
      }, { tag: Mt }), r.current = void 0, !1;
    }, Kn), t.registerNodeTransform(He, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function KS() {
  const e = N();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = K(r) ? r : r.getParent();
  if (!K(n))
    return;
  const i = nv(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && Js(s); )
    s = s.getPreviousSibling();
  if (!s || E(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (r.is(n))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (r.is(s))
    return E(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = r.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function BS() {
  return Iu(KS), null;
}
function jS() {
  const e = N();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!I(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!me(i) || Zs(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || me(s))
    return i;
}
function VS() {
  return Iu(jS), null;
}
function WS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ae();
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
        const d = um(o);
        o.update(() => {
          d || vt($r), o.setEditorState(l), o.dispatchCommand(dk, void 0);
        }, { tag: ql });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const uc = "caller_highlight", HS = xn(function(t, r) {
  const [n] = ae(), i = Y(void 0), s = Y(void 0), o = ye(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const d = xr(a);
      return d ? (d.getChildren().find(mt) ?? Kr(d))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(uc), l?.classList.add(uc), s.current = l;
  }, [n]);
  return oa(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : xi(n, () => xr(a)?.getKey()), o();
    }
  }), [n, o]), B(() => Oe(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Pe, (a, { prevEditorState: c, updateTags: l }) => {
      const d = i.current;
      if (d === void 0 || a.get(d) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const u = l.has(ql) ? void 0 : c.read(() => hu(d)), f = u === void 0 ? void 0 : n.getEditorState().read(() => xr(u)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), B(() => () => s.current?.classList.remove(uc), []), null;
});
function GS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return JS(t, n), YS(i, e, r, n), null;
}
function JS(e, t) {
  const r = Y(void 0), n = Y(void 0), i = e.noteCallers, s = e.crossRefCallers;
  B(() => {
    let o = i;
    (!o || o.length <= 0) && (o = B_), r.current !== o && (r.current = o, Cf("note-callers", o, t));
  }, [t, i]), B(() => {
    let o = s;
    (!o || o.length <= 0) && (o = j_), n.current !== o && (n.current = o, Cf("cross-ref-callers", o, t));
  }, [t, s]);
}
function YS(e, t, r, n) {
  B(() => {
    if (!e.hasNodes([xe, Pe, or]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => nM(s));
    return Oe(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Pe, (s) => XS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(xe, QS),
      e.registerNodeTransform(He, ZS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(or, eM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(or, (s, { prevEditorState: o }) => tM(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Dt, () => rM(e, t, r, n), bt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function XS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => mt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !O(i) && i.getTextContent() !== Kt(e.getCaller()) && e.insertBefore(i);
  }
}
function QS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => mt(s));
  if (!F(e) || !K(t) || !n)
    return;
  const i = Vl(r);
  n.getPreviewText() !== i && n.setPreviewText(i), fm(e);
}
function dm(e) {
  const t = N();
  if (!P(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function fm(e) {
  const t = e.getNextSibling();
  if (E(t) && !O(t)) {
    if (t.getTextContent() === D || dm(t))
      return;
    if (Or(t)) {
      t.setTextContent(D);
      return;
    }
  }
  e.insertAfter(Xs());
}
function ZS(e) {
  const t = zt(e), r = t?.getChildren(), n = r?.find((a) => mt(a));
  if (!E(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent(), s = Or(e) || dm(e);
  if (!O(e) && K(i) && s && e.getTextContent() !== D && (e.setTextContent(D), e.selectEnd()), F(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(Qt) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = Vl(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function eM(e) {
  mt(e) && fm(e);
}
function tM(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ne(r), a = o?.getParent();
      return mt(o) && K(a) && a.getCaller() === _s;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function rM(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = N();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Ae(o, (c) => K(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ne(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), ls(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, ls(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, ls(e, c, n);
    } else if (!a) {
      const c = Ae(o, (l) => K(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      Be(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, ls(e, l, n);
      }
    }
  }
  if (at(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (oi(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, ls(e, l, n);
    }
  }
  return !1;
}
function ls(e, t, r) {
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
function nM(e) {
  const t = N();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && E(s)) {
    e.preventDefault();
    const o = zn();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Ur(o);
  }
}
function Cf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (iM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function iM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function vr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Kr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function sM(e) {
  const t = e.getParent();
  if (K(t))
    return vr(t).some((r) => r.is(e)) ? t : void 0;
}
function Yn(e) {
  const t = vr(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function oM(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function aM(e) {
  const t = fk();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Yn(e);
  const i = oM(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Yn(e);
}
function _i(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = sM(t);
  if (r)
    return pm(r, t, e.offset) ? void 0 : r;
}
function pm(e, t, r) {
  const n = vr(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function cM(e) {
  const t = vr(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Zt(e, Yn(e));
}
function lM(e = !1) {
  const t = N();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return ym(t);
  const r = hm(t.anchor);
  if (r) {
    const i = Vo(r);
    return t.anchor.is(i) ? !1 : (gm(t, i), !0);
  }
  const n = _i(t.anchor);
  if (!n)
    return !1;
  if (!e && aM(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    Zt(i, n.getIndexWithinParent());
  } else
    cM(n);
  return !0;
}
function jo(e) {
  const t = vr(e), r = t[t.length - 1];
  return E(r) ? sr(r.getKey(), r.getTextContentSize(), "text") : sr(e.getKey(), Yn(e), "element");
}
function zi(e) {
  const t = e.getLastChild();
  return O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function dc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === zi(e) && O(r) && t.offset > 0;
}
function Yc(e) {
  const t = zi(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Vo(e) {
  const t = zi(e);
  if (t > Yn(e)) {
    const r = e.getChildAtIndex(t - 1), n = I(r) ? r.getLastDescendant() : r;
    if (E(n))
      return sr(n.getKey(), n.getTextContentSize(), "text");
  }
  return jo(e);
}
function hm(e) {
  const t = e.getNode(), r = t.getParent();
  if (K(r) && vr(r).length > 0 && Yc(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (K(t) && vr(t).length > 0 && Yc(t))
    return e.offset > zi(t) || e.offset === zi(t) && e.offset > Yn(t) ? t : void 0;
  if (!I(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return K(n) && vr(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function gm(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function mm(e) {
  const t = zt(e);
  return t && vr(t).length > 0 ? t : void 0;
}
function uM(e) {
  const t = [], r = (n) => {
    const i = mm(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function ym(e) {
  const t = uM(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => sr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const d = sr(l.getKey(), Yn(l), "element"), u = sr(l.getKey(), zi(l), "element"), f = i.type === "text" && pm(l, i.getNode(), i.offset), p = i.isBefore(d) && !f;
    (_i(i) || dc(l, i) || p) && (!s.isBefore(d) || _i(s)) && (i = dc(l, i) ? Vo(l) : jo(l), o = !0), (_i(s) || dc(l, s) || u.isBefore(s)) && (i.isBefore(u) || i.is(u)) && (s = _i(s) ? jo(l) : Vo(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function _f(e, t) {
  const r = zn();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function vf(e, t) {
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
function Sf(e, t, r) {
  const n = vf(e, t), i = vf(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function dM(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return I(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function fM(e, t, r, n) {
  const i = t.anchor, s = hm(i);
  if (s)
    return gm(t, Vo(s)), !0;
  const o = mm(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const u = dM(t.focus);
    return K(u) && vr(u).length > 0;
  }
  if (_i(i))
    return !0;
  const a = jo(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const u = _f(a, i);
    return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && Sf(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = Yc(o);
  if (!c)
    return !1;
  const l = sr(c.getKey(), 0, "text"), d = _f(i, l);
  return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && Sf(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function pM() {
  const [e] = ae(), t = Y(!1);
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
      const a = N();
      return !P(a) || a.isCollapsed() || !ym(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = N();
      return P(c) ? c.isCollapsed() ? fM(e, c, a, o) : i() : !1;
    };
    return Oe(e.registerCommand(Pi, n, ke), e.registerCommand(Gt, n, ke), e.registerCommand(vi, n, ke), e.registerCommand(jp, n, ke), e.registerCommand(ua, s("character"), ke), e.registerCommand(Pl, s("word"), ke), e.registerCommand(Eo, s("line"), ke), e.registerCommand(Up, i, ke), e.registerCommand(lr, i, ke));
  }, [e]), B(() => e.registerCommand(Dt, () => (lM(t.current) && (vt(Mt), Dr(e, Mt)), !1), Kn), [e]), null;
}
function hM({ onChange: e }) {
  const [t] = ae();
  return B(() => t.registerCommand(Dt, () => {
    const r = mu();
    return e?.(r), !1;
  }, bt), [t, e]), null;
}
function gM() {
  const [e] = ae();
  return mM(e), null;
}
function mM(e) {
  B(() => {
    if (!e.hasNodes([ct]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(ct, (t) => yM(t, e));
  }, [e]);
}
function yM(e, t) {
  Kc(t, e.getKey()) && wg(e.getFirstChild()), !(!le(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ne(e.getKey());
    return le(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function bm({ onStateChange: e }) {
  const [t] = ae(), [r, n] = he(t), i = Y(!1), s = Y(!1), o = Y(void 0), a = Y(void 0), c = ye(() => {
    const l = N();
    let d;
    if (P(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : Ae(u, (b) => {
        const k = b.getParent();
        return k !== null && pk(k);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Os(p) && (p = Ae(u, le) ?? p);
      const m = p.getKey(), h = r.getElementByKey(m), g = lT(u, f);
      if (g && t_(g) && (d = g.getMarker()), h !== null && (le(p) || Te(p) || Hs(p))) {
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
  return B(() => t.registerCommand(Dt, (l, d) => (c(), n(d), !1), ke), [t, c]), B(() => Oe(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(hk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ke), r.registerCommand(gk, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ke)), [c, r, e]), null;
}
function km(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function mn(e) {
  return e ? Be(e) ? e : Ae(e, (r) => Be(r)) ?? void 0 : void 0;
}
function xm(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = mn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Lu(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !ca(e) ? !1 : e.getNodes().some((t) => me(t));
}
function Tm(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = mn(r);
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
function Cm(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = mn(r);
  if (!n)
    return !1;
  if (I(r)) {
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
function Mf(e, t) {
  return !!Xc(e, t);
}
function Xc(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && I(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return me(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return me(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return me(i) ? i : void 0;
}
function Wo(e, t) {
  if (!P(e))
    return !1;
  const r = mn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Ei(e) {
  return Lu(e) || xm(e);
}
function _m(e, t) {
  if (Lu(e) || xm(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Tm(e) && Wo(e, "backward") || Mf(e, "backward");
    case "deleteForward":
      return Cm(e) && Wo(e, "forward") || Mf(e, "forward");
    case "insertText":
      return !1;
  }
}
function bM(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Xc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Tm(e) && Wo(e, "backward")) {
        const n = mn(e.anchor.getNode());
        if (at(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Xc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Cm(e) && Wo(e, "forward")) {
        const i = mn(e.anchor.getNode())?.getNextSibling();
        if (at(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Ef(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return ca(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!P(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!P(e) || e.isCollapsed())
    return !1;
  const r = mn(e.anchor.getNode()), n = mn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function vm(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else I(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function kM(e) {
  const t = e.getPreviousSibling();
  if (!Be(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = Nt(n), s = e.getChildren().filter((o) => !Or(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? vm(r) : Zi(t) || t.selectStart();
}
function Sm(e) {
  return me(e) || Ge(e) ? [] : at(e) ? e.getChildren().flatMap(Sm) : [e];
}
function xM(e) {
  const t = [];
  for (const r of e) {
    const n = Sm(r);
    n.length !== 0 && (at(r) && t.length > 0 && t.push(be(" ")), t.push(...n));
  }
  return t;
}
function Af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function TM(e) {
  if (Array.isArray(e)) return e;
}
function CM(e, t) {
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
function _M() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vM(e, t) {
  return TM(e) || CM(e, t) || SM(e, t) || _M();
}
function SM(e, t) {
  if (e) {
    if (typeof e == "string") return Af(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Af(e, t) : void 0;
  }
}
const Mm = Object.entries, Pf = Object.setPrototypeOf, MM = Object.isFrozen, EM = Object.getPrototypeOf, AM = Object.getOwnPropertyDescriptor;
let ut = Object.freeze, ft = Object.seal, Ti = Object.create, Em = typeof Reflect < "u" && Reflect, Qc = Em.apply, Zc = Em.construct;
ut || (ut = function(t) {
  return t;
});
ft || (ft = function(t) {
  return t;
});
Qc || (Qc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Zc || (Zc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const yi = tt(Array.prototype.forEach), PM = tt(Array.prototype.lastIndexOf), Nf = tt(Array.prototype.pop), bi = tt(Array.prototype.push), NM = tt(Array.prototype.splice), un = Array.isArray, gs = tt(String.prototype.toLowerCase), fc = tt(String.prototype.toString), wf = tt(String.prototype.match), us = tt(String.prototype.replace), Of = tt(String.prototype.indexOf), wM = tt(String.prototype.trim), OM = tt(Number.prototype.toString), RM = tt(Boolean.prototype.toString), Rf = typeof BigInt > "u" ? null : tt(BigInt.prototype.toString), qf = typeof Symbol > "u" ? null : tt(Symbol.prototype.toString), st = tt(Object.prototype.hasOwnProperty), ds = tt(Object.prototype.toString), it = tt(RegExp.prototype.test), $n = qM(TypeError);
function tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Qc(e, t, n);
  };
}
function qM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Zc(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gs;
  if (Pf && Pf(e, null), !un(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (MM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function $M(e) {
  for (let t = 0; t < e.length; t++)
    st(e, t) || (e[t] = null);
  return e;
}
function ht(e) {
  const t = Ti(null);
  for (const n of Mm(e)) {
    var r = vM(n, 2);
    const i = r[0], s = r[1];
    st(e, i) && (un(s) ? t[i] = $M(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ht(s) : t[i] = s);
  }
  return t;
}
function IM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return OM(e);
    case "boolean":
      return RM(e);
    case "bigint":
      return Rf ? Rf(e) : "0";
    case "symbol":
      return qf ? qf(e) : "Symbol()";
    case "undefined":
      return ds(e);
    case "function":
    case "object": {
      if (e === null)
        return ds(e);
      const t = e, r = rr(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : ds(n);
      }
      return ds(e);
    }
    default:
      return ds(e);
  }
}
function rr(e, t) {
  for (; e !== null; ) {
    const n = AM(e, t);
    if (n) {
      if (n.get)
        return tt(n.get);
      if (typeof n.value == "function")
        return tt(n.value);
    }
    e = EM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function LM(e) {
  try {
    return it(e, ""), !0;
  } catch {
    return !1;
  }
}
const $f = ut(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), pc = ut(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), hc = ut(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), DM = ut(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), gc = ut(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), UM = ut(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), If = ut(["#text"]), Lf = ut(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), mc = ut(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Df = ut(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), go = ut(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), FM = ft(/{{[\w\W]*|^[\w\W]*}}/g), zM = ft(/<%[\w\W]*|^[\w\W]*%>/g), KM = ft(/\${[\w\W]*/g), BM = ft(/^data-[\-\w.\u00B7-\uFFFF]+$/), jM = ft(/^aria-[\-\w]+$/), Uf = ft(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), VM = ft(/^(?:\w+script|data):/i), WM = ft(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), HM = ft(/^html$/i), GM = ft(/^[a-z][.\w]*(-[.\w]+)+$/i), Ff = ft(/<[/\w!]/g), zf = ft(/<[/\w]/g), JM = ft(/<\/no(script|embed|frames)/i), YM = ft(/\/>/i), $t = {
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
}, XM = function() {
  return typeof window > "u" ? null : window;
}, QM = function(t, r) {
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
}, Kf = function() {
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
}, cn = function(t, r, n, i) {
  return st(t, r) && un(t[r]) ? ge(i.base ? ht(i.base) : {}, t[r], i.transform) : n;
};
function Am() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : XM();
  const t = (j) => Am(j);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== $t.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = rr(f, "cloneNode"), m = rr(f, "remove"), h = rr(f, "nextSibling"), g = rr(f, "childNodes"), b = rr(f, "parentNode"), k = rr(f, "shadowRoot"), _ = rr(f, "attributes"), M = o && o.prototype ? rr(o.prototype, "nodeType") : null, C = o && o.prototype ? rr(o.prototype, "nodeName") : null, $ = o && o.prototype ? rr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const j = r.createElement("template");
    j.content && j.content.ownerDocument && (r = j.content.ownerDocument);
  }
  let w, z = "", v, V = !1, H = 0;
  const fe = function() {
    if (H > 0)
      throw $n('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Q = function(y) {
    fe(), H++;
    try {
      return w.createHTML(y);
    } finally {
      H--;
    }
  }, Ue = function(y) {
    fe(), H++;
    try {
      return w.createScriptURL(y);
    } finally {
      H--;
    }
  }, _e = function() {
    return V || (v = QM(u, i), V = !0), v;
  }, hr = r, Ve = hr.implementation, Qr = hr.createNodeIterator, Zr = hr.createDocumentFragment, vn = hr.getElementsByTagName, ee = n.importNode;
  let R = Kf();
  t.isSupported = typeof Mm == "function" && typeof b == "function" && Ve && Ve.createHTMLDocument !== void 0;
  const te = FM, ce = zM, Ne = KM, lt = BM, Z = jM, Ye = VM, gr = WM, es = GM;
  let en = Uf, ie = null;
  const pt = ge({}, [...$f, ...pc, ...hc, ...gc, ...If]);
  let pe = null;
  const ai = ge({}, [...Lf, ...mc, ...Df, ...go]);
  let ve = Object.seal(Ti(null, {
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
  })), Sn = null, ci = null;
  const er = Object.seal(Ti(null, {
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
  let tn = !0, rn = !0, no = !1, nn = !0, Rt = !1, tr = !0, mr = !1, ts = !1, Mn = null, q = null, L = !1, W = !1, G = !1, de = !1, Xe = !0, Re = !1;
  const Qe = "user-content-";
  let qt = !0, En = !1, qr = {}, rt = null;
  const rs = ge({}, [
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
  let io = null;
  const An = ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let $a = null;
  const ad = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), so = "http://www.w3.org/1998/Math/MathML", oo = "http://www.w3.org/2000/svg", yr = "http://www.w3.org/1999/xhtml";
  let li = yr, Ia = !1, La = null;
  const wb = ge({}, [so, oo, yr], fc), cd = ut(["mi", "mo", "mn", "ms", "mtext"]);
  let Da = ge({}, cd);
  const ld = ut(["annotation-xml"]);
  let Ua = ge({}, ld);
  const Ob = ge({}, ["title", "style", "font", "a", "script"]);
  let ns = null;
  const Rb = ["application/xhtml+xml", "text/html"], qb = "text/html";
  let Fe = null, ui = null;
  const $b = r.createElement("form"), ud = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Fa = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ui && ui === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = ht(y), ns = // eslint-disable-next-line unicorn/prefer-includes
    Rb.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? qb : y.PARSER_MEDIA_TYPE, Fe = ns === "application/xhtml+xml" ? fc : gs, ie = cn(y, "ALLOWED_TAGS", pt, {
      transform: Fe
    }), pe = cn(y, "ALLOWED_ATTR", ai, {
      transform: Fe
    }), La = cn(y, "ALLOWED_NAMESPACES", wb, {
      transform: fc
    }), $a = cn(y, "ADD_URI_SAFE_ATTR", ad, {
      transform: Fe,
      base: ad
    }), io = cn(y, "ADD_DATA_URI_TAGS", An, {
      transform: Fe,
      base: An
    }), rt = cn(y, "FORBID_CONTENTS", rs, {
      transform: Fe
    }), Sn = cn(y, "FORBID_TAGS", ht({}), {
      transform: Fe
    }), ci = cn(y, "FORBID_ATTR", ht({}), {
      transform: Fe
    }), qr = st(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? ht(y.USE_PROFILES) : y.USE_PROFILES : !1, tn = y.ALLOW_ARIA_ATTR !== !1, rn = y.ALLOW_DATA_ATTR !== !1, no = y.ALLOW_UNKNOWN_PROTOCOLS || !1, nn = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Rt = y.SAFE_FOR_TEMPLATES || !1, tr = y.SAFE_FOR_XML !== !1, mr = y.WHOLE_DOCUMENT || !1, W = y.RETURN_DOM || !1, G = y.RETURN_DOM_FRAGMENT || !1, de = y.RETURN_TRUSTED_TYPE || !1, L = y.FORCE_BODY || !1, Xe = y.SANITIZE_DOM !== !1, Re = y.SANITIZE_NAMED_PROPS || !1, qt = y.KEEP_CONTENT !== !1, En = y.IN_PLACE || !1, en = LM(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : Uf, li = typeof y.NAMESPACE == "string" ? y.NAMESPACE : yr, Da = st(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ht(y.MATHML_TEXT_INTEGRATION_POINTS) : ge({}, cd), Ua = st(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? ht(y.HTML_INTEGRATION_POINTS) : ge({}, ld);
    const S = st(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? ht(y.CUSTOM_ELEMENT_HANDLING) : Ti(null);
    if (ve = Ti(null), st(S, "tagNameCheck") && ud(S.tagNameCheck) && (ve.tagNameCheck = S.tagNameCheck), st(S, "attributeNameCheck") && ud(S.attributeNameCheck) && (ve.attributeNameCheck = S.attributeNameCheck), st(S, "allowCustomizedBuiltInElements") && typeof S.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = S.allowCustomizedBuiltInElements), ft(ve), Rt && (rn = !1), G && (W = !0), qr && (ie = ge({}, If), pe = Ti(null), qr.html === !0 && (ge(ie, $f), ge(pe, Lf)), qr.svg === !0 && (ge(ie, pc), ge(pe, mc), ge(pe, go)), qr.svgFilters === !0 && (ge(ie, hc), ge(pe, mc), ge(pe, go)), qr.mathMl === !0 && (ge(ie, gc), ge(pe, Df), ge(pe, go))), er.tagCheck = null, er.attributeCheck = null, st(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? er.tagCheck = y.ADD_TAGS : un(y.ADD_TAGS) && (ie === pt && (ie = ht(ie)), ge(ie, y.ADD_TAGS, Fe))), st(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? er.attributeCheck = y.ADD_ATTR : un(y.ADD_ATTR) && (pe === ai && (pe = ht(pe)), ge(pe, y.ADD_ATTR, Fe))), st(y, "ADD_URI_SAFE_ATTR") && un(y.ADD_URI_SAFE_ATTR) && ge($a, y.ADD_URI_SAFE_ATTR, Fe), st(y, "FORBID_CONTENTS") && un(y.FORBID_CONTENTS) && (rt === rs && (rt = ht(rt)), ge(rt, y.FORBID_CONTENTS, Fe)), st(y, "ADD_FORBID_CONTENTS") && un(y.ADD_FORBID_CONTENTS) && (rt === rs && (rt = ht(rt)), ge(rt, y.ADD_FORBID_CONTENTS, Fe)), qt && (ie["#text"] = !0), mr && ge(ie, ["html", "head", "body"]), ie.table && (ge(ie, ["tbody"]), delete Sn.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw $n('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw $n('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = w;
      w = y.TRUSTED_TYPES_POLICY;
      try {
        z = Q("");
      } catch (J) {
        throw w = U, J;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (w = void 0, z = "") : (w === void 0 && (w = _e()), w && typeof z == "string" && (z = Q("")));
    ut && ut(y), ui = y;
  }, dd = ge({}, [...pc, ...hc, ...DM]), fd = ge({}, [...gc, ...UM]), Ib = function(y, S, U) {
    return S.namespaceURI === yr ? y === "svg" : S.namespaceURI === so ? y === "svg" && (U === "annotation-xml" || Da[U]) : !!dd[y];
  }, Lb = function(y, S, U) {
    return S.namespaceURI === yr ? y === "math" : S.namespaceURI === oo ? y === "math" && Ua[U] : !!fd[y];
  }, Db = function(y, S, U) {
    return S.namespaceURI === oo && !Ua[U] || S.namespaceURI === so && !Da[U] ? !1 : !fd[y] && (Ob[y] || !dd[y]);
  }, Ub = function(y) {
    let S = b(y);
    (!S || !S.tagName) && (S = {
      namespaceURI: li,
      tagName: "template"
    });
    const U = gs(y.tagName), J = gs(S.tagName);
    return La[y.namespaceURI] ? y.namespaceURI === oo ? Ib(U, S, J) : y.namespaceURI === so ? Lb(U, S, J) : y.namespaceURI === yr ? Db(U, S, J) : !!(ns === "application/xhtml+xml" && La[y.namespaceURI]) : !1;
  }, sn = function(y) {
    bi(t.removed, {
      element: y
    });
    try {
      b(y).removeChild(y);
    } catch {
      if (m(y), !b(y))
        throw $n("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ao = function(y) {
    is(y);
    const S = g(y);
    if (S) {
      const J = [];
      yi(S, (X) => {
        bi(J, X);
      }), yi(J, (X) => {
        try {
          m(X);
        } catch {
        }
      });
    }
    const U = _(y);
    if (U)
      for (let J = U.length - 1; J >= 0; --J) {
        const X = U[J], oe = X && X.name;
        if (typeof oe == "string")
          try {
            y.removeAttribute(oe);
          } catch {
          }
      }
  }, Pn = function(y, S) {
    try {
      bi(t.removed, {
        attribute: S.getAttributeNode(y),
        from: S
      });
    } catch {
      bi(t.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(y), y === "is")
      if (W || G)
        try {
          sn(S);
        } catch {
        }
      else
        try {
          S.setAttribute(y, "");
        } catch {
        }
  }, Fb = function(y) {
    const S = _(y);
    if (S)
      for (let U = S.length - 1; U >= 0; --U) {
        const J = S[U], X = J && J.name;
        if (!(typeof X != "string" || pe[Fe(X)]))
          try {
            y.removeAttribute(X);
          } catch {
          }
      }
  }, is = function(y) {
    const S = [y];
    for (; S.length > 0; ) {
      const U = S.pop();
      (M ? M(U) : U.nodeType) === $t.element && Fb(U);
      const X = g(U);
      if (X)
        for (let oe = X.length - 1; oe >= 0; --oe)
          S.push(X[oe]);
    }
  }, zb = function(y) {
    if (!tr)
      return;
    const S = [y];
    for (; S.length > 0; ) {
      const U = S.pop(), J = M ? M(U) : U.nodeType;
      if (J === $t.processingInstruction || J === $t.comment && it(zf, U.data)) {
        try {
          m(U);
        } catch {
        }
        continue;
      }
      if (J === $t.element) {
        const oe = U, Se = Fe(C ? C(U) : U.nodeName);
        try {
          oe.hasAttribute && oe.hasAttribute("patchsrc") && oe.removeAttribute("patchsrc"), oe.hasAttribute && oe.hasAttribute("for") && Se !== "label" && Se !== "output" && oe.removeAttribute("for");
        } catch {
        }
      }
      const X = g(U);
      if (X)
        for (let oe = X.length - 1; oe >= 0; --oe)
          S.push(X[oe]);
    }
  }, pd = function(y) {
    let S = null, U = null;
    if (L)
      y = "<remove></remove>" + y;
    else {
      const oe = wf(y, /^[\r\n\t ]+/);
      U = oe && oe[0];
    }
    ns === "application/xhtml+xml" && li === yr && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const J = w ? Q(y) : y;
    if (li === yr)
      try {
        S = new d().parseFromString(J, ns);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = Ve.createDocument(li, "template", null);
      try {
        S.documentElement.innerHTML = Ia ? z : J;
      } catch {
      }
    }
    const X = S.body || S.documentElement;
    return y && U && X.insertBefore(r.createTextNode(U), X.childNodes[0] || null), li === yr ? vn.call(S, mr ? "html" : "body")[0] : mr ? S.documentElement : X;
  }, hd = function(y) {
    const S = $ ? $(y) : y.ownerDocument;
    return Qr.call(
      S || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, co = function(y) {
    return y = us(y, te, " "), y = us(y, ce, " "), y = us(y, Ne, " "), y;
  }, za = function(y) {
    var S;
    y.normalize();
    const U = $ ? $(y) : y.ownerDocument, J = Qr.call(
      U || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = J.nextNode();
    for (; X; )
      X.data = co(X.data), X = J.nextNode();
    const oe = (S = y.querySelectorAll) === null || S === void 0 ? void 0 : S.call(y, "template");
    oe && yi(oe, (Se) => {
      di(Se.content) && za(Se.content);
    });
  }, lo = function(y) {
    const S = C ? C(y) : null;
    return typeof S != "string" || Fe(S) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== _(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== M(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, di = function(y) {
    if (!M || typeof y != "object" || y === null)
      return !1;
    try {
      return M(y) === $t.documentFragment;
    } catch {
      return !1;
    }
  }, ss = function(y) {
    if (!M || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof M(y) == "number";
    } catch {
      return !1;
    }
  };
  function br(j, y, S) {
    j.length !== 0 && yi(j, (U) => {
      U.call(t, y, S, ui);
    });
  }
  const Kb = function(y, S) {
    return !!(tr && y.hasChildNodes() && !ss(y.firstElementChild) && it(Ff, y.textContent) && it(Ff, y.innerHTML) || tr && y.namespaceURI === yr && S === "style" && ss(y.firstElementChild) || y.nodeType === $t.processingInstruction || tr && y.nodeType === $t.comment && it(zf, y.data));
  }, Bb = function(y, S, U) {
    if (!Sn[S] && bd(S) && (ve.tagNameCheck instanceof RegExp && it(ve.tagNameCheck, S) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(S)))
      return !1;
    if (qt && !rt[S]) {
      const J = b(y), X = g(y);
      if (X && J) {
        const oe = X.length;
        for (let Se = oe - 1; Se >= 0; --Se) {
          const ze = y === U ? p(X[Se], !0) : X[Se];
          J.insertBefore(ze, h(y));
        }
      }
    }
    return sn(y), !0;
  }, gd = function(y, S, U, J) {
    return y.length === 0 ? S : S === U || S === J ? ht(S) : S;
  }, md = function(y, S) {
    if (br(R.beforeSanitizeElements, y, null), y !== S && b(y) === null)
      return En && is(y), !0;
    if (lo(y))
      return sn(y), !0;
    const U = Fe(C ? C(y) : y.nodeName);
    if (ie = gd(R.uponSanitizeElement, ie, pt, Mn), br(R.uponSanitizeElement, y, {
      tagName: U,
      allowedTags: ie
    }), y !== S && b(y) === null)
      return En && is(y), !0;
    if (Kb(y, U))
      return sn(y), !0;
    if (Sn[U] || !(er.tagCheck instanceof Function && er.tagCheck(U)) && !ie[U]) {
      const X = Bb(y, U, S);
      return X === !1 && br(R.afterSanitizeElements, y, null), X;
    }
    if ((M ? M(y) : y.nodeType) === $t.element && !Ub(y) || (U === "noscript" || U === "noembed" || U === "noframes") && it(JM, y.innerHTML))
      return sn(y), !0;
    if (Rt && y.nodeType === $t.text) {
      const X = co(y.textContent);
      y.textContent !== X && (bi(t.removed, {
        element: y.cloneNode()
      }), y.textContent = X);
    }
    return br(R.afterSanitizeElements, y, null), !1;
  }, yd = function(y, S, U) {
    if (ci[S] || tr && S === "patchsrc" || tr && S === "for" && y !== "label" && y !== "output" || Xe && (S === "id" || S === "name") && (U in r || U in $b))
      return !1;
    const J = pe[S] || er.attributeCheck instanceof Function && er.attributeCheck(S, y);
    if (!(rn && it(lt, S))) {
      if (!(tn && it(Z, S))) {
        if (J) {
          if (!$a[S]) {
            if (!it(en, us(U, gr, ""))) {
              if (!((S === "src" || S === "xlink:href" || S === "href") && y !== "script" && Of(U, "data:") === 0 && io[y])) {
                if (!(no && !it(Ye, us(U, gr, "")))) {
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
          !(bd(y) && (ve.tagNameCheck instanceof RegExp && it(ve.tagNameCheck, y) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(y)) && (ve.attributeNameCheck instanceof RegExp && it(ve.attributeNameCheck, S) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(S, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          S === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && it(ve.tagNameCheck, U) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(U)))
        ) return !1;
      }
    }
    return !0;
  }, jb = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), bd = function(y) {
    return !jb[gs(y)] && it(es, y);
  }, Vb = function(y, S, U, J) {
    if (w && typeof u == "object" && typeof u.getAttributeType == "function" && !U)
      switch (u.getAttributeType(y, S)) {
        case "TrustedHTML":
          return Q(J);
        case "TrustedScriptURL":
          return Ue(J);
      }
    return J;
  }, Wb = function(y, S, U, J) {
    try {
      U ? y.setAttributeNS(U, S, J) : y.setAttribute(S, J), lo(y) ? sn(y) : Nf(t.removed);
    } catch {
      Pn(S, y);
    }
  }, kd = function(y) {
    br(R.beforeSanitizeAttributes, y, null);
    const S = y.attributes;
    if (!S || lo(y))
      return;
    pe = gd(R.uponSanitizeAttribute, pe, ai, q);
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: pe,
      forceKeepAttr: void 0
    };
    let J = S.length;
    const X = Fe(y.nodeName);
    for (; J--; ) {
      const oe = S[J], Se = oe.name, ze = oe.namespaceURI, Ct = oe.value, _t = Fe(Se), Ba = Ct;
      let yt = Se === "value" ? Ba : wM(Ba);
      if (U.attrName = _t, U.attrValue = yt, U.keepAttr = !0, U.forceKeepAttr = void 0, br(R.uponSanitizeAttribute, y, U), yt = U.attrValue, Re && (_t === "id" || _t === "name") && Of(yt, Qe) !== 0 && (Pn(Se, y), yt = Qe + yt), tr && it(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, yt)) {
        Pn(Se, y);
        continue;
      }
      if (_t === "attributename" && wf(yt, "href")) {
        Pn(Se, y);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          Pn(Se, y);
          continue;
        }
        if (!nn && it(YM, yt)) {
          Pn(Se, y);
          continue;
        }
        if (Rt && (yt = co(yt)), !yd(X, _t, yt)) {
          Pn(Se, y);
          continue;
        }
        yt = Vb(X, _t, ze, yt), yt !== Ba && Wb(y, Se, ze, yt);
      }
    }
    br(R.afterSanitizeAttributes, y, null);
  }, uo = function(y) {
    let S = null;
    const U = hd(y);
    for (br(R.beforeSanitizeShadowDOM, y, null); S = U.nextNode(); )
      if (br(R.uponSanitizeShadowNode, S, null), md(S, y), kd(S), di(S.content) && uo(S.content), (M ? M(S) : S.nodeType) === $t.element) {
        const X = k(S);
        di(X) && (Ka(X), uo(X));
      }
    br(R.afterSanitizeShadowDOM, y, null);
  }, Ka = function(y) {
    const S = [{
      node: y,
      shadow: null
    }];
    for (; S.length > 0; ) {
      const U = S.pop();
      if (U.shadow) {
        uo(U.shadow);
        continue;
      }
      const J = U.node, oe = (M ? M(J) : J.nodeType) === $t.element, Se = g(J);
      if (Se)
        for (let ze = Se.length - 1; ze >= 0; --ze)
          S.push({
            node: Se[ze],
            shadow: null
          });
      if (oe) {
        const ze = C ? C(J) : null;
        if (typeof ze == "string" && Fe(ze) === "template") {
          const Ct = J.content;
          di(Ct) && S.push({
            node: Ct,
            shadow: null
          });
        }
      }
      if (oe) {
        const ze = k(J);
        di(ze) && S.push({
          node: null,
          shadow: ze
        }, {
          node: ze,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(j) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, U = null, J = null, X = null;
    if (Ia = !j, Ia && (j = "<!-->"), typeof j != "string" && !ss(j) && (j = IM(j), typeof j != "string"))
      throw $n("dirty is not a string, aborting");
    if (!t.isSupported)
      return j;
    ts ? (ie = Mn, pe = q) : Fa(y), (R.uponSanitizeElement.length > 0 || R.uponSanitizeAttribute.length > 0) && (ie = ht(ie)), R.uponSanitizeAttribute.length > 0 && (pe = ht(pe)), t.removed = [];
    const oe = En && typeof j != "string" && ss(j);
    if (oe) {
      zb(j);
      const Ct = C ? C(j) : j.nodeName;
      if (typeof Ct == "string") {
        const _t = Fe(Ct);
        if (!ie[_t] || Sn[_t])
          throw ao(j), $n("root node is forbidden and cannot be sanitized in-place");
      }
      if (lo(j))
        throw ao(j), $n("root node is clobbered and cannot be sanitized in-place");
      try {
        Ka(j);
      } catch (_t) {
        throw ao(j), _t;
      }
    } else if (ss(j))
      S = pd("<!---->"), U = S.ownerDocument.importNode(j, !0), U.nodeType === $t.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? S = U : S.appendChild(U), Ka(U);
    else {
      if (!W && !Rt && !mr && // eslint-disable-next-line unicorn/prefer-includes
      j.indexOf("<") === -1)
        return w && de ? Q(j) : j;
      if (S = pd(j), !S)
        return W ? null : de ? z : "";
    }
    S && L && sn(S.firstChild);
    const Se = oe ? j : S;
    try {
      const Ct = hd(Se);
      for (; J = Ct.nextNode(); )
        md(J, Se), kd(J), di(J.content) && uo(J.content);
    } catch (Ct) {
      throw oe && (ao(j), yi(t.removed, (_t) => {
        _t.element && is(_t.element);
      })), Ct;
    }
    if (oe)
      return yi(t.removed, (Ct) => {
        Ct.element && is(Ct.element);
      }), Rt && za(j), j;
    if (W) {
      if (Rt && za(S), G)
        for (X = Zr.call(S.ownerDocument); S.firstChild; )
          X.appendChild(S.firstChild);
      else
        X = S;
      return (pe.shadowroot || pe.shadowrootmode) && (X = ee.call(n, X, !0)), X;
    }
    let ze = mr ? S.outerHTML : S.innerHTML;
    return mr && ie["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && it(HM, S.ownerDocument.doctype.name) && (ze = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + ze), Rt && (ze = co(ze)), w && de ? Q(ze) : ze;
  }, t.setConfig = function() {
    let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Fa(j), ts = !0, Mn = ie, q = pe;
  }, t.clearConfig = function() {
    ui = null, ts = !1, Mn = null, q = null, w = v, z = "";
  }, t.isValidAttribute = function(j, y, S) {
    ui || Fa({});
    const U = Fe(j), J = Fe(y);
    return yd(U, J, S);
  }, t.addHook = function(j, y) {
    typeof y == "function" && st(R, j) && bi(R[j], y);
  }, t.removeHook = function(j, y) {
    if (st(R, j)) {
      if (y !== void 0) {
        const S = PM(R[j], y);
        return S === -1 ? void 0 : NM(R[j], S, 1)[0];
      }
      return Nf(R[j]);
    }
  }, t.removeHooks = function(j) {
    st(R, j) && (R[j] = []);
  }, t.removeAllHooks = function() {
    R = Kf();
  }, t;
}
var ZM = Am();
function eE({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = Y(void 0), [n, i] = he(void 0), s = ye((o) => {
    r.current = o, i(o);
  }, []);
  return B(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = km(p);
      if (!m)
        return !1;
      const h = N();
      return e === "protected" ? h && _m(h, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const h = N(), g = r.current;
      if (g && h && Ef(h, g)) {
        if (s(void 0), m.preventDefault(), p !== g.intent)
          return !0;
        const k = ne(g.key) ?? void 0;
        if (g.kind === "verse") {
          if (k) {
            const _ = k.getParent(), M = k.getPreviousSibling(), C = k.getNextSibling();
            k.remove(), M ? vm(M) : C && E(C) ? C.select(0, 0) : _?.selectStart();
          }
        } else g.kind === "selection" ? P(h) && (Pu(h), h.removeText()) : at(k) && kM(k);
        return !0;
      }
      if (!h)
        return !1;
      const b = bM(h, p);
      if (b) {
        if (b.kind === "verse") {
          const k = Vp();
          k.add(b.node.getKey()), Ur(k);
        } else {
          const k = zn();
          k.anchor.set(b.node.getKey(), 0, "element"), k.focus.set(b.node.getKey(), b.node.getChildrenSize(), "element"), Ur(k);
        }
        return s({ key: b.node.getKey(), kind: b.kind, intent: p }), m.preventDefault(), !0;
      }
      if (P(h) && !h.isCollapsed() && Lu(h)) {
        const k = h.getNodes().filter(me).map((C) => C.getKey()), { anchor: _, focus: M } = h;
        return s({
          kind: "selection",
          intent: p,
          key: k[0],
          anchor: { key: _.key, offset: _.offset, type: _.type },
          focus: { key: M.key, offset: M.offset, type: M.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = N();
      return !m || !Ei(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const h = ZM.sanitize(p), g = new DOMParser().parseFromString(h, "text/html"), b = xM(Uk(t, g)), k = N();
      return P(k) && k.insertNodes(b), m.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = N();
      return m && Ei(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = N();
      return m && Ei(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Ef(N(), p) || s(void 0);
      });
    };
    return Oe(
      t.registerCommand(Pr, o, Me),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(lr, c, ke),
      t.registerCommand(Gt, d, Me),
      t.registerCommand(mk, c, Me),
      t.registerCommand(Nl, u, Me),
      t.registerCommand(Pi, c, Me),
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
const xw = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function tE({ textDirection: e }) {
  const [t] = ae();
  return rE(t, e), null;
}
function rE(e, t) {
  B(() => (Bf(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Bf(e, t);
  })), [e, t]);
}
function Bf(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function nE() {
  const [e] = ae();
  return iE(e), null;
}
function iE(e) {
  B(() => {
    if (!e.hasNodes([xe, wt, Pe, He, kt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Oe(
      e.registerNodeTransform(He, sE),
      e.registerNodeTransform(He, (t) => oE(t, e)),
      e.registerNodeTransform(kt, jf),
      e.registerNodeTransform(wt, jf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(kt, (t) => {
        ws(Hn("va"), t), ws(Hn("vp"), t);
      })
    );
  }, [e]);
}
function sE(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || K(r) || F(n) || F(r) || Ce(n) || Ce(r) || Ke(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  E(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  Ke(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  se(e, ue) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Ie(n))
    return;
  if (me(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  me(r) && lu(e);
}
function oE(e, t) {
  const r = e.getParent();
  !Ke(r) || !e.isAttached() || Kc(t, e.getKey()) && !Kc(t, r.getKey()) && r.insertAfter(e);
}
function jf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ce(t); )
    t = t.getLastChild();
  (F(t) || E(t) && Ce(t.getParent())) && e.insertBefore(be(" "));
}
function Ma(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !Js(i)))
      return;
    const n = t.getParent();
    if (!n)
      return;
    if (!I(n) || !n.isInline())
      return e;
    t = n;
  }
}
function aE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (I(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function cE() {
  const e = N();
  if (!(!P(e) || !e.isCollapsed()))
    return Ma(aE(e.anchor));
}
function lE(e) {
  const t = N();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Pm(e.target)), r ? Ma(Ae(r, K)) : void 0;
}
function Pm(e) {
  const t = yk(e)?.anchorNode;
  if (Fp(t))
    return Vi(t) ?? void 0;
}
function uE(e) {
  if (N())
    return;
  const t = Pm(e);
  return t ? Ma(Ae(t, K)) : void 0;
}
function Vf(e) {
  const t = Ae(e.getNode(), K);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function dE() {
  const e = N();
  if (!P(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = Vf(t), i = Vf(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const fE = 500;
function pE(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function hE() {
  const e = N();
  if (!P(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (I(n))
    return Ma(n.getChildAtIndex(t.offset));
}
function gE() {
  const [e] = ae(), t = Iu(cE), r = Y(void 0);
  return B(() => {
    const n = (i) => {
      vt(Mt), Dr(e, Mt), t(i);
    };
    return Oe(e.registerCommand(
      Pr,
      (i) => (r.current = pE(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      ke
    ), e.registerCommand(Dt, () => {
      if (r.current !== void 0 && performance.now() - r.current < fE) {
        const o = hE();
        if (o)
          return n(o), !1;
      }
      if (dE())
        return vt(Mt), Dr(e, Mt), !1;
      const s = uE(e.getRootElement());
      return s && n(s), !1;
    }, Kn), e.registerCommand(la, (i) => {
      const s = lE(i);
      return s && n(s), !1;
    }, Kn));
  }, [e, t]), null;
}
function mE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = Cv({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return A(Tv, { trigger: e, items: i });
}
function yE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = We(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? A(xE, { trigger: e, harness: i }) : A(mE, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const bE = [" ", "*"];
function kE(e, t) {
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
function xE({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = he(void 0), s = Y({ query: "", options: [] }), o = Y(0), a = ye((f, p, m) => {
    const h = p.find((g) => g.kind === "note" && g.marker === f);
    if (h) {
      t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const g = N();
      P(g) && g.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  B(() => Oe(r.registerCommand(Pr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const h = s.current.query;
        return h ? (a(h, n.items, !1), Wp(() => {
          const g = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(g ? {
            trigger: "backslash",
            hasTextSelection: g.hasTextSelection,
            items: t.getItems(g),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const g = N();
          P(g) && g.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const m = s.current.query;
      if (n.hasTextSelection) {
        const h = n.items.find((g) => g.marker === m);
        return h && t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(m, n.items, !0), !0;
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
  }, Me), r.registerCommand(Hp, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Cr)), [r, e, t, n, a]);
  const c = ye(() => i(void 0), []), l = ye((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = ye((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), u = We(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    kE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && A(Kg, { isOpen: !0, children: ({ placement: f }) => A(
    Vg,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? bE : void 0 },
    n.session
  ) });
}
function TE(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (r) => D.repeat(r.length));
}
function CE(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
function _E(e) {
  return e.replace(/ {2,}/g, " ");
}
let Ho;
function vE(e) {
  e && (Ho = e);
}
function el(e) {
  return ro(e);
}
function SE(e, t) {
  return e.isEmpty() ? Dp : Nm(e.toJSON(), t);
}
function Nm(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && ha(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Dp;
  if (r.some(LC)) {
    Ho?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = wm(r), i = nr(n, t);
  return i ? { type: cr, version: ar, content: i } : void 0;
}
function ME(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), qe({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function EE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return qe({
    type: jt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function AE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = jh(r, a, c), qe({
    type: jt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function PE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = jh(t, o, a), qe({
    type: kt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function NE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !el(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(D) && (t[0] = a.slice(1));
  }
  return qe({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function wE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return qe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function OE(e, t) {
  const { unknownAttributes: r } = e;
  return qe({ type: mg, ...r, content: t });
}
function RE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return qe({ type: kg, marker: r, ...n, content: t });
}
function qE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return qe({
    type: Tg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function $E(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function IE(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return qe({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Ci(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return qe({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Zh({ sid: n, eid: i, ...s }, o)
  });
}
function LE(e) {
  return e.text;
}
function DE(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return qe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function UE(e) {
  const { marker: t } = e;
  return {
    type: $o,
    marker: t === "" ? void 0 : t
  };
}
function Wf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function FE(e, t, r, n, i) {
  const s = ur.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = Ci({
      type: s,
      marker: Si,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = Ci({
      type: s,
      marker: Bn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = Ci({
      type: s,
      marker: Bn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Ci({
      type: s,
      marker: Si
    });
    i.push(l);
  }
  (!n || !Th(n)) && t.forEach((l) => {
    const d = Ci({
      type: s,
      marker: Si,
      eid: l
    });
    i.push(d);
  });
}
function nr(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, p = a, m = a, h = a, g = a;
    switch (a.type) {
      case Ft.getType():
        i.push(
          ME(
            l,
            nr(l.children, t)
          )
        );
        break;
      case wr.getType():
        i.push(EE(a));
        break;
      case jt.getType():
        i.push(
          AE(
            d,
            nr(d.children, t)
          )
        );
        break;
      case wt.getType():
      case kt.getType():
        i.push(PE(a));
        break;
      case xe.getType():
        i.push(
          NE(
            u,
            nr(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case ct.getType():
        i.push(
          wE(
            f,
            nr(f.children, t)
          )
        );
        break;
      case si.getType():
        i.push(
          OE(
            a,
            nr(a.children, t)
          )
        );
        break;
      case Ji.getType():
        i.push(
          RE(
            a,
            nr(a.children, t)
          )
        );
        break;
      case Yi.getType():
        i.push(
          qE(
            a,
            nr(a.children, t)
          )
        );
        break;
      case Pe.getType(): {
        const b = nr(
          p.children,
          t,
          p.caller
        );
        i.push(
          IE(
            p,
            el(t) && p.category === void 0 ? $E(b) : b
          )
        );
        break;
      }
      case Wr.getType():
      case Vr.getType():
      case or.getType():
      case Gp.getType():
      case Rr.getType():
        break;
      case ot.getType():
        if (s = nr(
          h.children,
          t,
          r,
          n
        ), s) {
          const b = h.typedIDs[dn];
          if (b)
            FE(s, b, o, e[c + 1], i), o = b;
          else {
            const k = s.shift();
            k && (typeof k == "string" ? Wf(i, k) : i.push(k)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case ur.getType():
        i.push(Ci(a));
        break;
      case He.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Gs(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== D && !m.text.startsWith(Rl) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[Ws]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || m.text !== Kt(r))) {
          let b = LE(m);
          el(t) && (n && b.startsWith(D) && (b = b.slice(1)), b = _E(CE(b))), Wf(i, b);
        }
        break;
      case ii.getType():
        i.push(
          DE(
            g,
            nr(g.children, t)
          )
        );
        break;
      case Jr.getType():
        i.push(UE(a));
        break;
      case Xi.getType():
        Ho?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Ho?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function wm(e) {
  const t = e.findIndex((r) => ha(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = wm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const _o = {
  initialize: vE,
  deserializeEditorState: SE
}, zE = /^sd\d*$/, KE = /* @__PURE__ */ new Set([
  ...Object.entries(Pc).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === x.Paragraph && !zE.test(e)
  ).map(([e]) => e),
  "qa"
]);
function BE(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (zl(i) || zh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!cT(i)) {
      t && Go(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Bl(i) && KE.has(i.marker) && !Go(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Om(i.children, t).forEach((s) => {
      const o = jE(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = VE(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Om(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Rm(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Th(i)) {
      const s = Om(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Hf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Hf(i, c.nodes)] });
      });
      return;
    }
    t && Go(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Hf(e, t) {
  return { ...e, children: t };
}
function Rm(e) {
  return Pg(e) && e.number !== "";
}
function Go(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Rm(r) || Go(r)) : !1;
}
function jE(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function VE(e) {
  return {
    type: Io,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Mg
  };
}
const Gf = Im([]), WE = {
  type: Gp.getType(),
  version: 1
};
let Du = [], re, Xn, qm, Pt;
function HE(e, t) {
  Du = [], YE(e), XE(t);
}
function GE(e = 0) {
}
function JE(e, t) {
  re = t ?? Li();
  let r;
  return e ? (e.type !== cr && Pt?.warn(`This USJ type '${e.type}' didn't match the expected type '${cr}'.`), e.version !== ar && Pt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${ar}'.`
  ), e.content.length > 0 ? (r = il(Ir(e.content)), qs(re) && (r = BE(r, Pt))) : r = [Gf]) : r = [Gf], qm?.(Du), {
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
function YE(e) {
  e && (Xn = e), e?.addMissingComments && (qm = e.addMissingComments);
}
function XE(e) {
  e && (Pt = e);
}
function $m() {
  return ro(re);
}
function QE(e, t) {
  let { marker: r } = e;
  r !== Es && Pt?.warn(`Unexpected book marker '${r}'!`), r = r ?? Es;
  const { code: n } = e;
  (!n || !Ft.isValidBookCode(n)) && Pt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  re?.markerMode === "editable" || re?.markerMode === "visible" ? i.push(
    Et("marker", Le(r) + " " + n + D)
  ) : re?.hasGutterParaMarkers && i.push(Et("marker", Le(r) + D, !0)), i.push(...t);
  const s = je(e, zx);
  return qe({
    type: Ft.getType(),
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
function ZE(e) {
  let { marker: t } = e;
  t !== Oo && Pt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Oo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = je(e, Kx);
  let a;
  re?.markerMode === "visible" && (a = !0);
  const c = [
    Tt(Xt(t, r) ?? "")
  ];
  return re?.markerMode === "editable" && mA(i, s, c), re?.markerMode === "editable" ? qe({
    type: jt.getType(),
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
  }) : qe({
    type: wr.getType(),
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
function eA(e) {
  let { marker: t } = e;
  t !== Ro && Pt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ro;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (wv(re) ?? wt).getType(), c = re?.markerMode === "editable" ? Dh : Ag;
  let l, d;
  re?.markerMode === "editable" ? l = Xt(t, r) : re?.markerMode === "visible" && (d = !0);
  const u = je(e, tT);
  return qe({
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
function tA(e, t = [], r = !1) {
  let { marker: n } = e;
  xe.isValidMarker(n, Xn?.extraValidMarkers) || Pt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (re?.markerMode === "editable") {
    const [a] = t;
    Ri(a) ? a.text = D + a.text : a && t.unshift(Tt(D));
  }
  t.length === 0 && t.push(Tt(Qt)), tl(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = je(e, Vx);
  return s || fA(n, o, i), s || rl(e.marker ?? "", i, !1, r), qe({
    type: xe.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Oh
  });
}
function Im(e) {
  return {
    type: pn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Ih
  };
}
function rA(e, t = []) {
  let { marker: r } = e;
  ct.isValidMarker(r, Xn?.extraValidMarkers) || Pt?.warn(`Unexpected para marker '${r}'!`), r = r ?? Lt;
  const n = [];
  if (_n(re) && (re?.markerMode === "editable" ? n.push(
    xt(r),
    Tt(D, Nr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && n.push(
    Et(
      "marker",
      Le(r) + D,
      re?.hasGutterParaMarkers
    )
  )), n.push(...t), $m()) {
    const s = n.find(
      (o) => !Gl(o) && !(Ri(o) && o.text === D)
    );
    Ri(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = je(e, Zx);
  return qe({
    type: ct.getType(),
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
function Uu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function nA(e, t = []) {
  const r = je(e, iC);
  return qe({
    ...Uu(),
    type: si.getType(),
    unknownAttributes: r,
    children: t,
    version: yg
  });
}
function iA(e, t = []) {
  const r = je(e, aC), n = e.marker ?? Dc, i = [];
  return re?.markerMode === "editable" ? i.push(
    xt(n),
    Tt(D, Nr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && i.push(
    Et(
      "marker",
      Le(n) + D,
      re?.hasGutterParaMarkers
    )
  ), i.push(...t), qe({
    ...Uu(),
    type: Ji.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: xg
  });
}
function sA(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Uc, a = lg(o, i) ?? o;
  re?.markerMode === "editable" ? s.push(
    xt(a),
    Tt(D, Nr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && s.push(
    Et(
      "marker",
      Le(a) + D,
      re?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = je(
    e,
    lC
  );
  return qe({
    ...Uu(),
    type: Yi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Cg
  });
}
function oA(e, t) {
  const r = hT(t);
  let n = () => {
  };
  return Xn?.noteCallerOnClick && (n = Xn.noteCallerOnClick), qe({
    type: or.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: $g
  });
}
function aA(e, t) {
  let { marker: r } = e;
  Pe.isValidMarker(r, Xn?.extraValidMarkers) || Pt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Il;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : yu(re?.noteMode), a = je(e, ix), c = re?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  re?.markerMode === "editable" ? (l = xt(r, "opening", !1, c), s || (d = xt(r, "closing"))) : re?.markerMode === "visible" && (l = Et("marker", Le(r) + " "), s || (d = Et("marker", nt(r))));
  const u = [];
  let f;
  if (l && u.push(l), re?.markerMode === "editable" && !o)
    f = Tt(Kt(i), void 0, c), u.push(f), gA(n, u), u.push(...t);
  else {
    const p = Tt(D, Nr, "token");
    f = oA(i, t), u.push(f, p, ...t.flatMap(cA(p)));
  }
  return d && u.push(d), qe({
    type: Pe.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: ph
  });
}
function cA(e) {
  return (t) => kh(t) ? [t] : [t, e];
}
function lA(e) {
  let { marker: t } = e;
  (!t || !ur.isValidMarker(t, Xn?.extraValidMarkers)) && Pt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = je(e, $l), s = eg(e);
  return qe({
    type: ur.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: uh
  });
}
function Jf(e, t = []) {
  return {
    type: ot.getType(),
    typedIDs: { [dn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function uA(e, t) {
  const { marker: r } = e, n = e.type, i = je(e, Ix), s = [];
  if (re?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = ug(
      n,
      r,
      i
    );
    o && s.push(Et("marker", o)), a && s.push(Et("attribute", a)), s.push(...t), c && s.push(Et("attribute", c)), l && s.push(Et("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Ri(o) && (o.mode = "token");
  }), qe({
    type: ii.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: _h
  });
}
function dA(e) {
  return {
    type: Jr.getType(),
    marker: e,
    text: ks(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: re?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: hg
  };
}
function xt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Rr.getType(),
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
function Tt(e, t = void 0, r = "normal") {
  const n = {
    type: He.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Ws] = { textType: t }), n;
}
function Et(e, t, r = !1) {
  const n = {
    type: Vr.getType(),
    text: t,
    textType: e,
    version: bh
  };
  return r && (n[Ws] = { [Ul.key]: !0 }), n;
}
function Is(e, t) {
  return {
    type: Wr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: vh
  };
}
function tl(e, t, r = !1) {
  re?.markerMode === "editable" ? t.push(xt(e, "opening", r)) : re?.markerMode === "visible" && t.push(Et("marker", Le(e, r)));
}
function rl(e, t, r = !1, n = !1) {
  re?.markerMode === "editable" ? r ? t.push(xt("", "selfClosing")) : t.push(xt(e, "closing", n)) : re?.markerMode === "visible" && t.push(
    Et(
      "marker",
      r ? nt("") : nt(e, n)
    )
  );
}
function fA(e, t, r) {
  if (re?.markerMode !== "editable" || !t) return;
  const n = Tr(t, fa(e));
  n && r.push(Tt(n, "attribute"));
}
function Yf(e, t) {
  if (e.type !== "ms" || re?.markerMode !== "editable" && re?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = je(e, $l), o = tg(
    n,
    i,
    s,
    eg(e)
  ), a = Tr(o, pa(r ?? ""));
  if (!a) return;
  const c = D + a;
  re?.markerMode === "editable" ? t.push(Tt(c, "attribute")) : t.push(Et("attribute", c));
}
function pA(e, t) {
  const r = e.marker ?? "";
  if (re?.markerMode === "editable") {
    const n = [];
    tl(r, n), Yf(e, n), rl(r, n, !0), t.push(Is("milestone", n));
  } else
    tl(r, t), Yf(e, t), rl(r, t, !0);
}
function Xf(e, t, r) {
  t !== void 0 && r.push(
    Is(e, [
      xt(e, "opening"),
      Tt(D + t, "attribute"),
      xt(e, "closing")
    ])
  );
}
function hA(e, t) {
  re?.markerMode === "editable" && (Xf("va", e.altnumber, t), Xf("vp", e.pubnumber, t));
}
function gA(e, t) {
  e !== void 0 && t.push(
    Is("cat", [
      xt("cat", "opening"),
      Tt(D + e, "attribute"),
      xt("cat", "closing")
    ])
  );
}
function mA(e, t, r) {
  e !== void 0 && r.push(
    Is("ca", [
      xt("ca", "opening"),
      Tt(D + e, "attribute"),
      xt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Is("cp", [
      xt("cp", "opening"),
      Tt(D + t, "attribute")
    ])
  );
}
function Qf(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function yA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Zf(e, t) {
  t.marker === Bn && t.sid !== void 0 && e.push(t.sid), t.marker === Si && t.eid !== void 0 && yA(e, t.eid);
}
function nl(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Jf(o, [...n])] : o, c = e[i];
  Zf(n, c);
  const l = nl(
    e.slice(i + 1, s),
    Qf(t, i + 1),
    c.marker === Bn,
    n
  ), d = Jf(l, [...n]), u = e[s];
  Zf(n, u);
  const f = nl(
    e.slice(s + 1),
    Qf(t, s + 1),
    u.marker === Bn,
    n
  );
  return [...a, d, ...f];
}
function Ir(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(Tt($m() ? TE(i) : i));
    else if (!i.type)
      Pt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ft.getType():
          n.push(QE(i, Ir(i.content)));
          break;
        case jt.getType():
          n.push(ZE(i));
          break;
        case kt.getType():
          re?.hasSpacing || n.push(WE), n.push(eA(i)), hA(i, n);
          break;
        case xe.getType():
          n.push(
            tA(i, Ir(i.content, !0), t)
          );
          break;
        case ct.getType():
          n.push(rA(i, Ir(i.content)));
          break;
        case Pe.getType():
          n.push(aA(i, Ir(i.content)));
          break;
        case ur.getType():
          dh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Du?.push(i.sid)), n.push(lA(i)), pA(i, n);
          break;
        case Jr.getType():
          n.push(dA(i.marker ?? ""));
          break;
        case mg:
          n.push(nA(i, Ir(i.content)));
          break;
        case kg:
          n.push(iA(i, Ir(i.content)));
          break;
        case Tg:
          n.push(sA(i, Ir(i.content)));
          break;
        default:
          Pt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(uA(i, Ir(i.content)));
      }
  }), nl(n, r);
}
function il(e) {
  const t = e.findIndex(
    (n) => zl(n) || zh(n) || Bl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    oC(n)
  );
  if (t >= 0) {
    const n = il(e.slice(0, t)), i = e[t], s = il(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Pg(n)))
    return [Im(e)];
  return e;
}
const dr = {
  initialize: HE,
  reset: GE,
  serializeEditorState: JE
};
function Lm(e) {
  if (e && !O(e)) {
    if (E(e)) return e;
    if (I(e))
      for (const t of e.getChildren()) {
        const r = Lm(t);
        if (r) return r;
      }
  }
}
function bA() {
  const e = N();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !O(t) ? Jn(t) : void 0) && E(t)) {
      const i = be(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      qi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Lm(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(D) ? D : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Dm(e)) {
    if (!Jn(t)) continue;
    qi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(D) && r.setTextContent(n.slice(D.length));
  }
  return !0;
}
function Dm(e) {
  const [t, r] = El(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || O(a) || se(a, ue) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Um(e) {
  let t = e;
  for (; F(t) || Ce(t); ) t = t.getParent();
  return t;
}
function Fm(e) {
  const t = Um(e.getParent());
  return at(t) ? t : void 0;
}
function kA() {
  const e = N();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return Jn(t) ? !!Fm(t) : !1;
}
function zm(e) {
  const t = be(""), r = e.getNode(), n = e.offset;
  if (E(r))
    if (n <= 0) r.insertBefore(t);
    else if (n >= r.getTextContentSize()) r.insertAfter(t);
    else {
      const [, o] = r.splitText(n);
      o.insertBefore(t);
    }
  else {
    const o = e.getNode(), a = I(o) ? o : o.getParent(), c = I(o) ? o.getChildAtIndex(n) : o;
    if (c) c.insertBefore(t);
    else if (a) a.append(t);
    else return { parent: void 0, moving: [] };
  }
  for (let o = t.getParent(); ; o = t.getParent())
    if (F(o)) qi(t, { renderGlyphs: !0 });
    else if (!Ce(o) || !xA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function xA(e, t) {
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
function Km(e) {
  const t = e.anchor.getNode();
  if (O(t) && !su(t, e.anchor.offset)) {
    const r = t.getParent();
    if (F(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = N();
      return P(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function Bm() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Km(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!E(r) || O(r) || !Jn(r)) return !1;
  const n = Fm(r);
  if (!n) return !1;
  const { moving: i } = zm(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Ce(o); ) o = o.getFirstChild() ?? void 0;
  return F(o) ? ka(o) : s.select(0, 0), !0;
}
const Ot = String.raw`\w-`, jm = "a-z0-9", TA = `[a-z][${jm}]*`, CA = new RegExp(
  String.raw`^\\(\+?[${Ot}]+)[ \u00A0]$`
), Vm = new RegExp(String.raw`^\\(\+?[${Ot}]+)$`), _A = new RegExp(String.raw`^\\\+?[${Ot}]*\*$`), vA = new RegExp(
  String.raw`^\\(\+?[${Ot}]+)(?:[ \u00A0]|$)`
), SA = new RegExp(
  String.raw`^\\(\+?)([${Ot}]+)`
), MA = new RegExp(
  String.raw`\\\+?[${Ot}]+(?:\\?\*|[ \u00A0])`
), EA = new RegExp(
  String.raw`\\\+?[${Ot}]*$`
), AA = new RegExp(
  String.raw`^\\(${TA})( |$)`
), PA = new RegExp(
  String.raw`\\[${jm}+*]*$`,
  "i"
), dt = "￼";
function Wm(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== dt ? e.slice(1) : e;
}
function ep(e) {
  return Gl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Hm(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = dr.serializeEditorState(
    {
      type: cr,
      version: ar,
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
  for (; ep(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Kt(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && ep(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function Gm(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function Jm(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([d]) => d !== "closed")
  ), o = dr.serializeEditorState(
    {
      type: cr,
      version: ar,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((d) => d.type === Pe.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function Ym(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = dr.serializeEditorState(
    { type: cr, version: ar, content: [s, ...r] },
    n
  ).root.children;
  if (!zl(o)) return { failure: "shape" };
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
function fs(e, t) {
  EA.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += dt;
}
function Jt(e) {
  return e.replaceAll(D, " ");
}
function NA(e, t, r = !1) {
  if (ro(t)) return Jt(e);
  if (e === D) return " ";
  const n = r && e.startsWith(D), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(D, "~");
}
function Ts(e) {
  const t = e.getTextContent();
  return Or(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Fu(e, t) {
  const r = e[t];
  if (!Ze(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ma(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Xm(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function zu(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = As(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Ku(e) {
  return !!e.getUnknownAttributes();
}
function Ea(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && Dl(e);
}
function Bu(e, t) {
  return Ze(e) ? !Ea(e.getMarker(), t) : K(e) || Ke(e) ? !0 : $e(e) ? Ku(e) : F(e) ? Qm(e, t) : !1;
}
function Qm(e, t) {
  if (ET(e)) return !0;
  const r = e.getMarker();
  return hx(r) || t(r) !== void 0 || wA(e) && !OA(e) ? !1 : !RA(e);
}
function wA(e) {
  const t = e.getParent();
  return t !== null && zt(t) !== void 0;
}
function OA(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function RA(e) {
  const t = e.getChildren().filter((i) => O(i) && i.getMarker() === e.getMarker()).filter(O);
  if (t.some((i) => !Hr(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const Wt = "", Ht = "";
function tp(e) {
  return e.flatMap((t) => Ie(t) ? t.getChildren() : [t]);
}
function ms(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ze(s)) {
      const o = Fu(e, i);
      Ea(s.getMarker(), r) && Xm(o) ? (t.push(
        Wt,
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
      ), ms(tp(o), t, r), t.push(Ht)) : t.push(dt), i += o.length;
    } else if ($e(s)) {
      const o = zu(e, i);
      Ku(s) ? t.push(dt) : (t.push(
        Wt,
        "verse",
        Jt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ms(tp(o), t, r), t.push(Ht)), i += o.length;
    } else O(s) ? t.push(Wt, "marker", Jt(s.getTextContent()), Ht) : Yr(s) ? t.push(Wt, "unmatched", Jt(s.getTextContent()), Ht) : Bu(s, r) ? t.push(dt) : ti(s) ? t.push(" ") : E(s) ? t.push(
      Jt(
        n ? Wm(Ts(s)) : Ts(s)
      )
    ) : F(s) ? (t.push(Wt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ms(s.getChildren(), t, r, !0), t.push(Ht)) : I(s) ? (t.push(Wt, s.getType()), ms(s.getChildren(), t, r), t.push(Ht)) : t.push(dt);
  }
}
function Mr(e, t) {
  const r = [];
  return ms(e, r, t), r.join("");
}
function Er(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Ki(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function ju(e) {
  return e.type ?? "";
}
function Zm(e, t, r) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Le(e, r);
}
function yc(e, t) {
  const r = e[t];
  if (!(!r || ju(r) !== "attribute-run"))
    return Er(r) ?? [];
}
function Ar(e, t) {
  const r = [];
  return ys(e, r, t), r.join("");
}
function ys(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = ju(s);
    if (o === "ms") {
      const l = s, d = yc(e, i + 1);
      d && Ea(l.marker ?? "", r) ? (t.push(
        Wt,
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
      ), ys(d, t, r), t.push(Ht), i += 1) : t.push(dt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(dt);
        continue;
      }
      t.push(
        Wt,
        "verse",
        Jt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = yc(e, i + 1 + d);
      for (; u; )
        ys(u, t, r), d++, u = yc(e, i + 1 + d);
      t.push(Ht), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Wt,
        "marker",
        Jt(
          Zm(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Ht
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Wt, "char", JSON.stringify(l.unknownAttributes ?? null)), ys(Er(s) ?? [], t, r, !0), t.push(Ht);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(dt);
      continue;
    }
    if (o === "unmatched") {
      t.push(Wt, "unmatched", Jt(Ki(s) ?? "")), t.push(Ht);
      continue;
    }
    const a = Ki(s);
    if (a !== void 0) {
      t.push(Jt(n ? Wm(a) : a));
      continue;
    }
    const c = Er(s);
    c ? (t.push(Wt, o), ys(c, t, r), t.push(Ht)) : t.push(dt);
  }
}
function yn(e) {
  let t = 0;
  for (const r of e) {
    const n = Er(r);
    if (n) {
      t += yn(n);
      continue;
    }
    const i = Ki(r);
    if (i !== void 0)
      for (const s of i) s === dt && t++;
  }
  return t;
}
function Ls(e, t, r, n, i) {
  bn(e.getChildren(), t, r, n, i);
}
function bn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      mo(t, a, Jt(a.getTextContent()));
    else if (Ze(a)) {
      s();
      const c = Fu(e, o);
      Ea(a.getMarker(), r) && Xm(c) ? bn(c, t, r, n) : fs(t, [a, ...c]), o += c.length;
    } else if (K(a) || Ke(a))
      s(), fs(t, [a]);
    else if ($e(a)) {
      s();
      const c = zu(e, o);
      Ku(a) ? fs(t, [a, ...c]) : (mo(t, a, Jt(Ts(a))), bn(c, t, r, n)), o += c.length;
    } else if (F(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && Qm(a, r) ? fs(t, [a]) : Ls(a, t, r, n, { pending: !0 });
    else if (ti(a))
      s(), mo(t, a, " ");
    else if (E(a)) {
      const c = Or(a) || se(a, ue) === "attribute", l = s() && !c;
      mo(
        t,
        a,
        c ? Jt(Ts(a)) : NA(Ts(a), n, l)
      );
    } else I(a) ? Ls(a, t, r, n, i) : (s(), fs(t, [a]));
  }
}
function ey(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ke(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Ls(e, i, t, r), i;
}
function Aa(e, t, r, n) {
  for (const i of t) {
    const s = ey(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Pa(e, t) {
  let r = 0;
  const n = (i) => {
    if (E(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(dt);
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
    } else I(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function Ds(e, t = []) {
  for (const r of e)
    $e(r) ? t.push(r) : I(r) && Ds(r.getChildren(), t);
  return t;
}
function Na(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === dt && t++;
    else I(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Xr(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === dt && t++;
    else r.content && (t += Xr(r.content));
  return t;
}
function qA(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), I(s) && Ls(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const Us = /\s/;
function ty(e) {
  return e.filter(wa).length;
}
function wa(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return E(t) && !O(t) && se(t, ue) === "attribute";
}
function $A(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return O(t) || wa(e);
}
function rp(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && wa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      Us.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function IA(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !I(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = ne(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function Oa(e, t, r, n) {
  const { key: i, offset: s } = IA(
    e,
    t,
    r,
    n
  ), o = rp(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !$A(a) ? rp(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: ty(t.spans) };
}
function bc(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function LA(e) {
  const t = ne(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return F(r) ? (r.selectNext(0, 0), !0) : !1;
}
function DA(e) {
  const t = ne(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = $e(t) ? zu(r, n) : Ze(t) ? Fu(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function ry(e, t, r) {
  const { text: n, spans: i } = e, s = ty(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && !bc(u);
    if (!(o && wa(u))) {
      if (d) {
        if (!p) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const h = n[u.start + m];
        if (c === 0 && (l === 0 || !Us.test(h))) {
          if (p) {
            a = { key: u.key, offset: m };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? Us.test(h) || c-- : l--;
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
    if (u && bc(u) && LA(u) || u?.isSentinel && DA(u)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !bc(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const u = ne(a.key);
    if (u && E(u)) {
      u.select(a.offset, a.offset);
      return;
    }
  }
  r.find(I)?.selectStart();
}
function ny(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(I)?.selectStart();
      return;
    }
    ry(
      qA(e, n, i, s),
      t,
      e
    );
  }
}
function iy(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    UA(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  bn(e, o, n, i), ry({ text: o.text, spans: o.spans }, t, e);
}
function UA(e, t) {
  const r = e.find(I);
  if (r && Bu(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function sy(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Aa(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (P(c)) {
    for (let h = c.anchor.getNode(); h; h = h.getParent())
      if (e.some((g) => g.is(h))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Oa(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = jr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Xr(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = dr.serializeEditorState(
    { type: cr, version: ar, content: l },
    r
  );
  if (Ar(d.root.children, n) === Mr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((h) => Fn(h));
  if (Na(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Ds(e).map((h) => ({
    number: h.getNumber(),
    sid: h.getSid()
  })), p = e[0];
  u.forEach((h) => p.insertBefore(h)), Pa(u, s.sentinels), e.forEach((h) => h.remove());
  const m = Ds(u);
  for (let h = 0; h < f.length && h < m.length; h++)
    m[h].getNumber() === f[h].number && m[h].setSid(f[h].sid);
  return ny(
    u,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((h) => h.getKey()))
  ), !0;
}
function oy(e) {
  if (e.getIsCollapsed() !== !1 || !Pe.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!O(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(mt(n) || E(n) && n.getTextContent() === Kt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!O(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function ay(e, t, r) {
  const n = oy(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return bn(n, i, t, r), { out: i, contentNodes: n };
}
function cy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(dt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function FA(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = ay(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = N();
  if (P(d)) {
    for (let $ = d.anchor.getNode(); $; $ = $.getParent())
      if (e.is($)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Oa(
      [e],
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const u = jr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Xr(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = u;
  if (u.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = cy(p), h = Gm(e, p);
  if (h)
    return zA(
      e,
      h,
      m,
      o.sentinels,
      t,
      l
    );
  const g = Hm(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (yn(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== m;
  if (b && e.setCategory(m), Ar(g.children, n) === Mr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const k = g.children.map(($) => Fn($));
  if (Na(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const _ = a[0];
  if (_)
    k.forEach(($) => _.insertBefore($));
  else {
    const $ = e.getChildren().find((w) => O(w) && w.getMarkerSyntax() === "closing");
    k.forEach((w) => $ ? $.insertBefore(w) : e.append(w));
  }
  Pa(k, o.sentinels);
  const M = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    M.has($.getKey()) || $.remove();
  });
  const C = oy(e) ?? k;
  return iy(
    C,
    c,
    l,
    n,
    r,
    M
  ), !0;
}
function zA(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = Jm(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || yn(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const d = l.map((m) => Fn(m)), [u] = d;
  if (!K(u) || Na(d) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const m of d)
    f.insertAfter(m), f = m;
  Pa(d, i);
  const p = e.getChildren();
  return e.append(...u.getChildren()), p.forEach((m) => m.remove()), e.setCaller(u.getCaller()).setCategory(u.getCategory()).setUnknownAttributes(u.getUnknownAttributes()).setIsCollapsed(u.getIsCollapsed()), u.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Vc(e, a) : Ug(e, { isContentChange: !0 })), !0;
}
function ly(e) {
  const t = e.getChildren();
  return Wl(t[0]) ? t.slice(1) : t;
}
function Vu(e, t, r) {
  const n = ly(e), i = { text: "", spans: [], sentinels: [] };
  return bn(n, i, t, r), { out: i, contentNodes: n };
}
const KA = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${Lt}(?=[\\s\\u200B\\\\|]|$)`
);
function uy(e, t) {
  const r = jr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === Lt && !KA.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function dy(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = Vu(e, i, n);
  if (!Aa(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, d = !1;
  const u = N();
  if (P(u)) {
    for (let w = u.anchor.getNode(); w; w = w.getParent())
      if (c.some((z) => z.is(w))) {
        d = !0;
        break;
      }
    u.isCollapsed() && (l = Oa(
      c,
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const f = uy(o.text, i);
  if (Xr(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = Ym(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const m = [...p.children, ...p.followingBlocks];
  if (yn(m) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && Ar(p.followingBlocks, i) === Mr(r, i) && Ar(p.children, i) === Mr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const h = p.children.map((w) => Fn(w)), g = p.followingBlocks.map((w) => Fn(w)), b = [...h, ...g];
  if (Na(b) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const k = Ds([...a, ...r]).map((w) => ({
    number: w.getNumber(),
    sid: w.getSid()
  })), _ = a[0];
  _ ? h.forEach((w) => _.insertBefore(w)) : h.forEach((w) => e.append(w)), g.reduce((w, z) => w.insertAfter(z), e), Pa(b, o.sentinels);
  const M = new Set(o.sentinels.flat().map((w) => w.getKey()));
  a.forEach((w) => {
    M.has(w.getKey()) || w.remove();
  }), r.forEach((w) => w.remove());
  const C = [...ly(e), ...g], $ = Ds(C);
  for (let w = 0; w < k.length && w < $.length; w++)
    $[w].getNumber() === k[w].number && $[w].setSid(k[w].sid);
  return iy(
    C,
    l,
    d,
    i,
    n,
    M
  ), !0;
}
const fy = /* @__PURE__ */ new Set(["ca", "cp"]), Wu = "cp";
function py(e) {
  if (!Sr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Ls(e, t, _r, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = jr(r, { getMarker: _r }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Wu)
  );
}
function Bi(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (F(r) && fy.has(r.getMarker()) || py(r)) {
      t.push(r);
      continue;
    }
    le(r) && r.getMarker() === Wu && t.push(r);
    break;
  }
  return t;
}
function BA(e) {
  const t = (n) => F(n) && fy.has(n.getMarker()) || py(n);
  if (t(e) || le(e) && e.getMarker() === Wu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n)) return n;
      if (!t(n)) return;
    }
}
function hy(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Bi(e);
  if (n.some((s) => le(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (bn(e.getChildren(), i, t, r), bn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
const np = /^\\(?:\s|$)/, jA = /^\s*\\p(?:\s|$)/;
function gy(e, t) {
  const r = jr(e, { getMarker: t }), [n, ...i] = r;
  if (typeof n != "object" || n.type !== "para" || n.marker !== "p" || jA.test(e))
    return r;
  const s = [...n.content ?? []], o = s.at(-1);
  if (typeof o == "string") {
    const l = o.trimEnd();
    l ? s[s.length - 1] = l : s.pop();
  }
  const [a, ...c] = s;
  if (typeof a == "string" && np.test(a)) {
    const l = a.replace(np, "");
    return [{ type: "para", marker: "", content: l ? [l, ...c] : c }, ...i];
  }
  return [...s, ...i];
}
function ip(e) {
  return typeof e == "object" && e.type === "chapter";
}
function my(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Bi(e)], o = hy(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = N();
  if (P(l)) {
    for (let g = l.anchor.getNode(); g; g = g.getParent())
      if (s.some((b) => b.is(g))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Oa(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const d = gy(o.text, n);
  if (d.length === 0 && c)
    return i?.debug("[MarkerEdit] Chapter Tier 2 deferred: emptied chapter line holds the caret"), !1;
  if (Xr(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  const [u] = d, f = ip(u) ? u : void 0, p = d.find(ip);
  p && e.getSid() !== void 0 && (p.sid = e.getSid());
  const m = dr.serializeEditorState(
    { type: cr, version: ar, content: d },
    r
  );
  if (f && Ar(m.root.children, n) === Mr(s, n)) {
    let g = !1;
    return e.getNumber() !== (f.number ?? "") && (e.setNumber(f.number ?? ""), g = !0), e.getAltnumber() !== f.altnumber && (e.setAltnumber(f.altnumber), g = !0), e.getPubnumber() !== f.pubnumber && (e.setPubnumber(f.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const h = m.root.children.map((g) => Fn(g));
  return h.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), ny(h, a, c, n, r), !0;
}
function Fs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ke(n)) return;
    !t && (K(n) || le(n) || we(n) || Te(n)) && (t = n), zp(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? BA(r) : void 0) ?? t;
}
function ir(e, t) {
  const r = Fs(e);
  return r ? K(r) ? FA(r, t) : we(r) ? my(r, t) : Te(r) ? dy(r, t) : sy([r], t) : !1;
}
const VA = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function sp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !VA.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function vo(e, t) {
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
          t.push(`\\${n}`), sp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), vo(r.content, t), sp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), vo(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), vo(r.content, t);
      }
    }
}
function op(e, t, r) {
  const n = Fs(e);
  if (!Be(n)) return !1;
  const i = N();
  if (!P(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Te(n) ? Vu(n, t, r).out : ey(n, t, r);
  if (!o) return !1;
  const a = jr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    Us.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  vo(a, l);
  for (const d of l.join("").replaceAll(D, "~")) {
    if (Us.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function Hu(e, t) {
  return yy(e, t, x.Paragraph);
}
function WA(e, t) {
  return yy(e, t, x.Character);
}
function yy(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !(Pe.isValidMarker(n) || Dl(n));
}
function HA(e) {
  return [gt(e), Xs()];
}
function Gu(e) {
  Zt(e, 2);
}
function GA(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function zs(e) {
  const t = GA(e);
  e.splice(0, 0, HA(e.getMarker())), t && Gu(e);
}
function Ra(e, t) {
  e.setMarker(t), zs(e), Gu(e);
}
function JA(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Or(n)) {
    if (E(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(D), St(n, ue, Nr), n.setMode("token");
      return;
    }
    if (Xh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Xs());
  }
}
function ap(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : I(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function Cs(e) {
  for (let t = e; t; t = t.getParent())
    if (le(t)) return t;
}
function YA(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Cs(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Cs(r.getNode())?.is(s) ?? !1, a = Cs(n.getNode())?.is(s) ?? !1;
    return !(o && !ap(r, s, "start") || a && !ap(n, s, "end"));
  });
}
function sl(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of YA(r)) t.add(n.getKey());
}
function XA(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!P(r) || !r.isCollapsed()) return;
  const n = Cs(r.focus.getNode());
  n && t.add(n.getKey());
}
function QA(e) {
  const t = N();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (sl(e), t.removeText());
}
const ZA = new RegExp(
  String.raw`^\\\+?([${Ot}]+)(?:[ \u00A0]|$)`
);
function eP(e, t) {
  const r = ZA.exec(e.getTextContent());
  return !!r && Hu(r[1], t);
}
function tP(e, t) {
  if (!_n(t.viewOptions)) return;
  if (Nt(e.getFirstChild())) {
    JA(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (eP(e, t.getMarker)) return;
    zs(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => le(o) && !o.is(e))) {
      Ra(e, Lt), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (Be(r)) {
    const n = e.getChildren().filter((a) => !Or(a)), i = N();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Cs(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || I(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Zt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  e.setMarker(Lt), zs(e);
}
function rP(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Tr(t, fa(e.getMarker()));
  return r === "" ? void 0 : r;
}
function by(e) {
  const t = e.getChildren().filter((s) => !O(s) && se(s, ue) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(D) && r.setTextContent(r.getTextContent().slice(1));
  const n = rP(e);
  n && t.push(be(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function nP(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && I(t) ? r = t.getChildAtIndex(e.offset) : O(t) && e.offset === 0 ? r = t : E(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), F(r) && (r = r.getFirstChild()), !O(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!F(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function iP() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = nP(e.anchor), r = t?.getParent();
  if (!t || !F(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), Gi(n) && n.getTextContent().startsWith(D) && n.setTextContent(` ${n.getTextContent().slice(D.length)}`), by(r), E(n) && n.isAttached() && n.select(0, 0), !0;
}
function sP(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !O(c) && c.getTextContent() === Kt(s)
    ), a = ni(e).some(({ node: c }) => O(c));
    if (!o && !a) return;
    r.forEach((c) => {
      O(c) || (E(c) && c.getTextContent() === Kt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => O(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function oP(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    by(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && ir(e, t);
}
function ol(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function ky(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !Kp(e, n, i);
}
function xy(e, t) {
  return e.length <= t ? e : e.slice(0, Ju(e, t));
}
function Ju(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of Ak(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const aP = 16;
function cP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (k) => t ? Yu(k, t).length : k.getTextContent().length;
  r ??= n;
  const i = N();
  if (!P(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Jo(s), l = Jo(o), d = i.getNodes(), u = new Map(d.map((k) => [k.getKey(), dP(k)])), f = d.length > 0 ? u.get(d[0].getKey()) : void 0, p = f && lP(s, f) ? f : void 0, m = (k) => {
    const _ = k > 0 ? uP(d, u, p, c, l, k, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), _ ? i.focus.set(_.node.getKey(), _.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!_;
  };
  let h = Math.min(e, n(i));
  if (m(h) && r(i) <= e) return !0;
  let g = 0, b = 0;
  h -= 1;
  for (let k = 0; k < aP && g <= h; k++) {
    const _ = Math.floor((g + h) / 2);
    m(_) && r(i) <= e ? (b = _, g = _ + 1) : h = _ - 1;
  }
  return m(b), !0;
}
function al(e) {
  return e.isToken() || to(e) || we(e.getParent());
}
function lP(e, t) {
  const r = I(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && sr(r.getKey(), 0, "text").isBefore(e);
}
function uP(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, d, u;
  const f = /* @__PURE__ */ new Map(), p = (h) => {
    const g = t.get(h.getKey());
    return g && r?.is(g) ? void 0 : g;
  }, m = (h) => {
    let g = u ? u.endBefore : h;
    for (; ; ) {
      const b = fP(g, e, n);
      if (!b || !g || b.node.is(g.node)) return b;
      const k = p(b.node);
      if (!k || k.is(p(g.node))) return b;
      g = f.get(k.getKey());
    }
  };
  for (let h = 0; h <= a; h++) {
    const g = e[h], b = p(g);
    if (u && !u.node.is(b) && (d && u.node.isParentOf(d.node) && (d = u.endBefore), u = void 0), b && !u && (u = { node: b, endBefore: d }, f.set(b.getKey(), d)), !o?.(g)) {
      if (I(g) && !g.isInline()) {
        if (!l) {
          if (c + 1 > s) return m(d);
          c += 1;
        }
        l = !g.isEmpty();
        continue;
      }
      if (l = !1, E(g)) {
        const k = h === 0 ? n : 0, _ = h === a ? i : g.getTextContentSize(), M = _ - k, C = al(g);
        if (C && c + M > s) return m(d);
        if (!C && c + M >= s) {
          const $ = Ju(g.getTextContent(), k + (s - c));
          return m({ node: g, offset: Math.max(k, $) });
        }
        c += M, d = { node: g, offset: _ };
      } else if (ri(g) || ti(g)) {
        const k = g.getTextContentSize();
        if (c + k > s) return m(d);
        c += k;
      }
    }
  }
  return m(d);
}
function dP(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (K(r) || Nu(r)) && (t = r);
  return t;
}
function fP(e, t, r) {
  if (!e) return e;
  const n = Ae(e.node, (g) => I(g) && !g.isInline()), i = I(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((g) => g.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let g = o; g <= a; g++)
    l.push(c.length), c += i[g].getTextContent();
  const d = l[s - o], u = d + e.offset, f = Ju(c, u);
  if (f === u) return e;
  const p = (g) => t[0]?.is(g) ?? !1;
  if (al(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= d) {
    const g = f - d;
    return g >= (p(e.node) ? r : 0) ? { ...e, offset: g } : void 0;
  }
  const m = s > o ? i[s - 1] : void 0;
  if (!m || !t.some((g) => g.is(m))) return;
  if (al(m))
    return { node: m, offset: p(m) ? r : 0 };
  const h = f - l[0];
  return h >= (p(m) ? r : 0) ? { node: m, offset: h } : void 0;
}
function Yu(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, d) => {
    if (!t(l)) {
      if (I(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, E(l)) {
        const u = l.getTextContent();
        o ? a += u : a += u.slice(
          d === 0 ? Jo(i) : 0,
          d === n ? Jo(s) : u.length
        );
      } else (ri(l) || ti(l)) && (d !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function cl(e) {
  const t = e.getParent();
  return !!t && Ae(t, (r) => K(r) && !!r.getIsCollapsed()) !== null;
}
function Ty(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    mt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), I(i)) for (const { node: s } of ni(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function pP(e) {
  return e.getNodes().some(
    (t) => ri(t) || K(t) || me(t) || Ge(t) || Nu(t)
  );
}
function Jo(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return I(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
function Cy(e) {
  const t = e.getParent();
  if (!K(t) || t.getIsCollapsed() !== !1 || !oh(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!O(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const Yo = "usfm:", _y = "usfmopen", vy = "usfmclosed";
function hP(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const gP = new RegExp(
  [Yo, _y, vy].map(hP).join("|")
), mP = "\uFEFF", yP = /^usfm_(.+)$/;
function bP(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function kP(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function xP(e) {
  return e.startsWith(Yo) ? kP(e.slice(Yo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Sy(e) {
  for (const t of e.classList) {
    const r = yP.exec(t);
    if (r) return r[1];
  }
}
function TP(e) {
  const t = Sy(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function CP(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(Yo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(_y) && !n.contains(vy)) && Sy(r) !== void 0)
      return !0;
  }
  return !1;
}
function My(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(xP(e.nodeValue ?? ""));
    return;
  }
  if (!bP(e)) return;
  const { classList: n } = e, i = (d) => e.childNodes.forEach((u) => My(u, d, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? TP(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function _P(e) {
  if (!gP.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !CP(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => My(n, !1, r)), r.join("").replaceAll(mP, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function vP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = se(e, ue);
  if (r === "attribute" || r === Nr || Cy(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (we(o) || Ke(o)) return;
  const n = t.startsWith(D) && F(e.getParent()), i = n ? t.slice(1) : t, s = (n ? D : "") + i.replace(/ (?=[ \u00A0])/g, D).replace(new RegExp("(?<=\\u00A0) ", "g"), D);
  s !== t && e.setTextContent(s);
}
function SP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function MP(e, t) {
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
function So(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (r)
    return Ey(r, t);
}
function Ey(e, t) {
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(e.getData("text/plain")), i = e.getData("text/html"), s = i ? _P(i) : void 0;
  return {
    text: s ? r(s) : n || (i ? r(SP(i)) : ""),
    isInternal: MP(
      e.getData("application/x-lexical-editor"),
      t
    )
  };
}
const cp = String.raw`\\(?:\+?[${Ot}]+\*?|\*)`, EP = new RegExp(
  String.raw`(?<=${cp})\u00A0|\u00A0(?=${cp})`,
  "g"
);
function Xu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(EP, " ").replaceAll(D, "~");
}
const Ay = new RegExp(
  String.raw`\\c(?![${Ot}])[ \u00A0]*[^\s\\]*`,
  "g"
), Py = new RegExp(String.raw`\\id(?![${Ot}])[^\n\\]*`, "g"), AP = new RegExp(
  String.raw`^(?:${Ay.source}|${Py.source})`
);
function Xo(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Ay, "").replace(Py, "");
    return AP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
const PP = new RegExp(
  String.raw`\\v(?![${Ot}*])[ \u00A0]*[^\s\\]*[ \u00A0]?`,
  "g"
), NP = new RegExp(
  String.raw`\\([${Ot}]+)(?![${Ot}*])[ \u00A0]?`,
  "g"
);
function Qo(e, t) {
  return e.replace(PP, "").replace(
    NP,
    (r, n) => t(n)?.type === x.Paragraph ? "" : r
  );
}
function ll(e) {
  if (E(e) && se(e, ue) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Ie(t)) return !0;
  return !1;
}
function wP(e) {
  return ll(e.anchor.getNode()) || ll(e.focus.getNode());
}
function OP(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && ll(t.getNode());
}
function RP(e, t, r, n) {
  const s = OP(e) ? r ? Qo(t, n) : t : Xu(
    r ? Qo(Xo(t), n) : Xo(t)
  );
  s && e.insertText(s.replace(/\n/g, " "));
}
function qP(e, t = !1, r = () => {
}, n = () => {
}) {
  const i = So(e, Tn()._config.namespace);
  if (!i) return !1;
  const s = N(), o = P(s) && wP(s);
  if (!o && i.isInternal && !t || t && P(s) && Ei(s))
    return !1;
  const { text: a } = i;
  return !a || !P(s) ? !1 : (e?.preventDefault(), o ? (RP(s, a, t, n), !0) : (Ny(s, a, t, r, n), !0));
}
function Ny(e, t, r, n, i) {
  const s = Xo(t), o = Xu(
    r ? Qo(s, i) : s
  );
  if (!o) return;
  const a = o.split(`
`);
  if (r) {
    e.insertText(a.join(" "));
    return;
  }
  if (a.length < 2) {
    e.insertText(o);
    return;
  }
  n(), e.isCollapsed() || e.removeText();
  const c = Tn();
  a.forEach((l, d) => {
    if (d > 0 && c.dispatchCommand(vi, void 0), l === "") return;
    const u = N();
    P(u) && u.insertText(l);
  });
}
function $P(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return K(t) ? !mt(e.getPreviousSibling()) : !1;
}
function IP(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const r = e.getParent();
  if (!K(r) || !mt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function LP(e) {
  const t = e.getParent();
  return (K(t) ? t.getCaller() : void 0) || _s;
}
function DP(e) {
  const t = e.getParent();
  return !t || gn(t) === void 0;
}
function Qu(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = El(e);
  let l = "", d = !0;
  for (const u of t) {
    if (I(u) && !u.isInline()) {
      !d && DP(u) && (l += `
`), d = !u.isEmpty();
      continue;
    }
    if (d = !1, mt(u))
      (u !== n || !e.isCollapsed()) && (l += (u === r ? "" : " ") + LP(u));
    else if (E(u)) {
      let f = u.getTextContent();
      u === r ? u === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : u === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += $P(u) ? "" : f.replaceAll(D, " ") + IP(u, u === n);
    } else (ri(u) || ti(u)) && (u !== n || !e.isCollapsed()) && (l += u.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function wy(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function UP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => Te(r) || we(r)
    )
  );
}
function FP(e) {
  const t = N();
  if (!P(t) || t.isCollapsed()) return;
  const r = Qu(t), n = {
    "text/plain": r,
    "text/html": wy(r)
  };
  if ($s() || UP(t)) return n;
  const i = Ek(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function lp(e, t, r, n) {
  const i = N();
  if (!P(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !cm();
  const s = FP(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], Oy(e, t, i, s, r, n)) : !1;
}
function Oy(e, t, r, n, i, s) {
  const o = ol(s);
  if (o !== void 0 && ky(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), ul(e, t, { "text/plain": xy(a, o) })) : ul(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function ul(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || Mk(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function Qn(e) {
  return Ae(e, we) ?? void 0;
}
function Ry(e) {
  return [e.anchor.getNode(), e.focus.getNode(), ...e.getNodes()].some(
    (t) => Qn(t) !== void 0
  );
}
function Zu() {
  const e = N();
  if (!P(e)) return;
  if (!e.isCollapsed()) {
    if (!Ry(e)) return;
    e.removeText();
  }
  const t = N();
  return P(t) ? Qn(t.focus.getNode()) : void 0;
}
function qy(e, t) {
  const r = Zu();
  if (!r) return !1;
  const n = Vn(e);
  return r.insertAfter(n), _n(t) ? Ra(n, e) : n.selectStart(), !0;
}
function zP() {
  const e = N();
  return P(e) && !e.isCollapsed() && Qn(e.anchor.getNode())?.is(Qn(e.focus.getNode())) ? !0 : Zu() !== void 0;
}
function KP(e) {
  if (!Ry(e)) return !1;
  if (!e.isCollapsed()) return !0;
  const t = e.focus.getNode(), r = Qn(t), n = r && Hi(r);
  return !(n?.is(t) && e.focus.offset === n.getTextContentSize());
}
function $y(e, t, r, n) {
  const i = N();
  if (t && P(i) && KP(i))
    return !0;
  if (!Zu()) return !1;
  const s = N();
  return e && P(s) && Ny(s, e, t, r, n), !0;
}
const yo = "﷐";
function BP(e, t) {
  const { opener: r, value: n, wrapper: i } = Ql(e), s = i ?? r;
  if (!s) return !1;
  const o = t.focus.getNode();
  return o.is(e) ? t.focus.offset > s.getIndexWithinParent() : [i, r, n].some(
    (a) => a && (a.is(o) || a.isParentOf(o))
  );
}
function jP(e, t, r) {
  const { closer: n, wrapper: i } = Xl(e), s = i ?? n;
  if (!s) return t;
  const o = r.focus.getNode();
  return (o.is(e) ? r.focus.offset > t.getIndexWithinParent() + 1 : !o.is(t)) ? s : t;
}
function dl(e) {
  const t = N();
  if (!P(t)) return !0;
  const r = Qn(t.focus.getNode());
  if (!r || !r.is(Qn(t.anchor.getNode()))) return !0;
  const n = Hi(r);
  if (!n) return !1;
  if (BP(r, t)) {
    const u = be("");
    return (Bi(r).at(-1) ?? r).insertAfter(
      Yt().append(u)
    ), u.select(0, 0), !0;
  }
  const i = r.getPreviousSibling(), s = (Bi(r).at(-1) ?? r).getNextSibling(), o = jP(r, n, t), a = o.is(n) && !/\s$/.test(n.getTextContent()) ? " " : "", c = be(a + yo);
  if (o.insertAfter(c), !my(r, e))
    return c.remove(), !1;
  const l = VP(i, s).flatMap((u) => I(u) ? u.getAllTextNodes() : [u]).find((u) => E(u) && u.getTextContent().includes(yo));
  if (!E(l)) return !1;
  const d = l.getTextContent().indexOf(yo);
  return l.setTextContent(l.getTextContent().replace(yo, "")), l.select(d, d), !0;
}
function VP(e, t) {
  const r = [];
  for (let n = e ? e.getNextSibling() : De().getFirstChild(); n && !n.is(t); n = n.getNextSibling())
    r.push(n);
  return r;
}
const Iy = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Kh(De().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = Jh(e), r = du(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = mT(0, o);
        const a = JC(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || yT(c) && Hl(parseInt(n, 10), c);
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
function fl(e, t) {
  return Pe.isValidMarker(e, t) || !!Iy[e] || ct.isValidMarker(e, t) || xe.isValidMarker(e, t);
}
function WP(e, t) {
  return xe.isNoteContentMarker(e) ? !1 : xe.isValidMarker(e, t);
}
function Ly(e, t, r, n, i, s) {
  const o = Lg(
    e,
    void 0,
    void 0,
    t,
    n ?? Li(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function pl(e, t, r, n, i, s, o) {
  const a = {
    viewOptions: r ?? Li(),
    getMarker: au(o ?? $i),
    logger: i
  };
  if (Pe.isValidMarker(e, n?.extraValidMarkers)) {
    let d;
    return { action: (f) => {
      f.editor.update(() => {
        dl(a) && (d = Ly(
          e,
          f.reference,
          t,
          r,
          n,
          i
        ));
      }, s);
    }, label: void 0, getInsertedNoteKey: () => d };
  }
  const c = QP(e, n?.extraValidMarkers);
  return c ? { action: (d) => {
    d.editor.update(() => {
      if (!dl(a)) return;
      const u = N();
      P(u) && (ou(u), d.noteText = u.getTextContent());
      const { content: f, highlightInserted: p } = c.action(d), m = Qd(f, dr, r), h = Va(m);
      if (P(u)) {
        const g = u.anchor.getNode(), b = g.getParent(), k = Jn(g), _ = u.anchor.key === u.focus.key;
        if (F(h) && k && _ && !kc(h, o))
          JP(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (F(h) && !_ && !kc(h, o) && YP(u))
          XP(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          ZP(
            u,
            () => Va(m)
          );
        else if (I(h) && !h.isInline()) {
          const M = u.insertParagraph();
          if (M) {
            const C = M.getChildren();
            h.append(...C), M.replace(h), at(h) && Zi(h) || h.selectStart();
          }
        } else if (F(h) && E(g) && !O(g) && F(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        kc(h, o)) {
          const M = g.getParent();
          if (F(M)) {
            const C = u.anchor.offset;
            if (C === 0) g.insertBefore(h);
            else if (C >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [w] = g.splitText(C);
              w.insertAfter(h);
            }
            h.getChildren().forEach((w) => {
              O(w) && w.setNested(!0);
            });
            const $ = h.getChildren().find((w) => E(w) && !O(w));
            $ && E($) ? $.select(
              $.getTextContentSize(),
              $.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (E(g) && !O(g) && u.isCollapsed() && (K(b) || F(b) && K(b.getParent()))) {
          const M = F(b) ? b : void 0, C = M ? HP(g, u.anchor.offset) : [];
          let w = (M ?? g).insertAfter(h);
          if (pr(h)) {
            const z = {
              ...r || Li(),
              markerMode: "hidden"
            }, v = Qd(
              f,
              dr,
              z
            ), V = Va(v);
            w = w.insertAfter(V);
          }
          if (C.length > 0 && M) {
            const z = Zo(M).append(...C);
            w.insertAfter(z), M.isEmpty() && M.remove();
          } else E(w.getNextSibling()) || w.insertAfter(be(D));
          I(w) && w.selectEnd();
        } else if (u.insertNodes([h]), l1(h), p) {
          const M = Vp();
          M.add(h.getKey()), Ur(M);
        } else if (F(h)) {
          const M = h.getChildren().find((C) => E(C) && !O(C));
          M && E(M) ? M.select(
            M.getTextContentSize(),
            M.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const M = h.getNextSibling();
          M ? M.selectStart() : h.selectStart();
        }
      } else
        u?.insertNodes([h]);
    }, s);
  }, label: c?.label } : { action: () => {
  }, label: void 0 };
}
function HP(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function kc(e, t) {
  return ((t ?? $i).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function GP(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(gt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function JP(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && F(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !E(r)) {
    const o = e.anchor.offset;
    if (E(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else E(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = ji(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (qi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !O(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function YP(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || F(n)) continue;
    if (!E(n) || n.getType() !== He.getType() || se(n, ue) === "attribute") return !1;
    const i = gC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Jn(n) && (r = !0);
  }
  return r;
}
function XP(e, t, r) {
  const n = Dm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Jn(a)) return;
    qi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(D) && c.setTextContent(l.slice(D.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(D) || i.setTextContent(D + i.getTextContent());
  const s = t.getChildren().find((a) => E(a) && !O(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function QP(e, t) {
  let r = Iy[e];
  return r || (ct.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: ct.getType(), marker: e, content: [] }] })
  } : xe.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: xe.getType(), marker: e };
      return (xe.isValidFootnoteMarker(e) || xe.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function ZP(e, t) {
  const r = e.getNodes(), [n, i] = ji(e);
  let s;
  r.forEach((o, a) => {
    if (I(s) && s.isParentOf(o))
      return;
    const c = Dy(
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
    s || (s = t(), c.insertBefore(s), l = !0, F(s) && s.getChildren().some((u) => O(u) && u.getMarkerSyntax() === "opening") && GP(s, F(s.getParent()))), t1(c, s, l);
  }), (E(s) || I(s)) && s.selectEnd();
}
function ji(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function ed(e) {
  return Ce(e) || K(e) || K(e.getParent());
}
function Dy(e, t, r, n, i) {
  if (!ed(e)) {
    if (E(e))
      return e1(e, t, r, n, i);
    if (I(e) && e.isInline())
      return e;
  }
}
function e1(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function t1(e, t, r) {
  if (E(t)) {
    const n = hl(e, t);
    t.setTextContent(n), e.remove();
  } else if (I(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => O(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !O(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    hl(e, t), r && F(t) && t.getChildren().some((s) => O(s)) && E(e) && !O(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function hl(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    lu(n), E(n) || t.insertBefore(be(" "));
  }
  return r;
}
function Uy(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = Zn(d, t);
    if (!f) return !1;
    const p = E(d) ? d.getTextContentSize() : 0;
    if (up(f, r), E(d) && d.isAttached()) {
      const m = d.getTextContentSize(), h = Math.max(p - m, 0), g = Math.max(0, Math.min(u - h, m)), b = N();
      P(b) && b.setTextNodeRange(d, g, d, g);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ji(e);
  if (!rd(n, t, s, o)) return !1;
  const a = td(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = Zn(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = By(u, a);
    f && (up(f, r), l = !0);
  }), jy(a, i), l;
}
function up(e, t) {
  e.getChildren().forEach((n) => {
    Nt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Qt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    E(n) && i.startsWith(D) && n.setTextContent(i.slice(D.length));
  }), Mc(e);
}
function td(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Dy(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function Zn(e, t) {
  let r = e, n;
  for (; r && !at(r); ) {
    if (K(r)) return;
    !n && F(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Fy(e) {
  const t = Ae(
    e,
    (r) => K(r) || at(r)
  );
  return K(t);
}
function zy(e) {
  return e.filter(
    (t) => !ed(t) && (E(t) || I(t) && t.isInline())
  );
}
function r1(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || ed(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function n1(e, t, r) {
  return e.getChildren().some(
    (n) => I(n) && t.some((i) => n.isParentOf(i)) && !Ky(n, r)
  );
}
function rd(e, t, r, n, i) {
  const s = zy(e), o = r1(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Zn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !n1(l, s, o);
  });
}
function Ky(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Nt(r));
}
function By(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (I(d) && t.some((u) => d.isParentOf(u))) {
      if (!Ky(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Nt(n[s - 1]) && (s -= 1), o < n.length - 1 && Nt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Zo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Zo(e).append(...c)), e;
}
function Zo(e) {
  return bk(e);
}
function jy(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function i1(e, t, r) {
  if (e.isCollapsed()) {
    const l = Zn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Ld(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ji(e);
  if (!rd(n, r, i, s, t)) return !1;
  const o = td(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = Zn(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = By(d, o);
    u && (Ld(u, t), c = !0);
  }), c;
}
function s1(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (g) => g !== t
  ), s = e.getNodes(), [o, a] = ji(e);
  if (!!!i?.some(
    (g) => rd(s, g, o, a)
  ) && !o1(s, t)) return !1;
  let l = !1;
  i?.forEach((g) => {
    const b = N();
    P(b) && Uy(b, g, n) && (l = !0);
  });
  const d = N();
  if (!P(d)) return l;
  const u = d.isBackward(), [f, p] = ji(d), m = td(
    d.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const h = m.filter(
    (g) => !Fy(g) && !Zn(g, t)
  );
  return h.length > 0 && (a1(h).forEach((g) => c1(g, t)), l = !0), jy(m, u), l;
}
function o1(e, t) {
  return zy(e).some(
    (r) => !Fy(r) && !Zn(r, t)
  );
}
function a1(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function c1(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => F(a) && a.getMarker() === t
  ), s = i ? Zo(i) : zr(t);
  e[0].insertBefore(s), s.append(...e), i === r || hl(e[0], s);
}
function l1(e) {
  me(e) && (lu(e.getPreviousSibling()), wg(e.getNextSibling()));
}
const Vy = {
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
}, dp = "psc-active-text", bo = "psc-empty-text";
function u1({ viewOptions: e }) {
  const [t] = ae(), r = Y(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return B(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(dp), r.current = o, o && t.getElementByKey(o)?.classList.add(dp);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        la,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${bo}`);
          if (!c) return !1;
          const l = Vi(c);
          if (!me(l)) return !1;
          const d = l.getParent();
          if (!I(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        bt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = xc(), f = d1(), p = [], m = [];
          return De().getChildren().forEach((h) => {
            if (!I(h)) return;
            const { emptyKeys: g, nonEmptyKeys: b } = p1(h);
            p.push(...g), m.push(...b);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(bo) : t.getElementByKey(u)?.classList.add(bo);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(bo));
      }),
      t.registerCommand(
        wl,
        () => (i(void 0), !1),
        bt
      ),
      t.registerCommand(
        kk,
        () => {
          const o = t.getEditorState().read(xc);
          return o !== r.current && i(o), !1;
        },
        bt
      )
    ];
    return i(t.getEditorState().read(xc)), Oe(...s);
  }, [t, n]), null;
}
function xc() {
  return f1(N() ?? void 0)?.getKey();
}
function d1() {
  const e = N();
  if (!P(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!I(n)) return;
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
    me(s[a]) && (o = s[a].getKey());
  return o;
}
function f1(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function p1(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (me(c)) break;
      if (!(Ut(c) || O(c)) && c.getTextContent().replaceAll(Ao, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function gl(e, t) {
  const r = mu();
  if (!r?.end) return;
  const n = h1(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = va(r);
        return i ? Qu(i) : void 0;
      },
      { editor: n.editor }
    );
}
const Tc = /* @__PURE__ */ new WeakMap();
function h1(e, t) {
  const r = e.getEditorState();
  if (Tc.has(r)) {
    const i = Tc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = g1(r, t);
  return Tc.set(r, n), n;
}
function g1(e, t) {
  const r = Eu(vu);
  if (!r) return;
  const n = _o.deserializeEditorState(e, t);
  if (!n) return;
  const i = xk({
    namespace: "markers-view-copy",
    nodes: [ot, ...Tu],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    dr.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function m1({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = ae();
  return B(() => {
    const n = (i, s) => {
      const o = N();
      if (!P(o) || o.isCollapsed()) return !1;
      const a = gl(r, e);
      return a === void 0 ? !1 : Oy(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": wy(a) },
        s,
        t
      );
    };
    return Oe(
      r.registerCommand(Ni, (i) => n(i, !1), Me),
      r.registerCommand(lr, (i) => n(i, !0), Me)
    );
  }, [r, e, t]), null;
}
const fp = /* @__PURE__ */ new WeakMap();
function y1({
  limit: e,
  viewOptions: t
}) {
  const [r] = ae(), n = Y(ol(e)), i = Y(t), s = Y(!1), o = Y(void 0);
  return B(() => {
    n.current = ol(e), i.current = t, o.current?.();
  }, [e, t]), B(() => {
    let a, c;
    const l = (b) => {
      const k = n.current;
      if (k === void 0) return;
      const _ = fp.get(b);
      if (b.defaultPrevented && _ === void 0) return;
      const M = r.getRootElement();
      if (!M) return;
      const C = M.ownerDocument.getSelection();
      if (!C || !x1(C, M)) return;
      b.preventDefault();
      const $ = xy(
        _ ?? C.toString().replaceAll(D, " "),
        k
      );
      fp.set(b, $);
      const w = b.clipboardData;
      if (w) {
        if (!$) {
          _ !== void 0 && w.clearData();
          return;
        }
        w.setData("text/plain", $);
      }
    }, d = (b) => {
      n.current !== void 0 && Ck(b, "a", { ctrlKey: !wi, metaKey: wi }) && (C1(c?.activeElement, r.getRootElement()) || b.preventDefault());
    }, u = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", d, !0), c = void 0;
    }, f = () => {
      const b = n.current === void 0 ? void 0 : a;
      b !== c && (u(), c = b, c?.addEventListener("copy", l), c?.addEventListener("keydown", d, !0));
    };
    o.current = f;
    const p = (b) => (b?.preventDefault(), !0), m = (b) => {
      const k = n.current;
      if (k === void 0 || (s.current = !1, ky(r, b))) return !1;
      if (k <= 0) return p(b);
      const _ = N();
      if (ca(_))
        return _.getTextContent().length + Ty(_.getNodes()) <= k ? !1 : p(b);
      if (!P(_) || _.isCollapsed()) return !1;
      const M = b1(r, i.current);
      return M.$size(_) <= k ? !1 : (cP(k, M.options), _.isCollapsed() ? p(b) : (r.isEditable() || Wp(() => k1(r)), s.current = !0, !1));
    }, h = (b, k) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const _ = N();
      if (!P(_) || _.isCollapsed()) return !1;
      const M = k && r.isEditable() && !pP(_);
      return ul(
        b && typeof b == "object" && "clipboardData" in b ? b : null,
        r,
        { "text/plain": Yu(_, cl) },
        M ? () => _.removeText() : void 0
      );
    }, g = Oe(
      r.registerCommand(Ni, m, ke),
      r.registerCommand(lr, m, ke),
      r.registerCommand(
        Ni,
        (b) => h(b, !1),
        Cr
      ),
      r.registerCommand(
        lr,
        (b) => h(b, !0),
        Cr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        Tk,
        (b) => n.current === void 0 ? !1 : (b?.preventDefault(), !0),
        ke
      ),
      r.registerRootListener((b) => {
        a = b?.ownerDocument ?? void 0, f();
      })
    );
    return () => {
      g(), o.current = void 0, u();
    };
  }, [r]), null;
}
function b1(e, t) {
  if (ro(t)) {
    const n = (i) => Qu(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && gl(e, r) !== void 0) {
    const n = (i) => gl(e, r)?.length ?? Yu(i, cl).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + Ty(n.getNodes()),
    options: { $isHidden: cl }
  };
}
function k1(e) {
  e.getEditorState().read(() => {
    const t = N(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!P(t) || !r) return;
    const n = pp(e, t.anchor), i = pp(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function pp(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = _k(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = I(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function x1(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const T1 = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function C1(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? T1.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const _1 = /^\+/;
function nd(e, t) {
  const r = t.replace(_1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Wy(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Hy(e, t) {
  return Wy(e, t) !== void 0;
}
function ml(e, t) {
  const r = Wy(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ea(e, t, r) {
  const n = I(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function v1(e, t, r, n, i) {
  const s = nd(n, t);
  if (!s) {
    ea(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ea(e, "invalid", i);
}
function Ai(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (F(s)) {
      const o = s.getMarker();
      i || v1(s, o, t, r, n), Ai(s, t, r, n, i || o === "xq");
    } else if (me(s)) {
      if (i) continue;
      const o = nd(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? Ai(s, s.getMarker(), r, n, i) : Ke(s) || I(s) && Ai(s, t, r, n, i);
}
function S1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = nd(e, a);
    if (!c) {
      ea(o, "unknown", r), ml(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    ml(n, l) || ea(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of De().getChildren())
    Ke(o) || (Te(o) ? (i(o, o.getMarker()), s(o) && Ai(o, void 0, e, r, !1)) : Ge(o) ? i(o, o.getMarker()) : le(o) ? (i(o, o.getMarker()), s(o) && Ai(o, o.getMarker(), e, r, !1)) : I(o) && s(o) && Ai(o, "p", e, r, !1));
  return r;
}
function M1(e) {
  return !!e?.includes("(basic)");
}
function E1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Gy(e, t) {
  return !e.startsWith("zpa") && e !== "c" && fl(e, t);
}
function id(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Jy(e, t) {
  const r = [];
  for (const n of t) {
    const i = id(e, n);
    i && ml(r, i);
  }
  return r;
}
function Mo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: E1(e.description),
    isBasic: M1(e.description)
  };
}
function A1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function yl(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : A1(e.marker, t.marker);
}
function bl(e, t, r) {
  if (t.noteMarker) return [];
  const n = Jy(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Gy(i.marker, r)
  ).filter((i) => {
    const s = id(e, i.marker);
    return s !== void 0 && Hy(n, s);
  }).map((i) => Mo(i, "paragraph")).sort(yl);
}
function P1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Gy(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Mo(c, "character")).sort(yl);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Mo(c, "character")),
    ...a.map((c) => Mo(c, "note"))
  ].sort(yl);
}
function N1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function w1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function O1(e, t, r) {
  return [
    ...N1(e, t.openCharMarkers),
    ...P1(e, t, r)
  ].sort(w1);
}
function R1(e, t, r) {
  if (t.source === "paragraph") return bl(e, t, r);
  const n = O1(e, t, r);
  return n.length > 0 ? n : bl(e, t, r);
}
function q1(e, t, r) {
  const n = bl(e, t, r), i = Jy(e, t.previousParaMarkers), s = id(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Hy(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
function Yy(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && _n(r)) {
    Ra(e, t);
    return;
  }
  Jg(e, t);
}
function Xy() {
  const e = N();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Qy(e);
    return t !== "removed" ? t : (kl(), "handled");
  }
  return kl() ? "handled" : "declined";
}
function $1(e, t) {
  if (!t) return e;
  const r = AA.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function hp(e, t) {
  const r = N();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Zy())
      return "declined";
  } else {
    const s = Qy(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => $1(s, t)
  );
  gp(n ?? "");
  for (const s of i)
    kl(), gp(s);
  return "handled";
}
function I1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Vi(n);
  if (!i) return !1;
  const s = zt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Qy(e) {
  const t = zt(e.anchor.getNode()), r = zt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), L1() ? "removed" : "needs-plain-split");
}
function gp(e) {
  if (e === "") return;
  const t = N();
  P(t) && t.insertText(e);
}
function L1() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = zt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function Zy() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = zt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function kl() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Zy();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = zr("fp", { closed: "false" });
  i.append(gt("fp"));
  const s = E(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    qi(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [d] = l;
    d && (bT(d), i.append(d));
  }
  return i.getChildren().every(O) && i.append(be(Qt)), eb(i), !0;
}
function eb(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (E(t)) {
    const r = ya(t);
    t.select(r, r);
    return;
  }
  if (I(t)) {
    eb(t);
    return;
  }
  e.selectEnd();
}
function D1(e) {
  const t = [];
  let r = e;
  for (; r; )
    F(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function U1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of De().getChildren()) {
    if (t && n.is(t)) {
      (Te(n) || we(n)) && r.push(n.getMarker());
      break;
    }
    (Te(n) || Ge(n) || le(n)) && r.push(n.getMarker());
  }
  return r;
}
function F1(e) {
  let t = e;
  for (; I(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function z1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Nt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Or(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(F1(i)) && r === 0 : !1;
}
function K1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Nt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Or(i) && t.is(i) && r === 0;
}
function B1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function j1() {
  const e = N();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Ae(t, le), s = i ? void 0 : Ae(t, Te), o = !n && !s && (!i || K1(i, t, r)) ? "paragraph" : "character", a = zt(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: U1(t),
    openCharMarkers: D1(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: su(t, r),
    anchorRect: B1()
  };
}
function V1() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = PA.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function W1(e, t, r) {
  Yy(e, t, r), Gu(e);
}
function H1(e, t, r) {
  const n = N();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = Ae(i, le);
  if (t === "backslash" && s && z1(s, i, n.focus.offset)) {
    W1(s, e, r);
    return;
  }
  xl(e, r);
}
function tb(e, t) {
  const r = e.getNode(), n = Um(I(r) ? r : r.getParent());
  return t.is(n);
}
function G1(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !tb(e, t);
}
function ta(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function J1(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!O(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!F(r)) return e;
  const n = r.getParent();
  return n ? sr(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function Y1(e, t, r) {
  const n = N();
  if (!P(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!tb(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && G1(s, e)) return !1;
  const o = Wl(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (ta(n.anchor, e, o), ta(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = N();
  if (!P(a) || !a.isCollapsed()) return !1;
  const c = Km(a);
  if (!c) return !1;
  const { parent: l, moving: d } = zm(
    J1(c.anchor)
  );
  if (!e.is(l)) return !1;
  const u = d.filter((m) => !m.is(o)), f = Vn(t);
  e.insertAfter(f), f.append(...u);
  const [p] = u;
  return F(p) ? ka(p) : f.select(0, 0), _n(r) && zs(f), !0;
}
function X1(e, t) {
  const r = N();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function rb(e) {
  const t = N();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function Q1(e) {
  const t = Ae(e.anchor.getNode(), Te);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !Wl(r) || (ta(e.anchor, t, r), ta(e.focus, t, r));
}
function Z1(e, t, r, n) {
  const i = N();
  if (P(i) ? Q1(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && V1(), e.kind === "closeTag") {
    rb(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Xy() !== "declined") return;
  if (e.kind === "paragraph" && ct.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    H1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Pe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return dl({
      viewOptions: n.viewOptions ?? Li(),
      getMarker: au(n.styleInfo ?? $i),
      logger: n.logger
    }) ? Ly(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    ) : void 0;
  pl(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Tn(), reference: r });
}
function xl(e, t) {
  if (qy(e, t)) return !0;
  const r = N();
  if (!P(r)) return !1;
  ou(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!Ae(n, le)) {
    const o = Ae(n, Te);
    if (o) return Y1(o, e, t);
  }
  const i = _n(t);
  if (Bm()) {
    const o = N();
    if (!P(o)) return !1;
    const a = Ae(o.anchor.getNode(), le);
    return a ? (a.setMarker(e), i && zs(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return le(s) ? (i ? Ra(s, e) : s.setMarker(e), !0) : !1;
}
function eN() {
  const [e] = ae();
  return B(() => e.registerCommand(Jp, () => !0, bt), [e]), null;
}
function tN(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = vA.exec(e)?.[1];
  return r === void 0 ? !1 : !Hu(r, t);
}
function nb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !tN(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!le(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!le(i) && !Te(i)))
    return [i, r];
}
function ib(e, t) {
  const r = nb(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return Te(n) ? dy(n, t, [i]) : sy([n, i], t);
}
function rN(e, t) {
  const r = N();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function sb(e) {
  const t = SA.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function nN(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = sb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function iN(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if (F(n)) {
      ka(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function mp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = sb(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  iN(e);
}
function yp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function ob(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return ir(e, r);
  const n = nN(e), i = e.getParent();
  if (le(i)) {
    if (!Hu(t, r.getMarker))
      return ib(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : ir(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), yp(s, t) && mp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (F(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(F(i) ? WA(t, r.getMarker) : Pe.isValidMarker(s)))
      return ir(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return ir(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (rN(c, nt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), yp(a, s) && mp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return ir(e, r);
}
function sN(e) {
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
function oN(e, t) {
  const r = e.getTextContent();
  if (Hr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ie(e.getParent()) && Jl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !sN(e)) {
    ST(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = CA.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), ob(e, n[1], t);
      return;
    }
    if (_A.test(r)) {
      t.pendingKeys.delete(e.getKey()), ir(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = nt(e.getMarker(), e.getNested());
    if ((F(n) || K(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = N(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = be(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function aN(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (gg(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function ab(e) {
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
const ps = ab("v"), cN = ab("c"), bp = /^[ \u00A0]*$/;
function Tl(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === He.getType() && n.getMode() === "normal" && se(n, ue) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = be(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function lN(e, t) {
  const r = e.getTextContent(), n = Xt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (ps.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = ps.valueAndRest.exec(c);
    if (l && bp.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (ps.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = ps.valueAndRest.exec(r);
  if (!s) {
    const c = ps.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = N(), p = P(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(Xt("v", d));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Tl(e, u, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), ir(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), bp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Xt("v", o)), a && Tl(e, a, a.length);
}
const uN = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function dN(e, t) {
  if (!Cy(e)) return !1;
  const r = e.getParent();
  if (!K(r)) return !1;
  const n = e.getTextContent();
  if (n === Kt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = uN.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = N(), c = P(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Kt(s)), o) {
    const l = n.length - o.length, d = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const u = Tl(e, o, d);
    u.isUnmergeable() || u.toggleUnmergeable();
  }
  return !0;
}
function fN(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = Xt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = cN.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function cb(e) {
  if (Ze(e)) {
    const { wrapper: t } = ma(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = Yl(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (we(e)) {
    const t = [], r = Xl(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Ql(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if ($e(e)) {
    const t = [], r = As(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = As(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function pN(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return cb(e).some((n) => r.is(n));
}
function hN(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && le(e) && Xh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ps)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && eo(l, e) && (i || pN(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of cb(e))
    l.remove(), n = !0;
  let s = !1;
  if (F(e)) {
    const l = NT(e);
    l !== void 0 && ux(l) && (ag(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Ps)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (SC(l, e)) {
        ws(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && vg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      xa(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function kp(e) {
  return E(e) && e.getType() === He.getType() && e.getMode() === "normal" && se(e, ue) !== "attribute";
}
function gN(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ne(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && kp(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && kp(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function ko(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = gN(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ne(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Hr(c)) continue;
      const m = Vm.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = ob(c, m[1], e) || n : r === "idle" && op(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : ib(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = ir(c, e) || n;
      continue;
    }
    const l = Gn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = hN(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && op(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = ir(d, e) || n;
    }
  }
  return n;
}
function lb(e) {
  if (Yr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (F(t)) return bs(t) !== void 0;
  return !1;
}
function mN(e) {
  const t = Gn(e);
  if (!t) return !1;
  const r = Hn(t.kind);
  return !xa(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function xp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Ke(t) || bg(t)) return !0;
  return !1;
}
function yN(e, t) {
  const r = e.getTextContent(), n = se(e, ue), i = e.getParent();
  if (n !== "attribute" && we(i)) {
    r.replace(/^[ \u00A0]+/, "") === Xt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (dN(e, t)) return;
  if (n === "attribute") {
    mN(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && lb(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !xp(e))
      t.pendingKeys.add(e.getKey());
    else if (ig(e)) t.pendingKeys.add(e.getKey());
    else if (we(Fs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      F(a) && cg(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (xp(e)) return;
  const s = N(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (MA.test(o)) {
    if (kx(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), ir(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function bN(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : vg(e, t);
}
function kN(e) {
  const t = (r) => {
    if (O(r)) {
      Hr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Yr(r)) {
      gg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Ps)
      n.settleScope !== "none" && n.ownerPredicate(r) && (eo(n, r) || bN(n, r)) && e.pendingKeys.add(r.getKey());
    if ($e(r)) {
      r.getTextContent() !== Xt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== He.getType() || se(r, ue) === "attribute") return;
      const n = r.getParent();
      if (we(n)) {
        r.getTextContent() !== Xt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && lb(r) || i.includes("//") || ig(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (F(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ke(r)) {
      if (Ie(r) && r.getChildrenSize() === 0) {
        const n = Gn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      I(r) && r.getChildren().forEach(t);
    }
  };
  De().getChildren().forEach(t);
}
const ub = Yp(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Cc(e) {
  const t = e();
  return vt(Al), vt(lh), t;
}
const Tp = 8, xN = 1e3;
function ki(e, t) {
  const r = $e(e) ? ["va", "vp"] : Ze(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    NC(Hn(n), e, t.pendingKeys);
}
function TN(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Ol) || i.updateTags.has(vs)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ne(o);
        if (!c) continue;
        const l = Gn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ne(o.getKey());
        c?.isAttached() && Hn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Oe(
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
    e.registerMutationListener(He, r),
    e.registerMutationListener(Rr, r),
    e.registerMutationListener(Vr, r),
    e.registerMutationListener(Wr, r)
  );
}
function ra(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = N();
  return r ? t ? _m(r, t) : P(r) && Ei(r) : !1;
}
function CN(e, t, r) {
  return Oe(
    e.registerCommand(
      Gt,
      (n) => {
        if ($s() || ra(t)) return !1;
        const i = So(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Xo(i.text) : i.text, o = r && t.structureProtectionMode === "protected" ? Qo(s, t.getMarker) : s, a = r ? Xu(o) : o;
        if (a.includes(`
`)) {
          const c = a.split(`
`);
          let l = hp(c, t.getMarker);
          if (l === "declined" && I1(e) && (l = hp(c, t.getMarker)), l === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      ke
    ),
    e.registerCommand(
      Gt,
      (n) => {
        if ($s() || ra(t)) return !1;
        const i = So(n, e._config.namespace);
        if (!i) return !1;
        const s = $y(
          i.text,
          t.structureProtectionMode === "protected",
          () => {
            t.splitExpected.current = !0;
          },
          t.getMarker
        );
        return s && n?.preventDefault(), s;
      },
      ke
    ),
    e.registerCommand(
      Gt,
      (n) => {
        const i = So(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !kA()) return !1;
        const o = N();
        return t.structureProtectionMode === "protected" && P(o) && Ei(o) ? !1 : (n?.preventDefault(), P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(vi, void 0), a === "") return;
          const l = N();
          P(l) && l.insertText(a);
        }), !0);
      },
      Me
    ),
    e.registerCommand(
      Gt,
      () => (t.splitExpected.current = !0, !1),
      bt
    )
  );
}
function _N({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = ae(), a = e?.markerMode === "editable", c = !!e && ro(e), l = Y(void 0), d = Y(n), u = Y(s);
  return B(() => {
    d.current = n, u.current = s;
    const f = l.current;
    f && (e && (f.viewOptions = e), f.getMarker = t ?? _r, f.logger = r, f.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), B(() => {
    if (!a || !e) return;
    const f = {
      viewOptions: e,
      getMarker: t ?? _r,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = f;
    const p = TC(o, f.pendingKeys);
    let m, h = !1, g, b = !1, k = !1, _ = 0;
    const M = () => _ < Tp ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Tp} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), C = (v, V = "departure") => {
      o.update(() => {
        _ = Cc(
          () => ko(f, v, V)
        ) ? _ + 1 : 0;
      });
    };
    let $;
    const w = () => {
      if ($ !== void 0 && clearTimeout($), $ = void 0, k || f.pendingKeys.size === 0) return;
      const v = d.current ?? xN;
      v < 0 || ($ = setTimeout(() => {
        $ = void 0, !(k || f.pendingKeys.size === 0) && (h || M() || C(void 0, "idle"));
      }, v));
    }, z = Oe(
      o.registerNodeTransform(Rr, (v) => {
        if (o.isComposing()) return;
        oN(v, f);
        const V = Gn(v);
        V && ($e(V.owner) || K(V.owner) || we(V.owner) || Ze(V.owner) && ma(V.owner).wrapper === void 0) && ki(V.owner, f);
      }),
      o.registerNodeTransform(kt, (v) => {
        o.isComposing() || (lN(v, f), ki(v, f));
      }),
      o.registerNodeTransform(jt, (v) => {
        o.isComposing() || (fN(v), v.isAttached() && ki(v, f));
      }),
      o.registerNodeTransform(ct, (v) => {
        o.isComposing() || tP(v, f);
      }),
      o.registerNodeTransform(xe, (v) => {
        if (!o.isComposing()) {
          oP(v, f);
          for (const V of ["separator", "char"])
            v.isAttached() && eo(Hn(V), v) && f.pendingKeys.add(v.getKey());
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
      o.registerNodeTransform(ur, (v) => {
        o.isComposing() || ki(v, f);
      }),
      o.registerNodeTransform(Wr, (v) => {
        if (o.isComposing()) return;
        const V = Gn(v);
        V && (Ze(V.owner) || $e(V.owner) || K(V.owner) || we(V.owner)) && ki(V.owner, f);
      }),
      o.registerNodeTransform(Pe, (v) => {
        o.isComposing() || (sP(v, f), ki(v, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(Jr, (v) => {
        o.isComposing() || aN(v, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(He, (v) => {
        o.isComposing() || yN(v, f);
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
        He,
        (v) => {
          o.getEditorState().read(() => {
            for (const [V, H] of v) {
              if (H === "destroyed") continue;
              const fe = ne(V);
              !fe || se(fe, ue) !== "attribute" || Ie(fe.getParent()) || o.getElementByKey(V)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      TN(o, f),
      ...c ? [
        o.registerNodeTransform(He, (v) => {
          o.isComposing() || vP(v);
        }),
        o.registerCommand(
          Ni,
          (v) => lp(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            v && typeof v == "object" && "clipboardData" in v ? v : null,
            o,
            !1,
            u.current
          ),
          Me
        ),
        o.registerCommand(
          lr,
          (v) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            lp(
              v && typeof v == "object" && "clipboardData" in v ? v : null,
              o,
              !0,
              u.current
            )
          ),
          Me
        ),
        o.registerCommand(
          Gt,
          (v) => qP(
            // Same jsdom-safe duck-check as COPY above.
            v && typeof v == "object" && "clipboardData" in v ? v : null,
            f.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              f.splitExpected.current = !0;
            },
            f.getMarker
          ),
          Me
        )
      ] : [],
      o.registerCommand(
        lr,
        () => (!ra(f) && !$s() && sl(f), !1),
        ke
      ),
      o.registerCommand(
        Pi,
        () => (o.isComposing() || QA(f), !1),
        Cr
      ),
      o.registerCommand(
        ua,
        (v) => v || o.isComposing() ? !1 : iP(),
        Cr
      ),
      o.registerCommand(
        la,
        () => (h = !1, _ = 0, w(), !1),
        bt
      ),
      o.registerCommand(
        Pr,
        (v) => (h = !1, _ = 0, w(), (v.key === "Backspace" || v.key === "Delete") && !ra(f, km(v)) && (sl(f), XA(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !v.ctrlKey || v.altKey || v.shiftKey || v.metaKey || v.key !== " " && v.code !== "Space" || !bA() ? !1 : (v.preventDefault(), !0)),
        Me
      ),
      o.registerCommand(
        Hp,
        (v) => {
          const V = Xy();
          V === "needs-plain-split" && o.dispatchCommand(vi, void 0);
          const H = V !== "declined" || wC();
          return H && v?.preventDefault(), ko(f), H;
        },
        Me
      ),
      // A chapter line cannot be split: Enter there starts a `\p` after it and a line break is
      // refused (see chapterLine.utils.ts). CRITICAL so both run ahead of every split, including
      // this plugin's own char-stack split below.
      o.registerCommand(
        vi,
        () => qy(Lt, f.viewOptions),
        ke
      ),
      o.registerCommand(
        jp,
        () => zP(),
        ke
      ),
      // A drop inserts through Lexical's clipboard path, which splits at every line break without
      // going through INSERT_PARAGRAPH_COMMAND, so a drop on a chapter line is claimed and goes in
      // as a paste there does. LOW: below structure protection's HIGH block and the NORMAL
      // replace-selection delete, above Lexical's own insertion at EDITOR.
      o.registerCommand(
        Pi,
        (v) => {
          if (typeof v == "string" || !v.dataTransfer) return !1;
          const { text: V } = Ey(v.dataTransfer, o._config.namespace);
          return !!V && $y(
            V,
            f.structureProtectionMode === "protected",
            () => {
              f.splitExpected.current = !0;
            },
            f.getMarker
          );
        },
        bt
      ),
      o.registerCommand(
        vi,
        () => (f.splitExpected.current = !0, Bm()),
        Me
      ),
      CN(o, f, c),
      o.registerCommand(
        ub,
        () => {
          if (h) return !0;
          const v = o.getRootElement(), V = v?.ownerDocument, H = !!v && !!V && V.hasFocus() && v.contains(V.activeElement);
          let fe;
          if (H) {
            const Q = N();
            fe = P(Q) ? Q.focus.key : m;
          }
          return Cc(() => ko(f, fe)), !0;
        },
        bt
      ),
      o.registerCommand(
        wl,
        () => {
          if (h) return !1;
          const v = N(), V = P(v) ? v.focus.key : m;
          return Cc(() => ko(f, V)), !1;
        },
        bt
      ),
      o.registerUpdateListener(({ editorState: v, tags: V }) => {
        f.splitExpected.current = !1, f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear(), f.rebuildAttempted.clear();
        const H = v.read(() => {
          const Q = N();
          return P(Q) ? Q.focus.key : void 0;
        }), fe = g;
        if (H !== void 0 && (g = H), V.has(Ol)) {
          f.pendingKeys.clear(), v.read(() => kN(f)), h = !0, H !== void 0 && (m = H);
          return;
        }
        if (V.has(Mt)) {
          H !== void 0 && H !== fe && (h = !0);
          return;
        }
        h || (H !== void 0 && (m = H), w(), !(b || H === void 0) && [...f.pendingKeys].some((Q) => Q !== H) && (b = !0, queueMicrotask(() => {
          b = !1, !k && (M() || C(m));
        })));
      })
    );
    return () => {
      k = !0, $ !== void 0 && clearTimeout($), $ = void 0, p(), z(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const vN = ["status_unknown", "status_invalid"], db = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, SN = Object.values(db);
function MN(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = db[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Cp(e) {
  e.classList.remove(...vN), e.removeAttribute("aria-description"), SN.includes(e.title) && e.removeAttribute("title");
}
function EN(e, t, r, n) {
  const i = (a) => a.read(() => De().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const d = ne(l)?.getTopLevelElement();
        d && a.add(d.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function AN(e) {
  const t = ne(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function PN({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ae(), i = e?.markerMode === "editable";
  return B(() => {
    if (!i) return;
    const s = t ?? $i;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = S1(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || AN(f)) continue;
            const m = ne(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Cp(p);
        }
        for (const [f, p] of u) {
          const m = n.getElementByKey(f);
          m && MN(m, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          EN(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && Cp(d);
      }
    };
  }, [n, i, t, r]), null;
}
function fb(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Er(o);
    a && I(s) && fb(s.getChildren(), a, r);
  }
}
function Ks(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = Er(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Ki(a);
      if (l === void 0 || !l.includes(dt)) continue;
      const d = l.split(dt), u = [];
      for (let f = 0; f < d.length; f++) {
        const p = d[f];
        if (f > 0 && u.push(...t[n++] ?? []), p.length > 0) {
          const m = {
            ...a,
            text: p
          };
          u.push(m);
        }
      }
      s.splice(o, 1, ...u), o += u.length - 1;
    }
  };
  return i(e), n;
}
function na(e, t, r) {
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
function pb(e, t) {
  const r = [];
  for (const n of e)
    Bu(n, t) || ((le(n) || F(n)) && r.push(n.getMarker()), I(n) && r.push(...pb(n.getChildren(), t)));
  return r;
}
function hb(e) {
  const t = [];
  for (const r of e) {
    const n = ju(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Er(r);
    i && t.push(...hb(i));
  }
  return t;
}
function Bs(e, t, r) {
  const n = pb(e, r), i = hb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function NN(e, t) {
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
  if (!(!E(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function qa(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function wN(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Aa(c, e, o, s)) return;
  const l = i ? qa(c, i) : c.text, d = jr(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (Xr(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = dr.serializeEditorState(
    { type: cr, version: ar, content: d },
    s
  ).root.children;
  if (yn(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = na(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ar(u, o) === Mr(e, o) && Bs(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Ks(u, f);
  const m = gb(e), h = sd(u);
  for (let g = 0; g < m.length && g < h.length; g++)
    m[g].sid !== void 0 && h[g].number === m[g].number && (h[g].sid = m[g].sid);
  return u;
}
function gb(e) {
  const t = [], r = (n) => {
    $e(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : I(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function sd(e) {
  const t = [];
  for (const r of e) {
    Fh(r) && t.push(r);
    const n = Er(r);
    n && t.push(...sd(n));
  }
  return t;
}
function ON(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = ay(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? qa(l, i) : l.text, f = jr(u, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Xr(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = p.content ?? [], h = cy(m), g = e.getCategory() !== h, b = Gm(e, m);
  if (b) {
    const C = Jm(
      e,
      b.before,
      b.after,
      h,
      s
    );
    if (!C || yn(C) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const $ = na(l, t, n);
    return $ ? (Ks(C, $), {
      rebuilt: void 0,
      contentNodes: d,
      category: h,
      categoryChanged: !1,
      closedAs: C
    }) : void 0;
  }
  const k = Hm(e, m, h, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = k.children;
  if (yn(_) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const M = na(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ar(_, o) === Mr(d, o) && Bs(d, _, o)) {
    if (g)
      return { rebuilt: void 0, contentNodes: d, category: h, categoryChanged: g };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Ks(_, M), { rebuilt: _, contentNodes: d, category: h, categoryChanged: g };
}
function _p(e) {
  return e.$?.textType;
}
function RN(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && _p(e) === _p(t);
}
function qN(e) {
  const t = [];
  for (const r of e) {
    const n = ne(r);
    n?.isAttached() && Ke(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function $N(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (Hr(e)) return;
  const n = Vm.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function vp(e, t) {
  const r = e;
  r.marker = t, r.text = Zm(t, r.markerSyntax, r.nested);
}
function IN(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Pe.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && vp(a.node, s);
  const c = n.getChildren().filter(O).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && vp(l.node, s);
}
function LN(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: d } = Vu(e, a, o);
  if (d.length === 0 && s.length === 0 || !Aa(l, s, a, o)) return;
  const u = i ? qa(l, i) : l.text, f = uy(u, a);
  if (Xr(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = Ym(
    e,
    f.lineContent,
    f.followingBlocks,
    o
  );
  if (p.failure !== void 0) {
    p.failure === "shape" && c?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: m, followingBlocks: h } = p;
  if (yn([...m, ...h]) !== l.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const g = na(l, t, n);
  if (!g) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (h.length === s.length && Ar(h, a) === Mr(s, a) && Bs(s, h, a) && Ar(m, a) === Mr(d, a) && Bs(d, m, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const b = Ks(m, g);
  Ks(h, g, b);
  const k = gb([...d, ...s]), _ = sd([...m, ...h]);
  for (let M = 0; M < k.length && M < _.length; M++)
    k[M].sid !== void 0 && _[M].number === k[M].number && (_[M].sid = k[M].sid);
  return { rebuilt: m, contentNodes: d, followingBlocks: h };
}
function DN(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = hy(e, i, n);
  if (!o) return;
  const a = r ? qa(o, r) : o.text, c = gy(a, i);
  if (Xr(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  const l = c.find(
    (m) => typeof m == "object" && m.type === "chapter"
  );
  l && e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = dr.serializeEditorState(
    { type: cr, version: ar, content: c },
    n
  ).root.children, [u] = c;
  if (typeof u != "object" || u.type !== "chapter") return d;
  const f = [e, ...Bi(e)];
  if (!(e.getNumber() !== (u.number ?? "") || e.getAltnumber() !== u.altnumber || e.getPubnumber() !== u.pubnumber) && Ar(d, i) === Mr(f, i) && Bs(f, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function UN(e, t, r, n, i) {
  const s = NN(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (k) => {
    K(k) ? c.set(k.getKey(), k) : we(k) ? l.set(k.getKey(), k) : Te(k) ? d.set(k.getKey(), k) : o.set(k.getKey(), [k]);
  };
  for (const k of t) {
    const _ = ne(k);
    if (!_?.isAttached()) continue;
    const M = Fs(_);
    if (M) {
      if (p(M), O(_)) {
        const C = nb(_, r.getMarker);
        C && a.push(C);
      }
      if (K(M)) {
        const C = $N(_);
        C && f.set(M.getKey(), C);
      }
    }
  }
  const m = /* @__PURE__ */ new Set();
  for (const [k, _] of a)
    m.has(k.getKey()) || m.has(_.getKey()) || ([k, _].forEach((M) => {
      m.add(M.getKey()), o.delete(M.getKey());
    }), Te(k) ? (d.set(k.getKey(), k), u.set(k.getKey(), [_])) : o.set(k.getKey(), [k, _]));
  if (s) {
    const k = Fs(s.node);
    k && !m.has(k.getKey()) && p(k);
  }
  const h = qN(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && d.size === 0 && h.length === 0)
    return;
  const g = new Set(h.map((k) => k.getKey())), b = /* @__PURE__ */ new Map();
  fb(De().getChildren(), e.root.children, b);
  for (const k of f.values()) IN(k, b);
  for (const k of c.values()) {
    const _ = b.get(k.getKey()), M = _ ? Er(_.node) : void 0;
    if (!_ || !M) continue;
    const C = ON(k, b, r, g, s);
    if (!C) continue;
    if (C.closedAs) {
      const z = _.siblings.indexOf(_.node);
      if (z < 0) continue;
      const [v, ...V] = C.closedAs, H = _.node;
      for (const fe of Object.keys(H)) Reflect.deleteProperty(H, fe);
      Object.assign(H, v), _.siblings.splice(z + 1, 0, ...V);
      continue;
    }
    if (C.categoryChanged) {
      const z = _.node;
      C.category === void 0 ? delete z.category : z.category = C.category;
    }
    if (!C.rebuilt) continue;
    const $ = b.get(C.contentNodes[0].getKey());
    if (!$) continue;
    const w = M.indexOf($.node);
    w < 0 || M.splice(w, C.contentNodes.length, ...C.rebuilt);
  }
  for (const k of o.values()) {
    const _ = b.get(k[0].getKey());
    if (!_) continue;
    const M = wN(k, b, r, g, s);
    if (!M) continue;
    const C = _.siblings.indexOf(_.node);
    C < 0 || _.siblings.splice(C, k.length, ...M);
  }
  for (const k of d.values()) {
    const _ = b.get(k.getKey()), M = _ ? Er(_.node) : void 0;
    if (!_ || !M) continue;
    const C = u.get(k.getKey()) ?? [], $ = LN(k, b, r, g, s, C);
    if (!$) continue;
    const w = $.contentNodes.at(0), z = w ? b.get(w.getKey()) : void 0;
    if (w && !z) continue;
    const v = z ? M.indexOf(z.node) : M.length, V = _.siblings.indexOf(_.node);
    v < 0 || V < 0 || (M.splice(v, $.contentNodes.length, ...$.rebuilt), _.siblings.splice(V + 1, C.length, ...$.followingBlocks));
  }
  for (const k of l.values()) {
    const _ = b.get(k.getKey());
    if (!_) continue;
    const M = 1 + Bi(k).length, C = DN(k, r, s);
    if (!C) continue;
    const $ = _.siblings.indexOf(_.node);
    $ < 0 || _.siblings.splice($, M, ...C);
  }
  for (const k of h) {
    const _ = b.get(k.getKey());
    if (!_) continue;
    const M = _.siblings.indexOf(_.node);
    if (M < 0) continue;
    _.siblings.splice(M, 1);
    const C = _.siblings[M - 1], $ = _.siblings[M], w = C && Ki(C), z = $ && Ki($);
    C && $ && w !== void 0 && z !== void 0 && RN(C, $) && (C.text = w + z, _.siblings.splice(M, 1));
  }
  return Nm(e, r.viewOptions);
}
function FN({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = _n(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return B(() => {
    if (n)
      return r.registerNodeTransform(
        ct,
        (i) => zN(i, t)
      );
  }, [r, n, t]), null;
}
function zN(e, t) {
  e.getMarker() !== Lt && (e.isEmpty() || Nt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Lt}" (key ${e.getKey()})`
  ), e.setMarker(Lt)));
}
function KN({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ae(), n = Y({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return B(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, ia(s, e) || BN(i, r, e);
  }, [r, e, t]), B(
    () => r.registerMutationListener(
      Ft,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Cl(r);
        Sp(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: xo(s) === xo(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), B(() => {
    const i = (a) => a.read(
      () => new Set(
        De().getChildren().filter(Ge).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (Cl(r) || Sp(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: xo(a) === xo(c)
      }));
    };
    return Oe(
      ...[jt, wr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), B(
    () => r.registerCommand(
      Dt,
      () => {
        const i = n.current;
        return i.phase === "idle" && HN(i, mb()), !1;
      },
      bt
    ),
    [r]
  ), B(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Dt, void 0));
    };
    return Oe(
      r.registerMutationListener(wt, i),
      r.registerMutationListener(kt, i)
    );
  }, [r]), B(() => {
    const i = () => XN(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function BN(e, t, r) {
  if (jN(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Cl(t);
  (!n || n === r.book) && t.update(() => yb(t, r.chapterNum, r.verseNum), {
    tag: Mt
  });
}
function jN(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ia(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function mb() {
  const e = N(), t = Jh(e);
  if (!t) return;
  const r = od(), n = oT(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = uu(t, e), { verseNum: o, verse: a } = e_(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Cl(e) {
  return e.getEditorState().read(() => od()?.getCode() || void 0);
}
function od() {
  return De().getChildren().find(Te);
}
function Sp(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && _c(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || _c(e, t), e.phase = "navigating") : i && _c(e, t), r && r !== e.scrRef.book && xb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function _c(e, t) {
  queueMicrotask(() => {
    t.update(
      () => yb(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Mt }
    );
  });
}
function yb(e, t, r) {
  const n = N()?.clone();
  VN(t, r);
  const i = N();
  i && !(n && i.is(n)) && Dr(e, Mt);
}
function VN(e, t) {
  const r = mb();
  if (r?.chapterNum === e && (r.verse ? kb(t, r.verse) : r.verseNum === t))
    return;
  const n = De().getChildren(), i = Kh(n, e);
  if (!i) return;
  const s = fT(n, i), o = sT(s, !0);
  dT(s, o);
  let a;
  try {
    a = GC(s, t);
  } catch {
    return;
  }
  a && (le(a) ? !E(a.getFirstChild()) && Zi(a) || Zt(a, 0) : WN(a));
}
function WN(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || me(n)) {
    E(e) ? e.selectEnd() : Zt(t, r);
    return;
  }
  const i = Zs(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    e.selectEnd();
    return;
  }
  const s = I(n) && !K(n) ? bb(n) : void 0;
  s ? s.select(0, 0) : Zt(t, r);
}
function bb(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (I(t) && !K(t)) return bb(t);
}
function xo(e) {
  return e.read(() => {
    const t = De().getChildren().find(Ge);
    return `${od()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function HN(e, t) {
  e.phase !== "navigating" && t && (GN(t, e.scrRef) || xb(e, JN(t, e.scrRef)));
}
function GN(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? kb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function kb(e, t) {
  try {
    return Hl(e, t);
  } catch {
    return !1;
  }
}
function JN(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const YN = 8;
function xb(e, t) {
  return ia(t, e.scrRef) || e.pendingEchoes.some((r) => ia(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > YN && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ia(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function XN(e) {
  e.phase = "idle";
}
function QN(e) {
  return Te(e) ? `${e.__code}` : we(e) ? `${e.__marker} "${e.__number}"` : F(e) ? `${e.__marker}` : Hs(e) ? `${e.__marker} "${e.__number}"` : mt(e) ? `${e.__caller}` : oi(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : le(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${ZN(e)}` : Ce(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : $e(e) ? `${e.__marker} "${e.__number}"` : "";
}
function ZN(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ws]) : "";
}
function e0() {
  const [e] = ae();
  return /* @__PURE__ */ A(
    Pk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: QN,
      editor: e
    }
  );
}
const Tb = $p(null), Mp = 4;
function t0({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Y(null), s = Ip(Tb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return B(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ A("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function r0({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = he(), [s, o] = he(), a = ye(
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
  }, l = We(() => ({ registerItem: a }), [a]);
  return B(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ A(Tb.Provider, { value: l, children: /* @__PURE__ */ A("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function n0({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Y(null), c = Y(null), [l, d] = he(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return B(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: h } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + Mp}px`, p.style.left = `${Math.min(h, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), B(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (m) => {
        const h = m.target;
        o && a.current && a.current.contains(h) || f.contains(h) || d(!1);
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
        const p = c.current, m = a.current;
        if (p !== null && m !== null) {
          const { top: h } = p.getBoundingClientRect(), g = h + p.offsetHeight + Mp;
          g !== m.getBoundingClientRect().top && (m.style.top = `${g}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Ee(Un, { children: [
    /* @__PURE__ */ Ee(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => d(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ A("span", { className: i }),
          t && /* @__PURE__ */ A("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ A("i", { className: "chevron-down" })
        ]
      }
    ),
    l && Dn(
      /* @__PURE__ */ A(r0, { dropDownRef: a, onClose: u, children: s }),
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
function i0({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ A(
    n0,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + s0(t),
      buttonLabel: o0(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(_l).map((n) => /* @__PURE__ */ Ee(
        t0,
        {
          className: "item block-marker " + a0(t === n),
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
function s0(e) {
  return e && e in vl ? e : "ban";
}
function o0(e) {
  return e && e in vl ? vl[e] : "No Style";
}
function a0(e) {
  return e ? "active dropdown-item-active" : "";
}
function Ep() {
  return /* @__PURE__ */ A("div", { className: "divider" });
}
const c0 = xn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ae(), [o, a] = he(s), [c, l] = he(), [d, u] = he(!1), [f, p] = he(!1), m = ye(
    ({
      canUndo: h,
      canRedo: g,
      blockMarker: b,
      contextMarker: k
    }) => {
      u(h), p(g), l(b), n?.({
        canUndo: h,
        canRedo: g,
        blockMarker: b,
        contextMarker: k
      });
    },
    [n]
  );
  return B(() => s.registerCommand(
    Dt,
    (h, g) => (a(g), !1),
    ke
  ), [s]), /* @__PURE__ */ Ee(Un, { children: [
    /* @__PURE__ */ A(bm, { onStateChange: m }),
    /* @__PURE__ */ Ee("div", { className: "toolbar", children: [
      /* @__PURE__ */ A(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(Xp, void 0);
          },
          title: wi ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
          title: wi ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ A("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ A(Ep, {}),
      o === s && /* @__PURE__ */ Ee(Un, { children: [
        /* @__PURE__ */ A(
          i0,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ A(Ep, {})
      ] }),
      /* @__PURE__ */ A("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), l0 = Li(), u0 = {}, d0 = {};
function f0() {
  return /* @__PURE__ */ A("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function vc(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function Ap(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = I(n) ? n.getLastDescendant() ?? n : n;
  return Ca(r, i);
}
function Pp(e, t, r) {
  Ok(e, () => Vn(t));
  const n = N();
  if (!P(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    le(o) && i.add(o);
  }), i.forEach((s) => Yy(s, t, r));
}
const Cb = xn(function({
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
  const u = Y(null), f = Y(null), p = Y(null), m = Y(null), h = Y(t), g = Y(void 0), b = Y(void 0), k = Y(void 0), _ = Y(void 0), M = Y(!1), [C, $] = he(t), [w, z] = he(0), [v, V] = he(), {
    isReadonly: H = !1,
    structureProtectionMode: fe = "off",
    hasExternalUI: Q = !1,
    hasSpellCheck: Ue = !1,
    textDirection: _e = "ltr",
    markerMenuTrigger: hr = "\\",
    view: Ve,
    nodes: Qr,
    debug: Zr = !1,
    contextMenu: vn,
    styleInfo: ee,
    markerSettleDelayMs: R,
    copyLimit: te
  } = a ?? d0, ce = Ve ?? l0, Ne = qs(ce) && (ce.markerMode !== "hidden" || !ce.hasSpacing || ce.hasGutterParaMarkers || ce.hasActiveTextFocusBox) ? {
    ...ce,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ce, lt = Y(Ne);
  It(lt.current, Ne) || (lt.current = Ne);
  const Z = lt.current, Ye = We(() => Qr ?? u0, [Qr]), gr = We(() => vn, [vn]), es = We(
    () => au(ee ?? $i),
    [ee]
  ), en = Y(c);
  It(en.current, c) || (en.current = c);
  const ie = en.current, pt = qs(Z), pe = H || pt, ai = Ne !== ce;
  B(() => {
    pt && !H && ie?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), ai && ie?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), Z?.markerMode === "visible" && !H && ie?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [pt, H, ai, ie, Z?.markerMode]);
  const ve = Y(null), Sn = We(() => {
    if (Z.markerMode !== "editable") return;
    const q = ee ?? $i;
    return {
      getContext: () => ve.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (L) => R1(
        q,
        L,
        Ye.extraValidMarkers
      ),
      getEnterItems: (L) => q1(
        q,
        L,
        Ye.extraValidMarkers
      ),
      apply: (L, W) => {
        const G = ve.current;
        G && (W.trigger === "enter" ? G.splitParagraphWithMarker(L.marker) : G.applyMarkerMenuSelection(L, W));
      },
      commitTypedCloser: (L) => {
        ve.current?.commitTypedCloser(L);
      }
    };
  }, [Z, ee, Ye.extraValidMarkers]), ci = (q) => {
    M.current || (M.current = !0, en.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, er = (q) => {
    if (pt)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, tn = (q) => {
    if (er(q), pe) throw new Error(`Cannot ${q} in readonly mode`);
  }, rn = () => !!u.current && um(u.current), no = We(
    () => ({
      namespace: "platformEditor",
      theme: { ...Vy, showCharMarkerTitles: Z.showCharMarkerTitles },
      editable: !pe,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [ot, ...pt ? ov : Tu]
    }),
    [pe, pt, Z.showCharMarkerTitles]
  );
  _o.initialize(ie);
  function nn(q) {
    if (q !== void 0 && !WP(q, Ye.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const Rt = ye(() => {
    const q = u.current;
    if (!q) return h.current;
    const L = jd(q), W = b.current;
    if ((!L || L.size === 0) && !W) return h.current;
    const G = q.getEditorState(), de = G.toJSON();
    return G.read(
      () => UN(
        de,
        L ?? /* @__PURE__ */ new Set(),
        { viewOptions: Z, getMarker: es, logger: ie },
        W,
        k.current
      )
    ) ?? h.current;
  }, [Z, es, ie]);
  function tr(q, L, W) {
    if (pt && L === "remote") {
      en.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    er("apply an update");
    const G = rn(), de = !G && u.current ? Dr(u.current, $r) : void 0;
    u.current?.update(
      () => {
        L === "remote" && vt(vs), G || vt($r), W && vt(W), Rv(q, Z, Ye, ie);
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
          de?.(), !G && u.current && lc(u.current);
          const Xe = u.current?.getEditorState();
          if (!Xe) return;
          const Re = _o.deserializeEditorState(Xe, Z);
          if (Re) {
            const Qe = !It(h.current, Re);
            if (Qe && (h.current = Re), Qe || !It(C, Re)) {
              const qt = tf(q, Xe, "apply");
              _.current = Re, s?.(Re, q, L, qt);
            }
          }
        }
      }
    );
  }
  const mr = {
    focus() {
      u.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return rn();
    },
    undo() {
      u.current?.dispatchCommand(Xp, void 0);
    },
    redo() {
      u.current?.dispatchCommand(Qp, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      tn("cut"), u.current && Ru(u.current);
    },
    copy() {
      u.current && Ou(u.current);
    },
    paste() {
      tn("paste"), u.current && qu(u.current);
    },
    pastePlainText() {
      tn("paste as plain text"), u.current && $u(u.current);
    },
    getUsj() {
      return Rt();
    },
    commitPendingMarkerEdits() {
      const q = u.current;
      if (!q) return;
      const L = !rn(), W = L ? Dr(q, $r) : void 0;
      q.update(
        () => {
          L && vt($r), q.dispatchCommand(ub, void 0);
        },
        { discrete: !0 }
      ), W?.(), L && lc(q);
    },
    setTransientInput(q) {
      if (!q) {
        b.current = void 0;
        return;
      }
      const L = u.current?.getEditorState().read(() => {
        const W = N();
        return P(W) && W.isCollapsed() ? W.focus.key : void 0;
      });
      b.current = { input: q, nodeKey: L ?? k.current?.key };
    },
    setUsj(q, L) {
      const W = It(h.current, q) || It(Rt(), q);
      if (L?.force || !W) {
        h.current = q, b.current = void 0;
        const G = It(C, q);
        $(q), G && z((de) => de + 1);
      }
    },
    applyUpdate(q, L = "remote") {
      tr(q, L);
    },
    replaceEmbedUpdate(q, L) {
      const W = u.current?.read(() => f_(q, L));
      W ? this.applyUpdate(W) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (pt) {
        ci("get the selection");
        return;
      }
      return u.current?.read(mu);
    },
    setSelection(q) {
      if (pt) {
        ci("set the selection");
        return;
      }
      u.current?.update(() => {
        const L = va(q);
        L !== void 0 && (Ur(L), vt(ch));
      });
    },
    setAnnotation(q, L, W, G, de) {
      if (pt) {
        ci("set an annotation");
        return;
      }
      let Xe, Re, Qe, qt;
      typeof G == "function" || G === void 0 ? (Xe = G, Re = de) : (Xe = G.onClick, Re = G.onRemove, Qe = G.onMouseEnter, qt = G.onMouseLeave), f.current?.setAnnotation(
        q,
        Rd(L),
        W,
        Xe,
        Re,
        Qe,
        qt
      );
    },
    removeAnnotation(q, L) {
      f.current?.removeAnnotation(Rd(q), L);
    },
    formatPara(q) {
      tn("format a paragraph"), u.current?.update(
        () => {
          const L = N();
          if (!P(L)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${q}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const W = L.isBackward() ? L.focus : L.anchor, G = Ae(W.getNode(), Te);
          if (G) {
            const de = L.isBackward() ? L.anchor : L.focus, Re = !L.isCollapsed() && !G.is(de.getNode()) && !G.isParentOf(de.getNode()) ? { key: de.key, offset: de.offset, type: de.type } : void 0, Qe = zn();
            if (Qe.anchor.set(W.key, W.offset, W.type), Qe.focus.set(W.key, W.offset, W.type), Ur(Qe), !xl(q, Z)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${q}"`
              );
              return;
            }
            if (!Re) return;
            const qt = ne(Re.key);
            if (!qt?.isAttached()) return;
            const En = qt.getTopLevelElement();
            if (!En) return;
            const qr = G.getNextSibling();
            if (!le(qr)) return;
            let rt = qr.getNextSibling();
            for (; rt; ) {
              const rs = rt.is(En), io = rt.getNextSibling();
              if (le(rt)) {
                const An = zn();
                An.anchor.set(rt.getKey(), 0, "element"), An.focus.set(rt.getKey(), rt.getChildrenSize(), "element"), Ur(An), Pp(An, q, Z);
              }
              if (rs) break;
              rt = io;
            }
            return;
          }
          Pp(L, q, Z);
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
      if (pe) throw new Error("Cannot remove character marker in readonly mode");
      nn(q);
      let L = !1;
      return u.current?.update(
        () => {
          const W = N();
          P(W) && (L = Uy(W, q, Z));
        },
        { discrete: !0 }
      ), L;
    },
    replaceCharacterMarker(q, L) {
      if (pe) throw new Error("Cannot replace character marker in readonly mode");
      nn(q), nn(L);
      let W = !1;
      return u.current?.update(
        () => {
          const G = N();
          P(G) && (W = i1(G, q, L));
        },
        { discrete: !0 }
      ), W;
    },
    extendCharacterMarker(q, L) {
      if (pe) throw new Error("Cannot extend character marker in readonly mode");
      nn(q), L?.forEach(
        (G) => nn(G)
      );
      let W = !1;
      return u.current?.update(
        () => {
          const G = N();
          P(G) && (W = s1(
            G,
            q,
            L,
            Z
          ));
        },
        { discrete: !0 }
      ), W;
    },
    insertMarker(q) {
      if (pe) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!fl(q, Ye.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const L = pl(
        q,
        g,
        Z,
        Ye,
        ie,
        void 0,
        ee
      );
      return L.action({ editor: u.current, reference: r }), L.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!H)
        return u.current?.getEditorState().read(() => j1());
    },
    applyMarkerMenuSelection(q, L) {
      if (H) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (q.kind !== "closeTag" && !fl(q.marker, Ye.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let W;
      return u.current.update(() => {
        W = Z1(q, L, r, {
          expandedNoteKeyRef: g,
          viewOptions: Z,
          nodeOptions: Ye,
          logger: c,
          styleInfo: ee
        });
      }), W;
    },
    splitParagraphWithMarker(q) {
      if (H) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        xl(q, Z);
      });
    },
    commitTypedMarker(q, L) {
      if (H) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let W = !1;
      return u.current.update(() => {
        W = X1(q, L), W || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), W;
    },
    commitTypedCloser(q) {
      if (H) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let L = !1;
      return u.current.update(() => {
        L = rb(q), L || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), L;
    },
    insertNote(q, L, W) {
      tn("insert a note"), u.current?.update(
        () => {
          const G = Lg(
            q,
            L,
            W,
            r,
            Z,
            Ye,
            ie
          );
          vc(G, g);
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      u.current?.update(() => {
        const L = xr(q);
        L && (Vc(L, Z), vc(L, g));
      });
    },
    selectAfterNote(q) {
      const L = u.current;
      if (!L) return;
      const W = !rn(), G = W ? Dr(L, $r) : void 0;
      if (L.update(
        () => {
          W && vt($r);
          const de = xr(q);
          de && Ug(de);
        },
        { discrete: !0 }
      ), G?.(), W) {
        lc(L);
        const de = Dr(
          L,
          $r
        );
        L.update(
          () => {
            vt($r), L.dispatchCommand(Dt, void 0);
          },
          { discrete: !0 }
        ), de();
      }
    },
    selectNoteTextOffset(q, L, W) {
      u.current?.update(() => {
        const G = xr(q);
        if (!G) return;
        const de = W?.glyph;
        (W?.field === "category" ? tv(G, L, de) || cf(G, 0) : cf(G, L, de)) || Vc(G, Z), vc(G, g);
      });
    },
    getNoteOps(q) {
      const L = u.current;
      return L ? xi(L, () => {
        const W = xr(q);
        if (W)
          return Ca(W);
      }) : void 0;
    },
    getOpsAfterNote(q) {
      const L = u.current;
      return L ? xi(L, () => {
        const W = xr(q);
        return W ? Ap(W) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(q) {
      const L = u.current, W = L ? xi(L, () => {
        const Re = xr(q);
        if (!Re) return;
        const Qe = fu(Re, "apply");
        return { ops: Ap(Re), notePosition: Qe };
      }) : void 0;
      if (!W) return;
      const { ops: G, notePosition: de } = W;
      if (G.length === 0 || de === void 0) return G;
      const Xe = G.reduce(
        (Re, Qe) => Re + (typeof Qe.insert == "string" ? Qe.insert.length : 1),
        0
      );
      return tr([{ retain: de + 1 }, { delete: Xe }], "remote", Al), G;
    },
    getNoteIndex(q) {
      const L = u.current;
      return L ? xi(L, () => hu(q)) : void 0;
    },
    getNoteKey(q) {
      const L = u.current;
      return L ? xi(L, () => xr(q)?.getKey()) : void 0;
    },
    highlightNote(q) {
      p.current?.setHighlightedNote(q);
    },
    get toolbarEndRef() {
      return m;
    }
  };
  ve.current = mr, oa(d, () => mr), B(() => {
    const q = u.current;
    if (q)
      return q.registerUpdateListener(({ editorState: L }) => {
        L.read(() => {
          const W = N();
          if (!P(W) || !W.isCollapsed()) return;
          const G = W.focus.getNode();
          E(G) && (k.current = { key: G.getKey(), offset: W.focus.offset });
        });
      });
  }, []);
  const ts = ye(
    (q, L, W, G, de) => {
      if (pt) return;
      const Xe = _o.deserializeEditorState(q, Z);
      if (Xe) {
        const Re = !It(h.current, Xe);
        if (Re && (h.current = Xe), Re || !It(C, Xe)) {
          const Qe = tf(G, q), qt = Qe && !de.read(() => ne(Qe)) ? Qe : void 0;
          _.current = Xe, s?.(Xe, G, "local", qt);
        }
      }
    },
    [C, s, Z, pt]
  );
  B(() => {
    const q = u.current;
    if (!(!q || !s))
      return q.registerUpdateListener(({ tags: L, dirtyElements: W, dirtyLeaves: G }) => {
        !L.has(Ol) && (W.size === 0 && G.size === 0 || L.has(vs) || !jd(q)?.size) || queueMicrotask(() => {
          const de = Rt();
          !de || It(_.current, de) || (_.current = de, s(de, void 0, "local", void 0));
        });
      });
  }, [s, Rt]);
  const Mn = ye(
    (q) => {
      V(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Ee(eh, { initialConfig: no, children: [
      /* @__PURE__ */ A(zS, { isEditable: !pe }),
      /* @__PURE__ */ Ee("div", { className: "editor-container", children: [
        Q ? /* @__PURE__ */ A(bm, { onStateChange: Mn }) : /* @__PURE__ */ A(
          "div",
          {
            className: "editor-toolbar-container" + (pe ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ A(
              c0,
              {
                ref: m,
                editorRef: ve,
                isReadonly: pe,
                onStateChange: Mn
              }
            )
          }
        ),
        /* @__PURE__ */ Ee("div", { className: "editor-inner", children: [
          /* @__PURE__ */ A(rh, { editorRef: u }),
          /* @__PURE__ */ A(
            wk,
            {
              contentEditable: /* @__PURE__ */ A(
                th,
                {
                  className: `editor-input usfm ${Ov(Z).join(" ")}${Z.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${Z.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Ue
                }
              ),
              placeholder: /* @__PURE__ */ A(f0, {}),
              ErrorBoundary: nh
            }
          ),
          Q && /* @__PURE__ */ A(FS, {}),
          /* @__PURE__ */ A(ih, {}),
          r && n && /* @__PURE__ */ A(KN, { scrRef: r, onScrRefChange: n }),
          r && !Q && /* @__PURE__ */ A(
            yE,
            {
              trigger: hr,
              scrRef: r,
              contextMarker: v,
              getMarkerAction: (q) => pl(
                q,
                g,
                Z,
                Ye,
                ie,
                void 0,
                ee
              ),
              editableHarness: Sn
            }
          ),
          /* @__PURE__ */ A(
            WS,
            {
              scripture: C,
              scriptureRef: h,
              nodeOptions: Ye,
              editorAdaptor: dr,
              viewOptions: Z,
              logger: ie
            },
            w
          ),
          /* @__PURE__ */ A(hM, { onChange: i }),
          /* @__PURE__ */ A(
            Mv,
            {
              onChange: ts,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Zk
            }
          ),
          /* @__PURE__ */ A(u1, { viewOptions: Z }),
          /* @__PURE__ */ A(vv, { ref: f, logger: ie }),
          /* @__PURE__ */ A(cS, { viewOptions: Z }),
          /* @__PURE__ */ A(CS, {}),
          /* @__PURE__ */ A(AS, {}),
          Z?.markerMode !== "editable" && /* @__PURE__ */ A(PS, { logger: ie }),
          /* @__PURE__ */ A(qS, { options: gr }),
          /* @__PURE__ */ A(y1, { limit: te, viewOptions: Z }),
          /* @__PURE__ */ A(US, {}),
          /* @__PURE__ */ A(BS, {}),
          /* @__PURE__ */ A(VS, {}),
          /* @__PURE__ */ A(eN, {}),
          /* @__PURE__ */ A(
            _N,
            {
              viewOptions: Z,
              getMarker: es,
              logger: ie,
              markerSettleDelayMs: R,
              structureProtectionMode: fe,
              copyLimit: te
            }
          ),
          Z?.markerMode === "visible" && /* @__PURE__ */ A(m1, { viewOptions: Z, copyLimit: te }),
          /* @__PURE__ */ A(
            PN,
            {
              styleInfo: ee,
              viewOptions: Z,
              logger: ie
            }
          ),
          /* @__PURE__ */ A(HS, { ref: p }),
          /* @__PURE__ */ A(
            GS,
            {
              expandedNoteKeyRef: g,
              nodeOptions: Ye,
              viewOptions: Z,
              logger: ie
            }
          ),
          /* @__PURE__ */ A(pM, {}),
          /* @__PURE__ */ A(nS, {}),
          /* @__PURE__ */ A(Zv, {}),
          /* @__PURE__ */ A(FN, { viewOptions: Z, logger: ie }),
          /* @__PURE__ */ A(gM, {}),
          /* @__PURE__ */ A(eE, { structureProtectionMode: fe }),
          /* @__PURE__ */ A(tE, { textDirection: _e }),
          /* @__PURE__ */ A(nE, {}),
          /* @__PURE__ */ A(gE, {}),
          l
        ] }),
        Zr && /* @__PURE__ */ A(e0, {})
      ] })
    ] }, Z.verseLayout ?? "inline")
  );
}), Tw = xn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ A(Cb, { ref: r, ...i });
});
function _b() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function sa(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? _b() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function vb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? _b() : r,
    quote: e,
    type: "thread"
  };
}
function Np(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function p0(e) {
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
class h0 {
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
          const c = Np(a);
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
          const c = Np(a);
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
      markedComment: p0(t)
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
    return t !== null ? t.doc.get("comments", xd) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Td(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new xd();
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
      Hk,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      bt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Gk) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const m = p.insert, h = p.retain, g = p.delete, b = d.parent, k = d === r ? void 0 : b instanceof Td && this._comments.find((_) => _.id === b.get("id"));
              if (Array.isArray(m)) {
                const _ = f;
                m.slice().reverse().forEach((M) => {
                  const C = M.get("id"), w = M.get("type") === "thread" ? vb(
                    M.get("quote"),
                    M.get("comments").toArray().map(
                      (z) => sa(
                        z.get("content"),
                        z.get("author"),
                        z.get("id"),
                        z.get("timeStamp"),
                        z.get("deleted")
                      )
                    ),
                    C
                  ) : sa(
                    M.get("content"),
                    M.get("author"),
                    C,
                    M.get("timeStamp"),
                    M.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(w, k, _);
                  });
                });
              } else if (typeof h == "number")
                f += h;
              else if (typeof g == "number")
                for (let _ = 0; _ < g; _++) {
                  const M = k === void 0 || k === !1 ? this._comments[f] : k.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(M, k);
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
function g0(e) {
  const [t, r] = he(e.getComments());
  return B(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function m0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Y(null);
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
  }, [n, e]), /* @__PURE__ */ A("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Ee("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function y0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Dn(
    /* @__PURE__ */ A(m0, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Sb() {
  const [e, t] = he(null), r = ye(() => {
    t(null);
  }, []), n = We(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ A(y0, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = ye(
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
const b0 = {
  ...Vy,
  paragraph: "CommentEditorTheme__paragraph"
};
function k0(...e) {
  return e.filter(Boolean).join(" ");
}
function kn({
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
      className: k0(
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
function x0({
  className: e
}) {
  return /* @__PURE__ */ A(th, { className: e || "ContentEditable__root" });
}
function T0({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ A("div", { className: t || "Placeholder__root", children: e });
}
const wp = Yp("INSERT_INLINE_COMMAND");
function C0({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Y(null), s = ye(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return B(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), js(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ A("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ A("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ A("i", { className: "icon add-comment" }) }) });
}
function _0({ onEscape: e }) {
  const [t] = ae();
  return B(() => t.registerCommand(
    Jp,
    (r) => e(r),
    Cr
  ), [t, e]), null;
}
function Mb({
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
    theme: b0
  }, children: /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ A(
      jk,
      {
        contentEditable: /* @__PURE__ */ A(x0, { className: e }),
        placeholder: /* @__PURE__ */ A(T0, { children: s }),
        ErrorBoundary: nh
      }
    ),
    /* @__PURE__ */ A(Bk, { onChange: n }),
    /* @__PURE__ */ A(ih, {}),
    t !== !1 && /* @__PURE__ */ A(Fk, {}),
    /* @__PURE__ */ A(_0, { onEscape: r }),
    /* @__PURE__ */ A(zk, {}),
    i !== void 0 && /* @__PURE__ */ A(rh, { editorRef: i })
  ] }) });
}
function Eb(e, t) {
  return ye(
    (r, n) => {
      r.read(() => {
        e(Vk()), t(!Wk(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function v0({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Y(null), c = We(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Y(null), d = Pb(), u = ye(() => {
    e.getEditorState().read(() => {
      const h = N();
      if (P(h)) {
        l.current = h.clone();
        const g = h.anchor, b = h.focus, k = Rk(
          e,
          g.getNode(),
          g.offset,
          b.getNode(),
          b.offset
        ), _ = a.current;
        if (k !== null && _ !== null) {
          const { left: M, bottom: C, width: $ } = k.getBoundingClientRect(), w = qk(e, k);
          let z = w.length === 1 ? M + $ / 2 - 125 : M - 125;
          z < 10 && (z = 10), _.style.left = `${z}px`, _.style.top = `${C + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const v = w.length, { container: V } = c, H = c.elements, fe = H.length;
          for (let Q = 0; Q < v; Q++) {
            const Ue = w[Q];
            let _e = H[Q];
            _e === void 0 && (_e = document.createElement("span"), H[Q] = _e, V.appendChild(_e));
            const Ve = `position:absolute;top:${Ue.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Ue.left}px;height:${Ue.height}px;width:${Ue.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            _e.style.cssText = Ve;
          }
          for (let Q = fe - 1; Q >= v; Q--) {
            const Ue = H[Q];
            V.removeChild(Ue), H.pop();
          }
        }
      }
    });
  }, [e, c]);
  js(() => {
    u();
    const h = c.container, g = document.body;
    return g !== null ? (g.appendChild(h), () => {
      g.removeChild(h);
    }) : () => {
    };
  }, [c.container, u]), B(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (h) => (h.preventDefault(), t(), !0), p = () => {
    if (s) {
      let h = e.getEditorState().read(() => {
        const g = l.current;
        return g ? g.getTextContent() : "";
      });
      h.length > 100 && (h = h.slice(0, 99) + "…"), r(
        vb(h, [sa(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = Eb(i, o);
  return /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ A(
      Mb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ A(kn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ A(
        kn,
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
function S0({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Y(null), c = Pb(), l = Eb(i, o);
  return /* @__PURE__ */ Ee(Un, { children: [
    /* @__PURE__ */ A(
      Mb,
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
      kn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(sa(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(vk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ A("i", { className: "send" })
      }
    )
  ] });
}
function Ab({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Ee(Un, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Ee("div", { className: "Modal__content", children: [
      /* @__PURE__ */ A(
        kn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ A(
        kn,
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
function Op({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = he(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Sb();
  return /* @__PURE__ */ Ee("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ A("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Ee("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ A("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Ee(Un, { children: [
      /* @__PURE__ */ A(
        kn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ A(
              Ab,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
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
function M0({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = he(0), [l, d] = Sb(), u = We(
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
  }, [a]), /* @__PURE__ */ A("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Ee(
      "li",
      {
        onClick: () => {
          const h = s.get(p);
          if (h !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const g = document.activeElement;
            o.update(
              () => {
                const b = Array.from(h)[0], k = ne(b);
                Ce(k) && k.selectStart();
              },
              {
                onUpdate() {
                  g !== null && g.focus();
                }
              }
            );
          }
        },
        className: `CommentPlugin_CommentsPanel_List_Thread ${s.has(p) ? "interactive" : ""} ${e.indexOf(p) === -1 ? "" : "active"}`,
        children: [
          /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Ee("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ A("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ A(
              kn,
              {
                onClick: () => {
                  d("Delete Thread", (h) => /* @__PURE__ */ A(
                    Ab,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: h
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ A("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ A("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((h) => /* @__PURE__ */ A(
            Op,
            {
              comment: h,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            h.id
          )) }),
          /* @__PURE__ */ A("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ A(
            S0,
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
      Op,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function E0({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Y(null), o = r.length === 0;
  return /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ A("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ A("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ A(
      M0,
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
function Pb() {
  const e = sh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function A0({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = sh(), [a] = ae(), c = We(() => {
    const z = new h0(a, s);
    return r && z.registerOnChange(r), t?.(z), z;
  }, [a, s, r, t]), l = g0(c), d = We(() => /* @__PURE__ */ new Map(), []), [u, f] = he(), [p, m] = he([]), [h, g] = he(!1), [b, k] = he(!1), { yjsDocMap: _ } = o;
  B(() => {
    if (e) {
      const z = e("comments", _);
      return c.registerCollaboration(z);
    }
    return () => {
    };
  }, [c, e, _]);
  const M = ye(() => {
    a.update(() => {
      const z = N();
      z !== null && (z.dirty = !0);
    }), g(!1);
  }, [a]), C = ye(
    (z, v) => {
      if (z.type === "comment") {
        const V = c.deleteCommentOrThread(z, v);
        if (!V)
          return;
        const { markedComment: H, index: fe } = V;
        c.addComment(H, v, fe);
      } else {
        c.deleteCommentOrThread(z);
        const V = v !== void 0 ? v.id : z.id, H = d.get(V);
        H !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const fe of H) {
              const Q = ne(fe);
              Ce(Q) && (Q.deleteID(dn, V), Q.hasNoIDsForEveryType() && wo(Q));
            }
          });
        });
      }
    },
    [c, a, d]
  ), $ = ye(
    (z, v, V, H) => {
      c.addComment(z, V), v && (a.update(() => {
        P(H) && Ch(H, dn, z.id);
      }), g(!1));
    },
    [c, a]
  );
  B(() => {
    const z = [];
    let v;
    for (const V of p) {
      const H = d.get(V);
      if (H !== void 0)
        for (const fe of H) {
          const Q = a.getElementByKey(fe);
          Q !== null && (Q.classList.add("selected"), z.push(Q), v = window.setTimeout(() => {
            k(!0);
          }, 0));
        }
    }
    return () => {
      v !== void 0 && window.clearTimeout(v);
      for (const V of z)
        V.classList.remove("selected");
    };
  }, [p, a, d]), B(() => {
    if (!a.hasNodes([ot]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const z = /* @__PURE__ */ new Map();
    return Oe(
      Zp(
        a,
        ot,
        (v) => Ms(v.getTypedIDs()),
        (v, V) => {
          for (const [H, fe] of Object.entries(v.getTypedIDs()))
            fe.forEach((Q) => {
              V.addID(H, Q);
            });
        }
      ),
      a.registerMutationListener(
        ot,
        (v) => {
          a.getEditorState().read(() => {
            for (const [V, H] of v) {
              const fe = ne(V);
              let Q = [];
              H === "destroyed" ? Q = z.get(V) ?? [] : Ce(fe) && (Q = fe.getTypedIDs()[dn] ?? []);
              for (const Ue of Q) {
                let _e = d.get(Ue);
                z.set(V, Q), H === "destroyed" ? _e !== void 0 && (_e.delete(V), _e.size === 0 && d.delete(Ue)) : (_e === void 0 && (_e = /* @__PURE__ */ new Set(), d.set(Ue, _e)), _e.has(V) || _e.add(V));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: v, tags: V }) => {
        v.read(() => {
          const H = N();
          let fe = !1, Q = !1;
          if (P(H)) {
            const Ue = H.anchor.getNode();
            if (E(Ue)) {
              const _e = $x(Ue, dn, H.anchor.offset) ?? [];
              _e !== null && (m(_e), fe = !0), H.isCollapsed() || (f(Ue.getKey()), Q = !0);
            }
          }
          fe || m((Ue) => Ue.length === 0 ? Ue : []), Q || f(null), !V.has("collaboration") && P(H) && g(!1);
        });
      }),
      a.registerCommand(
        wp,
        () => {
          const v = window.getSelection();
          return v !== null && v.removeAllRanges(), g(!0), !0;
        },
        Kn
      )
    );
  }, [a, d]);
  const w = () => {
    a.dispatchCommand(wp, void 0);
  };
  return /* @__PURE__ */ Ee(Un, { children: [
    h && Dn(
      /* @__PURE__ */ A(
        v0,
        {
          editor: a,
          cancelAddComment: M,
          submitAddComment: $
        }
      ),
      document.body
    ),
    u != null && !h && Dn(
      /* @__PURE__ */ A(
        C0,
        {
          anchorKey: u,
          editor: a,
          showComments: b,
          onAddComment: w
        }
      ),
      document.body
    ),
    n !== null && Dn(
      /* @__PURE__ */ A(
        kn,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => k(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ A("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && Dn(
      /* @__PURE__ */ A(
        E0,
        {
          comments: l,
          submitAddComment: $,
          deleteCommentOrThread: C,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function P0() {
  const e = Y(void 0), t = ye((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function N0(e, t) {
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
function w0(e, t) {
  B(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      N0(r, t);
    };
  }, [t, e]);
}
const Cw = xn(function(t, r) {
  const n = Y(null), i = Y(!0), s = Y(null), [o, a] = he(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: m, view: h } = {} } = t, g = (m ?? !1) || qs(h), [b, k] = P0();
  w0(f, b), B(() => {
    if (process.env.NODE_ENV !== "production") {
      const C = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(C), p || console.warn(C);
    }
  }, [p]), oa(r, () => ({
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
    setTransientInput(C) {
      n.current?.setTransientInput(C);
    },
    setUsj(C, $) {
      n.current?.setUsj(C, $);
    },
    applyUpdate(C, $) {
      n.current?.applyUpdate(C, $);
    },
    replaceEmbedUpdate(C, $) {
      return n.current?.replaceEmbedUpdate(C, $);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(C) {
      n.current?.setSelection(C);
    },
    setAnnotation(C, $, w, z, v) {
      typeof z == "function" || z === void 0 ? n.current?.setAnnotation(C, $, w, z, v) : n.current?.setAnnotation(C, $, w, z);
    },
    removeAnnotation(C, $) {
      n.current?.removeAnnotation(C, $);
    },
    formatPara(C) {
      n.current?.formatPara(C);
    },
    getElementByKey(C) {
      return n.current?.getElementByKey(C);
    },
    removeCharacterMarker(C) {
      return n.current?.removeCharacterMarker(C) ?? !1;
    },
    replaceCharacterMarker(C, $) {
      return n.current?.replaceCharacterMarker(C, $) ?? !1;
    },
    extendCharacterMarker(C, $) {
      return n.current?.extendCharacterMarker(C, $) ?? !1;
    },
    insertMarker(C) {
      return n.current?.insertMarker(C);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(C, $) {
      return n.current?.applyMarkerMenuSelection(C, $);
    },
    splitParagraphWithMarker(C) {
      n.current?.splitParagraphWithMarker(C);
    },
    commitTypedMarker(C, $) {
      return n.current?.commitTypedMarker(C, $) ?? !1;
    },
    commitTypedCloser(C) {
      return n.current?.commitTypedCloser(C) ?? !1;
    },
    insertNote(C, $, w) {
      n.current?.insertNote(C, $, w);
    },
    selectNote(C) {
      n.current?.selectNote(C);
    },
    selectAfterNote(C) {
      n.current?.selectAfterNote(C);
    },
    selectNoteTextOffset(C, $, w) {
      n.current?.selectNoteTextOffset(C, $, w);
    },
    getNoteOps(C) {
      return n.current?.getNoteOps(C);
    },
    getOpsAfterNote(C) {
      return n.current?.getOpsAfterNote(C);
    },
    takeOpsAfterNote(C) {
      return n.current?.takeOpsAfterNote(C);
    },
    getNoteIndex(C) {
      return n.current?.getNoteIndex(C);
    },
    getNoteKey(C) {
      return n.current?.getNoteKey(C);
    },
    highlightNote(C) {
      n.current?.highlightNote(C);
    },
    setComments(C) {
      b.current?.setComments(C), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const _ = ye(
    (C, $, w, z) => {
      if (!d) return;
      const v = b.current?.getComments();
      d(C, v, $, w, z);
    },
    [b, d]
  ), M = ye(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const C = b.current?.getComments();
    l(C);
  }, [b, i, l]);
  return B(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ A(Kk, { children: /* @__PURE__ */ Ee(Cb, { ref: n, onUsjChange: _, ...f, children: [
    /* @__PURE__ */ A(
      A0,
      {
        setCommentStore: k,
        onChange: M,
        showCommentsContainerRef: g ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ A("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Ln(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function O0(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function R0(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const q0 = /^[#\w().,%/\s-]+$/;
function Lr(e) {
  return e != null;
}
const $0 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, I0 = {
  left: "right",
  right: "left"
}, L0 = "var(--usj-font-fallback, serif)";
function Nb(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${O0(i)}"`).join(", ")}, ${L0}`;
}
const Sl = ".editor-input.usfm", D0 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function U0(e) {
  return D0.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Sl}".`
  ), Sl);
}
function F0(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Nb(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (q0.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Lr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Lr(t.firstLineIndent) && s.push(`text-indent: ${Ln(t.firstLineIndent * 20 * r)}vw`), Lr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Ln(t.leftMargin * 20 * r)}vw`), Lr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Ln(t.rightMargin * 20 * r)}vw`
  ), Lr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Ln(t.spaceBefore * r)}pt`), Lr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Ln(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = $0[n ? I0[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Rp = { c: 150, ca: 133, cp: 150 };
function qp(e, t) {
  return e && Lr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function z0(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Lr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = qp(e.markers.c, Rp.c);
  return ["ca", "cp"].map((i) => {
    const s = qp(
      e.markers[i],
      Rp[i]
    ), o = Ln(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function _w(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Sl } = t, s = U0(i), o = [], a = [];
  e.defaultFont && a.push(Nb(e.defaultFont)), Lr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Ln(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = F0(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${R0(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...z0(e, s)), o.join(`
`);
}
export {
  Gg as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  Tw as Editorial,
  _s as GENERATOR_NOTE_CALLER,
  ah as HIDDEN_NOTE_CALLER,
  Cw as Marginal,
  x as MarkerType,
  Hg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  vu as STANDARD_VIEW_MODE,
  $i as defaultStyleInfo,
  xw as directionToNames,
  gv as filterAndRankItems,
  _w as generateUsjCss,
  bw as getDefaultViewMode,
  Li as getDefaultViewOptions,
  q1 as getEnterMenuItems,
  R1 as getMarkerMenuItems,
  kw as getViewMode,
  Eu as getViewOptions,
  qs as isBlockVerseLayout,
  ln as isInsertEmbedOpOfType,
  Av as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
