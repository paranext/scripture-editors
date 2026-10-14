import { jsx as E, jsxs as Pe, Fragment as zn } from "react/jsx-runtime";
import { forwardRef as Mn, useState as ge, useRef as Q, useCallback as be, useEffect as j, useMemo as Ye, memo as jb, createContext as Lp, useContext as Dp, Children as Vb, isValidElement as Wb, cloneElement as Hb, useImperativeHandle as ra, useLayoutEffect as Fs } from "react";
import { assertSafeKey as rt, isValidBookCode as Gb, MARKER_OBJECT_PROPS as Jb, USJ_VERSION as hr, USJ_TYPE as gr, isUsjTextContentLocation as Yb, indexesFromUsjJsonPath as Up, isUsjAttributeKeyLocation as Xb, isUsjAttributeMarkerLocation as Qb, isUsjClosingAttributeMarkerLocation as Zb, isUsjMarkerLocation as ek, isUsjClosingMarkerLocation as tk, isUsjPropertyValueLocation as rk, getUsjDocumentLocationTypeName as nk, usjJsonPathFromIndexes as wn, EMPTY_USJ as Fp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ze, $parseSerializedNode as Kn, DecoratorNode as zs, ElementNode as br, isHTMLElement as ni, createState as na, $getState as oe, $setState as Nt, $isRangeSelection as P, $isElementNode as D, $isTextNode as M, $getSelection as w, $isNodeSelection as ia, ParagraphNode as Ml, TextNode as Xe, $createTextNode as Me, $getCommonAncestor as ik, $isLineBreakNode as ii, NODE_STATE_KEY as Ks, $getEditor as gn, $hasUpdateTag as sk, $getNodeByKey as ne, $getRoot as Fe, $createRangeSelection as mn, $createPoint as dr, $setSelection as Pr, SELECTION_CHANGE_COMMAND as Ft, $getCharacterOffsets as El, KEY_DOWN_COMMAND as kr, COMMAND_PRIORITY_HIGH as Ae, HISTORY_MERGE_TAG as Al, CLICK_COMMAND as sa, COMMAND_PRIORITY_EDITOR as Bn, DELETE_CHARACTER_COMMAND as Er, DELETE_WORD_COMMAND as $i, DELETE_LINE_COMMAND as jn, COMMAND_PRIORITY_NORMAL as Nr, CONTROLLED_TEXT_INSERTION_COMMAND as Vn, COMMAND_PRIORITY_CRITICAL as de, PASTE_COMMAND as Ut, CUT_COMMAND as nr, REMOVE_TEXT_COMMAND as Pl, isDOMNode as zp, $getNearestNodeFromDOMNode as Wi, $isRootNode as Nl, DROP_COMMAND as wl, $isDecoratorNode as si, COPY_COMMAND as Wn, COMMAND_PRIORITY_LOW as Rt, getDOMSelection as ok, isSelectionWithinEditor as Kp, $createRangeSelectionFromDom as Bp, isDOMTextNode as ak, BLUR_COMMAND as Ol, $addUpdateTag as Pt, INSERT_PARAGRAPH_COMMAND as Hn, INSERT_LINE_BREAK_COMMAND as Sc, DRAGSTART_COMMAND as jp, SKIP_DOM_SELECTION_TAG as jr, CLEAR_HISTORY_COMMAND as ck, $getPreviousSelection as lk, $isRootOrShadowRoot as uk, CAN_UNDO_COMMAND as dk, CAN_REDO_COMMAND as fk, $createNodeSelection as Vp, getDOMSelectionFromTarget as pk, $onUpdate as Wp, KEY_ENTER_COMMAND as Hp, LineBreakNode as Gp, $copyNode as hk, FOCUS_COMMAND as gk, createEditor as mk, SELECT_ALL_COMMAND as yk, isExactShortcutMatch as bk, getDOMTextNode as kk, KEY_ESCAPE_COMMAND as Jp, createCommand as Yp, HISTORIC_TAG as Rl, UNDO_COMMAND as Xp, REDO_COMMAND as Qp, CLEAR_EDITOR_COMMAND as xk } from "lexical";
import { addClassNamesToElement as bi, removeClassNamesFromElement as Ka, $findMatchingParent as Ne, $dfsIterator as oa, $dfs as oi, mergeRegister as Re, registerNestedElementResolver as Zp, $unwrapNode as vc, IS_APPLE as yn } from "@lexical/utils";
import { useLexicalNodeSelection as Tk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Yt } from "fast-equals";
import ds from "quill-delta";
import { useLexicalComposerContext as ce } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as Ck } from "unicode-segmenter/grapheme";
import { copyToClipboard as _k, $getLexicalContent as Sk } from "@lexical/clipboard";
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
const Ba = (e) => Ze(Kn(e)), Vk = {
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
const U = " ", vo = "​", ir = U, $l = `${U}|`, tr = "p", xs = "+", ah = "-", Mo = "chapter", Mc = "verse", _d = "invalid", Wk = "text-spacing", Hk = "formatted-font", Gk = "marker-", ql = "external-usj-mutation", ch = "selection-change", wt = "cursor-change", Ec = "annotation-change", Ts = "delta-change", lh = "marker-settle", Jk = [
  ql,
  ch,
  wt,
  Ec,
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
], uh = 1, Il = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Qk = Il.filter((e) => e !== "sid" && e !== "eid");
class mr extends zs {
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
    return new mr(r, n, i, s, a, o);
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
  return Ze(new mr(e, t, r, n, void 0, i));
}
function tt(e) {
  return e instanceof mr;
}
const Ll = "f", Zk = [
  // Footnote
  Ll,
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
class $e extends br {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Ll, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (uo(t) === "crossref" ? ah : xs), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new $e(r, n, i, s, o, a);
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
    return Dl().updateFromJSON(t);
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
  return { node: Dl(t, r, n) };
}
function Dl(e, t, r, n, i) {
  return Ze(new $e(e, t, r, n, i));
}
function rx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return $e.isValidMarker(t) && e.classList.contains($e.getType());
}
function B(e) {
  return e instanceof $e;
}
var C;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(C || (C = {}));
var x;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(x || (x = {}));
const Ac = {
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
function wr(e) {
  const t = Object.hasOwn(Ac, e) ? Ac[e] : void 0, r = Object.hasOwn(Sd, e) ? Sd[e] : void 0;
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
const hh = "v", gh = "c", Rn = "fig", vd = "tr", Pc = "esb", mh = "esbe", Md = "periph", Ed = "alt", Ad = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, nx = {
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
function Ul(e) {
  return cx.test(e) || dh(e);
}
function ja(e, t) {
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
      const { word: g, next: y } = ja(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === gh) {
      const { word: g, next: y } = ja(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === x.Note || h === void 0 && $e.isValidMarker(l)) {
      const { word: g, next: y } = ja(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === x.Milestone || h === void 0 && Ul(l)) {
      const g = yx(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    h === x.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : h === x.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Eo(p) ? (d(), Eo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Pc || l === mh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
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
  const t = Lr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
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
function vr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", U);
}
function ln(e) {
  return e.content || (e.content = []), e.content;
}
function Lr(e, t) {
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
      i = { type: "para", marker: tr, content: [] }, f().push(i);
    }
    return ln(i);
  }, g = (ie) => {
    const N = h();
    typeof ie == "string" && typeof N[N.length - 1] == "string" ? N[N.length - 1] = N[N.length - 1] + ie : N.push(ie);
  }, y = (ie) => {
    for (let N = ie; N < o.length; N += 1) {
      const ee = o[N].object;
      ee.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, b = (ie) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, ie || (s.closed = "false"), s = void 0);
  }, T = () => {
    c = void 0, l = void 0;
  }, A = (ie, N, ee) => {
    k();
    const [, he, _e, st] = ee, gt = {
      type: "table:cell",
      marker: st ? N.slice(0, N.indexOf("-")) : N,
      align: nx[he],
      content: []
    };
    st && (gt.colspan = String(Number(st) + 1 - Number(_e))), ln(ie).push(gt), i = gt;
  }, _ = (ie) => {
    u && (ie || (u.closed = "false"), u = void 0);
  }, O = () => {
    d = void 0;
  };
  let $, K = "", S;
  const G = () => {
    K && g(vr(K)), K = "";
  }, q = (ie = !1) => {
    $?.type === "sidebar" ? K = "" : ie && K.endsWith(`
`) && (K = K.slice(0, -1)), $ = void 0, G();
  }, H = () => {
    if (!S)
      return;
    const ie = { type: "char", marker: S.marker, content: [] };
    S.value && (ie.content = [vr(S.value)]), h().push(ie), o.push({ object: ie }), S = void 0;
  }, W = (ie, N) => {
    p = !1, T(), k(), b(!1), i = { type: "para", marker: ie, content: [] }, N && (i.content = [vr(N)]), f().push(i);
  }, re = () => {
    S && (W(S.marker, S.value), S = void 0);
  };
  let fe;
  const qe = (ie) => {
    if (!fe)
      return;
    let { value: N } = fe;
    fe = void 0, ie && N.endsWith(`
`) && (N = N.slice(0, -1));
    const ee = N.indexOf("|"), he = ee >= 0 ? Cs(N.slice(ee + 1), Md) : void 0, _e = ee >= 0 ? N.slice(0, ee) : N, st = ee >= 0 && (!he || !!_e && !!he[Ed]), gt = st ? void 0 : he, te = st ? N : _e, He = {
      type: "periph",
      ...te ? { [Ed]: vr(te) } : {},
      ...gt
    };
    He.content = [], f().push(He), d = He, i = void 0;
  };
  let Oe;
  const ht = () => {
    if (Oe) {
      if (Oe.shape === "para")
        W(Rn, Oe.value);
      else {
        const ie = { type: "char", marker: Rn, content: [] };
        Oe.value && (ie.content = [vr(Oe.value)]), h().push(ie), o.push({ object: ie });
      }
      Oe = void 0;
    }
  }, or = lx(e, t?.getMarker ?? wr, n);
  for (let ie = 0; ie < or.length; ie++) {
    const N = or[ie];
    if (S) {
      if (N.kind === "text") {
        S.value += N.text;
        continue;
      }
      if (S.shape === "char" && N.kind === "end" && N.marker.replace(/^\+/, "") === S.marker) {
        if (S.value.trim() === "") {
          h().push({ type: "char", marker: S.marker, content: [] }), S = void 0, q();
          continue;
        }
        Object.assign(S.target, {
          [S.attrName]: vr(S.value.trim())
        });
        const ee = S.marker;
        if (S = void 0, ee === "ca") {
          const he = or[ie + 1];
          he?.kind === "text" && /^[\s\u200B]*$/.test(he.text) && ie++;
        }
        continue;
      }
      if (S.shape === "para" && (N.kind === "para" || N.kind === "chapter")) {
        const ee = S.value.replace(/[\s\u200B]+$/, "");
        ee === "" ? (W(S.marker), S = void 0) : (Object.assign(S.target, { [S.attrName]: vr(ee) }), S = void 0);
      } else {
        $ = void 0, (N.kind === "para" || N.kind === "chapter") && S.value.endsWith(`
`) && (S.value = S.value.slice(0, -1)), S.shape === "para" ? re() : H(), ie--;
        continue;
      }
    }
    if (fe) {
      if (N.kind === "text" || N.kind === "optbreak") {
        fe.value += N.kind === "text" ? N.text : "//";
        continue;
      }
      qe(N.kind === "para" || N.kind === "chapter"), ie--;
      continue;
    }
    if (Oe) {
      if (N.kind === "text" || N.kind === "optbreak") {
        Oe.value += N.kind === "text" ? N.text : "//";
        continue;
      }
      if (N.kind === "end" && N.marker.replace(/^\+/, "") === Rn) {
        const ee = Oe.value.indexOf("|"), he = ee >= 0 ? Cs(Oe.value.slice(ee + 1), Rn) : void 0;
        if (he) {
          const _e = {};
          for (const [te, He] of Object.entries(he))
            _e[te === "src" ? "file" : te] = He;
          const st = {
            type: "figure",
            marker: Rn,
            ..._e
          }, gt = Oe.value.slice(0, ee);
          gt && (st.content = [vr(gt)]), g(st), Oe = void 0;
          continue;
        }
      }
      ht(), ie--;
      continue;
    }
    if ($)
      if (N.kind === "text") {
        if (N.text.includes(`
`) && /^[\s\u200B]*$/.test(N.text)) {
          K += N.text;
          continue;
        }
        q();
      } else if (N.kind === "charOpen" || N.kind === "para") {
        const ee = N.kind === "para" || !N.isNested ? Eo(N.marker) : void 0;
        if (ee && ee.targetTypes.includes($.type)) {
          K = "", S = {
            target: $,
            attrName: ee.attrName,
            marker: N.marker,
            shape: ee.shape,
            value: ""
          };
          continue;
        }
        q(N.kind === "para");
      } else
        q(N.kind === "chapter");
    if (!s && !n && (N.kind === "charOpen" && !N.isNested && N.marker === Rn || N.kind === "para" && N.marker === Rn)) {
      k(), Oe = { shape: N.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (N.kind) {
      case "text": {
        let ee = N.text;
        if (!s && ee.endsWith(`
`)) {
          const he = or[ie + 1];
          (he === void 0 || he.kind === "para" || he.kind === "chapter") && (ee = ee.slice(0, -1));
        }
        ee && g(vr(ee));
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
        if (T(), !n && N.marker === Pc) {
          k(), b(!1), _(!1);
          const he = {
            type: "sidebar",
            marker: Pc,
            content: []
          };
          f().push(he), u = he, i = void 0, $ = u, p = !1;
          break;
        }
        if (N.marker === mh && u) {
          k(), b(!1), _(!0), i = void 0;
          break;
        }
        if (!n && N.marker === Md) {
          k(), b(!1), _(!1), O(), fe = { value: "" }, i = void 0, p = !1;
          break;
        }
        W(N.marker);
        break;
      }
      case "verse": {
        b(!1);
        const ee = { type: "verse", marker: hh, number: N.number };
        g(ee), $ = ee;
        break;
      }
      case "chapter": {
        k(), b(!1), T(), _(!1), O(), i = void 0;
        const ee = {
          type: "chapter",
          marker: gh,
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
          const _e = Ad.exec(N.marker);
          if (_e && Pd(_e)) {
            A(l, N.marker, _e);
            break;
          }
        }
        if (!N.isNested) {
          const _e = s ? a : 0;
          y(_e), o.length = _e;
        }
        const ee = h(), he = { type: "char", marker: N.marker, content: [] };
        ee.push(he), o.push({ object: he });
        break;
      }
      case "end": {
        const ee = N.marker.replace(/^\+/, ""), he = s ? a : 0, _e = o.findLastIndex((st, gt) => gt >= he && st.object.marker === ee);
        _e >= 0 ? (bx(o[_e].object), y(_e + 1), o.length = _e) : s && s.marker === ee ? b(!0) : (y(he), o.length = he, g({ type: "unmatched", marker: `${N.marker}*` }));
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
  if (fe && qe(!0), Oe && ht(), S)
    if (S.shape === "para") {
      const ie = S.value.replace(/[\s\u200B]+$/, "");
      ie === "" ? W(S.marker) : Object.assign(S.target, { [S.attrName]: vr(ie) }), S = void 0;
    } else
      S.value.endsWith(`
`) && (S.value = S.value.slice(0, -1)), H();
  k(), b(!1), _(!1);
  const on = (ie) => {
    for (const N of ie)
      typeof N != "string" && N.content && (on(N.content), N.content.length === 0 && delete N.content);
  };
  return on(r), r;
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
}), ue = na("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Dr = "marker-trailing-space", bh = 1, kx = "marker", Fl = na("isGutterMarker", {
  parse: (e) => e === !0
});
class Qr extends zs {
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
    return new Qr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => _x(t) ? {
        conversion: xx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Gr().updateFromJSON(t);
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
  return { node: Gr(t, r) };
}
function Gr(e, t) {
  return Ze(new Qr(e, t));
}
function Tx(e) {
  return Nt(Gr(kx, e), Fl, !0);
}
function Cx(e) {
  return zt(e) && oe(e, Fl);
}
function _x(e) {
  return e?.tagName === "span";
}
function zt(e) {
  return e instanceof Qr;
}
function kh(e) {
  return e?.type === Qr.getType();
}
const hn = "internal-comment", Sx = [hn], xh = Object.freeze({}), Nc = Object.freeze({}), wc = Object.freeze({}), Oc = Object.freeze({}), Rc = Object.freeze({}), vx = 1, ki = /* @__PURE__ */ new Map(), ns = /* @__PURE__ */ new Map(), xi = /* @__PURE__ */ new Map(), Ti = /* @__PURE__ */ new Map();
class ct extends br {
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
    super(o), this.__typedIDs = fo(t), this.__typedOnClicks = Va(r), this.__typedOnRemoves = Wa(n), this.__typedOnMouseEnters = Ha(i), this.__typedOnMouseLeaves = Ga(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = fo(t.__typedIDs), n = Va(t.__typedOnClicks), i = Wa(t.__typedOnRemoves), s = Ha(t.__typedOnMouseEnters), o = Ga(t.__typedOnMouseLeaves);
    return new ct(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Sx.includes(t);
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
      c !== l && (c === 0 ? l === 1 && bi(r, u) : l === 0 && Ka(r, u), c === 1 ? l === 2 && bi(r, d) : l === 1 && Ka(r, d));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ka(r, $n("annotationId", h));
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
    return ve(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = fo(r.__typedIDs);
    r.__typedIDs = fo(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ao(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Va(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ve(t) ? ki.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Wa(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ve(t) ? ns.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Ha(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ve(t) ? xi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Ga(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ve(t) ? Ti.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!ve(a))
      return;
    rt(t), rt(r);
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
    if (!ve(n))
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Nc) {
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
    rt(t), rt(r);
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
    if (!this.__typedOnClicks || this.__typedOnClicks === Nc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === wc) {
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
    rt(t), rt(r);
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === wc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Oc) {
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
    rt(t), rt(r);
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Oc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Rc) {
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
    rt(t), rt(r);
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Rc) {
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
    for (; ve(t) && Rd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; ve(r) && Rd(this.getTypedIDs(), r.getTypedIDs()); )
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
    if (rt(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      rt(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Va(e) {
  if (!e || e === Nc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    rt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      rt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Wa(e) {
  if (!e || e === wc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    rt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      rt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ha(e) {
  if (!e || e === Oc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    rt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      rt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ga(e) {
  if (!e || e === Rc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    rt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      rt(s), i[s] = o;
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
function _s(e, t, r, n, i) {
  return Ze(new ct(e, t, r, n, i));
}
function ve(e) {
  return e instanceof ct;
}
function Th(e) {
  return e?.type === ct.getType();
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
    if (D(g) && g.isParentOf(k))
      continue;
    const b = y === 0, T = y === u - 1;
    let A = null;
    if (M(k)) {
      const _ = k.getTextContentSize(), O = b ? f : 0, $ = T ? p : _;
      if (O === 0 && $ === 0)
        continue;
      const K = k.splitText(O, $);
      A = K.length > 1 && (K.length === 3 || b && !T || $ === _) ? K[1] : K[0];
    } else {
      if (ve(k))
        continue;
      D(k) && k.isInline() && (A = k);
    }
    if (A !== null) {
      if (A && A.is(h))
        continue;
      const _ = A.getParent();
      (_ == null || !_.is(h)) && (g = void 0), h = _, g === void 0 && (g = _s(), g.addID(t, r, n, i, s, o), A.insertBefore(g)), g.append(A);
    } else
      h = void 0, g = void 0;
  }
  t === hn && D(g) && (d ? g.selectStart() : g.selectEnd());
}
function wx(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (ve(n))
      return n.getTypedIDs()[t];
    if (M(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (ve(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Ox = ["type", "marker", "content"], $c = "unknown", _h = 1, Rx = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ai extends br {
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
      [$c]: (t) => qx(t) ? {
        conversion: $x,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return zl().updateFromJSON(t);
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
    const r = t ?? w();
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
  return { node: zl(t, r) };
}
function zl(e, t, r) {
  return Ze(new ai(e, t, r));
}
function qx(e) {
  return e?.tagName.toLowerCase() === $c;
}
function xe(e) {
  return e instanceof ai;
}
const Sh = 1, Ix = "attribute-run";
function Ja(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Zr extends br {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Zr(r, n);
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
    const r = Ja(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Ja(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Ja(this.__runKind);
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
}
function vh(e) {
  return Ze(new Zr(e));
}
function Ke(e) {
  return e instanceof Zr;
}
const Ss = "id", Mh = 1, Lx = [
  "type",
  "marker",
  "code",
  "content"
];
class Kt extends br {
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
    return new Kt(r, n, i);
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
  return Ze(new Kt(e, t));
}
function Ce(e) {
  return e instanceof Kt;
}
function Kl(e) {
  return e?.type === Kt.getType();
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
class Wt extends br {
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
    return new Wt(r, n, i, s, o, a);
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
  return Ze(new Wt(e, t, r, n, i));
}
function De(e) {
  return e instanceof Wt;
}
function Ux(e) {
  return e?.type === Wt.getType();
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
class Te extends br {
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
    return new Te(r, n, i);
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
    return Te.isValidFootnoteMarker(t) || Te.isValidCrossReferenceMarker(t);
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
    return Jr().updateFromJSON(t);
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
    const n = this.getUnknownAttributes()?.closed === "false", i = Jr(this.getMarker(), n ? { closed: "false" } : void 0);
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
  return { node: Jr(t) };
}
function Jr(e, t) {
  return Ze(new Te(e, t));
}
function Bx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Te.isValidMarker(t) && e.classList.contains(Te.getType());
}
function z(e) {
  return e instanceof Te;
}
function jx(e) {
  return e?.type === Te.getType();
}
const Rh = 1, Vx = "c", $h = "span";
class Ur extends zs {
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
    return new Ur(r, n, i, s, o, a, c);
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
    return Bl().updateFromJSON(t);
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
    return this.getShowMarker() ? rr(this.getMarker(), this.getNumber()) : this.getNumber();
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
  return { node: Bl(t) };
}
function Bl(e, t, r, n, i, s) {
  return Ze(new Ur(e, t, r, n, i, s));
}
function qh(e) {
  return e ? e.classList.contains(Mo) && e.tagName.toLowerCase() === $h : !1;
}
function Bs(e) {
  return e instanceof Ur;
}
function Hx(e) {
  return e?.type === Ur.getType();
}
const Ih = 1;
class kn extends Ml {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new kn(t.__key);
  }
  static importJSON(t) {
    return fr().updateFromJSON(t);
  }
  getMarker() {
    return tr;
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
    const n = fr();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function fr() {
  return Ze(new kn());
}
function Rr(e) {
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
  tr,
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
class ut extends Ml {
  __marker;
  __unknownAttributes;
  constructor(t = tr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new ut(r, n, i);
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
  return Ze(new ut(e, t));
}
function le(e) {
  return e instanceof ut;
}
function jl(e) {
  return e?.type === ut.getType();
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
class xt extends Xe {
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Mc, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
  return Ze(new xt(e, t, r, n, i, s));
}
function ze(e) {
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
  return Me(Ii);
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
function Qe(e) {
  return De(e) || Bs(e);
}
function Kh(e, t) {
  return e.find((r) => Qe(r) && r.getNumber() === t.toString());
}
function tT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Qe(r));
}
function qc(e) {
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
  if (Qe(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Qe(t); )
    t = t.getPreviousSibling();
  if (t && Qe(t))
    return t;
}
function Bt(e) {
  return Ne(e, B) ?? void 0;
}
function nT(e) {
  return Ce(e) || De(e) || z(e) || Bs(e) || Rr(e) || tt(e) || le(e) || B(e) || ze(e) || xe(e);
}
function Vl(e) {
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
function we(e) {
  return lt(e) || Ce(e);
}
function lt(e) {
  return le(e) || Rr(e);
}
function iT(e) {
  return jl(e) || la(e);
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
  const r = oe(t, Jn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function sT(e, t) {
  const r = D(e) ? e : e.getParent(), n = D(t) ? t : t.getParent(), i = r && n ? ik(r, n) : void 0;
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
  return e?.type === Xe.getType();
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
function Be(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function it(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function jh(e, t, r) {
  const n = Be(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function rr(e, t) {
  let r = Be(e);
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
function jt(e) {
  return " " + e + U;
}
function Wl(e) {
  const t = [];
  for (const r of e) {
    if (!z(r))
      continue;
    const n = Wh(r);
    n !== ir && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Wh(e) {
  return R(e) || xr(e) || M(e) && oe(e, ue) === "attribute" ? "" : M(e) ? e.getTextContent() : D(e) ? e.getChildren().map((t) => Wh(t)).join("") : "";
}
function xr(e) {
  return zt(e) && e.getTextType() === "marker";
}
function Ct(e) {
  return R(e) || xr(e);
}
function Hl(e) {
  if (!e || !Ct(e))
    return !1;
  const t = e.getParent();
  return Ce(t) && e.is(t.getFirstChild());
}
function Hh(e) {
  return Jl(e) || kh(e) && e.textType === "marker";
}
function Dd(e, t) {
  dT(e, t), e.setMarker(t);
}
function dT(e, t) {
  const r = e.getMarker(), n = Be(r), i = Be(r, !0), s = it(r), o = it(r, !0), a = Te.isNoteContentMarker(t);
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
      else if (xr(c)) {
        const f = l.startsWith(Be("", !0));
        c.setTextContent(u ? Be(t, f) : it(t, f));
      }
    }
  });
}
function We(e, t = Jb) {
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
  if (t && (e.anchor.type === "element" && !D(t) || e.anchor.type === "text" && !M(t)))
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
function Gl(e, t) {
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
  if (ii(e) || R(e) || xr(e) || Ke(e) || zt(e) && e.getTextType() === "attribute")
    return !0;
  if (M(e)) {
    const t = oe(e, ue);
    if (t === Dr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === U || js(r))
      return !0;
  }
  return !1;
}
function Hs() {
  const e = Me(U);
  return Nt(e, ue, Dr), e.setMode("token"), e;
}
function hT(e) {
  const t = e.getTextContent();
  t.startsWith(U) || e.setTextContent(U + t);
}
function Fr(e) {
  return M(e) && oe(e, ue) === Dr;
}
function Xh(e) {
  const t = e.getFirstChild();
  if (!Ct(t) || t === null || Fr(t.getNextSibling()))
    return !1;
  const r = w();
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
      if (ve(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (M(s) && s.getType() === Xe.getType()) {
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
  for (; t && ve(t); )
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
class zr extends Xe {
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
    return new zr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
  return Ze(new zr(e, t, void 0, r));
}
function R(e) {
  return e instanceof zr;
}
function Jl(e) {
  return e?.type === zr.getType();
}
function en(e) {
  return e.getTextContent() === Ln(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function TT(e) {
  e.setTextContent(Ln(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Ln(e, t, r = !1) {
  return t === "closing" ? it(e, r) : t === "selfClosing" ? it("") : Be(e, r);
}
const CT = /* @__PURE__ */ new Set(["closed"]);
function Ar(e, t) {
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
function _T(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : gs(e) === void 0 && rg(e) === void 0;
}
function rg(e) {
  return e.getChildren().find((t) => M(t) && oe(t, ue) === "attribute");
}
function vs(e, t) {
  return Gs(e.getNextSibling(), t);
}
const ST = /^[ \u00A0]+$/;
function Yl(e) {
  if (en(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Be(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && ST.test(r.slice(t.length));
}
function Gs(e, t) {
  let r, n, i, s;
  return Ke(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), R(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Yl(e) && (r = e, e = e.getNextSibling()), M(e) && oe(e, ue) === "attribute" && (n = e, e = e.getNextSibling()), R(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && en(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Yr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!R(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (M(n) && n.getTextContent() === jt(e.getCaller()))
    return n;
}
function Xl(e) {
  const t = Yr(e);
  return t ? Gs(t.getNextSibling(), "cat") : {};
}
function da(e) {
  const t = e.getFirstChild();
  if (!(!M(t) || R(t)) && oe(t, ue) !== "attribute")
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
      if (ze(n))
        return n;
      if (!(R(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || M(n) && oe(n, ue) === "attribute" || z(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ke(n)))
        return;
    }
}
function fa(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ke(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), R(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Yl(s) && (t = s, s = s.getNextSibling()), M(s) && oe(s, ue) === "attribute" && (r = s, s = s.getNextSibling()), R(s) && s.getMarkerSyntax() === "selfClosing" && en(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Ql(e) {
  return z(ua(e));
}
function Zl(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Ql(t) : t.getChildren().some((i) => z(i) && i.getMarker() === r) ? !0 : void 0;
}
function vT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!R(t))
      return;
    const r = Zl(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Gi(e) {
  return M(e) && e.getType() === Xe.getType() && oe(e, ue) !== "attribute";
}
function pa(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !R(t) || !z(r) || !ag(t, r) || !Gi(e) ? 0 : e.getTextContent().startsWith(U) ? U.length : 0;
}
function ag(e, t) {
  return e.getMarkerSyntax() === "opening" && Zl(e, t) !== void 0;
}
function eu(e, t) {
  if (!ag(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return R(r) ? Zl(r, t) === !0 ? "spacer" : void 0 : Gi(r) ? r.getTextContent().startsWith(U) ? void 0 : "prefix" : "spacer";
}
function MT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (R(t) && eu(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function cg(e, t) {
  const r = w();
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
    const r = eu(t, e);
    if (r !== void 0 && !cg(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        M(n) && n.setTextContent(U + n.getTextContent());
      } else
        t.insertAfter(Me(U));
  });
}
function ug(e) {
  return e.isAttached() ? e.getChildren().some((t) => R(t) && eu(t, e) !== void 0 && cg(t, e)) : !1;
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
        closingAttributes: Ar(qT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [NT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Ar(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [wT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Ar(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Ar(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const $t = { wantsRun: !1, valueText: void 0 }, tn = {};
function Ya(e, t) {
  if (t === "va")
    return e;
  const r = vs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function tu(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (D(e)) {
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
  const n = w();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function IT(e) {
  return Ke(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : R(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : M(e) && oe(e, ue) === "attribute";
}
function LT(e) {
  if (R(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!M(e) || oe(e, ue) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!R(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Xa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (ze(t))
      return t;
    if (!IT(t))
      return;
  }
}
function Fd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => ze(t),
    ownerOf: (t) => {
      if (Ke(t))
        return t.getRunKind() === e ? Xa(t) : void 0;
      const r = t.getParent();
      return Ke(r) ? r.getRunKind() === e ? Xa(r) : void 0 : LT(t) === e ? Xa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!ze(t))
        return $t;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? $t : { wantsRun: !0, valueText: U + r };
    },
    scanPieces: (t) => ze(t) ? vs(Ya(t, e), e) : tn,
    graceSite: (t, r) => ze(t) ? !r.opener && !r.closer ? tu(Ya(t, e)) : ha(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => ze(t) ? Ya(t, e) : void 0
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
  scanPieces: () => tn,
  graceSite: (e) => z(e) && ug(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, UT = {
  kind: "char",
  ownerPredicate: (e) => z(e),
  ownerOf: (e) => {
    if (!M(e) || oe(e, ue) !== "attribute")
      return;
    const t = e.getParent();
    return z(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!z(e) || gs(e) === void 0)
      return $t;
    const t = Ar(e.getUnknownAttributes() ?? {}, aa(e.getMarker()));
    return t === "" ? $t : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => z(e) ? { value: rg(e) } : tn,
  graceSite: (e, t) => {
    if (!z(e) || t.value)
      return !1;
    const r = gs(e);
    if (!r)
      return !1;
    const n = w();
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
  if (!M(e) || oe(e, ue) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return R(t) && t.getMarker() === "cat";
}
function FT(e) {
  const t = e.getParent();
  if (!B(t))
    return;
  const r = Yr(t);
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
    if (Ke(e))
      return e.getRunKind() === "cat" && B(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ke(t) ? t.getRunKind() === "cat" && B(t.getParent()) ? t.getParent() ?? void 0 : void 0 : pg(e) ? FT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!B(e) || e.getIsCollapsed() !== !1)
      return $t;
    const t = e.getCategory();
    return t === void 0 ? $t : { wantsRun: !0, valueText: U + t };
  },
  scanPieces: (e) => B(e) ? Xl(e) : tn,
  graceSite: (e, t) => {
    if (!B(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Yr(e);
      return r !== void 0 && tu(r);
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
    insertRunAfter: (e) => B(e) ? Yr(e) : void 0
  }
};
function KT(e) {
  return Ke(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : R(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : M(e) && oe(e, ue) === "attribute";
}
function BT(e) {
  if (R(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!M(e) || oe(e, ue) !== "attribute")
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
      if (Ke(r))
        return r.getRunKind() === e && De(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ke(n) ? n.getRunKind() === e && De(n.getParent()) ? n.getParent() ?? void 0 : void 0 : BT(r) === e ? jT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!De(r))
        return $t;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? $t : { wantsRun: !0, valueText: U + n };
    },
    scanPieces: (r) => De(r) ? e === "ca" ? ng(r) : sg(r) : tn,
    graceSite: (r, n) => {
      if (!De(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && tu(i);
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
  return M(e) && oe(e, ue) === "attribute";
}
function VT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (tt(t)) {
      const r = R(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!hg(t))
      return;
  }
}
const WT = {
  kind: "milestone",
  ownerPredicate: (e) => tt(e),
  ownerOf: (e) => {
    const t = Ke(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ke(e.getParent()) ? e.getParent() : hg(e) ? e : void 0;
    if (!t || Ke(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ke(t) ? tt(r) ? r : void 0 : VT(t);
  },
  expectedPieces: (e) => {
    if (!tt(e))
      return $t;
    const t = tg(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Ar(t, ca(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : U + r };
  },
  scanPieces: (e) => {
    if (!tt(e))
      return tn;
    const { opening: t, attribute: r, closing: n, wrapper: i } = fa(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!tt(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = w();
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
    glyphMarker: (e) => tt(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, HT = fg("optbreak", void 0, void 0).opening, GT = {
  kind: "optbreak",
  ownerPredicate: (e) => xe(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!xe(t) || t.getTag() !== "optbreak"))
      return M(e) || zt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: HT }),
  scanPieces: (e) => xe(e) ? { value: e.getFirstChild() ?? void 0 } : tn,
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
  ownerPredicate: (e) => xe(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => $t,
  scanPieces: () => tn,
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
  scanPieces: () => tn,
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
class rn extends Xe {
  __marker;
  constructor(t = "", r) {
    super(ms(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new rn(r, n);
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
    return ru().updateFromJSON(t);
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
  return { node: ru(t) };
}
function ru(e) {
  return Ze(new rn(e));
}
function ZT(e) {
  return e?.tagName.toLowerCase() === Oo;
}
function nn(e) {
  return e instanceof rn;
}
const bg = "table", Ic = "immutable-table", kg = 1, eC = ["type", "marker", "content"];
class ci extends br {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Ic;
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
      type: Ic,
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
  return Ze(new ci(e));
}
function xg(e) {
  return e instanceof ci;
}
function rC(e) {
  return e?.type === Ic;
}
const Tg = "table:row", Bd = "immutable-table-row", Cg = 1, Lc = "tr", nC = ["type", "marker", "content"];
class Ji extends br {
  __marker;
  __unknownAttributes;
  constructor(t = Lc, r, n) {
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
    return super.updateFromJSON(t).setMarker(t.marker ?? Lc).setUnknownAttributes(t.unknownAttributes);
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
  return Ze(new Ji(e, t));
}
const _g = "table:cell", jd = "immutable-table-cell", Sg = 1, Dc = "tc1", sC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function oC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Yi extends br {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Dc, r, n, i, s) {
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
    return super.updateFromJSON(t).setMarker(t.marker ?? Dc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
      version: Sg
    };
  }
}
function aC(e, t, r, n) {
  return Ze(new Yi(e, t, r, n));
}
function Js(e, t) {
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function sr(e, t) {
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
  const i = t.getMarker(), s = Ql(t), o = cC(t);
  if (n) {
    e.append(yt(i, "opening", s));
    const [a] = r;
    Gi(a) && !a.getTextContent().startsWith(U) && a.setTextContent(U + a.getTextContent());
  }
  e.append(...r), o && e.append(yt(i, "closing", s));
}
function Zn(e) {
  return Ne(e, z) ?? void 0;
}
function dC(e) {
  let t = e.getParent();
  for (; z(t); )
    t = t.getParent();
  return t;
}
function Uc(e) {
  const t = vg(e);
  return e.getChildren().every((r) => R(r) || t && oe(r, ue) === "attribute" || M(r) && r.getTextContent().replaceAll(U, "") === "");
}
function vg(e) {
  return Es(e);
}
function fC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Ar(r, aa(e.getMarker())) : "";
  n !== "" && t.insertAfter(Me(n)), e.remove();
}
function pC(e, t) {
  if (Es(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(yt(e.getMarker(), "closing", Ql(e)));
}
function hC(e, t) {
  return z(e) && !Es(e) && !Es(t);
}
function gC(e, t, r) {
  Uc(e) && e.getChildren().forEach((i) => {
    R(i) || i.remove();
  });
  const [n] = t;
  r && Gi(n) && !n.getTextContent().startsWith(U) && n.setTextContent(U + n.getTextContent()), e.append(...t);
}
function mC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = vg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = R(l) && l.getMarkerSyntax() === "closing", f = s && oe(l, ue) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = hC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      gC(e, o, n);
    else {
      const l = Jr(t.getMarker(), lC(t));
      uC(l, t, o, n), e.insertAfter(l), Uc(l) ? l.remove() : c = l;
    }
  i && !a && pC(t, n), Uc(t) && fC(t, c);
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
  if (D(e)) {
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
function Fc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Wd(e) {
  return /^\s/.test(e);
}
function nu(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Wd(t) || !Wd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function ma(e, t, r) {
  return r.wantsRun ? nu(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : xC(t);
}
function TC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return nu(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Mg(e, t) {
  return !Fc(e.scanPieces(t));
}
function Ys(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!ma(e, n, r))
    return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || wo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function CC(e, t, r, n) {
  return !r.wantsRun || Fc(n) || sk(Ts) ? !1 : gn().getEditorState().read(() => {
    const i = ne(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Fc(e.scanPieces(i));
  });
}
function _C(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Hd(e) {
  const t = Me(e);
  return Nt(t, ue, "attribute"), t;
}
function SC(e, t, r) {
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
  const l = SC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = yt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : M(d) ? nu(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Hd(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(yt(a === "selfClosing" ? "" : o(t), a));
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
        _C(i);
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
  if (R(e) || ze(e) || nn(e))
    return !0;
  const t = oe(e, ue);
  return t === "attribute" || t === Dr;
}
function iu(e, t) {
  return R(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && en(e) && z(e.getParent())) : !1;
}
function EC() {
  const e = w();
  return P(e) ? iu(e.focus.getNode(), e.focus.offset) : !1;
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
function su(e) {
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
class Xi extends br {
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
  return Ze(new Xi(e));
}
function Ps(e) {
  return e instanceof Xi;
}
function RC(e) {
  return e?.type === Ro;
}
const $C = [
  Kt,
  Ur,
  Wt,
  xt,
  Te,
  $e,
  mr,
  zr,
  ai,
  Qr,
  rn,
  ut,
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
  Zr,
  {
    replace: Ml,
    with: () => fr(),
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
    return wr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: wr(r)?.category ?? C.Uncategorized,
      type: qC[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: wr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Zd(e, t, r) {
  const n = {
    type: gr,
    version: hr,
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
    return ou().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Mc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ni(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Mc, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? rr(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      vo + this.getNumber() + vo
    );
    return E(DC, { nodeKey: this.getKey(), text: t });
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
  return E("span", { className: r ? LC : void 0, children: t });
}
function UC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: ou(t) };
}
function ou(e, t, r, n, i, s) {
  return Ze(new It(e, t, r, n, i, s));
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
function ye(e) {
  return ze(e) || li(e);
}
function wg(e) {
  return Fh(e) || zC(e);
}
function KC(e) {
  return BC(e).find((t) => le(t));
}
function BC(e) {
  return e.some(Ps) ? e.flatMap((t) => Ps(t) ? t.getChildren() : t) : e;
}
function ya(e) {
  return D(e) ? Ps(e) ? e.getChildren().flatMap(ya) : e.getChildren() : [];
}
function jC(e, t) {
  return ya(e).find((i) => ye(i) && Gl(t, i.getNumber()));
}
function VC(e, t) {
  return t === 0 ? KC(e) : e.map((r) => jC(r, t)).filter((r) => r)[0];
}
function qo(e) {
  return ya(e).find((r) => ye(r));
}
function Og(e, t) {
  if (!D(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ye(i))
      return i;
  }
}
function WC(e) {
  const t = e.getParent();
  if (t && D(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ye(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Qe(r); ) {
    const n = qo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Io(e) {
  return ya(e).findLast((t) => ye(t));
}
function HC(e) {
  if (!ze(e))
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
  if (r === n && D(r)) {
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
function Qa(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function YC(e) {
  const t = qc(e);
  if (!(!t || Qe(t)))
    return ye(t) ? t : Io(t) ?? lu(t);
}
function XC(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return Qa(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (JC(e, t)) {
    const i = YC(e);
    return i ? Qa(i) : { verseNum: n };
  }
  return Qa(e);
}
function QC(e) {
  return nT(e) || li(e);
}
function au(e) {
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
function zc(e, t) {
  return e.getEditorState().read(() => !ne(t));
}
function ZC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = cu(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && D(i) && D(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && D(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (ye(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = ef(i);
      for (; s && !Qe(s); ) {
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
      if (s = s.getNextSibling(), s && Qe(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function e_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = cu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && D(i) && (n = Og(i, r.getIndexWithinParent())), !n && i) {
      let o = tf(i);
      for (; o && !Qe(o); ) {
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
    for (; s && !Qe(s); ) {
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
function cu(e, t) {
  if (D(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ye(n))
      return n;
    const i = Og(e, t.anchor.offset);
    if (i)
      return i;
    const s = qo(e);
    if (s)
      return s;
  }
  return lu(e);
}
function lu(e) {
  if (!e || Qe(e))
    return;
  if (ye(e))
    return e;
  let t = qc(e);
  for (; t; ) {
    if (Qe(t))
      return;
    if (ye(t))
      return t;
    const r = Io(t);
    if (r)
      return r;
    t = qc(t);
  }
}
const t_ = ["style"], r_ = ["style", "code"], Lo = ["style", "cid"], n_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], i_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], s_ = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], o_ = ["style", "caller", "category", "contents"], a_ = ["tag", "marker", "contents"], c_ = [
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
function l_(e, t) {
  const r = ne(e);
  if (!Vt(r))
    return;
  const n = uu(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function uu(e, t = "delta-doc") {
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
      if (Xr(l) || Vt(l))
        return n;
      we(l) && (a = l);
    }
    if (we(l) && (i.includes(l) || i.push(l)), $g(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += du(l, t);
  }
  if (a)
    return n;
}
function rf(e, t, r = "delta-doc") {
  if (e.length < 2 || !f_(e[0]) || !d_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => u_(n, r)?.getKey());
}
function u_(e, t = "delta-doc") {
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
    if (we(a) && (i.includes(a) || i.push(a)), $g(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = du(a, t);
    if (Xr(a) && l > 0 && e >= n && e < n + l || Vt(a) && n === e)
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
function Xr(e) {
  return M(e) && !Vt(e);
}
function Vt(e) {
  return Qe(e) || ye(e) || tt(e) || B(e) || xe(e) || nn(e);
}
function fn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function d_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && c_.includes(t);
}
function f_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function $g(e, t) {
  return B(e) || xe(e) ? !0 : t === "apply" && D(e) && Vt(e);
}
function qg(e) {
  const t = e.getParent();
  return Ct(e) && le(t) && t.getFirstChild() === e;
}
function Kc(e) {
  const t = e.getParent();
  return t !== null && Ne(t, Ke) !== null;
}
function p_(e) {
  const t = e.getParent();
  return z(t) && e.getTextContent() === ir && t.getChildrenSize() === 1;
}
function h_(e) {
  const t = e.getParent();
  if (!B(t))
    return !1;
  const r = e.getPreviousSibling();
  return R(r) && r === t.getFirstChild() && e.getTextContent() === jt(t.getCaller());
}
function g_(e) {
  return !gg(e) && du(e, "delta-doc") === e.getTextContentSize();
}
function du(e, t) {
  if (Vt(e))
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
    (Vs(e) || qg(e) || oe(e, ue) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    oe(e, ue) === "attribute" || Kc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith($l) || p_(e) || h_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Bc(e, t) {
  const r = { insert: e.__text }, n = oe(e, bn);
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
    if (n.length === 1 && Rr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = m_();
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
function m_() {
  return ba();
}
function sf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return y_(e, a, n), b_(e, a, i, s, o), k_(e, t, r, i, o, s, a), Qe(e) && a.push(__(e)), ye(e) && a.push(v_(e)), tt(e) && a.push(M_(e)), nn(e) && a.push(E_(e)), T_(e, a, s), x_(e, a, s), w_(c, s), a;
}
function y_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Ce(n) ? t.push(C_(n)) : le(n) ? t.push(S_(n)) : Rr(n) && t.push({ insert: Ns });
  }
  we(e) && (r.includes(e) || r.push(e));
}
function b_(e, t, r, n, i) {
  if (!M(e) || ze(e) || nn(e))
    return;
  const s = e.getParent();
  if (B(s) && s.getFirstChild() === e)
    return;
  const o = Bt(e) !== void 0;
  if (R(e) && (o || qg(e) || Kc(e) || gg(e)) || oe(e, ue) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (js(a))
    return;
  const c = e.getPreviousSibling();
  if (B(s) && R(c) && c === s.getFirstChild() && a === jt(s.getCaller()))
    return;
  const l = z(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(pa(e)));
  const u = a.startsWith($l) || oe(e, ue) === "attribute" || Kc(e), d = !!l && a === ir && l.getChildrenSize() === 1, f = ka(e, n), p = f ? r.filter((y) => f.children.includes(y)) : r, h = Bc(e, p);
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
function k_(e, t, r, n, i, s, o) {
  z(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Ui(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = P_(c), u = ka(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function x_(e, t, r) {
  if (!B(e))
    return;
  const n = A_(e), i = ka(e, r), s = {
    node: e,
    children: oi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function T_(e, t, r) {
  if (!xe(e))
    return;
  const n = N_(e), i = ka(e, r), s = {
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
function C_(e) {
  const t = { style: Ss, code: e.__code };
  return En(t, e), { insert: Ns, attributes: { book: t } };
}
function __(e) {
  const t = { style: Po, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), En(t, e), { insert: { chapter: t } };
}
function S_(e) {
  const t = { style: e.__marker };
  return En(t, e), { insert: Ns, attributes: { para: t } };
}
function v_(e) {
  const t = { style: No, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), En(t, e), { insert: { verse: t } };
}
function M_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), En(t, e), { insert: { milestone: t } };
}
function E_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function A_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), En(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = oe(e, bn);
  return n && (r.attributes = { segment: n }), r;
}
function P_(e) {
  const t = { insert: "" }, r = Ig([e]);
  return r && (t.attributes = { char: r }), t;
}
function N_(e) {
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
function w_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Ui(t[r].node, e) && t.splice(r, 1);
}
function Ig(e) {
  if (e.length === 0)
    return;
  const t = e.map(O_);
  return t.length === 1 ? t[0] : t;
}
function O_(e) {
  const t = { style: e.__marker }, r = oe(e, Jn);
  return r && (t.cid = r), En(t, e), t;
}
function fu(e) {
  let t = 0;
  for (const { node: r } of oa())
    if (B(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function R_(e) {
  let t = 0;
  for (const { node: r } of oa())
    if (B(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const Lg = 1;
class pr extends zs {
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
    return new pr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => q_(t) ? {
        conversion: $_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return pu().updateFromJSON(t);
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => I_(t, n), (l) => L_(t, n, s, l), () => D_(t, n), () => U_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return E("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === xs && i ? (
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
function $_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: pu(t, r) };
}
function pu(e, t, r) {
  return Ze(new pr(e, t, r));
}
function q_(e) {
  return e ? e.classList.contains(pr.getType()) : !1;
}
function bt(e) {
  return e instanceof pr;
}
function I_(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!B(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function L_(e, t, r, n) {
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
function D_(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!B(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return ba(r);
  });
}
function U_(e, t) {
  return e.getEditorState().read(() => fu(t));
}
const F_ = [
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
], z_ = ["†"];
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
  return a.anchor = dr(n.getKey(), i, cf(n)), a.focus = dr(s.getKey(), o, cf(s)), a;
}
function hu() {
  if (Dg())
    return;
  const e = w();
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
      if (!r || !D(r))
        return [void 0, void 0];
      const i = Hi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : yT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && D(r) ? [r, bT(r, e.offset)] : [void 0, void 0];
  }
  if (Xb(e) || Qb(e)) {
    const t = is(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (D(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && D(r) ? [r, 0] : [void 0, void 0];
  }
  if (Zb(e)) {
    const t = is(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (D(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && D(r) ? [r, 0] : [void 0, void 0];
  }
  if (ek(e)) {
    const t = is(e.jsonPath);
    if (!t || !D(t))
      return [void 0, void 0];
    const r = Za(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && M(n) ? [n, 0] : [void 0, void 0];
  }
  if (tk(e)) {
    const t = is(e.jsonPath);
    if (!t || !D(t))
      return [void 0, void 0];
    const r = Za(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && M(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (rk(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = is(e.jsonPath);
    if (!n || !D(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = Za(n, "opening");
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
  if (!xr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !D(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function cf(e) {
  return D(e) ? "element" : "text";
}
function Za(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (R(n) && n.getMarkerSyntax() === t || t === "closing" && R(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (xr(n)) {
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
    if (!i || !D(i))
      return;
    const o = Hi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Do(e, t) {
  if (R(e)) {
    const r = e.getMarkerSyntax(), n = K_(e), i = n ? wn(qn(n)) : wn(qn(e));
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
  if (ve(e)) {
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
  if (D(e)) {
    const r = e.getChildAtIndex(t);
    if (xr(r)) {
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
function K_(e) {
  const t = e.getParent();
  if (!t || !D(t))
    return;
  const r = B_(e);
  return r && !we(r) && !M(r) && !ve(r) ? r : t;
}
function B_(e) {
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
function j_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Ug(e, t, r, n, i, s, o) {
  if (!$e.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? xa(r) : w();
  if (!P(a))
    return;
  const c = H_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? j_(e, s), u = Fg(e, l, c, i, s, void 0, void 0);
  return W_(u, a, i), u;
}
function gu(e) {
  return e !== "expanded";
}
function V_(e) {
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
function W_(e, t, r) {
  const n = gu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || oT(t), su(t);
  const i = V_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(z)?.selectEnd();
}
function Ci(e, t, r) {
  const n = Jr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(yt(e)) : r?.markerMode === "visible" && n.append(Gr("marker", Be(e)));
  const s = t === "" ? ir : i ? U + t : t;
  return n.append(Me(s)), n;
}
function H_(e, t, r, n, i, s) {
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
  const a = o === "false", c = a ? !1 : gu(n?.noteMode), l = Dl(e, t, c);
  s && Nt(l, bn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = yt(e), u && d.setMode("token"), a || (f = yt(e, "closing"))) : n?.markerMode === "visible" && (d = Gr("marker", Be(e) + " "), a || (f = Gr("marker", it(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    p = Me(jt(l.__caller)), u && p.setMode("token"), l.append(p, ...r);
  else {
    const h = () => Hs(), g = r.flatMap(tS(h));
    if (t === "")
      l.append(...g);
    else {
      const y = Wl(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = pu(l.__caller, y, k), l.append(p, h(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Mr(e) {
  if (typeof e == "string") {
    const t = ne(e);
    return B(t) ? t : void 0;
  }
  return R_(e);
}
function jc(e, t) {
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
      G_(i);
    else {
      const s = mu(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function mu(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return R(r) && r.getMarkerSyntax() === "closing" || xr(r) && r.getTextContent() === it(e.getMarker()) ? t : -1;
}
function G_(e) {
  const t = mu(e);
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
  n.canBeEmpty() ? n.select(i, i) : yu(n, i, { announce: !t });
}
function yu(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!B(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = mn();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Pr(i), r && gn().dispatchCommand(Ft, void 0);
}
function lf(e, t, r) {
  const n = Yr(e), i = J_(e, n);
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
function J_(e, t) {
  const r = [];
  for (const { node: n } of oi(e))
    !M(n) || Ne(n, Ke) || (bu(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: pa(n) }) : Y_(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function Y_(e, t) {
  return nn(e) ? !0 : R(e) && !t.is(e.getParent());
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
    const i = n.getPreviousSibling(), s = D(i) ? i.getLastDescendant() : i;
    if (M(s) && (t?.is(s) || bu(s, t)))
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
      return X_(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function X_(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function Q_(e, t, r) {
  const { opener: n, value: i, closer: s } = Xl(e);
  if (!i)
    return !1;
  const o = Z_(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = Yr(e);
    if (Bg(c, t, r, Kg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function Z_(e) {
  return e.getTextContent().startsWith(U) ? U.length : 0;
}
function bu(e, t) {
  return !M(e) || Ws(e) || Xs(e) ? !1 : !t || !e.is(t);
}
function eS(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(z))
    return;
  const t = Yr(e);
  for (const { node: n } of oi(e))
    if (bu(n, t))
      return;
  const r = mu(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function tS(e) {
  return (t) => zt(t) ? [t] : [t, e()];
}
function rS(e) {
  const t = e.getParent();
  return t !== null && Ne(t, B) !== null;
}
function uf(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = El(e);
  let a = "";
  for (const c of t)
    if (!(B(c) || bt(c) || rS(c)) && !R(c) && !nn(c) && oe(c, ue) !== "attribute") {
      if (ye(c)) {
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
const ku = [
  pr,
  It,
  ...$C
], nS = [
  Xi,
  ...ku
], iS = Mn((e, t) => {
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
function sS() {
  const [e, t] = ge(void 0), [r, n] = ge(), i = Q(null), s = be((a, c) => {
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
  }, []), o = be(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function oS({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = sS();
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
const aS = jb(iS);
function jg({ isOpen: e = !1, children: t }) {
  const r = Q(null), { coords: n, placement: i } = oS({ isOpen: e, floatingBoxRef: r }), s = Ye(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Un(
    E(aS, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Vg = Lp(void 0);
function xu() {
  const e = Dp(Vg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function cS(e, t) {
  const [r, n] = ge(0), [i, s] = ge(-1), o = Ye(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = be(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = be(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = be(() => {
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
function lS({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = cS(t, r);
  return E(Vg.Provider, { value: i, children: E("div", { ...n, children: e }) });
}
const Wg = Mn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = xu(), u = be((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = be((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return E("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function uS({ children: e, autoIndex: t = !0, ...r }) {
  const n = Q(null), { state: { activeIndex: i, menuItems: s } } = xu(), o = Ye(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ye(() => {
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
  }, [i]), E("div", { ref: n, role: "menu", ...r, children: a });
}
const dS = (e, t, r) => ko(e, r).toLowerCase().includes(t.toLowerCase()), df = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", ko = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function fS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? df(r[0]) : "") : (u = n || (r.length > 0 ? df(r[0]) : ""), d = (h, g) => dS(h, g, u));
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
const ec = {
  Root: lS,
  Options: uS,
  Option: Wg
};
function pS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ye(() => fS({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function hS() {
  const { moveUp: e, moveDown: t, select: r } = xu();
  return Ye(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const gS = () => {
  const e = hS(), [t] = ce();
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
    return t.registerCommand(kr, r, Ae);
  }, [t, e]);
};
function mS() {
  return gS(), null;
}
const yS = ["Shift", "Control", "Alt", "Meta"];
function Hg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ce(), u = s !== void 0, [d, f] = ge(""), p = u ? s ?? "" : d, h = pS({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(kr, (y) => {
    if (u || c?.includes(y.key) || yS.includes(y.key))
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
  }, Ae), [l, u, p, o, n, c]), Pe(ec.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => g(y), children: [!u && E("input", { value: p, type: "text", disabled: !0 }), E(mS, {}), E(ec.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((b, T) => Pe(ec.Option, { index: T, children: [E("span", { className: "label", children: b.label ?? b.name }), E("span", { className: "description", children: b.description })] }, b.name)) })] });
}
function bS({ trigger: e, items: t }) {
  const [r] = ce(), [n, i] = ge(!1), s = be((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = w();
      if (P(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !P(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && E(jg, { isOpen: n, children: ({ placement: o }) => E(Hg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function kS({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Ye(() => {
    if (!t || !e)
      return;
    const i = wr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = wr(o), { action: c } = r(o, a);
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
function xS(e, t) {
  j(() => {
    if (!e.hasNodes([ct]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Re(Zp(e, ct, (n) => _s(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], h = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, h, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(ct, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ne(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : ve(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!ct.isReservedType(c))
              for (const u of l) {
                let d = t.get(ys(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(ys(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(ys(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const TS = Mn(function({ logger: t }, r) {
  const [n] = ce(), i = Ye(() => /* @__PURE__ */ new Map(), []);
  xS(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(ys(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = ne(u);
        ve(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Ao(d));
      }
  };
  return ra(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (ct.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = xa(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Ch(p, a, c, l, u, d, f);
      }, { tag: Ec });
    },
    removeAnnotation(o, a) {
      if (ct.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(ys(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ec });
    }
  })), null;
}), CS = [];
function _S({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = CS, onChange: n }) {
  const [i] = ce();
  return Fs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Al) && !u.has(lh) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = SS(i, s);
        d.length !== 0 && n(o, i, u, d, l);
      });
  }, [i, e, t, r, n]), null;
}
function SS(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new ds();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ne(i), o = s !== null && Bt(s) !== void 0;
    if (t.size === 1 && M(s) && !o && g_(s)) {
      const a = uu(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = ne(i);
          return new ds([M(d) ? Bc(d) : { insert: "" }]);
        }), l = new ds([Bc(s)]), u = new ds(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = nf(r), c = nf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const Tu = "formatted", Gg = "unformatted", Jg = "paragraph-structure", Cu = "standard", Yg = "block-verse", vS = {
  [Tu]: "Formatted",
  [Gg]: "Unformatted",
  [Jg]: "Paragraph Structure",
  [Cu]: "Standard",
  [Yg]: "Block Verse"
};
function ui(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let _u, Su;
function MS(e) {
  const t = vu(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  _u = e, Su = t;
}
MS(Tu);
const Sw = () => _u, Ta = () => Su;
function vu(e) {
  let t;
  switch (e ?? _u) {
    case Tu:
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
    case Cu:
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
function vw(e) {
  if (!e)
    return;
  const t = ff(e);
  return Object.keys(vS).find((r) => Yt(ff(vu(r)), t));
}
const ES = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function ff(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...ES, ...t };
}
function Qs(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function AS(e) {
  if (e)
    return ws(e) ? It : e.markerMode === "editable" ? xt : It;
}
function ws(e) {
  return e?.verseLayout === "block";
}
function PS(e) {
  const t = [], r = e ?? Su;
  return r && (t.push(`${Gk}${r.markerMode}`), r.hasSpacing && t.push(Wk), r.isFormattedFont && t.push(Hk)), t;
}
function NS(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += wS(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), RS(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += $S(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), IS(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function wS(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), OS(t, e.retain, e.attributes, r, n)), e.retain);
}
function OS(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Fe();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Xr(u)) {
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
              let A;
              Array.isArray(T) ? a >= 0 && a <= T.length - 1 && (A = T[a]) : a === 0 && (A = T);
              const _ = A ? Yn(A, b) : !1;
              if (_ && Array.isArray(T) && T.length > 1) {
                const O = Me("");
                g.replace(O);
                const $ = typeof r.segment == "string" ? r.segment : void 0, K = Qi(T.slice(1), n, g, $);
                let S = O;
                for (const G of K)
                  S.insertAfter(G), S = G;
                O.remove(), Xt(r, g);
              } else if (_)
                Xt(r, g);
              else {
                g.remove();
                const O = pf(g, r, n, i);
                if (O && O.length > 0) {
                  let $ = b;
                  for (const K of O)
                    $.insertAfter(K), $ = K;
                }
              }
            } else {
              const T = Me("");
              g.replace(T);
              const A = pf(g, r, n, i);
              if (A && A.length > 0) {
                let _ = T;
                for (const O of A)
                  _.insertAfter(O), _ = O;
                T.remove();
              } else
                T.replace(g);
            }
          } else
            Xt(r, g);
          s -= h;
        }
      }
      o += d;
    } else if (Vt(u))
      e <= o && o < e + t && s > 0 && (hf(u, r), s -= 1), o += 1;
    else if (z(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (xn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Vc(u, p.style), typeof p.cid == "string" && Nt(u, Jn, () => p.cid);
            const h = We(p, Lo);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || VS(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && vc(u), !0;
        }
      }
      d && vc(u), a -= 1;
    } else if (we(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Rr(u))
          hf(u, r);
        else if (Mu(r)) {
          const p = Zg(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (D(u)) {
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
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Xt(t, e);
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Xt(t, e), s;
}
function Xg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  R(r) ? (r.setMarker(t), r.setTextContent(Be(t))) : zt(r) && r.getTextType() === "marker" && r.setTextContent(Be(t) + U);
}
function Vc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    R(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = z(e.getParent()), i = e.getFirstChild();
  zt(i) && i.getTextType() === "marker" && i.getTextContent() === Be(r, n) && i.setTextContent(Be(t, n));
  const s = e.getLastChild();
  zt(s) && s.getTextType() === "marker" && s.getTextContent() === it(r, n) && s.setTextContent(it(t, n));
}
function hf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && z(e) && xn(t)) {
      const i = Wc(n);
      if (Vc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Nt(e, Jn, () => o);
      }
      const s = We(i, Lo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Qe(e) || ye(e) || tt(e) || B(e) || xe(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Ce(e) || le(e) || z(e)) && (r === "style" && le(e) ? Xg(e, n) : r === "style" && z(e) ? Vc(e, n) : r === "code" && Ce(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Nt(e, bn, () => n));
  }
}
function RS(e, t, r) {
  if (t <= 0)
    return;
  const n = Fe();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Xr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Vt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (we(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && we(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(fr(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && lt(p)) {
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
              Xr(k) ? h += k.getTextContentSize() : Vt(k) && (h += 1), i = b;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(fr(), !0);
        } else le(a) ? a.replace(fr(), !0) : a.remove();
      }
      i += 1;
    } else if (D(a)) {
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
function $S(e, t, r, n, i) {
  if (t === Ns)
    return gf(e, r, n, i);
  if (t.endsWith(Ns) && !Mu(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (xn(r))
        throw new Error("Text + LF should not have char attributes");
      o += Uo(e, s, r, i);
    }
    return o += gf(e + o, r, n, i), o;
  } else return xn(r) ? qS(e, t, r, n, i) : Uo(e, t, r, i);
}
function qS(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Me(t === "" ? ir : t);
  Xt(r, s);
  let o;
  {
    let y = function(k) {
      if (Xr(k)) {
        const b = k.getTextContentSize();
        if (e >= g && e < g + b) {
          const T = k.getParent();
          return z(T) && (o = T), !0;
        }
        g += b;
      } else if (Vt(k))
        g += 1;
      else if (z(k)) {
        const b = k.getChildren();
        for (const T of b)
          if (y(T))
            return !0;
      } else if (D(k)) {
        const b = k.getChildren();
        for (const T of b)
          if (y(T))
            return !0;
        we(k) && (g += 1);
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
    if (Xr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = Me(t);
        if (Xt(r, d), u === 0)
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
    } else if (Vt(c))
      s += 1;
    else if (z(c)) {
      if (!o && e === s) {
        const d = Me(t);
        Xt(r, d);
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
        const d = Me(t);
        return Xt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (we(c)) {
      if (!o && e === s) {
        const d = Me(t);
        Xt(r, d);
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
        const d = Me(t);
        return Xt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (D(c)) {
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
    const c = Me(t);
    Xt(r, c);
    const l = fr().append(c);
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
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(fr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!D(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (lt(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(fr().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Xr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Vt(l))
        i += 1;
      else if (z(l)) {
        if (o(l))
          return !0;
      } else if (we(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (Rr(u) && we(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (D(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return D(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(fr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      lt(a) ? Rr(a) && le(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !lt(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (z(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !lt(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function IS(e, t, r, n, i) {
  let s;
  return fn("chapter", t) ? s = DS(t.insert.chapter, r) : fn("verse", t) ? s = US(t.insert.verse, r) : fn("ms", t) ? s = FS(t.insert.ms) : fn("note", t) ? s = em(t, r, n) : fn("unknown", t) ? s = tm(t, r, n, i) : fn("unmatched", t) && (s = KS(t.insert.unmatched, r)), s ? Qg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function gf(e, t, r, n) {
  let i;
  Mu(t) ? i = Zg(t.para, r) : jS(t) && (i = LS(t.book)), i ??= fr();
  const s = i, o = le(s), a = Rr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Xr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (le(p) && (o || a)) {
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
    } else if (Vt(d))
      c += 1;
    else if (we(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Rr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (le(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && le(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (D(d)) {
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
function LS(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Ss || !r || !Kt.isValidBookCode(r))
    return;
  const n = We(e, r_);
  return Eh(r, n);
}
function Zg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = We(e, t_), i = qi(r, n);
  if (!ui(t))
    return i;
  if (t.markerMode === "editable")
    i.append(yt(r), Hs());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Be(r) + U;
    i.append(t.hasGutterParaMarkers ? Tx(s) : Gr("marker", s));
  }
  return i;
}
function DS(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = We(e, n_);
  let a;
  if (t.markerMode === "editable")
    a = Ph(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Bl(r, c, n, i, s, o);
  }
  return a;
}
function US(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = We(e, i_);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = rr(r, n);
    c = Uh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = ou(n, l, i, s, o, a);
  }
  return c;
}
function FS(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = We(e, s_);
  return fh(t, r, n, s, i);
}
function em(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = We(n.note, o_), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let d;
  u && typeof u == "string" && (d = u);
  const f = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (xn(h.attributes)) {
        const g = Qi(h.attributes.char, t, Me(h.insert), void 0, rm(h.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...g);
      } else
        f.push(Me(h.insert));
  return Fg(i, s, f, t, r, d, l).setCategory(o).setUnknownAttributes(c);
}
function tm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = We(i, a_), l = zl(s, o, c), u = a?.ops ?? [];
  u.length > 0 && zS(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Nt(l, bn, () => d), l;
}
function zS(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (xn(s.attributes)) {
        const o = Me(s.insert), a = Qi(s.attributes.char, t, o, void 0, rm(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Me(s.insert));
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
function KS(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = ru(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function rm(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Wc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Qi(e, t, r, n, i, s = !1, o = !1) {
  M(r) && r.getTextContentSize() === 0 && r.setTextContent(ir);
  const a = () => {
    o && M(r) && r.getTextContent() !== ir && r.setTextContent(U + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Wc), l = c[0], u = i?.[i.length - 1];
    if (z(u) && Yn(l, u)) {
      if (c.length > 1) {
        const f = Qi(c.slice(1), t, r, void 0, void 0, !0, o);
        tc(u, f);
      } else
        r && tc(u, [r]);
      return [];
    }
    a();
    const d = c.reduceRight((f, p, h) => {
      const g = Jr(p.style, We(p, Lo));
      return typeof p.cid == "string" && Nt(g, Jn, () => p.cid), n && h === c.length - 1 && Nt(g, bn, () => n), f && (z(f) && (nc(f.getMarker(), f, t, !0), rc(f, f, t, !0)), g.append(f)), g;
    }, r);
    return nc(l.style, d, t, s), rc(d, d, t, s), [d];
  } else {
    const c = Wc(e), l = i?.[i.length - 1];
    if (z(l) && Yn(c, l))
      return r && tc(l, [r]), [];
    a();
    const u = Jr(c.style, We(c, Lo));
    return typeof c.cid == "string" && Nt(u, Jn, () => c.cid), n && Nt(u, bn, () => n), r && u.append(r), nc(c.style, u, t, s), rc(u, u, t, s), [u];
  }
}
function tc(e, t) {
  const r = e.getLastChild();
  R(r) && r.getMarkerSyntax() === "closing" || zt(r) && r.getTextType() === "marker" && r.getTextContent() === it(e.getMarker(), z(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function rc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && BS(e.getMarker(), t, r, !1, n);
}
function nc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = yt(e, "opening", n) : r?.markerMode === "visible" && (i = Gr("marker", Be(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function BS(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = yt("", "selfClosing") : s = yt(e, "closing", i) : r?.markerMode === "visible" && (s = Gr("marker", n ? it("") : it(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function jS(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Mu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function xn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function VS(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Xt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Nt(t, bn, () => n);
        continue;
      }
      if (WS(r)) {
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
function WS(e) {
  return nm.includes(e);
}
function Fi(e) {
  return zt(e) && Ce(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function im(e) {
  const t = Js(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function Eu(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(Nl(r) && t.offset === 0 || Ce(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Fi);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Ce(s))
    return !1;
  const o = im(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function xo(e) {
  const t = w();
  if (!P(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : M(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? Bh(t) : Vl(t);
    return Fi(n);
  }
  return Eu(t) && t.isCollapsed();
}
function HS(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = Ne(t.anchor.getNode(), Ce);
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
  const e = w();
  return P(e) && Eu(e), !1;
}
function GS() {
  const e = w();
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !Ce(r) || !Fi(r.getFirstChild()) ? !1 : (sr(r, 1), !0);
}
function JS(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => xr(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function YS() {
  const [e] = ce();
  return j(() => e.registerCommand(sa, (t) => (XS(t), !1), Bn), [e]), j(() => Re(
    e.registerCommand(Er, xo, Ae),
    e.registerCommand($i, xo, Ae),
    e.registerCommand(jn, xo, Ae),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(jn, HS, Nr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(Vn, po, de),
    e.registerCommand(Ut, po, de),
    e.registerCommand(nr, po, de),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Pl, po, de)
  ), [e]), j(() => Re(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(Ft, () => (GS(), !1), Ae),
    e.registerNodeTransform(Kt, JS)
  ), [e]), null;
}
function XS(e) {
  if (QS(e.target))
    return;
  const t = w();
  P(t) && ZS(t);
}
function di(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Ct(t))
      r++, t = t.getNextSibling(), M(t) && t.getTextContent() === U && (r++, t = t.getNextSibling());
    else if (ye(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (sr(e, r), !0);
}
function QS(e) {
  if (!zp(e))
    return !1;
  const t = Wi(e);
  if (!Cx(t))
    return !1;
  const r = t.getParent();
  return r ? lt(r) ? di(r) : (sr(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function ZS(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ne(t.key);
  if (!we(r))
    return !1;
  const n = r.getFirstChild();
  return !xr(n) && !li(n) ? !1 : di(r);
}
function ev() {
  const [e] = ce();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !sm(r) || !Zs() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Re(
      e.registerCommand(kr, t, Ae),
      e.registerCommand(Vn, t, Ae),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(Ut, t, de),
      e.registerCommand(nr, t, de),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(wl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Wi(r.target);
        return !n || !Tn(n) ? !1 : (r.preventDefault(), !0);
      }, Ae),
      e.registerCommand(Er, t, Ae),
      e.registerCommand($i, t, Ae),
      e.registerCommand(jn, t, Ae)
    );
  }, [e]), null;
}
function sm(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Tn(e) {
  return Ne(e, Au) ?? void 0;
}
function Au(e) {
  return xe(e) || xg(e);
}
function Zs() {
  const e = w();
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
  const i = r === "up" ? e_(t) : ZC(t);
  return i && n.preventDefault(), i;
}
function iv({ viewOptions: e }) {
  const [t] = ce();
  return sv(t, e), null;
}
function sv(e, t) {
  j(() => {
    if (!e.hasNodes([Ur, It, $e]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
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
    return e.registerCommand(kr, r, Ae);
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
function Hc(e) {
  if (!z(e) || e.getMarker() !== "fp")
    return;
  const t = Bt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function av(e) {
  const t = Hc(Vl(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (sr(t, 0), !0);
}
function cv(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Hc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : bf(n);
  }
  if (t.offset === 0) {
    const n = Hc(r);
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
  if (D(t)) {
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
    if (D(t) && !t.isInline())
      return t;
}
function am(e) {
  return !!e && R(e) && Tn(e) !== void 0;
}
function zi(e) {
  return M(e) && !e.isToken() && !am(e) && e.getTextContentSize() > 0;
}
function cm(e) {
  return ii(e) ? !0 : B(e) ? e.getIsCollapsed() === !0 : M(e) ? (e.isToken() || am(e)) && e.getTextContentSize() > 0 : si(e) ? !tt(e) : !1;
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
    if (D(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Ki(n, t, r);
      continue;
    }
    if (zi(n))
      return n;
    n = Ki(n, t, r);
  }
}
function Pu(e, t, r, n, i) {
  return r === "element" && D(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Ki(e, n, i) : r === "text" && cm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Ki(e, n, i);
}
function ic(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Pu(e.node, e.offset, e.kind, "previous", t), n = Ca(r, "previous", t);
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
      return ic({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Pu(r, e.offset, e.type, t, n), s = Ca(i, t, n);
  if (!s)
    return;
  if (zi(s)) {
    const c = s.getTextContent(), l = t === "next" ? lv(c) : uv(c);
    return ic({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ic({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function lm(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = dv(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && D(i.node) ? yu(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
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
  const i = Pu(n, e.offset, e.type, t, r);
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
  yu(t, r);
}
function gv(e) {
  const t = e.anchor.getNode(), r = Vl(e);
  if (B(r) && !R(r.getFirstChild())) {
    if (we(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(lt(i) && di(i)) && i.selectStart(), !0;
      }
    } else return zt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (we(t) && B(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Tf(r), !0;
  }
  const n = r?.getParent();
  if (zt(r) && B(n) && r.is(n?.getLastChild())) {
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
  if (Ce(o) && !r)
    return !0;
  if (B(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!li(c) && !Ce(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const u = r.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (we(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = Ne(c, (u) => B(u));
    if (B(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const d = l.getIndexWithinParent();
      return u.select(d, d), !0;
    }
  }
  const a = Bt(s);
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
  return ye(t) && si(t);
}
function bv() {
  const [e] = ce();
  return kv(e), null;
}
function kv(e) {
  j(() => {
    if (!e.hasNodes([Te]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Re(
      e.registerNodeTransform(Te, Cv),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(Te, vT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(Te, lg),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(Te, (t) => As(Xn("char"), t)),
      e.registerNodeTransform(Xe, _v)
    );
  }, [e]);
}
function sc(e) {
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
  if (sc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = oe(e, Jn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (z(i) && Yn({ style: t, cid: r }, i) && Yt(n, i.getUnknownAttributes()))
    if (sc(i)) {
      if (xv(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  z(s) && Yn({ style: t, cid: r }, s) && Yt(n, s.getUnknownAttributes()) && (sc(s) ? Tv(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function _v(e) {
  const t = e.getParent();
  if (!z(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(ir)) {
    const n = w();
    if (P(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function um(e) {
  return e.replaceAll("	", " ");
}
function dm() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function fm(e) {
  const t = () => !dm();
  return Re(e.registerCommand(Wn, t, Rt), e.registerCommand(nr, t, Rt));
}
const Nu = (e) => {
  e.dispatchCommand(Wn, null);
}, wu = (e) => {
  e.dispatchCommand(nr, null);
}, Ou = (e) => {
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
    e.dispatchCommand(Ut, s);
  });
}, Ru = (e) => {
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
    e.dispatchCommand(Ut, i);
  });
};
function Sv() {
  const [e] = ce();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(yn ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Nu(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), wu(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Ru(e) : Ou(e)));
    };
    return Re(
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
  const [t] = ce();
  return j(() => Re(
    // When the backslash or forward slash key is typed.
    t.registerCommand(kr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Nr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Ut, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Nr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(wl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Nr)
  ), [t, e]), null;
}
const zo = "editor-context-menu";
function Gc(e) {
  return `${zo}-item-${e}`;
}
const Mv = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function Ev({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), E("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Gc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: E("span", { className: "text", children: i.title }) });
}
function Av({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return E("div", { className: "typeahead-popover", children: E("ul", { id: zo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => E(Ev, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
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
  const [t] = ce(), [r, n] = ge(() => !t.isEditable()), [i, s] = ge({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = ge(void 0), c = Ye(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new ss("Cut", {
        onSelect: () => {
          wu(t);
        },
        isDisabled: r
      }),
      new ss("Copy", {
        onSelect: () => {
          Nu(t);
        }
      }),
      new ss("Paste", {
        onSelect: () => {
          Ou(t);
        },
        isDisabled: r
      }),
      new ss("Paste as Plain Text", {
        onSelect: () => {
          Ru(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((h) => new ss(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = Q(null), u = Q(null), d = be(() => {
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
    f.setAttribute("aria-activedescendant", Gc(o));
    const p = document.getElementById(zo), h = document.getElementById(Gc(o));
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
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Mk.createPortal(E("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: E(Av, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
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
function oc(e, t, r) {
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
  if (w())
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
    u = oc(e, c, Ov(c)), d = u;
  else {
    const y = wv(n.getRangeAt(0), c);
    u = oc(e, c, y ? "before" : "after"), d = oc(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, h = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = Bp(h, e);
  return g ? (Pr(g), g.dirty = !t, t) : !1;
}
function qv() {
  const [e] = ce(), t = Q(!1), r = Q(!1);
  return j(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = w();
        P(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), j(() => e.registerCommand(Ft, () => ($v(e, t.current) && (r.current = !0), !1), de), [e]), null;
}
function Iv() {
  const [e] = ce();
  return j(() => e.registerCommand(kr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(yn ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, de), [e]), null;
}
function Lv({ isEditable: e }) {
  const [t] = ce();
  return Fs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function pm(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Hr(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function ac(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = w();
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
function $u(e) {
  const [t] = ce(), r = Q(void 0), n = be((i) => {
    const s = w(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Cf(a);
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
      sr(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = ne(a);
      M(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = w(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Pt(wt), Hr(t, wt), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (js(c) || !c.includes(Ii))
        return;
      const l = w(), u = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (eT(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Ii).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Re(t.registerCommand(Ft, () => (i(), !1), Bn), t.registerCommand(Ol, () => {
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
    }, Bn), t.registerNodeTransform(Xe, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function Dv() {
  const e = w();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = B(r) ? r : r.getParent();
  if (!B(n))
    return;
  const i = eS(n);
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
  return $u(Dv), null;
}
function Fv() {
  const e = w();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!D(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ye(i) || Js(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ye(s))
    return i;
}
function zv() {
  return $u(Fv), null;
}
function qu(e) {
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
  return e ? we(e) ? e : Ne(e, (r) => we(r)) ?? void 0 : void 0;
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
function Iu(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !ia(e) ? !1 : e.getNodes().some((t) => ye(t));
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
  if (D(r)) {
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
  return !!Jc(e, t);
}
function Jc(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && D(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return ye(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return ye(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return ye(i) ? i : void 0;
}
function Ko(e, t) {
  if (!P(e))
    return !1;
  const r = Cn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Fn(e) {
  return Iu(e) || hm(e);
}
function Lu(e, t) {
  if (Iu(e) || hm(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return gm(e) && Ko(e, "backward") || _f(e, "backward");
    case "deleteForward":
      return mm(e) && Ko(e, "forward") || _f(e, "forward");
    case "insertText":
      return !1;
  }
}
function Kv(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Jc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (gm(e) && Ko(e, "backward")) {
        const n = Cn(e.anchor.getNode());
        if (lt(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Jc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (mm(e) && Ko(e, "forward")) {
        const i = Cn(e.anchor.getNode())?.getNextSibling();
        if (lt(i))
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
  } else D(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function Bv(e) {
  const t = e.getPreviousSibling();
  if (!we(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = Ct(n), s = e.getChildren().filter((o) => !Fr(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? Du(r) : di(t) || t.selectStart();
}
function ym(e) {
  return ye(e) || Qe(e) ? [] : lt(e) ? e.getChildren().flatMap(ym) : [e];
}
function jv(e) {
  const t = [];
  for (const r of e) {
    const n = ym(r);
    n.length !== 0 && (lt(r) && t.length > 0 && t.push(Me(" ")), t.push(...n));
  }
  return t;
}
function Vv(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (Nl(n)) {
    const a = n.getChildAtIndex(t === "backward" ? r.offset - 1 : r.offset);
    return xe(a) ? Mf(a, t, !0) : void 0;
  }
  const i = bm(n);
  if (!i || r.type === "text" && !(t === "backward" ? r.offset === 0 : r.offset === n.getTextContentSize()))
    return;
  let s = km(e, t, i);
  const o = [];
  for (; s; ) {
    if (xe(s))
      o.push(s);
    else if (!Gv(s))
      break;
    s = Os(s, t, i);
  }
  if (o.length > 0)
    return { nodes: t === "backward" ? o.reverse() : o, placement: "inline" };
  if (t === "backward")
    for (; s && Ct(s); )
      s = Os(s, t, i);
  if (!(s || !we(i)))
    return Mf(i, t, !1);
}
function To(e) {
  if (!P(e) || e.isCollapsed())
    return [];
  const t = [];
  for (const r of e.getNodes()) {
    const n = Jv(r);
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
    xe(i) && n.push(i), i = Os(i, t, r);
  return t === "backward" ? n.reverse() : n;
}
function vf(e, t) {
  const r = e.nodes[0], n = e.nodes[e.nodes.length - 1];
  if (e.placement === "inline")
    return t === "backward" ? Yv(r) : Xv(n), !0;
  if (t === "backward") {
    const s = r.getPreviousSibling();
    return we(s) ? (Du(s), !0) : !1;
  }
  const i = n.getNextSibling();
  return we(i) ? (di(i) || i.selectStart(), !0) : !1;
}
function Hv(e) {
  return e.map((t) => {
    const r = t.getMarker();
    return r ? { tag: t.getTag(), marker: r } : { tag: t.getTag() };
  });
}
function bm(e) {
  return we(e) || B(e) ? e : Ne(e, (t) => we(t) || B(t)) ?? void 0;
}
function km(e, t, r) {
  const { anchor: n } = e, i = n.getNode();
  if (n.type === "text" || !D(i))
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
    if (xe(n) || B(n) || !D(n))
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
  for (; xe(i); )
    n.push(i), i = t === "backward" ? i.getPreviousSibling() : i.getNextSibling();
  if (n.length !== 0)
    return { nodes: t === "backward" ? n.reverse() : n, placement: "block" };
}
function Gv(e) {
  return M(e) && e.getTextContentSize() === 0;
}
function Jv(e) {
  let t = xe(e) ? e : void 0;
  for (const r of e.getParents())
    xe(r) && (t = r);
  return t;
}
function Yv(e) {
  const t = e.getPreviousSibling();
  if (M(t) && !t.isToken()) {
    const n = t.getTextContentSize();
    t.select(n, n);
    return;
  }
  const r = e.getIndexWithinParent();
  e.getParentOrThrow().select(r, r);
}
function Xv(e) {
  const t = e.getNextSibling();
  if (M(t) && !t.isToken()) {
    t.select(0, 0);
    return;
  }
  const r = e.getIndexWithinParent() + 1;
  e.getParentOrThrow().select(r, r);
}
const Qv = /* @__PURE__ */ new Set(["⁠", " "]);
function Zv({ isEnabled: e, structureProtectionMode: t = "off", copyLimit: r, onHiddenContentDelete: n }) {
  const [i] = ce(), s = Q(n), o = Q(t), a = Q(r);
  j(() => {
    s.current = n, o.current = t, a.current = r;
  }, [n, t, r]);
  const c = !!n;
  return j(() => {
    if (!e || !c)
      return;
    let l = !1, u = !1, d = !1;
    const f = (q) => {
      l = !0;
      try {
        q();
      } finally {
        l = !1;
      }
    }, p = async (q) => {
      const H = s.current;
      if (!H)
        return "keep";
      try {
        return await H(q) === "delete" ? "delete" : "keep";
      } catch {
        return "keep";
      }
    }, h = (q, H, W, re) => {
      const fe = sM(q, H), qe = { items: Hv(H), action: W };
      return u = !0, p(qe).then((Oe) => {
        u = !1, !d && i.focus(() => {
          let ht = !1;
          i.update(() => {
            ht = oM(fe), ht && (aM(fe), Oe === "keep" && re.$keep?.());
          }, {
            // Runs once the restored selection has committed: called from focus's own update,
            // this update is deferred rather than applied on the spot.
            onUpdate: () => {
              ht && Oe === "delete" && re.delete();
            }
          });
        });
      }), !0;
    }, g = (q) => {
      for (const H of q) {
        const W = ne(H);
        xe(W) && W.isAttached() && W.remove();
      }
    }, y = (q, H, W) => {
      const re = H === "backward", fe = re ? "deleteBackward" : "deleteForward", qe = Vv(q, H);
      if (qe?.placement === "block") {
        const N = qe.nodes.map((ee) => ee.getKey());
        return h(q, qe.nodes, fe, {
          $keep: () => vf(Ef(qe, N), H),
          delete: () => i.update(() => g(N), { discrete: !0 })
        });
      }
      const Oe = W === "character" ? [] : nM(i, q, H, W), ht = iM([...qe?.nodes ?? [], ...Oe]);
      if (ht.length === 0)
        return !1;
      const or = ht.map((N) => N.getKey()), on = !!qe && ht.length === qe.nodes.length, ie = qe?.nodes.map((N) => N.getKey()) ?? [];
      return h(q, ht, fe, {
        $keep: qe && on ? () => vf(Ef(qe, ie), H) : void 0,
        delete: () => {
          i.update(() => g(or), { discrete: !0 }), W !== "character" && f(() => i.dispatchCommand(tM(W), re));
        }
      });
    }, k = (q, H) => {
      const W = To(q);
      return W.length === 0 ? !1 : h(q, W, "replaceSelection", {
        delete: () => f(H)
      });
    }, b = () => {
      if (l)
        return;
      const q = w();
      if (!(!P(q) || Zs()))
        return q;
    }, T = (q) => {
      if (l)
        return !1;
      const H = qu(q), W = H === "deleteBackward" || H === "deleteForward";
      if (u)
        return !W && !sm(q) ? !1 : (q.preventDefault(), !0);
      if (!W || !yn && q.key === "Delete" && q.shiftKey)
        return !1;
      const re = b();
      if (!re || o.current === "protected" && Lu(re, H))
        return !1;
      const fe = H === "deleteBackward", qe = re.isCollapsed() ? y(re, fe ? "backward" : "forward", eM(q)) : (
        // Claimed here rather than left to DELETE_CHARACTER_COMMAND: in guarded mode
        // StructureKeyboardPlugin removes a selection holding a verse marker itself, straight
        // off the keystroke.
        k(re, () => i.dispatchCommand(Er, fe))
      );
      return qe && q.preventDefault(), qe;
    }, A = (q, H) => (W) => {
      if (u && !l)
        return !0;
      const re = b();
      return re ? re.isCollapsed() ? y(re, W ? "backward" : "forward", H) : $(re) ? !1 : k(re, () => i.dispatchCommand(q, W)) : !1;
    }, _ = (q) => (H) => {
      if (u && !l)
        return !0;
      const W = b();
      return !W || W.isCollapsed() || $(W) ? !1 : k(W, () => i.dispatchCommand(q, H));
    }, O = (q) => {
      if (u && !l)
        return !0;
      const H = b();
      if (!H || H.isCollapsed() || $(H))
        return !1;
      const W = typeof q == "string" ? q : q.data ?? q.dataTransfer?.getData("text/plain") ?? "", re = i.isComposing() && Qv.has(W);
      return k(H, () => re || W === "" ? i.dispatchCommand(Er, !0) : i.dispatchCommand(Vn, W));
    }, $ = (q) => o.current === "protected" && Fn(q), K = (q) => {
      if (l)
        return !1;
      const H = b();
      return !H || To(H).length === 0 ? !1 : _i(q);
    }, S = (q) => {
      if (u && !l)
        return _i(q);
      const H = b();
      if (!H || H.isCollapsed() || $(H))
        return !1;
      const W = rM(q), re = k(H, () => i.dispatchCommand(Ut, W));
      return re && _i(q), re;
    }, G = (q) => {
      if (u && !l)
        return _i(q);
      const H = b();
      return !H || H.isCollapsed() || $(H) || To(H).length === 0 ? !1 : a.current !== void 0 ? _i(q) : (i.dispatchCommand(Wn, q), _i(q), k(H, () => i.dispatchCommand(Er, !0)));
    };
    return Re(() => {
      d = !0;
    }, i.registerCommand(kr, T, de), i.registerCommand(Er, A(Er, "character"), de), i.registerCommand($i, A($i, "word"), de), i.registerCommand(jn, A(jn, "line"), de), i.registerCommand(Vn, O, de), i.registerCommand(Hn, _(Hn), de), i.registerCommand(Sc, _(Sc), de), i.registerCommand(jp, K, de), i.registerCommand(Pl, K, de), i.registerCommand(Ut, S, de), i.registerCommand(nr, G, de));
  }, [i, e, c]), null;
}
function eM(e) {
  return yn ? e.metaKey ? "line" : e.altKey ? "word" : "character" : e.ctrlKey ? "word" : "character";
}
function tM(e) {
  return e === "word" ? $i : e === "line" ? jn : Er;
}
function _i(e) {
  return e?.preventDefault(), !0;
}
function rM(e) {
  if (typeof ClipboardEvent > "u" || typeof DataTransfer > "u" || !(e instanceof ClipboardEvent) || !e.clipboardData)
    return e;
  const t = new DataTransfer();
  for (const r of e.clipboardData.types)
    r !== "Files" && t.setData(r, e.clipboardData.getData(r));
  return new ClipboardEvent("paste", { clipboardData: t, cancelable: !0 });
}
function nM(e, t, r, n) {
  const i = e.getRootElement()?.ownerDocument.defaultView?.getSelection();
  if (!i || typeof i.modify != "function")
    return n === "line" ? Wv(t, r) : [];
  const s = t.clone();
  return s.dirty = !0, s.modify("extend", r === "backward", n === "line" ? "lineboundary" : "word"), t.dirty = !0, To(s);
}
function iM(e) {
  return e.filter((r, n) => e.findIndex((i) => i.is(r)) === n).sort((r, n) => r.isBefore(n) ? -1 : 1);
}
function sM(e, t) {
  const r = ({ key: n, offset: i, type: s }) => ({ key: n, offset: i, type: s });
  return {
    anchor: r(e.anchor),
    focus: r(e.focus),
    hiddenKeys: t.map((n) => n.getKey()),
    text: Fe().getTextContent()
  };
}
function oM(e) {
  const t = ({ key: r, offset: n, type: i }) => {
    const s = ne(r);
    return !s || !s.isAttached() ? !1 : i === "element" ? D(s) && n <= s.getChildrenSize() : M(s) && n <= s.getTextContentSize();
  };
  return t(e.anchor) && t(e.focus) && e.hiddenKeys.every((r) => ne(r)?.isAttached()) && Fe().getTextContent() === e.text;
}
function aM(e) {
  const t = mn();
  t.anchor.set(e.anchor.key, e.anchor.offset, e.anchor.type), t.focus.set(e.focus.key, e.focus.offset, e.focus.type), Pr(t);
}
function Ef(e, t) {
  return { nodes: t.map((n) => ne(n)).filter(xe), placement: e.placement };
}
function cM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ce();
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
          u || Pt(jr), o.setEditorState(l), o.dispatchCommand(ck, void 0);
        }, { tag: ql });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const cc = "caller_highlight", lM = Mn(function(t, r) {
  const [n] = ce(), i = Q(void 0), s = Q(void 0), o = be(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const u = Mr(a);
      return u ? (u.getChildren().find(bt) ?? Yr(u))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(cc), l?.classList.add(cc), s.current = l;
  }, [n]);
  return ra(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Ei(n, () => Mr(a)?.getKey()), o();
    }
  }), [n, o]), j(() => Re(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener($e, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const d = l.has(ql) ? void 0 : c.read(() => fu(u)), f = d === void 0 ? void 0 : n.getEditorState().read(() => Mr(d)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), j(() => () => s.current?.classList.remove(cc), []), null;
});
function uM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ce();
  return dM(t, n), fM(i, e, r, n), null;
}
function dM(e, t) {
  const r = Q(void 0), n = Q(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = F_), r.current !== o && (r.current = o, Af("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = z_), n.current !== o && (n.current = o, Af("cross-ref-callers", o, t));
  }, [t, s]);
}
function fM(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([Te, $e, pr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => kM(s));
    return Re(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform($e, (s) => pM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(Te, hM),
      e.registerNodeTransform(Xe, gM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(pr, mM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(pr, (s, { prevEditorState: o }) => yM(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Ft, () => bM(e, t, r, n), Rt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function pM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => bt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    M(i) && !R(i) && i.getTextContent() !== jt(e.getCaller()) && e.insertBefore(i);
  }
}
function hM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => bt(s));
  if (!z(e) || !B(t) || !n)
    return;
  const i = Wl(r);
  n.getPreviewText() !== i && n.setPreviewText(i), _m(e);
}
function Cm(e) {
  const t = w();
  if (!P(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function _m(e) {
  const t = e.getNextSibling();
  if (M(t) && !R(t)) {
    if (t.getTextContent() === U || Cm(t))
      return;
    if (Fr(t)) {
      t.setTextContent(U);
      return;
    }
  }
  e.insertAfter(Hs());
}
function gM(e) {
  const t = Bt(e), r = t?.getChildren(), n = r?.find((a) => bt(a));
  if (!M(e) || !B(t) || !n || !r)
    return;
  const i = e.getParent(), s = Fr(e) || Cm(e);
  if (!R(e) && B(i) && s && e.getTextContent() !== U && (e.setTextContent(U), e.selectEnd()), z(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(ir) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = Wl(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function mM(e) {
  bt(e) && _m(e);
}
function yM(e, t) {
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
function bM(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Ne(o, (c) => B(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ne(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), os(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (B(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, os(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (B(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, os(e, c, n);
    } else if (!a) {
      const c = Ne(o, (l) => B(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      we(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, os(e, l, n);
      }
    }
  }
  if (lt(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (li(c) && B(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, os(e, l, n);
    }
  }
  return !1;
}
function os(e, t, r) {
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
function kM(e) {
  const t = w();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (B(i) && M(s)) {
    e.preventDefault();
    const o = mn();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Pr(o);
  }
}
function Af(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (xM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function xM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Or(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!R(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Yr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => M(n) && n.getMode() === "token") ? t : [];
}
function TM(e) {
  const t = e.getParent();
  if (B(t))
    return Or(t).some((r) => r.is(e)) ? t : void 0;
}
function ei(e) {
  const t = Or(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function CM(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function _M(e) {
  const t = lk();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ei(e);
  const i = CM(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ei(e);
}
function Ni(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = TM(t);
  if (r)
    return Sm(r, t, e.offset) ? void 0 : r;
}
function Sm(e, t, r) {
  const n = Or(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function SM(e) {
  const t = Or(e), r = t[t.length - 1];
  M(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : sr(e, ei(e));
}
function vM(e = !1) {
  const t = w();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return Am(t);
  const r = vm(t.anchor);
  if (r) {
    const i = jo(r);
    return t.anchor.is(i) ? !1 : (Mm(t, i), !0);
  }
  const n = Ni(t.anchor);
  if (!n)
    return !1;
  if (!e && _M(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    sr(i, n.getIndexWithinParent());
  } else
    SM(n);
  return !0;
}
function Bo(e) {
  const t = Or(e), r = t[t.length - 1];
  return M(r) ? dr(r.getKey(), r.getTextContentSize(), "text") : dr(e.getKey(), ei(e), "element");
}
function Bi(e) {
  const t = e.getLastChild();
  return R(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function lc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === Bi(e) && R(r) && t.offset > 0;
}
function Yc(e) {
  const t = Bi(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function jo(e) {
  const t = Bi(e);
  if (t > ei(e)) {
    const r = e.getChildAtIndex(t - 1), n = D(r) ? r.getLastDescendant() : r;
    if (M(n))
      return dr(n.getKey(), n.getTextContentSize(), "text");
  }
  return Bo(e);
}
function vm(e) {
  const t = e.getNode(), r = t.getParent();
  if (B(r) && Or(r).length > 0 && Yc(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (B(t) && Or(t).length > 0 && Yc(t))
    return e.offset > Bi(t) || e.offset === Bi(t) && e.offset > ei(t) ? t : void 0;
  if (!D(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return B(n) && Or(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function Mm(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function Em(e) {
  const t = Bt(e);
  return t && Or(t).length > 0 ? t : void 0;
}
function MM(e) {
  const t = [], r = (n) => {
    const i = Em(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function Am(e) {
  const t = MM(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => dr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const u = dr(l.getKey(), ei(l), "element"), d = dr(l.getKey(), Bi(l), "element"), f = i.type === "text" && Sm(l, i.getNode(), i.offset), p = i.isBefore(u) && !f;
    (Ni(i) || lc(l, i) || p) && (!s.isBefore(u) || Ni(s)) && (i = lc(l, i) ? jo(l) : Bo(l), o = !0), (Ni(s) || lc(l, s) || d.isBefore(s)) && (i.isBefore(d) || i.is(d)) && (s = Ni(s) ? Bo(l) : jo(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function Pf(e, t) {
  const r = mn();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function Nf(e, t) {
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
function wf(e, t, r) {
  const n = Nf(e, t), i = Nf(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function EM(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return D(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function AM(e, t, r, n) {
  const i = t.anchor, s = vm(i);
  if (s)
    return Mm(t, jo(s)), !0;
  const o = Em(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const d = EM(t.focus);
    return B(d) && Or(d).length > 0;
  }
  if (Ni(i))
    return !0;
  const a = Bo(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const d = Pf(a, i);
    return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && wf(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = Yc(o);
  if (!c)
    return !1;
  const l = dr(c.getKey(), 0, "text"), u = Pf(i, l);
  return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && wf(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function PM() {
  const [e] = ce(), t = Q(!1);
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
      const a = w();
      return !P(a) || a.isCollapsed() || !Am(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = w();
      return P(c) ? c.isCollapsed() ? AM(e, c, a, o) : i() : !1;
    };
    return Re(e.registerCommand(Vn, n, de), e.registerCommand(Ut, n, de), e.registerCommand(Hn, n, de), e.registerCommand(Sc, n, de), e.registerCommand(Er, s("character"), de), e.registerCommand($i, s("word"), de), e.registerCommand(jn, s("line"), de), e.registerCommand(Pl, i, de), e.registerCommand(nr, i, de));
  }, [e]), j(() => e.registerCommand(Ft, () => (vM(t.current) && (Pt(wt), Hr(e, wt)), !1), Bn), [e]), null;
}
function NM({ onChange: e }) {
  const [t] = ce();
  return j(() => t.registerCommand(Ft, () => {
    const r = hu();
    return e?.(r), !1;
  }, Rt), [t, e]), null;
}
function wM() {
  const [e] = ce();
  return OM(e), null;
}
function OM(e) {
  j(() => {
    if (!e.hasNodes([ut]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(ut, (t) => RM(t, e));
  }, [e]);
}
function RM(e, t) {
  zc(t, e.getKey()) && Rg(e.getFirstChild()), !(!le(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ne(e.getKey());
    return le(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Pm({ onStateChange: e }) {
  const [t] = ce(), [r, n] = ge(t), i = Q(!1), s = Q(!1), o = Q(void 0), a = Q(void 0), c = be(() => {
    const l = w();
    let u;
    if (P(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : Ne(d, (k) => {
        const b = k.getParent();
        return b !== null && uk(b);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), Ps(p) && (p = Ne(d, le) ?? p);
      const h = p.getKey(), g = r.getElementByKey(h), y = sT(d, f);
      if (y && QC(y) && (u = y.getMarker()), g !== null && (le(p) || Ce(p) || Bs(p))) {
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
  return j(() => t.registerCommand(Ft, (l, u) => (c(), n(u), !1), de), [t, c]), j(() => Re(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(dk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), de), r.registerCommand(fk, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), de)), [c, r, e]), null;
}
function Of(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $M(e) {
  if (Array.isArray(e)) return e;
}
function qM(e, t) {
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
function IM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LM(e, t) {
  return $M(e) || qM(e, t) || DM(e, t) || IM();
}
function DM(e, t) {
  if (e) {
    if (typeof e == "string") return Of(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Of(e, t) : void 0;
  }
}
const Nm = Object.entries, Rf = Object.setPrototypeOf, UM = Object.isFrozen, FM = Object.getPrototypeOf, zM = Object.getOwnPropertyDescriptor;
let dt = Object.freeze, pt = Object.seal, Ai = Object.create, wm = typeof Reflect < "u" && Reflect, Xc = wm.apply, Qc = wm.construct;
dt || (dt = function(t) {
  return t;
});
pt || (pt = function(t) {
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
const Si = nt(Array.prototype.forEach), KM = nt(Array.prototype.lastIndexOf), $f = nt(Array.prototype.pop), vi = nt(Array.prototype.push), BM = nt(Array.prototype.splice), pn = Array.isArray, fs = nt(String.prototype.toLowerCase), uc = nt(String.prototype.toString), qf = nt(String.prototype.match), as = nt(String.prototype.replace), If = nt(String.prototype.indexOf), jM = nt(String.prototype.trim), VM = nt(Number.prototype.toString), WM = nt(Boolean.prototype.toString), Lf = typeof BigInt > "u" ? null : nt(BigInt.prototype.toString), Df = typeof Symbol > "u" ? null : nt(Symbol.prototype.toString), at = nt(Object.prototype.hasOwnProperty), cs = nt(Object.prototype.toString), ot = nt(RegExp.prototype.test), In = HM(TypeError);
function nt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Xc(e, t, n);
  };
}
function HM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Qc(e, r);
  };
}
function me(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fs;
  if (Rf && Rf(e, null), !pn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (UM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function GM(e) {
  for (let t = 0; t < e.length; t++)
    at(e, t) || (e[t] = null);
  return e;
}
function mt(e) {
  const t = Ai(null);
  for (const n of Nm(e)) {
    var r = LM(n, 2);
    const i = r[0], s = r[1];
    at(e, i) && (pn(s) ? t[i] = GM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = mt(s) : t[i] = s);
  }
  return t;
}
function JM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return VM(e);
    case "boolean":
      return WM(e);
    case "bigint":
      return Lf ? Lf(e) : "0";
    case "symbol":
      return Df ? Df(e) : "Symbol()";
    case "undefined":
      return cs(e);
    case "function":
    case "object": {
      if (e === null)
        return cs(e);
      const t = e, r = cr(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : cs(n);
      }
      return cs(e);
    }
    default:
      return cs(e);
  }
}
function cr(e, t) {
  for (; e !== null; ) {
    const n = zM(e, t);
    if (n) {
      if (n.get)
        return nt(n.get);
      if (typeof n.value == "function")
        return nt(n.value);
    }
    e = FM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function YM(e) {
  try {
    return ot(e, ""), !0;
  } catch {
    return !1;
  }
}
const Uf = dt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), dc = dt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), fc = dt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), XM = dt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), pc = dt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), QM = dt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ff = dt(["#text"]), zf = dt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), hc = dt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Kf = dt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ho = dt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ZM = pt(/{{[\w\W]*|^[\w\W]*}}/g), eE = pt(/<%[\w\W]*|^[\w\W]*%>/g), tE = pt(/\${[\w\W]*/g), rE = pt(/^data-[\-\w.\u00B7-\uFFFF]+$/), nE = pt(/^aria-[\-\w]+$/), Bf = pt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), iE = pt(/^(?:\w+script|data):/i), sE = pt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), oE = pt(/^html$/i), aE = pt(/^[a-z][.\w]*(-[.\w]+)+$/i), jf = pt(/<[/\w!]/g), Vf = pt(/<[/\w]/g), cE = pt(/<\/no(script|embed|frames)/i), lE = pt(/\/>/i), Dt = {
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
}, uE = function() {
  return typeof window > "u" ? null : window;
}, dE = function(t, r) {
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
}, Wf = function() {
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
  return at(t, r) && pn(t[r]) ? me(i.base ? mt(i.base) : {}, t[r], i.transform) : n;
};
function Om() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : uE();
  const t = (V) => Om(V);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Dt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = cr(f, "cloneNode"), h = cr(f, "remove"), g = cr(f, "nextSibling"), y = cr(f, "childNodes"), k = cr(f, "parentNode"), b = cr(f, "shadowRoot"), T = cr(f, "attributes"), A = o && o.prototype ? cr(o.prototype, "nodeType") : null, _ = o && o.prototype ? cr(o.prototype, "nodeName") : null, O = o && o.prototype ? cr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const V = r.createElement("template");
    V.content && V.content.ownerDocument && (r = V.content.ownerDocument);
  }
  let $, K = "", S, G = !1, q = 0;
  const H = function() {
    if (q > 0)
      throw In('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, W = function(m) {
    H(), q++;
    try {
      return $.createHTML(m);
    } finally {
      q--;
    }
  }, re = function(m) {
    H(), q++;
    try {
      return $.createScriptURL(m);
    } finally {
      q--;
    }
  }, fe = function() {
    return G || (S = dE(d, i), G = !0), S;
  }, qe = r, Oe = qe.implementation, ht = qe.createNodeIterator, or = qe.createDocumentFragment, on = qe.getElementsByTagName, ie = n.importNode;
  let N = Wf();
  t.isSupported = typeof Nm == "function" && typeof k == "function" && Oe && Oe.createHTMLDocument !== void 0;
  const ee = ZM, he = eE, _e = tE, st = rE, gt = nE, te = iE, He = sE, Ra = aE;
  let fi = Bf, Se = null;
  const Ge = me({}, [...Uf, ...dc, ...fc, ...pc, ...Ff]);
  let pe = null;
  const St = me({}, [...zf, ...hc, ...Kf, ...ho]);
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
  })), ar = null, eo = null;
  const Ht = Object.seal(Ai(null, {
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
  let Zi = !0, Kr = !0, An = !1, to = !0, vt = !1, Gt = !0, Cr = !1, pi = !1, hi = null, Pn = null, I = !1, L = !1, J = !1, Y = !1, ke = !0, et = !1;
  const Le = "user-content-";
  let Je = !0, Mt = !1, Br = {}, Lt = null;
  const Jt = me({}, [
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
  const no = me({}, ["audio", "video", "img", "source", "image", "track"]);
  let an = null;
  const cd = me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), io = "http://www.w3.org/1998/Math/MathML", so = "http://www.w3.org/2000/svg", _r = "http://www.w3.org/1999/xhtml";
  let gi = _r, $a = !1, qa = null;
  const Ab = me({}, [io, so, _r], uc), ld = dt(["mi", "mo", "mn", "ms", "mtext"]);
  let Ia = me({}, ld);
  const ud = dt(["annotation-xml"]);
  let La = me({}, ud);
  const Pb = me({}, ["title", "style", "font", "a", "script"]);
  let es = null;
  const Nb = ["application/xhtml+xml", "text/html"], wb = "text/html";
  let je = null, mi = null;
  const Ob = r.createElement("form"), dd = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Da = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (mi && mi === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = mt(m), es = // eslint-disable-next-line unicorn/prefer-includes
    Nb.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? wb : m.PARSER_MEDIA_TYPE, je = es === "application/xhtml+xml" ? uc : fs, Se = dn(m, "ALLOWED_TAGS", Ge, {
      transform: je
    }), pe = dn(m, "ALLOWED_ATTR", St, {
      transform: je
    }), qa = dn(m, "ALLOWED_NAMESPACES", Ab, {
      transform: uc
    }), an = dn(m, "ADD_URI_SAFE_ATTR", cd, {
      transform: je,
      base: cd
    }), ro = dn(m, "ADD_DATA_URI_TAGS", no, {
      transform: je,
      base: no
    }), Lt = dn(m, "FORBID_CONTENTS", Jt, {
      transform: je
    }), ar = dn(m, "FORBID_TAGS", mt({}), {
      transform: je
    }), eo = dn(m, "FORBID_ATTR", mt({}), {
      transform: je
    }), Br = at(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? mt(m.USE_PROFILES) : m.USE_PROFILES : !1, Zi = m.ALLOW_ARIA_ATTR !== !1, Kr = m.ALLOW_DATA_ATTR !== !1, An = m.ALLOW_UNKNOWN_PROTOCOLS || !1, to = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, vt = m.SAFE_FOR_TEMPLATES || !1, Gt = m.SAFE_FOR_XML !== !1, Cr = m.WHOLE_DOCUMENT || !1, L = m.RETURN_DOM || !1, J = m.RETURN_DOM_FRAGMENT || !1, Y = m.RETURN_TRUSTED_TYPE || !1, I = m.FORCE_BODY || !1, ke = m.SANITIZE_DOM !== !1, et = m.SANITIZE_NAMED_PROPS || !1, Je = m.KEEP_CONTENT !== !1, Mt = m.IN_PLACE || !1, fi = YM(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Bf, gi = typeof m.NAMESPACE == "string" ? m.NAMESPACE : _r, Ia = at(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? mt(m.MATHML_TEXT_INTEGRATION_POINTS) : me({}, ld), La = at(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? mt(m.HTML_INTEGRATION_POINTS) : me({}, ud);
    const v = at(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? mt(m.CUSTOM_ELEMENT_HANDLING) : Ai(null);
    if (Ie = Ai(null), at(v, "tagNameCheck") && dd(v.tagNameCheck) && (Ie.tagNameCheck = v.tagNameCheck), at(v, "attributeNameCheck") && dd(v.attributeNameCheck) && (Ie.attributeNameCheck = v.attributeNameCheck), at(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (Ie.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), pt(Ie), vt && (Kr = !1), J && (L = !0), Br && (Se = me({}, Ff), pe = Ai(null), Br.html === !0 && (me(Se, Uf), me(pe, zf)), Br.svg === !0 && (me(Se, dc), me(pe, hc), me(pe, ho)), Br.svgFilters === !0 && (me(Se, fc), me(pe, hc), me(pe, ho)), Br.mathMl === !0 && (me(Se, pc), me(pe, Kf), me(pe, ho))), Ht.tagCheck = null, Ht.attributeCheck = null, at(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Ht.tagCheck = m.ADD_TAGS : pn(m.ADD_TAGS) && (Se === Ge && (Se = mt(Se)), me(Se, m.ADD_TAGS, je))), at(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Ht.attributeCheck = m.ADD_ATTR : pn(m.ADD_ATTR) && (pe === St && (pe = mt(pe)), me(pe, m.ADD_ATTR, je))), at(m, "ADD_URI_SAFE_ATTR") && pn(m.ADD_URI_SAFE_ATTR) && me(an, m.ADD_URI_SAFE_ATTR, je), at(m, "FORBID_CONTENTS") && pn(m.FORBID_CONTENTS) && (Lt === Jt && (Lt = mt(Lt)), me(Lt, m.FORBID_CONTENTS, je)), at(m, "ADD_FORBID_CONTENTS") && pn(m.ADD_FORBID_CONTENTS) && (Lt === Jt && (Lt = mt(Lt)), me(Lt, m.ADD_FORBID_CONTENTS, je)), Je && (Se["#text"] = !0), Cr && me(Se, ["html", "head", "body"]), Se.table && (me(Se, ["tbody"]), delete ar.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw In('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const F = $;
      $ = m.TRUSTED_TYPES_POLICY;
      try {
        K = W("");
      } catch (X) {
        throw $ = F, X;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? ($ = void 0, K = "") : ($ === void 0 && ($ = fe()), $ && typeof K == "string" && (K = W("")));
    dt && dt(m), mi = m;
  }, fd = me({}, [...dc, ...fc, ...XM]), pd = me({}, [...pc, ...QM]), Rb = function(m, v, F) {
    return v.namespaceURI === _r ? m === "svg" : v.namespaceURI === io ? m === "svg" && (F === "annotation-xml" || Ia[F]) : !!fd[m];
  }, $b = function(m, v, F) {
    return v.namespaceURI === _r ? m === "math" : v.namespaceURI === so ? m === "math" && La[F] : !!pd[m];
  }, qb = function(m, v, F) {
    return v.namespaceURI === so && !La[F] || v.namespaceURI === io && !Ia[F] ? !1 : !pd[m] && (Pb[m] || !fd[m]);
  }, Ib = function(m) {
    let v = k(m);
    (!v || !v.tagName) && (v = {
      namespaceURI: gi,
      tagName: "template"
    });
    const F = fs(m.tagName), X = fs(v.tagName);
    return qa[m.namespaceURI] ? m.namespaceURI === so ? Rb(F, v, X) : m.namespaceURI === io ? $b(F, v, X) : m.namespaceURI === _r ? qb(F, v, X) : !!(es === "application/xhtml+xml" && qa[m.namespaceURI]) : !1;
  }, cn = function(m) {
    vi(t.removed, {
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
      const X = [];
      Si(v, (Z) => {
        vi(X, Z);
      }), Si(X, (Z) => {
        try {
          h(Z);
        } catch {
        }
      });
    }
    const F = T(m);
    if (F)
      for (let X = F.length - 1; X >= 0; --X) {
        const Z = F[X], ae = Z && Z.name;
        if (typeof ae == "string")
          try {
            m.removeAttribute(ae);
          } catch {
          }
      }
  }, Nn = function(m, v) {
    try {
      vi(t.removed, {
        attribute: v.getAttributeNode(m),
        from: v
      });
    } catch {
      vi(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(m), m === "is")
      if (L || J)
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
        const X = v[F], Z = X && X.name;
        if (!(typeof Z != "string" || pe[je(Z)]))
          try {
            m.removeAttribute(Z);
          } catch {
          }
      }
  }, ts = function(m) {
    const v = [m];
    for (; v.length > 0; ) {
      const F = v.pop();
      (A ? A(F) : F.nodeType) === Dt.element && Lb(F);
      const Z = y(F);
      if (Z)
        for (let ae = Z.length - 1; ae >= 0; --ae)
          v.push(Z[ae]);
    }
  }, Db = function(m) {
    if (!Gt)
      return;
    const v = [m];
    for (; v.length > 0; ) {
      const F = v.pop(), X = A ? A(F) : F.nodeType;
      if (X === Dt.processingInstruction || X === Dt.comment && ot(Vf, F.data)) {
        try {
          h(F);
        } catch {
        }
        continue;
      }
      if (X === Dt.element) {
        const ae = F, Ee = je(_ ? _(F) : F.nodeName);
        try {
          ae.hasAttribute && ae.hasAttribute("patchsrc") && ae.removeAttribute("patchsrc"), ae.hasAttribute && ae.hasAttribute("for") && Ee !== "label" && Ee !== "output" && ae.removeAttribute("for");
        } catch {
        }
      }
      const Z = y(F);
      if (Z)
        for (let ae = Z.length - 1; ae >= 0; --ae)
          v.push(Z[ae]);
    }
  }, hd = function(m) {
    let v = null, F = null;
    if (I)
      m = "<remove></remove>" + m;
    else {
      const ae = qf(m, /^[\r\n\t ]+/);
      F = ae && ae[0];
    }
    es === "application/xhtml+xml" && gi === _r && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const X = $ ? W(m) : m;
    if (gi === _r)
      try {
        v = new u().parseFromString(X, es);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = Oe.createDocument(gi, "template", null);
      try {
        v.documentElement.innerHTML = $a ? K : X;
      } catch {
      }
    }
    const Z = v.body || v.documentElement;
    return m && F && Z.insertBefore(r.createTextNode(F), Z.childNodes[0] || null), gi === _r ? on.call(v, Cr ? "html" : "body")[0] : Cr ? v.documentElement : Z;
  }, gd = function(m) {
    const v = O ? O(m) : m.ownerDocument;
    return ht.call(
      v || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ao = function(m) {
    return m = as(m, ee, " "), m = as(m, he, " "), m = as(m, _e, " "), m;
  }, Ua = function(m) {
    var v;
    m.normalize();
    const F = O ? O(m) : m.ownerDocument, X = ht.call(
      F || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Z = X.nextNode();
    for (; Z; )
      Z.data = ao(Z.data), Z = X.nextNode();
    const ae = (v = m.querySelectorAll) === null || v === void 0 ? void 0 : v.call(m, "template");
    ae && Si(ae, (Ee) => {
      yi(Ee.content) && Ua(Ee.content);
    });
  }, co = function(m) {
    const v = _ ? _(m) : null;
    return typeof v != "string" || je(v) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
      return A(m) === Dt.documentFragment;
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
  function Sr(V, m, v) {
    V.length !== 0 && Si(V, (F) => {
      F.call(t, m, v, mi);
    });
  }
  const Ub = function(m, v) {
    return !!(Gt && m.hasChildNodes() && !rs(m.firstElementChild) && ot(jf, m.textContent) && ot(jf, m.innerHTML) || Gt && m.namespaceURI === _r && v === "style" && rs(m.firstElementChild) || m.nodeType === Dt.processingInstruction || Gt && m.nodeType === Dt.comment && ot(Vf, m.data));
  }, Fb = function(m, v, F) {
    if (!ar[v] && kd(v) && (Ie.tagNameCheck instanceof RegExp && ot(Ie.tagNameCheck, v) || Ie.tagNameCheck instanceof Function && Ie.tagNameCheck(v)))
      return !1;
    if (Je && !Lt[v]) {
      const X = k(m), Z = y(m);
      if (Z && X) {
        const ae = Z.length;
        for (let Ee = ae - 1; Ee >= 0; --Ee) {
          const Ve = m === F ? p(Z[Ee], !0) : Z[Ee];
          X.insertBefore(Ve, g(m));
        }
      }
    }
    return cn(m), !0;
  }, md = function(m, v, F, X) {
    return m.length === 0 ? v : v === F || v === X ? mt(v) : v;
  }, yd = function(m, v) {
    if (Sr(N.beforeSanitizeElements, m, null), m !== v && k(m) === null)
      return Mt && ts(m), !0;
    if (co(m))
      return cn(m), !0;
    const F = je(_ ? _(m) : m.nodeName);
    if (Se = md(N.uponSanitizeElement, Se, Ge, hi), Sr(N.uponSanitizeElement, m, {
      tagName: F,
      allowedTags: Se
    }), m !== v && k(m) === null)
      return Mt && ts(m), !0;
    if (Ub(m, F))
      return cn(m), !0;
    if (ar[F] || !(Ht.tagCheck instanceof Function && Ht.tagCheck(F)) && !Se[F]) {
      const Z = Fb(m, F, v);
      return Z === !1 && Sr(N.afterSanitizeElements, m, null), Z;
    }
    if ((A ? A(m) : m.nodeType) === Dt.element && !Ib(m) || (F === "noscript" || F === "noembed" || F === "noframes") && ot(cE, m.innerHTML))
      return cn(m), !0;
    if (vt && m.nodeType === Dt.text) {
      const Z = ao(m.textContent);
      m.textContent !== Z && (vi(t.removed, {
        element: m.cloneNode()
      }), m.textContent = Z);
    }
    return Sr(N.afterSanitizeElements, m, null), !1;
  }, bd = function(m, v, F) {
    if (eo[v] || Gt && v === "patchsrc" || Gt && v === "for" && m !== "label" && m !== "output" || ke && (v === "id" || v === "name") && (F in r || F in Ob))
      return !1;
    const X = pe[v] || Ht.attributeCheck instanceof Function && Ht.attributeCheck(v, m);
    if (!(Kr && ot(st, v))) {
      if (!(Zi && ot(gt, v))) {
        if (X) {
          if (!an[v]) {
            if (!ot(fi, as(F, He, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && m !== "script" && If(F, "data:") === 0 && ro[m])) {
                if (!(An && !ot(te, as(F, He, "")))) {
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
          !(kd(m) && (Ie.tagNameCheck instanceof RegExp && ot(Ie.tagNameCheck, m) || Ie.tagNameCheck instanceof Function && Ie.tagNameCheck(m)) && (Ie.attributeNameCheck instanceof RegExp && ot(Ie.attributeNameCheck, v) || Ie.attributeNameCheck instanceof Function && Ie.attributeNameCheck(v, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && Ie.allowCustomizedBuiltInElements && (Ie.tagNameCheck instanceof RegExp && ot(Ie.tagNameCheck, F) || Ie.tagNameCheck instanceof Function && Ie.tagNameCheck(F)))
        ) return !1;
      }
    }
    return !0;
  }, zb = me({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), kd = function(m) {
    return !zb[fs(m)] && ot(Ra, m);
  }, Kb = function(m, v, F, X) {
    if ($ && typeof d == "object" && typeof d.getAttributeType == "function" && !F)
      switch (d.getAttributeType(m, v)) {
        case "TrustedHTML":
          return W(X);
        case "TrustedScriptURL":
          return re(X);
      }
    return X;
  }, Bb = function(m, v, F, X) {
    try {
      F ? m.setAttributeNS(F, v, X) : m.setAttribute(v, X), co(m) ? cn(m) : $f(t.removed);
    } catch {
      Nn(v, m);
    }
  }, xd = function(m) {
    Sr(N.beforeSanitizeAttributes, m, null);
    const v = m.attributes;
    if (!v || co(m))
      return;
    pe = md(N.uponSanitizeAttribute, pe, St, Pn);
    const F = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: pe,
      forceKeepAttr: void 0
    };
    let X = v.length;
    const Z = je(m.nodeName);
    for (; X--; ) {
      const ae = v[X], Ee = ae.name, Ve = ae.namespaceURI, Et = ae.value, At = je(Ee), za = Et;
      let kt = Ee === "value" ? za : jM(za);
      if (F.attrName = At, F.attrValue = kt, F.keepAttr = !0, F.forceKeepAttr = void 0, Sr(N.uponSanitizeAttribute, m, F), kt = F.attrValue, et && (At === "id" || At === "name") && If(kt, Le) !== 0 && (Nn(Ee, m), kt = Le + kt), Gt && ot(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, kt)) {
        Nn(Ee, m);
        continue;
      }
      if (At === "attributename" && qf(kt, "href")) {
        Nn(Ee, m);
        continue;
      }
      if (!F.forceKeepAttr) {
        if (!F.keepAttr) {
          Nn(Ee, m);
          continue;
        }
        if (!to && ot(lE, kt)) {
          Nn(Ee, m);
          continue;
        }
        if (vt && (kt = ao(kt)), !bd(Z, At, kt)) {
          Nn(Ee, m);
          continue;
        }
        kt = Kb(Z, At, Ve, kt), kt !== za && Bb(m, Ee, Ve, kt);
      }
    }
    Sr(N.afterSanitizeAttributes, m, null);
  }, lo = function(m) {
    let v = null;
    const F = gd(m);
    for (Sr(N.beforeSanitizeShadowDOM, m, null); v = F.nextNode(); )
      if (Sr(N.uponSanitizeShadowNode, v, null), yd(v, m), xd(v), yi(v.content) && lo(v.content), (A ? A(v) : v.nodeType) === Dt.element) {
        const Z = b(v);
        yi(Z) && (Fa(Z), lo(Z));
      }
    Sr(N.afterSanitizeShadowDOM, m, null);
  }, Fa = function(m) {
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
      const X = F.node, ae = (A ? A(X) : X.nodeType) === Dt.element, Ee = y(X);
      if (Ee)
        for (let Ve = Ee.length - 1; Ve >= 0; --Ve)
          v.push({
            node: Ee[Ve],
            shadow: null
          });
      if (ae) {
        const Ve = _ ? _(X) : null;
        if (typeof Ve == "string" && je(Ve) === "template") {
          const Et = X.content;
          yi(Et) && v.push({
            node: Et,
            shadow: null
          });
        }
      }
      if (ae) {
        const Ve = b(X);
        yi(Ve) && v.push({
          node: null,
          shadow: Ve
        }, {
          node: Ve,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(V) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, F = null, X = null, Z = null;
    if ($a = !V, $a && (V = "<!-->"), typeof V != "string" && !rs(V) && (V = JM(V), typeof V != "string"))
      throw In("dirty is not a string, aborting");
    if (!t.isSupported)
      return V;
    pi ? (Se = hi, pe = Pn) : Da(m), (N.uponSanitizeElement.length > 0 || N.uponSanitizeAttribute.length > 0) && (Se = mt(Se)), N.uponSanitizeAttribute.length > 0 && (pe = mt(pe)), t.removed = [];
    const ae = Mt && typeof V != "string" && rs(V);
    if (ae) {
      Db(V);
      const Et = _ ? _(V) : V.nodeName;
      if (typeof Et == "string") {
        const At = je(Et);
        if (!Se[At] || ar[At])
          throw oo(V), In("root node is forbidden and cannot be sanitized in-place");
      }
      if (co(V))
        throw oo(V), In("root node is clobbered and cannot be sanitized in-place");
      try {
        Fa(V);
      } catch (At) {
        throw oo(V), At;
      }
    } else if (rs(V))
      v = hd("<!---->"), F = v.ownerDocument.importNode(V, !0), F.nodeType === Dt.element && F.nodeName === "BODY" || F.nodeName === "HTML" ? v = F : v.appendChild(F), Fa(F);
    else {
      if (!L && !vt && !Cr && // eslint-disable-next-line unicorn/prefer-includes
      V.indexOf("<") === -1)
        return $ && Y ? W(V) : V;
      if (v = hd(V), !v)
        return L ? null : Y ? K : "";
    }
    v && I && cn(v.firstChild);
    const Ee = ae ? V : v;
    try {
      const Et = gd(Ee);
      for (; X = Et.nextNode(); )
        yd(X, Ee), xd(X), yi(X.content) && lo(X.content);
    } catch (Et) {
      throw ae && (oo(V), Si(t.removed, (At) => {
        At.element && ts(At.element);
      })), Et;
    }
    if (ae)
      return Si(t.removed, (Et) => {
        Et.element && ts(Et.element);
      }), vt && Ua(V), V;
    if (L) {
      if (vt && Ua(v), J)
        for (Z = or.call(v.ownerDocument); v.firstChild; )
          Z.appendChild(v.firstChild);
      else
        Z = v;
      return (pe.shadowroot || pe.shadowrootmode) && (Z = ie.call(n, Z, !0)), Z;
    }
    let Ve = Cr ? v.outerHTML : v.innerHTML;
    return Cr && Se["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && ot(oE, v.ownerDocument.doctype.name) && (Ve = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + Ve), vt && (Ve = ao(Ve)), $ && Y ? W(Ve) : Ve;
  }, t.setConfig = function() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Da(V), pi = !0, hi = Se, Pn = pe;
  }, t.clearConfig = function() {
    mi = null, pi = !1, hi = null, Pn = null, $ = S, K = "";
  }, t.isValidAttribute = function(V, m, v) {
    mi || Da({});
    const F = je(V), X = je(m);
    return bd(F, X, v);
  }, t.addHook = function(V, m) {
    typeof m == "function" && at(N, V) && vi(N[V], m);
  }, t.removeHook = function(V, m) {
    if (at(N, V)) {
      if (m !== void 0) {
        const v = KM(N[V], m);
        return v === -1 ? void 0 : BM(N[V], v, 1)[0];
      }
      return $f(N[V]);
    }
  }, t.removeHooks = function(V) {
    at(N, V) && (N[V] = []);
  }, t.removeAllHooks = function() {
    N = Wf();
  }, t;
}
var fE = Om();
function pE({ structureProtectionMode: e = "off" }) {
  const [t] = ce(), r = Q(void 0), [n, i] = ge(void 0), s = be((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = qu(p);
      if (!h)
        return !1;
      const g = w();
      return e === "protected" ? g && Lu(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = w(), y = r.current;
      if (y && g && Sf(g, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const b = ne(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (b) {
            const T = b.getParent(), A = b.getPreviousSibling(), _ = b.getNextSibling();
            b.remove(), A ? Du(A) : _ && M(_) ? _.select(0, 0) : T?.selectStart();
          }
        } else y.kind === "selection" ? P(g) && (Eu(g), g.removeText()) : lt(b) && Bv(b);
        return !0;
      }
      if (!g)
        return !1;
      const k = Kv(g, p);
      if (k) {
        if (k.kind === "verse") {
          const b = Vp();
          b.add(k.node.getKey()), Pr(b);
        } else {
          const b = mn();
          b.anchor.set(k.node.getKey(), 0, "element"), b.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), Pr(b);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), h.preventDefault(), !0;
      }
      if (P(g) && !g.isCollapsed() && Iu(g)) {
        const b = g.getNodes().filter(ye).map((_) => _.getKey()), { anchor: T, focus: A } = g;
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
      const h = w();
      return !h || !Fn(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = fE.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), k = jv(qk(t, y)), b = w();
      return P(b) && b.insertNodes(k), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && Fn(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = w();
      return h && Fn(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Sf(w(), p) || s(void 0);
      });
    };
    return Re(
      t.registerCommand(kr, o, Ae),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(nr, c, de),
      t.registerCommand(Ut, u, Ae),
      t.registerCommand(jp, c, Ae),
      t.registerCommand(wl, d, Ae),
      t.registerCommand(Vn, c, Ae),
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
const Mw = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function hE({ textDirection: e }) {
  const [t] = ce();
  return gE(t, e), null;
}
function gE(e, t) {
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
function mE() {
  const [e] = ce();
  return yE(e), null;
}
function yE(e) {
  j(() => {
    if (!e.hasNodes([Te, It, $e, Xe, xt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Re(
      e.registerNodeTransform(Xe, bE),
      e.registerNodeTransform(Xe, (t) => kE(t, e)),
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
function bE(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || B(r) || z(n) || z(r) || ve(n) || ve(r) || xe(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  xe(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  oe(e, ue) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Ke(n))
    return;
  if (ye(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ye(r) && au(e);
}
function kE(e, t) {
  const r = e.getParent();
  !xe(r) || !e.isAttached() || zc(t, e.getKey()) && !zc(t, r.getKey()) && r.insertAfter(e);
}
function Gf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ve(t); )
    t = t.getLastChild();
  (z(t) || M(t) && ve(t.getParent())) && e.insertBefore(Me(" "));
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
    if (!D(n) || !n.isInline())
      return e;
    t = n;
  }
}
function xE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (D(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function TE() {
  const e = w();
  if (!(!P(e) || !e.isCollapsed()))
    return _a(xE(e.anchor));
}
function CE(e) {
  const t = w();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Rm(e.target)), r ? _a(Ne(r, B)) : void 0;
}
function Rm(e) {
  const t = pk(e)?.anchorNode;
  if (zp(t))
    return Wi(t) ?? void 0;
}
function _E(e) {
  if (w())
    return;
  const t = Rm(e);
  return t ? _a(Ne(t, B)) : void 0;
}
function Jf(e) {
  const t = Ne(e.getNode(), B);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function SE() {
  const e = w();
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
const vE = 500;
function ME(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function EE() {
  const e = w();
  if (!P(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (D(n))
    return _a(n.getChildAtIndex(t.offset));
}
function AE() {
  const [e] = ce(), t = $u(TE), r = Q(void 0);
  return j(() => {
    const n = (i) => {
      Pt(wt), Hr(e, wt), t(i);
    };
    return Re(e.registerCommand(
      kr,
      (i) => (r.current = ME(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      de
    ), e.registerCommand(Ft, () => {
      if (r.current !== void 0 && performance.now() - r.current < vE) {
        const o = EE();
        if (o)
          return n(o), !1;
      }
      if (SE())
        return Pt(wt), Hr(e, wt), !1;
      const s = _E(e.getRootElement());
      return s && n(s), !1;
    }, Bn), e.registerCommand(sa, (i) => {
      const s = CE(i);
      return s && n(s), !1;
    }, Bn));
  }, [e, t]), null;
}
function PE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = kS({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return E(bS, { trigger: e, items: i });
}
function NE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Ye(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? E(RE, { trigger: e, harness: i }) : E(PE, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const wE = [" ", "*"];
function OE(e, t) {
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
function RE({ trigger: e, harness: t }) {
  const [r] = ce(), [n, i] = ge(void 0), s = Q({ query: "", options: [] }), o = Q(0), a = be((f, p, h) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = w();
      P(y) && y.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => Re(r.registerCommand(kr, (f) => {
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
          const y = w();
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
  }, Ae), r.registerCommand(Hp, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Nr)), [r, e, t, n, a]);
  const c = be(() => i(void 0), []), l = be((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = be((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), d = Ye(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    OE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && E(jg, { isOpen: !0, children: ({ placement: f }) => E(
    Hg,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? wE : void 0 },
    n.session
  ) });
}
function $E(e) {
  return e.replaceAll(U, "~").replace(/ {2,}/g, (r) => U.repeat(r.length));
}
function qE(e) {
  return e.replaceAll(U, " ").replaceAll("~", U);
}
function IE(e) {
  return e.replace(/ {2,}/g, " ");
}
let Vo;
function LE(e) {
  e && (Vo = e);
}
function Zc(e) {
  return Qs(e);
}
function DE(e, t) {
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
  const n = qm(r), i = lr(n, t);
  return i ? { type: gr, version: hr, content: i } : void 0;
}
function UE(e, t) {
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
function FE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ue({
    type: Wt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function zE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = jh(r, a, c), Ue({
    type: Wt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function KE(e) {
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
function BE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Zc(r) && t) {
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
function jE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ue({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function VE(e, t) {
  const { unknownAttributes: r } = e;
  return Ue({ type: bg, ...r, content: t });
}
function WE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ue({ type: Tg, marker: r, ...n, content: t });
}
function HE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ue({
    type: _g,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function GE(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function JE(e, t) {
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
function YE(e) {
  return e.text;
}
function XE(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ue({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function QE(e) {
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
function ZE(e, t, r, n, i) {
  const s = mr.getType(), o = t.filter((l) => !r.includes(l));
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
function lr(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, h = a, g = a, y = a;
    switch (a.type) {
      case Kt.getType():
        i.push(
          UE(
            l,
            lr(l.children, t)
          )
        );
        break;
      case Ur.getType():
        i.push(FE(a));
        break;
      case Wt.getType():
        i.push(
          zE(
            u,
            lr(u.children, t)
          )
        );
        break;
      case It.getType():
      case xt.getType():
        i.push(KE(a));
        break;
      case Te.getType():
        i.push(
          BE(
            d,
            lr(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case ut.getType():
        i.push(
          jE(
            f,
            lr(f.children, t)
          )
        );
        break;
      case ci.getType():
        i.push(
          VE(
            a,
            lr(a.children, t)
          )
        );
        break;
      case Ji.getType():
        i.push(
          WE(
            a,
            lr(a.children, t)
          )
        );
        break;
      case Yi.getType():
        i.push(
          HE(
            a,
            lr(a.children, t)
          )
        );
        break;
      case $e.getType(): {
        const k = lr(
          p.children,
          t,
          p.caller
        );
        i.push(
          JE(
            p,
            Zc(t) && p.category === void 0 ? GE(k) : k
          )
        );
        break;
      }
      case Zr.getType():
      case Qr.getType():
      case pr.getType():
      case Gp.getType():
      case zr.getType():
        break;
      case ct.getType():
        if (s = lr(
          g.children,
          t,
          r,
          n
        ), s) {
          const k = g.typedIDs[hn];
          if (k)
            ZE(s, k, o, e[c + 1], i), o = k;
          else {
            const b = s.shift();
            b && (typeof b == "string" ? Yf(i, b) : i.push(b)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case mr.getType():
        i.push(Pi(a));
        break;
      case Xe.getType():
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
        h.text !== U && !h.text.startsWith($l) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        h[Ks]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || h.text !== jt(r))) {
          let k = YE(h);
          Zc(t) && (n && k.startsWith(U) && (k = k.slice(1)), k = IE(qE(k))), Yf(i, k);
        }
        break;
      case ai.getType():
        i.push(
          XE(
            y,
            lr(y.children, t)
          )
        );
        break;
      case rn.getType():
        i.push(QE(a));
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
  initialize: LE,
  deserializeEditorState: DE
}, eA = /^sd\d*$/, tA = /* @__PURE__ */ new Set([
  ...Object.entries(Ac).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === x.Paragraph && !eA.test(e)
  ).map(([e]) => e),
  "qa"
]);
function rA(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Kl(i) || zh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!iT(i)) {
      t && Wo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (jl(i) && tA.has(i.marker) && !Wo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Im(i.children, t).forEach((s) => {
      const o = nA(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = iA(s.verse), r.push(n), o && n.children.push(o);
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
function nA(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function iA(e) {
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
const Qf = Fm([]), sA = {
  type: Gp.getType(),
  version: 1
};
let Uu = [], se, ti, Dm, qt;
function oA(e, t) {
  Uu = [], lA(e), uA(t);
}
function aA(e = 0) {
}
function cA(e, t) {
  se = t ?? Ta();
  let r;
  return e ? (e.type !== gr && qt?.warn(`This USJ type '${e.type}' didn't match the expected type '${gr}'.`), e.version !== hr && qt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${hr}'.`
  ), e.content.length > 0 ? (r = nl(Vr(e.content)), ws(se) && (r = rA(r, qt))) : r = [Qf]) : r = [Qf], Dm?.(Uu), {
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
function lA(e) {
  e && (ti = e), e?.addMissingComments && (Dm = e.addMissingComments);
}
function uA(e) {
  e && (qt = e);
}
function Um() {
  return Qs(se);
}
function dA(e, t) {
  let { marker: r } = e;
  r !== Ss && qt?.warn(`Unexpected book marker '${r}'!`), r = r ?? Ss;
  const { code: n } = e;
  (!n || !Kt.isValidBookCode(n)) && qt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  se?.markerMode === "editable" || se?.markerMode === "visible" ? i.push(
    Ot("marker", Be(r) + " " + n + U)
  ) : se?.hasGutterParaMarkers && i.push(Ot("marker", Be(r) + U, !0)), i.push(...t);
  const s = We(e, Lx);
  return Ue({
    type: Kt.getType(),
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
function fA(e) {
  let { marker: t } = e;
  t !== Po && qt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Po;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = We(e, Dx);
  let a;
  se?.markerMode === "visible" && (a = !0);
  const c = [
    _t(rr(t, r) ?? "")
  ];
  return se?.markerMode === "editable" && PA(i, s, c), se?.markerMode === "editable" ? Ue({
    type: Wt.getType(),
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
    type: Ur.getType(),
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
function pA(e) {
  let { marker: t } = e;
  t !== No && qt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? No;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (AS(se) ?? It).getType(), c = se?.markerMode === "editable" ? Dh : Ng;
  let l, u;
  se?.markerMode === "editable" ? l = rr(t, r) : se?.markerMode === "visible" && (u = !0);
  const d = We(e, Xx);
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
function hA(e, t = [], r = !1) {
  let { marker: n } = e;
  Te.isValidMarker(n, ti?.extraValidMarkers) || qt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (se?.markerMode === "editable") {
    const [a] = t;
    Li(a) ? a.text = U + a.text : a && t.unshift(_t(U));
  }
  t.length === 0 && t.push(_t(ir)), el(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = We(e, zx);
  return s || vA(n, o, i), s || tl(e.marker ?? "", i, !1, r), Ue({
    type: Te.getType(),
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
function gA(e, t = []) {
  let { marker: r } = e;
  ut.isValidMarker(r, ti?.extraValidMarkers) || qt?.warn(`Unexpected para marker '${r}'!`), r = r ?? tr;
  const n = [];
  if (ui(se) && (se?.markerMode === "editable" ? n.push(
    Tt(r),
    _t(U, Dr, "token")
  ) : (se?.markerMode === "visible" || se?.hasGutterParaMarkers) && n.push(
    Ot(
      "marker",
      Be(r) + U,
      se?.hasGutterParaMarkers
    )
  )), n.push(...t), Um()) {
    const s = n.find(
      (o) => !Jl(o) && !(Li(o) && o.text === U)
    );
    Li(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => U.repeat(o.length)));
  }
  const i = We(e, Jx);
  return Ue({
    type: ut.getType(),
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
function mA(e, t = []) {
  const r = We(e, eC);
  return Ue({
    ...Fu(),
    type: ci.getType(),
    unknownAttributes: r,
    children: t,
    version: kg
  });
}
function yA(e, t = []) {
  const r = We(e, nC), n = e.marker ?? Lc, i = [];
  return se?.markerMode === "editable" ? i.push(
    Tt(n),
    _t(U, Dr, "token")
  ) : (se?.markerMode === "visible" || se?.hasGutterParaMarkers) && i.push(
    Ot(
      "marker",
      Be(n) + U,
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
function bA(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Dc, a = dg(o, i) ?? o;
  se?.markerMode === "editable" ? s.push(
    Tt(a),
    _t(U, Dr, "token")
  ) : (se?.markerMode === "visible" || se?.hasGutterParaMarkers) && s.push(
    Ot(
      "marker",
      Be(a) + U,
      se?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = We(
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
    version: Sg
  });
}
function kA(e, t) {
  const r = uT(t);
  let n = () => {
  };
  return ti?.noteCallerOnClick && (n = ti.noteCallerOnClick), Ue({
    type: pr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Lg
  });
}
function xA(e, t) {
  let { marker: r } = e;
  $e.isValidMarker(r, ti?.extraValidMarkers) || qt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Ll;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : gu(se?.noteMode), a = We(e, ex), c = se?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  se?.markerMode === "editable" ? (l = Tt(r, "opening", !1, c), s || (u = Tt(r, "closing"))) : se?.markerMode === "visible" && (l = Ot("marker", Be(r) + " "), s || (u = Ot("marker", it(r))));
  const d = [];
  let f;
  if (l && d.push(l), se?.markerMode === "editable" && !o)
    f = _t(jt(i), void 0, c), d.push(f), AA(n, d), d.push(...t);
  else {
    const p = _t(U, Dr, "token");
    f = kA(i, t), d.push(f, p, ...t.flatMap(TA(p)));
  }
  return u && d.push(u), Ue({
    type: $e.getType(),
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
function TA(e) {
  return (t) => kh(t) ? [t] : [t, e];
}
function CA(e) {
  let { marker: t } = e;
  (!t || !mr.isValidMarker(t, ti?.extraValidMarkers)) && qt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = We(e, Il), s = eg(e);
  return Ue({
    type: mr.getType(),
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
    type: ct.getType(),
    typedIDs: { [hn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function _A(e, t) {
  const { marker: r } = e, n = e.type, i = We(e, Ox), s = [];
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
    version: _h
  });
}
function SA(e) {
  return {
    type: rn.getType(),
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
    type: zr.getType(),
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
function _t(e, t = void 0, r = "normal") {
  const n = {
    type: Xe.getType(),
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
    type: Qr.getType(),
    text: t,
    textType: e,
    version: bh
  };
  return r && (n[Ks] = { [Fl.key]: !0 }), n;
}
function Rs(e, t) {
  return {
    type: Zr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Sh
  };
}
function el(e, t, r = !1) {
  se?.markerMode === "editable" ? t.push(Tt(e, "opening", r)) : se?.markerMode === "visible" && t.push(Ot("marker", Be(e, r)));
}
function tl(e, t, r = !1, n = !1) {
  se?.markerMode === "editable" ? r ? t.push(Tt("", "selfClosing")) : t.push(Tt(e, "closing", n)) : se?.markerMode === "visible" && t.push(
    Ot(
      "marker",
      r ? it("") : it(e, n)
    )
  );
}
function vA(e, t, r) {
  if (se?.markerMode !== "editable" || !t) return;
  const n = Ar(t, aa(e));
  n && r.push(_t(n, "attribute"));
}
function ep(e, t) {
  if (e.type !== "ms" || se?.markerMode !== "editable" && se?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = We(e, Il), o = tg(
    n,
    i,
    s,
    eg(e)
  ), a = Ar(o, ca(r ?? ""));
  if (!a) return;
  const c = U + a;
  se?.markerMode === "editable" ? t.push(_t(c, "attribute")) : t.push(Ot("attribute", c));
}
function MA(e, t) {
  const r = e.marker ?? "";
  if (se?.markerMode === "editable") {
    const n = [];
    el(r, n), ep(e, n), tl(r, n, !0), t.push(Rs("milestone", n));
  } else
    el(r, t), ep(e, t), tl(r, t, !0);
}
function tp(e, t, r) {
  t !== void 0 && r.push(
    Rs(e, [
      Tt(e, "opening"),
      _t(U + t, "attribute"),
      Tt(e, "closing")
    ])
  );
}
function EA(e, t) {
  se?.markerMode === "editable" && (tp("va", e.altnumber, t), tp("vp", e.pubnumber, t));
}
function AA(e, t) {
  e !== void 0 && t.push(
    Rs("cat", [
      Tt("cat", "opening"),
      _t(U + e, "attribute"),
      Tt("cat", "closing")
    ])
  );
}
function PA(e, t, r) {
  e !== void 0 && r.push(
    Rs("ca", [
      Tt("ca", "opening"),
      _t(U + e, "attribute"),
      Tt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Rs("cp", [
      Tt("cp", "opening"),
      _t(U + t, "attribute")
    ])
  );
}
function rp(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function NA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function np(e, t) {
  t.marker === Gn && t.sid !== void 0 && e.push(t.sid), t.marker === wi && t.eid !== void 0 && NA(e, t.eid);
}
function rl(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Zf(o, [...n])] : o, c = e[i];
  np(n, c);
  const l = rl(
    e.slice(i + 1, s),
    rp(t, i + 1),
    c.marker === Gn,
    n
  ), u = Zf(l, [...n]), d = e[s];
  np(n, d);
  const f = rl(
    e.slice(s + 1),
    rp(t, s + 1),
    d.marker === Gn,
    n
  );
  return [...a, u, ...f];
}
function Vr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(_t(Um() ? $E(i) : i));
    else if (!i.type)
      qt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Kt.getType():
          n.push(dA(i, Vr(i.content)));
          break;
        case Wt.getType():
          n.push(fA(i));
          break;
        case xt.getType():
          se?.hasSpacing || n.push(sA), n.push(pA(i)), EA(i, n);
          break;
        case Te.getType():
          n.push(
            hA(i, Vr(i.content, !0), t)
          );
          break;
        case ut.getType():
          n.push(gA(i, Vr(i.content)));
          break;
        case $e.getType():
          n.push(xA(i, Vr(i.content)));
          break;
        case mr.getType():
          dh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Uu?.push(i.sid)), n.push(CA(i)), MA(i, n);
          break;
        case rn.getType():
          n.push(SA(i.marker ?? ""));
          break;
        case bg:
          n.push(mA(i, Vr(i.content)));
          break;
        case Tg:
          n.push(yA(i, Vr(i.content)));
          break;
        case _g:
          n.push(bA(i, Vr(i.content)));
          break;
        default:
          qt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(_A(i, Vr(i.content)));
      }
  }), rl(n, r);
}
function nl(e) {
  const t = e.findIndex(
    (n) => Kl(n) || zh(n) || jl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    rC(n)
  );
  if (t >= 0) {
    const n = nl(e.slice(0, t)), i = e[t], s = nl(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || wg(n)))
    return [Fm(e)];
  return e;
}
const yr = {
  initialize: oA,
  reset: aA,
  serializeEditorState: cA
};
function zm(e) {
  if (e && !R(e)) {
    if (M(e)) return e;
    if (D(e))
      for (const t of e.getChildren()) {
        const r = zm(t);
        if (r) return r;
      }
  }
}
function wA() {
  const e = w();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((M(t) && !R(t) ? Zn(t) : void 0) && M(t)) {
      const i = Me(" ");
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
  const [t, r] = El(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!M(a) || R(a) || oe(a, ue) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Bm(e) {
  let t = e;
  for (; z(t) || ve(t); ) t = t.getParent();
  return t;
}
function jm(e) {
  const t = Bm(e.getParent());
  return lt(t) ? t : void 0;
}
function OA() {
  const e = w();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return Zn(t) ? !!jm(t) : !1;
}
function Vm(e) {
  const t = Me(""), r = e.getNode(), n = e.offset;
  if (M(r))
    if (n <= 0) r.insertBefore(t);
    else if (n >= r.getTextContentSize()) r.insertAfter(t);
    else {
      const [, o] = r.splitText(n);
      o.insertBefore(t);
    }
  else {
    const o = e.getNode(), a = D(o) ? o : o.getParent(), c = D(o) ? o.getChildAtIndex(n) : o;
    if (c) c.insertBefore(t);
    else if (a) a.append(t);
    else return { parent: void 0, moving: [] };
  }
  for (let o = t.getParent(); ; o = t.getParent())
    if (z(o)) Di(t, { renderGlyphs: !0 });
    else if (!ve(o) || !RA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function RA(e, t) {
  const r = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (r.length === 0)
    return t.insertAfter(e), !0;
  const n = w();
  if (!P(n)) return !1;
  const i = t.insertNewAfter(n, !1);
  return i ? (i.append(...r), t.insertAfter(e), !0) : !1;
}
function Wm(e) {
  const t = e.anchor.getNode();
  if (R(t) && !iu(t, e.anchor.offset)) {
    const r = t.getParent();
    if (z(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = w();
      return P(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function Hm() {
  const e = w();
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
  for (; ve(o); ) o = o.getFirstChild() ?? void 0;
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
      const e = w(), t = Jh(e), r = lu(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = fT(0, o);
        const a = WC(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || pT(c) && Gl(parseInt(n, 10), c);
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
function il(e, t) {
  return $e.isValidMarker(e, t) || !!Gm[e] || ut.isValidMarker(e, t) || Te.isValidMarker(e, t);
}
function $A(e, t) {
  return Te.isNoteContentMarker(e) ? !1 : Te.isValidMarker(e, t);
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
function sl(e, t, r, n, i, s, o) {
  if ($e.isValidMarker(e, n?.extraValidMarkers)) {
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
  const a = FA(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      P(u) && (su(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Zd(d, yr, r), h = Ba(p);
      if (P(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), k = Zn(g), b = u.anchor.key === u.focus.key;
        if (z(h) && k && b && !gc(h, o))
          LA(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (z(h) && !b && !gc(h, o) && DA(u))
          UA(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          zA(
            u,
            () => Ba(p)
          );
        else if (D(h) && !h.isInline()) {
          const T = u.insertParagraph();
          if (T) {
            const A = T.getChildren();
            h.append(...A), T.replace(h), lt(h) && di(h) || h.selectStart();
          }
        } else if (z(h) && M(g) && !R(g) && z(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        gc(h, o)) {
          const T = g.getParent();
          if (z(T)) {
            const A = u.anchor.offset;
            if (A === 0) g.insertBefore(h);
            else if (A >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [O] = g.splitText(A);
              O.insertAfter(h);
            }
            h.getChildren().forEach((O) => {
              R(O) && O.setNested(!0);
            });
            const _ = h.getChildren().find((O) => M(O) && !R(O));
            _ && M(_) ? _.select(
              _.getTextContentSize(),
              _.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (M(g) && !R(g) && u.isCollapsed() && (B(y) || z(y) && B(y.getParent()))) {
          const T = z(y) ? y : void 0, A = T ? qA(g, u.anchor.offset) : [];
          let O = (T ?? g).insertAfter(h);
          if (xr(h)) {
            const $ = {
              ...r || Ta(),
              markerMode: "hidden"
            }, K = Zd(
              d,
              yr,
              $
            ), S = Ba(K);
            O = O.insertAfter(S);
          }
          if (A.length > 0 && T) {
            const $ = Ho(T).append(...A);
            O.insertAfter($), T.isEmpty() && T.remove();
          } else M(O.getNextSibling()) || O.insertAfter(Me(U));
          D(O) && O.selectEnd();
        } else if (u.insertNodes([h]), XA(h), f) {
          const T = Vp();
          T.add(h.getKey()), Pr(T);
        } else if (z(h)) {
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
        u?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function qA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function gc(e, t) {
  return ((t ?? $o).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function IA(e, t) {
  t && e.getChildren().forEach((i) => {
    R(i) && i.setNested(!0);
  }), e.getChildren().some((i) => R(i) && i.getMarkerSyntax() === "closing") || e.append(yt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function LA(e, t, r, n) {
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
function DA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (R(n) || z(n)) continue;
    if (!M(n) || n.getType() !== Xe.getType() || oe(n, ue) === "attribute") return !1;
    const i = dC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Zn(n) && (r = !0);
  }
  return r;
}
function UA(e, t, r) {
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
function FA(e, t) {
  let r = Gm[e];
  return r || (ut.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: ut.getType(), marker: e, content: [] }] })
  } : Te.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: Te.getType(), marker: e };
      return (Te.isValidFootnoteMarker(e) || Te.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function zA(e, t) {
  const r = e.getNodes(), [n, i] = ji(e);
  let s;
  r.forEach((o, a) => {
    if (D(s) && s.isParentOf(o))
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
    s || (s = t(), c.insertBefore(s), l = !0, z(s) && s.getChildren().some((d) => R(d) && d.getMarkerSyntax() === "opening") && IA(s, z(s.getParent()))), BA(c, s, l);
  }), (M(s) || D(s)) && s.selectEnd();
}
function ji(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function zu(e) {
  return ve(e) || B(e) || B(e.getParent());
}
function Ym(e, t, r, n, i) {
  if (!zu(e)) {
    if (M(e))
      return KA(e, t, r, n, i);
    if (D(e) && e.isInline())
      return e;
  }
}
function KA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function BA(e, t, r) {
  if (M(t)) {
    const n = ol(e, t);
    t.setTextContent(n), e.remove();
  } else if (D(t)) {
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
    ol(e, t), r && z(t) && t.getChildren().some((s) => R(s)) && M(e) && !R(e) && !e.getTextContent().startsWith(U) && e.setTextContent(U + e.getTextContent());
  }
}
function ol(e, t) {
  let r = e.getTextContent();
  if (M(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    au(n), M(n) || t.insertBefore(Me(" "));
  }
  return r;
}
function Xm(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = ri(u, t);
    if (!f) return !1;
    const p = M(u) ? u.getTextContentSize() : 0;
    if (ip(f, r), M(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), y = Math.max(0, Math.min(d - g, h)), k = w();
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
  if (r.length === 0 || e.getTextContent() === ir) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    M(n) && i.startsWith(U) && n.setTextContent(i.slice(U.length));
  }), vc(e);
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
  for (; r && !lt(r); ) {
    if (B(r)) return;
    !n && z(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Qm(e) {
  const t = Ne(
    e,
    (r) => B(r) || lt(r)
  );
  return B(t);
}
function Zm(e) {
  return e.filter(
    (t) => !zu(t) && (M(t) || D(t) && t.isInline())
  );
}
function jA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!M(i) || zu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function VA(e, t, r) {
  return e.getChildren().some(
    (n) => D(n) && t.some((i) => n.isParentOf(i)) && !ey(n, r)
  );
}
function Bu(e, t, r, n, i) {
  const s = Zm(e), o = jA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ri(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !VA(l, s, o);
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
    else if (D(u) && t.some((d) => u.isParentOf(d))) {
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
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function WA(e, t, r) {
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
function HA(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = ji(e);
  if (!!!i?.some(
    (y) => Bu(s, y, o, a)
  ) && !GA(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = w();
    P(k) && Xm(k, y, n) && (l = !0);
  });
  const u = w();
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
  return g.length > 0 && (JA(g).forEach((y) => YA(y, t)), l = !0), ry(h, d), l;
}
function GA(e, t) {
  return Zm(e).some(
    (r) => !Qm(r) && !ri(r, t)
  );
}
function JA(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function YA(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => z(a) && a.getMarker() === t
  ), s = i ? Ho(i) : Jr(t);
  e[0].insertBefore(s), s.append(...e), i === r || ol(e[0], s);
}
function XA(e) {
  ye(e) && (au(e.getPreviousSibling()), Rg(e.getNextSibling()));
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
function QA({ viewOptions: e }) {
  const [t] = ce(), r = Q(void 0), n = e?.hasActiveTextFocusBox ?? !1;
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
          if (!ye(l)) return !1;
          const u = l.getParent();
          if (!D(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Rt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = mc(), f = ZA(), p = [], h = [];
          return Fe().getChildren().forEach((g) => {
            if (!D(g)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = tP(g);
            p.push(...y), h.push(...k);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(go) : t.getElementByKey(d)?.classList.add(go);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(go));
      }),
      t.registerCommand(
        Ol,
        () => (i(void 0), !1),
        Rt
      ),
      t.registerCommand(
        gk,
        () => {
          const o = t.getEditorState().read(mc);
          return o !== r.current && i(o), !1;
        },
        Rt
      )
    ];
    return i(t.getEditorState().read(mc)), Re(...s);
  }, [t, n]), null;
}
function mc() {
  return eP(w() ?? void 0)?.getKey();
}
function ZA() {
  const e = w();
  if (!P(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!D(n)) return;
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
    ye(s[a]) && (o = s[a].getKey());
  return o;
}
function eP(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function tP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ye(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ye(c)) break;
      if (!(zt(c) || R(c)) && c.getTextContent().replaceAll(vo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function al(e) {
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
const rP = 16;
function nP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (b) => t ? Vu(b, t).length : b.getTextContent().length;
  r ??= n;
  const i = w();
  if (!P(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Go(s), l = Go(o), u = i.getNodes(), d = new Map(u.map((b) => [b.getKey(), oP(b)])), f = u.length > 0 ? d.get(u[0].getKey()) : void 0, p = f && iP(s, f) ? f : void 0, h = (b) => {
    const T = b > 0 ? sP(u, d, p, c, l, b, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), T ? i.focus.set(T.node.getKey(), T.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!T;
  };
  let g = Math.min(e, n(i));
  if (h(g) && r(i) <= e) return !0;
  let y = 0, k = 0;
  g -= 1;
  for (let b = 0; b < rP && y <= g; b++) {
    const T = Math.floor((y + g) / 2);
    h(T) && r(i) <= e ? (k = T, y = T + 1) : g = T - 1;
  }
  return h(k), !0;
}
function cl(e) {
  return e.isToken() || Xs(e) || De(e.getParent());
}
function iP(e, t) {
  const r = D(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && dr(r.getKey(), 0, "text").isBefore(e);
}
function sP(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, d;
  const f = /* @__PURE__ */ new Map(), p = (g) => {
    const y = t.get(g.getKey());
    return y && r?.is(y) ? void 0 : y;
  }, h = (g) => {
    let y = d ? d.endBefore : g;
    for (; ; ) {
      const k = aP(y, e, n);
      if (!k || !y || k.node.is(y.node)) return k;
      const b = p(k.node);
      if (!b || b.is(p(y.node))) return k;
      y = f.get(b.getKey());
    }
  };
  for (let g = 0; g <= a; g++) {
    const y = e[g], k = p(y);
    if (d && !d.node.is(k) && (u && d.node.isParentOf(u.node) && (u = d.endBefore), d = void 0), k && !d && (d = { node: k, endBefore: u }, f.set(k.getKey(), u)), !o?.(y)) {
      if (D(y) && !y.isInline()) {
        if (!l) {
          if (c + 1 > s) return h(u);
          c += 1;
        }
        l = !y.isEmpty();
        continue;
      }
      if (l = !1, M(y)) {
        const b = g === 0 ? n : 0, T = g === a ? i : y.getTextContentSize(), A = T - b, _ = cl(y);
        if (_ && c + A > s) return h(u);
        if (!_ && c + A >= s) {
          const O = ju(y.getTextContent(), b + (s - c));
          return h({ node: y, offset: Math.max(b, O) });
        }
        c += A, u = { node: y, offset: T };
      } else if (si(y) || ii(y)) {
        const b = y.getTextContentSize();
        if (c + b > s) return h(u);
        c += b;
      }
    }
  }
  return h(u);
}
function oP(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (B(r) || Au(r)) && (t = r);
  return t;
}
function aP(e, t, r) {
  if (!e) return e;
  const n = Ne(e.node, (y) => D(y) && !y.isInline()), i = D(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((y) => y.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let y = o; y <= a; y++)
    l.push(c.length), c += i[y].getTextContent();
  const u = l[s - o], d = u + e.offset, f = ju(c, d);
  if (f === d) return e;
  const p = (y) => t[0]?.is(y) ?? !1;
  if (cl(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= u) {
    const y = f - u;
    return y >= (p(e.node) ? r : 0) ? { ...e, offset: y } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((y) => y.is(h))) return;
  if (cl(h))
    return { node: h, offset: p(h) ? r : 0 };
  const g = f - l[0];
  return g >= (p(h) ? r : 0) ? { node: h, offset: g } : void 0;
}
function Vu(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, u) => {
    if (!t(l)) {
      if (D(l) && !l.isInline()) {
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
function ll(e) {
  const t = e.getParent();
  return !!t && Ne(t, (r) => B(r) && !!r.getIsCollapsed()) !== null;
}
function oy(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    bt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), D(i)) for (const { node: s } of oi(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function cP(e) {
  return e.getNodes().some(
    (t) => si(t) || B(t) || ye(t) || Qe(t) || Au(t)
  );
}
function Go(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return D(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Tr = String.raw`\w-`, ay = "a-z0-9", lP = `[a-z][${ay}]*`, uP = new RegExp(
  String.raw`^\\(\+?[${Tr}]+)[ \u00A0]$`
), cy = new RegExp(String.raw`^\\(\+?[${Tr}]+)$`), dP = new RegExp(String.raw`^\\\+?[${Tr}]*\*$`), fP = new RegExp(
  String.raw`^\\(\+?[${Tr}]+)(?:[ \u00A0]|$)`
), pP = new RegExp(
  String.raw`^\\(\+?)([${Tr}]+)`
), hP = new RegExp(
  String.raw`\\\+?[${Tr}]+(?:\\?\*|[ \u00A0])`
), gP = new RegExp(
  String.raw`\\\+?[${Tr}]*$`
), mP = new RegExp(
  String.raw`^\\(${lP})( |$)`
), yP = new RegExp(
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
function bP(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const kP = new RegExp(
  [Jo, uy, dy].map(bP).join("|")
), xP = "\uFEFF", TP = /^usfm_(.+)$/;
function CP(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function _P(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function SP(e) {
  return e.startsWith(Jo) ? _P(e.slice(Jo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function fy(e) {
  for (const t of e.classList) {
    const r = TP.exec(t);
    if (r) return r[1];
  }
}
function vP(e) {
  const t = fy(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function MP(e) {
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
    r.push(SP(e.nodeValue ?? ""));
    return;
  }
  if (!CP(e)) return;
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? vP(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function EP(e) {
  if (!kP.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !MP(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => py(n, !1, r)), r.join("").replaceAll(xP, "").replaceAll(U, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function AP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = oe(e, ue);
  if (r === "attribute" || r === Dr || ly(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (De(o) || xe(o)) return;
  const n = t.startsWith(U) && z(e.getParent()), i = n ? t.slice(1) : t, s = (n ? U : "") + i.replace(/ (?=[ \u00A0])/g, U).replace(new RegExp("(?<=\\u00A0) ", "g"), U);
  s !== t && e.setTextContent(s);
}
function PP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function NP(e, t) {
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
function ul(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? EP(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(PP(s)) : ""),
    isInternal: NP(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const op = String.raw`\\(?:\+?[${Tr}]+\*?|\*)`, wP = new RegExp(
  String.raw`(?<=${op})\u00A0|\u00A0(?=${op})`,
  "g"
);
function Wu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(wP, " ").replaceAll(U, "~");
}
const hy = new RegExp(
  String.raw`\\c(?![${Tr}])[ \u00A0]*[^\s\\]*`,
  "g"
), gy = new RegExp(String.raw`\\id(?![${Tr}])[^\n\\]*`, "g"), OP = new RegExp(
  String.raw`^(?:${hy.source}|${gy.source})`
);
function Hu(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(hy, "").replace(gy, "");
    return OP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function dl(e) {
  if (M(e) && oe(e, ue) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Ke(t)) return !0;
  return !1;
}
function RP(e) {
  return dl(e.anchor.getNode()) || dl(e.focus.getNode());
}
function $P(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && dl(t.getNode());
}
function qP(e, t) {
  const n = $P(e) ? t : Wu(Hu(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function IP(e, t = !1, r = () => {
}) {
  const n = ul(e, gn()._config.namespace);
  if (!n) return !1;
  const i = w(), s = P(i) && RP(i);
  if (!s && n.isInternal || t && P(i) && Fn(i))
    return !1;
  const { text: o } = n;
  if (!o || !P(i)) return !1;
  if (e?.preventDefault(), s)
    return qP(i, o), !0;
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
    const f = w();
    P(f) && f.insertText(u);
  }), !0;
}
function LP(e) {
  if (e.getTextContent() !== U) return !1;
  const t = e.getParent();
  return B(t) ? !bt(e.getPreviousSibling()) : !1;
}
function DP(e, t) {
  if (t || e.getTextContent() !== U) return "";
  const r = e.getParent();
  if (!B(r) || !bt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function UP(e) {
  const t = e.getParent();
  return (B(t) ? t.getCaller() : void 0) || xs;
}
function FP(e) {
  const t = e.getParent();
  return !t || Tn(t) === void 0;
}
function Gu(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = El(e);
  let l = "", u = !0;
  for (const d of t) {
    if (D(d) && !d.isInline()) {
      !u && FP(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, bt(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + UP(d));
    else if (M(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += LP(d) ? "" : f.replaceAll(U, " ") + DP(d, d === n);
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
function zP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => Ce(r) || De(r)
    )
  );
}
function KP(e) {
  const t = w();
  if (!P(t) || t.isCollapsed()) return;
  const r = Gu(t), n = {
    "text/plain": r,
    "text/html": my(r)
  };
  if (Zs() || zP(t)) return n;
  const i = Sk(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function ap(e, t, r, n) {
  const i = w();
  if (!P(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !dm();
  const s = KP(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], yy(e, t, i, s, r, n)) : !1;
}
function yy(e, t, r, n, i, s) {
  const o = al(s);
  if (o !== void 0 && iy(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), fl(e, t, { "text/plain": sy(a, o) })) : fl(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function fl(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || _k(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function pl(e, t) {
  const r = hu();
  if (!r?.end) return;
  const n = BP(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = xa(r);
        return i ? Gu(i) : void 0;
      },
      { editor: n.editor }
    );
}
const yc = /* @__PURE__ */ new WeakMap();
function BP(e, t) {
  const r = e.getEditorState();
  if (yc.has(r)) {
    const i = yc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = jP(r, t);
  return yc.set(r, n), n;
}
function jP(e, t) {
  const r = vu(Cu);
  if (!r) return;
  const n = Co.deserializeEditorState(e, t);
  if (!n) return;
  const i = mk({
    namespace: "markers-view-copy",
    nodes: [ct, ...ku],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    yr.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function VP({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = ce();
  return j(() => {
    const n = (i, s) => {
      const o = w();
      if (!P(o) || o.isCollapsed()) return !1;
      const a = pl(r, e);
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
    return Re(
      r.registerCommand(Wn, (i) => n(i, !1), Ae),
      r.registerCommand(nr, (i) => n(i, !0), Ae)
    );
  }, [r, e, t]), null;
}
const cp = /* @__PURE__ */ new WeakMap();
function WP({
  limit: e,
  viewOptions: t
}) {
  const [r] = ce(), n = Q(al(e)), i = Q(t), s = Q(!1), o = Q(void 0);
  return j(() => {
    n.current = al(e), i.current = t, o.current?.();
  }, [e, t]), j(() => {
    let a, c;
    const l = (k) => {
      const b = n.current;
      if (b === void 0) return;
      const T = cp.get(k);
      if (k.defaultPrevented && T === void 0) return;
      const A = r.getRootElement();
      if (!A) return;
      const _ = A.ownerDocument.getSelection();
      if (!_ || !JP(_, A)) return;
      k.preventDefault();
      const O = sy(
        T ?? _.toString().replaceAll(U, " "),
        b
      );
      cp.set(k, O);
      const $ = k.clipboardData;
      if ($) {
        if (!O) {
          T !== void 0 && $.clearData();
          return;
        }
        $.setData("text/plain", O);
      }
    }, u = (k) => {
      n.current !== void 0 && bk(k, "a", { ctrlKey: !yn, metaKey: yn }) && (XP(c?.activeElement, r.getRootElement()) || k.preventDefault());
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
      const T = w();
      if (ia(T))
        return T.getTextContent().length + oy(T.getNodes()) <= b ? !1 : p(k);
      if (!P(T) || T.isCollapsed()) return !1;
      const A = HP(r, i.current);
      return A.$size(T) <= b ? !1 : (nP(b, A.options), T.isCollapsed() ? p(k) : (r.isEditable() || Wp(() => GP(r)), s.current = !0, !1));
    }, g = (k, b) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const T = w();
      if (!P(T) || T.isCollapsed()) return !1;
      const A = b && r.isEditable() && !cP(T);
      return fl(
        k && typeof k == "object" && "clipboardData" in k ? k : null,
        r,
        { "text/plain": Vu(T, ll) },
        A ? () => T.removeText() : void 0
      );
    }, y = Re(
      r.registerCommand(Wn, h, de),
      r.registerCommand(nr, h, de),
      r.registerCommand(
        Wn,
        (k) => g(k, !1),
        Nr
      ),
      r.registerCommand(
        nr,
        (k) => g(k, !0),
        Nr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        yk,
        (k) => n.current === void 0 ? !1 : (k?.preventDefault(), !0),
        de
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
function HP(e, t) {
  if (Qs(t)) {
    const n = (i) => Gu(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && pl(e, r) !== void 0) {
    const n = (i) => pl(e, r)?.length ?? Vu(i, ll).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + oy(n.getNodes()),
    options: { $isHidden: ll }
  };
}
function GP(e) {
  e.getEditorState().read(() => {
    const t = w(), r = e.getRootElement()?.ownerDocument.getSelection();
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
  const n = t.getNode(), i = D(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function JP(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const YP = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function XP(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? YP.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const QP = /^\+/;
function Ju(e, t) {
  const r = t.replace(QP, "");
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
function hl(e, t) {
  const r = by(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Yo(e, t, r) {
  const n = D(e) ? e.getChildren().filter(R) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function ZP(e, t, r, n, i) {
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
      i || ZP(s, o, t, r, n), Ri(s, t, r, n, i || o === "xq");
    } else if (ye(s)) {
      if (i) continue;
      const o = Ju(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else B(s) ? Ri(s, s.getMarker(), r, n, i) : xe(s) || D(s) && Ri(s, t, r, n, i);
}
function e1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Ju(e, a);
    if (!c) {
      Yo(o, "unknown", r), hl(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    hl(n, l) || Yo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Fe().getChildren())
    xe(o) || (Ce(o) ? (i(o, o.getMarker()), s(o) && Ri(o, void 0, e, r, !1)) : Qe(o) ? i(o, o.getMarker()) : le(o) ? (i(o, o.getMarker()), s(o) && Ri(o, o.getMarker(), e, r, !1)) : D(o) && s(o) && Ri(o, "p", e, r, !1));
  return r;
}
function t1(e) {
  return !!e?.includes("(basic)");
}
function r1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function xy(e, t) {
  return !e.startsWith("zpa") && e !== "c" && il(e, t);
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
    i && hl(r, i);
  }
  return r;
}
function _o(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: r1(e.description),
    isBasic: t1(e.description)
  };
}
function n1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function gl(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : n1(e.marker, t.marker);
}
function ml(e, t, r) {
  if (t.noteMarker) return [];
  const n = Ty(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && xy(i.marker, r)
  ).filter((i) => {
    const s = Yu(e, i.marker);
    return s !== void 0 && ky(n, s);
  }).map((i) => _o(i, "paragraph")).sort(gl);
}
function i1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => xy(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => _o(c, "character")).sort(gl);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => _o(c, "character")),
    ...a.map((c) => _o(c, "note"))
  ].sort(gl);
}
function s1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function o1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function a1(e, t, r) {
  return [
    ...s1(e, t.openCharMarkers),
    ...i1(e, t, r)
  ].sort(o1);
}
function c1(e, t, r) {
  if (t.source === "paragraph") return ml(e, t, r);
  const n = a1(e, t, r);
  return n.length > 0 ? n : ml(e, t, r);
}
function l1(e, t, r) {
  const n = ml(e, t, r), i = Ty(e, t.previousParaMarkers), s = Yu(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && ky(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const ft = "￼";
function Cy(e) {
  return e.length > 1 && e.startsWith(U) && e.charAt(1) !== ft ? e.slice(1) : e;
}
function up(e) {
  return Jl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function _y(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = yr.serializeEditorState(
    {
      type: gr,
      version: hr,
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
  if (a[c]?.text !== jt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && up(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Sy(e, t) {
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
  ), o = yr.serializeEditorState(
    {
      type: gr,
      version: hr,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === $e.getType()) ?? -1;
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
  }, [o, ...a] = yr.serializeEditorState(
    { type: gr, version: hr, content: [s, ...r] },
    n
  ).root.children;
  if (!Kl(o)) return { failure: "shape" };
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
  gP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += ft;
}
function er(e) {
  return e.replaceAll(U, " ");
}
function u1(e, t, r = !1) {
  if (Qs(t)) return er(e);
  if (e === U) return " ";
  const n = r && e.startsWith(U), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(U, "~");
}
function bs(e) {
  const t = e.getTextContent();
  return Fr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Xu(e, t) {
  const r = e[t];
  if (!tt(r)) return [];
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
function Sa(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && Ul(e);
}
function ed(e, t) {
  return tt(e) ? !Sa(e.getMarker(), t) : B(e) || xe(e) ? !0 : ze(e) ? Zu(e) : z(e) ? Ay(e, t) : !1;
}
function Ay(e, t) {
  if (_T(e)) return !0;
  const r = e.getMarker();
  return ux(r) || t(r) !== void 0 || d1(e) && !f1(e) ? !1 : !p1(e);
}
function d1(e) {
  const t = e.getParent();
  return t !== null && Bt(t) !== void 0;
}
function f1(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function p1(e) {
  const t = e.getChildren().filter((i) => R(i) && i.getMarker() === e.getMarker()).filter(R);
  if (t.some((i) => !en(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const Qt = "", Zt = "";
function dp(e) {
  return e.flatMap((t) => Ke(t) ? t.getChildren() : [t]);
}
function ps(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (tt(s)) {
      const o = Xu(e, i);
      Sa(s.getMarker(), r) && Ey(o) ? (t.push(
        Qt,
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
      ), ps(dp(o), t, r), t.push(Zt)) : t.push(ft), i += o.length;
    } else if (ze(s)) {
      const o = Qu(e, i);
      Zu(s) ? t.push(ft) : (t.push(
        Qt,
        "verse",
        er(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ps(dp(o), t, r), t.push(Zt)), i += o.length;
    } else R(s) ? t.push(Qt, "marker", er(s.getTextContent()), Zt) : nn(s) ? t.push(Qt, "unmatched", er(s.getTextContent()), Zt) : ed(s, r) ? t.push(ft) : ii(s) ? t.push(" ") : M(s) ? t.push(
      er(
        n ? Cy(bs(s)) : bs(s)
      )
    ) : z(s) ? (t.push(Qt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ps(s.getChildren(), t, r, !0), t.push(Zt)) : D(s) ? (t.push(Qt, s.getType()), ps(s.getChildren(), t, r), t.push(Zt)) : t.push(ft);
  }
}
function $r(e, t) {
  const r = [];
  return ps(e, r, t), r.join("");
}
function qr(e) {
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
  return t === "closing" ? it(e, r) : t === "selfClosing" ? it("") : Be(e, r);
}
function bc(e, t) {
  const r = e[t];
  if (!(!r || td(r) !== "attribute-run"))
    return qr(r) ?? [];
}
function Ir(e, t) {
  const r = [];
  return hs(e, r, t), r.join("");
}
function hs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = td(s);
    if (o === "ms") {
      const l = s, u = bc(e, i + 1);
      u && Sa(l.marker ?? "", r) ? (t.push(
        Qt,
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
      ), hs(u, t, r), t.push(Zt), i += 1) : t.push(ft);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(ft);
        continue;
      }
      t.push(
        Qt,
        "verse",
        er(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = bc(e, i + 1 + u);
      for (; d; )
        hs(d, t, r), u++, d = bc(e, i + 1 + u);
      t.push(Zt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Qt,
        "marker",
        er(
          Py(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Zt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Qt, "char", JSON.stringify(l.unknownAttributes ?? null)), hs(qr(s) ?? [], t, r, !0), t.push(Zt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(ft);
      continue;
    }
    if (o === "unmatched") {
      t.push(Qt, "unmatched", er(Vi(s) ?? "")), t.push(Zt);
      continue;
    }
    const a = Vi(s);
    if (a !== void 0) {
      t.push(er(n ? Cy(a) : a));
      continue;
    }
    const c = qr(s);
    c ? (t.push(Qt, o), hs(c, t, r), t.push(Zt)) : t.push(ft);
  }
}
function _n(e) {
  let t = 0;
  for (const r of e) {
    const n = qr(r);
    if (n) {
      t += _n(n);
      continue;
    }
    const i = Vi(r);
    if (i !== void 0)
      for (const s of i) s === ft && t++;
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
      mo(t, a, er(a.getTextContent()));
    else if (tt(a)) {
      s();
      const c = Xu(e, o);
      Sa(a.getMarker(), r) && Ey(c) ? Sn(c, t, r, n) : ls(t, [a, ...c]), o += c.length;
    } else if (B(a) || xe(a))
      s(), ls(t, [a]);
    else if (ze(a)) {
      s();
      const c = Qu(e, o);
      Zu(a) ? ls(t, [a, ...c]) : (mo(t, a, er(bs(a))), Sn(c, t, r, n)), o += c.length;
    } else if (z(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && Ay(a, r) ? ls(t, [a]) : $s(a, t, r, n, { pending: !0 });
    else if (ii(a))
      s(), mo(t, a, " ");
    else if (M(a)) {
      const c = Fr(a) || oe(a, ue) === "attribute", l = s() && !c;
      mo(
        t,
        a,
        c ? er(bs(a)) : u1(bs(a), n, l)
      );
    } else D(a) ? $s(a, t, r, n, i) : (s(), ls(t, [a]));
  }
}
function Ny(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (xe(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return $s(e, i, t, r), i;
}
function va(e, t, r, n) {
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
function Ma(e, t) {
  let r = 0;
  const n = (i) => {
    if (M(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(ft);
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
    } else D(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function qs(e, t = []) {
  for (const r of e)
    ze(r) ? t.push(r) : D(r) && qs(r.getChildren(), t);
  return t;
}
function Ea(e) {
  let t = 0;
  const r = (n) => {
    if (M(n))
      for (const i of n.getTextContent()) i === ft && t++;
    else D(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function sn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === ft && t++;
    else r.content && (t += sn(r.content));
  return t;
}
function h1(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), D(s) && $s(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const Is = /\s/;
function wy(e) {
  return e.filter(Aa).length;
}
function Aa(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return M(t) && !R(t) && oe(t, ue) === "attribute";
}
function g1(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return R(t) || Aa(e);
}
function fp(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Aa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      Is.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function m1(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !D(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = ne(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function Pa(e, t, r, n) {
  const { key: i, offset: s } = m1(
    e,
    t,
    r,
    n
  ), o = fp(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !g1(a) ? fp(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: wy(t.spans) };
}
function kc(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return R(t) && t.getMarkerSyntax() !== "opening";
}
function y1(e) {
  const t = ne(e.key);
  if (!R(t)) return !1;
  const r = t.getParent();
  return z(r) ? (r.selectNext(0, 0), !0) : !1;
}
function b1(e) {
  const t = ne(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = ze(t) ? Qu(r, n) : tt(t) ? Xu(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Oy(e, t, r) {
  const { text: n, spans: i } = e, s = wy(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !kc(d);
    if (!(o && Aa(d))) {
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
    if (d && kc(d) && y1(d) || d?.isSentinel && b1(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !kc(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = ne(a.key);
    if (d && M(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(D)?.selectStart();
}
function Ry(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(D)?.selectStart();
      return;
    }
    Oy(
      h1(e, n, i, s),
      t,
      e
    );
  }
}
function $y(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    k1(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  Sn(e, o, n, i), Oy({ text: o.text, spans: o.spans }, t, e);
}
function k1(e, t) {
  const r = e.find(D);
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
  if (!va(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = w();
  if (P(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Pa(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = Lr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (sn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = yr.serializeEditorState(
    { type: gr, version: hr, content: l },
    r
  );
  if (Ir(u.root.children, n) === $r(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => Kn(g));
  if (Ea(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = qs(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), Ma(d, s.sentinels), e.forEach((g) => g.remove());
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
  if (e.getIsCollapsed() !== !1 || !$e.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!R(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(bt(n) || M(n) && n.getTextContent() === jt(e.getCaller()))) return;
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
  return Sn(n, i, t, r), { out: i, contentNodes: n };
}
function Dy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(ft)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function x1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Ly(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (P(u)) {
    for (let O = u.anchor.getNode(); O; O = O.getParent())
      if (e.is(O)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Pa(
      [e],
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const d = Lr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (sn(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], h = Dy(p), g = Sy(e, p);
  if (g)
    return T1(
      e,
      g,
      h,
      o.sentinels,
      t,
      l
    );
  const y = _y(e, p, h, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (_n(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== h;
  if (k && e.setCategory(h), Ir(y.children, n) === $r(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const b = y.children.map((O) => Kn(O));
  if (Ea(b) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const T = a[0];
  if (T)
    b.forEach((O) => T.insertBefore(O));
  else {
    const O = e.getChildren().find(($) => R($) && $.getMarkerSyntax() === "closing");
    b.forEach(($) => O ? O.insertBefore($) : e.append($));
  }
  Ma(b, o.sentinels);
  const A = new Set(o.sentinels.flat().map((O) => O.getKey()));
  a.forEach((O) => {
    A.has(O.getKey()) || O.remove();
  });
  const _ = Iy(e) ?? b;
  return $y(
    _,
    c,
    l,
    n,
    r,
    A
  ), !0;
}
function T1(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = vy(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || _n(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => Kn(h)), [d] = u;
  if (!B(d) || Ea(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const h of u)
    f.insertAfter(h), f = h;
  Ma(u, i);
  const p = e.getChildren();
  return e.append(...d.getChildren()), p.forEach((h) => h.remove()), e.setCaller(d.getCaller()).setCategory(d.getCategory()).setUnknownAttributes(d.getUnknownAttributes()).setIsCollapsed(d.getIsCollapsed()), d.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? jc(e, a) : zg(e, { isContentChange: !0 })), !0;
}
function Uy(e) {
  const t = e.getChildren();
  return Hl(t[0]) ? t.slice(1) : t;
}
function rd(e, t, r) {
  const n = Uy(e), i = { text: "", spans: [], sentinels: [] };
  return Sn(n, i, t, r), { out: i, contentNodes: n };
}
const C1 = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${tr}(?=[\\s\\u200B\\\\|]|$)`
);
function Fy(e, t) {
  const r = Lr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === tr && !C1.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function zy(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = rd(e, i, n);
  if (!va(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, u = !1;
  const d = w();
  if (P(d)) {
    for (let $ = d.anchor.getNode(); $; $ = $.getParent())
      if (c.some((K) => K.is($))) {
        u = !0;
        break;
      }
    d.isCollapsed() && (l = Pa(
      c,
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const f = Fy(o.text, i);
  if (sn(f.content) !== o.sentinels.length)
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
  if (_n(h) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && Ir(p.followingBlocks, i) === $r(r, i) && Ir(p.children, i) === $r(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map(($) => Kn($)), y = p.followingBlocks.map(($) => Kn($)), k = [...g, ...y];
  if (Ea(k) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const b = qs([...a, ...r]).map(($) => ({
    number: $.getNumber(),
    sid: $.getSid()
  })), T = a[0];
  T ? g.forEach(($) => T.insertBefore($)) : g.forEach(($) => e.append($)), y.reduce(($, K) => $.insertAfter(K), e), Ma(k, o.sentinels);
  const A = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    A.has($.getKey()) || $.remove();
  }), r.forEach(($) => $.remove());
  const _ = [...Uy(e), ...y], O = qs(_);
  for (let $ = 0; $ < b.length && $ < O.length; $++)
    O[$].getNumber() === b[$].number && O[$].setSid(b[$].sid);
  return $y(
    _,
    l,
    u,
    i,
    n,
    A
  ), !0;
}
const Ky = /* @__PURE__ */ new Set(["ca", "cp"]), nd = "cp";
function By(e) {
  if (!Rr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if ($s(e, t, wr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Lr(r, { getMarker: wr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === nd)
  );
}
function Na(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (z(r) && Ky.has(r.getMarker()) || By(r)) {
      t.push(r);
      continue;
    }
    le(r) && r.getMarker() === nd && t.push(r);
    break;
  }
  return t;
}
function _1(e) {
  const t = (n) => z(n) && Ky.has(n.getMarker()) || By(n);
  if (t(e) || le(e) && e.getMarker() === nd)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (De(n)) return n;
      if (!t(n)) return;
    }
}
function jy(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Na(e);
  if (n.some((s) => le(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Sn(e.getChildren(), i, t, r), Sn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function S1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Na(e)], o = jy(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (P(l)) {
    for (let h = l.anchor.getNode(); h; h = h.getParent())
      if (s.some((g) => g.is(h))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Pa(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const u = Lr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (sn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = yr.serializeEditorState(
    { type: gr, version: hr, content: u },
    r
  );
  if (Ir(f.root.children, n) === $r(s, n)) {
    let h = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), h = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), h = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => Kn(h));
  return De(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), Ry(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Ls(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (xe(n)) return;
    !t && (B(n) || le(n) || De(n) || Ce(n)) && (t = n), Nl(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? _1(r) : void 0) ?? t;
}
function ur(e, t) {
  const r = Ls(e);
  return r ? B(r) ? x1(r, t) : De(r) ? S1(r, t) : Ce(r) ? zy(r, t) : qy([r], t) : !1;
}
const v1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function pp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !v1.has(n[0])
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
          t.push(`\\${n}`), pp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), So(r.content, t), pp(r, t), i !== "false" && t.push(`\\${n}*`);
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
function hp(e, t, r) {
  const n = Ls(e);
  if (!we(n)) return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ce(n) ? rd(n, t, r).out : Ny(n, t, r);
  if (!o) return !1;
  const a = Lr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    Is.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  So(a, l);
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
function M1(e, t) {
  return Vy(e, t, x.Character);
}
function Vy(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !($e.isValidMarker(n) || Ul(n));
}
function E1(e) {
  return [yt(e), Hs()];
}
function sd(e) {
  sr(e, 2);
}
function A1(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function wa(e) {
  const t = A1(e);
  e.splice(0, 0, E1(e.getMarker())), t && sd(e);
}
function Xo(e, t) {
  e.setMarker(t), wa(e), sd(e);
}
function P1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Fr(n)) {
    if (M(n) && !R(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(U), Nt(n, ue, Dr), n.setMode("token");
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
  const i = e.type === "text" ? n.getTextContentSize() : D(n) ? n.getChildrenSize() : 0;
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
    if (le(t)) return t;
}
function N1(e) {
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
function yl(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of N1(r)) t.add(n.getKey());
}
function w1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!P(r) || !r.isCollapsed()) return;
  const n = ks(r.focus.getNode());
  n && t.add(n.getKey());
}
function O1(e) {
  const t = w();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => R(r)) && (yl(e), t.removeText());
}
const R1 = new RegExp(
  String.raw`^\\\+?([${Tr}]+)(?:[ \u00A0]|$)`
);
function $1(e, t) {
  const r = R1.exec(e.getTextContent());
  return !!r && id(r[1], t);
}
function q1(e, t) {
  if (!ui(t.viewOptions)) return;
  if (Ct(e.getFirstChild())) {
    P1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if ($1(e, t.getMarker)) return;
    wa(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => le(o) && !o.is(e))) {
      Xo(e, tr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (we(r)) {
    const n = e.getChildren().filter((a) => !Fr(a)), i = w();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ks(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || D(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && sr(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Xo(e, tr);
}
function I1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Ar(t, aa(e.getMarker()));
  return r === "" ? void 0 : r;
}
function Wy(e) {
  const t = e.getChildren().filter((s) => !R(s) && oe(s, ue) !== "attribute"), r = t[0];
  r && M(r) && r.getTextContent().startsWith(U) && r.setTextContent(r.getTextContent().slice(1));
  const n = I1(e);
  n && t.push(Me(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function L1(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && D(t) ? r = t.getChildAtIndex(e.offset) : R(t) && e.offset === 0 ? r = t : M(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), z(r) && (r = r.getFirstChild()), !R(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!z(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function D1() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = L1(e.anchor), r = t?.getParent();
  if (!t || !z(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), Gi(n) && n.getTextContent().startsWith(U) && n.setTextContent(` ${n.getTextContent().slice(U.length)}`), Wy(r), M(n) && n.isAttached() && n.select(0, 0), !0;
}
function U1(e, t) {
  const r = e.getChildren(), n = r.some((s) => R(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => M(c) && !R(c) && c.getTextContent() === jt(s)
    ), a = oi(e).some(({ node: c }) => R(c));
    if (!o && !a) return;
    r.forEach((c) => {
      R(c) || (M(c) && c.getTextContent() === jt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => R(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function F1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(R(r) && r.getMarkerSyntax() === "opening")) {
    Wy(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => R(o) && o.getMarkerSyntax() === "closing");
  i && !s && ur(e, t);
}
function Hy(e, t, r) {
  if (!R(e.getFirstChild()) && r?.markerMode === "editable" && ui(r)) {
    Xo(e, t);
    return;
  }
  Xg(e, t);
}
function Gy() {
  const e = w();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Jy(e);
    return t !== "removed" ? t : (bl(), "handled");
  }
  return bl() ? "handled" : "declined";
}
function z1(e, t) {
  if (!t) return e;
  const r = mP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function mp(e, t) {
  const r = w();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Yy())
      return "declined";
  } else {
    const s = Jy(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => z1(s, t)
  );
  yp(n ?? "");
  for (const s of i)
    bl(), yp(s);
  return "handled";
}
function K1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Wi(n);
  if (!i) return !1;
  const s = Bt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !M(i) || R(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Jy(e) {
  const t = Bt(e.anchor.getNode()), r = Bt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), B1() ? "removed" : "needs-plain-split");
}
function yp(e) {
  if (e === "") return;
  const t = w();
  P(t) && t.insertText(e);
}
function B1() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Bt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => R(r) && r.getMarkerSyntax() === "opening");
}
function Yy() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Bt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function bl() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Yy();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Jr("fp", { closed: "false" });
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
  return i.getChildren().every(R) && i.append(Me(ir)), Xy(i), !0;
}
function Xy(e) {
  const t = e.getChildren().find((r) => !R(r));
  if (M(t)) {
    const r = pa(t);
    t.select(r, r);
    return;
  }
  if (D(t)) {
    Xy(t);
    return;
  }
  e.selectEnd();
}
function j1(e) {
  const t = [];
  let r = e;
  for (; r; )
    z(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function V1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Fe().getChildren()) {
    if (t && n.is(t)) {
      Ce(n) && r.push(n.getMarker());
      break;
    }
    (Ce(n) || Qe(n) || le(n)) && r.push(n.getMarker());
  }
  return r;
}
function W1(e) {
  let t = e;
  for (; D(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function H1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ct(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Fr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(W1(i)) && r === 0 : !1;
}
function G1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ct(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Fr(i) && t.is(i) && r === 0;
}
function J1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function Y1() {
  const e = w();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Ne(t, le), s = i ? void 0 : Ne(t, Ce), o = !n && !s && (!i || G1(i, t, r)) ? "paragraph" : "character", a = Bt(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: V1(t),
    openCharMarkers: j1(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: iu(t, r),
    anchorRect: J1()
  };
}
function X1() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!M(t) || R(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = yP.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function Q1(e, t, r) {
  Hy(e, t, r), sd(e);
}
function Z1(e, t, r) {
  const n = w();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = Ne(i, le);
  if (t === "backslash" && s && H1(s, i, n.focus.offset)) {
    Q1(s, e, r);
    return;
  }
  kl(e, r);
}
function Qy(e, t) {
  const r = e.getNode(), n = Bm(D(r) ? r : r.getParent());
  return t.is(n);
}
function e0(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !Qy(e, t);
}
function Qo(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function t0(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!R(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!z(r)) return e;
  const n = r.getParent();
  return n ? dr(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function r0(e, t, r) {
  const n = w();
  if (!P(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!Qy(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && e0(s, e)) return !1;
  const o = Hl(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (Qo(n.anchor, e, o), Qo(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = w();
  if (!P(a) || !a.isCollapsed()) return !1;
  const c = Wm(a);
  if (!c) return !1;
  const { parent: l, moving: u } = Vm(
    t0(c.anchor)
  );
  if (!e.is(l)) return !1;
  const d = u.filter((h) => !h.is(o)), f = qi(t);
  e.insertAfter(f), f.append(...d);
  const [p] = d;
  return z(p) ? ga(p) : f.select(0, 0), ui(r) && wa(f), !0;
}
function n0(e, t) {
  const r = w();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Zy(e) {
  const t = w();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function i0(e) {
  const t = Ne(e.anchor.getNode(), Ce);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !Hl(r) || (Qo(e.anchor, t, r), Qo(e.focus, t, r));
}
function s0(e, t, r, n) {
  const i = w();
  if (P(i) ? i0(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && X1(), e.kind === "closeTag") {
    Zy(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Gy() !== "declined") return;
  if (e.kind === "paragraph" && ut.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    Z1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if ($e.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Jm(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  sl(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: gn(), reference: r });
}
function kl(e, t) {
  const r = w();
  if (!P(r)) return !1;
  su(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!Ne(n, le)) {
    const o = Ne(n, Ce);
    if (o) return r0(o, e, t);
  }
  const i = ui(t);
  if (Hm()) {
    const o = w();
    if (!P(o)) return !1;
    const a = Ne(o.anchor.getNode(), le);
    return a ? (a.setMarker(e), i && wa(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return le(s) ? (i ? Xo(s, e) : s.setMarker(e), !0) : !1;
}
function o0() {
  const [e] = ce();
  return j(() => e.registerCommand(Jp, () => !0, Rt), [e]), null;
}
function a0(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = fP.exec(e)?.[1];
  return r === void 0 ? !1 : !id(r, t);
}
function eb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !a0(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!le(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!le(i) && !Ce(i)))
    return [i, r];
}
function tb(e, t) {
  const r = eb(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return Ce(n) ? zy(n, t, [i]) : qy([n, i], t);
}
function c0(e, t) {
  const r = w();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function rb(e) {
  const t = pP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function l0(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = rb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function u0(e) {
  const t = w();
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
  u0(e);
}
function kp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function nb(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return ur(e, r);
  const n = l0(e), i = e.getParent();
  if (le(i)) {
    if (!id(t, r.getMarker))
      return tb(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : ur(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), kp(s, t) && bp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (z(i) || B(i)) {
    const s = t.replace(/^\+/, "");
    if (!(z(i) ? M1(t, r.getMarker) : $e.isValidMarker(s)))
      return ur(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return ur(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(R).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (c0(c, it(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), kp(a, s) && bp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return ur(e, r);
}
function d0(e) {
  const t = w();
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
function f0(e, t) {
  const r = e.getTextContent();
  if (en(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ke(e.getParent()) && Yl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !d0(e)) {
    TT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = uP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), nb(e, n[1], t);
      return;
    }
    if (dP.test(r)) {
      t.pendingKeys.delete(e.getKey()), ur(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = it(e.getMarker(), e.getNested());
    if ((z(n) || B(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Me(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function p0(e, t) {
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
const us = ib("v"), h0 = ib("c"), xp = /^[ \u00A0]*$/;
function xl(e, t, r) {
  const n = e.getNextSibling();
  if (M(n) && n.getType() === Xe.getType() && n.getMode() === "normal" && oe(n, ue) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = Me(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function g0(e, t) {
  const r = e.getTextContent(), n = rr("v", e.getNumber());
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
      const [, l, u, d] = c, f = w(), p = P(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(rr("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      xl(e, d, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), ur(e, t);
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
  e.setNumber(o), e.setTextContent(rr("v", o)), a && xl(e, a, a.length);
}
const m0 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function y0(e, t) {
  if (!ly(e)) return !1;
  const r = e.getParent();
  if (!B(r)) return !1;
  const n = e.getTextContent();
  if (n === jt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = m0.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = w(), c = P(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(jt(s)), o) {
    const l = n.length - o.length, u = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const d = xl(e, o, u);
    d.isUnmergeable() || d.toggleUnmergeable();
  }
  return !0;
}
function b0(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!M(t)) return;
  const r = rr("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = h0.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function sb(e) {
  if (tt(e)) {
    const { wrapper: t } = fa(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (B(e)) {
    const { wrapper: t } = Xl(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (De(e)) {
    const t = [], r = ng(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = sg(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (ze(e)) {
    const t = [], r = vs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = vs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function k0(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return sb(e).some((n) => r.is(n));
}
function x0(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && le(e) && Xh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ms)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ys(l, e) && (i || k0(e)))
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
  return M(e) && e.getType() === Xe.getType() && e.getMode() === "normal" && oe(e, ue) !== "attribute";
}
function T0(e) {
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
  const i = T0(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ne(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (R(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (en(c)) continue;
      const h = cy.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = nb(c, h[1], e) || n : r === "idle" && hp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : tb(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = ur(c, e) || n;
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
    const f = x0(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && hp(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = ur(u, e) || n;
    }
  }
  return n;
}
function ob(e) {
  if (nn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (z(t)) return gs(t) !== void 0;
  return !1;
}
function C0(e) {
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
    if (xe(t) || xg(t)) return !0;
  return !1;
}
function _0(e, t) {
  const r = e.getTextContent(), n = oe(e, ue), i = e.getParent();
  if (n !== "attribute" && De(i)) {
    r.replace(/^[ \u00A0]+/, "") === rr("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (y0(e, t)) return;
  if (n === "attribute") {
    C0(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
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
  const s = w(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (hP.test(o)) {
    if (gx(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), ur(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function S0(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Mg(e, t);
}
function v0(e) {
  const t = (r) => {
    if (R(r)) {
      en(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (nn(r)) {
      yg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Ms)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ys(n, r) || S0(n, r)) && e.pendingKeys.add(r.getKey());
    if (ze(r)) {
      r.getTextContent() !== rr("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (M(r)) {
      if (r.getType() !== Xe.getType() || oe(r, ue) === "attribute") return;
      const n = r.getParent();
      if (De(n)) {
        r.getTextContent() !== rr("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
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
    if (!xe(r)) {
      if (Ke(r) && r.getChildrenSize() === 0) {
        const n = Qn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      D(r) && r.getChildren().forEach(t);
    }
  };
  Fe().getChildren().forEach(t);
}
const ab = Yp(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function xc(e) {
  const t = e();
  return Pt(Al), Pt(lh), t;
}
const _p = 8, M0 = 1e3;
function Mi(e, t) {
  const r = ze(e) ? ["va", "vp"] : tt(e) ? ["milestone"] : B(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    MC(Xn(n), e, t.pendingKeys);
}
function E0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Rl) || i.updateTags.has(Ts)) return;
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
  return Re(
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
    e.registerMutationListener(zr, r),
    e.registerMutationListener(Qr, r),
    e.registerMutationListener(Zr, r)
  );
}
function Tl(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = w();
  return r ? t ? Lu(r, t) : P(r) && Fn(r) : !1;
}
function A0(e, t, r) {
  return Re(
    e.registerCommand(
      Ut,
      (n) => {
        if (Zs() || Tl(t)) return !1;
        const i = ul(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Wu(Hu(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = mp(o, t.getMarker);
          if (a === "declined" && K1(e) && (a = mp(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      de
    ),
    e.registerCommand(
      Ut,
      (n) => {
        const i = ul(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !OA()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && P(o) && Fn(o) ? !1 : (n?.preventDefault(), P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Hn, void 0), a === "") return;
          const l = w();
          P(l) && l.insertText(a);
        }), !0);
      },
      Ae
    ),
    e.registerCommand(
      Ut,
      () => (t.splitExpected.current = !0, !1),
      Rt
    )
  );
}
function P0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = ce(), a = e?.markerMode === "editable", c = !!e && Qs(e), l = Q(void 0), u = Q(n), d = Q(s);
  return j(() => {
    u.current = n, d.current = s;
    const f = l.current;
    f && (e && (f.viewOptions = e), f.getMarker = t ?? wr, f.logger = r, f.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), j(() => {
    if (!a || !e) return;
    const f = {
      viewOptions: e,
      getMarker: t ?? wr,
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
    const A = () => T < _p ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${_p} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), _ = (S, G = "departure") => {
      o.update(() => {
        T = xc(
          () => yo(f, S, G)
        ) ? T + 1 : 0;
      });
    };
    let O;
    const $ = () => {
      if (O !== void 0 && clearTimeout(O), O = void 0, b || f.pendingKeys.size === 0) return;
      const S = u.current ?? M0;
      S < 0 || (O = setTimeout(() => {
        O = void 0, !(b || f.pendingKeys.size === 0) && (g || A() || _(void 0, "idle"));
      }, S));
    }, K = Re(
      o.registerNodeTransform(zr, (S) => {
        if (o.isComposing()) return;
        f0(S, f);
        const G = Qn(S);
        G && (ze(G.owner) || B(G.owner) || De(G.owner) || tt(G.owner) && fa(G.owner).wrapper === void 0) && Mi(G.owner, f);
      }),
      o.registerNodeTransform(xt, (S) => {
        o.isComposing() || (g0(S, f), Mi(S, f));
      }),
      o.registerNodeTransform(Wt, (S) => {
        o.isComposing() || (b0(S), S.isAttached() && Mi(S, f));
      }),
      o.registerNodeTransform(ut, (S) => {
        o.isComposing() || q1(S, f);
      }),
      o.registerNodeTransform(Te, (S) => {
        if (!o.isComposing()) {
          F1(S, f);
          for (const G of ["separator", "char"])
            S.isAttached() && Ys(Xn(G), S) && f.pendingKeys.add(S.getKey());
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
      o.registerNodeTransform(mr, (S) => {
        o.isComposing() || Mi(S, f);
      }),
      o.registerNodeTransform(Zr, (S) => {
        if (o.isComposing()) return;
        const G = Qn(S);
        G && (tt(G.owner) || ze(G.owner) || B(G.owner) || De(G.owner)) && Mi(G.owner, f);
      }),
      o.registerNodeTransform($e, (S) => {
        o.isComposing() || (U1(S, f), Mi(S, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(rn, (S) => {
        o.isComposing() || p0(S, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(Xe, (S) => {
        o.isComposing() || _0(S, f);
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
        Xe,
        (S) => {
          o.getEditorState().read(() => {
            for (const [G, q] of S) {
              if (q === "destroyed") continue;
              const H = ne(G);
              !H || oe(H, ue) !== "attribute" || Ke(H.getParent()) || o.getElementByKey(G)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      E0(o, f),
      ...c ? [
        o.registerNodeTransform(Xe, (S) => {
          o.isComposing() || AP(S);
        }),
        o.registerCommand(
          Wn,
          (S) => ap(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            S && typeof S == "object" && "clipboardData" in S ? S : null,
            o,
            !1,
            d.current
          ),
          Ae
        ),
        o.registerCommand(
          nr,
          (S) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            ap(
              S && typeof S == "object" && "clipboardData" in S ? S : null,
              o,
              !0,
              d.current
            )
          ),
          Ae
        ),
        o.registerCommand(
          Ut,
          (S) => IP(
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
          Ae
        )
      ] : [],
      o.registerCommand(
        nr,
        () => (!Tl(f) && !Zs() && yl(f), !1),
        de
      ),
      o.registerCommand(
        Vn,
        () => (o.isComposing() || O1(f), !1),
        Nr
      ),
      o.registerCommand(
        Er,
        (S) => S || o.isComposing() ? !1 : D1(),
        Nr
      ),
      o.registerCommand(
        sa,
        () => (g = !1, T = 0, $(), !1),
        Rt
      ),
      o.registerCommand(
        kr,
        (S) => (g = !1, T = 0, $(), (S.key === "Backspace" || S.key === "Delete") && !Tl(f, qu(S)) && (yl(f), w1(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !S.ctrlKey || S.altKey || S.shiftKey || S.metaKey || S.key !== " " && S.code !== "Space" || !wA() ? !1 : (S.preventDefault(), !0)),
        Ae
      ),
      o.registerCommand(
        Hp,
        (S) => {
          const G = Gy();
          G === "needs-plain-split" && o.dispatchCommand(Hn, void 0);
          const q = G !== "declined" || EC();
          return q && S?.preventDefault(), yo(f), q;
        },
        Ae
      ),
      o.registerCommand(
        Hn,
        () => (f.splitExpected.current = !0, Hm()),
        Ae
      ),
      A0(o, f, c),
      o.registerCommand(
        ab,
        () => {
          if (g) return !0;
          const S = o.getRootElement(), G = S?.ownerDocument, q = !!S && !!G && G.hasFocus() && S.contains(G.activeElement);
          let H;
          if (q) {
            const W = w();
            H = P(W) ? W.focus.key : h;
          }
          return xc(() => yo(f, H)), !0;
        },
        Rt
      ),
      o.registerCommand(
        Ol,
        () => {
          if (g) return !1;
          const S = w(), G = P(S) ? S.focus.key : h;
          return xc(() => yo(f, G)), !1;
        },
        Rt
      ),
      o.registerUpdateListener(({ editorState: S, tags: G }) => {
        f.splitExpected.current = !1, f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear(), f.rebuildAttempted.clear();
        const q = S.read(() => {
          const W = w();
          return P(W) ? W.focus.key : void 0;
        }), H = y;
        if (q !== void 0 && (y = q), G.has(Rl)) {
          f.pendingKeys.clear(), S.read(() => v0(f)), g = !0, q !== void 0 && (h = q);
          return;
        }
        if (G.has(wt)) {
          q !== void 0 && q !== H && (g = !0);
          return;
        }
        g || (q !== void 0 && (h = q), $(), !(k || q === void 0) && [...f.pendingKeys].some((W) => W !== q) && (k = !0, queueMicrotask(() => {
          k = !1, !b && (A() || _(h));
        })));
      })
    );
    return () => {
      b = !0, O !== void 0 && clearTimeout(O), O = void 0, p(), K(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const N0 = ["status_unknown", "status_invalid"], cb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, w0 = Object.values(cb);
function O0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = cb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Sp(e) {
  e.classList.remove(...N0), e.removeAttribute("aria-description"), w0.includes(e.title) && e.removeAttribute("title");
}
function R0(e, t, r, n) {
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
function $0(e) {
  const t = ne(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : R(t) && t.getParent()?.getKey() === r.getKey();
}
function q0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ce(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? $o;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = e1(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || $0(f)) continue;
            const h = ne(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Sp(p);
        }
        for (const [f, p] of d) {
          const h = n.getElementByKey(f);
          h && O0(h, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          R0(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Sp(u);
      }
    };
  }, [n, i, t, r]), null;
}
function lb(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = qr(o);
    a && D(s) && lb(s.getChildren(), a, r);
  }
}
function Ds(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = qr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Vi(a);
      if (l === void 0 || !l.includes(ft)) continue;
      const u = l.split(ft), d = [];
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
    ed(n, t) || ((le(n) || z(n)) && r.push(n.getMarker()), D(n) && r.push(...ub(n.getChildren(), t)));
  return r;
}
function db(e) {
  const t = [];
  for (const r of e) {
    const n = td(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = qr(r);
    i && t.push(...db(i));
  }
  return t;
}
function Us(e, t, r) {
  const n = ub(e, r), i = db(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function I0(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
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
function Oa(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function L0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!va(c, e, o, s)) return;
  const l = i ? Oa(c, i) : c.text, u = Lr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (sn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = yr.serializeEditorState(
    { type: gr, version: hr, content: u },
    s
  ).root.children;
  if (_n(d) !== c.sentinels.length) {
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
  if (Ir(d, o) === $r(e, o) && Us(e, d, o)) {
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
    ze(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : D(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function od(e) {
  const t = [];
  for (const r of e) {
    Fh(r) && t.push(r);
    const n = qr(r);
    n && t.push(...od(n));
  }
  return t;
}
function D0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Ly(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Oa(l, i) : l.text, f = Lr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (sn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], g = Dy(h), y = e.getCategory() !== g, k = Sy(e, h);
  if (k) {
    const _ = vy(
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
    const O = Zo(l, t, n);
    return O ? (Ds(_, O), {
      rebuilt: void 0,
      contentNodes: u,
      category: g,
      categoryChanged: !1,
      closedAs: _
    }) : void 0;
  }
  const b = _y(e, h, g, s);
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
  if (Ir(T, o) === $r(u, o) && Us(u, T, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Ds(T, A), { rebuilt: T, contentNodes: u, category: g, categoryChanged: y };
}
function vp(e) {
  return e.$?.textType;
}
function U0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && vp(e) === vp(t);
}
function F0(e) {
  const t = [];
  for (const r of e) {
    const n = ne(r);
    n?.isAttached() && xe(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function z0(e) {
  if (!R(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!B(t)) return;
  const r = e.getTextContent();
  if (en(e)) return;
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
function K0(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!$e.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Mp(a.node, s);
  const c = n.getChildren().filter(R).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Mp(l.node, s);
}
function B0(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: u } = rd(e, a, o);
  if (u.length === 0 && s.length === 0 || !va(l, s, a, o)) return;
  const d = i ? Oa(l, i) : l.text, f = Fy(d, a);
  if (sn(f.content) !== l.sentinels.length) {
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
  if (g.length === s.length && Ir(g, a) === $r(s, a) && Us(s, g, a) && Ir(h, a) === $r(u, a) && Us(u, h, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const k = Ds(h, y);
  Ds(g, y, k);
  const b = fb([...u, ...s]), T = od([...h, ...g]);
  for (let A = 0; A < b.length && A < T.length; A++)
    b[A].sid !== void 0 && T[A].number === b[A].number && (T[A].sid = b[A].sid);
  return { rebuilt: h, contentNodes: u, followingBlocks: g };
}
function j0(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = jy(e, i, n);
  if (!o) return;
  const a = r ? Oa(o, r) : o.text, c = Lr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (sn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = yr.serializeEditorState(
    { type: gr, version: hr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Na(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ir(u, i) === $r(d, i) && Us(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function V0(e, t, r, n, i) {
  const s = I0(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (b) => {
    B(b) ? c.set(b.getKey(), b) : De(b) ? l.set(b.getKey(), b) : Ce(b) ? u.set(b.getKey(), b) : o.set(b.getKey(), [b]);
  };
  for (const b of t) {
    const T = ne(b);
    if (!T?.isAttached()) continue;
    const A = Ls(T);
    if (A) {
      if (p(A), R(T)) {
        const _ = eb(T, r.getMarker);
        _ && a.push(_);
      }
      if (B(A)) {
        const _ = z0(T);
        _ && f.set(A.getKey(), _);
      }
    }
  }
  const h = /* @__PURE__ */ new Set();
  for (const [b, T] of a)
    h.has(b.getKey()) || h.has(T.getKey()) || ([b, T].forEach((A) => {
      h.add(A.getKey()), o.delete(A.getKey());
    }), Ce(b) ? (u.set(b.getKey(), b), d.set(b.getKey(), [T])) : o.set(b.getKey(), [b, T]));
  if (s) {
    const b = Ls(s.node);
    b && !h.has(b.getKey()) && p(b);
  }
  const g = F0(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && u.size === 0 && g.length === 0)
    return;
  const y = new Set(g.map((b) => b.getKey())), k = /* @__PURE__ */ new Map();
  lb(Fe().getChildren(), e.root.children, k);
  for (const b of f.values()) K0(b, k);
  for (const b of c.values()) {
    const T = k.get(b.getKey()), A = T ? qr(T.node) : void 0;
    if (!T || !A) continue;
    const _ = D0(b, k, r, y, s);
    if (!_) continue;
    if (_.closedAs) {
      const K = T.siblings.indexOf(T.node);
      if (K < 0) continue;
      const [S, ...G] = _.closedAs, q = T.node;
      for (const H of Object.keys(q)) Reflect.deleteProperty(q, H);
      Object.assign(q, S), T.siblings.splice(K + 1, 0, ...G);
      continue;
    }
    if (_.categoryChanged) {
      const K = T.node;
      _.category === void 0 ? delete K.category : K.category = _.category;
    }
    if (!_.rebuilt) continue;
    const O = k.get(_.contentNodes[0].getKey());
    if (!O) continue;
    const $ = A.indexOf(O.node);
    $ < 0 || A.splice($, _.contentNodes.length, ..._.rebuilt);
  }
  for (const b of o.values()) {
    const T = k.get(b[0].getKey());
    if (!T) continue;
    const A = L0(b, k, r, y, s);
    if (!A) continue;
    const _ = T.siblings.indexOf(T.node);
    _ < 0 || T.siblings.splice(_, b.length, ...A);
  }
  for (const b of u.values()) {
    const T = k.get(b.getKey()), A = T ? qr(T.node) : void 0;
    if (!T || !A) continue;
    const _ = d.get(b.getKey()) ?? [], O = B0(b, k, r, y, s, _);
    if (!O) continue;
    const $ = O.contentNodes.at(0), K = $ ? k.get($.getKey()) : void 0;
    if ($ && !K) continue;
    const S = K ? A.indexOf(K.node) : A.length, G = T.siblings.indexOf(T.node);
    S < 0 || G < 0 || (A.splice(S, O.contentNodes.length, ...O.rebuilt), T.siblings.splice(G + 1, _.length, ...O.followingBlocks));
  }
  for (const b of l.values()) {
    const T = k.get(b.getKey());
    if (!T) continue;
    const A = 1 + Na(b).length, _ = j0(b, r, s);
    if (!_) continue;
    const O = T.siblings.indexOf(T.node);
    O < 0 || T.siblings.splice(O, A, ..._);
  }
  for (const b of g) {
    const T = k.get(b.getKey());
    if (!T) continue;
    const A = T.siblings.indexOf(T.node);
    if (A < 0) continue;
    T.siblings.splice(A, 1);
    const _ = T.siblings[A - 1], O = T.siblings[A], $ = _ && Vi(_), K = O && Vi(O);
    _ && O && $ !== void 0 && K !== void 0 && U0(_, O) && (_.text = $ + K, T.siblings.splice(A, 1));
  }
  return $m(e, r.viewOptions);
}
function W0({
  viewOptions: e,
  logger: t
}) {
  const [r] = ce(), n = ui(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        ut,
        (i) => H0(i, t)
      );
  }, [r, n, t]), null;
}
function H0(e, t) {
  e.getMarker() !== tr && (e.isEmpty() || Ct(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${tr}" (key ${e.getKey()})`
  ), e.setMarker(tr)));
}
function G0({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ce(), n = Q({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, ea(s, e) || J0(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Kt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Cl(r);
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
        Fe().getChildren().filter(Qe).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Cl(r) || Ep(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: bo(a) === bo(c)
      }));
    };
    return Re(
      ...[Wt, Ur].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      Ft,
      () => {
        const i = n.current;
        return i.phase === "idle" && Z0(i, pb()), !1;
      },
      Rt
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Ft, void 0));
    };
    return Re(
      r.registerMutationListener(It, i),
      r.registerMutationListener(xt, i)
    );
  }, [r]), j(() => {
    const i = () => nN(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function J0(e, t, r) {
  if (Y0(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Cl(t);
  (!n || n === r.book) && t.update(() => hb(t, r.chapterNum, r.verseNum), {
    tag: wt
  });
}
function Y0(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ea(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function pb() {
  const e = w(), t = Jh(e);
  if (!t) return;
  const r = ad(), n = rT(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = cu(t, e), { verseNum: o, verse: a } = XC(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Cl(e) {
  return e.getEditorState().read(() => ad()?.getCode() || void 0);
}
function ad() {
  return Fe().getChildren().find(Ce);
}
function Ep(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Tc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Tc(e, t), e.phase = "navigating") : i && Tc(e, t), r && r !== e.scrRef.book && yb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Tc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => hb(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: wt }
    );
  });
}
function hb(e, t, r) {
  const n = w()?.clone();
  X0(t, r);
  const i = w();
  i && !(n && i.is(n)) && Hr(e, wt);
}
function X0(e, t) {
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
  a && (le(a) ? !M(a.getFirstChild()) && di(a) || sr(a, 0) : Q0(a));
}
function Q0(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ye(n)) {
    M(e) ? e.selectEnd() : sr(t, r);
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
  const s = D(n) && !B(n) ? gb(n) : void 0;
  s ? s.select(0, 0) : sr(t, r);
}
function gb(e) {
  const t = e.getFirstChild();
  if (M(t)) return t;
  if (D(t) && !B(t)) return gb(t);
}
function bo(e) {
  return e.read(() => {
    const t = Fe().getChildren().find(Qe);
    return `${ad()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function Z0(e, t) {
  e.phase !== "navigating" && t && (eN(t, e.scrRef) || yb(e, tN(t, e.scrRef)));
}
function eN(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? mb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function mb(e, t) {
  try {
    return Gl(e, t);
  } catch {
    return !1;
  }
}
function tN(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const rN = 8;
function yb(e, t) {
  return ea(t, e.scrRef) || e.pendingEchoes.some((r) => ea(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > rN && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ea(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function nN(e) {
  e.phase = "idle";
}
function iN(e) {
  return Ce(e) ? `${e.__code}` : De(e) ? `${e.__marker} "${e.__number}"` : z(e) ? `${e.__marker}` : Bs(e) ? `${e.__marker} "${e.__number}"` : bt(e) ? `${e.__caller}` : li(e) ? `${e.__marker} "${e.__number}"` : B(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : le(e) ? `${e.__marker}` : M(e) ? `"${e.__text}"${sN(e)}` : ve(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : ze(e) ? `${e.__marker} "${e.__number}"` : "";
}
function sN(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ks]) : "";
}
function oN() {
  const [e] = ce();
  return /* @__PURE__ */ E(
    vk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: iN,
      editor: e
    }
  );
}
const bb = Lp(null), Ap = 4;
function aN({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Q(null), s = Dp(bb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ E("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function cN({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = ge(), [s, o] = ge(), a = be(
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
  }, l = Ye(() => ({ registerItem: a }), [a]);
  return j(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ E(bb.Provider, { value: l, children: /* @__PURE__ */ E("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function lN({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Q(null), c = Q(null), [l, u] = ge(!1), d = () => {
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
  }, [c, a, l]), /* @__PURE__ */ Pe(zn, { children: [
    /* @__PURE__ */ Pe(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ E("span", { className: i }),
          t && /* @__PURE__ */ E("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ E("i", { className: "chevron-down" })
        ]
      }
    ),
    l && Un(
      /* @__PURE__ */ E(cN, { dropDownRef: a, onClose: d, children: s }),
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
}, Sl = {
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
function uN({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ E(
    lN,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + dN(t),
      buttonLabel: fN(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(_l).map((n) => /* @__PURE__ */ Pe(
        aN,
        {
          className: "item block-marker " + pN(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ E("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ E("span", { className: "text usfm_" + n, children: _l[n] })
          ]
        },
        n
      ))
    }
  );
}
function dN(e) {
  return e && e in Sl ? e : "ban";
}
function fN(e) {
  return e && e in Sl ? Sl[e] : "No Style";
}
function pN(e) {
  return e ? "active dropdown-item-active" : "";
}
function Pp() {
  return /* @__PURE__ */ E("div", { className: "divider" });
}
const hN = Mn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ce(), [o, a] = ge(s), [c, l] = ge(), [u, d] = ge(!1), [f, p] = ge(!1), h = be(
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
    Ft,
    (g, y) => (a(y), !1),
    de
  ), [s]), /* @__PURE__ */ Pe(zn, { children: [
    /* @__PURE__ */ E(Pm, { onStateChange: h }),
    /* @__PURE__ */ Pe("div", { className: "toolbar", children: [
      /* @__PURE__ */ E(
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
          children: /* @__PURE__ */ E("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ E(
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
          children: /* @__PURE__ */ E("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ E(Pp, {}),
      o === s && /* @__PURE__ */ Pe(zn, { children: [
        /* @__PURE__ */ E(
          uN,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ E(Pp, {})
      ] }),
      /* @__PURE__ */ E("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), gN = Ta(), mN = {}, yN = {};
function bN() {
  return /* @__PURE__ */ E("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Cc(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function Np(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = D(n) ? n.getLastDescendant() ?? n : n;
  return ba(r, i);
}
function wp(e, t, r) {
  Ak(e, () => qi(t));
  const n = w();
  if (!P(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    le(o) && i.add(o);
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
  const d = Q(null), f = Q(null), p = Q(null), h = Q(null), g = Q(t), y = Q(void 0), k = Q(void 0), b = Q(void 0), T = Q(void 0), A = Q(!1), [_, O] = ge(t), [$, K] = ge(0), [S, G] = ge(), {
    isReadonly: q = !1,
    structureProtectionMode: H = "off",
    onHiddenContentDelete: W,
    hasExternalUI: re = !1,
    hasSpellCheck: fe = !1,
    textDirection: qe = "ltr",
    markerMenuTrigger: Oe = "\\",
    view: ht,
    nodes: or,
    debug: on = !1,
    contextMenu: ie,
    styleInfo: N,
    markerSettleDelayMs: ee,
    copyLimit: he
  } = a ?? yN, _e = ht ?? gN, st = ws(_e) && (_e.markerMode !== "hidden" || !_e.hasSpacing || _e.hasGutterParaMarkers || _e.hasActiveTextFocusBox) ? {
    ..._e,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : _e, gt = Q(st);
  Yt(gt.current, st) || (gt.current = st);
  const te = gt.current, He = Ye(() => or ?? mN, [or]), Ra = Ye(() => ie, [ie]), fi = Ye(
    () => IC(N ?? $o),
    [N]
  ), Se = Q(c);
  Yt(Se.current, c) || (Se.current = c);
  const Ge = Se.current, pe = ws(te), St = q || pe, Ie = st !== _e;
  j(() => {
    pe && !q && Ge?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Ie && Ge?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), te?.markerMode === "visible" && !q && Ge?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [pe, q, Ie, Ge, te?.markerMode]);
  const ar = Q(null), eo = Ye(() => {
    if (te.markerMode !== "editable") return;
    const I = N ?? $o;
    return {
      getContext: () => ar.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (L) => c1(
        I,
        L,
        He.extraValidMarkers
      ),
      getEnterItems: (L) => l1(
        I,
        L,
        He.extraValidMarkers
      ),
      apply: (L, J) => {
        const Y = ar.current;
        Y && (J.trigger === "enter" ? Y.splitParagraphWithMarker(L.marker) : Y.applyMarkerMenuSelection(L, J));
      },
      commitTypedCloser: (L) => {
        ar.current?.commitTypedCloser(L);
      }
    };
  }, [te, N, He.extraValidMarkers]), Ht = (I) => {
    A.current || (A.current = !0, Se.current?.warn(
      `Editor: cannot ${I} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Zi = (I) => {
    if (pe)
      throw new Error(
        `Cannot ${I} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Kr = (I) => {
    if (Zi(I), St) throw new Error(`Cannot ${I} in readonly mode`);
  }, An = () => !!d.current && pm(d.current), to = Ye(
    () => ({
      namespace: "platformEditor",
      theme: { ...ny, showCharMarkerTitles: te.showCharMarkerTitles },
      editable: !St,
      editorState: void 0,
      // Handling of errors during update
      onError(I) {
        throw I;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [ct, ...pe ? nS : ku]
    }),
    [St, pe, te.showCharMarkerTitles]
  );
  Co.initialize(Ge);
  function vt(I) {
    if (I !== void 0 && !$A(I, He.extraValidMarkers))
      throw new Error(`Unsupported character marker '${I}'`);
  }
  const Gt = be(() => {
    const I = d.current;
    if (!I) return g.current;
    const L = Vd(I), J = k.current;
    if ((!L || L.size === 0) && !J) return g.current;
    const Y = I.getEditorState(), ke = Y.toJSON();
    return Y.read(
      () => V0(
        ke,
        L ?? /* @__PURE__ */ new Set(),
        { viewOptions: te, getMarker: fi, logger: Ge },
        J,
        b.current
      )
    ) ?? g.current;
  }, [te, fi, Ge]);
  function Cr(I, L, J) {
    if (pe && L === "remote") {
      Se.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    Zi("apply an update");
    const Y = An(), ke = !Y && d.current ? Hr(d.current, jr) : void 0;
    d.current?.update(
      () => {
        L === "remote" && Pt(Ts), Y || Pt(jr), J && Pt(J), NS(I, te, He, Ge);
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
          ke?.(), !Y && d.current && ac(d.current);
          const et = d.current?.getEditorState();
          if (!et) return;
          const Le = Co.deserializeEditorState(et, te);
          if (Le) {
            const Je = !Yt(g.current, Le);
            if (Je && (g.current = Le), Je || !Yt(_, Le)) {
              const Mt = rf(I, et, "apply");
              T.current = Le, s?.(Le, I, L, Mt);
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
      Kr("cut"), d.current && wu(d.current);
    },
    copy() {
      d.current && Nu(d.current);
    },
    paste() {
      Kr("paste"), d.current && Ou(d.current);
    },
    pastePlainText() {
      Kr("paste as plain text"), d.current && Ru(d.current);
    },
    getUsj() {
      return Gt();
    },
    commitPendingMarkerEdits() {
      const I = d.current;
      if (!I) return;
      const L = !An(), J = L ? Hr(I, jr) : void 0;
      I.update(
        () => {
          L && Pt(jr), I.dispatchCommand(ab, void 0);
        },
        { discrete: !0 }
      ), J?.(), L && ac(I);
    },
    setTransientInput(I) {
      if (!I) {
        k.current = void 0;
        return;
      }
      const L = d.current?.getEditorState().read(() => {
        const J = w();
        return P(J) && J.isCollapsed() ? J.focus.key : void 0;
      });
      k.current = { input: I, nodeKey: L ?? b.current?.key };
    },
    setUsj(I) {
      if (!Yt(g.current, I)) {
        g.current = I, k.current = void 0;
        const L = Yt(_, I);
        O(I), L && K((J) => J + 1);
      }
    },
    applyUpdate(I, L = "remote") {
      Cr(I, L);
    },
    replaceEmbedUpdate(I, L) {
      const J = d.current?.read(() => l_(I, L));
      J ? this.applyUpdate(J) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${I}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (pe) {
        Ht("get the selection");
        return;
      }
      return d.current?.read(hu);
    },
    setSelection(I) {
      if (pe) {
        Ht("set the selection");
        return;
      }
      d.current?.update(() => {
        const L = xa(I);
        L !== void 0 && (Pr(L), Pt(ch));
      });
    },
    setAnnotation(I, L, J, Y, ke) {
      if (pe) {
        Ht("set an annotation");
        return;
      }
      let et, Le, Je, Mt;
      typeof Y == "function" || Y === void 0 ? (et = Y, Le = ke) : (et = Y.onClick, Le = Y.onRemove, Je = Y.onMouseEnter, Mt = Y.onMouseLeave), f.current?.setAnnotation(
        I,
        $d(L),
        J,
        et,
        Le,
        Je,
        Mt
      );
    },
    removeAnnotation(I, L) {
      f.current?.removeAnnotation($d(I), L);
    },
    formatPara(I) {
      Kr("format a paragraph"), d.current?.update(
        () => {
          const L = w();
          if (!P(L)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${I}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const J = L.isBackward() ? L.focus : L.anchor, Y = Ne(J.getNode(), Ce);
          if (Y) {
            const ke = L.isBackward() ? L.anchor : L.focus, Le = !L.isCollapsed() && !Y.is(ke.getNode()) && !Y.isParentOf(ke.getNode()) ? { key: ke.key, offset: ke.offset, type: ke.type } : void 0, Je = mn();
            if (Je.anchor.set(J.key, J.offset, J.type), Je.focus.set(J.key, J.offset, J.type), Pr(Je), !kl(I, te)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${I}"`
              );
              return;
            }
            if (!Le) return;
            const Mt = ne(Le.key);
            if (!Mt?.isAttached()) return;
            const Br = Mt.getTopLevelElement();
            if (!Br) return;
            const Lt = Y.getNextSibling();
            if (!le(Lt)) return;
            let Jt = Lt.getNextSibling();
            for (; Jt; ) {
              const ro = Jt.is(Br), no = Jt.getNextSibling();
              if (le(Jt)) {
                const an = mn();
                an.anchor.set(Jt.getKey(), 0, "element"), an.focus.set(Jt.getKey(), Jt.getChildrenSize(), "element"), Pr(an), wp(an, I, te);
              }
              if (ro) break;
              Jt = no;
            }
            return;
          }
          wp(L, I, te);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(I) {
      return d.current?.read(
        () => d.current?.getElementByKey(I) ?? void 0
      );
    },
    removeCharacterMarker(I) {
      if (St) throw new Error("Cannot remove character marker in readonly mode");
      vt(I);
      let L = !1;
      return d.current?.update(
        () => {
          const J = w();
          P(J) && (L = Xm(J, I, te));
        },
        { discrete: !0 }
      ), L;
    },
    replaceCharacterMarker(I, L) {
      if (St) throw new Error("Cannot replace character marker in readonly mode");
      vt(I), vt(L);
      let J = !1;
      return d.current?.update(
        () => {
          const Y = w();
          P(Y) && (J = WA(Y, I, L));
        },
        { discrete: !0 }
      ), J;
    },
    extendCharacterMarker(I, L) {
      if (St) throw new Error("Cannot extend character marker in readonly mode");
      vt(I), L?.forEach(
        (Y) => vt(Y)
      );
      let J = !1;
      return d.current?.update(
        () => {
          const Y = w();
          P(Y) && (J = HA(
            Y,
            I,
            L,
            te
          ));
        },
        { discrete: !0 }
      ), J;
    },
    insertMarker(I) {
      if (St) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!il(I, He.extraValidMarkers))
        throw new Error(`Unsupported marker '${I}'`);
      const L = sl(
        I,
        y,
        te,
        He,
        Ge,
        void 0,
        N
      );
      return L.action({ editor: d.current, reference: r }), L.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!q)
        return d.current?.getEditorState().read(() => Y1());
    },
    applyMarkerMenuSelection(I, L) {
      if (q) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (I.kind !== "closeTag" && !il(I.marker, He.extraValidMarkers))
        throw new Error(`Unsupported marker '${I.marker}'`);
      let J;
      return d.current.update(() => {
        J = s0(I, L, r, {
          expandedNoteKeyRef: y,
          viewOptions: te,
          nodeOptions: He,
          logger: c,
          styleInfo: N
        });
      }), J;
    },
    splitParagraphWithMarker(I) {
      if (q) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        kl(I, te);
      });
    },
    commitTypedMarker(I, L) {
      if (q) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let J = !1;
      return d.current.update(() => {
        J = n0(I, L), J || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), J;
    },
    commitTypedCloser(I) {
      if (q) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let L = !1;
      return d.current.update(() => {
        L = Zy(I), L || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), L;
    },
    insertNote(I, L, J) {
      Kr("insert a note"), d.current?.update(
        () => {
          const Y = Ug(
            I,
            L,
            J,
            r,
            te,
            He,
            Ge
          );
          Cc(Y, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(I) {
      d.current?.update(() => {
        const L = Mr(I);
        L && (jc(L, te), Cc(L, y));
      });
    },
    selectAfterNote(I) {
      const L = d.current;
      if (!L) return;
      const J = !An(), Y = J ? Hr(L, jr) : void 0;
      if (L.update(
        () => {
          J && Pt(jr);
          const ke = Mr(I);
          ke && zg(ke);
        },
        { discrete: !0 }
      ), Y?.(), J) {
        ac(L);
        const ke = Hr(
          L,
          jr
        );
        L.update(
          () => {
            Pt(jr), L.dispatchCommand(Ft, void 0);
          },
          { discrete: !0 }
        ), ke();
      }
    },
    selectNoteTextOffset(I, L, J) {
      d.current?.update(() => {
        const Y = Mr(I);
        if (!Y) return;
        const ke = J?.glyph;
        (J?.field === "category" ? Q_(Y, L, ke) || lf(Y, 0) : lf(Y, L, ke)) || jc(Y, te), Cc(Y, y);
      });
    },
    getNoteOps(I) {
      const L = d.current;
      return L ? Ei(L, () => {
        const J = Mr(I);
        if (J)
          return ba(J);
      }) : void 0;
    },
    getOpsAfterNote(I) {
      const L = d.current;
      return L ? Ei(L, () => {
        const J = Mr(I);
        return J ? Np(J) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(I) {
      const L = d.current, J = L ? Ei(L, () => {
        const Le = Mr(I);
        if (!Le) return;
        const Je = uu(Le, "apply");
        return { ops: Np(Le), notePosition: Je };
      }) : void 0;
      if (!J) return;
      const { ops: Y, notePosition: ke } = J;
      if (Y.length === 0 || ke === void 0) return Y;
      const et = Y.reduce(
        (Le, Je) => Le + (typeof Je.insert == "string" ? Je.insert.length : 1),
        0
      );
      return Cr([{ retain: ke + 1 }, { delete: et }], "remote", Al), Y;
    },
    getNoteIndex(I) {
      const L = d.current;
      return L ? Ei(L, () => fu(I)) : void 0;
    },
    getNoteKey(I) {
      const L = d.current;
      return L ? Ei(L, () => Mr(I)?.getKey()) : void 0;
    },
    highlightNote(I) {
      p.current?.setHighlightedNote(I);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  ar.current = pi, ra(u, () => pi), j(() => {
    const I = d.current;
    if (I)
      return I.registerUpdateListener(({ editorState: L }) => {
        L.read(() => {
          const J = w();
          if (!P(J) || !J.isCollapsed()) return;
          const Y = J.focus.getNode();
          M(Y) && (b.current = { key: Y.getKey(), offset: J.focus.offset });
        });
      });
  }, []);
  const hi = be(
    (I, L, J, Y, ke) => {
      if (pe) return;
      const et = Co.deserializeEditorState(I, te);
      if (et) {
        const Le = !Yt(g.current, et);
        if (Le && (g.current = et), Le || !Yt(_, et)) {
          const Je = rf(Y, I), Mt = Je && !ke.read(() => ne(Je)) ? Je : void 0;
          T.current = et, s?.(et, Y, "local", Mt);
        }
      }
    },
    [_, s, te, pe]
  );
  j(() => {
    const I = d.current;
    if (!(!I || !s))
      return I.registerUpdateListener(({ tags: L, dirtyElements: J, dirtyLeaves: Y }) => {
        !L.has(Rl) && (J.size === 0 && Y.size === 0 || L.has(Ts) || !Vd(I)?.size) || queueMicrotask(() => {
          const ke = Gt();
          !ke || Yt(T.current, ke) || (T.current = ke, s(ke, void 0, "local", void 0));
        });
      });
  }, [s, Gt]);
  const Pn = be(
    (I) => {
      G(I.contextMarker), o?.(I);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Pe(eh, { initialConfig: to, children: [
      /* @__PURE__ */ E(Lv, { isEditable: !St }),
      /* @__PURE__ */ Pe("div", { className: "editor-container", children: [
        re ? /* @__PURE__ */ E(Pm, { onStateChange: Pn }) : /* @__PURE__ */ E(
          "div",
          {
            className: "editor-toolbar-container" + (St ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ E(
              hN,
              {
                ref: h,
                editorRef: ar,
                isReadonly: St,
                onStateChange: Pn
              }
            )
          }
        ),
        /* @__PURE__ */ Pe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ E(rh, { editorRef: d }),
          /* @__PURE__ */ E(
            Ek,
            {
              contentEditable: /* @__PURE__ */ E(
                th,
                {
                  className: `editor-input usfm ${PS(te).join(" ")}${te.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${te.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: fe
                }
              ),
              placeholder: /* @__PURE__ */ E(bN, {}),
              ErrorBoundary: nh
            }
          ),
          re && /* @__PURE__ */ E(Iv, {}),
          /* @__PURE__ */ E(ih, {}),
          r && n && /* @__PURE__ */ E(G0, { scrRef: r, onScrRefChange: n }),
          r && !re && /* @__PURE__ */ E(
            NE,
            {
              trigger: Oe,
              scrRef: r,
              contextMarker: S,
              getMarkerAction: (I) => sl(
                I,
                y,
                te,
                He,
                Ge,
                void 0,
                N
              ),
              editableHarness: eo
            }
          ),
          /* @__PURE__ */ E(
            cM,
            {
              scripture: _,
              scriptureRef: g,
              nodeOptions: He,
              editorAdaptor: yr,
              viewOptions: te,
              logger: Ge
            },
            $
          ),
          /* @__PURE__ */ E(NM, { onChange: i }),
          /* @__PURE__ */ E(
            _S,
            {
              onChange: hi,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Jk
            }
          ),
          /* @__PURE__ */ E(QA, { viewOptions: te }),
          /* @__PURE__ */ E(TS, { ref: f, logger: Ge }),
          /* @__PURE__ */ E(iv, { viewOptions: te }),
          /* @__PURE__ */ E(bv, {}),
          /* @__PURE__ */ E(Sv, {}),
          te?.markerMode !== "editable" && /* @__PURE__ */ E(vv, { logger: Ge }),
          /* @__PURE__ */ E(Nv, { options: Ra }),
          /* @__PURE__ */ E(WP, { limit: he, viewOptions: te }),
          /* @__PURE__ */ E(qv, {}),
          /* @__PURE__ */ E(Uv, {}),
          /* @__PURE__ */ E(zv, {}),
          /* @__PURE__ */ E(o0, {}),
          /* @__PURE__ */ E(
            Zv,
            {
              isEnabled: te?.markerMode !== "editable",
              structureProtectionMode: H,
              copyLimit: he,
              onHiddenContentDelete: W
            }
          ),
          /* @__PURE__ */ E(
            P0,
            {
              viewOptions: te,
              getMarker: fi,
              logger: Ge,
              markerSettleDelayMs: ee,
              structureProtectionMode: H,
              copyLimit: he
            }
          ),
          te?.markerMode === "visible" && /* @__PURE__ */ E(VP, { viewOptions: te, copyLimit: he }),
          /* @__PURE__ */ E(
            q0,
            {
              styleInfo: N,
              viewOptions: te,
              logger: Ge
            }
          ),
          /* @__PURE__ */ E(lM, { ref: p }),
          /* @__PURE__ */ E(
            uM,
            {
              expandedNoteKeyRef: y,
              nodeOptions: He,
              viewOptions: te,
              logger: Ge
            }
          ),
          /* @__PURE__ */ E(PM, {}),
          /* @__PURE__ */ E(ev, {}),
          /* @__PURE__ */ E(YS, {}),
          /* @__PURE__ */ E(W0, { viewOptions: te, logger: Ge }),
          /* @__PURE__ */ E(wM, {}),
          /* @__PURE__ */ E(pE, { structureProtectionMode: H }),
          /* @__PURE__ */ E(hE, { textDirection: qe }),
          /* @__PURE__ */ E(mE, {}),
          /* @__PURE__ */ E(AE, {}),
          l
        ] }),
        on && /* @__PURE__ */ E(oN, {})
      ] })
    ] }, te.verseLayout ?? "inline")
  );
}), Ew = Mn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ E(kb, { ref: r, ...i });
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
function kN(e) {
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
class xN {
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
      markedComment: kN(t)
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
                h.slice().reverse().forEach((A) => {
                  const _ = A.get("id"), $ = A.get("type") === "thread" ? Tb(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (K) => ta(
                        K.get("content"),
                        K.get("author"),
                        K.get("id"),
                        K.get("timeStamp"),
                        K.get("deleted")
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
function TN(e) {
  const [t, r] = ge(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function CN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Q(null);
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
  }, [n, e]), /* @__PURE__ */ E("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Pe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function _N({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Un(
    /* @__PURE__ */ E(CN, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Cb() {
  const [e, t] = ge(null), r = be(() => {
    t(null);
  }, []), n = Ye(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ E(_N, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = be(
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
const SN = {
  ...ny,
  paragraph: "CommentEditorTheme__paragraph"
};
function vN(...e) {
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
      className: vN(
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
function MN({
  className: e
}) {
  return /* @__PURE__ */ E(th, { className: e || "ContentEditable__root" });
}
function EN({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ E("div", { className: t || "Placeholder__root", children: e });
}
const Rp = Yp("INSERT_INLINE_COMMAND");
function AN({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Q(null), s = be(() => {
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
  }, [e, t, r, s]), /* @__PURE__ */ E("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ E("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ E("i", { className: "icon add-comment" }) }) });
}
function PN({ onEscape: e }) {
  const [t] = ce();
  return j(() => t.registerCommand(
    Jp,
    (r) => e(r),
    Nr
  ), [t, e]), null;
}
function _b({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ E(eh, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: SN
  }, children: /* @__PURE__ */ Pe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ E(
      Fk,
      {
        contentEditable: /* @__PURE__ */ E(MN, { className: e }),
        placeholder: /* @__PURE__ */ E(EN, { children: s }),
        ErrorBoundary: nh
      }
    ),
    /* @__PURE__ */ E(Uk, { onChange: n }),
    /* @__PURE__ */ E(ih, {}),
    t !== !1 && /* @__PURE__ */ E(Ik, {}),
    /* @__PURE__ */ E(PN, { onEscape: r }),
    /* @__PURE__ */ E(Lk, {}),
    i !== void 0 && /* @__PURE__ */ E(rh, { editorRef: i })
  ] }) });
}
function Sb(e, t) {
  return be(
    (r, n) => {
      r.read(() => {
        e(zk()), t(!Kk(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function NN({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = ge(""), [s, o] = ge(!1), a = Q(null), c = Ye(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Q(null), u = Mb(), d = be(() => {
    e.getEditorState().read(() => {
      const g = w();
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
          const { left: A, bottom: _, width: O } = b.getBoundingClientRect(), $ = Nk(e, b);
          let K = $.length === 1 ? A + O / 2 - 125 : A - 125;
          K < 10 && (K = 10), T.style.left = `${K}px`, T.style.top = `${_ + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const S = $.length, { container: G } = c, q = c.elements, H = q.length;
          for (let W = 0; W < S; W++) {
            const re = $[W];
            let fe = q[W];
            fe === void 0 && (fe = document.createElement("span"), q[W] = fe, G.appendChild(fe));
            const Oe = `position:absolute;top:${re.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${re.left}px;height:${re.height}px;width:${re.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            fe.style.cssText = Oe;
          }
          for (let W = H - 1; W >= S; W--) {
            const re = q[W];
            G.removeChild(re), q.pop();
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
  }, h = Sb(i, o);
  return /* @__PURE__ */ Pe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ E(
      _b,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Pe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
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
function wN({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = ge(""), [s, o] = ge(!1), a = Q(null), c = Mb(), l = Sb(i, o);
  return /* @__PURE__ */ Pe(zn, { children: [
    /* @__PURE__ */ E(
      _b,
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
            const d = a.current;
            d !== null && d.dispatchCommand(xk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ E("i", { className: "send" })
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
  return /* @__PURE__ */ Pe(zn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Pe("div", { className: "Modal__content", children: [
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
function $p({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = ge(0);
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
  return /* @__PURE__ */ Pe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Pe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ E("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Pe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ E("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Pe(zn, { children: [
      /* @__PURE__ */ E(
        vn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ E(
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
          children: /* @__PURE__ */ E("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function ON({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ce(), [a, c] = ge(0), [l, u] = Cb(), d = Ye(
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
  }, [a]), /* @__PURE__ */ E("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Pe(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(g)[0], b = ne(k);
                ve(b) && b.selectStart();
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
          /* @__PURE__ */ Pe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Pe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ E("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ E(
              vn,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ E(
                    vb,
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
            $p,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ E("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ E(
            wN,
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
function RN({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Q(null), o = r.length === 0;
  return /* @__PURE__ */ Pe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ E("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ E("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ E(
      ON,
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
function $N({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = sh(), [a] = ce(), c = Ye(() => {
    const K = new xN(a, s);
    return r && K.registerOnChange(r), t?.(K), K;
  }, [a, s, r, t]), l = TN(c), u = Ye(() => /* @__PURE__ */ new Map(), []), [d, f] = ge(), [p, h] = ge([]), [g, y] = ge(!1), [k, b] = ge(!1), { yjsDocMap: T } = o;
  j(() => {
    if (e) {
      const K = e("comments", T);
      return c.registerCollaboration(K);
    }
    return () => {
    };
  }, [c, e, T]);
  const A = be(() => {
    a.update(() => {
      const K = w();
      K !== null && (K.dirty = !0);
    }), y(!1);
  }, [a]), _ = be(
    (K, S) => {
      if (K.type === "comment") {
        const G = c.deleteCommentOrThread(K, S);
        if (!G)
          return;
        const { markedComment: q, index: H } = G;
        c.addComment(q, S, H);
      } else {
        c.deleteCommentOrThread(K);
        const G = S !== void 0 ? S.id : K.id, q = u.get(G);
        q !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const H of q) {
              const W = ne(H);
              ve(W) && (W.deleteID(hn, G), W.hasNoIDsForEveryType() && Ao(W));
            }
          });
        });
      }
    },
    [c, a, u]
  ), O = be(
    (K, S, G, q) => {
      c.addComment(K, G), S && (a.update(() => {
        P(q) && Ch(q, hn, K.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const K = [];
    let S;
    for (const G of p) {
      const q = u.get(G);
      if (q !== void 0)
        for (const H of q) {
          const W = a.getElementByKey(H);
          W !== null && (W.classList.add("selected"), K.push(W), S = window.setTimeout(() => {
            b(!0);
          }, 0));
        }
    }
    return () => {
      S !== void 0 && window.clearTimeout(S);
      for (const G of K)
        G.classList.remove("selected");
    };
  }, [p, a, u]), j(() => {
    if (!a.hasNodes([ct]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const K = /* @__PURE__ */ new Map();
    return Re(
      Zp(
        a,
        ct,
        (S) => _s(S.getTypedIDs()),
        (S, G) => {
          for (const [q, H] of Object.entries(S.getTypedIDs()))
            H.forEach((W) => {
              G.addID(q, W);
            });
        }
      ),
      a.registerMutationListener(
        ct,
        (S) => {
          a.getEditorState().read(() => {
            for (const [G, q] of S) {
              const H = ne(G);
              let W = [];
              q === "destroyed" ? W = K.get(G) ?? [] : ve(H) && (W = H.getTypedIDs()[hn] ?? []);
              for (const re of W) {
                let fe = u.get(re);
                K.set(G, W), q === "destroyed" ? fe !== void 0 && (fe.delete(G), fe.size === 0 && u.delete(re)) : (fe === void 0 && (fe = /* @__PURE__ */ new Set(), u.set(re, fe)), fe.has(G) || fe.add(G));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: S, tags: G }) => {
        S.read(() => {
          const q = w();
          let H = !1, W = !1;
          if (P(q)) {
            const re = q.anchor.getNode();
            if (M(re)) {
              const fe = wx(re, hn, q.anchor.offset) ?? [];
              fe !== null && (h(fe), H = !0), q.isCollapsed() || (f(re.getKey()), W = !0);
            }
          }
          H || h((re) => re.length === 0 ? re : []), W || f(null), !G.has("collaboration") && P(q) && y(!1);
        });
      }),
      a.registerCommand(
        Rp,
        () => {
          const S = window.getSelection();
          return S !== null && S.removeAllRanges(), y(!0), !0;
        },
        Bn
      )
    );
  }, [a, u]);
  const $ = () => {
    a.dispatchCommand(Rp, void 0);
  };
  return /* @__PURE__ */ Pe(zn, { children: [
    g && Un(
      /* @__PURE__ */ E(
        NN,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: O
        }
      ),
      document.body
    ),
    d != null && !g && Un(
      /* @__PURE__ */ E(
        AN,
        {
          anchorKey: d,
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
        RN,
        {
          comments: l,
          submitAddComment: O,
          deleteCommentOrThread: _,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function qN() {
  const e = Q(void 0), t = be((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function IN(e, t) {
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
function LN(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      IN(r, t);
    };
  }, [t, e]);
}
const Aw = Mn(function(t, r) {
  const n = Q(null), i = Q(!0), s = Q(null), [o, a] = ge(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, y = (h ?? !1) || ws(g), [k, b] = qN();
  LN(f, k), j(() => {
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
    applyUpdate(_, O) {
      n.current?.applyUpdate(_, O);
    },
    replaceEmbedUpdate(_, O) {
      return n.current?.replaceEmbedUpdate(_, O);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(_) {
      n.current?.setSelection(_);
    },
    setAnnotation(_, O, $, K, S) {
      typeof K == "function" || K === void 0 ? n.current?.setAnnotation(_, O, $, K, S) : n.current?.setAnnotation(_, O, $, K);
    },
    removeAnnotation(_, O) {
      n.current?.removeAnnotation(_, O);
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
    replaceCharacterMarker(_, O) {
      return n.current?.replaceCharacterMarker(_, O) ?? !1;
    },
    extendCharacterMarker(_, O) {
      return n.current?.extendCharacterMarker(_, O) ?? !1;
    },
    insertMarker(_) {
      return n.current?.insertMarker(_);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(_, O) {
      return n.current?.applyMarkerMenuSelection(_, O);
    },
    splitParagraphWithMarker(_) {
      n.current?.splitParagraphWithMarker(_);
    },
    commitTypedMarker(_, O) {
      return n.current?.commitTypedMarker(_, O) ?? !1;
    },
    commitTypedCloser(_) {
      return n.current?.commitTypedCloser(_) ?? !1;
    },
    insertNote(_, O, $) {
      n.current?.insertNote(_, O, $);
    },
    selectNote(_) {
      n.current?.selectNote(_);
    },
    selectAfterNote(_) {
      n.current?.selectAfterNote(_);
    },
    selectNoteTextOffset(_, O, $) {
      n.current?.selectNoteTextOffset(_, O, $);
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
  const T = be(
    (_, O, $, K) => {
      if (!u) return;
      const S = k.current?.getComments();
      u(_, S, O, $, K);
    },
    [k, u]
  ), A = be(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const _ = k.current?.getComments();
    l(_);
  }, [k, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ E(Dk, { children: /* @__PURE__ */ Pe(kb, { ref: n, onUsjChange: T, ...f, children: [
    /* @__PURE__ */ E(
      $N,
      {
        setCommentStore: b,
        onChange: A,
        showCommentsContainerRef: y ? null : d ?? o,
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
function DN(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function UN(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const FN = /^[#\w().,%/\s-]+$/;
function Wr(e) {
  return e != null;
}
const zN = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, KN = {
  left: "right",
  right: "left"
}, BN = "var(--usj-font-fallback, serif)";
function Eb(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${DN(i)}"`).join(", ")}, ${BN}`;
}
const vl = ".editor-input.usfm", jN = /^[\w.#[\]="':()>+~*,\s-]+$/;
function VN(e) {
  return jN.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${vl}".`
  ), vl);
}
function WN(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Eb(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (FN.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Wr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Wr(t.firstLineIndent) && s.push(`text-indent: ${Dn(t.firstLineIndent * 20 * r)}vw`), Wr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Dn(t.leftMargin * 20 * r)}vw`), Wr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Dn(t.rightMargin * 20 * r)}vw`
  ), Wr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Dn(t.spaceBefore * r)}pt`), Wr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Dn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = zN[n ? KN[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const qp = { c: 150, ca: 133, cp: 150 };
function Ip(e, t) {
  return e && Wr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function HN(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Wr(s.fontSize) && s.fontSize > 0;
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
function Pw(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = vl } = t, s = VN(i), o = [], a = [];
  e.defaultFont && a.push(Eb(e.defaultFont)), Wr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Dn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = WN(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${UN(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...HN(e, s)), o.join(`
`);
}
export {
  Yg as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  Ew as Editorial,
  xs as GENERATOR_NOTE_CALLER,
  ah as HIDDEN_NOTE_CALLER,
  Aw as Marginal,
  x as MarkerType,
  Jg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Cu as STANDARD_VIEW_MODE,
  $o as defaultStyleInfo,
  Mw as directionToNames,
  fS as filterAndRankItems,
  Pw as generateUsjCss,
  Sw as getDefaultViewMode,
  Ta as getDefaultViewOptions,
  l1 as getEnterMenuItems,
  c1 as getMarkerMenuItems,
  vw as getViewMode,
  vu as getViewOptions,
  ws as isBlockVerseLayout,
  fn as isInsertEmbedOpOfType,
  vS as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
