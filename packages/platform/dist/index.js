import { jsx as _, jsxs as Me, Fragment as On } from "react/jsx-runtime";
import { forwardRef as Vn, useState as he, useRef as Q, useCallback as fe, useEffect as B, useMemo as De, memo as $b, createContext as vp, useContext as _p, Children as Ib, isValidElement as Lb, cloneElement as Db, useImperativeHandle as ul, useLayoutEffect as $s } from "react";
import { assertSafeKey as He, isValidBookCode as Ub, MARKER_OBJECT_PROPS as Fb, USJ_VERSION as Pr, USJ_TYPE as Or, isUsjClosingMarkerLocation as _o, isUsjTextContentLocation as Is, indexesFromUsjJsonPath as mr, isUsjPropertyValueLocation as Co, isUsjClosingAttributeMarkerLocation as So, isUsjAttributeKeyLocation as Mo, isUsjAttributeMarkerLocation as dl, isUsjMarkerLocation as Cp, getUsjDocumentLocationTypeName as Kb, usjJsonPathFromIndexes as Et, EMPTY_USJ as Sp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as je, $parseSerializedNode as Ii, createCommand as fl, DecoratorNode as Ls, ElementNode as nr, isHTMLElement as Wn, TextNode as Be, $isRangeSelection as N, $isElementNode as $, $isTextNode as C, createState as ra, $getState as te, ParagraphNode as pl, $isRootNode as wr, $createTextNode as xe, $getSelection as q, $setState as Tt, $getCommonAncestor as zb, $isLineBreakNode as na, NODE_STATE_KEY as Ds, $getEditor as Li, $hasUpdateTag as Bb, $getNodeByKey as J, $getRoot as Te, $createRangeSelection as ia, $createPoint as ed, $setSelection as wn, $getCharacterOffsets as Mp, KEY_DOWN_COMMAND as Ur, COMMAND_PRIORITY_HIGH as Ue, HISTORY_MERGE_TAG as Ep, CLICK_COMMAND as sa, COMMAND_PRIORITY_EDITOR as Nn, isDOMNode as Ap, $getNearestNodeFromDOMNode as Us, CONTROLLED_TEXT_INSERTION_COMMAND as hl, PASTE_COMMAND as Er, COMMAND_PRIORITY_CRITICAL as Ar, CUT_COMMAND as Rn, DROP_COMMAND as gl, DELETE_CHARACTER_COMMAND as jb, DELETE_WORD_COMMAND as Vb, DELETE_LINE_COMMAND as Wb, $isDecoratorNode as Pp, COPY_COMMAND as oa, COMMAND_PRIORITY_NORMAL as xi, SELECTION_CHANGE_COMMAND as gr, BLUR_COMMAND as ml, $addUpdateTag as qn, SKIP_DOM_SELECTION_TAG as Hb, CLEAR_HISTORY_COMMAND as Gb, COMMAND_PRIORITY_LOW as Mt, $getPreviousSelection as Jb, $isRootOrShadowRoot as Yb, CAN_UNDO_COMMAND as Xb, CAN_REDO_COMMAND as Qb, $isNodeSelection as Op, DRAGSTART_COMMAND as Zb, $createNodeSelection as wp, getDOMSelectionFromTarget as ek, $onUpdate as tk, KEY_ENTER_COMMAND as Np, LineBreakNode as Rp, $copyNode as rk, FOCUS_COMMAND as nk, createEditor as qp, KEY_ESCAPE_COMMAND as $p, INSERT_PARAGRAPH_COMMAND as Eo, HISTORIC_TAG as yl, UNDO_COMMAND as Ip, REDO_COMMAND as Lp, CLEAR_EDITOR_COMMAND as ik } from "lexical";
import { addClassNamesToElement as ci, removeClassNamesFromElement as Ka, $findMatchingParent as it, $dfsIterator as Dp, $dfs as Di, mergeRegister as et, registerNestedElementResolver as bl, $unwrapNode as yc, IS_APPLE as Ao } from "@lexical/utils";
import { useLexicalNodeSelection as sk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Nt } from "fast-equals";
import cs from "quill-delta";
import { useLexicalComposerContext as ue } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as ok, $getHtmlContent as ak, $getLexicalContent as ck } from "@lexical/clipboard";
import { TreeView as lk } from "@lexical/react/LexicalTreeView";
import * as uk from "react-dom";
import { createPortal as An } from "react-dom";
import { LexicalComposer as Up } from "@lexical/react/LexicalComposer";
import { ContentEditable as Fp } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Kp } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as zp } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Bp } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as dk } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as fk, createDOMRange as pk, createRectsFromDOMRange as hk } from "@lexical/selection";
import { autoUpdate as gk, computePosition as mk, shift as yk, flip as bk } from "@floating-ui/dom";
import { $generateNodesFromDOM as kk } from "@lexical/html";
import { AutoFocusPlugin as Tk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as xk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as jp, LexicalCollaboration as vk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as _k } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Ck } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Sk, $isRootTextContentEmpty as Mk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Ek } from "@lexical/yjs";
import { Array as td, Map as rd, YArrayEvent as Ak } from "yjs";
const za = (e) => je(Ii(e)), Pk = {
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
function Vp(e) {
  return Pk[e];
}
const I = " ", Po = "​", Ut = I, kl = `${I}|`, dr = "p", Oo = "+", Wp = "-", Fs = "immutable-note-caller", wo = "chapter", bc = "verse", nd = "invalid", Ok = "text-spacing", wk = "formatted-font", Nk = "marker-", Tl = "external-usj-mutation", Rk = "selection-change", Ts = "cursor-change", xl = fl("APP_PLACED_CARET_COMMAND"), kc = "annotation-change", vi = "delta-change", Hp = "marker-settle", id = [
  Tl,
  Rk,
  Ts,
  kc,
  vi
], $n = "zmsc-s", _i = "zmsc-e", qk = [$n, _i], $k = [
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
  $n,
  _i
], Gp = 1, vl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Ik = vl.filter((e) => e !== "sid" && e !== "eid");
class er extends Ls {
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
    return new er(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Yp().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && ($k.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Gp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Jp(e) {
  return qk.includes(e);
}
function Yp(e, t, r, n, i) {
  return je(new er(e, t, r, n, void 0, i));
}
function Pe(e) {
  return e instanceof er;
}
const _l = "f", Lk = [
  // Footnote
  _l,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function ls(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Dk = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Xp = 1;
class Ne extends nr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = _l, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (ls(t) === "crossref" ? Wp : Oo), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Ne(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => Fk(t) ? {
        conversion: Uk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Cl().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Lk.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", ls(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", ls(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", ls(this.getMarker()))), { element: r };
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
      version: Xp
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
function Uk(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Cl(t, r, n) };
}
function Cl(e, t, r, n, i) {
  return je(new Ne(e, t, r, n, i));
}
function Fk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ne.isValidMarker(t) && e.classList.contains(Ne.getType());
}
function K(e) {
  return e instanceof Ne;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Tc = {
  id: {
    category: k.FileIdentification,
    type: b.Paragraph,
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
    category: k.FileIdentification,
    type: b.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: k.FileIdentification,
    type: b.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: k.Headers,
    type: b.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: k.Headers,
    type: b.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: k.Headers,
    type: b.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: k.Headers,
    type: b.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: k.Headers,
    type: b.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: k.Headers,
    type: b.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: k.Headers,
    type: b.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: k.Headers,
    type: b.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: k.Headers,
    type: b.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: k.Headers,
    type: b.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: k.Remarks,
    type: b.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: k.Remarks,
    type: b.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: k.Remarks,
    type: b.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction section heading, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"],
      CharacterStyling: ["no"]
    }
  },
  is1: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
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
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: k.Introduction,
    type: b.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: k.Introduction,
    type: b.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: k.DivisionMarks,
    type: b.Paragraph,
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
    category: k.DivisionMarks,
    type: b.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: k.DivisionMarks,
    type: b.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: k.DivisionMarks,
    type: b.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: k.DivisionMarks,
    type: b.Paragraph,
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
    category: k.DivisionMarks,
    type: b.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: k.DivisionMarks,
    type: b.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: k.DivisionMarks,
    type: b.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Paragraphs,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: k.Poetry,
    type: b.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: k.Poetry,
    type: b.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
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
    category: k.Poetry,
    type: b.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
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
    category: k.TitlesHeadings,
    type: b.Paragraph,
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
    category: k.TitlesHeadings,
    type: b.Paragraph,
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
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
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
    category: k.TitlesHeadings,
    type: b.Paragraph,
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
    category: k.TitlesHeadings,
    type: b.Paragraph,
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
    category: k.TitlesHeadings,
    type: b.Paragraph,
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
    category: k.TitlesHeadings,
    type: b.Paragraph,
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
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
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
    category: k.TitlesHeadings,
    type: b.Paragraph,
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
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: k.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Paragraph,
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
    category: k.Lists,
    type: b.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: k.Lists,
    type: b.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: k.Lists,
    type: b.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: k.Lists,
    type: b.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: k.Lists,
    type: b.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: k.Lists,
    type: b.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: k.Lists,
    type: b.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: k.Lists,
    type: b.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: k.Footnotes,
    type: b.Note,
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
    category: k.Footnotes,
    type: b.Note,
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
    category: k.Footnotes,
    type: b.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: k.Footnotes,
    type: b.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: k.Footnotes,
    type: b.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: k.Footnotes,
    type: b.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: k.Footnotes,
    type: b.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: k.Footnotes,
    type: b.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: k.Footnotes,
    type: b.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: k.Footnotes,
    type: b.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: k.Footnotes,
    type: b.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: k.Footnotes,
    type: b.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: k.Footnotes,
    type: b.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: k.CrossReferences,
    type: b.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: k.CrossReferences,
    type: b.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: k.CrossReferences,
    type: b.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: k.CrossReferences,
    type: b.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: k.CrossReferences,
    type: b.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: k.CrossReferences,
    type: b.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: k.CrossReferences,
    type: b.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: k.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: k.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: k.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: k.CrossReferences,
    type: b.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: k.SpecialText,
    type: b.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: k.SpecialText,
    type: b.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: k.SpecialText,
    type: b.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: k.SpecialText,
    type: b.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: k.SpecialText,
    type: b.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: k.SpecialText,
    type: b.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: k.SpecialText,
    type: b.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: k.SpecialText,
    type: b.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: k.SpecialText,
    type: b.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: k.SpecialText,
    type: b.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: k.SpecialText,
    type: b.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: k.SpecialText,
    type: b.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: k.SpecialText,
    type: b.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: k.SpecialText,
    type: b.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: k.SpecialText,
    type: b.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: k.CharacterStyling,
    type: b.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: k.CharacterStyling,
    type: b.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: k.CharacterStyling,
    type: b.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: k.CharacterStyling,
    type: b.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: k.CharacterStyling,
    type: b.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: k.CharacterStyling,
    type: b.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: k.CharacterStyling,
    type: b.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: k.Breaks,
    type: b.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, xn = {
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
}, sd = {
  p: { children: xn },
  q: { children: xn },
  q1: { children: xn },
  q2: { children: xn },
  q3: { children: xn },
  q4: { children: xn },
  b: { children: xn },
  qm: {
    children: {
      Paragraphs: { add: ["p"], remove: [] }
    }
  },
  c: {
    type: b.Paragraph,
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
    category: k.SpecialFeatures,
    type: b.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: k.SpecialFeatures,
    type: b.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: k.SpecialFeatures,
    type: b.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: k.SpecialFeatures,
    type: b.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function fr(e) {
  const t = Object.hasOwn(Tc, e) ? Tc[e] : void 0, r = Object.hasOwn(sd, e) ? sd[e] : void 0;
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
const Qp = "v", Zp = "c", vn = "fig", od = "tr", xc = "esb", eh = "esbe", Kk = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, zk = {
  "": "start",
  c: "center",
  r: "end"
};
function Bk(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function ad(e) {
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
const jk = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Vk(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Po && s + 1 < e.length && ad(e[s + 1]) || (ad(o) ? (r || (i = t.length, t += o), r = !0) : jk.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Wk(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Hk(e, t) {
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
const Gk = /^(?:qt[1-5]?|ts)-[se]$/;
function aa(e) {
  return Gk.test(e) || Jp(e);
}
function Ba(e, t) {
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
function Jk(e, t, r) {
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
      const g = e.indexOf("\\", i), m = g === -1 ? e.length : g;
      a(Vk(e.slice(i, m))), i = m;
      continue;
    }
    const c = i, { name: l, next: u } = Hk(e, i + 1);
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
    if (l === Qp) {
      const { word: g, next: m } = Ba(e, i);
      i = m, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === Zp) {
      const { word: g, next: m } = Ba(e, i);
      i = m, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === b.Note || h === void 0 && Ne.isValidMarker(l)) {
      const { word: g, next: m } = Ba(e, i);
      i = m, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === b.Milestone || h === void 0 && aa(l)) {
      const g = nT(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const m = e.indexOf("\\", i), T = m === -1 ? e.length : m;
        o(e.slice(c, T)), i = T;
      }
      continue;
    }
    h === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : h === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : No(p) ? (d(), No(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === xc || l === eh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const cd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function No(e) {
  return Object.hasOwn(cd, e) ? cd[e] : void 0;
}
function Yk(e) {
  return No(e) !== void 0;
}
const Xk = /([-\w]+)\s*=\s*"(.*?)"/g, Qk = /[\s\u200B]*[\n\r][\s\u200B]*/g, th = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Ks(e) {
  return th[e];
}
const Zk = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function eT(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ca(e, t, r = th[t]) {
  const n = e.replace(Qk, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Xk)];
  if (s.length > 0) {
    if (!eT(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Zk.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function zs(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function tT(e) {
  const t = Fr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function rT(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ca(e.slice(n + 1, i), r, zs(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function nT(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ca(s.slice(o + 1), r, zs(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = rT(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Sr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", I);
}
function _n(e) {
  return e.content || (e.content = []), e.content;
}
function Fr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u;
  const d = () => u ? _n(u) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? _n(o[o.length - 1].object) : _n(s);
    if (o.length > 0)
      return _n(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return d();
      i = { type: "para", marker: dr, content: [] }, d().push(i);
    }
    return _n(i);
  }, h = (Z) => {
    const z = p();
    typeof Z == "string" && typeof z[z.length - 1] == "string" ? z[z.length - 1] = z[z.length - 1] + Z : z.push(Z);
  }, g = (Z) => {
    for (let z = Z; z < o.length; z += 1) {
      const ie = o[z].object;
      ie.closed = "false";
    }
  }, m = () => {
    g(0), o.length = 0;
  }, T = (Z) => {
    s && (o.length > a && (g(a), o.length = a), a = 0, Z || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, S = (Z) => {
    u && (Z || (u.closed = "false"), u = void 0);
  };
  let w, A = "", M;
  const E = () => {
    A && h(Sr(A)), A = "";
  }, R = (Z = !1) => {
    w?.type === "sidebar" ? A = "" : Z && A.endsWith(`
`) && (A = A.slice(0, -1)), w = void 0, E();
  }, Y = () => {
    if (!M)
      return;
    const Z = { type: "char", marker: M.marker, content: [] };
    M.value && (Z.content = [Sr(M.value)]), p().push(Z), o.push({ object: Z }), M = void 0;
  }, H = (Z, z) => {
    f = !1, v(), m(), T(!1), i = { type: "para", marker: Z, content: [] }, z && (i.content = [Sr(z)]), d().push(i);
  }, ne = () => {
    M && (H(M.marker, M.value), M = void 0);
  };
  let ce;
  const le = () => {
    if (ce) {
      if (ce.shape === "para")
        H(vn, ce.value);
      else {
        const Z = { type: "char", marker: vn, content: [] };
        ce.value && (Z.content = [Sr(ce.value)]), p().push(Z), o.push({ object: Z });
      }
      ce = void 0;
    }
  }, ye = Jk(e, t?.getMarker ?? fr, n);
  for (let Z = 0; Z < ye.length; Z++) {
    const z = ye[Z];
    if (M) {
      if (z.kind === "text") {
        M.value += z.text;
        continue;
      }
      if (M.shape === "char" && z.kind === "end" && z.marker.replace(/^\+/, "") === M.marker) {
        if (M.value.trim() === "") {
          p().push({ type: "char", marker: M.marker, content: [] }), M = void 0, R();
          continue;
        }
        Object.assign(M.target, {
          [M.attrName]: Sr(M.value.trim())
        });
        const ie = M.marker;
        if (M = void 0, ie === "ca") {
          const $e = ye[Z + 1];
          $e?.kind === "text" && /^[\s\u200B]*$/.test($e.text) && Z++;
        }
        continue;
      }
      if (M.shape === "para" && (z.kind === "para" || z.kind === "chapter")) {
        const ie = M.value.replace(/[\s\u200B]+$/, "");
        ie === "" ? (H(M.marker), M = void 0) : (Object.assign(M.target, { [M.attrName]: Sr(ie) }), M = void 0);
      } else {
        w = void 0, (z.kind === "para" || z.kind === "chapter") && M.value.endsWith(`
`) && (M.value = M.value.slice(0, -1)), M.shape === "para" ? ne() : Y(), Z--;
        continue;
      }
    }
    if (ce) {
      if (z.kind === "text" || z.kind === "optbreak") {
        ce.value += z.kind === "text" ? z.text : "//";
        continue;
      }
      if (z.kind === "end" && z.marker.replace(/^\+/, "") === vn) {
        const ie = ce.value.indexOf("|"), $e = ie >= 0 ? ca(ce.value.slice(ie + 1), vn) : void 0;
        if ($e) {
          const at = {};
          for (const [Ht, wt] of Object.entries($e))
            at[Ht === "src" ? "file" : Ht] = wt;
          const Wt = {
            type: "figure",
            marker: vn,
            ...at
          }, pe = ce.value.slice(0, ie);
          pe && (Wt.content = [Sr(pe)]), h(Wt), ce = void 0;
          continue;
        }
      }
      le(), Z--;
      continue;
    }
    if (w)
      if (z.kind === "text") {
        if (z.text.includes(`
`) && /^[\s\u200B]*$/.test(z.text)) {
          A += z.text;
          continue;
        }
        R();
      } else if (z.kind === "charOpen" || z.kind === "para") {
        const ie = z.kind === "para" || !z.isNested ? No(z.marker) : void 0;
        if (ie && ie.targetTypes.includes(w.type)) {
          A = "", M = {
            target: w,
            attrName: ie.attrName,
            marker: z.marker,
            shape: ie.shape,
            value: ""
          };
          continue;
        }
        R(z.kind === "para");
      } else
        R(z.kind === "chapter");
    if (!s && !n && (z.kind === "charOpen" && !z.isNested && z.marker === vn || z.kind === "para" && z.marker === vn)) {
      m(), ce = { shape: z.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (z.kind) {
      case "text": {
        let ie = z.text;
        if (!s && ie.endsWith(`
`)) {
          const $e = ye[Z + 1];
          ($e === void 0 || $e.kind === "para" || $e.kind === "chapter") && (ie = ie.slice(0, -1));
        }
        ie && h(Sr(ie));
        break;
      }
      case "para": {
        const ie = !s && !n;
        if (ie && z.marker === od) {
          m(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: od, content: [] }, _n(c).push(l), i = l, f = !1;
          break;
        }
        if (ie && l) {
          const $e = Kk.exec(z.marker);
          if ($e && Bk($e)) {
            m();
            const [, at, Wt, pe] = $e, Ht = {
              type: "table:cell",
              marker: pe ? z.marker.slice(0, z.marker.indexOf("-")) : z.marker,
              align: zk[at],
              content: []
            };
            pe && (Ht.colspan = String(Number(pe) + 1 - Number(Wt))), _n(l).push(Ht), i = Ht;
            break;
          }
        }
        if (v(), !n && z.marker === xc) {
          m(), T(!1), S(!1), u = { type: "sidebar", marker: xc, content: [] }, r.push(u), i = void 0, w = u, f = !1;
          break;
        }
        if (z.marker === eh && u) {
          m(), T(!1), S(!0), i = void 0;
          break;
        }
        H(z.marker);
        break;
      }
      case "verse": {
        T(!1);
        const ie = { type: "verse", marker: Qp, number: z.number };
        h(ie), w = ie;
        break;
      }
      case "chapter": {
        m(), T(!1), v(), S(!1), i = void 0;
        const ie = {
          type: "chapter",
          marker: Zp,
          number: z.number
        };
        r.push(ie), w = ie, f = !0;
        break;
      }
      case "note": {
        T(!1);
        const ie = p();
        s = { type: "note", marker: z.marker, caller: z.caller, content: [] }, a = o.length, ie.push(s), w = s;
        break;
      }
      case "charOpen": {
        if (!z.isNested) {
          const at = s ? a : 0;
          g(at), o.length = at;
        }
        const ie = p(), $e = { type: "char", marker: z.marker, content: [] };
        ie.push($e), o.push({ object: $e });
        break;
      }
      case "end": {
        const ie = z.marker.replace(/^\+/, ""), $e = s ? a : 0, at = o.findLastIndex((Wt, pe) => pe >= $e && Wt.object.marker === ie);
        at >= 0 ? (iT(o[at].object), g(at + 1), o.length = at) : s && s.marker === ie ? T(!0) : (g($e), o.length = $e, h({ type: "unmatched", marker: `${z.marker}*` }));
        break;
      }
      case "milestone":
        h({ type: "ms", marker: z.marker, ...z.attributes });
        break;
      case "optbreak":
        h({ type: "optbreak" });
        break;
    }
  }
  if (ce && le(), M)
    if (M.shape === "para") {
      const Z = M.value.replace(/[\s\u200B]+$/, "");
      Z === "" ? H(M.marker) : Object.assign(M.target, { [M.attrName]: Sr(Z) }), M = void 0;
    } else
      M.value.endsWith(`
`) && (M.value = M.value.slice(0, -1)), Y();
  m(), T(!1), S(!1);
  const qe = (Z) => {
    for (const z of Z)
      typeof z != "string" && z.content && (qe(z.content), z.content.length === 0 && delete z.content);
  };
  return qe(r), r;
}
function iT(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ca(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
function Ee(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function Ve(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Lt(e, t) {
  let r = Ee(e);
  return t && (r += `${I}${t}`), r += " ", r;
}
function At(e) {
  return " " + e + I;
}
const sT = 1;
class yr extends Be {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Mn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new yr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return lt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || Mn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Mn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Mn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Mn(r.__marker, r.__markerSyntax, t), r;
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
      version: sT
    };
  }
}
function lt(e, t, r) {
  return je(new yr(e, t, void 0, r));
}
function P(e) {
  return e instanceof yr;
}
function Bs(e) {
  return e?.type === yr.getType();
}
function hn(e) {
  return e.getTextContent() === Mn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function oT(e) {
  e.setTextContent(Mn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Mn(e, t, r = !1) {
  return t === "closing" ? Ve(e, r) : t === "selfClosing" ? Ve("") : Ee(e, r);
}
const rn = "internal-comment", aT = [rn], rh = Object.freeze({}), vc = Object.freeze({}), _c = Object.freeze({}), Cc = Object.freeze({}), Sc = Object.freeze({}), cT = 1, li = /* @__PURE__ */ new Map(), es = /* @__PURE__ */ new Map(), ui = /* @__PURE__ */ new Map(), di = /* @__PURE__ */ new Map();
class Ye extends nr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = rh, r, n, i, s, o) {
    super(o), this.__typedIDs = ao(t), this.__typedOnClicks = ja(r), this.__typedOnRemoves = Va(n), this.__typedOnMouseEnters = Wa(i), this.__typedOnMouseLeaves = Ha(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = ao(t.__typedIDs), n = ja(t.__typedOnClicks), i = Va(t.__typedOnRemoves), s = Wa(t.__typedOnMouseEnters), o = Ha(t.__typedOnMouseLeaves);
    return new Ye(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return aT.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return In().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: cT
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      ci(n, Cn(t.theme.typedMark, a)), c.length > 1 && ci(n, Cn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        ci(n, Cn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = Cn(n.theme.typedMark, s), d = Cn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && ci(r, u) : l === 0 && Ka(r, u), c === 1 ? l === 2 && ci(r, d) : l === 1 && Ka(r, d));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ka(r, Cn("annotationId", h));
      for (const h of a)
        f.has(h) || ci(r, Cn("annotationId", h));
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
    return ke(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = ao(r.__typedIDs);
    r.__typedIDs = ao(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ro(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = ja(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ke(t) ? li.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Va(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ke(t) ? es.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Wa(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ke(t) ? ui.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Ha(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ke(t) ? di.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!ke(a))
      return;
    He(t), He(r);
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
    if (!ke(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ro(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = In(this.__typedIDs, this.getTypedOnClicks());
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
    if (!N(r) || n === "html")
      return !1;
    const i = r.anchor, s = r.focus, o = i.getNode(), a = s.getNode(), l = r.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const r = this.getWritable(), n = this.getTypedIDs();
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), li.delete(r.getKey()), es.delete(r.getKey()), ui.delete(r.getKey()), di.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    const n = di.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === vc) {
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
    He(t), He(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = Xr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Xr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === vc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === _c) {
      const t = es.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      es.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    es.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    He(t), He(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = Xr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Xr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === _c) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Cc) {
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
    He(t), He(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = Xr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Xr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Cc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Sc) {
      const t = di.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      di.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    di.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    He(t), He(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = Xr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Xr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Sc) {
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
    const i = lT(t, r);
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
    for (; ke(t) && ud(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; ke(r) && ud(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = uT(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = dT(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = fT(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = pT(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function ao(e = rh) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (He(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      He(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function ja(e) {
  if (!e || e === vc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    He(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      He(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Va(e) {
  if (!e || e === _c)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    He(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      He(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Wa(e) {
  if (!e || e === Cc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    He(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      He(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ha(e) {
  if (!e || e === Sc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    He(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      He(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Xr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function ld(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function lT(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function ud(e, t) {
  const r = ld(e), n = ld(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function uT(e, t) {
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
function dT(e, t) {
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
function fT(e, t) {
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
function pT(e, t) {
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
function Cn(e, t) {
  return `${e}-${t}`;
}
function dd(e) {
  return `external-${e}`;
}
function In(e, t, r, n, i) {
  return je(new Ye(e, t, r, n, i));
}
function ke(e) {
  return e instanceof Ye;
}
function js(e) {
  return e?.type === Ye.getType();
}
function Ro(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Sl(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let h, g;
  for (let m = 0; m < u; m++) {
    const T = a[m];
    if ($(g) && g.isParentOf(T))
      continue;
    if (P(T)) {
      h = T.getParent(), g = void 0;
      continue;
    }
    const v = m === 0, S = m === u - 1;
    let w = null;
    if (C(T)) {
      const A = T.getTextContentSize(), M = v ? f : 0, E = S ? p : A;
      if (M === 0 && E === 0)
        continue;
      const R = T.splitText(M, E);
      w = R.length > 1 && (R.length === 3 || v && !S || E === A) ? R[1] : R[0];
    } else {
      if (ke(T))
        continue;
      $(T) && T.isInline() && (w = T);
    }
    if (w !== null) {
      if (w && w.is(h))
        continue;
      const A = w.getParent();
      (A == null || !A.is(h)) && (g = void 0), h = A, g === void 0 && (g = In(), g.addID(t, r, n, i, s, o), w.insertBefore(g)), g.append(w);
    } else
      h = void 0, g = void 0;
  }
  t === rn && $(g) && (d ? g.selectStart() : g.selectEnd());
}
function hT(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (ke(n))
      return n.getTypedIDs()[t];
    if (C(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (ke(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Ln = ra("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), nn = ra("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ae = ra("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), br = "marker-trailing-space", nh = 1, gT = "attribute-run";
function Ga(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Kr extends nr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Kr(r, n);
  }
  static importJSON(t) {
    return ih(t.runKind).updateFromJSON(t);
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
    t.classList.add(gT);
    const r = Ga(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Ga(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Ga(this.__runKind);
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
      version: nh
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
function ih(e) {
  return je(new Kr(e));
}
function ze(e) {
  return e instanceof Kr;
}
const sh = [
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
], oh = [
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
], mT = [
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
  ...sh,
  ...oh
], ah = 1, yT = ["type", "marker", "content"];
class ve extends nr {
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
    return t !== void 0 && (mT.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && sh.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && oh.includes(t);
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
      span: (t) => kT(t) ? {
        conversion: bT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Nr().updateFromJSON(t);
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
    return fd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), fd(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: ah
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Nr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function fd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function bT(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Nr(t) };
}
function Nr(e, t) {
  return je(new ve(e, t));
}
function kT(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ve.isValidMarker(t) && e.classList.contains(ve.getType());
}
function D(e) {
  return e instanceof ve;
}
function TT(e) {
  return e?.type === ve.getType();
}
const qo = "v", ch = 1, xT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class ht extends Be {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = qo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ht(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return lh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(bc, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: ch
    };
  }
}
function lh(e, t, r, n, i, s) {
  return je(new ht(e, t, r, n, i, s));
}
function Oe(e) {
  return e instanceof ht;
}
function uh(e) {
  return e?.type === ht.getType();
}
const vT = /* @__PURE__ */ new Set(["closed"]);
function ur(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !vT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function dh(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function fh(e) {
  const t = Object.keys(e).filter((n) => !Ik.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function ph(e, t, r, n) {
  return dh(
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
function ps(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function _T(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : ps(e) === void 0 && hh(e) === void 0;
}
function hh(e) {
  return e.getChildren().find((t) => C(t) && te(t, ae) === "attribute");
}
function xs(e, t) {
  return Vs(e.getNextSibling(), t);
}
const CT = /^[ \u00A0]+$/;
function Ml(e) {
  if (hn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ee(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && CT.test(r.slice(t.length));
}
function Vs(e, t) {
  let r, n, i, s;
  return ze(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Ml(e) && (r = e, e = e.getNextSibling()), C(e) && te(e, ae) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && hn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function ST(e) {
  let t = e;
  for (; ke(t); )
    t = t.getChildren()[0];
  return t;
}
function Rr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = ST(t[r]);
  if (C(n) && n.getTextContent() === At(e.getCaller()))
    return n;
}
function El(e) {
  const t = Rr(e);
  return t ? Vs(t.getNextSibling(), "cat") : {};
}
function Ui(e) {
  const t = e.getFirstChild();
  if (!(!C(t) || P(t)) && te(t, ae) !== "attribute")
    return t;
}
function gh(e) {
  const t = Ui(e);
  return t ? Vs(t.getNextSibling(), "ca") : {};
}
function mh(e) {
  const t = Ui(e);
  if (!t)
    return;
  const r = Vs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function yh(e) {
  const t = mh(e);
  return t ? Vs(t.getNextSibling(), "cp") : {};
}
function bh(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Oe(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || C(n) && te(n, ae) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || ze(n)))
        return;
    }
}
function la(e) {
  let t, r, n, i, s = e.getNextSibling();
  return ze(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Ml(s) && (t = s, s = s.getNextSibling()), C(s) && te(s, ae) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && hn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const $o = "c", kh = 1, MT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ot extends nr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = $o, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Ot(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Th().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(wo, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: kh
    };
  }
}
function Th(e, t, r, n, i) {
  return je(new Ot(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof Ot;
}
function ET(e) {
  return e?.type === Ot.getType();
}
const xh = 1;
class sn extends pl {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new sn(t.__key);
  }
  static importJSON(t) {
    return Dt().updateFromJSON(t);
  }
  getMarker() {
    return dr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: xh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Dt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Dt() {
  return je(new sn());
}
function ut(e) {
  return e instanceof sn;
}
function ua(e) {
  return e?.type === sn.getType();
}
function vh(e) {
  return ut(e) && wr(e.getParent());
}
function Al(e) {
  return ke(e) || vh(e);
}
function gn(e) {
  let t = e.getParent();
  for (; t && Al(t); )
    t = t.getParent();
  return t;
}
function da(e) {
  return D(gn(e));
}
function Io(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? da(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function AT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Io(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Ws(e) {
  return C(e) && e.getType() === Be.getType() && te(e, ae) !== "attribute";
}
function PT(e) {
  if (!Ws(e) || !e.getTextContent().startsWith(I))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && ke(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!D(n))
    return 0;
  for (; ke(r); )
    r = r.getLastChild();
  return !P(r) || r.getMarkerSyntax() !== "opening" || Io(r, n) === void 0 ? 0 : 1;
}
function Pl(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Io(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? Io(r, t) === !0 ? "spacer" : void 0 : Ws(r) ? r.getTextContent().startsWith(I) ? void 0 : "prefix" : "spacer";
}
function OT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Pl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function _h(e, t) {
  const r = q();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Ch(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Pl(t, e);
    if (r !== void 0 && !_h(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        C(n) && n.setTextContent(I + n.getTextContent());
      } else
        t.insertAfter(xe(I));
  });
}
function Sh(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Pl(t, e) !== void 0 && _h(t, e)) : !1;
}
const Mh = 1, wT = "marker", Ol = ra("isGutterMarker", {
  parse: (e) => e === !0
});
class zr extends Ls {
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
    return new zr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => $T(t) ? {
        conversion: NT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return qr().updateFromJSON(t);
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
    return r && Wn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Mh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function NT(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: qr(t, r) };
}
function qr(e, t) {
  return je(new zr(e, t));
}
function RT(e) {
  return Tt(qr(wT, e), Ol, !0);
}
function qT(e) {
  return mt(e) && te(e, Ol);
}
function $T(e) {
  return e?.tagName === "span";
}
function mt(e) {
  return e instanceof zr;
}
function Eh(e) {
  return e?.type === zr.getType();
}
const IT = ["type", "marker", "content"], Mc = "unknown", Ah = 1, LT = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Hn extends nr {
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
    return new Hn(r, n, i, s);
  }
  static importDOM() {
    return {
      [Mc]: (t) => UT(t) ? {
        conversion: DT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return wl().updateFromJSON(t);
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
    return LT.has(this.getTag());
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
    const t = document.createElement(Mc);
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
      version: Ah
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
  excludeFromCopy(t) {
    return t !== "clone";
  }
}
function DT(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: wl(t, r) };
}
function wl(e, t, r) {
  return je(new Hn(e, t, r));
}
function UT(e) {
  return e?.tagName.toLowerCase() === Mc;
}
function Ae(e) {
  return e instanceof Hn;
}
const Ph = "file", Oh = "src", FT = "colspan", KT = "category", zT = "alt", BT = "closed", jT = "false";
function VT(e) {
  return e[BT] !== jT;
}
function WT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === Ph ? Oh : t,
    r
  ]));
}
function HT(e, t) {
  return e === "figure" && t === Oh ? Ph : t;
}
function GT(e, t) {
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
function fa(e, t, r) {
  const n = r ?? {}, i = VT(n);
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
        opening: `\\${GT(t, n[FT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ur(WT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [KT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + ur(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [zT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: ur(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ur(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const vt = { wantsRun: !1, valueText: void 0 }, Br = {};
function Ja(e, t) {
  if (t === "va")
    return e;
  const r = xs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Nl(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if ($(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function pa(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = q();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function JT(e) {
  return ze(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : C(e) && te(e, ae) === "attribute";
}
function YT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!C(e) || te(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Ya(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Oe(t))
      return t;
    if (!JT(t))
      return;
  }
}
function pd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Oe(t),
    ownerOf: (t) => {
      if (ze(t))
        return t.getRunKind() === e ? Ya(t) : void 0;
      const r = t.getParent();
      return ze(r) ? r.getRunKind() === e ? Ya(r) : void 0 : YT(t) === e ? Ya(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Oe(t))
        return vt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? vt : { wantsRun: !0, valueText: I + r };
    },
    scanPieces: (t) => Oe(t) ? xs(Ja(t, e), e) : Br,
    graceSite: (t, r) => Oe(t) ? !r.opener && !r.closer ? Nl(Ja(t, e)) : pa(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Oe(t) ? Ja(t, e) : void 0
    }
  };
}
const XT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => Br,
  graceSite: (e) => D(e) && Sh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, QT = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!C(e) || te(e, ae) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || ps(e) === void 0)
      return vt;
    const t = ur(e.getUnknownAttributes() ?? {}, Ks(e.getMarker()));
    return t === "" ? vt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: hh(e) } : Br,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = ps(e);
    if (!r)
      return !1;
    const n = q();
    if (!N(n) || !n.isCollapsed())
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
    insertRunBefore: (e) => D(e) ? ps(e) : void 0
  }
};
function wh(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!C(e) || te(e, ae) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function ZT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = Rr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!wh(n))
        return;
    }
}
const ex = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (ze(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return ze(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : wh(e) ? ZT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return vt;
    const t = e.getCategory();
    return t === void 0 ? vt : { wantsRun: !0, valueText: I + t };
  },
  scanPieces: (e) => K(e) ? El(e) : Br,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Rr(e);
      return r !== void 0 && Nl(r);
    }
    return pa(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => K(e) ? Rr(e) : void 0
  }
};
function tx(e) {
  return ze(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : C(e) && te(e, ae) === "attribute";
}
function rx(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!C(e) || te(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function nx(e) {
  const t = e.getParent();
  if (!Ce(t))
    return;
  const r = Ui(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!tx(n))
        return;
    }
}
function hd(e) {
  const t = (r) => Ce(r) ? e === "ca" ? Ui(r) : mh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ce(r),
    ownerOf: (r) => {
      if (ze(r))
        return r.getRunKind() === e && Ce(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return ze(n) ? n.getRunKind() === e && Ce(n.getParent()) ? n.getParent() ?? void 0 : void 0 : rx(r) === e ? nx(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ce(r))
        return vt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? vt : { wantsRun: !0, valueText: I + n };
    },
    scanPieces: (r) => Ce(r) ? e === "ca" ? gh(r) : yh(r) : Br,
    graceSite: (r, n) => {
      if (!Ce(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Nl(i);
      }
      return pa(n);
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
function Nh(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return C(e) && te(e, ae) === "attribute";
}
function ix(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Pe(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Nh(t))
      return;
  }
}
const sx = {
  kind: "milestone",
  ownerPredicate: (e) => Pe(e),
  ownerOf: (e) => {
    const t = ze(e) ? e.getRunKind() === "milestone" ? e : void 0 : ze(e.getParent()) ? e.getParent() : Nh(e) ? e : void 0;
    if (!t || ze(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return ze(t) ? Pe(r) ? r : void 0 : ix(t);
  },
  expectedPieces: (e) => {
    if (!Pe(e))
      return vt;
    const t = ph(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = ur(t, zs(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : I + r };
  },
  scanPieces: (e) => {
    if (!Pe(e))
      return Br;
    const { opening: t, attribute: r, closing: n, wrapper: i } = la(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Pe(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = q();
      if (!N(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return pa(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Pe(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, ox = fa("optbreak", void 0, void 0).opening, ax = {
  kind: "optbreak",
  ownerPredicate: (e) => Ae(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ae(t) || t.getTag() !== "optbreak"))
      return C(e) || mt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: ox }),
  scanPieces: (e) => Ae(e) ? { value: e.getFirstChild() ?? void 0 } : Br,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, cx = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Ae(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => Br,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, lx = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => Br,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, vs = [
  XT,
  QT,
  pd("va"),
  pd("vp"),
  ex,
  hd("ca"),
  hd("cp"),
  sx,
  ax,
  cx,
  lx
], ux = new Map(vs.map((e) => [e.kind, e]));
function $r(e) {
  const t = ux.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function on(e) {
  for (const t of vs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Rh(e) {
  return on(e) !== void 0;
}
const Lo = "unmatched", qh = 2;
function hs(e) {
  return `\\${e}`;
}
class jr extends Be {
  __marker;
  constructor(t = "", r) {
    super(hs(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new jr(r, n);
  }
  static importDOM() {
    return {
      [Lo]: (t) => fx(t) ? {
        conversion: dx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Rl().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? hs(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = hs(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(nd), r.title = gd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = gd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Lo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(nd), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: qh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function $h(e) {
  return e.getTextContent() === hs(e.getMarker());
}
function gd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function dx(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Rl(t) };
}
function Rl(e) {
  return je(new jr(e));
}
function fx(e) {
  return e?.tagName.toLowerCase() === Lo;
}
function mn(e) {
  return e instanceof jr;
}
const _s = "id", Ih = 1, px = [
  "type",
  "marker",
  "code",
  "content"
];
class Ft extends nr {
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
    return new Ft(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Lh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Ub(t);
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
      version: Ih
    };
  }
}
function Lh(e, t) {
  return je(new Ft(e, t));
}
function st(e) {
  return e instanceof Ft;
}
function Dh(e) {
  return e?.type === Ft.getType();
}
const Uh = 1, hx = "c", Fh = "span";
class kr extends Ls {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = hx, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new kr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Kh(t) ? {
        conversion: gx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ql().updateFromJSON(t);
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
    const t = document.createElement(Fh);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(wo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(wo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Lt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Uh
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
function gx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: ql(t) };
}
function ql(e, t, r, n, i, s) {
  return je(new kr(e, t, r, n, i, s));
}
function Kh(e) {
  return e ? e.classList.contains(wo) && e.tagName.toLowerCase() === Fh : !1;
}
function Hs(e) {
  return e instanceof kr;
}
function mx(e) {
  return e?.type === kr.getType();
}
const zh = "table", Ec = "immutable-table", Bh = 1, yx = ["type", "marker", "content"];
class Gn extends nr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Ec;
  }
  static clone(t) {
    return new Gn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return bx().updateFromJSON(t);
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
      type: Ec,
      ...t !== void 0 && { unknownAttributes: t },
      version: Bh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function bx(e) {
  return je(new Gn(e));
}
function jh(e) {
  return e instanceof Gn;
}
function kx(e) {
  return e?.type === Ec;
}
const Vh = "table:row", md = "immutable-table-row", Wh = 1, Ac = "tr", Tx = ["type", "marker", "content"];
class Jn extends nr {
  __marker;
  __unknownAttributes;
  constructor(t = Ac, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return md;
  }
  static clone(t) {
    return new Jn(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return xx().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ac).setUnknownAttributes(t.unknownAttributes);
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
      type: md,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Wh
    };
  }
}
function xx(e, t) {
  return je(new Jn(e, t));
}
function Hh(e) {
  return e instanceof Jn;
}
const Gh = "table:cell", yd = "immutable-table-cell", Jh = 1, Pc = "tc1", vx = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function _x(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Yn extends nr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Pc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return yd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Yn(r, n, i, s, o);
  }
  static importJSON(t) {
    return Cx().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Pc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = _x(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: yd,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Jh
    };
  }
}
function Cx(e, t, r, n) {
  return je(new Yn(e, t, r, n));
}
function Sx(e) {
  return e instanceof Yn;
}
const Mx = [
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
  dr,
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
], Yh = 1, Ex = ["type", "marker", "content"];
class tt extends pl {
  __marker;
  __unknownAttributes;
  constructor(t = dr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new tt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Mx.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Ax,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Cs().updateFromJSON(t);
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
    return r && Wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Yh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Cs(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ax(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Cs(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Cs(e, t) {
  return je(new tt(e, t));
}
function re(e) {
  return e instanceof tt;
}
function $l(e) {
  return e?.type === tt.getType();
}
function ha(e, t) {
  const r = e.getChildAtIndex(t);
  return C(r) ? r : void 0;
}
function tr(e, t) {
  const r = ha(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Ss(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function Px(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function Ox(e) {
  return Ss(e) ? void 0 : { closed: "false" };
}
function wx(e, t, r, n) {
  const i = t.getMarker(), s = da(t), o = Px(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    Ws(a) && !a.getTextContent().startsWith(I) && a.setTextContent(I + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function Dn(e) {
  return it(e, D) ?? void 0;
}
function Il(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Oc(e) {
  const t = Xh(e);
  return e.getChildren().every((r) => P(r) || t && te(r, ae) === "attribute" || C(r) && r.getTextContent().replaceAll(I, "") === "");
}
function Xh(e) {
  return Ss(e);
}
function Nx(e, t) {
  const r = e.getUnknownAttributes(), n = r ? ur(r, Ks(e.getMarker())) : "";
  n !== "" && t.insertAfter(xe(n)), e.remove();
}
function Rx(e, t) {
  if (Ss(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", da(e)));
}
function qx(e, t) {
  return D(e) && !Ss(e) && !Ss(t);
}
function $x(e, t, r) {
  Oc(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && Ws(n) && !n.getTextContent().startsWith(I) && n.setTextContent(I + n.getTextContent()), e.append(...t);
}
function Ix(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Xh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = P(l) && l.getMarkerSyntax() === "closing", f = s && te(l, ae) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = qx(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      $x(e, o, n);
    else {
      const l = Nr(t.getMarker(), Ox(t));
      wx(l, t, o, n), e.insertAfter(l), Oc(l) ? l.remove() : c = l;
    }
  i && !a && Rx(t, n), Oc(t) && Nx(t, c);
}
function Mi(e, t) {
  let r = e.getParent();
  for (; D(r); )
    Ix(e, r, t), r = e.getParent();
}
function Ll(e) {
  if (C(e) && !P(e)) {
    const t = e.getTextContent().startsWith(I) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if ($(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      Ll(t);
      return;
    }
    e.selectEnd();
  }
}
const Qh = /[ \u00A0]{2,}/g;
function Lx(e) {
  return [...e.matchAll(Qh)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function Dx(e) {
  return e.replace(Qh, (t) => t[0]);
}
const Ux = "​", Ei = Ux;
var bd;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(bd || (bd = {}));
var kd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(kd || (kd = {}));
function Fx() {
  return xe(Ei);
}
function Kx(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Ei, ""));
}
function Gs(e) {
  return e.length > 0 && e.includes(Ei) && e.replaceAll(Ei, "") === "";
}
function Dl(e) {
  return C(e) && Gs(e.getTextContent());
}
function Zh(e) {
  return ET(e) || mx(e);
}
function Fe(e) {
  return Ce(e) || Hs(e);
}
function eg(e, t) {
  return e.find((r) => Fe(r) && r.getNumber() === t.toString());
}
function zx(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Fe(r));
}
function Td(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function tg(e) {
  if (!e)
    return;
  if (Fe(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Fe(t); )
    t = t.getPreviousSibling();
  if (t && Fe(t))
    return t;
}
function rr(e) {
  return it(e, K) ?? void 0;
}
function Bx(e) {
  return st(e) || Ce(e) || D(e) || Hs(e) || ut(e) || Pe(e) || re(e) || K(e) || Oe(e) || Ae(e);
}
function rg(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function jx(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Kt(e) {
  return we(e) || st(e);
}
function we(e) {
  return re(e) || ut(e);
}
function Vx(e) {
  return $l(e) || ua(e);
}
function Ai(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Un(e, t) {
  const r = te(t, Ln), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Wx(e, t) {
  const r = $(e) ? e : e.getParent(), n = $(t) ? t : t.getParent(), i = r && n ? zb(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Hx(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Fn(e) {
  return e?.type === Be.getType();
}
function Gx(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Jx(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function ng(e, t, r) {
  const n = Ee(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Yx(e) {
  const t = e[Ds];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function ig(e) {
  return Bs(e) || Eh(e) && e.textType === "marker" || Fn(e) && Yx(e) === "attribute" ? "" : Fn(e) && e.text !== I ? e.text : TT(e) ? e.children.map((t) => ig(t)).join("") : "";
}
function Xx(e) {
  return e.map((r) => ig(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Ul(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = sg(r);
    n !== Ut && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function sg(e) {
  return P(e) || Tr(e) || C(e) && te(e, ae) === "attribute" ? "" : C(e) ? e.getTextContent() : $(e) ? e.getChildren().map((t) => sg(t)).join("") : "";
}
function Tr(e) {
  return mt(e) && e.getTextType() === "marker";
}
function zt(e) {
  return P(e) || Tr(e);
}
function xd(e, t) {
  Qx(e, t), e.setMarker(t);
}
function Qx(e, t) {
  const r = e.getMarker(), n = Ee(r), i = Ee(r, !0), s = Ve(r), o = Ve(r, !0), a = ve.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!zt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (Tr(c)) {
        const f = l.startsWith(Ee("", !0));
        c.setTextContent(u ? Ee(t, f) : Ve(t, f));
      }
    }
  });
}
function Ke(e, t = Fb) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Re(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function og(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Fl(e) {
  if (!N(e))
    return vd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !$(t) || e.anchor.type === "text" && !C(t)))
    return t ?? void 0;
  try {
    return vd(e) ?? t ?? void 0;
  } catch (n) {
    if (og(n))
      return t ?? void 0;
    throw n;
  }
}
function Zx(e, t) {
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
function Kl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function ag(e) {
  return !!e && e.includes("-");
}
function cg(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function vd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Ms(e) {
  if (!e)
    return !1;
  if (na(e) || P(e) || Tr(e) || ze(e) || e.getType() === Fs || mt(e) && e.getTextType() === "attribute")
    return !0;
  const t = gn(e);
  if (Ce(t) || C(e) && K(t) && Rr(t)?.is(e))
    return !0;
  if (C(e)) {
    const r = te(e, ae);
    if (r === br || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === I || Gs(n))
      return !0;
  }
  return !1;
}
function ga() {
  const e = xe(I);
  return Tt(e, ae, br), e.setMode("token"), e;
}
function ev(e) {
  const t = e.getTextContent();
  t.startsWith(I) || e.setTextContent(I + t);
}
function Xn(e) {
  return C(e) && te(e, ae) === br;
}
function lg(e) {
  const t = e.getFirstChild();
  if (!zt(t) || t === null || Xn(t.getNextSibling()))
    return !1;
  const r = q();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function ug(e) {
  if (Ce(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!Ms(s)) {
      if (Al(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (C(s) && s.getType() === Be.getType()) {
        r ??= [], r.push(s);
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function tv(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = PT(i), o = t ? Lx(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, u]) => c + u - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function dg(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function rv(e, t) {
  let r = t;
  for (const [n, i] of dg(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function _d(e, t) {
  let r = t;
  for (const [n, i] of dg(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function ir(e, t) {
  return ug(e).map((r) => r.type === "element" ? r : tv(r.nodes, t));
}
function nv(e, t) {
  return ug(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function Do(e, t, r) {
  const n = gn(e);
  if (!n)
    return;
  const i = ir(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: rv(a, t) };
  }
}
function iv(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, _d(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, _d(r, t - r.start)];
}
function Ti(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (vh(e)) {
    const s = e.getParentOrThrow();
    return n ? Ms(n) ? Ti(e, t + 1, r) : Cd(s, n, r) : Ti(s, e.getIndexWithinParent() + 1, r);
  }
  const i = ir(e, r);
  return n ? Ms(n) || Al(n) && !sv(i, n) ? Ti(e, t + 1, r) : Cd(e, n, r) : { type: "index", index: i.length };
}
function sv(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || Ai(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || Ai(n.node, t.getKey())));
}
function Cd(e, t, r) {
  const n = ir(e, r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type === "element") {
      if (s.node.is(t) || Ai(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || Ai(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: n.length };
}
const Ci = /* @__PURE__ */ new WeakMap();
function ov(e, t) {
  return Ci.set(e, t), () => {
    Ci.get(e) === t && Ci.delete(e);
  };
}
function Xa(e) {
  return Ci.get(e);
}
function av(e) {
  return Ci.get(Li())?.has(e.getKey()) ?? !1;
}
function cv(e) {
  Ci.get(Li())?.add(e.getKey());
}
function lv(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function wc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Sd(e) {
  return /^\s/.test(e);
}
function zl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Sd(t) || !Sd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function ma(e, t, r) {
  return r.wantsRun ? zl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : lv(t);
}
function uv(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return zl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function fg(e, t) {
  return !wc(e.scanPieces(t));
}
function Js(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!ma(e, n, r))
    return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Ai(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function dv(e, t, r, n) {
  return !r.wantsRun || wc(n) || Bb(vi) ? !1 : Li().getEditorState().read(() => {
    const i = J(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : wc(e.scanPieces(i));
  });
}
function fv(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Md(e) {
  const t = xe(e);
  return Tt(t, ae, "attribute"), t;
}
function pv(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = ih(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function hv(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    C(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Md(n.valueText));
    return;
  }
  const l = pv(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : C(d) ? zl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Md(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function Es(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (ma(e, i, n) && !av(t)) {
    if (dv(e, t, n, i)) {
      cv(t);
      return;
    }
    if (!Js(e, t)) {
      if (!n.wantsRun) {
        fv(i);
        return;
      }
      hv(e, t, i, n);
    }
  }
}
function gv(e, t, r) {
  Es(e, t), t.isAttached() && Js(e, t) && r.add(t.getKey());
}
function pg(e) {
  if (!C(e))
    return !1;
  if (P(e) || Oe(e) || mn(e))
    return !0;
  const t = te(e, ae);
  return t === "attribute" || t === br;
}
function Bl(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && hn(e) && D(e.getParent())) : !1;
}
function mv() {
  const e = q();
  return N(e) ? Bl(e.focus.getNode(), e.focus.offset) : !1;
}
function hg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return C(t) && pg(t) ? t : void 0;
}
function yv(e) {
  const t = hg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function bv(e) {
  const t = hg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Ed(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Ad(e, t) {
  e.set(t.key, t.offset, t.type);
}
function kv(e, t) {
  let r = bv(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!C(n))
      return;
    if (!pg(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Pd(e, t) {
  const r = kv(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function gg(e) {
  if (e.isCollapsed()) {
    const a = yv(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Ed(r), Ed(n)], s = Pd(r, "next"), o = Pd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Ad(r, i[0]), Ad(n, i[1]), !1) : !0;
}
const Uo = "verse-block", mg = 1, Tv = "verse-block";
class Fi extends nr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Uo;
  }
  static clone(t) {
    return new Fi(t.__number, t.__key);
  }
  static importJSON(t) {
    return xv().updateFromJSON(t);
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
    return cg(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(Tv), Od(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Od(r, this.__number), !1;
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
      type: Uo,
      number: this.getNumber(),
      version: mg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Od(e, t) {
  const { start: r, end: n } = cg(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), wd(e, "data-verse-start", i ? r : NaN), wd(e, "data-verse-end", i ? n : NaN);
}
function wd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function xv(e) {
  return je(new Fi(e));
}
function As(e) {
  return e instanceof Fi;
}
function vv(e) {
  return e?.type === Uo;
}
const _v = [
  Ft,
  kr,
  Ot,
  ht,
  ve,
  Ne,
  er,
  yr,
  Hn,
  zr,
  jr,
  tt,
  sn,
  Gn,
  Jn,
  Yn,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Kr,
  {
    replace: pl,
    with: () => Dt(),
    withKlass: sn
  }
], Fo = {
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
}, Cv = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function Sv(e) {
  if (!e)
    return fr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: fr(r)?.category ?? k.Uncategorized,
      type: Cv[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: fr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Nd(e, t, r) {
  const n = {
    type: Or,
    version: Pr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return ua(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const yg = "v", bg = 1, Mv = "verse-selected";
class Ct extends Ls {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = yg, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Ct(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Pv(t) ? {
        conversion: Av,
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
    const t = document.createElement("span");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(bc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(bc, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Lt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Po + this.getNumber() + Po
    );
    return _(Ev, { nodeKey: this.getKey(), text: t });
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
      version: bg
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (og(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Ev({ nodeKey: e, text: t }) {
  const [r] = sk(e);
  return _("span", { className: r ? Mv : void 0, children: t });
}
function Av(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: jl(t) };
}
function jl(e, t, r, n, i, s) {
  return je(new Ct(e, t, r, n, i, s));
}
function Pv(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === yg;
}
function Qn(e) {
  return e instanceof Ct;
}
function Ov(e) {
  return e?.type === Ct.getType();
}
function me(e) {
  return Oe(e) || Qn(e);
}
function kg(e) {
  return uh(e) || Ov(e);
}
function wv(e) {
  return Nv(e).find((t) => re(t));
}
function Nv(e) {
  return e.some(As) ? e.flatMap((t) => As(t) ? t.getChildren() : t) : e;
}
function ya(e) {
  return $(e) ? As(e) ? e.getChildren().flatMap(ya) : e.getChildren() : [];
}
function Rv(e, t) {
  return ya(e).find((i) => me(i) && Kl(t, i.getNumber()));
}
function qv(e, t) {
  return t === 0 ? wv(e) : e.map((r) => Rv(r, t)).filter((r) => r)[0];
}
function Ko(e) {
  return ya(e).find((r) => me(r));
}
function Tg(e, t) {
  if (!$(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (me(i))
      return i;
  }
}
function $v(e) {
  const t = e.getParent();
  if (t && $(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (me(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Fe(r); ) {
    const n = Ko(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Nc(e) {
  return ya(e).findLast((t) => me(t));
}
function Iv(e) {
  if (!Oe(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Lv(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && $(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function Dv(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Lv(t, e, r);
  if (C(e)) {
    const n = Iv(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Rd(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Uv(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return Rd(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return Dv(e, t) ? { verseNum: n } : Rd(e);
}
function Fv(e) {
  return Bx(e) || Qn(e);
}
function Vl(e) {
  if (C(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(I) && e.setTextContent(`${t} `);
  }
}
function xg(e) {
  if (C(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function vg(e, t) {
  return e.getEditorState().read(() => !J(t));
}
function Kv(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Wl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && $(i) && $(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && $(i)) {
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
      let s = qd(i);
      for (; s && !Fe(s); ) {
        const o = Ko(s);
        if (o) {
          n = o;
          break;
        }
        s = qd(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Ko(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Fe(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function zv(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Wl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && $(i) && (n = Tg(i, r.getIndexWithinParent())), !n && i) {
      let o = $d(i);
      for (; o && !Fe(o); ) {
        const a = Nc(o);
        if (a) {
          n = a;
          break;
        }
        o = $d(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Fe(s); ) {
      const o = Nc(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function qd(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function $d(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Wl(e, t) {
  if ($(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && me(n))
      return n;
    const i = Tg(e, t.anchor.offset);
    if (i)
      return i;
    const s = Ko(e);
    if (s)
      return s;
  }
  return Hl(e);
}
function Hl(e) {
  if (!e || Fe(e))
    return;
  if (me(e))
    return e;
  let t = Td(e);
  for (; t; ) {
    if (Fe(t))
      return;
    if (me(t))
      return t;
    const r = Nc(t);
    if (r)
      return r;
    t = Td(t);
  }
}
const Bv = ["style"], jv = ["style", "code"], zo = ["style", "cid"], Vv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Wv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Hv = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], Gv = ["style", "caller", "category", "contents"], Jv = ["tag", "marker", "contents"], Yv = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Ps = `
`;
function Xv(e, t) {
  const r = J(e);
  if (!Pt(r))
    return;
  const n = _g(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function _g(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Dp();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Pi(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Pi(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Ir(l) || Pt(l))
        return n;
      Kt(l) && (a = l);
    }
    if (Kt(l) && (i.includes(l) || i.push(l)), Cg(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Gl(l, t);
  }
  if (a)
    return n;
}
function Id(e, t, r = "delta-doc") {
  if (e.length < 2 || !e_(e[0]) || !Zv(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Qv(n, r)?.getKey());
}
function Qv(e, t = "delta-doc") {
  const r = Dp();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Pi(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Pi(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Kt(a) && (i.includes(a) || i.push(a)), Cg(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Gl(a, t);
    if (Ir(a) && l > 0 && e >= n && e < n + l || Pt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Pi(e, t) {
  return e ? t ? !Ai(t.node, e.getKey()) : !0 : !1;
}
function Ir(e) {
  return C(e) && !Pt(e);
}
function Pt(e) {
  return Fe(e) || me(e) || Pe(e) || K(e) || Ae(e) || mn(e);
}
function en(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Zv(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Yv.includes(t);
}
function e_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Cg(e, t) {
  return K(e) || Ae(e) ? !0 : t === "apply" && $(e) && Pt(e);
}
function Sg(e) {
  const t = e.getParent();
  return zt(e) && re(t) && t.getFirstChild() === e;
}
function Rc(e) {
  const t = e.getParent();
  return t !== null && it(t, ze) !== null;
}
function t_(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === Ut && t.getChildrenSize() === 1;
}
function r_(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === At(t.getCaller());
}
function n_(e) {
  return !Rh(e) && Gl(e, "delta-doc") === e.getTextContentSize();
}
function Gl(e, t) {
  if (Pt(e))
    return 1;
  if (C(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (Dl(e) || Sg(e) || te(e, ae) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    te(e, ae) === "attribute" || Rc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(kl) || t_(e) || r_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function qc(e, t) {
  const r = { insert: e.__text }, n = te(e, nn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Mg(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Ld(e) {
  const t = new cs();
  return e.isEmpty() || e.read(() => {
    const r = Te();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && ut(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = i_();
    for (const s of i)
      t.push(s);
  }), t;
}
function Jl(e, t) {
  const r = [], n = Di(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Dd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Dd(c, n.length, n, i, s, o, a));
  return r;
}
function i_() {
  return Jl();
}
function Dd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return s_(e, a, n), o_(e, a, i, s, o), a_(e, t, r, i, o, s, a), Fe(e) && a.push(d_(e)), me(e) && a.push(p_(e)), Pe(e) && a.push(h_(e)), mn(e) && a.push(g_(e)), l_(e, a, s), c_(e, a, s), k_(c, s), a;
}
function s_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    st(n) ? t.push(u_(n)) : re(n) ? t.push(f_(n)) : ut(n) && t.push({ insert: Ps });
  }
  Kt(e) && (r.includes(e) || r.push(e));
}
function o_(e, t, r, n, i) {
  if (!C(e) || Oe(e) || mn(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = rr(e) !== void 0;
  if (P(e) && (o || Sg(e) || Rc(e) || Rh(e)) || te(e, ae) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Gs(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && P(c) && c === s.getFirstChild() && a === At(s.getCaller()))
    return;
  const l = D(s) ? s : void 0, u = l?.getFirstChild();
  o && l && P(u) && c === u && a.startsWith(I) && (a = a.slice(1));
  const d = a.startsWith(kl) || te(e, ae) === "attribute" || Rc(e), f = !!l && a === Ut && l.getChildrenSize() === 1, p = ba(e, n), h = p ? r.filter((T) => p.children.includes(T)) : r, g = qc(e, h);
  if (g.insert = a, p) {
    if (!a || a === I || d)
      return;
    p.contentsOps?.push(g);
  } else
    f || d || t.push(g);
  const m = a !== "" && !f && !(d && l);
  if (r.length > 0 && m)
    for (const T of r)
      i.add(T);
}
function a_(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Pi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = y_(c), u = ba(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function c_(e, t, r) {
  if (!K(e))
    return;
  const n = m_(e), i = ba(e, r), s = {
    node: e,
    children: Di(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function l_(e, t, r) {
  if (!Ae(e))
    return;
  const n = b_(e), i = ba(e, r), s = {
    node: e,
    children: Di(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function yn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function u_(e) {
  const t = { style: _s, code: e.__code };
  return yn(t, e), { insert: Ps, attributes: { book: t } };
}
function d_(e) {
  const t = { style: $o, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), yn(t, e), { insert: { chapter: t } };
}
function f_(e) {
  const t = { style: e.__marker };
  return yn(t, e), { insert: Ps, attributes: { para: t } };
}
function p_(e) {
  const t = { style: qo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), yn(t, e), { insert: { verse: t } };
}
function h_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), yn(t, e), { insert: { milestone: t } };
}
function g_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function m_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), yn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = te(e, nn);
  return n && (r.attributes = { segment: n }), r;
}
function y_(e) {
  const t = { insert: "" }, r = Mg([e]);
  return r && (t.attributes = { char: r }), t;
}
function b_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), yn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function ba(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function k_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Pi(t[r].node, e) && t.splice(r, 1);
}
function Mg(e) {
  if (e.length === 0)
    return;
  const t = e.map(T_);
  return t.length === 1 ? t[0] : t;
}
function T_(e) {
  const t = { style: e.__marker }, r = te(e, Ln);
  return r && (t.cid = r), yn(t, e), t;
}
const Eg = 1;
class Zt extends Ls {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Oo, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return Fs;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Zt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => v_(t) ? {
        conversion: x_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Yl().updateFromJSON(t);
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
    return r && Wn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => __(t, n), (l) => C_(t, n, s, l), () => S_(t, n), () => M_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Oo && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Wp && i ? (
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
      version: Eg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function x_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Yl(t, r) };
}
function Yl(e, t, r) {
  return je(new Zt(e, t, r));
}
function v_(e) {
  return e ? e.classList.contains(Zt.getType()) : !1;
}
function Bt(e) {
  return e instanceof Zt;
}
function __(e, t) {
  return e.getEditorState().read(() => {
    const r = J(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function C_(e, t, r, n) {
  e.update(() => {
    const i = J(t);
    if (!K(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = J(r);
    if (!Bt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function S_(e, t) {
  return e.getEditorState().read(() => {
    const r = J(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Jl(r);
  });
}
function M_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of Di())
      if (K(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const E_ = [
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
], A_ = ["†"], Xl = "formatted", Ag = "unformatted", Pg = "paragraph-structure", Og = "standard", wg = "block-verse", P_ = {
  [Xl]: "Formatted",
  [Ag]: "Unformatted",
  [Pg]: "Paragraph Structure",
  [Og]: "Standard",
  [wg]: "Block Verse"
};
function Ki(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Ql, Zl;
function O_(e) {
  const t = Ng(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Ql = e, Zl = t;
}
O_(Xl);
const RO = () => Ql, ka = () => Zl;
function Ng(e) {
  let t;
  switch (e ?? Ql) {
    case Xl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Ag:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Pg:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Og:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case wg:
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
function qO(e) {
  if (!e)
    return;
  const t = Ud(e);
  return Object.keys(P_).find((r) => Nt(Ud(Ng(r)), t));
}
const w_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Ud(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...w_, ...t };
}
function Vt(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function N_(e) {
  if (e)
    return Os(e) ? Ct : e.markerMode === "editable" ? ht : Ct;
}
function Os(e) {
  return e?.verseLayout === "block";
}
function R_(e) {
  const t = [], r = e ?? Zl;
  return r && (t.push(`${Nk}${r.markerMode}`), r.hasSpacing && t.push(Ok), r.isFormattedFont && t.push(wk)), t;
}
function eu(e, t) {
  if ($g())
    return;
  const { start: r } = e;
  let { end: n } = e;
  n ??= r;
  let [i, s] = Oi(r, t), [o, a] = Oi(n, t);
  if (!i || !o || s === void 0 || a === void 0)
    return;
  [i, s] = jd(i, s), [o, a] = jd(o, a), n !== r && _o(n) && n.closingMarkerOffset === 0 && ([o, a] = H_(o, a, Vt(t)));
  const c = ia();
  return c.anchor = ed(i.getKey(), s, Vd(i)), c.focus = ed(o.getKey(), a, Vd(o)), c;
}
function tu(e) {
  if ($g())
    return;
  const t = q();
  if (!t || !N(t))
    return;
  const r = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), n = t.isBackward() ? t.focus.offset : t.anchor.offset, i = jt(r, n, e);
  if (t.isCollapsed())
    return { start: i };
  const s = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), o = t.isBackward() ? t.anchor.offset : t.focus.offset, a = jt(s, o, e);
  return { start: i, end: a };
}
const ru = {
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
}, q_ = new Map(Object.values(ru).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), Fd = {
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
}, $_ = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(Fd).filter((e) => Fd[e])
), I_ = /([^\s="|]+)="([^"]*)"/g, L_ = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Rg(e, t) {
  return `${e}['${t}']`;
}
function Si(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function gs(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function nu(e) {
  const t = on(e);
  if (!t)
    return;
  const r = $r(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function $c(e, t, r, n = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(I_)) {
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
function D_(e, t) {
  const r = L_.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = q_.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function qg(e) {
  if (Tr(e)) {
    const t = Z_(e), r = e.getTextContent();
    if (Pe(t) && (r === "\\*" || r.startsWith(Ee(t.getMarker()))))
      return t;
  }
  return gn(e) ?? e;
}
function U_(e) {
  const t = e.getTextContentSize(), r = nu(e);
  if (r && r.role !== "value") {
    const i = ru[r.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? gs(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (r.kind === "milestone")
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? gs() : Si(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: qg(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Si(e.getNested() ? 2 : 1)
    ) : gs()
  };
}
function F_(e) {
  const t = e.getTextContent(), r = t.length, n = nu(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = qg(e);
  if (st(i)) {
    const s = Ee(i.getMarker()).length;
    if (t.startsWith(Ee(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...Si(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (Ae(i)) {
    const s = fa(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: gs() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: Si(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? gs() : Si(t.startsWith("\\+") ? 2 : 1)
  };
}
function K_(e) {
  const t = nu(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = ru[n];
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
        ...$c(i, 1, D(r) ? Ks(r.getMarker()) : void 0)
      ]
    };
  if (n === "milestone" && Pe(r)) {
    const a = r.getMarker().length;
    return {
      owner: r,
      length: s,
      spans: [
        // A milestone has no text content of its own, so the separator and the `|` both keep
        // counting into its marker name's offset space.
        { start: 0, base: a, bytes: { kind: "property", property: "marker" } },
        ...$c(i, 2, zs(r.getMarker()))
      ]
    };
  }
}
function z_(e) {
  const t = e.getParent();
  if (!Ae(t))
    return;
  const r = e.getTextContent(), n = r.length, i = D_(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...$c(r, 1, void 0, (s) => HT(t.getTag(), s))
      ]
    };
}
function Kd(e, t) {
  const r = Ee(e);
  if (t.startsWith(r))
    return [
      ...Si(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Kn(e) {
  if (P(e))
    return U_(e);
  if (Tr(e))
    return F_(e);
  if (mt(e) && e.getTextType() === "attribute")
    return z_(e);
  if (e.getType() === Fs) {
    const n = e.getParent();
    return K(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Oe(e)) {
    const n = Kd(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!C(e))
    return;
  if (te(e, ae) === "attribute")
    return K_(e);
  const t = e.getParent();
  if (Ce(t) && Ui(t)?.is(e)) {
    const n = Kd(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = gn(e);
  if (K(r) && Rr(r)?.is(e))
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
function iu(e) {
  return Tr(e) || mt(e) && e.getTextType() === "attribute" || e.getType() === Fs;
}
function B_(e) {
  const t = [];
  if (Oe(e) && t.push(e), $(e)) {
    const r = Ce(e) ? Ui(e) : void 0, n = K(e) ? Rr(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (P(i) || Tr(i) || mt(i) && i.getTextType() === "attribute" || i.getType() === Fs || r?.is(i)) && t.push(i);
  }
  for (const r of $_) {
    const n = $r(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function j_(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function zd(e, t, r) {
  const n = Kn(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = Et(pr(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Rg(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return V_(e, r);
  }
}
function Bd(e, t) {
  return C(e) && !Kn(e) && !Do(e, 0, t);
}
function V_(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && ke(o); )
    r = o, o = r.getParent();
  let n = r.getPreviousSibling();
  for (; n && Bd(n, t); )
    n = n.getPreviousSibling();
  if (!n)
    return;
  const i = $(n) ? n.getLastDescendant() : n;
  if (i && (C(i) || iu(i)))
    return Bd(i, t) ? void 0 : Pn(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return Pn(s, n.getIndexWithinParent() + 1, t);
}
function fi(e, t, r) {
  for (const n of B_(e)) {
    const i = Kn(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!j_(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function Oi(e, t) {
  const r = Vt(t);
  if (Is(e)) {
    const n = mr(e.jsonPath);
    let i = Te();
    for (let s = 0; s < n.length; s++) {
      if (!i || !$(i))
        return [void 0, void 0];
      const o = ir(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : iv(o, e.offset) ?? Hd(e, r) ?? [void 0, void 0];
      i = o.node;
    }
    return i && $(i) ? Oi(su(i, n, e.offset, r), t) : [void 0, void 0];
  }
  if (Co(e) || _o(e) || So(e)) {
    const n = Hd(e, r);
    if (n)
      return n;
  }
  if (Mo(e) || dl(e)) {
    const n = ts(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = Mo(e) ? fi(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : fi(n, { kind: "attributeMarker", keyName: i }, 0);
    return s || Wd(n);
  }
  if (So(e)) {
    const n = ts(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = fi(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || Wd(n);
  }
  if (Cp(e)) {
    const n = ts(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = fi(n, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = $(n) ? n.getFirstChild() : null;
    return s && C(s) ? [s, 0] : mo(n, !1);
  }
  if (_o(e)) {
    const n = ts(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = fi(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = ou(n);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return mo(n, !0);
    if (!$(n))
      return [void 0, void 0];
    const o = n.getLastChild();
    return o && C(o) ? [o, o.getTextContent().length] : [n, n.getChildrenSize()];
  }
  if (Co(e)) {
    const n = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), i = n?.[1] ?? n?.[2] ?? n?.[3], s = ts(e.jsonPath, r);
    if (!s || i === void 0)
      return [void 0, void 0];
    const o = fi(s, { kind: "property", property: i }, e.propertyOffset);
    if (o)
      return o;
    if ($(s)) {
      const c = s.getFirstChild();
      return c && C(c) ? [c, 0] : [s, 0];
    }
    const a = Q_(s, i);
    return mo(s, a !== void 0 && e.propertyOffset >= a.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Kb(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function jd(e, t) {
  if (!iu(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !$(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && W_.test(e.getTextContent());
  return [r, s ? n + 1 : n];
}
const W_ = /[ \u00A0]$/;
function H_(e, t, r) {
  let n;
  if ($(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; C(n) && !Kn(n) && !Do(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = $(n) ? n.getLastDescendant() : n;
  return C(s) ? [s, s.getTextContentSize()] : [e, t];
}
function Vd(e) {
  return $(e) ? "element" : "text";
}
function ts(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = mr(n);
  let s = Te();
  for (const o of i) {
    if (!s || !$(s))
      return;
    const a = ir(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function jt(e, t, r) {
  return Pn(e, t, Vt(r));
}
function Pn(e, t, r) {
  const n = zd(e, t, r);
  if (n)
    return n;
  if (ke(e)) {
    const i = e.getChildrenSize(), s = e.getChildAtIndex(Math.min(t, i - 1));
    if (C(s)) {
      const a = t >= i ? s.getTextContentSize() : 0;
      return Pn(s, a, r);
    }
    const o = e.getParent();
    if (o) {
      const a = e.getIndexWithinParent(), c = t >= i ? a + 1 : a;
      return Pn(o, c, r);
    }
  }
  if ($(e)) {
    const i = e.getChildAtIndex(t);
    if (i && Kn(i)) {
      const l = zd(i, 0, r);
      if (l)
        return l;
    }
    if (i && iu(i))
      return {
        jsonPath: Et(pr(e))
      };
    const s = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!i && s && G_(s, e))
      return Qa(e, !0, r);
    if (Fe(e) || Ms(e))
      return Qa(e, t > 0, r);
    const o = ut(e) && wr(e.getParent()) ? e.getParentOrThrow() : e, a = pr(o), c = Ti(e, t, r);
    return c.type === "text" ? {
      jsonPath: Et([...a, c.index]),
      offset: c.offset
    } : su(o, a, c.index, r);
  }
  if (C(e)) {
    const i = Do(e, t, r);
    if (i)
      return {
        jsonPath: Et([
          ...pr(i.parent),
          i.index
        ]),
        offset: i.offset
      };
    const s = t > 0, o = s ? e.getNextSibling() : e.getPreviousSibling();
    if (C(o) && (Kn(o) || Do(o, 0, r)))
      return Pn(o, s ? 0 : o.getTextContentSize(), r);
  }
  return Qa(e, t > 0, r);
}
function G_(e, t) {
  const r = Kn(e);
  return !!r && r.owner.is(t) && r.spans[0]?.bytes.kind === "closingMarker";
}
function Qa(e, t, r) {
  const n = e.getParent();
  return n ? Pn(n, e.getIndexWithinParent() + (t ? 1 : 0), r) : { jsonPath: Et(pr(e)) };
}
function su(e, t, r, n) {
  const i = ir(e, n), s = i[r];
  if (!s)
    return J_(e, t, i, n);
  const o = Et([...t, r]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function J_(e, t, r, n) {
  if (wr(e))
    return Bo(e, t, 1, n);
  if (ou(e) !== void 0) {
    const o = r.length - 1, a = r[o];
    return a?.type === "text" ? {
      jsonPath: Et([...t, o]),
      offset: a.length
    } : {
      jsonPath: Et(t),
      closingMarkerOffset: 0
    };
  }
  const i = gn(e), s = t[t.length - 1];
  return Y_(e) || !i || s === void 0 ? Bo(e, t, 0, n) : su(i, t.slice(0, -1), s + 1, n);
}
function Bo(e, t, r, n) {
  const i = Et(t), s = ou(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + r
    };
  if ($(e)) {
    const l = ir(e, n), u = l.length - 1, d = l[u], f = [...t, u];
    if (d?.type === "text")
      return { jsonPath: Et(f), offset: d.length + r };
    if (d)
      return Bo(d.node, f, r, n);
  }
  const o = (l, u) => ({
    jsonPath: Rg(i, l),
    propertyOffset: u.length + r
  }), a = (l, u) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: Ve(u).length + r
  });
  if (me(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (Fe(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (st(e))
    return o("code", e.getCode());
  if (K(e))
    return o("caller", e.getCaller());
  const c = Ae(e) ? e.getMarker() : X_(e);
  return c ? o("marker", c) : { jsonPath: i };
}
function ou(e) {
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : Ve(e.getMarker(), da(e)).length;
  if (K(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : Ve(e.getMarker()).length;
  if (Pe(e))
    return Ve("").length;
  if (Ae(e)) {
    const { closing: t } = fa(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function Y_(e) {
  return re(e) || ut(e) || st(e) || Hh(e) || Ae(e) && e.getTag() === "table:row" || wr(gn(e));
}
function X_(e) {
  if (re(e) || D(e) || Pe(e) || Hh(e) || Sx(e))
    return e.getMarker();
}
function Wd(e) {
  if ($(e)) {
    const r = e.getLastChild();
    if (r && C(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && $(t) ? [t, 0] : mo(e, !0);
}
function mo(e, t) {
  const r = e.getParent();
  return r ? [r, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function Q_(e, t) {
  if (me(e) || Fe(e)) {
    if (t === "number")
      return e.getNumber();
    if (t === "altnumber")
      return e.getAltnumber();
    if (t === "pubnumber")
      return e.getPubnumber();
    if (t === "marker")
      return e.getMarker();
  }
  if (Pe(e) && t === "marker")
    return e.getMarker();
}
function Hd(e, t) {
  const r = Te(), n = Bo(r, [], 1, t);
  return Gd(n) === Gd(e) ? [r, r.getChildrenSize()] : void 0;
}
function Gd(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [r]) => t.localeCompare(r)));
}
function Z_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Ms(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function pr(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = gn(r);
    if (!n)
      break;
    const i = nv(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function $g() {
  for (let e = Te().getFirstChild(); e; e = e.getNextSibling())
    if (As(e))
      return !0;
  return !1;
}
function Ig(e, t, r, n, i, s, o) {
  if (!Ne.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? eu(r, i) : q();
  if (!N(a))
    return;
  const c = rC(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (ls(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Lg(e, l, c, i, s, void 0, void 0);
  return tC(u, a, i), u;
}
function au(e) {
  return e !== "expanded";
}
function eC(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!C(r) || !D(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function tC(e, t, r) {
  const n = au(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Hx(t), gg(t), wn(t);
  const i = eC(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function pi(e, t, r) {
  const n = Nr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(qr("marker", Ee(e)));
  const s = t === "" ? Ut : i ? I + t : t;
  return n.append(xe(s)), n;
}
function rC(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(pi("fr", f, n)), !e.isCollapsed()) {
        const p = Yd(e);
        p.length > 0 && o.push(pi("fq", p, n));
      }
      o.push(pi("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(pi("xo", f, n)), !e.isCollapsed()) {
        const p = Yd(e);
        p.length > 0 && o.push(pi("xq", p, n));
      }
      o.push(pi("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Lg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : au(n?.noteMode), l = Cl(e, t, c);
  s && Tt(l, nn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = qr("marker", Ee(e) + " "), a || (f = qr("marker", Ve(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = xe(At(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => ga(), g = r.flatMap(iC(h));
    if (t === "")
      l.append(...g);
    else {
      const m = Ul(r);
      let T = () => {
      };
      i?.noteCallerOnClick && (T = i.noteCallerOnClick), p = Yl(l.__caller, m, T), l.append(p, h(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Jd(e) {
  if (typeof e == "string") {
    const i = J(e);
    return K(i) ? i : void 0;
  }
  const t = Di();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => K(i.node))[e]?.node;
  if (K(n))
    return n;
}
function nC(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Qn(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find(D)?.selectEnd();
}
function iC(e) {
  return (t) => mt(t) ? [t] : [t, e()];
}
function sC(e) {
  const t = e.getParent();
  return t !== null && it(t, K) !== null;
}
function Yd(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Mp(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || Bt(c) || sC(c)) && !P(c) && !mn(c) && te(c, ae) !== "attribute") {
      if (me(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (C(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const cu = [
  Zt,
  Ct,
  ..._v
], oC = [
  Fi,
  ...cu
], aC = Vn((e, t) => {
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
function cC() {
  const [e, t] = he(void 0), [r, n] = he(), i = Q(null), s = fe((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = gk(l, c, () => {
      mk(l, c, {
        placement: "bottom-start",
        middleware: [yk(), bk()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = fe(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return B(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function lC({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = cC();
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
const uC = $b(aC);
function Dg({ isOpen: e = !1, children: t }) {
  const r = Q(null), { coords: n, placement: i } = lC({ isOpen: e, floatingBoxRef: r }), s = De(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return An(
    _(uC, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Ug = vp(void 0);
function lu() {
  const e = _p(Ug);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function dC(e, t) {
  const [r, n] = he(0), [i, s] = he(-1), o = De(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = fe(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = fe(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = fe(() => {
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
function fC({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = dC(t, r);
  return _(Ug.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const Fg = Vn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = lu(), u = fe((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = fe((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function pC({ children: e, autoIndex: t = !0, ...r }) {
  const n = Q(null), { state: { activeIndex: i, menuItems: s } } = lu(), o = De(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = De(() => {
    const c = o(s);
    return t ? Ib.map(c, (l, u) => Lb(l) && l.type === Fg && l.props.index === void 0 ? Db(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return B(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), _("div", { ref: n, role: "menu", ...r, children: a });
}
const hC = (e, t, r) => yo(e, r).toLowerCase().includes(t.toLowerCase()), Xd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", yo = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function gC(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? Xd(r[0]) : "") : (u = n || (r.length > 0 ? Xd(r[0]) : ""), d = (h, g) => hC(h, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return d(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const m = (S) => (p.has(S) || p.set(S, yo(S, f).toLowerCase()), p.get(S) ?? ""), T = a ? yo(h, f) : m(h), v = a ? yo(g, f) : m(g);
    for (const S of c)
      switch (S) {
        case "exact":
          if (T === l && v !== l)
            return -1;
          if (v === l && T !== l)
            return 1;
          break;
        case "startsWith":
          if (T.startsWith(l) && !v.startsWith(l))
            return -1;
          if (v.startsWith(l) && !T.startsWith(l))
            return 1;
          break;
        case "contains": {
          const w = T.indexOf(l), A = v.indexOf(l);
          if (w !== -1 && A === -1)
            return -1;
          if (A !== -1 && w === -1)
            return 1;
          if (w !== -1 && A !== -1)
            return w - A;
          break;
        }
      }
    return T.localeCompare(v);
  });
}
const Za = {
  Root: fC,
  Options: pC,
  Option: Fg
};
function mC(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return De(() => gC({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function yC() {
  const { moveUp: e, moveDown: t, select: r } = lu();
  return De(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const bC = () => {
  const e = yC(), [t] = ue();
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
    return t.registerCommand(Ur, r, Ue);
  }, [t, e]);
};
function kC() {
  return bC(), null;
}
const TC = ["Shift", "Control", "Alt", "Meta"];
function Kg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ue(), u = s !== void 0, [d, f] = he(""), p = u ? s ?? "" : d, h = mC({ query: p, items: t, filterBy: "name" }), g = (m) => {
    n?.(), r ? r(m) : m.action(l);
  };
  return B(() => {
    a?.(p, h);
  }, [a, p, h]), B(() => l.registerCommand(Ur, (m) => {
    if (u || c?.includes(m.key) || TC.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return n?.(), !1;
    const v = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((S) => S.slice(0, -1));
      }
    }[m.key];
    return v ? (m.stopPropagation(), m.preventDefault(), v(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && f((S) => S + m.key), !0) : !1;
  }, Ue), [l, u, p, o, n, c]), Me(Za.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => g(m), children: [!u && _("input", { value: p, type: "text", disabled: !0 }), _(kC, {}), _(Za.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((v, S) => Me(Za.Option, { index: S, children: [_("span", { className: "label", children: v.label ?? v.name }), _("span", { className: "description", children: v.description })] }, v.name)) })] });
}
function xC({ trigger: e, items: t }) {
  const [r] = ue(), [n, i] = he(!1), s = fe((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return B(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), B(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = q();
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = q();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && _(Dg, { isOpen: n, children: ({ placement: o }) => _(Kg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function vC({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: De(() => {
    if (!t || !e)
      return;
    const i = fr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = fr(o), { action: c } = r(o, a);
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
function ms(e, t) {
  return `${e}:${t}`;
}
function _C(e, t) {
  B(() => {
    if (!e.hasNodes([Ye]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return et(bl(e, Ye, (n) => In(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], h = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, h, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Ye, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = J(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : ke(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Ye.isReservedType(c))
              for (const u of l) {
                let d = t.get(ms(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(ms(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(ms(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const CC = Vn(function({ logger: t, viewOptions: r }, n) {
  const [i] = ue(), s = De(() => /* @__PURE__ */ new Map(), []);
  _C(i, s);
  const o = (a, c, l) => {
    const u = Array.from(l ?? s.get(ms(a, c)) ?? []);
    if (u.length !== 0)
      for (const d of u) {
        const f = J(d);
        ke(f) && (f.deleteID(a, c), f.hasNoIDsForEveryType() && Ro(f));
      }
  };
  return ul(n, () => ({
    setAnnotation(a, c, l, u, d, f, p) {
      if (Ye.isReservedType(c))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const h = eu(a, r);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        o(c, l), Sl(h, c, l, u, d, f, p);
      }, { tag: kc });
    },
    removeAnnotation(a, c) {
      if (Ye.isReservedType(a))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      const l = s.get(ms(a, c));
      l === void 0 || l.size === 0 || i.update(() => {
        o(a, c, l);
      }, { tag: kc });
    }
  })), null;
}), SC = [];
function MC({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = SC, onChange: n }) {
  const [i] = ue();
  return $s(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Ep) && !u.has(Hp) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = EC(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function EC(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new cs();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = J(i), o = s !== null && rr(s) !== void 0;
    if (t.size === 1 && C(s) && !o && n_(s)) {
      const a = _g(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = J(i);
          return new cs([C(d) ? qc(d) : { insert: "" }]);
        }), l = new cs([qc(s)]), u = new cs(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Ld(r), c = Ld(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function AC(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += PC(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), wC(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += NC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), qC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function PC(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), OC(t, e.retain, e.attributes, r, n)), e.retain);
}
function OC(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Te();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Ir(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, h = Math.min(s, p);
        if (h > 0) {
          let g = u;
          const m = f > 0, T = h < d - f;
          if (m && T) {
            const [, v] = u.splitText(f);
            [g] = v.splitText(h);
          } else m ? [, g] = u.splitText(f) : T && ([g] = u.splitText(h));
          if (an(r)) {
            const v = g.getParent();
            if (D(v)) {
              const S = r.char;
              let w;
              Array.isArray(S) ? a >= 0 && a <= S.length - 1 && (w = S[a]) : a === 0 && (w = S);
              const A = w ? Un(w, v) : !1;
              if (A && Array.isArray(S) && S.length > 1) {
                const M = xe("");
                g.replace(M);
                const E = typeof r.segment == "string" ? r.segment : void 0, R = zi(S.slice(1), n, g, E);
                let Y = M;
                for (const H of R)
                  Y.insertAfter(H), Y = H;
                M.remove(), Rt(r, g);
              } else if (A)
                Rt(r, g);
              else {
                g.remove();
                const M = Qd(g, r, n, i);
                if (M && M.length > 0) {
                  let E = v;
                  for (const R of M)
                    E.insertAfter(R), E = R;
                }
              }
            } else {
              const S = xe("");
              g.replace(S);
              const w = Qd(g, r, n, i);
              if (w && w.length > 0) {
                let A = S;
                for (const M of w)
                  A.insertAfter(M), A = M;
                S.remove();
              } else
                S.replace(g);
            }
          } else
            Rt(r, g);
          s -= h;
        }
      }
      o += d;
    } else if (Pt(u))
      e <= o && o < e + t && s > 0 && (Zd(u, r), s -= 1), o += 1;
    else if (D(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (an(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Ic(u, p.style), typeof p.cid == "string" && Tt(u, Ln, () => p.cid);
            const h = Ke(p, zo);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || BC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && yc(u), !0;
        }
      }
      d && yc(u), a -= 1;
    } else if (Kt(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!ut(u))
          Zd(u, r);
        else if (uu(r)) {
          const p = jg(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if ($(u)) {
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
function Qd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = zi(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Rt(t, e);
    return;
  }
  const a = {};
  Gg.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Rt(t, e), s;
}
function zg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Ee(t))) : mt(r) && r.getTextType() === "marker" && r.setTextContent(Ee(t) + I);
}
function Ic(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = D(e.getParent()), i = e.getFirstChild();
  mt(i) && i.getTextType() === "marker" && i.getTextContent() === Ee(r, n) && i.setTextContent(Ee(t, n));
  const s = e.getLastChild();
  mt(s) && s.getTextType() === "marker" && s.getTextContent() === Ve(r, n) && s.setTextContent(Ve(t, n));
}
function Zd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && an(t)) {
      const i = Lc(n);
      if (Ic(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Tt(e, Ln, () => o);
      }
      const s = Ke(i, zo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Fe(e) || me(e) || Pe(e) || K(e) || Ae(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (st(e) || re(e) || D(e)) && (r === "style" && re(e) ? zg(e, n) : r === "style" && D(e) ? Ic(e, n) : r === "code" && st(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Tt(e, nn, () => n));
  }
}
function wC(e, t, r) {
  if (t <= 0)
    return;
  const n = Te();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Ir(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Pt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Kt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Kt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Dt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && we(p)) {
            let h = i + 1;
            const g = p.getChildren();
            for (const T of g) {
              if (s <= 0)
                break;
              const v = i;
              if (i = h, o(T)) {
                i = v;
                break;
              }
              Ir(T) ? h += T.getTextContentSize() : Pt(T) && (h += 1), i = v;
            }
            const m = p.getChildren();
            for (const T of m)
              T.remove(), a.append(T);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Dt(), !0);
        } else re(a) ? a.replace(Dt(), !0) : a.remove();
      }
      i += 1;
    } else if ($(a)) {
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
function NC(e, t, r, n, i) {
  if (t === Ps)
    return ef(e, r, n, i);
  if (t.endsWith(Ps) && !uu(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (an(r))
        throw new Error("Text + LF should not have char attributes");
      o += jo(e, s, r, i);
    }
    return o += ef(e + o, r, n, i), o;
  } else return an(r) ? RC(e, t, r, n, i) : jo(e, t, r, i);
}
function RC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = xe(t === "" ? Ut : t);
  Rt(r, s);
  let o;
  {
    let m = function(T) {
      if (Ir(T)) {
        const v = T.getTextContentSize();
        if (e >= g && e < g + v) {
          const S = T.getParent();
          return D(S) && (o = S), !0;
        }
        g += v;
      } else if (Pt(T))
        g += 1;
      else if (D(T)) {
        const v = T.getChildren();
        for (const S of v)
          if (m(S))
            return !0;
      } else if ($(T)) {
        const v = T.getChildren();
        for (const S of v)
          if (m(S))
            return !0;
        Kt(T) && (g += 1);
      }
      return !1;
    };
    const h = Te();
    let g = 0;
    m(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Un(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Un(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = zi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(D);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), jo(e, t, void 0, i);
  const f = {};
  for (const [h, g] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof g == "string" && (f[h] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const h of u)
    if (!Bg(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), jo(e, t, void 0, i));
}
function jo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Te();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Ir(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = xe(t);
        if (Rt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          D(f) && !an(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Pt(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const d = xe(t);
        Rt(r, d);
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
        const d = xe(t);
        return Rt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Kt(c)) {
      if (!o && e === s) {
        const d = xe(t);
        Rt(r, d);
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
        const d = xe(t);
        return Rt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if ($(c)) {
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
    const c = xe(t);
    Rt(r, c);
    const l = Dt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Bg(e, t, r) {
  const n = Te();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Dt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!$(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (we(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Dt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Ir(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Pt(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (Kt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (ut(u) && Kt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if ($(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return $(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Dt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      we(a) ? ut(a) && re(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !we(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !we(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function qC(e, t, r, n, i) {
  let s;
  return en("chapter", t) ? s = IC(t.insert.chapter, r) : en("verse", t) ? s = LC(t.insert.verse, r) : en("ms", t) ? s = DC(t.insert.ms) : en("note", t) ? s = Vg(t, r, n, i) : en("unknown", t) ? s = Wg(t, r, n, i) : en("unmatched", t) && (s = FC(t.insert.unmatched, r)), s ? Bg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function ef(e, t, r, n) {
  let i;
  uu(t) ? i = jg(t.para, r) : zC(t) && (i = $C(t.book)), i ??= Dt();
  const s = i, o = re(s), a = ut(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Ir(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (re(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? d.splitText(h) : [void 0];
          let m, T = g?.getPreviousSibling();
          for (; T; ) {
            const v = T;
            T = T.getPreviousSibling(), m ? m.insertBefore(v) : s.append(v), m = v;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Pt(d))
      c += 1;
    else if (Kt(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (ut(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (re(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && re(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if ($(d)) {
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
  return u(Te()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function $C(e) {
  const { style: t, code: r } = e;
  if (!t || t !== _s || !r || !Ft.isValidBookCode(r))
    return;
  const n = Ke(e, jv);
  return Lh(r, n);
}
function jg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ke(e, Bv), i = Cs(r, n);
  if (!Ki(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), ga());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ee(r) + I;
    i.append(t.hasGutterParaMarkers ? RT(s) : qr("marker", s));
  }
  return i;
}
function IC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ke(e, Vv);
  let a;
  if (t.markerMode === "editable")
    a = Th(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = ql(r, c, n, i, s, o);
  }
  return a;
}
function LC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ke(e, Wv);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Lt(r, n);
    c = lh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = jl(n, l, i, s, o, a);
  }
  return c;
}
function DC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ke(e, Hv);
  return Yp(t, r, n, s, i);
}
function Vg(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Ke(i.note, Gv), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (an(g.attributes)) {
        const m = zi(g.attributes.char, t, xe(g.insert), void 0, Hg(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...m);
      } else
        p.push(xe(g.insert));
  return Lg(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Wg(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ke(i, Jv), l = wl(s, o, c), u = a?.ops ?? [];
  u.length > 0 && UC(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Tt(l, nn, () => d), l;
}
function UC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (an(s.attributes)) {
        const o = xe(s.insert), a = zi(s.attributes.char, t, o, void 0, Hg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(xe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (en("unknown", s)) {
        const o = Wg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (en("note", s)) {
        const o = Vg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function FC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Rl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Hg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Lc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function zi(e, t, r, n, i, s = !1, o = !1) {
  C(r) && r.getTextContentSize() === 0 && r.setTextContent(Ut);
  const a = () => {
    o && C(r) && r.getTextContent() !== Ut && r.setTextContent(I + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Lc), l = c[0], u = i?.[i.length - 1];
    if (D(u) && Un(l, u))
      return c.length > 1 ? zi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, h) => {
      const g = Nr(p.style, Ke(p, zo));
      if (typeof p.cid == "string" && Tt(g, Ln, () => p.cid), n && h === c.length - 1 && Tt(g, nn, () => n), f)
        if (D(f)) {
          const m = f.getMarker(), T = [];
          tc(m, T, t, !0), T.forEach((S) => g.append(S)), g.append(f);
          const v = [];
          ec(f, v, t, !0), v.forEach((S) => g.append(S));
        } else
          g.append(f);
      return g;
    }, r);
    return tc(l.style, d, t, s), ec(d, d, t, s), [d];
  } else {
    const c = Lc(e), l = i?.[i.length - 1];
    if (D(l) && Un(c, l))
      return r && l.append(r), [];
    a();
    const u = Nr(c.style, Ke(c, zo));
    return typeof c.cid == "string" && Tt(u, Ln, () => c.cid), n && Tt(u, nn, () => n), r && u.append(r), tc(c.style, u, t, s), ec(u, u, t, s), [u];
  }
}
function ec(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && KC(e.getMarker(), t, r, !1, n);
}
function tc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = qr("marker", Ee(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function KC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = qr("marker", n ? Ve("") : Ve(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function zC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function uu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function an(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function BC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Rt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Tt(t, nn, () => n);
        continue;
      }
      if (jC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Gg = [
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
function jC(e) {
  return Gg.includes(e);
}
function VC() {
  const [e] = ue();
  return B(() => e.registerCommand(sa, (t) => (WC(t), !1), Nn), [e]), null;
}
function WC(e) {
  if (HC(e.target))
    return;
  const t = q();
  N(t) && GC(t);
}
function Bi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (zt(t))
      r++, t = t.getNextSibling(), C(t) && t.getTextContent() === I && (r++, t = t.getNextSibling());
    else if (me(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (tr(e, r), !0);
}
function HC(e) {
  if (!Ap(e))
    return !1;
  const t = Us(e);
  if (!qT(t))
    return !1;
  const r = t.getParent();
  return r ? we(r) ? Bi(r) : (tr(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function GC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = J(t.key);
  if (!we(r))
    return !1;
  const n = r.getFirstChild();
  return !Tr(n) && !Qn(n) ? !1 : Bi(r);
}
function JC() {
  const [e] = ue();
  return B(() => {
    const t = (r) => r instanceof KeyboardEvent && !YC(r) || !Jg() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return et(
      e.registerCommand(Ur, t, Ue),
      e.registerCommand(hl, t, Ue),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(Er, t, Ar),
      e.registerCommand(Rn, t, Ar),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(gl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Us(r.target);
        return !n || !zn(n) ? !1 : (r.preventDefault(), !0);
      }, Ue),
      e.registerCommand(jb, t, Ue),
      e.registerCommand(Vb, t, Ue),
      e.registerCommand(Wb, t, Ue)
    );
  }, [e]), null;
}
function YC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function zn(e) {
  return it(e, (t) => Ae(t) || jh(t)) ?? void 0;
}
function Jg() {
  const e = q();
  return N(e) ? zn(e.anchor.getNode()) !== void 0 || zn(e.focus.getNode()) !== void 0 : !1;
}
function XC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function QC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), XC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function ZC(e, t, r, n) {
  if (!pS(t) || QC(e, r))
    return !1;
  const i = r === "up" ? zv(t) : Kv(t);
  return i && n.preventDefault(), i;
}
function eS({ viewOptions: e }) {
  const [t] = ue();
  return tS(t, e), null;
}
function tS(e, t) {
  B(() => {
    if (!e.hasNodes([kr, Ct, Ne]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = q();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = tf(o), d = cS(i, rf(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return ZC(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = tf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return rf(a, n.key) ? l = !c && of(i, "next") || !c && nS(i) || dS(i) || !c && s && sf(i, "next") : rS(a, n.key) && (l = !c && of(i, "previous") || !c && iS(i) || fS(i, t) || !c && s && sf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Ur, r, Ue);
  }, [e, t]);
}
function tf(e) {
  return e.dir || "ltr";
}
function rf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function rS(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Dc(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = rr(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function nS(e) {
  const t = Dc(rg(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (tr(t, 0), !0);
}
function iS(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Dc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : nf(n);
  }
  if (t.offset === 0) {
    const n = Dc(r);
    return n ? nf(n) : !1;
  }
  return !1;
}
function nf(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (C(t))
    return t.select(), !0;
  if ($(t)) {
    const i = t.getLastDescendant();
    return C(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Vo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function sS(e) {
  if (Vo)
    for (const { segment: r } of Vo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function oS(e) {
  if (Vo) {
    let n = 0;
    for (const { index: i } of Vo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Yg(e) {
  for (let t = e; t; t = t.getParent())
    if ($(t) && !t.isInline())
      return t;
}
function Xg(e) {
  return !!e && P(e) && zn(e) !== void 0;
}
function wi(e) {
  return C(e) && !e.isToken() && !Xg(e) && e.getTextContentSize() > 0;
}
function Qg(e) {
  return na(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : C(e) ? (e.isToken() || Xg(e)) && e.getTextContentSize() > 0 : Pp(e) ? !Pe(e) : !1;
}
function Ni(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Ta(e, t, r) {
  for (let n = e; n; ) {
    if (Qg(n))
      return n;
    if ($(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Ni(n, t, r);
      continue;
    }
    if (wi(n))
      return n;
    n = Ni(n, t, r);
  }
}
function du(e, t, r, n, i) {
  return r === "element" && $(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Ni(e, n, i) : r === "text" && Qg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Ni(e, n, i);
}
function rc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = du(e.node, e.offset, e.kind, "previous", t), n = Ta(r, "previous", t);
  if (!n)
    return e;
  if (wi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function aS(e, t) {
  const r = e.getNode(), n = Yg(r);
  if (!n)
    return;
  if (e.type === "text" && wi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return rc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = du(r, e.offset, e.type, t, n), s = Ta(i, t, n);
  if (!s)
    return;
  if (wi(s)) {
    const c = s.getTextContent(), l = t === "next" ? sS(c) : oS(c);
    return rc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return rc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Zg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = aS(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function sf(e, t) {
  return Zg(e, t, "collapse");
}
function cS(e, t) {
  return Zg(e, t, "extend");
}
function lS(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && wi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = du(n, e.offset, e.type, t, r);
  return Ta(i, t, r) === void 0;
}
function uS(e, t) {
  const r = Te();
  for (let n = e; n; ) {
    const i = Ni(n, t, r), s = i && Ta(i, t, r);
    if (!s)
      return;
    if (n = zn(s), !n)
      return s;
  }
}
function of(e, t) {
  const r = e.anchor, n = r.getNode();
  if (zn(n))
    return !1;
  const i = Yg(n);
  if (!i || !lS(r, t, i))
    return !1;
  const s = Ni(i, t, Te()), o = s && zn(s);
  if (!o)
    return !1;
  const a = uS(o, t);
  if (!a)
    return !0;
  if (wi(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function af(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function dS(e) {
  const t = e.anchor.getNode(), r = rg(e);
  if (K(r) && !P(r.getFirstChild())) {
    if (we(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(we(i) && Bi(i)) && i.selectStart(), !0;
      }
    } else return mt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (we(t) && K(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : af(r), !0;
  }
  const n = r?.getParent();
  if (mt(r) && K(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? af(n) : n.selectEnd(), !0;
  }
  return !1;
}
function fS(e, t) {
  const r = jx(e);
  if (Hs(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (st(i.getParent()))
    return !0;
  if (K(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Qn(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (we(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = it(o, (c) => K(c));
    if (K(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = rr(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (Bt(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function pS(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return me(t) && Pp(t);
}
function hS() {
  const [e] = ue();
  return gS(e), null;
}
function gS(e) {
  B(() => {
    if (!e.hasNodes([ve]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return et(
      e.registerNodeTransform(ve, bS),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ve, AT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ve, Ch),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ve, (t) => Es($r("char"), t)),
      e.registerNodeTransform(Be, kS)
    );
  }, [e]);
}
function nc(e) {
  return e.getChildren().some(P);
}
function mS(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Ws(n)) {
    const i = n.getTextContent();
    i.startsWith(I) && (i === I ? n.remove() : n.setTextContent(i.slice(I.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function yS(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function bS(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (nc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = te(e, Ln), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && Un({ style: t, cid: r }, i) && Nt(n, i.getUnknownAttributes()))
    if (nc(i)) {
      if (mS(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && Un({ style: t, cid: r }, s) && Nt(n, s.getUnknownAttributes()) && (nc(s) ? yS(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function kS(e) {
  const t = e.getParent();
  if (!D(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Ut) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function em(e) {
  return e.replaceAll("	", " ");
}
const fu = (e) => {
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
      n.setData(o, em(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Er, s);
  });
}, pu = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", em(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Er, i);
  });
};
function TS() {
  const [e] = ue();
  return B(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Ao ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(oa, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(Rn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? pu(e) : fu(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function xS({ logger: e }) {
  const [t] = ue();
  return B(() => et(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Ur, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), xi),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Er, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, xi),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(gl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, xi)
  ), [t, e]), null;
}
function vS({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function _S({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(vS, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let CS = 0;
class rs {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${CS++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function SS({ options: e } = {}) {
  const [t] = ue(), [r, n] = he(() => !t.isEditable()), [i, s] = he({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = he(void 0), c = De(() => {
    const d = [
      new rs("Cut", {
        onSelect: () => {
          t.dispatchCommand(Rn, null);
        },
        isDisabled: r
      }),
      new rs("Copy", {
        onSelect: () => {
          t.dispatchCommand(oa, null);
        }
      }),
      new rs("Paste", {
        onSelect: () => {
          fu(t);
        },
        isDisabled: r
      }),
      new rs("Paste as Plain Text", {
        onSelect: () => {
          pu(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new rs(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = fe(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  B(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || Kh(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
    });
  }, [t]), B(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, l]), B(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, l]), B(() => {
    if (!i.isOpen)
      return;
    const d = (f) => {
      if (f.key === "Escape")
        l();
      else if (f.key === "ArrowDown")
        f.preventDefault(), f.stopPropagation(), a((p) => p === void 0 ? 0 : (p + 1) % c.length);
      else if (f.key === "ArrowUp")
        f.preventDefault(), f.stopPropagation(), a((p) => p === void 0 ? c.length - 1 : (p - 1 + c.length) % c.length);
      else if (f.key === "Enter" && o !== void 0) {
        f.preventDefault(), f.stopPropagation();
        const p = c[o];
        p && !p.isDisabled && (t.update(() => {
          p.onSelect();
        }), l());
      }
    };
    return document.addEventListener("keydown", d, !0), () => document.removeEventListener("keydown", d, !0);
  }, [i.isOpen, l, c, o, t]), B(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]);
  const u = Q(null);
  return $s(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${h}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? uk.createPortal(_("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: _(_S, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function MS() {
  const [e] = ue();
  return B(() => e.registerCommand(Ur, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ao ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Ar), [e]), null;
}
function ES({ isEditable: e }) {
  const [t] = ue();
  return $s(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function cf(e) {
  return !!e && Dl(J(e));
}
function tm(e) {
  const [t] = ue(), r = Q(void 0), n = fe((i) => {
    let s = !1;
    const o = q(), a = N(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = cf(c);
    c && !l && (r.current = void 0);
    let u;
    if (i) {
      const d = i.getParentOrThrow(), f = i.getIndexWithinParent() + 1, p = ha(d, f);
      if (p)
        r.current = p.getKey(), u = p.getKey();
      else {
        const h = Fx();
        i.insertAfter(h), r.current = h.getKey(), u = h.getKey(), s = !0;
      }
      tr(d, f);
    }
    if (c && l && c !== a && c !== u) {
      const d = J(c);
      C(d) && (d.remove(), s = !0), r.current === c && (r.current = void 0);
    }
    return s;
  }, []);
  return B(() => {
    const i = () => {
      const a = e(), c = q(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && n(a) && qn(Ts);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Gs(c) || !c.includes(Ei))
        return;
      const l = q(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Kx(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Ei).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = et(t.registerCommand(gr, () => (i(), !1), Nn), t.registerCommand(ml, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = cf(a);
      }), c && t.update(() => {
        const l = J(a);
        C(l) && (l.remove(), qn(Ts));
      }), r.current = void 0, !1;
    }, Nn), t.registerNodeTransform(Be, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function AS() {
  const e = q();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!$(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!me(i) || ha(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || me(s))
    return i;
}
function PS() {
  return tm(AS), null;
}
function OS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
        const u = o.getRootElement(), d = u?.ownerDocument.activeElement, f = u != null && d != null && (u === d || u.contains(d));
        o.update(() => {
          f || qn(Hb), o.setEditorState(l), o.dispatchCommand(Gb, void 0);
        }, { tag: Tl });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function wS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ue();
  return NS(t, n), RS(i, e, r, n), null;
}
function NS(e, t) {
  const r = Q(void 0), n = Q(void 0), i = e.noteCallers, s = e.crossRefCallers;
  B(() => {
    let o = i;
    (!o || o.length <= 0) && (o = E_), r.current !== o && (r.current = o, lf("note-callers", o, t));
  }, [t, i]), B(() => {
    let o = s;
    (!o || o.length <= 0) && (o = A_), n.current !== o && (n.current = o, lf("cross-ref-callers", o, t));
  }, [t, s]);
}
function RS(e, t, r, n) {
  B(() => {
    if (!e.hasNodes([ve, Ne, Zt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => FS(s));
    return et(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ne, (s) => qS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ve, $S),
      e.registerNodeTransform(Be, IS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Zt, LS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Zt, (s, { prevEditorState: o }) => DS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(gr, () => US(e, t, r, n), Mt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function qS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Bt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    C(i) && !P(i) && i.getTextContent() !== At(e.getCaller()) && e.insertBefore(i);
  }
}
function $S(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => Bt(o));
  if (!D(e) || !K(t) || !n)
    return;
  const i = Ul(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  C(s) ? s.getTextContent() !== I && s.setTextContent(I) : e.insertAfter(xe(I));
}
function IS(e) {
  const t = rr(e), r = t?.getChildren(), n = r?.find((o) => Bt(o));
  if (!C(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && K(i) && e.getTextContent() !== I && (e.setTextContent(I), e.selectEnd()), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Ut) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Ul(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function LS(e) {
  if (!Bt(e))
    return;
  const t = e.getNextSibling();
  !C(t) || P(t) ? e.insertAfter(xe(I)) : t.getTextContent() !== I && t.setTextContent(I);
}
function DS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = J(r), a = o?.getParent();
      return Bt(o) && K(a) && a.getCaller() === Oo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function US(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = it(o, (c) => K(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = J(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), ns(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, ns(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, ns(e, c, n);
    } else if (!a) {
      const c = it(o, (l) => K(l));
      if (c && c.getIsCollapsed() && we(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, ns(e, l, n);
      }
    }
  }
  if (we(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Qn(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, ns(e, l, n);
    }
  }
  return !1;
}
function ns(e, t, r) {
  const n = J(t);
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
function FS(e) {
  const t = q();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && C(s)) {
    e.preventDefault();
    const o = ia();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), wn(o);
  }
}
function lf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (KS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function KS(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function xa(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Rr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => C(n) && n.getMode() === "token") ? t : [];
}
function zS(e) {
  const t = e.getParent();
  if (K(t))
    return xa(t).some((r) => r.is(e)) ? t : void 0;
}
function Wo(e) {
  const t = xa(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function BS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function jS(e) {
  const t = Jb();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Wo(e);
  const i = BS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Wo(e);
}
function Uc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = zS(t);
  if (r)
    return VS(r, t, e.offset) ? void 0 : r;
}
function VS(e, t, r) {
  const n = xa(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function WS(e) {
  const t = xa(e), r = t[t.length - 1];
  C(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : tr(e, Wo(e));
}
function HS(e = !1) {
  const t = q();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return GS(t.anchor, t.focus);
  const r = Uc(t.anchor);
  if (!r)
    return !1;
  if (!e && jS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    tr(n, r.getIndexWithinParent());
  } else
    WS(r);
  return !0;
}
function GS(e, t) {
  const r = Uc(e), n = Uc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && uf(e, r, i), n && uf(t, n, !i), !0;
}
function uf(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Wo(t), "element");
}
function JS() {
  const [e] = ue(), t = Q(!1);
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
  }, [e]), B(() => e.registerCommand(gr, () => (HS(t.current) && e.dispatchCommand(xl, void 0), !1), Nn), [e]), null;
}
function YS({ onChange: e, viewOptions: t }) {
  const [r] = ue();
  return B(() => r.registerCommand(gr, () => {
    const n = tu(t);
    return e?.(n), !1;
  }, Mt), [r, e, t]), null;
}
function XS() {
  const [e] = ue();
  return QS(e), null;
}
function QS(e) {
  B(() => {
    if (!e.hasNodes([tt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(tt, (t) => ZS(t, e));
  }, [e]);
}
function ZS(e, t) {
  vg(t, e.getKey()) && xg(e.getFirstChild()), !(!re(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = J(e.getKey());
    return re(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function rm({ onStateChange: e }) {
  const [t] = ue(), [r, n] = he(t), i = Q(!1), s = Q(!1), o = Q(void 0), a = Q(void 0), c = fe(() => {
    const l = q();
    let u;
    if (N(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : it(d, (T) => {
        const v = T.getParent();
        return v !== null && Yb(v);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), As(p) && (p = it(d, re) ?? p);
      const h = p.getKey(), g = r.getElementByKey(h), m = Wx(d, f);
      if (m && Fv(m) && (u = m.getMarker()), g !== null && (re(p) || st(p) || Hs(p))) {
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
  return B(() => t.registerCommand(gr, (l, u) => (c(), n(u), !1), Ar), [t, c]), B(() => et(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Xb, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Ar), r.registerCommand(Qb, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Ar)), [c, r, e]), null;
}
function eM(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function cn(e) {
  return e ? we(e) ? e : it(e, (r) => we(r)) ?? void 0 : void 0;
}
function nm(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = cn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function hu(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !Op(e) ? !1 : e.getNodes().some((t) => me(t));
}
function im(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = cn(r);
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
function sm(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = cn(r);
  if (!n)
    return !1;
  if ($(r)) {
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
function df(e, t) {
  return !!Fc(e, t);
}
function Fc(e, t) {
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && $(n)) {
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
function Ho(e, t) {
  if (!N(e))
    return !1;
  const r = cn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ic(e) {
  return hu(e) || nm(e);
}
function tM(e, t) {
  if (hu(e) || nm(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return im(e) && Ho(e, "backward") || df(e, "backward");
    case "deleteForward":
      return sm(e) && Ho(e, "forward") || df(e, "forward");
    case "insertText":
      return !1;
  }
}
function rM(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Fc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (im(e) && Ho(e, "backward")) {
        const n = cn(e.anchor.getNode());
        if (we(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Fc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (sm(e) && Ho(e, "forward")) {
        const i = cn(e.anchor.getNode())?.getNextSibling();
        if (we(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function ff(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Op(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = cn(e.anchor.getNode()), n = cn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function om(e) {
  if (C(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else $(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function nM(e) {
  const t = e.getPreviousSibling();
  if (!we(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? om(r) : Bi(t) || t.selectStart();
}
function am(e) {
  return me(e) || Fe(e) ? [] : we(e) ? e.getChildren().flatMap(am) : [e];
}
function iM(e) {
  const t = [];
  for (const r of e) {
    const n = am(r);
    n.length !== 0 && (we(r) && t.length > 0 && t.push(xe(" ")), t.push(...n));
  }
  return t;
}
function pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function sM(e) {
  if (Array.isArray(e)) return e;
}
function oM(e, t) {
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
function aM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cM(e, t) {
  return sM(e) || oM(e, t) || lM(e, t) || aM();
}
function lM(e, t) {
  if (e) {
    if (typeof e == "string") return pf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pf(e, t) : void 0;
  }
}
const cm = Object.entries, hf = Object.setPrototypeOf, uM = Object.isFrozen, dM = Object.getPrototypeOf, fM = Object.getOwnPropertyDescriptor;
let rt = Object.freeze, ot = Object.seal, yi = Object.create, lm = typeof Reflect < "u" && Reflect, Kc = lm.apply, zc = lm.construct;
rt || (rt = function(t) {
  return t;
});
ot || (ot = function(t) {
  return t;
});
Kc || (Kc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
zc || (zc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const hi = Ge(Array.prototype.forEach), pM = Ge(Array.prototype.lastIndexOf), gf = Ge(Array.prototype.pop), gi = Ge(Array.prototype.push), hM = Ge(Array.prototype.splice), tn = Array.isArray, us = Ge(String.prototype.toLowerCase), sc = Ge(String.prototype.toString), mf = Ge(String.prototype.match), is = Ge(String.prototype.replace), yf = Ge(String.prototype.indexOf), gM = Ge(String.prototype.trim), mM = Ge(Number.prototype.toString), yM = Ge(Boolean.prototype.toString), bf = typeof BigInt > "u" ? null : Ge(BigInt.prototype.toString), kf = typeof Symbol > "u" ? null : Ge(Symbol.prototype.toString), Ze = Ge(Object.prototype.hasOwnProperty), ss = Ge(Object.prototype.toString), Qe = Ge(RegExp.prototype.test), Sn = bM(TypeError);
function Ge(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Kc(e, t, n);
  };
}
function bM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return zc(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : us;
  if (hf && hf(e, null), !tn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (uM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function kM(e) {
  for (let t = 0; t < e.length; t++)
    Ze(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = yi(null);
  for (const n of cm(e)) {
    var r = cM(n, 2);
    const i = r[0], s = r[1];
    Ze(e, i) && (tn(s) ? t[i] = kM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function TM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return mM(e);
    case "boolean":
      return yM(e);
    case "bigint":
      return bf ? bf(e) : "0";
    case "symbol":
      return kf ? kf(e) : "Symbol()";
    case "undefined":
      return ss(e);
    case "function":
    case "object": {
      if (e === null)
        return ss(e);
      const t = e, r = Yt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : ss(n);
      }
      return ss(e);
    }
    default:
      return ss(e);
  }
}
function Yt(e, t) {
  for (; e !== null; ) {
    const n = fM(e, t);
    if (n) {
      if (n.get)
        return Ge(n.get);
      if (typeof n.value == "function")
        return Ge(n.value);
    }
    e = dM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function xM(e) {
  try {
    return Qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const Tf = rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), oc = rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ac = rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), vM = rt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), cc = rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), _M = rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), xf = rt(["#text"]), vf = rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), lc = rt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), _f = rt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), co = rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), CM = ot(/{{[\w\W]*|^[\w\W]*}}/g), SM = ot(/<%[\w\W]*|^[\w\W]*%>/g), MM = ot(/\${[\w\W]*/g), EM = ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), AM = ot(/^aria-[\-\w]+$/), Cf = ot(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), PM = ot(/^(?:\w+script|data):/i), OM = ot(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), wM = ot(/^html$/i), NM = ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Sf = ot(/<[/\w!]/g), Mf = ot(/<[/\w]/g), RM = ot(/<\/no(script|embed|frames)/i), qM = ot(/\/>/i), St = {
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
}, $M = function() {
  return typeof window > "u" ? null : window;
}, IM = function(t, r) {
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
}, Ef = function() {
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
}, Qr = function(t, r, n, i) {
  return Ze(t, r) && tn(t[r]) ? ge(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function um() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $M();
  const t = (F) => um(F);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== St.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Yt(f, "cloneNode"), h = Yt(f, "remove"), g = Yt(f, "nextSibling"), m = Yt(f, "childNodes"), T = Yt(f, "parentNode"), v = Yt(f, "shadowRoot"), S = Yt(f, "attributes"), w = o && o.prototype ? Yt(o.prototype, "nodeType") : null, A = o && o.prototype ? Yt(o.prototype, "nodeName") : null, M = o && o.prototype ? Yt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let E, R = "", Y, H = !1, ne = 0;
  const ce = function() {
    if (ne > 0)
      throw Sn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, le = function(y) {
    ce(), ne++;
    try {
      return E.createHTML(y);
    } finally {
      ne--;
    }
  }, ye = function(y) {
    ce(), ne++;
    try {
      return E.createScriptURL(y);
    } finally {
      ne--;
    }
  }, qe = function() {
    return H || (Y = IM(d, i), H = !0), Y;
  }, Z = r, z = Z.implementation, ie = Z.createNodeIterator, $e = Z.createDocumentFragment, at = Z.getElementsByTagName, Wt = n.importNode;
  let pe = Ef();
  t.isSupported = typeof cm == "function" && typeof T == "function" && z && z.createHTMLDocument !== void 0;
  const Ht = CM, wt = SM, wa = MM, sr = EM, ti = AM, Hi = PM, se = OM, ft = NM;
  let eo = Cf, _e = null;
  const vr = ge({}, [...Tf, ...oc, ...ac, ...cc, ...xf]);
  let X = null;
  const Xe = ge({}, [...vf, ...lc, ..._f, ...co]);
  let be = Object.seal(yi(null, {
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
  })), Vr = null, Wr = null;
  const or = Object.seal(yi(null, {
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
  let ri = !0, ni = !0, Hr = !1, bn = !0, ar = !1, yt = !0, Gt = !1, Jt = !1, Gr = null, Jr = null, Gi = !1, _r = !1, ii = !1, kn = !1, O = !0, U = !1;
  const j = "user-content-";
  let W = !0, de = !1, We = {}, Je = null;
  const Cr = ge({}, [
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
  let Ji = null;
  const Yi = ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let Na = null;
  const Ku = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), to = "http://www.w3.org/1998/Math/MathML", ro = "http://www.w3.org/2000/svg", cr = "http://www.w3.org/1999/xhtml";
  let si = cr, Ra = !1, qa = null;
  const kb = ge({}, [to, ro, cr], sc), zu = rt(["mi", "mo", "mn", "ms", "mtext"]);
  let $a = ge({}, zu);
  const Bu = rt(["annotation-xml"]);
  let Ia = ge({}, Bu);
  const Tb = ge({}, ["title", "style", "font", "a", "script"]);
  let Xi = null;
  const xb = ["application/xhtml+xml", "text/html"], vb = "text/html";
  let Ie = null, oi = null;
  const _b = r.createElement("form"), ju = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, La = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (oi && oi === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = ct(y), Xi = // eslint-disable-next-line unicorn/prefer-includes
    xb.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? vb : y.PARSER_MEDIA_TYPE, Ie = Xi === "application/xhtml+xml" ? sc : us, _e = Qr(y, "ALLOWED_TAGS", vr, {
      transform: Ie
    }), X = Qr(y, "ALLOWED_ATTR", Xe, {
      transform: Ie
    }), qa = Qr(y, "ALLOWED_NAMESPACES", kb, {
      transform: sc
    }), Na = Qr(y, "ADD_URI_SAFE_ATTR", Ku, {
      transform: Ie,
      base: Ku
    }), Ji = Qr(y, "ADD_DATA_URI_TAGS", Yi, {
      transform: Ie,
      base: Yi
    }), Je = Qr(y, "FORBID_CONTENTS", Cr, {
      transform: Ie
    }), Vr = Qr(y, "FORBID_TAGS", ct({}), {
      transform: Ie
    }), Wr = Qr(y, "FORBID_ATTR", ct({}), {
      transform: Ie
    }), We = Ze(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? ct(y.USE_PROFILES) : y.USE_PROFILES : !1, ri = y.ALLOW_ARIA_ATTR !== !1, ni = y.ALLOW_DATA_ATTR !== !1, Hr = y.ALLOW_UNKNOWN_PROTOCOLS || !1, bn = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ar = y.SAFE_FOR_TEMPLATES || !1, yt = y.SAFE_FOR_XML !== !1, Gt = y.WHOLE_DOCUMENT || !1, _r = y.RETURN_DOM || !1, ii = y.RETURN_DOM_FRAGMENT || !1, kn = y.RETURN_TRUSTED_TYPE || !1, Gi = y.FORCE_BODY || !1, O = y.SANITIZE_DOM !== !1, U = y.SANITIZE_NAMED_PROPS || !1, W = y.KEEP_CONTENT !== !1, de = y.IN_PLACE || !1, eo = xM(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : Cf, si = typeof y.NAMESPACE == "string" ? y.NAMESPACE : cr, $a = Ze(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(y.MATHML_TEXT_INTEGRATION_POINTS) : ge({}, zu), Ia = Ze(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? ct(y.HTML_INTEGRATION_POINTS) : ge({}, Bu);
    const x = Ze(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? ct(y.CUSTOM_ELEMENT_HANDLING) : yi(null);
    if (be = yi(null), Ze(x, "tagNameCheck") && ju(x.tagNameCheck) && (be.tagNameCheck = x.tagNameCheck), Ze(x, "attributeNameCheck") && ju(x.attributeNameCheck) && (be.attributeNameCheck = x.attributeNameCheck), Ze(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (be.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), ot(be), ar && (ni = !1), ii && (_r = !0), We && (_e = ge({}, xf), X = yi(null), We.html === !0 && (ge(_e, Tf), ge(X, vf)), We.svg === !0 && (ge(_e, oc), ge(X, lc), ge(X, co)), We.svgFilters === !0 && (ge(_e, ac), ge(X, lc), ge(X, co)), We.mathMl === !0 && (ge(_e, cc), ge(X, _f), ge(X, co))), or.tagCheck = null, or.attributeCheck = null, Ze(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? or.tagCheck = y.ADD_TAGS : tn(y.ADD_TAGS) && (_e === vr && (_e = ct(_e)), ge(_e, y.ADD_TAGS, Ie))), Ze(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? or.attributeCheck = y.ADD_ATTR : tn(y.ADD_ATTR) && (X === Xe && (X = ct(X)), ge(X, y.ADD_ATTR, Ie))), Ze(y, "ADD_URI_SAFE_ATTR") && tn(y.ADD_URI_SAFE_ATTR) && ge(Na, y.ADD_URI_SAFE_ATTR, Ie), Ze(y, "FORBID_CONTENTS") && tn(y.FORBID_CONTENTS) && (Je === Cr && (Je = ct(Je)), ge(Je, y.FORBID_CONTENTS, Ie)), Ze(y, "ADD_FORBID_CONTENTS") && tn(y.ADD_FORBID_CONTENTS) && (Je === Cr && (Je = ct(Je)), ge(Je, y.ADD_FORBID_CONTENTS, Ie)), W && (_e["#text"] = !0), Gt && ge(_e, ["html", "head", "body"]), _e.table && (ge(_e, ["tbody"]), delete Vr.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Sn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Sn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const L = E;
      E = y.TRUSTED_TYPES_POLICY;
      try {
        R = le("");
      } catch (V) {
        throw E = L, V;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (E = void 0, R = "") : (E === void 0 && (E = qe()), E && typeof R == "string" && (R = le("")));
    rt && rt(y), oi = y;
  }, Vu = ge({}, [...oc, ...ac, ...vM]), Wu = ge({}, [...cc, ..._M]), Cb = function(y, x, L) {
    return x.namespaceURI === cr ? y === "svg" : x.namespaceURI === to ? y === "svg" && (L === "annotation-xml" || $a[L]) : !!Vu[y];
  }, Sb = function(y, x, L) {
    return x.namespaceURI === cr ? y === "math" : x.namespaceURI === ro ? y === "math" && Ia[L] : !!Wu[y];
  }, Mb = function(y, x, L) {
    return x.namespaceURI === ro && !Ia[L] || x.namespaceURI === to && !$a[L] ? !1 : !Wu[y] && (Tb[y] || !Vu[y]);
  }, Eb = function(y) {
    let x = T(y);
    (!x || !x.tagName) && (x = {
      namespaceURI: si,
      tagName: "template"
    });
    const L = us(y.tagName), V = us(x.tagName);
    return qa[y.namespaceURI] ? y.namespaceURI === ro ? Cb(L, x, V) : y.namespaceURI === to ? Sb(L, x, V) : y.namespaceURI === cr ? Mb(L, x, V) : !!(Xi === "application/xhtml+xml" && qa[y.namespaceURI]) : !1;
  }, Yr = function(y) {
    gi(t.removed, {
      element: y
    });
    try {
      T(y).removeChild(y);
    } catch {
      if (h(y), !T(y))
        throw Sn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, no = function(y) {
    Qi(y);
    const x = m(y);
    if (x) {
      const V = [];
      hi(x, (G) => {
        gi(V, G);
      }), hi(V, (G) => {
        try {
          h(G);
        } catch {
        }
      });
    }
    const L = S(y);
    if (L)
      for (let V = L.length - 1; V >= 0; --V) {
        const G = L[V], oe = G && G.name;
        if (typeof oe == "string")
          try {
            y.removeAttribute(oe);
          } catch {
          }
      }
  }, Tn = function(y, x) {
    try {
      gi(t.removed, {
        attribute: x.getAttributeNode(y),
        from: x
      });
    } catch {
      gi(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(y), y === "is")
      if (_r || ii)
        try {
          Yr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(y, "");
        } catch {
        }
  }, Ab = function(y) {
    const x = S(y);
    if (x)
      for (let L = x.length - 1; L >= 0; --L) {
        const V = x[L], G = V && V.name;
        if (!(typeof G != "string" || X[Ie(G)]))
          try {
            y.removeAttribute(G);
          } catch {
          }
      }
  }, Qi = function(y) {
    const x = [y];
    for (; x.length > 0; ) {
      const L = x.pop();
      (w ? w(L) : L.nodeType) === St.element && Ab(L);
      const G = m(L);
      if (G)
        for (let oe = G.length - 1; oe >= 0; --oe)
          x.push(G[oe]);
    }
  }, Pb = function(y) {
    if (!yt)
      return;
    const x = [y];
    for (; x.length > 0; ) {
      const L = x.pop(), V = w ? w(L) : L.nodeType;
      if (V === St.processingInstruction || V === St.comment && Qe(Mf, L.data)) {
        try {
          h(L);
        } catch {
        }
        continue;
      }
      if (V === St.element) {
        const oe = L, Se = Ie(A ? A(L) : L.nodeName);
        try {
          oe.hasAttribute && oe.hasAttribute("patchsrc") && oe.removeAttribute("patchsrc"), oe.hasAttribute && oe.hasAttribute("for") && Se !== "label" && Se !== "output" && oe.removeAttribute("for");
        } catch {
        }
      }
      const G = m(L);
      if (G)
        for (let oe = G.length - 1; oe >= 0; --oe)
          x.push(G[oe]);
    }
  }, Hu = function(y) {
    let x = null, L = null;
    if (Gi)
      y = "<remove></remove>" + y;
    else {
      const oe = mf(y, /^[\r\n\t ]+/);
      L = oe && oe[0];
    }
    Xi === "application/xhtml+xml" && si === cr && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const V = E ? le(y) : y;
    if (si === cr)
      try {
        x = new u().parseFromString(V, Xi);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = z.createDocument(si, "template", null);
      try {
        x.documentElement.innerHTML = Ra ? R : V;
      } catch {
      }
    }
    const G = x.body || x.documentElement;
    return y && L && G.insertBefore(r.createTextNode(L), G.childNodes[0] || null), si === cr ? at.call(x, Gt ? "html" : "body")[0] : Gt ? x.documentElement : G;
  }, Gu = function(y) {
    const x = M ? M(y) : y.ownerDocument;
    return ie.call(
      x || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, io = function(y) {
    return y = is(y, Ht, " "), y = is(y, wt, " "), y = is(y, wa, " "), y;
  }, Da = function(y) {
    var x;
    y.normalize();
    const L = M ? M(y) : y.ownerDocument, V = ie.call(
      L || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let G = V.nextNode();
    for (; G; )
      G.data = io(G.data), G = V.nextNode();
    const oe = (x = y.querySelectorAll) === null || x === void 0 ? void 0 : x.call(y, "template");
    oe && hi(oe, (Se) => {
      ai(Se.content) && Da(Se.content);
    });
  }, so = function(y) {
    const x = A ? A(y) : null;
    return typeof x != "string" || Ie(x) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== S(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== w(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    y.childNodes !== m(y);
  }, ai = function(y) {
    if (!w || typeof y != "object" || y === null)
      return !1;
    try {
      return w(y) === St.documentFragment;
    } catch {
      return !1;
    }
  }, Zi = function(y) {
    if (!w || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof w(y) == "number";
    } catch {
      return !1;
    }
  };
  function lr(F, y, x) {
    F.length !== 0 && hi(F, (L) => {
      L.call(t, y, x, oi);
    });
  }
  const Ob = function(y, x) {
    return !!(yt && y.hasChildNodes() && !Zi(y.firstElementChild) && Qe(Sf, y.textContent) && Qe(Sf, y.innerHTML) || yt && y.namespaceURI === cr && x === "style" && Zi(y.firstElementChild) || y.nodeType === St.processingInstruction || yt && y.nodeType === St.comment && Qe(Mf, y.data));
  }, wb = function(y, x, L) {
    if (!Vr[x] && Qu(x) && (be.tagNameCheck instanceof RegExp && Qe(be.tagNameCheck, x) || be.tagNameCheck instanceof Function && be.tagNameCheck(x)))
      return !1;
    if (W && !Je[x]) {
      const V = T(y), G = m(y);
      if (G && V) {
        const oe = G.length;
        for (let Se = oe - 1; Se >= 0; --Se) {
          const Le = y === L ? p(G[Se], !0) : G[Se];
          V.insertBefore(Le, g(y));
        }
      }
    }
    return Yr(y), !0;
  }, Ju = function(y, x, L, V) {
    return y.length === 0 ? x : x === L || x === V ? ct(x) : x;
  }, Yu = function(y, x) {
    if (lr(pe.beforeSanitizeElements, y, null), y !== x && T(y) === null)
      return de && Qi(y), !0;
    if (so(y))
      return Yr(y), !0;
    const L = Ie(A ? A(y) : y.nodeName);
    if (_e = Ju(pe.uponSanitizeElement, _e, vr, Gr), lr(pe.uponSanitizeElement, y, {
      tagName: L,
      allowedTags: _e
    }), y !== x && T(y) === null)
      return de && Qi(y), !0;
    if (Ob(y, L))
      return Yr(y), !0;
    if (Vr[L] || !(or.tagCheck instanceof Function && or.tagCheck(L)) && !_e[L]) {
      const G = wb(y, L, x);
      return G === !1 && lr(pe.afterSanitizeElements, y, null), G;
    }
    if ((w ? w(y) : y.nodeType) === St.element && !Eb(y) || (L === "noscript" || L === "noembed" || L === "noframes") && Qe(RM, y.innerHTML))
      return Yr(y), !0;
    if (ar && y.nodeType === St.text) {
      const G = io(y.textContent);
      y.textContent !== G && (gi(t.removed, {
        element: y.cloneNode()
      }), y.textContent = G);
    }
    return lr(pe.afterSanitizeElements, y, null), !1;
  }, Xu = function(y, x, L) {
    if (Wr[x] || yt && x === "patchsrc" || yt && x === "for" && y !== "label" && y !== "output" || O && (x === "id" || x === "name") && (L in r || L in _b))
      return !1;
    const V = X[x] || or.attributeCheck instanceof Function && or.attributeCheck(x, y);
    if (!(ni && Qe(sr, x))) {
      if (!(ri && Qe(ti, x))) {
        if (V) {
          if (!Na[x]) {
            if (!Qe(eo, is(L, se, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && y !== "script" && yf(L, "data:") === 0 && Ji[y])) {
                if (!(Hr && !Qe(Hi, is(L, se, "")))) {
                  if (L)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Qu(y) && (be.tagNameCheck instanceof RegExp && Qe(be.tagNameCheck, y) || be.tagNameCheck instanceof Function && be.tagNameCheck(y)) && (be.attributeNameCheck instanceof RegExp && Qe(be.attributeNameCheck, x) || be.attributeNameCheck instanceof Function && be.attributeNameCheck(x, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && be.allowCustomizedBuiltInElements && (be.tagNameCheck instanceof RegExp && Qe(be.tagNameCheck, L) || be.tagNameCheck instanceof Function && be.tagNameCheck(L)))
        ) return !1;
      }
    }
    return !0;
  }, Nb = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Qu = function(y) {
    return !Nb[us(y)] && Qe(ft, y);
  }, Rb = function(y, x, L, V) {
    if (E && typeof d == "object" && typeof d.getAttributeType == "function" && !L)
      switch (d.getAttributeType(y, x)) {
        case "TrustedHTML":
          return le(V);
        case "TrustedScriptURL":
          return ye(V);
      }
    return V;
  }, qb = function(y, x, L, V) {
    try {
      L ? y.setAttributeNS(L, x, V) : y.setAttribute(x, V), so(y) ? Yr(y) : gf(t.removed);
    } catch {
      Tn(x, y);
    }
  }, Zu = function(y) {
    lr(pe.beforeSanitizeAttributes, y, null);
    const x = y.attributes;
    if (!x || so(y))
      return;
    X = Ju(pe.uponSanitizeAttribute, X, Xe, Jr);
    const L = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: X,
      forceKeepAttr: void 0
    };
    let V = x.length;
    const G = Ie(y.nodeName);
    for (; V--; ) {
      const oe = x[V], Se = oe.name, Le = oe.namespaceURI, bt = oe.value, kt = Ie(Se), Fa = bt;
      let pt = Se === "value" ? Fa : gM(Fa);
      if (L.attrName = kt, L.attrValue = pt, L.keepAttr = !0, L.forceKeepAttr = void 0, lr(pe.uponSanitizeAttribute, y, L), pt = L.attrValue, U && (kt === "id" || kt === "name") && yf(pt, j) !== 0 && (Tn(Se, y), pt = j + pt), yt && Qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, pt)) {
        Tn(Se, y);
        continue;
      }
      if (kt === "attributename" && mf(pt, "href")) {
        Tn(Se, y);
        continue;
      }
      if (!L.forceKeepAttr) {
        if (!L.keepAttr) {
          Tn(Se, y);
          continue;
        }
        if (!bn && Qe(qM, pt)) {
          Tn(Se, y);
          continue;
        }
        if (ar && (pt = io(pt)), !Xu(G, kt, pt)) {
          Tn(Se, y);
          continue;
        }
        pt = Rb(G, kt, Le, pt), pt !== Fa && qb(y, Se, Le, pt);
      }
    }
    lr(pe.afterSanitizeAttributes, y, null);
  }, oo = function(y) {
    let x = null;
    const L = Gu(y);
    for (lr(pe.beforeSanitizeShadowDOM, y, null); x = L.nextNode(); )
      if (lr(pe.uponSanitizeShadowNode, x, null), Yu(x, y), Zu(x), ai(x.content) && oo(x.content), (w ? w(x) : x.nodeType) === St.element) {
        const G = v(x);
        ai(G) && (Ua(G), oo(G));
      }
    lr(pe.afterSanitizeShadowDOM, y, null);
  }, Ua = function(y) {
    const x = [{
      node: y,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const L = x.pop();
      if (L.shadow) {
        oo(L.shadow);
        continue;
      }
      const V = L.node, oe = (w ? w(V) : V.nodeType) === St.element, Se = m(V);
      if (Se)
        for (let Le = Se.length - 1; Le >= 0; --Le)
          x.push({
            node: Se[Le],
            shadow: null
          });
      if (oe) {
        const Le = A ? A(V) : null;
        if (typeof Le == "string" && Ie(Le) === "template") {
          const bt = V.content;
          ai(bt) && x.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (oe) {
        const Le = v(V);
        ai(Le) && x.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, L = null, V = null, G = null;
    if (Ra = !F, Ra && (F = "<!-->"), typeof F != "string" && !Zi(F) && (F = TM(F), typeof F != "string"))
      throw Sn("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    Jt ? (_e = Gr, X = Jr) : La(y), (pe.uponSanitizeElement.length > 0 || pe.uponSanitizeAttribute.length > 0) && (_e = ct(_e)), pe.uponSanitizeAttribute.length > 0 && (X = ct(X)), t.removed = [];
    const oe = de && typeof F != "string" && Zi(F);
    if (oe) {
      Pb(F);
      const bt = A ? A(F) : F.nodeName;
      if (typeof bt == "string") {
        const kt = Ie(bt);
        if (!_e[kt] || Vr[kt])
          throw no(F), Sn("root node is forbidden and cannot be sanitized in-place");
      }
      if (so(F))
        throw no(F), Sn("root node is clobbered and cannot be sanitized in-place");
      try {
        Ua(F);
      } catch (kt) {
        throw no(F), kt;
      }
    } else if (Zi(F))
      x = Hu("<!---->"), L = x.ownerDocument.importNode(F, !0), L.nodeType === St.element && L.nodeName === "BODY" || L.nodeName === "HTML" ? x = L : x.appendChild(L), Ua(L);
    else {
      if (!_r && !ar && !Gt && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return E && kn ? le(F) : F;
      if (x = Hu(F), !x)
        return _r ? null : kn ? R : "";
    }
    x && Gi && Yr(x.firstChild);
    const Se = oe ? F : x;
    try {
      const bt = Gu(Se);
      for (; V = bt.nextNode(); )
        Yu(V, Se), Zu(V), ai(V.content) && oo(V.content);
    } catch (bt) {
      throw oe && (no(F), hi(t.removed, (kt) => {
        kt.element && Qi(kt.element);
      })), bt;
    }
    if (oe)
      return hi(t.removed, (bt) => {
        bt.element && Qi(bt.element);
      }), ar && Da(F), F;
    if (_r) {
      if (ar && Da(x), ii)
        for (G = $e.call(x.ownerDocument); x.firstChild; )
          G.appendChild(x.firstChild);
      else
        G = x;
      return (X.shadowroot || X.shadowrootmode) && (G = Wt.call(n, G, !0)), G;
    }
    let Le = Gt ? x.outerHTML : x.innerHTML;
    return Gt && _e["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Qe(wM, x.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Le), ar && (Le = io(Le)), E && kn ? le(Le) : Le;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    La(F), Jt = !0, Gr = _e, Jr = X;
  }, t.clearConfig = function() {
    oi = null, Jt = !1, Gr = null, Jr = null, E = Y, R = "";
  }, t.isValidAttribute = function(F, y, x) {
    oi || La({});
    const L = Ie(F), V = Ie(y);
    return Xu(L, V, x);
  }, t.addHook = function(F, y) {
    typeof y == "function" && Ze(pe, F) && gi(pe[F], y);
  }, t.removeHook = function(F, y) {
    if (Ze(pe, F)) {
      if (y !== void 0) {
        const x = pM(pe[F], y);
        return x === -1 ? void 0 : hM(pe[F], x, 1)[0];
      }
      return gf(pe[F]);
    }
  }, t.removeHooks = function(F) {
    Ze(pe, F) && (pe[F] = []);
  }, t.removeAllHooks = function() {
    pe = Ef();
  }, t;
}
var LM = um();
function DM({ structureProtectionMode: e = "off" }) {
  const [t] = ue(), r = Q(void 0), [n, i] = he(void 0), s = fe((o) => {
    r.current = o, i(o);
  }, []);
  return B(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = eM(p);
      if (!h)
        return !1;
      const g = q();
      return e === "protected" ? g && tM(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = q(), m = r.current;
      if (m && g && ff(g, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const v = J(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (v) {
            const S = v.getParent(), w = v.getPreviousSibling(), A = v.getNextSibling();
            v.remove(), w ? om(w) : A && C(A) ? A.select(0, 0) : S?.selectStart();
          }
        } else m.kind === "selection" ? N(g) && g.removeText() : we(v) && nM(v);
        return !0;
      }
      if (!g)
        return !1;
      const T = rM(g, p);
      if (T) {
        if (T.kind === "verse") {
          const v = wp();
          v.add(T.node.getKey()), wn(v);
        } else {
          const v = ia();
          v.anchor.set(T.node.getKey(), 0, "element"), v.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), wn(v);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: p }), h.preventDefault(), !0;
      }
      if (N(g) && !g.isCollapsed() && hu(g)) {
        const v = g.getNodes().filter(me).map((A) => A.getKey()), { anchor: S, focus: w } = g;
        return s({
          kind: "selection",
          intent: p,
          key: v[0],
          anchor: { key: S.key, offset: S.offset, type: S.type },
          focus: { key: w.key, offset: w.offset, type: w.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = q();
      return !h || !ic(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = LM.sanitize(p), m = new DOMParser().parseFromString(g, "text/html"), T = iM(kk(t, m)), v = q();
      return N(v) && v.insertNodes(T), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = q();
      return h && ic(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = q();
      return h && ic(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        ff(q(), p) || s(void 0);
      });
    };
    return et(t.registerCommand(Ur, o, Ue), t.registerCommand(Rn, c, Ue), t.registerCommand(Er, u, Ue), t.registerCommand(Zb, c, Ue), t.registerCommand(gl, d, Ue), t.registerCommand(hl, c, Ue), t.registerUpdateListener(f));
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
const $O = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function UM({ textDirection: e }) {
  const [t] = ue();
  return FM(t, e), null;
}
function FM(e, t) {
  B(() => (Af(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Af(e, t);
  })), [e, t]);
}
function Af(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function KM() {
  const [e] = ue();
  return zM(e), null;
}
function zM(e) {
  B(() => {
    if (!e.hasNodes([ve, Ct, Ne, Be, ht]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return et(
      e.registerNodeTransform(Be, BM),
      e.registerNodeTransform(Be, (t) => jM(t, e)),
      e.registerNodeTransform(ht, Pf),
      e.registerNodeTransform(Ct, Pf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ht, (t) => {
        Es($r("va"), t), Es($r("vp"), t);
      })
    );
  }, [e]);
}
function BM(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || K(r) || D(n) || D(r) || ke(n) || ke(r) || Ae(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  C(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  Ae(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  te(e, ae) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  ze(n))
    return;
  if (me(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  me(r) && Vl(e);
}
function jM(e, t) {
  const r = e.getParent();
  !Ae(r) || !e.isAttached() || vg(t, e.getKey()) && r.insertAfter(e);
}
function Pf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ke(t); )
    t = t.getLastChild();
  (D(t) || C(t) && ke(t.getParent())) && e.insertBefore(xe(" "));
}
function gu(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Dl(n)) ? void 0 : e;
}
function VM(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if ($(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function WM() {
  const e = q();
  if (!(!N(e) || !e.isCollapsed()))
    return gu(VM(e.anchor));
}
function HM(e) {
  const t = q();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = dm(e.target)), r ? gu(it(r, K)) : void 0;
}
function dm(e) {
  const t = ek(e)?.anchorNode;
  if (Ap(t))
    return Us(t) ?? void 0;
}
function GM(e) {
  if (q())
    return;
  const t = dm(e);
  return t ? gu(it(t, K)) : void 0;
}
function JM() {
  const [e] = ue(), t = tm(WM);
  return B(() => {
    const r = (n) => {
      t(n) && qn(Ts);
    };
    return et(e.registerCommand(gr, () => {
      const n = GM(e.getRootElement());
      return n && r(n), !1;
    }, Nn), e.registerCommand(sa, (n) => {
      const i = HM(n);
      return i && r(i), !1;
    }, Nn));
  }, [e, t]), null;
}
function YM({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = vC({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(xC, { trigger: e, items: i });
}
function XM({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = De(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(eE, { trigger: e, harness: i }) : _(YM, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const QM = [" ", "*"];
function ZM(e, t) {
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
function eE({ trigger: e, harness: t }) {
  const [r] = ue(), [n, i] = he(void 0), s = Q({ query: "", options: [] }), o = Q(0), a = fe((f, p, h) => {
    const g = p.find((m) => m.kind === "note" && m.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const m = q();
      N(m) && m.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  B(() => et(r.registerCommand(Ur, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), tk(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const m = q();
          N(m) && m.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const h = s.current.query;
      if (n.hasTextSelection) {
        const g = n.items.find((m) => m.marker === h);
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
  }, Ue), r.registerCommand(Np, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, xi)), [r, e, t, n, a]);
  const c = fe(() => i(void 0), []), l = fe((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = fe((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), d = De(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    ZM(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(Dg, { isOpen: !0, children: ({ placement: f }) => _(
    Kg,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? QM : void 0 },
    n.session
  ) });
}
function fm(e) {
  return e.replaceAll(I, "~").replace(/ {2,}/g, (r) => I.repeat(r.length));
}
function tE(e) {
  return e.replaceAll(I, " ").replaceAll("~", I);
}
let Go;
function rE(e) {
  e && (Go = e);
}
function pm(e) {
  return Vt(e);
}
function nE(e, t) {
  return e.isEmpty() ? Sp : hm(e.toJSON(), t);
}
function hm(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && ua(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Sp;
  if (r.some(vv)) {
    Go?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = gm(r), i = Xt(n, t);
  return i ? { type: Or, version: Pr, content: i } : void 0;
}
function iE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Re({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function sE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Re({
    type: Ot.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function oE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = ng(r, a, c), Re({
    type: Ot.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function aE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = ng(t, o, a), Re({
    type: ht.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function cE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !pm(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(I) && (t[0] = a.slice(1));
  }
  return Re({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function lE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function uE(e, t) {
  const { unknownAttributes: r } = e;
  return Re({ type: zh, ...r, content: t });
}
function dE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Re({ type: Vh, marker: r, ...n, content: t });
}
function fE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Re({
    type: Gh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function pE(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Re({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function bi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Re({
    type: t,
    marker: r === "" ? void 0 : r,
    ...dh({ sid: n, eid: i, ...s }, o)
  });
}
function hE(e) {
  return e.text;
}
function gE(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function mE(e) {
  const { marker: t } = e;
  return {
    type: Lo,
    marker: t === "" ? void 0 : t
  };
}
function Of(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function yE(e, t, r, n, i) {
  const s = er.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = bi({
      type: s,
      marker: _i,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = bi({
      type: s,
      marker: $n,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = bi({
      type: s,
      marker: $n
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = bi({
      type: s,
      marker: _i
    });
    i.push(l);
  }
  (!n || !js(n)) && t.forEach((l) => {
    const u = bi({
      type: s,
      marker: _i,
      eid: l
    });
    i.push(u);
  });
}
function bE(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && js(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return Bs(i) && i.markerSyntax === "opening";
}
function kE(e) {
  let t = e;
  for (; js(t); ) t = t.children[0];
  return t;
}
function TE(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!Bs(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = kE(e[r]);
  if (Fn(n) && n.text === At(t))
    return n;
}
function Xt(e, t, r, n = !1, i) {
  const s = [];
  let o, a = [];
  return e.forEach((c, l) => {
    const u = c, d = c, f = c, p = c, h = c, g = c, m = c, T = c;
    switch (c.type) {
      case Ft.getType():
        s.push(
          iE(
            u,
            Xt(u.children, t)
          )
        );
        break;
      case kr.getType():
        s.push(sE(c));
        break;
      case Ot.getType():
        s.push(
          oE(
            d,
            Xt(d.children, t)
          )
        );
        break;
      case Ct.getType():
      case ht.getType():
        s.push(aE(c));
        break;
      case ve.getType():
        s.push(
          cE(
            f,
            Xt(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case tt.getType():
        s.push(
          lE(
            p,
            Xt(p.children, t)
          )
        );
        break;
      case Gn.getType():
        s.push(
          uE(
            c,
            Xt(c.children, t)
          )
        );
        break;
      case Jn.getType():
        s.push(
          dE(
            c,
            Xt(c.children, t)
          )
        );
        break;
      case Yn.getType():
        s.push(
          fE(
            c,
            Xt(c.children, t)
          )
        );
        break;
      case Ne.getType():
        s.push(
          pE(
            h,
            Xt(
              h.children,
              t,
              TE(h.children, h.caller)
            )
          )
        );
        break;
      case Kr.getType():
      case zr.getType():
      case Zt.getType():
      case Rp.getType():
      case yr.getType():
        break;
      case Ye.getType():
        if (o = Xt(
          m.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const v = m.typedIDs[rn];
          if (v) {
            const S = e[l + 1];
            yE(o, v, a, S, s), a = S && js(S) ? v : [];
          } else {
            const S = o.shift();
            S && (typeof S == "string" ? Of(s, S) : s.push(S)), o.length > 0 && s.push(...o);
          }
        }
        break;
      case er.getType():
        s.push(bi(c));
        break;
      case Be.getType():
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Gs(g.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        g.text !== I && !g.text.startsWith(kl) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[Ds]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let v = hE(g);
          pm(t) && (bE(e, l, i, n) && v.startsWith(I) && (v = v.slice(1)), v = tE(Dx(v))), Of(s, v);
        }
        break;
      case Hn.getType():
        s.push(
          gE(
            T,
            Xt(T.children, t)
          )
        );
        break;
      case jr.getType():
        s.push(mE(c));
        break;
      case Fi.getType():
        Go?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Go?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function gm(e) {
  const t = e.findIndex((r) => ua(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = gm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const lo = {
  initialize: rE,
  deserializeEditorState: nE
}, xE = /^sd\d*$/, vE = /* @__PURE__ */ new Set([
  ...Object.entries(Tc).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !xE.test(e)
  ).map(([e]) => e),
  "qa"
]);
function _E(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Dh(i) || Zh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Vx(i)) {
      t && Jo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if ($l(i) && vE.has(i.marker) && !Jo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    mm(i.children, t).forEach((s) => {
      const o = CE(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = SE(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function mm(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (ym(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (js(i)) {
      const s = mm(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(wf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [wf(i, c.nodes)] });
      });
      return;
    }
    t && Jo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function wf(e, t) {
  return { ...e, children: t };
}
function ym(e) {
  return kg(e) && e.number !== "";
}
function Jo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => ym(r) || Jo(r)) : !1;
}
function CE(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function SE(e) {
  return {
    type: Uo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: mg
  };
}
const Nf = km([]), ME = {
  type: Rp.getType(),
  version: 1
};
let mu = [], ee, Bn, bm, _t;
function EE(e, t) {
  mu = [], OE(e), wE(t);
}
function AE(e = 0) {
}
function PE(e, t) {
  ee = t ?? ka();
  let r;
  return e ? (e.type !== Or && _t?.warn(`This USJ type '${e.type}' didn't match the expected type '${Or}'.`), e.version !== Pr && _t?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${Pr}'.`
  ), e.content.length > 0 ? (r = Wc(Zr(e.content)), Os(ee) && (r = _E(r, _t))) : r = [Nf]) : r = [Nf], bm?.(mu), {
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
function OE(e) {
  e && (Bn = e), e?.addMissingComments && (bm = e.addMissingComments);
}
function wE(e) {
  e && (_t = e);
}
function yu() {
  return Vt(ee);
}
function NE(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function RE(e) {
  let { marker: t } = e;
  t !== _s && _t?.warn(`Unexpected book marker '${t}'!`), t = t ?? _s;
  const { code: r } = e;
  (!r || !Ft.isValidBookCode(r)) && _t?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ee?.markerMode === "editable" || ee?.markerMode === "visible" ? n.push(
    xt("marker", Ee(t) + " " + r + I)
  ) : ee?.hasGutterParaMarkers && n.push(xt("marker", Ee(t) + I, !0));
  const i = NE(e.content);
  i && n.push(dt(yu() ? fm(i) : i));
  const s = Ke(e, px);
  return Re({
    type: Ft.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Ih
  });
}
function qE(e) {
  let { marker: t } = e;
  t !== $o && _t?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? $o;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ke(e, MT);
  let a;
  ee?.markerMode === "visible" && (a = !0);
  const c = [
    dt(Lt(t, r) ?? "")
  ];
  return ee?.markerMode === "editable" && XE(i, s, c), ee?.markerMode === "editable" ? Re({
    type: Ot.getType(),
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
    version: kh
  }) : Re({
    type: kr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Uh
  });
}
function $E(e) {
  let { marker: t } = e;
  t !== qo && _t?.warn(`Unexpected verse marker '${t}'!`), t = t ?? qo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (N_(ee) ?? Ct).getType(), c = ee?.markerMode === "editable" ? ch : bg;
  let l, u;
  ee?.markerMode === "editable" ? l = Lt(t, r) : ee?.markerMode === "visible" && (u = !0);
  const d = Ke(e, xT);
  return Re({
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
function IE(e, t = [], r = !1) {
  let { marker: n } = e;
  ve.isValidMarker(n, Bn?.extraValidMarkers) || _t?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ee?.markerMode === "editable") {
    const [a] = t;
    Fn(a) ? a.text = I + a.text : a && t.unshift(dt(I));
  }
  t.length === 0 && t.push(dt(Ut)), Bc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ke(e, yT);
  return s || HE(n, o, i), s || jc(e.marker ?? "", i, !1, r), Re({
    type: ve.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: ah
  });
}
function km(e) {
  return {
    type: sn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: xh
  };
}
function LE(e, t = []) {
  let { marker: r } = e;
  tt.isValidMarker(r, Bn?.extraValidMarkers) || _t?.warn(`Unexpected para marker '${r}'!`), r = r ?? dr;
  const n = [];
  if (Ki(ee) && (ee?.markerMode === "editable" ? n.push(
    gt(r),
    dt(I, br, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && n.push(
    xt(
      "marker",
      Ee(r) + I,
      ee?.hasGutterParaMarkers
    )
  )), n.push(...t), yu()) {
    const s = n.find(
      (o) => !Bs(o) && !(Fn(o) && o.text === I)
    );
    Fn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => I.repeat(o.length)));
  }
  const i = Ke(e, Ex);
  return Re({
    type: tt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Yh
  });
}
function bu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function DE(e, t = []) {
  const r = Ke(e, yx);
  return Re({
    ...bu(),
    type: Gn.getType(),
    unknownAttributes: r,
    children: t,
    version: Bh
  });
}
function UE(e, t = []) {
  const r = Ke(e, Tx), n = e.marker ?? Ac, i = [];
  return ee?.markerMode === "editable" ? i.push(
    gt(n),
    dt(I, br, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && i.push(
    xt(
      "marker",
      Ee(n) + I,
      ee?.hasGutterParaMarkers
    )
  ), i.push(...t), Re({
    ...bu(),
    type: Jn.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Wh
  });
}
function FE(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Pc;
  ee?.markerMode === "editable" ? s.push(
    gt(o),
    dt(I, br, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && s.push(
    xt(
      "marker",
      Ee(o) + I,
      ee?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Ke(
    e,
    vx
  );
  return Re({
    ...bu(),
    type: Yn.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: Jh
  });
}
function KE(e, t) {
  const r = Xx(t);
  let n = () => {
  };
  return Bn?.noteCallerOnClick && (n = Bn.noteCallerOnClick), Re({
    type: Zt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Eg
  });
}
function zE(e, t) {
  let { marker: r } = e;
  Ne.isValidMarker(r, Bn?.extraValidMarkers) || _t?.warn(`Unexpected note marker '${r}'!`), r = r ?? _l;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : au(ee?.noteMode), a = Ke(e, Dk), c = ee?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ee?.markerMode === "editable" ? (l = gt(r, "opening", !1, c), s || (u = gt(r, "closing"))) : ee?.markerMode === "visible" && (l = xt("marker", Ee(r) + " "), s || (u = xt("marker", Ve(r))));
  const d = [];
  let f;
  if (l && d.push(l), ee?.markerMode === "editable" && !o)
    f = dt(At(i), void 0, c), d.push(f), YE(n, d), d.push(...t);
  else {
    const p = dt(I, br, "token");
    f = KE(i, t), d.push(f, p, ...t.flatMap(BE(p)));
  }
  return u && d.push(u), Re({
    type: Ne.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: Xp
  });
}
function BE(e) {
  return (t) => Eh(t) ? [t] : [t, e];
}
function jE(e) {
  let { marker: t } = e;
  (!t || !er.isValidMarker(t, Bn?.extraValidMarkers)) && _t?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ke(e, vl), s = fh(e);
  return Re({
    type: er.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Gp
  });
}
function Rf(e, t = []) {
  return {
    type: Ye.getType(),
    typedIDs: { [rn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function VE(e, t) {
  const { marker: r } = e, n = e.type, i = Ke(e, IT), s = [];
  if (ee?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = fa(
      n,
      r,
      i
    );
    o && s.push(xt("marker", o)), a && s.push(xt("attribute", a)), s.push(...t), c && s.push(xt("attribute", c)), l && s.push(xt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Fn(o) && (o.mode = "token");
  }), Re({
    type: Hn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Ah
  });
}
function WE(e) {
  return {
    type: jr.getType(),
    marker: e,
    text: hs(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ee?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: qh
  };
}
function gt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: yr.getType(),
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
function dt(e, t = void 0, r = "normal") {
  const n = {
    type: Be.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Ds] = { textType: t }), n;
}
function xt(e, t, r = !1) {
  const n = {
    type: zr.getType(),
    text: t,
    textType: e,
    version: Mh
  };
  return r && (n[Ds] = { [Ol.key]: !0 }), n;
}
function ws(e, t) {
  return {
    type: Kr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: nh
  };
}
function Bc(e, t, r = !1) {
  ee?.markerMode === "editable" ? t.push(gt(e, "opening", r)) : ee?.markerMode === "visible" && t.push(xt("marker", Ee(e, r)));
}
function jc(e, t, r = !1, n = !1) {
  ee?.markerMode === "editable" ? r ? t.push(gt("", "selfClosing")) : t.push(gt(e, "closing", n)) : ee?.markerMode === "visible" && t.push(
    xt(
      "marker",
      r ? Ve("") : Ve(e, n)
    )
  );
}
function HE(e, t, r) {
  if (ee?.markerMode !== "editable" || !t) return;
  const n = ur(t, Ks(e));
  n && r.push(dt(n, "attribute"));
}
function qf(e, t) {
  if (e.type !== "ms" || ee?.markerMode !== "editable" && ee?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ke(e, vl), o = ph(
    n,
    i,
    s,
    fh(e)
  ), a = ur(o, zs(r ?? ""));
  if (!a) return;
  const c = I + a;
  ee?.markerMode === "editable" ? t.push(dt(c, "attribute")) : t.push(xt("attribute", c));
}
function GE(e, t) {
  const r = e.marker ?? "";
  if (ee?.markerMode === "editable") {
    const n = [];
    Bc(r, n), qf(e, n), jc(r, n, !0), t.push(ws("milestone", n));
  } else
    Bc(r, t), qf(e, t), jc(r, t, !0);
}
function $f(e, t, r) {
  t !== void 0 && r.push(
    ws(e, [
      gt(e, "opening"),
      dt(I + t, "attribute"),
      gt(e, "closing")
    ])
  );
}
function JE(e, t) {
  ee?.markerMode === "editable" && ($f("va", e.altnumber, t), $f("vp", e.pubnumber, t));
}
function YE(e, t) {
  e !== void 0 && t.push(
    ws("cat", [
      gt("cat", "opening"),
      dt(I + e, "attribute"),
      gt("cat", "closing")
    ])
  );
}
function XE(e, t, r) {
  e !== void 0 && r.push(
    ws("ca", [
      gt("ca", "opening"),
      dt(I + e, "attribute"),
      gt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    ws("cp", [
      gt("cp", "opening"),
      dt(I + t, "attribute")
    ])
  );
}
function If(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function QE(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Lf(e, t) {
  t.marker === $n && t.sid !== void 0 && e.push(t.sid), t.marker === _i && t.eid !== void 0 && QE(e, t.eid);
}
function Vc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Rf(o, [...n])] : o, c = e[i];
  Lf(n, c);
  const l = Vc(
    e.slice(i + 1, s),
    If(t, i + 1),
    c.marker === $n,
    n
  ), u = Rf(l, [...n]), d = e[s];
  Lf(n, d);
  const f = Vc(
    e.slice(s + 1),
    If(t, s + 1),
    d.marker === $n,
    n
  );
  return [...a, u, ...f];
}
function Zr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(dt(yu() ? fm(i) : i));
    else if (!i.type)
      _t?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ft.getType():
          n.push(RE(i));
          break;
        case Ot.getType():
          n.push(qE(i));
          break;
        case ht.getType():
          ee?.hasSpacing || n.push(ME), n.push($E(i)), JE(i, n);
          break;
        case ve.getType():
          n.push(
            IE(i, Zr(i.content, !0), t)
          );
          break;
        case tt.getType():
          n.push(LE(i, Zr(i.content)));
          break;
        case Ne.getType():
          n.push(zE(i, Zr(i.content)));
          break;
        case er.getType():
          Jp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && mu?.push(i.sid)), n.push(jE(i)), GE(i, n);
          break;
        case jr.getType():
          n.push(WE(i.marker ?? ""));
          break;
        case zh:
          n.push(DE(i, Zr(i.content)));
          break;
        case Vh:
          n.push(UE(i, Zr(i.content)));
          break;
        case Gh:
          n.push(FE(i, Zr(i.content)));
          break;
        default:
          _t?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(VE(i, Zr(i.content)));
      }
  }), Vc(n, r);
}
function Wc(e) {
  const t = e.findIndex(
    (n) => Dh(n) || Zh(n) || $l(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    kx(n)
  );
  if (t >= 0) {
    const n = Wc(e.slice(0, t)), i = e[t], s = Wc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || kg(n)))
    return [km(e)];
  return e;
}
const ln = {
  initialize: EE,
  reset: AE,
  serializeEditorState: PE
};
function Tm(e) {
  if (e && !P(e)) {
    if (C(e)) return e;
    if ($(e))
      for (const t of e.getChildren()) {
        const r = Tm(t);
        if (r) return r;
      }
  }
}
function ZE() {
  const e = q();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((C(t) && !P(t) ? Dn(t) : void 0) && C(t)) {
      const i = xe(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Mi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Tm(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(I) ? I : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return C(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of xm(e)) {
    if (!Dn(t)) continue;
    Mi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(I) && r.setTextContent(n.slice(I.length));
  }
  return !0;
}
function xm(e) {
  const [t, r] = Mp(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!C(a) || P(a) || te(a, ae) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function eA() {
  const e = q();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return Dn(t) ? we(Il(t)) : !1;
}
function vm() {
  let e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !Bl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = q(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!C(t) || P(t) || !Dn(t)) return !1;
  const r = Il(t);
  if (!we(r)) return !1;
  const n = xe(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  Mi(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return D(a) ? Ll(a) : o.select(0, 0), !0;
}
const _m = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${eg(Te().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = q(), t = Fl(e), r = Hl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Zx(0, o);
        const a = $v(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || ag(c) && Kl(parseInt(n, 10), c);
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
function Hc(e, t) {
  return Ne.isValidMarker(e, t) || !!_m[e] || tt.isValidMarker(e, t) || ve.isValidMarker(e, t);
}
function tA(e, t) {
  return ve.isNoteContentMarker(e) ? !1 : ve.isValidMarker(e, t);
}
function Cm(e, t, r, n, i, s) {
  const o = Ig(
    e,
    void 0,
    void 0,
    t,
    n ?? ka(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function Gc(e, t, r, n, i, s, o) {
  if (Ne.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Cm(
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
  const a = aA(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = q();
      N(u) && (gg(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Nd(d, ln, r), h = za(p);
      if (N(u)) {
        const g = u.anchor.getNode(), m = g.getParent(), T = Dn(g), v = u.anchor.key === u.focus.key;
        if (D(h) && T && v && !uc(h, o))
          iA(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (D(h) && !v && !uc(h, o) && sA(u))
          oA(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          cA(
            u,
            () => za(p)
          );
        else if ($(h) && !h.isInline()) {
          const S = u.insertParagraph();
          if (S) {
            const w = S.getChildren();
            h.append(...w), S.replace(h), we(h) && Bi(h) || h.selectStart();
          }
        } else if (D(h) && C(g) && !P(g) && D(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        uc(h, o)) {
          const S = g.getParent();
          if (D(S)) {
            const w = u.anchor.offset;
            if (w === 0) g.insertBefore(h);
            else if (w >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [M] = g.splitText(w);
              M.insertAfter(h);
            }
            h.getChildren().forEach((M) => {
              P(M) && M.setNested(!0);
            });
            const A = h.getChildren().find((M) => C(M) && !P(M));
            A && C(A) ? A.select(
              A.getTextContentSize(),
              A.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (C(g) && !P(g) && u.isCollapsed() && (K(m) || D(m) && K(m.getParent()))) {
          const S = D(m) ? m : void 0, w = S ? rA(g, u.anchor.offset) : [];
          let M = (S ?? g).insertAfter(h);
          if (Tr(h)) {
            const E = {
              ...r || ka(),
              markerMode: "hidden"
            }, R = Nd(
              d,
              ln,
              E
            ), Y = za(R);
            M = M.insertAfter(Y);
          }
          if (w.length > 0 && S) {
            const E = Yo(S).append(...w);
            M.insertAfter(E), S.isEmpty() && S.remove();
          } else C(M.getNextSibling()) || M.insertAfter(xe(I));
          $(M) && M.selectEnd();
        } else if (u.insertNodes([h]), bA(h), f) {
          const S = wp();
          S.add(h.getKey()), wn(S);
        } else if (D(h)) {
          const S = h.getChildren().find((w) => C(w) && !P(w));
          S && C(S) ? S.select(
            S.getTextContentSize(),
            S.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const S = h.getNextSibling();
          S ? S.selectStart() : h.selectStart();
        }
      } else
        u?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function rA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function uc(e, t) {
  return ((t ?? Fo).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function nA(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function iA(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && D(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !C(r)) {
    const o = e.anchor.offset;
    if (C(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else C(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = Ri(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Mi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), C(i) && !i.getTextContent().startsWith(I) && i.setTextContent(I + i.getTextContent());
    const o = t.getChildren().find((a) => C(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => C(o) && !P(o));
  C(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function sA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || D(n)) continue;
    if (!C(n) || n.getType() !== Be.getType() || te(n, ae) === "attribute") return !1;
    const i = Il(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Dn(n) && (r = !0);
  }
  return r;
}
function oA(e, t, r) {
  const n = xm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Dn(a)) return;
    Mi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(I) && c.setTextContent(l.slice(I.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(I) || i.setTextContent(I + i.getTextContent());
  const s = t.getChildren().find((a) => C(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function aA(e, t) {
  let r = _m[e];
  return r || (tt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: tt.getType(), marker: e, content: [] }] })
  } : ve.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ve.getType(), marker: e };
      return (ve.isValidFootnoteMarker(e) || ve.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function cA(e, t) {
  const r = e.getNodes(), [n, i] = Ri(e);
  let s;
  r.forEach((o, a) => {
    if ($(s) && s.isParentOf(o))
      return;
    const c = Sm(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((d) => P(d) && d.getMarkerSyntax() === "opening") && nA(s, D(s.getParent()))), uA(c, s, l);
  }), (C(s) || $(s)) && s.selectEnd();
}
function Ri(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function ku(e) {
  return ke(e) || K(e) || K(e.getParent());
}
function Sm(e, t, r, n, i) {
  if (!ku(e)) {
    if (C(e))
      return lA(e, t, r, n, i);
    if ($(e) && e.isInline())
      return e;
  }
}
function lA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function uA(e, t, r) {
  if (C(t)) {
    const n = Jc(e, t);
    t.setTextContent(n), e.remove();
  } else if ($(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => P(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !P(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    Jc(e, t), r && D(t) && t.getChildren().some((s) => P(s)) && C(e) && !P(e) && !e.getTextContent().startsWith(I) && e.setTextContent(I + e.getTextContent());
  }
}
function Jc(e, t) {
  let r = e.getTextContent();
  if (C(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Vl(n), C(n) || t.insertBefore(xe(" "));
  }
  return r;
}
function Mm(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = jn(u, t);
    if (!f) return !1;
    const p = C(u) ? u.getTextContentSize() : 0;
    if (Df(f, r), C(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), m = Math.max(0, Math.min(d - g, h)), T = q();
      N(T) && T.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Ri(e);
  if (!xu(n, t, s, o)) return !1;
  const a = Tu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = jn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Om(d, a);
    f && (Df(f, r), l = !0);
  }), wm(a, i), l;
}
function Df(e, t) {
  e.getChildren().forEach((n) => {
    zt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Ut) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    C(n) && i.startsWith(I) && n.setTextContent(i.slice(I.length));
  }), yc(e);
}
function Tu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Sm(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    C(o) && n.push(o);
  }), n;
}
function jn(e, t) {
  let r = e, n;
  for (; r && !we(r); ) {
    if (K(r)) return;
    !n && D(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Em(e) {
  const t = it(
    e,
    (r) => K(r) || we(r)
  );
  return K(t);
}
function Am(e) {
  return e.filter(
    (t) => !ku(t) && (C(t) || $(t) && t.isInline())
  );
}
function dA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!C(i) || ku(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function fA(e, t, r) {
  return e.getChildren().some(
    (n) => $(n) && t.some((i) => n.isParentOf(i)) && !Pm(n, r)
  );
}
function xu(e, t, r, n, i) {
  const s = Am(e), o = dA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = jn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !fA(l, s, o);
  });
}
function Pm(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || zt(r));
}
function Om(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if ($(u) && t.some((d) => u.isParentOf(d))) {
      if (!Pm(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && zt(n[s - 1]) && (s -= 1), o < n.length - 1 && zt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Yo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Yo(e).append(...c)), e;
}
function Yo(e) {
  return rk(e);
}
function wm(e, t) {
  const r = q(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function pA(e, t, r) {
  if (e.isCollapsed()) {
    const l = jn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (xd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Ri(e);
  if (!xu(n, r, i, s, t)) return !1;
  const o = Tu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = jn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Om(u, o);
    d && (xd(d, t), c = !0);
  }), c;
}
function hA(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = Ri(e);
  if (!!!i?.some(
    (m) => xu(s, m, o, a)
  ) && !gA(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const T = q();
    N(T) && Mm(T, m, n) && (l = !0);
  });
  const u = q();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = Ri(u), h = Tu(
    u.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (m) => !Em(m) && !jn(m, t)
  );
  return g.length > 0 && (mA(g).forEach((m) => yA(m, t)), l = !0), wm(h, d), l;
}
function gA(e, t) {
  return Am(e).some(
    (r) => !Em(r) && !jn(r, t)
  );
}
function mA(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function yA(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? Yo(i) : Nr(t);
  e[0].insertBefore(s), s.append(...e), i === r || Jc(e[0], s);
}
function bA(e) {
  me(e) && (Vl(e.getPreviousSibling()), xg(e.getNextSibling()));
}
const Nm = {
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
}, Uf = "psc-active-text", uo = "psc-empty-text";
function kA({ viewOptions: e }) {
  const [t] = ue(), r = Q(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return B(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Uf), r.current = o, o && t.getElementByKey(o)?.classList.add(Uf);
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
          const c = a.closest(`.${uo}`);
          if (!c) return !1;
          const l = Us(c);
          if (!me(l)) return !1;
          const u = l.getParent();
          if (!$(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Mt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = dc(), f = TA(), p = [], h = [];
          return Te().getChildren().forEach((g) => {
            if (!$(g)) return;
            const { emptyKeys: m, nonEmptyKeys: T } = vA(g);
            p.push(...m), h.push(...T);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(uo) : t.getElementByKey(d)?.classList.add(uo);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(uo));
      }),
      t.registerCommand(
        ml,
        () => (i(void 0), !1),
        Mt
      ),
      t.registerCommand(
        nk,
        () => {
          const o = t.getEditorState().read(dc);
          return o !== r.current && i(o), !1;
        },
        Mt
      )
    ];
    return i(t.getEditorState().read(dc)), et(...s);
  }, [t, n]), null;
}
function dc() {
  return xA(q() ?? void 0)?.getKey();
}
function TA() {
  const e = q();
  if (!N(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!$(n)) return;
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
function xA(e) {
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function vA(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (me(c)) break;
      if (!(mt(c) || P(c)) && c.getTextContent().replaceAll(Po, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const _A = /^\+/;
function vu(e, t) {
  const r = t.replace(_A, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Rm(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function qm(e, t) {
  return Rm(e, t) !== void 0;
}
function Yc(e, t) {
  const r = Rm(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Xo(e, t, r) {
  const n = $(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function CA(e, t, r, n, i) {
  const s = vu(n, t);
  if (!s) {
    Xo(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Xo(e, "invalid", i);
}
function ys(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || CA(s, o, t, r, n), ys(s, t, r, n, i || o === "xq");
    } else if (me(s)) {
      if (i) continue;
      const o = vu(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? ys(s, s.getMarker(), r, n, i) : Ae(s) || $(s) && ys(s, t, r, n, i);
}
function SA(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = vu(e, a);
    if (!c) {
      Xo(o, "unknown", r), Yc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Yc(n, l) || Xo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Te().getChildren())
    Ae(o) || (st(o) || Fe(o) ? i(o, o.getMarker()) : re(o) ? (i(o, o.getMarker()), s(o) && ys(o, o.getMarker(), e, r, !1)) : $(o) && s(o) && ys(o, "p", e, r, !1));
  return r;
}
function MA(e) {
  return !!e?.includes("(basic)");
}
function EA(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function $m(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Hc(e, t);
}
function _u(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Im(e, t) {
  const r = [];
  for (const n of t) {
    const i = _u(e, n);
    i && Yc(r, i);
  }
  return r;
}
function bo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: EA(e.description),
    isBasic: MA(e.description)
  };
}
function AA(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Xc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : AA(e.marker, t.marker);
}
function Qc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Im(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && $m(i.marker, r)
  ).filter((i) => {
    const s = _u(e, i.marker);
    return s !== void 0 && qm(n, s);
  }).map((i) => bo(i, "paragraph")).sort(Xc);
}
function PA(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => $m(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => bo(c, "character")).sort(Xc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => bo(c, "character")),
    ...a.map((c) => bo(c, "note"))
  ].sort(Xc);
}
function OA(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function wA(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function NA(e, t, r) {
  return [
    ...OA(e, t.openCharMarkers),
    ...PA(e, t, r)
  ].sort(wA);
}
function RA(e, t, r) {
  if (t.source === "paragraph") return Qc(e, t, r);
  const n = NA(e, t, r);
  return n.length > 0 ? n : Qc(e, t, r);
}
function qA(e, t, r) {
  const n = Qc(e, t, r), i = Im(e, t.previousParaMarkers), s = _u(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && qm(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const Zn = String.raw`\w-`, Lm = "a-z0-9", $A = `[a-z][${Lm}]*`, IA = new RegExp(
  String.raw`^\\(\+?[${Zn}]+)[ \u00A0]$`
), Dm = new RegExp(String.raw`^\\(\+?[${Zn}]+)$`), LA = new RegExp(String.raw`^\\\+?[${Zn}]*\*$`), DA = new RegExp(
  String.raw`^\\(\+?[${Zn}]+)(?:[ \u00A0]|$)`
), UA = new RegExp(
  String.raw`^\\(\+?)([${Zn}]+)`
), FA = new RegExp(
  String.raw`\\\+?[${Zn}]+(?:\\?\*|[ \u00A0])`
), KA = new RegExp(
  String.raw`\\\+?[${Zn}]*$`
), zA = new RegExp(
  String.raw`^\\(${$A})( |$)`
), BA = new RegExp(
  String.raw`\\[${Lm}+*]*$`,
  "i"
), Lr = /\s/;
function Ys(e) {
  if (e.isSentinel) return !1;
  const t = J(e.key);
  return C(t) && !P(t) && te(t, ae) === "attribute";
}
function jA(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function Zc(e) {
  const t = [];
  for (const n of e.spans) {
    const i = Ys(n);
    for (let s = n.start; s < n.end; s += 1) {
      const o = e.text[s];
      t.push({ byte: o, position: s, isWs: Lr.test(o), isAttributeRun: i });
    }
  }
  const r = e.spans.filter((n) => n.isSentinel).map((n) => n.start);
  return { bytes: t, placeholders: r };
}
function ds({ bytes: e }, t) {
  let r = 0, n = 0;
  for (const i of e)
    i.position >= t || i.isWs || (r += 1, i.isAttributeRun || (n += 1));
  return { full: r, document: n };
}
function VA({ bytes: e }, t) {
  let r = 0;
  for (const n of e) n.position < t && (r = n.isWs ? r + 1 : 0);
  return r;
}
function el({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
function WA(e, t) {
  if (e === t) return { prefix: e.length, suffix: 0 };
  const r = Math.min(e.length, t.length);
  let n = 0;
  for (; n < r && e[n] === t[n]; ) n += 1;
  let i = 0;
  for (; i < r && e[e.length - 1 - i] === t[t.length - 1 - i]; )
    i += 1;
  return n + i > r ? { prefix: r - i, suffix: r - n } : { prefix: n, suffix: i };
}
const Ff = "cat", HA = "category";
function GA(e) {
  return C(e) && e.getTextContent().trim() === "";
}
function JA(e) {
  const t = { text: "", spans: [], sentinels: [] }, r = [], n = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    n(a, jA(Ff, c)), r.push({
      ownerKey: a.getKey(),
      markerName: Ff,
      keyName: HA,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = El(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const d = Rr(a);
    let f = !1;
    for (const p of a.getChildren())
      u !== void 0 && f && !GA(p) && (i(a, u), u = void 0), o(p), (Bt(p) || d && (d.is(p) || p.isParentOf(d))) && (f = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (Bt(a)) {
      const c = a.getParent();
      n(a, K(c) ? c.getCaller() : "");
    } else C(a) || mt(a) ? n(a, a.getTextContent()) : K(a) ? s(a) : $(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: r };
}
function Um(e) {
  const t = Zc(e);
  return {
    runs: e.sentinels.map((r, n) => {
      const { spelling: i, foldedAttributes: s } = JA(r);
      return {
        memberCount: r.length,
        before: ds(t, t.placeholders[n] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: el(Zc(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: el(t).map(({ byte: r }) => r).join("")
  };
}
function Fm(e, t) {
  return {
    facts: Zc(e),
    carried: e.sentinels.map((r, n) => {
      const i = new Set(t[n]?.map((s) => s.getKey()));
      return r.map((s) => i.has(s.getKey()));
    })
  };
}
function Km(e, t, { partial: r = !1 } = {}) {
  const n = e.carried.map(
    (g) => g.map(() => {
    })
  ), i = [], s = (g) => {
    if (!r) return;
    const m = i.filter(
      (v) => v.liveBefore.full + v.liveLength.full <= g
    ), T = Math.min(
      g,
      ...i.filter((v) => !m.includes(v)).map((v) => v.liveBefore.full)
    );
    return e.carried.forEach((v, S) => {
      const w = e.facts.placeholders[S];
      (w === void 0 || ds(e.facts, w).full >= T) && (n[S] = v.map(() => {
      }));
    }), { sentinelMap: n, settledOnlyRuns: m, pairedBefore: T };
  }, o = (g, m) => {
    let T = 0;
    e.carried[g].forEach((v, S) => {
      v && (n[g][S] = { sentinelIndex: m, memberIndex: T }, T += 1);
    });
  }, a = (g) => g.filter(Boolean).length, c = e.carried.reduce((g, m) => g + a(m), 0), l = t.runs.reduce((g, m) => g + m.memberCount, 0);
  if (c > l) return s(0);
  if (c === l) {
    const g = t.runs.flatMap(
      (T, v) => Array.from({ length: T.memberCount }, (S, w) => ({ sentinelIndex: v, memberIndex: w }))
    );
    let m = 0;
    return e.carried.forEach(
      (T, v) => T.forEach((S, w) => {
        S && (n[v][w] = g[m++]);
      })
    ), { sentinelMap: n, settledOnlyRuns: [] };
  }
  const u = e.carried.map((g, m) => ({
    index: m,
    before: ds(e.facts, e.facts.placeholders[m] ?? 0)
  })).filter(({ index: g }) => a(e.carried[g]) > 0), d = el(e.facts), f = d.map(({ byte: g }) => g).join("");
  let p = 0, h = 0;
  for (let g = 0; g < t.runs.length; g += 1) {
    const m = t.runs[g], T = u[h];
    if (T?.before.full === m.before.full + p) {
      if (a(e.carried[T.index]) !== m.memberCount)
        return s(T.before.full);
      o(T.index, g), h += 1;
      continue;
    }
    const v = m.before.full + p;
    let S = v + m.spelled.length;
    if (f.slice(v, S) !== m.spelled) {
      const R = t.bytes.slice(m.before.full + 1);
      if (S = f.length - R.length, S <= v || f.slice(S) !== R) return s(v);
    }
    const w = { start: d[v].position, end: d[S - 1].position + 1 }, A = ds(e.facts, w.start), M = ds(e.facts, w.end), E = WA(f.slice(v, S), m.spelled);
    i.push({
      sentinelIndex: g,
      liveBefore: A,
      liveLength: {
        full: M.full - A.full,
        document: M.document - A.document
      },
      liveWsBefore: VA(e.facts, w.start),
      settledBefore: m.before,
      spelling: m.spelling,
      spelledLength: m.spelled.length,
      sharedPrefix: E.prefix,
      sharedSuffix: E.suffix,
      foldedAttributes: m.foldedAttributes
    }), p += S - v - 1;
  }
  return h < u.length ? s(u[h].before.full) : { sentinelMap: n, settledOnlyRuns: i };
}
function va(e, t, r) {
  if (e.length === 0) return t;
  const n = (i, s) => {
    let o = 0;
    for (const a of e) {
      const c = a.liveLength[s] - 1;
      (r === "toSettled" ? i >= a.liveBefore[s] + a.liveLength[s] : i >= a.settledBefore[s] + 1) && (o += c);
    }
    return r === "toSettled" ? i - o : i + o;
  };
  return {
    ...t,
    nonWsBefore: n(t.nonWsBefore, "full"),
    documentCoords: t.documentCoords && {
      ...t.documentCoords,
      nonWsBefore: n(t.documentCoords.nonWsBefore, "document")
    }
  };
}
function zm(e, t, r) {
  const [n, i] = r === "toSpelling" ? [e.liveLength.full, e.spelledLength] : [e.spelledLength, e.liveLength.full];
  if (t <= e.sharedPrefix) return t;
  if (t >= n - e.sharedSuffix) return i - (n - t);
}
function Bm(e, t) {
  for (const r of e) {
    const n = t.nonWsBefore - r.liveBefore.full;
    if (n <= 0 || n >= r.liveLength.full) continue;
    const i = zm(r, n, "toSpelling");
    return {
      run: r,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun, attributeRunSpans: 0 }
    };
  }
}
const nt = "￼";
function jm(e) {
  return e.length > 1 && e.startsWith(I) && e.charAt(1) !== nt ? e.slice(1) : e;
}
function Kf(e) {
  return Bs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Vm(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = ln.serializeEditorState(
    {
      type: Or,
      version: Pr,
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
  for (; Kf(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== At(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Kf(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function fo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function os(e, t) {
  KA.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += nt;
}
function It(e) {
  return e.replaceAll(I, " ");
}
function YA(e, t, r = !1) {
  if (Vt(t)) return It(e);
  if (e === I) return " ";
  const n = r && e.startsWith(I), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(I, "~");
}
function bs(e) {
  const t = e.getTextContent();
  return Xn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function _a(e, t) {
  const r = e[t];
  if (!Pe(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = la(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Wm(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Ca(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = xs(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Cu(e) {
  return !!e.getUnknownAttributes();
}
function Sa(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && aa(e);
}
function Hm(e, t) {
  return Pe(e) ? !Sa(e.getMarker(), t) : K(e) || Ae(e) ? !0 : Oe(e) ? Cu(e) : D(e) ? Gm(e, t) : !1;
}
function Gm(e, t) {
  if (_T(e)) return !0;
  const r = e.getMarker();
  return !Yk(r) && t(r) === void 0;
}
const qt = "", $t = "";
function zf(e) {
  return e.flatMap((t) => ze(t) ? t.getChildren() : [t]);
}
function ki(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Pe(s)) {
      const o = _a(e, i);
      Sa(s.getMarker(), r) && Wm(o) ? (t.push(
        qt,
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
      ), ki(zf(o), t, r), t.push($t)) : t.push(nt), i += o.length;
    } else if (Oe(s)) {
      const o = Ca(e, i);
      Cu(s) ? t.push(nt) : (t.push(
        qt,
        "verse",
        It(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ki(zf(o), t, r), t.push($t)), i += o.length;
    } else P(s) ? t.push(qt, "marker", It(s.getTextContent()), $t) : mn(s) ? t.push(qt, "unmatched", It(s.getTextContent()), $t) : Hm(s, r) ? t.push(nt) : na(s) ? t.push(" ") : C(s) ? t.push(
      It(
        n ? jm(bs(s)) : bs(s)
      )
    ) : D(s) ? (t.push(qt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ki(s.getChildren(), t, r, !0), t.push($t)) : ke(s) ? ki(s.getChildren(), t, r, n) : $(s) ? (t.push(qt, s.getType()), ki(s.getChildren(), t, r), t.push($t)) : t.push(nt);
  }
}
function ji(e, t) {
  const r = [];
  return ki(e, r, t), r.join("");
}
function Dr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function qi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Su(e) {
  return e.type ?? "";
}
function Jm(e, t, r) {
  return t === "closing" ? Ve(e, r) : t === "selfClosing" ? Ve("") : Ee(e, r);
}
function fc(e, t) {
  const r = e[t];
  if (!(!r || Su(r) !== "attribute-run"))
    return Dr(r) ?? [];
}
function Vi(e, t) {
  const r = [];
  return fs(e, r, t), r.join("");
}
function fs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Su(s);
    if (o === "ms") {
      const l = s, u = fc(e, i + 1);
      u && Sa(l.marker ?? "", r) ? (t.push(
        qt,
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
      ), fs(u, t, r), t.push($t), i += 1) : t.push(nt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(nt);
        continue;
      }
      t.push(
        qt,
        "verse",
        It(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = fc(e, i + 1 + u);
      for (; d; )
        fs(d, t, r), u++, d = fc(e, i + 1 + u);
      t.push($t), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        qt,
        "marker",
        It(
          Jm(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        $t
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(qt, "char", JSON.stringify(l.unknownAttributes ?? null)), fs(Dr(s) ?? [], t, r, !0), t.push($t);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(nt);
      continue;
    }
    if (o === "unmatched") {
      t.push(qt, "unmatched", It(qi(s) ?? "")), t.push($t);
      continue;
    }
    const a = qi(s);
    if (a !== void 0) {
      t.push(It(n ? jm(a) : a));
      continue;
    }
    const c = Dr(s);
    c ? (t.push(qt, o), fs(c, t, r), t.push($t)) : t.push(nt);
  }
}
function Ma(e) {
  let t = 0;
  for (const r of e) {
    const n = Dr(r);
    if (n) {
      t += Ma(n);
      continue;
    }
    const i = qi(r);
    if (i !== void 0)
      for (const s of i) s === nt && t++;
  }
  return t;
}
function $i(e, t, r, n, i) {
  un(e.getChildren(), t, r, n, i);
}
function un(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      fo(t, a, It(a.getTextContent()));
    else if (Pe(a)) {
      s();
      const c = _a(e, o);
      Sa(a.getMarker(), r) && Wm(c) ? un(c, t, r, n) : os(t, [a, ...c]), o += c.length;
    } else if (K(a) || Ae(a))
      s(), os(t, [a]);
    else if (Oe(a)) {
      s();
      const c = Ca(e, o);
      Cu(a) ? os(t, [a, ...c]) : (fo(t, a, It(bs(a))), un(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), Gm(a, r) ? os(t, [a]) : $i(a, t, r, n, { pending: !0 });
    else if (na(a))
      s(), fo(t, a, " ");
    else if (C(a)) {
      const c = Xn(a) || te(a, ae) === "attribute", l = s() && !c;
      fo(
        t,
        a,
        c ? It(bs(a)) : YA(bs(a), n, l)
      );
    } else $(a) ? $i(a, t, r, n, i) : (s(), os(t, [a]));
  }
}
function Ym(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ae(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return $i(e, i, t, r), i;
}
function XA(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  return $i(e, n, t, r), n;
}
function Mu(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!re(i)) return;
    const s = Ym(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function Xm(e, t) {
  let r = 0;
  const n = (i) => {
    if (C(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(nt);
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
    } else $(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function tl(e, t = []) {
  for (const r of e)
    Oe(r) ? t.push(r) : $(r) && tl(r.getChildren(), t);
  return t;
}
function Qm(e) {
  let t = 0;
  const r = (n) => {
    if (C(n))
      for (const i of n.getTextContent()) i === nt && t++;
    else $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function ei(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === nt && t++;
    else r.content && (t += ei(r.content));
  return t;
}
function Eu(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), $(i) && $i(i, n, t, r);
  return n;
}
function Zm(e) {
  return e.filter(Ys).length;
}
function QA(e) {
  if (e.isSentinel) return !1;
  const t = J(e.key);
  return P(t) || Ys(e);
}
function Bf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Ys(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      Lr.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function dn(e, t, r) {
  const n = Bf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !QA(i) ? Bf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Zm(e.spans) };
}
function pc(e) {
  if (e.isSentinel) return !1;
  const t = J(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function ZA(e) {
  const t = J(e.key);
  if (!P(t)) return;
  const r = t.getParent();
  if (!D(r)) return;
  const n = r.getParent();
  if (n)
    return {
      key: n.getKey(),
      offset: r.getIndexWithinParent() + 1,
      type: "element"
    };
}
function e1(e) {
  const t = J(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Oe(t) ? Ca(n, i) : Pe(t) ? _a(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function hr(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e, s = Zm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const p of i) {
    const h = p.end - p.start, g = !p.isSentinel && (r || !pc(p));
    if (!(o && Ys(p))) {
      if (u) {
        if (!g) continue;
        a = { key: p.key, offset: 0 };
        break;
      }
      for (let m = 0; m < h; m++) {
        const T = n[p.start + m];
        if (c === 0 && (l === 0 || !Lr.test(T))) {
          if (g) {
            a = { key: p.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? Lr.test(T) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (g && !r) {
          a = { key: p.key, offset: h };
          break;
        }
        u = !0;
      }
    }
  }
  if (a) return { ...a, type: "text" };
  const d = i[i.length - 1];
  if (d && pc(d)) {
    const p = ZA(d);
    if (p) return p;
  }
  if (d?.isSentinel) {
    const p = e1(d);
    if (p) return p;
  }
  const f = [...i].reverse().find((p) => !p.isSentinel && !pc(p));
  if (f) return { key: f.key, offset: f.end - f.start, type: "text" };
}
function ey(e, t = []) {
  for (const r of e)
    ke(r) && t.push(r), $(r) && ey(r.getChildren(), t);
  return t;
}
function ty(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), $(e) && e.getChildren().forEach((r) => ty(r, t)), t;
}
function t1(e, t) {
  const r = dn(e, t.key, 0);
  if (r)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: r,
      run: e.spans.filter((n) => n.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: r };
}
function Ea(e, t, r = t.sentinels) {
  const n = [];
  for (const i of ey(e)) {
    const s = ty(i), o = t.spans.filter((m) => s.has(m.key)), a = o.find((m) => m.isSentinel || !P(J(m.key))) ?? o[0], c = o[o.length - 1];
    if (!a || !c) continue;
    const l = t1(t, a), u = dn(t, c.key, c.end - c.start);
    if (!l || !u) continue;
    const d = i.getTypedOnClicks(), f = i.getTypedOnRemoves(), p = i.getTypedOnMouseEnters(), h = i.getTypedOnMouseLeaves(), g = Object.entries(i.getTypedIDs()).flatMap(
      ([m, T]) => T.map((v) => ({
        type: m,
        id: v,
        onClick: d[m]?.[v],
        onRemove: f[m]?.[v],
        onMouseEnter: p[m]?.[v],
        onMouseLeave: h[m]?.[v]
      }))
    );
    g.length > 0 && n.push({ annotations: g, start: l, end: u });
  }
  return { ranges: n, live: n.length > 0 ? Fm(t, r) : void 0 };
}
function r1(e, t, r) {
  const n = ry(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!ke(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function n1(e, t) {
  const r = ry(e);
  if (!r) return;
  const n = In();
  n.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), r[0].insertBefore(n), n.append(...r);
}
function ry(e) {
  const t = J(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = Oe(t) ? Ca(r, n) : Pe(t) ? _a(r, n) : [];
  return [t, ...i];
}
function jf(e) {
  return e.type === "text" && P(J(e.key));
}
function i1(e) {
  const t = J(e.key);
  if (!C(t) || P(t) || te(t, ae) === "attribute") return !1;
  const r = t.getParent();
  if (!K(r)) return !0;
  const n = r.getChildren().find((i) => !P(i) || i.getMarkerSyntax() !== "opening");
  return !t.is(n);
}
function ny(e, t, r, n) {
  const i = r.settledOnlyRuns, s = { addressDisplayBytes: n }, o = Bm(i, e);
  if (o) {
    if (!o.within) return;
    const l = hr(o.run.spelling, o.within, s);
    return !l || !i1(l) ? void 0 : { point: l, literalRun: o.run.sentinelIndex };
  }
  const a = n && i.find(
    (l) => e.nonWsBefore === l.liveBefore.full && e.wsRun >= l.liveWsBefore
  );
  if (a) {
    const l = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), u = {
      nonWsBefore: a.settledBefore.full + 1,
      wsRun: 0,
      attributeRunSpans: 0
    }, d = hr(t, u, s);
    return d && l ? { point: d, preservedKey: l } : void 0;
  }
  const c = hr(
    t,
    va(i, e, "toSettled"),
    s
  );
  return c && { point: c };
}
function s1(e, t, r) {
  if (e.kind === "byte") return ny(e.anchor, t, r, !0);
  const n = r.sentinelMap[e.run]?.find((o) => o !== void 0), i = n && t.sentinels[n.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = hr(
    t,
    va(r.settledOnlyRuns, e.anchor, "toSettled"),
    { addressDisplayBytes: !0 }
  );
  return s && { point: s, preservedKey: i };
}
function Aa({ ranges: e, live: t }, r) {
  if (e.length === 0 || !t) return;
  const n = q()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = r();
      if (!o) continue;
      const a = Km(t, Um(o));
      if (!a) continue;
      const c = s1(i.start, o, a), l = ny(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const { point: u, preservedKey: d } = c, { point: f } = l;
      if (jf(u) || jf(f)) continue;
      if (u.key === f.key && u.offset === f.offset && u.type === f.type) {
        d && n1(d, s);
        continue;
      }
      const p = ia();
      p.anchor.set(u.key, u.offset, u.type), p.focus.set(f.key, f.offset, f.type), Sl(
        p,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), d && r1(d, s.type, s.id);
    }
  wn(n);
}
function Au(e, t, r) {
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
function iy(e, t) {
  return e.sentinels.filter((n, i) => n.length > 0 && (t[i]?.length ?? 0) === 0).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? Au(n, s.start, s.end) : n;
  }, e);
}
function Xs(e) {
  const t = e.exportJSON();
  return $(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(Xs(r))), t;
}
function Pu(e, t, r, n, i, s, o) {
  const a = Ea(
    e,
    iy(t, r),
    r
  );
  if (a.ranges.length === 0) return n;
  const c = qp({
    nodes: [Ye, ...cu],
    onError: (u) => {
      throw u;
    }
  });
  bl(
    c,
    Ye,
    (u) => In(u.getTypedIDs()),
    (u, d) => Object.entries(u.getTypedIDs()).forEach(
      ([f, p]) => p.forEach((h) => d.addID(f, h))
    )
  );
  let l;
  return c.update(
    () => {
      const u = Te(), d = i === "noteContent" ? Dt() : u;
      d !== u && u.append(d), l = d.getKey(), n.forEach((p) => d.append(Ii(p))), Aa(a, () => {
        const p = d.getChildren();
        if (i === "paras") return Eu(p, s, o);
        if (i === "chapter")
          return Ce(p[0]) ? Rs(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return un(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const u = l === void 0 ? void 0 : J(l);
    return $(u) ? u.getChildren().map(Xs) : n;
  });
}
function sy(e, t, r) {
  const n = hr(e, t);
  if (n?.type === "text") {
    const i = J(n.key);
    if (i && C(i)) {
      i.select(n.offset, n.offset);
      return;
    }
  } else if (n) {
    const i = J(n.key), s = $(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find($)?.selectStart();
}
function oy(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find($)?.selectStart();
      return;
    }
    sy(Eu(e, n, i), t, e);
  }
}
function o1(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find($)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  un(e, s, n, i), sy({ text: s.text, spans: s.spans }, t, e);
}
function ay(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Mu(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = q();
  if (N(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((T) => T.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = dn(s, c.anchor.key, c.anchor.offset));
  }
  const l = Ea(e, s), u = Fr(s.text, {
    getMarker: n
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (ei(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = ln.serializeEditorState(
    { type: Or, version: Pr, content: u },
    r
  );
  if (Vi(d.root.children, n) === ji(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = d.root.children.map((m) => Ii(m));
  if (Qm(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = tl(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  f.forEach((m) => h.insertBefore(m)), Xm(f, s.sentinels), e.forEach((m) => m.remove());
  const g = tl(f);
  for (let m = 0; m < p.length && m < g.length; m++)
    g[m].getNumber() === p[m].number && g[m].setSid(p[m].sid);
  return Aa(l, () => Eu(f, n, r)), oy(f, o, a, n, r), !0;
}
function Ns(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Ne.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!P(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(Bt(s) || C(s) && s.getTextContent() === At(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!P(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return un(c, l, t, r), { out: l, contentNodes: c };
}
function cy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(nt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function a1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Ns(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = q();
  if (N(u)) {
    for (let M = u.anchor.getNode(); M; M = M.getParent())
      if (e.is(M)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = dn(o, u.anchor.key, u.anchor.offset));
  }
  const d = Ea(a, o), f = Fr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (f.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (ei(f) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], g = cy(h), m = Vm(e, h, g, r);
  if (m.failure !== void 0)
    return m.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      m.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Ma(m.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const T = e.getCategory() !== g;
  if (T && e.setCategory(g), Vi(m.children, n) === ji(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), T;
  const v = m.children.map((M) => Ii(M));
  if (Qm(v) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), T;
  const S = a[0];
  if (S)
    v.forEach((M) => S.insertBefore(M));
  else {
    const M = e.getChildren().find((E) => P(E) && E.getMarkerSyntax() === "closing");
    v.forEach((E) => M ? M.insertBefore(E) : e.append(E));
  }
  Xm(v, o.sentinels);
  const w = new Set(o.sentinels.flat().map((M) => M.getKey()));
  a.forEach((M) => {
    w.has(M.getKey()) || (ke(M) && (M.getWritable().__suppressOnRemoveCallbacks = !0), M.remove());
  });
  const A = () => Ns(e, n, r);
  return Aa(d, () => A()?.out), o1(
    A()?.contentNodes ?? v,
    c,
    l,
    n,
    r
  ), !0;
}
const ly = /* @__PURE__ */ new Set(["ca", "cp"]), Ou = "cp";
function uy(e) {
  if (!ut(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if ($i(e, t, fr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Fr(r, { getMarker: fr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Ou)
  );
}
function Wi(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && ly.has(r.getMarker()) || uy(r)) {
      t.push(r);
      continue;
    }
    re(r) && r.getMarker() === Ou && t.push(r);
    break;
  }
  return t;
}
function c1(e) {
  const t = (n) => D(n) && ly.has(n.getMarker()) || uy(n);
  if (t(e) || re(e) && e.getMarker() === Ou)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ce(n)) return n;
      if (!t(n)) return;
    }
}
function Rs(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Wi(e);
  if (n.some((s) => re(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (un(e.getChildren(), i, t, r), un(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function l1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Wi(e)], o = Rs(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = q();
  if (N(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((T) => T.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = dn(o, l.anchor.key, l.anchor.offset));
  }
  const u = Ea(s, o), d = Fr(o.text, { getMarker: n }), [f] = d;
  if (d.length === 0 || typeof f != "object" || f.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (ei(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const p = ln.serializeEditorState(
    { type: Or, version: Pr, content: d },
    r
  );
  if (Vi(p.root.children, n) === ji(s, n)) {
    let m = !1;
    return e.getNumber() !== (f.number ?? "") && (e.setNumber(f.number ?? ""), m = !0), e.getAltnumber() !== f.altnumber && (e.setAltnumber(f.altnumber), m = !0), e.getPubnumber() !== f.pubnumber && (e.setPubnumber(f.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = p.root.children.map((m) => Ii(m));
  if (!Ce(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const g = h[0];
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Aa(
    u,
    () => Rs(g, n, r)
  ), oy(h, a, c, n, r), !0;
}
function qs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ae(n)) return;
    !t && (K(n) || re(n) || Ce(n)) && (t = n), wr(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? c1(r) : void 0) ?? t;
}
function Qt(e, t) {
  const r = qs(e);
  return r ? K(r) ? a1(r, t) : Ce(r) ? l1(r, t) : ay([r], t) : !1;
}
const u1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Vf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !u1.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function ko(e, t) {
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
          t.push(`\\${n}`), Vf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), ko(r.content, t), Vf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), ko(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), ko(r.content, t);
      }
    }
}
function Wf(e, t, r) {
  const n = qs(e);
  if (!re(n)) return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ym(n, t, r);
  if (!o) return !1;
  const a = Fr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    Lr.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  ko(a, l);
  for (const u of l.join("").replaceAll(I, "~")) {
    if (Lr.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function d1(e) {
  return [lt(e), ga()];
}
function wu(e) {
  tr(e, 2);
}
function f1(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Nu(e) {
  const t = f1(e);
  e.splice(0, 0, d1(e.getMarker())), t && wu(e);
}
function Qo(e, t) {
  e.setMarker(t), Nu(e), wu(e);
}
function p1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Xn(n)) {
    if (C(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(I), Tt(n, ae, br), n.setMode("token");
      return;
    }
    if (lg(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(ga());
  }
}
function Hf(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : $(n) ? n.getChildrenSize() : 0;
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
    if (re(t)) return t;
}
function h1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = ks(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = ks(r.getNode())?.is(s) ?? !1, a = ks(n.getNode())?.is(s) ?? !1;
    return !(o && !Hf(r, s, "start") || a && !Hf(n, s, "end"));
  });
}
function rl(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = q();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of h1(r)) t.add(n.getKey());
}
function g1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = q();
  if (!N(r) || !r.isCollapsed()) return;
  const n = ks(r.focus.getNode());
  n && t.add(n.getKey());
}
function m1(e) {
  const t = q();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (rl(e), t.removeText());
}
function y1(e, t) {
  if (!Ki(t.viewOptions)) return;
  if (zt(e.getFirstChild())) {
    p1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    Nu(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => re(o) && !o.is(e))) {
      Qo(e, dr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (re(r)) {
    const n = e.getChildren().filter((a) => !Xn(a)), i = q();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ks(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || $(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && tr(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Qo(e, dr);
}
function b1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = ur(t, Ks(e.getMarker()));
  return r === "" ? void 0 : r;
}
function k1(e) {
  const t = e.getChildren().filter((s) => !P(s) && te(s, ae) !== "attribute"), r = t[0];
  r && C(r) && r.getTextContent().startsWith(I) && r.setTextContent(r.getTextContent().slice(1));
  const n = b1(e);
  n && t.push(xe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function T1(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => C(c) && !P(c) && c.getTextContent() === At(s)
    ), a = Di(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (C(c) && c.getTextContent() === At(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function x1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    k1(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Qt(e, t);
}
function dy(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Ki(r)) {
    Qo(e, t);
    return;
  }
  zg(e, t);
}
function fy() {
  const e = q();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = py(e);
    return t !== "removed" ? t : (nl(), "handled");
  }
  return nl() ? "handled" : "declined";
}
function v1(e, t) {
  if (!t) return e;
  const r = zA.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Gf(e, t) {
  const r = q();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!hy())
      return "declined";
  } else {
    const s = py(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => v1(s, t)
  );
  Jf(n ?? "");
  for (const s of i)
    nl(), Jf(s);
  return "handled";
}
function _1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Us(n);
  if (!i) return !1;
  const s = rr(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !C(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function py(e) {
  const t = rr(e.anchor.getNode()), r = rr(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), C1() ? "removed" : "needs-plain-split");
}
function Jf(e) {
  if (e === "") return;
  const t = q();
  N(t) && t.insertText(e);
}
function C1() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = rr(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function hy() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = rr(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function nl() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = hy();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Nr("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = C(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Mi(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (ev(u), i.append(u));
  }
  return i.getChildren().every(P) && i.append(xe(Ut)), gy(i), !0;
}
function gy(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (C(t)) {
    const r = t.getTextContent().startsWith(I) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if ($(t)) {
    gy(t);
    return;
  }
  e.selectEnd();
}
function S1(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function M1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Te().getChildren()) {
    if (t && n.is(t)) break;
    (st(n) || Fe(n) || re(n)) && r.push(n.getMarker());
  }
  return r;
}
function E1(e) {
  let t = e;
  for (; $(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function A1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (zt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Xn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(E1(i)) && r === 0 : !1;
}
function P1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !zt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Xn(i) && t.is(i) && r === 0;
}
function O1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function w1() {
  const e = q();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = it(t, re), s = !n && (!i || P1(i, t, r)) ? "paragraph" : "character", o = rr(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: M1(t),
    openCharMarkers: S1(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Bl(t, r),
    anchorRect: O1()
  };
}
function N1() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!C(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = BA.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function R1(e, t, r) {
  dy(e, t, r), wu(e);
}
function q1(e, t, r) {
  const n = q();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = it(i, re);
  if (t === "backslash" && s && A1(s, i, n.focus.offset)) {
    R1(s, e, r);
    return;
  }
  yy(e, r);
}
function $1(e, t) {
  const r = q();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function my(e) {
  const t = q();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function I1(e, t, r, n) {
  if (N(q()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && N1(), e.kind === "closeTag") {
    my(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && fy() !== "declined") return;
  if (e.kind === "paragraph" && tt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    q1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ne.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Cm(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  Gc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Li(), reference: r });
}
function yy(e, t) {
  const r = q();
  if (!N(r)) return;
  const n = Ki(t);
  if (vm()) {
    const s = q();
    if (!N(s)) return;
    const o = it(s.anchor.getNode(), re);
    if (!o) return;
    o.setMarker(e), n && Nu(o);
    return;
  }
  const i = r.insertParagraph();
  re(i) && (n ? Qo(i, e) : i.setMarker(e));
}
function L1() {
  const [e] = ue();
  return B(() => e.registerCommand($p, () => !0, Mt), [e]), null;
}
function by(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Ne.isValidMarker(r) || aa(r));
}
function D1(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Ne.isValidMarker(r) || aa(r));
}
function U1(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = DA.exec(e)?.[1];
  return r === void 0 ? !1 : !by(r, t);
}
function ky(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !U1(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!re(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (re(i))
    return [i, r];
}
function Ty(e, t) {
  const r = ky(e, t.getMarker);
  return r !== void 0 && ay(r, t);
}
function F1(e, t) {
  const r = q();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function xy(e) {
  const t = UA.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function K1(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = xy(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function z1(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && C(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      Ll(n);
      return;
    }
  }
  C(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Yf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = xy(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  z1(e);
}
function Xf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function vy(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Qt(e, r);
  const n = K1(e), i = e.getParent();
  if (re(i)) {
    if (!by(t, r.getMarker))
      return Ty(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Qt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Xf(s, t) && Yf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? D1(t, r.getMarker) : Ne.isValidMarker(s)))
      return Qt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Qt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (F1(c, Ve(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Xf(a, s) && Yf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Qt(e, r);
}
function B1(e) {
  const t = q();
  if (!N(t)) return !1;
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
function j1(e, t) {
  const r = e.getTextContent();
  if (hn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (ze(e.getParent()) && Ml(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !B1(e)) {
    oT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = IA.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), vy(e, n[1], t);
      return;
    }
    if (LA.test(r)) {
      t.pendingKeys.delete(e.getKey()), Qt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = Ve(e.getMarker(), e.getNested());
    if (D(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = q(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = xe(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function V1(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if ($h(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function _y(e) {
  if (!Vp(e)?.length)
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
const as = _y("v"), W1 = _y("c"), Qf = /^[ \u00A0]*$/;
function Zf(e, t, r) {
  const n = e.getNextSibling();
  if (C(n) && n.getType() === Be.getType() && n.getMode() === "normal" && te(n, ae) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = xe(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function H1(e, t) {
  const r = e.getTextContent(), n = Lt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (as.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = as.valueAndRest.exec(c);
    if (l && Qf.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (as.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = as.valueAndRest.exec(r);
  if (!s) {
    const c = as.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = q(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Lt("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      Zf(e, d, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Qt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Qf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Lt("v", o)), a && Zf(e, a, a.length);
}
const G1 = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function J1(e, t) {
  const r = e.getParent();
  if (!K(r) || r.getIsCollapsed() !== !1 || !Vp(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === At(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = G1.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(At(a)), !0;
}
function Y1(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!C(t)) return;
  const r = Lt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = W1.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Cy(e) {
  if (Pe(e)) {
    const { wrapper: t } = la(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = El(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ce(e)) {
    const t = [], r = gh(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = yh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Oe(e)) {
    const t = [], r = xs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = xs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function X1(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Cy(e).some((n) => r.is(n));
}
function Q1(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && re(e) && lg(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of vs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Js(l, e) && (i || X1(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Cy(e))
    l.remove(), n = !0;
  let s = !1;
  if (D(e)) {
    const l = OT(e);
    l !== void 0 && Wk(l) && (Ch(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of vs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (uv(l, e)) {
        Es(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && fg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      ma(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function ep(e) {
  return C(e) && e.getType() === Be.getType() && e.getMode() === "normal" && te(e, ae) !== "attribute";
}
function Z1(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = J(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && ep(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && ep(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function po(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = Z1(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = J(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (hn(c)) continue;
      const h = Dm.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = vy(c, h[1], e) || n : r === "idle" && Wf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Ty(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Qt(c, e) || n;
      continue;
    }
    const l = on(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = Q1(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Wf(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Qt(u, e) || n;
    }
  }
  return n;
}
function Sy(e) {
  if (mn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return ps(t) !== void 0;
  return !1;
}
function eP(e) {
  const t = on(e);
  if (!t) return !1;
  const r = $r(t.kind);
  return !ma(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function tp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (st(t) || Ae(t) || jh(t)) return !0;
  return !1;
}
function tP(e, t) {
  const r = e.getTextContent(), n = te(e, ae), i = e.getParent();
  if (n !== "attribute" && Ce(i)) {
    r.replace(/^[ \u00A0]+/, "") === Lt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (J1(e, t)) return;
  if (n === "attribute") {
    eP(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Sy(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !tp(e))
      t.pendingKeys.add(e.getKey());
    else if (bh(e)) t.pendingKeys.add(e.getKey());
    else if (Ce(qs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      D(a) && Sh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (tp(e)) return;
  const s = q(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (FA.test(o)) {
    if (tT(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Qt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function rP(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : fg(e, t);
}
function nP(e) {
  const t = (r) => {
    if (P(r)) {
      hn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (mn(r)) {
      $h(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of vs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Js(n, r) || rP(n, r)) && e.pendingKeys.add(r.getKey());
    if (Oe(r)) {
      r.getTextContent() !== Lt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (C(r)) {
      if (r.getType() !== Be.getType() || te(r, ae) === "attribute") return;
      const n = r.getParent();
      if (Ce(n)) {
        r.getTextContent() !== Lt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Sy(r) || i.includes("//") || bh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ae(r) && !st(r)) {
      if (ze(r) && r.getChildrenSize() === 0) {
        const n = on(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      $(r) && r.getChildren().forEach(t);
    }
  };
  Te().getChildren().forEach(t);
}
function iP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = te(e, ae);
  if (r === "attribute" || r === br) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (st(o) || Ce(o) || Ae(o)) return;
  const n = t.startsWith(I) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? I : "") + i.replace(/ (?=[ \u00A0])/g, I).replace(new RegExp("(?<=\\u00A0) ", "g"), I);
  s !== t && e.setTextContent(s);
}
function sP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function il(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(sP(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function oP(e) {
  const t = il(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(I) ? r : n.includes(I) || i.includes(I) ? i : void 0;
  if (!s) return !1;
  const o = q();
  if (!N(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(I, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = Li();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Eo, void 0), u === "") return;
    const f = q();
    N(f) && f.insertText(u);
  }), !0;
}
function aP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html"), r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT), n = [];
  for (let a = r.nextNode(); a; a = r.nextNode()) n.push(a);
  const i = n.map((a) => a.nodeValue ?? "").join(""), s = i.replace(
    /\u00A0+/g,
    (a, c) => a.length >= 2 || c === 0 || c + a.length === i.length ? a : " "
  );
  if (s === i) return e;
  let o = 0;
  for (const a of n) {
    const c = (a.nodeValue ?? "").length;
    a.nodeValue = s.slice(o, o + c), o += c;
  }
  return t.innerHTML;
}
function cP(e) {
  const t = q();
  if (!N(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(I, " ")
  }, n = ak(e), i = ck(e);
  return n && (r["text/html"] = aP(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function rp(e, t, r) {
  const n = q();
  if (!N(n) || n.isCollapsed()) return !1;
  const i = cP(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return ok(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const My = fl(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function hc(e) {
  const t = e();
  return qn(Ep), qn(Hp), t;
}
const np = 8, lP = 1e3;
function mi(e, t) {
  const r = Oe(e) ? ["va", "vp"] : Pe(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    gv($r(n), e, t.pendingKeys);
}
function uP(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(yl) || i.updateTags.has(vi)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = J(o);
        if (!c) continue;
        const l = on(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = J(o.getKey());
        c?.isAttached() && $r(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return et(
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
    e.registerMutationListener(Be, r),
    e.registerMutationListener(yr, r),
    e.registerMutationListener(zr, r),
    e.registerMutationListener(Kr, r)
  );
}
function dP(e, t, r) {
  return et(
    e.registerCommand(
      Er,
      (n) => {
        if (Jg()) return !1;
        const i = il(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(I, "~") : s).split(`
`);
          let c = Gf(a, t.getMarker);
          if (c === "declined" && _1(e) && (c = Gf(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Ar
    ),
    e.registerCommand(
      Er,
      (n) => {
        const i = il(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !eA()) return !1;
        n?.preventDefault();
        const o = q();
        return N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Eo, void 0), a === "") return;
          const l = q();
          N(l) && l.insertText(a);
        }), !0;
      },
      Ue
    ),
    e.registerCommand(
      Er,
      () => (t.splitExpected.current = !0, !1),
      Mt
    )
  );
}
function fP({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = ue(), s = e?.markerMode === "editable", o = !!e && Vt(e), a = Q(void 0), c = Q(n);
  return B(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? fr, l.logger = r);
  }, [e, t, r, n]), B(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? fr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const u = ov(i, l.pendingKeys);
    let d, f = !1, p = !1, h, g = !1, m = !1, T = 0;
    const v = () => T < np ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${np} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), S = (E, R = "departure") => {
      i.update(() => {
        T = hc(
          () => po(l, E, R)
        ) ? T + 1 : 0;
      });
    };
    let w;
    const A = () => {
      if (w !== void 0 && clearTimeout(w), w = void 0, m || l.pendingKeys.size === 0) return;
      const E = c.current ?? lP;
      E < 0 || (w = setTimeout(() => {
        w = void 0, !(m || l.pendingKeys.size === 0) && (f || v() || S(void 0, "idle"));
      }, E));
    }, M = et(
      i.registerNodeTransform(yr, (E) => {
        if (i.isComposing()) return;
        j1(E, l);
        const R = on(E);
        R && (Oe(R.owner) || K(R.owner) || Ce(R.owner) || Pe(R.owner) && la(R.owner).wrapper === void 0) && mi(R.owner, l);
      }),
      i.registerNodeTransform(ht, (E) => {
        i.isComposing() || (H1(E, l), mi(E, l));
      }),
      i.registerNodeTransform(Ot, (E) => {
        i.isComposing() || (Y1(E), E.isAttached() && mi(E, l));
      }),
      i.registerNodeTransform(tt, (E) => {
        i.isComposing() || y1(E, l);
      }),
      i.registerNodeTransform(ve, (E) => {
        if (!i.isComposing()) {
          x1(E, l);
          for (const R of ["separator", "char"])
            E.isAttached() && Js($r(R), E) && l.pendingKeys.add(E.getKey());
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
      i.registerNodeTransform(er, (E) => {
        i.isComposing() || mi(E, l);
      }),
      i.registerNodeTransform(Kr, (E) => {
        if (i.isComposing()) return;
        const R = on(E);
        R && (Pe(R.owner) || Oe(R.owner) || K(R.owner) || Ce(R.owner)) && mi(R.owner, l);
      }),
      i.registerNodeTransform(Ne, (E) => {
        i.isComposing() || (T1(E, l), mi(E, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(jr, (E) => {
        i.isComposing() || V1(E, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(Be, (E) => {
        i.isComposing() || tP(E, l);
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
      i.registerMutationListener(
        Be,
        (E) => {
          i.getEditorState().read(() => {
            for (const [R, Y] of E) {
              if (Y === "destroyed") continue;
              const H = J(R);
              !H || te(H, ae) !== "attribute" || ze(H.getParent()) || i.getElementByKey(R)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      uP(i, l),
      ...o ? [
        i.registerNodeTransform(Be, (E) => {
          i.isComposing() || iP(E);
        }),
        i.registerCommand(
          oa,
          (E) => rp(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            E && typeof E == "object" && "clipboardData" in E ? E : null,
            i,
            !1
          ),
          Ue
        ),
        i.registerCommand(
          Rn,
          (E) => rp(
            E && typeof E == "object" && "clipboardData" in E ? E : null,
            i,
            !0
          ),
          Ue
        ),
        i.registerCommand(
          Er,
          (E) => oP(
            // Same jsdom-safe duck-check as COPY above.
            E && typeof E == "object" && "clipboardData" in E ? E : null
          ),
          Ue
        )
      ] : [],
      i.registerCommand(
        Rn,
        () => (rl(l), !1),
        Ar
      ),
      i.registerCommand(
        hl,
        () => (i.isComposing() || m1(l), !1),
        xi
      ),
      i.registerCommand(
        sa,
        () => (f = !1, T = 0, A(), !1),
        Mt
      ),
      i.registerCommand(
        Ur,
        (E) => (f = !1, T = 0, A(), (E.key === "Backspace" || E.key === "Delete") && (rl(l), g1(l)), i.isComposing() || !E.ctrlKey || E.altKey || E.shiftKey || E.metaKey || E.key !== " " && E.code !== "Space" || !ZE() ? !1 : (E.preventDefault(), !0)),
        Ue
      ),
      i.registerCommand(
        Np,
        (E) => {
          const R = fy();
          R === "needs-plain-split" && i.dispatchCommand(Eo, void 0);
          const Y = R !== "declined" || mv();
          return Y && E?.preventDefault(), po(l), Y;
        },
        Ue
      ),
      i.registerCommand(
        Eo,
        () => (l.splitExpected.current = !0, vm()),
        Ue
      ),
      dP(i, l, o),
      i.registerCommand(
        My,
        () => {
          if (f) return !0;
          const E = i.getRootElement(), R = E?.ownerDocument, Y = !!E && !!R && R.hasFocus() && E.contains(R.activeElement);
          let H;
          if (Y) {
            const ne = q();
            H = N(ne) ? ne.focus.key : d;
          }
          return hc(() => po(l, H)), !0;
        },
        Mt
      ),
      i.registerCommand(
        xl,
        () => (p = !0, !1),
        Mt
      ),
      i.registerCommand(
        ml,
        () => {
          if (f) return !1;
          const E = q(), R = N(E) ? E.focus.key : d;
          return hc(() => po(l, R)), !1;
        },
        Mt
      ),
      i.registerUpdateListener(({ editorState: E, tags: R }) => {
        const Y = p || R.has(Ts);
        p = !1, l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const H = E.read(() => {
          const ce = q();
          return N(ce) ? ce.focus.key : void 0;
        }), ne = h;
        if (H !== void 0 && (h = H), R.has(yl)) {
          l.pendingKeys.clear(), E.read(() => nP(l)), f = !0, H !== void 0 && (d = H);
          return;
        }
        if (Y) {
          H !== void 0 && H !== ne && (f = !0);
          return;
        }
        f || (H !== void 0 && (d = H), A(), !(g || H === void 0) && [...l.pendingKeys].some((ce) => ce !== H) && (g = !0, queueMicrotask(() => {
          g = !1, !m && (v() || S(d));
        })));
      })
    );
    return () => {
      m = !0, w !== void 0 && clearTimeout(w), w = void 0, u(), M(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const pP = ["status_unknown", "status_invalid"], Ey = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, hP = Object.values(Ey);
function gP(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Ey[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function ip(e) {
  e.classList.remove(...pP), e.removeAttribute("aria-description"), hP.includes(e.title) && e.removeAttribute("title");
}
function mP(e, t, r, n) {
  const i = (a) => a.read(() => Te().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = J(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function yP(e) {
  const t = J(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function bP({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ue(), i = e?.markerMode === "editable";
  return B(() => {
    if (!i) return;
    const s = t ?? Fo;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = SA(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || yP(f)) continue;
            const h = J(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && ip(p);
        }
        for (const [f, p] of d) {
          const h = n.getElementByKey(f);
          h && gP(h, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          mP(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && ip(u);
      }
    };
  }, [n, i, t, r]), null;
}
function Qs(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Dr(o);
    a && $(s) && Qs(s.getChildren(), a, r);
  }
}
function Ay(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Dr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = qi(o);
      if (c === void 0 || !c.includes(nt)) continue;
      const l = c.split(nt), u = [];
      for (let d = 0; d < l.length; d++) {
        const f = l[d];
        if (d > 0 && u.push(...t[r++] ?? []), f.length > 0) {
          const p = {
            ...o,
            text: f
          };
          u.push(p);
        }
      }
      i.splice(s, 1, ...u), s += u.length - 1;
    }
  };
  n(e);
}
function Zs(e, t, r) {
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
function Py(e, t) {
  const r = [];
  for (const n of e)
    Hm(n, t) || ((re(n) || D(n)) && r.push(n.getMarker()), $(n) && r.push(...Py(n.getChildren(), t)));
  return r;
}
function Oy(e) {
  const t = [];
  for (const r of e) {
    const n = Su(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Dr(r);
    i && t.push(...Oy(i));
  }
  return t;
}
function Ru(e, t, r) {
  const n = Py(e, r), i = Oy(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function wy(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = q();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = J(t.key), i = t.offset;
  else
    return;
  if (!(!C(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function qu(e, t) {
  const r = t && Ny(e, t);
  return r ? Au(e, r.start, r.end) : e;
}
function Ny(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function Ry(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Mu(e, o, s);
  if (!c) return;
  const l = qu(c, i), u = Fr(l.text, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (ei(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = ln.serializeEditorState(
    { type: Or, version: Pr, content: u },
    s
  ).root.children;
  if (Ma(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Zs(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Vi(d, o) === ji(e, o) && Ru(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Ay(d, f.serialized);
  const h = kP(e), g = qy(d);
  for (let m = 0; m < h.length && m < g.length; m++)
    h[m].sid !== void 0 && g[m].number === h[m].number && (g[m].sid = h[m].sid);
  return Pu(
    e,
    l,
    f.live,
    d,
    "paras",
    o,
    s
  );
}
function kP(e) {
  const t = [], r = (n) => {
    Oe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function qy(e) {
  const t = [];
  for (const r of e) {
    uh(r) && t.push(r);
    const n = Dr(r);
    n && t.push(...qy(n));
  }
  return t;
}
function TP(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Ns(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = qu(l, i), f = Fr(d.text, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (ei(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], g = cy(h), m = e.getCategory() !== g, T = Vm(e, h, g, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const v = T.children;
  if (Ma(v) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const S = Zs(l, t, n);
  if (!S) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Vi(v, o) === ji(u, o) && Ru(u, v, o)) {
    if (m)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: m };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Ay(v, S.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: Pu(
      u,
      d,
      S.live,
      v,
      "noteContent",
      o,
      s
    ),
    contentNodes: u,
    category: g,
    categoryChanged: m
  };
}
function sp(e) {
  return e.$?.textType;
}
function xP(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && sp(e) === sp(t);
}
function vP(e) {
  const t = [];
  for (const r of e) {
    const n = J(r);
    n?.isAttached() && Ae(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function _P(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (hn(e)) return;
  const n = Dm.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function op(e, t) {
  const r = e;
  r.marker = t, r.text = Jm(t, r.markerSyntax, r.nested);
}
function $y(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ne.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && op(a.node, s);
  const c = n.getChildren().filter(P).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && op(l.node, s);
}
function Iy(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Rs(e, i, n);
  if (!o) return;
  const a = qu(o, r), c = Fr(a.text, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (ei(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = ln.serializeEditorState(
    { type: Or, version: Pr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Wi(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Vi(u, i) === ji(d, i) && Ru(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Pu(
    d,
    a,
    [],
    u,
    "chapter",
    i,
    n
  );
}
function Ly(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (d) => {
    K(d) ? s.set(d.getKey(), d) : Ce(d) ? o.set(d.getKey(), d) : n.set(d.getKey(), [d]);
  };
  for (const d of e) {
    const f = J(d);
    if (!f?.isAttached()) continue;
    const p = qs(f);
    if (p) {
      if (c(p), P(f)) {
        const h = ky(f, t.getMarker);
        h && i.push(h);
      }
      if (K(p)) {
        const h = _P(f);
        h && a.set(p.getKey(), h);
      }
    }
  }
  const l = /* @__PURE__ */ new Set();
  for (const d of i)
    d.some((f) => l.has(f.getKey())) || (d.forEach((f) => {
      l.add(f.getKey()), n.delete(f.getKey());
    }), n.set(d[0].getKey(), d));
  if (r) {
    const d = qs(r.node);
    d && c(d);
  }
  const u = vP(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: u,
    huskKeys: new Set(u.map((d) => d.getKey()))
  };
}
function Dy(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && qi(r), s = n && qi(n);
  r && n && i !== void 0 && s !== void 0 && xP(r, n) && (r.text = i + s, e.splice(t, 1));
}
function Pa(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Dr(s.node) : void 0;
  if (!s || !o) return !1;
  const a = TP(e, t, r, n, i);
  if (!a) return !1;
  if (a.categoryChanged) {
    const u = s.node;
    a.category === void 0 ? delete u.category : u.category = a.category;
  }
  if (!a.rebuilt) return a.categoryChanged;
  const c = t.get(a.contentNodes[0].getKey());
  if (!c) return a.categoryChanged;
  const l = o.indexOf(c.node);
  return l < 0 ? a.categoryChanged : (o.splice(l, a.contentNodes.length, ...a.rebuilt), !0);
}
function CP(e, t, r, n, i) {
  const s = wy(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: u, huskKeys: d } = Ly(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && u.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  Qs(Te().getChildren(), e.root.children, f);
  for (const p of l.values()) $y(p, f);
  for (const p of a.values())
    Pa(p, f, r, d, s);
  for (const p of o.values()) {
    const h = f.get(p[0].getKey());
    if (!h) continue;
    const g = Ry(p, f, r, d, s);
    if (!g) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || h.siblings.splice(m, p.length, ...g);
  }
  for (const p of c.values()) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const g = 1 + Wi(p).length, m = Iy(p, r, s);
    if (!m) continue;
    const T = h.siblings.indexOf(h.node);
    T < 0 || h.siblings.splice(T, g, ...m);
  }
  for (const p of u) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const g = h.siblings.indexOf(h.node);
    g < 0 || Dy(h.siblings, g);
  }
  return hm(e, r.viewOptions);
}
function SP({
  viewOptions: e,
  logger: t
}) {
  const [r] = ue(), n = Ki(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return B(() => {
    if (n)
      return r.registerNodeTransform(
        tt,
        (i) => MP(i, t)
      );
  }, [r, n, t]), null;
}
function MP(e, t) {
  e.getMarker() !== dr && (e.isEmpty() || zt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${dr}" (key ${e.getKey()})`
  ), e.setMarker(dr)));
}
function ho(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const EP = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function xr(e) {
  return EP.exec(e)?.[1] ?? e;
}
function fn(e, t) {
  const r = e.jsonPath.slice(xr(e.jsonPath).length);
  return { ...e, jsonPath: `${Et(t)}${r}` };
}
function Uy(e, t) {
  return e.length === t.length && e.every((r, n) => r === t[n]);
}
function Fy(e) {
  if (Cp(e) || _o(e)) return !0;
  const t = Ky(e);
  return t === "marker" || t === "caller";
}
const AP = /^\['([^']+)'\]$/;
function Ky(e) {
  if (Co(e))
    return AP.exec(
      e.jsonPath.slice(xr(e.jsonPath).length)
    )?.[1];
}
function zy(e, t) {
  return Fy(e) && Uy(mr(xr(e.jsonPath)), pr(t));
}
function By(e, t, r) {
  if (!e.isAttached()) return;
  const [n, i] = Oi(
    fn(t, pr(e)),
    r
  );
  if (!(!n || i === void 0))
    return { key: n.getKey(), offset: i, type: $(n) ? "element" : "text" };
}
function PP(e, t) {
  const r = hr(e, t, { addressDisplayBytes: !0 }), n = r && J(r.key);
  if (r && r.offset > 0 && P(n) && n.getMarkerSyntax() !== "opening")
    return r;
  const i = hr(e, t);
  return i && OP(e, i);
}
function OP(e, t) {
  if (t.type !== "text") return t;
  const r = e.spans.findIndex((a) => a.key === t.key), n = e.spans[r], i = e.spans[r + 1];
  if (!n || !i || n.end === n.start || t.offset !== n.end - n.start)
    return t;
  const s = e.text[i.start] === "\\", o = Lr.test(e.text[n.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function jy(e) {
  const t = e.markerName.length + 2, r = t + e.valueLength;
  return { valueStart: t, closerStart: r, closerLength: e.markerName.length + 2 };
}
function wP(e, t, r) {
  const { keyName: n } = e, { valueStart: i, closerStart: s } = jy(e);
  return r === 0 ? { jsonPath: t, keyName: n } : r < i ? { jsonPath: t, keyName: n, keyOffset: r - 1 } : r < s ? {
    jsonPath: `${t}['${n}']`,
    propertyOffset: r - i
  } : { jsonPath: t, keyName: n, keyClosingMarkerOffset: r - s };
}
function NP(e, t) {
  const { valueStart: r, closerStart: n, closerLength: i } = jy(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if (Mo(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (So(t))
    return s(t.keyClosingMarkerOffset, i, n);
  if (dl(t)) return 0;
  if (Co(t))
    return s(t.propertyOffset, e.valueLength, r);
}
function RP(e) {
  return Mo(e) || So(e) || dl(e) ? e.keyName : Ky(e);
}
function qP(e, t, r) {
  const n = PP(e.spelling, t), i = n && J(n.key);
  if (!n || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === n.key);
  return s ? wP(
    s,
    Et(pr(i)),
    n.offset
  ) : jt(i, n.offset, r);
}
function $P(e, t) {
  let r = Te();
  for (let n = 0; n < t.length; n += 1) {
    if (!$(r)) return;
    const i = ir(r, Vt(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function Vy(e, t) {
  const r = mr(xr(t.jsonPath));
  if (r.length === 0) {
    if (!Is(t)) return { kind: "live", location: t };
    const o = e.settledToLiveTopIndex(t.offset);
    if (!o) {
      const a = ir(
        Te(),
        Vt(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: a } };
    }
    return o.plan && o.indexWithinScope > 0 ? Vy(e, { jsonPath: Et([t.offset]) }) : { kind: "live", location: { ...t, offset: o.liveIndex } };
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
  const i = [n.liveIndex, ...r.slice(1)], s = $P(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: fn(t, i) };
}
function sl(e, t) {
  t.add(e.getKey()), $(e) && e.getChildren().forEach((r) => sl(r, t));
}
function Wy(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function To(e, t, r) {
  const n = (d, f) => {
    const p = dn(e, d, f), h = Wy(e, d, f);
    return p && h ? { anchor: p, position: h.start + f } : void 0;
  }, i = (d) => {
    const f = d.end - d.start, p = dn(e, d.key, f);
    return p ? { anchor: p, position: d.start + f } : void 0;
  };
  if (!$(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((d) => sl(d, s));
  const o = [...e.spans].reverse().find((d) => s.has(d.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  sl(t, a);
  const c = e.spans.find((d) => a.has(d.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((d) => !a.has(d.key) && J(d.key)?.isBefore(t));
  if (l) return i(l);
  const u = e.spans[0];
  return u && !u.isSentinel ? n(u.key, 0) : void 0;
}
function Hy(e, t) {
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
function Gy(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
function IP(e, t) {
  const r = RP(t);
  if (r === void 0) return;
  const n = mr(xr(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = J(s.ownerKey);
      if (s.keyName !== r || !o || !Uy(pr(o), n))
        continue;
      const a = NP(s, t), c = i.spelling.spans.find((u) => u.key === s.ownerKey), l = a !== void 0 && c ? dn(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: xo(i.spelling, c.start + a)
        }
      };
    }
}
function LP(e, t, r, n) {
  const i = IP(t, r);
  if (i) return i.resolution;
  const [s, o] = Oi(r, n.viewOptions);
  if (!s || o === void 0) return;
  const a = Hy(e, s), c = a && t.find((f) => f.sentinelIndex === a.sentinelIndex);
  if (c) {
    const f = To(c.spelling, s, o);
    return f && {
      kind: "literal",
      run: c,
      anchor: f.anchor,
      atWordByte: xo(c.spelling, f.position)
    };
  }
  if (!a) {
    const f = To(e, s, o);
    return f ? {
      kind: "anchor",
      anchor: f.anchor,
      atWordByte: xo(e, f.position)
    } : void 0;
  }
  const l = Gy(a.member, s);
  if (!l) return;
  const u = K(a.member) ? Ns(a.member, n.getMarker, n.viewOptions)?.out : void 0, d = u && To(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: $(s) ? "element" : "text",
    noteAnchor: d && {
      anchor: d.anchor,
      atWordByte: xo(u, d.position)
    },
    isNoteOwnBytes: K(a.member) && zy(r, a.member)
  };
}
function xo(e, t) {
  const r = e.text[t];
  return r !== void 0 && !Lr.test(r);
}
function Jy(e, t) {
  if (t.type !== "text") return t;
  const r = Wy(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && Lr.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function Yy(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function DP(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function Xy(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, sentinelMap: o } = e;
  if (!i || !s || !o || e.pairedBefore !== void 0)
    return;
  const a = va(e.settledOnlyRuns, t, "toLive"), c = hr(i, a, {
    addressDisplayBytes: !Is(n)
  });
  if (c)
    return Yy(e, r ? Jy(i, c) : c);
}
function UP(e, t, r, n, i) {
  const s = DP(r, n), o = s && t.liveFragment?.sentinels[s.sentinelIndex]?.[s.memberIndex];
  if (!o?.isAttached()) return;
  const a = e.byFirstLiveKey.get(o.getKey());
  if (a?.kind === "note" && n.isNoteOwnBytes)
    return By(o, i, e.viewOptions);
  if (a?.kind === "note")
    return n.noteAnchor ? Xy(
      a,
      n.noteAnchor.anchor,
      n.noteAnchor.atWordByte,
      i
    ) : void 0;
  let c = o;
  for (const l of n.path) {
    if (!$(c)) return;
    const u = c.getChildAtIndex(l);
    if (!u) return;
    c = u;
  }
  return { key: c.getKey(), offset: n.offset, type: n.type };
}
function FP(e, t, r) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = Oi(t, r);
    return wr(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (wr(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function KP(e, t, r) {
  const { plan: n } = r, { liveFragment: i, scratchFragment: s, sentinelMap: o } = n;
  if (n.kind === "note" && r.scratchIndexes.length === 1 && Fy(r.location))
    return By(n.liveNodes[0], r.location, t.viewOptions);
  if (!i || !s || !o || n.pairedBefore !== void 0)
    return;
  const a = fn(r.location, r.scratchIndexes), c = FP(n, a, e.tier2.viewOptions);
  if (c) return c;
  const l = n.scratch.getEditorState().read(
    () => LP(s, n.settledOnlyRuns, a, e.tier2)
  );
  if (l) {
    if (l.kind === "preserved")
      return UP(t, n, o, l, r.location);
    if (l.kind === "literal") {
      const { run: u, anchor: d } = l, f = zm(u, d.nonWsBefore, "toLiteral");
      if (f === void 0) return;
      const p = {
        nonWsBefore: u.liveBefore.full + f,
        wsRun: d.nonWsBefore === 0 ? u.liveWsBefore + d.wsRun : d.wsRun,
        attributeRunSpans: 0
      }, h = hr(i, p, {
        addressDisplayBytes: !Is(r.location)
      });
      return h ? Yy(
        n,
        l.atWordByte ? Jy(i, h) : h
      ) : void 0;
    }
    return Xy(n, l.anchor, l.atWordByte, r.location);
  }
}
function ap(e, t, r) {
  const n = Vy(t, r);
  if (!n) return;
  if (n.kind === "live") return n.location;
  const i = KP(e, t, n), s = i && J(i.key);
  return s ? jt(s, i.offset, t.viewOptions) : void 0;
}
function zP(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = ap(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = ap(e, t, r.end);
  if (i)
    return { ...r, start: n, end: i };
}
function Qy(e, t) {
  const r = mr(xr(t.jsonPath));
  return r.length === 0 ? t : fn(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function Zy(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function Zo(e, t) {
  const r = t.liveNodes[0], n = Zy(e, t);
  if (n) {
    const s = Iu(e, n, r, 0);
    return typeof s == "object" ? mr(xr(s.jsonPath)) : void 0;
  }
  const i = BP(r, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function BP(e, t) {
  return !ut(e) || !wr(e.getParent()) ? pr(e) : [Ti(e, 0, Vt(t)).index];
}
function $u(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function jP(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
const vo = "stale-basis";
function VP(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!$(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return jt(s, n, i);
  }
}
function WP(e, t) {
  return e.pairedBefore !== void 0 && t > e.pairedBefore;
}
function eb(e, t, r, n, i, s, o) {
  const a = Hy(r, i);
  if (a) {
    const f = r.sentinels[a.sentinelIndex];
    if (!t[a.sentinelIndex]?.some((g) => g !== void 0)) {
      const g = f[0].getParent();
      return g ? eb(
        e,
        t,
        r,
        n,
        g,
        f[0].getIndexWithinParent(),
        o
      ) : vo;
    }
    const p = Gy(a.member, i);
    if (!p) return vo;
    const h = t[a.sentinelIndex]?.[a.memberIndex];
    return h ? e.scratch.getEditorState().read(
      () => VP(n, h, p, s, o)
    ) ?? vo : void 0;
  }
  const c = To(r, i, jP(e, i, s));
  if (!c || WP(e, c.anchor.nonWsBefore)) return;
  const l = Bm(e.settledOnlyRuns, c.anchor);
  if (l) {
    const { within: f } = l;
    return f ? e.scratch.getEditorState().read(() => qP(l.run, f, o)) : void 0;
  }
  const u = va(e.settledOnlyRuns, c.anchor, "toSettled"), d = !Is(
    jt(i, s, o)
  );
  return e.scratch.getEditorState().read(() => {
    const f = hr(n, u, { addressDisplayBytes: d }), p = f && J(f.key);
    return p ? jt(p, f.offset, o) : void 0;
  });
}
function Iu(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, sentinelMap: o } = t;
  if (t.kind === "note") {
    const l = jt(r, n, e.viewOptions);
    if (zy(l, t.liveNodes[0])) {
      const u = Zo(e, t);
      return u && fn(l, u);
    }
  }
  if (!i || !s || !o) return;
  const a = eb(
    t,
    o,
    i,
    s,
    r,
    n,
    e.viewOptions
  );
  if (typeof a != "object") return a;
  const c = $u(
    t,
    Zo(e, t),
    mr(xr(a.jsonPath))
  );
  return c && fn(a, c);
}
function HP(e) {
  const t = [], r = (n) => {
    if ($(n))
      n.getChildren().forEach((i, s) => {
        t.push({ node: n, offset: s }), r(i);
      }), t.push({ node: n, offset: n.getChildrenSize() });
    else if (C(n))
      for (let i = 0; i <= n.getTextContentSize(); i += 1)
        t.push({ node: n, offset: i });
  };
  return e.liveNodes.forEach(r), t;
}
function GP(e, t) {
  const r = t.scratch.getEditorState().read(() => jt(Te(), 0, e.viewOptions)), n = $u(
    t,
    Zo(e, t),
    mr(xr(r.jsonPath))
  );
  if (n) return fn(r, n);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = Zy(e, t);
  return o ? rb(e, o, s, i.getIndexWithinParent()) : Qy(
    e,
    jt(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function tb(e, t, r) {
  const n = HP(t), i = r ? n.findIndex((s) => s.node.is(r.node) && s.offset === r.offset) : -1;
  for (let s = (i < 0 ? n.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = n[s], c = Iu(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return GP(e, t);
}
function rb(e, t, r, n) {
  const i = Iu(e, t, r, n);
  if (i !== vo)
    return i ?? tb(e, t, { node: r, offset: n });
}
function cp(e, t, r) {
  const n = e.planContaining(t);
  if (n) return rb(e, n, t, r);
  const i = wr(t) && r >= t.getChildrenSize() && t.getLastChild(), s = i ? e.planContaining(i) : void 0;
  return s ? JP(e, s) ?? tb(e, s, void 0) : Qy(e, jt(t, r, e.viewOptions));
}
function JP(e, t) {
  const r = t.scratch.getEditorState().read(() => {
    const i = Te();
    return jt(i, i.getChildrenSize(), e.viewOptions);
  }), n = $u(
    t,
    Zo(e, t),
    mr(xr(r.jsonPath))
  );
  return n && fn(r, n);
}
function YP(e) {
  const t = tu(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = q();
  if (!N(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = cp(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = cp(e, o.getNode(), o.offset);
  if (a)
    return { start: s, end: a };
}
function nb(e, t, r) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && ut(i) ? XA(i, r.getMarker, r.viewOptions) : Mu(t, r.getMarker, r.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(Ce);
    return i && Rs(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(K);
  return n && Ns(n, r.getMarker, r.viewOptions)?.out;
}
function XP(e, t) {
  const r = qp({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = Te();
        t.forEach((i) => n.append(Ii(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const lp = "\0";
function ib(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), $(r) && ib(r.getChildren(), t);
  return t;
}
function QP(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(lp), a = ib(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(lp);
}
function Lu(e, t = []) {
  for (const r of e)
    K(r) && t.push(r), $(r) && Lu(r.getChildren(), t);
  return t;
}
function Oa(e, t, r, n, i, s, o) {
  const a = XP(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l, settledSide: u } = a.getEditorState().read(() => {
    const h = nb(e, Te().getChildren(), o.tier2);
    return {
      settledCount: ir(
        Te(),
        Vt(o.tier2.viewOptions)
      ).length,
      scratchFragment: h,
      settledSide: h && Um(h)
    };
  }), d = { kind: e, liveNodes: t, liveCut: n, scratch: a, scratchFragment: l, settledCount: c };
  if ((r?.sentinels.length ?? 0) === 0 && (u?.runs.length ?? 0) === 0)
    return { ...d, liveFragment: r, sentinelMap: [], settledOnlyRuns: [], pairedBefore: void 0 };
  const f = r && s && iy(r, s.live), p = f && Km(Fm(f, s.live), u ?? { runs: [], bytes: "" }, {
    partial: !0
  });
  return p ? { ...d, liveFragment: f, pairedBefore: void 0, ...p } : {
    ...d,
    liveFragment: r,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    pairedBefore: void 0
  };
}
function Du(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = Ny(e, t);
  return r ? {
    liveFragment: Au(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function Uu(e, t) {
  for (const r of e.noteGlyphRenames.values())
    $y(r, t);
}
function ZP(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = Du(t, i), a = Xs(e), c = /* @__PURE__ */ new Map();
  if (Qs([e], [a], c), Uu(r, c), !Pa(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && Zs(t, c, r.huskKeys);
  return Oa("note", [e], s, o, [a], l, n);
}
function e0(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = Du(t, i), a = e.map(Xs), c = /* @__PURE__ */ new Map();
  Qs(e, a, c), Uu(r, c), Lu(e).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => Pa(d, c, n.tier2, r.huskKeys, i)
  );
  const l = Ry(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const u = t && Zs(t, c, r.huskKeys);
  return Oa("para", e, s, o, l, u, n);
}
function t0(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = Du(t, n), o = Iy(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...Wi(e)];
  return Oa("chapter", a, i, s, o, void 0, r);
}
function r0(e, t, r, n, i, s) {
  const o = Xs(e), a = /* @__PURE__ */ new Map();
  Qs([e], [o], a), Uu(n, a), Lu([e]).filter((u) => n.noteScopes.has(u.getKey())).forEach(
    (u) => Pa(u, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const u of r) {
    const d = a.get(u.getKey());
    if (!d) continue;
    const f = d.siblings.indexOf(d.node);
    f < 0 || (Dy(d.siblings, f), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Zs(t, a, c);
  return Oa("para", [e], t, void 0, [o], l, i);
}
function n0(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function up(e) {
  return {
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (t) => t,
    settledToLiveTopIndex: (t) => ({ liveIndex: t, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e
  };
}
function dp(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function i0(e, t) {
  const r = ir(Te(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = dp(r[o]), c = a && e.get(a.getKey());
    if (!c) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((d) => d.getKey()));
    let u = 0;
    for (; o + u < r.length; ) {
      const d = dp(r[o + u]);
      if (!d || !l.has(d.getKey())) break;
      u += 1;
    }
    for (let d = 0; d < u; d += 1)
      n[o + d] = s;
    for (let d = 0; d < c.settledCount; d += 1)
      i.push({ liveIndex: o, plan: c, indexWithinScope: d });
    s += c.settledCount, o += u;
  }
  return { liveToSettled: n, settledToLive: i };
}
function fp(e) {
  const t = wy(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), up(e.tier2.viewOptions);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = Ly(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const h = f.liveNodes[0].getKey();
    n.set(h, f), f.liveNodes.forEach((g) => i.set(g.getKey(), f)), p && f.liveNodes.forEach((g) => s.set(g.getKey(), f));
  }, c = (f, p, h, g) => {
    o.add(f);
    const m = nb(p, h, e.tier2), T = QP(
      p,
      h,
      m?.text ?? "",
      e.tier2,
      t
    ), v = e.cache.entries.get(f);
    if (v?.signature === T) return v.plan;
    const S = g(m);
    return S ? e.cache.entries.set(f, { signature: T, plan: S }) : e.cache.entries.delete(f), S;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => ZP(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => e0(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...Wi(f)],
        (p) => t0(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!(re(p) || ut(p)) || n0(f, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(f), l.set(p.getKey(), h);
  }
  for (const [f, { para: p, husks: h }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (g) => r0(p, g, h, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0) return up(e.tier2.viewOptions);
  const { liveToSettled: u, settledToLive: d } = i0(
    s,
    Vt(e.tier2.viewOptions)
  );
  return {
    byFirstLiveKey: n,
    liveToSettledTopIndex: (f) => u[f] ?? f,
    settledToLiveTopIndex: (f) => d[f],
    planContaining: (f) => {
      for (let p = f; p; p = p.getParent()) {
        const h = i.get(p.getKey());
        if (h) return h;
      }
    },
    viewOptions: e.tier2.viewOptions
  };
}
function s0({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ue(), n = Q({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return B(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, ea(s, e) || o0(i, r, e);
  }, [r, e, t]), B(
    () => r.registerMutationListener(
      Ft,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = ol(r);
        pp(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: go(s) === go(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), B(() => {
    const i = (a) => a.read(
      () => new Set(
        Te().getChildren().filter(Fe).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (ol(r) || pp(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: go(a) === go(c)
      }));
    };
    return et(
      ...[Ot, kr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), B(
    () => r.registerCommand(
      gr,
      () => {
        const i = n.current;
        return i.phase === "idle" && d0(i, c0()), !1;
      },
      Mt
    ),
    [r]
  ), B(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(gr, void 0));
    };
    return et(
      r.registerMutationListener(Ct, i),
      r.registerMutationListener(ht, i)
    );
  }, [r]), B(() => {
    const i = () => g0(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function o0(e, t, r) {
  if (a0(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = ol(t);
  (!n || n === r.book) && t.update(() => sb(t, r.chapterNum, r.verseNum));
}
function a0(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ea(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function c0() {
  const e = q(), t = Fl(e);
  if (!t) return;
  const r = Fu(), n = tg(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Wl(t, e), { verseNum: o, verse: a } = Uv(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function ol(e) {
  return e.getEditorState().read(() => Fu()?.getCode() || void 0);
}
function Fu() {
  return Te().getChildren().find(st);
}
function pp(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && gc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || gc(e, t), e.phase = "navigating") : i && gc(e, t), r && r !== e.scrRef.book && cb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function gc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => sb(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function sb(e, t, r) {
  const n = q()?.clone();
  l0(t, r);
  const i = q();
  i && !(n && i.is(n)) && e.dispatchCommand(xl, void 0);
}
function l0(e, t) {
  const r = Fl(q()), n = Hl(r)?.getNumber(), i = tg(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (ag(n) ? ab(t, n) : parseInt(n, 10) === t))
    return;
  const o = Te().getChildren(), a = eg(o, e);
  if (!a) return;
  const c = Jx(o, a), l = zx(c, !0);
  Gx(c, l);
  let u;
  try {
    u = qv(c, t);
  } catch {
    return;
  }
  u && (re(u) ? !C(u.getFirstChild()) && Bi(u) || tr(u, 0) : u0(u));
}
function u0(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || me(n)) {
    tr(t, r);
    return;
  }
  const i = ha(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (C(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = $(n) && !K(n) ? ob(n) : void 0;
  s ? s.select(0, 0) : tr(t, r);
}
function ob(e) {
  const t = e.getFirstChild();
  if (C(t)) return t;
  if ($(t) && !K(t)) return ob(t);
}
function go(e) {
  return e.read(() => {
    const t = Te().getChildren().find(Fe);
    return `${Fu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function d0(e, t) {
  e.phase !== "navigating" && t && (f0(t, e.scrRef) || cb(e, p0(t, e.scrRef)));
}
function f0(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? ab(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function ab(e, t) {
  try {
    return Kl(e, t);
  } catch {
    return !1;
  }
}
function p0(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const h0 = 8;
function cb(e, t) {
  return ea(t, e.scrRef) || e.pendingEchoes.some((r) => ea(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > h0 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ea(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function g0(e) {
  e.phase = "idle";
}
function m0(e) {
  return st(e) ? `${e.__code}` : Ce(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : Hs(e) ? `${e.__marker} "${e.__number}"` : Bt(e) ? `${e.__caller}` : Qn(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : re(e) ? `${e.__marker}` : C(e) ? `"${e.__text}"${y0(e)}` : ke(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Oe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function y0(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ds]) : "";
}
function b0() {
  const [e] = ue();
  return /* @__PURE__ */ _(
    lk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: m0,
      editor: e
    }
  );
}
const lb = vp(null), hp = 4;
function k0({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Q(null), s = _p(lb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return B(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function T0({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = he(), [s, o] = he(), a = fe(
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
  }, l = De(() => ({ registerItem: a }), [a]);
  return B(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ _(lb.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function x0({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Q(null), c = Q(null), [l, u] = he(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return B(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: g } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + hp}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), B(() => {
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
  }, [a, c, l, o]), B(() => {
    const f = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: g } = p.getBoundingClientRect(), m = g + p.offsetHeight + hp;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Me(On, { children: [
    /* @__PURE__ */ Me(
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
    l && An(
      /* @__PURE__ */ _(T0, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const al = {
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
}, cl = {
  ...al,
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
function v0({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ _(
    x0,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + _0(t),
      buttonLabel: C0(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(al).map((n) => /* @__PURE__ */ Me(
        k0,
        {
          className: "item block-marker " + S0(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: al[n] })
          ]
        },
        n
      ))
    }
  );
}
function _0(e) {
  return e && e in cl ? e : "ban";
}
function C0(e) {
  return e && e in cl ? cl[e] : "No Style";
}
function S0(e) {
  return e ? "active dropdown-item-active" : "";
}
function gp() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const M0 = Vn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ue(), [o, a] = he(s), [c, l] = he(), [u, d] = he(!1), [f, p] = he(!1), h = fe(
    ({
      canUndo: g,
      canRedo: m,
      blockMarker: T,
      contextMarker: v
    }) => {
      d(g), p(m), l(T), n?.({
        canUndo: g,
        canRedo: m,
        blockMarker: T,
        contextMarker: v
      });
    },
    [n]
  );
  return B(() => s.registerCommand(
    gr,
    (g, m) => (a(m), !1),
    Ar
  ), [s]), /* @__PURE__ */ Me(On, { children: [
    /* @__PURE__ */ _(rm, { onStateChange: h }),
    /* @__PURE__ */ Me("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Ip, void 0);
          },
          title: Ao ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ _("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(Lp, void 0);
          },
          title: Ao ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(gp, {}),
      o === s && /* @__PURE__ */ Me(On, { children: [
        /* @__PURE__ */ _(
          v0,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ _(gp, {})
      ] }),
      /* @__PURE__ */ _("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), E0 = ka(), A0 = {}, P0 = {};
function O0() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function mp(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
const ub = Vn(function({
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
  const d = Q(null), f = Q(null), p = Q(null), h = Q(t), g = Q(!1), m = Q(void 0), T = Q(void 0), v = Q(void 0), S = Q({ entries: /* @__PURE__ */ new Map() }), w = Q(0), A = Q(!0), M = Q(void 0), E = Q(!1), [R, Y] = he(t), [H, ne] = he(0), [ce, le] = he(), {
    isReadonly: ye = !1,
    structureProtectionMode: qe = "off",
    hasExternalUI: Z = !1,
    hasSpellCheck: z = !1,
    textDirection: ie = "ltr",
    markerMenuTrigger: $e = "\\",
    view: at,
    nodes: Wt,
    debug: pe = !1,
    contextMenu: Ht,
    styleInfo: wt,
    markerSettleDelayMs: wa
  } = a ?? P0, sr = at ?? E0, ti = Os(sr) && (sr.markerMode !== "hidden" || !sr.hasSpacing || sr.hasGutterParaMarkers || sr.hasActiveTextFocusBox) ? {
    ...sr,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : sr, Hi = Q(ti);
  Nt(Hi.current, ti) || (Hi.current = ti);
  const se = Hi.current, ft = De(() => Wt ?? A0, [Wt]), eo = De(() => Ht, [Ht]), _e = De(
    () => Sv(wt ?? Fo),
    [wt]
  ), vr = Q(c);
  Nt(vr.current, c) || (vr.current = c);
  const X = vr.current, Xe = Os(se), be = ye || Xe, Vr = ti !== sr;
  B(() => {
    Xe && !ye && X?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Vr && X?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [Xe, ye, Vr, X]);
  const Wr = Q(null), or = De(() => {
    if (se.markerMode !== "editable") return;
    const O = wt ?? Fo;
    return {
      getContext: () => Wr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (U) => RA(
        O,
        U,
        ft.extraValidMarkers
      ),
      getEnterItems: (U) => qA(
        O,
        U,
        ft.extraValidMarkers
      ),
      apply: (U, j) => {
        const W = Wr.current;
        W && (j.trigger === "enter" ? W.splitParagraphWithMarker(U.marker) : W.applyMarkerMenuSelection(U, j));
      },
      commitTypedCloser: (U) => {
        Wr.current?.commitTypedCloser(U);
      }
    };
  }, [se, wt, ft.extraValidMarkers]), ri = (O) => {
    E.current || (E.current = !0, vr.current?.warn(
      `Editor: cannot ${O} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, ni = (O) => {
    if (Xe)
      throw new Error(
        `Cannot ${O} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Hr = (O) => {
    if (ni(O), be) throw new Error(`Cannot ${O} in readonly mode`);
  }, bn = De(
    () => [Ye, ...Xe ? oC : cu],
    [Xe]
  ), ar = De(
    () => ({
      namespace: "platformEditor",
      theme: { ...Nm, showCharMarkerTitles: se.showCharMarkerTitles },
      editable: !be,
      editorState: void 0,
      // Handling of errors during update
      onError(O) {
        throw O;
      },
      nodes: bn
    }),
    [be, bn, se.showCharMarkerTitles]
  );
  lo.initialize(X);
  function yt(O) {
    if (O !== void 0 && !tA(O, ft.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const Gt = fe(() => {
    const O = d.current;
    if (!O) return h.current;
    const U = () => {
      if (!g.current) return;
      const Cr = lo.deserializeEditorState(O.getEditorState(), se);
      Cr && (h.current = Cr, g.current = !1);
    }, j = Xa(O), W = T.current;
    if ((!j || j.size === 0) && !W)
      return U(), h.current;
    const de = O.getEditorState(), We = de.toJSON(), Je = de.read(
      () => CP(
        We,
        j ?? /* @__PURE__ */ new Set(),
        { viewOptions: se, getMarker: _e, logger: X },
        W,
        v.current
      )
    );
    return Je || (U(), h.current);
  }, [se, _e, X]), Jt = fe(() => {
    const O = d.current;
    if (!O) return;
    const U = {
      pendedKeys: Xa(O) ?? /* @__PURE__ */ new Set(),
      transientInput: T.current,
      lastKnownCaret: v.current,
      tier2: { viewOptions: se, getMarker: _e, logger: X },
      nodes: bn,
      cache: S.current
    };
    return ho(U) && U.cache.entries.clear(), U;
  }, [se, _e, X, bn]), Gr = fe(
    (O) => {
      const U = d.current, j = Jt();
      if (!(!U || !j))
        return ho(j) ? O : U.getEditorState().read(() => {
          const W = fp(j);
          return zP(j, W, O);
        });
    },
    [Jt]
  );
  B(() => (A.current = !0, () => {
    A.current = !1;
  }), []);
  const Jr = fe(
    (O, U) => O.read(() => {
      const j = Jt(), W = j && YP(fp(j));
      return !W && !Xe && N(q()) && X?.warn(
        `${U} refused: the selection could not be expressed against the document the host is reading`
      ), W;
    }),
    [Jt, Xe, X]
  ), Gi = fe(
    (O) => {
      if (!i) return;
      const U = d.current, j = Jt();
      w.current += 1;
      const W = w.current;
      if (!U || !j || ho(j)) {
        i(O);
        return;
      }
      queueMicrotask(() => {
        if (!A.current || W !== w.current || d.current !== U) return;
        const de = Jr(U, "onSelectionChange");
        W === w.current && i(de);
      });
    },
    [i, Jt, Jr]
  ), _r = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const O = d.current?.getRootElement();
      return !!O && O.ownerDocument.activeElement === O;
    },
    undo() {
      d.current?.dispatchCommand(Ip, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Lp, void 0);
    },
    cut() {
      Hr("cut"), d.current?.dispatchCommand(Rn, null);
    },
    copy() {
      d.current?.dispatchCommand(oa, null);
    },
    paste() {
      Hr("paste"), d.current && fu(d.current);
    },
    pastePlainText() {
      Hr("paste as plain text"), d.current && pu(d.current);
    },
    getUsj() {
      return Gt();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(My, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(O) {
      if (!O) {
        T.current = void 0;
        return;
      }
      const U = d.current?.getEditorState().read(() => {
        const j = q();
        return N(j) && j.isCollapsed() ? j.focus.key : void 0;
      });
      T.current = { input: O, nodeKey: U ?? v.current?.key };
    },
    setUsj(O) {
      if (!Nt(h.current, O)) {
        h.current = O, T.current = void 0;
        const U = Nt(R, O);
        Y(O), U && ne((j) => j + 1);
      }
    },
    applyUpdate(O, U = "remote") {
      if (Xe && U === "remote") {
        vr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      ni("apply an update"), d.current?.update(
        () => {
          U === "remote" && qn(vi), AC(O, se, ft, X);
        },
        { discrete: !0 }
      );
      const j = d.current?.getEditorState();
      if (!j) return;
      const W = lo.deserializeEditorState(j, se);
      if (W) {
        const de = !Nt(h.current, W);
        if (de && (h.current = W), de || !Nt(R, W)) {
          const We = Id(O, j, "apply");
          M.current = W, s?.(W, O, U, We);
        }
      }
    },
    replaceEmbedUpdate(O, U) {
      const j = d.current?.read(() => Xv(O, U));
      j ? this.applyUpdate(j) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${O}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (Xe) {
        ri("get the selection");
        return;
      }
      const O = d.current;
      if (!O) return;
      O.read(() => {
      });
      const U = Jt();
      return !U || ho(U) ? O.read(() => tu(se)) : Jr(O, "getSelection");
    },
    setSelection(O) {
      if (Xe) {
        ri("set the selection");
        return;
      }
      const U = Gr(O);
      if (!U) {
        X?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      d.current?.update(() => {
        const j = eu(U, se);
        j !== void 0 && (wn(j), (!Li().isEditable() || mp(j.anchor) && mp(j.focus)) && d.current?.dispatchCommand(gr, void 0));
      });
    },
    setAnnotation(O, U, j, W, de) {
      if (Xe) {
        ri("set an annotation");
        return;
      }
      let We, Je, Cr, Ji;
      typeof W == "function" || W === void 0 ? (We = W, Je = de) : (We = W.onClick, Je = W.onRemove, Cr = W.onMouseEnter, Ji = W.onMouseLeave);
      const Yi = Gr(O);
      if (!Yi) {
        X?.warn(
          `setAnnotation refused for ${U} "${j}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        Yi,
        dd(U),
        j,
        We,
        Je,
        Cr,
        Ji
      );
    },
    removeAnnotation(O, U) {
      f.current?.removeAnnotation(dd(O), U);
    },
    formatPara(O) {
      Hr("format a paragraph"), d.current?.update(() => {
        const U = q();
        if (!N(U)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        fk(U, () => Cs(O));
        const j = q();
        if (!N(j)) return;
        const W = /* @__PURE__ */ new Set();
        j.getNodes().forEach((de) => {
          const We = de.getTopLevelElement();
          re(We) && W.add(We);
        }), W.forEach((de) => dy(de, O, se));
      });
    },
    getElementByKey(O) {
      return d.current?.read(
        () => d.current?.getElementByKey(O) ?? void 0
      );
    },
    removeCharacterMarker(O) {
      if (be) throw new Error("Cannot remove character marker in readonly mode");
      yt(O);
      let U = !1;
      return d.current?.update(
        () => {
          const j = q();
          N(j) && (U = Mm(j, O, se));
        },
        { discrete: !0 }
      ), U;
    },
    replaceCharacterMarker(O, U) {
      if (be) throw new Error("Cannot replace character marker in readonly mode");
      yt(O), yt(U);
      let j = !1;
      return d.current?.update(
        () => {
          const W = q();
          N(W) && (j = pA(W, O, U));
        },
        { discrete: !0 }
      ), j;
    },
    extendCharacterMarker(O, U) {
      if (be) throw new Error("Cannot extend character marker in readonly mode");
      yt(O), U?.forEach(
        (W) => yt(W)
      );
      let j = !1;
      return d.current?.update(
        () => {
          const W = q();
          N(W) && (j = hA(
            W,
            O,
            U,
            se
          ));
        },
        { discrete: !0 }
      ), j;
    },
    insertMarker(O) {
      if (be) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!Hc(O, ft.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const U = Gc(
        O,
        m,
        se,
        ft,
        X,
        void 0,
        wt
      );
      return U.action({ editor: d.current, reference: r }), U.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!ye)
        return d.current?.getEditorState().read(() => w1());
    },
    applyMarkerMenuSelection(O, U) {
      if (ye) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (O.kind !== "closeTag" && !Hc(O.marker, ft.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let j;
      return d.current.update(() => {
        j = I1(O, U, r, {
          expandedNoteKeyRef: m,
          viewOptions: se,
          nodeOptions: ft,
          logger: c,
          styleInfo: wt
        });
      }), j;
    },
    splitParagraphWithMarker(O) {
      if (ye) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        yy(O, se);
      });
    },
    commitTypedMarker(O, U) {
      if (ye) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let j = !1;
      return d.current.update(() => {
        j = $1(O, U), j || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), j;
    },
    commitTypedCloser(O) {
      if (ye) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let U = !1;
      return d.current.update(() => {
        U = my(O), U || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), U;
    },
    insertNote(O, U, j) {
      Hr("insert a note");
      const W = j && Gr(j);
      if (j && !W) {
        X?.warn(
          `insertNote refused for \\${O}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.update(() => {
        const de = Ig(
          O,
          U,
          W,
          r,
          se,
          ft,
          X
        );
        de && !de.getIsCollapsed() && (m.current = de.getKey());
      });
    },
    selectNote(O) {
      d.current?.update(() => {
        const U = Jd(O);
        U && (nC(U, se), U.getIsCollapsed() || (m.current = U.getKey()));
      });
    },
    getNoteOps(O) {
      return d.current?.read(() => {
        const U = Jd(O);
        if (U)
          return Jl(U);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Wr.current = _r, ul(u, () => _r), B(() => {
    const O = d.current;
    if (O)
      return O.registerUpdateListener(({ editorState: U }) => {
        U.read(() => {
          const j = q();
          if (!N(j) || !j.isCollapsed()) return;
          const W = j.focus.getNode();
          C(W) && (v.current = { key: W.getKey(), offset: j.focus.offset });
        });
      });
  }, []), B(() => {
    const O = d.current;
    if (O)
      return O.registerUpdateListener(({ tags: U, dirtyElements: j, dirtyLeaves: W }) => {
        j.size === 0 && W.size === 0 || U.has(Tl) || U.has(vi) || id.some((de) => U.has(de)) && (g.current = !0);
      });
  }, []);
  const ii = fe(
    (O, U, j, W) => {
      if (Xe) return;
      const de = lo.deserializeEditorState(O, se);
      if (de) {
        const We = !Nt(h.current, de);
        if (We && (h.current = de), We || !Nt(R, de)) {
          const Je = Id(W, O);
          M.current = de, s?.(de, W, "local", Je);
        }
      }
    },
    [R, s, se, Xe]
  );
  B(() => {
    const O = d.current;
    if (!(!O || !s))
      return O.registerUpdateListener(({ tags: U, dirtyElements: j, dirtyLeaves: W }) => {
        !U.has(yl) && (j.size === 0 && W.size === 0 || U.has(vi) || !Xa(O)?.size) || queueMicrotask(() => {
          const de = Gt();
          !de || Nt(M.current, de) || (M.current = de, s(de, void 0, "local", void 0));
        });
      });
  }, [s, Gt]);
  const kn = fe(
    (O) => {
      le(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Me(Up, { initialConfig: ar, children: [
      /* @__PURE__ */ _(ES, { isEditable: !be }),
      /* @__PURE__ */ Me("div", { className: "editor-container", children: [
        Z ? /* @__PURE__ */ _(rm, { onStateChange: kn }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (be ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              M0,
              {
                ref: p,
                editorRef: Wr,
                isReadonly: be,
                onStateChange: kn
              }
            )
          }
        ),
        /* @__PURE__ */ Me("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(Kp, { editorRef: d }),
          /* @__PURE__ */ _(
            dk,
            {
              contentEditable: /* @__PURE__ */ _(
                Fp,
                {
                  className: `editor-input usfm ${R_(se).join(" ")}${se.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${se.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: z
                }
              ),
              placeholder: /* @__PURE__ */ _(O0, {}),
              ErrorBoundary: zp
            }
          ),
          Z && /* @__PURE__ */ _(MS, {}),
          /* @__PURE__ */ _(Bp, {}),
          r && n && /* @__PURE__ */ _(s0, { scrRef: r, onScrRefChange: n }),
          r && !Z && /* @__PURE__ */ _(
            XM,
            {
              trigger: $e,
              scrRef: r,
              contextMarker: ce,
              getMarkerAction: (O) => Gc(
                O,
                m,
                se,
                ft,
                X,
                void 0,
                wt
              ),
              editableHarness: or
            }
          ),
          /* @__PURE__ */ _(
            OS,
            {
              scripture: R,
              scriptureRef: h,
              nodeOptions: ft,
              editorAdaptor: ln,
              viewOptions: se,
              logger: X
            },
            H
          ),
          /* @__PURE__ */ _(YS, { onChange: Gi, viewOptions: se }),
          /* @__PURE__ */ _(
            MC,
            {
              onChange: ii,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: id
            }
          ),
          /* @__PURE__ */ _(kA, { viewOptions: se }),
          /* @__PURE__ */ _(CC, { ref: f, logger: X, viewOptions: se }),
          /* @__PURE__ */ _(eS, { viewOptions: se }),
          /* @__PURE__ */ _(hS, {}),
          /* @__PURE__ */ _(TS, {}),
          se?.markerMode !== "editable" && /* @__PURE__ */ _(xS, { logger: X }),
          /* @__PURE__ */ _(SS, { options: eo }),
          /* @__PURE__ */ _(PS, {}),
          /* @__PURE__ */ _(L1, {}),
          /* @__PURE__ */ _(
            fP,
            {
              viewOptions: se,
              getMarker: _e,
              logger: X,
              markerSettleDelayMs: wa
            }
          ),
          /* @__PURE__ */ _(
            bP,
            {
              styleInfo: wt,
              viewOptions: se,
              logger: X
            }
          ),
          /* @__PURE__ */ _(
            wS,
            {
              expandedNoteKeyRef: m,
              nodeOptions: ft,
              viewOptions: se,
              logger: X
            }
          ),
          /* @__PURE__ */ _(JS, {}),
          /* @__PURE__ */ _(JC, {}),
          /* @__PURE__ */ _(VC, {}),
          /* @__PURE__ */ _(SP, { viewOptions: se, logger: X }),
          /* @__PURE__ */ _(XS, {}),
          /* @__PURE__ */ _(DM, { structureProtectionMode: qe }),
          /* @__PURE__ */ _(UM, { textDirection: ie }),
          /* @__PURE__ */ _(KM, {}),
          /* @__PURE__ */ _(JM, {}),
          l
        ] }),
        pe && /* @__PURE__ */ _(b0, {})
      ] })
    ] }, se.verseLayout ?? "inline")
  );
}), IO = Vn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(ub, { ref: r, ...i });
});
function db() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ta(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? db() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function fb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? db() : r,
    quote: e,
    type: "thread"
  };
}
function yp(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function w0(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function mc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class N0 {
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
    this._comments = t, mc(this);
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
          const c = yp(a);
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
    this._comments = i, mc(this);
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
          const c = yp(a);
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
    return this._comments = n, mc(this), t.type === "comment" ? {
      index: s,
      markedComment: w0(t)
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
    return t !== null ? t.doc.get("comments", td) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new rd(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new td();
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
      Ek,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Mt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Ak) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const h = p.insert, g = p.retain, m = p.delete, T = u.parent, v = u === r ? void 0 : T instanceof rd && this._comments.find((S) => S.id === T.get("id"));
              if (Array.isArray(h)) {
                const S = f;
                h.slice().reverse().forEach((w) => {
                  const A = w.get("id"), E = w.get("type") === "thread" ? fb(
                    w.get("quote"),
                    w.get("comments").toArray().map(
                      (R) => ta(
                        R.get("content"),
                        R.get("author"),
                        R.get("id"),
                        R.get("timeStamp"),
                        R.get("deleted")
                      )
                    ),
                    A
                  ) : ta(
                    w.get("content"),
                    w.get("author"),
                    A,
                    w.get("timeStamp"),
                    w.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(E, v, S);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof m == "number")
                for (let S = 0; S < m; S++) {
                  const w = v === void 0 || v === !1 ? this._comments[f] : v.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(w, v);
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
function R0(e) {
  const [t, r] = he(e.getComments());
  return B(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function q0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Q(null);
  return B(() => {
    i.current !== null && i.current.focus();
  }, []), B(() => {
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
  }, [n, e]), /* @__PURE__ */ _("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Me("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function $0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return An(
    /* @__PURE__ */ _(q0, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function pb() {
  const [e, t] = he(null), r = fe(() => {
    t(null);
  }, []), n = De(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _($0, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = fe(
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
const I0 = {
  ...Nm,
  paragraph: "CommentEditorTheme__paragraph"
};
function L0(...e) {
  return e.filter(Boolean).join(" ");
}
function pn({
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
      className: L0(
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
function D0({
  className: e
}) {
  return /* @__PURE__ */ _(Fp, { className: e || "ContentEditable__root" });
}
function U0({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const bp = fl("INSERT_INLINE_COMMAND");
function F0({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Q(null), s = fe(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return B(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), $s(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ _("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ _("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ _("i", { className: "icon add-comment" }) }) });
}
function K0({ onEscape: e }) {
  const [t] = ue();
  return B(() => t.registerCommand(
    $p,
    (r) => e(r),
    xi
  ), [t, e]), null;
}
function hb({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(Up, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: I0
  }, children: /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      Ck,
      {
        contentEditable: /* @__PURE__ */ _(D0, { className: e }),
        placeholder: /* @__PURE__ */ _(U0, { children: s }),
        ErrorBoundary: zp
      }
    ),
    /* @__PURE__ */ _(_k, { onChange: n }),
    /* @__PURE__ */ _(Bp, {}),
    t !== !1 && /* @__PURE__ */ _(Tk, {}),
    /* @__PURE__ */ _(K0, { onEscape: r }),
    /* @__PURE__ */ _(xk, {}),
    i !== void 0 && /* @__PURE__ */ _(Kp, { editorRef: i })
  ] }) });
}
function gb(e, t) {
  return fe(
    (r, n) => {
      r.read(() => {
        e(Sk()), t(!Mk(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function z0({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Q(null), c = De(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Q(null), u = yb(), d = fe(() => {
    e.getEditorState().read(() => {
      const g = q();
      if (N(g)) {
        l.current = g.clone();
        const m = g.anchor, T = g.focus, v = pk(
          e,
          m.getNode(),
          m.offset,
          T.getNode(),
          T.offset
        ), S = a.current;
        if (v !== null && S !== null) {
          const { left: w, bottom: A, width: M } = v.getBoundingClientRect(), E = hk(e, v);
          let R = E.length === 1 ? w + M / 2 - 125 : w - 125;
          R < 10 && (R = 10), S.style.left = `${R}px`, S.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const Y = E.length, { container: H } = c, ne = c.elements, ce = ne.length;
          for (let le = 0; le < Y; le++) {
            const ye = E[le];
            let qe = ne[le];
            qe === void 0 && (qe = document.createElement("span"), ne[le] = qe, H.appendChild(qe));
            const z = `position:absolute;top:${ye.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${ye.left}px;height:${ye.height}px;width:${ye.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            qe.style.cssText = z;
          }
          for (let le = ce - 1; le >= Y; le--) {
            const ye = ne[le];
            H.removeChild(ye), ne.pop();
          }
        }
      }
    });
  }, [e, c]);
  $s(() => {
    d();
    const g = c.container, m = document.body;
    return m !== null ? (m.appendChild(g), () => {
      m.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), B(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        fb(g, [ta(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = gb(i, o);
  return /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      hb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ _(pn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ _(
        pn,
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
function B0({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Q(null), c = yb(), l = gb(i, o);
  return /* @__PURE__ */ Me(On, { children: [
    /* @__PURE__ */ _(
      hb,
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
      pn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(ta(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(ik, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function mb({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Me(On, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Me("div", { className: "Modal__content", children: [
      /* @__PURE__ */ _(
        pn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ _(
        pn,
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
function kp({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = he(0);
  B(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const d = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(d);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = pb();
  return /* @__PURE__ */ Me("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Me("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Me(On, { children: [
      /* @__PURE__ */ _(
        pn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ _(
              mb,
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
function j0({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ue(), [a, c] = he(0), [l, u] = pb(), d = De(
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
  }, [a]), /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Me(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const m = document.activeElement;
            o.update(
              () => {
                const T = Array.from(g)[0], v = J(T);
                ke(v) && v.selectStart();
              },
              {
                onUpdate() {
                  m !== null && m.focus();
                }
              }
            );
          }
        },
        className: `CommentPlugin_CommentsPanel_List_Thread ${s.has(p) ? "interactive" : ""} ${e.indexOf(p) === -1 ? "" : "active"}`,
        children: [
          /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Me("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ _("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ _(
              pn,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ _(
                    mb,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: g
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ _("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((g) => /* @__PURE__ */ _(
            kp,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
            B0,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ _(
      kp,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function V0({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Q(null), o = r.length === 0;
  return /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ _("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ _(
      j0,
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
function yb() {
  const e = jp(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function W0({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = jp(), [a] = ue(), c = De(() => {
    const R = new N0(a, s);
    return r && R.registerOnChange(r), t?.(R), R;
  }, [a, s, r, t]), l = R0(c), u = De(() => /* @__PURE__ */ new Map(), []), [d, f] = he(), [p, h] = he([]), [g, m] = he(!1), [T, v] = he(!1), { yjsDocMap: S } = o;
  B(() => {
    if (e) {
      const R = e("comments", S);
      return c.registerCollaboration(R);
    }
    return () => {
    };
  }, [c, e, S]);
  const w = fe(() => {
    a.update(() => {
      const R = q();
      R !== null && (R.dirty = !0);
    }), m(!1);
  }, [a]), A = fe(
    (R, Y) => {
      if (R.type === "comment") {
        const H = c.deleteCommentOrThread(R, Y);
        if (!H)
          return;
        const { markedComment: ne, index: ce } = H;
        c.addComment(ne, Y, ce);
      } else {
        c.deleteCommentOrThread(R);
        const H = Y !== void 0 ? Y.id : R.id, ne = u.get(H);
        ne !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ce of ne) {
              const le = J(ce);
              ke(le) && (le.deleteID(rn, H), le.hasNoIDsForEveryType() && Ro(le));
            }
          });
        });
      }
    },
    [c, a, u]
  ), M = fe(
    (R, Y, H, ne) => {
      c.addComment(R, H), Y && (a.update(() => {
        N(ne) && Sl(ne, rn, R.id);
      }), m(!1));
    },
    [c, a]
  );
  B(() => {
    const R = [];
    let Y;
    for (const H of p) {
      const ne = u.get(H);
      if (ne !== void 0)
        for (const ce of ne) {
          const le = a.getElementByKey(ce);
          le !== null && (le.classList.add("selected"), R.push(le), Y = window.setTimeout(() => {
            v(!0);
          }, 0));
        }
    }
    return () => {
      Y !== void 0 && window.clearTimeout(Y);
      for (const H of R)
        H.classList.remove("selected");
    };
  }, [p, a, u]), B(() => {
    if (!a.hasNodes([Ye]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const R = /* @__PURE__ */ new Map();
    return et(
      bl(
        a,
        Ye,
        (Y) => In(Y.getTypedIDs()),
        (Y, H) => {
          for (const [ne, ce] of Object.entries(Y.getTypedIDs()))
            ce.forEach((le) => {
              H.addID(ne, le);
            });
        }
      ),
      a.registerMutationListener(
        Ye,
        (Y) => {
          a.getEditorState().read(() => {
            for (const [H, ne] of Y) {
              const ce = J(H);
              let le = [];
              ne === "destroyed" ? le = R.get(H) ?? [] : ke(ce) && (le = ce.getTypedIDs()[rn] ?? []);
              for (const ye of le) {
                let qe = u.get(ye);
                R.set(H, le), ne === "destroyed" ? qe !== void 0 && (qe.delete(H), qe.size === 0 && u.delete(ye)) : (qe === void 0 && (qe = /* @__PURE__ */ new Set(), u.set(ye, qe)), qe.has(H) || qe.add(H));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: Y, tags: H }) => {
        Y.read(() => {
          const ne = q();
          let ce = !1, le = !1;
          if (N(ne)) {
            const ye = ne.anchor.getNode();
            if (C(ye)) {
              const qe = hT(ye, rn, ne.anchor.offset) ?? [];
              qe !== null && (h(qe), ce = !0), ne.isCollapsed() || (f(ye.getKey()), le = !0);
            }
          }
          ce || h((ye) => ye.length === 0 ? ye : []), le || f(null), !H.has("collaboration") && N(ne) && m(!1);
        });
      }),
      a.registerCommand(
        bp,
        () => {
          const Y = window.getSelection();
          return Y !== null && Y.removeAllRanges(), m(!0), !0;
        },
        Nn
      )
    );
  }, [a, u]);
  const E = () => {
    a.dispatchCommand(bp, void 0);
  };
  return /* @__PURE__ */ Me(On, { children: [
    g && An(
      /* @__PURE__ */ _(
        z0,
        {
          editor: a,
          cancelAddComment: w,
          submitAddComment: M
        }
      ),
      document.body
    ),
    d != null && !g && An(
      /* @__PURE__ */ _(
        F0,
        {
          anchorKey: d,
          editor: a,
          showComments: T,
          onAddComment: E
        }
      ),
      document.body
    ),
    n !== null && An(
      /* @__PURE__ */ _(
        pn,
        {
          className: `CommentPlugin_ShowCommentsButton ${T ? "active" : ""}`,
          onClick: () => v(!T),
          title: T ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    T && An(
      /* @__PURE__ */ _(
        V0,
        {
          comments: l,
          submitAddComment: M,
          deleteCommentOrThread: A,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function H0() {
  const e = Q(void 0), t = fe((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function G0(e, t) {
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
function J0(e, t) {
  B(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      G0(r, t);
    };
  }, [t, e]);
}
const LO = Vn(function(t, r) {
  const n = Q(null), i = Q(!0), s = Q(null), [o, a] = he(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, m = (h ?? !1) || Os(g), [T, v] = H0();
  J0(f, T), B(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(A), p || console.warn(A);
    }
  }, [p]), ul(r, () => ({
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
    setTransientInput(A) {
      n.current?.setTransientInput(A);
    },
    setUsj(A) {
      n.current?.setUsj(A);
    },
    applyUpdate(A, M) {
      n.current?.applyUpdate(A, M);
    },
    replaceEmbedUpdate(A, M) {
      return n.current?.replaceEmbedUpdate(A, M);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(A) {
      n.current?.setSelection(A);
    },
    setAnnotation(A, M, E, R, Y) {
      typeof R == "function" || R === void 0 ? n.current?.setAnnotation(A, M, E, R, Y) : n.current?.setAnnotation(A, M, E, R);
    },
    removeAnnotation(A, M) {
      n.current?.removeAnnotation(A, M);
    },
    formatPara(A) {
      n.current?.formatPara(A);
    },
    getElementByKey(A) {
      return n.current?.getElementByKey(A);
    },
    removeCharacterMarker(A) {
      return n.current?.removeCharacterMarker(A) ?? !1;
    },
    replaceCharacterMarker(A, M) {
      return n.current?.replaceCharacterMarker(A, M) ?? !1;
    },
    extendCharacterMarker(A, M) {
      return n.current?.extendCharacterMarker(A, M) ?? !1;
    },
    insertMarker(A) {
      return n.current?.insertMarker(A);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(A, M) {
      return n.current?.applyMarkerMenuSelection(A, M);
    },
    splitParagraphWithMarker(A) {
      n.current?.splitParagraphWithMarker(A);
    },
    commitTypedMarker(A, M) {
      return n.current?.commitTypedMarker(A, M) ?? !1;
    },
    commitTypedCloser(A) {
      return n.current?.commitTypedCloser(A) ?? !1;
    },
    insertNote(A, M, E) {
      n.current?.insertNote(A, M, E);
    },
    selectNote(A) {
      n.current?.selectNote(A);
    },
    getNoteOps(A) {
      return n.current?.getNoteOps(A);
    },
    setComments(A) {
      T.current?.setComments(A), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const S = fe(
    (A, M, E, R) => {
      if (!u) return;
      const Y = T.current?.getComments();
      u(A, Y, M, E, R);
    },
    [T, u]
  ), w = fe(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = T.current?.getComments();
    l(A);
  }, [T, i, l]);
  return B(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(vk, { children: /* @__PURE__ */ Me(ub, { ref: n, onUsjChange: S, ...f, children: [
    /* @__PURE__ */ _(
      W0,
      {
        setCommentStore: v,
        onChange: w,
        showCommentsContainerRef: m ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ _("div", { ref: s, className: "comment-container" })
  ] }) });
});
function En(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function bb(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function Y0(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const X0 = /^[#\w().,%/\s-]+$/;
function Mr(e) {
  return e != null;
}
const Q0 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, Z0 = {
  left: "right",
  right: "left"
}, ll = ".editor-input.usfm", eO = /^[\w.#[\]="':()>+~*,\s-]+$/;
function tO(e) {
  return eO.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${ll}".`
  ), ll);
}
function rO(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${bb(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (X0.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Mr(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Mr(t.firstLineIndent) && i.push(`text-indent: ${En(t.firstLineIndent * 20 * r)}vw`), Mr(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${En(t.leftMargin * 20 * r)}vw`), Mr(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${En(t.rightMargin * 20 * r)}vw`
  ), Mr(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${En(t.spaceBefore * r)}pt`), Mr(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${En(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = Q0[n ? Z0[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const Tp = { c: 150, ca: 133, cp: 150 };
function xp(e, t) {
  return e && Mr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function nO(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Mr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = xp(e.markers.c, Tp.c);
  return ["ca", "cp"].map((i) => {
    const s = xp(
      e.markers[i],
      Tp[i]
    ), o = En(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function DO(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = ll } = t, s = tO(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${bb(e.defaultFont)}"`), Mr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${En(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = rO(c, l, r, n);
    u.length > 0 && o.push(`${s} .usfm_${Y0(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...nO(e, s)), o.join(`
`);
}
export {
  wg as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  IO as Editorial,
  Oo as GENERATOR_NOTE_CALLER,
  Wp as HIDDEN_NOTE_CALLER,
  LO as Marginal,
  b as MarkerType,
  Pg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Og as STANDARD_VIEW_MODE,
  Fo as defaultStyleInfo,
  $O as directionToNames,
  gC as filterAndRankItems,
  DO as generateUsjCss,
  RO as getDefaultViewMode,
  ka as getDefaultViewOptions,
  qA as getEnterMenuItems,
  RA as getMarkerMenuItems,
  qO as getViewMode,
  Ng as getViewOptions,
  Os as isBlockVerseLayout,
  en as isInsertEmbedOpOfType,
  P_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
