import { jsx as E, jsxs as Ee, Fragment as Dn } from "react/jsx-runtime";
import { forwardRef as Tn, useState as pe, useRef as Y, useCallback as ye, useEffect as B, useMemo as We, memo as wb, createContext as vp, useContext as Mp, Children as Ob, isValidElement as Rb, cloneElement as qb, useImperativeHandle as Yo, useLayoutEffect as Is } from "react";
import { assertSafeKey as et, isValidBookCode as $b, MARKER_OBJECT_PROPS as Ib, USJ_VERSION as or, USJ_TYPE as ar, isUsjTextContentLocation as Lb, indexesFromUsjJsonPath as Ep, isUsjAttributeKeyLocation as Db, isUsjAttributeMarkerLocation as Ub, isUsjClosingAttributeMarkerLocation as Fb, isUsjMarkerLocation as zb, isUsjClosingMarkerLocation as Kb, isUsjPropertyValueLocation as Bb, getUsjDocumentLocationTypeName as jb, usjJsonPathFromIndexes as Pn, EMPTY_USJ as Ap } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Je, $parseSerializedNode as Un, DecoratorNode as Ls, ElementNode as dr, isHTMLElement as Xn, createState as Xo, $getState as se, $setState as St, $isRangeSelection as P, $isElementNode as L, $isTextNode as M, $getSelection as N, $isNodeSelection as Qo, ParagraphNode as Tl, TextNode as He, $createTextNode as Te, $getCommonAncestor as Vb, $isLineBreakNode as Qn, NODE_STATE_KEY as Ds, $getEditor as fn, $hasUpdateTag as Wb, $getNodeByKey as ne, $getRoot as je, $createRangeSelection as Fn, $createPoint as rr, $setSelection as Fr, SELECTION_CHANGE_COMMAND as qt, $getCharacterOffsets as Cl, KEY_DOWN_COMMAND as Pr, COMMAND_PRIORITY_HIGH as Me, HISTORY_MERGE_TAG as _l, CLICK_COMMAND as Zo, COMMAND_PRIORITY_EDITOR as zn, DELETE_CHARACTER_COMMAND as ea, DELETE_WORD_COMMAND as Sl, DELETE_LINE_COMMAND as bo, COMMAND_PRIORITY_NORMAL as Cr, CONTROLLED_TEXT_INSERTION_COMMAND as Us, COMMAND_PRIORITY_CRITICAL as ve, PASTE_COMMAND as nr, CUT_COMMAND as cr, REMOVE_TEXT_COMMAND as Pp, isDOMNode as Np, $getNearestNodeFromDOMNode as Ui, $isRootNode as wp, DROP_COMMAND as vl, $isDecoratorNode as Zn, COPY_COMMAND as Mi, COMMAND_PRIORITY_LOW as Et, getDOMSelection as Hb, isSelectionWithinEditor as Op, $createRangeSelectionFromDom as Rp, isDOMTextNode as Gb, BLUR_COMMAND as Ml, $addUpdateTag as _t, SKIP_DOM_SELECTION_TAG as Ir, CLEAR_HISTORY_COMMAND as Jb, INSERT_PARAGRAPH_COMMAND as ms, INSERT_LINE_BREAK_COMMAND as Yb, $getPreviousSelection as Xb, $isRootOrShadowRoot as Qb, CAN_UNDO_COMMAND as Zb, CAN_REDO_COMMAND as ek, DRAGSTART_COMMAND as tk, $createNodeSelection as qp, getDOMSelectionFromTarget as rk, $onUpdate as $p, KEY_ENTER_COMMAND as Ip, LineBreakNode as Lp, $copyNode as nk, FOCUS_COMMAND as ik, createEditor as sk, SELECT_ALL_COMMAND as ok, isExactShortcutMatch as ak, getDOMTextNode as ck, KEY_ESCAPE_COMMAND as Dp, createCommand as Up, HISTORIC_TAG as El, UNDO_COMMAND as Fp, REDO_COMMAND as zp, CLEAR_EDITOR_COMMAND as lk } from "lexical";
import { addClassNamesToElement as ui, removeClassNamesFromElement as Da, $findMatchingParent as Ae, $dfsIterator as ta, $dfs as ei, mergeRegister as we, registerNestedElementResolver as Kp, $unwrapNode as xc, IS_APPLE as Ei } from "@lexical/utils";
import { useLexicalNodeSelection as uk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Kt } from "fast-equals";
import as from "quill-delta";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as dk } from "unicode-segmenter/grapheme";
import { copyToClipboard as fk, $getLexicalContent as pk } from "@lexical/clipboard";
import { TreeView as hk } from "@lexical/react/LexicalTreeView";
import * as gk from "react-dom";
import { createPortal as Ln } from "react-dom";
import { LexicalComposer as Bp } from "@lexical/react/LexicalComposer";
import { ContentEditable as jp } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Vp } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Wp } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Hp } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as mk } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as yk, createDOMRange as bk, createRectsFromDOMRange as kk } from "@lexical/selection";
import { autoUpdate as xk, computePosition as Tk, shift as Ck, flip as _k } from "@floating-ui/dom";
import { $generateNodesFromDOM as Sk } from "@lexical/html";
import { AutoFocusPlugin as vk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Mk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Gp, LexicalCollaboration as Ek } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Ak } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Pk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Nk, $isRootTextContentEmpty as wk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Ok } from "@lexical/yjs";
import { Array as fd, Map as pd, YArrayEvent as Rk } from "yjs";
const Ua = (e) => Je(Un(e)), qk = {
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
function Jp(e) {
  return qk[e];
}
const D = " ", ko = "​", Jt = D, Al = `${D}|`, Ht = "p", ys = "+", Yp = "-", xo = "chapter", Tc = "verse", hd = "invalid", $k = "text-spacing", Ik = "formatted-font", Lk = "marker-", Pl = "external-usj-mutation", Xp = "selection-change", vt = "cursor-change", Cc = "annotation-change", bs = "delta-change", Qp = "marker-settle", Dk = [
  Pl,
  Xp,
  vt,
  Cc,
  bs
], Kn = "zmsc-s", Ci = "zmsc-e", Uk = [Kn, Ci], Fk = [
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
  Kn,
  Ci
], Zp = 1, Nl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], zk = Nl.filter((e) => e !== "sid" && e !== "eid");
class lr extends Ls {
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
    return new lr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return th().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Fk.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Zp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function eh(e) {
  return Uk.includes(e);
}
function th(e, t, r, n, i) {
  return Je(new lr(e, t, r, n, void 0, i));
}
function Ze(e) {
  return e instanceof lr;
}
const wl = "f", Kk = [
  // Footnote
  wl,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function io(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Bk = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], rh = 1;
class Pe extends dr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = wl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (io(t) === "crossref" ? Yp : ys), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Vk(t) ? {
        conversion: jk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ol().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Kk.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", io(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", io(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Xn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", io(this.getMarker()))), { element: r };
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
      version: rh
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
function jk(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Ol(t, r, n) };
}
function Ol(e, t, r, n, i) {
  return Je(new Pe(e, t, r, n, i));
}
function Vk(e) {
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
const _c = {
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
}, Nn = {
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
}, gd = {
  p: { children: Nn },
  q: { children: Nn },
  q1: { children: Nn },
  q2: { children: Nn },
  q3: { children: Nn },
  q4: { children: Nn },
  b: { children: Nn },
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
  const t = Object.hasOwn(_c, e) ? _c[e] : void 0, r = Object.hasOwn(gd, e) ? gd[e] : void 0;
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
const nh = "v", ih = "c", wn = "fig", md = "tr", Sc = "esb", sh = "esbe", yd = "periph", bd = "alt", kd = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Wk = {
  "": "start",
  c: "center",
  r: "end"
};
function xd(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Td(e) {
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
const Hk = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Gk(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === ko && s + 1 < e.length && Td(e[s + 1]) || (Td(o) ? (r || (i = t.length, t += o), r = !0) : Hk.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Jk(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Yk(e, t) {
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
const Xk = /^(?:qt[1-5]?|ts)-[se]$/;
function Rl(e) {
  return Xk.test(e) || eh(e);
}
function Fa(e, t) {
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
function Qk(e, t, r) {
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
      a(Gk(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = Yk(e, i + 1);
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
    if (l === nh) {
      const { word: g, next: y } = Fa(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === ih) {
      const { word: g, next: y } = Fa(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === x.Note || h === void 0 && Pe.isValidMarker(l)) {
      const { word: g, next: y } = Fa(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === x.Milestone || h === void 0 && Rl(l)) {
      const g = ox(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    h === x.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : h === x.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : To(p) ? (d(), To(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Sc || l === sh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Cd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function To(e) {
  return Object.hasOwn(Cd, e) ? Cd[e] : void 0;
}
function Zk(e) {
  return To(e) !== void 0;
}
const ex = /([-\w]+)\s*=\s*"(.*?)"/g, tx = /[\s\u200B]*[\n\r][\s\u200B]*/g, oh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function ra(e) {
  return oh[e];
}
const rx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function nx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ks(e, t, r = oh[t]) {
  const n = e.replace(tx, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(ex)];
  if (s.length > 0) {
    if (!nx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      rx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function na(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function ix(e) {
  const t = Nr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function sx(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ks(e.slice(n + 1, i), r, na(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function ox(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ks(s.slice(o + 1), r, na(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = sx(e, i + 2, r);
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
function Nr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? on(u) : d ? on(d) : r;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? on(o[o.length - 1].object) : on(s);
    if (o.length > 0)
      return on(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: Ht, content: [] }, f().push(i);
    }
    return on(i);
  }, g = (ee) => {
    const R = h();
    typeof ee == "string" && typeof R[R.length - 1] == "string" ? R[R.length - 1] = R[R.length - 1] + ee : R.push(ee);
  }, y = (ee) => {
    for (let R = ee; R < o.length; R += 1) {
      const te = o[R].object;
      te.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, b = (ee) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, ee || (s.closed = "false"), s = void 0);
  }, C = () => {
    c = void 0, l = void 0;
  }, A = (ee, R, te) => {
    k();
    const [, ce, Ne, lt] = te, Z = {
      type: "table:cell",
      marker: lt ? R.slice(0, R.indexOf("-")) : R,
      align: Wk[ce],
      content: []
    };
    lt && (Z.colspan = String(Number(lt) + 1 - Number(Ne))), on(ee).push(Z), i = Z;
  }, _ = (ee) => {
    u && (ee || (u.closed = "false"), u = void 0);
  }, w = () => {
    d = void 0;
  };
  let $, z = "", S;
  const W = () => {
    z && g(kr(z)), z = "";
  }, H = (ee = !1) => {
    $?.type === "sidebar" ? z = "" : ee && z.endsWith(`
`) && (z = z.slice(0, -1)), $ = void 0, W();
  }, de = () => {
    if (!S)
      return;
    const ee = { type: "char", marker: S.marker, content: [] };
    S.value && (ee.content = [kr(S.value)]), h().push(ee), o.push({ object: ee }), S = void 0;
  }, Q = (ee, R) => {
    p = !1, C(), k(), b(!1), i = { type: "para", marker: ee, content: [] }, R && (i.content = [kr(R)]), f().push(i);
  }, De = () => {
    S && (Q(S.marker, S.value), S = void 0);
  };
  let Ce;
  const hr = (ee) => {
    if (!Ce)
      return;
    let { value: R } = Ce;
    Ce = void 0, ee && R.endsWith(`
`) && (R = R.slice(0, -1));
    const te = R.indexOf("|"), ce = te >= 0 ? ks(R.slice(te + 1), yd) : void 0, Ne = te >= 0 ? R.slice(0, te) : R, lt = te >= 0 && (!ce || !!Ne && !!ce[bd]), Z = lt ? void 0 : ce, Ye = lt ? R : Ne, gr = {
      type: "periph",
      ...Ye ? { [bd]: kr(Ye) } : {},
      ...Z
    };
    gr.content = [], f().push(gr), d = gr, i = void 0;
  };
  let Ve;
  const Qr = () => {
    if (Ve) {
      if (Ve.shape === "para")
        Q(wn, Ve.value);
      else {
        const ee = { type: "char", marker: wn, content: [] };
        Ve.value && (ee.content = [kr(Ve.value)]), h().push(ee), o.push({ object: ee });
      }
      Ve = void 0;
    }
  }, Zr = Qk(e, t?.getMarker ?? _r, n);
  for (let ee = 0; ee < Zr.length; ee++) {
    const R = Zr[ee];
    if (S) {
      if (R.kind === "text") {
        S.value += R.text;
        continue;
      }
      if (S.shape === "char" && R.kind === "end" && R.marker.replace(/^\+/, "") === S.marker) {
        if (S.value.trim() === "") {
          h().push({ type: "char", marker: S.marker, content: [] }), S = void 0, H();
          continue;
        }
        Object.assign(S.target, {
          [S.attrName]: kr(S.value.trim())
        });
        const te = S.marker;
        if (S = void 0, te === "ca") {
          const ce = Zr[ee + 1];
          ce?.kind === "text" && /^[\s\u200B]*$/.test(ce.text) && ee++;
        }
        continue;
      }
      if (S.shape === "para" && (R.kind === "para" || R.kind === "chapter")) {
        const te = S.value.replace(/[\s\u200B]+$/, "");
        te === "" ? (Q(S.marker), S = void 0) : (Object.assign(S.target, { [S.attrName]: kr(te) }), S = void 0);
      } else {
        $ = void 0, (R.kind === "para" || R.kind === "chapter") && S.value.endsWith(`
`) && (S.value = S.value.slice(0, -1)), S.shape === "para" ? De() : de(), ee--;
        continue;
      }
    }
    if (Ce) {
      if (R.kind === "text" || R.kind === "optbreak") {
        Ce.value += R.kind === "text" ? R.text : "//";
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
      if (R.kind === "end" && R.marker.replace(/^\+/, "") === wn) {
        const te = Ve.value.indexOf("|"), ce = te >= 0 ? ks(Ve.value.slice(te + 1), wn) : void 0;
        if (ce) {
          const Ne = {};
          for (const [Ye, gr] of Object.entries(ce))
            Ne[Ye === "src" ? "file" : Ye] = gr;
          const lt = {
            type: "figure",
            marker: wn,
            ...Ne
          }, Z = Ve.value.slice(0, te);
          Z && (lt.content = [kr(Z)]), g(lt), Ve = void 0;
          continue;
        }
      }
      Qr(), ee--;
      continue;
    }
    if ($)
      if (R.kind === "text") {
        if (R.text.includes(`
`) && /^[\s\u200B]*$/.test(R.text)) {
          z += R.text;
          continue;
        }
        H();
      } else if (R.kind === "charOpen" || R.kind === "para") {
        const te = R.kind === "para" || !R.isNested ? To(R.marker) : void 0;
        if (te && te.targetTypes.includes($.type)) {
          z = "", S = {
            target: $,
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
    if (!s && !n && (R.kind === "charOpen" && !R.isNested && R.marker === wn || R.kind === "para" && R.marker === wn)) {
      k(), Ve = { shape: R.kind === "charOpen" ? "char" : "para", value: "" };
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
        te && g(kr(te));
        break;
      }
      case "para": {
        const te = !s && !n;
        if (te && R.marker === md) {
          k(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: md, content: [] }, on(c).push(l), i = l, p = !1;
          break;
        }
        if (te && l) {
          const ce = kd.exec(R.marker);
          if (ce && xd(ce)) {
            A(l, R.marker, ce);
            break;
          }
        }
        if (C(), !n && R.marker === Sc) {
          k(), b(!1), _(!1);
          const ce = {
            type: "sidebar",
            marker: Sc,
            content: []
          };
          f().push(ce), u = ce, i = void 0, $ = u, p = !1;
          break;
        }
        if (R.marker === sh && u) {
          k(), b(!1), _(!0), i = void 0;
          break;
        }
        if (!n && R.marker === yd) {
          k(), b(!1), _(!1), w(), Ce = { value: "" }, i = void 0, p = !1;
          break;
        }
        Q(R.marker);
        break;
      }
      case "verse": {
        b(!1);
        const te = { type: "verse", marker: nh, number: R.number };
        g(te), $ = te;
        break;
      }
      case "chapter": {
        k(), b(!1), C(), _(!1), w(), i = void 0;
        const te = {
          type: "chapter",
          marker: ih,
          number: R.number
        };
        r.push(te), $ = te, p = !0;
        break;
      }
      case "note": {
        b(!1);
        const te = h();
        s = { type: "note", marker: R.marker, caller: R.caller, content: [] }, a = o.length, te.push(s), $ = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !R.isNested) {
          const Ne = kd.exec(R.marker);
          if (Ne && xd(Ne)) {
            A(l, R.marker, Ne);
            break;
          }
        }
        if (!R.isNested) {
          const Ne = s ? a : 0;
          y(Ne), o.length = Ne;
        }
        const te = h(), ce = { type: "char", marker: R.marker, content: [] };
        te.push(ce), o.push({ object: ce });
        break;
      }
      case "end": {
        const te = R.marker.replace(/^\+/, ""), ce = s ? a : 0, Ne = o.findLastIndex((lt, Z) => Z >= ce && lt.object.marker === te);
        Ne >= 0 ? (ax(o[Ne].object), y(Ne + 1), o.length = Ne) : s && s.marker === te ? b(!0) : (y(ce), o.length = ce, g({ type: "unmatched", marker: `${R.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: R.marker, ...R.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (Ce && hr(!0), Ve && Qr(), S)
    if (S.shape === "para") {
      const ee = S.value.replace(/[\s\u200B]+$/, "");
      ee === "" ? Q(S.marker) : Object.assign(S.target, { [S.attrName]: kr(ee) }), S = void 0;
    } else
      S.value.endsWith(`
`) && (S.value = S.value.slice(0, -1)), de();
  k(), b(!1), _(!1);
  const _n = (ee) => {
    for (const R of ee)
      typeof R != "string" && R.content && (_n(R.content), R.content.length === 0 && delete R.content);
  };
  return _n(r), r;
}
function ax(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ks(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Bn = Xo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), pn = Xo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ue = Xo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), wr = "marker-trailing-space", ah = 1, cx = "marker", ql = Xo("isGutterMarker", {
  parse: (e) => e === !0
});
class Vr extends Ls {
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
      span: (t) => fx(t) ? {
        conversion: lx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return zr().updateFromJSON(t);
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
    return r && Xn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: ah
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function lx(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: zr(t, r) };
}
function zr(e, t) {
  return Je(new Vr(e, t));
}
function ux(e) {
  return St(zr(cx, e), ql, !0);
}
function dx(e) {
  return $t(e) && se(e, ql);
}
function fx(e) {
  return e?.tagName === "span";
}
function $t(e) {
  return e instanceof Vr;
}
function ch(e) {
  return e?.type === Vr.getType();
}
const dn = "internal-comment", px = [dn], lh = Object.freeze({}), vc = Object.freeze({}), Mc = Object.freeze({}), Ec = Object.freeze({}), Ac = Object.freeze({}), hx = 1, di = /* @__PURE__ */ new Map(), Zi = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map();
class ot extends dr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = lh, r, n, i, s, o) {
    super(o), this.__typedIDs = so(t), this.__typedOnClicks = za(r), this.__typedOnRemoves = Ka(n), this.__typedOnMouseEnters = Ba(i), this.__typedOnMouseLeaves = ja(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = so(t.__typedIDs), n = za(t.__typedOnClicks), i = Ka(t.__typedOnRemoves), s = Ba(t.__typedOnMouseEnters), o = ja(t.__typedOnMouseLeaves);
    return new ot(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return px.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return xs().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: hx
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      ui(n, On(t.theme.typedMark, a)), c.length > 1 && ui(n, On(t.theme.typedMarkOverlap, a));
      for (const l of c)
        ui(n, On("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = On(n.theme.typedMark, s), d = On(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && ui(r, u) : l === 0 && Da(r, u), c === 1 ? l === 2 && ui(r, d) : l === 1 && Da(r, d));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Da(r, On("annotationId", h));
      for (const h of a)
        f.has(h) || ui(r, On("annotationId", h));
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
    return xe(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = so(r.__typedIDs);
    r.__typedIDs = so(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Co(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = za(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return xe(t) ? di.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ka(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return xe(t) ? Zi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Ba(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return xe(t) ? fi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ja(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return xe(t) ? pi.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!xe(a))
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
    if (!xe(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Co(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = xs(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), di.delete(r.getKey()), Zi.delete(r.getKey()), fi.delete(r.getKey()), pi.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
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
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (r) => {
      this.handleDOMMouseLeave(r, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, r) {
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === vc) {
      const t = di.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      di.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    di.set(this.getKey(), this.__typedOnClicks);
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Mc) {
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Mc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Ec) {
      const t = fi.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      fi.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    fi.set(this.getKey(), this.__typedOnMouseEnters);
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Ec) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ac) {
      const t = pi.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      pi.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    pi.set(this.getKey(), this.__typedOnMouseLeaves);
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Ac) {
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
    const i = gx(t, r);
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
    for (; xe(t) && Sd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; xe(r) && Sd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = mx(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = yx(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = bx(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = kx(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function so(e = lh) {
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
function za(e) {
  if (!e || e === vc)
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
function Ka(e) {
  if (!e || e === Mc)
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
function Ba(e) {
  if (!e || e === Ec)
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
function ja(e) {
  if (!e || e === Ac)
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
function _d(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function gx(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Sd(e, t) {
  const r = _d(e), n = _d(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function mx(e, t) {
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
function yx(e, t) {
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
function bx(e, t) {
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
function kx(e, t) {
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
function On(e, t) {
  return `${e}-${t}`;
}
function vd(e) {
  return `external-${e}`;
}
function xs(e, t, r, n, i) {
  return Je(new ot(e, t, r, n, i));
}
function xe(e) {
  return e instanceof ot;
}
function uh(e) {
  return e?.type === ot.getType();
}
function Co(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function dh(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let h, g;
  for (let y = 0; y < u; y++) {
    const k = a[y];
    if (L(g) && g.isParentOf(k))
      continue;
    const b = y === 0, C = y === u - 1;
    let A = null;
    if (M(k)) {
      const _ = k.getTextContentSize(), w = b ? f : 0, $ = C ? p : _;
      if (w === 0 && $ === 0)
        continue;
      const z = k.splitText(w, $);
      A = z.length > 1 && (z.length === 3 || b && !C || $ === _) ? z[1] : z[0];
    } else {
      if (xe(k))
        continue;
      L(k) && k.isInline() && (A = k);
    }
    if (A !== null) {
      if (A && A.is(h))
        continue;
      const _ = A.getParent();
      (_ == null || !_.is(h)) && (g = void 0), h = _, g === void 0 && (g = xs(), g.addID(t, r, n, i, s, o), A.insertBefore(g)), g.append(A);
    } else
      h = void 0, g = void 0;
  }
  t === dn && L(g) && (d ? g.selectStart() : g.selectEnd());
}
function xx(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (xe(n))
      return n.getTypedIDs()[t];
    if (M(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (xe(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Tx = ["type", "marker", "content"], Pc = "unknown", fh = 1, Cx = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class ti extends dr {
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
    return new ti(r, n, i, s);
  }
  static importDOM() {
    return {
      [Pc]: (t) => Sx(t) ? {
        conversion: _x,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return $l().updateFromJSON(t);
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
    return Cx.has(this.getTag());
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
    const t = document.createElement(Pc);
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
      version: fh
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
    if (Qo(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function _x(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: $l(t, r) };
}
function $l(e, t, r) {
  return Je(new ti(e, t, r));
}
function Sx(e) {
  return e?.tagName.toLowerCase() === Pc;
}
function ze(e) {
  return e instanceof ti;
}
const ph = 1, vx = "attribute-run";
function Va(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Wr extends dr {
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
    return hh(t.runKind).updateFromJSON(t);
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
    t.classList.add(vx);
    const r = Va(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Va(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Va(this.__runKind);
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
      version: ph
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
function hh(e) {
  return Je(new Wr(e));
}
function Ie(e) {
  return e instanceof Wr;
}
const Ts = "id", gh = 1, Mx = [
  "type",
  "marker",
  "code",
  "content"
];
class It extends dr {
  __marker = Ts;
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
    return new It(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return mh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return $b(t);
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
      version: gh
    };
  }
}
function mh(e, t) {
  return Je(new It(e, t));
}
function ke(e) {
  return e instanceof It;
}
function Il(e) {
  return e?.type === It.getType();
}
const _o = "c", yh = 1, Ex = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ft extends dr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = _o, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Ft(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return bh().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(xo, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: yh
    };
  }
}
function bh(e, t, r, n, i) {
  return Je(new Ft(e, t, r, n, i));
}
function Re(e) {
  return e instanceof Ft;
}
function Ax(e) {
  return e?.type === Ft.getType();
}
const kh = [
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
], xh = [
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
], Px = [
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
  ...kh,
  ...xh
], Th = 1, Nx = ["type", "marker", "content"];
class be extends dr {
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
    return new be(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Px.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && kh.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && xh.includes(t);
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
    return be.isValidFootnoteMarker(t) || be.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Ox(t) ? {
        conversion: wx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kr().updateFromJSON(t);
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
    return Md(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Md(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Xn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Th
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Kr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Md(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function wx(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Kr(t) };
}
function Kr(e, t) {
  return Je(new be(e, t));
}
function Ox(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return be.isValidMarker(t) && e.classList.contains(be.getType());
}
function F(e) {
  return e instanceof be;
}
function Rx(e) {
  return e?.type === be.getType();
}
const Ch = 1, qx = "c", _h = "span";
class Or extends Ls {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = qx, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Or(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Sh(t) ? {
        conversion: $x,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ll().updateFromJSON(t);
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
    const t = document.createElement(_h);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(xo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Xn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(xo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Gt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Ch
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
function $x(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Ll(t) };
}
function Ll(e, t, r, n, i, s) {
  return Je(new Or(e, t, r, n, i, s));
}
function Sh(e) {
  return e ? e.classList.contains(xo) && e.tagName.toLowerCase() === _h : !1;
}
function Fs(e) {
  return e instanceof Or;
}
function Ix(e) {
  return e?.type === Or.getType();
}
const vh = 1;
class hn extends Tl {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new hn(t.__key);
  }
  static importJSON(t) {
    return ir().updateFromJSON(t);
  }
  getMarker() {
    return Ht;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: vh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ir();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function ir() {
  return Je(new hn());
}
function vr(e) {
  return e instanceof hn;
}
function ia(e) {
  return e?.type === hn.getType();
}
const Lx = [
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
  Ht,
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
], Mh = 1, Dx = ["type", "marker", "content"];
class ct extends Tl {
  __marker;
  __unknownAttributes;
  constructor(t = Ht, r, n) {
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
    return t !== void 0 && (Lx.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Ux,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Ai().updateFromJSON(t);
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
    return r && Xn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Mh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ai(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ux(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Ai(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Ai(e, t) {
  return Je(new ct(e, t));
}
function le(e) {
  return e instanceof ct;
}
function Dl(e) {
  return e?.type === ct.getType();
}
const So = "v", Eh = 1, Fx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class bt extends He {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = So, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new bt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Ah().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Tc, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Eh
    };
  }
}
function Ah(e, t, r, n, i, s) {
  return Je(new bt(e, t, r, n, i, s));
}
function $e(e) {
  return e instanceof bt;
}
function Ph(e) {
  return e?.type === bt.getType();
}
const zx = "​", Pi = zx;
var Ed;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Ed || (Ed = {}));
var Ad;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ad || (Ad = {}));
function Kx() {
  return Te(Pi);
}
function Bx(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Pi, ""));
}
function zs(e) {
  return e.length > 0 && e.includes(Pi) && e.replaceAll(Pi, "") === "";
}
function Ks(e) {
  return M(e) && zs(e.getTextContent());
}
function Nh(e) {
  return Ax(e) || Ix(e);
}
function Ge(e) {
  return Re(e) || Fs(e);
}
function wh(e, t) {
  return e.find((r) => Ge(r) && r.getNumber() === t.toString());
}
function jx(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ge(r));
}
function Nc(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Vx(e) {
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
function Lt(e) {
  return Ae(e, K) ?? void 0;
}
function Wx(e) {
  return ke(e) || Re(e) || F(e) || Fs(e) || vr(e) || Ze(e) || le(e) || K(e) || $e(e) || ze(e);
}
function Ul(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Oh(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Ke(e) {
  return at(e) || ke(e);
}
function at(e) {
  return le(e) || vr(e);
}
function Hx(e) {
  return Dl(e) || ia(e);
}
function vo(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function jn(e, t) {
  const r = se(t, Bn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Gx(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? Vb(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Jx(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Ni(e) {
  return e?.type === He.getType();
}
function Yx(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Xx(e, t) {
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
function Rh(e, t, r) {
  const n = Le(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Gt(e, t) {
  let r = Le(e);
  return t && (r += `${D}${t}`), r += " ", r;
}
function Qx(e) {
  const t = e[Ds];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function qh(e) {
  return Ih(e) || Ni(e) && Qx(e) === "attribute" ? "" : Ni(e) && e.text !== D ? e.text : Rx(e) ? e.children.map((t) => qh(t)).join("") : "";
}
function Zx(e) {
  return e.map((r) => qh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Dt(e) {
  return " " + e + D;
}
function Fl(e) {
  const t = [];
  for (const r of e) {
    if (!F(r))
      continue;
    const n = $h(r);
    n !== Jt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function $h(e) {
  return O(e) || fr(e) || M(e) && se(e, ue) === "attribute" ? "" : M(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => $h(t)).join("") : "";
}
function fr(e) {
  return $t(e) && e.getTextType() === "marker";
}
function Nt(e) {
  return O(e) || fr(e);
}
function zl(e) {
  if (!e || !Nt(e))
    return !1;
  const t = e.getParent();
  return ke(t) && e.is(t.getFirstChild());
}
function Ih(e) {
  return Bl(e) || ch(e) && e.textType === "marker";
}
function Pd(e, t) {
  eT(e, t), e.setMarker(t);
}
function eT(e, t) {
  const r = e.getMarker(), n = Le(r), i = Le(r, !0), s = nt(r), o = nt(r, !0), a = be.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Nt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (fr(c)) {
        const f = l.startsWith(Le("", !0));
        c.setTextContent(u ? Le(t, f) : nt(t, f));
      }
    }
  });
}
function Be(e, t = Ib) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function qe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Lh(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Dh(e) {
  if (!P(e))
    return Nd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !M(t)))
    return t ?? void 0;
  try {
    return Nd(e) ?? t ?? void 0;
  } catch (n) {
    if (Lh(n))
      return t ?? void 0;
    throw n;
  }
}
function tT(e, t) {
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
function rT(e) {
  return !!e && e.includes("-");
}
function Uh(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Nd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Bs(e) {
  if (!e)
    return !1;
  if (Qn(e) || O(e) || fr(e) || Ie(e) || $t(e) && e.getTextType() === "attribute")
    return !0;
  if (M(e)) {
    const t = se(e, ue);
    if (t === wr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === D || zs(r))
      return !0;
  }
  return !1;
}
function js() {
  const e = Te(D);
  return St(e, ue, wr), e.setMode("token"), e;
}
function nT(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function Rr(e) {
  return M(e) && se(e, ue) === wr;
}
function Fh(e) {
  const t = e.getFirstChild();
  if (!Nt(t) || t === null || Rr(t.getNextSibling()))
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
function Fi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Bs(s)) {
      if (xe(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (M(s) && s.getType() === He.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function sa(e) {
  let t = e.getParent();
  for (; t && xe(t); )
    t = t.getParent();
  return t;
}
function iT(e, t) {
  return Fi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function sT(e, t) {
  const r = sa(e);
  if (!r)
    return;
  const n = Fi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function oT(e, t) {
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
function zh(e, t) {
  const r = Fi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Bs(n))
    return zh(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || vo(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || vo(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function aT(e, t) {
  if (t <= 0)
    return 0;
  const r = Fi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? cT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function cT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const lT = 1;
class qr extends He {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super($n(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new qr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || $n(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = $n(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = $n(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = $n(r.__marker, r.__markerSyntax, t), r;
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
      version: lT
    };
  }
}
function gt(e, t, r) {
  return Je(new qr(e, t, void 0, r));
}
function O(e) {
  return e instanceof qr;
}
function Bl(e) {
  return e?.type === qr.getType();
}
function Hr(e) {
  return e.getTextContent() === $n(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function uT(e) {
  e.setTextContent($n(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function $n(e, t, r = !1) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Le(e, r);
}
const dT = /* @__PURE__ */ new Set(["closed"]);
function Tr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !dT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Kh(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Bh(e) {
  const t = Object.keys(e).filter((n) => !zk.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function jh(e, t, r, n) {
  return Kh(
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
function ds(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function fT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : ds(e) === void 0 && Vh(e) === void 0;
}
function Vh(e) {
  return e.getChildren().find((t) => M(t) && se(t, ue) === "attribute");
}
function Cs(e, t) {
  return Vs(e.getNextSibling(), t);
}
const pT = /^[ \u00A0]+$/;
function jl(e) {
  if (Hr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Le(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && pT.test(r.slice(t.length));
}
function Vs(e, t) {
  let r, n, i, s;
  return Ie(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  jl(e) && (r = e, e = e.getNextSibling()), M(e) && se(e, ue) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Hr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Br(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!O(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (M(n) && n.getTextContent() === Dt(e.getCaller()))
    return n;
}
function Vl(e) {
  const t = Br(e);
  return t ? Vs(t.getNextSibling(), "cat") : {};
}
function oa(e) {
  const t = e.getFirstChild();
  if (!(!M(t) || O(t)) && se(t, ue) !== "attribute")
    return t;
}
function Wh(e) {
  const t = oa(e);
  return t ? Vs(t.getNextSibling(), "ca") : {};
}
function Hh(e) {
  const t = oa(e);
  if (!t)
    return;
  const r = Vs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Gh(e) {
  const t = Hh(e);
  return t ? Vs(t.getNextSibling(), "cp") : {};
}
function Jh(e) {
  const t = e.getParent();
  if (!F(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if ($e(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || M(n) && se(n, ue) === "attribute" || F(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ie(n)))
        return;
    }
}
function aa(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ie(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  jl(s) && (t = s, s = s.getNextSibling()), M(s) && se(s, ue) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && Hr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Wl(e) {
  return F(sa(e));
}
function Hl(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Wl(t) : t.getChildren().some((i) => F(i) && i.getMarker() === r) ? !0 : void 0;
}
function hT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = Hl(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function zi(e) {
  return M(e) && e.getType() === He.getType() && se(e, ue) !== "attribute";
}
function ca(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !O(t) || !F(r) || !Yh(t, r) || !zi(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function Yh(e, t) {
  return e.getMarkerSyntax() === "opening" && Hl(e, t) !== void 0;
}
function Gl(e, t) {
  if (!Yh(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? Hl(r, t) === !0 ? "spacer" : void 0 : zi(r) ? r.getTextContent().startsWith(D) ? void 0 : "prefix" : "spacer";
}
function gT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && Gl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Xh(e, t) {
  const r = N();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Qh(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = Gl(t, e);
    if (r !== void 0 && !Xh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        M(n) && n.setTextContent(D + n.getTextContent());
      } else
        t.insertAfter(Te(D));
  });
}
function Zh(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && Gl(t, e) !== void 0 && Xh(t, e)) : !1;
}
const mT = "file", yT = "src", bT = "colspan", kT = "category", xT = "alt", TT = "closed", CT = "false";
function _T(e) {
  return e[TT] !== CT;
}
function ST(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === mT ? yT : t,
    r
  ]));
}
function eg(e, t) {
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
function tg(e, t, r) {
  const n = r ?? {}, i = _T(n);
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
        opening: `\\${eg(t, n[bT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Tr(ST(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [kT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Tr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [xT]: s, ...o } = n;
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
function Wa(e, t) {
  if (t === "va")
    return e;
  const r = Cs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Jl(e) {
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
function la(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function vT(e) {
  return Ie(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : M(e) && se(e, ue) === "attribute";
}
function MT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!M(e) || se(e, ue) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Ha(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if ($e(t))
      return t;
    if (!vT(t))
      return;
  }
}
function wd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => $e(t),
    ownerOf: (t) => {
      if (Ie(t))
        return t.getRunKind() === e ? Ha(t) : void 0;
      const r = t.getParent();
      return Ie(r) ? r.getRunKind() === e ? Ha(r) : void 0 : MT(t) === e ? Ha(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!$e(t))
        return At;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? At : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (t) => $e(t) ? Cs(Wa(t, e), e) : Gr,
    graceSite: (t, r) => $e(t) ? !r.opener && !r.closer ? Jl(Wa(t, e)) : la(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => $e(t) ? Wa(t, e) : void 0
    }
  };
}
const ET = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => At,
  scanPieces: () => Gr,
  graceSite: (e) => F(e) && Zh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, AT = {
  kind: "char",
  ownerPredicate: (e) => F(e),
  ownerOf: (e) => {
    if (!M(e) || se(e, ue) !== "attribute")
      return;
    const t = e.getParent();
    return F(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!F(e) || ds(e) === void 0)
      return At;
    const t = Tr(e.getUnknownAttributes() ?? {}, ra(e.getMarker()));
    return t === "" ? At : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => F(e) ? { value: Vh(e) } : Gr,
  graceSite: (e, t) => {
    if (!F(e) || t.value)
      return !1;
    const r = ds(e);
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
    insertRunBefore: (e) => F(e) ? ds(e) : void 0
  }
};
function rg(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!M(e) || se(e, ue) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function PT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = Br(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!rg(n))
        return;
    }
}
const NT = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (Ie(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ie(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : rg(e) ? PT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return At;
    const t = e.getCategory();
    return t === void 0 ? At : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => K(e) ? Vl(e) : Gr,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Br(e);
      return r !== void 0 && Jl(r);
    }
    return la(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => K(e) ? Br(e) : void 0
  }
};
function wT(e) {
  return Ie(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : M(e) && se(e, ue) === "attribute";
}
function OT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!M(e) || se(e, ue) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function RT(e) {
  const t = e.getParent();
  if (!Re(t))
    return;
  const r = oa(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!wT(n))
        return;
    }
}
function Od(e) {
  const t = (r) => Re(r) ? e === "ca" ? oa(r) : Hh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Re(r),
    ownerOf: (r) => {
      if (Ie(r))
        return r.getRunKind() === e && Re(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ie(n) ? n.getRunKind() === e && Re(n.getParent()) ? n.getParent() ?? void 0 : void 0 : OT(r) === e ? RT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Re(r))
        return At;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? At : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (r) => Re(r) ? e === "ca" ? Wh(r) : Gh(r) : Gr,
    graceSite: (r, n) => {
      if (!Re(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Jl(i);
      }
      return la(n);
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
function ng(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return M(e) && se(e, ue) === "attribute";
}
function qT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ze(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!ng(t))
      return;
  }
}
const $T = {
  kind: "milestone",
  ownerPredicate: (e) => Ze(e),
  ownerOf: (e) => {
    const t = Ie(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ie(e.getParent()) ? e.getParent() : ng(e) ? e : void 0;
    if (!t || Ie(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ie(t) ? Ze(r) ? r : void 0 : qT(t);
  },
  expectedPieces: (e) => {
    if (!Ze(e))
      return At;
    const t = jh(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Tr(t, na(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : D + r };
  },
  scanPieces: (e) => {
    if (!Ze(e))
      return Gr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = aa(e);
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
    return la(t);
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
}, IT = tg("optbreak", void 0, void 0).opening, LT = {
  kind: "optbreak",
  ownerPredicate: (e) => ze(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!ze(t) || t.getTag() !== "optbreak"))
      return M(e) || $t(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: IT }),
  scanPieces: (e) => ze(e) ? { value: e.getFirstChild() ?? void 0 } : Gr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, DT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => ze(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => At,
  scanPieces: () => Gr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, UT = {
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
}, _s = [
  ET,
  AT,
  wd("va"),
  wd("vp"),
  NT,
  Od("ca"),
  Od("cp"),
  $T,
  LT,
  DT,
  UT
], FT = new Map(_s.map((e) => [e.kind, e]));
function Vn(e) {
  const t = FT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Wn(e) {
  for (const t of _s) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function ig(e) {
  return Wn(e) !== void 0;
}
const Mo = "unmatched", sg = 2;
function fs(e) {
  return `\\${e}`;
}
class Jr extends He {
  __marker;
  constructor(t = "", r) {
    super(fs(t), r), this.__marker = t, this.__mode = 1;
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
      [Mo]: (t) => KT(t) ? {
        conversion: zT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Yl().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? fs(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = fs(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(hd), r.title = Rd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Rd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Mo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(hd), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: sg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function og(e) {
  return e.getTextContent() === fs(e.getMarker());
}
function Rd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function zT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Yl(t) };
}
function Yl(e) {
  return Je(new Jr(e));
}
function KT(e) {
  return e?.tagName.toLowerCase() === Mo;
}
function Yr(e) {
  return e instanceof Jr;
}
const ag = "table", wc = "immutable-table", cg = 1, BT = ["type", "marker", "content"];
class ri extends dr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return wc;
  }
  static clone(t) {
    return new ri(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return jT().updateFromJSON(t);
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
      type: wc,
      ...t !== void 0 && { unknownAttributes: t },
      version: cg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function jT(e) {
  return Je(new ri(e));
}
function lg(e) {
  return e instanceof ri;
}
function VT(e) {
  return e?.type === wc;
}
const ug = "table:row", qd = "immutable-table-row", dg = 1, Oc = "tr", WT = ["type", "marker", "content"];
class Ki extends dr {
  __marker;
  __unknownAttributes;
  constructor(t = Oc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return qd;
  }
  static clone(t) {
    return new Ki(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return HT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Oc).setUnknownAttributes(t.unknownAttributes);
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
      type: qd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: dg
    };
  }
}
function HT(e, t) {
  return Je(new Ki(e, t));
}
const fg = "table:cell", $d = "immutable-table-cell", pg = 1, Rc = "tc1", GT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function JT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Bi extends dr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Rc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return $d;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Bi(r, n, i, s, o);
  }
  static importJSON(t) {
    return YT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Rc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = JT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: $d,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: pg
    };
  }
}
function YT(e, t, r, n) {
  return Je(new Bi(e, t, r, n));
}
function Ws(e, t) {
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function Yt(e, t) {
  const r = Ws(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Ss(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function XT(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function QT(e) {
  return Ss(e) ? void 0 : { closed: "false" };
}
function ZT(e, t, r, n) {
  const i = t.getMarker(), s = Wl(t), o = XT(t);
  if (n) {
    e.append(gt(i, "opening", s));
    const [a] = r;
    zi(a) && !a.getTextContent().startsWith(D) && a.setTextContent(D + a.getTextContent());
  }
  e.append(...r), o && e.append(gt(i, "closing", s));
}
function Hn(e) {
  return Ae(e, F) ?? void 0;
}
function eC(e) {
  let t = e.getParent();
  for (; F(t); )
    t = t.getParent();
  return t;
}
function qc(e) {
  const t = hg(e);
  return e.getChildren().every((r) => O(r) || t && se(r, ue) === "attribute" || M(r) && r.getTextContent().replaceAll(D, "") === "");
}
function hg(e) {
  return Ss(e);
}
function tC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Tr(r, ra(e.getMarker())) : "";
  n !== "" && t.insertAfter(Te(n)), e.remove();
}
function rC(e, t) {
  if (Ss(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(gt(e.getMarker(), "closing", Wl(e)));
}
function nC(e, t) {
  return F(e) && !Ss(e) && !Ss(t);
}
function iC(e, t, r) {
  qc(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && zi(n) && !n.getTextContent().startsWith(D) && n.setTextContent(D + n.getTextContent()), e.append(...t);
}
function sC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = hg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = O(l) && l.getMarkerSyntax() === "closing", f = s && se(l, ue) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = nC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      iC(e, o, n);
    else {
      const l = Kr(t.getMarker(), QT(t));
      ZT(l, t, o, n), e.insertAfter(l), qc(l) ? l.remove() : c = l;
    }
  i && !a && rC(t, n), qc(t) && tC(t, c);
}
function wi(e, t) {
  let r = e.getParent();
  for (; F(r); )
    sC(e, r, t), r = e.getParent();
}
function ua(e) {
  if (M(e) && !O(e)) {
    const t = ca(e);
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      ua(t);
      return;
    }
    e.selectEnd();
  }
}
const _i = /* @__PURE__ */ new WeakMap();
function oC(e, t) {
  return _i.set(e, t), () => {
    _i.get(e) === t && _i.delete(e);
  };
}
function Id(e) {
  return _i.get(e);
}
function aC(e) {
  return _i.get(fn())?.has(e.getKey()) ?? !1;
}
function cC(e) {
  _i.get(fn())?.add(e.getKey());
}
function lC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function $c(e) {
  return !!(e.opener || e.value || e.closer);
}
function Ld(e) {
  return /^\s/.test(e);
}
function Xl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Ld(t) || !Ld(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function da(e, t, r) {
  return r.wantsRun ? Xl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : lC(t);
}
function uC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Xl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function gg(e, t) {
  return !$c(e.scanPieces(t));
}
function Hs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!da(e, n, r))
    return !1;
  const i = N();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || vo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function dC(e, t, r, n) {
  return !r.wantsRun || $c(n) || Wb(bs) ? !1 : fn().getEditorState().read(() => {
    const i = ne(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : $c(e.scanPieces(i));
  });
}
function fC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Dd(e) {
  const t = Te(e);
  return St(t, ue, "attribute"), t;
}
function pC(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = hh(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function hC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    M(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Dd(n.valueText));
    return;
  }
  const l = pC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = gt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : M(d) ? Xl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Dd(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(gt(a === "selfClosing" ? "" : o(t), a));
}
function vs(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (da(e, i, n) && !aC(t)) {
    if (dC(e, t, n, i)) {
      cC(t);
      return;
    }
    if (!Hs(e, t)) {
      if (!n.wantsRun) {
        fC(i);
        return;
      }
      hC(e, t, i, n);
    }
  }
}
function gC(e, t, r) {
  vs(e, t), t.isAttached() && Hs(e, t) && r.add(t.getKey());
}
function Gs(e) {
  if (!M(e))
    return !1;
  if (O(e) || $e(e) || Yr(e))
    return !0;
  const t = se(e, ue);
  return t === "attribute" || t === wr;
}
function Ql(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Hr(e) && F(e.getParent())) : !1;
}
function mC() {
  const e = N();
  return P(e) ? Ql(e.focus.getNode(), e.focus.offset) : !1;
}
function mg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return M(t) && Gs(t) ? t : void 0;
}
function yC(e) {
  const t = mg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function bC(e) {
  const t = mg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Ud(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Fd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function kC(e, t) {
  let r = bC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!M(n))
      return;
    if (!Gs(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function zd(e, t) {
  const r = kC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Zl(e) {
  if (e.isCollapsed()) {
    const a = yC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Ud(r), Ud(n)], s = zd(r, "next"), o = zd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Fd(r, i[0]), Fd(n, i[1]), !1) : !0;
}
const Eo = "verse-block", yg = 1, xC = "verse-block";
class ji extends dr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Eo;
  }
  static clone(t) {
    return new ji(t.__number, t.__key);
  }
  static importJSON(t) {
    return TC().updateFromJSON(t);
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
    return Uh(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(xC), Kd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Kd(r, this.__number), !1;
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
      type: Eo,
      number: this.getNumber(),
      version: yg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Kd(e, t) {
  const { start: r, end: n } = Uh(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Bd(e, "data-verse-start", i ? r : NaN), Bd(e, "data-verse-end", i ? n : NaN);
}
function Bd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function TC(e) {
  return Je(new ji(e));
}
function Ms(e) {
  return e instanceof ji;
}
function CC(e) {
  return e?.type === Eo;
}
const _C = [
  It,
  Or,
  Ft,
  bt,
  be,
  Pe,
  lr,
  qr,
  ti,
  Vr,
  Jr,
  ct,
  hn,
  ri,
  Ki,
  Bi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Wr,
  {
    replace: Tl,
    with: () => ir(),
    withKlass: hn
  }
], Ao = {
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
}, SC = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function vC(e) {
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
      type: SC[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: _r(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function jd(e, t, r) {
  const n = {
    type: ar,
    version: or,
    content: e
  }, i = t.serializeEditorState(n, r);
  return ia(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const bg = "v", kg = 1, MC = "verse-selected";
class wt extends Ls {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = bg, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => PC(t) ? {
        conversion: AC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return eu().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Tc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Xn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Tc, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Gt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      ko + this.getNumber() + ko
    );
    return E(EC, { nodeKey: this.getKey(), text: t });
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
      version: kg
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Lh(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function EC({ nodeKey: e, text: t }) {
  const [r] = uk(e);
  return E("span", { className: r ? MC : void 0, children: t });
}
function AC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: eu(t) };
}
function eu(e, t, r, n, i, s) {
  return Je(new wt(e, t, r, n, i, s));
}
function PC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === bg;
}
function ni(e) {
  return e instanceof wt;
}
function NC(e) {
  return e?.type === wt.getType();
}
function me(e) {
  return $e(e) || ni(e);
}
function xg(e) {
  return Ph(e) || NC(e);
}
function wC(e) {
  return OC(e).find((t) => le(t));
}
function OC(e) {
  return e.some(Ms) ? e.flatMap((t) => Ms(t) ? t.getChildren() : t) : e;
}
function fa(e) {
  return L(e) ? Ms(e) ? e.getChildren().flatMap(fa) : e.getChildren() : [];
}
function RC(e, t) {
  return fa(e).find((i) => me(i) && Kl(t, i.getNumber()));
}
function qC(e, t) {
  return t === 0 ? wC(e) : e.map((r) => RC(r, t)).filter((r) => r)[0];
}
function Po(e) {
  return fa(e).find((r) => me(r));
}
function Tg(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (me(i))
      return i;
  }
}
function $C(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (me(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ge(r); ) {
    const n = Po(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function No(e) {
  return fa(e).findLast((t) => me(t));
}
function IC(e) {
  if (!$e(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function LC(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function DC(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return LC(t, e, r);
  if (M(e)) {
    const n = IC(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Ga(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function UC(e) {
  const t = Nc(e);
  if (!(!t || Ge(t)))
    return me(t) ? t : No(t) ?? nu(t);
}
function FC(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return Ga(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (DC(e, t)) {
    const i = UC(e);
    return i ? Ga(i) : { verseNum: n };
  }
  return Ga(e);
}
function zC(e) {
  return Wx(e) || ni(e);
}
function tu(e) {
  if (M(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(D) && e.setTextContent(`${t} `);
  }
}
function Cg(e) {
  if (M(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Ic(e, t) {
  return e.getEditorState().read(() => !ne(t));
}
function KC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ru(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && L(i) && L(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && L(i)) {
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
      let s = Vd(i);
      for (; s && !Ge(s); ) {
        const o = Po(s);
        if (o) {
          n = o;
          break;
        }
        s = Vd(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Po(s);
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
function BC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ru(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = Tg(i, r.getIndexWithinParent())), !n && i) {
      let o = Wd(i);
      for (; o && !Ge(o); ) {
        const a = No(o);
        if (a) {
          n = a;
          break;
        }
        o = Wd(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ge(s); ) {
      const o = No(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Vd(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Wd(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function ru(e, t) {
  if (L(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && me(n))
      return n;
    const i = Tg(e, t.anchor.offset);
    if (i)
      return i;
    const s = Po(e);
    if (s)
      return s;
  }
  return nu(e);
}
function nu(e) {
  if (!e || Ge(e))
    return;
  if (me(e))
    return e;
  let t = Nc(e);
  for (; t; ) {
    if (Ge(t))
      return;
    if (me(t))
      return t;
    const r = No(t);
    if (r)
      return r;
    t = Nc(t);
  }
}
const jC = ["style"], VC = ["style", "code"], wo = ["style", "cid"], WC = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], HC = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], GC = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], JC = ["style", "caller", "category", "contents"], YC = ["tag", "marker", "contents"], XC = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Es = `
`;
function QC(e, t) {
  const r = ne(e);
  if (!Ut(r))
    return;
  const n = iu(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function iu(e, t = "delta-doc") {
  if (!e)
    return;
  const r = ta();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Oi(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Oi(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (jr(l) || Ut(l))
        return n;
      Ke(l) && (a = l);
    }
    if (Ke(l) && (i.includes(l) || i.push(l)), _g(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += su(l, t);
  }
  if (a)
    return n;
}
function Hd(e, t, r = "delta-doc") {
  if (e.length < 2 || !t_(e[0]) || !e_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => ZC(n, r)?.getKey());
}
function ZC(e, t = "delta-doc") {
  const r = ta();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Oi(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Oi(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Ke(a) && (i.includes(a) || i.push(a)), _g(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = su(a, t);
    if (jr(a) && l > 0 && e >= n && e < n + l || Ut(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Oi(e, t) {
  return e ? t ? !vo(t.node, e.getKey()) : !0 : !1;
}
function jr(e) {
  return M(e) && !Ut(e);
}
function Ut(e) {
  return Ge(e) || me(e) || Ze(e) || K(e) || ze(e) || Yr(e);
}
function ln(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function e_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && XC.includes(t);
}
function t_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function _g(e, t) {
  return K(e) || ze(e) ? !0 : t === "apply" && L(e) && Ut(e);
}
function Sg(e) {
  const t = e.getParent();
  return Nt(e) && le(t) && t.getFirstChild() === e;
}
function Lc(e) {
  const t = e.getParent();
  return t !== null && Ae(t, Ie) !== null;
}
function r_(e) {
  const t = e.getParent();
  return F(t) && e.getTextContent() === Jt && t.getChildrenSize() === 1;
}
function n_(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === Dt(t.getCaller());
}
function i_(e) {
  return !ig(e) && su(e, "delta-doc") === e.getTextContentSize();
}
function su(e, t) {
  if (Ut(e))
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
    (Ks(e) || Sg(e) || se(e, ue) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    se(e, ue) === "attribute" || Lc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Al) || r_(e) || n_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Dc(e, t) {
  const r = { insert: e.__text }, n = se(e, pn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = vg(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Gd(e) {
  const t = new as();
  return e.isEmpty() || e.read(() => {
    const r = je();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && vr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = s_();
    for (const s of i)
      t.push(s);
  }), t;
}
function pa(e, t) {
  const r = [], n = ei(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Jd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Jd(c, n.length, n, i, s, o, a));
  return r;
}
function s_() {
  return pa();
}
function Jd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return o_(e, a, n), a_(e, a, i, s, o), c_(e, t, r, i, o, s, a), Ge(e) && a.push(f_(e)), me(e) && a.push(h_(e)), Ze(e) && a.push(g_(e)), Yr(e) && a.push(m_(e)), u_(e, a, s), l_(e, a, s), x_(c, s), a;
}
function o_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ke(n) ? t.push(d_(n)) : le(n) ? t.push(p_(n)) : vr(n) && t.push({ insert: Es });
  }
  Ke(e) && (r.includes(e) || r.push(e));
}
function a_(e, t, r, n, i) {
  if (!M(e) || $e(e) || Yr(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = Lt(e) !== void 0;
  if (O(e) && (o || Sg(e) || Lc(e) || ig(e)) || se(e, ue) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (zs(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && O(c) && c === s.getFirstChild() && a === Dt(s.getCaller()))
    return;
  const l = F(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(ca(e)));
  const u = a.startsWith(Al) || se(e, ue) === "attribute" || Lc(e), d = !!l && a === Jt && l.getChildrenSize() === 1, f = ha(e, n), p = f ? r.filter((y) => f.children.includes(y)) : r, h = Dc(e, p);
  if (h.insert = a, f) {
    if (!a || a === D || u)
      return;
    f.contentsOps?.push(h);
  } else
    d || u || t.push(h);
  const g = a !== "" && !d && !(u && l);
  if (r.length > 0 && g)
    for (const y of r)
      i.add(y);
}
function c_(e, t, r, n, i, s, o) {
  F(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Oi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = b_(c), u = ha(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function l_(e, t, r) {
  if (!K(e))
    return;
  const n = y_(e), i = ha(e, r), s = {
    node: e,
    children: ei(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function u_(e, t, r) {
  if (!ze(e))
    return;
  const n = k_(e), i = ha(e, r), s = {
    node: e,
    children: ei(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Cn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function d_(e) {
  const t = { style: Ts, code: e.__code };
  return Cn(t, e), { insert: Es, attributes: { book: t } };
}
function f_(e) {
  const t = { style: _o, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Cn(t, e), { insert: { chapter: t } };
}
function p_(e) {
  const t = { style: e.__marker };
  return Cn(t, e), { insert: Es, attributes: { para: t } };
}
function h_(e) {
  const t = { style: So, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Cn(t, e), { insert: { verse: t } };
}
function g_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Cn(t, e), { insert: { milestone: t } };
}
function m_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function y_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Cn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = se(e, pn);
  return n && (r.attributes = { segment: n }), r;
}
function b_(e) {
  const t = { insert: "" }, r = vg([e]);
  return r && (t.attributes = { char: r }), t;
}
function k_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Cn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function ha(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function x_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Oi(t[r].node, e) && t.splice(r, 1);
}
function vg(e) {
  if (e.length === 0)
    return;
  const t = e.map(T_);
  return t.length === 1 ? t[0] : t;
}
function T_(e) {
  const t = { style: e.__marker }, r = se(e, Bn);
  return r && (t.cid = r), Cn(t, e), t;
}
function ou(e) {
  let t = 0;
  for (const { node: r } of ta())
    if (K(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function C_(e) {
  let t = 0;
  for (const { node: r } of ta())
    if (K(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const Mg = 1;
class sr extends Ls {
  __caller;
  __previewText;
  __onClick;
  constructor(t = ys, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new sr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => S_(t) ? {
        conversion: __,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return au().updateFromJSON(t);
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
    return r && Xn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => v_(t, n), (l) => M_(t, n, s, l), () => E_(t, n), () => A_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return E("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === ys && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Yp && i ? (
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
      version: Mg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function __(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: au(t, r) };
}
function au(e, t, r) {
  return Je(new sr(e, t, r));
}
function S_(e) {
  return e ? e.classList.contains(sr.getType()) : !1;
}
function mt(e) {
  return e instanceof sr;
}
function v_(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function M_(e, t, r, n) {
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
function E_(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return pa(r);
  });
}
function A_(e, t) {
  return e.getEditorState().read(() => ou(t));
}
const P_ = [
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
], N_ = ["†"];
function ga(e) {
  if (Eg())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Yd(t), [s, o] = Yd(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Xd(n, i), [s, o] = Xd(s, o);
  const a = Fn();
  return a.anchor = rr(n.getKey(), i, Qd(n)), a.focus = rr(s.getKey(), o, Qd(s)), a;
}
function cu() {
  if (Eg())
    return;
  const e = N();
  if (!e || !P(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Oo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Oo(i, s);
  return { start: n, end: o };
}
function Yd(e) {
  if (Lb(e)) {
    const t = Ep(e.jsonPath);
    let r = je();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = Fi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : oT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, aT(r, e.offset)] : [void 0, void 0];
  }
  if (Db(e) || Ub(e)) {
    const t = es(e.jsonPath);
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
  if (Fb(e)) {
    const t = es(e.jsonPath);
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
  if (zb(e)) {
    const t = es(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = Ja(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && M(n) ? [n, 0] : [void 0, void 0];
  }
  if (Kb(e)) {
    const t = es(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = Ja(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && M(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Bb(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = es(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = Ja(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && M(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${jb(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Xd(e, t) {
  if (!fr(e))
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
function Qd(e) {
  return L(e) ? "element" : "text";
}
function Ja(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (fr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function es(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Ep(r);
  let i = je();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = Fi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Oo(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = w_(e), i = n ? Pn(Rn(n)) : Pn(Rn(e));
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
  if (xe(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (M(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Oo(n, s);
    }
    const i = sa(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Oo(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (fr(r)) {
      const i = r.getTextContent().endsWith("*"), s = Pn(Rn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = zh(e, t);
    return n.type === "text" ? {
      jsonPath: Pn([...Rn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: Pn(Rn(e)),
      offset: n.index
    };
  }
  if (M(e)) {
    const r = sT(e, t);
    if (r)
      return {
        jsonPath: Pn([
          ...Rn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: Pn(Rn(e)), offset: t };
}
function w_(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = O_(e);
  return r && !Ke(r) && !M(r) && !xe(r) ? r : t;
}
function O_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Bs(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Rn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = sa(r);
    if (!n)
      break;
    const i = iT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Eg() {
  for (let e = je().getFirstChild(); e; e = e.getNextSibling())
    if (Ms(e))
      return !0;
  return !1;
}
function R_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Ag(e, t, r, n, i, s, o) {
  if (!Pe.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? ga(r) : N();
  if (!P(a))
    return;
  const c = I_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? R_(e, s), u = Pg(e, l, c, i, s, void 0, void 0);
  return $_(u, a, i), u;
}
function lu(e) {
  return e !== "expanded";
}
function q_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!M(r) || !F(r.getParent()))
    return;
  if (O(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return O(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function $_(e, t, r) {
  const n = lu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Jx(t), Zl(t);
  const i = q_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(F)?.selectEnd();
}
function hi(e, t, r) {
  const n = Kr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(gt(e)) : r?.markerMode === "visible" && n.append(zr("marker", Le(e)));
  const s = t === "" ? Jt : i ? D + t : t;
  return n.append(Te(s)), n;
}
function I_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(hi("fr", f, n)), !e.isCollapsed()) {
        const p = ef(e);
        p.length > 0 && o.push(hi("fq", p, n));
      }
      o.push(hi("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(hi("xo", f, n)), !e.isCollapsed()) {
        const p = ef(e);
        p.length > 0 && o.push(hi("xq", p, n));
      }
      o.push(hi("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Pg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : lu(n?.noteMode), l = Ol(e, t, c);
  s && St(l, pn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = gt(e), u && d.setMode("token"), a || (f = gt(e, "closing"))) : n?.markerMode === "visible" && (d = zr("marker", Le(e) + " "), a || (f = zr("marker", nt(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    p = Te(Dt(l.__caller)), u && p.setMode("token"), l.append(p, ...r);
  else {
    const h = () => js(), g = r.flatMap(j_(h));
    if (t === "")
      l.append(...g);
    else {
      const y = Fl(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = au(l.__caller, y, k), l.append(p, h(), ...g);
    }
  }
  return f && l.append(f), l;
}
function xr(e) {
  if (typeof e == "string") {
    const t = ne(e);
    return K(t) ? t : void 0;
  }
  return C_(e);
}
function Uc(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (ni(n) || !n) {
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
      L_(i);
    else {
      const s = uu(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function uu(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return O(r) && r.getMarkerSyntax() === "closing" || fr(r) && r.getTextContent() === nt(e.getMarker()) ? t : -1;
}
function L_(e) {
  const t = uu(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  M(r) && !Bs(r) ? r.selectEnd() : e.select(t, t);
}
function Ng(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (M(r) && !Gs(r)) {
    r.select(0, 0);
    return;
  }
  const n = e.getParent();
  if (!n)
    return;
  const i = e.getIndexWithinParent() + 1;
  n.canBeEmpty() ? n.select(i, i) : du(n, i, { announce: !t });
}
function du(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!K(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Fn();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Fr(i), r && fn().dispatchCommand(qt, void 0);
}
function Zd(e, t, r) {
  const n = Br(e), i = D_(e, n);
  if (r && Og(i, t, r, wg(e, n)))
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
function D_(e, t) {
  const r = [];
  for (const { node: n } of ei(e))
    !M(n) || Ae(n, Ie) || (fu(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: ca(n) }) : U_(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function U_(e, t) {
  return Yr(e) ? !0 : O(e) && !t.is(e.getParent());
}
function wg(e, t) {
  return (r) => {
    let n = r;
    for (; !n.getPreviousSibling(); ) {
      const o = n.getParent();
      if (!o || o.is(e))
        return;
      n = o;
    }
    const i = n.getPreviousSibling(), s = L(i) ? i.getLastDescendant() : i;
    if (M(s) && (t?.is(s) || fu(s, t)))
      return s;
  };
}
function Og(e, t, r, n) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === r.index)
      return F_(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function F_(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function z_(e, t, r) {
  const { opener: n, value: i, closer: s } = Vl(e);
  if (!i)
    return !1;
  const o = K_(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = Br(e);
    if (Og(c, t, r, wg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function K_(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function fu(e, t) {
  return !M(e) || Bs(e) || Gs(e) ? !1 : !t || !e.is(t);
}
function B_(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(F))
    return;
  const t = Br(e);
  for (const { node: n } of ei(e))
    if (fu(n, t))
      return;
  const r = uu(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function j_(e) {
  return (t) => $t(t) ? [t] : [t, e()];
}
function V_(e) {
  const t = e.getParent();
  return t !== null && Ae(t, K) !== null;
}
function ef(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Cl(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || mt(c) || V_(c)) && !O(c) && !Yr(c) && se(c, ue) !== "attribute") {
      if (me(c)) {
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
const pu = [
  sr,
  wt,
  ..._C
], W_ = [
  ji,
  ...pu
], H_ = Tn((e, t) => {
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
function G_() {
  const [e, t] = pe(void 0), [r, n] = pe(), i = Y(null), s = ye((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = xk(l, c, () => {
      Tk(l, c, {
        placement: "bottom-start",
        middleware: [Ck(), _k()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = ye(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return B(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function J_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = G_();
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
const Y_ = wb(H_);
function Rg({ isOpen: e = !1, children: t }) {
  const r = Y(null), { coords: n, placement: i } = J_({ isOpen: e, floatingBoxRef: r }), s = We(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Ln(
    E(Y_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const qg = vp(void 0);
function hu() {
  const e = Mp(qg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function X_(e, t) {
  const [r, n] = pe(0), [i, s] = pe(-1), o = We(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ye(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = ye(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = ye(() => {
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
function Q_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = X_(t, r);
  return E(qg.Provider, { value: i, children: E("div", { ...n, children: e }) });
}
const $g = Tn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = hu(), u = ye((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = ye((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return E("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function Z_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Y(null), { state: { activeIndex: i, menuItems: s } } = hu(), o = We(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = We(() => {
    const c = o(s);
    return t ? Ob.map(c, (l, u) => Rb(l) && l.type === $g && l.props.index === void 0 ? qb(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return B(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), E("div", { ref: n, role: "menu", ...r, children: a });
}
const eS = (e, t, r) => po(e, r).toLowerCase().includes(t.toLowerCase()), tf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", po = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function tS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? tf(r[0]) : "") : (u = n || (r.length > 0 ? tf(r[0]) : ""), d = (h, g) => eS(h, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return d(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const y = (C) => (p.has(C) || p.set(C, po(C, f).toLowerCase()), p.get(C) ?? ""), k = a ? po(h, f) : y(h), b = a ? po(g, f) : y(g);
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
const Ya = {
  Root: Q_,
  Options: Z_,
  Option: $g
};
function rS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return We(() => tS({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function nS() {
  const { moveUp: e, moveDown: t, select: r } = hu();
  return We(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const iS = () => {
  const e = nS(), [t] = ae();
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
function sS() {
  return iS(), null;
}
const oS = ["Shift", "Control", "Alt", "Meta"];
function Ig(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), u = s !== void 0, [d, f] = pe(""), p = u ? s ?? "" : d, h = rS({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return B(() => {
    a?.(p, h);
  }, [a, p, h]), B(() => l.registerCommand(Pr, (y) => {
    if (u || c?.includes(y.key) || oS.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const b = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((C) => C.slice(0, -1));
      }
    }[y.key];
    return b ? (y.stopPropagation(), y.preventDefault(), b(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((C) => C + y.key), !0) : !1;
  }, Me), [l, u, p, o, n, c]), Ee(Ya.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => g(y), children: [!u && E("input", { value: p, type: "text", disabled: !0 }), E(sS, {}), E(Ya.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((b, C) => Ee(Ya.Option, { index: C, children: [E("span", { className: "label", children: b.label ?? b.name }), E("span", { className: "description", children: b.description })] }, b.name)) })] });
}
function aS({ trigger: e, items: t }) {
  const [r] = ae(), [n, i] = pe(!1), s = ye((o) => {
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
  }), [r]), t && E(Rg, { isOpen: n, children: ({ placement: o }) => E(Ig, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function cS({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
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
function ps(e, t) {
  return `${e}:${t}`;
}
function lS(e, t) {
  B(() => {
    if (!e.hasNodes([ot]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return we(Kp(e, ot, (n) => xs(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], h = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, h, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(ot, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ne(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : xe(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!ot.isReservedType(c))
              for (const u of l) {
                let d = t.get(ps(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(ps(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(ps(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const uS = Tn(function({ logger: t }, r) {
  const [n] = ae(), i = We(() => /* @__PURE__ */ new Map(), []);
  lS(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(ps(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = ne(u);
        xe(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Co(d));
      }
  };
  return Yo(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (ot.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = ga(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), dh(p, a, c, l, u, d, f);
      }, { tag: Cc });
    },
    removeAnnotation(o, a) {
      if (ot.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(ps(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Cc });
    }
  })), null;
}), dS = [];
function fS({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = dS, onChange: n }) {
  const [i] = ae();
  return Is(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(_l) && !u.has(Qp) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = pS(i, s);
        d.length !== 0 && n(o, i, u, d, l);
      });
  }, [i, e, t, r, n]), null;
}
function pS(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new as();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ne(i), o = s !== null && Lt(s) !== void 0;
    if (t.size === 1 && M(s) && !o && i_(s)) {
      const a = iu(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = ne(i);
          return new as([M(d) ? Dc(d) : { insert: "" }]);
        }), l = new as([Dc(s)]), u = new as(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Gd(r), c = Gd(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const gu = "formatted", Lg = "unformatted", Dg = "paragraph-structure", mu = "standard", Ug = "block-verse", hS = {
  [gu]: "Formatted",
  [Lg]: "Unformatted",
  [Dg]: "Paragraph Structure",
  [mu]: "Standard",
  [Ug]: "Block Verse"
};
function ii(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let yu, bu;
function gS(e) {
  const t = ku(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  yu = e, bu = t;
}
gS(gu);
const XN = () => yu, ma = () => bu;
function ku(e) {
  let t;
  switch (e ?? yu) {
    case gu:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Lg:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Dg:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case mu:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Ug:
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
function QN(e) {
  if (!e)
    return;
  const t = rf(e);
  return Object.keys(hS).find((r) => Kt(rf(ku(r)), t));
}
const mS = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function rf(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...mS, ...t };
}
function Js(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function yS(e) {
  if (e)
    return As(e) ? wt : e.markerMode === "editable" ? bt : wt;
}
function As(e) {
  return e?.verseLayout === "block";
}
function bS(e) {
  const t = [], r = e ?? bu;
  return r && (t.push(`${Lk}${r.markerMode}`), r.hasSpacing && t.push($k), r.isFormattedFont && t.push(Ik)), t;
}
function kS(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += xS(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), CS(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += _S(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), vS(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function xS(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), TS(t, e.retain, e.attributes, r, n)), e.retain);
}
function TS(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = je();
  function l(u) {
    if (s <= 0)
      return !0;
    if (jr(u)) {
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
          if (gn(r)) {
            const b = g.getParent();
            if (F(b)) {
              const C = r.char;
              let A;
              Array.isArray(C) ? a >= 0 && a <= C.length - 1 && (A = C[a]) : a === 0 && (A = C);
              const _ = A ? jn(A, b) : !1;
              if (_ && Array.isArray(C) && C.length > 1) {
                const w = Te("");
                g.replace(w);
                const $ = typeof r.segment == "string" ? r.segment : void 0, z = Vi(C.slice(1), n, g, $);
                let S = w;
                for (const W of z)
                  S.insertAfter(W), S = W;
                w.remove(), Bt(r, g);
              } else if (_)
                Bt(r, g);
              else {
                g.remove();
                const w = nf(g, r, n, i);
                if (w && w.length > 0) {
                  let $ = b;
                  for (const z of w)
                    $.insertAfter(z), $ = z;
                }
              }
            } else {
              const C = Te("");
              g.replace(C);
              const A = nf(g, r, n, i);
              if (A && A.length > 0) {
                let _ = C;
                for (const w of A)
                  _.insertAfter(w), _ = w;
                C.remove();
              } else
                C.replace(g);
            }
          } else
            Bt(r, g);
          s -= h;
        }
      }
      o += d;
    } else if (Ut(u))
      e <= o && o < e + t && s > 0 && (sf(u, r), s -= 1), o += 1;
    else if (F(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (gn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Fc(u, p.style), typeof p.cid == "string" && St(u, Bn, () => p.cid);
            const h = Be(p, wo);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || qS(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && xc(u), !0;
        }
      }
      d && xc(u), a -= 1;
    } else if (Ke(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!vr(u))
          sf(u, r);
        else if (xu(r)) {
          const p = Kg(r.para, n);
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
function nf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Vi(t.char, r, e, i), o = s.find(F);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Bt(t, e);
    return;
  }
  const a = {};
  Wg.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Bt(t, e), s;
}
function Fg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(Le(t))) : $t(r) && r.getTextType() === "marker" && r.setTextContent(Le(t) + D);
}
function Fc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = F(e.getParent()), i = e.getFirstChild();
  $t(i) && i.getTextType() === "marker" && i.getTextContent() === Le(r, n) && i.setTextContent(Le(t, n));
  const s = e.getLastChild();
  $t(s) && s.getTextType() === "marker" && s.getTextContent() === nt(r, n) && s.setTextContent(nt(t, n));
}
function sf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && F(e) && gn(t)) {
      const i = zc(n);
      if (Fc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        St(e, Bn, () => o);
      }
      const s = Be(i, wo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ge(e) || me(e) || Ze(e) || K(e) || ze(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ke(e) || le(e) || F(e)) && (r === "style" && le(e) ? Fg(e, n) : r === "style" && F(e) ? Fc(e, n) : r === "code" && ke(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && St(e, pn, () => n));
  }
}
function CS(e, t, r) {
  if (t <= 0)
    return;
  const n = je();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (jr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Ut(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Ke(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Ke(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(ir(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && at(p)) {
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
              jr(k) ? h += k.getTextContentSize() : Ut(k) && (h += 1), i = b;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(ir(), !0);
        } else le(a) ? a.replace(ir(), !0) : a.remove();
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
function _S(e, t, r, n, i) {
  if (t === Es)
    return of(e, r, n, i);
  if (t.endsWith(Es) && !xu(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (gn(r))
        throw new Error("Text + LF should not have char attributes");
      o += Ro(e, s, r, i);
    }
    return o += of(e + o, r, n, i), o;
  } else return gn(r) ? SS(e, t, r, n, i) : Ro(e, t, r, i);
}
function SS(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Te(t === "" ? Jt : t);
  Bt(r, s);
  let o;
  {
    let y = function(k) {
      if (jr(k)) {
        const b = k.getTextContentSize();
        if (e >= g && e < g + b) {
          const C = k.getParent();
          return F(C) && (o = C), !0;
        }
        g += b;
      } else if (Ut(k))
        g += 1;
      else if (F(k)) {
        const b = k.getChildren();
        for (const C of b)
          if (y(C))
            return !0;
      } else if (L(k)) {
        const b = k.getChildren();
        for (const C of b)
          if (y(C))
            return !0;
        Ke(k) && (g += 1);
      }
      return !1;
    };
    const h = je();
    let g = 0;
    y(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && jn(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (jn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Vi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(F);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Ro(e, t, void 0, i);
  const f = {};
  for (const [h, g] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof g == "string" && (f[h] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const h of u)
    if (!zg(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Ro(e, t, void 0, i));
}
function Ro(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = je();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (jr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = Te(t);
        if (Bt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          F(f) && !gn(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Ut(c))
      s += 1;
    else if (F(c)) {
      if (!o && e === s) {
        const d = Te(t);
        Bt(r, d);
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
        const d = Te(t);
        return Bt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Ke(c)) {
      if (!o && e === s) {
        const d = Te(t);
        Bt(r, d);
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
        const d = Te(t);
        return Bt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = Te(t);
    Bt(r, c);
    const l = ir().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function zg(e, t, r) {
  const n = je();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(ir().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (at(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(ir().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (jr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Ut(l))
        i += 1;
      else if (F(l)) {
        if (o(l))
          return !0;
      } else if (Ke(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (vr(u) && Ke(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(ir().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      at(a) ? vr(a) && le(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !at(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (F(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !at(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function vS(e, t, r, n, i) {
  let s;
  return ln("chapter", t) ? s = ES(t.insert.chapter, r) : ln("verse", t) ? s = AS(t.insert.verse, r) : ln("ms", t) ? s = PS(t.insert.ms) : ln("note", t) ? s = Bg(t, r, n) : ln("unknown", t) ? s = jg(t, r, n, i) : ln("unmatched", t) && (s = wS(t.insert.unmatched, r)), s ? zg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function of(e, t, r, n) {
  let i;
  xu(t) ? i = Kg(t.para, r) : RS(t) && (i = MS(t.book)), i ??= ir();
  const s = i, o = le(s), a = vr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (jr(d)) {
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
    } else if (Ut(d))
      c += 1;
    else if (Ke(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (vr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (le(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && le(d) && s)
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
  return u(je()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function MS(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Ts || !r || !It.isValidBookCode(r))
    return;
  const n = Be(e, VC);
  return mh(r, n);
}
function Kg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Be(e, jC), i = Ai(r, n);
  if (!ii(t))
    return i;
  if (t.markerMode === "editable")
    i.append(gt(r), js());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Le(r) + D;
    i.append(t.hasGutterParaMarkers ? ux(s) : zr("marker", s));
  }
  return i;
}
function ES(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Be(e, WC);
  let a;
  if (t.markerMode === "editable")
    a = bh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Ll(r, c, n, i, s, o);
  }
  return a;
}
function AS(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Be(e, HC);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Gt(r, n);
    c = Ah(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = eu(n, l, i, s, o, a);
  }
  return c;
}
function PS(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Be(e, GC);
  return th(t, r, n, s, i);
}
function Bg(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = Be(n.note, JC), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let d;
  u && typeof u == "string" && (d = u);
  const f = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (gn(h.attributes)) {
        const g = Vi(h.attributes.char, t, Te(h.insert), void 0, Vg(h.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...g);
      } else
        f.push(Te(h.insert));
  return Pg(i, s, f, t, r, d, l).setCategory(o).setUnknownAttributes(c);
}
function jg(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Be(i, YC), l = $l(s, o, c), u = a?.ops ?? [];
  u.length > 0 && NS(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && St(l, pn, () => d), l;
}
function NS(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (gn(s.attributes)) {
        const o = Te(s.insert), a = Vi(s.attributes.char, t, o, void 0, Vg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Te(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (ln("unknown", s)) {
        const o = jg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (ln("note", s)) {
        const o = Bg(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function wS(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Yl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Vg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function zc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Vi(e, t, r, n, i, s = !1, o = !1) {
  M(r) && r.getTextContentSize() === 0 && r.setTextContent(Jt);
  const a = () => {
    o && M(r) && r.getTextContent() !== Jt && r.setTextContent(D + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(zc), l = c[0], u = i?.[i.length - 1];
    if (F(u) && jn(l, u)) {
      if (c.length > 1) {
        const f = Vi(c.slice(1), t, r, void 0, void 0, !0, o);
        Xa(u, f);
      } else
        r && Xa(u, [r]);
      return [];
    }
    a();
    const d = c.reduceRight((f, p, h) => {
      const g = Kr(p.style, Be(p, wo));
      return typeof p.cid == "string" && St(g, Bn, () => p.cid), n && h === c.length - 1 && St(g, pn, () => n), f && (F(f) && (Za(f.getMarker(), f, t, !0), Qa(f, f, t, !0)), g.append(f)), g;
    }, r);
    return Za(l.style, d, t, s), Qa(d, d, t, s), [d];
  } else {
    const c = zc(e), l = i?.[i.length - 1];
    if (F(l) && jn(c, l))
      return r && Xa(l, [r]), [];
    a();
    const u = Kr(c.style, Be(c, wo));
    return typeof c.cid == "string" && St(u, Bn, () => c.cid), n && St(u, pn, () => n), r && u.append(r), Za(c.style, u, t, s), Qa(u, u, t, s), [u];
  }
}
function Xa(e, t) {
  const r = e.getLastChild();
  O(r) && r.getMarkerSyntax() === "closing" || $t(r) && r.getTextType() === "marker" && r.getTextContent() === nt(e.getMarker(), F(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function Qa(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && OS(e.getMarker(), t, r, !1, n);
}
function Za(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = gt(e, "opening", n) : r?.markerMode === "visible" && (i = zr("marker", Le(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function OS(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = gt("", "selfClosing") : s = gt(e, "closing", i) : r?.markerMode === "visible" && (s = zr("marker", n ? nt("") : nt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function RS(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function xu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function gn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function qS(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Bt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        St(t, pn, () => n);
        continue;
      }
      if ($S(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Wg = [
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
function $S(e) {
  return Wg.includes(e);
}
function Ri(e) {
  return $t(e) && ke(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function Hg(e) {
  const t = Ws(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function Tu(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(wp(r) && t.offset === 0 || ke(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Ri);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!ke(s))
    return !1;
  const o = Hg(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function ho(e) {
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
    const n = e ? Oh(t) : Ul(t);
    return Ri(n);
  }
  return Tu(t) && t.isCollapsed();
}
function IS(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = Ae(t.anchor.getNode(), ke);
  if (!r || !Ri(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return ho(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Ri)) {
    const n = Hg(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function oo() {
  const e = N();
  return P(e) && Tu(e), !1;
}
function LS() {
  const e = N();
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !ke(r) || !Ri(r.getFirstChild()) ? !1 : (Yt(r, 1), !0);
}
function DS(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => fr(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function US() {
  const [e] = ae();
  return B(() => e.registerCommand(Zo, (t) => (FS(t), !1), zn), [e]), B(() => we(
    e.registerCommand(ea, ho, Me),
    e.registerCommand(Sl, ho, Me),
    e.registerCommand(bo, ho, Me),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(bo, IS, Cr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(Us, oo, ve),
    e.registerCommand(nr, oo, ve),
    e.registerCommand(cr, oo, ve),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Pp, oo, ve)
  ), [e]), B(() => we(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(qt, () => (LS(), !1), Me),
    e.registerNodeTransform(It, DS)
  ), [e]), null;
}
function FS(e) {
  if (zS(e.target))
    return;
  const t = N();
  P(t) && KS(t);
}
function Wi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Nt(t))
      r++, t = t.getNextSibling(), M(t) && t.getTextContent() === D && (r++, t = t.getNextSibling());
    else if (me(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Yt(e, r), !0);
}
function zS(e) {
  if (!Np(e))
    return !1;
  const t = Ui(e);
  if (!dx(t))
    return !1;
  const r = t.getParent();
  return r ? at(r) ? Wi(r) : (Yt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function KS(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ne(t.key);
  if (!Ke(r))
    return !1;
  const n = r.getFirstChild();
  return !fr(n) && !ni(n) ? !1 : Wi(r);
}
function BS() {
  const [e] = ae();
  return B(() => {
    const t = (r) => r instanceof KeyboardEvent && !jS(r) || !ya() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return we(
      e.registerCommand(Pr, t, Me),
      e.registerCommand(Us, t, Me),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(nr, t, ve),
      e.registerCommand(cr, t, ve),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(vl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Ui(r.target);
        return !n || !mn(n) ? !1 : (r.preventDefault(), !0);
      }, Me),
      e.registerCommand(ea, t, Me),
      e.registerCommand(Sl, t, Me),
      e.registerCommand(bo, t, Me)
    );
  }, [e]), null;
}
function jS(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function mn(e) {
  return Ae(e, Cu) ?? void 0;
}
function Cu(e) {
  return ze(e) || lg(e);
}
function ya() {
  const e = N();
  return P(e) ? mn(e.anchor.getNode()) !== void 0 || mn(e.focus.getNode()) !== void 0 : !1;
}
function VS(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function WS(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), VS(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function HS(e, t, r, n) {
  if (!av(t) || WS(e, r))
    return !1;
  const i = r === "up" ? BC(t) : KC(t);
  return i && n.preventDefault(), i;
}
function GS({ viewOptions: e }) {
  const [t] = ae();
  return JS(t, e), null;
}
function JS(e, t) {
  B(() => {
    if (!e.hasNodes([Or, wt, Pe]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = af(o), d = rv(i, cf(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return HS(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = af(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return cf(a, n.key) ? l = !c && df(i, "next") || !c && XS(i) || sv(i) || !c && s && uf(i, "next") : YS(a, n.key) && (l = !c && df(i, "previous") || !c && QS(i) || ov(i, t) || !c && s && uf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Pr, r, Me);
  }, [e, t]);
}
function af(e) {
  return e.dir || "ltr";
}
function cf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function YS(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Kc(e) {
  if (!F(e) || e.getMarker() !== "fp")
    return;
  const t = Lt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function XS(e) {
  const t = Kc(Ul(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Yt(t, 0), !0);
}
function QS(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Kc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : lf(n);
  }
  if (t.offset === 0) {
    const n = Kc(r);
    return n ? lf(n) : !1;
  }
  return !1;
}
function lf(e) {
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
const qo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function ZS(e) {
  if (qo)
    for (const { segment: r } of qo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function ev(e) {
  if (qo) {
    let n = 0;
    for (const { index: i } of qo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Gg(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function Jg(e) {
  return !!e && O(e) && mn(e) !== void 0;
}
function qi(e) {
  return M(e) && !e.isToken() && !Jg(e) && e.getTextContentSize() > 0;
}
function Yg(e) {
  return Qn(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : M(e) ? (e.isToken() || Jg(e)) && e.getTextContentSize() > 0 : Zn(e) ? !Ze(e) : !1;
}
function $i(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function ba(e, t, r) {
  for (let n = e; n; ) {
    if (Yg(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? $i(n, t, r);
      continue;
    }
    if (qi(n))
      return n;
    n = $i(n, t, r);
  }
}
function _u(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? $i(e, n, i) : r === "text" && Yg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : $i(e, n, i);
}
function ec(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = _u(e.node, e.offset, e.kind, "previous", t), n = ba(r, "previous", t);
  if (!n)
    return e;
  if (qi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function tv(e, t) {
  const r = e.getNode(), n = Gg(r);
  if (!n)
    return;
  if (e.type === "text" && qi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ec({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = _u(r, e.offset, e.type, t, n), s = ba(i, t, n);
  if (!s)
    return;
  if (qi(s)) {
    const c = s.getTextContent(), l = t === "next" ? ZS(c) : ev(c);
    return ec({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ec({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Xg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = tv(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && L(i.node) ? du(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function uf(e, t) {
  return Xg(e, t, "collapse");
}
function rv(e, t) {
  return Xg(e, t, "extend");
}
function nv(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && qi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = _u(n, e.offset, e.type, t, r);
  return ba(i, t, r) === void 0;
}
function iv(e, t) {
  const r = je();
  for (let n = e; n; ) {
    const i = $i(n, t, r), s = i && ba(i, t, r);
    if (!s)
      return;
    if (n = mn(s), !n)
      return s;
  }
}
function df(e, t) {
  const r = e.anchor, n = r.getNode();
  if (mn(n))
    return !1;
  const i = Gg(n);
  if (!i || !nv(r, t, i))
    return !1;
  const s = $i(i, t, je()), o = s && mn(s);
  if (!o)
    return !1;
  const a = iv(o, t);
  if (!a)
    return !0;
  if (qi(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function ff(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  du(t, r);
}
function sv(e) {
  const t = e.anchor.getNode(), r = Ul(e);
  if (K(r) && !O(r.getFirstChild())) {
    if (Ke(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(at(i) && Wi(i)) && i.selectStart(), !0;
      }
    } else return $t(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ke(t) && K(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : ff(r), !0;
  }
  const n = r?.getParent();
  if ($t(r) && K(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? ff(n) : n.selectEnd(), !0;
  }
  return !1;
}
function ov(e, t) {
  const r = Oh(e);
  if (Fs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && Ri(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (ke(o) && !r)
    return !0;
  if (K(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!ni(c) && !ke(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const u = r.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (Ke(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = Ae(c, (u) => K(u));
    if (K(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const d = l.getIndexWithinParent();
      return u.select(d, d), !0;
    }
  }
  const a = Lt(s);
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
function av(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return me(t) && Zn(t);
}
function cv() {
  const [e] = ae();
  return lv(e), null;
}
function lv(e) {
  B(() => {
    if (!e.hasNodes([be]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return we(
      e.registerNodeTransform(be, fv),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(be, hT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(be, Qh),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(be, (t) => vs(Vn("char"), t)),
      e.registerNodeTransform(He, pv)
    );
  }, [e]);
}
function tc(e) {
  return e.getChildren().some(O);
}
function uv(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (zi(n)) {
    const i = n.getTextContent();
    i.startsWith(D) && (i === D ? n.remove() : n.setTextContent(i.slice(D.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function dv(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function fv(e) {
  if (!F(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (tc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = se(e, Bn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (F(i) && jn({ style: t, cid: r }, i) && Kt(n, i.getUnknownAttributes()))
    if (tc(i)) {
      if (uv(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  F(s) && jn({ style: t, cid: r }, s) && Kt(n, s.getUnknownAttributes()) && (tc(s) ? dv(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function pv(e) {
  const t = e.getParent();
  if (!F(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(Jt)) {
    const n = N();
    if (P(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function Qg(e) {
  return e.replaceAll("	", " ");
}
function Zg() {
  const e = N();
  return !!e && !e.isCollapsed();
}
function em(e) {
  const t = () => !Zg();
  return we(e.registerCommand(Mi, t, Et), e.registerCommand(cr, t, Et));
}
const Su = (e) => {
  e.dispatchCommand(Mi, null);
}, vu = (e) => {
  e.dispatchCommand(cr, null);
}, Mu = (e) => {
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
      n.setData(o, Qg(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(nr, s);
  });
}, Eu = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Qg(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(nr, i);
  });
};
function hv() {
  const [e] = ae();
  return B(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Ei ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Su(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), vu(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Eu(e) : Mu(e)));
    };
    return we(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      em(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function gv({ logger: e }) {
  const [t] = ae();
  return B(() => we(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Pr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Cr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(nr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Cr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(vl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Cr)
  ), [t, e]), null;
}
const $o = "editor-context-menu";
function Bc(e) {
  return `${$o}-item-${e}`;
}
const mv = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function yv({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), E("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Bc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: E("span", { className: "text", children: i.title }) });
}
function bv({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return E("div", { className: "typeahead-popover", children: E("ul", { id: $o, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => E(yv, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let kv = 0;
class ts {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${kv++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function xv({ options: e } = {}) {
  const [t] = ae(), [r, n] = pe(() => !t.isEditable()), [i, s] = pe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = pe(void 0), c = We(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new ts("Cut", {
        onSelect: () => {
          vu(t);
        },
        isDisabled: r
      }),
      new ts("Copy", {
        onSelect: () => {
          Su(t);
        }
      }),
      new ts("Paste", {
        onSelect: () => {
          Mu(t);
        },
        isDisabled: r
      }),
      new ts("Paste as Plain Text", {
        onSelect: () => {
          Eu(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((h) => new ts(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = Y(null), u = Y(null), d = ye(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return B(() => em(t), [t]), B(() => {
    const f = (p) => {
      const h = p.target;
      t.getRootElement() === h || Sh(h) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, h) => {
      h?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), B(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const h = p.target;
      h instanceof Node && l.current?.contains(h) || d();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, d]), B(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      d();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, d]), B(() => {
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
          if (mv.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, d, c, o, t]), B(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", $o), () => {
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
    f.setAttribute("aria-activedescendant", Bc(o));
    const p = document.getElementById($o), h = document.getElementById(Bc(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), y = h.getBoundingClientRect(), k = y.top - g.top + p.scrollTop, b = y.bottom - g.top + p.scrollTop;
    k < p.scrollTop ? p.scrollTop = k : b > p.scrollTop + p.clientHeight && (p.scrollTop = b - p.clientHeight);
  }, [t, i.isOpen, o]), B(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), Is(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: h } = f.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), y = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    f.style.left = `${g}px`, f.style.top = `${y}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? gk.createPortal(E("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: E(bv, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), d());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function Tv(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function Cv(e) {
  if (!Gb(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function _v(e) {
  return mt(e);
}
function rc(e, t, r) {
  const n = Ui(t.node);
  if (!Zn(n) || _v(n))
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
function Sv(e, t) {
  if (N())
    return !1;
  const r = e.getRootElement(), n = Hb(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Op(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = rc(e, c, Cv(c)), d = u;
  else {
    const y = Tv(n.getRangeAt(0), c);
    u = rc(e, c, y ? "before" : "after"), d = rc(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, h = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = Rp(h, e);
  return g ? (Fr(g), g.dirty = !t, t) : !1;
}
function vv() {
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
  }, [e]), B(() => e.registerCommand(qt, () => (Sv(e, t.current) && (r.current = !0), !1), ve), [e]), null;
}
function Mv() {
  const [e] = ae();
  return B(() => e.registerCommand(Pr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ei ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, ve), [e]), null;
}
function Ev({ isEditable: e }) {
  const [t] = ae();
  return Is(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function tm(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Ur(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function nc(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = N();
    if (!P(i))
      return !1;
    const s = Rp(r, e);
    return !!s && i.is(s);
  }, { editor: e }) || r.removeAllRanges();
}
function bi(e, t) {
  let r;
  try {
    r = fn();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function pf(e) {
  return !!e && Ks(ne(e));
}
function Au(e) {
  const [t] = ae(), r = Y(void 0), n = ye((i) => {
    const s = N(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = pf(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Ws(u, d), p = Ks(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const h = Kx();
        i.insertAfter(h), r.current = h.getKey(), l = h.getKey();
      }
      Yt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = ne(a);
      M(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return B(() => {
    const i = () => {
      const a = e(), c = N(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (_t(vt), Ur(t, vt), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (zs(c) || !c.includes(Pi))
        return;
      const l = N(), u = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Bx(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Pi).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = we(t.registerCommand(qt, () => (i(), !1), zn), t.registerCommand(Ml, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = pf(a);
      }), c && t.update(() => {
        const l = ne(a);
        M(l) && l.remove();
      }, { tag: vt }), r.current = void 0, !1;
    }, zn), t.registerNodeTransform(He, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function Av() {
  const e = N();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = K(r) ? r : r.getParent();
  if (!K(n))
    return;
  const i = B_(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && Ks(s); )
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
function Pv() {
  return Au(Av), null;
}
function Nv() {
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
  if (!me(i) || Ws(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || me(s))
    return i;
}
function wv() {
  return Au(Nv), null;
}
function Ov({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
        const u = tm(o);
        o.update(() => {
          u || _t(Ir), o.setEditorState(l), o.dispatchCommand(Jb, void 0);
        }, { tag: Pl });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const ic = "caller_highlight", Rv = Tn(function(t, r) {
  const [n] = ae(), i = Y(void 0), s = Y(void 0), o = ye(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const u = xr(a);
      return u ? (u.getChildren().find(mt) ?? Br(u))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(ic), l?.classList.add(ic), s.current = l;
  }, [n]);
  return Yo(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : bi(n, () => xr(a)?.getKey()), o();
    }
  }), [n, o]), B(() => we(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Pe, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const d = l.has(Pl) ? void 0 : c.read(() => ou(u)), f = d === void 0 ? void 0 : n.getEditorState().read(() => xr(d)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), B(() => () => s.current?.classList.remove(ic), []), null;
});
function qv({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return $v(t, n), Iv(i, e, r, n), null;
}
function $v(e, t) {
  const r = Y(void 0), n = Y(void 0), i = e.noteCallers, s = e.crossRefCallers;
  B(() => {
    let o = i;
    (!o || o.length <= 0) && (o = P_), r.current !== o && (r.current = o, hf("note-callers", o, t));
  }, [t, i]), B(() => {
    let o = s;
    (!o || o.length <= 0) && (o = N_), n.current !== o && (n.current = o, hf("cross-ref-callers", o, t));
  }, [t, s]);
}
function Iv(e, t, r, n) {
  B(() => {
    if (!e.hasNodes([be, Pe, sr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => Bv(s));
    return we(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Pe, (s) => Lv(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(be, Dv),
      e.registerNodeTransform(He, Uv),
      // Ensure NBSP after caller.
      e.registerNodeTransform(sr, Fv),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(sr, (s, { prevEditorState: o }) => zv(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(qt, () => Kv(e, t, r, n), Et),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function Lv(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => mt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    M(i) && !O(i) && i.getTextContent() !== Dt(e.getCaller()) && e.insertBefore(i);
  }
}
function Dv(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => mt(s));
  if (!F(e) || !K(t) || !n)
    return;
  const i = Fl(r);
  n.getPreviewText() !== i && n.setPreviewText(i), nm(e);
}
function rm(e) {
  const t = N();
  if (!P(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function nm(e) {
  const t = e.getNextSibling();
  if (M(t) && !O(t)) {
    if (t.getTextContent() === D || rm(t))
      return;
    if (Rr(t)) {
      t.setTextContent(D);
      return;
    }
  }
  e.insertAfter(js());
}
function Uv(e) {
  const t = Lt(e), r = t?.getChildren(), n = r?.find((a) => mt(a));
  if (!M(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent(), s = Rr(e) || rm(e);
  if (!O(e) && K(i) && s && e.getTextContent() !== D && (e.setTextContent(D), e.selectEnd()), F(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(Jt) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = Fl(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function Fv(e) {
  mt(e) && nm(e);
}
function zv(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ne(r), a = o?.getParent();
      return mt(o) && K(a) && a.getCaller() === ys;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function Kv(e, t, r, n) {
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
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), rs(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, rs(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, rs(e, c, n);
    } else if (!a) {
      const c = Ae(o, (l) => K(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      Ke(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, rs(e, l, n);
      }
    }
  }
  if (at(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (ni(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, rs(e, l, n);
    }
  }
  return !1;
}
function rs(e, t, r) {
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
function Bv(e) {
  const t = N();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && M(s)) {
    e.preventDefault();
    const o = Fn();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Fr(o);
  }
}
function hf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (jv(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function jv(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Sr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Br(e);
  return r && t.push(r), t.length > 0 && t.every((n) => M(n) && n.getMode() === "token") ? t : [];
}
function Vv(e) {
  const t = e.getParent();
  if (K(t))
    return Sr(t).some((r) => r.is(e)) ? t : void 0;
}
function Gn(e) {
  const t = Sr(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function Wv(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function Hv(e) {
  const t = Xb();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Gn(e);
  const i = Wv(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Gn(e);
}
function Ti(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = Vv(t);
  if (r)
    return im(r, t, e.offset) ? void 0 : r;
}
function im(e, t, r) {
  const n = Sr(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function Gv(e) {
  const t = Sr(e), r = t[t.length - 1];
  M(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Yt(e, Gn(e));
}
function Jv(e = !1) {
  const t = N();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return cm(t);
  const r = sm(t.anchor);
  if (r) {
    const i = Lo(r);
    return t.anchor.is(i) ? !1 : (om(t, i), !0);
  }
  const n = Ti(t.anchor);
  if (!n)
    return !1;
  if (!e && Hv(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    Yt(i, n.getIndexWithinParent());
  } else
    Gv(n);
  return !0;
}
function Io(e) {
  const t = Sr(e), r = t[t.length - 1];
  return M(r) ? rr(r.getKey(), r.getTextContentSize(), "text") : rr(e.getKey(), Gn(e), "element");
}
function Ii(e) {
  const t = e.getLastChild();
  return O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function sc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === Ii(e) && O(r) && t.offset > 0;
}
function jc(e) {
  const t = Ii(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function Lo(e) {
  const t = Ii(e);
  if (t > Gn(e)) {
    const r = e.getChildAtIndex(t - 1), n = L(r) ? r.getLastDescendant() : r;
    if (M(n))
      return rr(n.getKey(), n.getTextContentSize(), "text");
  }
  return Io(e);
}
function sm(e) {
  const t = e.getNode(), r = t.getParent();
  if (K(r) && Sr(r).length > 0 && jc(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (K(t) && Sr(t).length > 0 && jc(t))
    return e.offset > Ii(t) || e.offset === Ii(t) && e.offset > Gn(t) ? t : void 0;
  if (!L(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return K(n) && Sr(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function om(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function am(e) {
  const t = Lt(e);
  return t && Sr(t).length > 0 ? t : void 0;
}
function Yv(e) {
  const t = [], r = (n) => {
    const i = am(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function cm(e) {
  const t = Yv(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => rr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const u = rr(l.getKey(), Gn(l), "element"), d = rr(l.getKey(), Ii(l), "element"), f = i.type === "text" && im(l, i.getNode(), i.offset), p = i.isBefore(u) && !f;
    (Ti(i) || sc(l, i) || p) && (!s.isBefore(u) || Ti(s)) && (i = sc(l, i) ? Lo(l) : Io(l), o = !0), (Ti(s) || sc(l, s) || d.isBefore(s)) && (i.isBefore(d) || i.is(d)) && (s = Ti(s) ? Io(l) : Lo(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function gf(e, t) {
  const r = Fn();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function mf(e, t) {
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
function yf(e, t, r) {
  const n = mf(e, t), i = mf(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function Xv(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return L(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function Qv(e, t, r, n) {
  const i = t.anchor, s = sm(i);
  if (s)
    return om(t, Lo(s)), !0;
  const o = am(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const d = Xv(t.focus);
    return K(d) && Sr(d).length > 0;
  }
  if (Ti(i))
    return !0;
  const a = Io(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const d = gf(a, i);
    return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && yf(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = jc(o);
  if (!c)
    return !1;
  const l = rr(c.getKey(), 0, "text"), u = gf(i, l);
  return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && yf(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function Zv() {
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
      return !P(a) || a.isCollapsed() || !cm(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = N();
      return P(c) ? c.isCollapsed() ? Qv(e, c, a, o) : i() : !1;
    };
    return we(e.registerCommand(Us, n, ve), e.registerCommand(nr, n, ve), e.registerCommand(ms, n, ve), e.registerCommand(Yb, n, ve), e.registerCommand(ea, s("character"), ve), e.registerCommand(Sl, s("word"), ve), e.registerCommand(bo, s("line"), ve), e.registerCommand(Pp, i, ve), e.registerCommand(cr, i, ve));
  }, [e]), B(() => e.registerCommand(qt, () => (Jv(t.current) && (_t(vt), Ur(e, vt)), !1), zn), [e]), null;
}
function eM({ onChange: e }) {
  const [t] = ae();
  return B(() => t.registerCommand(qt, () => {
    const r = cu();
    return e?.(r), !1;
  }, Et), [t, e]), null;
}
function tM() {
  const [e] = ae();
  return rM(e), null;
}
function rM(e) {
  B(() => {
    if (!e.hasNodes([ct]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(ct, (t) => nM(t, e));
  }, [e]);
}
function nM(e, t) {
  Ic(t, e.getKey()) && Cg(e.getFirstChild()), !(!le(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ne(e.getKey());
    return le(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function lm({ onStateChange: e }) {
  const [t] = ae(), [r, n] = pe(t), i = Y(!1), s = Y(!1), o = Y(void 0), a = Y(void 0), c = ye(() => {
    const l = N();
    let u;
    if (P(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : Ae(d, (k) => {
        const b = k.getParent();
        return b !== null && Qb(b);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), Ms(p) && (p = Ae(d, le) ?? p);
      const h = p.getKey(), g = r.getElementByKey(h), y = Gx(d, f);
      if (y && zC(y) && (u = y.getMarker()), g !== null && (le(p) || ke(p) || Fs(p))) {
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
  return B(() => t.registerCommand(qt, (l, u) => (c(), n(u), !1), ve), [t, c]), B(() => we(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Zb, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ve), r.registerCommand(ek, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ve)), [c, r, e]), null;
}
function um(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function yn(e) {
  return e ? Ke(e) ? e : Ae(e, (r) => Ke(r)) ?? void 0 : void 0;
}
function dm(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = yn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Pu(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !Qo(e) ? !1 : e.getNodes().some((t) => me(t));
}
function fm(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = yn(r);
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
function pm(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = yn(r);
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
function bf(e, t) {
  return !!Vc(e, t);
}
function Vc(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && L(n)) {
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
function Do(e, t) {
  if (!P(e))
    return !1;
  const r = yn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Si(e) {
  return Pu(e) || dm(e);
}
function hm(e, t) {
  if (Pu(e) || dm(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return fm(e) && Do(e, "backward") || bf(e, "backward");
    case "deleteForward":
      return pm(e) && Do(e, "forward") || bf(e, "forward");
    case "insertText":
      return !1;
  }
}
function iM(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Vc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (fm(e) && Do(e, "backward")) {
        const n = yn(e.anchor.getNode());
        if (at(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Vc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (pm(e) && Do(e, "forward")) {
        const i = yn(e.anchor.getNode())?.getNextSibling();
        if (at(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function kf(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Qo(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!P(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!P(e) || e.isCollapsed())
    return !1;
  const r = yn(e.anchor.getNode()), n = yn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function gm(e) {
  if (M(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function sM(e) {
  const t = e.getPreviousSibling();
  if (!Ke(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = Nt(n), s = e.getChildren().filter((o) => !Rr(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? gm(r) : Wi(t) || t.selectStart();
}
function mm(e) {
  return me(e) || Ge(e) ? [] : at(e) ? e.getChildren().flatMap(mm) : [e];
}
function oM(e) {
  const t = [];
  for (const r of e) {
    const n = mm(r);
    n.length !== 0 && (at(r) && t.length > 0 && t.push(Te(" ")), t.push(...n));
  }
  return t;
}
function xf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function aM(e) {
  if (Array.isArray(e)) return e;
}
function cM(e, t) {
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
function lM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uM(e, t) {
  return aM(e) || cM(e, t) || dM(e, t) || lM();
}
function dM(e, t) {
  if (e) {
    if (typeof e == "string") return xf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? xf(e, t) : void 0;
  }
}
const ym = Object.entries, Tf = Object.setPrototypeOf, fM = Object.isFrozen, pM = Object.getPrototypeOf, hM = Object.getOwnPropertyDescriptor;
let ut = Object.freeze, ft = Object.seal, ki = Object.create, bm = typeof Reflect < "u" && Reflect, Wc = bm.apply, Hc = bm.construct;
ut || (ut = function(t) {
  return t;
});
ft || (ft = function(t) {
  return t;
});
Wc || (Wc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Hc || (Hc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const gi = tt(Array.prototype.forEach), gM = tt(Array.prototype.lastIndexOf), Cf = tt(Array.prototype.pop), mi = tt(Array.prototype.push), mM = tt(Array.prototype.splice), un = Array.isArray, cs = tt(String.prototype.toLowerCase), oc = tt(String.prototype.toString), _f = tt(String.prototype.match), ns = tt(String.prototype.replace), Sf = tt(String.prototype.indexOf), yM = tt(String.prototype.trim), bM = tt(Number.prototype.toString), kM = tt(Boolean.prototype.toString), vf = typeof BigInt > "u" ? null : tt(BigInt.prototype.toString), Mf = typeof Symbol > "u" ? null : tt(Symbol.prototype.toString), st = tt(Object.prototype.hasOwnProperty), is = tt(Object.prototype.toString), it = tt(RegExp.prototype.test), qn = xM(TypeError);
function tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Wc(e, t, n);
  };
}
function xM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Hc(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : cs;
  if (Tf && Tf(e, null), !un(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (fM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function TM(e) {
  for (let t = 0; t < e.length; t++)
    st(e, t) || (e[t] = null);
  return e;
}
function ht(e) {
  const t = ki(null);
  for (const n of ym(e)) {
    var r = uM(n, 2);
    const i = r[0], s = r[1];
    st(e, i) && (un(s) ? t[i] = TM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ht(s) : t[i] = s);
  }
  return t;
}
function CM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return bM(e);
    case "boolean":
      return kM(e);
    case "bigint":
      return vf ? vf(e) : "0";
    case "symbol":
      return Mf ? Mf(e) : "Symbol()";
    case "undefined":
      return is(e);
    case "function":
    case "object": {
      if (e === null)
        return is(e);
      const t = e, r = Zt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : is(n);
      }
      return is(e);
    }
    default:
      return is(e);
  }
}
function Zt(e, t) {
  for (; e !== null; ) {
    const n = hM(e, t);
    if (n) {
      if (n.get)
        return tt(n.get);
      if (typeof n.value == "function")
        return tt(n.value);
    }
    e = pM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function _M(e) {
  try {
    return it(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ef = ut(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ac = ut(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), cc = ut(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), SM = ut(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), lc = ut(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), vM = ut(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Af = ut(["#text"]), Pf = ut(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), uc = ut(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Nf = ut(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ao = ut(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), MM = ft(/{{[\w\W]*|^[\w\W]*}}/g), EM = ft(/<%[\w\W]*|^[\w\W]*%>/g), AM = ft(/\${[\w\W]*/g), PM = ft(/^data-[\-\w.\u00B7-\uFFFF]+$/), NM = ft(/^aria-[\-\w]+$/), wf = ft(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), wM = ft(/^(?:\w+script|data):/i), OM = ft(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), RM = ft(/^html$/i), qM = ft(/^[a-z][.\w]*(-[.\w]+)+$/i), Of = ft(/<[/\w!]/g), Rf = ft(/<[/\w]/g), $M = ft(/<\/no(script|embed|frames)/i), IM = ft(/\/>/i), Rt = {
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
}, LM = function() {
  return typeof window > "u" ? null : window;
}, DM = function(t, r) {
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
}, qf = function() {
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
function km() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : LM();
  const t = (j) => km(j);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Rt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Zt(f, "cloneNode"), h = Zt(f, "remove"), g = Zt(f, "nextSibling"), y = Zt(f, "childNodes"), k = Zt(f, "parentNode"), b = Zt(f, "shadowRoot"), C = Zt(f, "attributes"), A = o && o.prototype ? Zt(o.prototype, "nodeType") : null, _ = o && o.prototype ? Zt(o.prototype, "nodeName") : null, w = o && o.prototype ? Zt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const j = r.createElement("template");
    j.content && j.content.ownerDocument && (r = j.content.ownerDocument);
  }
  let $, z = "", S, W = !1, H = 0;
  const de = function() {
    if (H > 0)
      throw qn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Q = function(m) {
    de(), H++;
    try {
      return $.createHTML(m);
    } finally {
      H--;
    }
  }, De = function(m) {
    de(), H++;
    try {
      return $.createScriptURL(m);
    } finally {
      H--;
    }
  }, Ce = function() {
    return W || (S = DM(d, i), W = !0), S;
  }, hr = r, Ve = hr.implementation, Qr = hr.createNodeIterator, Zr = hr.createDocumentFragment, _n = hr.getElementsByTagName, ee = n.importNode;
  let R = qf();
  t.isSupported = typeof ym == "function" && typeof k == "function" && Ve && Ve.createHTMLDocument !== void 0;
  const te = MM, ce = EM, Ne = AM, lt = PM, Z = NM, Ye = wM, gr = OM, Hi = qM;
  let en = wf, ie = null;
  const pt = ge({}, [...Ef, ...ac, ...cc, ...lc, ...Af]);
  let fe = null;
  const si = ge({}, [...Pf, ...uc, ...Nf, ...ao]);
  let _e = Object.seal(ki(null, {
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
  })), Sn = null, oi = null;
  const Xt = Object.seal(ki(null, {
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
  let tn = !0, rn = !0, Ys = !1, nn = !0, zt = !1, Qt = !0, mr = !1, Gi = !1, vn = null, q = null, I = !1, V = !1, G = !1, he = !1, Xe = !0, Oe = !1;
  const Qe = "user-content-";
  let Ot = !0, Mn = !1, $r = {}, rt = null;
  const Ji = ge({}, [
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
  let Xs = null;
  const En = ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let Pa = null;
  const Zu = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Qs = "http://www.w3.org/1998/Math/MathML", Zs = "http://www.w3.org/2000/svg", yr = "http://www.w3.org/1999/xhtml";
  let ai = yr, Na = !1, wa = null;
  const gb = ge({}, [Qs, Zs, yr], oc), ed = ut(["mi", "mo", "mn", "ms", "mtext"]);
  let Oa = ge({}, ed);
  const td = ut(["annotation-xml"]);
  let Ra = ge({}, td);
  const mb = ge({}, ["title", "style", "font", "a", "script"]);
  let Yi = null;
  const yb = ["application/xhtml+xml", "text/html"], bb = "text/html";
  let Ue = null, ci = null;
  const kb = r.createElement("form"), rd = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, qa = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ci && ci === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = ht(m), Yi = // eslint-disable-next-line unicorn/prefer-includes
    yb.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? bb : m.PARSER_MEDIA_TYPE, Ue = Yi === "application/xhtml+xml" ? oc : cs, ie = cn(m, "ALLOWED_TAGS", pt, {
      transform: Ue
    }), fe = cn(m, "ALLOWED_ATTR", si, {
      transform: Ue
    }), wa = cn(m, "ALLOWED_NAMESPACES", gb, {
      transform: oc
    }), Pa = cn(m, "ADD_URI_SAFE_ATTR", Zu, {
      transform: Ue,
      base: Zu
    }), Xs = cn(m, "ADD_DATA_URI_TAGS", En, {
      transform: Ue,
      base: En
    }), rt = cn(m, "FORBID_CONTENTS", Ji, {
      transform: Ue
    }), Sn = cn(m, "FORBID_TAGS", ht({}), {
      transform: Ue
    }), oi = cn(m, "FORBID_ATTR", ht({}), {
      transform: Ue
    }), $r = st(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? ht(m.USE_PROFILES) : m.USE_PROFILES : !1, tn = m.ALLOW_ARIA_ATTR !== !1, rn = m.ALLOW_DATA_ATTR !== !1, Ys = m.ALLOW_UNKNOWN_PROTOCOLS || !1, nn = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, zt = m.SAFE_FOR_TEMPLATES || !1, Qt = m.SAFE_FOR_XML !== !1, mr = m.WHOLE_DOCUMENT || !1, V = m.RETURN_DOM || !1, G = m.RETURN_DOM_FRAGMENT || !1, he = m.RETURN_TRUSTED_TYPE || !1, I = m.FORCE_BODY || !1, Xe = m.SANITIZE_DOM !== !1, Oe = m.SANITIZE_NAMED_PROPS || !1, Ot = m.KEEP_CONTENT !== !1, Mn = m.IN_PLACE || !1, en = _M(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : wf, ai = typeof m.NAMESPACE == "string" ? m.NAMESPACE : yr, Oa = st(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ht(m.MATHML_TEXT_INTEGRATION_POINTS) : ge({}, ed), Ra = st(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? ht(m.HTML_INTEGRATION_POINTS) : ge({}, td);
    const v = st(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? ht(m.CUSTOM_ELEMENT_HANDLING) : ki(null);
    if (_e = ki(null), st(v, "tagNameCheck") && rd(v.tagNameCheck) && (_e.tagNameCheck = v.tagNameCheck), st(v, "attributeNameCheck") && rd(v.attributeNameCheck) && (_e.attributeNameCheck = v.attributeNameCheck), st(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (_e.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), ft(_e), zt && (rn = !1), G && (V = !0), $r && (ie = ge({}, Af), fe = ki(null), $r.html === !0 && (ge(ie, Ef), ge(fe, Pf)), $r.svg === !0 && (ge(ie, ac), ge(fe, uc), ge(fe, ao)), $r.svgFilters === !0 && (ge(ie, cc), ge(fe, uc), ge(fe, ao)), $r.mathMl === !0 && (ge(ie, lc), ge(fe, Nf), ge(fe, ao))), Xt.tagCheck = null, Xt.attributeCheck = null, st(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Xt.tagCheck = m.ADD_TAGS : un(m.ADD_TAGS) && (ie === pt && (ie = ht(ie)), ge(ie, m.ADD_TAGS, Ue))), st(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Xt.attributeCheck = m.ADD_ATTR : un(m.ADD_ATTR) && (fe === si && (fe = ht(fe)), ge(fe, m.ADD_ATTR, Ue))), st(m, "ADD_URI_SAFE_ATTR") && un(m.ADD_URI_SAFE_ATTR) && ge(Pa, m.ADD_URI_SAFE_ATTR, Ue), st(m, "FORBID_CONTENTS") && un(m.FORBID_CONTENTS) && (rt === Ji && (rt = ht(rt)), ge(rt, m.FORBID_CONTENTS, Ue)), st(m, "ADD_FORBID_CONTENTS") && un(m.ADD_FORBID_CONTENTS) && (rt === Ji && (rt = ht(rt)), ge(rt, m.ADD_FORBID_CONTENTS, Ue)), Ot && (ie["#text"] = !0), mr && ge(ie, ["html", "head", "body"]), ie.table && (ge(ie, ["tbody"]), delete Sn.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = $;
      $ = m.TRUSTED_TYPES_POLICY;
      try {
        z = Q("");
      } catch (J) {
        throw $ = U, J;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? ($ = void 0, z = "") : ($ === void 0 && ($ = Ce()), $ && typeof z == "string" && (z = Q("")));
    ut && ut(m), ci = m;
  }, nd = ge({}, [...ac, ...cc, ...SM]), id = ge({}, [...lc, ...vM]), xb = function(m, v, U) {
    return v.namespaceURI === yr ? m === "svg" : v.namespaceURI === Qs ? m === "svg" && (U === "annotation-xml" || Oa[U]) : !!nd[m];
  }, Tb = function(m, v, U) {
    return v.namespaceURI === yr ? m === "math" : v.namespaceURI === Zs ? m === "math" && Ra[U] : !!id[m];
  }, Cb = function(m, v, U) {
    return v.namespaceURI === Zs && !Ra[U] || v.namespaceURI === Qs && !Oa[U] ? !1 : !id[m] && (mb[m] || !nd[m]);
  }, _b = function(m) {
    let v = k(m);
    (!v || !v.tagName) && (v = {
      namespaceURI: ai,
      tagName: "template"
    });
    const U = cs(m.tagName), J = cs(v.tagName);
    return wa[m.namespaceURI] ? m.namespaceURI === Zs ? xb(U, v, J) : m.namespaceURI === Qs ? Tb(U, v, J) : m.namespaceURI === yr ? Cb(U, v, J) : !!(Yi === "application/xhtml+xml" && wa[m.namespaceURI]) : !1;
  }, sn = function(m) {
    mi(t.removed, {
      element: m
    });
    try {
      k(m).removeChild(m);
    } catch {
      if (h(m), !k(m))
        throw qn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, eo = function(m) {
    Xi(m);
    const v = y(m);
    if (v) {
      const J = [];
      gi(v, (X) => {
        mi(J, X);
      }), gi(J, (X) => {
        try {
          h(X);
        } catch {
        }
      });
    }
    const U = C(m);
    if (U)
      for (let J = U.length - 1; J >= 0; --J) {
        const X = U[J], oe = X && X.name;
        if (typeof oe == "string")
          try {
            m.removeAttribute(oe);
          } catch {
          }
      }
  }, An = function(m, v) {
    try {
      mi(t.removed, {
        attribute: v.getAttributeNode(m),
        from: v
      });
    } catch {
      mi(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(m), m === "is")
      if (V || G)
        try {
          sn(v);
        } catch {
        }
      else
        try {
          v.setAttribute(m, "");
        } catch {
        }
  }, Sb = function(m) {
    const v = C(m);
    if (v)
      for (let U = v.length - 1; U >= 0; --U) {
        const J = v[U], X = J && J.name;
        if (!(typeof X != "string" || fe[Ue(X)]))
          try {
            m.removeAttribute(X);
          } catch {
          }
      }
  }, Xi = function(m) {
    const v = [m];
    for (; v.length > 0; ) {
      const U = v.pop();
      (A ? A(U) : U.nodeType) === Rt.element && Sb(U);
      const X = y(U);
      if (X)
        for (let oe = X.length - 1; oe >= 0; --oe)
          v.push(X[oe]);
    }
  }, vb = function(m) {
    if (!Qt)
      return;
    const v = [m];
    for (; v.length > 0; ) {
      const U = v.pop(), J = A ? A(U) : U.nodeType;
      if (J === Rt.processingInstruction || J === Rt.comment && it(Rf, U.data)) {
        try {
          h(U);
        } catch {
        }
        continue;
      }
      if (J === Rt.element) {
        const oe = U, Se = Ue(_ ? _(U) : U.nodeName);
        try {
          oe.hasAttribute && oe.hasAttribute("patchsrc") && oe.removeAttribute("patchsrc"), oe.hasAttribute && oe.hasAttribute("for") && Se !== "label" && Se !== "output" && oe.removeAttribute("for");
        } catch {
        }
      }
      const X = y(U);
      if (X)
        for (let oe = X.length - 1; oe >= 0; --oe)
          v.push(X[oe]);
    }
  }, sd = function(m) {
    let v = null, U = null;
    if (I)
      m = "<remove></remove>" + m;
    else {
      const oe = _f(m, /^[\r\n\t ]+/);
      U = oe && oe[0];
    }
    Yi === "application/xhtml+xml" && ai === yr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const J = $ ? Q(m) : m;
    if (ai === yr)
      try {
        v = new u().parseFromString(J, Yi);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = Ve.createDocument(ai, "template", null);
      try {
        v.documentElement.innerHTML = Na ? z : J;
      } catch {
      }
    }
    const X = v.body || v.documentElement;
    return m && U && X.insertBefore(r.createTextNode(U), X.childNodes[0] || null), ai === yr ? _n.call(v, mr ? "html" : "body")[0] : mr ? v.documentElement : X;
  }, od = function(m) {
    const v = w ? w(m) : m.ownerDocument;
    return Qr.call(
      v || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, to = function(m) {
    return m = ns(m, te, " "), m = ns(m, ce, " "), m = ns(m, Ne, " "), m;
  }, $a = function(m) {
    var v;
    m.normalize();
    const U = w ? w(m) : m.ownerDocument, J = Qr.call(
      U || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = J.nextNode();
    for (; X; )
      X.data = to(X.data), X = J.nextNode();
    const oe = (v = m.querySelectorAll) === null || v === void 0 ? void 0 : v.call(m, "template");
    oe && gi(oe, (Se) => {
      li(Se.content) && $a(Se.content);
    });
  }, ro = function(m) {
    const v = _ ? _(m) : null;
    return typeof v != "string" || Ue(v) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    m.attributes !== C(m) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
  }, li = function(m) {
    if (!A || typeof m != "object" || m === null)
      return !1;
    try {
      return A(m) === Rt.documentFragment;
    } catch {
      return !1;
    }
  }, Qi = function(m) {
    if (!A || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof A(m) == "number";
    } catch {
      return !1;
    }
  };
  function br(j, m, v) {
    j.length !== 0 && gi(j, (U) => {
      U.call(t, m, v, ci);
    });
  }
  const Mb = function(m, v) {
    return !!(Qt && m.hasChildNodes() && !Qi(m.firstElementChild) && it(Of, m.textContent) && it(Of, m.innerHTML) || Qt && m.namespaceURI === yr && v === "style" && Qi(m.firstElementChild) || m.nodeType === Rt.processingInstruction || Qt && m.nodeType === Rt.comment && it(Rf, m.data));
  }, Eb = function(m, v, U) {
    if (!Sn[v] && ud(v) && (_e.tagNameCheck instanceof RegExp && it(_e.tagNameCheck, v) || _e.tagNameCheck instanceof Function && _e.tagNameCheck(v)))
      return !1;
    if (Ot && !rt[v]) {
      const J = k(m), X = y(m);
      if (X && J) {
        const oe = X.length;
        for (let Se = oe - 1; Se >= 0; --Se) {
          const Fe = m === U ? p(X[Se], !0) : X[Se];
          J.insertBefore(Fe, g(m));
        }
      }
    }
    return sn(m), !0;
  }, ad = function(m, v, U, J) {
    return m.length === 0 ? v : v === U || v === J ? ht(v) : v;
  }, cd = function(m, v) {
    if (br(R.beforeSanitizeElements, m, null), m !== v && k(m) === null)
      return Mn && Xi(m), !0;
    if (ro(m))
      return sn(m), !0;
    const U = Ue(_ ? _(m) : m.nodeName);
    if (ie = ad(R.uponSanitizeElement, ie, pt, vn), br(R.uponSanitizeElement, m, {
      tagName: U,
      allowedTags: ie
    }), m !== v && k(m) === null)
      return Mn && Xi(m), !0;
    if (Mb(m, U))
      return sn(m), !0;
    if (Sn[U] || !(Xt.tagCheck instanceof Function && Xt.tagCheck(U)) && !ie[U]) {
      const X = Eb(m, U, v);
      return X === !1 && br(R.afterSanitizeElements, m, null), X;
    }
    if ((A ? A(m) : m.nodeType) === Rt.element && !_b(m) || (U === "noscript" || U === "noembed" || U === "noframes") && it($M, m.innerHTML))
      return sn(m), !0;
    if (zt && m.nodeType === Rt.text) {
      const X = to(m.textContent);
      m.textContent !== X && (mi(t.removed, {
        element: m.cloneNode()
      }), m.textContent = X);
    }
    return br(R.afterSanitizeElements, m, null), !1;
  }, ld = function(m, v, U) {
    if (oi[v] || Qt && v === "patchsrc" || Qt && v === "for" && m !== "label" && m !== "output" || Xe && (v === "id" || v === "name") && (U in r || U in kb))
      return !1;
    const J = fe[v] || Xt.attributeCheck instanceof Function && Xt.attributeCheck(v, m);
    if (!(rn && it(lt, v))) {
      if (!(tn && it(Z, v))) {
        if (J) {
          if (!Pa[v]) {
            if (!it(en, ns(U, gr, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && m !== "script" && Sf(U, "data:") === 0 && Xs[m])) {
                if (!(Ys && !it(Ye, ns(U, gr, "")))) {
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
          !(ud(m) && (_e.tagNameCheck instanceof RegExp && it(_e.tagNameCheck, m) || _e.tagNameCheck instanceof Function && _e.tagNameCheck(m)) && (_e.attributeNameCheck instanceof RegExp && it(_e.attributeNameCheck, v) || _e.attributeNameCheck instanceof Function && _e.attributeNameCheck(v, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && _e.allowCustomizedBuiltInElements && (_e.tagNameCheck instanceof RegExp && it(_e.tagNameCheck, U) || _e.tagNameCheck instanceof Function && _e.tagNameCheck(U)))
        ) return !1;
      }
    }
    return !0;
  }, Ab = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ud = function(m) {
    return !Ab[cs(m)] && it(Hi, m);
  }, Pb = function(m, v, U, J) {
    if ($ && typeof d == "object" && typeof d.getAttributeType == "function" && !U)
      switch (d.getAttributeType(m, v)) {
        case "TrustedHTML":
          return Q(J);
        case "TrustedScriptURL":
          return De(J);
      }
    return J;
  }, Nb = function(m, v, U, J) {
    try {
      U ? m.setAttributeNS(U, v, J) : m.setAttribute(v, J), ro(m) ? sn(m) : Cf(t.removed);
    } catch {
      An(v, m);
    }
  }, dd = function(m) {
    br(R.beforeSanitizeAttributes, m, null);
    const v = m.attributes;
    if (!v || ro(m))
      return;
    fe = ad(R.uponSanitizeAttribute, fe, si, q);
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: fe,
      forceKeepAttr: void 0
    };
    let J = v.length;
    const X = Ue(m.nodeName);
    for (; J--; ) {
      const oe = v[J], Se = oe.name, Fe = oe.namespaceURI, Tt = oe.value, Ct = Ue(Se), La = Tt;
      let yt = Se === "value" ? La : yM(La);
      if (U.attrName = Ct, U.attrValue = yt, U.keepAttr = !0, U.forceKeepAttr = void 0, br(R.uponSanitizeAttribute, m, U), yt = U.attrValue, Oe && (Ct === "id" || Ct === "name") && Sf(yt, Qe) !== 0 && (An(Se, m), yt = Qe + yt), Qt && it(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, yt)) {
        An(Se, m);
        continue;
      }
      if (Ct === "attributename" && _f(yt, "href")) {
        An(Se, m);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          An(Se, m);
          continue;
        }
        if (!nn && it(IM, yt)) {
          An(Se, m);
          continue;
        }
        if (zt && (yt = to(yt)), !ld(X, Ct, yt)) {
          An(Se, m);
          continue;
        }
        yt = Pb(X, Ct, Fe, yt), yt !== La && Nb(m, Se, Fe, yt);
      }
    }
    br(R.afterSanitizeAttributes, m, null);
  }, no = function(m) {
    let v = null;
    const U = od(m);
    for (br(R.beforeSanitizeShadowDOM, m, null); v = U.nextNode(); )
      if (br(R.uponSanitizeShadowNode, v, null), cd(v, m), dd(v), li(v.content) && no(v.content), (A ? A(v) : v.nodeType) === Rt.element) {
        const X = b(v);
        li(X) && (Ia(X), no(X));
      }
    br(R.afterSanitizeShadowDOM, m, null);
  }, Ia = function(m) {
    const v = [{
      node: m,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const U = v.pop();
      if (U.shadow) {
        no(U.shadow);
        continue;
      }
      const J = U.node, oe = (A ? A(J) : J.nodeType) === Rt.element, Se = y(J);
      if (Se)
        for (let Fe = Se.length - 1; Fe >= 0; --Fe)
          v.push({
            node: Se[Fe],
            shadow: null
          });
      if (oe) {
        const Fe = _ ? _(J) : null;
        if (typeof Fe == "string" && Ue(Fe) === "template") {
          const Tt = J.content;
          li(Tt) && v.push({
            node: Tt,
            shadow: null
          });
        }
      }
      if (oe) {
        const Fe = b(J);
        li(Fe) && v.push({
          node: null,
          shadow: Fe
        }, {
          node: Fe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(j) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, U = null, J = null, X = null;
    if (Na = !j, Na && (j = "<!-->"), typeof j != "string" && !Qi(j) && (j = CM(j), typeof j != "string"))
      throw qn("dirty is not a string, aborting");
    if (!t.isSupported)
      return j;
    Gi ? (ie = vn, fe = q) : qa(m), (R.uponSanitizeElement.length > 0 || R.uponSanitizeAttribute.length > 0) && (ie = ht(ie)), R.uponSanitizeAttribute.length > 0 && (fe = ht(fe)), t.removed = [];
    const oe = Mn && typeof j != "string" && Qi(j);
    if (oe) {
      vb(j);
      const Tt = _ ? _(j) : j.nodeName;
      if (typeof Tt == "string") {
        const Ct = Ue(Tt);
        if (!ie[Ct] || Sn[Ct])
          throw eo(j), qn("root node is forbidden and cannot be sanitized in-place");
      }
      if (ro(j))
        throw eo(j), qn("root node is clobbered and cannot be sanitized in-place");
      try {
        Ia(j);
      } catch (Ct) {
        throw eo(j), Ct;
      }
    } else if (Qi(j))
      v = sd("<!---->"), U = v.ownerDocument.importNode(j, !0), U.nodeType === Rt.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? v = U : v.appendChild(U), Ia(U);
    else {
      if (!V && !zt && !mr && // eslint-disable-next-line unicorn/prefer-includes
      j.indexOf("<") === -1)
        return $ && he ? Q(j) : j;
      if (v = sd(j), !v)
        return V ? null : he ? z : "";
    }
    v && I && sn(v.firstChild);
    const Se = oe ? j : v;
    try {
      const Tt = od(Se);
      for (; J = Tt.nextNode(); )
        cd(J, Se), dd(J), li(J.content) && no(J.content);
    } catch (Tt) {
      throw oe && (eo(j), gi(t.removed, (Ct) => {
        Ct.element && Xi(Ct.element);
      })), Tt;
    }
    if (oe)
      return gi(t.removed, (Tt) => {
        Tt.element && Xi(Tt.element);
      }), zt && $a(j), j;
    if (V) {
      if (zt && $a(v), G)
        for (X = Zr.call(v.ownerDocument); v.firstChild; )
          X.appendChild(v.firstChild);
      else
        X = v;
      return (fe.shadowroot || fe.shadowrootmode) && (X = ee.call(n, X, !0)), X;
    }
    let Fe = mr ? v.outerHTML : v.innerHTML;
    return mr && ie["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && it(RM, v.ownerDocument.doctype.name) && (Fe = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + Fe), zt && (Fe = to(Fe)), $ && he ? Q(Fe) : Fe;
  }, t.setConfig = function() {
    let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qa(j), Gi = !0, vn = ie, q = fe;
  }, t.clearConfig = function() {
    ci = null, Gi = !1, vn = null, q = null, $ = S, z = "";
  }, t.isValidAttribute = function(j, m, v) {
    ci || qa({});
    const U = Ue(j), J = Ue(m);
    return ld(U, J, v);
  }, t.addHook = function(j, m) {
    typeof m == "function" && st(R, j) && mi(R[j], m);
  }, t.removeHook = function(j, m) {
    if (st(R, j)) {
      if (m !== void 0) {
        const v = gM(R[j], m);
        return v === -1 ? void 0 : mM(R[j], v, 1)[0];
      }
      return Cf(R[j]);
    }
  }, t.removeHooks = function(j) {
    st(R, j) && (R[j] = []);
  }, t.removeAllHooks = function() {
    R = qf();
  }, t;
}
var UM = km();
function FM({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = Y(void 0), [n, i] = pe(void 0), s = ye((o) => {
    r.current = o, i(o);
  }, []);
  return B(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = um(p);
      if (!h)
        return !1;
      const g = N();
      return e === "protected" ? g && hm(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = N(), y = r.current;
      if (y && g && kf(g, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const b = ne(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (b) {
            const C = b.getParent(), A = b.getPreviousSibling(), _ = b.getNextSibling();
            b.remove(), A ? gm(A) : _ && M(_) ? _.select(0, 0) : C?.selectStart();
          }
        } else y.kind === "selection" ? P(g) && (Tu(g), g.removeText()) : at(b) && sM(b);
        return !0;
      }
      if (!g)
        return !1;
      const k = iM(g, p);
      if (k) {
        if (k.kind === "verse") {
          const b = qp();
          b.add(k.node.getKey()), Fr(b);
        } else {
          const b = Fn();
          b.anchor.set(k.node.getKey(), 0, "element"), b.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), Fr(b);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), h.preventDefault(), !0;
      }
      if (P(g) && !g.isCollapsed() && Pu(g)) {
        const b = g.getNodes().filter(me).map((_) => _.getKey()), { anchor: C, focus: A } = g;
        return s({
          kind: "selection",
          intent: p,
          key: b[0],
          anchor: { key: C.key, offset: C.offset, type: C.type },
          focus: { key: A.key, offset: A.offset, type: A.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return !h || !Si(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = UM.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), k = oM(Sk(t, y)), b = N();
      return P(b) && b.insertNodes(k), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Si(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Si(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        kf(N(), p) || s(void 0);
      });
    };
    return we(
      t.registerCommand(Pr, o, Me),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(cr, c, ve),
      t.registerCommand(nr, u, Me),
      t.registerCommand(tk, c, Me),
      t.registerCommand(vl, d, Me),
      t.registerCommand(Us, c, Me),
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
const ZN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function zM({ textDirection: e }) {
  const [t] = ae();
  return KM(t, e), null;
}
function KM(e, t) {
  B(() => ($f(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && $f(e, t);
  })), [e, t]);
}
function $f(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function BM() {
  const [e] = ae();
  return jM(e), null;
}
function jM(e) {
  B(() => {
    if (!e.hasNodes([be, wt, Pe, He, bt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return we(
      e.registerNodeTransform(He, VM),
      e.registerNodeTransform(He, (t) => WM(t, e)),
      e.registerNodeTransform(bt, If),
      e.registerNodeTransform(wt, If),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(bt, (t) => {
        vs(Vn("va"), t), vs(Vn("vp"), t);
      })
    );
  }, [e]);
}
function VM(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || K(r) || F(n) || F(r) || xe(n) || xe(r) || ze(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  ze(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
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
  me(r) && tu(e);
}
function WM(e, t) {
  const r = e.getParent();
  !ze(r) || !e.isAttached() || Ic(t, e.getKey()) && !Ic(t, r.getKey()) && r.insertAfter(e);
}
function If(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; xe(t); )
    t = t.getLastChild();
  (F(t) || M(t) && xe(t.getParent())) && e.insertBefore(Te(" "));
}
function ka(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !Ks(i)))
      return;
    const n = t.getParent();
    if (!n)
      return;
    if (!L(n) || !n.isInline())
      return e;
    t = n;
  }
}
function HM(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function GM() {
  const e = N();
  if (!(!P(e) || !e.isCollapsed()))
    return ka(HM(e.anchor));
}
function JM(e) {
  const t = N();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = xm(e.target)), r ? ka(Ae(r, K)) : void 0;
}
function xm(e) {
  const t = rk(e)?.anchorNode;
  if (Np(t))
    return Ui(t) ?? void 0;
}
function YM(e) {
  if (N())
    return;
  const t = xm(e);
  return t ? ka(Ae(t, K)) : void 0;
}
function Lf(e) {
  const t = Ae(e.getNode(), K);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function XM() {
  const e = N();
  if (!P(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = Lf(t), i = Lf(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const QM = 500;
function ZM(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function eE() {
  const e = N();
  if (!P(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (L(n))
    return ka(n.getChildAtIndex(t.offset));
}
function tE() {
  const [e] = ae(), t = Au(GM), r = Y(void 0);
  return B(() => {
    const n = (i) => {
      _t(vt), Ur(e, vt), t(i);
    };
    return we(e.registerCommand(
      Pr,
      (i) => (r.current = ZM(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      ve
    ), e.registerCommand(qt, () => {
      if (r.current !== void 0 && performance.now() - r.current < QM) {
        const o = eE();
        if (o)
          return n(o), !1;
      }
      if (XM())
        return _t(vt), Ur(e, vt), !1;
      const s = YM(e.getRootElement());
      return s && n(s), !1;
    }, zn), e.registerCommand(Zo, (i) => {
      const s = JM(i);
      return s && n(s), !1;
    }, zn));
  }, [e, t]), null;
}
function rE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = cS({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return E(aS, { trigger: e, items: i });
}
function nE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = We(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? E(oE, { trigger: e, harness: i }) : E(rE, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const iE = [" ", "*"];
function sE(e, t) {
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
function oE({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = pe(void 0), s = Y({ query: "", options: [] }), o = Y(0), a = ye((f, p, h) => {
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
  B(() => we(r.registerCommand(Pr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), $p(() => {
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
  }, Me), r.registerCommand(Ip, (f) => {
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
  }, []), u = ye((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), d = We(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    sE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && E(Rg, { isOpen: !0, children: ({ placement: f }) => E(
    Ig,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? iE : void 0 },
    n.session
  ) });
}
function aE(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (r) => D.repeat(r.length));
}
function cE(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
function lE(e) {
  return e.replace(/ {2,}/g, " ");
}
let Uo;
function uE(e) {
  e && (Uo = e);
}
function Gc(e) {
  return Js(e);
}
function dE(e, t) {
  return e.isEmpty() ? Ap : Tm(e.toJSON(), t);
}
function Tm(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && ia(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Ap;
  if (r.some(CC)) {
    Uo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Cm(r), i = er(n, t);
  return i ? { type: ar, version: or, content: i } : void 0;
}
function fE(e, t) {
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
function pE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return qe({
    type: Ft.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function hE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Rh(r, a, c), qe({
    type: Ft.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function gE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Rh(t, o, a), qe({
    type: bt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function mE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Gc(r) && t) {
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
function yE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return qe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function bE(e, t) {
  const { unknownAttributes: r } = e;
  return qe({ type: ag, ...r, content: t });
}
function kE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return qe({ type: ug, marker: r, ...n, content: t });
}
function xE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return qe({
    type: fg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function TE(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function CE(e, t) {
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
function xi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return qe({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Kh({ sid: n, eid: i, ...s }, o)
  });
}
function _E(e) {
  return e.text;
}
function SE(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return qe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function vE(e) {
  const { marker: t } = e;
  return {
    type: Mo,
    marker: t === "" ? void 0 : t
  };
}
function Df(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function ME(e, t, r, n, i) {
  const s = lr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = xi({
      type: s,
      marker: Ci,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = xi({
      type: s,
      marker: Kn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = xi({
      type: s,
      marker: Kn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = xi({
      type: s,
      marker: Ci
    });
    i.push(l);
  }
  (!n || !uh(n)) && t.forEach((l) => {
    const u = xi({
      type: s,
      marker: Ci,
      eid: l
    });
    i.push(u);
  });
}
function er(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, h = a, g = a, y = a;
    switch (a.type) {
      case It.getType():
        i.push(
          fE(
            l,
            er(l.children, t)
          )
        );
        break;
      case Or.getType():
        i.push(pE(a));
        break;
      case Ft.getType():
        i.push(
          hE(
            u,
            er(u.children, t)
          )
        );
        break;
      case wt.getType():
      case bt.getType():
        i.push(gE(a));
        break;
      case be.getType():
        i.push(
          mE(
            d,
            er(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case ct.getType():
        i.push(
          yE(
            f,
            er(f.children, t)
          )
        );
        break;
      case ri.getType():
        i.push(
          bE(
            a,
            er(a.children, t)
          )
        );
        break;
      case Ki.getType():
        i.push(
          kE(
            a,
            er(a.children, t)
          )
        );
        break;
      case Bi.getType():
        i.push(
          xE(
            a,
            er(a.children, t)
          )
        );
        break;
      case Pe.getType(): {
        const k = er(
          p.children,
          t,
          p.caller
        );
        i.push(
          CE(
            p,
            Gc(t) && p.category === void 0 ? TE(k) : k
          )
        );
        break;
      }
      case Wr.getType():
      case Vr.getType():
      case sr.getType():
      case Lp.getType():
      case qr.getType():
        break;
      case ot.getType():
        if (s = er(
          g.children,
          t,
          r,
          n
        ), s) {
          const k = g.typedIDs[dn];
          if (k)
            ME(s, k, o, e[c + 1], i), o = k;
          else {
            const b = s.shift();
            b && (typeof b == "string" ? Df(i, b) : i.push(b)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case lr.getType():
        i.push(xi(a));
        break;
      case He.getType():
        if (h.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !zs(h.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        h.text !== D && !h.text.startsWith(Al) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        h[Ds]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || h.text !== Dt(r))) {
          let k = _E(h);
          Gc(t) && (n && k.startsWith(D) && (k = k.slice(1)), k = lE(cE(k))), Df(i, k);
        }
        break;
      case ti.getType():
        i.push(
          SE(
            y,
            er(y.children, t)
          )
        );
        break;
      case Jr.getType():
        i.push(vE(a));
        break;
      case ji.getType():
        Uo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Uo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Cm(e) {
  const t = e.findIndex((r) => ia(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Cm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const go = {
  initialize: uE,
  deserializeEditorState: dE
}, EE = /^sd\d*$/, AE = /* @__PURE__ */ new Set([
  ...Object.entries(_c).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === x.Paragraph && !EE.test(e)
  ).map(([e]) => e),
  "qa"
]);
function PE(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Il(i) || Nh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Hx(i)) {
      t && Fo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Dl(i) && AE.has(i.marker) && !Fo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    _m(i.children, t).forEach((s) => {
      const o = NE(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = wE(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function _m(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Sm(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (uh(i)) {
      const s = _m(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Uf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Uf(i, c.nodes)] });
      });
      return;
    }
    t && Fo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Uf(e, t) {
  return { ...e, children: t };
}
function Sm(e) {
  return xg(e) && e.number !== "";
}
function Fo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Sm(r) || Fo(r)) : !1;
}
function NE(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function wE(e) {
  return {
    type: Eo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: yg
  };
}
const Ff = Em([]), OE = {
  type: Lp.getType(),
  version: 1
};
let Nu = [], re, Jn, vm, Pt;
function RE(e, t) {
  Nu = [], IE(e), LE(t);
}
function qE(e = 0) {
}
function $E(e, t) {
  re = t ?? ma();
  let r;
  return e ? (e.type !== ar && Pt?.warn(`This USJ type '${e.type}' didn't match the expected type '${ar}'.`), e.version !== or && Pt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${or}'.`
  ), e.content.length > 0 ? (r = Qc(Lr(e.content)), As(re) && (r = PE(r, Pt))) : r = [Ff]) : r = [Ff], vm?.(Nu), {
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
function IE(e) {
  e && (Jn = e), e?.addMissingComments && (vm = e.addMissingComments);
}
function LE(e) {
  e && (Pt = e);
}
function Mm() {
  return Js(re);
}
function DE(e, t) {
  let { marker: r } = e;
  r !== Ts && Pt?.warn(`Unexpected book marker '${r}'!`), r = r ?? Ts;
  const { code: n } = e;
  (!n || !It.isValidBookCode(n)) && Pt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  re?.markerMode === "editable" || re?.markerMode === "visible" ? i.push(
    Mt("marker", Le(r) + " " + n + D)
  ) : re?.hasGutterParaMarkers && i.push(Mt("marker", Le(r) + D, !0)), i.push(...t);
  const s = Be(e, Mx);
  return qe({
    type: It.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: gh
  });
}
function UE(e) {
  let { marker: t } = e;
  t !== _o && Pt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? _o;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Be(e, Ex);
  let a;
  re?.markerMode === "visible" && (a = !0);
  const c = [
    xt(Gt(t, r) ?? "")
  ];
  return re?.markerMode === "editable" && rA(i, s, c), re?.markerMode === "editable" ? qe({
    type: Ft.getType(),
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
    version: yh
  }) : qe({
    type: Or.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Ch
  });
}
function FE(e) {
  let { marker: t } = e;
  t !== So && Pt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? So;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (yS(re) ?? wt).getType(), c = re?.markerMode === "editable" ? Eh : kg;
  let l, u;
  re?.markerMode === "editable" ? l = Gt(t, r) : re?.markerMode === "visible" && (u = !0);
  const d = Be(e, Fx);
  return qe({
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
function zE(e, t = [], r = !1) {
  let { marker: n } = e;
  be.isValidMarker(n, Jn?.extraValidMarkers) || Pt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (re?.markerMode === "editable") {
    const [a] = t;
    Ni(a) ? a.text = D + a.text : a && t.unshift(xt(D));
  }
  t.length === 0 && t.push(xt(Jt)), Jc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Be(e, Nx);
  return s || QE(n, o, i), s || Yc(e.marker ?? "", i, !1, r), qe({
    type: be.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Th
  });
}
function Em(e) {
  return {
    type: hn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: vh
  };
}
function KE(e, t = []) {
  let { marker: r } = e;
  ct.isValidMarker(r, Jn?.extraValidMarkers) || Pt?.warn(`Unexpected para marker '${r}'!`), r = r ?? Ht;
  const n = [];
  if (ii(re) && (re?.markerMode === "editable" ? n.push(
    kt(r),
    xt(D, wr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && n.push(
    Mt(
      "marker",
      Le(r) + D,
      re?.hasGutterParaMarkers
    )
  )), n.push(...t), Mm()) {
    const s = n.find(
      (o) => !Bl(o) && !(Ni(o) && o.text === D)
    );
    Ni(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = Be(e, Dx);
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
    version: Mh
  });
}
function wu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function BE(e, t = []) {
  const r = Be(e, BT);
  return qe({
    ...wu(),
    type: ri.getType(),
    unknownAttributes: r,
    children: t,
    version: cg
  });
}
function jE(e, t = []) {
  const r = Be(e, WT), n = e.marker ?? Oc, i = [];
  return re?.markerMode === "editable" ? i.push(
    kt(n),
    xt(D, wr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && i.push(
    Mt(
      "marker",
      Le(n) + D,
      re?.hasGutterParaMarkers
    )
  ), i.push(...t), qe({
    ...wu(),
    type: Ki.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: dg
  });
}
function VE(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Rc, a = eg(o, i) ?? o;
  re?.markerMode === "editable" ? s.push(
    kt(a),
    xt(D, wr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && s.push(
    Mt(
      "marker",
      Le(a) + D,
      re?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Be(
    e,
    GT
  );
  return qe({
    ...wu(),
    type: Bi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: pg
  });
}
function WE(e, t) {
  const r = Zx(t);
  let n = () => {
  };
  return Jn?.noteCallerOnClick && (n = Jn.noteCallerOnClick), qe({
    type: sr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Mg
  });
}
function HE(e, t) {
  let { marker: r } = e;
  Pe.isValidMarker(r, Jn?.extraValidMarkers) || Pt?.warn(`Unexpected note marker '${r}'!`), r = r ?? wl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : lu(re?.noteMode), a = Be(e, Bk), c = re?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  re?.markerMode === "editable" ? (l = kt(r, "opening", !1, c), s || (u = kt(r, "closing"))) : re?.markerMode === "visible" && (l = Mt("marker", Le(r) + " "), s || (u = Mt("marker", nt(r))));
  const d = [];
  let f;
  if (l && d.push(l), re?.markerMode === "editable" && !o)
    f = xt(Dt(i), void 0, c), d.push(f), tA(n, d), d.push(...t);
  else {
    const p = xt(D, wr, "token");
    f = WE(i, t), d.push(f, p, ...t.flatMap(GE(p)));
  }
  return u && d.push(u), qe({
    type: Pe.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: rh
  });
}
function GE(e) {
  return (t) => ch(t) ? [t] : [t, e];
}
function JE(e) {
  let { marker: t } = e;
  (!t || !lr.isValidMarker(t, Jn?.extraValidMarkers)) && Pt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Be(e, Nl), s = Bh(e);
  return qe({
    type: lr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Zp
  });
}
function zf(e, t = []) {
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
function YE(e, t) {
  const { marker: r } = e, n = e.type, i = Be(e, Tx), s = [];
  if (re?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = tg(
      n,
      r,
      i
    );
    o && s.push(Mt("marker", o)), a && s.push(Mt("attribute", a)), s.push(...t), c && s.push(Mt("attribute", c)), l && s.push(Mt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Ni(o) && (o.mode = "token");
  }), qe({
    type: ti.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: fh
  });
}
function XE(e) {
  return {
    type: Jr.getType(),
    marker: e,
    text: fs(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: re?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: sg
  };
}
function kt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: qr.getType(),
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
function xt(e, t = void 0, r = "normal") {
  const n = {
    type: He.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Ds] = { textType: t }), n;
}
function Mt(e, t, r = !1) {
  const n = {
    type: Vr.getType(),
    text: t,
    textType: e,
    version: ah
  };
  return r && (n[Ds] = { [ql.key]: !0 }), n;
}
function Ps(e, t) {
  return {
    type: Wr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: ph
  };
}
function Jc(e, t, r = !1) {
  re?.markerMode === "editable" ? t.push(kt(e, "opening", r)) : re?.markerMode === "visible" && t.push(Mt("marker", Le(e, r)));
}
function Yc(e, t, r = !1, n = !1) {
  re?.markerMode === "editable" ? r ? t.push(kt("", "selfClosing")) : t.push(kt(e, "closing", n)) : re?.markerMode === "visible" && t.push(
    Mt(
      "marker",
      r ? nt("") : nt(e, n)
    )
  );
}
function QE(e, t, r) {
  if (re?.markerMode !== "editable" || !t) return;
  const n = Tr(t, ra(e));
  n && r.push(xt(n, "attribute"));
}
function Kf(e, t) {
  if (e.type !== "ms" || re?.markerMode !== "editable" && re?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Be(e, Nl), o = jh(
    n,
    i,
    s,
    Bh(e)
  ), a = Tr(o, na(r ?? ""));
  if (!a) return;
  const c = D + a;
  re?.markerMode === "editable" ? t.push(xt(c, "attribute")) : t.push(Mt("attribute", c));
}
function ZE(e, t) {
  const r = e.marker ?? "";
  if (re?.markerMode === "editable") {
    const n = [];
    Jc(r, n), Kf(e, n), Yc(r, n, !0), t.push(Ps("milestone", n));
  } else
    Jc(r, t), Kf(e, t), Yc(r, t, !0);
}
function Bf(e, t, r) {
  t !== void 0 && r.push(
    Ps(e, [
      kt(e, "opening"),
      xt(D + t, "attribute"),
      kt(e, "closing")
    ])
  );
}
function eA(e, t) {
  re?.markerMode === "editable" && (Bf("va", e.altnumber, t), Bf("vp", e.pubnumber, t));
}
function tA(e, t) {
  e !== void 0 && t.push(
    Ps("cat", [
      kt("cat", "opening"),
      xt(D + e, "attribute"),
      kt("cat", "closing")
    ])
  );
}
function rA(e, t, r) {
  e !== void 0 && r.push(
    Ps("ca", [
      kt("ca", "opening"),
      xt(D + e, "attribute"),
      kt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Ps("cp", [
      kt("cp", "opening"),
      xt(D + t, "attribute")
    ])
  );
}
function jf(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function nA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Vf(e, t) {
  t.marker === Kn && t.sid !== void 0 && e.push(t.sid), t.marker === Ci && t.eid !== void 0 && nA(e, t.eid);
}
function Xc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [zf(o, [...n])] : o, c = e[i];
  Vf(n, c);
  const l = Xc(
    e.slice(i + 1, s),
    jf(t, i + 1),
    c.marker === Kn,
    n
  ), u = zf(l, [...n]), d = e[s];
  Vf(n, d);
  const f = Xc(
    e.slice(s + 1),
    jf(t, s + 1),
    d.marker === Kn,
    n
  );
  return [...a, u, ...f];
}
function Lr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(xt(Mm() ? aE(i) : i));
    else if (!i.type)
      Pt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case It.getType():
          n.push(DE(i, Lr(i.content)));
          break;
        case Ft.getType():
          n.push(UE(i));
          break;
        case bt.getType():
          re?.hasSpacing || n.push(OE), n.push(FE(i)), eA(i, n);
          break;
        case be.getType():
          n.push(
            zE(i, Lr(i.content, !0), t)
          );
          break;
        case ct.getType():
          n.push(KE(i, Lr(i.content)));
          break;
        case Pe.getType():
          n.push(HE(i, Lr(i.content)));
          break;
        case lr.getType():
          eh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Nu?.push(i.sid)), n.push(JE(i)), ZE(i, n);
          break;
        case Jr.getType():
          n.push(XE(i.marker ?? ""));
          break;
        case ag:
          n.push(BE(i, Lr(i.content)));
          break;
        case ug:
          n.push(jE(i, Lr(i.content)));
          break;
        case fg:
          n.push(VE(i, Lr(i.content)));
          break;
        default:
          Pt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(YE(i, Lr(i.content)));
      }
  }), Xc(n, r);
}
function Qc(e) {
  const t = e.findIndex(
    (n) => Il(n) || Nh(n) || Dl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    VT(n)
  );
  if (t >= 0) {
    const n = Qc(e.slice(0, t)), i = e[t], s = Qc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || xg(n)))
    return [Em(e)];
  return e;
}
const ur = {
  initialize: RE,
  reset: qE,
  serializeEditorState: $E
};
function Am(e) {
  if (e && !O(e)) {
    if (M(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = Am(t);
        if (r) return r;
      }
  }
}
function iA() {
  const e = N();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((M(t) && !O(t) ? Hn(t) : void 0) && M(t)) {
      const i = Te(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      wi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Am(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(D) ? D : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return M(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Pm(e)) {
    if (!Hn(t)) continue;
    wi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(D) && r.setTextContent(n.slice(D.length));
  }
  return !0;
}
function Pm(e) {
  const [t, r] = Cl(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!M(a) || O(a) || se(a, ue) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Nm(e) {
  let t = e;
  for (; F(t) || xe(t); ) t = t.getParent();
  return t;
}
function wm(e) {
  const t = Nm(e.getParent());
  return at(t) ? t : void 0;
}
function sA() {
  const e = N();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return Hn(t) ? !!wm(t) : !1;
}
function Om(e) {
  const t = Te(""), r = e.getNode(), n = e.offset;
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
    if (F(o)) wi(t, { renderGlyphs: !0 });
    else if (!xe(o) || !oA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function oA(e, t) {
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
function Rm(e) {
  const t = e.anchor.getNode();
  if (O(t) && !Ql(t, e.anchor.offset)) {
    const r = t.getParent();
    if (F(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = N();
      return P(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function qm() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Rm(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!M(r) || O(r) || !Hn(r)) return !1;
  const n = wm(r);
  if (!n) return !1;
  const { moving: i } = Om(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; xe(o); ) o = o.getFirstChild() ?? void 0;
  return F(o) ? ua(o) : s.select(0, 0), !0;
}
const $m = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${wh(je().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = Dh(e), r = nu(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = tT(0, o);
        const a = $C(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || rT(c) && Kl(parseInt(n, 10), c);
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
function Zc(e, t) {
  return Pe.isValidMarker(e, t) || !!$m[e] || ct.isValidMarker(e, t) || be.isValidMarker(e, t);
}
function aA(e, t) {
  return be.isNoteContentMarker(e) ? !1 : be.isValidMarker(e, t);
}
function Im(e, t, r, n, i, s) {
  const o = Ag(
    e,
    void 0,
    void 0,
    t,
    n ?? ma(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function el(e, t, r, n, i, s, o) {
  if (Pe.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Im(
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
  const a = pA(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = N();
      P(u) && (Zl(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = jd(d, ur, r), h = Ua(p);
      if (P(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), k = Hn(g), b = u.anchor.key === u.focus.key;
        if (F(h) && k && b && !dc(h, o))
          uA(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (F(h) && !b && !dc(h, o) && dA(u))
          fA(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          hA(
            u,
            () => Ua(p)
          );
        else if (L(h) && !h.isInline()) {
          const C = u.insertParagraph();
          if (C) {
            const A = C.getChildren();
            h.append(...A), C.replace(h), at(h) && Wi(h) || h.selectStart();
          }
        } else if (F(h) && M(g) && !O(g) && F(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        dc(h, o)) {
          const C = g.getParent();
          if (F(C)) {
            const A = u.anchor.offset;
            if (A === 0) g.insertBefore(h);
            else if (A >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [w] = g.splitText(A);
              w.insertAfter(h);
            }
            h.getChildren().forEach((w) => {
              O(w) && w.setNested(!0);
            });
            const _ = h.getChildren().find((w) => M(w) && !O(w));
            _ && M(_) ? _.select(
              _.getTextContentSize(),
              _.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (M(g) && !O(g) && u.isCollapsed() && (K(y) || F(y) && K(y.getParent()))) {
          const C = F(y) ? y : void 0, A = C ? cA(g, u.anchor.offset) : [];
          let w = (C ?? g).insertAfter(h);
          if (fr(h)) {
            const $ = {
              ...r || ma(),
              markerMode: "hidden"
            }, z = jd(
              d,
              ur,
              $
            ), S = Ua(z);
            w = w.insertAfter(S);
          }
          if (A.length > 0 && C) {
            const $ = zo(C).append(...A);
            w.insertAfter($), C.isEmpty() && C.remove();
          } else M(w.getNextSibling()) || w.insertAfter(Te(D));
          L(w) && w.selectEnd();
        } else if (u.insertNodes([h]), SA(h), f) {
          const C = qp();
          C.add(h.getKey()), Fr(C);
        } else if (F(h)) {
          const C = h.getChildren().find((A) => M(A) && !O(A));
          C && M(C) ? C.select(
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
function cA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function dc(e, t) {
  return ((t ?? Ao).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function lA(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(gt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function uA(e, t, r, n) {
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
    const [o, a] = Li(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (wi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), M(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => M(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => M(o) && !O(o));
  M(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function dA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || F(n)) continue;
    if (!M(n) || n.getType() !== He.getType() || se(n, ue) === "attribute") return !1;
    const i = eC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Hn(n) && (r = !0);
  }
  return r;
}
function fA(e, t, r) {
  const n = Pm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Hn(a)) return;
    wi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(D) && c.setTextContent(l.slice(D.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(D) || i.setTextContent(D + i.getTextContent());
  const s = t.getChildren().find((a) => M(a) && !O(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function pA(e, t) {
  let r = $m[e];
  return r || (ct.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: ct.getType(), marker: e, content: [] }] })
  } : be.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: be.getType(), marker: e };
      return (be.isValidFootnoteMarker(e) || be.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function hA(e, t) {
  const r = e.getNodes(), [n, i] = Li(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = Lm(
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
    s || (s = t(), c.insertBefore(s), l = !0, F(s) && s.getChildren().some((d) => O(d) && d.getMarkerSyntax() === "opening") && lA(s, F(s.getParent()))), mA(c, s, l);
  }), (M(s) || L(s)) && s.selectEnd();
}
function Li(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Ou(e) {
  return xe(e) || K(e) || K(e.getParent());
}
function Lm(e, t, r, n, i) {
  if (!Ou(e)) {
    if (M(e))
      return gA(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function gA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function mA(e, t, r) {
  if (M(t)) {
    const n = tl(e, t);
    t.setTextContent(n), e.remove();
  } else if (L(t)) {
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
    tl(e, t), r && F(t) && t.getChildren().some((s) => O(s)) && M(e) && !O(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function tl(e, t) {
  let r = e.getTextContent();
  if (M(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    tu(n), M(n) || t.insertBefore(Te(" "));
  }
  return r;
}
function Dm(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = Yn(u, t);
    if (!f) return !1;
    const p = M(u) ? u.getTextContentSize() : 0;
    if (Wf(f, r), M(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), y = Math.max(0, Math.min(d - g, h)), k = N();
      P(k) && k.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Li(e);
  if (!qu(n, t, s, o)) return !1;
  const a = Ru(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = Yn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Km(d, a);
    f && (Wf(f, r), l = !0);
  }), Bm(a, i), l;
}
function Wf(e, t) {
  e.getChildren().forEach((n) => {
    Nt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Jt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    M(n) && i.startsWith(D) && n.setTextContent(i.slice(D.length));
  }), xc(e);
}
function Ru(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Lm(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    M(o) && n.push(o);
  }), n;
}
function Yn(e, t) {
  let r = e, n;
  for (; r && !at(r); ) {
    if (K(r)) return;
    !n && F(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Um(e) {
  const t = Ae(
    e,
    (r) => K(r) || at(r)
  );
  return K(t);
}
function Fm(e) {
  return e.filter(
    (t) => !Ou(t) && (M(t) || L(t) && t.isInline())
  );
}
function yA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!M(i) || Ou(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function bA(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !zm(n, r)
  );
}
function qu(e, t, r, n, i) {
  const s = Fm(e), o = yA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Yn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !bA(l, s, o);
  });
}
function zm(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Nt(r));
}
function Km(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (L(u) && t.some((d) => u.isParentOf(d))) {
      if (!zm(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Nt(n[s - 1]) && (s -= 1), o < n.length - 1 && Nt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(zo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(zo(e).append(...c)), e;
}
function zo(e) {
  return nk(e);
}
function Bm(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function kA(e, t, r) {
  if (e.isCollapsed()) {
    const l = Yn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Pd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Li(e);
  if (!qu(n, r, i, s, t)) return !1;
  const o = Ru(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Yn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Km(u, o);
    d && (Pd(d, t), c = !0);
  }), c;
}
function xA(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = Li(e);
  if (!!!i?.some(
    (y) => qu(s, y, o, a)
  ) && !TA(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = N();
    P(k) && Dm(k, y, n) && (l = !0);
  });
  const u = N();
  if (!P(u)) return l;
  const d = u.isBackward(), [f, p] = Li(u), h = Ru(
    u.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (y) => !Um(y) && !Yn(y, t)
  );
  return g.length > 0 && (CA(g).forEach((y) => _A(y, t)), l = !0), Bm(h, d), l;
}
function TA(e, t) {
  return Fm(e).some(
    (r) => !Um(r) && !Yn(r, t)
  );
}
function CA(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function _A(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => F(a) && a.getMarker() === t
  ), s = i ? zo(i) : Kr(t);
  e[0].insertBefore(s), s.append(...e), i === r || tl(e[0], s);
}
function SA(e) {
  me(e) && (tu(e.getPreviousSibling()), Cg(e.getNextSibling()));
}
const jm = {
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
}, Hf = "psc-active-text", co = "psc-empty-text";
function vA({ viewOptions: e }) {
  const [t] = ae(), r = Y(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return B(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Hf), r.current = o, o && t.getElementByKey(o)?.classList.add(Hf);
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
          const c = a.closest(`.${co}`);
          if (!c) return !1;
          const l = Ui(c);
          if (!me(l)) return !1;
          const u = l.getParent();
          if (!L(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Et
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = fc(), f = MA(), p = [], h = [];
          return je().getChildren().forEach((g) => {
            if (!L(g)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = AA(g);
            p.push(...y), h.push(...k);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(co) : t.getElementByKey(d)?.classList.add(co);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(co));
      }),
      t.registerCommand(
        Ml,
        () => (i(void 0), !1),
        Et
      ),
      t.registerCommand(
        ik,
        () => {
          const o = t.getEditorState().read(fc);
          return o !== r.current && i(o), !1;
        },
        Et
      )
    ];
    return i(t.getEditorState().read(fc)), we(...s);
  }, [t, n]), null;
}
function fc() {
  return EA(N() ?? void 0)?.getKey();
}
function MA() {
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
    me(s[a]) && (o = s[a].getKey());
  return o;
}
function EA(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function AA(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (me(c)) break;
      if (!($t(c) || O(c)) && c.getTextContent().replaceAll(ko, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function rl(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function Vm(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !Op(e, n, i);
}
function Wm(e, t) {
  return e.length <= t ? e : e.slice(0, $u(e, t));
}
function $u(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of dk(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const PA = 16;
function NA(e, { $isHidden: t, $measure: r } = {}) {
  const n = (b) => t ? Iu(b, t).length : b.getTextContent().length;
  r ??= n;
  const i = N();
  if (!P(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Ko(s), l = Ko(o), u = i.getNodes(), d = new Map(u.map((b) => [b.getKey(), RA(b)])), f = u.length > 0 ? d.get(u[0].getKey()) : void 0, p = f && wA(s, f) ? f : void 0, h = (b) => {
    const C = b > 0 ? OA(u, d, p, c, l, b, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), C ? i.focus.set(C.node.getKey(), C.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!C;
  };
  let g = Math.min(e, n(i));
  if (h(g) && r(i) <= e) return !0;
  let y = 0, k = 0;
  g -= 1;
  for (let b = 0; b < PA && y <= g; b++) {
    const C = Math.floor((y + g) / 2);
    h(C) && r(i) <= e ? (k = C, y = C + 1) : g = C - 1;
  }
  return h(k), !0;
}
function nl(e) {
  return e.isToken() || Gs(e) || Re(e.getParent());
}
function wA(e, t) {
  const r = L(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && rr(r.getKey(), 0, "text").isBefore(e);
}
function OA(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, d;
  const f = /* @__PURE__ */ new Map(), p = (g) => {
    const y = t.get(g.getKey());
    return y && r?.is(y) ? void 0 : y;
  }, h = (g) => {
    let y = d ? d.endBefore : g;
    for (; ; ) {
      const k = qA(y, e, n);
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
        const b = g === 0 ? n : 0, C = g === a ? i : y.getTextContentSize(), A = C - b, _ = nl(y);
        if (_ && c + A > s) return h(u);
        if (!_ && c + A >= s) {
          const w = $u(y.getTextContent(), b + (s - c));
          return h({ node: y, offset: Math.max(b, w) });
        }
        c += A, u = { node: y, offset: C };
      } else if (Zn(y) || Qn(y)) {
        const b = y.getTextContentSize();
        if (c + b > s) return h(u);
        c += b;
      }
    }
  }
  return h(u);
}
function RA(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (K(r) || Cu(r)) && (t = r);
  return t;
}
function qA(e, t, r) {
  if (!e) return e;
  const n = Ae(e.node, (y) => L(y) && !y.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((y) => y.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let y = o; y <= a; y++)
    l.push(c.length), c += i[y].getTextContent();
  const u = l[s - o], d = u + e.offset, f = $u(c, d);
  if (f === d) return e;
  const p = (y) => t[0]?.is(y) ?? !1;
  if (nl(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= u) {
    const y = f - u;
    return y >= (p(e.node) ? r : 0) ? { ...e, offset: y } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((y) => y.is(h))) return;
  if (nl(h))
    return { node: h, offset: p(h) ? r : 0 };
  const g = f - l[0];
  return g >= (p(h) ? r : 0) ? { node: h, offset: g } : void 0;
}
function Iu(e, t) {
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
          u === 0 ? Ko(i) : 0,
          u === n ? Ko(s) : d.length
        );
      } else (Zn(l) || Qn(l)) && (u !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function il(e) {
  const t = e.getParent();
  return !!t && Ae(t, (r) => K(r) && !!r.getIsCollapsed()) !== null;
}
function Hm(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    mt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), L(i)) for (const { node: s } of ei(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function $A(e) {
  return e.getNodes().some(
    (t) => Zn(t) || K(t) || me(t) || Ge(t) || Cu(t)
  );
}
function Ko(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const pr = String.raw`\w-`, Gm = "a-z0-9", IA = `[a-z][${Gm}]*`, LA = new RegExp(
  String.raw`^\\(\+?[${pr}]+)[ \u00A0]$`
), Jm = new RegExp(String.raw`^\\(\+?[${pr}]+)$`), DA = new RegExp(String.raw`^\\\+?[${pr}]*\*$`), UA = new RegExp(
  String.raw`^\\(\+?[${pr}]+)(?:[ \u00A0]|$)`
), FA = new RegExp(
  String.raw`^\\(\+?)([${pr}]+)`
), zA = new RegExp(
  String.raw`\\\+?[${pr}]+(?:\\?\*|[ \u00A0])`
), KA = new RegExp(
  String.raw`\\\+?[${pr}]*$`
), BA = new RegExp(
  String.raw`^\\(${IA})( |$)`
), jA = new RegExp(
  String.raw`\\[${Gm}+*]*$`,
  "i"
);
function Ym(e) {
  const t = e.getParent();
  if (!K(t) || t.getIsCollapsed() !== !1 || !Jp(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!O(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const Bo = "usfm:", Xm = "usfmopen", Qm = "usfmclosed";
function VA(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const WA = new RegExp(
  [Bo, Xm, Qm].map(VA).join("|")
), HA = "\uFEFF", GA = /^usfm_(.+)$/;
function JA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function YA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function XA(e) {
  return e.startsWith(Bo) ? YA(e.slice(Bo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Zm(e) {
  for (const t of e.classList) {
    const r = GA.exec(t);
    if (r) return r[1];
  }
}
function QA(e) {
  const t = Zm(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function ZA(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(Bo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Xm) && !n.contains(Qm)) && Zm(r) !== void 0)
      return !0;
  }
  return !1;
}
function ey(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(XA(e.nodeValue ?? ""));
    return;
  }
  if (!JA(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => ey(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? QA(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function eP(e) {
  if (!WA.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !ZA(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => ey(n, !1, r)), r.join("").replaceAll(HA, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function tP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = se(e, ue);
  if (r === "attribute" || r === wr || Ym(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Re(o) || ze(o)) return;
  const n = t.startsWith(D) && F(e.getParent()), i = n ? t.slice(1) : t, s = (n ? D : "") + i.replace(/ (?=[ \u00A0])/g, D).replace(new RegExp("(?<=\\u00A0) ", "g"), D);
  s !== t && e.setTextContent(s);
}
function rP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function nP(e, t) {
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
function sl(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? eP(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(rP(s)) : ""),
    isInternal: nP(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Gf = String.raw`\\(?:\+?[${pr}]+\*?|\*)`, iP = new RegExp(
  String.raw`(?<=${Gf})\u00A0|\u00A0(?=${Gf})`,
  "g"
);
function Lu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(iP, " ").replaceAll(D, "~");
}
const ty = new RegExp(
  String.raw`\\c(?![${pr}])[ \u00A0]*[^\s\\]*`,
  "g"
), ry = new RegExp(String.raw`\\id(?![${pr}])[^\n\\]*`, "g"), sP = new RegExp(
  String.raw`^(?:${ty.source}|${ry.source})`
);
function Du(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(ty, "").replace(ry, "");
    return sP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function ol(e) {
  if (M(e) && se(e, ue) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Ie(t)) return !0;
  return !1;
}
function oP(e) {
  return ol(e.anchor.getNode()) || ol(e.focus.getNode());
}
function aP(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && ol(t.getNode());
}
function cP(e, t) {
  const n = aP(e) ? t : Lu(Du(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function lP(e, t = !1, r = () => {
}) {
  const n = sl(e, fn()._config.namespace);
  if (!n) return !1;
  const i = N(), s = P(i) && oP(i);
  if (!s && n.isInternal || t && P(i) && Si(i))
    return !1;
  const { text: o } = n;
  if (!o || !P(i)) return !1;
  if (e?.preventDefault(), s)
    return cP(i, o), !0;
  const a = Lu(Du(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = fn();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(ms, void 0), u === "") return;
    const f = N();
    P(f) && f.insertText(u);
  }), !0;
}
function uP(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return K(t) ? !mt(e.getPreviousSibling()) : !1;
}
function dP(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const r = e.getParent();
  if (!K(r) || !mt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function fP(e) {
  const t = e.getParent();
  return (K(t) ? t.getCaller() : void 0) || ys;
}
function pP(e) {
  const t = e.getParent();
  return !t || mn(t) === void 0;
}
function Uu(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Cl(e);
  let l = "", u = !0;
  for (const d of t) {
    if (L(d) && !d.isInline()) {
      !u && pP(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, mt(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + fP(d));
    else if (M(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += uP(d) ? "" : f.replaceAll(D, " ") + dP(d, d === n);
    } else (Zn(d) || Qn(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function ny(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function hP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => ke(r) || Re(r)
    )
  );
}
function gP(e) {
  const t = N();
  if (!P(t) || t.isCollapsed()) return;
  const r = Uu(t), n = {
    "text/plain": r,
    "text/html": ny(r)
  };
  if (ya() || hP(t)) return n;
  const i = pk(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function Jf(e, t, r, n) {
  const i = N();
  if (!P(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Zg();
  const s = gP(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], iy(e, t, i, s, r, n)) : !1;
}
function iy(e, t, r, n, i, s) {
  const o = rl(s);
  if (o !== void 0 && Vm(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), al(e, t, { "text/plain": Wm(a, o) })) : al(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function al(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || fk(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function cl(e, t) {
  const r = cu();
  if (!r?.end) return;
  const n = mP(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = ga(r);
        return i ? Uu(i) : void 0;
      },
      { editor: n.editor }
    );
}
const pc = /* @__PURE__ */ new WeakMap();
function mP(e, t) {
  const r = e.getEditorState();
  if (pc.has(r)) {
    const i = pc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = yP(r, t);
  return pc.set(r, n), n;
}
function yP(e, t) {
  const r = ku(mu);
  if (!r) return;
  const n = go.deserializeEditorState(e, t);
  if (!n) return;
  const i = sk({
    namespace: "markers-view-copy",
    nodes: [ot, ...pu],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    ur.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function bP({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = ae();
  return B(() => {
    const n = (i, s) => {
      const o = N();
      if (!P(o) || o.isCollapsed()) return !1;
      const a = cl(r, e);
      return a === void 0 ? !1 : iy(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": ny(a) },
        s,
        t
      );
    };
    return we(
      r.registerCommand(Mi, (i) => n(i, !1), Me),
      r.registerCommand(cr, (i) => n(i, !0), Me)
    );
  }, [r, e, t]), null;
}
const Yf = /* @__PURE__ */ new WeakMap();
function kP({
  limit: e,
  viewOptions: t
}) {
  const [r] = ae(), n = Y(rl(e)), i = Y(t), s = Y(!1), o = Y(void 0);
  return B(() => {
    n.current = rl(e), i.current = t, o.current?.();
  }, [e, t]), B(() => {
    let a, c;
    const l = (k) => {
      const b = n.current;
      if (b === void 0) return;
      const C = Yf.get(k);
      if (k.defaultPrevented && C === void 0) return;
      const A = r.getRootElement();
      if (!A) return;
      const _ = A.ownerDocument.getSelection();
      if (!_ || !CP(_, A)) return;
      k.preventDefault();
      const w = Wm(
        C ?? _.toString().replaceAll(D, " "),
        b
      );
      Yf.set(k, w);
      const $ = k.clipboardData;
      if ($) {
        if (!w) {
          C !== void 0 && $.clearData();
          return;
        }
        $.setData("text/plain", w);
      }
    }, u = (k) => {
      n.current !== void 0 && ak(k, "a", { ctrlKey: !Ei, metaKey: Ei }) && (SP(c?.activeElement, r.getRootElement()) || k.preventDefault());
    }, d = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, f = () => {
      const k = n.current === void 0 ? void 0 : a;
      k !== c && (d(), c = k, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = f;
    const p = (k) => (k?.preventDefault(), !0), h = (k) => {
      const b = n.current;
      if (b === void 0 || (s.current = !1, Vm(r, k))) return !1;
      if (b <= 0) return p(k);
      const C = N();
      if (Qo(C))
        return C.getTextContent().length + Hm(C.getNodes()) <= b ? !1 : p(k);
      if (!P(C) || C.isCollapsed()) return !1;
      const A = xP(r, i.current);
      return A.$size(C) <= b ? !1 : (NA(b, A.options), C.isCollapsed() ? p(k) : (r.isEditable() || $p(() => TP(r)), s.current = !0, !1));
    }, g = (k, b) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const C = N();
      if (!P(C) || C.isCollapsed()) return !1;
      const A = b && r.isEditable() && !$A(C);
      return al(
        k && typeof k == "object" && "clipboardData" in k ? k : null,
        r,
        { "text/plain": Iu(C, il) },
        A ? () => C.removeText() : void 0
      );
    }, y = we(
      r.registerCommand(Mi, h, ve),
      r.registerCommand(cr, h, ve),
      r.registerCommand(
        Mi,
        (k) => g(k, !1),
        Cr
      ),
      r.registerCommand(
        cr,
        (k) => g(k, !0),
        Cr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        ok,
        (k) => n.current === void 0 ? !1 : (k?.preventDefault(), !0),
        ve
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
function xP(e, t) {
  if (Js(t)) {
    const n = (i) => Uu(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && cl(e, r) !== void 0) {
    const n = (i) => cl(e, r)?.length ?? Iu(i, il).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + Hm(n.getNodes()),
    options: { $isHidden: il }
  };
}
function TP(e) {
  e.getEditorState().read(() => {
    const t = N(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!P(t) || !r) return;
    const n = Xf(e, t.anchor), i = Xf(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function Xf(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = ck(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = L(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function CP(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const _P = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function SP(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? _P.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const vP = /^\+/;
function Fu(e, t) {
  const r = t.replace(vP, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function sy(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function oy(e, t) {
  return sy(e, t) !== void 0;
}
function ll(e, t) {
  const r = sy(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function jo(e, t, r) {
  const n = L(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function MP(e, t, r, n, i) {
  const s = Fu(n, t);
  if (!s) {
    jo(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && jo(e, "invalid", i);
}
function vi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (F(s)) {
      const o = s.getMarker();
      i || MP(s, o, t, r, n), vi(s, t, r, n, i || o === "xq");
    } else if (me(s)) {
      if (i) continue;
      const o = Fu(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? vi(s, s.getMarker(), r, n, i) : ze(s) || L(s) && vi(s, t, r, n, i);
}
function EP(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Fu(e, a);
    if (!c) {
      jo(o, "unknown", r), ll(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    ll(n, l) || jo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of je().getChildren())
    ze(o) || (ke(o) ? (i(o, o.getMarker()), s(o) && vi(o, void 0, e, r, !1)) : Ge(o) ? i(o, o.getMarker()) : le(o) ? (i(o, o.getMarker()), s(o) && vi(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && vi(o, "p", e, r, !1));
  return r;
}
function AP(e) {
  return !!e?.includes("(basic)");
}
function PP(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function ay(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Zc(e, t);
}
function zu(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function cy(e, t) {
  const r = [];
  for (const n of t) {
    const i = zu(e, n);
    i && ll(r, i);
  }
  return r;
}
function mo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: PP(e.description),
    isBasic: AP(e.description)
  };
}
function NP(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function ul(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : NP(e.marker, t.marker);
}
function dl(e, t, r) {
  if (t.noteMarker) return [];
  const n = cy(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && ay(i.marker, r)
  ).filter((i) => {
    const s = zu(e, i.marker);
    return s !== void 0 && oy(n, s);
  }).map((i) => mo(i, "paragraph")).sort(ul);
}
function wP(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => ay(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => mo(c, "character")).sort(ul);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => mo(c, "character")),
    ...a.map((c) => mo(c, "note"))
  ].sort(ul);
}
function OP(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function RP(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function qP(e, t, r) {
  return [
    ...OP(e, t.openCharMarkers),
    ...wP(e, t, r)
  ].sort(RP);
}
function $P(e, t, r) {
  if (t.source === "paragraph") return dl(e, t, r);
  const n = qP(e, t, r);
  return n.length > 0 ? n : dl(e, t, r);
}
function IP(e, t, r) {
  const n = dl(e, t, r), i = cy(e, t.previousParaMarkers), s = zu(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && oy(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const dt = "￼";
function ly(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== dt ? e.slice(1) : e;
}
function Qf(e) {
  return Bl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function uy(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = ur.serializeEditorState(
    {
      type: ar,
      version: or,
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
  for (; Qf(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Dt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Qf(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function dy(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function fy(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([u]) => u !== "closed")
  ), o = ur.serializeEditorState(
    {
      type: ar,
      version: or,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === Pe.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function py(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = ur.serializeEditorState(
    { type: ar, version: or, content: [s, ...r] },
    n
  ).root.children;
  if (!Il(o)) return { failure: "shape" };
  const c = Ih(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function lo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function ss(e, t) {
  KA.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += dt;
}
function Wt(e) {
  return e.replaceAll(D, " ");
}
function LP(e, t, r = !1) {
  if (Js(t)) return Wt(e);
  if (e === D) return " ";
  const n = r && e.startsWith(D), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(D, "~");
}
function hs(e) {
  const t = e.getTextContent();
  return Rr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Ku(e, t) {
  const r = e[t];
  if (!Ze(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = aa(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function hy(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Bu(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Cs(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function ju(e) {
  return !!e.getUnknownAttributes();
}
function xa(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && Rl(e);
}
function Vu(e, t) {
  return Ze(e) ? !xa(e.getMarker(), t) : K(e) || ze(e) ? !0 : $e(e) ? ju(e) : F(e) ? gy(e, t) : !1;
}
function gy(e, t) {
  if (fT(e)) return !0;
  const r = e.getMarker();
  return Zk(r) || t(r) !== void 0 || DP(e) && !UP(e) ? !1 : !FP(e);
}
function DP(e) {
  const t = e.getParent();
  return t !== null && Lt(t) !== void 0;
}
function UP(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function FP(e) {
  const t = e.getChildren().filter((i) => O(i) && i.getMarker() === e.getMarker()).filter(O);
  if (t.some((i) => !Hr(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const jt = "", Vt = "";
function Zf(e) {
  return e.flatMap((t) => Ie(t) ? t.getChildren() : [t]);
}
function ls(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ze(s)) {
      const o = Ku(e, i);
      xa(s.getMarker(), r) && hy(o) ? (t.push(
        jt,
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
      ), ls(Zf(o), t, r), t.push(Vt)) : t.push(dt), i += o.length;
    } else if ($e(s)) {
      const o = Bu(e, i);
      ju(s) ? t.push(dt) : (t.push(
        jt,
        "verse",
        Wt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ls(Zf(o), t, r), t.push(Vt)), i += o.length;
    } else O(s) ? t.push(jt, "marker", Wt(s.getTextContent()), Vt) : Yr(s) ? t.push(jt, "unmatched", Wt(s.getTextContent()), Vt) : Vu(s, r) ? t.push(dt) : Qn(s) ? t.push(" ") : M(s) ? t.push(
      Wt(
        n ? ly(hs(s)) : hs(s)
      )
    ) : F(s) ? (t.push(jt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ls(s.getChildren(), t, r, !0), t.push(Vt)) : L(s) ? (t.push(jt, s.getType()), ls(s.getChildren(), t, r), t.push(Vt)) : t.push(dt);
  }
}
function Mr(e, t) {
  const r = [];
  return ls(e, r, t), r.join("");
}
function Er(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Di(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Wu(e) {
  return e.type ?? "";
}
function my(e, t, r) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Le(e, r);
}
function hc(e, t) {
  const r = e[t];
  if (!(!r || Wu(r) !== "attribute-run"))
    return Er(r) ?? [];
}
function Ar(e, t) {
  const r = [];
  return us(e, r, t), r.join("");
}
function us(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Wu(s);
    if (o === "ms") {
      const l = s, u = hc(e, i + 1);
      u && xa(l.marker ?? "", r) ? (t.push(
        jt,
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
      ), us(u, t, r), t.push(Vt), i += 1) : t.push(dt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(dt);
        continue;
      }
      t.push(
        jt,
        "verse",
        Wt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = hc(e, i + 1 + u);
      for (; d; )
        us(d, t, r), u++, d = hc(e, i + 1 + u);
      t.push(Vt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        jt,
        "marker",
        Wt(
          my(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Vt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(jt, "char", JSON.stringify(l.unknownAttributes ?? null)), us(Er(s) ?? [], t, r, !0), t.push(Vt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(dt);
      continue;
    }
    if (o === "unmatched") {
      t.push(jt, "unmatched", Wt(Di(s) ?? "")), t.push(Vt);
      continue;
    }
    const a = Di(s);
    if (a !== void 0) {
      t.push(Wt(n ? ly(a) : a));
      continue;
    }
    const c = Er(s);
    c ? (t.push(jt, o), us(c, t, r), t.push(Vt)) : t.push(dt);
  }
}
function bn(e) {
  let t = 0;
  for (const r of e) {
    const n = Er(r);
    if (n) {
      t += bn(n);
      continue;
    }
    const i = Di(r);
    if (i !== void 0)
      for (const s of i) s === dt && t++;
  }
  return t;
}
function Ns(e, t, r, n, i) {
  kn(e.getChildren(), t, r, n, i);
}
function kn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      lo(t, a, Wt(a.getTextContent()));
    else if (Ze(a)) {
      s();
      const c = Ku(e, o);
      xa(a.getMarker(), r) && hy(c) ? kn(c, t, r, n) : ss(t, [a, ...c]), o += c.length;
    } else if (K(a) || ze(a))
      s(), ss(t, [a]);
    else if ($e(a)) {
      s();
      const c = Bu(e, o);
      ju(a) ? ss(t, [a, ...c]) : (lo(t, a, Wt(hs(a))), kn(c, t, r, n)), o += c.length;
    } else if (F(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && gy(a, r) ? ss(t, [a]) : Ns(a, t, r, n, { pending: !0 });
    else if (Qn(a))
      s(), lo(t, a, " ");
    else if (M(a)) {
      const c = Rr(a) || se(a, ue) === "attribute", l = s() && !c;
      lo(
        t,
        a,
        c ? Wt(hs(a)) : LP(hs(a), n, l)
      );
    } else L(a) ? Ns(a, t, r, n, i) : (s(), ss(t, [a]));
  }
}
function yy(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (ze(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Ns(e, i, t, r), i;
}
function Ta(e, t, r, n) {
  for (const i of t) {
    const s = yy(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Ca(e, t) {
  let r = 0;
  const n = (i) => {
    if (M(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(dt);
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
function ws(e, t = []) {
  for (const r of e)
    $e(r) ? t.push(r) : L(r) && ws(r.getChildren(), t);
  return t;
}
function _a(e) {
  let t = 0;
  const r = (n) => {
    if (M(n))
      for (const i of n.getTextContent()) i === dt && t++;
    else L(n) && n.getChildren().forEach(r);
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
function zP(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), L(s) && Ns(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const Os = /\s/;
function by(e) {
  return e.filter(Sa).length;
}
function Sa(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return M(t) && !O(t) && se(t, ue) === "attribute";
}
function KP(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return O(t) || Sa(e);
}
function ep(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Sa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      Os.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function BP(e, t, r, n) {
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
function va(e, t, r, n) {
  const { key: i, offset: s } = BP(
    e,
    t,
    r,
    n
  ), o = ep(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !KP(a) ? ep(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: by(t.spans) };
}
function gc(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function jP(e) {
  const t = ne(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return F(r) ? (r.selectNext(0, 0), !0) : !1;
}
function VP(e) {
  const t = ne(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = $e(t) ? Bu(r, n) : Ze(t) ? Ku(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function ky(e, t, r) {
  const { text: n, spans: i } = e, s = by(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !gc(d);
    if (!(o && Sa(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let h = 0; h < f; h++) {
        const g = n[d.start + h];
        if (c === 0 && (l === 0 || !Os.test(g))) {
          if (p) {
            a = { key: d.key, offset: h };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? Os.test(g) || c-- : l--;
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
    if (d && gc(d) && jP(d) || d?.isSentinel && VP(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !gc(p));
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
function xy(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    ky(
      zP(e, n, i, s),
      t,
      e
    );
  }
}
function Ty(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    WP(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  kn(e, o, n, i), ky({ text: o.text, spans: o.spans }, t, e);
}
function WP(e, t) {
  const r = e.find(L);
  if (r && Vu(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function Cy(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Ta(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (P(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = va(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = Nr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Xr(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = ur.serializeEditorState(
    { type: ar, version: or, content: l },
    r
  );
  if (Ar(u.root.children, n) === Mr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => Un(g));
  if (_a(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = ws(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), Ca(d, s.sentinels), e.forEach((g) => g.remove());
  const h = ws(d);
  for (let g = 0; g < f.length && g < h.length; g++)
    h[g].getNumber() === f[g].number && h[g].setSid(f[g].sid);
  return xy(
    d,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((g) => g.getKey()))
  ), !0;
}
function _y(e) {
  if (e.getIsCollapsed() !== !1 || !Pe.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!O(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(mt(n) || M(n) && n.getTextContent() === Dt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!O(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function Sy(e, t, r) {
  const n = _y(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return kn(n, i, t, r), { out: i, contentNodes: n };
}
function vy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(dt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function HP(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Sy(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = N();
  if (P(u)) {
    for (let w = u.anchor.getNode(); w; w = w.getParent())
      if (e.is(w)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = va(
      [e],
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const d = Nr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Xr(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], h = vy(p), g = dy(e, p);
  if (g)
    return GP(
      e,
      g,
      h,
      o.sentinels,
      t,
      l
    );
  const y = uy(e, p, h, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (bn(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== h;
  if (k && e.setCategory(h), Ar(y.children, n) === Mr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const b = y.children.map((w) => Un(w));
  if (_a(b) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const C = a[0];
  if (C)
    b.forEach((w) => C.insertBefore(w));
  else {
    const w = e.getChildren().find(($) => O($) && $.getMarkerSyntax() === "closing");
    b.forEach(($) => w ? w.insertBefore($) : e.append($));
  }
  Ca(b, o.sentinels);
  const A = new Set(o.sentinels.flat().map((w) => w.getKey()));
  a.forEach((w) => {
    A.has(w.getKey()) || w.remove();
  });
  const _ = _y(e) ?? b;
  return Ty(
    _,
    c,
    l,
    n,
    r,
    A
  ), !0;
}
function GP(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = fy(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || bn(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => Un(h)), [d] = u;
  if (!K(d) || _a(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const h of u)
    f.insertAfter(h), f = h;
  Ca(u, i);
  const p = e.getChildren();
  return e.append(...d.getChildren()), p.forEach((h) => h.remove()), e.setCaller(d.getCaller()).setCategory(d.getCategory()).setUnknownAttributes(d.getUnknownAttributes()).setIsCollapsed(d.getIsCollapsed()), d.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Uc(e, a) : Ng(e, { isContentChange: !0 })), !0;
}
function My(e) {
  const t = e.getChildren();
  return zl(t[0]) ? t.slice(1) : t;
}
function Hu(e, t, r) {
  const n = My(e), i = { text: "", spans: [], sentinels: [] };
  return kn(n, i, t, r), { out: i, contentNodes: n };
}
const JP = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${Ht}(?=[\\s\\u200B\\\\|]|$)`
);
function Ey(e, t) {
  const r = Nr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === Ht && !JP.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function Ay(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = Hu(e, i, n);
  if (!Ta(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, u = !1;
  const d = N();
  if (P(d)) {
    for (let $ = d.anchor.getNode(); $; $ = $.getParent())
      if (c.some((z) => z.is($))) {
        u = !0;
        break;
      }
    d.isCollapsed() && (l = va(
      c,
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const f = Ey(o.text, i);
  if (Xr(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = py(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const h = [...p.children, ...p.followingBlocks];
  if (bn(h) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && Ar(p.followingBlocks, i) === Mr(r, i) && Ar(p.children, i) === Mr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map(($) => Un($)), y = p.followingBlocks.map(($) => Un($)), k = [...g, ...y];
  if (_a(k) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const b = ws([...a, ...r]).map(($) => ({
    number: $.getNumber(),
    sid: $.getSid()
  })), C = a[0];
  C ? g.forEach(($) => C.insertBefore($)) : g.forEach(($) => e.append($)), y.reduce(($, z) => $.insertAfter(z), e), Ca(k, o.sentinels);
  const A = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    A.has($.getKey()) || $.remove();
  }), r.forEach(($) => $.remove());
  const _ = [...My(e), ...y], w = ws(_);
  for (let $ = 0; $ < b.length && $ < w.length; $++)
    w[$].getNumber() === b[$].number && w[$].setSid(b[$].sid);
  return Ty(
    _,
    l,
    u,
    i,
    n,
    A
  ), !0;
}
const Py = /* @__PURE__ */ new Set(["ca", "cp"]), Gu = "cp";
function Ny(e) {
  if (!vr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Ns(e, t, _r, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Nr(r, { getMarker: _r }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Gu)
  );
}
function Ma(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (F(r) && Py.has(r.getMarker()) || Ny(r)) {
      t.push(r);
      continue;
    }
    le(r) && r.getMarker() === Gu && t.push(r);
    break;
  }
  return t;
}
function YP(e) {
  const t = (n) => F(n) && Py.has(n.getMarker()) || Ny(n);
  if (t(e) || le(e) && e.getMarker() === Gu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Re(n)) return n;
      if (!t(n)) return;
    }
}
function wy(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ma(e);
  if (n.some((s) => le(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (kn(e.getChildren(), i, t, r), kn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function XP(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ma(e)], o = wy(e, n, r);
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
    l.isCollapsed() && (a = va(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const u = Nr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Xr(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = ur.serializeEditorState(
    { type: ar, version: or, content: u },
    r
  );
  if (Ar(f.root.children, n) === Mr(s, n)) {
    let h = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), h = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), h = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => Un(h));
  return Re(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), xy(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Rs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (ze(n)) return;
    !t && (K(n) || le(n) || Re(n) || ke(n)) && (t = n), wp(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? YP(r) : void 0) ?? t;
}
function tr(e, t) {
  const r = Rs(e);
  return r ? K(r) ? HP(r, t) : Re(r) ? XP(r, t) : ke(r) ? Ay(r, t) : Cy([r], t) : !1;
}
const QP = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function tp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !QP.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function yo(e, t) {
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
          t.push(`\\${n}`), tp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), yo(r.content, t), tp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), yo(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), yo(r.content, t);
      }
    }
}
function rp(e, t, r) {
  const n = Rs(e);
  if (!Ke(n)) return !1;
  const i = N();
  if (!P(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = ke(n) ? Hu(n, t, r).out : yy(n, t, r);
  if (!o) return !1;
  const a = Nr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    Os.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  yo(a, l);
  for (const u of l.join("").replaceAll(D, "~")) {
    if (Os.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function Ju(e, t) {
  return Oy(e, t, x.Paragraph);
}
function ZP(e, t) {
  return Oy(e, t, x.Character);
}
function Oy(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !(Pe.isValidMarker(n) || Rl(n));
}
function e1(e) {
  return [gt(e), js()];
}
function Yu(e) {
  Yt(e, 2);
}
function t1(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Ea(e) {
  const t = t1(e);
  e.splice(0, 0, e1(e.getMarker())), t && Yu(e);
}
function Vo(e, t) {
  e.setMarker(t), Ea(e), Yu(e);
}
function r1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Rr(n)) {
    if (M(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(D), St(n, ue, wr), n.setMode("token");
      return;
    }
    if (Fh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(js());
  }
}
function np(e, t, r) {
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
function gs(e) {
  for (let t = e; t; t = t.getParent())
    if (le(t)) return t;
}
function n1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = gs(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = gs(r.getNode())?.is(s) ?? !1, a = gs(n.getNode())?.is(s) ?? !1;
    return !(o && !np(r, s, "start") || a && !np(n, s, "end"));
  });
}
function fl(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of n1(r)) t.add(n.getKey());
}
function i1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!P(r) || !r.isCollapsed()) return;
  const n = gs(r.focus.getNode());
  n && t.add(n.getKey());
}
function s1(e) {
  const t = N();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (fl(e), t.removeText());
}
const o1 = new RegExp(
  String.raw`^\\\+?([${pr}]+)(?:[ \u00A0]|$)`
);
function a1(e, t) {
  const r = o1.exec(e.getTextContent());
  return !!r && Ju(r[1], t);
}
function c1(e, t) {
  if (!ii(t.viewOptions)) return;
  if (Nt(e.getFirstChild())) {
    r1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (a1(e, t.getMarker)) return;
    Ea(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => le(o) && !o.is(e))) {
      Vo(e, Ht), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (Ke(r)) {
    const n = e.getChildren().filter((a) => !Rr(a)), i = N();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : gs(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Yt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  Vo(e, Ht);
}
function l1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Tr(t, ra(e.getMarker()));
  return r === "" ? void 0 : r;
}
function Ry(e) {
  const t = e.getChildren().filter((s) => !O(s) && se(s, ue) !== "attribute"), r = t[0];
  r && M(r) && r.getTextContent().startsWith(D) && r.setTextContent(r.getTextContent().slice(1));
  const n = l1(e);
  n && t.push(Te(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function u1(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && L(t) ? r = t.getChildAtIndex(e.offset) : O(t) && e.offset === 0 ? r = t : M(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), F(r) && (r = r.getFirstChild()), !O(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!F(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function d1() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = u1(e.anchor), r = t?.getParent();
  if (!t || !F(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), zi(n) && n.getTextContent().startsWith(D) && n.setTextContent(` ${n.getTextContent().slice(D.length)}`), Ry(r), M(n) && n.isAttached() && n.select(0, 0), !0;
}
function f1(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => M(c) && !O(c) && c.getTextContent() === Dt(s)
    ), a = ei(e).some(({ node: c }) => O(c));
    if (!o && !a) return;
    r.forEach((c) => {
      O(c) || (M(c) && c.getTextContent() === Dt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => O(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function p1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    Ry(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && tr(e, t);
}
function qy(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && ii(r)) {
    Vo(e, t);
    return;
  }
  Fg(e, t);
}
function $y() {
  const e = N();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Iy(e);
    return t !== "removed" ? t : (pl(), "handled");
  }
  return pl() ? "handled" : "declined";
}
function h1(e, t) {
  if (!t) return e;
  const r = BA.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function ip(e, t) {
  const r = N();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Ly())
      return "declined";
  } else {
    const s = Iy(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => h1(s, t)
  );
  sp(n ?? "");
  for (const s of i)
    pl(), sp(s);
  return "handled";
}
function g1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Ui(n);
  if (!i) return !1;
  const s = Lt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !M(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Iy(e) {
  const t = Lt(e.anchor.getNode()), r = Lt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), m1() ? "removed" : "needs-plain-split");
}
function sp(e) {
  if (e === "") return;
  const t = N();
  P(t) && t.insertText(e);
}
function m1() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Lt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function Ly() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Lt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function pl() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Ly();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Kr("fp", { closed: "false" });
  i.append(gt("fp"));
  const s = M(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    wi(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (nT(u), i.append(u));
  }
  return i.getChildren().every(O) && i.append(Te(Jt)), Dy(i), !0;
}
function Dy(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (M(t)) {
    const r = ca(t);
    t.select(r, r);
    return;
  }
  if (L(t)) {
    Dy(t);
    return;
  }
  e.selectEnd();
}
function y1(e) {
  const t = [];
  let r = e;
  for (; r; )
    F(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function b1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of je().getChildren()) {
    if (t && n.is(t)) {
      ke(n) && r.push(n.getMarker());
      break;
    }
    (ke(n) || Ge(n) || le(n)) && r.push(n.getMarker());
  }
  return r;
}
function k1(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function x1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Nt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Rr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(k1(i)) && r === 0 : !1;
}
function T1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Nt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Rr(i) && t.is(i) && r === 0;
}
function C1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function _1() {
  const e = N();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Ae(t, le), s = i ? void 0 : Ae(t, ke), o = !n && !s && (!i || T1(i, t, r)) ? "paragraph" : "character", a = Lt(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: b1(t),
    openCharMarkers: y1(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Ql(t, r),
    anchorRect: C1()
  };
}
function S1() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!M(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = jA.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function v1(e, t, r) {
  qy(e, t, r), Yu(e);
}
function M1(e, t, r) {
  const n = N();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = Ae(i, le);
  if (t === "backslash" && s && x1(s, i, n.focus.offset)) {
    v1(s, e, r);
    return;
  }
  hl(e, r);
}
function Uy(e, t) {
  const r = e.getNode(), n = Nm(L(r) ? r : r.getParent());
  return t.is(n);
}
function E1(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !Uy(e, t);
}
function Wo(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function A1(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!O(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!F(r)) return e;
  const n = r.getParent();
  return n ? rr(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function P1(e, t, r) {
  const n = N();
  if (!P(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!Uy(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && E1(s, e)) return !1;
  const o = zl(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (Wo(n.anchor, e, o), Wo(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = N();
  if (!P(a) || !a.isCollapsed()) return !1;
  const c = Rm(a);
  if (!c) return !1;
  const { parent: l, moving: u } = Om(
    A1(c.anchor)
  );
  if (!e.is(l)) return !1;
  const d = u.filter((h) => !h.is(o)), f = Ai(t);
  e.insertAfter(f), f.append(...d);
  const [p] = d;
  return F(p) ? ua(p) : f.select(0, 0), ii(r) && Ea(f), !0;
}
function N1(e, t) {
  const r = N();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Fy(e) {
  const t = N();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function w1(e) {
  const t = Ae(e.anchor.getNode(), ke);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !zl(r) || (Wo(e.anchor, t, r), Wo(e.focus, t, r));
}
function O1(e, t, r, n) {
  const i = N();
  if (P(i) ? w1(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && S1(), e.kind === "closeTag") {
    Fy(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && $y() !== "declined") return;
  if (e.kind === "paragraph" && ct.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    M1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Pe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Im(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  el(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: fn(), reference: r });
}
function hl(e, t) {
  const r = N();
  if (!P(r)) return !1;
  Zl(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!Ae(n, le)) {
    const o = Ae(n, ke);
    if (o) return P1(o, e, t);
  }
  const i = ii(t);
  if (qm()) {
    const o = N();
    if (!P(o)) return !1;
    const a = Ae(o.anchor.getNode(), le);
    return a ? (a.setMarker(e), i && Ea(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return le(s) ? (i ? Vo(s, e) : s.setMarker(e), !0) : !1;
}
function R1() {
  const [e] = ae();
  return B(() => e.registerCommand(Dp, () => !0, Et), [e]), null;
}
function q1(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = UA.exec(e)?.[1];
  return r === void 0 ? !1 : !Ju(r, t);
}
function zy(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !q1(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!le(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!le(i) && !ke(i)))
    return [i, r];
}
function Ky(e, t) {
  const r = zy(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return ke(n) ? Ay(n, t, [i]) : Cy([n, i], t);
}
function $1(e, t) {
  const r = N();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function By(e) {
  const t = FA.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function I1(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = By(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function L1(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && M(r)) {
    const n = r.getNextSibling();
    if (F(n)) {
      ua(n);
      return;
    }
  }
  M(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function op(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = By(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  L1(e);
}
function ap(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function jy(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return tr(e, r);
  const n = I1(e), i = e.getParent();
  if (le(i)) {
    if (!Ju(t, r.getMarker))
      return Ky(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : tr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), ap(s, t) && op(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (F(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(F(i) ? ZP(t, r.getMarker) : Pe.isValidMarker(s)))
      return tr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return tr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && ($1(c, nt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), ap(a, s) && op(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return tr(e, r);
}
function D1(e) {
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
function U1(e, t) {
  const r = e.getTextContent();
  if (Hr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ie(e.getParent()) && jl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !D1(e)) {
    uT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = LA.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), jy(e, n[1], t);
      return;
    }
    if (DA.test(r)) {
      t.pendingKeys.delete(e.getKey()), tr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = nt(e.getMarker(), e.getNested());
    if ((F(n) || K(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = N(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Te(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function F1(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (og(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Vy(e) {
  if (!Jp(e)?.length)
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
const os = Vy("v"), z1 = Vy("c"), cp = /^[ \u00A0]*$/;
function gl(e, t, r) {
  const n = e.getNextSibling();
  if (M(n) && n.getType() === He.getType() && n.getMode() === "normal" && se(n, ue) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = Te(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function K1(e, t) {
  const r = e.getTextContent(), n = Gt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (os.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = os.valueAndRest.exec(c);
    if (l && cp.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (os.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = os.valueAndRest.exec(r);
  if (!s) {
    const c = os.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = N(), p = P(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Gt("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      gl(e, d, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), tr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), cp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Gt("v", o)), a && gl(e, a, a.length);
}
const B1 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function j1(e, t) {
  if (!Ym(e)) return !1;
  const r = e.getParent();
  if (!K(r)) return !1;
  const n = e.getTextContent();
  if (n === Dt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = B1.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = N(), c = P(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Dt(s)), o) {
    const l = n.length - o.length, u = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const d = gl(e, o, u);
    d.isUnmergeable() || d.toggleUnmergeable();
  }
  return !0;
}
function V1(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!M(t)) return;
  const r = Gt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = z1.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Wy(e) {
  if (Ze(e)) {
    const { wrapper: t } = aa(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = Vl(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Re(e)) {
    const t = [], r = Wh(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Gh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if ($e(e)) {
    const t = [], r = Cs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Cs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function W1(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Wy(e).some((n) => r.is(n));
}
function H1(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && le(e) && Fh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of _s)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Hs(l, e) && (i || W1(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Wy(e))
    l.remove(), n = !0;
  let s = !1;
  if (F(e)) {
    const l = gT(e);
    l !== void 0 && Jk(l) && (Qh(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of _s)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (uC(l, e)) {
        vs(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && gg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      da(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function lp(e) {
  return M(e) && e.getType() === He.getType() && e.getMode() === "normal" && se(e, ue) !== "attribute";
}
function G1(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ne(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && lp(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && lp(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function uo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = G1(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
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
      const h = Jm.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = jy(c, h[1], e) || n : r === "idle" && rp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Ky(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = tr(c, e) || n;
      continue;
    }
    const l = Wn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = H1(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && rp(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = tr(u, e) || n;
    }
  }
  return n;
}
function Hy(e) {
  if (Yr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (F(t)) return ds(t) !== void 0;
  return !1;
}
function J1(e) {
  const t = Wn(e);
  if (!t) return !1;
  const r = Vn(t.kind);
  return !da(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function up(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ze(t) || lg(t)) return !0;
  return !1;
}
function Y1(e, t) {
  const r = e.getTextContent(), n = se(e, ue), i = e.getParent();
  if (n !== "attribute" && Re(i)) {
    r.replace(/^[ \u00A0]+/, "") === Gt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (j1(e, t)) return;
  if (n === "attribute") {
    J1(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Hy(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !up(e))
      t.pendingKeys.add(e.getKey());
    else if (Jh(e)) t.pendingKeys.add(e.getKey());
    else if (Re(Rs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      F(a) && Zh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (up(e)) return;
  const s = N(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (zA.test(o)) {
    if (ix(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), tr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function X1(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : gg(e, t);
}
function Q1(e) {
  const t = (r) => {
    if (O(r)) {
      Hr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Yr(r)) {
      og(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of _s)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Hs(n, r) || X1(n, r)) && e.pendingKeys.add(r.getKey());
    if ($e(r)) {
      r.getTextContent() !== Gt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (M(r)) {
      if (r.getType() !== He.getType() || se(r, ue) === "attribute") return;
      const n = r.getParent();
      if (Re(n)) {
        r.getTextContent() !== Gt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Hy(r) || i.includes("//") || Jh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (F(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!ze(r)) {
      if (Ie(r) && r.getChildrenSize() === 0) {
        const n = Wn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  je().getChildren().forEach(t);
}
const Gy = Up(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function mc(e) {
  const t = e();
  return _t(_l), _t(Qp), t;
}
const dp = 8, Z1 = 1e3;
function yi(e, t) {
  const r = $e(e) ? ["va", "vp"] : Ze(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    gC(Vn(n), e, t.pendingKeys);
}
function e0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(El) || i.updateTags.has(bs)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ne(o);
        if (!c) continue;
        const l = Wn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ne(o.getKey());
        c?.isAttached() && Vn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return we(
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
    e.registerMutationListener(qr, r),
    e.registerMutationListener(Vr, r),
    e.registerMutationListener(Wr, r)
  );
}
function ml(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = N();
  return r ? t ? hm(r, t) : P(r) && Si(r) : !1;
}
function t0(e, t, r) {
  return we(
    e.registerCommand(
      nr,
      (n) => {
        if (ya() || ml(t)) return !1;
        const i = sl(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Lu(Du(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = ip(o, t.getMarker);
          if (a === "declined" && g1(e) && (a = ip(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      ve
    ),
    e.registerCommand(
      nr,
      (n) => {
        const i = sl(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !sA()) return !1;
        const o = N();
        return t.structureProtectionMode === "protected" && P(o) && Si(o) ? !1 : (n?.preventDefault(), P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(ms, void 0), a === "") return;
          const l = N();
          P(l) && l.insertText(a);
        }), !0);
      },
      Me
    ),
    e.registerCommand(
      nr,
      () => (t.splitExpected.current = !0, !1),
      Et
    )
  );
}
function r0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = ae(), a = e?.markerMode === "editable", c = !!e && Js(e), l = Y(void 0), u = Y(n), d = Y(s);
  return B(() => {
    u.current = n, d.current = s;
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
    const p = oC(o, f.pendingKeys);
    let h, g = !1, y, k = !1, b = !1, C = 0;
    const A = () => C < dp ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${dp} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), _ = (S, W = "departure") => {
      o.update(() => {
        C = mc(
          () => uo(f, S, W)
        ) ? C + 1 : 0;
      });
    };
    let w;
    const $ = () => {
      if (w !== void 0 && clearTimeout(w), w = void 0, b || f.pendingKeys.size === 0) return;
      const S = u.current ?? Z1;
      S < 0 || (w = setTimeout(() => {
        w = void 0, !(b || f.pendingKeys.size === 0) && (g || A() || _(void 0, "idle"));
      }, S));
    }, z = we(
      o.registerNodeTransform(qr, (S) => {
        if (o.isComposing()) return;
        U1(S, f);
        const W = Wn(S);
        W && ($e(W.owner) || K(W.owner) || Re(W.owner) || Ze(W.owner) && aa(W.owner).wrapper === void 0) && yi(W.owner, f);
      }),
      o.registerNodeTransform(bt, (S) => {
        o.isComposing() || (K1(S, f), yi(S, f));
      }),
      o.registerNodeTransform(Ft, (S) => {
        o.isComposing() || (V1(S), S.isAttached() && yi(S, f));
      }),
      o.registerNodeTransform(ct, (S) => {
        o.isComposing() || c1(S, f);
      }),
      o.registerNodeTransform(be, (S) => {
        if (!o.isComposing()) {
          p1(S, f);
          for (const W of ["separator", "char"])
            S.isAttached() && Hs(Vn(W), S) && f.pendingKeys.add(S.getKey());
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
      o.registerNodeTransform(lr, (S) => {
        o.isComposing() || yi(S, f);
      }),
      o.registerNodeTransform(Wr, (S) => {
        if (o.isComposing()) return;
        const W = Wn(S);
        W && (Ze(W.owner) || $e(W.owner) || K(W.owner) || Re(W.owner)) && yi(W.owner, f);
      }),
      o.registerNodeTransform(Pe, (S) => {
        o.isComposing() || (f1(S, f), yi(S, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(Jr, (S) => {
        o.isComposing() || F1(S, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(He, (S) => {
        o.isComposing() || Y1(S, f);
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
        (S) => {
          o.getEditorState().read(() => {
            for (const [W, H] of S) {
              if (H === "destroyed") continue;
              const de = ne(W);
              !de || se(de, ue) !== "attribute" || Ie(de.getParent()) || o.getElementByKey(W)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      e0(o, f),
      ...c ? [
        o.registerNodeTransform(He, (S) => {
          o.isComposing() || tP(S);
        }),
        o.registerCommand(
          Mi,
          (S) => Jf(
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
          Me
        ),
        o.registerCommand(
          cr,
          (S) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            Jf(
              S && typeof S == "object" && "clipboardData" in S ? S : null,
              o,
              !0,
              d.current
            )
          ),
          Me
        ),
        o.registerCommand(
          nr,
          (S) => lP(
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
          Me
        )
      ] : [],
      o.registerCommand(
        cr,
        () => (!ml(f) && !ya() && fl(f), !1),
        ve
      ),
      o.registerCommand(
        Us,
        () => (o.isComposing() || s1(f), !1),
        Cr
      ),
      o.registerCommand(
        ea,
        (S) => S || o.isComposing() ? !1 : d1(),
        Cr
      ),
      o.registerCommand(
        Zo,
        () => (g = !1, C = 0, $(), !1),
        Et
      ),
      o.registerCommand(
        Pr,
        (S) => (g = !1, C = 0, $(), (S.key === "Backspace" || S.key === "Delete") && !ml(f, um(S)) && (fl(f), i1(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !S.ctrlKey || S.altKey || S.shiftKey || S.metaKey || S.key !== " " && S.code !== "Space" || !iA() ? !1 : (S.preventDefault(), !0)),
        Me
      ),
      o.registerCommand(
        Ip,
        (S) => {
          const W = $y();
          W === "needs-plain-split" && o.dispatchCommand(ms, void 0);
          const H = W !== "declined" || mC();
          return H && S?.preventDefault(), uo(f), H;
        },
        Me
      ),
      o.registerCommand(
        ms,
        () => (f.splitExpected.current = !0, qm()),
        Me
      ),
      t0(o, f, c),
      o.registerCommand(
        Gy,
        () => {
          if (g) return !0;
          const S = o.getRootElement(), W = S?.ownerDocument, H = !!S && !!W && W.hasFocus() && S.contains(W.activeElement);
          let de;
          if (H) {
            const Q = N();
            de = P(Q) ? Q.focus.key : h;
          }
          return mc(() => uo(f, de)), !0;
        },
        Et
      ),
      o.registerCommand(
        Ml,
        () => {
          if (g) return !1;
          const S = N(), W = P(S) ? S.focus.key : h;
          return mc(() => uo(f, W)), !1;
        },
        Et
      ),
      o.registerUpdateListener(({ editorState: S, tags: W }) => {
        f.splitExpected.current = !1, f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear(), f.rebuildAttempted.clear();
        const H = S.read(() => {
          const Q = N();
          return P(Q) ? Q.focus.key : void 0;
        }), de = y;
        if (H !== void 0 && (y = H), W.has(El)) {
          f.pendingKeys.clear(), S.read(() => Q1(f)), g = !0, H !== void 0 && (h = H);
          return;
        }
        if (W.has(vt)) {
          H !== void 0 && H !== de && (g = !0);
          return;
        }
        g || (H !== void 0 && (h = H), $(), !(k || H === void 0) && [...f.pendingKeys].some((Q) => Q !== H) && (k = !0, queueMicrotask(() => {
          k = !1, !b && (A() || _(h));
        })));
      })
    );
    return () => {
      b = !0, w !== void 0 && clearTimeout(w), w = void 0, p(), z(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const n0 = ["status_unknown", "status_invalid"], Jy = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, i0 = Object.values(Jy);
function s0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Jy[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function fp(e) {
  e.classList.remove(...n0), e.removeAttribute("aria-description"), i0.includes(e.title) && e.removeAttribute("title");
}
function o0(e, t, r, n) {
  const i = (a) => a.read(() => je().getChildrenKeys()), s = i(t), o = i(e);
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
function a0(e) {
  const t = ne(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function c0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ae(), i = e?.markerMode === "editable";
  return B(() => {
    if (!i) return;
    const s = t ?? Ao;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = EP(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || a0(f)) continue;
            const h = ne(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && fp(p);
        }
        for (const [f, p] of d) {
          const h = n.getElementByKey(f);
          h && s0(h, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          o0(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && fp(u);
      }
    };
  }, [n, i, t, r]), null;
}
function Yy(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Er(o);
    a && L(s) && Yy(s.getChildren(), a, r);
  }
}
function qs(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = Er(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Di(a);
      if (l === void 0 || !l.includes(dt)) continue;
      const u = l.split(dt), d = [];
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
function Ho(e, t, r) {
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
function Xy(e, t) {
  const r = [];
  for (const n of e)
    Vu(n, t) || ((le(n) || F(n)) && r.push(n.getMarker()), L(n) && r.push(...Xy(n.getChildren(), t)));
  return r;
}
function Qy(e) {
  const t = [];
  for (const r of e) {
    const n = Wu(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Er(r);
    i && t.push(...Qy(i));
  }
  return t;
}
function $s(e, t, r) {
  const n = Xy(e, r), i = Qy(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function l0(e, t) {
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
function Aa(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function u0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Ta(c, e, o, s)) return;
  const l = i ? Aa(c, i) : c.text, u = Nr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Xr(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = ur.serializeEditorState(
    { type: ar, version: or, content: u },
    s
  ).root.children;
  if (bn(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Ho(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ar(d, o) === Mr(e, o) && $s(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  qs(d, f);
  const h = Zy(e), g = Xu(d);
  for (let y = 0; y < h.length && y < g.length; y++)
    h[y].sid !== void 0 && g[y].number === h[y].number && (g[y].sid = h[y].sid);
  return d;
}
function Zy(e) {
  const t = [], r = (n) => {
    $e(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Xu(e) {
  const t = [];
  for (const r of e) {
    Ph(r) && t.push(r);
    const n = Er(r);
    n && t.push(...Xu(n));
  }
  return t;
}
function d0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Sy(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Aa(l, i) : l.text, f = Nr(d, {
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
  const h = p.content ?? [], g = vy(h), y = e.getCategory() !== g, k = dy(e, h);
  if (k) {
    const _ = fy(
      e,
      k.before,
      k.after,
      g,
      s
    );
    if (!_ || bn(_) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const w = Ho(l, t, n);
    return w ? (qs(_, w), {
      rebuilt: void 0,
      contentNodes: u,
      category: g,
      categoryChanged: !1,
      closedAs: _
    }) : void 0;
  }
  const b = uy(e, h, g, s);
  if (b.failure !== void 0) {
    b.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : b.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const C = b.children;
  if (bn(C) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const A = Ho(l, t, n);
  if (!A) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ar(C, o) === Mr(u, o) && $s(u, C, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return qs(C, A), { rebuilt: C, contentNodes: u, category: g, categoryChanged: y };
}
function pp(e) {
  return e.$?.textType;
}
function f0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && pp(e) === pp(t);
}
function p0(e) {
  const t = [];
  for (const r of e) {
    const n = ne(r);
    n?.isAttached() && ze(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function h0(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (Hr(e)) return;
  const n = Jm.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function hp(e, t) {
  const r = e;
  r.marker = t, r.text = my(t, r.markerSyntax, r.nested);
}
function g0(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Pe.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && hp(a.node, s);
  const c = n.getChildren().filter(O).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && hp(l.node, s);
}
function m0(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: u } = Hu(e, a, o);
  if (u.length === 0 && s.length === 0 || !Ta(l, s, a, o)) return;
  const d = i ? Aa(l, i) : l.text, f = Ey(d, a);
  if (Xr(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = py(
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
  if (bn([...h, ...g]) !== l.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const y = Ho(l, t, n);
  if (!y) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (g.length === s.length && Ar(g, a) === Mr(s, a) && $s(s, g, a) && Ar(h, a) === Mr(u, a) && $s(u, h, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const k = qs(h, y);
  qs(g, y, k);
  const b = Zy([...u, ...s]), C = Xu([...h, ...g]);
  for (let A = 0; A < b.length && A < C.length; A++)
    b[A].sid !== void 0 && C[A].number === b[A].number && (C[A].sid = b[A].sid);
  return { rebuilt: h, contentNodes: u, followingBlocks: g };
}
function y0(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = wy(e, i, n);
  if (!o) return;
  const a = r ? Aa(o, r) : o.text, c = Nr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Xr(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = ur.serializeEditorState(
    { type: ar, version: or, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Ma(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ar(u, i) === Mr(d, i) && $s(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function b0(e, t, r, n, i) {
  const s = l0(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (b) => {
    K(b) ? c.set(b.getKey(), b) : Re(b) ? l.set(b.getKey(), b) : ke(b) ? u.set(b.getKey(), b) : o.set(b.getKey(), [b]);
  };
  for (const b of t) {
    const C = ne(b);
    if (!C?.isAttached()) continue;
    const A = Rs(C);
    if (A) {
      if (p(A), O(C)) {
        const _ = zy(C, r.getMarker);
        _ && a.push(_);
      }
      if (K(A)) {
        const _ = h0(C);
        _ && f.set(A.getKey(), _);
      }
    }
  }
  const h = /* @__PURE__ */ new Set();
  for (const [b, C] of a)
    h.has(b.getKey()) || h.has(C.getKey()) || ([b, C].forEach((A) => {
      h.add(A.getKey()), o.delete(A.getKey());
    }), ke(b) ? (u.set(b.getKey(), b), d.set(b.getKey(), [C])) : o.set(b.getKey(), [b, C]));
  if (s) {
    const b = Rs(s.node);
    b && !h.has(b.getKey()) && p(b);
  }
  const g = p0(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && u.size === 0 && g.length === 0)
    return;
  const y = new Set(g.map((b) => b.getKey())), k = /* @__PURE__ */ new Map();
  Yy(je().getChildren(), e.root.children, k);
  for (const b of f.values()) g0(b, k);
  for (const b of c.values()) {
    const C = k.get(b.getKey()), A = C ? Er(C.node) : void 0;
    if (!C || !A) continue;
    const _ = d0(b, k, r, y, s);
    if (!_) continue;
    if (_.closedAs) {
      const z = C.siblings.indexOf(C.node);
      if (z < 0) continue;
      const [S, ...W] = _.closedAs, H = C.node;
      for (const de of Object.keys(H)) Reflect.deleteProperty(H, de);
      Object.assign(H, S), C.siblings.splice(z + 1, 0, ...W);
      continue;
    }
    if (_.categoryChanged) {
      const z = C.node;
      _.category === void 0 ? delete z.category : z.category = _.category;
    }
    if (!_.rebuilt) continue;
    const w = k.get(_.contentNodes[0].getKey());
    if (!w) continue;
    const $ = A.indexOf(w.node);
    $ < 0 || A.splice($, _.contentNodes.length, ..._.rebuilt);
  }
  for (const b of o.values()) {
    const C = k.get(b[0].getKey());
    if (!C) continue;
    const A = u0(b, k, r, y, s);
    if (!A) continue;
    const _ = C.siblings.indexOf(C.node);
    _ < 0 || C.siblings.splice(_, b.length, ...A);
  }
  for (const b of u.values()) {
    const C = k.get(b.getKey()), A = C ? Er(C.node) : void 0;
    if (!C || !A) continue;
    const _ = d.get(b.getKey()) ?? [], w = m0(b, k, r, y, s, _);
    if (!w) continue;
    const $ = w.contentNodes.at(0), z = $ ? k.get($.getKey()) : void 0;
    if ($ && !z) continue;
    const S = z ? A.indexOf(z.node) : A.length, W = C.siblings.indexOf(C.node);
    S < 0 || W < 0 || (A.splice(S, w.contentNodes.length, ...w.rebuilt), C.siblings.splice(W + 1, _.length, ...w.followingBlocks));
  }
  for (const b of l.values()) {
    const C = k.get(b.getKey());
    if (!C) continue;
    const A = 1 + Ma(b).length, _ = y0(b, r, s);
    if (!_) continue;
    const w = C.siblings.indexOf(C.node);
    w < 0 || C.siblings.splice(w, A, ..._);
  }
  for (const b of g) {
    const C = k.get(b.getKey());
    if (!C) continue;
    const A = C.siblings.indexOf(C.node);
    if (A < 0) continue;
    C.siblings.splice(A, 1);
    const _ = C.siblings[A - 1], w = C.siblings[A], $ = _ && Di(_), z = w && Di(w);
    _ && w && $ !== void 0 && z !== void 0 && f0(_, w) && (_.text = $ + z, C.siblings.splice(A, 1));
  }
  return Tm(e, r.viewOptions);
}
function k0({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = ii(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return B(() => {
    if (n)
      return r.registerNodeTransform(
        ct,
        (i) => x0(i, t)
      );
  }, [r, n, t]), null;
}
function x0(e, t) {
  e.getMarker() !== Ht && (e.isEmpty() || Nt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Ht}" (key ${e.getKey()})`
  ), e.setMarker(Ht)));
}
function T0({
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
    i.scrRef = e, i.onScrRefChange = t, Go(s, e) || C0(i, r, e);
  }, [r, e, t]), B(
    () => r.registerMutationListener(
      It,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = yl(r);
        gp(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: fo(s) === fo(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), B(() => {
    const i = (a) => a.read(
      () => new Set(
        je().getChildren().filter(Ge).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (yl(r) || gp(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: fo(a) === fo(c)
      }));
    };
    return we(
      ...[Ft, Or].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), B(
    () => r.registerCommand(
      qt,
      () => {
        const i = n.current;
        return i.phase === "idle" && M0(i, eb()), !1;
      },
      Et
    ),
    [r]
  ), B(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(qt, void 0));
    };
    return we(
      r.registerMutationListener(wt, i),
      r.registerMutationListener(bt, i)
    );
  }, [r]), B(() => {
    const i = () => N0(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function C0(e, t, r) {
  if (_0(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = yl(t);
  (!n || n === r.book) && t.update(() => tb(t, r.chapterNum, r.verseNum), {
    tag: vt
  });
}
function _0(e, t) {
  const r = e.pendingEchoes.findIndex((n) => Go(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function eb() {
  const e = N(), t = Dh(e);
  if (!t) return;
  const r = Qu(), n = Vx(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = ru(t, e), { verseNum: o, verse: a } = FC(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function yl(e) {
  return e.getEditorState().read(() => Qu()?.getCode() || void 0);
}
function Qu() {
  return je().getChildren().find(ke);
}
function gp(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && yc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || yc(e, t), e.phase = "navigating") : i && yc(e, t), r && r !== e.scrRef.book && ib(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function yc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => tb(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: vt }
    );
  });
}
function tb(e, t, r) {
  const n = N()?.clone();
  S0(t, r);
  const i = N();
  i && !(n && i.is(n)) && Ur(e, vt);
}
function S0(e, t) {
  const r = eb();
  if (r?.chapterNum === e && (r.verse ? nb(t, r.verse) : r.verseNum === t))
    return;
  const n = je().getChildren(), i = wh(n, e);
  if (!i) return;
  const s = Xx(n, i), o = jx(s, !0);
  Yx(s, o);
  let a;
  try {
    a = qC(s, t);
  } catch {
    return;
  }
  a && (le(a) ? !M(a.getFirstChild()) && Wi(a) || Yt(a, 0) : v0(a));
}
function v0(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || me(n)) {
    M(e) ? e.selectEnd() : Yt(t, r);
    return;
  }
  const i = Ws(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (M(e)) {
    e.selectEnd();
    return;
  }
  const s = L(n) && !K(n) ? rb(n) : void 0;
  s ? s.select(0, 0) : Yt(t, r);
}
function rb(e) {
  const t = e.getFirstChild();
  if (M(t)) return t;
  if (L(t) && !K(t)) return rb(t);
}
function fo(e) {
  return e.read(() => {
    const t = je().getChildren().find(Ge);
    return `${Qu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function M0(e, t) {
  e.phase !== "navigating" && t && (E0(t, e.scrRef) || ib(e, A0(t, e.scrRef)));
}
function E0(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? nb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function nb(e, t) {
  try {
    return Kl(e, t);
  } catch {
    return !1;
  }
}
function A0(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const P0 = 8;
function ib(e, t) {
  return Go(t, e.scrRef) || e.pendingEchoes.some((r) => Go(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > P0 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Go(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function N0(e) {
  e.phase = "idle";
}
function w0(e) {
  return ke(e) ? `${e.__code}` : Re(e) ? `${e.__marker} "${e.__number}"` : F(e) ? `${e.__marker}` : Fs(e) ? `${e.__marker} "${e.__number}"` : mt(e) ? `${e.__caller}` : ni(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : le(e) ? `${e.__marker}` : M(e) ? `"${e.__text}"${O0(e)}` : xe(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : $e(e) ? `${e.__marker} "${e.__number}"` : "";
}
function O0(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Ds]) : "";
}
function R0() {
  const [e] = ae();
  return /* @__PURE__ */ E(
    hk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: w0,
      editor: e
    }
  );
}
const sb = vp(null), mp = 4;
function q0({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Y(null), s = Mp(sb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return B(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ E("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function $0({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = pe(), [s, o] = pe(), a = ye(
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
  }, l = We(() => ({ registerItem: a }), [a]);
  return B(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ E(sb.Provider, { value: l, children: /* @__PURE__ */ E("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function I0({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Y(null), c = Y(null), [l, u] = pe(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return B(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: g } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + mp}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
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
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + mp;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Ee(Dn, { children: [
    /* @__PURE__ */ Ee(
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
    l && Ln(
      /* @__PURE__ */ E($0, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const bl = {
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
}, kl = {
  ...bl,
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
function L0({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ E(
    I0,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + D0(t),
      buttonLabel: U0(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(bl).map((n) => /* @__PURE__ */ Ee(
        q0,
        {
          className: "item block-marker " + F0(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ E("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ E("span", { className: "text usfm_" + n, children: bl[n] })
          ]
        },
        n
      ))
    }
  );
}
function D0(e) {
  return e && e in kl ? e : "ban";
}
function U0(e) {
  return e && e in kl ? kl[e] : "No Style";
}
function F0(e) {
  return e ? "active dropdown-item-active" : "";
}
function yp() {
  return /* @__PURE__ */ E("div", { className: "divider" });
}
const z0 = Tn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ae(), [o, a] = pe(s), [c, l] = pe(), [u, d] = pe(!1), [f, p] = pe(!1), h = ye(
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
  return B(() => s.registerCommand(
    qt,
    (g, y) => (a(y), !1),
    ve
  ), [s]), /* @__PURE__ */ Ee(Dn, { children: [
    /* @__PURE__ */ E(lm, { onStateChange: h }),
    /* @__PURE__ */ Ee("div", { className: "toolbar", children: [
      /* @__PURE__ */ E(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Fp, void 0);
          },
          title: Ei ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(zp, void 0);
          },
          title: Ei ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ E("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ E(yp, {}),
      o === s && /* @__PURE__ */ Ee(Dn, { children: [
        /* @__PURE__ */ E(
          L0,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ E(yp, {})
      ] }),
      /* @__PURE__ */ E("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), K0 = ma(), B0 = {}, j0 = {};
function V0() {
  return /* @__PURE__ */ E("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function bc(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function bp(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = L(n) ? n.getLastDescendant() ?? n : n;
  return pa(r, i);
}
function kp(e, t, r) {
  yk(e, () => Ai(t));
  const n = N();
  if (!P(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    le(o) && i.add(o);
  }), i.forEach((s) => qy(s, t, r));
}
const ob = Tn(function({
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
  const d = Y(null), f = Y(null), p = Y(null), h = Y(null), g = Y(t), y = Y(void 0), k = Y(void 0), b = Y(void 0), C = Y(void 0), A = Y(!1), [_, w] = pe(t), [$, z] = pe(0), [S, W] = pe(), {
    isReadonly: H = !1,
    structureProtectionMode: de = "off",
    hasExternalUI: Q = !1,
    hasSpellCheck: De = !1,
    textDirection: Ce = "ltr",
    markerMenuTrigger: hr = "\\",
    view: Ve,
    nodes: Qr,
    debug: Zr = !1,
    contextMenu: _n,
    styleInfo: ee,
    markerSettleDelayMs: R,
    copyLimit: te
  } = a ?? j0, ce = Ve ?? K0, Ne = As(ce) && (ce.markerMode !== "hidden" || !ce.hasSpacing || ce.hasGutterParaMarkers || ce.hasActiveTextFocusBox) ? {
    ...ce,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ce, lt = Y(Ne);
  Kt(lt.current, Ne) || (lt.current = Ne);
  const Z = lt.current, Ye = We(() => Qr ?? B0, [Qr]), gr = We(() => _n, [_n]), Hi = We(
    () => vC(ee ?? Ao),
    [ee]
  ), en = Y(c);
  Kt(en.current, c) || (en.current = c);
  const ie = en.current, pt = As(Z), fe = H || pt, si = Ne !== ce;
  B(() => {
    pt && !H && ie?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), si && ie?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), Z?.markerMode === "visible" && !H && ie?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [pt, H, si, ie, Z?.markerMode]);
  const _e = Y(null), Sn = We(() => {
    if (Z.markerMode !== "editable") return;
    const q = ee ?? Ao;
    return {
      getContext: () => _e.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (I) => $P(
        q,
        I,
        Ye.extraValidMarkers
      ),
      getEnterItems: (I) => IP(
        q,
        I,
        Ye.extraValidMarkers
      ),
      apply: (I, V) => {
        const G = _e.current;
        G && (V.trigger === "enter" ? G.splitParagraphWithMarker(I.marker) : G.applyMarkerMenuSelection(I, V));
      },
      commitTypedCloser: (I) => {
        _e.current?.commitTypedCloser(I);
      }
    };
  }, [Z, ee, Ye.extraValidMarkers]), oi = (q) => {
    A.current || (A.current = !0, en.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Xt = (q) => {
    if (pt)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, tn = (q) => {
    if (Xt(q), fe) throw new Error(`Cannot ${q} in readonly mode`);
  }, rn = () => !!d.current && tm(d.current), Ys = We(
    () => ({
      namespace: "platformEditor",
      theme: { ...jm, showCharMarkerTitles: Z.showCharMarkerTitles },
      editable: !fe,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [ot, ...pt ? W_ : pu]
    }),
    [fe, pt, Z.showCharMarkerTitles]
  );
  go.initialize(ie);
  function nn(q) {
    if (q !== void 0 && !aA(q, Ye.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const zt = ye(() => {
    const q = d.current;
    if (!q) return g.current;
    const I = Id(q), V = k.current;
    if ((!I || I.size === 0) && !V) return g.current;
    const G = q.getEditorState(), he = G.toJSON();
    return G.read(
      () => b0(
        he,
        I ?? /* @__PURE__ */ new Set(),
        { viewOptions: Z, getMarker: Hi, logger: ie },
        V,
        b.current
      )
    ) ?? g.current;
  }, [Z, Hi, ie]);
  function Qt(q, I, V) {
    if (pt && I === "remote") {
      en.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    Xt("apply an update");
    const G = rn(), he = !G && d.current ? Ur(d.current, Ir) : void 0;
    d.current?.update(
      () => {
        I === "remote" && _t(bs), G || _t(Ir), V && _t(V), kS(q, Z, Ye, ie);
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
          he?.(), !G && d.current && nc(d.current);
          const Xe = d.current?.getEditorState();
          if (!Xe) return;
          const Oe = go.deserializeEditorState(Xe, Z);
          if (Oe) {
            const Qe = !Kt(g.current, Oe);
            if (Qe && (g.current = Oe), Qe || !Kt(_, Oe)) {
              const Ot = Hd(q, Xe, "apply");
              C.current = Oe, s?.(Oe, q, I, Ot);
            }
          }
        }
      }
    );
  }
  const mr = {
    focus() {
      d.current?.focus();
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
      d.current?.dispatchCommand(Fp, void 0);
    },
    redo() {
      d.current?.dispatchCommand(zp, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      tn("cut"), d.current && vu(d.current);
    },
    copy() {
      d.current && Su(d.current);
    },
    paste() {
      tn("paste"), d.current && Mu(d.current);
    },
    pastePlainText() {
      tn("paste as plain text"), d.current && Eu(d.current);
    },
    getUsj() {
      return zt();
    },
    commitPendingMarkerEdits() {
      const q = d.current;
      if (!q) return;
      const I = !rn(), V = I ? Ur(q, Ir) : void 0;
      q.update(
        () => {
          I && _t(Ir), q.dispatchCommand(Gy, void 0);
        },
        { discrete: !0 }
      ), V?.(), I && nc(q);
    },
    setTransientInput(q) {
      if (!q) {
        k.current = void 0;
        return;
      }
      const I = d.current?.getEditorState().read(() => {
        const V = N();
        return P(V) && V.isCollapsed() ? V.focus.key : void 0;
      });
      k.current = { input: q, nodeKey: I ?? b.current?.key };
    },
    setUsj(q) {
      if (!Kt(g.current, q)) {
        g.current = q, k.current = void 0;
        const I = Kt(_, q);
        w(q), I && z((V) => V + 1);
      }
    },
    applyUpdate(q, I = "remote") {
      Qt(q, I);
    },
    replaceEmbedUpdate(q, I) {
      const V = d.current?.read(() => QC(q, I));
      V ? this.applyUpdate(V) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (pt) {
        oi("get the selection");
        return;
      }
      return d.current?.read(cu);
    },
    setSelection(q) {
      if (pt) {
        oi("set the selection");
        return;
      }
      d.current?.update(() => {
        const I = ga(q);
        I !== void 0 && (Fr(I), _t(Xp));
      });
    },
    setAnnotation(q, I, V, G, he) {
      if (pt) {
        oi("set an annotation");
        return;
      }
      let Xe, Oe, Qe, Ot;
      typeof G == "function" || G === void 0 ? (Xe = G, Oe = he) : (Xe = G.onClick, Oe = G.onRemove, Qe = G.onMouseEnter, Ot = G.onMouseLeave), f.current?.setAnnotation(
        q,
        vd(I),
        V,
        Xe,
        Oe,
        Qe,
        Ot
      );
    },
    removeAnnotation(q, I) {
      f.current?.removeAnnotation(vd(q), I);
    },
    formatPara(q) {
      tn("format a paragraph"), d.current?.update(
        () => {
          const I = N();
          if (!P(I)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${q}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const V = I.isBackward() ? I.focus : I.anchor, G = Ae(V.getNode(), ke);
          if (G) {
            const he = I.isBackward() ? I.anchor : I.focus, Oe = !I.isCollapsed() && !G.is(he.getNode()) && !G.isParentOf(he.getNode()) ? { key: he.key, offset: he.offset, type: he.type } : void 0, Qe = Fn();
            if (Qe.anchor.set(V.key, V.offset, V.type), Qe.focus.set(V.key, V.offset, V.type), Fr(Qe), !hl(q, Z)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${q}"`
              );
              return;
            }
            if (!Oe) return;
            const Ot = ne(Oe.key);
            if (!Ot?.isAttached()) return;
            const Mn = Ot.getTopLevelElement();
            if (!Mn) return;
            const $r = G.getNextSibling();
            if (!le($r)) return;
            let rt = $r.getNextSibling();
            for (; rt; ) {
              const Ji = rt.is(Mn), Xs = rt.getNextSibling();
              if (le(rt)) {
                const En = Fn();
                En.anchor.set(rt.getKey(), 0, "element"), En.focus.set(rt.getKey(), rt.getChildrenSize(), "element"), Fr(En), kp(En, q, Z);
              }
              if (Ji) break;
              rt = Xs;
            }
            return;
          }
          kp(I, q, Z);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(q) {
      return d.current?.read(
        () => d.current?.getElementByKey(q) ?? void 0
      );
    },
    removeCharacterMarker(q) {
      if (fe) throw new Error("Cannot remove character marker in readonly mode");
      nn(q);
      let I = !1;
      return d.current?.update(
        () => {
          const V = N();
          P(V) && (I = Dm(V, q, Z));
        },
        { discrete: !0 }
      ), I;
    },
    replaceCharacterMarker(q, I) {
      if (fe) throw new Error("Cannot replace character marker in readonly mode");
      nn(q), nn(I);
      let V = !1;
      return d.current?.update(
        () => {
          const G = N();
          P(G) && (V = kA(G, q, I));
        },
        { discrete: !0 }
      ), V;
    },
    extendCharacterMarker(q, I) {
      if (fe) throw new Error("Cannot extend character marker in readonly mode");
      nn(q), I?.forEach(
        (G) => nn(G)
      );
      let V = !1;
      return d.current?.update(
        () => {
          const G = N();
          P(G) && (V = xA(
            G,
            q,
            I,
            Z
          ));
        },
        { discrete: !0 }
      ), V;
    },
    insertMarker(q) {
      if (fe) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!Zc(q, Ye.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const I = el(
        q,
        y,
        Z,
        Ye,
        ie,
        void 0,
        ee
      );
      return I.action({ editor: d.current, reference: r }), I.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!H)
        return d.current?.getEditorState().read(() => _1());
    },
    applyMarkerMenuSelection(q, I) {
      if (H) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (q.kind !== "closeTag" && !Zc(q.marker, Ye.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let V;
      return d.current.update(() => {
        V = O1(q, I, r, {
          expandedNoteKeyRef: y,
          viewOptions: Z,
          nodeOptions: Ye,
          logger: c,
          styleInfo: ee
        });
      }), V;
    },
    splitParagraphWithMarker(q) {
      if (H) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        hl(q, Z);
      });
    },
    commitTypedMarker(q, I) {
      if (H) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let V = !1;
      return d.current.update(() => {
        V = N1(q, I), V || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), V;
    },
    commitTypedCloser(q) {
      if (H) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let I = !1;
      return d.current.update(() => {
        I = Fy(q), I || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), I;
    },
    insertNote(q, I, V) {
      tn("insert a note"), d.current?.update(
        () => {
          const G = Ag(
            q,
            I,
            V,
            r,
            Z,
            Ye,
            ie
          );
          bc(G, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      d.current?.update(() => {
        const I = xr(q);
        I && (Uc(I, Z), bc(I, y));
      });
    },
    selectAfterNote(q) {
      const I = d.current;
      if (!I) return;
      const V = !rn(), G = V ? Ur(I, Ir) : void 0;
      if (I.update(
        () => {
          V && _t(Ir);
          const he = xr(q);
          he && Ng(he);
        },
        { discrete: !0 }
      ), G?.(), V) {
        nc(I);
        const he = Ur(
          I,
          Ir
        );
        I.update(
          () => {
            _t(Ir), I.dispatchCommand(qt, void 0);
          },
          { discrete: !0 }
        ), he();
      }
    },
    selectNoteTextOffset(q, I, V) {
      d.current?.update(() => {
        const G = xr(q);
        if (!G) return;
        const he = V?.glyph;
        (V?.field === "category" ? z_(G, I, he) || Zd(G, 0) : Zd(G, I, he)) || Uc(G, Z), bc(G, y);
      });
    },
    getNoteOps(q) {
      const I = d.current;
      return I ? bi(I, () => {
        const V = xr(q);
        if (V)
          return pa(V);
      }) : void 0;
    },
    getOpsAfterNote(q) {
      const I = d.current;
      return I ? bi(I, () => {
        const V = xr(q);
        return V ? bp(V) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(q) {
      const I = d.current, V = I ? bi(I, () => {
        const Oe = xr(q);
        if (!Oe) return;
        const Qe = iu(Oe, "apply");
        return { ops: bp(Oe), notePosition: Qe };
      }) : void 0;
      if (!V) return;
      const { ops: G, notePosition: he } = V;
      if (G.length === 0 || he === void 0) return G;
      const Xe = G.reduce(
        (Oe, Qe) => Oe + (typeof Qe.insert == "string" ? Qe.insert.length : 1),
        0
      );
      return Qt([{ retain: he + 1 }, { delete: Xe }], "remote", _l), G;
    },
    getNoteIndex(q) {
      const I = d.current;
      return I ? bi(I, () => ou(q)) : void 0;
    },
    getNoteKey(q) {
      const I = d.current;
      return I ? bi(I, () => xr(q)?.getKey()) : void 0;
    },
    highlightNote(q) {
      p.current?.setHighlightedNote(q);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  _e.current = mr, Yo(u, () => mr), B(() => {
    const q = d.current;
    if (q)
      return q.registerUpdateListener(({ editorState: I }) => {
        I.read(() => {
          const V = N();
          if (!P(V) || !V.isCollapsed()) return;
          const G = V.focus.getNode();
          M(G) && (b.current = { key: G.getKey(), offset: V.focus.offset });
        });
      });
  }, []);
  const Gi = ye(
    (q, I, V, G, he) => {
      if (pt) return;
      const Xe = go.deserializeEditorState(q, Z);
      if (Xe) {
        const Oe = !Kt(g.current, Xe);
        if (Oe && (g.current = Xe), Oe || !Kt(_, Xe)) {
          const Qe = Hd(G, q), Ot = Qe && !he.read(() => ne(Qe)) ? Qe : void 0;
          C.current = Xe, s?.(Xe, G, "local", Ot);
        }
      }
    },
    [_, s, Z, pt]
  );
  B(() => {
    const q = d.current;
    if (!(!q || !s))
      return q.registerUpdateListener(({ tags: I, dirtyElements: V, dirtyLeaves: G }) => {
        !I.has(El) && (V.size === 0 && G.size === 0 || I.has(bs) || !Id(q)?.size) || queueMicrotask(() => {
          const he = zt();
          !he || Kt(C.current, he) || (C.current = he, s(he, void 0, "local", void 0));
        });
      });
  }, [s, zt]);
  const vn = ye(
    (q) => {
      W(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Ee(Bp, { initialConfig: Ys, children: [
      /* @__PURE__ */ E(Ev, { isEditable: !fe }),
      /* @__PURE__ */ Ee("div", { className: "editor-container", children: [
        Q ? /* @__PURE__ */ E(lm, { onStateChange: vn }) : /* @__PURE__ */ E(
          "div",
          {
            className: "editor-toolbar-container" + (fe ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ E(
              z0,
              {
                ref: h,
                editorRef: _e,
                isReadonly: fe,
                onStateChange: vn
              }
            )
          }
        ),
        /* @__PURE__ */ Ee("div", { className: "editor-inner", children: [
          /* @__PURE__ */ E(Vp, { editorRef: d }),
          /* @__PURE__ */ E(
            mk,
            {
              contentEditable: /* @__PURE__ */ E(
                jp,
                {
                  className: `editor-input usfm ${bS(Z).join(" ")}${Z.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${Z.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: De
                }
              ),
              placeholder: /* @__PURE__ */ E(V0, {}),
              ErrorBoundary: Wp
            }
          ),
          Q && /* @__PURE__ */ E(Mv, {}),
          /* @__PURE__ */ E(Hp, {}),
          r && n && /* @__PURE__ */ E(T0, { scrRef: r, onScrRefChange: n }),
          r && !Q && /* @__PURE__ */ E(
            nE,
            {
              trigger: hr,
              scrRef: r,
              contextMarker: S,
              getMarkerAction: (q) => el(
                q,
                y,
                Z,
                Ye,
                ie,
                void 0,
                ee
              ),
              editableHarness: Sn
            }
          ),
          /* @__PURE__ */ E(
            Ov,
            {
              scripture: _,
              scriptureRef: g,
              nodeOptions: Ye,
              editorAdaptor: ur,
              viewOptions: Z,
              logger: ie
            },
            $
          ),
          /* @__PURE__ */ E(eM, { onChange: i }),
          /* @__PURE__ */ E(
            fS,
            {
              onChange: Gi,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Dk
            }
          ),
          /* @__PURE__ */ E(vA, { viewOptions: Z }),
          /* @__PURE__ */ E(uS, { ref: f, logger: ie }),
          /* @__PURE__ */ E(GS, { viewOptions: Z }),
          /* @__PURE__ */ E(cv, {}),
          /* @__PURE__ */ E(hv, {}),
          Z?.markerMode !== "editable" && /* @__PURE__ */ E(gv, { logger: ie }),
          /* @__PURE__ */ E(xv, { options: gr }),
          /* @__PURE__ */ E(kP, { limit: te, viewOptions: Z }),
          /* @__PURE__ */ E(vv, {}),
          /* @__PURE__ */ E(Pv, {}),
          /* @__PURE__ */ E(wv, {}),
          /* @__PURE__ */ E(R1, {}),
          /* @__PURE__ */ E(
            r0,
            {
              viewOptions: Z,
              getMarker: Hi,
              logger: ie,
              markerSettleDelayMs: R,
              structureProtectionMode: de,
              copyLimit: te
            }
          ),
          Z?.markerMode === "visible" && /* @__PURE__ */ E(bP, { viewOptions: Z, copyLimit: te }),
          /* @__PURE__ */ E(
            c0,
            {
              styleInfo: ee,
              viewOptions: Z,
              logger: ie
            }
          ),
          /* @__PURE__ */ E(Rv, { ref: p }),
          /* @__PURE__ */ E(
            qv,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Ye,
              viewOptions: Z,
              logger: ie
            }
          ),
          /* @__PURE__ */ E(Zv, {}),
          /* @__PURE__ */ E(BS, {}),
          /* @__PURE__ */ E(US, {}),
          /* @__PURE__ */ E(k0, { viewOptions: Z, logger: ie }),
          /* @__PURE__ */ E(tM, {}),
          /* @__PURE__ */ E(FM, { structureProtectionMode: de }),
          /* @__PURE__ */ E(zM, { textDirection: Ce }),
          /* @__PURE__ */ E(BM, {}),
          /* @__PURE__ */ E(tE, {}),
          l
        ] }),
        Zr && /* @__PURE__ */ E(R0, {})
      ] })
    ] }, Z.verseLayout ?? "inline")
  );
}), ew = Tn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ E(ob, { ref: r, ...i });
});
function ab() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Jo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? ab() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function cb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? ab() : r,
    quote: e,
    type: "thread"
  };
}
function xp(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function W0(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function kc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class H0 {
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
    this._comments = t, kc(this);
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
          const c = xp(a);
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
    this._comments = i, kc(this);
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
          const c = xp(a);
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
    return this._comments = n, kc(this), t.type === "comment" ? {
      index: s,
      markedComment: W0(t)
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
    return t !== null ? t.doc.get("comments", fd) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new pd(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new fd();
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
      Ok,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Et
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Rk) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const h = p.insert, g = p.retain, y = p.delete, k = u.parent, b = u === r ? void 0 : k instanceof pd && this._comments.find((C) => C.id === k.get("id"));
              if (Array.isArray(h)) {
                const C = f;
                h.slice().reverse().forEach((A) => {
                  const _ = A.get("id"), $ = A.get("type") === "thread" ? cb(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (z) => Jo(
                        z.get("content"),
                        z.get("author"),
                        z.get("id"),
                        z.get("timeStamp"),
                        z.get("deleted")
                      )
                    ),
                    _
                  ) : Jo(
                    A.get("content"),
                    A.get("author"),
                    _,
                    A.get("timeStamp"),
                    A.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment($, b, C);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let C = 0; C < y; C++) {
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
function G0(e) {
  const [t, r] = pe(e.getComments());
  return B(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function J0({
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
      const u = l.target;
      i.current !== null && !i.current.contains(u) && n && e();
    }, c = i.current;
    return c !== null && (s = c.parentElement, s !== null && s.addEventListener("click", a)), window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o), s !== null && s?.removeEventListener("click", a);
    };
  }, [n, e]), /* @__PURE__ */ E("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Ee("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function Y0({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Ln(
    /* @__PURE__ */ E(J0, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function lb() {
  const [e, t] = pe(null), r = ye(() => {
    t(null);
  }, []), n = We(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ E(Y0, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const X0 = {
  ...jm,
  paragraph: "CommentEditorTheme__paragraph"
};
function Q0(...e) {
  return e.filter(Boolean).join(" ");
}
function xn({
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
      className: Q0(
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
function Z0({
  className: e
}) {
  return /* @__PURE__ */ E(jp, { className: e || "ContentEditable__root" });
}
function eN({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ E("div", { className: t || "Placeholder__root", children: e });
}
const Tp = Up("INSERT_INLINE_COMMAND");
function tN({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Y(null), s = ye(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return B(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Is(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ E("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ E("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ E("i", { className: "icon add-comment" }) }) });
}
function rN({ onEscape: e }) {
  const [t] = ae();
  return B(() => t.registerCommand(
    Dp,
    (r) => e(r),
    Cr
  ), [t, e]), null;
}
function ub({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ E(Bp, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: X0
  }, children: /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ E(
      Pk,
      {
        contentEditable: /* @__PURE__ */ E(Z0, { className: e }),
        placeholder: /* @__PURE__ */ E(eN, { children: s }),
        ErrorBoundary: Wp
      }
    ),
    /* @__PURE__ */ E(Ak, { onChange: n }),
    /* @__PURE__ */ E(Hp, {}),
    t !== !1 && /* @__PURE__ */ E(vk, {}),
    /* @__PURE__ */ E(rN, { onEscape: r }),
    /* @__PURE__ */ E(Mk, {}),
    i !== void 0 && /* @__PURE__ */ E(Vp, { editorRef: i })
  ] }) });
}
function db(e, t) {
  return ye(
    (r, n) => {
      r.read(() => {
        e(Nk()), t(!wk(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function nN({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = pe(""), [s, o] = pe(!1), a = Y(null), c = We(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Y(null), u = pb(), d = ye(() => {
    e.getEditorState().read(() => {
      const g = N();
      if (P(g)) {
        l.current = g.clone();
        const y = g.anchor, k = g.focus, b = bk(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), C = a.current;
        if (b !== null && C !== null) {
          const { left: A, bottom: _, width: w } = b.getBoundingClientRect(), $ = kk(e, b);
          let z = $.length === 1 ? A + w / 2 - 125 : A - 125;
          z < 10 && (z = 10), C.style.left = `${z}px`, C.style.top = `${_ + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const S = $.length, { container: W } = c, H = c.elements, de = H.length;
          for (let Q = 0; Q < S; Q++) {
            const De = $[Q];
            let Ce = H[Q];
            Ce === void 0 && (Ce = document.createElement("span"), H[Q] = Ce, W.appendChild(Ce));
            const Ve = `position:absolute;top:${De.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${De.left}px;height:${De.height}px;width:${De.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Ce.style.cssText = Ve;
          }
          for (let Q = de - 1; Q >= S; Q--) {
            const De = H[Q];
            W.removeChild(De), H.pop();
          }
        }
      }
    });
  }, [e, c]);
  Is(() => {
    d();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), B(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        cb(g, [Jo(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = db(i, o);
  return /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ E(
      ub,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ E(xn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ E(
        xn,
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
function iN({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = pe(""), [s, o] = pe(!1), a = Y(null), c = pb(), l = db(i, o);
  return /* @__PURE__ */ Ee(Dn, { children: [
    /* @__PURE__ */ E(
      ub,
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
      xn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Jo(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(lk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ E("i", { className: "send" })
      }
    )
  ] });
}
function fb({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Ee(Dn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Ee("div", { className: "Modal__content", children: [
      /* @__PURE__ */ E(
        xn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ E(
        xn,
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
function Cp({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = pe(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = lb();
  return /* @__PURE__ */ Ee("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ E("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Ee("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ E("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Ee(Dn, { children: [
      /* @__PURE__ */ E(
        xn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ E(
              fb,
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
function sN({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = pe(0), [l, u] = lb(), d = We(
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
    return f.type === "thread" ? /* @__PURE__ */ Ee(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(g)[0], b = ne(k);
                xe(b) && b.selectStart();
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
          /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Ee("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ E("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ E(
              xn,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ E(
                    fb,
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
            Cp,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ E("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ E(
            iN,
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
      Cp,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function oN({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Y(null), o = r.length === 0;
  return /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ E("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ E("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ E(
      sN,
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
function pb() {
  const e = Gp(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function aN({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Gp(), [a] = ae(), c = We(() => {
    const z = new H0(a, s);
    return r && z.registerOnChange(r), t?.(z), z;
  }, [a, s, r, t]), l = G0(c), u = We(() => /* @__PURE__ */ new Map(), []), [d, f] = pe(), [p, h] = pe([]), [g, y] = pe(!1), [k, b] = pe(!1), { yjsDocMap: C } = o;
  B(() => {
    if (e) {
      const z = e("comments", C);
      return c.registerCollaboration(z);
    }
    return () => {
    };
  }, [c, e, C]);
  const A = ye(() => {
    a.update(() => {
      const z = N();
      z !== null && (z.dirty = !0);
    }), y(!1);
  }, [a]), _ = ye(
    (z, S) => {
      if (z.type === "comment") {
        const W = c.deleteCommentOrThread(z, S);
        if (!W)
          return;
        const { markedComment: H, index: de } = W;
        c.addComment(H, S, de);
      } else {
        c.deleteCommentOrThread(z);
        const W = S !== void 0 ? S.id : z.id, H = u.get(W);
        H !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const de of H) {
              const Q = ne(de);
              xe(Q) && (Q.deleteID(dn, W), Q.hasNoIDsForEveryType() && Co(Q));
            }
          });
        });
      }
    },
    [c, a, u]
  ), w = ye(
    (z, S, W, H) => {
      c.addComment(z, W), S && (a.update(() => {
        P(H) && dh(H, dn, z.id);
      }), y(!1));
    },
    [c, a]
  );
  B(() => {
    const z = [];
    let S;
    for (const W of p) {
      const H = u.get(W);
      if (H !== void 0)
        for (const de of H) {
          const Q = a.getElementByKey(de);
          Q !== null && (Q.classList.add("selected"), z.push(Q), S = window.setTimeout(() => {
            b(!0);
          }, 0));
        }
    }
    return () => {
      S !== void 0 && window.clearTimeout(S);
      for (const W of z)
        W.classList.remove("selected");
    };
  }, [p, a, u]), B(() => {
    if (!a.hasNodes([ot]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const z = /* @__PURE__ */ new Map();
    return we(
      Kp(
        a,
        ot,
        (S) => xs(S.getTypedIDs()),
        (S, W) => {
          for (const [H, de] of Object.entries(S.getTypedIDs()))
            de.forEach((Q) => {
              W.addID(H, Q);
            });
        }
      ),
      a.registerMutationListener(
        ot,
        (S) => {
          a.getEditorState().read(() => {
            for (const [W, H] of S) {
              const de = ne(W);
              let Q = [];
              H === "destroyed" ? Q = z.get(W) ?? [] : xe(de) && (Q = de.getTypedIDs()[dn] ?? []);
              for (const De of Q) {
                let Ce = u.get(De);
                z.set(W, Q), H === "destroyed" ? Ce !== void 0 && (Ce.delete(W), Ce.size === 0 && u.delete(De)) : (Ce === void 0 && (Ce = /* @__PURE__ */ new Set(), u.set(De, Ce)), Ce.has(W) || Ce.add(W));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: S, tags: W }) => {
        S.read(() => {
          const H = N();
          let de = !1, Q = !1;
          if (P(H)) {
            const De = H.anchor.getNode();
            if (M(De)) {
              const Ce = xx(De, dn, H.anchor.offset) ?? [];
              Ce !== null && (h(Ce), de = !0), H.isCollapsed() || (f(De.getKey()), Q = !0);
            }
          }
          de || h((De) => De.length === 0 ? De : []), Q || f(null), !W.has("collaboration") && P(H) && y(!1);
        });
      }),
      a.registerCommand(
        Tp,
        () => {
          const S = window.getSelection();
          return S !== null && S.removeAllRanges(), y(!0), !0;
        },
        zn
      )
    );
  }, [a, u]);
  const $ = () => {
    a.dispatchCommand(Tp, void 0);
  };
  return /* @__PURE__ */ Ee(Dn, { children: [
    g && Ln(
      /* @__PURE__ */ E(
        nN,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: w
        }
      ),
      document.body
    ),
    d != null && !g && Ln(
      /* @__PURE__ */ E(
        tN,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: $
        }
      ),
      document.body
    ),
    n !== null && Ln(
      /* @__PURE__ */ E(
        xn,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => b(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ E("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && Ln(
      /* @__PURE__ */ E(
        oN,
        {
          comments: l,
          submitAddComment: w,
          deleteCommentOrThread: _,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function cN() {
  const e = Y(void 0), t = ye((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function lN(e, t) {
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
function uN(e, t) {
  B(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      lN(r, t);
    };
  }, [t, e]);
}
const tw = Tn(function(t, r) {
  const n = Y(null), i = Y(!0), s = Y(null), [o, a] = pe(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, y = (h ?? !1) || As(g), [k, b] = cN();
  uN(f, k), B(() => {
    if (process.env.NODE_ENV !== "production") {
      const _ = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(_), p || console.warn(_);
    }
  }, [p]), Yo(r, () => ({
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
  const C = ye(
    (_, w, $, z) => {
      if (!u) return;
      const S = k.current?.getComments();
      u(_, S, w, $, z);
    },
    [k, u]
  ), A = ye(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const _ = k.current?.getComments();
    l(_);
  }, [k, i, l]);
  return B(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ E(Ek, { children: /* @__PURE__ */ Ee(ob, { ref: n, onUsjChange: C, ...f, children: [
    /* @__PURE__ */ E(
      aN,
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
function In(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function dN(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function fN(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const pN = /^[#\w().,%/\s-]+$/;
function Dr(e) {
  return e != null;
}
const hN = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, gN = {
  left: "right",
  right: "left"
}, mN = "var(--usj-font-fallback, serif)";
function hb(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${dN(i)}"`).join(", ")}, ${mN}`;
}
const xl = ".editor-input.usfm", yN = /^[\w.#[\]="':()>+~*,\s-]+$/;
function bN(e) {
  return yN.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${xl}".`
  ), xl);
}
function kN(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(hb(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (pN.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Dr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Dr(t.firstLineIndent) && s.push(`text-indent: ${In(t.firstLineIndent * 20 * r)}vw`), Dr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${In(t.leftMargin * 20 * r)}vw`), Dr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${In(t.rightMargin * 20 * r)}vw`
  ), Dr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${In(t.spaceBefore * r)}pt`), Dr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${In(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = hN[n ? gN[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const _p = { c: 150, ca: 133, cp: 150 };
function Sp(e, t) {
  return e && Dr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function xN(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Dr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Sp(e.markers.c, _p.c);
  return ["ca", "cp"].map((i) => {
    const s = Sp(
      e.markers[i],
      _p[i]
    ), o = In(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function rw(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = xl } = t, s = bN(i), o = [], a = [];
  e.defaultFont && a.push(hb(e.defaultFont)), Dr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${In(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = kN(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${fN(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...xN(e, s)), o.join(`
`);
}
export {
  Ug as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  ew as Editorial,
  ys as GENERATOR_NOTE_CALLER,
  Yp as HIDDEN_NOTE_CALLER,
  tw as Marginal,
  x as MarkerType,
  Dg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  mu as STANDARD_VIEW_MODE,
  Ao as defaultStyleInfo,
  ZN as directionToNames,
  tS as filterAndRankItems,
  rw as generateUsjCss,
  XN as getDefaultViewMode,
  ma as getDefaultViewOptions,
  IP as getEnterMenuItems,
  $P as getMarkerMenuItems,
  QN as getViewMode,
  ku as getViewOptions,
  As as isBlockVerseLayout,
  ln as isInsertEmbedOpOfType,
  hS as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
