import { jsx as E, jsxs as Ne, Fragment as zn } from "react/jsx-runtime";
import { forwardRef as Cn, useState as me, useRef as X, useCallback as xe, useEffect as j, useMemo as Ge, memo as Qb, createContext as Dp, useContext as Up, Children as Zb, isValidElement as ek, cloneElement as tk, useImperativeHandle as aa, useLayoutEffect as Vs } from "react";
import { assertSafeKey as tt, isValidBookCode as rk, MARKER_OBJECT_PROPS as nk, USJ_VERSION as fr, USJ_TYPE as pr, isUsjTextContentLocation as ik, indexesFromUsjJsonPath as Fp, isUsjAttributeKeyLocation as sk, isUsjAttributeMarkerLocation as ok, isUsjClosingAttributeMarkerLocation as ak, isUsjMarkerLocation as ck, isUsjClosingMarkerLocation as lk, isUsjPropertyValueLocation as uk, getUsjDocumentLocationTypeName as dk, usjJsonPathFromIndexes as On, EMPTY_USJ as zp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ye, $parseSerializedNode as Kn, DecoratorNode as Ws, ElementNode as yr, isHTMLElement as ri, createState as ca, $getState as ae, $setState as Et, $isRangeSelection as A, $isElementNode as I, $isTextNode as M, $getSelection as P, $isNodeSelection as la, ParagraphNode as El, TextNode as Le, $createTextNode as Te, $getCommonAncestor as fk, $isLineBreakNode as ni, NODE_STATE_KEY as Hs, $getEditor as _n, $hasUpdateTag as pk, $getNodeByKey as se, $getRoot as Ke, $createRangeSelection as Bn, $createPoint as ur, $setSelection as Br, SELECTION_CHANGE_COMMAND as Ft, $getCharacterOffsets as Al, KEY_DOWN_COMMAND as $r, COMMAND_PRIORITY_HIGH as Pe, HISTORY_MERGE_TAG as Pl, CLICK_COMMAND as ua, COMMAND_PRIORITY_EDITOR as jn, DELETE_CHARACTER_COMMAND as da, DELETE_WORD_COMMAND as Nl, DELETE_LINE_COMMAND as Ao, COMMAND_PRIORITY_NORMAL as Pr, CONTROLLED_TEXT_INSERTION_COMMAND as wi, COMMAND_PRIORITY_CRITICAL as _e, PASTE_COMMAND as Yt, CUT_COMMAND as hr, REMOVE_TEXT_COMMAND as Kp, isDOMNode as Bp, $getNearestNodeFromDOMNode as Wi, $isRootNode as jp, DROP_COMMAND as wl, $isDecoratorNode as ii, COPY_COMMAND as Oi, COMMAND_PRIORITY_LOW as ft, getDOMSelection as hk, isSelectionWithinEditor as Vp, $createRangeSelectionFromDom as Wp, isDOMTextNode as gk, BLUR_COMMAND as Ol, $addUpdateTag as Ct, SKIP_DOM_SELECTION_TAG as cr, CLEAR_HISTORY_COMMAND as mk, INSERT_PARAGRAPH_COMMAND as Mi, INSERT_LINE_BREAK_COMMAND as Hp, $getPreviousSelection as yk, $isRootOrShadowRoot as bk, CAN_UNDO_COMMAND as kk, CAN_REDO_COMMAND as Tk, DRAGSTART_COMMAND as xk, $createNodeSelection as Gp, getDOMSelectionFromTarget as Ck, $onUpdate as Jp, KEY_ENTER_COMMAND as Yp, LineBreakNode as Xp, $copyNode as _k, FOCUS_COMMAND as Qp, createEditor as Sk, SELECT_ALL_COMMAND as vk, isExactShortcutMatch as Mk, getDOMTextNode as Ek, KEY_ESCAPE_COMMAND as Zp, createCommand as Rl, HISTORIC_TAG as ql, UNDO_COMMAND as eh, REDO_COMMAND as th, CLEAR_EDITOR_COMMAND as Ak } from "lexical";
import { addClassNamesToElement as hi, removeClassNamesFromElement as Va, $findMatchingParent as we, $dfsIterator as fa, $dfs as si, mergeRegister as $e, registerNestedElementResolver as rh, $unwrapNode as Ec, IS_APPLE as Ri } from "@lexical/utils";
import { useLexicalNodeSelection as Pk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Dt } from "fast-equals";
import gs from "quill-delta";
import { copyToClipboard as Nk, $getLexicalContent as wk } from "@lexical/clipboard";
import { graphemeSegments as Ok } from "unicode-segmenter/grapheme";
import { useLexicalComposerContext as ue } from "@lexical/react/LexicalComposerContext";
import { TreeView as Rk } from "@lexical/react/LexicalTreeView";
import * as qk from "react-dom";
import { createPortal as Fn } from "react-dom";
import { LexicalComposer as nh } from "@lexical/react/LexicalComposer";
import { ContentEditable as ih } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as sh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as oh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as ah } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as $k } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Ik, createDOMRange as Lk, createRectsFromDOMRange as Dk } from "@lexical/selection";
import { autoUpdate as Uk, computePosition as Fk, shift as zk, flip as Kk } from "@floating-ui/dom";
import { $generateNodesFromDOM as Bk } from "@lexical/html";
import { AutoFocusPlugin as jk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Vk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as ch, LexicalCollaboration as Wk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Hk } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Gk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Jk, $isRootTextContentEmpty as Yk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Xk } from "@lexical/yjs";
import { Array as Cd, Map as _d, YArrayEvent as Qk } from "yjs";
const Wa = (e) => Ye(Kn(e)), Zk = {
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
function lh(e) {
  return Zk[e];
}
const D = " ", Po = "​", er = D, $l = `${D}|`, Ut = "p", Ss = "+", uh = "-", No = "chapter", Ac = "verse", Sd = "invalid", eT = "text-spacing", tT = "formatted-font", rT = "marker-", Il = "external-usj-mutation", dh = "selection-change", At = "cursor-change", Pc = "annotation-change", vs = "delta-change", fh = "marker-settle", nT = [
  Il,
  dh,
  At,
  Pc,
  vs
], Vn = "zmsc-s", Ei = "zmsc-e", iT = [Vn, Ei], sT = [
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
  Vn,
  Ei
], ph = 1, Ll = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], oT = Ll.filter((e) => e !== "sid" && e !== "eid");
class gr extends Ws {
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
    return new gr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return gh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (sT.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: ph
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function hh(e) {
  return iT.includes(e);
}
function gh(e, t, r, n, i) {
  return Ye(new gr(e, t, r, n, void 0, i));
}
function et(e) {
  return e instanceof gr;
}
const Dl = "f", aT = [
  // Footnote
  Dl,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function po(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const cT = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], mh = 1;
class Oe extends yr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Dl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (po(t) === "crossref" ? uh : Ss), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Oe(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => uT(t) ? {
        conversion: lT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ul().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (aT.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", po(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", po(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", po(this.getMarker()))), { element: r };
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
      version: mh
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
function lT(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Ul(t, r, n) };
}
function Ul(e, t, r, n, i) {
  return Ye(new Oe(e, t, r, n, i));
}
function uT(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Oe.isValidMarker(t) && e.classList.contains(Oe.getType());
}
function B(e) {
  return e instanceof Oe;
}
var x;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(x || (x = {}));
var T;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(T || (T = {}));
const Nc = {
  id: {
    category: x.FileIdentification,
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
    category: x.FileIdentification,
    type: T.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: x.FileIdentification,
    type: T.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: x.Headers,
    type: T.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: x.Remarks,
    type: T.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: x.Remarks,
    type: T.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: x.Remarks,
    type: T.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: x.Introduction,
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
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
    type: T.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
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
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: x.Introduction,
    type: T.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: x.Introduction,
    type: T.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: x.DivisionMarks,
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
    category: x.DivisionMarks,
    type: T.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: x.DivisionMarks,
    type: T.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: x.DivisionMarks,
    type: T.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: x.DivisionMarks,
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
    category: x.DivisionMarks,
    type: T.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: x.DivisionMarks,
    type: T.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: x.DivisionMarks,
    type: T.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
    type: T.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Paragraphs,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
    type: T.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: x.Poetry,
    type: T.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: x.Poetry,
    type: T.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
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
    category: x.Poetry,
    type: T.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
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
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: x.TitlesHeadings,
    type: T.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
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
    category: x.Lists,
    type: T.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: x.Lists,
    type: T.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: x.Footnotes,
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
    category: x.Footnotes,
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
    category: x.Footnotes,
    type: T.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: x.Footnotes,
    type: T.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: x.Footnotes,
    type: T.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: x.Footnotes,
    type: T.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: x.Footnotes,
    type: T.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: x.Footnotes,
    type: T.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: x.Footnotes,
    type: T.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: x.Footnotes,
    type: T.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: x.Footnotes,
    type: T.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: x.Footnotes,
    type: T.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: x.Footnotes,
    type: T.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: x.CrossReferences,
    type: T.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: x.CrossReferences,
    type: T.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: x.CrossReferences,
    type: T.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: x.CrossReferences,
    type: T.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: x.CrossReferences,
    type: T.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: x.CrossReferences,
    type: T.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: x.CrossReferences,
    type: T.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: x.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: x.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: x.CrossReferences,
    type: T.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: x.CrossReferences,
    type: T.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: x.SpecialText,
    type: T.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: x.SpecialText,
    type: T.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: x.SpecialText,
    type: T.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: x.SpecialText,
    type: T.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: x.SpecialText,
    type: T.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: x.SpecialText,
    type: T.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: x.SpecialText,
    type: T.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: x.SpecialText,
    type: T.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: x.SpecialText,
    type: T.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: x.SpecialText,
    type: T.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: x.SpecialText,
    type: T.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: x.SpecialText,
    type: T.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: x.SpecialText,
    type: T.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: x.SpecialText,
    type: T.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: x.SpecialText,
    type: T.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: x.CharacterStyling,
    type: T.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: x.Breaks,
    type: T.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, Rn = {
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
}, vd = {
  p: { children: Rn },
  q: { children: Rn },
  q1: { children: Rn },
  q2: { children: Rn },
  q3: { children: Rn },
  q4: { children: Rn },
  b: { children: Rn },
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
    category: x.SpecialFeatures,
    type: T.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: x.SpecialFeatures,
    type: T.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: x.SpecialFeatures,
    type: T.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: x.SpecialFeatures,
    type: T.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function Nr(e) {
  const t = Object.hasOwn(Nc, e) ? Nc[e] : void 0, r = Object.hasOwn(vd, e) ? vd[e] : void 0;
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
const yh = "v", bh = "c", qn = "fig", Md = "tr", wc = "esb", kh = "esbe", Ed = "periph", Ad = "alt", Pd = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, dT = {
  "": "start",
  c: "center",
  r: "end"
};
function Nd(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function wd(e) {
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
const fT = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function pT(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Po && s + 1 < e.length && wd(e[s + 1]) || (wd(o) ? (r || (i = t.length, t += o), r = !0) : fT.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function hT(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function gT(e, t) {
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
const mT = /^(?:qt[1-5]?|ts)-[se]$/;
function Fl(e) {
  return mT.test(e) || hh(e);
}
function Ha(e, t) {
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
function yT(e, t, r) {
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
      a(pT(e.slice(i, g))), i = g;
      continue;
    }
    const c = i, { name: l, next: d } = gT(e, i + 1);
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
    if (l === yh) {
      const { word: h, next: g } = Ha(e, i);
      i = g, n.push({ kind: "verse", number: h });
      continue;
    }
    if (l === bh) {
      const { word: h, next: g } = Ha(e, i);
      i = g, s = void 0, n.push({ kind: "chapter", number: h });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, y = t(p)?.type;
    if (y === T.Note || y === void 0 && Oe.isValidMarker(l)) {
      const { word: h, next: g } = Ha(e, i);
      i = g, s = l, n.push({ kind: "note", marker: l, caller: h || "+" });
      continue;
    }
    if (y === T.Milestone || y === void 0 && Fl(l)) {
      const h = vT(e, c, l, i);
      if (h)
        n.push(h.token), h.ejectedText && o(h.ejectedText), i = h.next;
      else {
        const g = e.indexOf("\\", i), b = g === -1 ? e.length : g;
        o(e.slice(c, b)), i = b;
      }
      continue;
    }
    y === T.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : y === T.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : wo(p) ? (u(), wo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === wc || l === kh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Od = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function wo(e) {
  return Object.hasOwn(Od, e) ? Od[e] : void 0;
}
function bT(e) {
  return wo(e) !== void 0;
}
const kT = /([-\w]+)\s*=\s*"(.*?)"/g, TT = /[\s\u200B]*[\n\r][\s\u200B]*/g, Th = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function pa(e) {
  return Th[e];
}
const xT = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function CT(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Ms(e, t, r = Th[t]) {
  const n = e.replace(TT, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(kT)];
  if (s.length > 0) {
    if (!CT(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      xT.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function ha(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function _T(e) {
  const t = Gr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function ST(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Ms(e.slice(n + 1, i), r, ha(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function vT(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Ms(s.slice(o + 1), r, ha(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = ST(e, i + 2, r);
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
`, " ").replaceAll("~", D);
}
function cn(e) {
  return e.content || (e.content = []), e.content;
}
function Gr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d, u;
  const f = () => d ? cn(d) : u ? cn(u) : r;
  let p = !1;
  const y = () => {
    if (s)
      return o.length > a ? cn(o[o.length - 1].object) : cn(s);
    if (o.length > 0)
      return cn(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: Ut, content: [] }, f().push(i);
    }
    return cn(i);
  }, h = (ee) => {
    const R = y();
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
  }, v = (ee, R, te) => {
    b();
    const [, de, Re, dt] = te, Z = {
      type: "table:cell",
      marker: dt ? R.slice(0, R.indexOf("-")) : R,
      align: dT[de],
      content: []
    };
    dt && (Z.colspan = String(Number(dt) + 1 - Number(Re))), cn(ee).push(Z), i = Z;
  }, C = (ee) => {
    d && (ee || (d.closed = "false"), d = void 0);
  }, $ = () => {
    u = void 0;
  };
  let N, z = "", K;
  const ne = () => {
    z && h(Sr(z)), z = "";
  }, G = (ee = !1) => {
    N?.type === "sidebar" ? z = "" : ee && z.endsWith(`
`) && (z = z.slice(0, -1)), N = void 0, ne();
  }, Ce = () => {
    if (!K)
      return;
    const ee = { type: "char", marker: K.marker, content: [] };
    K.value && (ee.content = [Sr(K.value)]), y().push(ee), o.push({ object: ee }), K = void 0;
  }, re = (ee, R) => {
    p = !1, _(), b(), k(!1), i = { type: "para", marker: ee, content: [] }, R && (i.content = [Sr(R)]), f().push(i);
  }, q = () => {
    K && (re(K.marker, K.value), K = void 0);
  };
  let H;
  const ye = (ee) => {
    if (!H)
      return;
    let { value: R } = H;
    H = void 0, ee && R.endsWith(`
`) && (R = R.slice(0, -1));
    const te = R.indexOf("|"), de = te >= 0 ? Ms(R.slice(te + 1), Ed) : void 0, Re = te >= 0 ? R.slice(0, te) : R, dt = te >= 0 && (!de || !!Re && !!de[Ad]), Z = dt ? void 0 : de, Xe = dt ? R : Re, Tr = {
      type: "periph",
      ...Xe ? { [Ad]: Sr(Xe) } : {},
      ...Z
    };
    Tr.content = [], f().push(Tr), u = Tr, i = void 0;
  };
  let he;
  const ot = () => {
    if (he) {
      if (he.shape === "para")
        re(qn, he.value);
      else {
        const ee = { type: "char", marker: qn, content: [] };
        he.value && (ee.content = [Sr(he.value)]), y().push(ee), o.push({ object: ee });
      }
      he = void 0;
    }
  }, Ur = yT(e, t?.getMarker ?? Nr, n);
  for (let ee = 0; ee < Ur.length; ee++) {
    const R = Ur[ee];
    if (K) {
      if (R.kind === "text") {
        K.value += R.text;
        continue;
      }
      if (K.shape === "char" && R.kind === "end" && R.marker.replace(/^\+/, "") === K.marker) {
        if (K.value.trim() === "") {
          y().push({ type: "char", marker: K.marker, content: [] }), K = void 0, G();
          continue;
        }
        Object.assign(K.target, {
          [K.attrName]: Sr(K.value.trim())
        });
        const te = K.marker;
        if (K = void 0, te === "ca") {
          const de = Ur[ee + 1];
          de?.kind === "text" && /^[\s\u200B]*$/.test(de.text) && ee++;
        }
        continue;
      }
      if (K.shape === "para" && (R.kind === "para" || R.kind === "chapter")) {
        const te = K.value.replace(/[\s\u200B]+$/, "");
        te === "" ? (re(K.marker), K = void 0) : (Object.assign(K.target, { [K.attrName]: Sr(te) }), K = void 0);
      } else {
        N = void 0, (R.kind === "para" || R.kind === "chapter") && K.value.endsWith(`
`) && (K.value = K.value.slice(0, -1)), K.shape === "para" ? q() : Ce(), ee--;
        continue;
      }
    }
    if (H) {
      if (R.kind === "text" || R.kind === "optbreak") {
        H.value += R.kind === "text" ? R.text : "//";
        continue;
      }
      ye(R.kind === "para" || R.kind === "chapter"), ee--;
      continue;
    }
    if (he) {
      if (R.kind === "text" || R.kind === "optbreak") {
        he.value += R.kind === "text" ? R.text : "//";
        continue;
      }
      if (R.kind === "end" && R.marker.replace(/^\+/, "") === qn) {
        const te = he.value.indexOf("|"), de = te >= 0 ? Ms(he.value.slice(te + 1), qn) : void 0;
        if (de) {
          const Re = {};
          for (const [Xe, Tr] of Object.entries(de))
            Re[Xe === "src" ? "file" : Xe] = Tr;
          const dt = {
            type: "figure",
            marker: qn,
            ...Re
          }, Z = he.value.slice(0, te);
          Z && (dt.content = [Sr(Z)]), h(dt), he = void 0;
          continue;
        }
      }
      ot(), ee--;
      continue;
    }
    if (N)
      if (R.kind === "text") {
        if (R.text.includes(`
`) && /^[\s\u200B]*$/.test(R.text)) {
          z += R.text;
          continue;
        }
        G();
      } else if (R.kind === "charOpen" || R.kind === "para") {
        const te = R.kind === "para" || !R.isNested ? wo(R.marker) : void 0;
        if (te && te.targetTypes.includes(N.type)) {
          z = "", K = {
            target: N,
            attrName: te.attrName,
            marker: R.marker,
            shape: te.shape,
            value: ""
          };
          continue;
        }
        G(R.kind === "para");
      } else
        G(R.kind === "chapter");
    if (!s && !n && (R.kind === "charOpen" && !R.isNested && R.marker === qn || R.kind === "para" && R.marker === qn)) {
      b(), he = { shape: R.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (R.kind) {
      case "text": {
        let te = R.text;
        if (!s && te.endsWith(`
`)) {
          const de = Ur[ee + 1];
          (de === void 0 || de.kind === "para" || de.kind === "chapter") && (te = te.slice(0, -1));
        }
        te && h(Sr(te));
        break;
      }
      case "para": {
        const te = !s && !n;
        if (te && R.marker === Md) {
          b(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Md, content: [] }, cn(c).push(l), i = l, p = !1;
          break;
        }
        if (te && l) {
          const de = Pd.exec(R.marker);
          if (de && Nd(de)) {
            v(l, R.marker, de);
            break;
          }
        }
        if (_(), !n && R.marker === wc) {
          b(), k(!1), C(!1);
          const de = {
            type: "sidebar",
            marker: wc,
            content: []
          };
          f().push(de), d = de, i = void 0, N = d, p = !1;
          break;
        }
        if (R.marker === kh && d) {
          b(), k(!1), C(!0), i = void 0;
          break;
        }
        if (!n && R.marker === Ed) {
          b(), k(!1), C(!1), $(), H = { value: "" }, i = void 0, p = !1;
          break;
        }
        re(R.marker);
        break;
      }
      case "verse": {
        k(!1);
        const te = { type: "verse", marker: yh, number: R.number };
        h(te), N = te;
        break;
      }
      case "chapter": {
        b(), k(!1), _(), C(!1), $(), i = void 0;
        const te = {
          type: "chapter",
          marker: bh,
          number: R.number
        };
        r.push(te), N = te, p = !0;
        break;
      }
      case "note": {
        k(!1);
        const te = y();
        s = { type: "note", marker: R.marker, caller: R.caller, content: [] }, a = o.length, te.push(s), N = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !R.isNested) {
          const Re = Pd.exec(R.marker);
          if (Re && Nd(Re)) {
            v(l, R.marker, Re);
            break;
          }
        }
        if (!R.isNested) {
          const Re = s ? a : 0;
          g(Re), o.length = Re;
        }
        const te = y(), de = { type: "char", marker: R.marker, content: [] };
        te.push(de), o.push({ object: de });
        break;
      }
      case "end": {
        const te = R.marker.replace(/^\+/, ""), de = s ? a : 0, Re = o.findLastIndex((dt, Z) => Z >= de && dt.object.marker === te);
        Re >= 0 ? (MT(o[Re].object), g(Re + 1), o.length = Re) : s && s.marker === te ? k(!0) : (g(de), o.length = de, h({ type: "unmatched", marker: `${R.marker}*` }));
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
  if (H && ye(!0), he && ot(), K)
    if (K.shape === "para") {
      const ee = K.value.replace(/[\s\u200B]+$/, "");
      ee === "" ? re(K.marker) : Object.assign(K.target, { [K.attrName]: Sr(ee) }), K = void 0;
    } else
      K.value.endsWith(`
`) && (K.value = K.value.slice(0, -1)), Ce();
  b(), k(!1), C(!1);
  const Mn = (ee) => {
    for (const R of ee)
      typeof R != "string" && R.content && (Mn(R.content), R.content.length === 0 && delete R.content);
  };
  return Mn(r), r;
}
function MT(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Ms(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Wn = ca("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), gn = ca("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), fe = ca("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Ir = "marker-trailing-space", xh = 1, ET = "marker", zl = ca("isGutterMarker", {
  parse: (e) => e === !0
});
class Jr extends Ws {
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
    return new Jr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => wT(t) ? {
        conversion: AT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return jr().updateFromJSON(t);
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
    return r && ri(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
function AT(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: jr(t, r) };
}
function jr(e, t) {
  return Ye(new Jr(e, t));
}
function PT(e) {
  return Et(jr(ET, e), zl, !0);
}
function NT(e) {
  return zt(e) && ae(e, zl);
}
function wT(e) {
  return e?.tagName === "span";
}
function zt(e) {
  return e instanceof Jr;
}
function Ch(e) {
  return e?.type === Jr.getType();
}
const pn = "internal-comment", OT = [pn], _h = Object.freeze({}), Oc = Object.freeze({}), Rc = Object.freeze({}), qc = Object.freeze({}), $c = Object.freeze({}), RT = 1, gi = /* @__PURE__ */ new Map(), as = /* @__PURE__ */ new Map(), mi = /* @__PURE__ */ new Map(), yi = /* @__PURE__ */ new Map();
class lt extends yr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = _h, r, n, i, s, o) {
    super(o), this.__typedIDs = ho(t), this.__typedOnClicks = Ga(r), this.__typedOnRemoves = Ja(n), this.__typedOnMouseEnters = Ya(i), this.__typedOnMouseLeaves = Xa(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = ho(t.__typedIDs), n = Ga(t.__typedOnClicks), i = Ja(t.__typedOnRemoves), s = Ya(t.__typedOnMouseEnters), o = Xa(t.__typedOnMouseLeaves);
    return new lt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return OT.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Es().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: RT
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      hi(n, $n(t.theme.typedMark, a)), c.length > 1 && hi(n, $n(t.theme.typedMarkOverlap, a));
      for (const l of c)
        hi(n, $n("annotationId", l));
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
      c !== l && (c === 0 ? l === 1 && hi(r, d) : l === 0 && Va(r, d), c === 1 ? l === 2 && hi(r, u) : l === 1 && Va(r, u));
      const f = new Set(o), p = new Set(a);
      for (const y of o)
        p.has(y) || Va(r, $n("annotationId", y));
      for (const y of a)
        f.has(y) || hi(r, $n("annotationId", y));
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
    return Me(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = ho(r.__typedIDs);
    r.__typedIDs = ho(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Oo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Ga(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Me(t) ? gi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ja(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Me(t) ? as.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Ya(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Me(t) ? mi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Xa(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Me(t) ? yi.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Me(a))
      return;
    tt(t), tt(r);
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
    if (!Me(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Oo(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Es(this.__typedIDs, this.getTypedOnClicks());
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
    if (!A(r) || n === "html")
      return !1;
    const i = r.anchor, s = r.focus, o = i.getNode(), a = s.getNode(), l = r.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const r = this.getWritable(), n = this.getTypedIDs();
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), gi.delete(r.getKey()), as.delete(r.getKey()), mi.delete(r.getKey()), yi.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
    const n = mi.get(this.getKey());
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
    const n = yi.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Oc) {
      const t = gi.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      gi.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    gi.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    tt(t), tt(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = ln(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = ln(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Oc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Rc) {
      const t = as.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      as.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    as.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    tt(t), tt(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = ln(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = ln(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Rc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === qc) {
      const t = mi.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      mi.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    mi.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    tt(t), tt(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = ln(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = ln(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === qc) {
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
      const t = yi.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      yi.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    yi.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    tt(t), tt(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = ln(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = ln(this.__typedOnMouseLeaves, t);
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
    const i = qT(t, r);
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
    for (; Me(t) && qd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Me(r) && qd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = $T(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = IT(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = LT(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = DT(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function ho(e = _h) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (tt(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      tt(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Ga(e) {
  if (!e || e === Oc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    tt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ja(e) {
  if (!e || e === Rc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    tt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ya(e) {
  if (!e || e === qc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    tt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Xa(e) {
  if (!e || e === $c)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    tt(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      tt(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ln(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Rd(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function qT(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function qd(e, t) {
  const r = Rd(e), n = Rd(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function $T(e, t) {
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
function IT(e, t) {
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
function LT(e, t) {
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
function DT(e, t) {
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
function Es(e, t, r, n, i) {
  return Ye(new lt(e, t, r, n, i));
}
function Me(e) {
  return e instanceof lt;
}
function Sh(e) {
  return e?.type === lt.getType();
}
function Oo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function vh(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let y, h;
  for (let g = 0; g < d; g++) {
    const b = a[g];
    if (I(h) && h.isParentOf(b))
      continue;
    const k = g === 0, _ = g === d - 1;
    let v = null;
    if (M(b)) {
      const C = b.getTextContentSize(), $ = k ? f : 0, N = _ ? p : C;
      if ($ === 0 && N === 0)
        continue;
      const z = b.splitText($, N);
      v = z.length > 1 && (z.length === 3 || k && !_ || N === C) ? z[1] : z[0];
    } else {
      if (Me(b))
        continue;
      I(b) && b.isInline() && (v = b);
    }
    if (v !== null) {
      if (v && v.is(y))
        continue;
      const C = v.getParent();
      (C == null || !C.is(y)) && (h = void 0), y = C, h === void 0 && (h = Es(), h.addID(t, r, n, i, s, o), v.insertBefore(h)), h.append(v);
    } else
      y = void 0, h = void 0;
  }
  t === pn && I(h) && (u ? h.selectStart() : h.selectEnd());
}
function UT(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Me(n))
      return n.getTypedIDs()[t];
    if (M(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Me(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const FT = ["type", "marker", "content"], Ic = "unknown", Mh = 1, zT = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class oi extends yr {
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
    return new oi(r, n, i, s);
  }
  static importDOM() {
    return {
      [Ic]: (t) => BT(t) ? {
        conversion: KT,
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
    return zT.has(this.getTag());
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
    const t = document.createElement(Ic);
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
      version: Mh
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
    if (la(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function KT(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Kl(t, r) };
}
function Kl(e, t, r) {
  return Ye(new oi(e, t, r));
}
function BT(e) {
  return e?.tagName.toLowerCase() === Ic;
}
function Ve(e) {
  return e instanceof oi;
}
const Eh = 1, jT = "attribute-run";
function Qa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Yr extends yr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Yr(r, n);
  }
  static importJSON(t) {
    return Ah(t.runKind).updateFromJSON(t);
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
    t.classList.add(jT);
    const r = Qa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = Qa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = Qa(this.__runKind);
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
      version: Eh
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
function Ah(e) {
  return Ye(new Yr(e));
}
function Fe(e) {
  return e instanceof Yr;
}
const As = "id", Ph = 1, VT = [
  "type",
  "marker",
  "code",
  "content"
];
class Kt extends yr {
  __marker = As;
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
    return Nh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return rk(t);
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
function Nh(e, t) {
  return Ye(new Kt(e, t));
}
function ve(e) {
  return e instanceof Kt;
}
function Bl(e) {
  return e?.type === Kt.getType();
}
const Ro = "c", wh = 1, WT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Wt extends yr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Ro, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Wt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Oh().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(No, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: wh
    };
  }
}
function Oh(e, t, r, n, i) {
  return Ye(new Wt(e, t, r, n, i));
}
function qe(e) {
  return e instanceof Wt;
}
function HT(e) {
  return e?.type === Wt.getType();
}
const Rh = [
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
], qh = [
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
], GT = [
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
  ...Rh,
  ...qh
], $h = 1, JT = ["type", "marker", "content"];
class Se extends yr {
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
    return new Se(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (GT.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Rh.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && qh.includes(t);
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
    return Se.isValidFootnoteMarker(t) || Se.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => XT(t) ? {
        conversion: YT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Vr().updateFromJSON(t);
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
    return Id(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Id(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: $h
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Vr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Id(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function YT(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Vr(t) };
}
function Vr(e, t) {
  return Ye(new Se(e, t));
}
function XT(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Se.isValidMarker(t) && e.classList.contains(Se.getType());
}
function F(e) {
  return e instanceof Se;
}
function QT(e) {
  return e?.type === Se.getType();
}
const Ih = 1, ZT = "c", Lh = "span";
class Lr extends Ws {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = ZT, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Lr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Dh(t) ? {
        conversion: ex,
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
    const t = document.createElement(Lh);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(No, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(No, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Zt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Ih
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
function ex(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: jl(t) };
}
function jl(e, t, r, n, i, s) {
  return Ye(new Lr(e, t, r, n, i, s));
}
function Dh(e) {
  return e ? e.classList.contains(No) && e.tagName.toLowerCase() === Lh : !1;
}
function Gs(e) {
  return e instanceof Lr;
}
function tx(e) {
  return e?.type === Lr.getType();
}
const Uh = 1;
class Or extends El {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Or(t.__key);
  }
  static importJSON(t) {
    return Qt().updateFromJSON(t);
  }
  getMarker() {
    return Ut;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Uh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Qt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Qt() {
  return Ye(new Or());
}
function tr(e) {
  return e instanceof Or;
}
function ga(e) {
  return e?.type === Or.getType();
}
const rx = [
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
  Ut,
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
], Fh = 1, nx = ["type", "marker", "content"];
class st extends El {
  __marker;
  __unknownAttributes;
  constructor(t = Ut, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new st(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (rx.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: ix,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Hn().updateFromJSON(t);
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
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Fh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Hn(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function ix(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Hn(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Hn(e, t) {
  return Ye(new st(e, t));
}
function le(e) {
  return e instanceof st;
}
function Vl(e) {
  return e?.type === st.getType();
}
const qo = "v", zh = 1, sx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class bt extends Le {
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
    return new bt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Kh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ac, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: zh
    };
  }
}
function Kh(e, t, r, n, i, s) {
  return Ye(new bt(e, t, r, n, i, s));
}
function Ue(e) {
  return e instanceof bt;
}
function Bh(e) {
  return e?.type === bt.getType();
}
const ox = "​", qi = ox;
var Ld;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Ld || (Ld = {}));
var Dd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Dd || (Dd = {}));
function ax() {
  return Te(qi);
}
function cx(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(qi, ""));
}
function Js(e) {
  return e.length > 0 && e.includes(qi) && e.replaceAll(qi, "") === "";
}
function Ys(e) {
  return M(e) && Js(e.getTextContent());
}
function jh(e) {
  return HT(e) || tx(e);
}
function Je(e) {
  return qe(e) || Gs(e);
}
function Vh(e, t) {
  return e.find((r) => Je(r) && r.getNumber() === t.toString());
}
function lx(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Je(r));
}
function Lc(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function ux(e) {
  if (!e)
    return;
  if (Je(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Je(t); )
    t = t.getPreviousSibling();
  if (t && Je(t))
    return t;
}
function Bt(e) {
  return we(e, B) ?? void 0;
}
function dx(e) {
  return ve(e) || qe(e) || F(e) || Gs(e) || tr(e) || et(e) || le(e) || B(e) || Ue(e) || Ve(e);
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
function Wh(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function We(e) {
  return ut(e) || ve(e);
}
function ut(e) {
  return le(e) || tr(e);
}
function fx(e) {
  return Vl(e) || ga(e);
}
function $o(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Gn(e, t) {
  const r = ae(t, Wn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function px(e, t) {
  const r = I(e) ? e : e.getParent(), n = I(t) ? t : t.getParent(), i = r && n ? fk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function hx(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function $i(e) {
  return e?.type === Le.getType();
}
function gx(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function mx(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function ze(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function it(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Hh(e, t, r) {
  const n = ze(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Zt(e, t) {
  let r = ze(e);
  return t && (r += `${D}${t}`), r += " ", r;
}
function yx(e) {
  const t = e[Hs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Gh(e) {
  return Yh(e) || $i(e) && yx(e) === "attribute" ? "" : $i(e) && e.text !== D ? e.text : QT(e) ? e.children.map((t) => Gh(t)).join("") : "";
}
function bx(e) {
  return e.map((r) => Gh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function jt(e) {
  return " " + e + D;
}
function Hl(e) {
  const t = [];
  for (const r of e) {
    if (!F(r))
      continue;
    const n = Jh(r);
    n !== er && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Jh(e) {
  return w(e) || br(e) || M(e) && ae(e, fe) === "attribute" ? "" : M(e) ? e.getTextContent() : I(e) ? e.getChildren().map((t) => Jh(t)).join("") : "";
}
function br(e) {
  return zt(e) && e.getTextType() === "marker";
}
function Ot(e) {
  return w(e) || br(e);
}
function Gl(e) {
  if (!e || !Ot(e))
    return !1;
  const t = e.getParent();
  return ve(t) && e.is(t.getFirstChild());
}
function Yh(e) {
  return Yl(e) || Ch(e) && e.textType === "marker";
}
function Ud(e, t) {
  kx(e, t), e.setMarker(t);
}
function kx(e, t) {
  const r = e.getMarker(), n = ze(r), i = ze(r, !0), s = it(r), o = it(r, !0), a = Se.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Ot(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (w(c))
        c.setMarker(t);
      else if (br(c)) {
        const f = l.startsWith(ze("", !0));
        c.setTextContent(d ? ze(t, f) : it(t, f));
      }
    }
  });
}
function He(e, t = nk) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function De(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Xh(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Qh(e) {
  if (!A(e))
    return Fd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !I(t) || e.anchor.type === "text" && !M(t)))
    return t ?? void 0;
  try {
    return Fd(e) ?? t ?? void 0;
  } catch (n) {
    if (Xh(n))
      return t ?? void 0;
    throw n;
  }
}
function Tx(e, t) {
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
function xx(e) {
  return !!e && e.includes("-");
}
function Zh(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Fd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Xs(e) {
  if (!e)
    return !1;
  if (ni(e) || w(e) || br(e) || Fe(e) || zt(e) && e.getTextType() === "attribute")
    return !0;
  if (M(e)) {
    const t = ae(e, fe);
    if (t === Ir || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === D || Js(r))
      return !0;
  }
  return !1;
}
function Qs() {
  const e = Te(D);
  return Et(e, fe, Ir), e.setMode("token"), e;
}
function Cx(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function Dr(e) {
  return M(e) && ae(e, fe) === Ir;
}
function eg(e) {
  const t = e.getFirstChild();
  if (!Ot(t) || t === null || Dr(t.getNextSibling()))
    return !1;
  const r = P();
  if (!A(r) || !r.isCollapsed())
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
    if (!Xs(s)) {
      if (Me(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (M(s) && s.getType() === Le.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function ma(e) {
  let t = e.getParent();
  for (; t && Me(t); )
    t = t.getParent();
  return t;
}
function _x(e, t) {
  return Hi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Sx(e, t) {
  const r = ma(e);
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
function vx(e, t) {
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
function tg(e, t) {
  const r = Hi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Xs(n))
    return tg(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || $o(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || $o(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function Mx(e, t) {
  if (t <= 0)
    return 0;
  const r = Hi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? Ex(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function Ex(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const Ax = 1;
class kr extends Le {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Dn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new kr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || Dn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Dn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Dn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Dn(r.__marker, r.__markerSyntax, t), r;
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
      version: Ax
    };
  }
}
function kt(e, t, r) {
  return Ye(new kr(e, t, void 0, r));
}
function w(e) {
  return e instanceof kr;
}
function Yl(e) {
  return e?.type === kr.getType();
}
function Xr(e) {
  return e.getTextContent() === Dn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Px(e) {
  e.setTextContent(Dn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Dn(e, t, r = !1) {
  return t === "closing" ? it(e, r) : t === "selfClosing" ? it("") : ze(e, r);
}
const Nx = /* @__PURE__ */ new Set(["closed"]);
function Mr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Nx.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function rg(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function ng(e) {
  const t = Object.keys(e).filter((n) => !oT.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function ig(e, t, r, n) {
  return rg(
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
function ks(e) {
  return e.getChildren().find((t) => w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function wx(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : ks(e) === void 0 && sg(e) === void 0;
}
function sg(e) {
  return e.getChildren().find((t) => M(t) && ae(t, fe) === "attribute");
}
function Ps(e, t) {
  return Zs(e.getNextSibling(), t);
}
const Ox = /^[ \u00A0]+$/;
function Xl(e) {
  if (Xr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = ze(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && Ox.test(r.slice(t.length));
}
function Zs(e, t) {
  let r, n, i, s;
  return Fe(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), w(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Xl(e) && (r = e, e = e.getNextSibling()), M(e) && ae(e, fe) === "attribute" && (n = e, e = e.getNextSibling()), w(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Xr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Wr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!w(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (M(n) && n.getTextContent() === jt(e.getCaller()))
    return n;
}
function Ql(e) {
  const t = Wr(e);
  return t ? Zs(t.getNextSibling(), "cat") : {};
}
function Gi(e) {
  const t = e.getFirstChild();
  if (!(!M(t) || w(t)) && ae(t, fe) !== "attribute")
    return t;
}
function Zl(e) {
  const t = Gi(e);
  return t ? Zs(t.getNextSibling(), "ca") : {};
}
function og(e) {
  const t = Gi(e);
  if (!t)
    return;
  const r = Zs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function eu(e) {
  const t = og(e);
  return t ? Zs(t.getNextSibling(), "cp") : {};
}
function ag(e) {
  const t = e.getParent();
  if (!F(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ue(n))
        return n;
      if (!(w(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || M(n) && ae(n, fe) === "attribute" || F(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Fe(n)))
        return;
    }
}
function ya(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Fe(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), w(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Xl(s) && (t = s, s = s.getNextSibling()), M(s) && ae(s, fe) === "attribute" && (r = s, s = s.getNextSibling()), w(s) && s.getMarkerSyntax() === "selfClosing" && Xr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function tu(e) {
  return F(ma(e));
}
function ru(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? tu(t) : t.getChildren().some((i) => F(i) && i.getMarker() === r) ? !0 : void 0;
}
function Rx(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = ru(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Ji(e) {
  return M(e) && e.getType() === Le.getType() && ae(e, fe) !== "attribute";
}
function ba(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !w(t) || !F(r) || !cg(t, r) || !Ji(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function cg(e, t) {
  return e.getMarkerSyntax() === "opening" && ru(e, t) !== void 0;
}
function nu(e, t) {
  if (!cg(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return w(r) ? ru(r, t) === !0 ? "spacer" : void 0 : Ji(r) ? r.getTextContent().startsWith(D) ? void 0 : "prefix" : "spacer";
}
function qx(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (w(t) && nu(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function lg(e, t) {
  const r = P();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function ug(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = nu(t, e);
    if (r !== void 0 && !lg(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        M(n) && n.setTextContent(D + n.getTextContent());
      } else
        t.insertAfter(Te(D));
  });
}
function dg(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && nu(t, e) !== void 0 && lg(t, e)) : !1;
}
const $x = "file", Ix = "src", Lx = "colspan", Dx = "category", Ux = "alt", Fx = "closed", zx = "false";
function Kx(e) {
  return e[Fx] !== zx;
}
function Bx(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === $x ? Ix : t,
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
  const n = r ?? {}, i = Kx(n);
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
        opening: `\\${fg(t, n[Lx])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Mr(Bx(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [Dx]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Mr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [Ux]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Mr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Mr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const Nt = { wantsRun: !1, valueText: void 0 }, Qr = {};
function Za(e, t) {
  if (t === "va")
    return e;
  const r = Ps(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function iu(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed())
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
function ka(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = P();
  if (!A(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function jx(e) {
  return Fe(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : w(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : M(e) && ae(e, fe) === "attribute";
}
function Vx(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!M(e) || ae(e, fe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function ec(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ue(t))
      return t;
    if (!jx(t))
      return;
  }
}
function zd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ue(t),
    ownerOf: (t) => {
      if (Fe(t))
        return t.getRunKind() === e ? ec(t) : void 0;
      const r = t.getParent();
      return Fe(r) ? r.getRunKind() === e ? ec(r) : void 0 : Vx(t) === e ? ec(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ue(t))
        return Nt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Nt : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (t) => Ue(t) ? Ps(Za(t, e), e) : Qr,
    graceSite: (t, r) => Ue(t) ? !r.opener && !r.closer ? iu(Za(t, e)) : ka(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ue(t) ? Za(t, e) : void 0
    }
  };
}
const Wx = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => Nt,
  scanPieces: () => Qr,
  graceSite: (e) => F(e) && dg(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Hx = {
  kind: "char",
  ownerPredicate: (e) => F(e),
  ownerOf: (e) => {
    if (!M(e) || ae(e, fe) !== "attribute")
      return;
    const t = e.getParent();
    return F(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!F(e) || ks(e) === void 0)
      return Nt;
    const t = Mr(e.getUnknownAttributes() ?? {}, pa(e.getMarker()));
    return t === "" ? Nt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => F(e) ? { value: sg(e) } : Qr,
  graceSite: (e, t) => {
    if (!F(e) || t.value)
      return !1;
    const r = ks(e);
    if (!r)
      return !1;
    const n = P();
    if (!A(n) || !n.isCollapsed())
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
    insertRunBefore: (e) => F(e) ? ks(e) : void 0
  }
};
function hg(e) {
  if (w(e))
    return e.getMarker() === "cat";
  if (!M(e) || ae(e, fe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return w(t) && t.getMarker() === "cat";
}
function Gx(e) {
  const t = e.getParent();
  if (!B(t))
    return;
  const r = Wr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!hg(n))
        return;
    }
}
const Jx = {
  kind: "cat",
  ownerPredicate: (e) => B(e),
  ownerOf: (e) => {
    if (Fe(e))
      return e.getRunKind() === "cat" && B(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Fe(t) ? t.getRunKind() === "cat" && B(t.getParent()) ? t.getParent() ?? void 0 : void 0 : hg(e) ? Gx(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!B(e) || e.getIsCollapsed() !== !1)
      return Nt;
    const t = e.getCategory();
    return t === void 0 ? Nt : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => B(e) ? Ql(e) : Qr,
  graceSite: (e, t) => {
    if (!B(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Wr(e);
      return r !== void 0 && iu(r);
    }
    return ka(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => B(e) ? Wr(e) : void 0
  }
};
function Yx(e) {
  return Fe(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : w(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : M(e) && ae(e, fe) === "attribute";
}
function Xx(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!M(e) || ae(e, fe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function Qx(e) {
  const t = e.getParent();
  if (!qe(t))
    return;
  const r = Gi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!Yx(n))
        return;
    }
}
function Kd(e) {
  const t = (r) => qe(r) ? e === "ca" ? Gi(r) : og(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => qe(r),
    ownerOf: (r) => {
      if (Fe(r))
        return r.getRunKind() === e && qe(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Fe(n) ? n.getRunKind() === e && qe(n.getParent()) ? n.getParent() ?? void 0 : void 0 : Xx(r) === e ? Qx(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!qe(r))
        return Nt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Nt : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (r) => qe(r) ? e === "ca" ? Zl(r) : eu(r) : Qr,
    graceSite: (r, n) => {
      if (!qe(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && iu(i);
      }
      return ka(n);
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
  if (w(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return M(e) && ae(e, fe) === "attribute";
}
function Zx(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (et(t)) {
      const r = w(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!gg(t))
      return;
  }
}
const eC = {
  kind: "milestone",
  ownerPredicate: (e) => et(e),
  ownerOf: (e) => {
    const t = Fe(e) ? e.getRunKind() === "milestone" ? e : void 0 : Fe(e.getParent()) ? e.getParent() : gg(e) ? e : void 0;
    if (!t || Fe(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Fe(t) ? et(r) ? r : void 0 : Zx(t);
  },
  expectedPieces: (e) => {
    if (!et(e))
      return Nt;
    const t = ig(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Mr(t, ha(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : D + r };
  },
  scanPieces: (e) => {
    if (!et(e))
      return Qr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ya(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!et(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = P();
      if (!A(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return ka(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => et(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, tC = pg("optbreak", void 0, void 0).opening, rC = {
  kind: "optbreak",
  ownerPredicate: (e) => Ve(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ve(t) || t.getTag() !== "optbreak"))
      return M(e) || zt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: tC }),
  scanPieces: (e) => Ve(e) ? { value: e.getFirstChild() ?? void 0 } : Qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, nC = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Ve(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => Nt,
  scanPieces: () => Qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, iC = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => Nt,
  scanPieces: () => Qr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ns = [
  Wx,
  Hx,
  zd("va"),
  zd("vp"),
  Jx,
  Kd("ca"),
  Kd("cp"),
  eC,
  rC,
  nC,
  iC
], sC = new Map(Ns.map((e) => [e.kind, e]));
function Jn(e) {
  const t = sC.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Yn(e) {
  for (const t of Ns) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function mg(e) {
  return Yn(e) !== void 0;
}
const Io = "unmatched", yg = 2;
function Ts(e) {
  return `\\${e}`;
}
class Zr extends Le {
  __marker;
  constructor(t = "", r) {
    super(Ts(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Zr(r, n);
  }
  static importDOM() {
    return {
      [Io]: (t) => aC(t) ? {
        conversion: oC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return su().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Ts(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Ts(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Sd), r.title = Bd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Bd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Io);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Sd), t.textContent = this.getTextContent(), { element: t };
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
  return e.getTextContent() === Ts(e.getMarker());
}
function Bd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function oC(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: su(t) };
}
function su(e) {
  return Ye(new Zr(e));
}
function aC(e) {
  return e?.tagName.toLowerCase() === Io;
}
function en(e) {
  return e instanceof Zr;
}
const kg = "table", Dc = "immutable-table", Tg = 1, cC = ["type", "marker", "content"];
class ai extends yr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Dc;
  }
  static clone(t) {
    return new ai(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return lC().updateFromJSON(t);
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
      type: Dc,
      ...t !== void 0 && { unknownAttributes: t },
      version: Tg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function lC(e) {
  return Ye(new ai(e));
}
function xg(e) {
  return e instanceof ai;
}
function uC(e) {
  return e?.type === Dc;
}
const Cg = "table:row", jd = "immutable-table-row", _g = 1, Uc = "tr", dC = ["type", "marker", "content"];
class Yi extends yr {
  __marker;
  __unknownAttributes;
  constructor(t = Uc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return jd;
  }
  static clone(t) {
    return new Yi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return fC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Uc).setUnknownAttributes(t.unknownAttributes);
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
      type: jd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: _g
    };
  }
}
function fC(e, t) {
  return Ye(new Yi(e, t));
}
const Sg = "table:cell", Vd = "immutable-table-cell", vg = 1, Fc = "tc1", pC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function hC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Xi extends yr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Fc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Vd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Xi(r, n, i, s, o);
  }
  static importJSON(t) {
    return gC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Fc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = hC(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Vd,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: vg
    };
  }
}
function gC(e, t, r, n) {
  return Ye(new Xi(e, t, r, n));
}
function eo(e, t) {
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function rr(e, t) {
  const r = eo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function ws(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function mC(e) {
  return e.getChildren().some((t) => w(t) && t.getMarkerSyntax() === "closing");
}
function yC(e) {
  return ws(e) ? void 0 : { closed: "false" };
}
function bC(e, t, r, n) {
  const i = t.getMarker(), s = tu(t), o = mC(t);
  if (n) {
    e.append(kt(i, "opening", s));
    const [a] = r;
    Ji(a) && !a.getTextContent().startsWith(D) && a.setTextContent(D + a.getTextContent());
  }
  e.append(...r), o && e.append(kt(i, "closing", s));
}
function Xn(e) {
  return we(e, F) ?? void 0;
}
function kC(e) {
  let t = e.getParent();
  for (; F(t); )
    t = t.getParent();
  return t;
}
function zc(e) {
  const t = Mg(e);
  return e.getChildren().every((r) => w(r) || t && ae(r, fe) === "attribute" || M(r) && r.getTextContent().replaceAll(D, "") === "");
}
function Mg(e) {
  return ws(e);
}
function TC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Mr(r, pa(e.getMarker())) : "";
  n !== "" && t.insertAfter(Te(n)), e.remove();
}
function xC(e, t) {
  if (ws(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(kt(e.getMarker(), "closing", tu(e)));
}
function CC(e, t) {
  return F(e) && !ws(e) && !ws(t);
}
function _C(e, t, r) {
  zc(e) && e.getChildren().forEach((i) => {
    w(i) || i.remove();
  });
  const [n] = t;
  r && Ji(n) && !n.getTextContent().startsWith(D) && n.setTextContent(D + n.getTextContent()), e.append(...t);
}
function SC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Mg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = w(l) && l.getMarkerSyntax() === "closing", f = s && ae(l, fe) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = CC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      _C(e, o, n);
    else {
      const l = Vr(t.getMarker(), yC(t));
      bC(l, t, o, n), e.insertAfter(l), zc(l) ? l.remove() : c = l;
    }
  i && !a && xC(t, n), zc(t) && TC(t, c);
}
function Ii(e, t) {
  let r = e.getParent();
  for (; F(r); )
    SC(e, r, t), r = e.getParent();
}
function Ta(e) {
  if (M(e) && !w(e)) {
    const t = ba(e);
    e.select(t, t);
    return;
  }
  if (I(e)) {
    const t = e.getChildren().find((r) => !w(r));
    if (t) {
      Ta(t);
      return;
    }
    e.selectEnd();
  }
}
const Ai = /* @__PURE__ */ new WeakMap();
function vC(e, t) {
  return Ai.set(e, t), () => {
    Ai.get(e) === t && Ai.delete(e);
  };
}
function Wd(e) {
  return Ai.get(e);
}
function MC(e) {
  return Ai.get(_n())?.has(e.getKey()) ?? !1;
}
function EC(e) {
  Ai.get(_n())?.add(e.getKey());
}
function AC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Kc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Hd(e) {
  return /^\s/.test(e);
}
function ou(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Hd(t) || !Hd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function xa(e, t, r) {
  return r.wantsRun ? ou(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : AC(t);
}
function PC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return ou(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Eg(e, t) {
  return !Kc(e.scanPieces(t));
}
function to(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!xa(e, n, r))
    return !1;
  const i = P();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || $o(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function NC(e, t, r, n) {
  return !r.wantsRun || Kc(n) || pk(vs) ? !1 : _n().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Kc(e.scanPieces(i));
  });
}
function wC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Gd(e) {
  const t = Te(e);
  return Et(t, fe, "attribute"), t;
}
function OC(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Ah(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function RC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    M(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Gd(n.valueText));
    return;
  }
  const l = OC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = kt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : M(u) ? ou(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Gd(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(kt(a === "selfClosing" ? "" : o(t), a));
}
function Os(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (xa(e, i, n) && !MC(t)) {
    if (NC(e, t, n, i)) {
      EC(t);
      return;
    }
    if (!to(e, t)) {
      if (!n.wantsRun) {
        wC(i);
        return;
      }
      RC(e, t, i, n);
    }
  }
}
function qC(e, t, r) {
  Os(e, t), t.isAttached() && to(e, t) && r.add(t.getKey());
}
function ro(e) {
  if (!M(e))
    return !1;
  if (w(e) || Ue(e) || en(e))
    return !0;
  const t = ae(e, fe);
  return t === "attribute" || t === Ir;
}
function au(e, t) {
  return w(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Xr(e) && F(e.getParent())) : !1;
}
function $C() {
  const e = P();
  return A(e) ? au(e.focus.getNode(), e.focus.offset) : !1;
}
function Ag(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return M(t) && ro(t) ? t : void 0;
}
function IC(e) {
  const t = Ag(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function LC(e) {
  const t = Ag(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Jd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Yd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function DC(e, t) {
  let r = LC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!M(n))
      return;
    if (!ro(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Xd(e, t) {
  const r = DC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function cu(e) {
  if (e.isCollapsed()) {
    const a = IC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Jd(r), Jd(n)], s = Xd(r, "next"), o = Xd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Yd(r, i[0]), Yd(n, i[1]), !1) : !0;
}
const Lo = "verse-block", Pg = 1, UC = "verse-block";
class Qi extends yr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Lo;
  }
  static clone(t) {
    return new Qi(t.__number, t.__key);
  }
  static importJSON(t) {
    return FC().updateFromJSON(t);
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
    return Zh(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(UC), Qd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Qd(r, this.__number), !1;
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
      type: Lo,
      number: this.getNumber(),
      version: Pg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Qd(e, t) {
  const { start: r, end: n } = Zh(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Zd(e, "data-verse-start", i ? r : NaN), Zd(e, "data-verse-end", i ? n : NaN);
}
function Zd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function FC(e) {
  return Ye(new Qi(e));
}
function Rs(e) {
  return e instanceof Qi;
}
function zC(e) {
  return e?.type === Lo;
}
const KC = [
  Kt,
  Lr,
  Wt,
  bt,
  Se,
  Oe,
  gr,
  kr,
  oi,
  Jr,
  Zr,
  st,
  Or,
  ai,
  Yi,
  Xi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Yr,
  {
    replace: El,
    with: () => Qt(),
    withKlass: Or
  }
], Li = {
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
}, BC = {
  paragraph: T.Paragraph,
  character: T.Character,
  note: T.Note,
  milestone: T.Milestone
};
function lu(e) {
  if (!e)
    return Nr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: Nr(r)?.category ?? x.Uncategorized,
      type: BC[n.styleType] ?? T.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: Nr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function ef(e, t, r) {
  const n = {
    type: pr,
    version: fr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return ga(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Ng = "v", wg = 1, jC = "verse-selected";
class Rt extends Ws {
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
    return new Rt(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => HC(t) ? {
        conversion: WC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return uu().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ac, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ac, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Zt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Po + this.getNumber() + Po
    );
    return E(VC, { nodeKey: this.getKey(), text: t });
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
      if (Xh(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function VC({ nodeKey: e, text: t }) {
  const [r] = Pk(e);
  return E("span", { className: r ? jC : void 0, children: t });
}
function WC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: uu(t) };
}
function uu(e, t, r, n, i, s) {
  return Ye(new Rt(e, t, r, n, i, s));
}
function HC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Ng;
}
function ci(e) {
  return e instanceof Rt;
}
function GC(e) {
  return e?.type === Rt.getType();
}
function ke(e) {
  return Ue(e) || ci(e);
}
function Og(e) {
  return Bh(e) || GC(e);
}
function JC(e) {
  return YC(e).find((t) => le(t));
}
function YC(e) {
  return e.some(Rs) ? e.flatMap((t) => Rs(t) ? t.getChildren() : t) : e;
}
function Ca(e) {
  return I(e) ? Rs(e) ? e.getChildren().flatMap(Ca) : e.getChildren() : [];
}
function XC(e, t) {
  return Ca(e).find((i) => ke(i) && Jl(t, i.getNumber()));
}
function QC(e, t) {
  return t === 0 ? JC(e) : e.map((r) => XC(r, t)).filter((r) => r)[0];
}
function Do(e) {
  return Ca(e).find((r) => ke(r));
}
function Rg(e, t) {
  if (!I(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ke(i))
      return i;
  }
}
function ZC(e) {
  const t = e.getParent();
  if (t && I(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ke(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Je(r); ) {
    const n = Do(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Uo(e) {
  return Ca(e).findLast((t) => ke(t));
}
function e_(e) {
  if (!Ue(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function t_(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && I(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function r_(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return t_(t, e, r);
  if (M(e)) {
    const n = e_(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function tc(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function n_(e) {
  const t = Lc(e);
  if (!(!t || Je(t)))
    return ke(t) ? t : Uo(t) ?? pu(t);
}
function i_(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!A(t))
    return tc(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (r_(e, t)) {
    const i = n_(e);
    return i ? tc(i) : { verseNum: n };
  }
  return tc(e);
}
function s_(e) {
  return dx(e) || ci(e);
}
function du(e) {
  if (M(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(D) && e.setTextContent(`${t} `);
  }
}
function qg(e) {
  if (M(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Bc(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function o_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = fu(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && I(i) && I(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && I(i)) {
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
      let s = tf(i);
      for (; s && !Je(s); ) {
        const o = Do(s);
        if (o) {
          n = o;
          break;
        }
        s = tf(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Do(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Je(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function a_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = fu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && I(i) && (n = Rg(i, r.getIndexWithinParent())), !n && i) {
      let o = rf(i);
      for (; o && !Je(o); ) {
        const a = Uo(o);
        if (a) {
          n = a;
          break;
        }
        o = rf(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Je(s); ) {
      const o = Uo(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function tf(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function rf(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function fu(e, t) {
  if (I(e) && A(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ke(n))
      return n;
    const i = Rg(e, t.anchor.offset);
    if (i)
      return i;
    const s = Do(e);
    if (s)
      return s;
  }
  return pu(e);
}
function pu(e) {
  if (!e || Je(e))
    return;
  if (ke(e))
    return e;
  let t = Lc(e);
  for (; t; ) {
    if (Je(t))
      return;
    if (ke(t))
      return t;
    const r = Uo(t);
    if (r)
      return r;
    t = Lc(t);
  }
}
const c_ = ["style"], l_ = ["style", "code"], Fo = ["style", "cid"], u_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], d_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], f_ = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], p_ = ["style", "caller", "category", "contents"], h_ = ["tag", "marker", "contents"], g_ = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], qs = `
`;
function m_(e, t) {
  const r = se(e);
  if (!Vt(r))
    return;
  const n = hu(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function hu(e, t = "delta-doc") {
  if (!e)
    return;
  const r = fa();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Di(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Di(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Hr(l) || Vt(l))
        return n;
      We(l) && (a = l);
    }
    if (We(l) && (i.includes(l) || i.push(l)), $g(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += gu(l, t);
  }
  if (a)
    return n;
}
function nf(e, t, r = "delta-doc") {
  if (e.length < 2 || !k_(e[0]) || !b_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => y_(n, r)?.getKey());
}
function y_(e, t = "delta-doc") {
  const r = fa();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Di(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Di(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (We(a) && (i.includes(a) || i.push(a)), $g(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = gu(a, t);
    if (Hr(a) && l > 0 && e >= n && e < n + l || Vt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Di(e, t) {
  return e ? t ? !$o(t.node, e.getKey()) : !0 : !1;
}
function Hr(e) {
  return M(e) && !Vt(e);
}
function Vt(e) {
  return Je(e) || ke(e) || et(e) || B(e) || Ve(e) || en(e);
}
function dn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function b_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && g_.includes(t);
}
function k_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function $g(e, t) {
  return B(e) || Ve(e) ? !0 : t === "apply" && I(e) && Vt(e);
}
function Ig(e) {
  const t = e.getParent();
  return Ot(e) && le(t) && t.getFirstChild() === e;
}
function jc(e) {
  const t = e.getParent();
  return t !== null && we(t, Fe) !== null;
}
function T_(e) {
  const t = e.getParent();
  return F(t) && e.getTextContent() === er && t.getChildrenSize() === 1;
}
function x_(e) {
  const t = e.getParent();
  if (!B(t))
    return !1;
  const r = e.getPreviousSibling();
  return w(r) && r === t.getFirstChild() && e.getTextContent() === jt(t.getCaller());
}
function C_(e) {
  return !mg(e) && gu(e, "delta-doc") === e.getTextContentSize();
}
function gu(e, t) {
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
    (Ys(e) || Ig(e) || ae(e, fe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ae(e, fe) === "attribute" || jc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith($l) || T_(e) || x_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Vc(e, t) {
  const r = { insert: e.__text }, n = ae(e, gn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Lg(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function sf(e) {
  const t = new gs();
  return e.isEmpty() || e.read(() => {
    const r = Ke();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && tr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = __();
    for (const s of i)
      t.push(s);
  }), t;
}
function _a(e, t) {
  const r = [], n = si(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...of(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...of(c, n.length, n, i, s, o, a));
  return r;
}
function __() {
  return _a();
}
function of(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return S_(e, a, n), v_(e, a, i, s, o), M_(e, t, r, i, o, s, a), Je(e) && a.push(N_(e)), ke(e) && a.push(O_(e)), et(e) && a.push(R_(e)), en(e) && a.push(q_(e)), A_(e, a, s), E_(e, a, s), D_(c, s), a;
}
function S_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ve(n) ? t.push(P_(n)) : le(n) ? t.push(w_(n)) : tr(n) && t.push({ insert: qs });
  }
  We(e) && (r.includes(e) || r.push(e));
}
function v_(e, t, r, n, i) {
  if (!M(e) || Ue(e) || en(e))
    return;
  const s = e.getParent();
  if (B(s) && s.getFirstChild() === e)
    return;
  const o = Bt(e) !== void 0;
  if (w(e) && (o || Ig(e) || jc(e) || mg(e)) || ae(e, fe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Js(a))
    return;
  const c = e.getPreviousSibling();
  if (B(s) && w(c) && c === s.getFirstChild() && a === jt(s.getCaller()))
    return;
  const l = F(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(ba(e)));
  const d = a.startsWith($l) || ae(e, fe) === "attribute" || jc(e), u = !!l && a === er && l.getChildrenSize() === 1, f = Sa(e, n), p = f ? r.filter((g) => f.children.includes(g)) : r, y = Vc(e, p);
  if (y.insert = a, f) {
    if (!a || a === D || d)
      return;
    f.contentsOps?.push(y);
  } else
    u || d || t.push(y);
  const h = a !== "" && !u && !(d && l);
  if (r.length > 0 && h)
    for (const g of r)
      i.add(g);
}
function M_(e, t, r, n, i, s, o) {
  F(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Di(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = I_(c), d = Sa(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function E_(e, t, r) {
  if (!B(e))
    return;
  const n = $_(e), i = Sa(e, r), s = {
    node: e,
    children: si(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function A_(e, t, r) {
  if (!Ve(e))
    return;
  const n = L_(e), i = Sa(e, r), s = {
    node: e,
    children: si(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Sn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function P_(e) {
  const t = { style: As, code: e.__code };
  return Sn(t, e), { insert: qs, attributes: { book: t } };
}
function N_(e) {
  const t = { style: Ro, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Sn(t, e), { insert: { chapter: t } };
}
function w_(e) {
  const t = { style: e.__marker };
  return Sn(t, e), { insert: qs, attributes: { para: t } };
}
function O_(e) {
  const t = { style: qo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Sn(t, e), { insert: { verse: t } };
}
function R_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Sn(t, e), { insert: { milestone: t } };
}
function q_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function $_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Sn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ae(e, gn);
  return n && (r.attributes = { segment: n }), r;
}
function I_(e) {
  const t = { insert: "" }, r = Lg([e]);
  return r && (t.attributes = { char: r }), t;
}
function L_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Sn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Sa(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function D_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Di(t[r].node, e) && t.splice(r, 1);
}
function Lg(e) {
  if (e.length === 0)
    return;
  const t = e.map(U_);
  return t.length === 1 ? t[0] : t;
}
function U_(e) {
  const t = { style: e.__marker }, r = ae(e, Wn);
  return r && (t.cid = r), Sn(t, e), t;
}
function mu(e) {
  let t = 0;
  for (const { node: r } of fa())
    if (B(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function F_(e) {
  let t = 0;
  for (const { node: r } of fa())
    if (B(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const Dg = 1;
class dr extends Ws {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Ss, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new dr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => K_(t) ? {
        conversion: z_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return yu().updateFromJSON(t);
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
    return r && ri(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => B_(t, n), (l) => j_(t, n, s, l), () => V_(t, n), () => W_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return E("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Ss && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === uh && i ? (
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
function z_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: yu(t, r) };
}
function yu(e, t, r) {
  return Ye(new dr(e, t, r));
}
function K_(e) {
  return e ? e.classList.contains(dr.getType()) : !1;
}
function Tt(e) {
  return e instanceof dr;
}
function B_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!B(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function j_(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!B(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!Tt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function V_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!B(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return _a(r);
  });
}
function W_(e, t) {
  return e.getEditorState().read(() => mu(t));
}
const H_ = [
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
], G_ = ["†"];
function va(e) {
  if (Ug())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = af(t), [s, o] = af(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = cf(n, i), [s, o] = cf(s, o);
  const a = Bn();
  return a.anchor = ur(n.getKey(), i, lf(n)), a.focus = ur(s.getKey(), o, lf(s)), a;
}
function bu() {
  if (Ug())
    return;
  const e = P();
  if (!e || !A(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = zo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = zo(i, s);
  return { start: n, end: o };
}
function af(e) {
  if (ik(e)) {
    const t = Fp(e.jsonPath);
    let r = Ke();
    for (let n = 0; n < t.length; n++) {
      if (!r || !I(r))
        return [void 0, void 0];
      const i = Hi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : vx(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && I(r) ? [r, Mx(r, e.offset)] : [void 0, void 0];
  }
  if (sk(e) || ok(e)) {
    const t = cs(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (I(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && I(r) ? [r, 0] : [void 0, void 0];
  }
  if (ak(e)) {
    const t = cs(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (I(t)) {
      const n = t.getLastChild();
      if (n && M(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && I(r) ? [r, 0] : [void 0, void 0];
  }
  if (ck(e)) {
    const t = cs(e.jsonPath);
    if (!t || !I(t))
      return [void 0, void 0];
    const r = rc(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && M(n) ? [n, 0] : [void 0, void 0];
  }
  if (lk(e)) {
    const t = cs(e.jsonPath);
    if (!t || !I(t))
      return [void 0, void 0];
    const r = rc(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && M(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (uk(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = cs(e.jsonPath);
    if (!n || !I(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = rc(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && M(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${dk(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function cf(e, t) {
  if (!br(e))
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
function lf(e) {
  return I(e) ? "element" : "text";
}
function rc(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (w(n) && n.getMarkerSyntax() === t || t === "closing" && w(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (br(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function cs(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Fp(r);
  let i = Ke();
  for (const s of n) {
    if (!i || !I(i))
      return;
    const o = Hi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function zo(e, t) {
  if (w(e)) {
    const r = e.getMarkerSyntax(), n = J_(e), i = n ? On(In(n)) : On(In(e));
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
  if (Me(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (M(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return zo(n, s);
    }
    const i = ma(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return zo(i, o);
    }
  }
  if (I(e)) {
    const r = e.getChildAtIndex(t);
    if (br(r)) {
      const i = r.getTextContent().endsWith("*"), s = On(In(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = tg(e, t);
    return n.type === "text" ? {
      jsonPath: On([...In(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: On(In(e)),
      offset: n.index
    };
  }
  if (M(e)) {
    const r = Sx(e, t);
    if (r)
      return {
        jsonPath: On([
          ...In(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: On(In(e)), offset: t };
}
function J_(e) {
  const t = e.getParent();
  if (!t || !I(t))
    return;
  const r = Y_(e);
  return r && !We(r) && !M(r) && !Me(r) ? r : t;
}
function Y_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Xs(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function In(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = ma(r);
    if (!n)
      break;
    const i = _x(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Ug() {
  for (let e = Ke().getFirstChild(); e; e = e.getNextSibling())
    if (Rs(e))
      return !0;
  return !1;
}
function X_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Fg(e, t, r, n, i, s, o) {
  if (!Oe.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? va(r) : P();
  if (!A(a))
    return;
  const c = eS(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? X_(e, s), d = zg(e, l, c, i, s, void 0, void 0);
  return Z_(d, a, i), d;
}
function ku(e) {
  return e !== "expanded";
}
function Q_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!M(r) || !F(r.getParent()))
    return;
  if (w(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return w(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function Z_(e, t, r) {
  const n = ku(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || hx(t), cu(t);
  const i = Q_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(F)?.selectEnd();
}
function bi(e, t, r) {
  const n = Vr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(kt(e)) : r?.markerMode === "visible" && n.append(jr("marker", ze(e)));
  const s = t === "" ? er : i ? D + t : t;
  return n.append(Te(s)), n;
}
function eS(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(bi("fr", f, n)), !e.isCollapsed()) {
        const p = df(e);
        p.length > 0 && o.push(bi("fq", p, n));
      }
      o.push(bi("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(bi("xo", f, n)), !e.isCollapsed()) {
        const p = df(e);
        p.length > 0 && o.push(bi("xq", p, n));
      }
      o.push(bi("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function zg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : ku(n?.noteMode), l = Ul(e, t, c);
  s && Et(l, gn, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = kt(e), d && u.setMode("token"), a || (f = kt(e, "closing"))) : n?.markerMode === "visible" && (u = jr("marker", ze(e) + " "), a || (f = jr("marker", it(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    p = Te(jt(l.__caller)), d && p.setMode("token"), l.append(p, ...r);
  else {
    const y = () => Qs(), h = r.flatMap(cS(y));
    if (t === "")
      l.append(...h);
    else {
      const g = Hl(r);
      let b = () => {
      };
      i?.noteCallerOnClick && (b = i.noteCallerOnClick), p = yu(l.__caller, g, b), l.append(p, y(), ...h);
    }
  }
  return f && l.append(f), l;
}
function vr(e) {
  if (typeof e == "string") {
    const t = se(e);
    return B(t) ? t : void 0;
  }
  return F_(e);
}
function Wc(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (ci(n) || !n) {
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
      tS(i);
    else {
      const s = Tu(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function Tu(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return w(r) && r.getMarkerSyntax() === "closing" || br(r) && r.getTextContent() === it(e.getMarker()) ? t : -1;
}
function tS(e) {
  const t = Tu(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  M(r) && !Xs(r) ? r.selectEnd() : e.select(t, t);
}
function Kg(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (M(r) && !ro(r)) {
    r.select(0, 0);
    return;
  }
  const n = e.getParent();
  if (!n)
    return;
  const i = e.getIndexWithinParent() + 1;
  n.canBeEmpty() ? n.select(i, i) : xu(n, i, { announce: !t });
}
function xu(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!B(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Bn();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Br(i), r && _n().dispatchCommand(Ft, void 0);
}
function uf(e, t, r) {
  const n = Wr(e), i = rS(e, n);
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
function rS(e, t) {
  const r = [];
  for (const { node: n } of si(e))
    !M(n) || we(n, Fe) || (Cu(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: ba(n) }) : nS(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function nS(e, t) {
  return en(e) ? !0 : w(e) && !t.is(e.getParent());
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
    const i = n.getPreviousSibling(), s = I(i) ? i.getLastDescendant() : i;
    if (M(s) && (t?.is(s) || Cu(s, t)))
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
      return iS(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function iS(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function sS(e, t, r) {
  const { opener: n, value: i, closer: s } = Ql(e);
  if (!i)
    return !1;
  const o = oS(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = Wr(e);
    if (jg(c, t, r, Bg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function oS(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function Cu(e, t) {
  return !M(e) || Xs(e) || ro(e) ? !1 : !t || !e.is(t);
}
function aS(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(F))
    return;
  const t = Wr(e);
  for (const { node: n } of si(e))
    if (Cu(n, t))
      return;
  const r = Tu(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function cS(e) {
  return (t) => zt(t) ? [t] : [t, e()];
}
function lS(e) {
  const t = e.getParent();
  return t !== null && we(t, B) !== null;
}
function df(e) {
  if (!A(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Al(e);
  let a = "";
  for (const c of t)
    if (!(B(c) || Tt(c) || lS(c)) && !w(c) && !en(c) && ae(c, fe) !== "attribute") {
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
const _u = [
  dr,
  Rt,
  ...KC
], uS = [
  Qi,
  ..._u
], dS = Cn((e, t) => {
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
function fS() {
  const [e, t] = me(void 0), [r, n] = me(), i = X(null), s = xe((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Uk(l, c, () => {
      Fk(l, c, {
        placement: "bottom-start",
        middleware: [zk(), Kk()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = xe(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function pS({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = fS();
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
const hS = Qb(dS);
function Vg({ isOpen: e = !1, children: t }) {
  const r = X(null), { coords: n, placement: i } = pS({ isOpen: e, floatingBoxRef: r }), s = Ge(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Fn(
    E(hS, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Wg = Dp(void 0);
function Su() {
  const e = Up(Wg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function gS(e, t) {
  const [r, n] = me(0), [i, s] = me(-1), o = Ge(() => e ?? [], [e]), a = {
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
function mS({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = gS(t, r);
  return E(Wg.Provider, { value: i, children: E("div", { ...n, children: e }) });
}
const Hg = Cn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Su(), d = xe((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = xe((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return E("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function yS({ children: e, autoIndex: t = !0, ...r }) {
  const n = X(null), { state: { activeIndex: i, menuItems: s } } = Su(), o = Ge(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ge(() => {
    const c = o(s);
    return t ? Zb.map(c, (l, d) => ek(l) && l.type === Hg && l.props.index === void 0 ? tk(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return j(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), E("div", { ref: n, role: "menu", ...r, children: a });
}
const bS = (e, t, r) => Co(e, r).toLowerCase().includes(t.toLowerCase()), ff = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Co = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function kS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? ff(r[0]) : "") : (d = n || (r.length > 0 ? ff(r[0]) : ""), u = (y, h) => bS(y, h, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((y) => {
    try {
      return u(y, t);
    } catch (h) {
      return console.warn("Error filtering item:", y, h), !1;
    }
  }).sort((y, h) => {
    const g = (_) => (p.has(_) || p.set(_, Co(_, f).toLowerCase()), p.get(_) ?? ""), b = a ? Co(y, f) : g(y), k = a ? Co(h, f) : g(h);
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
          const v = b.indexOf(l), C = k.indexOf(l);
          if (v !== -1 && C === -1)
            return -1;
          if (C !== -1 && v === -1)
            return 1;
          if (v !== -1 && C !== -1)
            return v - C;
          break;
        }
      }
    return b.localeCompare(k);
  });
}
const nc = {
  Root: mS,
  Options: yS,
  Option: Hg
};
function TS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ge(() => kS({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function xS() {
  const { moveUp: e, moveDown: t, select: r } = Su();
  return Ge(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const CS = () => {
  const e = xS(), [t] = ue();
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
    return t.registerCommand($r, r, Pe);
  }, [t, e]);
};
function _S() {
  return CS(), null;
}
const SS = ["Shift", "Control", "Alt", "Meta"];
function Gg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ue(), d = s !== void 0, [u, f] = me(""), p = d ? s ?? "" : u, y = TS({ query: p, items: t, filterBy: "name" }), h = (g) => {
    n?.(), r ? r(g) : g.action(l);
  };
  return j(() => {
    a?.(p, y);
  }, [a, p, y]), j(() => l.registerCommand($r, (g) => {
    if (d || c?.includes(g.key) || SS.includes(g.key))
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
  }, Pe), [l, d, p, o, n, c]), Ne(nc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: y, onSelectOption: (g) => h(g), children: [!d && E("input", { value: p, type: "text", disabled: !0 }), E(_S, {}), E(nc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (g) => g.map((k, _) => Ne(nc.Option, { index: _, children: [E("span", { className: "label", children: k.label ?? k.name }), E("span", { className: "description", children: k.description })] }, k.name)) })] });
}
function vS({ trigger: e, items: t }) {
  const [r] = ue(), [n, i] = me(!1), s = xe((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = P();
      if (A(l))
        return l;
    });
    a.read(() => {
      const l = P();
      !A(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && E(Vg, { isOpen: n, children: ({ placement: o }) => E(Gg, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function MS({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Ge(() => {
    if (!t || !e)
      return;
    const i = Nr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = Nr(o), { action: c } = r(o, a);
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
function ES(e, t) {
  j(() => {
    if (!e.hasNodes([lt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return $e(rh(e, lt, (n) => Es(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], y = a[l]?.[u], h = c[l]?.[u];
          i.addID(l, u, f, p, y, h);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(lt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = se(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Me(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!lt.isReservedType(c))
              for (const d of l) {
                let u = t.get(xs(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(xs(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(xs(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const AS = Cn(function({ logger: t }, r) {
  const [n] = ue(), i = Ge(() => /* @__PURE__ */ new Map(), []);
  ES(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(xs(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = se(d);
        Me(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && Oo(u));
      }
  };
  return aa(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (lt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = va(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), vh(p, a, c, l, d, u, f);
      }, { tag: Pc });
    },
    removeAnnotation(o, a) {
      if (lt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(xs(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Pc });
    }
  })), null;
}), PS = [];
function NS({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = PS, onChange: n }) {
  const [i] = ue();
  return Vs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(Pl) && !d.has(fh) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = wS(i, s);
        u.length !== 0 && n(o, i, d, u, l);
      });
  }, [i, e, t, r, n]), null;
}
function wS(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new gs();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && Bt(s) !== void 0;
    if (t.size === 1 && M(s) && !o && C_(s)) {
      const a = hu(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = se(i);
          return new gs([M(u) ? Vc(u) : { insert: "" }]);
        }), l = new gs([Vc(s)]), d = new gs(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = sf(r), c = sf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const vu = "formatted", Jg = "unformatted", Yg = "paragraph-structure", Mu = "standard", Xg = "block-verse", OS = {
  [vu]: "Formatted",
  [Jg]: "Unformatted",
  [Yg]: "Paragraph Structure",
  [Mu]: "Standard",
  [Xg]: "Block Verse"
};
function vn(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Eu, Au;
function RS(e) {
  const t = Pu(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Eu = e, Au = t;
}
RS(vu);
const Mw = () => Eu, Ui = () => Au;
function Pu(e) {
  let t;
  switch (e ?? Eu) {
    case vu:
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
    case Mu:
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
function Ew(e) {
  if (!e)
    return;
  const t = pf(e);
  return Object.keys(OS).find((r) => Dt(pf(Pu(r)), t));
}
const qS = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function pf(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...qS, ...t };
}
function no(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function $S(e) {
  if (e)
    return $s(e) ? Rt : e.markerMode === "editable" ? bt : Rt;
}
function $s(e) {
  return e?.verseLayout === "block";
}
function IS(e) {
  const t = [], r = e ?? Au;
  return r && (t.push(`${rT}${r.markerMode}`), r.hasSpacing && t.push(eT), r.isFormattedFont && t.push(tT)), t;
}
function LS(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += DS(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), FS(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += zS(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), BS(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function DS(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), US(t, e.retain, e.attributes, r, n)), e.retain);
}
function US(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ke();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Hr(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, y = Math.min(s, p);
        if (y > 0) {
          let h = d;
          const g = f > 0, b = y < u - f;
          if (g && b) {
            const [, k] = d.splitText(f);
            [h] = k.splitText(y);
          } else g ? [, h] = d.splitText(f) : b && ([h] = d.splitText(y));
          if (mn(r)) {
            const k = h.getParent();
            if (F(k)) {
              const _ = r.char;
              let v;
              Array.isArray(_) ? a >= 0 && a <= _.length - 1 && (v = _[a]) : a === 0 && (v = _);
              const C = v ? Gn(v, k) : !1;
              if (C && Array.isArray(_) && _.length > 1) {
                const $ = Te("");
                h.replace($);
                const N = typeof r.segment == "string" ? r.segment : void 0, z = Zi(_.slice(1), n, h, N);
                let K = $;
                for (const ne of z)
                  K.insertAfter(ne), K = ne;
                $.remove(), Ht(r, h);
              } else if (C)
                Ht(r, h);
              else {
                h.remove();
                const $ = hf(h, r, n, i);
                if ($ && $.length > 0) {
                  let N = k;
                  for (const z of $)
                    N.insertAfter(z), N = z;
                }
              }
            } else {
              const _ = Te("");
              h.replace(_);
              const v = hf(h, r, n, i);
              if (v && v.length > 0) {
                let C = _;
                for (const $ of v)
                  C.insertAfter($), C = $;
                _.remove();
              } else
                _.replace(h);
            }
          } else
            Ht(r, h);
          s -= y;
        }
      }
      o += u;
    } else if (Vt(d))
      e <= o && o < e + t && s > 0 && (gf(d, r), s -= 1), o += 1;
    else if (F(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (mn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Hc(d, p.style), typeof p.cid == "string" && Et(d, Wn, () => p.cid);
            const y = He(p, Fo);
            y && Object.keys(y).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...y
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || QS(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && Ec(d), !0;
        }
      }
      u && Ec(d), a -= 1;
    } else if (We(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!tr(d))
          gf(d, r);
        else if (Nu(r)) {
          const p = em(r.para, n);
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
function hf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Zi(t.char, r, e, i), o = s.find(F);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Ht(t, e);
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Ht(t, e), s;
}
function Qg(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  w(r) ? (r.setMarker(t), r.setTextContent(ze(t))) : zt(r) && r.getTextType() === "marker" && r.setTextContent(ze(t) + D);
}
function Hc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    w(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = F(e.getParent()), i = e.getFirstChild();
  zt(i) && i.getTextType() === "marker" && i.getTextContent() === ze(r, n) && i.setTextContent(ze(t, n));
  const s = e.getLastChild();
  zt(s) && s.getTextType() === "marker" && s.getTextContent() === it(r, n) && s.setTextContent(it(t, n));
}
function gf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && F(e) && mn(t)) {
      const i = Gc(n);
      if (Hc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Et(e, Wn, () => o);
      }
      const s = He(i, Fo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Je(e) || ke(e) || et(e) || B(e) || Ve(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ve(e) || le(e) || F(e)) && (r === "style" && le(e) ? Qg(e, n) : r === "style" && F(e) ? Hc(e, n) : r === "code" && ve(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Et(e, gn, () => n));
  }
}
function FS(e, t, r) {
  if (t <= 0)
    return;
  const n = Ke();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Hr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Vt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (We(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && We(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Qt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && ut(p)) {
            let y = i + 1;
            const h = p.getChildren();
            for (const b of h) {
              if (s <= 0)
                break;
              const k = i;
              if (i = y, o(b)) {
                i = k;
                break;
              }
              Hr(b) ? y += b.getTextContentSize() : Vt(b) && (y += 1), i = k;
            }
            const g = p.getChildren();
            for (const b of g)
              b.remove(), a.append(b);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Qt(), !0);
        } else le(a) ? a.replace(Qt(), !0) : a.remove();
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
function zS(e, t, r, n, i) {
  if (t === qs)
    return mf(e, r, n, i);
  if (t.endsWith(qs) && !Nu(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (mn(r))
        throw new Error("Text + LF should not have char attributes");
      o += Ko(e, s, r, i);
    }
    return o += mf(e + o, r, n, i), o;
  } else return mn(r) ? KS(e, t, r, n, i) : Ko(e, t, r, i);
}
function KS(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Te(t === "" ? er : t);
  Ht(r, s);
  let o;
  {
    let g = function(b) {
      if (Hr(b)) {
        const k = b.getTextContentSize();
        if (e >= h && e < h + k) {
          const _ = b.getParent();
          return F(_) && (o = _), !0;
        }
        h += k;
      } else if (Vt(b))
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
        We(b) && (h += 1);
      }
      return !1;
    };
    const y = Ke();
    let h = 0;
    g(y);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const y = a[0];
      y && Gn(y, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Gn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Zi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(F);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Ko(e, t, void 0, i);
  const f = {};
  for (const [y, h] of Object.entries(r))
    y !== "char" && y !== "segment" && typeof h == "string" && (f[y] = h);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const y of d)
    if (!Zg(e, y, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Ko(e, t, void 0, i));
}
function Ko(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ke();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Hr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = Te(t);
        if (Ht(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          F(f) && !mn(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Vt(c))
      s += 1;
    else if (F(c)) {
      if (!o && e === s) {
        const u = Te(t);
        Ht(r, u);
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
        return Ht(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (We(c)) {
      if (!o && e === s) {
        const u = Te(t);
        Ht(r, u);
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
        return Ht(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = Te(t);
    Ht(r, c);
    const l = Qt().append(c);
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
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Qt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!I(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (ut(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Qt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Hr(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (Vt(l))
        i += 1;
      else if (F(l)) {
        if (o(l))
          return !0;
      } else if (We(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (tr(d) && We(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (I(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return I(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Qt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      ut(a) ? tr(a) && le(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ut(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (F(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ut(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function BS(e, t, r, n, i) {
  let s;
  return dn("chapter", t) ? s = VS(t.insert.chapter, r) : dn("verse", t) ? s = WS(t.insert.verse, r) : dn("ms", t) ? s = HS(t.insert.ms) : dn("note", t) ? s = tm(t, r, n) : dn("unknown", t) ? s = rm(t, r, n, i) : dn("unmatched", t) && (s = JS(t.insert.unmatched, r)), s ? Zg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function mf(e, t, r, n) {
  let i;
  Nu(t) ? i = em(t.para, r) : XS(t) && (i = jS(t.book)), i ??= Qt();
  const s = i, o = le(s), a = tr(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Hr(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (le(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const y = e - c, [h] = y > 0 ? u.splitText(y) : [void 0];
          let g, b = h?.getPreviousSibling();
          for (; b; ) {
            const k = b;
            b = b.getPreviousSibling(), g ? g.insertBefore(k) : s.append(k), g = k;
          }
          return h && s.append(h), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Vt(u))
      c += 1;
    else if (We(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (tr(u) && s)
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
  return d(Ke()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function jS(e) {
  const { style: t, code: r } = e;
  if (!t || t !== As || !r || !Kt.isValidBookCode(r))
    return;
  const n = He(e, l_);
  return Nh(r, n);
}
function em(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = He(e, c_), i = Hn(r, n);
  if (!vn(t))
    return i;
  if (t.markerMode === "editable")
    i.append(kt(r), Qs());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = ze(r) + D;
    i.append(t.hasGutterParaMarkers ? PT(s) : jr("marker", s));
  }
  return i;
}
function VS(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = He(e, u_);
  let a;
  if (t.markerMode === "editable")
    a = Oh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = jl(r, c, n, i, s, o);
  }
  return a;
}
function WS(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = He(e, d_);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Zt(r, n);
    c = Kh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = uu(n, l, i, s, o, a);
  }
  return c;
}
function HS(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = He(e, f_);
  return gh(t, r, n, s, i);
}
function tm(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = He(n.note, p_), l = typeof c?.closed == "string" ? c.closed : void 0, d = e.attributes?.segment;
  let u;
  d && typeof d == "string" && (u = d);
  const f = [];
  for (const y of a?.ops ?? [])
    if (typeof y.insert == "string")
      if (mn(y.attributes)) {
        const h = Zi(y.attributes.char, t, Te(y.insert), void 0, nm(y.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...h);
      } else
        f.push(Te(y.insert));
  return zg(i, s, f, t, r, u, l).setCategory(o).setUnknownAttributes(c);
}
function rm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = He(i, h_), l = Kl(s, o, c), d = a?.ops ?? [];
  d.length > 0 && GS(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && Et(l, gn, () => u), l;
}
function GS(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (mn(s.attributes)) {
        const o = Te(s.insert), a = Zi(s.attributes.char, t, o, void 0, nm(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Te(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (dn("unknown", s)) {
        const o = rm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (dn("note", s)) {
        const o = tm(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function JS(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = su(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function nm(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Gc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Zi(e, t, r, n, i, s = !1, o = !1) {
  M(r) && r.getTextContentSize() === 0 && r.setTextContent(er);
  const a = () => {
    o && M(r) && r.getTextContent() !== er && r.setTextContent(D + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Gc), l = c[0], d = i?.[i.length - 1];
    if (F(d) && Gn(l, d)) {
      if (c.length > 1) {
        const f = Zi(c.slice(1), t, r, void 0, void 0, !0, o);
        ic(d, f);
      } else
        r && ic(d, [r]);
      return [];
    }
    a();
    const u = c.reduceRight((f, p, y) => {
      const h = Vr(p.style, He(p, Fo));
      return typeof p.cid == "string" && Et(h, Wn, () => p.cid), n && y === c.length - 1 && Et(h, gn, () => n), f && (F(f) && (oc(f.getMarker(), f, t, !0), sc(f, f, t, !0)), h.append(f)), h;
    }, r);
    return oc(l.style, u, t, s), sc(u, u, t, s), [u];
  } else {
    const c = Gc(e), l = i?.[i.length - 1];
    if (F(l) && Gn(c, l))
      return r && ic(l, [r]), [];
    a();
    const d = Vr(c.style, He(c, Fo));
    return typeof c.cid == "string" && Et(d, Wn, () => c.cid), n && Et(d, gn, () => n), r && d.append(r), oc(c.style, d, t, s), sc(d, d, t, s), [d];
  }
}
function ic(e, t) {
  const r = e.getLastChild();
  w(r) && r.getMarkerSyntax() === "closing" || zt(r) && r.getTextType() === "marker" && r.getTextContent() === it(e.getMarker(), F(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function sc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && YS(e.getMarker(), t, r, !1, n);
}
function oc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = kt(e, "opening", n) : r?.markerMode === "visible" && (i = jr("marker", ze(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function YS(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = kt("", "selfClosing") : s = kt(e, "closing", i) : r?.markerMode === "visible" && (s = jr("marker", n ? it("") : it(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function XS(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Nu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function mn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function QS(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Ht(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Et(t, gn, () => n);
        continue;
      }
      if (ZS(r)) {
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
function ZS(e) {
  return im.includes(e);
}
function Fi(e) {
  return zt(e) && ve(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function sm(e) {
  const t = eo(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function wu(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(jp(r) && t.offset === 0 || ve(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Fi);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!ve(s))
    return !1;
  const o = sm(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function _o(e) {
  const t = P();
  if (!A(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : M(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? Wh(t) : Wl(t);
    return Fi(n);
  }
  return wu(t) && t.isCollapsed();
}
function ev(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed())
    return !1;
  const r = we(t.anchor.getNode(), ve);
  if (!r || !Fi(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return _o(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Fi)) {
    const n = sm(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function go() {
  const e = P();
  return A(e) && wu(e), !1;
}
function tv() {
  const e = P();
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !ve(r) || !Fi(r.getFirstChild()) ? !1 : (rr(r, 1), !0);
}
function rv(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => br(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function nv() {
  const [e] = ue();
  return j(() => e.registerCommand(ua, (t) => (iv(t), !1), jn), [e]), j(() => $e(
    e.registerCommand(da, _o, Pe),
    e.registerCommand(Nl, _o, Pe),
    e.registerCommand(Ao, _o, Pe),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(Ao, ev, Pr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(wi, go, _e),
    e.registerCommand(Yt, go, _e),
    e.registerCommand(hr, go, _e),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Kp, go, _e)
  ), [e]), j(() => $e(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(Ft, () => (tv(), !1), Pe),
    e.registerNodeTransform(Kt, rv)
  ), [e]), null;
}
function iv(e) {
  if (sv(e.target))
    return;
  const t = P();
  A(t) && ov(t);
}
function es(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Ot(t))
      r++, t = t.getNextSibling(), M(t) && t.getTextContent() === D && (r++, t = t.getNextSibling());
    else if (ke(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (rr(e, r), !0);
}
function sv(e) {
  if (!Bp(e))
    return !1;
  const t = Wi(e);
  if (!NT(t))
    return !1;
  const r = t.getParent();
  return r ? ut(r) ? es(r) : (rr(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function ov(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!We(r))
    return !1;
  const n = r.getFirstChild();
  return !br(n) && !ci(n) ? !1 : es(r);
}
function av() {
  const [e] = ue();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !cv(r) || !Is() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return $e(
      e.registerCommand($r, t, Pe),
      e.registerCommand(wi, t, Pe),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(Yt, t, _e),
      e.registerCommand(hr, t, _e),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(wl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Wi(r.target);
        return !n || !yn(n) ? !1 : (r.preventDefault(), !0);
      }, Pe),
      e.registerCommand(da, t, Pe),
      e.registerCommand(Nl, t, Pe),
      e.registerCommand(Ao, t, Pe)
    );
  }, [e]), null;
}
function cv(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function yn(e) {
  return we(e, Ou) ?? void 0;
}
function Ou(e) {
  return Ve(e) || xg(e);
}
function Is() {
  const e = P();
  return A(e) ? yn(e.anchor.getNode()) !== void 0 || yn(e.focus.getNode()) !== void 0 : !1;
}
function lv(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function uv(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), lv(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function dv(e, t, r, n) {
  if (!vv(t) || uv(e, r))
    return !1;
  const i = r === "up" ? a_(t) : o_(t);
  return i && n.preventDefault(), i;
}
function fv({ viewOptions: e }) {
  const [t] = ue();
  return pv(t, e), null;
}
function pv(e, t) {
  j(() => {
    if (!e.hasNodes([Lr, Rt, Oe]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = P();
      if (!A(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = yf(o), u = Tv(i, bf(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return dv(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = yf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return bf(a, n.key) ? l = !c && xf(i, "next") || !c && gv(i) || _v(i) || !c && s && Tf(i, "next") : hv(a, n.key) && (l = !c && xf(i, "previous") || !c && mv(i) || Sv(i, t) || !c && s && Tf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand($r, r, Pe);
  }, [e, t]);
}
function yf(e) {
  return e.dir || "ltr";
}
function bf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function hv(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Jc(e) {
  if (!F(e) || e.getMarker() !== "fp")
    return;
  const t = Bt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function gv(e) {
  const t = Jc(Wl(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (rr(t, 0), !0);
}
function mv(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Jc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : kf(n);
  }
  if (t.offset === 0) {
    const n = Jc(r);
    return n ? kf(n) : !1;
  }
  return !1;
}
function kf(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (M(t))
    return t.select(), !0;
  if (I(t)) {
    const i = t.getLastDescendant();
    return M(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Bo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function yv(e) {
  if (Bo)
    for (const { segment: r } of Bo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function bv(e) {
  if (Bo) {
    let n = 0;
    for (const { index: i } of Bo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function om(e) {
  for (let t = e; t; t = t.getParent())
    if (I(t) && !t.isInline())
      return t;
}
function am(e) {
  return !!e && w(e) && yn(e) !== void 0;
}
function zi(e) {
  return M(e) && !e.isToken() && !am(e) && e.getTextContentSize() > 0;
}
function cm(e) {
  return ni(e) ? !0 : B(e) ? e.getIsCollapsed() === !0 : M(e) ? (e.isToken() || am(e)) && e.getTextContentSize() > 0 : ii(e) ? !et(e) : !1;
}
function Ki(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Ma(e, t, r) {
  for (let n = e; n; ) {
    if (cm(n))
      return n;
    if (I(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Ki(n, t, r);
      continue;
    }
    if (zi(n))
      return n;
    n = Ki(n, t, r);
  }
}
function Ru(e, t, r, n, i) {
  return r === "element" && I(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Ki(e, n, i) : r === "text" && cm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Ki(e, n, i);
}
function ac(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Ru(e.node, e.offset, e.kind, "previous", t), n = Ma(r, "previous", t);
  if (!n)
    return e;
  if (zi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function kv(e, t) {
  const r = e.getNode(), n = om(r);
  if (!n)
    return;
  if (e.type === "text" && zi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ac({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Ru(r, e.offset, e.type, t, n), s = Ma(i, t, n);
  if (!s)
    return;
  if (zi(s)) {
    const c = s.getTextContent(), l = t === "next" ? yv(c) : bv(c);
    return ac({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ac({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function lm(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = kv(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && I(i.node) ? xu(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Tf(e, t) {
  return lm(e, t, "collapse");
}
function Tv(e, t) {
  return lm(e, t, "extend");
}
function xv(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && zi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Ru(n, e.offset, e.type, t, r);
  return Ma(i, t, r) === void 0;
}
function Cv(e, t) {
  const r = Ke();
  for (let n = e; n; ) {
    const i = Ki(n, t, r), s = i && Ma(i, t, r);
    if (!s)
      return;
    if (n = yn(s), !n)
      return s;
  }
}
function xf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (yn(n))
    return !1;
  const i = om(n);
  if (!i || !xv(r, t, i))
    return !1;
  const s = Ki(i, t, Ke()), o = s && yn(s);
  if (!o)
    return !1;
  const a = Cv(o, t);
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
function Cf(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  xu(t, r);
}
function _v(e) {
  const t = e.anchor.getNode(), r = Wl(e);
  if (B(r) && !w(r.getFirstChild())) {
    if (We(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(ut(i) && es(i)) && i.selectStart(), !0;
      }
    } else return zt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (We(t) && B(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Cf(r), !0;
  }
  const n = r?.getParent();
  if (zt(r) && B(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Cf(n) : n.selectEnd(), !0;
  }
  return !1;
}
function Sv(e, t) {
  const r = Wh(e);
  if (Gs(r) && !r.getPreviousSibling())
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
    if (!ci(c) && !ve(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const d = r.getIndexWithinParent();
    return l.select(d, d), !0;
  }
  if (We(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = we(c, (d) => B(d));
    if (B(l) && l.getIsCollapsed()) {
      const d = l.getParent();
      if (!d)
        return !1;
      const u = l.getIndexWithinParent();
      return d.select(u, u), !0;
    }
  }
  const a = Bt(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (Tt(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function vv(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ke(t) && ii(t);
}
function Mv() {
  const [e] = ue();
  return Ev(e), null;
}
function Ev(e) {
  j(() => {
    if (!e.hasNodes([Se]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return $e(
      e.registerNodeTransform(Se, Nv),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(Se, Rx),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(Se, ug),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(Se, (t) => Os(Jn("char"), t)),
      e.registerNodeTransform(Le, wv)
    );
  }, [e]);
}
function cc(e) {
  return e.getChildren().some(w);
}
function Av(e, t) {
  const r = t.getFirstChild();
  if (!w(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Ji(n)) {
    const i = n.getTextContent();
    i.startsWith(D) && (i === D ? n.remove() : n.setTextContent(i.slice(D.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function Pv(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  w(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function Nv(e) {
  if (!F(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (cc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ae(e, Wn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (F(i) && Gn({ style: t, cid: r }, i) && Dt(n, i.getUnknownAttributes()))
    if (cc(i)) {
      if (Av(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  F(s) && Gn({ style: t, cid: r }, s) && Dt(n, s.getUnknownAttributes()) && (cc(s) ? Pv(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function wv(e) {
  const t = e.getParent();
  if (!F(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(er)) {
    const n = P();
    if (A(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function um(e) {
  return e.replaceAll("	", " ");
}
function dm() {
  const e = P();
  return !!e && !e.isCollapsed();
}
function fm(e) {
  const t = () => !dm();
  return $e(e.registerCommand(Oi, t, ft), e.registerCommand(hr, t, ft));
}
const qu = (e) => {
  e.dispatchCommand(Oi, null);
}, $u = (e) => {
  e.dispatchCommand(hr, null);
}, Iu = (e) => {
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
    e.dispatchCommand(Yt, s);
  });
}, Lu = (e) => {
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
    e.dispatchCommand(Yt, i);
  });
};
function Ov() {
  const [e] = ue();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Ri ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), qu(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), $u(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Lu(e) : Iu(e)));
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
function Rv({ logger: e }) {
  const [t] = ue();
  return j(() => $e(
    // When the backslash or forward slash key is typed.
    t.registerCommand($r, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Pr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Yt, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Pr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(wl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Pr)
  ), [t, e]), null;
}
const jo = "editor-context-menu";
function Yc(e) {
  return `${jo}-item-${e}`;
}
const qv = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function $v({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), E("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Yc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: E("span", { className: "text", children: i.title }) });
}
function Iv({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return E("div", { className: "typeahead-popover", children: E("ul", { id: jo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => E($v, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let Lv = 0;
class ls {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${Lv++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function Dv({ options: e } = {}) {
  const [t] = ue(), [r, n] = me(() => !t.isEditable()), [i, s] = me({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = me(void 0), c = Ge(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new ls("Cut", {
        onSelect: () => {
          $u(t);
        },
        isDisabled: r
      }),
      new ls("Copy", {
        onSelect: () => {
          qu(t);
        }
      }),
      new ls("Paste", {
        onSelect: () => {
          Iu(t);
        },
        isDisabled: r
      }),
      new ls("Paste as Plain Text", {
        onSelect: () => {
          Lu(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((y) => new ls(y.title, { onSelect: y.onSelect, isDisabled: y.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = X(null), d = X(null), u = xe(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return j(() => fm(t), [t]), j(() => {
    const f = (p) => {
      const y = p.target;
      t.getRootElement() === y || Dh(y) || (p.preventDefault(), d.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, y) => {
      y?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), j(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const y = p.target;
      y instanceof Node && l.current?.contains(y) || u();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, u]), j(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      u();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, u]), j(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      if (p.isComposing || p.keyCode === 229)
        return;
      if (p.key === "Escape") {
        p.preventDefault(), u();
        return;
      }
      const y = document.activeElement;
      if (!(y && y !== document.body && y !== d.current && !t.getRootElement()?.contains(y) && !l.current?.contains(y)))
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
          if (qv.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, u, c, o, t]), j(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", jo), () => {
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
    f.setAttribute("aria-activedescendant", Yc(o));
    const p = document.getElementById(jo), y = document.getElementById(Yc(o));
    if (!p || !y)
      return;
    const h = p.getBoundingClientRect(), g = y.getBoundingClientRect(), b = g.top - h.top + p.scrollTop, k = g.bottom - h.top + p.scrollTop;
    b < p.scrollTop ? p.scrollTop = b : k > p.scrollTop + p.clientHeight && (p.scrollTop = k - p.clientHeight);
  }, [t, i.isOpen, o]), j(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), Vs(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: y } = f.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - y));
    f.style.left = `${h}px`, f.style.top = `${g}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? qk.createPortal(E("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: E(Iv, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), u());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function Uv(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function Fv(e) {
  if (!gk(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function zv(e) {
  return Tt(e);
}
function lc(e, t, r) {
  const n = Wi(t.node);
  if (!ii(n) || zv(n))
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
function Kv(e, t) {
  if (P())
    return !1;
  const r = e.getRootElement(), n = hk(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Vp(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let d, u;
  if (n.isCollapsed)
    d = lc(e, c, Fv(c)), u = d;
  else {
    const g = Uv(n.getRangeAt(0), c);
    d = lc(e, c, g ? "before" : "after"), u = lc(e, l, g ? "after" : "before");
  }
  if (!d && !u)
    return !1;
  const f = d ?? c, p = u ?? l, y = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, h = Wp(y, e);
  return h ? (Br(h), h.dirty = !t, t) : !1;
}
function Bv() {
  const [e] = ue(), t = X(!1), r = X(!1);
  return j(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = P();
        A(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), j(() => e.registerCommand(Ft, () => (Kv(e, t.current) && (r.current = !0), !1), _e), [e]), null;
}
function jv() {
  const [e] = ue();
  return j(() => e.registerCommand($r, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ri ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, _e), [e]), null;
}
function Vv({ isEditable: e }) {
  const [t] = ue();
  return Vs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Du(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Er(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function uc(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = P();
    if (!A(i))
      return !1;
    const s = Wp(r, e);
    return !!s && i.is(s);
  }, { editor: e }) || r.removeAllRanges();
}
function Ci(e, t) {
  let r;
  try {
    r = _n();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function _f(e) {
  return !!e && Ys(se(e));
}
function Uu(e) {
  const [t] = ue(), r = X(void 0), n = xe((i) => {
    const s = P(), o = A(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = _f(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = eo(d, u), p = Ys(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const y = ax();
        i.insertAfter(y), r.current = y.getKey(), l = y.getKey();
      }
      rr(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = se(a);
      M(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = P(), l = A(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (Ct(At), Er(t, At), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Js(c) || !c.includes(qi))
        return;
      const l = P(), d = A(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (cx(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(qi).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = $e(t.registerCommand(Ft, () => (i(), !1), jn), t.registerCommand(Ol, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = _f(a);
      }), c && t.update(() => {
        const l = se(a);
        M(l) && l.remove();
      }, { tag: At }), r.current = void 0, !1;
    }, jn), t.registerNodeTransform(Le, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function Wv() {
  const e = P();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = B(r) ? r : r.getParent();
  if (!B(n))
    return;
  const i = aS(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && Ys(s); )
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
function Hv() {
  return Uu(Wv), null;
}
function Gv() {
  const e = P();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!I(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ke(i) || eo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ke(s))
    return i;
}
function Jv() {
  return Uu(Gv), null;
}
function Yv({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ue();
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
        const d = Du(o);
        o.update(() => {
          d || Ct(cr), o.setEditorState(l), o.dispatchCommand(mk, void 0);
        }, { tag: Il });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const dc = "caller_highlight", Xv = Cn(function(t, r) {
  const [n] = ue(), i = X(void 0), s = X(void 0), o = xe(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const d = vr(a);
      return d ? (d.getChildren().find(Tt) ?? Wr(d))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(dc), l?.classList.add(dc), s.current = l;
  }, [n]);
  return aa(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Ci(n, () => vr(a)?.getKey()), o();
    }
  }), [n, o]), j(() => $e(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Oe, (a, { prevEditorState: c, updateTags: l }) => {
      const d = i.current;
      if (d === void 0 || a.get(d) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const u = l.has(Il) ? void 0 : c.read(() => mu(d)), f = u === void 0 ? void 0 : n.getEditorState().read(() => vr(u)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), j(() => () => s.current?.classList.remove(dc), []), null;
});
function Qv({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ue();
  return Zv(t, n), eM(i, e, r, n), null;
}
function Zv(e, t) {
  const r = X(void 0), n = X(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = H_), r.current !== o && (r.current = o, Sf("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = G_), n.current !== o && (n.current = o, Sf("cross-ref-callers", o, t));
  }, [t, s]);
}
function eM(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([Se, Oe, dr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => aM(s));
    return $e(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Oe, (s) => tM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(Se, rM),
      e.registerNodeTransform(Le, nM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(dr, iM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(dr, (s, { prevEditorState: o }) => sM(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Ft, () => oM(e, t, r, n), ft),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function tM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Tt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    M(i) && !w(i) && i.getTextContent() !== jt(e.getCaller()) && e.insertBefore(i);
  }
}
function rM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => Tt(s));
  if (!F(e) || !B(t) || !n)
    return;
  const i = Hl(r);
  n.getPreviewText() !== i && n.setPreviewText(i), hm(e);
}
function pm(e) {
  const t = P();
  if (!A(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function hm(e) {
  const t = e.getNextSibling();
  if (M(t) && !w(t)) {
    if (t.getTextContent() === D || pm(t))
      return;
    if (Dr(t)) {
      t.setTextContent(D);
      return;
    }
  }
  e.insertAfter(Qs());
}
function nM(e) {
  const t = Bt(e), r = t?.getChildren(), n = r?.find((a) => Tt(a));
  if (!M(e) || !B(t) || !n || !r)
    return;
  const i = e.getParent(), s = Dr(e) || pm(e);
  if (!w(e) && B(i) && s && e.getTextContent() !== D && (e.setTextContent(D), e.selectEnd()), F(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(er) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = Hl(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function iM(e) {
  Tt(e) && hm(e);
}
function sM(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return Tt(o) && B(a) && a.getCaller() === Ss;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function oM(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = P();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = we(o, (c) => B(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = se(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), us(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (B(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, us(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (B(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, us(e, c, n);
    } else if (!a) {
      const c = we(o, (l) => B(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      We(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, us(e, l, n);
      }
    }
  }
  if (ut(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (ci(c) && B(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, us(e, l, n);
    }
  }
  return !1;
}
function us(e, t, r) {
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
function aM(e) {
  const t = P();
  if (!A(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (B(i) && M(s)) {
    e.preventDefault();
    const o = Bn();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Br(o);
  }
}
function Sf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (cM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function cM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function wr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!w(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Wr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => M(n) && n.getMode() === "token") ? t : [];
}
function lM(e) {
  const t = e.getParent();
  if (B(t))
    return wr(t).some((r) => r.is(e)) ? t : void 0;
}
function Qn(e) {
  const t = wr(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function uM(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function dM(e) {
  const t = yk();
  if (!A(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Qn(e);
  const i = uM(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Qn(e);
}
function vi(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = lM(t);
  if (r)
    return gm(r, t, e.offset) ? void 0 : r;
}
function gm(e, t, r) {
  const n = wr(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function fM(e) {
  const t = wr(e), r = t[t.length - 1];
  M(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : rr(e, Qn(e));
}
function pM(e = !1) {
  const t = P();
  if (!A(t))
    return !1;
  if (!t.isCollapsed())
    return km(t);
  const r = mm(t.anchor);
  if (r) {
    const i = Wo(r);
    return t.anchor.is(i) ? !1 : (ym(t, i), !0);
  }
  const n = vi(t.anchor);
  if (!n)
    return !1;
  if (!e && dM(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    rr(i, n.getIndexWithinParent());
  } else
    fM(n);
  return !0;
}
function Vo(e) {
  const t = wr(e), r = t[t.length - 1];
  return M(r) ? ur(r.getKey(), r.getTextContentSize(), "text") : ur(e.getKey(), Qn(e), "element");
}
function Bi(e) {
  const t = e.getLastChild();
  return w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function fc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === Bi(e) && w(r) && t.offset > 0;
}
function Xc(e) {
  const t = Bi(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return M(r) ? r : void 0;
}
function Wo(e) {
  const t = Bi(e);
  if (t > Qn(e)) {
    const r = e.getChildAtIndex(t - 1), n = I(r) ? r.getLastDescendant() : r;
    if (M(n))
      return ur(n.getKey(), n.getTextContentSize(), "text");
  }
  return Vo(e);
}
function mm(e) {
  const t = e.getNode(), r = t.getParent();
  if (B(r) && wr(r).length > 0 && Xc(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (B(t) && wr(t).length > 0 && Xc(t))
    return e.offset > Bi(t) || e.offset === Bi(t) && e.offset > Qn(t) ? t : void 0;
  if (!I(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return B(n) && wr(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function ym(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function bm(e) {
  const t = Bt(e);
  return t && wr(t).length > 0 ? t : void 0;
}
function hM(e) {
  const t = [], r = (n) => {
    const i = bm(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function km(e) {
  const t = hM(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => ur(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const d = ur(l.getKey(), Qn(l), "element"), u = ur(l.getKey(), Bi(l), "element"), f = i.type === "text" && gm(l, i.getNode(), i.offset), p = i.isBefore(d) && !f;
    (vi(i) || fc(l, i) || p) && (!s.isBefore(d) || vi(s)) && (i = fc(l, i) ? Wo(l) : Vo(l), o = !0), (vi(s) || fc(l, s) || u.isBefore(s)) && (i.isBefore(u) || i.is(u)) && (s = vi(s) ? Vo(l) : Wo(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function vf(e, t) {
  const r = Bn();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function Mf(e, t) {
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
function Ef(e, t, r) {
  const n = Mf(e, t), i = Mf(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function gM(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return I(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function mM(e, t, r, n) {
  const i = t.anchor, s = mm(i);
  if (s)
    return ym(t, Wo(s)), !0;
  const o = bm(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const u = gM(t.focus);
    return B(u) && wr(u).length > 0;
  }
  if (vi(i))
    return !0;
  const a = Vo(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const u = vf(a, i);
    return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && Ef(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = Xc(o);
  if (!c)
    return !1;
  const l = ur(c.getKey(), 0, "text"), d = vf(i, l);
  return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && Ef(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function yM() {
  const [e] = ue(), t = X(!1);
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
      const a = P();
      return !A(a) || a.isCollapsed() || !km(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = P();
      return A(c) ? c.isCollapsed() ? mM(e, c, a, o) : i() : !1;
    };
    return $e(e.registerCommand(wi, n, _e), e.registerCommand(Yt, n, _e), e.registerCommand(Mi, n, _e), e.registerCommand(Hp, n, _e), e.registerCommand(da, s("character"), _e), e.registerCommand(Nl, s("word"), _e), e.registerCommand(Ao, s("line"), _e), e.registerCommand(Kp, i, _e), e.registerCommand(hr, i, _e));
  }, [e]), j(() => e.registerCommand(Ft, () => (pM(t.current) && (Ct(At), Er(e, At)), !1), jn), [e]), null;
}
function bM({ onChange: e }) {
  const [t] = ue();
  return j(() => t.registerCommand(Ft, () => {
    const r = bu();
    return e?.(r), !1;
  }, ft), [t, e]), null;
}
function kM() {
  const [e] = ue();
  return TM(e), null;
}
function TM(e) {
  j(() => {
    if (!e.hasNodes([st]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(st, (t) => xM(t, e));
  }, [e]);
}
function xM(e, t) {
  Bc(t, e.getKey()) && qg(e.getFirstChild()), !(!le(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return le(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Tm({ onStateChange: e }) {
  const [t] = ue(), [r, n] = me(t), i = X(!1), s = X(!1), o = X(void 0), a = X(void 0), c = xe(() => {
    const l = P();
    let d;
    if (A(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : we(u, (b) => {
        const k = b.getParent();
        return k !== null && bk(k);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Rs(p) && (p = we(u, le) ?? p);
      const y = p.getKey(), h = r.getElementByKey(y), g = px(u, f);
      if (g && s_(g) && (d = g.getMarker()), h !== null && (le(p) || ve(p) || Gs(p))) {
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
  return j(() => t.registerCommand(Ft, (l, d) => (c(), n(d), !1), _e), [t, c]), j(() => $e(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(kk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), _e), r.registerCommand(Tk, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), _e)), [c, r, e]), null;
}
function xm(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function bn(e) {
  return e ? We(e) ? e : we(e, (r) => We(r)) ?? void 0 : void 0;
}
function Cm(e) {
  if (!A(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = bn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Fu(e) {
  return A(e) && e.isCollapsed() && e.anchor.type === "element" || !A(e) && !la(e) ? !1 : e.getNodes().some((t) => ke(t));
}
function _m(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = bn(r);
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
function Sm(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = bn(r);
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
function Af(e, t) {
  return !!Qc(e, t);
}
function Qc(e, t) {
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && I(n)) {
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
function Ho(e, t) {
  if (!A(e))
    return !1;
  const r = bn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Pi(e) {
  return Fu(e) || Cm(e);
}
function vm(e, t) {
  if (Fu(e) || Cm(e))
    return !0;
  if (!A(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return _m(e) && Ho(e, "backward") || Af(e, "backward");
    case "deleteForward":
      return Sm(e) && Ho(e, "forward") || Af(e, "forward");
    case "insertText":
      return !1;
  }
}
function CM(e, t) {
  if (!(!A(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Qc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (_m(e) && Ho(e, "backward")) {
        const n = bn(e.anchor.getNode());
        if (ut(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Qc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Sm(e) && Ho(e, "forward")) {
        const i = bn(e.anchor.getNode())?.getNextSibling();
        if (ut(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Pf(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return la(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!A(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!A(e) || e.isCollapsed())
    return !1;
  const r = bn(e.anchor.getNode()), n = bn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Mm(e) {
  if (M(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else I(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function _M(e) {
  const t = e.getPreviousSibling();
  if (!We(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = Ot(n), s = e.getChildren().filter((o) => !Dr(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? Mm(r) : es(t) || t.selectStart();
}
function Em(e) {
  return ke(e) || Je(e) ? [] : ut(e) ? e.getChildren().flatMap(Em) : [e];
}
function SM(e) {
  const t = [];
  for (const r of e) {
    const n = Em(r);
    n.length !== 0 && (ut(r) && t.length > 0 && t.push(Te(" ")), t.push(...n));
  }
  return t;
}
function Nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vM(e) {
  if (Array.isArray(e)) return e;
}
function MM(e, t) {
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
function EM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AM(e, t) {
  return vM(e) || MM(e, t) || PM(e, t) || EM();
}
function PM(e, t) {
  if (e) {
    if (typeof e == "string") return Nf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Nf(e, t) : void 0;
  }
}
const Am = Object.entries, wf = Object.setPrototypeOf, NM = Object.isFrozen, wM = Object.getPrototypeOf, OM = Object.getOwnPropertyDescriptor;
let pt = Object.freeze, gt = Object.seal, _i = Object.create, Pm = typeof Reflect < "u" && Reflect, Zc = Pm.apply, el = Pm.construct;
pt || (pt = function(t) {
  return t;
});
gt || (gt = function(t) {
  return t;
});
Zc || (Zc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
el || (el = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const ki = rt(Array.prototype.forEach), RM = rt(Array.prototype.lastIndexOf), Of = rt(Array.prototype.pop), Ti = rt(Array.prototype.push), qM = rt(Array.prototype.splice), fn = Array.isArray, ms = rt(String.prototype.toLowerCase), pc = rt(String.prototype.toString), Rf = rt(String.prototype.match), ds = rt(String.prototype.replace), qf = rt(String.prototype.indexOf), $M = rt(String.prototype.trim), IM = rt(Number.prototype.toString), LM = rt(Boolean.prototype.toString), $f = typeof BigInt > "u" ? null : rt(BigInt.prototype.toString), If = typeof Symbol > "u" ? null : rt(Symbol.prototype.toString), ct = rt(Object.prototype.hasOwnProperty), fs = rt(Object.prototype.toString), at = rt(RegExp.prototype.test), Ln = DM(TypeError);
function rt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Zc(e, t, n);
  };
}
function DM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return el(e, r);
  };
}
function be(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ms;
  if (wf && wf(e, null), !fn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (NM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function UM(e) {
  for (let t = 0; t < e.length; t++)
    ct(e, t) || (e[t] = null);
  return e;
}
function yt(e) {
  const t = _i(null);
  for (const n of Am(e)) {
    var r = AM(n, 2);
    const i = r[0], s = r[1];
    ct(e, i) && (fn(s) ? t[i] = UM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = yt(s) : t[i] = s);
  }
  return t;
}
function FM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return IM(e);
    case "boolean":
      return LM(e);
    case "bigint":
      return $f ? $f(e) : "0";
    case "symbol":
      return If ? If(e) : "Symbol()";
    case "undefined":
      return fs(e);
    case "function":
    case "object": {
      if (e === null)
        return fs(e);
      const t = e, r = or(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : fs(n);
      }
      return fs(e);
    }
    default:
      return fs(e);
  }
}
function or(e, t) {
  for (; e !== null; ) {
    const n = OM(e, t);
    if (n) {
      if (n.get)
        return rt(n.get);
      if (typeof n.value == "function")
        return rt(n.value);
    }
    e = wM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function zM(e) {
  try {
    return at(e, ""), !0;
  } catch {
    return !1;
  }
}
const Lf = pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), hc = pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gc = pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), KM = pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), mc = pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), BM = pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Df = pt(["#text"]), Uf = pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), yc = pt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ff = pt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), mo = pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), jM = gt(/{{[\w\W]*|^[\w\W]*}}/g), VM = gt(/<%[\w\W]*|^[\w\W]*%>/g), WM = gt(/\${[\w\W]*/g), HM = gt(/^data-[\-\w.\u00B7-\uFFFF]+$/), GM = gt(/^aria-[\-\w]+$/), zf = gt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), JM = gt(/^(?:\w+script|data):/i), YM = gt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), XM = gt(/^html$/i), QM = gt(/^[a-z][.\w]*(-[.\w]+)+$/i), Kf = gt(/<[/\w!]/g), Bf = gt(/<[/\w]/g), ZM = gt(/<\/no(script|embed|frames)/i), eE = gt(/\/>/i), Lt = {
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
}, tE = function() {
  return typeof window > "u" ? null : window;
}, rE = function(t, r) {
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
}, jf = function() {
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
}, un = function(t, r, n, i) {
  return ct(t, r) && fn(t[r]) ? be(i.base ? yt(i.base) : {}, t[r], i.transform) : n;
};
function Nm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : tE();
  const t = (V) => Nm(V);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Lt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = or(f, "cloneNode"), y = or(f, "remove"), h = or(f, "nextSibling"), g = or(f, "childNodes"), b = or(f, "parentNode"), k = or(f, "shadowRoot"), _ = or(f, "attributes"), v = o && o.prototype ? or(o.prototype, "nodeType") : null, C = o && o.prototype ? or(o.prototype, "nodeName") : null, $ = o && o.prototype ? or(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const V = r.createElement("template");
    V.content && V.content.ownerDocument && (r = V.content.ownerDocument);
  }
  let N, z = "", K, ne = !1, G = 0;
  const Ce = function() {
    if (G > 0)
      throw Ln('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, re = function(m) {
    Ce(), G++;
    try {
      return N.createHTML(m);
    } finally {
      G--;
    }
  }, q = function(m) {
    Ce(), G++;
    try {
      return N.createScriptURL(m);
    } finally {
      G--;
    }
  }, H = function() {
    return ne || (K = rE(u, i), ne = !0), K;
  }, ye = r, he = ye.implementation, ot = ye.createNodeIterator, Ur = ye.createDocumentFragment, Mn = ye.getElementsByTagName, ee = n.importNode;
  let R = jf();
  t.isSupported = typeof Am == "function" && typeof b == "function" && he && he.createHTMLDocument !== void 0;
  const te = jM, de = VM, Re = WM, dt = HM, Z = GM, Xe = JM, Tr = YM, ts = QM;
  let rn = zf, oe = null;
  const mt = be({}, [...Lf, ...hc, ...gc, ...mc, ...Df]);
  let ge = null;
  const li = be({}, [...Uf, ...yc, ...Ff, ...mo]);
  let Ee = Object.seal(_i(null, {
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
  })), En = null, ui = null;
  const ir = Object.seal(_i(null, {
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
  let nn = !0, sn = !0, io = !1, on = !0, $t = !1, sr = !0, xr = !1, rs = !1, An = null, O = null, L = !1, W = !1, J = !1, pe = !1, Qe = !0, Ie = !1;
  const Ze = "user-content-";
  let It = !0, Pn = !1, Fr = {}, nt = null;
  const ns = be({}, [
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
  let so = null;
  const Nn = be({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ia = null;
  const ld = be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), oo = "http://www.w3.org/1998/Math/MathML", ao = "http://www.w3.org/2000/svg", Cr = "http://www.w3.org/1999/xhtml";
  let di = Cr, La = !1, Da = null;
  const Ib = be({}, [oo, ao, Cr], pc), ud = pt(["mi", "mo", "mn", "ms", "mtext"]);
  let Ua = be({}, ud);
  const dd = pt(["annotation-xml"]);
  let Fa = be({}, dd);
  const Lb = be({}, ["title", "style", "font", "a", "script"]);
  let is = null;
  const Db = ["application/xhtml+xml", "text/html"], Ub = "text/html";
  let Be = null, fi = null;
  const Fb = r.createElement("form"), fd = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, za = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (fi && fi === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = yt(m), is = // eslint-disable-next-line unicorn/prefer-includes
    Db.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? Ub : m.PARSER_MEDIA_TYPE, Be = is === "application/xhtml+xml" ? pc : ms, oe = un(m, "ALLOWED_TAGS", mt, {
      transform: Be
    }), ge = un(m, "ALLOWED_ATTR", li, {
      transform: Be
    }), Da = un(m, "ALLOWED_NAMESPACES", Ib, {
      transform: pc
    }), Ia = un(m, "ADD_URI_SAFE_ATTR", ld, {
      transform: Be,
      base: ld
    }), so = un(m, "ADD_DATA_URI_TAGS", Nn, {
      transform: Be,
      base: Nn
    }), nt = un(m, "FORBID_CONTENTS", ns, {
      transform: Be
    }), En = un(m, "FORBID_TAGS", yt({}), {
      transform: Be
    }), ui = un(m, "FORBID_ATTR", yt({}), {
      transform: Be
    }), Fr = ct(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? yt(m.USE_PROFILES) : m.USE_PROFILES : !1, nn = m.ALLOW_ARIA_ATTR !== !1, sn = m.ALLOW_DATA_ATTR !== !1, io = m.ALLOW_UNKNOWN_PROTOCOLS || !1, on = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $t = m.SAFE_FOR_TEMPLATES || !1, sr = m.SAFE_FOR_XML !== !1, xr = m.WHOLE_DOCUMENT || !1, W = m.RETURN_DOM || !1, J = m.RETURN_DOM_FRAGMENT || !1, pe = m.RETURN_TRUSTED_TYPE || !1, L = m.FORCE_BODY || !1, Qe = m.SANITIZE_DOM !== !1, Ie = m.SANITIZE_NAMED_PROPS || !1, It = m.KEEP_CONTENT !== !1, Pn = m.IN_PLACE || !1, rn = zM(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : zf, di = typeof m.NAMESPACE == "string" ? m.NAMESPACE : Cr, Ua = ct(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? yt(m.MATHML_TEXT_INTEGRATION_POINTS) : be({}, ud), Fa = ct(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? yt(m.HTML_INTEGRATION_POINTS) : be({}, dd);
    const S = ct(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? yt(m.CUSTOM_ELEMENT_HANDLING) : _i(null);
    if (Ee = _i(null), ct(S, "tagNameCheck") && fd(S.tagNameCheck) && (Ee.tagNameCheck = S.tagNameCheck), ct(S, "attributeNameCheck") && fd(S.attributeNameCheck) && (Ee.attributeNameCheck = S.attributeNameCheck), ct(S, "allowCustomizedBuiltInElements") && typeof S.allowCustomizedBuiltInElements == "boolean" && (Ee.allowCustomizedBuiltInElements = S.allowCustomizedBuiltInElements), gt(Ee), $t && (sn = !1), J && (W = !0), Fr && (oe = be({}, Df), ge = _i(null), Fr.html === !0 && (be(oe, Lf), be(ge, Uf)), Fr.svg === !0 && (be(oe, hc), be(ge, yc), be(ge, mo)), Fr.svgFilters === !0 && (be(oe, gc), be(ge, yc), be(ge, mo)), Fr.mathMl === !0 && (be(oe, mc), be(ge, Ff), be(ge, mo))), ir.tagCheck = null, ir.attributeCheck = null, ct(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? ir.tagCheck = m.ADD_TAGS : fn(m.ADD_TAGS) && (oe === mt && (oe = yt(oe)), be(oe, m.ADD_TAGS, Be))), ct(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? ir.attributeCheck = m.ADD_ATTR : fn(m.ADD_ATTR) && (ge === li && (ge = yt(ge)), be(ge, m.ADD_ATTR, Be))), ct(m, "ADD_URI_SAFE_ATTR") && fn(m.ADD_URI_SAFE_ATTR) && be(Ia, m.ADD_URI_SAFE_ATTR, Be), ct(m, "FORBID_CONTENTS") && fn(m.FORBID_CONTENTS) && (nt === ns && (nt = yt(nt)), be(nt, m.FORBID_CONTENTS, Be)), ct(m, "ADD_FORBID_CONTENTS") && fn(m.ADD_FORBID_CONTENTS) && (nt === ns && (nt = yt(nt)), be(nt, m.ADD_FORBID_CONTENTS, Be)), It && (oe["#text"] = !0), xr && be(oe, ["html", "head", "body"]), oe.table && (be(oe, ["tbody"]), delete En.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ln('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ln('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = N;
      N = m.TRUSTED_TYPES_POLICY;
      try {
        z = re("");
      } catch (Y) {
        throw N = U, Y;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (N = void 0, z = "") : (N === void 0 && (N = H()), N && typeof z == "string" && (z = re("")));
    pt && pt(m), fi = m;
  }, pd = be({}, [...hc, ...gc, ...KM]), hd = be({}, [...mc, ...BM]), zb = function(m, S, U) {
    return S.namespaceURI === Cr ? m === "svg" : S.namespaceURI === oo ? m === "svg" && (U === "annotation-xml" || Ua[U]) : !!pd[m];
  }, Kb = function(m, S, U) {
    return S.namespaceURI === Cr ? m === "math" : S.namespaceURI === ao ? m === "math" && Fa[U] : !!hd[m];
  }, Bb = function(m, S, U) {
    return S.namespaceURI === ao && !Fa[U] || S.namespaceURI === oo && !Ua[U] ? !1 : !hd[m] && (Lb[m] || !pd[m]);
  }, jb = function(m) {
    let S = b(m);
    (!S || !S.tagName) && (S = {
      namespaceURI: di,
      tagName: "template"
    });
    const U = ms(m.tagName), Y = ms(S.tagName);
    return Da[m.namespaceURI] ? m.namespaceURI === ao ? zb(U, S, Y) : m.namespaceURI === oo ? Kb(U, S, Y) : m.namespaceURI === Cr ? Bb(U, S, Y) : !!(is === "application/xhtml+xml" && Da[m.namespaceURI]) : !1;
  }, an = function(m) {
    Ti(t.removed, {
      element: m
    });
    try {
      b(m).removeChild(m);
    } catch {
      if (y(m), !b(m))
        throw Ln("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, co = function(m) {
    ss(m);
    const S = g(m);
    if (S) {
      const Y = [];
      ki(S, (Q) => {
        Ti(Y, Q);
      }), ki(Y, (Q) => {
        try {
          y(Q);
        } catch {
        }
      });
    }
    const U = _(m);
    if (U)
      for (let Y = U.length - 1; Y >= 0; --Y) {
        const Q = U[Y], ce = Q && Q.name;
        if (typeof ce == "string")
          try {
            m.removeAttribute(ce);
          } catch {
          }
      }
  }, wn = function(m, S) {
    try {
      Ti(t.removed, {
        attribute: S.getAttributeNode(m),
        from: S
      });
    } catch {
      Ti(t.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(m), m === "is")
      if (W || J)
        try {
          an(S);
        } catch {
        }
      else
        try {
          S.setAttribute(m, "");
        } catch {
        }
  }, Vb = function(m) {
    const S = _(m);
    if (S)
      for (let U = S.length - 1; U >= 0; --U) {
        const Y = S[U], Q = Y && Y.name;
        if (!(typeof Q != "string" || ge[Be(Q)]))
          try {
            m.removeAttribute(Q);
          } catch {
          }
      }
  }, ss = function(m) {
    const S = [m];
    for (; S.length > 0; ) {
      const U = S.pop();
      (v ? v(U) : U.nodeType) === Lt.element && Vb(U);
      const Q = g(U);
      if (Q)
        for (let ce = Q.length - 1; ce >= 0; --ce)
          S.push(Q[ce]);
    }
  }, Wb = function(m) {
    if (!sr)
      return;
    const S = [m];
    for (; S.length > 0; ) {
      const U = S.pop(), Y = v ? v(U) : U.nodeType;
      if (Y === Lt.processingInstruction || Y === Lt.comment && at(Bf, U.data)) {
        try {
          y(U);
        } catch {
        }
        continue;
      }
      if (Y === Lt.element) {
        const ce = U, Ae = Be(C ? C(U) : U.nodeName);
        try {
          ce.hasAttribute && ce.hasAttribute("patchsrc") && ce.removeAttribute("patchsrc"), ce.hasAttribute && ce.hasAttribute("for") && Ae !== "label" && Ae !== "output" && ce.removeAttribute("for");
        } catch {
        }
      }
      const Q = g(U);
      if (Q)
        for (let ce = Q.length - 1; ce >= 0; --ce)
          S.push(Q[ce]);
    }
  }, gd = function(m) {
    let S = null, U = null;
    if (L)
      m = "<remove></remove>" + m;
    else {
      const ce = Rf(m, /^[\r\n\t ]+/);
      U = ce && ce[0];
    }
    is === "application/xhtml+xml" && di === Cr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const Y = N ? re(m) : m;
    if (di === Cr)
      try {
        S = new d().parseFromString(Y, is);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = he.createDocument(di, "template", null);
      try {
        S.documentElement.innerHTML = La ? z : Y;
      } catch {
      }
    }
    const Q = S.body || S.documentElement;
    return m && U && Q.insertBefore(r.createTextNode(U), Q.childNodes[0] || null), di === Cr ? Mn.call(S, xr ? "html" : "body")[0] : xr ? S.documentElement : Q;
  }, md = function(m) {
    const S = $ ? $(m) : m.ownerDocument;
    return ot.call(
      S || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, lo = function(m) {
    return m = ds(m, te, " "), m = ds(m, de, " "), m = ds(m, Re, " "), m;
  }, Ka = function(m) {
    var S;
    m.normalize();
    const U = $ ? $(m) : m.ownerDocument, Y = ot.call(
      U || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Q = Y.nextNode();
    for (; Q; )
      Q.data = lo(Q.data), Q = Y.nextNode();
    const ce = (S = m.querySelectorAll) === null || S === void 0 ? void 0 : S.call(m, "template");
    ce && ki(ce, (Ae) => {
      pi(Ae.content) && Ka(Ae.content);
    });
  }, uo = function(m) {
    const S = C ? C(m) : null;
    return typeof S != "string" || Be(S) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    m.attributes !== _(m) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    m.nodeType !== v(m) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    m.childNodes !== g(m);
  }, pi = function(m) {
    if (!v || typeof m != "object" || m === null)
      return !1;
    try {
      return v(m) === Lt.documentFragment;
    } catch {
      return !1;
    }
  }, os = function(m) {
    if (!v || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof v(m) == "number";
    } catch {
      return !1;
    }
  };
  function _r(V, m, S) {
    V.length !== 0 && ki(V, (U) => {
      U.call(t, m, S, fi);
    });
  }
  const Hb = function(m, S) {
    return !!(sr && m.hasChildNodes() && !os(m.firstElementChild) && at(Kf, m.textContent) && at(Kf, m.innerHTML) || sr && m.namespaceURI === Cr && S === "style" && os(m.firstElementChild) || m.nodeType === Lt.processingInstruction || sr && m.nodeType === Lt.comment && at(Bf, m.data));
  }, Gb = function(m, S, U) {
    if (!En[S] && Td(S) && (Ee.tagNameCheck instanceof RegExp && at(Ee.tagNameCheck, S) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(S)))
      return !1;
    if (It && !nt[S]) {
      const Y = b(m), Q = g(m);
      if (Q && Y) {
        const ce = Q.length;
        for (let Ae = ce - 1; Ae >= 0; --Ae) {
          const je = m === U ? p(Q[Ae], !0) : Q[Ae];
          Y.insertBefore(je, h(m));
        }
      }
    }
    return an(m), !0;
  }, yd = function(m, S, U, Y) {
    return m.length === 0 ? S : S === U || S === Y ? yt(S) : S;
  }, bd = function(m, S) {
    if (_r(R.beforeSanitizeElements, m, null), m !== S && b(m) === null)
      return Pn && ss(m), !0;
    if (uo(m))
      return an(m), !0;
    const U = Be(C ? C(m) : m.nodeName);
    if (oe = yd(R.uponSanitizeElement, oe, mt, An), _r(R.uponSanitizeElement, m, {
      tagName: U,
      allowedTags: oe
    }), m !== S && b(m) === null)
      return Pn && ss(m), !0;
    if (Hb(m, U))
      return an(m), !0;
    if (En[U] || !(ir.tagCheck instanceof Function && ir.tagCheck(U)) && !oe[U]) {
      const Q = Gb(m, U, S);
      return Q === !1 && _r(R.afterSanitizeElements, m, null), Q;
    }
    if ((v ? v(m) : m.nodeType) === Lt.element && !jb(m) || (U === "noscript" || U === "noembed" || U === "noframes") && at(ZM, m.innerHTML))
      return an(m), !0;
    if ($t && m.nodeType === Lt.text) {
      const Q = lo(m.textContent);
      m.textContent !== Q && (Ti(t.removed, {
        element: m.cloneNode()
      }), m.textContent = Q);
    }
    return _r(R.afterSanitizeElements, m, null), !1;
  }, kd = function(m, S, U) {
    if (ui[S] || sr && S === "patchsrc" || sr && S === "for" && m !== "label" && m !== "output" || Qe && (S === "id" || S === "name") && (U in r || U in Fb))
      return !1;
    const Y = ge[S] || ir.attributeCheck instanceof Function && ir.attributeCheck(S, m);
    if (!(sn && at(dt, S))) {
      if (!(nn && at(Z, S))) {
        if (Y) {
          if (!Ia[S]) {
            if (!at(rn, ds(U, Tr, ""))) {
              if (!((S === "src" || S === "xlink:href" || S === "href") && m !== "script" && qf(U, "data:") === 0 && so[m])) {
                if (!(io && !at(Xe, ds(U, Tr, "")))) {
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
          !(Td(m) && (Ee.tagNameCheck instanceof RegExp && at(Ee.tagNameCheck, m) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(m)) && (Ee.attributeNameCheck instanceof RegExp && at(Ee.attributeNameCheck, S) || Ee.attributeNameCheck instanceof Function && Ee.attributeNameCheck(S, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          S === "is" && Ee.allowCustomizedBuiltInElements && (Ee.tagNameCheck instanceof RegExp && at(Ee.tagNameCheck, U) || Ee.tagNameCheck instanceof Function && Ee.tagNameCheck(U)))
        ) return !1;
      }
    }
    return !0;
  }, Jb = be({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Td = function(m) {
    return !Jb[ms(m)] && at(ts, m);
  }, Yb = function(m, S, U, Y) {
    if (N && typeof u == "object" && typeof u.getAttributeType == "function" && !U)
      switch (u.getAttributeType(m, S)) {
        case "TrustedHTML":
          return re(Y);
        case "TrustedScriptURL":
          return q(Y);
      }
    return Y;
  }, Xb = function(m, S, U, Y) {
    try {
      U ? m.setAttributeNS(U, S, Y) : m.setAttribute(S, Y), uo(m) ? an(m) : Of(t.removed);
    } catch {
      wn(S, m);
    }
  }, xd = function(m) {
    _r(R.beforeSanitizeAttributes, m, null);
    const S = m.attributes;
    if (!S || uo(m))
      return;
    ge = yd(R.uponSanitizeAttribute, ge, li, O);
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ge,
      forceKeepAttr: void 0
    };
    let Y = S.length;
    const Q = Be(m.nodeName);
    for (; Y--; ) {
      const ce = S[Y], Ae = ce.name, je = ce.namespaceURI, vt = ce.value, Mt = Be(Ae), ja = vt;
      let xt = Ae === "value" ? ja : $M(ja);
      if (U.attrName = Mt, U.attrValue = xt, U.keepAttr = !0, U.forceKeepAttr = void 0, _r(R.uponSanitizeAttribute, m, U), xt = U.attrValue, Ie && (Mt === "id" || Mt === "name") && qf(xt, Ze) !== 0 && (wn(Ae, m), xt = Ze + xt), sr && at(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, xt)) {
        wn(Ae, m);
        continue;
      }
      if (Mt === "attributename" && Rf(xt, "href")) {
        wn(Ae, m);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          wn(Ae, m);
          continue;
        }
        if (!on && at(eE, xt)) {
          wn(Ae, m);
          continue;
        }
        if ($t && (xt = lo(xt)), !kd(Q, Mt, xt)) {
          wn(Ae, m);
          continue;
        }
        xt = Yb(Q, Mt, je, xt), xt !== ja && Xb(m, Ae, je, xt);
      }
    }
    _r(R.afterSanitizeAttributes, m, null);
  }, fo = function(m) {
    let S = null;
    const U = md(m);
    for (_r(R.beforeSanitizeShadowDOM, m, null); S = U.nextNode(); )
      if (_r(R.uponSanitizeShadowNode, S, null), bd(S, m), xd(S), pi(S.content) && fo(S.content), (v ? v(S) : S.nodeType) === Lt.element) {
        const Q = k(S);
        pi(Q) && (Ba(Q), fo(Q));
      }
    _r(R.afterSanitizeShadowDOM, m, null);
  }, Ba = function(m) {
    const S = [{
      node: m,
      shadow: null
    }];
    for (; S.length > 0; ) {
      const U = S.pop();
      if (U.shadow) {
        fo(U.shadow);
        continue;
      }
      const Y = U.node, ce = (v ? v(Y) : Y.nodeType) === Lt.element, Ae = g(Y);
      if (Ae)
        for (let je = Ae.length - 1; je >= 0; --je)
          S.push({
            node: Ae[je],
            shadow: null
          });
      if (ce) {
        const je = C ? C(Y) : null;
        if (typeof je == "string" && Be(je) === "template") {
          const vt = Y.content;
          pi(vt) && S.push({
            node: vt,
            shadow: null
          });
        }
      }
      if (ce) {
        const je = k(Y);
        pi(je) && S.push({
          node: null,
          shadow: je
        }, {
          node: je,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(V) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, U = null, Y = null, Q = null;
    if (La = !V, La && (V = "<!-->"), typeof V != "string" && !os(V) && (V = FM(V), typeof V != "string"))
      throw Ln("dirty is not a string, aborting");
    if (!t.isSupported)
      return V;
    rs ? (oe = An, ge = O) : za(m), (R.uponSanitizeElement.length > 0 || R.uponSanitizeAttribute.length > 0) && (oe = yt(oe)), R.uponSanitizeAttribute.length > 0 && (ge = yt(ge)), t.removed = [];
    const ce = Pn && typeof V != "string" && os(V);
    if (ce) {
      Wb(V);
      const vt = C ? C(V) : V.nodeName;
      if (typeof vt == "string") {
        const Mt = Be(vt);
        if (!oe[Mt] || En[Mt])
          throw co(V), Ln("root node is forbidden and cannot be sanitized in-place");
      }
      if (uo(V))
        throw co(V), Ln("root node is clobbered and cannot be sanitized in-place");
      try {
        Ba(V);
      } catch (Mt) {
        throw co(V), Mt;
      }
    } else if (os(V))
      S = gd("<!---->"), U = S.ownerDocument.importNode(V, !0), U.nodeType === Lt.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? S = U : S.appendChild(U), Ba(U);
    else {
      if (!W && !$t && !xr && // eslint-disable-next-line unicorn/prefer-includes
      V.indexOf("<") === -1)
        return N && pe ? re(V) : V;
      if (S = gd(V), !S)
        return W ? null : pe ? z : "";
    }
    S && L && an(S.firstChild);
    const Ae = ce ? V : S;
    try {
      const vt = md(Ae);
      for (; Y = vt.nextNode(); )
        bd(Y, Ae), xd(Y), pi(Y.content) && fo(Y.content);
    } catch (vt) {
      throw ce && (co(V), ki(t.removed, (Mt) => {
        Mt.element && ss(Mt.element);
      })), vt;
    }
    if (ce)
      return ki(t.removed, (vt) => {
        vt.element && ss(vt.element);
      }), $t && Ka(V), V;
    if (W) {
      if ($t && Ka(S), J)
        for (Q = Ur.call(S.ownerDocument); S.firstChild; )
          Q.appendChild(S.firstChild);
      else
        Q = S;
      return (ge.shadowroot || ge.shadowrootmode) && (Q = ee.call(n, Q, !0)), Q;
    }
    let je = xr ? S.outerHTML : S.innerHTML;
    return xr && oe["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && at(XM, S.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + je), $t && (je = lo(je)), N && pe ? re(je) : je;
  }, t.setConfig = function() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    za(V), rs = !0, An = oe, O = ge;
  }, t.clearConfig = function() {
    fi = null, rs = !1, An = null, O = null, N = K, z = "";
  }, t.isValidAttribute = function(V, m, S) {
    fi || za({});
    const U = Be(V), Y = Be(m);
    return kd(U, Y, S);
  }, t.addHook = function(V, m) {
    typeof m == "function" && ct(R, V) && Ti(R[V], m);
  }, t.removeHook = function(V, m) {
    if (ct(R, V)) {
      if (m !== void 0) {
        const S = RM(R[V], m);
        return S === -1 ? void 0 : qM(R[V], S, 1)[0];
      }
      return Of(R[V]);
    }
  }, t.removeHooks = function(V) {
    ct(R, V) && (R[V] = []);
  }, t.removeAllHooks = function() {
    R = jf();
  }, t;
}
var nE = Nm();
function iE({ structureProtectionMode: e = "off" }) {
  const [t] = ue(), r = X(void 0), [n, i] = me(void 0), s = xe((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const y = xm(p);
      if (!y)
        return !1;
      const h = P();
      return e === "protected" ? h && vm(h, y) ? (p.preventDefault(), !0) : !1 : y !== "deleteBackward" && y !== "deleteForward" ? !1 : a(y, p);
    }, a = (p, y) => {
      const h = P(), g = r.current;
      if (g && h && Pf(h, g)) {
        if (s(void 0), y.preventDefault(), p !== g.intent)
          return !0;
        const k = se(g.key) ?? void 0;
        if (g.kind === "verse") {
          if (k) {
            const _ = k.getParent(), v = k.getPreviousSibling(), C = k.getNextSibling();
            k.remove(), v ? Mm(v) : C && M(C) ? C.select(0, 0) : _?.selectStart();
          }
        } else g.kind === "selection" ? A(h) && (wu(h), h.removeText()) : ut(k) && _M(k);
        return !0;
      }
      if (!h)
        return !1;
      const b = CM(h, p);
      if (b) {
        if (b.kind === "verse") {
          const k = Gp();
          k.add(b.node.getKey()), Br(k);
        } else {
          const k = Bn();
          k.anchor.set(b.node.getKey(), 0, "element"), k.focus.set(b.node.getKey(), b.node.getChildrenSize(), "element"), Br(k);
        }
        return s({ key: b.node.getKey(), kind: b.kind, intent: p }), y.preventDefault(), !0;
      }
      if (A(h) && !h.isCollapsed() && Fu(h)) {
        const k = h.getNodes().filter(ke).map((C) => C.getKey()), { anchor: _, focus: v } = h;
        return s({
          kind: "selection",
          intent: p,
          key: k[0],
          anchor: { key: _.key, offset: _.offset, type: _.type },
          focus: { key: v.key, offset: v.offset, type: v.type }
        }), y.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const y = P();
      return !y || !Pi(y) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, y) => {
      if (!p)
        return !1;
      const h = nE.sanitize(p), g = new DOMParser().parseFromString(h, "text/html"), b = SM(Bk(t, g)), k = P();
      return A(k) && k.insertNodes(b), y.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const y = P();
      return y && Pi(y) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const y = P();
      return y && Pi(y) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Pf(P(), p) || s(void 0);
      });
    };
    return $e(
      t.registerCommand($r, o, Pe),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(hr, c, _e),
      t.registerCommand(Yt, d, Pe),
      t.registerCommand(xk, c, Pe),
      t.registerCommand(wl, u, Pe),
      t.registerCommand(wi, c, Pe),
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
const Aw = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function sE({ textDirection: e }) {
  const [t] = ue();
  return oE(t, e), null;
}
function oE(e, t) {
  j(() => (Vf(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Vf(e, t);
  })), [e, t]);
}
function Vf(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function aE() {
  const [e] = ue();
  return cE(e), null;
}
function cE(e) {
  j(() => {
    if (!e.hasNodes([Se, Rt, Oe, Le, bt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return $e(
      e.registerNodeTransform(Le, lE),
      e.registerNodeTransform(Le, (t) => uE(t, e)),
      e.registerNodeTransform(bt, Wf),
      e.registerNodeTransform(Rt, Wf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(bt, (t) => {
        Os(Jn("va"), t), Os(Jn("vp"), t);
      })
    );
  }, [e]);
}
function lE(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || B(r) || F(n) || F(r) || Me(n) || Me(r) || Ve(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Ve(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
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
  Fe(n))
    return;
  if (ke(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ke(r) && du(e);
}
function uE(e, t) {
  const r = e.getParent();
  !Ve(r) || !e.isAttached() || Bc(t, e.getKey()) && !Bc(t, r.getKey()) && r.insertAfter(e);
}
function Wf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Me(t); )
    t = t.getLastChild();
  (F(t) || M(t) && Me(t.getParent())) && e.insertBefore(Te(" "));
}
function Ea(e) {
  if (!B(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !Ys(i)))
      return;
    const n = t.getParent();
    if (!n)
      return;
    if (!I(n) || !n.isInline())
      return e;
    t = n;
  }
}
function dE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (I(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function fE() {
  const e = P();
  if (!(!A(e) || !e.isCollapsed()))
    return Ea(dE(e.anchor));
}
function pE(e) {
  const t = P();
  let r;
  return A(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = wm(e.target)), r ? Ea(we(r, B)) : void 0;
}
function wm(e) {
  const t = Ck(e)?.anchorNode;
  if (Bp(t))
    return Wi(t) ?? void 0;
}
function hE(e) {
  if (P())
    return;
  const t = wm(e);
  return t ? Ea(we(t, B)) : void 0;
}
function Hf(e) {
  const t = we(e.getNode(), B);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function gE() {
  const e = P();
  if (!A(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = Hf(t), i = Hf(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const mE = 500;
function yE(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function bE() {
  const e = P();
  if (!A(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (I(n))
    return Ea(n.getChildAtIndex(t.offset));
}
function kE() {
  const [e] = ue(), t = Uu(fE), r = X(void 0);
  return j(() => {
    const n = (i) => {
      Ct(At), Er(e, At), t(i);
    };
    return $e(e.registerCommand(
      $r,
      (i) => (r.current = yE(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      _e
    ), e.registerCommand(Ft, () => {
      if (r.current !== void 0 && performance.now() - r.current < mE) {
        const o = bE();
        if (o)
          return n(o), !1;
      }
      if (gE())
        return Ct(At), Er(e, At), !1;
      const s = hE(e.getRootElement());
      return s && n(s), !1;
    }, jn), e.registerCommand(ua, (i) => {
      const s = pE(i);
      return s && n(s), !1;
    }, jn));
  }, [e, t]), null;
}
function TE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = MS({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return E(vS, { trigger: e, items: i });
}
function xE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = Ge(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? E(SE, { trigger: e, harness: i }) : E(TE, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const CE = [" ", "*"];
function _E(e, t) {
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
function SE({ trigger: e, harness: t }) {
  const [r] = ue(), [n, i] = me(void 0), s = X({ query: "", options: [] }), o = X(0), a = xe((f, p, y) => {
    const h = p.find((g) => g.kind === "note" && g.marker === f);
    if (h) {
      t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const g = P();
      A(g) && g.insertText(`${e}${f}${y ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => $e(r.registerCommand($r, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const h = s.current.query;
        return h ? (a(h, n.items, !1), Jp(() => {
          const g = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(g ? {
            trigger: "backslash",
            hasTextSelection: g.hasTextSelection,
            items: t.getItems(g),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const g = P();
          A(g) && g.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const y = s.current.query;
      if (n.hasTextSelection) {
        const h = n.items.find((g) => g.marker === y);
        return h && t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(y, n.items, !0), !0;
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
  }, Pe), r.registerCommand(Yp, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Pr)), [r, e, t, n, a]);
  const c = xe(() => i(void 0), []), l = xe((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = xe((f) => {
    const { markerMenuItem: p, applyOpts: y } = f;
    t.apply(p, y);
  }, [t]), u = Ge(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    _E(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && E(Vg, { isOpen: !0, children: ({ placement: f }) => E(
    Gg,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? CE : void 0 },
    n.session
  ) });
}
function vE(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (r) => D.repeat(r.length));
}
function ME(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
function EE(e) {
  return e.replace(/ {2,}/g, " ");
}
let Go;
function AE(e) {
  e && (Go = e);
}
function tl(e) {
  return no(e);
}
function PE(e, t) {
  return e.isEmpty() ? zp : Om(e.toJSON(), t);
}
function Om(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && ga(r[0]) && (!r[0].children || r[0].children.length === 0))
    return zp;
  if (r.some(zC)) {
    Go?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Rm(r), i = ar(n, t);
  return i ? { type: pr, version: fr, content: i } : void 0;
}
function NE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), De({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function wE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return De({
    type: Wt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function OE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Hh(r, a, c), De({
    type: Wt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function RE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Hh(t, o, a), De({
    type: bt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function qE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !tl(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(D) && (t[0] = a.slice(1));
  }
  return De({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function $E(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return De({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function IE(e, t) {
  const { unknownAttributes: r } = e;
  return De({ type: kg, ...r, content: t });
}
function LE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return De({ type: Cg, marker: r, ...n, content: t });
}
function DE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return De({
    type: Sg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function UE(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function FE(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return De({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Si(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return De({
    type: t,
    marker: r === "" ? void 0 : r,
    ...rg({ sid: n, eid: i, ...s }, o)
  });
}
function zE(e) {
  return e.text;
}
function KE(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return De({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function BE(e) {
  const { marker: t } = e;
  return {
    type: Io,
    marker: t === "" ? void 0 : t
  };
}
function Gf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function jE(e, t, r, n, i) {
  const s = gr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = Si({
      type: s,
      marker: Ei,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = Si({
      type: s,
      marker: Vn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = Si({
      type: s,
      marker: Vn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Si({
      type: s,
      marker: Ei
    });
    i.push(l);
  }
  (!n || !Sh(n)) && t.forEach((l) => {
    const d = Si({
      type: s,
      marker: Ei,
      eid: l
    });
    i.push(d);
  });
}
function ar(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, p = a, y = a, h = a, g = a;
    switch (a.type) {
      case Kt.getType():
        i.push(
          NE(
            l,
            ar(l.children, t)
          )
        );
        break;
      case Lr.getType():
        i.push(wE(a));
        break;
      case Wt.getType():
        i.push(
          OE(
            d,
            ar(d.children, t)
          )
        );
        break;
      case Rt.getType():
      case bt.getType():
        i.push(RE(a));
        break;
      case Se.getType():
        i.push(
          qE(
            u,
            ar(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case st.getType():
        i.push(
          $E(
            f,
            ar(f.children, t)
          )
        );
        break;
      case ai.getType():
        i.push(
          IE(
            a,
            ar(a.children, t)
          )
        );
        break;
      case Yi.getType():
        i.push(
          LE(
            a,
            ar(a.children, t)
          )
        );
        break;
      case Xi.getType():
        i.push(
          DE(
            a,
            ar(a.children, t)
          )
        );
        break;
      case Oe.getType(): {
        const b = ar(
          p.children,
          t,
          p.caller
        );
        i.push(
          FE(
            p,
            tl(t) && p.category === void 0 ? UE(b) : b
          )
        );
        break;
      }
      case Yr.getType():
      case Jr.getType():
      case dr.getType():
      case Xp.getType():
      case kr.getType():
        break;
      case lt.getType():
        if (s = ar(
          h.children,
          t,
          r,
          n
        ), s) {
          const b = h.typedIDs[pn];
          if (b)
            jE(s, b, o, e[c + 1], i), o = b;
          else {
            const k = s.shift();
            k && (typeof k == "string" ? Gf(i, k) : i.push(k)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case gr.getType():
        i.push(Si(a));
        break;
      case Le.getType():
        if (y.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Js(y.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        y.text !== D && !y.text.startsWith($l) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        y[Hs]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || y.text !== jt(r))) {
          let b = zE(y);
          tl(t) && (n && b.startsWith(D) && (b = b.slice(1)), b = EE(ME(b))), Gf(i, b);
        }
        break;
      case oi.getType():
        i.push(
          KE(
            g,
            ar(g.children, t)
          )
        );
        break;
      case Zr.getType():
        i.push(BE(a));
        break;
      case Qi.getType():
        Go?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Go?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Rm(e) {
  const t = e.findIndex((r) => ga(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Rm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const So = {
  initialize: AE,
  deserializeEditorState: PE
}, VE = /^sd\d*$/, WE = /* @__PURE__ */ new Set([
  ...Object.entries(Nc).filter(
    ([e, t]) => t.category === x.TitlesHeadings && t.type === T.Paragraph && !VE.test(e)
  ).map(([e]) => e),
  "qa"
]);
function HE(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Bl(i) || jh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!fx(i)) {
      t && Jo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Vl(i) && WE.has(i.marker) && !Jo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    qm(i.children, t).forEach((s) => {
      const o = GE(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = JE(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function qm(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if ($m(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Sh(i)) {
      const s = qm(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Jf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Jf(i, c.nodes)] });
      });
      return;
    }
    t && Jo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Jf(e, t) {
  return { ...e, children: t };
}
function $m(e) {
  return Og(e) && e.number !== "";
}
function Jo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => $m(r) || Jo(r)) : !1;
}
function GE(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function JE(e) {
  return {
    type: Lo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Pg
  };
}
const Yf = Dm([]), YE = {
  type: Xp.getType(),
  version: 1
};
let zu = [], ie, Zn, Im, wt;
function XE(e, t) {
  zu = [], eA(e), tA(t);
}
function QE(e = 0) {
}
function ZE(e, t) {
  ie = t ?? Ui();
  let r;
  return e ? (e.type !== pr && wt?.warn(`This USJ type '${e.type}' didn't match the expected type '${pr}'.`), e.version !== fr && wt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${fr}'.`
  ), e.content.length > 0 ? (r = sl(zr(e.content)), $s(ie) && (r = HE(r, wt))) : r = [Yf]) : r = [Yf], Im?.(zu), {
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
function eA(e) {
  e && (Zn = e), e?.addMissingComments && (Im = e.addMissingComments);
}
function tA(e) {
  e && (wt = e);
}
function Lm() {
  return no(ie);
}
function rA(e, t) {
  let { marker: r } = e;
  r !== As && wt?.warn(`Unexpected book marker '${r}'!`), r = r ?? As;
  const { code: n } = e;
  (!n || !Kt.isValidBookCode(n)) && wt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  ie?.markerMode === "editable" || ie?.markerMode === "visible" ? i.push(
    Pt("marker", ze(r) + " " + n + D)
  ) : ie?.hasGutterParaMarkers && i.push(Pt("marker", ze(r) + D, !0)), i.push(...t);
  const s = He(e, VT);
  return De({
    type: Kt.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Ph
  });
}
function nA(e) {
  let { marker: t } = e;
  t !== Ro && wt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Ro;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = He(e, WT);
  let a;
  ie?.markerMode === "visible" && (a = !0);
  const c = [
    St(Zt(t, r) ?? "")
  ];
  return ie?.markerMode === "editable" && TA(i, s, c), ie?.markerMode === "editable" ? De({
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
    version: wh
  }) : De({
    type: Lr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Ih
  });
}
function iA(e) {
  let { marker: t } = e;
  t !== qo && wt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? qo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = ($S(ie) ?? Rt).getType(), c = ie?.markerMode === "editable" ? zh : wg;
  let l, d;
  ie?.markerMode === "editable" ? l = Zt(t, r) : ie?.markerMode === "visible" && (d = !0);
  const u = He(e, sx);
  return De({
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
function sA(e, t = [], r = !1) {
  let { marker: n } = e;
  Se.isValidMarker(n, Zn?.extraValidMarkers) || wt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ie?.markerMode === "editable") {
    const [a] = t;
    $i(a) ? a.text = D + a.text : a && t.unshift(St(D));
  }
  t.length === 0 && t.push(St(er)), rl(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = He(e, JT);
  return s || mA(n, o, i), s || nl(e.marker ?? "", i, !1, r), De({
    type: Se.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: $h
  });
}
function Dm(e) {
  return {
    type: Or.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Uh
  };
}
function oA(e, t = []) {
  let { marker: r } = e;
  st.isValidMarker(r, Zn?.extraValidMarkers) || wt?.warn(`Unexpected para marker '${r}'!`), r = r ?? Ut;
  const n = [];
  if (vn(ie) && (ie?.markerMode === "editable" ? n.push(
    _t(r),
    St(D, Ir, "token")
  ) : (ie?.markerMode === "visible" || ie?.hasGutterParaMarkers) && n.push(
    Pt(
      "marker",
      ze(r) + D,
      ie?.hasGutterParaMarkers
    )
  )), n.push(...t), Lm()) {
    const s = n.find(
      (o) => !Yl(o) && !($i(o) && o.text === D)
    );
    $i(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = He(e, nx);
  return De({
    type: st.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Fh
  });
}
function Ku() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function aA(e, t = []) {
  const r = He(e, cC);
  return De({
    ...Ku(),
    type: ai.getType(),
    unknownAttributes: r,
    children: t,
    version: Tg
  });
}
function cA(e, t = []) {
  const r = He(e, dC), n = e.marker ?? Uc, i = [];
  return ie?.markerMode === "editable" ? i.push(
    _t(n),
    St(D, Ir, "token")
  ) : (ie?.markerMode === "visible" || ie?.hasGutterParaMarkers) && i.push(
    Pt(
      "marker",
      ze(n) + D,
      ie?.hasGutterParaMarkers
    )
  ), i.push(...t), De({
    ...Ku(),
    type: Yi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: _g
  });
}
function lA(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Fc, a = fg(o, i) ?? o;
  ie?.markerMode === "editable" ? s.push(
    _t(a),
    St(D, Ir, "token")
  ) : (ie?.markerMode === "visible" || ie?.hasGutterParaMarkers) && s.push(
    Pt(
      "marker",
      ze(a) + D,
      ie?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = He(
    e,
    pC
  );
  return De({
    ...Ku(),
    type: Xi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: vg
  });
}
function uA(e, t) {
  const r = bx(t);
  let n = () => {
  };
  return Zn?.noteCallerOnClick && (n = Zn.noteCallerOnClick), De({
    type: dr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Dg
  });
}
function dA(e, t) {
  let { marker: r } = e;
  Oe.isValidMarker(r, Zn?.extraValidMarkers) || wt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Dl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : ku(ie?.noteMode), a = He(e, cT), c = ie?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  ie?.markerMode === "editable" ? (l = _t(r, "opening", !1, c), s || (d = _t(r, "closing"))) : ie?.markerMode === "visible" && (l = Pt("marker", ze(r) + " "), s || (d = Pt("marker", it(r))));
  const u = [];
  let f;
  if (l && u.push(l), ie?.markerMode === "editable" && !o)
    f = St(jt(i), void 0, c), u.push(f), kA(n, u), u.push(...t);
  else {
    const p = St(D, Ir, "token");
    f = uA(i, t), u.push(f, p, ...t.flatMap(fA(p)));
  }
  return d && u.push(d), De({
    type: Oe.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: mh
  });
}
function fA(e) {
  return (t) => Ch(t) ? [t] : [t, e];
}
function pA(e) {
  let { marker: t } = e;
  (!t || !gr.isValidMarker(t, Zn?.extraValidMarkers)) && wt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = He(e, Ll), s = ng(e);
  return De({
    type: gr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: ph
  });
}
function Xf(e, t = []) {
  return {
    type: lt.getType(),
    typedIDs: { [pn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function hA(e, t) {
  const { marker: r } = e, n = e.type, i = He(e, FT), s = [];
  if (ie?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = pg(
      n,
      r,
      i
    );
    o && s.push(Pt("marker", o)), a && s.push(Pt("attribute", a)), s.push(...t), c && s.push(Pt("attribute", c)), l && s.push(Pt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    $i(o) && (o.mode = "token");
  }), De({
    type: oi.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Mh
  });
}
function gA(e) {
  return {
    type: Zr.getType(),
    marker: e,
    text: Ts(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ie?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: yg
  };
}
function _t(e, t = "opening", r = !1, n = "normal") {
  return {
    type: kr.getType(),
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
    type: Le.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Hs] = { textType: t }), n;
}
function Pt(e, t, r = !1) {
  const n = {
    type: Jr.getType(),
    text: t,
    textType: e,
    version: xh
  };
  return r && (n[Hs] = { [zl.key]: !0 }), n;
}
function Ls(e, t) {
  return {
    type: Yr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Eh
  };
}
function rl(e, t, r = !1) {
  ie?.markerMode === "editable" ? t.push(_t(e, "opening", r)) : ie?.markerMode === "visible" && t.push(Pt("marker", ze(e, r)));
}
function nl(e, t, r = !1, n = !1) {
  ie?.markerMode === "editable" ? r ? t.push(_t("", "selfClosing")) : t.push(_t(e, "closing", n)) : ie?.markerMode === "visible" && t.push(
    Pt(
      "marker",
      r ? it("") : it(e, n)
    )
  );
}
function mA(e, t, r) {
  if (ie?.markerMode !== "editable" || !t) return;
  const n = Mr(t, pa(e));
  n && r.push(St(n, "attribute"));
}
function Qf(e, t) {
  if (e.type !== "ms" || ie?.markerMode !== "editable" && ie?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = He(e, Ll), o = ig(
    n,
    i,
    s,
    ng(e)
  ), a = Mr(o, ha(r ?? ""));
  if (!a) return;
  const c = D + a;
  ie?.markerMode === "editable" ? t.push(St(c, "attribute")) : t.push(Pt("attribute", c));
}
function yA(e, t) {
  const r = e.marker ?? "";
  if (ie?.markerMode === "editable") {
    const n = [];
    rl(r, n), Qf(e, n), nl(r, n, !0), t.push(Ls("milestone", n));
  } else
    rl(r, t), Qf(e, t), nl(r, t, !0);
}
function Zf(e, t, r) {
  t !== void 0 && r.push(
    Ls(e, [
      _t(e, "opening"),
      St(D + t, "attribute"),
      _t(e, "closing")
    ])
  );
}
function bA(e, t) {
  ie?.markerMode === "editable" && (Zf("va", e.altnumber, t), Zf("vp", e.pubnumber, t));
}
function kA(e, t) {
  e !== void 0 && t.push(
    Ls("cat", [
      _t("cat", "opening"),
      St(D + e, "attribute"),
      _t("cat", "closing")
    ])
  );
}
function TA(e, t, r) {
  e !== void 0 && r.push(
    Ls("ca", [
      _t("ca", "opening"),
      St(D + e, "attribute"),
      _t("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Ls("cp", [
      _t("cp", "opening"),
      St(D + t, "attribute")
    ])
  );
}
function ep(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function xA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function tp(e, t) {
  t.marker === Vn && t.sid !== void 0 && e.push(t.sid), t.marker === Ei && t.eid !== void 0 && xA(e, t.eid);
}
function il(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Xf(o, [...n])] : o, c = e[i];
  tp(n, c);
  const l = il(
    e.slice(i + 1, s),
    ep(t, i + 1),
    c.marker === Vn,
    n
  ), d = Xf(l, [...n]), u = e[s];
  tp(n, u);
  const f = il(
    e.slice(s + 1),
    ep(t, s + 1),
    u.marker === Vn,
    n
  );
  return [...a, d, ...f];
}
function zr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(St(Lm() ? vE(i) : i));
    else if (!i.type)
      wt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Kt.getType():
          n.push(rA(i, zr(i.content)));
          break;
        case Wt.getType():
          n.push(nA(i));
          break;
        case bt.getType():
          ie?.hasSpacing || n.push(YE), n.push(iA(i)), bA(i, n);
          break;
        case Se.getType():
          n.push(
            sA(i, zr(i.content, !0), t)
          );
          break;
        case st.getType():
          n.push(oA(i, zr(i.content)));
          break;
        case Oe.getType():
          n.push(dA(i, zr(i.content)));
          break;
        case gr.getType():
          hh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && zu?.push(i.sid)), n.push(pA(i)), yA(i, n);
          break;
        case Zr.getType():
          n.push(gA(i.marker ?? ""));
          break;
        case kg:
          n.push(aA(i, zr(i.content)));
          break;
        case Cg:
          n.push(cA(i, zr(i.content)));
          break;
        case Sg:
          n.push(lA(i, zr(i.content)));
          break;
        default:
          wt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(hA(i, zr(i.content)));
      }
  }), il(n, r);
}
function sl(e) {
  const t = e.findIndex(
    (n) => Bl(n) || jh(n) || Vl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    uC(n)
  );
  if (t >= 0) {
    const n = sl(e.slice(0, t)), i = e[t], s = sl(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Og(n)))
    return [Dm(e)];
  return e;
}
const mr = {
  initialize: XE,
  reset: QE,
  serializeEditorState: ZE
};
function Um(e) {
  if (e && !w(e)) {
    if (M(e)) return e;
    if (I(e))
      for (const t of e.getChildren()) {
        const r = Um(t);
        if (r) return r;
      }
  }
}
function CA() {
  const e = P();
  if (!A(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((M(t) && !w(t) ? Xn(t) : void 0) && M(t)) {
      const i = Te(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Ii(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Um(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(D) ? D : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return M(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Fm(e)) {
    if (!Xn(t)) continue;
    Ii(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(D) && r.setTextContent(n.slice(D.length));
  }
  return !0;
}
function Fm(e) {
  const [t, r] = Al(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!M(a) || w(a) || ae(a, fe) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function zm(e) {
  let t = e;
  for (; F(t) || Me(t); ) t = t.getParent();
  return t;
}
function Km(e) {
  const t = zm(e.getParent());
  return ut(t) ? t : void 0;
}
function _A() {
  const e = P();
  if (!A(e)) return !1;
  const t = e.focus.getNode();
  return Xn(t) ? !!Km(t) : !1;
}
function Bm(e) {
  const t = Te(""), r = e.getNode(), n = e.offset;
  if (M(r))
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
    if (F(o)) Ii(t, { renderGlyphs: !0 });
    else if (!Me(o) || !SA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function SA(e, t) {
  const r = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (r.length === 0)
    return t.insertAfter(e), !0;
  const n = P();
  if (!A(n)) return !1;
  const i = t.insertNewAfter(n, !1);
  return i ? (i.append(...r), t.insertAfter(e), !0) : !1;
}
function jm(e) {
  const t = e.anchor.getNode();
  if (w(t) && !au(t, e.anchor.offset)) {
    const r = t.getParent();
    if (F(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = P();
      return A(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function Vm() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = jm(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!M(r) || w(r) || !Xn(r)) return !1;
  const n = Km(r);
  if (!n) return !1;
  const { moving: i } = Bm(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Me(o); ) o = o.getFirstChild() ?? void 0;
  return F(o) ? Ta(o) : s.select(0, 0), !0;
}
const qt = String.raw`\w-`, Wm = "a-z0-9", vA = `[a-z][${Wm}]*`, MA = new RegExp(
  String.raw`^\\(\+?[${qt}]+)[ \u00A0]$`
), Hm = new RegExp(String.raw`^\\(\+?[${qt}]+)$`), EA = new RegExp(String.raw`^\\\+?[${qt}]*\*$`), AA = new RegExp(
  String.raw`^\\(\+?[${qt}]+)(?:[ \u00A0]|$)`
), PA = new RegExp(
  String.raw`^\\(\+?)([${qt}]+)`
), NA = new RegExp(
  String.raw`\\\+?[${qt}]+(?:\\?\*|[ \u00A0])`
), wA = new RegExp(
  String.raw`\\\+?[${qt}]*$`
), OA = new RegExp(
  String.raw`^\\(${vA})( |$)`
), RA = new RegExp(
  String.raw`\\[${Wm}+*]*$`,
  "i"
), ht = "￼";
function Gm(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== ht ? e.slice(1) : e;
}
function rp(e) {
  return Yl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Jm(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = mr.serializeEditorState(
    {
      type: pr,
      version: fr,
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
  for (; rp(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== jt(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && rp(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function Ym(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function Xm(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([d]) => d !== "closed")
  ), o = mr.serializeEditorState(
    {
      type: pr,
      version: fr,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((d) => d.type === Oe.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function Qm(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = mr.serializeEditorState(
    { type: pr, version: fr, content: [s, ...r] },
    n
  ).root.children;
  if (!Bl(o)) return { failure: "shape" };
  const c = Yh(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function yo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function ps(e, t) {
  wA.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += ht;
}
function Xt(e) {
  return e.replaceAll(D, " ");
}
function qA(e, t, r = !1) {
  if (no(t)) return Xt(e);
  if (e === D) return " ";
  const n = r && e.startsWith(D), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(D, "~");
}
function Cs(e) {
  const t = e.getTextContent();
  return Dr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Bu(e, t) {
  const r = e[t];
  if (!et(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ya(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Zm(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function ju(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Ps(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Vu(e) {
  return !!e.getUnknownAttributes();
}
function Aa(e, t) {
  const r = t(e)?.type;
  return r === T.Milestone || r === void 0 && Fl(e);
}
function Wu(e, t) {
  return et(e) ? !Aa(e.getMarker(), t) : B(e) || Ve(e) ? !0 : Ue(e) ? Vu(e) : F(e) ? ey(e, t) : !1;
}
function ey(e, t) {
  if (wx(e)) return !0;
  const r = e.getMarker();
  return bT(r) || t(r) !== void 0 || $A(e) && !IA(e) ? !1 : !LA(e);
}
function $A(e) {
  const t = e.getParent();
  return t !== null && Bt(t) !== void 0;
}
function IA(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function LA(e) {
  const t = e.getChildren().filter((i) => w(i) && i.getMarker() === e.getMarker()).filter(w);
  if (t.some((i) => !Xr(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const Gt = "", Jt = "";
function np(e) {
  return e.flatMap((t) => Fe(t) ? t.getChildren() : [t]);
}
function ys(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (et(s)) {
      const o = Bu(e, i);
      Aa(s.getMarker(), r) && Zm(o) ? (t.push(
        Gt,
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
      ), ys(np(o), t, r), t.push(Jt)) : t.push(ht), i += o.length;
    } else if (Ue(s)) {
      const o = ju(e, i);
      Vu(s) ? t.push(ht) : (t.push(
        Gt,
        "verse",
        Xt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ys(np(o), t, r), t.push(Jt)), i += o.length;
    } else w(s) ? t.push(Gt, "marker", Xt(s.getTextContent()), Jt) : en(s) ? t.push(Gt, "unmatched", Xt(s.getTextContent()), Jt) : Wu(s, r) ? t.push(ht) : ni(s) ? t.push(" ") : M(s) ? t.push(
      Xt(
        n ? Gm(Cs(s)) : Cs(s)
      )
    ) : F(s) ? (t.push(Gt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ys(s.getChildren(), t, r, !0), t.push(Jt)) : I(s) ? (t.push(Gt, s.getType()), ys(s.getChildren(), t, r), t.push(Jt)) : t.push(ht);
  }
}
function Rr(e, t) {
  const r = [];
  return ys(e, r, t), r.join("");
}
function nr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Ar(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function hn(e) {
  return e.type ?? "";
}
function ty(e, t, r) {
  return t === "closing" ? it(e, r) : t === "selfClosing" ? it("") : ze(e, r);
}
function bc(e, t) {
  const r = e[t];
  if (!(!r || hn(r) !== "attribute-run"))
    return nr(r) ?? [];
}
function qr(e, t) {
  const r = [];
  return bs(e, r, t), r.join("");
}
function bs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = hn(s);
    if (o === "ms") {
      const l = s, d = bc(e, i + 1);
      d && Aa(l.marker ?? "", r) ? (t.push(
        Gt,
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
      ), bs(d, t, r), t.push(Jt), i += 1) : t.push(ht);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(ht);
        continue;
      }
      t.push(
        Gt,
        "verse",
        Xt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = bc(e, i + 1 + d);
      for (; u; )
        bs(u, t, r), d++, u = bc(e, i + 1 + d);
      t.push(Jt), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Gt,
        "marker",
        Xt(
          ty(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Jt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Gt, "char", JSON.stringify(l.unknownAttributes ?? null)), bs(nr(s) ?? [], t, r, !0), t.push(Jt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(ht);
      continue;
    }
    if (o === "unmatched") {
      t.push(Gt, "unmatched", Xt(Ar(s) ?? "")), t.push(Jt);
      continue;
    }
    const a = Ar(s);
    if (a !== void 0) {
      t.push(Xt(n ? Gm(a) : a));
      continue;
    }
    const c = nr(s);
    c ? (t.push(Gt, o), bs(c, t, r), t.push(Jt)) : t.push(ht);
  }
}
function kn(e) {
  let t = 0;
  for (const r of e) {
    const n = nr(r);
    if (n) {
      t += kn(n);
      continue;
    }
    const i = Ar(r);
    if (i !== void 0)
      for (const s of i) s === ht && t++;
  }
  return t;
}
function Ds(e, t, r, n, i) {
  Tn(e.getChildren(), t, r, n, i);
}
function Tn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (w(a))
      yo(t, a, Xt(a.getTextContent()));
    else if (et(a)) {
      s();
      const c = Bu(e, o);
      Aa(a.getMarker(), r) && Zm(c) ? Tn(c, t, r, n) : ps(t, [a, ...c]), o += c.length;
    } else if (B(a) || Ve(a))
      s(), ps(t, [a]);
    else if (Ue(a)) {
      s();
      const c = ju(e, o);
      Vu(a) ? ps(t, [a, ...c]) : (yo(t, a, Xt(Cs(a))), Tn(c, t, r, n)), o += c.length;
    } else if (F(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && ey(a, r) ? ps(t, [a]) : Ds(a, t, r, n, { pending: !0 });
    else if (ni(a))
      s(), yo(t, a, " ");
    else if (M(a)) {
      const c = Dr(a) || ae(a, fe) === "attribute", l = s() && !c;
      yo(
        t,
        a,
        c ? Xt(Cs(a)) : qA(Cs(a), n, l)
      );
    } else I(a) ? Ds(a, t, r, n, i) : (s(), ps(t, [a]));
  }
}
function ry(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== T.Unknown && n !== T.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ve(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Ds(e, i, t, r), i;
}
function Pa(e, t, r, n) {
  for (const i of t) {
    const s = ry(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Na(e, t) {
  let r = 0;
  const n = (i) => {
    if (M(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(ht);
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
function Us(e, t = []) {
  for (const r of e)
    Ue(r) ? t.push(r) : I(r) && Us(r.getChildren(), t);
  return t;
}
function wa(e) {
  let t = 0;
  const r = (n) => {
    if (M(n))
      for (const i of n.getTextContent()) i === ht && t++;
    else I(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function tn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === ht && t++;
    else r.content && (t += tn(r.content));
  return t;
}
function DA(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), I(s) && Ds(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const Fs = /\s/;
function ny(e) {
  return e.filter(Oa).length;
}
function Oa(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return M(t) && !w(t) && ae(t, fe) === "attribute";
}
function UA(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return w(t) || Oa(e);
}
function ip(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Oa(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      Fs.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function FA(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !I(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = se(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function Ra(e, t, r, n) {
  const { key: i, offset: s } = FA(
    e,
    t,
    r,
    n
  ), o = ip(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !UA(a) ? ip(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: ny(t.spans) };
}
function kc(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return w(t) && t.getMarkerSyntax() !== "opening";
}
function zA(e) {
  const t = se(e.key);
  if (!w(t)) return !1;
  const r = t.getParent();
  return F(r) ? (r.selectNext(0, 0), !0) : !1;
}
function KA(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Ue(t) ? ju(r, n) : et(t) ? Bu(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function iy(e, t, r) {
  const { text: n, spans: i } = e, s = ny(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && !kc(u);
    if (!(o && Oa(u))) {
      if (d) {
        if (!p) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let y = 0; y < f; y++) {
        const h = n[u.start + y];
        if (c === 0 && (l === 0 || !Fs.test(h))) {
          if (p) {
            a = { key: u.key, offset: y };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? Fs.test(h) || c-- : l--;
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
    if (u && kc(u) && zA(u) || u?.isSentinel && KA(u)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !kc(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const u = se(a.key);
    if (u && M(u)) {
      u.select(a.offset, a.offset);
      return;
    }
  }
  r.find(I)?.selectStart();
}
function sy(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(I)?.selectStart();
      return;
    }
    iy(
      DA(e, n, i, s),
      t,
      e
    );
  }
}
function oy(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    BA(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  Tn(e, o, n, i), iy({ text: o.text, spans: o.spans }, t, e);
}
function BA(e, t) {
  const r = e.find(I);
  if (r && Wu(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function ay(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Pa(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = P();
  if (A(c)) {
    for (let h = c.anchor.getNode(); h; h = h.getParent())
      if (e.some((g) => g.is(h))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Ra(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = Gr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (tn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = mr.serializeEditorState(
    { type: pr, version: fr, content: l },
    r
  );
  if (qr(d.root.children, n) === Rr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((h) => Kn(h));
  if (wa(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Us(e).map((h) => ({
    number: h.getNumber(),
    sid: h.getSid()
  })), p = e[0];
  u.forEach((h) => p.insertBefore(h)), Na(u, s.sentinels), e.forEach((h) => h.remove());
  const y = Us(u);
  for (let h = 0; h < f.length && h < y.length; h++)
    y[h].getNumber() === f[h].number && y[h].setSid(f[h].sid);
  return sy(
    u,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((h) => h.getKey()))
  ), !0;
}
function cy(e) {
  if (e.getIsCollapsed() !== !1 || !Oe.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!w(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(Tt(n) || M(n) && n.getTextContent() === jt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!w(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function ly(e, t, r) {
  const n = cy(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Tn(n, i, t, r), { out: i, contentNodes: n };
}
function uy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(ht)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function jA(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = ly(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = P();
  if (A(d)) {
    for (let $ = d.anchor.getNode(); $; $ = $.getParent())
      if (e.is($)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Ra(
      [e],
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const u = Gr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (tn(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = u;
  if (u.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], y = uy(p), h = Ym(e, p);
  if (h)
    return VA(
      e,
      h,
      y,
      o.sentinels,
      t,
      l
    );
  const g = Jm(e, p, y, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (kn(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== y;
  if (b && e.setCategory(y), qr(g.children, n) === Rr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const k = g.children.map(($) => Kn($));
  if (wa(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const _ = a[0];
  if (_)
    k.forEach(($) => _.insertBefore($));
  else {
    const $ = e.getChildren().find((N) => w(N) && N.getMarkerSyntax() === "closing");
    k.forEach((N) => $ ? $.insertBefore(N) : e.append(N));
  }
  Na(k, o.sentinels);
  const v = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    v.has($.getKey()) || $.remove();
  });
  const C = cy(e) ?? k;
  return oy(
    C,
    c,
    l,
    n,
    r,
    v
  ), !0;
}
function VA(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = Xm(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || kn(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const d = l.map((y) => Kn(y)), [u] = d;
  if (!B(u) || wa(d) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const y of d)
    f.insertAfter(y), f = y;
  Na(d, i);
  const p = e.getChildren();
  return e.append(...u.getChildren()), p.forEach((y) => y.remove()), e.setCaller(u.getCaller()).setCategory(u.getCategory()).setUnknownAttributes(u.getUnknownAttributes()).setIsCollapsed(u.getIsCollapsed()), u.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Wc(e, a) : Kg(e, { isContentChange: !0 })), !0;
}
function dy(e) {
  const t = e.getChildren();
  return Gl(t[0]) ? t.slice(1) : t;
}
function Hu(e, t, r) {
  const n = dy(e), i = { text: "", spans: [], sentinels: [] };
  return Tn(n, i, t, r), { out: i, contentNodes: n };
}
const WA = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${Ut}(?=[\\s\\u200B\\\\|]|$)`
);
function fy(e, t) {
  const r = Gr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === Ut && !WA.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function py(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = Hu(e, i, n);
  if (!Pa(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, d = !1;
  const u = P();
  if (A(u)) {
    for (let N = u.anchor.getNode(); N; N = N.getParent())
      if (c.some((z) => z.is(N))) {
        d = !0;
        break;
      }
    u.isCollapsed() && (l = Ra(
      c,
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const f = fy(o.text, i);
  if (tn(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = Qm(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const y = [...p.children, ...p.followingBlocks];
  if (kn(y) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && qr(p.followingBlocks, i) === Rr(r, i) && qr(p.children, i) === Rr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const h = p.children.map((N) => Kn(N)), g = p.followingBlocks.map((N) => Kn(N)), b = [...h, ...g];
  if (wa(b) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const k = Us([...a, ...r]).map((N) => ({
    number: N.getNumber(),
    sid: N.getSid()
  })), _ = a[0];
  _ ? h.forEach((N) => _.insertBefore(N)) : h.forEach((N) => e.append(N)), g.reduce((N, z) => N.insertAfter(z), e), Na(b, o.sentinels);
  const v = new Set(o.sentinels.flat().map((N) => N.getKey()));
  a.forEach((N) => {
    v.has(N.getKey()) || N.remove();
  }), r.forEach((N) => N.remove());
  const C = [...dy(e), ...g], $ = Us(C);
  for (let N = 0; N < k.length && N < $.length; N++)
    $[N].getNumber() === k[N].number && $[N].setSid(k[N].sid);
  return oy(
    C,
    l,
    d,
    i,
    n,
    v
  ), !0;
}
const hy = /* @__PURE__ */ new Set(["ca", "cp"]), Gu = "cp";
function gy(e) {
  if (!tr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Ds(e, t, Nr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Gr(r, { getMarker: Nr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Gu)
  );
}
function ji(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (F(r) && hy.has(r.getMarker()) || gy(r)) {
      t.push(r);
      continue;
    }
    le(r) && r.getMarker() === Gu && t.push(r);
    break;
  }
  return t;
}
function HA(e) {
  const t = (n) => F(n) && hy.has(n.getMarker()) || gy(n);
  if (t(e) || le(e) && e.getMarker() === Gu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (qe(n)) return n;
      if (!t(n)) return;
    }
}
function my(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = ji(e);
  if (n.some((s) => le(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Tn(e.getChildren(), i, t, r), Tn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
const sp = /^\\(?:\s|$)/, GA = /^\s*\\p(?:\s|$)/;
function yy(e, t) {
  const r = Gr(e, { getMarker: t }), [n, ...i] = r;
  if (typeof n != "object" || n.type !== "para" || n.marker !== "p" || GA.test(e))
    return r;
  const s = [...n.content ?? []], o = s.at(-1);
  if (typeof o == "string") {
    const l = o.trimEnd();
    l ? s[s.length - 1] = l : s.pop();
  }
  const [a, ...c] = s;
  if (typeof a == "string" && sp.test(a)) {
    const l = a.replace(sp, "");
    return [{ type: "para", marker: "", content: l ? [l, ...c] : c }, ...i];
  }
  return [...s, ...i];
}
function by(e, t, r) {
  return e === void 0 || /^\s/.test(r ?? "") ? !1 : t !== void 0 ? !/\s$/.test(t) : e !== kr.getType();
}
function ky(e) {
  return e === Le.getType() || e === bt.getType();
}
function JA(e) {
  if (!tr(e)) return;
  const t = e.getPreviousSibling();
  if (!le(t) && !tr(t)) return;
  const r = e.getChildren(), n = t.getLastChild(), i = r.at(0), s = n?.getType();
  by(
    s,
    n && s && ky(s) ? n.getTextContent() : void 0,
    M(i) ? i.getTextContent() : void 0
  ) && t.append(Te(" ")), t.append(...r), e.remove();
}
function YA(e, t) {
  if (hn(e) !== Le.getType() || hn(t) !== Le.getType()) return !1;
  const { text: r, ...n } = e, { text: i, ...s } = t;
  return JSON.stringify(n) === JSON.stringify(s);
}
const XA = {
  type: "text",
  version: 1,
  detail: 0,
  format: 0,
  mode: "normal",
  style: "",
  text: " "
};
function QA(e, t) {
  const r = e.at(t), n = t > 0 ? e[t - 1] : void 0;
  if (!r || !n || hn(r) !== Or.getType()) return;
  const i = hn(n);
  if (i !== st.getType() && i !== Or.getType()) return;
  const s = nr(r), o = nr(n);
  if (!s || !o) return;
  const a = o.at(-1), c = s.at(0), l = a ? hn(a) : void 0;
  by(
    l,
    a && l && ky(l) ? Ar(a) : void 0,
    c ? Ar(c) : void 0
  ) && o.push({ ...XA });
  for (const d of s) {
    const u = o.at(-1);
    u && YA(u, d) ? Object.assign(u, { text: `${Ar(u) ?? ""}${Ar(d) ?? ""}` }) : o.push(d);
  }
  e.splice(t, 1);
}
function op(e) {
  return typeof e == "object" && e.type === "chapter";
}
function Ty(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...ji(e)], o = my(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = P();
  if (A(l)) {
    for (let g = l.anchor.getNode(); g; g = g.getParent())
      if (s.some((b) => b.is(g))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Ra(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const d = yy(o.text, n);
  if (d.length === 0 && c)
    return i?.debug("[MarkerEdit] Chapter Tier 2 deferred: emptied chapter line holds the caret"), !1;
  if (tn(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  const [u] = d, f = op(u) ? u : void 0, p = d.find(op);
  p && e.getSid() !== void 0 && (p.sid = e.getSid());
  const y = mr.serializeEditorState(
    { type: pr, version: fr, content: d },
    r
  );
  if (f && qr(y.root.children, n) === Rr(s, n)) {
    let g = !1;
    return e.getNumber() !== (f.number ?? "") && (e.setNumber(f.number ?? ""), g = !0), e.getAltnumber() !== f.altnumber && (e.setAltnumber(f.altnumber), g = !0), e.getPubnumber() !== f.pubnumber && (e.setPubnumber(f.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const h = y.root.children.map((g) => Kn(g));
  return h.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), sy(h, a, c, n, r), JA(h.at(0)), !0;
}
function zs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ve(n)) return;
    !t && (B(n) || le(n) || qe(n) || ve(n)) && (t = n), jp(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? HA(r) : void 0) ?? t;
}
function lr(e, t) {
  const r = zs(e);
  return r ? B(r) ? jA(r, t) : qe(r) ? Ty(r, t) : ve(r) ? py(r, t) : ay([r], t) : !1;
}
const ZA = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function ap(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !ZA.has(n[0])
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
          t.push(`\\${n}`), ap(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), vo(r.content, t), ap(r, t), i !== "false" && t.push(`\\${n}*`);
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
function cp(e, t, r) {
  const n = zs(e);
  if (!We(n)) return !1;
  const i = P();
  if (!A(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = ve(n) ? Hu(n, t, r).out : ry(n, t, r);
  if (!o) return !1;
  const a = Gr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    Fs.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  vo(a, l);
  for (const d of l.join("").replaceAll(D, "~")) {
    if (Fs.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function Ju(e, t) {
  return xy(e, t, T.Paragraph);
}
function eP(e, t) {
  return xy(e, t, T.Character);
}
function xy(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== T.Unknown ? i === r : !(Oe.isValidMarker(n) || Fl(n));
}
function tP(e) {
  return [kt(e), Qs()];
}
function Yu(e) {
  rr(e, 2);
}
function rP(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Ks(e) {
  const t = rP(e);
  e.splice(0, 0, tP(e.getMarker())), t && Yu(e);
}
function qa(e, t) {
  e.setMarker(t), Ks(e), Yu(e);
}
function nP(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Dr(n)) {
    if (M(n) && !w(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(D), Et(n, fe, Ir), n.setMode("token");
      return;
    }
    if (eg(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Qs());
  }
}
function lp(e, t, r) {
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
function _s(e) {
  for (let t = e; t; t = t.getParent())
    if (le(t)) return t;
}
function iP(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = _s(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = _s(r.getNode())?.is(s) ?? !1, a = _s(n.getNode())?.is(s) ?? !1;
    return !(o && !lp(r, s, "start") || a && !lp(n, s, "end"));
  });
}
function ol(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = P();
  if (!(!A(r) || r.isCollapsed()))
    for (const n of iP(r)) t.add(n.getKey());
}
function sP(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = P();
  if (!A(r) || !r.isCollapsed()) return;
  const n = _s(r.focus.getNode());
  n && t.add(n.getKey());
}
function oP(e) {
  const t = P();
  !A(t) || t.isCollapsed() || t.getNodes().some((r) => w(r)) && (ol(e), t.removeText());
}
const aP = new RegExp(
  String.raw`^\\\+?([${qt}]+)(?:[ \u00A0]|$)`
);
function cP(e, t) {
  const r = aP.exec(e.getTextContent());
  return !!r && Ju(r[1], t);
}
function lP(e, t) {
  if (!vn(t.viewOptions)) return;
  if (Ot(e.getFirstChild())) {
    nP(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (cP(e, t.getMarker)) return;
    Ks(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => le(o) && !o.is(e))) {
      qa(e, Ut), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (We(r)) {
    const n = e.getChildren().filter((a) => !Dr(a)), i = P();
    let s = !1;
    if (A(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : _s(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || I(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && rr(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  e.setMarker(Ut), Ks(e);
}
function uP(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Mr(t, pa(e.getMarker()));
  return r === "" ? void 0 : r;
}
function Cy(e) {
  const t = e.getChildren().filter((s) => !w(s) && ae(s, fe) !== "attribute"), r = t[0];
  r && M(r) && r.getTextContent().startsWith(D) && r.setTextContent(r.getTextContent().slice(1));
  const n = uP(e);
  n && t.push(Te(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function dP(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && I(t) ? r = t.getChildAtIndex(e.offset) : w(t) && e.offset === 0 ? r = t : M(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), F(r) && (r = r.getFirstChild()), !w(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!F(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function fP() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = dP(e.anchor), r = t?.getParent();
  if (!t || !F(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), Ji(n) && n.getTextContent().startsWith(D) && n.setTextContent(` ${n.getTextContent().slice(D.length)}`), Cy(r), M(n) && n.isAttached() && n.select(0, 0), !0;
}
function pP(e, t) {
  const r = e.getChildren(), n = r.some((s) => w(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => M(c) && !w(c) && c.getTextContent() === jt(s)
    ), a = si(e).some(({ node: c }) => w(c));
    if (!o && !a) return;
    r.forEach((c) => {
      w(c) || (M(c) && c.getTextContent() === jt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => w(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function hP(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(w(r) && r.getMarkerSyntax() === "opening")) {
    Cy(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => w(o) && o.getMarkerSyntax() === "closing");
  i && !s && lr(e, t);
}
function al(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function _y(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !Vp(e, n, i);
}
function Sy(e, t) {
  return e.length <= t ? e : e.slice(0, Xu(e, t));
}
function Xu(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of Ok(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const gP = 16;
function mP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (k) => t ? Qu(k, t).length : k.getTextContent().length;
  r ??= n;
  const i = P();
  if (!A(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Yo(s), l = Yo(o), d = i.getNodes(), u = new Map(d.map((k) => [k.getKey(), kP(k)])), f = d.length > 0 ? u.get(d[0].getKey()) : void 0, p = f && yP(s, f) ? f : void 0, y = (k) => {
    const _ = k > 0 ? bP(d, u, p, c, l, k, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), _ ? i.focus.set(_.node.getKey(), _.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!_;
  };
  let h = Math.min(e, n(i));
  if (y(h) && r(i) <= e) return !0;
  let g = 0, b = 0;
  h -= 1;
  for (let k = 0; k < gP && g <= h; k++) {
    const _ = Math.floor((g + h) / 2);
    y(_) && r(i) <= e ? (b = _, g = _ + 1) : h = _ - 1;
  }
  return y(b), !0;
}
function cl(e) {
  return e.isToken() || ro(e) || qe(e.getParent());
}
function yP(e, t) {
  const r = I(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && ur(r.getKey(), 0, "text").isBefore(e);
}
function bP(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, d, u;
  const f = /* @__PURE__ */ new Map(), p = (h) => {
    const g = t.get(h.getKey());
    return g && r?.is(g) ? void 0 : g;
  }, y = (h) => {
    let g = u ? u.endBefore : h;
    for (; ; ) {
      const b = TP(g, e, n);
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
          if (c + 1 > s) return y(d);
          c += 1;
        }
        l = !g.isEmpty();
        continue;
      }
      if (l = !1, M(g)) {
        const k = h === 0 ? n : 0, _ = h === a ? i : g.getTextContentSize(), v = _ - k, C = cl(g);
        if (C && c + v > s) return y(d);
        if (!C && c + v >= s) {
          const $ = Xu(g.getTextContent(), k + (s - c));
          return y({ node: g, offset: Math.max(k, $) });
        }
        c += v, d = { node: g, offset: _ };
      } else if (ii(g) || ni(g)) {
        const k = g.getTextContentSize();
        if (c + k > s) return y(d);
        c += k;
      }
    }
  }
  return y(d);
}
function kP(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (B(r) || Ou(r)) && (t = r);
  return t;
}
function TP(e, t, r) {
  if (!e) return e;
  const n = we(e.node, (g) => I(g) && !g.isInline()), i = I(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((g) => g.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let g = o; g <= a; g++)
    l.push(c.length), c += i[g].getTextContent();
  const d = l[s - o], u = d + e.offset, f = Xu(c, u);
  if (f === u) return e;
  const p = (g) => t[0]?.is(g) ?? !1;
  if (cl(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= d) {
    const g = f - d;
    return g >= (p(e.node) ? r : 0) ? { ...e, offset: g } : void 0;
  }
  const y = s > o ? i[s - 1] : void 0;
  if (!y || !t.some((g) => g.is(y))) return;
  if (cl(y))
    return { node: y, offset: p(y) ? r : 0 };
  const h = f - l[0];
  return h >= (p(y) ? r : 0) ? { node: y, offset: h } : void 0;
}
function Qu(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, d) => {
    if (!t(l)) {
      if (I(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, M(l)) {
        const u = l.getTextContent();
        o ? a += u : a += u.slice(
          d === 0 ? Yo(i) : 0,
          d === n ? Yo(s) : u.length
        );
      } else (ii(l) || ni(l)) && (d !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function ll(e) {
  const t = e.getParent();
  return !!t && we(t, (r) => B(r) && !!r.getIsCollapsed()) !== null;
}
function vy(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    Tt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), I(i)) for (const { node: s } of si(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function xP(e) {
  return e.getNodes().some(
    (t) => ii(t) || B(t) || ke(t) || Je(t) || Ou(t)
  );
}
function Yo(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return I(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
function My(e) {
  const t = e.getParent();
  if (!B(t) || t.getIsCollapsed() !== !1 || !lh(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!w(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const Xo = "usfm:", Ey = "usfmopen", Ay = "usfmclosed";
function CP(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const _P = new RegExp(
  [Xo, Ey, Ay].map(CP).join("|")
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
  return e.startsWith(Xo) ? EP(e.slice(Xo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Py(e) {
  for (const t of e.classList) {
    const r = vP.exec(t);
    if (r) return r[1];
  }
}
function PP(e) {
  const t = Py(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function NP(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(Xo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Ey) && !n.contains(Ay)) && Py(r) !== void 0)
      return !0;
  }
  return !1;
}
function Ny(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(AP(e.nodeValue ?? ""));
    return;
  }
  if (!MP(e)) return;
  const { classList: n } = e, i = (d) => e.childNodes.forEach((u) => Ny(u, d, r));
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
  return t.childNodes.forEach((n) => Ny(n, !1, r)), r.join("").replaceAll(SP, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function OP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ae(e, fe);
  if (r === "attribute" || r === Ir || My(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (qe(o) || Ve(o)) return;
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
function qP(e, t) {
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
function Mo(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (r)
    return wy(r, t);
}
function wy(e, t) {
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(e.getData("text/plain")), i = e.getData("text/html"), s = i ? wP(i) : void 0;
  return {
    text: s ? r(s) : n || (i ? r(RP(i)) : ""),
    isInternal: qP(
      e.getData("application/x-lexical-editor"),
      t
    )
  };
}
const up = String.raw`\\(?:\+?[${qt}]+\*?|\*)`, $P = new RegExp(
  String.raw`(?<=${up})\u00A0|\u00A0(?=${up})`,
  "g"
);
function Zu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace($P, " ").replaceAll(D, "~");
}
const Oy = new RegExp(
  String.raw`\\c(?![${qt}])[ \u00A0]*[^\s\\]*`,
  "g"
), Ry = new RegExp(String.raw`\\id(?![${qt}])[^\n\\]*`, "g"), IP = new RegExp(
  String.raw`^(?:${Oy.source}|${Ry.source})`
);
function Qo(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Oy, "").replace(Ry, "");
    return IP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
const LP = new RegExp(
  String.raw`\\v(?![${qt}*])[ \u00A0]*[^\s\\]*[ \u00A0]?`,
  "g"
), DP = new RegExp(
  String.raw`\\([${qt}]+)(?![${qt}*])[ \u00A0]?`,
  "g"
);
function Zo(e, t) {
  return e.replace(LP, "").replace(
    DP,
    (r, n) => t(n)?.type === T.Paragraph ? "" : r
  );
}
function ul(e) {
  if (M(e) && ae(e, fe) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Fe(t)) return !0;
  return !1;
}
function UP(e) {
  return ul(e.anchor.getNode()) || ul(e.focus.getNode());
}
function FP(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && ul(t.getNode());
}
function zP(e, t, r, n) {
  const s = FP(e) ? r ? Zo(t, n) : t : Zu(
    r ? Zo(Qo(t), n) : Qo(t)
  );
  s && e.insertText(s.replace(/\n/g, " "));
}
function KP(e, t = !1, r = () => {
}, n = () => {
}) {
  const i = Mo(e, _n()._config.namespace);
  if (!i) return !1;
  const s = P(), o = A(s) && UP(s);
  if (!o && i.isInternal && !t || t && A(s) && Pi(s))
    return !1;
  const { text: a } = i;
  return !a || !A(s) ? !1 : (e?.preventDefault(), o ? (zP(s, a, t, n), !0) : (qy(s, a, t, r, n), !0));
}
function qy(e, t, r, n, i) {
  const s = Qo(t), o = Zu(
    r ? Zo(s, i) : s
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
  const c = _n();
  a.forEach((l, d) => {
    if (d > 0 && c.dispatchCommand(Mi, void 0), l === "") return;
    const u = P();
    A(u) && u.insertText(l);
  });
}
function BP(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return B(t) ? !Tt(e.getPreviousSibling()) : !1;
}
function jP(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const r = e.getParent();
  if (!B(r) || !Tt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function VP(e) {
  const t = e.getParent();
  return (B(t) ? t.getCaller() : void 0) || Ss;
}
function WP(e) {
  const t = e.getParent();
  return !t || yn(t) === void 0;
}
function ed(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Al(e);
  let l = "", d = !0;
  for (const u of t) {
    if (I(u) && !u.isInline()) {
      !d && WP(u) && (l += `
`), d = !u.isEmpty();
      continue;
    }
    if (d = !1, Tt(u))
      (u !== n || !e.isCollapsed()) && (l += (u === r ? "" : " ") + VP(u));
    else if (M(u)) {
      let f = u.getTextContent();
      u === r ? u === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : u === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += BP(u) ? "" : f.replaceAll(D, " ") + jP(u, u === n);
    } else (ii(u) || ni(u)) && (u !== n || !e.isCollapsed()) && (l += u.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function $y(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function HP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => ve(r) || qe(r)
    )
  );
}
function GP(e) {
  const t = P();
  if (!A(t) || t.isCollapsed()) return;
  const r = ed(t), n = {
    "text/plain": r,
    "text/html": $y(r)
  };
  if (Is() || HP(t)) return n;
  const i = wk(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function dp(e, t, r, n) {
  const i = P();
  if (!A(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !dm();
  const s = GP(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], Iy(e, t, i, s, r, n)) : !1;
}
function Iy(e, t, r, n, i, s) {
  const o = al(s);
  if (o !== void 0 && _y(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), dl(e, t, { "text/plain": Sy(a, o) })) : dl(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function dl(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || Nk(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function ei(e) {
  return we(e, qe) ?? void 0;
}
function Ly(e) {
  return [e.anchor.getNode(), e.focus.getNode(), ...e.getNodes()].some(
    (t) => ei(t) !== void 0
  );
}
function td() {
  const e = P();
  if (!A(e)) return;
  if (!e.isCollapsed()) {
    if (!Ly(e)) return;
    e.removeText();
  }
  const t = P();
  return A(t) ? ei(t.focus.getNode()) : void 0;
}
function Dy(e, t) {
  const r = td();
  if (!r) return !1;
  const n = Hn(e);
  return r.insertAfter(n), vn(t) ? qa(n, e) : n.selectStart(), !0;
}
function JP() {
  const e = P();
  return A(e) && !e.isCollapsed() && ei(e.anchor.getNode())?.is(ei(e.focus.getNode())) ? !0 : td() !== void 0;
}
function YP(e) {
  if (!Ly(e)) return !1;
  if (!e.isCollapsed()) return !0;
  const t = e.focus.getNode(), r = ei(t), n = r && Gi(r);
  return !(n?.is(t) && e.focus.offset === n.getTextContentSize());
}
function Uy(e, t, r, n) {
  const i = P();
  if (t && A(i) && YP(i))
    return !0;
  if (!td()) return !1;
  const s = P();
  return e && A(s) && qy(s, e, t, r, n), !0;
}
const bo = "﷐";
function XP(e, t) {
  const { opener: r, value: n, wrapper: i } = eu(e), s = i ?? r;
  if (!s) return !1;
  const o = t.focus.getNode();
  return o.is(e) ? t.focus.offset > s.getIndexWithinParent() : [i, r, n].some(
    (a) => a && (a.is(o) || a.isParentOf(o))
  );
}
function QP(e, t, r) {
  const { closer: n, wrapper: i } = Zl(e), s = i ?? n;
  if (!s) return t;
  const o = r.focus.getNode();
  return (o.is(e) ? r.focus.offset > t.getIndexWithinParent() + 1 : !o.is(t)) ? s : t;
}
function fl(e) {
  const t = P();
  if (!A(t)) return !0;
  const r = ei(t.focus.getNode());
  if (!r || !r.is(ei(t.anchor.getNode()))) return !0;
  const n = Gi(r);
  if (!n) return !1;
  if (XP(r, t)) {
    const u = Te("");
    return (ji(r).at(-1) ?? r).insertAfter(
      Qt().append(u)
    ), u.select(0, 0), !0;
  }
  const i = r.getPreviousSibling(), s = (ji(r).at(-1) ?? r).getNextSibling(), o = QP(r, n, t), a = o.is(n) && !/\s$/.test(n.getTextContent()) ? " " : "", c = Te(a + bo);
  if (o.insertAfter(c), !Ty(r, e))
    return c.remove(), !1;
  const l = ZP(i, s).flatMap((u) => I(u) ? u.getAllTextNodes() : [u]).find((u) => M(u) && u.getTextContent().includes(bo));
  if (!M(l)) return !1;
  const d = l.getTextContent().indexOf(bo);
  return l.setTextContent(l.getTextContent().replace(bo, "")), l.select(d, d), !0;
}
function ZP(e, t) {
  const r = [];
  for (let n = e ? e.getNextSibling() : Ke().getFirstChild(); n && !n.is(t); n = n.getNextSibling())
    r.push(n);
  return r;
}
const Fy = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Vh(Ke().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = P(), t = Qh(e), r = pu(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Tx(0, o);
        const a = ZC(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || xx(c) && Jl(parseInt(n, 10), c);
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
function pl(e, t) {
  return Oe.isValidMarker(e, t) || !!Fy[e] || st.isValidMarker(e, t) || Se.isValidMarker(e, t);
}
function e1(e, t) {
  return Se.isNoteContentMarker(e) ? !1 : Se.isValidMarker(e, t);
}
function zy(e, t, r, n, i, s) {
  const o = Fg(
    e,
    void 0,
    void 0,
    t,
    n ?? Ui(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function hl(e, t, r, n, i, s, o) {
  const a = {
    viewOptions: r ?? Ui(),
    getMarker: lu(o ?? Li),
    logger: i
  };
  if (Oe.isValidMarker(e, n?.extraValidMarkers)) {
    let d;
    return { action: (f) => {
      f.editor.update(() => {
        fl(a) && (d = zy(
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
  const c = o1(e, n?.extraValidMarkers);
  return c ? { action: (d) => {
    d.editor.update(() => {
      if (!fl(a)) return;
      const u = P();
      A(u) && (cu(u), d.noteText = u.getTextContent());
      const { content: f, highlightInserted: p } = c.action(d), y = ef(f, mr, r), h = Wa(y);
      if (A(u)) {
        const g = u.anchor.getNode(), b = g.getParent(), k = Xn(g), _ = u.anchor.key === u.focus.key;
        if (F(h) && k && _ && !Tc(h, o))
          n1(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (F(h) && !_ && !Tc(h, o) && i1(u))
          s1(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          a1(
            u,
            () => Wa(y)
          );
        else if (I(h) && !h.isInline()) {
          const v = u.insertParagraph();
          if (v) {
            const C = v.getChildren();
            h.append(...C), v.replace(h), ut(h) && es(h) || h.selectStart();
          }
        } else if (F(h) && M(g) && !w(g) && F(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Tc(h, o)) {
          const v = g.getParent();
          if (F(v)) {
            const C = u.anchor.offset;
            if (C === 0) g.insertBefore(h);
            else if (C >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [N] = g.splitText(C);
              N.insertAfter(h);
            }
            h.getChildren().forEach((N) => {
              w(N) && N.setNested(!0);
            });
            const $ = h.getChildren().find((N) => M(N) && !w(N));
            $ && M($) ? $.select(
              $.getTextContentSize(),
              $.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (M(g) && !w(g) && u.isCollapsed() && (B(b) || F(b) && B(b.getParent()))) {
          const v = F(b) ? b : void 0, C = v ? t1(g, u.anchor.offset) : [];
          let N = (v ?? g).insertAfter(h);
          if (br(h)) {
            const z = {
              ...r || Ui(),
              markerMode: "hidden"
            }, K = ef(
              f,
              mr,
              z
            ), ne = Wa(K);
            N = N.insertAfter(ne);
          }
          if (C.length > 0 && v) {
            const z = ea(v).append(...C);
            N.insertAfter(z), v.isEmpty() && v.remove();
          } else M(N.getNextSibling()) || N.insertAfter(Te(D));
          I(N) && N.selectEnd();
        } else if (u.insertNodes([h]), y1(h), p) {
          const v = Gp();
          v.add(h.getKey()), Br(v);
        } else if (F(h)) {
          const v = h.getChildren().find((C) => M(C) && !w(C));
          v && M(v) ? v.select(
            v.getTextContentSize(),
            v.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const v = h.getNextSibling();
          v ? v.selectStart() : h.selectStart();
        }
      } else
        u?.insertNodes([h]);
    }, s);
  }, label: c?.label } : { action: () => {
  }, label: void 0 };
}
function t1(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Tc(e, t) {
  return ((t ?? Li).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function r1(e, t) {
  t && e.getChildren().forEach((i) => {
    w(i) && i.setNested(!0);
  }), e.getChildren().some((i) => w(i) && i.getMarkerSyntax() === "closing") || e.append(kt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function n1(e, t, r, n) {
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
    const [o, a] = Vi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Ii(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), M(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => M(a) && !w(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => M(o) && !w(o));
  M(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function i1(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (w(n) || F(n)) continue;
    if (!M(n) || n.getType() !== Le.getType() || ae(n, fe) === "attribute") return !1;
    const i = kC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Xn(n) && (r = !0);
  }
  return r;
}
function s1(e, t, r) {
  const n = Fm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Xn(a)) return;
    Ii(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(D) && c.setTextContent(l.slice(D.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(D) || i.setTextContent(D + i.getTextContent());
  const s = t.getChildren().find((a) => M(a) && !w(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function o1(e, t) {
  let r = Fy[e];
  return r || (st.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: st.getType(), marker: e, content: [] }] })
  } : Se.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: Se.getType(), marker: e };
      return (Se.isValidFootnoteMarker(e) || Se.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function a1(e, t) {
  const r = e.getNodes(), [n, i] = Vi(e);
  let s;
  r.forEach((o, a) => {
    if (I(s) && s.isParentOf(o))
      return;
    const c = Ky(
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
    s || (s = t(), c.insertBefore(s), l = !0, F(s) && s.getChildren().some((u) => w(u) && u.getMarkerSyntax() === "opening") && r1(s, F(s.getParent()))), l1(c, s, l);
  }), (M(s) || I(s)) && s.selectEnd();
}
function Vi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function rd(e) {
  return Me(e) || B(e) || B(e.getParent());
}
function Ky(e, t, r, n, i) {
  if (!rd(e)) {
    if (M(e))
      return c1(e, t, r, n, i);
    if (I(e) && e.isInline())
      return e;
  }
}
function c1(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function l1(e, t, r) {
  if (M(t)) {
    const n = gl(e, t);
    t.setTextContent(n), e.remove();
  } else if (I(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => w(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !w(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    gl(e, t), r && F(t) && t.getChildren().some((s) => w(s)) && M(e) && !w(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function gl(e, t) {
  let r = e.getTextContent();
  if (M(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    du(n), M(n) || t.insertBefore(Te(" "));
  }
  return r;
}
function By(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = ti(d, t);
    if (!f) return !1;
    const p = M(d) ? d.getTextContentSize() : 0;
    if (fp(f, r), M(d) && d.isAttached()) {
      const y = d.getTextContentSize(), h = Math.max(p - y, 0), g = Math.max(0, Math.min(u - h, y)), b = P();
      A(b) && b.setTextNodeRange(d, g, d, g);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Vi(e);
  if (!id(n, t, s, o)) return !1;
  const a = nd(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = ti(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = Hy(u, a);
    f && (fp(f, r), l = !0);
  }), Gy(a, i), l;
}
function fp(e, t) {
  e.getChildren().forEach((n) => {
    Ot(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === er) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    M(n) && i.startsWith(D) && n.setTextContent(i.slice(D.length));
  }), Ec(e);
}
function nd(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Ky(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    M(o) && n.push(o);
  }), n;
}
function ti(e, t) {
  let r = e, n;
  for (; r && !ut(r); ) {
    if (B(r)) return;
    !n && F(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function jy(e) {
  const t = we(
    e,
    (r) => B(r) || ut(r)
  );
  return B(t);
}
function Vy(e) {
  return e.filter(
    (t) => !rd(t) && (M(t) || I(t) && t.isInline())
  );
}
function u1(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!M(i) || rd(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function d1(e, t, r) {
  return e.getChildren().some(
    (n) => I(n) && t.some((i) => n.isParentOf(i)) && !Wy(n, r)
  );
}
function id(e, t, r, n, i) {
  const s = Vy(e), o = u1(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ti(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !d1(l, s, o);
  });
}
function Wy(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Ot(r));
}
function Hy(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (I(d) && t.some((u) => d.isParentOf(u))) {
      if (!Wy(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Ot(n[s - 1]) && (s -= 1), o < n.length - 1 && Ot(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(ea(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(ea(e).append(...c)), e;
}
function ea(e) {
  return _k(e);
}
function Gy(e, t) {
  const r = P(), n = e[0], i = e[e.length - 1];
  if (!A(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function f1(e, t, r) {
  if (e.isCollapsed()) {
    const l = ti(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Ud(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Vi(e);
  if (!id(n, r, i, s, t)) return !1;
  const o = nd(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = ti(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = Hy(d, o);
    u && (Ud(u, t), c = !0);
  }), c;
}
function p1(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (g) => g !== t
  ), s = e.getNodes(), [o, a] = Vi(e);
  if (!!!i?.some(
    (g) => id(s, g, o, a)
  ) && !h1(s, t)) return !1;
  let l = !1;
  i?.forEach((g) => {
    const b = P();
    A(b) && By(b, g, n) && (l = !0);
  });
  const d = P();
  if (!A(d)) return l;
  const u = d.isBackward(), [f, p] = Vi(d), y = nd(
    d.getNodes(),
    f,
    p
  );
  if (y.length === 0) return l;
  const h = y.filter(
    (g) => !jy(g) && !ti(g, t)
  );
  return h.length > 0 && (g1(h).forEach((g) => m1(g, t)), l = !0), Gy(y, u), l;
}
function h1(e, t) {
  return Vy(e).some(
    (r) => !jy(r) && !ti(r, t)
  );
}
function g1(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function m1(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => F(a) && a.getMarker() === t
  ), s = i ? ea(i) : Vr(t);
  e[0].insertBefore(s), s.append(...e), i === r || gl(e[0], s);
}
function y1(e) {
  ke(e) && (du(e.getPreviousSibling()), qg(e.getNextSibling()));
}
const Jy = {
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
}, pp = "psc-active-text", ko = "psc-empty-text";
function b1({ viewOptions: e }) {
  const [t] = ue(), r = X(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(pp), r.current = o, o && t.getElementByKey(o)?.classList.add(pp);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        ua,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${ko}`);
          if (!c) return !1;
          const l = Wi(c);
          if (!ke(l)) return !1;
          const d = l.getParent();
          if (!I(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        ft
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = xc(), f = k1(), p = [], y = [];
          return Ke().getChildren().forEach((h) => {
            if (!I(h)) return;
            const { emptyKeys: g, nonEmptyKeys: b } = x1(h);
            p.push(...g), y.push(...b);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: y };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(ko) : t.getElementByKey(u)?.classList.add(ko);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(ko));
      }),
      t.registerCommand(
        Ol,
        () => (i(void 0), !1),
        ft
      ),
      t.registerCommand(
        Qp,
        () => {
          const o = t.getEditorState().read(xc);
          return o !== r.current && i(o), !1;
        },
        ft
      )
    ];
    return i(t.getEditorState().read(xc)), $e(...s);
  }, [t, n]), null;
}
function xc() {
  return T1(P() ?? void 0)?.getKey();
}
function k1() {
  const e = P();
  if (!A(e)) return;
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
    ke(s[a]) && (o = s[a].getKey());
  return o;
}
function T1(e) {
  if (A(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function x1(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ke(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ke(c)) break;
      if (!(zt(c) || w(c)) && c.getTextContent().replaceAll(Po, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function ml(e, t) {
  const r = bu();
  if (!r?.end) return;
  const n = C1(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = va(r);
        return i ? ed(i) : void 0;
      },
      { editor: n.editor }
    );
}
const Cc = /* @__PURE__ */ new WeakMap();
function C1(e, t) {
  const r = e.getEditorState();
  if (Cc.has(r)) {
    const i = Cc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = _1(r, t);
  return Cc.set(r, n), n;
}
function _1(e, t) {
  const r = Pu(Mu);
  if (!r) return;
  const n = So.deserializeEditorState(e, t);
  if (!n) return;
  const i = Sk({
    namespace: "markers-view-copy",
    nodes: [lt, ..._u],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    mr.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function S1({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = ue();
  return j(() => {
    const n = (i, s) => {
      const o = P();
      if (!A(o) || o.isCollapsed()) return !1;
      const a = ml(r, e);
      return a === void 0 ? !1 : Iy(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": $y(a) },
        s,
        t
      );
    };
    return $e(
      r.registerCommand(Oi, (i) => n(i, !1), Pe),
      r.registerCommand(hr, (i) => n(i, !0), Pe)
    );
  }, [r, e, t]), null;
}
const hp = /* @__PURE__ */ new WeakMap();
function v1({
  limit: e,
  viewOptions: t
}) {
  const [r] = ue(), n = X(al(e)), i = X(t), s = X(!1), o = X(void 0);
  return j(() => {
    n.current = al(e), i.current = t, o.current?.();
  }, [e, t]), j(() => {
    let a, c;
    const l = (b) => {
      const k = n.current;
      if (k === void 0) return;
      const _ = hp.get(b);
      if (b.defaultPrevented && _ === void 0) return;
      const v = r.getRootElement();
      if (!v) return;
      const C = v.ownerDocument.getSelection();
      if (!C || !A1(C, v)) return;
      b.preventDefault();
      const $ = Sy(
        _ ?? C.toString().replaceAll(D, " "),
        k
      );
      hp.set(b, $);
      const N = b.clipboardData;
      if (N) {
        if (!$) {
          _ !== void 0 && N.clearData();
          return;
        }
        N.setData("text/plain", $);
      }
    }, d = (b) => {
      n.current !== void 0 && Mk(b, "a", { ctrlKey: !Ri, metaKey: Ri }) && (N1(c?.activeElement, r.getRootElement()) || b.preventDefault());
    }, u = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", d, !0), c = void 0;
    }, f = () => {
      const b = n.current === void 0 ? void 0 : a;
      b !== c && (u(), c = b, c?.addEventListener("copy", l), c?.addEventListener("keydown", d, !0));
    };
    o.current = f;
    const p = (b) => (b?.preventDefault(), !0), y = (b) => {
      const k = n.current;
      if (k === void 0 || (s.current = !1, _y(r, b))) return !1;
      if (k <= 0) return p(b);
      const _ = P();
      if (la(_))
        return _.getTextContent().length + vy(_.getNodes()) <= k ? !1 : p(b);
      if (!A(_) || _.isCollapsed()) return !1;
      const v = M1(r, i.current);
      return v.$size(_) <= k ? !1 : (mP(k, v.options), _.isCollapsed() ? p(b) : (r.isEditable() || Jp(() => E1(r)), s.current = !0, !1));
    }, h = (b, k) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const _ = P();
      if (!A(_) || _.isCollapsed()) return !1;
      const v = k && r.isEditable() && !xP(_);
      return dl(
        b && typeof b == "object" && "clipboardData" in b ? b : null,
        r,
        { "text/plain": Qu(_, ll) },
        v ? () => _.removeText() : void 0
      );
    }, g = $e(
      r.registerCommand(Oi, y, _e),
      r.registerCommand(hr, y, _e),
      r.registerCommand(
        Oi,
        (b) => h(b, !1),
        Pr
      ),
      r.registerCommand(
        hr,
        (b) => h(b, !0),
        Pr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        vk,
        (b) => n.current === void 0 ? !1 : (b?.preventDefault(), !0),
        _e
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
function M1(e, t) {
  if (no(t)) {
    const n = (i) => ed(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && ml(e, r) !== void 0) {
    const n = (i) => ml(e, r)?.length ?? Qu(i, ll).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + vy(n.getNodes()),
    options: { $isHidden: ll }
  };
}
function E1(e) {
  e.getEditorState().read(() => {
    const t = P(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!A(t) || !r) return;
    const n = gp(e, t.anchor), i = gp(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function gp(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = Ek(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = I(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function A1(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const P1 = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function N1(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? P1.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const w1 = /^\+/;
function sd(e, t) {
  const r = t.replace(w1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Yy(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Xy(e, t) {
  return Yy(e, t) !== void 0;
}
function yl(e, t) {
  const r = Yy(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ta(e, t, r) {
  const n = I(e) ? e.getChildren().filter(w) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function O1(e, t, r, n, i) {
  const s = sd(n, t);
  if (!s) {
    ta(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ta(e, "invalid", i);
}
function Ni(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (F(s)) {
      const o = s.getMarker();
      i || O1(s, o, t, r, n), Ni(s, t, r, n, i || o === "xq");
    } else if (ke(s)) {
      if (i) continue;
      const o = sd(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else B(s) ? Ni(s, s.getMarker(), r, n, i) : Ve(s) || I(s) && Ni(s, t, r, n, i);
}
function R1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = sd(e, a);
    if (!c) {
      ta(o, "unknown", r), yl(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    yl(n, l) || ta(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ke().getChildren())
    Ve(o) || (ve(o) ? (i(o, o.getMarker()), s(o) && Ni(o, void 0, e, r, !1)) : Je(o) ? i(o, o.getMarker()) : le(o) ? (i(o, o.getMarker()), s(o) && Ni(o, o.getMarker(), e, r, !1)) : I(o) && s(o) && Ni(o, "p", e, r, !1));
  return r;
}
function q1(e) {
  return !!e?.includes("(basic)");
}
function $1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Qy(e, t) {
  return !e.startsWith("zpa") && e !== "c" && pl(e, t);
}
function od(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Zy(e, t) {
  const r = [];
  for (const n of t) {
    const i = od(e, n);
    i && yl(r, i);
  }
  return r;
}
function Eo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: $1(e.description),
    isBasic: q1(e.description)
  };
}
function I1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function bl(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : I1(e.marker, t.marker);
}
function kl(e, t, r) {
  if (t.noteMarker) return [];
  const n = Zy(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Qy(i.marker, r)
  ).filter((i) => {
    const s = od(e, i.marker);
    return s !== void 0 && Xy(n, s);
  }).map((i) => Eo(i, "paragraph")).sort(bl);
}
function L1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Qy(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Eo(c, "character")).sort(bl);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Eo(c, "character")),
    ...a.map((c) => Eo(c, "note"))
  ].sort(bl);
}
function D1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function U1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function F1(e, t, r) {
  return [
    ...D1(e, t.openCharMarkers),
    ...L1(e, t, r)
  ].sort(U1);
}
function z1(e, t, r) {
  if (t.source === "paragraph") return kl(e, t, r);
  const n = F1(e, t, r);
  return n.length > 0 ? n : kl(e, t, r);
}
function K1(e, t, r) {
  const n = kl(e, t, r), i = Zy(e, t.previousParaMarkers), s = od(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Xy(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
function eb(e, t, r) {
  if (!w(e.getFirstChild()) && r?.markerMode === "editable" && vn(r)) {
    qa(e, t);
    return;
  }
  Qg(e, t);
}
function tb() {
  const e = P();
  if (!A(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = rb(e);
    return t !== "removed" ? t : (Tl(), "handled");
  }
  return Tl() ? "handled" : "declined";
}
function B1(e, t) {
  if (!t) return e;
  const r = OA.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== T.Paragraph ? e : e.slice(r[0].length);
}
function mp(e, t) {
  const r = P();
  if (!A(r)) return "declined";
  if (r.isCollapsed()) {
    if (!nb())
      return "declined";
  } else {
    const s = rb(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => B1(s, t)
  );
  yp(n ?? "");
  for (const s of i)
    Tl(), yp(s);
  return "handled";
}
function j1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Wi(n);
  if (!i) return !1;
  const s = Bt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !M(i) || w(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function rb(e) {
  const t = Bt(e.anchor.getNode()), r = Bt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), V1() ? "removed" : "needs-plain-split");
}
function yp(e) {
  if (e === "") return;
  const t = P();
  A(t) && t.insertText(e);
}
function V1() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = Bt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => w(r) && r.getMarkerSyntax() === "opening");
}
function nb() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Bt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Tl() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = nb();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Vr("fp", { closed: "false" });
  i.append(kt("fp"));
  const s = M(t) && !w(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Ii(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [d] = l;
    d && (Cx(d), i.append(d));
  }
  return i.getChildren().every(w) && i.append(Te(er)), ib(i), !0;
}
function ib(e) {
  const t = e.getChildren().find((r) => !w(r));
  if (M(t)) {
    const r = ba(t);
    t.select(r, r);
    return;
  }
  if (I(t)) {
    ib(t);
    return;
  }
  e.selectEnd();
}
function W1(e) {
  const t = [];
  let r = e;
  for (; r; )
    F(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function H1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ke().getChildren()) {
    if (t && n.is(t)) {
      (ve(n) || qe(n)) && r.push(n.getMarker());
      break;
    }
    (ve(n) || Je(n) || le(n)) && r.push(n.getMarker());
  }
  return r;
}
function G1(e) {
  let t = e;
  for (; I(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function J1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ot(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Dr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(G1(i)) && r === 0 : !1;
}
function Y1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ot(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Dr(i) && t.is(i) && r === 0;
}
function X1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function Q1() {
  const e = P();
  if (!A(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = we(t, le), s = i ? void 0 : we(t, ve), o = !n && !s && (!i || Y1(i, t, r)) ? "paragraph" : "character", a = Bt(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: H1(t),
    openCharMarkers: W1(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: au(t, r),
    anchorRect: X1()
  };
}
function Z1() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!M(t) || w(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = RA.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function e0(e, t, r) {
  eb(e, t, r), Yu(e);
}
function t0(e, t, r) {
  const n = P();
  if (!A(n)) return;
  const i = n.focus.getNode(), s = we(i, le);
  if (t === "backslash" && s && J1(s, i, n.focus.offset)) {
    e0(s, e, r);
    return;
  }
  xl(e, r);
}
function sb(e, t) {
  const r = e.getNode(), n = zm(I(r) ? r : r.getParent());
  return t.is(n);
}
function r0(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !sb(e, t);
}
function ra(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function n0(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!w(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!F(r)) return e;
  const n = r.getParent();
  return n ? ur(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function i0(e, t, r) {
  const n = P();
  if (!A(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!sb(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && r0(s, e)) return !1;
  const o = Gl(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (ra(n.anchor, e, o), ra(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = P();
  if (!A(a) || !a.isCollapsed()) return !1;
  const c = jm(a);
  if (!c) return !1;
  const { parent: l, moving: d } = Bm(
    n0(c.anchor)
  );
  if (!e.is(l)) return !1;
  const u = d.filter((y) => !y.is(o)), f = Hn(t);
  e.insertAfter(f), f.append(...u);
  const [p] = u;
  return F(p) ? Ta(p) : f.select(0, 0), vn(r) && Ks(f), !0;
}
function s0(e, t) {
  const r = P();
  return !A(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function ob(e) {
  const t = P();
  return A(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function o0(e) {
  const t = we(e.anchor.getNode(), ve);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !Gl(r) || (ra(e.anchor, t, r), ra(e.focus, t, r));
}
function a0(e, t, r, n) {
  const i = P();
  if (A(i) ? o0(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && Z1(), e.kind === "closeTag") {
    ob(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && tb() !== "declined") return;
  if (e.kind === "paragraph" && st.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    t0(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Oe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return fl({
      viewOptions: n.viewOptions ?? Ui(),
      getMarker: lu(n.styleInfo ?? Li),
      logger: n.logger
    }) ? zy(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    ) : void 0;
  hl(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: _n(), reference: r });
}
function xl(e, t) {
  if (Dy(e, t)) return !0;
  const r = P();
  if (!A(r)) return !1;
  cu(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!we(n, le)) {
    const o = we(n, ve);
    if (o) return i0(o, e, t);
  }
  const i = vn(t);
  if (Vm()) {
    const o = P();
    if (!A(o)) return !1;
    const a = we(o.anchor.getNode(), le);
    return a ? (a.setMarker(e), i && Ks(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return le(s) ? (i ? qa(s, e) : s.setMarker(e), !0) : !1;
}
function c0() {
  const [e] = ue();
  return j(() => e.registerCommand(Zp, () => !0, ft), [e]), null;
}
function l0(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = AA.exec(e)?.[1];
  return r === void 0 ? !1 : !Ju(r, t);
}
function ab(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !l0(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!le(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== T.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!le(i) && !ve(i)))
    return [i, r];
}
function cb(e, t) {
  const r = ab(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return ve(n) ? py(n, t, [i]) : ay([n, i], t);
}
function u0(e, t) {
  const r = P();
  A(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function lb(e) {
  const t = PA.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function d0(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = lb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function f0(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (B(e.getParent()) && M(r)) {
    const n = r.getNextSibling();
    if (F(n)) {
      Ta(n);
      return;
    }
  }
  M(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function bp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = lb(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  f0(e);
}
function kp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function ub(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return lr(e, r);
  const n = d0(e), i = e.getParent();
  if (le(i)) {
    if (!Ju(t, r.getMarker))
      return cb(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : lr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), kp(s, t) && bp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (F(i) || B(i)) {
    const s = t.replace(/^\+/, "");
    if (!(F(i) ? eP(t, r.getMarker) : Oe.isValidMarker(s)))
      return lr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return lr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(w).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (u0(c, it(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), kp(a, s) && bp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return lr(e, r);
}
function p0(e) {
  const t = P();
  if (!A(t)) return !1;
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
function h0(e, t) {
  const r = e.getTextContent();
  if (Xr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Fe(e.getParent()) && Xl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !p0(e)) {
    Px(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = MA.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), ub(e, n[1], t);
      return;
    }
    if (EA.test(r)) {
      t.pendingKeys.delete(e.getKey()), lr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = it(e.getMarker(), e.getNested());
    if ((F(n) || B(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = P(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Te(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function g0(e, t) {
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
function db(e) {
  if (!lh(e)?.length)
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
const hs = db("v"), m0 = db("c"), Tp = /^[ \u00A0]*$/;
function Cl(e, t, r) {
  const n = e.getNextSibling();
  if (M(n) && n.getType() === Le.getType() && n.getMode() === "normal" && ae(n, fe) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = Te(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function y0(e, t) {
  const r = e.getTextContent(), n = Zt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (hs.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = hs.valueAndRest.exec(c);
    if (l && Tp.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (hs.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = hs.valueAndRest.exec(r);
  if (!s) {
    const c = hs.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = P(), p = A(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(Zt("v", d));
      const y = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Cl(e, u, y);
      return;
    }
    t.pendingKeys.delete(e.getKey()), lr(e, t);
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
  e.setNumber(o), e.setTextContent(Zt("v", o)), a && Cl(e, a, a.length);
}
const b0 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function k0(e, t) {
  if (!My(e)) return !1;
  const r = e.getParent();
  if (!B(r)) return !1;
  const n = e.getTextContent();
  if (n === jt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = b0.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = P(), c = A(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(jt(s)), o) {
    const l = n.length - o.length, d = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const u = Cl(e, o, d);
    u.isUnmergeable() || u.toggleUnmergeable();
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
  const r = Zt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = m0.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function fb(e) {
  if (et(e)) {
    const { wrapper: t } = ya(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (B(e)) {
    const { wrapper: t } = Ql(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (qe(e)) {
    const t = [], r = Zl(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = eu(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Ue(e)) {
    const t = [], r = Ps(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Ps(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function x0(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return fb(e).some((n) => r.is(n));
}
function C0(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && le(e) && eg(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ns)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && to(l, e) && (i || x0(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of fb(e))
    l.remove(), n = !0;
  let s = !1;
  if (F(e)) {
    const l = qx(e);
    l !== void 0 && hT(l) && (ug(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Ns)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (PC(l, e)) {
        Os(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Eg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      xa(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function xp(e) {
  return M(e) && e.getType() === Le.getType() && e.getMode() === "normal" && ae(e, fe) !== "attribute";
}
function _0(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && xp(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && xp(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function To(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = _0(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (w(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Xr(c)) continue;
      const y = Hm.exec(p);
      c.getMarkerSyntax() === "opening" && y ? n = ub(c, y[1], e) || n : r === "idle" && cp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : cb(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = lr(c, e) || n;
      continue;
    }
    const l = Yn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = C0(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && cp(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = lr(d, e) || n;
    }
  }
  return n;
}
function pb(e) {
  if (en(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (F(t)) return ks(t) !== void 0;
  return !1;
}
function S0(e) {
  const t = Yn(e);
  if (!t) return !1;
  const r = Jn(t.kind);
  return !xa(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Cp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Ve(t) || xg(t)) return !0;
  return !1;
}
function v0(e, t) {
  const r = e.getTextContent(), n = ae(e, fe), i = e.getParent();
  if (n !== "attribute" && qe(i)) {
    r.replace(/^[ \u00A0]+/, "") === Zt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (k0(e, t)) return;
  if (n === "attribute") {
    S0(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && pb(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Cp(e))
      t.pendingKeys.add(e.getKey());
    else if (ag(e)) t.pendingKeys.add(e.getKey());
    else if (qe(zs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      F(a) && dg(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Cp(e)) return;
  const s = P(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (NA.test(o)) {
    if (_T(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), lr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function M0(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Eg(e, t);
}
function E0(e) {
  const t = (r) => {
    if (w(r)) {
      Xr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (en(r)) {
      bg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Ns)
      n.settleScope !== "none" && n.ownerPredicate(r) && (to(n, r) || M0(n, r)) && e.pendingKeys.add(r.getKey());
    if (Ue(r)) {
      r.getTextContent() !== Zt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (M(r)) {
      if (r.getType() !== Le.getType() || ae(r, fe) === "attribute") return;
      const n = r.getParent();
      if (qe(n)) {
        r.getTextContent() !== Zt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && pb(r) || i.includes("//") || ag(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (F(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ve(r)) {
      if (Fe(r) && r.getChildrenSize() === 0) {
        const n = Yn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      I(r) && r.getChildren().forEach(t);
    }
  };
  Ke().getChildren().forEach(t);
}
const hb = Rl(
  "COMMIT_PENDING_MARKERS_COMMAND"
), gb = Rl(
  "SET_MARKER_SETTLE_SUSPENDED_COMMAND"
);
function _c(e) {
  const t = e();
  return Ct(Pl), Ct(fh), t;
}
const _p = 8, Sp = 1e3, A0 = 1e3;
function xi(e, t) {
  const r = Ue(e) ? ["va", "vp"] : et(e) ? ["milestone"] : B(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    qC(Jn(n), e, t.pendingKeys);
}
function P0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(ql) || i.updateTags.has(vs)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = se(o);
        if (!c) continue;
        const l = Yn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = se(o.getKey());
        c?.isAttached() && Jn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(Le, r),
    e.registerMutationListener(kr, r),
    e.registerMutationListener(Jr, r),
    e.registerMutationListener(Yr, r)
  );
}
function na(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = P();
  return r ? t ? vm(r, t) : A(r) && Pi(r) : !1;
}
function N0(e, t, r) {
  return $e(
    e.registerCommand(
      Yt,
      (n) => {
        if (Is() || na(t)) return !1;
        const i = Mo(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Qo(i.text) : i.text, o = r && t.structureProtectionMode === "protected" ? Zo(s, t.getMarker) : s, a = r ? Zu(o) : o;
        if (a.includes(`
`)) {
          const c = a.split(`
`);
          let l = mp(c, t.getMarker);
          if (l === "declined" && j1(e) && (l = mp(c, t.getMarker)), l === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      _e
    ),
    e.registerCommand(
      Yt,
      (n) => {
        if (Is() || na(t)) return !1;
        const i = Mo(n, e._config.namespace);
        if (!i) return !1;
        const s = Uy(
          i.text,
          t.structureProtectionMode === "protected",
          () => {
            t.splitExpected.current = !0;
          },
          t.getMarker
        );
        return s && n?.preventDefault(), s;
      },
      _e
    ),
    e.registerCommand(
      Yt,
      (n) => {
        const i = Mo(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !_A()) return !1;
        const o = P();
        return t.structureProtectionMode === "protected" && A(o) && Pi(o) ? !1 : (n?.preventDefault(), A(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Mi, void 0), a === "") return;
          const l = P();
          A(l) && l.insertText(a);
        }), !0);
      },
      Pe
    ),
    e.registerCommand(
      Yt,
      () => (t.splitExpected.current = !0, !1),
      ft
    )
  );
}
function w0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = ue(), a = e?.markerMode === "editable", c = !!e && no(e), l = X(void 0), d = X(n), u = X(!1), f = X(s);
  return j(() => {
    d.current = n, f.current = s;
    const p = l.current;
    p && (e && (p.viewOptions = e), p.getMarker = t ?? Nr, p.logger = r, p.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), j(() => {
    if (!a || !e) return;
    const p = {
      viewOptions: e,
      getMarker: t ?? Nr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = p;
    const y = vC(o, p.pendingKeys);
    let h, g = !1, b, k = !1, _ = !1, v = 0;
    const C = () => v < _p ? !1 : (p.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${_p} consecutive mutating passes; leaving ${p.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...p.pendingKeys].join(", ")}`
    ), !0), $ = (q, H = "departure", ye = !1) => {
      const he = ye && !Du(o), ot = he ? Er(o, cr) : void 0;
      o.update(
        () => {
          he && Ct(cr), v = _c(
            () => To(p, q, H)
          ) ? v + 1 : 0;
        },
        // DISCRETE whenever the tag is in play, the way `commitPendingMarkerEdits` does it:
        // Lexical commits inside the call only for a discrete update (`_flushSync`) and otherwise
        // schedules the commit on a microtask, so the release below would disarm before the commit
        // it exists to catch. A settle that only moves the selection — which an update running
        // outside an event can produce on its own, by re-reading the DOM selection — would then
        // leave the tag pending to ride onto the next commit, where it stops a later `focus()`
        // from focusing the editor.
        he ? { discrete: !0 } : void 0
      ), ot?.();
    };
    let N = !1, z;
    const K = () => {
      z !== void 0 && clearTimeout(z), z = void 0;
    }, ne = (q) => {
      u.current !== q && (u.current = q, N = !1, K(), q ? (G !== void 0 && clearTimeout(G), G = void 0) : queueMicrotask(() => {
        _ || u.current || (!g && !C() && $(h, "departure", !0), Ce());
      }));
    };
    let G;
    const Ce = () => {
      if (G !== void 0 && clearTimeout(G), G = void 0, _ || p.pendingKeys.size === 0 || u.current) return;
      const q = d.current ?? A0;
      q < 0 || (G = setTimeout(() => {
        G = void 0, !(_ || p.pendingKeys.size === 0) && (g || C() || $(void 0, "idle"));
      }, q));
    }, re = $e(
      o.registerNodeTransform(kr, (q) => {
        if (o.isComposing()) return;
        h0(q, p);
        const H = Yn(q);
        H && (Ue(H.owner) || B(H.owner) || qe(H.owner) || et(H.owner) && ya(H.owner).wrapper === void 0) && xi(H.owner, p);
      }),
      o.registerNodeTransform(bt, (q) => {
        o.isComposing() || (y0(q, p), xi(q, p));
      }),
      o.registerNodeTransform(Wt, (q) => {
        o.isComposing() || (T0(q), q.isAttached() && xi(q, p));
      }),
      o.registerNodeTransform(st, (q) => {
        o.isComposing() || lP(q, p);
      }),
      o.registerNodeTransform(Se, (q) => {
        if (!o.isComposing()) {
          hP(q, p);
          for (const H of ["separator", "char"])
            q.isAttached() && to(Jn(H), q) && p.pendingKeys.add(q.getKey());
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
      o.registerNodeTransform(gr, (q) => {
        o.isComposing() || xi(q, p);
      }),
      o.registerNodeTransform(Yr, (q) => {
        if (o.isComposing()) return;
        const H = Yn(q);
        H && (et(H.owner) || Ue(H.owner) || B(H.owner) || qe(H.owner)) && xi(H.owner, p);
      }),
      o.registerNodeTransform(Oe, (q) => {
        o.isComposing() || (pP(q, p), xi(q, p));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(Zr, (q) => {
        o.isComposing() || g0(q, p);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(Le, (q) => {
        o.isComposing() || v0(q, p);
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
        Le,
        (q) => {
          o.getEditorState().read(() => {
            for (const [H, ye] of q) {
              if (ye === "destroyed") continue;
              const he = se(H);
              !he || ae(he, fe) !== "attribute" || Fe(he.getParent()) || o.getElementByKey(H)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      P0(o, p),
      ...c ? [
        o.registerNodeTransform(Le, (q) => {
          o.isComposing() || OP(q);
        }),
        o.registerCommand(
          Oi,
          (q) => dp(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            q && typeof q == "object" && "clipboardData" in q ? q : null,
            o,
            !1,
            f.current
          ),
          Pe
        ),
        o.registerCommand(
          hr,
          (q) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            dp(
              q && typeof q == "object" && "clipboardData" in q ? q : null,
              o,
              !0,
              f.current
            )
          ),
          Pe
        ),
        o.registerCommand(
          Yt,
          (q) => KP(
            // Same jsdom-safe duck-check as COPY above.
            q && typeof q == "object" && "clipboardData" in q ? q : null,
            p.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              p.splitExpected.current = !0;
            },
            p.getMarker
          ),
          Pe
        )
      ] : [],
      o.registerCommand(
        hr,
        () => (!na(p) && !Is() && ol(p), !1),
        _e
      ),
      o.registerCommand(
        wi,
        () => (o.isComposing() || oP(p), !1),
        Pr
      ),
      o.registerCommand(
        da,
        (q) => q || o.isComposing() ? !1 : fP(),
        Pr
      ),
      o.registerCommand(
        ua,
        () => (g = !1, v = 0, Ce(), !1),
        ft
      ),
      o.registerCommand(
        $r,
        (q) => (g = !1, v = 0, Ce(), (q.key === "Backspace" || q.key === "Delete") && !na(p, xm(q)) && (ol(p), sP(p), queueMicrotask(() => {
          p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !q.ctrlKey || q.altKey || q.shiftKey || q.metaKey || q.key !== " " && q.code !== "Space" || !CA() ? !1 : (q.preventDefault(), !0)),
        Pe
      ),
      o.registerCommand(
        Yp,
        (q) => {
          const H = tb();
          H === "needs-plain-split" && o.dispatchCommand(Mi, void 0);
          const ye = H !== "declined" || $C();
          return ye && q?.preventDefault(), To(p), ye;
        },
        Pe
      ),
      // A chapter line cannot be split: Enter there starts a `\p` after it and a line break is
      // refused (see chapterLine.utils.ts). CRITICAL so both run ahead of every split, including
      // this plugin's own char-stack split below.
      o.registerCommand(
        Mi,
        () => Dy(Ut, p.viewOptions),
        _e
      ),
      o.registerCommand(
        Hp,
        () => JP(),
        _e
      ),
      // A drop inserts through Lexical's clipboard path, which splits at every line break without
      // going through INSERT_PARAGRAPH_COMMAND, so a drop on a chapter line is claimed and goes in
      // as a paste there does. LOW: below structure protection's HIGH block and the NORMAL
      // replace-selection delete, above Lexical's own insertion at EDITOR.
      o.registerCommand(
        wi,
        (q) => {
          if (typeof q == "string" || !q.dataTransfer) return !1;
          const { text: H } = wy(q.dataTransfer, o._config.namespace);
          return !!H && Uy(
            H,
            p.structureProtectionMode === "protected",
            () => {
              p.splitExpected.current = !0;
            },
            p.getMarker
          );
        },
        ft
      ),
      o.registerCommand(
        Mi,
        () => (p.splitExpected.current = !0, Vm()),
        Pe
      ),
      N0(o, p, c),
      o.registerCommand(
        gb,
        (q) => (ne(q), !0),
        // LOW, matching the sibling host-dispatched `COMMIT_PENDING_MARKERS_COMMAND` below. This
        // command has exactly one handler, so priority decides nothing; CRITICAL is reserved in
        // this file for handlers that must beat Lexical's built-ins on NATIVE commands, and using
        // it here would imply a priority contest that does not exist.
        ft
      ),
      o.registerCommand(
        Qp,
        () => (u.current && N && (K(), z = setTimeout(() => {
          if (z = void 0, _ || !u.current) return;
          const q = o.getRootElement(), H = q?.ownerDocument, ye = H?.activeElement;
          !q || !H?.hasFocus() || !ye || !(q === ye || q.contains(ye)) || (p.logger?.warn(
            `[MarkerEdit] marker settling has been suspended while the editor held focus for ${Sp}ms, so the suspension was lifted and held edits settled. The host did not resume on one of its close paths.`
          ), ne(!1));
        }, Sp)), !1),
        ft
      ),
      o.registerCommand(
        hb,
        () => {
          if (g) return !0;
          const q = o.getRootElement(), H = q?.ownerDocument, ye = !!q && !!H && H.hasFocus() && q.contains(H.activeElement);
          let he;
          if (ye) {
            const ot = P();
            he = A(ot) ? ot.focus.key : h;
          }
          return _c(() => To(p, he)), !0;
        },
        ft
      ),
      o.registerCommand(
        Ol,
        () => {
          if (u.current)
            return N = !0, K(), !1;
          if (g) return !1;
          const q = P(), H = A(q) ? q.focus.key : h;
          return _c(() => To(p, H)), !1;
        },
        ft
      ),
      o.registerUpdateListener(({ editorState: q, tags: H }) => {
        p.splitExpected.current = !1, p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear(), p.rebuildAttempted.clear();
        const ye = q.read(() => {
          const ot = P();
          return A(ot) ? ot.focus.key : void 0;
        }), he = b;
        if (ye !== void 0 && (b = ye), H.has(ql)) {
          p.pendingKeys.clear(), q.read(() => E0(p)), g = !0, ye !== void 0 && (h = ye);
          return;
        }
        if (H.has(At)) {
          ye !== void 0 && ye !== he && (g = !0);
          return;
        }
        g || (ye !== void 0 && (h = ye), Ce(), !(k || ye === void 0) && [...p.pendingKeys].some((ot) => ot !== ye) && (k = !0, queueMicrotask(() => {
          k = !1, !_ && (u.current || C() || $(h));
        })));
      })
    );
    return () => {
      _ = !0, G !== void 0 && clearTimeout(G), G = void 0, K(), y(), re(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const O0 = ["status_unknown", "status_invalid"], mb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, R0 = Object.values(mb);
function q0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = mb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function vp(e) {
  e.classList.remove(...O0), e.removeAttribute("aria-description"), R0.includes(e.title) && e.removeAttribute("title");
}
function $0(e, t, r, n) {
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
function I0(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : w(t) && t.getParent()?.getKey() === r.getKey();
}
function L0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ue(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? Li;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = R1(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || I0(f)) continue;
            const y = se(f)?.getTopLevelElement();
            !y || l.has(y.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && vp(p);
        }
        for (const [f, p] of u) {
          const y = n.getElementByKey(f);
          y && q0(y, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          $0(l, d, u, f)
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
function yb(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = nr(o);
    a && I(s) && yb(s.getChildren(), a, r);
  }
}
function Bs(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = nr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Ar(a);
      if (l === void 0 || !l.includes(ht)) continue;
      const d = l.split(ht), u = [];
      for (let f = 0; f < d.length; f++) {
        const p = d[f];
        if (f > 0 && u.push(...t[n++] ?? []), p.length > 0) {
          const y = {
            ...a,
            text: p
          };
          u.push(y);
        }
      }
      s.splice(o, 1, ...u), o += u.length - 1;
    }
  };
  return i(e), n;
}
function ia(e, t, r) {
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
function bb(e, t) {
  const r = [];
  for (const n of e)
    Wu(n, t) || ((le(n) || F(n)) && r.push(n.getMarker()), I(n) && r.push(...bb(n.getChildren(), t)));
  return r;
}
function kb(e) {
  const t = [];
  for (const r of e) {
    const n = hn(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = nr(r);
    i && t.push(...kb(i));
  }
  return t;
}
function js(e, t, r) {
  const n = bb(e, r), i = kb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function D0(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = P();
  let n, i;
  if (A(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = se(t.key), i = t.offset;
  else
    return;
  if (!(!M(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function $a(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function U0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Pa(c, e, o, s)) return;
  const l = i ? $a(c, i) : c.text, d = Gr(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (tn(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = mr.serializeEditorState(
    { type: pr, version: fr, content: d },
    s
  ).root.children;
  if (kn(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = ia(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (qr(u, o) === Rr(e, o) && js(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Bs(u, f);
  const y = Tb(e), h = ad(u);
  for (let g = 0; g < y.length && g < h.length; g++)
    y[g].sid !== void 0 && h[g].number === y[g].number && (h[g].sid = y[g].sid);
  return u;
}
function Tb(e) {
  const t = [], r = (n) => {
    Ue(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : I(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function ad(e) {
  const t = [];
  for (const r of e) {
    Bh(r) && t.push(r);
    const n = nr(r);
    n && t.push(...ad(n));
  }
  return t;
}
function F0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = ly(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? $a(l, i) : l.text, f = Gr(u, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (tn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const y = p.content ?? [], h = uy(y), g = e.getCategory() !== h, b = Ym(e, y);
  if (b) {
    const C = Xm(
      e,
      b.before,
      b.after,
      h,
      s
    );
    if (!C || kn(C) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const $ = ia(l, t, n);
    return $ ? (Bs(C, $), {
      rebuilt: void 0,
      contentNodes: d,
      category: h,
      categoryChanged: !1,
      closedAs: C
    }) : void 0;
  }
  const k = Jm(e, y, h, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = k.children;
  if (kn(_) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const v = ia(l, t, n);
  if (!v) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (qr(_, o) === Rr(d, o) && js(d, _, o)) {
    if (g)
      return { rebuilt: void 0, contentNodes: d, category: h, categoryChanged: g };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Bs(_, v), { rebuilt: _, contentNodes: d, category: h, categoryChanged: g };
}
function Mp(e) {
  return e.$?.textType;
}
function z0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Mp(e) === Mp(t);
}
function K0(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && Ve(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function B0(e) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!B(t)) return;
  const r = e.getTextContent();
  if (Xr(e)) return;
  const n = Hm.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Ep(e, t) {
  const r = e;
  r.marker = t, r.text = ty(t, r.markerSyntax, r.nested);
}
function j0(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Oe.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Ep(a.node, s);
  const c = n.getChildren().filter(w).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Ep(l.node, s);
}
function V0(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: d } = Hu(e, a, o);
  if (d.length === 0 && s.length === 0 || !Pa(l, s, a, o)) return;
  const u = i ? $a(l, i) : l.text, f = fy(u, a);
  if (tn(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = Qm(
    e,
    f.lineContent,
    f.followingBlocks,
    o
  );
  if (p.failure !== void 0) {
    p.failure === "shape" && c?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: y, followingBlocks: h } = p;
  if (kn([...y, ...h]) !== l.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const g = ia(l, t, n);
  if (!g) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (h.length === s.length && qr(h, a) === Rr(s, a) && js(s, h, a) && qr(y, a) === Rr(d, a) && js(d, y, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const b = Bs(y, g);
  Bs(h, g, b);
  const k = Tb([...d, ...s]), _ = ad([...y, ...h]);
  for (let v = 0; v < k.length && v < _.length; v++)
    k[v].sid !== void 0 && _[v].number === k[v].number && (_[v].sid = k[v].sid);
  return { rebuilt: y, contentNodes: d, followingBlocks: h };
}
function W0(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = my(e, i, n);
  if (!o) return;
  const a = r ? $a(o, r) : o.text, c = yy(a, i);
  if (tn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  const l = c.find(
    (y) => typeof y == "object" && y.type === "chapter"
  );
  l && e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = mr.serializeEditorState(
    { type: pr, version: fr, content: c },
    n
  ).root.children, [u] = c;
  if (typeof u != "object" || u.type !== "chapter") return d;
  const f = [e, ...ji(e)];
  if (!(e.getNumber() !== (u.number ?? "") || e.getAltnumber() !== u.altnumber || e.getPubnumber() !== u.pubnumber) && qr(d, i) === Rr(f, i) && js(f, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function H0(e, t, r, n, i) {
  const s = D0(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (k) => {
    B(k) ? c.set(k.getKey(), k) : qe(k) ? l.set(k.getKey(), k) : ve(k) ? d.set(k.getKey(), k) : o.set(k.getKey(), [k]);
  };
  for (const k of t) {
    const _ = se(k);
    if (!_?.isAttached()) continue;
    const v = zs(_);
    if (v) {
      if (p(v), w(_)) {
        const C = ab(_, r.getMarker);
        C && a.push(C);
      }
      if (B(v)) {
        const C = B0(_);
        C && f.set(v.getKey(), C);
      }
    }
  }
  const y = /* @__PURE__ */ new Set();
  for (const [k, _] of a)
    y.has(k.getKey()) || y.has(_.getKey()) || ([k, _].forEach((v) => {
      y.add(v.getKey()), o.delete(v.getKey());
    }), ve(k) ? (d.set(k.getKey(), k), u.set(k.getKey(), [_])) : o.set(k.getKey(), [k, _]));
  if (s) {
    const k = zs(s.node);
    k && !y.has(k.getKey()) && p(k);
  }
  const h = K0(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && d.size === 0 && h.length === 0)
    return;
  const g = new Set(h.map((k) => k.getKey())), b = /* @__PURE__ */ new Map();
  yb(Ke().getChildren(), e.root.children, b);
  for (const k of f.values()) j0(k, b);
  for (const k of c.values()) {
    const _ = b.get(k.getKey()), v = _ ? nr(_.node) : void 0;
    if (!_ || !v) continue;
    const C = F0(k, b, r, g, s);
    if (!C) continue;
    if (C.closedAs) {
      const z = _.siblings.indexOf(_.node);
      if (z < 0) continue;
      const [K, ...ne] = C.closedAs, G = _.node;
      for (const Ce of Object.keys(G)) Reflect.deleteProperty(G, Ce);
      Object.assign(G, K), _.siblings.splice(z + 1, 0, ...ne);
      continue;
    }
    if (C.categoryChanged) {
      const z = _.node;
      C.category === void 0 ? delete z.category : z.category = C.category;
    }
    if (!C.rebuilt) continue;
    const $ = b.get(C.contentNodes[0].getKey());
    if (!$) continue;
    const N = v.indexOf($.node);
    N < 0 || v.splice(N, C.contentNodes.length, ...C.rebuilt);
  }
  for (const k of o.values()) {
    const _ = b.get(k[0].getKey());
    if (!_) continue;
    const v = U0(k, b, r, g, s);
    if (!v) continue;
    const C = _.siblings.indexOf(_.node);
    C < 0 || _.siblings.splice(C, k.length, ...v);
  }
  for (const k of d.values()) {
    const _ = b.get(k.getKey()), v = _ ? nr(_.node) : void 0;
    if (!_ || !v) continue;
    const C = u.get(k.getKey()) ?? [], $ = V0(k, b, r, g, s, C);
    if (!$) continue;
    const N = $.contentNodes.at(0), z = N ? b.get(N.getKey()) : void 0;
    if (N && !z) continue;
    const K = z ? v.indexOf(z.node) : v.length, ne = _.siblings.indexOf(_.node);
    K < 0 || ne < 0 || (v.splice(K, $.contentNodes.length, ...$.rebuilt), _.siblings.splice(ne + 1, C.length, ...$.followingBlocks));
  }
  for (const k of l.values()) {
    const _ = b.get(k.getKey());
    if (!_) continue;
    const v = 1 + ji(k).length, C = W0(k, r, s);
    if (!C) continue;
    const $ = _.siblings.indexOf(_.node);
    $ < 0 || (_.siblings.splice($, v, ...C), QA(_.siblings, $));
  }
  for (const k of h) {
    const _ = b.get(k.getKey());
    if (!_) continue;
    const v = _.siblings.indexOf(_.node);
    if (v < 0) continue;
    _.siblings.splice(v, 1);
    const C = _.siblings[v - 1], $ = _.siblings[v], N = C && Ar(C), z = $ && Ar($);
    C && $ && N !== void 0 && z !== void 0 && z0(C, $) && (C.text = N + z, _.siblings.splice(v, 1));
  }
  return Om(e, r.viewOptions);
}
function G0({
  viewOptions: e,
  logger: t
}) {
  const [r] = ue(), n = vn(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        st,
        (i) => J0(i, t)
      );
  }, [r, n, t]), null;
}
function J0(e, t) {
  e.getMarker() !== Ut && (e.isEmpty() || Ot(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Ut}" (key ${e.getKey()})`
  ), e.setMarker(Ut)));
}
function Y0({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ue(), n = X({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, sa(s, e) || X0(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Kt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = _l(r);
        Ap(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: xo(s) === xo(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        Ke().getChildren().filter(Je).map((c) => c.getKey())
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
        isSameDocumentReload: xo(a) === xo(c)
      }));
    };
    return $e(
      ...[Wt, Lr].map(
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
        return i.phase === "idle" && tN(i, xb()), !1;
      },
      ft
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Ft, void 0));
    };
    return $e(
      r.registerMutationListener(Rt, i),
      r.registerMutationListener(bt, i)
    );
  }, [r]), j(() => {
    const i = () => sN(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function X0(e, t, r) {
  if (Q0(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = _l(t);
  (!n || n === r.book) && t.update(() => Cb(t, r.chapterNum, r.verseNum), {
    tag: At
  });
}
function Q0(e, t) {
  const r = e.pendingEchoes.findIndex((n) => sa(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function xb() {
  const e = P(), t = Qh(e);
  if (!t) return;
  const r = cd(), n = ux(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = fu(t, e), { verseNum: o, verse: a } = i_(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function _l(e) {
  return e.getEditorState().read(() => cd()?.getCode() || void 0);
}
function cd() {
  return Ke().getChildren().find(ve);
}
function Ap(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Sc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Sc(e, t), e.phase = "navigating") : i && Sc(e, t), r && r !== e.scrRef.book && vb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Sc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Cb(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: At }
    );
  });
}
function Cb(e, t, r) {
  const n = P()?.clone();
  Z0(t, r);
  const i = P();
  i && !(n && i.is(n)) && Er(e, At);
}
function Z0(e, t) {
  const r = xb();
  if (r?.chapterNum === e && (r.verse ? Sb(t, r.verse) : r.verseNum === t))
    return;
  const n = Ke().getChildren(), i = Vh(n, e);
  if (!i) return;
  const s = mx(n, i), o = lx(s, !0);
  gx(s, o);
  let a;
  try {
    a = QC(s, t);
  } catch {
    return;
  }
  a && (le(a) ? !M(a.getFirstChild()) && es(a) || rr(a, 0) : eN(a));
}
function eN(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ke(n)) {
    M(e) ? e.selectEnd() : rr(t, r);
    return;
  }
  const i = eo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (M(e)) {
    e.selectEnd();
    return;
  }
  const s = I(n) && !B(n) ? _b(n) : void 0;
  s ? s.select(0, 0) : rr(t, r);
}
function _b(e) {
  const t = e.getFirstChild();
  if (M(t)) return t;
  if (I(t) && !B(t)) return _b(t);
}
function xo(e) {
  return e.read(() => {
    const t = Ke().getChildren().find(Je);
    return `${cd()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function tN(e, t) {
  e.phase !== "navigating" && t && (rN(t, e.scrRef) || vb(e, nN(t, e.scrRef)));
}
function rN(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Sb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Sb(e, t) {
  try {
    return Jl(e, t);
  } catch {
    return !1;
  }
}
function nN(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const iN = 8;
function vb(e, t) {
  return sa(t, e.scrRef) || e.pendingEchoes.some((r) => sa(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > iN && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function sa(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function sN(e) {
  e.phase = "idle";
}
function oN(e) {
  return ve(e) ? `${e.__code}` : qe(e) ? `${e.__marker} "${e.__number}"` : F(e) ? `${e.__marker}` : Gs(e) ? `${e.__marker} "${e.__number}"` : Tt(e) ? `${e.__caller}` : ci(e) ? `${e.__marker} "${e.__number}"` : B(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : le(e) ? `${e.__marker}` : M(e) ? `"${e.__text}"${aN(e)}` : Me(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ue(e) ? `${e.__marker} "${e.__number}"` : "";
}
function aN(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Hs]) : "";
}
function cN() {
  const [e] = ue();
  return /* @__PURE__ */ E(
    Rk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: oN,
      editor: e
    }
  );
}
const Mb = Dp(null), Pp = 4;
function lN({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = X(null), s = Up(Mb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ E("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function uN({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = me(), [s, o] = me(), a = xe(
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
  }, l = Ge(() => ({ registerItem: a }), [a]);
  return j(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ E(Mb.Provider, { value: l, children: /* @__PURE__ */ E("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function dN({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = X(null), c = X(null), [l, d] = me(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: y, left: h } = f.getBoundingClientRect();
      p.style.top = `${y + f.offsetHeight + Pp}px`, p.style.left = `${Math.min(h, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (y) => {
        const h = y.target;
        o && a.current && a.current.contains(h) || f.contains(h) || d(!1);
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
        const p = c.current, y = a.current;
        if (p !== null && y !== null) {
          const { top: h } = p.getBoundingClientRect(), g = h + p.offsetHeight + Pp;
          g !== y.getBoundingClientRect().top && (y.style.top = `${g}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Ne(zn, { children: [
    /* @__PURE__ */ Ne(
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
    l && Fn(
      /* @__PURE__ */ E(uN, { dropDownRef: a, onClose: u, children: s }),
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
function fN({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ E(
    dN,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + pN(t),
      buttonLabel: hN(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Sl).map((n) => /* @__PURE__ */ Ne(
        lN,
        {
          className: "item block-marker " + gN(t === n),
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
function pN(e) {
  return e && e in vl ? e : "ban";
}
function hN(e) {
  return e && e in vl ? vl[e] : "No Style";
}
function gN(e) {
  return e ? "active dropdown-item-active" : "";
}
function Np() {
  return /* @__PURE__ */ E("div", { className: "divider" });
}
const mN = Cn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ue(), [o, a] = me(s), [c, l] = me(), [d, u] = me(!1), [f, p] = me(!1), y = xe(
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
  return j(() => s.registerCommand(
    Ft,
    (h, g) => (a(g), !1),
    _e
  ), [s]), /* @__PURE__ */ Ne(zn, { children: [
    /* @__PURE__ */ E(Tm, { onStateChange: y }),
    /* @__PURE__ */ Ne("div", { className: "toolbar", children: [
      /* @__PURE__ */ E(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(eh, void 0);
          },
          title: Ri ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(th, void 0);
          },
          title: Ri ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ E("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ E(Np, {}),
      o === s && /* @__PURE__ */ Ne(zn, { children: [
        /* @__PURE__ */ E(
          fN,
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
}), yN = Ui(), bN = {}, kN = {};
function TN() {
  return /* @__PURE__ */ E("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function vc(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function wp(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = I(n) ? n.getLastDescendant() ?? n : n;
  return _a(r, i);
}
function Op(e, t, r) {
  Ik(e, () => Hn(t));
  const n = P();
  if (!A(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    le(o) && i.add(o);
  }), i.forEach((s) => eb(s, t, r));
}
const Eb = Cn(function({
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
  const u = X(null), f = X(null), p = X(null), y = X(null), h = X(t), g = X(void 0), b = X(void 0), k = X(void 0), _ = X(void 0), v = X(!1), [C, $] = me(t), [N, z] = me(0), [K, ne] = me(), {
    isReadonly: G = !1,
    structureProtectionMode: Ce = "off",
    hasExternalUI: re = !1,
    hasSpellCheck: q = !1,
    textDirection: H = "ltr",
    markerMenuTrigger: ye = "\\",
    view: he,
    nodes: ot,
    debug: Ur = !1,
    contextMenu: Mn,
    styleInfo: ee,
    markerSettleDelayMs: R,
    copyLimit: te
  } = a ?? kN, de = he ?? yN, Re = $s(de) && (de.markerMode !== "hidden" || !de.hasSpacing || de.hasGutterParaMarkers || de.hasActiveTextFocusBox) ? {
    ...de,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : de, dt = X(Re);
  Dt(dt.current, Re) || (dt.current = Re);
  const Z = dt.current, Xe = Ge(() => ot ?? bN, [ot]), Tr = Ge(() => Mn, [Mn]), ts = Ge(
    () => lu(ee ?? Li),
    [ee]
  ), rn = X(c);
  Dt(rn.current, c) || (rn.current = c);
  const oe = rn.current, mt = $s(Z), ge = G || mt, li = Re !== de;
  j(() => {
    mt && !G && oe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), li && oe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), Z?.markerMode === "visible" && !G && oe?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [mt, G, li, oe, Z?.markerMode]);
  const Ee = X(null), En = Ge(() => {
    if (Z.markerMode !== "editable") return;
    const O = ee ?? Li;
    return {
      getContext: () => Ee.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (L) => z1(
        O,
        L,
        Xe.extraValidMarkers
      ),
      getEnterItems: (L) => K1(
        O,
        L,
        Xe.extraValidMarkers
      ),
      apply: (L, W) => {
        const J = Ee.current;
        J && (W.trigger === "enter" ? J.splitParagraphWithMarker(L.marker) : J.applyMarkerMenuSelection(L, W));
      },
      commitTypedCloser: (L) => {
        Ee.current?.commitTypedCloser(L);
      }
    };
  }, [Z, ee, Xe.extraValidMarkers]), ui = (O) => {
    v.current || (v.current = !0, rn.current?.warn(
      `Editor: cannot ${O} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, ir = (O) => {
    if (mt)
      throw new Error(
        `Cannot ${O} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, nn = (O) => {
    if (ir(O), ge) throw new Error(`Cannot ${O} in readonly mode`);
  }, sn = () => !!u.current && Du(u.current), io = Ge(
    () => ({
      namespace: "platformEditor",
      theme: { ...Jy, showCharMarkerTitles: Z.showCharMarkerTitles },
      editable: !ge,
      editorState: void 0,
      // Handling of errors during update
      onError(O) {
        throw O;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [lt, ...mt ? uS : _u]
    }),
    [ge, mt, Z.showCharMarkerTitles]
  );
  So.initialize(oe);
  function on(O) {
    if (O !== void 0 && !e1(O, Xe.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const $t = xe(() => {
    const O = u.current;
    if (!O) return h.current;
    const L = Wd(O), W = b.current;
    if ((!L || L.size === 0) && !W) return h.current;
    const J = O.getEditorState(), pe = J.toJSON();
    return J.read(
      () => H0(
        pe,
        L ?? /* @__PURE__ */ new Set(),
        { viewOptions: Z, getMarker: ts, logger: oe },
        W,
        k.current
      )
    ) ?? h.current;
  }, [Z, ts, oe]);
  function sr(O, L, W) {
    if (mt && L === "remote") {
      rn.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    ir("apply an update");
    const J = sn(), pe = !J && u.current ? Er(u.current, cr) : void 0;
    u.current?.update(
      () => {
        L === "remote" && Ct(vs), J || Ct(cr), W && Ct(W), LS(O, Z, Xe, oe);
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
          pe?.(), !J && u.current && uc(u.current);
          const Qe = u.current?.getEditorState();
          if (!Qe) return;
          const Ie = So.deserializeEditorState(Qe, Z);
          if (Ie) {
            const Ze = !Dt(h.current, Ie);
            if (Ze && (h.current = Ie), Ze || !Dt(C, Ie)) {
              const It = nf(O, Qe, "apply");
              _.current = Ie, s?.(Ie, O, L, It);
            }
          }
        }
      }
    );
  }
  const xr = {
    focus() {
      u.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return sn();
    },
    undo() {
      u.current?.dispatchCommand(eh, void 0);
    },
    redo() {
      u.current?.dispatchCommand(th, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      nn("cut"), u.current && $u(u.current);
    },
    copy() {
      u.current && qu(u.current);
    },
    paste() {
      nn("paste"), u.current && Iu(u.current);
    },
    pastePlainText() {
      nn("paste as plain text"), u.current && Lu(u.current);
    },
    getUsj() {
      return $t();
    },
    commitPendingMarkerEdits() {
      const O = u.current;
      if (!O) return;
      const L = !sn(), W = L ? Er(O, cr) : void 0;
      O.update(
        () => {
          L && Ct(cr), O.dispatchCommand(hb, void 0);
        },
        { discrete: !0 }
      ), W?.(), L && uc(O);
    },
    setMarkerSettleSuspended(O) {
      u.current?.dispatchCommand(gb, O);
    },
    setTransientInput(O) {
      if (!O) {
        b.current = void 0;
        return;
      }
      const L = u.current?.getEditorState().read(() => {
        const W = P();
        return A(W) && W.isCollapsed() ? W.focus.key : void 0;
      });
      b.current = { input: O, nodeKey: L ?? k.current?.key };
    },
    setUsj(O, L) {
      const W = Dt(h.current, O) || Dt($t(), O);
      if (L?.force || !W) {
        h.current = O, b.current = void 0;
        const J = Dt(C, O);
        $(O), J && z((pe) => pe + 1);
      }
    },
    applyUpdate(O, L = "remote") {
      sr(O, L);
    },
    replaceEmbedUpdate(O, L) {
      const W = u.current?.read(() => m_(O, L));
      W ? this.applyUpdate(W) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${O}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (mt) {
        ui("get the selection");
        return;
      }
      return u.current?.read(bu);
    },
    setSelection(O) {
      if (mt) {
        ui("set the selection");
        return;
      }
      u.current?.update(() => {
        const L = va(O);
        L !== void 0 && (Br(L), Ct(dh));
      });
    },
    setAnnotation(O, L, W, J, pe) {
      if (mt) {
        ui("set an annotation");
        return;
      }
      let Qe, Ie, Ze, It;
      typeof J == "function" || J === void 0 ? (Qe = J, Ie = pe) : (Qe = J.onClick, Ie = J.onRemove, Ze = J.onMouseEnter, It = J.onMouseLeave), f.current?.setAnnotation(
        O,
        $d(L),
        W,
        Qe,
        Ie,
        Ze,
        It
      );
    },
    removeAnnotation(O, L) {
      f.current?.removeAnnotation($d(O), L);
    },
    formatPara(O) {
      nn("format a paragraph"), u.current?.update(
        () => {
          const L = P();
          if (!A(L)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const W = L.isBackward() ? L.focus : L.anchor, J = we(W.getNode(), ve);
          if (J) {
            const pe = L.isBackward() ? L.anchor : L.focus, Ie = !L.isCollapsed() && !J.is(pe.getNode()) && !J.isParentOf(pe.getNode()) ? { key: pe.key, offset: pe.offset, type: pe.type } : void 0, Ze = Bn();
            if (Ze.anchor.set(W.key, W.offset, W.type), Ze.focus.set(W.key, W.offset, W.type), Br(Ze), !xl(O, Z)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${O}"`
              );
              return;
            }
            if (!Ie) return;
            const It = se(Ie.key);
            if (!It?.isAttached()) return;
            const Pn = It.getTopLevelElement();
            if (!Pn) return;
            const Fr = J.getNextSibling();
            if (!le(Fr)) return;
            let nt = Fr.getNextSibling();
            for (; nt; ) {
              const ns = nt.is(Pn), so = nt.getNextSibling();
              if (le(nt)) {
                const Nn = Bn();
                Nn.anchor.set(nt.getKey(), 0, "element"), Nn.focus.set(nt.getKey(), nt.getChildrenSize(), "element"), Br(Nn), Op(Nn, O, Z);
              }
              if (ns) break;
              nt = so;
            }
            return;
          }
          Op(L, O, Z);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(O) {
      return u.current?.read(
        () => u.current?.getElementByKey(O) ?? void 0
      );
    },
    removeCharacterMarker(O) {
      if (ge) throw new Error("Cannot remove character marker in readonly mode");
      on(O);
      let L = !1;
      return u.current?.update(
        () => {
          const W = P();
          A(W) && (L = By(W, O, Z));
        },
        { discrete: !0 }
      ), L;
    },
    replaceCharacterMarker(O, L) {
      if (ge) throw new Error("Cannot replace character marker in readonly mode");
      on(O), on(L);
      let W = !1;
      return u.current?.update(
        () => {
          const J = P();
          A(J) && (W = f1(J, O, L));
        },
        { discrete: !0 }
      ), W;
    },
    extendCharacterMarker(O, L) {
      if (ge) throw new Error("Cannot extend character marker in readonly mode");
      on(O), L?.forEach(
        (J) => on(J)
      );
      let W = !1;
      return u.current?.update(
        () => {
          const J = P();
          A(J) && (W = p1(
            J,
            O,
            L,
            Z
          ));
        },
        { discrete: !0 }
      ), W;
    },
    insertMarker(O) {
      if (ge) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!pl(O, Xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const L = hl(
        O,
        g,
        Z,
        Xe,
        oe,
        void 0,
        ee
      );
      return L.action({ editor: u.current, reference: r }), L.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!G)
        return u.current?.getEditorState().read(() => Q1());
    },
    applyMarkerMenuSelection(O, L) {
      if (G) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (O.kind !== "closeTag" && !pl(O.marker, Xe.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let W;
      return u.current.update(() => {
        W = a0(O, L, r, {
          expandedNoteKeyRef: g,
          viewOptions: Z,
          nodeOptions: Xe,
          logger: c,
          styleInfo: ee
        });
      }), W;
    },
    splitParagraphWithMarker(O) {
      if (G) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        xl(O, Z);
      });
    },
    commitTypedMarker(O, L) {
      if (G) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let W = !1;
      return u.current.update(() => {
        W = s0(O, L), W || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), W;
    },
    commitTypedCloser(O) {
      if (G) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let L = !1;
      return u.current.update(() => {
        L = ob(O), L || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), L;
    },
    insertNote(O, L, W) {
      nn("insert a note"), u.current?.update(
        () => {
          const J = Fg(
            O,
            L,
            W,
            r,
            Z,
            Xe,
            oe
          );
          vc(J, g);
        },
        { discrete: !0 }
      );
    },
    selectNote(O) {
      u.current?.update(() => {
        const L = vr(O);
        L && (Wc(L, Z), vc(L, g));
      });
    },
    selectAfterNote(O) {
      const L = u.current;
      if (!L) return;
      const W = !sn(), J = W ? Er(L, cr) : void 0;
      if (L.update(
        () => {
          W && Ct(cr);
          const pe = vr(O);
          pe && Kg(pe);
        },
        { discrete: !0 }
      ), J?.(), W) {
        uc(L);
        const pe = Er(
          L,
          cr
        );
        L.update(
          () => {
            Ct(cr), L.dispatchCommand(Ft, void 0);
          },
          { discrete: !0 }
        ), pe();
      }
    },
    selectNoteTextOffset(O, L, W) {
      u.current?.update(() => {
        const J = vr(O);
        if (!J) return;
        const pe = W?.glyph;
        (W?.field === "category" ? sS(J, L, pe) || uf(J, 0) : uf(J, L, pe)) || Wc(J, Z), vc(J, g);
      });
    },
    getNoteOps(O) {
      const L = u.current;
      return L ? Ci(L, () => {
        const W = vr(O);
        if (W)
          return _a(W);
      }) : void 0;
    },
    getOpsAfterNote(O) {
      const L = u.current;
      return L ? Ci(L, () => {
        const W = vr(O);
        return W ? wp(W) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(O) {
      const L = u.current, W = L ? Ci(L, () => {
        const Ie = vr(O);
        if (!Ie) return;
        const Ze = hu(Ie, "apply");
        return { ops: wp(Ie), notePosition: Ze };
      }) : void 0;
      if (!W) return;
      const { ops: J, notePosition: pe } = W;
      if (J.length === 0 || pe === void 0) return J;
      const Qe = J.reduce(
        (Ie, Ze) => Ie + (typeof Ze.insert == "string" ? Ze.insert.length : 1),
        0
      );
      return sr([{ retain: pe + 1 }, { delete: Qe }], "remote", Pl), J;
    },
    getNoteIndex(O) {
      const L = u.current;
      return L ? Ci(L, () => mu(O)) : void 0;
    },
    getNoteKey(O) {
      const L = u.current;
      return L ? Ci(L, () => vr(O)?.getKey()) : void 0;
    },
    highlightNote(O) {
      p.current?.setHighlightedNote(O);
    },
    get toolbarEndRef() {
      return y;
    }
  };
  Ee.current = xr, aa(d, () => xr), j(() => {
    const O = u.current;
    if (O)
      return O.registerUpdateListener(({ editorState: L }) => {
        L.read(() => {
          const W = P();
          if (!A(W) || !W.isCollapsed()) return;
          const J = W.focus.getNode();
          M(J) && (k.current = { key: J.getKey(), offset: W.focus.offset });
        });
      });
  }, []);
  const rs = xe(
    (O, L, W, J, pe) => {
      if (mt) return;
      const Qe = So.deserializeEditorState(O, Z);
      if (Qe) {
        const Ie = !Dt(h.current, Qe);
        if (Ie && (h.current = Qe), Ie || !Dt(C, Qe)) {
          const Ze = nf(J, O), It = Ze && !pe.read(() => se(Ze)) ? Ze : void 0;
          _.current = Qe, s?.(Qe, J, "local", It);
        }
      }
    },
    [C, s, Z, mt]
  );
  j(() => {
    const O = u.current;
    if (!(!O || !s))
      return O.registerUpdateListener(({ tags: L, dirtyElements: W, dirtyLeaves: J }) => {
        !L.has(ql) && (W.size === 0 && J.size === 0 || L.has(vs) || !Wd(O)?.size) || queueMicrotask(() => {
          const pe = $t();
          !pe || Dt(_.current, pe) || (_.current = pe, s(pe, void 0, "local", void 0));
        });
      });
  }, [s, $t]);
  const An = xe(
    (O) => {
      ne(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Ne(nh, { initialConfig: io, children: [
      /* @__PURE__ */ E(Vv, { isEditable: !ge }),
      /* @__PURE__ */ Ne("div", { className: "editor-container", children: [
        re ? /* @__PURE__ */ E(Tm, { onStateChange: An }) : /* @__PURE__ */ E(
          "div",
          {
            className: "editor-toolbar-container" + (ge ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ E(
              mN,
              {
                ref: y,
                editorRef: Ee,
                isReadonly: ge,
                onStateChange: An
              }
            )
          }
        ),
        /* @__PURE__ */ Ne("div", { className: "editor-inner", children: [
          /* @__PURE__ */ E(sh, { editorRef: u }),
          /* @__PURE__ */ E(
            $k,
            {
              contentEditable: /* @__PURE__ */ E(
                ih,
                {
                  className: `editor-input usfm ${IS(Z).join(" ")}${Z.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${Z.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: q
                }
              ),
              placeholder: /* @__PURE__ */ E(TN, {}),
              ErrorBoundary: oh
            }
          ),
          re && /* @__PURE__ */ E(jv, {}),
          /* @__PURE__ */ E(ah, {}),
          r && n && /* @__PURE__ */ E(Y0, { scrRef: r, onScrRefChange: n }),
          r && !re && /* @__PURE__ */ E(
            xE,
            {
              trigger: ye,
              scrRef: r,
              contextMarker: K,
              getMarkerAction: (O) => hl(
                O,
                g,
                Z,
                Xe,
                oe,
                void 0,
                ee
              ),
              editableHarness: En
            }
          ),
          /* @__PURE__ */ E(
            Yv,
            {
              scripture: C,
              scriptureRef: h,
              nodeOptions: Xe,
              editorAdaptor: mr,
              viewOptions: Z,
              logger: oe
            },
            N
          ),
          /* @__PURE__ */ E(bM, { onChange: i }),
          /* @__PURE__ */ E(
            NS,
            {
              onChange: rs,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: nT
            }
          ),
          /* @__PURE__ */ E(b1, { viewOptions: Z }),
          /* @__PURE__ */ E(AS, { ref: f, logger: oe }),
          /* @__PURE__ */ E(fv, { viewOptions: Z }),
          /* @__PURE__ */ E(Mv, {}),
          /* @__PURE__ */ E(Ov, {}),
          Z?.markerMode !== "editable" && /* @__PURE__ */ E(Rv, { logger: oe }),
          /* @__PURE__ */ E(Dv, { options: Tr }),
          /* @__PURE__ */ E(v1, { limit: te, viewOptions: Z }),
          /* @__PURE__ */ E(Bv, {}),
          /* @__PURE__ */ E(Hv, {}),
          /* @__PURE__ */ E(Jv, {}),
          /* @__PURE__ */ E(c0, {}),
          /* @__PURE__ */ E(
            w0,
            {
              viewOptions: Z,
              getMarker: ts,
              logger: oe,
              markerSettleDelayMs: R,
              structureProtectionMode: Ce,
              copyLimit: te
            }
          ),
          Z?.markerMode === "visible" && /* @__PURE__ */ E(S1, { viewOptions: Z, copyLimit: te }),
          /* @__PURE__ */ E(
            L0,
            {
              styleInfo: ee,
              viewOptions: Z,
              logger: oe
            }
          ),
          /* @__PURE__ */ E(Xv, { ref: p }),
          /* @__PURE__ */ E(
            Qv,
            {
              expandedNoteKeyRef: g,
              nodeOptions: Xe,
              viewOptions: Z,
              logger: oe
            }
          ),
          /* @__PURE__ */ E(yM, {}),
          /* @__PURE__ */ E(av, {}),
          /* @__PURE__ */ E(nv, {}),
          /* @__PURE__ */ E(G0, { viewOptions: Z, logger: oe }),
          /* @__PURE__ */ E(kM, {}),
          /* @__PURE__ */ E(iE, { structureProtectionMode: Ce }),
          /* @__PURE__ */ E(sE, { textDirection: H }),
          /* @__PURE__ */ E(aE, {}),
          /* @__PURE__ */ E(kE, {}),
          l
        ] }),
        Ur && /* @__PURE__ */ E(cN, {})
      ] })
    ] }, Z.verseLayout ?? "inline")
  );
}), Pw = Cn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ E(Eb, { ref: r, ...i });
});
function Ab() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function oa(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Ab() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Pb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Ab() : r,
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
function xN(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Mc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class CN {
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
    this._comments = t, Mc(this);
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
    this._comments = i, Mc(this);
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
    return this._comments = n, Mc(this), t.type === "comment" ? {
      index: s,
      markedComment: xN(t)
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
    return t !== null ? t.doc.get("comments", Cd) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new _d(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Cd();
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
      Xk,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      ft
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Qk) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const y = p.insert, h = p.retain, g = p.delete, b = d.parent, k = d === r ? void 0 : b instanceof _d && this._comments.find((_) => _.id === b.get("id"));
              if (Array.isArray(y)) {
                const _ = f;
                y.slice().reverse().forEach((v) => {
                  const C = v.get("id"), N = v.get("type") === "thread" ? Pb(
                    v.get("quote"),
                    v.get("comments").toArray().map(
                      (z) => oa(
                        z.get("content"),
                        z.get("author"),
                        z.get("id"),
                        z.get("timeStamp"),
                        z.get("deleted")
                      )
                    ),
                    C
                  ) : oa(
                    v.get("content"),
                    v.get("author"),
                    C,
                    v.get("timeStamp"),
                    v.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(N, k, _);
                  });
                });
              } else if (typeof h == "number")
                f += h;
              else if (typeof g == "number")
                for (let _ = 0; _ < g; _++) {
                  const v = k === void 0 || k === !1 ? this._comments[f] : k.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(v, k);
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
function SN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = X(null);
  return j(() => {
    i.current !== null && i.current.focus();
  }, []), j(() => {
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
  }, [n, e]), /* @__PURE__ */ E("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Ne("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function vN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Fn(
    /* @__PURE__ */ E(SN, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Nb() {
  const [e, t] = me(null), r = xe(() => {
    t(null);
  }, []), n = Ge(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ E(vN, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const MN = {
  ...Jy,
  paragraph: "CommentEditorTheme__paragraph"
};
function EN(...e) {
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
      className: EN(
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
function AN({
  className: e
}) {
  return /* @__PURE__ */ E(ih, { className: e || "ContentEditable__root" });
}
function PN({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ E("div", { className: t || "Placeholder__root", children: e });
}
const qp = Rl("INSERT_INLINE_COMMAND");
function NN({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = X(null), s = xe(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Vs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ E("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ E("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ E("i", { className: "icon add-comment" }) }) });
}
function wN({ onEscape: e }) {
  const [t] = ue();
  return j(() => t.registerCommand(
    Zp,
    (r) => e(r),
    Pr
  ), [t, e]), null;
}
function wb({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ E(nh, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: MN
  }, children: /* @__PURE__ */ Ne("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ E(
      Gk,
      {
        contentEditable: /* @__PURE__ */ E(AN, { className: e }),
        placeholder: /* @__PURE__ */ E(PN, { children: s }),
        ErrorBoundary: oh
      }
    ),
    /* @__PURE__ */ E(Hk, { onChange: n }),
    /* @__PURE__ */ E(ah, {}),
    t !== !1 && /* @__PURE__ */ E(jk, {}),
    /* @__PURE__ */ E(wN, { onEscape: r }),
    /* @__PURE__ */ E(Vk, {}),
    i !== void 0 && /* @__PURE__ */ E(sh, { editorRef: i })
  ] }) });
}
function Ob(e, t) {
  return xe(
    (r, n) => {
      r.read(() => {
        e(Jk()), t(!Yk(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function ON({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = me(""), [s, o] = me(!1), a = X(null), c = Ge(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = X(null), d = qb(), u = xe(() => {
    e.getEditorState().read(() => {
      const h = P();
      if (A(h)) {
        l.current = h.clone();
        const g = h.anchor, b = h.focus, k = Lk(
          e,
          g.getNode(),
          g.offset,
          b.getNode(),
          b.offset
        ), _ = a.current;
        if (k !== null && _ !== null) {
          const { left: v, bottom: C, width: $ } = k.getBoundingClientRect(), N = Dk(e, k);
          let z = N.length === 1 ? v + $ / 2 - 125 : v - 125;
          z < 10 && (z = 10), _.style.left = `${z}px`, _.style.top = `${C + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const K = N.length, { container: ne } = c, G = c.elements, Ce = G.length;
          for (let re = 0; re < K; re++) {
            const q = N[re];
            let H = G[re];
            H === void 0 && (H = document.createElement("span"), G[re] = H, ne.appendChild(H));
            const he = `position:absolute;top:${q.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${q.left}px;height:${q.height}px;width:${q.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            H.style.cssText = he;
          }
          for (let re = Ce - 1; re >= K; re--) {
            const q = G[re];
            ne.removeChild(q), G.pop();
          }
        }
      }
    });
  }, [e, c]);
  Vs(() => {
    u();
    const h = c.container, g = document.body;
    return g !== null ? (g.appendChild(h), () => {
      g.removeChild(h);
    }) : () => {
    };
  }, [c.container, u]), j(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (h) => (h.preventDefault(), t(), !0), p = () => {
    if (s) {
      let h = e.getEditorState().read(() => {
        const g = l.current;
        return g ? g.getTextContent() : "";
      });
      h.length > 100 && (h = h.slice(0, 99) + "…"), r(
        Pb(h, [oa(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, y = Ob(i, o);
  return /* @__PURE__ */ Ne("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ E(
      wb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: y
      }
    ),
    /* @__PURE__ */ Ne("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
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
function RN({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = me(""), [s, o] = me(!1), a = X(null), c = qb(), l = Ob(i, o);
  return /* @__PURE__ */ Ne(zn, { children: [
    /* @__PURE__ */ E(
      wb,
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
            e(oa(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(Ak, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ E("i", { className: "send" })
      }
    )
  ] });
}
function Rb({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Ne(zn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Ne("div", { className: "Modal__content", children: [
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
function $p({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = me(0);
  j(() => {
    const d = () => {
      s(performance.timeOrigin + performance.now());
    };
    d();
    const u = window.setInterval(d, 6e4);
    return () => {
      window.clearInterval(u);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Nb();
  return /* @__PURE__ */ Ne("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Ne("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ E("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Ne("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ E("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Ne(zn, { children: [
      /* @__PURE__ */ E(
        xn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ E(
              Rb,
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
function qN({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ue(), [a, c] = me(0), [l, d] = Nb(), u = Ge(
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
    return f.type === "thread" ? /* @__PURE__ */ Ne(
      "li",
      {
        onClick: () => {
          const h = s.get(p);
          if (h !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const g = document.activeElement;
            o.update(
              () => {
                const b = Array.from(h)[0], k = se(b);
                Me(k) && k.selectStart();
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
          /* @__PURE__ */ Ne("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Ne("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ E("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ E(
              xn,
              {
                onClick: () => {
                  d("Delete Thread", (h) => /* @__PURE__ */ E(
                    Rb,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: h
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ E("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ E("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((h) => /* @__PURE__ */ E(
            $p,
            {
              comment: h,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            h.id
          )) }),
          /* @__PURE__ */ E("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ E(
            RN,
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
        rtf: u
      },
      p
    );
  }) });
}
function $N({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = X(null), o = r.length === 0;
  return /* @__PURE__ */ Ne("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ E("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ E("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ E(
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
function qb() {
  const e = ch(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function IN({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = ch(), [a] = ue(), c = Ge(() => {
    const z = new CN(a, s);
    return r && z.registerOnChange(r), t?.(z), z;
  }, [a, s, r, t]), l = _N(c), d = Ge(() => /* @__PURE__ */ new Map(), []), [u, f] = me(), [p, y] = me([]), [h, g] = me(!1), [b, k] = me(!1), { yjsDocMap: _ } = o;
  j(() => {
    if (e) {
      const z = e("comments", _);
      return c.registerCollaboration(z);
    }
    return () => {
    };
  }, [c, e, _]);
  const v = xe(() => {
    a.update(() => {
      const z = P();
      z !== null && (z.dirty = !0);
    }), g(!1);
  }, [a]), C = xe(
    (z, K) => {
      if (z.type === "comment") {
        const ne = c.deleteCommentOrThread(z, K);
        if (!ne)
          return;
        const { markedComment: G, index: Ce } = ne;
        c.addComment(G, K, Ce);
      } else {
        c.deleteCommentOrThread(z);
        const ne = K !== void 0 ? K.id : z.id, G = d.get(ne);
        G !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Ce of G) {
              const re = se(Ce);
              Me(re) && (re.deleteID(pn, ne), re.hasNoIDsForEveryType() && Oo(re));
            }
          });
        });
      }
    },
    [c, a, d]
  ), $ = xe(
    (z, K, ne, G) => {
      c.addComment(z, ne), K && (a.update(() => {
        A(G) && vh(G, pn, z.id);
      }), g(!1));
    },
    [c, a]
  );
  j(() => {
    const z = [];
    let K;
    for (const ne of p) {
      const G = d.get(ne);
      if (G !== void 0)
        for (const Ce of G) {
          const re = a.getElementByKey(Ce);
          re !== null && (re.classList.add("selected"), z.push(re), K = window.setTimeout(() => {
            k(!0);
          }, 0));
        }
    }
    return () => {
      K !== void 0 && window.clearTimeout(K);
      for (const ne of z)
        ne.classList.remove("selected");
    };
  }, [p, a, d]), j(() => {
    if (!a.hasNodes([lt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const z = /* @__PURE__ */ new Map();
    return $e(
      rh(
        a,
        lt,
        (K) => Es(K.getTypedIDs()),
        (K, ne) => {
          for (const [G, Ce] of Object.entries(K.getTypedIDs()))
            Ce.forEach((re) => {
              ne.addID(G, re);
            });
        }
      ),
      a.registerMutationListener(
        lt,
        (K) => {
          a.getEditorState().read(() => {
            for (const [ne, G] of K) {
              const Ce = se(ne);
              let re = [];
              G === "destroyed" ? re = z.get(ne) ?? [] : Me(Ce) && (re = Ce.getTypedIDs()[pn] ?? []);
              for (const q of re) {
                let H = d.get(q);
                z.set(ne, re), G === "destroyed" ? H !== void 0 && (H.delete(ne), H.size === 0 && d.delete(q)) : (H === void 0 && (H = /* @__PURE__ */ new Set(), d.set(q, H)), H.has(ne) || H.add(ne));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: K, tags: ne }) => {
        K.read(() => {
          const G = P();
          let Ce = !1, re = !1;
          if (A(G)) {
            const q = G.anchor.getNode();
            if (M(q)) {
              const H = UT(q, pn, G.anchor.offset) ?? [];
              H !== null && (y(H), Ce = !0), G.isCollapsed() || (f(q.getKey()), re = !0);
            }
          }
          Ce || y((q) => q.length === 0 ? q : []), re || f(null), !ne.has("collaboration") && A(G) && g(!1);
        });
      }),
      a.registerCommand(
        qp,
        () => {
          const K = window.getSelection();
          return K !== null && K.removeAllRanges(), g(!0), !0;
        },
        jn
      )
    );
  }, [a, d]);
  const N = () => {
    a.dispatchCommand(qp, void 0);
  };
  return /* @__PURE__ */ Ne(zn, { children: [
    h && Fn(
      /* @__PURE__ */ E(
        ON,
        {
          editor: a,
          cancelAddComment: v,
          submitAddComment: $
        }
      ),
      document.body
    ),
    u != null && !h && Fn(
      /* @__PURE__ */ E(
        NN,
        {
          anchorKey: u,
          editor: a,
          showComments: b,
          onAddComment: N
        }
      ),
      document.body
    ),
    n !== null && Fn(
      /* @__PURE__ */ E(
        xn,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => k(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ E("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && Fn(
      /* @__PURE__ */ E(
        $N,
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
function LN() {
  const e = X(void 0), t = xe((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function DN(e, t) {
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
function UN(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      DN(r, t);
    };
  }, [t, e]);
}
const Nw = Cn(function(t, r) {
  const n = X(null), i = X(!0), s = X(null), [o, a] = me(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: y, view: h } = {} } = t, g = (y ?? !1) || $s(h), [b, k] = LN();
  UN(f, b), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const C = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(C), p || console.warn(C);
    }
  }, [p]), aa(r, () => ({
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
    setMarkerSettleSuspended(C) {
      n.current?.setMarkerSettleSuspended(C);
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
    setAnnotation(C, $, N, z, K) {
      typeof z == "function" || z === void 0 ? n.current?.setAnnotation(C, $, N, z, K) : n.current?.setAnnotation(C, $, N, z);
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
    insertNote(C, $, N) {
      n.current?.insertNote(C, $, N);
    },
    selectNote(C) {
      n.current?.selectNote(C);
    },
    selectAfterNote(C) {
      n.current?.selectAfterNote(C);
    },
    selectNoteTextOffset(C, $, N) {
      n.current?.selectNoteTextOffset(C, $, N);
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
  const _ = xe(
    (C, $, N, z) => {
      if (!d) return;
      const K = b.current?.getComments();
      d(C, K, $, N, z);
    },
    [b, d]
  ), v = xe(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const C = b.current?.getComments();
    l(C);
  }, [b, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ E(Wk, { children: /* @__PURE__ */ Ne(Eb, { ref: n, onUsjChange: _, ...f, children: [
    /* @__PURE__ */ E(
      IN,
      {
        setCommentStore: k,
        onChange: v,
        showCommentsContainerRef: g ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ E("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Un(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function FN(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function zN(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const KN = /^[#\w().,%/\s-]+$/;
function Kr(e) {
  return e != null;
}
const BN = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, jN = {
  left: "right",
  right: "left"
}, VN = "var(--usj-font-fallback, serif)";
function $b(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${FN(i)}"`).join(", ")}, ${VN}`;
}
const Ml = ".editor-input.usfm", WN = /^[\w.#[\]="':()>+~*,\s-]+$/;
function HN(e) {
  return WN.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Ml}".`
  ), Ml);
}
function GN(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push($b(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (KN.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Kr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Kr(t.firstLineIndent) && s.push(`text-indent: ${Un(t.firstLineIndent * 20 * r)}vw`), Kr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Un(t.leftMargin * 20 * r)}vw`), Kr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Un(t.rightMargin * 20 * r)}vw`
  ), Kr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Un(t.spaceBefore * r)}pt`), Kr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Un(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = BN[n ? jN[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Ip = { c: 150, ca: 133, cp: 150 };
function Lp(e, t) {
  return e && Kr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function JN(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Kr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Lp(e.markers.c, Ip.c);
  return ["ca", "cp"].map((i) => {
    const s = Lp(
      e.markers[i],
      Ip[i]
    ), o = Un(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function ww(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Ml } = t, s = HN(i), o = [], a = [];
  e.defaultFont && a.push($b(e.defaultFont)), Kr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Un(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = GN(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${zN(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...JN(e, s)), o.join(`
`);
}
export {
  Xg as BLOCK_VERSE_VIEW_MODE,
  x as CategoryType,
  Pw as Editorial,
  Ss as GENERATOR_NOTE_CALLER,
  uh as HIDDEN_NOTE_CALLER,
  Nw as Marginal,
  T as MarkerType,
  Yg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Mu as STANDARD_VIEW_MODE,
  Li as defaultStyleInfo,
  Aw as directionToNames,
  kS as filterAndRankItems,
  ww as generateUsjCss,
  Mw as getDefaultViewMode,
  Ui as getDefaultViewOptions,
  K1 as getEnterMenuItems,
  z1 as getMarkerMenuItems,
  Ew as getViewMode,
  Pu as getViewOptions,
  $s as isBlockVerseLayout,
  dn as isInsertEmbedOpOfType,
  OS as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
