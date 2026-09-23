import { jsx as v, jsxs as Me, Fragment as An } from "react/jsx-runtime";
import { forwardRef as Vn, useState as he, useRef as Q, useCallback as fe, useEffect as B, useMemo as De, memo as _b, createContext as mp, useContext as yp, Children as Cb, isValidElement as Sb, cloneElement as Mb, useImperativeHandle as al, useLayoutEffect as qs } from "react";
import { assertSafeKey as He, isValidBookCode as Eb, MARKER_OBJECT_PROPS as Ab, USJ_VERSION as Mr, USJ_TYPE as Er, isUsjClosingMarkerLocation as xo, isUsjTextContentLocation as $s, indexesFromUsjJsonPath as un, isUsjPropertyValueLocation as fc, isUsjClosingAttributeMarkerLocation as Hu, isUsjAttributeKeyLocation as Gu, isUsjAttributeMarkerLocation as Pb, isUsjMarkerLocation as bp, getUsjDocumentLocationTypeName as wb, usjJsonPathFromIndexes as It, EMPTY_USJ as kp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as je, $parseSerializedNode as Ii, createCommand as cl, DecoratorNode as Is, ElementNode as tr, isHTMLElement as Wn, TextNode as Be, $isRangeSelection as O, $isElementNode as $, $isTextNode as C, createState as Yo, $getState as te, ParagraphNode as ll, $isRootNode as Ar, $createTextNode as Te, $getSelection as R, $setState as kt, $getCommonAncestor as Ob, $isLineBreakNode as Xo, NODE_STATE_KEY as Ls, $getEditor as Li, $hasUpdateTag as Nb, $getNodeByKey as Y, $getRoot as xe, $createRangeSelection as Qo, $createPoint as Ju, $setSelection as Pn, $getCharacterOffsets as Tp, KEY_DOWN_COMMAND as qr, COMMAND_PRIORITY_HIGH as Ue, HISTORY_MERGE_TAG as xp, CLICK_COMMAND as Zo, COMMAND_PRIORITY_EDITOR as wn, isDOMNode as vp, $getNearestNodeFromDOMNode as Ds, CONTROLLED_TEXT_INSERTION_COMMAND as ul, PASTE_COMMAND as Cr, COMMAND_PRIORITY_CRITICAL as Sr, CUT_COMMAND as On, DROP_COMMAND as dl, DELETE_CHARACTER_COMMAND as Rb, DELETE_WORD_COMMAND as qb, DELETE_LINE_COMMAND as $b, $isDecoratorNode as _p, COPY_COMMAND as ea, COMMAND_PRIORITY_NORMAL as xi, SELECTION_CHANGE_COMMAND as hr, BLUR_COMMAND as fl, $addUpdateTag as Nn, SKIP_DOM_SELECTION_TAG as Ib, CLEAR_HISTORY_COMMAND as Lb, COMMAND_PRIORITY_LOW as Mt, $getPreviousSelection as Db, $isRootOrShadowRoot as Ub, CAN_UNDO_COMMAND as Fb, CAN_REDO_COMMAND as Kb, $isNodeSelection as Cp, DRAGSTART_COMMAND as zb, $createNodeSelection as Sp, getDOMSelectionFromTarget as Bb, $onUpdate as jb, KEY_ENTER_COMMAND as Mp, LineBreakNode as Ep, $copyNode as Vb, FOCUS_COMMAND as Wb, createEditor as Ap, KEY_ESCAPE_COMMAND as Pp, INSERT_PARAGRAPH_COMMAND as vo, HISTORIC_TAG as pl, UNDO_COMMAND as wp, REDO_COMMAND as Op, CLEAR_EDITOR_COMMAND as Hb } from "lexical";
import { addClassNamesToElement as ci, removeClassNamesFromElement as $a, $findMatchingParent as it, $dfsIterator as Np, $dfs as Di, mergeRegister as et, registerNestedElementResolver as hl, $unwrapNode as pc, IS_APPLE as _o } from "@lexical/utils";
import { useLexicalNodeSelection as Gb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Ot } from "fast-equals";
import cs from "quill-delta";
import { useLexicalComposerContext as ue } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as Jb, $getHtmlContent as Yb, $getLexicalContent as Xb } from "@lexical/clipboard";
import { TreeView as Qb } from "@lexical/react/LexicalTreeView";
import * as Zb from "react-dom";
import { createPortal as Mn } from "react-dom";
import { LexicalComposer as Rp } from "@lexical/react/LexicalComposer";
import { ContentEditable as qp } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as $p } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Ip } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Lp } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as ek } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as tk, createDOMRange as rk, createRectsFromDOMRange as nk } from "@lexical/selection";
import { autoUpdate as ik, computePosition as sk, shift as ok, flip as ak } from "@floating-ui/dom";
import { $generateNodesFromDOM as ck } from "@lexical/html";
import { AutoFocusPlugin as lk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as uk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Dp, LexicalCollaboration as dk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as fk } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as pk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as hk, $isRootTextContentEmpty as gk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as mk } from "@lexical/yjs";
import { Array as Yu, Map as Xu, YArrayEvent as yk } from "yjs";
const Ia = (e) => je(Ii(e)), bk = {
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
function Up(e) {
  return bk[e];
}
const I = " ", Co = "​", Ut = I, gl = `${I}|`, ur = "p", So = "+", Fp = "-", Us = "immutable-note-caller", Mo = "chapter", hc = "verse", Qu = "invalid", kk = "text-spacing", Tk = "formatted-font", xk = "marker-", ml = "external-usj-mutation", vk = "selection-change", ks = "cursor-change", yl = cl("APP_PLACED_CARET_COMMAND"), gc = "annotation-change", vi = "delta-change", Kp = "marker-settle", Zu = [
  ml,
  vk,
  ks,
  gc,
  vi
], Rn = "zmsc-s", _i = "zmsc-e", _k = [Rn, _i], Ck = [
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
  Rn,
  _i
], zp = 1, bl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Sk = bl.filter((e) => e !== "sid" && e !== "eid");
class Qt extends Is {
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
    return new Qt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return jp().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ck.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: zp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Bp(e) {
  return _k.includes(e);
}
function jp(e, t, r, n, i) {
  return je(new Qt(e, t, r, n, void 0, i));
}
function Pe(e) {
  return e instanceof Qt;
}
const kl = "f", Mk = [
  // Footnote
  kl,
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
const Ek = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Vp = 1;
class Ne extends tr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = kl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (ls(t) === "crossref" ? Fp : So), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Pk(t) ? {
        conversion: Ak,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Tl().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Mk.includes(t) || (r?.includes(t) ?? !1));
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
      version: Vp
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
function Ak(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Tl(t, r, n) };
}
function Tl(e, t, r, n, i) {
  return je(new Ne(e, t, r, n, i));
}
function Pk(e) {
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
const mc = {
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
}, kn = {
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
}, ed = {
  p: { children: kn },
  q: { children: kn },
  q1: { children: kn },
  q2: { children: kn },
  q3: { children: kn },
  q4: { children: kn },
  b: { children: kn },
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
function dr(e) {
  const t = Object.hasOwn(mc, e) ? mc[e] : void 0, r = Object.hasOwn(ed, e) ? ed[e] : void 0;
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
const Wp = "v", Hp = "c", Tn = "fig", td = "tr", yc = "esb", Gp = "esbe", wk = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Ok = {
  "": "start",
  c: "center",
  r: "end"
};
function Nk(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function rd(e) {
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
const Rk = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function qk(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Co && s + 1 < e.length && rd(e[s + 1]) || (rd(o) ? (r || (i = t.length, t += o), r = !0) : Rk.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function $k(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Ik(e, t) {
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
const Lk = /^(?:qt[1-5]?|ts)-[se]$/;
function ta(e) {
  return Lk.test(e) || Bp(e);
}
function La(e, t) {
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
function Dk(e, t, r) {
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
      const y = e.indexOf("\\", i), m = y === -1 ? e.length : y;
      a(qk(e.slice(i, m))), i = m;
      continue;
    }
    const c = i, { name: l, next: d } = Ik(e, i + 1);
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
    if (l === Wp) {
      const { word: y, next: m } = La(e, i);
      i = m, n.push({ kind: "verse", number: y });
      continue;
    }
    if (l === Hp) {
      const { word: y, next: m } = La(e, i);
      i = m, s = void 0, n.push({ kind: "chapter", number: y });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === b.Note || h === void 0 && Ne.isValidMarker(l)) {
      const { word: y, next: m } = La(e, i);
      i = m, s = l, n.push({ kind: "note", marker: l, caller: y || "+" });
      continue;
    }
    if (h === b.Milestone || h === void 0 && ta(l)) {
      const y = Wk(e, c, l, i);
      if (y)
        n.push(y.token), y.ejectedText && o(y.ejectedText), i = y.next;
      else {
        const m = e.indexOf("\\", i), T = m === -1 ? e.length : m;
        o(e.slice(c, T)), i = T;
      }
      continue;
    }
    h === b.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : h === b.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Eo(p) ? (u(), Eo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === yc || l === Gp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const nd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Eo(e) {
  return Object.hasOwn(nd, e) ? nd[e] : void 0;
}
function Uk(e) {
  return Eo(e) !== void 0;
}
const Fk = /([-\w]+)\s*=\s*"(.*?)"/g, Kk = /[\s\u200B]*[\n\r][\s\u200B]*/g, Jp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Fs(e) {
  return Jp[e];
}
const zk = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Bk(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ra(e, t, r = Jp[t]) {
  const n = e.replace(Kk, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Fk)];
  if (s.length > 0) {
    if (!Bk(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      zk.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Ks(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function jk(e) {
  const t = $r(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Vk(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ra(e.slice(n + 1, i), r, Ks(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Wk(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ra(s.slice(o + 1), r, Ks(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Vk(e, i + 2, r);
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
`, " ").replaceAll("~", I);
}
function xn(e) {
  return e.content || (e.content = []), e.content;
}
function $r(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d;
  const u = () => d ? xn(d) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? xn(o[o.length - 1].object) : xn(s);
    if (o.length > 0)
      return xn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return u();
      i = { type: "para", marker: ur, content: [] }, u().push(i);
    }
    return xn(i);
  }, h = (Z) => {
    const z = p();
    typeof Z == "string" && typeof z[z.length - 1] == "string" ? z[z.length - 1] = z[z.length - 1] + Z : z.push(Z);
  }, y = (Z) => {
    for (let z = Z; z < o.length; z += 1) {
      const ie = o[z].object;
      ie.closed = "false";
    }
  }, m = () => {
    y(0), o.length = 0;
  }, T = (Z) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, Z || (s.closed = "false"), s = void 0);
  }, _ = () => {
    c = void 0, l = void 0;
  }, E = (Z) => {
    d && (Z || (d.closed = "false"), d = void 0);
  };
  let N, A = "", S;
  const M = () => {
    A && h(vr(A)), A = "";
  }, q = (Z = !1) => {
    N?.type === "sidebar" ? A = "" : Z && A.endsWith(`
`) && (A = A.slice(0, -1)), N = void 0, M();
  }, J = () => {
    if (!S)
      return;
    const Z = { type: "char", marker: S.marker, content: [] };
    S.value && (Z.content = [vr(S.value)]), p().push(Z), o.push({ object: Z }), S = void 0;
  }, H = (Z, z) => {
    f = !1, _(), m(), T(!1), i = { type: "para", marker: Z, content: [] }, z && (i.content = [vr(z)]), u().push(i);
  }, ne = () => {
    S && (H(S.marker, S.value), S = void 0);
  };
  let ce;
  const le = () => {
    if (ce) {
      if (ce.shape === "para")
        H(Tn, ce.value);
      else {
        const Z = { type: "char", marker: Tn, content: [] };
        ce.value && (Z.content = [vr(ce.value)]), p().push(Z), o.push({ object: Z });
      }
      ce = void 0;
    }
  }, ye = Dk(e, t?.getMarker ?? dr, n);
  for (let Z = 0; Z < ye.length; Z++) {
    const z = ye[Z];
    if (S) {
      if (z.kind === "text") {
        S.value += z.text;
        continue;
      }
      if (S.shape === "char" && z.kind === "end" && z.marker.replace(/^\+/, "") === S.marker) {
        if (S.value.trim() === "") {
          p().push({ type: "char", marker: S.marker, content: [] }), S = void 0, q();
          continue;
        }
        Object.assign(S.target, {
          [S.attrName]: vr(S.value.trim())
        });
        const ie = S.marker;
        if (S = void 0, ie === "ca") {
          const $e = ye[Z + 1];
          $e?.kind === "text" && /^[\s\u200B]*$/.test($e.text) && Z++;
        }
        continue;
      }
      if (S.shape === "para" && (z.kind === "para" || z.kind === "chapter")) {
        const ie = S.value.replace(/[\s\u200B]+$/, "");
        ie === "" ? (H(S.marker), S = void 0) : (Object.assign(S.target, { [S.attrName]: vr(ie) }), S = void 0);
      } else {
        N = void 0, (z.kind === "para" || z.kind === "chapter") && S.value.endsWith(`
`) && (S.value = S.value.slice(0, -1)), S.shape === "para" ? ne() : J(), Z--;
        continue;
      }
    }
    if (ce) {
      if (z.kind === "text" || z.kind === "optbreak") {
        ce.value += z.kind === "text" ? z.text : "//";
        continue;
      }
      if (z.kind === "end" && z.marker.replace(/^\+/, "") === Tn) {
        const ie = ce.value.indexOf("|"), $e = ie >= 0 ? ra(ce.value.slice(ie + 1), Tn) : void 0;
        if ($e) {
          const at = {};
          for (const [Vt, wt] of Object.entries($e))
            at[Vt === "src" ? "file" : Vt] = wt;
          const jt = {
            type: "figure",
            marker: Tn,
            ...at
          }, pe = ce.value.slice(0, ie);
          pe && (jt.content = [vr(pe)]), h(jt), ce = void 0;
          continue;
        }
      }
      le(), Z--;
      continue;
    }
    if (N)
      if (z.kind === "text") {
        if (z.text.includes(`
`) && /^[\s\u200B]*$/.test(z.text)) {
          A += z.text;
          continue;
        }
        q();
      } else if (z.kind === "charOpen" || z.kind === "para") {
        const ie = z.kind === "para" || !z.isNested ? Eo(z.marker) : void 0;
        if (ie && ie.targetTypes.includes(N.type)) {
          A = "", S = {
            target: N,
            attrName: ie.attrName,
            marker: z.marker,
            shape: ie.shape,
            value: ""
          };
          continue;
        }
        q(z.kind === "para");
      } else
        q(z.kind === "chapter");
    if (!s && !n && (z.kind === "charOpen" && !z.isNested && z.marker === Tn || z.kind === "para" && z.marker === Tn)) {
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
        ie && h(vr(ie));
        break;
      }
      case "para": {
        const ie = !s && !n;
        if (ie && z.marker === td) {
          m(), c || (c = { type: "table", content: [] }, u().push(c)), l = { type: "table:row", marker: td, content: [] }, xn(c).push(l), i = l, f = !1;
          break;
        }
        if (ie && l) {
          const $e = wk.exec(z.marker);
          if ($e && Nk($e)) {
            m();
            const [, at, jt, pe] = $e, Vt = {
              type: "table:cell",
              marker: pe ? z.marker.slice(0, z.marker.indexOf("-")) : z.marker,
              align: Ok[at],
              content: []
            };
            pe && (Vt.colspan = String(Number(pe) + 1 - Number(jt))), xn(l).push(Vt), i = Vt;
            break;
          }
        }
        if (_(), !n && z.marker === yc) {
          m(), T(!1), E(!1), d = { type: "sidebar", marker: yc, content: [] }, r.push(d), i = void 0, N = d, f = !1;
          break;
        }
        if (z.marker === Gp && d) {
          m(), T(!1), E(!0), i = void 0;
          break;
        }
        H(z.marker);
        break;
      }
      case "verse": {
        T(!1);
        const ie = { type: "verse", marker: Wp, number: z.number };
        h(ie), N = ie;
        break;
      }
      case "chapter": {
        m(), T(!1), _(), E(!1), i = void 0;
        const ie = {
          type: "chapter",
          marker: Hp,
          number: z.number
        };
        r.push(ie), N = ie, f = !0;
        break;
      }
      case "note": {
        T(!1);
        const ie = p();
        s = { type: "note", marker: z.marker, caller: z.caller, content: [] }, a = o.length, ie.push(s), N = s;
        break;
      }
      case "charOpen": {
        if (!z.isNested) {
          const at = s ? a : 0;
          y(at), o.length = at;
        }
        const ie = p(), $e = { type: "char", marker: z.marker, content: [] };
        ie.push($e), o.push({ object: $e });
        break;
      }
      case "end": {
        const ie = z.marker.replace(/^\+/, ""), $e = s ? a : 0, at = o.findLastIndex((jt, pe) => pe >= $e && jt.object.marker === ie);
        at >= 0 ? (Hk(o[at].object), y(at + 1), o.length = at) : s && s.marker === ie ? T(!0) : (y($e), o.length = $e, h({ type: "unmatched", marker: `${z.marker}*` }));
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
  if (ce && le(), S)
    if (S.shape === "para") {
      const Z = S.value.replace(/[\s\u200B]+$/, "");
      Z === "" ? H(S.marker) : Object.assign(S.target, { [S.attrName]: vr(Z) }), S = void 0;
    } else
      S.value.endsWith(`
`) && (S.value = S.value.slice(0, -1)), J();
  m(), T(!1), E(!1);
  const qe = (Z) => {
    for (const z of Z)
      typeof z != "string" && z.content && (qe(z.content), z.content.length === 0 && delete z.content);
  };
  return qe(r), r;
}
function Hk(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ra(i.slice(s + 1), e.marker ?? "");
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
function Et(e) {
  return " " + e + I;
}
const Gk = 1;
class gr extends Be {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Cn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new gr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || Cn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Cn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Cn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Cn(r.__marker, r.__markerSyntax, t), r;
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
      version: Gk
    };
  }
}
function lt(e, t, r) {
  return je(new gr(e, t, void 0, r));
}
function P(e) {
  return e instanceof gr;
}
function zs(e) {
  return e?.type === gr.getType();
}
function dn(e) {
  return e.getTextContent() === Cn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Jk(e) {
  e.setTextContent(Cn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Cn(e, t, r = !1) {
  return t === "closing" ? Ve(e, r) : t === "selfClosing" ? Ve("") : Ee(e, r);
}
const Xr = "internal-comment", Yk = [Xr], Yp = Object.freeze({}), bc = Object.freeze({}), kc = Object.freeze({}), Tc = Object.freeze({}), xc = Object.freeze({}), Xk = 1, li = /* @__PURE__ */ new Map(), es = /* @__PURE__ */ new Map(), ui = /* @__PURE__ */ new Map(), di = /* @__PURE__ */ new Map();
class Ye extends tr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Yp, r, n, i, s, o) {
    super(o), this.__typedIDs = oo(t), this.__typedOnClicks = Da(r), this.__typedOnRemoves = Ua(n), this.__typedOnMouseEnters = Fa(i), this.__typedOnMouseLeaves = Ka(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = oo(t.__typedIDs), n = Da(t.__typedOnClicks), i = Ua(t.__typedOnRemoves), s = Fa(t.__typedOnMouseEnters), o = Ka(t.__typedOnMouseLeaves);
    return new Ye(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Yk.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return qn().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Xk
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      ci(n, vn(t.theme.typedMark, a)), c.length > 1 && ci(n, vn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        ci(n, vn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = vn(n.theme.typedMark, s), u = vn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && ci(r, d) : l === 0 && $a(r, d), c === 1 ? l === 2 && ci(r, u) : l === 1 && $a(r, u));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || $a(r, vn("annotationId", h));
      for (const h of a)
        f.has(h) || ci(r, vn("annotationId", h));
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
    const r = this.getWritable(), n = oo(r.__typedIDs);
    r.__typedIDs = oo(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ao(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Da(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ke(t) ? li.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ua(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ke(t) ? es.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Fa(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ke(t) ? ui.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Ka(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ao(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = qn(this.__typedIDs, this.getTypedOnClicks());
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
    if (!O(r) || n === "html")
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === bc) {
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
    const i = Wr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Wr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === bc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === kc) {
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
    const i = Wr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Wr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === kc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Tc) {
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
    const i = Wr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Wr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Tc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === xc) {
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
    const i = Wr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Wr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === xc) {
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
    const i = Qk(t, r);
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
    for (; ke(t) && sd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; ke(r) && sd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Zk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = eT(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = tT(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = rT(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function oo(e = Yp) {
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
function Da(e) {
  if (!e || e === bc)
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
function Ua(e) {
  if (!e || e === kc)
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
function Fa(e) {
  if (!e || e === Tc)
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
function Ka(e) {
  if (!e || e === xc)
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
function Wr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function id(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Qk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function sd(e, t) {
  const r = id(e), n = id(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Zk(e, t) {
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
function eT(e, t) {
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
function tT(e, t) {
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
function rT(e, t) {
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
function vn(e, t) {
  return `${e}-${t}`;
}
function od(e) {
  return `external-${e}`;
}
function qn(e, t, r, n, i) {
  return je(new Ye(e, t, r, n, i));
}
function ke(e) {
  return e instanceof Ye;
}
function Bs(e) {
  return e?.type === Ye.getType();
}
function Ao(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function xl(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let h, y;
  for (let m = 0; m < d; m++) {
    const T = a[m];
    if ($(y) && y.isParentOf(T))
      continue;
    if (P(T)) {
      h = T.getParent(), y = void 0;
      continue;
    }
    const _ = m === 0, E = m === d - 1;
    let N = null;
    if (C(T)) {
      const A = T.getTextContentSize(), S = _ ? f : 0, M = E ? p : A;
      if (S === 0 && M === 0)
        continue;
      const q = T.splitText(S, M);
      N = q.length > 1 && (q.length === 3 || _ && !E || M === A) ? q[1] : q[0];
    } else {
      if (ke(T))
        continue;
      $(T) && T.isInline() && (N = T);
    }
    if (N !== null) {
      if (N && N.is(h))
        continue;
      const A = N.getParent();
      (A == null || !A.is(h)) && (y = void 0), h = A, y === void 0 && (y = qn(), y.addID(t, r, n, i, s, o), N.insertBefore(y)), y.append(N);
    } else
      h = void 0, y = void 0;
  }
  t === Xr && $(y) && (u ? y.selectStart() : y.selectEnd());
}
function nT(e, t, r) {
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
const $n = Yo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Zr = Yo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ae = Yo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), mr = "marker-trailing-space", Xp = 1, iT = "attribute-run";
function za(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Ir extends tr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Ir(r, n);
  }
  static importJSON(t) {
    return Qp(t.runKind).updateFromJSON(t);
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
    t.classList.add(iT);
    const r = za(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = za(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = za(this.__runKind);
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
      version: Xp
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
function Qp(e) {
  return je(new Ir(e));
}
function ze(e) {
  return e instanceof Ir;
}
const Zp = [
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
], eh = [
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
], sT = [
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
  ...Zp,
  ...eh
], th = 1, oT = ["type", "marker", "content"];
class ve extends tr {
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
    return t !== void 0 && (sT.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Zp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && eh.includes(t);
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
      span: (t) => cT(t) ? {
        conversion: aT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Pr().updateFromJSON(t);
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
    return ad(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), ad(r, this.__marker, n)), !1;
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
      version: th
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Pr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function ad(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function aT(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Pr(t) };
}
function Pr(e, t) {
  return je(new ve(e, t));
}
function cT(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ve.isValidMarker(t) && e.classList.contains(ve.getType());
}
function D(e) {
  return e instanceof ve;
}
function lT(e) {
  return e?.type === ve.getType();
}
const Po = "v", rh = 1, uT = [
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
    super(r ?? t, a), this.__marker = Po, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ht(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return nh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(hc, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: rh
    };
  }
}
function nh(e, t, r, n, i, s) {
  return je(new ht(e, t, r, n, i, s));
}
function we(e) {
  return e instanceof ht;
}
function ih(e) {
  return e?.type === ht.getType();
}
const dT = /* @__PURE__ */ new Set(["closed"]);
function lr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !dT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function sh(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function oh(e) {
  const t = Object.keys(e).filter((n) => !Sk.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function ah(e, t, r, n) {
  return sh(
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
function fs(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function fT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : fs(e) === void 0 && ch(e) === void 0;
}
function ch(e) {
  return e.getChildren().find((t) => C(t) && te(t, ae) === "attribute");
}
function Ts(e, t) {
  return js(e.getNextSibling(), t);
}
const pT = /^[ \u00A0]+$/;
function vl(e) {
  if (dn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ee(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && pT.test(r.slice(t.length));
}
function js(e, t) {
  let r, n, i, s;
  return ze(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  vl(e) && (r = e, e = e.getNextSibling()), C(e) && te(e, ae) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && dn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function hT(e) {
  let t = e;
  for (; ke(t); )
    t = t.getChildren()[0];
  return t;
}
function en(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = hT(t[r]);
  if (C(n) && n.getTextContent() === Et(e.getCaller()))
    return n;
}
function lh(e) {
  const t = en(e);
  return t ? js(t.getNextSibling(), "cat") : {};
}
function Ui(e) {
  const t = e.getFirstChild();
  if (!(!C(t) || P(t)) && te(t, ae) !== "attribute")
    return t;
}
function uh(e) {
  const t = Ui(e);
  return t ? js(t.getNextSibling(), "ca") : {};
}
function dh(e) {
  const t = Ui(e);
  if (!t)
    return;
  const r = js(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function fh(e) {
  const t = dh(e);
  return t ? js(t.getNextSibling(), "cp") : {};
}
function ph(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || C(n) && te(n, ae) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || ze(n)))
        return;
    }
}
function na(e) {
  let t, r, n, i, s = e.getNextSibling();
  return ze(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  vl(s) && (t = s, s = s.getNextSibling()), C(s) && te(s, ae) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && dn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const wo = "c", hh = 1, gT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Pt extends tr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = wo, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Pt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return gh().updateFromJSON(t);
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
      version: hh
    };
  }
}
function gh(e, t, r, n, i) {
  return je(new Pt(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof Pt;
}
function mT(e) {
  return e?.type === Pt.getType();
}
const mh = 1;
class tn extends ll {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new tn(t.__key);
  }
  static importJSON(t) {
    return Dt().updateFromJSON(t);
  }
  getMarker() {
    return ur;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: mh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Dt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Dt() {
  return je(new tn());
}
function ut(e) {
  return e instanceof tn;
}
function ia(e) {
  return e?.type === tn.getType();
}
function yh(e) {
  return ut(e) && Ar(e.getParent());
}
function _l(e) {
  return ke(e) || yh(e);
}
function fn(e) {
  let t = e.getParent();
  for (; t && _l(t); )
    t = t.getParent();
  return t;
}
function sa(e) {
  return D(fn(e));
}
function Oo(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? sa(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function yT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Oo(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Vs(e) {
  return C(e) && e.getType() === Be.getType() && te(e, ae) !== "attribute";
}
function bT(e) {
  if (!Vs(e) || !e.getTextContent().startsWith(I))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && ke(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!D(n))
    return 0;
  for (; ke(r); )
    r = r.getLastChild();
  return !P(r) || r.getMarkerSyntax() !== "opening" || Oo(r, n) === void 0 ? 0 : 1;
}
function Cl(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Oo(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? Oo(r, t) === !0 ? "spacer" : void 0 : Vs(r) ? r.getTextContent().startsWith(I) ? void 0 : "prefix" : "spacer";
}
function kT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Cl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function bh(e, t) {
  const r = R();
  if (!O(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function kh(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Cl(t, e);
    if (r !== void 0 && !bh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        C(n) && n.setTextContent(I + n.getTextContent());
      } else
        t.insertAfter(Te(I));
  });
}
function Th(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Cl(t, e) !== void 0 && bh(t, e)) : !1;
}
const xh = 1, TT = "marker", Sl = Yo("isGutterMarker", {
  parse: (e) => e === !0
});
class Lr extends Is {
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
    return new Lr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => CT(t) ? {
        conversion: xT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return wr().updateFromJSON(t);
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
      version: xh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function xT(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: wr(t, r) };
}
function wr(e, t) {
  return je(new Lr(e, t));
}
function vT(e) {
  return kt(wr(TT, e), Sl, !0);
}
function _T(e) {
  return _t(e) && te(e, Sl);
}
function CT(e) {
  return e?.tagName === "span";
}
function _t(e) {
  return e instanceof Lr;
}
function vh(e) {
  return e?.type === Lr.getType();
}
const ST = ["type", "marker", "content"], vc = "unknown", _h = 1, MT = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Hn extends tr {
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
      [vc]: (t) => AT(t) ? {
        conversion: ET,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ml().updateFromJSON(t);
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
    return MT.has(this.getTag());
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
    const t = document.createElement(vc);
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
  excludeFromCopy(t) {
    return t !== "clone";
  }
}
function ET(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Ml(t, r) };
}
function Ml(e, t, r) {
  return je(new Hn(e, t, r));
}
function AT(e) {
  return e?.tagName.toLowerCase() === vc;
}
function Ae(e) {
  return e instanceof Hn;
}
const PT = "file", wT = "src", OT = "colspan", NT = "category", RT = "alt", qT = "closed", $T = "false";
function IT(e) {
  return e[qT] !== $T;
}
function LT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === PT ? wT : t,
    r
  ]));
}
function DT(e, t) {
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
function oa(e, t, r) {
  const n = r ?? {}, i = IT(n);
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
        opening: `\\${DT(t, n[OT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: lr(LT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [NT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + lr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [RT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: lr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: lr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const xt = { wantsRun: !1, valueText: void 0 }, Dr = {};
function Ba(e, t) {
  if (t === "va")
    return e;
  const r = Ts(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function El(e) {
  const t = R();
  if (!O(t) || !t.isCollapsed())
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
function aa(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = R();
  if (!O(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function UT(e) {
  return ze(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : C(e) && te(e, ae) === "attribute";
}
function FT(e) {
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
function ja(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (we(t))
      return t;
    if (!UT(t))
      return;
  }
}
function cd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => we(t),
    ownerOf: (t) => {
      if (ze(t))
        return t.getRunKind() === e ? ja(t) : void 0;
      const r = t.getParent();
      return ze(r) ? r.getRunKind() === e ? ja(r) : void 0 : FT(t) === e ? ja(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!we(t))
        return xt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? xt : { wantsRun: !0, valueText: I + r };
    },
    scanPieces: (t) => we(t) ? Ts(Ba(t, e), e) : Dr,
    graceSite: (t, r) => we(t) ? !r.opener && !r.closer ? El(Ba(t, e)) : aa(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => we(t) ? Ba(t, e) : void 0
    }
  };
}
const KT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => xt,
  scanPieces: () => Dr,
  graceSite: (e) => D(e) && Th(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, zT = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!C(e) || te(e, ae) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || fs(e) === void 0)
      return xt;
    const t = lr(e.getUnknownAttributes() ?? {}, Fs(e.getMarker()));
    return t === "" ? xt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: ch(e) } : Dr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = fs(e);
    if (!r)
      return !1;
    const n = R();
    if (!O(n) || !n.isCollapsed())
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
    insertRunBefore: (e) => D(e) ? fs(e) : void 0
  }
};
function Ch(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!C(e) || te(e, ae) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function BT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = en(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Ch(n))
        return;
    }
}
const jT = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (ze(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return ze(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : Ch(e) ? BT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return xt;
    const t = e.getCategory();
    return t === void 0 ? xt : { wantsRun: !0, valueText: I + t };
  },
  scanPieces: (e) => K(e) ? lh(e) : Dr,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = en(e);
      return r !== void 0 && El(r);
    }
    return aa(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => K(e) ? en(e) : void 0
  }
};
function VT(e) {
  return ze(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : C(e) && te(e, ae) === "attribute";
}
function WT(e) {
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
function HT(e) {
  const t = e.getParent();
  if (!Ce(t))
    return;
  const r = Ui(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!VT(n))
        return;
    }
}
function ld(e) {
  const t = (r) => Ce(r) ? e === "ca" ? Ui(r) : dh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ce(r),
    ownerOf: (r) => {
      if (ze(r))
        return r.getRunKind() === e && Ce(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return ze(n) ? n.getRunKind() === e && Ce(n.getParent()) ? n.getParent() ?? void 0 : void 0 : WT(r) === e ? HT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ce(r))
        return xt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? xt : { wantsRun: !0, valueText: I + n };
    },
    scanPieces: (r) => Ce(r) ? e === "ca" ? uh(r) : fh(r) : Dr,
    graceSite: (r, n) => {
      if (!Ce(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && El(i);
      }
      return aa(n);
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
function Sh(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return C(e) && te(e, ae) === "attribute";
}
function GT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Pe(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Sh(t))
      return;
  }
}
const JT = {
  kind: "milestone",
  ownerPredicate: (e) => Pe(e),
  ownerOf: (e) => {
    const t = ze(e) ? e.getRunKind() === "milestone" ? e : void 0 : ze(e.getParent()) ? e.getParent() : Sh(e) ? e : void 0;
    if (!t || ze(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return ze(t) ? Pe(r) ? r : void 0 : GT(t);
  },
  expectedPieces: (e) => {
    if (!Pe(e))
      return xt;
    const t = ah(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = lr(t, Ks(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : I + r };
  },
  scanPieces: (e) => {
    if (!Pe(e))
      return Dr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = na(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Pe(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = R();
      if (!O(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return aa(t);
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
}, YT = oa("optbreak", void 0, void 0).opening, XT = {
  kind: "optbreak",
  ownerPredicate: (e) => Ae(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ae(t) || t.getTag() !== "optbreak"))
      return C(e) || _t(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: YT }),
  scanPieces: (e) => Ae(e) ? { value: e.getFirstChild() ?? void 0 } : Dr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, QT = {
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
  expectedPieces: () => xt,
  scanPieces: () => Dr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, ZT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => xt,
  scanPieces: () => Dr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, xs = [
  KT,
  zT,
  cd("va"),
  cd("vp"),
  jT,
  ld("ca"),
  ld("cp"),
  JT,
  XT,
  QT,
  ZT
], ex = new Map(xs.map((e) => [e.kind, e]));
function Or(e) {
  const t = ex.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function rn(e) {
  for (const t of xs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Mh(e) {
  return rn(e) !== void 0;
}
const No = "unmatched", Eh = 2;
function ps(e) {
  return `\\${e}`;
}
class Ur extends Be {
  __marker;
  constructor(t = "", r) {
    super(ps(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Ur(r, n);
  }
  static importDOM() {
    return {
      [No]: (t) => rx(t) ? {
        conversion: tx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Al().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? ps(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ps(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Qu), r.title = ud(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = ud(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(No);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Qu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Eh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Ah(e) {
  return e.getTextContent() === ps(e.getMarker());
}
function ud(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function tx(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Al(t) };
}
function Al(e) {
  return je(new Ur(e));
}
function rx(e) {
  return e?.tagName.toLowerCase() === No;
}
function pn(e) {
  return e instanceof Ur;
}
const vs = "id", Ph = 1, nx = [
  "type",
  "marker",
  "code",
  "content"
];
class Ft extends tr {
  __marker = vs;
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
    return wh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Eb(t);
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
      version: Ph
    };
  }
}
function wh(e, t) {
  return je(new Ft(e, t));
}
function st(e) {
  return e instanceof Ft;
}
function Oh(e) {
  return e?.type === Ft.getType();
}
const Nh = 1, ix = "c", Rh = "span";
class yr extends Is {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = ix, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new yr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => qh(t) ? {
        conversion: sx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Pl().updateFromJSON(t);
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
    const t = document.createElement(Rh);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Mo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Mo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: Nh
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
function sx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Pl(t) };
}
function Pl(e, t, r, n, i, s) {
  return je(new yr(e, t, r, n, i, s));
}
function qh(e) {
  return e ? e.classList.contains(Mo) && e.tagName.toLowerCase() === Rh : !1;
}
function Ws(e) {
  return e instanceof yr;
}
function ox(e) {
  return e?.type === yr.getType();
}
const $h = "table", _c = "immutable-table", Ih = 1, ax = ["type", "marker", "content"];
class Gn extends tr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return _c;
  }
  static clone(t) {
    return new Gn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return cx().updateFromJSON(t);
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
      type: _c,
      ...t !== void 0 && { unknownAttributes: t },
      version: Ih
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function cx(e) {
  return je(new Gn(e));
}
function Lh(e) {
  return e instanceof Gn;
}
function lx(e) {
  return e?.type === _c;
}
const Dh = "table:row", dd = "immutable-table-row", Uh = 1, Cc = "tr", ux = ["type", "marker", "content"];
class Jn extends tr {
  __marker;
  __unknownAttributes;
  constructor(t = Cc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return dd;
  }
  static clone(t) {
    return new Jn(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return dx().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Cc).setUnknownAttributes(t.unknownAttributes);
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
      type: dd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Uh
    };
  }
}
function dx(e, t) {
  return je(new Jn(e, t));
}
function Fh(e) {
  return e instanceof Jn;
}
const Kh = "table:cell", fd = "immutable-table-cell", zh = 1, Sc = "tc1", fx = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function px(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Yn extends tr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Sc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return fd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Yn(r, n, i, s, o);
  }
  static importJSON(t) {
    return hx().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Sc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = px(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: fd,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: zh
    };
  }
}
function hx(e, t, r, n) {
  return je(new Yn(e, t, r, n));
}
function gx(e) {
  return e instanceof Yn;
}
const mx = [
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
  ur,
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
], Bh = 1, yx = ["type", "marker", "content"];
class tt extends ll {
  __marker;
  __unknownAttributes;
  constructor(t = ur, r, n) {
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
    return t !== void 0 && (mx.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: bx,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return _s().updateFromJSON(t);
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
      version: Bh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = _s(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function bx(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = _s(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function _s(e, t) {
  return je(new tt(e, t));
}
function re(e) {
  return e instanceof tt;
}
function wl(e) {
  return e?.type === tt.getType();
}
function ca(e, t) {
  const r = e.getChildAtIndex(t);
  return C(r) ? r : void 0;
}
function Zt(e, t) {
  const r = ca(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Cs(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function kx(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function Tx(e) {
  return Cs(e) ? void 0 : { closed: "false" };
}
function xx(e, t, r, n) {
  const i = t.getMarker(), s = sa(t), o = kx(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    Vs(a) && !a.getTextContent().startsWith(I) && a.setTextContent(I + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function In(e) {
  return it(e, D) ?? void 0;
}
function Ol(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Mc(e) {
  const t = jh(e);
  return e.getChildren().every((r) => P(r) || t && te(r, ae) === "attribute" || C(r) && r.getTextContent().replaceAll(I, "") === "");
}
function jh(e) {
  return Cs(e);
}
function vx(e, t) {
  const r = e.getUnknownAttributes(), n = r ? lr(r, Fs(e.getMarker())) : "";
  n !== "" && t.insertAfter(Te(n)), e.remove();
}
function _x(e, t) {
  if (Cs(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", sa(e)));
}
function Cx(e, t) {
  return D(e) && !Cs(e) && !Cs(t);
}
function Sx(e, t, r) {
  Mc(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && Vs(n) && !n.getTextContent().startsWith(I) && n.setTextContent(I + n.getTextContent()), e.append(...t);
}
function Mx(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = jh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = P(l) && l.getMarkerSyntax() === "closing", f = s && te(l, ae) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = Cx(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      Sx(e, o, n);
    else {
      const l = Pr(t.getMarker(), Tx(t));
      xx(l, t, o, n), e.insertAfter(l), Mc(l) ? l.remove() : c = l;
    }
  i && !a && _x(t, n), Mc(t) && vx(t, c);
}
function Mi(e, t) {
  let r = e.getParent();
  for (; D(r); )
    Mx(e, r, t), r = e.getParent();
}
function Nl(e) {
  if (C(e) && !P(e)) {
    const t = e.getTextContent().startsWith(I) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if ($(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      Nl(t);
      return;
    }
    e.selectEnd();
  }
}
const Vh = /[ \u00A0]{2,}/g;
function Ex(e) {
  return [...e.matchAll(Vh)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function Ax(e) {
  return e.replace(Vh, (t) => t[0]);
}
const Px = "​", Ei = Px;
var pd;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(pd || (pd = {}));
var hd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(hd || (hd = {}));
function wx() {
  return Te(Ei);
}
function Ox(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Ei, ""));
}
function Hs(e) {
  return e.length > 0 && e.includes(Ei) && e.replaceAll(Ei, "") === "";
}
function Rl(e) {
  return C(e) && Hs(e.getTextContent());
}
function Wh(e) {
  return mT(e) || ox(e);
}
function Fe(e) {
  return Ce(e) || Ws(e);
}
function Hh(e, t) {
  return e.find((r) => Fe(r) && r.getNumber() === t.toString());
}
function Nx(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Fe(r));
}
function gd(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Gh(e) {
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
function er(e) {
  return it(e, K) ?? void 0;
}
function Rx(e) {
  return st(e) || Ce(e) || D(e) || Ws(e) || ut(e) || Pe(e) || re(e) || K(e) || we(e) || Ae(e);
}
function Jh(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function qx(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Kt(e) {
  return Oe(e) || st(e);
}
function Oe(e) {
  return re(e) || ut(e);
}
function $x(e) {
  return wl(e) || ia(e);
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
function Ln(e, t) {
  const r = te(t, $n), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Ix(e, t) {
  const r = $(e) ? e : e.getParent(), n = $(t) ? t : t.getParent(), i = r && n ? Ob(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Lx(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Dn(e) {
  return e?.type === Be.getType();
}
function Dx(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Ux(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Yh(e, t, r) {
  const n = Ee(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Fx(e) {
  const t = e[Ls];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Xh(e) {
  return zs(e) || vh(e) && e.textType === "marker" || Dn(e) && Fx(e) === "attribute" ? "" : Dn(e) && e.text !== I ? e.text : lT(e) ? e.children.map((t) => Xh(t)).join("") : "";
}
function Kx(e) {
  return e.map((r) => Xh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function ql(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = Qh(r);
    n !== Ut && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Qh(e) {
  return P(e) || br(e) || C(e) && te(e, ae) === "attribute" ? "" : C(e) ? e.getTextContent() : $(e) ? e.getChildren().map((t) => Qh(t)).join("") : "";
}
function br(e) {
  return _t(e) && e.getTextType() === "marker";
}
function zt(e) {
  return P(e) || br(e);
}
function md(e, t) {
  zx(e, t), e.setMarker(t);
}
function zx(e, t) {
  const r = e.getMarker(), n = Ee(r), i = Ee(r, !0), s = Ve(r), o = Ve(r, !0), a = ve.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!zt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (br(c)) {
        const f = l.startsWith(Ee("", !0));
        c.setTextContent(d ? Ee(t, f) : Ve(t, f));
      }
    }
  });
}
function Ke(e, t = Ab) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Re(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Zh(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function $l(e) {
  if (!O(e))
    return yd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !$(t) || e.anchor.type === "text" && !C(t)))
    return t ?? void 0;
  try {
    return yd(e) ?? t ?? void 0;
  } catch (n) {
    if (Zh(n))
      return t ?? void 0;
    throw n;
  }
}
function Bx(e, t) {
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
function Il(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function eg(e) {
  return !!e && e.includes("-");
}
function tg(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function yd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Ss(e) {
  if (!e)
    return !1;
  if (Xo(e) || P(e) || br(e) || ze(e) || e.getType() === Us || _t(e) && e.getTextType() === "attribute")
    return !0;
  const t = fn(e);
  if (Ce(t) || C(e) && K(t) && en(t)?.is(e))
    return !0;
  if (C(e)) {
    const r = te(e, ae);
    if (r === mr || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === I || Hs(n))
      return !0;
  }
  return !1;
}
function la() {
  const e = Te(I);
  return kt(e, ae, mr), e.setMode("token"), e;
}
function jx(e) {
  const t = e.getTextContent();
  t.startsWith(I) || e.setTextContent(I + t);
}
function Xn(e) {
  return C(e) && te(e, ae) === mr;
}
function rg(e) {
  const t = e.getFirstChild();
  if (!zt(t) || t === null || Xn(t.getNextSibling()))
    return !1;
  const r = R();
  if (!O(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function ng(e) {
  if (Ce(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!Ss(s)) {
      if (_l(s)) {
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
function Vx(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = bT(i), o = t ? Ex(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, d]) => c + d - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function ig(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function Wx(e, t) {
  let r = t;
  for (const [n, i] of ig(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function bd(e, t) {
  let r = t;
  for (const [n, i] of ig(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function rr(e, t) {
  return ng(e).map((r) => r.type === "element" ? r : Vx(r.nodes, t));
}
function Hx(e, t) {
  return ng(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function Ro(e, t, r) {
  const n = fn(e);
  if (!n)
    return;
  const i = rr(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: Wx(a, t) };
  }
}
function Gx(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, bd(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, bd(r, t - r.start)];
}
function Ti(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (yh(e)) {
    const s = e.getParentOrThrow();
    return n ? Ss(n) ? Ti(e, t + 1, r) : kd(s, n, r) : Ti(s, e.getIndexWithinParent() + 1, r);
  }
  const i = rr(e, r);
  return n ? Ss(n) || _l(n) && !Jx(i, n) ? Ti(e, t + 1, r) : kd(e, n, r) : { type: "index", index: i.length };
}
function Jx(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || Ai(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || Ai(n.node, t.getKey())));
}
function kd(e, t, r) {
  const n = rr(e, r);
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
function Yx(e, t) {
  return Ci.set(e, t), () => {
    Ci.get(e) === t && Ci.delete(e);
  };
}
function Va(e) {
  return Ci.get(e);
}
function Xx(e) {
  return Ci.get(Li())?.has(e.getKey()) ?? !1;
}
function Qx(e) {
  Ci.get(Li())?.add(e.getKey());
}
function Zx(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ec(e) {
  return !!(e.opener || e.value || e.closer);
}
function Td(e) {
  return /^\s/.test(e);
}
function Ll(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Td(t) || !Td(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function ua(e, t, r) {
  return r.wantsRun ? Ll(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : Zx(t);
}
function ev(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Ll(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function sg(e, t) {
  return !Ec(e.scanPieces(t));
}
function Gs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!ua(e, n, r))
    return !1;
  const i = R();
  if (!O(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Ai(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function tv(e, t, r, n) {
  return !r.wantsRun || Ec(n) || Nb(vi) ? !1 : Li().getEditorState().read(() => {
    const i = Y(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ec(e.scanPieces(i));
  });
}
function rv(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function xd(e) {
  const t = Te(e);
  return kt(t, ae, "attribute"), t;
}
function nv(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Qp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function iv(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    C(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(xd(n.valueText));
    return;
  }
  const l = nv(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : C(u) ? Ll(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = xd(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function Ms(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (ua(e, i, n) && !Xx(t)) {
    if (tv(e, t, n, i)) {
      Qx(t);
      return;
    }
    if (!Gs(e, t)) {
      if (!n.wantsRun) {
        rv(i);
        return;
      }
      iv(e, t, i, n);
    }
  }
}
function sv(e, t, r) {
  Ms(e, t), t.isAttached() && Gs(e, t) && r.add(t.getKey());
}
function og(e) {
  if (!C(e))
    return !1;
  if (P(e) || we(e) || pn(e))
    return !0;
  const t = te(e, ae);
  return t === "attribute" || t === mr;
}
function Dl(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && dn(e) && D(e.getParent())) : !1;
}
function ov() {
  const e = R();
  return O(e) ? Dl(e.focus.getNode(), e.focus.offset) : !1;
}
function ag(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return C(t) && og(t) ? t : void 0;
}
function av(e) {
  const t = ag(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function cv(e) {
  const t = ag(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function vd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function _d(e, t) {
  e.set(t.key, t.offset, t.type);
}
function lv(e, t) {
  let r = cv(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!C(n))
      return;
    if (!og(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Cd(e, t) {
  const r = lv(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function cg(e) {
  if (e.isCollapsed()) {
    const a = av(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [vd(r), vd(n)], s = Cd(r, "next"), o = Cd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (_d(r, i[0]), _d(n, i[1]), !1) : !0;
}
const qo = "verse-block", lg = 1, uv = "verse-block";
class Fi extends tr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return qo;
  }
  static clone(t) {
    return new Fi(t.__number, t.__key);
  }
  static importJSON(t) {
    return dv().updateFromJSON(t);
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
    return tg(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(uv), Sd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Sd(r, this.__number), !1;
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
      type: qo,
      number: this.getNumber(),
      version: lg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Sd(e, t) {
  const { start: r, end: n } = tg(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Md(e, "data-verse-start", i ? r : NaN), Md(e, "data-verse-end", i ? n : NaN);
}
function Md(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function dv(e) {
  return je(new Fi(e));
}
function Es(e) {
  return e instanceof Fi;
}
function fv(e) {
  return e?.type === qo;
}
const pv = [
  Ft,
  yr,
  Pt,
  ht,
  ve,
  Ne,
  Qt,
  gr,
  Hn,
  Lr,
  Ur,
  tt,
  tn,
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
  Ir,
  {
    replace: ll,
    with: () => Dt(),
    withKlass: tn
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
}, hv = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function gv(e) {
  if (!e)
    return dr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: dr(r)?.category ?? k.Uncategorized,
      type: hv[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: dr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Ed(e, t, r) {
  const n = {
    type: Er,
    version: Mr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return ia(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const ug = "v", dg = 1, mv = "verse-selected";
class Ct extends Is {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = ug, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => kv(t) ? {
        conversion: bv,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ul().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(hc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(hc, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Lt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Co + this.getNumber() + Co
    );
    return v(yv, { nodeKey: this.getKey(), text: t });
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
      version: dg
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Zh(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function yv({ nodeKey: e, text: t }) {
  const [r] = Gb(e);
  return v("span", { className: r ? mv : void 0, children: t });
}
function bv(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Ul(t) };
}
function Ul(e, t, r, n, i, s) {
  return je(new Ct(e, t, r, n, i, s));
}
function kv(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === ug;
}
function Qn(e) {
  return e instanceof Ct;
}
function Tv(e) {
  return e?.type === Ct.getType();
}
function me(e) {
  return we(e) || Qn(e);
}
function fg(e) {
  return ih(e) || Tv(e);
}
function xv(e) {
  return vv(e).find((t) => re(t));
}
function vv(e) {
  return e.some(Es) ? e.flatMap((t) => Es(t) ? t.getChildren() : t) : e;
}
function da(e) {
  return $(e) ? Es(e) ? e.getChildren().flatMap(da) : e.getChildren() : [];
}
function _v(e, t) {
  return da(e).find((i) => me(i) && Il(t, i.getNumber()));
}
function Cv(e, t) {
  return t === 0 ? xv(e) : e.map((r) => _v(r, t)).filter((r) => r)[0];
}
function Io(e) {
  return da(e).find((r) => me(r));
}
function pg(e, t) {
  if (!$(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (me(i))
      return i;
  }
}
function Sv(e) {
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
    const n = Io(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Ac(e) {
  return da(e).findLast((t) => me(t));
}
function Mv(e) {
  if (!we(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Ev(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && $(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function Av(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Ev(t, e, r);
  if (C(e)) {
    const n = Mv(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Ad(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Pv(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!O(t))
    return Ad(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return Av(e, t) ? { verseNum: n } : Ad(e);
}
function wv(e) {
  return Rx(e) || Qn(e);
}
function Fl(e) {
  if (C(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(I) && e.setTextContent(`${t} `);
  }
}
function hg(e) {
  if (C(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function gg(e, t) {
  return e.getEditorState().read(() => !Y(t));
}
function Ov(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Kl(t, e);
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
      let s = Pd(i);
      for (; s && !Fe(s); ) {
        const o = Io(s);
        if (o) {
          n = o;
          break;
        }
        s = Pd(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Io(s);
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
function Nv(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Kl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && $(i) && (n = pg(i, r.getIndexWithinParent())), !n && i) {
      let o = wd(i);
      for (; o && !Fe(o); ) {
        const a = Ac(o);
        if (a) {
          n = a;
          break;
        }
        o = wd(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Fe(s); ) {
      const o = Ac(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Pd(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function wd(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Kl(e, t) {
  if ($(e) && O(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && me(n))
      return n;
    const i = pg(e, t.anchor.offset);
    if (i)
      return i;
    const s = Io(e);
    if (s)
      return s;
  }
  return zl(e);
}
function zl(e) {
  if (!e || Fe(e))
    return;
  if (me(e))
    return e;
  let t = gd(e);
  for (; t; ) {
    if (Fe(t))
      return;
    if (me(t))
      return t;
    const r = Ac(t);
    if (r)
      return r;
    t = gd(t);
  }
}
const Rv = ["style"], qv = ["style", "code"], Lo = ["style", "cid"], $v = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Iv = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Lv = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], Dv = ["style", "caller", "category", "contents"], Uv = ["tag", "marker", "contents"], Fv = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], As = `
`;
function Kv(e, t) {
  const r = Y(e);
  if (!At(r))
    return;
  const n = mg(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function mg(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Np();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Pi(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Pi(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Nr(l) || At(l))
        return n;
      Kt(l) && (a = l);
    }
    if (Kt(l) && (i.includes(l) || i.push(l)), yg(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Bl(l, t);
  }
  if (a)
    return n;
}
function Od(e, t, r = "delta-doc") {
  if (e.length < 2 || !jv(e[0]) || !Bv(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => zv(n, r)?.getKey());
}
function zv(e, t = "delta-doc") {
  const r = Np();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Pi(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Pi(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Kt(a) && (i.includes(a) || i.push(a)), yg(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Bl(a, t);
    if (Nr(a) && l > 0 && e >= n && e < n + l || At(a) && n === e)
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
function Nr(e) {
  return C(e) && !At(e);
}
function At(e) {
  return Fe(e) || me(e) || Pe(e) || K(e) || Ae(e) || pn(e);
}
function Jr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Bv(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Fv.includes(t);
}
function jv(e) {
  return e.retain != null && typeof e.retain == "number";
}
function yg(e, t) {
  return K(e) || Ae(e) ? !0 : t === "apply" && $(e) && At(e);
}
function bg(e) {
  const t = e.getParent();
  return zt(e) && re(t) && t.getFirstChild() === e;
}
function Pc(e) {
  const t = e.getParent();
  return t !== null && it(t, ze) !== null;
}
function Vv(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === Ut && t.getChildrenSize() === 1;
}
function Wv(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === Et(t.getCaller());
}
function Hv(e) {
  return !Mh(e) && Bl(e, "delta-doc") === e.getTextContentSize();
}
function Bl(e, t) {
  if (At(e))
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
    (Rl(e) || bg(e) || te(e, ae) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    te(e, ae) === "attribute" || Pc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(gl) || Vv(e) || Wv(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function wc(e, t) {
  const r = { insert: e.__text }, n = te(e, Zr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = kg(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Nd(e) {
  const t = new cs();
  return e.isEmpty() || e.read(() => {
    const r = xe();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && ut(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Gv();
    for (const s of i)
      t.push(s);
  }), t;
}
function jl(e, t) {
  const r = [], n = Di(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Rd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Rd(c, n.length, n, i, s, o, a));
  return r;
}
function Gv() {
  return jl();
}
function Rd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Jv(e, a, n), Yv(e, a, i, s, o), Xv(e, t, r, i, o, s, a), Fe(e) && a.push(t_(e)), me(e) && a.push(n_(e)), Pe(e) && a.push(i_(e)), pn(e) && a.push(s_(e)), Zv(e, a, s), Qv(e, a, s), l_(c, s), a;
}
function Jv(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    st(n) ? t.push(e_(n)) : re(n) ? t.push(r_(n)) : ut(n) && t.push({ insert: As });
  }
  Kt(e) && (r.includes(e) || r.push(e));
}
function Yv(e, t, r, n, i) {
  if (!C(e) || we(e) || pn(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = er(e) !== void 0;
  if (P(e) && (o || bg(e) || Pc(e) || Mh(e)) || te(e, ae) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Hs(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && P(c) && c === s.getFirstChild() && a === Et(s.getCaller()))
    return;
  const l = D(s) ? s : void 0, d = l?.getFirstChild();
  o && l && P(d) && c === d && a.startsWith(I) && (a = a.slice(1));
  const u = a.startsWith(gl) || te(e, ae) === "attribute" || Pc(e), f = !!l && a === Ut && l.getChildrenSize() === 1, p = fa(e, n), h = p ? r.filter((T) => p.children.includes(T)) : r, y = wc(e, h);
  if (y.insert = a, p) {
    if (!a || a === I || u)
      return;
    p.contentsOps?.push(y);
  } else
    f || u || t.push(y);
  const m = a !== "" && !f && !(u && l);
  if (r.length > 0 && m)
    for (const T of r)
      i.add(T);
}
function Xv(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Pi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = a_(c), d = fa(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Qv(e, t, r) {
  if (!K(e))
    return;
  const n = o_(e), i = fa(e, r), s = {
    node: e,
    children: Di(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Zv(e, t, r) {
  if (!Ae(e))
    return;
  const n = c_(e), i = fa(e, r), s = {
    node: e,
    children: Di(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function hn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function e_(e) {
  const t = { style: vs, code: e.__code };
  return hn(t, e), { insert: As, attributes: { book: t } };
}
function t_(e) {
  const t = { style: wo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), hn(t, e), { insert: { chapter: t } };
}
function r_(e) {
  const t = { style: e.__marker };
  return hn(t, e), { insert: As, attributes: { para: t } };
}
function n_(e) {
  const t = { style: Po, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), hn(t, e), { insert: { verse: t } };
}
function i_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), hn(t, e), { insert: { milestone: t } };
}
function s_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function o_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), hn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = te(e, Zr);
  return n && (r.attributes = { segment: n }), r;
}
function a_(e) {
  const t = { insert: "" }, r = kg([e]);
  return r && (t.attributes = { char: r }), t;
}
function c_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), hn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function fa(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function l_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Pi(t[r].node, e) && t.splice(r, 1);
}
function kg(e) {
  if (e.length === 0)
    return;
  const t = e.map(u_);
  return t.length === 1 ? t[0] : t;
}
function u_(e) {
  const t = { style: e.__marker }, r = te(e, $n);
  return r && (t.cid = r), hn(t, e), t;
}
const Tg = 1;
class Xt extends Is {
  __caller;
  __previewText;
  __onClick;
  constructor(t = So, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return Us;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Xt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => f_(t) ? {
        conversion: d_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Vl().updateFromJSON(t);
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => p_(t, n), (l) => h_(t, n, s, l), () => g_(t, n), () => m_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return v("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === So && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Fp && i ? (
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
      version: Tg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function d_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Vl(t, r) };
}
function Vl(e, t, r) {
  return je(new Xt(e, t, r));
}
function f_(e) {
  return e ? e.classList.contains(Xt.getType()) : !1;
}
function nr(e) {
  return e instanceof Xt;
}
function p_(e, t) {
  return e.getEditorState().read(() => {
    const r = Y(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function h_(e, t, r, n) {
  e.update(() => {
    const i = Y(t);
    if (!K(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = Y(r);
    if (!nr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function g_(e, t) {
  return e.getEditorState().read(() => {
    const r = Y(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return jl(r);
  });
}
function m_(e, t) {
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
const y_ = [
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
], b_ = ["†"], Wl = "formatted", xg = "unformatted", vg = "paragraph-structure", _g = "standard", Cg = "block-verse", k_ = {
  [Wl]: "Formatted",
  [xg]: "Unformatted",
  [vg]: "Paragraph Structure",
  [_g]: "Standard",
  [Cg]: "Block Verse"
};
function Ki(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Hl, Gl;
function T_(e) {
  const t = Sg(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Hl = e, Gl = t;
}
T_(Wl);
const pw = () => Hl, pa = () => Gl;
function Sg(e) {
  let t;
  switch (e ?? Hl) {
    case Wl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case xg:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case vg:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case _g:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Cg:
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
function hw(e) {
  if (!e)
    return;
  const t = qd(e);
  return Object.keys(k_).find((r) => Ot(qd(Sg(r)), t));
}
const x_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function qd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...x_, ...t };
}
function Bt(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function v_(e) {
  if (e)
    return Ps(e) ? Ct : e.markerMode === "editable" ? ht : Ct;
}
function Ps(e) {
  return e?.verseLayout === "block";
}
function __(e) {
  const t = [], r = e ?? Gl;
  return r && (t.push(`${xk}${r.markerMode}`), r.hasSpacing && t.push(kk), r.isFormattedFont && t.push(Tk)), t;
}
function Jl(e, t) {
  if (Ag())
    return;
  const { start: r } = e;
  let { end: n } = e;
  n ??= r;
  let [i, s] = wi(r, t), [o, a] = wi(n, t);
  if (!i || !o || s === void 0 || a === void 0)
    return;
  [i, s] = Ud(i, s), [o, a] = Ud(o, a), n !== r && xo(n) && n.closingMarkerOffset === 0 && ([o, a] = L_(o, a, Bt(t)));
  const c = Qo();
  return c.anchor = Ju(i.getKey(), s, Fd(i)), c.focus = Ju(o.getKey(), a, Fd(o)), c;
}
function Yl(e) {
  if (Ag())
    return;
  const t = R();
  if (!t || !O(t))
    return;
  const r = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), n = t.isBackward() ? t.focus.offset : t.anchor.offset, i = fr(r, n, e);
  if (t.isCollapsed())
    return { start: i };
  const s = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), o = t.isBackward() ? t.anchor.offset : t.focus.offset, a = fr(s, o, e);
  return { start: i, end: a };
}
const Xl = {
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
}, C_ = new Map(Object.values(Xl).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), $d = {
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
}, S_ = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys($d).filter((e) => $d[e])
), M_ = /([^\s="|]+)="([^"]*)"/g, E_ = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Mg(e, t) {
  return `${e}['${t}']`;
}
function Si(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function hs(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function Ql(e) {
  const t = rn(e);
  if (!t)
    return;
  const r = Or(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function Oc(e, t, r) {
  const n = [];
  for (const i of e.slice(t).matchAll(M_)) {
    const s = i[1];
    n.push({
      start: t + i.index,
      base: 0,
      bytes: { kind: "attributeKey", keyName: s }
    }), n.push({
      // Past the key, its `=`, and its opening quote.
      start: t + i.index + s.length + 2,
      base: 0,
      bytes: { kind: "property", property: s }
    });
  }
  return n.length > 0 ? n : r === void 0 ? [] : [
    { start: t, base: 0, bytes: { kind: "property", property: r } }
  ];
}
function A_(e, t) {
  const r = E_.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = C_.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function Eg(e) {
  if (br(e)) {
    const t = B_(e), r = e.getTextContent();
    if (Pe(t) && (r === "\\*" || r.startsWith(Ee(t.getMarker()))))
      return t;
  }
  return fn(e) ?? e;
}
function P_(e) {
  const t = e.getTextContentSize(), r = Ql(e);
  if (r && r.role !== "value") {
    const i = Xl[r.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? hs(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (r.kind === "milestone")
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? hs() : Si(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: Eg(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Si(e.getNested() ? 2 : 1)
    ) : hs()
  };
}
function w_(e) {
  const t = e.getTextContent(), r = t.length, n = Ql(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = Eg(e);
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
    const s = oa(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: hs() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: Si(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? hs() : Si(t.startsWith("\\+") ? 2 : 1)
  };
}
function O_(e) {
  const t = Ql(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = Xl[n];
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
        ...Oc(i, 1, D(r) ? Fs(r.getMarker()) : void 0)
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
        ...Oc(i, 2, Ks(r.getMarker()))
      ]
    };
  }
}
function N_(e) {
  const t = e.getParent();
  if (!Ae(t))
    return;
  const r = e.getTextContent(), n = r.length, i = A_(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...Oc(r, 1, void 0)
      ]
    };
}
function Id(e, t) {
  const r = Ee(e);
  if (t.startsWith(r))
    return [
      ...Si(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Un(e) {
  if (P(e))
    return P_(e);
  if (br(e))
    return w_(e);
  if (_t(e) && e.getTextType() === "attribute")
    return N_(e);
  if (e.getType() === Us) {
    const n = e.getParent();
    return K(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (we(e)) {
    const n = Id(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!C(e))
    return;
  if (te(e, ae) === "attribute")
    return O_(e);
  const t = e.getParent();
  if (Ce(t) && Ui(t)?.is(e)) {
    const n = Id(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = fn(e);
  if (K(r) && en(r)?.is(e))
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
function Zl(e) {
  return br(e) || _t(e) && e.getTextType() === "attribute" || e.getType() === Us;
}
function R_(e) {
  const t = [];
  if (we(e) && t.push(e), $(e)) {
    const r = Ce(e) ? Ui(e) : void 0, n = K(e) ? en(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (P(i) || br(i) || _t(i) && i.getTextType() === "attribute" || i.getType() === Us || r?.is(i)) && t.push(i);
  }
  for (const r of S_) {
    const n = Or(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function q_(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function Ld(e, t, r) {
  const n = Un(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = It(Qr(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: Mg(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return $_(e, r);
  }
}
function Dd(e, t) {
  return C(e) && !Un(e) && !Ro(e, 0, t);
}
function $_(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && ke(o); )
    r = o, o = r.getParent();
  let n = r.getPreviousSibling();
  for (; n && Dd(n, t); )
    n = n.getPreviousSibling();
  if (!n)
    return;
  const i = $(n) ? n.getLastDescendant() : n;
  if (i && (C(i) || Zl(i)))
    return Dd(i, t) ? void 0 : En(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return En(s, n.getIndexWithinParent() + 1, t);
}
function fi(e, t, r) {
  for (const n of R_(e)) {
    const i = Un(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!q_(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function wi(e, t) {
  const r = Bt(t);
  if ($s(e)) {
    const n = un(e.jsonPath);
    let i = xe();
    for (let s = 0; s < n.length; s++) {
      if (!i || !$(i))
        return [void 0, void 0];
      const o = rr(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : Gx(o, e.offset) ?? zd(e, r) ?? [void 0, void 0];
      i = o.node;
    }
    return i && $(i) ? wi(eu(i, n, e.offset, r), t) : [void 0, void 0];
  }
  if (fc(e) || xo(e) || Hu(e)) {
    const n = zd(e, r);
    if (n)
      return n;
  }
  if (Gu(e) || Pb(e)) {
    const n = ts(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = Gu(e) ? fi(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : fi(n, { kind: "attributeMarker", keyName: i }, 0);
    return s || Kd(n);
  }
  if (Hu(e)) {
    const n = ts(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = fi(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || Kd(n);
  }
  if (bp(e)) {
    const n = ts(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = fi(n, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = $(n) ? n.getFirstChild() : null;
    return s && C(s) ? [s, 0] : go(n, !1);
  }
  if (xo(e)) {
    const n = ts(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = fi(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = tu(n);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return go(n, !0);
    if (!$(n))
      return [void 0, void 0];
    const o = n.getLastChild();
    return o && C(o) ? [o, o.getTextContent().length] : [n, n.getChildrenSize()];
  }
  if (fc(e)) {
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
    const a = z_(s, i);
    return go(s, a !== void 0 && e.propertyOffset >= a.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${wb(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Ud(e, t) {
  if (!Zl(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !$(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && I_.test(e.getTextContent());
  return [r, s ? n + 1 : n];
}
const I_ = /[ \u00A0]$/;
function L_(e, t, r) {
  let n;
  if ($(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; C(n) && !Un(n) && !Ro(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = $(n) ? n.getLastDescendant() : n;
  return C(s) ? [s, s.getTextContentSize()] : [e, t];
}
function Fd(e) {
  return $(e) ? "element" : "text";
}
function ts(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = un(n);
  let s = xe();
  for (const o of i) {
    if (!s || !$(s))
      return;
    const a = rr(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function fr(e, t, r) {
  return En(e, t, Bt(r));
}
function En(e, t, r) {
  const n = Ld(e, t, r);
  if (n)
    return n;
  if (ke(e)) {
    const i = e.getChildrenSize(), s = e.getChildAtIndex(Math.min(t, i - 1));
    if (C(s)) {
      const a = t >= i ? s.getTextContentSize() : 0;
      return En(s, a, r);
    }
    const o = e.getParent();
    if (o) {
      const a = e.getIndexWithinParent(), c = t >= i ? a + 1 : a;
      return En(o, c, r);
    }
  }
  if ($(e)) {
    const i = e.getChildAtIndex(t);
    if (i && Un(i)) {
      const l = Ld(i, 0, r);
      if (l)
        return l;
    }
    if (i && Zl(i))
      return {
        jsonPath: It(Qr(e))
      };
    const s = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!i && s && D_(s, e))
      return Wa(e, !0, r);
    if (Fe(e) || Ss(e))
      return Wa(e, t > 0, r);
    const o = ut(e) && Ar(e.getParent()) ? e.getParentOrThrow() : e, a = Qr(o), c = Ti(e, t, r);
    return c.type === "text" ? {
      jsonPath: It([...a, c.index]),
      offset: c.offset
    } : eu(o, a, c.index, r);
  }
  if (C(e)) {
    const i = Ro(e, t, r);
    if (i)
      return {
        jsonPath: It([
          ...Qr(i.parent),
          i.index
        ]),
        offset: i.offset
      };
    const s = t > 0, o = s ? e.getNextSibling() : e.getPreviousSibling();
    if (C(o) && (Un(o) || Ro(o, 0, r)))
      return En(o, s ? 0 : o.getTextContentSize(), r);
  }
  return Wa(e, t > 0, r);
}
function D_(e, t) {
  const r = Un(e);
  return !!r && r.owner.is(t) && r.spans[0]?.bytes.kind === "closingMarker";
}
function Wa(e, t, r) {
  const n = e.getParent();
  return n ? En(n, e.getIndexWithinParent() + (t ? 1 : 0), r) : { jsonPath: It(Qr(e)) };
}
function eu(e, t, r, n) {
  const i = rr(e, n), s = i[r];
  if (!s)
    return U_(e, t, i, n);
  const o = It([...t, r]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function U_(e, t, r, n) {
  if (Ar(e))
    return Do(e, t, 1, n);
  if (tu(e) !== void 0) {
    const o = r.length - 1, a = r[o];
    return a?.type === "text" ? {
      jsonPath: It([...t, o]),
      offset: a.length
    } : {
      jsonPath: It(t),
      closingMarkerOffset: 0
    };
  }
  const i = fn(e), s = t[t.length - 1];
  return F_(e) || !i || s === void 0 ? Do(e, t, 0, n) : eu(i, t.slice(0, -1), s + 1, n);
}
function Do(e, t, r, n) {
  const i = It(t), s = tu(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + r
    };
  if ($(e)) {
    const l = rr(e, n), d = l.length - 1, u = l[d], f = [...t, d];
    if (u?.type === "text")
      return { jsonPath: It(f), offset: u.length + r };
    if (u)
      return Do(u.node, f, r, n);
  }
  const o = (l, d) => ({
    jsonPath: Mg(i, l),
    propertyOffset: d.length + r
  }), a = (l, d) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: Ve(d).length + r
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
  const c = Ae(e) ? e.getMarker() : K_(e);
  return c ? o("marker", c) : { jsonPath: i };
}
function tu(e) {
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : Ve(e.getMarker(), sa(e)).length;
  if (K(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : Ve(e.getMarker()).length;
  if (Pe(e))
    return Ve("").length;
  if (Ae(e)) {
    const { closing: t } = oa(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function F_(e) {
  return re(e) || ut(e) || st(e) || Fh(e) || Ae(e) && e.getTag() === "table:row" || Ar(fn(e));
}
function K_(e) {
  if (re(e) || D(e) || Pe(e) || Fh(e) || gx(e))
    return e.getMarker();
}
function Kd(e) {
  if ($(e)) {
    const r = e.getLastChild();
    if (r && C(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && $(t) ? [t, 0] : go(e, !0);
}
function go(e, t) {
  const r = e.getParent();
  return r ? [r, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function z_(e, t) {
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
function zd(e, t) {
  const r = xe(), n = Do(r, [], 1, t);
  return Bd(n) === Bd(e) ? [r, r.getChildrenSize()] : void 0;
}
function Bd(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [r]) => t.localeCompare(r)));
}
function B_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Ss(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Qr(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = fn(r);
    if (!n)
      break;
    const i = Hx(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Ag() {
  for (let e = xe().getFirstChild(); e; e = e.getNextSibling())
    if (Es(e))
      return !0;
  return !1;
}
function Pg(e, t, r, n, i, s, o) {
  if (!Ne.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Jl(r, i) : R();
  if (!O(a))
    return;
  const c = W_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (ls(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = wg(e, l, c, i, s, void 0, void 0);
  return V_(d, a, i), d;
}
function ru(e) {
  return e !== "expanded";
}
function j_(e) {
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
function V_(e, t, r) {
  const n = ru(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Lx(t), cg(t), Pn(t);
  const i = j_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function pi(e, t, r) {
  const n = Pr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(wr("marker", Ee(e)));
  const s = t === "" ? Ut : i ? I + t : t;
  return n.append(Te(s)), n;
}
function W_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(pi("fr", f, n)), !e.isCollapsed()) {
        const p = Vd(e);
        p.length > 0 && o.push(pi("fq", p, n));
      }
      o.push(pi("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(pi("xo", f, n)), !e.isCollapsed()) {
        const p = Vd(e);
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
function wg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : ru(n?.noteMode), l = Tl(e, t, c);
  s && kt(l, Zr, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = lt(e), d && u.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (u = wr("marker", Ee(e) + " "), a || (f = wr("marker", Ve(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = Te(Et(l.__caller)), d && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => la(), y = r.flatMap(G_(h));
    if (t === "")
      l.append(...y);
    else {
      const m = ql(r);
      let T = () => {
      };
      i?.noteCallerOnClick && (T = i.noteCallerOnClick), p = Vl(l.__caller, m, T), l.append(p, h(), ...y);
    }
  }
  return f && l.append(f), l;
}
function jd(e) {
  if (typeof e == "string") {
    const i = Y(e);
    return K(i) ? i : void 0;
  }
  const t = Di();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => K(i.node))[e]?.node;
  if (K(n))
    return n;
}
function H_(e, t) {
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
function G_(e) {
  return (t) => _t(t) ? [t] : [t, e()];
}
function J_(e) {
  const t = e.getParent();
  return t !== null && it(t, K) !== null;
}
function Vd(e) {
  if (!O(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Tp(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || nr(c) || J_(c)) && !P(c) && !pn(c) && te(c, ae) !== "attribute") {
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
const nu = [
  Xt,
  Ct,
  ...pv
], Y_ = [
  Fi,
  ...nu
], X_ = Vn((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return v("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function Q_() {
  const [e, t] = he(void 0), [r, n] = he(), i = Q(null), s = fe((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = ik(l, c, () => {
      sk(l, c, {
        placement: "bottom-start",
        middleware: [ok(), ak()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = fe(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return B(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function Z_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = Q_();
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
const eC = _b(X_);
function Og({ isOpen: e = !1, children: t }) {
  const r = Q(null), { coords: n, placement: i } = Z_({ isOpen: e, floatingBoxRef: r }), s = De(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Mn(
    v(eC, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Ng = mp(void 0);
function iu() {
  const e = yp(Ng);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function tC(e, t) {
  const [r, n] = he(0), [i, s] = he(-1), o = De(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = fe(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = fe(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = fe(() => {
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
function rC({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = tC(t, r);
  return v(Ng.Provider, { value: i, children: v("div", { ...n, children: e }) });
}
const Rg = Vn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = iu(), d = fe((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = fe((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return v("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function nC({ children: e, autoIndex: t = !0, ...r }) {
  const n = Q(null), { state: { activeIndex: i, menuItems: s } } = iu(), o = De(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = De(() => {
    const c = o(s);
    return t ? Cb.map(c, (l, d) => Sb(l) && l.type === Rg && l.props.index === void 0 ? Mb(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return B(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), v("div", { ref: n, role: "menu", ...r, children: a });
}
const iC = (e, t, r) => mo(e, r).toLowerCase().includes(t.toLowerCase()), Wd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", mo = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function sC(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? Wd(r[0]) : "") : (d = n || (r.length > 0 ? Wd(r[0]) : ""), u = (h, y) => iC(h, y, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return u(h, t);
    } catch (y) {
      return console.warn("Error filtering item:", h, y), !1;
    }
  }).sort((h, y) => {
    const m = (E) => (p.has(E) || p.set(E, mo(E, f).toLowerCase()), p.get(E) ?? ""), T = a ? mo(h, f) : m(h), _ = a ? mo(y, f) : m(y);
    for (const E of c)
      switch (E) {
        case "exact":
          if (T === l && _ !== l)
            return -1;
          if (_ === l && T !== l)
            return 1;
          break;
        case "startsWith":
          if (T.startsWith(l) && !_.startsWith(l))
            return -1;
          if (_.startsWith(l) && !T.startsWith(l))
            return 1;
          break;
        case "contains": {
          const N = T.indexOf(l), A = _.indexOf(l);
          if (N !== -1 && A === -1)
            return -1;
          if (A !== -1 && N === -1)
            return 1;
          if (N !== -1 && A !== -1)
            return N - A;
          break;
        }
      }
    return T.localeCompare(_);
  });
}
const Ha = {
  Root: rC,
  Options: nC,
  Option: Rg
};
function oC(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return De(() => sC({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function aC() {
  const { moveUp: e, moveDown: t, select: r } = iu();
  return De(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const cC = () => {
  const e = aC(), [t] = ue();
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
    return t.registerCommand(qr, r, Ue);
  }, [t, e]);
};
function lC() {
  return cC(), null;
}
const uC = ["Shift", "Control", "Alt", "Meta"];
function qg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ue(), d = s !== void 0, [u, f] = he(""), p = d ? s ?? "" : u, h = oC({ query: p, items: t, filterBy: "name" }), y = (m) => {
    n?.(), r ? r(m) : m.action(l);
  };
  return B(() => {
    a?.(p, h);
  }, [a, p, h]), B(() => l.registerCommand(qr, (m) => {
    if (d || c?.includes(m.key) || uC.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return n?.(), !1;
    const _ = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((E) => E.slice(0, -1));
      }
    }[m.key];
    return _ ? (m.stopPropagation(), m.preventDefault(), _(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && f((E) => E + m.key), !0) : !1;
  }, Ue), [l, d, p, o, n, c]), Me(Ha.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => y(m), children: [!d && v("input", { value: p, type: "text", disabled: !0 }), v(lC, {}), v(Ha.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((_, E) => Me(Ha.Option, { index: E, children: [v("span", { className: "label", children: _.label ?? _.name }), v("span", { className: "description", children: _.description })] }, _.name)) })] });
}
function dC({ trigger: e, items: t }) {
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
      const l = R();
      if (O(l))
        return l;
    });
    a.read(() => {
      const l = R();
      !O(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && v(Og, { isOpen: n, children: ({ placement: o }) => v(qg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function fC({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: De(() => {
    if (!t || !e)
      return;
    const i = dr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = dr(o), { action: c } = r(o, a);
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
function gs(e, t) {
  return `${e}:${t}`;
}
function pC(e, t) {
  B(() => {
    if (!e.hasNodes([Ye]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return et(hl(e, Ye, (n) => qn(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], h = a[l]?.[u], y = c[l]?.[u];
          i.addID(l, u, f, p, h, y);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Ye, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = Y(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : ke(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Ye.isReservedType(c))
              for (const d of l) {
                let u = t.get(gs(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(gs(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(gs(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const hC = Vn(function({ logger: t, viewOptions: r }, n) {
  const [i] = ue(), s = De(() => /* @__PURE__ */ new Map(), []);
  pC(i, s);
  const o = (a, c, l) => {
    const d = Array.from(l ?? s.get(gs(a, c)) ?? []);
    if (d.length !== 0)
      for (const u of d) {
        const f = Y(u);
        ke(f) && (f.deleteID(a, c), f.hasNoIDsForEveryType() && Ao(f));
      }
  };
  return al(n, () => ({
    setAnnotation(a, c, l, d, u, f, p) {
      if (Ye.isReservedType(c))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const h = Jl(a, r);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        o(c, l), xl(h, c, l, d, u, f, p);
      }, { tag: gc });
    },
    removeAnnotation(a, c) {
      if (Ye.isReservedType(a))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      const l = s.get(gs(a, c));
      l === void 0 || l.size === 0 || i.update(() => {
        o(a, c, l);
      }, { tag: gc });
    }
  })), null;
}), gC = [];
function mC({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = gC, onChange: n }) {
  const [i] = ue();
  return qs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(xp) && !d.has(Kp) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = yC(i, s);
        u.length !== 0 && n(o, i, d, u);
      });
  }, [i, e, t, r, n]), null;
}
function yC(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new cs();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = Y(i), o = s !== null && er(s) !== void 0;
    if (t.size === 1 && C(s) && !o && Hv(s)) {
      const a = mg(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = Y(i);
          return new cs([C(u) ? wc(u) : { insert: "" }]);
        }), l = new cs([wc(s)]), d = new cs(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = Nd(r), c = Nd(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function bC(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += kC(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), xC(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += vC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), CC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function kC(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), TC(t, e.retain, e.attributes, r, n)), e.retain);
}
function TC(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = xe();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Nr(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, h = Math.min(s, p);
        if (h > 0) {
          let y = d;
          const m = f > 0, T = h < u - f;
          if (m && T) {
            const [, _] = d.splitText(f);
            [y] = _.splitText(h);
          } else m ? [, y] = d.splitText(f) : T && ([y] = d.splitText(h));
          if (nn(r)) {
            const _ = y.getParent();
            if (D(_)) {
              const E = r.char;
              let N;
              Array.isArray(E) ? a >= 0 && a <= E.length - 1 && (N = E[a]) : a === 0 && (N = E);
              const A = N ? Ln(N, _) : !1;
              if (A && Array.isArray(E) && E.length > 1) {
                const S = Te("");
                y.replace(S);
                const M = typeof r.segment == "string" ? r.segment : void 0, q = zi(E.slice(1), n, y, M);
                let J = S;
                for (const H of q)
                  J.insertAfter(H), J = H;
                S.remove(), Nt(r, y);
              } else if (A)
                Nt(r, y);
              else {
                y.remove();
                const S = Hd(y, r, n, i);
                if (S && S.length > 0) {
                  let M = _;
                  for (const q of S)
                    M.insertAfter(q), M = q;
                }
              }
            } else {
              const E = Te("");
              y.replace(E);
              const N = Hd(y, r, n, i);
              if (N && N.length > 0) {
                let A = E;
                for (const S of N)
                  A.insertAfter(S), A = S;
                E.remove();
              } else
                E.replace(y);
            }
          } else
            Nt(r, y);
          s -= h;
        }
      }
      o += u;
    } else if (At(d))
      e <= o && o < e + t && s > 0 && (Gd(d, r), s -= 1), o += 1;
    else if (D(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (nn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Nc(d, p.style), typeof p.cid == "string" && kt(d, $n, () => p.cid);
            const h = Ke(p, Lo);
            h && Object.keys(h).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...h
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || RC(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && pc(d), !0;
        }
      }
      u && pc(d), a -= 1;
    } else if (Kt(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!ut(d))
          Gd(d, r);
        else if (su(r)) {
          const p = Lg(r.para, n);
          p && d.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if ($(d)) {
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
function Hd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = zi(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Nt(t, e);
    return;
  }
  const a = {};
  Kg.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Nt(t, e), s;
}
function $g(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Ee(t))) : _t(r) && r.getTextType() === "marker" && r.setTextContent(Ee(t) + I);
}
function Nc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = D(e.getParent()), i = e.getFirstChild();
  _t(i) && i.getTextType() === "marker" && i.getTextContent() === Ee(r, n) && i.setTextContent(Ee(t, n));
  const s = e.getLastChild();
  _t(s) && s.getTextType() === "marker" && s.getTextContent() === Ve(r, n) && s.setTextContent(Ve(t, n));
}
function Gd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && nn(t)) {
      const i = Rc(n);
      if (Nc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        kt(e, $n, () => o);
      }
      const s = Ke(i, Lo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Fe(e) || me(e) || Pe(e) || K(e) || Ae(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (st(e) || re(e) || D(e)) && (r === "style" && re(e) ? $g(e, n) : r === "style" && D(e) ? Nc(e, n) : r === "code" && st(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && kt(e, Zr, () => n));
  }
}
function xC(e, t, r) {
  if (t <= 0)
    return;
  const n = xe();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Nr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (At(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Kt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Kt(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Dt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Oe(p)) {
            let h = i + 1;
            const y = p.getChildren();
            for (const T of y) {
              if (s <= 0)
                break;
              const _ = i;
              if (i = h, o(T)) {
                i = _;
                break;
              }
              Nr(T) ? h += T.getTextContentSize() : At(T) && (h += 1), i = _;
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
function vC(e, t, r, n, i) {
  if (t === As)
    return Jd(e, r, n, i);
  if (t.endsWith(As) && !su(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (nn(r))
        throw new Error("Text + LF should not have char attributes");
      o += Uo(e, s, r, i);
    }
    return o += Jd(e + o, r, n, i), o;
  } else return nn(r) ? _C(e, t, r, n, i) : Uo(e, t, r, i);
}
function _C(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Te(t === "" ? Ut : t);
  Nt(r, s);
  let o;
  {
    let m = function(T) {
      if (Nr(T)) {
        const _ = T.getTextContentSize();
        if (e >= y && e < y + _) {
          const E = T.getParent();
          return D(E) && (o = E), !0;
        }
        y += _;
      } else if (At(T))
        y += 1;
      else if (D(T)) {
        const _ = T.getChildren();
        for (const E of _)
          if (m(E))
            return !0;
      } else if ($(T)) {
        const _ = T.getChildren();
        for (const E of _)
          if (m(E))
            return !0;
        Kt(T) && (y += 1);
      }
      return !1;
    };
    const h = xe();
    let y = 0;
    m(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Ln(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Ln(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = zi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(D);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Uo(e, t, void 0, i);
  const f = {};
  for (const [h, y] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof y == "string" && (f[h] = y);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const h of d)
    if (!Ig(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Uo(e, t, void 0, i));
}
function Uo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = xe();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Nr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = Te(t);
        if (Nt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          D(f) && !nn(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (At(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const u = Te(t);
        Nt(r, u);
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
        const u = Te(t);
        return Nt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Kt(c)) {
      if (!o && e === s) {
        const u = Te(t);
        Nt(r, u);
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
        const u = Te(t);
        return Nt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if ($(c)) {
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
    const c = Te(t);
    Nt(r, c);
    const l = Dt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Ig(e, t, r) {
  const n = xe();
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
          if (Oe(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Dt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Nr(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (At(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (Kt(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (ut(d) && Kt(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
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
      Oe(a) ? ut(a) && re(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Oe(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Oe(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function CC(e, t, r, n, i) {
  let s;
  return Jr("chapter", t) ? s = MC(t.insert.chapter, r) : Jr("verse", t) ? s = EC(t.insert.verse, r) : Jr("ms", t) ? s = AC(t.insert.ms) : Jr("note", t) ? s = Dg(t, r, n, i) : Jr("unknown", t) ? s = Ug(t, r, n, i) : Jr("unmatched", t) && (s = wC(t.insert.unmatched, r)), s ? Ig(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Jd(e, t, r, n) {
  let i;
  su(t) ? i = Lg(t.para, r) : NC(t) && (i = SC(t.book)), i ??= Dt();
  const s = i, o = re(s), a = ut(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Nr(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (re(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [y] = h > 0 ? u.splitText(h) : [void 0];
          let m, T = y?.getPreviousSibling();
          for (; T; ) {
            const _ = T;
            T = T.getPreviousSibling(), m ? m.insertBefore(_) : s.append(_), m = _;
          }
          return y && s.append(y), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (At(u))
      c += 1;
    else if (Kt(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (ut(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (re(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && re(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if ($(u)) {
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
  return d(xe()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function SC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== vs || !r || !Ft.isValidBookCode(r))
    return;
  const n = Ke(e, qv);
  return wh(r, n);
}
function Lg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ke(e, Rv), i = _s(r, n);
  if (!Ki(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), la());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ee(r) + I;
    i.append(t.hasGutterParaMarkers ? vT(s) : wr("marker", s));
  }
  return i;
}
function MC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ke(e, $v);
  let a;
  if (t.markerMode === "editable")
    a = gh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Pl(r, c, n, i, s, o);
  }
  return a;
}
function EC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ke(e, Iv);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Lt(r, n);
    c = nh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = Ul(n, l, i, s, o, a);
  }
  return c;
}
function AC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ke(e, Lv);
  return jp(t, r, n, s, i);
}
function Dg(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Ke(i.note, Dv), d = typeof l?.closed == "string" ? l.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const p = [];
  for (const y of c?.ops ?? [])
    if (typeof y.insert == "string")
      if (nn(y.attributes)) {
        const m = zi(y.attributes.char, t, Te(y.insert), void 0, Fg(y.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...m);
      } else
        p.push(Te(y.insert));
  return wg(s, o, p, t, r, f, d).setCategory(a).setUnknownAttributes(l);
}
function Ug(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ke(i, Uv), l = Ml(s, o, c), d = a?.ops ?? [];
  d.length > 0 && PC(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && kt(l, Zr, () => u), l;
}
function PC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (nn(s.attributes)) {
        const o = Te(s.insert), a = zi(s.attributes.char, t, o, void 0, Fg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Te(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Jr("unknown", s)) {
        const o = Ug(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Jr("note", s)) {
        const o = Dg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function wC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Al(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Fg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Rc(e) {
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
    const c = e.map(Rc), l = c[0], d = i?.[i.length - 1];
    if (D(d) && Ln(l, d))
      return c.length > 1 ? zi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => d.append(p)) : r && d.append(r), [];
    a();
    const u = c.reduceRight((f, p, h) => {
      const y = Pr(p.style, Ke(p, Lo));
      if (typeof p.cid == "string" && kt(y, $n, () => p.cid), n && h === c.length - 1 && kt(y, Zr, () => n), f)
        if (D(f)) {
          const m = f.getMarker(), T = [];
          Ja(m, T, t, !0), T.forEach((E) => y.append(E)), y.append(f);
          const _ = [];
          Ga(f, _, t, !0), _.forEach((E) => y.append(E));
        } else
          y.append(f);
      return y;
    }, r);
    return Ja(l.style, u, t, s), Ga(u, u, t, s), [u];
  } else {
    const c = Rc(e), l = i?.[i.length - 1];
    if (D(l) && Ln(c, l))
      return r && l.append(r), [];
    a();
    const d = Pr(c.style, Ke(c, Lo));
    return typeof c.cid == "string" && kt(d, $n, () => c.cid), n && kt(d, Zr, () => n), r && d.append(r), Ja(c.style, d, t, s), Ga(d, d, t, s), [d];
  }
}
function Ga(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && OC(e.getMarker(), t, r, !1, n);
}
function Ja(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = wr("marker", Ee(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function OC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = wr("marker", n ? Ve("") : Ve(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function NC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function su(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function nn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function RC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Nt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        kt(t, Zr, () => n);
        continue;
      }
      if (qC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Kg = [
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
function qC(e) {
  return Kg.includes(e);
}
function $C() {
  const [e] = ue();
  return B(() => e.registerCommand(Zo, (t) => (IC(t), !1), wn), [e]), null;
}
function IC(e) {
  if (LC(e.target))
    return;
  const t = R();
  O(t) && DC(t);
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
  return r === 0 ? !1 : (Zt(e, r), !0);
}
function LC(e) {
  if (!vp(e))
    return !1;
  const t = Ds(e);
  if (!_T(t))
    return !1;
  const r = t.getParent();
  return r ? Oe(r) ? Bi(r) : (Zt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function DC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = Y(t.key);
  if (!Oe(r))
    return !1;
  const n = r.getFirstChild();
  return !br(n) && !Qn(n) ? !1 : Bi(r);
}
function UC() {
  const [e] = ue();
  return B(() => {
    const t = (r) => r instanceof KeyboardEvent && !FC(r) || !zg() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return et(
      e.registerCommand(qr, t, Ue),
      e.registerCommand(ul, t, Ue),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(Cr, t, Sr),
      e.registerCommand(On, t, Sr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(dl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Ds(r.target);
        return !n || !Fn(n) ? !1 : (r.preventDefault(), !0);
      }, Ue),
      e.registerCommand(Rb, t, Ue),
      e.registerCommand(qb, t, Ue),
      e.registerCommand($b, t, Ue)
    );
  }, [e]), null;
}
function FC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Fn(e) {
  return it(e, (t) => Ae(t) || Lh(t)) ?? void 0;
}
function zg() {
  const e = R();
  return O(e) ? Fn(e.anchor.getNode()) !== void 0 || Fn(e.focus.getNode()) !== void 0 : !1;
}
function KC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function zC(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), KC(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function BC(e, t, r, n) {
  if (!nS(t) || zC(e, r))
    return !1;
  const i = r === "up" ? Nv(t) : Ov(t);
  return i && n.preventDefault(), i;
}
function jC({ viewOptions: e }) {
  const [t] = ue();
  return VC(t, e), null;
}
function VC(e, t) {
  B(() => {
    if (!e.hasNodes([yr, Ct, Ne]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = R();
      if (!O(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = Yd(o), u = QC(i, Xd(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return BC(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Yd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Xd(a, n.key) ? l = !c && ef(i, "next") || !c && HC(i) || tS(i) || !c && s && Zd(i, "next") : WC(a, n.key) && (l = !c && ef(i, "previous") || !c && GC(i) || rS(i, t) || !c && s && Zd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(qr, r, Ue);
  }, [e, t]);
}
function Yd(e) {
  return e.dir || "ltr";
}
function Xd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function WC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function qc(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = er(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function HC(e) {
  const t = qc(Jh(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Zt(t, 0), !0);
}
function GC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = qc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Qd(n);
  }
  if (t.offset === 0) {
    const n = qc(r);
    return n ? Qd(n) : !1;
  }
  return !1;
}
function Qd(e) {
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
const Fo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function JC(e) {
  if (Fo)
    for (const { segment: r } of Fo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function YC(e) {
  if (Fo) {
    let n = 0;
    for (const { index: i } of Fo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Bg(e) {
  for (let t = e; t; t = t.getParent())
    if ($(t) && !t.isInline())
      return t;
}
function jg(e) {
  return !!e && P(e) && Fn(e) !== void 0;
}
function Oi(e) {
  return C(e) && !e.isToken() && !jg(e) && e.getTextContentSize() > 0;
}
function Vg(e) {
  return Xo(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : C(e) ? (e.isToken() || jg(e)) && e.getTextContentSize() > 0 : _p(e) ? !Pe(e) : !1;
}
function Ni(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function ha(e, t, r) {
  for (let n = e; n; ) {
    if (Vg(n))
      return n;
    if ($(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Ni(n, t, r);
      continue;
    }
    if (Oi(n))
      return n;
    n = Ni(n, t, r);
  }
}
function ou(e, t, r, n, i) {
  return r === "element" && $(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Ni(e, n, i) : r === "text" && Vg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Ni(e, n, i);
}
function Ya(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = ou(e.node, e.offset, e.kind, "previous", t), n = ha(r, "previous", t);
  if (!n)
    return e;
  if (Oi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function XC(e, t) {
  const r = e.getNode(), n = Bg(r);
  if (!n)
    return;
  if (e.type === "text" && Oi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Ya({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = ou(r, e.offset, e.type, t, n), s = ha(i, t, n);
  if (!s)
    return;
  if (Oi(s)) {
    const c = s.getTextContent(), l = t === "next" ? JC(c) : YC(c);
    return Ya({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Ya({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Wg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = XC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Zd(e, t) {
  return Wg(e, t, "collapse");
}
function QC(e, t) {
  return Wg(e, t, "extend");
}
function ZC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && Oi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = ou(n, e.offset, e.type, t, r);
  return ha(i, t, r) === void 0;
}
function eS(e, t) {
  const r = xe();
  for (let n = e; n; ) {
    const i = Ni(n, t, r), s = i && ha(i, t, r);
    if (!s)
      return;
    if (n = Fn(s), !n)
      return s;
  }
}
function ef(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Fn(n))
    return !1;
  const i = Bg(n);
  if (!i || !ZC(r, t, i))
    return !1;
  const s = Ni(i, t, xe()), o = s && Fn(s);
  if (!o)
    return !1;
  const a = eS(o, t);
  if (!a)
    return !0;
  if (Oi(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function tf(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function tS(e) {
  const t = e.anchor.getNode(), r = Jh(e);
  if (K(r) && !P(r.getFirstChild())) {
    if (Oe(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Oe(i) && Bi(i)) && i.selectStart(), !0;
      }
    } else return _t(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Oe(t) && K(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : tf(r), !0;
  }
  const n = r?.getParent();
  if (_t(r) && K(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? tf(n) : n.selectEnd(), !0;
  }
  return !1;
}
function rS(e, t) {
  const r = qx(e);
  if (Ws(r) && !r.getPreviousSibling())
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
  if (Oe(r) && t?.noteMode === "collapsed") {
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
  const s = er(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (nr(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function nS(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return me(t) && _p(t);
}
function iS() {
  const [e] = ue();
  return sS(e), null;
}
function sS(e) {
  B(() => {
    if (!e.hasNodes([ve]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return et(
      e.registerNodeTransform(ve, cS),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ve, yT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ve, kh),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ve, (t) => Ms(Or("char"), t)),
      e.registerNodeTransform(Be, lS)
    );
  }, [e]);
}
function Xa(e) {
  return e.getChildren().some(P);
}
function oS(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Vs(n)) {
    const i = n.getTextContent();
    i.startsWith(I) && (i === I ? n.remove() : n.setTextContent(i.slice(I.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function aS(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function cS(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Xa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = te(e, $n), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && Ln({ style: t, cid: r }, i) && Ot(n, i.getUnknownAttributes()))
    if (Xa(i)) {
      if (oS(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && Ln({ style: t, cid: r }, s) && Ot(n, s.getUnknownAttributes()) && (Xa(s) ? aS(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function lS(e) {
  const t = e.getParent();
  if (!D(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Ut) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Hg(e) {
  return e.replaceAll("	", " ");
}
const au = (e) => {
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
      n.setData(o, Hg(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Cr, s);
  });
}, cu = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Hg(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Cr, i);
  });
};
function uS() {
  const [e] = ue();
  return B(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(_o ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(ea, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(On, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? cu(e) : au(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function dS({ logger: e }) {
  const [t] = ue();
  return B(() => et(
    // When the backslash or forward slash key is typed.
    t.registerCommand(qr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), xi),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Cr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, xi),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(dl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, xi)
  ), [t, e]), null;
}
function fS({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), v("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: v("span", { className: "text", children: i.title }) });
}
function pS({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return v("div", { className: "typeahead-popover", children: v("ul", { children: e.map((i, s) => v(fS, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let hS = 0;
class rs {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${hS++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function gS({ options: e } = {}) {
  const [t] = ue(), [r, n] = he(() => !t.isEditable()), [i, s] = he({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = he(void 0), c = De(() => {
    const u = [
      new rs("Cut", {
        onSelect: () => {
          t.dispatchCommand(On, null);
        },
        isDisabled: r
      }),
      new rs("Copy", {
        onSelect: () => {
          t.dispatchCommand(ea, null);
        }
      }),
      new rs("Paste", {
        onSelect: () => {
          au(t);
        },
        isDisabled: r
      }),
      new rs("Paste as Plain Text", {
        onSelect: () => {
          cu(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new rs(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = fe(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  B(() => {
    const u = (f) => {
      const p = f.target;
      t.getRootElement() === p || qh(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", u), f && f.addEventListener("contextmenu", u);
    });
  }, [t]), B(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return globalThis.addEventListener("scroll", u, !0), () => globalThis.removeEventListener("scroll", u, !0);
  }, [i.isOpen, l]), B(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return document.addEventListener("pointerdown", u), () => document.removeEventListener("pointerdown", u);
  }, [i.isOpen, l]), B(() => {
    if (!i.isOpen)
      return;
    const u = (f) => {
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
    return document.addEventListener("keydown", u, !0), () => document.removeEventListener("keydown", u, !0);
  }, [i.isOpen, l, c, o, t]), B(() => t.registerEditableListener((u) => {
    n(!u);
  }), [t]);
  const d = Q(null);
  return qs(() => {
    const u = d.current;
    if (!u)
      return;
    const { width: f, height: p } = u.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), y = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    u.style.left = `${h}px`, u.style.top = `${y}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Zb.createPortal(v("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: v(pS, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function mS() {
  const [e] = ue();
  return B(() => e.registerCommand(qr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(_o ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Sr), [e]), null;
}
function yS({ isEditable: e }) {
  const [t] = ue();
  return qs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function rf(e) {
  return !!e && Rl(Y(e));
}
function Gg(e) {
  const [t] = ue(), r = Q(void 0), n = fe((i) => {
    let s = !1;
    const o = R(), a = O(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = rf(c);
    c && !l && (r.current = void 0);
    let d;
    if (i) {
      const u = i.getParentOrThrow(), f = i.getIndexWithinParent() + 1, p = ca(u, f);
      if (p)
        r.current = p.getKey(), d = p.getKey();
      else {
        const h = wx();
        i.insertAfter(h), r.current = h.getKey(), d = h.getKey(), s = !0;
      }
      Zt(u, f);
    }
    if (c && l && c !== a && c !== d) {
      const u = Y(c);
      C(u) && (u.remove(), s = !0), r.current === c && (r.current = void 0);
    }
    return s;
  }, []);
  return B(() => {
    const i = () => {
      const a = e(), c = R(), l = O(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && n(a) && Nn(ks);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Hs(c) || !c.includes(Ei))
        return;
      const l = R(), d = O(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Ox(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(Ei).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = et(t.registerCommand(hr, () => (i(), !1), wn), t.registerCommand(fl, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = rf(a);
      }), c && t.update(() => {
        const l = Y(a);
        C(l) && (l.remove(), Nn(ks));
      }), r.current = void 0, !1;
    }, wn), t.registerNodeTransform(Be, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function bS() {
  const e = R();
  if (!O(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!$(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!me(i) || ca(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || me(s))
    return i;
}
function kS() {
  return Gg(bS), null;
}
function TS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
        const d = o.getRootElement(), u = d?.ownerDocument.activeElement, f = d != null && u != null && (d === u || d.contains(u));
        o.update(() => {
          f || Nn(Ib), o.setEditorState(l), o.dispatchCommand(Lb, void 0);
        }, { tag: ml });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function xS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ue();
  return vS(t, n), _S(i, e, r, n), null;
}
function vS(e, t) {
  const r = Q(void 0), n = Q(void 0), i = e.noteCallers, s = e.crossRefCallers;
  B(() => {
    let o = i;
    (!o || o.length <= 0) && (o = y_), r.current !== o && (r.current = o, nf("note-callers", o, t));
  }, [t, i]), B(() => {
    let o = s;
    (!o || o.length <= 0) && (o = b_), n.current !== o && (n.current = o, nf("cross-ref-callers", o, t));
  }, [t, s]);
}
function _S(e, t, r, n) {
  B(() => {
    if (!e.hasNodes([ve, Ne, Xt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => wS(s));
    return et(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ne, (s) => CS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ve, SS),
      e.registerNodeTransform(Be, MS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Xt, ES),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Xt, (s, { prevEditorState: o }) => AS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(hr, () => PS(e, t, r, n), Mt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function CS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => nr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    C(i) && !P(i) && i.getTextContent() !== Et(e.getCaller()) && e.insertBefore(i);
  }
}
function SS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => nr(o));
  if (!D(e) || !K(t) || !n)
    return;
  const i = ql(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  C(s) ? s.getTextContent() !== I && s.setTextContent(I) : e.insertAfter(Te(I));
}
function MS(e) {
  const t = er(e), r = t?.getChildren(), n = r?.find((o) => nr(o));
  if (!C(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && K(i) && e.getTextContent() !== I && (e.setTextContent(I), e.selectEnd()), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Ut) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = ql(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function ES(e) {
  if (!nr(e))
    return;
  const t = e.getNextSibling();
  !C(t) || P(t) ? e.insertAfter(Te(I)) : t.getTextContent() !== I && t.setTextContent(I);
}
function AS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = Y(r), a = o?.getParent();
      return nr(o) && K(a) && a.getCaller() === So;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function PS(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = R();
  if (!O(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = it(o, (c) => K(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = Y(t.current);
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
      if (c && c.getIsCollapsed() && Oe(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, ns(e, l, n);
      }
    }
  }
  if (Oe(o)) {
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
  const n = Y(t);
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
function wS(e) {
  const t = R();
  if (!O(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && C(s)) {
    e.preventDefault();
    const o = Qo();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Pn(o);
  }
}
function nf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (OS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function OS(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function ga(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = en(e);
  return r && t.push(r), t.length > 0 && t.every((n) => C(n) && n.getMode() === "token") ? t : [];
}
function NS(e) {
  const t = e.getParent();
  if (K(t))
    return ga(t).some((r) => r.is(e)) ? t : void 0;
}
function Ko(e) {
  const t = ga(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function RS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function qS(e) {
  const t = Db();
  if (!O(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Ko(e);
  const i = RS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Ko(e);
}
function $c(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = NS(t);
  if (r)
    return $S(r, t, e.offset) ? void 0 : r;
}
function $S(e, t, r) {
  const n = ga(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function IS(e) {
  const t = ga(e), r = t[t.length - 1];
  C(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Zt(e, Ko(e));
}
function LS(e = !1) {
  const t = R();
  if (!O(t))
    return !1;
  if (!t.isCollapsed())
    return DS(t.anchor, t.focus);
  const r = $c(t.anchor);
  if (!r)
    return !1;
  if (!e && qS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Zt(n, r.getIndexWithinParent());
  } else
    IS(r);
  return !0;
}
function DS(e, t) {
  const r = $c(e), n = $c(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && sf(e, r, i), n && sf(t, n, !i), !0;
}
function sf(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), Ko(t), "element");
}
function US() {
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
  }, [e]), B(() => e.registerCommand(hr, () => (LS(t.current) && e.dispatchCommand(yl, void 0), !1), wn), [e]), null;
}
function FS({ onChange: e, viewOptions: t }) {
  const [r] = ue();
  return B(() => r.registerCommand(hr, () => {
    const n = Yl(t);
    return e?.(n), !1;
  }, Mt), [r, e, t]), null;
}
function KS() {
  const [e] = ue();
  return zS(e), null;
}
function zS(e) {
  B(() => {
    if (!e.hasNodes([tt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(tt, (t) => BS(t, e));
  }, [e]);
}
function BS(e, t) {
  gg(t, e.getKey()) && hg(e.getFirstChild()), !(!re(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = Y(e.getKey());
    return re(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Jg({ onStateChange: e }) {
  const [t] = ue(), [r, n] = he(t), i = Q(!1), s = Q(!1), o = Q(void 0), a = Q(void 0), c = fe(() => {
    const l = R();
    let d;
    if (O(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : it(u, (T) => {
        const _ = T.getParent();
        return _ !== null && Ub(_);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Es(p) && (p = it(u, re) ?? p);
      const h = p.getKey(), y = r.getElementByKey(h), m = Ix(u, f);
      if (m && wv(m) && (d = m.getMarker()), y !== null && (re(p) || st(p) || Ws(p))) {
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
  return B(() => t.registerCommand(hr, (l, d) => (c(), n(d), !1), Sr), [t, c]), B(() => et(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Fb, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Sr), r.registerCommand(Kb, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Sr)), [c, r, e]), null;
}
function jS(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function sn(e) {
  return e ? Oe(e) ? e : it(e, (r) => Oe(r)) ?? void 0 : void 0;
}
function Yg(e) {
  if (!O(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = sn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function lu(e) {
  return O(e) && e.isCollapsed() && e.anchor.type === "element" || !O(e) && !Cp(e) ? !1 : e.getNodes().some((t) => me(t));
}
function Xg(e) {
  if (!O(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = sn(r);
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
function Qg(e) {
  if (!O(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = sn(r);
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
function of(e, t) {
  return !!Ic(e, t);
}
function Ic(e, t) {
  if (!O(e) || !e.isCollapsed())
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
function zo(e, t) {
  if (!O(e))
    return !1;
  const r = sn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Qa(e) {
  return lu(e) || Yg(e);
}
function VS(e, t) {
  if (lu(e) || Yg(e))
    return !0;
  if (!O(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Xg(e) && zo(e, "backward") || of(e, "backward");
    case "deleteForward":
      return Qg(e) && zo(e, "forward") || of(e, "forward");
    case "insertText":
      return !1;
  }
}
function WS(e, t) {
  if (!(!O(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Ic(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Xg(e) && zo(e, "backward")) {
        const n = sn(e.anchor.getNode());
        if (Oe(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Ic(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Qg(e) && zo(e, "forward")) {
        const i = sn(e.anchor.getNode())?.getNextSibling();
        if (Oe(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function af(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Cp(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!O(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!O(e) || e.isCollapsed())
    return !1;
  const r = sn(e.anchor.getNode()), n = sn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Zg(e) {
  if (C(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else $(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function HS(e) {
  const t = e.getPreviousSibling();
  if (!Oe(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Zg(r) : Bi(t) || t.selectStart();
}
function em(e) {
  return me(e) || Fe(e) ? [] : Oe(e) ? e.getChildren().flatMap(em) : [e];
}
function GS(e) {
  const t = [];
  for (const r of e) {
    const n = em(r);
    n.length !== 0 && (Oe(r) && t.length > 0 && t.push(Te(" ")), t.push(...n));
  }
  return t;
}
function cf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function JS(e) {
  if (Array.isArray(e)) return e;
}
function YS(e, t) {
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
function XS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QS(e, t) {
  return JS(e) || YS(e, t) || ZS(e, t) || XS();
}
function ZS(e, t) {
  if (e) {
    if (typeof e == "string") return cf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? cf(e, t) : void 0;
  }
}
const tm = Object.entries, lf = Object.setPrototypeOf, eM = Object.isFrozen, tM = Object.getPrototypeOf, rM = Object.getOwnPropertyDescriptor;
let rt = Object.freeze, ot = Object.seal, yi = Object.create, rm = typeof Reflect < "u" && Reflect, Lc = rm.apply, Dc = rm.construct;
rt || (rt = function(t) {
  return t;
});
ot || (ot = function(t) {
  return t;
});
Lc || (Lc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Dc || (Dc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const hi = Ge(Array.prototype.forEach), nM = Ge(Array.prototype.lastIndexOf), uf = Ge(Array.prototype.pop), gi = Ge(Array.prototype.push), iM = Ge(Array.prototype.splice), Yr = Array.isArray, us = Ge(String.prototype.toLowerCase), Za = Ge(String.prototype.toString), df = Ge(String.prototype.match), is = Ge(String.prototype.replace), ff = Ge(String.prototype.indexOf), sM = Ge(String.prototype.trim), oM = Ge(Number.prototype.toString), aM = Ge(Boolean.prototype.toString), pf = typeof BigInt > "u" ? null : Ge(BigInt.prototype.toString), hf = typeof Symbol > "u" ? null : Ge(Symbol.prototype.toString), Ze = Ge(Object.prototype.hasOwnProperty), ss = Ge(Object.prototype.toString), Qe = Ge(RegExp.prototype.test), _n = cM(TypeError);
function Ge(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Lc(e, t, n);
  };
}
function cM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Dc(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : us;
  if (lf && lf(e, null), !Yr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (eM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function lM(e) {
  for (let t = 0; t < e.length; t++)
    Ze(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = yi(null);
  for (const n of tm(e)) {
    var r = QS(n, 2);
    const i = r[0], s = r[1];
    Ze(e, i) && (Yr(s) ? t[i] = lM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function uM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return oM(e);
    case "boolean":
      return aM(e);
    case "bigint":
      return pf ? pf(e) : "0";
    case "symbol":
      return hf ? hf(e) : "Symbol()";
    case "undefined":
      return ss(e);
    case "function":
    case "object": {
      if (e === null)
        return ss(e);
      const t = e, r = Gt(t, "toString");
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
function Gt(e, t) {
  for (; e !== null; ) {
    const n = rM(e, t);
    if (n) {
      if (n.get)
        return Ge(n.get);
      if (typeof n.value == "function")
        return Ge(n.value);
    }
    e = tM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function dM(e) {
  try {
    return Qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const gf = rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ec = rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), tc = rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), fM = rt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), rc = rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), pM = rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), mf = rt(["#text"]), yf = rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), nc = rt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), bf = rt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ao = rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hM = ot(/{{[\w\W]*|^[\w\W]*}}/g), gM = ot(/<%[\w\W]*|^[\w\W]*%>/g), mM = ot(/\${[\w\W]*/g), yM = ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), bM = ot(/^aria-[\-\w]+$/), kf = ot(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), kM = ot(/^(?:\w+script|data):/i), TM = ot(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), xM = ot(/^html$/i), vM = ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Tf = ot(/<[/\w!]/g), xf = ot(/<[/\w]/g), _M = ot(/<\/no(script|embed|frames)/i), CM = ot(/\/>/i), St = {
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
}, SM = function() {
  return typeof window > "u" ? null : window;
}, MM = function(t, r) {
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
}, vf = function() {
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
}, Hr = function(t, r, n, i) {
  return Ze(t, r) && Yr(t[r]) ? ge(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function nm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : SM();
  const t = (F) => nm(F);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== St.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = Gt(f, "cloneNode"), h = Gt(f, "remove"), y = Gt(f, "nextSibling"), m = Gt(f, "childNodes"), T = Gt(f, "parentNode"), _ = Gt(f, "shadowRoot"), E = Gt(f, "attributes"), N = o && o.prototype ? Gt(o.prototype, "nodeType") : null, A = o && o.prototype ? Gt(o.prototype, "nodeName") : null, S = o && o.prototype ? Gt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let M, q = "", J, H = !1, ne = 0;
  const ce = function() {
    if (ne > 0)
      throw _n('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, le = function(g) {
    ce(), ne++;
    try {
      return M.createHTML(g);
    } finally {
      ne--;
    }
  }, ye = function(g) {
    ce(), ne++;
    try {
      return M.createScriptURL(g);
    } finally {
      ne--;
    }
  }, qe = function() {
    return H || (J = MM(u, i), H = !0), J;
  }, Z = r, z = Z.implementation, ie = Z.createNodeIterator, $e = Z.createDocumentFragment, at = Z.getElementsByTagName, jt = n.importNode;
  let pe = vf();
  t.isSupported = typeof tm == "function" && typeof T == "function" && z && z.createHTMLDocument !== void 0;
  const Vt = hM, wt = gM, Sa = mM, ir = yM, ti = bM, Hi = kM, se = TM, ft = vM;
  let Zs = kf, _e = null;
  const kr = ge({}, [...gf, ...ec, ...tc, ...rc, ...mf]);
  let X = null;
  const Xe = ge({}, [...yf, ...nc, ...bf, ...ao]);
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
  })), Fr = null, Kr = null;
  const sr = Object.seal(yi(null, {
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
  let ri = !0, ni = !0, zr = !1, mn = !0, or = !1, mt = !0, Wt = !1, Ht = !1, Br = null, jr = null, Gi = !1, Tr = !1, ii = !1, yn = !1, w = !0, U = !1;
  const j = "user-content-";
  let W = !0, de = !1, We = {}, Je = null;
  const xr = ge({}, [
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
  let Ma = null;
  const qu = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), eo = "http://www.w3.org/1998/Math/MathML", to = "http://www.w3.org/2000/svg", ar = "http://www.w3.org/1999/xhtml";
  let si = ar, Ea = !1, Aa = null;
  const ab = ge({}, [eo, to, ar], Za), $u = rt(["mi", "mo", "mn", "ms", "mtext"]);
  let Pa = ge({}, $u);
  const Iu = rt(["annotation-xml"]);
  let wa = ge({}, Iu);
  const cb = ge({}, ["title", "style", "font", "a", "script"]);
  let Xi = null;
  const lb = ["application/xhtml+xml", "text/html"], ub = "text/html";
  let Ie = null, oi = null;
  const db = r.createElement("form"), Lu = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, Oa = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (oi && oi === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = ct(g), Xi = // eslint-disable-next-line unicorn/prefer-includes
    lb.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? ub : g.PARSER_MEDIA_TYPE, Ie = Xi === "application/xhtml+xml" ? Za : us, _e = Hr(g, "ALLOWED_TAGS", kr, {
      transform: Ie
    }), X = Hr(g, "ALLOWED_ATTR", Xe, {
      transform: Ie
    }), Aa = Hr(g, "ALLOWED_NAMESPACES", ab, {
      transform: Za
    }), Ma = Hr(g, "ADD_URI_SAFE_ATTR", qu, {
      transform: Ie,
      base: qu
    }), Ji = Hr(g, "ADD_DATA_URI_TAGS", Yi, {
      transform: Ie,
      base: Yi
    }), Je = Hr(g, "FORBID_CONTENTS", xr, {
      transform: Ie
    }), Fr = Hr(g, "FORBID_TAGS", ct({}), {
      transform: Ie
    }), Kr = Hr(g, "FORBID_ATTR", ct({}), {
      transform: Ie
    }), We = Ze(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? ct(g.USE_PROFILES) : g.USE_PROFILES : !1, ri = g.ALLOW_ARIA_ATTR !== !1, ni = g.ALLOW_DATA_ATTR !== !1, zr = g.ALLOW_UNKNOWN_PROTOCOLS || !1, mn = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, or = g.SAFE_FOR_TEMPLATES || !1, mt = g.SAFE_FOR_XML !== !1, Wt = g.WHOLE_DOCUMENT || !1, Tr = g.RETURN_DOM || !1, ii = g.RETURN_DOM_FRAGMENT || !1, yn = g.RETURN_TRUSTED_TYPE || !1, Gi = g.FORCE_BODY || !1, w = g.SANITIZE_DOM !== !1, U = g.SANITIZE_NAMED_PROPS || !1, W = g.KEEP_CONTENT !== !1, de = g.IN_PLACE || !1, Zs = dM(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : kf, si = typeof g.NAMESPACE == "string" ? g.NAMESPACE : ar, Pa = Ze(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(g.MATHML_TEXT_INTEGRATION_POINTS) : ge({}, $u), wa = Ze(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? ct(g.HTML_INTEGRATION_POINTS) : ge({}, Iu);
    const x = Ze(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? ct(g.CUSTOM_ELEMENT_HANDLING) : yi(null);
    if (be = yi(null), Ze(x, "tagNameCheck") && Lu(x.tagNameCheck) && (be.tagNameCheck = x.tagNameCheck), Ze(x, "attributeNameCheck") && Lu(x.attributeNameCheck) && (be.attributeNameCheck = x.attributeNameCheck), Ze(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (be.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), ot(be), or && (ni = !1), ii && (Tr = !0), We && (_e = ge({}, mf), X = yi(null), We.html === !0 && (ge(_e, gf), ge(X, yf)), We.svg === !0 && (ge(_e, ec), ge(X, nc), ge(X, ao)), We.svgFilters === !0 && (ge(_e, tc), ge(X, nc), ge(X, ao)), We.mathMl === !0 && (ge(_e, rc), ge(X, bf), ge(X, ao))), sr.tagCheck = null, sr.attributeCheck = null, Ze(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? sr.tagCheck = g.ADD_TAGS : Yr(g.ADD_TAGS) && (_e === kr && (_e = ct(_e)), ge(_e, g.ADD_TAGS, Ie))), Ze(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? sr.attributeCheck = g.ADD_ATTR : Yr(g.ADD_ATTR) && (X === Xe && (X = ct(X)), ge(X, g.ADD_ATTR, Ie))), Ze(g, "ADD_URI_SAFE_ATTR") && Yr(g.ADD_URI_SAFE_ATTR) && ge(Ma, g.ADD_URI_SAFE_ATTR, Ie), Ze(g, "FORBID_CONTENTS") && Yr(g.FORBID_CONTENTS) && (Je === xr && (Je = ct(Je)), ge(Je, g.FORBID_CONTENTS, Ie)), Ze(g, "ADD_FORBID_CONTENTS") && Yr(g.ADD_FORBID_CONTENTS) && (Je === xr && (Je = ct(Je)), ge(Je, g.ADD_FORBID_CONTENTS, Ie)), W && (_e["#text"] = !0), Wt && ge(_e, ["html", "head", "body"]), _e.table && (ge(_e, ["tbody"]), delete Fr.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw _n('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw _n('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const L = M;
      M = g.TRUSTED_TYPES_POLICY;
      try {
        q = le("");
      } catch (V) {
        throw M = L, V;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (M = void 0, q = "") : (M === void 0 && (M = qe()), M && typeof q == "string" && (q = le("")));
    rt && rt(g), oi = g;
  }, Du = ge({}, [...ec, ...tc, ...fM]), Uu = ge({}, [...rc, ...pM]), fb = function(g, x, L) {
    return x.namespaceURI === ar ? g === "svg" : x.namespaceURI === eo ? g === "svg" && (L === "annotation-xml" || Pa[L]) : !!Du[g];
  }, pb = function(g, x, L) {
    return x.namespaceURI === ar ? g === "math" : x.namespaceURI === to ? g === "math" && wa[L] : !!Uu[g];
  }, hb = function(g, x, L) {
    return x.namespaceURI === to && !wa[L] || x.namespaceURI === eo && !Pa[L] ? !1 : !Uu[g] && (cb[g] || !Du[g]);
  }, gb = function(g) {
    let x = T(g);
    (!x || !x.tagName) && (x = {
      namespaceURI: si,
      tagName: "template"
    });
    const L = us(g.tagName), V = us(x.tagName);
    return Aa[g.namespaceURI] ? g.namespaceURI === to ? fb(L, x, V) : g.namespaceURI === eo ? pb(L, x, V) : g.namespaceURI === ar ? hb(L, x, V) : !!(Xi === "application/xhtml+xml" && Aa[g.namespaceURI]) : !1;
  }, Vr = function(g) {
    gi(t.removed, {
      element: g
    });
    try {
      T(g).removeChild(g);
    } catch {
      if (h(g), !T(g))
        throw _n("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ro = function(g) {
    Qi(g);
    const x = m(g);
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
    const L = E(g);
    if (L)
      for (let V = L.length - 1; V >= 0; --V) {
        const G = L[V], oe = G && G.name;
        if (typeof oe == "string")
          try {
            g.removeAttribute(oe);
          } catch {
          }
      }
  }, bn = function(g, x) {
    try {
      gi(t.removed, {
        attribute: x.getAttributeNode(g),
        from: x
      });
    } catch {
      gi(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(g), g === "is")
      if (Tr || ii)
        try {
          Vr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(g, "");
        } catch {
        }
  }, mb = function(g) {
    const x = E(g);
    if (x)
      for (let L = x.length - 1; L >= 0; --L) {
        const V = x[L], G = V && V.name;
        if (!(typeof G != "string" || X[Ie(G)]))
          try {
            g.removeAttribute(G);
          } catch {
          }
      }
  }, Qi = function(g) {
    const x = [g];
    for (; x.length > 0; ) {
      const L = x.pop();
      (N ? N(L) : L.nodeType) === St.element && mb(L);
      const G = m(L);
      if (G)
        for (let oe = G.length - 1; oe >= 0; --oe)
          x.push(G[oe]);
    }
  }, yb = function(g) {
    if (!mt)
      return;
    const x = [g];
    for (; x.length > 0; ) {
      const L = x.pop(), V = N ? N(L) : L.nodeType;
      if (V === St.processingInstruction || V === St.comment && Qe(xf, L.data)) {
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
  }, Fu = function(g) {
    let x = null, L = null;
    if (Gi)
      g = "<remove></remove>" + g;
    else {
      const oe = df(g, /^[\r\n\t ]+/);
      L = oe && oe[0];
    }
    Xi === "application/xhtml+xml" && si === ar && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const V = M ? le(g) : g;
    if (si === ar)
      try {
        x = new d().parseFromString(V, Xi);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = z.createDocument(si, "template", null);
      try {
        x.documentElement.innerHTML = Ea ? q : V;
      } catch {
      }
    }
    const G = x.body || x.documentElement;
    return g && L && G.insertBefore(r.createTextNode(L), G.childNodes[0] || null), si === ar ? at.call(x, Wt ? "html" : "body")[0] : Wt ? x.documentElement : G;
  }, Ku = function(g) {
    const x = S ? S(g) : g.ownerDocument;
    return ie.call(
      x || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, no = function(g) {
    return g = is(g, Vt, " "), g = is(g, wt, " "), g = is(g, Sa, " "), g;
  }, Na = function(g) {
    var x;
    g.normalize();
    const L = S ? S(g) : g.ownerDocument, V = ie.call(
      L || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let G = V.nextNode();
    for (; G; )
      G.data = no(G.data), G = V.nextNode();
    const oe = (x = g.querySelectorAll) === null || x === void 0 ? void 0 : x.call(g, "template");
    oe && hi(oe, (Se) => {
      ai(Se.content) && Na(Se.content);
    });
  }, io = function(g) {
    const x = A ? A(g) : null;
    return typeof x != "string" || Ie(x) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== E(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    g.nodeType !== N(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    g.childNodes !== m(g);
  }, ai = function(g) {
    if (!N || typeof g != "object" || g === null)
      return !1;
    try {
      return N(g) === St.documentFragment;
    } catch {
      return !1;
    }
  }, Zi = function(g) {
    if (!N || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof N(g) == "number";
    } catch {
      return !1;
    }
  };
  function cr(F, g, x) {
    F.length !== 0 && hi(F, (L) => {
      L.call(t, g, x, oi);
    });
  }
  const bb = function(g, x) {
    return !!(mt && g.hasChildNodes() && !Zi(g.firstElementChild) && Qe(Tf, g.textContent) && Qe(Tf, g.innerHTML) || mt && g.namespaceURI === ar && x === "style" && Zi(g.firstElementChild) || g.nodeType === St.processingInstruction || mt && g.nodeType === St.comment && Qe(xf, g.data));
  }, kb = function(g, x, L) {
    if (!Fr[x] && Vu(x) && (be.tagNameCheck instanceof RegExp && Qe(be.tagNameCheck, x) || be.tagNameCheck instanceof Function && be.tagNameCheck(x)))
      return !1;
    if (W && !Je[x]) {
      const V = T(g), G = m(g);
      if (G && V) {
        const oe = G.length;
        for (let Se = oe - 1; Se >= 0; --Se) {
          const Le = g === L ? p(G[Se], !0) : G[Se];
          V.insertBefore(Le, y(g));
        }
      }
    }
    return Vr(g), !0;
  }, zu = function(g, x, L, V) {
    return g.length === 0 ? x : x === L || x === V ? ct(x) : x;
  }, Bu = function(g, x) {
    if (cr(pe.beforeSanitizeElements, g, null), g !== x && T(g) === null)
      return de && Qi(g), !0;
    if (io(g))
      return Vr(g), !0;
    const L = Ie(A ? A(g) : g.nodeName);
    if (_e = zu(pe.uponSanitizeElement, _e, kr, Br), cr(pe.uponSanitizeElement, g, {
      tagName: L,
      allowedTags: _e
    }), g !== x && T(g) === null)
      return de && Qi(g), !0;
    if (bb(g, L))
      return Vr(g), !0;
    if (Fr[L] || !(sr.tagCheck instanceof Function && sr.tagCheck(L)) && !_e[L]) {
      const G = kb(g, L, x);
      return G === !1 && cr(pe.afterSanitizeElements, g, null), G;
    }
    if ((N ? N(g) : g.nodeType) === St.element && !gb(g) || (L === "noscript" || L === "noembed" || L === "noframes") && Qe(_M, g.innerHTML))
      return Vr(g), !0;
    if (or && g.nodeType === St.text) {
      const G = no(g.textContent);
      g.textContent !== G && (gi(t.removed, {
        element: g.cloneNode()
      }), g.textContent = G);
    }
    return cr(pe.afterSanitizeElements, g, null), !1;
  }, ju = function(g, x, L) {
    if (Kr[x] || mt && x === "patchsrc" || mt && x === "for" && g !== "label" && g !== "output" || w && (x === "id" || x === "name") && (L in r || L in db))
      return !1;
    const V = X[x] || sr.attributeCheck instanceof Function && sr.attributeCheck(x, g);
    if (!(ni && Qe(ir, x))) {
      if (!(ri && Qe(ti, x))) {
        if (V) {
          if (!Ma[x]) {
            if (!Qe(Zs, is(L, se, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && g !== "script" && ff(L, "data:") === 0 && Ji[g])) {
                if (!(zr && !Qe(Hi, is(L, se, "")))) {
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
          !(Vu(g) && (be.tagNameCheck instanceof RegExp && Qe(be.tagNameCheck, g) || be.tagNameCheck instanceof Function && be.tagNameCheck(g)) && (be.attributeNameCheck instanceof RegExp && Qe(be.attributeNameCheck, x) || be.attributeNameCheck instanceof Function && be.attributeNameCheck(x, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && be.allowCustomizedBuiltInElements && (be.tagNameCheck instanceof RegExp && Qe(be.tagNameCheck, L) || be.tagNameCheck instanceof Function && be.tagNameCheck(L)))
        ) return !1;
      }
    }
    return !0;
  }, Tb = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Vu = function(g) {
    return !Tb[us(g)] && Qe(ft, g);
  }, xb = function(g, x, L, V) {
    if (M && typeof u == "object" && typeof u.getAttributeType == "function" && !L)
      switch (u.getAttributeType(g, x)) {
        case "TrustedHTML":
          return le(V);
        case "TrustedScriptURL":
          return ye(V);
      }
    return V;
  }, vb = function(g, x, L, V) {
    try {
      L ? g.setAttributeNS(L, x, V) : g.setAttribute(x, V), io(g) ? Vr(g) : uf(t.removed);
    } catch {
      bn(x, g);
    }
  }, Wu = function(g) {
    cr(pe.beforeSanitizeAttributes, g, null);
    const x = g.attributes;
    if (!x || io(g))
      return;
    X = zu(pe.uponSanitizeAttribute, X, Xe, jr);
    const L = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: X,
      forceKeepAttr: void 0
    };
    let V = x.length;
    const G = Ie(g.nodeName);
    for (; V--; ) {
      const oe = x[V], Se = oe.name, Le = oe.namespaceURI, yt = oe.value, bt = Ie(Se), qa = yt;
      let pt = Se === "value" ? qa : sM(qa);
      if (L.attrName = bt, L.attrValue = pt, L.keepAttr = !0, L.forceKeepAttr = void 0, cr(pe.uponSanitizeAttribute, g, L), pt = L.attrValue, U && (bt === "id" || bt === "name") && ff(pt, j) !== 0 && (bn(Se, g), pt = j + pt), mt && Qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, pt)) {
        bn(Se, g);
        continue;
      }
      if (bt === "attributename" && df(pt, "href")) {
        bn(Se, g);
        continue;
      }
      if (!L.forceKeepAttr) {
        if (!L.keepAttr) {
          bn(Se, g);
          continue;
        }
        if (!mn && Qe(CM, pt)) {
          bn(Se, g);
          continue;
        }
        if (or && (pt = no(pt)), !ju(G, bt, pt)) {
          bn(Se, g);
          continue;
        }
        pt = xb(G, bt, Le, pt), pt !== qa && vb(g, Se, Le, pt);
      }
    }
    cr(pe.afterSanitizeAttributes, g, null);
  }, so = function(g) {
    let x = null;
    const L = Ku(g);
    for (cr(pe.beforeSanitizeShadowDOM, g, null); x = L.nextNode(); )
      if (cr(pe.uponSanitizeShadowNode, x, null), Bu(x, g), Wu(x), ai(x.content) && so(x.content), (N ? N(x) : x.nodeType) === St.element) {
        const G = _(x);
        ai(G) && (Ra(G), so(G));
      }
    cr(pe.afterSanitizeShadowDOM, g, null);
  }, Ra = function(g) {
    const x = [{
      node: g,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const L = x.pop();
      if (L.shadow) {
        so(L.shadow);
        continue;
      }
      const V = L.node, oe = (N ? N(V) : V.nodeType) === St.element, Se = m(V);
      if (Se)
        for (let Le = Se.length - 1; Le >= 0; --Le)
          x.push({
            node: Se[Le],
            shadow: null
          });
      if (oe) {
        const Le = A ? A(V) : null;
        if (typeof Le == "string" && Ie(Le) === "template") {
          const yt = V.content;
          ai(yt) && x.push({
            node: yt,
            shadow: null
          });
        }
      }
      if (oe) {
        const Le = _(V);
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
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, L = null, V = null, G = null;
    if (Ea = !F, Ea && (F = "<!-->"), typeof F != "string" && !Zi(F) && (F = uM(F), typeof F != "string"))
      throw _n("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    Ht ? (_e = Br, X = jr) : Oa(g), (pe.uponSanitizeElement.length > 0 || pe.uponSanitizeAttribute.length > 0) && (_e = ct(_e)), pe.uponSanitizeAttribute.length > 0 && (X = ct(X)), t.removed = [];
    const oe = de && typeof F != "string" && Zi(F);
    if (oe) {
      yb(F);
      const yt = A ? A(F) : F.nodeName;
      if (typeof yt == "string") {
        const bt = Ie(yt);
        if (!_e[bt] || Fr[bt])
          throw ro(F), _n("root node is forbidden and cannot be sanitized in-place");
      }
      if (io(F))
        throw ro(F), _n("root node is clobbered and cannot be sanitized in-place");
      try {
        Ra(F);
      } catch (bt) {
        throw ro(F), bt;
      }
    } else if (Zi(F))
      x = Fu("<!---->"), L = x.ownerDocument.importNode(F, !0), L.nodeType === St.element && L.nodeName === "BODY" || L.nodeName === "HTML" ? x = L : x.appendChild(L), Ra(L);
    else {
      if (!Tr && !or && !Wt && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return M && yn ? le(F) : F;
      if (x = Fu(F), !x)
        return Tr ? null : yn ? q : "";
    }
    x && Gi && Vr(x.firstChild);
    const Se = oe ? F : x;
    try {
      const yt = Ku(Se);
      for (; V = yt.nextNode(); )
        Bu(V, Se), Wu(V), ai(V.content) && so(V.content);
    } catch (yt) {
      throw oe && (ro(F), hi(t.removed, (bt) => {
        bt.element && Qi(bt.element);
      })), yt;
    }
    if (oe)
      return hi(t.removed, (yt) => {
        yt.element && Qi(yt.element);
      }), or && Na(F), F;
    if (Tr) {
      if (or && Na(x), ii)
        for (G = $e.call(x.ownerDocument); x.firstChild; )
          G.appendChild(x.firstChild);
      else
        G = x;
      return (X.shadowroot || X.shadowrootmode) && (G = jt.call(n, G, !0)), G;
    }
    let Le = Wt ? x.outerHTML : x.innerHTML;
    return Wt && _e["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Qe(xM, x.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Le), or && (Le = no(Le)), M && yn ? le(Le) : Le;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Oa(F), Ht = !0, Br = _e, jr = X;
  }, t.clearConfig = function() {
    oi = null, Ht = !1, Br = null, jr = null, M = J, q = "";
  }, t.isValidAttribute = function(F, g, x) {
    oi || Oa({});
    const L = Ie(F), V = Ie(g);
    return ju(L, V, x);
  }, t.addHook = function(F, g) {
    typeof g == "function" && Ze(pe, F) && gi(pe[F], g);
  }, t.removeHook = function(F, g) {
    if (Ze(pe, F)) {
      if (g !== void 0) {
        const x = nM(pe[F], g);
        return x === -1 ? void 0 : iM(pe[F], x, 1)[0];
      }
      return uf(pe[F]);
    }
  }, t.removeHooks = function(F) {
    Ze(pe, F) && (pe[F] = []);
  }, t.removeAllHooks = function() {
    pe = vf();
  }, t;
}
var EM = nm();
function AM({ structureProtectionMode: e = "off" }) {
  const [t] = ue(), r = Q(void 0), [n, i] = he(void 0), s = fe((o) => {
    r.current = o, i(o);
  }, []);
  return B(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = jS(p);
      if (!h)
        return !1;
      const y = R();
      return e === "protected" ? y && VS(y, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const y = R(), m = r.current;
      if (m && y && af(y, m)) {
        if (s(void 0), h.preventDefault(), p !== m.intent)
          return !0;
        const _ = Y(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (_) {
            const E = _.getParent(), N = _.getPreviousSibling(), A = _.getNextSibling();
            _.remove(), N ? Zg(N) : A && C(A) ? A.select(0, 0) : E?.selectStart();
          }
        } else m.kind === "selection" ? O(y) && y.removeText() : Oe(_) && HS(_);
        return !0;
      }
      if (!y)
        return !1;
      const T = WS(y, p);
      if (T) {
        if (T.kind === "verse") {
          const _ = Sp();
          _.add(T.node.getKey()), Pn(_);
        } else {
          const _ = Qo();
          _.anchor.set(T.node.getKey(), 0, "element"), _.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), Pn(_);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: p }), h.preventDefault(), !0;
      }
      if (O(y) && !y.isCollapsed() && lu(y)) {
        const _ = y.getNodes().filter(me).map((A) => A.getKey()), { anchor: E, focus: N } = y;
        return s({
          kind: "selection",
          intent: p,
          key: _[0],
          anchor: { key: E.key, offset: E.offset, type: E.type },
          focus: { key: N.key, offset: N.offset, type: N.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = R();
      return !h || !Qa(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const y = EM.sanitize(p), m = new DOMParser().parseFromString(y, "text/html"), T = GS(ck(t, m)), _ = R();
      return O(_) && _.insertNodes(T), h.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = R();
      return h && Qa(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = R();
      return h && Qa(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        af(R(), p) || s(void 0);
      });
    };
    return et(t.registerCommand(qr, o, Ue), t.registerCommand(On, c, Ue), t.registerCommand(Cr, d, Ue), t.registerCommand(zb, c, Ue), t.registerCommand(dl, u, Ue), t.registerCommand(ul, c, Ue), t.registerUpdateListener(f));
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
const gw = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function PM({ textDirection: e }) {
  const [t] = ue();
  return wM(t, e), null;
}
function wM(e, t) {
  B(() => (_f(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && _f(e, t);
  })), [e, t]);
}
function _f(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function OM() {
  const [e] = ue();
  return NM(e), null;
}
function NM(e) {
  B(() => {
    if (!e.hasNodes([ve, Ct, Ne, Be, ht]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return et(
      e.registerNodeTransform(Be, RM),
      e.registerNodeTransform(Be, (t) => qM(t, e)),
      e.registerNodeTransform(ht, Cf),
      e.registerNodeTransform(Ct, Cf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ht, (t) => {
        Ms(Or("va"), t), Ms(Or("vp"), t);
      })
    );
  }, [e]);
}
function RM(e) {
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
  me(r) && Fl(e);
}
function qM(e, t) {
  const r = e.getParent();
  !Ae(r) || !e.isAttached() || gg(t, e.getKey()) && r.insertAfter(e);
}
function Cf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ke(t); )
    t = t.getLastChild();
  (D(t) || C(t) && ke(t.getParent())) && e.insertBefore(Te(" "));
}
function uu(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Rl(n)) ? void 0 : e;
}
function $M(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if ($(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function IM() {
  const e = R();
  if (!(!O(e) || !e.isCollapsed()))
    return uu($M(e.anchor));
}
function LM(e) {
  const t = R();
  let r;
  return O(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = im(e.target)), r ? uu(it(r, K)) : void 0;
}
function im(e) {
  const t = Bb(e)?.anchorNode;
  if (vp(t))
    return Ds(t) ?? void 0;
}
function DM(e) {
  if (R())
    return;
  const t = im(e);
  return t ? uu(it(t, K)) : void 0;
}
function UM() {
  const [e] = ue(), t = Gg(IM);
  return B(() => {
    const r = (n) => {
      t(n) && Nn(ks);
    };
    return et(e.registerCommand(hr, () => {
      const n = DM(e.getRootElement());
      return n && r(n), !1;
    }, wn), e.registerCommand(Zo, (n) => {
      const i = LM(n);
      return i && r(i), !1;
    }, wn));
  }, [e, t]), null;
}
function FM({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = fC({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return v(dC, { trigger: e, items: i });
}
function KM({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = De(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? v(jM, { trigger: e, harness: i }) : v(FM, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const zM = [" ", "*"];
function BM(e, t) {
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
function jM({ trigger: e, harness: t }) {
  const [r] = ue(), [n, i] = he(void 0), s = Q({ query: "", options: [] }), o = Q(0), a = fe((f, p, h) => {
    const y = p.find((m) => m.kind === "note" && m.marker === f);
    if (y) {
      t.apply(y, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const m = R();
      O(m) && m.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  B(() => et(r.registerCommand(qr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const y = s.current.query;
        return y ? (a(y, n.items, !1), jb(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const m = R();
          O(m) && m.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const h = s.current.query;
      if (n.hasTextSelection) {
        const y = n.items.find((m) => m.marker === h);
        return y && t.apply(y, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
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
  }, Ue), r.registerCommand(Mp, (f) => {
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
  }, []), d = fe((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), u = De(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    BM(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && v(Og, { isOpen: !0, children: ({ placement: f }) => v(
    qg,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? zM : void 0 },
    n.session
  ) });
}
function sm(e) {
  return e.replaceAll(I, "~").replace(/ {2,}/g, (r) => I.repeat(r.length));
}
function VM(e) {
  return e.replaceAll(I, " ").replaceAll("~", I);
}
let Bo;
function WM(e) {
  e && (Bo = e);
}
function om(e) {
  return Bt(e);
}
function HM(e, t) {
  return e.isEmpty() ? kp : am(e.toJSON(), t);
}
function am(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && ia(r[0]) && (!r[0].children || r[0].children.length === 0))
    return kp;
  if (r.some(fv)) {
    Bo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = cm(r), i = Jt(n, t);
  return i ? { type: Er, version: Mr, content: i } : void 0;
}
function GM(e, t) {
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
function JM(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Re({
    type: Pt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function YM(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Yh(r, a, c), Re({
    type: Pt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function XM(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Yh(t, o, a), Re({
    type: ht.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function QM(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !om(r) && t) {
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
function ZM(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function eE(e, t) {
  const { unknownAttributes: r } = e;
  return Re({ type: $h, ...r, content: t });
}
function tE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Re({ type: Dh, marker: r, ...n, content: t });
}
function rE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Re({
    type: Kh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function nE(e, t) {
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
    ...sh({ sid: n, eid: i, ...s }, o)
  });
}
function iE(e) {
  return e.text;
}
function sE(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function oE(e) {
  const { marker: t } = e;
  return {
    type: No,
    marker: t === "" ? void 0 : t
  };
}
function Sf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function aE(e, t, r, n, i) {
  const s = Qt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = bi({
      type: s,
      marker: _i,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = bi({
      type: s,
      marker: Rn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = bi({
      type: s,
      marker: Rn
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
  (!n || !Bs(n)) && t.forEach((l) => {
    const d = bi({
      type: s,
      marker: _i,
      eid: l
    });
    i.push(d);
  });
}
function cE(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && Bs(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return zs(i) && i.markerSyntax === "opening";
}
function lE(e) {
  let t = e;
  for (; Bs(t); ) t = t.children[0];
  return t;
}
function uE(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!zs(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = lE(e[r]);
  if (Dn(n) && n.text === Et(t))
    return n;
}
function Jt(e, t, r, n = !1, i) {
  const s = [];
  let o, a = [];
  return e.forEach((c, l) => {
    const d = c, u = c, f = c, p = c, h = c, y = c, m = c, T = c;
    switch (c.type) {
      case Ft.getType():
        s.push(
          GM(
            d,
            Jt(d.children, t)
          )
        );
        break;
      case yr.getType():
        s.push(JM(c));
        break;
      case Pt.getType():
        s.push(
          YM(
            u,
            Jt(u.children, t)
          )
        );
        break;
      case Ct.getType():
      case ht.getType():
        s.push(XM(c));
        break;
      case ve.getType():
        s.push(
          QM(
            f,
            Jt(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case tt.getType():
        s.push(
          ZM(
            p,
            Jt(p.children, t)
          )
        );
        break;
      case Gn.getType():
        s.push(
          eE(
            c,
            Jt(c.children, t)
          )
        );
        break;
      case Jn.getType():
        s.push(
          tE(
            c,
            Jt(c.children, t)
          )
        );
        break;
      case Yn.getType():
        s.push(
          rE(
            c,
            Jt(c.children, t)
          )
        );
        break;
      case Ne.getType():
        s.push(
          nE(
            h,
            Jt(
              h.children,
              t,
              uE(h.children, h.caller)
            )
          )
        );
        break;
      case Ir.getType():
      case Lr.getType():
      case Xt.getType():
      case Ep.getType():
      case gr.getType():
        break;
      case Ye.getType():
        if (o = Jt(
          m.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const _ = m.typedIDs[Xr];
          if (_) {
            const E = e[l + 1];
            aE(o, _, a, E, s), a = E && Bs(E) ? _ : [];
          } else {
            const E = o.shift();
            E && (typeof E == "string" ? Sf(s, E) : s.push(E)), o.length > 0 && s.push(...o);
          }
        }
        break;
      case Qt.getType():
        s.push(bi(c));
        break;
      case Be.getType():
        if (y.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Hs(y.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        y.text !== I && !y.text.startsWith(gl) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        y[Ls]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let _ = iE(y);
          om(t) && (cE(e, l, i, n) && _.startsWith(I) && (_ = _.slice(1)), _ = VM(Ax(_))), Sf(s, _);
        }
        break;
      case Hn.getType():
        s.push(
          sE(
            T,
            Jt(T.children, t)
          )
        );
        break;
      case Ur.getType():
        s.push(oE(c));
        break;
      case Fi.getType():
        Bo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Bo?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function cm(e) {
  const t = e.findIndex((r) => ia(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = cm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const co = {
  initialize: WM,
  deserializeEditorState: HM
}, dE = /^sd\d*$/, fE = /* @__PURE__ */ new Set([
  ...Object.entries(mc).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !dE.test(e)
  ).map(([e]) => e),
  "qa"
]);
function pE(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Oh(i) || Wh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!$x(i)) {
      t && jo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (wl(i) && fE.has(i.marker) && !jo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    lm(i.children, t).forEach((s) => {
      const o = hE(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = gE(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function lm(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (um(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Bs(i)) {
      const s = lm(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Mf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Mf(i, c.nodes)] });
      });
      return;
    }
    t && jo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Mf(e, t) {
  return { ...e, children: t };
}
function um(e) {
  return fg(e) && e.number !== "";
}
function jo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => um(r) || jo(r)) : !1;
}
function hE(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function gE(e) {
  return {
    type: qo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: lg
  };
}
const Ef = fm([]), mE = {
  type: Ep.getType(),
  version: 1
};
let du = [], ee, Kn, dm, vt;
function yE(e, t) {
  du = [], TE(e), xE(t);
}
function bE(e = 0) {
}
function kE(e, t) {
  ee = t ?? pa();
  let r;
  return e ? (e.type !== Er && vt?.warn(`This USJ type '${e.type}' didn't match the expected type '${Er}'.`), e.version !== Mr && vt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${Mr}'.`
  ), e.content.length > 0 ? (r = zc(Gr(e.content)), Ps(ee) && (r = pE(r, vt))) : r = [Ef]) : r = [Ef], dm?.(du), {
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
function TE(e) {
  e && (Kn = e), e?.addMissingComments && (dm = e.addMissingComments);
}
function xE(e) {
  e && (vt = e);
}
function fu() {
  return Bt(ee);
}
function vE(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function _E(e) {
  let { marker: t } = e;
  t !== vs && vt?.warn(`Unexpected book marker '${t}'!`), t = t ?? vs;
  const { code: r } = e;
  (!r || !Ft.isValidBookCode(r)) && vt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ee?.markerMode === "editable" || ee?.markerMode === "visible" ? n.push(
    Tt("marker", Ee(t) + " " + r + I)
  ) : ee?.hasGutterParaMarkers && n.push(Tt("marker", Ee(t) + I, !0));
  const i = vE(e.content);
  i && n.push(dt(fu() ? sm(i) : i));
  const s = Ke(e, nx);
  return Re({
    type: Ft.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Ph
  });
}
function CE(e) {
  let { marker: t } = e;
  t !== wo && vt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? wo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ke(e, gT);
  let a;
  ee?.markerMode === "visible" && (a = !0);
  const c = [
    dt(Lt(t, r) ?? "")
  ];
  return ee?.markerMode === "editable" && KE(i, s, c), ee?.markerMode === "editable" ? Re({
    type: Pt.getType(),
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
    version: hh
  }) : Re({
    type: yr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Nh
  });
}
function SE(e) {
  let { marker: t } = e;
  t !== Po && vt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Po;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (v_(ee) ?? Ct).getType(), c = ee?.markerMode === "editable" ? rh : dg;
  let l, d;
  ee?.markerMode === "editable" ? l = Lt(t, r) : ee?.markerMode === "visible" && (d = !0);
  const u = Ke(e, uT);
  return Re({
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
function ME(e, t = [], r = !1) {
  let { marker: n } = e;
  ve.isValidMarker(n, Kn?.extraValidMarkers) || vt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ee?.markerMode === "editable") {
    const [a] = t;
    Dn(a) ? a.text = I + a.text : a && t.unshift(dt(I));
  }
  t.length === 0 && t.push(dt(Ut)), Uc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ke(e, oT);
  return s || LE(n, o, i), s || Fc(e.marker ?? "", i, !1, r), Re({
    type: ve.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: th
  });
}
function fm(e) {
  return {
    type: tn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: mh
  };
}
function EE(e, t = []) {
  let { marker: r } = e;
  tt.isValidMarker(r, Kn?.extraValidMarkers) || vt?.warn(`Unexpected para marker '${r}'!`), r = r ?? ur;
  const n = [];
  if (Ki(ee) && (ee?.markerMode === "editable" ? n.push(
    gt(r),
    dt(I, mr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && n.push(
    Tt(
      "marker",
      Ee(r) + I,
      ee?.hasGutterParaMarkers
    )
  )), n.push(...t), fu()) {
    const s = n.find(
      (o) => !zs(o) && !(Dn(o) && o.text === I)
    );
    Dn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => I.repeat(o.length)));
  }
  const i = Ke(e, yx);
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
    version: Bh
  });
}
function pu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function AE(e, t = []) {
  const r = Ke(e, ax);
  return Re({
    ...pu(),
    type: Gn.getType(),
    unknownAttributes: r,
    children: t,
    version: Ih
  });
}
function PE(e, t = []) {
  const r = Ke(e, ux), n = e.marker ?? Cc, i = [];
  return ee?.markerMode === "editable" ? i.push(
    gt(n),
    dt(I, mr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && i.push(
    Tt(
      "marker",
      Ee(n) + I,
      ee?.hasGutterParaMarkers
    )
  ), i.push(...t), Re({
    ...pu(),
    type: Jn.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Uh
  });
}
function wE(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Sc;
  ee?.markerMode === "editable" ? s.push(
    gt(o),
    dt(I, mr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && s.push(
    Tt(
      "marker",
      Ee(o) + I,
      ee?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Ke(
    e,
    fx
  );
  return Re({
    ...pu(),
    type: Yn.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: zh
  });
}
function OE(e, t) {
  const r = Kx(t);
  let n = () => {
  };
  return Kn?.noteCallerOnClick && (n = Kn.noteCallerOnClick), Re({
    type: Xt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Tg
  });
}
function NE(e, t) {
  let { marker: r } = e;
  Ne.isValidMarker(r, Kn?.extraValidMarkers) || vt?.warn(`Unexpected note marker '${r}'!`), r = r ?? kl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : ru(ee?.noteMode), a = Ke(e, Ek), c = ee?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  ee?.markerMode === "editable" ? (l = gt(r, "opening", !1, c), s || (d = gt(r, "closing"))) : ee?.markerMode === "visible" && (l = Tt("marker", Ee(r) + " "), s || (d = Tt("marker", Ve(r))));
  const u = [];
  let f;
  if (l && u.push(l), ee?.markerMode === "editable" && !o)
    f = dt(Et(i), void 0, c), u.push(f), FE(n, u), u.push(...t);
  else {
    const p = dt(I, mr, "token");
    f = OE(i, t), u.push(f, p, ...t.flatMap(RE(p)));
  }
  return d && u.push(d), Re({
    type: Ne.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: Vp
  });
}
function RE(e) {
  return (t) => vh(t) ? [t] : [t, e];
}
function qE(e) {
  let { marker: t } = e;
  (!t || !Qt.isValidMarker(t, Kn?.extraValidMarkers)) && vt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ke(e, bl), s = oh(e);
  return Re({
    type: Qt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: zp
  });
}
function Af(e, t = []) {
  return {
    type: Ye.getType(),
    typedIDs: { [Xr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function $E(e, t) {
  const { marker: r } = e, n = e.type, i = Ke(e, ST), s = [];
  if (ee?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = oa(
      n,
      r,
      i
    );
    o && s.push(Tt("marker", o)), a && s.push(Tt("attribute", a)), s.push(...t), c && s.push(Tt("attribute", c)), l && s.push(Tt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Dn(o) && (o.mode = "token");
  }), Re({
    type: Hn.getType(),
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
function IE(e) {
  return {
    type: Ur.getType(),
    marker: e,
    text: ps(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ee?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Eh
  };
}
function gt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: gr.getType(),
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
  return t !== void 0 && (n[Ls] = { textType: t }), n;
}
function Tt(e, t, r = !1) {
  const n = {
    type: Lr.getType(),
    text: t,
    textType: e,
    version: xh
  };
  return r && (n[Ls] = { [Sl.key]: !0 }), n;
}
function ws(e, t) {
  return {
    type: Ir.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Xp
  };
}
function Uc(e, t, r = !1) {
  ee?.markerMode === "editable" ? t.push(gt(e, "opening", r)) : ee?.markerMode === "visible" && t.push(Tt("marker", Ee(e, r)));
}
function Fc(e, t, r = !1, n = !1) {
  ee?.markerMode === "editable" ? r ? t.push(gt("", "selfClosing")) : t.push(gt(e, "closing", n)) : ee?.markerMode === "visible" && t.push(
    Tt(
      "marker",
      r ? Ve("") : Ve(e, n)
    )
  );
}
function LE(e, t, r) {
  if (ee?.markerMode !== "editable" || !t) return;
  const n = lr(t, Fs(e));
  n && r.push(dt(n, "attribute"));
}
function Pf(e, t) {
  if (e.type !== "ms" || ee?.markerMode !== "editable" && ee?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ke(e, bl), o = ah(
    n,
    i,
    s,
    oh(e)
  ), a = lr(o, Ks(r ?? ""));
  if (!a) return;
  const c = I + a;
  ee?.markerMode === "editable" ? t.push(dt(c, "attribute")) : t.push(Tt("attribute", c));
}
function DE(e, t) {
  const r = e.marker ?? "";
  if (ee?.markerMode === "editable") {
    const n = [];
    Uc(r, n), Pf(e, n), Fc(r, n, !0), t.push(ws("milestone", n));
  } else
    Uc(r, t), Pf(e, t), Fc(r, t, !0);
}
function wf(e, t, r) {
  t !== void 0 && r.push(
    ws(e, [
      gt(e, "opening"),
      dt(I + t, "attribute"),
      gt(e, "closing")
    ])
  );
}
function UE(e, t) {
  ee?.markerMode === "editable" && (wf("va", e.altnumber, t), wf("vp", e.pubnumber, t));
}
function FE(e, t) {
  e !== void 0 && t.push(
    ws("cat", [
      gt("cat", "opening"),
      dt(I + e, "attribute"),
      gt("cat", "closing")
    ])
  );
}
function KE(e, t, r) {
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
function Of(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function zE(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Nf(e, t) {
  t.marker === Rn && t.sid !== void 0 && e.push(t.sid), t.marker === _i && t.eid !== void 0 && zE(e, t.eid);
}
function Kc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Af(o, [...n])] : o, c = e[i];
  Nf(n, c);
  const l = Kc(
    e.slice(i + 1, s),
    Of(t, i + 1),
    c.marker === Rn,
    n
  ), d = Af(l, [...n]), u = e[s];
  Nf(n, u);
  const f = Kc(
    e.slice(s + 1),
    Of(t, s + 1),
    u.marker === Rn,
    n
  );
  return [...a, d, ...f];
}
function Gr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(dt(fu() ? sm(i) : i));
    else if (!i.type)
      vt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ft.getType():
          n.push(_E(i));
          break;
        case Pt.getType():
          n.push(CE(i));
          break;
        case ht.getType():
          ee?.hasSpacing || n.push(mE), n.push(SE(i)), UE(i, n);
          break;
        case ve.getType():
          n.push(
            ME(i, Gr(i.content, !0), t)
          );
          break;
        case tt.getType():
          n.push(EE(i, Gr(i.content)));
          break;
        case Ne.getType():
          n.push(NE(i, Gr(i.content)));
          break;
        case Qt.getType():
          Bp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && du?.push(i.sid)), n.push(qE(i)), DE(i, n);
          break;
        case Ur.getType():
          n.push(IE(i.marker ?? ""));
          break;
        case $h:
          n.push(AE(i, Gr(i.content)));
          break;
        case Dh:
          n.push(PE(i, Gr(i.content)));
          break;
        case Kh:
          n.push(wE(i, Gr(i.content)));
          break;
        default:
          vt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push($E(i, Gr(i.content)));
      }
  }), Kc(n, r);
}
function zc(e) {
  const t = e.findIndex(
    (n) => Oh(n) || Wh(n) || wl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    lx(n)
  );
  if (t >= 0) {
    const n = zc(e.slice(0, t)), i = e[t], s = zc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || fg(n)))
    return [fm(e)];
  return e;
}
const on = {
  initialize: yE,
  reset: bE,
  serializeEditorState: kE
};
function pm(e) {
  if (e && !P(e)) {
    if (C(e)) return e;
    if ($(e))
      for (const t of e.getChildren()) {
        const r = pm(t);
        if (r) return r;
      }
  }
}
function BE() {
  const e = R();
  if (!O(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((C(t) && !P(t) ? In(t) : void 0) && C(t)) {
      const i = Te(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Mi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = pm(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(I) ? I : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return C(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of hm(e)) {
    if (!In(t)) continue;
    Mi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(I) && r.setTextContent(n.slice(I.length));
  }
  return !0;
}
function hm(e) {
  const [t, r] = Tp(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!C(a) || P(a) || te(a, ae) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function jE() {
  const e = R();
  if (!O(e)) return !1;
  const t = e.focus.getNode();
  return In(t) ? Oe(Ol(t)) : !1;
}
function gm() {
  let e = R();
  if (!O(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !Dl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = R(), !O(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!C(t) || P(t) || !In(t)) return !1;
  const r = Ol(t);
  if (!Oe(r)) return !1;
  const n = Te(""), i = e.anchor.offset;
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
  return D(a) ? Nl(a) : o.select(0, 0), !0;
}
const mm = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Hh(xe().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = R(), t = $l(e), r = zl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Bx(0, o);
        const a = Sv(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || eg(c) && Il(parseInt(n, 10), c);
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
function Bc(e, t) {
  return Ne.isValidMarker(e, t) || !!mm[e] || tt.isValidMarker(e, t) || ve.isValidMarker(e, t);
}
function VE(e, t) {
  return ve.isNoteContentMarker(e) ? !1 : ve.isValidMarker(e, t);
}
function ym(e, t, r, n, i, s) {
  const o = Pg(
    e,
    void 0,
    void 0,
    t,
    n ?? pa(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function jc(e, t, r, n, i, s, o) {
  if (Ne.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = ym(
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
  const a = XE(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = R();
      O(d) && (cg(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = Ed(u, on, r), h = Ia(p);
      if (O(d)) {
        const y = d.anchor.getNode(), m = y.getParent(), T = In(y), _ = d.anchor.key === d.focus.key;
        if (D(h) && T && _ && !ic(h, o))
          GE(
            d,
            h,
            y,
            r?.markerMode === "editable"
          );
        else if (D(h) && !_ && !ic(h, o) && JE(d))
          YE(d, h, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          QE(
            d,
            () => Ia(p)
          );
        else if ($(h) && !h.isInline()) {
          const E = d.insertParagraph();
          if (E) {
            const N = E.getChildren();
            h.append(...N), E.replace(h), Oe(h) && Bi(h) || h.selectStart();
          }
        } else if (D(h) && C(y) && !P(y) && D(y.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        ic(h, o)) {
          const E = y.getParent();
          if (D(E)) {
            const N = d.anchor.offset;
            if (N === 0) y.insertBefore(h);
            else if (N >= y.getTextContentSize()) y.insertAfter(h);
            else {
              const [S] = y.splitText(N);
              S.insertAfter(h);
            }
            h.getChildren().forEach((S) => {
              P(S) && S.setNested(!0);
            });
            const A = h.getChildren().find((S) => C(S) && !P(S));
            A && C(A) ? A.select(
              A.getTextContentSize(),
              A.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (C(y) && !P(y) && d.isCollapsed() && (K(m) || D(m) && K(m.getParent()))) {
          const E = D(m) ? m : void 0, N = E ? WE(y, d.anchor.offset) : [];
          let S = (E ?? y).insertAfter(h);
          if (br(h)) {
            const M = {
              ...r || pa(),
              markerMode: "hidden"
            }, q = Ed(
              u,
              on,
              M
            ), J = Ia(q);
            S = S.insertAfter(J);
          }
          if (N.length > 0 && E) {
            const M = Vo(E).append(...N);
            S.insertAfter(M), E.isEmpty() && E.remove();
          } else C(S.getNextSibling()) || S.insertAfter(Te(I));
          $(S) && S.selectEnd();
        } else if (d.insertNodes([h]), c1(h), f) {
          const E = Sp();
          E.add(h.getKey()), Pn(E);
        } else if (D(h)) {
          const E = h.getChildren().find((N) => C(N) && !P(N));
          E && C(E) ? E.select(
            E.getTextContentSize(),
            E.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const E = h.getNextSibling();
          E ? E.selectStart() : h.selectStart();
        }
      } else
        d?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function WE(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function ic(e, t) {
  return ((t ?? $o).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function HE(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function GE(e, t, r, n) {
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
function JE(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || D(n)) continue;
    if (!C(n) || n.getType() !== Be.getType() || te(n, ae) === "attribute") return !1;
    const i = Ol(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    In(n) && (r = !0);
  }
  return r;
}
function YE(e, t, r) {
  const n = hm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!In(a)) return;
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
function XE(e, t) {
  let r = mm[e];
  return r || (tt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: tt.getType(), marker: e, content: [] }] })
  } : ve.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ve.getType(), marker: e };
      return (ve.isValidFootnoteMarker(e) || ve.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function QE(e, t) {
  const r = e.getNodes(), [n, i] = Ri(e);
  let s;
  r.forEach((o, a) => {
    if ($(s) && s.isParentOf(o))
      return;
    const c = bm(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((u) => P(u) && u.getMarkerSyntax() === "opening") && HE(s, D(s.getParent()))), e1(c, s, l);
  }), (C(s) || $(s)) && s.selectEnd();
}
function Ri(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function hu(e) {
  return ke(e) || K(e) || K(e.getParent());
}
function bm(e, t, r, n, i) {
  if (!hu(e)) {
    if (C(e))
      return ZE(e, t, r, n, i);
    if ($(e) && e.isInline())
      return e;
  }
}
function ZE(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function e1(e, t, r) {
  if (C(t)) {
    const n = Vc(e, t);
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
    Vc(e, t), r && D(t) && t.getChildren().some((s) => P(s)) && C(e) && !P(e) && !e.getTextContent().startsWith(I) && e.setTextContent(I + e.getTextContent());
  }
}
function Vc(e, t) {
  let r = e.getTextContent();
  if (C(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    Fl(n), C(n) || t.insertBefore(Te(" "));
  }
  return r;
}
function km(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = zn(d, t);
    if (!f) return !1;
    const p = C(d) ? d.getTextContentSize() : 0;
    if (Rf(f, r), C(d) && d.isAttached()) {
      const h = d.getTextContentSize(), y = Math.max(p - h, 0), m = Math.max(0, Math.min(u - y, h)), T = R();
      O(T) && T.setTextNodeRange(d, m, d, m);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Ri(e);
  if (!mu(n, t, s, o)) return !1;
  const a = gu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = zn(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = _m(u, a);
    f && (Rf(f, r), l = !0);
  }), Cm(a, i), l;
}
function Rf(e, t) {
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
  }), pc(e);
}
function gu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = bm(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    C(o) && n.push(o);
  }), n;
}
function zn(e, t) {
  let r = e, n;
  for (; r && !Oe(r); ) {
    if (K(r)) return;
    !n && D(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Tm(e) {
  const t = it(
    e,
    (r) => K(r) || Oe(r)
  );
  return K(t);
}
function xm(e) {
  return e.filter(
    (t) => !hu(t) && (C(t) || $(t) && t.isInline())
  );
}
function t1(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!C(i) || hu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function r1(e, t, r) {
  return e.getChildren().some(
    (n) => $(n) && t.some((i) => n.isParentOf(i)) && !vm(n, r)
  );
}
function mu(e, t, r, n, i) {
  const s = xm(e), o = t1(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = zn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !r1(l, s, o);
  });
}
function vm(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || zt(r));
}
function _m(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if ($(d) && t.some((u) => d.isParentOf(u))) {
      if (!vm(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && zt(n[s - 1]) && (s -= 1), o < n.length - 1 && zt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Vo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Vo(e).append(...c)), e;
}
function Vo(e) {
  return Vb(e);
}
function Cm(e, t) {
  const r = R(), n = e[0], i = e[e.length - 1];
  if (!O(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function n1(e, t, r) {
  if (e.isCollapsed()) {
    const l = zn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (md(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Ri(e);
  if (!mu(n, r, i, s, t)) return !1;
  const o = gu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = zn(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = _m(d, o);
    u && (md(u, t), c = !0);
  }), c;
}
function i1(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = Ri(e);
  if (!!!i?.some(
    (m) => mu(s, m, o, a)
  ) && !s1(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const T = R();
    O(T) && km(T, m, n) && (l = !0);
  });
  const d = R();
  if (!O(d)) return l;
  const u = d.isBackward(), [f, p] = Ri(d), h = gu(
    d.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const y = h.filter(
    (m) => !Tm(m) && !zn(m, t)
  );
  return y.length > 0 && (o1(y).forEach((m) => a1(m, t)), l = !0), Cm(h, u), l;
}
function s1(e, t) {
  return xm(e).some(
    (r) => !Tm(r) && !zn(r, t)
  );
}
function o1(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function a1(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? Vo(i) : Pr(t);
  e[0].insertBefore(s), s.append(...e), i === r || Vc(e[0], s);
}
function c1(e) {
  me(e) && (Fl(e.getPreviousSibling()), hg(e.getNextSibling()));
}
const Sm = {
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
}, qf = "psc-active-text", lo = "psc-empty-text";
function l1({ viewOptions: e }) {
  const [t] = ue(), r = Q(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return B(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(qf), r.current = o, o && t.getElementByKey(o)?.classList.add(qf);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Zo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${lo}`);
          if (!c) return !1;
          const l = Ds(c);
          if (!me(l)) return !1;
          const d = l.getParent();
          if (!$(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        Mt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = sc(), f = u1(), p = [], h = [];
          return xe().getChildren().forEach((y) => {
            if (!$(y)) return;
            const { emptyKeys: m, nonEmptyKeys: T } = f1(y);
            p.push(...m), h.push(...T);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(lo) : t.getElementByKey(u)?.classList.add(lo);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(lo));
      }),
      t.registerCommand(
        fl,
        () => (i(void 0), !1),
        Mt
      ),
      t.registerCommand(
        Wb,
        () => {
          const o = t.getEditorState().read(sc);
          return o !== r.current && i(o), !1;
        },
        Mt
      )
    ];
    return i(t.getEditorState().read(sc)), et(...s);
  }, [t, n]), null;
}
function sc() {
  return d1(R() ?? void 0)?.getKey();
}
function u1() {
  const e = R();
  if (!O(e)) return;
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
function d1(e) {
  if (O(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function f1(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (me(c)) break;
      if (!(_t(c) || P(c)) && c.getTextContent().replaceAll(Co, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const p1 = /^\+/;
function yu(e, t) {
  const r = t.replace(p1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Mm(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Em(e, t) {
  return Mm(e, t) !== void 0;
}
function Wc(e, t) {
  const r = Mm(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Wo(e, t, r) {
  const n = $(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function h1(e, t, r, n, i) {
  const s = yu(n, t);
  if (!s) {
    Wo(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Wo(e, "invalid", i);
}
function ms(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || h1(s, o, t, r, n), ms(s, t, r, n, i || o === "xq");
    } else if (me(s)) {
      if (i) continue;
      const o = yu(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? ms(s, s.getMarker(), r, n, i) : Ae(s) || $(s) && ms(s, t, r, n, i);
}
function g1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = yu(e, a);
    if (!c) {
      Wo(o, "unknown", r), Wc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Wc(n, l) || Wo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of xe().getChildren())
    Ae(o) || (st(o) || Fe(o) ? i(o, o.getMarker()) : re(o) ? (i(o, o.getMarker()), s(o) && ms(o, o.getMarker(), e, r, !1)) : $(o) && s(o) && ms(o, "p", e, r, !1));
  return r;
}
function m1(e) {
  return !!e?.includes("(basic)");
}
function y1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Am(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Bc(e, t);
}
function bu(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Pm(e, t) {
  const r = [];
  for (const n of t) {
    const i = bu(e, n);
    i && Wc(r, i);
  }
  return r;
}
function yo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: y1(e.description),
    isBasic: m1(e.description)
  };
}
function b1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Hc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : b1(e.marker, t.marker);
}
function Gc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Pm(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Am(i.marker, r)
  ).filter((i) => {
    const s = bu(e, i.marker);
    return s !== void 0 && Em(n, s);
  }).map((i) => yo(i, "paragraph")).sort(Hc);
}
function k1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Am(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => yo(c, "character")).sort(Hc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => yo(c, "character")),
    ...a.map((c) => yo(c, "note"))
  ].sort(Hc);
}
function T1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function x1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function v1(e, t, r) {
  return [
    ...T1(e, t.openCharMarkers),
    ...k1(e, t, r)
  ].sort(x1);
}
function _1(e, t, r) {
  if (t.source === "paragraph") return Gc(e, t, r);
  const n = v1(e, t, r);
  return n.length > 0 ? n : Gc(e, t, r);
}
function C1(e, t, r) {
  const n = Gc(e, t, r), i = Pm(e, t.previousParaMarkers), s = bu(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Em(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const Zn = String.raw`\w-`, wm = "a-z0-9", S1 = `[a-z][${wm}]*`, M1 = new RegExp(
  String.raw`^\\(\+?[${Zn}]+)[ \u00A0]$`
), Om = new RegExp(String.raw`^\\(\+?[${Zn}]+)$`), E1 = new RegExp(String.raw`^\\\+?[${Zn}]*\*$`), A1 = new RegExp(
  String.raw`^\\(\+?[${Zn}]+)(?:[ \u00A0]|$)`
), P1 = new RegExp(
  String.raw`^\\(\+?)([${Zn}]+)`
), w1 = new RegExp(
  String.raw`\\\+?[${Zn}]+(?:\\?\*|[ \u00A0])`
), O1 = new RegExp(
  String.raw`\\\+?[${Zn}]*$`
), N1 = new RegExp(
  String.raw`^\\(${S1})( |$)`
), R1 = new RegExp(
  String.raw`\\[${wm}+*]*$`,
  "i"
), an = /\s/;
function Js(e) {
  if (e.isSentinel) return !1;
  const t = Y(e.key);
  return C(t) && !P(t) && te(t, ae) === "attribute";
}
function Jc(e) {
  const t = [];
  for (const n of e.spans) {
    const i = Js(n);
    for (let s = n.start; s < n.end; s += 1) {
      const o = e.text[s];
      t.push({ byte: o, position: s, isWs: an.test(o), isAttributeRun: i });
    }
  }
  const r = e.spans.filter((n) => n.isSentinel).map((n) => n.start);
  return { bytes: t, placeholders: r };
}
function bo({ bytes: e }, t) {
  let r = 0, n = 0;
  for (const i of e)
    i.position >= t || i.isWs || (r += 1, i.isAttributeRun || (n += 1));
  return { full: r, document: n };
}
function q1({ bytes: e }, t) {
  let r = 0;
  for (const n of e) n.position < t && (r = n.isWs ? r + 1 : 0);
  return r;
}
function Yc({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
function $1(e, t) {
  if (e === t) return { prefix: e.length, suffix: 0 };
  const r = Math.min(e.length, t.length);
  let n = 0;
  for (; n < r && e[n] === t[n]; ) n += 1;
  let i = 0;
  for (; i < r && e[e.length - 1 - i] === t[t.length - 1 - i]; )
    i += 1;
  return n + i > r ? { prefix: r - i, suffix: r - n } : { prefix: n, suffix: i };
}
function I1(e) {
  const t = { text: "", spans: [], sentinels: [] }, r = (i, s) => {
    t.spans.push({
      key: i.getKey(),
      start: t.text.length,
      end: t.text.length + s.length,
      isSentinel: !1
    }), t.text += s;
  }, n = (i) => {
    if (nr(i)) {
      const s = i.getParent();
      r(i, K(s) ? s.getCaller() : "");
    } else C(i) ? r(i, i.getTextContent()) : $(i) && i.getChildren().forEach(n);
  };
  return e.forEach(n), t;
}
function Nm(e) {
  const t = Jc(e);
  return {
    runs: e.sentinels.map((r, n) => {
      const i = I1(r);
      return {
        memberCount: r.length,
        before: bo(t, t.placeholders[n] ?? e.text.length),
        spelling: i,
        spelled: Yc(Jc(i)).map(({ byte: s }) => s).join("")
      };
    }),
    bytes: Yc(t).map(({ byte: r }) => r).join("")
  };
}
function Rm(e, t) {
  return {
    facts: Jc(e),
    carried: e.sentinels.map((r, n) => {
      const i = new Set(t[n]?.map((s) => s.getKey()));
      return r.map((s) => i.has(s.getKey()));
    })
  };
}
function qm(e, t) {
  const r = e.carried.map(
    (p) => p.map(() => {
    })
  ), n = (p, h) => {
    let y = 0;
    e.carried[p].forEach((m, T) => {
      m && (r[p][T] = { sentinelIndex: h, memberIndex: y }, y += 1);
    });
  }, i = (p) => p.filter(Boolean).length, s = e.carried.reduce((p, h) => p + i(h), 0), o = t.runs.reduce((p, h) => p + h.memberCount, 0);
  if (s > o) return;
  if (s === o) {
    const p = t.runs.flatMap(
      (y, m) => Array.from({ length: y.memberCount }, (T, _) => ({ sentinelIndex: m, memberIndex: _ }))
    );
    let h = 0;
    return e.carried.forEach(
      (y, m) => y.forEach((T, _) => {
        T && (r[m][_] = p[h++]);
      })
    ), { sentinelMap: r, settledOnlyRuns: [] };
  }
  const a = e.carried.map((p, h) => ({
    index: h,
    before: bo(e.facts, e.facts.placeholders[h] ?? 0)
  })).filter(({ index: p }) => i(e.carried[p]) > 0), c = Yc(e.facts), l = c.map(({ byte: p }) => p).join(""), d = [];
  let u = 0, f = 0;
  for (let p = 0; p < t.runs.length; p += 1) {
    const h = t.runs[p], y = a[f];
    if (y?.before.full === h.before.full + u) {
      if (i(e.carried[y.index]) !== h.memberCount) return;
      n(y.index, p), f += 1;
      continue;
    }
    const m = h.before.full + u;
    let T = m + h.spelled.length;
    if (l.slice(m, T) !== h.spelled) {
      const S = t.bytes.slice(h.before.full + 1);
      if (T = l.length - S.length, T <= m || l.slice(T) !== S) return;
    }
    const _ = { start: c[m].position, end: c[T - 1].position + 1 }, E = bo(e.facts, _.start), N = bo(e.facts, _.end), A = $1(l.slice(m, T), h.spelled);
    d.push({
      sentinelIndex: p,
      liveBefore: E,
      liveLength: {
        full: N.full - E.full,
        document: N.document - E.document
      },
      liveWsBefore: q1(e.facts, _.start),
      settledBefore: h.before,
      spelling: h.spelling,
      spelledLength: h.spelled.length,
      sharedPrefix: A.prefix,
      sharedSuffix: A.suffix
    }), u += T - m - 1;
  }
  return f === a.length ? { sentinelMap: r, settledOnlyRuns: d } : void 0;
}
function ma(e, t, r) {
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
function $m(e, t, r) {
  const [n, i] = r === "toSpelling" ? [e.liveLength.full, e.spelledLength] : [e.spelledLength, e.liveLength.full];
  if (t <= e.sharedPrefix) return t;
  if (t >= n - e.sharedSuffix) return i - (n - t);
}
function Im(e, t) {
  for (const r of e) {
    const n = t.nonWsBefore - r.liveBefore.full;
    if (n <= 0 || n >= r.liveLength.full) continue;
    const i = $m(r, n, "toSpelling");
    return {
      run: r,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun, attributeRunSpans: 0 }
    };
  }
}
const nt = "￼";
function Lm(e) {
  return e.length > 1 && e.startsWith(I) && e.charAt(1) !== nt ? e.slice(1) : e;
}
function $f(e) {
  return zs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Dm(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = on.serializeEditorState(
    {
      type: Er,
      version: Mr,
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
  for (; $f(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Et(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && $f(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function uo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function os(e, t) {
  O1.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += nt;
}
function $t(e) {
  return e.replaceAll(I, " ");
}
function L1(e, t, r = !1) {
  if (Bt(t)) return $t(e);
  if (e === I) return " ";
  const n = r && e.startsWith(I), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(I, "~");
}
function ys(e) {
  const t = e.getTextContent();
  return Xn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function ya(e, t) {
  const r = e[t];
  if (!Pe(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = na(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Um(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function ba(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Ts(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function ku(e) {
  return !!e.getUnknownAttributes();
}
function ka(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && ta(e);
}
function Fm(e, t) {
  return Pe(e) ? !ka(e.getMarker(), t) : K(e) || Ae(e) ? !0 : we(e) ? ku(e) : D(e) ? Km(e, t) : !1;
}
function Km(e, t) {
  if (fT(e)) return !0;
  const r = e.getMarker();
  return !Uk(r) && t(r) === void 0;
}
const Rt = "", qt = "";
function If(e) {
  return e.flatMap((t) => ze(t) ? t.getChildren() : [t]);
}
function ki(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Pe(s)) {
      const o = ya(e, i);
      ka(s.getMarker(), r) && Um(o) ? (t.push(
        Rt,
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
      ), ki(If(o), t, r), t.push(qt)) : t.push(nt), i += o.length;
    } else if (we(s)) {
      const o = ba(e, i);
      ku(s) ? t.push(nt) : (t.push(
        Rt,
        "verse",
        $t(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ki(If(o), t, r), t.push(qt)), i += o.length;
    } else P(s) ? t.push(Rt, "marker", $t(s.getTextContent()), qt) : pn(s) ? t.push(Rt, "unmatched", $t(s.getTextContent()), qt) : Fm(s, r) ? t.push(nt) : Xo(s) ? t.push(" ") : C(s) ? t.push(
      $t(
        n ? Lm(ys(s)) : ys(s)
      )
    ) : D(s) ? (t.push(Rt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ki(s.getChildren(), t, r, !0), t.push(qt)) : ke(s) ? ki(s.getChildren(), t, r, n) : $(s) ? (t.push(Rt, s.getType()), ki(s.getChildren(), t, r), t.push(qt)) : t.push(nt);
  }
}
function ji(e, t) {
  const r = [];
  return ki(e, r, t), r.join("");
}
function Rr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function qi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Tu(e) {
  return e.type ?? "";
}
function zm(e, t, r) {
  return t === "closing" ? Ve(e, r) : t === "selfClosing" ? Ve("") : Ee(e, r);
}
function oc(e, t) {
  const r = e[t];
  if (!(!r || Tu(r) !== "attribute-run"))
    return Rr(r) ?? [];
}
function Vi(e, t) {
  const r = [];
  return ds(e, r, t), r.join("");
}
function ds(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Tu(s);
    if (o === "ms") {
      const l = s, d = oc(e, i + 1);
      d && ka(l.marker ?? "", r) ? (t.push(
        Rt,
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
      ), ds(d, t, r), t.push(qt), i += 1) : t.push(nt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(nt);
        continue;
      }
      t.push(
        Rt,
        "verse",
        $t(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = oc(e, i + 1 + d);
      for (; u; )
        ds(u, t, r), d++, u = oc(e, i + 1 + d);
      t.push(qt), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Rt,
        "marker",
        $t(
          zm(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        qt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Rt, "char", JSON.stringify(l.unknownAttributes ?? null)), ds(Rr(s) ?? [], t, r, !0), t.push(qt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(nt);
      continue;
    }
    if (o === "unmatched") {
      t.push(Rt, "unmatched", $t(qi(s) ?? "")), t.push(qt);
      continue;
    }
    const a = qi(s);
    if (a !== void 0) {
      t.push($t(n ? Lm(a) : a));
      continue;
    }
    const c = Rr(s);
    c ? (t.push(Rt, o), ds(c, t, r), t.push(qt)) : t.push(nt);
  }
}
function Ta(e) {
  let t = 0;
  for (const r of e) {
    const n = Rr(r);
    if (n) {
      t += Ta(n);
      continue;
    }
    const i = qi(r);
    if (i !== void 0)
      for (const s of i) s === nt && t++;
  }
  return t;
}
function $i(e, t, r, n, i) {
  cn(e.getChildren(), t, r, n, i);
}
function cn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      uo(t, a, $t(a.getTextContent()));
    else if (Pe(a)) {
      s();
      const c = ya(e, o);
      ka(a.getMarker(), r) && Um(c) ? cn(c, t, r, n) : os(t, [a, ...c]), o += c.length;
    } else if (K(a) || Ae(a))
      s(), os(t, [a]);
    else if (we(a)) {
      s();
      const c = ba(e, o);
      ku(a) ? os(t, [a, ...c]) : (uo(t, a, $t(ys(a))), cn(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), Km(a, r) ? os(t, [a]) : $i(a, t, r, n, { pending: !0 });
    else if (Xo(a))
      s(), uo(t, a, " ");
    else if (C(a)) {
      const c = Xn(a) || te(a, ae) === "attribute", l = s() && !c;
      uo(
        t,
        a,
        c ? $t(ys(a)) : L1(ys(a), n, l)
      );
    } else $(a) ? $i(a, t, r, n, i) : (s(), os(t, [a]));
  }
}
function Bm(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ae(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return $i(e, i, t, r), i;
}
function D1(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  return $i(e, n, t, r), n;
}
function xu(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!re(i)) return;
    const s = Bm(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function jm(e, t) {
  let r = 0;
  const n = (i) => {
    if (C(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(nt);
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
    } else $(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function Xc(e, t = []) {
  for (const r of e)
    we(r) ? t.push(r) : $(r) && Xc(r.getChildren(), t);
  return t;
}
function Vm(e) {
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
function vu(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), $(i) && $i(i, n, t, r);
  return n;
}
function Wm(e) {
  return e.filter(Js).length;
}
function U1(e) {
  if (e.isSentinel) return !1;
  const t = Y(e.key);
  return P(t) || Js(e);
}
function Lf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Js(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      an.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Bn(e, t, r) {
  const n = Lf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !U1(i) ? Lf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Wm(e.spans) };
}
function ac(e) {
  if (e.isSentinel) return !1;
  const t = Y(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function F1(e) {
  const t = Y(e.key);
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
function K1(e) {
  const t = Y(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = we(t) ? ba(n, i) : Pe(t) ? ya(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function pr(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e, s = Wm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const p of i) {
    const h = p.end - p.start, y = !p.isSentinel && (r || !ac(p));
    if (!(o && Js(p))) {
      if (d) {
        if (!y) continue;
        a = { key: p.key, offset: 0 };
        break;
      }
      for (let m = 0; m < h; m++) {
        const T = n[p.start + m];
        if (c === 0 && (l === 0 || !an.test(T))) {
          if (y) {
            a = { key: p.key, offset: m };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? an.test(T) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (y && !r) {
          a = { key: p.key, offset: h };
          break;
        }
        d = !0;
      }
    }
  }
  if (a) return { ...a, type: "text" };
  const u = i[i.length - 1];
  if (u && ac(u)) {
    const p = F1(u);
    if (p) return p;
  }
  if (u?.isSentinel) {
    const p = K1(u);
    if (p) return p;
  }
  const f = [...i].reverse().find((p) => !p.isSentinel && !ac(p));
  if (f) return { key: f.key, offset: f.end - f.start, type: "text" };
}
function Hm(e, t = []) {
  for (const r of e)
    ke(r) && t.push(r), $(r) && Hm(r.getChildren(), t);
  return t;
}
function Gm(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), $(e) && e.getChildren().forEach((r) => Gm(r, t)), t;
}
function z1(e, t) {
  const r = Bn(e, t.key, 0);
  if (r)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: r,
      run: e.spans.filter((n) => n.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: r };
}
function xa(e, t, r = t.sentinels) {
  const n = [];
  for (const i of Hm(e)) {
    const s = Gm(i), o = t.spans.filter((m) => s.has(m.key)), a = o.find((m) => m.isSentinel || !P(Y(m.key))) ?? o[0], c = o[o.length - 1];
    if (!a || !c) continue;
    const l = z1(t, a), d = Bn(t, c.key, c.end - c.start);
    if (!l || !d) continue;
    const u = i.getTypedOnClicks(), f = i.getTypedOnRemoves(), p = i.getTypedOnMouseEnters(), h = i.getTypedOnMouseLeaves(), y = Object.entries(i.getTypedIDs()).flatMap(
      ([m, T]) => T.map((_) => ({
        type: m,
        id: _,
        onClick: u[m]?.[_],
        onRemove: f[m]?.[_],
        onMouseEnter: p[m]?.[_],
        onMouseLeave: h[m]?.[_]
      }))
    );
    y.length > 0 && n.push({ annotations: y, start: l, end: d });
  }
  return { ranges: n, live: n.length > 0 ? Rm(t, r) : void 0 };
}
function B1(e, t, r) {
  const n = Jm(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!ke(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function j1(e, t) {
  const r = Jm(e);
  if (!r) return;
  const n = qn();
  n.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), r[0].insertBefore(n), n.append(...r);
}
function Jm(e) {
  const t = Y(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = we(t) ? ba(r, n) : Pe(t) ? ya(r, n) : [];
  return [t, ...i];
}
function Df(e) {
  return e.type === "text" && P(Y(e.key));
}
function V1(e) {
  const t = Y(e.key);
  if (!C(t) || P(t) || te(t, ae) === "attribute") return !1;
  const r = t.getParent();
  if (!K(r)) return !0;
  const n = r.getChildren().find((i) => !P(i) || i.getMarkerSyntax() !== "opening");
  return !t.is(n);
}
function Ym(e, t, r, n) {
  const i = r.settledOnlyRuns, s = { addressDisplayBytes: n }, o = Im(i, e);
  if (o) {
    if (!o.within) return;
    const l = pr(o.run.spelling, o.within, s);
    return !l || !V1(l) ? void 0 : { point: l, literalRun: o.run.sentinelIndex };
  }
  const a = n && i.find(
    (l) => e.nonWsBefore === l.liveBefore.full && e.wsRun >= l.liveWsBefore
  );
  if (a) {
    const l = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), d = {
      nonWsBefore: a.settledBefore.full + 1,
      wsRun: 0,
      attributeRunSpans: 0
    }, u = pr(t, d, s);
    return u && l ? { point: u, preservedKey: l } : void 0;
  }
  const c = pr(
    t,
    ma(i, e, "toSettled"),
    s
  );
  return c && { point: c };
}
function W1(e, t, r) {
  if (e.kind === "byte") return Ym(e.anchor, t, r, !0);
  const n = r.sentinelMap[e.run]?.find((o) => o !== void 0), i = n && t.sentinels[n.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = pr(
    t,
    ma(r.settledOnlyRuns, e.anchor, "toSettled"),
    { addressDisplayBytes: !0 }
  );
  return s && { point: s, preservedKey: i };
}
function va({ ranges: e, live: t }, r) {
  if (e.length === 0 || !t) return;
  const n = R()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = r();
      if (!o) continue;
      const a = qm(t, Nm(o));
      if (!a) continue;
      const c = W1(i.start, o, a), l = Ym(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const { point: d, preservedKey: u } = c, { point: f } = l;
      if (Df(d) || Df(f)) continue;
      if (d.key === f.key && d.offset === f.offset && d.type === f.type) {
        u && j1(u, s);
        continue;
      }
      const p = Qo();
      p.anchor.set(d.key, d.offset, d.type), p.focus.set(f.key, f.offset, f.type), xl(
        p,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), u && B1(u, s.type, s.id);
    }
  Pn(n);
}
function _u(e, t, r) {
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
function Xm(e, t) {
  return e.sentinels.filter((n, i) => n.length > 0 && (t[i]?.length ?? 0) === 0).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? _u(n, s.start, s.end) : n;
  }, e);
}
function Ys(e) {
  const t = e.exportJSON();
  return $(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(Ys(r))), t;
}
function Cu(e, t, r, n, i, s, o) {
  const a = xa(
    e,
    Xm(t, r),
    r
  );
  if (a.ranges.length === 0) return n;
  const c = Ap({
    nodes: [Ye, ...nu],
    onError: (d) => {
      throw d;
    }
  });
  hl(
    c,
    Ye,
    (d) => qn(d.getTypedIDs()),
    (d, u) => Object.entries(d.getTypedIDs()).forEach(
      ([f, p]) => p.forEach((h) => u.addID(f, h))
    )
  );
  let l;
  return c.update(
    () => {
      const d = xe(), u = i === "noteContent" ? Dt() : d;
      u !== d && d.append(u), l = u.getKey(), n.forEach((p) => u.append(Ii(p))), va(a, () => {
        const p = u.getChildren();
        if (i === "paras") return vu(p, s, o);
        if (i === "chapter")
          return Ce(p[0]) ? Ns(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return cn(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const d = l === void 0 ? void 0 : Y(l);
    return $(d) ? d.getChildren().map(Ys) : n;
  });
}
function Qm(e, t, r) {
  const n = pr(e, t);
  if (n?.type === "text") {
    const i = Y(n.key);
    if (i && C(i)) {
      i.select(n.offset, n.offset);
      return;
    }
  } else if (n) {
    const i = Y(n.key), s = $(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find($)?.selectStart();
}
function Zm(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find($)?.selectStart();
      return;
    }
    Qm(vu(e, n, i), t, e);
  }
}
function H1(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find($)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  cn(e, s, n, i), Qm({ text: s.text, spans: s.spans }, t, e);
}
function ey(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = xu(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = R();
  if (O(c)) {
    for (let m = c.anchor.getNode(); m; m = m.getParent())
      if (e.some((T) => T.is(m))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Bn(s, c.anchor.key, c.anchor.offset));
  }
  const l = xa(e, s), d = $r(s.text, {
    getMarker: n
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (ei(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = on.serializeEditorState(
    { type: Er, version: Mr, content: d },
    r
  );
  if (Vi(u.root.children, n) === ji(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = u.root.children.map((m) => Ii(m));
  if (Vm(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = Xc(e).map((m) => ({
    number: m.getNumber(),
    sid: m.getSid()
  })), h = e[0];
  f.forEach((m) => h.insertBefore(m)), jm(f, s.sentinels), e.forEach((m) => m.remove());
  const y = Xc(f);
  for (let m = 0; m < p.length && m < y.length; m++)
    y[m].getNumber() === p[m].number && y[m].setSid(p[m].sid);
  return va(l, () => vu(f, n, r)), Zm(f, o, a, n, r), !0;
}
function Os(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Ne.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!P(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(nr(s) || C(s) && s.getTextContent() === Et(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const d = n[a - 1];
    if (!P(d) || d.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return cn(c, l, t, r), { out: l, contentNodes: c };
}
function ty(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(nt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function G1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Os(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = R();
  if (O(d)) {
    for (let S = d.anchor.getNode(); S; S = S.getParent())
      if (e.is(S)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Bn(o, d.anchor.key, d.anchor.offset));
  }
  const u = xa(a, o), f = $r(o.text, {
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
  const h = p.content ?? [], y = ty(h), m = Dm(e, h, y, r);
  if (m.failure !== void 0)
    return m.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      m.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Ta(m.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const T = e.getCategory() !== y;
  if (T && e.setCategory(y), Vi(m.children, n) === ji(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), T;
  const _ = m.children.map((S) => Ii(S));
  if (Vm(_) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), T;
  const E = a[0];
  if (E)
    _.forEach((S) => E.insertBefore(S));
  else {
    const S = e.getChildren().find((M) => P(M) && M.getMarkerSyntax() === "closing");
    _.forEach((M) => S ? S.insertBefore(M) : e.append(M));
  }
  jm(_, o.sentinels);
  const N = new Set(o.sentinels.flat().map((S) => S.getKey()));
  a.forEach((S) => {
    N.has(S.getKey()) || (ke(S) && (S.getWritable().__suppressOnRemoveCallbacks = !0), S.remove());
  });
  const A = () => Os(e, n, r);
  return va(u, () => A()?.out), H1(
    A()?.contentNodes ?? _,
    c,
    l,
    n,
    r
  ), !0;
}
const ry = /* @__PURE__ */ new Set(["ca", "cp"]), Su = "cp";
function ny(e) {
  if (!ut(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if ($i(e, t, dr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = $r(r, { getMarker: dr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Su)
  );
}
function Wi(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && ry.has(r.getMarker()) || ny(r)) {
      t.push(r);
      continue;
    }
    re(r) && r.getMarker() === Su && t.push(r);
    break;
  }
  return t;
}
function J1(e) {
  const t = (n) => D(n) && ry.has(n.getMarker()) || ny(n);
  if (t(e) || re(e) && e.getMarker() === Su)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ce(n)) return n;
      if (!t(n)) return;
    }
}
function Ns(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Wi(e);
  if (n.some((s) => re(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (cn(e.getChildren(), i, t, r), cn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function Y1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Wi(e)], o = Ns(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = R();
  if (O(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((T) => T.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Bn(o, l.anchor.key, l.anchor.offset));
  }
  const d = xa(s, o), u = $r(o.text, { getMarker: n }), [f] = u;
  if (u.length === 0 || typeof f != "object" || f.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (ei(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const p = on.serializeEditorState(
    { type: Er, version: Mr, content: u },
    r
  );
  if (Vi(p.root.children, n) === ji(s, n)) {
    let m = !1;
    return e.getNumber() !== (f.number ?? "") && (e.setNumber(f.number ?? ""), m = !0), e.getAltnumber() !== f.altnumber && (e.setAltnumber(f.altnumber), m = !0), e.getPubnumber() !== f.pubnumber && (e.setPubnumber(f.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const h = p.root.children.map((m) => Ii(m));
  if (!Ce(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const y = h[0];
  return h.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), va(
    d,
    () => Ns(y, n, r)
  ), Zm(h, a, c, n, r), !0;
}
function Rs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ae(n)) return;
    !t && (K(n) || re(n) || Ce(n)) && (t = n), Ar(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? J1(r) : void 0) ?? t;
}
function Yt(e, t) {
  const r = Rs(e);
  return r ? K(r) ? G1(r, t) : Ce(r) ? Y1(r, t) : ey([r], t) : !1;
}
const X1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Uf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !X1.has(n[0])
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
          t.push(`\\${n}`), Uf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), ko(r.content, t), Uf(r, t), i !== "false" && t.push(`\\${n}*`);
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
function Ff(e, t, r) {
  const n = Rs(e);
  if (!re(n)) return !1;
  const i = R();
  if (!O(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Bm(n, t, r);
  if (!o) return !1;
  const a = $r(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    an.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  ko(a, l);
  for (const d of l.join("").replaceAll(I, "~")) {
    if (an.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function Q1(e) {
  return [lt(e), la()];
}
function Mu(e) {
  Zt(e, 2);
}
function Z1(e) {
  const t = R();
  if (!O(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Eu(e) {
  const t = Z1(e);
  e.splice(0, 0, Q1(e.getMarker())), t && Mu(e);
}
function Ho(e, t) {
  e.setMarker(t), Eu(e), Mu(e);
}
function eA(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Xn(n)) {
    if (C(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(I), kt(n, ae, mr), n.setMode("token");
      return;
    }
    if (rg(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(la());
  }
}
function Kf(e, t, r) {
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
function bs(e) {
  for (let t = e; t; t = t.getParent())
    if (re(t)) return t;
}
function tA(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = bs(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = bs(r.getNode())?.is(s) ?? !1, a = bs(n.getNode())?.is(s) ?? !1;
    return !(o && !Kf(r, s, "start") || a && !Kf(n, s, "end"));
  });
}
function Qc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = R();
  if (!(!O(r) || r.isCollapsed()))
    for (const n of tA(r)) t.add(n.getKey());
}
function rA(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = R();
  if (!O(r) || !r.isCollapsed()) return;
  const n = bs(r.focus.getNode());
  n && t.add(n.getKey());
}
function nA(e) {
  const t = R();
  !O(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (Qc(e), t.removeText());
}
function iA(e, t) {
  if (!Ki(t.viewOptions)) return;
  if (zt(e.getFirstChild())) {
    eA(e, t);
    return;
  }
  if (t.splitExpected.current) {
    Eu(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => re(o) && !o.is(e))) {
      Ho(e, ur), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (re(r)) {
    const n = e.getChildren().filter((a) => !Xn(a)), i = R();
    let s = !1;
    if (O(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : bs(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || $(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Zt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Ho(e, ur);
}
function sA(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = lr(t, Fs(e.getMarker()));
  return r === "" ? void 0 : r;
}
function oA(e) {
  const t = e.getChildren().filter((s) => !P(s) && te(s, ae) !== "attribute"), r = t[0];
  r && C(r) && r.getTextContent().startsWith(I) && r.setTextContent(r.getTextContent().slice(1));
  const n = sA(e);
  n && t.push(Te(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function aA(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => C(c) && !P(c) && c.getTextContent() === Et(s)
    ), a = Di(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (C(c) && c.getTextContent() === Et(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function cA(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    oA(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Yt(e, t);
}
function iy(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Ki(r)) {
    Ho(e, t);
    return;
  }
  $g(e, t);
}
function sy() {
  const e = R();
  if (!O(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = oy(e);
    return t !== "removed" ? t : (Zc(), "handled");
  }
  return Zc() ? "handled" : "declined";
}
function lA(e, t) {
  if (!t) return e;
  const r = N1.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function zf(e, t) {
  const r = R();
  if (!O(r)) return "declined";
  if (r.isCollapsed()) {
    if (!ay())
      return "declined";
  } else {
    const s = oy(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => lA(s, t)
  );
  Bf(n ?? "");
  for (const s of i)
    Zc(), Bf(s);
  return "handled";
}
function uA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Ds(n);
  if (!i) return !1;
  const s = er(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !C(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function oy(e) {
  const t = er(e.anchor.getNode()), r = er(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), dA() ? "removed" : "needs-plain-split");
}
function Bf(e) {
  if (e === "") return;
  const t = R();
  O(t) && t.insertText(e);
}
function dA() {
  const e = R();
  if (!O(e) || !e.isCollapsed()) return !1;
  const t = er(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function ay() {
  const e = R();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = er(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Zc() {
  const e = R();
  if (!O(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = ay();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Pr("fp", { closed: "false" });
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
    const [d] = l;
    d && (jx(d), i.append(d));
  }
  return i.getChildren().every(P) && i.append(Te(Ut)), cy(i), !0;
}
function cy(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (C(t)) {
    const r = t.getTextContent().startsWith(I) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if ($(t)) {
    cy(t);
    return;
  }
  e.selectEnd();
}
function fA(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function pA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of xe().getChildren()) {
    if (t && n.is(t)) break;
    (st(n) || Fe(n) || re(n)) && r.push(n.getMarker());
  }
  return r;
}
function hA(e) {
  let t = e;
  for (; $(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function gA(e, t, r) {
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
  return i ? t.is(hA(i)) && r === 0 : !1;
}
function mA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !zt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Xn(i) && t.is(i) && r === 0;
}
function yA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function bA() {
  const e = R();
  if (!O(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = it(t, re), s = !n && (!i || mA(i, t, r)) ? "paragraph" : "character", o = er(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: pA(t),
    openCharMarkers: fA(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Dl(t, r),
    anchorRect: yA()
  };
}
function kA() {
  const e = R();
  if (!O(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!C(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = R1.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function TA(e, t, r) {
  iy(e, t, r), Mu(e);
}
function xA(e, t, r) {
  const n = R();
  if (!O(n)) return;
  const i = n.focus.getNode(), s = it(i, re);
  if (t === "backslash" && s && gA(s, i, n.focus.offset)) {
    TA(s, e, r);
    return;
  }
  uy(e, r);
}
function vA(e, t) {
  const r = R();
  return !O(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function ly(e) {
  const t = R();
  return O(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function _A(e, t, r, n) {
  if (O(R()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && kA(), e.kind === "closeTag") {
    ly(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && sy() !== "declined") return;
  if (e.kind === "paragraph" && tt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    xA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ne.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return ym(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  jc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Li(), reference: r });
}
function uy(e, t) {
  const r = R();
  if (!O(r)) return;
  const n = Ki(t);
  if (gm()) {
    const s = R();
    if (!O(s)) return;
    const o = it(s.anchor.getNode(), re);
    if (!o) return;
    o.setMarker(e), n && Eu(o);
    return;
  }
  const i = r.insertParagraph();
  re(i) && (n ? Ho(i, e) : i.setMarker(e));
}
function CA() {
  const [e] = ue();
  return B(() => e.registerCommand(Pp, () => !0, Mt), [e]), null;
}
function dy(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(Ne.isValidMarker(r) || ta(r));
}
function SA(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(Ne.isValidMarker(r) || ta(r));
}
function MA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = A1.exec(e)?.[1];
  return r === void 0 ? !1 : !dy(r, t);
}
function fy(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !MA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!re(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (re(i))
    return [i, r];
}
function py(e, t) {
  const r = fy(e, t.getMarker);
  return r !== void 0 && ey(r, t);
}
function EA(e, t) {
  const r = R();
  O(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function hy(e) {
  const t = P1.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function AA(e) {
  const t = R();
  if (!O(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = hy(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function PA(e) {
  const t = R();
  if (!O(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && C(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      Nl(n);
      return;
    }
  }
  C(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function jf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = hy(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  PA(e);
}
function Vf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function gy(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Yt(e, r);
  const n = AA(e), i = e.getParent();
  if (re(i)) {
    if (!dy(t, r.getMarker))
      return py(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Yt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Vf(s, t) && jf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? SA(t, r.getMarker) : Ne.isValidMarker(s)))
      return Yt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Yt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (EA(c, Ve(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Vf(a, s) && jf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Yt(e, r);
}
function wA(e) {
  const t = R();
  if (!O(t)) return !1;
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
function OA(e, t) {
  const r = e.getTextContent();
  if (dn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (ze(e.getParent()) && vl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !wA(e)) {
    Jk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = M1.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), gy(e, n[1], t);
      return;
    }
    if (E1.test(r)) {
      t.pendingKeys.delete(e.getKey()), Yt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = Ve(e.getMarker(), e.getNested());
    if (D(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = R(), o = O(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Te(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function NA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Ah(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function my(e) {
  if (!Up(e)?.length)
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
const as = my("v"), RA = my("c"), Wf = /^[ \u00A0]*$/;
function Hf(e, t, r) {
  const n = e.getNextSibling();
  if (C(n) && n.getType() === Be.getType() && n.getMode() === "normal" && te(n, ae) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = Te(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function qA(e, t) {
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
    if (l && Wf.test(l[2] ?? "")) {
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
      const [, l, d, u] = c, f = R(), p = O(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(Lt("v", d));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Hf(e, u, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Yt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Wf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Lt("v", o)), a && Hf(e, a, a.length);
}
const $A = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function IA(e, t) {
  const r = e.getParent();
  if (!K(r) || r.getIsCollapsed() !== !1 || !Up(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Et(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = $A.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Et(a)), !0;
}
function LA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!C(t)) return;
  const r = Lt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = RA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function yy(e) {
  if (Pe(e)) {
    const { wrapper: t } = na(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = lh(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ce(e)) {
    const t = [], r = uh(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = fh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (we(e)) {
    const t = [], r = Ts(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Ts(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function DA(e) {
  const t = R();
  if (!O(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return yy(e).some((n) => r.is(n));
}
function UA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && re(e) && rg(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of xs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Gs(l, e) && (i || DA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of yy(e))
    l.remove(), n = !0;
  let s = !1;
  if (D(e)) {
    const l = kT(e);
    l !== void 0 && $k(l) && (kh(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of xs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (ev(l, e)) {
        Ms(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && sg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      ua(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Gf(e) {
  return C(e) && e.getType() === Be.getType() && e.getMode() === "normal" && te(e, ae) !== "attribute";
}
function FA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = Y(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Gf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Gf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function fo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = FA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = Y(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (dn(c)) continue;
      const h = Om.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = gy(c, h[1], e) || n : r === "idle" && Ff(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : py(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Yt(c, e) || n;
      continue;
    }
    const l = rn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = UA(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Ff(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = Yt(d, e) || n;
    }
  }
  return n;
}
function by(e) {
  if (pn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return fs(t) !== void 0;
  return !1;
}
function KA(e) {
  const t = rn(e);
  if (!t) return !1;
  const r = Or(t.kind);
  return !ua(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Jf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (st(t) || Ae(t) || Lh(t)) return !0;
  return !1;
}
function zA(e, t) {
  const r = e.getTextContent(), n = te(e, ae), i = e.getParent();
  if (n !== "attribute" && Ce(i)) {
    r.replace(/^[ \u00A0]+/, "") === Lt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (IA(e, t)) return;
  if (n === "attribute") {
    KA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && by(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Jf(e))
      t.pendingKeys.add(e.getKey());
    else if (ph(e)) t.pendingKeys.add(e.getKey());
    else if (Ce(Rs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      D(a) && Th(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Jf(e)) return;
  const s = R(), o = O(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (w1.test(o)) {
    if (jk(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Yt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function BA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : sg(e, t);
}
function jA(e) {
  const t = (r) => {
    if (P(r)) {
      dn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (pn(r)) {
      Ah(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of xs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Gs(n, r) || BA(n, r)) && e.pendingKeys.add(r.getKey());
    if (we(r)) {
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
      (i.includes("\\") || i.includes("|") && by(r) || i.includes("//") || ph(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ae(r) && !st(r)) {
      if (ze(r) && r.getChildrenSize() === 0) {
        const n = rn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      $(r) && r.getChildren().forEach(t);
    }
  };
  xe().getChildren().forEach(t);
}
function VA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = te(e, ae);
  if (r === "attribute" || r === mr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (st(o) || Ce(o) || Ae(o)) return;
  const n = t.startsWith(I) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? I : "") + i.replace(/ (?=[ \u00A0])/g, I).replace(new RegExp("(?<=\\u00A0) ", "g"), I);
  s !== t && e.setTextContent(s);
}
function WA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function el(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(WA(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function HA(e) {
  const t = el(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(I) ? r : n.includes(I) || i.includes(I) ? i : void 0;
  if (!s) return !1;
  const o = R();
  if (!O(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(I, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = Li();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(vo, void 0), d === "") return;
    const f = R();
    O(f) && f.insertText(d);
  }), !0;
}
function GA(e) {
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
function JA(e) {
  const t = R();
  if (!O(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(I, " ")
  }, n = Yb(e), i = Xb(e);
  return n && (r["text/html"] = GA(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Yf(e, t, r) {
  const n = R();
  if (!O(n) || n.isCollapsed()) return !1;
  const i = JA(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return Jb(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const ky = cl(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function cc(e) {
  const t = e();
  return Nn(xp), Nn(Kp), t;
}
const Xf = 8, YA = 1e3;
function mi(e, t) {
  const r = we(e) ? ["va", "vp"] : Pe(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    sv(Or(n), e, t.pendingKeys);
}
function XA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(pl) || i.updateTags.has(vi)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = Y(o);
        if (!c) continue;
        const l = rn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = Y(o.getKey());
        c?.isAttached() && Or(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(gr, r),
    e.registerMutationListener(Lr, r),
    e.registerMutationListener(Ir, r)
  );
}
function QA(e, t, r) {
  return et(
    e.registerCommand(
      Cr,
      (n) => {
        if (zg()) return !1;
        const i = el(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(I, "~") : s).split(`
`);
          let c = zf(a, t.getMarker);
          if (c === "declined" && uA(e) && (c = zf(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Sr
    ),
    e.registerCommand(
      Cr,
      (n) => {
        const i = el(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !jE()) return !1;
        n?.preventDefault();
        const o = R();
        return O(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(vo, void 0), a === "") return;
          const l = R();
          O(l) && l.insertText(a);
        }), !0;
      },
      Ue
    ),
    e.registerCommand(
      Cr,
      () => (t.splitExpected.current = !0, !1),
      Mt
    )
  );
}
function ZA({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = ue(), s = e?.markerMode === "editable", o = !!e && Bt(e), a = Q(void 0), c = Q(n);
  return B(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? dr, l.logger = r);
  }, [e, t, r, n]), B(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? dr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const d = Yx(i, l.pendingKeys);
    let u, f = !1, p = !1, h, y = !1, m = !1, T = 0;
    const _ = () => T < Xf ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Xf} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), E = (M, q = "departure") => {
      i.update(() => {
        T = cc(
          () => fo(l, M, q)
        ) ? T + 1 : 0;
      });
    };
    let N;
    const A = () => {
      if (N !== void 0 && clearTimeout(N), N = void 0, m || l.pendingKeys.size === 0) return;
      const M = c.current ?? YA;
      M < 0 || (N = setTimeout(() => {
        N = void 0, !(m || l.pendingKeys.size === 0) && (f || _() || E(void 0, "idle"));
      }, M));
    }, S = et(
      i.registerNodeTransform(gr, (M) => {
        if (i.isComposing()) return;
        OA(M, l);
        const q = rn(M);
        q && (we(q.owner) || K(q.owner) || Ce(q.owner) || Pe(q.owner) && na(q.owner).wrapper === void 0) && mi(q.owner, l);
      }),
      i.registerNodeTransform(ht, (M) => {
        i.isComposing() || (qA(M, l), mi(M, l));
      }),
      i.registerNodeTransform(Pt, (M) => {
        i.isComposing() || (LA(M), M.isAttached() && mi(M, l));
      }),
      i.registerNodeTransform(tt, (M) => {
        i.isComposing() || iA(M, l);
      }),
      i.registerNodeTransform(ve, (M) => {
        if (!i.isComposing()) {
          cA(M, l);
          for (const q of ["separator", "char"])
            M.isAttached() && Gs(Or(q), M) && l.pendingKeys.add(M.getKey());
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
      i.registerNodeTransform(Qt, (M) => {
        i.isComposing() || mi(M, l);
      }),
      i.registerNodeTransform(Ir, (M) => {
        if (i.isComposing()) return;
        const q = rn(M);
        q && (Pe(q.owner) || we(q.owner) || K(q.owner) || Ce(q.owner)) && mi(q.owner, l);
      }),
      i.registerNodeTransform(Ne, (M) => {
        i.isComposing() || (aA(M, l), mi(M, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Ur, (M) => {
        i.isComposing() || NA(M, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(Be, (M) => {
        i.isComposing() || zA(M, l);
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
        (M) => {
          i.getEditorState().read(() => {
            for (const [q, J] of M) {
              if (J === "destroyed") continue;
              const H = Y(q);
              !H || te(H, ae) !== "attribute" || ze(H.getParent()) || i.getElementByKey(q)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      XA(i, l),
      ...o ? [
        i.registerNodeTransform(Be, (M) => {
          i.isComposing() || VA(M);
        }),
        i.registerCommand(
          ea,
          (M) => Yf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            M && typeof M == "object" && "clipboardData" in M ? M : null,
            i,
            !1
          ),
          Ue
        ),
        i.registerCommand(
          On,
          (M) => Yf(
            M && typeof M == "object" && "clipboardData" in M ? M : null,
            i,
            !0
          ),
          Ue
        ),
        i.registerCommand(
          Cr,
          (M) => HA(
            // Same jsdom-safe duck-check as COPY above.
            M && typeof M == "object" && "clipboardData" in M ? M : null
          ),
          Ue
        )
      ] : [],
      i.registerCommand(
        On,
        () => (Qc(l), !1),
        Sr
      ),
      i.registerCommand(
        ul,
        () => (i.isComposing() || nA(l), !1),
        xi
      ),
      i.registerCommand(
        Zo,
        () => (f = !1, T = 0, A(), !1),
        Mt
      ),
      i.registerCommand(
        qr,
        (M) => (f = !1, T = 0, A(), (M.key === "Backspace" || M.key === "Delete") && (Qc(l), rA(l)), i.isComposing() || !M.ctrlKey || M.altKey || M.shiftKey || M.metaKey || M.key !== " " && M.code !== "Space" || !BE() ? !1 : (M.preventDefault(), !0)),
        Ue
      ),
      i.registerCommand(
        Mp,
        (M) => {
          const q = sy();
          q === "needs-plain-split" && i.dispatchCommand(vo, void 0);
          const J = q !== "declined" || ov();
          return J && M?.preventDefault(), fo(l), J;
        },
        Ue
      ),
      i.registerCommand(
        vo,
        () => (l.splitExpected.current = !0, gm()),
        Ue
      ),
      QA(i, l, o),
      i.registerCommand(
        ky,
        () => {
          if (f) return !0;
          const M = i.getRootElement(), q = M?.ownerDocument, J = !!M && !!q && q.hasFocus() && M.contains(q.activeElement);
          let H;
          if (J) {
            const ne = R();
            H = O(ne) ? ne.focus.key : u;
          }
          return cc(() => fo(l, H)), !0;
        },
        Mt
      ),
      i.registerCommand(
        yl,
        () => (p = !0, !1),
        Mt
      ),
      i.registerCommand(
        fl,
        () => {
          if (f) return !1;
          const M = R(), q = O(M) ? M.focus.key : u;
          return cc(() => fo(l, q)), !1;
        },
        Mt
      ),
      i.registerUpdateListener(({ editorState: M, tags: q }) => {
        const J = p || q.has(ks);
        p = !1, l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const H = M.read(() => {
          const ce = R();
          return O(ce) ? ce.focus.key : void 0;
        }), ne = h;
        if (H !== void 0 && (h = H), q.has(pl)) {
          l.pendingKeys.clear(), M.read(() => jA(l)), f = !0, H !== void 0 && (u = H);
          return;
        }
        if (J) {
          H !== void 0 && H !== ne && (f = !0);
          return;
        }
        f || (H !== void 0 && (u = H), A(), !(y || H === void 0) && [...l.pendingKeys].some((ce) => ce !== H) && (y = !0, queueMicrotask(() => {
          y = !1, !m && (_() || E(u));
        })));
      })
    );
    return () => {
      m = !0, N !== void 0 && clearTimeout(N), N = void 0, d(), S(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const eP = ["status_unknown", "status_invalid"], Ty = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, tP = Object.values(Ty);
function rP(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Ty[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Qf(e) {
  e.classList.remove(...eP), e.removeAttribute("aria-description"), tP.includes(e.title) && e.removeAttribute("title");
}
function nP(e, t, r, n) {
  const i = (a) => a.read(() => xe().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const d = Y(l)?.getTopLevelElement();
        d && a.add(d.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function iP(e) {
  const t = Y(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function sP({
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
        const d = g1(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || iP(f)) continue;
            const h = Y(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Qf(p);
        }
        for (const [f, p] of u) {
          const h = n.getElementByKey(f);
          h && rP(h, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          nP(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && Qf(d);
      }
    };
  }, [n, i, t, r]), null;
}
function Xs(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Rr(o);
    a && $(s) && Xs(s.getChildren(), a, r);
  }
}
function xy(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Rr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = qi(o);
      if (c === void 0 || !c.includes(nt)) continue;
      const l = c.split(nt), d = [];
      for (let u = 0; u < l.length; u++) {
        const f = l[u];
        if (u > 0 && d.push(...t[r++] ?? []), f.length > 0) {
          const p = {
            ...o,
            text: f
          };
          d.push(p);
        }
      }
      i.splice(s, 1, ...d), s += d.length - 1;
    }
  };
  n(e);
}
function Qs(e, t, r) {
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
function vy(e, t) {
  const r = [];
  for (const n of e)
    Fm(n, t) || ((re(n) || D(n)) && r.push(n.getMarker()), $(n) && r.push(...vy(n.getChildren(), t)));
  return r;
}
function _y(e) {
  const t = [];
  for (const r of e) {
    const n = Tu(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Rr(r);
    i && t.push(..._y(i));
  }
  return t;
}
function Au(e, t, r) {
  const n = vy(e, r), i = _y(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function Cy(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = R();
  let n, i;
  if (O(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = Y(t.key), i = t.offset;
  else
    return;
  if (!(!C(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Pu(e, t) {
  const r = t && Sy(e, t);
  return r ? _u(e, r.start, r.end) : e;
}
function Sy(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function My(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = xu(e, o, s);
  if (!c) return;
  const l = Pu(c, i), d = $r(l.text, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (ei(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = on.serializeEditorState(
    { type: Er, version: Mr, content: d },
    s
  ).root.children;
  if (Ta(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Qs(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Vi(u, o) === ji(e, o) && Au(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  xy(u, f.serialized);
  const h = oP(e), y = Ey(u);
  for (let m = 0; m < h.length && m < y.length; m++)
    h[m].sid !== void 0 && y[m].number === h[m].number && (y[m].sid = h[m].sid);
  return Cu(
    e,
    l,
    f.live,
    u,
    "paras",
    o,
    s
  );
}
function oP(e) {
  const t = [], r = (n) => {
    we(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Ey(e) {
  const t = [];
  for (const r of e) {
    ih(r) && t.push(r);
    const n = Rr(r);
    n && t.push(...Ey(n));
  }
  return t;
}
function aP(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Os(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = Pu(l, i), f = $r(u.text, {
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
  const h = p.content ?? [], y = ty(h), m = e.getCategory() !== y, T = Dm(e, h, y, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = T.children;
  if (Ta(_) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const E = Qs(l, t, n);
  if (!E) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Vi(_, o) === ji(d, o) && Au(d, _, o)) {
    if (m)
      return { rebuilt: void 0, contentNodes: d, category: y, categoryChanged: m };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return xy(_, E.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: Cu(
      d,
      u,
      E.live,
      _,
      "noteContent",
      o,
      s
    ),
    contentNodes: d,
    category: y,
    categoryChanged: m
  };
}
function Zf(e) {
  return e.$?.textType;
}
function cP(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Zf(e) === Zf(t);
}
function lP(e) {
  const t = [];
  for (const r of e) {
    const n = Y(r);
    n?.isAttached() && Ae(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function uP(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (dn(e)) return;
  const n = Om.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function ep(e, t) {
  const r = e;
  r.marker = t, r.text = zm(t, r.markerSyntax, r.nested);
}
function Ay(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ne.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && ep(a.node, s);
  const c = n.getChildren().filter(P).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && ep(l.node, s);
}
function Py(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Ns(e, i, n);
  if (!o) return;
  const a = Pu(o, r), c = $r(a.text, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (ei(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = on.serializeEditorState(
    { type: Er, version: Mr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...Wi(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Vi(d, i) === ji(u, i) && Au(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Cu(
    u,
    a,
    [],
    d,
    "chapter",
    i,
    n
  );
}
function wy(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (u) => {
    K(u) ? s.set(u.getKey(), u) : Ce(u) ? o.set(u.getKey(), u) : n.set(u.getKey(), [u]);
  };
  for (const u of e) {
    const f = Y(u);
    if (!f?.isAttached()) continue;
    const p = Rs(f);
    if (p) {
      if (c(p), P(f)) {
        const h = fy(f, t.getMarker);
        h && i.push(h);
      }
      if (K(p)) {
        const h = uP(f);
        h && a.set(p.getKey(), h);
      }
    }
  }
  const l = /* @__PURE__ */ new Set();
  for (const u of i)
    u.some((f) => l.has(f.getKey())) || (u.forEach((f) => {
      l.add(f.getKey()), n.delete(f.getKey());
    }), n.set(u[0].getKey(), u));
  if (r) {
    const u = Rs(r.node);
    u && c(u);
  }
  const d = lP(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: d,
    huskKeys: new Set(d.map((u) => u.getKey()))
  };
}
function Oy(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && qi(r), s = n && qi(n);
  r && n && i !== void 0 && s !== void 0 && cP(r, n) && (r.text = i + s, e.splice(t, 1));
}
function _a(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Rr(s.node) : void 0;
  if (!s || !o) return !1;
  const a = aP(e, t, r, n, i);
  if (!a) return !1;
  if (a.categoryChanged) {
    const d = s.node;
    a.category === void 0 ? delete d.category : d.category = a.category;
  }
  if (!a.rebuilt) return a.categoryChanged;
  const c = t.get(a.contentNodes[0].getKey());
  if (!c) return a.categoryChanged;
  const l = o.indexOf(c.node);
  return l < 0 ? a.categoryChanged : (o.splice(l, a.contentNodes.length, ...a.rebuilt), !0);
}
function dP(e, t, r, n, i) {
  const s = Cy(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: d, huskKeys: u } = wy(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  Xs(xe().getChildren(), e.root.children, f);
  for (const p of l.values()) Ay(p, f);
  for (const p of a.values())
    _a(p, f, r, u, s);
  for (const p of o.values()) {
    const h = f.get(p[0].getKey());
    if (!h) continue;
    const y = My(p, f, r, u, s);
    if (!y) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || h.siblings.splice(m, p.length, ...y);
  }
  for (const p of c.values()) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const y = 1 + Wi(p).length, m = Py(p, r, s);
    if (!m) continue;
    const T = h.siblings.indexOf(h.node);
    T < 0 || h.siblings.splice(T, y, ...m);
  }
  for (const p of d) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const y = h.siblings.indexOf(h.node);
    y < 0 || Oy(h.siblings, y);
  }
  return am(e, r.viewOptions);
}
function fP({
  viewOptions: e,
  logger: t
}) {
  const [r] = ue(), n = Ki(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return B(() => {
    if (n)
      return r.registerNodeTransform(
        tt,
        (i) => pP(i, t)
      );
  }, [r, n, t]), null;
}
function pP(e, t) {
  e.getMarker() !== ur && (e.isEmpty() || zt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${ur}" (key ${e.getKey()})`
  ), e.setMarker(ur)));
}
function po(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const hP = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function gn(e) {
  return hP.exec(e)?.[1] ?? e;
}
function jn(e, t) {
  const r = e.jsonPath.slice(gn(e.jsonPath).length);
  return { ...e, jsonPath: `${It(t)}${r}` };
}
function gP(e, t) {
  return e.length === t.length && e.every((r, n) => r === t[n]);
}
function Ny(e) {
  if (bp(e) || xo(e)) return !0;
  if (!fc(e)) return !1;
  const t = e.jsonPath.slice(gn(e.jsonPath).length);
  return t === "['marker']" || t === "['caller']";
}
function Ry(e, t) {
  return Ny(e) && gP(un(gn(e.jsonPath)), Qr(t));
}
function qy(e, t, r) {
  if (!e.isAttached()) return;
  const [n, i] = wi(
    jn(t, Qr(e)),
    r
  );
  if (!(!n || i === void 0))
    return { key: n.getKey(), offset: i, type: $(n) ? "element" : "text" };
}
function mP(e, t) {
  const r = pr(e, t, { addressDisplayBytes: !0 }), n = r && Y(r.key);
  return r && r.offset > 0 && P(n) && n.getMarkerSyntax() !== "opening" ? r : pr(e, t);
}
function yP(e, t) {
  let r = xe();
  for (let n = 0; n < t.length; n += 1) {
    if (!$(r)) return;
    const i = rr(r, Bt(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function $y(e, t) {
  const r = un(gn(t.jsonPath));
  if (r.length === 0) {
    if (!$s(t)) return { kind: "live", location: t };
    const o = e.settledToLiveTopIndex(t.offset);
    if (!o) {
      const a = rr(
        xe(),
        Bt(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: a } };
    }
    return o.plan && o.indexWithinScope > 0 ? $y(e, { jsonPath: It([t.offset]) }) : { kind: "live", location: { ...t, offset: o.liveIndex } };
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
  const i = [n.liveIndex, ...r.slice(1)], s = yP(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: jn(t, i) };
}
function tl(e, t) {
  t.add(e.getKey()), $(e) && e.getChildren().forEach((r) => tl(r, t));
}
function Iy(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function To(e, t, r) {
  const n = (u, f) => {
    const p = Bn(e, u, f), h = Iy(e, u, f);
    return p && h ? { anchor: p, position: h.start + f } : void 0;
  }, i = (u) => {
    const f = u.end - u.start, p = Bn(e, u.key, f);
    return p ? { anchor: p, position: u.start + f } : void 0;
  };
  if (!$(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((u) => tl(u, s));
  const o = [...e.spans].reverse().find((u) => s.has(u.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  tl(t, a);
  const c = e.spans.find((u) => a.has(u.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((u) => !a.has(u.key) && Y(u.key)?.isBefore(t));
  if (l) return i(l);
  const d = e.spans[0];
  return d && !d.isSentinel ? n(d.key, 0) : void 0;
}
function Ly(e, t) {
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
function Dy(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
function bP(e, t, r, n) {
  const [i, s] = wi(r, n.viewOptions);
  if (!i || s === void 0) return;
  const o = Ly(e, i), a = o && t.find((u) => u.sentinelIndex === o.sentinelIndex);
  if (a) {
    const u = To(a.spelling, i, s);
    return u && {
      kind: "literal",
      run: a,
      anchor: u.anchor,
      atWordByte: lc(a.spelling, u.position)
    };
  }
  if (!o) {
    const u = To(e, i, s);
    return u ? {
      kind: "anchor",
      anchor: u.anchor,
      atWordByte: lc(e, u.position)
    } : void 0;
  }
  const c = Dy(o.member, i);
  if (!c) return;
  const l = K(o.member) ? Os(o.member, n.getMarker, n.viewOptions)?.out : void 0, d = l && To(l, i, s);
  return {
    kind: "preserved",
    sentinelIndex: o.sentinelIndex,
    memberIndex: o.memberIndex,
    path: c,
    offset: s,
    type: $(i) ? "element" : "text",
    noteAnchor: d && {
      anchor: d.anchor,
      atWordByte: lc(l, d.position)
    },
    isNoteOwnBytes: K(o.member) && Ry(r, o.member)
  };
}
function lc(e, t) {
  const r = e.text[t];
  return r !== void 0 && !an.test(r);
}
function Uy(e, t) {
  if (t.type !== "text") return t;
  const r = Iy(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && an.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function Fy(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function kP(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function Ky(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, sentinelMap: o } = e;
  if (!i || !s || !o) return;
  const a = ma(e.settledOnlyRuns, t, "toLive"), c = pr(i, a, {
    addressDisplayBytes: !$s(n)
  });
  if (c)
    return Fy(e, r ? Uy(i, c) : c);
}
function TP(e, t, r, n, i) {
  const s = kP(r, n), o = s && t.liveFragment?.sentinels[s.sentinelIndex]?.[s.memberIndex];
  if (!o?.isAttached()) return;
  const a = e.byFirstLiveKey.get(o.getKey());
  if (a?.kind === "note" && n.isNoteOwnBytes)
    return qy(o, i, e.viewOptions);
  if (a?.kind === "note")
    return n.noteAnchor ? Ky(
      a,
      n.noteAnchor.anchor,
      n.noteAnchor.atWordByte,
      i
    ) : void 0;
  let c = o;
  for (const l of n.path) {
    if (!$(c)) return;
    const d = c.getChildAtIndex(l);
    if (!d) return;
    c = d;
  }
  return { key: c.getKey(), offset: n.offset, type: n.type };
}
function xP(e, t, r) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = wi(t, r);
    return Ar(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (Ar(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function vP(e, t, r) {
  const { plan: n } = r, { liveFragment: i, scratchFragment: s, sentinelMap: o } = n;
  if (n.kind === "note" && r.scratchIndexes.length === 1 && Ny(r.location))
    return qy(n.liveNodes[0], r.location, t.viewOptions);
  if (!i || !s || !o) return;
  const a = jn(r.location, r.scratchIndexes), c = xP(n, a, e.tier2.viewOptions);
  if (c) return c;
  const l = n.scratch.getEditorState().read(
    () => bP(s, n.settledOnlyRuns, a, e.tier2)
  );
  if (l) {
    if (l.kind === "preserved")
      return TP(t, n, o, l, r.location);
    if (l.kind === "literal") {
      const { run: d, anchor: u } = l, f = $m(d, u.nonWsBefore, "toLiteral");
      if (f === void 0) return;
      const p = {
        nonWsBefore: d.liveBefore.full + f,
        wsRun: u.nonWsBefore === 0 ? d.liveWsBefore + u.wsRun : u.wsRun,
        attributeRunSpans: 0
      }, h = pr(i, p, {
        addressDisplayBytes: !$s(r.location)
      });
      return h ? Fy(
        n,
        l.atWordByte ? Uy(i, h) : h
      ) : void 0;
    }
    return Ky(n, l.anchor, l.atWordByte, r.location);
  }
}
function tp(e, t, r) {
  const n = $y(t, r);
  if (!n) return;
  if (n.kind === "live") return n.location;
  const i = vP(e, t, n), s = i && Y(i.key);
  return s ? fr(s, i.offset, t.viewOptions) : void 0;
}
function _P(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = tp(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = tp(e, t, r.end);
  if (i)
    return { ...r, start: n, end: i };
}
function CP(e, t) {
  const r = un(gn(t.jsonPath));
  return r.length === 0 ? t : jn(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function SP(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function rl(e, t) {
  const r = t.liveNodes[0], n = SP(e, t);
  if (n) {
    const s = jy(e, n, r, 0);
    return s && un(gn(s.jsonPath));
  }
  const i = MP(r, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function MP(e, t) {
  return !ut(e) || !Ar(e.getParent()) ? Qr(e) : [Ti(e, 0, Bt(t)).index];
}
function zy(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function EP(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function AP(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!$(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return fr(s, n, i);
  }
}
function By(e, t, r, n, i, s, o) {
  const a = Ly(r, i);
  if (a) {
    const f = r.sentinels[a.sentinelIndex];
    if (!t[a.sentinelIndex]?.some((y) => y !== void 0)) {
      const y = f[0].getParent();
      return y ? By(
        e,
        t,
        r,
        n,
        y,
        f[0].getIndexWithinParent(),
        o
      ) : void 0;
    }
    const p = Dy(a.member, i);
    if (!p) return;
    const h = t[a.sentinelIndex]?.[a.memberIndex];
    return h ? e.scratch.getEditorState().read(
      () => AP(n, h, p, s, o)
    ) : void 0;
  }
  const c = To(r, i, EP(e, i, s));
  if (!c) return;
  const l = Im(e.settledOnlyRuns, c.anchor);
  if (l) {
    const { within: f } = l;
    return f ? e.scratch.getEditorState().read(() => {
      const p = mP(l.run.spelling, f), h = p && Y(p.key);
      return h ? fr(h, p.offset, o) : void 0;
    }) : void 0;
  }
  const d = ma(e.settledOnlyRuns, c.anchor, "toSettled"), u = !$s(
    fr(i, s, o)
  );
  return e.scratch.getEditorState().read(() => {
    const f = pr(n, d, { addressDisplayBytes: u }), p = f && Y(f.key);
    return p ? fr(p, f.offset, o) : void 0;
  });
}
function jy(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, sentinelMap: o } = t;
  if (t.kind === "note") {
    const l = fr(r, n, e.viewOptions);
    if (Ry(l, t.liveNodes[0])) {
      const d = rl(e, t);
      return d && jn(l, d);
    }
  }
  if (!i || !s || !o) return;
  const a = By(
    t,
    o,
    i,
    s,
    r,
    n,
    e.viewOptions
  );
  if (!a) return;
  const c = zy(
    t,
    rl(e, t),
    un(gn(a.jsonPath))
  );
  return c && jn(a, c);
}
function rp(e, t, r) {
  const n = e.planContaining(t);
  if (n) return jy(e, n, t, r);
  const i = Ar(t) && r >= t.getChildrenSize() && t.getLastChild(), s = i ? e.planContaining(i) : void 0;
  return s ? PP(e, s) : CP(e, fr(t, r, e.viewOptions));
}
function PP(e, t) {
  const r = t.scratch.getEditorState().read(() => {
    const i = xe();
    return fr(i, i.getChildrenSize(), e.viewOptions);
  }), n = zy(
    t,
    rl(e, t),
    un(gn(r.jsonPath))
  );
  return n && jn(r, n);
}
function wP(e) {
  const t = Yl(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = R();
  if (!O(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = rp(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = rp(e, o.getNode(), o.offset);
  if (a)
    return { start: s, end: a };
}
function Vy(e, t, r) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && ut(i) ? D1(i, r.getMarker, r.viewOptions) : xu(t, r.getMarker, r.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(Ce);
    return i && Ns(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(K);
  return n && Os(n, r.getMarker, r.viewOptions)?.out;
}
function OP(e, t) {
  const r = Ap({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = xe();
        t.forEach((i) => n.append(Ii(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const np = "\0";
function Wy(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), $(r) && Wy(r.getChildren(), t);
  return t;
}
function NP(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(np), a = Wy(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(np);
}
function wu(e, t = []) {
  for (const r of e)
    K(r) && t.push(r), $(r) && wu(r.getChildren(), t);
  return t;
}
function Ca(e, t, r, n, i, s, o) {
  const a = OP(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l, settledSide: d } = a.getEditorState().read(() => {
    const h = Vy(e, xe().getChildren(), o.tier2);
    return {
      settledCount: rr(
        xe(),
        Bt(o.tier2.viewOptions)
      ).length,
      scratchFragment: h,
      settledSide: h && Nm(h)
    };
  }), u = { kind: e, liveNodes: t, liveCut: n, scratch: a, scratchFragment: l, settledCount: c };
  if ((r?.sentinels.length ?? 0) === 0 && (d?.runs.length ?? 0) === 0)
    return { ...u, liveFragment: r, sentinelMap: [], settledOnlyRuns: [] };
  const f = r && s && Xm(r, s.live), p = f && qm(Rm(f, s.live), d ?? { runs: [], bytes: "" });
  return p ? { ...u, liveFragment: f, ...p } : { ...u, liveFragment: r, sentinelMap: void 0, settledOnlyRuns: [] };
}
function Ou(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = Sy(e, t);
  return r ? {
    liveFragment: _u(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function Nu(e, t) {
  for (const r of e.noteGlyphRenames.values())
    Ay(r, t);
}
function RP(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = Ou(t, i), a = Ys(e), c = /* @__PURE__ */ new Map();
  if (Xs([e], [a], c), Nu(r, c), !_a(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && Qs(t, c, r.huskKeys);
  return Ca("note", [e], s, o, [a], l, n);
}
function qP(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = Ou(t, i), a = e.map(Ys), c = /* @__PURE__ */ new Map();
  Xs(e, a, c), Nu(r, c), wu(e).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => _a(u, c, n.tier2, r.huskKeys, i)
  );
  const l = My(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const d = t && Qs(t, c, r.huskKeys);
  return Ca("para", e, s, o, l, d, n);
}
function $P(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = Ou(t, n), o = Py(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...Wi(e)];
  return Ca("chapter", a, i, s, o, void 0, r);
}
function IP(e, t, r, n, i, s) {
  const o = Ys(e), a = /* @__PURE__ */ new Map();
  Xs([e], [o], a), Nu(n, a), wu([e]).filter((d) => n.noteScopes.has(d.getKey())).forEach(
    (d) => _a(d, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const d of r) {
    const u = a.get(d.getKey());
    if (!u) continue;
    const f = u.siblings.indexOf(u.node);
    f < 0 || (Oy(u.siblings, f), c.add(d.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Qs(t, a, c);
  return Ca("para", [e], t, void 0, [o], l, i);
}
function LP(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function ip(e) {
  return {
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (t) => t,
    settledToLiveTopIndex: (t) => ({ liveIndex: t, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e
  };
}
function sp(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function DP(e, t) {
  const r = rr(xe(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = sp(r[o]), c = a && e.get(a.getKey());
    if (!c) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((u) => u.getKey()));
    let d = 0;
    for (; o + d < r.length; ) {
      const u = sp(r[o + d]);
      if (!u || !l.has(u.getKey())) break;
      d += 1;
    }
    for (let u = 0; u < d; u += 1)
      n[o + u] = s;
    for (let u = 0; u < c.settledCount; u += 1)
      i.push({ liveIndex: o, plan: c, indexWithinScope: u });
    s += c.settledCount, o += d;
  }
  return { liveToSettled: n, settledToLive: i };
}
function op(e) {
  const t = Cy(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), ip(e.tier2.viewOptions);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = wy(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const h = f.liveNodes[0].getKey();
    n.set(h, f), f.liveNodes.forEach((y) => i.set(y.getKey(), f)), p && f.liveNodes.forEach((y) => s.set(y.getKey(), f));
  }, c = (f, p, h, y) => {
    o.add(f);
    const m = Vy(p, h, e.tier2), T = NP(
      p,
      h,
      m?.text ?? "",
      e.tier2,
      t
    ), _ = e.cache.entries.get(f);
    if (_?.signature === T) return _.plan;
    const E = y(m);
    return E ? e.cache.entries.set(f, { signature: T, plan: E }) : e.cache.entries.delete(f), E;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => RP(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => qP(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...Wi(f)],
        (p) => $P(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!(re(p) || ut(p)) || LP(f, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(f), l.set(p.getKey(), h);
  }
  for (const [f, { para: p, husks: h }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (y) => IP(p, y, h, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0) return ip(e.tier2.viewOptions);
  const { liveToSettled: d, settledToLive: u } = DP(
    s,
    Bt(e.tier2.viewOptions)
  );
  return {
    byFirstLiveKey: n,
    liveToSettledTopIndex: (f) => d[f] ?? f,
    settledToLiveTopIndex: (f) => u[f],
    planContaining: (f) => {
      for (let p = f; p; p = p.getParent()) {
        const h = i.get(p.getKey());
        if (h) return h;
      }
    },
    viewOptions: e.tier2.viewOptions
  };
}
function UP({
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
    i.scrRef = e, i.onScrRefChange = t, Go(s, e) || FP(i, r, e);
  }, [r, e, t]), B(
    () => r.registerMutationListener(
      Ft,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = nl(r);
        ap(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: ho(s) === ho(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), B(() => {
    const i = (a) => a.read(
      () => new Set(
        xe().getChildren().filter(Fe).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (nl(r) || ap(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: ho(a) === ho(c)
      }));
    };
    return et(
      ...[Pt, yr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), B(
    () => r.registerCommand(
      hr,
      () => {
        const i = n.current;
        return i.phase === "idle" && VP(i, zP()), !1;
      },
      Mt
    ),
    [r]
  ), B(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(hr, void 0));
    };
    return et(
      r.registerMutationListener(Ct, i),
      r.registerMutationListener(ht, i)
    );
  }, [r]), B(() => {
    const i = () => JP(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function FP(e, t, r) {
  if (KP(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = nl(t);
  (!n || n === r.book) && t.update(() => Hy(t, r.chapterNum, r.verseNum));
}
function KP(e, t) {
  const r = e.pendingEchoes.findIndex((n) => Go(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function zP() {
  const e = R(), t = $l(e);
  if (!t) return;
  const r = Ru(), n = Gh(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Kl(t, e), { verseNum: o, verse: a } = Pv(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function nl(e) {
  return e.getEditorState().read(() => Ru()?.getCode() || void 0);
}
function Ru() {
  return xe().getChildren().find(st);
}
function ap(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && uc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || uc(e, t), e.phase = "navigating") : i && uc(e, t), r && r !== e.scrRef.book && Yy(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function uc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Hy(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function Hy(e, t, r) {
  const n = R()?.clone();
  BP(t, r);
  const i = R();
  i && !(n && i.is(n)) && e.dispatchCommand(yl, void 0);
}
function BP(e, t) {
  const r = $l(R()), n = zl(r)?.getNumber(), i = Gh(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (eg(n) ? Jy(t, n) : parseInt(n, 10) === t))
    return;
  const o = xe().getChildren(), a = Hh(o, e);
  if (!a) return;
  const c = Ux(o, a), l = Nx(c, !0);
  Dx(c, l);
  let d;
  try {
    d = Cv(c, t);
  } catch {
    return;
  }
  d && (re(d) ? !C(d.getFirstChild()) && Bi(d) || Zt(d, 0) : jP(d));
}
function jP(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || me(n)) {
    Zt(t, r);
    return;
  }
  const i = ca(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (C(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = $(n) && !K(n) ? Gy(n) : void 0;
  s ? s.select(0, 0) : Zt(t, r);
}
function Gy(e) {
  const t = e.getFirstChild();
  if (C(t)) return t;
  if ($(t) && !K(t)) return Gy(t);
}
function ho(e) {
  return e.read(() => {
    const t = xe().getChildren().find(Fe);
    return `${Ru()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function VP(e, t) {
  e.phase !== "navigating" && t && (WP(t, e.scrRef) || Yy(e, HP(t, e.scrRef)));
}
function WP(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Jy(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Jy(e, t) {
  try {
    return Il(e, t);
  } catch {
    return !1;
  }
}
function HP(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const GP = 8;
function Yy(e, t) {
  return Go(t, e.scrRef) || e.pendingEchoes.some((r) => Go(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > GP && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Go(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function JP(e) {
  e.phase = "idle";
}
function YP(e) {
  return st(e) ? `${e.__code}` : Ce(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : Ws(e) ? `${e.__marker} "${e.__number}"` : nr(e) ? `${e.__caller}` : Qn(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : re(e) ? `${e.__marker}` : C(e) ? `"${e.__text}"${XP(e)}` : ke(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : we(e) ? `${e.__marker} "${e.__number}"` : "";
}
function XP(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ls]) : "";
}
function QP() {
  const [e] = ue();
  return /* @__PURE__ */ v(
    Qb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: YP,
      editor: e
    }
  );
}
const Xy = mp(null), cp = 4;
function ZP({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Q(null), s = yp(Xy);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return B(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ v("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function e0({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = he(), [s, o] = he(), a = fe(
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
  }, l = De(() => ({ registerItem: a }), [a]);
  return B(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ v(Xy.Provider, { value: l, children: /* @__PURE__ */ v("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function t0({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Q(null), c = Q(null), [l, d] = he(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return B(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: y } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + cp}px`, p.style.left = `${Math.min(y, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), B(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (h) => {
        const y = h.target;
        o && a.current && a.current.contains(y) || f.contains(y) || d(!1);
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
          const { top: y } = p.getBoundingClientRect(), m = y + p.offsetHeight + cp;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Me(An, { children: [
    /* @__PURE__ */ Me(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => d(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ v("span", { className: i }),
          t && /* @__PURE__ */ v("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ v("i", { className: "chevron-down" })
        ]
      }
    ),
    l && Mn(
      /* @__PURE__ */ v(e0, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const il = {
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
}, sl = {
  ...il,
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
function r0({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ v(
    t0,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + n0(t),
      buttonLabel: i0(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(il).map((n) => /* @__PURE__ */ Me(
        ZP,
        {
          className: "item block-marker " + s0(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ v("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ v("span", { className: "text usfm_" + n, children: il[n] })
          ]
        },
        n
      ))
    }
  );
}
function n0(e) {
  return e && e in sl ? e : "ban";
}
function i0(e) {
  return e && e in sl ? sl[e] : "No Style";
}
function s0(e) {
  return e ? "active dropdown-item-active" : "";
}
function lp() {
  return /* @__PURE__ */ v("div", { className: "divider" });
}
const o0 = Vn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ue(), [o, a] = he(s), [c, l] = he(), [d, u] = he(!1), [f, p] = he(!1), h = fe(
    ({
      canUndo: y,
      canRedo: m,
      blockMarker: T,
      contextMarker: _
    }) => {
      u(y), p(m), l(T), n?.({
        canUndo: y,
        canRedo: m,
        blockMarker: T,
        contextMarker: _
      });
    },
    [n]
  );
  return B(() => s.registerCommand(
    hr,
    (y, m) => (a(m), !1),
    Sr
  ), [s]), /* @__PURE__ */ Me(An, { children: [
    /* @__PURE__ */ v(Jg, { onStateChange: h }),
    /* @__PURE__ */ Me("div", { className: "toolbar", children: [
      /* @__PURE__ */ v(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(wp, void 0);
          },
          title: _o ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ v("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ v(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(Op, void 0);
          },
          title: _o ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ v("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ v(lp, {}),
      o === s && /* @__PURE__ */ Me(An, { children: [
        /* @__PURE__ */ v(
          r0,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ v(lp, {})
      ] }),
      /* @__PURE__ */ v("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), a0 = pa(), c0 = {}, l0 = {};
function u0() {
  return /* @__PURE__ */ v("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function up(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
const Qy = Vn(function({
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
  const u = Q(null), f = Q(null), p = Q(null), h = Q(t), y = Q(!1), m = Q(void 0), T = Q(void 0), _ = Q(void 0), E = Q({ entries: /* @__PURE__ */ new Map() }), N = Q(0), A = Q(!0), S = Q(void 0), M = Q(!1), [q, J] = he(t), [H, ne] = he(0), [ce, le] = he(), {
    isReadonly: ye = !1,
    structureProtectionMode: qe = "off",
    hasExternalUI: Z = !1,
    hasSpellCheck: z = !1,
    textDirection: ie = "ltr",
    markerMenuTrigger: $e = "\\",
    view: at,
    nodes: jt,
    debug: pe = !1,
    contextMenu: Vt,
    styleInfo: wt,
    markerSettleDelayMs: Sa
  } = a ?? l0, ir = at ?? a0, ti = Ps(ir) && (ir.markerMode !== "hidden" || !ir.hasSpacing || ir.hasGutterParaMarkers || ir.hasActiveTextFocusBox) ? {
    ...ir,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ir, Hi = Q(ti);
  Ot(Hi.current, ti) || (Hi.current = ti);
  const se = Hi.current, ft = De(() => jt ?? c0, [jt]), Zs = De(() => Vt, [Vt]), _e = De(
    () => gv(wt ?? $o),
    [wt]
  ), kr = Q(c);
  Ot(kr.current, c) || (kr.current = c);
  const X = kr.current, Xe = Ps(se), be = ye || Xe, Fr = ti !== ir;
  B(() => {
    Xe && !ye && X?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Fr && X?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [Xe, ye, Fr, X]);
  const Kr = Q(null), sr = De(() => {
    if (se.markerMode !== "editable") return;
    const w = wt ?? $o;
    return {
      getContext: () => Kr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (U) => _1(
        w,
        U,
        ft.extraValidMarkers
      ),
      getEnterItems: (U) => C1(
        w,
        U,
        ft.extraValidMarkers
      ),
      apply: (U, j) => {
        const W = Kr.current;
        W && (j.trigger === "enter" ? W.splitParagraphWithMarker(U.marker) : W.applyMarkerMenuSelection(U, j));
      },
      commitTypedCloser: (U) => {
        Kr.current?.commitTypedCloser(U);
      }
    };
  }, [se, wt, ft.extraValidMarkers]), ri = (w) => {
    M.current || (M.current = !0, kr.current?.warn(
      `Editor: cannot ${w} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, ni = (w) => {
    if (Xe)
      throw new Error(
        `Cannot ${w} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, zr = (w) => {
    if (ni(w), be) throw new Error(`Cannot ${w} in readonly mode`);
  }, mn = De(
    () => [Ye, ...Xe ? Y_ : nu],
    [Xe]
  ), or = De(
    () => ({
      namespace: "platformEditor",
      theme: { ...Sm, showCharMarkerTitles: se.showCharMarkerTitles },
      editable: !be,
      editorState: void 0,
      // Handling of errors during update
      onError(w) {
        throw w;
      },
      nodes: mn
    }),
    [be, mn, se.showCharMarkerTitles]
  );
  co.initialize(X);
  function mt(w) {
    if (w !== void 0 && !VE(w, ft.extraValidMarkers))
      throw new Error(`Unsupported character marker '${w}'`);
  }
  const Wt = fe(() => {
    const w = u.current;
    if (!w) return h.current;
    const U = () => {
      if (!y.current) return;
      const xr = co.deserializeEditorState(w.getEditorState(), se);
      xr && (h.current = xr, y.current = !1);
    }, j = Va(w), W = T.current;
    if ((!j || j.size === 0) && !W)
      return U(), h.current;
    const de = w.getEditorState(), We = de.toJSON(), Je = de.read(
      () => dP(
        We,
        j ?? /* @__PURE__ */ new Set(),
        { viewOptions: se, getMarker: _e, logger: X },
        W,
        _.current
      )
    );
    return Je || (U(), h.current);
  }, [se, _e, X]), Ht = fe(() => {
    const w = u.current;
    if (!w) return;
    const U = {
      pendedKeys: Va(w) ?? /* @__PURE__ */ new Set(),
      transientInput: T.current,
      lastKnownCaret: _.current,
      tier2: { viewOptions: se, getMarker: _e, logger: X },
      nodes: mn,
      cache: E.current
    };
    return po(U) && U.cache.entries.clear(), U;
  }, [se, _e, X, mn]), Br = fe(
    (w) => {
      const U = u.current, j = Ht();
      if (!(!U || !j))
        return po(j) ? w : U.getEditorState().read(() => {
          const W = op(j);
          return _P(j, W, w);
        });
    },
    [Ht]
  );
  B(() => (A.current = !0, () => {
    A.current = !1;
  }), []);
  const jr = fe(
    (w, U) => w.read(() => {
      const j = Ht(), W = j && wP(op(j));
      return !W && !Xe && O(R()) && X?.warn(
        `${U} refused: the selection could not be expressed against the document the host is reading`
      ), W;
    }),
    [Ht, Xe, X]
  ), Gi = fe(
    (w) => {
      if (!i) return;
      const U = u.current, j = Ht();
      N.current += 1;
      const W = N.current;
      if (!U || !j || po(j)) {
        i(w);
        return;
      }
      queueMicrotask(() => {
        if (!A.current || W !== N.current || u.current !== U) return;
        const de = jr(U, "onSelectionChange");
        W === N.current && i(de);
      });
    },
    [i, Ht, jr]
  ), Tr = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const w = u.current?.getRootElement();
      return !!w && w.ownerDocument.activeElement === w;
    },
    undo() {
      u.current?.dispatchCommand(wp, void 0);
    },
    redo() {
      u.current?.dispatchCommand(Op, void 0);
    },
    cut() {
      zr("cut"), u.current?.dispatchCommand(On, null);
    },
    copy() {
      u.current?.dispatchCommand(ea, null);
    },
    paste() {
      zr("paste"), u.current && au(u.current);
    },
    pastePlainText() {
      zr("paste as plain text"), u.current && cu(u.current);
    },
    getUsj() {
      return Wt();
    },
    commitPendingMarkerEdits() {
      u.current?.update(
        () => {
          u.current?.dispatchCommand(ky, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(w) {
      if (!w) {
        T.current = void 0;
        return;
      }
      const U = u.current?.getEditorState().read(() => {
        const j = R();
        return O(j) && j.isCollapsed() ? j.focus.key : void 0;
      });
      T.current = { input: w, nodeKey: U ?? _.current?.key };
    },
    setUsj(w) {
      if (!Ot(h.current, w)) {
        h.current = w, T.current = void 0;
        const U = Ot(q, w);
        J(w), U && ne((j) => j + 1);
      }
    },
    applyUpdate(w, U = "remote") {
      if (Xe && U === "remote") {
        kr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      ni("apply an update"), u.current?.update(
        () => {
          U === "remote" && Nn(vi), bC(w, se, ft, X);
        },
        { discrete: !0 }
      );
      const j = u.current?.getEditorState();
      if (!j) return;
      const W = co.deserializeEditorState(j, se);
      if (W) {
        const de = !Ot(h.current, W);
        if (de && (h.current = W), de || !Ot(q, W)) {
          const We = Od(w, j, "apply");
          S.current = W, s?.(W, w, U, We);
        }
      }
    },
    replaceEmbedUpdate(w, U) {
      const j = u.current?.read(() => Kv(w, U));
      j ? this.applyUpdate(j) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${w}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (Xe) {
        ri("get the selection");
        return;
      }
      const w = u.current;
      if (!w) return;
      w.read(() => {
      });
      const U = Ht();
      return !U || po(U) ? w.read(() => Yl(se)) : jr(w, "getSelection");
    },
    setSelection(w) {
      if (Xe) {
        ri("set the selection");
        return;
      }
      const U = Br(w);
      if (!U) {
        X?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      u.current?.update(() => {
        const j = Jl(U, se);
        j !== void 0 && (Pn(j), (!Li().isEditable() || up(j.anchor) && up(j.focus)) && u.current?.dispatchCommand(hr, void 0));
      });
    },
    setAnnotation(w, U, j, W, de) {
      if (Xe) {
        ri("set an annotation");
        return;
      }
      let We, Je, xr, Ji;
      typeof W == "function" || W === void 0 ? (We = W, Je = de) : (We = W.onClick, Je = W.onRemove, xr = W.onMouseEnter, Ji = W.onMouseLeave);
      const Yi = Br(w);
      if (!Yi) {
        X?.warn(
          `setAnnotation refused for ${U} "${j}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        Yi,
        od(U),
        j,
        We,
        Je,
        xr,
        Ji
      );
    },
    removeAnnotation(w, U) {
      f.current?.removeAnnotation(od(w), U);
    },
    formatPara(w) {
      zr("format a paragraph"), u.current?.update(() => {
        const U = R();
        if (!O(U)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${w}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        tk(U, () => _s(w));
        const j = R();
        if (!O(j)) return;
        const W = /* @__PURE__ */ new Set();
        j.getNodes().forEach((de) => {
          const We = de.getTopLevelElement();
          re(We) && W.add(We);
        }), W.forEach((de) => iy(de, w, se));
      });
    },
    getElementByKey(w) {
      return u.current?.read(
        () => u.current?.getElementByKey(w) ?? void 0
      );
    },
    removeCharacterMarker(w) {
      if (be) throw new Error("Cannot remove character marker in readonly mode");
      mt(w);
      let U = !1;
      return u.current?.update(
        () => {
          const j = R();
          O(j) && (U = km(j, w, se));
        },
        { discrete: !0 }
      ), U;
    },
    replaceCharacterMarker(w, U) {
      if (be) throw new Error("Cannot replace character marker in readonly mode");
      mt(w), mt(U);
      let j = !1;
      return u.current?.update(
        () => {
          const W = R();
          O(W) && (j = n1(W, w, U));
        },
        { discrete: !0 }
      ), j;
    },
    extendCharacterMarker(w, U) {
      if (be) throw new Error("Cannot extend character marker in readonly mode");
      mt(w), U?.forEach(
        (W) => mt(W)
      );
      let j = !1;
      return u.current?.update(
        () => {
          const W = R();
          O(W) && (j = i1(
            W,
            w,
            U,
            se
          ));
        },
        { discrete: !0 }
      ), j;
    },
    insertMarker(w) {
      if (be) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!Bc(w, ft.extraValidMarkers))
        throw new Error(`Unsupported marker '${w}'`);
      const U = jc(
        w,
        m,
        se,
        ft,
        X,
        void 0,
        wt
      );
      return U.action({ editor: u.current, reference: r }), U.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!ye)
        return u.current?.getEditorState().read(() => bA());
    },
    applyMarkerMenuSelection(w, U) {
      if (ye) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (w.kind !== "closeTag" && !Bc(w.marker, ft.extraValidMarkers))
        throw new Error(`Unsupported marker '${w.marker}'`);
      let j;
      return u.current.update(() => {
        j = _A(w, U, r, {
          expandedNoteKeyRef: m,
          viewOptions: se,
          nodeOptions: ft,
          logger: c,
          styleInfo: wt
        });
      }), j;
    },
    splitParagraphWithMarker(w) {
      if (ye) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        uy(w, se);
      });
    },
    commitTypedMarker(w, U) {
      if (ye) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let j = !1;
      return u.current.update(() => {
        j = vA(w, U), j || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), j;
    },
    commitTypedCloser(w) {
      if (ye) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let U = !1;
      return u.current.update(() => {
        U = ly(w), U || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), U;
    },
    insertNote(w, U, j) {
      zr("insert a note");
      const W = j && Br(j);
      if (j && !W) {
        X?.warn(
          `insertNote refused for \\${w}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      u.current?.update(() => {
        const de = Pg(
          w,
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
    selectNote(w) {
      u.current?.update(() => {
        const U = jd(w);
        U && (H_(U, se), U.getIsCollapsed() || (m.current = U.getKey()));
      });
    },
    getNoteOps(w) {
      return u.current?.read(() => {
        const U = jd(w);
        if (U)
          return jl(U);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Kr.current = Tr, al(d, () => Tr), B(() => {
    const w = u.current;
    if (w)
      return w.registerUpdateListener(({ editorState: U }) => {
        U.read(() => {
          const j = R();
          if (!O(j) || !j.isCollapsed()) return;
          const W = j.focus.getNode();
          C(W) && (_.current = { key: W.getKey(), offset: j.focus.offset });
        });
      });
  }, []), B(() => {
    const w = u.current;
    if (w)
      return w.registerUpdateListener(({ tags: U, dirtyElements: j, dirtyLeaves: W }) => {
        j.size === 0 && W.size === 0 || U.has(ml) || U.has(vi) || Zu.some((de) => U.has(de)) && (y.current = !0);
      });
  }, []);
  const ii = fe(
    (w, U, j, W) => {
      if (Xe) return;
      const de = co.deserializeEditorState(w, se);
      if (de) {
        const We = !Ot(h.current, de);
        if (We && (h.current = de), We || !Ot(q, de)) {
          const Je = Od(W, w);
          S.current = de, s?.(de, W, "local", Je);
        }
      }
    },
    [q, s, se, Xe]
  );
  B(() => {
    const w = u.current;
    if (!(!w || !s))
      return w.registerUpdateListener(({ tags: U, dirtyElements: j, dirtyLeaves: W }) => {
        !U.has(pl) && (j.size === 0 && W.size === 0 || U.has(vi) || !Va(w)?.size) || queueMicrotask(() => {
          const de = Wt();
          !de || Ot(S.current, de) || (S.current = de, s(de, void 0, "local", void 0));
        });
      });
  }, [s, Wt]);
  const yn = fe(
    (w) => {
      le(w.contextMarker), o?.(w);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Me(Rp, { initialConfig: or, children: [
      /* @__PURE__ */ v(yS, { isEditable: !be }),
      /* @__PURE__ */ Me("div", { className: "editor-container", children: [
        Z ? /* @__PURE__ */ v(Jg, { onStateChange: yn }) : /* @__PURE__ */ v(
          "div",
          {
            className: "editor-toolbar-container" + (be ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ v(
              o0,
              {
                ref: p,
                editorRef: Kr,
                isReadonly: be,
                onStateChange: yn
              }
            )
          }
        ),
        /* @__PURE__ */ Me("div", { className: "editor-inner", children: [
          /* @__PURE__ */ v($p, { editorRef: u }),
          /* @__PURE__ */ v(
            ek,
            {
              contentEditable: /* @__PURE__ */ v(
                qp,
                {
                  className: `editor-input usfm ${__(se).join(" ")}${se.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${se.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: z
                }
              ),
              placeholder: /* @__PURE__ */ v(u0, {}),
              ErrorBoundary: Ip
            }
          ),
          Z && /* @__PURE__ */ v(mS, {}),
          /* @__PURE__ */ v(Lp, {}),
          r && n && /* @__PURE__ */ v(UP, { scrRef: r, onScrRefChange: n }),
          r && !Z && /* @__PURE__ */ v(
            KM,
            {
              trigger: $e,
              scrRef: r,
              contextMarker: ce,
              getMarkerAction: (w) => jc(
                w,
                m,
                se,
                ft,
                X,
                void 0,
                wt
              ),
              editableHarness: sr
            }
          ),
          /* @__PURE__ */ v(
            TS,
            {
              scripture: q,
              scriptureRef: h,
              nodeOptions: ft,
              editorAdaptor: on,
              viewOptions: se,
              logger: X
            },
            H
          ),
          /* @__PURE__ */ v(FS, { onChange: Gi, viewOptions: se }),
          /* @__PURE__ */ v(
            mC,
            {
              onChange: ii,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Zu
            }
          ),
          /* @__PURE__ */ v(l1, { viewOptions: se }),
          /* @__PURE__ */ v(hC, { ref: f, logger: X, viewOptions: se }),
          /* @__PURE__ */ v(jC, { viewOptions: se }),
          /* @__PURE__ */ v(iS, {}),
          /* @__PURE__ */ v(uS, {}),
          se?.markerMode !== "editable" && /* @__PURE__ */ v(dS, { logger: X }),
          /* @__PURE__ */ v(gS, { options: Zs }),
          /* @__PURE__ */ v(kS, {}),
          /* @__PURE__ */ v(CA, {}),
          /* @__PURE__ */ v(
            ZA,
            {
              viewOptions: se,
              getMarker: _e,
              logger: X,
              markerSettleDelayMs: Sa
            }
          ),
          /* @__PURE__ */ v(
            sP,
            {
              styleInfo: wt,
              viewOptions: se,
              logger: X
            }
          ),
          /* @__PURE__ */ v(
            xS,
            {
              expandedNoteKeyRef: m,
              nodeOptions: ft,
              viewOptions: se,
              logger: X
            }
          ),
          /* @__PURE__ */ v(US, {}),
          /* @__PURE__ */ v(UC, {}),
          /* @__PURE__ */ v($C, {}),
          /* @__PURE__ */ v(fP, { viewOptions: se, logger: X }),
          /* @__PURE__ */ v(KS, {}),
          /* @__PURE__ */ v(AM, { structureProtectionMode: qe }),
          /* @__PURE__ */ v(PM, { textDirection: ie }),
          /* @__PURE__ */ v(OM, {}),
          /* @__PURE__ */ v(UM, {}),
          l
        ] }),
        pe && /* @__PURE__ */ v(QP, {})
      ] })
    ] }, se.verseLayout ?? "inline")
  );
}), mw = Vn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ v(Qy, { ref: r, ...i });
});
function Zy() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Jo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Zy() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function eb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Zy() : r,
    quote: e,
    type: "thread"
  };
}
function dp(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function d0(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function dc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class f0 {
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
    this._comments = t, dc(this);
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
          const c = dp(a);
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
    this._comments = i, dc(this);
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
          const c = dp(a);
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
    return this._comments = n, dc(this), t.type === "comment" ? {
      index: s,
      markedComment: d0(t)
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
    return t !== null ? t.doc.get("comments", Yu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Xu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Yu();
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
      mk,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Mt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof yk) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const h = p.insert, y = p.retain, m = p.delete, T = d.parent, _ = d === r ? void 0 : T instanceof Xu && this._comments.find((E) => E.id === T.get("id"));
              if (Array.isArray(h)) {
                const E = f;
                h.slice().reverse().forEach((N) => {
                  const A = N.get("id"), M = N.get("type") === "thread" ? eb(
                    N.get("quote"),
                    N.get("comments").toArray().map(
                      (q) => Jo(
                        q.get("content"),
                        q.get("author"),
                        q.get("id"),
                        q.get("timeStamp"),
                        q.get("deleted")
                      )
                    ),
                    A
                  ) : Jo(
                    N.get("content"),
                    N.get("author"),
                    A,
                    N.get("timeStamp"),
                    N.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(M, _, E);
                  });
                });
              } else if (typeof y == "number")
                f += y;
              else if (typeof m == "number")
                for (let E = 0; E < m; E++) {
                  const N = _ === void 0 || _ === !1 ? this._comments[f] : _.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(N, _);
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
function p0(e) {
  const [t, r] = he(e.getComments());
  return B(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function h0({
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
      const d = l.target;
      i.current !== null && !i.current.contains(d) && n && e();
    }, c = i.current;
    return c !== null && (s = c.parentElement, s !== null && s.addEventListener("click", a)), window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o), s !== null && s?.removeEventListener("click", a);
    };
  }, [n, e]), /* @__PURE__ */ v("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Me("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ v("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ v(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ v("div", { className: "Modal__content", children: t })
  ] }) });
}
function g0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Mn(
    /* @__PURE__ */ v(h0, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function tb() {
  const [e, t] = he(null), r = fe(() => {
    t(null);
  }, []), n = De(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ v(g0, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const m0 = {
  ...Sm,
  paragraph: "CommentEditorTheme__paragraph"
};
function y0(...e) {
  return e.filter(Boolean).join(" ");
}
function ln({
  "data-test-id": e,
  children: t,
  className: r,
  onClick: n,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ v(
    "button",
    {
      disabled: i,
      className: y0(
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
function b0({
  className: e
}) {
  return /* @__PURE__ */ v(qp, { className: e || "ContentEditable__root" });
}
function k0({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ v("div", { className: t || "Placeholder__root", children: e });
}
const fp = cl("INSERT_INLINE_COMMAND");
function T0({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Q(null), s = fe(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return B(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), qs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ v("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ v("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ v("i", { className: "icon add-comment" }) }) });
}
function x0({ onEscape: e }) {
  const [t] = ue();
  return B(() => t.registerCommand(
    Pp,
    (r) => e(r),
    xi
  ), [t, e]), null;
}
function rb({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ v(Rp, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: m0
  }, children: /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ v(
      pk,
      {
        contentEditable: /* @__PURE__ */ v(b0, { className: e }),
        placeholder: /* @__PURE__ */ v(k0, { children: s }),
        ErrorBoundary: Ip
      }
    ),
    /* @__PURE__ */ v(fk, { onChange: n }),
    /* @__PURE__ */ v(Lp, {}),
    t !== !1 && /* @__PURE__ */ v(lk, {}),
    /* @__PURE__ */ v(x0, { onEscape: r }),
    /* @__PURE__ */ v(uk, {}),
    i !== void 0 && /* @__PURE__ */ v($p, { editorRef: i })
  ] }) });
}
function nb(e, t) {
  return fe(
    (r, n) => {
      r.read(() => {
        e(hk()), t(!gk(n.isComposing(), !0));
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
  const [n, i] = he(""), [s, o] = he(!1), a = Q(null), c = De(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Q(null), d = sb(), u = fe(() => {
    e.getEditorState().read(() => {
      const y = R();
      if (O(y)) {
        l.current = y.clone();
        const m = y.anchor, T = y.focus, _ = rk(
          e,
          m.getNode(),
          m.offset,
          T.getNode(),
          T.offset
        ), E = a.current;
        if (_ !== null && E !== null) {
          const { left: N, bottom: A, width: S } = _.getBoundingClientRect(), M = nk(e, _);
          let q = M.length === 1 ? N + S / 2 - 125 : N - 125;
          q < 10 && (q = 10), E.style.left = `${q}px`, E.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const J = M.length, { container: H } = c, ne = c.elements, ce = ne.length;
          for (let le = 0; le < J; le++) {
            const ye = M[le];
            let qe = ne[le];
            qe === void 0 && (qe = document.createElement("span"), ne[le] = qe, H.appendChild(qe));
            const z = `position:absolute;top:${ye.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${ye.left}px;height:${ye.height}px;width:${ye.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            qe.style.cssText = z;
          }
          for (let le = ce - 1; le >= J; le--) {
            const ye = ne[le];
            H.removeChild(ye), ne.pop();
          }
        }
      }
    });
  }, [e, c]);
  qs(() => {
    u();
    const y = c.container, m = document.body;
    return m !== null ? (m.appendChild(y), () => {
      m.removeChild(y);
    }) : () => {
    };
  }, [c.container, u]), B(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (y) => (y.preventDefault(), t(), !0), p = () => {
    if (s) {
      let y = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      y.length > 100 && (y = y.slice(0, 99) + "…"), r(
        eb(y, [Jo(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = nb(i, o);
  return /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ v(
      rb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ v(ln, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ v(
        ln,
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
function _0({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Q(null), c = sb(), l = nb(i, o);
  return /* @__PURE__ */ Me(An, { children: [
    /* @__PURE__ */ v(
      rb,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ v(
      ln,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Jo(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(Hb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ v("i", { className: "send" })
      }
    )
  ] });
}
function ib({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Me(An, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Me("div", { className: "Modal__content", children: [
      /* @__PURE__ */ v(
        ln,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ v(
        ln,
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
function pp({
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = tb();
  return /* @__PURE__ */ Me("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ v("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Me("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ v("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Me(An, { children: [
      /* @__PURE__ */ v(
        ln,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ v(
              ib,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ v("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function C0({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ue(), [a, c] = he(0), [l, d] = tb(), u = De(
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
  }, [a]), /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Me(
      "li",
      {
        onClick: () => {
          const y = s.get(p);
          if (y !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const m = document.activeElement;
            o.update(
              () => {
                const T = Array.from(y)[0], _ = Y(T);
                ke(_) && _.selectStart();
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
              /* @__PURE__ */ v("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ v(
              ln,
              {
                onClick: () => {
                  d("Delete Thread", (y) => /* @__PURE__ */ v(
                    ib,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: y
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ v("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((y) => /* @__PURE__ */ v(
            pp,
            {
              comment: y,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            y.id
          )) }),
          /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ v(
            _0,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ v(
      pp,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function S0({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Q(null), o = r.length === 0;
  return /* @__PURE__ */ Me("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ v("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ v(
      C0,
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
function sb() {
  const e = Dp(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function M0({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Dp(), [a] = ue(), c = De(() => {
    const q = new f0(a, s);
    return r && q.registerOnChange(r), t?.(q), q;
  }, [a, s, r, t]), l = p0(c), d = De(() => /* @__PURE__ */ new Map(), []), [u, f] = he(), [p, h] = he([]), [y, m] = he(!1), [T, _] = he(!1), { yjsDocMap: E } = o;
  B(() => {
    if (e) {
      const q = e("comments", E);
      return c.registerCollaboration(q);
    }
    return () => {
    };
  }, [c, e, E]);
  const N = fe(() => {
    a.update(() => {
      const q = R();
      q !== null && (q.dirty = !0);
    }), m(!1);
  }, [a]), A = fe(
    (q, J) => {
      if (q.type === "comment") {
        const H = c.deleteCommentOrThread(q, J);
        if (!H)
          return;
        const { markedComment: ne, index: ce } = H;
        c.addComment(ne, J, ce);
      } else {
        c.deleteCommentOrThread(q);
        const H = J !== void 0 ? J.id : q.id, ne = d.get(H);
        ne !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ce of ne) {
              const le = Y(ce);
              ke(le) && (le.deleteID(Xr, H), le.hasNoIDsForEveryType() && Ao(le));
            }
          });
        });
      }
    },
    [c, a, d]
  ), S = fe(
    (q, J, H, ne) => {
      c.addComment(q, H), J && (a.update(() => {
        O(ne) && xl(ne, Xr, q.id);
      }), m(!1));
    },
    [c, a]
  );
  B(() => {
    const q = [];
    let J;
    for (const H of p) {
      const ne = d.get(H);
      if (ne !== void 0)
        for (const ce of ne) {
          const le = a.getElementByKey(ce);
          le !== null && (le.classList.add("selected"), q.push(le), J = window.setTimeout(() => {
            _(!0);
          }, 0));
        }
    }
    return () => {
      J !== void 0 && window.clearTimeout(J);
      for (const H of q)
        H.classList.remove("selected");
    };
  }, [p, a, d]), B(() => {
    if (!a.hasNodes([Ye]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const q = /* @__PURE__ */ new Map();
    return et(
      hl(
        a,
        Ye,
        (J) => qn(J.getTypedIDs()),
        (J, H) => {
          for (const [ne, ce] of Object.entries(J.getTypedIDs()))
            ce.forEach((le) => {
              H.addID(ne, le);
            });
        }
      ),
      a.registerMutationListener(
        Ye,
        (J) => {
          a.getEditorState().read(() => {
            for (const [H, ne] of J) {
              const ce = Y(H);
              let le = [];
              ne === "destroyed" ? le = q.get(H) ?? [] : ke(ce) && (le = ce.getTypedIDs()[Xr] ?? []);
              for (const ye of le) {
                let qe = d.get(ye);
                q.set(H, le), ne === "destroyed" ? qe !== void 0 && (qe.delete(H), qe.size === 0 && d.delete(ye)) : (qe === void 0 && (qe = /* @__PURE__ */ new Set(), d.set(ye, qe)), qe.has(H) || qe.add(H));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: J, tags: H }) => {
        J.read(() => {
          const ne = R();
          let ce = !1, le = !1;
          if (O(ne)) {
            const ye = ne.anchor.getNode();
            if (C(ye)) {
              const qe = nT(ye, Xr, ne.anchor.offset) ?? [];
              qe !== null && (h(qe), ce = !0), ne.isCollapsed() || (f(ye.getKey()), le = !0);
            }
          }
          ce || h((ye) => ye.length === 0 ? ye : []), le || f(null), !H.has("collaboration") && O(ne) && m(!1);
        });
      }),
      a.registerCommand(
        fp,
        () => {
          const J = window.getSelection();
          return J !== null && J.removeAllRanges(), m(!0), !0;
        },
        wn
      )
    );
  }, [a, d]);
  const M = () => {
    a.dispatchCommand(fp, void 0);
  };
  return /* @__PURE__ */ Me(An, { children: [
    y && Mn(
      /* @__PURE__ */ v(
        v0,
        {
          editor: a,
          cancelAddComment: N,
          submitAddComment: S
        }
      ),
      document.body
    ),
    u != null && !y && Mn(
      /* @__PURE__ */ v(
        T0,
        {
          anchorKey: u,
          editor: a,
          showComments: T,
          onAddComment: M
        }
      ),
      document.body
    ),
    n !== null && Mn(
      /* @__PURE__ */ v(
        ln,
        {
          className: `CommentPlugin_ShowCommentsButton ${T ? "active" : ""}`,
          onClick: () => _(!T),
          title: T ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ v("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    T && Mn(
      /* @__PURE__ */ v(
        S0,
        {
          comments: l,
          submitAddComment: S,
          deleteCommentOrThread: A,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function E0() {
  const e = Q(void 0), t = fe((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function A0(e, t) {
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
function P0(e, t) {
  B(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      A0(r, t);
    };
  }, [t, e]);
}
const yw = Vn(function(t, r) {
  const n = Q(null), i = Q(!0), s = Q(null), [o, a] = he(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: h, view: y } = {} } = t, m = (h ?? !1) || Ps(y), [T, _] = E0();
  P0(f, T), B(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(A), p || console.warn(A);
    }
  }, [p]), al(r, () => ({
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
    applyUpdate(A, S) {
      n.current?.applyUpdate(A, S);
    },
    replaceEmbedUpdate(A, S) {
      return n.current?.replaceEmbedUpdate(A, S);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(A) {
      n.current?.setSelection(A);
    },
    setAnnotation(A, S, M, q, J) {
      typeof q == "function" || q === void 0 ? n.current?.setAnnotation(A, S, M, q, J) : n.current?.setAnnotation(A, S, M, q);
    },
    removeAnnotation(A, S) {
      n.current?.removeAnnotation(A, S);
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
    replaceCharacterMarker(A, S) {
      return n.current?.replaceCharacterMarker(A, S) ?? !1;
    },
    extendCharacterMarker(A, S) {
      return n.current?.extendCharacterMarker(A, S) ?? !1;
    },
    insertMarker(A) {
      return n.current?.insertMarker(A);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(A, S) {
      return n.current?.applyMarkerMenuSelection(A, S);
    },
    splitParagraphWithMarker(A) {
      n.current?.splitParagraphWithMarker(A);
    },
    commitTypedMarker(A, S) {
      return n.current?.commitTypedMarker(A, S) ?? !1;
    },
    commitTypedCloser(A) {
      return n.current?.commitTypedCloser(A) ?? !1;
    },
    insertNote(A, S, M) {
      n.current?.insertNote(A, S, M);
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
  const E = fe(
    (A, S, M, q) => {
      if (!d) return;
      const J = T.current?.getComments();
      d(A, J, S, M, q);
    },
    [T, d]
  ), N = fe(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = T.current?.getComments();
    l(A);
  }, [T, i, l]);
  return B(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ v(dk, { children: /* @__PURE__ */ Me(Qy, { ref: n, onUsjChange: E, ...f, children: [
    /* @__PURE__ */ v(
      M0,
      {
        setCommentStore: _,
        onChange: N,
        showCommentsContainerRef: m ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ v("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Sn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function ob(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function w0(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const O0 = /^[#\w().,%/\s-]+$/;
function _r(e) {
  return e != null;
}
const N0 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, R0 = {
  left: "right",
  right: "left"
}, ol = ".editor-input.usfm", q0 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function $0(e) {
  return q0.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${ol}".`
  ), ol);
}
function I0(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${ob(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (O0.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), _r(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), _r(t.firstLineIndent) && i.push(`text-indent: ${Sn(t.firstLineIndent * 20 * r)}vw`), _r(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${Sn(t.leftMargin * 20 * r)}vw`), _r(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${Sn(t.rightMargin * 20 * r)}vw`
  ), _r(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${Sn(t.spaceBefore * r)}pt`), _r(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${Sn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = N0[n ? R0[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const hp = { c: 150, ca: 133, cp: 150 };
function gp(e, t) {
  return e && _r(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function L0(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && _r(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = gp(e.markers.c, hp.c);
  return ["ca", "cp"].map((i) => {
    const s = gp(
      e.markers[i],
      hp[i]
    ), o = Sn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function bw(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = ol } = t, s = $0(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${ob(e.defaultFont)}"`), _r(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Sn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = I0(c, l, r, n);
    d.length > 0 && o.push(`${s} .usfm_${w0(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...L0(e, s)), o.join(`
`);
}
export {
  Cg as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  mw as Editorial,
  So as GENERATOR_NOTE_CALLER,
  Fp as HIDDEN_NOTE_CALLER,
  yw as Marginal,
  b as MarkerType,
  vg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  _g as STANDARD_VIEW_MODE,
  $o as defaultStyleInfo,
  gw as directionToNames,
  sC as filterAndRankItems,
  bw as generateUsjCss,
  pw as getDefaultViewMode,
  pa as getDefaultViewOptions,
  C1 as getEnterMenuItems,
  _1 as getMarkerMenuItems,
  hw as getViewMode,
  Sg as getViewOptions,
  Ps as isBlockVerseLayout,
  Jr as isInsertEmbedOpOfType,
  k_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
